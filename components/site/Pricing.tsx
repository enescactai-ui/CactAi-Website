"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers, ShieldCheck, Unlock } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const POINTS = [
  {
    icon: Layers,
    title: "Skræddersyet til dig",
    desc: "Vi giver ikke én pris til alle. Vi bygger Vækstmotoren til præcis dét din forretning har brug for, og prisen følger opgaven.",
  },
  {
    icon: ShieldCheck,
    title: "Du betaler for resultater",
    desc: "Med vores pay-per-show model betaler du kun når en kunde rent faktisk møder op. Ingen fremmøde, ingen regning.",
  },
  {
    icon: Unlock,
    title: "Ingen binding",
    desc: "Fast, gennemsigtig drift uden lange kontrakter. Du bliver fordi det virker, ikke fordi du er låst inde.",
  },
];

export function Pricing() {
  return (
    <section id="priser" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-green)]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-green)]">
            Pris
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Din pris,{" "}
            <span className="text-[color:var(--color-cactus-green)]">
              skræddersyet
            </span>{" "}
            til din virksomhed.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65">
            Ingen virksomheder er ens, så det ville være mærkeligt at give alle
            den samme pris. Fortæl os hvad du har brug for, så bygger vi
            Vækstmotoren, og prisen, til lige præcis dig.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3 lg:mt-16">
          {POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="rounded-3xl border border-[color:var(--color-cactus-green)]/12 bg-white p-7 shadow-[0_4px_24px_-8px_rgba(13,31,22,0.08)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-cactus-green)]/10">
                <p.icon
                  className="h-5 w-5 text-[color:var(--color-cactus-green)]"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-[color:var(--color-cactus-cream)]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-cactus-cream)]/60">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          <a
            href="/#book"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-cactus-green)] px-8 py-4 font-display text-base font-semibold text-white transition-all hover:brightness-110 hover:shadow-[0_8px_30px_-8px_rgba(82,183,136,0.6)]"
          >
            Book et møde og få din pris
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
          </a>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-cactus-cream)]/40">
            Uforpligtende · 20 minutter · du ved besked samme dag
          </span>
        </motion.div>
      </div>
    </section>
  );
}
