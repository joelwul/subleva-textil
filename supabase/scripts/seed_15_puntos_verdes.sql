-- Subleva Textil · 15 registros ficticios de Punto Verde Textil
-- Ejecutar en Supabase > SQL Editor. Es idempotente: los IDs demo-pvt-01..15 no se duplican.
-- Los registros se guardan en site_content.content -> "Puntos verdes", que es la estructura que usa la web.
-- IMPORTANTE: son datos demostrativos. No representan puntos reales; revisar y eliminar antes de publicar al público.

begin;

with demos(id,name,detail,address,phone,contact,materials,website,status,value) as (
 values
 ('demo-pvt-01','DEMO · Eco Punto Centro','Registro ficticio para probar la guía. Confirmar datos antes de publicar.','Av. Belgrano 1234, CABA','11 2345-6789','Equipo demo','Algodón limpio, retazos, denim','https://example.com/punto-demo-01','Borrador',''),
 ('demo-pvt-02','DEMO · Verde Sur','Registro ficticio para probar la guía. Confirmar datos antes de publicar.','Rivadavia 5321, La Plata','221 456-7890','Equipo demo','Ropa limpia, sábanas, toallas','https://example.com/punto-demo-02','Borrador',''),
 ('demo-pvt-03','DEMO · Textil Vida','Registro ficticio para probar la guía. Confirmar datos antes de publicar.','San Martín 876, Rosario','341 567-8902','Equipo demo','Algodón, lino, retazos de confección','https://example.com/punto-demo-03','Borrador',''),
 ('demo-pvt-04','DEMO · Recicla Ya','Registro ficticio para probar la guía. Confirmar datos antes de publicar.','Alsina 245, Córdoba','351 987-6543','Equipo demo','Jeans limpios, gabardina, sarga','https://example.com/punto-demo-04','Borrador',''),
 ('demo-pvt-05','DEMO · Hilos Verdes','Registro ficticio para probar la guía. Confirmar datos antes de publicar.','San Juan 1120, Mendoza','261 555-1234','Equipo demo','Lana, tejidos de punto, prendas limpias','https://example.com/punto-demo-05','Borrador',''),
 ('demo-pvt-06','DEMO · La Trama Circular','Registro ficticio para probar la guía. Confirmar datos antes de publicar.','España 456, Mar del Plata','223 444-5678','Equipo demo','Retazos grandes, lonas limpias','https://example.com/punto-demo-06','Borrador',''),
 ('demo-pvt-07','DEMO · Cooperativa Telar','Registro ficticio para probar la guía. Confirmar datos antes de publicar.','Mitre 780, San Miguel de Tucumán','381 333-1212','Equipo demo','Uniformes fuera de uso, ropa de trabajo limpia','https://example.com/punto-demo-07','Borrador',''),
 ('demo-pvt-08','DEMO · Segunda Puntada','Registro ficticio para probar la guía. Confirmar datos antes de publicar.','Lavalle 333, Salta','387 222-1212','Equipo demo','Cierres, botones, avíos reutilizables','https://example.com/punto-demo-08','Borrador',''),
 ('demo-pvt-09','DEMO · Retazo Vivo','Registro ficticio para probar la guía. Confirmar datos antes de publicar.','Sarmiento 640, Santa Fe','342 555-6789','Equipo demo','Sachets limpios y bolsas textiles','https://example.com/punto-demo-09','Borrador',''),
 ('demo-pvt-10','DEMO · Circular Oeste','Registro ficticio para probar la guía. Confirmar datos antes de publicar.','Av. San Martín 2100, Morón','11 4567-1234','Equipo demo','Paraguas en desuso, carpas rotas','https://example.com/punto-demo-10','Borrador',''),
 ('demo-pvt-11','DEMO · Punto Aguja','Registro ficticio para probar la guía. Confirmar datos antes de publicar.','Córdoba 920, Neuquén','299 555-7878','Equipo demo','Prendas limpias aunque estén rotas','https://example.com/punto-demo-11','Borrador',''),
 ('demo-pvt-12','DEMO · Tela Nueva','Registro ficticio para probar la guía. Confirmar datos antes de publicar.','Belgrano 188, Resistencia','362 444-2233','Equipo demo','Cortinas, manteles, textiles del hogar','https://example.com/punto-demo-12','Borrador',''),
 ('demo-pvt-13','DEMO · Red de Retazos','Registro ficticio para probar la guía. Confirmar datos antes de publicar.','Juan B. Justo 221, Bariloche','294 555-0909','Equipo demo','Mezclas textiles identificadas, retazos','https://example.com/punto-demo-13','Borrador',''),
 ('demo-pvt-14','DEMO · Segunda Vida Textil','Registro ficticio para probar la guía. Confirmar datos antes de publicar.','Av. España 1050, Bahía Blanca','291 555-6060','Equipo demo','Algodón, denim, prendas reutilizables','https://example.com/punto-demo-14','Borrador',''),
 ('demo-pvt-15','DEMO · La Rueca Verde','Registro ficticio para probar la guía. Confirmar datos antes de publicar.','San Juan 654, San Juan','264 555-4545','Equipo demo','Tejidos, lana y materiales de descarte limpios','https://example.com/punto-demo-15','Borrador','')
),
existing as (
 select coalesce(content->'Puntos verdes','[]'::jsonb) as items
 from public.site_content where id='main'
),
new_items as (
 select jsonb_build_object('id',d.id,'name',d.name,'detail',d.detail,'address',d.address,'phone',d.phone,'contact',d.contact,'materials',d.materials,'website',d.website,'status',d.status,'value',d.value) as item
 from demos d, existing e
 where not exists (select 1 from jsonb_array_elements(e.items) old where old->>'id'=d.id)
),
all_items as (
 select jsonb_array_elements(items) as item from existing
 union all
 select item from new_items
)
update public.site_content
set content=jsonb_set(content,'{Puntos verdes}',coalesce((select jsonb_agg(item order by item->>'name') from all_items),'[]'::jsonb),true),
    updated_at=now()
where id='main';

commit;

-- Verificación: debe devolver 15 para los IDs demo-pvt-01..15.
select count(*) as registros_demo
from public.site_content, jsonb_array_elements(content->'Puntos verdes') p
where id='main' and p->>'id' like 'demo-pvt-%';
