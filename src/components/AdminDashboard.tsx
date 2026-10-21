"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Item = { id:string; name:string; detail:string; status:string; value:string };
type SectionKey = "Productos" | "Talleres" | "Agenda coworking" | "Máquinas y herramientas" | "Puntos verdes";
const keys: SectionKey[] = ["Productos","Talleres","Agenda coworking","Máquinas y herramientas","Puntos verdes"];
const seed: Record<SectionKey,Item[]> = {
  "Productos":[{id:"p1",name:"Riñonera Revuelo",detail:"Textil recuperado · color a definir",status:"Disponible",value:""},{id:"p2",name:"Accesorios Maqui",detail:"Completar descripción y variantes",status:"Borrador",value:""}],
  "Talleres":[{id:"t1",name:"Moldería personalizada",detail:"Mié. y vie. · 9 a 11:30 h",status:"Publicado",value:""},{id:"t2",name:"Costura inicial",detail:"Lunes · 10:30 a 13 h",status:"Publicado",value:""}],
  "Agenda coworking":[{id:"c1",name:"Bloque horario de prueba",detail:"Editar fecha, horario y disponibilidad",status:"Disponible",value:""}],
  "Máquinas y herramientas":[{id:"m1",name:"Máquina recta industrial",detail:"Taller textil",status:"Disponible",value:""},{id:"m2",name:"Overlock",detail:"Taller textil",status:"Disponible",value:""},{id:"m3",name:"Mesa de corte",detail:"Taller textil",status:"Disponible",value:""}],
  "Puntos verdes":[{id:"v1",name:"Nuevo punto verde",detail:"Cargar organización, dirección y contacto",status:"Pendiente",value:""}]
};
const storageKey="subleva-admin-demo-v1";
export default function AdminDashboard(){
 const [active,setActive]=useState<SectionKey>("Productos");
 const [data,setData]=useState<Record<SectionKey,Item[]>>(seed);
 const [ready,setReady]=useState(false);
 const [name,setName]=useState(""); const [detail,setDetail]=useState(""); const [value,setValue]=useState(""); const [status,setStatus]=useState("Disponible"); const [editing,setEditing]=useState<string|null>(null);
 useEffect(() => {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate the local-only demo from browser storage once after mount
      setData(JSON.parse(saved));
    }
  } catch {
    // Ignore malformed local demo data and keep the seed content.
  }
  setReady(true);
}, []);
 useEffect(()=>{if(ready)localStorage.setItem(storageKey,JSON.stringify(data))},[data,ready]);
 const total=useMemo(()=>keys.reduce((n,k)=>n+data[k].length,0),[data]);
 function resetForm(){setName("");setDetail("");setValue("");setStatus("Disponible");setEditing(null)}
 function save(){if(!name.trim())return;const row:Item={id:editing||`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,name:name.trim(),detail:detail.trim(),status,value:value.trim()};setData(old=>({...old,[active]:editing?old[active].map(item=>item.id===editing?row:item):[row,...old[active]]}));resetForm()}
 function edit(item:Item){setEditing(item.id);setName(item.name);setDetail(item.detail);setValue(item.value);setStatus(item.status);document.getElementById("admin-editor")?.scrollIntoView({behavior:"smooth",block:"center"})}
 function remove(id:string){if(confirm("¿Eliminar este registro de la demo local?"))setData(old=>({...old,[active]:old[active].filter(item=>item.id!==id)}))}
 return <main className="admin-shell"><aside className="admin-sidebar"><Link href="/" className="admin-brand"><span>ST</span><b>SUBLEVA<small>GESTIÓN</small></b></Link><p className="admin-nav-label">ADMINISTRACIÓN</p>{keys.map(k=><button key={k} className={active===k?"admin-nav active":"admin-nav"} onClick={()=>{setActive(k);resetForm()}}>{k}<span>{data[k].length}</span></button>)}<Link className="admin-back" href="/">← Volver a la web</Link></aside><section className="admin-main"><header className="admin-topbar"><div><p className="eyebrow">PANEL DE GESTIÓN</p><h1>Hola, Subleva.</h1><p>Organizá la información del taller desde un solo lugar.</p></div><span className="admin-status"><i/> DEMO LOCAL</span></header><div className="admin-warning"><strong>Modo de prueba</strong><span>Los cambios se guardan únicamente en este navegador. Todavía no actualizan la web pública ni se comparten con otros dispositivos. Para publicar una gestión real, hay que conectar una base de datos y proteger el acceso.</span></div><div className="admin-stats"><article><small>REGISTROS DE PRUEBA</small><strong>{total}</strong><span>En todas las secciones</span></article><article><small>SECCIÓN ACTIVA</small><strong>{data[active].length}</strong><span>{active}</span></article><article><small>ESTADO</small><strong>Local</strong><span>Sin conexión al servidor</span></article></div><div className="admin-content-grid"><section className="admin-list-panel"><div className="admin-panel-heading"><div><p className="eyebrow">CONTENIDO</p><h2>{active}</h2></div><button className="admin-primary" onClick={resetForm}>＋ Nuevo registro</button></div><div className="admin-table-head"><span>Nombre / detalle</span><span>Estado</span><span>Acciones</span></div>{data[active].length?data[active].map(item=><article className="admin-row" key={item.id}><div><strong>{item.name}</strong><small>{item.detail||"Sin detalle agregado"}{item.value?` · ${item.value}`:""}</small></div><span className={`admin-pill ${item.status.toLowerCase().replaceAll(" ","-")}`}>{item.status}</span><div className="admin-actions"><button onClick={()=>edit(item)}>Editar</button><button onClick={()=>remove(item.id)}>Eliminar</button></div></article>):<div className="admin-empty">Todavía no hay registros en esta sección. Creá el primero desde el formulario.</div>}</section><section className="admin-editor-panel" id="admin-editor"><p className="eyebrow">{editing?"MODIFICAR REGISTRO":"CARGAR CONTENIDO"}</p><h2>{editing?"Editar registro":"Nuevo registro"}</h2><label>Nombre<input value={name} onChange={e=>setName(e.target.value)} placeholder="Nombre del producto, taller o recurso"/></label><label>Descripción / información<textarea value={detail} onChange={e=>setDetail(e.target.value)} placeholder="Detalles, horario, material, dirección…" rows={4}/></label><label>Precio o dato adicional<input value={value} onChange={e=>setValue(e.target.value)} placeholder="Opcional"/></label><label>Estado<select value={status} onChange={e=>setStatus(e.target.value)}>{["Disponible","Agotado","Publicado","Borrador","Reservado","Bloqueado","Pendiente","Confirmado","Archivado"].map(s=><option key={s}>{s}</option>)}</select></label><div className="admin-form-actions"><button className="admin-primary" onClick={save}>{editing?"Guardar cambios":"Agregar registro"}</button>{editing&&<button className="admin-secondary" onClick={resetForm}>Cancelar</button>}</div><p className="admin-hint">Esta demo permite probar la interfaz y guardar datos en el almacenamiento local del navegador. No cargues información personal real.</p></section></div><footer className="admin-footer">Subleva Textil · Herramienta de gestión en desarrollo</footer></section></main>
}
