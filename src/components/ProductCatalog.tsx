"use client";

import { useEffect, useMemo, useState } from "react";

const WA = "https://wa.me/5491124078491?text=";
type Product = { name: string; line: "Revuelo" | "Maqui" | "Insumos"; description: string; image: string; stock: string; colors: string; sizes: string };
const products: Product[] = [
  {name:"Riñonera 30 litros Revuelo",line:"Revuelo",description:"Riñonera confeccionada a partir de materiales reutilizados. Consultá disponibilidad y detalles.",image:"/images/subleva/products/revuelo-principal.jpg",stock:"Consultar stock",colors:"Consultar colores",sizes:"Consultar medidas"},
  {name:"Riñonera 40 litros Revuelo",line:"Revuelo",description:"Accesorio de gran capacidad elaborado mediante suprarreciclaje textil.",image:"/images/subleva/products/revuelo-principal.jpg",stock:"Consultar stock",colors:"Consultar colores",sizes:"Consultar medidas"},
  {name:"Crossbody",line:"Revuelo",description:"Bolso crossbody confeccionado con materiales recuperados.",image:"/images/subleva/products/accesorios-revuelo.jpg",stock:"Consultar stock",colors:"Consultar colores",sizes:"Tamaño a confirmar"},
  {name:"Billetera Revuelo",line:"Revuelo",description:"Billetera de producción cooperativa con materiales reutilizados.",image:"/images/subleva/products/accesorios-revuelo.jpg",stock:"Consultar stock",colors:"Consultar colores",sizes:"Tamaño a confirmar"},
  {name:"Buzo Revuelo",line:"Revuelo",description:"Prenda duradera de la línea Revuelo. Consultá talles y disponibilidad.",image:"/images/subleva/products/revuelo-principal.jpg",stock:"Consultar stock",colors:"Consultar colores",sizes:"Talles a confirmar"},
  {name:"Tabaquera Revuelo",line:"Revuelo",description:"Accesorio textil elaborado con materiales recuperados.",image:"/images/subleva/products/accesorios-revuelo.jpg",stock:"Consultar stock",colors:"Consultar colores",sizes:"Tamaño a confirmar"},
  {name:"Remera Maqui",line:"Maqui",description:"Prenda de algodón teñido con tintes naturales y procesos artesanales.",image:"/images/subleva/products/maqui-principal.jpg",stock:"Consultar stock",colors:"Consultar colores",sizes:"Talles a confirmar"},
  {name:"Porta pinceles y herramientas Maqui",line:"Maqui",description:"Accesorio de cero desperdicio para guardar pinceles y herramientas.",image:"/images/subleva/products/maqui-principal.jpg",stock:"Consultar stock",colors:"Consultar colores",sizes:"Tamaño a confirmar"},
  {name:"Tinta serigráfica al agua · Print catalítico suave",line:"Insumos",description:"Tinta serigráfica al agua. Consultá presentación, compatibilidad y disponibilidad.",image:"",stock:"Consultar stock",colors:"Según producto",sizes:"Presentación a confirmar"},
  {name:"Almohadillas para sellos",line:"Insumos",description:"Almohadillas para utilizar con sellos. Consultá opciones disponibles.",image:"",stock:"Consultar stock",colors:"Consultar colores",sizes:"Consultar presentación"},
  {name:"Base / sustrato",line:"Insumos",description:"Bases y sustratos para procesos de estampación. Consultá especificaciones.",image:"",stock:"Consultar stock",colors:"Según producto",sizes:"Consultar medidas"},
  {name:"Hilo",line:"Insumos",description:"Hilos para trabajos textiles. Consultá tipos y colores disponibles.",image:"",stock:"Consultar stock",colors:"Consultar colores",sizes:"Consultar grosor"},
  {name:"Agujas",line:"Insumos",description:"Agujas para trabajos de confección. Consultá tipo y disponibilidad.",image:"",stock:"Consultar stock",colors:"No aplica",sizes:"Tipo a confirmar"}
];
const filters = ["Todos", "Revuelo", "Maqui", "Insumos"] as const;

