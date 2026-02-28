<script setup lang="ts">
defineProps<{ items: { title: string; probability?: number }[] }>();
const pct = (v?: number) => (typeof v === "number" ? `${Math.round(v * 100)}%` : "");
</script>

<template>
  <section class="rounded-2xl border bg-white p-5">
    <div class="flex items-baseline justify-between gap-3">
      <h2 class="text-lg font-semibold">Частые причины</h2>
      <span class="text-xs text-neutral-500">оценка частоты</span>
    </div>
    <ul class="mt-3 space-y-2">
      <li v-for="(it, i) in items" :key="i" class="flex justify-between gap-4">
        <span class="text-neutral-800">{{ it.title }}</span>
        <span class="text-neutral-500 text-sm">{{ pct(it.probability) }}</span>
      </li>
    </ul>
  </section>
</template>
app/components/blocks/StepsBlock.vue
<script setup lang="ts">
defineProps<{ items: { step: number; title: string; safety?: "low"|"med"|"high"; can_user_do?: boolean }[] }>();
const badge = (s?: "low"|"med"|"high") => s === "high" ? "Только мастер" : s === "med" ? "Осторожно" : "Можно";
</script>

<template>
  <section class="rounded-2xl border bg-white p-5">
    <h2 class="text-lg font-semibold">Что можно сделать</h2>
    <ol class="mt-3 space-y-3">
      <li v-for="it in items" :key="it.step" class="rounded-xl border bg-neutral-50 p-4">
        <div class="flex items-start justify-between gap-3">
          <div class="font-medium">Шаг {{ it.step }}: {{ it.title }}</div>
          <span class="text-xs px-2 py-1 rounded-full border bg-white text-neutral-600">{{ badge(it.safety) }}</span>
        </div>
        <div v-if="it.can_user_do !== undefined" class="mt-2 text-sm text-neutral-500">
          {{ it.can_user_do ? "Можно выполнить самостоятельно" : "Лучше вызвать мастера" }}
        </div>
      </li>
    </ol>
  </section>
</template>
app/components/blocks/FaqBlock.vue
<script setup lang="ts">
defineProps<{ items: { q: string; a: string }[] }>();
</script>

<template>
  <section class="rounded-2xl border bg-white p-5">
    <h2 class="text-lg font-semibold">FAQ</h2>
    <div class="mt-3 divide-y">
      <details v-for="(it, i) in items" :key="i" class="py-3">
        <summary class="cursor-pointer text-neutral-900 font-medium">{{ it.q }}</summary>
        <p class="mt-2 text-neutral-700 leading-relaxed">{{ it.a }}</p>
      </details>
    </div>
  </section>
</template>
app/components/blocks/CtaBlock.vue
<script setup lang="ts">
const props = defineProps<{ primary: string; phone: string; region: string; brand: string; code: string }>();
const tel = computed(() => `tel:${props.phone.replace(/\s+/g, "")}`);
</script>

<template>
  <section class="rounded-2xl border bg-neutral-900 p-5 text-white">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h2 class="text-lg font-semibold">{{ primary }}</h2>
        <p class="mt-1 text-sm text-white/70">Регион: {{ region }} · {{ brand }} · {{ code }}</p>
      </div>
      <a :href="tel" class="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 font-medium text-neutral-900 hover:bg-white/90">
        Позвонить {{ phone }}
      </a>
    </div>
  </section>
</template>