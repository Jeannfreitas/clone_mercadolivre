"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [83314],
  {
    58661(e, l, t) {
      t.r(l), t.d(l, { default: () => x });
      t(18111), t(61701);
      var s = t(36402),
        _ = t(93603),
        r = t(19798),
        a = t(96540),
        o = t(74848);
      const i = "ui-seller-data-status",
        m = (e) => {
          let { title: l = null, icon: t = null, subtitle: r } = e;
          return (0, o.jsxs)("div", {
            className: `${i}__info`,
            children: [
              l &&
                (0, o.jsx)(_.G, {
                  as: "p",
                  text: l.text,
                  color: l.color,
                  font_size: l.font_size,
                  font_family: l.font_family,
                  className: `${i}__info-title`,
                }),
              t && (0, o.jsx)(s.In, { id: t.id, className: `${i}__info-icon` }),
              (0, o.jsx)(_.G, {
                as: "p",
                text: r.text,
                color: r.color,
                font_size: r.font_size,
                font_family: r.font_family,
                className: `${i}__info-subtitle`,
              }),
            ],
          });
        },
        n = (0, a.memo)(m);
      var c = t(50701);
      const f = "ui-seller-data-status",
        x = (e) => {
          let {
            seller_status_info: l = null,
            rank: t,
            info: a = null,
            default_info: i = null,
            is_thermometer_large: m = !1,
          } = e;
          const { icon: x, title: h, subtitle: u } = l ?? {};
          return (0, o.jsxs)("div", {
            className: `${f}__container`,
            children: [
              l &&
                (0, o.jsxs)("div", {
                  className: `${f}__thermometer-container`,
                  children: [
                    x &&
                      (0, o.jsx)(s.In, {
                        id: x.id,
                        className: `${f}__icon-medal`,
                      }),
                    (h || u) &&
                      (0, o.jsxs)("div", {
                        className: `${f}__lider-seller`,
                        children: [
                          h &&
                            (0, o.jsx)(_.G, {
                              as: "p",
                              text: h.text,
                              color: h.color,
                              font_size: h.font_size,
                              font_family: h.font_family,
                              className: `${f}__title`,
                            }),
                          u &&
                            (0, o.jsx)(_.G, {
                              as: "p",
                              text: u.text,
                              color: u.color,
                              font_size: u.font_size,
                              font_family: u.font_family,
                              className: `${f}__subtitle`,
                            }),
                        ],
                      }),
                    !m && (0, o.jsx)(r.A, { rank: t, is_large: m }),
                  ],
                }),
              (m || !l) && (0, o.jsx)(r.A, { rank: t, is_large: m || !l }),
              i &&
                (0, o.jsx)(_.G, {
                  as: "p",
                  text: i.text,
                  color: i.color,
                  font_size: i.font_size,
                  className: `${f}__default-info`,
                }),
              a &&
                (0, o.jsx)("div", {
                  className: `${f}__info-container`,
                  children: a.map((e) =>
                    (0, o.jsx)(
                      n,
                      { ...e },
                      (0, c.ne)({ title: e.title || e.subtitle })
                    )
                  ),
                }),
            ],
          });
        };
    },
    19798(e, l, t) {
      t.d(l, { A: () => a });
      var s = t(46942),
        _ = t.n(s),
        r = t(74848);
      const a = (e) => {
        let { rank: l, is_large: t = !1 } = e;
        return (0, r.jsxs)("ul", {
          "aria-hidden": "true",
          className: _()("ui-seller-data-status__thermometer", {
            "thermometer-large": t,
          }),
          value: l,
          children: [
            (0, r.jsx)("li", {
              className: _()("thermometer__level", "thermometer__level--1", {
                "thermometer__level--1-large": t,
              }),
            }),
            (0, r.jsx)("li", {
              className: _()("thermometer__level", "thermometer__level--2", {
                "thermometer__level--2-large": t,
              }),
            }),
            (0, r.jsx)("li", {
              className: _()("thermometer__level", "thermometer__level--3", {
                "thermometer__level--3-large": t,
              }),
            }),
            (0, r.jsx)("li", {
              className: _()("thermometer__level", "thermometer__level--4", {
                "thermometer__level--4-large": t,
              }),
            }),
            (0, r.jsx)("li", {
              className: _()("thermometer__level", "thermometer__level--5", {
                "thermometer__level--5-large": t,
              }),
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=components-status.b96a4888.js.map
