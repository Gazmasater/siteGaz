<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <section class="card">
    <p class="p">{{ text }}</p>
  </section>
</template>

<style scoped>
.card { border: 1px solid #e6e6e6; border-radius: 14px; padding: 16px; }
.p { margin: 0; font-size: 16px; line-height: 1.5; }
</style>