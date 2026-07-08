<script setup lang="ts">
import { useRoute } from "vue-router";
import { brandErrorCodes, displayErrorCode, regionRouteTitle, regionTitle, repairBrands, repairServicePages } from "~/utils/repairSeo";

const route = useRoute();
const region = String(route.params.region || "");
const brand = String(route.params.brand || "");
const code = String(route.params.code || "");
const brandMeta = repairBrands.find((item) => item.slug === brand);
const regionName = regionTitle(region);
const regionRoute = regionRouteTitle(region);
const brandFullName = computed(() =>
  brandMeta && "alias" in brandMeta && brandMeta.alias ? `${brandMeta.name} / ${brandMeta.alias}` : brandMeta?.name || brand,
);
const allCodes = brandErrorCodes[brand] || [];
const currentIndex = allCodes.findIndex((item) => item.toLowerCase() === code.toLowerCase());
const relatedCodes = computed(() => {
  const fallback = allCodes.filter((item) => item.toLowerCase() !== code.toLowerCase()).slice(0, 8);
  if (currentIndex < 0) return fallback;
  const before = allCodes.slice(Math.max(0, currentIndex - 4), currentIndex);
  const after = allCodes.slice(currentIndex + 1, currentIndex + 5);
  return [...before, ...after].slice(0, 8);
});

const slug = `remont-${brand}-oshybka-${code}-${region}`;
const { data, error } = await useFetch(`/api/repair/page/${slug}`, { key: slug });
if (error.value) throw createError({ statusCode: 404, statusMessage: "Not found" });

const page = computed(() => data.value);

useSeo(page);
useJsonLd(page);
</script>

<template>
  <div class="pb-10">
    <nav v-if="page?.breadcrumbs" class="mx-auto max-w-7xl px-4 py-4 text-sm text-neutral-500 sm:px-6 lg:px-8">
      <template v-for="(b, i) in page.breadcrumbs" :key="i">
        <NuxtLink v-if="b.url" :to="b.url" class="hover:text-neutral-900">{{ b.title }}</NuxtLink>
        <span v-else>{{ b.title }}</span>
        <span v-if="i < page.breadcrumbs.length - 1" class="mx-2 text-neutral-300">/</span>
      </template>
    </nav>

    <PageRenderer v-if="page?.blocks" :blocks="page.blocks" :h1="page.h1">
      <!-- если захочешь, можем прокинуть actions в hero через slot позже -->
    </PageRenderer>

    <section class="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="rounded-lg border border-neutral-200 bg-neutral-50 p-5 md:p-7">
        <div class="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 class="text-2xl font-black tracking-tight">Другие ошибки {{ brandMeta?.name || brand }}</h2>
            <div class="mt-5 grid gap-3 sm:grid-cols-4">
              <NuxtLink
                v-for="relatedCode in relatedCodes"
                :key="relatedCode"
                :to="`/${region}/remont/${brand}/oshybka-${relatedCode.toLowerCase()}/`"
                class="rounded-lg border bg-white px-4 py-3 text-sm font-bold text-neutral-900 hover:border-emerald-300 hover:bg-emerald-50"
              >
                {{ displayErrorCode(relatedCode) }}
              </NuxtLink>
            </div>
            <NuxtLink
              :to="`/${region}/remont/${brand}/`"
              class="mt-5 inline-flex rounded-lg bg-neutral-950 px-5 py-3 text-sm font-bold text-white hover:bg-neutral-800"
            >
              Ремонт котлов {{ brandMeta?.name || brand }}
            </NuxtLink>
          </div>

          <div>
            <h2 class="text-2xl font-black tracking-tight">Услуги по ремонту</h2>
            <div class="mt-5 grid gap-3">
              <NuxtLink
                v-for="service in repairServicePages.slice(0, 4)"
                :key="service.slug"
                :to="`/${region}/uslugi/${service.slug}/`"
                class="rounded-lg border bg-white p-4 text-neutral-900 hover:border-emerald-300"
              >
                <span class="font-bold">{{ service.title }}</span>
                <span class="mt-1 block text-sm leading-6 text-neutral-600">{{ service.lead }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <LocalTrustBlock
      :region="regionName"
      :region-route="regionRoute"
      :brand="brandFullName"
      :service="`ремонту котлов ${brandFullName}`"
      compact
    />
  </div>
</template>
