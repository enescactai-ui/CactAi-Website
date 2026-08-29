export type Service = {
  n: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  idealFor: string;
  price: string;
  cta: { label: string; href: string };
  featured?: boolean;
};

export const SERVICES: Service[] = [
  {
    n: "01",
    badge: "Flagship",
    title: "PPSA Lead Generation",
    tagline: "Pay per show appointment. Du betaler kun når kunden møder op.",
    description:
      "Vi kører Meta-ads målrettet danske boligejere i dit område, screener hver lead personligt på telefon og SMS, og booker kun de kvalificerede direkte i din kalender. Møder de ikke op? Du betaler ikke en krone.",
    bullets: [
      "Meta-ads opsætning + drift (du betaler ad-budget direkte til Meta)",
      "Personlig screening af hver lead — vi sorterer skraldet fra",
      "Booking direkte i din kalender via Google/Outlook integration",
      "14-dages garanti: 5 fremmødte møder eller fuld refund af setup",
    ],
    idealFor: "Håndværkere klar til 5+ ekstra møder pr. måned",
    price: "Setup 5.000–7.500 kr · Per fremmødt møde 500–4.500 kr",
    cta: { label: "Se priser og pakker", href: "/#priser" },
    featured: true,
  },
  {
    n: "02",
    badge: "AI",
    title: "AI Receptionist",
    tagline: "Din telefon ringer aldrig forgæves igen.",
    description:
      "Dansk AI-stemme der svarer telefonen 24/7, forstår hvad kunden ringer om, booker tider direkte i din kalender og sender SMS-bekræftelse. Du tager ikke et opkald midt i et job igen.",
    bullets: [
      "Dansk AI-stemme — naturlig, ikke robotagtig",
      "Booker direkte i din kalender ud fra dine tilgængelige tider",
      "Sender SMS-bekræftelse til kunde + lead-info til dit CRM",
      "Du får besked når noget vigtigt sker — ellers stille",
    ],
    idealFor: "Solo-håndværkere der mister opkald mens de arbejder",
    price: "På forespørgsel — typisk 1.500–3.500 kr/md",
    cta: { label: "Få et tilbud", href: "/#book" },
  },
  {
    n: "03",
    badge: "Automation",
    title: "AI System Integration",
    tagline: "Stop med at copy-paste data mellem 8 systemer.",
    description:
      "Vi forbinder dine værktøjer — CRM, kalender, regnskab, formularer, SMS — så data flyder automatisk. Når et lead kommer ind, kører hele kæden af sig selv: kontakt, booking, faktura, opfølgning.",
    bullets: [
      "GoHighLevel CRM-integration og setup — hjertet i hele systemet",
      "Forbindelse til dine eksisterende værktøjer (kalender, regnskab, sheets, formularer)",
      "Automatiske workflows: nyt lead → SMS → booking → opfølgning",
      "Lead-routing og auto-followup-sekvenser",
    ],
    idealFor: "Firmaer med flere systemer der ikke snakker sammen",
    price: "På forespørgsel — typisk 7.500–25.000 kr setup",
    cta: { label: "Få et tilbud", href: "/#book" },
  },
  {
    n: "04",
    badge: "Web",
    title: "Websites & Landing Pages",
    tagline: "En side der konverterer — ikke bare ser flot ud.",
    description:
      "Custom websites bygget i Next.js og hostet på Vercel (samme stack som denne side). Lyn-hurtige loading-tider, mobil-først design, konverterings-fokuseret struktur, og indbygget tracking fra dag ét.",
    bullets: [
      "Next.js + Vercel — under 1 sekund load på mobil",
      "Konverterings-optimeret struktur (CTA, social proof, friction-reduktion)",
      "Google Analytics + Meta Pixel + Vercel Analytics indbygget",
      "Vedligeholdelse, hosting og opdateringer inkluderet — vi tager os af alt",
    ],
    idealFor: "Håndværkere uden site eller med en gammel WordPress-side",
    price: "Setup 5.000 kr · drift fra 750 kr/md — eller 2.000 kr/md med Google & SEO",
    cta: { label: "Få et tilbud", href: "/#book" },
  },
  {
    n: "05",
    badge: "Local SEO",
    title: "Google Presence",
    tagline: "Når kunder googler din service, skal du være der.",
    description:
      "Google Business Profile optimering, automatiseret anmeldelses-indsamling (SMS efter hvert færdigt job), lokal SEO og konkurrent-analyse. Få stjerner og synlighed på den vigtigste markedsplads i din by.",
    bullets: [
      "Google Business Profile setup + optimering (åbningstider, billeder, kategorier)",
      "Automatiseret anmeldelses-indsamling: SMS til kunde 1 dag efter job",
      "Lokal SEO — du rangerer for 'VVS i Greve', ikke bare 'VVS'",
      "Månedlig konkurrent-analyse: hvad gør de bedre end dig",
    ],
    idealFor: "Lokal-fokuserede håndværkere uden eller med få Google-anmeldelser",
    price: "1.500 kr/md alene · 2.000 kr/md bundlet med website",
    cta: { label: "Få et tilbud", href: "/#book" },
  },
];
