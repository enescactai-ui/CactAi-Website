/*
 *  Cases til porteføljen.
 *
 *  REGLER, laes foer du redigerer:
 *  1. Ingen klientnavne. Brug branche og landsdel. Aftalt med klienterne.
 *  2. Alle tal skal kunne dokumenteres. Findes tallet ikke, saa skriv ikke et tal.
 *  3. Igangvaerende projekter markeres med status "loebende". Lyv ikke om faerdighed.
 *  4. Eget arbejde markeres med status "eget" og maa ALDRIG fremstaa som klientarbejde.
 *  5. Klienter med uafklarede forhold hoerer ikke hjemme her.
 */

export type CaseMetric = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  status: "afsluttet" | "loebende" | "eget";
  client: string;          // anonymiseret betegnelse
  region: string;
  year: string;
  title: string;           // resultatet, ikke ydelsen
  teaser: string;          // til oversigten
  challenge: string[];
  solution: string[];
  delivered: string[];
  metrics: CaseMetric[];
  note?: string;           // aerlig kontekst, fx at projektet stadig koerer
  images: { src: string; alt: string }[];
  liveUrl?: string;        // rigtigt link slaar ethvert skaermbillede
};

export const CASES: CaseStudy[] = [
  {
    slug: "rengoering-storkoebenhavn",
    status: "loebende",
    client: "Rengøringsvirksomhed",
    region: "Storkøbenhavn",
    year: "2026",
    title: "Fra ingen synlighed til et komplet kundesystem på otte uger.",
    teaser:
      "Ingen fungerende hjemmeside, ingen struktur på henvendelser, ingen betalt annoncering. Alt blev bygget fra bunden.",
    challenge: [
      "Det gamle domæne var hacket og fyldt med spam.",
      "Usynlig i lokale søgninger.",
      "Henvendelser blev håndteret manuelt og faldt mellem to stole.",
    ],
    solution: [
      "Byggede ny hjemmeside struktureret til lokal søgning.",
      "Reddede det oprindelige indhold ud af det hackede domæne.",
      "Satte CRM op med automatisk svar på hver henvendelse.",
      "Lancerede annoncekampagne med kvalificerende leadformular.",
    ],
    delivered: [
      "Ni siders hjemmeside med lokal SEO",
      "Google Business-profil",
      "CRM med automatisk leadopsamling og besked til ejeren",
      "Fem annoncer produceret i tre formater",
    ],
    metrics: [
      { value: "96 kr", label: "pris per lead" },
      { value: "+17 %", label: "søgevisninger, første uger" },
      { value: "under 60 sek.", label: "automatisk svartid" },
    ],
    note:
      "Samarbejdet kører stadig, og det rapporteres som sådan. Prisen per lead er stærk for branchen i København. Konvertering fra lead til underskrevet opgave er kundens eget salgsarbejde, og det arbejde er i gang.",
    images: [
      { src: "/portfolio/case-b-site.jpg", alt: "Forsiden af den nye hjemmeside" },
      { src: "/portfolio/case-b-annonce.jpg", alt: "En af de fem producerede annoncer" },
      { src: "/portfolio/case-b-ovn-foer.jpg", alt: "Før-billede brugt i annoncen" },
      { src: "/portfolio/case-b-ovn-efter.jpg", alt: "Efter-billede brugt i annoncen" },
    ],
  },
  {
    slug: "eget-projekt-cactai",
    status: "eget",
    client: "Eget projekt",
    region: "CactAi",
    year: "2026",
    title: "Jeg bruger selv det system, jeg sælger.",
    teaser:
      "Min egen hjemmeside er bygget med de samme metoder som klienternes. Det er ikke en kundecase, men det er det arbejde jeg kan vise nærmest.",
    challenge: [
      "Et bureau der sælger hjemmesider bliver bedømt på sin egen.",
      "Prisen skal kunne ses uden at booke et møde først.",
    ],
    solution: [
      "Byggede siden i Next.js med fokus på hastighed og struktureret data.",
      "Skrev priserne direkte på siden.",
      "Koblede booking sammen med CRM.",
    ],
    delivered: [
      "Hjemmeside i Next.js med lokal SEO og struktureret data",
      "Offentlige priser, bookingflow koblet til CRM",
      "Interaktiv 3D-model der forklarer systemet",
    ],
    metrics: [
      { value: "Next.js", label: "bygget fra bunden" },
      { value: "Offentlig", label: "prissætning" },
      { value: "Live", label: "kan besøges nu" },
    ],
    note:
      "Dette er mit eget projekt og ikke et kundeforløb. Det står her, fordi det er den hurtigste måde at se, hvordan jeg arbejder, uden at skulle tage en anden virksomheds ord for det.",
    images: [
      { src: "/portfolio/case-c-cactai.jpg", alt: "Forsiden af cactaihq.com" },
      { src: "/portfolio/case-c-priser.jpg", alt: "Ydelsessiden med priser" },
    ],
    liveUrl: "https://cactaihq.com",
  },
];

export const getCase = (slug: string) => CASES.find((c) => c.slug === slug);
