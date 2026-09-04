/**
 * Central registry for all blog posts.
 *
 * To add a new post:
 *  1. Create a new .tsx file in `content/blog/` exporting a default component
 *  2. Add an entry to POSTS below with the metadata
 *  3. Posts are auto-listed on /blog and individually routed at /blog/[slug]
 *
 * Order matters, posts are listed in this order (newest first).
 */

import type { ComponentType } from "react";
import PostFastPrisUdenBinding from "@/content/blog/fast-pris-uden-binding";

/*
 *  ai-receptionist-guide.tsx findes stadig i content/blog/, men er bevidst
 *  IKKE listet herunder. Indlægget saelger AI-receptionisten som et
 *  virkende produkt, og den paastand er forbudt paa resten af sitet siden
 *  aug 2026, den virker ikke, se det oeverste afsnit i CLAUDE.md. Genindsaet
 *  den ikke uden foerst at rette selve indlaeggets indhold.
 *
 *  founder-lessons.tsx findes ogsaa i content/blog/, upubliceret. Der er
 *  TO grunde, og den anden er den alvorlige:
 *
 *    1. Den aabner med "Jeg er 19, dansker", hvilket direkte modsiger
 *       oensket om at holde alderen ude af sitet.
 *    2. Den skriver "Vi er paa 1 betalende kunde lige nu (Solroed
 *       Rengoering)". Ahmet ghostede i maj 2026 og er IKKE kunde. At
 *       navngive en klient offentligt er desuden imod reglen om at vi
 *       aldrig naevner klienter ved navn i materiale andre ser.
 *
 *  Retter du kun alderen og publicerer, sender du en falsk kundepaastand
 *  ud med navns naevnelse. Begge dele skal rettes foerst.
 *
 *  ppsa-vs-retainer.tsx er AFPUBLICERET 3. sep 2026 og erstattet af
 *  fast-pris-uden-binding.tsx. Den gamle version argumenterede imod fast
 *  maanedsbetaling, altsaa imod den model vi selv saelger nu, og laa
 *  oeverst paa /blog som fremhaevet indlaeg. Den gamle URL
 *  /blog/pay-per-show-vs-retainer redirecter permanent til den nye,
 *  se next.config. Genindsaet den ikke.
 */

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  readMinutes: number;
  category: "Strategi" | "AI" | "Marketing" | "Founder";
  Body: ComponentType;
};

export const POSTS: BlogPost[] = [
  {
    slug: "fast-pris-uden-binding",
    title:
      "Fast pris er ikke problemet. Bindingen er.",
    excerpt:
      "Næsten ingen ejere er sure over hvad bureauet kostede. De er sure over at de ikke kunne komme ud. Her er hvorfor jeg tager fast betaling og alligevel lader dig gå med 30 dages varsel.",
    date: "2026-09-03",
    readMinutes: 7,
    category: "Strategi",
    Body: PostFastPrisUdenBinding,
  },
];

/* ─────────────────────────────────────────
   Lookup helpers
   ───────────────────────────────────────── */

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count = 2): BlogPost[] {
  return POSTS.filter((p) => p.slug !== currentSlug).slice(0, count);
}

/**
 * Deterministic Danish date formatting.
 *
 * NEVER use toLocaleDateString here, it depends on ICU locale data which
 * can differ subtly between Node.js (server) and Chrome (client). Even
 * one different character (e.g. normal vs non-breaking space) triggers
 * a React hydration mismatch, which silently wipes the DOM.
 *
 * Manual string construction = byte-identical output on both sides.
 */
const DANISH_MONTHS = [
  "januar",
  "februar",
  "marts",
  "april",
  "maj",
  "juni",
  "juli",
  "august",
  "september",
  "oktober",
  "november",
  "december",
] as const;

export function formatPostDate(date: string): string {
  // Expect ISO format "YYYY-MM-DD". Parse manually, no Date object needed.
  const [year, month, day] = date.split("-").map(Number);
  if (!year || !month || !day) return date; // graceful fallback
  return `${day}. ${DANISH_MONTHS[month - 1]} ${year}`;
}
