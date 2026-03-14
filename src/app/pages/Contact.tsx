import { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simulamos el envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form data:", data);
    
    toast.success("¡Mensaje enviado con éxito!", {
      description: "Nos pondremos en contacto contigo pronto."
    });
    
    reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Av. Principal 1234, Santiago, Chile",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+56 9 1234 5678",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@darocaeventos.com",
    },
  ];

  const eventTypes = [
    "Matrimonio",
    "Graduación",
    "Evento Empresa",
    "Cumpleaños",
    "Coffee Break",
    "Otro",
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
            Contáctanos
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--foreground)" }}>
            Estamos aquí para ayudarte a planificar tu evento perfecto. 
            Completa el formulario y nos pondremos en contacto contigo pronto.
          </p>
          <div className="w-24 h-1 mx-auto mt-6" style={{ backgroundColor: "var(--secondary)" }} />
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg text-center shadow-lg"
                style={{ backgroundColor: "white" }}
              >
                <div 
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                  style={{ backgroundColor: "var(--secondary)" }}
                >
                  <Icon className="w-7 h-7" style={{ color: "var(--primary)" }} />
                </div>
                <h3 
                  className="text-xl mb-2"
                  style={{ 
                    fontFamily: "var(--font-heading)",
                    color: "var(--primary)",
                    fontWeight: 600
                  }}
                >
                  {info.title}
                </h3>
                <p style={{ color: "var(--foreground)" }}>{info.content}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div 
            className="p-8 rounded-lg shadow-xl"
            style={{ backgroundColor: "white" }}
          >
            <h2 
              className="text-3xl mb-6"
              style={{ 
                fontFamily: "var(--font-heading)",
                color: "var(--primary)",
                fontWeight: 600
              }}
            >
              Solicita tu Cotización
            </h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Nombre Completo *
                </label>
                <input
                  {...register("name", { required: "El nombre es requerido" })}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: errors.name ? "var(--destructive)" : "var(--border)",
                    backgroundColor: "var(--input-background)",
                  }}
                  placeholder="Juan Pérez"
                />
                {errors.name && (
                  <p className="mt-1 text-sm" style={{ color: "var(--destructive)" }}>
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Email *
                </label>
                <input
                  {...register("email", { 
                    required: "El email es requerido",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido"
                    }
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: errors.email ? "var(--destructive)" : "var(--border)",
                    backgroundColor: "var(--input-background)",
                  }}
                  placeholder="juan@ejemplo.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm" style={{ color: "var(--destructive)" }}>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label 
                  htmlFor="phone" 
                  className="block mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Teléfono *
                </label>
                <input
                  {...register("phone", { required: "El teléfono es requerido" })}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: errors.phone ? "var(--destructive)" : "var(--border)",
                    backgroundColor: "var(--input-background)",
                  }}
                  placeholder="+56 9 1234 5678"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm" style={{ color: "var(--destructive)" }}>
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Event Type */}
              <div>
                <label 
                  htmlFor="eventType" 
                  className="block mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Tipo de Evento *
                </label>
                <select
                  {...register("eventType", { required: "Selecciona un tipo de evento" })}
                  id="eventType"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: errors.eventType ? "var(--destructive)" : "var(--border)",
                    backgroundColor: "var(--input-background)",
                  }}
                >
                  <option value="">Selecciona una opción</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.eventType && (
                  <p className="mt-1 text-sm" style={{ color: "var(--destructive)" }}>
                    {errors.eventType.message}
                  </p>
                )}
              </div>

              {/* Event Date */}
              <div>
                <label 
                  htmlFor="eventDate" 
                  className="block mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Fecha del Evento *
                </label>
                <input
                  {...register("eventDate", { required: "La fecha es requerida" })}
                  type="date"
                  id="eventDate"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: errors.eventDate ? "var(--destructive)" : "var(--border)",
                    backgroundColor: "var(--input-background)",
                  }}
                />
                {errors.eventDate && (
                  <p className="mt-1 text-sm" style={{ color: "var(--destructive)" }}>
                    {errors.eventDate.message}
                  </p>
                )}
              </div>

              {/* Guest Count */}
              <div>
                <label 
                  htmlFor="guestCount" 
                  className="block mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Cantidad de Invitados *
                </label>
                <input
                  {...register("guestCount", { required: "La cantidad de invitados es requerida" })}
                  type="number"
                  id="guestCount"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: errors.guestCount ? "var(--destructive)" : "var(--border)",
                    backgroundColor: "var(--input-background)",
                  }}
                  placeholder="50"
                  min="1"
                />
                {errors.guestCount && (
                  <p className="mt-1 text-sm" style={{ color: "var(--destructive)" }}>
                    {errors.guestCount.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Mensaje
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 resize-none"
                  style={{ 
                    borderColor: "var(--border)",
                    backgroundColor: "var(--input-background)",
                  }}
                  placeholder="Cuéntanos más detalles sobre tu evento..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600
                }}
              >
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Solicitud
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            <div 
              className="p-8 rounded-lg"
              style={{ backgroundColor: "var(--secondary)" }}
            >
              <h3 
                className="text-2xl mb-4"
                style={{ 
                  fontFamily: "var(--font-heading)",
                  color: "var(--primary)",
                  fontWeight: 600
                }}
              >
                ¿Por qué contactarnos?
              </h3>
              <ul className="space-y-3" style={{ color: "var(--foreground)" }}>
                <li className="flex items-start">
                  <span 
                    className="w-2 h-2 rounded-full mr-3 mt-2"
                    style={{ backgroundColor: "var(--primary)" }}
                  />
                  <span>Cotización gratuita y sin compromiso</span>
                </li>
                <li className="flex items-start">
                  <span 
                    className="w-2 h-2 rounded-full mr-3 mt-2"
                    style={{ backgroundColor: "var(--primary)" }}
                  />
                  <span>Asesoría personalizada para tu evento</span>
                </li>
                <li className="flex items-start">
                  <span 
                    className="w-2 h-2 rounded-full mr-3 mt-2"
                    style={{ backgroundColor: "var(--primary)" }}
                  />
                  <span>Respuesta en menos de 24 horas</span>
                </li>
                <li className="flex items-start">
                  <span 
                    className="w-2 h-2 rounded-full mr-3 mt-2"
                    style={{ backgroundColor: "var(--primary)" }}
                  />
                  <span>Flexibilidad en fechas y servicios</span>
                </li>
              </ul>
            </div>

            <div 
              className="p-8 rounded-lg"
              style={{ backgroundColor: "white" }}
            >
              <h3 
                className="text-2xl mb-4"
                style={{ 
                  fontFamily: "var(--font-heading)",
                  color: "var(--primary)",
                  fontWeight: 600
                }}
              >
                Horario de Atención
              </h3>
              <div className="space-y-2" style={{ color: "var(--foreground)" }}>
                <p className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>9:00 - 19:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sábados:</span>
                  <span>10:00 - 14:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Domingos:</span>
                  <span>Cerrado</span>
                </p>
              </div>
            </div>

            <div 
              className="p-8 rounded-lg"
              style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
            >
              <h3 
                className="text-2xl mb-4"
                style={{ 
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600
                }}
              >
                ¿Prefieres llamarnos?
              </h3>
              <p className="mb-4">
                Nuestro equipo está listo para atenderte y responder todas tus consultas.
              </p>
              <a
                href="tel:+56912345678"
                className="inline-block px-6 py-3 rounded-lg transition-all"
                style={{ 
                  backgroundColor: "var(--secondary)",
                  color: "var(--secondary-foreground)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600
                }}
              >
                <Phone className="inline-block w-5 h-5 mr-2" />
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
