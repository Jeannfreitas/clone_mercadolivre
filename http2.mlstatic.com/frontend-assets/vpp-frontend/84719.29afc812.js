/*! For license information please see 84719.29afc812.js.LICENSE.txt */
"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [84719],
  {
    84719(e, t, n) {
      n.d(t, { iW: () => ot, G: () => tt, j5: () => it });
      var i = n(58168),
        s = n(80045),
        o = n(96540),
        r = n(46942),
        a = n.n(r),
        l = n(69247),
        d = n(89379),
        c = n(42575),
        u = n(28498),
        p = n(75601);
      var h = n(57521),
        f = n(64467),
        m = n(17376);
      const v = (0, o.createContext)({});
      var g = {
          "andes-headless-carousel-snappedAnterior": [null, "Previous"],
          "andes-headless-carousel-snappedSiguiente": [null, "Next"],
          "andes-headless-carousel-snappedPágina {0}": [null, "Page {0}"],
        },
        w = {
          "andes-headless-carousel-snappedAnterior": [null, "Anterior"],
          "andes-headless-carousel-snappedSiguiente": [null, "Siguiente"],
          "andes-headless-carousel-snappedPágina {0}": [null, "Página {0}"],
        },
        C = {
          "andes-headless-carousel-snappedAnterior": [null, "Anterior"],
          "andes-headless-carousel-snappedSiguiente": [null, "Seguinte"],
          "andes-headless-carousel-snappedPágina {0}": [null, "Página {0}"],
        };
      const y = "andes-headless-carousel-snapped",
        x = `${y}__pagination`,
        b = (e, t, n, i, s) => {
          let o = "translateY(0)";
          return (
            "top" === e || "bottom" === e
              ? (o = "translateX(-50%)")
              : ("left" !== e && "right" !== e) || (o = "translateY(-50%)"),
            t && (o += ` translateX(${t}px)`),
            n && (o += ` translateY(${n}px)`),
            "full" === s && "next" === i && (o += " rotate(180deg)"),
            o.trim()
          );
        };
      function S(e, t, n) {
        return (
          e(
            (n = {
              path: t,
              exports: {},
              require: function (e, t) {
                return (function () {
                  throw new Error(
                    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                  );
                })(null == t && n.path);
              },
            }),
            n.exports
          ),
          n.exports
        );
      }
      var E = Symbol.for("react.transitional.element");
      function A(e, t, n) {
        var i = null;
        if (
          (void 0 !== n && (i = "" + n),
          void 0 !== t.key && (i = "" + t.key),
          "key" in t)
        )
          for (var s in ((n = {}), t)) "key" !== s && (n[s] = t[s]);
        else n = t;
        return (
          (t = n.ref),
          {
            $$typeof: E,
            type: e,
            key: i,
            ref: void 0 !== t ? t : null,
            props: n,
          }
        );
      }
      var P = { Fragment: Symbol.for("react.fragment"), jsx: A, jsxs: A },
        L =
          (S(function (e, t) {}),
          S(function (e) {
            e.exports = P;
          }));
      const $ = { previous: "Anterior", next: "Siguiente" },
        M = {
          small: {
            previous: (e) => {
              let {
                color:
                  t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
                i18n: n,
                srLabel: i,
              } = e;
              return o.createElement(
                "svg",
                {
                  "aria-hidden": i ? void 0 : !i,
                  "aria-label": i || void 0,
                  role: i ? "img" : void 0,
                  color: t,
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor",
                },
                i && o.createElement("title", null, i),
                o.createElement("path", {
                  d: "M9.20126 3.55188L10.0498 4.40041L6.4534 7.9968L10.0535 11.5969L9.20501 12.4455L4.75635 7.9968L9.20126 3.55188Z",
                  fill: "currentColor",
                })
              );
            },
            next: p.A,
          },
          large: { previous: u.A, next: c.A },
        },
        z = { previous: h.A, next: h.A },
        I = (e) => {
          let { className: t, children: n, onClick: i, ref: s, type: r } = e;
          const { carouselType: a, controls: d } = (0, o.useContext)(v),
            { i18n: c } = (0, l.AH)("@andes-headless/carousel-snapped", {
              en: g,
              "es-AR": w,
              "pt-BR": C,
            }),
            {
              disabled: u,
              position: p,
              offsetX: h,
              offsetY: f,
              size: m,
              visibility: x,
              onClick: S,
            } = d[r],
            E = "full" === a ? z[r] : M[m][r];
          return L.jsx("button", {
            className: t,
            name: "andes-carousel-snapped_control",
            "data-andes-carousel-snapped-control": r,
            "data-andes-position": p,
            "data-andes-state": u ? (x ? "visible disabled" : "disabled") : "",
            ref: s,
            type: "button",
            style: p && { transform: b(p, h, f, r, a) },
            "aria-label": c.pgettext(y, $[r]),
            disabled: u,
            onClick: (e) => {
              "function" == typeof S && S(e), "function" == typeof i && i(e);
            },
            children: n || L.jsx(E, {}),
          });
        };
      function N(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                (0, f.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      I.displayName = "CarouselSnappedControl";
      const k = (e) => {
        let {
          andesDataAttributes: t = {},
          children: n,
          className: i,
          onClick: s,
          ref: r,
        } = e;
        const {
            pagination: {
              pagesAmount: a,
              currentPage: d,
              position: c,
              offsetX: u,
              offsetY: p,
            },
          } = (0, o.useContext)(v),
          { i18n: h } = (0, l.AH)("@andes-headless/carousel-snapped", {
            en: g,
            "es-AR": w,
            "pt-BR": C,
          }),
          f = O(
            O(
              {
                "data-andes-carousel-snapped-pagination": !!c || void 0,
                "data-andes-position": c || void 0,
              },
              t
            ),
            {},
            { ref: r, style: c && { transform: b(c, u, p) } }
          ),
          S = i || x;
        return n
          ? L.jsx("div", { className: S, ref: r, children: n })
          : L.jsx(
              "ul",
              O(
                O({ className: i, "aria-hidden": !0 }, f),
                {},
                {
                  children: (() => {
                    const e = [];
                    for (let t = 0; t < a; t += 1) {
                      const n = t === d;
                      e.push(
                        L.jsx(
                          "li",
                          {
                            "data-andes-carousel-snapped-pagination-item": !0,
                            "data-andes-carousel-snapped-pagination-item-active":
                              n,
                            children: L.jsx("button", {
                              "data-andes-carousel-snapped-pagination-action":
                                !0,
                              onClick: s ? () => s(t) : void 0,
                              tabIndex: s ? void 0 : -1,
                              type: "button",
                              children: L.jsx(m.s, {
                                children: h.pgettext(y, "Página {0}", t + 1),
                              }),
                            }),
                          },
                          `${i}-item-${t}`
                        )
                      );
                    }
                    return e;
                  })(),
                }
              )
            );
      };
      k.displayName = "CarouselSnappedPagination";
      var _ = n(95990),
        T = n(88460),
        R = n(38083),
        j = n(54812),
        V = n(40961);
      function D(e, t) {
        void 0 === t && (t = []),
          Array.isArray(t) || (t = [t]),
          t.forEach((t) => !e.classList.contains(t) && e.classList.add(t));
      }
      function H(e, t, n, i) {
        e.addEventListener(t, n, i);
      }
      function B(e, t, n) {
        e.removeEventListener(t, n);
      }
      function q(e, t, n) {
        return void 0 === n && (n = ""), e.setAttribute(t, n), e;
      }
      function W(e, t, n) {
        return (
          Object.keys(t).forEach((n) => {
            e.style[n] = t[n];
          }),
          n && getComputedStyle(e),
          e
        );
      }
      const F = {
        direction: "horizontal",
        touchRatio: 1,
        touchAngle: 45,
        longSwipesRatio: 0.5,
        initialSlide: 0,
        loop: !1,
        freeMode: !1,
        passiveListeners: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        speed: 300,
        longSwipesMs: 300,
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: !1,
        slidePrevClass: "swiper-slide-prev",
        slideNextClass: "swiper-slide-next",
        slideActiveClass: "swiper-slide-active",
        slideClass: "swiper-slide",
        wrapperClass: "swiper-wrapper",
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchMoveStopPropagation: !1,
        excludeElements: [],
        injections: {
          translate: function (e, t, n, i) {
            const { $wrapper: s } = t.element,
              o = {
                transition: e.isStart ? "none" : `transform ease ${i}ms`,
                transform: n.isHorizontal
                  ? `translate3d(${e.transforms}px, 0, 0)`
                  : `translate3d(0, ${e.transforms}px, 0)`,
              };
            [...t.element.$list].reduce(
              (e, t) => e + t.clientWidth + n.spaceBetween,
              0
            ) >= t.element.$el.offsetWidth && W(s, o);
          },
        },
      };
      const X = "before-init",
        Y = "after-init",
        U = "before-slide",
        Z = "scroll",
        K = "after-slide",
        G = "before-destroy",
        J = "after-destroy";
      const Q = 180 / Math.PI;
      function ee() {
        let e = [];
        return {
          getDuration: function () {
            const t = e[0],
              n = e[e.length - 1];
            return t ? n.time - t.time : 0;
          },
          getOffset: function () {
            const t = e[0],
              n = e[e.length - 1];
            return t ? { x: n.x - t.x, y: n.y - t.y } : { x: 0, y: 0 };
          },
          getLogs: function () {
            return e;
          },
          vector: function () {
            return (function (e, t) {
              const n = e[t],
                i = e[t - 1] || n,
                s = { x: n.x - i.x, y: n.y - i.y },
                o = n.time - i.time,
                r = s.x / o || 0,
                a = s.y / o || 0,
                l = Math.atan2(Math.abs(s.y), Math.abs(s.x)) * Q;
              return (0, d.A)(
                (0, d.A)({}, s),
                {},
                { angle: l, velocityX: r, velocityY: a }
              );
            })(e, e.length - 1);
          },
          clear: function () {
            e = [];
          },
          push: function (t) {
            e.push((0, d.A)({ time: Date.now() }, t));
          },
        };
      }
      function te() {
        return performance ? performance.now() : Date.now();
      }
      function ne() {
        const e = (function () {
          const e =
              requestAnimationFrame ||
              webkitRequestAnimationFrame ||
              setTimeout,
            t =
              cancelAnimationFrame ||
              webkitCancelAnimationFrame ||
              clearTimeout;
          let n, i;
          return {
            run: function (t) {
              (n = void 0 === n ? te() : n),
                (i = e(() => {
                  const e = te(),
                    i = e - n;
                  (n = e), t(i);
                }));
            },
            stop: function () {
              (n = void 0), t(i);
            },
          };
        })();
        return {
          run: function t(n) {
            e.run((e) => {
              t(n), n(e);
            });
          },
          stop: function () {
            e.stop();
          },
        };
      }
      function ie(e, t) {
        const { tracker: n } = e,
          { initStatus: i } = t;
        n.clear(), i();
      }
      function se(e, t, n, i) {
        const { touchable: s } = e,
          o = ["INPUT", "SELECT", "OPTION", "TEXTAREA", "BUTTON", "VIDEO"],
          r = (function (e, t, n, i) {
            const { initLayout: s } = i,
              { initStatus: o } = i,
              { render: r } = i,
              { scrollPixel: a } = i,
              { slideTo: l } = i,
              { getOffsetSteps: d } = i,
              c = ne();
            return {
              preheat: function (e, t) {
                const { tracker: i } = n;
                c.stop(),
                  i.clear(),
                  i.push(e),
                  s(t),
                  o(t),
                  (n.isStart = !0),
                  r();
              },
              move: function (t) {
                const { tracker: i } = n,
                  { touchRatio: s } = e,
                  { touchAngle: o } = e,
                  { isHorizontal: l } = e;
                if (!n.isStart || n.isScrolling) return;
                i.push(t);
                const d = i.vector(),
                  c = i.getOffset();
                if (c.x || c.y)
                  if (
                    (l && d.angle < o) ||
                    (!l && 90 - d.angle < o) ||
                    n.isTouching
                  ) {
                    const e = d[l ? "x" : "y"] * s;
                    (n.isTouching = !0), a(e), r();
                  } else (n.isScrolling = !0), i.clear();
              },
              stop: function () {
                const { index: s } = n,
                  { tracker: o } = n,
                  { measure: u } = t;
                if (n.isStart)
                  if (((n.isStart = !1), e.freeMode)) {
                    let t =
                      o.vector()[e.isHorizontal ? "velocityX" : "velocityY"];
                    c.run((e) => {
                      const s = t * e;
                      (t *= 0.98),
                        Math.abs(s) < 0.01
                          ? (c.stop(), ie(n, i))
                          : (a(s), r(0));
                    });
                  } else {
                    const t = o.getDuration(),
                      r = o.getOffset()[e.isHorizontal ? "x" : "y"],
                      a = Math.ceil(Math.abs(r) / u.boxSize),
                      c = d(r);
                    t > e.longSwipesMs
                      ? l(s + c * (r > 0 ? -1 : 1))
                      : l(r > 0 ? s - a : s + a),
                      ie(n, i);
                  }
              },
            };
          })(n, e, t, i),
          { preheat: a } = r,
          { move: l } = r,
          { stop: d } = r;
        function c(e) {
          const t = s ? e.changedTouches[0] : e;
          return { x: t.pageX, y: t.pageY };
        }
        function u(t) {
          for (let e = 0; e < n.excludeElements.length; e++)
            if (n.excludeElements[e].contains(t.target)) return;
          const { $wrapper: i } = e.element,
            r =
              (n.touchStartPreventDefault &&
                -1 === o.indexOf(t.target.nodeName)) ||
              n.touchStartForcePreventDefault;
          !s && r && t.preventDefault(),
            a(
              c(t),
              (function (e, t) {
                const n = getComputedStyle(e)
                  .transform.replace(/[a-z]|\(|\)|\s/g, "")
                  .split(",")
                  .map(parseFloat);
                let i = [];
                return (
                  16 === n.length
                    ? (i = n.slice(12, 14))
                    : 6 === n.length && (i = n.slice(4, 6)),
                  i[t ? 0 : 1] || 0
                );
              })(i, n.isHorizontal)
            );
        }
        function p(e) {
          n.touchMoveStopPropagation && e.stopPropagation(),
            l(c(e)),
            t.isTouching && !1 !== e.cancelable && e.preventDefault();
        }
        function h() {
          d();
        }
        return {
          attach: function () {
            const { $el: t } = e.element;
            s
              ? (H(t, "touchstart", u, {
                  passive: n.passiveListeners,
                  capture: !1,
                }),
                H(t, "touchmove", p),
                H(t, "touchend", h),
                H(t, "touchcancel", h))
              : (H(t, "mousedown", u),
                "undefined" != typeof document &&
                  (H(document, "mousemove", p), H(document, "mouseup", h)));
          },
          detach: function () {
            const { $el: t } = e.element;
            B(t, "touchstart", u),
              B(t, "touchmove", p),
              B(t, "touchend", h),
              B(t, "touchcancel", h),
              B(t, "mousedown", u),
              "undefined" != typeof document &&
                (B(document, "mousemove", p), B(document, "mouseup", h));
          },
        };
      }
      function oe(e, t, n) {
        const { $list: i } = e,
          { viewSize: s } = t,
          { slideSize: o } = t,
          { boxSize: r } = t,
          a = (function (e) {
            return e.loop ? Math.ceil(e.slidesPerView) : 0;
          })(n),
          l = a * r,
          d = -l + (n.centeredSlides ? (s - o) / 2 : 0);
        return {
          max: d,
          min: n.spaceBetween + (n.loop ? o : s) + d - r * i.length,
          base: d,
          expand: a,
          buffer: l,
          minIndex: 0,
          maxIndex:
            i.length -
            (n.centeredSlides || n.loop ? 1 : Math.floor(n.slidesPerView)),
        };
      }
      function re(e, t) {
        const n = {};
        function i(e) {
          const i = (function (e, t) {
              const { $el: n } = t,
                i = e.isHorizontal ? n.offsetWidth : n.offsetHeight,
                s =
                  (i - Math.ceil(e.slidesPerView - 1) * e.spaceBetween) /
                  e.slidesPerView;
              return { boxSize: s + e.spaceBetween, viewSize: i, slideSize: s };
            })(t, e),
            s = oe(e, i, t),
            o =
              "undefined" != typeof document &&
              "undefined" != typeof window &&
              Boolean(
                "ontouchstart" in window ||
                  navigator.maxTouchPoints > 0 ||
                  navigator.msMaxTouchPoints > 0 ||
                  (window.DocumentTouch && document instanceof DocumentTouch)
              );
          Object.assign(n, {
            touchable: o,
            element: e,
            measure: i,
            limitation: s,
          });
        }
        return (n.update = i), i(e), n;
      }
      const ae = "data-shallow-slider",
        le = "data-slider";
      function de(e, t) {
        function n(n) {
          const { $wrapper: i } = e.element,
            { index: s } = n;
          [].slice.call(i.querySelectorAll(`[${le}]`)).forEach((e) => {
            const n = ~~e.getAttribute(le);
            var i, o;
            (i = e),
              void 0 ===
                (o = [
                  t.slidePrevClass,
                  t.slideNextClass,
                  t.slideActiveClass,
                ]) && (o = []),
              Array.isArray(o) || (o = [o]),
              o.forEach(
                (e) => i.classList.contains(e) && i.classList.remove(e)
              ),
              n === s && D(e, t.slideActiveClass),
              n === s - 1 && D(e, t.slidePrevClass),
              n === s + 1 && D(e, t.slideNextClass);
          });
        }
        function i() {
          [].slice
            .call(e.element.$wrapper.querySelectorAll(`[${ae}]`))
            .forEach((t) => e.element.$wrapper.removeChild(t));
        }
        function s() {
          e.element.$list.forEach((e, t) => q(e, le, t)),
            i(),
            (function () {
              if (!t.loop) return;
              const { element: n } = e,
                { limitation: i } = e,
                { $list: s } = n,
                { $wrapper: o } = n,
                { expand: r } = i,
                a = s.slice(-r).map((e) => e.cloneNode(!0)),
                l = s.slice(0, r).map((e) => e.cloneNode(!0));
              a.forEach((e, t) => {
                o.appendChild(q(l[t], ae)), o.insertBefore(q(a[t], ae), s[0]);
              });
            })();
        }
        function o() {
          let n;
          const { element: i } = e,
            { measure: s } = e,
            { $wrapper: o } = i,
            r = {
              display: "flex",
              willChange: "transform",
              flexDirection: t.isHorizontal ? "row" : "column",
            },
            a =
              ((n = {}),
              (n[t.isHorizontal ? "width" : "height"] = `${s.slideSize}px`),
              (n[
                t.isHorizontal ? "margin-right" : "margin-bottom"
              ] = `${t.spaceBetween}px`),
              n);
          W(o, r),
            [].slice
              .call(o.querySelectorAll(`[${le}]`))
              .forEach((e) => W(e, a));
        }
        return {
          init: function () {
            s(), o();
          },
          render: function (i, s, o, r) {
            const { $wrapper: a } = e.element,
              l = void 0 === s ? t.speed : s;
            t.injections.translate(i, e, t, l),
              i.isStart || n(i),
              r && getComputedStyle(a).transform,
              o && setTimeout(o, l);
          },
          destroy: function () {
            const n = e.element,
              { $list: s } = n,
              { $wrapper: o } = n,
              r = t.isHorizontal ? "margin-right" : "margin-bottom";
            ["display", "will-change", "flex-direction"].forEach((e) => {
              o.style.removeProperty(e);
            }),
              s.forEach((e) => e.style.removeProperty(r)),
              i();
          },
          updateSize: o,
        };
      }
      function ce(e, t) {
        const n = e - t.max,
          i = e - t.min;
        return n > 0 ? n : i < 0 ? i : 0;
      }
      function ue(e, t, n, i, s) {
        function o(t) {
          const { measure: i } = e;
          return Math.ceil(Math.abs(t) / i.boxSize - n.longSwipesRatio);
        }
        function r(e, n, s) {
          i.render(t, e, n, s);
        }
        function a(i) {
          const o = e.limitation,
            { min: r } = o,
            { max: a } = o,
            l = a - r + (n.loop ? e.measure.boxSize : 0),
            c = l + 1;
          let u;
          (t.transforms = i),
            n.loop
              ? ((u = ((a - i) % c) / l),
                (t.progress = u < 0 ? 1 + u : u > 1 ? u - 1 : u))
              : ((u = (a - i) / l), (t.progress = u < 0 ? 0 : u > 1 ? 1 : u)),
            s.emit(Z, (0, d.A)({}, t));
        }
        function l(i, l) {
          const { measure: d } = e,
            { limitation: c } = e,
            u = c.maxIndex - c.minIndex + 1,
            p = n.loop
              ? ((i % u) + u) % u
              : i > c.maxIndex
              ? c.maxIndex
              : i < c.minIndex
              ? c.minIndex
              : i,
            h =
              null != n && n.loop
                ? i > c.maxIndex
                  ? c.max
                  : -p * d.boxSize + c.base
                : i >= c.maxIndex
                ? c.min
                : -p * d.boxSize + c.base,
            f = t.index !== p;
          if (0 !== o(h - t.transforms) && n.loop) {
            const e = ce(t.transforms, c),
              n = p - t.index,
              i = (function (e, t, n, i) {
                const { maxIndex: s } = n,
                  { minIndex: o } = n,
                  r = (i > 0 ? 1 : -1) * (o - s - 1) + t - e;
                return Math.abs(i) > Math.abs(r) ? r : i;
              })(t.index, p, c, n);
            i === n || e
              ? t.index === p &&
                a(e > 0 ? c.min - d.boxSize + e : c.max + d.boxSize + e)
              : a(i < 0 ? c.min - d.boxSize : c.max + d.boxSize),
              r(0, void 0, !0);
          }
          f && s.emit(U, t.index, t, p),
            (t.index = p),
            a(h),
            r(l, () => {
              f && s.emit(K, p, t, t.index);
            });
        }
        return {
          update: function () {
            l(t.index, 0), i.updateSize();
          },
          render: r,
          transform: a,
          slideTo: l,
          scrollPixel: function (i) {
            const { transforms: s } = t,
              { measure: o } = e,
              { limitation: r } = e,
              l = Number(i.toExponential().split("e")[1]),
              d = l <= 0 ? Math.pow(10, -(l - 1)) : 1;
            let c = s;
            if (
              (n.resistance &&
                !n.loop &&
                (i > 0 && s >= r.max
                  ? (i -= Math.pow(i * d, n.resistanceRatio) / d)
                  : i < 0 &&
                    s <= r.min &&
                    (i += Math.pow(-i * d, n.resistanceRatio) / d)),
              (c += i),
              n.loop)
            ) {
              const e = t.tracker.vector(),
                i = n.isHorizontal ? e.velocityX : e.velocityY,
                a = ce(s, r);
              a &&
                (function (e, t, n) {
                  return (e > 0 && t > n.max) || (e < 0 && t < n.min);
                })(i, s, r) &&
                (c = a > 0 ? r.min - o.boxSize + a : r.max + o.boxSize + a);
            }
            a(c);
          },
          initStatus: function (e) {
            void 0 === e && (e = 0),
              (t.startTransform = e),
              (t.isStart = !1),
              (t.isScrolling = !1),
              (t.isTouching = !1);
          },
          initLayout: function (e) {
            a(e);
          },
          getOffsetSteps: o,
        };
      }
      function pe(e, t) {
        const n =
            "string" == typeof e && "undefined" != typeof document
              ? document.body.querySelector(e)
              : e,
          i = n.querySelector(`.${t.wrapperClass}`);
        let s = [].slice.call(n.getElementsByClassName(t.slideClass));
        return (
          (s = s.filter((e) => null === e.getAttribute("data-shallow-slider"))),
          { $el: n, $wrapper: i, $list: s }
        );
      }
      const he = function e(t, n) {
        const i = (function (e) {
            const t = (0, d.A)((0, d.A)({}, F), e);
            return (0, d.A)(
              (0, d.A)({}, t),
              {},
              { isHorizontal: "horizontal" === t.direction }
            );
          })(n),
          s = (function () {
            let e = {};
            return {
              on: function (t, n) {
                e[t] ? e[t].push(n) : (e[t] = [n]);
              },
              off: function (t, n) {
                if (e[t]) {
                  const i = e[t].indexOf(n);
                  i > -1 && e[t].splice(i, 1);
                }
              },
              emit: function (t) {
                for (
                  var n = arguments.length,
                    i = new Array(n > 1 ? n - 1 : 0),
                    s = 1;
                  s < n;
                  s++
                )
                  i[s - 1] = arguments[s];
                e[t] && e[t].forEach((e) => e(...i));
              },
              clear: function () {
                e = {};
              },
            };
          })(),
          o = re(pe(t, i), i),
          r = {
            tracker: ee(),
            index: 0,
            startTransform: 0,
            isStart: !1,
            isScrolling: !1,
            isTouching: !1,
            transforms: 0,
            progress: 0,
          },
          { on: a } = s,
          { off: l } = s,
          { emit: c } = s,
          u = { on: a, off: l, env: o, state: r, options: i };
        (i.plugins || e.plugins || []).forEach((e) => e(u, i)), c(X, u);
        const p = de(o, i),
          h = ue(o, r, i, p, s),
          f = se(o, r, i, h);
        const { slideTo: m } = h;
        return (
          Object.assign(u, {
            update: function () {
              p.destroy(), o.update(pe(t, i)), p.init(), h.update();
            },
            destroy: function () {
              c(G, u), f.detach(), p.destroy(), c(J, u), s.clear();
            },
            slideTo: m,
            updateSize: function () {
              o.update(pe(t, i)), h.update();
            },
          }),
          p.init(),
          f.attach(),
          m(i.initialSlide, 0, !1),
          c(Y, u),
          u
        );
      };
      he.use = (e) => {
        he.plugins = e;
      };
      var fe = he;
      const me = (e, t, n, i) => {
          e.addEventListener(t, n, i);
        },
        ve = (e, t, n) => {
          e.removeEventListener(t, n);
        };
      var ge = function (e, t) {
        const n = Boolean(t.navigation),
          i = {},
          s = (0, d.A)(
            { disabledClass: "swiper-button-disabled" },
            t.navigation
          ),
          o = function (t, n) {
            if (
              (function (e) {
                return e.classList.contains(s.disabledClass);
              })(t) &&
              !e.options.loop
            )
              return;
            const { index: i } = e.state;
            "next" === n && e.slideTo(i + 1), "prev" === n && e.slideTo(i - 1);
          },
          r = (e) => {
            o(e.target, "next");
          },
          a = (e) => {
            o(e.target, "prev");
          };
        e.on("before-slide", (t, n, o) => {
          e.options.loop ||
            (function (t) {
              const n = e.env.limitation,
                { minIndex: o } = n,
                { maxIndex: r } = n;
              i &&
                i.prevEl &&
                i.nextEl &&
                (i.nextEl.classList.contains(s.disabledClass) &&
                  t >= o &&
                  i.nextEl.classList.remove(s.disabledClass),
                i.prevEl.classList.contains(s.disabledClass) &&
                  t <= r &&
                  i.prevEl.classList.remove(s.disabledClass),
                t === o && i.prevEl.classList.add(s.disabledClass),
                t === r && i.nextEl.classList.add(s.disabledClass));
            })(o);
        }),
          e.on("after-init", () => {
            var t;
            const o =
              null === (t = e.env.element.$wrapper.parentElement) ||
              void 0 === t
                ? void 0
                : t.parentElement;
            n &&
              ((i.nextEl =
                "string" == typeof s.nextEl
                  ? o.querySelector(s.nextEl)
                  : s.nextEl),
              (i.prevEl =
                "string" == typeof s.prevEl
                  ? o.querySelector(s.prevEl)
                  : s.prevEl),
              e.options.loop ||
                (function () {
                  const { index: t } = e.state,
                    { $list: n } = e.env.element,
                    { minIndex: o } = e.env.limitation;
                  t === o &&
                    i.prevEl &&
                    i.prevEl.classList.add(s.disabledClass),
                    n.length === o &&
                      i.nextEl &&
                      i.nextEl.classList.add(s.disabledClass);
                })(),
              i.nextEl && me(i.nextEl, "click", r, void 0),
              i.prevEl && me(i.prevEl, "click", a, void 0));
          }),
          e.on("after-destroy", () => {
            i &&
              i.prevEl &&
              i.nextEl &&
              (ve(i.nextEl, "click", r),
              ve(i.prevEl, "click", a),
              delete i.nextEl,
              delete i.prevEl);
          });
      };
      const we = "andes-carousel-snapped",
        Ce = `${we}__control`,
        ye = `${we}__slide`,
        xe = `${we}__pagination`,
        be = `${we}__wrapper`,
        Se = `${ye}--previous`,
        Ee = `${ye}--next`,
        Ae = `${ye}--active`;
      var Pe = (function () {
        const e = (e) => {
          let { type: t, onClick: n } = e;
          const { controls: i } = (0, o.useContext)(v),
            { disabled: s, size: r } = i[t],
            l = a()(Ce, {
              [`${Ce}--${t}`]: t,
              [`${Ce}--size-${r}`]: r,
              [`${Ce}--disabled`]: s,
            });
          return o.createElement(I, { className: l, onClick: n, type: t });
        };
        return (e.displayName = "CarouselSnappedControl"), e;
      })();
      var Le = (function () {
        const e = (e) => {
          let { mode: t, position: n = "inner" } = e;
          const { getThemedComponentClasses: i } = (0, _.wR)(),
            s = a()(
              xe,
              { [`${xe}--${t}`]: t, [`${xe}--position-${n}`]: n },
              null == i ? void 0 : i("pageViewer")
            );
          return o.createElement(k, {
            andesDataAttributes: {
              "data-andes-carousel-snapped-pagination": !0,
            },
            className: s,
          });
        };
        return (e.displayName = "CarouselSnappedPagination"), e;
      })();
      const $e = (e, t) => {
          const n = Math.floor(t);
          return n <= 0 ? 0 : Math.ceil(e / n);
        },
        Me = (e, t) => {
          const n = Math.floor(t);
          return e % n || n;
        },
        ze = (e, t, n) => {
          const i = Math.floor(t);
          if (i <= 0) return 0;
          if (Me(n, i) < i && e >= n - i) {
            return $e(n, i) - 1;
          }
          return Math.floor(e / i);
        },
        Ie = (e, t, n) => {
          const i = e + Math.floor(t);
          return i > n - 1 ? 0 : i;
        },
        Ne = (e, t, n, i, s) =>
          "next" === e
            ? Ie(i, n, t)
            : ((e, t, n, i) => {
                const s = Math.floor(t);
                let o = e - s;
                o < 0 && (o = n - Me(n, s));
                const r = $e(n, s) - 1;
                ze(e, s, n) === r && (o = e - s + (i ? 0 : s - Me(n, t)));
                return o;
              })(i, n, t, s),
        Oe = (e, t, n) => {
          const i = Math.floor(n),
            s = t - 1;
          return 1 === i ? e : e < 0 ? 0 : e > s ? s - (s % i) : e - (e % i);
        },
        ke = (e, t, n, i, s) => {
          const o = Math.floor(n);
          return (
            !t &&
            ("next" === e
              ? ((e, t, n) => {
                  const i = Math.floor(e);
                  return 1 === i ? t === n - 1 : ze(t, i, n) === $e(n, i) - 1;
                })(o, s, i)
              : ((e, t, n) => {
                  const i = Math.floor(e);
                  return 1 === i ? 0 === t : 0 === ze(t, i, n);
                })(o, s, i))
          );
        },
        _e = (e, t, n, i) => {
          const s = Math.floor(n);
          if (1 === s) return e === t;
          if (((e, t, n, i) => i - e <= n && t >= i - n)(e, t, n, i)) return !0;
          const o = ze(t, s, i) * s;
          return e >= o && e <= o + s - 1;
        },
        Te = "large",
        Re = "always";
      var je = (e) => {
        let { arrows: t } = e;
        if (!t) return;
        if ("boolean" == typeof t) return { size: Te, visibility: Re };
        const { size: n, visibility: i } = t;
        return { size: n || Te, visibility: i || Re };
      };
      const Ve = "dark",
        De = "bottom";
      var He = (e) => {
        let { pagination: t } = e;
        if (!t) return;
        if ("boolean" == typeof t) return { mode: Ve, position: De };
        const { mode: n, position: i } = t;
        return { mode: n || Ve, position: i || De };
      };
      var Be = (e) => {
        let { autoplay: t } = e;
        if (t)
          return "boolean" == typeof t
            ? { speed: 3e3 }
            : { speed: (null == t ? void 0 : t.speed) || 3e3 };
      };
      var qe = (e, t) => {
        const n = Object.keys(e),
          i = Object.keys(t);
        if (n.length !== i.length) return !0;
        for (let i = 0; i < n.length; i += 1)
          if (e[n[i]] !== t[n[i]]) return !0;
        return !1;
      };
      class We extends o.Component {
        constructor(e) {
          super(e),
            (this.state = {
              activeSlide: this.computedInitialSlide,
              isHovered: !1,
              mainContainerState: void 0,
            }),
            (this.swiper = void 0),
            (this.mainContainer = void 0),
            (this.wrapper = void 0),
            (this.autoplayInterval = void 0),
            (this.setMainContainerRef = this.setMainContainerRef.bind(this)),
            (this.setWrapperRef = this.setWrapperRef.bind(this)),
            (this.swiperConfigurationHasChangedAfterUpdate =
              this.swiperConfigurationHasChangedAfterUpdate.bind(this)),
            (this.createNewSwiperInstance =
              this.createNewSwiperInstance.bind(this)),
            (this.destroyCurrentSwiperInstance =
              this.destroyCurrentSwiperInstance.bind(this)),
            (this.handleBeforeSlide = this.handleBeforeSlide.bind(this)),
            (this.handleAfterSlide = this.handleAfterSlide.bind(this)),
            (this.addEventListeners = this.addEventListeners.bind(this)),
            (this.removeEventListeners = this.removeEventListeners.bind(this)),
            (this.swiperInstanceSetup = this.swiperInstanceSetup.bind(this)),
            (this.getEnhancedChildren = this.getEnhancedChildren.bind(this)),
            (this.getControl = this.getControl.bind(this)),
            (this.computeArrowsPosition =
              this.computeArrowsPosition.bind(this)),
            (this.getControlProps = this.getControlProps.bind(this)),
            (this.handleWindowResize = this.handleWindowResize.bind(this)),
            (this.handleFocusOut = this.handleFocusOut.bind(this)),
            (this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this)),
            (this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this)),
            (this.handleControlClick = this.handleControlClick.bind(this)),
            (this.handlePageClick = this.handlePageClick.bind(this)),
            (this.hideAuxiliarSlides = this.hideAuxiliarSlides.bind(this)),
            (this.play = this.play.bind(this)),
            (this.stop = this.stop.bind(this));
        }
        componentDidMount() {
          this.createNewSwiperInstance();
        }
        componentDidUpdate(e) {
          this.swiperConfigurationHasChangedAfterUpdate(e) &&
            (this.destroyCurrentSwiperInstance(),
            this.createNewSwiperInstance());
        }
        componentWillUnmount() {
          this.destroyCurrentSwiperInstance();
        }
        setMainContainerRef(e) {
          const { innerRef: t } = this.props;
          (this.mainContainer = e),
            this.setState({ mainContainerState: e }),
            t && ("function" == typeof t ? t(e) : (t.current = e));
        }
        setWrapperRef(e) {
          this.wrapper = e;
        }
        swiperConfigurationHasChangedAfterUpdate(e) {
          const {
              infinite: t = !1,
              slidesPerView: n = 1,
              spacing: i = 12,
              speed: s = 350,
              type: r = "content",
              thresholdSlide: a = 0,
            } = this.props,
            {
              infinite: l = !1,
              slidesPerView: d = 1,
              spacing: c = 12,
              speed: u = 350,
              type: p = "content",
              thresholdSlide: h = 0,
              initialSlide: f = 0,
            } = e,
            m = je({ arrows: e.arrows }),
            v = Oe(f, o.Children.count(e.children), d);
          return (
            p !== r ||
            c !== i ||
            l !== t ||
            d !== n ||
            h !== a ||
            u !== s ||
            v !== this.computedInitialSlide ||
            (m && this.arrowsConfig && qe(m, this.arrowsConfig))
          );
        }
        createNewSwiperInstance() {
          const {
              id: e,
              infinite: t = !1,
              spacing: n = 12,
              speed: i = 350,
              type: s = "content",
            } = this.props,
            o = [this.swiperInstanceSetup],
            r = {
              wrapperClass: be,
              slideClass: ye,
              slidePrevClass: Se,
              slideActiveClass: Ae,
              slideNextClass: Ee,
              resistanceRatio: 0.95,
              longSwipesRatio: 0.25,
              spaceBetween: "full" === s ? 0 : n,
              loop: t,
              slidesPerView: this.slidesPerView,
              initialSlide: this.computedInitialSlide,
              speed: i,
              plugins: o,
              touchMoveStopPropagation: !0,
              navigation: {},
            };
          1 === this.slidesPerView &&
            this.arrowsConfig &&
            (r.plugins.push(ge),
            (r.navigation = {
              prevEl: "[data-andes-carousel-snapped-control='previous']",
              nextEl: "[data-andes-carousel-snapped-control='next']",
            })),
            (this.swiper = new fe(
              this.mainContainer ||
                (e ? `#${e}` : "[data-andes-carousel-snapped-main]"),
              r,
              e
            )),
            this.swiper.on("before-slide", this.handleBeforeSlide),
            this.swiper.on("after-slide", this.handleAfterSlide),
            this.addEventListeners();
        }
        destroyCurrentSwiperInstance() {
          this.swiper.destroy(),
            clearInterval(this.autoplayInterval),
            this.removeEventListeners();
        }
        handleBeforeSlide(e, t, n) {
          const { beforeChange: i } = this.props;
          this.setState({ activeSlide: n }), "function" == typeof i && i(e, n);
        }
        handleAfterSlide(e) {
          const { afterChange: t } = this.props;
          "function" == typeof t && t(e);
        }
        addEventListeners() {
          "undefined" != typeof window &&
            window.addEventListener("resize", this.handleWindowResize),
            this.mainContainer &&
              (this.mainContainer.addEventListener("focusin", this.stop),
              this.mainContainer.addEventListener(
                "focusout",
                this.handleFocusOut
              ),
              this.mainContainer.addEventListener("touchstart", this.stop),
              this.mainContainer.addEventListener("touchend", this.play));
        }
        removeEventListeners() {
          "undefined" != typeof window &&
            window.removeEventListener("resize", this.handleWindowResize),
            this.mainContainer &&
              (this.mainContainer.removeEventListener("focusin", this.stop),
              this.mainContainer.removeEventListener(
                "focusout",
                this.handleFocusOut
              ),
              this.mainContainer.removeEventListener("touchstart", this.stop),
              this.mainContainer.removeEventListener("touchend", this.play));
        }
        swiperInstanceSetup(e) {
          const { infinite: t = !1 } = this.props;
          e.on("after-init", () => {
            t && this.hideAuxiliarSlides();
          }),
            (e.env.touchable = !0),
            this.autoplayConfig && setTimeout(this.play, 100);
        }
        get childrenAmount() {
          const { children: e } = this.props;
          return o.Children.count(e);
        }
        get computedInitialSlide() {
          const { initialSlide: e = 0 } = this.props;
          return Oe(e, this.childrenAmount, this.slidesPerView);
        }
        get autoplayConfig() {
          const { autoplay: e = !1 } = this.props;
          return Be({ autoplay: e });
        }
        get arrowsConfig() {
          const { arrows: e = !0 } = this.props;
          return je({ arrows: e });
        }
        get paginationConfig() {
          const { pagination: e = !0 } = this.props;
          return He({ pagination: e });
        }
        get pagesAmount() {
          return $e(this.childrenAmount, this.slidesPerView);
        }
        get currentPage() {
          const { activeSlide: e } = this.state;
          return ze(e, this.slidesPerView, this.childrenAmount);
        }
        get slidesPerView() {
          const { slidesPerView: e = 1, thresholdSlide: t = 0 } = this.props;
          let n;
          if (t >= 100) n = parseInt(String(e), 10) + 1;
          else {
            const i = "number" == typeof t ? Math.abs(t) / 100 : 0;
            n = parseInt(String(e), 10) + i;
          }
          return n;
        }
        getEnhancedChildren(e) {
          const {
              children: t,
              spacing: n = 12,
              type: i = "content",
            } = this.props,
            { activeSlide: s } = this.state;
          return o.Children.map(t, (t, r) =>
            (0, o.cloneElement)(t, {
              slideIndex: r + 1,
              slidesAmount: this.childrenAmount,
              isActive: _e(r, s, this.slidesPerView, this.childrenAmount),
              spacing: "full" === i ? 0 : n,
              slidesPerView: this.slidesPerView,
              i18n: e,
            })
          );
        }
        getControl(e) {
          const { arrows: t = !0, extend: n } = this.props;
          if (n && "object" == typeof t) {
            const n = t[e];
            if (n && null != n && n.component)
              return n.component(this.getControlProps(e));
          }
          return this.arrowsConfig && o.createElement(Pe, { type: e });
        }
        computeArrowsPosition(e) {
          var t;
          const { arrows: n = !0 } = this.props,
            i =
              "object" == typeof n &&
              (null === (t = n[e]) || void 0 === t ? void 0 : t.position);
          return i || ("previous" === e ? "left" : "right");
        }
        getControlProps(e) {
          var t, n, i, s;
          const {
              arrows: o = !0,
              extend: r,
              i18n: a,
              infinite: l = !1,
            } = this.props,
            { activeSlide: d } = this.state;
          return {
            disabled: ke(e, l, this.slidesPerView, this.childrenAmount, d),
            i18n: a,
            offsetX: r
              ? null === (t = o[e]) || void 0 === t
                ? void 0
                : t.offsetX
              : void 0,
            offsetY: r
              ? null === (n = o[e]) || void 0 === n
                ? void 0
                : n.offsetY
              : void 0,
            position: r ? this.computeArrowsPosition(e) : void 0,
            size:
              null === (i = this.arrowsConfig) || void 0 === i
                ? void 0
                : i.size,
            visibility:
              (null === (s = this.arrowsConfig) || void 0 === s
                ? void 0
                : s.visibility) === Re,
            type: e,
          };
        }
        hideAuxiliarSlides() {
          const e = (t) => {
            var n;
            t &&
              1 === t.nodeType &&
              ((t.tabIndex = -1),
              null !== (n = t.childNodes) &&
                void 0 !== n &&
                n.length &&
                Array.prototype.slice.call(t.childNodes).forEach((t) => e(t)));
          };
          if (this.wrapper) {
            const t = Array.prototype.slice.call(
              this.wrapper.querySelectorAll(`.${ye}`)
            );
            [
              ...t.slice(0, this.slidesPerView),
              ...t.slice(-this.slidesPerView),
            ].forEach((t) => {
              t.setAttribute("aria-hidden", !0), e(t);
            });
          }
        }
        handleWindowResize() {
          this.swiper && this.swiper.updateSize();
        }
        handleFocusOut() {
          const { isHovered: e } = this.state,
            { autoplay: t } = this.props;
          !e && t && this.play();
        }
        handleOnMouseEnter() {
          const { autoplay: e } = this.props;
          e && (this.setState({ isHovered: !0 }), this.stop());
        }
        handleOnMouseLeave() {
          const { autoplay: e } = this.props;
          e && (this.setState({ isHovered: !1 }), this.play());
        }
        handleControlClick(e) {
          const { infinite: t = !1 } = this.props,
            { activeSlide: n } = this.state;
          if (this.swiper) {
            const i = Ne(e, this.childrenAmount, this.slidesPerView, n, t);
            this.swiper.slideTo(i);
          }
        }
        handlePageClick(e) {
          if (this.swiper) {
            const t = this.slidesPerView > 1 ? this.slidesPerView * e : e;
            this.swiper.slideTo(t);
          }
        }
        play() {
          let e;
          if (
            ("undefined" != typeof window &&
              (e = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
              ).matches),
            !e && this.swiper && this.autoplayConfig)
          ) {
            const { env: e, state: t } = this.swiper;
            clearInterval(this.autoplayInterval),
              (this.autoplayInterval = setInterval(() => {
                if (this.slidesPerView > 1) {
                  const e = Ie(
                    t.index,
                    this.slidesPerView,
                    this.childrenAmount
                  );
                  this.swiper.slideTo(e);
                } else {
                  const n = t.index + 1;
                  this.swiper.slideTo(
                    n > e.limitation.maxIndex ? e.limitation.minIndex : n
                  );
                }
              }, this.autoplayConfig.speed));
          }
        }
        stop() {
          this.autoplayConfig &&
            (clearInterval(this.autoplayInterval),
            (this.autoplayInterval = void 0));
        }
        render() {
          var e, t, n, s, r, l, c, u, p;
          const {
              andesDataAttributes: h,
              arrows: f,
              containerClassName: m,
              className: g,
              extend: w,
              i18n: C,
              id: y,
              onClick: x,
              pagination: b = !0,
              scroll: S = "hidden",
              srLabel: E,
              strictBoundaries: A = !0,
              title: P,
              type: L = "content",
            } = this.props,
            $ = void 0 === P || !P,
            M =
              w &&
              !(
                ("object" == typeof f &&
                  ((null != f && f.next) || (null != f && f.previous))) ||
                ("object" == typeof b && null != b && b.custom)
              );
          (0, T.A)(
            !($ && !E),
            "<CarouselSnapped> needs some plain text contents for accessibility reasons.\nPlease add a `title` or `srLabel` prop."
          ),
            (0, T.A)(
              !M,
              "'extend' prop needs a custom pagination or custom arrows configuration.\nPlease, use the 'pagination={{ custom }}' or 'arrows={{ next, previous }}' configuration if extend is true."
            );
          const { mainContainerState: z } = this.state,
            I =
              this.paginationConfig &&
              ("bottom" ===
                (null === (e = this.paginationConfig) || void 0 === e
                  ? void 0
                  : e.position) ||
                "full" === L),
            N =
              this.paginationConfig &&
              !w &&
              "top" ===
                (null === (t = this.paginationConfig) || void 0 === t
                  ? void 0
                  : t.position) &&
              "full" !== L,
            O = a()(
              `${we}__container`,
              {
                [`${we}__container--${L}`]: L,
                [`${we}__container--with-controls`]: this.arrowsConfig,
                [`${we}__container--strict-boundaries`]: A,
                [`${we}__container--arrows-visible`]:
                  (null === (n = this.arrowsConfig) || void 0 === n
                    ? void 0
                    : n.visibility) === Re,
                [`${we}__container--pagination-position-top`]:
                  "top" ===
                    (null === (s = this.paginationConfig) || void 0 === s
                      ? void 0
                      : s.position) && "full" !== L,
              },
              m
            ),
            k = a()(we, g, { [`${we}--scroll-${S}`]: S }),
            _ = {
              "aria-label": E,
              "aria-labelledby": P ? `${y}-title` : void 0,
              "aria-roledescription": C.pgettext(we, "Carrusel"),
              className: O,
              id: y,
              onClick: x,
              onMouseEnter: this.handleOnMouseEnter,
              onMouseLeave: this.handleOnMouseLeave,
              ref: this.setMainContainerRef,
            },
            R = {
              pagesAmount: this.pagesAmount,
              currentPage: this.currentPage,
              mode:
                null === (r = this.paginationConfig) || void 0 === r
                  ? void 0
                  : r.mode,
              i18n: C,
              onClick: this.handlePageClick,
            },
            j =
              w &&
              "object" == typeof b &&
              "custom" in b &&
              (null == b ? void 0 : b.custom);
          return o.createElement(
            v.Provider,
            {
              value: {
                pagination: {
                  pagesAmount: this.pagesAmount,
                  currentPage: this.currentPage,
                  position: w
                    ? (null == j ? void 0 : j.position) || "bottom"
                    : void 0,
                  offsetX: w ? (null == j ? void 0 : j.offsetX) : void 0,
                  offsetY: w ? (null == j ? void 0 : j.offsetY) : void 0,
                },
                carouselType: L,
                container: z,
                controls: {
                  next: (0, d.A)(
                    (0, d.A)({}, this.getControlProps("next")),
                    {},
                    {
                      onClick:
                        this.slidesPerView > 1
                          ? () => this.handleControlClick("next")
                          : void 0,
                    }
                  ),
                  previous: (0, d.A)(
                    (0, d.A)({}, this.getControlProps("previous")),
                    {},
                    {
                      onClick:
                        this.slidesPerView > 1
                          ? () => this.handleControlClick("previous")
                          : void 0,
                    }
                  ),
                },
              },
            },
            o.createElement(
              "section",
              (0, i.A)({}, _, { "data-andes-carousel-snapped-main": !0 }, h),
              o.createElement(
                "div",
                { className: `${we}__header` },
                P &&
                  o.createElement(
                    "span",
                    { className: `${we}__title`, id: `${y}-title` },
                    P
                  ),
                N &&
                  o.createElement(Le, {
                    position:
                      null === (l = this.paginationConfig) || void 0 === l
                        ? void 0
                        : l.position,
                    mode:
                      null === (c = this.paginationConfig) || void 0 === c
                        ? void 0
                        : c.mode,
                  })
              ),
              o.createElement(
                "div",
                {
                  className: `${we}__controls-wrapper`,
                  "data-andes-carousel-snapped-component": !0,
                },
                this.getControl("previous"),
                o.createElement(
                  "div",
                  { className: k },
                  o.createElement(
                    "div",
                    { className: `${we}__wrapper`, ref: this.setWrapperRef },
                    this.getEnhancedChildren(C)
                  )
                ),
                this.getControl("next")
              ),
              j && null != j && j.component
                ? j.component(R)
                : I &&
                    o.createElement(Le, {
                      mode:
                        null === (u = this.paginationConfig) || void 0 === u
                          ? void 0
                          : u.mode,
                      position:
                        "full" === L
                          ? "inner"
                          : null === (p = this.paginationConfig) || void 0 === p
                          ? void 0
                          : p.position,
                    })
            )
          );
        }
      }
      We.displayName = "CarouselSnapped";
      var Fe,
        Xe = We;
      const Ye = (0, j.n)(j.h),
        Ue = {
          SSR: [
            null == Ye || null === (Fe = Ye.sendHeadless) || void 0 === Fe
              ? void 0
              : Fe.call(Ye, "Carousel-Snapped"),
          ],
        };
      var Ze = {
          "andes-carousel-snappedCarrusel": [null, "Carousel"],
          "andes-carousel-snapped{0} de {1}": [null, "{0} of {1}"],
          "andes-carousel-snappedAnterior": [null, "Previous"],
          "andes-carousel-snappedSiguiente": [null, "Next"],
          "andes-carousel-snappedPágina {0}": [null, "Page {0}"],
        },
        Ke = {
          "andes-carousel-snappedCarrusel": [null, "轮播图"],
          "andes-carousel-snapped{0} de {1}": [null, "第 {0} 张，共 {1} 张"],
          "andes-carousel-snappedAnterior": [null, "上一项"],
          "andes-carousel-snappedSiguiente": [null, "下一项"],
          "andes-carousel-snappedPágina {0}": [null, "第 {0} 页"],
        },
        Ge = {
          "andes-carousel-snappedCarrusel": [null, "Carrusel"],
          "andes-carousel-snapped{0} de {1}": [null, "{0} de {1}"],
          "andes-carousel-snappedAnterior": [null, "Anterior"],
          "andes-carousel-snappedSiguiente": [null, "Siguiente"],
          "andes-carousel-snappedPágina {0}": [null, "Página {0}"],
        },
        Je = {
          "andes-carousel-snappedCarrusel": [null, "Carrossel"],
          "andes-carousel-snapped{0} de {1}": [null, "{0} de {1}"],
          "andes-carousel-snappedAnterior": [null, "Anterior"],
          "andes-carousel-snappedSiguiente": [null, "Seguinte"],
          "andes-carousel-snappedPágina {0}": [null, "Página {0}"],
        };
      const Qe = ["ref"],
        et = (function () {
          const e = (e) => {
            let { ref: t } = e,
              n = (0, s.A)(e, Qe);
            const r = (0, l.Bi)(n.id),
              { getThemedComponentClasses: d, themeHash: c } = (0, _.wR)(),
              { i18n: u } = (0, l.AH)("@andes/carousel-snapped", {
                en: Ze,
                "es-AR": Ge,
                "pt-BR": Je,
                "zh-CN": Ke,
              });
            return o.createElement(
              Xe,
              (0, i.A)({ innerRef: t }, n, {
                i18n: u,
                id: r,
                containerClassName: a()(null == d ? void 0 : d("carousel")),
                andesDataAttributes: c,
              })
            );
          };
          return (e.displayName = "CarouselSnappedContainer"), e;
        })();
      var tt = (0, R.H)(et, Ue);
      const nt = (function () {
        const e = (e) => {
          let {
            children: t,
            slideIndex: n,
            slidesAmount: i,
            isActive: s = !1,
            spacing: r = 0,
            slidesPerView: d = 1,
            className: c,
            i18n: u,
            ref: p,
          } = e;
          const h = (function (e) {
              const [t, n] = (0, o.useState)(e);
              return (
                (0, o.useEffect)(() => {
                  !t && e && n(!0);
                }, [t, e]),
                t
              );
            })(s),
            f = (0, o.useRef)(void 0),
            { device: m } = (0, l.AH)(),
            v = null == m ? void 0 : m.mobile,
            g = p || f;
          (0, o.useEffect)(() => {
            if (null != g && g.current) {
              [
                ...g.current.querySelectorAll("a"),
                ...g.current.querySelectorAll("button"),
              ].forEach((e) => {
                s || v
                  ? e.removeAttribute("tabindex")
                  : e.setAttribute("tabindex", "-1");
              });
            }
          }, [s, g]);
          const w = (0, o.useCallback)(
              (e) => {
                if (!(0, o.isValidElement)(e)) return e;
                let t = o.Children.map(e.props.children, (e) => w(e));
                1 === o.Children.count(t) && ([t] = t);
                const n = { children: t, mounted: h };
                return (0, o.cloneElement)(e, n);
              },
              [h]
            ),
            C = (0, o.useMemo)(() => o.Children.map(t, (e) => w(e)), [t, w]),
            y = a()(ye, c, { [`${ye}--spacing-${r}`]: r });
          return o.createElement(
            "div",
            {
              role: "group",
              className: y,
              "aria-hidden": (!s && !v) || void 0,
              tabIndex: s || v ? void 0 : -1,
              "aria-label":
                u && void 0 !== n && void 0 !== i
                  ? u.pgettext(we, "{0} de {1}", n, i)
                  : "",
              style: d ? { width: `calc(${100 / d}% - ${r - r / d}px)` } : {},
              ref: g,
            },
            C
          );
        };
        return (e.displayName = "CarouselSnappedSlide"), e;
      })();
      var it = (0, o.memo)(nt);
      const st = ["alt", "className", "preload", "src"];
      var ot = (e) => {
        let { alt: t, className: n, preload: r, src: a } = e,
          l = (0, s.A)(e, st);
        if (r) {
          const {
            crossOrigin: e,
            referrerPolicy: t,
            fetchPriority: n = "high",
            nonce: i,
            srcSet: s,
            sizes: o,
          } = l;
          (0, V.preload)(a, {
            as: "image",
            crossOrigin: e,
            referrerPolicy: t,
            fetchPriority: n,
            nonce: i,
            imageSizes: o,
            imageSrcSet: s,
          });
        }
        return o.createElement(
          "img",
          (0, i.A)({}, l, {
            alt: t,
            className: n,
            decoding: r ? "sync" : "async",
            loading: r ? "eager" : "lazy",
            src: a,
          })
        );
      };
    },
    57521(e, t, n) {
      n.d(t, { A: () => s });
      var i = n(96540);
      const s = (e) => {
        let {
          color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
          i18n: n,
          srLabel: s,
        } = e;
        return i.createElement(
          "svg",
          {
            "aria-hidden": s ? void 0 : !s,
            "aria-label": s || void 0,
            role: s ? "img" : void 0,
            color: t,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "currentColor",
          },
          s && i.createElement("title", null, s),
          i.createElement("path", {
            d: "M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z",
            fill: "currentColor",
          })
        );
      };
    },
    28498(e, t, n) {
      n.d(t, { A: () => s });
      var i = n(96540);
      const s = (e) => {
        let {
          color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
          i18n: n,
          srLabel: s,
        } = e;
        return i.createElement(
          "svg",
          {
            "aria-hidden": s ? void 0 : !s,
            "aria-label": s || void 0,
            role: s ? "img" : void 0,
            color: t,
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "currentColor",
          },
          s && i.createElement("title", null, s),
          i.createElement("path", {
            d: "M20.0549 6.99999L11.0596 15.9953L20.0642 25L19.0036 26.0607L8.93823 15.9953L18.9942 5.93933L20.0549 6.99999Z",
            fill: "currentColor",
          })
        );
      };
    },
    75601(e, t, n) {
      n.d(t, { A: () => s });
      var i = n(96540);
      const s = (e) => {
        let {
          color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
          i18n: n,
          srLabel: s,
        } = e;
        return i.createElement(
          "svg",
          {
            "aria-hidden": s ? void 0 : !s,
            "aria-label": s || void 0,
            role: s ? "img" : void 0,
            color: t,
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
          },
          s && i.createElement("title", null, s),
          i.createElement("path", {
            d: "M5.95028 4.40041L9.54667 7.9968L5.94653 11.5969L6.79506 12.4455L11.2437 7.9968L6.79881 3.55188L5.95028 4.40041Z",
            fill: "currentColor",
          })
        );
      };
    },
    42575(e, t, n) {
      n.d(t, { A: () => s });
      var i = n(96540);
      const s = (e) => {
        let {
          color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
          i18n: n,
          srLabel: s,
        } = e;
        return i.createElement(
          "svg",
          {
            "aria-hidden": s ? void 0 : !s,
            "aria-label": s || void 0,
            role: s ? "img" : void 0,
            color: t,
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "currentColor",
          },
          s && i.createElement("title", null, s),
          i.createElement("path", {
            d: "M11.943 6.99999L20.9383 15.9953L11.9336 25L12.9943 26.0607L23.0596 15.9953L13.0036 5.93933L11.943 6.99999Z",
            fill: "currentColor",
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=84719.29afc812.js.map
