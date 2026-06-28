<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const region = String(route.params.region || "");
const brand = String(route.params.brand || "");
const code = String(route.params.code || "");

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
  </div>
</template>
