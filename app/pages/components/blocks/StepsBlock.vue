<script setup lang="ts">
defineProps<{ items: { step: number; title: string; safety: "low" | "med" | "high"; can_user_do: boolean }[] }>();
const badge = (s: "low"|"med"|"high") => (s === "low" ? "Безопасно" : s === "med" ? "Осторожно" : "Только мастер");
</script>

<template>
  <section class="card">
    <h2 class="h2">Что можно сделать</h2>
    <ol class="steps">
      <li v-for="it in items" :key="it.step" class="step">
        <div class="top">
          <strong>Шаг {{ it.step }}.</strong>
          <span class="tag">{{ badge(it.safety) }}</span>
        </div>
        <div class="title">{{ it.title }}</div>
        <div class="muted">{{ it.can_user_do ? "Можно выполнить самостоятельно" : "Лучше доверить мастеру" }}</div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.card { border: 1px solid #e6e6e6; border-radius: 14px; padding: 16px; }
.h2 { margin: 0 0 10px; font-size: 18px; }
.steps { margin: 0; padding-left: 18px; display: grid; gap: 10px; }
.step { padding: 10px 0; border-bottom: 1px dashed #eee; }
.step:last-child { border-bottom: 0; }
.top { display: flex; justify-content: space-between; gap: 10px; }
.tag { font-size: 12px; padding: 2px 8px; border-radius: 999px; border: 1px solid #ddd; }
.title { margin-top: 4px; }
.muted { color: #666; font-size: 13px; margin-top: 4px; }
</style>
