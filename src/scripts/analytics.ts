// Funciones compartidas para medir eventos y guardar el permiso de cookies.
// Las usan el layout (clics en WhatsApp, teléfono, etc.), el aviso de cookies y el formulario.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export const CONSENT_KEY = "daroca-cookies";

export type Consent = "granted" | "denied";

export function getConsent(): Consent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Sin almacenamiento (modo privado): el permiso vale solo para esta visita
  }

  window.gtag?.("consent", "update", { analytics_storage: value });
  if (value === "granted") {
    window.clarity?.("consent");
  } else {
    window.clarity?.("consent", false);
  }
}

// Envía un evento a Google Analytics y lo marca en Clarity (para filtrar grabaciones)
export function trackEvent(name: string, params: Record<string, string> = {}) {
  window.gtag?.("event", name, params);
  window.clarity?.("event", name);
}

// Detecta clics en los enlaces de contacto de cualquier página
export function trackContactClicks() {
  document.addEventListener("click", (event) => {
    const link = (event.target as Element | null)?.closest?.("a");
    if (!link) return;

    const href = link.getAttribute("href") ?? "";
    let name = "";
    if (href.includes("wa.me")) name = "click_whatsapp";
    else if (href.startsWith("tel:")) name = "click_phone";
    else if (href.startsWith("mailto:")) name = "click_email";
    else if (href.includes("instagram.com")) name = "click_instagram";
    if (!name) return;

    // Dónde estaba el enlace: header, footer o el contenido de la página
    const area = link.closest("footer") ? "footer" : link.closest("header") ? "header" : "page";
    trackEvent(name, { link_area: area, page: location.pathname });
  });
}
