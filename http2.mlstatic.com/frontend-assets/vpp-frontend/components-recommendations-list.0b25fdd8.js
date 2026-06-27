"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [22193, 71199],
  {
    87774(e, t, i) {
      i.d(t, { OO: () => o, kt: () => a, th: () => s });
      var o = "ui-recommendations",
        a = "".concat(o, "-comparator"),
        s = "".concat(o, "-combos");
      "".concat(o, "-coupon");
    },
    62764(e, t, i) {
      i.d(t, { WE: () => u, Xk: () => k, mp: () => h, xB: () => _ });
      var o = i(91702),
        a = i(89379),
        s = i(80296),
        n = i(80045),
        c = i(96540),
        r = i(46942),
        l = i.n(r),
        d = i(87774),
        m = i(74848),
        v = [
          "ListComponent",
          "listType",
          "className",
          "classnameFromResponse",
          "paddingHorizontal",
          "onTitleTagIconClick",
        ],
        u = function (e) {
          var t,
            i,
            r = e.ListComponent,
            u = e.listType,
            p = void 0 === u ? "" : u,
            x = e.className,
            h = void 0 === x ? "" : x,
            g = e.classnameFromResponse,
            _ = void 0 === g ? "" : g,
            k = e.paddingHorizontal,
            y = void 0 === k ? 0 : k,
            b = e.onTitleTagIconClick,
            I = (0, n.A)(e, v),
            C = "".concat(d.OO, "-list"),
            T = I.items,
            f = I.title,
            O = I.titleWithIcons,
            A = I.titleTag,
            L = I.subtitle,
            N = I.footer,
            j = I.href,
            F = I.IconFactory,
            R = (0, c.useRef)(),
            S = (0, c.useState)(!1),
            z = (0, s.A)(S, 2),
            B = z[0],
            E = z[1];
          return (
            (0, c.useEffect)(
              function () {
                if (R.current) {
                  var e = R.current.querySelector(
                    ".".concat(d.OO, "-list__items-wrapper--horizontal")
                  );
                  if (e) {
                    var t =
                        parseFloat(window.getComputedStyle(e).paddingBottom) ||
                        0,
                      i = e.getBoundingClientRect().height - t,
                      o = i > 0 ? "".concat(i, "px") : "auto";
                    R.current.style.setProperty("--max-card-height", o);
                  }
                }
                E(!0);
              },
              [R]
            ),
            T &&
              T.length > 0 &&
              (0, m.jsxs)("div", {
                className: l()(
                  C,
                  "".concat(C, "__container--").concat(p || "generic"),
                  h,
                  _
                ),
                ref: R,
                style: { "--list-padding": "".concat(y, "px") },
                children: [
                  f &&
                    (0, m.jsx)("div", {
                      className: "".concat(C, "__header"),
                      children: (0, m.jsxs)("div", {
                        className: "".concat(C, "__header-titles"),
                        children: [
                          (0, m.jsx)(o.hz, {
                            title: f,
                            titleWithIcons: O,
                            href: j,
                            IconFactory: F,
                          }),
                          L &&
                            (0, m.jsx)(o.VR, {
                              text: L.text,
                              url: L.url,
                              IconFactory: F,
                              advertisingLabel: L.advertising_label,
                            }),
                          A &&
                            "actions" !==
                              (null === (t = A.styles) || void 0 === t
                                ? void 0
                                : t.variant) &&
                            (0, m.jsx)(o.bL, {
                              text: A.text,
                              values: A.values,
                              styles: A.styles,
                              IconFactory: F,
                              onTitleTagIconClick: b,
                            }),
                        ],
                      }),
                    }),
                  r &&
                    (0, m.jsx)(
                      r,
                      (0, a.A)({ listType: p, disableHover: !B }, I)
                    ),
                  A &&
                    "actions" ===
                      (null === (i = A.styles) || void 0 === i
                        ? void 0
                        : i.variant) &&
                    (0, m.jsx)("div", {
                      className: "".concat(C, "__title-tag-bottom-right"),
                      children: (0, m.jsx)(o.bL, {
                        text: A.text,
                        values: A.values,
                        styles: A.styles,
                        IconFactory: F,
                        onTitleTagIconClick: b,
                      }),
                    }),
                  N &&
                    (0, m.jsx)(o.gb, {
                      footerText: N.text,
                      href: N.link,
                      IconFactory: F,
                      withChevron: !0,
                    }),
                ],
              })
          );
        },
        p = function (e) {
          var t = e.Card,
            i = e.IconFactory,
            o = e.cardProps,
            s = e.items,
            n = void 0 === s ? [] : s,
            r = e.title,
            l = void 0 === r ? "" : r,
            v = e.listType,
            u = void 0 === v ? "" : v,
            p = e.priceSizeOverride,
            x = e.hideRebates,
            h = void 0 !== x && x,
            g = e.onItemClick,
            _ = e.onBookmarkClick,
            k = e.bookmarkedItems,
            y = void 0 === k ? [] : k,
            b = e.bookmarkText,
            I = void 0 === b ? "" : b,
            C = e.classNamesMap,
            T = void 0 === C ? {} : C,
            f = e.classNamesIndexMap,
            O = void 0 === f ? {} : f,
            A = e.disableHover,
            L = void 0 !== A && A,
            N = "".concat(d.OO, "-list__items-wrapper--").concat(u);
          return (0, m.jsx)("ul", {
            className: N,
            "aria-label": l,
            children:
              null == n
                ? void 0
                : n.map(function (e, s) {
                    var n,
                      r =
                        null !== (n = e.id) && void 0 !== n
                          ? n
                          : null == e
                          ? void 0
                          : e.metadata.id,
                      l = T[e.id],
                      d = O[s],
                      m = e.CustomCard || t;
                    return (0,
                    c.createElement)(m, (0, a.A)((0, a.A)((0, a.A)({}, o), e), {}, { key: r, classNameFromMap: l, classNameFromIndex: d, IconFactory: i, onItemClick: g, onBookmarkClick: _, bookmarkedItems: y, bookmarkText: I, priceSizeOverride: p, hideRebates: h, isListItem: !0, disableHover: L, cardNumber: s }));
                  }),
          });
        },
        x = { price: 24, discount: 12, installments: 14, original: 12 },
        h = function (e) {
          return (0, m.jsx)(p, (0, a.A)({ priceSizeOverride: x }, e));
        },
        g = { price: 16, discount: 12, installments: 12, original: 12 },
        _ = function (e) {
          return (0, m.jsx)(p, (0, a.A)({ priceSizeOverride: g }, e));
        },
        k = (0, o.QA)(u);
    },
    69335(e, t, i) {
      i.r(t),
        i.d(t, {
          RecommendationsListDouble: () => o.mp,
          RecommendationsListGrid: () => o.xB,
          RecommendationsListWithoutContainer: () => o.WE,
        });
      var o = i(62764);
    },
  },
]);
//# sourceMappingURL=components-recommendations-list.0b25fdd8.js.map
