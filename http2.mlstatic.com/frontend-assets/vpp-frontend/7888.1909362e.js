"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [7888],
  {
    7888(n, e, r) {
      r.d(e, { getWrappedChildren: () => d });
      var s = r(74848),
        i = r(35657);
      const t = (n) => {
        let { children: e } = n;
        return e;
      };
      async function l() {
        return t;
      }
      const a = (n) => {
        let { children: e } = n;
        return (0, s.jsxs)(
          t,
          {
            children: [
              (0, s.jsx)(t, {}, "Head"),
              (0, s.jsxs)(
                t,
                {
                  children: [
                    (0, s.jsx)(t, {}, "StartSlot"),
                    (0, s.jsx)(
                      t,
                      { children: (0, s.jsx)(t, { children: e }, "Main") },
                      "MainSlot"
                    ),
                    (0, s.jsx)(t, {}, "EndSlot"),
                  ],
                },
                "Body"
              ),
            ],
          },
          "html"
        );
      };
      async function c() {
        const { NavigationHydrateWrapper: n } = await Promise.all([
          r.e(98871),
          r.e(49448),
        ]).then(r.t.bind(r, 46795, 23));
        return n;
      }
      async function d(n, e) {
        const r = (0, i.C$)(),
          d = r
            ? (0, s.jsx)("div", {
                id: r.id,
                className: r.className,
                children: n,
              })
            : n,
          [o, h] = await Promise.all([l(), e ? c() : t]);
        return (0, s.jsx)(o, {
          children: (0, s.jsx)(a, {
            children: (0, s.jsx)(h, {
              children: (0, s.jsx)(t, { children: d }, "root-app"),
            }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=7888.1909362e.js.map
