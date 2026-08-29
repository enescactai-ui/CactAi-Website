/**
 * Structured data (JSON-LD) for SEO rich results.
 *
 * Schemas included:
 *  - Organization (legal entity, contact, founder)
 *  - ProfessionalService (LocalBusiness subtype, geographic + price info)
 *  - WebSite (site identity + language)
 *
 * Reference: https://schema.org · https://developers.google.com/search/docs/appearance/structured-data
 *
 * Server Component renders plain <script type="application/ld+json"> tags
 * with JSON-stringified data as children. React serializes this directly
 * into SSR HTML so Google sees the schema on initial page load — no JS
 * execution required, no client bundle weight.
 */

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://cactaihq.com/#org",
  name: "CactAi",
  legalName: "CactAi v/Enes Tokmak",
  url: "https://cactaihq.com",
  logo: "https://cactaihq.com/opengraph-image",
  email: "enescactai@gmail.com",
  telephone: "+45 91 30 95 60",
  taxID: "DK46210689",
  vatID: "DK46210689",
  founder: {
    "@type": "Person",
    name: "Enes Tokmak",
    jobTitle: "Founder",
    nationality: "Danish",
  },
  foundingDate: "2026-01",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Krogager 44",
    addressLocality: "Greve",
    postalCode: "2670",
    addressCountry: "DK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+45 91 30 95 60",
    email: "enescactai@gmail.com",
    contactType: "sales",
    areaServed: "DK",
    availableLanguage: ["Danish", "English"],
  },
} as const;

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://cactaihq.com/#localbusiness",
  name: "CactAi",
  image: "https://cactaihq.com/opengraph-image",
  url: "https://cactaihq.com",
  telephone: "+45 91 30 95 60",
  email: "enescactai@gmail.com",
  priceRange: "Skræddersyet · du betaler kun for fremmødte kunder",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Krogager 44",
    addressLocality: "Greve",
    postalCode: "2670",
    addressCountry: "DK",
  },
  description:
    "Vækstpartner for danske servicevirksomheder. Vi bygger hjemmesiden, henter kunderne med annoncer, og sørger for at hvert lead får svar på sekunder, så ingen henvendelse går tabt.",
  areaServed: { "@type": "Country", name: "Denmark" },
  serviceType: "Vækst, marketing & kundeanskaffelse",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Vækstmotoren",
    itemListElement: [
      offer(
        "Lead-generation",
        "Meta-annoncer der henter kvalificerede kunder i dit lokalområde.",
      ),
      offer(
        "Lynsvar (speed-to-lead)",
        "Hvert nyt lead får svar på under 60 sekunder, døgnet rundt.",
      ),
      offer(
        "Hjemmeside & Google",
        "Hjemmeside der konverterer, plus Google-profil der bliver fundet lokalt.",
      ),
      offer(
        "Automatisk opfølgning",
        "Genbooker automatisk de leads der ikke svarede første gang.",
      ),
      offer(
        "Google-synlighed",
        "Google Business Profile, anmeldelses-automation og lokal SEO.",
      ),
      offer(
        "Resultat-garanti (pay-per-show)",
        "Du betaler kun når en kunde rent faktisk møder op til mødet.",
      ),
    ],
  },
} as const;

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://cactaihq.com/#website",
  url: "https://cactaihq.com",
  name: "CactAi",
  description: "Vækstpartner for danske servicevirksomheder",
  inLanguage: "da-DK",
  publisher: { "@id": "https://cactaihq.com/#org" },
} as const;

// Per Next.js 16 docs (app/02-guides/json-ld.md): JSON-LD must use
// dangerouslySetInnerHTML — passing JSON as text children breaks React 19
// hydration and silently wipes the DOM tree.
function ld(schema: object) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ld(ORG_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ld(LOCAL_BUSINESS_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ld(WEBSITE_SCHEMA) }}
      />
    </>
  );
}

function offer(name: string, description: string) {
  return {
    "@type": "Offer",
    itemOffered: { "@type": "Service", name, description },
  };
}
