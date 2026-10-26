import { NextResponse } from "next/server";
import { readContent } from "@/lib/admin-store";
export const dynamic="force-dynamic";
export async function GET(){try{const content=await readContent();return NextResponse.json({content},{headers:{"Cache-Control":"no-store"}})}catch{return NextResponse.json({content:null,error:"Contenido administrado todavía no configurado."},{status:503})}}
