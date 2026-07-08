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
const title = `Ремонт котлов ${brand.name} в ${regionPrep}`;
const description = `Ремонт и диагностика котлов ${brand.name} в ${regionPrep}: ошибки, розжиг, плата, насос, датчики, теплообменник и дымоудаление.`;

useHead({
  title: `${title} — выезд мастера`,
  meta: [
    { name: "description", content: description },
    { property: "og:title", content: `${title} — выезд мастера` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
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
          name: `Ремонт котлов ${brand.name} в ${regionPrep}`,
          telephone: "+7 (933) 091-72-76",
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
          { "@type": "ListItem", position: 1, name: "Ремонт котлов", item: `https://remontkotlov48.ru/${region}/remont/` },
          { "@type": "ListItem", position: 2, name: brand.name, item: canonical },
        ],
      }),
    },
  ],
});
</script>

<template>
  <main class="bg-white pb-12 text-neutral-900">
    <nav class="mx-auto max-w-7xl px-4 py-4 text-sm text-neutral-500 sm:px-6 lg:px-8">
      <NuxtLink :to="`/${region}/remont/`" class="hover:text-neutral-900">Ремонт котлов</NuxtLink>
      <span class="mx-2 text-neutral-300">/</span>
      <span>{{ brand.name }}</span>
    </nav>

    <section class="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_340px] lg:px-8">
      <div>
        <div class="mb-5 inline-flex items-center rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
          <img :src="brand.logo" :alt="`Логотип ${brand.name}`" class="h-12 w-auto" />
        </div>
        <h1 class="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-5xl">{{ title }}</h1>
        <p class="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">{{ description }}</p>
        <div class="mt-7 flex flex-wrap gap-3">
          <a href="tel:+79330917276" class="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-400">
            Позвонить мастеру
          </a>
          <NuxtLink :to="`/${region}/remont/`" class="rounded-lg border px-5 py-3 text-sm font-bold text-neutral-900 hover:bg-neutral-50">
            Все ошибки котлов
          </NuxtLink>
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

    <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm md:p-7">
        <h2 class="text-2xl font-black tracking-tight">Ошибки котлов {{ brand.name }}</h2>
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
        <h2 class="text-2xl font-black tracking-tight">Услуги по ремонту</h2>
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
