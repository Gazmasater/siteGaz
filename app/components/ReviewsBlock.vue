<script setup lang="ts">
import { computed } from "vue";
import { customerReviews, yandexMapsReviewsUrl } from "~/data/reviews";

const props = withDefaults(
  defineProps<{
    compact?: boolean;
    includeCatalogReview?: boolean;
  }>(),
  {
    compact: false,
    includeCatalogReview: false,
  },
);

const reviews = computed(() =>
  customerReviews.filter((review) => props.includeCatalogReview || review.category === "repair"),
);
</script>

<template>
  <section class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" aria-labelledby="reviews-title">
    <div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div class="max-w-3xl">
        <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">Отзывы клиентов</p>
        <h2 id="reviews-title" class="mt-2 text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
          Что говорят о работе Gazmaster
        </h2>
        <p class="mt-3 text-base leading-7 text-neutral-600">
          Публикуем краткие отзывы с датой и ссылкой на первоисточник в Яндекс Картах.
        </p>
      </div>
      <a
        :href="yandexMapsReviewsUrl"
        target="_blank"
        rel="noopener"
        class="inline-flex shrink-0 items-center justify-center rounded-lg border border-neutral-300 px-4 py-3 text-sm font-bold text-neutral-900 hover:border-emerald-500 hover:text-emerald-700"
      >
        Все отзывы на Яндекс Картах
      </a>
    </div>

    <div class="mt-7 grid gap-5 md:grid-cols-3" :class="{ 'xl:grid-cols-4': !compact && includeCatalogReview }">
      <article v-for="review in reviews" :key="review.sourceUrl" class="flex flex-col rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div class="flex items-center justify-between gap-3 text-sm">
          <span class="font-bold text-amber-500" :aria-label="`Оценка ${review.rating} из 5`">★★★★★</span>
          <time :datetime="review.date" class="text-neutral-500">{{ review.dateLabel }}</time>
        </div>
        <p class="mt-4 flex-1 text-base leading-7 text-neutral-700">{{ review.text }}</p>
        <div class="mt-5 border-t border-neutral-100 pt-4 text-sm">
          <p class="font-bold text-neutral-900">{{ review.author }}</p>
          <a :href="review.sourceUrl" target="_blank" rel="noopener" class="mt-1 inline-block text-emerald-700 hover:text-emerald-600">
            Смотреть отзыв на Яндекс Картах
          </a>
        </div>
      </article>
    </div>
  </section>
</template>
