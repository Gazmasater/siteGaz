export default defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug") || "";

  if (slug !== "remont-protherm-oshibka-f28-lipeck") {
    throw createError({ statusCode: 404, statusMessage: "Not found" });
  }

  const region = "Липецк";
  const phone = "+7 900 000-00-00";
  const canonicalUrl = `http://localhost:3000/lipeck/remont/protherm/oshybka-f28`;

  return {
    slug,
    title: "Ошибка F28 Protherm — ремонт в Липецке, причины и решение",
    h1: "Ошибка F28 на котле Protherm — что означает и как устранить (Липецк)",
    meta_description:
      "Ошибка F28 Protherm: частые причины, безопасные проверки и когда нужен мастер. Выезд по Липецку.",
    canonical_url: canonicalUrl,
    breadcrumbs: [
      { title: "Ремонт котлов", url: "/lipeck/remont/" },
      { title: "Protherm", url: "/lipeck/remont/protherm/" },
      { title: "Ошибка F28", url: "/lipeck/remont/protherm/oshybka-f28" },
    ],
    local_business: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Ремонт котлов Protherm в Липецке",
      areaServed: region,
      telephone: phone,
      address: { "@type": "PostalAddress", addressLocality: region, addressCountry: "RU" },
    },
    blocks: [
      {
        type: "intro",
        text:
          "Ошибка F28 на котлах Protherm чаще всего связана с розжигом/подачей газа. Ниже — частые причины, безопасные проверки и признаки, когда нужна диагностика мастера.",
      },
      {
        type: "causes",
        items: [
          { title: "Нет/недостаточно газа, закрыт кран", probability: 0.28 },
          { title: "Сбой розжига: электрод/ионизация, загрязнение", probability: 0.22 },
          { title: "Проблема с газовым клапаном", probability: 0.16 },
          { title: "Низкое давление газа / проблема у поставщика", probability: 0.14 },
          { title: "Ошибки по дымоудалению/тяге (зависит от модели)", probability: 0.10 },
        ],
      },
      {
        type: "steps",
        items: [
          { step: 1, title: "Проверьте газовый кран и наличие газа (например, у плиты)", safety: "low", can_user_do: true },
          { step: 2, title: "Сделайте сброс ошибки и повторный запуск котла", safety: "low", can_user_do: true },
          { step: 3, title: "Если F28 повторяется — нужна проверка узла розжига и газового клапана", safety: "high", can_user_do: false },
        ],
      },
      {
        type: "cta",
        primary: "Вызвать мастера в Липецке",
        secondary: "Консультация по F28",
        phone,
        region,
        brand: "Protherm",
        code: "F28",
      },
      {
        type: "faq",
        items: [
          {
            q: "Можно ли просто сбросить F28 и пользоваться дальше?",
            a: "Если ошибка появляется снова — это признак проблемы. Лучше найти причину, чтобы избежать повторных остановок и повреждения узлов.",
          },
          {
            q: "Опасно ли это?",
            a: "Самостоятельно ограничьтесь безопасными проверками (кран/сброс). Работы с газовой частью должен выполнять специалист.",
          },
        ],
      },
    ],
  };
});