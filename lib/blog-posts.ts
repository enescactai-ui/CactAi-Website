/**
 * Central registry for all blog posts.
 *
 * To add a new post:
 *  1. Create a new .tsx file in `content/blog/` exporting a default component
 *  2. Add an entry to POSTS below with the metadata
 *  3. Posts are auto-listed on /blog and individually routed at /blog/[slug]
 *
 * Order matters — posts are listed in this order (newest first).
 */

import type { ComponentType } from "react";
import PostPpsaVsRetainer from "@/content/blog/ppsa-vs-retainer";
import PostAiReceptionistGuide from "@/content/blog/ai-receptionist-guide";
import PostMetaAdsHaandvaerkere from "@/content/blog/meta-ads-haandvaerkere";
import PostFounderLessons from "@/content/blog/founder-lessons";

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
      "De fleste bureauer i Danmark kører fast månedsretainer. Vi gør det modsatte. Her er hvordan de to modeller faktisk er forskellige — og hvornår hver giver mening.",
    date: "2026-05-26",
    readMinutes: 7,
    category: "Strategi",
    Body: PostPpsaVsRetainer,
  },
  {
    slug: "ai-receptionist-til-haandvaerkere",
    title:
      "AI receptionist for danske håndværkere: Hvad det koster, hvad det kan, og hvornår det giver mening",
    excerpt:
      "Danske AI-stemmer er nu så gode at de fleste der ringer ikke opdager forskellen. Her er hvad teknologien faktisk kan, hvad det koster, og om det er en god investering for dit firma.",
    date: "2026-05-24",
    readMinutes: 8,
    category: "AI",
    Body: PostAiReceptionistGuide,
  },
  {
    slug: "meta-ads-haandvaerkere-2026",
    title:
      "Meta Ads for håndværkere i 2026: Hvad virker (og hvad spilder dine penge)",
    excerpt:
      "Facebook og Instagram er stadig de billigste kanaler til at få håndværker-leads i Danmark. Men kun hvis du rammer rigtigt. Her er de 5 ting der virker — og de 5 der er rene penge ud af vinduet.",
    date: "2026-05-20",
    readMinutes: 9,
    category: "Marketing",
    Body: PostMetaAdsHaandvaerkere,
  },
  {
    slug: "hvorfor-jeg-startede-cactai",
    title:
      "Hvorfor jeg startede CactAi — og 5 ting jeg har lært på det første år",
    excerpt:
      "Jeg er 19 og driver et marketing-bureau for danske håndværkere. Her er den ærlige historie om hvorfor jeg startede, hvad der gik galt undervejs, og hvad jeg har lært om at sælge til folk der har set det hele før.",
    date: "2026-05-15",
    readMinutes: 6,
    category: "Founder",
    Body: PostFounderLessons,
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
 * NEVER use toLocaleDateString here — it depends on ICU locale data which
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
  // Expect ISO format "YYYY-MM-DD". Parse manually — no Date object needed.
  const [year, month, day] = date.split("-").map(Number);
  if (!year || !month || !day) return date; // graceful fallback
  return `${day}. ${DANISH_MONTHS[month - 1]} ${year}`;
}
