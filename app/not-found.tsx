import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siden findes ikke",
  description:
    "Den side du leder efter findes ikke. Måske har du fulgt et gammelt link, eller siden er flyttet.",
};

/**
 * Branded 404 page — replaces Next.js's default minimal "404 This page
 * could not be found" with something that matches CactAi's design system
 * and offers escape routes (homepage, services, contact).
 */
export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-cactus-green)]">
          404 // Side ikke fundet
        </div>

        <h1 className="mt-6 font-display text-6xl font-medium leading-[0.95] tracking-[-0.04em] text-balance sm:text-7xl lg:text-8xl">
          Den side{" "}
          <span className="italic font-light text-[color:var(--color-cactus-cream)]/60">
            findes
          </span>{" "}
          ikke.
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/70">
          Du har enten klikket på et gammelt link, eller skrevet adressen
          forkert. Ingen drama — her er hvor du kan komme i stedet:
        </p>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between border border-[color:var(--color-cactus-green)]/25 bg-[color:var(--color-cactus-dark)]/40 p-5 text-left transition-all hover:border-[color:var(--color-cactus-green)] hover:bg-[color:var(--color-cactus-dark)]"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cactus-green)]">
                  {link.label}
                </div>
                <div className="mt-1 font-display text-base text-[color:var(--color-cactus-cream)]">
                  {link.title}
                </div>
              </div>
              <span
                aria-hidden
                className="font-mono text-[color:var(--color-cactus-green)] transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 border-t border-[color:var(--color-cactus-green)]/15 pt-8 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/45">
          Eller ring direkte +45 91 30 95 60
        </div>
      </div>
    </main>
  );
}

const LINKS = [
  { href: "/", label: "Hjem", title: "Forsiden" },
  { href: "/ydelser", label: "Services", title: "Hvad vi laver" },
  { href: "/blog", label: "Blog", title: "Indsigt & artikler" },
  { href: "/#book", label: "Book", title: "20-min strategi-møde" },
];
