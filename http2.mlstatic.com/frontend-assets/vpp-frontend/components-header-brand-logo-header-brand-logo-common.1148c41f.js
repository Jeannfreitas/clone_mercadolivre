"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [10039],
  {
    97533(e, a, s) {
      s.r(a), s.d(a, { default: () => t });
      const t = s(49408).A;
    },
    58791(e, a, s) {
      s.d(a, { A: () => l });
      var t = s(67021);
      const i = "ui-pdp__header-brand-logo",
        l = (e) => {
          const { image: a, link: s, track: l = null } = e,
            n = i,
            r = `${i}__image`;
          return {
            processedProps: {
              link: s,
              image: { ...a, src: a?.url?.src, alt: a?.alt || "" },
              imageComponentName: `${i}__image`,
            },
            containerClassName: n,
            imageClassName: r,
            handleClick: () => {
              l && (0, t.sx)(l);
            },
          };
        };
    },
    49408(e, a, s) {
      s.d(a, { A: () => r });
      var t = s(12589),
        i = s(58791),
        l = s(500),
        n = s(74848);
      const r = (e) => {
        const {
            processedProps: a,
            containerClassName: s,
            imageClassName: r,
            handleClick: c,
          } = (0, i.A)(e),
          { link: o, image: m, imageComponentName: d } = a,
          h = (0, l.A)(m);
        return (0, n.jsx)("a", {
          href: o,
          onClick: c,
          children: (0, n.jsx)("div", {
            className: s,
            style: h,
            children: (0, n.jsx)(t.A, {
              alt: m.alt,
              className: r,
              src: m.src,
              componentName: d,
            }),
          }),
        });
      };
    },
    500(e, a, s) {
      s.d(a, { A: () => i });
      var t = s(96540);
      const i = (e) =>
        (0, t.useMemo)(() => {
          const a = {};
          return (
            e?.width &&
              e?.height &&
              (a.aspectRatio = `${e.width} / ${e.height}`),
            a
          );
        }, [e?.width, e?.height]);
    },
  },
]);
//# sourceMappingURL=components-header-brand-logo-header-brand-logo-common.1148c41f.js.map
