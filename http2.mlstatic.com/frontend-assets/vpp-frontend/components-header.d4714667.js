"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [1387],
  {
    78643(l, e, s) {
      s.d(e, { A: () => n });
      var t = s(76204),
        o = s(12589),
        a = s(74848);
      const i = "ui-seller-data",
        n = (l) => {
          let { logo: e } = l;
          const { width: s, url: n, action: c } = e || {};
          return c
            ? (0, a.jsx)("a", {
                href: c.target,
                children: (0, a.jsx)(t.V, {
                  className: `${i}__logo-image`,
                  size: s.toString(),
                  srLabel: c.accessibility_text,
                  children: (0, a.jsx)(
                    o.A,
                    { alt: "", src: n?.src, componentName: `${i}-logo-link` },
                    n?.src
                  ),
                }),
              })
            : (0, a.jsx)(t.V, {
                className: `${i}__logo-image`,
                size: s.toString(),
                children: (0, a.jsx)(
                  o.A,
                  { alt: "", src: n?.src, componentName: `${i}-logo` },
                  n?.src
                ),
              });
        };
    },
    64843(l, e, s) {
      s.r(e), s.d(e, { default: () => v });
      var t = s(78643),
        o = s(96540),
        a = s(93603),
        i = s(36402),
        n = s(63950),
        c = s.n(n),
        r = s(37808),
        _ = s(74848);
      const d = "ui-seller-data-header",
        x = (l) => {
          let { label: e, onFollowClick: s, isFetching: t = !1 } = l;
          return (0, _.jsx)("div", {
            className: `${d}__follow-action`,
            children: (0, _.jsxs)(r.$n, {
              hierarchy: "quiet",
              size: "small",
              onClick: (l) => {
                l.preventDefault(), s(l);
              },
              disabled: t,
              loading: t,
              srLabel: e.accessibility_text,
              srAnnouncement: e?.text,
              children: [
                (0, _.jsx)(r.C3, { children: e.text }),
                e?.text_icon &&
                  (0, _.jsx)(i.In, {
                    id: e.text_icon.id,
                    color: e.text_icon.color,
                    className: `${d}__icon-coupon`,
                  }),
              ],
            }),
          });
        },
        u = "ui-seller-data-header",
        f = (l) => {
          let {
            title: e,
            subtitle: s = null,
            action: t = null,
            followers: o = null,
            onFollowClick: n = c(),
            ctaStatusInfo: r = null,
          } = l;
          const d = (0, _.jsx)("div", {
            className: `${u}__title-container`,
            children: (0, _.jsx)(a.G, {
              as: "h2",
              text: e.text,
              color: e.color,
              font_size: e.font_size,
              font_family: e.font_family,
              className: `${u}__title non-selectable`,
            }),
          });
          return (0, _.jsxs)("div", {
            className: `${u}__main-info-container`,
            children: [
              (0, _.jsxs)("div", {
                className: `${u}__main-info`,
                children: [
                  t ? (0, _.jsx)("a", { href: t.target, children: d }) : d,
                  o &&
                    (0, _.jsx)(x, {
                      label: r?.label_button || {},
                      onFollowClick: n,
                      isFetching: o.isFetching,
                    }),
                ],
              }),
              s &&
                (() => {
                  const l = (0, _.jsxs)("div", {
                    className: `${u}__subtitle-container`,
                    children: [
                      (0, _.jsx)(a.G, {
                        as: "h3",
                        text: s.label.text,
                        color: s.label.color,
                        font_size: s.label.font_size,
                        className: `${u}__subtitle`,
                      }),
                      s.icon &&
                        (0, _.jsx)(i.In, {
                          id: s.icon.id,
                          className: `${u}__icon-verified`,
                        }),
                    ],
                  });
                  return t
                    ? (0, _.jsx)("a", { href: t.target, children: l })
                    : l;
                })(),
            ],
          });
        },
        m = (0, o.memo)(f);
      var h = s(46458);
      const j = "ui-seller-data-header",
        N = (l) => {
          let {
            reseller: e = null,
            social_media: s = null,
            products: t = null,
            sales: o = null,
            follow_title: i = null,
            action: n = null,
          } = l;
          const c = (0, _.jsx)("div", {
            className: `${j}__extra-info-container`,
            children: (0, _.jsxs)("div", {
              className: `${j}__extra-info`,
              children: [
                e &&
                  (0, _.jsx)("div", {
                    className: `${j}__reseller-container`,
                    children: (0, _.jsx)(a.G, {
                      as: "p",
                      text: e.text,
                      color: e.color,
                      font_size: e.font_size,
                      className: `${j}__reseller non-selectable`,
                    }),
                  }),
                (0, _.jsxs)("div", {
                  className: `${j}__detail-info-container`,
                  children: [
                    i &&
                      (0, _.jsx)(a.G, {
                        as: "p",
                        text: h.I.jsx(i.text, i.values),
                        color: i.color,
                        font_size: i.font_size,
                        className: `${j}__followers`,
                      }),
                    s &&
                      (0, _.jsx)(a.G, {
                        as: "p",
                        text: h.I.jsx(s.text, s.values),
                        color: s.color,
                        font_size: s.font_size,
                        className: `${j}__social_media`,
                      }),
                    t &&
                      (0, _.jsx)(a.G, {
                        as: "p",
                        text: h.I.jsx(t.text, t.values),
                        color: t.color,
                        font_size: t.font_size,
                        className: `${j}__products`,
                      }),
                    o &&
                      (0, _.jsx)(a.G, {
                        as: "p",
                        text: h.I.jsx(o.text, o.values),
                        color: o.color,
                        font_size: o.font_size,
                        className: `${j}__sales`,
                      }),
                  ],
                }),
              ],
            }),
          });
          return n ? (0, _.jsx)("a", { href: n.target, children: c }) : c;
        },
        $ = "ui-seller-data-header",
        g = "do_follow",
        v = (l) => {
          let {
            title: e,
            subtitle: s = null,
            action: o = null,
            reseller: a = null,
            logo: i = null,
            social_media: n = null,
            products: c = null,
            sales: r = null,
            followers: d = null,
            onFollowClick: x = null,
          } = l;
          const u = d
            ? (f = d).cta_status === g
              ? { status: g, ...f.cta_do_follow }
              : { status: "stop_follow", ...f.cta_stop_follow }
            : null;
          var f;
          return (0, _.jsxs)("div", {
            className: `${$}__container`,
            children: [
              i &&
                (0, _.jsx)("div", {
                  className: `${$}__logo-container`,
                  children: (0, _.jsx)(t.A, { logo: i }),
                }),
              (0, _.jsxs)("div", {
                className: `${$}__description-container`,
                children: [
                  (0, _.jsx)(m, {
                    title: e,
                    subtitle: s,
                    action: o,
                    followers: d,
                    onFollowClick: x,
                    ctaStatusInfo: u,
                  }),
                  (0, _.jsx)(N, {
                    reseller: a,
                    social_media: n,
                    products: c,
                    sales: r,
                    follow_title: u?.title,
                    action: o,
                  }),
                ],
              }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=components-header.d4714667.js.map
