---
description: Take screenshots of the running CactAi website at desktop, tablet, and mobile sizes
allowed-tools: mcp__plugin_playwright_playwright__browser_navigate, mcp__plugin_playwright_playwright__browser_resize, mcp__plugin_playwright_playwright__browser_take_screenshot, mcp__plugin_playwright_playwright__browser_evaluate, mcp__plugin_playwright_playwright__browser_wait_for, Read, Bash
argument-hint: "[path] (optional — defaults to /)"
---

# /screenshot

Take responsive screenshots of the CactAi website at desktop, tablet, and mobile breakpoints, then display them inline.

## What you should do

1. **Verify dev server is running** — check `http://localhost:3000` returns 200.
   If not, ask the user to run `npm run dev` first. Don't start it yourself.

2. **Determine target path** from `$ARGUMENTS`:
   - If empty → default to `/`
   - Else → use the provided path (e.g. `/priser`, `/blog`)

3. **Take 3 screenshots** in this order (one breakpoint at a time):

   ```
   Desktop:  1440 × 900
   Tablet:    768 × 1024
   Mobile:    390 × 844
   ```

   For EACH breakpoint:
   - Resize browser
   - Navigate to `http://localhost:3000` + path
   - Scroll through entire page (top → bottom → back to top) to trigger
     all Framer Motion `whileInView` animations
   - Wait 500ms after scroll for animations to settle
   - Take a VIEWPORT screenshot (not fullPage — fullPage times out on tall pages)
   - Save to `/Users/enestokmak/Documents/CactAi_CLEAN/screenshots/cactai-{breakpoint}-{path-slug}.png`
   - Use `jpeg` format if `png` times out

4. **Display all 3 screenshots inline** using the Read tool so the user can see them.

5. **Report findings** in a short table:

   | Breakpoint | Status | Notes |
   |---|---|---|
   | Desktop | ✅ | hero, ROI, pricing visible |
   | Tablet | ✅ | layout adapts cleanly |
   | Mobile | ⚠️ | navbar overflowing on iPhone 12 |

   Flag any visual bugs you notice.

## Common gotchas

- **Page is ~8600px tall** → fullPage screenshots time out. Always use viewport.
- **Framer Motion `whileInView`** requires scroll to trigger. Always scroll-then-screenshot.
- **Turbopack HMR** may reload during screenshot → wait 2s if you see a console reload event.
- **Font loading** — Playwright waits for fonts. If timing out, retry with jpeg format.

## Output directory

Save all screenshots to: `/Users/enestokmak/Documents/CactAi_CLEAN/screenshots/`
(create if it doesn't exist with `mkdir -p`)
