"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [16896],
  {
    5429(e, l, s) {
      s.d(l, { A: () => t, s: () => n.s });
      var a = s(64858),
        n = s(88008);
      const t = a.A;
    },
    51005(e, l, s) {
      s.d(l, { A: () => r });
      var a = s(46942),
        n = s.n(a),
        t = s(46458),
        o = s(88008);
      const i = "ui-pdp-action-row",
        r = (e) => {
          const {
              className: l = "",
              disabled: s = !1,
              label: a = null,
              selected: r = null,
              subtitle: c = null,
              thumbnail: d = null,
              onClick: u = null,
              modifier: h = "primary",
              url: b = null,
              htmlTarget: m = "_self",
              figure: p = null,
            } = e ?? {},
            _ = !s && "error" === h,
            N = Boolean(!s && b),
            f = s ? null : u,
            x = { [`${i}--${_ ? "error-600" : h}`]: h },
            C = n()(i, l, { [`${i}--disabled`]: s }, x),
            g = N
              ? {
                  "data-testid": "action-row-anchor",
                  href: b,
                  className: C,
                  onClick: f,
                  target: m || "_self",
                }
              : {
                  "data-testid": "action-row-span",
                  className: C,
                  onClick: f,
                  onKeyUp: f,
                  role: "button",
                  tabIndex: "-1",
                },
            v = r?.text_icon ? (0, o.s)(r?.text_icon?.id) : null,
            j = r ? t.I.jsx(r?.text, r?.values ?? null) : null,
            A = c ? t.I.jsx(c?.text || c, c?.values) : null,
            w = d ? { lazyload: !1, className: `${i}__thumbnail`, ...d } : null;
          return {
            Tag: N ? "a" : "span",
            containerProps: g,
            processedProps: {
              figure: p,
              showFigure: Boolean(p),
              figureClassName: n()("ui-pdp-icon--figure-left", {
                "ui-pdp-icon--disabled": s,
              }),
              label: a,
              showLabel: Boolean(a),
              labelClassName: `${i}__label`,
              contentClassName: `${i}__content`,
              selectedIcon: v,
              showSelected: Boolean(r),
              selectedClassName: n()(
                `${i}__selected`,
                { [`ui-pdp-color--${r?.color}`]: r?.color },
                { [`${i}__with-thumbnail`]: d }
              ),
              selectedContent: j,
              showSubtitle: Boolean(c),
              subtitleClassName: `${i}__subtitle`,
              subtitleContent: A,
              showThumbnail: Boolean(d),
              thumbnailProps: w,
              showChevron: !s,
              chevronId: "chevron",
              chevronClassName: n()("ui-pdp-icon--chevron-right", {
                "ui-pdp-icon--chevron-right__error": _,
              }),
            },
          };
        };
    },
    64858(e, l, s) {
      s.d(l, { A: () => i });
      var a = s(36402),
        n = s(55869),
        t = s(51005),
        o = s(74848);
      const i = (e) => {
        const { Tag: l, containerProps: s, processedProps: i } = (0, t.A)(e);
        return (0, o.jsxs)(l, {
          ...s,
          children: [
            i?.showFigure &&
              (0, o.jsx)("figure", {
                className: i?.figureClassName,
                children: i?.figure,
              }),
            i?.showLabel &&
              (0, o.jsx)("span", {
                className: i?.labelClassName,
                children: i?.label,
              }),
            (0, o.jsxs)("div", {
              className: i?.contentClassName,
              children: [
                i?.selectedIcon,
                i?.showSelected &&
                  (0, o.jsx)("span", {
                    className: i?.selectedClassName,
                    children: i?.selectedContent,
                  }),
                i?.showSubtitle &&
                  (0, o.jsx)("span", {
                    className: i?.subtitleClassName,
                    children: i?.subtitleContent,
                  }),
                i?.showThumbnail && (0, o.jsx)(n.Ay, { ...i?.thumbnailProps }),
                i?.showChevron &&
                  (0, o.jsx)(a.In, {
                    id: i?.chevronId,
                    className: i?.chevronClassName,
                  }),
              ],
            }),
          ],
        });
      };
    },
    88008(e, l, s) {
      s.d(l, { s: () => i });
      var a,
        n,
        t = s(62939),
        o = s(74848);
      const i = (e) => {
        switch (e) {
          case "ERROR_BADGE":
            return (
              a || (a = (0, o.jsx)(t.Tq, { color: "negative", size: "small" }))
            );
          case "WARNING_BADGE":
            return (
              n || (n = (0, o.jsx)(t.Tq, { color: "caution", size: "small" }))
            );
          default:
            return null;
        }
      };
    },
    43588(e, l, s) {
      s.r(l), s.d(l, { default: () => _ });
      var a = s(96540),
        n = s(46942),
        t = s.n(n),
        o = s(17376),
        i = s(37808),
        r = s(50538),
        c = s(17357),
        d = s(5429),
        u = s(74848);
      const h = (e, l, s, a, n, t) => {
        const o = (0, r.default)(a);
        return (0, u.jsx)(d.A, {
          className: "ui-pdp-action__action",
          label: e.text,
          url: l,
          htmlTarget: s,
          style_blocked: t,
          modifier: "secondary",
          figure: o,
          onClick: n,
        });
      };
      var b;
      const m = "ui-pdp-action",
        p = (e) => {
          const {
              className: l,
              type: s,
              disabled: n,
              disabled_text: d,
              style_blocked: p,
              onClickHandler: _,
              label: N,
              size: f,
              hierarchy: x,
              icon: C,
              hasTopSeparator: g,
              actionType: v,
              fullWidth: j,
              buttonProps: A,
              isLoading: w,
            } = e,
            [$, T] = (0, a.useState)(!n && w),
            [y, S] = (0, a.useState)(!0);
          (0, a.useEffect)(() => {
            S(!1);
          }, []),
            (0, a.useEffect)(() => {
              T(!n && w);
            }, [n, w]);
          const k = (0, a.useCallback)(
              (e) => {
                T(!0),
                  (0, a.startTransition)(() => {
                    Promise.resolve(_(e)).finally(() => T(!1));
                  });
              },
              [_]
            ),
            I = {
              ...A,
              className: t()("andes-spinner__icon-base", l, `${m}--${s}`, {
                [`${m}-${s}--disabled`]: n,
              }),
              hierarchy: x,
              disabled: p,
              size: f,
              fullWidth: j,
            };
          if ("actionRow" === x) return h(N, I.href, I.target, C, _);
          const B = g || v === c.TH.ASK_QUESTIONS_AI;
          return (0, u.jsxs)(u.Fragment, {
            children: [
              B &&
                (b ||
                  (b = (0, u.jsx)("div", {
                    className: "ui-pdp-action-separator",
                  }))),
              (0, u.jsxs)(i.$n, {
                "data-testid": "button",
                onClick: k,
                loading: $,
                ...I,
                srAnnouncement: N?.text,
                children: [
                  C && (0, r.default)(C.id, `ui-pdp-action-icon--${C.color}`),
                  N?.text,
                  n && d && (0, u.jsx)(o.s, { children: `. ${d}` }),
                ],
              }),
              n &&
                y &&
                (0, u.jsx)(o.s, {
                  children: (0, u.jsx)(
                    "input",
                    {
                      name: "disabledform",
                      value: null,
                      required: !0,
                      "aria-label": d,
                    },
                    "disabledform"
                  ),
                }),
            ],
          });
        };
      p.defaultProps = {
        className: null,
        disabled: !1,
        disabled_text: null,
        onClickHandler: null,
        label: null,
        size: null,
        hierarchy: null,
        icon: null,
        style_blocked: !1,
        hasTopSeparator: !1,
        buttonProps: {},
        isLoading: !1,
        saveFrontendStatsd: null,
        target: null,
        called_from: null,
      };
      const _ = p;
    },
  },
]);
//# sourceMappingURL=builders-build-button-action.ece48a2e.js.map
