import { NextResponse } from "next/server";
import { readContent } from "@/lib/admin-store";

// Keep this route compatible with Next.js cacheComponents; do not add force-dynamic here.
// Git push trigger to publish the current main branch after the Vercel deployment limit reset.
export async function GET(){try{const content=await readContent();return NextResponse.json({content},{headers:{"Cache-Control":"no-store"}})}catch{return NextResponse.json({content:null,error:"Contenido administrado todavía no configurado."},{status:503})}}
