<script setup lang="ts">
import { useRoute } from "vue-router";
import { brandErrorCodes, regionPrepTitle, regionRouteTitle, regionTitle, repairBrands, repairServicePages } from "~/utils/repairSeo";

const route = useRoute();
const region = String(route.params.region || "");
const serviceSlug = String(route.params.service || "");
const service = repairServicePages.find((item) => item.slug === serviceSlug);
const regionName = regionTitle(region);
const regionPrep = regionPrepTitle(region);
const regionRoute = regionRouteTitle(region);
const isInstallationService = serviceSlug === "montazh-gazovyh-kotlov";
const isHeatingSystemService = serviceSlug === "montazh-sistem-otopleniya";
const isAnyInstallationService = isInstallationService || isHeatingSystemService;
const localTrustService = isInstallationService ? "монтажу газовых котлов" : isHeatingSystemService ? "монтажу систем отопления" : service?.title.toLowerCase();
const yandexMapsUrl = "https://yandex.ru/maps/org/gazmaster/165084897107/?ll=39.535637%2C52.603696&z=16";
const yandexServicesUrl =
  "https://uslugi.yandex.ru/profile/Gazmaster-108825?occupationId=%2Fremont-i-ustanovka-tehniki&specId=%2Fremont-i-ustanovka-tehniki%2Fdrugoe&text=%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82+%D0%B3%D0%B0%D0%B7%D0%BE%D0%B2%D1%8B%D1%85+%D0%BA%D0%BE%D1%82%D0%BB%D0%BE%D0%B2";

if (!service) throw createError({ statusCode: 404, statusMessage: "Not found" });

const canonical = `https://remontkotlov48.ru/${region}/uslugi/${service.slug}/`;
const title = `${service.title} в ${regionPrep}`;
const heatingSystemTitle = `Монтаж отопления и монтаж теплого пола в ${regionPrep}`;
const seoTitle = isInstallationService
  ? `${title} — установка котлов`
  : isHeatingSystemService
    ? heatingSystemTitle
    : `${title} — ремонт котлов`;
const description = isInstallationService
  ? `${service.lead} Выезд мастера по ${regionRoute}, расчет стоимости установки газового котла и проверка работы оборудования после монтажа.`
  : isHeatingSystemService
    ? `${heatingSystemTitle}: разводка труб, установка радиаторов и подключение котла. Выезд мастера по ${regionRoute}, расчет материалов и стоимости до начала работ.`
    : `${service.lead} Выезд мастера по ${regionRoute}, диагностика и согласование стоимости до ремонта.`;
const keywords = isHeatingSystemService
  ? `монтаж отопления ${regionName}, монтаж систем отопления ${regionName}, отопление под ключ ${regionName}, установка радиаторов ${regionName}, установка теплого пола ${regionName}, монтаж теплого пола ${regionName}`
  : "";
const popularLinks = repairBrands.flatMap((brand) =>
  (brandErrorCodes[brand.slug] || []).slice(0, 4).map((code) => ({
    title: `${brand.name} ${code}`,
    url: `/${region}/remont/${brand.slug}/oshybka-${code.toLowerCase()}/`,
  })),
);

