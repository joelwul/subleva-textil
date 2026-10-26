# Configurar la administración de Subleva Textil

El panel ya está preparado para autenticación por contraseña y persistencia compartida en Supabase. **No se activa solo con subir el código**: necesita una base de datos y variables de entorno privadas.

## 1. Crear la base de datos

1. Crear o elegir un proyecto en Supabase.
2. Abrir **SQL Editor**.
3. Ejecutar el contenido de `supabase/migrations/202610260001_subleva_admin.sql`.
4. Ejecutar `supabase/migrations/202610260002_product_lines.sql`.

La tabla `public.site_content` guarda el catálogo, talleres, turnos del coworking, equipamiento y puntos verdes en un único documento JSON. No habilitar políticas RLS públicas; el servidor usa la service-role key y las rutas de administración verifican la sesión.

## 2. Variables privadas

Configurar en **Vercel → Project → Settings → Environment Variables** para Production (y Preview si se va a probar allí):

- `SUPABASE_URL`: URL del proyecto Supabase.
- `SUPABASE_SERVICE_ROLE_KEY`: service_role key de Supabase. **Nunca usar el prefijo NEXT_PUBLIC ni exponer esta clave al navegador.**
- `ADMIN_PASSWORD`: contraseña larga, única y aleatoria para el panel.
- `ADMIN_SESSION_SECRET`: secreto aleatorio de al menos 32 bytes.

Para generar secretos en PowerShell:

```powershell
-join ((1..48) | ForEach-Object { [char](Get-Random -Minimum 33 -Maximum 127) })
```

Ejecutar el comando dos veces y usar una salida para `ADMIN_PASSWORD` y la otra para `ADMIN_SESSION_SECRET`. No guardar los secretos en GitHub ni enviarlos por chat.

## 3. Desplegar y probar

1. Guardar las variables en Vercel.
2. Hacer un redeploy para que se apliquen.
3. Abrir `/admin`, iniciar sesión con `ADMIN_PASSWORD`.
4. Crear un producto, guardar, abrir la web pública y comprobar que el catálogo lo recibe.
5. Crear un taller y un turno de coworking con fecha, hora de inicio y fin; comprobar la fecha en `/coworking`.
6. Repetir la comprobación desde otro navegador/dispositivo para confirmar persistencia compartida.

## Seguridad y alcance

- La contraseña no se guarda en el navegador; la sesión usa una cookie HTTP-only, SameSite Strict y vence a las 8 horas.
- Las claves de Supabase solo se usan en rutas del servidor.
- Si faltan variables o la tabla no existe, el panel devuelve un error en vez de fingir que guardó.
- El administrador permite editar los campos de producto, taller y agenda. Las imágenes se indican por URL pública; la subida directa de archivos a Storage no está implementada en esta versión.
- Los productos y los dos talleres principales leen los datos administrados; el calendario del coworking también lee los bloques publicados. Otros contenidos del sitio siguen siendo estáticos por ahora.
- Los horarios “Disponible” se muestran como consultables por WhatsApp. El calendario no confirma ni bloquea reservas de forma transaccional; para evitar dobles reservas haría falta un flujo de reserva con bloqueo atómico.
