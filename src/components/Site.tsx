import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";
import ServicesThread from "@/components/ServicesThread";

const WA = "5491124078491";
const msg = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="Subleva Textil, inicio">
    <span className="brand-image"><img src="/brand/subleva-logo.svg" alt="Subleva Textil" /></span>
  </Link>;
}

export function Header() {
  return <header className="site-header">
    <Logo />
    <nav className="desktop-nav" aria-label="Navegación principal">
      <Link href="/quienes-somos">Quiénes somos</Link><Link href="/productos">Productos</Link>
      <Link href="/talleres">Talleres</Link><Link href="/servicios">Servicios</Link>
      <Link href="/coworking">Coworking</Link><Link href="/punto-verde-textil">Punto Verde Textil</Link>
    </nav>
    <nav className="mobile-nav" aria-label="Navegación principal móvil"><Link href="/quienes-somos">Nosotros</Link><Link href="/productos">Productos</Link><Link href="/talleres">Talleres</Link><Link href="/servicios">Servicios</Link><Link href="/coworking">Coworking</Link><Link href="/punto-verde-textil">Punto Verde Textil</Link></nav>
    <a className="button button-dark header-cta" href={msg("Hola, quisiera conocer más sobre Subleva Textil.")} target="_blank" rel="noreferrer">Escribinos <span>↗</span></a>
  </header>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-main">
      <div><Logo light /><p>Diseño · Producción · Comunidad</p></div>
      <div><h3>Encontranos</h3><p>Córdoba 3420, San Andrés<br/>San Martín, Buenos Aires</p><a href={msg("Hola, Cele. Quisiera consultar por Subleva Textil.")} target="_blank" rel="noreferrer">11 2407-8491 · Cele</a><a href={msg("Hola, Sol. Quisiera consultar por Subleva Textil.").replace("5491124078491","5491123986949")} target="_blank" rel="noreferrer">11 2398-6949 · Sol</a><a href="mailto:sublevatextil@gmail.com">sublevatextil@gmail.com</a></div>
      <div><h3>Explorá</h3><Link href="/quienes-somos">Quiénes somos</Link><Link href="/productos">Productos</Link><Link href="/talleres">Talleres</Link><Link href="/servicios">Servicios</Link><Link href="/coworking">Coworking</Link><Link href="/punto-verde-textil">Punto Verde Textil</Link></div>
      <div><h3>Instagram</h3><a href="https://www.instagram.com/subleva_textil/" target="_blank" rel="noreferrer">@subleva_textil ↗</a><p>Trabajo cooperativo, producción consciente y comunidad.</p></div>
    </div>
    <div className="footer-bottom"><span>© 2026 Subleva Textil</span><span>Una cooperativa de diseño y producción textil.</span><a href="mailto:sublevatextil@gmail.com?subject=Consulta%20sobre%20privacidad">Privacidad y consultas</a></div>
    <div className="bp-credit"><span>Sitio web desarrollado por</span><a href="https://buenpuerto.online" target="_blank" rel="noreferrer" aria-label="Buen Puerto, donde lo digital y presencial se encuentran"><span className="bp-mark" aria-hidden="true"><i>BP</i><b>↗</b></span><span className="bp-copy"><strong>BUEN PUERTO</strong><small>Donde lo digital y presencial se encuentran.</small></span></a></div>
  </footer>;
}

export function Shell({ children }: { children: React.ReactNode }) {
  return <><ScrollToTop/><Header/>{children}<Footer/></>;
}

const doors = [
  { n:"01", title:"Aprender", desc:"Compartir saberes, probar técnicas y hacer con tus manos.", href:"/talleres", className:"door-lilac", symbol:"✳" },
  { n:"02", title:"Producir", desc:"Llevar una idea textil del primer boceto a la producción.", href:"/servicios", className:"door-sand", symbol:"⌁" },
  { n:"03", title:"Trabajar en el taller", desc:"Un espacio equipado para desarrollar tus proyectos.", href:"/coworking", className:"door-dark", symbol:"▤" },
  { n:"04", title:"Devolver textiles", desc:"Dar una nueva oportunidad a materiales y recursos.", href:"/punto-verde-textil", className:"door-sage", symbol:"↻" },
  { n:"05", title:"Comprar", desc:"Conocé Revuelo y Maqui: diseño con otra historia.", href:"/productos", className:"door-lilac", symbol:"◯" },
];

