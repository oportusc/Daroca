import { Link } from "react-router";
import { Calendar, Users, Award, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: Calendar,
      title: "Planificación Completa",
      description: "Nos encargamos de cada detalle para que tu evento sea perfecto.",
    },
    {
      icon: Users,
      title: "Equipo Profesional",
      description: "Staff calificado y con amplia experiencia en banquetería.",
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Ingredientes frescos y preparación de primera calidad.",
    },
    {
      icon: Heart,
      title: "Atención Personalizada",
      description: "Adaptamos cada servicio a tus necesidades y preferencias.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1767986012547-3fc29b18339f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHJlY2VwdGlvbnxlbnwxfHx8fDE3NzM0MDY5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Elegant wedding reception"
            className="w-full h-full object-cover"
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
            Daroca Eventos
          </h1>
          <p 
            className="text-xl sm:text-2xl md:text-3xl mb-8 opacity-95"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Creando momentos inolvidables para tus celebraciones más especiales
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
            ¿Por qué elegirnos?
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
            Nuestro Trabajo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1698280954292-c955f882486f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdGFibGUlMjBzZXR0aW5nfGVufDF8fHx8MTc3MzQwNjkxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Elegant table setting"
                className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
              />
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766719628920-854680a92c22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGV2ZW50JTIwc2V0dXB8ZW58MXx8fHwxNzczNDA2OTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Catering event setup"
                className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
              />
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1578366941741-9e517759c620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXRlcmluZyUyMHRlYW18ZW58MXx8fHwxNzczNDA2OTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
            ¿Listo para planificar tu evento?
          </h2>
          <p className="text-lg md:text-xl mb-8" style={{ color: "var(--foreground)" }}>
            Contáctanos hoy y déjanos hacer de tu celebración un momento inolvidable
          </p>
          <Link
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
          </Link>
        </div>
      </section>
    </div>
  );
}
