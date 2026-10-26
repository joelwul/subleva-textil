import Link from "next/link";

const WA = "https://wa.me/5491124078491?text=";
const stitch = "M0 12 C8 2 16 22 24 12 S40 2 48 12 S64 22 72 12 S88 2 96 12 S112 22 120 12 S136 2 144 12 S160 22 168 12 S184 2 192 12 S208 22 216 12 S232 2 240 12 S256 22 264 12 S280 2 288 12 S304 22 312 12 S328 2 336 12 S352 22 360 12";

function Stitch() {
  return <svg className="workshop-stitch" viewBox="0 0 360 24" preserveAspectRatio="none" aria-hidden="true"><path d={stitch}/></svg>;
}

export default function WorkshopCards({ compact = false }: { compact?: boolean }) {
  return <div className={`workshop-grid ${compact ? "workshop-grid-compact" : ""}`}>
    <article className="workshop-flyer workshop-flyer-molderia">
      <div className="workshop-photo workshop-photo-molderia" role="img" aria-label="Mesa de trabajo con moldes y herramientas textiles"><span className="workshop-sticker">TALLER<br/>REGULAR</span></div>
      <div className="workshop-paper"><p className="workshop-category">MOLDERÍA · DISEÑO</p><h3>MOLDERÍA<br/><em>PERSONALIZADA</em></h3><Stitch/><div className="workshop-details"><span>MIÉRCOLES Y VIERNES</span><strong>9 A 11:30 H</strong><span>VIERNES</span><strong>12 A 14:30 H</strong></div><p className="workshop-description">Aprendé las bases de la moldería, cómo se construyen las prendas a partir del molde y a trabajar con tablas de talles. Vas a conocer moldería industrial y a medida, y terminar desarrollando un molde básico de cuerpo superior.</p><a className="workshop-action" href={`${WA}${encodeURIComponent("Hola, quiero consultar por Moldería personalizada.")}`} target="_blank" rel="noreferrer">CONSULTAR CUPOS <span>↗</span></a></div>
    </article>
    <article className="workshop-flyer workshop-flyer-costura">
      <div className="workshop-photo workshop-photo-costura" role="img" aria-label="Manos aprendiendo a coser en una máquina"><span className="workshop-vertical-note">APRENDER HACIENDO</span></div>
      <div className="workshop-paper workshop-paper-lilac"><p className="workshop-category">COSTURA · INICIACIÓN</p><h3>COSTURA<br/><em>INICIAL</em></h3><Stitch/><div className="workshop-details"><span>LUNES</span><strong>10:30 A 13 H</strong></div><p className="workshop-description">Una primera aproximación a la costura: conocé la máquina recta, sus funciones y técnicas básicas. Practicá las primeras costuras y terminá confeccionando un accesorio.</p><a className="workshop-action" href={`${WA}${encodeURIComponent("Hola, quiero consultar por Costura inicial.")}`} target="_blank" rel="noreferrer">CONSULTAR CUPOS <span>↗</span></a></div>
    </article>
    <article className="workshop-flyer workshop-flyer-tintes">
      <div className="workshop-photo workshop-photo-tintes" role="img" aria-label="Telas teñidas con pigmentos naturales, hojas y recipientes de tintura"><span className="workshop-photo-label">COLOR QUE<br/>VIENE DE LA TIERRA</span></div>
      <div className="workshop-paper workshop-paper-tintes"><p className="workshop-category">PRESENCIAL · EXPERIMENTACIÓN</p><h3>TALLER DE<br/><em>TINTES NATURALES</em></h3><Stitch/><div className="workshop-date-block"><span>28 DE ENERO</span><strong>9 A 13 H</strong></div><p className="workshop-description">Explorar el color a partir de materiales naturales y descubrir las huellas que dejan sobre la tela.</p><p className="workshop-location">SAN ANDRÉS · BUENOS AIRES</p><a className="workshop-action" href="https://www.instagram.com/subleva_textil/" target="_blank" rel="noreferrer">CONSULTANOS POR DM <span>↗</span></a><small className="workshop-confirmation">Fecha y próxima edición a confirmar con Subleva.</small></div>
    </article>
  </div>;
}
