"use client";

import { motion } from "framer-motion";

const PRINCIPLES = [
  {
    n: "01",
    rule: "Vi har ingen falske anmeldelser.",
    body: "Ingen Trustpilot-buy. Ingen stock-photo testimonials. Når vi har 10 betalende klienter, viser vi deres rigtige navne — og kun deres. Indtil da: stol på matematikken, ikke på en grøn smiley.",
  },
  {
    n: "02",
    rule: "Vi sælger ikke møder vi ikke kan levere.",
    body: "Hvis vi ikke kan se hvordan vi får dig 5 fremmødte på 14 dage, siger vi nej til samarbejdet. Vi har droppet 3 leads i denne måned. Vi tager ikke pis på dig for en setup-fee.",
  },
  {
    n: "03",
    rule: "Ad-spend går aldrig gennem os.",
    body: "Du betaler dit ad-budget DIREKTE til Meta med dit eget kort. Vi får aldrig adgang til din konto. Hvis vi forsvinder i morgen, har du stadig dine annoncer.",
  },
  {
    n: "04",
    rule: "No-show = 0 kr.",
    body: "Hver gang. Hver kunde. Ingen smålig snak om hvad der \"tæller\". Hvis personen ikke står foran dig — eller ikke ringer tilbage på et bekræftet opkald — så koster det 0 kr.",
  },
  {
    n: "05",
    rule: "Vi måler i din omsætning, ikke vores fee.",
    body: "Vores ugentlige rapport viser hvad DU har tjent, ikke hvad vi har sendt. Hvis vores fee overstiger 15% af din nye omsætning, ringer vi og diskuterer modellen.",
  },
];

export function Manifesto() {
  return (
    <section
      id="manifest"
      className="relative py-24 lg:py-32"
    >
      {/* Soft gradient-fade divider — replaces the harsh edge-to-edge border */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-cactus-green)]/20 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-cactus-green)]/20 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left: Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
                Manifest // 2026
              </div>
              <h2 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Fem ting{" "}
                <span className="italic font-light text-[color:var(--color-cactus-cream)]/60">
                  vi
                </span>
                <br />
                <span className="text-[color:var(--color-cactus-green)]">
                  ikke gør
                </span>
                .
              </h2>
              <p className="mt-8 max-w-sm text-base leading-relaxed text-[color:var(--color-cactus-cream)]/55">
                De fleste bureauer har en lang liste over hvad de gør. Vi
                holder af det modsatte: en kort liste over hvad vi nægter.
              </p>
            </motion.div>
          </div>

          {/* Right: Principles */}
          <div className="lg:col-span-8">
            <ol className="space-y-12 lg:space-y-16">
              {PRINCIPLES.map((p, i) => (
                <motion.li
                  key={p.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-t border-[color:var(--color-cactus-green)]/15 pt-8 lg:pt-10"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-sm text-[color:var(--color-cactus-green)]">
                      {p.n}
                    </span>
                    <h3 className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] text-[color:var(--color-cactus-cream)] sm:text-3xl lg:text-4xl">
                      {p.rule}
                    </h3>
                  </div>
                  <p className="mt-5 max-w-2xl pl-10 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65 lg:pl-12">
                    {p.body}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
