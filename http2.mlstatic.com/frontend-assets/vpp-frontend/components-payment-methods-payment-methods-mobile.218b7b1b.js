"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [92562],
  {
    39744(e, s, l) {
      l.d(s, { A: () => a, B: () => t.A });
      var t = l(6010);
      const a = t.A;
    },
    6010(e, s, l) {
      l.d(s, { A: () => c });
      var t = l(46942),
        a = l.n(t),
        o = l(93603),
        i = l(46458),
        n = l(74848);
      const r = "ui-pdp-list",
        c = (e) => {
          let { items: s, className: l = "" } = e;
          const t = [];
          for (let e = 0; e < s.length; e += 2)
            t.push([s[parseInt(e, 10)], s[parseInt(e + 1, 10)]]);
          return (0, n.jsx)("div", {
            className: a()(r, l),
            children: t.map((e, s) => {
              let [l, t] = e;
              return l || t
                ? (0, n.jsxs)(
                    "ul",
                    {
                      className: "ui-pdp-list__wrapper",
                      children: [
                        l &&
                          (0, n.jsx)(
                            "li",
                            {
                              className: `${r}__item`,
                              children: (0, n.jsx)(
                                o.G,
                                {
                                  className: `${r}__text`,
                                  as: "p",
                                  ...l,
                                  text: i.I.jsx(l.text, l.values),
                                },
                                l.text
                              ),
                            },
                            l.id
                          ),
                        t &&
                          (0, n.jsx)(
                            "li",
                            {
                              className: `${r}__item`,
                              children: (0, n.jsx)(
                                o.G,
                                {
                                  className: `${r}__text`,
                                  as: "p",
                                  ...t,
                                  text: i.I.jsx(t.text, t.values),
                                },
                                t.text
                              ),
                            },
                            t.id
                          ),
                      ],
                    },
                    l?.id && t?.id ? `${l.id}-${t.id}` : s
                  )
                : null;
            }),
          });
        };
    },
    17802(e, s, l) {
      l.r(s), l.d(s, { default: () => t });
      const t = l(83257).A;
    },
    63480(e, s, l) {
      l.d(s, { A: () => r });
      var t = l(46942),
        a = l.n(t),
        o = l(44489);
      const i = "ui-vip-payment_methods",
        n = "ui-pdp-iframe-modal",
        r = (e) => {
          const {
              icon: s = null,
              title: l = null,
              action: t = null,
              backgroundColor: r = null,
              useMobileStyles: c = !1,
            } = e,
            d = c ? `${i}__container__mobile` : `${i}__container`;
          return {
            title: l,
            shouldRenderIcon: Boolean(s),
            iconProps: s,
            iconClassName: a()((0, o.op)(s?.color), `${i}__card`),
            mediaClassName: a()(d, (0, o.oR)(r), (0, o.op)(s?.color)),
            isMobile: Boolean(c),
            modalClassName: n,
            modalTitle: t?.modal_title,
            url: t?.target,
            closeModalLabel: t?.close_modal_label,
            iframeTitle: t?.label?.text,
            iframeSrc: t?.target,
            iframeScrolling: "no",
            iframeOnMessage: (0, o.VW)(
              "vip:modal-content:loaded",
              "height",
              `.${n}`,
              ".andes-modal__header"
            ),
          };
        };
    },
    67619(e, s, l) {
      l.d(s, { A: () => d });
      var t = l(49306),
        a = l(36402),
        o = l(9924),
        i = l(8257),
        n = l(63480),
        r = l(74848);
      const c = (e) => {
        const {
            title: s,
            shouldRenderIcon: l,
            iconProps: c,
            iconClassName: d,
            mediaClassName: m,
            isMobile: u,
            modalClassName: p,
            modalTitle: _,
            url: x,
            closeModalLabel: h,
            iframeTitle: g,
            iframeSrc: y,
            iframeScrolling: b,
            iframeOnMessage: N,
          } = (0, n.A)(e),
          A = (0, r.jsx)(o.$U, {
            figure: l && (0, r.jsx)(a.In, { ...c, className: d }),
            className: m,
            title: s,
          });
        return (0, r.jsx)(i.cX, {
          componentAsLabel: A,
          modalClassName: p,
          modalTitle: _,
          url: x,
          closeModalLabel: h,
          isMobile: u,
          children: (0, r.jsx)(t.v, {
            title: g,
            src: y,
            scrolling: b,
            onMessage: N,
          }),
        });
      };
      c.displayName = "Message";
      const d = c;
    },
    92112(e, s, l) {
      l.d(s, { A: () => o });
      l(18111), l(61701);
      var t = l(16030);
      const a = "ui-vip-payment_methods",
        o = (e) => {
          const {
              title: s = null,
              icons: l = null,
              action: o = null,
              subtitle: i = null,
              disclaimers: n = null,
            } = e,
            r = `${a}__subtitle`,
            c = Boolean(i) && i?.length > 0,
            d = !c && Boolean(i);
          return {
            shouldRenderTitle: Boolean(s),
            titleProps: {
              className: `${a}__title`,
              color: s?.color,
              font_family: s?.font_family,
              font_size: s?.font_size,
              as: "p",
              text: t.I.jsx(s?.text || s, s?.values),
            },
            showSubtitleList: c,
            subtitleList: c
              ? i.map((e) => ({
                  key: e?.text,
                  className: r,
                  color: e?.color,
                  font_family: e?.font_family,
                  font_size: e?.font_size,
                  as: "p",
                  text: e?.text,
                }))
              : [],
            showSubtitleSingle: d,
            subtitleSingleClassName: r,
            subtitleSingleText: i?.text,
            paymentIconProps: { icons: l, isMobile: !1 },
            shouldRenderDisclaimers: Boolean(n),
            disclaimersStyle: n?.listStyle,
            disclaimersProps: n,
            shouldRenderAction: Boolean(o),
            actionProps: {
              target: o?.target,
              htmlTarget: o?.html_target,
              track: o?.track,
              className: `${a}__action`,
              label: { text: o?.label?.text },
            },
          };
        };
    },
    27131(e, s, l) {
      l.d(s, { A: () => d });
      l(18111), l(61701);
      var t = l(93265),
        a = l(9924),
        o = l(93603),
        i = l(92112),
        n = l(39744),
        r = l(74848);
      const c = (e) => {
        const {
          shouldRenderTitle: s,
          titleProps: l,
          showSubtitleList: c,
          subtitleList: d,
          showSubtitleSingle: m,
          subtitleSingleClassName: u,
          subtitleSingleText: p,
          paymentIconProps: _,
          shouldRenderDisclaimers: x,
          disclaimersStyle: h,
          disclaimersProps: g,
          shouldRenderAction: y,
          actionProps: b,
        } = (0, i.A)(e);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            s && (0, r.jsx)(o.G, { ...l }),
            c &&
              d?.map((e) => {
                let { key: s, ...l } = e;
                return (0, r.jsx)(o.G, { ...l }, s);
              }),
            m && (0, r.jsx)("p", { className: u, children: p }),
            (0, r.jsx)(t.k, { ..._ }),
            x && (0, r.jsx)(n.B, { style: h, ...g }),
            y && (0, r.jsx)(a.TP, { ...b }),
          ],
        });
      };
      c.displayName = "Method";
      const d = c;
    },
    93898(e, s, l) {
      l.d(s, { A: () => i });
      l(18111), l(61701);
      var t = l(46942),
        a = l.n(t);
      const o = "ui-vip-payment_methods",
        i = (e) => {
          const {
              messages: s = null,
              payment_methods: l = null,
              stylesMedium: t = null,
              className: i = "",
              show_grouped: n = !1,
            } = e,
            r = Boolean(n),
            c = Array.isArray(s) && s.length > 0,
            d = Array.isArray(l) && l.length > 0,
            m = d ? l[0] : null;
          return {
            containerId: "paymentsContainer",
            containerClassName: a()(o, r && `${o}__mobile`, i),
            lazyStyles: t,
            messages: c
              ? s.map((e) => {
                  let { icon: s, title: l, action: t, background_color: a } = e;
                  return {
                    key: l?.text,
                    props: {
                      icon: s,
                      title: l,
                      action: t,
                      backgroundColor: a,
                      useMobileStyles: r,
                    },
                  };
                })
              : [],
            methods:
              !r && d
                ? l.map((e) => {
                    let { title: s, icons: l, subtitle: a } = e;
                    return {
                      key: s?.text,
                      props: { icons: l, title: s, subtitle: a, styles: t },
                    };
                  })
                : [],
            shouldRenderGroupedIcon: r && Boolean(m?.icons),
            groupedIconProps: { icons: m?.icons, isMobile: !0 },
          };
        };
    },
    83257(e, s, l) {
      l.d(s, { A: () => d });
      l(18111), l(61701);
      var t = l(91889),
        a = l(93265),
        o = l(93898),
        i = l(67619),
        n = l(27131),
        r = l(74848);
      const c = (e) => {
        const {
            containerId: s,
            containerClassName: l,
            lazyStyles: c,
            messages: d,
            methods: m,
            shouldRenderGroupedIcon: u,
            groupedIconProps: p,
          } = (0, o.A)(e),
          _ = (0, t.qO)(c);
        return (0, r.jsxs)("div", {
          ref: _,
          id: s,
          className: l,
          children: [
            d?.map((e) => {
              let { key: s, props: l } = e;
              return (0, r.jsx)(i.A, { ...l }, s);
            }),
            m?.map((e) => {
              let { key: s, props: l } = e;
              return (0, r.jsx)(n.A, { ...l }, s);
            }),
            u && (0, r.jsx)(a.k, { ...p }),
          ],
        });
      };
      c.displayName = "PaymentMethods";
      const d = c;
    },
  },
]);
//# sourceMappingURL=components-payment-methods-payment-methods-mobile.218b7b1b.js.map
