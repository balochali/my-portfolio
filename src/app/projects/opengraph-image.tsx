import { ImageResponse } from "next/og";
import { business } from "@/data/business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Ali Baloch — Project portfolio";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f8f7f3",
        color: "#20221f",
        padding: 70,
        border: "18px solid #20221f",
      }}
    >
      <div style={{ display: "flex", fontSize: 30 }}>
        {business.name} · Project portfolio
      </div>
      <div style={{ display: "flex", fontSize: 78, fontWeight: 800 }}>
        From storefronts to daily operations.
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 28,
          background: "#dce9a5",
          padding: 20,
        }}
      >
        {business.tagline}
      </div>
    </div>,
    size,
  );
}
