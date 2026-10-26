"use client";

import { useEffect, useMemo, useState } from "react";

const WA = "https://wa.me/5491124078491?text=";
type Product = { id?:string; name:string; line:string; description:string; image:string; stock:string; colors:string; sizes:string; price?:string };
type ManagedProduct = { id:string; name:string; detail?:string; line?:string; status?:string; value?:string; stock?:string; image?:string; price?:string; colors?:string; sizes?:string };

const initial:Product[] = [
 {name:"Riñonera 30 litros Revuelo",line:"Revuelo",description:"Accesorio confeccionado a partir de materiales reutilizados. Consultá disponibilidad y detalles.",image:"/images/subleva/products/revuelo-principal.jpg",stock:"Consultar stock",colors:"Consultar colores",sizes:"Consultar medidas"},
 {name:"Remera Maqui",line:"Maqui",description:"Prenda de algodón teñido con tintes naturales y procesos artesanales.",image:"/images/subleva/products/maqui-principal.jpg",stock:"Consultar stock",colors:"Consultar colores",sizes:"Talles a confirmar"}
];

export default function ProductCatalog() {
 const [filter,setFilter]=useState("Todos");
 const [catalog,setCatalog]=useState<Product[]>(initial);
 const [loaded,setLoaded]=useState(false);
 useEffect(()=>{let alive=true;fetch("/api/public-content",{cache:"no-store"}).then(r=>r.json()).then(j=>{if(!alive)return;const rows=j.content?.["Productos"];if(Array.isArray(rows)&&rows.length){setCatalog(rows.filter((p:ManagedProduct)=>p.status==="Publicado"||p.status==="Disponible").map((p:ManagedProduct)=>({id:p.id,name:p.name,line:p.line||"Revuelo",description:p.detail||"",image:typeof p.image==="string"?p.image:"",stock:p.stock||p.value||p.status||"Consultar stock",price:p.price||"",colors:p.colors||"Consultar colores",sizes:p.sizes||"Consultar medidas"})))}setLoaded(true)}).catch(()=>setLoaded(true));return()=>{alive=false}},[]);
 const filters=useMemo(()=>["Todos",...Array.from(new Set(catalog.map(p=>p.line).filter(Boolean)))],[catalog]);
 const shown=useMemo(()=>filter==="Todos"?catalog:catalog.filter(p=>p.line===filter),[filter,catalog]);
 const card:React.CSSProperties={background:"#fffdf8",border:"1px solid rgba(37,35,34,.14)",borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column",minWidth:0};
 const detail:React.CSSProperties={fontSize:12,color:"#625d55",lineHeight:1.55,margin:"5px 0"};
 return <section style={{padding:"24px 0 60px"}}>
  <div className="product-filter-row" style={{display:"flex",flexWrap:"wrap",gap:8,margin:"0 0 26px"}} aria-label="Filtrar productos">{filters.map(f=><button type="button" key={f} aria-pressed={filter===f} onClick={()=>setFilter(f)} style={{border:"1px solid #252322",borderRadius:99,padding:"10px 17px",background:filter===f?"#252322":"transparent",color:filter===f?"#faf7ef":"#252322",fontSize:12,fontWeight:700,cursor:"pointer"}}>{f}</button>)}</div>
  <div className="product-catalog-grid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,230px),1fr))",gap:16}}>
   {shown.map((p,i)=><article key={p.id||p.name+"-"+i} style={card}>
    <div style={{aspectRatio:"4/3",background:"#f0e8d4",display:"grid",placeItems:"center",overflow:"hidden",minWidth:0}}>
     {p.image?<img src={p.image} alt={p.name} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} onError={e=>{e.currentTarget.style.display="none";const next=e.currentTarget.nextElementSibling as HTMLElement|null;if(next)next.style.display="grid"}}/>:null}
     <div style={{display:p.image?"none":"grid",placeItems:"center",padding:20,textAlign:"center",color:"#625d55",fontSize:12,lineHeight:1.5}}><span><strong>Foto pendiente</strong><br/>La imagen se actualizará cuando se cargue desde administración.</span></div>
    </div>
    <div style={{padding:16,display:"flex",flexDirection:"column",alignItems:"flex-start",flex:1,minWidth:0}}>
     <span style={{fontSize:10,fontWeight:800,letterSpacing:".12em",textTransform:"uppercase",color:"#75669e"}}>{p.line}</span><h3 style={{fontSize:19,lineHeight:1.15,margin:"9px 0 5px",letterSpacing:"-.025em",overflowWrap:"anywhere"}}>{p.name}</h3><p style={detail}>{p.description}</p>
     <div style={{marginTop:8,paddingTop:10,borderTop:"1px solid rgba(37,35,34,.12)",width:"100%"}}>{p.price&&<p style={detail}><strong>Precio:</strong> {p.price}</p>}<p style={detail}><strong>Color:</strong> {p.colors}</p><p style={detail}><strong>Talle / medida:</strong> {p.sizes}</p><p style={detail}><strong>Stock:</strong> {p.stock}</p></div>
     <a href={WA+encodeURIComponent("Hola, quiero consultar por: "+p.name+". ¿Me comparten precio, stock y variantes disponibles?")} target="_blank" rel="noreferrer" style={{marginTop:16,display:"block",textAlign:"center",width:"100%",padding:"12px 14px",borderRadius:99,background:"#252322",color:"#faf7ef",fontSize:12,fontWeight:800}}>Consultar este artículo ↗</a>
    </div>
   </article>)}
  </div>{loaded&&!shown.length&&<p style={{padding:"24px 0"}}>No hay productos publicados en esta categoría por el momento.</p>}
 </section>;
}
