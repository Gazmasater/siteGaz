<script setup lang="ts">
type Props = {
  title?: string
  subtitle?: string
  img?: string
  logo?: string
  logoAlt?: string
  bullets?: string[]
  desktopSrc?: string
  mobileSrc?: string
  alt?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Сервисный центр котлов',
  subtitle: 'Липецк и область',
  desktopSrc: '/img/hero-desktop.png',
  alt: 'Ремонт котлов',
})

const heroSrc = computed(() => props.img || props.desktopSrc)
const phoneHref = 'tel:+79330917276'
</script>

<template>
  <section class="relative isolate min-h-[680px] overflow-hidden bg-neutral-950 text-white">
    <picture>
      <source v-if="props.mobileSrc" media="(max-width: 768px)" :srcset="props.mobileSrc" />
      <img
        :src="heroSrc"
        :alt="props.alt"
        class="absolute inset-0 -z-20 h-full w-full object-cover object-[63%_center]"
        loading="eager"
        fetchpriority="high"
      />
    </picture>

    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950 via-neutral-950/88 to-neutral-950/20" />
    <div class="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-white to-transparent" />

    <div class="mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <div class="w-full max-w-3xl pt-12">
        <div v-if="props.logo" class="mb-7 inline-flex items-center rounded-lg bg-white p-3 shadow-2xl shadow-black/30">
          <img :src="props.logo" :alt="props.logoAlt || 'Логотип бренда'" class="h-12 w-auto sm:h-14" />
        </div>

        <div class="mb-5 inline-flex items-center rounded-full border border-emerald-300/35 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-100">
          Авторизованный подход к диагностике Protherm
        </div>

        <h1 class="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          {{ props.title }}
        </h1>

        <p v-if="props.subtitle" class="mt-5 max-w-2xl text-lg leading-8 text-white/86 md:text-xl">
          {{ props.subtitle }}
        </p>

        <div v-if="props.bullets?.length" class="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
          <div
            v-for="item in props.bullets"
            :key="item"
            class="rounded-lg border border-white/14 bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur"
          >
            {{ item }}
          </div>
        </div>

        <div class="mt-9 flex flex-wrap items-center gap-3">
          <a :href="phoneHref" class="inline-flex items-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-950/30 hover:bg-emerald-400">
            Позвонить мастеру
          </a>
          <a href="#diagnostics" class="inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/15">
            Смотреть причины
          </a>
          <slot name="actions" />
        </div>
      </div>
    </div>
  </section>
</template>
