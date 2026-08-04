<script setup lang="ts">
import { repairBrands, repairServicePages } from "~/utils/repairSeo";

const title = "Ремонт газовых котлов в Липецке";
const description =
  "Ремонт газовых котлов в Липецке. Выезд в день обращения, бесплатная диагностика при ремонте, гарантия на работы. Звоните: 8 (962) 352-70-02.";
const canonical = "https://remontkotlov48.ru/";
const telegramHref = "https://t.me/gazmasterzip48_bot?start=master";
const maxHref = "https://max.ru/id482414631253_bot?start=master";
const yandexMapsUrl = "https://yandex.ru/maps/org/gazmaster/165084897107/?ll=39.535637%2C52.603696&z=16";
const yandexServicesUrl =
  "https://uslugi.yandex.ru/profile/Gazmaster-108825?occupationId=%2Fremont-i-ustanovka-tehniki&specId=%2Fremont-i-ustanovka-tehniki%2Fdrugoe&text=%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82+%D0%B3%D0%B0%D0%B7%D0%BE%D0%B2%D1%8B%D1%85+%D0%BA%D0%BE%D1%82%D0%BB%D0%BE%D0%B2";
const serviceCards = repairServicePages.map((service) => ({
  ...service,
  to: `/lipeck/uslugi/${service.slug}/`,
}));
const quickLinks = [
  {
    title: "Ремонт газовых котлов",
    text: "Диагностика, ошибки, розжиг, плата, насос и теплообменник.",
    to: "/lipeck/uslugi/remont-gazovyh-kotlov/",
  },
  {
    title: "Монтаж газовых котлов",
    text: "Установка котла, подключение, настройка и проверка запуска.",
    to: "/lipeck/uslugi/montazh-gazovyh-kotlov/",
  },
  {
    title: "Монтаж отопления, радиаторов и теплого пола",
    text: "Трубы, установка радиаторов, установка теплого пола, монтаж теплого пола, заполнение и проверка циркуляции.",
    to: "/lipeck/uslugi/montazh-sistem-otopleniya/",
  },
  {
    title: "Запчасти для котлов",
    text: "Подбор оригинальных и совместимых запчастей по модели и артикулу.",
    to: "/zapchasti/",
  },
  {
    title: "Контакты",
    text: "Телефон мастера, режим работы, район выезда и карточка на Яндекс Картах.",
    to: "/kontakty/",
  },
  {
    title: "Отзывы клиентов",
    text: "Опубликованные отзывы о ремонте котлов со ссылками на Яндекс Карты.",
    to: "/otzyvy/",
  },
];
const brandCards = repairBrands.map((brand) => ({
  ...brand,
  title: "alias" in brand && brand.alias ? `${brand.name} / ${brand.alias}` : brand.name,
  to: `/lipeck/remont/${brand.slug}/`,
}));

useHead({
  title,
  meta: [
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonical },
    { property: "og:image", content: "https://remontkotlov48.ru/img/header-boiler-generated-79330917276.webp" },
  ],
  link: [
    { rel: "canonical", href: canonical },
    {
      rel: "preload",
      as: "image",
      href: "/img/header-boiler-generated-79330917276.avif",
      type: "image/avif",
      fetchpriority: "high",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Gazmaster",
        description,
        url: canonical,
        hasMap: yandexMapsUrl,
        sameAs: [yandexMapsUrl, yandexServicesUrl],
        image: "https://remontkotlov48.ru/img/header-boiler-generated-79330917276.webp",
        telephone: "8 (962) 352-70-02",
        priceRange: "$$",
        areaServed: {
          "@type": "City",
          name: "Липецк",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Липецк",
          addressCountry: "RU",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "08:00",
            closes: "22:00",
          },
        ],
        makesOffer: [
          ...repairServicePages.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
            },
          })),
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        name: quickLinks.map((item) => item.title),
        url: quickLinks.map((item) => `https://remontkotlov48.ru${item.to}`),
      }),
    },
  ],
});
</script>

