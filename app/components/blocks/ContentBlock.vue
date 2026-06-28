<script setup lang="ts">
defineProps<{
  title: string;
  paragraphs: string[];
  items?: { title: string; text: string }[];
}>();
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm md:p-7">
      <h2 class="m-0 text-2xl font-black tracking-tight md:text-3xl">{{ title }}</h2>

      <div class="mt-5 grid gap-4 text-base leading-7 text-neutral-700">
        <p v-for="text in paragraphs" :key="text" class="m-0">{{ text }}</p>
      </div>

      <div v-if="items?.length" class="mt-7 grid gap-4 md:grid-cols-3">
        <article v-for="item in items" :key="item.title" class="rounded-lg border bg-neutral-50 p-4">
          <h3 class="text-base font-bold leading-snug text-neutral-950">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-neutral-600">{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
