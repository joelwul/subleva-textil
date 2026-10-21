"use client";

import { useRef } from "react";

export default function ServicesThread() {
  const ref = useRef<HTMLDivElement>(null);
  const move = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (event.clientX - r.left) / r.width - .5;
    const y = (event.clientY - r.top) / r.height - .5;
    el.style.setProperty("--pointer-x", `${x * 18}px`);
    el.style.setProperty("--pointer-y", `${y * 18}px`);
    el.style.setProperty("--pointer-rotate", `${x * 5}deg`);
  };
  const reset = () => { const el = ref.current; if (!el) return; el.style.setProperty("--pointer-x", "0px"); el.style.setProperty("--pointer-y", "0px"); el.style.setProperty("--pointer-rotate", "0deg"); };
  return <div ref={ref} className="services-stamp" onPointerMove={move} onPointerLeave={reset} onPointerUp={reset} aria-label="Recorrido interactivo de servicios textiles">
    <svg className="thread-path" viewBox="0 0 320 320" aria-hidden="true"><path d="M160 18 C270 35 294 120 245 160 S70 190 82 250 S225 295 272 222 S250 70 160 80 S45 160 160 190 S250 160 160 18"/></svg>
    <span>ASESORÍAS Y SERVICIOS</span><b className="tool-scissors">✂</b><b className="tool-needle">↗</b><b className="tool-machine">▤</b><small>DE LA IDEA A LA PRODUCCIÓN</small>
  </div>;
}
