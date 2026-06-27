"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [46949],
  {
    87774(e, t, o) {
      o.d(t, { OO: () => s, kt: () => r, th: () => i });
      var s = "ui-recommendations",
        r = "".concat(s, "-comparator"),
        i = "".concat(s, "-combos");
      "".concat(s, "-coupon");
    },
    62764(e, t, o) {
      o.d(t, { WE: () => v, Xk: () => b, mp: () => y, xB: () => k });
      var s = o(91702),
        r = o(89379),
        i = o(80296),
        n = o(80045),
        a = o(96540),
        c = o(46942),
        l = o.n(c),
        d = o(87774),
        m = o(74848),
        p = [
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
            u = void 0 === v ? "" : v,
            h = e.className,
            y = void 0 === h ? "" : h,
            x = e.classnameFromResponse,
            k = void 0 === x ? "" : x,
            b = e.paddingHorizontal,
            g = void 0 === b ? 0 : b,
            _ = e.onTitleTagIconClick,
            C = (0, n.A)(e, p),
            I = "".concat(d.OO, "-list"),
            T = C.items,
            A = C.title,
            f = C.titleWithIcons,
            F = C.titleTag,
            N = C.subtitle,
            O = C.footer,
            P = C.href,
            S = C.IconFactory,
            j = (0, a.useRef)(),
            L = (0, a.useState)(!1),
            R = (0, i.A)(L, 2),
            z = R[0],
            H = R[1];
          return (
            (0, a.useEffect)(
              function () {
                if (j.current) {
                  var e = j.current.querySelector(
                    ".".concat(d.OO, "-list__items-wrapper--horizontal")
                  );
                  if (e) {
                    var t =
                        parseFloat(window.getComputedStyle(e).paddingBottom) ||
                        0,
                      o = e.getBoundingClientRect().height - t,
                      s = o > 0 ? "".concat(o, "px") : "auto";
                    j.current.style.setProperty("--max-card-height", s);
                  }
                }
                H(!0);
              },
              [j]
            ),
            T &&
              T.length > 0 &&
              (0, m.jsxs)("div", {
                className: l()(
                  I,
                  "".concat(I, "__container--").concat(u || "generic"),
                  y,
                  k
                ),
                ref: j,
                style: { "--list-padding": "".concat(g, "px") },
                children: [
                  A &&
                    (0, m.jsx)("div", {
                      className: "".concat(I, "__header"),
                      children: (0, m.jsxs)("div", {
                        className: "".concat(I, "__header-titles"),
                        children: [
                          (0, m.jsx)(s.hz, {
                            title: A,
                            titleWithIcons: f,
                            href: P,
                            IconFactory: S,
                          }),
                          N &&
                            (0, m.jsx)(s.VR, {
                              text: N.text,
                              url: N.url,
                              IconFactory: S,
                              advertisingLabel: N.advertising_label,
                            }),
                          F &&
                            "actions" !==
                              (null === (t = F.styles) || void 0 === t
                                ? void 0
                                : t.variant) &&
                            (0, m.jsx)(s.bL, {
                              text: F.text,
                              values: F.values,
                              styles: F.styles,
                              IconFactory: S,
                              onTitleTagIconClick: _,
                            }),
                        ],
                      }),
                    }),
                  c &&
                    (0, m.jsx)(
                      c,
                      (0, r.A)({ listType: u, disableHover: !z }, C)
                    ),
                  F &&
                    "actions" ===
                      (null === (o = F.styles) || void 0 === o
                        ? void 0
                        : o.variant) &&
                    (0, m.jsx)("div", {
                      className: "".concat(I, "__title-tag-bottom-right"),
                      children: (0, m.jsx)(s.bL, {
                        text: F.text,
                        values: F.values,
                        styles: F.styles,
                        IconFactory: S,
                        onTitleTagIconClick: _,
                      }),
                    }),
                  O &&
                    (0, m.jsx)(s.gb, {
                      footerText: O.text,
                      href: O.link,
                      IconFactory: S,
                      withChevron: !0,
                    }),
                ],
              })
          );
        },
        u = function (e) {
          var t = e.Card,
            o = e.IconFactory,
            s = e.cardProps,
            i = e.items,
            n = void 0 === i ? [] : i,
            c = e.title,
            l = void 0 === c ? "" : c,
            p = e.listType,
            v = void 0 === p ? "" : p,
            u = e.priceSizeOverride,
            h = e.hideRebates,
            y = void 0 !== h && h,
            x = e.onItemClick,
            k = e.onBookmarkClick,
            b = e.bookmarkedItems,
            g = void 0 === b ? [] : b,
            _ = e.bookmarkText,
            C = void 0 === _ ? "" : _,
            I = e.classNamesMap,
            T = void 0 === I ? {} : I,
            A = e.classNamesIndexMap,
            f = void 0 === A ? {} : A,
            F = e.disableHover,
            N = void 0 !== F && F,
            O = "".concat(d.OO, "-list__items-wrapper--").concat(v);
          return (0, m.jsx)("ul", {
            className: O,
            "aria-label": l,
            children:
              null == n
                ? void 0
                : n.map(function (e, i) {
                    var n,
                      c =
                        null !== (n = e.id) && void 0 !== n
                          ? n
                          : null == e
                          ? void 0
                          : e.metadata.id,
                      l = T[e.id],
                      d = f[i],
                      m = e.CustomCard || t;
                    return (0,
                    a.createElement)(m, (0, r.A)((0, r.A)((0, r.A)({}, s), e), {}, { key: c, classNameFromMap: l, classNameFromIndex: d, IconFactory: o, onItemClick: x, onBookmarkClick: k, bookmarkedItems: g, bookmarkText: C, priceSizeOverride: u, hideRebates: y, isListItem: !0, disableHover: N, cardNumber: i }));
                  }),
          });
        },
        h = { price: 24, discount: 12, installments: 14, original: 12 },
        y = function (e) {
          return (0, m.jsx)(u, (0, r.A)({ priceSizeOverride: h }, e));
        },
        x = { price: 16, discount: 12, installments: 12, original: 12 },
        k = function (e) {
          return (0, m.jsx)(u, (0, r.A)({ priceSizeOverride: x }, e));
        },
        b = (0, s.QA)(v);
    },
    12688(e, t, o) {
      o.r(t), o.d(t, { default: () => d });
      var s = o(26376),
        r = o(62764),
        i = o(50538);
      const n = (e) => {
        const {
          isPolycard: t,
          thousandSeparator: o,
          decimalSeparator: s,
          ...r
        } = e;
        return {
          listType: "double",
          contextProps: {
            type: "list",
            thousandSeparator: o,
            decimalSeparator: s,
          },
          cardProps: { polyClassName: "recos-polycard poly-card--mobile" },
          isPolycard: t,
          iconFactory: i.default,
          processedProps: r,
        };
      };
      var a = o(74848);
      const c = (0, s.R)(
        {
          resolved: {},
          chunkName: () => "components-recommendations-card",
          isReady(e) {
            const t = this.resolve(e);
            return !0 === this.resolved[t] && !!o.m[t];
          },
          importAsync: () =>
            Promise.all([o.e(23150), o.e(47343)]).then(o.bind(o, 75681)),
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
      c.preload();
      const l = (0, s.R)(
        {
          resolved: {},
          chunkName: () => "components-recommendations-list",
          isReady(e) {
            const t = this.resolve(e);
            return !0 === this.resolved[t] && !!o.m[t];
          },
          importAsync: () => o.e(22193).then(o.bind(o, 69335)),
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
      l.preload();
      const d = (e) => {
        const {
          listType: t,
          contextProps: o,
          cardProps: s,
          isPolycard: i,
          iconFactory: d,
          processedProps: m,
        } = n(e);
        return (0, a.jsx)(r.Xk, {
          ListComponent: l,
          listType: t,
          Card: c,
          IconFactory: d,
          contextProps: o,
          cardProps: s,
          isPolycard: i,
          ...m,
        });
      };
    },
  },
]);
//# sourceMappingURL=components-recommendations-list-double-common.5d6d1137.js.map
