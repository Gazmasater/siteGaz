<script setup lang="ts">
const title = "Контакты Gazmaster — ремонт газовых котлов в Липецке";
const description =
  "Контакты мастера по ремонту газовых котлов в Липецке: телефон 8 (962) 352-70-02, выезд по Липецку и области, режим работы ежедневно с 8:00 до 22:00.";
const canonical = "https://remontkotlov48.ru/kontakty/";
const phone = "8 (962) 352-70-02";
const phoneHref = "tel:+79623527002";
const telegramHref = "https://t.me/gazmasterzip48_bot?start=master";
const maxHref = "https://max.ru/id482414631253_bot?start=master";
const yandexMapsUrl = "https://yandex.ru/maps/org/gazmaster/165084897107/?ll=39.535637%2C52.603696&z=16";
const yandexServicesUrl =
  "https://uslugi.yandex.ru/profile/Gazmaster-108825?occupationId=%2Fremont-i-ustanovka-tehniki&specId=%2Fremont-i-ustanovka-tehniki%2Fdrugoe&text=%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82+%D0%B3%D0%B0%D0%B7%D0%BE%D0%B2%D1%8B%D1%85+%D0%BA%D0%BE%D1%82%D0%BB%D0%BE%D0%B2";

useHead({
  title,
  meta: [
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonical },
  ],
  link: [{ rel: "canonical", href: canonical }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Gazmaster",
        description,
        url: canonical,
        telephone: phone,
        priceRange: "$$",
        hasMap: yandexMapsUrl,
        sameAs: [yandexMapsUrl, yandexServicesUrl],
        areaServed: { "@type": "City", name: "Липецк" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Липецк",
          addressCountry: "RU",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "08:00",
            closes: "22:00",
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: phone,
          contactType: "customer service",
          areaServed: "RU",
          availableLanguage: "Russian",
        },
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: "https://remontkotlov48.ru/" },
          { "@type": "ListItem", position: 2, name: "Контакты", item: canonical },
        ],
      }),
    },
  ],
});
</script>

<template>
  <main class="bg-white pb-12 text-neutral-900">
    <nav class="mx-auto max-w-7xl px-4 py-4 text-sm text-neutral-500 sm:px-6 lg:px-8" aria-label="Хлебные крошки">
      <NuxtLink to="/" class="hover:text-neutral-900">Главная</NuxtLink>
      <span class="mx-2 text-neutral-300" aria-hidden="true">/</span>
      <span>Контакты</span>
    </nav>

    <section class="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
      <div>
        <h1 class="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
          Контакты мастера по ремонту газовых котлов в Липецке
        </h1>
        <p class="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">
          Звоните, если котел не запускается, показывает ошибку, не греет воду, шумит или требует обслуживания.
          Мастер выезжает по Липецку и области, стоимость работ согласуется до начала ремонта.
        </p>
        <div class="mt-7 flex flex-wrap gap-3">
          <a :href="phoneHref" class="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-400">
            Позвонить {{ phone }}
          </a>
          <a :href="telegramHref" target="_blank" rel="noopener" class="rounded-lg bg-sky-500 px-5 py-3 text-sm font-bold text-white hover:bg-sky-400">
            Вызвать мастера в Telegram
          </a>
          <a :href="maxHref" target="_blank" rel="noopener" class="rounded-lg bg-[#2767ff] px-5 py-3 text-sm font-bold text-white hover:bg-[#1f57d6]">
            Вызвать мастера в Max
          </a>
          <NuxtLink to="/lipeck/uslugi/remont-gazovyh-kotlov/" class="rounded-lg border px-5 py-3 text-sm font-bold text-neutral-900 hover:bg-neutral-50">
            Ремонт газовых котлов
          </NuxtLink>
        </div>
      </div>

      <aside class="rounded-lg border border-neutral-200 bg-neutral-50 p-5">
        <h2 class="text-lg font-black">Связь и выезд</h2>
        <dl class="mt-4 grid gap-4 text-sm leading-6 text-neutral-700">
          <div>
            <dt class="font-bold text-neutral-900">Телефон</dt>
            <dd><a :href="phoneHref" class="text-emerald-700 hover:text-emerald-600">{{ phone }}</a></dd>
          </div>
          <div>
            <dt class="font-bold text-neutral-900">Telegram</dt>
            <dd><a :href="telegramHref" target="_blank" rel="noopener" class="text-sky-700 hover:text-sky-600">Описать проблему мастеру</a></dd>
          </div>
          <div>
            <dt class="font-bold text-neutral-900">Max</dt>
            <dd><a :href="maxHref" target="_blank" rel="noopener" class="text-blue-700 hover:text-blue-600">Описать проблему мастеру</a></dd>
          </div>
          <div>
            <dt class="font-bold text-neutral-900">Регион</dt>
            <dd>Липецк и Липецкая область</dd>
          </div>
          <div>
            <dt class="font-bold text-neutral-900">Время работы</dt>
            <dd>Ежедневно с 8:00 до 22:00</dd>
          </div>
          <div>
            <dt class="font-bold text-neutral-900">Карточка</dt>
            <dd>
              <a :href="yandexMapsUrl" target="_blank" rel="noopener" class="text-emerald-700 hover:text-emerald-600">
                Gazmaster на Яндекс Картах
              </a>
            </dd>
          </div>
        </dl>
      </aside>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="grid gap-5 md:grid-cols-3">
        <NuxtLink to="/lipeck/uslugi/remont-gazovyh-kotlov/" class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm hover:border-emerald-300 hover:bg-emerald-50">
          <h2 class="text-xl font-black">Ремонт газовых котлов</h2>
          <p class="mt-3 text-sm leading-6 text-neutral-600">Диагностика, ошибки, розжиг, плата, насос, датчики и теплообменник.</p>
        </NuxtLink>
        <NuxtLink to="/lipeck/uslugi/montazh-gazovyh-kotlov/" class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm hover:border-emerald-300 hover:bg-emerald-50">
          <h2 class="text-xl font-black">Монтаж газовых котлов</h2>
          <p class="mt-3 text-sm leading-6 text-neutral-600">Установка котла, подключение к отоплению, проверка запуска и работы.</p>
        </NuxtLink>
        <NuxtLink to="/lipeck/uslugi/montazh-sistem-otopleniya/" class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm hover:border-emerald-300 hover:bg-emerald-50">
          <h2 class="text-xl font-black">Монтаж систем отопления</h2>
          <p class="mt-3 text-sm leading-6 text-neutral-600">Разводка труб, радиаторы, теплый пол, заполнение и проверка циркуляции.</p>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
