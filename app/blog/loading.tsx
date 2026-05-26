/**
 * Loading skeleton for the blog INDEX page (/blog).
 *
 * Critical because RSC payload for /blog takes ~500ms (lists all 4 posts
 * with metadata). Without this file, Next.js shows nothing during client
 * navigation transition — the previous page disappears before the new
 * one renders, creating an apparent "blank screen" hang.
 *
 * Includes Navbar + Footer so navigation chrome stays visible during
 * transition (otherwise user loses orientation during the gap).
 */

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";

export default function BlogIndexLoading() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Eyebrow */}
        <div className="h-3 w-40 animate-pulse bg-[color:var(--color-cactus-green)]/30" />

        {/* Hero headline — three lines */}
        <div className="mt-6 space-y-3">
          <div className="h-16 w-full animate-pulse bg-[color:var(--color-cactus-cream)]/15 sm:h-20 lg:h-24" />
          <div className="h-16 w-[92%] animate-pulse bg-[color:var(--color-cactus-cream)]/15 sm:h-20 lg:h-24" />
          <div className="h-16 w-[50%] animate-pulse bg-[color:var(--color-cactus-cream)]/15 sm:h-20 lg:h-24" />
        </div>

        {/* Subtitle */}
        <div className="mt-8 space-y-2">
          <div className="h-5 w-[80%] animate-pulse bg-[color:var(--color-cactus-cream)]/12" />
          <div className="h-5 w-[65%] animate-pulse bg-[color:var(--color-cactus-cream)]/12" />
        </div>

        {/* Featured card — large box */}
        <div className="mt-16 border-2 border-[color:var(--color-cactus-green)]/40 bg-[color:var(--color-cactus-dark)]/40 p-8 sm:p-12 lg:mt-24 lg:p-16">
          <div className="flex gap-3">
            <div className="h-6 w-16 animate-pulse rounded-full bg-[color:var(--color-cactus-green)]/30" />
            <div className="h-5 w-40 animate-pulse bg-[color:var(--color-cactus-cream)]/15" />
          </div>
          <div className="mt-6 space-y-3">
            <div className="h-10 w-full animate-pulse bg-[color:var(--color-cactus-cream)]/15 sm:h-12 lg:h-14" />
            <div className="h-10 w-[88%] animate-pulse bg-[color:var(--color-cactus-cream)]/15 sm:h-12 lg:h-14" />
          </div>
          <div className="mt-5 space-y-2">
            <div className="h-4 w-full animate-pulse bg-[color:var(--color-cactus-cream)]/12" />
            <div className="h-4 w-[85%] animate-pulse bg-[color:var(--color-cactus-cream)]/12" />
          </div>
        </div>

        {/* Grid of standard cards */}
        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-10">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="border border-[color:var(--color-cactus-green)]/20 bg-[color:var(--color-cactus-dark)]/30 p-8 lg:p-10"
            >
              <div className="h-4 w-32 animate-pulse bg-[color:var(--color-cactus-green)]/25" />
              <div className="mt-5 space-y-2">
                <div className="h-8 w-full animate-pulse bg-[color:var(--color-cactus-cream)]/15" />
                <div className="h-8 w-[80%] animate-pulse bg-[color:var(--color-cactus-cream)]/15" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-4 w-full animate-pulse bg-[color:var(--color-cactus-cream)]/10" />
                <div className="h-4 w-[90%] animate-pulse bg-[color:var(--color-cactus-cream)]/10" />
                <div className="h-4 w-[75%] animate-pulse bg-[color:var(--color-cactus-cream)]/10" />
              </div>
            </div>
          ))}
        </div>

        {/* Loading hint */}
        <div className="mt-16 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-cactus-cream)]/35">
          Indlæser blog...
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
