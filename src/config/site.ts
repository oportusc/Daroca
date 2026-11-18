// Datos de contacto y negocio en un solo lugar: los usan el header, el footer,
// la página de contacto y los datos estructurados (JSON-LD) para buscadores.

const whatsappNumber = "56987297888";
const whatsappMessage = "Hola! Me gustaría hacer una cotización para mi evento.";

export const site = {
  name: "Daroca Eventos",
  description:
    "Servicio de banquetería para matrimonios, graduaciones, coffee breaks y eventos corporativos en Viña del Mar, Valparaíso y toda la Quinta Región. Cotiza tu evento con nosotros.",
  phone: "+56 9 8729 7888",
  phoneHref: "tel:+56987297888",
  email: "contacto.daroca@gmail.com",
  location: "Villa Alemana, Quinta Región",
  city: "Villa Alemana",
  region: "Valparaíso",
  instagramUrl: "https://www.instagram.com/darocaeventos/",
  instagramHandle: "@darocaeventos",
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
};

// Herramientas de medición. Si un ID queda vacío, esa herramienta no se carga.
// Los scripts solo se cargan en el sitio publicado (npm run build), no en `npm run dev`.
export const analytics = {
  // Google Analytics 4: ID de medición, tipo "G-XXXXXXXXXX"
  gaId: "G-XB2KG5VRPV",
  // Microsoft Clarity: ID del proyecto, tipo "abcd1234ef"
  clarityId: "zflvnbk0da",
  // Google Search Console: solo el valor "content" de la etiqueta meta de verificación
  searchConsoleToken: "zKe4Ajsx5936gnKYYoxpolUIp3JbiB697Yt7lXuY_5k",
};

export const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Servicios", path: "/servicios" },
  { name: "Galería", path: "/galeria" },
  { name: "Contáctanos", path: "/contactanos" },
];
