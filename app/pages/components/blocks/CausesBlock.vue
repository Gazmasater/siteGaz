<script setup lang="ts">
defineProps<{ items: { title: string; probability?: number }[] }>();
const pct = (v?: number) => (typeof v === "number" ? `${Math.round(v * 100)}%` : "");
</script>

<template>
  <section class="card">
    <h2 class="h2">Частые причины</h2>
    <ul class="list">
      <li v-for="(it, i) in items" :key="i" class="row">
        <span>{{ it.title }}</span>
        <span class="muted">{{ pct(it.probability) }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.card { border: 1px solid #e6e6e6; border-radius: 14px; padding: 16px; }
.h2 { margin: 0 0 10px; font-size: 18px; }
.list { margin: 0; padding-left: 18px; display: grid; gap: 8px; }
.row { display: flex; justify-content: space-between; gap: 12px; }
.muted { color: #666; white-space: nowrap; }
</style>