export default function ProductCatalog() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const [catalog, setCatalog] = useState<Product[]>(products);
  useEffect(() => { fetch("/api/public-content", { cache: "no-store" }).then(r => r.json()).then(j => { const rows = j.content?.["Productos"]; if (Array.isArray(rows) && rows.length) setCatalog(rows.map((p: {name:string;detail?:string;line?:string;status?:string;value?:string;image?:string}) => ({name:p.name,line:p.line === "Maqui" || p.line === "Insumos" ? p.line : "Revuelo",description:p.detail || "",image:p.image || "",stock:p.value || p.status || "Consultar stock",colors:"Consultar colores",sizes:"Consultar medidas"}))); }).catch(() => {}); }, []);
  const shown = useMemo(() => filter === "Todos" ? catalog : catalog.filter(p => p.line === filter), [filter, catalog]);
  const card: React.CSSProperties = {background:"#fffdf8",border:"1px solid rgba(37,35,34,.14)",borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"};
  const detail: React.CSSProperties = {fontSize:12,color:"#625d55",lineHeight:1.5,margin:"5px 0"};
  return <section style={{padding:"24px 0 60px"}}>
    <div style={{display:"flex",flexWrap:"wrap",gap:8,margin:"0 0 26px"}}>{filters.map(f=><button key={f} onClick={()=>setFilter(f)} style={{border:"1px solid #252322",borderRadius:99,padding:"10px 17px",background:filter===f?"#252322":"transparent",color:filter===f?"#faf7ef":"#252322",fontSize:12,fontWeight:700,cursor:"pointer"}}>{f}</button>)}</div>
    <p style={{fontSize:12,color:"#625d55",marginBottom:22}}>Catálogo inicial: las fotos, variantes y existencias se actualizarán con la información definitiva de cada artículo.</p>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,230px),1fr))",gap:16}}>
      {shown.map(p=><article key={p.name} style={card}>
        <div style={{aspectRatio:"4/3",background:"#f0e8d4",display:"grid",placeItems:"center",overflow:"hidden"}}>
          {p.image ? <img src={p.image} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover"}}/> : <div style={{textAlign:"center",padding:20,color:"#625d55"}}><div style={{fontSize:42,marginBottom:8}}>✳</div><strong style={{fontSize:12}}>SUBLEVA · INSUMOS</strong><div style={{fontSize:11,marginTop:5}}>Imagen ilustrativa pendiente</div></div>}
        </div>
        <div style={{padding:16,display:"flex",flexDirection:"column",alignItems:"flex-start",flex:1}}>
          <span style={{fontSize:10,fontWeight:800,letterSpacing:".12em",textTransform:"uppercase",color:"#75669e"}}>{p.line}</span>
          <h3 style={{fontSize:19,lineHeight:1.15,margin:"9px 0 5px",letterSpacing:"-.025em"}}>{p.name}</h3>
          <p style={detail}>{p.description}</p>
          <div style={{marginTop:8,paddingTop:10,borderTop:"1px solid rgba(37,35,34,.12)",width:"100%"}}>
            <p style={detail}><strong>Color:</strong> {p.colors}</p><p style={detail}><strong>Talle / medida:</strong> {p.sizes}</p><p style={detail}><strong>Stock:</strong> {p.stock}</p>
          </div>
          <a href={WA+encodeURIComponent("Hola, quiero consultar por: "+p.name+". ¿Me comparten precio, stock y variantes disponibles?")} target="_blank" rel="noreferrer" style={{marginTop:16,display:"block",textAlign:"center",width:"100%",padding:"12px 14px",borderRadius:99,background:"#252322",color:"#faf7ef",fontSize:12,fontWeight:800}}>Consultar este artículo ↗</a>
        </div>
      </article>)}
    </div>
  </section>;
}
