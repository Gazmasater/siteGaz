<script setup lang="ts">
defineProps<{ items: { q: string; a: string }[] }>();
</script>

<template>
  <section class="card">
    <h2 class="h2">FAQ</h2>
    <details v-for="(it, i) in items" :key="i" class="qa">
      <summary class="q">{{ it.q }}</summary>
      <p class="a">{{ it.a }}</p>
    </details>
  </section>
</template>

<style scoped>
.card { border: 1px solid #e6e6e6; border-radius: 14px; padding: 16px; }
.h2 { margin: 0 0 10px; font-size: 18px; }
.qa { padding: 8px 0; border-top: 1px solid #f1f1f1; }
.qa:first-of-type { border-top: 0; }
.q { cursor: pointer; }
.a { margin: 8px 0 0; color: #333; line-height: 1.5; }
</style>