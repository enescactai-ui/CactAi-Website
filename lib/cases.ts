/*
 *  Cases til porteføljen.
 *
 *  REGLER, laes foer du redigerer:
 *  1. Ingen klientnavne. Brug branche og landsdel. Aftalt med klienterne.
 *  2. Alle tal skal kunne dokumenteres. Findes tallet ikke, saa skriv ikke et tal.
 *  3. Igangvaerende projekter markeres med status "loebende". Lyv ikke om faerdighed.
 */

export type CaseMetric = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  status: "afsluttet" | "loebende";
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
    slug: "rengoering-nordjylland",
    status: "afsluttet",
    client: "Rengøringsvirksomhed",
    region: "Nordjylland",
    year: "2026",
    title: "De havde allerede betalt for kunderne. De nåede dem bare aldrig.",
    teaser:
      "Virksomheden kørte annoncer og fik henvendelser, men de fleste blev aldrig til noget. Vi gik tilbage i de leads, de havde afskrevet.",
    challenge: [
      "Henvendelser landede i en indbakke og blev ikke ringet op i tide.",
      "Kunden nåede at booke et andet firma, inden der blev fulgt op.",
      "Ejeren havde skrevet de gamle leads af som døde.",
      "Hjemmesiden fangede ikke de kunder, der søgte lokalt.",
    ],
    solution: [
      "Gennemgik de gamle, afskrevne leads i stedet for at købe nye.",
      "Kontaktede dem personligt og med det samme, kvalificerede og booked dem.",
      "Byggede en ny hjemmeside med sider for hver ydelse og hvert kundesegment.",
      "Satte Google-profil og anmeldelser op, så de blev fundet lokalt.",
    ],
    delivered: [
      "Hjemmeside med forside, kontakt, anmeldelser og egne sider til privat, erhverv, flytterengøring og håndværkere",
      "Mobiloptimering",
      "Google Business-profil",
      "Struktureret opfølgning på henvendelser",
    ],
    metrics: [
      { value: "5", label: "kunder booket" },
      { value: "under 1 uge", label: "fra start til booket" },
      { value: "0 kr", label: "nye annoncekroner" },
    ],
    note:
      "De fem kunder kom udelukkende fra leads, virksomheden allerede havde betalt for og opgivet. Der blev ikke brugt en krone på nye annoncer.",
    images: [
      { src: "/portfolio/case-a-index.jpg", alt: "Forsiden af hjemmesiden" },
      { src: "/portfolio/case-a-flytter.jpg", alt: "Side om flytterengøring" },
      { src: "/portfolio/case-a-erhverv.jpg", alt: "Side om erhvervsrengøring" },
      { src: "/portfolio/case-a-kontakt.jpg", alt: "Kontaktside med formular" },
    ],
  },
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
      "Det gamle domæne var hacket og fyldt med spam-sider.",
      "Virksomheden var reelt usynlig i lokale søgninger.",
      "Henvendelser blev håndteret manuelt og faldt mellem to stole.",
      "Ingen erfaring med betalt annoncering, og ingen måde at måle hvad et lead kostede.",
    ],
    solution: [
      "Byggede ni siders hjemmeside skrevet og struktureret til lokal søgning.",
      "Reddede det brugbare indhold fra det hackede domæne.",
      "Satte CRM op med automatisk svar på hver henvendelse inden for 60 sekunder.",
      "Lancerede Meta-kampagne med fem annoncer i tre formater og en kvalificerende leadformular.",
    ],
    delivered: [
      "Ni siders hjemmeside med lokal SEO",
      "Google Business-profil",
      "CRM med automatisk leadopsamling og fordeling",
      "SMS og e-mail til ejeren i samme sekund et lead lander",
      "Fem annoncer produceret i tre formater",
      "Leadformular med kvalificerende spørgsmål, koblet til CRM",
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
];

export const getCase = (slug: string) => CASES.find((c) => c.slug === slug);
