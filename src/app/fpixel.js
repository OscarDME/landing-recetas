export const FB_PIXEL_ID = 1394486948289979;

const fbqSafe = (...args) => {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq(...args);
};

export const track = (event, params = {}) => {
  if (!FB_PIXEL_ID) return;
  if (event === "PageView") {
    if (window.__pvFired) return;
    window.__pvFired = true;
  }
  fbqSafe("track", event, params);
};
