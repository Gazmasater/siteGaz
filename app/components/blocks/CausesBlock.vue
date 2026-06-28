<script setup lang="ts">
type CauseItem = {
  title: string
  text?: string
  probability?: number
  icon?: string
}

type Props = {
  title?: string
  subtitle?: string
  items: CauseItem[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Причины неисправности',
  subtitle: '',
})
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="rounded-lg border bg-white p-5 shadow-sm md:p-7">
    <header class="max-w-2xl">
      <h2 class="text-2xl font-black tracking-tight md:text-3xl">
        {{ props.title }}
      </h2>
      <p v-if="props.subtitle" class="mt-2 text-neutral-600">
        {{ props.subtitle }}
      </p>
    </header>

    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <article
        v-for="(it, i) in props.items"
        :key="i"
        class="rounded-lg border bg-neutral-50 p-4"
      >
        <div class="flex h-full flex-col gap-4">
          <div
            class="grid h-10 w-10 place-items-center rounded-lg border bg-white text-sm font-black text-emerald-700"
            aria-hidden="true"
          >
            {{ it.icon ?? `0${i + 1}` }}
          </div>

          <div class="min-w-0">
            <h3 class="font-medium leading-snug">
              {{ it.title }}
            </h3>
            <p v-if="it.text" class="mt-2 text-sm leading-relaxed text-neutral-600">
              {{ it.text }}
            </p>
            <div v-if="typeof it.probability === 'number'" class="mt-4">
              <div class="h-2 overflow-hidden rounded-full bg-neutral-200">
                <div class="h-full rounded-full bg-emerald-500" :style="{ width: `${Math.round(it.probability * 100)}%` }" />
              </div>
              <div class="mt-2 text-xs font-semibold text-neutral-500">Частота обращений: {{ Math.round(it.probability * 100) }}%</div>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div class="mt-6">
      <slot name="note" />
    </div>
    </div>
  </section>
</template>
