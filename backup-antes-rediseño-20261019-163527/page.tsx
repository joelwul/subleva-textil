const doors = [
  { n: "01", title: "Aprender", desc: "Talleres y formación", href: "#talleres", tone: "lilac" },
  { n: "02", title: "Producir", desc: "Servicios y asesorías", href: "#servicios", tone: "sand" },
  { n: "03", title: "Trabajar en el taller", desc: "Coworking textil", href: "#coworking", tone: "dark" },
  { n: "04", title: "Devolver textiles", desc: "Punto Verde Textil", href: "#punto-verde", tone: "sage" },
  { n: "05", title: "Comprar", desc: "Revuelo y Maqui", href: "#productos", tone: "lilac" },
];

const photos = [
  { src: "photo-1558618666-fcd25c85cd64", alt: "Textiles y materiales de trabajo" },
  { src: "photo-1558618047-3c8c76ca7d13", alt: "Trabajo artesanal con telas" },
  { src: "photo-1520004434532-668416a08753", alt: "Texturas textiles" },
  { src: "photo-1590736969955-71cc94901144", alt: "Prendas y tejidos" },
  { src: "photo-1551232864-3f0890e580d9", alt: "Indumentaria y diseño" },
  { src: "photo-1558618047-3c8c76ca7d13", alt: "Herramientas textiles" },
];

