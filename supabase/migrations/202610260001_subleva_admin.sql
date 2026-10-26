-- Ejecutar en Supabase SQL Editor una sola vez.
create table if not exists public.site_content (
  id text primary key default 'main',
  content jsonb not null default '{"Productos":[],"Talleres":[],"Agenda coworking":[],"Máquinas y herramientas":[],"Puntos verdes":[]}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.site_content enable row level security;
-- No crear policies públicas. La API Next.js accede con la service role key solo del lado servidor.
insert into public.site_content (id, content)
values ('main', '{"Productos":[
{"id":"p1","name":"Riñonera 30 litros Revuelo","detail":"Accesorio confeccionado con materiales reutilizados.","status":"Disponible","value":"Consultar stock"},
{"id":"p2","name":"Riñonera 40 litros Revuelo","detail":"Accesorio de gran capacidad elaborado mediante suprarreciclaje textil.","status":"Disponible","value":"Consultar stock"},
{"id":"p3","name":"Crossbody","detail":"Bolso crossbody de la línea Revuelo.","status":"Disponible","value":"Consultar stock"},
{"id":"p4","name":"Billetera Revuelo","detail":"Billetera elaborada con materiales reutilizados.","status":"Disponible","value":"Consultar stock"},
{"id":"p5","name":"Buzo Revuelo","detail":"Prenda de la línea Revuelo.","status":"Disponible","value":"Consultar stock"},
{"id":"p6","name":"Tabaquera Revuelo","detail":"Accesorio textil de la línea Revuelo.","status":"Disponible","value":"Consultar stock"},
{"id":"p7","name":"Remera Maqui","detail":"Algodón teñido con tintes naturales y procesos artesanales.","status":"Disponible","value":"Consultar stock"},
{"id":"p8","name":"Porta pinceles y herramientas Maqui","detail":"Accesorio cero desperdicio de la línea Maqui.","status":"Disponible","value":"Consultar stock"}
],"Talleres":[
{"id":"t1","name":"Moldería personalizada","detail":"Aprendé las bases de la moldería, las tablas de talles y la moldería industrial y a medida. Terminá desarrollando un molde básico de cuerpo superior.","status":"Publicado","value":"Miércoles 9–11:30; viernes 9–11:30 y 12–14:30"},
{"id":"t2","name":"Costura inicial","detail":"Conocé la máquina recta, sus funciones y técnicas básicas. Practicá las primeras costuras y terminá confeccionando un accesorio.","status":"Publicado","value":"Lunes 10:30–13"}
],"Agenda coworking":[],"Máquinas y herramientas":[
{"id":"m1","name":"Máquina recta industrial","detail":"Equipo del taller","status":"Disponible","value":""},
{"id":"m2","name":"Máquina overlock","detail":"Equipo del taller","status":"Disponible","value":""},
{"id":"m3","name":"Máquina collareta","detail":"Equipo del taller","status":"Disponible","value":""},
{"id":"m4","name":"Máquina de triple arrastre","detail":"Equipo del taller","status":"Disponible","value":""},
{"id":"m5","name":"Mesa de corte y herramientas","detail":"Equipo del taller","status":"Disponible","value":""},
{"id":"m6","name":"Hilos básicos y agujas","detail":"Insumos del taller","status":"Disponible","value":""},
{"id":"m7","name":"Plancha de sublimación","detail":"Equipo del taller","status":"Disponible","value":""},
{"id":"m8","name":"Mesa de grabado de serigrafía","detail":"Equipo del taller","status":"Disponible","value":""},
{"id":"m9","name":"Mesa de estampado lineal","detail":"Equipo del taller","status":"Disponible","value":""},
{"id":"m10","name":"Pulpo serigráfico de 6 colores","detail":"Equipo del taller","status":"Disponible","value":""}
],"Puntos verdes":[]}'::jsonb)
on conflict (id) do nothing;
