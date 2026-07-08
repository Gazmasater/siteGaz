<script setup lang="ts">
const region = "Липецк"; // потом сделаем динамически из cookie/route
const phone = "+7 (933) 091-72-76";
const phoneHref = "tel:+79330917276";
const currentYear = new Date().getFullYear();

const serviceLinks = [
  { label: "Ремонт газовых котлов", to: "/lipeck/uslugi/remont-gazovyh-kotlov/" },
  { label: "Обслуживание котлов", to: "/lipeck/uslugi/obsluzhivanie-kotlov/" },
  { label: "Чистка теплообменника", to: "/lipeck/uslugi/chistka-teploobmennika/" },
  { label: "Замена платы управления", to: "/lipeck/uslugi/zamena-platy-kotla/" },
];

const brandLinks = [
  { label: "Baxi", to: "/lipeck/remont/baxi/" },
  { label: "Navien", to: "/lipeck/remont/navien/" },
  { label: "Protherm", to: "/lipeck/remont/protherm/" },
  { label: "Vaillant / Вайлант", to: "/lipeck/remont/vaillant/" },
  { label: "Viessmann", to: "/lipeck/remont/viessmann/" },
];
</script>

<template>
  <div class="min-h-screen bg-white text-neutral-900">
    <header class="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div class="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between gap-4">
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

    <footer class="bg-white px-3 py-6 text-white sm:px-4 sm:py-8">
      <div class="mx-auto grid max-w-6xl items-start gap-8 rounded-t-3xl bg-neutral-950 px-4 py-7 sm:px-6 sm:py-8 lg:grid-cols-2 xl:grid-cols-[1.25fr_1fr_1fr_1.15fr] lg:gap-14 lg:px-10 xl:gap-20">
        <section class="min-w-0 justify-self-start">
          <NuxtLink to="/" class="inline-flex items-center gap-3">
            <div class="grid h-10 w-10 place-items-center rounded-lg bg-yellow-400 font-black text-neutral-950">G</div>
            <div class="leading-tight">
              <div class="text-lg font-semibold tracking-tight">Gazmaster</div>
              <div class="text-sm text-neutral-400">Ремонт котлов · {{ region }}</div>
            </div>
          </NuxtLink>

          <p class="mt-5 max-w-md text-sm leading-6 text-neutral-300">
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

        <section class="min-w-0 justify-self-start">
          <h2 class="text-sm font-semibold uppercase tracking-wide text-neutral-400">Услуги</h2>
          <nav class="mt-5 grid w-full grid-cols-1 gap-3 text-sm">
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

        <section class="min-w-0 w-full max-w-sm justify-self-start">
          <h2 class="text-sm font-semibold uppercase tracking-wide text-neutral-400">Марки котлов</h2>
          <div class="mt-5 grid w-full grid-cols-2 gap-2 text-sm">
            <NuxtLink
              v-for="brand in brandLinks"
              :key="brand.label"
              :to="brand.to"
              class="rounded-full border border-white/10 px-3 py-1 text-center text-neutral-300 hover:border-yellow-300/40 hover:text-yellow-300"
            >
              {{ brand.label }}
            </NuxtLink>
          </div>
        </section>

        <section class="min-w-0 justify-self-start">
          <h2 class="text-sm font-semibold uppercase tracking-wide text-neutral-400">Контакты</h2>
          <a
            :href="phoneHref"
            class="mt-5 block break-words text-xl font-black tracking-tight text-yellow-300 hover:text-yellow-200 xl:whitespace-nowrap lg:text-2xl"
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

      <div class="mx-auto max-w-6xl rounded-b-3xl border-t border-white/10 bg-neutral-950">
        <div class="flex flex-col gap-3 px-6 py-4 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>© {{ currentYear }} Gazmaster. Ремонт газовых котлов в Липецке.</div>
          <div>Информация на сайте не является публичной офертой.</div>
        </div>
      </div>
    </footer>
  </div>
</template>


<style>
/* Force footer layout on mobile landscape */
@media (max-width: 1024px) and (orientation: landscape) {
  footer > div:first-child {
    grid-template-columns: 1fr !important;
  }

  footer > div:first-child > section {
    width: 100% !important;
    max-width: 100% !important;
  }

  footer nav {
    grid-template-columns: 1fr !important;
  }

  footer nav a {
    display: block;
    white-space: normal !important;
    overflow-wrap: anywhere;
    line-height: 1.45;
  }

  footer a[href^="tel:"] {
    white-space: normal !important;
    overflow-wrap: anywhere;
    line-height: 1.2;
  }
}
</style>
