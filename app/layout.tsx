import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CactAi — AI der arbejder. Resultater der tæller.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CactAi — Komplet AI-firma for danske håndværkere",
    description: "Pay-per-show marketing. Du betaler kun for resultater.",
    images: ["/og-image.png"],
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
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
