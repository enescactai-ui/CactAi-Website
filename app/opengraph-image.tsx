import { ImageResponse } from "next/og";

/**
 * Auto-generated Open Graph image (1200×630) for social shares.
 *
 * Next.js 16 file convention: this file is auto-detected and merged into
 * <meta property="og:image"> + Twitter card. No metadata reference needed
 * in layout.tsx — it just works.
 */

export const alt = "CactAi — AI der arbejder. Resultater der tæller.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #050d08 0%, #0a1f12 55%, #163a23 100%)",
          padding: "72px 80px",
          color: "#f4f1e8",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(82,183,136,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(82,183,136,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* Top row: brand identifier */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: "#52b788",
              boxShadow: "0 0 24px rgba(82,183,136,0.6)",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: 20,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.55,
            }}
          >
            CactAi · cactaihq.com · CVR 46210689
          </span>
        </div>

        {/* Massive headline */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              display: "flex",
            }}
          >
            AI der arbejder.
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#52b788",
              display: "flex",
            }}
          >
            Resultater der tæller.
          </div>
        </div>

        {/* Bottom stat strip */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 32,
            borderTop: "2px solid rgba(82, 183, 136, 0.3)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", gap: 56 }}>
            <Stat label="No-show" value="0 kr" />
            <Stat label="Garanti" value="14 dage" />
            <Stat label="Setup" value="5.000 kr" />
          </div>
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#52b788",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>Pay-per-show</span>
            <span>→</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span
        style={{
          fontSize: 13,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          opacity: 0.45,
          display: "flex",
        }}
      >
        {label}
      </span>
      <span style={{ fontSize: 32, fontWeight: 500, display: "flex" }}>
        {value}
      </span>
    </div>
  );
}