<template>
  <main class="page">
    <section class="hero">
      <picture>
        <source srcset="/img/header-boiler-generated-79330917276.avif" type="image/avif" />
        <source srcset="/img/header-boiler-generated-79330917276.webp" type="image/webp" />
        <img
          src="/img/header-boiler-generated-79330917276.webp"
          alt="Мастер ремонтирует газовый котёл"
          class="hero-image"
          width="1600"
          height="604"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </picture>
      <div class="hero-content">
        <p class="hero-title">Ремонт газовых котлов<br />в Липецке</p>
        <ul class="hero-list">
          <li>Выезд в день обращения</li>
          <li>Диагностика бесплатно</li>
          <li>Ремонт за 1 визит</li>
        </ul>
        <a
          class="hero-phone"
          href="tel:+79623527002"
          aria-label="Позвонить 8 (962) 352-70-02"
        >
          8 (962) 352-70-02
        </a>
        <div class="hero-messengers">
          <a :href="telegramHref" target="_blank" rel="noopener" class="hero-messenger hero-messenger-telegram">
            <svg class="hero-messenger-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.4 4.6 18.6 19c-.2 1-.8 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.8-8c.4-.3-.1-.5-.6-.2L6.5 12.8l-4.7-1.5c-1-.3-1-1 .2-1.5l18.5-7.1c.9-.3 1.6.2.9 1.9Z" /></svg>
            Написать в Telegram
          </a>
          <a :href="maxHref" target="_blank" rel="noopener" class="hero-messenger hero-messenger-max">Написать в Max</a>
        </div>
      </div>
    </section>

    <section class="village-banner" aria-labelledby="village-banner-title">
      <picture class="village-banner-image">
        <source
          media="(max-width: 640px)"
          srcset="/img/schastlivy-kvartal/banner-mobile.webp"
        />
        <img
          src="/img/schastlivy-kvartal/banner.webp"
          alt="Готовые дома в коттеджном посёлке «Счастливый Квартал»"
          loading="lazy"
          fetchpriority="low"
          decoding="async"
        />
      </picture>
      <div class="village-banner-shade"></div>
      <div class="village-banner-content">
        <p class="village-banner-label">Коттеджный посёлок «Счастливый Квартал»</p>
        <h2 id="village-banner-title">Готовые дома с участком рядом с Липецком</h2>
        <p class="village-banner-text">с. Ленино · 6 км от Липецка · от 8,5 млн ₽</p>
        <a
          class="village-banner-link"
          href="https://kvartal-lipetsk.ru/?utm_source=remontkotlov48&utm_medium=banner&utm_campaign=schastlivy_kvartal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Посмотреть дома
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <h1>Ремонт газовых котлов в Липецке</h1>

        <p class="lead">
          Если котёл перестал запускаться, выдаёт ошибку, шумит, гаснет или не
          греет воду — не откладывайте ремонт. Чем раньше мастер проведёт
          диагностику, тем выше шанс устранить неисправность быстро и без
          дорогостоящей замены узлов.
        </p>

        <p>
          Мы выполняем ремонт газовых котлов <strong>всех популярных марок</strong>
          в Липецке и области: настенных, напольных, двухконтурных и
          одноконтурных моделей. Работаем с неисправностями розжига, платы
          управления, датчиков, вентилятора, теплообменника, насоса,
          трёхходового клапана и системы дымоудаления.
        </p>

        <p>
          Мастер приедет <strong>в день обращения</strong>, проведёт проверку,
          найдёт причину поломки и предложит оптимальное решение. Мы объясняем,
          что именно вышло из строя, какие есть варианты ремонта и сколько это
          будет стоить до начала работ. Без навязанных услуг и лишних замен.
        </p>

        <div class="benefits">
          <div class="benefit">
            <h2>Почему обращаются к нам</h2>
            <ul>
              <li>Выезд мастера в день обращения</li>
              <li>Бесплатная диагностика при ремонте</li>
              <li>Ремонт большинства неисправностей за 1 визит</li>
              <li>Гарантия на выполненные работы</li>
              <li>Честные цены без скрытых доплат</li>
            </ul>
          </div>

          <div class="benefit">
            <h2>Когда нужен срочный ремонт</h2>
            <ul>
              <li>Котёл не включается или сразу отключается</li>
              <li>Нет отопления или горячей воды</li>
              <li>Появилась ошибка на дисплее</li>
              <li>Упал напор или температура нестабильна</li>
              <li>Слышны хлопки, стуки, гул, посторонний шум</li>
              <li>Пахнет газом — сразу перекройте газ и вызовите специалиста</li>
            </ul>
          </div>
        </div>

        <section class="quick-links" aria-labelledby="quick-links-title">
          <div class="section-head">
            <h2 id="quick-links-title">Основные разделы</h2>
            <p>Быстрые переходы на ключевые услуги и контакты мастера.</p>
          </div>
          <div class="quick-grid">
            <NuxtLink
              v-for="item in quickLinks"
              :key="item.to"
              :to="item.to"
              class="quick-card"
            >
              <span class="quick-title">{{ item.title }}</span>
              <span class="quick-text">{{ item.text }}</span>
            </NuxtLink>
          </div>
        </section>

        <section class="services" aria-labelledby="services-title">
          <div class="section-head">
            <h2 id="services-title">Услуги</h2>
            <p>Ремонт, обслуживание, монтаж котлов и систем отопления в Липецке и области.</p>
          </div>
          <div class="service-grid">
            <NuxtLink
              v-for="service in serviceCards"
              :key="service.slug"
              :to="service.to"
              class="service-card"
            >
              <span class="service-title">{{ service.title }}</span>
              <span class="service-text">{{ service.lead }}</span>
            </NuxtLink>
          </div>
        </section>

        <section class="brands" aria-labelledby="brands-title">
          <div class="section-head">
            <h2 id="brands-title">Марки котлов</h2>
            <p>Ремонтируем популярные газовые котлы, включая Ariston / Аристон.</p>
          </div>
          <div class="brand-grid">
            <NuxtLink
              v-for="brand in brandCards"
              :key="brand.slug"
              :to="brand.to"
              class="brand-card"
            >
              <img v-if="brand.logo" :src="brand.logo" :alt="`Логотип ${brand.name}`" class="brand-logo" />
              <span v-else class="brand-logo-text">{{ brand.name }}</span>
              <span class="brand-title">{{ brand.title }}</span>
            </NuxtLink>
          </div>
        </section>

        <div class="cta">
          <p class="cta-title">Нужен мастер по ремонту газового котла?</p>
          <p class="cta-text">
            Позвоните прямо сейчас — проконсультируем по симптомам поломки,
            сориентируем по выезду и запишем мастера на удобное время.
          </p>
          <a class="phone" href="tel:+79623527002">8 (962) 352-70-02</a>
        </div>
      </div>
    </section>

    <LocalTrustBlock region="Липецк" region-route="Липецку" service="ремонту газовых котлов" />
    <ReviewsBlock compact />
  </main>
