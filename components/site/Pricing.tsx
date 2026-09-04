"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers, ShieldCheck, Unlock } from "lucide-react";
import { trackConversion } from "@/lib/tracking";

const EASE = [0.16, 1, 0.3, 1] as const;

const POINTS = [
  {
    icon: Layers,
    title: "Skræddersyet til dig",
    desc: "Vi giver ikke én pris til alle. Vi bygger Vækstmotoren til præcis det din forretning har brug for, og prisen følger opgaven.",
  },
  {
    icon: ShieldCheck,
    title: "Én fast pris",
    desc: "Fast beløb om måneden. Ingen provision oveni dine egne priser, og ingen regning der svinger fra måned til måned.",
  },
  {
    icon: Unlock,
    title: "Ingen binding",
    desc: "Ingen lange kontrakter. Du kan gå med 30 dages varsel, fra dag ét.",
  },
];

export function Pricing() {
  return (
    <section id="priser" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-green)]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-green)]">
            Pris
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Prisen står ikke her.{" "}
            <span className="text-[color:var(--color-cactus-green)]">
              Med vilje.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65">
            En hjemmeside der skal stå klar til fredag, og opgaver der skal
            hentes ind måned efter måned, kan ikke koste det samme. Book en
            kort snak, og du får et konkret tilbud til din forretning, ikke et
            tal fra en prisliste der ikke passer på nogen.
          </p>

          {/*
            ÉT kort, ikke to. Rettet 4. sep 2026.
            
            Foer stod her to kort side om side, og det fremhaevede med
            "De fleste starter her" solgte en HJEMMESIDE. Hele siden
            ovenfor bygger oensket om Vaekstmotoren, og saa blev laeseren
            i selve forpligtelses-oejeblikket fortalt at det han lige var
            solgt paa, var opsalget. Argumentet og tilbuddet pegede hver
            sin vej praecis der hvor de skulle pege samme vej.
            
            Hjemmeside-produktet findes stadig, men det hoerer til som et
            svar i FAQ'en for dem der ikke er klar til det hele, ikke som
            det fremhaevede kort.
          */}
          <div className="mx-auto mt-14 max-w-xl text-left">
            <div className="rounded-2xl border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)]/[0.07] p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)]">
                Det du har læst om ovenfor
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
                Vækstmotoren
              </h3>
              <div className="mt-4 font-display text-4xl font-bold tracking-tight text-[color:var(--color-cactus-green)]">
                Fast pr. måned
              </div>
              <div className="mt-1 font-mono text-[11px] text-[color:var(--color-cactus-cream)]/65">
                Ingen binding · 30 dages opsigelse fra dag ét
              </div>
              <ul className="mt-6 space-y-2.5 text-sm text-[color:var(--color-cactus-cream)]/70">
                <li>Opgaver hentet ind i dit område</li>
                <li>Svar på hver ny opgave på under et minut</li>
                <li>Navn, opgave og nummer på din telefon med det samme</li>
                <li>Hjemmeside og lokal synlighed, hvor det er en del af aftalen</li>
                <li>Du ejer hjemmeside, konti og data, også hvis du stopper</li>
              </ul>
              <a
                href="/#book"
                onClick={() => trackConversion("cta_klik", { sted: "pris" })}
                className="mt-7 block rounded-full bg-[color:var(--color-cactus-green)] px-6 py-3.5 text-center font-display text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                Få din kundeanalyse
              </a>
            </div>

            <p className="mt-5 text-center text-[14px] leading-relaxed text-[color:var(--color-cactus-cream)]/65">
              Er du ikke klar til det hele endnu, kan vi starte med
              hjemmeside og lokal synlighed alene. Det tager vi på mødet.
            </p>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3 lg:mt-16">
          {POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="rounded-3xl border border-[color:var(--color-cactus-green)]/12 bg-white p-7 shadow-[0_4px_24px_-8px_rgba(13,31,22,0.08)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-cactus-green)]/10">
                <p.icon
                  className="h-5 w-5 text-[color:var(--color-cactus-green)]"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-[color:var(--color-cactus-cream)]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-cactus-cream)]/60">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Hvem det passer til, og hvem det ikke goer.
            At skrive hvem man siger nej til er den billigste
            troevaerdighed der findes, og naesten ingen bureauer goer det.
            Det sorterer ogsaa moederne, saa der kommer faerre spildte kald. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-14 grid gap-5 text-left lg:mt-16 lg:grid-cols-2"
        >
          <div className="rounded-3xl border border-[color:var(--color-cactus-green)]/25 bg-[color:var(--color-cactus-green)]/[0.06] p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)]">
              Det passer til dig hvis
            </div>
            <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/70">
              <li>Du har et lokalt servicefirma med 1 til 15 ansatte.</li>
              <li>Du har kunder i forvejen, men de kommer tilfældigt.</li>
              <li>Du har plads til flere opgaver i kalenderen.</li>
              <li>Du er klar til at lægge et mediebudget oveni honoraret. Det betaler du selv, direkte.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[color:var(--color-cactus-green)]/12 bg-white p-8 shadow-[0_4px_24px_-8px_rgba(13,31,22,0.08)]">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/65">
              Sig nej hvis
            </div>
            <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/65">
              <li>Du leder efter det billigste tilbud på markedet.</li>
              <li>Du skal bruge nye kunder i denne uge. Det tager uger, ikke dage.</li>
              <li>Du har ikke kapacitet til at tage flere opgaver ind.</li>
              <li>Du vil helst ikke involveres, og bare have en regning i indbakken hver måned.</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          <a
            href="/#book"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-cactus-green)] px-8 py-4 font-display text-base font-semibold text-white transition-all hover:brightness-110 hover:shadow-[0_8px_30px_-8px_rgba(82,183,136,0.6)]"
          >
            Få din lokale kundeanalyse
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
          </a>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-cactus-cream)]/65">
            Uforpligtende · 20 minutter · du får analysen uanset hvad
          </span>
        </motion.div>
      </div>
    </section>
  );
}
