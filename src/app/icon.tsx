import { ImageResponse } from "next/og";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#f8f7f3", color: "#20221f", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 42, fontWeight: 800, letterSpacing: -4, borderRadius: 14 }}>a<span style={{ color: "#3c50d9" }}>.</span></div>, size);
}
