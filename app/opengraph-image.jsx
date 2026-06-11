import { ImageResponse } from "next/og";

export const alt = "BSC Portfolio — Structural Engineer & Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F5F4F0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo + label */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "52px" }}>
          <div
            style={{
              width: "52px", height: "52px",
              border: "2.5px solid #1A1A1A",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "22px", fontWeight: "700", color: "#1A1A1A",
            }}
          >
            B
          </div>
          <span style={{ fontSize: "22px", fontWeight: "700", color: "#1A1A1A", letterSpacing: "0.08em" }}>
            BSC
          </span>
          <span style={{ fontSize: "14px", color: "#9B9B96", fontFamily: "monospace", marginLeft: "8px", letterSpacing: "0.1em" }}>
            CIVIL DEV HYBRID
          </span>
        </div>

        {/* Headline — flex column replaces <br /> */}
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "28px" }}>
          <span style={{ fontSize: "72px", fontWeight: "800", color: "#1A1A1A", lineHeight: "1.1", letterSpacing: "-0.03em" }}>
            Engineering Logic.
          </span>
          <span style={{ fontSize: "72px", fontWeight: "800", color: "#1D4ED8", lineHeight: "1.1", letterSpacing: "-0.03em" }}>
            Digital Engineering.
          </span>
        </div>

        {/* Tagline */}
        <div style={{ display: "flex", fontSize: "24px", color: "#6B6B66", maxWidth: "680px" }}>
          Structural Engineer × Developer · Arup, Taiwan
        </div>

        {/* URL */}
        <div
          style={{
            display: "flex",
            position: "absolute", bottom: "48px", left: "100px",
            fontSize: "15px", color: "#9B9B96", fontFamily: "monospace", letterSpacing: "0.06em",
          }}
        >
          bs-cportfolio.vercel.app
        </div>

        {/* Accent line bottom */}
        <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", height: "6px", background: "#1D4ED8" }} />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
