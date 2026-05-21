"use client";

import { motion } from "framer-motion";

export function Receipt() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 lg:items-center">
          {/* Left: Story */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                Vis mig pengene
              </div>
              <h2 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Sådan ser{" "}
                <span className="italic font-light text-[color:var(--color-cactus-cream)]/60">
                  din
                </span>{" "}
                første{" "}
                <span className="text-[color:var(--color-cactus-green)]">
                  faktura
                </span>{" "}
                ud.
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65">
                Vi viser dig præcis hvad du modtager i mailen efter 14 dage —
                inklusiv den ene linje der gør PPSA anderledes end alt andet
                marketing.
              </p>

              <ul className="mt-10 space-y-4">
                {[
                  ["Faktureret via Billy", "Dansk regnskabssoftware. CVR-baseret."],
                  ["Bank-overførsel", "Du betaler manuelt — vi får aldrig dit kort."],
                  ["Linje pr. fremmødt møde", "Ingen \"miscellaneous fees\". Hvert møde står med navn + dato."],
                  ["Renter ved forsinkelse", "Standard 0,81% pr. måned. Lovkrav, ikke pres."],
                ].map(([title, body]) => (
                  <li key={title} className="flex gap-4 border-l-2 border-[color:var(--color-cactus-green)]/30 pl-4">
                    <div>
                      <div className="font-display text-base font-medium text-[color:var(--color-cactus-cream)]">
                        {title}
                      </div>
                      <div className="mt-1 text-sm text-[color:var(--color-cactus-cream)]/55">
                        {body}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right: Invoice mockup */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Stack effect — fake shadow invoices behind */}
              <div className="absolute -inset-4 -z-20 rotate-3 rounded-sm border border-[color:var(--color-cactus-cream)]/5 bg-[color:var(--color-cactus-dark)]/50" />
              <div className="absolute -inset-2 -z-10 rotate-1 rounded-sm border border-[color:var(--color-cactus-cream)]/8 bg-[color:var(--color-cactus-dark)]/70" />

              {/* The actual receipt */}
              <div className="relative overflow-hidden rounded-sm border border-[color:var(--color-cactus-cream)]/15 bg-[color:var(--color-cactus-cream)] p-8 font-mono text-[13px] text-[color:var(--color-cactus-deep)] shadow-2xl lg:p-10">
                {/* Perforated edge */}
                <div className="absolute left-0 top-0 h-full w-1 bg-[radial-gradient(circle_at_center,transparent_2px,var(--color-cactus-deep)_2px,var(--color-cactus-deep)_3px,transparent_3px)] bg-[length:8px_8px] opacity-20" />

                {/* Header */}
                <div className="flex items-start justify-between border-b-2 border-dashed border-[color:var(--color-cactus-deep)]/20 pb-6">
                  <div>
                    <div className="font-sans font-bold text-base">CactAi</div>
                    <div className="mt-1 text-[11px] opacity-60">
                      Krogager 44, 2670 Greve
                      <br />
                      CVR 46210689
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-wider opacity-60">
                      Faktura
                    </div>
                    <div className="font-sans text-xl font-bold">#INV-001</div>
                  </div>
                </div>

                {/* To */}
                <div className="mt-6 grid grid-cols-2 gap-6 text-[11px]">
                  <div>
                    <div className="uppercase tracking-wider opacity-50">Til</div>
                    <div className="mt-1">
                      VVS Hansen ApS
                      <br />
                      Industrivej 12, 8000 Aarhus
                      <br />
                      CVR 11223344
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="uppercase tracking-wider opacity-50">
                      Forfaldsdato
                    </div>
                    <div className="mt-1">29. maj 2026</div>
                    <div className="mt-2 uppercase tracking-wider opacity-50">
                      Netto
                    </div>
                    <div className="mt-1">8 dage</div>
                  </div>
                </div>

                {/* Line items */}
                <table className="mt-8 w-full border-collapse text-[12px]">
                  <thead>
                    <tr className="border-b border-[color:var(--color-cactus-deep)]/20 text-[10px] uppercase tracking-wider opacity-50">
                      <th className="pb-2 text-left">Beskrivelse</th>
                      <th className="pb-2 text-right">Beløb</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dashed divide-[color:var(--color-cactus-deep)]/15">
                    <tr>
                      <td className="py-3">
                        Fremmødt møde — Jens Petersen
                        <div className="text-[10px] opacity-50">
                          05/05 14:00 · Badeværelses-reno
                        </div>
                      </td>
                      <td className="py-3 text-right tabular-nums">2.250,00</td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        Fremmødt møde — Maria Sørensen
                        <div className="text-[10px] opacity-50">
                          07/05 10:30 · Komplet renovation
                        </div>
                      </td>
                      <td className="py-3 text-right tabular-nums">2.250,00</td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        Fremmødt møde — Peter Larsen
                        <div className="text-[10px] opacity-50">
                          09/05 16:00 · Toilet-udskiftning
                        </div>
                      </td>
                      <td className="py-3 text-right tabular-nums">2.250,00</td>
                    </tr>
                    {/* THE LINE that makes PPSA unique */}
                    <tr className="bg-[color:var(--color-cactus-green)]/10">
                      <td className="py-3">
                        <span className="line-through opacity-40">
                          No-show — Anders K.
                        </span>
                        <div className="text-[10px] font-bold uppercase text-[color:var(--color-cactus-green)]">
                          → ikke faktureret · 0 kr.
                        </div>
                      </td>
                      <td className="py-3 text-right text-[color:var(--color-cactus-green)] tabular-nums font-bold">
                        0,00
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Totals */}
                <div className="mt-6 space-y-1 border-t-2 border-dashed border-[color:var(--color-cactus-deep)]/20 pt-4 text-[12px]">
                  <div className="flex justify-between opacity-60">
                    <span>Subtotal ex moms</span>
                    <span className="tabular-nums">6.750,00</span>
                  </div>
                  <div className="flex justify-between opacity-60">
                    <span>Moms 25%</span>
                    <span className="tabular-nums">1.687,50</span>
                  </div>
                  <div className="mt-3 flex justify-between border-t border-[color:var(--color-cactus-deep)]/30 pt-3 text-base font-bold">
                    <span>Total DKK</span>
                    <span className="tabular-nums">8.437,50</span>
                  </div>
                </div>

                <div className="mt-8 text-center text-[10px] uppercase tracking-[0.18em] opacity-50">
                  ★ Tak for at vælge CactAi ★
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
