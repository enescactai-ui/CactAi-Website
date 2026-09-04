"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

/*
 *  Problem foer loesning. Bevidst foerste sektion efter hero.
 *
 *  Formaalet er genkendelse, ikke overtalelse. Ejeren skal laese de tre
 *  punkter og taenke "det er praecis min hverdag", FOER vi naevner et
 *  system. Naevner med vilje ingen kanaler (Meta, Google, AI). Naevner
 *  man kanalen, bliver man sat i en kasse: "aah, endnu et
 *  Facebook-bureau, det har jeg proevet". Kanalen hoerer til paa mødet.
 *
 *  Sproget er ejerens eget: opgaver og kunder, ikke leads og
 *  henvendelser. Et rengoeringsfirma vil have opgaver i kalenderen.
 */

const PROBLEMS = [
  {
    n: "01",
    title: "Nogle måneder er fyldt. Andre er tomme.",
    body: "Arbejdet kommer i bølger, fordi det kommer fra mund-til-mund. Du kan ikke planlægge, ansætte eller sige nej, når du ikke ved hvad næste måned bringer.",
  },
  {
    n: "02",
    title: "Dem der ringer, når du ikke at svare.",
    body: "Folk ringer til tre firmaer og vælger den der svarer først. Står du på en opgave, mister du dem, uden overhovedet at opdage at de ringede.",
  },
  {
    n: "03",
    title: "Du er selv sælgeren.",
    body: "Salget står stille når du er ude at arbejde, og arbejdet står stille når du sælger. Det er loftet. Og det flytter sig ikke, uanset hvor dygtig du er.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-green)]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-green)]">
            Genkender du det?
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Du har bygget firmaet.{" "}
            <span className="text-[color:var(--color-cactus-cream)]/65">
              Men du kan ikke vokse det alene.
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="rounded-3xl border border-[color:var(--color-cactus-green)]/12 bg-white p-8 shadow-[0_4px_24px_-8px_rgba(13,31,22,0.08)]"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-cream)]/65">
                {p.n}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight text-[color:var(--color-cactus-cream)]">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-cactus-cream)]/60">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Loesningen. Ét udfald, ikke en liste af ydelser. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="mt-8 overflow-hidden rounded-3xl border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)]/[0.07] p-9 lg:mt-10 lg:p-14"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
            Løsningen
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
          <p className="mt-5 max-w-4xl font-display text-2xl font-semibold leading-[1.3] tracking-tight text-balance text-[color:var(--color-cactus-cream)] sm:text-3xl lg:text-4xl">
            Vækstmotoren henter folk i dit område der leder efter det du
            laver, sorterer dem der er klar til at købe fra, og lægger dem i
            din kalender som{" "}
            <span className="text-[color:var(--color-cactus-green)]">
              opgaver
            </span>
            , ikke som en bunke navne du selv skal ringe op.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
