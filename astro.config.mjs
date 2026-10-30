// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Dominio principal del sitio: se usa para URLs canónicas, Open Graph, sitemap.xml y robots.txt
  site: 'https://www.darocaeventos.cl',

  // Mantiene las URLs actuales sin barra final (/nosotros, /servicios, /contactanos).
  // 'file' genera nosotros.html, que Netlify sirve en /nosotros sin redirigir.
  trailingSlash: 'never',
  build: {
    format: 'file',
  },

  image: {
    // Permite optimizar las fotos de stock de Unsplash que aún usan Nosotros y Servicios
    domains: ['images.unsplash.com'],
  },

  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.endsWith('/404'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
