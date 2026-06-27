"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [54452],
  {
    26147(e, t, r) {
      r.r(t), r.d(t, { default: () => m });
      r(18111), r(61701);
      var s = r(85277),
        n = r(96540),
        c = r(81594);
      const l = "ProfileHeader",
        i = {};
      (i[l] = (0, s.eo)(s.bk)), (i.BottomSheetIframe = (0, s.eo)(s.dW));
      const a = i;
      var o,
        d = r(69025),
        h = r(74848);
      const _ = (e) => {
          let { component: t, properties: r, siteId: s } = e;
          const i = a[t],
            { API_BASE_PATH: _ } = d.A;
          if (i) {
            const e = t === l,
              a = e && "landing_cbt" === r?.theme,
              { is_repurchase: d = !1, ...p } = r;
            let u = e ? { ...r, baseURL: _ } : { ...p, isRepurchase: d };
            u = { ...u, siteId: s };
            const A = t.children?.length > 0 ? [i, u, t.children] : [i, u];
            return e
              ? (0, h.jsxs)(h.Fragment, {
                  children: [
                    a &&
                      (o ||
                        (o = (0, h.jsx)(c.O, {
                          href: "fonts-cbt.css",
                          preload: !0,
                        }))),
                    ((m = (0, n.createElement)(...A)),
                    (0, h.jsx)("div", {
                      className: "wrapper-sticky",
                      children: m,
                    })),
                  ],
                })
              : (0, n.createElement)(...A);
          }
          var m;
          return null;
        },
        m = (e) => {
          let { children: t, siteId: r } = e;
          const c = t?.map((e) => {
            return (
              !(t = e).hidden &&
              a[t.component] &&
              ((e) => (0, n.createElement)(_, { ...e, key: e.id, siteId: r }))(
                e
              )
            );
            var t;
          });
          return (0, h.jsx)(s.C8, { children: c || null });
        };
    },
  },
]);
//# sourceMappingURL=components-eshops.ec5ab1fd.js.map
