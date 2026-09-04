"use client";

/*
 *  DOED KODE pr. 4. sep 2026. Ingen side importerer denne fil.
 *
 *  Indeholder priser vi ikke saelger: 'Setup fra 7.500 kr, drift fra
 *  3.000 kr/md'.
 *
 *  Se den oeverste blok i CLAUDE.md. Skal filen bruges igen, skal teksten
 *  skrives om FOERST. Saet den ikke paa en side som den er.
 */
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Megaphone,
  MessageSquare,
  PhoneCall,
  Star,
  Zap,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const PARTS = [
  {
    icon: Megaphone,
    title: "Lead-motor",
    desc: "Meta-annoncer, der henter kvalificerede kunder i dit område.",
  },
  {
    icon: Zap,
    title: "60-sekunders svar",
    desc: "Hvert lead får svar med det samme, før konkurrenten når det.",
  },
  {
    icon: PhoneCall,
    title: "Besked med det samme",
    desc: "Du får navn, opgave og telefonnummer på SMS, så du kan ringe med det samme.",
  },
  {
    icon: MessageSquare,
    title: "AI-opfølgning",
    desc: "Automatisk genbooking af dem, der ikke svarede første gang.",
  },
  {
    icon: Star,
    title: "Google & anmeldelser",
    desc: "Synlighed og stjerner, der får kunder til at vælge dig.",
  },
  {
    icon: BarChart3,
    title: "Ugentlig rapport",
    desc: "Du ser bookede jobs, ikke klik og tomme tal.",
  },
];

export function Services() {
  return (
    <section id="ydelser" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-green)]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-green)]">
            Ét system
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Fem ydelser blev til{" "}
            <span className="text-[color:var(--color-cactus-green)]">
              én vækstmotor.
            </span>
          </h2>
          <p className="mt-6 text-lg text-[color:var(--color-cactus-cream)]/65">
            Annoncer, lynhurtig opfølgning, Google og hjemmeside samlet i
            ét system, der giver dig flere kunder og sørger for, at du aldrig
            mister én.
          </p>
        </motion.div>

        {/* Flagship card — intentional dark block for premium contrast */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ background: "linear-gradient(135deg, #0c2417 0%, #05130c 100%)" }}
          className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-[0_30px_90px_-30px_rgba(12,36,23,0.55)] lg:mt-20 lg:p-12"
        >
          {/* glow */}
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--color-cactus-green)]/20 blur-3xl"
          />
          {/* subtle grid */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(82,183,136,1) 1px, transparent 1px), linear-gradient(90deg, rgba(82,183,136,1) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          {/* Header row */}
          <div className="relative flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <span className="rounded-full border border-[color:var(--color-cactus-green)]/40 bg-[color:var(--color-cactus-green)]/12 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-lime)]">
                Flagship · ét produkt
              </span>
              <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Vækstmotoren
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                Flere kunder ind. Hvert lead besvaret og fulgt op,
                døgnet rundt.{" "}
                <strong className="font-semibold text-white">
                  Du møder bare op til arbejdet.
                </strong>
              </p>
            </div>

            <div className="flex-shrink-0 lg:text-right">
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
                Setup fra 7.500 kr · drift fra 3.000 kr/md
              </div>
              <div className="mt-1 font-mono text-[11px] text-white/35">
                + valgfri betaling pr. booket job
              </div>
              <a
                href="/#book"
                className="group mt-5 inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-cactus-green)] px-7 py-3.5 font-display text-base font-semibold text-white transition-all hover:brightness-110 hover:shadow-[0_8px_30px_-8px_rgba(82,183,136,0.6)]"
              >
                Book gratis møde
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
              </a>
            </div>
          </div>

          {/* Components grid */}
          <div className="relative mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {PARTS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                className="flex gap-4"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-cactus-green)]/15">
                  <p.icon className="h-5 w-5 text-[color:var(--color-cactus-lime)]" />
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold tracking-tight text-white">
                    {p.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sub-CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-10 text-center font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/45"
        >
          Ét system · én pris · ét ansvar · hele vejen fra annonce til booket job
        </motion.div>
      </div>
    </section>
  );
}
