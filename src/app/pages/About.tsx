import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
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
            Nosotros
          </h1>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: "var(--secondary)" }} />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 
              className="text-3xl md:text-4xl mb-6"
              style={{ 
                fontFamily: "var(--font-heading)",
                color: "var(--primary)",
                fontWeight: 600
              }}
            >
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-lg" style={{ color: "var(--foreground)" }}>
              <p>
                Daroca Eventos nace de la pasión por crear experiencias memorables y la dedicación 
                al servicio de excelencia. Con más de una década de experiencia en el rubro de la 
                banquetería, hemos tenido el honor de ser parte de miles de celebraciones que han 
                marcado la vida de nuestros clientes.
              </p>
              <p>
                Nuestra filosofía se basa en la atención al detalle, la calidad superior de nuestros 
                productos y el servicio personalizado que caracteriza cada evento que organizamos. 
                Entendemos que cada celebración es única y merece un tratamiento especial.
              </p>
              <p>
                A lo largo de los años, hemos perfeccionado nuestros procesos, expandido nuestro 
                equipo de profesionales y construido relaciones duraderas con proveedores de primera 
                calidad, todo con el objetivo de ofrecer a nuestros clientes una experiencia 
                incomparable.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1578366941741-9e517759c620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXRlcmluZyUyMHRlYW18ZW58MXx8fHwxNzczNDA2OTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional catering team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1698280954292-c955f882486f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdGFibGUlMjBzZXR0aW5nfGVufDF8fHx8MTc3MzQwNjkxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Elegant table setting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div 
          className="py-16 px-8 rounded-lg mb-16"
          style={{ backgroundColor: "white" }}
        >
          <h2 
            className="text-3xl md:text-4xl text-center mb-12"
            style={{ 
              fontFamily: "var(--font-heading)",
              color: "var(--primary)",
              fontWeight: 600
            }}
          >
            Nuestros Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: "var(--secondary)" }}
              >
                <span 
                  className="text-3xl"
                  style={{ 
                    fontFamily: "var(--font-heading)",
                    color: "var(--primary)",
                    fontWeight: 700
                  }}
                >
                  1
                </span>
              </div>
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: "var(--font-heading)",
                  color: "var(--primary)",
                  fontWeight: 600
                }}
              >
                Excelencia
              </h3>
              <p style={{ color: "var(--foreground)" }}>
                Nos comprometemos a ofrecer siempre el más alto estándar en cada servicio, 
                desde la selección de ingredientes hasta la presentación final.
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: "var(--secondary)" }}
              >
                <span 
                  className="text-3xl"
                  style={{ 
                    fontFamily: "var(--font-heading)",
                    color: "var(--primary)",
                    fontWeight: 700
                  }}
                >
                  2
                </span>
              </div>
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: "var(--font-heading)",
                  color: "var(--primary)",
                  fontWeight: 600
                }}
              >
                Compromiso
              </h3>
              <p style={{ color: "var(--foreground)" }}>
                Tu evento es nuestra prioridad. Nos dedicamos completamente a asegurar que 
                cada detalle sea perfecto y supere tus expectativas.
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: "var(--secondary)" }}
              >
                <span 
                  className="text-3xl"
                  style={{ 
                    fontFamily: "var(--font-heading)",
                    color: "var(--primary)",
                    fontWeight: 700
                  }}
                >
                  3
                </span>
              </div>
              <h3 
                className="text-2xl mb-3"
                style={{ 
                  fontFamily: "var(--font-heading)",
                  color: "var(--primary)",
                  fontWeight: 600
                }}
              >
                Innovación
              </h3>
              <p style={{ color: "var(--foreground)" }}>
                Nos mantenemos actualizados con las últimas tendencias en banquetería y eventos 
                para ofrecer propuestas creativas y modernas.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className="p-8 rounded-lg"
            style={{ backgroundColor: "var(--secondary)" }}
          >
            <h2 
              className="text-3xl mb-4"
              style={{ 
                fontFamily: "var(--font-heading)",
                color: "var(--primary)",
                fontWeight: 600
              }}
            >
              Nuestra Misión
            </h2>
            <p className="text-lg" style={{ color: "var(--foreground)" }}>
              Brindar servicios de banquetería y organización de eventos de la más alta calidad, 
              creando experiencias memorables que superen las expectativas de nuestros clientes 
              y sean recordadas por años.
            </p>
          </div>

          <div 
            className="p-8 rounded-lg"
            style={{ backgroundColor: "white" }}
          >
            <h2 
              className="text-3xl mb-4"
              style={{ 
                fontFamily: "var(--font-heading)",
                color: "var(--primary)",
                fontWeight: 600
              }}
            >
              Nuestra Visión
            </h2>
            <p className="text-lg" style={{ color: "var(--foreground)" }}>
              Ser reconocidos como la empresa líder en banquetería y organización de eventos, 
              destacándonos por nuestra innovación, calidad y el trato personalizado que 
              caracteriza cada uno de nuestros servicios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
