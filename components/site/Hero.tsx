"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

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
      className="relative isolate overflow-hidden pt-28 pb-24 lg:pt-40 lg:pb-32"
    >
      {/* Background video — looping, muted, autoplay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-[0.35]"
        poster="/hero-poster.svg"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text contrast on top of video */}
      <div
        aria-hidden
        className="absolute inset-0 -z-25 bg-gradient-to-b from-[color:var(--color-cactus-deep)]/40 via-[color:var(--color-cactus-deep)]/70 to-[color:var(--color-cactus-deep)]"
      />

      {/* Mouse-tracking spotlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(600px circle at ${glowX.get()}% ${glowY.get()}%, rgba(82,183,136,0.18), transparent 40%)`,
        }}
      />

      {/* Animated background grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(82,183,136,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(82,183,136,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Big colored glow */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[color:var(--color-cactus-green)]/12 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Live indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/45"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-cactus-green)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-cactus-green)]" />
          </span>
          <span>Live // CactAi // CVR 46210689 // Greve, DK</span>
        </motion.div>

        {/* Massive headline — editorial mixed weights */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="font-display tracking-[-0.04em] leading-[0.92]"
        >
          <HeadlineLine className="text-[15vw] font-light text-[color:var(--color-cactus-cream)]/60 sm:text-[11vw] lg:text-[8.5vw]">
            Du betaler
          </HeadlineLine>
          <HeadlineLine className="text-[18vw] font-black text-[color:var(--color-cactus-cream)] sm:text-[14vw] lg:text-[11vw]">
            kun{" "}
            <span className="relative italic font-light">
              når
              <Underline />
            </span>
          </HeadlineLine>
          <HeadlineLine className="text-[16vw] font-black text-balance text-[color:var(--color-cactus-cream)] sm:text-[12vw] lg:text-[9.5vw]">
            <span className="text-[color:var(--color-cactus-green)]">
              kunden
            </span>{" "}
            møder op
            <span className="text-[color:var(--color-cactus-green)]">.</span>
          </HeadlineLine>
        </motion.h1>

        {/* Editorial split — body + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-7">
            <p className="font-display text-2xl leading-[1.3] tracking-[-0.01em] text-[color:var(--color-cactus-cream)]/85 sm:text-3xl lg:text-4xl">
              Vi laver{" "}
              <Strike>halv-dårlige</Strike> Meta-ads målrettet danske
              boligejere — screener hver lead personligt — booker dem i din
              kalender. Hvis de møder op, betaler du. Ellers ikke.{" "}
              <span className="text-[color:var(--color-cactus-green)]">
                Resten er bare matematik.
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5 lg:items-end lg:justify-end">
            <a
              href="#book"
              className="group relative inline-flex items-center gap-3 rounded-none border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)] px-7 py-5 font-display text-lg font-medium text-[color:var(--color-cactus-deep)] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_0_var(--color-cactus-green)]"
            >
              Book strategi-møde
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-12" />
            </a>
            <a
              href="#manifest"
              className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--color-cactus-cream)]/50 underline decoration-[color:var(--color-cactus-green)]/40 decoration-2 underline-offset-[6px] transition-colors hover:text-[color:var(--color-cactus-cream)] hover:decoration-[color:var(--color-cactus-green)]"
            >
              ↓ Først, læs vores manifest
            </a>
          </div>
        </motion.div>
      </div>

      {/* Editorial footer strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative mt-32 border-y border-[color:var(--color-cactus-green)]/15"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[color:var(--color-cactus-green)]/15 lg:grid-cols-4">
          {[
            { metric: "0 kr", note: "ved no-show" },
            { metric: "14 dage", note: "garanti-periode" },
            { metric: "5+", note: "fremmødte eller refund" },
            { metric: "1:1", note: "eksklusivitet pr. by" },
          ].map((s, i) => (
            <div
              key={s.metric}
              className="group relative px-6 py-10 lg:px-10 lg:py-12"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-cream)]/40">
                Fakt #{String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 font-display text-4xl font-medium tracking-[-0.02em] text-[color:var(--color-cactus-cream)] sm:text-5xl">
                {s.metric}
              </div>
              <div className="mt-2 text-sm text-[color:var(--color-cactus-cream)]/55">
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

function Strike({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block text-[color:var(--color-cactus-cream)]/35">
      <span className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 rotate-[-2deg] rounded-full bg-[color:var(--color-cactus-green)]/60" />
      {children}
    </span>
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
