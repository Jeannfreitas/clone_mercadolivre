"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [5011],
  {
    82392(n, e, o) {
      o.r(e), o.d(e, { default: () => s });
      o(18111), o(7588), o(61701);
      var t = o(96540),
        r = o(74848);
      const s = (n) => {
        let {
          components: e,
          renderDynamicComponent: o,
          spot: s,
          className: c,
          noWrap: a = !1,
        } = n;
        const _ = ((n, e) => {
            const o = [];
            return (
              Object.values(n).forEach((n) => {
                n?.dynamic_component?.spot === e && o.push(n);
              }),
              o.sort(
                (n, e) => n.dynamic_component.order - e.dynamic_component.order
              )
            );
          })(e, s),
          m = _.map((n, e, s) => {
            let { component_id: c, id: a } = n;
            return (0, r.jsx)(
              t.Fragment,
              { children: o(c || a, e, s.length) },
              `${c}-${a}`
            );
          });
        return a
          ? (0, r.jsx)(r.Fragment, { children: m })
          : (0, r.jsx)("div", { className: c, children: m });
      };
    },
  },
]);
//# sourceMappingURL=components-dynamic-component-wrapper.738e6d4e.js.map
