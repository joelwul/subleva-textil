-- Ejecutar después de la migración principal si ya se creó la tabla site_content.
update public.site_content
set content = jsonb_set(
  jsonb_set(
    jsonb_set(
      jsonb_set(
        jsonb_set(
          jsonb_set(
            jsonb_set(
              jsonb_set(content, '{Productos,0,line}', '"Revuelo"'::jsonb, true),
              '{Productos,1,line}', '"Revuelo"'::jsonb, true),
            '{Productos,2,line}', '"Revuelo"'::jsonb, true),
          '{Productos,3,line}', '"Revuelo"'::jsonb, true),
        '{Productos,4,line}', '"Revuelo"'::jsonb, true),
      '{Productos,5,line}', '"Revuelo"'::jsonb, true),
    '{Productos,6,line}', '"Maqui"'::jsonb, true),
  '{Productos,7,line}', '"Maqui"'::jsonb, true)
where id='main';
