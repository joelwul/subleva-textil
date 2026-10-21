import type { Metadata } from "next";
import { Shell, ContentPage, ContactCTA } from "@/components/Site";

export const metadata: Metadata = {
  title: "Los textiles pueden volver a empezar.",
  description: "Conocé el Punto Verde Textil de Subleva: materiales que recuperamos, horarios y cómo sumarte a la economía circular en San Martín.",
};

const materials = [
  "Paraguas en desuso",
  "Carpas rotas",
  "Sachets de leche limpios",
  "Ropa limpia que ya no uses, incluso si está rota",
];

export default function Page() {
  return (
    <Shell>
      <ContentPage
        eyebrow="PUNTO VERDE TEXTIL"
        title="Los textiles pueden volver a empezar."
        intro="Cada material recuperado abre una posibilidad. Sumate a una comunidad que transforma pequeños gestos en nuevas oportunidades."
      >
        <>
          <section className="detail-split">
            <div className="detail-image detail-green" role="img" aria-label="Materiales textiles y recursos para recuperar" />
            <div>
              <p className="eyebrow">UN CICLO CIRCULAR</p>
              <h2>Recibir. Clasificar. Reutilizar. Transformar. Devolver valor.</h2>
              <p>En el Punto Verde Textil recibimos materiales seleccionados para darles una nueva oportunidad y fortalecer una red local de recuperación y producción consciente.</p>
              <p>Cuando acercás materiales, sumás puntos que podés canjear por productos Revuelo.</p>
            </div>
          </section>

          <section className="pvt-materials" aria-labelledby="pvt-materials-title">
            <div className="pvt-materials-heading">
              <p className="eyebrow">QUÉ PODÉS TRAER</p>
              <h2 id="pvt-materials-title">Materiales que vuelven al circuito.</h2>
              <p>Traelos limpios cuando corresponda. Si tenés dudas sobre el estado o el tipo de material, escribinos antes de acercarte.</p>
            </div>
            <ul className="pvt-material-list">
              {materials.map((material, index) => (
                <li key={material}><span aria-hidden="true">0{index + 1}</span><strong>{material}</strong></li>
              ))}
            </ul>
          </section>

          <section className="pvt-visit" aria-labelledby="pvt-visit-title">
            <div>
              <p className="eyebrow">ACERCATE AL PUNTO VERDE</p>
              <h2 id="pvt-visit-title">Tu gesto suma.</h2>
              <p><strong>Miércoles y viernes · 10 a 15 h</strong></p>
              <p>Polo Disco de Oro, Córdoba 3420, San Martín, Buenos Aires.</p>
              <p>Porque creemos en el poder de las pequeñas acciones colectivas. Cada prenda que elegís no desechar y cada material que acercás es un gesto de cuidado hacia nuestra tierra y nuestra comunidad.</p>
              <a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=C%C3%B3rdoba+3420+San+Andr%C3%A9s+San+Mart%C3%ADn+Buenos+Aires" target="_blank" rel="noreferrer">Cómo llegar <span aria-hidden="true">↗</span></a>
            </div>
            <aside className="pvt-visit-note">
              <span className="pvt-note-mark" aria-hidden="true">↻</span>
              <p className="eyebrow">ECONOMÍA CIRCULAR</p>
              <h3>Juntes podemos transformar nuestro futuro.</h3>
              <p>¿Te sumás a construir una comunidad más consciente?</p>
              <a className="text-link" href="https://wa.me/5491123986949?text=Hola%2C%20quiero%20sumarme%20al%20Punto%20Verde%20Textil." target="_blank" rel="noreferrer">Contactar al Punto Verde <span aria-hidden="true">↗</span></a>
            </aside>
          </section>

          <div className="pvt-actions">
            <a href="https://wa.me/5491123986949?text=Hola%2C%20quiero%20acercar%20materiales%20al%20Punto%20Verde%20Textil." target="_blank" rel="noreferrer">
              <span>01</span><h2>Tengo textiles para acercar ↗</h2><p>Consultá por materiales y condiciones de entrega.</p>
            </a>
            <a href="https://wa.me/5491124078491?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20Subleva%20Textil." target="_blank" rel="noreferrer">
              <span>02</span><h2>Quiero ser parte de la comunidad ↗</h2><p>Conversemos sobre cómo participar y colaborar.</p>
            </a>
          </div>
        </>
        <ContactCTA title="Cada material cuenta." text="Escribinos y te orientamos para que puedas sumarte al circuito." message="Hola, quiero conocer más sobre el Punto Verde Textil." />
      </ContentPage>
    </Shell>
  );
}
