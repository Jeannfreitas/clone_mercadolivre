"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [90062],
  {
    84850(e, s, o) {
      o.r(s), o.d(s, { default: () => L });
      var r = o(96540),
        t = o(26376),
        n = o(91702),
        i = o(89379),
        c = o(80045),
        l = o(74848),
        a = ["carouselType", "carousels"],
        d = function (e) {
          var s = e.carouselType,
            o = void 0 === s ? null : s,
            r = e.carousels,
            t = (0, c.A)(e, a),
            n = null;
          return (
            o && (n = r[o.toLowerCase()]),
            (o && n) || (n = r.default),
            (0, l.jsx)(n, (0, i.A)({}, t))
          );
        },
        m = (0, n.QA)(d),
        h = o(43984),
        u = o(50538);
      const v = (e) => {
          const {
            isPolycard: s,
            thousandSeparator: o,
            decimalSeparator: r,
            className: t = "",
            ...n
          } = e;
          return {
            containerClassName: t,
            contextProps: { thousandSeparator: o, decimalSeparator: r },
            cardProps: { polyClassName: "recos-polycard" },
            isPolycard: s,
            iconFactory: u.default,
            processedProps: n,
          };
        },
        p = (0, t.R)(
          {
            resolved: {},
            chunkName: () => "components-recommendations-card",
            isReady(e) {
              const s = this.resolve(e);
              return !0 === this.resolved[s] && !!o.m[s];
            },
            importAsync: () =>
              Promise.all([o.e(23150), o.e(47343)]).then(o.bind(o, 75681)),
            requireAsync(e) {
              const s = this.resolve(e);
              return (
                (this.resolved[s] = !1),
                this.importAsync(e).then((e) => ((this.resolved[s] = !0), e))
              );
            },
            requireSync(e) {
              const s = this.resolve(e);
              return o(s);
            },
            resolve: () => 75681,
          },
          { resolveComponent: (e) => e.RecommendationsCardVertical }
        );
      p.preload();
      const y = (0, t.R)(
        {
          resolved: {},
          chunkName: () => "components-recommendations-card",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!o.m[s];
          },
          importAsync: () =>
            Promise.all([o.e(23150), o.e(47343)]).then(o.bind(o, 75681)),
          requireAsync(e) {
            const s = this.resolve(e);
            return (
              (this.resolved[s] = !1),
              this.importAsync(e).then((e) => ((this.resolved[s] = !0), e))
            );
          },
          requireSync(e) {
            const s = this.resolve(e);
            return o(s);
          },
          resolve: () => 75681,
        },
        { resolveComponent: (e) => e.RecommendationsCardHorizontalTitleFirst }
      );
      y.preload();
      const A = (0, t.R)(
        {
          resolved: {},
          chunkName: () => "components-recommendations-list",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!o.m[s];
          },
          importAsync: () => o.e(22193).then(o.bind(o, 69335)),
          requireAsync(e) {
            const s = this.resolve(e);
            return (
              (this.resolved[s] = !1),
              this.importAsync(e).then((e) => ((this.resolved[s] = !0), e))
            );
          },
          requireSync(e) {
            const s = this.resolve(e);
            return o(s);
          },
          resolve: () => 69335,
        },
        { resolveComponent: (e) => e.RecommendationsListWithoutContainer }
      );
      A.preload();
      const C = (0, t.R)(
        {
          resolved: {},
          chunkName: () => "components-recommendations-list",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!o.m[s];
          },
          importAsync: () => o.e(22193).then(o.bind(o, 69335)),
          requireAsync(e) {
            const s = this.resolve(e);
            return (
              (this.resolved[s] = !1),
              this.importAsync(e).then((e) => ((this.resolved[s] = !0), e))
            );
          },
          requireSync(e) {
            const s = this.resolve(e);
            return o(s);
          },
          resolve: () => 69335,
        },
        { resolveComponent: (e) => e.RecommendationsListGrid }
      );
      C.preload();
      const R = (0, t.R)(
        {
          resolved: {},
          chunkName: () => "components-recommendations-list",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!o.m[s];
          },
          importAsync: () => o.e(22193).then(o.bind(o, 69335)),
          requireAsync(e) {
            const s = this.resolve(e);
            return (
              (this.resolved[s] = !1),
              this.importAsync(e).then((e) => ((this.resolved[s] = !0), e))
            );
          },
          requireSync(e) {
            const s = this.resolve(e);
            return o(s);
          },
          resolve: () => 69335,
        },
        { resolveComponent: (e) => e.RecommendationsListDouble }
      );
      R.preload();
      const P = (0, t.R)(
        {
          resolved: {},
          chunkName: () => "components-recommendations-carousel-free",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!o.m[s];
          },
          importAsync: () => o.e(62598).then(o.bind(o, 60011)),
          requireAsync(e) {
            const s = this.resolve(e);
            return (
              (this.resolved[s] = !1),
              this.importAsync(e).then((e) => ((this.resolved[s] = !0), e))
            );
          },
          requireSync(e) {
            const s = this.resolve(e);
            return o(s);
          },
          resolve: () => 60011,
        },
        {
          resolveComponent: (e) =>
            e.RecommendationsCarouselFreeWithoutContainer,
        }
      );
      P.preload();
      const N = (e) => (0, l.jsx)(P, { Card: p, paddingHorizontal: 16, ...e }),
        q = {
          grid: (e) =>
            (0, l.jsx)(A, {
              ListComponent: C,
              listType: "grid",
              Card: p,
              ...e,
            }),
          vertical: (e) =>
            (0, l.jsx)(A, {
              ListComponent: R,
              listType: "double",
              Card: y,
              ...e,
            }),
          horizontal: N,
          default: N,
        },
        L = (e) => {
          const {
              containerClassName: s,
              contextProps: o,
              cardProps: t,
              isPolycard: n,
              iconFactory: i,
              processedProps: c,
            } = v(e),
            { deviceType: a } = (0, r.useContext)(h.Ay);
          return (0, l.jsx)(m, {
            carousels: q,
            IconFactory: i,
            contextProps: o,
            isPolycard: n,
            deviceType: a,
            ...c,
            cardProps: t,
            className: s,
          });
        };
    },
  },
]);
//# sourceMappingURL=components-recommendations-carousel-by-type-common.85c4cade.js.map
