// eslint-disable-next-line consistent-return
export async function registerServiceWorker(options = {}) {
  const { scope = "/wm-agent/v1/", onError, onSuccess, url } = options;

  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(url, {
        scope,
      });

      console.log(`Service Worker registrado con scope: ${registration.scope}`);

      if (onSuccess) {
        onSuccess(registration);
      }

      return registration;
    } catch (error) {
      console.error("Error al registrar el Service Worker:", error);

      if (onError) {
        onError(error);
      }
    }
  } else {
    console.warn("El navegador no soporta Service Workers.");
  }
}
