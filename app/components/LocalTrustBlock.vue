<script setup lang="ts">
withDefaults(
  defineProps<{
    region?: string;
    regionRoute?: string;
    brand?: string;
    service?: string;
    installation?: boolean;
    heatingSystem?: boolean;
    compact?: boolean;
  }>(),
  {
    region: "Липецк",
    regionRoute: "Липецку",
    brand: "",
    service: "ремонту газовых котлов",
    installation: false,
    heatingSystem: false,
    compact: false,
  },
);

const phone = "8 (962) 352-70-02";
const phoneHref = "tel:+79623527002";
const yandexMapsUrl = "https://yandex.ru/maps/org/gazmaster/165084897107/?ll=39.535637%2C52.603696&z=16";
const yandexServicesUrl =
  "https://uslugi.yandex.ru/profile/Gazmaster-108825?occupationId=%2Fremont-i-ustanovka-tehniki&specId=%2Fremont-i-ustanovka-tehniki%2Fdrugoe&text=%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82+%D0%B3%D0%B0%D0%B7%D0%BE%D0%B2%D1%8B%D1%85+%D0%BA%D0%BE%D1%82%D0%BB%D0%BE%D0%B2";
const yandexRating = "4.9";
const yandexReviews = "49";
</script>

<template>
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" :class="compact ? 'py-6' : 'py-10'">
    <div class="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
      <div class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm md:p-7">
        <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">Локальный сервис</p>
        <h2 class="mt-2 text-2xl font-black tracking-tight text-neutral-950 md:text-3xl">
          Мастер по {{ service }}: {{ region }} и область
        </h2>
        <p class="mt-4 text-base leading-7 text-neutral-700">
          <template v-if="heatingSystem">
            Работаем как выездной сервис: принимаем заявки по {{ regionRoute }} и ближайшим населенным пунктам, уточняем площадь,
            количество радиаторов, схему разводки, нужен ли теплый пол и готовность помещений. Так мастер заранее оценит объем работ и необходимые материалы.
          </template>
          <template v-else-if="installation">
            Работаем как выездной сервис: принимаем заявки по {{ regionRoute }} и ближайшим населенным пунктам, уточняем модель котла,
            место установки и готовность коммуникаций, чтобы мастер заранее оценил объем монтажа и необходимые материалы.
          </template>
          <template v-else>
            Работаем как выездной сервис: принимаем заявки по {{ regionRoute }} и ближайшим населенным пунктам, уточняем марку котла,
            симптомы и код ошибки до выезда, чтобы мастер взял подходящий инструмент и расходные материалы.
          </template>
        </p>
        <div class="mt-6 grid gap-3 sm:grid-cols-2">
          <div class="rounded-lg bg-neutral-50 p-4">
            <div class="text-sm font-black text-neutral-950">Стоимость до работ</div>
            <p class="mt-2 text-sm leading-6 text-neutral-600">
              {{
                installation || heatingSystem
                  ? "После осмотра называем состав работ, необходимые материалы и итоговую стоимость до начала монтажа."
                  : "После диагностики объясняем причину неисправности и согласуем ремонт до замены деталей."
              }}
            </p>
          </div>
          <div class="rounded-lg bg-neutral-50 p-4">
            <div class="text-sm font-black text-neutral-950">Гарантия</div>
            <p class="mt-2 text-sm leading-6 text-neutral-600">Даем гарантию на выполненные работы и установленные комплектующие.</p>
          </div>
          <div class="rounded-lg bg-neutral-50 p-4">
            <div class="text-sm font-black text-neutral-950">{{ heatingSystem ? "Система отопления" : "Бренды котлов" }}</div>
            <p class="mt-2 text-sm leading-6 text-neutral-600">
              {{
                heatingSystem
                  ? "Монтируем трубы, радиаторы, теплый пол, коллекторы и узлы подключения для частных домов, квартир и небольших помещений."
                  : installation
                  ? "Устанавливаем и подключаем популярные настенные и напольные газовые котлы для отопления и горячей воды."
                  : "Ремонтируем Ariston, Baxi, Ferroli, Fondital, Navien, Protherm, Vaillant, Viessmann и другие популярные настенные газовые котлы."
              }}
            </p>
          </div>
          <div class="rounded-lg bg-neutral-50 p-4">
            <div class="text-sm font-black text-neutral-950">Профили в Яндексе</div>
            <div class="mt-2 flex flex-wrap items-center gap-2">
              <span class="rounded-md bg-yellow-300 px-2 py-1 text-sm font-black text-neutral-950">{{ yandexRating }}</span>
              <span class="text-sm font-bold text-neutral-800">{{ yandexReviews }} отзывов на Картах</span>
            </div>
            <p class="mt-2 text-sm leading-6 text-neutral-600">
              Карточка Gazmaster есть на Яндекс Картах и в Яндекс Услугах: можно проверить профиль, район работы и отзывы клиентов.
            </p>
            <div class="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              <a
                :href="yandexMapsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex text-sm font-bold text-emerald-700 hover:text-emerald-600"
              >
                Яндекс Карты
              </a>
              <a
                :href="yandexServicesUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex text-sm font-bold text-emerald-700 hover:text-emerald-600"
              >
                Яндекс Услуги
              </a>
            </div>
          </div>
        </div>
      </div>

      <aside class="rounded-lg bg-neutral-950 p-5 text-white shadow-sm md:p-7">
        <p class="text-sm font-bold uppercase tracking-wide text-emerald-300">Вызов мастера</p>
        <h2 class="mt-2 text-2xl font-black tracking-tight">
          {{ heatingSystem ? "Нужен монтаж отопления?" : installation ? "Нужен монтаж котла?" : `Нужен ремонт${brand ? ` ${brand}` : ""}?` }}
        </h2>
        <ul class="mt-5 grid gap-3 text-sm leading-6 text-neutral-200">
          <li class="flex gap-3"><span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400"></span><span>Выезд в день обращения при свободном мастере.</span></li>
          <li class="flex gap-3">
            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400"></span>
            <span>{{
              heatingSystem
                ? "Консультация по разводке труб, радиаторам, теплому полу и материалам до выезда."
                : installation
                  ? "Консультация по месту установки и подключению до выезда."
                  : "Консультация по ошибке на дисплее до выезда."
            }}</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400"></span>
            <span>{{
              heatingSystem
                ? "Проверка соединений, давления, циркуляции и прогрева радиаторов."
                : installation
                ? "Проверка крепления, подключения к отоплению, дымоудаления и запуска."
                : "Проверка розжига, давления, датчиков, насоса, платы и дымоудаления."
            }}</span>
          </li>
          <li class="flex gap-3"><span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400"></span><span>Работаем ежедневно с 8:00 до 22:00.</span></li>
        </ul>
        <a :href="phoneHref" class="mt-6 block rounded-lg bg-emerald-500 px-5 py-3 text-center text-sm font-black text-white hover:bg-emerald-400">
          {{ phone }}
        </a>
      </aside>
    </div>
  </section>
</template>
