<script setup lang="ts">
const props = defineProps<{
  primary: string;
  secondary?: string;
  phone: string;
  region: string;
  brand: string;
  code: string;
}>();

const telHref = computed(() => `tel:${props.phone.replace(/\s+/g, "")}`);
</script>

<template>
  <section class="card cta">
    <div>
      <h2 class="h2">{{ primary }}</h2>
      <p class="muted">Регион: {{ region }} · {{ brand }} · {{ code.toUpperCase() }}</p>
    </div>

    <div class="actions">
      <a class="btn" :href="telHref">Позвонить {{ phone }}</a>
      <button class="btn ghost" type="button" @click="alert('Дальше подключим /api/leads')">
        {{ secondary || "Оставить заявку" }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.card { border: 1px solid #e6e6e6; border-radius: 14px; padding: 16px; }
.cta { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
.h2 { margin: 0; font-size: 18px; }
.muted { margin: 6px 0 0; color: #666; font-size: 13px; }
.actions { display: flex; gap: 10px; }
.btn { border: 1px solid #111; border-radius: 12px; padding: 10px 14px; background: #111; color: #fff; text-decoration: none; cursor: pointer; }
.btn.ghost { background: #fff; color: #111; }
</style>