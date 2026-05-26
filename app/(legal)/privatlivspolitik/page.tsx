import { Breadcrumb } from "@/components/site/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privatlivspolitik",
  description:
    "Sådan behandler CactAi personoplysninger. GDPR-kompatibel privatlivspolitik for prospekter, klienter og besøgende på cactaihq.com.",
};

const LAST_UPDATED = "22. maj 2026";
const VERSION = "2.0";

type Section = {
  n: string;
  title: string;
  body?: string[];
  list?: { heading?: string; items: string[] }[];
};

const SECTIONS: Section[] = [
  {
    n: "01",
    title: "Dataansvarlig",
    body: [
      "CactAi v/Enes Tokmak (enkeltmandsvirksomhed). CVR 46210689. Krogager 44, 2670 Greve. Tlf. +45 91 30 95 60. Email enescactai@gmail.com.",
      "CactAi er dataansvarlig for de personoplysninger vi indsamler om dig som prospekt, klient eller besøgende på cactaihq.com. Når vi behandler personoplysninger på vegne af en klient (fx leads vi leverer), er vi databehandler — se §07.",
    ],
  },
  {
    n: "02",
    title: "Hvilke oplysninger vi behandler",
    list: [
      {
        heading: "Som prospekt (B2B-outreach)",
        items: [
          "Firmanavn, branche, CVR-nummer",
          "Kontaktperson: navn, jobtitel",
          "Telefonnummer, email — fra offentligt tilgængelige kilder (cvr.dk, virksomhedsdatabaser, LinkedIn)",
          "Notater fra eventuelle samtaler (formål, tidspunkt, opfølgningsbehov)",
        ],
      },
      {
        heading: "Som klient",
        items: [
          "Fakturerings- og betalingsoplysninger (adresse, regnskabsemail, betalingsstatus)",
          "Aftaledokumenter og databehandleraftale",
          "Adgangsoplysninger til Meta Business Manager, Google Ads, kalender (kun det vi har brug for)",
          "Kommunikation: emails, SMS, opkald",
        ],
      },
      {
        heading: "Som besøgende på cactaihq.com",
        items: [
          "Anonymiseret traffic-data via Vercel Analytics (page views, referrer, generisk land/region)",
          "Form-data hvis du udfylder booking-widget (navn, email, telefon, firma)",
          "Ingen tracking-cookies, ingen fingerprinting, ingen tredjeparts-remarketing",
        ],
      },
      {
        heading: "Leads vi leverer til klienter (CactAi som databehandler)",
        items: [
          "Slutkundens navn, telefonnummer, email",
          "Opgavebeskrivelse, ønsket tidspunkt, adresse",
          "Disse oplysninger tilhører klienten — vi opbevarer dem maksimalt 30 dage efter levering (medmindre garantiperioden kræver længere)",
        ],
      },
    ],
  },
  {
    n: "03",
    title: "Retsgrundlag og formål (GDPR art. 6)",
    list: [
      {
        items: [
          "Samtykke (art. 6(1)(a)): Marketing-emails efter eksplicit opt-in, ikke-nødvendige cookies.",
          "Aftale (art. 6(1)(b)): Klient-aftaler, fakturering, levering af PPSA-services.",
          "Retlig forpligtelse (art. 6(1)(c)): Bogføringsloven (5 års opbevaring af fakturaer og regnskabsbilag).",
          "Legitim interesse (art. 6(1)(f)): B2B-outreach til erhvervsdrivende (markedsføringsloven §10 stk. 4), it-sikkerhed, fraud prevention. Vi har lavet en Legitimate Interest Assessment (LIA) som dokumentation — kan rekvireres.",
        ],
      },
    ],
  },
  {
    n: "04",
    title: "Opbevaringsperioder",
    list: [
      {
        items: [
          "Prospekter uden engagement: slettes efter 6 måneder fra sidste kontakt.",
          "Opt-outs: opbevares permanent på vores suppression-list, så vi ikke ved et uheld kontakter dig igen.",
          "Aktive klienter: aftalens løbetid + 3 år til efterfølgende reklamationer.",
          "Fakturaer og regnskabsbilag: 5 år (bogføringsloven).",
          "Lead-data leveret til klient: slettes fra vores systemer inden 30 dage efter levering, undtaget garantiperioder hvor dokumentation kræves.",
          "Vercel Analytics: aggregeret, anonym — opbevares hos Vercel iht. deres politik.",
        ],
      },
    ],
  },
  {
    n: "05",
    title: "Databehandlere (subprocessors)",
    body: [
      "Vi bruger følgende underleverandører til at levere vores tjeneste. Vi har indgået skriftlige databehandleraftaler (DPA) med alle. Opdateret liste kan rekvireres via enescactai@gmail.com.",
    ],
    list: [
      {
        items: [
          "GoHighLevel (USA) — CRM, kalender, booking-widget, formularer. Overførselsgrundlag: Standard Contractual Clauses (SCC).",
          "Meta Platforms Ireland (EU) — annoncering. Du betaler direkte til Meta; vi har ikke adgang til dit kort.",
          "Google Ireland (EU) — Google Ads. Som ovenfor.",
          "Vercel (USA/EU) — hosting og analytics. Overførselsgrundlag: EU-US Data Privacy Framework + EU-regioner hvor muligt.",
          "Billy ApS (Danmark) — regnskab og fakturering.",
          "Google Workspace (USA/EU) — email-kommunikation. Overførselsgrundlag: EU-US Data Privacy Framework.",
        ],
      },
    ],
  },
  {
    n: "06",
    title: "Overførsel til tredjelande",
    body: [
      "Flere af vores underleverandører er placeret i USA. Overførsler baseres på:",
    ],
    list: [
      {
        items: [
          "EU-US Data Privacy Framework (DPF) for DPF-certificerede leverandører (Vercel, Google).",
          "Standard Contractual Clauses (SCC) for ikke-certificerede leverandører (GoHighLevel) suppleret med tekniske foranstaltninger (TLS-kryptering, adgangslogning).",
          "Kopier af overførselsgrundlag og DPA'er kan rekvireres skriftligt.",
        ],
      },
    ],
  },
  {
    n: "07",
    title: "Når CactAi er databehandler",
    body: [
      "Når CactAi leverer leads til en klient, er klienten dataansvarlig for de slutkundedata vi videregiver. CactAi fungerer som databehandler i den fase, reguleret af separat databehandleraftale med klienten.",
      "Slutkunder med spørgsmål om hvordan deres data bruges, skal kontakte den virksomhed der modtog leadet (vores klient).",
    ],
  },
  {
    n: "08",
    title: "Cookies",
    body: [
      "cactaihq.com bruger Vercel Analytics og Speed Insights — anonymiseret, ingen cookies, ingen fingerprinting. Booking-widgetten fra GoHighLevel sætter funktionelle cookies når du interagerer med den (krævet for at gemme dit valg af tid).",
      "Læs den fulde cookie-politik på /cookies.",
    ],
  },
  {
    n: "09",
    title: "Dine rettigheder (GDPR)",
    body: [
      "Du har følgende rettigheder, alle gratis:",
    ],
    list: [
      {
        items: [
          "Indsigt i de personoplysninger vi behandler om dig (art. 15).",
          "Berigtigelse af forkerte eller forældede oplysninger (art. 16).",
          "Sletning (\"retten til at blive glemt\") når retsgrundlaget falder bort (art. 17).",
          "Begrænsning af behandling (art. 18).",
          "Dataportabilitet — udlevering i maskinlæsbart format (art. 20).",
          "Indsigelse mod behandling baseret på legitim interesse eller direkte markedsføring (art. 21).",
          "Tilbagekaldelse af samtykke til enhver tid (art. 7).",
        ],
      },
    ],
  },
  {
    n: "10",
    title: "Sådan udøver du dine rettigheder",
    body: [
      "Send en mail til enescactai@gmail.com med dit ønske. Vi bekræfter modtagelsen inden 7 dage og handler inden 30 dage. Ved komplekse anmodninger kan vi forlænge med yderligere 2 måneder med begrundelse.",
      "Vi kan kræve dokumentation for din identitet for at undgå udlevering til uvedkommende.",
    ],
  },
  {
    n: "11",
    title: "Klage til Datatilsynet",
    body: [
      "Hvis du mener vi behandler dine oplysninger i strid med GDPR, kan du klage til Datatilsynet:",
      "Datatilsynet · Carl Jacobsens Vej 35, 2500 Valby · Tlf. +45 33 19 32 00 · dt@datatilsynet.dk · datatilsynet.dk",
    ],
  },
  {
    n: "12",
    title: "Sikkerhed",
    body: [
      "Vi anvender TLS-kryptering under transport, kryptering af hvilende data hos vores hosting-udbyder, 2-faktor-autentificering på alle administrative konti, og adgangslogning.",
      "Hvis et databrud sker, anmelder vi det til Datatilsynet inden 72 timer iht. GDPR art. 33 og informerer berørte personer hvis høj risiko foreligger (art. 34).",
    ],
  },
  {
    n: "13",
    title: "Ændringer",
    body: [
      "Vi opdaterer denne politik når lovgivning eller praksis kræver det. Materielle ændringer notificeres aktive klienter via email mindst 14 dage før de træder i kraft.",
      "Tjek altid versionsdatoen øverst.",
    ],
  },
];

