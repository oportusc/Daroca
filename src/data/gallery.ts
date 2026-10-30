import type { ImageMetadata } from "astro";

import barra from "../assets/imagenes/barra.webp";
import barra2 from "../assets/imagenes/barra_2.webp";
import coffee from "../assets/imagenes/coffee.webp";
import coffee2 from "../assets/imagenes/coffee_2.webp";
import coffeeGalletas from "../assets/imagenes/coffee_galletas.webp";
import coffeeGalletas2 from "../assets/imagenes/coffee_galletas_2.webp";
import coffeeGalletasPequena from "../assets/imagenes/coffee_galletas_pequeña.webp";
import mesa from "../assets/imagenes/mesa.webp";
import mesa2 from "../assets/imagenes/mesa_2.webp";
import mesa3 from "../assets/imagenes/mesa_3.webp";
import mesaCerca from "../assets/imagenes/mesa_cerca.webp";
import mesas from "../assets/imagenes/mesas.webp";
import mesas2 from "../assets/imagenes/mesas_2.webp";
import mesas3 from "../assets/imagenes/mesas_3.webp";
import mesasBonitas from "../assets/imagenes/mesas_bonitas.webp";
import mesasConSol from "../assets/imagenes/mesas_con_sol.webp";
import mesasPuestaSol from "../assets/imagenes/mesas_puesta_sol.webp";

export interface GalleryImage {
  src: ImageMetadata;
  alt: string;
}

// Para agregar una foto: ponla en src/assets/imagenes, impórtala arriba y súmala a esta lista.
// El texto "alt" describe la foto para Google y para personas con lector de pantalla.
export const galleryImages: GalleryImage[] = [
  { src: mesasPuestaSol, alt: "Mesas decoradas para un evento al atardecer" },
  { src: mesaCerca, alt: "Detalle de una mesa decorada para banquete" },
  { src: coffeeGalletas2, alt: "Coffee break con galletas y café" },
  { src: mesasBonitas, alt: "Montaje de mesas decoradas para un evento" },
  { src: barra, alt: "Barra montada para un evento" },
  { src: coffee, alt: "Coffee break preparado para una reunión" },
  { src: mesas3, alt: "Mesas preparadas para un evento al aire libre" },
  { src: mesa2, alt: "Mesa decorada con vajilla y centro de mesa" },
  { src: coffeeGalletas, alt: "Galletas para coffee break empresarial" },
  { src: mesasConSol, alt: "Mesas decoradas en un evento de día" },
  { src: barra2, alt: "Barra decorada para celebración" },
  { src: mesa, alt: "Mesa preparada para banquete" },
  { src: coffee2, alt: "Mesa de coffee break con café y bocados" },
  { src: mesas, alt: "Montaje de mesas para matrimonio" },
  { src: mesa3, alt: "Mesa decorada para celebración" },
  { src: coffeeGalletasPequena, alt: "Detalle de galletas para coffee break" },
  { src: mesas2, alt: "Mesas decoradas para recepción" },
];
