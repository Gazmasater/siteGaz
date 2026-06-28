<script setup lang="ts">
type Block =
  | { type: "hero"; title: string; subtitle: string; img?: string; logo?: string; logoAlt?: string; alt?: string; bullets?: string[] }
  | { type: "intro"; text: string; badge?: string; title?: string; note?: string }
  | { type: "content"; title: string; paragraphs: string[]; items?: { title: string; text: string }[] }
  | { type: "causes"; items: { title: string; probability?: number }[] }
  | { type: "steps"; items: { step: number; title: string; safety?: "low"|"med"|"high"; can_user_do?: boolean }[] }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "cta"; primary: string; phone: string; region: string; brand: string; code: string };

const props = defineProps<{ blocks: Block[]; h1?: string }>();

const map: Record<string, any> = {
  hero: resolveComponent("blocks-HeroBlock"),
  intro: resolveComponent("blocks-IntroBlock"),
  content: resolveComponent("blocks-ContentBlock"),
  causes: resolveComponent("blocks-CausesBlock"),
  steps: resolveComponent("blocks-StepsBlock"),
  faq: resolveComponent("blocks-FaqBlock"),
  cta: resolveComponent("blocks-CtaBlock"),
};
</script>

<template>
  <div class="space-y-6 md:space-y-8">
    <component
      v-for="(b, i) in props.blocks"
      :key="i"
      :is="map[b.type]"
      v-bind="b"
      :title="i === 0 && props.h1 ? props.h1 : (b as any).title"
    />
  </div>
</template>
