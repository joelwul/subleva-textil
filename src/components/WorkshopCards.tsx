"use client";
import { useEffect,useState } from "react";
const WA="https://wa.me/5491124078491?text=";
const stitch="M0 12 C8 2 16 22 24 12 S40 2 48 12 S64 22 72 12 S88 2 96 12 S112 22 120 12 S136 2 144 12 S160 22 168 12 S184 2 192 12 S208 22 216 12 S232 2 240 12 S256 22 264 12 S280 2 288 12 S304 22 312 12 S328 2 336 12 S352 22 360 12";
function Stitch(){return <svg className="workshop-stitch" viewBox="0 0 360 24" preserveAspectRatio="none" aria-hidden="true"><path d={stitch}/></svg>}
type Workshop={id:string;name:string;detail:string;value:string;status:string;image?:string;featured?:boolean;kind?:string;date?:string;dateEnd?:string};
const defaults:Workshop[]=[
{id:"default-molderia",name:"Moldería personalizada",detail:"Aprendé las bases de la moldería, las tablas de talles y la moldería industrial y a medida. Terminá desarrollando un molde básico de cuerpo superior.",value:"Miércoles 9–11:30; viernes 9–11:30 y 12–14:30",status:"Publicado",kind:"Regular",image:"/images/subleva/talleres/molderia.jpg"},
{id:"default-costura",name:"Costura inicial",detail:"Conocé la máquina recta, sus funciones y técnicas básicas. Practicá las primeras costuras y terminá confeccionando un accesorio.",value:"Lunes 10:30–13",status:"Publicado",kind:"Regular",image:"/images/subleva/talleres/costura-inicial.jpg"},
{id:"default-tintes",name:"Taller de tintes naturales",detail:"Explorar el color a partir de materiales naturales y descubrir las huellas que dejan sobre la tela.",value:"Consultar próxima edición",status:"Publicado",kind:"Seminario puntual",image:"/images/subleva/talleres/tintes-naturales.jpg"}];
function curatedWorkshopImage(w:Workshop):string {
 if(w.image) return w.image;
 const n=w.name.toLowerCase();
 if(n.includes("molder")||n.includes("molde")) return "/images/subleva/talleres/molderia.jpg";
 if(n.includes("costura")||n.includes("máquina")||n.includes("maquina")) return "/images/subleva/talleres/costura-inicial.jpg";
 if(n.includes("tinte")||n.includes("color")||n.includes("natural")) return "/images/subleva/talleres/tintes-naturales.jpg";
 return "";
}
export default function WorkshopCards({compact=false}:{compact?:boolean}){
 const [managed,setManaged]=useState<Workshop[]>([]),[hasManaged,setHasManaged]=useState(false),[today,setToday]=useState("");
 useEffect(()=>{let alive=true;fetch("/api/public-content",{cache:"no-store"}).then(r=>r.json()).then(j=>{if(!alive)return;setToday(new Date().toISOString().slice(0,10));const rows=j.content?.["Talleres"];if(Array.isArray(rows)){setHasManaged(rows.length>0);setManaged(rows.filter((x:Workshop)=>x.status==="Publicado"||x.status==="Disponible"))}}).catch(()=>{});return()=>{alive=false}},[]);
 const available=hasManaged?managed:defaults;
 const featured=available.filter(x=>x.featured).slice(0,3);
 const shown=featured.length?featured:available.slice(0,3);
 return <div className={`workshop-grid ${compact?"workshop-grid-compact":""}`}>{shown.map((w,i)=>{const endDate=w.dateEnd||w.date;const passed=w.kind==="Seminario puntual"&&Boolean(endDate&&today&&endDate<today);return <article className={`workshop-flyer ${i===1?"workshop-flyer-costura":i===2?"workshop-flyer-tintes":"workshop-flyer-molderia"}`} key={w.id}><div className="workshop-photo" aria-label={w.name}>{curatedWorkshopImage(w)?<img src={curatedWorkshopImage(w)} alt={w.name} loading="lazy" onError={e=>{e.currentTarget.style.display="none";const next=e.currentTarget.nextElementSibling as HTMLElement|null;if(next)next.style.display="grid"}}/>:null}<div className="workshop-photo-placeholder" style={{display:curatedWorkshopImage(w)?"none":"grid"}}><span>Foto pendiente</span><small>Subí la imagen desde administración</small></div><span className="workshop-sticker">{passed?"TALLERES\nPASADOS":w.kind==="Seminario puntual"?"SEMINARIO\nPUNTUAL":"TALLER\nREGULAR"}</span></div><div className={`workshop-paper ${i===1?"workshop-paper-lilac":i===2?"workshop-paper-tintes":""}`}><p className="workshop-category">{w.kind==="Seminario puntual"?"SEMINARIO · ENCUENTRO PUNTUAL":"TALLER · SABERES QUE CIRCULAN"}</p><h3>{w.name}</h3><Stitch/><div className="workshop-details">{w.date&&<strong>{new Intl.DateTimeFormat("es-AR",{day:"numeric",month:"long"}).format(new Date(w.date+"T12:00:00"))}</strong>}<strong>{w.value||"Consultar horarios"}</strong>{w.dateEnd&&w.dateEnd!==w.date&&<span>Hasta {w.dateEnd}</span>}</div><p className="workshop-description">{w.detail}</p><a className="workshop-action" href={`${WA}${encodeURIComponent("Hola, quiero consultar por "+w.name+".")}`} target="_blank" rel="noreferrer">{passed?"CONSULTAR PRÓXIMA EDICIÓN":"CONSULTAR CUPOS"} <span>↗</span></a></div></article>})}</div>
}
