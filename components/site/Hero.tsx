"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Zap, CheckCircle2, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const BADGES = [
  {
    icon: CheckCircle2,
    label: "Pay Per Show",
    sub: "Betal kun ved fremmøde",
    pos: "top-[18%] left-[3%]",
    delay: 0.8,
    float: "0px",
  },
  {
    icon: Zap,
    label: "AI-drevet",
    sub: "Automatisk lead-kvalificering",
    pos: "top-[12%] right-[4%]",
    delay: 1.0,
    float: "-6px",
  },
  {
    icon: TrendingUp,
    label: "7–14 dage",
    sub: "Første resultater",
    pos: "bottom-[28%] right-[2%]",
    delay: 1.2,
    float: "6px",
  },
] as const;

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const heroRef = useRef<HTMLElement | null>(null);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 30 });

  const glowX = useTransform(springX, (v) => `${v}%`);
  const glowY = useTransform(springY, (v) => `${v}%`);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-0 lg:pt-40"
    >
      {/* Light gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(160deg, #ffffff 0%, #f0faf5 45%, #d6f0e3 100%)",
        }}
      />

      {/* Large decorative green blob — top center like Brainly */}
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(ellipse, rgba(42,157,111,0.18) 0%, rgba(82,183,136,0.08) 50%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />

      {/* Mouse-tracking soft spotlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(500px circle at ${glowX.get()}% ${glowY.get()}%, rgba(42,157,111,0.07), transparent 50%)`,
        }}
      />

      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(42,157,111,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Live indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-10 inline-flex items-center gap-3 rounded-full border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-green)]/8 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-cactus-green)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-cactus-green)] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-cactus-green)]" />
          </span>
          <span>Live · CactAi · CVR 46210689 · Greve, DK</span>
        </motion.div>

        {/* Layout: headline left, visual right */}
        <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left — text */}
          <div className="relative z-10">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
              }}
              className="max-w-xl font-display tracking-[-0.03em] leading-[1.05]"
            >
              <HeadlineLine className="text-xl font-light text-[color:var(--color-cactus-cream)]/50 sm:text-2xl">
                Du betaler
              </HeadlineLine>
              <HeadlineLine className="mt-2 text-balance text-5xl font-bold text-[color:var(--color-cactus-cream)] sm:text-6xl lg:text-6xl xl:text-7xl">
                kun{" "}
                <span className="relative italic font-light">
                  når
                  <Underline />
                </span>{" "}
                <span className="text-[color:var(--color-cactus-green)]">
                  kunden
                </span>{" "}
                møder op
                <span className="text-[color:var(--color-cactus-green)]">.</span>
              </HeadlineLine>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
              className="mt-8 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65 sm:text-xl"
            >
              Vi kører Meta-ads, screener hvert lead og booker dem i din
              kalender. Møder de op — betaler du. Ellers ikke.{" "}
              <span className="font-semibold text-[color:var(--color-cactus-green)]">
                Resten er matematik.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#book"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-cactus-green)] px-7 py-4 font-display text-base font-semibold text-white shadow-[0_4px_20px_-4px_rgba(42,157,111,0.45)] transition-all hover:shadow-[0_8px_30px_-4px_rgba(42,157,111,0.55)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Book gratis møde
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
              </a>
              <a
                href="#manifest"
                className="font-medium text-[color:var(--color-cactus-cream)]/55 transition-colors hover:text-[color:var(--color-cactus-green)] text-sm"
              >
                Læs hvordan det virker ↓
              </a>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {["#2a9d6f","#3bb87e","#52b788","#6fcfa0"].map((c) => (
                  <div
                    key={c}
                    className="h-8 w-8 rounded-full border-2 border-white"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-[color:var(--color-cactus-cream)]">
                  Lokal virksomhed? Vi er klar.
                </div>
                <div className="text-xs text-[color:var(--color-cactus-cream)]/50">
                  14-dages garanti · 5 fremmødte eller pengene tilbage
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — decorative visual with floating badges */}
          <div className="relative hidden lg:block">
            {/* Main visual card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: EASE }}
              className="relative mx-auto h-[480px] w-full max-w-[440px] overflow-hidden rounded-3xl border border-[color:var(--color-cactus-green)]/20 bg-gradient-to-br from-[color:var(--color-cactus-dark)] to-[color:var(--color-cactus-mid)] shadow-[0_24px_80px_-20px_rgba(42,157,111,0.2)]"
            >
              {/* Inner glow */}
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(42,157,111,0.15), transparent 70%)",
                }}
              />

              {/* Stats grid */}
              <div className="absolute inset-0 grid grid-cols-2 gap-px p-8 pt-16">
                {[
                  { value: "0 kr", label: "Ved no-show" },
                  { value: "14 dage", label: "Garanti-periode" },
                  { value: "5+", label: "Fremmødte eller refund" },
                  { value: "1:1", label: "Eksklusivitet pr. by" },
                ].map((s) => (
                  <div
                    key={s.value}
                    className="flex flex-col justify-center rounded-2xl bg-white/60 p-5 backdrop-blur-sm"
                  >
                    <div className="font-display text-3xl font-bold tracking-tight text-[color:var(--color-cactus-cream)]">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-[color:var(--color-cactus-cream)]/60">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Top label */}
              <div className="absolute left-8 top-8 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-cactus-green)] opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--color-cactus-green)]" />
                </span>
                <span className="font-mono text-xs font-medium text-[color:var(--color-cactus-green)]">
                  Live resultater
                </span>
              </div>
            </motion.div>

            {/* Floating badge pills — Brainly.AI style */}
            {BADGES.map((badge) => (
              <FloatingBadge key={badge.label} badge={badge} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom stats strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative mt-24 border-t border-[color:var(--color-cactus-green)]/15 bg-[color:var(--color-cactus-dark)]/40"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-[color:var(--color-cactus-green)]/10 lg:grid-cols-4 lg:divide-y-0">
          {[
            { metric: "0 kr", note: "ved no-show" },
            { metric: "14 dage", note: "garanti-periode" },
            { metric: "5+", note: "fremmødte eller refund" },
            { metric: "1:1", note: "eksklusivitet pr. by" },
          ].map((s, i) => (
            <div
              key={s.metric}
              className="group relative px-5 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-cream)]/35">
                Fakt #{String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-[color:var(--color-cactus-cream)] sm:text-4xl lg:text-5xl">
                {s.metric}
              </div>
              <div className="mt-2 text-[13px] leading-snug text-[color:var(--color-cactus-cream)]/50 sm:text-sm">
                {s.note}
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[color:var(--color-cactus-green)] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function FloatingBadge({
  badge,
}: {
  badge: (typeof BADGES)[number];
}) {
  const Icon = badge.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, parseInt(badge.float), 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay: badge.delay, ease: EASE },
        scale: { duration: 0.6, delay: badge.delay, ease: EASE },
        y: {
          duration: 3.5,
          delay: badge.delay + 0.6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
      className={`absolute ${badge.pos} z-20 flex items-center gap-3 rounded-2xl border border-[color:var(--color-cactus-green)]/20 bg-white/90 px-4 py-3 shadow-[0_8px_30px_-8px_rgba(42,157,111,0.2)] backdrop-blur-sm`}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[color:var(--color-cactus-green)]/15">
        <Icon className="h-4 w-4 text-[color:var(--color-cactus-green)]" />
      </div>
      <div>
        <div className="text-xs font-semibold text-[color:var(--color-cactus-cream)]">
          {badge.label}
        </div>
        <div className="text-[10px] text-[color:var(--color-cactus-cream)]/50">
          {badge.sub}
        </div>
      </div>
    </motion.div>
  );
}

function HeadlineLine({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.9, ease: EASE },
        },
      }}
      className={`block ${className ?? ""}`}
    >
      {children}
    </motion.span>
  );
}

function Underline() {
  return (
    <motion.svg
      aria-hidden
      width="100%"
      height="14"
      viewBox="0 0 200 14"
      className="absolute bottom-1 left-0 w-full"
      preserveAspectRatio="none"
    >
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 1, ease: EASE }}
        d="M2 8 Q 50 2, 100 6 T 198 8"
        fill="none"
        stroke="var(--color-cactus-green)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
