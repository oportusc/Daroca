import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import { toast, Toaster } from "sonner";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
  "bot-field"?: string;
}

// Debe coincidir con el nombre del formulario oculto en src/pages/contactanos.astro
const NETLIFY_FORM_NAME = "contacto";

const eventTypes = [
  "Matrimonio",
  "Graduación",
  "Evento Empresa",
  "Cumpleaños",
  "Coffee Break",
  "Otro",
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": NETLIFY_FORM_NAME,
          ...data,
          "bot-field": data["bot-field"] ?? "",
        }).toString(),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      toast.success("¡Mensaje enviado con éxito!", {
        description: "Nos pondremos en contacto contigo pronto."
      });
      reset();
    } catch {
      toast.error("No pudimos enviar tu mensaje", {
        description: "Por favor intenta nuevamente o contáctanos por WhatsApp."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Honeypot: campo invisible para atrapar bots */}
        <p className="hidden" aria-hidden="true">
          <label>
            No llenar este campo:
            <input {...register("bot-field")} tabIndex={-1} autoComplete="off" />
          </label>
        </p>

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
      <Toaster position="top-right" richColors />
    </>
  );
}
