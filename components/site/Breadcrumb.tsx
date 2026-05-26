/**
 * BreadcrumbList JSON-LD for subpages.
 *
 * Tells Google the navigation hierarchy of a page — appears in SERPs as
 * "cactaihq.com > Om" instead of just the raw URL. Improves CTR.
 *
 * Reference: https://schema.org/BreadcrumbList
 *
 * Usage in a page:
 *   <Breadcrumb items={[
 *     { name: "Hjem", url: "https://cactaihq.com" },
 *     { name: "Om", url: "https://cactaihq.com/om" },
 *   ]} />
 *
 * Server component — zero client JS, rendered as inline <script> in SSR HTML.
 */

type Crumb = { name: string; url: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  );
}
