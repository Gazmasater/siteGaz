<script setup lang="ts">
import { ref } from "vue";

const region = "Липецк"; // потом сделаем динамически из cookie/route
const phone = "8 (962) 352-70-02";
const phoneHref = "tel:+79623527002";
const telegramHref = "https://t.me/gazmasterzip48_bot?start=master";
const maxHref = "https://max.ru/id482414631253_bot?start=master";
const currentYear = new Date().getFullYear();
const mobileMenuOpen = ref(false);

const headerLinks = [
  { label: "Ремонт газовых котлов", to: "/lipeck/uslugi/remont-gazovyh-kotlov/" },
  { label: "Монтаж газовых котлов", to: "/lipeck/uslugi/montazh-gazovyh-kotlov/" },
  { label: "Монтаж систем отопления", to: "/lipeck/uslugi/montazh-sistem-otopleniya/" },
  { label: "Запчасти", to: "/zapchasti/" },
  { label: "Отзывы", to: "/otzyvy/" },
  { label: "Контакты", to: "/kontakty/" },
];

const serviceLinks = [
  { label: "Ремонт газовых котлов", to: "/lipeck/uslugi/remont-gazovyh-kotlov/" },
  { label: "Обслуживание котлов", to: "/lipeck/uslugi/obsluzhivanie-kotlov/" },
  { label: "Монтаж газовых котлов", to: "/lipeck/uslugi/montazh-gazovyh-kotlov/" },
  { label: "Монтаж систем отопления", to: "/lipeck/uslugi/montazh-sistem-otopleniya/" },
  { label: "Чистка теплообменника", to: "/lipeck/uslugi/chistka-teploobmennika/" },
  { label: "Замена платы управления", to: "/lipeck/uslugi/zamena-platy-kotla/" },
  { label: "Запчасти для котлов", to: "/zapchasti/" },
];

const brandLinks = [
  { label: "Ariston / Аристон", to: "/lipeck/remont/ariston/" },
  { label: "Baxi", to: "/lipeck/remont/baxi/" },
  { label: "Ferroli", to: "/lipeck/remont/ferroli/" },
  { label: "Fondital", to: "/lipeck/remont/fondital/" },
  { label: "Navien", to: "/lipeck/remont/navien/" },
  { label: "Protherm", to: "/lipeck/remont/protherm/" },
  { label: "Vaillant / Вайлант", to: "/lipeck/remont/vaillant/" },
  { label: "Viessmann", to: "/lipeck/remont/viessmann/" },
];
</script>

