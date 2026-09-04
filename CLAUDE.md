@AGENTS.md

# CactAi Website — Project Memory

> Read this file FIRST in every session. It contains permanent project context.
> Owner: Enes Tokmak · Last updated: 2026-09-03

---

## ⚡ CURRENT POSITIONING (3. sep 2026) — supersedes EVERYTHING below

Alt under denne blok der modsiger den her, er forældet. Ret det, eller lad
være med at følge det. Særligt prislisten og alt om pay-per-show.

### Forretningsmodellen er FAST MÅNEDSHONORAR. Pay-per-show er død.

| | |
|---|---|
| **Model** | Fast beløb om måneden. Ingen provision. Ingen binding, 30 dages opsigelse fra dag ét. |
| **Annoncebudget** | Kunden betaler DIREKTE til platformen. Går aldrig gennem CactAi. |
| **Reference** | Skandiacare (Kelvin) kører 4.500 kr/md. |
| **Ejerskab** | Konti, hjemmeside, domæne og data står i kundens navn, også ved ophør. |

**Pay-per-show, PPSA, "0 kr ved no-show", "du betaler kun når kunden møder op"
og prislisten med Starter/Premium/Elite er ALT SAMMEN afskaffet.** Det stod
stadig otte steder på sitet 3. sep 2026 og er ryddet. Sæt det ikke tilbage.

### ⛔ INGEN TALGARANTI PÅ SITET

Der står bevidst intet tal i nogen garanti. Ikke "5 kvalificerede
henvendelser", ikke "5 bookede opgaver", ikke "14 dages resultatgaranti".

**Begrundelsen, som er vigtig:** vi styrer hvor mange der henvender sig, ikke
hvor mange der bliver lukket. Det afhænger af kundens egne priser, kapacitet
og svartid. Kelvin fik 13 henvendelser og lukkede nul, fordi hans pris lå for
højt. Med et tal på siden var den samtale blevet til et refusionskrav i
stedet for en snak om hans priser.

Kundens sikkerhed er **30 dages opsigelse**, ikke et tal. FAQ'ens øverste
spørgsmål er "Kan I garantere mig et bestemt antal kunder?" og svaret er nej,
med begrundelsen. Det er bevidst, og det er stærkere end garantien var.
`vilkaar/page.tsx` §05 hedder nu "Leverance og opsigelsesret" og siger
eksplicit at der ikke gives garanti på antal.

### ⛔ NÆVN ALDRIG KANALEN I ET TILBUD ELLER EN OVERSKRIFT

Meta, Facebook, Google, "annoncer", "AI" må ikke stå i overskrifter,
tilbudsformuleringer, pakkenavne eller JSON-LD-tilbud. Nævner du kanalen,
bliver du sat i kassen "endnu et Facebook-bureau, det har jeg prøvet", og
læseren afviser dig før du har fået ordet.

Konkrete deliverables i en punktliste MÅ gerne være specifikke. Det er
navnet og overskriften der ikke må være det.

### ⛔ KUNDENS SPROG, IKKE VORES

Et lokalt servicefirma vil have **opgaver** og **faste kunder**. Ikke "leads"
og ikke "henvendelser". Tandlæger vil have patienter. Skriv deres ord.

### ⛔ INTET BEVIS-AFSNIT FØR DER ER BEVIS

`CaseStudy` og `TrustMarquee` er taget af forsiden 3. sep 2026. Der findes
ét igangværende forløb og ingen færdig case med tal en fremmed kan
efterprøve. FAQ'en siger det ærligt i stedet. Sæt `<CaseStudy />` tilbage
mellem `VaekstMotorV8` og `Pricing` den dag der ER en færdig case.

### Positionering og struktur

- **NSVP:** "Bliv den de ringer til først i dit område."
- **Mekanismen hedder Vækstmotoren.** Det er en V8-motor-metafor, vist som
  interaktiv 3D.
- **Mødet hedder "lokal kundeanalyse"**, ikke "gratis strategi-møde". Det
  leverer tre ting: søgevolumen i deres område, hvad konkurrenterne gør, og
  hvad en ny fast kunde koster at få ind. Enes har bekræftet at han kan
  levere alle tre. Ændrer det sig, skal siden ændres.
