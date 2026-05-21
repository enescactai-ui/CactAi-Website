@AGENTS.md

# CactAi Website — Project Memory

> Read this file FIRST in every session. It contains permanent project context.
> Owner: Enes Tokmak · Last updated: 2026-05-22

---

## Project mission

This is the marketing website for **CactAi** — a Danish AI marketing agency
selling pay-per-show appointment booking to håndværkere (tradespeople).

**Goal of the site:** Convert visitors → booked sales calls (Calendly).
**NOT a goal:** Looking pretty, winning design awards, showcasing tech.

If a design choice makes the site prettier but lowers conversion → reject it.

---

## Stack

- **Framework:** Next.js 16.2.6 (App Router, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 (CSS variables via `@theme`)
- **Components:** shadcn/ui (Base UI), customized per brand
- **Animation:** Framer Motion 12.x — easing `[0.16, 1, 0.3, 1]` as default
- **Icons:** lucide-react
- **Fonts:** Inter (body), Space Grotesk (display), JetBrains Mono (numbers)
- **Deploy:** Vercel (auto-deploy on push to main)
- **Domain:** cactaihq.com (currently on GHL — repointing pending)
- **Analytics:** Vercel Analytics + Speed Insights (when deployed)
- **Forms/booking:** Calendly link → calendly.com/cactai/book

---

## Brand voice — Danish-first

**Core positioning:** "Komplet AI-firma for danske håndværkere."
**Tagline:** "AI der arbejder. Resultater der tæller."
**USP:** Pay-per-show — du betaler kun når kunden møder op.

**Tone rules:**
- ✅ Direct, casual, slightly rough — "pissed business owner" energy
- ✅ Concrete numbers ("5.000 kr setup", "14 dages garanti")
- ✅ Risk-reversal first ("Du betaler kun når...")
- ❌ NO "leverer værdi", "innovative løsninger", agency-speak
- ❌ NO emojis in body copy (only in chat with Enes)
- ❌ NO "AI receptionist" focus — that's deprioritized
- ❌ NO fake testimonials, fake numbers, fake "50+ kunder"
  (Only 1 paying client: Solrød Rengøring. Use generic "lokal klient" if needed.)

**Always use Danish.** English version exists separately if requested.

---

## Brand colors (CSS variables in `app/globals.css`)

```
--color-cactus-deep:  #050d08   (page background)
--color-cactus-dark:  #0a1f12   (cards, surfaces)
--color-cactus-mid:   #163a23   (elevated surfaces, gradients)
--color-cactus-green: #52b788   (primary, CTAs, accents)
--color-cactus-lime:  #87dd5c   (highlight gradient stops)
--color-cactus-cream: #f4f1e8   (foreground/text)
```

Reference colors via `bg-[color:var(--color-cactus-green)]` etc.
Text opacity for hierarchy: `/85` (primary), `/65` (secondary), `/45` (tertiary), `/35` (faded).

---

## Component inventory — `components/site/`

| Component | Purpose | Key state |
|---|---|---|
| `Navbar.tsx` | Sticky top nav, scroll-aware blur | `scrolled` boolean |
| `Hero.tsx` | Animated headline + trust stats | Framer entrance animation |
| `HowItWorks.tsx` | 4-step process cards | Scroll-triggered cards |
| `ROICalculator.tsx` | Interactive ROI widget | branche, jobValue, meetings, closeRate |
| `Pricing.tsx` | 3 tiers (Starter/Premium/Elite) | Premium is `highlight: true` |
| `Guarantee.tsx` | 14-day guarantee section | Circular "0 kr" badge |
| `FAQ.tsx` | 8-question accordion | `open` boolean per item |
| `CTA.tsx` | Final book-section | Links to Calendly |
| `Footer.tsx` | Brand + nav + legal + contact | Static |

**Naming conventions:**
- Components: PascalCase, `components/site/Hero.tsx`
- Helpers: camelCase, `lib/utils.ts`
- All site components must use `"use client"` if they use Framer Motion or React hooks.

---

## Pricing (canonical — match exactly)

| Tier | Setup | Per fremmødt møde | Ad budget min | Bedste til |
|---|---|---|---|---|
| **Starter** | 5.000 kr | 500–1.500 kr | 5.000 kr/md | Rengøring, basis VVS/EL |
| **Premium** | 5.000 kr | 1.500–3.000 kr | 7.500 kr/md | Badeværelses-VVS, mindre reno |
| **Elite** | 7.500 kr | 3.000–4.500 kr | 10.000 kr/md | Varmepumpe, tag, B2B |

Garanti (alle tiers): 5 fremmødte møder på 14 dage eller fuld setup-refund.
Ad spend betales DIREKTE til Meta — ikke gennem os. Aldrig refunderet.

---

## Code conventions

- **Animations:** Use `EASE = [0.16, 1, 0.3, 1] as const` for Framer (v12 requires tuple typing)
- **Variants with functions:** Type explicitly to avoid TS errors
- **Tailwind:** Inline classes preferred over @apply
- **No `@apply`** in component files — keep utilities inline for clarity
- **Section spacing:** `py-24 lg:py-32` is the default rhythm
- **Container:** `mx-auto max-w-7xl px-6 lg:px-12`
- **Rounded:** Default `rounded-3xl` for cards, `rounded-full` for pills/buttons

---

## Workflow — Building + iterating

### Local dev
```bash
npm run dev          # starts on http://localhost:3000 with HMR
npm run build        # production build + TypeScript check
npm run start        # serve production build locally
```

### Visual verification
Before reporting "done" on any UI change:
1. Verify `npm run build` passes (catches TS errors)
2. Take screenshot with Playwright MCP (`mcp__plugin_playwright_playwright__browser_take_screenshot`)
3. If significant change, take 3 screenshots: desktop (1440px), tablet (768px), mobile (390px)

### Git workflow
- Branch: `main` deploys to production on Vercel
- Commit messages: `feat:`, `fix:`, `style:`, `refactor:` prefixes
- Include `Co-Authored-By: Claude` line in commits

---

## Deployment

- **Vercel project:** auto-deploy from `main` branch
- **Preview URLs:** Every git push to non-main branches gets a preview URL
- **Env vars:** Set in Vercel dashboard or via `vercel env`
- **Domain:** cactaihq.com (currently GHL) — DNS repoint pending Enes' approval

---

## Common gotchas in THIS project

1. **Framer Motion v12 easing:** Must use `as const` on number tuples, not raw arrays
2. **Next.js 16 breaking changes:** `middleware` renamed to `proxy`. Async `params` and `searchParams`. Read `node_modules/next/dist/docs/` if unsure.
3. **CSS variables in Tailwind v4:** Use `bg-[color:var(--name)]` syntax (square brackets + `color:` prefix)
4. **shadcn/ui:** Currently uses Base UI (not Radix). Components live in `components/ui/`.
5. **HMR:** Save → browser auto-refreshes in ~100ms. If HMR fails, check terminal output for errors.

---

## What's NOT on the site yet (future work)

- [ ] Privatlivspolitik page (`/privatlivspolitik`)
- [ ] Vilkår page (`/vilkaar`)
- [ ] Cookie-politik (`/cookies`)
- [ ] Blog (`/blog` + `/blog/[slug]`)
- [ ] Case studies (when more clients sign)
- [ ] OG image generation (currently placeholder)
- [ ] Sitemap.xml + robots.txt
- [ ] Calendly inline embed (currently external link)

---

## Enes' preferences (from chat history)

- Wants live preview as code changes (HMR works for this)
- Prefers SHORT, focused responses over long explanations
- Likes clean markdown layout in chat (not too many emojis)
- Hates being "over-helped" — gets to the point
- Already does cold SMS outreach to håndværkere — DON'T repeatedly suggest sales tactics, focus on the task asked
- Uses Billy (not Stripe) for invoicing — match this in any payment-related content
- 19-year-old founder — treat as peer, not student

---

## When in doubt

- **Read this file first.** It's the source of truth.
- **Read `node_modules/next/dist/docs/`** for Next.js 16 specifics.
- **Ask Enes ONE clarifying question** rather than guess on design choices.
- **Take a screenshot** before claiming "done" on visual changes.
- **Run `npm run build`** before claiming "shipped".

---

*This file is intentionally specific. If you find yourself re-explaining context
to Claude, add it here. The goal: zero "context loss" between sessions.*