useHead({
  title: seoTitle,
  meta: [
    { name: "description", content: description },
    ...(keywords ? [{ name: "keywords", content: keywords }] : []),
    { property: "og:title", content: seoTitle },
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
        "@type": "Service",
        name: title,
        description,
        serviceType: service.title,
        areaServed: { "@type": "City", name: regionName },
        provider: {
          "@type": "LocalBusiness",
          name: "Ремонт котлов 48",
          telephone: "8 (962) 352-70-02",
          hasMap: yandexMapsUrl,
          sameAs: [yandexMapsUrl, yandexServicesUrl],
          address: { "@type": "PostalAddress", addressLocality: regionName, addressCountry: "RU" },
        },
        offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "RUB", url: canonical },
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: "https://remontkotlov48.ru/" },
          { "@type": "ListItem", position: 2, name: "Ремонт котлов", item: `https://remontkotlov48.ru/${region}/remont/` },
          { "@type": "ListItem", position: 3, name: service.title, item: canonical },
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
      <NuxtLink :to="`/${region}/remont/`" class="hover:text-neutral-900">Ремонт котлов</NuxtLink>
      <span class="mx-2 text-neutral-300" aria-hidden="true">/</span>
      <span>{{ service.title }}</span>
    </nav>

    <section class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="max-w-4xl">
        <h1 class="text-4xl font-black leading-tight tracking-tight md:text-5xl">
          {{ isHeatingSystemService ? `${heatingSystemTitle}: установка радиаторов` : title }}
        </h1>
        <p class="mt-5 text-lg leading-8 text-neutral-700">{{ description }}</p>
        <div class="mt-7 flex flex-wrap gap-3">
          <a href="tel:+79623527002" class="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-400">
            {{ isAnyInstallationService ? "Заказать монтаж" : "Позвонить мастеру" }}
          </a>
          <MessengerButtons />
          <NuxtLink :to="`/${region}/remont/`" class="rounded-lg border px-5 py-3 text-sm font-bold text-neutral-900 hover:bg-neutral-50">
            {{ isAnyInstallationService ? "Ремонт котлов" : "Ошибки котлов" }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="mx-auto grid max-w-7xl gap-5 px-4 py-6 sm:px-6 lg:grid-cols-3 lg:px-8">
      <article class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 class="text-xl font-black">{{ isAnyInstallationService ? "Осмотр объекта" : "Диагностика" }}</h2>
        <p class="mt-3 text-sm leading-6 text-neutral-600">
          {{
            isInstallationService
              ? "Проверяем место установки, подводы отопления, дымоудаление, вентиляцию и доступ для обслуживания котла."
              : isHeatingSystemService
                ? "Оцениваем площадь, точки подключения, трассы труб, количество радиаторов, необходимость теплого пола и готовность помещения к монтажу отопления."
              : "Проверяем симптомы, коды ошибок, питание, датчики и связанные узлы котла."
          }}
        </p>
      </article>
      <article class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 class="text-xl font-black">{{ isAnyInstallationService ? "Расчет работ" : "Согласование" }}</h2>
        <p class="mt-3 text-sm leading-6 text-neutral-600">
          {{
            isInstallationService
              ? "Согласуем схему монтажа газового котла, необходимые материалы, сроки и стоимость до начала работ."
              : isHeatingSystemService
                ? "Согласуем схему разводки, тип труб, радиаторы, теплый пол, арматуру, сроки и стоимость монтажа системы отопления."
              : "Объясняем причину поломки и стоимость работ до начала ремонта."
          }}
        </p>
      </article>
      <article class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 class="text-xl font-black">{{ isAnyInstallationService ? "Монтаж и запуск" : "Ремонт" }}</h2>
        <p class="mt-3 text-sm leading-6 text-neutral-600">
          {{
            isInstallationService
              ? "Устанавливаем котел, подключаем к системе отопления, выполняем настройку и проверяем стабильный запуск."
              : isHeatingSystemService
                ? "Монтируем трубы, радиаторы, теплый пол и узлы подключения, заполняем систему и проверяем циркуляцию по контурам."
              : "Устраняем неисправность, проверяем запуск, отопление и горячую воду."
          }}
        </p>
      </article>
    </section>

    <LocalTrustBlock
      :region="regionName"
      :region-route="regionRoute"
      :service="localTrustService"
      :installation="isAnyInstallationService"
      :heating-system="isHeatingSystemService"
      compact
    />

    <section v-if="isInstallationService || isHeatingSystemService" class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm md:p-7">
          <h2 class="text-2xl font-black tracking-tight">{{ isHeatingSystemService ? "Что входит в монтаж системы отопления" : "Что входит в монтаж газового котла" }}</h2>
          <div class="mt-5 grid gap-4 md:grid-cols-2">
            <div class="rounded-lg bg-neutral-50 p-4">
              <h3 class="font-bold">{{ isHeatingSystemService ? "Схема отопления" : "Подготовка" }}</h3>
              <p class="mt-2 text-sm leading-6 text-neutral-600">
                {{
                  isHeatingSystemService
                    ? "Подбираем схему разводки, количество радиаторов, контуры теплого пола, расположение труб, запорной арматуры и точек подключения."
                    : "Оцениваем помещение, крепление, отвод продуктов сгорания, доступ к трубам отопления и удобство дальнейшего обслуживания."
                }}
              </p>
            </div>
            <div class="rounded-lg bg-neutral-50 p-4">
              <h3 class="font-bold">{{ isHeatingSystemService ? "Разводка труб" : "Установка котла" }}</h3>
              <p class="mt-2 text-sm leading-6 text-neutral-600">
                {{
                  isHeatingSystemService
                    ? "Выполняем монтаж труб отопления, подключаем радиаторы, теплый пол, коллекторы и основные узлы системы."
                    : "Выполняем монтаж настенного или напольного газового котла, подключение к контуру отопления и горячей воды."
                }}
              </p>
            </div>
            <div class="rounded-lg bg-neutral-50 p-4">
              <h3 class="font-bold">Пуск и настройка</h3>
              <p class="mt-2 text-sm leading-6 text-neutral-600">
                {{
                  isHeatingSystemService
                    ? "Заполняем систему, проверяем давление, герметичность соединений, циркуляцию и равномерный прогрев радиаторов."
                    : "Проверяем давление, циркуляцию, розжиг, нагрев, работу автоматики и объясняем базовые правила эксплуатации."
                }}
              </p>
            </div>
            <div class="rounded-lg bg-neutral-50 p-4">
              <h3 class="font-bold">{{ isHeatingSystemService ? "Проверка результата" : "Сервис после установки" }}</h3>
              <p class="mt-2 text-sm leading-6 text-neutral-600">
                {{
                  isHeatingSystemService
                    ? "После монтажа показываем, как пользоваться кранами, контролировать давление и когда вызывать мастера для обслуживания."
                    : "После установки газового котла можно сразу согласовать дальнейшее обслуживание и профилактику перед отопительным сезоном."
                }}
              </p>
            </div>
          </div>
        </div>

        <aside class="rounded-lg border border-emerald-200 bg-emerald-50 p-5 md:p-7">
          <h2 class="text-2xl font-black tracking-tight">{{ isHeatingSystemService ? "Когда нужен монтаж отопления" : "Когда нужна установка" }}</h2>
          <ul class="mt-5 space-y-3 text-sm leading-6 text-neutral-700">
            <template v-if="isHeatingSystemService">
              <li>Новая система отопления в доме, квартире или коммерческом помещении.</li>
              <li>Установка радиаторов и замена старой разводки труб.</li>
              <li>Установка теплого пола и монтаж теплого пола как части системы отопления.</li>
              <li>Подключение радиаторов после ремонта помещения.</li>
              <li>Переделка отопления под новый котел или измененную планировку.</li>
            </template>
            <template v-else>
              <li>Замена старого котла на новый настенный или напольный.</li>
              <li>Первичный монтаж газового котла в доме или квартире.</li>
              <li>Перенос оборудования после ремонта помещения.</li>
              <li>Подключение котла после подготовки отопительной системы.</li>
            </template>
          </ul>
          <a href="tel:+79623527002" class="mt-6 inline-flex rounded-lg bg-neutral-900 px-5 py-3 text-sm font-bold text-white hover:bg-neutral-800">
            Уточнить стоимость
          </a>
        </aside>
      </div>
    </section>

    <section v-else class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="rounded-lg border border-neutral-200 bg-neutral-50 p-5 md:p-7">
        <h2 class="text-2xl font-black tracking-tight">Ремонт по маркам</h2>
        <div class="mt-5 grid gap-3 md:grid-cols-3">
          <NuxtLink
            v-for="brand in repairBrands"
            :key="brand.slug"
            :to="`/${region}/remont/${brand.slug}/`"
            class="rounded-lg border bg-white p-4 text-neutral-900 hover:border-emerald-300"
          >
            <span class="font-bold">Ремонт котлов {{ brand.name }}</span>
            <span class="mt-2 block text-sm leading-6 text-neutral-600">Ошибки, диагностика и частые неисправности {{ brand.name }}.</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section v-if="isInstallationService || isHeatingSystemService" class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm md:p-7">
        <h2 class="text-2xl font-black tracking-tight">
          {{ isHeatingSystemService ? "Вопросы по монтажу систем отопления" : "Вопросы по установке газовых котлов" }}
        </h2>
        <div class="mt-5 grid gap-4 md:grid-cols-2">
          <article class="rounded-lg border border-neutral-200 p-4">
            <h3 class="font-bold">{{ isHeatingSystemService ? "Можно ли сделать монтаж отопления под ключ?" : "Можно ли установить котел в день обращения?" }}</h3>
            <p class="mt-2 text-sm leading-6 text-neutral-600">
              {{
                isHeatingSystemService
                  ? "Да, можно согласовать разводку труб, установку радиаторов, теплый пол, подключение узлов и проверку работы системы после заполнения."
                  : "Если место подготовлено и есть необходимые материалы, монтаж возможен быстро. Точный срок мастер назовет после осмотра."
              }}
            </p>
          </article>
          <article class="rounded-lg border border-neutral-200 p-4">
            <h3 class="font-bold">{{ isHeatingSystemService ? "Что нужно для расчета стоимости?" : "Вы устанавливаете настенные и напольные котлы?" }}</h3>
            <p class="mt-2 text-sm leading-6 text-neutral-600">
              {{
                isHeatingSystemService
                  ? "Нужны площадь помещения, количество радиаторов, теплый пол или его план, тип труб, состояние старой системы и требования к подключению котла."
                  : "Да, выполняем установку газовых котлов разных типов и помогаем оценить требования к подключению и обслуживанию."
              }}
            </p>
          </article>
          <article class="rounded-lg border border-neutral-200 p-4">
            <h3 class="font-bold">{{ isHeatingSystemService ? "Что влияет на цену монтажа отопления?" : "Что влияет на цену монтажа?" }}</h3>
            <p class="mt-2 text-sm leading-6 text-neutral-600">
              {{
                isHeatingSystemService
                  ? "На стоимость влияет метраж труб, количество радиаторов, сложность разводки, материалы, демонтаж и доступ к местам подключения."
                  : "На стоимость влияет тип котла, готовность труб, сложность крепления, дымоудаление, объем подключения и настройки."
              }}
            </p>
          </article>
          <article class="rounded-lg border border-neutral-200 p-4">
            <h3 class="font-bold">{{ isHeatingSystemService ? "Проверяете систему после монтажа?" : "Можно ли заказать обслуживание после монтажа?" }}</h3>
            <p class="mt-2 text-sm leading-6 text-neutral-600">
              {{
                isHeatingSystemService
                  ? "Да, после монтажа проверяем давление, соединения, циркуляцию и прогрев радиаторов."
                  : "Да, после установки можно оформить профилактическое обслуживание газового котла перед отопительным сезоном."
              }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section v-else class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm md:p-7">
        <h2 class="text-2xl font-black tracking-tight">Популярные ошибки</h2>
        <div class="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <NuxtLink
            v-for="link in popularLinks"
            :key="link.url"
            :to="link.url"
            class="rounded-lg border border-neutral-200 px-4 py-3 text-sm font-bold text-neutral-900 hover:border-emerald-300 hover:bg-emerald-50"
          >
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
