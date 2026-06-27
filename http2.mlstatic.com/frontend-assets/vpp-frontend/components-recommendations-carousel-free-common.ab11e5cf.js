"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [95124],
  {
    74448(e, t, r) {
      r.d(t, { S: () => y });
      var n = r(58168),
        o = r(96540),
        a = r(46942),
        i = r.n(a),
        c = r(69247),
        s = r(80045);
      const l = "andes-visually-hidden",
        d = l,
        u = ["children", "component"];
      var m = (e) => {
        let { children: t, component: r = "span" } = e,
          a = (0, s.A)(e, u);
        return o.createElement(r, (0, n.A)({ className: d }, a), t);
      };
      var h = r(95990),
        p = r(66202),
        v = r(48529),
        b = r(88460);
      var f = () =>
        o.createElement(
          "svg",
          {
            "aria-hidden": "true",
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            xmlns: "http://www.w3.org/2000/svg",
          },
          o.createElement("rect", {
            width: "10",
            height: "1.6",
            x: "3",
            y: "7.2",
            fill: "currentColor",
          })
        );
      const g = "andes-checkbox";
      var y = (function () {
        const e = (e) => {
          const {
              checked: t,
              className: r,
              defaultChecked: a,
              disabled: s = !1,
              error: l = !1,
              highlight: d = !1,
              id: u,
              indeterminate: y = !1,
              inputProps: x = {},
              label: k,
              labelPosition: E = "right",
              onChange: A,
              srHidden: C = !1,
              srLabel: N,
              ref: _,
            } = e,
            { getThemedComponentClasses: P, themeHash: M } = (0, h.wR)(),
            { current: w } = (0, o.useRef)(void 0 !== t),
            [L, R] = (0, o.useState)(a || t);
          (0, b.A)(
            Boolean(k || N || C),
            "<Checkbox> needs some plain text contents for accessibility reasons.\nPlease add a `label` or `srLabel` prop."
          ),
            (0, o.useEffect)(() => {
              w && void 0 !== t && R(t);
            }, [t, w]);
          const I = (0, c.Bi)(u),
            S = `${I}-srLabel`,
            T = (0, o.useRef)(null),
            F = i()(
              g,
              r,
              {
                [`${g}--error`]: l,
                [`${g}--highlight`]: d,
                [`${g}--label-left`]: "left" === E,
                [`${g}--indeterminate`]: y && L,
                [`${g}--disabled`]: s,
              },
              null == P ? void 0 : P("checkbox")
            ),
            $ = i()(`${g}__label`, { [`${g}__label-text`]: k }),
            K = k ? "label" : "div";
          return (
            (0, o.useEffect)(() => {
              null != T &&
                T.current &&
                (T.current.indeterminate = (y && L) || !1);
            }, [T, y, L]),
            o.createElement(
              K,
              (0, n.A)(
                {
                  className: F,
                  ref: _,
                  "data-andes-checkbox": !0,
                  "data-andes-checkbox-variant": d ? "highlight" : void 0,
                },
                (0, v.i)({
                  checked: L,
                  disabled: s,
                  indeterminate: y && L,
                  error: l && !L,
                }),
                M
              ),
              o.createElement(
                "span",
                {
                  className: `${g}__checkbox`,
                  "data-andes-checkbox-container": !0,
                },
                o.createElement(
                  "input",
                  (0, n.A)(
                    {},
                    x,
                    {
                      ref: T,
                      checked: t,
                      className: `${g}__input`,
                      defaultChecked: a,
                      disabled: s,
                      id: I,
                      onChange: (e) => {
                        w || R(e.target.checked),
                          "function" == typeof A && A(e);
                      },
                      type: "checkbox",
                    },
                    N ? { "aria-labelledby": S } : {},
                    { "data-andes-checkbox-input": !0 }
                  )
                ),
                o.createElement(
                  "span",
                  { className: `${g}__icon` },
                  y && L
                    ? o.createElement(f, null)
                    : o.createElement(p.A, { color: "currentColor" })
                )
              ),
              k &&
                o.createElement(
                  "span",
                  {
                    "aria-hidden": !!N || void 0,
                    className: $,
                    "data-andes-checkbox-label": !0,
                  },
                  k
                ),
              N && o.createElement(m, { id: S }, N)
            )
          );
        };
        return (e.displayName = "Checkbox"), e;
      })();
    },
    21979(e, t, r) {
      r.d(t, { w: () => a });
      r(50411);
      const n = () => "undefined" != typeof MobileWebKit,
        o = (e) => {
          var t;
          if (
            !(() => {
              var e, t;
              return (
                n() &&
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
          const { inputMode: r, type: o, id: a } = e;
          let i = r || o;
          "tel" === o && (i = "phone"),
            "decimal" === r && (i = "numberDecimal"),
            "function" ==
              typeof (null === (t = MobileWebKit) || void 0 === t
                ? void 0
                : t.actions.openKeyboard) &&
              MobileWebKit.actions.openKeyboard(a, i).catch(() => {});
        },
        a = function (e) {
          (!(arguments.length > 1 && void 0 !== arguments[1]) ||
            arguments[1]) &&
            o(e),
            n() ||
              ("undefined" != typeof window &&
                ("ontouchstart" in window || navigator.maxTouchPoints > 0)) ||
              "function" != typeof e.focus ||
              e.focus();
        };
    },
    16726(e, t, r) {
      r.d(t, { H: () => N, l: () => v });
      var n = r(58168),
        o = r(80045),
        a = r(96540),
        i = r(69247),
        c = r(88460),
        s = r(46942),
        l = r.n(s),
        d = r(97987),
        u = r(62939),
        m = r(95990),
        h = r(48529);
      const p = ["children", "ref"];
      var v = (function () {
        const e = (e) => {
          let { children: t, ref: r } = e,
            s = (0, o.A)(e, p);
          const { csrfToken: l } = (0, i.AH)(),
            [d, u] = (0, a.useState)(null),
            m = l || d;
          return (
            (0, a.useEffect)(() => {
              if (!l) {
                const e = document.querySelector("meta[name=csrf-token]");
                e && u(e.getAttribute("content"));
              }
            }, [l]),
            (0, c.A)(
              l,
              "To prevent CSRF attacks, <Form> needs a csrf token. Please, provide one in <AndesProvider> via <csrfToken> prop.\nRefer to https://github.com/melisource/fury_frontend-andes-ui/tree/master/packages/form#csrf-protection-by-default for more details."
            ),
            a.createElement(
              "form",
              (0, n.A)({}, s, { ref: r }),
              m &&
                a.createElement("input", {
                  type: "hidden",
                  name: "_csrf",
                  value: m,
                }),
              t
            )
          );
        };
        return (e.displayName = "Form"), e;
      })();
      const b = "andes-helper",
        f = "caution",
        g = "error",
        y = [f, g],
        x = { [`${f}`]: "caution", [`${g}`]: "negative" };
      var k = {
          "andes-helperPrecaución": [null, "Warning"],
          "andes-helperError": [null, "Error"],
        },
        E = {
          "andes-helperPrecaución": [null, "Precaución"],
          "andes-helperError": [null, "Error"],
        },
        A = {
          "andes-helperPrecaución": [null, "Alerta"],
          "andes-helperError": [null, "Erro"],
        };
      const C = [
        "andesDataAttributes",
        "children",
        "className",
        "id",
        "modifier",
      ];
      var N = (function () {
        const e = (e) => {
          const {
              andesDataAttributes: t = {},
              children: r,
              className: c,
              id: s,
              modifier: p,
            } = e,
            v = (0, o.A)(e, C),
            f = (0, i.Bi)(s),
            { getThemedComponentClasses: g, themeHash: N } = (0, m.wR)(),
            { i18n: _ } = (0, i.AH)("@andes/form", {
              en: k,
              "es-AR": E,
              "pt-BR": A,
            }),
            P = (0, d.A)(y, p || ""),
            M = l()(b, c, null == g ? void 0 : g("helper"), {
              [`${b}--${p}`]: p,
            });
          return a.createElement(
            "div",
            (0, n.A)(
              { className: M, id: f },
              v,
              N,
              t,
              { "data-andes-helper": !0 },
              (0, h.i)({ error: "error" === p, caution: "caution" === p })
            ),
            P &&
              a.createElement(
                "div",
                { className: `${b}__badge`, "data-andes-helper-badge": !0 },
                a.createElement(u.Tq, {
                  color: p ? x[p] : void 0,
                  size: "xsmall",
                  srLabel: _.pgettext(
                    b,
                    "error" === p ? "Error" : "Precaución"
                  ),
                })
              ),
            a.createElement(
              "span",
              { className: `${b}__label`, "data-andes-helper-label": !0 },
              r
            )
          );
        };
        return (e.displayName = "Helper"), e;
      })();
    },
    46956(e, t, r) {
      r.d(t, { A: () => o });
      var n = r(96540);
      const o = (e) => {
        let {
          color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
          i18n: r,
          srLabel: o,
        } = e;
        return n.createElement(
          "svg",
          {
            "aria-hidden": o ? void 0 : !o,
            "aria-label": o || void 0,
            role: o ? "img" : void 0,
            color: t,
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "currentColor",
          },
          o && n.createElement("title", null, o),
          n.createElement("path", {
            d: "M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z",
            fill: "currentColor",
          })
        );
      };
    },
    23637(e, t, r) {
      r.d(t, { E: () => b, H: () => f });
      var n = r(91702),
        o = r(89379),
        a = r(64467),
        i = r(80045),
        c = r(96540),
        s = r(46942),
        l = r.n(s),
        d = r(17939),
        u = r(87774),
        m = r(74848),
        h = function (e) {
          var t,
            r = e.elementRef,
            n = e.preventOnScroll,
            o = void 0 !== n && n,
            a =
              "undefined" != typeof window &&
              (null === (t = window.MobileWebKit) || void 0 === t
                ? void 0
                : t.settings),
            i = (0, c.useRef)({ x: 0, y: 0 }),
            s = (0, c.useRef)(!1);
          (0, c.useEffect)(
            function () {
              if (a && r.current && o) {
                var e = function (e) {
                    if (1 === e.touches.length) {
                      var t = e.touches[0];
                      i.current = { x: t.clientX, y: t.clientY };
                    }
                  },
                  t = function (e) {
                    if (1 === e.touches.length) {
                      var t = e.touches[0],
                        r = t.clientX - i.current.x,
                        n = t.clientY - i.current.y,
                        o = Math.abs(r) > Math.abs(n) && Math.abs(r) > 10;
                      o !== s.current &&
                        ((s.current = o),
                        window.MobileWebKit.settings.setRefreshMode(
                          o ? "none" : "pull"
                        ));
                    }
                  },
                  n = function () {
                    s.current &&
                      ((s.current = !1),
                      window.MobileWebKit.settings.setRefreshMode("pull"));
                  },
                  c = r.current;
                return (
                  c.addEventListener("touchstart", e),
                  c.addEventListener("touchmove", t),
                  c.addEventListener("touchend", n),
                  c.addEventListener("touchcancel", n),
                  function () {
                    c &&
                      (c.removeEventListener("touchstart", e),
                      c.removeEventListener("touchmove", t),
                      c.removeEventListener("touchend", n),
                      c.removeEventListener("touchcancel", n)),
                      s.current &&
                        window.MobileWebKit.settings
                          .setRefreshMode("pull")
                          .catch(function (e) {
                            console.error(
                              "Error enabling pull-to-refresh on cleanup:",
                              e
                            );
                          });
                  }
                );
              }
            },
            [a, r, o]
          );
        },
        p = [
          "compact",
          "className",
          "classnameFromResponse",
          "classNamesMap",
          "classNamesIndexMap",
          "Card",
          "cardProps",
          "IconFactory",
          "paddingHorizontal",
          "buttonSize",
          "hideRebates",
          "onItemClick",
          "onBookmarkClick",
          "onTitleTagIconClick",
          "bookmarkedItems",
          "bookmarkText",
          "priceSizeOverride",
          "isPolycard",
          "preventPullToRefreshOnScroll",
        ],
        v = "".concat(u.OO, "-carousel-free"),
        b = function (e) {
          var t = e.compact,
            r = void 0 !== t && t,
            s = e.className,
            b = void 0 === s ? "" : s,
            f = e.classnameFromResponse,
            g = void 0 === f ? "" : f,
            y = e.classNamesMap,
            x = void 0 === y ? {} : y,
            k = e.classNamesIndexMap,
            E = void 0 === k ? {} : k,
            A = e.Card,
            C = e.cardProps,
            N = e.IconFactory,
            _ = e.paddingHorizontal,
            P = void 0 === _ ? 0 : _,
            M = e.buttonSize,
            w = void 0 === M ? "large" : M,
            L = e.hideRebates,
            R = void 0 !== L && L,
            I = e.onItemClick,
            S = e.onBookmarkClick,
            T = e.onTitleTagIconClick,
            F = e.bookmarkedItems,
            $ = void 0 === F ? [] : F,
            K = e.bookmarkText,
            O = void 0 === K ? "" : K,
            H = e.priceSizeOverride,
            W = e.isPolycard,
            z = void 0 !== W && W,
            j = e.preventPullToRefreshOnScroll,
            B = void 0 !== j && j,
            D = (0, i.A)(e, p),
            q = (0, c.useRef)();
          h({ elementRef: q, preventOnScroll: B });
          var V = D.items,
            U = D.title,
            X = D.titleWithIcons,
            Y = D.titleTag,
            Q = D.subtitle,
            Z = D.viewMoreAction,
            G = D.footer,
            J = D.href,
            ee = D.cardSeeMore,
            te = void 0 === ee ? null : ee,
            re = H || { price: 14, discount: 10, installments: 10 };
          return (
            V &&
            V.length > 0 &&
            (0, m.jsxs)("div", {
              className: l()(
                v,
                b,
                g,
                (0, a.A)({}, "".concat(v, "--compact"), r)
              ),
              ref: q,
              style: { "--carousel-free-padding": "".concat(P, "px") },
              children: [
                U &&
                  (0, m.jsxs)("div", {
                    className: "".concat(v, "__header"),
                    children: [
                      (0, m.jsx)(n.hz, {
                        title: U,
                        titleWithIcons: X,
                        href: J,
                        IconFactory: N,
                      }),
                      Q &&
                        (0, m.jsx)(n.VR, {
                          text: Q.text,
                          url: Q.url,
                          IconFactory: N,
                          advertisingLabel: Q.advertising_label,
                        }),
                      Y &&
                        (0, m.jsx)(n.bL, {
                          text: Y.text,
                          values: Y.values,
                          styles: Y.styles,
                          IconFactory: N,
                          onTitleTagIconClick: T,
                        }),
                    ],
                  }),
                (0, m.jsxs)(d.R, {
                  srLabel: U,
                  spacing: r ? 0 : 12,
                  children: [
                    V.map(function (e, t) {
                      var n = x[e.id],
                        a = E[t],
                        i = e.CustomCard || A,
                        c = z ? e.metadata.id : e.id;
                      return (0,
                      m.jsx)(d.C, { children: (0, m.jsx)(i, (0, o.A)((0, o.A)((0, o.A)({}, C), e), {}, { classNameFromMap: n, classNameFromIndex: a, IconFactory: N, onItemClick: I, onBookmarkClick: S, bookmarkedItems: $, bookmarkText: O, hideRebates: R, priceSizeOverride: r ? re : H || void 0 })) }, "recommendations-".concat(c));
                    }),
                    (null == te ? void 0 : te.actionText) &&
                      (0, m.jsx)(
                        d.C,
                        { children: (0, m.jsx)(n.v$, (0, o.A)({}, te)) },
                        "recommendations-see-more"
                      ),
                  ],
                }),
                Z &&
                  (0, m.jsx)(n.sz, {
                    id: Z.id,
                    target: Z.target,
                    label: Z.label,
                    buttonSize: w,
                    IconFactory: N,
                  }),
                G &&
                  (0, m.jsx)(n.gb, {
                    footerText: G.text,
                    href: G.link,
                    IconFactory: N,
                    className: Z
                      ? "".concat(u.OO, "-footer--with-side-button")
                      : "",
                  }),
              ],
            })
          );
        },
        f = (0, n.QA)(b);
    },
    87774(e, t, r) {
      r.d(t, { OO: () => n, kt: () => o, th: () => a });
      var n = "ui-recommendations",
        o = "".concat(n, "-comparator"),
        a = "".concat(n, "-combos");
      "".concat(n, "-coupon");
    },
    38776(e, t, r) {
      r.r(t), r.d(t, { default: () => l });
      var n = r(26376),
        o = r(23637),
        a = r(50538);
      const i = (e) => {
        const {
          isPolycard: t,
          thousandSeparator: r,
          decimalSeparator: n,
          className: o = "",
          ...i
        } = e;
        return {
          containerClassName: o,
          contextProps: {
            type: "grid-card",
            thousandSeparator: r,
            decimalSeparator: n,
          },
          cardProps: { polyClassName: "recos-polycard" },
          isPolycard: t,
          iconFactory: a.default,
          paddingHorizontal: 16,
          processedProps: i,
        };
      };
      var c = r(74848);
      const s = (0, n.R)(
        {
          resolved: {},
          chunkName: () => "components-recommendations-card",
          isReady(e) {
            const t = this.resolve(e);
            return !0 === this.resolved[t] && !!r.m[t];
          },
          importAsync: () =>
            Promise.all([r.e(23150), r.e(47343)]).then(r.bind(r, 75681)),
          requireAsync(e) {
            const t = this.resolve(e);
            return (
              (this.resolved[t] = !1),
              this.importAsync(e).then((e) => ((this.resolved[t] = !0), e))
            );
          },
          requireSync(e) {
            const t = this.resolve(e);
            return r(t);
          },
          resolve: () => 75681,
        },
        { resolveComponent: (e) => e.RecommendationsCardVertical }
      );
      s.preload();
      const l = (e) => {
        const {
          containerClassName: t,
          contextProps: r,
          cardProps: n,
          isPolycard: a,
          iconFactory: l,
          paddingHorizontal: d,
          processedProps: u,
        } = i(e);
        return (0, c.jsx)(o.H, {
          Card: s,
          className: t,
          IconFactory: l,
          contextProps: r,
          cardProps: n,
          isPolycard: a,
          paddingHorizontal: d,
          ...u,
        });
      };
    },
  },
]);
//# sourceMappingURL=components-recommendations-carousel-free-common.ab11e5cf.js.map