<template>
  <div class="min-h-screen bg-white text-neutral-900">
    <header class="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <NuxtLink to="/" class="flex min-w-0 items-center gap-3">
          <img src="/img/gazmaster-watermark.webp" alt="" class="h-10 w-10 shrink-0 object-contain" />
          <div class="hidden leading-tight sm:block">
            <div class="font-semibold tracking-tight">Gazmaster</div>
            <div class="text-xs text-neutral-500">Ремонт котлов · {{" "}} {{ region }}</div>
          </div>
        </NuxtLink>

        <nav class="hidden min-w-0 flex-1 items-center justify-center gap-4 text-sm text-neutral-600 lg:flex">
          <template v-for="item in headerLinks" :key="item.to">
            <a v-if="item.to === '/zapchasti/'" :href="item.to" class="whitespace-nowrap hover:text-neutral-900">
              {{ item.label }}
            </a>
            <NuxtLink v-else :to="item.to" class="whitespace-nowrap hover:text-neutral-900">
              {{ item.label }}
            </NuxtLink>
          </template>
        </nav>

        <div class="flex items-center gap-2 sm:gap-3">
          <div class="flex gap-1 md:hidden">
            <a :href="telegramHref" target="_blank" rel="noopener" class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white hover:bg-sky-400" aria-label="Написать мастеру в Telegram">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.4 4.6 18.6 19c-.2 1-.8 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.8-8c.4-.3-.1-.5-.6-.2L6.5 12.8l-4.7-1.5c-1-.3-1-1 .2-1.5l18.5-7.1c.9-.3 1.6.2.9 1.9Z" /></svg>
            </a>
            <a :href="maxHref" target="_blank" rel="noopener" class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#2767ff] text-[10px] font-black text-white hover:bg-[#1f57d6]" aria-label="Написать мастеру в Max">MAX</a>
          </div>
          <a
            :href="phoneHref"
            class="inline-flex items-center rounded-xl bg-neutral-900 px-3 py-2 text-sm text-white hover:bg-neutral-800 sm:px-4"
          >
            <span class="hidden sm:inline">Вызвать мастера</span><span class="sm:hidden">Вызов</span>
          </a>
          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-white text-neutral-900 hover:bg-neutral-50 lg:hidden"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-site-menu"
            aria-label="Открыть меню"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <svg v-if="!mobileMenuOpen" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
        </div>
      </div>

      <nav
        v-if="mobileMenuOpen"
        id="mobile-site-menu"
        aria-label="Основная навигация"
        class="border-t bg-white px-4 py-4 shadow-lg lg:hidden"
      >
        <div class="mx-auto grid max-w-7xl gap-1">
          <template v-for="item in headerLinks" :key="item.to">
            <a
              v-if="item.to === '/zapchasti/'"
              :href="item.to"
              class="rounded-xl px-4 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
              @click="mobileMenuOpen = false"
            >
              {{ item.label }}
            </a>
            <NuxtLink
              v-else
              :to="item.to"
              class="rounded-xl px-4 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
              @click="mobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </template>
          <a :href="phoneHref" class="mt-2 rounded-xl bg-yellow-400 px-4 py-3 text-center text-sm font-bold text-neutral-950 hover:bg-yellow-300">
            Позвонить: {{ phone }}
          </a>
          <a :href="telegramHref" target="_blank" rel="noopener" class="rounded-xl bg-sky-500 px-4 py-3 text-center text-sm font-bold text-white hover:bg-sky-400">
            Вызвать мастера в Telegram
          </a>
        </div>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer class="bg-white px-3 py-6 text-white sm:px-4 sm:py-8">
      <div class="mx-auto grid max-w-6xl items-start gap-8 rounded-t-3xl bg-neutral-950 px-4 py-7 sm:px-6 sm:py-8 lg:grid-cols-2 xl:grid-cols-[1.25fr_1fr_1fr_1.15fr] lg:gap-14 lg:px-10 xl:gap-20">
        <section class="min-w-0 justify-self-start">
          <NuxtLink to="/" class="inline-flex items-center gap-3">
            <img src="/img/gazmaster-watermark.webp" alt="" class="h-11 w-11 object-contain" />
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
            <template v-for="item in serviceLinks" :key="item.label">
              <a v-if="item.to === '/zapchasti/'" :href="item.to" class="text-neutral-300 hover:text-yellow-300">
                {{ item.label }}
              </a>
              <NuxtLink v-else :to="item.to" class="text-neutral-300 hover:text-yellow-300">
                {{ item.label }}
              </NuxtLink>
            </template>
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
          <a :href="telegramHref" target="_blank" rel="noopener" class="mt-3 inline-flex text-sm font-semibold text-sky-300 underline-offset-4 hover:text-sky-200 hover:underline">
            Написать мастеру в Telegram
          </a>
          <a :href="maxHref" target="_blank" rel="noopener" class="mt-2 inline-flex text-sm font-semibold text-blue-300 underline-offset-4 hover:text-blue-200 hover:underline">
            Написать мастеру в Max
          </a>
          <NuxtLink
            to="/kontakty/"
            class="mt-3 inline-flex text-sm font-semibold text-neutral-200 underline-offset-4 hover:text-yellow-300 hover:underline"
          >
            Контакты и режим работы
          </NuxtLink>
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
