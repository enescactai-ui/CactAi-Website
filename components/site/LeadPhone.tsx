"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

type Lead = {
  name: string;
  detail: string;
  ago: string;
};

/** Nye leads glider ind ovenfra. Rækkefølgen her er den de vises i. */
const LEADS: Lead[] = [
  { name: "Ny kunde", detail: "Ønsker tilbud · ringes op i dag", ago: "nu" },
  { name: "Ny kunde", detail: "Opgave i næste uge · erhverv", ago: "4 min" },
  { name: "Ny henvendelse", detail: "Fast aftale · hver 14. dag", ago: "18 min" },
  { name: "Ny kunde", detail: "Akut opgave · vil ringes op", ago: "41 min" },
];

export function LeadPhone() {
  /** Antal synlige kort. Starter på 3, det fjerde lander efter et øjeblik. */
  const [shown, setShown] = useState(3);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(LEADS.length);
      return;
    }
    const t = setTimeout(() => setShown(LEADS.length), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      {/* Telefonens krop */}
      <div className="relative aspect-[9/17] w-full rounded-[2.4rem] bg-[#12201a] p-[10px] shadow-[0_50px_100px_-30px_rgba(13,31,22,0.55),0_0_0_1px_rgba(255,255,255,0.06)_inset]">
        {/* Skærm */}
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#eef8f2] to-[#dceee5]">
          {/* Statuslinje */}
          <div className="flex items-center justify-between px-6 pt-4 font-mono text-[10px] font-semibold text-[#12201a]/60">
            <span>09:41</span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-[#12201a]/30" />
              <span className="inline-block h-[7px] w-[11px] rounded-[2px] bg-[#12201a]/30" />
            </span>
          </div>

          {/* Notch */}
          <div className="absolute left-1/2 top-2 h-4 w-20 -translate-x-1/2 rounded-full bg-[#12201a]" />

          {/* Notifikationer */}
          <div className="mt-6 space-y-2 px-3">
            {LEADS.slice(0, shown).map((lead, i) => (
              <motion.div
                key={lead.detail}
                initial={{ opacity: 0, y: -18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.55,
                  delay: i < 3 ? 0.8 + i * 0.18 : 0,
                  ease: EASE,
                }}
                className="flex items-start gap-3 rounded-xl bg-white/90 p-3 shadow-[0_6px_18px_-6px_rgba(13,31,22,0.18)] backdrop-blur-sm"
              >
                {/* Ikon */}
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[color:var(--color-cactus-green)]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                    aria-hidden
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M19 8v6M22 11h-6" />
                  </svg>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-[12px] font-bold leading-tight text-[#12201a]">
                      {lead.name}
                    </span>
                    <span className="flex-shrink-0 font-mono text-[9px] uppercase tracking-wider text-[#12201a]/35">
                      {lead.ago}
                    </span>
                  </div>
                  <p className="mt-0.5 truncate text-[10.5px] leading-snug text-[#12201a]/55">
                    {lead.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Blødt skær i bunden */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#dceee5] to-transparent"
          />
          {/* Home-streg */}
          <div className="absolute bottom-2.5 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-[#12201a]/20" />
        </div>
      </div>

      {/* Glas-refleks hen over telefonen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[2.4rem] bg-gradient-to-tr from-transparent via-white/10 to-white/25"
      />
    </div>
  );
}