const cards = [
  { id:"talleres", eyebrow:"COMPARTIR SABERES", title:"Aprender haciendo.", text:"Talleres para desarrollar técnicas, ganar confianza y compartir el hacer.", href:"/talleres", cta:"Explorar talleres", image:"https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1100&q=85" },
  { id:"productos", eyebrow:"HECHO CON INTENCIÓN", title:"Objetos con otra historia.", text:"Revuelo y Maqui: dos caminos para pensar los materiales, el diseño y la producción.", href:"/productos", cta:"Ver productos", image:"https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=1100&q=85" },
];

export function HomePage() {
 return <main>
  <section className="hero" id="inicio">
    <div className="hero-wash wash-one"/><div className="hero-wash wash-two"/><div className="hero-wash wash-three"/>
    <div className="hero-micro hero-micro-left">DISEÑO<br/>CONSCIENTE <span>↗</span></div>
    <div className="hero-micro hero-micro-right">MATERIALES<br/>EN MOVIMIENTO <span>↙</span></div>
    <div className="orbit" aria-label="Fotografías textiles en movimiento">
      <div className="orbit-track">
        {[
          ["photo-1558618666-fcd25c85cd64","Textiles y materiales"],
          ["photo-1558618047-3c8c76ca7d13","Trabajo textil"],
          ["photo-1520004434532-668416a08753","Texturas y tejidos"],
          ["photo-1590736969955-71cc94901144","Diseño de indumentaria"],
          ["photo-1551232864-3f0890e580d9","Prendas y diseño"],
          ["photo-1452860606245-08befc0ff44b","Taller creativo"],
        ].map(([id,alt],i)=><div key={id+i} className={`orbit-photo orbit-photo-${i+1}`} style={{backgroundImage:`url(https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=90)`}} role="img" aria-label={alt}/>)}
      </div>
      <div className="hero-core">
        <div className="hero-monogram"><img src="/brand/subleva-logo.svg" alt="Subleva Textil"/><span>✳</span></div>
        <p className="hero-coop">COOPERATIVA TEXTIL</p><p className="hero-location">SAN MARTÍN · BUENOS AIRES</p>
        <h1>Todo vuelve:<br/><em>los materiales,</em><br/>los saberes,<br/>el trabajo.</h1>
        <p className="hero-description">Diseño y producción textil con compromiso social y ambiental.</p>
        <a className="button button-lilac hero-primary-cta" href={msg("Hola, quiero conversar sobre una idea o proyecto con Subleva Textil.")} target="_blank" rel="noreferrer">Hablemos de tu proyecto <span>↗</span></a>
      </div>
    </div>
    <div className="hero-bottom" aria-label="Trabajo cooperativo, economía circular y comunidad"><span>TRABAJO COOPERATIVO</span><span aria-hidden="true">✳</span><span>DISEÑO CONSCIENTE</span><span aria-hidden="true">✳</span><span>MATERIALES EN MOVIMIENTO</span><span aria-hidden="true">✳</span><span>ECONOMÍA CIRCULAR</span><span aria-hidden="true">✳</span><span>COMUNIDAD</span><span aria-hidden="true">✳</span><span aria-hidden="true">TRABAJO COOPERATIVO</span><span aria-hidden="true">✳</span><span aria-hidden="true">DISEÑO CONSCIENTE</span><span aria-hidden="true">✳</span><span aria-hidden="true">MATERIALES EN MOVIMIENTO</span><span aria-hidden="true">✳</span><span aria-hidden="true">ECONOMÍA CIRCULAR</span><span aria-hidden="true">✳</span><span aria-hidden="true">COMUNIDAD</span></div>
  </section>

  <section className="doors-section section-pad" id="caminos">
    <div className="doors-intro"><p className="eyebrow">HAY MUCHAS FORMAS DE ENCONTRARNOS</p><h2>Descubrí todo lo que podemos hacer juntos.</h2><p>Aprender una técnica, desarrollar una idea, encontrar un espacio de trabajo o darle otra vida a los textiles. Elegí por dónde empezar: cada puerta abre una forma distinta de ser parte de Subleva.</p></div>
    <div className="door-grid">{doors.map(d=><Link className={`door-card ${d.className}`} href={d.href} key={d.n}><span className="door-number">{d.n} / 05</span><span className="door-symbol">{d.symbol}</span><h3>{d.title}</h3><p>{d.desc}</p><span className="door-arrow">Descubrir <b>↗</b></span></Link>)}</div>
  </section>

  <section className="story-section" id="nosotras">
    <div className="story-image" role="img" aria-label="Espacio creativo y trabajo manual"/>
    <div className="story-copy"><p className="eyebrow">QUIÉNES SOMOS</p><h2>Una cooperativa que teje comunidad.</h2><p>Somos una cooperativa de diseño y producción textil en San Martín. Nos reúne una convicción: el trabajo, los saberes y los materiales pueden organizarse de otra manera.</p><p>Construimos en colectivo, recuperamos valor y conectamos producción, compromiso social y cuidado ambiental.</p><Link className="text-link" href="/quienes-somos">Conocé nuestra historia <span>↗</span></Link></div>
    <div className="values-list"><p><span>↻</span> Economía circular</p><p><span>◌</span> Trabajo cooperativo</p><p><span>⌖</span> Producción local</p><p><span>♧</span> Compromiso ambiental</p></div>
  </section>

  <section className="preview-section section-pad"><div className="section-heading"><div><p className="eyebrow">UN PRIMER VISTAZO</p><h2>Ideas que se vuelven hacer.</h2></div><span className="heading-note">Conocé cada propuesta en profundidad.</span></div><div className="preview-grid">{cards.map(c=><article className="preview-card" key={c.id}><Link href={c.href} className="preview-image" style={{backgroundImage:`url(${c.image})`}} aria-label={c.cta}/><div className="preview-body"><p className="eyebrow">{c.eyebrow}</p><h3>{c.title}</h3><p>{c.text}</p><Link className="text-link" href={c.href}>{c.cta} <span>↗</span></Link></div></article>)}</div></section>

  <section className="services-preview section-pad" id="servicios-preview"><div><p className="eyebrow">DE LA IDEA A LA PRODUCCIÓN</p><h2>Tu proyecto textil puede empezar acá.</h2><p>Diseño, moldería, corte, confección, bordado, estampas, serigrafía y asesoramiento: herramientas para transformar una idea en algo concreto.</p><Link className="button button-dark" href="/servicios">Descubrí nuestros servicios ↗</Link></div><ServicesThread /></section>

  <section className="cowork-preview"><div className="cowork-photo" role="img" aria-label="Personas trabajando con máquinas de costura en un taller textil" style={{backgroundImage:"linear-gradient(180deg,rgba(37,35,34,.03),rgba(37,35,34,.2)),url(https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1800&q=90)"}}><div className="cowork-network" aria-hidden="true"><span className="network-person person-a">✂</span><span className="network-person person-b">⌁</span><span className="network-person person-c">▤</span><span className="network-person person-d">✳</span><i className="network-line line-a"/><i className="network-line line-b"/><i className="network-line line-c"/><b>HACER<br/>EN RED</b></div></div><div className="cowork-copy"><p className="eyebrow">UN LUGAR PARA HACER</p><h2 className="cowork-title">COWORKING</h2><h3 className="cowork-subtitle">Un lugar para hacer en conjunto.</h3><p>Conocé el taller, sus recursos, modalidades de uso y cómo consultar la disponibilidad de máquinas y espacios.</p><Link className="button button-lilac" href="/coworking">Explorar el coworking ↗</Link></div></section>

  <section className="green-preview section-pad" id="punto-verde"><div className="green-copy"><p className="eyebrow">PUNTO VERDE TEXTIL</p><h2>El final de una tela puede ser el comienzo de otra cosa.</h2><p>Un circuito para recibir, clasificar, reutilizar, transformar y devolver valor a los materiales textiles.</p><Link className="button button-dark" href="/punto-verde-textil">Conocé el ciclo ↗</Link></div><div className="cycle-orbit"><div className="pvt-cycle-visual" aria-label="Esquema conceptual del ciclo textil, no es un mapa de puntos de recolección"><svg viewBox="0 0 420 360" aria-hidden="true"><path className="pvt-thread" d="M210 38 C340 38 385 130 332 224 S125 340 68 225 S90 38 210 38"/><path className="pvt-thread pvt-thread-inner" d="M210 38 L332 224 L68 225 Z"/></svg><span className="pvt-cycle-label label-one">RECIBIR</span><span className="pvt-cycle-label label-two">CLASIFICAR</span><span className="pvt-cycle-label label-three">TRANSFORMAR</span><span className="pvt-cycle-label label-four">REUTILIZAR</span><div className="pvt-cycle-core">PVT<small>TEXTILES<br/>EN CIRCULACIÓN</small></div><p className="pvt-cycle-caption">UN CICLO COLECTIVO, UN PUNTO DE ENCUENTRO</p></div></div></section>

  <section className="instagram-section section-pad"><div className="section-heading"><div><p className="eyebrow">DESDE NUESTRO UNIVERSO</p><h2>Subleva también pasa por Instagram.</h2><p className="instagram-intro">Procesos, talleres, productos e historias que siguen creciendo día a día.</p></div><a className="button button-dark" href="https://www.instagram.com/subleva_textil/" target="_blank" rel="noreferrer">Seguir @subleva_textil ↗</a></div><div className="instagram-grid">{["DbWnKNxICHZ","DbwgYfyoF2K","DJpYmJCR9mh"].map((id,i)=><a className="instagram-post" key={id} href={`https://www.instagram.com/p/${id}/`} target="_blank" rel="noreferrer" aria-label={`Ver publicación ${i+1} de Subleva en Instagram`}><iframe src={`https://www.instagram.com/p/${id}/embed/`} title={`Publicación de Instagram ${i+1}`} loading="lazy"/><span className="instagram-fallback">Ver publicación en Instagram ↗</span></a>)}</div></section>
  <section className="reviews-section section-pad" aria-labelledby="reviews-title">
    <div className="section-heading"><div><p className="eyebrow">LO QUE CUENTA LA COMUNIDAD</p><h2 id="reviews-title">Hecho con cuidado. Se nota.</h2><p className="reviews-lead">Experiencias compartidas por quienes eligieron el trabajo de Subleva.</p></div><div className="reviews-controls"><span>★★★★★</span><small>Opiniones de clientes</small></div></div>
    <div className="reviews-track" tabIndex={0} aria-label="Reseñas. Deslizá horizontalmente para leer más">
      {[
        {name:"Luciana Sold",time:"Hace 4 meses",text:"¡Excelente riñonera! Calidad y compromiso con el medio ambiente."},
        {name:"Fernando Fontanet",time:"Hace 2 años",text:"La cooperativa confecciona unos productos increíbles, de muchísima calidad y buen gusto. Las riñoneras tienen excelente terminación, hermosa combinación de colores, son súper cómodas y sustentables."},
        {name:"Violeta Lorenzatti",time:"Hace 1 año · editada",text:"Me contacté para la producción de remeras estampadas. Me contestaron enseguida, me asesoraron y me sacaron todas las dudas. Cumplieron a la perfección con los tiempos pactados."},
        {name:"Magali Zylbersztejn",time:"Hace 2 años",text:"Compré dos riñoneras de excelente calidad, súper originales y con telas recicladas. La atención, 10 puntos. Son productos del bien."},
        {name:"William Albert",time:"Hace 2 años",text:"Me regalaron una riñonera Revuelo. Es muy cómoda y espaciosa. Me la elogian mucho. Gracias por hacer productos sustentables."},
        {name:"Melisa Rocio",time:"Hace 2 años",text:"Compré una riñonera en la feria de la plaza San Martín. Hermoso laburo hacen. Ojalá les vaya muy bien."},
        {name:"Marina Valin",time:"Hace 2 años",text:"¡Una maravilla! Me encantan los productos. Cele nos trajo riñoneras y tabaqueras. Hermoso trabajo, compañeras."},
        {name:"Guillermo Navajas",time:"Hace 2 años",text:"Excelente calidad, diseño único y personal. Cómoda tanto en la cintura como en bandolera, práctica y amplia. Supera las expectativas."},
        {name:"Vanesa Pianciola",time:"Hace 2 años",text:"Súper profesionales y cumplidores al momento de entregar los productos. Prolijos y originales. ¡Sus riñoneras son lo más!"},
        {name:"Natalia Lamuniere",time:"Hace 2 años",text:"Compré remeras y buzos de excelente calidad. Muy buena atención, súper recomendable."},
        {name:"Liz Monges",time:"Hace 2 años",text:"Muy buenas las riñoneras, su calidad y confección espectacular."}
      ].map((review)=><article className="review-card" key={review.name}><div className="review-stars" aria-label="5 de 5 estrellas">★★★★★</div><p>{review.text}</p><div className="review-person"><span className="review-avatar">{review.name.split(" ").map(part=>part[0]).slice(0,2).join("")}</span><span><strong>{review.name}</strong><small>{review.time}</small></span></div></article>)}
    </div><p className="reviews-disclaimer">Reseñas transcritas del material compartido por Subleva. Las fechas son aproximadas según ese material.</p>
  </section>

  <section className="location-section section-pad" id="donde-encontrarnos"><div className="location-copy"><p className="eyebrow">SAN MARTÍN · BUENOS AIRES</p><h2>DONDE NOS ENCONTRAMOS</h2><p>Un espacio de trabajo, diseño y producción dentro de la comunidad de San Martín.</p><p className="location-address">Córdoba 3420, San Andrés<br/>Partido de San Martín, Buenos Aires</p><a className="button button-lilac" href="https://www.google.com.ar/maps/place/Subleva+Textil/@-34.5540564,-58.6373699,22969m/data=!3m1!1e3!4m6!3m5!1s0x95bccb2df5a8eb3d:0xe9a64b7b588b3b70!8m2!3d-34.5587675!4d-58.5423401!16s%2Fg%2F11rbyt9l9_?entry=ttu" target="_blank" rel="noreferrer">Abrir indicaciones en Google Maps ↗</a></div><div className="location-map"><iframe title="Ubicación de Subleva Textil en Google Maps" src="https://www.google.com/maps?q=-34.5587675,-58.5423401&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><span className="map-caption">SUBLEVA TEXTIL · SAN ANDRÉS</span></div></section>

  <section className="contact-strip"><div><p className="eyebrow">HAGAMOS ALGO JUNTOS</p><h2>Las buenas ideas<br/>se hacen en comunidad.</h2></div><a className="button button-dark" href={msg("Hola, quiero conversar con Subleva Textil.")} target="_blank" rel="noreferrer">Empezar una conversación ↗</a></section>
 </main>;
}

export function ContentPage({ eyebrow, title, intro, children }: { eyebrow:string; title:string; intro:string; children?:React.ReactNode }) {
 return <main className="inner-page"><section className="inner-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></section><div className="inner-content">{children}</div></main>;
}

export function ContactCTA({ title="¿Lo conversamos?", text="Contanos qué necesitás y encontramos juntos el mejor camino.", message="Hola, quiero hacer una consulta a Subleva Textil." }: {title?:string;text?:string;message?:string}) {
 return <section className="inner-cta"><div><h2>{title}</h2><p>{text}</p></div><a className="button button-dark" href={msg(message)} target="_blank" rel="noreferrer">Escribinos por WhatsApp ↗</a></section>;
}