export default function PrivatlivspolitikPage() {
  return (
    <article>
      <Breadcrumb
        items={[
          { name: "Hjem", url: "https://cactaihq.com" },
          { name: "Privatlivspolitik", url: "https://cactaihq.com/privatlivspolitik" },
        ]}
      />
      <div className="flex items-baseline justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
        <span>Juridisk // GDPR</span>
        <span className="text-[color:var(--color-cactus-cream)]/40">
          v{VERSION} · {LAST_UPDATED}
        </span>
      </div>
      <h1 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl">
        Privatlivspolitik.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65">
        Hvordan vi behandler personoplysninger — kort, præcist, GDPR-kompatibelt.
        Spørgsmål?{" "}
        <a
          href="mailto:enescactai@gmail.com"
          className="text-[color:var(--color-cactus-green)] underline decoration-2 underline-offset-4 transition-colors hover:text-[color:var(--color-cactus-cream)]"
        >
          enescactai@gmail.com
        </a>
        .
      </p>

      <div className="mt-16 space-y-12">
        {SECTIONS.map((s) => (
          <section
            key={s.n}
            className="relative pt-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[color:var(--color-cactus-green)]/20 before:to-transparent"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-sm text-[color:var(--color-cactus-green)]">
                {s.n}
              </span>
              <h2 className="font-display text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
                {s.title}
              </h2>
            </div>
            <div className="mt-6 space-y-5 pl-10 leading-relaxed text-[color:var(--color-cactus-cream)]/75">
              {s.body?.map((p, i) => <p key={`p-${i}`}>{p}</p>)}
              {s.list?.map((block, bi) => (
                <div key={`block-${bi}`} className="space-y-2">
                  {block.heading && (
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/55">
                      {block.heading}
                    </div>
                  )}
                  <ul className="space-y-2">
                    {block.items.map((item, ii) => (
                      <li
                        key={ii}
                        className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-[2px] before:w-3 before:bg-[color:var(--color-cactus-green)]/40"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="relative mt-16 pt-8 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/45 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[color:var(--color-cactus-green)]/20 before:to-transparent">
        CactAi · CVR 46210689 · Version {VERSION} · {LAST_UPDATED}
      </div>
    </article>
  );
}
