import { Breadcrumb } from "@/components/site/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vilkår og betingelser",
  description:
    "CactAi's salgs- og leveringsbetingelser for PPSA-services til danske håndværkere. B2B-aftale med 14-dages garanti.",
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
    title: "Parterne",
    body: [
      'Leverandør: CactAi v/Enes Tokmak, enkeltmandsvirksomhed, CVR 46210689, Krogager 44, 2670 Greve ("CactAi").',
      'Kunde: Den erhvervsdrivende fysiske eller juridiske person der bestiller CactAi\'s tjenester ("Kunden").',
      "CactAi leverer udelukkende til erhvervskunder (B2B). Forbrugeraftaleloven og forbrugerbeskyttelsesreglerne finder ikke anvendelse — herunder gælder INGEN 14-dages fortrydelsesret.",
    ],
  },
  {
    n: "02",
    title: "Tjenesten",
    body: [
      "CactAi leverer pay-per-show appointment lead-generation (PPSA) via betalt annoncering på Meta og Google. Tjenesten består typisk af:",
    ],
    list: [
      {
        items: [
          "Opsætning og konfiguration af kampagner i Kundens Meta Business Manager/Google Ads-konto.",
          "Screening og kvalificering af indkomne leads (telefon- og SMS-opfølgning).",
          "Booking af kvalificerede aftaler direkte i Kundens kalender.",
          "Løbende drift, optimering og rapportering.",
        ],
      },
      {
        items: [
          "CactAi leverer IKKE den endelige salgssamtale eller jobudførelse — det er Kundens ansvar.",
        ],
      },
    ],
  },
  {
    n: "03",
    title: "Aftalens indgåelse",
    body: [
      "Aftalen er bindende når Kunden accepterer skriftligt (email, e-signatur, eller betaling af setup-faktura via Billy).",
      "Da Kunden er erhvervsdrivende, gælder INGEN 14-dages fortrydelsesret jf. forbrugeraftaleloven §18 stk. 2 nr. 11.",
    ],
  },
  {
    n: "04",
    title: "Priser og betaling",
    body: ["Alle priser er ekskl. moms (25%)."],
    list: [
      {
        items: [
          "Opstartsgebyr: forud, betalt før igangsætning (typisk 5.000–7.500 kr afhængigt af pakke).",
          "PPSA-bookinger: faktureres bi-ugentligt bagud via Billy. Betalingsfrist netto 8 dage.",
          "Annoncebudget: betales DIREKTE af Kunden til Meta og/eller Google. Går aldrig gennem CactAi.",
          "Morarente: 0,81% pr. påbegyndt måned (renteloven §5). Rykkergebyr 100 kr pr. rykker (rentelovens §9b).",
          "CactAi kan suspendere tjenesten ved 14 dages forsinkelse efter første rykker.",
        ],
      },
    ],
  },
  {
    n: "05",
    title: "14-dages garanti (PPSA)",
    body: [
      "Hvis CactAi ikke leverer mindst 5 fremmødte bookinger inden for 14 kalenderdage fra første godkendte annoncestart, refunderes opstartsgebyret 100% inden 14 dage efter skriftlig anmodning.",
    ],
    list: [
      {
        heading: "Definition af 'fremmødt booking'",
        items: [
          "Planlagt møde hvor potentiel slutkunde bekræfter og deltager fysisk.",
          "Slutkunde er beslutningstager i hjemmet/virksomheden.",
          "Aftalen ligger inden for det aftalte målgruppe-segment (geografi, opgavetype, jobstørrelse).",
          "Mødet varer minimum 15 minutter.",
        ],
      },
      {
        heading: "Garantien bortfalder hvis Kunden",
        items: [
          "Ikke responderer på lead-notifikationer inden for 24 timer i hverdage.",
          "Afviser eller aflyser bookinger uden saglig grund.",
          "Pauser, ændrer eller blokerer annoncering.",
          "Ikke leverer aftalt materiale rettidigt (billeder, tekst, brand-assets).",
          "Ikke tilstede ved bookede møder.",
        ],
      },
      {
        items: [
          "Garantien gælder kun opstartsgebyret — ikke booking-fees eller annonceforbrug betalt til Meta/Google.",
          "Anmodning om refundering skal sendes skriftligt senest 7 dage efter garantiperiodens udløb.",
        ],
      },
    ],
  },
  {
    n: "06",
    title: "Kundens forpligtelser",
    list: [
      {
        items: [
          "Levere korrekte, lovlige og opdaterede oplysninger om virksomheden og tjenesteydelser.",
          "Give CactAi adgang til Meta Business Manager, Google Ads-konto og bookingkalender — i det omfang det er nødvendigt for at levere tjenesten.",
          "Underskrive databehandleraftale (DPA) før idriftsættelse.",
          "Sikre at egen anvendelse af leads overholder GDPR over for slutkunder.",
          "Ikke bruge tjenesten til ulovlige, chikanerende eller vildledende formål.",
          "Betale fakturaer rettidigt.",
        ],
      },
    ],
  },
  {
    n: "07",
    title: "Annoncebudget — direkte til Meta/Google",
    body: [
      "Kunden opretter selv betalingsmetode i Meta Business Manager og Google Ads. CactAi får aldrig adgang til Kundens kort eller bankkonto.",
      "CactAi er ikke ansvarlig for annoncebudget der ikke leverer forventet resultat — algoritmer, sæson og konkurrence er udenfor vores kontrol.",
      "Hvis Meta/Google nedlukker eller suspenderer Kundens konto, kan CactAi ikke holdes ansvarlig.",
    ],
  },
  {
    n: "08",
    title: "Ansvarsfraskrivelse",
    body: [
      'CactAi leverer tjenesten "som den er og forefindes". Vi er ikke ansvarlige for:',
    ],
    list: [
      {
        items: [
          "Bestemte konverteringsrater, omsætningstal eller forretningsresultater udover §05's garanti-mekanisme.",
          "Driftsstabilitet hos underleverandører (Meta, Google, GoHighLevel m.fl.).",
          "Tab som følge af Kundens forkerte konfiguration eller manglende opfølgning på leads.",
          "Slutkunders adfærd, herunder no-shows efter §05's definition.",
        ],
      },
    ],
  },
  {
    n: "09",
    title: "Ansvarsbegrænsning",
    body: [
      "CactAi's samlede erstatningsansvar over for Kunden i en periode på 12 måneder er begrænset til det samlede beløb Kunden har betalt CactAi i samme periode (ekskl. annonceudgifter betalt til tredjepart).",
      "CactAi er ikke ansvarlig for indirekte tab — herunder driftstab, tabt fortjeneste, goodwill, eller datatab — uanset årsag.",
      "Ansvarsbegrænsningen gælder ikke ved forsæt eller grov uagtsomhed.",
    ],
  },
  {
    n: "10",
    title: "Tredjepartstjenester",
    body: [
      "Tjenesten anvender tredjepartsleverandører (Meta, Google, GoHighLevel, Vercel, Billy m.fl.). Se Privatlivspolitikken for fuld liste.",
      "CactAi er ikke ansvarlig for tredjepartsfejl, driftsforstyrrelser eller prisændringer. Vi kan efter rimeligt varsel skifte underleverandør.",
    ],
  },
  {
    n: "11",
    title: "Immaterielle rettigheder",
    body: [
      "Al teknologi, prompts, ad-templates, screening-scripts og automatisering tilhører CactAi. Kunden får ikke-eksklusiv brugsret i aftaleperioden — ikke ejerskab.",
      "Annonce-creatives udviklet specifikt til Kunden (billeder, tekst med Kundens brand) tilhører Kunden.",
      "Kundens egne data tilhører Kunden. Ved ophør udleveres relevante kundedata inden for 30 dage i maskinlæsbart format.",
    ],
  },
  {
    n: "12",
    title: "Databehandleraftale",
    body: [
      "Hvor CactAi behandler personoplysninger på Kundens vegne (leads fra slutkunder), indgås separat databehandleraftale (DPA).",
      "DPA'en regulerer behandlingsformål, underdatabehandlere, sikkerhed, tredjelandsoverførsler og auditrettigheder. Se Privatlivspolitikken §05–06.",
    ],
  },
  {
    n: "13",
    title: "Fortrolighed",
    body: [
      "Begge parter behandler forretningsoplysninger (priser, strategier, kunderelationer, tekniske detaljer) fortroligt og videregiver dem ikke til tredjepart uden skriftlig accept — undtagen hvis det kræves af lov eller domstol.",
      "Fortrolighedsforpligtelsen gælder også efter aftalens ophør.",
    ],
  },
  {
    n: "14",
    title: "Opsigelse og varighed",
    list: [
      {
        items: [
          "Ingen bindingsperiode — Kunden kan opsige til enhver tid.",
          "Opsigelse skal ske skriftligt med 30 dages varsel til udløbet af en betalingsperiode. I varslingsperioden leverer CactAi videre, og Kunden betaler for de leverede ydelser i perioden.",
          "Allerede betalte beløb refunderes ikke (undtaget §05-garantien).",
          "Ved væsentlig misligholdelse kan begge parter ophæve aftalen med 14 dages skriftligt varsel og mulighed for at afhjælpe.",
        ],
      },
    ],
  },
  {
    n: "15",
    title: "Force majeure",
    body: [
      "Ingen part er ansvarlig for forsinkelse eller manglende opfyldelse forårsaget af forhold uden for parternes kontrol — herunder krig, naturkatastrofe, strejke, pandemi, myndighedsindgreb, eller længerevarende nedbrud hos kritiske underleverandører (Meta, Google, hosting).",
    ],
  },
  {
    n: "16",
    title: "Ændringer",
    body: [
      "CactAi kan ændre vilkårene med 30 dages skriftligt varsel via email til den primære kontaktperson.",
      "Væsentlige ændringer til ugunst for Kunden giver Kunden ret til at opsige aftalen med 30 dages varsel uden yderligere konsekvenser.",
    ],
  },
  {
    n: "17",
    title: "Lovvalg og værneting",
    body: [
      "Aftalen er underlagt dansk ret. CISG (FN's konvention om internationale køb) finder ikke anvendelse.",
      "Tvister søges først løst ved forhandling. Hvis det ikke lykkes inden 30 dage: Retten i Roskilde som første instans.",
    ],
  },
  {
    n: "18",
    title: "Kontakt",
    body: [
      "CactAi v/Enes Tokmak · CVR 46210689 · Krogager 44, 2670 Greve",
      "Tlf. +45 91 30 95 60 · Email enescactai@gmail.com · cactaihq.com",
    ],
  },
];

export default function VilkaarPage() {
  return (
    <article>
      <Breadcrumb
        items={[
          { name: "Hjem", url: "https://cactaihq.com" },
          { name: "Vilkår og betingelser", url: "https://cactaihq.com/vilkaar" },
        ]}
      />
      <div className="flex items-baseline justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
        <span>Juridisk // Salgsbetingelser</span>
        <span className="text-[color:var(--color-cactus-cream)]/40">
          v{VERSION} · {LAST_UPDATED}
        </span>
      </div>
      <h1 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl">
        Vilkår og betingelser.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65">
        Standard salgs- og leveringsbetingelser for CactAi's PPSA-services.
        Individuel kontrakt vinder over disse vilkår hvor de er i konflikt.
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
