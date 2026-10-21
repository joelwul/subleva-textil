import { ImageResponse } from "next/og";
export const alt = "Subleva Textil — Diseño, producción y comunidad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 76, background: "#f0e8d4", color: "#252322", position: "relative" }}><div style={{ position: "absolute", width: 460, height: 460, border: "2px solid #b6afd7", borderRadius: 230, right: 65, top: 85, display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: 340, height: 340, borderRadius: 170, background: "#252322", color: "#f0e8d4", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontSize: 52, fontWeight: 900 }}>SUBLEVA<span style={{ color: "#b6afd7", fontSize: 20, marginTop: 10, letterSpacing: 8 }}>TEXTIL</span></div></div><div style={{ fontSize: 20, letterSpacing: 6, fontWeight: 700 }}>COOPERATIVA TEXTIL · SAN MARTÍN</div><div style={{ display: "flex", flexDirection: "column", fontSize: 65, fontWeight: 900, lineHeight: 1.04, marginTop: 35, maxWidth: 660 }}>Todo vuelve:<br/>los materiales,<br/>los saberes, el trabajo.</div><div style={{ fontSize: 22, marginTop: 28 }}>Diseño · Producción · Comunidad</div></div>, size);
}
