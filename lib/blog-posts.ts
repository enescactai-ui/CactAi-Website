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
import PostPpsaVsRetainer from "@/content/blog/ppsa-vs-retainer";
import PostMetaAdsHaandvaerkere from "@/content/blog/meta-ads-haandvaerkere";

/*
 *  ai-receptionist-guide.tsx findes stadig i content/blog/, men er bevidst
 *  IKKE listet herunder. Indlægget saelger AI-receptionisten som et
 *  virkende produkt, og den paastand er forbudt paa resten af sitet siden
 *  aug 2026, den virker ikke, se det oeverste afsnit i CLAUDE.md. Genindsaet
 *  den ikke uden foerst at rette selve indlaeggets indhold.
 *
 *  founder-lessons.tsx findes ogsaa i content/blog/, upubliceret. Den
 *  aabner med "Jeg er 19, dansker", hvilket direkte modsiger onsket om
 *  at holde alderen ude af sitet. Ret den foerst, hvis den nogensinde
 *  skal publiceres.
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
    slug: "pay-per-show-vs-retainer",
    title:
      "Pay-per-show vs månedsretainer: Den ærlige sammenligning",
    excerpt:
      "De fleste bureauer i Danmark kører fast månedsretainer. Vi gør det modsatte. Her er hvordan de to modeller faktisk er forskellige, og hvornår hver giver mening.",
    date: "2026-05-26",
    readMinutes: 7,
    category: "Strategi",
    Body: PostPpsaVsRetainer,
  },
  {
    slug: "meta-ads-lokale-virksomheder-2026",
    title:
      "Meta Ads for lokale servicevirksomheder i 2026: Hvad virker (og hvad spilder dine penge)",
    excerpt:
      "Facebook og Instagram er stadig blandt de billigste kanaler til at få leads for lokale servicevirksomheder i Danmark. Men kun hvis du rammer rigtigt. Her er de 5 ting der virker, og de 5 der er rene penge ud af vinduet.",
    date: "2026-05-20",
    readMinutes: 9,
    category: "Marketing",
    Body: PostMetaAdsHaandvaerkere,
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
