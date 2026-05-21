"use client";

const FOOTER_LINKS = {
  Firma: [
    { label: "Sådan virker det", href: "#how" },
    { label: "Priser", href: "#priser" },
    { label: "Garanti", href: "#garanti" },
    { label: "FAQ", href: "#faq" },
  ],
  Juridisk: [
    { label: "Privatlivspolitik", href: "/privatlivspolitik" },
    { label: "Vilkår", href: "/vilkaar" },
    { label: "Cookies", href: "/cookies" },
  ],
  Kontakt: [
    { label: "+45 91 30 95 60", href: "tel:+4591309560" },
    { label: "enes@cactaihq.com", href: "mailto:enes@cactaihq.com" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-cactus-green)]/10 bg-[color:var(--color-cactus-deep)]/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <CactusMark />
              <span className="font-display text-xl font-semibold tracking-tight">
                CactAi
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-cactus-cream)]/55">
              AI der arbejder. Resultater der tæller.
            </p>
            <p className="mt-2 text-xs text-[color:var(--color-cactus-cream)]/40">
              Komplet AI-firma for danske håndværkere.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-cactus-cream)]/45">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-[color:var(--color-cactus-cream)]/70 transition-colors hover:text-[color:var(--color-cactus-green)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[color:var(--color-cactus-green)]/10 pt-8 text-xs text-[color:var(--color-cactus-cream)]/40 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} CactAi · CVR 46210689 · Krogager 44,
            2670 Greve
          </div>
          <div>
            Bygget med Next.js + Vercel — fordi langsomt er ikke en mulighed.
          </div>
        </div>
      </div>
    </footer>
  );
}

function CactusMark() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cactusGradFooter" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#87dd5c" />
          <stop offset="100%" stopColor="#52b788" />
        </linearGradient>
      </defs>
      <path
        d="M16 4c1.5 0 2.5 1 2.5 2.5v8h2.5c1.5 0 2.5 1 2.5 2.5v3c0 1.5-1 2.5-2.5 2.5h-2.5v5c0 1.5-1 2.5-2.5 2.5h-0c-1.5 0-2.5-1-2.5-2.5v-9h-2.5c-1.5 0-2.5-1-2.5-2.5v-2c0-1.5 1-2.5 2.5-2.5h2.5V6.5c0-1.5 1-2.5 2.5-2.5z"
        fill="url(#cactusGradFooter)"
      />
    </svg>
  );
}
