import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ChatBot } from "@/components/site/ChatBot";
import { JsonLd } from "@/components/site/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cactaihq.com"),
  title: {
    default: "CactAi — Komplet AI-firma for danske håndværkere",
    template: "%s · CactAi",
  },
  description:
    "Vi sender bookede kunder direkte til danske håndværkere. Du betaler kun når kunden møder op. 14-dages garanti. Marketing med den laveste risiko i Danmark.",
  keywords: [
    "AI marketing Danmark",
    "håndværker leads",
    "pay per show",
    "PPSA",
    "Meta ads håndværker",
    "marketing bureau Danmark",
    "lead generation Danmark",
  ],
  authors: [{ name: "CactAi", url: "https://cactaihq.com" }],
  creator: "CactAi",
  publisher: "CactAi",
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://cactaihq.com",
    siteName: "CactAi",
    title: "CactAi — Komplet AI-firma for danske håndværkere",
    description:
      "Vi sender bookede kunder direkte til danske håndværkere. Du betaler kun når kunden møder op.",
    // Images auto-injected by app/opengraph-image.tsx file convention.
  },
  twitter: {
    card: "summary_large_image",
    title: "CactAi — Komplet AI-firma for danske håndværkere",
    description: "Pay-per-show marketing. Du betaler kun for resultater.",
    // Images auto-injected by app/opengraph-image.tsx file convention.
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  // Google Search Console verification.
  // After deploy + DNS, sign up at search.google.com/search-console,
  // choose URL prefix method, copy the verification code (looks like
  // "abc123_XYZ-d4F..."), paste it here, redeploy. Then click "Verify".
  verification: {
    google: "PASTE_GOOGLE_SEARCH_CONSOLE_TOKEN_HERE",
  },
};

export const viewport: Viewport = {
  themeColor: "#050d08",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="da"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* Skip-to-content link — invisible until focused with keyboard.
            Critical for a11y: lets keyboard/screen-reader users bypass nav. */}
        <a
          href="#top"
          className="sr-only fixed left-4 top-4 z-[100] rounded-md bg-[color:var(--color-cactus-green)] px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-cactus-deep)] focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-[color:var(--color-cactus-cream)]"
        >
          Spring til indhold
        </a>
        {children}
        <ChatBot />
        <JsonLd />
        {/* Vercel Analytics + Speed Insights — auto-activates when deployed,
            zero config needed. Free tier covers up to ~25k events/month. */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
