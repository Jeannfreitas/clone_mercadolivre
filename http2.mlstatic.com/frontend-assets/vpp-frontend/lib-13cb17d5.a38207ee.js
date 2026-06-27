"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [53799],
  {
    78983(e, t, l) {
      var a = l(94634),
        n = l(12897),
        r = l(96540),
        i = l(46942),
        o = l(80459),
        s = l(1077),
        c = l(33692),
        m = l(79204),
        u = l(45683),
        d = l(72569),
        _ = l(79519),
        v = l(50224),
        E = l(46145),
        p = l(77459),
        f = l(30334),
        g = l(46644),
        L = l(18988),
        h = l(1035),
        C = l(21495),
        b = l(84612),
        N = l(8919);
      function y(e) {
        var t = Object.create(null);
        return (
          e &&
            Object.keys(e).forEach(function (l) {
              if ("default" !== l) {
                var a = Object.getOwnPropertyDescriptor(e, l);
                Object.defineProperty(
                  t,
                  l,
                  a.get
                    ? a
                    : {
                        enumerable: !0,
                        get: function () {
                          return e[l];
                        },
                      }
                );
              }
            }),
          (t.default = e),
          Object.freeze(t)
        );
      }
      function $(e, t) {
        return (
          t.forEach(function (t) {
            t &&
              "string" != typeof t &&
              !Array.isArray(t) &&
              Object.keys(t).forEach(function (l) {
                if ("default" !== l && !(l in e)) {
                  var a = Object.getOwnPropertyDescriptor(t, l);
                  Object.defineProperty(
                    e,
                    l,
                    a.get
                      ? a
                      : {
                          enumerable: !0,
                          get: function () {
                            return t[l];
                          },
                        }
                  );
                }
              });
          }),
          Object.freeze(e)
        );
      }
      var w = y(L);
      function k(e) {
        if (e.__esModule) return e;
        var t = e.default;
        if ("function" == typeof t) {
          var l = function e() {
            return this instanceof e
              ? Reflect.construct(t, arguments, this.constructor)
              : t.apply(this, arguments);
          };
          l.prototype = t.prototype;
        } else l = {};
        return (
          Object.defineProperty(l, "__esModule", { value: !0 }),
          Object.keys(e).forEach(function (t) {
            var a = Object.getOwnPropertyDescriptor(e, t);
            Object.defineProperty(
              l,
              t,
              a.get
                ? a
                : {
                    enumerable: !0,
                    get: function () {
                      return e[t];
                    },
                  }
            );
          }),
          l
        );
      }
      var S,
        x = {},
        A = {};
      A.MAX_STARS = 5;
      const M = r;
      var I,
        T = () =>
          S ||
          (S = M.createElement(
            "svg",
            {
              "aria-hidden": "true",
              className: "ui-review-view-icon ui-review-view-icon-arrow",
              width: "66",
              height: "65",
              viewBox: "0 0 66 65",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            M.createElement("path", {
              d: "M64.9607 32.5L1.46066 32.5",
              stroke: "#333333",
              strokeWidth: "5",
            }),
            M.createElement("path", {
              d: "M33.2106 64.25L1.46063 32.5L33.2106 0.75",
              stroke: "#333333",
              strokeWidth: "5",
            })
          ));
      const D = r;
      var O,
        R = (e) => {
          let { className: t = null } = e;
          return D.createElement(
            "svg",
            {
              className: t,
              "aria-hidden": "true",
              width: "28",
              height: "17",
              viewBox: "0 0 28 17",
              xmlns: "http://www.w3.org/2000/svg",
            },
            I ||
              (I = D.createElement("path", {
                d: "M26.086 2L13.543 14.513 1 2",
                strokeWidth: "3",
                fill: "none",
                fillRule: "evenodd",
              }))
          );
        };
      const F = r,
        P = i;
      var V,
        B = (e) => {
          let { className: t } = e;
          return F.createElement(
            "svg",
            {
              "aria-hidden": "true",
              className: P(t, "ui-review-view-icon ui-review-view-icon-close"),
              width: "32",
              height: "32",
              viewBox: "0 0 32 32",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            O ||
              (O = F.createElement("path", {
                d: "M14.9383 16L5.93834 6.99999L6.999 5.93933L15.999 14.9393L24.999 5.93933L26.0597 6.99999L17.0597 16L26.0597 25L24.999 26.0607L15.999 17.0607L6.999 26.0607L5.93834 25L14.9383 16Z",
                fill: "black",
              }))
          );
        };
      const U = r;
      var Y,
        z = U.memo((e) => {
          let { className: t = null } = e;
          return U.createElement(
            "svg",
            {
              width: "16",
              height: "15",
              viewBox: "0 0 16 15",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
            },
            V ||
              (V = U.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.28509 9.57387L5.15029 9.89771L7.77783 14.9958L8.78843 14.4746C10.1464 13.7743 10.7611 12.1653 10.2159 10.738L9.92027 9.96373L12.7198 9.92939C13.0121 9.9258 13.3012 9.86887 13.573 9.76138C14.8056 9.27393 15.4097 7.87955 14.9222 6.64695L13.6787 3.50252C12.934 1.61963 10.952 0.536042 8.96507 0.925534L5.42731 1.61902L4.18769 1.63423L4.17298 0.434452L0.0239258 0.485352L0.149047 10.6846L4.2981 10.6337L4.28509 9.57387ZM6.00474 8.93622L8.2941 13.3781C9.06982 12.9434 9.41444 12.0027 9.09492 11.1661L8.18554 8.78492L12.7051 8.72948C12.8512 8.72768 12.9958 8.69921 13.1317 8.64547C13.748 8.40175 14.05 7.70456 13.8063 7.08826L12.5628 3.94383C12.0309 2.59891 10.6152 1.82491 9.19591 2.10312L5.60462 2.8071L5.49657 2.81826L4.20241 2.83414L4.2693 8.28666L6.00474 8.93622ZM2.98762 1.64908L1.23856 1.67054L1.33424 9.46994L3.08347 9.44848L2.98762 1.64908Z",
                fill: "black",
                fillOpacity: "0.55",
              }))
          );
        });
      const H = r;
      var j,
        Z,
        G = H.memo((e) => {
          let { className: t = null } = e;
          return H.createElement(
            "svg",
            {
              width: "16",
              height: "15",
              viewBox: "0 0 16 15",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
            },
            Y ||
              (Y = H.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.28509 9.57387L5.15029 9.89771L7.77783 14.9958L8.78843 14.4746C10.1464 13.7743 10.7611 12.1653 10.2159 10.738L9.92027 9.96373L12.7198 9.92939C13.0121 9.9258 13.3012 9.86887 13.573 9.76138C14.8056 9.27393 15.4097 7.87955 14.9222 6.64695L13.6787 3.50252C12.934 1.61963 10.952 0.536042 8.96507 0.925534L5.42731 1.61902L4.18769 1.63423L4.17298 0.434452L0.0239258 0.485352L0.149047 10.6846L4.2981 10.6337L4.28509 9.57387ZM6.00474 8.93622L8.2941 13.3781C9.06982 12.9434 9.41444 12.0027 9.09492 11.1661L8.18554 8.78492L12.7051 8.72948C12.8512 8.72768 12.9958 8.69921 13.1317 8.64547C13.748 8.40175 14.05 7.70456 13.8063 7.08826L12.5628 3.94383C12.0309 2.59891 10.6152 1.82491 9.19591 2.10312L5.60462 2.8071L5.49657 2.81826L4.20241 2.83414L4.2693 8.28666L6.00474 8.93622ZM2.98762 1.64908L1.23856 1.67054L1.33424 9.46994L3.08347 9.44848L2.98762 1.64908Z",
                fill: "black",
                fillOpacity: "0.55",
              }))
          );
        });
      const W = r;
      var K,
        q = W.memo((e) => {
          let { className: t = null } = e;
          return W.createElement(
            "svg",
            {
              width: "15",
              height: "15",
              viewBox: "0 0 15 15",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
            },
            j ||
              (j = W.createElement("path", {
                d: "M5.53083 10.0225L4.28565 9.58388L4.18818 1.63911L5.4278 1.6239L8.96556 0.930417C10.9525 0.540925 12.9345 1.62451 13.6792 3.5074L14.7491 6.20899C15.3387 7.69769 14.2539 9.31541 12.6528 9.33505L9.29453 9.37625L9.96036 11.2589C10.5153 12.828 9.6294 14.5395 8.02793 14.9925L5.53083 10.0225Z",
                fill: "white",
              })),
            Z ||
              (Z = W.createElement("path", {
                d: "M2.97355 0.454055L3.09867 10.6533L0.149535 10.6895L0.0244141 0.490234L2.97355 0.454055Z",
                fill: "white",
              }))
          );
        });
      const X = r;
      var Q,
        J = X.memo((e) => {
          let { className: t = "", aria_hidden: l = !0 } = e;
          return X.createElement(
            "svg",
            {
              "aria-hidden": l,
              className: t,
              xmlns: "http://www.w3.org/2000/svg",
              width: "94",
              height: "79",
              viewBox: "0 0 94 79",
            },
            K ||
              (K = X.createElement(
                "g",
                { fill: "none", fillRule: "evenodd" },
                X.createElement("path", {
                  fill: "#F5F5F5",
                  d: "M71.227 9.707l-3.893 2 .743-4.235-3.15-3 4.353-.618L71.227 0l1.946 3.854 4.353.618-3.15 3 .744 4.235zM16.797 70.862l-2.595 1.333.496-2.824-2.1-2 2.902-.412 1.297-2.569 1.298 2.57 2.902.411-2.1 2 .496 2.824zM51.603 72.17l-1.946 1 .371-2.117-1.574-1.5 2.176-.309.973-1.927.973 1.927 2.177.309-1.575 1.5.372 2.118z",
                }),
                X.createElement("path", {
                  fill: "#E9E9E9",
                  d: "M72.134 76.011l-2.91-.152 1.832-2.196-.825-2.789 2.717 1.104 2.4-1.571-.152 2.878 2.308 1.817-2.811.675-.974 2.695zM89.478 30.862l-2.596 1.333.496-2.824-2.1-2 2.902-.412 1.298-2.569 1.297 2.57 2.902.411-2.1 2 .496 2.824zM27.471 7.745L26.314 9.61l-.764-2.008-2.117-.47 1.707-1.392-.152-2.157 1.82 1.147 2.024-.863-.583 2.102 1.402 1.623zM6.299 43.854l-3.893 2 .743-4.236-3.149-3L4.352 38 6.3 34.146 8.245 38l4.353.618-3.15 3 .744 4.236z",
                }),
                X.createElement("path", {
                  d: "M47.762 52.155L32.02 60.488l3.006-17.65L22.29 30.34l17.601-2.575 7.872-16.058 7.872 16.058 17.602 2.575-12.737 12.499 3.007 17.649z",
                }),
                X.createElement("path", {
                  fill: "#D3D3D3",
                  d: "M56.206 40.738l11.792-11.27 5.31.707-12.737 12.5 3.007 17.648-4.539-2.402z",
                }),
                X.createElement("path", {
                  stroke: "#8B8B8B",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M47.762 52.155L32.02 60.488l3.006-17.65L22.29 30.34l17.601-2.575 7.872-16.058 7.872 16.058 17.602 2.575-12.737 12.499 3.007 17.649z",
                }),
                X.createElement(
                  "g",
                  { fill: "#8B8B8B", transform: "translate(40.701 32.195)" },
                  X.createElement("ellipse", {
                    cx: "1.938",
                    cy: "1.951",
                    rx: "1.938",
                    ry: "1.951",
                  }),
                  X.createElement("ellipse", {
                    cx: "12.598",
                    cy: "1.951",
                    rx: "1.938",
                    ry: "1.951",
                  })
                )
              ))
          );
        });
      const ee = r;
      var te,
        le = () =>
          Q ||
          (Q = ee.createElement(
            "svg",
            {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "ui-review-view-icon ui-review-view-icon-filter",
            },
            ee.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.1999 4.64098H13.2334C13.0111 3.54562 12.0427 2.72119 10.8817 2.72119C9.72069 2.72119 8.75227 3.54562 8.5299 4.64098H0.799858V5.60098H8.5299C8.75227 6.69633 9.72069 7.52076 10.8817 7.52076C12.0427 7.52076 13.0111 6.69633 13.2334 5.60098H15.1999V4.64098ZM9.44189 5.12098C9.44189 5.91615 10.0865 6.56076 10.8817 6.56076C11.6768 6.56076 12.3215 5.91615 12.3215 5.12098C12.3215 4.32581 11.6768 3.68119 10.8817 3.68119C10.0865 3.68119 9.44189 4.32581 9.44189 5.12098Z",
              fill: "#3483FA",
            }),
            ee.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M2.76786 11.3603L0.799805 11.3601L0.799905 10.4001L2.76788 10.4003C2.99026 9.30496 3.95867 8.48055 5.11964 8.48055C6.28062 8.48055 7.24905 9.30498 7.47142 10.4003H15.2799V11.3603H7.47142C7.24905 12.4557 6.28062 13.2801 5.11964 13.2801C3.95865 13.2801 2.99022 12.4557 2.76786 11.3603ZM5.11964 12.3201C4.32447 12.3201 3.67986 11.6755 3.67986 10.8803C3.67986 10.0852 4.32447 9.44055 5.11964 9.44055C5.91482 9.44055 6.55943 10.0852 6.55943 10.8803C6.55943 11.6755 5.91482 12.3201 5.11964 12.3201Z",
              fill: "#3483FA",
            })
          ));
      const ae = r;
      var ne,
        re = () =>
          te ||
          (te = ae.createElement(
            "svg",
            {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            ae.createElement("path", {
              d: "M3.33301 3.33496V14.0016",
              stroke: "black",
              strokeWidth: "1.3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            ae.createElement("path", {
              d: "M12.668 3.33496V9.33496",
              stroke: "black",
              strokeWidth: "1.3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            ae.createElement("path", {
              d: "M3.33301 3.33469C3.9561 2.72394 4.79383 2.38184 5.66634 2.38184C6.53885 2.38184 7.37658 2.72394 7.99968 3.33469C8.62277 3.94545 9.4605 4.28755 10.333 4.28755C11.2055 4.28755 12.0432 3.94545 12.6663 3.33469",
              stroke: "black",
              strokeWidth: "1.3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            ae.createElement("path", {
              d: "M3.33301 9.33469C3.9561 8.72394 4.79383 8.38184 5.66634 8.38184C6.53885 8.38184 7.37658 8.72394 7.99968 9.33469C8.62277 9.94545 9.4605 10.2876 10.333 10.2876C11.2055 10.2876 12.0432 9.94545 12.6663 9.33469",
              stroke: "black",
              strokeWidth: "1.3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ));
      const ie = r;
      var oe,
        se = () =>
          ne ||
          (ne = ie.createElement(
            "svg",
            {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className:
                "ui-review-capability-icon ui-review-capability-icon-info",
            },
            ie.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.8003 7.9999C15.8003 12.3078 12.3081 15.8 8.00026 15.8C3.6924 15.8 0.200195 12.3078 0.200195 7.9999C0.200195 3.69204 3.6924 0.199829 8.00026 0.199829C12.3081 0.199829 15.8003 3.69204 15.8003 7.9999ZM10.3951 11.1445V12.1445H5.93701V11.1445H7.40556V7.42649H6.29522V6.42649H8.86389V11.1445H10.3951ZM8.88013 4.58104C8.88013 5.05624 8.49491 5.44146 8.01971 5.44146C7.54452 5.44146 7.1593 5.05624 7.1593 4.58104C7.1593 4.10585 7.54452 3.72063 8.01971 3.72063C8.49491 3.72063 8.88013 4.10585 8.88013 4.58104ZM1.4002 7.9999C1.4002 11.645 4.35515 14.6 8.00026 14.6C11.6454 14.6 14.6003 11.645 14.6003 7.9999C14.6003 4.35478 11.6454 1.39983 8.00026 1.39983C4.35515 1.39983 1.4002 4.35478 1.4002 7.9999Z",
              fill: "black",
            })
          ));
      const ce = r;
      var me,
        ue = ce.memo((e) => {
          let { className: t = null } = e;
          return ce.createElement(
            "svg",
            {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
            },
            oe ||
              (oe = ce.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.02125 6.25775L5.87824 5.91279L8.37994 0.751802L9.40301 1.24803C10.7777 1.91481 11.4317 3.50825 10.9218 4.94852L10.6452 5.72977L13.4447 5.69542C13.737 5.69184 14.0274 5.74166 14.3018 5.84245C15.546 6.29952 16.184 7.67866 15.727 8.92284L14.5609 12.0968C13.8627 13.9974 11.9079 15.1293 9.91198 14.7887L6.35827 14.1822L5.11866 14.1974L5.13337 15.3972L0.984325 15.4481L0.859204 5.24885L5.00825 5.19795L5.02125 6.25775ZM6.75603 6.85303L8.93573 2.3563C9.72188 2.77187 10.0895 3.7038 9.79057 4.54802L8.93988 6.95078L13.4594 6.89533C13.6056 6.89354 13.7508 6.91845 13.888 6.96885C14.5101 7.19738 14.8291 7.88695 14.6006 8.50904L13.4345 11.683C12.9358 13.0406 11.5395 13.8491 10.1139 13.6058L6.50639 12.9901L6.39809 12.9816L5.10394 12.9975L5.03705 7.54496L6.75603 6.85303ZM3.91858 14.212L2.16951 14.2334L2.07383 6.43404L3.82306 6.41258L3.91858 14.212Z",
                fill: "black",
                fillOpacity: "0.55",
              }))
          );
        });
      const de = r;
      var _e,
        ve,
        Ee = de.memo((e) => {
          let { className: t } = e;
          return de.createElement(
            "svg",
            {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
            },
            me ||
              (me = de.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.02125 6.25775L5.87824 5.91279L8.37994 0.751802L9.40301 1.24803C10.7777 1.91481 11.4317 3.50825 10.9218 4.94852L10.6452 5.72977L13.4447 5.69542C13.737 5.69184 14.0274 5.74166 14.3018 5.84245C15.546 6.29952 16.184 7.67866 15.727 8.92284L14.5609 12.0968C13.8627 13.9974 11.9079 15.1293 9.91198 14.7887L6.35827 14.1822L5.11866 14.1974L5.13337 15.3972L0.984325 15.4481L0.859204 5.24885L5.00825 5.19795L5.02125 6.25775ZM6.75603 6.85303L8.93573 2.3563C9.72188 2.77187 10.0895 3.7038 9.79057 4.54802L8.93988 6.95078L13.4594 6.89533C13.6056 6.89354 13.7508 6.91845 13.888 6.96885C14.5101 7.19738 14.8291 7.88695 14.6006 8.50904L13.4345 11.683C12.9358 13.0406 11.5395 13.8491 10.1139 13.6058L6.50639 12.9901L6.39809 12.9816L5.10394 12.9975L5.03705 7.54496L6.75603 6.85303ZM3.91858 14.212L2.16951 14.2334L2.07383 6.43404L3.82306 6.41258L3.91858 14.212Z",
                fill: "black",
                fillOpacity: "0.55",
              }))
          );
        });
      const pe = r;
      var fe,
        ge = pe.memo((e) => {
          let { className: t = null } = e;
          return pe.createElement(
            "svg",
            {
              width: "16",
              height: "15",
              viewBox: "0 0 16 15",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
            },
            _e ||
              (_e = pe.createElement("path", {
                d: "M6.25811 5.07832L5.02406 5.54732L5.12152 13.4921L6.36114 13.4769L9.91485 14.0834C11.9108 14.424 13.8656 13.2921 14.5638 11.3915L15.5672 8.6645C16.1201 7.16179 14.9959 5.57117 13.3948 5.59081L10.0365 5.63201L10.656 3.73357C11.1722 2.15138 10.2446 0.462057 8.63253 0.0485436L6.25811 5.07832Z",
                fill: "none",
              })),
            ve ||
              (ve = pe.createElement("path", {
                d: "M3.93633 14.7066L3.81121 4.50736L0.862071 4.54354L0.987192 14.7428L3.93633 14.7066Z",
                fill: "none",
              }))
          );
        });
      const Le = r;
      var he,
        Ce = Le.memo((e) => {
          let { className: t = "" } = e;
          return Le.createElement(
            "svg",
            {
              "aria-hidden": "true",
              className: t,
              width: "16.8",
              height: "16",
              viewBox: "0 0 11 10",
            },
            fe || (fe = Le.createElement("use", { href: "#poly_star" }))
          );
        });
      const be = r;
      var Ne,
        ye = be.memo((e) => {
          let { className: t = "" } = e;
          return be.createElement(
            "svg",
            {
              className: t,
              "aria-hidden": "true",
              width: "16.8",
              height: "16",
              viewBox: "0 0 10 10",
            },
            he || (he = be.createElement("use", { href: "#poly_star_fill" }))
          );
        });
      const $e = r;
      var we,
        ke,
        Se,
        xe,
        Ae = $e.memo((e) => {
          let { className: t = "" } = e;
          return $e.createElement(
            "svg",
            {
              "aria-hidden": "true",
              className: t,
              width: "16.8",
              height: "16",
              viewBox: "0 0 10 10",
            },
            Ne || (Ne = $e.createElement("use", { href: "#poly_star_half" }))
          );
        });
      const Me = r,
        Ie = i;
      var Te = Me.memo((e) => {
        let { className: t, aria_hidden: l = !0 } = e;
        return Me.createElement(
          "svg",
          {
            className: Ie("ui-reviews-icon ui-reviews-icon--empty-messages", t),
            width: "143",
            height: "94",
            viewBox: "0 0 143 94",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": l,
          },
          we ||
            (we = Me.createElement("path", {
              d: "M98.8956 20.9082V20.9082C98.8955 19.5947 97.8133 18.5 96.4414 18.5H46.561C45.189 18.5 44.1068 19.5947 44.1068 20.9082V61.1928C44.1068 62.5063 45.189 63.601 46.561 63.601H74.1231H74.5324L74.8849 63.8088L89.8613 72.638V65.101V63.601L91.3613 63.601L96.4423 63.601C97.8143 63.601 98.8965 62.5063 98.8965 61.1928L98.8956 20.9082Z",
              fill: "#EEEEEE",
              stroke: "white",
              strokeWidth: "3",
            })),
          ke ||
            (ke = Me.createElement("path", {
              d: "M42.6068 37V61.1928C42.6068 63.3512 44.3771 65.101 46.561 65.101H74.1231L91.3613 75.2636V65.101L96.4423 65.101C98.6262 65.101 100.396 63.3512 100.396 61.1927L100.396 57M42.6068 33V20.9082C42.6068 18.7498 44.3771 17 46.561 17H96.4414C98.6252 17 100.396 18.7498 100.396 20.9082V46M100.396 50V53",
              stroke: "#333333",
              strokeWidth: "1.5",
            })),
          Se ||
            (Se = Me.createElement("path", {
              d: "M72.4785 46.1044L71.8267 45.7899L71.1748 46.1044L66.9459 48.1449L67.7189 44.0086L67.874 43.1783L67.2445 42.6151L64.0921 39.7949L68.5749 39.1971L69.3347 39.0957L69.6977 38.4206L71.8267 34.4616L73.9556 38.4206L74.3186 39.0957L75.0784 39.1971L79.5613 39.7949L76.4088 42.6151L75.7793 43.1783L75.9345 44.0086L76.7075 48.1449L72.4785 46.1044Z",
              fill: "white",
              stroke: "white",
              strokeWidth: "3",
            })),
          xe ||
            (xe = Me.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M71.8267 47.4553L64.9266 50.7847L66.2444 43.733L60.6621 38.739L68.3766 37.7102L71.8267 31.2944L75.2767 37.7102L82.9912 38.739L77.409 43.733L78.7268 50.7847L71.8267 47.4553Z",
              stroke: "#333333",
              strokeWidth: "1.5",
            }))
        );
      });
      var De = {
        ArrowIcon: T,
        ChevronIcon: R,
        CloseIcon: B,
        DislikeIcon: z,
        DislikeDisableIcon: G,
        DislikeFullIcon: q,
        EmptyReviewsIcon: J,
        FilterIcon: le,
        FlagIcon: re,
        InfoIcon: se,
        LikeIcon: ue,
        LikeDisableIcon: Ee,
        LikeFullIcon: ge,
        StarEmptyIcon: Ce,
        StarFullIcon: ye,
        StarHalfIcon: Ae,
        EmptyMessage: Te,
      };
      const { StarEmptyIcon: Oe, StarFullIcon: Re, StarHalfIcon: Fe } = De;
      var Pe = { FULL: Re, HALF: Fe, EMPTY: Oe };
      var Ve = (e, t) => {
        const l = Math.floor(e),
          a = Array(l).fill("FULL"),
          n = Math.ceil(e - l),
          r = Array(n).fill("HALF"),
          i = t - n - l,
          o = i > 0 ? Array(i).fill("EMPTY") : [],
          s = [l, n, i].reduce((e, t) => e + t, 0);
        return {
          STARS: [...a, ...r, ...o].slice(0, t),
          STARS_QUANTITY: s,
          FULL_STARS_QUANTITY: l,
          HALF_STARS_QUANTITY: n,
          EMPTY_STARS_QUANTITY: i,
        };
      };
      const Be = r,
        Ue = i,
        { MAX_STARS: Ye } = A,
        ze = Pe,
        He = Ve;
      var je = Be.memo((e) => {
        let { className: t = "", value: l = 0, aria_label: a } = e;
        const { STARS: n } = He(l, Ye),
          r = ((e, t) =>
            e.map((e, l) => {
              const { [e]: a } = ze,
                n = `${t}__star${"EMPTY" === e ? ` ${t}__star-empty` : ""}`;
              return (
                a &&
                Be.createElement(a, { className: Ue(n), key: `star-item-${l}` })
              );
            }))(n, t);
        return Be.createElement(
          "div",
          { className: t },
          r,
          Be.createElement("p", { className: "andes-visually-hidden" }, a)
        );
      });
      var Ze,
        Ge,
        We = je,
        Ke = {
          STYLE_NAMESPACE: "ui-review-capability",
          KIT_DEFAULT_VALUE: "kit",
          ARRAY_DEFAULT_VALUE: [],
          MEDIA_TYPE: { VIDEO: "video", IMAGE: "image" },
          DEFAULT_VIDEO_LOADING_TEXT: "Cargando",
          DEFAULT_VIDEO_ERROR_TEXT:
            "Lo sentimos, no pudimos cargar el video. Inténtalo más tarde.",
          DEFAULT_VIDEO_MUTE_LABEL: "Silenciar",
          DEFAULT_VIDEO_UNMUTE_LABEL: "Activar audio",
          DEFAULT_TEXT_CAROUSEL:
            "Fotos del producto compartidas por los compradores",
        },
        qe = a.default;
      const Xe = r,
        Qe = i,
        { Tooltip: Je } = o,
        et = s,
        { Typography: tt } = c,
        lt = We,
        { STYLE_NAMESPACE: at } = Ke,
        nt = `${at}__rating`;
      var rt = Xe.memo((e) => {
        var t, l, a, n;
        let {
          average: r,
          children: i = null,
          mobile: o = !0,
          stars: s,
          text: c = null,
          aria_label: m,
          isKitLayout: u = !1,
          inline: d = !1,
          icon: _,
          information: v,
        } = e;
        return Xe.createElement(
          "div",
          {
            className: Qe({
              [`${nt}-content`]: o,
              [`${nt}-content--kit`]: u,
              [`${nt}-content--info`]: v,
              [`${nt}-inline`]: d,
            }),
            "data-testid": "rating-component",
          },
          Xe.createElement(
            "div",
            { className: Qe(nt, { [`${nt}--kit`]: u, [`${nt}--info`]: v }) },
            Xe.createElement(
              "div",
              qe(
                { "aria-hidden": "true" },
                u && { className: Qe({ [`${nt}__average-container`]: u }) }
              ),
              Xe.createElement(
                "p",
                {
                  className: Qe(`${nt}__average`, {
                    [`${nt}__average--desktop`]: !o,
                    [`${nt}__average--inline`]: d,
                  }),
                },
                r ? r.toFixed(1) : 0
              )
            ),
            Xe.createElement(
              "div",
              { className: `${nt}__start-content` },
              Xe.createElement(
                "div",
                null,
                Xe.createElement(lt, {
                  className: `${nt}__rating`,
                  value: s,
                  aria_label: m,
                })
              ),
              Xe.createElement(
                "div",
                null,
                c &&
                  Xe.createElement(
                    "p",
                    { "aria-hidden": "true", className: `${nt}__label` },
                    c
                  ),
                (u || v) &&
                  o &&
                  Xe.createElement(
                    "div",
                    {
                      className: `${nt}__tooltip-info`,
                      "aria-label":
                        null == _ ||
                        null === (t = _.tooltip) ||
                        void 0 === t ||
                        null === (t = t.content) ||
                        void 0 === t
                          ? void 0
                          : t.text,
                    },
                    Xe.createElement(
                      Je,
                      {
                        content:
                          v ||
                          (null == _ ||
                          null === (l = _.tooltip) ||
                          void 0 === l ||
                          null === (l = l.content) ||
                          void 0 === l
                            ? void 0
                            : l.text),
                        side: "bottom",
                        srLabel:
                          v ||
                          (null == _ ||
                          null === (a = _.tooltip) ||
                          void 0 === a ||
                          null === (a = a.content) ||
                          void 0 === a
                            ? void 0
                            : a.text),
                        closable: !0,
                      },
                      Ze || (Ze = Xe.createElement(et, null))
                    )
                  )
              )
            )
          ),
          (u || v) &&
            !o &&
            Xe.createElement(
              "div",
              { className: `${nt}__info-icon` },
              Ge || (Ge = Xe.createElement(et, null)),
              Xe.createElement(
                "div",
                null,
                Xe.createElement(
                  tt,
                  {
                    size: "xs",
                    color: "secondary",
                    type: "body",
                    weight: "regular",
                  },
                  v ||
                    (null == _ ||
                    null === (n = _.tooltip) ||
                    void 0 === n ||
                    null === (n = n.content) ||
                    void 0 === n
                      ? void 0
                      : n.text)
                )
              )
            ),
          !u && i && Xe.createElement("div", null, i)
        );
      });
      const it = r,
        { Button: ot } = m,
        { STYLE_NAMESPACE: st } = Ke,
        ct = `${st}-buy-button`;
      var mt = (e) => {
          let { buy_button: t = null, onBuyClick: l = null } = e;
          return it.createElement(
            "div",
            { className: ct, "data-testid": "buy-button" },
            (null == t ? void 0 : t.text) &&
              it.createElement(
                ot,
                {
                  className: `${ct}__button-action`,
                  hierarchy: "mute",
                  size: "small",
                  "data-testid": "buy-item",
                  href: t.url,
                  onClick: (e) => {
                    l && (e.preventDefault(), l(t.url, t.track));
                  },
                  "aria-hidden": !0,
                },
                t.text
              )
          );
        },
        ut = {};
      const { STYLE_NAMESPACE: dt } = Ke;
      ut.NAMESPACE = `${dt}-categories`;
      const _t = r,
        vt = i,
        { NAMESPACE: Et } = ut,
        pt = We;
      var ft = _t.memo((e) => {
        let { attr: t, mobile: l } = e;
        return _t.createElement(
          "tr",
          {
            className: vt({
              [`${Et}__desktop--row`]: !l,
              [`${Et}__mobile--row`]: l,
            }),
          },
          _t.createElement(
            "td",
            {
              className: vt({
                [`${Et}__max-row-w`]: t.display_text.length > 24 && l,
              }),
            },
            t.display_text
          ),
          _t.createElement(
            "td",
            null,
            _t.createElement(pt, {
              "aria-hidden": "true",
              className: `${Et}__rating`,
              value: t.value,
              aria_label: t.aria_label,
            })
          )
        );
      });
      const gt = r,
        { NAMESPACE: Lt } = ut,
        ht = ft;
      var Ct = (e) => {
        let { items: t = null, mobile: l = !0, title: a = "", vpp: n = !1 } = e;
        const r = n && l,
          i = t;
        return gt.createElement(
          "div",
          { className: Lt, "data-testid": "categories-component" },
          !r && gt.createElement("p", { className: `${Lt}__title` }, a),
          gt.createElement(
            "table",
            { className: `${Lt}__attributes` },
            gt.createElement(
              "tbody",
              null,
              null == i
                ? void 0
                : i.map((e, t) =>
                    gt.createElement(ht, {
                      attr: e,
                      key: `${Lt}--row-${t}`,
                      mobile: l,
                    })
                  )
            )
          )
        );
      };
      const bt = r,
        { useState: Nt, useEffect: yt } = r,
        $t = i,
        { Button: wt } = m,
        kt = R,
        St = Ce,
        { STYLE_NAMESPACE: xt } = Ke,
        At = `${xt}-dropdown`;
      var Mt = (e) => {
        let {
          items: t = [],
          itemValueVpp: l,
          keyObject: a = null,
          label: n = null,
          onFilter: r = () => {},
          starts: i = !1,
          vpp: o,
          objectId: s,
        } = e;
        const [c, m] = Nt(!1),
          [u, d] = Nt(l || null),
          [_, v] = Nt(s);
        yt(() => {
          _ !== s && (d(l), v(s));
        }, [s, _, l]),
          yt(() => {
            const e = (e) => {
              var t;
              const l =
                null == e || null === (t = e.path) || void 0 === t
                  ? void 0
                  : t.filter((e) => {
                      let { localName: t } = e;
                      return "button" === t || "li" === t;
                    });
              0 === (null == l ? void 0 : l.length) && m(!1);
            };
            return (
              document.body.addEventListener("click", e),
              () => document.body.removeEventListener("click", e)
            );
          }, []);
        return bt.createElement(
          "div",
          { className: At, "data-testid": `dropdown-${a}` },
          bt.createElement(
            "div",
            { className: `${At}__action` },
            bt.createElement(
              wt,
              {
                className: "" + (u && "all" !== u && !o ? "active" : ""),
                "aria-haspopup": "listbox",
                "aria-expanded": c,
                "aria-controls": c ? `dropdown-list-${a}` : void 0,
                id: `dropdown-button-${a}`,
                onClick: () => {
                  m(!c);
                },
              },
              n,
              u &&
                "all" !== u &&
                !o &&
                bt.createElement(
                  "span",
                  { className: `${At}__options-num` },
                  "(",
                  1,
                  ")"
                ),
              bt.createElement(kt, { className: `${At}__chevron` })
            )
          ),
          c &&
            bt.createElement(
              "div",
              { className: `${At}__content` },
              bt.createElement(
                "ul",
                {
                  id: `dropdown-list-${a}`,
                  role: "listbox",
                  "aria-labelledby": `dropdown-button-${a}`,
                  tabIndex: -1,
                  "aria-activedescendant": u
                    ? `dropdown-option-${a}-${u}`
                    : void 0,
                },
                t.map((e, t) => {
                  let { text: l, value: n, track: s } = e;
                  return bt.createElement(
                    "li",
                    {
                      className: $t(`${At}__options`, {
                        selected: u === n && !o,
                      }),
                      role: "option",
                      "aria-selected": u === n,
                      id: `dropdown-option-${a}-${n}`,
                      "data-testid": `filterItem-${a}-${t}`,
                      onClick: () =>
                        ((e, t) => {
                          d(e), r(e, a, t), m(!c);
                        })(n, s),
                      key: `${At}__options-${t}`,
                      tabIndex: 0,
                    },
                    l,
                    i &&
                      "all" !== n &&
                      bt.createElement(St, { className: `${At}__start` })
                  );
                })
              )
            )
        );
      };
      const It = i;
      const Tt = i;
      const Dt = i;
      const Ot = i;
      const Rt = i;
      const Ft = i;
      const Pt = i;
      const Vt = i,
        Bt = (e) => {
          const t = "string" == typeof e && e;
          return It({ [`ui-reviews-font-size--${t}`]: t });
        },
        Ut = (e) => {
          const t = "string" == typeof e && e;
          return Tt({ [`ui-reviews-color--${t}`]: t });
        },
        Yt = (e) => {
          const t = "string" == typeof e && e;
          return Dt({ [`ui-reviews-weight--${t}`]: t });
        },
        zt = (e) => {
          const t = "string" == typeof e ? e : e && false;
          return Ot({ [`ui-reviews-background-color--${t}`]: t });
        },
        Ht = (e) => {
          const t = "string" == typeof e && e;
          return Rt({ [`ui-reviews-margin-bottom--${t}`]: t });
        },
        jt = (e) => {
          const t = "string" == typeof e && e;
          return Ft({ [`ui-reviews-margin-top--${t}`]: t });
        },
        Zt = (e) => Pt({ "ui-reviews-component-hover": e });
      var Gt,
        Wt = (e) => {
          let {
            font_size: t,
            font_weight: l,
            background_color: a,
            className: n,
            color: r,
            margin_bottom: i,
            margin_top: o,
            hover: s,
          } = e;
          return Vt(zt(a), Ut(r), Bt(t), Yt(l), Ht(i), jt(o), Zt(s), n);
        };
      const Kt = r,
        qt = i;
      const Xt = r,
        Qt = (e) => {
          let { className: t = null, text: l } = e;
          return Kt.createElement(
            "svg",
            {
              className: qt("ui-reviews-icon ui-reviews-icon--cockade", t),
              viewBox: "0 0 12 12",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              "aria-label": l,
            },
            Gt ||
              (Gt = Kt.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.31573 1.10365L9.66122 2.33868L10.8962 2.68504C11.3429 2.81043 11.7072 3.13382 11.8848 3.56238C12.0624 3.99094 12.0335 4.47728 11.8064 4.88179L11.1781 5.99994L11.8055 7.11722C12.033 7.52169 12.0622 8.00816 11.8848 8.43693C11.7073 8.8657 11.343 9.18932 10.8962 9.31484L9.66122 9.6612L9.31487 10.8962C9.18948 11.3429 8.86609 11.7072 8.43754 11.8848C8.00898 12.0624 7.52264 12.0335 7.11813 11.8064L6 11.1781L4.88273 11.8055C4.47826 12.033 3.9918 12.0622 3.56303 11.8848C3.13427 11.7073 2.81066 11.343 2.68513 10.8962L2.33878 9.6612L1.10376 9.31484C0.657141 9.18945 0.292755 8.86606 0.115195 8.4375C-0.0623645 8.00894 -0.0334609 7.5226 0.193609 7.11808L0.821861 5.99994L0.194469 4.88265C-0.0329578 4.47819 -0.0621606 3.99171 0.115247 3.56295C0.292655 3.13418 0.657042 2.81056 1.10376 2.68504L2.33878 2.33868L2.68513 1.10365C2.81059 0.657278 3.13383 0.293104 3.56215 0.11557C3.99048 -0.0619647 4.47657 -0.0332466 4.88101 0.193488L5.99914 0.821747L7.11642 0.194347C7.46607 -0.00238688 7.87955 -0.0521524 8.2659 0.056C8.65225 0.164152 8.9798 0.421362 9.1765 0.771039C9.23666 0.875892 9.28307 0.987621 9.31573 1.10365ZM7.84246 3.95962L5.29765 6.50617L4.15631 5.36224C4.08722 5.29097 3.99172 5.25146 3.89246 5.25309C3.79321 5.25146 3.69771 5.29097 3.62862 5.36224L3.10006 5.88908C3.02901 5.95826 2.98981 6.05379 2.99177 6.15294C2.99177 6.25607 3.02787 6.34373 3.10006 6.41593L5.0338 8.34625C5.10304 8.41721 5.19853 8.4564 5.29765 8.45454C5.39674 8.4562 5.49215 8.41704 5.5615 8.34625L8.89957 5.0133C8.97062 4.94412 9.00982 4.8486 9.00786 4.74945C9.00959 4.6506 8.9704 4.55544 8.89957 4.48646L8.37102 3.95876C8.30178 3.8878 8.20629 3.84861 8.10717 3.85047C8.00718 3.84947 7.9117 3.88866 7.84246 3.95962Z",
                fill: "#3483FA",
              }))
          );
        },
        Jt = {
          cockade: (e) => {
            let { text: t } = e;
            return Xt.createElement(Qt, { text: t });
          },
        };
      var el = (e, t, l) => (Jt[e] ? Jt[e]({ text: t, color: l }) : null);
      const tl = r,
        { useState: ll, useEffect: al } = r,
        nl = i,
        rl = i,
        il = Wt,
        ol = el,
        sl = /{([\s\S]+?)}/g;
      var cl = (e) => {
        var t;
        let {
          text: l,
          values: a = null,
          styles: n = null,
          class_name: r = null,
        } = e;
        const [i, o] = ll(a);
        al(() => {
          o(a);
        }, [a]);
        const s = r ? `ui-reviews-label-icon ${r}` : "ui-reviews-label-icon",
          c = (e, t) => `{${e.tag}}` === t,
          m = l.split(sl).filter((e) => !!e.trim()),
          u =
            null == l || null === (t = l.match(/\{([^{}]*)\}/g)) || void 0 === t
              ? void 0
              : t.map((e) => e.trim()),
          d = null == u ? void 0 : u.map((e) => i.find((t) => c(t, e)) || e);
        for (let e = 0; e < m.length; e += 1) {
          const t = m[e];
          if (t) {
            const l = null == d ? void 0 : d.find((e) => c(e, `{${t}}`));
            if (l)
              if ("ICON" === l.type) m[e] = ol(l.icon_id, l.text, l.color);
              else
                m[e] = tl.createElement(
                  "span",
                  { className: rl(s, { [`${n ? il(n) : ""}`]: n }) },
                  null == t ? void 0 : t.trim()
                );
            else
              "" !== t &&
                (m[e] = tl.createElement(
                  "span",
                  { className: rl(s, { [`${n ? il(n) : ""}`]: n }) },
                  null == t ? void 0 : t.trim()
                ));
          }
        }
        return tl.createElement(
          "p",
          { className: nl(r, s, { [`${n ? il(n) : ""}`]: n }) },
          m
        );
      };
      const ml = r,
        { useState: ul, useEffect: dl } = ml,
        _l = i,
        vl = d,
        El = cl,
        { STYLE_NAMESPACE: pl } = Ke,
        fl = `${pl}-filterLabel`;
      var gl = (e) => {
        let {
          title: t,
          track: l = null,
          itemValueVpp: a,
          keyObject: n = null,
          onFilter: r = () => {},
          vpp: i,
          official_store_id: o,
        } = e;
        const [s, c] = ul(a);
        return (
          dl(() => {
            c(a);
          }, [a]),
          ml.createElement(
            "div",
            { className: fl, "data-testid": `filterLabel-${n}` },
            ml.createElement(
              "div",
              { className: `${fl}__action` },
              ml.createElement(
                "button",
                {
                  className: _l(`${fl}__action__filterlabel`, {
                    active: s && !i,
                  }),
                  "aria-haspopup": "menu",
                  onClick: () => {
                    i || c(!s), r(s ? "all" : o, n, s ? null : l);
                  },
                },
                t && ml.createElement(El, t),
                s &&
                  !i &&
                  ml.createElement(
                    "span",
                    { className: "icon-feedbackPositive" },
                    ml.createElement(vl, {
                      className: `${fl}__feedbackPositive`,
                      color: "#3483FA",
                    })
                  )
              )
            )
          )
        );
      };
      const Ll = r,
        hl = i,
        { useState: Cl, useEffect: bl, useRef: Nl } = r,
        { STYLE_NAMESPACE: yl } = Ke,
        $l = `${yl}-comments__comment__content`;
      var wl = (e) => {
          let { content: t = {}, gallery: l = !1, mobile: a = !0, vpp: n } = e;
          const [r, i] = Cl(!0),
            [o, s] = Cl(!1),
            [c, m] = Cl(!1),
            u = Nl(null),
            {
              max_characters: d,
              see_less: _,
              see_more: v,
              see_original: E,
              see_translation: p,
              see_original_prefix: f,
              original_text: g,
              text: L,
            } = t,
            h = l && !L,
            C = d && (null == L ? void 0 : L.length) > d,
            b = (l && a) || (a && n) || n;
          bl(() => {
            if (u.current) {
              const { scrollHeight: e } = u.current,
                t = parseFloat(getComputedStyle(u.current).lineHeight),
                l = Math.ceil(e / t) - 1;
              s(l > 3);
            }
          }, [L, r]),
            bl(() => {
              m(!1);
            }, [L]);
          const N = () => (h && r) || (C && r),
            y = N() ? v : _,
            $ = hl($l, { [`${$l}--closed`]: N() && b, [$l]: !N() });
          return Ll.createElement(
            Ll.Fragment,
            null,
            Ll.createElement(
              "p",
              {
                ref: u,
                role: "presentation",
                className: hl($),
                "data-testid": "comment-content-component",
              },
              c ? g : L
            ),
            o &&
              b &&
              y &&
              Ll.createElement(
                "button",
                {
                  className: `${$l}__read-more`,
                  "data-testid": "comment-read-more",
                  onClick: () => {
                    i(!r);
                  },
                },
                y
              ),
            g &&
              Ll.createElement(
                "div",
                { className: `${$l}__original-container` },
                f &&
                  !c &&
                  Ll.createElement(
                    "span",
                    { className: `${$l}__see-original-prefix` },
                    f
                  ),
                Ll.createElement(
                  "button",
                  {
                    className: `${$l}__read-more`,
                    onClick: () => {
                      m((e) => !e);
                    },
                  },
                  c ? p : E
                )
              )
          );
        },
        kl = {};
      const { STYLE_NAMESPACE: Sl } = Ke;
      var xl;
      (kl.NAMESPACE = `${Sl}-comments__review-comment__options`),
        (kl.QUANTITY_DOTS = 3);
      const Al = r,
        { Button: Ml } = m,
        Il = E,
        { NAMESPACE: Tl, QUANTITY_DOTS: Dl } = kl;
      var Ol,
        Rl = Al.forwardRef((e, t) => {
          let { handleMenu: l, device: a = "desktop", text: n } = e;
          return Al.createElement(
            Ml,
            {
              ref: t,
              srLabel: n,
              className: `${Tl}-button`,
              "data-testid": "more-options-button",
              onClick: l,
              hierarchy: "mute",
            },
            "desktop" === a &&
              Al.createElement(
                "span",
                { className: "andes-visually-hidden", role: "button" },
                n
              ),
            "desktop" === a
              ? Dl &&
                  Array.from({ length: Dl }, (e, t) =>
                    Al.createElement("span", {
                      key: t,
                      className: "options-dropdown__circle",
                    })
                  )
              : xl ||
                  (xl = Al.createElement(Il, { color: "rgba(0, 0, 0, 0.55)" }))
          );
        });
      const Fl = r,
        { NAMESPACE: Pl } = kl,
        { FlagIcon: Vl } = De;
      var Bl = {
        ThreedotsMenuButton: Rl,
        ThreedotsMenuContent: (e) => {
          let {
            handleOnOptionComment: t = () => {},
            text: l,
            url: a,
            accessibility_text: n,
            device: r = "desktop",
          } = e;
          return Fl.createElement(
            "ul",
            { className: `${Pl}-menu` },
            Fl.createElement(
              "li",
              { className: `${Pl}-menu__li ${r}` },
              Fl.createElement(
                "a",
                {
                  "aria-label": n,
                  className: `${Pl}-menu__item-menu`,
                  "data-testid": "option",
                  href: a,
                  onClick: t,
                  rel: "noreferrer",
                },
                Ol || (Ol = Fl.createElement(Vl, null)),
                Fl.createElement("span", null, l)
              )
            )
          );
        },
      };
      const { useState: Ul } = r,
        { NAMESPACE: Yl } = kl;
      var zl = (e) => {
        let { onOptionCommentClick: t } = e;
        const [l, a] = Ul(!1);
        return {
          isVisibleMenu: l,
          handleOnOptionComment: (e, l) => {
            t && t(e, l), a(!1);
          },
          handleMenu: () => a((e) => !e),
          handleClickOutside: (e) => {
            ((e) => {
              if (null == e || !e.target) return [];
              const { target: t } = e;
              let l = t;
              const a = [];
              for (; null !== (n = l) && void 0 !== n && n.parentNode; ) {
                var n;
                a.push(l), (l = l.parentNode);
              }
              return a;
            })(e).find((e) => e.className === `${Yl}-menu__li`) || a(!1);
          },
        };
      };
      const Hl = r,
        { AndesProvider: jl } = _,
        { FloatingMenu: Zl } = v,
        { NAMESPACE: Gl } = kl,
        { ThreedotsMenuButton: Wl, ThreedotsMenuContent: Kl } = Bl,
        ql = zl;
      var Xl,
        Ql = (e) => {
          let {
            onOptionCommentClick: t,
            accessibility_text: l,
            items: a = [],
          } = e;
          const {
            isVisibleMenu: n,
            handleOnOptionComment: r,
            handleMenu: i,
            handleClickOutside: o,
          } = ql({ onOptionCommentClick: t });
          return Hl.createElement(
            "div",
            { className: Gl, "data-testid": "denounce-button-contaienr" },
            Hl.createElement(
              jl,
              null,
              Hl.createElement(
                Zl,
                {
                  width: 221,
                  className: `${Gl}__floating-menu`,
                  open: n,
                  onClose: o,
                  dialogSrLabel: l,
                  trigger: Hl.createElement(Wl, { handleMenu: i, text: l }),
                },
                a &&
                  a.map((e) =>
                    Hl.createElement(Kl, {
                      text: e.text,
                      accessibility_text: e.accessibility_text,
                      handleOnOptionComment: (t) => {
                        t.preventDefault(), r(e.url, e.track);
                      },
                    })
                  )
              )
            )
          );
        };
      const Jl = r,
        { BottomSheet: ea, BottomSheetHeader: ta } = p,
        { NAMESPACE: la } = kl,
        { ThreedotsMenuButton: aa, ThreedotsMenuContent: na } = Bl,
        ra = zl;
      var ia,
        oa = (e) => {
          let {
            onOptionCommentClick: t,
            accessibility_text: l,
            items: a = [],
            isVerticalIcon: n = !1,
          } = e;
          const {
            isVisibleMenu: r,
            handleOnOptionComment: i,
            handleMenu: o,
          } = ra({ onOptionCommentClick: t });
          return Jl.createElement(
            "div",
            { className: la },
            Jl.createElement(aa, {
              device: n ? "desktop" : "mobile",
              handleMenu: o,
              text: l,
            }),
            Jl.createElement(
              ea,
              {
                className: `${la}__bottom-sheet`,
                initialHeight: "83px",
                open: r,
                srLabel: l,
                header:
                  Xl ||
                  (Xl = Jl.createElement(ta, { close: !0, dragIndicator: !1 })),
                onClose: o,
              },
              null == a
                ? void 0
                : a.map((e) =>
                    Jl.createElement(na, {
                      handleOnOptionComment: (t) => {
                        t.preventDefault(), i(e.url, e.track);
                      },
                      text: e.text,
                      url: e.url,
                      accessibility_text: e.accessibility_text,
                      device: "mobile",
                    })
                  )
            )
          );
        };
      const sa = r,
        { Button: ca } = m,
        ma = i,
        { useState: ua, useEffect: da } = sa,
        _a = ue,
        va = z,
        Ea = ge,
        pa = q,
        fa = Ee,
        ga = G,
        { STYLE_NAMESPACE: La } = Ke,
        ha = `${La}-valorizations`,
        Ca = /\{([a-zA-Z_]+)\}/g;
      var ba = (e) => {
        var t;
        let {
          actions: l = null,
          dislikeHref: a = "",
          id: n = "",
          islogged: r = !1,
          likeHref: i = "",
          mobile: o = !1,
          onDislikeComment: s = () => {},
          onLikeComment: c = () => {},
          updateActions: m = () => {},
        } = e;
        const [u, d] = l || [],
          [_, v] = ua(null == d ? void 0 : d.selected),
          [E, p] = ua(null == u ? void 0 : u.selected),
          [f, g] = ua(
            null !== (t = null == u ? void 0 : u.value) && void 0 !== t ? t : 0
          ),
          [L, h] = ua(""),
          C = (e, t) => {
            const l = null == e ? void 0 : e.replace(Ca, t);
            h(l);
          };
        da(() => {
          var e;
          g(
            null !== (e = null == u ? void 0 : u.value) && void 0 !== e ? e : 0
          ),
            p(null == u ? void 0 : u.selected),
            C(
              null == u ? void 0 : u.accessibility_text,
              null == u ? void 0 : u.value
            );
        }, [u]),
          da(() => {
            v(null == d ? void 0 : d.selected);
          }, [d]);
        const b = (e, t) => {
            var l;
            g(e),
              p(t),
              (l = !1),
              _ && v(l),
              c(n, null == u ? void 0 : u.track, t).then(function () {
                let { likes: e } =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                const { value: l } = e || {};
                l && m && m(l, n, "LIKE", t);
              });
          },
          N = (e) => {
            var t, l;
            v(e),
              (t = -1),
              (l = !1),
              E && (g(f + t), p(l)),
              s(n, null == d ? void 0 : d.track, e).then(function () {
                let { dislikes: t } =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                const { value: l } = t || {};
                l && m && m(l, n, "DISLIKE", e);
              });
          },
          y = () =>
            E
              ? sa.createElement(Ea, { className: `${ha}__button-icon` })
              : r
              ? ia || (ia = sa.createElement(_a, null))
              : sa.createElement(fa, { className: `${ha}__likes__like` }),
          $ = sa.createElement(
            "span",
            { className: `${ha}__button-like__text` },
            null == u ? void 0 : u.text
          ),
          w = o ? (f > 0 ? `(${f})` : "") : f,
          k = sa.createElement(
            "p",
            {
              className: ma(
                { [`${ha}__text__disable`]: r },
                `${ha}__button-like__count`
              ),
            },
            w
          );
        return sa.createElement(
          "div",
          { className: ha },
          sa.createElement(
            ca,
            {
              "data-testid": "like-button",
              href: i,
              hierarchy: "mute",
              role: "switch",
              srLabel: L,
              "aria-checked": E,
              className: ma(`${ha}__button`, `${ha}__button-like`, {
                active: E,
              }),
              onClick: (e) => {
                e.preventDefault(),
                  c && E
                    ? (C(null == u ? void 0 : u.accessibility_text, f - 1),
                      b(f - 1, !1))
                    : (C(null == u ? void 0 : u.accessibility_text, f + 1),
                      b(f + 1, !0));
              },
              active: "true",
            },
            o
              ? sa.createElement(
                  sa.Fragment,
                  null,
                  sa.createElement(y, null),
                  $,
                  k
                )
              : sa.createElement(
                  sa.Fragment,
                  null,
                  $,
                  sa.createElement(y, null),
                  k
                )
          ),
          d &&
            sa.createElement(
              ca,
              {
                "data-testid": "dislike-button",
                href: a,
                hierarchy: "mute",
                role: "switch",
                className: ma(`${ha}__button`, `${ha}__button-dislike`, {
                  active: _,
                }),
                srLabel: `${(null == d ? void 0 : d.text) || "No es útil"}`,
                "aria-checked": _,
                onClick: (e) => {
                  e.preventDefault(), N(!s || !_);
                },
              },
              _ &&
                sa.createElement(pa, {
                  "data-testid": "dislike",
                  className: `${ha}__likes__dislike`,
                }),
              !_ &&
                r &&
                sa.createElement(va, { className: `${ha}__likes__dislike` }),
              !_ &&
                !r &&
                sa.createElement(ga, { className: `${ha}__likes__dislike` })
            )
        );
      };
      var Na = ba;
      var ya,
        $a = k(
          $(
            {
              __proto__: null,
              ImageProvider: ({ children: e }) => e,
              default: L.Image,
            },
            [w]
          )
        );
      const wa = r;
      var ka,
        Sa,
        xa,
        Aa = (e) => {
          let { className: t = "" } = e;
          return wa.createElement(
            "svg",
            {
              "aria-hidden": "true",
              className: t,
              xmlns: "http://www.w3.org/2000/svg",
              width: "48",
              height: "48",
              viewBox: "0 0 32 32",
              fill: "none",
            },
            ya ||
              (ya = wa.createElement("path", {
                d: "M10 22.1676V10.0324C10 8.47779 11.6959 7.51756 13.029 8.31739L23.1417 14.385C24.4364 15.1618 24.4364 17.0382 23.1417 17.815L13.029 23.8826C11.6959 24.6824 10 23.7222 10 22.1676Z",
                fill: "white",
              }))
          );
        };
      const Ma = r;
      var Ia,
        Ta,
        Da,
        Oa = (e) => {
          let { className: t = "" } = e;
          return Ma.createElement(
            "svg",
            {
              "aria-hidden": "true",
              className: t,
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
            },
            ka ||
              (ka = Ma.createElement("path", {
                d: "M11 5L6 9H2v6h4l5 4V5z",
                fill: "currentColor",
              })),
            Sa ||
              (Sa = Ma.createElement("path", {
                d: "M15.54 8.46a5 5 0 0 1 0 7.07",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                fill: "none",
              })),
            xa ||
              (xa = Ma.createElement("path", {
                d: "M19.07 4.93a10 10 0 0 1 0 14.14",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                fill: "none",
              }))
          );
        };
      const Ra = r;
      var Fa,
        Pa,
        Va,
        Ba,
        Ua = (e) => {
          let { className: t = "" } = e;
          return Ra.createElement(
            "svg",
            {
              "aria-hidden": "true",
              className: t,
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
            },
            Ia ||
              (Ia = Ra.createElement("path", {
                d: "M11 5L6 9H2v6h4l5 4V5z",
                fill: "currentColor",
              })),
            Ta ||
              (Ta = Ra.createElement("line", {
                x1: "23",
                y1: "9",
                x2: "17",
                y2: "15",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
              })),
            Da ||
              (Da = Ra.createElement("line", {
                x1: "17",
                y1: "9",
                x2: "23",
                y2: "15",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
              }))
          );
        },
        Ya = a.default;
      const za = r,
        { Image: Ha } = $a,
        { ProgressIndicatorCircular: ja } = u,
        Za = Aa,
        Ga = Oa,
        Wa = Ua,
        {
          DEFAULT_VIDEO_LOADING_TEXT: Ka,
          DEFAULT_VIDEO_ERROR_TEXT: qa,
          DEFAULT_VIDEO_MUTE_LABEL: Xa,
          DEFAULT_VIDEO_UNMUTE_LABEL: Qa,
        } = Ke,
        {
          useState: Ja,
          useRef: en,
          useEffect: tn,
          useLayoutEffect: ln,
          useMemo: an,
          useCallback: nn,
        } = za,
        rn = "undefined" != typeof window ? ln : tn,
        on = "ui-video-clips",
        sn = Object.freeze({
          IDLE: "idle",
          LOADING: "loading",
          PLAYING: "playing",
          PAUSED: "paused",
          ERROR: "error",
        });
      var cn = {
        VideoClips: (e) => {
          var t, l;
          let {
            alt: a = "",
            className: n = "",
            thumbnail: r = "",
            url: i = "",
            isActive: o = !1,
            autoplay: s = !0,
            preview: c = !1,
            muted: m = !1,
            onClick: u,
            loadingSize: d = "xlarge",
            loadingText: _ = Ka,
            errorText: v = qa,
            muteLabel: E = Xa,
            unmuteLabel: p = Qa,
            externalProgressRef: f = null,
          } = e;
          const [g, L] = Ja(!1),
            [h, C] = Ja(!1),
            [b, N] = Ja(m),
            [y, $] = Ja(sn.IDLE),
            [w, k] = Ja(!1),
            S = en(null),
            x = en(!1),
            A = en(c),
            M = en(!1),
            I = en(!1),
            T = en(null),
            D = en(!0);
          rn(() => {
            (x.current = h), (A.current = c);
          });
          const O = nn((e) => {
              if (((S.current = e), !e))
                return (I.current = !0), void (M.current = !1);
              (I.current = !1),
                x.current &&
                  !A.current &&
                  ((M.current = !0),
                  e
                    .play()
                    .catch(() => {
                      !I.current && D.current && (C(!1), $(sn.IDLE));
                    })
                    .finally(() => {
                      M.current = !1;
                    }));
            }, []),
            R = en(0),
            F = en(null),
            P = null != f ? f : F;
          tn(
            () => () => {
              (D.current = !1),
                T.current && cancelAnimationFrame(T.current),
                S.current &&
                  (S.current.pause(), (S.current.src = ""), S.current.load());
            },
            []
          ),
            tn(() => {
              c ||
                (T.current &&
                  (cancelAnimationFrame(T.current), (T.current = null)),
                (R.current = 0),
                P.current && (P.current.style.width = "0%"),
                $(sn.IDLE),
                C(!1),
                k(!1));
            }, [i, c, f]),
            tn(() => {
              let e = !1;
              return (
                c &&
                  s &&
                  i &&
                  S.current &&
                  (L(!1),
                  S.current.play().catch(() => {
                    e || L(!0);
                  })),
                () => {
                  e = !0;
                }
              );
            }, [c, s, i]),
            tn(() => {
              c ||
                (o && s && i
                  ? (C(!0), $(sn.LOADING))
                  : (S.current && S.current.pause(), C(!1), $(sn.IDLE)));
            }, [o, s, c, i]),
            tn(() => {
              let e = !1;
              return (
                h &&
                  !c &&
                  S.current &&
                  !M.current &&
                  S.current.play().catch(() => {
                    e || (C(!1), $(sn.IDLE));
                  }),
                () => {
                  e = !0;
                }
              );
            }, [h, c]),
            tn(() => {
              N(m);
            }, [m]),
            tn(() => {
              S.current && (S.current.muted = b);
            }, [b]);
          const V = () => {
              T.current &&
                (cancelAnimationFrame(T.current), (T.current = null));
            },
            B = () => {
              V();
              const e = () => {
                if (!D.current) return;
                const t = S.current;
                if (t && t.duration) {
                  const e = (t.currentTime / t.duration) * 100;
                  (R.current = e),
                    P.current && (P.current.style.width = `${e}%`);
                }
                T.current = requestAnimationFrame(e);
              };
              T.current = requestAnimationFrame(e);
            },
            U = () => {
              var e;
              c
                ? null == u || u()
                : h
                ? (null === (e = S.current) || void 0 === e || e.pause(), C(!1))
                : i &&
                  (y === sn.ERROR && S.current && S.current.load(),
                  C(!0),
                  y !== sn.PAUSED && $(sn.LOADING));
            },
            Y = (e) => {
              e.stopPropagation(), N((e) => !e);
            },
            z = {
              ref: O,
              src: i,
              muted: b,
              playsInline: !0,
              onPlay: () => {
                $(sn.PLAYING), C(!0), k(!0), B();
              },
              onPause: () => {
                $(sn.PAUSED), C(!1), V();
              },
              onWaiting: () => {
                $(sn.LOADING), V();
              },
              onCanPlay: () => {
                const e = S.current;
                $((t) =>
                  t !== sn.LOADING
                    ? t
                    : e
                    ? e.paused
                      ? sn.PAUSED
                      : sn.PLAYING
                    : sn.IDLE
                ),
                  e && !e.paused && B();
              },
              onError: () => {
                $(sn.ERROR), C(!1), V();
              },
            },
            H = !c && o && !!i && (h || w || y === sn.ERROR),
            j = c && s && !!i && !g,
            Z = j || h || H,
            G = Z && (!w || y === sn.LOADING || y === sn.ERROR),
            W = H && !f,
            K = H && !h && w && (y === sn.PAUSED || y === sn.IDLE),
            q = an(
              () => `${on}__${h && !j ? "video-player" : "video-wrapper"} ${n}`,
              [h, j, n]
            );
          return za.createElement(
            "div",
            {
              className: q,
              onClick: U,
              onKeyDown: (e) => {
                ("Enter" !== e.key && " " !== e.key) ||
                  (e.preventDefault(), U());
              },
              role: "button",
              tabIndex: 0,
              "aria-label": a || void 0,
              "aria-pressed": c ? void 0 : h,
            },
            Z &&
              za.createElement(
                "video",
                Ya({}, z, {
                  loop: j,
                  onEnded:
                    h && !j
                      ? () => {
                          C(!1), $(sn.IDLE), V();
                        }
                      : void 0,
                })
              ),
            (G || !Z) &&
              za.createElement(
                "div",
                { className: `${on}__thumbnail-overlay` },
                (function () {
                  let e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  return za.createElement(
                    za.Fragment,
                    null,
                    za.createElement(Ha, {
                      alt: a,
                      src: r,
                      preload: !1,
                      loading: c || !o ? "lazy" : "eager",
                    }),
                    e &&
                      (Fa ||
                        (Fa = za.createElement(
                          "div",
                          { className: `${on}__play-overlay` },
                          za.createElement(Za, null)
                        )))
                  );
                })(y !== sn.ERROR && (!Z || (!c && y !== sn.LOADING)))
              ),
            K &&
              (Ba ||
                (Ba = za.createElement(
                  "div",
                  { className: `${on}__play-overlay` },
                  za.createElement(Za, null)
                ))),
            Z &&
              w &&
              !j &&
              za.createElement(
                "button",
                {
                  type: "button",
                  className: `${on}__volume-btn`,
                  onClick: Y,
                  "aria-label": b ? p : E,
                },
                b
                  ? Pa || (Pa = za.createElement(Wa, null))
                  : Va || (Va = za.createElement(Ga, null))
              ),
            y === sn.LOADING &&
              (t ||
                (t = za.createElement(
                  "div",
                  { className: `${on}__loading` },
                  za.createElement(ja, { size: d, color: "inverse" }),
                  za.createElement(
                    "span",
                    { className: `${on}__loading-text` },
                    _
                  )
                ))),
            y === sn.ERROR &&
              (l ||
                (l = za.createElement(
                  "div",
                  { className: `${on}__error` },
                  za.createElement("p", { className: `${on}__error-text` }, v)
                ))),
            W &&
              za.createElement(
                "div",
                { className: `${on}__progress` },
                za.createElement("div", {
                  ref: P,
                  className: `${on}__progress-fill`,
                  style: { width: `${R.current}%` },
                })
              )
          );
        },
      };
      const mn = r,
        un = i,
        {
          CarouselSnapped: dn,
          CarouselSnappedSlide: _n,
          CarouselImage: vn,
        } = f,
        { VisuallyHidden: En } = g,
        pn = Ce,
        {
          STYLE_NAMESPACE: fn,
          MEDIA_TYPE: gn,
          DEFAULT_VIDEO_LOADING_TEXT: Ln,
          DEFAULT_VIDEO_ERROR_TEXT: hn,
          DEFAULT_VIDEO_MUTE_LABEL: Cn,
          DEFAULT_VIDEO_UNMUTE_LABEL: bn,
        } = Ke,
        { VideoClips: Nn } = cn,
        yn = `${fn}-carousel`,
        $n = (e) => {
          let { value: t, accessibility_text: l } = e;
          return mn.createElement(
            "div",
            { className: `${yn}__thumb-rating` },
            mn.createElement(En, null, l),
            mn.createElement("span", null, t),
            mn.createElement(pn, { className: `${yn}__thumb-rating__star` })
          );
        };
      var wn,
        kn = (e) => {
          let {
            className: t = null,
            onClickImage: l = null,
            overflow: a = null,
            preload: n = !0,
            lazyload: r = !1,
            media: i,
            type: o,
            accessibility_text: s,
            video_loading_text: c = Ln,
            video_error_text: m = hn,
            video_mute_label: u = Cn,
            video_unmute_label: d = bn,
          } = e;
          const _ = (e) => e === i.length - 1 && a,
            v = (e, t) => {
              l && l(e, t);
            },
            E = "primary" === o ? 4 : 3,
            p = `reviews-carousel-${o}`;
          return mn.createElement(
            dn,
            {
              srLabel: s,
              arrows: { size: "small" },
              className: un(yn, t, p, {
                [`${yn}__disabled-swipe`]: (null == i ? void 0 : i.length) <= E,
              }),
              pagination: !1,
              slidesPerView: E,
              strictBoundaries: !1,
            },
            i.map((e, t) => {
              var l;
              return mn.createElement(
                _n,
                {
                  key: `photo-review-${o}-${t}`,
                  className: un(p, `${yn}__carousel-slide`),
                },
                mn.createElement(
                  "div",
                  { className: un(`${yn}__img-container`, p) },
                  ((e, t) => !_(e) && !!t)(t, e.rating) &&
                    mn.createElement(
                      "div",
                      { className: `${yn}__overlay-container` },
                      mn.createElement("div", {
                        className: `${yn}__img-overlay`,
                      }),
                      mn.createElement($n, {
                        value: e.rating,
                        accessibility_text: e.rating_accessibility_text,
                      })
                    ),
                  e.type === gn.VIDEO
                    ? mn.createElement(Nn, {
                        preview: !0,
                        autoplay:
                          null === (l = e.autoplay) || void 0 === l || l,
                        muted: !0,
                        url: e.preview_url,
                        thumbnail: e.thumbnail || e.url,
                        alt: e.alt || "",
                        className: `${yn}__video-container`,
                        onClick: () => v(e.url_navigation, e.track),
                        loadingSize: "medium",
                        loadingText: c,
                        errorText: m,
                        muteLabel: u,
                        unmuteLabel: d,
                      })
                    : mn.createElement(vn, {
                        alt: e.alt || "",
                        src: e.url,
                        preload: n,
                        lazyload: r ? "on" : "off",
                        className: `${yn}__img`,
                        "data-testid": `img-carousel-${t}`,
                        onClick: () => {
                          v(e.url_navigation, e.track);
                        },
                      }),
                  a &&
                    _(t) &&
                    mn.createElement(
                      "div",
                      { className: `${yn}__overlay-container` },
                      mn.createElement("div", {
                        className: `${yn}__img-overlay`,
                      }),
                      mn.createElement(
                        "span",
                        { className: `${yn}__overflow` },
                        `+${a}`
                      )
                    )
                )
              );
            })
          );
        };
      const Sn = r,
        xn = i,
        { CarouselFree: An, CarouselFreeSlide: Mn } = h,
        { CarouselImage: In } = f,
        { VisuallyHidden: Tn } = g,
        Dn = C,
        On = Ce,
        {
          STYLE_NAMESPACE: Rn,
          MEDIA_TYPE: Fn,
          DEFAULT_VIDEO_LOADING_TEXT: Pn,
          DEFAULT_VIDEO_ERROR_TEXT: Vn,
          DEFAULT_VIDEO_MUTE_LABEL: Bn,
          DEFAULT_VIDEO_UNMUTE_LABEL: Un,
        } = Ke,
        { VideoClips: Yn } = cn,
        zn = `${Rn}-carousel-mobile`,
        Hn = (e) => {
          let { value: t, accessibility_text: l } = e;
          return Sn.createElement(
            "div",
            { className: `${zn}__thumb-rating` },
            Sn.createElement(Tn, null, l),
            Sn.createElement("span", null, t),
            Sn.createElement(On, { className: `${zn}__thumb-rating__star` })
          );
        };
      var jn = (e) => {
          let {
            className: t = null,
            onClickImage: l = null,
            overflow: a = null,
            preload: n = !0,
            lazyload: r = !1,
            media: i,
            type: o,
            isVPP: s = !1,
            accessibility_text: c,
            video_loading_text: m = Pn,
            video_error_text: u = Vn,
            video_mute_label: d = Bn,
            video_unmute_label: _ = Un,
          } = e;
          const v = (e, t) => {
              l && l(e, t);
            },
            E = (e, t, l) => {
              var a;
              let {
                isLastItem: i,
                showOverflow: o,
                showRate: s,
                overflowLabel: c,
                useGridOverflow: E = !1,
              } = l;
              return Sn.createElement(
                Sn.Fragment,
                null,
                s &&
                  Sn.createElement(
                    "div",
                    { className: `${zn}__overlay-container` },
                    Sn.createElement("div", {
                      className: `${zn}__img-overlay`,
                    }),
                    Sn.createElement(Hn, {
                      value: e.rating,
                      accessibility_text: e.rating_accessibility_text,
                    })
                  ),
                e.type === Fn.VIDEO &&
                  Sn.createElement(Yn, {
                    preview: !0,
                    autoplay: null === (a = e.autoplay) || void 0 === a || a,
                    muted: !0,
                    url: e.preview_url,
                    thumbnail: e.thumbnail || e.url,
                    alt: e.alt || "",
                    className: `${zn}__video-container`,
                    onClick: () => v(e.url_navigation, e.track),
                    loadingSize: "medium",
                    loadingText: m,
                    errorText: u,
                    muteLabel: d,
                    unmuteLabel: _,
                  }),
                e.type !== Fn.VIDEO &&
                  Sn.createElement(In, {
                    alt: e.alt || "",
                    src: e.url,
                    preload: n,
                    lazyload: r ? "on" : "off",
                    className: `${zn}__img`,
                    "data-testid": `img-carousel-${t}`,
                    onClick: () => v(e.url_navigation, e.track),
                  }),
                o &&
                  E &&
                  Sn.createElement(
                    "div",
                    { className: `${zn}__overflow-badge` },
                    wn || (wn = Sn.createElement(Dn, { color: "white" })),
                    Sn.createElement("span", null, `+${c}`)
                  ),
                o &&
                  !E &&
                  Sn.createElement(
                    "div",
                    { className: `${zn}__overlay-container` },
                    Sn.createElement("div", {
                      className: `${zn}__img-overlay`,
                    }),
                    Sn.createElement(
                      "span",
                      { className: `${zn}__overflow` },
                      `+${c}`
                    )
                  )
              );
            };
          if ("secondary" === o && !s) {
            const e =
                [null, "single", "pair", "trio", "quad"][i.length] ||
                "overflow",
              l = "overflow" === e ? i.slice(0, 4) : i,
              n = a || (i.length > 4 ? i.length - 4 : 0);
            return Sn.createElement(
              "div",
              { "aria-label": c, className: xn(zn, t, `${zn}--${e}`) },
              l.map((e, t) => {
                const a = t === l.length - 1;
                return Sn.createElement(
                  "div",
                  { key: `photo-review-${t}`, className: `${zn}__item` },
                  E(e, t, {
                    isLastItem: a,
                    showOverflow: a && n > 0,
                    showRate: !((a && n > 0) || !e.rating),
                    overflowLabel: n,
                    useGridOverflow: !0,
                  })
                );
              })
            );
          }
          const p = (e) => e === i.length - 1 && a,
            f = (e, t) => !p(e) && !!t,
            g = "primary" === o ? 8 : 12,
            L = `reviews-carousel-${o}${s && "secondary" === o ? "-vpp" : ""}`;
          return Sn.createElement(
            An,
            { srLabel: c, spacing: g, className: xn(zn, t, L) },
            i.map((e, t) =>
              Sn.createElement(
                Mn,
                { key: `photo-review-${o}-${t}`, className: L },
                Sn.createElement(
                  "div",
                  { className: xn(`${zn}__img-container`, L) },
                  E(e, t, {
                    isLastItem: p(t),
                    showOverflow: a && p(t),
                    showRate: f(t, e.rating),
                    overflowLabel: a,
                    useGridOverflow: !1,
                  })
                )
              )
            )
          );
        },
        Zn = a.default,
        Gn = n.default;
      const Wn = r,
        Kn = i,
        qn = cl,
        Xn = We,
        Qn = wl,
        Jn = Ql,
        er = oa,
        tr = Na,
        lr = kn,
        ar = jn,
        { STYLE_NAMESPACE: nr } = Ke,
        rr = `${nr}-comments__comment`,
        ir = (e, t, l) =>
          null != e && e.date
            ? e.country
              ? Wn.createElement(
                  "span",
                  { className: `${t}__date-container` },
                  Wn.createElement(
                    "span",
                    { className: `${t}__date` },
                    e.country
                  ),
                  Wn.createElement("span", {
                    className: Kn(`${t}__date-separator`, {
                      "separator-carousel-comment": l,
                    }),
                  }),
                  Wn.createElement("span", { className: `${t}__date` }, e.date)
                )
              : Wn.createElement("span", { className: `${t}__date` }, e.date)
            : null;
      var or = Wn.memo((e) => {
        var t, l, a, n, r, i, o;
        let {
          actions: s = null,
          carousel: c,
          className: m,
          comment: u = {},
          dislikeHref: d = "",
          gallery: _,
          id: v = "",
          isCarouselComment: E = !1,
          islogged: p = !1,
          likeHref: f = "",
          mobile: g = !0,
          onClickCarouselImage: L,
          onOptionCommentClick: h = () => {},
          onDislikeComment: C = () => {},
          onLikeComment: b = () => {},
          rating: N = null,
          aria_label: y,
          updateActions: $,
          variant: w = null,
          vpp: k = !1,
          official_store_label: S,
        } = e;
        const x = c
          ? Gn(
              Gn({}, c),
              {},
              {
                preload: !k,
                lazyload: k,
                accessibility_text: c.accessibility_text || y,
                isVPP: k,
              }
            )
          : c;
        return Wn.createElement(
          Wn.Fragment,
          null,
          Wn.createElement(
            "article",
            {
              "aria-roledescription": "Review",
              className: Kn(rr, m),
              "data-testid": "comment-component",
            },
            Wn.createElement(
              "div",
              { className: Kn(`${rr}__header`) },
              Wn.createElement(
                "div",
                { className: Kn(`${rr}__rating-container`) },
                Wn.createElement(Xn, {
                  "aria-hidden": "true",
                  className: `${rr}__rating`,
                  value: N,
                  aria_label: y,
                }),
                (E ? g : !g) && ir(u, rr, E)
              ),
              S &&
                Wn.createElement(
                  "span",
                  { className: `${rr}__official_store_label` },
                  Wn.createElement(qn, S)
                ),
              w && Wn.createElement("span", { className: `${rr}__subtitle` }, w)
            ),
            g &&
              Wn.createElement(Qn, {
                content: u.content,
                mobile: g,
                date: u.date,
                gallery: _,
                vpp: k,
              }),
            (null == c || null === (t = c.media) || void 0 === t
              ? void 0
              : t.length) > 0 &&
              Wn.createElement(
                "div",
                {
                  className: g
                    ? `${rr}__carousel--secondary-mobile`
                    : `${rr}__carousel--secondary`,
                },
                g
                  ? Wn.createElement(ar, Zn({}, x, { onClickImage: L }))
                  : Wn.createElement(lr, Zn({}, x, { onClickImage: L }))
              ),
            !g &&
              Wn.createElement(Qn, {
                content: u.content,
                mobile: g,
                date: u.date,
                gallery: _,
                vpp: k,
              }),
            !g && !_ && E && ir(u, rr),
            Wn.createElement(
              "div",
              { className: `${rr}__footer` },
              g
                ? Wn.createElement(
                    Wn.Fragment,
                    null,
                    !E && ir(u, rr, E),
                    E
                      ? Wn.createElement(
                          Wn.Fragment,
                          null,
                          s &&
                            Wn.createElement(tr, {
                              mobile: !1,
                              actions: s,
                              islogged: p,
                              likeHref: f,
                              dislikeHref: d,
                              id: v,
                              onLikeComment: b,
                              onDislikeComment: C,
                              updateActions: $,
                            }),
                          u.denounce &&
                            Wn.createElement(
                              er,
                              Zn({}, u.menu_options, {
                                accessibility_text:
                                  (null === (l = u.menu_options) || void 0 === l
                                    ? void 0
                                    : l.accessibility_text) ||
                                  (null === (a = u.denounce) || void 0 === a
                                    ? void 0
                                    : a.text),
                                onOptionCommentClick: h,
                                isVerticalIcon: !0,
                              })
                            )
                        )
                      : Wn.createElement(
                          "div",
                          { className: `${rr}__footer-actions` },
                          s &&
                            Wn.createElement(tr, {
                              mobile: g,
                              actions: s,
                              islogged: p,
                              likeHref: f,
                              dislikeHref: d,
                              id: v,
                              onLikeComment: b,
                              onDislikeComment: C,
                              updateActions: $,
                            }),
                          u.denounce &&
                            Wn.createElement(
                              er,
                              Zn({}, u.menu_options, {
                                accessibility_text:
                                  (null === (n = u.menu_options) || void 0 === n
                                    ? void 0
                                    : n.accessibility_text) ||
                                  (null === (r = u.denounce) || void 0 === r
                                    ? void 0
                                    : r.text),
                                onOptionCommentClick: h,
                                isVerticalIcon: !1,
                              })
                            )
                        )
                  )
                : Wn.createElement(
                    Wn.Fragment,
                    null,
                    s &&
                      Wn.createElement(tr, {
                        mobile: g,
                        actions: s,
                        islogged: p,
                        likeHref: f,
                        dislikeHref: d,
                        id: v,
                        onLikeComment: b,
                        onDislikeComment: C,
                        updateActions: $,
                      }),
                    u.denounce &&
                      Wn.createElement(
                        Jn,
                        Zn({}, u.menu_options, {
                          accessibility_text:
                            (null === (i = u.menu_options) || void 0 === i
                              ? void 0
                              : i.accessibility_text) ||
                            (null === (o = u.denounce) || void 0 === o
                              ? void 0
                              : o.text),
                          onOptionCommentClick: h,
                        })
                      )
                  )
            )
          )
        );
      });
      var sr = or;
      const cr = r;
      var mr = function (e) {
        return function (t) {
          const l = e[t.id];
          if (!l) return null;
          const a = t;
          return cr.createElement(l, a);
        };
      };
      const ur = r,
        { Title: dr } = c,
        { STYLE_NAMESPACE: _r } = Ke,
        vr = `${_r}__summary__sections`;
      var Er = (e) => {
        let { sections: t } = e;
        return ur.createElement(
          "div",
          { className: vr },
          null == t
            ? void 0
            : t.map((e, t) =>
                ur.createElement(
                  "div",
                  { key: t, className: `${vr}__container` },
                  e.title.text &&
                    ur.createElement(
                      dr,
                      {
                        className: `${vr}__title`,
                        color: "primary",
                        component: "h2",
                        size: "xs",
                      },
                      e.title.text
                    ),
                  ur.createElement(
                    "ul",
                    { className: `${vr}__bullets` },
                    e.bullets.map((e, t) =>
                      ur.createElement(
                        "li",
                        { className: `${vr}__item`, key: t },
                        ur.createElement(
                          "span",
                          { className: `${vr}__bullet-point` },
                          "•"
                        ),
                        ur.createElement(
                          "span",
                          { className: `${vr}__bullet-text` },
                          e.text
                        )
                      )
                    )
                  )
                )
              )
        );
      };
      const pr = r,
        { Title: fr } = c,
        { STYLE_NAMESPACE: gr } = Ke,
        Lr = `${gr}__summary__plain_text`;
      var hr,
        Cr,
        br = (e) => {
          let {
            summary_title: t = { text: "" },
            summary_text: l = { text: "" },
          } = e;
          return pr.createElement(
            "div",
            { className: Lr },
            t.text &&
              pr.createElement(
                fr,
                {
                  className: `${Lr}__title`,
                  color: "primary",
                  component: "h2",
                  size: "16px",
                },
                t.text
              ),
            pr.createElement(
              "p",
              { className: `${Lr}__summary_container` },
              l.text
            )
          );
        };
      const Nr = r;
      var yr = Nr.memo((e) => {
        let { className: t = "" } = e;
        return Nr.createElement(
          "svg",
          {
            className: t,
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
          },
          hr ||
            (hr = Nr.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.24055 1.46224C8.84928 0.746962 7.82196 0.746961 7.43068 1.46224L5.7212 4.58728C5.62653 4.76035 5.48422 4.90264 5.31114 4.99728L2.18593 6.70618C1.47045 7.09741 1.47045 8.12498 2.18593 8.51621L5.31114 10.2251C5.48422 10.3198 5.62653 10.462 5.7212 10.6351L7.43068 13.7601C7.82196 14.4754 8.84928 14.4754 9.24055 13.7601L10.95 10.6351C11.0447 10.462 11.187 10.3198 11.3601 10.2251L14.4853 8.51621C15.2008 8.12498 15.2008 7.09741 14.4853 6.70618L11.3601 4.99728C11.187 4.90264 11.0447 4.76035 10.95 4.58728L9.24055 1.46224ZM8.67451 6.26099C8.48727 6.07379 8.18369 6.07379 7.99644 6.26099L6.98501 7.27223C6.79776 7.45944 6.79776 7.76296 6.98501 7.95017L7.99644 8.9614C8.18369 9.14861 8.48727 9.14861 8.67451 8.9614L9.68594 7.95017C9.87319 7.76296 9.87319 7.45944 9.68594 7.27223L8.67451 6.26099Z",
              fill: "#3483FA",
            })),
          Cr ||
            (Cr = Nr.createElement("rect", {
              x: "2.93832",
              y: "10.9688",
              width: "2.87652",
              height: "2.87652",
              rx: "0.359565",
              transform: "rotate(45 2.93832 10.9688)",
              fill: "#3483FA",
            }))
        );
      });
      const $r = r,
        { STYLE_NAMESPACE: wr } = Ke,
        kr = yr,
        Sr = `${wr}__summary__description`;
      var xr = (e) => {
        let { icon: t, text: l } = e;
        return $r.createElement(
          "div",
          { className: Sr },
          t &&
            ((e) => {
              let { id: t } = e;
              return "robot_ai_icon" === t
                ? $r.createElement(kr, { className: `${Sr}__icon` })
                : null;
            })(t),
          $r.createElement("span", { className: `${Sr}__text` }, l)
        );
      };
      const Ar = r,
        { STYLE_NAMESPACE: Mr } = Ke,
        Ir = Na,
        Tr = `${Mr}__summary__valorization-buttons`;
      const Dr = mr,
        Or = Er,
        Rr = br,
        Fr = xr,
        Pr = (e) => {
          let {
            summaryId: t,
            actions: l,
            islogged: a,
            onDislikeSummary: n,
            onLikeSummary: r,
          } = e;
          return Ar.createElement(
            "div",
            { className: Tr },
            l &&
              Ar.createElement(Ir, {
                actions: l,
                islogged: a,
                id: t,
                onLikeComment: r,
                onDislikeComment: n,
              })
          );
        },
        Vr = {};
      (Vr.SECTIONS = Or),
        (Vr.SUMMARY = Rr),
        (Vr.SUMMARY_DESCRIPTION = Fr),
        (Vr.SUMMARY_ACTIONS = Pr);
      var Br = Dr(Vr),
        Ur = a.default;
      const Yr = r,
        zr = Br,
        { STYLE_NAMESPACE: Hr } = Ke,
        jr = `${Hr}__summary`;
      var Zr,
        Gr = (e) => {
          let {
            summary_id: t,
            object_id: l,
            components: a = [],
            isLogged: n,
            onLikeSummary: r,
            onDislikeSummary: i,
          } = e;
          return a && 0 !== a.length
            ? Yr.createElement(
                "div",
                { className: jr, "data-testid": "summary-component" },
                a.map((e, a) =>
                  Yr.createElement(
                    zr,
                    Ur(
                      {
                        key: a,
                        summaryId: t,
                        objectId: l,
                        isLogged: n,
                        onLikeSummary: r,
                        onDislikeSummary: i,
                      },
                      e
                    )
                  )
                )
              )
            : null;
        };
      const Wr = r,
        Kr = i,
        qr = Te,
        { STYLE_NAMESPACE: Xr } = Ke,
        Qr = `${Xr}-empty-messages`;
      var Jr = (e) => {
          let { id: t, title: l, label: a, className: n = "" } = e;
          const r = Kr(Qr, n);
          return Wr.createElement(
            "div",
            { className: r, id: t, "data-testid": "empty-messages" },
            Wr.createElement(
              "div",
              { className: "ui-reviews-empty-state--wrapper" },
              Zr || (Zr = Wr.createElement(qr, { aria_hidden: !0 })),
              Wr.createElement(
                "div",
                { className: "ui-reviews-empty-state--title" },
                Wr.createElement("h3", { class: "ui-reviews-label" }, l.text)
              ),
              Wr.createElement(
                "div",
                { className: "ui-reviews-empty-state--description" },
                Wr.createElement("p", { class: "ui-reviews-label" }, a.text)
              )
            )
          );
        },
        ei = a.default;
      const ti = r,
        { useState: li, useEffect: ai, useRef: ni, useCallback: ri } = ti,
        { Title: ii } = c,
        oi = sr,
        { STYLE_NAMESPACE: si } = Ke,
        ci = Gr,
        mi = `${si}-comments`,
        ui = { root: null, rootMargin: "100px", threshold: 0.2 },
        di = Jr;
      var _i = (e) => {
        let {
          embedded: t = !1,
          islogged: l = !1,
          message: a = null,
          mobile: n = !0,
          offset: r,
          onClickCarouselImage: i,
          onOptionCommentClick: o = () => {},
          onDislikeComment: s = () => {},
          onDislikeSummary: c,
          onLikeComment: m = () => {},
          onLikeSummary: u,
          OnOffset: d = () => {},
          onScrollTab: _ = () => {},
          orderCriteria: v = "",
          rating: E = "",
          officialStore: p,
          reviews: f = [],
          vpp: g,
          summary: L,
          title_reviews: h,
          total_comments: C,
          empty_messages: b,
          total_opinions: N,
          isKit: y = !1,
        } = e;
        const $ = ni(null),
          [w, k] = li(f),
          [S, x] = li(!0),
          [A, M] = li(!1),
          [I, T] = li(!1),
          D = 0 !== C;
        ai(() => {
          f ? (k(f), x(!0)) : k([]);
        }, [f, t]);
        const O = ri(
          (e) => {
            e &&
              S &&
              (A ||
                ($.current && $.current.disconnect(),
                ($.current = new IntersectionObserver((e) => {
                  e[0].isIntersecting &&
                    (M(!0),
                    (async () => {
                      if (!_ || t || g) _();
                      else
                        try {
                          T(!0);
                          const e = {
                              rating: E,
                              orderCriteria: v,
                              officialStore: p,
                              offset: r,
                            },
                            t = await _(e);
                          t.reviews && t.reviews.length < 1 && x(!1),
                            k((e) => [
                              ...e,
                              ...(null == t ? void 0 : t.reviews),
                            ]),
                            d(),
                            M(!1);
                        } catch (e) {
                          x(!1), M(!1);
                        }
                    })());
                }, ui)),
                e && $.current.observe(e)));
          },
          [E, v, r, _, p, d, g, t, S, A]
        );
        return ti.createElement(
          ti.Fragment,
          null,
          D &&
            ti.createElement(
              ti.Fragment,
              null,
              ti.createElement(
                ii,
                {
                  className: `${mi}__title`,
                  color: "primary",
                  component: "h3",
                  size: "16px",
                },
                null == h ? void 0 : h.title
              ),
              !n &&
                (!y || !g) &&
                ti.createElement("span", { className: "total-opinion" }, N),
              L &&
                ti.createElement(
                  ci,
                  ei({ onLikeSummary: u, onDislikeSummary: c, islogged: l }, L)
                )
            ),
          ti.createElement(
            "div",
            { className: mi, "data-testid": "comments-component" },
            w.length > 0 &&
              D &&
              w.map((e, t) =>
                ti.createElement(
                  "div",
                  { key: `${t}-${e.id}`, ref: t === w.length - 1 ? O : null },
                  ti.createElement(
                    oi,
                    ei({}, e, {
                      islogged: l,
                      mobile: n,
                      onLikeComment: m,
                      onDislikeComment: s,
                      onOptionCommentClick: o,
                      onClickCarouselImage: i,
                      vpp: g,
                    })
                  ),
                  n &&
                    t < w.length - 1 &&
                    ti.createElement("div", {
                      className: `${mi}__reviews-divider`,
                    })
                )
              ),
            !D && b && ti.createElement(di, b),
            a &&
              !I &&
              ti.createElement(
                "div",
                { className: `${mi}__no-reviews` },
                ti.createElement(
                  "h3",
                  { className: `${mi}__no-reviews__title` },
                  null == a ? void 0 : a.title
                ),
                ti.createElement(
                  "h3",
                  { className: `${mi}__no-reviews__subtitle` },
                  null == a ? void 0 : a.subtitle
                )
              )
          )
        );
      };
      var vi = _i,
        Ei = a.default;
      const pi = r,
        { Switch: fi } = b,
        gi = cl,
        { STYLE_NAMESPACE: Li } = Ke,
        hi = `${Li}-switch-filter`;
      var Ci,
        bi,
        Ni = (e) => {
          let {
            onFilter: t = () => {},
            value: l = !1,
            title: a,
            inline: n,
            track: r,
            official_store_id: i,
          } = e;
          const o = pi.createElement(
            gi,
            Ei({}, a, { class_name: `${hi}__label` })
          );
          return pi.createElement(
            "div",
            { className: `${hi}`, "data-testid": "switch-filter" },
            pi.createElement(fi, {
              className: `${hi}__switch`,
              label: o,
              labelPosition: "left",
              srLabel: a.text,
              checked: l,
              onChange: (e) => {
                t({ value: !!e.target.checked && i, inline: n, track: r });
              },
            })
          );
        },
        yi = a.default,
        $i = n.default;
      const wi = r,
        { useState: ki, useEffect: Si, useId: xi } = wi,
        { Button: Ai } = m,
        { BottomSheet: Mi } = p,
        { Title: Ii } = c,
        Ti = i,
        Di = Ni,
        Oi = ye,
        Ri = le,
        { STYLE_NAMESPACE: Fi } = Ke,
        Pi = `${Fi}-comments`;
      var Vi = (e) => {
          var t, l;
          let {
            button_text: a = null,
            clean_filters: n = null,
            internal_title: r = null,
            itemValueVpp: i = {},
            official_store_filter: o = null,
            onCleanFilters: s,
            onFilter: c = () => {},
            order_by: m = {},
            qualification: u = {},
            title: d = null,
            total_opinions: _ = null,
            vpp: v = !1,
            title_reviews: E,
            should_hide_button_all_reviews: p,
            inline_official_store_filter: f = null,
            go_close: g,
            objectId: L,
          } = e;
          const h = "all",
            C = o ? "510px" : "450px",
            [b, N] = ki(!1),
            [y, $] = ki({
              orderCriteria: i.orderCriteria || null,
              rating: i.rating || null,
              officialStore: i.officialStore || null,
            }),
            [w, k] = ki({
              orderCriteria: null,
              rating: null,
              officialStore: null,
            }),
            [S, x] = ki(),
            [A, M] = ki(L),
            I = xi(),
            T = xi();
          Si(() => {
            A !== L &&
              ($($i({}, i)),
              k({ orderCriteria: null, rating: null, officialStore: null }),
              M(L));
          }, [L, A, i]),
            Si(() => {
              (!1 !== S && null !== S) || null === y.officialStore
                ? x(y.officialStore)
                : x(!1);
            }, [S, y.officialStore]);
          const D = Object.values(y).filter((e) => e).length,
            O = () => {
              N(!b);
            },
            R = (e, t, l) => {
              $((l) => $i($i({}, l), {}, { [t]: e })),
                k((e) => $i($i({}, e), {}, { [t]: l }));
            },
            F = (e) => {
              let { value: t, inline: l, track: a } = e;
              const n = l ? null : h,
                r = Boolean(t);
              R(t || n, "officialStore", r ? a : null),
                l &&
                  (x(r),
                  c(
                    $i(
                      $i({}, y),
                      {},
                      {
                        rating: y.rating === h ? null : y.rating,
                        officialStore: t || null,
                      }
                    ),
                    $i($i({}, w), {}, { officialStore: r ? a : null })
                  ));
            };
          return wi.createElement(
            "div",
            {
              className: Ti(Pi, `${Pi}__filters`),
              "data-testid": "comments-component",
            },
            wi.createElement(
              Ii,
              {
                className: `${Pi}__title-comments`,
                color: "primary",
                component: "h2",
                size: "16px",
              },
              null == E ? void 0 : E.title
            ),
            wi.createElement(
              "div",
              {
                className: Ti(`${Pi}__filter-container`, {
                  [`${Pi}__filter-container--space`]: p,
                }),
              },
              !p &&
                wi.createElement(
                  Ai,
                  {
                    onClick: O,
                    "data-testid": "filter",
                    className: `${Pi}__filter`,
                    size: "medium",
                    srLabel: d,
                    role: "button",
                    hierarchy: "quiet",
                  },
                  Ci || (Ci = wi.createElement(Ri, null)),
                  d,
                  D > 0 &&
                    !v &&
                    wi.createElement(
                      "span",
                      { className: `${Pi}__spacing` },
                      " (",
                      D,
                      ")"
                    )
                )
            ),
            f &&
              wi.createElement(
                wi.Fragment,
                null,
                wi.createElement(
                  Di,
                  yi({}, f, { value: S, inline: !0, onFilter: F })
                ),
                wi.createElement("div", {
                  className: `${Pi}__divider ${Pi}__divider-visible mt-8`,
                })
              ),
            wi.createElement(
              Mi,
              {
                className: `${Pi}__bottomsheet`,
                open: b,
                initialHeight: C,
                srLabel: r,
                closeButtonSrLabel: null == g ? void 0 : g.accessibility_text,
              },
              wi.createElement(
                "div",
                { className: `${Pi}__title-container` },
                wi.createElement(
                  "h3",
                  { className: `${Pi}__buttomsheet-title` },
                  r
                ),
                D > 0 &&
                  wi.createElement(
                    Ai,
                    {
                      "data-testid": "close",
                      className: `${Pi}__restore-filters`,
                      size: "medium",
                      srLabel: null == g ? void 0 : g.accesibility_text,
                      role: "button",
                      hierarchy: "mute",
                      onClick: () => {
                        v || s(),
                          c(
                            $i(
                              $i({}, y),
                              {},
                              {
                                rating: null,
                                orderCriteria: null,
                                officialStore: null,
                              }
                            ),
                            w
                          ),
                          $((e) =>
                            $i(
                              $i({}, e),
                              {},
                              {
                                orderCriteria: null,
                                rating: null,
                                officialStore: null,
                              }
                            )
                          ),
                          k((e) =>
                            $i(
                              $i({}, e),
                              {},
                              {
                                orderCriteria: null,
                                rating: null,
                                officialStore: null,
                              }
                            )
                          ),
                          x(!1),
                          O();
                      },
                    },
                    n
                  )
              ),
              o &&
                wi.createElement(
                  wi.Fragment,
                  null,
                  wi.createElement(
                    Di,
                    yi({}, o, {
                      value: y.officialStore && y.officialStore !== h,
                      inline: !1,
                      onFilter: F,
                    })
                  ),
                  wi.createElement("div", { className: `${Pi}__divider mt-12` })
                ),
              wi.createElement(
                "div",
                { className: `${Pi}__content-container` },
                wi.createElement(
                  "span",
                  { id: I },
                  null == m ? void 0 : m.title
                ),
                wi.createElement(
                  "div",
                  {
                    className: `${Pi}__pill-container`,
                    role: "radiogroup",
                    "aria-labelledby": I,
                  },
                  null == m || null === (t = m.items) || void 0 === t
                    ? void 0
                    : t.map((e, t) => {
                        let { text: l, value: a, track: n } = e;
                        return wi.createElement(
                          "label",
                          {
                            className: Ti(`${Pi}__tag-filter`, {
                              [`${Pi}__tag-filter--active`]:
                                y.orderCriteria === a,
                            }),
                            key: `${Pi}__tag-filter-${t}`,
                            htmlFor: `${I}-${t}`,
                          },
                          wi.createElement("input", {
                            id: `${I}-${t}`,
                            type: "radio",
                            name: I,
                            "aria-checked": y.orderCriteria === a,
                            checked: y.orderCriteria === a,
                            onChange: () => R(a, "orderCriteria", n),
                            onKeyDown: (e) => {
                              ("Enter" !== e.key && " " !== e.key) ||
                                (e.preventDefault(), R(a, "orderCriteria", n));
                            },
                            className: "sr-only",
                          }),
                          l
                        );
                      })
                )
              ),
              wi.createElement("div", { className: `${Pi}__divider` }),
              wi.createElement(
                "div",
                { className: `${Pi}__content-container` },
                wi.createElement(
                  "span",
                  { id: T },
                  null == u ? void 0 : u.title
                ),
                wi.createElement(
                  "div",
                  {
                    className: `${Pi}__pill-container`,
                    role: "radiogroup",
                    "aria-labelledby": T,
                  },
                  null == u || null === (l = u.items) || void 0 === l
                    ? void 0
                    : l.map((e, t) => {
                        let { text: l, value: a, track: n } = e;
                        return wi.createElement(
                          "label",
                          {
                            className: Ti(`${Pi}__tag-filter`, {
                              [`${Pi}__tag-filter--active`]: y.rating === a,
                            }),
                            key: `${Pi}__tag-filter-${t}`,
                            htmlFor: `${T}-${t}`,
                          },
                          wi.createElement("input", {
                            id: `${T}-${t}`,
                            type: "radio",
                            name: T,
                            checked: y.rating === a,
                            "aria-checked": y.rating === a,
                            onChange: () => R(a, "rating", n),
                            onKeyDown: (e) => {
                              ("Enter" !== e.key && " " !== e.key) ||
                                (e.preventDefault(), R(a, "rating", n));
                            },
                            className: "sr-only",
                          }),
                          l,
                          a !== h && (bi || (bi = wi.createElement(Oi, null)))
                        );
                      })
                )
              ),
              wi.createElement(
                "div",
                { className: `${Pi}__apply-filters` },
                wi.createElement(
                  Ai,
                  {
                    "data-testid": "close",
                    className: `${Pi}__apply-filter-btn`,
                    size: "medium",
                    srLabel: a,
                    role: "button",
                    hierarchy: "loud",
                    onClick: () => {
                      c(
                        $i(
                          $i({}, y),
                          {},
                          {
                            rating: y.rating === h ? null : y.rating,
                            officialStore:
                              y.officialStore === h ? null : y.officialStore,
                          }
                        ),
                        w
                      ),
                        x(Boolean(y.officialStore) && y.officialStore !== h),
                        y.officialStore === h &&
                          ($((e) => $i($i({}, e), {}, { officialStore: null })),
                          k((e) => $i($i({}, e), {}, { officialStore: null }))),
                        O();
                    },
                    disabled: !D > 0,
                  },
                  a
                )
              )
            )
          );
        },
        Bi = a.default,
        Ui = n.default;
      const Yi = r,
        { useState: zi, useEffect: Hi } = Yi,
        { ProgressIndicatorCircular: ji } = u,
        Zi = i,
        Gi = Mt,
        Wi = gl,
        Ki = vi,
        { STYLE_NAMESPACE: qi, ARRAY_DEFAULT_VALUE: Xi } = Ke,
        Qi = Vi,
        Ji = `${qi}-filter`;
      var eo = (e) => {
        let {
          button_sheet_title: t,
          button_text: l = null,
          clean_filters: a = null,
          filterOptionsVpp: n = null,
          inline_official_store_filter: r = null,
          internal_title: i = null,
          islogged: o = !1,
          levels: s = [],
          message: c = null,
          mobile: m = !1,
          official_store_filter: u = null,
          onCleanFilters: d,
          onClickCarouselImage: _,
          onOptionCommentClick: v,
          onDislikeComment: E,
          onFilterClick: p,
          onLikeComment: f,
          order_by: g = null,
          qualification: L = null,
          reviews: h = Xi,
          title: C = null,
          total_opinions: b = null,
          vpp: N = !1,
          summary: y,
          onLikeSummary: $,
          onDislikeSummary: w,
          title_reviews: k,
          should_hide_button_all_reviews: S,
          total_comments: x,
          empty_messages: A,
          isKit: M = !1,
          go_close: I,
          objectId: T,
        } = e;
        const [D, O] = zi(h),
          [R, F] = zi(c),
          [P, V] = zi(15),
          [B, U] = zi(!1),
          [Y, z] = zi(b),
          [H, j] = zi({
            rating: (null == n ? void 0 : n.rating) || null,
            orderCriteria: (null == n ? void 0 : n.orderCriteria) || null,
            officialStore: (null == n ? void 0 : n.officialStore) || null,
          }),
          [Z, G] = zi(T);
        Hi(() => {
          O([...h]),
            z(b),
            T !== Z &&
              (G(T),
              j({ orderCriteria: null, rating: null, officialStore: null }),
              V(15));
        }, [h, T, Z, b]);
        const W = async (e, t) => {
            const l = await p(e, t);
            l && (O(l.reviews), F(l.message)), U(!1);
          },
          K = (e) => {
            if (!b) return;
            const t = b.match(/(\d+)/g);
            let l = "";
            if (e.rating && "all" !== e.rating) {
              const a = 5 - Number(e.rating);
              l =
                t && t.length > 0 && s.length > 0
                  ? b.replace(t[0], s[a].value)
                  : b;
            } else l = b;
            z(l);
          },
          q = async (e, t, l) => {
            const a = Ui(Ui({}, H), {}, { [t]: "all" === e ? null : e });
            N || (V(15), j(a), K(a)), W(a, l);
          };
        return Yi.createElement(
          "div",
          { className: Ji, "data-testid": "filter-component" },
          0 !== x &&
            Yi.createElement(
              Yi.Fragment,
              null,
              !m &&
                g &&
                L &&
                !S &&
                Yi.createElement(
                  "div",
                  { className: `${Ji}__desktop-filters` },
                  Yi.createElement(Gi, {
                    label: g.title,
                    items: g.items,
                    onFilter: q,
                    itemValueVpp: H.orderCriteria,
                    keyObject: "orderCriteria",
                    vpp: N,
                    objectId: Z,
                  }),
                  Yi.createElement(Gi, {
                    label: L.title,
                    items: L.items,
                    itemValueVpp: H.rating,
                    keyObject: "rating",
                    starts: !0,
                    onFilter: q,
                    vpp: N,
                    objectId: Z,
                  }),
                  u &&
                    Yi.createElement(
                      Wi,
                      Bi({}, u, {
                        itemValueVpp: !!H.officialStore,
                        keyObject: "officialStore",
                        onFilter: q,
                        vpp: N,
                      })
                    )
                ),
              m &&
                l &&
                Yi.createElement(Qi, {
                  qualification: L,
                  total_opinions: Y,
                  order_by: g,
                  official_store_filter: u,
                  title: C,
                  button_sheet_title: t,
                  onFilter: async (e, t) => {
                    N || (V(15), j(e), K(e)), W(e, t);
                  },
                  button_text: l,
                  internal_title: i,
                  clean_filters: a,
                  itemValueVpp: H,
                  vpp: N,
                  onCleanFilters: () => {
                    const e = d();
                    z(b), O(e);
                  },
                  title_reviews: k,
                  should_hide_button_all_reviews: S,
                  inline_official_store_filter: r,
                  go_close: I,
                  objectId: Z,
                })
            ),
          Yi.createElement(
            "div",
            {
              className: Zi(`${Ji}__comments`, {
                [`${Ji}__comments--mb-0`]: 0 === h.length,
              }),
            },
            !B &&
              Yi.createElement(Ki, {
                reviews: D,
                islogged: o,
                orderCriteria: H.orderCriteria,
                rating: H.rating,
                officialStore: H.officialStore,
                message: R,
                offset: P,
                mobile: m,
                OnOffset: () => {
                  V((e) => e + 15);
                },
                onScrollTab: p,
                onLikeComment: f,
                onDislikeComment: E,
                onOptionCommentClick: v,
                vpp: N,
                onClickCarouselImage: _,
                summary: y && y,
                onLikeSummary: y && $,
                onDislikeSummary: y && w,
                title_reviews: k,
                total_comments: x,
                empty_messages: A,
                total_opinions: Y,
                isKit: M,
              })
          ),
          B &&
            Yi.createElement(ji, {
              "data-testid": "spinner",
              modifier: "inline",
              className: `${Ji}__spinner-tab`,
              size: "small",
            })
        );
      };
      const to = r;
      var lo = to.memo((e) => {
        let { className: t, percentage: l = 0 } = e;
        return to.createElement(
          "div",
          { className: t, "data-testid": "progress-bar" },
          to.createElement("span", { className: `${t}__background` }),
          to.createElement("span", {
            className: `${t}__fill-background`,
            style: { width: `${l}%` },
          })
        );
      });
      const ao = r,
        { Typography: no } = c,
        ro = lo;
      var io = (e) => {
        let { categories: t = [], id: l, namespace: a = "" } = e;
        const n = "ease_of_assembly_quali" === l,
          r =
            "undefined" != typeof window &&
            /iPad|iPhone|iPod/.test(navigator.userAgent)
              ? `${a}__levels--ios`
              : "";
        return ao.createElement(
          "ul",
          {
            "aria-label": "Score Categories",
            className: `${a}__levels ${r}`.trim(),
          },
          t.map((e, t) => {
            let { name: l, value: r, percentage: i } = e;
            return ao.createElement(
              "li",
              { key: `${a}__level-${t}`, className: `${a}__progress-bar-list` },
              ao.createElement(
                "div",
                null,
                ao.createElement(
                  no,
                  { type: "body", size: "xs", color: "secondary" },
                  l
                )
              ),
              ao.createElement(
                "div",
                {
                  "aria-hidden": "true",
                  className: `${a}__progress-bar-container`,
                },
                ao.createElement(ro, {
                  className: `${a}__progress-bar`,
                  percentage: i,
                })
              ),
              ao.createElement(
                "div",
                { className: `${a}__value-container` },
                ao.createElement(
                  no,
                  { type: "body", size: "xs", color: "secondary" },
                  n ? `${i}%` : r
                )
              )
            );
          })
        );
      };
      const { useEffect: oo, useRef: so } = r,
        co = (e) => {
          var t, l;
          if (null == e || !e.current) return null;
          return (
            (null === (t = (l = e.current).closest) || void 0 === t
              ? void 0
              : t.call(l, ".andes-bottom-sheet")) || e.current.parentElement
          );
        };
      var mo = (e) => {
        const t = so(null);
        return (
          oo(() => {
            if (!e) return void ((l = co(t)) && (l.style.maxHeight = ""));
            var l;
            const a = setTimeout(() => {
              const e = co(t);
              if (!e) return;
              const l = e.clientHeight || 0;
              l > 0 &&
                ((e, t) => {
                  e && e.style.setProperty("max-height", `${t}px`, "important");
                })(e, l);
            }, 200);
            return () => clearTimeout(a);
          }, [e]),
          { contentRef: t }
        );
      };
      const uo = r,
        { useState: _o } = r,
        { BottomSheet: vo, BottomSheetHeader: Eo } = p,
        { Typography: po } = c,
        fo = io,
        go = R,
        Lo = mo;
      var ho = (e) => {
        let { id: t, title: l, histogram: a, namespace: n, text: r } = e;
        const [i, o] = _o(!1),
          { contentRef: s } = Lo(i);
        return uo.createElement(
          "div",
          { className: n, "data-testid": "fae-component" },
          uo.createElement(
            "button",
            {
              onClick: () => {
                o(!i);
              },
              "data-testid": "fae-button",
            },
            r,
            uo.createElement(go, { className: `${n}__chevron` })
          ),
          uo.createElement(
            vo,
            {
              open: i,
              initialHeight: "auto",
              hideDimmer: !1,
              srLabel: r,
              onClose: () => o(!1),
              header: uo.createElement(
                Eo,
                {
                  close: !0,
                  closeOutside: !1,
                  dragIndicator: !1,
                  ellipsis: !1,
                  align: "left",
                },
                uo.createElement(
                  "div",
                  { className: `${n}__bottom-sheet-header` },
                  l &&
                    uo.createElement(
                      po,
                      {
                        weight: "semibold",
                        size: "s",
                        type: "title",
                        color: "primary",
                        className: `${n}__tooltip-title-text`,
                      },
                      `${l}`
                    )
                )
              ),
            },
            uo.createElement(
              "div",
              { className: `${n}--mobile`, ref: s },
              uo.createElement(fo, {
                id: t,
                mobile: !0,
                namespace: n,
                categories: a,
              })
            )
          )
        );
      };
      const Co = r,
        { useState: bo } = r,
        { Tooltip: No } = o,
        { Typography: yo } = c,
        $o = i,
        wo = io,
        ko = R;
      var So = (e) => {
        let { id: t, title: l, histogram: a, namespace: n, text: r } = e;
        const [i, o] = bo(!1);
        return Co.createElement(
          "div",
          { className: n, "data-testid": "fae-component" },
          Co.createElement(
            No,
            {
              className: `${n}__andes-tooltip`,
              content: Co.createElement(
                "div",
                { className: `${n}__tooltip-content` },
                l &&
                  Co.createElement(
                    yo,
                    {
                      weight: "semibold",
                      size: "s",
                      type: "body",
                      color: "primary",
                      className: `${n}__tooltip-title-text`,
                    },
                    `${l}`
                  ),
                Co.createElement(wo, {
                  mobile: !1,
                  namespace: n,
                  id: t,
                  categories: a,
                })
              ),
              open: i,
              onClose: () => o(!1),
              side: "bottomLeft",
              trigger: "no-trigger",
              closable: !0,
              srLabel: l,
            },
            Co.createElement(
              "button",
              {
                onClick: () => {
                  o(!i);
                },
                "data-testid": "fae-button",
              },
              r,
              Co.createElement(ko, {
                className: $o(`${n}__chevron`, { active: i }),
              })
            )
          )
        );
      };
      const xo = r,
        Ao = ho,
        Mo = So,
        { STYLE_NAMESPACE: Io } = Ke,
        To = `${Io}-fae`;
      var Do = (e) => {
        let {
          id: t,
          title: l,
          histogram: a = [],
          mobile: n = !1,
          text: r = "",
        } = e;
        const i = { id: t, title: l, histogram: a, namespace: To, text: r };
        return n ? xo.createElement(Ao, i) : xo.createElement(Mo, i);
      };
      var Oo = {
        showActiveItem: (e) => {
          document
            .querySelector(`.ui-review-capability-box-selector__item-${e}`)
            .scrollIntoView({
              inline: "center",
              behavior: "smooth",
              block: "nearest",
            });
        },
      };
      const Ro = r,
        { useState: Fo, useEffect: Po } = r,
        Vo = i,
        { BoxSelector: Bo, BoxSelectorItem: Uo } = N,
        { CarouselFree: Yo, CarouselFreeSlide: zo } = h,
        { CarouselImage: Ho } = f,
        { showActiveItem: jo } = Oo,
        { STYLE_NAMESPACE: Zo } = Ke,
        Go = `${Zo}-box-selector`;
      var Wo = (e) => {
          let {
            pickers: t = [],
            isMobile: l = !1,
            currentItem: a = "",
            onChange: n = () => {},
            vpp: r = !1,
          } = e;
          const [i, o] = Fo(
            ((e, t) => {
              const l = e.findIndex((e) => e.object_id === t);
              return Math.max(l, 0);
            })(t, a)
          );
          Po(() => {
            l && jo(i);
          }, [i, l]);
          const s = l ? Yo : "div",
            c = l ? zo : "div";
          return Ro.createElement(
            s,
            {
              className: Vo(`${Go}`, l ? "mobile" : "desktop", r ? "vpp" : ""),
              "data-testid": "box-selector-component",
            },
            Ro.createElement(
              Bo,
              {
                name: Go,
                defaultValue: `${i}`,
                placement: l ? "horizontal" : "grid",
                onChange: (e) =>
                  ((e) => {
                    var l, a;
                    o(e);
                    const r =
                        null === (l = t[e]) || void 0 === l
                          ? void 0
                          : l.object_id,
                      i =
                        null === (a = t[e]) || void 0 === a ? void 0 : a.track;
                    r && n(r, i);
                  })(e.target.value),
              },
              t.map((e, t) => {
                var l, a;
                return Ro.createElement(
                  c,
                  {
                    key: e.object_id,
                    "data-testid": `box-selector__item-${t}`,
                  },
                  Ro.createElement(
                    Uo,
                    {
                      className: `${Go}__item-${t}`,
                      srLabel:
                        null == e || null === (l = e.title) || void 0 === l
                          ? void 0
                          : l.text,
                      value: `${t}`,
                    },
                    Ro.createElement(
                      "div",
                      { className: `${Go}__content` },
                      e.image &&
                        Ro.createElement(
                          "figure",
                          { className: `${Go}__content__image` },
                          Ro.createElement(Ho, {
                            alt: e.image.alt,
                            src: e.image.url,
                            lazyload: "off",
                          }),
                          Ro.createElement("div", {
                            className: `${Go}__content__image-overlay`,
                          })
                        ),
                      (null === (a = e.title) || void 0 === a
                        ? void 0
                        : a.text) &&
                        Ro.createElement(
                          "p",
                          { className: `${Go}__content__label` },
                          e.title.text
                        )
                    )
                  )
                );
              })
            )
          );
        },
        Ko = a.default;
      const qo = r,
        Xo = i,
        Qo = Wo,
        Jo = rt,
        { STYLE_NAMESPACE: es } = Ke,
        ts = es;
      var ls,
        as = (e) => {
          let {
            pickers: t = [],
            objectId: l = "",
            titleItem: a = {},
            isMobile: n = !1,
            vpp: r = !1,
            rating: i = {},
            total_opinions: o = "",
            onChangeBoxSelector: s = () => {},
          } = e;
          const c = `${ts}${n ? "__mobile" : ""}__header__kit`;
          return qo.createElement(
            "div",
            { className: Xo(`${c}`, { [`${c}--vpp`]: r }) },
            t &&
              t.length > 0 &&
              qo.createElement(
                "div",
                { className: `${c}__pickers` },
                qo.createElement(Qo, {
                  pickers: t,
                  currentItem: l,
                  onChange: s,
                  isMobile: n,
                  vpp: r,
                })
              ),
            a &&
              a.text &&
              qo.createElement(
                "p",
                {
                  className: Xo(`${c}__title_item`, {
                    [`${c}__title_item--vpp`]: r,
                  }),
                },
                a.text
              ),
            r &&
              i &&
              o &&
              qo.createElement(
                "div",
                { className: `${c}__rating_item` },
                qo.createElement(Jo, Ko({}, i, { mobile: n, inline: !0 })),
                qo.createElement(
                  "span",
                  { className: Xo("total-opinion", "item-kit") },
                  o
                )
              )
          );
        },
        ns = a.default,
        rs = n.default;
      const is = r,
        os = i,
        ss = rt,
        cs = mt,
        ms = Ct,
        us = eo,
        ds = T,
        _s = jn,
        vs = Do,
        Es = Gr,
        ps = as,
        { STYLE_NAMESPACE: fs, KIT_DEFAULT_VALUE: gs } = Ke,
        Ls = `${fs}__mobile`;
      var hs = (e) => {
        let {
          attributes: t = null,
          buy_button: l,
          carousel: a,
          embedded: n = !1,
          filter: r = null,
          filterOptionsVpp: i,
          inline_official_store_filter: o = null,
          islogged: s,
          message: c,
          onBuyClick: m,
          onCleanFilters: u,
          onClickCarouselImage: d,
          onOptionCommentClick: _,
          onDislikeComment: v,
          onFilter: E,
          onLikeComment: p,
          onLikeSummary: f,
          onDislikeSummary: g,
          onScrollTab: L,
          onSeeMoreClick: h,
          quali_attributes: C,
          rating: b = null,
          reviews: N,
          see_more: y = {},
          see_more: { should_hide_button_all_reviews: $ },
          title: w = null,
          total_opinions: k,
          summary: S,
          vpp: x = !1,
          title_reviews: A,
          webview: M = !1,
          reviews_with_comment: I,
          empty_messages: T,
          runCatchErrorBoundary: D = () => {},
          object_type: O = "",
          object_id: R = "",
          kits_information: F = null,
          title_item: P = null,
          rating_item: V = null,
          onChangeBoxSelector: B = () => {},
        } = e;
        try {
          var U, Y, z;
          const e =
              null == C
                ? void 0
                : C.find(
                    (e) => "fae" === e.id || "ease_of_assembly_quali" === e.id
                  ),
            D = a ? rs(rs({}, a), {}, { preload: !x, lazyload: x }) : a,
            H = I || N.length,
            j = O && O === gs,
            Z = null == F ? void 0 : F.pickers,
            G = (e) => {
              e.preventDefault(), window.history.back();
            },
            W = () => {
              h(y.url, y.track);
            };
          return is.createElement(
            "section",
            {
              className: os(Ls, { [`${Ls}--sheet`]: !x }),
              "data-testid": "reviews-mobile",
            },
            !n &&
              !M &&
              is.createElement(
                "div",
                {
                  "data-testid": "arrow-back",
                  className: `${Ls}__arrow`,
                  onClick: G,
                },
                ls || (ls = is.createElement(ds, null))
              ),
            is.createElement(
              "header",
              { className: `${Ls}__header` },
              !M &&
                is.createElement(
                  "h2",
                  { className: `${Ls}__header__title` },
                  null == w ? void 0 : w.text
                ),
              Z &&
                !x &&
                is.createElement(ps, {
                  pickers: Z,
                  objectId: R,
                  titleItem: P,
                  isMobile: !0,
                  vpp: x,
                  rating: V,
                  total_opinions: k,
                  onChangeBoxSelector: B,
                }),
              b &&
                is.createElement(
                  "div",
                  {
                    className: os(`${Ls}__header__score`, {
                      [`${Ls}__header__score--kit`]: j && x,
                    }),
                  },
                  is.createElement(ss, ns({}, b, { isKitLayout: j && x }))
                ),
              (!j || !x) &&
                is.createElement(
                  is.Fragment,
                  null,
                  x &&
                    l &&
                    is.createElement(cs, { buy_button: l, onBuyClick: m }),
                  e &&
                    (null == e || null === (U = e.histogram) || void 0 === U
                      ? void 0
                      : U.length) > 0 &&
                    is.createElement(vs, ns({}, e, { mobile: !0 })),
                  t &&
                    (null === (Y = t.items) || void 0 === Y
                      ? void 0
                      : Y.length) > 0 &&
                    0 !== H &&
                    is.createElement(
                      ms,
                      ns({}, t, {
                        vpp: x,
                        onSeeMoreClick: W,
                        total_comments: H,
                      })
                    )
                )
            ),
            Z &&
              x &&
              is.createElement(ps, {
                pickers: Z,
                objectId: R,
                titleItem: P,
                isMobile: !0,
                vpp: x,
                rating: V,
                total_opinions: k,
                onChangeBoxSelector: B,
              }),
            N &&
              a &&
              is.createElement(
                "div",
                { className: `${Ls}__reviews-carousel` },
                (!j || !x) &&
                  (null === (z = a.title) || void 0 === z ? void 0 : z.text) &&
                  is.createElement(
                    "h3",
                    { className: `${Ls}__reviews-carousel__title` },
                    a.title.text
                  ),
                is.createElement(_s, ns({}, D, { onClickImage: d }))
              ),
            N &&
              S &&
              "SUMMARY" !== S.components[0].id &&
              is.createElement(
                Es,
                ns({ onLikeSummary: f, onDislikeSummary: g, islogged: s }, S)
              ),
            is.createElement(
              "div",
              {
                className: os(`${Ls}__comments`, {
                  [`${Ls}__comments--mt-0`]: 0 === N.length,
                }),
              },
              N &&
                is.createElement(
                  us,
                  ns({}, r, {
                    total_opinions: k,
                    levels: null == b ? void 0 : b.levels,
                    onFilterClick: E,
                    reviews: N,
                    onScrollTab: L,
                    onLikeComment: p,
                    onDislikeComment: v,
                    onOptionCommentClick: _,
                    islogged: s,
                    mobile: !0,
                    vpp: x,
                    filterOptionsVpp: i,
                    onClickCarouselImage: d,
                    message: c,
                    onCleanFilters: u,
                    summary: S && "SUMMARY" === S.components[0].id ? S : null,
                    onLikeSummary:
                      S && "SUMMARY" === S.components[0].id ? f : null,
                    onDislikeSummary:
                      S && "SUMMARY" === S.components[0].id ? g : null,
                    title_reviews: A,
                    should_hide_button_all_reviews: $,
                    total_comments: H,
                    empty_messages: T,
                    inline_official_store_filter: o,
                    objectId: R,
                  })
                ),
              y &&
                x &&
                is.createElement(
                  "div",
                  null,
                  !$ &&
                    is.createElement(
                      "button",
                      {
                        size: "medium",
                        "aria-label": y.accessibility_text,
                        role: "button",
                        hierarchy: "mute",
                        className: "show-more-click",
                        onClick: W,
                      },
                      y.text
                    )
                )
            )
          );
        } catch (e) {
          return D(e);
        }
      };
      const Cs = hs;
      var bs = (x.ReviewsMobileCapability = Cs);
      t.ReviewsMobileCapability = bs;
    },
  },
]);
//# sourceMappingURL=lib-13cb17d5.a38207ee.js.map
