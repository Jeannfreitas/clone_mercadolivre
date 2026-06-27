"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [62598],
  {
    23637(e, t, o) {
      o.d(t, { E: () => f, H: () => p });
      var n = o(91702),
        r = o(89379),
        c = o(64467),
        i = o(80045),
        a = o(96540),
        s = o(46942),
        l = o.n(s),
        d = o(17939),
        u = o(87774),
        m = o(74848),
        v = function (e) {
          var t,
            o = e.elementRef,
            n = e.preventOnScroll,
            r = void 0 !== n && n,
            c =
              "undefined" != typeof window &&
              (null === (t = window.MobileWebKit) || void 0 === t
                ? void 0
                : t.settings),
            i = (0, a.useRef)({ x: 0, y: 0 }),
            s = (0, a.useRef)(!1);
          (0, a.useEffect)(
            function () {
              if (c && o.current && r) {
                var e = function (e) {
                    if (1 === e.touches.length) {
                      var t = e.touches[0];
                      i.current = { x: t.clientX, y: t.clientY };
                    }
                  },
                  t = function (e) {
                    if (1 === e.touches.length) {
                      var t = e.touches[0],
                        o = t.clientX - i.current.x,
                        n = t.clientY - i.current.y,
                        r = Math.abs(o) > Math.abs(n) && Math.abs(o) > 10;
                      r !== s.current &&
                        ((s.current = r),
                        window.MobileWebKit.settings.setRefreshMode(
                          r ? "none" : "pull"
                        ));
                    }
                  },
                  n = function () {
                    s.current &&
                      ((s.current = !1),
                      window.MobileWebKit.settings.setRefreshMode("pull"));
                  },
                  a = o.current;
                return (
                  a.addEventListener("touchstart", e),
                  a.addEventListener("touchmove", t),
                  a.addEventListener("touchend", n),
                  a.addEventListener("touchcancel", n),
                  function () {
                    a &&
                      (a.removeEventListener("touchstart", e),
                      a.removeEventListener("touchmove", t),
                      a.removeEventListener("touchend", n),
                      a.removeEventListener("touchcancel", n)),
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
            [c, o, r]
          );
        },
        h = [
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
        b = "".concat(u.OO, "-carousel-free"),
        f = function (e) {
          var t = e.compact,
            o = void 0 !== t && t,
            s = e.className,
            f = void 0 === s ? "" : s,
            p = e.classnameFromResponse,
            k = void 0 === p ? "" : p,
            x = e.classNamesMap,
            g = void 0 === x ? {} : x,
            I = e.classNamesIndexMap,
            C = void 0 === I ? {} : I,
            R = e.Card,
            y = e.cardProps,
            L = e.IconFactory,
            M = e.paddingHorizontal,
            O = void 0 === M ? 0 : M,
            E = e.buttonSize,
            T = void 0 === E ? "large" : E,
            _ = e.hideRebates,
            A = void 0 !== _ && _,
            F = e.onItemClick,
            N = e.onBookmarkClick,
            S = e.onTitleTagIconClick,
            j = e.bookmarkedItems,
            w = void 0 === j ? [] : j,
            z = e.bookmarkText,
            W = void 0 === z ? "" : z,
            D = e.priceSizeOverride,
            K = e.isPolycard,
            P = void 0 !== K && K,
            B = e.preventPullToRefreshOnScroll,
            H = void 0 !== B && B,
            U = (0, i.A)(e, h),
            X = (0, a.useRef)();
          v({ elementRef: X, preventOnScroll: H });
          var Y = U.items,
            Q = U.title,
            V = U.titleWithIcons,
            $ = U.titleTag,
            q = U.subtitle,
            G = U.viewMoreAction,
            J = U.footer,
            Z = U.href,
            ee = U.cardSeeMore,
            te = void 0 === ee ? null : ee,
            oe = D || { price: 14, discount: 10, installments: 10 };
          return (
            Y &&
            Y.length > 0 &&
            (0, m.jsxs)("div", {
              className: l()(
                b,
                f,
                k,
                (0, c.A)({}, "".concat(b, "--compact"), o)
              ),
              ref: X,
              style: { "--carousel-free-padding": "".concat(O, "px") },
              children: [
                Q &&
                  (0, m.jsxs)("div", {
                    className: "".concat(b, "__header"),
                    children: [
                      (0, m.jsx)(n.hz, {
                        title: Q,
                        titleWithIcons: V,
                        href: Z,
                        IconFactory: L,
                      }),
                      q &&
                        (0, m.jsx)(n.VR, {
                          text: q.text,
                          url: q.url,
                          IconFactory: L,
                          advertisingLabel: q.advertising_label,
                        }),
                      $ &&
                        (0, m.jsx)(n.bL, {
                          text: $.text,
                          values: $.values,
                          styles: $.styles,
                          IconFactory: L,
                          onTitleTagIconClick: S,
                        }),
                    ],
                  }),
                (0, m.jsxs)(d.R, {
                  srLabel: Q,
                  spacing: o ? 0 : 12,
                  children: [
                    Y.map(function (e, t) {
                      var n = g[e.id],
                        c = C[t],
                        i = e.CustomCard || R,
                        a = P ? e.metadata.id : e.id;
                      return (0,
                      m.jsx)(d.C, { children: (0, m.jsx)(i, (0, r.A)((0, r.A)((0, r.A)({}, y), e), {}, { classNameFromMap: n, classNameFromIndex: c, IconFactory: L, onItemClick: F, onBookmarkClick: N, bookmarkedItems: w, bookmarkText: W, hideRebates: A, priceSizeOverride: o ? oe : D || void 0 })) }, "recommendations-".concat(a));
                    }),
                    (null == te ? void 0 : te.actionText) &&
                      (0, m.jsx)(
                        d.C,
                        { children: (0, m.jsx)(n.v$, (0, r.A)({}, te)) },
                        "recommendations-see-more"
                      ),
                  ],
                }),
                G &&
                  (0, m.jsx)(n.sz, {
                    id: G.id,
                    target: G.target,
                    label: G.label,
                    buttonSize: T,
                    IconFactory: L,
                  }),
                J &&
                  (0, m.jsx)(n.gb, {
                    footerText: J.text,
                    href: J.link,
                    IconFactory: L,
                    className: G
                      ? "".concat(u.OO, "-footer--with-side-button")
                      : "",
                  }),
              ],
            })
          );
        },
        p = (0, n.QA)(f);
    },
    87774(e, t, o) {
      o.d(t, { OO: () => n, kt: () => r, th: () => c });
      var n = "ui-recommendations",
        r = "".concat(n, "-comparator"),
        c = "".concat(n, "-combos");
      "".concat(n, "-coupon");
    },
    60011(e, t, o) {
      o.r(t),
        o.d(t, { RecommendationsCarouselFreeWithoutContainer: () => n.E });
      var n = o(23637);
    },
  },
]);
//# sourceMappingURL=components-recommendations-carousel-free.bb3afb8e.js.map
