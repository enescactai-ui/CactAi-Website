"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Play, X } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const EASE = [0.16, 1, 0.3, 1] as const;

type Node = {
  id: string;
  mesh: string;
  title: string;
  tag: string;
  body: string;
  side: "left" | "right";
  top: string;
};

const NODES: Node[] = [
  { id: "lead", mesh: "throttleBody", title: "Lead-motoren", tag: "Meta-annoncer", body: "Annoncer der henter kvalificerede kunder i dit område. Motorens brændstof.", side: "left", top: "20%" },
  { id: "reception", mesh: "cylinderHeadCoverRight", title: "AI-receptionisten", tag: "Svarer 24/7", body: "Dansk AI der tager telefonen døgnet rundt, kvalificerer og booker i din kalender.", side: "left", top: "45%" },
  { id: "synlig", mesh: "intakeManifoldRight", title: "Synligheds-modulet", tag: "Google & SEO", body: "Google-profil og anmeldelser der får kunder til at vælge dig, når de søger.", side: "left", top: "70%" },
  { id: "svar", mesh: "crankshaftSprocket", title: "Lynsvar", tag: "Svar på 60 sek.", body: "Hvert lead får svar på under et minut, før konkurrenten når at ringe.", side: "right", top: "20%" },
  { id: "opfoelg", mesh: "camshaftSprocket", title: "Opfølgnings-drevet", tag: "Auto-opfølgning", body: "Genbooker automatisk de leads der ikke svarede første gang. Ingen tabt.", side: "right", top: "45%" },
  { id: "resultat", mesh: "oilPanCap", title: "Resultat-garantien", tag: "PPSA", body: "Du betaler kun når en kunde møder op. Ingen fremmøde, ingen regning.", side: "right", top: "70%" },
];

const ANCHORS = NODES.map((n) => ({ id: n.id, mesh: n.mesh }));

const EngineCanvas = dynamic(() => import("./EngineCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-[color:var(--color-cactus-lime)]" />
    </div>
  ),
});

const EngineBackground = dynamic(() => import("./EngineBackground"), {
  ssr: false,
});

