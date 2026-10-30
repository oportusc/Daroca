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

// Campo suave: al hacer foco toma borde teal con un halo, nunca negro
const fieldBase =
  "w-full px-4 py-3 rounded-xl border-[1.5px] bg-[var(--background)] outline-none appearance-none " +
  "transition-[border-color,box-shadow,background-color] duration-200 focus:bg-white";
const fieldOk =
  "border-[var(--muted)] hover:border-[#bfbaa6] focus:border-[var(--primary)] focus:shadow-[0_0_0_4px_rgba(42,143,143,0.18)]";
const fieldError =
  "border-[var(--destructive)] focus:shadow-[0_0_0_4px_rgba(212,24,61,0.15)]";

const fieldClass = (hasError?: boolean) => `${fieldBase} ${hasError ? fieldError : fieldOk}`;

const labelClass = "block mb-2 font-medium";
const errorClass = "mt-1 text-sm text-[var(--destructive)]";

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
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5" noValidate>
        {/* Honeypot: campo invisible para atrapar bots */}
        <p className="hidden" aria-hidden="true">
          <label>
            No llenar este campo:
            <input {...register("bot-field")} tabIndex={-1} autoComplete="off" />
          </label>
        </p>

        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>Nombre *</label>
          <input
            {...register("name", { required: "Escribe tu nombre" })}
            type="text"
            id="name"
            autoComplete="name"
            className={fieldClass(!!errors.name)}
            placeholder="Juan Pérez"
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>Teléfono *</label>
          <input
            {...register("phone", { required: "Escribe un teléfono para llamarte" })}
            type="tel"
            id="phone"
            autoComplete="tel"
            className={fieldClass(!!errors.phone)}
            placeholder="+56 9 1234 5678"
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        {/* Email */}
        <div className="sm:col-span-2">
          <label htmlFor="email" className={labelClass}>Correo *</label>
          <input
            {...register("email", {
              required: "Escribe tu correo",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Revisa el correo, falta algo"
              }
            })}
            type="email"
            id="email"
            autoComplete="email"
            className={fieldClass(!!errors.email)}
            placeholder="juan@ejemplo.com"
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        {/* Event Type */}
        <div>
          <label htmlFor="eventType" className={labelClass}>Tipo de evento *</label>
          <select
            {...register("eventType", { required: "Elige el tipo de evento" })}
            id="eventType"
            className={`${fieldClass(!!errors.eventType)} pr-11 bg-no-repeat bg-[position:right_1rem_center] bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='14'%20height='9'%3E%3Cpath%20d='M1%201l6%206%206-6'%20fill='none'%20stroke='%232a8f8f'%20stroke-width='2'/%3E%3C/svg%3E")]`}
          >
            <option value="">Elige uno</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.eventType && <p className={errorClass}>{errors.eventType.message}</p>}
        </div>

        {/* Event Date */}
        <div>
          <label htmlFor="eventDate" className={labelClass}>Fecha del evento *</label>
          <input
            {...register("eventDate", { required: "Elige la fecha" })}
            type="date"
            id="eventDate"
            className={fieldClass(!!errors.eventDate)}
          />
          {errors.eventDate && <p className={errorClass}>{errors.eventDate.message}</p>}
        </div>

        {/* Guest Count */}
        <div className="sm:col-span-2">
          <label htmlFor="guestCount" className={labelClass}>Invitados aproximados</label>
          <input
            {...register("guestCount")}
            type="number"
            id="guestCount"
            min={1}
            className={fieldClass()}
            placeholder="80"
          />
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>Cuéntanos más</label>
          <textarea
            {...register("message")}
            id="message"
            rows={4}
            className={`${fieldClass()} resize-y`}
            placeholder="Lugar, horario, estilo, menú que imaginas…"
          />
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-[var(--primary)] hover:bg-[#1f6b6b] active:scale-[0.97] transition-[background-color,transform] duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[var(--primary)]"
          >
            {isSubmitting ? (
              <>Enviando...</>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Enviar solicitud
              </>
            )}
          </button>
        </div>
      </form>
      <Toaster position="top-right" richColors />
    </>
  );
}
