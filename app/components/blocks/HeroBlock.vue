<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  img?: string;
  alt?: string;
  bullets?: string[];
}>();
</script>

<template>
  <section class="rounded-3xl border bg-white overflow-hidden">
    <div class="grid md:grid-cols-2">
      <div class="p-6 md:p-8">
        <h1 class="text-3xl md:text-4xl font-semibold tracking-tight">
          {{ title }}
        </h1>
        <p class="mt-3 text-neutral-600 leading-relaxed">
          {{ subtitle }}
        </p>

        <ul v-if="bullets?.length" class="mt-5 space-y-2 text-sm text-neutral-700">
          <li v-for="(b, i) in bullets" :key="i" class="flex gap-2">
            <span class="mt-1 h-2 w-2 rounded-full bg-neutral-900"></span>
            <span>{{ b }}</span>
          </li>
        </ul>

        <div class="mt-6 flex flex-wrap gap-3">
          <slot name="actions" />
        </div>
      </div>

      <div class="relative min-h-[240px] md:min-h-[320px] bg-neutral-100">
        <img
          v-if="img"
          :src="img"
          :alt="alt || ''"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div v-else class="absolute inset-0 grid place-items-center text-neutral-500 text-sm">
          (сюда фото объекта/мастера)
        </div>
      </div>
    </div>
  </section>
</template>
app/components/blocks/IntroBlock.vue
<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <section class="rounded-2xl border bg-white p-5">
    <p class="text-neutral-800 leading-relaxed">{{ text }}</p>
  </section>
</template>