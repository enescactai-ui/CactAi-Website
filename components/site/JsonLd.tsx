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

/*
 *  ÉN virksomhedsenhed, ikke to. Slaaet sammen 4. sep 2026.
 *
 *  Foer laa der et Organization-objekt (#org) og et
 *  ProfessionalService-objekt (#localbusiness) side om side, med samme
 *  navn, samme telefon og samme adresse, men uden nogen relation mellem
 *  sig. Google skulle selv gaette om det var én eller to virksomheder.
 *  Et objekt med begge @type loeser det uden at miste noget.
 *
 *  Tre andre fejl er rettet samtidig:
 *
 *  - `logo` pegede paa /opengraph-image, som er et 1200x630 reklamebanner
 *    der siger "Fyld kalenderen med opgaver". Det er ikke et logo.
 *  - `founder` var et Person-objekt UDEN @id, altsaa en anden node end
 *    den paa /om#person. /om pegede tilbage med worksFor, men grafen
 *    lukkede kun i den ene retning. Nu peger begge veje.
 *  - `priceRange` indeholdt en saetning. Feltet forventer et
 *    pengeinterval eller "$$"-notation, og prosa gav en ugyldig vaerdi i
 *    Rich Results Test. "$$" siger intet tal, saa reglen om at der ikke
 *    staar priser paa sitet er stadig overholdt.
 *
 *  areaServed sagde "Denmark". Vi daekker Sjaelland fra en adresse i
 *  Greve, og en landsdaekkende paastand er baade mindre brugbar og mindre
 *  troværdig end sandheden.
 *
 *  MANGLER STADIG, og det kraever Enes: `sameAs` med links til Google
 *  Business Profile, LinkedIn og Facebook. Det er den eneste forbindelse
 *  mellem sitet og en GBP-visning, og uden den skal Google matche paa
 *  adressetekst alene. Et forkert eller tomt sameAs er dog vaerre end
 *  ingen, saa der skal staa profiler der faktisk findes.
 */
const BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://www.cactaihq.com/#org",
  name: "CactAi",
  legalName: "CactAi v/Enes Tokmak",
  url: "https://www.cactaihq.com",
  logo: {
    "@type": "ImageObject",
    "@id": "https://www.cactaihq.com/#logo",
    url: "https://www.cactaihq.com/apple-icon.png",
    width: 180,
    height: 180,
    caption: "CactAi",
  },
  image: { "@id": "https://www.cactaihq.com/#logo" },
  email: "enescactai@gmail.com",
  telephone: "+45 91 30 95 60",
  taxID: "DK46210689",
  vatID: "DK46210689",
  founder: { "@id": "https://www.cactaihq.com/om#person" },
  foundingDate: "2026-01-01",
  priceRange: "$$",
  currenciesAccepted: "DKK",
  paymentAccepted: "Bankoverførsel, betalingskort",
  knowsLanguage: ["da", "en"],
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "16:00",
      closes: "20:00",
    },
  ],
  description:
    "Vækstpartner for lokale danske servicevirksomheder. Vi henter opgaverne ind i dit område, svarer på hver eneste inden for et minut, og lægger dem i din kalender, så ingen kunde går tabt.",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Region Hovedstaden" },
    { "@type": "AdministrativeArea", name: "Region Sjælland" },
    { "@type": "City", name: "København" },
    { "@type": "City", name: "Greve" },
    { "@type": "City", name: "Roskilde" },
    { "@type": "City", name: "Køge" },
    { "@type": "City", name: "Solrød" },
  ],
  serviceType: "Kundeanskaffelse for lokale servicevirksomheder",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Vækstmotoren",
    itemListElement: [
      offer(
        "Opgaver ind i dit område",
        "Vi henter folk i dit lokalområde der leder efter din ydelse, netop nu.",
      ),
      offer(
        "Svar på under 60 sekunder",
        "Hver ny henvendelse får svar på under et minut, døgnet rundt.",
      ),
      offer(
        "Bliv den de finder først lokalt",
        "Bygget til mobil og til at blive fundet lokalt, ikke til at se pæn ud.",
      ),
      offer(
        "Automatisk opfølgning",
        "Vender automatisk tilbage til dem der ikke svarede første gang.",
      ),
      offer(
        "Bliv fundet først lokalt",
        "Din profil og dine anmeldelser passes, så du står stærkest når nogen søger.",
      ),
      offer(
        "Fast månedspris uden binding, 30 dages opsigelse",
        "Fast beløb om måneden, ingen provision, og 30 dages opsigelse fra første dag.",
      ),
    ],
  },
} as const;

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.cactaihq.com/#website",
  url: "https://www.cactaihq.com",
  name: "CactAi",
  description: "Vækstpartner for danske servicevirksomheder",
  inLanguage: "da-DK",
  publisher: { "@id": "https://www.cactaihq.com/#org" },
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
        dangerouslySetInnerHTML={{ __html: ld(BUSINESS_SCHEMA) }}
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
