/**
 * Loading skeleton for individual blog posts.
 *
 * Shows during client-side navigation while the next post's data streams
 * in. Includes Navbar + Footer so navigation chrome persists during the
 * transition (otherwise user loses orientation when those disappear).
 */

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";

export default function BlogPostLoading() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <article className="mx-auto max-w-3xl px-6 lg:px-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="h-3 w-20 animate-pulse bg-[color:var(--color-cactus-green)]/30" />
          <div className="h-3 w-16 animate-pulse bg-[color:var(--color-cactus-cream)]/15" />
        </div>

        {/* Title placeholder — three lines */}
        <div className="mt-6 space-y-3">
          <div className="h-12 w-full animate-pulse bg-[color:var(--color-cactus-cream)]/15 sm:h-14 lg:h-16" />
          <div className="h-12 w-[88%] animate-pulse bg-[color:var(--color-cactus-cream)]/15 sm:h-14 lg:h-16" />
          <div className="h-12 w-[55%] animate-pulse bg-[color:var(--color-cactus-cream)]/15 sm:h-14 lg:h-16" />
        </div>

        {/* Meta strip */}
        <div className="mt-8 flex items-center gap-5 border-t border-[color:var(--color-cactus-green)]/15 pt-5">
          <div className="h-3 w-24 animate-pulse bg-[color:var(--color-cactus-cream)]/15" />
          <div className="h-3 w-32 animate-pulse bg-[color:var(--color-cactus-cream)]/15" />
          <div className="h-3 w-20 animate-pulse bg-[color:var(--color-cactus-cream)]/15" />
        </div>

        {/* Lead paragraph */}
        <div className="mt-16 space-y-3">
          <div className="h-5 w-full animate-pulse bg-[color:var(--color-cactus-cream)]/12" />
          <div className="h-5 w-full animate-pulse bg-[color:var(--color-cactus-cream)]/12" />
          <div className="h-5 w-[80%] animate-pulse bg-[color:var(--color-cactus-cream)]/12" />
        </div>

        {/* Body block 1 */}
        <div className="mt-12 space-y-3">
          <div className="h-8 w-[60%] animate-pulse bg-[color:var(--color-cactus-cream)]/15" />
          <div className="mt-6 h-4 w-full animate-pulse bg-[color:var(--color-cactus-cream)]/10" />
          <div className="h-4 w-full animate-pulse bg-[color:var(--color-cactus-cream)]/10" />
          <div className="h-4 w-[90%] animate-pulse bg-[color:var(--color-cactus-cream)]/10" />
          <div className="h-4 w-[78%] animate-pulse bg-[color:var(--color-cactus-cream)]/10" />
        </div>

        {/* Body block 2 */}
        <div className="mt-12 space-y-3">
          <div className="h-8 w-[45%] animate-pulse bg-[color:var(--color-cactus-cream)]/15" />
          <div className="mt-6 h-4 w-full animate-pulse bg-[color:var(--color-cactus-cream)]/10" />
          <div className="h-4 w-full animate-pulse bg-[color:var(--color-cactus-cream)]/10" />
          <div className="h-4 w-[85%] animate-pulse bg-[color:var(--color-cactus-cream)]/10" />
        </div>

        {/* Loading hint */}
        <div className="mt-16 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-cactus-cream)]/35">
          Indlæser artikel...
        </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
