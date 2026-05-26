/**
 * Shared typography components for blog post bodies.
 *
 * Each post component composes these to build its article. Centralizes
 * the design so every post has consistent spacing, sizing, color treatment.
 */

import type { ReactNode } from "react";

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-lg leading-[1.7] text-[color:var(--color-cactus-cream)]/80">
      {children}
    </p>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="font-display text-xl leading-[1.4] text-[color:var(--color-cactus-cream)]/90 lg:text-2xl">
      {children}
    </p>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-16 font-display text-3xl font-medium leading-tight tracking-[-0.02em] text-[color:var(--color-cactus-cream)] sm:text-4xl">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-10 font-display text-2xl font-medium leading-tight tracking-[-0.01em] text-[color:var(--color-cactus-cream)]">
      {children}
    </h3>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="space-y-3 text-lg leading-[1.6] text-[color:var(--color-cactus-cream)]/80">{children}</ul>;
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="relative pl-6 before:absolute before:left-0 before:top-[0.7em] before:h-[2px] before:w-3.5 before:bg-[color:var(--color-cactus-green)]">
      {children}
    </li>
  );
}

export function Quote({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <figure className="relative my-10 border-l-2 border-[color:var(--color-cactus-green)] pl-6 lg:pl-8">
      <blockquote className="font-display text-2xl font-light italic leading-snug text-[color:var(--color-cactus-cream)]/90 lg:text-3xl">
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-cactus-cream)]/55">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}

export function Callout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-10 border-2 border-[color:var(--color-cactus-green)]/30 bg-[color:var(--color-cactus-green)]/[0.04] p-6 lg:p-7">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
        {title}
      </div>
      <div className="mt-3 text-base leading-relaxed text-[color:var(--color-cactus-cream)]/85">
        {children}
      </div>
    </aside>
  );
}

export function Strong({ children }: { children: ReactNode }) {
  return (
    <strong className="font-medium text-[color:var(--color-cactus-cream)]">
      {children}
    </strong>
  );
}

export function Em({ children }: { children: ReactNode }) {
  return <em className="italic text-[color:var(--color-cactus-cream)]/90">{children}</em>;
}

/**
 * Section wrapper — every block in a blog body should be a Prose child.
 * Provides max-width + vertical rhythm.
 */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl space-y-6 [&>*:first-child]:mt-0">
      {children}
    </div>
  );
}
