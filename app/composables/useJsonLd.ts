import { useHead } from "#imports";

export function useJsonLd(page: any) {
  if (!page?.value) return;
  const p = page.value;

  const scripts: any[] = [];

  if (p.local_business) {
    scripts.push({ type: "application/ld+json", innerHTML: JSON.stringify(p.local_business) });
  }

  const cta = (p.blocks || []).find((b: any) => b.type === "cta");
  const intro = (p.blocks || []).find((b: any) => b.type === "intro");
  if (cta?.brand && cta?.code && p.canonical_url) {
    scripts.push({
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: `Ремонт котла ${cta.brand} при ошибке ${cta.code}`,
        description: p.meta_description || intro?.text || p.title,
        serviceType: "Ремонт газовых котлов",
        provider: p.local_business || {
          "@type": "LocalBusiness",
          name: `Ремонт котлов ${cta.brand}`,
          telephone: cta.phone,
        },
        areaServed: {
          "@type": "City",
          name: cta.region,
        },
        brand: {
          "@type": "Brand",
          name: cta.brand,
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "RUB",
          url: p.canonical_url,
        },
      }),
    });
  }

  if (p.breadcrumbs?.length) {
    scripts.push({
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: p.breadcrumbs.map((x: any, i: number) => ({
          "@type": "ListItem",
          position: i + 1,
          name: x.title,
          ...(x.url || i === p.breadcrumbs.length - 1
            ? { item: x.url ? `https://remontkotlov48.ru${x.url}` : p.canonical_url }
            : {}),
        })),
      }),
    });
  }

  const faq = (p.blocks || []).find((b: any) => b.type === "faq");
  if (faq?.items?.length) {
    scripts.push({
      type: "application/ld+json",
      innerHTML: JSON.stringify({
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
