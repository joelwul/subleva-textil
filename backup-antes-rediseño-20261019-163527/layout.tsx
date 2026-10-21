import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subleva Textil | Diseño, producción y comunidad",
  description:
    "Cooperativa de diseño y producción textil en San Martín. Talleres, servicios, coworking, productos y economía circular.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
