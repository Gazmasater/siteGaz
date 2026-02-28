<script setup lang="ts">
useHead({ title: "Gazmaster" });
</script>

<template>
  <main style="max-width:920px;margin:0 auto;padding:24px 16px;">
    <h1 style="font-size:32px;line-height:1.15;margin:0 0 16px;">Gazmaster</h1>
    <p style="color:#666;line-height:1.5;margin:0 0 16px;">
      Выберите регион и перейдите в раздел ремонта.
    </p>

    <ul style="margin:0;padding-left:18px;">
      <li>
        <NuxtLink to="/lipeck/remont/">Липецк → Ремонт</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/lipeck/remont/protherm/oshybka-f28">Protherm → Ошибка F28</NuxtLink>
      </li>
    </ul>
  </main>
</template>