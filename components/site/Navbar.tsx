"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { label: "Ydelser", href: "/ydelser" },
  { label: "Sådan virker det", href: "/#how" },
  { label: "Priser", href: "/#priser" },
  { label: "Blog", href: "/blog" },
  { label: "Om", href: "/om" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll progress for the top-of-nav indicator bar
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[color:var(--color-cactus-green)]/10 bg-[color:var(--color-cactus-deep)]/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-12">
          <a
            href="/"
            className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-cactus-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-cactus-deep)]"
          >
            <Logo size={32} />
            <span className="font-display text-xl font-semibold tracking-tight">
              CactAi
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Hovedmenu"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-[color:var(--color-cactus-cream)]/70 transition-colors hover:bg-[color:var(--color-cactus-green)]/10 hover:text-[color:var(--color-cactus-cream)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-cactus-green)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/#book"
              className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-[color:var(--color-cactus-green)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-cactus-deep)] transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-cactus-cream)] sm:inline-flex"
            >
              <span className="relative z-10">Book et møde</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-cactus-cream)]/15 text-[color:var(--color-cactus-cream)] transition-colors hover:bg-[color:var(--color-cactus-green)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-cactus-green)] md:hidden"
              aria-label="Åbn menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scroll progress indicator — full-width bottom edge of nav */}
        <motion.div
          aria-hidden
          style={{ scaleX: progressX, transformOrigin: "0% 50%" }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[color:var(--color-cactus-green)] via-[color:var(--color-cactus-lime)] to-[color:var(--color-cactus-green)]"
        />
      </motion.header>

      {/* Mobile menu — full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[color:var(--color-cactus-deep)] md:hidden"
          >
            {/* Top bar with close */}
            <div className="flex h-16 items-center justify-between px-6">
              <a
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5"
              >
                <Logo size={32} />
                <span className="font-display text-xl font-semibold tracking-tight">
                  CactAi
                </span>
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-cactus-cream)]/15 text-[color:var(--color-cactus-cream)] transition-colors hover:bg-[color:var(--color-cactus-green)]/10"
                aria-label="Luk menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Big editorial nav */}
            <nav className="px-6 pt-12" aria-label="Hovedmenu mobil">
              <ul className="space-y-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.05 + i * 0.05,
                      ease: EASE,
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center justify-between border-b border-[color:var(--color-cactus-green)]/15 py-5 font-display text-3xl font-medium tracking-[-0.02em] text-[color:var(--color-cactus-cream)] transition-colors hover:text-[color:var(--color-cactus-green)]"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-[color:var(--color-cactus-green)]">
                          0{i + 1}
                        </span>
                        {link.label}
                      </span>
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* CTA in mobile menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
                className="mt-12"
              >
                <a
                  href="/#book"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full border-2 border-[color:var(--color-cactus-green)] bg-[color:var(--color-cactus-green)] px-6 py-5 text-center font-display text-lg font-medium text-[color:var(--color-cactus-deep)] transition-all active:scale-[0.98]"
                >
                  Book strategi-møde →
                </a>

                <div className="mt-8 space-y-3 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--color-cactus-cream)]/55">
                  <a
                    href="tel:+4591309560"
                    className="block transition-colors hover:text-[color:var(--color-cactus-cream)]"
                  >
                    +45 91 30 95 60
                  </a>
                  <a
                    href="mailto:enescactai@gmail.com"
                    className="block transition-colors hover:text-[color:var(--color-cactus-cream)]"
                  >
                    enescactai@gmail.com
                  </a>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
