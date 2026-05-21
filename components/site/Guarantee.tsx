"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section id="garanti" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-[color:var(--color-cactus-green)]/20 bg-gradient-to-br from-[color:var(--color-cactus-mid)] via-[color:var(--color-cactus-dark)] to-[color:var(--color-cactus-deep)] p-10 lg:p-16"
        >
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[color:var(--color-cactus-green)]/15 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[color:var(--color-cactus-lime)]/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/25 bg-[color:var(--color-cactus-deep)]/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-green)] backdrop-blur-sm">
                <ShieldCheck className="h-3.5 w-3.5" />
                14-dages garanti
              </div>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
                Leverer vi ikke 5 fremmødte på 14 dage —{" "}
                <span className="text-[color:var(--color-cactus-green)]">
                  får du pengene tilbage
                </span>
                .
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/70">
                Vi tjener kun penge når dine kunder faktisk møder op. Hvis
                modellen ikke virker for dig, så får du setup-fee'en fuldt
                refunderet. Ingen smålig snak, ingen klausuler.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Skriftlig garanti i kontrakten",
                  "Refundering inden 14 dage efter anmodning",
                  "Ingen binding ud over de 14 dage",
                  "Ad-spend går direkte til Meta — aldrig gennem os",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-[color:var(--color-cactus-cream)]/80"
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--color-cactus-green)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-square w-full max-w-md mx-auto"
              >
                <div className="absolute inset-0 rounded-full bg-[color:var(--color-cactus-green)]/10 blur-3xl" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-[color:var(--color-cactus-green)]/30 bg-gradient-to-br from-[color:var(--color-cactus-green)]/15 to-transparent backdrop-blur-sm">
                  <div className="text-center">
                    <ShieldCheck
                      className="mx-auto h-20 w-20 text-[color:var(--color-cactus-green)]"
                      strokeWidth={1.25}
                    />
                    <div className="mt-6 font-display text-5xl font-semibold tracking-tight">
                      0 kr
                    </div>
                    <div className="mt-2 text-sm uppercase tracking-wider text-[color:var(--color-cactus-cream)]/55">
                      ved no-show
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
