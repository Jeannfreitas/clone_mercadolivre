"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [13844],
  {
    14840(s, l, e) {
      e.r(l), e.d(l, { default: () => i, jsonToProps: () => n.A });
      var a = e(34737),
        n = e(74426);
      const i = a.A;
    },
    34737(s, l, e) {
      e.d(l, { A: () => t });
      var a = e(13310),
        n = e(53471),
        i = e(74848);
      const t = (s) => {
        const {
          containerClassName: l,
          namespace: e,
          label: t,
          items: c,
        } = (0, n.A)(s);
        return (0, i.jsx)("div", {
          className: l,
          children: (0, i.jsx)(a.A, { label: t, items: c, namespace: e }),
        });
      };
    },
    13310(s, l, e) {
      e.d(l, { A: () => a });
      const a = e(43757).A;
    },
    1142(s, l, e) {
      e.d(l, { A: () => a });
      const a = (s) => {
        let { label: l, items: e, namespace: a = null } = s;
        return {
          titleClassName: `${a}__title`,
          listClassName: `${a}__list`,
          itemClassName: `${a}__item`,
          linkClassName: `${a}__link`,
          linkIconClassName: `${a}__link-icon ${a}__link-column`,
          linkTextClassName: `${a}__link-text ${a}__link-column`,
          iconId: "search",
          iconColor: "GRAY",
          label: l,
          items: e,
        };
      };
    },
    43757(s, l, e) {
      e.d(l, { A: () => t });
      e(18111), e(61701);
      var a = e(50538),
        n = e(1142),
        i = e(74848);
      const t = (s) => {
        const {
          titleClassName: l,
          listClassName: e,
          itemClassName: t,
          linkClassName: c,
          linkIconClassName: m,
          linkTextClassName: o,
          iconId: r,
          iconColor: _,
          label: N,
          items: d,
        } = (0, n.A)(s);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("h2", { className: l, children: N }),
            (0, i.jsx)("ul", {
              className: e,
              children: d?.map((s) =>
                (0, i.jsx)(
                  "li",
                  {
                    className: t,
                    children: (0, i.jsxs)("a", {
                      className: c,
                      href: s?.href,
                      children: [
                        (0, i.jsx)("span", {
                          className: m,
                          children: (0, a.default)({ id: r, color: _ }),
                        }),
                        (0, i.jsx)("p", { className: o, children: s?.text }),
                      ],
                    }),
                  },
                  s?.id
                )
              ),
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=components-related-searches-related-searches-mobile.8589e5d6.js.map
