<script setup lang="ts">
type Block =
  | { type: "hero"; title: string; subtitle: string; img?: string; alt?: string; bullets?: string[] }
  | { type: "intro"; text: string }
  | { type: "causes"; items: { title: string; probability?: number }[] }
  | { type: "steps"; items: { step: number; title: string; safety?: "low"|"med"|"high"; can_user_do?: boolean }[] }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "cta"; primary: string; phone: string; region: string; brand: string; code: string };

defineProps<{ blocks: Block[] }>();

const map: Record<string, any> = {
  hero: resolveComponent("blocks-HeroBlock"),
  intro: resolveComponent("blocks-IntroBlock"),
  causes: resolveComponent("blocks-CausesBlock"),
  steps: resolveComponent("blocks-StepsBlock"),
  faq: resolveComponent("blocks-FaqBlock"),
  cta: resolveComponent("blocks-CtaBlock"),
};
</script>

<template>
  <div class="space-y-4">
    <component v-for="(b, i) in blocks" :key="i" :is="map[b.type]" v-bind="b" />
  </div>
</template>