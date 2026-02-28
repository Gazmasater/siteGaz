<script setup lang="ts">
type Props = {
  title?: string
  subtitle?: string
  desktopSrc?: string
  mobileSrc?: string
  alt?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Сервисный центр котлов',
  subtitle: 'Липецк и область',
  desktopSrc: '/img/hero-desktop.jpg',
  alt: 'Ремонт котлов',
})
</script>

<template>
  <section class="relative h-screen overflow-hidden">
    <picture>
      <!-- смартфон -->
      <source media="(max-width: 768px)" :srcset="props.mobileSrc" />
      <!-- ПК по умолчанию -->
      <img
        :src="props.desktopSrc"
        :alt="props.alt"
        class="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        fetchpriority="high"
      />
    </picture>

    <!-- затемнение -->
    <div class="absolute inset-0 bg-black/35" />

    <!-- контент поверх -->
    <div class="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
      <div class="max-w-3xl">
        <h1 class="text-4xl font-semibold leading-tight md:text-6xl">
          {{ props.title }}
        </h1>

        <p v-if="props.subtitle" class="mt-4 text-xl text-white/90 md:text-2xl">
          {{ props.subtitle }}
        </p>

        <div class="mt-10 flex flex-wrap justify-center gap-3">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </section>
</template>