<script setup lang="ts">
type Props = {
  title: string
  subtitle: string
  img?: string
  alt?: string
  bullets?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  img: undefined,
  alt: '',
  bullets: () => [],
})
</script>

<template>
  <section class="overflow-hidden rounded-3xl border bg-white">
    <div class="grid md:grid-cols-2">
      <!-- Text -->
      <div class="p-6 md:p-8">
        <h1 class="text-3xl md:text-4xl font-semibold tracking-tight">
          {{ props.title }}
        </h1>

        <p class="mt-3 leading-relaxed text-neutral-600">
          {{ props.subtitle }}
        </p>

        <ul
          v-if="props.bullets.length"
          class="mt-5 space-y-2 text-sm text-neutral-700"
        >
          <li v-for="(b, i) in props.bullets" :key="i" class="flex gap-2">
            <span class="mt-1 h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
            <span>{{ b }}</span>
          </li>
        </ul>

        <div class="mt-6 flex flex-wrap gap-3">
          <slot name="actions" />
        </div>
      </div>

      <!-- Media -->
      <div class="relative min-h-[240px] bg-neutral-100 md:min-h-[320px]">
        <img
          v-if="props.img"
          :src="props.img"
          :alt="props.alt"
          class="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        <div
          v-else
          class="absolute inset-0 grid place-items-center text-sm text-neutral-500"
        >
          (сюда фото объекта/мастера)
        </div>
      </div>
    </div>
  </section>
</template>