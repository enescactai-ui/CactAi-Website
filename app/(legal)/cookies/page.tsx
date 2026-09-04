import { Breadcrumb } from "@/components/site/Breadcrumb";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...pageMeta("/cookies", "Cookie-politik", "Hvilke cookies CactAi bruger (spoiler: næsten ingen)."),
  title: "Cookie-politik",
  description: "Hvilke cookies CactAi bruger (spoiler: næsten ingen).",
};

export default function CookiesPage() {
  return (
    <article>
      <Breadcrumb
        items={[
          { name: "Hjem", url: "https://www.cactaihq.com" },
          { name: "Cookie-politik", url: "https://www.cactaihq.com/cookies" },
        ]}
      />
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cactus-green)]">
        Juridisk // Cookies
      </div>
      <h1 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl">
        Cookie-politik.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-cactus-cream)]/65">
        Den korteste cookie-politik du nogensinde har læst.
      </p>

      <section className="relative mt-16 pt-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[color:var(--color-cactus-green)]/20 before:to-transparent">
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
          måler page views, performance, fejl, og hvor mange der klikker på
          en knap eller gennemfører en booking. Det sker uden cookies, uden
          fingerprinting og uden at identificere dig personligt. Vi tæller
          altså hvor mange, ikke hvem.
        </p>
        <p className="mt-4 pl-10 leading-relaxed text-[color:var(--color-cactus-cream)]/75">
          Derudover bruger vi to værktøjer fra GoHighLevel (LeadConnector,
          USA). Booking-kalenderen nederst på forsiden indlæses sammen med
          siden og gemmer et besøgs-id i din browser, så din booking kan
          gennemføres. Chat-widgeten indlæses først i det øjeblik du selv
          klikker for at åbne den, og den gemmer dit samtale-id så din
          samtale huskes. Klikker du ikke, indlæses den aldrig. Data
          behandles i USA på EU-Kommissionens standardkontraktbestemmelser.
        </p>
      </section>

      <section className="relative mt-12 pt-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[color:var(--color-cactus-green)]/20 before:to-transparent">
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
          <li>→ Vi har ikke en cookie-banner du skal klikke væk. Det du selv åbner, indlæses først når du åbner det</li>
          <li>→ Vi bruger ikke remarketing-pixels på dig</li>
        </ul>
      </section>

      <section className="relative mt-12 pt-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[color:var(--color-cactus-green)]/20 before:to-transparent">
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
          på din hjemmeside, for det er sådan systemet virker. Men på{" "}
          <em>vores</em> site? Næsten ingenting.
        </p>
      </section>
    </article>
  );
}
