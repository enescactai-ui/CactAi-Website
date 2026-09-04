"use client";

/*
 *  DOED KODE pr. 4. sep 2026. Ingen side importerer denne fil.
 *
 *  PAS PAA: denne fil hedder naesten det samme som den LEVENDE
 *  VaekstMotorV8.tsx, saa den er den mest sandsynlige at aabne ved en
 *  fejl. Indholdet paastaar at en dansk AI tager telefonen 24/7. Den
 *  stemme-agent blev bygget til Skandiacare og FEJLEDE i live-test, den
 *  loopede paa danske vejnavne. Den paastand maa ikke paa sitet.
 *  Filen saelger ogsaa pay-per-show, som er den forladte model.
 *
 *  Se den oeverste blok i CLAUDE.md. Skal filen bruges igen, skal teksten
 *  skrives om FOERST. Saet den ikke paa en side som den er.
 */
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Cog,
  Megaphone,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";
import { useState } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

type Part = {
  id: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  tag: string;
  body: string;
  x: number; // % position in the radial layout
  y: number;
};

const PARTS: Part[] = [
  {
    id: "lead",
    icon: Megaphone,
    title: "Lead-motoren",
    tag: "Henter kunderne",
    body: "Meta-annoncer målrettet præcis de kunder der leder efter dig i dit område. Det er brændstoffet der driver hele motoren.",
    x: 50,
    y: 7,
  },
  {
    id: "svar",
    icon: Zap,
    title: "Lynsvar",
    tag: "Svar på 60 sek.",
    body: "Hvert nyt lead får svar på under 60 sekunder, døgnet rundt, før konkurrenten overhovedet når at ringe.",
    x: 91,
    y: 28,
  },
  {
    id: "reception",
    icon: PhoneCall,
    title: "AI-receptionisten",
    tag: "Besvarer hvert opkald",
    body: "En dansk AI der tager telefonen 24/7, forstår hvad kunden vil, kvalificerer og booker direkte i din kalender.",
    x: 91,
    y: 73,
  },
  {
    id: "opfoelg",
    icon: MessageSquare,
    title: "Opfølgnings-drevet",
    tag: "Ingen lead tabt",
    body: "De leads der ikke svarede første gang bliver automatisk fulgt op og genbooket. Ingen kunde falder mellem to stole.",
    x: 50,
    y: 94,
  },
  {
    id: "synlig",
    icon: Star,
    title: "Synligheds-modulet",
    tag: "Google & anmeldelser",
    body: "Din Google-profil optimeres og anmeldelser samles ind automatisk, så du er den kunderne vælger når de søger.",
    x: 9,
    y: 73,
  },
  {
    id: "resultat",
    icon: ShieldCheck,
    title: "Resultat-garantien",
    tag: "Pay-per-show",
    body: "Du betaler kun når en kunde rent faktisk møder op. Møder de ikke op, koster det ikke en krone. Motoren skal levere for at tjene.",
    x: 9,
    y: 28,
  },
];

export function VaekstMotor() {
  const [active, setActive] = useState<Part | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const current = active ?? (hover ? PARTS.find((p) => p.id === hover) ?? null : null);

  return (
    <section id="ydelser" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
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
            Kig ind i{" "}
            <span className="text-[color:var(--color-cactus-green)]">
              Vækstmotoren.
            </span>
          </h2>
          <p className="mt-6 text-lg text-[color:var(--color-cactus-cream)]/65">
            Hold musen over en del af motoren for at se hvad den gør, eller klik
            for hele historien. Alle delene arbejder sammen om ét: flere kunder
            ind, ingen tabt.
          </p>
        </motion.div>

        <div className="mt-16 grid items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          {/* ── Radial engine (desktop) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative mx-auto hidden aspect-square w-full max-w-[520px] lg:block"
          >
            {/* connector lines */}
            <svg
              aria-hidden
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              {PARTS.map((p) => {
                const on = current?.id === p.id;
                return (
                  <line
                    key={p.id}
                    x1="50"
                    y1="50"
                    x2={p.x}
                    y2={p.y}
                    stroke="var(--color-cactus-green)"
                    strokeWidth={on ? 2 : 1}
                    strokeOpacity={on ? 0.9 : 0.25}
                    vectorEffect="non-scaling-stroke"
                    style={{ transition: "stroke-opacity .3s, stroke-width .3s" }}
                  />
                );
              })}
            </svg>

            {/* center hub */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#0c2417] to-[#05130c] text-center shadow-[0_20px_60px_-20px_rgba(12,36,23,0.6)]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              >
                <Cog className="h-7 w-7 text-[color:var(--color-cactus-lime)]" strokeWidth={1.5} />
              </motion.div>
              <div className="mt-1.5 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                Vækst&shy;motoren
              </div>
            </div>

            {/* part nodes */}
            {PARTS.map((p, i) => {
              const on = current?.id === p.id;
              return (
                <motion.button
                  key={p.id}
                  type="button"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.09, ease: EASE }}
                  onMouseEnter={() => setHover(p.id)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => setActive(p)}
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  className="group absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  aria-label={p.title}
                >
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-300 ${
                      on
                        ? "scale-110 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)] shadow-[0_10px_30px_-8px_rgba(82,183,136,0.7)]"
                        : "border-[color:var(--color-cactus-green)]/20 bg-white shadow-[0_6px_20px_-8px_rgba(13,31,22,0.2)] group-hover:scale-105"
                    }`}
                  >
                    <p.icon
                      className={`h-6 w-6 transition-colors ${on ? "text-white" : "text-[color:var(--color-cactus-green)]"}`}
                      strokeWidth={1.75}
                    />
                  </span>
                  <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[color:var(--color-cactus-deep)]/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {p.title}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* ── Part chips (mobile) ── */}
          <div className="grid grid-cols-2 gap-3 lg:hidden">
            {PARTS.map((p) => {
              const on = current?.id === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(p)}
                  className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all ${
                    on
                      ? "border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)]/8"
                      : "border-[color:var(--color-cactus-green)]/15 bg-white"
                  }`}
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-cactus-green)]/12">
                    <p.icon className="h-4 w-4 text-[color:var(--color-cactus-green)]" strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-sm font-semibold leading-tight text-[color:var(--color-cactus-cream)]">
                    {p.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Detail panel ── */}
          <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0c2417] to-[#05130c] p-8 shadow-[0_30px_90px_-30px_rgba(12,36,23,0.55)] lg:p-10">
            <div
              aria-hidden
              className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[color:var(--color-cactus-green)]/20 blur-3xl"
            />
            <AnimatePresence mode="wait">
              {current ? (
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="relative"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/40 bg-[color:var(--color-cactus-green)]/12 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-cactus-lime)]">
                    {current.tag}
                  </span>
                  <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-white">
                    {current.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-white/70">
                    {current.body}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative flex h-full flex-col justify-center"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-lime)]">
                    6 dele · ét system
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-white">
                    Hver del har ét job.
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-white/60">
                    Hold musen over en del af motoren, eller klik på den, for at
                    se præcis hvad den gør for din forretning.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-14 flex flex-col items-center gap-3"
        >
          <a
            href="/#book"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-cactus-green)] px-8 py-4 font-display text-base font-semibold text-white transition-all hover:brightness-110 hover:shadow-[0_8px_30px_-8px_rgba(82,183,136,0.6)]"
          >
            Få hele motoren bygget til dig
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
          </a>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-cactus-cream)]/40">
            Ét system · én pris · ét ansvar
          </span>
        </motion.div>
      </div>
    </section>
  );
}
