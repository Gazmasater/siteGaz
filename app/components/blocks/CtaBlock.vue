<script setup lang="ts">
const props = defineProps<{
  primary: string;
  secondary?: string;
  phone: string;
  region: string;
  brand: string;
  code: string;
}>();

const telHref = computed(() => `tel:${props.phone.replace(/[^\d+]/g, "")}`);
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col gap-5 rounded-lg bg-neutral-950 p-5 text-white shadow-xl shadow-neutral-200 md:flex-row md:items-center md:justify-between md:p-7">
      <div>
        <h2 class="m-0 text-2xl font-black tracking-tight">{{ primary }}</h2>
        <p class="mt-2 text-sm text-neutral-300">Регион: {{ region }} · {{ brand }} · {{ code.toUpperCase() }}</p>
      </div>

      <div class="flex flex-col gap-3 sm:flex-row">
        <a class="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-400" :href="telHref">Позвонить {{ phone }}</a>
        <MessengerButtons tone="dark" />
        <button class="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/15" type="button" @click="alert('Дальше подключим /api/leads')">
          {{ secondary || "Оставить заявку" }}
        </button>
      </div>
    </div>
  </section>
</template>
