"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { BookingEmbed } from "./BookingEmbed";

const EASE = [0.16, 1, 0.3, 1] as const;

/*
 *  Booking-sektionen. Ligger bevidst NEDERST paa forsiden, saa folk har
 *  set problem, system og pris foer de ser kalenderen.
 *
 *  To ting er bevidste valg, rul dem ikke tilbage uden at snakke med Enes:
 *
 *  1. Moedet hedder "lokal kundeanalyse", ikke "gratis strategi-moede".
 *     Ingen vaagner og oensker sig et salgsmoede. Analysen er noget de
 *     gerne tager imod, ogsaa hvis de aldrig koeber. Det er hele grunden
 *     til at de booker.
 *
 *  2. Der staar INTET tal i garantien. Vi kan styre hvor mange der
 *     henvender sig, ikke hvor mange der bliver lukket, for det afhaenger
 *     af kundens egne priser. Et tal paa siden flytter samtalen fra
 *     "virker det for min forretning" til "hvad taeller som kvalificeret",
 *     og den samtale kan vi kun tabe. Tallet hoerer til i det enkelte
 *     tilbud, hvor vi kender budget og marked.
 */

export function CTA() {
  return (
    <section id="book" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d1f16] to-[#1a3d28] p-8 lg:p-14"
        >
          {/* Ambient background glow */}
          <div className="absolute inset-0 -z-0 opacity-40">
            <div className="absolute -top-20 left-1/4 h-60 w-60 rounded-full bg-[color:var(--color-cactus-green)]/30 blur-3xl" />
            <div className="absolute -bottom-20 right-1/4 h-60 w-60 rounded-full bg-[color:var(--color-cactus-green)]/20 blur-3xl" />
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
            {/* LEFT — pitch */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/40 bg-[color:var(--color-cactus-green)]/12 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-green)]">
                <CalendarDays className="h-3.5 w-3.5" />
                Gratis lokal kundeanalyse · 20 min
              </div>

              <h2 className="mt-6 font-display text-4xl font-medium leading-[0.95] tracking-[-0.03em] text-balance text-white sm:text-5xl lg:text-6xl">
                Se hvad der er at hente{" "}
                <span className="text-[color:var(--color-cactus-green)]">
                  i dit område.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-white/65">
                Vi gennemgår dit område sammen på 20 minutter. Du får tallene
                med dig, uanset om vi ender med at arbejde sammen eller ej.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-white/65">
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-[color:var(--color-cactus-green)]" />
                  Hvor mange der søger efter din ydelse i dit område
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-[color:var(--color-cactus-green)]" />
                  Hvad dine nærmeste konkurrenter gør, og ikke gør
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-[color:var(--color-cactus-green)]" />
                  Hvad en ny fast kunde realistisk koster dig at få ind
                </li>
              </ul>

              {/* Risiko-fjerneren staar her, ikke som egen sektion, fordi den
                  virker i det oejeblik nogen skal forpligte sig.
                  Uden tal, med vilje, se noten i toppen af filen. */}
              <div className="mt-8 rounded-2xl border border-[color:var(--color-cactus-green)]/25 bg-[color:var(--color-cactus-green)]/[0.07] p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)]">
                  Din risiko
                </div>
                <p className="mt-2.5 text-[15px] leading-relaxed text-white/80">
                  Ingen binding.{" "}
                  <span className="font-semibold text-white">
                    30 dages opsigelse fra dag ét.
                  </span>{" "}
                  Virker det ikke for dig, siger du op, og så er det slut.
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/45">
                  Annoncebudgettet betaler du direkte til platformen, aldrig
                  gennem os. Du ejer selv konti, data og hjemmeside, også
                  hvis du stopper.
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                  Foretrækker du telefon?
                </div>
                <a
                  href="tel:+4591309560"
                  className="mt-2 inline-block font-display text-xl font-medium text-white transition-colors hover:text-[color:var(--color-cactus-green)]"
                >
                  +45 91 30 95 60
                </a>
              </div>
            </div>

            {/* RIGHT — embedded booking widget (handles form + calendar in one flow) */}
            <div className="lg:col-span-7">
              <BookingEmbed />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
