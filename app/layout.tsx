import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ChatBot } from "@/components/site/ChatBot";
import { MotionProvider } from "@/components/site/MotionProvider";
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
    default: "CactAi · Vækstpartner for danske servicevirksomheder",
    template: "%s · CactAi",
  },
  description:
    "Vi henter opgaverne ind i dit område, svarer på hver eneste inden for 60 sekunder, og lægger dem direkte i din kalender. Fast månedspris, ingen binding.",
  authors: [{ name: "CactAi", url: "https://cactaihq.com" }],
  creator: "CactAi",
  publisher: "CactAi",
  openGraph: {
    type: "website",
    locale: "da_DK",
    // og:url saettes bevidst PER SIDE via lib/seo.ts, ikke her.
    // Stod den her, ville alle ruter arve forsidens URL, og hver deling
    // af en undersides link ville blive slaaet sammen til ét opslag.
    siteName: "CactAi",
    title: "Bliv den de ringer til først i dit område · CactAi",
    description:
      "Vi henter opgaverne ind i dit område, svarer på hver eneste inden for et minut, og lægger dem i din kalender. Fast månedspris, ingen binding.",
    // Images auto-injected by app/opengraph-image.tsx file convention.
  },
  twitter: {
    card: "summary_large_image",
    title: "Bliv den de ringer til først i dit område · CactAi",
    description:
      "Vi henter opgaverne ind, svarer på under et minut, og lægger dem i din kalender. Du møder bare op til arbejdet.",
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
  // Google Search Console verification is handled via DNS TXT record
  // (google-site-verification=iPwYYW_dfTiGEXmRGfjG5pIICVlbmMv_7vJO-KDe5BA)
  // already configured in Cloudflare. No meta-tag needed.
};

export const viewport: Viewport = {
  themeColor: "#e9f8f0",
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
          href="#main"
          className="sr-only fixed left-4 top-4 z-[100] rounded-md bg-[color:var(--color-cactus-green)] px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-cactus-deep)] focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-[color:var(--color-cactus-cream)]"
        >
          Spring til indhold
        </a>
        <MotionProvider>{children}</MotionProvider>
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
