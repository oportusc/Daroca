import { Link } from "react-router";
import { Heart, GraduationCap, Briefcase, Cake, Coffee } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Heart,
      title: "Matrimonios",
      description: "Hacemos realidad el día más especial de tu vida. Desde banquetes íntimos hasta grandes celebraciones, nos encargamos de cada detalle para que tu boda sea perfecta. Menús personalizados, decoración elegante y servicio impecable.",
      image: "https://images.unsplash.com/photo-1767986012547-3fc29b18339f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHJlY2VwdGlvbnxlbnwxfHx8fDE3NzM0MDY5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Menú personalizado", "Decoración incluida", "Servicio de meseros", "Coordinación del evento"],
    },
    {
      icon: GraduationCap,
      title: "Graduaciones",
      description: "Celebra tu logro académico con estilo. Ofrecemos opciones tanto para ceremonias formales como para fiestas más casuales. Buffets variados, cócteles y postres especiales para hacer de este momento algo inolvidable.",
      image: "https://images.unsplash.com/photo-1758682016284-78f5266d5743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VsZWJyYXRpb24lMjBwYXJ0eXxlbnwxfHx8fDE3NzM0MDY5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Buffet variado", "Opciones vegetarianas", "Torta de graduación", "Bebidas incluidas"],
    },
    {
      icon: Briefcase,
      title: "Eventos Empresa",
      description: "Servicios profesionales para eventos corporativos, lanzamientos de productos, conferencias y reuniones de negocios. Menús ejecutivos, coffee breaks y cenas de gala que impresionarán a tus invitados.",
      image: "https://images.unsplash.com/photo-1543283864-0eba98564bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMGV2ZW50fGVufDF8fHx8MTc3MzM2MzM1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Menús ejecutivos", "Coffee breaks", "Servicio premium", "Logística completa"],
    },
    {
      icon: Cake,
      title: "Cumpleaños",
      description: "Desde celebraciones infantiles hasta fiestas de adultos, creamos experiencias únicas adaptadas a tu estilo y preferencias. Tortas personalizadas, decoración temática y menús para todos los gustos.",
      image: "https://images.unsplash.com/photo-1650584997985-e713a869ee77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzczMzQ4MTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Tortas personalizadas", "Decoración temática", "Animación opcional", "Menú flexible"],
    },
    {
      icon: Coffee,
      title: "Coffee Break",
      description: "Pausas perfectas para tus reuniones, seminarios o talleres. Variedad de cafés gourmet, tés, pastelería fresca, frutas y snacks saludables. Ideal para mantener a tus asistentes energizados y concentrados.",
      image: "https://images.unsplash.com/photo-1670781875897-5a5d20d97b94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicmVhayUyMGNhdGVyaW5nfGVufDF8fHx8MTc3MzQwNjkxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Café gourmet", "Pastelería fresca", "Opciones saludables", "Servicio rápido"],
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-6xl mb-6"
            style={{ 
              fontFamily: "var(--font-heading)",
              color: "var(--primary)",
              fontWeight: 700
            }}
          >
            Nuestros Servicios
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--foreground)" }}>
            Ofrecemos una amplia gama de servicios de banquetería para hacer de tu evento 
            una experiencia memorable
          </p>
          <div className="w-24 h-1 mx-auto mt-6" style={{ backgroundColor: "var(--secondary)" }} />
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Image */}
                <div 
                  className={`relative h-96 overflow-hidden rounded-lg shadow-xl ${
                    isEven ? "" : "lg:col-start-2"
                  }`}
                >
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: "linear-gradient(to top, rgba(42, 143, 143, 0.3), transparent)" 
                    }}
                  />
                </div>

                {/* Content */}
                <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    style={{ backgroundColor: "var(--secondary)" }}
                  >
                    <Icon className="w-8 h-8" style={{ color: "var(--primary)" }} />
                  </div>
                  
                  <h2 
                    className="text-3xl md:text-4xl mb-4"
                    style={{ 
                      fontFamily: "var(--font-heading)",
                      color: "var(--primary)",
                      fontWeight: 600
                    }}
                  >
                    {service.title}
                  </h2>
                  
                  <p className="text-lg mb-6" style={{ color: "var(--foreground)" }}>
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 
                      className="text-lg mb-3"
                      style={{ 
                        fontFamily: "var(--font-heading)",
                        color: "var(--primary)",
                        fontWeight: 600
                      }}
                    >
                      Incluye:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className="flex items-center"
                          style={{ color: "var(--foreground)" }}
                        >
                          <span 
                            className="w-2 h-2 rounded-full mr-3"
                            style={{ backgroundColor: "var(--primary)" }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contactanos"
                    className="inline-block px-6 py-3 rounded-lg transition-all hover:shadow-lg"
                    style={{ 
                      backgroundColor: "var(--primary)",
                      color: "var(--primary-foreground)",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600
                    }}
                  >
                    Solicitar Cotización
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div 
          className="mt-20 py-16 px-8 rounded-lg text-center"
          style={{ backgroundColor: "var(--secondary)" }}
        >
          <h2 
            className="text-3xl md:text-4xl mb-4"
            style={{ 
              fontFamily: "var(--font-heading)",
              color: "var(--primary)",
              fontWeight: 600
            }}
          >
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "var(--foreground)" }}>
            También ofrecemos servicios personalizados para eventos especiales. 
            Contáctanos y cuéntanos sobre tu proyecto.
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
            Contáctanos
          </Link>
        </div>
      </div>
    </div>
  );
}
