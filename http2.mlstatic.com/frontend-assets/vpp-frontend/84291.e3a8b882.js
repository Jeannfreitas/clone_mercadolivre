/*! For license information please see 84291.e3a8b882.js.LICENSE.txt */
"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [84291],
  {
    84291(e, t, n) {
      n.d(t, { n: () => ce });
      var r = n(58168),
        o = n(96540),
        a = n(46942),
        i = n.n(a),
        c = n(64467),
        s = n(69247),
        l = n(80045);
      const d = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          return t.some(
            (t) => (
              t && t(e, ...r),
              (null == e ? void 0 : e.preventEventDefault) ||
                (e && "nativeEvent" in e && e.nativeEvent.preventEventDefault)
            )
          );
        };
      };
      function u(e, t, n) {
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
      var p = Symbol.for("react.transitional.element");
      function f(e, t, n) {
        var r = null;
        if (
          (void 0 !== n && (r = "" + n),
          void 0 !== t.key && (r = "" + t.key),
          "key" in t)
        )
          for (var o in ((n = {}), t)) "key" !== o && (n[o] = t[o]);
        else n = t;
        return (
          (t = n.ref),
          {
            $$typeof: p,
            type: e,
            key: r,
            ref: void 0 !== t ? t : null,
            props: n,
          }
        );
      }
      var b = { Fragment: Symbol.for("react.fragment"), jsx: f, jsxs: f },
        m =
          (u(function (e, t) {}),
          u(function (e) {
            e.exports = b;
          }));
      const y = (0, o.createContext)({}),
        h = (e) => {
          let {
            expanded: t,
            disabled: n,
            id: r,
            onChange: a,
            children: i,
            closePanel: c,
          } = e;
          const s = (0, o.useMemo)(
            () => ({
              disabled: n,
              id: r,
              onChange: a,
              closePanel: c,
              expanded: t,
            }),
            [n, r, a, t, c]
          );
          return m.jsx(y.Provider, { value: s, children: i });
        },
        g = () => {
          const e = (0, o.useContext)(y);
          if (!e)
            throw new Error(
              "Accordion sub components must be used within an <Accordion> component"
            );
          return e;
        },
        O = (e, t) => (t ? "disabled" : e ? "expanded" : "collapsed");
      function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                (0, c.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      const x = function () {
          return j(
            j(
              {},
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            ),
            {},
            { "data-andes-accordion": !0 }
          );
        },
        E = (e, t) => ({
          "data-andes-accordion-header": !0,
          "data-andes-state": O(e, t),
        }),
        P = (e, t) => ({
          "data-andes-accordion-panel": !0,
          "data-andes-state": O(e, t),
        }),
        A = ["onClick"],
        w = ["onChange"];
      function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                (0, c.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      const L = (e, t) => ({
          "aria-expanded": t,
          "aria-controls": `${e}-accordion-content`,
          id: `${e}-accordion-header`,
        }),
        N = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { onClick: n } = t,
            r = (0, l.A)(t, A),
            { onChange: o } = e,
            a = (0, l.A)(e, w);
          return D(D({ onClick: d(n, o) }, a), r);
        },
        _ = (e) => {
          let { className: t, children: n, ref: r } = e;
          const { disabled: a, id: i, onChange: c, expanded: s } = g(),
            l = (0, o.useCallback)(
              (e) => N({ onChange: c, disabled: a }, e),
              [c, a]
            );
          return m.jsx(m.Fragment, {
            children:
              "function" == typeof n
                ? n({
                    id: i,
                    expanded: s,
                    componentGetterProps: {
                      getHeaderProps: l,
                      getHeadlessAttributes: () => E(s, a),
                    },
                  })
                : m.jsx(
                    "button",
                    D(
                      D(
                        D(
                          D({ ref: r, className: t, type: "button" }, l()),
                          E(s, a)
                        ),
                        L(i, s)
                      ),
                      {},
                      { children: n }
                    )
                  ),
          });
        };
      function k(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                (0, c.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      _.displayName = "AccordionHeader";
      const $ = (e) => {
        let {
          andesDataAttributes: t = {},
          children: n,
          className: r,
          defaultExpanded: a = !1,
          disabled: i = !1,
          expanded: c,
          id: l,
          onChange: d,
          ref: u,
        } = e;
        const p = (0, s.Bi)(l),
          { current: f } = (0, o.useRef)(void 0 !== c),
          [b, y] = (0, o.useState)(a),
          g = (0, o.useCallback)(
            (e) => {
              f || y((e) => !e), "function" == typeof d && d(e, f ? !!c : !b);
            },
            [c, f, d, b]
          ),
          O = (0, o.useCallback)(
            (e) => {
              const t =
                ((e) => {
                  if (e) {
                    if (e instanceof HTMLElement) return e;
                    if (e.current instanceof HTMLElement) return e.current;
                  }
                  return null;
                })(e) || document.getElementById(`${p}-accordion-header`);
              y(!1), null == t || t.focus();
            },
            [p]
          ),
          v = f ? Boolean(c) : b,
          j = (0, o.useCallback)(
            (e) => N({ onChange: g, disabled: i }, e),
            [g, i]
          );
        return m.jsx(h, {
          expanded: v,
          disabled: i,
          id: p,
          onChange: g,
          closePanel: O,
          children: m.jsx(m.Fragment, {
            children:
              "function" == typeof n
                ? n({
                    id: p,
                    expanded: v,
                    closePanel: O,
                    componentGetterProps: {
                      getContainerHeadlessAttributes: () => x(t),
                      getHeaderProps: j,
                      getHeaderHeadlessAttributes: () => E(v, i),
                      getPanelHeadlessAttributes: () => P(v, i),
                    },
                  })
                : m.jsx(
                    "div",
                    S(
                      S(
                        {
                          id: `${p}-accordion-container`,
                          className: r,
                          ref: u,
                        },
                        x(t)
                      ),
                      {},
                      { children: n }
                    )
                  ),
          }),
        });
      };
      function H(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                (0, c.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      $.displayName = "Accordion";
      const T = (e, t) => ({
          role: "region",
          "aria-labelledby": `${e}-accordion-header`,
          "aria-hidden": t,
          id: `${e}-accordion-content`,
        }),
        R = (e) => {
          let { className: t, children: n, ref: r } = e;
          const { disabled: o, id: a, expanded: i, closePanel: c } = g(),
            s = !i || o;
          return m.jsx(m.Fragment, {
            children:
              "function" == typeof n
                ? n({
                    id: a,
                    expanded: i,
                    closePanel: c,
                    componentGetterProps: {
                      getHeadlessAttributes: () => P(i, o),
                    },
                  })
                : m.jsx(
                    "div",
                    M(
                      M(M({ ref: r, className: t }, P(i, o)), T(a, s)),
                      {},
                      { children: n }
                    )
                  ),
          });
        };
      R.displayName = "AccordionPanel";
      var B = n(27700);
      const G = [
          "preEnter",
          "entering",
          "entered",
          "preExit",
          "exiting",
          "exited",
          "unmounted",
        ],
        I = (e) => ({
          _s: e,
          status: G[e],
          isEnter: e < 3,
          isMounted: 6 !== e,
          isResolved: 2 === e || e > 4,
        }),
        F = (e) => (e ? 6 : 5),
        U = (e, t, n, r, o) => {
          clearTimeout(r.current);
          const a = I(e);
          t(a), (n.current = a), "function" == typeof o && o({ current: a });
        },
        q = function () {
          let {
            enter: e = !0,
            exit: t = !0,
            preEnter: n,
            preExit: r,
            timeout: a,
            initialEntered: i,
            mountOnEnter: c,
            unmountOnExit: s,
            onStateChange: l,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          const [d, u] = (0, o.useState)(() => I(i ? 2 : F(c))),
            p = (0, o.useRef)(d),
            f = (0, o.useRef)(void 0),
            [b, m] = ((e) =>
              "object" == typeof e ? [e.enter, e.exit] : [e, e])(a),
            y = (0, o.useCallback)(() => {
              const e = ((e, t) => {
                switch (e) {
                  case 1:
                  case 0:
                    return 2;
                  case 4:
                  case 3:
                    return F(t);
                }
              })(p.current._s, s);
              e && U(e, u, p, f, l);
            }, [l, s]),
            h = (0, o.useCallback)(
              (o) => {
                const a = (e) => {
                    switch ((U(e, u, p, f, l), e)) {
                      case 1:
                        b && b >= 0 && (f.current = setTimeout(y, b));
                        break;
                      case 4:
                        m && m >= 0 && (f.current = setTimeout(y, m));
                        break;
                      case 0:
                      case 3:
                        f.current = ((e, t) =>
                          setTimeout(() => {
                            Number.isNaN(document.body.offsetTop) || e(t + 1);
                          }, 0))(a, e);
                    }
                  },
                  i = p.current.isEnter;
                "boolean" != typeof o && (o = !i),
                  o
                    ? i || a(e ? (n ? 0 : 1) : 2)
                    : i && a(t ? (r ? 3 : 4) : F(s));
              },
              [y, l, e, t, n, r, b, m, s]
            );
          return (
            (0, o.useEffect)(() => () => clearTimeout(f.current), []), [d, h, y]
          );
        };
      var z = n(88460),
        K = n(38083),
        W = n(95990),
        J = n(54812);
      const Q = "andes-accordion",
        V = "andes-accordion-header",
        X = "andes-accordion-panel",
        Y = { SMALL: "small", MEDIUM: "medium", LARGE: "large" },
        Z = [
          "description",
          "indicatorConfig",
          "expanded",
          "title",
          "titleMaxLines",
          "id",
        ],
        ee = (e) => (e ? { lineClamp: e, WebkitLineClamp: e } : {}),
        te = (function () {
          const e = (e) => {
            var t;
            let {
                description: n,
                indicatorConfig: a,
                expanded: c,
                title: s,
                titleMaxLines: d,
                id: u,
              } = e,
              p = (0, l.A)(e, Z);
            const f = i()(
                `${V}-container__title`,
                d && `${V}-container__title--limited-lines`
              ),
              b = `${V}-container__description`,
              m =
                null === (t = null == a ? void 0 : a.showIcon) ||
                void 0 === t ||
                t;
            return o.createElement(
              "button",
              (0, r.A)(
                {
                  type: "button",
                  className: V,
                  "aria-expanded": c,
                  "aria-controls": `${u}-accordion-content`,
                  id: `${u}-accordion-header`,
                },
                p
              ),
              o.createElement(
                "div",
                { className: `${V}-container` },
                o.createElement(
                  "div",
                  { className: `${V}-container__content` },
                  o.createElement(
                    "div",
                    { className: f, style: ee(d) },
                    "function" == typeof s ? null : s
                  ),
                  "function" != typeof s && n
                    ? o.createElement("div", { className: b }, n)
                    : null
                ),
                o.createElement(
                  "div",
                  { className: `${V}-container__indicator` },
                  c
                    ? null == a
                      ? void 0
                      : a.expandedLabel
                    : null == a
                    ? void 0
                    : a.collapsedLabel,
                  m ? o.createElement(B.A, { color: "currentColor" }) : null
                )
              )
            );
          };
          return (e.displayName = "AccordionHeader"), e;
        })();
      var ne = te;
      var re;
      const oe = (0, J.n)(J.h),
        ae = {
          SSR: [
            null == oe || null === (re = oe.sendHeadless) || void 0 === re
              ? void 0
              : re.call(oe, "Accordion"),
          ],
        },
        ie = (function () {
          const e = (e) => {
            let {
              children: t,
              className: n,
              defaultExpanded: a,
              description: c,
              disabled: s,
              expanded: l,
              indicator: d = {},
              extend: u = !1,
              id: p,
              onChange: f,
              size: b = Y.MEDIUM,
              showDivider: m = !0,
              title: y,
              titleMaxLines: h,
              ref: g,
            } = e;
            const { getThemedComponentClasses: O, themeHash: v } = (0, W.wR)(),
              [{ status: j }, x] = q({
                timeout: 300,
                preEnter: !0,
                initialEntered: l || a,
              });
            (0, z.A)(
              !(b === Y.SMALL && c),
              "'description' prop can't be used with size small"
            ),
              (0, z.A)(
                !(!u && "function" == typeof y),
                "The 'extend' prop should be used when using a render function for the title"
              ),
              (0, z.A)(
                !(u && "function" != typeof y),
                "The 'extend' prop should be used only when using a render function for the title,\nplease remove the extend prop"
              ),
              (0, z.A)(
                !!(
                  !1 !== (null == d ? void 0 : d.showIcon) ||
                  (null != d &&
                    d.collapsedLabel &&
                    null != d &&
                    d.expandedLabel)
                ),
                "A collapsedLabel and an expandedLabel are required when the indicator icon is not displayed"
              ),
              (0, o.useEffect)(() => {
                "boolean" == typeof l && x(l);
              }, [l]);
            const E = i()(
              Q,
              n,
              { [`${Q}--${b}`]: b, [`${Q}--without-divider`]: !m },
              null == O ? void 0 : O("accordion"),
              null == O ? void 0 : O("expandableSection")
            );
            return o.createElement(
              $,
              {
                className: E,
                ref: g,
                id: p,
                disabled: s,
                defaultExpanded: a,
                expanded: l,
                onChange: (e, t) => {
                  void 0 === l && x(t), "function" == typeof f && f(e, t);
                },
                andesDataAttributes: v,
              },
              o.createElement(
                _,
                null,
                u && "function" == typeof y
                  ? y
                  : (e) => {
                      let {
                        id: t,
                        expanded: n,
                        componentGetterProps: {
                          getHeaderProps: a,
                          getHeadlessAttributes: i,
                        },
                      } = e;
                      return o.createElement(
                        ne,
                        (0, r.A)(
                          {
                            id: t,
                            title: y,
                            titleMaxLines: h,
                            expanded: n,
                            indicatorConfig: d,
                          },
                          b === Y.SMALL ? {} : { description: c },
                          a(),
                          i()
                        )
                      );
                    }
              ),
              o.createElement(
                "div",
                {
                  className: `${X}-transition`,
                  "data-andes-transition-status": j,
                },
                o.createElement(
                  "div",
                  { className: `${X}-transition__inner` },
                  o.createElement(R, null, t)
                )
              )
            );
          };
          return (e.displayName = "Accordion"), e;
        })();
      var ce = (0, K.H)(ie, ae);
    },
  },
]);
//# sourceMappingURL=84291.e3a8b882.js.map