function Label({
  node,
  active,
  dim,
  onEnter,
  onLeave,
}: {
  node: Node;
  active: boolean;
  dim: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const isLeft = node.side === "left";
  return (
    <div
      id={`lbl-${node.id}`}
      className={`pointer-events-auto absolute w-[230px] transition-opacity duration-300 ${isLeft ? "left-5 sm:left-8" : "right-5 sm:right-8"} ${dim ? "opacity-40" : "opacity-100"}`}
      style={{ top: node.top }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        className={`group cursor-pointer rounded-2xl border bg-black/50 p-4 backdrop-blur-md transition-all duration-300 ${
          active
            ? "border-[color:var(--color-cactus-green)]/80 bg-black/75 shadow-[0_10px_40px_-10px_rgba(82,183,136,0.5)]"
            : "border-[color:var(--color-cactus-green)]/25 hover:border-[color:var(--color-cactus-green)]/60"
        }`}
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-cactus-lime)]">
          {node.tag}
        </div>
        <div className="mt-1 font-display text-base font-bold text-white">
          {node.title}
        </div>
        <div
          className={`grid transition-all duration-300 ${
            active ? "mt-2 grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-xs leading-relaxed text-white/70">{node.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VaekstMotorV8() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(false);
  const [focus, setFocus] = useState<Node | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const place = () => {
      for (const n of NODES) {
        const lbl = document.getElementById(`lbl-${n.id}`);
        const line = document.getElementById(`ln-${n.id}`);
        if (lbl && line) {
          const r = lbl.getBoundingClientRect();
          line.setAttribute("x1", String(n.side === "left" ? r.right : r.left));
          line.setAttribute("y1", String(r.top + r.height / 2));
        }
      }
    };
    const t = setTimeout(place, 250);
    window.addEventListener("resize", place);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", place);
    };
  }, [open]);

  const overlay = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#05130c]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.35 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <EngineCanvas anchors={ANCHORS} />
          </motion.div>

          <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block">
            {NODES.map((n) => (
              <line
                key={n.id}
                id={`ln-${n.id}`}
                stroke="var(--color-cactus-lime)"
                strokeWidth={2}
                strokeLinecap="round"
                style={{ opacity: 0, transition: "opacity .3s" }}
              />
            ))}
          </svg>
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {NODES.map((n) => (
              <span
                key={n.id}
                id={`mdot-${n.id}`}
                className="absolute left-0 top-0 block h-3.5 w-3.5"
                style={{ marginLeft: -7, marginTop: -7, opacity: 0, willChange: "transform" }}
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-[color:var(--color-cactus-lime)] opacity-60" />
                <span className="absolute inset-0 rounded-full bg-[color:var(--color-cactus-lime)] shadow-[0_0_12px_2px_rgba(82,183,136,0.9)] ring-2 ring-[color:var(--color-cactus-lime)]/40" />
              </span>
            ))}
          </div>

          <motion.div
            className="pointer-events-none absolute inset-0 hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {NODES.map((n) => (
              <Label
                key={n.id}
                node={n}
                active={focus?.id === n.id}
                dim={focus !== null && focus.id !== n.id}
                onEnter={() => setFocus(n)}
                onLeave={() => setFocus(null)}
              />
            ))}
          </motion.div>

          <div className="absolute inset-x-0 bottom-0 flex gap-3 overflow-x-auto p-4 lg:hidden">
            {NODES.map((n) => (
              <div
                key={n.id}
                className="w-56 flex-shrink-0 rounded-2xl border border-[color:var(--color-cactus-green)]/30 bg-black/60 p-4 backdrop-blur-md"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-cactus-lime)]">
                  {n.tag}
                </div>
                <div className="mt-1 font-display text-sm font-bold text-white">
                  {n.title}
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-white/65">
                  {n.body}
                </p>
              </div>
            ))}
          </div>

          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-6 sm:p-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-lime)]">
                CactAi
              </div>
              <div className="font-display text-xl font-bold text-white">
                Vækstmotoren V8
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/15 hover:text-white"
              aria-label="Luk"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>

          <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40 lg:block">
            Hold musen over en del · træk for at dreje
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section id="ydelser" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
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
              Vækstmotoren V8.
            </span>
          </h2>
          <p className="mt-6 text-lg text-[color:var(--color-cactus-cream)]/65">
            Otte cylindre, ét mål: at skalere din forretning hurtigt og effektivt.
            Åbn motoren og se præcis hvad hver del gør for dig.
          </p>
        </motion.div>

        {/* Teaser with the engine rotating in the background */}
        <motion.div
          role="button"
          tabIndex={0}
          onClick={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setOpen(true);
          }}
          onViewportEnter={() => setInView(true)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ background: "linear-gradient(135deg, #0c2417 0%, #05130c 100%)" }}
          className="group relative mt-14 flex aspect-[4/5] w-full cursor-pointer items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_90px_-30px_rgba(12,36,23,0.55)] sm:aspect-[16/10] lg:mt-16"
        >
          {/* live rotating engine (frozen, not unmounted, while fullscreen is open) */}
          {inView && (
            <div className="pointer-events-none absolute inset-0">
              <EngineBackground paused={open} />
            </div>
          )}
          {/* dim overlay for contrast */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05130c] via-[#05130c]/45 to-[#05130c]/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(82,183,136,1) 1px, transparent 1px), linear-gradient(90deg, rgba(82,183,136,1) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-green)]/40 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-lime)] backdrop-blur-sm">
              Interaktiv · 3D · V8
            </span>
            <div className="mt-6 flex h-20 w-20 items-center justify-center rounded-full border border-[color:var(--color-cactus-green)]/50 bg-[color:var(--color-cactus-green)]/20 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
              <Play className="h-8 w-8 translate-x-0.5 text-white" fill="white" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-white drop-shadow-lg sm:text-3xl">
              Start Vækstmotoren
            </h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-white/60">
              Klik for at åbne motoren i fuld skærm
            </p>
          </div>
        </motion.div>
      </div>

      {mounted && createPortal(overlay, document.body)}
    </section>
  );
}
