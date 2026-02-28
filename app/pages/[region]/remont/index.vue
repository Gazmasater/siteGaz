<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
const region = String(route.params.region || "");
useHead({ title: `Ремонт котлов — ${region}` });
</script>

<template>
  <main style="max-width:920px;margin:0 auto;padding:24px 16px;">
    <h1 style="font-size:32px;margin:0 0 16px;">Ремонт котлов ({{ region }})</h1>
    <p style="color:#666;margin:0 0 16px;">Тестовый хаб региона.</p>

    <NuxtLink :to="`/${region}/remont/protherm/oshybka-f28`">
      Protherm — ошибка F28
    </NuxtLink>
  </main>
</template>
