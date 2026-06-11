import { ImageResponse } from "next/og";
import { getPostData } from "@/app/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }) {
  const { slug } = await params;
  const post = getPostData(slug);
  const title = post?.title ?? "Engineering Log";
  const date  = post?.date  ?? "";

  const titleFontSize = title.length > 60 ? "48px" : title.length > 40 ? "58px" : "68px";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#F5F4F0",
          width: "100%", height: "100%",
          display: "flex", flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 100px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Top: logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "44px", height: "44px", border: "2.5px solid #1A1A1A",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "18px", fontWeight: "700", color: "#1A1A1A",
            }}
          >
            B
          </div>
          <span style={{ fontSize: "18px", fontWeight: "700", color: "#1A1A1A", letterSpacing: "0.08em" }}>
            BSC
          </span>
          <span style={{ fontSize: "13px", color: "#9B9B96", fontFamily: "monospace", marginLeft: "6px", letterSpacing: "0.1em" }}>
            ENGINEERING LOG
          </span>
        </div>

        {/* Middle: post title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {date && (
            <div style={{ fontSize: "15px", color: "#9B9B96", fontFamily: "monospace", letterSpacing: "0.08em" }}>
              {date}
            </div>
          )}
          <div
            style={{
              fontSize: titleFontSize, fontWeight: "800", color: "#1A1A1A",
              lineHeight: "1.1", letterSpacing: "-0.025em", maxWidth: "960px",
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom: URL */}
        <div style={{ fontSize: "15px", color: "#9B9B96", fontFamily: "monospace", letterSpacing: "0.06em" }}>
          bs-cportfolio.vercel.app/blog
        </div>

        {/* Left accent bar */}
        <div style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "8px", background: "#1D4ED8" }} />

        {/* Bottom accent line */}
        <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", height: "6px", background: "#1D4ED8" }} />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
