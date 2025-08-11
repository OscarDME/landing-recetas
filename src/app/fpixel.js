// fpixel.js
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "";

// Wrapper seguro para llamar a fbq solo en el navegador
const fbqSafe = (...args) => {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq(...args);
};

// PageView estándar (se recomienda dispararlo al montar la página)
export const pageview = () => {
  if (!FB_PIXEL_ID) return;
  fbqSafe("track", "PageView");
};

// Eventos estándar (e.g., "ViewContent", "InitiateCheckout", "Purchase")
export const track = (event, params = {}) => {
  if (!FB_PIXEL_ID) return;
  fbqSafe("track", event, params);
};

// Eventos personalizados si los necesitas (e.g., "LeadFormStart")
export const trackCustom = (event, params = {}) => {
  if (!FB_PIXEL_ID) return;
  fbqSafe("trackCustom", event, params);
};
