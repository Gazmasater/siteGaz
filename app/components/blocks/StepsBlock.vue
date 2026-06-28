<script setup lang="ts">
defineProps<{ items: { step: number; title: string; safety: "low" | "med" | "high"; can_user_do: boolean }[] }>();
const badge = (s: "low"|"med"|"high") => (s === "low" ? "Безопасно" : s === "med" ? "Осторожно" : "Только мастер");
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="rounded-lg border border-neutral-200 bg-neutral-50 p-5 md:p-7">
      <h2 class="m-0 text-2xl font-black tracking-tight md:text-3xl">Что можно сделать</h2>
      <ol class="mt-6 grid gap-4 md:grid-cols-3">
        <li v-for="it in items" :key="it.step" class="list-none rounded-lg border bg-white p-5 shadow-sm">
          <div class="flex items-center justify-between gap-3">
            <strong class="text-sm text-neutral-500">Шаг {{ it.step }}</strong>
            <span class="rounded-full border px-3 py-1 text-xs font-semibold text-neutral-600">{{ badge(it.safety) }}</span>
          </div>
          <div class="mt-4 text-lg font-bold leading-snug">{{ it.title }}</div>
          <div class="mt-3 text-sm leading-6 text-neutral-600">{{ it.can_user_do ? "Можно выполнить самостоятельно" : "Лучше доверить мастеру" }}</div>
        </li>
      </ol>
    </div>
  </section>
</template>
