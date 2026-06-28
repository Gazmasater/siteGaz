<script setup lang="ts">
withDefaults(defineProps<{ text: string; badge?: string; title?: string; note?: string }>(), {
  badge: "Диагностика",
  title: "Что означает ошибка",
  note: "Самостоятельно выполняйте только безопасные проверки. Разбор котла и газового узла должен делать специалист.",
});
</script>

<template>
  <section id="diagnostics" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="grid gap-5 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm md:grid-cols-[1fr_280px] md:p-7">
      <p class="m-0 text-lg leading-8 text-neutral-700">{{ text }}</p>
      <div class="rounded-lg bg-neutral-950 p-5 text-white">
        <div class="text-sm font-semibold text-emerald-300">{{ badge }}</div>
        <div class="mt-3 text-2xl font-black leading-tight">{{ title }}</div>
        <div class="mt-4 text-sm leading-6 text-neutral-300">{{ note }}</div>
      </div>
    </div>
  </section>
</template>
