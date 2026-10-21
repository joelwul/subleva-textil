import { ImageResponse } from "next/og";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 32, background: "#252322", color: "#f0e8d4", fontSize: 44, fontWeight: 900 }}>S<span style={{ color: "#b6afd7", fontSize: 16 }}>✳</span></div>, size);
}
