/*! For license information please see 2551.0e618676.js.LICENSE.txt */
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [2551],
  {
    21979(e, t, n) {
      "use strict";
      n.d(t, { w: () => o });
      n(50411);
      const r = () => "undefined" != typeof MobileWebKit,
        a = (e) => {
          var t;
          if (
            !(() => {
              var e, t;
              return (
                r() &&
                "function" ==
                  typeof (null === (e = MobileWebKit) || void 0 === e
                    ? void 0
                    : e.executeNative) &&
                void 0 !== MobileWebKit.events &&
                "function" == typeof MobileWebKit.events.subscribeMethod &&
                "function" == typeof MobileWebKit.events.unsubscribe &&
                MobileWebKit.engine ===
                  (null === (t = MobileWebKit) ||
                  void 0 === t ||
                  null === (t = t.Engines) ||
                  void 0 === t
                    ? void 0
                    : t.V200)
              );
            })()
          )
            return;
          const { inputMode: n, type: a, id: o } = e;
          let l = n || a;
          "tel" === a && (l = "phone"),
            "decimal" === n && (l = "numberDecimal"),
            "function" ==
              typeof (null === (t = MobileWebKit) || void 0 === t
                ? void 0
                : t.actions.openKeyboard) &&
              MobileWebKit.actions.openKeyboard(o, l).catch(() => {});
        },
        o = function (e) {
          (!(arguments.length > 1 && void 0 !== arguments[1]) ||
            arguments[1]) &&
            a(e),
            r() ||
              ("undefined" != typeof window &&
                ("ontouchstart" in window || navigator.maxTouchPoints > 0)) ||
              "function" != typeof e.focus ||
              e.focus();
        };
    },
    16726(e, t, n) {
      "use strict";
      n.d(t, { H: () => L, l: () => h });
      var r = n(58168),
        a = n(80045),
        o = n(96540),
        l = n(69247),
        i = n(88460),
        s = n(46942),
        d = n.n(s),
        c = n(97987),
        u = n(62939),
        f = n(95990),
        p = n(48529);
      const m = ["children", "ref"];
      var h = (function () {
        const e = (e) => {
          let { children: t, ref: n } = e,
            s = (0, a.A)(e, m);
          const { csrfToken: d } = (0, l.AH)(),
            [c, u] = (0, o.useState)(null),
            f = d || c;
          return (
            (0, o.useEffect)(() => {
              if (!d) {
                const e = document.querySelector("meta[name=csrf-token]");
                e && u(e.getAttribute("content"));
              }
            }, [d]),
            (0, i.A)(
              d,
              "To prevent CSRF attacks, <Form> needs a csrf token. Please, provide one in <AndesProvider> via <csrfToken> prop.\nRefer to https://github.com/melisource/fury_frontend-andes-ui/tree/master/packages/form#csrf-protection-by-default for more details."
            ),
            o.createElement(
              "form",
              (0, r.A)({}, s, { ref: n }),
              f &&
                o.createElement("input", {
                  type: "hidden",
                  name: "_csrf",
                  value: f,
                }),
              t
            )
          );
        };
        return (e.displayName = "Form"), e;
      })();
      const v = "andes-helper",
        x = "caution",
        g = "error",
        b = [x, g],
        E = { [`${x}`]: "caution", [`${g}`]: "negative" };
      var y = {
          "andes-helperPrecaución": [null, "Warning"],
          "andes-helperError": [null, "Error"],
        },
        w = {
          "andes-helperPrecaución": [null, "Precaución"],
          "andes-helperError": [null, "Error"],
        },
        C = {
          "andes-helperPrecaución": [null, "Alerta"],
          "andes-helperError": [null, "Erro"],
        };
      const A = [
        "andesDataAttributes",
        "children",
        "className",
        "id",
        "modifier",
      ];
      var L = (function () {
        const e = (e) => {
          const {
              andesDataAttributes: t = {},
              children: n,
              className: i,
              id: s,
              modifier: m,
            } = e,
            h = (0, a.A)(e, A),
            x = (0, l.Bi)(s),
            { getThemedComponentClasses: g, themeHash: L } = (0, f.wR)(),
            { i18n: N } = (0, l.AH)("@andes/form", {
              en: y,
              "es-AR": w,
              "pt-BR": C,
            }),
            $ = (0, c.A)(b, m || ""),
            _ = d()(v, i, null == g ? void 0 : g("helper"), {
              [`${v}--${m}`]: m,
            });
          return o.createElement(
            "div",
            (0, r.A)(
              { className: _, id: x },
              h,
              L,
              t,
              { "data-andes-helper": !0 },
              (0, p.i)({ error: "error" === m, caution: "caution" === m })
            ),
            $ &&
              o.createElement(
                "div",
                { className: `${v}__badge`, "data-andes-helper-badge": !0 },
                o.createElement(u.Tq, {
                  color: m ? E[m] : void 0,
                  size: "xsmall",
                  srLabel: N.pgettext(
                    v,
                    "error" === m ? "Error" : "Precaución"
                  ),
                })
              ),
            o.createElement(
              "span",
              { className: `${v}__label`, "data-andes-helper-label": !0 },
              n
            )
          );
        };
        return (e.displayName = "Helper"), e;
      })();
    },
    98662(e, t, n) {
      "use strict";
      n.d(t, { A: () => a });
      var r = n(96540);
      const a = (e) => {
        let {
          color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
          i18n: n,
          srLabel: a,
        } = e;
        return r.createElement(
          "svg",
          {
            "aria-hidden": a ? void 0 : !a,
            "aria-label": a || void 0,
            role: a ? "img" : void 0,
            color: t,
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "currentColor",
          },
          a && r.createElement("title", null, a),
          r.createElement("path", {
            d: "M5.09102 7.04674L8.5235 3.61426L9.29489 4.38565L5.09102 8.58952L2.70532 6.20383L3.47671 5.43244L5.09102 7.04674Z",
            fill: "currentColor",
          })
        );
      };
    },
    2551(e, t, n) {
      "use strict";
      n.d(t, { A_: () => V });
      var r = n(58168),
        a = n(89379),
        o = n(80045),
        l = n(96540),
        i = n(46942),
        s = n.n(i),
        d = n(8494),
        c = n(69247),
        u = n(21979),
        f = n(25925);
      const p = "andes-visually-hidden",
        m = p,
        h = ["children", "component"];
      var v = (e) => {
        let { children: t, component: n = "span" } = e,
          a = (0, o.A)(e, h);
        return l.createElement(n, (0, r.A)({ className: m }, a), t);
      };
      var x = n(98662),
        g = n(34715),
        b = n(16726),
        E = n(95990),
        y = n(48529);
      var w = n(832),
        C = n(89692),
        A = n.n(C);
      const L = (e) => {
        let {
          color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
          i18n: n,
          srLabel: r,
        } = e;
        return l.createElement(
          "svg",
          {
            "aria-hidden": r ? void 0 : !r,
            "aria-label": r || void 0,
            role: r ? "img" : void 0,
            color: t,
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "currentColor",
          },
          r && l.createElement("title", null, r),
          l.createElement("path", {
            d: "M2.69067 3.30939L3.30939 2.69067L6.00003 5.38131L8.69067 2.69067L9.30939 3.30939L6.61875 6.00003L9.30939 8.69067L8.69067 9.30939L6.00003 6.61875L3.30939 9.30939L2.69067 8.69067L5.38131 6.00003L2.69067 3.30939Z",
            fill: "currentColor",
          })
        );
      };
      var N = n(83611),
        $ = n(88460),
        _ = {
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
        H = {
          "andes-textfield{0} caracteres restantes": [null, "剩余 {0} 个字符"],
          "andes-textfieldMaximo {0} caracteres": [
            null,
            "最多可输入 {0} 个字符",
          ],
          "andes-textfieldCampo de texto valido": [null, "有效文本字段"],
          "andes-textfieldCampo de texto procesando": [null, "文本字段处理中"],
          "andes-textfieldBorrar": [null, "移除"],
          "andes-textfieldDígito {0}": [null, "数字 {0}"],
          "andes-textfieldMostrar contraseña": [null, "显示密码"],
        },
        M = {
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
        F = {
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
      const z = "andes-form-control",
        D = "andes-textfield";
      var T = (e) => {
        let { notificationsLabel: t, size: n = "large" } = e;
        const r = (0, f.A)();
        return l.createElement(
          "span",
          { role: "status", "aria-live": "polite" },
          l.createElement(v, null, r && t),
          l.createElement(
            "span",
            { className: `${z}__validated-icon` },
            "large" === n
              ? l.createElement(g.A, { color: "currentColor" })
              : l.createElement(x.A, { color: "currentColor" })
          )
        );
      };
      l.Component;
      var S = (e) => {
        let {
          namespace: t,
          onClick: n,
          "aria-label": r = "",
          size: a = "large",
        } = e;
        return l.createElement(
          "button",
          {
            "aria-label": r,
            className: `${t}__clear-icon`,
            onClick: n,
            onMouseDown: (e) => e.preventDefault(),
            type: "button",
          },
          "large" === a
            ? l.createElement(N.A, { color: "currentColor" })
            : l.createElement(L, { color: "currentColor" })
        );
      };
      const B = ["warning"],
        R = (e) => {
          switch (
            ((0, $.A)(
              !e || ("string" == typeof e && !B.includes(e)),
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
        P = [
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
        W = { target: { value: "" } };
      class k extends l.Component {
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
              select: n = !1,
              autoFocus: r = !1,
            } = this.props,
            { field: a } = this;
          e && a && A()(a),
            (t || r) && (0, u.w)(a),
            n && (null == a || a.select());
        }
        static getDerivedStateFromProps(e, t) {
          const { fieldRef: n, prevProps: r } = t,
            {
              multiline: a = !1,
              value: o,
              focus: l = !1,
              select: i = !1,
              countdown: s = !1,
            } = e,
            { isUncontrolledValue: d } = t,
            c = ["multiline", "focus", "select", "value", "countdown"].some(
              (t) => e[t] !== r[t]
            );
          return c &&
            (a && n && A().update(n),
            l && (null == n || n.focus()),
            i && (null == n || n.select()),
            s && !d && o !== (null == n ? void 0 : n.value))
            ? { countdown: String(o).length, prevProps: e }
            : c
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
              target: { value: n },
            } = e;
          this.setState({ countdown: n.length }),
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
              isUncontrolledValue: n,
              onInputHandler: r,
              onChangeHandler: a,
            } = this;
          n && (t.value = ""), r(W), e && a(W);
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
            ? l.createElement(
                "div",
                {
                  className: `${z}__embedded`,
                  "data-andes-textfield-right-content": !0,
                },
                e
              )
            : e;
        }
        renderHelper() {
          const { helper: e, id: t, modifier: n } = this.props;
          return l.createElement(
            l.Fragment,
            null,
            e &&
              l.createElement(
                b.H,
                {
                  id: `${t}-message`,
                  modifier: R(n),
                  className: `${z}--internal-helper`,
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
              children: n,
              className: i,
              clear: c = !1,
              countdown: u = !1,
              disabled: f = !1,
              defaultValue: p,
              embeddedChildren: m,
              focus: h,
              helper: x,
              id: g,
              innerRef: b,
              i18n: E,
              inputProps: C = {},
              label: A,
              maxLength: L = 120,
              modifier: N,
              multiline: $ = !1,
              numeric: _ = !1,
              onChange: H,
              placeholder: M,
              prefix: F = "",
              rows: B = 1,
              select: R,
              size: W = "large",
              split: k = !1,
              srLabel: K,
              suffix: O = "",
              value: V,
              autoFocus: I,
              andesDataAttributes: U,
            } = e,
            Y = (0, o.A)(e, P),
            { focused: X, height: j, countdown: q } = this.state,
            Z = !_ && !k && "readonly" !== N && !f && (u || x),
            G = s()(z, `${z}--textfield`, i, {
              [`${z}--multiline`]: $,
              [`${z}--countdown`]: u,
              [`${z}--centered`]: t,
              [`${z}--focused`]: X,
              [`${z}--${N}`]: N,
              [`${z}--disabled`]: f,
              [`${z}--medium`]: "medium" === W,
              [`${z}--textfield-with-prefix`]: !!F,
              [`${z}--textfield-with-suffix`]: !!O,
            }),
            J = s()(`${z}__suffix`),
            Q = s()(`${z}__prefix`),
            ee = s()(`${z}__field`, {
              [`${z}__field--multiline`]: $,
              [`${z}--medium`]: "medium" === W,
            }),
            te = s()(`${z}__bottom`, { [`${z}--medium`]: "medium" === W }),
            ne = (0, a.A)(
              (0, a.A)((0, a.A)({}, Y), C),
              {},
              {
                id: g,
                defaultValue: p,
                value: V,
                className: ee,
                disabled: f || "readonly" === N,
                maxLength: L,
                style: $ ? { height: j } : {},
                placeholder: M,
                onBlur: this.onBlurHandler,
                onFocus: this.onFocusHandler,
                onChange: this.onChangeHandler,
                ref: this.setField,
                "aria-invalid":
                  "error" === N ||
                  "warning" === N ||
                  "caution" === N ||
                  (null == C ? void 0 : C["aria-invalid"]) ||
                  Y["aria-invalid"],
                "aria-label": K,
                "aria-describedby": (() => {
                  const { "aria-describedby": e } = C;
                  return k
                    ? e
                    : x && u
                    ? `${g}-message ${g}-count`
                    : u
                    ? `${g}-count`
                    : x
                    ? `${g}-message`
                    : void 0;
                })(),
                rows: B,
                autoFocus: h || I,
              }
            ),
            re = $ ? "textarea" : "input";
          return l.createElement(
            "div",
            (0, r.A)(
              { className: G, ref: this.setRef },
              U,
              {
                "data-andes-textfield": !0,
                "data-andes-textfield-modifier": N,
              },
              (0, y.i)({
                disabled: f,
                error: "error" === N,
                warning: "warning" === N,
              })
            ),
            A &&
              l.createElement(
                "label",
                { htmlFor: g, "data-andes-textfield-label": !0 },
                l.createElement("span", { className: `${z}__label` }, A)
              ),
            l.createElement(
              d.v,
              {
                within: !0,
                isTextInput: !0,
                focusRingClass: X ? "visible-focused" : "",
              },
              l.createElement(
                "div",
                { className: `${z}__control` },
                F &&
                  l.createElement(
                    "span",
                    { className: Q, "data-andes-textfield-prefix": !0 },
                    F
                  ),
                l.createElement(
                  re,
                  (0, r.A)({ key: "field" }, ne, {
                    onInput: this.onInputHandler,
                    "data-andes-textfield-input": !0,
                    "data-andes-textfield-input-type": re,
                  })
                ),
                O &&
                  l.createElement(
                    "span",
                    { className: J, "data-andes-textfield-suffix": !0 },
                    O
                  ),
                "completed" === N &&
                  l.createElement(T, {
                    notificationsLabel: E.pgettext(D, "Campo de texto valido"),
                    size: W,
                  }),
                "indeterminate" === N &&
                  l.createElement(w.m, {
                    className: `${z}--textfield-progress`,
                    size: "xsmall",
                    srAnnouncement: E.pgettext(D, "Campo de texto procesando"),
                    srLabel: E.pgettext(D, "Campo de texto procesando"),
                  }),
                c &&
                  l.createElement(S, {
                    "aria-label": E.pgettext(D, "Borrar"),
                    namespace: z,
                    onClick: this.onClearHandler,
                    size: W,
                  }),
                n && this.renderChildren()
              )
            ),
            Z &&
              l.createElement(
                "div",
                { className: te, "data-andes-textfield-bottom-info": !0 },
                this.renderHelper(),
                u &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(
                      "span",
                      {
                        id: `${g}-countdown-progress`,
                        className: `${z}__countdown`,
                        role: "progressbar",
                        "aria-valuenow": q,
                        "aria-valuemin": 0,
                        "aria-valuemax": Number(L),
                        "aria-label": E.pgettext(D, "Maximo {0} caracteres", L),
                        "data-andes-textfield-countdown": !0,
                      },
                      `${q} / ${L}`
                    ),
                    l.createElement(
                      v,
                      {
                        id: `${g}-count`,
                        "aria-live": "polite",
                        "aria-atomic": "true",
                      },
                      E.pgettext(D, "{0} caracteres restantes", Number(L) - q)
                    )
                  )
              )
          );
        }
      }
      k.displayName = "TextField";
      var K = k;
      const O = ["ref", "id", "className"];
      var V = (function () {
        const e = (e) => {
          let { ref: t, id: n, className: a } = e,
            i = (0, o.A)(e, O);
          const d = (0, c.Bi)(n),
            { i18n: u } = (0, c.AH)("@andes/textfield", {
              en: _,
              "es-AR": M,
              "pt-BR": F,
              "zh-CN": H,
            }),
            { getThemedComponentClasses: f, themeHash: p } = (0, E.wR)();
          return l.createElement(
            K,
            (0, r.A)({ i18n: u, innerRef: t }, i, {
              id: d,
              className: s()(a, null == f ? void 0 : f("textfield")),
              andesDataAttributes: p,
            })
          );
        };
        return (e.displayName = "TextfieldContainer"), e;
      })();
    },
    89692(e, t) {
      var n, r, a;
      (r = [e, t]),
        (n = function (e, t) {
          "use strict";
          var n,
            r,
            a =
              "function" == typeof Map
                ? new Map()
                : ((n = []),
                  (r = []),
                  {
                    has: function (e) {
                      return n.indexOf(e) > -1;
                    },
                    get: function (e) {
                      return r[n.indexOf(e)];
                    },
                    set: function (e, t) {
                      -1 === n.indexOf(e) && (n.push(e), r.push(t));
                    },
                    delete: function (e) {
                      var t = n.indexOf(e);
                      t > -1 && (n.splice(t, 1), r.splice(t, 1));
                    },
                  }),
            o = function (e) {
              return new Event(e, { bubbles: !0 });
            };
          try {
            new Event("test");
          } catch (e) {
            o = function (e) {
              var t = document.createEvent("Event");
              return t.initEvent(e, !0, !1), t;
            };
          }
          function l(e) {
            if (e && e.nodeName && "TEXTAREA" === e.nodeName && !a.has(e)) {
              var t = null,
                n = null,
                r = null,
                l = function () {
                  e.clientWidth !== n && f();
                },
                i = function (t) {
                  window.removeEventListener("resize", l, !1),
                    e.removeEventListener("input", f, !1),
                    e.removeEventListener("keyup", f, !1),
                    e.removeEventListener("autosize:destroy", i, !1),
                    e.removeEventListener("autosize:update", f, !1),
                    Object.keys(t).forEach(function (n) {
                      e.style[n] = t[n];
                    }),
                    a.delete(e);
                }.bind(e, {
                  height: e.style.height,
                  resize: e.style.resize,
                  overflowY: e.style.overflowY,
                  overflowX: e.style.overflowX,
                  wordWrap: e.style.wordWrap,
                });
              e.addEventListener("autosize:destroy", i, !1),
                "onpropertychange" in e &&
                  "oninput" in e &&
                  e.addEventListener("keyup", f, !1),
                window.addEventListener("resize", l, !1),
                e.addEventListener("input", f, !1),
                e.addEventListener("autosize:update", f, !1),
                (e.style.overflowX = "hidden"),
                (e.style.wordWrap = "break-word"),
                a.set(e, { destroy: i, update: f }),
                s();
            }
            function s() {
              var n = window.getComputedStyle(e, null);
              "vertical" === n.resize
                ? (e.style.resize = "none")
                : "both" === n.resize && (e.style.resize = "horizontal"),
                (t =
                  "content-box" === n.boxSizing
                    ? -(parseFloat(n.paddingTop) + parseFloat(n.paddingBottom))
                    : parseFloat(n.borderTopWidth) +
                      parseFloat(n.borderBottomWidth)),
                isNaN(t) && (t = 0),
                f();
            }
            function d(t) {
              var n = e.style.width;
              (e.style.width = "0px"),
                e.offsetWidth,
                (e.style.width = n),
                (e.style.overflowY = t);
            }
            function c(e) {
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
                var r = c(e),
                  a =
                    document.documentElement &&
                    document.documentElement.scrollTop;
                (e.style.height = ""),
                  (e.style.height = e.scrollHeight + t + "px"),
                  (n = e.clientWidth),
                  r.forEach(function (e) {
                    e.node.scrollTop = e.scrollTop;
                  }),
                  a && (document.documentElement.scrollTop = a);
              }
            }
            function f() {
              u();
              var t = Math.round(parseFloat(e.style.height)),
                n = window.getComputedStyle(e, null),
                a =
                  "content-box" === n.boxSizing
                    ? Math.round(parseFloat(n.height))
                    : e.offsetHeight;
              if (
                (a < t
                  ? "hidden" === n.overflowY &&
                    (d("scroll"),
                    u(),
                    (a =
                      "content-box" === n.boxSizing
                        ? Math.round(
                            parseFloat(window.getComputedStyle(e, null).height)
                          )
                        : e.offsetHeight))
                  : "hidden" !== n.overflowY &&
                    (d("hidden"),
                    u(),
                    (a =
                      "content-box" === n.boxSizing
                        ? Math.round(
                            parseFloat(window.getComputedStyle(e, null).height)
                          )
                        : e.offsetHeight)),
                r !== a)
              ) {
                r = a;
                var l = o("autosize:resized");
                try {
                  e.dispatchEvent(l);
                } catch (e) {}
              }
            }
          }
          function i(e) {
            var t = a.get(e);
            t && t.destroy();
          }
          function s(e) {
            var t = a.get(e);
            t && t.update();
          }
          var d = null;
          "undefined" == typeof window ||
          "function" != typeof window.getComputedStyle
            ? (((d = function (e) {
                return e;
              }).destroy = function (e) {
                return e;
              }),
              (d.update = function (e) {
                return e;
              }))
            : (((d = function (e, t) {
                return (
                  e &&
                    Array.prototype.forEach.call(
                      e.length ? e : [e],
                      function (e) {
                        return l(e, t);
                      }
                    ),
                  e
                );
              }).destroy = function (e) {
                return (
                  e && Array.prototype.forEach.call(e.length ? e : [e], i), e
                );
              }),
              (d.update = function (e) {
                return (
                  e && Array.prototype.forEach.call(e.length ? e : [e], s), e
                );
              })),
            (t.default = d),
            (e.exports = t.default);
        }),
        void 0 === (a = "function" == typeof n ? n.apply(t, r) : n) ||
          (e.exports = a);
    },
  },
]);
//# sourceMappingURL=2551.0e618676.js.map
