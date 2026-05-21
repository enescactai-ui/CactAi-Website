"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { BookingEmbed } from "./BookingEmbed";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CTA() {
  return (
    <section id="book" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative overflow-hidden rounded-3xl border border-[color:var(--color-cactus-green)]/25 bg-gradient-to-br from-[color:var(--color-cactus-green)]/15 via-[color:var(--color-cactus-mid)] to-[color:var(--color-cactus-deep)] p-8 lg:p-14"
        >
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute -top-20 left-1/4 h-60 w-60 rounded-full bg-[color:var(--color-cactus-lime)]/40 blur-3xl" />
            <div className="absolute -bottom-20 right-1/4 h-60 w-60 rounded-full bg-[color:var(--color-cactus-green)]/40 blur-3xl" />
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
            {/* LEFT — pitch */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/30 bg-[color:var(--color-cactus-deep)]/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-green)] backdrop-blur-sm">
                <CalendarDays className="h-3.5 w-3.5" />
                Gratis 20-min strategi-møde
              </div>

              <h2 className="mt-6 font-display text-4xl font-medium leading-[0.95] tracking-[-0.03em] text-balance sm:text-5xl lg:text-6xl">
                Klar til at få kunder{" "}
                <span className="text-[color:var(--color-cactus-green)]">
                  uden risiko?
                </span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/75">
                Vælg en tid der passer dig. Vi regner konkret på hvad
                PPSA-modellen betyder for dit firma — og du beslutter selv
                om det giver mening.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-[color:var(--color-cactus-cream)]/65">
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-[color:var(--color-cactus-green)]" />
                  Intet salgspres
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-[color:var(--color-cactus-green)]" />
                  Konkret regneeksempel for dit firma
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-[color:var(--color-cactus-green)]" />
                  20 minutter — så ved du
                </li>
              </ul>

              <div className="mt-10 border-t border-[color:var(--color-cactus-cream)]/10 pt-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/45">
                  Foretrækker du telefon?
                </div>
                <a
                  href="tel:+4591309560"
                  className="mt-2 inline-block font-display text-xl font-medium text-[color:var(--color-cactus-cream)] transition-colors hover:text-[color:var(--color-cactus-green)]"
                >
                  +45 91 30 95 60
                </a>
              </div>
            </div>

            {/* RIGHT — embedded booking widget */}
            <div className="lg:col-span-7">
              <BookingEmbed />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
