/*! For license information please see 27786.a1777731.js.LICENSE.txt */
"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [27786],
  {
    35717(e, t, a) {
      a.d(t, { A: () => i });
      var n = a(96540);
      const i = (e) => {
        let {
          color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
          i18n: a,
          srLabel: i,
        } = e;
        return n.createElement(
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
          i && n.createElement("title", null, i),
          n.createElement("path", {
            d: "M7.39902 7.40067V2.00067H8.59902V7.40067H13.999V8.60067H8.59902V14.0007H7.39902V8.60067H1.99902V7.40067H7.39902Z",
            fill: "currentColor",
          })
        );
      };
    },
    23800(e, t, a) {
      a.d(t, { A: () => i });
      var n = a(96540);
      const i = (e) => {
        let {
          color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
          i18n: a,
          srLabel: i,
        } = e;
        return n.createElement(
          "svg",
          {
            "aria-hidden": i ? void 0 : !i,
            "aria-label": i || void 0,
            role: i ? "img" : void 0,
            color: t,
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "currentColor",
          },
          i && n.createElement("title", null, i),
          n.createElement("path", {
            d: "M9.3998 9.39498V2.79498H10.5998V9.39498H17.1998V10.595H10.5998V17.195H9.3998V10.595H2.7998V9.39498H9.3998Z",
            fill: "currentColor",
          })
        );
      };
    },
    39830(e, t, a) {
      a.d(t, { A: () => i });
      var n = a(96540);
      const i = (e) => {
        let {
          color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
          i18n: a,
          srLabel: i,
        } = e;
        return n.createElement(
          "svg",
          {
            "aria-hidden": i ? void 0 : !i,
            "aria-label": i || void 0,
            role: i ? "img" : void 0,
            color: t,
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "currentColor",
          },
          i && n.createElement("title", null, i),
          n.createElement("path", {
            d: "M6.72725 2.90906H5.27271L5.45452 6.90906H6.54543L6.72725 2.90906Z",
            fill: "currentColor",
          }),
          n.createElement("path", {
            d: "M5.99998 7.63633C6.40164 7.63633 6.72725 7.96194 6.72725 8.3636C6.72725 8.76527 6.40164 9.09088 5.99998 9.09088C5.59832 9.09088 5.27271 8.76527 5.27271 8.3636C5.27271 7.96194 5.59832 7.63633 5.99998 7.63633Z",
            fill: "currentColor",
          })
        );
      };
    },
    81948(e, t, a) {
      a.d(t, { A: () => i });
      var n = a(96540);
      const i = (e) => {
        let {
          color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
          i18n: a,
          srLabel: i,
        } = e;
        return n.createElement(
          "svg",
          {
            "aria-hidden": i ? void 0 : !i,
            "aria-label": i || void 0,
            role: i ? "img" : void 0,
            color: t,
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "currentColor",
          },
          i && n.createElement("title", null, i),
          n.createElement("path", {
            d: "M2.7998 10.595H17.1998V9.39502H2.7998V10.595Z",
            fill: "currentColor",
          })
        );
      };
    },
    57051(e, t, a) {
      a.d(t, { Y: () => b });
      var n = a(58168),
        i = a(80045),
        r = a(96540),
        s = a(46942),
        l = a.n(s),
        o = a(98335),
        c = a(69247),
        d = a(25925),
        u = a(89379),
        m = a(92275),
        p = a(95990),
        _ = a(48529);
      const h = "fill",
        f = "andes-progress-indicator-linear",
        v = `${f}__segment`;
      delete (0, u.A)({}, m.m.propTypes).children;
      var y = (e) => {
        let {
          id: t,
          size: a = "small",
          srLabel: i,
          value: s = 0,
          tooltipConfig: c,
          label: d,
        } = e;
        const u = `${f}--comparison`,
          p = l()(u, { [`${u}--${a}`]: a }),
          _ = { left: `${s}%` },
          h = () =>
            r.createElement(
              r.Fragment,
              null,
              r.createElement("span", { className: `${p}-upper-row` }),
              r.createElement("span", { className: `${p}-lower-row` })
            );
        return r.createElement(
          "div",
          { className: `${f}--comparison`, style: _ },
          c
            ? r.createElement(
                m.m,
                (0, n.A)({}, c, { className: `${p}-tooltip` }),
                r.createElement(
                  "button",
                  {
                    className: `${p}-container`,
                    "aria-labelledby": `${t}-label`,
                    "aria-label": i,
                    type: "button",
                  },
                  h()
                )
              )
            : r.createElement(
                "div",
                { className: `${p}-notooltip-container` },
                i && r.createElement(o.s, null, i),
                h()
              ),
          d &&
            r.createElement(
              "span",
              { className: `${p}-value`, id: `${t}-label` },
              d
            )
        );
      };
      const g = ["ref"];
      var b = (function () {
        const e = (e) => {
          let { ref: t } = e,
            a = (0, i.A)(e, g);
          const {
              id: s,
              className: u,
              size: m = "small",
              color: b,
              value: x = 0,
              highlight: w = !1,
              inverted: C = !1,
              segments: $,
              srLabel: N,
              srValueText: k,
              srAnnouncement: E,
              comparison: j,
            } = a,
            L = !!$,
            S = (0, c.Bi)(s),
            { getThemedComponentClasses: M, themeHash: T } = (0, p.wR)(),
            A = (0, d.A)(),
            z = (0, r.useRef)(void 0),
            [q, F] = (0, r.useState)(E);
          (0, r.useEffect)(() => {
            F(E), (z.current = setTimeout(() => F(""), 30));
          }, [E]),
            (0, r.useEffect)(() => () => clearTimeout(z.current), []);
          const H = L ? {} : { width: `${x}%`, backgroundColor: b },
            P = { [`${f}--${m}`]: m, [`${f}--segmented`]: L },
            V = l()(f, u, P, null == M ? void 0 : M("progressIndicator")),
            R = l()(
              h,
              L
                ? { [`${h}--segmented`]: L }
                : {
                    [`${h}--empty`]: 0 === x,
                    [`${h}--highlighted`]: w,
                    [`${h}--inverted`]: C,
                  }
            );
          return r.createElement(
            "div",
            (0, n.A)(
              {
                className: V,
                ref: t,
                "data-andes-progress-indicator-linear": !0,
                "data-andes-progress-indicator-linear-size": m,
              },
              T
            ),
            r.createElement(
              o.s,
              { role: "status", "aria-live": "polite", "aria-atomic": "true" },
              A && q
            ),
            r.createElement(
              "div",
              {
                id: S,
                style: H,
                className: R,
                role: "progressbar",
                "aria-valuenow": x,
                "aria-valuemin": 0,
                "aria-valuemax": $ || 100,
                "aria-valuetext": L ? k : void 0,
                "aria-label": N,
                "data-andes-progress-indicator-linear-progress": !0,
              },
              L &&
                (() => {
                  const e = [];
                  for (let t = 0; t < ($ || 0); t += 1) {
                    const a = t < x,
                      i = l()(v, { [`${v}--active`]: a });
                    e.push(
                      r.createElement(
                        "div",
                        (0, n.A)(
                          {
                            className: i,
                            style: { backgroundColor: a ? b : void 0 },
                            key: t,
                            "data-andes-progress-indicator-linear-progress-segment":
                              !0,
                          },
                          (0, _.i)({ completed: a })
                        )
                      )
                    );
                  }
                  return e;
                })()
            ),
            j &&
              r.createElement(
                y,
                (0, n.A)({ size: m, id: `${S}-comparison` }, j)
              )
          );
        };
        return (e.displayName = "ProgressIndicatorLinear"), e;
      })();
    },
    98335(e, t, a) {
      a.d(t, { s: () => c });
      var n = a(58168),
        i = a(80045),
        r = a(96540);
      a(46942);
      const s = "andes-visually-hidden",
        l = s,
        o = ["children", "component"];
      var c = (e) => {
        let { children: t, component: a = "span" } = e,
          s = (0, i.A)(e, o);
        return r.createElement(a, (0, n.A)({ className: l }, s), t);
      };
    },
    27786(e, t, a) {
      a.d(t, {
        C: () => $r,
        P: () => Un,
        a: () => xn,
        b: () => $n,
        c: () => kn,
        m: () => Nn,
        u: () => Kn,
      });
      var n = a(96540),
        i = a(74848),
        r = a(89557),
        s = a(37808),
        l = a(58168),
        o = a(46942),
        c = a.n(o),
        d = a(80045);
      const u = "andes-visually-hidden",
        m = u,
        p = ["children", "component"];
      var _ = (e) => {
        let { children: t, component: a = "span" } = e,
          i = (0, d.A)(e, p);
        return n.createElement(a, (0, l.A)({ className: m }, i), t);
      };
      var h = a(69247),
        f = a(832),
        v = a(35717),
        y = a(23800);
      const g = (e) => {
        let {
          color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
          i18n: a,
          srLabel: i,
        } = e;
        return n.createElement(
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
          i && n.createElement("title", null, i),
          n.createElement("path", {
            d: "M1.99902 8.6007H13.999V7.4007H1.99902V8.6007Z",
            fill: "currentColor",
          })
        );
      };
      var b = a(81948),
        x = a(39830),
        w = a(95990),
        C = a(48529);
      const $ = "andes-input-stepper",
        N = `${$}__button`,
        k = "small",
        E = "decrement",
        j = "increment",
        L = { [E]: "quitar", [j]: "agregar" };
      var S = (function () {
        const e = (e) => {
          let {
            "aria-controls": t,
            "aria-describedby": a,
            "aria-labelledby": i,
            buttonLabelId: r,
            disabled: s,
            i18n: l,
            id: o,
            onClick: d,
            size: u,
            srLabel: m,
            type: p,
          } = e;
          const h = (0, n.useMemo)(
              () => (u === k ? (p === E ? g : v.A) : p === E ? b.A : y.A),
              [u, p]
            ),
            f = c()(N, `${N}--${p}`, `${N}--${u}`);
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              _,
              { "aria-hidden": !0 },
              n.createElement("span", { id: r }, m || l.pgettext($, L[p]))
            ),
            n.createElement(
              "button",
              {
                type: "button",
                "aria-controls": t,
                "aria-describedby": a,
                "aria-labelledby": i,
                className: f,
                disabled: s,
                onClick: (e) => {
                  s || "function" != typeof d || d(e);
                },
                id: o,
                "data-andes-input-stepper-control": !0,
                "data-andes-input-stepper-control-type": p,
              },
              n.createElement(h, { color: "currentColor" })
            )
          );
        };
        return (e.displayName = "InputStepperButton"), e;
      })();
      var M = (e) => {
        const [t, a] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            e && a(!0);
          }, [e]),
          t
        );
      };
      const T = "error",
        A = "readonly";
      var z = {
          "andes-input-stepperquitar": [null, "Remove"],
          "andes-input-stepperagregar": [null, "Add"],
        },
        q = {
          "andes-input-stepperquitar": [null, "Quitar"],
          "andes-input-stepperagregar": [null, "Agregar"],
        },
        F = {
          "andes-input-stepperquitar": [null, "Excluir"],
          "andes-input-stepperagregar": [null, "Adicionar"],
        };
      const H = (function () {
        const e = (e) => {
          let {
            className: t,
            complementaryText: a,
            decrementButtonProps: i = {},
            defaultValue: r,
            disabled: s = !1,
            formatValue: o = (e) => e,
            helper: d,
            id: u,
            incrementButtonProps: m = {},
            label: p,
            loading: v = !1,
            maxValue: y,
            minValue: g = 0,
            modifier: b,
            onChange: N,
            size: L = "large",
            srLabel: H,
            step: P = 1,
            value: V,
            ref: R,
          } = e;
          const I = (0, n.useMemo)(() => void 0 !== V, []),
            { getThemedComponentClasses: B, themeHash: D } = (0, w.wR)(),
            { i18n: Q } = (0, h.AH)("@andes/input-stepper", {
              en: z,
              "es-AR": q,
              "pt-BR": F,
            }),
            [O, W] = (0, n.useState)(r),
            U = M(v),
            K = L === k,
            Z = b === A,
            G = !K && p,
            X = !Z,
            Y = !K && !s && !Z && d,
            J = () => (I ? V : O || 0),
            ee = () => (P && P > 0 ? P : 1),
            te = !!y && J() + ee() > y,
            ae = J() - ee() < g,
            ne = (e) => {
              const { onClick: t } = i,
                a = J() - ee();
              I || W(a),
                "function" == typeof N && N(a),
                "function" == typeof t && t(e);
            },
            ie = (e) => {
              const { onClick: t } = m,
                a = J() + ee();
              I || W(a),
                "function" == typeof N && N(a),
                "function" == typeof t && t(e);
            },
            re = c()(
              $,
              t,
              { [`${$}--disabled`]: s, [`${$}--${b}`]: b && !s },
              null == B ? void 0 : B("inputStepper")
            ),
            se = c()(`${$}__label`, { [`${$}__label--with-spacing`]: p }),
            le = c()(`${$}__wrapper`, {
              [`${$}__wrapper--${L}`]: L,
              [`${$}__wrapper--fade`]: v,
            }),
            oe = c()(`${$}__container`, { [`${$}__container--animate`]: U }),
            ce = c()(`${$}__content`, {
              [`${$}__content--with-complementary-text`]: a,
            }),
            de = (e) => {
              const t = e === E,
                a = {
                  "aria-controls": `${u}-content`,
                  "aria-describedby": Y ? `${u}-helper` : void 0,
                  "aria-labelledby": `${u}-label ${u}-${e}-text`,
                  buttonLabelId: `${u}-${e}-text`,
                  disabled: !1,
                  i18n: Q,
                  id: `${u}-${t ? "decrement" : "increment"}`,
                  onClick: t ? ne : ie,
                  size: L,
                  srLabel: (t ? i : m).srLabel,
                  type: e,
                };
              return (
                (a.disabled = t
                  ? s || J() <= g || ae
                  : s || (!!y && J() >= y) || te),
                a
              );
            },
            ue = G ? "span" : _;
          return n.createElement(
            "div",
            (0, l.A)(
              { className: re, id: u, ref: R },
              D,
              {
                "data-andes-input-stepper": !0,
                "data-andes-input-stepper-size": L,
              },
              (0, C.i)({
                disabled: s,
                loading: v,
                readOnly: b === A,
                error: b === T,
              })
            ),
            n.createElement(
              "div",
              {
                className: se,
                id: `${u}-label`,
                "data-andes-input-stepper-label": !0,
              },
              p && n.createElement(ue, { "aria-hidden": !!H || void 0 }, p),
              H && n.createElement(_, null, H)
            ),
            n.createElement(
              "div",
              { className: le, "data-andes-input-stepper-input": !0 },
              n.createElement(
                "div",
                { className: oe },
                X && n.createElement(S, de(E)),
                n.createElement(
                  "div",
                  {
                    "aria-atomic": "true",
                    "aria-live": "assertive",
                    className: ce,
                    id: `${u}-content`,
                    role: "alert",
                  },
                  n.createElement(
                    "span",
                    {
                      className: `${$}__value`,
                      "data-andes-input-stepper-value": !0,
                    },
                    o(J()),
                    a &&
                      n.createElement(
                        "span",
                        {
                          className: `${$}__complementary-text`,
                          "data-andes-input-stepper-complementary-text": !0,
                        },
                        " ",
                        a
                      )
                  )
                ),
                X && n.createElement(S, de(j))
              ),
              (v || U) &&
                n.createElement(
                  "div",
                  { className: `${$}__progress-indicator-container` },
                  n.createElement(f.m, {
                    className: `${$}__progress-indicator`,
                    size: K ? "small" : "medium",
                  })
                )
            ),
            Y
              ? n.createElement(
                  "span",
                  {
                    className: `${$}__helper`,
                    id: `${u}-helper`,
                    "data-andes-input-stepper-helper": !0,
                  },
                  T === b &&
                    n.createElement(
                      "span",
                      { className: `${$}__error-icon`, "aria-hidden": !0 },
                      n.createElement(x.A, { color: "white" })
                    ),
                  d
                )
              : null
          );
        };
        return (e.displayName = "InputStepper"), e;
      })();
      var P = H,
        V = a(45664),
        R = a(21979),
        I = a(97987),
        B = a(25925),
        D = a(88460);
      const Q = (0, n.createContext)(void 0),
        O = (0, n.createContext)(void 0),
        W = (0, n.createContext)(void 0),
        U = (0, n.createContext)(void 0),
        K = ({ children: e, contextEvents: t = [] }) =>
          (0, i.jsx)(Q.Provider, { value: t, children: e }),
        Z = ({ children: e, contextRules: t }) =>
          (0, i.jsx)(O.Provider, {
            value: { ...t, delay: t.delay || 0 },
            children: e,
          }),
        G = ({
          children: e,
          contextConfig: t,
          contextStatus: a,
          isWebView: r,
          nativeAppOs: s,
          bottomSheetUrl: l,
        }) => {
          const [o, c] = (0, n.useState)(a?.quantity || 0),
            [d, u] = (0, n.useState)(t?.maximum_quantity),
            [m, p] = (0, n.useState)(t?.minimum_quantity),
            [_, h] = (0, n.useState)(a?.quantity),
            [f, v] = (0, n.useState)(a?.post_login_request),
            y = (0, n.useRef)(a?.quantity);
          (0, n.useEffect)(() => {
            a?.quantity !== y.current &&
              (c(a.quantity), (y.current = a?.quantity));
          }, [a?.quantity]);
          const g = (e) => (c(e), e),
            b = (0, n.useMemo)(
              () => ({
                postLoginRequest: f,
                setPostLoginRequest: v,
                quantity: o,
                previousQuantity: _,
                maxQuantity: d,
                minQuantity: m,
                setMaxQuantity: u,
                setMinQuantity: p,
                setPreviousQuantity: h,
                updateQuantity: g,
                config: t,
                idItem: a?.item_id,
                status: a?.status,
                isWebView: r ?? !1,
                nativeAppOs: s ?? void 0,
                bottomSheetUrl: l ?? void 0,
              }),
              [f, o, _, d, m, t, a?.item_id, a?.status, r, s, l]
            );
          return (0, i.jsx)(W.Provider, { value: b, children: e });
        },
        X = {
          GET: "/a2c",
          POST: "/a2c/add",
          PUT: "/a2c/update",
          DELETE: "/a2c/remove",
        };
      var Y;
      !(function (e) {
        (e.GET = "get"),
          (e.POST = "post"),
          (e.PUT = "put"),
          (e.DELETE = "delete");
      })(Y || (Y = {}));
      const J = async (e) => {
          const {
              body: t,
              headers: a,
              method: n,
              params: i,
              endpoint: s,
              url: l,
            } = e,
            o = { timeout: 5e3 };
          l && (o.baseURL = l);
          const c = (0, r.RestClient)(o),
            d = {
              params: { ...i },
              headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                ...a,
              },
              withCredentials: !0,
              data: t,
              responseType: "json",
            };
          if (void 0 === n || !(n in Y))
            throw new Error(`Unsupported method: ${String(n)}`);
          return (async (e, t, a) => {
            try {
              const n = c[e].bind(c);
              return await n(t, a);
            } catch (e) {
              const t = e.response;
              if (t && 401 === t.status && t.data?.data?.login)
                return (window.location.href = t.data.data.login), null;
              if (t && 301 === t.status && t.data?.location)
                return (window.location.href = t.data.location), null;
              throw e;
            }
          })(Y[n], s || X[n], d);
        },
        ee = "intention",
        te = "success",
        ae = "partial_success",
        ne = "error",
        ie = "remove",
        re = "add",
        se = "redirect",
        le = [te, ne],
        oe = (e, t, a) => {
          if ("function" != typeof window.melidata || !e) return;
          const n = {
              path: `${e.data.base_path}${t}`,
              event_data: { ...e.data.event_data, quantity: a },
            },
            i = e.data.types.includes(t);
          e &&
            i &&
            window.melidata(
              "cleanAndSend",
              ((e) => (le.includes(e) ? "show" : "event"))(t),
              n
            );
        },
        ce = (e = !1, t) => {
          "undefined" != typeof window &&
            (e && window.MobileWebKit
              ? window.MobileWebKit.executeNative({
                  method: "refresh_cart",
                  args: {},
                }).catch((e) => {
                  console.error(
                    "MobileWebKit.executeNative refresh_cart native method error at [cartRefresh]:",
                    e
                  );
                })
              : window.freya &&
                window.freya.emit("cart:refresh", { quantity: t }));
        },
        de = (e, t, a) => e.find((e) => e[t] === a && "request" === e.type),
        ue = async (e, t, a) => {
          const n = [],
            i = async (a) => {
              if (!a) return Promise.resolve();
              const r = ((s = a.after_action ?? ""), e.find((e) => e.id === s));
              var s;
              if (!r) return Promise.resolve();
              const l = { ...r.data, body: { ...r?.data.body, quantity: t } };
              return J(l).then(async (e) => (n.push(e.data), i(r)));
            };
          return i(a).then(() => n);
        },
        me = () => {
          const e = (0, n.useContext)(W);
          if (!e)
            throw new Error(
              "useStatus debe ser usado dentro de un StatusProvider"
            );
          return e;
        },
        pe = () => {
          const e = (0, n.useContext)(Q),
            { isWebView: t } = me(),
            { config: a } = me();
          if (!e)
            throw new Error(
              "useEvents debe ser usado dentro de un EventsProvider"
            );
          let i;
          const r = de(e, "id", "pre_action"),
            s = de(e, "id", "add"),
            l = de(e, "id", "remove") || s;
          return {
            addQuantity: async (n) => {
              if (s) {
                const l = {
                  ...s.data,
                  body: { ...s?.data?.body, quantity: n },
                };
                try {
                  oe(a?.track, ee, n);
                  const o = await J(l);
                  if ((ce(t, o?.data?.tabbar_info?.quantity), r)) {
                    const e = {
                      ...r.data,
                      body: { ...r?.data.body, quantity: n },
                    };
                    await J(e);
                  }
                  let c = te;
                  return (
                    o.data?.cart_status?.quantity !== n && (c = ae),
                    oe(a?.track, c, n),
                    (i = await ue(e, n, s)),
                    { response_a2c: o, responses_after_action: i }
                  );
                } catch (e) {
                  throw (oe(a?.track, ne, n), e);
                }
              }
              throw new Error("No se encontró el evento de agregar al carrito");
            },
            removeQuantity: async (n) => {
              if (l) {
                const s = {
                  ...l.data,
                  body: { ...l?.data?.body, quantity: n },
                };
                try {
                  oe(a?.track, ee, n);
                  const o = await J(s);
                  if ((ce(t, o?.data?.tabbar_info?.quantity), r)) {
                    const e = {
                      ...r.data,
                      body: { ...r?.data.body, quantity: n },
                    };
                    await J(e);
                  }
                  let c = te;
                  return (
                    o.data?.cart_status?.quantity !== n && (c = ae),
                    oe(a?.track, c, n),
                    (i = ue(e, n, l)),
                    { response_a2c: o, responses_after_action: i }
                  );
                } catch (e) {
                  throw (oe(a?.track, ne, n), e);
                }
              }
              throw new Error(
                "No se encontró el evento de remover del carrito"
              );
            },
            redirectURL: (() => {
              const t = e.find(
                (e) => "redirect" === e.id && "redirect" === e.type
              );
              if (t) {
                const { url: e, target: a } = t.data;
                return { url: e, target: a };
              }
            })(),
          };
        },
        _e = () => {
          const e = (0, n.useContext)(O);
          if (!e)
            throw new Error(
              "useRules debe ser usado dentro de un RulesProvider"
            );
          return e;
        },
        he = () => {
          const e = (0, n.useContext)(U);
          if (!e)
            throw new Error(
              "useRequestContext debe ser usado dentro de un RequestProvider"
            );
          return e;
        },
        fe = ({ children: e }) => {
          const { addQuantity: t, removeQuantity: a } = pe(),
            {
              maxQuantity: r,
              minQuantity: s,
              updateQuantity: l,
              previousQuantity: o,
              setPreviousQuantity: c,
              setMaxQuantity: d,
              setMinQuantity: u,
            } = me(),
            m = (0, n.useRef)({
              pendingRequest: null,
              isRequestInProgress: !1,
            }),
            p = async (e, n, i) => {
              const p = async () => {
                m.current.isRequestInProgress = !0;
                const p = "remove" === n ? a : t;
                try {
                  const t = await p(e),
                    a = () => {
                      ((
                        e,
                        t,
                        {
                          updateQuantity: a,
                          previousQuantity: n,
                          setPreviousQuantity: i,
                          setMaxQuantity: r,
                          setMinQuantity: s,
                          maxQuantity: l,
                          minQuantity: o,
                        }
                      ) => {
                        e?.response_a2c?.data?.cart_status?.quantity &&
                          e?.response_a2c?.data?.cart_status?.quantity !== t &&
                          a(e.response_a2c.data.cart_status.quantity),
                          e?.response_a2c?.data?.cart_config
                            ?.maximum_quantity &&
                            e.response_a2c?.data.cart_config
                              .maximum_quantity !== l &&
                            r(e.response_a2c.data.cart_config.maximum_quantity),
                          e?.response_a2c?.data?.cart_config
                            ?.minimum_quantity &&
                            e.response_a2c?.data.cart_config
                              .minimum_quantity !== o &&
                            s(e.response_a2c.data.cart_config.minimum_quantity),
                          e?.response_a2c?.data?.message && a(n || 0),
                          i(e?.response_a2c?.data?.cart_status?.quantity ?? 0);
                      })(t, e, {
                        updateQuantity: l,
                        previousQuantity: o,
                        setPreviousQuantity: c,
                        setMaxQuantity: d,
                        setMinQuantity: u,
                        maxQuantity: r,
                        minQuantity: s,
                      }),
                        i?.(t);
                    };
                  ((e) => {
                    (m.current.isRequestInProgress = !1),
                      m.current.pendingRequest
                        ? (m.current.pendingRequest(),
                          (m.current.pendingRequest = null))
                        : e();
                  })(a);
                } catch (e) {
                  (m.current.isRequestInProgress = !1), l(o || 0), i?.(e);
                }
              };
              m.current.isRequestInProgress
                ? (m.current.pendingRequest = p)
                : await p();
            };
          return (0, i.jsx)(U.Provider, {
            value: {
              handleChangeQuantity: async ({
                newQuantityValue: e,
                isRemove: t,
                onCallback: a,
              }) => (l(e), p(e, t, a)),
            },
            children: e,
          });
        };
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self && self;
      function ve(e) {
        return e &&
          e.__esModule &&
          Object.prototype.hasOwnProperty.call(e, "default")
          ? e.default
          : e;
      }
      var ye,
        ge = { exports: {} };
      (ye = ge),
        (function () {
          var e = {}.hasOwnProperty;
          function t() {
            for (var e = "", t = 0; t < arguments.length; t++) {
              var i = arguments[t];
              i && (e = n(e, a(i)));
            }
            return e;
          }
          function a(a) {
            if ("string" == typeof a || "number" == typeof a) return a;
            if ("object" != typeof a) return "";
            if (Array.isArray(a)) return t.apply(null, a);
            if (
              a.toString !== Object.prototype.toString &&
              !a.toString.toString().includes("[native code]")
            )
              return a.toString();
            var i = "";
            for (var r in a) e.call(a, r) && a[r] && (i = n(i, r));
            return i;
          }
          function n(e, t) {
            return t ? (e ? e + " " + t : e + t) : e;
          }
          ye.exports
            ? ((t.default = t), (ye.exports = t))
            : (window.classNames = t);
        })();
      var be = ve(ge.exports);
      const xe = () =>
          (0, i.jsx)("svg", {
            width: "16",
            height: "15",
            children: (0, i.jsx)("use", { href: "#a2cart-icon" }),
          }),
        we = () =>
          (0, i.jsx)("svg", {
            "aria-hidden": "true",
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            xmlns: "http://www.w3.org/2000/svg",
            "data-testid": "chevron-down-icon",
            children: (0, i.jsx)("path", {
              d: "M4.40175 5.35519L7.99814 8.95157L11.5983 5.35144L12.4468 6.19997L7.99814 10.6486L3.55322 6.20371L4.40175 5.35519Z",
              fill: "#3483fa",
            }),
          }),
        Ce = "add-to-cart__round-button",
        $e = ({
          eventId: e,
          accessibility: t,
          onCallback: a,
          onClick: r,
          withRoundStepper: s,
        }) => {
          const { status: l, quantity: o, isWebView: c, minQuantity: d } = me(),
            { handleChangeQuantity: u } = he(),
            { redirectURL: m } = pe(),
            p = "disabled" === l,
            _ = o > 0 ? "filled" : "idle",
            h = be(Ce, {
              [`${Ce}--disabled`]: p,
              [`${Ce}--filled`]: "filled" === _,
              [`${Ce}--idle`]: "idle" === _,
              [`${Ce}--plus`]: o >= 99,
            }),
            f = (0, n.useCallback)(async () => {
              const t = (Number(o) || 0) + 1;
              await u({
                newQuantityValue: t < d ? d : t,
                isRemove: e,
                onCallback: a,
              });
            }, [u, a, e]),
            v = (0, n.useCallback)(async () => {
              e !== re
                ? e === se &&
                  m?.url &&
                  (c && window.MobileWebKit?.navigation.push
                    ? window.MobileWebKit.navigation.push(m.url).catch(() => {})
                    : (window.location.href = m.url))
                : await f();
            }, [e, f, r]),
            y = (0, n.useMemo)(
              () => (!o || s ? (0, i.jsx)(xe, {}) : o >= 99 ? "99+" : o),
              [o, 99]
            );
          return (0, i.jsx)("button", {
            "aria-label": t,
            className: h,
            onClick: v,
            disabled: p,
            children: y,
          });
        },
        Ne = "add-to-cart__link",
        ke = (e, t, a, n) => {
          if (!t && e) return { convertedText: `${e}`, complementaryText: a };
          const i = n?.find((e) => t === e.quantity);
          return i
            ? {
                convertedText: i.value,
                complementaryText: i.complementary_text || "",
              }
            : { convertedText: `${t}`, complementaryText: a };
        },
        Ee = (e, t, a) => e.replace("{value}", t).replace("{text}", a),
        je = "add-to-cart-list-options",
        Le = ({
          options: e,
          handleChange: t,
          config: a,
          setOpenCustomQuantity: n,
        }) =>
          (0, i.jsx)("section", {
            className: `${je}__container`,
            children: e?.map((e) =>
              (0, i.jsx)(
                "button",
                {
                  className: `${je}__item`,
                  role: "button",
                  onClick: async (i) => {
                    e.custom_quantity
                      ? (i.stopPropagation(), n(e.custom_quantity))
                      : await t(e.value < a.minimum_quantity ? 0 : e.value);
                  },
                  "aria-label": e.text,
                  children: (0, i.jsx)("span", { children: e.text }),
                },
                e.value
              )
            ),
          });
      function Se() {
        return (
          (Se = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var n in a)
                    ({}.hasOwnProperty.call(a, n) && (e[n] = a[n]));
                }
                return e;
              }),
          Se.apply(null, arguments)
        );
      }
      function Me(e) {
        return (
          (Me =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Me(e)
        );
      }
      function Te(e) {
        var t = (function (e, t) {
          if ("object" != Me(e) || !e) return e;
          var a = e[Symbol.toPrimitive];
          if (void 0 !== a) {
            var n = a.call(e, t || "default");
            if ("object" != Me(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Me(t) ? t : t + "";
      }
      function Ae(e, t, a) {
        return (
          (t = Te(t)) in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function ze(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function qe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ze(Object(a), !0).forEach(function (t) {
                Ae(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : ze(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function Fe(e, t) {
        if (null == e) return {};
        var a,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var a = {};
            for (var n in e)
              if ({}.hasOwnProperty.call(e, n)) {
                if (-1 !== t.indexOf(n)) continue;
                a[n] = e[n];
              }
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (n = 0; n < r.length; n++)
            (a = r[n]),
              -1 === t.indexOf(a) &&
                {}.propertyIsEnumerable.call(e, a) &&
                (i[a] = e[a]);
        }
        return i;
      }
      const He = "undefined" != typeof document ? n.useLayoutEffect : () => {};
      var Pe;
      const Ve =
        null !== (Pe = n.useInsertionEffect) && void 0 !== Pe ? Pe : He;
      let Re = new Map();
      function Ie(e, t) {
        if (e === t) return e;
        let a = Re.get(e);
        if (a) return a.forEach((e) => (e.current = t)), t;
        let n = Re.get(t);
        return n ? (n.forEach((t) => (t.current = e)), e) : t;
      }
      function Be(...e) {
        return (...t) => {
          for (let a of e) "function" == typeof a && a(...t);
        };
      }
      "undefined" != typeof FinalizationRegistry &&
        new FinalizationRegistry((e) => {
          Re.delete(e);
        });
      const De = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        Qe = (e) => {
          if (e && "window" in e && e.window === e) return e;
          return De(e).defaultView || window;
        };
      const Oe = (e = document) => e.activeElement;
      function We(e) {
        return e.target;
      }
      function Ue(e) {
        var t,
          a,
          n = "";
        if ("string" == typeof e || "number" == typeof e) n += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++)
              e[t] && (a = Ue(e[t])) && (n && (n += " "), (n += a));
          } else for (a in e) e[a] && (n && (n += " "), (n += a));
        return n;
      }
      function Ke() {
        for (var e, t, a = 0, n = "", i = arguments.length; a < i; a++)
          (e = arguments[a]) && (t = Ue(e)) && (n && (n += " "), (n += t));
        return n;
      }
      function Ze(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let a =
          null === (t = window.navigator.userAgentData) || void 0 === t
            ? void 0
            : t.brands;
        return (
          (Array.isArray(a) && a.some((t) => e.test(t.brand))) ||
          e.test(window.navigator.userAgent)
        );
      }
      function Ge(e) {
        var t;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          e.test(
            (null === (t = window.navigator.userAgentData) || void 0 === t
              ? void 0
              : t.platform) || window.navigator.platform
          )
        );
      }
      function Xe(e) {
        let t = null;
        return () => (null == t && (t = e()), t);
      }
      const Ye = Xe(function () {
          return Ge(/^Mac/i);
        }),
        Je = Xe(function () {
          return Ge(/^iPhone/i);
        }),
        et = Xe(function () {
          return Ge(/^iPad/i) || (Ye() && navigator.maxTouchPoints > 1);
        }),
        tt = Xe(function () {
          return Je() || et();
        });
      Xe(function () {
        return Ye() || tt();
      }),
        Xe(function () {
          return Ze(/AppleWebKit/i) && !at();
        });
      const at = Xe(function () {
          return Ze(/Chrome/i);
        }),
        nt = Xe(function () {
          return Ze(/Android/i);
        });
      function it(e) {
        let t = e;
        return (
          (t.nativeEvent = e),
          (t.isDefaultPrevented = () => t.defaultPrevented),
          (t.isPropagationStopped = () => t.cancelBubble),
          (t.persist = () => {}),
          t
        );
      }
      function rt(e) {
        let t = (0, n.useRef)({ isFocused: !1, observer: null });
        He(() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
          };
        }, []);
        let a = (function (e) {
          const t = (0, n.useRef)(null);
          return (
            Ve(() => {
              t.current = e;
            }, [e]),
            (0, n.useCallback)((...e) => {
              const a = t.current;
              return null == a ? void 0 : a(...e);
            }, [])
          );
        })((t) => {
          null == e || e(t);
        });
        return (0, n.useCallback)(
          (e) => {
            if (
              e.target instanceof HTMLButtonElement ||
              e.target instanceof HTMLInputElement ||
              e.target instanceof HTMLTextAreaElement ||
              e.target instanceof HTMLSelectElement
            ) {
              t.current.isFocused = !0;
              let n = e.target,
                i = (e) => {
                  if (((t.current.isFocused = !1), n.disabled)) {
                    let t = it(e);
                    a(t);
                  }
                  t.current.observer &&
                    (t.current.observer.disconnect(),
                    (t.current.observer = null));
                };
              n.addEventListener("focusout", i, { once: !0 }),
                (t.current.observer = new MutationObserver(() => {
                  if (t.current.isFocused && n.disabled) {
                    var e;
                    null === (e = t.current.observer) ||
                      void 0 === e ||
                      e.disconnect();
                    let a =
                      n === document.activeElement
                        ? null
                        : document.activeElement;
                    n.dispatchEvent(
                      new FocusEvent("blur", { relatedTarget: a })
                    ),
                      n.dispatchEvent(
                        new FocusEvent("focusout", {
                          bubbles: !0,
                          relatedTarget: a,
                        })
                      );
                  }
                })),
                t.current.observer.observe(n, {
                  attributes: !0,
                  attributeFilter: ["disabled"],
                });
            }
          },
          [a]
        );
      }
      Xe(function () {
        return Ze(/Firefox/i);
      });
      let st = null,
        lt = new Set(),
        ot = new Map(),
        ct = !1,
        dt = !1;
      const ut = { Tab: !0, Escape: !0 };
      function mt(e, t) {
        for (let a of lt) a(e, t);
      }
      function pt(e) {
        (ct = !0),
          (function (e) {
            return !(
              e.metaKey ||
              (!Ye() && e.altKey) ||
              e.ctrlKey ||
              "Control" === e.key ||
              "Shift" === e.key ||
              "Meta" === e.key
            );
          })(e) && ((st = "keyboard"), mt("keyboard", e));
      }
      function _t(e) {
        (st = "pointer"),
          ("mousedown" !== e.type && "pointerdown" !== e.type) ||
            ((ct = !0), mt("pointer", e));
      }
      function ht(e) {
        var t;
        (("" === (t = e).pointerType && t.isTrusted) ||
          (nt() && t.pointerType
            ? "click" === t.type && 1 === t.buttons
            : 0 === t.detail && !t.pointerType)) &&
          ((ct = !0), (st = "virtual"));
      }
      function ft(e) {
        e.target !== window &&
          e.target !== document &&
          e.isTrusted &&
          (ct || dt || ((st = "virtual"), mt("virtual", e)),
          (ct = !1),
          (dt = !1));
      }
      function vt() {
        (ct = !1), (dt = !0);
      }
      function yt(e) {
        if (
          "undefined" == typeof window ||
          "undefined" == typeof document ||
          ot.get(Qe(e))
        )
          return;
        const t = Qe(e),
          a = De(e);
        let n = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (ct = !0), n.apply(this, arguments);
        }),
          a.addEventListener("keydown", pt, !0),
          a.addEventListener("keyup", pt, !0),
          a.addEventListener("click", ht, !0),
          t.addEventListener("focus", ft, !0),
          t.addEventListener("blur", vt, !1),
          "undefined" != typeof PointerEvent &&
            (a.addEventListener("pointerdown", _t, !0),
            a.addEventListener("pointermove", _t, !0),
            a.addEventListener("pointerup", _t, !0)),
          t.addEventListener(
            "beforeunload",
            () => {
              gt(e);
            },
            { once: !0 }
          ),
          ot.set(t, { focus: n });
      }
      const gt = (e, t) => {
        const a = Qe(e),
          n = De(e);
        t && n.removeEventListener("DOMContentLoaded", t),
          ot.has(a) &&
            ((a.HTMLElement.prototype.focus = ot.get(a).focus),
            n.removeEventListener("keydown", pt, !0),
            n.removeEventListener("keyup", pt, !0),
            n.removeEventListener("click", ht, !0),
            a.removeEventListener("focus", ft, !0),
            a.removeEventListener("blur", vt, !1),
            "undefined" != typeof PointerEvent &&
              (n.removeEventListener("pointerdown", _t, !0),
              n.removeEventListener("pointermove", _t, !0),
              n.removeEventListener("pointerup", _t, !0)),
            ot.delete(a));
      };
      function bt() {
        return "pointer" !== st;
      }
      "undefined" != typeof document &&
        (function (e) {
          const t = De(e);
          let a;
          "loading" !== t.readyState
            ? yt(e)
            : ((a = () => {
                yt(e);
              }),
              t.addEventListener("DOMContentLoaded", a));
        })();
      const xt = new Set([
        "checkbox",
        "radio",
        "range",
        "color",
        "file",
        "image",
        "button",
        "submit",
        "reset",
      ]);
      function wt(e, t, a) {
        yt(),
          (0, n.useEffect)(() => {
            let t = (t, n) => {
              (function (e, t, a) {
                let n = De(null == a ? void 0 : a.target);
                const i =
                    "undefined" != typeof window
                      ? Qe(null == a ? void 0 : a.target).HTMLInputElement
                      : HTMLInputElement,
                  r =
                    "undefined" != typeof window
                      ? Qe(null == a ? void 0 : a.target).HTMLTextAreaElement
                      : HTMLTextAreaElement,
                  s =
                    "undefined" != typeof window
                      ? Qe(null == a ? void 0 : a.target).HTMLElement
                      : HTMLElement,
                  l =
                    "undefined" != typeof window
                      ? Qe(null == a ? void 0 : a.target).KeyboardEvent
                      : KeyboardEvent;
                return !(
                  (e =
                    e ||
                    (n.activeElement instanceof i &&
                      !xt.has(n.activeElement.type)) ||
                    n.activeElement instanceof r ||
                    (n.activeElement instanceof s &&
                      n.activeElement.isContentEditable)) &&
                  "keyboard" === t &&
                  a instanceof l &&
                  !ut[a.key]
                );
              })(!!(null == a ? void 0 : a.isTextInput), t, n) && e(bt());
            };
            return (
              lt.add(t),
              () => {
                lt.delete(t);
              }
            );
          }, t);
      }
      function Ct(e) {
        let {
            isDisabled: t,
            onBlurWithin: a,
            onFocusWithin: i,
            onFocusWithinChange: r,
          } = e,
          s = (0, n.useRef)({ isFocusWithin: !1 }),
          { addGlobalListener: l, removeAllGlobalListeners: o } = (function () {
            let e = (0, n.useRef)(new Map()),
              t = (0, n.useCallback)((t, a, n, i) => {
                let r = (null == i ? void 0 : i.once)
                  ? (...t) => {
                      e.current.delete(n), n(...t);
                    }
                  : n;
                e.current.set(n, {
                  type: a,
                  eventTarget: t,
                  fn: r,
                  options: i,
                }),
                  t.addEventListener(a, r, i);
              }, []),
              a = (0, n.useCallback)((t, a, n, i) => {
                var r;
                let s =
                  (null === (r = e.current.get(n)) || void 0 === r
                    ? void 0
                    : r.fn) || n;
                t.removeEventListener(a, s, i), e.current.delete(n);
              }, []),
              i = (0, n.useCallback)(() => {
                e.current.forEach((e, t) => {
                  a(e.eventTarget, e.type, t, e.options);
                });
              }, [a]);
            return (
              (0, n.useEffect)(() => i, [i]),
              {
                addGlobalListener: t,
                removeGlobalListener: a,
                removeAllGlobalListeners: i,
              }
            );
          })(),
          c = (0, n.useCallback)(
            (e) => {
              e.currentTarget.contains(e.target) &&
                s.current.isFocusWithin &&
                !e.currentTarget.contains(e.relatedTarget) &&
                ((s.current.isFocusWithin = !1), o(), a && a(e), r && r(!1));
            },
            [a, r, s, o]
          ),
          d = rt(c),
          u = (0, n.useCallback)(
            (e) => {
              if (!e.currentTarget.contains(e.target)) return;
              const t = De(e.target),
                a = Oe(t);
              if (!s.current.isFocusWithin && a === We(e.nativeEvent)) {
                i && i(e), r && r(!0), (s.current.isFocusWithin = !0), d(e);
                let a = e.currentTarget;
                l(
                  t,
                  "focus",
                  (e) => {
                    if (
                      s.current.isFocusWithin &&
                      ((n = a), !((i = e.target) && n && n.contains(i)))
                    ) {
                      let n = new t.defaultView.FocusEvent("blur", {
                        relatedTarget: e.target,
                      });
                      !(function (e, t) {
                        Object.defineProperty(e, "target", { value: t }),
                          Object.defineProperty(e, "currentTarget", {
                            value: t,
                          });
                      })(n, a);
                      let i = it(n);
                      c(i);
                    }
                    var n, i;
                  },
                  { capture: !0 }
                );
              }
            },
            [i, r, d, l, c]
          );
        return t
          ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
          : { focusWithinProps: { onFocus: u, onBlur: c } };
      }
      function $t(e = {}) {
        let { autoFocus: t = !1, isTextInput: a, within: i } = e,
          r = (0, n.useRef)({ isFocused: !1, isFocusVisible: t || bt() }),
          [s, l] = (0, n.useState)(!1),
          [o, c] = (0, n.useState)(
            () => r.current.isFocused && r.current.isFocusVisible
          ),
          d = (0, n.useCallback)(
            () => c(r.current.isFocused && r.current.isFocusVisible),
            []
          ),
          u = (0, n.useCallback)(
            (e) => {
              (r.current.isFocused = e), l(e), d();
            },
            [d]
          );
        wt(
          (e) => {
            (r.current.isFocusVisible = e), d();
          },
          [],
          { isTextInput: a }
        );
        let { focusProps: m } = (function (e) {
            let { isDisabled: t, onFocus: a, onBlur: i, onFocusChange: r } = e;
            const s = (0, n.useCallback)(
                (e) => {
                  if (e.target === e.currentTarget)
                    return i && i(e), r && r(!1), !0;
                },
                [i, r]
              ),
              l = rt(s),
              o = (0, n.useCallback)(
                (e) => {
                  const t = De(e.target),
                    n = t ? Oe(t) : Oe();
                  e.target === e.currentTarget &&
                    n === We(e.nativeEvent) &&
                    (a && a(e), r && r(!0), l(e));
                },
                [r, a, l]
              );
            return {
              focusProps: {
                onFocus: !t && (a || r || i) ? o : void 0,
                onBlur: t || (!i && !r) ? void 0 : s,
              },
            };
          })({ isDisabled: i, onFocusChange: u }),
          { focusWithinProps: p } = Ct({
            isDisabled: !i,
            onFocusWithinChange: u,
          });
        return { isFocused: s, isFocusVisible: o, focusProps: i ? p : m };
      }
      function Nt(e) {
        let { children: t, focusClass: a, focusRingClass: i } = e,
          { isFocused: r, isFocusVisible: s, focusProps: l } = $t(e),
          o = n.Children.only(t);
        return n.cloneElement(
          o,
          (function (...e) {
            let t = { ...e[0] };
            for (let a = 1; a < e.length; a++) {
              let n = e[a];
              for (let e in n) {
                let a = t[e],
                  i = n[e];
                "function" == typeof a &&
                "function" == typeof i &&
                "o" === e[0] &&
                "n" === e[1] &&
                e.charCodeAt(2) >= 65 &&
                e.charCodeAt(2) <= 90
                  ? (t[e] = Be(a, i))
                  : ("className" !== e && "UNSAFE_className" !== e) ||
                    "string" != typeof a ||
                    "string" != typeof i
                  ? "id" === e && a && i
                    ? (t.id = Ie(a, i))
                    : (t[e] = void 0 !== i ? i : a)
                  : (t[e] = Ke(a, i));
              }
            }
            return t;
          })(o.props, { ...l, className: Ke({ [a || ""]: r, [i || ""]: s }) })
        );
      }
      const kt = ["children", "component"];
      var Et = (e) => {
        let { children: t, component: a = "span" } = e,
          i = Fe(e, kt);
        return n.createElement(
          a,
          Se({ className: "andes-visually-hidden" }, i),
          t
        );
      };
      const jt = (e) => {
          let {
            color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
            i18n: a,
            srLabel: i,
          } = e;
          return n.createElement(
            "svg",
            {
              "aria-hidden": i ? void 0 : !i,
              "aria-label": i || void 0,
              role: i ? "img" : void 0,
              color: t,
              width: "12",
              height: "12",
              viewBox: "0 0 12 12",
              fill: "currentColor",
            },
            i && n.createElement("title", null, i),
            n.createElement("path", {
              d: "M5.09102 7.04674L8.5235 3.61426L9.29489 4.38565L5.09102 8.58952L2.70532 6.20383L3.47671 5.43244L5.09102 7.04674Z",
              fill: "currentColor",
            })
          );
        },
        Lt = (e) => {
          let {
            color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
            i18n: a,
            srLabel: i,
          } = e;
          return n.createElement(
            "svg",
            {
              "aria-hidden": i ? void 0 : !i,
              "aria-label": i || void 0,
              role: i ? "img" : void 0,
              color: t,
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "currentColor",
            },
            i && n.createElement("title", null, i),
            n.createElement("path", {
              d: "M8.48495 11.7447L14.2058 6.02393L15.4914 7.30957L8.48495 14.316L4.50879 10.3399L5.79444 9.05423L8.48495 11.7447Z",
              fill: "currentColor",
            })
          );
        },
        St = (0, n.createContext)({}),
        Mt = () => (0, n.useContext)(St),
        Tt = (e) => {
          let {
            color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
            i18n: a,
            srLabel: i,
          } = e;
          return n.createElement(
            "svg",
            {
              "aria-hidden": i ? void 0 : !i,
              "aria-label": i || void 0,
              role: i ? "img" : void 0,
              color: t,
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "currentColor",
            },
            i && n.createElement("title", null, i),
            n.createElement("path", {
              d: "M13.4545 5.81824H10.5454L10.909 13.8182H13.0909L13.4545 5.81824Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              d: "M12 15.2728C12.8033 15.2728 13.4545 15.924 13.4545 16.7273C13.4545 17.5307 12.8033 18.1819 12 18.1819C11.1966 18.1819 10.5454 17.5307 10.5454 16.7273C10.5454 15.924 11.1966 15.2728 12 15.2728Z",
              fill: "currentColor",
            })
          );
        },
        At = (e) => {
          let {
            color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
            i18n: a,
            srLabel: i,
          } = e;
          return n.createElement(
            "svg",
            {
              "aria-hidden": i ? void 0 : !i,
              "aria-label": i || void 0,
              role: i ? "img" : void 0,
              color: t,
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "currentColor",
            },
            i && n.createElement("title", null, i),
            n.createElement("path", {
              d: "M15.3906 18.2169V16.7169H13.0937V9.63989H9.24068V11.1399H10.9062V16.7169H8.70337V18.2169H15.3906Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              d: "M13.1181 6.87168C13.1181 7.58447 12.5403 8.1623 11.8275 8.1623C11.1147 8.1623 10.5369 7.58447 10.5369 6.87168C10.5369 6.15889 11.1147 5.58105 11.8275 5.58105C12.5403 5.58105 13.1181 6.15889 13.1181 6.87168Z",
              fill: "currentColor",
            })
          );
        },
        zt = (e) => {
          let {
            color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
            i18n: a,
            srLabel: i,
          } = e;
          return n.createElement(
            "svg",
            {
              "aria-hidden": i ? void 0 : !i,
              "aria-label": i || void 0,
              role: i ? "img" : void 0,
              color: t,
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "currentColor",
            },
            i && n.createElement("title", null, i),
            n.createElement("path", {
              d: "M13.4545 5.81824H10.5454L10.909 13.8182H13.0909L13.4545 5.81824Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              d: "M12 15.2728C12.8033 15.2728 13.4545 15.924 13.4545 16.7273C13.4545 17.5307 12.8033 18.1819 12 18.1819C11.1966 18.1819 10.5454 17.5307 10.5454 16.7273C10.5454 15.924 11.1966 15.2728 12 15.2728Z",
              fill: "currentColor",
            })
          );
        },
        qt = (e) => {
          let {
            color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
            i18n: a,
            srLabel: i,
          } = e;
          return n.createElement(
            "svg",
            {
              "aria-hidden": i ? void 0 : !i,
              "aria-label": i || void 0,
              role: i ? "img" : void 0,
              color: t,
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "currentColor",
            },
            i && n.createElement("title", null, i),
            n.createElement("path", {
              d: "M10.1818 14.0936L17.0468 7.22864L18.5895 8.77142L10.1818 17.1792L5.4104 12.4078L6.95318 10.865L10.1818 14.0936Z",
              fill: "currentColor",
            })
          );
        },
        Ft = "andes-badge",
        Ht = ["accent", "green", "orange", "red", "gray"];
      var Pt = (e) => {
        let { color: t } = e;
        switch (t) {
          case "informative":
            return "accent";
          case "neutral":
            return "gray";
          case "caution":
            return "orange";
          case "negative":
            return "red";
          case "positive":
            return "green";
          default:
            return t || "accent";
        }
      };
      const Vt = [
          "className",
          "color",
          "id",
          "size",
          "srLabel",
          "ref",
          "backgroundType",
          "customVariant",
        ],
        Rt = (function () {
          const e = (e) => {
            const {
                className: t,
                color: a,
                id: i,
                size: r = "large",
                srLabel: s,
                ref: l,
                backgroundType: o,
                customVariant: c,
              } = e,
              d = Fe(e, Vt),
              u = qe({ customVariant: c, size: r }, e),
              m = (0, h.Bi)(i),
              { getThemedComponentClasses: p, themeHash: _ } = Mt();
            "string" == typeof a &&
              (0, D.A)(
                !(0, I.A)(Ht, a),
                "This color will be deprecated in a future major version,\n please use 'caution' | 'informative' | 'inverted' | 'negative' | 'neutral' | 'positive'"
              );
            const f = Pt({ color: a }),
              v = qe(
                {
                  "data-andes-badge": !0,
                  "data-andes-badge-type": "icon",
                  "data-andes-badge-size": r,
                },
                _
              ),
              y = be(
                Ft,
                `${Ft}--pill`,
                `${Ft}--${f}`,
                t,
                `${Ft}--pill-icon`,
                {
                  [`${Ft}--${r}`]: r,
                  [`${Ft}--color-on-background`]: "complexBackground" === o,
                },
                null == p ? void 0 : p("badge", u)
              );
            return n.createElement(
              "div",
              Se({ className: y, id: m, ref: l }, d, v),
              s && n.createElement(Et, null, s),
              n.createElement(
                "div",
                { "aria-hidden": "true", className: `${Ft}__icon` },
                ((e) => {
                  const t = {
                    className: `${Ft}__icon-inner`,
                    color: "currentColor",
                  };
                  return {
                    accent: n.createElement(
                      At,
                      Se({}, t, { key: "badge-info" })
                    ),
                    green: n.createElement(
                      qt,
                      Se({}, t, { key: "badge-success" })
                    ),
                    orange: n.createElement(
                      Tt,
                      Se({}, t, { key: "badge-warning" })
                    ),
                    red: n.createElement(zt, Se({}, t, { key: "badge-error" })),
                  }[e];
                })(f)
              )
            );
          };
          return (e.displayName = "PillIcon"), e;
        })();
      var It = Rt;
      const Bt = "andes-helper",
        Dt = "caution",
        Qt = "error",
        Ot = [Dt, Qt],
        Wt = { [`${Dt}`]: "caution", [`${Qt}`]: "negative" };
      var Ut = {
          "andes-helperPrecaución": [null, "Warning"],
          "andes-helperError": [null, "Error"],
        },
        Kt = {
          "andes-helperPrecaución": [null, "Precaución"],
          "andes-helperError": [null, "Error"],
        },
        Zt = {
          "andes-helperPrecaución": [null, "Alerta"],
          "andes-helperError": [null, "Erro"],
        };
      const Gt = [
          "andesDataAttributes",
          "children",
          "className",
          "id",
          "modifier",
        ],
        Xt = (function () {
          const e = (e) => {
            const {
                andesDataAttributes: t = {},
                children: a,
                className: i,
                id: r,
                modifier: s,
              } = e,
              l = Fe(e, Gt),
              o = (0, h.Bi)(r),
              { getThemedComponentClasses: c, themeHash: d } = Mt(),
              { i18n: u } = (0, h.AH)("@andes/form", {
                en: Ut,
                "es-AR": Kt,
                "pt-BR": Zt,
              }),
              m = (0, I.A)(Ot, s || ""),
              p = be(Bt, i, null == c ? void 0 : c("helper"), {
                [`${Bt}--${s}`]: s,
              });
            return n.createElement(
              "div",
              Se(
                { className: p, id: o },
                l,
                d,
                t,
                { "data-andes-helper": !0 },
                (0, C.i)({ error: "error" === s, caution: "caution" === s })
              ),
              m &&
                n.createElement(
                  "div",
                  { className: `${Bt}__badge`, "data-andes-helper-badge": !0 },
                  n.createElement(It, {
                    color: s ? Wt[s] : void 0,
                    size: "xsmall",
                    srLabel: u.pgettext(
                      Bt,
                      "error" === s ? "Error" : "Precaución"
                    ),
                  })
                ),
              n.createElement(
                "span",
                { className: `${Bt}__label`, "data-andes-helper-label": !0 },
                a
              )
            );
          };
          return (e.displayName = "Helper"), e;
        })();
      var Yt = Xt;
      const Jt = (e) => {
          let {
            color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
            i18n: a,
            srLabel: i,
          } = e;
          return n.createElement(
            "svg",
            {
              "aria-hidden": i ? void 0 : !i,
              "aria-label": i || void 0,
              role: i ? "img" : void 0,
              color: t,
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "currentColor",
            },
            i && n.createElement("title", null, i),
            n.createElement("path", {
              d: "M4.35156 5.19496L9.15406 9.99746L4.35156 14.8L5.20009 15.6485L10.0026 10.846L14.7963 15.6397L15.6449 14.7912L10.8511 9.99746L15.6449 5.20371L14.7963 4.35518L10.0026 9.14894L5.20009 4.34644L4.35156 5.19496Z",
              fill: "currentColor",
            })
          );
        },
        ea = "andes-progress-indicator-circular",
        ta = `${ea}__circle`,
        aa = ["blue", "white"];
      var na = (e) => {
        let { labelId: t, srLabel: a } = e;
        return n.createElement(
          "div",
          {
            "aria-label": a,
            "aria-labelledby": a ? void 0 : t,
            role: "progressbar",
          },
          n.createElement(
            "svg",
            {
              className: `${ea}__svg`,
              "aria-hidden": "true",
              viewBox: "0 0 50 50",
              "data-andes-progress-indicator-circular-icon": !0,
            },
            n.createElement("circle", {
              className: ta,
              cx: "50%",
              cy: "50%",
              r: "20",
              fill: "none",
            })
          )
        );
      };
      var ia = (e) => {
        let {
          continuous: t = !1,
          id: a,
          labelId: i,
          srLabel: r,
          value: s = 0,
        } = e;
        const l = 124,
          o = (l * s) / 100,
          c = be(ta, { [`${ta}--continuous`]: t });
        return n.createElement(
          "div",
          {
            role: "progressbar",
            "aria-valuenow": s,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-label": r,
            "aria-labelledby": r ? void 0 : i,
          },
          n.createElement(
            "svg",
            {
              className: `${ea}__svg`,
              "aria-hidden": "true",
              viewBox: "0 0 50 50",
              "data-andes-progress-indicator-circular-icon": !0,
            },
            n.createElement("circle", {
              className: `${ta}-bg`,
              cx: "25",
              cy: "25",
              r: "20",
              fill: "none",
            }),
            n.createElement("circle", {
              key: a,
              className: c,
              strokeDasharray: l,
              strokeDashoffset: "" + (l - Math.min(o, l)),
              cx: "25",
              cy: "25",
              r: "20",
              fill: "none",
            })
          )
        );
      };
      var ra = (e) => {
        let { color: t } = e;
        switch (
          ("string" == typeof t &&
            (0, D.A)(
              !aa.includes(t),
              "This color will be deprecated in a future major version. \nPlease use 'basic' | 'inverse' on <ProgressIndicatorCircular> instead"
            ),
          t)
        ) {
          case "blue":
            return "basic";
          case "white":
            return "inverse";
          default:
            return t || "basic";
        }
      };
      const sa = ["ref"],
        la = (function () {
          const e = (e) => {
            let { ref: t } = e,
              a = Fe(e, sa);
            const {
                id: i,
                size: r = "medium",
                color: s = "basic",
                type: l = "indeterminate",
                className: o,
                label: c,
                value: d,
                children: u,
                continuous: m = !1,
                srLabel: p,
                srAnnouncement: _,
                ariaLabelledBy: f,
                modifier: v,
              } = a,
              y = (0, h.Bi)(i),
              { getThemedComponentClasses: g, themeHash: b } = Mt(),
              x = f || (c && `${i}__label`),
              w = (0, B.A)(),
              C = ra({ color: s }),
              $ = be(
                ea,
                o,
                {
                  [`${ea}--${l}`]: l,
                  [`${ea}--${r}`]: r,
                  [`${ea}--${C}`]: C,
                  [`${ea}--${v}`]: v,
                },
                null == g ? void 0 : g("progressIndicator")
              );
            return n.createElement(
              "div",
              Se(
                {
                  ref: t,
                  className: $,
                  "data-andes-progress-indicator-circular": !0,
                  "data-andes-progress-indicator-circular-size": r,
                  "data-andes-progress-indicator-circular-type": l,
                },
                b
              ),
              n.createElement(
                "div",
                { className: `${ea}__container` },
                n.createElement(
                  "div",
                  { className: `${ea}__progress` },
                  _ &&
                    n.createElement(
                      Et,
                      { role: "status", "aria-live": "polite" },
                      w && _
                    ),
                  (() => {
                    const e = { srLabel: p, labelId: x };
                    if ("determinate" === l) {
                      const t = qe({ value: d, continuous: m, id: y }, e);
                      return n.createElement(ia, t);
                    }
                    return n.createElement(na, e);
                  })(),
                  u &&
                    n.createElement("div", { className: `${ea}__content` }, u)
                ),
                c &&
                  n.createElement(
                    "span",
                    { className: `${ea}__label`, id: x },
                    c
                  )
              )
            );
          };
          return (e.displayName = "ProgressIndicatorCircular"), e;
        })();
      var oa = la,
        ca = { exports: {} };
      !(function (e, t) {
        !(function (e, t) {
          var a,
            n,
            i =
              "function" == typeof Map
                ? new Map()
                : ((a = []),
                  (n = []),
                  {
                    has: function (e) {
                      return a.indexOf(e) > -1;
                    },
                    get: function (e) {
                      return n[a.indexOf(e)];
                    },
                    set: function (e, t) {
                      -1 === a.indexOf(e) && (a.push(e), n.push(t));
                    },
                    delete: function (e) {
                      var t = a.indexOf(e);
                      t > -1 && (a.splice(t, 1), n.splice(t, 1));
                    },
                  }),
            r = function (e) {
              return new Event(e, { bubbles: !0 });
            };
          try {
            new Event("test");
          } catch (e) {
            r = function (e) {
              var t = document.createEvent("Event");
              return t.initEvent(e, !0, !1), t;
            };
          }
          function s(e) {
            if (e && e.nodeName && "TEXTAREA" === e.nodeName && !i.has(e)) {
              var t = null,
                a = null,
                n = null,
                s = function () {
                  e.clientWidth !== a && m();
                },
                l = function (t) {
                  window.removeEventListener("resize", s, !1),
                    e.removeEventListener("input", m, !1),
                    e.removeEventListener("keyup", m, !1),
                    e.removeEventListener("autosize:destroy", l, !1),
                    e.removeEventListener("autosize:update", m, !1),
                    Object.keys(t).forEach(function (a) {
                      e.style[a] = t[a];
                    }),
                    i.delete(e);
                }.bind(e, {
                  height: e.style.height,
                  resize: e.style.resize,
                  overflowY: e.style.overflowY,
                  overflowX: e.style.overflowX,
                  wordWrap: e.style.wordWrap,
                });
              e.addEventListener("autosize:destroy", l, !1),
                "onpropertychange" in e &&
                  "oninput" in e &&
                  e.addEventListener("keyup", m, !1),
                window.addEventListener("resize", s, !1),
                e.addEventListener("input", m, !1),
                e.addEventListener("autosize:update", m, !1),
                (e.style.overflowX = "hidden"),
                (e.style.wordWrap = "break-word"),
                i.set(e, { destroy: l, update: m }),
                o();
            }
            function o() {
              var a = window.getComputedStyle(e, null);
              "vertical" === a.resize
                ? (e.style.resize = "none")
                : "both" === a.resize && (e.style.resize = "horizontal"),
                (t =
                  "content-box" === a.boxSizing
                    ? -(parseFloat(a.paddingTop) + parseFloat(a.paddingBottom))
                    : parseFloat(a.borderTopWidth) +
                      parseFloat(a.borderBottomWidth)),
                isNaN(t) && (t = 0),
                m();
            }
            function c(t) {
              var a = e.style.width;
              (e.style.width = "0px"),
                e.offsetWidth,
                (e.style.width = a),
                (e.style.overflowY = t);
            }
            function d(e) {
              for (
                var t = [];
                e && e.parentNode && e.parentNode instanceof Element;

              )
                e.parentNode.scrollTop &&
                  t.push({
                    node: e.parentNode,
                    scrollTop: e.parentNode.scrollTop,
                  }),
                  (e = e.parentNode);
              return t;
            }
            function u() {
              if (0 !== e.scrollHeight) {
                var n = d(e),
                  i =
                    document.documentElement &&
                    document.documentElement.scrollTop;
                (e.style.height = ""),
                  (e.style.height = e.scrollHeight + t + "px"),
                  (a = e.clientWidth),
                  n.forEach(function (e) {
                    e.node.scrollTop = e.scrollTop;
                  }),
                  i && (document.documentElement.scrollTop = i);
              }
            }
            function m() {
              u();
              var t = Math.round(parseFloat(e.style.height)),
                a = window.getComputedStyle(e, null),
                i =
                  "content-box" === a.boxSizing
                    ? Math.round(parseFloat(a.height))
                    : e.offsetHeight;
              if (
                (i < t
                  ? "hidden" === a.overflowY &&
                    (c("scroll"),
                    u(),
                    (i =
                      "content-box" === a.boxSizing
                        ? Math.round(
                            parseFloat(window.getComputedStyle(e, null).height)
                          )
                        : e.offsetHeight))
                  : "hidden" !== a.overflowY &&
                    (c("hidden"),
                    u(),
                    (i =
                      "content-box" === a.boxSizing
                        ? Math.round(
                            parseFloat(window.getComputedStyle(e, null).height)
                          )
                        : e.offsetHeight)),
                n !== i)
              ) {
                n = i;
                var s = r("autosize:resized");
                try {
                  e.dispatchEvent(s);
                } catch (e) {}
              }
            }
          }
          function l(e) {
            var t = i.get(e);
            t && t.destroy();
          }
          function o(e) {
            var t = i.get(e);
            t && t.update();
          }
          var c = null;
          "undefined" == typeof window ||
          "function" != typeof window.getComputedStyle
            ? (((c = function (e) {
                return e;
              }).destroy = function (e) {
                return e;
              }),
              (c.update = function (e) {
                return e;
              }))
            : (((c = function (e, t) {
                return (
                  e &&
                    Array.prototype.forEach.call(
                      e.length ? e : [e],
                      function (e) {
                        return s(e);
                      }
                    ),
                  e
                );
              }).destroy = function (e) {
                return (
                  e && Array.prototype.forEach.call(e.length ? e : [e], l), e
                );
              }),
              (c.update = function (e) {
                return (
                  e && Array.prototype.forEach.call(e.length ? e : [e], o), e
                );
              })),
            (t.default = c),
            (e.exports = t.default);
        })(e, t);
      })(ca, ca.exports);
      var da = ve(ca.exports);
      const ua = (e) => {
        let {
          color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
          i18n: a,
          srLabel: i,
        } = e;
        return n.createElement(
          "svg",
          {
            "aria-hidden": i ? void 0 : !i,
            "aria-label": i || void 0,
            role: i ? "img" : void 0,
            color: t,
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "currentColor",
          },
          i && n.createElement("title", null, i),
          n.createElement("path", {
            d: "M2.69067 3.30939L3.30939 2.69067L6.00003 5.38131L8.69067 2.69067L9.30939 3.30939L6.61875 6.00003L9.30939 8.69067L8.69067 9.30939L6.00003 6.61875L3.30939 9.30939L2.69067 8.69067L5.38131 6.00003L2.69067 3.30939Z",
            fill: "currentColor",
          })
        );
      };
      var ma = {
          "andes-textfield{0} caracteres restantes": [
            null,
            "{0} remaining characters",
          ],
          "andes-textfieldMaximo {0} caracteres": [
            null,
            "Maximum of {0} characters",
          ],
          "andes-textfieldCampo de texto valido": [null, "Valid text field"],
          "andes-textfieldCampo de texto procesando": [
            null,
            "Text field processing",
          ],
          "andes-textfieldBorrar": [null, "Remove"],
          "andes-textfieldDígito {0}": [null, "Digit {0}"],
          "andes-textfieldMostrar contraseña": [null, "Show Password"],
        },
        pa = {
          "andes-textfield{0} caracteres restantes": [
            null,
            "{0} caracteres restantes",
          ],
          "andes-textfieldMaximo {0} caracteres": [
            null,
            "Máximo {0} caracteres",
          ],
          "andes-textfieldCampo de texto valido": [
            null,
            "Campo de texto valido",
          ],
          "andes-textfieldCampo de texto procesando": [
            null,
            "Campo de texto procesando",
          ],
          "andes-textfieldBorrar": [null, "Borrar"],
          "andes-textfieldDígito {0}": [null, "Dígito {0}"],
          "andes-textfieldMostrar contraseña": [null, "Mostrar Contraseña"],
        },
        _a = {
          "andes-textfield{0} caracteres restantes": [
            null,
            "{0} caracteres restantes",
          ],
          "andes-textfieldMaximo {0} caracteres": [
            null,
            "Máximo de {0} caracteres",
          ],
          "andes-textfieldCampo de texto valido": [
            null,
            "Campo de texto válido",
          ],
          "andes-textfieldCampo de texto procesando": [
            null,
            "Processamento de campo de texto",
          ],
          "andes-textfieldBorrar": [null, "Excluir"],
          "andes-textfieldDígito {0}": [null, "Dígito {0}"],
          "andes-textfieldMostrar contraseña": [null, "Mostrar Senha"],
        };
      const ha = "andes-form-control",
        fa = "andes-textfield";
      var va = (e) => {
        let { notificationsLabel: t, size: a = "large" } = e;
        const i = (0, B.A)();
        return n.createElement(
          "span",
          { role: "status", "aria-live": "polite" },
          n.createElement(Et, null, i && t),
          n.createElement(
            "span",
            { className: `${ha}__validated-icon` },
            "large" === a
              ? n.createElement(Lt, { color: "currentColor" })
              : n.createElement(jt, { color: "currentColor" })
          )
        );
      };
      n.Component;
      var ya = (e) => {
        let {
          namespace: t,
          onClick: a,
          "aria-label": i = "",
          size: r = "large",
        } = e;
        return n.createElement(
          "button",
          {
            "aria-label": i,
            className: `${t}__clear-icon`,
            onClick: a,
            onMouseDown: (e) => e.preventDefault(),
            type: "button",
          },
          "large" === r
            ? n.createElement(Jt, { color: "currentColor" })
            : n.createElement(ua, { color: "currentColor" })
        );
      };
      const ga = ["warning"],
        ba = (e) => {
          switch (
            ((0, D.A)(
              !e || ("string" == typeof e && !ga.includes(e)),
              "`warning` modifier will be deprecated in a future major version.\nPlease use `caution` instead."
            ),
            e)
          ) {
            case "warning":
            case "caution":
              return "caution";
            case "error":
              return "error";
            default:
              return;
          }
        },
        xa = [
          "centered",
          "children",
          "className",
          "clear",
          "countdown",
          "disabled",
          "defaultValue",
          "embeddedChildren",
          "focus",
          "helper",
          "id",
          "innerRef",
          "i18n",
          "inputProps",
          "label",
          "maxLength",
          "modifier",
          "multiline",
          "numeric",
          "onChange",
          "placeholder",
          "prefix",
          "rows",
          "select",
          "size",
          "split",
          "srLabel",
          "suffix",
          "value",
          "autoFocus",
          "andesDataAttributes",
        ],
        wa = { target: { value: "" } };
      class Ca extends n.Component {
        constructor(e) {
          super(e);
          const t = String(e.defaultValue || e.value || "");
          (this.state = {
            height: "auto",
            fieldRef: null,
            countdown: t.length,
            focused: e.autoFocus || !1,
            prevProps: e,
          }),
            (this.isUncontrolledValue = void 0 === e.value),
            (this.setField = this.setField.bind(this)),
            (this.setRef = this.setRef.bind(this)),
            (this.onBlurHandler = this.onBlurHandler.bind(this)),
            (this.onFocusHandler = this.onFocusHandler.bind(this)),
            (this.onInputHandler = this.onInputHandler.bind(this)),
            (this.onChangeHandler = this.onChangeHandler.bind(this)),
            (this.onClearHandler = this.onClearHandler.bind(this));
        }
        componentDidMount() {
          const {
              multiline: e = !1,
              focus: t = !1,
              select: a = !1,
              autoFocus: n = !1,
            } = this.props,
            { field: i } = this;
          e && i && da(i),
            (t || n) && (0, R.w)(i),
            a && (null == i || i.select());
        }
        static getDerivedStateFromProps(e, t) {
          const { fieldRef: a, prevProps: n } = t,
            {
              multiline: i = !1,
              value: r,
              focus: s = !1,
              select: l = !1,
              countdown: o = !1,
            } = e,
            { isUncontrolledValue: c } = t,
            d = ["multiline", "focus", "select", "value", "countdown"].some(
              (t) => e[t] !== n[t]
            );
          return d &&
            (i && a && da.update(a),
            s && (null == a || a.focus()),
            l && (null == a || a.select()),
            o && !c && r !== (null == a ? void 0 : a.value))
            ? { countdown: String(r).length, prevProps: e }
            : d
            ? { prevProps: e }
            : null;
        }
        onBlurHandler(e) {
          const { onBlur: t } = this.props;
          this.setState({ focused: !1 }), t && t(e);
        }
        onFocusHandler(e) {
          const { onFocus: t } = this.props;
          this.setState({ focused: !0 }), t && t(e);
        }
        onInputHandler(e) {
          const { onInput: t } = this.props,
            {
              target: { value: a },
            } = e;
          this.setState({ countdown: a.length }),
            "function" == typeof t && t(e);
        }
        onChangeHandler(e) {
          const { onChange: t } = this.props;
          "function" == typeof t && t(e);
        }
        onClearHandler() {
          const { onChange: e } = this.props,
            {
              field: t,
              isUncontrolledValue: a,
              onInputHandler: n,
              onChangeHandler: i,
            } = this;
          a && (t.value = ""), n(wa), e && i(wa);
        }
        setField(e) {
          (this.field = e), this.setState({ fieldRef: e });
        }
        setRef(e) {
          const { innerRef: t } = this.props;
          "function" != typeof t ? t && (t.current = e) : t(e);
        }
        renderChildren() {
          const { children: e, embeddedChildren: t = !0 } = this.props;
          return t
            ? n.createElement(
                "div",
                {
                  className: `${ha}__embedded`,
                  "data-andes-textfield-right-content": !0,
                },
                e
              )
            : e;
        }
        renderHelper() {
          const { helper: e, id: t, modifier: a } = this.props;
          return n.createElement(
            n.Fragment,
            null,
            e &&
              n.createElement(
                Yt,
                {
                  id: `${t}-message`,
                  modifier: ba(a),
                  className: `${ha}--internal-helper`,
                  andesDataAttributes: { "data-andes-textfield-helper": !0 },
                },
                e
              )
          );
        }
        render() {
          const e = this.props,
            {
              centered: t = !1,
              children: a,
              className: i,
              clear: r = !1,
              countdown: s = !1,
              disabled: l = !1,
              defaultValue: o,
              embeddedChildren: c,
              focus: d,
              helper: u,
              id: m,
              innerRef: p,
              i18n: _,
              inputProps: h = {},
              label: f,
              maxLength: v = 120,
              modifier: y,
              multiline: g = !1,
              numeric: b = !1,
              onChange: x,
              placeholder: w,
              prefix: $ = "",
              rows: N = 1,
              select: k,
              size: E = "large",
              split: j = !1,
              srLabel: L,
              suffix: S = "",
              value: M,
              autoFocus: T,
              andesDataAttributes: A,
            } = e,
            z = Fe(e, xa),
            { focused: q, height: F, countdown: H } = this.state,
            P = !b && !j && "readonly" !== y && !l && (s || u),
            V = be(ha, `${ha}--textfield`, i, {
              [`${ha}--multiline`]: g,
              [`${ha}--countdown`]: s,
              [`${ha}--centered`]: t,
              [`${ha}--focused`]: q,
              [`${ha}--${y}`]: y,
              [`${ha}--disabled`]: l,
              [`${ha}--medium`]: "medium" === E,
              [`${ha}--textfield-with-prefix`]: !!$,
              [`${ha}--textfield-with-suffix`]: !!S,
            }),
            R = be(`${ha}__suffix`),
            I = be(`${ha}__prefix`),
            B = be(`${ha}__field`, {
              [`${ha}__field--multiline`]: g,
              [`${ha}--medium`]: "medium" === E,
            }),
            D = be(`${ha}__bottom`, { [`${ha}--medium`]: "medium" === E }),
            Q = qe(
              qe(qe({}, z), h),
              {},
              {
                id: m,
                defaultValue: o,
                value: M,
                className: B,
                disabled: l || "readonly" === y,
                maxLength: v,
                style: g ? { height: F } : {},
                placeholder: w,
                onBlur: this.onBlurHandler,
                onFocus: this.onFocusHandler,
                onChange: this.onChangeHandler,
                ref: this.setField,
                "aria-invalid":
                  "error" === y ||
                  "warning" === y ||
                  "caution" === y ||
                  (null == h ? void 0 : h["aria-invalid"]) ||
                  z["aria-invalid"],
                "aria-label": L,
                "aria-describedby": (() => {
                  const { "aria-describedby": e } = h;
                  return j
                    ? e
                    : u && s
                    ? `${m}-message ${m}-count`
                    : s
                    ? `${m}-count`
                    : u
                    ? `${m}-message`
                    : void 0;
                })(),
                rows: N,
                autoFocus: d || T,
              }
            ),
            O = g ? "textarea" : "input";
          return n.createElement(
            "div",
            Se(
              { className: V, ref: this.setRef },
              A,
              {
                "data-andes-textfield": !0,
                "data-andes-textfield-modifier": y,
              },
              (0, C.i)({
                disabled: l,
                error: "error" === y,
                warning: "warning" === y,
              })
            ),
            f &&
              n.createElement(
                "label",
                { htmlFor: m, "data-andes-textfield-label": !0 },
                n.createElement("span", { className: `${ha}__label` }, f)
              ),
            n.createElement(
              Nt,
              {
                within: !0,
                isTextInput: !0,
                focusRingClass: q ? "visible-focused" : "",
              },
              n.createElement(
                "div",
                { className: `${ha}__control` },
                $ &&
                  n.createElement(
                    "span",
                    { className: I, "data-andes-textfield-prefix": !0 },
                    $
                  ),
                n.createElement(
                  O,
                  Se({ key: "field" }, Q, {
                    onInput: this.onInputHandler,
                    "data-andes-textfield-input": !0,
                    "data-andes-textfield-input-type": O,
                  })
                ),
                S &&
                  n.createElement(
                    "span",
                    { className: R, "data-andes-textfield-suffix": !0 },
                    S
                  ),
                "completed" === y &&
                  n.createElement(va, {
                    notificationsLabel: _.pgettext(fa, "Campo de texto valido"),
                    size: E,
                  }),
                "indeterminate" === y &&
                  n.createElement(oa, {
                    className: `${ha}--textfield-progress`,
                    size: "xsmall",
                    srAnnouncement: _.pgettext(fa, "Campo de texto procesando"),
                    srLabel: _.pgettext(fa, "Campo de texto procesando"),
                  }),
                r &&
                  n.createElement(ya, {
                    "aria-label": _.pgettext(fa, "Borrar"),
                    namespace: ha,
                    onClick: this.onClearHandler,
                    size: E,
                  }),
                a && this.renderChildren()
              )
            ),
            P &&
              n.createElement(
                "div",
                { className: D, "data-andes-textfield-bottom-info": !0 },
                this.renderHelper(),
                s &&
                  n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                      "span",
                      {
                        id: `${m}-countdown-progress`,
                        className: `${ha}__countdown`,
                        role: "progressbar",
                        "aria-valuenow": H,
                        "aria-valuemin": 0,
                        "aria-valuemax": Number(v),
                        "aria-label": _.pgettext(
                          fa,
                          "Maximo {0} caracteres",
                          v
                        ),
                        "data-andes-textfield-countdown": !0,
                      },
                      `${H} / ${v}`
                    ),
                    n.createElement(
                      Et,
                      {
                        id: `${m}-count`,
                        "aria-live": "polite",
                        "aria-atomic": "true",
                      },
                      _.pgettext(fa, "{0} caracteres restantes", Number(v) - H)
                    )
                  )
              )
          );
        }
      }
      Ca.displayName = "TextField";
      var $a = Ca;
      const Na = ["ref", "id", "className"],
        ka = (function () {
          const e = (e) => {
            let { ref: t, id: a, className: i } = e,
              r = Fe(e, Na);
            const s = (0, h.Bi)(a),
              { i18n: l } = (0, h.AH)("@andes/textfield", {
                en: ma,
                "es-AR": pa,
                "pt-BR": _a,
              }),
              { getThemedComponentClasses: o, themeHash: c } = Mt();
            return n.createElement(
              $a,
              Se({ i18n: l, innerRef: t }, r, {
                id: s,
                className: be(i, null == o ? void 0 : o("textfield")),
                andesDataAttributes: c,
              })
            );
          };
          return (e.displayName = "TextfieldContainer"), e;
        })();
      var Ea = ka;
      const ja = "add-to-cart-quantity-input-sheet",
        La = ({
          customQuantity: e,
          errorMessage: t,
          getModifier: a,
          validationCustomQuantity: n,
          error: r,
          disabledButton: l,
          handleChange: o,
          customQuantityValue: c,
          auto_focus: d = !0,
        }) =>
          (0, i.jsx)("div", {
            className: `${ja}__container`,
            children: (0, i.jsxs)("form", {
              "data-testid": "quantity-input-sheet-form",
              onSubmit: (e) => {
                e.preventDefault(), o(c);
              },
              children: [
                (0, i.jsx)("span", {
                  className: `${ja}__title`,
                  children: e?.subtitle,
                }),
                (0, i.jsx)(Ea, {
                  className: `${ja}__textfield`,
                  min: "1",
                  type: "number",
                  autoFocus: d,
                  helper: t(),
                  modifier: a(),
                  required: !0,
                  onChange: (e) => n(Number(e.target.value)),
                  srLabel: e?.subtitle,
                }),
                r && (0, i.jsx)(Et, { role: "alert", children: t() }),
                (0, i.jsx)(s.$n, {
                  className: `${ja}__button`,
                  onClick: async () => o(c),
                  disabled: l,
                  fullWidth: !0,
                  children: (0, i.jsx)("span", { children: e?.button_title }),
                }),
              ],
            }),
          }),
        Sa = ({
          header_title: e,
          options: t,
          onCallback: a,
          onClick: r,
          openCustomQuantity: s,
          handleQuantityChange: l,
        }) => {
          const [o, c] = (0, n.useState)(!1),
            [d, u] = (0, n.useState)(!1),
            [m, p] = (0, n.useState)(!0),
            [_, h] = (0, n.useState)(0),
            [f, v] = (0, n.useState)(null),
            { config: y, quantity: g, isWebView: b, nativeAppOs: x } = me(),
            { handleChangeQuantity: w } = he(),
            C = async (e) => {
              b &&
                window.MobileWebKit &&
                window.MobileWebKit.events.dispatch("quantity-selector-click", {
                  newQuantity: e.toString(),
                }),
                r?.(e),
                l?.(),
                await w({ newQuantityValue: e, onCallback: a }),
                b &&
                  window.MobileWebKit &&
                  (window.MobileWebKit.events.dispatch(
                    "quantity-selector-callback",
                    { newQuantity: e.toString() }
                  ),
                  window.MobileWebKit.bottomSheet.actions.close());
            },
            $ = (e) => {
              const t = f?.max_validation;
              return "SALE_TERM" === t?.message_type && e === t.quantity;
            };
          return (0, i.jsxs)(i.Fragment, {
            children: [
              b &&
                (0, i.jsx)("p", {
                  className: "add-to-cart-quantity-selector__header-title",
                  children: f?.title || e,
                }),
              f
                ? (0, i.jsx)(La, {
                    customQuantity: f,
                    setCustomQuantity: v,
                    errorMessage: () => {
                      const e = f?.min_validation,
                        t = f?.max_validation;
                      return e && _ < e.quantity
                        ? e.message
                        : t && _ > t.quantity
                        ? t.message
                        : ($(_) && t?.message) || "";
                    },
                    getModifier: () => (o ? "error" : d ? "warning" : void 0),
                    validationCustomQuantity: (e) => {
                      if (!f) return;
                      const { min_validation: t, max_validation: a } = f,
                        n = (a && e > a.quantity) || (t && e < t.quantity),
                        i = $(e);
                      c(n), u(i), p(n || !e), h(e);
                    },
                    error: o,
                    disabledButton: m,
                    handleChange: C,
                    customQuantityValue: _,
                  })
                : (0, i.jsx)(Le, {
                    config: y,
                    options: t,
                    handleChange: C,
                    setOpenCustomQuantity: (e) => {
                      v(e),
                        p(!0),
                        h(g),
                        s?.(e),
                        b &&
                          window.MobileWebKit &&
                          "Android" === x &&
                          window.MobileWebKit.bottomSheet.actions.resize({
                            size: "85%",
                          });
                    },
                  }),
            ],
          });
        },
        Ma = ({ convertedText: e, openBottomSheet: t, disabled: a }) =>
          (0, i.jsxs)("button", {
            disabled: a,
            className: "add-to-cart-trigger-button",
            onClick: () => t(),
            children: [(0, i.jsx)("span", { children: e }), (0, i.jsx)(we, {})],
          }),
        Ta = (e) => {
          let {
            color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
            i18n: a,
            srLabel: i,
          } = e;
          return n.createElement(
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
            i && n.createElement("title", null, i),
            n.createElement("path", {
              d: "M7.39902 7.40067V2.00067H8.59902V7.40067H13.999V8.60067H8.59902V14.0007H7.39902V8.60067H1.99902V7.40067H7.39902Z",
              fill: "currentColor",
            })
          );
        },
        Aa = (e) => {
          let {
            color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
            i18n: a,
            srLabel: i,
          } = e;
          return n.createElement(
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
            i && n.createElement("title", null, i),
            n.createElement("path", {
              d: "M1.99902 8.6007H13.999V7.4007H1.99902V8.6007Z",
              fill: "currentColor",
            })
          );
        },
        za = "round-stepper",
        qa = "add-to-cart__dynamic",
        Fa = {
          label: ({ text: e, styles: t, accessibility: a }) => {
            const { config: n } = me(),
              r = /\{(\w+)\}/.exec(e)?.[1],
              s = e.replace(/\{(\w+)\}/, String(n[r]));
            return (0, i.jsx)("span", {
              style: t,
              "aria-label": a || s,
              className: "add-to-cart__label andes-input-stepper__helper",
              children: s,
            });
          },
          link: ({ event: e, size: t, text: a, onCallback: r }) => {
            const { addQuantity: l, redirectURL: o } = pe(),
              { size: c } = _e(),
              { updateQuantity: d, quantity: u, status: m } = me(),
              { url: p, target: _ = "_blank" } = o || {},
              h = !!e && "redirect" === e && p,
              f = t || c,
              v = (0, n.useCallback)(async () => {
                const e = d(Number(u) + 1),
                  t = await l(e);
                r && r(t);
              }, [d, l, r]),
              y = be(Ne, {
                [`${Ne}--${f}`]: f,
                [`${Ne}--button`]: !h,
                [`${Ne}--link`]: h,
              });
            return (0, i.jsx)(i.Fragment, {
              children:
                h && p
                  ? (0, i.jsx)("a", {
                      href: p,
                      target: _,
                      className: y,
                      "aria-disabled": "disabled" === m,
                      children: a,
                    })
                  : (0, i.jsx)(s.$n, {
                      hierarchy: "mute",
                      size: f,
                      onClick: v,
                      className: y,
                      disabled: "disabled" === m,
                      children: (0, i.jsx)(s.C3, { children: a }),
                    }),
            });
          },
          button: ({
            event: e,
            size: t,
            text: a,
            hierarchy: r,
            style: l,
            accessibility: o,
            onCallback: c,
            onClick: d,
          }) => {
            const { redirectURL: u } = pe(),
              { size: m } = _e(),
              {
                postLoginRequest: p,
                status: _,
                config: h,
                setPostLoginRequest: f,
              } = me(),
              { handleChangeQuantity: v } = he(),
              { url: y, target: g = "_blank" } = u || {},
              b = !!e && "redirect" === e && y,
              x = t || m,
              w = r || "loud",
              C = l && "round" === l,
              $ = (0, n.useCallback)(async () => {
                await v({
                  newQuantityValue: h.minimum_quantity || 1,
                  onCallback: c,
                });
              }, [v, h, c]);
            (0, n.useEffect)(() => {
              p && ($(), f(!1));
            }, [p]);
            const N = {
                className: "add-to-cart__button",
                size: x,
                hierarchy: w,
                disabled: "disabled" === _,
                fullWidth: !0,
              },
              k = b ? { href: y, target: g } : { type: "button", onClick: $ };
            return C && e
              ? (0, i.jsx)($e, {
                  eventId: e,
                  accessibility: o,
                  onCallback: c,
                  onClick: d,
                })
              : (0, i.jsx)(s.$n, {
                  ...N,
                  ...k,
                  children: (0, i.jsx)(s.C3, { children: a }),
                });
          },
          stepper: ({
            size: e,
            text: t,
            value: a,
            onCallback: r,
            onClick: s,
            loadingStepper: l = !1,
            minValueDisabled: o = !1,
          }) => {
            const [c, d] = (0, n.useState)(!1),
              { size: u } = _e(),
              {
                postLoginRequest: m,
                config: p,
                quantity: _,
                idItem: h,
                minQuantity: f,
                maxQuantity: v,
                setPostLoginRequest: y,
              } = me(),
              { handleChangeQuantity: g } = he(),
              b = e || u,
              x = async (e) => {
                l && d(!0);
                try {
                  const t = e < _ ? "remove" : void 0;
                  s?.(),
                    await g({
                      newQuantityValue: e,
                      isRemove: t,
                      onCallback: r,
                    });
                } finally {
                  l && d(!1);
                }
              },
              { convertedText: w, complementaryText: C } = ke(
                a,
                _,
                t,
                p.preloaded_values
              );
            return (
              m && (x(_ + 1), y(!1)),
              (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(P, {
                  ...(l && { loading: c }),
                  className: "add-to-cart__stepper",
                  complementaryText: C,
                  id: `a2c-${h}-stepper`,
                  srLabel: `${w} ${C}`,
                  onChange: async (e) => x(e < p.minimum_quantity ? 0 : e),
                  formatValue: () => w,
                  maxValue: v,
                  ...(o && { minValue: f }),
                  value: _,
                  size: "medium" === b ? "large" : b,
                }),
              })
            );
          },
          bottomSheet: ({
            text: e,
            value: t,
            format: a,
            options: r,
            header_title: s,
            onCallback: l,
            onClick: o,
            onClickTrigger: c,
          }) => {
            const [d, u] = (0, n.useState)(!1),
              [m, p] = (0, n.useState)(!1),
              [_, h] = (0, n.useState)(null),
              {
                isWebView: f,
                quantity: v,
                config: y,
                updateQuantity: g,
                bottomSheetUrl: b,
              } = me(),
              x = ((e, t, a, n, i) => {
                if (!e || void 0 === t) return n ? `${a} ${n}` : `${a}`;
                let r = Ee(e, a.toString(), n);
                const s = i?.find((e) => a === e.quantity);
                return s && (r = Ee(e, s.value, s.complementary_text || "")), r;
              })(a, t, v, e, y.preloaded_values);
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(Ma, {
                  convertedText: x,
                  openBottomSheet: () => {
                    if (f) {
                      p(!0);
                      const e = window.MobileWebKit?.events.subscribe(
                        "quantity-selector-click",
                        (t) => {
                          const { args: a } = t.detail;
                          p(!1),
                            a.newQuantity && g(Number(a.newQuantity)),
                            e && window.MobileWebKit?.events.unsubscribe(e);
                        }
                      );
                      window.MobileWebKit?.events.subscribe(
                        "on_close_bs",
                        () => {
                          p(!1);
                        }
                      ),
                        b &&
                          window.MobileWebKit?.navigation.present(
                            `meli://webview/bottomsheet?url=${encodeURIComponent(
                              b
                            )}&loading_mode=none`,
                            { animated: !0, over_context: !0 }
                          );
                    }
                    u(!0), c?.();
                  },
                  disabled: m,
                }),
                !f &&
                  (0, i.jsx)(V.X, {
                    srLabel: _?.title || s,
                    open: d,
                    onClose: () => {
                      u(!1), h(null);
                    },
                    header: (0, i.jsx)(V.Y, {
                      ellipsis: !0,
                      dragIndicator: !0,
                      children: _?.title || s,
                    }),
                    initialHeight: "65%",
                    className: "add-to-cart-bottom-sheet",
                    children: (0, i.jsx)(Sa, {
                      options: r,
                      onCallback: l,
                      onClick: o,
                      openCustomQuantity: (e) => {
                        h(e);
                      },
                      handleQuantityChange: () => {
                        u(!1), h(null);
                      },
                    }),
                  }),
              ],
            });
          },
          quantitySelector: Sa,
          round_stepper: ({
            event: e = re,
            value: t,
            onCallback: a,
            text: r,
            onClick: s,
            accessibility_action: l,
            accessibility_decrement: o,
            accessibility_increment: c,
            accessibility_max_reached: d,
          }) => {
            const {
                postLoginRequest: u,
                config: m,
                quantity: p,
                idItem: _,
                isWebView: h,
                minQuantity: f,
                maxQuantity: v,
                setPostLoginRequest: y,
              } = me(),
              { redirectURL: g } = pe(),
              { handleChangeQuantity: b } = he(),
              x = async (e) => {
                const t = e < p ? ie : void 0;
                s?.(),
                  await b({ newQuantityValue: e, isRemove: t, onCallback: a });
              },
              w = (0, n.useCallback)(
                async (t) => {
                  e !== re
                    ? e === se &&
                      g?.url &&
                      (h && window.MobileWebKit?.navigation.push
                        ? window.MobileWebKit.navigation
                            .push(g.url)
                            .catch(() => {})
                        : (window.location.href = g.url))
                    : await x(t);
                },
                [e, x]
              ),
              { convertedText: C, complementaryText: $ } = ke(
                t,
                p,
                r,
                m.preloaded_values
              );
            u && (x(p + 1), y(!1));
            const N = (e, t, a, n) => {
                const r = be(`${za}__button`, {
                  [`${za}__button--disabled`]: a,
                  [`${za}__button--web`]: !h,
                });
                return (0, i.jsx)("button", {
                  type: "button",
                  onClick: async () => w(t),
                  disabled: a,
                  "aria-label": n,
                  className: r,
                  children: e,
                });
              },
              k = be(`${za}__container`, { [`${za}__container--show`]: p > 0 }),
              E = be(`${za}__round-button`, {
                [`${za}__round-button--shift`]: p > 0,
              });
            return (0, i.jsxs)("div", {
              className: "add-to-cart-wrapper",
              children: [
                (0, i.jsxs)("div", {
                  className: k,
                  id: `a2c-${_}-round-stepper`,
                  children: [
                    N(
                      (0, i.jsx)(Aa, { color: "#3483fa" }),
                      p - 1 < f ? 0 : p - 1,
                      p <= 0,
                      o
                    ),
                    (0, i.jsxs)("span", {
                      className: `${za}__value`,
                      role: "alert",
                      "aria-atomic": "true",
                      "aria-live": "assertive",
                      children: [
                        0 === p ? "" : C,
                        (0, i.jsx)("span", {
                          className: `${za}__complementary-value`,
                          children: $,
                        }),
                      ],
                    }),
                    N(
                      (0, i.jsx)(Ta, {
                        color: p >= v ? "#00000040" : "#3483fa",
                      }),
                      p + 1 < f ? f : p + 1,
                      p >= v,
                      p >= v ? d : c
                    ),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: E,
                  children: (0, i.jsx)($e, {
                    eventId: e,
                    accessibility: l,
                    onCallback: a,
                    onClick: s,
                    withRoundStepper: !0,
                  }),
                }),
              ],
            });
          },
        },
        Ha = ({
          cart_accessibility: e,
          cart_components: t,
          className: a,
          onCallback: r,
          onClick: s,
          onClickTrigger: l,
          loadingStepper: o,
          minValueDisabled: c,
        }) => {
          const {
              quantity: d,
              previousQuantity: u,
              maxQuantity: m,
              status: p,
            } = me(),
            { getAccessibilityRef: _ } = (({
              quantity: e,
              previousQuantity: t,
              maxQuantity: a,
            }) => {
              const i = (0, n.useRef)(null),
                r = (0, n.useRef)(null),
                s = (e, t) => {
                  e &&
                    t.current &&
                    (t.current.focus({ preventScroll: !0 }),
                    setTimeout(() => t.current?.blur(), 1e3));
                };
              return (
                s(t > 0 && 0 === e, i),
                s(void 0 !== a && e >= a, r),
                {
                  cartEmptyTextRef: i,
                  cartLimitReachedRef: r,
                  getAccessibilityRef: (e) =>
                    "item_removed_from_cart_action" === e
                      ? i
                      : "max_available_quantity_added_action" === e
                      ? r
                      : void 0,
                }
              );
            })({ quantity: d, previousQuantity: u, maxQuantity: m }),
            h = (0, n.useMemo)(
              () => be(a, qa, { [`${qa}--${p}`]: !!p }),
              [a, qa, p]
            ),
            f = (0, n.useCallback)(
              (e, t, a = {}) => {
                const { min: n, max: i } = a;
                return "round" === t ||
                  (void 0 === n && void 0 === i) ||
                  (void 0 !== n && void 0 !== i
                    ? n <= d && d <= i
                    : void 0 !== n
                    ? d >= n
                    : void 0 !== i && d <= i)
                  ? Fa[e]
                  : void 0;
              },
              [d]
            ),
            v = (0, n.useMemo)(
              () =>
                t
                  .filter((e) => Fa[e.type])
                  .map((e, t) => {
                    const a = f(
                        e.type,
                        e.properties.style,
                        e.quantity_condition_range
                      ),
                      n = {
                        ...e.properties,
                        onCallback: r,
                        onClick: s,
                        onClickTrigger: l,
                        loadingStepper: o,
                        minValueDisabled: c,
                      };
                    return a ? (0, i.jsx)(a, { ...n }, `${t}-${e.type}`) : null;
                  }),
              [t, f, r]
            );
          return (0, i.jsxs)("div", {
            className: h,
            children: [
              e &&
                Object.entries(e).map(([e, t]) =>
                  t?.text
                    ? (0, i.jsx)(
                        "span",
                        {
                          tabIndex: -1,
                          className: "andes-visually-hidden",
                          id: `cart-accessibility-${e}`,
                          "aria-atomic": "true",
                          ref: _(e),
                          children: t.text,
                        },
                        e
                      )
                    : null
                ),
              v,
            ],
          });
        },
        Pa = ({
          cart_status: e,
          cart_config: t,
          cart_rules: a,
          cart_events: n,
          cart_accessibility: r,
          cart_components: s,
          className: l,
          loadingStepper: o,
          minValueDisabled: c,
          isWebView: d,
          onClick: u,
          onCallback: m,
          onClickTrigger: p,
          nativeAppOs: _,
          bottomSheetUrl: h,
        }) =>
          (0, i.jsx)(G, {
            contextStatus: e,
            contextConfig: t,
            isWebView: d,
            nativeAppOs: _,
            bottomSheetUrl: h,
            children: (0, i.jsx)(Z, {
              contextRules: a,
              children: (0, i.jsx)(K, {
                contextEvents: n,
                children: (0, i.jsx)(fe, {
                  children: (0, i.jsx)(Ha, {
                    cart_accessibility: r,
                    cart_components: s,
                    className: l,
                    loadingStepper: o,
                    minValueDisabled: c,
                    onClick: u,
                    onCallback: m,
                    onClickTrigger: p,
                  }),
                }),
              }),
            }),
          });
      var Va = a(14269);
      const Ra = ["a", "button", "img", "input", "select", "textarea", "label"],
        Ia = [
          ...Ra,
          "abbr",
          "b",
          "bdo",
          "big",
          "br",
          "cite",
          "code",
          "dfn",
          "em",
          "i",
          "kbd",
          "map",
          "object",
          "output",
          "q",
          "samp",
          "script",
          "small",
          "span",
          "strong",
          "sub",
          "sup",
          "time",
          "p",
        ],
        Ba = (e) => Ra.includes(e),
        Da = ({
          children: e,
          as: t,
          styles: a,
          className: r,
          url: s,
          id: l,
          target: o,
          ariaHidden: d,
          ariaLabel: u,
          isAsText: m,
          onClick: p,
          rel: _,
        }) => {
          const h = m
              ? ((e, t) => (t ? "a" : e && Ia.includes(e) ? e : "span"))(t, s)
              : n.Fragment,
            f = h !== n.Fragment,
            v = void 0 !== d,
            y = f && Ba(h),
            g = f
              ? v
                ? { "aria-hidden": d }
                : y
                ? u
                  ? { "aria-label": u }
                  : {}
                : u
                ? { "aria-hidden": !0 }
                : {}
              : {},
            b =
              h === n.Fragment
                ? {}
                : {
                    ...(a && { style: a }),
                    ...(l && { id: l }),
                    ...(s && { href: s }),
                    ...(s && { target: o || "_self" }),
                    ...(r && { className: c()(r) }),
                    ...(p && { onClick: p }),
                    ...(_ && { rel: _ }),
                    ...g,
                  },
            x = f && !Ba(h) && !!u;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(h, { ...b, children: e }),
              x &&
                (0, i.jsx)("span", {
                  className: "andes-visually-hidden",
                  children: u,
                }),
            ],
          });
        },
        Qa = [
          "article",
          "aside",
          "blockquote",
          "details",
          "dialog",
          "dd",
          "div",
          "dl",
          "dt",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "hgroup",
          "hr",
          "li",
          "main",
          "nav",
          "ol",
          "p",
          "pre",
          "section",
          "table",
          "ul",
        ],
        Oa = ({ children: e, as: t, styles: a, className: r, id: s }) => {
          const l = ((e) => (e && Qa.includes(e) ? e : n.Fragment))(t),
            o = l === n.Fragment ? {} : { className: c()(r), style: a, id: s };
          return (0, i.jsx)(l, { ...o, children: e });
        },
        Wa = ({ src: e, alt: t, className: a, "aria-hidden": n }) =>
          (0, i.jsx)("img", {
            src: e,
            alt: t,
            className: a,
            "aria-hidden": n,
            width: 24,
            height: 24,
          }),
        Ua = [
          "black_friday",
          "bookmark",
          "calendar",
          "cbt",
          "cbt_new",
          "cbt_plane",
          "close",
          "cockade",
          "compats",
          "coupon",
          "cpg",
          "file",
          "full_super_mlb",
          "full_super",
          "full",
          "installation_services",
          "meli_plus",
          "meli",
          "melicoin",
          "meli_dolar",
          "prescription",
          "size_chart",
          "star_fill",
          "star_half",
          "star",
          "tour",
          "trade_in",
          "turbo_icon",
          "warning",
          "warning_blue",
          "addon_shield_desktop",
          "addon_shield_mobile",
          "whatsapp",
          "fast_payment",
          "fast_payment_white",
        ],
        Ka = {
          bf_v6_coupons: "coupon",
          black_friday_icon: "black_friday",
          buflo_congrats_information_cbt: "cbt",
          buflo_reference_installation: "installation_services",
          ic_online_visit_request: "calendar",
          icon_black_friday: "black_friday",
          icon_bookmark: "bookmark",
          icon_cbt: "cbt",
          icon_cbt_new: "cbt_new",
          icon_cbt_plane: "cbt_plane",
          icon_close: "close",
          icon_cockade: "cockade",
          icon_file: "file",
          icon_full_super_mlb: "full_super_mlb",
          icon_full_super: "full_super",
          icon_full: "full",
          icon_meli_plus: "meli_plus",
          icon_meli: "meli",
          icon_melicoin: "melicoin",
          poly_meli_dolar: "meli_dolar",
          icon_prescription: "prescription",
          icon_star_fill: "star_fill",
          icon_star_half: "star_half",
          icon_star: "star",
          icon_tour: "tour",
          icon_trade_in: "trade_in",
          icon_warning: "warning",
          icon_addon_shield_desktop: "addon_shield_desktop",
          icon_addon_shield_mobile: "addon_shield_mobile",
          icon_warning_blue: "warning_blue",
          meli_icon: "meli",
          melichoice_new_icon: "meli",
          meliplus_icon: "meli_plus",
          polycard_virtual_tour_icon: "tour",
          size_chart_icon: "size_chart",
          "spotlight-compatible-green-icon": "compats",
          supermarket_logo: "cpg",
          turbo_icon: "turbo_icon",
          vip_gallery_tour_icon: "tour",
          vpp_bookmark_icon: "bookmark",
          vpp_full_icon: "full",
          vpp_warning_icon: "warning",
          whatsapp_icon: "whatsapp",
          icon_master_credits: "fast_payment",
          icon_master_credits_white: "fast_payment_white",
        },
        Za = {
          poly_black_friday: "0 0 12 12",
          poly_bookmark: "0 0 20 20",
          poly_calendar: "0 0 14 14",
          poly_cbt: "0 0 154 16",
          poly_cbt_new: "0 0 100 11",
          poly_cbt_plane: "0 0 14 14",
          poly_close: "0 0 14 14",
          poly_cockade: "0 0 12 12",
          poly_compats: "0 0 16 16",
          poly_coupon: "0 0 13 11",
          poly_cpg: "0 0 106 10",
          poly_file: "0 0 16 16",
          poly_full_super_mlb: "0 0 91 18",
          poly_full_super: "0 0 91 18",
          poly_full: "0 0 41 13",
          poly_installation_services: "0 0 16 16",
          poly_meli_plus: "0 0 43 16",
          poly_meli: "0 0 18 13",
          poly_melicoin: "0 0 19 19",
          poly_meli_dolar: "0 0 12 12",
          poly_prescription: "0 0 13 12",
          poly_size_chart: "0 0 19 11",
          poly_star_fill: "0 0 15 15",
          poly_star_half: "0 0 15 15",
          poly_star: "0 0 15 15",
          poly_tour: "0 0 21 13",
          poly_trade_in: "0 0 16 16",
          poly_warning: "0 0 16 16",
          poly_addon_shield_desktop: "0 0 28 28",
          poly_addon_shield_mobile: "0 0 24 24",
          poly_warning_blue: "0 0 16 16",
          poly_whatsapp: "0 0 15 15",
          poly_turbo_icon: "0 0 23 14",
          poly_fast_payment: "0 0 16 14",
          poly_fast_payment_white: "0 0 16 16",
        },
        Ga = ({
          ariaHidden: e,
          ariaLabel: t,
          className: a,
          height: n,
          icon: r,
          width: s,
          enableCustomIcons: l,
        }) => {
          const o = Ka[r] || Ua.find((e) => e === r);
          if (!(l || (o && Ua.includes(o))))
            return console.error(`Icon ${o} not found`), null;
          const d = o ? `poly_${o}` : r,
            u = Za[d] || void 0,
            m = c()(a, { poly_empty_star: "star" === o }),
            [p, _] = u ? u.split(" ").slice(2) : [null, null],
            h = s || p,
            f = n || _,
            v = {
              ...(e && { "aria-hidden": !0 }),
              ...(t && { "aria-label": t }),
              ...(m && { className: m }),
              ...(h && { width: h }),
              ...(f && { height: f }),
            };
          return (0, i.jsxs)("svg", {
            ...v,
            viewBox: u,
            role: t ? "img" : void 0,
            children: [
              (0, i.jsx)("use", { href: `#${d}` }),
              "meli_plus" === o
                ? (0, i.jsxs)("linearGradient", {
                    id: "paint0_linear_8761_4741",
                    x1: "0",
                    y1: "7.98613",
                    x2: "42.0833",
                    y2: "7.98613",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", {
                        offset: "0.298365",
                        stopColor: "#5A238D",
                      }),
                      (0, i.jsx)("stop", { offset: "1", stopColor: "#AA1192" }),
                    ],
                  })
                : null,
            ],
          });
        },
        Xa = (e) => {
          const {
            className: t,
            iconKey: a,
            src: n,
            alt_text: r,
            aria_hidden: s,
            aria_label: l = r,
            enableCustomIcons: o,
          } = e;
          return n
            ? (0, i.jsx)(Wa, { src: n, alt: l, className: t, "aria-hidden": s })
            : a &&
                (0, i.jsx)(Ga, {
                  icon: a,
                  className: t,
                  ariaLabel: l,
                  ariaHidden: s,
                  enableCustomIcons: o,
                });
        },
        Ya = {
          caution: "#f73",
          positive: "#00a650",
          primary: "#000000e6",
          secondary: "#0000008c",
        },
        Ja = {
          color: {
            getStyleValue: (e) => ({ color: Ya[e] || e }),
            canUseInContainer: !1,
          },
          color_hex: {
            getStyleValue: (e) => ({ color: e }),
            canUseInContainer: !1,
          },
          background_color: {
            getStyleValue: (e) => ({ backgroundColor: Ya[e] || e }),
            canUseInContainer: !0,
          },
          background_color_hex: {
            getStyleValue: (e) => ({ backgroundColor: e }),
            canUseInContainer: !0,
          },
          justify_content: {
            getClassName: (e) => `poly-jc-${e?.toLowerCase()}`,
            canUseInContainer: !0,
          },
          font_size: {
            getClassName: (e) => `poly-fs-${e}`,
            canUseInContainer: !1,
          },
          font_weight: {
            getClassName: (e) => `poly-fw-${e}`,
            canUseInContainer: !1,
          },
          font_style: {
            getClassName: (e) => `poly-fst-${e}`,
            canUseInContainer: !1,
          },
          line_height: {
            getClassName: (e) => `poly-lh-${e}`,
            canUseInContainer: !0,
          },
          text_transform: {
            getClassName: (e) => `poly-tt-${e}`,
            canUseInContainer: !1,
          },
        },
        en = (e, t, a = "") =>
          Object.entries(e).reduce(
            (e, [a, n]) => {
              const i = Ja[a];
              return (
                (void 0 !== t && i?.canUseInContainer !== t) ||
                  !i?.getClassName ||
                  e.push(i.getClassName(n)),
                e
              );
            },
            a ? [a] : []
          ),
        tn = (e, t) =>
          Object.entries(e).reduce((e, [a, n]) => {
            const i = Ja[a];
            return (
              !i?.getStyleValue ||
                (void 0 !== t && i.canUseInContainer !== t) ||
                Object.assign(e, i.getStyleValue(n)),
              e
            );
          }, {}),
        an = ({
          text: e,
          styles: t,
          className: a,
          aria_hidden: n,
          aria_label: r,
        }) => {
          const s = "poly-phrase-label",
            l = t ? tn(t) : {},
            o = t ? en(t, void 0, s) : [s];
          return (0, i.jsx)(Da, {
            isAsText: !0,
            as: "span",
            styles: l,
            className: c()(a, o),
            ariaHidden: n,
            ariaLabel: r,
            children: e,
          });
        },
        nn = (e, t, a) => {
          const n = ((e, t) => {
              const a = e < 0 ? Math.ceil(e) : Math.floor(e),
                n = a < 0,
                i = Math.abs(a),
                r = new Intl.NumberFormat("en-US", {
                  useGrouping: !0,
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })
                  .format(i)
                  .replace(/,/g, t);
              return n ? `-${r}` : r;
            })(e, a),
            i = ((e, t) => {
              const a = e.toFixed(2).split(".")[1];
              return ((e) => "00" === e)(a) || ((e) => "none" === e)(t)
                ? ""
                : a;
            })(e, t);
          return { fraction: n, cents: i };
        },
        rn = { ",": "comma", ".": "dot" },
        sn = ({
          className: e,
          combo: t,
          compact: a = !1,
          currency: r,
          decimal_style: s,
          decimalSeparator: l = ",",
          previous: o = !1,
          size: d = "inherit",
          styles: u,
          suffix: m,
          symbol: p,
          thousandSeparator: _ = ".",
          value: h,
        }) => {
          const f = !(null == h || !_ || !l || (!r && !p)),
            v = "poly-phrase-price",
            { font_weight: y, ...g } = u || {},
            b = (0, n.useMemo)(() => (g ? tn(g) : {}), [g]),
            x = (0, n.useMemo)(() => {
              if ("regular" === y || "semibold" === y) return y;
            }, [y]),
            w = (0, n.useMemo)(() => (g ? en(g, void 0, v) : [v]), [g, v]),
            C = (0, n.useMemo)(() => Object.keys(b).length > 0, [b]),
            $ = (0, n.useMemo)(() => (C ? "span" : n.Fragment), [C]),
            N = (0, n.useMemo)(() => (C ? { style: b } : {}), [C, b]),
            k = (0, n.useMemo)(
              () => (f ? nn(h, s, _) : { fraction: "", cents: "" }),
              [f, h, s, _]
            ),
            E = (0, n.useMemo)(
              () =>
                ((e, t) => ("superscript" === e ? "superscript" : rn[t]))(s, l),
              [s, l]
            ),
            j = (0, n.useMemo)(
              () =>
                "inherit" !== d
                  ? d
                  : "inherit" === d && "superscript" === s
                  ? 14
                  : d,
              [d, s]
            );
          if (!f) return null;
          const L = {
            centsType: E,
            compact: a,
            suffix: m,
            weight: x,
            size: j,
            currencyId: r,
            symbol: p,
            className: c()(e, w),
            previous: o,
            value: { fraction: k.fraction, cents: k.cents },
            combo: t,
          };
          return (0, i.jsx)($, {
            ...($ === n.Fragment ? {} : N),
            children: (0, i.jsx)(Va.BH, { ...L }),
          });
        },
        ln = (0, n.memo)(
          ({
            alt_text: e,
            aria_hidden: t,
            aria_label: a = e,
            className: n,
            decimalSeparator: r,
            enableCustomIcons: s,
            iconClassName: l,
            styles: o,
            target: d,
            text: u,
            thousandSeparator: m,
            url: p,
            values: _,
          }) => {
            const h = "poly-phrase-link";
            if (!u || !p) return null;
            const f = o ? tn(o) : {},
              v = o ? en(o, void 0, h) : [h],
              y = {
                "aria-label": a,
                "aria-hidden": t,
                className: c()(n, v),
                style: f,
                href: p,
                target: d,
                rel: "_blank" === d ? "noopener noreferrer" : void 0,
              },
              g =
                _ && _.length > 0
                  ? (0, i.jsx)(dn, {
                      text: u,
                      values: _,
                      iconClassName: l,
                      thousandSeparator: m,
                      decimalSeparator: r,
                      enableCustomIcons: s,
                    })
                  : u;
            return (0, i.jsx)("a", { ...y, children: g });
          }
        ),
        on = ["icon_meli"],
        cn = {
          icon_meli: {
            type: "icon",
            key: "icon_meli",
            icon: { key: "icon_meli" },
          },
        },
        dn = ({
          text: e,
          values: t,
          iconClassName: a,
          thousandSeparator: r,
          decimalSeparator: s,
          enableCustomIcons: l,
        }) =>
          (0, i.jsx)(i.Fragment, {
            children: (() => {
              const o = ((e) => {
                let t = 0;
                const a = (e.match(/{(.*?)}/g) || []).reduce((a, n) => {
                  const i = n.slice(1, -1),
                    r = e.indexOf(n, t);
                  return (
                    r > t &&
                      a.push({ text: e.slice(t, r), isInterpolation: !1 }),
                    a.push({ text: i, isInterpolation: !0 }),
                    (t = r + n.length),
                    a
                  );
                }, []);
                return (
                  t < e.length &&
                    a.push({ text: e.slice(t), isInterpolation: !1 }),
                  a
                );
              })(e);
              let c = [...(t || [])];
              return o.map((e, t) => {
                if (!e.isInterpolation) return e.text;
                if (
                  (e.isInterpolation &&
                    on.includes(e.text) &&
                    ((c = c.filter((t) => t.key !== e.text)),
                    (c = [...c, cn[e.text]])),
                  e.isInterpolation && c)
                ) {
                  const o = c.find((t) => t.key === e.text);
                  if (o && o.type) {
                    const e = `${o.key}-${t}`;
                    switch (o.type) {
                      case "price":
                        return (0, i.jsx)(
                          sn,
                          {
                            ...o.price,
                            value: o.price?.value || 0,
                            styles: o.styles,
                            thousandSeparator: r,
                            decimalSeparator: s,
                          },
                          e
                        );
                      case "icon":
                        return (0, n.createElement)(Xa, {
                          className: a,
                          iconKey: o.icon?.key,
                          ...o.icon,
                          key: e,
                          enableCustomIcons: l,
                        });
                      case "label":
                        return (0, n.createElement)(an, {
                          ...o.label,
                          styles: o.styles,
                          key: e,
                        });
                      case "link":
                        return (0, n.createElement)(ln, {
                          ...o.link,
                          key: e,
                          iconClassName: a,
                          thousandSeparator: r,
                          decimalSeparator: s,
                          enableCustomIcons: l,
                        });
                      default:
                        return null;
                    }
                  }
                }
                return null;
              });
            })(),
          }),
        un = (e) => {
          const {
              alt_text: t,
              aria_hidden: a,
              aria_label: n = t,
              asBox: r,
              asText: s,
              className: l = "",
              id: o,
              isAsText: d = !0,
              onClick: u,
              styles: m,
              target: p,
              text: _,
              url: h,
              values: f,
              iconClassName: v,
              thousandSeparator: y,
              decimalSeparator: g,
              boxClassName: b,
              enableCustomIcons: x = !1,
              rel: w,
            } = e,
            {
              boxStyles: C,
              boxClasses: $,
              textStyles: N,
              textClasses: k,
            } = ((e, t, a, n) => {
              const i = void 0 !== a,
                r = n || e,
                s = n ? e : void 0;
              return t
                ? {
                    boxStyles: i ? tn(t, !0) : {},
                    boxClasses: i ? en(t, !0, r) : [],
                    textStyles: i ? tn(t, !1) : tn(t),
                    textClasses: i ? en(t, !1, s) : en(t, void 0, e),
                  }
                : {
                    boxStyles: {},
                    boxClasses: i ? [r] : [],
                    textStyles: {},
                    textClasses: i ? [s] : [e],
                  };
            })(l, m, r, b);
          return (0, i.jsx)(Oa, {
            as: r,
            styles: C,
            className: c()($),
            id: o,
            children: (0, i.jsx)(Da, {
              ariaHidden: a,
              ariaLabel: n,
              as: s,
              className: c()(k),
              id: r ? void 0 : o,
              isAsText: d,
              onClick: u,
              styles: N,
              target: p,
              url: h,
              rel: w,
              children:
                _ &&
                (0, i.jsx)(dn, {
                  text: _,
                  values: f,
                  iconClassName: v,
                  thousandSeparator: y,
                  decimalSeparator: g,
                  enableCustomIcons: x,
                }),
            }),
          });
        };
      var mn = a(18988),
        pn = a(57051),
        _n = a(74448),
        hn = a(59058),
        fn = a(70743),
        vn = a(94927);
      const yn =
          "The Thousand Separator or Decimal Separator is not defined in Polycard",
        gn = (0, n.createContext)(void 0),
        bn = ({ contextValue: e, children: t }) => {
          const { actionsCardsMap: a } = Kn(),
            { url: r, onClick: s, metadata: l, actionsCard: o } = e,
            c = (0, n.useMemo)(() => {
              const e = new Map(a ?? new Map());
              if (o?.length) for (const t of o) e.set(t.id, t);
              return e;
            }, [a, o]),
            d = {
              ...e,
              onClick: (e) => {
                s && s(e, { ...l, url: r });
              },
              actionsCardMap: c,
            };
          return (0, i.jsx)(gn.Provider, { value: d, children: t });
        };
      function xn() {
        const e = (0, n.useContext)(gn);
        if (void 0 === e)
          throw new Error(
            "useCardContext must be used within a useCardContext"
          );
        return e;
      }
      const wn = ["mobile", "desktop", "tablet"],
        Cn = (e) => !(!e || !Object.values(wn).includes(e)) && "mobile" === e,
        $n = (e, t = "grid-card") =>
          Boolean(e && e.querySelectorAll(`.poly-card--${t}`)),
        Nn = (e, t = "grid-card") => {
          try {
            const a = "poly-card__portada",
              n = `poly-card--${t} .poly-card__content`,
              i = `poly-card--${t} .poly-card__footer`,
              r = Array.from(e.querySelectorAll(`.${a}`)),
              s = Array.from(e.querySelectorAll(`.${n}:not(.${a})`)),
              l = Array.from(e.querySelectorAll(`.${i}`)),
              o =
                r
                  .map((e) => e.getBoundingClientRect().height)
                  .sort((e, t) => t - e)[0] +
                ((e) => {
                  try {
                    return (
                      parseInt(window?.getComputedStyle(e).marginTop, 10) +
                      parseInt(window?.getComputedStyle(e).marginBottom, 10)
                    );
                  } catch (e) {
                    return 0;
                  }
                })(r[0]),
              c = s
                .map((e) => e.getBoundingClientRect().height)
                .sort((e, t) => t - e)[0],
              d =
                l
                  .map((e) => e.getBoundingClientRect().height)
                  .sort((e, t) => t - e)[0] ?? 0,
              u = t.includes("list") ? Math.max(c, o) : c + o + d;
            return Number.isNaN(u) ? 0 : u;
          } catch (e) {
            return 0;
          }
        },
        kn = "poly",
        En = (e) =>
          e.column
            ? 1 === e.column
              ? [null, e, null]
              : 2 === e.column
              ? [null, null, e]
              : [null, null, null]
            : [e, null, null],
        jn = (e) => e ?? [],
        Ln = (e) => (e ? [e] : []),
        Sn = (e, t) => [
          [...jn(e[0]), ...Ln(t[0])],
          [...jn(e[1]), ...Ln(t[1])],
          [...jn(e[2]), ...Ln(t[2])],
        ],
        Mn = (e, t, a, n, i, r, s) => {
          const { url: l, url_fragments: o, url_params: c } = e,
            d = t && `?${t}`,
            u = s ?? l;
          if (!u) return "";
          return `${
            !(u.startsWith("https://") || u.startsWith("meli://")) && a ? a : ""
          }${u}${d ?? c ?? n ?? ""}${r ?? o ?? i ?? ""}`;
        },
        Tn = (e) => ("xlarge" === e ? "large" : e),
        An = (e) => !!e && ("large" === e || "xlarge" === e),
        zn = (e, t) => {
          if (!e) return;
          const { styles: a, style_id: n } = e;
          if (!n || !t) return a;
          const i = t.get(n);
          return i ? (a ? { ...i, ...a } : i) : a;
        },
        qn = "addToCartAddAction",
        Fn = "addToCartDeleteAction",
        Hn = "addToCartOtherOptionsAction",
        Pn = "addToCartCapabilityCallbackAction",
        Vn = "bookmarkAction",
        Rn = "suggestionsAction",
        In = "carouselAfterChangeAction",
        Bn = "carouselBeforeChangeAction",
        Dn = "carouselOnClickAction",
        Qn = "variationPickerAction",
        On = "checkboxAction",
        Wn = (0, n.createContext)(void 0),
        Un = ({
          contextValue: e,
          deviceType: t,
          actionsCards: a,
          children: r,
          thousandSeparator: s,
          decimalSeparator: l,
          countPreloadImages: o,
          isNavigableToVariation: c,
          targetLink: d,
          isLoadingContext: u,
          isWebView: m,
        }) => {
          const p = "tablet" === (_ = t) ? "mobile" : _;
          var _;
          const h = (0, n.useMemo)(() => {
            const { styles_default: t } = e,
              n = t?.length ? new Map(t.map((e) => [e.id, e])) : new Map(),
              i = a?.length ? new Map(a.map((e) => [e.id, e])) : new Map();
            return {
              ...e,
              deviceType: p,
              isMobile: Cn(p),
              actionsCardsMap: i,
              actionsCards: a,
              thousandSeparator: s,
              decimalSeparator: l,
              countPreloadImages: o,
              isNavigableToVariation: Cn(p) || c,
              targetLink: d,
              card_size: e?.card_size || "xlarge",
              isLoadingContext: u,
              stylesDefault: n,
              isWebView: m,
            };
          }, [e, p, t, a, s, l, o, c, d, u, m]);
          return (0, i.jsx)(Wn.Provider, { value: h, children: r });
        };
      function Kn() {
        const e = (0, n.useContext)(Wn);
        if (void 0 === e)
          throw new Error(
            "usePolycardContext must be used within a PolycardContext"
          );
        return e;
      }
      const Zn = (e) => {
          const { actionsCardMap: t } = xn(),
            { isWebView: a } = Kn(),
            n = t?.get(Pn);
          return (0, i.jsx)(Pa, {
            ...e,
            ...(!0 === a ? { isWebView: !0 } : {}),
            onCallback: (e) => {
              if (n?.callback && "object" == typeof e && null !== e) {
                const { data: t, ...a } = e;
                n.callback({ data: { ...t, ...a } });
              }
            },
          });
        },
        Gn = ({
          text: e,
          style_id: t,
          styles: a,
          values: n,
          className: r,
          iconClassName: s,
          ...l
        }) => {
          if (
            !(
              n?.length ||
              a ||
              t ||
              ("url" in l && l.url) ||
              ("asBox" in l && l.asBox) ||
              ("asText" in l && l.asText) ||
              "isAsText" in l
            )
          ) {
            const t = (0, i.jsx)(i.Fragment, { children: e });
            return r || Object.keys(l).length > 0
              ? (0, i.jsx)("span", { className: r, ...l, children: t })
              : t;
          }
          return (0, i.jsx)(Xn, {
            text: e,
            style_id: t,
            styles: a,
            values: n,
            className: r,
            iconClassName: s,
            ...l,
          });
        },
        Xn = n.memo(
          ({
            text: e,
            style_id: t,
            styles: a,
            values: r,
            className: s,
            ...l
          }) => {
            const {
                thousandSeparator: o,
                decimalSeparator: c,
                stylesDefault: d,
              } = Kn(),
              { styles: u, values: m } = (0, n.useMemo)(
                () =>
                  o && c
                    ? ((e, t) => {
                        if (!e) return { styles: void 0, values: void 0 };
                        const { style_id: a, styles: n, values: i } = e,
                          r = zn({ style_id: a, styles: n }, t);
                        if (!i || 0 === i.length)
                          return { styles: r, values: i };
                        let s = !1;
                        for (const e of i) {
                          const t = e;
                          if ((t && t.style_id) || (t && t.styles)) {
                            s = !0;
                            break;
                          }
                        }
                        return s
                          ? {
                              styles: r,
                              values: i.map((e) => {
                                const a = e,
                                  n = zn(
                                    { style_id: a.style_id, styles: a.styles },
                                    t
                                  );
                                return n ? { ...e, styles: n } : e;
                              }),
                            }
                          : { styles: r, values: i };
                      })({ style_id: t, styles: a, values: r }, d)
                    : { styles: void 0, values: void 0 },
                [t, a, r, d, o, c]
              );
            return o && c
              ? (0, i.jsx)(un, {
                  ...l,
                  text: e,
                  values: m,
                  styles: u,
                  thousandSeparator: o,
                  decimalSeparator: c,
                  className: s,
                })
              : (console.error(yn), null);
          }
        ),
        Yn = `${kn}-component__link`,
        Jn = ({
          rel: e,
          url: t,
          text: a,
          children: n,
          className: r,
          classModified: l,
          onClick: o,
          target: d,
          type: u = "link",
          hierarchy: m,
          values: p,
          style_id: _,
        }) => {
          const { card_size: h } = Kn();
          if (!((a && n) || t)) return null;
          const f = c()(r, Yn, { [`${Yn}--${l}`]: !!l }),
            v = () =>
              a
                ? (0, i.jsx)(Gn, {
                    text: a,
                    isAsText: !1,
                    values: p,
                    style_id: _,
                  })
                : n;
          return "link" === u
            ? (0, i.jsx)("a", {
                href: t,
                className: f,
                onClick: o,
                rel: e,
                target: d,
                children: v(),
              })
            : (0, i.jsx)(s.$n, {
                href: t,
                hierarchy: m,
                size: Tn(h),
                children: (0, i.jsx)(s.C3, { children: v() }),
              });
        },
        ei = (0, n.lazy)(() =>
          Promise.all([a.e(84719), a.e(35038)])
            .then(a.bind(a, 35038))
            .then((e) => ({ default: e.CarouselImage }))
        ),
        ti = `${kn}-component__picture`,
        ai = ({
          square: e,
          size: t,
          isCarousel: a = !1,
          lazyload: r,
          preload: s,
          alt: l,
          id: o,
          className: d,
          src: u,
          sanitized_title: m,
          ariaHidden: p = !1,
        }) => {
          const {
              picture_template: _,
              picture_size_default: h,
              picture_square_default: f,
              isMobile: v,
              card_size: y,
            } = Kn(),
            {
              metadata: { vertical_id: g },
            } = xn(),
            b = e ?? f,
            x = t ?? h,
            w = ((e, t) =>
              t ||
              (e
                ? ((e, t) => e.replace(/{(\w+|\d+x)}/g, (e, a) => t[a] || ""))(
                    _,
                    {
                      square: b,
                      "2x": "_2X",
                      id: e,
                      size: x,
                      sanitized_title: m,
                    }
                  )
                : "https://http2.mlstatic.com/resources/frontend/statics/img-not-available/1.0.0/V.jpg"))(
              o,
              u
            ),
            C = {
              className: c()(ti, d, {
                [`${ti}--contain`]:
                  ("Q" === b && "MOT" === g) || ("RES" !== g && v && An(y)),
              }),
              preload: s,
              src: w,
              alt: l || "",
              "aria-hidden": p,
              "data-testid": "picture",
            };
          return a
            ? (0, i.jsx)(n.Suspense, {
                fallback: null,
                children: (0, i.jsx)(ei, { ...C }),
              })
            : (0, i.jsx)(mn.Image, { ...C, loading: r ? "lazy" : "eager" });
        },
        ni = `${kn}-component__badge`,
        ii = ({ src: e, className: t, alt_text: a, values: n, text: r }) => {
          const { url: s } = xn(),
            l = e ? ai : Gn,
            o = c()(t, ni, { [`${ni}--image`]: !!e });
          return (0, i.jsx)(Jn, {
            className: o,
            url: s,
            children: (0, i.jsx)(l, {
              ...(e
                ? { id: "badge", src: e, alt: a }
                : { text: r, isAsText: !1, values: n }),
            }),
          });
        },
        ri = ({
          alt_text: e,
          className: t,
          styles: a,
          target: n,
          text: r,
          url: s,
          values: l,
          style_id: o,
        }) =>
          (0, i.jsx)(Gn, {
            alt_text: e,
            className: t,
            styles: a,
            style_id: o,
            target: n,
            text: r,
            url: s,
            values: l,
          }),
        si = `${kn}-bookmark`,
        li = `${kn}-component__bookmark`,
        oi = () => {
          const { metadata: e, bookmark: t, actionsCardMap: a } = xn(),
            n = a?.get(Vn);
          if (!t || !n) return null;
          const { bookmarked: r, alt_text: s } = t,
            l = c()(li),
            o = c()(`${si}__btn`, { [`${si}__btn--active`]: r }),
            d = c()(`${si}__icon-full`),
            u = c()(`${si}__icon-empty`),
            m = [
              { type: "icon", key: "icon_bookmark", icon: { key: "bookmark" } },
            ];
          return (0, i.jsx)("div", {
            className: l,
            "data-testid": "bookmark",
            children: (0, i.jsxs)("button", {
              type: "button",
              className: o,
              role: "switch",
              "aria-checked": r,
              "aria-label": s || "favorito",
              onClick: (t) => {
                t.preventDefault(),
                  n?.callback && n.callback({ event: t, data: { ...e } }),
                  n?.onClick && n.onClick(t);
              },
              children: [
                (0, i.jsx)(Gn, {
                  text: "{icon_bookmark}",
                  iconClassName: u,
                  isAsText: !1,
                  values: m,
                }),
                (0, i.jsx)(Gn, {
                  text: "{icon_bookmark}",
                  iconClassName: d,
                  isAsText: !1,
                  values: m,
                }),
              ],
            }),
          });
        },
        ci = `${kn}-component__float-highlight`,
        di = ({ className: e, styles: t, text: a, values: n, style_id: r }) => {
          const { url: s } = xn(),
            l = c()(ci, { [`${e}`]: e });
          return (0, i.jsx)(Gn, {
            className: l,
            styles: t,
            style_id: r,
            text: a,
            values: n,
            onClick: () => {
              s && (window.location.href = s);
            },
          });
        },
        ui = ({ overlay: e }) => {
          const { picture_overlay_default: t } = Kn();
          return e ?? t ?? !0
            ? (0, i.jsx)("span", { className: "poly-component__image-overlay" })
            : null;
        },
        mi = () => {
          const [e, t] = (0, n.useState)(0),
            { metadata: a } = xn(),
            { isLoading: r } = a;
          return (
            (0, n.useEffect)(() => {
              if (r && e < 100) {
                const a = setInterval(() => {
                  t(e + 1);
                }, 20);
                return () => {
                  clearInterval(a);
                };
              }
              return t(0), () => {};
            }, [r, e]),
            r &&
              (0, i.jsx)("div", {
                className: "poly-component__loading",
                children: (0, i.jsx)(pn.Y, {
                  srAnnouncement: "Cargando...",
                  srLabel: `Progreso de subida ${{ progress: e }}`,
                  value: e,
                }),
              })
          );
        },
        pi = `${kn}-component__carousel`,
        _i = ({
          url: e,
          size: t,
          title: r,
          alt_text: s,
          pictures: l,
          variationId: o,
          onClick: d,
          square: u,
          overlay: m,
          sanitized_title: p,
        }) => {
          const [_, h] = (0, n.useState)(0),
            {
              isHover: f,
              carouselFeatureFlags: v,
              actionsCardMap: y,
              metadata: g,
            } = xn(),
            { isMobile: b, targetLink: x, target: w } = Kn(),
            [C, $] = (0, n.useState)(null);
          (0, n.useEffect)(() => {
            Promise.all([a.e(84719), a.e(35038)])
              .then(a.bind(a, 35038))
              .then((e) => {
                $(e);
              })
              .catch((e) => {
                console.error("Error al importar la librería:", e);
              });
          }, []);
          const N = y?.get(In)?.callback,
            k = y?.get(Bn)?.callback,
            E = y?.get(Dn)?.onClick,
            j = (e) => {
              E && E(e), d && d(e);
            };
          return (
            C &&
            (0, i.jsx)(
              C.CarouselSnapped,
              {
                className: c()(pi, { [`${pi}--bg-white `]: _ > 0 }),
                pagination: l.length > 1 && l.length < 6 && b,
                type: "full",
                arrows: {
                  visibility:
                    b || (f && v && !0 === v.FULL_HOVER_CAROUSEL)
                      ? "always"
                      : "hover",
                },
                srLabel: r,
                beforeChange: (e, t) =>
                  ((e, t) => {
                    k && k({ data: { ...g, newSlide: e, currentSlide: t } }),
                      h(e);
                  })(t, e),
                afterChange: (e) => {
                  N && N({ data: { ...g, slideIndex: e } });
                },
                initialSlide: _,
                children: l.map(
                  ({ id: a, alt: n, preload: o, lazyload: c }, d) => {
                    const _ = o ?? !1,
                      h = c ?? !1,
                      f = n ?? `${r} ${s ?? ""} - ${d + 1}/${l.length}`;
                    return (0, i.jsx)(
                      C.CarouselSnappedSlide,
                      {
                        children: (0, i.jsxs)(Jn, {
                          url: e,
                          onClick: j,
                          classModified: "carousel",
                          target: w ?? x,
                          children: [
                            (0, i.jsx)(ui, { overlay: m }),
                            (0, i.jsx)(ai, {
                              id: a,
                              alt: f,
                              preload: _,
                              lazyload: h,
                              square: u,
                              size: t,
                              sanitized_title: p,
                              isCarousel: !0,
                            }),
                          ],
                        }),
                      },
                      a
                    );
                  }
                ),
              },
              `${o}-${l[0].id}-${l.length}`
            )
          );
        },
        hi = `${kn}-component`,
        fi = ({
          alt_text: e,
          Imagewrapper: t,
          isCarousel: a,
          isListHeight: r,
          overlay: s,
          pictures: l,
          sanitized_title: o,
          size: d,
          square: u,
        }) => {
          const { countPreloadImages: m, isMobile: p } = Kn(),
            {
              cardNumber: _,
              useLazyImage: h,
              isHover: f = !1,
              onClick: v,
              url: y,
              title: g,
              metadata: b,
            } = xn(),
            [x, w] = (0, n.useState)(!1),
            { vertical_id: C } = b,
            { id: $, alt: N, preload: k, lazyload: E } = l[0],
            j = !!m && !!_ && _ <= m,
            L = k ?? !1,
            S = E ?? !L;
          (0, n.useEffect)(() => {
            !(x || ((p || !a || !f) && (!p || "RES" !== C))) && w(!0);
          }, [x, a, f, p, C]);
          const M = (0, n.useMemo)(
              () =>
                x
                  ? (0, i.jsx)(_i, {
                      url: y,
                      size: d,
                      pictures: l,
                      variationId: l[0].id,
                      square: u,
                      onClick: v,
                      title: g,
                      alt_text: e,
                      sanitized_title: o,
                      overlay: s,
                    })
                  : (0, i.jsx)("span", {}),
              [x, v, l, d, g, y, u, e]
            ),
            T =
              t === n.Fragment
                ? {}
                : {
                    className: c()(`${hi}__image-wrapper`, {
                      [`${hi}__image-wrapper--image-height`]: r,
                    }),
                  };
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(mi, {}),
              x && a && M,
              (0, i.jsxs)(t, {
                ...T,
                children: [
                  (0, i.jsx)(ui, { overlay: s }),
                  (0, i.jsx)(ai, {
                    id: $,
                    alt: N || g,
                    size: d,
                    square: u,
                    preload: L || j,
                    lazyload: h ?? (S && !j),
                    sanitized_title: o,
                    ariaHidden: !0,
                  }),
                ],
              }),
            ],
          });
        },
        vi = `${kn}-card__checkbox`,
        yi = ({ className: e }) => {
          const { checkbox: t } = Kn(),
            { metadata: a, checkbox: n, actionsCardMap: r } = xn();
          if (!t || !n) return null;
          const {
              checked: s,
              id: l,
              highlight: o,
              disabled: d,
              checkboxClassName: u,
              inputProps: m,
              accessibility: p,
            } = n,
            _ = r?.get(On)?.callback;
          return (0, i.jsx)("div", {
            className: c()(e, `${vi}`),
            children: (0, i.jsx)(_n.S, {
              id: l,
              checked: s,
              onChange: (e) => {
                _ && _({ event: e, data: { ...a } });
              },
              highlight: o,
              disabled: d,
              className: u,
              inputProps: m,
              srLabel: p,
            }),
          });
        },
        gi = ({
          children: e,
          className: t,
          styles: a,
          forwardedRef: n,
          onMouseEnter: r,
          onMouseLeave: s,
        }) => {
          const { isHover: l } = xn(),
            o = c()(
              "poly-andes-card",
              { "poly-andes-card--flat": !l, "poly-andes-card--elevated": l },
              t
            );
          return (0, i.jsx)("div", {
            className: o,
            onMouseEnter: r,
            onMouseLeave: s,
            style: a,
            ref: n,
            children: e,
          });
        },
        bi = ({
          tagName: e,
          forwardedRef: t,
          children: a,
          className: i,
          style: r,
          ...s
        }) => n.createElement(e, { ...s, ref: t, className: i, style: r }, a),
        xi = (0, n.forwardRef)(
          (
            {
              children: e,
              className: t,
              styles: a,
              as: n = "div",
              id: r,
              onMouseEnter: s,
              onMouseLeave: l,
            },
            o
          ) => {
            const { type: c } = Kn(),
              d = {
                forwardedRef: o,
                className: t,
                styles: a,
                onMouseEnter: s,
                onMouseLeave: l,
                id: r,
              };
            switch (c) {
              case "list":
              case "list-multicolumn":
              case "single":
                return (0, i.jsxs)(bi, {
                  tagName: n,
                  ...d,
                  children: [c.startsWith("list") && (0, i.jsx)(yi, {}), e],
                });
              case "list-card":
              case "grid-card":
                return (0, i.jsx)(gi, {
                  paddingSize: "grid-card" === c ? 0 : void 0,
                  ...d,
                  children: e,
                });
              default:
                return (0, i.jsx)(bi, { tagName: n, ...d, children: e });
            }
          }
        ),
        wi = `${kn}-action`,
        Ci = ({
          text: e,
          callback: t,
          type: a = "link",
          hierarchy: n,
          values: r,
          size: l,
          style_id: o,
        }) => {
          const { metadata: c } = xn(),
            { card_size: d } = Kn(),
            u =
              c.item_ids_for_removal ??
              c.id ??
              c.product_id ??
              c.user_product_id,
            m = (e) => {
              t?.({ event: e, data: { ...c } });
            },
            p = () =>
              (0, i.jsx)(Gn, { text: e, isAsText: !1, values: r, style_id: o });
          return (0, i.jsxs)("div", {
            "data-testid": "form-action",
            className: wi,
            children: [
              (0, i.jsx)("input", {
                type: "hidden",
                name: "id",
                value: u,
                "data-testid": "form-data-id",
              }),
              "link" === a
                ? (0, i.jsx)("button", {
                    className: `${wi}__button`,
                    type: "button",
                    onClick: m,
                    children: p(),
                  })
                : (0, i.jsx)(s.$n, {
                    type: "submit",
                    hierarchy: n,
                    onClick: m,
                    size: Tn(l || d),
                    children: (0, i.jsx)(s.C3, { children: p() }),
                  }),
            ],
          });
        },
        $i = `${kn}-action-links`,
        Ni = `${kn}-suggestions`,
        ki = `${kn}-component__suggestions`,
        Ei = () => {
          const [e, t] = (0, n.useState)(!1),
            [a, r] = (0, n.useState)(!1),
            { type: s } = Kn(),
            {
              suggestions: l,
              needSuggestions: o,
              setNeedSuggestions: d,
              actionsCardMap: u,
            } = xn();
          (0, n.useEffect)(() => {
            o && l ? (r(!0), t(!1)) : (r(!1), t(!0));
          }, [o, l]);
          const m = c()(ki, `${ki}--${"list-multicolumn" === s ? "list" : s}`, {
            [`${ki}--close`]: e,
            [`${ki}--open`]: a,
          });
          return l
            ? (0, i.jsxs)("div", {
                className: `${m}`,
                role: "region",
                "aria-labelledby": "suggestions-title",
                children: [
                  (0, i.jsxs)("div", {
                    className: `${Ni}__header`,
                    children: [
                      (0, i.jsxs)("div", {
                        className: `${Ni}__header-title`,
                        children: [
                          (0, i.jsx)(Gn, {
                            text: "{spotlight_compatible_green_icon}",
                            isAsText: !1,
                          }),
                          (0, i.jsx)("h3", {
                            id: "suggestions-title",
                            className: `${Ni}__title`,
                            children: l?.title.text,
                          }),
                        ],
                      }),
                      (0, i.jsx)("button", {
                        className: `${Ni}__close`,
                        onClick: () => {
                          d && (r(!1), d(!1), t(!0));
                        },
                        type: "button",
                        "aria-label": l?.close_button?.text,
                        children: (0, i.jsx)(Gn, {
                          text: "{icon_close}",
                          isAsText: !1,
                          values: [
                            {
                              key: "icon_close",
                              type: "icon",
                              icon: { key: "icon_close", alt_text: "" },
                            },
                            {
                              key: "icon_close",
                              type: "icon",
                              icon: { key: "icon_close", alt_text: "" },
                            },
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: `${Ni}__content`,
                    children: [
                      (0, i.jsx)("h3", {
                        className: `${Ni}__subtitle`,
                        id: "suggestions-subtitle",
                        children: l?.subtitle.text,
                      }),
                      (0, i.jsx)("ul", {
                        className: `${Ni}__list`,
                        "aria-labelledby": "suggestions-subtitle",
                        children: l?.tags.map((e) =>
                          (0, i.jsx)(
                            "li",
                            {
                              className: `${Ni}__item`,
                              children: (0, i.jsx)("a", {
                                className: `${Ni}__link`,
                                onClick: () =>
                                  ((e) => {
                                    const t = u?.get(Rn);
                                    l &&
                                      t?.callback &&
                                      t.callback({ data: { tag: e } });
                                  })(e),
                                href: e.url,
                                "aria-label": `${e.name}`,
                                children: (0, i.jsx)(hn.vw, {
                                  label: e.name,
                                  className: `${Ni}__tag`,
                                }),
                              }),
                            },
                            `${e.category_id}`
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        },
        ji = `${kn}-add-to-cart`,
        Li = ({
          text: e,
          cart_status: t,
          cart_config: a,
          accessibility_cart_empty: r,
        }) => {
          const [l, o] = (0, n.useState)(t && 0 !== t?.quantity),
            [c, d] = (0, n.useState)(!1),
            {
              actionsCardMap: u,
              setNeedSuggestions: m,
              metadata: p,
              title: _,
            } = xn(),
            { id: h, product_id: f, user_product_id: v } = p,
            y = (0, n.useRef)(null),
            g = u?.get(qn),
            b = u?.get(Fn),
            x = (e) => {
              g?.callback && g?.callback({ event: e, data: { ...p } }),
                !c && m && (m(!0), d(!0));
            };
          return (
            (0, n.useEffect)(() => {
              t &&
                (o(0 !== t.quantity),
                0 === t.quantity &&
                  m &&
                  (m(!1),
                  d(!1),
                  y.current &&
                    (y.current.focus(),
                    setTimeout(() => {
                      y.current && y.current.blur();
                    }, 1e3))));
            }, [t, t?.quantity]),
            (0, i.jsxs)(i.Fragment, {
              children: [
                r &&
                  (0, i.jsx)("span", {
                    "aria-atomic": "true",
                    className: "andes-visually-hidden",
                    ref: y,
                    children: r,
                  }),
                l
                  ? (0, i.jsx)(P, {
                      className: `${ji}__button--steper`,
                      srLabel: _ || "",
                      complementaryText: t?.text,
                      decrementButtonProps: {
                        onClick: (e) => {
                          b?.callback &&
                            b?.callback({ event: e, data: { ...p } }),
                            !c && m && (m(!0), d(!0));
                        },
                      },
                      id: `add_to_cart_${h ?? f ?? v}`,
                      incrementButtonProps: { onClick: x },
                      maxValue: a?.max_add_quantity,
                      size: "small",
                      value: t?.quantity,
                      formatValue: (e) => t?.format_value || e,
                    })
                  : (0, i.jsx)(s.$n, {
                      className: `${ji}__button--no-items`,
                      fullWidth: !0,
                      hierarchy: "quiet",
                      size: "medium",
                      onClick: x,
                      children: (0, i.jsx)(s.C3, { children: e }),
                    }),
              ],
            })
          );
        },
        Si = `${kn}-add-to-cart`,
        Mi = ({ text: e, styles: t, values: a, style_id: n }) =>
          e
            ? (0, i.jsx)(Gn, {
                className: `${Si}__minimum-label`,
                text: e,
                styles: t,
                values: a,
                style_id: n,
              })
            : null,
        Ti = `${kn}-add-to-cart`,
        Ai = ({ text: e, url: t, target: a }) => {
          const { actionsCardMap: n, metadata: r } = xn(),
            l = n?.get(Hn);
          return (0, i.jsx)(s.$n, {
            className: `${Ti}__button--other-options`,
            fullWidth: !0,
            hierarchy: "quiet",
            href: t,
            target: a,
            size: "medium",
            onClick: (e) => {
              l?.callback && l.callback({ event: e, data: { ...r } });
            },
            children: (0, i.jsx)(s.C3, { children: e }),
          });
        },
        zi = `${kn}-add-to-cart`,
        qi = ({ text: e, styles: t, values: a, style_id: n }) =>
          (0, i.jsx)(Gn, {
            className: `${zi}__shipping-label`,
            text: e,
            styles: t,
            style_id: n,
            values: a,
          }),
        Fi = ({ texts: e, separator: t, className: a, type: n }) => {
          const { card_size: r } = Kn(),
            s = `${kn}-${n}`;
          return (0, i.jsx)("div", {
            className: a,
            children: (0, i.jsx)("ul", {
              className: s,
              style: {
                "--separator-content": `"${t}"`,
                gap: "," === t || "small" === r ? "0px" : "2px",
              },
              children: e?.map((e) =>
                (0, i.jsx)(
                  "li",
                  {
                    className: c()(`${s}__item`, [`${s}__separator`, !!t]),
                    children: e,
                  },
                  e?.toLowerCase().replace(" ", "-")
                )
              ),
            }),
          });
        },
        Hi = (0, n.memo)(
          ({
            digit: e,
            previousDigit: t,
            isAnimating: a = !1,
            className: r,
          }) => {
            const {
              safeDigit: s,
              prevDigit: l,
              animating: o,
              currentDigitRef: d,
              animationKey: u,
            } = (({
              digit: e,
              previousDigit: t,
              isCurrentlyAnimating: a = !1,
            }) => {
              const i = Math.max(0, Math.min(9, parseInt(String(e), 10) || 0)),
                [r, s] = (0, n.useState)(!1),
                [l, o] = (0, n.useState)(void 0 !== t ? t : i),
                [c, d] = (0, n.useState)(l),
                [u, m] = (0, n.useState)(i),
                [p, _] = (0, n.useState)(0),
                h = (0, n.useRef)(null);
              return (
                (0, n.useEffect)(() => {
                  (i === l && !a) || r || (d(l), m(i), s(!0), _((e) => e + 1));
                }, [i, l, a, r]),
                (0, n.useEffect)(() => {
                  const e = h.current,
                    t = () => {
                      o(u), s(!1);
                    };
                  if (e && r) {
                    const a = () => t(),
                      n = () => t();
                    return (
                      e.addEventListener("animationend", a),
                      e.addEventListener("animationcancel", n),
                      () => {
                        e.removeEventListener("animationend", a),
                          e.removeEventListener("animationcancel", n);
                      }
                    );
                  }
                }, [r, u]),
                (0, n.useEffect)(() => {
                  const e = () => {
                    "visible" === document.visibilityState &&
                      (o((e) => (e !== i ? i : e)), s(!1));
                  };
                  return (
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                  );
                }, [i]),
                {
                  safeDigit: r ? u : i,
                  prevDigit: r ? c : l,
                  animating: r,
                  currentDigitRef: h,
                  animationKey: p,
                }
              );
            })({ digit: e, previousDigit: t, isCurrentlyAnimating: a });
            return (0, i.jsxs)("div", {
              className: `${r}__roller-container`,
              children: [
                (0, i.jsx)(
                  "span",
                  {
                    ref: d,
                    className: c()(`${r}__digit`, {
                      [`${r}__digit--current`]: o,
                      [`${r}__digit--static`]: !o,
                    }),
                    children: s,
                  },
                  `cur-${u}`
                ),
                o &&
                  (0, i.jsx)(
                    "span",
                    {
                      className: `${r}__digit ${r}__digit--previous`,
                      children: l,
                    },
                    `prev-${u}`
                  ),
              ],
            });
          }
        ),
        Pi = (0, n.memo)(
          ({
            digit: e,
            previousDigit: t,
            isAnimating: a = !1,
            className: n,
            animation: r,
          }) =>
            r
              ? (0, i.jsx)(Hi, {
                  digit: e,
                  previousDigit: t,
                  isAnimating: a,
                  className: n,
                  animation: r,
                })
              : (0, i.jsx)("div", {
                  className: `${n}__roller-container`,
                  children: (0, i.jsx)("span", {
                    className: `${n}__digit ${n}__digit--static`,
                    children: e,
                  }),
                })
        ),
        Vi = (0, n.memo)(
          ({ digit: e, animation: t, background: a, className: r }) => {
            const {
                first: s,
                second: l,
                prevFirst: o,
                prevSecond: c,
                isFirstChanging: d,
                isSecondChanging: u,
              } = ((e) => {
                const t = Math.max(0, Math.min(99, e)),
                  a = Math.floor(t / 10),
                  i = t % 10,
                  [r, s] = (0, n.useState)(a),
                  [l, o] = (0, n.useState)(i);
                return (
                  (0, n.useEffect)(() => {
                    a !== r && s(a), i !== l && o(i);
                  }, [a, i, r, l]),
                  {
                    first: a,
                    second: i,
                    prevFirst: r,
                    prevSecond: l,
                    isFirstChanging: a !== r,
                    isSecondChanging: i !== l,
                  }
                );
              })(e),
              m = {
                className: `${r}__block`,
                ...(a && { style: { background: a } }),
              };
            return (0, i.jsxs)("div", {
              ...m,
              children: [
                (0, i.jsx)(Pi, {
                  digit: s,
                  previousDigit: o,
                  isAnimating: d,
                  animation: t,
                  className: r,
                }),
                (0, i.jsx)(Pi, {
                  digit: l,
                  previousDigit: c,
                  isAnimating: u,
                  animation: t,
                  className: r,
                }),
              ],
            });
          }
        ),
        Ri = (e) => {
          const t = Date.now(),
            a = Math.max(0, e - t),
            n = Math.floor(a / 1e3);
          return {
            hours: Math.floor(n / 3600),
            minutes: Math.floor((n % 3600) / 60),
            seconds: n % 60,
          };
        },
        Ii = `${kn}-component__countdown`,
        Bi = `${kn}-countdown`,
        Di = ({
          animation: e,
          styles: t,
          onComplete: a,
          className: r,
          endTime: s,
        }) => {
          const {
              hourLocal: l,
              minuteLocal: o,
              secondLocal: d,
            } = (({ endTime: e, onComplete: t }) => {
              const [a, i] = (0, n.useState)(0),
                [r, s] = (0, n.useState)(0),
                [l, o] = (0, n.useState)(0),
                [c, d] = (0, n.useState)(!1);
              return (
                (0, n.useEffect)(() => {
                  d(!0);
                }, []),
                (0, n.useEffect)(() => {
                  if (!c) return;
                  const { hours: a, minutes: n, seconds: r } = Ri(e);
                  i(a), s(n), o(r), 0 === a && 0 === n && 0 === r && t?.();
                }, [c, e, t]),
                (0, n.useEffect)(() => {
                  if (!c) return;
                  if (0 === a && 0 === r && 0 === l) return;
                  const n = setTimeout(() => {
                    const { hours: n, minutes: c, seconds: d } = Ri(e);
                    n !== a && i(n),
                      c !== r && s(c),
                      d !== l && o(d),
                      0 === n && 0 === c && 0 === d && t?.();
                  }, 1e3);
                  return () => clearTimeout(n);
                }, [c, a, r, l, e, t]),
                { hourLocal: a, minuteLocal: r, secondLocal: l }
              );
            })({ endTime: s, onComplete: a }),
            { color_hex: u, background_color_hex: m } = t || {},
            p = { className: c()(r, Ii), ...(u && { style: { color: u } }) },
            _ = { animation: e, background: m, className: Bi };
          return (0, i.jsxs)("div", {
            ...p,
            "aria-hidden": !0,
            children: [
              (0, i.jsx)(Vi, { ..._, digit: l }),
              (0, i.jsx)("span", {
                className: `${Bi}__separator`,
                children: ":",
              }),
              (0, i.jsx)(Vi, { ..._, digit: o }),
              (0, i.jsx)("span", {
                className: `${Bi}__separator`,
                children: ":",
              }),
              (0, i.jsx)(Vi, { ..._, digit: d }),
            ],
          });
        },
        Qi = (0, n.memo)(
          ({
            countdown: { period_end: e, styles: t, animation: a },
            onComplete: n,
            className: r,
          }) => {
            const s = new Date(e ?? "").getTime();
            return (0, i.jsx)(Di, {
              animation: a,
              styles: t,
              onComplete: n,
              className: r,
              endTime: s,
            });
          }
        ),
        Oi = `${kn}-highlight-countdown`,
        Wi = ({ url: e, target: t, components: a }) =>
          (0, i.jsx)(Jn, {
            url: e,
            target: t,
            className: "poly-buy-box__alternative-option",
            children: (0, i.jsx)(gr, { components: a }),
          }),
        Ui = `${kn}-buy-box`,
        Ki = ({
          no_interest: e,
          text: t,
          className: a,
          styles: n,
          values: r,
        }) => {
          const { thousandSeparator: s, decimalSeparator: l } = Kn(),
            o = { color: e ? "positive" : "primary", ...n };
          return (0, i.jsx)(Gn, {
            text: t,
            styles: o,
            values: r,
            className: a,
          });
        },
        Zi = `${kn}-installments__options`,
        Gi = ({ children: e, className: t, ...a }) =>
          (0, i.jsxs)("div", {
            className: `${t}__wrapper`,
            children: [
              (0, i.jsx)(Gn, {
                ...a,
                className: `${t}__pill`,
                iconClassName: `${t}__icon`,
              }),
              e,
            ],
          }),
        Xi = ({ pills: e, type: t, className: a }) => {
          const r = `${kn}-${t}`;
          return (0, i.jsx)("div", {
            className: a,
            children: e?.map((e) => {
              const { discount: t, discount_time: a } = e,
                s = t ? { ...t } : { ...e };
              return (0, n.createElement)(
                Gi,
                {
                  ...s,
                  className: r,
                  key: s.text?.toLowerCase().replace(" ", "-"),
                },
                a && (0, i.jsx)(ri, { ...a, className: `${r}__label` })
              );
            }),
          });
        },
        Yi = { ",": "comma", ".": "dot" },
        Ji = (e, t, a) => {
          const n = ((e, t) => {
              const a = e < 0 ? Math.ceil(e) : Math.floor(e),
                n = a < 0,
                i = Math.abs(a),
                r = new Intl.NumberFormat("en-US", {
                  useGrouping: !0,
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })
                  .format(i)
                  .replace(/,/g, t);
              return n ? `-${r}` : r;
            })(e, a),
            i = ((e, t) => {
              const a = e.toFixed(2).split(".")[1];
              return "00" !== a && "none" !== t ? a : "";
            })(e, t || "superscript");
          return { fraction: n, cents: i };
        },
        er = (e, t) => ("superscript" === e ? "superscript" : Yi[t]),
        tr = ({
          value: e,
          size: t,
          currency: a,
          decimal_style: r = "superscript",
          suffix: s,
          symbol: l,
          combo: o,
        }) => {
          const {
              thousandSeparator: c,
              decimalSeparator: d,
              card_size: u,
            } = Kn(),
            m = (0, n.useMemo)(
              () =>
                t ||
                ({ small: 14, medium: 16, large: 20, xlarge: 24 }[u] ?? 24),
              [t, u]
            );
          if (!(c && d && e && a)) return console.error(yn), null;
          const p = Ji(e, r, c),
            _ = er(r, d);
          return (0, i.jsx)(Va.BH, {
            size: m,
            currencyId: a,
            value: p,
            centsType: _,
            suffix: s,
            symbol: l,
            combo: o,
          });
        },
        ar = ({ size: e, value: t, className: a }) => {
          const { card_size: r } = Kn(),
            s = (0, n.useMemo)(
              () =>
                e ||
                ({ small: 12, medium: 12, large: 12, xlarge: 14 }[r] ?? 14),
              [e, r]
            );
          return (0, i.jsx)(Va.cB, { className: a, size: s, value: t });
        },
        nr = ({
          value: e,
          size: t,
          currency: a,
          decimal_style: n = "superscript",
          suffix: r,
          symbol: s,
        }) => {
          const { thousandSeparator: l, decimalSeparator: o } = Kn();
          if (!l || !o) return console.error(yn), null;
          const c = Ji(e, n, l),
            d = er(n, o);
          return (0, i.jsx)(Va.BH, {
            size: t ?? 12,
            currencyId: a,
            value: c,
            centsType: d,
            suffix: r,
            symbol: s,
            previous: !0,
          });
        },
        ir = `${kn}-price`,
        rr = ["icon_star", "icon_star_half", "icon_star_fill"],
        sr = (e) => Math.floor(10 * e - 10 * Math.floor(e)) / 10,
        lr = (e) => {
          if ("number" != typeof e) return 0;
          return Math.min(5, Math.max(0, Number(e)));
        },
        or = (e) => {
          const [t, a] = ((e) => [Math.floor, sr].map((t) => t(e)))(e);
          return Array.from({ length: 5 }, (e, n) =>
            n < t ? 2 : n === t ? (a <= 0.2 ? 0 : a > 0.7 ? 2 : 1) : 0
          );
        },
        cr = (e) => {
          const t = lr(e),
            a = or(t);
          return [
            a.map((e) => `{${rr[e]}}`).join(" "),
            [0, 1, 2]
              .filter((e) => a.some((t) => e === t))
              .map((e) =>
                ((e) => {
                  const t = 1 === e ? "_half" : "";
                  return {
                    type: "icon",
                    key: `icon_star${2 === e ? "_fill" : t}`,
                    icon: {
                      key: `star${2 === e ? "_fill" : t}`,
                      aria_hidden: !0,
                    },
                  };
                })(e)
              ),
          ];
        },
        dr = `${kn}-reviews`,
        ur = n.memo(Gn),
        mr = `${kn}-shipping`,
        pr = ({
          pictures: e,
          picture_size: t,
          variation_id: a,
          description: r,
          url_product: s,
          url_params: l,
          url_fragments: o,
          sanitized_title: d,
        }) => {
          const u = "poly-variations__item",
            {
              isNavigableToVariation: m,
              url_prefix: p,
              url_params_default: _,
              url_fragments_default: h,
            } = Kn(),
            {
              setPicturesSelected: f,
              variationSelected: v,
              setVariationSelected: y,
              metadata: g,
              actionsCardMap: b,
            } = xn(),
            x = Mn(g, l, p, _, h, o, s),
            w = b?.get(Qn)?.callback,
            C = (0, n.useCallback)(() => {
              if (f && !w) {
                const t = e.map((t) => ({
                  ...t,
                  lazyload: 1 !== e.length && t?.lazyload,
                }));
                f(t);
              }
              w && w({ data: { variation_id: a } }), y && y(a);
            }, [f, w, e, a, y]),
            $ = c()(u, { [`${u}--active`]: a === v });
          return (0, i.jsx)(
            "li",
            {
              className: $,
              children: (0, i.jsx)("a", {
                ...(m ? { href: x } : { onClick: C }),
                role: "button",
                "aria-label": r,
                className: "poly-variations__anchor",
                children:
                  !!e &&
                  (0, i.jsx)(ai, {
                    id: e[0].id,
                    size: t,
                    alt: r,
                    sanitized_title: d,
                  }),
              }),
            },
            `variation-item-${a}`
          );
        },
        _r = ({
          text: e,
          variations: t,
          picture_size: a,
          total_variations: r,
        }) => {
          const { isMobile: s, card_size: l } = Kn(),
            { setLabelPill: o, url: c } = xn(),
            d = (0, n.useMemo)(() => {
              const e = {
                small: 48,
                medium: 50,
                mobile: 52,
                large: 46,
                xlarge: 46,
              };
              return (
                ("large" !== l && "xlarge" !== l ? e[l] : null) ||
                (s ? e.mobile : e.large)
              );
            }, [l, s]),
            u = (0, n.useRef)(null),
            [m, p] = (0, n.useState)(!1),
            [_, h] = (0, n.useState)(0),
            [f, v] = (0, n.useState)([]);
          return (
            (0, n.useEffect)(() => {
              if (u.current) {
                const e = Math.floor((u.current.clientWidth - 10) / d),
                  t = !!r && r <= e;
                h(t ? e : e - 1), p(!t);
              }
            }, [d, r, u]),
            (0, n.useEffect)(() => {
              const e = (t ?? [])
                .map(
                  (
                    {
                      pictures: e,
                      variation_id: t,
                      description: i,
                      url: r,
                      url_params: s,
                      url_fragments: l,
                      sanitized_title: o,
                    },
                    c
                  ) => {
                    if (c > _ - 1) return null;
                    const d = {
                      pictures: e,
                      picture_size: a,
                      variation_id: t,
                      description: i,
                      url_product: r,
                      url_params: s,
                      url_fragments: l,
                      sanitized_title: o,
                    };
                    return (0, n.createElement)(pr, {
                      ...d,
                      key: `variation-picker-${t}`,
                    });
                  }
                )
                .filter(Boolean);
              v(e);
            }, [m, a, t, _]),
            (0, n.useEffect)(() => {
              e && o && o(e);
            }, [e, o]),
            t &&
              (0, i.jsxs)("ul", {
                className: "poly-variations-picker",
                ref: u,
                children: [
                  f,
                  f &&
                    m &&
                    (0, i.jsx)(
                      "li",
                      {
                        className: "poly-variations__item",
                        children: (0, i.jsx)(Jn, {
                          url: c,
                          classModified: "variations",
                          children: "+" + ((r ?? 0) - f.length),
                        }),
                      },
                      "variation-picker-extra"
                    ),
                ],
              })
          );
        },
        hr = ({
          text: e,
          variations: t,
          picture_size: a,
          total_variations: r,
        }) => {
          const {
              setPicturesSelected: s,
              variationSelected: l,
              setVariationSelected: o,
              url: d,
              metadata: u,
            } = xn(),
            {
              isNavigableToVariation: m,
              url_prefix: p,
              url_params_default: _,
              url_fragments_default: h,
            } = Kn(),
            f = "poly-variations-select",
            v = m ? "a" : n.Fragment,
            y = !!r && r > (t?.length || 0),
            [g, b] = (0, n.useState)();
          (0, n.useEffect)(() => {
            t && b(t.find(({ variation_id: e }) => e === l)?.description);
          }, [t, l]);
          const x = (t ?? []).map(
            ({ variation_id: e, url_params: t, url_fragments: a, url: n }) => ({
              variation_id: e,
              url: Mn(u, t, p, _, h, a, n),
            })
          );
          return (
            g &&
            (0, i.jsxs)("div", {
              className: `${f}`,
              children: [
                (0, i.jsx)("p", {
                  className: `${f}__label`,
                  children: `${e}:`,
                }),
                (0, i.jsx)(fn.lZ, {
                  className: `${f}__dropdown`,
                  label: g,
                  value: l,
                  menuAlignment: "bottom",
                  onChange: (e, a) =>
                    "string" == typeof a &&
                    !m &&
                    ((e) => {
                      const a = t?.find(({ variation_id: t }) => t === e);
                      a &&
                        (s &&
                          s(
                            a.pictures.map((e) => ({
                              ...e,
                              lazyload: 1 !== a.pictures.length && e?.lazyload,
                            }))
                          ),
                        o && o(a.variation_id));
                    })(a),
                  children: (() => {
                    const e = (t ?? []).map(
                      (
                        {
                          variation_id: e,
                          pictures: n,
                          description: r,
                          sanitized_title: s,
                        },
                        l
                      ) => {
                        const o = x.find(({ variation_id: t }) => t === e)?.url;
                        return y && l + 1 >= 6 && l === (t?.length ?? 0) - 1
                          ? null
                          : (0, i.jsx)(
                              vn.ck,
                              {
                                value: e,
                                className: c()("poly-variations__item"),
                                "aria-label": r,
                                children:
                                  !!n &&
                                  (0, i.jsx)(v, {
                                    ...(m && {
                                      href: o,
                                      className: "poly-variations__anchor",
                                    }),
                                    children: (0, i.jsx)(ai, {
                                      id: n[0].id,
                                      size: a,
                                      alt: r,
                                      sanitized_title: s,
                                    }),
                                  }),
                              },
                              `variation-select-${e}`
                            );
                      }
                    );
                    if (y && e) {
                      const t = "+" + (r - e.filter(Boolean).length);
                      e.push(
                        (0, i.jsx)(
                          vn.ck,
                          {
                            className: "poly-variations__item",
                            "aria-label": t,
                            children: (0, i.jsx)(Jn, {
                              url: d,
                              classModified: "variations",
                              children: t,
                            }),
                          },
                          "variation-select-extra"
                        )
                      );
                    }
                    return e.filter(Boolean);
                  })(),
                }),
              ],
            })
          );
        },
        fr = {
          action_links: "action_links",
          add_to_cart: "add_to_cart",
          add_to_cart_capability: "add_to_cart_capability",
          attributes_list: "attributes_list",
          attributes_selected: "attributes_selected",
          available_units: "available_units",
          brand: "brand",
          buy_box: "buy_box",
          chip: "chip",
          cbt: "cbt",
          compats: "compats",
          coupons: "coupons",
          cpg: "cpg",
          threshold_label: "threshold_label",
          headline: "headline",
          highlight: "highlight",
          highlight_countdown: "highlight_countdown",
          installation_services: "installation_services",
          installments_options: "installments_options",
          item_condition: "item_condition",
          label: "label",
          last_available: "last_available",
          location: "location",
          manufacturing_time: "manufacturing_time",
          paused: "paused",
          pill: "pill",
          possession_date: "possession_date",
          price_per_quantity: "price_per_quantity",
          label_price_for_business: "label_price_for_business",
          price: "price",
          promotions: "promotions",
          purchase_options: "purchase_options",
          rebates: "rebates",
          reviews: "reviews",
          review_compacted: "review_compacted",
          seller: "seller",
          shipped_from: "shipped_from",
          shipping: "shipping",
          title: "title",
          trade_in: "trade_in",
          variations_text: "variations_text",
          variations: "variations",
          visit_history: "visit_history",
          visit_request: "visit_request",
        },
        vr = {
          action_links: ({ action_links: e, className: t }) => {
            const { actionsCardMap: a } = xn(),
              n = e?.some(({ type: e }) => "button" === e),
              r = c()($i, t, { [`${t}--buttons`]: n });
            return (0, i.jsx)("div", {
              className: r,
              children: e?.map((e) => {
                const t = { ...e, classModified: "action-link" },
                  n = a?.get(e.id);
                n?.onClick && (t.onClick = n.onClick);
                const r =
                    n && n.callback
                      ? (0, i.jsx)(Ci, { ...e, callback: n.callback })
                      : (0, i.jsx)(Jn, { ...t }),
                  s = c()(`${$i}__action`, {
                    [`${$i}__action--${e.type}`]: !!e.type,
                  });
                return (0, i.jsx)("div", { className: s, children: r }, e.id);
              }),
            });
          },
          add_to_cart: ({ text: e, url: t, target: a, className: n, ...r }) => {
            const { cart_config: s, cart_shipping: l } = r,
              { type: o } = Kn();
            return (0, i.jsxs)("div", {
              className: n,
              children: [
                l && (0, i.jsx)(qi, { ...l }),
                (o?.includes("grid") || o?.includes("single")) &&
                  (0, i.jsx)(Ei, {}),
                t
                  ? (0, i.jsx)(Ai, { text: e, url: t, target: a })
                  : (0, i.jsx)(Li, { text: e, ...r }),
                s && s.min_add_text && (0, i.jsx)(Mi, { ...s.min_add_text }),
              ],
            });
          },
          add_to_cart_capability: Zn,
          attributes_list: Fi,
          available_units: ri,
          brand: ri,
          buy_box: ({ alternative_options: e, className: t, text: a }) =>
            (0, i.jsxs)("div", {
              className: t,
              children: [
                (0, i.jsx)("span", {
                  className: `${Ui}__headline`,
                  children: a,
                }),
                e?.map((e) => (0, n.createElement)(Wi, { ...e, key: e.url })),
              ],
            }),
          chip: ({
            inverted: e = !1,
            inline: t = !0,
            pill: a,
            label: n,
            className: r,
          }) => {
            const s = c()(r, { [`${r}--stacked`]: !t, [`${r}--inverted`]: e });
            return (0, i.jsxs)("div", {
              className: s,
              children: [
                a && (0, i.jsx)(Gi, { ...a, className: "poly-pill" }),
                n &&
                  (0, i.jsx)(Gn, { ...n, className: "poly-component__label" }),
              ],
            });
          },
          cbt: ri,
          cpg: ri,
          compats: ri,
          threshold_label: ({
            className: e,
            styles: t,
            text: a,
            values: n,
            style_id: r,
          }) =>
            (0, i.jsx)(Gn, {
              className: e,
              styles: t,
              style_id: r,
              text: a,
              values: n,
            }),
          installation_services: ri,
          coupons: Xi,
          shipped_from: ri,
          headline: ri,
          highlight: ri,
          highlight_countdown: ({
            className: e,
            styles: t,
            text: a,
            countdown: r,
            alt_text_active: s,
            alt_text_inactive: l,
            values: o,
          }) => {
            const d =
              new Date((r?.period_end ?? "") || "").getTime() >
              new Date().getTime();
            const [u, m] = (0, n.useState)(d ? s : l),
              p = r && r?.period_end,
              { background_color_hex: _, ...h } = t || {},
              f = {
                className: c()(e, { [`${e}--without-countdown`]: !p }),
                ...(_ && { style: { background: _ } }),
              },
              v = {
                text: a,
                alt_text: u,
                ...(h && { styles: h }),
                ...(o && { values: o }),
              };
            return (0, i.jsxs)("div", {
              ...f,
              children: [
                (0, i.jsx)(Gn, { ...v, className: `${Oi}__text` }),
                p &&
                  (0, i.jsx)(Qi, {
                    countdown: r,
                    onComplete: () => {
                      m(l);
                    },
                  }),
              ],
            });
          },
          installments_options: ({ installments_options: e, className: t }) =>
            (0, i.jsx)("div", {
              className: t,
              children: e?.map((e) =>
                (0, n.createElement)(Ki, { className: Zi, ...e, key: e.text })
              ),
            }),
          item_condition: ri,
          label: ri,
          last_available: ri,
          location: ri,
          manufacturing_time: ri,
          paused: ri,
          pill: Xi,
          possession_date: ri,
          label_price_for_business: ri,
          price_per_quantity: Xi,
          price: ({
            price_to_agree: e,
            discount: t,
            discount_label: a,
            current_price: r,
            previous_price: s,
            installments: l,
            price_detail: o,
            unit_description: d,
            previous_label: u,
            price_complements: m,
            prefix: p,
            prefix_price: _,
            className: h,
          }) => {
            const {
                thousandSeparator: f,
                decimalSeparator: v,
                stylesDefault: y,
              } = Kn(),
              g = (e, t) => e && (0, i.jsx)(Gn, { ...e, className: c()(...t) }),
              b = s || u,
              x = s && u ? "div" : n.Fragment,
              w =
                x === n.Fragment
                  ? {}
                  : { className: c()(`${ir}__previews-wrapper`) };
            return (0, i.jsxs)("div", {
              className: h,
              children: [
                g(e, [`${ir}__agree`]),
                g(p, [`${ir}__prefix`]),
                b &&
                  (0, i.jsxs)(x, {
                    ...w,
                    children: [
                      s && (0, i.jsx)(nr, { ...s }),
                      u && g(u, [`${ir}__previews-label`]),
                    ],
                  }),
                r &&
                  (0, i.jsxs)("div", {
                    className: c()(`${ir}__current`),
                    children: [
                      _ && g(_, [`${ir}__prefix-price`]),
                      (0, i.jsx)(tr, { ...r, combo: !!s }),
                      a &&
                        g(a, [
                          c()(
                            `${ir}__disc_label`,
                            "andes-money-amount__discount",
                            {
                              [`${ir}__disc_label--pill`]:
                                a?.styles?.background_color_hex,
                            }
                          ),
                        ]),
                      t &&
                        (0, i.jsx)(ar, {
                          className: c()(`${ir}__disc--pill`),
                          ...t,
                        }),
                    ],
                  }),
                g(d, [`${ir}__unit-description`]),
                g(o, [`${ir}__price-detail`]),
                l &&
                  (0, i.jsx)(Ki, {
                    ...l,
                    className: c()(`${ir}__installments`),
                    styles: zn(l, y),
                  }),
                m?.length
                  ? (0, i.jsx)("div", {
                      className: c()(`${ir}__complements`),
                      children: m.map((e) =>
                        (0, i.jsx)(
                          Gn,
                          {
                            ...e,
                            className: c()(`${ir}__complement`, {
                              [`${ir}__complement--pill`]:
                                e.styles?.background_color_hex,
                            }),
                            styles: zn(e, y),
                          },
                          e.text
                        )
                      ),
                    })
                  : null,
              ],
            });
          },
          promotions: Xi,
          purchase_options: ri,
          rebates: Xi,
          reviews: ({
            className: e,
            rating_average: t,
            total: a,
            alt_text: r,
          }) => {
            const [s, l] = (0, n.useMemo)(() => cr(t), [t]),
              o = ((e) => Math.abs(Math.trunc("number" == typeof e ? e : 0)))(
                a
              ),
              d = ((e) => {
                const t = lr(e);
                return t % 1 == 0 ? `${t}.0` : `${t}`;
              })(t);
            return (0, i.jsxs)("div", {
              className: e,
              children: [
                (0, i.jsx)("span", {
                  className: "andes-visually-hidden",
                  children: r,
                }),
                (0, i.jsx)("span", {
                  className: c()(`${dr}__rating`),
                  "aria-hidden": "true",
                  children: d,
                }),
                (0, i.jsx)(
                  ur,
                  { text: s, values: l, className: c()(`${dr}__starts`) },
                  t
                ),
                (0, i.jsx)("span", {
                  className: c()(`${dr}__total`),
                  "aria-hidden": "true",
                  children: `(${o})`,
                }),
              ],
            });
          },
          review_compacted: ri,
          seller: ri,
          shipping: ({
            text: e,
            styles: t,
            values: a,
            className: n,
            promise_type: r = "none",
            icon: s,
            alt_text: l,
            additional_text: o,
            style_id: d,
          }) => {
            const u = r && "none" !== r,
              m = c()({ [`${mr}--${r}`]: u }),
              p = c()({
                [`${mr}__promise-icon--meli-plus`]: s?.key.includes("plus"),
                [`${mr}__promise-icon--full-super`]: s?.key.includes("super"),
                [`${mr}__promise-icon--full`]:
                  !s?.key.includes("plus") && !s?.key.includes("super"),
              }),
              _ = s
                ? [
                    {
                      ...(!!s && {
                        key: s.key,
                        type: "icon",
                        icon: {
                          aria_label: s?.alt_text,
                          key: s?.key,
                          src: s?.src,
                        },
                      }),
                    },
                  ]
                : [];
            return (0, i.jsx)("div", {
              className: n,
              children: (0, i.jsxs)(i.Fragment, {
                children: [
                  e &&
                    (0, i.jsx)(Gn, {
                      text: e,
                      values: a,
                      styles: t,
                      style_id: d,
                      className: m || void 0,
                      isAsText: u || !!s,
                    }),
                  s &&
                    (0, i.jsx)(Gn, {
                      text: `{${s.key}}`,
                      values: _,
                      iconClassName: p,
                      isAsText: !1,
                    }),
                  o &&
                    (0, i.jsx)(Gn, {
                      text: o,
                      className: `${mr}__additional_text`,
                      values: a,
                    }),
                ],
              }),
            });
          },
          title: ({
            title_tag: e,
            long_title: t,
            className: a,
            max_lines: n,
            values: r,
            styles: s,
            text: l,
            style_id: o,
          }) => {
            const { targetLink: d, target: u, rel: m } = Kn(),
              { url: p, onClick: _, metadata: h } = xn(),
              { rel: f } = h,
              v = u ?? d,
              y = c()(a, { [`${a}--long`]: t, [`${a}--line-clamp-${n}`]: n });
            return (0, i.jsx)(Gn, {
              text: l,
              url: p,
              styles: s,
              style_id: o,
              values: r,
              className: y,
              target: p ? v : void 0,
              onClick: _,
              asBox: e,
              boxClassName: e ? `${a}-wrapper` : void 0,
              rel: f ?? m,
              ...(!p && !e && { asText: "p" }),
            });
          },
          trade_in: ri,
          variations_text: ri,
          variations: ({
            className: e,
            text: t,
            variations: a,
            picture_size: r,
            total_variations: s,
          }) => {
            const { type: l, isMobile: o, card_size: c } = Kn(),
              { setVariationSelected: d } = xn(),
              u = {
                variations: a,
                text: t,
                picture_size: r,
                total_variations: s,
              };
            return (
              (0, n.useEffect)(() => {
                d && a?.length && d(a[0].variation_id);
              }, [d, a]),
              (0, i.jsx)("div", {
                className: e,
                children:
                  l?.includes("list") && !o && An(c)
                    ? (0, i.jsx)(hr, { ...u })
                    : (0, i.jsx)(_r, { ...u }),
              })
            );
          },
          attributes_selected: Fi,
          visit_history: ri,
          visit_request: ri,
        },
        yr = "poly-component",
        gr = ({ components: e }) => {
          const {
            metadata: { id: t, product_id: a, user_product_id: n },
          } = xn();
          if (0 === e.length) return null;
          const r = t ?? a ?? n,
            s = {
              coupon: "coupons",
              rebate: "rebates",
              pill: "pill",
              label: "label",
            },
            l = new Set(["action_links", "installments_options"]),
            o = new Set(["coupons", "rebates", "pill", "price_per_quantity"]),
            d = (e) => {
              return (t = e), Array.isArray(t) ? t : [t];
              var t;
            };
          return (0, i.jsx)(i.Fragment, {
            children: e.map((e) => {
              const t = ((e, t) => {
                  if ("string" != typeof e) {
                    if ("pill" === e.type) {
                      const t = e.pill?.text;
                      return t && "" !== t.trim()
                        ? t.toLowerCase().split(" ").join("_")
                        : "pill_empty";
                    }
                    return `${e.id ?? e.type}-${t}`;
                  }
                  return `${e}-${t}`;
                })(e, r),
                { type: a, ...n } = e,
                u = fr[a];
              if (u && u in n && "type" in e) {
                if ("promotions" === e.type)
                  return e.promotions?.map(({ type: e, ...a }) =>
                    ((e, t, a) => {
                      if (
                        ((e) =>
                          [
                            "coupon",
                            "rebate",
                            "pill",
                            "price_per_quantity",
                            "melicoin",
                          ].includes(e))(t)
                      ) {
                        const n = vr.pill,
                          r = { pills: [a], type: s[t] };
                        return (0, i.jsx)(
                          n,
                          {
                            ...r,
                            className: `${yr}__${s[t].replace(/_/g, "-")}`,
                          },
                          e + t
                        );
                      }
                      const n = vr.label,
                        r = { ...a };
                      return (0, i.jsx)(
                        n,
                        {
                          ...r,
                          className: `${yr}__${s[t].replace(/_/g, "-")}`,
                        },
                        e + t
                      );
                    })(t, e, a)
                  );
                const r = vr[a],
                  m = n[u];
                let p = { ...m, type: a };
                if (
                  (l.has(e.type) && (p = { [e.type]: d(m) }), o.has(e.type))
                ) {
                  p = { pills: d(m), type: e.type };
                }
                const _ = c()(`${yr}__${e.type.replace(/_/g, "-")}`, {
                  [p?.class_name]: Object.prototype.hasOwnProperty.call(
                    p,
                    "class_name"
                  ),
                });
                return (0, i.jsx)(r, { ...p, className: _ }, t);
              }
              return null;
            }),
          });
        },
        br = `${kn}-variations-compacted`,
        xr = `${kn}-component__variations-compacted`,
        wr = ({ variations: e, alt_text: t }) =>
          (0, i.jsxs)("div", {
            className: xr,
            children: [
              t &&
                (0, i.jsx)("span", {
                  className: "andes-visually-hidden",
                  children: t,
                }),
              e?.length
                ? e.map((e) => {
                    if ("label" === e.type)
                      return (0, i.jsx)(
                        "span",
                        {
                          "aria-hidden": "true",
                          className: `${br}__label`,
                          children: e.label?.text,
                        },
                        `${e.id}-label`
                      );
                    const t = "icon" === e.type,
                      a = t && "icon_pickers_multicolor" === e?.icon?.key,
                      n = t
                        ? void 0
                        : { backgroundColor: e?.styles?.background_color };
                    return (0, i.jsx)(
                      "span",
                      {
                        "aria-hidden": "true",
                        className: c()(`${br}__circle`, {
                          [`${br}__circle--multicolor`]: a,
                        }),
                        style: n,
                      },
                      `${e.id}${t ? "" : e.description}`
                    );
                  })
                : null,
            ],
          }),
        Cr = `${kn}-card`,
        $r = ({
          as: e,
          actionsCard: t,
          cardNumber: r,
          checkbox: s,
          className: l,
          onClick: o,
          onMouseEnter: d,
          onMouseLeave: u,
          polycard: m,
          styles: p,
          useLazyImage: _,
          suggestions: h,
          carouselFeatureFlags: f,
          isLoading: v,
        }) => {
          const {
              debug_info: y,
              type: g,
              isMobile: b,
              checkbox: x,
              card_size: w,
              deviceType: C,
              url_prefix: $,
              url_params_default: N,
              url_fragments_default: k,
              isNavigableToVariation: E,
              allowHover: j = !0,
              isLoadingContext: L,
            } = Kn(),
            {
              metadata: S,
              bookmark: M,
              featured: T,
              ads_promotions: A,
              tour_virtual: z,
              seller_logo: q,
              pictures: F,
              unique_id: H,
              float_highlight: P,
              badge: V,
              variations_compacted: R,
              add_to_cart_capability: I,
            } = m,
            { vertical_id: B, image_ratio: D, image_square: Q } = S,
            {
              isGrid: O,
              isSingle: W,
              isList: U,
              isTwoCols: K,
              isListHeight: Z,
              isGridHeight: G,
              isCarousel: X,
              isDesktop: Y,
              squareMobile: J,
              Imagewrapper: ee,
              shouldDisplayLabelPill: te,
            } = (({
              type: e,
              isMobile: t,
              deviceType: a,
              image_ratio: i,
              pictures: r,
              image_square: s,
              vertical_id: l,
              card_size: o,
            }) =>
              (0, n.useMemo)(() => {
                const c = Boolean(e?.includes("grid")),
                  d = Boolean(e?.includes("single")),
                  u = Boolean(e?.includes("list")),
                  m = u && "desktop" === a,
                  p = i && t && u && An(o),
                  _ = Boolean(p && Number(i) < 0.9),
                  h = t && c && "RES" !== l && An(o),
                  f = !!r?.pictures && r?.pictures.length > 1;
                return {
                  isGrid: c,
                  isSingle: d,
                  isList: u,
                  isTwoCols: m,
                  isListHeight: _,
                  isGridHeight: h,
                  isCarousel: f,
                  squareMobile: s && t && An(o) ? s : void 0,
                  Imagewrapper: _ && !f ? "figure" : n.Fragment,
                  shouldDisplayLabelPill: c && !t && An(o),
                  isDesktop: !t,
                };
              }, [e, t, a, i, r, s, l, o]))({
              type: g,
              isMobile: b,
              deviceType: C,
              image_ratio: D,
              pictures: F,
              image_square: Q,
              vertical_id: B,
              card_size: w,
            }),
            [ae, ne] = (0, n.useState)(!1),
            [ie, re] = (0, n.useState)(!1),
            [se, le] = (0, n.useState)(null),
            [oe, ce] = (0, n.useState)(),
            [de, ue] = (0, n.useState)(null),
            [me, pe, _e] = ((e, t) => {
              const [a, n, i] = e
                ? t.map(En).reduce(Sn, [[], [], []])
                : [t, [], []];
              return [{ components: a }, { components: n }, { components: i }];
            })(K, m.components),
            he = q || V;
          m.components.some(({ type: e }) => "action_links" === e);
          const fe = m.components.find(({ type: e }) => "variations" === e),
            ve = m.components.find(({ type: e }) => "title" === e)?.title?.text,
            [ye, ge] = (0, n.useState)(F?.pictures ?? []),
            be = E
              ? void 0
              : fe?.variations?.variations.find(
                  ({ variation_id: e }) => e === oe
                ),
            xe = be?.url_params,
            we = be?.url_fragments,
            Ce = Mn(S, xe, $, N, k, we);
          (0, n.useEffect)(() => {
            F?.pictures && ge(F?.pictures);
          }, [F?.pictures]);
          const $e = c()(
            l,
            `${Cr}`,
            `${Cr}--${"list-multicolumn" === g ? "list" : g}`,
            {
              [`${Cr}--${w}`]: w,
              [`${Cr}--mobile`]: b,
              [`${Cr}--hover`]: ae,
              [`${Cr}--checkbox`]: !(
                !x ||
                !s ||
                b ||
                ("list" !== g && "list-multicolumn" !== g)
              ),
              [`${Cr}--${B}`]: B,
              [`${Cr}--loading`]: L || v,
            }
          );
          return (
            (0, n.useEffect)(() => {
              y &&
                a
                  .e(94103)
                  .then(a.bind(a, 94103))
                  .then((e) => {
                    ue(e);
                  })
                  .catch((e) => {
                    console.error("Error al importar la librería:", e);
                  });
            }, [y]),
            (0, i.jsxs)(bn, {
              contextValue: {
                bookmark: M,
                cardNumber: r,
                checkbox: s,
                isHover: ae,
                metadata: S,
                needSuggestions: ie,
                onClick: o,
                picturesSelected: ye,
                setLabelPill: le,
                setNeedSuggestions: re,
                setPicturesSelected: ge,
                setVariationSelected: ce,
                suggestions: h,
                title: ve,
                url: Ce,
                useLazyImage: _,
                variationSelected: oe,
                carouselFeatureFlags: f,
                actionsCard: t,
              },
              children: [
                (0, i.jsxs)(
                  xi,
                  {
                    className: $e,
                    styles: p,
                    as: e,
                    ...(Y && {
                      onMouseEnter: () => {
                        j && ne(!0), d && d();
                      },
                    }),
                    ...(Y && {
                      onMouseLeave: () => {
                        j && ne(!1), u && u();
                      },
                    }),
                    children: [
                      (0, i.jsxs)("div", {
                        className: c()(`${Cr}__portada`, {
                          [`${Cr}__portada--no-line`]: !!oe,
                          [`${Cr}__portada--list-height`]: Z && !X,
                          [`${Cr}__portada--grid-height`]: G,
                        }),
                        children: [
                          !!m &&
                            !!m.pictures &&
                            !!ye &&
                            (0, i.jsxs)(i.Fragment, {
                              children: [
                                P && (0, i.jsx)(di, { ...P }),
                                R && (0, i.jsx)(wr, { ...R }),
                                (0, i.jsx)(fi, {
                                  alt_text: m.pictures.alt_text,
                                  Imagewrapper: ee,
                                  isCarousel: X,
                                  isListHeight: Z,
                                  overlay: m.pictures?.overlay,
                                  pictures: ye,
                                  sanitized_title: m.pictures?.sanitized_title,
                                  size: m.pictures.size,
                                  square: J || m?.pictures?.square,
                                }),
                              ],
                            }),
                          !!m &&
                            !!I &&
                            (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsx)(Zn, {
                                ...I,
                                className:
                                  "poly-component__add-to-cart--widget",
                              }),
                            }),
                          !ae &&
                            se &&
                            te &&
                            (0, i.jsx)("span", {
                              className: c()(`${Cr}__label-pill`),
                              children: se,
                            }),
                          he && (0, i.jsx)(ii, { ...he }),
                        ],
                      }),
                      de && y && (0, i.jsx)(de.DebugTool, { polycard: m }),
                      (0, i.jsxs)("div", {
                        className: `${Cr}__content`,
                        children: [
                          (0, i.jsx)(gr, { ...me }),
                          pe.components &&
                            pe.components?.length > 0 &&
                            (0, i.jsxs)("div", {
                              className: "poly-content",
                              children: [
                                (0, i.jsx)("div", {
                                  className: c()("poly-content__column"),
                                  children: (0, i.jsx)(gr, { ...pe }),
                                }),
                                (0, i.jsx)("div", {
                                  className: c()("poly-content__column"),
                                  children: (0, i.jsx)(gr, { ..._e }),
                                }),
                              ],
                            }),
                          U &&
                            (A || T || z) &&
                            (0, i.jsxs)("div", {
                              className: `${kn}-footer`,
                              children: [
                                z &&
                                  (0, n.createElement)(ri, {
                                    ...z,
                                    key: z && "tour_virtual",
                                    className: c()({
                                      "poly-component__tour-virtual": !!z,
                                    }),
                                    text: z?.text || "",
                                  }),
                                (T || A) &&
                                  (0, n.createElement)(ri, {
                                    ...(A || T),
                                    key: A ? "ads_promotions" : T && "featured",
                                    className: c()({
                                      "poly-component__ads-promotions": !!A,
                                      "poly-component__featured": !!T,
                                    }),
                                    text: A?.text || T?.text || "",
                                  }),
                              ],
                            }),
                        ],
                      }),
                      (O || W) &&
                        (A || T || z) &&
                        (0, i.jsxs)("div", {
                          className: `${Cr}__footer`,
                          children: [
                            z &&
                              (0, n.createElement)(ri, {
                                ...z,
                                key: z && "tour_virtual",
                                className: c()({
                                  "poly-component__tour-virtual": !!z,
                                }),
                                text: z?.text || "",
                              }),
                            (A || T) &&
                              (0, n.createElement)(ri, {
                                ...(A || T),
                                key: A ? "ads_promotions" : T && "featured",
                                className: c()({
                                  "poly-component__ads-promotions": !!A,
                                  "poly-component__featured": !!T,
                                }),
                                text: A?.text || T?.text || "",
                              }),
                          ],
                        }),
                      M && (0, i.jsx)(oi, {}),
                    ],
                  },
                  H
                ),
                U && (0, i.jsx)(Ei, {}),
              ],
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=27786.a1777731.js.map
