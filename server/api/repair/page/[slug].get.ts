// server/api/repair/page/[slug].get.ts
// Универсальный мок-API под страницы вида:
// /:region/remont/:brand/oshybka-:code
// slug формируем так:  remont-${brand}-oshybka-${code}-${region}
// пример: remont-protherm-oshybka-f28-lipeck

type Safety = "low" | "med" | "high";

type Block =
  | {
      type: "hero";
      title: string;
      subtitle: string;
      img?: string;
      alt?: string;
      bullets?: string[];
    }
  | { type: "intro"; text: string }
  | { type: "causes"; items: { title: string; probability?: number }[] }
  | {
      type: "steps";
      items: { step: number; title: string; safety?: Safety; can_user_do?: boolean }[];
    }
  | {
      type: "cta";
      primary: string;
      phone: string;
      region: string;
      brand: string;
      code: string;
    }
  | { type: "faq"; items: { q: string; a: string }[] };

type PageDto = {
  slug: string;
  title: string;
  h1: string;
  meta_description: string;
  canonical_url: string;
  breadcrumbs: { title: string; url: string }[];
  local_business?: Record<string, unknown>;
  blocks: Block[];
};

function cap(s: string): string {
  if (!s) return s;
  return s.slice(0, 1).toUpperCase() + s.slice(1);
}

function normCode(codeRaw: string): string {
  const c = codeRaw.trim().toUpperCase();
  if (!c) return "F??";
  return c.startsWith("F") ? c : `F${c}`;
}

function regionName(regionSlug: string): string {
  const map: Record<string, string> = {
    lipeck: "Липецк",
    moscow: "Москва",
    spb: "Санкт-Петербург",
  };
  return map[regionSlug] || cap(regionSlug);
}

function brandName(brandSlug: string): string {
  const map: Record<string, string> = {
    protherm: "Protherm",
    baxi: "Baxi",
    vaillant: "Vaillant",
    viessmann: "Viessmann",
  };
  return map[brandSlug] || cap(brandSlug);
}

function phoneForRegion(regionSlug: string): string {
  const map: Record<string, string> = {
    lipeck: "+7 (933) 091-72-76",
  };
  return map[regionSlug] || "+7 (933) 091-72-76";
}

function regionIn(regionSlug: string, region: string): string {
  const map: Record<string, string> = {
    lipeck: "Липецке",
  };
  return map[regionSlug] || region;
}

function canonicalUrl(regionSlug: string, brandSlug: string, codeRaw: string): string {
  return `https://remontkotlov48.ru/${regionSlug}/remont/${brandSlug}/oshybka-${codeRaw.toLowerCase()}`;
}

function makeBreadcrumbs(regionSlug: string, brand: string, brandSlug: string, code: string, codeRaw: string) {
  return [
    { title: "Ремонт котлов", url: `/${regionSlug}/remont/` },
    { title: brand, url: "" },
    { title: `Ошибка ${code}`, url: `/${regionSlug}/remont/${brandSlug}/oshybka-${codeRaw.toLowerCase()}` },
  ];
}

