import { METRICS } from "../../metrics/constants";
import { FEATURE_NAMES } from "../../features/constants";
import { otel } from "../otel";
import { WM_EXPORTER_METRICS_ENDPOINT } from "../signals/constants";

export const webVitals = {
  enabled: true,
  auto_instrument: true,
  harvester: true,
  sampling: 1.0,
  features_required: [FEATURE_NAMES.sessionTrace],
  mapped_attributes: {
    required: [
      METRICS.CLS,
      METRICS.FCP,
      METRICS.FID,
      METRICS.INP,
      METRICS.LCP,
      METRICS.TTFB,
      METRICS.TIME_TO_FIRST_BYTE,
      METRICS.RESOURCE_LOAD_DELAY,
      METRICS.RESOURCE_LOAD_TIME,
      METRICS.ELEMENT_RENDER_DELAY,
      METRICS.INP_EVENT_TIME,
      METRICS.LARGEST_SHIFT_VALUE,
      METRICS.FIRST_BYTE_TO_FCP,
      METRICS.TIME_TO_FIRST_BYTE_TO_FCP,
      METRICS.WAITING_TIME,
      METRICS.CONNECTION_TIME,
      METRICS.REQUEST_TIME,
      METRICS.EVENT_TIME_FID,
      METRICS.DNS_LOOKUP_TIME,
    ],
  },
  histograms: {
    [METRICS.INP]: {
      // Valores para INP - thresholds importantes 200ms y 500ms
      buckets: [
        20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300,
        350, 400, 450, 500, 550, 600, 700, 800, 900, 1000, 1200, 1400, 1600,
        1800, 2000, 2500, 3000, 4000, 5000,
      ],
    },
    [METRICS.LCP]: {
      // Valores para LCP - thresholds importantes en 2.5s (2500ms) y 4.0s (4000ms)
      buckets: [
        0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400,
        2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000, 4200, 4400, 4600, 4800,
        5200, 5400, 5600, 5800, 6000, 6200, 6400, 6600, 6800, 7000, 7200, 7400,
        7600, 7800, 8000, 8200, 8400, 8600, 8800, 9000, 9200, 9400, 9600, 9800,
        10000,
      ],
    },
    [METRICS.CLS]: {
      // Valores para CLS - thresholds importantes en 0.1 (bueno) y 0.25 (malo)
      // Es una métrica sin unidad, la mayoría de los sitios están entre 0-0.5
      buckets: [
        0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.12,
        0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.6,
        0.7, 0.8, 1.0,
      ],
    },
    [METRICS.FCP]: {
      // Valores para FCP - thresholds importantes en 1.8s (bueno) y 3.0s (malo)
      buckets: [
        0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400,
        2600, 2800, 3000, 3500, 4000, 4500, 5000,
      ],
    },
    [METRICS.TTFB]: {
      // Valores para TTFB - threshold recomendado de 800ms
      // Incrementos uniformes de 300ms hasta 8000ms
      buckets: [
        0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000, 3300, 3600,
        3900, 4200, 4500, 4800, 5100, 5400, 5700, 6000, 6300, 6600, 6900, 7200,
        7500, 7800, 8000,
      ],
    },
    [METRICS.FID]: {
      // Valores para FID - thresholds en 100ms (bueno) y 300ms (malo)
      buckets: [
        0, 20, 40, 60, 80, 100, 120, 150, 200, 250, 300, 400, 500, 750, 1000,
        2000,
      ],
    },
    [METRICS.TIME_TO_FIRST_BYTE]: {
      // Valores de tiempo al primer byte, parte crítica del TTFB
      buckets: [
        0, 50, 100, 150, 200, 250, 300, 400, 500, 600, 700, 800, 1000, 1500,
        2000,
      ],
    },
    [METRICS.RESOURCE_LOAD_DELAY]: {
      // Retraso en la carga de recursos, debería ser mínimo (<100ms idealmente)
      buckets: [
        0, 20, 40, 60, 80, 100, 150, 200, 300, 400, 500, 750, 1000, 1500, 2000,
      ],
    },
    [METRICS.RESOURCE_LOAD_TIME]: {
      // Tiempo de carga de recursos, varía según el recurso y la conexión
      buckets: [
        0, 50, 100, 200, 300, 400, 500, 750, 1000, 1500, 2000, 3000, 5000,
      ],
    },
    [METRICS.ELEMENT_RENDER_DELAY]: {
      // Retraso en renderizado de elementos, debería ser <100ms para una buena experiencia
      buckets: [
        0, 20, 40, 60, 80, 100, 150, 200, 300, 400, 500, 750, 1000, 1500, 2000,
      ],
    },
    [METRICS.INP_EVENT_TIME]: {
      // Tiempo del evento INP, relacionado con INP pero específico del tiempo de evento
      buckets: [
        0, 20, 40, 60, 80, 100, 120, 150, 200, 250, 300, 400, 500, 750, 1000,
      ],
    },
    [METRICS.LARGEST_SHIFT_VALUE]: {
      // Valor del desplazamiento más grande, relacionado con CLS
      // Los valores individuales son más pequeños que el CLS acumulado
      buckets: [
        0, 0.005, 0.01, 0.015, 0.02, 0.025, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08,
        0.09, 0.1, 0.12, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5,
      ],
    },
    [METRICS.FIRST_BYTE_TO_FCP]: {
      // Tiempo desde primer byte hasta FCP, debe ser <1s para una experiencia fluida
      buckets: [
        0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1500, 2000,
        3000,
      ],
    },
    [METRICS.TIME_TO_FIRST_BYTE_TO_FCP]: {
      // Similar a FIRST_BYTE_TO_FCP, tiempo total desde TTFB hasta FCP
      buckets: [
        0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1500, 2000,
        3000,
      ],
    },
    [METRICS.WAITING_TIME]: {
      // Tiempo de espera en conexión, idealmente <300ms
      buckets: [
        0, 50, 100, 150, 200, 250, 300, 400, 500, 750, 1000, 1500, 2000, 3000,
      ],
    },
    [METRICS.CONNECTION_TIME]: {
      // Tiempo de conexión, debería ser <200ms en buenas conexiones
      buckets: [
        0, 20, 40, 60, 80, 100, 150, 200, 300, 400, 500, 750, 1000, 1500,
      ],
    },
    [METRICS.REQUEST_TIME]: {
      // Tiempo de solicitud, varía según el endpoint pero <500ms es ideal
      buckets: [
        0, 50, 100, 150, 200, 300, 400, 500, 750, 1000, 1500, 2000, 3000, 5000,
      ],
    },
    [METRICS.EVENT_TIME_FID]: {
      // Tiempo de evento FID, relacionado con la métrica FID
      buckets: [
        0, 20, 40, 60, 80, 100, 120, 150, 200, 250, 300, 400, 500, 750, 1000,
      ],
    },
    [METRICS.DNS_LOOKUP_TIME]: {
      // Tiempo de búsqueda DNS, idealmente <100ms
      buckets: [
        0, 10, 20, 30, 50, 75, 100, 150, 200, 300, 500, 750, 1000, 2000,
      ],
    },
  },
  url: WM_EXPORTER_METRICS_ENDPOINT,
  resources: otel.resources,
  strategies: {
    visibility_change: { enabled: true },
  },
};
