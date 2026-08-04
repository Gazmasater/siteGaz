import { useHead } from "#imports";

export function useSeo(page: any) {
  if (!page?.value) return;
  const p = page.value;

  useHead({
    title: p.title,
    meta: [
      { name: "description", content: p.meta_description || "" },
      { property: "og:title", content: p.title },
      { property: "og:description", content: p.meta_description || "" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: p.canonical_url || "" },
    ],
    link: [{ rel: "canonical", href: p.canonical_url || "" }],
  });
}
