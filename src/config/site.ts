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

export const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Servicios", path: "/servicios" },
  { name: "Galería", path: "/galeria" },
  { name: "Contáctanos", path: "/contactanos" },
];
