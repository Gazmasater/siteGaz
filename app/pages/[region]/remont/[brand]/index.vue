<script setup lang="ts">
import { useRoute } from "vue-router";
import { brandErrorCodes, displayErrorCode, regionPrepTitle, regionTitle, repairBrands, repairServicePages } from "~/utils/repairSeo";

const route = useRoute();
const region = String(route.params.region || "");
const brandSlug = String(route.params.brand || "");
const regionName = regionTitle(region);
const regionPrep = regionPrepTitle(region);
const brand = repairBrands.find((item) => item.slug === brandSlug);

if (!brand) throw createError({ statusCode: 404, statusMessage: "Not found" });

const codes = brandErrorCodes[brandSlug] || [];
const canonical = `https://remontkotlov48.ru/${region}/remont/${brandSlug}/`;
const yandexMapsUrl = "https://yandex.ru/maps/org/gazmaster/165084897107/?ll=39.535637%2C52.603696&z=16";
const yandexServicesUrl =
  "https://uslugi.yandex.ru/profile/Gazmaster-108825?occupationId=%2Fremont-i-ustanovka-tehniki&specId=%2Fremont-i-ustanovka-tehniki%2Fdrugoe&text=%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82+%D0%B3%D0%B0%D0%B7%D0%BE%D0%B2%D1%8B%D1%85+%D0%BA%D0%BE%D1%82%D0%BB%D0%BE%D0%B2";
const brandFullName = "alias" in brand && brand.alias ? `${brand.name} / ${brand.alias}` : brand.name;
const partsUrl = "/zapchasti/";
const partsLinks = [
  { label: `Вентиляторы ${brand.name}`, href: `/zapchasti/${brandSlug}/ventilyatory/` },
  { label: `Теплообменники ${brand.name}`, href: `/zapchasti/${brandSlug}/teploobmenniki/` },
];
const title = `Ремонт газовых котлов ${brandFullName} в ${regionPrep}`;
const description = `Ремонт и обслуживание газовых котлов ${brandFullName} в ${regionPrep}: выезд мастера, диагностика, ошибки, розжиг, плата, насос, датчики, теплообменник и дымоудаление.`;

useHead({
  title: `${title} — выезд мастера`,
  meta: [
    { name: "description", content: description },
    { property: "og:title", content: `${title} — выезд мастера` },
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
        "@type": "Service",
        name: title,
        description,
        serviceType: "Ремонт газовых котлов",
        areaServed: { "@type": "City", name: regionName },
        brand: { "@type": "Brand", name: brand.name },
        provider: {
          "@type": "LocalBusiness",
          name: `Ремонт котлов ${brandFullName} в ${regionPrep}`,
          telephone: "8 (962) 352-70-02",
          hasMap: yandexMapsUrl,
          sameAs: [yandexMapsUrl, yandexServicesUrl],
          address: { "@type": "PostalAddress", addressLocality: regionName, addressCountry: "RU" },
        },
        offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "RUB", url: canonical },
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: "https://remontkotlov48.ru/" },
          { "@type": "ListItem", position: 2, name: "Ремонт котлов", item: `https://remontkotlov48.ru/${region}/remont/` },
          { "@type": "ListItem", position: 3, name: brandFullName, item: canonical },
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
      <NuxtLink :to="`/${region}/remont/`" class="hover:text-neutral-900">Ремонт котлов</NuxtLink>
      <span class="mx-2 text-neutral-300" aria-hidden="true">/</span>
      <span>{{ brandFullName }}</span>
    </nav>

    <section class="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_340px] lg:px-8">
      <div>
        <div class="mb-5 inline-flex items-center rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
          <img :src="brand.logo" :alt="`Логотип ${brand.name}`" class="h-12 w-auto" />
        </div>
        <h1 class="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-5xl">{{ title }}</h1>
        <p class="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">{{ description }}</p>
        <div class="mt-7 flex flex-wrap gap-3">
          <a href="tel:+79623527002" class="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-400">
            Позвонить мастеру
          </a>
          <MessengerButtons />
          <NuxtLink :to="`/${region}/remont/`" class="rounded-lg border px-5 py-3 text-sm font-bold text-neutral-900 hover:bg-neutral-50">
            Все ошибки котлов
          </NuxtLink>
          <a :href="partsUrl" class="rounded-lg border border-amber-300 bg-amber-50 px-5 py-3 text-sm font-bold text-amber-950 hover:bg-amber-100">
            Запчасти для {{ brand.name }}
          </a>
        </div>
      </div>

      <aside class="rounded-lg border border-neutral-200 bg-neutral-50 p-5">
        <h2 class="text-lg font-black">Что ремонтируем</h2>
        <ul class="mt-4 grid gap-3 text-sm leading-6 text-neutral-700">
          <li>Ошибки розжига и контроля пламени</li>
          <li>Датчики температуры, давления и протока</li>
          <li>Насос, теплообменник и циркуляция</li>
          <li>Плата управления и электрические цепи</li>
          <li>Дымоудаление и вентилятор</li>
        </ul>
      </aside>
    </section>

    <LocalTrustBlock
      :region="regionName"
      :region-route="region === 'lipeck' ? 'Липецку' : regionName"
      :brand="brandFullName"
      :service="`ремонту котлов ${brandFullName}`"
      compact
    />

    <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="rounded-lg border border-amber-200 bg-amber-50 p-5 md:p-7">
        <h2 class="text-2xl font-black tracking-tight">Запчасти для котлов {{ brandFullName }}</h2>
        <p class="mt-2 max-w-3xl text-sm leading-6 text-neutral-700">Для замены подбираем деталь по артикулу, модели и серийному номеру котла. Срок поставки подтверждённой позиции — до 7 дней.</p>
        <div class="mt-5 flex flex-wrap gap-3">
          <a v-for="item in partsLinks" :key="item.href" :href="item.href" class="rounded-lg border border-amber-300 bg-white px-4 py-3 text-sm font-bold text-amber-950 hover:bg-amber-100">
            {{ item.label }}
          </a>
        </div>
      </div>
    </section>

    <section v-if="codes.length" class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm md:p-7">
        <h2 class="text-2xl font-black tracking-tight">Ошибки котлов {{ brandFullName }}</h2>
        <div class="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          <NuxtLink
            v-for="code in codes"
            :key="code"
            :to="`/${region}/remont/${brand.slug}/oshybka-${code.toLowerCase()}/`"
            class="rounded-lg border border-neutral-200 px-4 py-3 text-sm font-bold text-neutral-900 hover:border-emerald-300 hover:bg-emerald-50"
          >
            Ошибка {{ displayErrorCode(code) }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="rounded-lg border border-neutral-200 bg-neutral-50 p-5 md:p-7">
        <h2 class="text-2xl font-black tracking-tight">Услуги по ремонту {{ brand.name }}</h2>
        <div class="mt-5 grid gap-3 md:grid-cols-3">
          <NuxtLink
            v-for="service in repairServicePages"
            :key="service.slug"
            :to="`/${region}/uslugi/${service.slug}/`"
            class="rounded-lg border bg-white p-4 text-neutral-900 hover:border-emerald-300"
          >
            <span class="font-bold">{{ service.title }}</span>
            <span class="mt-2 block text-sm leading-6 text-neutral-600">{{ service.lead }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
