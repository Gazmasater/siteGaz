<script setup lang="ts">
import { useRoute } from "vue-router";
import { brandErrorCodes, displayErrorCode, regionPrepTitle, regionRouteTitle, regionTitle, repairBrands, repairServicePages } from "~/utils/repairSeo";

const route = useRoute();
const region = String(route.params.region || "");
const regionName = regionTitle(region);
const regionPrep = regionPrepTitle(region);
const regionRoute = regionRouteTitle(region);
const phone = "8 (962) 352-70-02";
const phoneHref = "tel:+79623527002";
const yandexMapsUrl = "https://yandex.ru/maps/org/gazmaster/165084897107/?ll=39.535637%2C52.603696&z=16";
const yandexServicesUrl =
  "https://uslugi.yandex.ru/profile/Gazmaster-108825?occupationId=%2Fremont-i-ustanovka-tehniki&specId=%2Fremont-i-ustanovka-tehniki%2Fdrugoe&text=%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82+%D0%B3%D0%B0%D0%B7%D0%BE%D0%B2%D1%8B%D1%85+%D0%BA%D0%BE%D1%82%D0%BB%D0%BE%D0%B2";

const brandCards = repairBrands.map((brand) => ({
  ...brand,
  codes: brandErrorCodes[brand.slug] || [],
}));

const popularErrors = [
  { brand: "Protherm", slug: "protherm", code: "F28", text: "нет розжига или срыв пламени" },
  { brand: "Protherm", slug: "protherm", code: "F75", text: "давление, насос или датчик" },
  { brand: "Baxi", slug: "baxi", code: "E01", text: "нет пламени" },
  { brand: "Baxi", slug: "baxi", code: "E10", text: "давление воды" },
  { brand: "Navien", slug: "navien", code: "01", text: "перегрев котла" },
  { brand: "Navien", slug: "navien", code: "03", text: "ошибка розжига" },
];

const stats = [
  "Выезд в день обращения",
  "Диагностика перед ремонтом",
  "Гарантия на работы",
];

const title = `Ремонт газовых котлов в ${regionPrep}`;
const description = `Ремонт и диагностика газовых котлов Ariston, Baxi, Ferroli, Fondital, Navien, Protherm, Vaillant и Viessmann в ${regionPrep}. Разбор кодов ошибок, выезд мастера и согласование стоимости до ремонта.`;
const canonicalUrl = `https://remontkotlov48.ru/${region}/remont/`;
const keywords = `ремонт газовых котлов ${regionName}, ремонт котлов ${regionName}, ремонт котлов Ariston, Baxi, Ferroli, Fondital, Navien, Protherm, Vaillant, Viessmann, мастер по котлам ${regionName}`;

useHead({
  title: `${title} — ошибки, бренды и услуги`,
  meta: [
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { property: "og:title", content: `${title} — ошибки, бренды и услуги` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonicalUrl },
  ],
  link: [{ rel: "canonical", href: canonicalUrl }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: title,
        description,
        serviceType: "Ремонт газовых котлов",
        areaServed: { "@type": "City", name: regionName },
        provider: {
          "@type": "LocalBusiness",
          name: `Ремонт котлов в ${regionPrep}`,
          telephone: phone,
          hasMap: yandexMapsUrl,
          sameAs: [yandexMapsUrl, yandexServicesUrl],
          address: { "@type": "PostalAddress", addressLocality: regionName, addressCountry: "RU" },
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "RUB",
          url: canonicalUrl,
        },
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: "https://remontkotlov48.ru/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: canonicalUrl,
          },
        ],
      }),
    },
  ],
});
</script>