function photoUrl(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=85`;
}

function WhatsAppLink({ children, message = "Hola, quisiera conocer más sobre Subleva Textil." }: { children: React.ReactNode; message?: string }) {
  return (
    <a
      className="button button-dark"
      href={`https://wa.me/5491124078491?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Subleva Textil, inicio">
          <span className="brand-mark">S<span>✳</span></span>
          <span className="brand-name">SUBLEVA<small>TEXTIL</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#nosotras">Quiénes somos</a>
          <a href="#productos">Productos</a>
          <a href="#talleres">Talleres</a>
          <a href="#servicios">Servicios</a>
          <a href="#coworking">Coworking</a>
          <a href="#punto-verde">Punto Verde Textil</a>
        </nav>
        <WhatsAppLink>Escribinos</WhatsAppLink>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-shape hero-shape-lilac" />
        <div className="hero-shape hero-shape-sage" />
        <div className="hero-shape hero-shape-sand" />
        <div className="hero-note note-left">MATERIALES <span>↗</span></div>
        <div className="hero-note note-right">TRANSFORMACIÓN <span>↗</span></div>

        <div className="hero-orbit" aria-label="Fotografías de referencia de textiles, diseño y trabajo artesanal">
          <div className="orbit-track">
            {photos.map((photo, i) => (
              <div
                className={`orbit-photo orbit-photo-${i + 1}`}
                key={`${photo.src}-${i}`}
                style={{ backgroundImage: `url("${photoUrl(photo.src)}")` }}
                role="img"
                aria-label={photo.alt}
              />
            ))}
          </div>
          <div className="hero-core">
            <div className="hero-symbol">S<span>✳</span></div>
            <p className="eyebrow hero-eyebrow">COOPERATIVA TEXTIL</p>
            <h1>Todo vuelve:<br />los materiales,<br />los saberes,<br />el trabajo.</h1>
            <p className="hero-description">
              Cooperativa de diseño y producción textil en San Martín,
              con compromiso social y ambiental.
            </p>
            <a className="button button-lilac" href="#caminos">¿Qué estás buscando? <span>↓</span></a>
            <a className="hero-whatsapp" href="https://wa.me/5491124078491" target="_blank" rel="noreferrer">
              ◉ Escribinos por WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-bottom-label">DISEÑO · PRODUCCIÓN · COMUNIDAD</div>
      </section>

      <section className="doors-section section-pad" id="caminos">
        <div className="doors-intro">
          <p className="eyebrow">ENCONTRÁ TU CAMINO</p>
          <h2>Cinco puertas,<br />un mismo propósito.</h2>
          <p>En Subleva hay muchas formas de participar. Elegí la que va con vos y descubrí todo lo que podemos hacer juntas.</p>
        </div>
        <div className="door-grid">
          {doors.map((door) => (
            <a className={`door-card ${door.tone}`} href={door.href} key={door.n}>
              <span className="door-number">{door.n}</span>
              <span className="door-symbol" aria-hidden="true">
                {door.n === "01" ? "⌘" : door.n === "02" ? "⌁" : door.n === "03" ? "▤" : door.n === "04" ? "↻" : "◯"}
              </span>
              <h3>{door.title}</h3>
              <p>{door.desc}</p>
              <span className="door-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="story-section" id="nosotras">
        <div className="story-image" role="img" aria-label="Manos trabajando con telas y materiales textiles" />
        <div className="story-copy">
          <p className="eyebrow">QUIÉNES SOMOS</p>
          <h2>Una cooperativa<br />que teje comunidad.</h2>
          <p>Somos Subleva Textil, una cooperativa de diseño y producción textil que nace en San Martín para transformar el presente y construir un futuro más justo y sostenible.</p>
          <p>Creemos en el trabajo colaborativo, la autogestión y en nuevas formas de producir que cuiden a las personas y al ambiente.</p>
          <a className="text-link" href="mailto:sublevatextil@gmail.com">Conocé nuestra historia <span>↗</span></a>
        </div>
        <div className="values-list">
          <p><span>↻</span> Cooperativa</p>
          <p><span>◌</span> Economía circular</p>
          <p><span>⌖</span> Trabajo local</p>
          <p><span>♧</span> Compromiso ambiental</p>
          <p><span>◎</span> Red comunitaria</p>
        </div>
      </section>

      <section className="split-section section-pad" id="talleres">
        <div className="section-heading">
          <div><p className="eyebrow">COMPARTIR SABERES</p><h2>Talleres para hacer, aprender y transformar.</h2></div>
          <a className="text-link" href="https://wa.me/5491124078491?text=Hola%2C%20quiero%20consultar%20por%20los%20talleres." target="_blank" rel="noreferrer">Consultar talleres ↗</a>
        </div>
        <div className="content-cards">
          <article className="content-card">
            <div className="card-image workshop-image-one" role="img" aria-label="Materiales para un taller textil" />
            <div className="card-body">
              <p className="eyebrow">MOLDERÍA</p>
              <h3>Moldería personalizada</h3>
              <p>Miércoles y viernes · 9 a 11:30 h<br />Viernes · 12 a 14:30 h</p>
              <a className="text-link" href="https://wa.me/5491124078491?text=Hola%2C%20quiero%20consultar%20por%20Molder%C3%ADa%20personalizada." target="_blank" rel="noreferrer">Quiero participar ↗</a>
            </div>
          </article>
          <article className="content-card">
            <div className="card-image workshop-image-two" role="img" aria-label="Máquina de coser en un taller" />
            <div className="card-body">
              <p className="eyebrow">COSTURA</p>
              <h3>Costura inicial</h3>
              <p>Lunes · 10:30 a 13 h</p>
              <a className="text-link" href="https://wa.me/5491124078491?text=Hola%2C%20quiero%20consultar%20por%20Costura%20inicial." target="_blank" rel="noreferrer">Quiero participar ↗</a>
            </div>
          </article>
        </div>
        <p className="small-note">Fechas, cupos y valores se confirman por consulta. La programación de talleres se podrá administrar desde el panel.</p>
      </section>

      <section className="products-section section-pad" id="productos">
        <div className="section-heading">
          <div><p className="eyebrow">HECHO CON INTENCIÓN</p><h2>Objetos con otra historia.</h2></div>
          <a className="text-link" href="https://wa.me/5491124078491?text=Hola%2C%20quiero%20conocer%20los%20productos%20de%20Subleva." target="_blank" rel="noreferrer">Consultar productos ↗</a>
        </div>
        <div className="product-grid">
          <article className="product-card">
            <div className="product-image product-revuelo" role="img" aria-label="Bolso textil confeccionado con materiales recuperados" />
            <div className="product-meta"><p className="eyebrow">MATERIALES RECUPERADOS</p><h3>Revuelo</h3><p>Producir es político. Textiles hechos para durar y volver a usarse.</p><a className="text-link" href="https://wa.me/5491124078491?text=Hola%2C%20quiero%20consultar%20por%20Revuelo." target="_blank" rel="noreferrer">Consultar por Revuelo ↗</a></div>
          </article>
          <article className="product-card">
            <div className="product-image product-maqui" role="img" aria-label="Prendas de algodón con tintes naturales" />
            <div className="product-meta"><p className="eyebrow">TINTES NATURALES</p><h3>Maqui</h3><p>Indumentaria y accesorios en algodón, teñidos mediante procesos artesanales.</p><a className="text-link" href="https://wa.me/5491124078491?text=Hola%2C%20quiero%20consultar%20por%20Maqui." target="_blank" rel="noreferrer">Consultar por Maqui ↗</a></div>
          </article>
        </div>
      </section>

      <section className="services-section section-pad" id="servicios">
        <div className="services-intro">
          <p className="eyebrow">DE LA IDEA AL PRODUCTO</p>
          <h2>Tu proyecto textil, acompañado de principio a fin.</h2>
          <p>Integramos diseño, desarrollo, producción y asesoramiento para emprendedores, marcas y proyectos.</p>
          <WhatsAppLink message="Hola, quiero consultar por los servicios textiles de Subleva.">Hablemos de tu proyecto</WhatsAppLink>
        </div>
        <div className="service-list">
          {["Diseño textil", "Moldería", "Corte", "Confección", "Bordado", "Diseño de estampas para serigrafía y sublimación", "Serigrafía", "Asesoramiento a emprendedores y proyectos textiles"].map((service, i) => (
            <a href={`https://wa.me/5491124078491?text=${encodeURIComponent(`Hola, quiero consultar por ${service}.`)}`} target="_blank" rel="noreferrer" key={service}>
              <span>0{i + 1}</span><strong>{service}</strong><span>↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="coworking-section" id="coworking">
        <div className="coworking-image" role="img" aria-label="Espacio de trabajo textil con máquinas y herramientas" />
        <div className="coworking-copy">
          <p className="eyebrow">TU ESPACIO DE TRABAJO</p>
          <h2>Un taller compartido.<br />Muchas posibilidades.</h2>
          <p>Un espacio equipado para quienes ya tienen conocimientos de costura y moldería y necesitan infraestructura para desarrollar sus proyectos textiles.</p>
          <ul><li>Máquina recta industrial</li><li>Overlock, collareta y triple arrastre</li><li>Mesa de corte y herramientas</li><li>Hilos básicos y agujas</li></ul>
          <WhatsAppLink message="Hola, quiero consultar modalidades, disponibilidad y tarifas del coworking textil.">Consultar disponibilidad</WhatsAppLink>
        </div>
      </section>

      <section className="green-section section-pad" id="punto-verde">
        <div className="green-copy">
          <p className="eyebrow">PUNTO VERDE TEXTIL</p>
          <h2>Un ciclo que<br />genera valor.</h2>
          <p>Recibimos, clasificamos, reutilizamos y transformamos textiles para impulsar formas de producción más responsables.</p>
          <a className="button button-outline" href="mailto:sublevatextil@gmail.com?subject=Consulta%20Punto%20Verde%20Textil">Conocé más ↗</a>
        </div>
        <div className="cycle">
          <div className="cycle-step cycle-top"><span>▤</span><strong>CLASIFICAR</strong></div>
          <div className="cycle-step cycle-right"><span>↻</span><strong>REUTILIZAR</strong></div>
          <div className="cycle-step cycle-bottom"><span>⌁</span><strong>TRANSFORMAR</strong></div>
          <div className="cycle-step cycle-left"><span>♧</span><strong>DEVOLVER VALOR</strong></div>
          <span className="cycle-arrow arrow-one">↗</span><span className="cycle-arrow arrow-two">↘</span><span className="cycle-arrow arrow-three">↙</span><span className="cycle-arrow arrow-four">↖</span>
        </div>
        <div className="green-cta">
          <h3>¿Querés ser parte?</h3>
          <a href="mailto:sublevatextil@gmail.com?subject=Quiero%20acercar%20textiles">Tengo textiles para acercar ↗</a>
          <a href="mailto:sublevatextil@gmail.com?subject=Quiero%20ser%20Punto%20Verde%20Textil">Mi organización quiere ser PVT ↗</a>
        </div>
      </section>

      <section className="contact-strip">
        <div><p className="eyebrow">HAGAMOS ALGO JUNTAS</p><h2>Las buenas ideas<br />se hacen en comunidad.</h2></div>
        <WhatsAppLink>Empezar una conversación</WhatsAppLink>
      </section>

      <footer className="site-footer" id="contacto">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand brand-light" href="#inicio"><span className="brand-mark">S<span>✳</span></span><span className="brand-name">SUBLEVA<small>TEXTIL</small></span></a>
            <p>Diseño · Producción · Comunidad</p>
          </div>
          <div><h3>Contacto</h3><p>Córdoba 3420, San Andrés<br />San Martín, Buenos Aires</p><a href="https://wa.me/5491124078491" target="_blank" rel="noreferrer">11 2407-8491 · Cele</a><a href="https://wa.me/5491123986949" target="_blank" rel="noreferrer">11 2398-6949 · Sol</a><a href="mailto:sublevatextil@gmail.com">sublevatextil@gmail.com</a></div>
          <div><h3>Explorá</h3><a href="#nosotras">Quiénes somos</a><a href="#productos">Productos</a><a href="#talleres">Talleres</a><a href="#servicios">Servicios</a><a href="#coworking">Coworking</a><a href="#punto-verde">Punto Verde Textil</a></div>
          <div><h3>Seguinos</h3><a href="https://www.instagram.com/subleva_textil/" target="_blank" rel="noreferrer">@subleva_textil ↗</a><p>Trabajo cooperativo, producción consciente y comunidad.</p></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Subleva Textil</span><span>Una cooperativa de diseño y producción textil.</span><a href="mailto:sublevatextil@gmail.com?subject=Consulta%20sobre%20privacidad">Privacidad y consultas</a></div>
      </footer>
    </main>
  );
}
