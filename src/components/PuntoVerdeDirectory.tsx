"use client";

import { useMemo, useState } from "react";

const points = [
  { id: 1, name: "PVT La Trama", address: "Av. 25 de Mayo 1840, San Martín", phone: "11 5555-0101", materials: ["Ropa limpia", "Retazos de algodón", "Denim"], zone: "San Martín" },
  { id: 2, name: "Punto Circular Ballester", address: "Alvear 2260, Villa Ballester", phone: "11 5555-0102", materials: ["Retazos", "Sábanas", "Toallas"], zone: "Villa Ballester" },
  { id: 3, name: "Colectivo Hilván", address: "Belgrano 950, San Andrés", phone: "11 5555-0103", materials: ["Ropa en desuso", "Lana", "Tejidos"], zone: "San Andrés" },
  { id: 4, name: "Estación Textil Chilavert", address: "Mitre 3120, Chilavert", phone: "11 5555-0104", materials: ["Denim", "Lonas", "Retazos resistentes"], zone: "Chilavert" },
  { id: 5, name: "Red Retazo José León Suárez", address: "9 de Julio 4280, José León Suárez", phone: "11 5555-0105", materials: ["Algodón", "Prendas rotas limpias", "Retazos"], zone: "José León Suárez" },
  { id: 6, name: "Taller Segunda Vuelta", address: "Int. Casares 740, San Martín", phone: "11 5555-0106", materials: ["Ropa limpia", "Cortinas", "Sábanas"], zone: "San Martín" },
  { id: 7, name: "Punto Textil Suárez", address: "J. M. Campos 5210, José León Suárez", phone: "11 5555-0107", materials: ["Lonas", "Denim", "Retazos gruesos"], zone: "José León Suárez" },
];

export default function PuntoVerdeDirectory() {
  const [zone, setZone] = useState("Todos");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<number | null>(1);
  const zones = ["Todos", ...Array.from(new Set(points.map((point) => point.zone)))];
  const filtered = useMemo(() => points.filter((point) =>
    (zone === "Todos" || point.zone === zone) &&
    (point.name + " " + point.address + " " + point.materials.join(" ")).toLowerCase().includes(query.toLowerCase())
  ), [zone, query]);

  return <section className="pvt-directory" aria-labelledby="pvt-directory-title">
    <div className="pvt-directory-heading">
      <p className="eyebrow">GUÍA INTERACTIVA · RED DE RECUPERACIÓN</p>
      <h2 id="pvt-directory-title">Encontrá un punto verde textil.</h2>
      <p>Consultá qué materiales recibe cada espacio y contactalo antes de acercarte.</p>
      <p className="pvt-demo-notice"><strong>Prototipo:</strong> los 7 puntos, direcciones, teléfonos y materiales que aparecen abajo son ficticios y deberán reemplazarse por datos confirmados antes de publicar la guía.</p>
    </div>
    <div className="pvt-directory-tools">
      <label className="pvt-search"><span>Buscar por punto o material</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ej. denim, ropa, retazos…" /></label>
      <div className="pvt-zone-filters" aria-label="Filtrar por zona">{zones.map((item) => <button key={item} className={zone === item ? "is-active" : ""} onClick={() => setZone(item)}>{item}</button>)}</div>
    </div>
    <div className="pvt-directory-grid">{filtered.map((point) => <article className={expanded === point.id ? "pvt-point-card is-expanded" : "pvt-point-card"} key={point.id}>
      <button className="pvt-point-toggle" onClick={() => setExpanded(expanded === point.id ? null : point.id)} aria-expanded={expanded === point.id}>
        <span className="pvt-point-number">{String(point.id).padStart(2, "0")}</span><span className="pvt-point-title"><strong>{point.name}</strong><small>{point.zone}</small></span><span className="pvt-point-chevron">{expanded === point.id ? "−" : "+"}</span>
      </button>
      {expanded === point.id && <div className="pvt-point-details">
        <p><span>Dirección</span>{point.address}</p><p><span>Teléfono</span>{point.phone}</p>
        <div className="pvt-material-tags"><span>Recibe</span><div>{point.materials.map((material) => <i key={material}>{material}</i>)}</div></div>
        <a href={`https://wa.me/549${point.phone.replace(/\D/g, "").replace(/^549/, "")}?text=${encodeURIComponent("Hola, quería consultar qué materiales textiles reciben y en qué horarios.")}`} target="_blank" rel="noreferrer">Consultar recepción ↗</a>
      </div>}
    </article>)}</div>
    {!filtered.length && <p className="pvt-no-results">No encontramos puntos con esa búsqueda. Probá con otro material o zona.</p>}
  </section>;
}