<template>
  <main class="bg-white text-neutral-950">
    <nav class="mx-auto max-w-7xl px-4 py-4 text-sm text-neutral-500 sm:px-6 lg:px-8" aria-label="Хлебные крошки">
      <NuxtLink to="/" class="hover:text-neutral-900">Главная</NuxtLink>
      <span class="mx-2 text-neutral-300" aria-hidden="true">/</span>
      <span>{{ title }}</span>
    </nav>

    <section class="relative isolate overflow-hidden bg-neutral-950 text-white">
      <picture>
        <source srcset="/img/header-boiler-generated-79330917276.avif" type="image/avif" />
        <source srcset="/img/header-boiler-generated-79330917276.webp" type="image/webp" />
        <img
          src="/img/header-boiler-generated-79330917276.webp"
          alt="Ремонт газовых котлов в Липецке"
          class="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]"
          loading="eager"
          fetchpriority="high"
        />
      </picture>
      <div class="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950 via-neutral-950/88 to-neutral-950/22"></div>
      <div class="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-white to-transparent"></div>

      <div class="mx-auto grid min-h-[620px] max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
        <div class="max-w-3xl pt-8">
          <div class="mb-5 inline-flex rounded-full border border-emerald-300/35 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-100">
            Ремонт котлов · {{ regionName }} и область
          </div>
          <h1 class="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{{ title }}</h1>
          <p class="mt-5 max-w-2xl text-lg leading-8 text-white/86">
            Диагностика неисправностей, ремонт по кодам ошибок и обслуживание настенных котлов всех восьми представленных марок.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a :href="phoneHref" class="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-950/30 hover:bg-emerald-400">
              Позвонить мастеру
            </a>
            <MessengerButtons tone="dark" />
            <a href="#brands" class="rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/15">
              Выбрать марку котла
            </a>
          </div>

          <div class="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            <div v-for="item in stats" :key="item" class="rounded-lg border border-white/14 bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur">
              {{ item }}
            </div>
          </div>
        </div>

        <aside class="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur md:p-6">
          <div class="text-sm font-semibold text-emerald-200">Быстрая заявка</div>
          <div class="mt-3 text-2xl font-black leading-tight">Котел показывает ошибку?</div>
          <p class="mt-3 text-sm leading-6 text-white/75">
            Назовите марку и код на дисплее. Мастер подскажет безопасные проверки и сориентирует по выезду.
          </p>
          <a :href="phoneHref" class="mt-5 block rounded-lg bg-white px-5 py-3 text-center text-sm font-black text-neutral-950 hover:bg-emerald-50">
            {{ phone }}
          </a>
        </aside>
      </div>
    </section>

    <section id="brands" class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="text-3xl font-black tracking-tight">Ремонт по маркам</h2>
          <p class="mt-2 max-w-2xl text-sm leading-6 text-neutral-600">
            Отдельные страницы по брендам помогают быстро перейти к нужным кодам ошибок и типовым неисправностям.
          </p>
        </div>
      </div>

      <div class="mt-6 grid gap-4 lg:grid-cols-3">
        <article v-for="brand in brandCards" :key="brand.slug" class="flex h-full flex-col rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
          <div class="flex min-h-14 items-center justify-between gap-4">
            <img v-if="brand.logo" :src="brand.logo" :alt="`Логотип ${brand.name}`" class="max-h-12 max-w-36 object-contain" />
            <span v-else class="inline-flex min-h-12 items-center rounded-lg bg-neutral-950 px-4 text-base font-black text-white">{{ brand.name }}</span>
            <span class="rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold text-neutral-600">{{ brand.codes.length }} кодов</span>
          </div>
          <h3 class="mt-5 text-xl font-black">
            Ремонт котлов {{ "alias" in brand && brand.alias ? `${brand.name} / ${brand.alias}` : brand.name }}
          </h3>
          <p class="mt-2 text-sm leading-6 text-neutral-600">Диагностика, ошибки, датчики, розжиг, циркуляция и электронные узлы {{ brand.name }}.</p>
          <div class="mt-auto pt-5">
            <NuxtLink :to="`/${region}/remont/${brand.slug}/`" class="inline-flex rounded-lg bg-neutral-950 px-4 py-3 text-sm font-bold text-white hover:bg-neutral-800">
              Страница бренда
            </NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <section class="bg-neutral-50 py-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-black tracking-tight">Услуги</h2>
        <div class="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="service in repairServicePages"
            :key="service.slug"
            :to="`/${region}/uslugi/${service.slug}/`"
            class="rounded-lg border border-neutral-200 bg-white p-5 text-neutral-950 shadow-sm hover:border-emerald-300"
          >
            <h3 class="text-lg font-black">{{ service.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-neutral-600">{{ service.lead }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <LocalTrustBlock :region="regionName" :region-route="regionRoute" service="ремонту газовых котлов" />

    <section class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div class="grid gap-6 lg:grid-cols-[360px_1fr]">
        <div>
          <h2 class="text-3xl font-black tracking-tight">Популярные ошибки</h2>
          <p class="mt-3 text-sm leading-6 text-neutral-600">
            Быстрые переходы на частые коды. На каждой странице есть причины, безопасные действия и ссылка на другие ошибки этой марки.
          </p>
        </div>
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="item in popularErrors"
            :key="`${item.slug}-${item.code}`"
            :to="`/${region}/remont/${item.slug}/oshybka-${item.code.toLowerCase()}/`"
            class="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm hover:border-emerald-300 hover:bg-emerald-50"
          >
            <div class="text-sm font-bold text-emerald-700">{{ item.brand }} {{ item.code }}</div>
            <div class="mt-2 text-base font-black leading-snug">Ошибка {{ item.code }}</div>
            <div class="mt-1 text-sm leading-6 text-neutral-600">{{ item.text }}</div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm md:p-7">
        <h2 class="text-3xl font-black tracking-tight">Все коды ошибок</h2>
        <div class="mt-6 grid gap-6 lg:grid-cols-3">
          <div v-for="brand in brandCards" :key="brand.slug" class="rounded-lg bg-neutral-50 p-4">
            <div class="flex items-center gap-3">
              <img :src="brand.logo" :alt="`Логотип ${brand.name}`" class="max-h-9 max-w-28 object-contain" />
              <h3 class="text-lg font-black">{{ brand.name }}</h3>
            </div>
            <div class="mt-4 grid grid-cols-4 gap-2">
              <NuxtLink
                v-for="code in brand.codes"
                :key="code"
                :to="`/${region}/remont/${brand.slug}/oshybka-${code.toLowerCase()}/`"
                class="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-center text-sm font-bold text-neutral-900 hover:border-emerald-300 hover:bg-emerald-50"
              >
                  {{ displayErrorCode(code) }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-5 rounded-lg bg-neutral-950 p-5 text-white md:flex-row md:items-center md:justify-between md:p-7">
        <div>
          <h2 class="text-2xl font-black tracking-tight">Нужен мастер по котлу?</h2>
          <p class="mt-2 text-sm leading-6 text-neutral-300">Позвоните, назовите марку котла и код ошибки. Выезд по {{ regionRoute }} и области.</p>
        </div>
        <a :href="phoneHref" class="rounded-lg bg-emerald-500 px-5 py-3 text-center text-sm font-black text-white hover:bg-emerald-400">
          {{ phone }}
        </a>
      </div>
    </section>
  </main>
</template>
