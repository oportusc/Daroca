import { Link } from "react-router";
import { Calendar, Users, Award, Heart, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import mesas from "../../assets/imagenes/mesas_puesta_sol.webp"
import coffee from "../../assets/imagenes/coffee_galletas_2.webp"
import mesa_cerca from "../../assets/imagenes/mesa_cerca.webp"
import mesas_galeria from "../../assets/imagenes/mesas_3.webp"
import coffee_galletas from "../../assets/imagenes/coffee_galletas_2.webp"
import mesa_galeria from "../../assets/imagenes/mesa_2.webp"

export function Home() {
  // const features = [
  //   {
  //     icon: Calendar,
  //     title: "Planificación Completa",
  //     description: "Nos encargamos de cada detalle para que tu evento sea perfecto.",
  //   },
  //   {
  //     icon: Users,
  //     title: "Equipo Profesional",
  //     description: "Staff calificado y con amplia experiencia en banquetería.",
  //   },
  //   {
  //     icon: Award,
  //     title: "Calidad Garantizada",
  //     description: "Ingredientes frescos y preparación de primera calidad.",
  //   },
  //   {
  //     icon: Heart,
  //     title: "Atención Personalizada",
  //     description: "Adaptamos cada servicio a tus necesidades y preferencias.",
  //   },
  // ];

  const whatsappNumber = "56987297888";
  const whatsappMessage = "Hola! Me gustaría hacer una cotización para mi evento.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    // const url = `https://wa.me/c/56987297888`;
    window.open(url, '_blank');
  };

  const features = [
    {
      icon: Calendar,
      title: "Planificación completa",
      description: "Organizamos matrimonios, graduaciones y eventos corporativos en la Quinta Región, cuidando cada detalle."
    },
    {
      icon: Users,
      title: "Equipo profesional",
      description: "Contamos con personal con experiencia en atención y montaje para todo tipo de eventos."
    },
    {
      icon: Award,
      title: "Calidad en cada preparación",
      description: "Trabajamos con ingredientes frescos y cuidamos la presentación para una experiencia de alto nivel."
    },
    {
      icon: Heart,
      title: "Atención personalizada",
      description: "Adaptamos cada servicio a tus necesidades, ya sea un matrimonio, graduación o coffee break empresarial."
    }
  ];
  return (
    <div>

      {/* <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={mesas}
            alt="Elegant wedding reception"
            className="w-full h-full object-cover brightness-90"
          />
          <div 
            className="absolute inset-0" 
            style={{ backgroundColor: "rgba(42, 143, 143, 0.4)" }}
          />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl mb-6"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
          >
            Banquetería en Villa Alemana y Quinta Región
          </h1>

          <p
            className="text-xl sm:text-2xl md:text-3xl mb-8 opacity-95"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Daroca Eventos
          </p>

          <Link
            to="/contactanos"
            className="inline-block px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            style={{
              backgroundColor: "var(--secondary)",
              color: "var(--secondary-foreground)",
              fontFamily: "var(--font-body)",
              fontWeight: 600
            }}
          >
            Solicita tu Cotización
          </Link>
        </div>
      </section> */}
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] grid grid-cols-1 md:grid-cols-3 overflow-hidden">

        {/* Imágenes */}
        <img
          src={mesa_cerca}
          alt="Banquetería para eventos en la Quinta Región"
          className="w-full h-full object-cover hidden md:block"
        />
        <img
          src={coffee}
          alt="Decoración de matrimonios en Viña del Mar"
          className="w-full h-full object-cover hidden md:block"
        />
        <img
          src={mesas}
          alt="Coffee break para empresas en Valparaíso"
          className="w-full h-full object-cover"
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Contenido */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl mb-6"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
          >
            Banquetería en Villa Alemana y Quinta Región
          </h1>
          <p className="text-3xl sm:text-4xl mb-2 font-semibold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Daroca Eventos
          </p>

          <p className="text-lg sm:text-xl mb-6 max-w-2xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Matrimonios, graduaciones, coffee breaks y eventos corporativos
          </p>

          <Link
            to="/contactanos"
            className="inline-block px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            style={{
              backgroundColor: "var(--secondary)",
              color: "var(--secondary-foreground)",
              fontFamily: "var(--font-body)",
              fontWeight: 600
            }}
          >
            Solicita tu Cotización
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl text-center mb-16"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--primary)",
              fontWeight: 600
            }}
          >
            ¿Por qué elegir Daroca Eventos?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg transition-all hover:shadow-lg"
                  style={{ backgroundColor: "white" }}
                >
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    style={{ backgroundColor: "var(--secondary)" }}
                  >
                    <Icon className="w-8 h-8" style={{ color: "var(--primary)" }} />
                  </div>
                  <h3
                    className="text-xl mb-3"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--primary)",
                      fontWeight: 600
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ color: "var(--foreground)" }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "white" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl text-center mb-16"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--primary)",
              fontWeight: 600
            }}
          >
            Algunos de nuestros eventos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src={mesas_galeria}
                alt="Elegant table setting"
                className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
              />
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src={coffee_galletas}
                alt="Catering event setup"
                className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
              />
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src={mesa_galeria}
                alt="Professional catering team"
                className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: "var(--secondary)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--primary)",
              fontWeight: 600
            }}
          >
            Cotiza tu evento en minutos
          </h2>
          <p className="text-lg md:text-xl mb-8" style={{ color: "var(--foreground)" }}>
            Escríbenos por WhatsApp y recibe una propuesta personalizada para tu matrimonio, graduación o evento corporativo.
          </p>
          {/* <Link
            to="/contactanos"
            className="inline-block px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              fontFamily: "var(--font-body)",
              fontWeight: 600
            }}
          >
            Contáctanos Ahora
          </Link> */}
          <button
            onClick={handleWhatsAppClick}
            // className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 inline-flex items-center gap-3 shadow-lg text-lg cursor-pointer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg transition-all transform hover:scale-105 cursor-pointer"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              fontFamily: "var(--font-body)",
              fontWeight: 600
            }}
          >
            <MessageCircle className="w-6 h-6" />
            Cotizar por WhatsApp
          </button>

          <p className="text-gray-500 text-sm pt-2" >
            * Cupos limitados por fecha 
          </p>
        </div>
      </section>
    </div>
  );
}