</template>

<style scoped>
.page {
  background: #f5f7fb;
  color: #1d2a3a;
  min-height: 100vh;
}

.hero {
  position: relative;
  width: 100%;
  height: clamp(420px, 46vw, 760px);
  background: #0a1a39;
  overflow: hidden;
}

.hero-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: clamp(18px, 7vw, 112px);
  width: min(760px, 52vw);
  transform: translateY(-50%);
  color: #fff;
}

.hero-title {
  margin: 0 0 26px;
  color: #fff;
  font-size: clamp(36px, 4.4vw, 72px);
  font-weight: 800;
  line-height: 1.12;
}

.hero-list {
  display: grid;
  gap: 16px;
  margin: 0 0 34px;
  padding: 0;
  list-style: none;
}

.hero-list li {
  position: relative;
  padding-left: 62px;
  color: #ffe58a;
  font-size: clamp(18px, 1.9vw, 30px);
  font-weight: 650;
  line-height: 1.25;
}

.hero-list li::before {
  position: absolute;
  left: 0;
  top: -1px;
  width: 38px;
  height: 38px;
  border: 3px solid #ffd200;
  border-radius: 50%;
  color: #ffd200;
  content: "✓";
  font-size: 31px;
  font-weight: 800;
  line-height: 32px;
  text-align: center;
}

.hero-phone {
  display: inline-flex;
  align-items: center;
  color: #ffd200;
  font-size: clamp(28px, 3.2vw, 54px);
  font-weight: 900;
  line-height: 1;
  text-decoration: none;
  text-shadow: 0 3px 18px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
}

.hero-phone::before {
  content: "☎";
  margin-right: 16px;
  font-size: 0.85em;
}

.hero-messengers {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
}

.hero-messenger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 22px;
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.hero-messenger:hover {
  transform: translateY(-2px);
}

.hero-messenger-telegram {
  background: #229ed9;
}

.hero-messenger-telegram:hover {
  background: #1687c0;
}

.hero-messenger-max {
  background: #2767ff;
}

.hero-messenger-max:hover {
  background: #1f57d6;
}

.hero-messenger-icon {
  width: 19px;
  height: 19px;
  margin-right: 9px;
}

.village-banner {
  position: relative;
  display: grid;
  min-height: clamp(340px, 33vw, 510px);
  overflow: hidden;
  background: #18345a;
  color: #fff;
}

