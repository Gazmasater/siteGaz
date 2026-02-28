<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const region = String(route.params.region || "");
const brand = String(route.params.brand || "");
const code = String(route.params.code || "");

const slug = `remont-${brand}-oshybka-${code}-${region}`;

const { data, error } = await useFetch(`/api/repair/page/${slug}`, { key: slug });

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}

const page = computed(() => data.value);

useSeo(page);
useJsonLd(page);
</script>

<template>
  <main class="container">
    <Breadcrumbs v-if="page?.breadcrumbs" :items="page.breadcrumbs" />
    <h1 class="h1">{{ page?.h1 }}</h1>
    <PageRenderer v-if="page?.blocks" :blocks="page.blocks" />
  </main>
</template>

<style scoped>
.container { max-width: 920px; margin: 0 auto; padding: 24px 16px; }
.h1 { font-size: 32px; line-height: 1.15; margin: 16px 0 18px; }
</style>