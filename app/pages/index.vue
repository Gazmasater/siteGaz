<script setup lang="ts">
const title = "Ремонт газовых котлов в Липецке";
const description =
  "Ремонт газовых котлов в Липецке. Выезд в день обращения, бесплатная диагностика при ремонте, гарантия на работы. Звоните: +7 (933) 091-72-76.";
const canonical = "https://remontkotlov48.ru/";

useHead({
  title,
  meta: [
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonical },
    { property: "og:image", content: "https://remontkotlov48.ru/img/header-boiler-generated-79330917276.png" },
  ],
  link: [{ rel: "canonical", href: canonical }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Gazmaster",
        description,
        url: canonical,
        image: "https://remontkotlov48.ru/img/header-boiler-generated-79330917276.png",
        telephone: "+7 (933) 091-72-76",
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
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ремонт газовых котлов",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Обслуживание газовых котлов",
            },
          },
        ],
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
          src="/img/header-boiler-generated-79330917276.png"
          alt="Мастер ремонтирует газовый котёл"
          class="hero-image"
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
          href="tel:+79330917276"
          aria-label="Позвонить +7 (933) 091-72-76"
        >
          +7 (933) 091-72-76
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

        <div class="cta">
          <p class="cta-title">Нужен мастер по ремонту газового котла?</p>
          <p class="cta-text">
            Позвоните прямо сейчас — проконсультируем по симптомам поломки,
            сориентируем по выезду и запишем мастера на удобное время.
          </p>
          <a class="phone" href="tel:+79330917276">+7 (933) 091-72-76</a>
        </div>
      </div>
    </section>
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

  h1 {
    font-size: 32px;
  }

  .lead {
    font-size: 19px;
  }

  .benefits {
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
