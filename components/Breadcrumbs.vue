<script setup lang="ts">
defineProps<{ items: { title: string; url: string }[] }>();
</script>

<template>
  <nav class="bc" aria-label="breadcrumbs">
    <a v-for="(it, i) in items" :key="i" class="link" :href="it.url">
      {{ it.title }}<span v-if="i < items.length - 1" class="sep">/</span>
    </a>
  </nav>
</template>

<style scoped>
.bc { display: flex; gap: 6px; flex-wrap: wrap; font-size: 13px; color: #666; }
.link { color: inherit; text-decoration: none; }
.link:hover { text-decoration: underline; }
.sep { margin-left: 6px; color: #bbb; }
</style>