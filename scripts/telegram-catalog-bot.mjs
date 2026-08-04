import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = process.cwd();
const envPath = resolve(root, ".env.telegram");
const statePath = resolve(root, ".data/telegram-bot-offset.json");
const masterRequestsPath = resolve(root, ".data/telegram-master-requests.json");
const catalogPath = resolve(root, "app/data/spareParts.ts");
const siteUrl = "https://remontkotlov48.ru";

function parseEnv(source) {
  return Object.fromEntries(source.split(/\r?\n/).flatMap((line) => {
    const match = line.match(/^([A-Z][A-Z0-9_]*)=(.*)$/);
    return match ? [[match[1], match[2].trim()]] : [];
  }));
}

const config = parseEnv(await readFile(envPath, "utf8"));
const token = config.TELEGRAM_BOT_TOKEN;
const ordersChatId = config.TELEGRAM_ORDERS_CHAT_ID;
const botUsername = config.TELEGRAM_BOT_USERNAME;

if (!token || !ordersChatId || !botUsername) {
  throw new Error("В .env.telegram нужны TELEGRAM_BOT_TOKEN, TELEGRAM_ORDERS_CHAT_ID и TELEGRAM_BOT_USERNAME.");
}

async function api(method, body = {}) {
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  const payload = await response.json();
  if (!payload.ok) throw new Error(`${method}: ${payload.description ?? response.status}`);
  return payload.result;
}

async function readOffset() {
  try {
    return JSON.parse(await readFile(statePath, "utf8")).offset;
  } catch {
    return undefined;
  }
}

async function writeOffset(offset) {
  await mkdir(dirname(statePath), { recursive: true });
  await writeFile(statePath, JSON.stringify({ offset }), "utf8");
}

async function readMasterRequests() {
  try {
    const data = JSON.parse(await readFile(masterRequestsPath, "utf8"));
    return new Set(Array.isArray(data.chatIds) ? data.chatIds.map(String) : []);
  } catch {
    return new Set();
  }
}

async function writeMasterRequests(chatIds) {
  await mkdir(dirname(masterRequestsPath), { recursive: true });
  await writeFile(masterRequestsPath, JSON.stringify({ chatIds: [...chatIds] }), "utf8");
}

async function loadCatalog() {
  const source = await readFile(catalogPath, "utf8");
  const catalog = new Map();
  const brandPattern = /\{ slug: "([a-z0-9-]+)"[\s\S]*?parts: parts\("[^"]+", \[/g;
  const brands = [...source.matchAll(brandPattern)];
  for (const [index, brand] of brands.entries()) {
    const end = source.indexOf("]) },", brand.index);
    const block = source.slice(brand.index, end === -1 ? source.length : end);
    const products = [...block.matchAll(/^\s*(\[[^\n]+\]),?$/gm)].flatMap((row) => {
      try {
        const fields = JSON.parse(row[1]);
        return typeof fields[5] === "string" ? [{ name: fields[0], article: fields[1], category: fields[2], slug: fields[5] }] : [];
      } catch {
        return [];
      }
    });
    if (products.length) catalog.set(brand[1], products);
    if (index === brands.length - 1 && end === -1) throw new Error("Не удалось прочитать каталог запчастей.");
  }
  return catalog;
}

const catalog = await loadCatalog();
const masterRequests = await readMasterRequests();

function requestFrom(text) {
  const match = text.match(/^\/start(?:@\w+)?\s+request-([a-z0-9-]+)-([0-9a-z]+)$/i);
  if (!match) return undefined;
  const brand = match[1].toLowerCase();
  const product = catalog.get(brand)?.[Number.parseInt(match[2], 36)];
  return product ? { brand, ...product } : undefined;
}

function isMasterRequestStart(text) {
  return /^\/start(?:@\w+)?\s+master$/i.test(text);
}

function customerLabel(user) {
  const name = [user.first_name, user.last_name].filter(Boolean).join(" ") || "Пользователь Telegram";
  return user.username ? `${name} (@${user.username})` : `${name} (ID ${user.id})`;
}

async function handleMessage(message) {
  if (message.chat?.type !== "private" || !message.from) return;
  const text = message.text?.trim() ?? "";

  if (isMasterRequestStart(text)) {
    masterRequests.add(String(message.chat.id));
    await writeMasterRequests(masterRequests);
    await api("sendMessage", {
      chat_id: message.chat.id,
      text: "Опишите, пожалуйста, проблему с котлом: марку и модель, что происходит или какой код ошибки показывает. Сообщение передадим мастеру.",
    });
    return;
  }

  if (masterRequests.has(String(message.chat.id)) && text && !text.startsWith("/")) {
    const customer = customerLabel(message.from);
    await api("sendMessage", {
      chat_id: ordersChatId,
      text: `🛠 Вызов мастера из Telegram\n\nОписание проблемы:\n${text}\n\nКлиент: ${customer}\nTelegram ID: ${message.from.id}`,
    });
    masterRequests.delete(String(message.chat.id));
    await writeMasterRequests(masterRequests);
    await api("sendMessage", {
      chat_id: message.chat.id,
      text: "Описание передано мастеру. Он свяжется с вами для уточнения деталей и согласования выезда.",
    });
    return;
  }

  const request = requestFrom(text);
  if (request && masterRequests.delete(String(message.chat.id))) {
    await writeMasterRequests(masterRequests);
  }

  if (!request) {
    await api("sendMessage", {
      chat_id: message.chat.id,
      text: "Здравствуйте! Откройте каталог через кнопку «Каталог» внизу экрана и выберите нужную запчасть. Мы уточним наличие и совместимость по модели котла.",
    });
    return;
  }

  const productUrl = `${siteUrl}/zapchasti/${request.brand}/${request.slug}/`;
  const customer = customerLabel(message.from);
  await api("sendMessage", {
    chat_id: ordersChatId,
    text: `🆕 Новая заявка из Telegram-каталога\n\n${request.name}\nАрт.: ${request.article}\nКатегория: ${request.category}\nТовар: ${productUrl}\nКлиент: ${customer}\n\nУточните модель котла, серийный номер и наличие перед заказом.`,
    reply_markup: {
      inline_keyboard: [[{ text: "Открыть товар", url: productUrl }]],
    },
  });
  await api("sendMessage", {
    chat_id: message.chat.id,
    text: "Заявка отправлена менеджеру. Напишите модель котла, артикул или приложите фото шильдика — это поможет проверить совместимость.",
  });
}

let offset = await readOffset();
for (;;) {
  try {
    const updates = await api("getUpdates", {
      offset,
      timeout: 30,
      allowed_updates: ["message"],
    });
    for (const update of updates) {
      offset = update.update_id + 1;
      if (update.message) await handleMessage(update.message);
      await writeOffset(offset);
    }
  } catch (error) {
    console.error(new Date().toISOString(), error instanceof Error ? error.message : error);
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 5000));
  }
}
