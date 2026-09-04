"use client";

/*
 *  DOED KODE pr. 4. sep 2026. Ingen side importerer denne fil.
 *
 *  Beskriver '14-dages garanti' og '5 fremmoedte', som ikke findes mere.
 *  Der staar bevidst INTET tal i nogen garanti paa sitet laengere.
 *
 *  Se den oeverste blok i CLAUDE.md. Skal filen bruges igen, skal teksten
 *  skrives om FOERST. Saet den ikke paa en side som den er.
 */
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const TERMS = [
  "Skriftlig garanti i kontrakten",
  "Refundering inden 14 dage efter anmodning",
  "Ingen binding ud over de 14 dage",
  "Ad-spend går direkte til Meta, aldrig gennem os",
];

/**
 * Garantien vist som en kvittering, ikke et badge. Samme visuelle sprog
 * som PPSA-modellen ellers laener paa (Receipt.tsx), i staedet for endnu
 * et skjold-med-flueben trust-icon. Bruger kun temaets tokens, saa den
 * arver lyst/moerkt korrekt, den gamle version haardkodede #0d1f16 og
 * saa derfor forkert ud paa det lyse tema.
 */
export function Guarantee() {
  return (
    <section id="garanti" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="grid overflow-hidden rounded-3xl border border-[color:var(--color-cactus-border)] bg-[color:var(--color-cactus-surface)] lg:grid-cols-[1fr_auto_320px]"
        >
          {/* Left: the promise */}
          <div className="p-10 lg:p-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/25 bg-[color:var(--color-cactus-green)]/8 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-cactus-green)]">
              § 14-dages garanti
            </div>

            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
              Leverer vi ikke 5 fremmødte på 14 dage,{" "}
              <span className="text-[color:var(--color-cactus-green)]">
                får du pengene tilbage
              </span>
              .
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65">
              Vi tjener kun penge når dine kunder faktisk møder op. Hvis
              modellen ikke virker for dig, får du setup-fee&apos;en fuldt
              refunderet. Ingen smålig snak, ingen klausuler.
            </p>

            <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {TERMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[15px] text-[color:var(--color-cactus-cream)]/75"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--color-cactus-green)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#book"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-cactus-green)] px-7 py-3.5 font-display text-base font-semibold text-white transition-all hover:brightness-110"
            >
              Book gratis møde
            </a>
          </div>

          {/* Perforated divider, only on desktop */}
          <div
            aria-hidden
            className="relative hidden w-px lg:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, var(--color-cactus-border) 0 8px, transparent 8px 16px)",
            }}
          />

          {/* Right: the receipt stub */}
          <div className="flex flex-col justify-center bg-[color:var(--color-cactus-dark)] p-10 lg:p-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-muted)]">
              Kvittering ved no-show
            </div>

            <div className="mt-5 space-y-2.5 border-t border-dashed border-[color:var(--color-cactus-border)] pt-5 font-mono text-[13px] text-[color:var(--color-cactus-cream)]/70">
              <div className="flex justify-between gap-4">
                <span>Fremmøde-krav</span>
                <span className="text-[color:var(--color-cactus-cream)]">5+</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Tidsramme</span>
                <span className="text-[color:var(--color-cactus-cream)]">14 dage</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Klausuler</span>
                <span className="text-[color:var(--color-cactus-cream)]">0</span>
              </div>
            </div>

            <div className="mt-6 border-t border-dashed border-[color:var(--color-cactus-border)] pt-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-muted)]">
                Du betaler
              </div>
              <div className="mt-1 font-display text-6xl font-bold tracking-tight text-[color:var(--color-cactus-green)]">
                0 kr
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
