import type { ImageMetadata } from "astro";

import coffee2 from "../assets/imagenes/coffee_2.webp";
import coffeeGalletas from "../assets/imagenes/coffee_galletas.webp";
import coffeeGalletas2 from "../assets/imagenes/coffee_galletas_2.webp";
import coffeeGalletasPequena from "../assets/imagenes/coffee_galletas_pequeña.webp";
import mesa from "../assets/imagenes/mesa.webp";
import mesas3 from "../assets/imagenes/mesas_3.webp";
import mesasBonitas from "../assets/imagenes/mesas_bonitas.webp";
import mesasPuestaSol from "../assets/imagenes/mesas_puesta_sol.webp";
import quillayesArcoCeremonia from "../assets/imagenes/quillayes_arco_ceremonia.webp";
import quillayesBebidas from "../assets/imagenes/quillayes_bebidas.webp";
import quillayesBienvenida from "../assets/imagenes/quillayes_bienvenida.webp";
import quillayesCompletos from "../assets/imagenes/quillayes_completos.webp";
import quillayesHamburguesas from "../assets/imagenes/quillayes_hamburguesas.webp";
import quillayesParrilla from "../assets/imagenes/quillayes_parrilla.webp";
import quillayesParrilla2 from "../assets/imagenes/quillayes_parrilla_2.webp";
import quillayesPostres from "../assets/imagenes/quillayes_postres.webp";

export interface GalleryImage {
  src: ImageMetadata;
  alt: string;
}

export interface GalleryEvent {
  title: string;
  description: string;
  images: GalleryImage[];
}

// Cada evento es una sección de la galería. Para agregar uno nuevo:
// 1. Copia sus fotos en src/assets/imagenes e impórtalas arriba.
// 2. Agrega un objeto a esta lista con título, descripción y fotos.
// El texto "alt" describe la foto para Google y para personas con lector de pantalla.
export const galleryEvents: GalleryEvent[] = [
  {
    title: "Matrimonio en Placilla",
    description: "Recepción para 90 invitados bajo carpa, con mesas redondas, centros florales y servicio de coffee.",
    images: [
      { src: mesasPuestaSol, alt: "Mesas redondas bajo carpa blanca al atardecer" },
      { src: coffeeGalletas2, alt: "Estación de café con tazas, galletas y flores" },
      { src: mesasBonitas, alt: "Montaje de mesas redondas bajo carpa sobre pasto" },
      { src: mesas3, alt: "Vista general de la recepción bajo carpa con sillas blancas" },
      { src: coffeeGalletas, alt: "Estación de café con termo, tazas y galletas" },
      { src: mesa, alt: "Mesa con servilletas en abanico, copas y centro floral" },
      { src: coffee2, alt: "Mesa de café con tazas, cucharas y galletas" },
      { src: coffeeGalletasPequena, alt: "Detalle de tazas y galletas junto a un arreglo floral" },
    ],
  },
  {
    title: "Matrimonio en Quillayes",
    description: "Cocktail extendido para 40 invitados al aire libre, con parrilla, bocados y mesa de postres.",
    images: [
      { src: quillayesArcoCeremonia, alt: "Arco de ceremonia con telas blancas y pampas al aire libre" },
      { src: quillayesBienvenida, alt: "Rincón de bienvenida con letrero, pampas y alfombra de yute" },
      { src: quillayesCompletos, alt: "Bandeja de completos pequeños para cocktail" },
      { src: quillayesHamburguesas, alt: "Bandeja de mini hamburguesas para cocktail" },
      { src: quillayesParrilla2, alt: "Parrilla con carne, papas y champiñones" },
      { src: quillayesParrilla, alt: "Parrilla con cortes de carne y longanizas" },
      { src: quillayesPostres, alt: "Repisa de madera con postres individuales y tazas de café" },
      { src: quillayesBebidas, alt: "Bebidas y cervezas en hielo para el cocktail" },
    ],
  },
];
