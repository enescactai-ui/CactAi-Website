import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privatlivspolitik",
  description:
    "Sådan behandler CactAi personoplysninger. GDPR-kompatibel privatlivspolitik for danske håndværkere og prospekter.",
};

const SECTIONS = [
  {
    n: "01",
    title: "Hvem er vi",
    body: [
      "CactAi v/Enes Tokmak, Krogager 44, 2670 Greve. CVR 46210689. Kontakt: enes@cactaihq.com / +45 91 30 95 60.",
      "Vi er dataansvarlig for de personoplysninger vi indsamler om dig som prospekt eller klient.",
    ],
  },
  {
    n: "02",
    title: "Hvilke oplysninger vi indsamler",
    body: [
      "Som prospekt (cold outreach): Firmanavn, CVR, telefonnummer og email — alt sammen fra offentligt tilgængelige kilder (cvr.dk, virksomhedsdatabaser, eget LinkedIn-research).",
      "Som klient: Yderligere kontaktdata for fakturering (adresse, regnskabsemail) samt CRM-data for lead-håndtering (leads vi modtager på dine vegne).",
      "Som besøgende på cactaihq.com: Anonymiseret traffic-data via Vercel Analytics. Vi bruger ikke tracking-cookies eller fingerprinting.",
    ],
  },
  {
    n: "03",
    title: "Hvorfor vi behandler dem",
    body: [
      "Prospekter: Legitime interesser i B2B-markedsføring til erhvervsdrivende (markedsføringsloven §10 stk. 4 + GDPR art. 6(1)(f)). Vi har lavet en Legitimate Interest Assessment (LIA) som dokumentation.",
      "Klienter: Aftalegrundlag (GDPR art. 6(1)(b)) og retlige forpligtelser (bogføringsloven).",
      "Vi sælger ALDRIG dine data videre. Vi deler kun med vores databehandlere (GoHighLevel, Billy, Meta) til levering af aftalt service.",
    ],
  },
  {
    n: "04",
    title: "Opbevaringsperioder",
    body: [
      "Prospekter uden engagement: Slettes efter 6 måneder hvis intet svar.",
      "Opt-outs: Opbevares permanent på vores suppression list (så vi ikke ved et uheld kontakter dig igen).",
      "Klienter: Kontraktperiode + 5 år (bogføringsloven). Slettes derefter automatisk.",
      "Lead-data leveret til klient: Slettes fra vores systemer inden 30 dage efter levering, medmindre garanti-perioden kræver længere opbevaring.",
    ],
  },
  {
    n: "05",
    title: "Dine rettigheder",
    body: [
      "Du har ret til indsigt, berigtigelse, sletning, begrænsning, dataportabilitet og indsigelse — alt sammen gratis. Send en mail til enes@cactaihq.com med dit ønske, så bekræfter vi inden 7 dage og handler inden 30 dage.",
      "Du kan også klage til Datatilsynet (datatilsynet.dk) hvis du mener vi ikke behandler dine data korrekt.",
    ],
  },
  {
    n: "06",
    title: "Databehandlere",
    body: [
      "GoHighLevel (CRM + automation) — USA, EU-US Data Privacy Framework.",
      "Billy (regnskab) — Danmark.",
      "Meta Platforms (ads) — du betaler direkte til dem; vi har ikke adgang til dit kort.",
      "Vercel (hosting) — USA, EU-US Data Privacy Framework + EU regions hvor muligt.",
      "Vi har skriftlige databehandleraftaler (DPA) med alle relevante parter.",
    ],
  },
  {
    n: "07",
    title: "Ændringer",
    body: [
      "Vi opdaterer denne politik når lovgivning eller praksis kræver det. Seneste opdatering: 22. maj 2026.",
      "Materielle ændringer notificeres aktive klienter via email mindst 14 dage før de træder i kraft.",
    ],
  },
];

export default function PrivatlivspolitikPage() {
  return (
    <article>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
        Juridisk // GDPR
      </div>
      <h1 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl">
        Privatlivspolitik.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65">
        Kort, ærlig, GDPR-kompatibel. Hvis du har spørgsmål, så skriv til{" "}
        <a
          href="mailto:enes@cactaihq.com"
          className="text-[color:var(--color-cactus-green)] underline decoration-2 underline-offset-4"
        >
          enes@cactaihq.com
        </a>
        .
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
            <div className="mt-6 space-y-4 pl-10 text-[color:var(--color-cactus-cream)]/75 leading-relaxed">
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
