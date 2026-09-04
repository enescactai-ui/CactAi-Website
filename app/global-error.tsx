"use client";

import { useEffect } from "react";

/**
 * Rod-fejlgraense. Fanger kast i selve rod-layoutet, som app/error.tsx
 * IKKE kan naa.
 *
 * Hvorfor den er noedvendig: ChatBot, JsonLd, Analytics og SpeedInsights
 * monteres alle i app/layout.tsx. Fejler en af dem, bliver app/error.tsx
 * aldrig renderet, og den besoegende faar Next's raa hvide fejlskaerm i
 * stedet for noget der ligner vores side.
 *
 * Denne fil SKAL rendere sine egne <html> og <body>, fordi den erstatter
 * rod-layoutet fuldstaendigt. Derfor kan den heller ikke bruge site-ens
 * komponenter eller CSS-variabler, og stilen er skrevet inline med faste
 * vaerdier. Det er med vilje: naar den her vises, er der noget helt galt,
 * og den maa ikke selv kunne fejle.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[CactAi root error boundary]", error);
  }, [error]);

  return (
    <html lang="da">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          background: "#ffffff",
          color: "#0a1f12",
          fontFamily:
            "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <main style={{ maxWidth: "34rem", textAlign: "center" }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#52b788",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            }}
          >
            Der gik noget galt
          </div>

          <h1
            style={{
              marginTop: 20,
              fontSize: 34,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            Siden kunne ikke vises.
          </h1>

          <p
            style={{
              marginTop: 16,
              fontSize: 16,
              lineHeight: 1.65,
              color: "rgba(10,31,18,0.65)",
            }}
          >
            Prøv at indlæse igen. Virker det stadig ikke, så ring eller skriv,
            så tager vi den derfra.
          </p>

          <div
            style={{
              marginTop: 28,
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              onClick={() => reset()}
              style={{
                border: 0,
                cursor: "pointer",
                borderRadius: 999,
                padding: "14px 26px",
                fontSize: 15,
                fontWeight: 600,
                color: "#ffffff",
                background: "#52b788",
              }}
            >
              Prøv igen
            </button>
            <a
              href="/"
              style={{
                borderRadius: 999,
                padding: "14px 26px",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                color: "#0a1f12",
                border: "1px solid rgba(10,31,18,0.18)",
              }}
            >
              Til forsiden
            </a>
          </div>

          <div
            style={{
              marginTop: 32,
              paddingTop: 20,
              borderTop: "1px solid rgba(10,31,18,0.1)",
              fontSize: 14,
            }}
          >
            <a href="tel:+4591309560" style={{ color: "#0a1f12", fontWeight: 600 }}>
              +45 91 30 95 60
            </a>
          </div>

          {error.digest ? (
            <div
              style={{
                marginTop: 18,
                fontSize: 11,
                letterSpacing: "0.12em",
                color: "rgba(10,31,18,0.35)",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              }}
            >
              REF {error.digest}
            </div>
          ) : null}
        </main>
      </body>
    </html>
  );
}
