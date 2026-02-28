<script setup lang="ts">
const region = "Липецк"; // потом сделаем динамически из cookie/route
const phone = "+7 900 000-00-00";
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
          <NuxtLink to="/parts" class="hover:text-neutral-900">Запчасти</NuxtLink>
          <NuxtLink to="/contacts" class="hover:text-neutral-900">Контакты</NuxtLink>
        </nav>

        <div class="flex items-center gap-3">
          <a
            :href="`tel:${phone.replace(/\\s+/g,'')}`"
            class="hidden md:inline-flex items-center rounded-xl border bg-white px-3 py-2 text-sm hover:bg-neutral-50"
            title="Позвонить"
          >
            {{ phone }}
          </a>
          <a
            :href="`tel:${phone.replace(/\\s+/g,'')}`"
            class="inline-flex items-center rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800"
          >
            Вызвать мастера
          </a>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-4 py-6">
      <NuxtPage />
    </main>

    <footer class="border-t bg-white">
      <div class="mx-auto max-w-5xl px-4 py-8 grid gap-6 sm:grid-cols-2">
        <div>
          <div class="font-semibold">Gazmaster</div>
          <div class="mt-2 text-sm text-neutral-600">
            Диагностика и ремонт газовых котлов. Региональные контакты + централизованные продажи.
          </div>
        </div>

        <div class="text-sm text-neutral-600">
          <div class="font-medium text-neutral-900">Контакты</div>
          <div class="mt-2">Регион: {{ region }}</div>
          <div>Телефон: {{ phone }}</div>
          <div class="mt-3 text-xs text-neutral-500">© {{ new Date().getFullYear() }}</div>
        </div>
      </div>
    </footer>
  </div>
</template>