function makeLocalBusiness(region: string, brand: string, phone: string): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Ремонт котлов ${brand} в ${region}`,
    areaServed: region,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: region,
      addressCountry: "RU",
    },
  };
}

function makeCommonBlocks(params: {
  region: string;
  regionSlug: string;
  brand: string;
  brandSlug: string;
  code: string;
  heroImg?: string;
  intro: string;
  causes: { title: string; probability?: number }[];
  steps: { title: string; safety?: Safety; can_user_do?: boolean }[];
  faq: { q: string; a: string }[];
}): Block[] {
  const phone = phoneForRegion(params.regionSlug);

  return [
    {
      type: "hero",
      title: `Ошибка ${params.code} ${params.brand} — ремонт в ${params.region}`,
      subtitle: "Частые причины, безопасные проверки и когда нужен мастер. Выезд по городу и области.",
      img: params.heroImg,
      alt: `Ремонт котлов ${params.brand} в ${params.region}`,
      bullets: ["Выезд в день обращения", "Диагностика", "Гарантия на работы"],
    },
    { type: "intro", text: params.intro },
    { type: "causes", items: params.causes },
    {
      type: "steps",
      items: params.steps.map((s, i) => ({
        step: i + 1,
        title: s.title,
        safety: s.safety ?? "low",
        can_user_do: s.can_user_do,
      })),
    },
    {
      type: "cta",
      primary: "Вызвать мастера",
      phone,
      region: params.region,
      brand: params.brand,
      code: params.code,
    },
    { type: "faq", items: params.faq },
  ];
}

function buildPage(slug: string, regionSlug: string, brandSlug: string, codeRaw: string): PageDto {
  const regionSlugNorm = regionSlug.toLowerCase();
  const brandSlugNorm = brandSlug.toLowerCase();
  const codeRawNorm = codeRaw.toLowerCase();

  const region = regionName(regionSlugNorm);
  const regionPrep = regionSlugNorm === "lipeck" ? "Липецке" : region;
  const brand = brandName(brandSlugNorm);
  const code = normCode(codeRawNorm);

  const phone = phoneForRegion(regionSlugNorm);

  const canonical = canonicalUrl(regionSlugNorm, brandSlugNorm, codeRawNorm);
  const breadcrumbs = makeBreadcrumbs(regionSlugNorm, brand, brandSlugNorm, code, codeRawNorm);
  const local_business = makeLocalBusiness(region, brand, phone);

  // Контент по коду/бренду (расширяем)
  const codeKey = code.toUpperCase();

  if (brandSlugNorm === "protherm") {
    if (codeKey === "F28") {
      const blocks = makeCommonBlocks({
        region,
        regionSlug: regionSlugNorm,
        brand,
        brandSlug: brandSlugNorm,
        code,
        heroImg: "/img/repair/protherm/hero.jpg",
        intro:
          "Ошибка F28 на котлах Protherm чаще всего связана с розжигом или подачей газа. Ниже — частые причины и безопасные действия, которые можно сделать без вмешательства в газовую часть.",
        causes: [
          { title: "Нет/недостаточно газа, закрыт кран", probability: 0.28 },
          { title: "Сбой розжига: электрод/ионизация, загрязнение", probability: 0.22 },
          { title: "Проблема с газовым клапаном", probability: 0.16 },
          { title: "Просадка давления газа у поставщика", probability: 0.14 },
        ],
        steps: [
          { title: "Проверьте газовый кран и наличие газа (например, у плиты)", safety: "low", can_user_do: true },
          { title: "Сделайте сброс ошибки и повторный запуск котла", safety: "low", can_user_do: true },
          { title: "Если ошибка повторяется — нужна диагностика розжига/клапана", safety: "high", can_user_do: false },
        ],
        faq: [
          {
            q: "Можно ли просто сбросить F28 и пользоваться дальше?",
            a: "Если F28 появляется снова — проблема остаётся. Лучше диагностировать причину, чтобы котёл не уходил в останов и не изнашивал узлы.",
          },
          {
            q: "Опасно ли разбирать котёл самому?",
            a: "Газовую часть и настройки должен делать специалист. Самостоятельно ограничьтесь безопасными проверками (кран/сброс/давление по манометру).",
          },
        ],
      });

      return {
        slug,
        title: `Ошибка ${code} ${brand} — ремонт в ${regionPrep}, причины и решение`,
        h1: `Ошибка ${code} на котле ${brand} — что означает и как устранить (${regionPrep})`,
        meta_description: `Ошибка ${code} ${brand}: причины, безопасные проверки и когда нужен мастер. Выезд по Липецку и области.`,
        canonical_url: canonical,
        breadcrumbs,
        local_business,
        blocks,
      };
    }

    if (codeKey === "F29") {
      const blocks = makeCommonBlocks({
        region,
        regionSlug: regionSlugNorm,
        brand,
        brandSlug: brandSlugNorm,
        code,
        heroImg: "/img/repair/protherm/hero.jpg",
        intro:
          "Ошибка F29 обычно означает потерю пламени после розжига. Часто причина — нестабильная подача газа, ионизация или влияние дымоудаления (в зависимости от модели).",
        causes: [
          { title: "Нестабильная подача газа / просадки давления", probability: 0.26 },
          { title: "Электрод ионизации/контакты/загрязнение", probability: 0.22 },
          { title: "Проблемы дымоудаления/тяги", probability: 0.18 },
          { title: "Газовый клапан / настройка", probability: 0.14 },
        ],
        steps: [
          { title: "Проверьте, нет ли перебоев с газом", safety: "low", can_user_do: true },
          { title: "Перезапустите котёл (сброс ошибки)", safety: "low", can_user_do: true },
          { title: "При повторе — диагностика ионизации/газового узла/тяги", safety: "high", can_user_do: false },
        ],
        faq: [
          { q: "F29 появляется периодически — это нормально?", a: "Нет. Периодическая потеря пламени — признак проблемы, лучше проверить." },
          { q: "Причина всегда в газе?", a: "Не всегда: бывает ионизация, тяга, настройки/узлы. Нужна диагностика по месту." },
        ],
      });

      return {
        slug,
        title: `Ошибка ${code} ${brand} — ремонт в ${regionPrep}, причины и решение`,
        h1: `Ошибка ${code} на котле ${brand} — почему гаснет пламя (${regionPrep})`,
        meta_description: `Ошибка ${code} ${brand}: причины потери пламени и безопасные проверки. Выезд по Липецку и области.`,
        canonical_url: canonical,
        breadcrumbs,
        local_business,
        blocks,
      };
    }

    if (codeKey === "F75") {
      const blocks = makeCommonBlocks({
        region,
        regionSlug: regionSlugNorm,
        brand,
        brandSlug: brandSlugNorm,
        code,
        heroImg: "/img/repair/protherm/hero.jpg",
        intro:
          "Ошибка F75 связана с давлением/циркуляцией: котёл не видит ожидаемого изменения давления при запуске насоса. Частые причины — воздух в системе, датчик давления, насос, фильтр.",
        causes: [
          { title: "Воздух в системе / завоздушивание", probability: 0.28 },
          { title: "Неисправен датчик давления", probability: 0.2 },
          { title: "Насос: заклинивание/износ/питание", probability: 0.18 },
          { title: "Забит фильтр/грязевик", probability: 0.12 },
        ],
        steps: [
          { title: "Проверьте давление в системе (часто 1–1.5 бар)", safety: "low", can_user_do: true },
          { title: "Если умеете — аккуратно развоздушьте радиаторы", safety: "med", can_user_do: true },
          { title: "Если ошибка не уходит — проверка насоса/датчика/фильтра", safety: "high", can_user_do: false },
        ],
        faq: [
          { q: "F75 — это обязательно насос?", a: "Не всегда. Часто виноваты воздух, датчик давления или засор фильтра." },
          { q: "Можно ли продолжать пользоваться?", a: "Лучше не игнорировать: проблемы с циркуляцией ведут к остановкам." },
        ],
      });

      return {
        slug,
        title: `Ошибка ${code} ${brand} — ремонт в ${regionPrep}, причины и решение`,
        h1: `Ошибка ${code} на котле ${brand} — давление, насос, датчик (${regionPrep})`,
        meta_description: `Ошибка ${code} ${brand}: причины по давлению/насосу и безопасные действия. Выезд по Липецку и области.`,
        canonical_url: canonical,
        breadcrumbs,
        local_business,
        blocks,
      };
    }
  }

  // Дефолт для любых других комбинаций — чтобы не ловить 404
  const blocks = makeCommonBlocks({
    region,
    regionSlug: regionSlugNorm,
    brand,
    brandSlug: brandSlugNorm,
    code,
    heroImg: `/img/repair/${brandSlugNorm}/hero.jpg`,
    intro: `Страница по ошибке ${code} для котлов ${brand}. Заполним конкретикой позже: причины, проверки, цены и сроки в ${regionPrep}.`,
    causes: [
      { title: "Недостаточно данных по модели (заполним после диагностики)", probability: 0.34 },
      { title: "Электрика/датчики/контакты", probability: 0.22 },
      { title: "Гидравлика/циркуляция/давление", probability: 0.18 },
    ],
    steps: [
      { title: "Сфотографируйте дисплей с ошибкой и модель котла", safety: "low", can_user_do: true },
      { title: "Сделайте перезапуск и проверьте давление/кран газа (если применимо)", safety: "low", can_user_do: true },
      { title: "Если ошибка повторяется — вызов мастера для диагностики", safety: "high", can_user_do: false },
    ],
    faq: [
      { q: "Можно ли устранить самому?", a: "Зависит от причины. Делайте только безопасные проверки. Газовую часть обслуживает специалист." },
      { q: "Сколько стоит ремонт?", a: "Стоимость зависит от причины и запчастей. Сначала диагностика, затем согласование цены." },
    ],
  });

  return {
    slug,
    title: `Ошибка ${code} ${brand} — ремонт в ${regionPrep}`,
    h1: `Ошибка ${code} на котле ${brand} (${regionPrep})`,
    meta_description: `Ошибка ${code} ${brand}: причины и решение. Выезд по Липецку и области.`,
    canonical_url: canonical,
    breadcrumbs,
    local_business,
    blocks,
  };
}

export default defineEventHandler((event): PageDto => {
  const slug = getRouterParam(event, "slug") || "";

  const re = /^remont-([a-z0-9-]+)-oshybka-([a-z0-9-]+)-([a-z0-9-]+)$/i;
  const m = slug.match(re);

  // Явные проверки убирают ошибки TS "possibly undefined"
  if (!m || !m[1] || !m[2] || !m[3]) {
    throw createError({ statusCode: 404, statusMessage: `Bad slug: ${slug}` });
  }

  const brandSlug = m[1].toLowerCase();
  const codeRaw = m[2].toLowerCase();
  const regionSlug = m[3].toLowerCase();

  return buildPage(slug, regionSlug, brandSlug, codeRaw);
});
