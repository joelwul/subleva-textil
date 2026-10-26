import type { Metadata } from "next";
import { Shell, ContentPage, ContactCTA } from "@/components/Site";
import ProductCatalog from "@/components/ProductCatalog";
import TextileGuard from "@/components/TextileGuard";

export const metadata: Metadata = { title: "Productos e insumos · Revuelo + Maqui" };

export default function Page() {
  return (
    <Shell>
      <ContentPage
        eyebrow="PRODUCTOS E INSUMOS · REVUELO + MAQUI"
        title="Productos textiles e insumos"
        intro="Nuestras líneas de productos nacen de la búsqueda de formas de producción más responsables con el ambiente y con las personas que trabajan en la industria textil. A través del diseño, la recuperación de materiales y los procesos artesanales, ponemos en valor el trabajo cooperativo, el aprovechamiento de los recursos y el consumo consciente."
      >
        <>
          <section className="product-line-detail product-line-revuelo">
            <div className="product-line-image">
              <img src="/images/subleva/products/revuelo-principal.jpg" alt="Productos Revuelo confeccionados con materiales reutilizados" />
              <span>80 %<small>DE MATERIALES<br />REUTILIZADOS</small></span>
            </div>
            <div className="product-line-copy">
              <p className="eyebrow">REVUELO · SUPRARRECICLAJE</p>
              <h2>Revuelo</h2>
              <p>Nuestra línea de indumentaria y accesorios elaborada con más de un 80 % de materiales reutilizados. Diseñamos prendas duraderas a partir de procesos de suprarreciclaje y producción cooperativa.</p>
            </div>
          </section>
          <section className="product-line-detail product-line-maqui">
            <div className="product-line-image">
              <img src="/images/subleva/products/maqui-principal.jpg" alt="Productos Maqui de algodón teñido con tintes naturales" />
              <span>MAQUI<small>PROCESOS<br />ARTESANALES</small></span>
            </div>
            <div className="product-line-copy">
              <p className="eyebrow">MAQUI · CERO DESPERDICIO</p>
              <h2>Maqui</h2>
              <p>Nuestra línea de accesorios de cero desperdicio en algodón teñido con tintes naturales mediante procesos artesanales respetuosos del ambiente.</p>
            </div>
          </section>
          <TextileGuard pattern="geometrica" className="guard-products-page"/><ProductCatalog />
        </>
      </ContentPage>
      <ContactCTA title="¿Buscás un artículo en particular?" text="Consultanos por precio, stock, colores, talles y disponibilidad." message="Hola, quiero consultar por productos e insumos de Subleva Textil." />
    </Shell>
  );
}
