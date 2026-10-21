import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Subleva Textil | Diseño, producción y comunidad",
    template: "%s | Subleva Textil",
  },
  description:
    "Cooperativa de diseño y producción textil en San Martín. Talleres, servicios, coworking, productos y economía circular.",
  openGraph: {
    title: "Subleva Textil | Diseño, producción y comunidad",
    description: "Todo vuelve: los materiales, los saberes, el trabajo.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-AR"><body>{children}</body></html>;
}
