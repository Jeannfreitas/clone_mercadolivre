(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [12970],
  {
    96719(e, t, l) {
      "use strict";
      l.d(t, { Q: () => u, y: () => p });
      var r = l(58168),
        n = l(96540),
        s = l(46942),
        a = l.n(s),
        i = l(69247),
        o = l(95990),
        c = l(48529);
      var u = (function () {
        const e = (e) => {
          const { children: t, className: l, id: s, srLabel: c, ref: u } = e,
            d = (0, i.Bi)(s),
            { getThemedComponentClasses: m, themeHash: p } = (0, o.wR)();
          if (!t) return null;
          const h = a()(
            "andes-breadcrumb",
            l,
            null == m ? void 0 : m("breadcrumb", e)
          );
          return n.createElement(
            "nav",
            { "aria-label": c, ref: u, id: d },
            n.createElement(
              "ol",
              (0, r.A)({ className: h, "data-andes-breadcrumb": !0 }, p),
              n.Children.map(t, (e, l) => {
                if (!e || !(0, n.isValidElement)(e)) return null;
                const r = !Array.isArray(t) || l === t.length - 1;
                return n.cloneElement(e, { isCurrentPage: r });
              })
            )
          );
        };
        return (e.displayName = "Breadcrumb"), e;
      })();
      var d = (e) => {
        let { className: t } = e;
        return n.createElement(
          "div",
          {
            className: t,
            "aria-hidden": !0,
            "data-andes-breadcrumb-chevron": !0,
          },
          n.createElement(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", width: "6", height: "8" },
            n.createElement("path", {
              fill: "none",
              stroke: "currentColor",
              d: "M1 0l4 4-4 4",
            })
          )
        );
      };
      const m = "andes-breadcrumb";
      var p = (e) => {
        let {
          title: t,
          id: l,
          text: s,
          href: a,
          onClick: o,
          disabled: u = !1,
          isCurrentPage: p = !1,
        } = e;
        const h = (0, i.Bi)(l),
          f = { title: t, "aria-current": p ? "page" : void 0 };
        return n.createElement(
          "li",
          (0, r.A)(
            {
              className: `${m}__item`,
              key: l || `${h}`,
              "data-andes-breadcrumb-level": !0,
            },
            (0, c.i)({ disabled: u, current: p })
          ),
          u
            ? n.createElement(
                "span",
                (0, r.A)({ className: `${m}__label` }, f),
                s
              )
            : n.createElement(
                "a",
                (0, r.A)(
                  {
                    className: `${m}__link`,
                    onClick: (e) => {
                      "function" == typeof o && o(e);
                    },
                    href: a,
                  },
                  f
                ),
                s
              ),
          p ? null : n.createElement(d, { className: `${m}__chevron` })
        );
      };
    },
    88384(e, t, l) {
      "use strict";
      l.d(t, { A: () => n });
      var r = l(96540);
      const n = (e) => {
        let {
          color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
          i18n: l,
          srLabel: n,
        } = e;
        return r.createElement(
          "svg",
          {
            "aria-hidden": n ? void 0 : !n,
            "aria-label": n || void 0,
            role: n ? "img" : void 0,
            color: t,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "currentColor",
          },
          n && r.createElement("title", null, n),
          r.createElement("path", {
            d: "M8.80264 5.99316L14.8064 11.9969L8.79639 18.0069L9.85705 19.0676L16.9277 11.9969L9.8633 4.9325L8.80264 5.99316Z",
            fill: "currentColor",
          })
        );
      };
    },
    18681(e, t, l) {
      "use strict";
      l.d(t, { A: () => n });
      var r = l(96540);
      const n = (e) => {
        let {
          color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
          i18n: l,
          srLabel: n,
        } = e;
        return r.createElement(
          "svg",
          {
            "aria-hidden": n ? void 0 : !n,
            "aria-label": n || void 0,
            role: n ? "img" : void 0,
            color: t,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "currentColor",
          },
          n && r.createElement("title", null, n),
          r.createElement("path", {
            d: "M17.9941 16.0544L11.9903 10.0506L5.98034 16.0606L4.91968 15L11.9903 7.92932L19.0547 14.9937L17.9941 16.0544Z",
            fill: "currentColor",
          })
        );
      };
    },
    12662(e, t, l) {
      "use strict";
      l.d(t, { A: () => D });
      var r = l(96540),
        n = l(46942),
        s = l.n(n),
        a = l(18988),
        i = l(74848),
        o = l(89379),
        c = l(80045),
        u = (l(77005), l(35717));
      const d = ["className", "component", "type", "color", "weight", "size"],
        m = "typography",
        p = { BODY: "body", TITLE: "title" },
        h = { MEDIUM: "medium", SMALL: "small", XSMALL: "xsmall" },
        f = { REGULAR: "regular" },
        _ = "#1A1A1A",
        x = (e) => {
          let {
              className: t,
              component: l,
              type: r = p.BODY,
              color: n = _,
              weight: a = f.REGULAR,
              size: u = h.MEDIUM,
            } = e,
            x = (0, c.A)(e, d);
          const v = (() => {
              if (l) return l;
              if (r === p.TITLE)
                switch (u) {
                  case h.MEDIUM:
                    return "h2";
                  case h.SMALL:
                    return "h3";
                  case h.XSMALL:
                    return "h4";
                  default:
                    return "p";
                }
              return "p";
            })(),
            g = s()(m, t, {
              [`${m}--type-${r}`]: r,
              [`${m}--size-${u}`]: u,
              [`${m}--weight-${a}`]: a,
            });
          return (0, i.jsx)(
            v,
            (0, o.A)({ className: g, style: { color: n } }, x)
          );
        };
      x.displayName = "Typography";
      const v =
          /(https:\/\/http2\.mlstatic\.com\/(?:D_|N?Q_|N?P_)*\d+-(MLA|MLM|MLB|MCO|MLC)\d+_\d+)-[A-Z]+\.(?:webp|jpg|png)/,
        g = {
          1920: "OO",
          1200: "F",
          800: "B",
          500: "O",
          400: "C",
          320: "V",
          280: "E",
          250: "P",
          228: "A",
          210: "Y",
          200: "N",
          160: "T",
          120: "G",
          90: "I",
          70: "R",
          40: "M",
        },
        y = function (e, t) {
          let l =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!e || !t) return t;
          const r = t.match(v);
          if (r) {
            if (l) return `${r[1]}-OO.webp`;
            const t = Object.keys(g)
                .map(Number)
                .sort((e, t) => e - t),
              n = t.find((t) => t >= e) || t[t.length - 1];
            return `${r[1]}-${g[n]}.webp`;
          }
          return t;
        },
        b = (e) =>
          (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "8",
            height: "8",
            viewBox: "0 0 8 8",
            fill: "none",
            className: e,
            children: (0, i.jsx)("circle", {
              cx: "4",
              cy: "4",
              r: "3.5",
              stroke: "#3483FA",
            }),
          }),
        N = (e) => null == e,
        A = (e) => {
          if (N(e)) throw new Error("Y is required");
          return 0 === e
            ? `calc(${100 * e}% + 40px)`
            : e >= 1
            ? `calc(${100 * e}% - 40px)`
            : 100 * e + "%";
        },
        j = (e) => {
          if (N(e)) throw new Error("X is required");
          return 0 === e
            ? `calc(${100 * e}% + 16px)`
            : e >= 1
            ? `calc(${100 * e}% - 52px)`
            : 100 * e + "%";
        },
        $ = "hotspot",
        E = (e) => {
          let {
            x: t,
            y: l,
            state: r,
            onClick: n,
            className: a,
            isMobile: o = !1,
            id: c,
          } = e;
          const d = s()(`${$}--container`, a, { [`${$}--container--${r}`]: r }),
            m = s()(`${$}--background-hotspot`, `${$}--background--${r}`),
            p = s()(`${$}--circle`, `${$}--circle--${r}`),
            h = s()({ [`${$}--pulse`]: "idle" === r });
          return (0, i.jsxs)("div", {
            className: d,
            style: ((e, t, l) =>
              l
                ? { left: j(e), top: A(t) }
                : { left: 100 * e + "%", top: 100 * t + "%" })(t, l, o),
            onClick: n,
            "aria-label": `Hotspot ${c}`,
            children: [
              (0, i.jsx)("div", { className: h }),
              (0, i.jsx)("div", { className: m }),
              (0, i.jsx)("div", {
                className: p,
                children: o ? (0, i.jsx)(b, {}) : (0, i.jsx)(u.A, {}),
              }),
            ],
          });
        };
      var O = l(27786),
        T = {
          notify: function (e) {
            T.isMelidataEnabled() && T.sendTrack(e);
          },
          isMelidataEnabled: function () {
            return "function" == typeof melidata;
          },
          sendTrack: function (e) {
            var t = e.path,
              l = e.data,
              r = e.type,
              n = e.experiments;
            melidata("cleanAndSend", r || "event", {
              path: t,
              data: l,
              experiments: n,
            });
          },
        };
      const S = T;
      var I = l(85647);
      const C = (e, t) =>
          e <= 0.5 && t <= 0.5
            ? "first"
            : e > 0.5 && t <= 0.5
            ? "second"
            : e <= 0.5 && t > 0.5
            ? "third"
            : "fourth",
        w = "/eshops/shoppable_image/card_selected",
        L = "show",
        z = "shoppable-image-card",
        M = (e) => {
          var t, l;
          let {
            polycard: n,
            polycardContext: a,
            itemPositionX: c,
            itemPositionY: u,
            isMobile: d = !1,
            isSelected: m = !1,
            isDeselected: p = !1,
            commonTrackData: h = {},
            disableTrack: f = !1,
          } = e;
          const _ = s()(`${z}__container`, {
            [`${z}__container--${C(c, u)}`]: !d,
            [`${z}__container--selected`]: m,
            [`${z}__container--deselected`]: p,
            [`${z}__container--mobile`]: d,
          });
          return (
            (0, r.useEffect)(() => {
              m &&
                "undefined" != typeof window &&
                !f &&
                S.notify({
                  path: w,
                  type: L,
                  data: (0, o.A)(
                    {
                      product_id: n.metadata.product_id || "NONE",
                      item_id: n.metadata.id,
                    },
                    h
                  ),
                });
            }, [
              m,
              h,
              null == n || null === (t = n.metadata) || void 0 === t
                ? void 0
                : t.product_id,
              null == n || null === (l = n.metadata) || void 0 === l
                ? void 0
                : l.id,
              f,
            ]),
            (0, i.jsx)("div", {
              className: _,
              children: (0, i.jsx)(O.P, {
                contextValue: (0, o.A)(
                  (0, o.A)({}, a),
                  {},
                  { card_size: d ? "small" : "medium", type: "list-card" }
                ),
                thousandSeparator: ".",
                decimalSeparator: ",",
                children: (0, i.jsx)(O.C, { polycard: n }),
              }),
            })
          );
        },
        R = "shoppable-image-card-empty",
        k = (e) => {
          let { emptyStateCard: t } = e;
          const l = s()(`${R}__container`);
          return (0, i.jsxs)("div", {
            className: l,
            children: [
              (0, i.jsx)("div", {
                className: `${R}__image`,
                children: (0, i.jsx)(a.Image, { src: t.icon, alt: t.title }),
              }),
              (0, i.jsxs)("div", {
                className: `${R}__content`,
                children: [
                  (0, i.jsx)(I.o5, {
                    type: "body",
                    size: "s",
                    weight: "regular",
                    children: t.title,
                  }),
                  (0, i.jsx)("p", {
                    className: `${R}__crossed-out-price`,
                    children: t.price,
                  }),
                  (0, i.jsxs)("div", {
                    className: `${R}__content-price`,
                    children: [
                      (0, i.jsx)("p", {
                        className: `${R}__price`,
                        children: t.price,
                      }),
                      (0, i.jsx)("p", {
                        className: `${R}__discount`,
                        children: "%10 OFF",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        D = (e) => {
          var t;
          let {
            images: l,
            title: n,
            items: o,
            show_title: c = !0,
            device: u = "desktop",
            empty_state_card: d,
            commonTrackData: m = {},
            shouldUseHdImage: p = !1,
            disableTrack: h = !1,
          } = e;
          const f = c,
            _ = d,
            [x, v] = (0, r.useState)(null),
            [g, b] = (0, r.useState)(!0),
            [N, A] = (0, r.useState)(null),
            [j, $] = (0, r.useState)(0),
            O = (0, r.useRef)(null),
            T = (0, r.useRef)(null),
            S = "mobile" === u,
            I = ((e, t) => {
              if (t) {
                const t = ((e) =>
                  e && "string" == typeof e
                    ? e.replace(/-[A-Z]+\.(webp|jpg|png)$/, "-OO.$1")
                    : e)(e);
                return ((e) =>
                  e && "string" == typeof e && /D_NQ_NP_(?!2X_)/.test(e)
                    ? e.replace("D_NQ_NP_", "D_NQ_NP_2X_")
                    : e)(t);
              }
              return e;
            })(
              y(
                S ? 800 : 1920,
                null === (t = l[u]) || void 0 === t ? void 0 : t.source,
                !0
              ),
              p
            ),
            [w, L] = (0, r.useState)(new Set()),
            [z, R] = (0, r.useState)(null),
            D = N && o.mobile.length > 0,
            H = s()("shoppable-image__container", {
              "shoppable-image__container--empty": !D && _,
            });
          (0, r.useEffect)(() => {
            if (S && o.mobile.length > 0) {
              b(!1);
              const e = o.mobile.find((e) => e.pinned);
              e && v(e.polycard.metadata.id);
            }
          }, []),
            (0, r.useEffect)(() => {
              if (S) return () => {};
              const e = (e) => {
                O.current && !O.current.contains(e.target) && (v(null), b(!1));
              };
              return (
                document.addEventListener("mousedown", e),
                () => document.removeEventListener("mousedown", e)
              );
            }, []),
            (0, r.useEffect)(() => {
              if (g && x) return b(!1), () => {};
              const e = setTimeout(() => {
                $((e) => {
                  const { length: t } = o[u];
                  return t <= 1 ? Number(!e) : (e + 1) % t;
                });
              }, 3e3);
              return () => clearTimeout(e);
            }, [j, u, o]),
            (0, r.useEffect)(() => {
              if (S)
                if (x) {
                  const e = ((e, t) => {
                    if (!e) return null;
                    if (!Array.isArray(t)) return null;
                    const l = t.find((t) => t.polycard.metadata.id === e);
                    return l || null;
                  })(x, o.mobile);
                  A(e);
                } else
                  1 === o.mobile.length ? A(o.mobile[0]) : (v(null), A(null));
            }, [x, o, S]),
            (0, r.useEffect)(() => {
              z &&
                z !== x &&
                (L((e) => new Set([...e, z])),
                setTimeout(() => {
                  L((e) => {
                    const t = new Set(e);
                    return t.delete(z), t;
                  });
                }, 600)),
                R(x);
            }, [x, z]);
          const U = (e, t) => {
              if ((e.stopPropagation(), e.preventDefault(), x === t && !S))
                return v(null), void b(!1);
              v(t), b(!1);
            },
            W = function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                l =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0;
              return s()(
                `hotspot--position-${e + 1}`,
                `hotspot__container--${C(t, l)}`,
                { "hotspot--active": j === e && g }
              );
            },
            B = (e) => w.has(e),
            P = function (e) {
              if (x === e) return !0;
              const t = (
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : []
              ).find((t) => t.polycard.metadata.id === e);
              return !(x || null == t || !t.pinned) && (v(e), !0);
            },
            Z = (e) => x === e,
            F = o.desktop.map((e, t) =>
              (0, i.jsxs)(
                "div",
                {
                  className: "shoppable-image__item-container",
                  style: { top: 100 * e.y + "%", left: 100 * e.x + "%" },
                  children: [
                    (0, i.jsx)(
                      E,
                      {
                        state: Z(e.polycard.metadata.id) ? "selected" : "idle",
                        onClick: (t) => U(t, e.polycard.metadata.id),
                        className: W(t),
                        id: e.polycard.metadata.id,
                      },
                      e.polycard.metadata.id
                    ),
                    (0, i.jsx)(M, {
                      polycard: e.polycard,
                      polycardContext: e.polycard_context,
                      itemPositionX: e.x,
                      itemPositionY: e.y,
                      isSelected: Z(e.polycard.metadata.id),
                      isDeselected: B(e.polycard.metadata.id),
                      commonTrackData: m,
                      disableTrack: h,
                    }),
                  ],
                },
                e.polycard.metadata.id
              )
            );
          return (0, i.jsxs)("div", {
            className: H,
            ref: O,
            onClick: (e) => {
              const t = e.target.closest(".shoppable-image-card__container");
              if (t) return;
              e.stopPropagation(), e.preventDefault();
              e.target.closest(".hotspot--container") ||
                t ||
                S ||
                (v(null), b(!1));
            },
            children: [
              f &&
                (0, i.jsx)("h2", {
                  className: "shoppable-image__title",
                  children: n,
                }),
              (0, i.jsxs)("div", {
                className: "shoppable-image__banner",
                children: [
                  (0, i.jsx)(a.Image, {
                    src: I,
                    className: "shoppable-image__banner-img",
                    ref: T,
                  }),
                  S
                    ? !o.mobile ||
                      (null === (X = o.mobile) || void 0 === X
                        ? void 0
                        : X.length) < 2
                      ? null
                      : o.mobile.map((e, t) =>
                          (0, i.jsx)(
                            E,
                            {
                              state: P(e.polycard.metadata.id, o.mobile)
                                ? "selected"
                                : "idle",
                              onClick: (t) => U(t, e.polycard.metadata.id),
                              className: W(t, e.x, e.y),
                              id: e.polycard.metadata.id,
                              isMobile: !0,
                              x: e.x,
                              y: e.y,
                            },
                            e.polycard.metadata.id
                          )
                        )
                    : F,
                ],
              }),
              S &&
                (D
                  ? (0, i.jsx)(M, {
                      polycard: N.polycard,
                      polycardContext: N.polycard_context,
                      itemPositionX: N.x,
                      itemPositionY: N.y,
                      isMobile: !0,
                      isSelected: P(N.polycard.metadata.id, o.mobile),
                      isDeselected: B(N.polycard.metadata.id),
                      commonTrackData: m,
                      disableTrack: h,
                    })
                  : _
                  ? (0, i.jsx)(k, { emptyStateCard: _ })
                  : null),
            ],
          });
          var X;
        };
    },
    64947(e, t, l) {
      "use strict";
      l.d(t, { A: () => v });
      var r = l(89379),
        n = l(96540),
        s = l(76204),
        a = l(61678),
        i = l(75601),
        o = l(85647),
        c = l(71632),
        u = l(46942),
        d = l.n(u),
        m = l(74848);
      const p = Object.freeze({ NORMAL: "normal", TINY: "tiny" }),
        h = `${c.xl}-card-thumbnail-container`,
        f = Object.freeze({
          assets: [],
          type: "stacked",
          modifier: "circle",
          overflow: 0,
          size: "24",
          maxVisible: 3,
        }),
        _ = "#2968C8",
        x = "m",
        v = (e) => {
          let {
            thumbnailContainer: t = f,
            title: l = "",
            titleSize: u = x,
            chevronColor: v = _,
            onClick: g = null,
            link: y = null,
            variant: b = p.NORMAL,
            children: N = null,
          } = e;
          const { assets: A, maxVisible: j = f.maxVisible } = t,
            $ = (0, n.useMemo)(
              () =>
                A.slice(0, j).map((e) =>
                  (0, m.jsx)(
                    s.V,
                    { children: (0, m.jsx)("img", { src: e.src, alt: e.alt }) },
                    `thumbnail-${e.id}`
                  )
                ),
              [A, j]
            ),
            E = ((e, t) => (null != t && t.href ? "a" : e ? "button" : "div"))(
              g,
              y
            ),
            O = ((e, t) => {
              let l = e ? { onClick: e } : {};
              null != t &&
                t.href &&
                (l = (0, r.A)(
                  (0, r.A)((0, r.A)({}, l), t),
                  {},
                  { rel: "noreferrer" }
                ));
              const n = e || t,
                s = d()(
                  h,
                  n && `${h}__clickable`,
                  (null == t ? void 0 : t.href) && `${h}__redirect-link`
                );
              return (0, r.A)((0, r.A)({}, l), {}, { className: s });
            })(g, y),
            T = O.onClick || y;
          return (0, m.jsx)(
            E,
            (0, r.A)(
              (0, r.A)({ "data-testid": "card-wrapper" }, O),
              {},
              {
                children: (0, m.jsx)(a.Zp, {
                  shadow: "outline",
                  children: (0, m.jsxs)(a.Wu, {
                    className: d()(
                      `${h}__content`,
                      b === p.TINY && `${h}__content--tiny`
                    ),
                    children: [
                      (0, m.jsx)(s.$, {
                        className: d()(
                          "stacked" === t.type && `${h}-multiple__base`
                        ),
                        modifier: t.modifier,
                        containerSize: t.size,
                        type: t.type,
                        overflow:
                          t.overflow && t.overflow > 0 ? t.overflow : void 0,
                        children: $,
                      }),
                      (0, m.jsxs)("div", {
                        className: `${h}__body`,
                        children: [
                          (0, m.jsx)(o.EY, {
                            className: `${h}__body__title`,
                            size: (0, c.J2)(u),
                            children: l,
                          }),
                          N,
                        ],
                      }),
                      T &&
                        (0, m.jsx)("div", {
                          className: `${h}__chevron`,
                          "data-testid": "chevron",
                          children: (0, m.jsx)(i.A, { color: v }),
                        }),
                    ],
                  }),
                }),
              }
            )
          );
        };
    },
    71632(e, t, l) {
      "use strict";
      l.d(t, {
        J2: () => p,
        Jt: () => E,
        MR: () => y,
        Qf: () => d,
        TC: () => m,
        gs: () => f,
        kC: () => x,
        ny: () => j,
        uB: () => _,
        xl: () => r,
      });
      const r = "xprod-lib",
        n = "caution",
        s = "informative",
        a = "inverted",
        i = "negative",
        o = "neutral",
        c = "positive",
        u = {
          [n]: "orange",
          [s]: "accent",
          [a]: "inverted",
          [i]: "red",
          [o]: "gray",
          [c]: "green",
        },
        d = {
          warning: "caution",
          error: "negative",
          success: "positive",
          info: "informative",
        },
        m = (e) => {
          var t;
          return null !== (t = e && u[e]) && void 0 !== t ? t : e;
        },
        p = (e) => ("string" == typeof e ? e.toLowerCase() : e);
      const h = (e) => {
          if (!e || "object" != typeof e || Array.isArray(e)) return e;
          const t = {};
          return (
            Object.keys(e).forEach((l) => {
              const r = e[l];
              var n;
              Array.isArray(r)
                ? (t[l] = ((n = r), Array.isArray(n) ? n.map((e) => p(e)) : n))
                : (t[l] =
                    "object" == typeof r && null !== r
                      ? h(r)
                      : "string" == typeof r
                      ? p(r)
                      : r);
            }),
            t
          );
        },
        f = (e) => h(e),
        _ = (e) => {
          if (null == e || Number.isNaN(Number(e))) return { fraction: "0" };
          const [t, l] = String(e).split("."),
            r = ((e) => {
              const t = [];
              let l = e;
              for (; l.length > 3; )
                t.unshift(l.slice(-3)), (l = l.slice(0, -3));
              return l && t.unshift(l), t.join(".");
            })(t);
          if (!l) return { fraction: r };
          return { fraction: r, cents: l.padEnd(2, "0").slice(0, 2) };
        },
        x = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
          return { getComponent: (l) => (l && l in e ? e[l] : t) };
        },
        v = Object.freeze({
          xxs: "2px",
          xs: "4px",
          s: "8px",
          m: "16px",
          l: "24px",
          xl: "32px",
        }),
        g = v.l,
        y = (e) => (e in v ? v[e] : g),
        b = (e) => (e && "string" == typeof e ? e.toLowerCase().trim() : null),
        N = (e) => {
          let { sizes: t, defaultKey: l } = e;
          const r = Object.freeze(t),
            n = r[l],
            s = (e) => {
              var t;
              const l = b(e);
              return l && null !== (t = r[l]) && void 0 !== t ? t : n;
            };
          return {
            SIZES: r,
            DEFAULT_SIZE: n,
            DEFAULT_SIZE_PX: `${n}px`,
            getSize: s,
            getSizePx: (e) => `${s(e)}px`,
            isValidSize: (e) => {
              const t = b(e);
              return null !== t && t in r;
            },
          };
        },
        A = N({
          sizes: {
            xxs: 12,
            xs: 14,
            s: 16,
            m: 18,
            l: 24,
            xl: 32,
            xxl: 40,
            xxxl: 48,
          },
          defaultKey: "m",
        }),
        j = (A.SIZES, A.DEFAULT_SIZE, A.DEFAULT_SIZE_PX, A.getSize),
        $ =
          (A.getSizePx,
          A.isValidSize,
          N({
            sizes: {
              xxs: 13,
              xs: 16,
              s: 24,
              m: 32,
              l: 40,
              xl: 48,
              xxl: 56,
              huge: 64,
              massive: 72,
              giant: 80,
            },
            defaultKey: "m",
          })),
        E = ($.SIZES, $.DEFAULT_SIZE, $.DEFAULT_SIZE_PX, $.getSize);
      $.getSizePx, $.isValidSize;
    },
    58436(e, t, l) {
      "use strict";
      l.d(t, { A: () => $e });
      var r = {};
      l.r(r), l.d(r, { XN: () => se, R1: () => X });
      var n = {};
      l.r(n), l.d(n, { D: () => ue });
      var s = {};
      l.r(s), l.d(s, { $: () => pe });
      var a = l(89379),
        i = l(96540),
        o = l(46942),
        c = l.n(o),
        u = l(71632),
        d = l(79001),
        m = l.n(d),
        p = l(32028),
        h = l.n(p),
        f = l(74848);
      const _ = ["children"],
        x = function () {
          const e = [
              ..._,
              ...(arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : []),
            ],
            t = (l) =>
              Object.keys(l).reduce((r, n) => {
                const s = l[n],
                  a = h()(n),
                  i = !m()(s) && !Array.isArray(s);
                if (a in r && !((e) => h()(e) === e)(n)) return r;
                let o;
                return (
                  (o =
                    e.includes(n) || i
                      ? s
                      : Array.isArray(s)
                      ? s.map((e) => (m()(e) ? t(e) : e))
                      : t(s)),
                  (r[a] = o),
                  r
                );
              }, {});
          return t;
        };
      var v = l(80045),
        g = l(85647),
        y = l(37808);
      const b = {
          handleReminderExpired: () => {},
          siteId: null,
          platformId: null,
          onOpenModal: null,
        },
        N = (0, i.createContext)(b);
      N.displayName = "ShippingSectionContext";
      const A = () => (0, i.useContext)(N);
      var j = l(14269);
      const $ = (e) =>
          Object.keys(e).reduce((t, l) => {
            const r = e[l];
            return (t[l] = "string" == typeof r ? r.toLowerCase() : r), t;
          }, {}),
        E = (e) => {
          const t = e.split(/\\n|\n/),
            l = e.endsWith("\\n") || e.endsWith("\n"),
            r = t.filter((e) => "" !== e);
          return 1 !== r.length || l
            ? (0, f.jsx)(f.Fragment, {
                children: r.map((e, t) =>
                  (0, f.jsxs)(
                    "span",
                    {
                      children: [
                        e,
                        (t < r.length - 1 || l) && (0, f.jsx)("br", {}),
                      ],
                    },
                    `line-${e}`
                  )
                ),
              })
            : e;
        },
        O = [
          "id",
          "value",
          "srLabel",
          "className",
          "styles",
          "url",
          "destination",
          "onClick",
          "target",
          "role",
          "children",
          "modal",
        ],
        T = {
          color: "link",
          size: "m",
          weight: "regular",
          hierarchy: "transparent",
        },
        S = ["styles", "centsType", "className", "price"],
        I = {},
        C = ["styles", "className", "value", "srLabel"],
        w = ["styles", "className", "value"],
        L = {
          icon: (e) => {
            let {
                styles: t = null,
                className: l = "",
                value: r = "",
                srLabel: n = "",
              } = e,
              s = (0, v.A)(e, C);
            const { size: i = "m" } = t || {},
              o = !n,
              c = (0, u.Jt)(i);
            return (0, f.jsx)("span", {
              className: `${l} ${l}--icon`,
              children: (0, f.jsx)(
                "img",
                (0, a.A)(
                  {
                    src: r,
                    alt: n,
                    "aria-hidden": o,
                    className: `${l}--image`,
                    height: c,
                  },
                  s
                )
              ),
            });
          },
          text: (e) => {
            let { styles: t = null, className: l = "", value: r = "" } = e,
              n = (0, v.A)(e, w);
            const s = E(r);
            return (0, f.jsx)(
              g.o5,
              (0, a.A)(
                (0, a.A)((0, a.A)({ className: l }, t), n),
                {},
                { children: s }
              )
            );
          },
          action: (e) => {
            let {
                id: t = "",
                value: l = "",
                srLabel: r = "",
                className: n = "",
                styles: s = T,
                url: o = "",
                destination: u = "",
                onClick: d = null,
                target: m = "",
                role: p = "link",
                children: h = null,
                modal: _ = null,
              } = e,
              x = (0, v.A)(e, O);
            const { onOpenModal: b, platformId: N } = A(),
              j = "mobile" === N || "webmobile" === N,
              $ = h || E(l),
              S = r || void 0,
              I = o || u,
              C = (0, a.A)((0, a.A)({}, T), s),
              w =
                (null == _ ? void 0 : _.renderMode) ||
                (j ? "fullscreen" : "centered"),
              L = Boolean(_ && b),
              z = (0, i.useCallback)(
                (e) => {
                  e.preventDefault(),
                    b &&
                      b({
                        target: I,
                        title: (null == _ ? void 0 : _.title) || "",
                        params: (0, a.A)(
                          (0, a.A)({}, null == _ ? void 0 : _.params),
                          {},
                          {
                            namespace: t,
                            renderMode: w,
                            noCloseButton:
                              (null == _ ? void 0 : _.noCloseButton) || !1,
                          }
                        ),
                      }),
                    null == d || d(e);
                },
                [b, I, _, d, t, w]
              );
            if ("link" === p && I && !L) {
              const e = I ? "a" : "button",
                t = (0, a.A)(
                  {
                    className: n,
                    component: e,
                    color: C.color || "link",
                    size: C.size,
                    weight: C.weight,
                    href: I,
                    target: m || "_blank",
                    onClick: d,
                    "aria-label": S,
                  },
                  x
                );
              return (0, f.jsx)(
                g.o5,
                (0, a.A)((0, a.A)({}, t), {}, { children: $ })
              );
            }
            const M = L ? z : null != d ? d : void 0,
              R = C.weight ? `${n}--${C.weight}` : void 0,
              k = C.hierarchy ? `${n}--${C.hierarchy}` : void 0,
              D = (0, a.A)(
                {
                  className: c()(n, R, k),
                  hierarchy: C.hierarchy,
                  size:
                    ((H = C.size),
                    null !==
                      (U = {
                        s: "small",
                        m: "medium",
                        l: "large",
                        small: "small",
                        medium: "medium",
                        large: "large",
                      }[null != H ? H : ""]) && void 0 !== U
                      ? U
                      : "medium"),
                  href: void 0,
                  onClick: M,
                  "aria-label": S,
                },
                x
              );
            var H, U;
            return (0, f.jsx)(
              y.$n,
              (0, a.A)((0, a.A)({}, D), {}, { children: $ })
            );
          },
          currency: (e) => {
            let {
                styles: t = I,
                centsType: l = "superscript",
                className: r = "",
                price: n = 0,
              } = e,
              s = (0, v.A)(e, S);
            const { weight: i = "regular", size: o = "s" } = t,
              c = (0, u.uB)(n),
              d = (0, u.ny)(o);
            return (0, f.jsx)(
              j.BH,
              (0, a.A)(
                {
                  className: `${r} ${r}--currency`,
                  weight: i,
                  size: d,
                  value: c,
                  centsType: l,
                },
                s
              )
            );
          },
        },
        z = ["className", "parts", "styles", "htmlTag"],
        M = ["type"],
        R = [],
        k = (e) => {
          let {
              className: t = `${u.xl}-rich-text`,
              parts: l = R,
              styles: r,
              htmlTag: n = "span",
            } = e,
            s = (0, v.A)(e, z);
          return (0, f.jsx)(
            g.o5,
            (0, a.A)(
              (0, a.A)({ className: `${t}__item`, component: n }, s),
              {},
              {
                children: l.map((e, l) => {
                  const { type: n = "text" } = e,
                    s = (0, v.A)(e, M);
                  if (!Object.prototype.hasOwnProperty.call(L, n)) return null;
                  const i = L[n],
                    o = (0, a.A)(
                      (0, a.A)({}, s),
                      {},
                      {
                        styles: $((0, a.A)((0, a.A)({}, r), s.styles)),
                        className: `${t}__part`,
                      }
                    );
                  return (0, f.jsx)(i, (0, a.A)({}, o), `part-${l}`);
                }),
              }
            )
          );
        };
      var D = l(64947);
      const H = (e) => {
          if (e <= 0)
            return {
              hours: 0,
              minutes: 0,
              seconds: 0,
              totalMinutes: 0,
              totalMilliseconds: 0,
              isFinished: !0,
            };
          const t = Math.floor(e / 6e4);
          return {
            hours: Math.floor(e / 36e5),
            minutes: Math.floor((e / 6e4) % 60),
            seconds: Math.floor((e / 1e3) % 60),
            totalMinutes: t,
            totalMilliseconds: e,
            isFinished: !1,
          };
        },
        U = "shipping-promises",
        W = Object.freeze({
          RICH_TEXT: "rich_text",
          CARD_WITH_THUMBNAILS: "card_with_thumbnails",
          REMINDER: "reminder",
        }),
        B = "xxs",
        P = [],
        Z = Object.freeze({ type: "stacked", modifier: "circle" }),
        F = Object.freeze({
          variant: "tiny",
          overflow: 0,
          titleSize: "s",
          size: "32",
        }),
        X = (e) => {
          let {
            items: t = P,
            onReminderExpired: l,
            refreshOnExpire: r = !1,
            onRefresh: n,
            children: s,
            isLoading: a = !1,
            siteId: o = null,
            platformId: c = null,
            onOpenModal: u = null,
          } = e;
          const [d, m] = (0, i.useState)(t),
            p = (0, i.useRef)(t),
            h = (0, i.useRef)(l),
            _ = (0, i.useRef)(n);
          (0, i.useEffect)(() => {
            h.current = l;
          }, [l]),
            (0, i.useEffect)(() => {
              _.current = n;
            }, [n]),
            (0, i.useEffect)(() => {
              var e, l;
              (e = p.current),
                (l = t),
                (e && l
                  ? e.length !== l.length ||
                    Array.from(e.map((e) => e.id))
                      .sort((e, t) => e.localeCompare(t))
                      .join(",") !==
                      Array.from(l.map((e) => e.id))
                        .sort((e, t) => e.localeCompare(t))
                        .join(",")
                  : e !== l) && (m(t), (p.current = t));
            }, [t]);
          const x = (0, i.useCallback)(
              (e) => {
                m((t) => {
                  var l;
                  const n = ((e) => {
                      const t = {};
                      return (
                        e.forEach((e) => {
                          e.components.forEach((l) => {
                            l.id && (t[l.id] = e.id);
                          });
                        }),
                        t
                      );
                    })(t),
                    s = e ? n[e] : void 0;
                  return s
                    ? (null === (l = h.current) || void 0 === l || l.call(h, s),
                      r
                        ? (null === (a = _.current) ||
                            void 0 === a ||
                            a.call(_),
                          t)
                        : t.filter((e) => e.id !== s))
                    : t;
                  var a;
                });
              },
              [r]
            ),
            v = (0, i.useMemo)(
              () => ({
                handleReminderExpired: x,
                isLoading: a,
                siteId: o,
                platformId: c,
                onOpenModal: u,
              }),
              [x, a, o, c, u]
            );
          return (0, f.jsx)(N.Provider, {
            value: v,
            children: "function" == typeof s ? s(d) : s,
          });
        },
        V = Object.freeze({
          ONE_MINUTE: "ONE_MINUTE",
          LESS_THAN_ONE_HOUR: "LESS_THAN_ONE_HOUR",
          BTW_ONE_AND_TWO_HOURS_WITHOUT_MIN:
            "BTW_ONE_AND_TWO_HOURS_WITHOUT_MIN",
          BTW_ONE_AND_TWO_HOURS_WITH_MIN: "BTW_ONE_AND_TWO_HOURS_WITH_MIN",
          MORE_THAN_TWO_HOURS_WITHOUT_MIN: "MORE_THAN_TWO_HOURS_WITHOUT_MIN",
          MORE_THAN_TWO_HOURS_WITH_MIN: "MORE_THAN_TWO_HOURS_WITH_MIN",
        }),
        Y = (e, t, l) => {
          var r;
          if (null == e || !e.length) return null;
          const n = ((e, t) =>
            e <= 6e4
              ? V.ONE_MINUTE
              : e < 36e5
              ? V.LESS_THAN_ONE_HOUR
              : e < 72e5
              ? 0 === t
                ? V.BTW_ONE_AND_TWO_HOURS_WITHOUT_MIN
                : V.BTW_ONE_AND_TWO_HOURS_WITH_MIN
              : 0 === t
              ? V.MORE_THAN_TWO_HOURS_WITHOUT_MIN
              : V.MORE_THAN_TWO_HOURS_WITH_MIN)(t, l);
          return n &&
            null !==
              (r = e.find((e) => {
                var t;
                return (
                  (null === (t = e.condition) || void 0 === t
                    ? void 0
                    : t.name) === n
                );
              })) &&
            void 0 !== r
            ? r
            : null;
        },
        G = (e, t) => {
          if (!e || "string" != typeof e) return e;
          const { hours: l, minutes: r, seconds: n } = t;
          return e
            .replace(/\{h\}/g, String(l))
            .replace(/\{m\}/g, String(r))
            .replace(/\{s\}/g, String(n));
        },
        Q = (e, t) => {
          const l = null != e ? e : {},
            r = null != t ? t : {};
          return (
            l.color === r.color && l.weight === r.weight && l.size === r.size
          );
        },
        J = (e) => {
          if (null == e || !e.length) return e;
          const t = [];
          let l = null;
          const r = () => {
            if (l) {
              if (l.parts.length > 1) {
                const r = l.parts
                  .map((e) => {
                    var t;
                    return null !== (t = e.value) && void 0 !== t ? t : "";
                  })
                  .join("")
                  .trim();
                t.push({
                  type: "text",
                  value:
                    ((e = r),
                    e && "string" == typeof e ? e.replace(/ /g, " ") : e),
                  styles: l.styles,
                });
              } else t.push(...l.parts);
              var e;
              l = null;
            }
          };
          return (
            e.forEach((n, s) => {
              const a = n.wasCountdown;
              var i;
              l
                ? Q(l.styles, n.styles)
                  ? l.parts.push(n)
                  : (i = n.value) &&
                    "string" == typeof i &&
                    /^\s+$/.test(i) &&
                    ((e, t) => !!e && (e.wasCountdown || Q(e.styles, t)))(
                      e[s + 1],
                      l.styles
                    )
                  ? l.parts.push(n)
                  : (r(),
                    a ? (l = { styles: n.styles, parts: [n] }) : t.push(n))
                : a
                ? (l = { styles: n.styles, parts: [n] })
                : t.push(n);
            }),
            r(),
            t
          );
        },
        K = {
          [W.RICH_TEXT]: k,
          [W.CARD_WITH_THUMBNAILS]: (e) => {
            const { className: t = "" } = e,
              l = ((e) => {
                if (!e) return {};
                const {
                    value: t,
                    action: l,
                    items: r = [],
                    overflow: n = F.overflow,
                    styles: s = {},
                    variant: i = F.variant,
                  } = e,
                  { titleSize: o = F.titleSize, size: c = F.size } = s;
                return {
                  title: t,
                  titleSize: o,
                  link: l ? { href: l } : null,
                  variant: i,
                  thumbnailContainer: (0, a.A)(
                    (0, a.A)({}, Z),
                    {},
                    { assets: r, overflow: n, size: c }
                  ),
                };
              })(e);
            return (0, f.jsx)("div", {
              className: c()(`${t}__item`, `${t}__item--card-with-thumbnails`),
              children: (0, f.jsx)(D.A, (0, a.A)({}, l)),
            });
          },
          [W.REMINDER]: (e) => {
            const {
                id: t,
                totalMilliseconds: l,
                labels: r,
                className: n = "",
                htmlTag: s = "span",
                autoRemove: o = !0,
                onExpire: u,
              } = e,
              { handleReminderExpired: d, isLoading: m } = A(),
              p = (0, i.useRef)(!1),
              h = (0, i.useRef)(null),
              {
                hours: _,
                minutes: x,
                seconds: v,
                totalMilliseconds: g,
                isFinished: y,
              } = ((e) => {
                const t = (0, i.useRef)(Date.now()),
                  l = (0, i.useRef)(e),
                  r = (0, i.useRef)(null),
                  [n, s] = (0, i.useState)(() => H(e)),
                  a = (0, i.useCallback)(() => {
                    const e = Date.now() - t.current,
                      r = Math.max(0, l.current - e);
                    return H(r);
                  }, []);
                return (
                  (0, i.useEffect)(() => {
                    if (
                      (r.current &&
                        (clearInterval(r.current), (r.current = null)),
                      (t.current = Date.now()),
                      (l.current = e),
                      s(H(e)),
                      !(e <= 0))
                    )
                      return (
                        (r.current = setInterval(() => {
                          const e = a();
                          s(e),
                            e.isFinished &&
                              (clearInterval(r.current), (r.current = null));
                        }, 1e3)),
                        () => {
                          r.current &&
                            (clearInterval(r.current), (r.current = null));
                        }
                      );
                  }, [e, a]),
                  n
                );
              })(l);
            (0, i.useEffect)(() => {
              y &&
                !p.current &&
                ((p.current = !0), null == u || u(t), o && d(t));
            }, [y, t, d, o, u]);
            const b = Y(r, g, x);
            if ((null != b && b.component && (h.current = b), y && !m))
              return null;
            const N = null != b ? b : h.current;
            if (null == N || !N.component) return null;
            const { component: j } = N,
              $ = y
                ? { hours: 0, minutes: 0, seconds: 0 }
                : { hours: _, minutes: x, seconds: v },
              E = ((e, t) => {
                if (null == e || !e.length) return e;
                if (
                  !((e) => {
                    var t;
                    return (
                      null !==
                        (t =
                          null == e
                            ? void 0
                            : e.some((e) => "countdown" === e.type)) &&
                      void 0 !== t &&
                      t
                    );
                  })(e)
                )
                  return e;
                const l = e.map((e) =>
                  "countdown" === e.type
                    ? (0, a.A)(
                        (0, a.A)({}, e),
                        {},
                        { type: "text", value: G(e.value, t), wasCountdown: !0 }
                      )
                    : e
                );
                return J(l);
              })(j.parts, $),
              O = E;
            return (0, f.jsx)("div", {
              className: c()(`${n}__item`, `${n}__item--reminder`),
              children: (0, f.jsx)(k, {
                className: n,
                htmlTag: s,
                parts: O,
                styles: j.styles,
              }),
            });
          },
        },
        q = (0, u.kC)(K, k),
        ee = (e) => {
          let { className: t = "", htmlTag: l = "div", components: r } = e;
          return r
            ? r.map((e) => {
                const r = ((e) => {
                    var t;
                    return null !== (t = e.uiType) && void 0 !== t
                      ? t
                      : e.ui_type;
                  })(e),
                  n = q.getComponent(r);
                return n
                  ? (0, f.jsx)(
                      n,
                      (0, a.A)({ className: t, htmlTag: l }, e),
                      e.id
                    )
                  : null;
              })
            : null;
        },
        te = ["className", "promiseGapSize", "gapSize"],
        le = (e) => {
          let { className: t = "", promiseGapSize: l, gapSize: r = B } = e,
            n = (0, v.A)(e, te);
          const { components: s } = n;
          if (null == s || !s.length) return null;
          const i = (0, u.MR)(r);
          return (0, f.jsx)("li", {
            className: `${t}__promise`,
            style: { gap: i },
            children: (0, f.jsx)(
              ee,
              (0, a.A)({ className: t, components: s }, n)
            ),
          });
        },
        re = (e) => {
          let { srLabel: t, gapSize: l, items: r } = e;
          return (0, f.jsx)("ul", {
            "aria-label": t,
            className: c()(`${u.xl}-${U}`, `${u.xl}-${U}__list`),
            style: { gap: (0, u.MR)(null != l ? l : "") },
            children: r.map((e) =>
              (0, f.jsx)(
                le,
                (0, a.A)({ className: `${u.xl}-${U}`, promiseGapSize: l }, e),
                e.id
              )
            ),
          });
        },
        ne = [],
        se = (e) => {
          let { srLabel: t = "", gapSize: l = "m", items: r = ne } = e;
          return 0 === r.length
            ? null
            : (0, f.jsx)(re, { srLabel: t, gapSize: l, items: r });
        };
      var ae = l(62939);
      const ie = (e) => {
          let {
            className: t = "",
            contentType: l = "text",
            text: r = "",
            styles: n,
          } = e;
          const s = (0, u.J2)(l),
            a = (0, u.gs)(n),
            {
              color: i = "positive",
              size: o = "small",
              hierarchy: d = "loud",
              roundedCorners: m = [
                "top-left",
                "top-right",
                "bottom-left",
                "bottom-right",
              ],
              secondaryColor: p = null,
            } = a || {},
            h = (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "shipping-default";
              return Array.isArray(e) && 0 !== e.length
                ? e
                    .filter((e) => "string" == typeof e && "" !== e.trim())
                    .map((e) => `${t}--rounded-${e}`)
                    .join(" ")
                : "";
            })(m, t);
          return (0, f.jsx)(ae.ab, {
            color: (0, u.TC)(i),
            size: o,
            hierarchy: d,
            roundedCorners: m,
            contentType: s,
            className: c()(t, `${t}--${o}`, h),
            secondaryColor: p,
            children: r,
          });
        },
        oe = "shipping-highlight-info-summaries",
        ce = [],
        ue = (e) => {
          let { items: t = ce, gapSize: l = "m", srLabel: r = "" } = e;
          return 0 === t.length
            ? null
            : (0, f.jsx)("ul", {
                "aria-label": r,
                className: c()(`${u.xl}-${oe}`, `${u.xl}-${oe}__list`),
                style: { gap: (0, u.MR)(l) },
                children: t.map((e, t) => {
                  var l;
                  return (0, f.jsx)(
                    "li",
                    {
                      className: `${u.xl}-${oe}__summary`,
                      children: (0, f.jsx)(
                        ie,
                        (0, a.A)({ className: `${u.xl}-${oe}__summary` }, e)
                      ),
                    },
                    null !== (l = e.id) && void 0 !== l
                      ? l
                      : `highlight-info-summary-${t}`
                  );
                }),
              });
        };
      var de = l(71111);
      const me = `${u.xl}-custom-message`,
        pe = (e) => {
          var t, l;
          let {
            messageType: r = "info",
            state: n = "",
            body: s,
            closable: a = !1,
            closeable: i = !1,
            hierarchy: o = "quiet",
            className: d = "",
          } = e;
          const m = "VISIBLE" === n,
            p = Boolean(
              null == s || null === (t = s.text) || void 0 === t
                ? void 0
                : t.trim()
            );
          if (!m || !p) return null;
          const h = a || i,
            _ = null !== (l = u.Qf[r]) && void 0 !== l ? l : r,
            x = (0, u.TC)(_);
          return (0, f.jsx)("div", {
            className: c()(me, d),
            "data-testid": "custom-message",
            children: (0, f.jsx)(de.Q, {
              color: x,
              hierarchy: o,
              closable: h,
              children: (0, f.jsx)("div", {
                className: `${me}__message-text`,
                children: s.text,
              }),
            }),
          });
        };
      var he = l(832);
      const fe = "xprod-lib-placeholder",
        _e = (e) => {
          const {
              variant: t = "text",
              width: l = "100%",
              height: r,
              className: n = "",
              animated: s = !0,
              lines: a = 1,
              lineWidths: i,
            } = e,
            o =
              r ||
              (() => {
                switch (t) {
                  case "text":
                    return "1em";
                  case "circle":
                    return "40px";
                  default:
                    return "100px";
                }
              })();
          if (a > 1 && "text" === t) {
            const e =
              i ||
              ((e) => {
                const t = [],
                  l = [100, 95, 92, 88, 85, 90, 87, 93];
                for (let n = 0; n < e; n += 1)
                  if (n === e - 1) t.push(60 + (n % 4) * 5 + "%");
                  else {
                    var r;
                    const e =
                      null !== (r = l[n % l.length]) && void 0 !== r ? r : 90;
                    t.push(`${e}%`);
                  }
                return t;
              })(a);
            return (0, f.jsx)("div", {
              className: c()(`${fe}__container`, n),
              "data-testid": "placeholder-container",
              "aria-busy": "true",
              "aria-live": "polite",
              children: Array.from({ length: a }, (r, n) => {
                const a = e[n] || l;
                let i;
                i =
                  "0%" === a
                    ? "number" == typeof o
                      ? o / 2
                      : `calc(${o} / 2)`
                    : o;
                const u = {
                  width: "number" == typeof a ? `${a}px` : a,
                  height: "number" == typeof i ? `${i}px` : i,
                };
                return (0, f.jsx)(
                  "div",
                  {
                    className: c()(fe, `${fe}--${t}`, {
                      [`${fe}--animated`]: s,
                    }),
                    style: u,
                    "data-testid": `placeholder-line-${n}`,
                  },
                  `line-${n}`
                );
              }),
            });
          }
          const u = {
            width: "number" == typeof l ? `${l}px` : l,
            height: "number" == typeof o ? `${o}px` : o,
          };
          return (0, f.jsx)("div", {
            className: c()(fe, `${fe}--${t}`, { [`${fe}--animated`]: s }, n),
            style: u,
            "data-testid": "placeholder",
            "aria-busy": "true",
            "aria-live": "polite",
          });
        },
        xe = ["key"],
        ve = "xprod-lib-loading-overlay",
        ge = (e) => {
          const {
            loadingType: t,
            spinnerConfig: l,
            skeletonConfig: r,
            className: n = "",
          } = e;
          if ("spinner" === t) {
            const {
              size: e = "medium",
              modifier: t = "block",
              srLabel: r = "",
            } = l || {};
            return (0, f.jsx)("div", {
              className: c()(ve, `${ve}--spinner`, n),
              "data-testid": "loading-overlay",
              children: (0, f.jsx)(he.m, { size: e, modifier: t, srLabel: r }),
            });
          }
          return Array.isArray(r)
            ? (0, f.jsx)("div", {
                className: c()(`${ve}--skeleton`, n),
                "data-testid": "loading-skeleton-container",
                children: r.map((e) => {
                  const { key: t } = e,
                    l = (0, v.A)(e, xe),
                    r = null != t ? t : `skeleton-${JSON.stringify(l)}`;
                  return (0, f.jsx)(_e, (0, a.A)({}, l), r);
                }),
              })
            : r
            ? (0, f.jsx)("div", {
                className: c()(`${ve}--skeleton`, n),
                "data-testid": "loading-skeleton-container",
                children: (0, f.jsx)(_e, (0, a.A)({}, r)),
              })
            : null;
        },
        { XN: ye, R1: be } = r,
        { D: Ne } = n,
        { $: Ae } = s,
        je = `${u.xl}-shipping-section`;
      var $e = ((e, t) => {
        const l = x(t);
        return (t) => {
          const r = l(t);
          return (0, f.jsx)(e, (0, a.A)({}, r));
        };
      })((e) => {
        var t, l, r, n;
        const {
            highlightInfoSummaries: s,
            promises: o,
            customMessage: d,
            gapSize: m = "m",
            className: p = "",
            isLoading: h = !1,
            srLabel: _ = "",
            refreshOnExpire: x = !1,
            onRefresh: v = null,
            siteId: g = null,
            platformId: y = null,
            onOpenModal: b = null,
          } = e,
          N = (0, u.MR)(m),
          A = null == o ? void 0 : o.onReminderExpired,
          j =
            null == d ||
            null === (t = d.body) ||
            void 0 === t ||
            null === (t = t.text) ||
            void 0 === t
              ? void 0
              : t.trim(),
          $ =
            (null !==
              (l =
                null == o || null === (r = o.items) || void 0 === r
                  ? void 0
                  : r.length) && void 0 !== l
              ? l
              : 0) > 0,
          E =
            (null !== (n = null == s ? void 0 : s.length) && void 0 !== n
              ? n
              : 0) > 0,
          O = "VISIBLE" === (null == d ? void 0 : d.state) && j ? d : null,
          T = "mobile" === y || "webmobile" === y,
          S = T ? "skeleton" : "spinner",
          I = (0, i.useMemo)(() => {
            var e, t, l;
            if (!T)
              return {
                spinnerConfig: {
                  size: "medium",
                  modifier: "block",
                  srLabel: _,
                },
              };
            const r =
                null !== (e = null == s ? void 0 : s.length) && void 0 !== e
                  ? e
                  : 0,
              n =
                null !==
                  (t =
                    null == o || null === (l = o.items) || void 0 === l
                      ? void 0
                      : l.length) && void 0 !== t
                  ? t
                  : 0,
              a =
                r +
                2 * n +
                ((r > 1 ? r - 1 : 0) +
                  (n > 1 ? n - 1 : 0) +
                  (r > 0 && n > 0 ? 1 : 0)),
              i = [];
            for (let e = 0; e < r; e += 1)
              i.push("45%"), e < r - 1 && i.push("0%");
            r > 0 && n > 0 && i.push("0%");
            for (let e = 0; e < n; e += 1)
              i.push("80%"), i.push("60%"), e < n - 1 && i.push("0%");
            return {
              skeletonConfig: {
                variant: "text",
                lines: a,
                lineWidths: i,
                height: "16px",
                animated: !0,
              },
            };
          }, [T, s, o, _]);
        return $ || E || O
          ? (0, f.jsxs)("div", {
              className: c()(je, p, { [`${je}--loading`]: h }),
              style: { gap: N },
              "data-testid": "shipping-section",
              children: [
                (0, f.jsx)(Ne, { items: s }),
                (null == o ? void 0 : o.items) &&
                  o.items.length > 0 &&
                  (0, f.jsx)(be, {
                    items: o.items,
                    onReminderExpired: A,
                    refreshOnExpire: x,
                    onRefresh: v,
                    isLoading: h,
                    siteId: g,
                    platformId: y,
                    onOpenModal: b,
                    children: (e) =>
                      Array.isArray(e) &&
                      e.length > 0 &&
                      (0, f.jsx)(ye, {
                        srLabel: o.srLabel,
                        gapSize: o.gapSize,
                        items: e,
                      }),
                  }),
                O && (0, f.jsx)(Ae, (0, a.A)({}, O)),
                h && (0, f.jsx)(ge, (0, a.A)({ loadingType: S }, I)),
              ],
            })
          : null;
      });
    },
    32028(e) {
      var t = "[object Symbol]",
        l = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        r = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        n = "\\ud800-\\udfff",
        s = "\\u0300-\\u036f\\ufe20-\\ufe23",
        a = "\\u20d0-\\u20f0",
        i = "\\u2700-\\u27bf",
        o = "a-z\\xdf-\\xf6\\xf8-\\xff",
        c = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        u = "\\ufe0e\\ufe0f",
        d =
          "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        m = "['’]",
        p = "[" + n + "]",
        h = "[" + d + "]",
        f = "[" + s + a + "]",
        _ = "\\d+",
        x = "[" + i + "]",
        v = "[" + o + "]",
        g = "[^" + n + d + _ + i + o + c + "]",
        y = "\\ud83c[\\udffb-\\udfff]",
        b = "[^" + n + "]",
        N = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        A = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        j = "[" + c + "]",
        $ = "\\u200d",
        E = "(?:" + v + "|" + g + ")",
        O = "(?:" + j + "|" + g + ")",
        T = "(?:['’](?:d|ll|m|re|s|t|ve))?",
        S = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
        I = "(?:" + f + "|" + y + ")" + "?",
        C = "[" + u + "]?",
        w =
          C +
          I +
          ("(?:" + $ + "(?:" + [b, N, A].join("|") + ")" + C + I + ")*"),
        L = "(?:" + [x, N, A].join("|") + ")" + w,
        z = "(?:" + [b + f + "?", f, N, A, p].join("|") + ")",
        M = RegExp(m, "g"),
        R = RegExp(f, "g"),
        k = RegExp(y + "(?=" + y + ")|" + z + w, "g"),
        D = RegExp(
          [
            j + "?" + v + "+" + T + "(?=" + [h, j, "$"].join("|") + ")",
            O + "+" + S + "(?=" + [h, j + E, "$"].join("|") + ")",
            j + "?" + E + "+" + T,
            j + "+" + S,
            _,
            L,
          ].join("|"),
          "g"
        ),
        H = RegExp("[" + $ + n + s + a + u + "]"),
        U =
          /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        W =
          "object" == typeof globalThis &&
          globalThis &&
          globalThis.Object === Object &&
          globalThis,
        B = "object" == typeof self && self && self.Object === Object && self,
        P = W || B || Function("return this")();
      var Z,
        F =
          ((Z = {
            À: "A",
            Á: "A",
            Â: "A",
            Ã: "A",
            Ä: "A",
            Å: "A",
            à: "a",
            á: "a",
            â: "a",
            ã: "a",
            ä: "a",
            å: "a",
            Ç: "C",
            ç: "c",
            Ð: "D",
            ð: "d",
            È: "E",
            É: "E",
            Ê: "E",
            Ë: "E",
            è: "e",
            é: "e",
            ê: "e",
            ë: "e",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ï: "I",
            ì: "i",
            í: "i",
            î: "i",
            ï: "i",
            Ñ: "N",
            ñ: "n",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Õ: "O",
            Ö: "O",
            Ø: "O",
            ò: "o",
            ó: "o",
            ô: "o",
            õ: "o",
            ö: "o",
            ø: "o",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ü: "U",
            ù: "u",
            ú: "u",
            û: "u",
            ü: "u",
            Ý: "Y",
            ý: "y",
            ÿ: "y",
            Æ: "Ae",
            æ: "ae",
            Þ: "Th",
            þ: "th",
            ß: "ss",
            Ā: "A",
            Ă: "A",
            Ą: "A",
            ā: "a",
            ă: "a",
            ą: "a",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            Ď: "D",
            Đ: "D",
            ď: "d",
            đ: "d",
            Ē: "E",
            Ĕ: "E",
            Ė: "E",
            Ę: "E",
            Ě: "E",
            ē: "e",
            ĕ: "e",
            ė: "e",
            ę: "e",
            ě: "e",
            Ĝ: "G",
            Ğ: "G",
            Ġ: "G",
            Ģ: "G",
            ĝ: "g",
            ğ: "g",
            ġ: "g",
            ģ: "g",
            Ĥ: "H",
            Ħ: "H",
            ĥ: "h",
            ħ: "h",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            Į: "I",
            İ: "I",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            į: "i",
            ı: "i",
            Ĵ: "J",
            ĵ: "j",
            Ķ: "K",
            ķ: "k",
            ĸ: "k",
            Ĺ: "L",
            Ļ: "L",
            Ľ: "L",
            Ŀ: "L",
            Ł: "L",
            ĺ: "l",
            ļ: "l",
            ľ: "l",
            ŀ: "l",
            ł: "l",
            Ń: "N",
            Ņ: "N",
            Ň: "N",
            Ŋ: "N",
            ń: "n",
            ņ: "n",
            ň: "n",
            ŋ: "n",
            Ō: "O",
            Ŏ: "O",
            Ő: "O",
            ō: "o",
            ŏ: "o",
            ő: "o",
            Ŕ: "R",
            Ŗ: "R",
            Ř: "R",
            ŕ: "r",
            ŗ: "r",
            ř: "r",
            Ś: "S",
            Ŝ: "S",
            Ş: "S",
            Š: "S",
            ś: "s",
            ŝ: "s",
            ş: "s",
            š: "s",
            Ţ: "T",
            Ť: "T",
            Ŧ: "T",
            ţ: "t",
            ť: "t",
            ŧ: "t",
            Ũ: "U",
            Ū: "U",
            Ŭ: "U",
            Ů: "U",
            Ű: "U",
            Ų: "U",
            ũ: "u",
            ū: "u",
            ŭ: "u",
            ů: "u",
            ű: "u",
            ų: "u",
            Ŵ: "W",
            ŵ: "w",
            Ŷ: "Y",
            ŷ: "y",
            Ÿ: "Y",
            Ź: "Z",
            Ż: "Z",
            Ž: "Z",
            ź: "z",
            ż: "z",
            ž: "z",
            Ĳ: "IJ",
            ĳ: "ij",
            Œ: "Oe",
            œ: "oe",
            ŉ: "'n",
            ſ: "ss",
          }),
          function (e) {
            return null == Z ? void 0 : Z[e];
          });
      function X(e) {
        return H.test(e);
      }
      function V(e) {
        return X(e)
          ? (function (e) {
              return e.match(k) || [];
            })(e)
          : (function (e) {
              return e.split("");
            })(e);
      }
      var Y = Object.prototype.toString,
        G = P.Symbol,
        Q = G ? G.prototype : void 0,
        J = Q ? Q.toString : void 0;
      function K(e) {
        if ("string" == typeof e) return e;
        if (
          (function (e) {
            return (
              "symbol" == typeof e ||
              ((function (e) {
                return !!e && "object" == typeof e;
              })(e) &&
                Y.call(e) == t)
            );
          })(e)
        )
          return J ? J.call(e) : "";
        var l = e + "";
        return "0" == l && 1 / e == -1 / 0 ? "-0" : l;
      }
      function q(e, t, l) {
        var r = e.length;
        return (
          (l = void 0 === l ? r : l),
          !t && l >= r
            ? e
            : (function (e, t, l) {
                var r = -1,
                  n = e.length;
                t < 0 && (t = -t > n ? 0 : n + t),
                  (l = l > n ? n : l) < 0 && (l += n),
                  (n = t > l ? 0 : (l - t) >>> 0),
                  (t >>>= 0);
                for (var s = Array(n); ++r < n; ) s[r] = e[r + t];
                return s;
              })(e, t, l)
        );
      }
      function ee(e) {
        return null == e ? "" : K(e);
      }
      var te,
        le =
          ((te = function (e, t, l) {
            return (t = t.toLowerCase()), e + (l ? ne(ee(t).toLowerCase()) : t);
          }),
          function (e) {
            return (function (e, t, l, r) {
              var n = -1,
                s = e ? e.length : 0;
              for (r && s && (l = e[++n]); ++n < s; ) l = t(l, e[n], n, e);
              return l;
            })(
              (function (e, t, r) {
                return (
                  (e = ee(e)),
                  void 0 === (t = r ? void 0 : t)
                    ? (function (e) {
                        return U.test(e);
                      })(e)
                      ? (function (e) {
                          return e.match(D) || [];
                        })(e)
                      : (function (e) {
                          return e.match(l) || [];
                        })(e)
                    : e.match(t) || []
                );
              })(
                (function (e) {
                  return (e = ee(e)) && e.replace(r, F).replace(R, "");
                })(e).replace(M, "")
              ),
              te,
              ""
            );
          });
      var re,
        ne =
          ((re = "toUpperCase"),
          function (e) {
            var t = X((e = ee(e))) ? V(e) : void 0,
              l = t ? t[0] : e.charAt(0),
              r = t ? q(t, 1).join("") : e.slice(1);
            return l[re]() + r;
          });
      e.exports = le;
    },
    79001(e) {
      var t,
        l,
        r = Function.prototype,
        n = Object.prototype,
        s = r.toString,
        a = n.hasOwnProperty,
        i = s.call(Object),
        o = n.toString,
        c =
          ((t = Object.getPrototypeOf),
          (l = Object),
          function (e) {
            return t(l(e));
          });
      e.exports = function (e) {
        if (
          !(function (e) {
            return !!e && "object" == typeof e;
          })(e) ||
          "[object Object]" != o.call(e) ||
          (function (e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString)
              try {
                t = !!(e + "");
              } catch (e) {}
            return t;
          })(e)
        )
          return !1;
        var t = c(e);
        if (null === t) return !0;
        var l = a.call(t, "constructor") && t.constructor;
        return "function" == typeof l && l instanceof l && s.call(l) == i;
      };
    },
    81148(e, t, l) {
      "use strict";
      var r = l(46518),
        n = l(69565),
        s = l(72652),
        a = l(79306),
        i = l(28551),
        o = l(1767),
        c = l(9539),
        u = l(84549)("every", TypeError);
      r(
        { target: "Iterator", proto: !0, real: !0, forced: u },
        {
          every: function (e) {
            i(this);
            try {
              a(e);
            } catch (e) {
              c(this, "throw", e);
            }
            if (u) return n(u, this, e);
            var t = o(this),
              l = 0;
            return !s(
              t,
              function (t, r) {
                if (!e(t, l++)) return r();
              },
              { IS_RECORD: !0, INTERRUPTED: !0 }
            ).stopped;
          },
        }
      );
    },
    51122(e, t, l) {
      "use strict";
      l.d(t, { Q: () => o });
      var r = l(62929),
        n = l(46942),
        s = l.n(n),
        a = l(74848);
      var i = function () {};
      const o = (e) => {
        let {
          children: t,
          className: l = "",
          scrollLock: n = !0,
          url: o = null,
          visible: c,
          onOpen: u = i,
          onClose: d,
          closeModalLabel: m = "",
          title: p = null,
        } = e;
        return (0, a.jsx)(r.a, {
          title: p,
          className: s()("ui-pdp-backdrop-modal", l),
          onOpen: u,
          onClose: d,
          type: "card",
          open: c,
          url: o,
          scrollLock: n,
          closeButtonSrLabel: m,
          "data-testid": "backdrop-modal",
          children: t,
        });
      };
    },
    66257(e, t, l) {
      "use strict";
      l.d(t, { x: () => p });
      var r = l(89379),
        n = l(96540),
        s = l(45664),
        a = l(37808),
        i = l(20551),
        o = l(36402),
        c = l(16030),
        u = l(93603),
        d = l(74848);
      const m = "ui-pdp-generic-summary",
        p = (e) => {
          let {
            className: t = "",
            title: l,
            initialHeight: p = "auto",
            labelText: h,
            labelValues: f = null,
            nameKey: _ = "info",
            children: x,
            track: v = null,
            action: g = null,
            onClose: y = null,
            closeIconColor: b = "white",
          } = e;
          const [N, A] = (0, n.useState)(!1),
            j = (0, r.A)(
              (0, r.A)({}, f),
              {},
              {
                [_]: (0, r.A)(
                  (0, r.A)({}, null == f ? void 0 : f[_]),
                  {},
                  { as: "a", onClick: () => A(!0) }
                ),
              }
            ),
            { btnProps: $ } = j,
            { size: E, hierarchy: O, text: T, label: S } = $ || {},
            I = () => {
              return (e = y) && e(), void A(!1);
              var e;
            };
          return (0, d.jsxs)(d.Fragment, {
            children: [
              $
                ? (0, d.jsx)(a.$n, {
                    size: E,
                    hierarchy: O,
                    onClick: () => A(!0),
                    children: T || S.text,
                  })
                : (0, d.jsx)("div", {
                    className: `${m}__import-fees`,
                    "data-testid": "import-fees",
                    children: (0, d.jsx)(u.G, { text: c.I.jsx(h, j) }),
                  }),
              N &&
                (0, d.jsxs)(s.X, {
                  className: t,
                  "data-testid": "bottom-sheet",
                  open: N,
                  onClose: I,
                  initialHeight: p,
                  title: l,
                  onOpen: () => (0, i.sx)(v),
                  action: g,
                  children: [
                    (0, d.jsx)(a.$n, {
                      "data-testid": "bs-close-button",
                      className: `${m}__bs-close-button`,
                      hierarchy: "transparent",
                      onClick: I,
                      children: (0, d.jsx)(o.In, { id: "close", color: b }),
                    }),
                    x,
                  ],
                }),
            ],
          });
        };
    },
    33551(e, t, l) {
      "use strict";
      l.d(t, { b: () => m });
      var r = l(96540),
        n = l(46942),
        s = l.n(n),
        a = l(20551),
        i = l(74848),
        o = l(16030);
      const c = (e) => {
          let { className: t, percentage: l = 0 } = e;
          return (0, i.jsxs)("div", {
            className: t,
            children: [
              (0, i.jsx)("span", { className: `${t}__background` }),
              (0, i.jsx)("span", {
                className: `${t}__fill-background`,
                style: { width: `${l}%` },
              }),
            ],
          });
        },
        u = (e) => {
          let { className: t, title: l } = e;
          return (0, i.jsx)("p", {
            className: s()(
              t,
              (0, a.Ns)({
                color: l.color,
                size: l.font_size,
                family: l.font_family,
              })
            ),
            children: o.I.jsx(l.text, l.values),
          });
        },
        d = "ui-vpp-rating",
        m = (0, r.forwardRef)((e, t) => {
          let {
            title: l = null,
            levels: r,
            rightAlign: n = !1,
            color: o = "GRAY",
          } = e;
          return (0, i.jsxs)("div", {
            className: d,
            children: [
              l && (0, i.jsx)(u, { className: `${d}__title`, title: l }),
              (0, i.jsx)("ul", {
                ref: t,
                children: r.map((e) => {
                  let { label: t, percentage: l, value: r, value_label: u } = e;
                  return (0, i.jsxs)(
                    "li",
                    {
                      className: `${d}__level`,
                      children: [
                        (0, i.jsx)("div", {
                          className: `${d}__level__column ${d}__level__text-container`,
                          children: (0, i.jsx)("span", {
                            className: s()(
                              `${d}__level__text`,
                              { [`${d}__level__text--right`]: n },
                              { [`${d}__level__text--left`]: !n },
                              (0, a.Ns)({
                                size: t.font_size,
                                family: t.font_family,
                                color: t.color || o,
                              })
                            ),
                            "data-testid": "apparel-size-specs__label",
                            children: t.text,
                          }),
                        }),
                        (0, i.jsx)("div", {
                          "aria-hidden": "true",
                          className: `${d}__level__column ${d}__level__progress-bar-container`,
                          children: (0, i.jsx)(c, {
                            className: `${d}__level__progress-bar`,
                            percentage: l,
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: `${d}__level__column ${d}__level__value-container`,
                          children: (0, i.jsx)("span", {
                            className: (0, a.Ns)({
                              size: t.font_size,
                              family: t.font_family,
                              color: t.color || o,
                              className: `${d}__level__value`,
                            }),
                            children: null != u && u.text ? u.text : r,
                          }),
                        }),
                      ],
                    },
                    `${d}__level-${t.text}`
                  );
                }),
              }),
            ],
          });
        });
    },
  },
]);
//# sourceMappingURL=12970.cd525c87.js.map
