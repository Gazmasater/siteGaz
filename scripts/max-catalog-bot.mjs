import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = process.cwd();
const envPath = resolve(root, ".env.telegram");
const statePath = resolve(root, ".data/max-bot-marker.json");
const masterRequestsPath = resolve(root, ".data/max-master-requests.json");
const catalogPath = resolve(root, "app/data/spareParts.ts");
const siteUrl = "https://remontkotlov48.ru";
const maxApiBase = "https://platform-api2.max.ru";

function parseEnv(source) {
  return Object.fromEntries(source.split(/\r?\n/).flatMap((line) => {
    const match = line.match(/^([A-Z][A-Z0-9_]*)=(.*)$/);
    return match ? [[match[1], match[2].trim()]] : [];
  }));
}

const config = parseEnv(await readFile(envPath, "utf8"));
const maxToken = config.MAX_BOT_TOKEN;
const maxOrdersChatId = config.MAX_ORDERS_CHAT_ID;
const telegramToken = config.TELEGRAM_BOT_TOKEN;
const ordersChatId = config.TELEGRAM_ORDERS_CHAT_ID;

if (!maxToken || !telegramToken || !ordersChatId) {
  throw new Error("В .env.telegram нужны MAX_BOT_TOKEN, TELEGRAM_BOT_TOKEN и TELEGRAM_ORDERS_CHAT_ID.");
}

async function maxApi(path, options = {}) {
  const response = await fetch(`${maxApiBase}${path}`, {
    ...options,
    headers: { Authorization: maxToken, ...(options.headers ?? {}) },
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(`MAX ${path}: ${payload.message ?? response.status}`);
  return payload;
}

async function telegramApi(method, body) {
  const response = await fetch(`https://api.telegram.org/bot${telegramToken}/${method}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  const payload = await response.json();
  if (!payload.ok) throw new Error(`Telegram ${method}: ${payload.description ?? response.status}`);
  return payload.result;
}

async function readMarker() {
  try {
    return JSON.parse(await readFile(statePath, "utf8")).marker;
  } catch {
    return undefined;
  }
}

async function writeMarker(marker) {
  if (marker === undefined || marker === null) return;
  await mkdir(dirname(statePath), { recursive: true });
  await writeFile(statePath, JSON.stringify({ marker }), "utf8");
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

function requestFrom(payload) {
  const match = payload?.match(/^request-([a-z0-9-]+)-([0-9a-z]+)$/i);
  if (!match) return undefined;
  const brand = match[1].toLowerCase();
  const product = catalog.get(brand)?.[Number.parseInt(match[2], 36)];
  return product ? { brand, ...product } : undefined;
}

function isMasterRequestStart(payload) {
  return payload === "master";
}

function customerLabel(user = {}) {
  const name = user.name || [user.first_name, user.last_name].filter(Boolean).join(" ") || "Пользователь Max";
  return user.username ? `${name} (@${user.username})` : `${name} (ID ${user.user_id ?? "не указан"})`;
}

async function sendMaxMessage(chatId, text) {
  await maxApi(`/messages?chat_id=${encodeURIComponent(chatId)}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ text, disable_link_preview: true }),
  });
}

async function handleUpdate(update) {
  if (update.update_type === "bot_added" && update.chat_id) {
    console.info(`Max group candidate: ${update.chat_id}. Set MAX_ORDERS_CHAT_ID to route catalogue orders there.`);
    return;
  }
  if (update.update_type === "message_created" && update.chat_id) {
    if (update.message?.sender?.is_bot) return;
    const text = update.message?.body?.text?.trim();
    if (!masterRequests.has(String(update.chat_id)) || !text) return;

    const managerText = `🛠 Вызов мастера из Max\n\nОписание проблемы:\n${text}\n\nКлиент: ${customerLabel(update.message?.sender ?? update.user)}\nMax ID: ${update.message?.sender?.user_id ?? update.user?.user_id ?? "не указан"}`;
    if (maxOrdersChatId) {
      await sendMaxMessage(maxOrdersChatId, managerText);
    } else {
      await telegramApi("sendMessage", { chat_id: ordersChatId, text: managerText });
    }
    masterRequests.delete(String(update.chat_id));
    await writeMasterRequests(masterRequests);
    await sendMaxMessage(update.chat_id, "Описание передано мастеру. Он свяжется с вами для уточнения деталей и согласования выезда.");
    return;
  }

  if (update.update_type !== "bot_started" || !update.chat_id) return;
  if (isMasterRequestStart(update.payload)) {
    masterRequests.add(String(update.chat_id));
    await writeMasterRequests(masterRequests);
    await sendMaxMessage(update.chat_id, "Опишите, пожалуйста, проблему с котлом: марку и модель, что происходит или какой код ошибки показывает. Сообщение передадим мастеру.");
    return;
  }
  const request = requestFrom(update.payload);
  if (request && masterRequests.delete(String(update.chat_id))) {
    await writeMasterRequests(masterRequests);
  }
  if (!request) {
    await sendMaxMessage(update.chat_id, "Здравствуйте! Откройте каталог запчастей на сайте и выберите нужную деталь. Мы уточним наличие и совместимость по модели котла.");
    return;
  }

  const productUrl = `${siteUrl}/zapchasti/${request.brand}/${request.slug}/`;
  const managerText = `🆕 Новая заявка из Max-каталога\n\n${request.name}\nАрт.: ${request.article}\nКатегория: ${request.category}\nТовар: ${productUrl}\nКлиент: ${customerLabel(update.user)}\n\nУточните модель котла, серийный номер и наличие перед заказом.`;
  if (maxOrdersChatId) {
    await sendMaxMessage(maxOrdersChatId, managerText);
  } else {
    await telegramApi("sendMessage", {
      chat_id: ordersChatId,
      text: managerText,
      reply_markup: { inline_keyboard: [[{ text: "Открыть товар", url: productUrl }]] },
    });
  }
  await sendMaxMessage(update.chat_id, "Заявка отправлена менеджеру. Напишите модель котла, артикул или приложите фото шильдика — это поможет проверить совместимость.");
}

let marker = await readMarker();
for (;;) {
  try {
    const params = new URLSearchParams({ timeout: "90" });
    params.append("types", "bot_started");
    params.append("types", "bot_added");
    params.append("types", "message_created");
    if (marker !== undefined) params.set("marker", String(marker));
    const payload = await maxApi(`/updates?${params}`);
    for (const update of payload.updates ?? []) await handleUpdate(update);
    marker = payload.marker;
    await writeMarker(marker);
  } catch (error) {
    console.error(new Date().toISOString(), error instanceof Error ? error.message : error);
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 5000));
  }
}
