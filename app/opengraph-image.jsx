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

        {/* Headline */}
        <div
          style={{
            fontSize: "72px", fontWeight: "800", color: "#1A1A1A",
            lineHeight: "1.05", marginBottom: "28px", letterSpacing: "-0.03em",
          }}
        >
          Engineering Logic.
          <br />
          <span style={{ color: "#1D4ED8" }}>Digital Engineering.</span>
        </div>

        {/* Tagline */}
        <div style={{ fontSize: "24px", color: "#6B6B66", maxWidth: "680px", lineHeight: "1.5" }}>
          Structural Engineer × Developer · Arup, Taiwan
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute", bottom: "48px", left: "100px",
            fontSize: "15px", color: "#9B9B96", fontFamily: "monospace", letterSpacing: "0.06em",
          }}
        >
          bs-cportfolio.vercel.app
        </div>

        {/* Decorative nodes — structural arch silhouette */}
        <div style={{ position: "absolute", right: "80px", top: "0", bottom: "0", display: "flex", alignItems: "center", opacity: "0.07" }}>
          <div style={{ position: "relative", width: "320px", height: "320px" }}>
            {/* Bottom chord */}
            <div style={{ position: "absolute", bottom: "60px", left: "0", right: "0", height: "2px", background: "#1A1A1A" }} />
            {/* Arch chord approximation with node dots */}
            {[
              { left: "0px",    bottom: "60px",  size: "10px" },
              { left: "45px",   bottom: "128px", size: "8px"  },
              { left: "100px",  bottom: "186px", size: "8px"  },
              { left: "160px",  bottom: "210px", size: "10px" },
              { left: "220px",  bottom: "186px", size: "8px"  },
              { left: "275px",  bottom: "128px", size: "8px"  },
              { left: "320px",  bottom: "60px",  size: "10px" },
            ].map((node, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: node.left, bottom: node.bottom,
                  width: node.size, height: node.size,
                  borderRadius: "50%", background: "#1D4ED8",
                  transform: "translate(-50%, 50%)",
                }}
              />
            ))}
            {/* Verticals */}
            {[
              { left: "45px",  height: "68px",  bottom: "60px" },
              { left: "100px", height: "126px", bottom: "60px" },
              { left: "160px", height: "150px", bottom: "60px" },
              { left: "220px", height: "126px", bottom: "60px" },
              { left: "275px", height: "68px",  bottom: "60px" },
            ].map((v, i) => (
              <div
                key={i}
                style={{
                  position: "absolute", left: v.left, bottom: v.bottom,
                  width: "2px", height: v.height, background: "#1D4ED8",
                  transform: "translateX(-50%)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Accent line bottom */}
        <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", height: "6px", background: "#1D4ED8" }} />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
