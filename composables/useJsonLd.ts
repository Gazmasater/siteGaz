import { useHead } from "#imports";

export function useJsonLd(page: any) {
  if (!page?.value) return;
  const p = page.value;

  const scripts: any[] = [];

  if (p.local_business) {
    scripts.push({ type: "application/ld+json", children: JSON.stringify(p.local_business) });
  }

  const faq = (p.blocks || []).find((b: any) => b.type === "faq");
  if (faq?.items?.length) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.items.map((x: any) => ({
          "@type": "Question",
          name: x.q,
          acceptedAnswer: { "@type": "Answer", text: x.a },
        })),
      }),
    });
  }

  useHead({ script: scripts });
}