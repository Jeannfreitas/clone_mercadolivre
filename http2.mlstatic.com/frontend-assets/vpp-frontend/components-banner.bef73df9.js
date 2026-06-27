"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [44710],
  {
    65437(s, a, e) {
      e.r(a), e.d(a, { default: () => t });
      var l = e(12589),
        r = e(78643),
        c = e(74848);
      const o = "ui-seller-data-banner",
        t = (s) => {
          let { banner: a, logo: e } = s;
          const t = (0, c.jsx)(
            l.A,
            {
              alt: "",
              src: a?.url?.src,
              className: `${o}__image`,
              loading: "lazy",
              componentName: o,
            },
            a?.url?.src
          );
          return (0, c.jsxs)("div", {
            className: `${o}__container`,
            children: [
              (0, c.jsx)("div", {
                className: `${o}__container-image`,
                children: a.action
                  ? (0, c.jsx)("a", { href: a.action.target, children: t })
                  : t,
              }),
              e &&
                (0, c.jsx)("div", {
                  className: `${o}__logo-container`,
                  children: (0, c.jsx)(r.A, { logo: e }),
                }),
            ],
          });
        };
    },
    78643(s, a, e) {
      e.d(a, { A: () => t });
      var l = e(76204),
        r = e(12589),
        c = e(74848);
      const o = "ui-seller-data",
        t = (s) => {
          let { logo: a } = s;
          const { width: e, url: t, action: n } = a || {};
          return n
            ? (0, c.jsx)("a", {
                href: n.target,
                children: (0, c.jsx)(l.V, {
                  className: `${o}__logo-image`,
                  size: e.toString(),
                  srLabel: n.accessibility_text,
                  children: (0, c.jsx)(
                    r.A,
                    { alt: "", src: t?.src, componentName: `${o}-logo-link` },
                    t?.src
                  ),
                }),
              })
            : (0, c.jsx)(l.V, {
                className: `${o}__logo-image`,
                size: e.toString(),
                children: (0, c.jsx)(
                  r.A,
                  { alt: "", src: t?.src, componentName: `${o}-logo` },
                  t?.src
                ),
              });
        };
    },
  },
]);
//# sourceMappingURL=components-banner.bef73df9.js.map
