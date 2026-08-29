"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Star, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import HeroBackground from "./HeroBackground";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const heroRef = useRef<HTMLElement | null>(null);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });
  const glowX = useTransform(springX, (v) => `${v}%`);
  const glowY = useTransform(springY, (v) => `${v}%`);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
      mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={heroRef} id="top" className="relative isolate overflow-hidden">

      {/* ── Hero background: full mint-green card like Brainly.AI ── */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[92vh] min-h-[700px]"
        style={{
          background: "linear-gradient(145deg, #e8f8ef 0%, #d0f0e2 40%, #c2ead8 70%, #b8e8d2 100%)",
        }}
      />

      {/* ── Living, video-like animated background (WebGL flowing green light) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[92vh] min-h-[700px] overflow-hidden"
      >
        <HeroBackground />
      </div>

      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[92vh] min-h-[700px] opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(42,157,111,1) 1px, transparent 1px), linear-gradient(90deg, rgba(42,157,111,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Mouse glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[92vh] min-h-[700px]"
        style={{
          background: `radial-gradient(700px circle at ${glowX.get()}% ${glowY.get()}%, rgba(255,255,255,0.4), transparent 50%)`,
        }}
      />

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-0 lg:px-12 lg:pt-36">

        {/* Live pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-[color:var(--color-cactus-green)]/30 bg-white/70 px-4 py-1.5 text-xs font-mono font-medium uppercase tracking-[0.14em] text-[color:var(--color-cactus-green)] backdrop-blur-sm shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-cactus-green)] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-cactus-green)]" />
          </span>
          Live · Vækstpartner for håndværkere
        </motion.div>

        {/* Two-column layout */}
        <div className="grid items-center gap-12 pb-16 lg:grid-cols-[1fr_480px] lg:gap-16 xl:grid-cols-[1fr_520px]">

          {/* ── LEFT: headline + CTA ── */}
          <div className="relative z-10 max-w-2xl">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              className="font-display tracking-[-0.035em] leading-[1.04]"
            >
              <Line className="block text-lg font-normal text-[color:var(--color-cactus-cream)]/50 sm:text-xl">
                Din vækstpartner
              </Line>
              <Line className="mt-1 block text-5xl font-extrabold text-[color:var(--color-cactus-cream)] sm:text-6xl lg:text-7xl xl:text-8xl">
                Mist{" "}
                <em className="relative not-italic font-light">
                  aldrig
                  <AnimatedUnderline />
                </em>
              </Line>
              <Line className="mt-1 block text-5xl font-extrabold sm:text-6xl lg:text-7xl xl:text-8xl">
                <span className="text-[color:var(--color-cactus-green)]">en kunde</span>{" "}
                <span className="text-[color:var(--color-cactus-cream)]">igen</span>
                <span className="text-[color:var(--color-cactus-green)]">.</span>
              </Line>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
              className="mt-7 max-w-lg text-lg leading-[1.65] text-[color:var(--color-cactus-cream)]/65 sm:text-xl"
            >
              Vi henter kunderne med annoncer, og AI&apos;en svarer hvert opkald
              og hvert lead på sekunder, døgnet rundt.{" "}
              <strong className="font-semibold text-[color:var(--color-cactus-cream)]/85">
                Du møder bare op til arbejdet.
              </strong>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#book"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-cactus-cream)] px-7 py-4 text-base font-semibold text-[color:var(--color-cactus-dark)] shadow-[0_4px_24px_-6px_rgba(13,31,22,0.35)] transition-all hover:scale-[1.03] hover:shadow-[0_8px_32px_-6px_rgba(13,31,22,0.45)] active:scale-[0.98]"
              >
                Book gratis møde
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cactus-cream)]/25 bg-white/50 px-6 py-4 text-base font-medium text-[color:var(--color-cactus-cream)]/75 backdrop-blur-sm transition-all hover:bg-white/70 hover:text-[color:var(--color-cactus-cream)]"
              >
                Se hvordan det virker →
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[color:var(--color-cactus-cream)]/55"
            >
              {[
                { icon: Zap, text: "Svar på 60 sek." },
                { icon: CheckCircle2, text: "14-dages garanti" },
                { icon: Star, text: "Ingen binding" },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-1.5">
                  <Icon className="h-4 w-4 text-[color:var(--color-cactus-green)]" />
                  {text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: phone product photo + floating badges ── */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: EASE }}
            className="relative hidden lg:block"
          >
            {/* Soft halo behind the phone */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--color-cactus-green)]/15 blur-3xl" />

            {/* Phone photo */}
            <div className="relative mx-auto max-w-[420px] overflow-hidden rounded-[2rem] shadow-[0_40px_90px_-30px_rgba(13,31,22,0.35)]">
              <Image
                src="/images/hero-phone.jpg"
                alt="Booket kalender med kundemøder i en telefon-app"
                width={840}
                height={1125}
                priority
                className="h-auto w-full"
              />
            </div>

            {/* Floating badges */}
            <FloatingBadge
              icon={Zap}
              title="Svar på 60 sek."
              sub="Før konkurrenten når det"
              className="-left-8 top-1/4"
              delay={1.2}
              floatY={-8}
            />
            <FloatingBadge
              icon={CheckCircle2}
              title="Hvert opkald besvaret"
              sub="24/7, også aften & weekend"
              className="-right-6 bottom-1/3"
              delay={1.4}
              floatY={8}
            />
            <FloatingBadge
              icon={Star}
              title="0 kr ved no-show"
              sub="Kun betalt for resultater"
              className="-bottom-2 left-6"
              delay={1.6}
              floatY={-6}
            />
          </motion.div>
        </div>
      </div>

      {/* ── Stats strip — white, sits cleanly below hero ── */}
      <div className="relative border-t border-[color:var(--color-cactus-green)]/15 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-[color:var(--color-cactus-green)]/10 lg:grid-cols-4 lg:divide-y-0">
          {[
            { metric: "24/7", note: "hvert opkald besvaret" },
            { metric: "60 sek.", note: "svartid på leads" },
            { metric: "14 dage", note: "resultat-garanti" },
            { metric: "0 kr", note: "ved no-show" },
          ].map((s, i) => (
            <div
              key={s.metric}
              className="group relative px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Fakt #{String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 font-display text-4xl font-extrabold tracking-[-0.03em] text-gray-900 sm:text-5xl">
                {s.metric}
              </div>
              <div className="mt-2 text-sm text-gray-500">{s.note}</div>
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[color:var(--color-cactus-green)] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingBadge({
  icon: Icon,
  title,
  sub,
  className,
  delay,
  floatY,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  sub: string;
  className: string;
  delay: number;
  floatY: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, floatY, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 4, delay: delay + 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
      }}
      className={`absolute z-20 flex items-center gap-3 rounded-2xl border border-white/90 bg-white px-4 py-3 shadow-[0_8px_32px_-8px_rgba(13,31,22,0.15)] ${className}`}
    >
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-cactus-green)]/12">
        <Icon className="h-4 w-4 text-[color:var(--color-cactus-green)]" />
      </div>
      <div>
        <div className="text-xs font-semibold text-gray-800 whitespace-nowrap">{title}</div>
        <div className="text-[10px] text-gray-400 whitespace-nowrap">{sub}</div>
      </div>
    </motion.div>
  );
}

function Line({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span
      variants={{
        hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: EASE } },
      }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

function AnimatedUnderline() {
  return (
    <motion.svg
      aria-hidden
      width="100%"
      height="12"
      viewBox="0 0 200 12"
      className="absolute -bottom-1 left-0 w-full"
      preserveAspectRatio="none"
    >
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
        d="M2 7 Q 50 2, 100 5 T 198 7"
        fill="none"
        stroke="var(--color-cactus-green)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
