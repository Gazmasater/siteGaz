<script setup lang="ts">
const region = "Липецк"; // потом сделаем динамически из cookie/route
const phone = "+7 (933) 091-72-76";
const phoneHref = "tel:+79330917276";
const currentYear = new Date().getFullYear();

const serviceLinks = [
  { label: "Ремонт газовых котлов", to: "/" },
  { label: "Обслуживание котлов", to: "/" },
  { label: "Чистка теплообменника", to: "/" },
  { label: "Замена платы управления", to: "/" },
];

const brandLinks = [
  "Baxi",
  "Navien",
  "Ariston",
  "Bosch",
  "Vaillant",
  "Protherm",
];
</script>

<template>
  <div class="min-h-screen bg-neutral-50 text-neutral-900">
    <header class="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div class="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between gap-4">
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="h-9 w-9 rounded-xl bg-neutral-900 text-white grid place-items-center font-semibold">G</div>
          <div class="leading-tight">
            <div class="font-semibold tracking-tight">Gazmaster</div>
            <div class="text-xs text-neutral-500">Ремонт котлов · {{" "}} {{ region }}</div>
          </div>
        </NuxtLink>

        <nav class="hidden sm:flex items-center gap-4 text-sm text-neutral-600">
          <NuxtLink to="/lipeck/remont/" class="hover:text-neutral-900">Ремонт</NuxtLink>
          <a :href="phoneHref" class="hover:text-neutral-900">Контакты</a>
        </nav>

        <div class="flex items-center gap-3">
          <a
            :href="phoneHref"
            class="hidden md:inline-flex items-center rounded-xl border bg-white px-3 py-2 text-sm hover:bg-neutral-50"
            title="Позвонить"
          >
            {{ phone }}
          </a>
          <a
            :href="phoneHref"
            class="inline-flex items-center rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800"
          >
            Вызвать мастера
          </a>
        </div>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="bg-neutral-950 text-white">
      <div class="grid w-full gap-10 px-4 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8 2xl:px-12">
        <section>
          <NuxtLink to="/" class="inline-flex items-center gap-3">
            <div class="grid h-10 w-10 place-items-center rounded-lg bg-yellow-400 font-black text-neutral-950">G</div>
            <div class="leading-tight">
              <div class="text-lg font-semibold tracking-tight">Gazmaster</div>
              <div class="text-sm text-neutral-400">Ремонт котлов · {{ region }}</div>
            </div>
          </NuxtLink>

          <p class="mt-5 max-w-lg text-sm leading-6 text-neutral-300">
            Ремонт, диагностика и обслуживание газовых котлов в Липецке и области.
            Выезд мастера в день обращения, понятная стоимость до начала работ.
          </p>

          <div class="mt-6 grid gap-3 text-sm text-neutral-200">
            <div class="flex gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-yellow-400"></span>
              <span>Гарантия на выполненные работы</span>
            </div>
            <div class="flex gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-yellow-400"></span>
              <span>Диагностика бесплатно при ремонте</span>
            </div>
            <div class="flex gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-yellow-400"></span>
              <span>Работаем ежедневно с 8:00 до 22:00</span>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-sm font-semibold uppercase tracking-wide text-neutral-400">Услуги</h2>
          <nav class="mt-5 grid gap-3 text-sm">
            <NuxtLink
              v-for="item in serviceLinks"
              :key="item.label"
              :to="item.to"
              class="text-neutral-300 hover:text-yellow-300"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>
        </section>

        <section>
          <h2 class="text-sm font-semibold uppercase tracking-wide text-neutral-400">Марки котлов</h2>
          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="brand in brandLinks"
              :key="brand"
              class="rounded-full border border-white/10 px-3 py-1 text-sm text-neutral-300"
            >
              {{ brand }}
            </span>
          </div>
        </section>

        <section>
          <h2 class="text-sm font-semibold uppercase tracking-wide text-neutral-400">Контакты</h2>
          <a
            :href="phoneHref"
            class="mt-5 block text-2xl font-black tracking-tight text-yellow-300 hover:text-yellow-200"
          >
            {{ phone }}
          </a>
          <div class="mt-4 grid gap-2 text-sm leading-6 text-neutral-300">
            <div>Регион: {{ region }} и область</div>
            <div>Выезд: в день обращения</div>
            <div>Время работы: 8:00-22:00</div>
          </div>
          <a
            :href="phoneHref"
            class="mt-6 inline-flex items-center rounded-lg bg-yellow-400 px-5 py-3 text-sm font-bold text-neutral-950 hover:bg-yellow-300"
          >
            Позвонить мастеру
          </a>
        </section>
      </div>

      <div class="border-t border-white/10">
        <div class="flex flex-col gap-3 px-4 py-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between lg:px-8 2xl:px-12">
          <div>© {{ currentYear }} Gazmaster. Ремонт газовых котлов в Липецке.</div>
          <div>Информация на сайте не является публичной офертой.</div>
        </div>
      </div>
    </footer>
  </div>
</template>
