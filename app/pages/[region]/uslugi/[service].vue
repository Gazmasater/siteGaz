<script setup lang="ts">
import { useRoute } from "vue-router";
import { brandErrorCodes, regionPrepTitle, regionTitle, repairBrands, repairServicePages } from "~/utils/repairSeo";

const route = useRoute();
const region = String(route.params.region || "");
const serviceSlug = String(route.params.service || "");
const service = repairServicePages.find((item) => item.slug === serviceSlug);
const regionName = regionTitle(region);
const regionPrep = regionPrepTitle(region);

if (!service) throw createError({ statusCode: 404, statusMessage: "Not found" });

const canonical = `https://remontkotlov48.ru/${region}/uslugi/${service.slug}/`;
const title = `${service.title} в ${regionPrep}`;
const description = `${service.lead} Выезд мастера по ${regionPrep}, диагностика и согласование стоимости до ремонта.`;
const popularLinks = repairBrands.flatMap((brand) =>
  (brandErrorCodes[brand.slug] || []).slice(0, 4).map((code) => ({
    title: `${brand.name} ${code}`,
    url: `/${region}/remont/${brand.slug}/oshybka-${code.toLowerCase()}/`,
  })),
);

useHead({
  title: `${title} — ремонт котлов`,
  meta: [
    { name: "description", content: description },
    { property: "og:title", content: `${title} — ремонт котлов` },
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
        serviceType: service.title,
        areaServed: { "@type": "City", name: regionName },
        provider: {
          "@type": "LocalBusiness",
          name: "Ремонт котлов 48",
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
          { "@type": "ListItem", position: 2, name: service.title, item: canonical },
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
      <span>{{ service.title }}</span>
    </nav>

    <section class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="max-w-4xl">
        <h1 class="text-4xl font-black leading-tight tracking-tight md:text-5xl">{{ title }}</h1>
        <p class="mt-5 text-lg leading-8 text-neutral-700">{{ description }}</p>
        <div class="mt-7 flex flex-wrap gap-3">
          <a href="tel:+79330917276" class="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-400">
            Позвонить мастеру
          </a>
          <NuxtLink :to="`/${region}/remont/`" class="rounded-lg border px-5 py-3 text-sm font-bold text-neutral-900 hover:bg-neutral-50">
            Ошибки котлов
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="mx-auto grid max-w-7xl gap-5 px-4 py-6 sm:px-6 lg:grid-cols-3 lg:px-8">
      <article class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 class="text-xl font-black">Диагностика</h2>
        <p class="mt-3 text-sm leading-6 text-neutral-600">Проверяем симптомы, коды ошибок, питание, датчики и связанные узлы котла.</p>
      </article>
      <article class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 class="text-xl font-black">Согласование</h2>
        <p class="mt-3 text-sm leading-6 text-neutral-600">Объясняем причину поломки и стоимость работ до начала ремонта.</p>
      </article>
      <article class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 class="text-xl font-black">Ремонт</h2>
        <p class="mt-3 text-sm leading-6 text-neutral-600">Устраняем неисправность, проверяем запуск, отопление и горячую воду.</p>
      </article>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="rounded-lg border border-neutral-200 bg-neutral-50 p-5 md:p-7">
        <h2 class="text-2xl font-black tracking-tight">Ремонт по маркам</h2>
        <div class="mt-5 grid gap-3 md:grid-cols-3">
          <NuxtLink
            v-for="brand in repairBrands"
            :key="brand.slug"
            :to="`/${region}/remont/${brand.slug}/`"
            class="rounded-lg border bg-white p-4 text-neutral-900 hover:border-emerald-300"
          >
            <span class="font-bold">Ремонт котлов {{ brand.name }}</span>
            <span class="mt-2 block text-sm leading-6 text-neutral-600">Ошибки, диагностика и частые неисправности {{ brand.name }}.</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm md:p-7">
        <h2 class="text-2xl font-black tracking-tight">Популярные ошибки</h2>
        <div class="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <NuxtLink
            v-for="link in popularLinks"
            :key="link.url"
            :to="link.url"
            class="rounded-lg border border-neutral-200 px-4 py-3 text-sm font-bold text-neutral-900 hover:border-emerald-300 hover:bg-emerald-50"
          >
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
