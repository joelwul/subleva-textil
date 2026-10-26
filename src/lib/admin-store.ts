import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "node:crypto";
export type AdminItem = { id:string; name:string; detail:string; status:string; value:string; image?:string; date?:string; start?:string; end?:string };
export type SectionKey = "Productos" | "Talleres" | "Agenda coworking" | "Máquinas y herramientas" | "Puntos verdes";
export const sectionKeys: SectionKey[] = ["Productos","Talleres","Agenda coworking","Máquinas y herramientas","Puntos verdes"];
const COOKIE = "subleva_admin_session";
function secret(){ return process.env.ADMIN_SESSION_SECRET || ""; }
function signature(value:string){ return createHmac("sha256",secret()).update(value).digest("hex"); }
export function isAdminConfigured(){return Boolean(process.env.ADMIN_PASSWORD && secret() && process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);}
export function createSession(){const payload=Buffer.from(JSON.stringify({exp:Date.now()+8*60*60*1000,nonce:createHmac("sha256",secret()).update(String(Date.now())+String(Math.random())).digest("hex").slice(0,24)})).toString("base64url");return payload+"."+signature(payload);}
export async function hasAdminSession(){const jar=await cookies();const token=jar.get(COOKIE)?.value||"";const [payload,sig]=token.split(".");if(!payload||!sig||!secret())return false;const expected=signature(payload);try{if(sig.length!==expected.length||!timingSafeEqual(Buffer.from(sig),Buffer.from(expected)))return false;const data=JSON.parse(Buffer.from(payload,"base64url").toString());return typeof data.exp==="number"&&data.exp>Date.now();}catch{return false;}}
export const sessionCookieName=COOKIE;
function dbHeaders(){const key=process.env.SUPABASE_SERVICE_ROLE_KEY!;return {"apikey":key,"Authorization":"Bearer "+key,"Content-Type":"application/json","Prefer":"return=representation"};}
export async function readContent():Promise<Record<SectionKey,AdminItem[]>>{const url=process.env.SUPABASE_URL;const key=process.env.SUPABASE_SERVICE_ROLE_KEY;if(!url||!key)throw new Error("Falta configurar SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");const r=await fetch(url.replace(/\/$/,"")+"/rest/v1/site_content?id=eq.main&select=content",{headers:dbHeaders(),cache:"no-store"});if(!r.ok)throw new Error("No se pudo leer el contenido de Supabase");const rows=await r.json();return rows[0]?.content||{"Productos":[],"Talleres":[],"Agenda coworking":[],"Máquinas y herramientas":[],"Puntos verdes":[]};}
export async function writeContent(content:Record<SectionKey,AdminItem[]>){const url=process.env.SUPABASE_URL;const key=process.env.SUPABASE_SERVICE_ROLE_KEY;if(!url||!key)throw new Error("Falta configurar Supabase");const r=await fetch(url.replace(/\/$/,"")+"/rest/v1/site_content?id=eq.main",{method:"PATCH",headers:dbHeaders(),body:JSON.stringify({content,updated_at:new Date().toISOString()})});if(!r.ok)throw new Error("No se pudo guardar el contenido en Supabase");}
