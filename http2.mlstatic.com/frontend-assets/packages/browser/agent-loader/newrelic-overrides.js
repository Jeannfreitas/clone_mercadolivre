export const handleNR = () => {
  // eslint-disable-next-line eslint-comments/disable-enable-pair
  /* eslint-disable @typescript-eslint/naming-convention,no-underscore-dangle */
  let _nrInstance = window.newrelic;

  const createInterceptor = (originalFn, wmFnName) =>
    function (...args) {
      const currentStep = window.__wminit?.newrelic_phase ?? "FIRST";

      if (window.WMANS?.[wmFnName]) {
        if (currentStep === "SECOND") {
          window.WMANS.logs.warn(
            "Warning: newrelic functionalities will be disabled in Q2-2026, use WMANS for same functionalities"
          );
        }

        window.WMANS[wmFnName](...args);
      }

      if (currentStep === "THIRD") {
        return;
      }

      if (typeof originalFn === "function") {
        originalFn.apply(this, args);
      }
    };

  const patchNR = (nrObject) => {
    const originalNoticeError = nrObject.noticeError;

    nrObject.noticeError = createInterceptor(
      originalNoticeError,
      "noticeError"
    );

    const originalSetHandler = nrObject.setErrorHandler;

    nrObject.setErrorHandler = createInterceptor(
      originalSetHandler,
      "setErrorHandler"
    );

    const originalSetCustomAttribute = nrObject.setCustomAttribute;

    nrObject.setCustomAttribute = createInterceptor(
      originalSetCustomAttribute,
      "setCustomAttribute"
    );

    const originalAddRelease = nrObject.addRelease;

    nrObject.addRelease = createInterceptor(originalAddRelease, "addRelease");

    return nrObject;
  };

  if (_nrInstance) {
    _nrInstance = patchNR(_nrInstance);
  }

  Object.defineProperty(window, "newrelic", {
    configurable: true,
    enumerable: true,
    get() {
      return _nrInstance;
    },
    set(newValue) {
      _nrInstance = patchNR(newValue);
    },
  });
};