- **Forsidens rækkefølge:**
  `Hero · Problem · VaekstMotorV8 · Pricing · CTA · FAQ · Footer`
  Kalenderen ligger nederst med vilje, så folk har set argumentet først.
- **Temaet er LYST** (mint/hvid). CSS-variablerne i `globals.css` blev
  remappet, så de SAMME `--color-cactus-*`-navne nu render lyst
  (cactus-deep=#fff baggrund, cactus-cream=mørk tekst,
  cactus-dark=#f0faf5 flade). "Ret" ikke komponenter tilbage til mørkt.

### ⛔ AI-RECEPTIONISTEN ER AF SITET (aug 2026) — sæt den ikke tilbage

Den danske stemme-agent blev bygget til Skandiacare i august 2026 og
**fejlede i live-test**: den loopede på danske vejnavne og kunne ikke opfange
dem pålideligt. Den blev opgivet, ikke leveret.

| Påstand | Status | Hvorfor |
|---|---|---|
| "Hver ny opgave får svar på 60 sekunder, døgnet rundt" | ✅ BEHOLD | Sandt. GHL-workflow sender SMS + mail automatisk ved formular-submit. |
| "Du får besked med navn, opgave og nummer" | ✅ BEHOLD | Sandt. Intern notifikations-workflow. |
| "AI-stemme tager telefonen 24/7" | ❌ FJERNET | Falsk. Stemme-agenten virker ikke. |
| "Hvert opkald besvaret" | ❌ FJERNET | Falsk. Samme grund. |

Forskellen er **opgave vs opkald**. Automatisk svar på henvendelser er
virkeligt. Automatisk telefonpasning er det ikke.

`lib/services.ts` er DØD KODE og sælger stadig både PPSA og
AI-receptionisten. Den importeres ikke af nogen side. Brug den ikke uden at
skrive indholdet om først.

### ⛔ INGEN TANKESTREG I SYNLIG TEKST

Enes synes det er "for AI-agtigt". Gælder både — og –. Brug komma eller
punktum. Det gælder også blogindlæg og fejlsider.

---

## Project mission

This is the marketing website for **CactAi**, a Danish agency selling ONE
system (Vækstmotoren) to local Danish service businesses (rengøring, tag,
VVS, el, klinikker) on a flat monthly fee.

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
- **Forms/booking:** GoHighLevel widget embedded via `components/site/BookingEmbed.tsx`.
  Uses `api.leadconnectorhq.com` (GHL platform URL) since the white-label
  `link.cactaihq.com` CNAME isn't configured in DNS yet.
- **SEO:** Auto-generated OG image (`app/opengraph-image.tsx`),
  JSON-LD via `components/site/JsonLd.tsx` (Organization + ProfessionalService
  + WebSite at root, FAQPage on homepage).

---

## Brand voice — Danish-first

**Core positioning:** "Bliv den de ringer til først i dit område."
**USP:** Fast månedspris, ingen provision, 30 dages opsigelse fra dag ét.
Se den øverste blok. Pay-per-show findes ikke længere.

**Tone rules:**
- ✅ Direct, casual, slightly rough — "pissed business owner" energy
- ✅ Concrete, TRUE facts ("30 dages opsigelse", "svar under 60 sek.")
- ❌ NO numeric guarantees. See the ⛔ block at the top.
- ❌ NO "leverer værdi", "innovative løsninger", agency-speak
- ❌ NO emojis in body copy (only in chat with Enes)
- ❌ NO em-dashes in visible copy (Enes finds them "too AI" — use commas/periods)
- ❌ AI-receptionist is OFF the site and stays off. See the ⛔ block at the top.
- ❌ NO fake testimonials, fake numbers, fake "50+ kunder"
  (Active client: Lindas Rengøring (Linda Okoh, Aalborg). Use "lokal klient" in copy, never name without client's explicit approval.)

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
| `Navbar.tsx` | Sticky top nav, scroll-aware blur + mobile overlay | `scrolled`, `mobileOpen` |
| `Hero.tsx` | Animated headline + video bg + telefon-mockup | Mouse-spotlight FJERNET 3. sep, den virkede aldrig |
| `TrustMarquee.tsx` | Infinite scrolling tagline ticker | CSS-only animation |
| `Manifesto.tsx` | Brand positioning / "why we exist" | Scroll-triggered |
| `Founder.tsx` | Enes bio + facts grid + photo + timeline | Uses `FounderPhoto.tsx` |
| `HowItWorks.tsx` | 4-step process cards | Scroll-triggered cards |
| `BeforeAfter.tsx` | Split-screen "Din uge nu / efter" timeline | Editorial contrast |
| `Receipt.tsx` | PPSA receipt visualization (fremmødt vs no-show) | Static |
| `ROICalculator.tsx` | Interactive ROI widget | branche, jobValue, meetings, closeRate |
| `Pricing.tsx` | To indgange + "passer til / sig nej hvis"-filter | Ingen priser vist, med vilje |
| `Comparison.tsx` | 8-row table "Traditionelt bureau vs CactAi" | Hover-revealed |
| `Guarantee.tsx` | DØD KODE. Ikke importeret nogen steder. | Beskriver den gamle garanti |
| `FAQ.tsx` | 8-question accordion + FAQPage JSON-LD | `open` boolean per item |
| `CTA.tsx` | Final book-section, embeds `BookingEmbed.tsx` | GHL widget iframe |
| `BookingEmbed.tsx` | GHL booking iframe + form_embed.js script | Lazy-loaded |
| `Footer.tsx` | Brand + nav + legal + contact | Static |
| `Logo.tsx` | SVG cactus logo (used in Navbar + Footer) | Static |
| `JsonLd.tsx` | Server Component emitting 3 schema.org blocks | Static |

**Naming conventions:**
- Components: PascalCase, `components/site/Hero.tsx`
- Helpers: camelCase, `lib/utils.ts`
- All site components must use `"use client"` if they use Framer Motion or React hooks.

---

## Pricing

**Prislisten med Starter / Premium / Elite og "per fremmødt møde" er
AFSKAFFET.** Den beskrev pay-per-show-modellen, som ikke findes længere.

Nu: fast månedshonorar, aftalt individuelt. Sitet nævner bevidst intet tal,
og `Pricing.tsx` siger "Prisen står ikke her. Med vilje." med to indgange,
"Hjemmeside & Synlighed" (ingen opstart) og "Vækstmotoren" (fast pr. måned).

Kendt reference: Skandiacare 4.500 kr/md. Annoncebudget betales DIREKTE af
kunden til platformen og indgår aldrig i honoraret.

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

- [x] ~~Privatlivspolitik page~~ — done, GDPR-grade v2.0
- [x] ~~Vilkår page~~ — done, B2B-grade v2.0
- [x] ~~Cookie-politik~~ — done, minimal "we use almost nothing" page
- [x] ~~OG image generation~~ — done, auto-generated via `app/opengraph-image.tsx`
- [x] ~~Sitemap.xml + robots.txt~~ — done, `app/sitemap.ts` + `app/robots.ts`
- [x] ~~Booking embed~~ — done, GHL widget via `BookingEmbed.tsx`
- [x] ~~JSON-LD structured data~~ — done, 4 schemas in initial HTML
- [x] ~~Services page~~ — done at `/ydelser` with 5 services
- [ ] DNS repoint cactaihq.com from GHL to Vercel (pending Enes)
- [ ] Set up GHL white-label CNAME `link.cactaihq.com` (then revert
      `BookingEmbed.tsx` URLs from `api.leadconnectorhq.com`)
- [ ] Blog (`/blog` + `/blog/[slug]`)
- [ ] Case studies (when more clients sign)
- [ ] Per-service qualification forms (currently all CTAs → `/#book`)
- [ ] Vercel Analytics + Speed Insights wiring (just add `@vercel/analytics`)

---

## Enes' preferences (from chat history)

- Wants live preview as code changes (HMR works for this)
- Prefers SHORT, focused responses over long explanations
- Likes clean markdown layout in chat (not too many emojis)
- Hates being "over-helped" — gets to the point
- Already does cold SMS outreach to håndværkere — DON'T repeatedly suggest sales tactics, focus on the task asked
- Fakturerer nu via egen Stripe-konto (skiftet sep 2026). Billy-omtale i gammel tekst er forældet.
- Treat as peer, not student. Skriv ALDRIG hans alder på sitet.

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
