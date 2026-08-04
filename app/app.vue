<script setup>
useHead({
  meta: [
    { property: 'og:image', content: 'https://remontkotlov48.ru/img/header-boiler-generated-79330917276.webp' },
    { property: 'og:image:secure_url', content: 'https://remontkotlov48.ru/img/header-boiler-generated-79330917276.webp' },
    { property: 'og:image:type', content: 'image/webp' },
    { property: 'og:image:width', content: '1600' },
    { property: 'og:image:height', content: '604' },
    { property: 'og:image:alt', content: 'Gazmaster — ремонт газовых котлов в Липецке' },
    { name: 'twitter:image', content: 'https://remontkotlov48.ru/img/header-boiler-generated-79330917276.webp' },
    { name: 'twitter:image:alt', content: 'Gazmaster — ремонт газовых котлов в Липецке' },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
  ],
  script: [
    {
      innerHTML: `(function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) { return; }
        }
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],
        k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=109241845','ym');

      ym(109241845, 'init', {
        ssr:true,
        webvisor:true,
        clickmap:true,
        ecommerce:"dataLayer",
        referrer: document.referrer,
        url: location.href,
        accurateTrackBounce:true,
        trackLinks:true
      });`,
      type: 'text/javascript'
    }
  ],
  noscript: [
    {
      innerHTML: '<div><img src="https://mc.yandex.ru/watch/109241845" style="position:absolute; left:-9999px;" alt="" /></div>'
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
