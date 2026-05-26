"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const BEFORE = [
  {
    label: "Mandag morgen",
    body: "Du tjekker telefonen — 4 missede opkald i går aftes mens du arbejdede. To er fra leads. De har sikkert ringet til den næste på Google.",
  },
  {
    label: "Onsdag eftermiddag",
    body: "Du bruger 90 min på at ringe leads fra Facebook. 6 svarer ikke. 2 har glemt de søgte. 1 har lige fået tilbud fra en anden.",
  },
  {
    label: "Fredag aften",
    body: "Du logger ind på Meta Business Manager. Du ved ikke om kampagnen virker. Bureauet sender en PDF mandag du ikke gider læse.",
  },
  {
    label: "Næste måned",
    body: "Du betaler 8.500 kr i retainer + 12.000 kr i ads. Du har talt med 4 prospects. 0 har skrevet kontrakt. Du overvejer at stoppe.",
  },
];

const AFTER = [
  {
    label: "Mandag morgen",
    body: "Du tjekker kalenderen — 3 nye møder bookede i weekenden. Adresser, navne, opgavebeskrivelse. Du kører direkte ud.",
  },
  {
    label: "Onsdag eftermiddag",
    body: "Du laver det arbejde du er god til. Vi ringer dine leads. Du får besked når de er bookede — ellers stille.",
  },
  {
    label: "Fredag aften",
    body: "Du tjekker din kalender for ugen. 9 møder bookede. 7 har bekræftet. Du behøver ikke tjekke ads-platforme — det er ikke dit job.",
  },
  {
    label: "Næste måned",
    body: "Du har betalt for 14 fremmødte møder. Ingen for de 6 no-shows. Du har lukket 5 nye kunder. Setup-fee er tjent ind 3× over.",
  },
];

export function BeforeAfter() {
  return (
    <section
      id="contrast"
      className="relative isolate overflow-hidden py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-3xl"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
            Før / Efter // 05
          </div>
          <h2 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            Din uge nu vs.{" "}
            <span className="text-[color:var(--color-cactus-green)]">
              din uge efter
            </span>
            .
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/70">
            Det her er ikke salgs-tekst. Det er hvad vores klienter har fortalt
            os — sammensat til den uge du sandsynligvis lever lige nu.
          </p>
        </motion.div>

        {/* Two-column split */}
        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8">
          {/* BEFORE column — muted */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative border border-[color:var(--color-cactus-cream)]/12 bg-[color:var(--color-cactus-deep)]/60 p-8 lg:p-10"
          >
            {/* Column header */}
            <div className="flex items-baseline justify-between gap-4 border-b border-[color:var(--color-cactus-cream)]/12 pb-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-cream)]/40">
                  Uden CactAi
                </div>
                <div className="mt-2 font-display text-2xl font-medium text-[color:var(--color-cactus-cream)]/60 sm:text-3xl">
                  Din uge nu
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-cream)]/30">
                Status quo
              </div>
            </div>

            {/* Timeline */}
            <ul className="mt-8 space-y-7">
              {BEFORE.map((entry, i) => (
                <Entry key={entry.label} entry={entry} index={i} muted />
              ))}
            </ul>

            {/* Bottom signature */}
            <div className="mt-10 border-t border-[color:var(--color-cactus-cream)]/12 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/30">
              · Resultat: lavt energi-niveau, høj stress, samme måned næste md
            </div>
          </motion.div>

          {/* AFTER column — vibrant */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="relative"
          >
            {/* Offset shadow box */}
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 h-full w-full border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)]/15"
            />
            <div className="relative border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-dark)] p-8 lg:p-10">
              {/* Column header */}
              <div className="flex items-baseline justify-between gap-4 border-b border-[color:var(--color-cactus-green)]/25 pb-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                    Med CactAi
                  </div>
                  <div className="mt-2 font-display text-2xl font-medium text-[color:var(--color-cactus-cream)] sm:text-3xl">
                    Din uge efter
                  </div>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                  Nyt setup
                </div>
              </div>

              {/* Timeline */}
              <ul className="mt-8 space-y-7">
                {AFTER.map((entry, i) => (
                  <Entry key={entry.label} entry={entry} index={i} />
                ))}
              </ul>

              {/* Bottom signature */}
              <div className="mt-10 border-t border-[color:var(--color-cactus-green)]/25 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)]">
                · Resultat: fokus på arbejdet, fyldt kalender, betalt for det der virker
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom anchor link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col items-center gap-4 text-center"
        >
          <p className="font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-[color:var(--color-cactus-cream)] sm:text-3xl">
            Hvilken uge vil du leve næste måned?
          </p>
          <a
            href="/#book"
            className="group inline-flex items-center gap-3 border-b-2 border-[color:var(--color-cactus-green)] pb-1 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)] transition-all hover:gap-4 hover:text-[color:var(--color-cactus-cream)]"
          >
            Book strategi-møde
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Entry({
  entry,
  index,
  muted,
}: {
  entry: { label: string; body: string };
  index: number;
  muted?: boolean;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.08, ease: EASE }}
      className="grid grid-cols-[80px_1fr] gap-4 sm:grid-cols-[100px_1fr]"
    >
      <div
        className={`font-mono text-[11px] uppercase tracking-[0.16em] ${
          muted
            ? "text-[color:var(--color-cactus-cream)]/35"
            : "text-[color:var(--color-cactus-green)]"
        }`}
      >
        {entry.label}
      </div>
      <div
        className={`text-sm leading-relaxed sm:text-base ${
          muted
            ? "text-[color:var(--color-cactus-cream)]/55"
            : "text-[color:var(--color-cactus-cream)]/85"
        }`}
      >
        {entry.body}
      </div>
    </motion.li>
  );
}
