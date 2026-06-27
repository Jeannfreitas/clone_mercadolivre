"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [78333],
  {
    90278(e, l, a) {
      a.d(l, {
        Co: () => Rl,
        IY: () => jl,
        Mg: () => B,
        Pj: () => Xl,
        Z4: () => ql,
        gm: () => Fl,
        h9: () => Gl,
        is: () => V,
        j4: () => Ol,
        s$: () => $,
        ui: () => Wl,
        xD: () => pl,
      });
      var t = a(89379),
        s = a(4177),
        i = a(96540),
        n = a(20551),
        o = a(80045),
        r = a(46942),
        c = a.n(r),
        u = a(15841),
        m = a(49306),
        d = a(36402),
        _ = a(9924),
        p = a(93603),
        g = a(8257),
        b = a(16030),
        h = a(74848),
        x = a(91889),
        f = a(67402),
        y = a(79954),
        v = a(14269),
        N = a(17376),
        C = a(92275),
        A = a(93265),
        T = a(37808),
        L = a(44344),
        S = a(93131),
        j = a(61678),
        w = a(17939);
      const I = ["price"],
        $ = (e) => {
          let { price: l } = e,
            a = (0, o.A)(e, I);
          if (!l) return null;
          const {
              currency_symbol: s,
              original_value: i,
              original_value_suffix: n,
              original_value_type: r,
              value: c,
              value_suffix: u,
              label: m,
              billing: d,
              bulk_sales_unit: _,
              bulk_sales: p,
              price_reference: g,
              bottom_label: b,
              widget: h,
              value_prefix: x,
              alignments: f,
            } = l,
            {
              subtitles: y,
              upper_label: v,
              discount_label: N,
              discount_label_secondary: C,
              discount_label_subtitle: A,
            } = a;
          if (p) {
            const {
              original_value: e,
              value: l,
              color: o,
              text: c,
              accessibility_text: _,
            } = p;
            return (0, t.A)(
              (0, t.A)({}, a),
              {},
              {
                currencySymbol: s,
                originalValue: null != e ? e : i,
                value: l,
                label: m,
                billing: d,
                upperLabel: v,
                discountLabel: N,
                discountLabelSecondary: C,
                bulkSalesUnit: {
                  hasUnits: !0,
                  color: o,
                  text: c,
                  accessibilityText: _,
                },
                discountLabelSubtitle: A,
                priceReference: g,
                originalValueSuffix: n,
                originalValueType: r,
                valueSuffix: u,
                subtitles: y,
                bottomLabel: b,
                valuePrefix: x,
                alignments: f,
              }
            );
          }
          return (0, t.A)(
            {
              currencySymbol: s,
              originalValue: i,
              value: c,
              label: m,
              billing: d,
              upperLabel: v,
              discountLabel: N,
              discountLabelSecondary: C,
              bulkSalesUnit: _,
              discountLabelSubtitle: A,
              subtitles: y,
              priceReference: g,
              originalValueSuffix: n,
              originalValueType: r,
              valueSuffix: u,
              bottomLabel: b,
              widget: h,
              valuePrefix: x,
              alignments: f,
            },
            a
          );
        },
        P = "MAIN",
        k = "PREVIOUS",
        z = "POSITIVE",
        M = "NEGATIVE",
        D = { [P]: "type-main", [k]: "type-previous" },
        O = { ",": "comma", ".": "dot" },
        V = (e, l) => {
          if ((!e && 0 !== e) || !l) return "";
          return Math.floor(e)
            .toString()
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, (e) => `${e}${l}`);
        },
        B = function (e) {
          let l =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (!e && 0 !== e) return "";
          const a = e.toFixed(2).split(".")[1];
          return "00" !== a || l ? a : "";
        },
        R = (e) => {
          switch (e) {
            case P:
              return D[P];
            case k:
              return D[k];
            default:
              return null;
          }
        },
        U = (e) => {
          switch (e) {
            case z:
            case M:
              return !1;
            default:
              return !0;
          }
        },
        E = (e, l, a) => {
          var t;
          return null != e && e.hasUnits
            ? `${a}__bulk-subtitles`
            : null != l && null !== (t = l[0]) && void 0 !== t && t.margin
            ? `${a}__subtitles ${a}__subtitles--margin-own`
            : `${a}__subtitles`;
        },
        W = "ui-pdp-price",
        F = "loyalty_discount_tooltip",
        G = "buy_loyalty_level_tooltip",
        H = "currency_tooltip",
        q = (e) => {
          let { text: l, chevronIconId: a } = e;
          return (0, h.jsxs)("span", {
            children: [" ", l, " ", (0, h.jsx)(d.In, { id: a }), " "],
          });
        },
        K = {
          [F]: (e) => {
            const { title: l, icon: a } = e,
              {
                containerClassName: s,
                contentClassName: i,
                testId: n,
                titleAs: o,
              } = ((e) => {
                let { id: l } = e;
                return {
                  containerClassName: `${W}__tooltip-${l}`,
                  contentClassName: `${l}__content`,
                  testId: "loyalty-discount-tooltip",
                  titleAs: "span",
                };
              })(e);
            return (0, h.jsxs)("div", {
              "data-testid": n,
              className: s,
              children: [
                a && (0, h.jsx)(d.In, (0, t.A)({}, a)),
                (0, h.jsx)(p.G, (0, t.A)({ as: o, className: i }, l)),
              ],
            });
          },
          [G]: (e) => {
            const { title: l, icon: a, action: s, closeModalLabel: i } = e,
              {
                containerClassName: n,
                contentClassName: o,
                modalClassName: r,
                testId: c,
                titleAs: u,
                iframeTitle: _,
                iframeScrolling: b,
                iframeHeight: x,
                autoHeight: f,
                chevronIconId: y,
              } = ((e) => {
                let { id: l } = e;
                return {
                  containerClassName: `${W}__tooltip-${l}`,
                  contentClassName: `${l}__content`,
                  modalClassName: `${W}__buy-loyalty-modal`,
                  testId: "buy-loyalty-tooltip",
                  titleAs: "span",
                  iframeTitle: null,
                  iframeScrolling: "no",
                  iframeHeight: 525,
                  autoHeight: !1,
                  chevronIconId: "chevron",
                };
              })(e);
            return (0, h.jsxs)("div", {
              "data-testid": c,
              className: n,
              children: [
                a && (0, h.jsx)(d.In, (0, t.A)({}, a)),
                (0, h.jsxs)("div", {
                  className: o,
                  children: [
                    (0, h.jsx)(p.G, (0, t.A)({ as: u }, l)),
                    (0, h.jsx)(g.cX, {
                      modalClassName: r,
                      url: s.target,
                      componentAsLabel: (0, h.jsx)(q, {
                        text: s.label.text,
                        chevronIconId: y,
                      }),
                      autoHeight: f,
                      closeModalLabel: i,
                      children: (0, h.jsx)(m.v, {
                        title: _,
                        src: s.target,
                        scrolling: b,
                        height: x,
                      }),
                    }),
                  ],
                }),
              ],
            });
          },
          [H]: (e) => {
            const { title: l, action: a = null } = e,
              {
                containerClassName: s,
                titleClassName: i,
                subtitleClassName: n,
                actionClassName: o,
                testId: r,
                titleAs: c,
                subtitleAs: u,
                processedSubtitles: m,
                actionHtmlTarget: d,
              } = ((e) => {
                let { id: l, subtitles: a = [], action: s = null } = e;
                return {
                  containerClassName: `${W}__tooltip-${l}`,
                  titleClassName: `${W}__tooltip-${l}__title`,
                  subtitleClassName: `${W}__tooltip-${l}__subtitle`,
                  actionClassName: `${W}__tooltip-${l}__action`,
                  testId: "currency-tooltip",
                  titleAs: "p",
                  subtitleAs: "p",
                  processedSubtitles: a.map((e) =>
                    (0, t.A)(
                      (0, t.A)({}, e),
                      {},
                      { enhancedText: b.I.jsx(e.text) }
                    )
                  ),
                  actionHtmlTarget: null == s ? void 0 : s.html_target,
                };
              })(e);
            return (0, h.jsxs)("div", {
              "data-testid": r,
              className: s,
              children: [
                (0, h.jsx)(p.G, (0, t.A)({ className: i, as: c }, l)),
                m.map((e) =>
                  (0, h.jsx)(p.G, {
                    className: n,
                    as: u,
                    color: e.color,
                    font_size: e.font_size,
                    font_family: e.font_family,
                    text: e.enhancedText,
                  })
                ),
                a &&
                  (0, h.jsx)(
                    _.TP,
                    (0, t.A)(
                      (0, t.A)({ className: o }, a),
                      {},
                      { htmlTarget: d }
                    )
                  ),
              ],
            });
          },
        },
        X = (e) => {
          const l = ((e, l) => {
            if (!e) return null;
            const a = l[e.id];
            return a ? { Component: a, tooltip: e } : null;
          })(e, K);
          if (!l) return null;
          const { Component: a, tooltip: s } = l;
          return (0, h.jsx)(a, (0, t.A)({}, s));
        },
        { SIDE: Z, TRIGGER: J } = u.Sl,
        Y = "ui-pdp-price",
        Q = (e, l) =>
          e ? (0, t.A)((0, t.A)({}, e), {}, { modifier: R(l) }) : null,
        ee = (e) => {
          var l, a;
          const {
              className: t = "",
              size: s = null,
              modifier: i = null,
              upperLabel: o = null,
              currencySymbol: r,
              originalValue: c = null,
              originalValueSuffix: u = null,
              originalValueType: m = null,
              bulkSalesUnit: d = null,
              subtitles: _ = null,
              tooltip: p = null,
              price_tags: g = null,
              discounts_tags: b = null,
              volume_discount_tags: h = null,
              plus_button: x = null,
              cards_credits_component: f = null,
              credits_consumer: y = null,
              widget: v = null,
              widget_v2: N = null,
              action: C = null,
              priceReference: A = null,
              rangePrice: T = null,
              closeModalLabel: L,
              original_value_num_font_size: S = n.wS.ORIGINAL_DEFAULT,
              billing: j = !1,
              shouldShowPriceExtra: w = !0,
              bold: I = !1,
              discountLabel: $ = null,
              meta: z = !1,
              discountLabelSubtitle: M = null,
              label: D = null,
              discount_num_font_size: O = n.gs.DEFAULT,
              discountLabelSecondary: V = null,
              value: B = null,
              valueSuffix: R = null,
              num_font_size: W = n.wS.DEFAULT,
              showOnDemandIframe: F = null,
              showOnDemandIframeParams: G = null,
              netPriceTax: H = null,
              bottomLabel: q = null,
              background_gradient: K = null,
              valuePrefix: X = null,
              alignments: Z = null,
              progress_bar_scarcity: J = null,
              font_family: ee = n.ok.WEIGHTS.SEMIBOLD,
              overtitles_components: le = null,
            } = e,
            { highlightSubtitles: ae, regularSubtitles: te } = ((e) =>
              e && Array.isArray(e)
                ? e.reduce(
                    (e, l) => (
                      l.has_highlighted
                        ? e.highlightSubtitles.push(l)
                        : e.regularSubtitles.push(l),
                      e
                    ),
                    { highlightSubtitles: [], regularSubtitles: [] }
                  )
                : { highlightSubtitles: [], regularSubtitles: [] })(_),
            se = Q(u, k),
            ie = Q(R, P),
            ne = ((e) => {
              let {
                className: l,
                size: a,
                modifier: t,
                bulkSalesUnit: s,
                subtitles: i,
                highlightSubtitles: n = [],
                layoutClassName: o = "",
              } = e;
              const r = Y,
                c = [r];
              return (
                o && c.push(o),
                l && c.push(l),
                a && c.push(`${r}--size-${a}`),
                t && c.push(`${r}--${t}`),
                {
                  namespace: Y,
                  containerClassName: c.join(" "),
                  mainContainerClassName: `${r}__main-container`,
                  upperLabelClassName: `${r}__upper mt-8`,
                  originalValueClassName: `${r}__original-value`,
                  bottomLabelClassName: `${r}__bottom-label`,
                  highlightSubtitlesClassName: E(null, n, r),
                  subtitlesClassName: E(s, i, r),
                }
              );
            })({
              className: t,
              size: s,
              modifier: i,
              bulkSalesUnit: d,
              subtitles: _,
              highlightSubtitles: ae,
            }),
            oe = U(m),
            re = N || v || y;
          return {
            shouldRender: !0,
            classNames: ne,
            processedProps: {
              size: s,
              modifier: i,
              bold: I,
              meta: z,
              billing: j,
              currencySymbol: r,
              value: B,
              originalValue: c,
              rangePrice: T,
              upperLabel: o,
              label: D,
              discountLabel: $,
              discountLabelSecondary: V,
              discountLabelSubtitle: M,
              bottomLabel: q,
              valuePrefix: X,
              originalValueSuffixLabel: se,
              valueSuffixLabel: ie,
              num_font_size: W,
              original_value_num_font_size: S,
              discount_num_font_size: O,
              bulkSalesUnit: d,
              priceReference: A,
              tooltip: p,
              background_gradient: K,
              hasHighlight: Boolean(
                null == K || null === (l = K.colors) || void 0 === l
                  ? void 0
                  : l.length
              ),
              alignments: Z,
              font_family: ee,
              shouldStrikeThrough: oe,
              highlightSubtitles: ae,
              regularSubtitles: te,
              subtitles: _,
              marginSubtitleFirstChild:
                null == _ || null === (a = _[0]) || void 0 === a
                  ? void 0
                  : a.margin,
              shouldShowPriceExtra: w,
              cards_credits_component: f,
              price_tags: g,
              discounts_tags: b,
              volume_discount_tags: h,
              plus_button: x,
              action: C,
              closeModalLabel: L,
              activeWidget: re,
              showOnDemandIframe: F,
              showOnDemandIframeParams: G,
              netPriceTax: H,
              progress_bar_scarcity: J,
              showProgressBarScarcity: Boolean(J),
              allowStandaloneSecondary: Boolean(le),
              overtitles_components: le,
              showStandaloneOriginalValue: !le && !!c,
              originalValuePartProps: c
                ? {
                    className: `${Y}__original-value`,
                    value: c,
                    currencySymbol: r,
                    rangePrice: T,
                    num_font_size: S,
                    strikeThrough: oe,
                    billing: j,
                    suffixLabel: se,
                  }
                : null,
            },
            subtitleFontSize: n.wS.PRODUCT_SUBTITLE,
          };
        },
        le = (e, l) =>
          e
            ? (0, t.A)(
                (0, t.A)({}, e),
                {},
                {
                  color: l,
                  text_icon: e.text_icon
                    ? (0, t.A)((0, t.A)({}, e.text_icon), {}, { color: l })
                    : e.text_icon,
                }
              )
            : null,
        ae = (e, l) =>
          l > 0 ? (0, t.A)((0, t.A)({}, e), {}, { marginRight: `${l}px` }) : e,
        te = (e, l) =>
          (0, t.A)({ width: `${e}%` }, l > 0 && { minWidth: `${l}px` }),
        se = "ui-pdp-progress-bar-scarcity",
        ie = function (e) {
          var l;
          let {
              value: a = 0,
              max: s = 100,
              bg_color: i = null,
              label: o = null,
              remaining_label: r = null,
              border_radius: u = null,
              width: m = null,
              height: d = null,
              layout_config: _ = null,
              accessibility_text: p = null,
            } = e,
            { gradientStyle: g } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          const b = s > 0 ? Math.min(Math.max((a / s) * 100, 0), 100) : 0,
            h = 100 - b,
            x = b > 0 ? 5e3 / b + "%" : "50%",
            f = h > 0 ? (100 * (50 - b)) / h + "%" : "50%",
            y = ((e) => {
              const l = Object.entries(e).reduce((e, l) => {
                let [a, t] = l;
                return null != t && (e[a] = `${t}px`), e;
              }, {});
              return Object.keys(l).length > 0 ? l : void 0;
            })({
              marginTop:
                null !== (l = null == _ ? void 0 : _.margin_top) && void 0 !== l
                  ? l
                  : null,
              borderRadius: u,
              width: m,
              height: d,
            }),
            v = ((e, l) =>
              e
                ? !e.text_icon && null != l && l.text_icon
                  ? (0, t.A)(
                      (0, t.A)({}, e),
                      {},
                      {
                        text_icon: (0, t.A)(
                          (0, t.A)({}, l.text_icon),
                          {},
                          { color: e.color }
                        ),
                      }
                    )
                  : e
                : le(l, "TEXT_SECONDARY"))(r, o),
            N = ((e, l) =>
              null == e ? 0 : null != l ? Math.min(e, l / 2) : e)(u, d);
          return {
            percentage: b,
            containerClassName: c()(se, (0, n.oR)(i)),
            containerStyle: y,
            trackClassName: `${se}__track`,
            trackStyle: ae(g, N),
            remainingClassName: `${se}__remaining`,
            remainingStyle: te(h, N),
            showFillClip: Boolean(o && b > 0),
            showRemainClip: Boolean(v && h > 0),
            fillClipClassName: c()(
              `${se}__label-clip`,
              `${se}__label-clip--fill`
            ),
            fillClipStyle: { width: `${b}%` },
            remainClipClassName: c()(
              `${se}__label-clip`,
              `${se}__label-clip--remaining`
            ),
            remainClipStyle: { left: `${b}%` },
            labelClassName: `${se}__label`,
            fillLabelStyle: { left: x },
            fillLabelProps: le(o, "WHITE"),
            remainLabelStyle: { left: f },
            remainLabelProps: v,
            accessibilityText: p,
          };
        },
        ne = ["background_gradient", "viewport_track"],
        oe = (e) => {
          var l, a;
          let { background_gradient: s, viewport_track: i } = e,
            n = (0, o.A)(e, ne);
          const r = (0, x.FU)(s),
            c = (0, x.su)(
              null != i ? i : null,
              {},
              null !==
                (l =
                  null == i || null === (a = i.melidata_event) || void 0 === a
                    ? void 0
                    : a.type) && void 0 !== l
                ? l
                : ""
            ),
            {
              percentage: u,
              containerClassName: m,
              containerStyle: d,
              trackClassName: _,
              trackStyle: p,
              remainingClassName: g,
              remainingStyle: b,
              showFillClip: y,
              showRemainClip: v,
              fillClipClassName: N,
              fillClipStyle: C,
              remainClipClassName: A,
              remainClipStyle: T,
              labelClassName: L,
              fillLabelStyle: S,
              fillLabelProps: j,
              remainLabelStyle: w,
              remainLabelProps: I,
              accessibilityText: $,
            } = ie(n, { gradientStyle: r });
          return (0, h.jsxs)("div", {
            ref: c,
            role: "progressbar",
            "aria-label": $,
            "aria-valuenow": u,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            className: m,
            style: d,
            children: [
              (0, h.jsx)("div", { className: _, style: p }),
              (0, h.jsx)("div", { className: g, style: b }),
              y &&
                (0, h.jsx)("div", {
                  className: N,
                  style: C,
                  children: (0, h.jsx)("div", {
                    className: L,
                    style: S,
                    children: (0, h.jsx)(f.JU, (0, t.A)({}, j)),
                  }),
                }),
              v &&
                (0, h.jsx)("div", {
                  className: A,
                  style: T,
                  children: (0, h.jsx)("div", {
                    className: L,
                    style: w,
                    children: (0, h.jsx)(f.JU, (0, t.A)({}, I)),
                  }),
                }),
            ],
          });
        },
        re = (e) => {
          let { show: l = !1, bottomLabel: a = null, className: s = "" } = e;
          return l && a ? (0, h.jsx)(y.s, (0, t.A)({ className: s }, a)) : null;
        },
        ce = (e) => {
          let {
            label: l = "",
            amount: a = null,
            meta: t = !1,
            className: s = "",
            centsType: i = "superscript",
            num_font_size: n = null,
            showCurrencyText: o = !1,
          } = e;
          return (0, h.jsxs)(h.Fragment, {
            children: [
              (0, h.jsx)(N.s, { children: l }),
              (0, h.jsx)(v.BH, {
                className: c()("ui-pdp-price__part", s),
                centsType: i,
                showCurrencyText: o,
                value: {
                  fraction: null == a ? void 0 : a.fraction,
                  cents: null == a ? void 0 : a.cents,
                },
                symbol: null == a ? void 0 : a.symbol,
                meta: t,
                size: 22 === n ? 24 : n,
                compact: !0,
              }),
            ],
          });
        },
        ue = function (e) {
          let l =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const { staticProps: a } = (0, s.HZ)(),
            {
              country: { thousands_separator: t, decimal_separator: n },
              forceCents: o,
            } = a;
          return {
            intFraction: (0, i.useMemo)(() => V(e, t), [e, t]),
            decimalFraction: (0, i.useMemo)(() => B(e, o), [e, o]),
            centsType: (0, i.useMemo)(
              () =>
                (null == l ? void 0 : l.num_font_size) < 16 ||
                (null != l && l.billing)
                  ? O[null == n ? void 0 : n.toString()]
                  : "superscript",
              [n, l.num_font_size, l.billing]
            ),
          };
        },
        me = "ui-pdp-price__part",
        de = (e) => {
          const {
              minimumPrice: l,
              maximumPrice: a,
              labelMinimum: t,
              labelMaximum: s,
              concatSymbol: i,
              meta: n,
              disabled: o,
              currencySymbol: r,
              showDecimals: c,
              numFontSize: u,
              centsType: m,
              symbolText: d,
              showCurrencyText: _,
              minimumClassName: p,
              maximumClassName: g,
              concatClassName: b,
              concatStyle: x,
            } = ((e) => {
              let {
                minimum_price: l = 0,
                maximum_price: a = 0,
                label_minimum: t = "",
                label_maximum: s = "",
                concat_symbol: i = "",
                meta: n = !1,
                disabled: o = !1,
                currencySymbol: r = "",
                showDecimals: c = !1,
                num_font_size: u = null,
                centsType: m = "superscript",
              } = e;
              return {
                namespace: me,
                minimumPrice: l,
                maximumPrice: a,
                labelMinimum: t,
                labelMaximum: s,
                concatSymbol: i,
                meta: n,
                disabled: o,
                currencySymbol: r,
                centsType: m,
                numFontSize: u,
                showDecimals: c,
                symbolText: "",
                showCurrencyText: !0,
                minimumClassName: `${me}-minimum-price`,
                maximumClassName: `${me}-maximum-price`,
                concatClassName: `${me}-concat-symbol-${u}`,
                concatStyle: { fontSize: u },
              };
            })(e),
            { intFraction: f, decimalFraction: y } = ue(a),
            { intFraction: v, decimalFraction: N } = ue(l);
          return (0, h.jsxs)("span", {
            children: [
              (0, h.jsx)(ce, {
                label: t,
                amount: {
                  fraction: v,
                  symbol: r,
                  symbol_text: d,
                  cents: c ? N : null,
                },
                centsType: m,
                num_font_size: u,
                disabled: o,
                meta: n,
                className: p,
              }),
              (0, h.jsx)("span", { className: b, style: x, children: i }),
              (0, h.jsx)(ce, {
                label: s,
                amount: {
                  fraction: f,
                  symbol: r,
                  symbol_text: d,
                  cents: c ? y : null,
                },
                showCurrencyText: _,
                centsType: m,
                num_font_size: u,
                disabled: o,
                meta: n,
                className: g,
              }),
            ],
          });
        },
        _e = ["key"],
        pe = "ui-pdp-price__part",
        ge = (e) => {
          const { value: l, currencySymbol: a } = e,
            {
              shouldRender: s,
              dataTestId: i,
              containerClassName: r,
              prefixClassName: u,
              prefixAs: m,
              showPrefix: d,
              showSuffix: _,
              suffixLabelClassName: g,
              moneyAmountClassName: x,
              moneyAmountSize: f,
              moneyAmountWeight: N,
              moneyAmountCompact: C,
              moneyAmountPrevious: A,
              rangePriceDisabled: T,
              showDecimalCents: L,
              suffixText: S,
              meta: j,
              rangePrice: w,
              num_font_size: I,
              billing: $,
              suffixLabel: P,
              prefixLabel: k,
              prefixLabelText: z,
            } = ((e) => {
              let {
                value: l,
                suffix: a = null,
                className: t = "",
                meta: s = !1,
                rangePrice: i = null,
                billing: r = !1,
                suffixLabel: u = null,
                prefixLabel: m = null,
                alignments: d = null,
                num_font_size: _ = null,
                font_family: p = n.ok.WEIGHTS.REGULAR,
                strikeThrough: g = !1,
                showDecimals: h = !0,
              } = e;
              return {
                shouldRender: null != l,
                namespace: pe,
                dataTestId: "price-part",
                meta: s,
                rangePrice: i,
                billing: r,
                suffixLabel: u,
                prefixLabel: m ? ((x = m), (0, o.A)(x, _e)) : null,
                prefixLabelText: m ? b.I.jsx(m.text, m.values) : null,
                num_font_size: _,
                containerClassName: c()(`${pe}__container`, {
                  [`${pe}__container--flex`]: !!u || !!m,
                }),
                prefixClassName: m
                  ? c()(
                      `${pe}__prefix`,
                      `${pe}__prefix--alignment-${
                        (null == d ? void 0 : d.prefix) || "BASELINE"
                      }`
                    )
                  : "",
                prefixAs: "p",
                showPrefix: !!m,
                showSuffix: !!u,
                suffixLabelClassName: u
                  ? c()(
                      `${pe}__suffix-label`,
                      `${pe}__suffix-label--${u.modifier}`,
                      `${pe}__suffix-label--alignment-${
                        (null == d ? void 0 : d.suffix) || "CENTER"
                      }`
                    )
                  : "",
                moneyAmountClassName: c()(pe, t),
                moneyAmountSize: 22 === _ ? 24 : _,
                moneyAmountWeight: p.toLowerCase(),
                moneyAmountCompact: !0,
                moneyAmountPrevious: g,
                rangePriceDisabled: g,
                showDecimalCents: h,
                suffixText: null == a ? void 0 : a.replace(/^\/(.*)/, "$1"),
              };
              var x;
            })(e);
          if (!s) return null;
          const {
            intFraction: M,
            decimalFraction: D,
            centsType: O,
          } = ue(l, { num_font_size: I, billing: $ });
          return (0, h.jsxs)("span", {
            "data-testid": i,
            className: r,
            children: [
              d &&
                (0, h.jsx)(
                  p.G,
                  (0, t.A)(
                    {
                      className: u,
                      as: m,
                      color: k.color,
                      font_family: k.font_family,
                      font_size: k.font_size,
                      "aria-label": k.accessibility_text,
                      text: z,
                    },
                    k
                  )
                ),
              w
                ? (0, h.jsx)(
                    de,
                    (0, t.A)(
                      (0, t.A)({}, w),
                      {},
                      {
                        meta: j,
                        disabled: T,
                        currencySymbol: a,
                        showDecimals: L,
                        num_font_size: I,
                        centsType: O,
                      }
                    )
                  )
                : (0, h.jsx)(v.BH, {
                    size: f,
                    weight: N,
                    className: x,
                    value: { fraction: M, cents: L ? D : null },
                    symbol: a,
                    suffix: S,
                    centsType: O,
                    previous: A,
                    meta: j,
                    billing: $,
                    compact: C,
                  }),
              _ && (0, h.jsx)(y.s, (0, t.A)({ className: g }, P)),
            ],
          });
        },
        be = (e) => {
          var l;
          let { children: a, namespace: t = "", background_gradient: s } = e;
          const i = (0, x.FU)(s);
          return null != s &&
            null !== (l = s.colors) &&
            void 0 !== l &&
            l.length
            ? (0, h.jsx)("div", {
                className: `${t}__highlight`,
                style: i,
                children: a,
              })
            : a;
        },
        he = [
          "text",
          "values",
          "color",
          "bg_color",
          "font_family",
          "font_size",
          "num_font_size",
          "className",
          "text_icon",
        ],
        xe = (e) => {
          const {
            showIconLabel: l,
            iconLabelProps: a,
            styledLabelProps: s,
          } = ((e) => {
            let {
                text: l = null,
                values: a = null,
                color: s = "SMALL",
                bg_color: i = null,
                font_family: n = "REGULAR",
                font_size: r = "MEDIUM",
                num_font_size: u = null,
                className: m = "",
                text_icon: d = null,
              } = e,
              _ = (0, o.A)(e, he);
            const p = !!d;
            return p
              ? {
                  showIconLabel: p,
                  iconLabelProps: (0, t.A)(
                    {
                      className: m,
                      text: l,
                      values: a,
                      text_icon: d,
                      color: s,
                      bg_color: i,
                      font_family: n,
                      font_size: r,
                      num_font_size: u,
                    },
                    _
                  ),
                }
              : {
                  showIconLabel: p,
                  styledLabelProps: (0, t.A)(
                    {
                      className: c()(m, {
                        "ui-pdp-price-subtitle--background": i,
                      }),
                      as: "p",
                      color: s,
                      bg_color: i,
                      font_family: n,
                      font_size: r,
                      text: b.I.jsx(l, a, null, u),
                    },
                    _
                  ),
                };
          })(e);
          return l
            ? (0, h.jsx)(y.s, (0, t.A)({}, a))
            : (0, h.jsx)(p.G, (0, t.A)({}, s));
        },
        fe = (e) => {
          const {
              tooltipClassName: l,
              textClassName: a,
              subtitlesClassName: t,
              iconId: s,
              iconClassName: o,
              enhancedText: r,
              getContainerClassName: u,
              tooltipSide: m,
              tooltipTrigger: _,
              tooltipClosable: p,
              testId: g,
              showSubtitles: x,
              tooltipSubtitles: f,
              createHandlers: y,
              srLabel: v,
            } = ((e) => {
              let {
                className: l = "",
                namespace: a = "",
                text: t = "",
                color: s = "",
                values: i = {},
                side: o,
                trigger: r,
                tooltip: u,
              } = e;
              const m = `${a}__price-ref`,
                d = (null == u ? void 0 : u.subtitles) || [];
              return {
                priceNamespace: m,
                tooltipClassName: c()(m, l),
                textClassName: c()(`${m}-text`, (0, n.op)(s)),
                subtitlesClassName: `${m}__subtitles`,
                iconId: "price_info",
                iconClassName: (0, n.op)("BLUE"),
                enhancedText: b.I.jsx(t, i),
                getContainerClassName: (e) => `${m} ${e ? "displace" : ""} `,
                tooltipSide: o || "left",
                tooltipTrigger: r || "click",
                tooltipClosable: !0,
                testId: "ui-pdp-price__price-ref",
                showSubtitles: d.length > 0,
                tooltipSubtitles: d.map((e) => {
                  let { text: l, color: a } = e;
                  return { text: l, className: (0, n.op)(a) };
                }),
                createHandlers: (e, l) => ({
                  onClose: () => {
                    e(!1);
                  },
                  onClick: () => {
                    e(!l);
                  },
                }),
                srLabel: t,
              };
            })(e),
            [N, A] = (0, i.useState)(!1),
            { onClose: T, onClick: L } = y(A, N);
          return (0, h.jsx)("div", {
            className: u(N),
            children: (0, h.jsx)(C.m, {
              className: l,
              content:
                x &&
                (0, h.jsx)("div", {
                  className: t,
                  children: f.map((e) => {
                    let { text: l, className: a } = e;
                    return (0, h.jsx)("span", { className: a, children: l }, l);
                  }),
                }),
              srLabel: v,
              side: m,
              open: N,
              trigger: _,
              closable: p,
              onClose: T,
              children: (0, h.jsxs)("div", {
                onClick: L,
                "data-testid": g,
                children: [
                  (0, h.jsx)("span", { className: a, children: r }),
                  (0, h.jsx)(d.In, { id: s, className: o }),
                ],
              }),
            }),
          });
        },
        ye = 2e3,
        ve = { threshold: 0.1 },
        Ne = "ui-vpp-payment-promotion",
        Ce = (e) => {
          var l;
          let { dynamic_benefits: a, interval: t = ye } = e;
          const s = (0, i.useRef)(null),
            [n] = (0, x.BL)(s, ve),
            o = (0, x.GF)(
              null !== (l = null == a ? void 0 : a.length) && void 0 !== l
                ? l
                : 0,
              t,
              !n
            );
          if (!a || 0 === a.length) return null;
          const r = null !== o ? a[o] : null;
          return (0, h.jsx)("div", {
            ref: s,
            className: `${Ne}__dynamic-benefits`,
            children:
              r &&
              (0, h.jsx)(
                p.G,
                {
                  className: c()(`${Ne}__dynamic-benefit`),
                  color: r.color,
                  font_family: r.font_family,
                  font_size: r.font_size,
                  as: "p",
                  "aria-label": r.accessibility_text,
                  children: b.I.jsx(r.text, r.values),
                },
                o
              ),
          });
        };
      Ce.defaultProps = { dynamic_benefits: null, interval: ye };
      const Ae = "ui-vpp-payment-promotion",
        Te = [],
        Le = () => {},
        Se = (e) => {
          if (!e) return { ariaLabel: void 0 };
          const { accessibility_text: l, title: a, label: t } = e || {};
          return {
            ariaLabel: l || a || (null == t ? void 0 : t.text) || void 0,
          };
        },
        je = ["action", "handleClick"],
        we = (e) => {
          let { action: l, handleClick: a } = e,
            s = (0, o.A)(e, je);
          const { ariaLabel: i } = Se(l),
            { html_target: n, target: r, href: c, label: u } = l || {},
            m = c || r || void 0,
            d = n || void 0;
          return (0, h.jsx)("div", {
            className: `${Ae}__container-button`,
            children: (0, h.jsx)(
              T.$n,
              (0, t.A)(
                (0, t.A)({}, s),
                {},
                {
                  "aria-label": i,
                  href: m,
                  target: d,
                  size: "medium",
                  onClick: a,
                  "data-testid": "payment-promotion-button-action",
                  children: null == u ? void 0 : u.text,
                }
              )
            ),
          });
        },
        Ie = ["action", "handleClick"],
        $e = (e) => {
          let { action: l, handleClick: a } = e,
            s = (0, o.A)(e, Ie);
          const { ariaLabel: i } = Se(l),
            n =
              (null == l ? void 0 : l.href) ||
              (null == l ? void 0 : l.target) ||
              void 0,
            r = (null == l ? void 0 : l.html_target) || "_self";
          return (0, h.jsxs)(L.fI, {
            children: [
              (0, h.jsx)(
                _.TP,
                (0, t.A)(
                  (0, t.A)((0, t.A)({}, s), l),
                  {},
                  {
                    className: c()(`${Ae}__action`),
                    htmlTarget: null == l ? void 0 : l.html_target,
                    title: i,
                    "aria-label": i,
                  }
                )
              ),
              (0, h.jsx)("a", {
                href: n,
                target: r,
                className: c()(`${Ae}__action__icon`),
                onClick: a,
                "data-testid": "payment-promotion-link-action",
                children: (0, h.jsx)(d.In, { id: "right_arrow" }),
              }),
            ],
          });
        },
        Pe = ["action", "as", "handleClick"],
        ke = (e) => {
          let { action: l, as: a, handleClick: s } = e,
            i = (0, o.A)(e, Pe);
          const n = ["a", "button"].includes(a) ? a : "a",
            r = ((e) => {
              let {
                action: l,
                componentType: a,
                namespace: t,
                handleClick: s = Le,
              } = e;
              if (!l) return null;
              const { ariaLabel: i } = Se(l),
                { html_target: n, target: o, href: r } = l || {},
                c = {
                  className: `${t}__action_button_chevron`,
                  onClick: s,
                  "aria-label": i,
                };
              return (
                "a" === a &&
                  l &&
                  ((c.href = r || o || void 0), (c.target = n || "_self")),
                c
              );
            })({ action: l, componentType: n, namespace: Ae, handleClick: s });
          return (0, h.jsx)(
            n,
            (0, t.A)(
              (0, t.A)((0, t.A)({}, i), r),
              {},
              {
                "data-testid": "payment-promotion-chevron-action",
                children: (0, h.jsx)(d.In, { id: "chevron" }),
              }
            )
          );
        },
        ze = (e) => {
          null != e && e.track && (0, n.sx)(e.track);
        },
        Me = (e, l, a, t, s, i) => {
          const n = Object.fromEntries(
              Object.entries(s).map((e) => {
                let [l, a] = e;
                return [l, a.toUpperCase()];
              })
            ),
            o = Boolean(null == l ? void 0 : l.type),
            r = o ? l.type.toUpperCase() : "",
            c = null != l && l.action_type ? l.action_type.toUpperCase() : "",
            u = c === n.LINK,
            m = a === t.acquisition,
            d = a === t.activation,
            _ = a === t.splitPayments,
            p = a === t.genericWidget,
            g = "acquisition" === e,
            b = "mercado_pago" === e,
            h = r === n.LINK,
            x = u && _;
          return {
            legacyActionTypeUpper: r,
            actionTypeUpper: c,
            acquisitionType: m,
            activationType: d,
            splitPaymentsType: _,
            genericWidget: p,
            withLegacyLink: h,
            isAcquisitionWidget: g,
            isMercadoPAgoWidget: b,
            isChevronAction: (u && !_) || (i && (!o || !u)),
            isButtonAction: r === n.BUTTON || c === n.BUTTON,
            isLinkAction: h || c === n.LINK,
            isSplitChevronAction: x,
            isWidgetWithModalAction: p && (g || b),
          };
        },
        De = {
          MLA: "Combiná dos medios de pago",
          MLB: "Combine dois meios de pagamento",
          MLM: "Combina dos medios de pago",
        },
        Oe = (e) => {
          let l,
            a,
            {
              action: s,
              site: i,
              isChevronAction: n,
              isButtonAction: o,
              isLinkAction: r,
              isSplitChevronAction: c,
              isWidgetWithModalAction: u,
              isBottomSheet: m,
              showOnDemandIframe: d = Le,
            } = e;
          if (!s) return null;
          const _ = {
            title: s.title || s.accessibility_text || void 0,
            "aria-label": s.accessibility_text || s.title || void 0,
            id: s.id,
          };
          return (
            u && m
              ? ((l = we),
                (a = {
                  action: (0, t.A)(
                    (0, t.A)({}, s),
                    {},
                    { html_target: null, href: null, target: null }
                  ),
                  as: "button",
                  handleClick: (e) => {
                    null != e && e.preventDefault && e.preventDefault(),
                      d({
                        target: null == s ? void 0 : s.target,
                        params: {
                          namespace: "generic-widget",
                          renderMode: "centered",
                          title: null,
                        },
                      }),
                      ze(s);
                  },
                }))
              : c
              ? ((l = ke),
                (a = {
                  as: "button",
                  action: s,
                  handleClick: () => {
                    d({
                      target: null == s ? void 0 : s.target,
                      title: De[i],
                      params: { namespace: "split-payments" },
                    }),
                      ze(s);
                  },
                }))
              : n
              ? (l = ke)
              : r
              ? (l = $e)
              : o && (l = we),
            l
              ? (null != a || (a = { action: s, handleClick: () => ze(s) }),
                (0, h.jsx)(l, (0, t.A)((0, t.A)({}, a), _)))
              : null
          );
        },
        Ve = (0, i.memo)(Oe),
        { actionTypes: Be, widgetTypes: Re } = n.AA,
        Ue = (e) => {
          const {
              containerClassName: l,
              titleClassName: a,
              bodyClassName: s,
              iconContainerClassName: i,
              textContainerClassName: o,
              iconClassName: r,
              showIcons: u,
              iconsList: m,
              processedTexts: _,
              styledLabelAs: g,
              iconLazy: f,
              title: y,
              action: v,
              site: N,
              background_gradient: C,
              isBottomSheet: T,
              showOnDemandIframe: L,
              isChevronAction: S,
              isButtonAction: j,
              isLinkAction: w,
              isSplitChevronAction: I,
              isWidgetWithModalAction: $,
              dynamic_benefits: P,
            } = ((e) => {
              let {
                id: l = null,
                acquisition: a = null,
                type: s = null,
                texts: i = Te,
                icons: o = null,
                icon: r = null,
                chevron: u = !1,
                action: m = null,
                title: d = null,
                site: _ = null,
                background_color: p = null,
                background_gradient: g = null,
                has_shadow: h = !1,
                is_bottom_sheet: x = !1,
                showOnDemandIframe: f = Le,
                dynamic_benefits: y = null,
              } = e;
              const {
                acquisitionType: v,
                activationType: N,
                splitPaymentsType: C,
                genericWidget: A,
                withLegacyLink: T,
                isChevronAction: L,
                isButtonAction: S,
                isLinkAction: j,
                isSplitChevronAction: w,
                isWidgetWithModalAction: I,
              } = Me(l, m, s, Re, Be, u);
              return {
                containerClassName: c()({
                  [`${Ae}`]: !0,
                  acquisition: v || a,
                  activation: N,
                }),
                titleClassName: c()(`${Ae}__title`),
                bodyClassName: c()(
                  `${Ae}__container`,
                  (0, n.oR)(p),
                  { "split-payments": C },
                  { "generic-widget": A },
                  { "generic-widget-animated": A && y },
                  { "with-link": T },
                  { elevated: h }
                ),
                iconContainerClassName: `${Ae}__container-icon`,
                textContainerClassName: c()(`${Ae}__container-text`),
                iconClassName: `${Ae}__icon`,
                showIcons: Boolean(o || r),
                iconsList: o || (r ? [r] : []),
                processedTexts:
                  null == i
                    ? void 0
                    : i.map((e) =>
                        (0, t.A)(
                          (0, t.A)({}, e),
                          {},
                          {
                            className: c()(
                              `${Ae}__text ${
                                null != e && e.classname ? e.classname : ""
                              }`
                            ),
                            enhancedContent: b.I.jsx(e.text, e.values),
                          }
                        )
                      ),
                styledLabelAs: "p",
                iconLazy: !0,
                title: d,
                action: m,
                site: _,
                background_gradient: g,
                isBottomSheet: x,
                showOnDemandIframe: f,
                isChevronAction: L,
                isButtonAction: S,
                isLinkAction: j,
                isSplitChevronAction: w,
                isWidgetWithModalAction: I,
                dynamic_benefits: y,
              };
            })(e),
            k = (0, x.FU)(C);
          return (0, h.jsxs)("div", {
            className: l,
            children: [
              y &&
                (0, h.jsx)(p.G, {
                  className: a,
                  color: y.color,
                  font_family: y.font_family,
                  font_size: y.font_size,
                  as: g,
                  text: y.text,
                }),
              (0, h.jsxs)("div", {
                style: (0, t.A)({}, k),
                className: s,
                children: [
                  (0, h.jsx)("div", {
                    className: i,
                    children:
                      u &&
                      (0, h.jsx)(A.k, { icons: m, iconClassName: r, lazy: f }),
                  }),
                  (0, h.jsxs)("div", {
                    className: o,
                    children: [
                      null == _
                        ? void 0
                        : _.map((e) =>
                            (0, h.jsx)(p.G, {
                              className: e.className,
                              color: e.color,
                              font_family: e.font_family,
                              font_size: e.font_size,
                              as: g,
                              text: (0, h.jsx)(d.In, (0, t.A)({}, e.text_icon)),
                              children: e.enhancedContent,
                            })
                          ),
                      (0, h.jsx)(Ce, { dynamic_benefits: P }),
                    ],
                  }),
                  (0, h.jsx)(Ve, {
                    action: v,
                    site: N,
                    isChevronAction: S,
                    isButtonAction: j,
                    isLinkAction: w,
                    isSplitChevronAction: I,
                    isWidgetWithModalAction: $,
                    isBottomSheet: T,
                    showOnDemandIframe: L,
                  }),
                ],
              }),
            ],
          });
        },
        Ee = (e) => {
          let {
            action: l,
            isChevronAction: a,
            isButtonAction: s,
            isLinkAction: i,
            isSplitChevronAction: n,
            isWidgetWithModalAction: o,
            isBottomSheet: r,
            showOnDemandIframe: c = Le,
            isAcquisitionWidget: u,
            isMercadoPAgoWidget: m,
          } = e;
          if (!l) return null;
          const { accessibility_text: d, title: _ } = l;
          let p, g;
          const b = { title: d || _ || void 0, "aria-label": d || _ || void 0 };
          return (
            o && r && u
              ? ((p = we),
                (g = {
                  action: (0, t.A)(
                    (0, t.A)({}, l),
                    {},
                    { html_target: null, href: null, target: null }
                  ),
                  handleClick: (e) => {
                    null != e && e.preventDefault && e.preventDefault(),
                      c({
                        target: null == l ? void 0 : l.target,
                        params: {
                          namespace: "credit-consumer",
                          renderMode: "container",
                          title: null,
                        },
                      }),
                      ze(l);
                  },
                }))
              : o && r && m
              ? ((p = we),
                (g = {
                  action: (0, t.A)(
                    (0, t.A)({}, l),
                    {},
                    { html_target: null, href: null, target: null }
                  ),
                  handleClick: (e) => {
                    null != e && e.preventDefault && e.preventDefault(),
                      c({
                        target: null == l ? void 0 : l.target,
                        params: {
                          namespace: "tcmp-widget",
                          renderMode: "fullscreen",
                          title: null,
                        },
                      }),
                      ze(l);
                  },
                }))
              : n
              ? ((p = ke),
                (g = {
                  as: "button",
                  action: l,
                  handleClick: () => {
                    c({
                      target: null == l ? void 0 : l.target,
                      params: {
                        namespace: "split-payments",
                        renderMode: "container",
                      },
                    }),
                      ze(l);
                  },
                }))
              : a
              ? (p = ke)
              : i
              ? (p = $e)
              : s && (p = we),
            p
              ? (null != g || (g = { action: l, handleClick: () => ze(l) }),
                (0, h.jsx)(p, (0, t.A)((0, t.A)({}, g), b)))
              : null
          );
        },
        We = (0, i.memo)(Ee),
        { actionTypes: Fe, widgetTypes: Ge } = n.AA,
        He = (e) => {
          const {
              containerClassName: l,
              titleClassName: a,
              bodyClassName: s,
              iconContainerClassName: i,
              textContainerClassName: o,
              iconClassName: r,
              showIcons: u,
              iconsList: m,
              processedTexts: _,
              styledLabelAs: g,
              iconLazy: f,
              title: y,
              action: v,
              chevron: N,
              background_gradient: C,
              isBottomSheet: T,
              showOnDemandIframe: L,
              splitPaymentsType: S,
              isChevronAction: j,
              isButtonAction: w,
              isLinkAction: I,
              isSplitChevronAction: $,
              isWidgetWithModalAction: P,
              isAcquisitionWidget: k,
              isMercadoPAgoWidget: z,
              dynamic_benefits: M,
            } = ((e) => {
              let {
                id: l = null,
                acquisition: a = null,
                type: s = null,
                texts: i = Te,
                icons: o = null,
                icon: r = null,
                chevron: u = !1,
                action: m = null,
                title: d = null,
                background_color: _ = null,
                background_gradient: p = null,
                has_shadow: g = !1,
                is_bottom_sheet: h = !1,
                showOnDemandIframe: x = Le,
                dynamic_benefits: f = null,
              } = e;
              const {
                acquisitionType: y,
                activationType: v,
                splitPaymentsType: N,
                genericWidget: C,
                isChevronAction: A,
                isButtonAction: T,
                isLinkAction: L,
                isSplitChevronAction: S,
                isWidgetWithModalAction: j,
                isAcquisitionWidget: w,
                isMercadoPAgoWidget: I,
              } = Me(l, m, s, Ge, Fe);
              return {
                containerClassName: c()({
                  [`${Ae}`]: !0,
                  acquisition: y || a,
                  activation: v,
                }),
                titleClassName: c()(`${Ae}__title`),
                bodyClassName: c()(
                  `${Ae}__container`,
                  (0, n.oR)(_),
                  { "split-payments": N },
                  { "generic-widget": C },
                  { "generic-widget-animated": C && f },
                  { elevated: g }
                ),
                iconContainerClassName: `${Ae}__container-icon`,
                textContainerClassName: c()(`${Ae}__container-text`),
                iconClassName: `${Ae}__icon`,
                showIcons: Boolean(o || r),
                iconsList: o || (r ? [r] : []),
                processedTexts:
                  null == i
                    ? void 0
                    : i.map((e) =>
                        (0, t.A)(
                          (0, t.A)({}, e),
                          {},
                          {
                            className: c()(
                              `${Ae}__text ${
                                null != e && e.classname ? e.classname : ""
                              }`
                            ),
                            enhancedContent:
                              null != e && e.text
                                ? b.I.jsx(e.text, e.values)
                                : null,
                          }
                        )
                      ),
                styledLabelAs: "p",
                iconLazy: !0,
                title: d,
                action: m,
                chevron: u,
                background_gradient: p,
                isBottomSheet: h,
                showOnDemandIframe: x,
                splitPaymentsType: N,
                isChevronAction: A,
                isButtonAction: T,
                isLinkAction: L,
                isSplitChevronAction: S,
                isWidgetWithModalAction: j,
                isAcquisitionWidget: w,
                isMercadoPAgoWidget: I,
                dynamic_benefits: f,
              };
            })(e),
            D = (0, x.FU)(C);
          return (0, h.jsxs)("div", {
            className: l,
            children: [
              y &&
                (0, h.jsx)(p.G, {
                  className: a,
                  color: y.color,
                  font_family: y.font_family,
                  font_size: y.font_size,
                  as: g,
                  text: y.text,
                }),
              (0, h.jsxs)("div", {
                style: (0, t.A)({}, D),
                className: s,
                children: [
                  (0, h.jsx)("div", {
                    className: i,
                    children:
                      u &&
                      (0, h.jsx)(A.k, { icons: m, iconClassName: r, lazy: f }),
                  }),
                  (0, h.jsxs)("div", {
                    className: o,
                    children: [
                      null == _
                        ? void 0
                        : _.map((e) =>
                            (0, h.jsx)(p.G, {
                              className: e.className,
                              color: e.color,
                              font_family: e.font_family,
                              font_size: e.font_size,
                              as: g,
                              text: (0, h.jsx)(d.In, (0, t.A)({}, e.text_icon)),
                              children: e.enhancedContent,
                            })
                          ),
                      (0, h.jsx)(Ce, { dynamic_benefits: M }),
                    ],
                  }),
                  (0, h.jsx)(We, {
                    action: v,
                    splitPaymentsType: S,
                    chevron: N,
                    isChevronAction: j,
                    isButtonAction: w,
                    isLinkAction: I,
                    isBottomSheet: T,
                    isSplitChevronAction: $,
                    showOnDemandIframe: L,
                    isWidgetWithModalAction: P,
                    isAcquisitionWidget: k,
                    isMercadoPAgoWidget: z,
                  }),
                ],
              }),
            ],
          });
        },
        qe = (e) => {
          const l = (0, s.HZ)(),
            { staticProps: a } = l,
            { deviceType: i, siteId: n } = a,
            o = "mobile" === i ? He : Ue;
          return (0, h.jsx)(o, (0, t.A)((0, t.A)({}, e), {}, { site: n }));
        },
        Ke = "ui-pdp-price__tags",
        Xe = "ui-pdp-iframe-modal",
        Ze = (0, n.VW)(
          "vip:modal-content:loaded",
          "height",
          `.${Xe}`,
          ".andes-modal__header"
        ),
        Je = (e) => {
          var l, a;
          let { tags: s } = e;
          const i =
            null == s ||
            null ===
              (l = s.find((e) => {
                var l;
                return null === (l = e.tag) || void 0 === l
                  ? void 0
                  : l.layout_specs;
              })) ||
            void 0 === l ||
            null === (l = l.tag) ||
            void 0 === l
              ? void 0
              : l.layout_specs;
          return {
            namespace: Ke,
            containerClassName: c()(Ke, (0, n.q2)(i)),
            wrapperClassName: `${Ke}__wrapper-tags`,
            tagActionClassName: `${Ke}--wrapper-tags--click`,
            iframeModalClassName: Xe,
            iframeScrolling: "no",
            iframeOnMessage: Ze,
            tagActionLabelAs: "span",
            infoClassName: "ui-pdp-promotions-pill__label--info",
            normalizedTags:
              null !==
                (a =
                  null == s
                    ? void 0
                    : s.map((e) => {
                        var l, a, s, i, n, o, r, c, u, m, d, _, p;
                        const g = !!e.tag_action,
                          h = !!e.info;
                        return {
                          hasTagAction: g,
                          hasInfo: h,
                          hasDescriptionAction: !!e.description_action,
                          tagActionLabelText: g
                            ? b.I.jsx(
                                e.tag_action.label.text,
                                e.tag_action.label.values
                              )
                            : null,
                          tagActionLabelKey: g ? e.tag_action.label : null,
                          tagActionLabelColor: g
                            ? e.tag_action.label.color
                            : null,
                          tagActionLabelBgColor: g
                            ? e.tag_action.label.bg_color
                            : null,
                          tagActionLabelFontFamily: g
                            ? e.tag_action.label.font_family
                            : null,
                          tagActionLabelFontSize: g
                            ? e.tag_action.label.font_size
                            : null,
                          tagActionCloseModalLabel: g
                            ? e.tag_action.close_modal_label
                            : null,
                          actionModalTitle:
                            null !==
                              (l =
                                null === (a = e.description_action) ||
                                void 0 === a
                                  ? void 0
                                  : a.modal_title) && void 0 !== l
                              ? l
                              : null,
                          actionModalUrl:
                            null !==
                              (s =
                                null === (i = e.description_action) ||
                                void 0 === i
                                  ? void 0
                                  : i.target) && void 0 !== s
                              ? s
                              : null,
                          descriptionActionLabel:
                            null !==
                              (n =
                                null === (o = e.description_action) ||
                                void 0 === o
                                  ? void 0
                                  : o.label) && void 0 !== n
                              ? n
                              : null,
                          descriptionActionCloseModalLabel:
                            null !==
                              (r =
                                null === (c = e.description_action) ||
                                void 0 === c
                                  ? void 0
                                  : c.close_modal_label) && void 0 !== r
                              ? r
                              : null,
                          iframeTitle:
                            null !==
                              (u =
                                null === (m = e.description_action) ||
                                void 0 === m
                                  ? void 0
                                  : m.modal_title) && void 0 !== u
                              ? u
                              : null,
                          iframeSrc:
                            null !==
                              (d =
                                null === (_ = e.description_action) ||
                                void 0 === _
                                  ? void 0
                                  : _.target) && void 0 !== d
                              ? d
                              : null,
                          tagProps: e.tag
                            ? (0, t.A)(
                                (0, t.A)({}, e.tag),
                                {},
                                { text: void 0, values: void 0 }
                              )
                            : null,
                          tagText: e.tag
                            ? b.I.jsx(e.tag.text, e.tag.values)
                            : null,
                          tagClassName:
                            null !== (p = e.tag) && void 0 !== p && p.text_icon
                              ? `${Ke}--${e.tag.text_icon.id} ui-pdp-promotions-pill__label--tag`
                              : "ui-pdp-promotions-pill__label--tag",
                          infoProps: h ? (0, t.A)({}, e.info) : null,
                        };
                      })) && void 0 !== a
                ? a
                : [],
          };
        },
        Ye = (e) => {
          const {
            containerClassName: l,
            wrapperClassName: a,
            tagActionClassName: s,
            iframeModalClassName: i,
            iframeScrolling: n,
            iframeOnMessage: o,
            tagActionLabelAs: r,
            infoClassName: c,
            normalizedTags: u,
          } = Je(e);
          return (0, h.jsx)("div", {
            className: l,
            children: u.map((e) =>
              (0, h.jsxs)("div", {
                className: a,
                children: [
                  e.hasTagAction
                    ? (0, h.jsx)(g.cX, {
                        modalTitle: e.actionModalTitle,
                        componentAsLabel: (0, h.jsx)("div", {
                          children: (0, h.jsx)(
                            p.G,
                            {
                              className: s,
                              as: r,
                              color: e.tagActionLabelColor,
                              bg_color: e.tagActionLabelBgColor,
                              font_family: e.tagActionLabelFontFamily,
                              font_size: e.tagActionLabelFontSize,
                              text: e.tagActionLabelText,
                            },
                            e.tagActionLabelKey
                          ),
                        }),
                        modalClassName: i,
                        url: e.actionModalUrl,
                        closeModalLabel: e.tagActionCloseModalLabel,
                        children: (0, h.jsx)(m.v, {
                          title: e.iframeTitle,
                          scrolling: n,
                          src: e.iframeSrc,
                          onMessage: o,
                        }),
                      })
                    : (0, h.jsx)(
                        f.JU,
                        (0, t.A)(
                          (0, t.A)({}, e.tagProps),
                          {},
                          { text: e.tagText, className: e.tagClassName }
                        )
                      ),
                  e.hasInfo &&
                    (0, h.jsx)(f.JU, (0, t.A)({ className: c }, e.infoProps)),
                  e.hasDescriptionAction &&
                    (0, h.jsx)(g.cX, {
                      label: e.descriptionActionLabel,
                      modalClassName: i,
                      modalTitle: e.actionModalTitle,
                      url: e.actionModalUrl,
                      closeModalLabel: e.descriptionActionCloseModalLabel,
                      children: (0, h.jsx)(m.v, {
                        title: e.iframeTitle,
                        scrolling: n,
                        src: e.iframeSrc,
                        onMessage: o,
                      }),
                    }),
                ],
              })
            ),
          });
        },
        Qe = "ui-pdp-price__payments-link",
        el = (e) => {
          let {
            device: l,
            modal_title: a,
            target: s,
            label: i,
            track: o,
            showOnDemandIframe: r,
            showOnDemandIframeParams: c,
          } = e;
          if (r && "function" == typeof r && s) {
            const e = c && "object" == typeof c ? c : {},
              u = { target: s };
            (0, n.wD)(u, { modal: !1 });
            const m = (0, t.A)(
                (0, t.A)({ title: a, target: s }, e),
                {},
                {
                  params: (0, t.A)(
                    {
                      namespace: Qe,
                      renderMode: "mobile" === l ? "fullscreen" : "centered",
                    },
                    (null == e ? void 0 : e.params) || {}
                  ),
                }
              ),
              d = (e) => {
                "function" == typeof (null == e ? void 0 : e.preventDefault) &&
                  e.preventDefault(),
                  r(m);
              };
            return {
              id: Qe,
              target: u.target,
              htmlTarget: "_self",
              role: "link",
              label: i,
              onClick: d,
              track: o,
            };
          }
          return null;
        },
        ll = (e) => {
          const { label: l, modal_title: a, close_modal_label: t } = e,
            {
              containerClassName: s,
              containerRole: i,
              wrapperClassName: o,
              mediaClassName: r,
              mediaTag: u,
              showMediaVariant: d,
              controlledUrl: p,
              modalClassName: b,
              iframeScrolling: x,
              handleClick: f,
              mediaAction: y,
              iframeOnMessage: v,
            } = ((e) => {
              let {
                className: l = "",
                showOnDemandIframe: a,
                showOnDemandIframeParams: t,
                target: s,
                label: i,
                track: o,
                modal_title: r,
              } = e;
              const u = `${s}?controlled=true`;
              return {
                namespace: Qe,
                containerClassName: c()(Qe, l),
                containerRole: "presentation",
                wrapperClassName: `${Qe}__wrapper`,
                mediaClassName: c()("ui-pdp-action-modal", `${Qe}__action`),
                mediaTag: "div",
                showMediaVariant: !!a && "function" == typeof a,
                controlledUrl: u,
                modalClassName: "ui-pdp-iframe-modal",
                iframeScrolling: "no",
                handleClick: () => {
                  o && (0, n.sx)(o);
                },
                mediaAction: el({
                  modal_title: r,
                  target: s,
                  label: i,
                  track: o,
                  showOnDemandIframe: a,
                  showOnDemandIframeParams: t,
                }),
                iframeOnMessage: (0, n.VW)(
                  "vip:modal-content:loaded",
                  "height",
                  ".ui-pdp-iframe-modal",
                  ".andes-modal__header"
                ),
              };
            })(e);
          return (0, h.jsx)("div", {
            className: s,
            onClick: f,
            role: i,
            children: d
              ? (0, h.jsx)("div", {
                  className: o,
                  children: (0, h.jsx)(_.$U, {
                    tag: u,
                    className: r,
                    action: y,
                  }),
                })
              : (0, h.jsx)(g.cX, {
                  componentAsLabel: l.text,
                  modalClassName: b,
                  modalTitle: a,
                  url: p,
                  closeModalLabel: t,
                  children: (0, h.jsx)(m.v, {
                    title: l.text,
                    src: p,
                    scrolling: x,
                    onMessage: v,
                  }),
                }),
          });
        },
        al = "ui-vpp-discounts",
        tl = "ui-pdp-iframe-modal",
        sl = 2,
        il = `.${tl}`,
        nl = (e) => () => {
          var l;
          null === (l = e.current) || void 0 === l || l.openModal();
        },
        ol = (e) => {
          const {
              tags: l = null,
              className: a = "",
              max_pills_to_show: t = sl,
              plus_button: s,
              close_modal_label: i,
            } = e,
            o = (0, n.VW)(
              "vip:modal-content:loaded",
              "height",
              il,
              ".andes-modal__header"
            ),
            r = (l || []).map((e) => {
              var l;
              return {
                showTag: !(null == e || !e.tag),
                tagText: null != e && e.tag ? b.I.jsx(e.tag.text) : null,
                modalTitle: null == e ? void 0 : e.modal_title,
                target: null == e ? void 0 : e.target,
                tagKey:
                  null == e || null === (l = e.tag) || void 0 === l
                    ? void 0
                    : l.text,
                tagProps: null == e ? void 0 : e.tag,
              };
            });
          return {
            namespace: al,
            normalizedTags: r,
            className: a,
            maxPillsToShow: t,
            tagClassName: `${al}__tag`,
            styledLabelClassName: "ui-vpp-discounts__tags",
            modalClassName: tl,
            iframeScrolling: "no",
            iframeOnMessage: o,
            closeModalLabel: i,
            plusButtonModalTitle: null == s ? void 0 : s.modal_title,
            plusButtonTarget: null == s ? void 0 : s.target,
            createOpenActionModal: nl,
          };
        },
        rl = (e) => {
          const { id: l } = e,
            {
              normalizedTags: a,
              className: s,
              maxPillsToShow: n,
              tagClassName: o,
              styledLabelClassName: r,
              modalClassName: c,
              iframeScrolling: u,
              iframeOnMessage: d,
              closeModalLabel: _,
              plusButtonModalTitle: b,
              plusButtonTarget: x,
              createOpenActionModal: f,
            } = ol(e),
            y = (e) => (0, h.jsx)(m.v, { src: e, scrolling: u, onMessage: d }),
            v = (0, i.useRef)(null),
            N = f(v);
          return (0, h.jsxs)(h.Fragment, {
            children: [
              (0, h.jsx)(S.v, {
                limit: n,
                onClickPlusButton: N,
                className: s,
                children: a.map((e) =>
                  (0, h.jsx)(
                    S.b,
                    {
                      className: o,
                      children:
                        e.showTag &&
                        (0, h.jsx)(g.cX, {
                          modalClassName: c,
                          modalTitle: e.modalTitle,
                          url: e.target,
                          componentAsLabel: (0, h.jsx)(
                            p.G,
                            (0, t.A)(
                              (0, t.A)({ className: r }, e.tagProps),
                              {},
                              { text: e.tagText }
                            ),
                            e.tagKey
                          ),
                          closeModalLabel: _,
                          children: y(e.target),
                        }),
                    },
                    l
                  )
                ),
              }),
              (0, h.jsx)(g.cX, {
                modalClassName: c,
                modalTitle: b,
                url: x,
                closeModalLabel: _,
                customRef: v,
                children: y(x),
              }),
            ],
          });
        },
        cl = ["key"],
        ul = "ui-pdp-price__volume-tags",
        ml = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, o.A)(e, cl);
        },
        dl = function () {
          let { tags: e = [] } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            namespace: ul,
            containerClassName: ul,
            normalizedTags: e.map((e, l) =>
              ((e) => {
                let {
                  label: l,
                  subtitle: a,
                  action: t,
                  modifier: s,
                  index: i,
                } = e;
                return {
                  key: i,
                  cardClassName: c()(`${ul}--container`, {
                    [`${ul}--container--clickeable`]: t,
                    [`${ul}--${s}`]: s,
                  }),
                  pillContainerClassName: `${ul}--pill-container`,
                  pillClassName: `${ul}--pill`,
                  subtitleClassName: `${ul}--subtitle`,
                  actionContainerClassName: `${ul}--action-container`,
                  labelClassName: `${ul}--label`,
                  highlightClassName: `${ul}--highlight`,
                  hasAction: !!t,
                  hasSubtitle: !!a,
                  hasActionLabel: !(null == t || !t.label),
                  hasActionHighlight: !(null == t || !t.highlight),
                  labelProps: l ? ml(l) : null,
                  labelText: b.I.jsx(null == l ? void 0 : l.text),
                  labelAccessibilityText:
                    null == l ? void 0 : l.accessibility_text,
                  subtitleProps: a ? ml(a) : null,
                  actionLabel: null != t && t.label ? ml(t.label) : null,
                  actionHighlight:
                    null != t && t.highlight ? ml(t.highlight) : null,
                  handleClick:
                    null != t && t.target
                      ? (e) => {
                          e.preventDefault(),
                            (0, n.sx)(t.track),
                            (window.location.href = t.target);
                        }
                      : void 0,
                };
              })((0, t.A)((0, t.A)({}, e), {}, { index: l }))
            ),
          };
        },
        _l = (e) => {
          const { tags: l = null } = e,
            { containerClassName: a, normalizedTags: s } = dl({ tags: l });
          return (0, h.jsx)("div", {
            className: a,
            children: s.map((e) =>
              (0, h.jsxs)(
                j.Zp,
                {
                  className: e.cardClassName,
                  onClick: e.handleClick,
                  children: [
                    (0, h.jsxs)("div", {
                      className: e.pillContainerClassName,
                      children: [
                        (0, h.jsx)(S.b, {
                          children: (0, h.jsx)(
                            p.G,
                            (0, t.A)(
                              (0, t.A)({}, e.labelProps),
                              {},
                              {
                                as: "span",
                                className: e.pillClassName,
                                accessibilityText: e.labelAccessibilityText,
                                text: e.labelText,
                              }
                            )
                          ),
                        }),
                        e.hasSubtitle &&
                          (0, h.jsx)(
                            p.G,
                            (0, t.A)(
                              { className: e.subtitleClassName },
                              e.subtitleProps
                            )
                          ),
                      ],
                    }),
                    e.hasAction &&
                      (0, h.jsxs)("span", {
                        className: e.actionContainerClassName,
                        children: [
                          e.hasActionLabel &&
                            (0, h.jsx)(
                              p.G,
                              (0, t.A)(
                                { className: e.labelClassName },
                                e.actionLabel
                              )
                            ),
                          e.hasActionHighlight &&
                            (0, h.jsx)(
                              p.G,
                              (0, t.A)(
                                { className: e.highlightClassName },
                                e.actionHighlight
                              )
                            ),
                        ],
                      }),
                  ],
                },
                e.key
              )
            ),
          });
        },
        pl = (e) => {
          const {
              cards_credits_component: l,
              price_tags: a,
              discounts_tags: s,
              volume_discount_tags: i,
              action: n,
              plus_button: o,
              closeModalLabel: r,
              showOnDemandIframe: c,
              showOnDemandIframeParams: u,
            } = e,
            {
              showCreditsComponent: _,
              showPriceTags: p,
              showDiscountsTags: b,
              discountsTagsClassName: x,
              showAction: f,
              showVolumeTags: y,
              showBuyLoyalty: v,
              loyaltyClassName: N,
              loyaltyModalClassName: C,
              loyaltyTitleText: A,
              loyaltyActionTarget: T,
              loyaltyActionLabel: L,
              loyaltyIconId: S,
              loyaltyIconColor: j,
              iframeScrolling: w,
              iframeHeight: I,
              acquisition: $,
            } = ((e) => {
              var l, a, t;
              let {
                namespace: s = "ui-pdp-price",
                cards_credits_component: i = null,
                price_tags: n = null,
                discounts_tags: o = null,
                volume_discount_tags: r = null,
                action: c = null,
                tooltip: u = null,
                showTooltip: m = !1,
              } = e;
              return {
                showCreditsComponent: !!i,
                showPriceTags: !!(n && n.length > 0),
                showDiscountsTags: !(null == o || !o.length),
                discountsTagsClassName: `${s}__discounts-tags`,
                showAction: !!c,
                showVolumeTags: !!r,
                showBuyLoyalty:
                  "buy_loyalty_level_tooltip" === (null == u ? void 0 : u.id) &&
                  !m,
                loyaltyClassName: `${s}__loyalty-purchase-description`,
                loyaltyModalClassName: `${s}__buy-loyalty-modal`,
                loyaltyTitleText:
                  null == u || null === (l = u.title) || void 0 === l
                    ? void 0
                    : l.text,
                loyaltyActionTarget:
                  null == u || null === (a = u.action) || void 0 === a
                    ? void 0
                    : a.target,
                loyaltyActionLabel:
                  null == u || null === (t = u.action) || void 0 === t
                    ? void 0
                    : t.label,
                loyaltyIconId: "loyalty_points",
                loyaltyIconColor: "GREEN",
                iframeScrolling: "no",
                iframeHeight: 525,
                acquisition: !0,
              };
            })(e);
          return (0, h.jsxs)(h.Fragment, {
            children: [
              _ &&
                (0, h.jsx)(
                  qe,
                  (0, t.A)((0, t.A)({}, l), {}, { acquisition: $ })
                ),
              p && (0, h.jsx)(Ye, { tags: a }),
              b &&
                (0, h.jsx)("div", {
                  className: x,
                  children: (0, h.jsx)(rl, { tags: s, plus_button: o }),
                }),
              f &&
                (0, h.jsx)(
                  ll,
                  (0, t.A)(
                    (0, t.A)({}, n),
                    {},
                    { showOnDemandIframe: c, showOnDemandIframeParams: u }
                  )
                ),
              y && (0, h.jsx)(_l, { tags: i }),
              v &&
                (0, h.jsxs)("div", {
                  className: N,
                  children: [
                    (0, h.jsx)(d.In, { id: S, color: j }),
                    (0, h.jsxs)("span", { children: [A, " "] }),
                    (0, h.jsx)(g.cX, {
                      modalClassName: C,
                      url: T,
                      label: L,
                      closeModalLabel: r,
                      children: (0, h.jsx)(m.v, {
                        title: null == L ? void 0 : L.text,
                        src: T,
                        scrolling: w,
                        height: I,
                      }),
                    }),
                  ],
                }),
            ],
          });
        },
        gl = "volume_discount",
        bl = Object.entries(n.ok.SIZES).reduce((e, l) => {
          let [a, s] = l;
          return (0, t.A)((0, t.A)({}, e), {}, { [s]: a });
        }, {}),
        hl = (e) => {
          const {
            containerClassName: l,
            discountValueClassName: a,
            showTextIcon: s,
            showTextIconLeft: i,
            showTextIconRight: o,
            textIconClassName: r,
            textIconId: u,
            textIconColorClassName: m,
            showValue: _,
            moneyAmountDiscountProps: p,
            showText: g,
            textClassName: b,
            text: x,
            showSecondaryText: f,
            secondaryTextClassName: y,
            secondaryText: N,
          } = ((e) => {
            var l, a, t, s;
            let {
              className: i = "",
              discountLabel: o,
              discountLabelSecondary: r,
              discount_num_font_size: u,
            } = e;
            const m = bl[u],
              d =
                (null == o ? void 0 : o.font_size) ||
                (null == r ? void 0 : r.font_size) ||
                m,
              _ =
                (null == o ? void 0 : o.font_family) ||
                (null == r ? void 0 : r.font_family) ||
                n.ok.WEIGHTS.REGULAR,
              p = (null == o ? void 0 : o.value_font_size) || d,
              { icon: g } = n.AA;
            return {
              containerClassName: c()(
                { [`${i}__label`]: i },
                (0, n.op)(o || r),
                (0, n.mm)(d),
                (0, n.rK)(_)
              ),
              discountValueClassName: c()(
                (0, n.rK)((null == o ? void 0 : o.value_font_family) || _),
                (0, n.op)(o),
                (0, n.oR)(null == o ? void 0 : o.bg_color),
                (0, n.mm)(p),
                {
                  "ui-pdp-price__discount--with-bg-color":
                    null == o ? void 0 : o.bg_color,
                }
              ),
              showTextIcon: !(null == o || !o.text_icon),
              showTextIconLeft:
                (null == o || null === (l = o.text_icon) || void 0 === l
                  ? void 0
                  : l.alignment) !== g.RIGHT,
              showTextIconRight:
                (null == o || null === (a = o.text_icon) || void 0 === a
                  ? void 0
                  : a.alignment) === g.RIGHT,
              textIconClassName: c()(
                { [`${i}__icon`]: i },
                `${i}__icon--${
                  (null == o || null === (t = o.text_icon) || void 0 === t
                    ? void 0
                    : t.alignment) || g.LEFT
                }`
              ),
              textIconId:
                null == o || null === (s = o.text_icon) || void 0 === s
                  ? void 0
                  : s.id,
              textIconColorClassName:
                null != o && o.text_icon ? (0, n.op)(o.text_icon) : "",
              showValue:
                0 === (null == o ? void 0 : o.value) ||
                !(null == o || !o.value),
              moneyAmountDiscountProps: {
                compact: !0,
                value: null == o ? void 0 : o.value,
                size: n.ok.SIZES[null == o ? void 0 : o.value_font_size] || u,
              },
              showText: !(null == o || !o.text),
              textClassName: c()({ [`${i}__text`]: i }),
              text: null == o ? void 0 : o.text,
              showSecondaryText: !(null == r || !r.text),
              secondaryTextClassName: c()({
                [`${i}__text`]: i,
                [`${i}__text__secondary`]: i,
              }),
              secondaryText: null == r ? void 0 : r.text,
            };
          })(e);
          return (0, h.jsxs)("span", {
            className: l,
            children: [
              s &&
                i &&
                (0, h.jsx)("span", {
                  className: r,
                  "data-testid": "discount-label-icon-wrapper",
                  children: (0, h.jsx)(d.In, { id: u, className: m }),
                }),
              _ && (0, h.jsx)(v.cB, (0, t.A)({ className: a }, p)),
              g && (0, h.jsx)("span", { className: b, children: x }),
              s &&
                o &&
                (0, h.jsx)("span", {
                  className: r,
                  "data-testid": "discount-label-icon-wrapper",
                  children: (0, h.jsx)(d.In, { id: u, className: m }),
                }),
              f && (0, h.jsx)("span", { className: y, children: N }),
            ],
          });
        },
        xl = (e) => {
          const { setTooltipVisibility: l } = e,
            {
              containerClassName: a,
              text: s,
              chevronIconId: i,
              discountProps: o,
            } = ((e) => {
              let {
                className: l = "",
                discountLabel: a,
                discountLabelSecondary: t,
                discount_num_font_size: s,
              } = e;
              return {
                containerClassName: c()(
                  { [`${l}__label`]: l },
                  "loyalty-tooltip",
                  (0, n.op)(a),
                  (0, n.mm)((null == a ? void 0 : a.font_size) || "MEDIUM")
                ),
                text: null == a ? void 0 : a.text,
                chevronIconId: "chevron",
                discountProps: {
                  className: l,
                  discountLabel: a,
                  discountLabelSecondary: t,
                  discount_num_font_size: s,
                },
              };
            })(e),
            { onMouseEnter: r, onMouseLeave: u } = ((e) => ({
              onMouseEnter: () => e(!0),
              onMouseLeave: () => e(!1),
            }))(l);
          return (0, h.jsxs)("span", {
            className: a,
            onMouseEnter: r,
            onMouseLeave: u,
            children: [
              (0, h.jsx)(hl, (0, t.A)({}, o)),
              s,
              (0, h.jsx)(d.In, { id: i }),
            ],
          });
        },
        fl = (e) => {
          const {
            shouldRender: l,
            showWithTooltip: a,
            discountProps: s,
            tooltipProps: i,
          } = ((e) => {
            let {
              className: l = "",
              discountLabel: a = null,
              discountLabelSecondary: t = null,
              discount_num_font_size: s,
              setTooltipVisibility: i = null,
              tooltip: n = null,
              allowStandaloneSecondary: o = !1,
            } = e;
            const r = !!(a || (null == t ? void 0 : t.id) === gl || (o && t)),
              c = "loyalty_discount_tooltip" === (null == n ? void 0 : n.id);
            return {
              shouldRender: r,
              showWithTooltip: c,
              discountProps: {
                className: l,
                discountLabel: a,
                discountLabelSecondary: t,
                discount_num_font_size: s,
              },
              tooltipProps: c
                ? {
                    className: l,
                    discountLabel: a,
                    discountLabelSecondary: t,
                    discount_num_font_size: s,
                    setTooltipVisibility: i,
                  }
                : null,
            };
          })(e);
          return l
            ? a
              ? (0, h.jsx)(xl, (0, t.A)({}, i))
              : (0, h.jsx)(hl, (0, t.A)({}, s))
            : null;
        },
        yl = "currency_tooltip",
        vl =
          ((Nl = (e) => {
            const {
              secondLineClassName: l,
              showLabel: a,
              labelClassName: s,
              labelContent: i,
              showValue: o,
              pricePartProps: r,
              showDiscountLabelSubtitle: u,
              discountLabelSubtitleClassName: m,
              discountLabelSubtitleText: _,
              discountLabelProps: p,
              showCurrencyTooltipIcon: g,
              currencyTooltipIconClassName: x,
            } = ((e) => {
              var l;
              let {
                namespace: a,
                bold: t = !1,
                meta: s = !1,
                currencySymbol: i = null,
                value: o = null,
                suffixLabel: r = null,
                label: u = null,
                discountLabel: m = null,
                discountLabelSecondary: d = null,
                bulkSalesUnit: _ = null,
                discountLabelSubtitle: p = null,
                tooltip: g = null,
                rangePrice: h = null,
                num_font_size: x = null,
                discount_num_font_size: f = null,
                isCurrencyTooltip: y = !1,
                setTooltipVisibility: v = () => {},
                marginSubtitleFirstChild: N = null,
                prefixLabel: C = null,
                alignments: A = null,
                font_family: T = n.ok.WEIGHTS.REGULAR,
                allowStandaloneSecondary: L = !1,
              } = e;
              return {
                secondLineClassName: c()(`${a}__second-line`, {
                  [`${a}__second-line--bold`]: t,
                  [`${a}__second-line--double`]: !!d,
                  [`${a}__second-line--margin-own`]: !!N,
                }),
                showLabel: !!u,
                labelClassName: u ? (0, n.op)(u.color) : "",
                labelContent: u ? b.I.jsx(u.text, u.values) : null,
                showValue: !!o,
                pricePartProps: {
                  className: null != _ && _.hasUnits ? `${a}__bulk-part` : "",
                  rangePrice: h,
                  value: o,
                  currencySymbol: i,
                  suffix:
                    null !== (l = null == _ ? void 0 : _.text) && void 0 !== l
                      ? l
                      : "",
                  meta: s,
                  num_font_size: x,
                  suffixLabel: r,
                  prefixLabel: C,
                  alignments: A,
                  font_family: T,
                },
                showDiscountLabelSubtitle: !!p,
                discountLabelSubtitleClassName: `${a}__label-discount`,
                discountLabelSubtitleText: null == p ? void 0 : p.text,
                discountLabelProps: {
                  className: `${a}__second-line`,
                  discountLabel: m,
                  discountLabelSecondary: d,
                  tooltip: g,
                  setTooltipVisibility: v,
                  discount_num_font_size: f,
                  allowStandaloneSecondary: L,
                },
                showCurrencyTooltipIcon: y,
                currencyTooltipIconClassName: (0, n.op)("BLUE"),
              };
            })(e);
            return (0, h.jsxs)("div", {
              className: l,
              children: [
                a && (0, h.jsx)("div", { className: s, children: i }),
                o && (0, h.jsx)(ge, (0, t.A)({}, r)),
                u && (0, h.jsx)("span", { className: m, children: _ }),
                (0, h.jsx)(fl, (0, t.A)({}, p)),
                g && (0, h.jsx)(d.In, { id: "price_info", className: x }),
              ],
            });
          }),
          (e) => {
            const {
              namespace: l,
              tooltip: a = null,
              showTooltip: s = !1,
              setTooltipVisibility: i = () => {},
            } = e;
            if (!a) return (0, h.jsx)(Nl, (0, t.A)({}, e));
            const [o, r] = (0, u.jZ)(yl, -1),
              m = (null == a ? void 0 : a.id) === yl,
              d = ((e) => {
                var l;
                let {
                    tooltip: a,
                    namespace: s,
                    showTooltip: i,
                    setTooltipVisibility: o,
                    openCurrencyTooltip: r,
                    setOpenCurrencyTooltip: u,
                    useHoverTrigger: m,
                    isCurrencyTooltip: d,
                  } = e,
                  _ = { open: d ? r : i };
                return (
                  m && (_ = {}),
                  (0, t.A)(
                    {
                      id: null == a ? void 0 : a.id,
                      className: c()(`${s}__tooltip`, { [(0, n.oR)(a)]: a }),
                      content: X(a),
                      side: Z.LEFT,
                      trigger: m ? J.HOVER : J.NO_TRIGGER,
                      offsetX: -16,
                      storable: null == a ? void 0 : a.storable,
                      mouseLeaveDelay: 0.3,
                      closable: (null == a ? void 0 : a.closeable) && !m,
                      srLabel:
                        null == a || null === (l = a.title) || void 0 === l
                          ? void 0
                          : l.text,
                      onClose: () => {
                        d
                          ? (localStorage.setItem(
                              "currency_tooltip",
                              Math.floor(Date.now() / 1e3)
                            ),
                            u(!1))
                          : o(!1);
                      },
                    },
                    _
                  )
                );
              })({
                tooltip: a,
                namespace: l,
                showTooltip: s,
                setTooltipVisibility: i,
                openCurrencyTooltip: o,
                setOpenCurrencyTooltip: r,
                useHoverTrigger: !o,
                isCurrencyTooltip: m,
              });
            return (0, h.jsx)(
              u.m_,
              (0, t.A)(
                (0, t.A)({}, d),
                {},
                {
                  children: (0, h.jsx)(
                    Nl,
                    (0, t.A)((0, t.A)({}, e), {}, { isCurrencyTooltip: m })
                  ),
                }
              )
            );
          });
      var Nl;
      const Cl = "PREVIOUS",
        Al = "price",
        Tl = (e) => {
          var l, a, t;
          const s = Object.values(
              null !== (l = null == e ? void 0 : e.values) && void 0 !== l
                ? l
                : {}
            ),
            i =
              null !==
                (a = s.find(
                  (e) =>
                    (null == e ? void 0 : e.type) === Al &&
                    (null == e ? void 0 : e.money_type) === Cl
                )) && void 0 !== a
                ? a
                : s.find((e) => (null == e ? void 0 : e.type) === Al);
          return i
            ? {
                className: c()(
                  "ui-pdp-price__original-value",
                  (0, n.op)(i.color)
                ),
                value: i.value,
                currencySymbol: i.currency_symbol,
                strikeThrough: i.money_type === Cl,
                num_font_size:
                  null !==
                    (t =
                      n.wS.PRODUCT_SUBTITLE[
                        null == e ? void 0 : e.font_size
                      ]) && void 0 !== t
                    ? t
                    : 16,
              }
            : null;
        },
        Ll = (e, l) => {
          var a, t, s, i;
          const o = null !== (a = e.enriched_pill) && void 0 !== a ? a : e;
          return {
            key: `${e.type}-${l}`,
            containerClassName: "ui-pdp-price__overtitles__item",
            pills:
              ((r = null !== (t = o.pills) && void 0 !== t ? t : o.pill),
              null !==
                (u =
                  null == r
                    ? void 0
                    : r.map((e, l) => {
                        var a;
                        return {
                          key: `${
                            null !== (a = e.text) && void 0 !== a ? a : "pill"
                          }-${l}`,
                          text: e.text,
                          className: c()(
                            "ui-pdp-label-as-pill",
                            (0, n.op)(e),
                            (0, n.oR)(e.bg_color),
                            (0, n.mm)(e.font_size),
                            (0, n.rK)(e.font_family)
                          ),
                        };
                      })) && void 0 !== u
                ? u
                : []),
            iconId:
              null !==
                (s = null === (i = o.icon) || void 0 === i ? void 0 : i.id) &&
              void 0 !== s
                ? s
                : null,
            labelPriceProps: Tl(o.label),
          };
          var r, u;
        },
        Sl = (e) => {
          const {
            shouldRender: l,
            items: a,
            originalValuePartProps: s,
          } = ((e) => {
            let {
              overtitles_components: l = null,
              originalValuePartProps: a = null,
            } = e;
            return null != l && l.length
              ? {
                  shouldRender: !0,
                  items: l.map(Ll),
                  originalValuePartProps: a,
                }
              : { shouldRender: !1, items: [], originalValuePartProps: null };
          })(e);
          return l
            ? (0, h.jsx)(h.Fragment, {
                children: a.map((e) => {
                  var l;
                  const a =
                    null !== (l = e.labelPriceProps) && void 0 !== l ? l : s;
                  return (0, h.jsxs)(
                    "div",
                    {
                      className: e.containerClassName,
                      children: [
                        e.pills.map((e) =>
                          (0, h.jsx)(
                            "span",
                            { className: e.className, children: e.text },
                            e.key
                          )
                        ),
                        e.iconId && (0, h.jsx)(d.In, { id: e.iconId }),
                        a && (0, h.jsx)(ge, (0, t.A)({}, a)),
                      ],
                    },
                    e.key
                  );
                }),
              })
            : null;
        },
        jl = (e) => {
          const {
              shouldRender: l,
              classNames: a,
              processedProps: s,
              subtitleFontSize: o,
            } = ee(e),
            [r, c] = (0, i.useState)(s.tooltip && !s.tooltip.closed),
            { highlightSubtitles: u, regularSubtitles: m } = (0, i.useMemo)(
              () => ({
                highlightSubtitles: s.highlightSubtitles,
                regularSubtitles: s.regularSubtitles,
              }),
              [s.highlightSubtitles, s.regularSubtitles]
            );
          if (!l) return null;
          const {
              containerClassName: d,
              mainContainerClassName: _,
              upperLabelClassName: p,
              bottomLabelClassName: g,
              highlightSubtitlesClassName: b,
              subtitlesClassName: x,
              namespace: f,
            } = a,
            {
              currencySymbol: y,
              value: v,
              rangePrice: N,
              upperLabel: C,
              label: A,
              discountLabel: T,
              discountLabelSecondary: L,
              discountLabelSubtitle: S,
              bottomLabel: j,
              valuePrefix: w,
              valueSuffixLabel: I,
              num_font_size: $,
              discount_num_font_size: P,
              bulkSalesUnit: k,
              priceReference: z,
              tooltip: M,
              background_gradient: D,
              hasHighlight: O,
              alignments: V,
              marginSubtitleFirstChild: B,
              shouldShowPriceExtra: R,
              cards_credits_component: U,
              price_tags: E,
              discounts_tags: W,
              volume_discount_tags: F,
              plus_button: G,
              action: H,
              closeModalLabel: q,
              activeWidget: K,
              showOnDemandIframe: X,
              showOnDemandIframeParams: Z,
              netPriceTax: J,
              bold: Y,
              meta: Q,
              progress_bar_scarcity: le,
              showProgressBarScarcity: ae,
              font_family: te,
              overtitles_components: se,
              showStandaloneOriginalValue: ie,
              originalValuePartProps: ne,
              allowStandaloneSecondary: ce,
            } = s;
          return (0, h.jsxs)("div", {
            className: d,
            children: [
              (0, h.jsxs)("div", {
                className: _,
                children: [
                  (0, h.jsxs)(be, {
                    namespace: f,
                    background_gradient: D,
                    children: [
                      C &&
                        (0, h.jsx)("div", {
                          className: `${p} ${(0, n.op)(C.color)}`,
                          children: C.text,
                        }),
                      (0, h.jsx)(Sl, {
                        overtitles_components: se,
                        originalValuePartProps: ne,
                      }),
                      ie && (0, h.jsx)(ge, (0, t.A)({}, ne)),
                      z &&
                        (0, h.jsx)(
                          fe,
                          (0, t.A)(
                            (0, t.A)({ namespace: f }, z),
                            {},
                            { side: "left", trigger: "hover" }
                          )
                        ),
                      (0, h.jsx)(vl, {
                        namespace: f,
                        bold: Y,
                        meta: Q,
                        currencySymbol: y,
                        value: v,
                        label: A,
                        suffixLabel: I,
                        discountLabel: T,
                        discountLabelSecondary: L,
                        bulkSalesUnit: k,
                        discountLabelSubtitle: S,
                        tooltip: M,
                        rangePrice: N,
                        num_font_size: $,
                        discount_num_font_size: P,
                        showTooltip: r,
                        setTooltipVisibility: c,
                        marginSubtitleFirstChild: B,
                        prefixLabel: w,
                        alignments: V,
                        font_family: te,
                        allowStandaloneSecondary: ce,
                      }),
                      (null == u ? void 0 : u.length) > 0 &&
                        (0, h.jsx)("div", {
                          className: b,
                          children: u.map((e) =>
                            (0, h.jsx)(
                              xe,
                              (0, t.A)({ num_font_size: o[e.font_size] }, e),
                              e.text
                            )
                          ),
                        }),
                      (0, h.jsx)(re, { show: O, bottomLabel: j, className: g }),
                      ae && (0, h.jsx)(oe, (0, t.A)({}, le)),
                    ],
                  }),
                  (0, h.jsx)(re, { show: !O, bottomLabel: j, className: g }),
                  m &&
                    m.length > 0 &&
                    (0, h.jsx)("div", {
                      className: x,
                      role: "group",
                      children: m.map((e) =>
                        (0, h.jsx)(
                          xe,
                          (0, t.A)({ num_font_size: o[e.font_size] }, e),
                          e.text
                        )
                      ),
                    }),
                  J,
                  K &&
                    (0, h.jsx)(
                      qe,
                      (0, t.A)((0, t.A)({}, K), {}, { showOnDemandIframe: X })
                    ),
                ],
              }),
              R &&
                (0, h.jsx)(pl, {
                  cards_credits_component: U,
                  price_tags: E,
                  discounts_tags: W,
                  volume_discount_tags: F,
                  action: H,
                  plus_button: G,
                  tooltip: M,
                  closeModalLabel: q,
                  showTooltip: r,
                  showOnDemandIframe: X,
                  showOnDemandIframeParams: Z,
                }),
            ],
          });
        };
      jl.displayName = "PriceDesktop";
      const wl = "ui-pdp-price",
        Il = (e, l) =>
          e ? (0, t.A)((0, t.A)({}, e), {}, { modifier: R(l) }) : null,
        $l = (e) => {
          var l, a, t;
          const {
              bold: s = !1,
              className: i = "",
              size: o = null,
              modifier: r = null,
              meta: c = !1,
              upperLabel: u = null,
              currencySymbol: m,
              originalValue: d = null,
              originalValueSuffix: _ = null,
              originalValueType: p = null,
              value: g,
              valueSuffix: b = null,
              label: h = null,
              discountLabel: x = null,
              discountLabelSecondary: f = null,
              bulkSalesUnit: y = null,
              discountLabelSubtitle: v = null,
              shouldShowPriceExtra: N = !0,
              subtitles: C = null,
              tooltip: A = null,
              price_tags: T = null,
              discounts_tags: L = null,
              volume_discount_tags: S = null,
              priceReference: j = null,
              action: w = null,
              rangePrice: I = null,
              billing: $ = !1,
              num_font_size: z = n.wS.MOBILE_DEFAULT,
              original_value_num_font_size: M = n.wS.ORIGINAL_DEFAULT,
              discount_num_font_size: D = n.gs.DEFAULT,
              cards_credits_component: O = null,
              credits_consumer: V = null,
              widget: B = null,
              widget_v2: R = null,
              showOnDemandIframe: E = null,
              showOnDemandIframeParams: W = null,
              netPriceTax: F = null,
              bottomLabel: G = null,
              background_gradient: H = null,
              valuePrefix: q = null,
              alignments: K = null,
              progress_bar_scarcity: X = null,
              font_family: Z = n.ok.WEIGHTS.SEMIBOLD,
              overtitles_components: J = null,
            } = e,
            Y = Boolean(g || h),
            { highlightSubtitles: Q, regularSubtitles: ee } = ((e) =>
              e && Array.isArray(e)
                ? e.reduce(
                    (e, l) => (
                      l.has_highlighted
                        ? e.highlightSubtitles.push(l)
                        : e.regularSubtitles.push(l),
                      e
                    ),
                    { highlightSubtitles: [], regularSubtitles: [] }
                  )
                : { highlightSubtitles: [], regularSubtitles: [] })(C),
            le = Il(_, k),
            ae = Il(b, P),
            te = ((e) => {
              var l;
              let {
                className: a,
                size: t,
                modifier: s,
                bold: i,
                discountLabelSecondary: n,
                subtitles: o,
                background_gradient: r,
                bulkSalesUnit: c,
              } = e;
              const u = wl,
                m = ((e) => (e ? "" : "mt-24"))(r),
                d = [u];
              a && d.push(a),
                m && d.push(m),
                t && d.push(`${u}--size-${t}`),
                s && d.push(`${u}--${s}`);
              const _ = [`${u}__second-line`];
              return (
                i && _.push(`${u}__second-line--bold`),
                n && _.push(`${u}__second-line--double`),
                null != o &&
                  null !== (l = o[0]) &&
                  void 0 !== l &&
                  l.margin &&
                  _.push(`${u}__second-line--margin-own`),
                {
                  namespace: wl,
                  containerClassName: d.join(" "),
                  mainContainerClassName: `${u}__main-container`,
                  upperLabelClassName: `${u}__upper`,
                  originalValueClassName: `${u}__original-value`,
                  secondLineClassName: _.join(" "),
                  discountLabelClassName: `${u}__second-line`,
                  bulkPartClassName:
                    null != c && c.hasUnits ? `${u}__bulk-part` : "",
                  labelDiscountClassName: `${u}__label-discount`,
                  infoIconClassName: `${u}__info-icon`,
                  subtitlesClassName: `${u}__subtitles`,
                  bottomLabelClassName: `${u}__bottom-label`,
                  netPriceTaxClassName: `${u}__net-price-tax`,
                  layoutClassName: m,
                }
              );
            })({
              className: i,
              size: o,
              modifier: r,
              bold: s,
              discountLabelSecondary: f,
              subtitles: C,
              background_gradient: H,
              bulkSalesUnit: y,
            }),
            se = U(p),
            ie = R || B || V;
          return {
            shouldRender: Y,
            classNames: te,
            processedProps: {
              size: o,
              modifier: r,
              bold: s,
              meta: c,
              billing: $,
              currencySymbol: m,
              value: g,
              originalValue: d,
              rangePrice: I,
              upperLabel: u,
              label: h,
              discountLabel: x,
              discountLabelSecondary: f,
              discountLabelSubtitle: v,
              bottomLabel: G,
              valuePrefix: q,
              originalValueSuffixLabel: le,
              valueSuffixLabel: ae,
              num_font_size: z,
              original_value_num_font_size: M,
              discount_num_font_size: D,
              bulkSalesUnit: y,
              bulkSuffix:
                null !== (l = null == y ? void 0 : y.text) && void 0 !== l
                  ? l
                  : "",
              priceReference: j,
              tooltip: A,
              background_gradient: H,
              hasHighlight: Boolean(
                null == H || null === (a = H.colors) || void 0 === a
                  ? void 0
                  : a.length
              ),
              alignments: K,
              font_family: Z,
              shouldStrikeThrough: se,
              highlightSubtitles: Q,
              regularSubtitles: ee,
              subtitles: C,
              hasMarginOwn:
                null == C || null === (t = C[0]) || void 0 === t
                  ? void 0
                  : t.margin,
              shouldShowPriceExtra: N,
              cards_credits_component: O,
              price_tags: T,
              discounts_tags: L,
              volume_discount_tags: S,
              action: w,
              activeWidget: ie,
              showOnDemandIframe: E,
              showOnDemandIframeParams: W,
              netPriceTax: F,
              progress_bar_scarcity: X,
              showProgressBarScarcity: Boolean(X),
              allowStandaloneSecondary: Boolean(J),
              overtitles_components: J,
              showStandaloneOriginalValue: !J && !!d,
              originalValuePartProps: d
                ? {
                    className: `${wl}__original-value`,
                    value: d,
                    currencySymbol: m,
                    rangePrice: I,
                    num_font_size: M,
                    strikeThrough: se,
                    billing: $,
                    suffixLabel: le,
                  }
                : null,
            },
          };
        },
        Pl = "ui-pdp-price__payments-link",
        kl = (e) => {
          const { label: l, track: a, target: t, close_modal_label: s } = e,
            {
              showMediaVariant: i,
              showModalVariant: o,
              modalTitle: r,
              mediaTag: u,
              wrapperClassName: d,
              mediaClassName: p,
              modalClassName: b,
              actionModalClassName: x,
              actionModalDeviceType: f,
              iframeTitle: y,
              iframeScrolling: v,
              iframeWidth: N,
              handleClick: C,
              mediaAction: A,
              iframeOnMessage: T,
              linkContainerClassName: L,
              linkClassName: S,
            } = ((e) => {
              let {
                target: l,
                label: a,
                track: t,
                className: s = "",
                showOnDemandIframe: i,
                showOnDemandIframeParams: o,
                layout_specs: r = {},
                modal_title: u = null,
              } = e;
              const m = l && (0, n.bj)(l, "new_version=true");
              return {
                namespace: Pl,
                modalTitle: u,
                mediaTag: "div",
                showMediaVariant: !!i && "function" == typeof i,
                showModalVariant: !!m,
                wrapperClassName: `${Pl}__wrapper`,
                mediaClassName: c()(
                  "ui-pdp-action-modal",
                  `${Pl}__action`,
                  (0, n.q2)(r)
                ),
                modalClassName: c()(`${Pl}__action`, (0, n.q2)(r)),
                actionModalClassName: "ui-pdp-iframe-modal",
                actionModalDeviceType: "mobile",
                mediaDevice: "mobile",
                iframeTitle: a ? a.text : null,
                iframeScrolling: "no",
                iframeWidth: "100%",
                handleClick: () => {
                  t && (0, n.sx)(t);
                },
                mediaAction: el({
                  device: "mobile",
                  modal_title: u,
                  target: l,
                  label: a,
                  track: t,
                  showOnDemandIframe: i,
                  showOnDemandIframeParams: o,
                }),
                iframeOnMessage: (0, n.VW)(
                  "vip:modal-content:loaded",
                  "height",
                  ".ui-pdp-iframe-modal",
                  ".andes-modal__header"
                ),
                linkContainerClassName: c()(Pl, (0, n.q2)(r), s),
                linkClassName: `${Pl}__link`,
              };
            })(e);
          return i
            ? (0, h.jsx)("div", {
                className: d,
                children: (0, h.jsx)(_.$U, { tag: u, className: p, action: A }),
              })
            : o
            ? (0, h.jsx)(g.cX, {
                deviceType: f,
                componentAsLabel: l.text,
                modalTitle: r,
                modalClassName: x,
                className: b,
                track: a,
                url: t,
                closeModalLabel: s,
                children: (0, h.jsx)(m.v, {
                  title: y,
                  src: t,
                  onMessage: T,
                  scrolling: v,
                  width: N,
                }),
              })
            : (0, h.jsx)("div", {
                className: L,
                children: (0, h.jsx)(
                  "a",
                  { href: t, className: S, onClick: C, children: l.text },
                  t
                ),
              });
        },
        zl = ["key"],
        Ml = "ui-vpp-carousel-tags",
        Dl = (0, i.memo)((e) => {
          const {
            containerClassName: l,
            carouselClassName: a,
            slideClassName: s,
            styledLabelClassName: i,
            srLabel: r,
            carouselProps: u,
            modalClassName: d,
            iframeScrolling: _,
            normalizedTags: x,
          } = ((e) => {
            let {
              className: l = "",
              ariaLabel: a = "",
              tags: t = null,
              id: s,
              close_modal_label: i,
            } = e;
            const r = (0, n.VW)(
                "vip:modal-content:loaded",
                "height",
                ".ui-pdp-iframe-modal",
                ".andes-modal__header"
              ),
              u = (t || []).map((e) => {
                var l, a, t;
                return {
                  showTag: !(null == e || !e.tag),
                  tagText: null != e && e.tag ? b.I.jsx(e.tag.text) : null,
                  onIframeMessage: r,
                  modalTitle: e.modal_title,
                  target: e.target,
                  tagProps: e.tag ? ((t = e.tag), (0, o.A)(t, zl)) : null,
                  key:
                    null !==
                      (l =
                        null == e || null === (a = e.tag) || void 0 === a
                          ? void 0
                          : a.text) && void 0 !== l
                      ? l
                      : s,
                  closeModalLabel: i,
                };
              });
            return {
              srLabel: a,
              namespace: Ml,
              containerClassName: Ml,
              carouselClassName: c()(Ml, `${Ml}__carousel`, l),
              slideClassName: `${Ml}__slide`,
              styledLabelClassName: "ui-vpp-discounts__tags",
              carouselProps: {
                pagination: !1,
                arrowsVisible: !1,
                arrows: !1,
                autoplay: !1,
                spacing: 0,
                lazyload: !1,
              },
              modalClassName: "ui-pdp-iframe-modal",
              iframeScrolling: "no",
              normalizedTags: u,
            };
          })(e);
          return (0, h.jsx)("div", {
            className: l,
            children: (0, h.jsx)(
              w.R,
              (0, t.A)(
                (0, t.A)({ className: a, srLabel: r }, u),
                {},
                {
                  children: x.map((e) => {
                    let {
                      showTag: l,
                      tagText: a,
                      onIframeMessage: n,
                      modalTitle: o,
                      target: r,
                      tagProps: c,
                      key: u,
                      closeModalLabel: b,
                    } = e;
                    return (0, h.jsx)(
                      w.C,
                      {
                        className: s,
                        children:
                          l &&
                          (0, h.jsx)(g.cX, {
                            modalClassName: d,
                            modalTitle: o,
                            url: r,
                            componentAsLabel: (0, h.jsx)(
                              p.G,
                              (0, t.A)(
                                (0, t.A)({ className: i }, c),
                                {},
                                { text: a }
                              ),
                              u
                            ),
                            closeModalLabel: b,
                            children: (0, h.jsx)(m.v, {
                              src: r,
                              scrolling: _,
                              onMessage: n,
                            }),
                          }),
                      },
                      u
                    );
                  }),
                }
              )
            ),
          });
        });
      Dl.displayName = "CarouselDiscounts";
      const Ol = (e) => {
          const {
              cards_credits_component: l,
              price_tags: a,
              discounts_tags: s,
              volume_discount_tags: i,
              action: o,
              showOnDemandIframe: r,
              showOnDemandIframeParams: u,
            } = e,
            {
              showCreditsComponent: m,
              showPriceTags: _,
              showDiscountsTags: g,
              discountsTagsClassName: b,
              showAction: x,
              showVolumeTags: f,
              showBuyLoyalty: y,
              loyaltyClassName: v,
              loyaltyTitleText: N,
              loyaltyActionTarget: C,
              loyaltyActionLabel: A,
              loyaltyIconId: T,
              loyaltyIconColor: L,
              loyaltyLinkAs: S,
              loyaltyLinkClassName: j,
              chevron: w,
            } = ((e) => {
              var l, a, t, s;
              let {
                namespace: i = "ui-pdp-price",
                cards_credits_component: o = null,
                price_tags: r = null,
                discounts_tags: u = null,
                volume_discount_tags: m = null,
                action: d = null,
                tooltip: _ = null,
                showTooltip: p = !1,
              } = e;
              const g =
                null == u ||
                null ===
                  (l = u.find((e) => {
                    let { tag: l } = e;
                    return null == l ? void 0 : l.layout_specs;
                  })) ||
                void 0 === l ||
                null === (l = l.tag) ||
                void 0 === l
                  ? void 0
                  : l.layout_specs;
              return {
                showCreditsComponent: !!o,
                showPriceTags: !!(r && r.length > 0),
                showDiscountsTags: !!(u && u.length > 0),
                discountsTagsClassName: c()(
                  `${i}__discounts-tags`,
                  (0, n.q2)(g)
                ),
                showAction: !!d,
                showVolumeTags: !!m,
                showBuyLoyalty:
                  "buy_loyalty_level_tooltip" === (null == _ ? void 0 : _.id) &&
                  !p,
                loyaltyClassName: `${i}__loyalty-purchase-description`,
                loyaltyTitleText:
                  null == _ || null === (a = _.title) || void 0 === a
                    ? void 0
                    : a.text,
                loyaltyActionTarget:
                  null == _ || null === (t = _.action) || void 0 === t
                    ? void 0
                    : t.target,
                loyaltyActionLabel:
                  null == _ || null === (s = _.action) || void 0 === s
                    ? void 0
                    : s.label,
                loyaltyIconId: "loyalty_points",
                loyaltyIconColor: "GREEN",
                loyaltyLinkAs: "a",
                loyaltyLinkClassName: "view-more__link",
                chevron: !0,
              };
            })(e);
          return (0, h.jsxs)(h.Fragment, {
            children: [
              m &&
                (0, h.jsx)(qe, (0, t.A)((0, t.A)({}, l), {}, { chevron: w })),
              _ && (0, h.jsx)(Ye, { tags: a }),
              g &&
                (0, h.jsx)("div", {
                  className: b,
                  children: (0, h.jsx)(Dl, { tags: s }),
                }),
              x &&
                (0, h.jsx)(
                  kl,
                  (0, t.A)(
                    (0, t.A)({}, o),
                    {},
                    { showOnDemandIframe: r, showOnDemandIframeParams: u }
                  )
                ),
              f && (0, h.jsx)(_l, { tags: i }),
              y &&
                (0, h.jsxs)("div", {
                  className: v,
                  children: [
                    (0, h.jsx)(d.In, { id: T, color: L }),
                    (0, h.jsxs)("span", { children: [N, " "] }),
                    (0, h.jsx)(
                      p.G,
                      (0, t.A)({ className: j, as: S, href: C }, A)
                    ),
                  ],
                }),
            ],
          });
        },
        Vl = (e) => {
          const { title: l, icon: a = null } = e,
            {
              shouldRender: s,
              containerClassName: i,
              contentClassName: n,
              titleClassName: o,
              processedSubtitles: r,
              actionClassName: u,
              showAction: m,
              showChevron: _,
              actionTarget: g,
              actionLabel: b,
              titleAs: x,
              subtitleAs: f,
              actionAs: y,
              chevronIconId: v,
            } = ((e) => {
              let {
                id: l,
                subtitles: a = [],
                action: t = null,
                namespace: s = "ui-pdp-price",
              } = e;
              const i = c()(`${s}__subtitle`, `${s}__tooltip-${l}__subtitle`);
              return {
                shouldRender:
                  "buy_loyalty_level_tooltip" === l || "currency_tooltip" === l,
                containerClassName: `${s}__tooltip-${l}`,
                contentClassName: `${l}__content`,
                titleClassName: `${s}__tooltip-${l}__title`,
                processedSubtitles: a.map((e) => ({
                  text: e.text,
                  color: e.color,
                  font_family: e.font_family,
                  font_size: e.font_size,
                  className: i,
                })),
                actionClassName: `${s}__tooltip-${l}__action view-more__link`,
                showAction: !!t,
                showChevron: !!t && !t.hide_chevron,
                actionTarget: null == t ? void 0 : t.target,
                actionLabel: null == t ? void 0 : t.label,
                titleAs: "span",
                subtitleAs: "p",
                actionAs: "a",
                chevronIconId: "chevron",
              };
            })(e);
          return s
            ? (0, h.jsxs)("div", {
                className: i,
                children: [
                  a && (0, h.jsx)(d.In, (0, t.A)({}, a)),
                  (0, h.jsxs)("div", {
                    className: n,
                    children: [
                      (0, h.jsx)(p.G, (0, t.A)({ className: o, as: x }, l)),
                      r.map((e) =>
                        (0, h.jsx)(
                          p.G,
                          {
                            className: e.className,
                            as: f,
                            text: e.text,
                            color: e.color,
                            font_family: e.font_family,
                            font_size: e.font_size,
                          },
                          e.text
                        )
                      ),
                      m &&
                        (0, h.jsx)(
                          p.G,
                          (0, t.A)({ className: u, as: y, href: g }, b)
                        ),
                      _ && (0, h.jsx)(d.In, { id: v }),
                    ],
                  }),
                ],
              })
            : null;
        },
        Bl = "currency_tooltip",
        Rl = (e) => {
          const { tooltip: l } = e,
            {
              cardClassName: a,
              cookieName: s,
              closeButtonTabIndex: i,
              closeButtonClassName: o,
              closeButtonTestId: r,
              closeButtonRole: u,
              viewCounterConfig: m,
              createHandleCloseTooltip: d,
            } = ((e) => {
              let {
                tooltip: l,
                namespace: a = "ui-pdp-price",
                setTooltipVisibility: t,
                showTooltip: s,
                toggleCurrencyTooltipVisibility: i,
              } = e;
              const o = (null == l ? void 0 : l.id) === Bl;
              return {
                cardClassName: c()(
                  `${a}__tooltip-card `,
                  { [(0, n.oR)(l)]: l },
                  {
                    "ui-pdp-card-tooltip__card ui-pdp-card-tooltip__card--arrow-top-left":
                      o,
                  }
                ),
                isCurrencyTooltip: o,
                cookieName: "tooltips-configuration",
                closeButtonTabIndex: "0",
                closeButtonClassName: "andes-tooltip-button-close",
                closeButtonTestId: "action-close-button",
                closeButtonRole: "button",
                viewCounterConfig: {
                  id: l.id,
                  visible: s,
                  storable: l.storable,
                },
                createHandleCloseTooltip: (e) => {
                  let { storable: l, updateCloseStatus: a } = e;
                  return () => {
                    l &&
                      (o &&
                        (localStorage.setItem(Bl, Math.floor(Date.now() / 1e3)),
                        i(!1)),
                      a()),
                      t(!1);
                  };
                },
              };
            })(e),
            _ = (0, x.xx)((0, t.A)((0, t.A)({}, m), {}, { cookieName: s })),
            p = d({ storable: l.storable, updateCloseStatus: _ });
          return (0, h.jsxs)(j.Zp, {
            className: a,
            children: [
              (0, h.jsx)("span", {
                "data-testid": r,
                role: u,
                tabIndex: i,
                className: o,
                onClick: p,
              }),
              (0, h.jsx)(Vl, (0, t.A)({}, l)),
            ],
          });
        },
        Ul = "currency_tooltip",
        El = (e) => {
          const {
              id: l,
              color: a,
              font_family: t,
              font_size: s,
              text: i,
              values: o,
              textIcon: r = null,
              bgColor: u = null,
            } = e,
            {
              showIconLabel: m,
              iconLabelClassName: d,
              iconLabelNumFontSize: _,
              spanClassName: p,
              enhancedText: g,
            } = ((e) => {
              let {
                namespace: l,
                color: a,
                font_family: t,
                font_size: s,
                margin: i,
                text: o,
                values: r,
                textIcon: u = null,
                bgColor: m = null,
                hasMarginOwn: d = !1,
                layout_specs: _ = {},
              } = e;
              return {
                showIconLabel: !!u,
                iconLabelClassName: c()(
                  `${l}__subtitle`,
                  (0, n.yq)(i),
                  (0, n.q2)(_)
                ),
                iconLabelNumFontSize: n.wS.PRODUCT_SUBTITLE[s],
                spanClassName: c()(
                  `${l}__subtitle`,
                  (0, n.op)(a),
                  (0, n.rK)(t),
                  (0, n.mm)(s),
                  (0, n.yq)(i),
                  {
                    [`${l}__subtitle--margin-own`]: d,
                    [`${l}__subtitle--background`]: m,
                    [`ui-pdp-background-color--${m}`]: m,
                  },
                  (0, n.q2)(_)
                ),
                enhancedText: b.I.jsx(o, r, null, n.wS.PRODUCT_SUBTITLE[s]),
              };
            })(e);
          return m
            ? (0, h.jsx)(y.s, {
                className: d,
                text: i,
                values: o,
                text_icon: r,
                color: a,
                bg_color: u,
                font_family: t,
                font_size: s,
                num_font_size: _,
              })
            : (0, h.jsx)("span", { id: l, className: p, children: g });
        },
        Wl = (e) => {
          const { shouldRender: l, classNames: a, processedProps: s } = $l(e),
            {
              showTooltip: o,
              isCurrencyTooltip: r,
              showCurrencyTooltip: c,
              setTooltipVisibility: m,
              toggleCurrencyTooltipVisibility: _,
              showCurrencyPriceTooltip: p,
              handleShowTooltip: g,
            } = ((e) => {
              const [l, a] = (0, i.useState)(e && !e.closed),
                [t, s] = (0, u.jZ)(Ul, -1),
                n = (null == e ? void 0 : e.id) === Ul;
              return {
                showTooltip: l,
                isCurrencyTooltip: n,
                showCurrencyTooltip: t,
                setTooltipVisibility: a,
                toggleCurrencyTooltipVisibility: s,
                showCurrencyPriceTooltip: n ? t : l,
                handleShowTooltip: (0, i.useCallback)((e, l, a) => {
                  e.preventDefault(), l || a(!0);
                }, []),
              };
            })(s.tooltip);
          if (!l) return null;
          const {
              containerClassName: x,
              mainContainerClassName: f,
              upperLabelClassName: y,
              secondLineClassName: v,
              discountLabelClassName: N,
              bulkPartClassName: C,
              labelDiscountClassName: A,
              infoIconClassName: T,
              subtitlesClassName: L,
              bottomLabelClassName: S,
              netPriceTaxClassName: j,
              namespace: w,
            } = a,
            {
              currencySymbol: I,
              value: $,
              rangePrice: P,
              upperLabel: k,
              label: z,
              discountLabel: M,
              discountLabelSecondary: D,
              discountLabelSubtitle: O,
              bottomLabel: V,
              valuePrefix: B,
              valueSuffixLabel: R,
              num_font_size: U,
              discount_num_font_size: E,
              bulkSuffix: W,
              priceReference: F,
              tooltip: G,
              background_gradient: H,
              hasHighlight: q,
              alignments: K,
              font_family: X,
              highlightSubtitles: Z,
              regularSubtitles: J,
              hasMarginOwn: Y,
              shouldShowPriceExtra: Q,
              cards_credits_component: ee,
              price_tags: le,
              discounts_tags: ae,
              volume_discount_tags: te,
              action: se,
              activeWidget: ie,
              showOnDemandIframe: ne,
              showOnDemandIframeParams: ce,
              netPriceTax: ue,
              meta: me,
              billing: de,
              progress_bar_scarcity: _e,
              showProgressBarScarcity: pe,
              overtitles_components: he,
              showStandaloneOriginalValue: xe,
              originalValuePartProps: ye,
              allowStandaloneSecondary: ve,
            } = s;
          return (0, h.jsxs)(h.Fragment, {
            children: [
              (0, h.jsxs)("div", {
                className: x,
                children: [
                  (0, h.jsxs)("div", {
                    className: f,
                    children: [
                      (0, h.jsxs)(be, {
                        namespace: w,
                        background_gradient: H,
                        children: [
                          k &&
                            (0, h.jsx)("div", {
                              className: `${y} ${(0, n.op)(k.color)}`,
                              children: k.text,
                            }),
                          (0, h.jsx)(Sl, {
                            overtitles_components: he,
                            originalValuePartProps: ye,
                          }),
                          xe && (0, h.jsx)(ge, (0, t.A)({}, ye)),
                          F &&
                            (0, h.jsx)(
                              fe,
                              (0, t.A)(
                                (0, t.A)({ namespace: w }, F),
                                {},
                                { side: "bottom", trigger: "click" }
                              )
                            ),
                          (0, h.jsxs)("div", {
                            className: v,
                            children: [
                              z &&
                                (0, h.jsx)("div", {
                                  className: (0, n.op)(z.color),
                                  children: b.I.jsx(z.text, z.values),
                                }),
                              $ &&
                                (0, h.jsx)(ge, {
                                  className: C,
                                  rangePrice: P,
                                  value: $,
                                  currencySymbol: I,
                                  suffix: W,
                                  meta: me,
                                  billing: de,
                                  num_font_size: U,
                                  suffixLabel: R,
                                  prefixLabel: B,
                                  alignments: K,
                                  font_family: X,
                                }),
                              O &&
                                (0, h.jsx)("span", {
                                  className: A,
                                  children: O.text,
                                }),
                              (0, h.jsx)(fl, {
                                className: N,
                                discountLabel: M,
                                discountLabelSecondary: D,
                                discount_num_font_size: E,
                                allowStandaloneSecondary: ve,
                              }),
                              r &&
                                (0, h.jsx)("span", {
                                  "data-testid": "info-icon",
                                  className: T,
                                  onClick: (e) => g(e, c, _),
                                  role: "button",
                                  tabIndex: "-1",
                                  children: (0, h.jsx)(d.In, {
                                    id: "price_info",
                                    className: (0, n.op)("BLUE"),
                                  }),
                                }),
                            ],
                          }),
                          (null == Z ? void 0 : Z.length) > 0 &&
                            (0, h.jsx)("div", {
                              className: L,
                              children: Z.map((e) => {
                                let {
                                  id: l,
                                  color: a,
                                  font_family: t,
                                  font_size: s,
                                  margin: i,
                                  text: n,
                                  values: o,
                                  text_icon: r,
                                  bg_color: c,
                                  layout_specs: u,
                                } = e;
                                return (0, h.jsx)(
                                  El,
                                  {
                                    namespace: w,
                                    id: l,
                                    color: a,
                                    font_family: t,
                                    font_size: s,
                                    margin: i,
                                    text: n,
                                    values: o,
                                    textIcon: r,
                                    bgColor: c,
                                    layout_specs: u,
                                  },
                                  n
                                );
                              }),
                            }),
                          (0, h.jsx)(re, {
                            show: q,
                            bottomLabel: V,
                            className: S,
                          }),
                          pe && (0, h.jsx)(oe, (0, t.A)({}, _e)),
                        ],
                      }),
                      (0, h.jsx)(re, {
                        show: !q,
                        bottomLabel: V,
                        className: S,
                      }),
                      J &&
                        J.length > 0 &&
                        (0, h.jsx)("div", {
                          className: L,
                          role: "group",
                          children: J.map((e) => {
                            let {
                              id: l,
                              color: a,
                              font_family: t,
                              font_size: s,
                              margin: i,
                              text: n,
                              values: o,
                              text_icon: r,
                              bg_color: c,
                              layout_specs: u,
                            } = e;
                            return (0, h.jsx)(
                              El,
                              {
                                namespace: w,
                                id: l,
                                color: a,
                                font_family: t,
                                font_size: s,
                                margin: i,
                                text: n,
                                values: o,
                                textIcon: r,
                                bgColor: c,
                                hasMarginOwn: Y,
                                layout_specs: u,
                              },
                              n
                            );
                          }),
                        }),
                      ue && (0, h.jsx)("div", { className: j, children: ue }),
                      ie &&
                        (0, h.jsx)(
                          qe,
                          (0, t.A)(
                            (0, t.A)({}, ie),
                            {},
                            { showOnDemandIframe: ne }
                          )
                        ),
                    ],
                  }),
                  Q &&
                    (0, h.jsx)(Ol, {
                      cards_credits_component: ee,
                      price_tags: le,
                      discounts_tags: ae,
                      volume_discount_tags: te,
                      action: se,
                      tooltip: G,
                      showTooltip: o,
                      showOnDemandIframe: ne,
                      showOnDemandIframeParams: ce,
                    }),
                ],
              }),
              G &&
                p &&
                (0, h.jsx)(Rl, {
                  tooltip: G,
                  setTooltipVisibility: m,
                  showTooltip: o,
                  toggleCurrencyTooltipVisibility: _,
                }),
            ],
          });
        };
      Wl.displayName = "PriceMobile";
      const Fl = (e) => {
          const l = (0, s.HZ)(),
            { staticProps: a } = l,
            { deviceType: i } = a,
            n = "mobile" === i ? Wl : jl;
          return (0, h.jsx)(n, (0, t.A)({}, e));
        },
        Gl = (e) => {
          const {
              value: l,
              currencySymbol: a,
              originalValue: t = null,
              num_font_size: s,
              font_family: i,
            } = e,
            {
              mainClassName: o,
              showOriginalValue: r,
              originalValueClassName: c,
            } = ((e) => {
              let { color: l = null, originalValue: a = null } = e;
              return {
                mainClassName: (0, n.op)(l),
                showOriginalValue: !!a,
                originalValueClassName: "ui-pdp-price__part__previous",
              };
            })(e);
          return (0, h.jsxs)(h.Fragment, {
            children: [
              (0, h.jsx)(ge, {
                value: l,
                currencySymbol: a,
                num_font_size: s,
                font_family: i,
                className: o,
              }),
              r &&
                (0, h.jsxs)(h.Fragment, {
                  children: [
                    " ",
                    (0, h.jsx)(ge, {
                      className: c,
                      value: t,
                      currencySymbol: a,
                      strikeThrough: !0,
                      num_font_size: s,
                      font_family: i,
                    }),
                  ],
                }),
            ],
          });
        },
        Hl = (e) => {
          const { background_gradient: l } = e,
            a = $(e),
            s = ((e) => (e ? "" : "mt-16"))(l);
          return (0, t.A)(
            (0, t.A)({ meta: !0, size: "large", className: s }, a),
            {},
            { background_gradient: l }
          );
        },
        ql = (e) => (0, h.jsx)(jl, (0, t.A)({}, Hl(e)));
      ql.displayName = "MappedPriceDesktop";
      const Kl = (e) => (0, t.A)({ size: "large" }, $(e)),
        Xl = (e) => (0, h.jsx)(Wl, (0, t.A)({}, Kl(e)));
      Xl.displayName = "MappedPriceMobile";
    },
  },
]);
//# sourceMappingURL=lib-d20ffa3f.ab81e4f4.js.map
