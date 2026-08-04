<script setup lang="ts">
const title = "Отзывы клиентов Gazmaster — ремонт котлов в Липецке";
const description =
  "Отзывы клиентов о ремонте котлов и подборе отопительного оборудования Gazmaster в Липецке. Ссылки на опубликованные отзывы в Яндекс Картах.";
const canonical = "https://remontkotlov48.ru/otzyvy/";

useHead({
  title,
  meta: [
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonical },
  ],
  link: [{ rel: "canonical", href: canonical }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: "https://remontkotlov48.ru/" },
          { "@type": "ListItem", position: 2, name: "Отзывы", item: canonical },
        ],
      }),
    },
  ],
});
</script>

<template>
  <main class="bg-white pb-12 text-neutral-900">
    <nav class="mx-auto max-w-7xl px-4 py-4 text-sm text-neutral-500 sm:px-6 lg:px-8" aria-label="Хлебные крошки">
      <NuxtLink to="/" class="hover:text-neutral-900">Главная</NuxtLink>
      <span class="mx-2 text-neutral-300" aria-hidden="true">/</span>
      <span>Отзывы</span>
    </nav>

    <section class="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <h1 class="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-5xl">Отзывы клиентов</h1>
      <p class="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">
        Здесь собраны отзывы о ремонте котлов и подборе оборудования. Каждая карточка ведёт к опубликованному отзыву на Яндекс Картах.
      </p>
    </section>

    <ReviewsBlock include-catalog-review />
  </main>
</template>
