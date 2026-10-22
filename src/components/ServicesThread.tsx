"use client";

import { useState } from "react";

const steps = [
  { id: "idea", symbol: "✳", title: "ESCUCHAR", phrase: "Toda producción empieza por entender qué querés hacer.", x: 16, y: 24 },
  { id: "design", symbol: "✂", title: "DISEÑAR", phrase: "La idea toma forma cuando encontramos su lenguaje y su estructura.", x: 43, y: 12 },
  { id: "pattern", symbol: "⌗", title: "DESARROLLAR", phrase: "La moldería y las pruebas convierten una intención en un plan posible.", x: 78, y: 29 },
  { id: "sew", symbol: "⌁", title: "PRODUCIR", phrase: "El oficio, las máquinas y las manos hacen que suceda.", x: 66, y: 69 },
  { id: "finish", symbol: "◌", title: "AFINAR", phrase: "Cada terminación importa: ajustar también es cuidar.", x: 29, y: 80 },
];

export default function ServicesThread() {
  const [active, setActive] = useState(1);
  const selected = steps[active];
  return <div className="services-experience" aria-label="Explorá las etapas de una idea a la producción">
    <div className="services-graphic">
      <svg className="services-embroidery" viewBox="0 0 520 440" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <path className="embroidery-shadow" d="M85 111 C130 34 229 34 262 87 S387 74 428 151 S401 292 324 302 S247 414 160 357 S69 249 128 211 S351 175 366 237 S255 278 199 222 S151 147 211 126 S344 125 352 175"/>
        <path className="embroidery-line" d="M85 111 C130 34 229 34 262 87 S387 74 428 151 S401 292 324 302 S247 414 160 357 S69 249 128 211 S351 175 366 237 S255 278 199 222 S151 147 211 126 S344 125 352 175"/>
        <path className="embroidery-branch" d="M128 211 C88 187 76 161 85 111 M324 302 C365 336 386 360 380 388 M262 87 C253 61 260 42 280 28"/>
      </svg>
      <div className="services-center-note"><span>UN RECORRIDO<br/>COMPARTIDO</span><b>{String(active + 1).padStart(2, "0")} / 05</b></div>
      {steps.map((step, i) => <button key={step.id} type="button" className={`services-step ${active === i ? "is-active" : ""}`} style={{ left: `${step.x}%`, top: `${step.y}%` }} onClick={() => setActive(i)} aria-pressed={active === i} aria-label={`${step.title}: ${step.phrase}`}><span className="services-step-symbol">{step.symbol}</span><span className="services-step-label">{step.title}</span></button>)}
      <div className="services-thread-end" aria-hidden="true">⌁</div>
    </div>
    <div className="services-insight" aria-live="polite"><span className="services-insight-index">ETAPA {String(active + 1).padStart(2, "0")}</span><h3>{selected.title}</h3><p>{selected.phrase}</p><div className="services-insight-progress"><span style={{ width: `${(active + 1) / steps.length * 100}%` }} /></div><div className="services-step-controls"><button type="button" onClick={() => setActive((active + steps.length - 1) % steps.length)} aria-label="Etapa anterior">←</button><button type="button" onClick={() => setActive((active + 1) % steps.length)} aria-label="Etapa siguiente">→</button></div></div>
  </div>;
}
