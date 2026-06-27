"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [33979],
  {
    9971(e, t, a) {
      a.r(t), a.d(t, { default: () => i });
      const i = a(7298).A;
    },
    7298(e, t, a) {
      a.d(t, { A: () => D });
      var i = a(96540),
        n = a(46942),
        o = a.n(n),
        l = a(67485),
        s = a(1653),
        r = a(83837),
        c = a(8257),
        d = a(49306),
        p = a(43984),
        u = a(15011),
        m = a(33010),
        _ = a(97293),
        h = a(45592),
        f = a(50538),
        g = a(24635),
        A = a(74848);
      const v = "ui-pdp-pick-up",
        b = (e, t, a, i, n, l) => {
          let {
            modal_title: r,
            close_modal_label: p,
            icon: u,
            target: m,
            label: _,
            html_target: h,
            track: b,
          } = t;
          if (((0, s.b)(m, "new_version=true") || "desktop" === e) && !h) {
            return "function" == typeof i && !(!1 === n)
              ? (0, A.jsx)(g.A, {
                  id: "pick_up_summary",
                  onClick: l,
                  target: m,
                  htmlTarget: "_self",
                  role: "link",
                  label: _,
                  track: b,
                })
              : (0, A.jsx)(c.Ay, {
                  icon: u ? (0, f.default)(u, `${v}__action-icon`) : null,
                  label: _,
                  modalUrl: "#pick-up",
                  url: m,
                  modalClassName: "ui-pdp-iframe-modal",
                  modalTitle: r,
                  autoHeight: !1,
                  closeModalLabel: p,
                  children: (0, A.jsx)(d.v, {
                    src: m,
                    title: _.text,
                    onMessage: a,
                    scrolling: "no",
                  }),
                });
          }
          return (0, A.jsx)("div", {
            className: "ui-pdp-action-modal",
            children: (0, A.jsxs)("a", {
              target: h || "_self",
              href: m,
              children: [
                u &&
                  (0, A.jsx)("div", {
                    "aria-hidden": "true",
                    className: o()(
                      `${v}__action-icon`,
                      "ui-pdp-action-modal__icon"
                    ),
                    children: (0, f.default)(u, `${v}__action-icon`),
                  }),
                _.text,
              ],
            }),
          });
        },
        D = (e) => {
          let {
            action: t = null,
            className: a = null,
            isFetching: n = !1,
            title: s,
            onShippingPromiseUpdate: c = null,
            tooltip: d = null,
            information_tooltip: f = null,
            closeButtonLabel: g,
            num_font_size: D = m.w.MEDIA_SUBTITLE,
            shouldUseOnDemandIframe: y = null,
            showOnDemandIframe: N = null,
            showOnDemandIframeParams: k = null,
            id: x = null,
            ...w
          } = e;
          const { deviceType: C } = (0, i.useContext)(p.Ay),
            j = (0, h.A)(f),
            S = (0, i.useCallback)(
              (e) => {
                "function" == typeof e?.preventDefault && e.preventDefault();
                const a = t?.target,
                  i = t?.modal_title;
                if (a && "function" == typeof N) {
                  const e = k && "object" == typeof k ? k : {},
                    t = {
                      title: i,
                      target: a,
                      ...e,
                      params: {
                        namespace: x || "pick_up_summary",
                        ...(e?.params || {}),
                      },
                    };
                  N(t);
                }
              },
              [N, k, t?.target, t?.modal_title, x]
            );
          return s
            ? (0, A.jsx)(_.A, {
                className: "ui-vpp-pickup",
                tooltip: j ? { ...j, offsetX: -16, offsetY: void 0 } : null,
                children: (0, A.jsx)(r.A, {
                  isFetching: n,
                  num_font_size: D,
                  action: t
                    ? b(
                        C,
                        t,
                        (0, u.V)(
                          "vip:modal-content:loaded",
                          "height",
                          ".ui-pdp-iframe-modal",
                          ".andes-modal__header"
                        ),
                        N,
                        y,
                        S
                      )
                    : null,
                  className: o()(
                    "ui-pdp-pick-up--md",
                    `${v}--content-action`,
                    a,
                    (0, l.A)(s.color)
                  ),
                  title: s,
                  onShippingPromiseUpdate: c,
                  ...w,
                  showChevron: !!d && "FIXED" !== d.behaviour,
                  tooltip: d,
                }),
              })
            : null;
        };
    },
    83837(e, t, a) {
      a.d(t, { A: () => i });
      const i = a(30972).A;
    },
    35348(e, t, a) {
      a.d(t, { A: () => l });
      var i = a(46942),
        n = a.n(i),
        o = a(50538);
      const l = (e) => {
        let {
          icon: t,
          namespace: a,
          className: i,
          hasRemainingTime: l,
          adaptedSubtitles: s,
          title: r,
          action: c,
          num_font_size: d,
          isFetching: p,
          showChevron: u,
          tooltip: m,
        } = e;
        return {
          props: {
            figure: t && (0, o.default)(t, `${a}-icon`),
            className: n()(a, i, { [`${a}--remaining`]: l }),
            subtitles: s,
            title: r,
            action: c,
            num_font_size: d,
            isFetching: p,
            showChevron: u,
            tooltip: m,
          },
        };
      };
    },
    3921(e, t, a) {
      a.d(t, { A: () => n });
      var i = a(13748);
      const n = (e) => {
        let { remaining: t, onShippingPromiseUpdate: a, subtitles: n } = e;
        const o = a || (() => {}),
          { adaptedSubtitles: l } = (0, i.A)(t, o, n);
        return { adaptedSubtitles: l, hasRemainingTime: !!t };
      };
    },
    9995(e, t, a) {
      a.d(t, { A: () => o });
      var i = a(35348);
      const n = "ui-pdp-pick-up",
        o = (e, t, a) => {
          const {
              action: o = null,
              className: l = "",
              icon: s = null,
              title: r,
              isFetching: c = !1,
              tooltip: d = null,
              showChevron: p = !1,
              num_font_size: u,
              key: m = null,
              dot: _ = null,
            } = e,
            { props: h } = (0, i.A)({
              icon: s,
              namespace: n,
              className: l,
              hasRemainingTime: a,
              adaptedSubtitles: t,
              title: r,
              action: o,
              num_font_size: u,
              isFetching: c,
              showChevron: p,
              tooltip: d,
            });
          return {
            mediaProps: h,
            mediaKey: m,
            summaryDotWrapperClassName: `${n}__row-with-dot`,
            summaryDotProps: {
              dot: _,
              className: `${n}__row-with-dot__dot-element`,
            },
            shouldRenderDotWrapper: !!_,
          };
        };
    },
    30972(e, t, a) {
      a.d(t, { A: () => d });
      var i = a(96540),
        n = a(9995),
        o = a(3921),
        l = a(9924),
        s = a(10400),
        r = a(13201),
        c = a(74848);
      const d = (0, s.e)((e) => {
        const { adaptedSubtitles: t, hasRemainingTime: a } = (0, o.A)(e),
          {
            mediaProps: s,
            mediaKey: d,
            summaryDotWrapperClassName: p,
            summaryDotProps: u,
            shouldRenderDotWrapper: m,
          } = (0, n.A)(e, t, a),
          _ = (0, i.useMemo)(() => s, [s]),
          h = (0, c.jsx)(l.$U, { ..._ }, d);
        return m
          ? (0, c.jsxs)("div", {
              className: p,
              children: [(0, c.jsx)(r.A, { ...u }), h],
            })
          : h;
      });
    },
  },
]);
//# sourceMappingURL=components-buybox-pick-up.04569493.js.map