.village-banner-image,
.village-banner-image img,
.village-banner-shade {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.village-banner-image img {
  display: block;
  object-fit: cover;
  object-position: center;
}

.village-banner-shade {
  background: linear-gradient(90deg, rgba(8, 21, 37, 0.88) 0%, rgba(8, 21, 37, 0.63) 42%, rgba(8, 21, 37, 0.08) 76%);
}

.village-banner-content {
  position: relative;
  z-index: 1;
  align-self: center;
  width: min(92vw, 1440px);
  margin: 0 auto;
  padding: 42px 0;
}

.village-banner-label {
  margin: 0 0 12px;
  color: #ffe58a;
  font-size: clamp(14px, 1.25vw, 18px);
  font-weight: 750;
  line-height: 1.35;
}

.village-banner h2 {
  max-width: 720px;
  margin: 0 0 16px;
  color: #fff;
  font-size: clamp(32px, 4vw, 58px);
  font-weight: 800;
  line-height: 1.08;
}

.village-banner-text {
  margin: 0 0 26px;
  color: rgba(255, 255, 255, 0.94);
  font-size: clamp(16px, 1.65vw, 23px);
  font-weight: 600;
  line-height: 1.4;
}

.village-banner-link {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  border-radius: 14px;
  background: #ffd200;
  padding: 15px 22px;
  color: #172234;
  font-size: 17px;
  font-weight: 800;
  line-height: 1;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.village-banner-link:hover {
  background: #ffe26c;
  transform: translateY(-2px);
}

.village-banner-link span {
  font-size: 23px;
  line-height: 0.7;
}

.content {
  padding: clamp(32px, 4vw, 64px) 0 clamp(56px, 6vw, 96px);
}

.container {
  width: min(92vw, 1440px);
  margin: 0 auto;
}

h1 {
  margin: 0 0 24px;
  font-size: 42px;
  line-height: 1.15;
  color: #0f2247;
}

.lead {
  font-size: 22px;
  line-height: 1.6;
  color: #243b63;
  margin-bottom: 24px;
}

p {
  font-size: 18px;
  line-height: 1.75;
  margin: 0 0 20px;
}

.benefits {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin: 40px 0;
}

.benefit {
  background: #ffffff;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 10px 30px rgba(15, 34, 71, 0.08);
}

.benefit h2 {
  margin: 0 0 18px;
  font-size: 26px;
  color: #0f2247;
}

.benefit ul {
  margin: 0;
  padding-left: 22px;
}

.benefit li {
  margin-bottom: 12px;
  font-size: 17px;
  line-height: 1.6;
}

.quick-links,
.services {
  margin: 44px 0;
}

.section-head {
  max-width: 760px;
  margin-bottom: 22px;
}

.section-head h2 {
  margin: 0 0 10px;
  color: #0f2247;
  font-size: 34px;
  line-height: 1.15;
}

.section-head p {
  margin: 0;
  color: #425675;
  font-size: 18px;
  line-height: 1.6;
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.quick-card {
  display: grid;
  gap: 10px;
  min-height: 144px;
  padding: 20px;
  border: 1px solid rgba(15, 34, 71, 0.12);
  border-radius: 16px;
  background: #ffffff;
  color: inherit;
  text-decoration: none;
  box-shadow: 0 10px 26px rgba(15, 34, 71, 0.07);
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.quick-card:hover {
  transform: translateY(-2px);
  border-color: rgba(30, 79, 168, 0.35);
}

.quick-title {
  color: #0f2247;
  font-size: 19px;
  font-weight: 800;
  line-height: 1.25;
}

.quick-text {
  color: #425675;
  font-size: 15px;
  line-height: 1.55;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.service-card {
  display: grid;
  gap: 10px;
  min-height: 168px;
  padding: 22px;
  border: 1px solid rgba(15, 34, 71, 0.12);
  border-radius: 16px;
  background: #ffffff;
  color: inherit;
  text-decoration: none;
  box-shadow: 0 10px 26px rgba(15, 34, 71, 0.07);
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.service-card:hover {
  transform: translateY(-2px);
  border-color: rgba(30, 79, 168, 0.35);
}

.service-title {
  color: #0f2247;
  font-size: 20px;
  font-weight: 800;
  line-height: 1.25;
}

.service-text {
  color: #425675;
  font-size: 15px;
  line-height: 1.55;
}

.brands {
  margin: 44px 0;
}

.brand-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.brand-card {
  display: grid;
  min-height: 126px;
  align-content: space-between;
  gap: 14px;
  padding: 20px;
  border: 1px solid rgba(15, 34, 71, 0.12);
  border-radius: 16px;
  background: #ffffff;
  color: inherit;
  text-decoration: none;
  box-shadow: 0 10px 26px rgba(15, 34, 71, 0.07);
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.brand-card:hover {
  transform: translateY(-2px);
  border-color: rgba(30, 79, 168, 0.35);
}

.brand-logo {
  max-width: 150px;
  max-height: 44px;
  object-fit: contain;
}

.brand-logo-text {
  display: inline-flex;
  width: fit-content;
  min-height: 44px;
  align-items: center;
  border-radius: 12px;
  background: #0f2247;
  padding: 0 14px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 800;
}

.brand-title {
  color: #0f2247;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.25;
}

.cta {
  background: linear-gradient(135deg, #0f2247, #1e4fa8);
  color: #fff;
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  margin-top: 24px;
}

.cta-title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #fff;
}

.cta-text {
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.92);
}

.phone {
  display: inline-block;
  text-decoration: none;
  background: #ffd200;
  color: #111;
  font-weight: 800;
  font-size: 32px;
  padding: 16px 28px;
  border-radius: 18px;
  transition: transform 0.2s ease;
}

.phone:hover {
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .hero-content {
    width: min(640px, 66vw);
  }

  .hero-messengers {
    display: none;
  }

  h1 {
    font-size: 32px;
  }

  .lead {
    font-size: 19px;
  }

  .benefits {
    grid-template-columns: 1fr;
  }

  .quick-grid,
  .service-grid,
  .brand-grid {
    grid-template-columns: 1fr;
  }

  .cta-title {
    font-size: 24px;
  }

  .phone {
    font-size: 24px;
    width: 100%;
    box-sizing: border-box;
  }
}

@media (max-width: 600px) {
  .village-banner {
    min-height: 490px;
  }

  .village-banner-image img {
    object-position: center;
  }

  .village-banner-shade {
    background: linear-gradient(180deg, rgba(8, 21, 37, 0.74) 0%, rgba(8, 21, 37, 0.38) 52%, rgba(8, 21, 37, 0.84) 100%);
  }

  .village-banner-content {
    align-self: end;
    padding: 32px 0;
  }

  .village-banner h2 {
    max-width: 360px;
    font-size: 32px;
  }

  .village-banner-text {
    margin-bottom: 20px;
    font-size: 17px;
  }

  .village-banner-link {
    padding: 14px 18px;
    font-size: 16px;
  }

  .hero-image {
    min-height: 460px;
    object-fit: cover;
    object-position: 70% center;
  }

  .hero-content {
    top: 52%;
    width: min(330px, calc(100% - 28px));
  }

  .hero-title {
    margin-bottom: 18px;
    font-size: 38px;
  }

  .hero-list {
    gap: 9px;
    margin-bottom: 20px;
  }

  .hero-list li {
    padding-left: 35px;
    font-size: 21px;
  }

  .hero-list li::before {
    width: 21px;
    height: 21px;
    font-size: 17px;
    line-height: 17px;
  }

  .hero-phone {
    font-size: 29px;
  }

  .content {
    padding: 32px 14px 56px;
  }

  h1 {
    font-size: 28px;
  }

  p,
  .benefit li {
    font-size: 16px;
  }

  .benefit {
    padding: 22px;
  }

  .section-head h2 {
    font-size: 28px;
  }

  .service-card,
  .brand-card {
    min-height: auto;
    padding: 20px;
  }

  .cta {
    padding: 24px 18px;
  }
}

@media (max-width: 900px) and (orientation: landscape) and (max-height: 500px) {
  .hero-image {
    height: 320px;
    object-fit: cover;
    object-position: 64% center;
  }

  .hero-content {
    top: 50%;
    width: min(460px, 54vw);
  }

  .hero-title {
    margin-bottom: 12px;
    font-size: 32px;
    line-height: 1.05;
  }

  .hero-list {
    gap: 6px;
    margin-bottom: 14px;
  }

  .hero-list li {
    padding-left: 30px;
    font-size: 17px;
    line-height: 1.15;
  }

  .hero-list li::before {
    width: 19px;
    height: 19px;
    border-width: 2px;
    font-size: 15px;
    line-height: 16px;
  }

  .hero-phone {
    font-size: 28px;
  }

}
</style>
