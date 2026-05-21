import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie-politik",
  description: "Hvilke cookies CactAi bruger (spoiler: næsten ingen).",
};

export default function CookiesPage() {
  return (
    <article>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
        Juridisk // Cookies
      </div>
      <h1 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl">
        Cookie-politik.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65">
        Den korteste cookie-politik du nogensinde har læst.
      </p>

      <section className="mt-16 border-t border-[color:var(--color-cactus-green)]/15 pt-8">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm text-[color:var(--color-cactus-green)]">
            01
          </span>
          <h2 className="font-display text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
            Hvad vi gør
          </h2>
        </div>
        <p className="mt-6 pl-10 leading-relaxed text-[color:var(--color-cactus-cream)]/75">
          cactaihq.com bruger Vercel Analytics og Vercel Speed Insights. De
          måler page views, performance og errors — uden cookies, uden
          fingerprinting, uden at identificere dig personligt.
        </p>
      </section>

      <section className="mt-12 border-t border-[color:var(--color-cactus-green)]/15 pt-8">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm text-[color:var(--color-cactus-green)]">
            02
          </span>
          <h2 className="font-display text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
            Hvad vi IKKE gør
          </h2>
        </div>
        <ul className="mt-6 space-y-3 pl-10 text-[color:var(--color-cactus-cream)]/75">
          <li>→ Vi tracker dig ikke på tværs af sites</li>
          <li>→ Vi sælger ikke dine data til Facebook/Google</li>
          <li>→ Vi har ikke en cookie-banner du skal klikke væk</li>
          <li>→ Vi bruger ikke remarketing-pixels på dig</li>
        </ul>
      </section>

      <section className="mt-12 border-t border-[color:var(--color-cactus-green)]/15 pt-8">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm text-[color:var(--color-cactus-green)]">
            03
          </span>
          <h2 className="font-display text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
            Når du bliver klient
          </h2>
        </div>
        <p className="mt-6 pl-10 leading-relaxed text-[color:var(--color-cactus-cream)]/75">
          Så hjælper vi DIG med at sætte Meta Pixel og Google Ads-tracking op
          på din hjemmeside — for det er sådan PPSA-modellen virker. Men på{" "}
          <em>vores</em> site? Næsten ingenting.
        </p>
      </section>
    </article>
  );
}
