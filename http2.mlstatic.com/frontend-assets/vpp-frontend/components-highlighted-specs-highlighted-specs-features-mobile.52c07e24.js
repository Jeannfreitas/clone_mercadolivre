"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [66360],
  {
    22381(e, t, s) {
      s.r(t), s.d(t, { default: () => y });
      var a = s(96540),
        i = s(27612),
        l = s(60711),
        n = s(93603),
        o = s(87725),
        c = s(46942),
        r = s.n(c),
        d = s(24635),
        m = s(74848);
      const p = (e) => {
        let { namespace: t, label: s } = e;
        const { text: a, color: i, font_size: l, font_family: o } = s;
        return (0, m.jsx)("div", {
          className: `${t}__additional-information`,
          children: (0, m.jsx)(n.G, {
            className: `${t}__additional-information__label`,
            text: a ?? s,
            color: i ?? "BLACK",
            font_size: l ?? "XSMALL",
            font_family: o ?? "REGULAR",
          }),
        });
      };
      s(18111), s(61701);
      var u = s(50701);
      const h = "ui-vpp-highlighted-specs__features-list",
        _ = (e) => {
          let { features: t } = e;
          return (0, m.jsx)("ul", {
            className: h,
            children: t.map((e) =>
              (0, m.jsx)(
                "li",
                {
                  className: r()(
                    `${h}-item`,
                    `ui-pdp-color--${e.color}`,
                    `ui-pdp-size--${e.font_size}`,
                    `ui-pdp-family--${e.font_family}`
                  ),
                  children: e.text,
                },
                (0, u.ne)(e)
              )
            ),
          });
        };
      var f = s(43984);
      const g = "ui-vpp-highlighted-specs__features",
        v = (e) => {
          let { features: t, action: s = null, additional_information: i } = e;
          const { deviceType: l } = (0, a.useContext)(f.Ay),
            n = "desktop" === l,
            o = (0, a.useCallback)((e, t) => {
              e.preventDefault();
              const s = document.getElementById("see-more-button-hs-features"),
                a = document.getElementById("highlighted_specs_attrs");
              if (
                (s && s instanceof HTMLElement && s.click(),
                a &&
                  a instanceof HTMLElement &&
                  (a.scrollIntoView({ behavior: "smooth", block: "center" }),
                  t))
              ) {
                const e = setTimeout(() => {
                  a.focus();
                }, 500);
                return () => clearTimeout(e);
              }
            }, []),
            c = (0, a.useCallback)(
              (e) => {
                if ("Enter" === e.key || " " === e.key) {
                  o(e, !0);
                }
              },
              [o]
            );
          return (0, m.jsxs)("div", {
            className: r()(g, { "ui-pdp-with--separator": !n }),
            children: [
              (0, m.jsx)(_, { features: t }),
              i && (0, m.jsx)(p, { namespace: g, label: i }),
              s &&
                n &&
                (0, m.jsx)(d.A, {
                  id: "see-more-button-hs-features",
                  target: "#highlighted_specs_attrs",
                  className: `${g}-action`,
                  title: s.label.text,
                  label: s.label,
                  track: s.track,
                  "data-testid": "highlighted-features-action",
                  onClick: o,
                  onKeyDown: c,
                }),
            ],
          });
        },
        b = "ui-vpp-highlighted-specs",
        A = [],
        x = { label_component: (0, l.A)(n.G)(o.A), highlighted_features: v },
        C = (e) => {
          let { components: t = A } = e;
          return {
            containerClassName: b,
            processedProps: {
              sectionId: b,
              initialState: { components: t },
              availableComponents: x,
            },
          };
        };
      var L = s(45260);
      const k = (e) => {
          let { viewport_track: t, ...s } = e;
          const { viewRef: a } = (0, L.A)(t),
            { containerClassName: l, processedProps: n } = C(s),
            { sectionId: o, initialState: c, availableComponents: r } = n;
          return (0, m.jsx)("section", {
            id: o,
            ref: a,
            className: l,
            children: (0, m.jsx)(i.A, {
              availableComponents: r,
              initialState: c,
            }),
          });
        },
        y = (0, a.memo)(k);
    },
    45260(e, t, s) {
      s.d(t, { A: () => i });
      var a = s(35240);
      const i = (e) => ({ viewRef: (0, a.A)(e, { threshold: 0.45 }) });
    },
    60711(e, t, s) {
      s.d(t, { A: () => a });
      const a = s(44489).aQ;
    },
  },
]);
//# sourceMappingURL=components-highlighted-specs-highlighted-specs-features-mobile.52c07e24.js.map
