const QUIET_WINDOW_MS = 5000;

/**
 * Calculates Time To Interactive (TTI) using the standard algorithm:
 * Starting from FCP, find the first 5-second quiet window with no long tasks (>50ms).
 * TTI = end of the last long task before the quiet window, or FCP if no long tasks occurred.
 *
 * @param {function} onTTI - Callback invoked with TTI value in ms when determined
 */
export const loadTTIMonitor = (onTTI) => {
  if (!window.PerformanceObserver) return;

  let fcpTime = null;
  let lastLongTaskEnd = null;
  let quietWindowTimer = null;
  let ttiReported = false;

  const reportTTI = () => {
    if (ttiReported) return;
    ttiReported = true;
    onTTI(lastLongTaskEnd !== null ? lastLongTaskEnd : fcpTime);
  };

  const scheduleQuietWindow = () => {
    clearTimeout(quietWindowTimer);
    quietWindowTimer = setTimeout(reportTTI, QUIET_WINDOW_MS);
  };

  try {
    const paintObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.name === "first-contentful-paint" && fcpTime === null) {
          fcpTime = entry.startTime;
          scheduleQuietWindow();
        }
      });
    });

    paintObserver.observe({ type: "paint", buffered: true });
  } catch (_) {
    // Silent: browser may not support paint observer
  }

  try {
    const longTaskObserver = new PerformanceObserver((list) => {
      if (fcpTime === null) return;

      list.getEntries().forEach((entry) => {
        const taskEnd = entry.startTime + entry.duration;

        if (taskEnd > fcpTime) {
          lastLongTaskEnd = taskEnd;
          scheduleQuietWindow();
        }
      });
    });

    longTaskObserver.observe({ type: "longtask", buffered: true });
  } catch (_) {
    // Silent: browser may not support longtask observer
  }
};
