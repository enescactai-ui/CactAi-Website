import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vilkår og betingelser",
  description: "CactAi's salgs- og leveringsbetingelser for PPSA-services til danske håndværkere.",
};

const SECTIONS = [
  {
    n: "01",
    title: "Aftalens parter",
    body: "Disse vilkår gælder mellem CactAi v/Enes Tokmak (CVR 46210689) og den erhvervsdrivende kunde der køber CactAi's PPSA-services. Aftalen indgås når kunden bekræfter setup-fakturaen via Billy eller anden skriftlig accept.",
  },
  {
    n: "02",
    title: "Tjenesten",
    body: "CactAi leverer pay-per-show appointment lead-generation via Meta- og Google-ads. Vi screener leads personligt og booker dem direkte i kundens kalender. Vi leverer IKKE den endelige salgssamtale eller jobudførelse — det er kundens ansvar.",
  },
  {
    n: "03",
    title: "Pricing og betaling",
    body: "Setup-fee opkræves ved aftaleindgåelse. Per-møde-fees faktureres bi-ugentligt via Billy med betalingsfrist netto 8 dage. Ad-budget betales af kunden DIREKTE til Meta/Google — det går aldrig gennem CactAi. Alle priser er ekskl. moms.",
  },
  {
    n: "04",
    title: "14-dages garanti",
    body: "Hvis CactAi ikke leverer minimum 5 fremmødte møder inden for 14 dage fra første godkendte annonce-start, refunderes setup-fee fuldt ud inden 14 dage efter skriftlig anmodning. Et 'fremmødt møde' defineres som et møde hvor kunden er fysisk til stede, er beslutningstager, i aftalt målgruppe, og mødet varer min. 15 minutter. Garantien bortfalder hvis kunden afviser bookede møder uden saglig grund, ikke overholder opfølgningsfrister, eller pauser annoncering.",
  },
  {
    n: "05",
    title: "Kundens forpligtelser",
    body: "Kunden skal svare på lead-notifikationer inden for rimelig tid, møde op til bookede aftaler, give CactAi adgang til Meta Business Manager og kalender, samt betale fakturaer rettidigt. Forsinket betaling tilskrives renter på 0,81% pr. påbegyndt måned + rykkergebyr 100 kr.",
  },
  {
    n: "06",
    title: "Opsigelse",
    body: "Initial bindingsperiode er 3 måneder. Derefter månedlig opsigelse med 30 dages varsel. Ved væsentlig misligholdelse kan begge parter ophæve aftalen med 14 dages varsel med mulighed for at afhjælpe.",
  },
  {
    n: "07",
    title: "Ansvar",
    body: "CactAi's samlede ansvar er begrænset til de seneste 6 måneders betalte beløb fra kunden. Indirekte tab (driftstab, tabt fortjeneste) er udelukket. CactAi garanterer ikke specifikke salgsresultater — kun leveringen af fremmødte møder iht. §04.",
  },
  {
    n: "08",
    title: "Databehandling",
    body: "Når CactAi behandler lead-data på kundens vegne, gælder separat databehandleraftale (DPA) som vedlægges service-aftalen. Begge parter forpligter sig til GDPR-compliance.",
  },
  {
    n: "09",
    title: "Lovvalg",
    body: "Dansk ret. Værneting: Københavns Byret.",
  },
];

export default function VilkaarPage() {
  return (
    <article>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
        Juridisk // Salgsbetingelser
      </div>
      <h1 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl">
        Vilkår og betingelser.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65">
        Standard salgs- og leveringsbetingelser. Hvis vi underskriver en
        individuel kontrakt med dig, vinder den over disse vilkår hvor de er i
        konflikt.
      </p>

      <div className="mt-16 space-y-12">
        {SECTIONS.map((s) => (
          <section key={s.n} className="border-t border-[color:var(--color-cactus-green)]/15 pt-8">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-sm text-[color:var(--color-cactus-green)]">
                {s.n}
              </span>
              <h2 className="font-display text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
                {s.title}
              </h2>
            </div>
            <p className="mt-6 pl-10 leading-relaxed text-[color:var(--color-cactus-cream)]/75">
              {s.body}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-16 border-t border-[color:var(--color-cactus-green)]/15 pt-8 text-sm text-[color:var(--color-cactus-cream)]/55">
        Senest opdateret: 22. maj 2026 · Version 1.0
      </div>
    </article>
  );
}
