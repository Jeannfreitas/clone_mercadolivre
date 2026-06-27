"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [39540],
  {
    87774(e, t, o) {
      o.d(t, { OO: () => s, kt: () => i, th: () => n });
      var s = "ui-recommendations",
        i = "".concat(s, "-comparator"),
        n = "".concat(s, "-combos");
      "".concat(s, "-coupon");
    },
    62764(e, t, o) {
      o.d(t, {
        Lr: () => _,
        WE: () => v,
        Xk: () => A,
        mp: () => y,
        vm: () => C,
        xB: () => g,
      });
      var s = o(91702),
        i = o(89379),
        n = o(80296),
        r = o(80045),
        a = o(96540),
        c = o(46942),
        l = o.n(c),
        d = o(87774),
        m = o(74848),
        u = [
          "ListComponent",
          "listType",
          "className",
          "classnameFromResponse",
          "paddingHorizontal",
          "onTitleTagIconClick",
        ],
        v = function (e) {
          var t,
            o,
            c = e.ListComponent,
            v = e.listType,
            p = void 0 === v ? "" : v,
            h = e.className,
            y = void 0 === h ? "" : h,
            x = e.classnameFromResponse,
            g = void 0 === x ? "" : x,
            k = e.paddingHorizontal,
            _ = void 0 === k ? 0 : k,
            b = e.onTitleTagIconClick,
            C = (0, r.A)(e, u),
            A = "".concat(d.OO, "-list"),
            I = C.items,
            T = C.title,
            f = C.titleWithIcons,
            j = C.titleTag,
            N = C.subtitle,
            O = C.footer,
            F = C.href,
            L = C.IconFactory,
            R = (0, a.useRef)(),
            S = (0, a.useState)(!1),
            z = (0, n.A)(S, 2),
            H = z[0],
            B = z[1];
          return (
            (0, a.useEffect)(
              function () {
                if (R.current) {
                  var e = R.current.querySelector(
                    ".".concat(d.OO, "-list__items-wrapper--horizontal")
                  );
                  if (e) {
                    var t =
                        parseFloat(window.getComputedStyle(e).paddingBottom) ||
                        0,
                      o = e.getBoundingClientRect().height - t,
                      s = o > 0 ? "".concat(o, "px") : "auto";
                    R.current.style.setProperty("--max-card-height", s);
                  }
                }
                B(!0);
              },
              [R]
            ),
            I &&
              I.length > 0 &&
              (0, m.jsxs)("div", {
                className: l()(
                  A,
                  "".concat(A, "__container--").concat(p || "generic"),
                  y,
                  g
                ),
                ref: R,
                style: { "--list-padding": "".concat(_, "px") },
                children: [
                  T &&
                    (0, m.jsx)("div", {
                      className: "".concat(A, "__header"),
                      children: (0, m.jsxs)("div", {
                        className: "".concat(A, "__header-titles"),
                        children: [
                          (0, m.jsx)(s.hz, {
                            title: T,
                            titleWithIcons: f,
                            href: F,
                            IconFactory: L,
                          }),
                          N &&
                            (0, m.jsx)(s.VR, {
                              text: N.text,
                              url: N.url,
                              IconFactory: L,
                              advertisingLabel: N.advertising_label,
                            }),
                          j &&
                            "actions" !==
                              (null === (t = j.styles) || void 0 === t
                                ? void 0
                                : t.variant) &&
                            (0, m.jsx)(s.bL, {
                              text: j.text,
                              values: j.values,
                              styles: j.styles,
                              IconFactory: L,
                              onTitleTagIconClick: b,
                            }),
                        ],
                      }),
                    }),
                  c &&
                    (0, m.jsx)(
                      c,
                      (0, i.A)({ listType: p, disableHover: !H }, C)
                    ),
                  j &&
                    "actions" ===
                      (null === (o = j.styles) || void 0 === o
                        ? void 0
                        : o.variant) &&
                    (0, m.jsx)("div", {
                      className: "".concat(A, "__title-tag-bottom-right"),
                      children: (0, m.jsx)(s.bL, {
                        text: j.text,
                        values: j.values,
                        styles: j.styles,
                        IconFactory: L,
                        onTitleTagIconClick: b,
                      }),
                    }),
                  O &&
                    (0, m.jsx)(s.gb, {
                      footerText: O.text,
                      href: O.link,
                      IconFactory: L,
                      withChevron: !0,
                    }),
                ],
              })
          );
        },
        p = function (e) {
          var t = e.Card,
            o = e.IconFactory,
            s = e.cardProps,
            n = e.items,
            r = void 0 === n ? [] : n,
            c = e.title,
            l = void 0 === c ? "" : c,
            u = e.listType,
            v = void 0 === u ? "" : u,
            p = e.priceSizeOverride,
            h = e.hideRebates,
            y = void 0 !== h && h,
            x = e.onItemClick,
            g = e.onBookmarkClick,
            k = e.bookmarkedItems,
            _ = void 0 === k ? [] : k,
            b = e.bookmarkText,
            C = void 0 === b ? "" : b,
            A = e.classNamesMap,
            I = void 0 === A ? {} : A,
            T = e.classNamesIndexMap,
            f = void 0 === T ? {} : T,
            j = e.disableHover,
            N = void 0 !== j && j,
            O = "".concat(d.OO, "-list__items-wrapper--").concat(v);
          return (0, m.jsx)("ul", {
            className: O,
            "aria-label": l,
            children:
              null == r
                ? void 0
                : r.map(function (e, n) {
                    var r,
                      c =
                        null !== (r = e.id) && void 0 !== r
                          ? r
                          : null == e
                          ? void 0
                          : e.metadata.id,
                      l = I[e.id],
                      d = f[n],
                      m = e.CustomCard || t;
                    return (0,
                    a.createElement)(m, (0, i.A)((0, i.A)((0, i.A)({}, s), e), {}, { key: c, classNameFromMap: l, classNameFromIndex: d, IconFactory: o, onItemClick: x, onBookmarkClick: g, bookmarkedItems: _, bookmarkText: C, priceSizeOverride: p, hideRebates: y, isListItem: !0, disableHover: N, cardNumber: n }));
                  }),
          });
        },
        h = { price: 24, discount: 12, installments: 14, original: 12 },
        y = function (e) {
          return (0, m.jsx)(p, (0, i.A)({ priceSizeOverride: h }, e));
        },
        x = { price: 16, discount: 12, installments: 12, original: 12 },
        g = function (e) {
          return (0, m.jsx)(p, (0, i.A)({ priceSizeOverride: x }, e));
        },
        k = /^(36883|49634)$/.test(o.j)
          ? { price: 20, discount: 14, installments: 14, original: 14 }
          : null,
        _ = /^(36883|49634)$/.test(o.j)
          ? function (e) {
              return (0, m.jsx)(p, (0, i.A)({ priceSizeOverride: k }, e));
            }
          : null,
        b = /^(36883|49634)$/.test(o.j)
          ? { price: 20, discount: 12, installments: 12, original: 12 }
          : null,
        C = /^(36883|49634)$/.test(o.j)
          ? function (e) {
              return (0, m.jsx)(p, (0, i.A)({ priceSizeOverride: b }, e));
            }
          : null,
        A = (0, s.QA)(v);
    },
    65595(e, t, o) {
      o.r(t), o.d(t, { default: () => u });
      var s = o(96540),
        i = o(62764),
        n = o(26376),
        r = o(50538),
        a = o(9428),
        c = o(43984),
        l = o(74848);
      const d = (0, n.R)(
        {
          resolved: {},
          chunkName: () =>
            "recommendations-src-components-recommendations-card",
          isReady(e) {
            const t = this.resolve(e);
            return !0 === this.resolved[t] && !!o.m[t];
          },
          importAsync: () =>
            Promise.all([o.e(23150), o.e(14081)]).then(o.bind(o, 75681)),
          requireAsync(e) {
            const t = this.resolve(e);
            return (
              (this.resolved[t] = !1),
              this.importAsync(e).then((e) => ((this.resolved[t] = !0), e))
            );
          },
          requireSync(e) {
            const t = this.resolve(e);
            return o(t);
          },
          resolve: () => 75681,
        },
        { resolveComponent: (e) => e.RecommendationsCardHorizontalTitleFirst }
      );
      d.preload();
      const m = (0, n.R)(
        {
          resolved: {},
          chunkName: () =>
            "recommendations-src-components-recommendations-list",
          isReady(e) {
            const t = this.resolve(e);
            return !0 === this.resolved[t] && !!o.m[t];
          },
          importAsync: () => o.e(71199).then(o.bind(o, 69335)),
          requireAsync(e) {
            const t = this.resolve(e);
            return (
              (this.resolved[t] = !1),
              this.importAsync(e).then((e) => ((this.resolved[t] = !0), e))
            );
          },
          requireSync(e) {
            const t = this.resolve(e);
            return o(t);
          },
          resolve: () => 69335,
        },
        { resolveComponent: (e) => e.RecommendationsListDouble }
      );
      m.preload();
      const u = (e) => {
        const { recommendationsContext: t = null, globalContext: o = null } = e,
          { deviceType: n } = (0, s.useContext)(c.Ay);
        return (0, l.jsx)("div", {
          className: "ui-seller-data-recos__container",
          children: (0, l.jsx)(i.Xk, {
            ListComponent: m,
            listType: "double",
            Card: d,
            deviceType: n,
            IconFactory: r.default,
            className: "list-seller",
            ...(0, a.A)(e, t, o),
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=components-recommendations.0b365f07.js.map
