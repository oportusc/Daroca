# Daroca Eventos

Sitio web de Daroca Eventos, hecho con [Astro](https://astro.build) y desplegado en Netlify.
El diseño original está en [Figma](https://www.figma.com/design/IAoXpu2GPk7iPPIWWecsWR/Landing-page-for-Daroca-Eventos).

## Comandos

- `npm install`: instala las dependencias.
- `npm run dev`: servidor de desarrollo en http://localhost:4321.
- `npm run build`: genera el sitio en `dist/`.
- `npm run preview`: sirve localmente el sitio ya compilado.
- `npm run check`: revisa tipos y errores.

## Estructura

- `src/pages/`: una página por archivo (`nosotros.astro` corresponde a `/nosotros`).
- `src/layouts/BaseLayout.astro`: head (SEO), header y footer comunes.
- `src/components/ContactForm.tsx`: formulario de contacto (React, enviado a Netlify Forms).
- `src/config/site.ts`: teléfono, email, WhatsApp, Instagram y menú.
- `src/data/gallery.ts`: lista de fotos de la galería.
- `src/assets/`: imágenes. Astro las optimiza automáticamente al compilar.

## Agregar fotos a la galería

1. Copia la foto en `src/assets/imagenes/`.
2. Impórtala y agrégala a la lista en `src/data/gallery.ts`, con un texto `alt` que la describa.

## Formulario de contacto

Usa Netlify Forms, así que solo funciona en el sitio desplegado; en local muestra error al enviar.
Si cambias los campos de `ContactForm.tsx`, actualiza también el formulario oculto en `src/pages/contactanos.astro`.
