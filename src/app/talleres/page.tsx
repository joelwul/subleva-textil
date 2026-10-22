import type { Metadata } from "next";
import { Shell, ContentPage, ContactCTA } from "@/components/Site";
import WorkshopCards from "@/components/WorkshopCards";
export const metadata: Metadata = { title: "Talleres · Aprender haciendo" };
export default function Page() { return <Shell><ContentPage eyebrow="TALLERES Y FORMACIÓN" title="Aprender haciendo." intro="Espacios para adquirir herramientas, explorar técnicas y compartir saberes textiles. Cada encuentro abre una forma distinta de experimentar con los materiales."><><WorkshopCards /><p className="small-note">Los cupos, valores, materiales incluidos y próximas ediciones se confirman directamente con el equipo de Subleva.</p></><ContactCTA title="¿Qué te gustaría aprender?" text="Escribinos y te contamos qué propuestas tienen cupos o cuándo vuelven a abrirse." message="Hola, quiero conocer los próximos talleres de Subleva Textil." /></ContentPage></Shell>; }
