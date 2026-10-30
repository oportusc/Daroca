import type { APIRoute } from "astro";

// Permite todos los rastreadores (incluidos los de buscadores de IA) e indica dónde está el sitemap
export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL("sitemap-index.xml", site);

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl.href}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
