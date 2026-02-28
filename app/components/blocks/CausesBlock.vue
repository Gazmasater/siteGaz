<script setup lang="ts">
type CauseItem = {
  title: string
  text: string
  icon?: string // например: "🔥" или "⚠️"
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
  <section class="rounded-3xl border bg-white p-6 md:p-8">
    <header class="max-w-2xl">
      <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">
        {{ props.title }}
      </h2>
      <p v-if="props.subtitle" class="mt-2 text-neutral-600">
        {{ props.subtitle }}
      </p>
    </header>

    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="(it, i) in props.items"
        :key="i"
        class="rounded-2xl border bg-neutral-50 p-4"
      >
        <div class="flex items-start gap-3">
          <div
            class="grid h-10 w-10 place-items-center rounded-xl border bg-white text-lg"
            aria-hidden="true"
          >
            {{ it.icon ?? '•' }}
          </div>

          <div class="min-w-0">
            <h3 class="font-medium leading-snug">
              {{ it.title }}
            </h3>
            <p class="mt-1 text-sm leading-relaxed text-neutral-600">
              {{ it.text }}
            </p>
          </div>
        </div>
      </article>
    </div>

    <div class="mt-6">
      <slot name="note" />
    </div>
  </section>
</template>