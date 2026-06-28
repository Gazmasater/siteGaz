<script setup lang="ts">
defineProps<{ items: { q: string; a: string }[] }>();
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="rounded-lg border bg-white p-5 shadow-sm md:p-7">
      <h2 class="m-0 text-2xl font-black tracking-tight md:text-3xl">Вопросы по ошибке</h2>
      <div class="mt-5 divide-y divide-neutral-200">
        <details v-for="(it, i) in items" :key="i" class="group py-4">
          <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
            {{ it.q }}
            <span class="text-xl leading-none text-emerald-600 group-open:rotate-45">+</span>
          </summary>
          <p class="mt-3 max-w-3xl text-sm leading-6 text-neutral-600">{{ it.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
