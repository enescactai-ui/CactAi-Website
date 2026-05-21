"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Sådan virker det", href: "#how" },
  { label: "Priser", href: "#priser" },
  { label: "Garanti", href: "#garanti" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[color:var(--color-cactus-green)]/10 bg-[color:var(--color-cactus-deep)]/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-12">
        <a href="#top" className="flex items-center gap-2.5">
          <CactusMark />
          <span className="font-display text-xl font-semibold tracking-tight">
            CactAi
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-[color:var(--color-cactus-cream)]/70 transition-colors hover:bg-[color:var(--color-cactus-green)]/10 hover:text-[color:var(--color-cactus-cream)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#book"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[color:var(--color-cactus-green)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-cactus-deep)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="relative z-10">Book et møde</span>
          <span className="relative z-10 transition-transform group-hover:translate-x-0.5">
            →
          </span>
          <span className="absolute inset-0 -z-0 bg-gradient-to-r from-[color:var(--color-cactus-green)] via-[color:var(--color-cactus-lime)] to-[color:var(--color-cactus-green)] opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
      </div>
    </motion.header>
  );
}

function CactusMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cactusGrad" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#87dd5c" />
          <stop offset="100%" stopColor="#52b788" />
        </linearGradient>
      </defs>
      <path
        d="M16 4c1.5 0 2.5 1 2.5 2.5v8h2.5c1.5 0 2.5 1 2.5 2.5v3c0 1.5-1 2.5-2.5 2.5h-2.5v5c0 1.5-1 2.5-2.5 2.5h-0c-1.5 0-2.5-1-2.5-2.5v-9h-2.5c-1.5 0-2.5-1-2.5-2.5v-2c0-1.5 1-2.5 2.5-2.5h2.5V6.5c0-1.5 1-2.5 2.5-2.5z"
        fill="url(#cactusGrad)"
      />
    </svg>
  );
}
