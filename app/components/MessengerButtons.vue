<script setup lang="ts">
withDefaults(defineProps<{ tone?: "light" | "dark" }>(), {
  tone: "light",
});

const telegramHref = "https://t.me/gazmasterzip48_bot?start=master";
const maxHref = "https://max.ru/id482414631253_bot?start=master";
</script>

<template>
  <a
    :href="telegramHref"
    target="_blank"
    rel="noopener"
    class="inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-3 text-sm font-bold text-white hover:bg-sky-400"
  >
    Написать в Telegram
  </a>
  <a
    :href="maxHref"
    target="_blank"
    rel="noopener"
    :class="tone === 'dark'
      ? 'inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/15'
      : 'inline-flex items-center justify-center rounded-lg bg-[#2767ff] px-5 py-3 text-sm font-bold text-white hover:bg-[#1f57d6]'"
  >
    Написать в Max
  </a>
</template>
