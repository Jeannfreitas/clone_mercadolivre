"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [35312, 52882, 75131],
  {
    98562(e, t, l) {
      l.d(t, { a: () => u, z: () => m });
      var s = l(58168),
        o = l(96540),
        a = l(46942),
        i = l.n(a),
        n = l(69247),
        r = l(95990),
        c = l(48529);
      const d = "andes-radio";
      var u = (function () {
        const e = (e) => {
          let {
            checked: t = !1,
            disabled: l = !1,
            error: a = !1,
            id: u,
            inline: m = !1,
            inputProps: p = {},
            labelPosition: _ = "right",
            label: f,
            name: h,
            onChange: b,
            srLabel: x,
            suffix: g,
            value: y,
            ref: v,
          } = e;
          const { getThemedComponentClasses: N, themeHash: T } = (0, r.wR)(),
            C = (0, n.Bi)(u),
            j = i()(
              d,
              {
                [`${d}--error`]: a,
                [`${d}--inline`]: m,
                [`${d}--disabled`]: l,
                [`${d}--inverted`]: "left" === _,
                [`${d}--suffix`]: g,
              },
              null == N ? void 0 : N("radioButton")
            );
          return o.createElement(
            "div",
            (0, s.A)(
              { className: j, ref: v, "data-andes-radio-button": !0 },
              (0, c.i)({ disabled: l, checked: t, error: a }),
              T
            ),
            o.createElement(
              "div",
              { className: `${d}-element`, "data-andes-radio-button-tick": !0 },
              o.createElement(
                "input",
                (0, s.A)({}, p, {
                  type: "radio",
                  className: `${d}__input`,
                  id: C,
                  name: h,
                  value: y,
                  checked: t,
                  onChange: (e) => {
                    (e.target.value = y), "function" == typeof b && b(e);
                  },
                  onMouseUp: (e) => {
                    e.target.blur();
                  },
                  disabled: l,
                  "aria-label": x,
                })
              ),
              o.createElement(
                "div",
                { className: `${d}__background` },
                o.createElement("div", { className: `${d}__outer-circle` }),
                o.createElement("div", { className: `${d}__inner-circle` })
              )
            ),
            f &&
              !x &&
              o.createElement(
                "label",
                {
                  className: `${d}__label`,
                  htmlFor: C,
                  "data-andes-radio-button-label": !0,
                },
                o.createElement("span", null, f)
              ),
            g
          );
        };
        return (e.displayName = "RadioButton"), e;
      })();
      var m = (function () {
        const e = (e) => {
          let {
            children: t,
            defaultValue: l,
            disabled: s = !1,
            inline: a = !1,
            labelPosition: i = "right",
            name: n,
            onChange: r,
            srLabel: c,
            value: d,
            ref: m,
          } = e;
          const p = (0, o.useMemo)(() => void 0 === d, []),
            [_, f] = (0, o.useState)(l);
          (0, o.useEffect)(() => {
            p || f(d);
          }, [d, p]);
          const h = (e) => {
              p && f(e.target.value), "function" == typeof r && r(e);
            },
            b = o.Children.map(t, (e) => {
              const t = (p ? _ : d) === e.props.value;
              return o.createElement(u, {
                checked: t,
                disabled: s || e.props.disabled,
                error: e.props.error,
                id: e.props.id,
                inline: a,
                labelPosition: i,
                key: e.props.value,
                label: e.props.label,
                name: n,
                onChange: h,
                srLabel: e.props.srLabel,
                suffix: e.props.suffix,
                value: e.props.value,
              });
            });
          return o.createElement(
            "div",
            {
              className: "andes-radioGroup",
              role: "radiogroup",
              "aria-label": c,
              ref: m,
            },
            b
          );
        };
        return (e.displayName = "RadioGroup"), e;
      })();
    },
    92918(e, t, l) {
      l.d(t, { A: () => m });
      var s = l(93603),
        o = l(24635),
        a = l(46942),
        i = l.n(a),
        n = l(63950),
        r = l.n(n),
        c = l(44489);
      const d = (e) => {
        let {
          linkLabel: t = null,
          url: l = null,
          target: s = "_self",
          highlightedText: o,
          modal: a = null,
          onClick: n = r(),
          className: d = "",
        } = e;
        return {
          className: i()("ui-pdp-action-label-component__property-link", d),
          label: {
            className: i()({ [`${d}__label`]: d }),
            as: "span",
            text: t?.label,
          },
          action: {
            label: o,
            target: l,
            htmlTarget: s,
            handleClick: () => {
              (0, c.sx)(t?.track), n && n();
            },
            modal: a,
            className: `${d}__media`,
          },
        };
      };
      var u = l(74848);
      const m = (e) => {
        const { className: t, label: l, action: a } = d(e);
        return (0, u.jsxs)("div", {
          className: t,
          children: [
            (0, u.jsx)(s.G, { className: l.className, ...l?.text, as: l.as }),
            (0, u.jsx)(o.A, {
              label: a.label,
              target: a.target,
              htmlTarget: a.htmlTarget,
              onClick: a.handleClick,
              modal: a.modal,
              className: a.className,
            }),
          ],
        });
      };
    },
    56115(e, t, l) {
      l.r(t), l.d(t, { default: () => Ee });
      l(18111), l(61701);
      var s = l(96540),
        o = l(98562),
        a = l(94927),
        i = (l(20116), l(46942)),
        n = l.n(i),
        r = l(44489);
      const c = r.aA;
      var d = l(6155),
        u = l(74848);
      const m = (e) =>
        (0, u.jsx)("div", {
          className: "ui-pdp-buy-box-offers__filter-message",
          children: (0, u.jsx)(c, {
            components: { pdp_filters_change: d.default },
            useId: !0,
            ...e,
          }),
        });
      var p = l(76419);
      const _ = (e) => (0, u.jsx)(p.default, { className: "mt-12", ...e }),
        f = (e) => (0, u.jsx)(p.default, { className: "mt-12", ...e });
      var h = l(43984),
        b = l(81876);
      const x = b.gm;
      var g = l(33010);
      const y = (e) => {
        const { deviceType: t } = (0, s.useContext)(h.Ay),
          {
            price: l = {},
            discount_label: o = null,
            font_size: a = null,
            discount_label_secondary: i = null,
          } = e,
          { layout_specs: c = {} } = l,
          d = (0, s.useMemo)(() => (c ? (0, r.q2)(c) : ""), [c]),
          m = (0, s.useMemo)(
            () =>
              ((e) => {
                if (!e)
                  return {
                    value: void 0,
                    originalValue: void 0,
                    valueSuffix: void 0,
                  };
                const { bulk_sales: t } = e;
                return t?.value
                  ? {
                      value: t.value,
                      originalValue: t.original_value,
                      valueSuffix: t.bulk_sales_suffix || {
                        text: t.text,
                        color: t.color,
                        accessibility_text: t.accessibility_text,
                      },
                    }
                  : {
                      value: e.value,
                      originalValue: e.original_value,
                      valueSuffix: void 0,
                    };
              })(l),
            [l]
          );
        return (0, u.jsx)("div", {
          className: n()("ui-pdp-buy-box-offers__offer-price", d),
          children: (0, u.jsx)(x, {
            className: a && `ui-pdp-size--${a}`,
            ...e,
            layout_specs: c,
            value: m.value,
            currencySymbol: l.currency_symbol,
            originalValue: m.originalValue,
            originalValueType: l?.original_value_type,
            originalValueSuffix: l?.original_value_suffix,
            valueSuffix: m.valueSuffix,
            discountLabel: o,
            discountLabelSecondary: i,
            num_font_size: a ? g.w.PRICE_NOT_SELECTED[a] : 28,
            original_value_num_font_size: a
              ? g.w.ORIGINAL_PRICE_RESULT
              : g.w.ORIGINAL_DEFAULT,
            discount_num_font_size: a ? 14 : void 0,
            bottomLabel: l?.bottom_label,
          }),
        });
      };
      var v = l(60711),
        N = l(41303);
      const T = (0, v.A)(N.default)(N.jsonToProps),
        C = (e) => {
          const { deviceType: t } = (0, s.useContext)(h.Ay);
          return (0, u.jsx)("div", {
            className: "ui-pdp-buy-box-offers__offer-seller",
            children: "mobile" === t && (0, u.jsx)(T, { ...e }),
          });
        };
      var j = l(27876),
        k = l(38114),
        S = l(89918);
      const w = (0, j.hn)(k.Xz)(k.sV),
        A = (0, v.A)(w)((e) => ({
          ...(0, k.eA)(e),
          statics: {
            namespace: "ui-pdp-seller",
            featureName: "seller_summary",
          },
          sendMamushkaMetrics: S.A,
        })),
        I = (e) =>
          (0, u.jsx)("div", {
            className: "ui-pdp-buy-box-offers__offer-seller",
            children: (0, u.jsx)(A, { ...e }),
          });
      var L = l(32478),
        $ = l(16761),
        E = l(35001),
        P = l(92041),
        D = l(69277),
        B = l(98968),
        O = l(87917),
        M = l(14412),
        V = l(98854),
        R = l(39126),
        q = l(37755),
        G = l(52315),
        H = l(91153);
      const F = (e) =>
          (0, u.jsx)("div", {
            className: "ui-pdp-buy-box-offers__offer-generic-summary",
            children: (0, u.jsx)(c, {
              components: {
                cpg_summary: L.o,
                cbt_summary: $.o,
                cbt_taxes_summary: E.o,
                coupon_summary: P.oU,
                shipping_summary: D.o,
                second_shipping_summary: B.o,
                third_shipping_summary: O.o,
                pick_up_summary: M.oU,
                returns_summary: V.o,
                meliplus_summary: R.o,
                card_with_thumbnails: H.o,
                upselling_meliplus_summary: q.oU,
                upselling_meliplus_cashback: G.oU,
              },
              useId: !0,
              ...e,
            }),
          }),
        z = (e) => (0, u.jsx)(p.default, { ...e }),
        U = (e) => (0, u.jsx)(p.default, { className: "mt-12", ...e }),
        K = (e) => (0, u.jsx)(p.default, { className: "mt-12", ...e }),
        W = (e) => (0, u.jsx)(p.default, { className: "mt-5", ...e });
      var Y = l(44678),
        X = l(55410),
        Z = l(57578),
        Q = l(93603),
        J = l(80626);
      const ee = "ui-pdp-moq-information",
        te = (e) => {
          let {
            className: t = "",
            collapsible_tooltip: l = null,
            subtitle: s,
          } = e;
          return (0, u.jsx)("div", {
            className: n()(`${ee}`, t),
            children: l
              ? (0, u.jsx)(J.A, {
                  collapsibleTooltip: l,
                  children:
                    s &&
                    (0, u.jsx)(Q.G, { className: `${ee}__subtitle`, ...s }),
                })
              : s && (0, u.jsx)(Q.G, { className: `${ee}__subtitle`, ...s }),
          });
        },
        le = (e) => {
          const { deviceType: t } = (0, s.useContext)(h.Ay),
            l = "mobile" === t ? Y.A : X.A,
            o = "mobile" === t ? Z.default : te;
          return (0, u.jsx)("div", {
            className: "ui-pdp-buy-box-offers__offer-generic-summary",
            children: (0, u.jsx)(c, {
              components: {
                highlights_scarcity: p.default,
                stock_information: l,
                moq_information: o,
              },
              useId: !0,
              ...e,
            }),
          });
        };
      var se = l(82690);
      const oe = (e) =>
        (0, u.jsx)("div", {
          className: "ui-pdp-buy-box-offers__offer-generic-summary",
          children: (0, u.jsx)(c, {
            components: { item_status_short_description_message: se.default },
            useId: !0,
            ...e,
          }),
        });
      var ae = l(69091);
      const ie = (e) =>
        (0, u.jsx)("div", {
          className: "ui-pdp-buy-box-offers__offer-generic-summary",
          children: (0, u.jsx)(c, {
            components: { paypal_tooltip: ae.default },
            useId: !0,
            ...e,
          }),
        });
      var ne = l(19035);
      const re = (e) =>
        (0, u.jsx)("div", {
          className: "ui-pdp-buy-box-offers__offer-highlights-information",
          children: (0, u.jsx)(c, {
            components: { meliplus_label_summary: ne.o },
            useId: !0,
            ...e,
          }),
        });
      var ce = l(99747);
      const de = "ui-pdp-buy-box-offers",
        ue = {
          pill_information: U,
          pdp_filters_change: m,
          lightning_promotions: W,
          price: y,
          promotions: z,
          promotions_bottom: K,
          progress_bar: z,
          shipping_section: ce.oU,
          generic_summary: F,
          seller: C,
          seller_summary: I,
          ui_message: oe,
          tooltip: ie,
          warning_message: le,
          highlights_information: re,
          highlights_scarcity: _,
          price_related_highlight: f,
        },
        me = (e) => {
          const {
              items: t = [],
              see_more_action: l = null,
              cards_credits_component: s = null,
              tags: o = null,
              payment_action: a = null,
              tooltip: i = null,
              closeModalLabel: r = null,
              showOnDemandIframe: c,
              showOnDemandIframeParams: d,
            } = e,
            u = `${de}__mobile`,
            m = `${de}__offer-list`,
            p = de,
            _ = n()(`${de}__offer-list-item`, `${de}__offer-see-more`, {
              [`${de}__offer-list-item--hidden`]: !l,
            }),
            f = {
              shipping_section: { className: `${de}__shipping-section mt-24` },
              price: { showOnDemandIframe: c, showOnDemandIframeParams: d },
            };
          return {
            containerClassName: u,
            listClassName: m,
            namespaceValue: p,
            seeMoreItemClassName: _,
            processedItems: t.map((e) => {
              const t = Boolean(e?.title?.text_icon),
                l = (e?.components || []).map((t) => ({
                  ...t,
                  useId:
                    "pdp_filters_change" === t?.id ||
                    "highlights_scarcity" === t?.id ||
                    "price_related_highlight" === t?.id,
                  extraProps: f?.[t?.id] ?? {},
                  showInstallationServices: Boolean(
                    e?.selected && "seller_summary" === t?.id
                  ),
                  installationServicesWrapperClassName: "mt-16 mb-16",
                }));
              return {
                key: e?.type,
                itemClassName: n()(`${de}__offer-list-item`, {
                  [`${de}__offer-list-item--SELECTED`]: e?.selected,
                  [`${de}__offer-list-item--NOT-SELECTED`]: !e?.selected,
                }),
                contentWrapperRole: "presentation",
                contentWrapperClassName: `${de}__content-wrapper`,
                offerContentClassName: `${de}__offer-content`,
                childrenClassName: `${de}__offer-list-children`,
                showChildren: Boolean(e?.selected),
                radioProps: {
                  id: e?.item_id,
                  name: e?.item_id,
                  value: e?.item_id,
                  checked: e?.selected,
                  label: t ? void 0 : e?.title?.text,
                  srLabel: t ? e?.title?.text : void 0,
                },
                hasSuffix: t,
                suffixText: e?.title?.text,
                suffixIconId: "cockade",
                suffixIconClassName: "ui-pdp-cockade-icon",
                suffixLabelClassName: `andes-radio__label ${de}__with-icon`,
                processedComponents: l,
                offerType: e?.type,
                selected: e?.selected,
                selectionTrack: e?.selection_track,
              };
            }),
            hiddenInputProps: {
              type: "hidden",
              name: "offer_type",
              "data-testid": "offer-type-hidden-input",
              value: t.find((e) => e?.selected)?.type ?? "",
            },
            see_more_action: l,
            showTooltipCard: Boolean(i),
            tooltipCardBaseProps: { tooltip: i },
            extrasBaseProps: {
              cards_credits_component: s,
              tags: o,
              payment_action: a,
              tooltip: i,
              closeModalLabel: r,
              showOnDemandIframe: c,
              showOnDemandIframeParams: d,
            },
          };
        };
      l(7588);
      const pe = "ui-pdp-buy-box-offers",
        _e = (e) => {
          let { items: t } = e;
          const [l, o] = (0, s.useState)([]),
            [a, i] = (0, s.useState)(t?.[0]?.selected),
            n = (0, s.useCallback)(() => {
              const e = document.querySelector(
                  `.${pe}__offer-list-item--NOT-SELECTED`
                ),
                t = document.querySelector(`.${pe}__offer-list-item--SELECTED`);
              if (!t || !e) return;
              const l = t.querySelector(".andes-radio"),
                s = t.querySelector(`.${pe}__offer-price`);
              (t.style.maxHeight = `${
                (s?.offsetHeight ?? 0) + (l?.offsetHeight ?? 0) + 32
              }px`),
                (t.style.overflow = "hidden"),
                (e.style.overflow = "hidden");
            }, []),
            r = (0, s.useCallback)(() => {
              const e = document.querySelector(
                  `.${pe}__offer-list-item--SELECTED`
                ),
                t = document.querySelector(
                  `.${pe}__offer-list-item--NOT-SELECTED`
                );
              if (!e || !t) return;
              const l = t.querySelector(".andes-radio"),
                s = t.querySelector(`.${pe}__offer-price`),
                o = s instanceof Element ? window.getComputedStyle(s) : null,
                a = o
                  ? (parseFloat(o.marginTop) || 0) +
                    (parseFloat(o.marginBottom) || 0)
                  : 0,
                i = s?.offsetHeight ?? 0,
                n = l?.offsetHeight ?? 0;
              (e.style.maxHeight = "2000px"),
                (t.style.maxHeight = `${i + n + a + 32}px`),
                setTimeout(() => {
                  (e.style.overflow = ""), (t.style.overflow = "");
                }, 300);
            }, []),
            c = (0, s.useCallback)(() => {
              l.forEach(() => r());
            }, [r, l]);
          return (
            (0, s.useEffect)(() => {
              const e = document.querySelectorAll(`.${pe}__offer-list-item`);
              o(Array.from(e)), i(t?.[0]?.selected);
            }, [t]),
            (0, s.useEffect)(() => {
              c();
            }, [a, t, c]),
            { collapseItemAccordion: n }
          );
        };
      var fe = l(67021),
        he = l(61915),
        be = l(50701);
      const xe = (e) => {
          let { onPaymentMethodSelected: t, collapseItemAccordion: l } = e;
          return {
            handlePaymentMethodSelected: (0, s.useCallback)(
              (e) => {
                let {
                  event: s,
                  offerType: o,
                  selectionTrack: a,
                  selected: i,
                  keyDown: n,
                } = e;
                if (i || (n && 13 !== s.keyCode && 32 !== s.keyCode)) return;
                s && s.preventDefault();
                const r = document.querySelector(
                    ".ui-pdp-buy-box-offers__offer-list"
                  ),
                  c =
                    (r?.getBoundingClientRect().top ?? 0) + window.scrollY - 50;
                (0, fe.sx)(a),
                  setTimeout(() => {
                    l(),
                      window.scrollTo({ top: c, behavior: "smooth" }),
                      t?.(s, o),
                      (0, be.Y8)(() => {
                        he.A.pushParam("offer_type", o, !0);
                      }, "background");
                  }, 300);
              },
              [t, l]
            ),
          };
        },
        ge = (e) => {
          let { tooltip: t } = e;
          const [l, o] = (0, s.useState)(Boolean(t && !t.closed));
          return { showTooltip: l, setShowTooltip: o };
        };
      var ye = l(91789),
        ve = l(15011),
        Ne = l(65413);
      const Te = {},
        Ce = (e) => {
          let { see_more_action: t = Te, namespace: l = null } = e;
          const { deviceType: o } = (0, s.useContext)(h.Ay),
            a = (0, ye.A)(
              t,
              (0, ve.V)(
                "vip:modal-content:loaded",
                "height",
                ".ui-pdp-iframe-modal",
                ".andes-modal-dialog__header"
              ),
              !0
            ),
            i = "mobile" === o ? t : a;
          return (0, u.jsx)(Ne.A, {
            action: i,
            className: `${l}__action-link`,
          });
        };
      var je = l(82453);
      const ke = b.xD,
        Se = (e) => {
          let {
            cards_credits_component: t = null,
            tags: l = null,
            payment_action: o = null,
            tooltip: a = null,
            showTooltip: i = !1,
            closeModalLabel: n = null,
            showOnDemandIframe: r = null,
          } = e;
          const { deviceType: c } = (0, s.useContext)(h.Ay),
            d = "mobile" === c ? je.A : ke,
            m = "mobile" === c ? {} : { closeModalLabel: n };
          return (0, u.jsx)(d, {
            cards_credits_component: t,
            price_tags: l,
            discounts_tags: l,
            action: o,
            tooltip: a,
            showTooltip: i,
            showOnDemandIframe: r,
            ...m,
          });
        },
        we = b.Co;
      var Ae = l(42455);
      const Ie = "currency_tooltip",
        Le = (e) => {
          let { tooltip: t, setTooltipVisibility: l, showTooltip: s } = e;
          const [o, a] = (0, Ae.A)(Ie, -1);
          return (
            (t && t.id === Ie ? o : s) &&
            (0, u.jsx)(we, {
              tooltip: t,
              setTooltipVisibility: l,
              showTooltip: s,
              toggleCurrencyTooltipVisibility: a,
            })
          );
        };
      var $e = l(50538);
      const Ee = (e) => {
        let {
          onPaymentMethodSelected: t,
          items: l,
          tooltip: i,
          renderInstallationServices: n,
          ...r
        } = e;
        const { collapseItemAccordion: d } = _e({ items: l }),
          { handlePaymentMethodSelected: m } = xe({
            onPaymentMethodSelected: t,
            collapseItemAccordion: d,
          }),
          { showTooltip: p, setShowTooltip: _ } = ge({ tooltip: i }),
          {
            containerClassName: f,
            listClassName: h,
            namespaceValue: b,
            seeMoreItemClassName: x,
            processedItems: g,
            hiddenInputProps: y,
            extrasBaseProps: v,
            see_more_action: N,
            showTooltipCard: T,
            tooltipCardBaseProps: C,
          } = me({ ...r, items: l, tooltip: i });
        return (0, u.jsxs)(u.Fragment, {
          children: [
            (0, u.jsxs)("div", {
              className: f,
              children: [
                (0, u.jsxs)(a.B8, {
                  withDividers: !0,
                  className: h,
                  children: [
                    g?.map((e) =>
                      (0, u.jsx)(
                        s.Fragment,
                        {
                          children: (0, u.jsx)(a.ck, {
                            className: e?.itemClassName,
                            children: (0, u.jsxs)("div", {
                              role: e?.contentWrapperRole,
                              className: e?.contentWrapperClassName,
                              onClick: (t) =>
                                m({
                                  event: t,
                                  offerType: e?.offerType,
                                  selectionTrack: e?.selectionTrack,
                                  selected: e?.selected,
                                }),
                              onKeyDown: (t) =>
                                m({
                                  event: t,
                                  offerType: e?.offerType,
                                  selectionTrack: e?.selectionTrack,
                                  selected: e?.selected,
                                  keyDown: !0,
                                }),
                              children: [
                                (0, u.jsx)(o.a, {
                                  ...e?.radioProps,
                                  suffix:
                                    e?.hasSuffix &&
                                    (0, u.jsxs)("label", {
                                      className: e?.suffixLabelClassName,
                                      htmlFor: e?.radioProps?.id,
                                      children: [
                                        (0, u.jsx)("span", {
                                          children: e?.suffixText,
                                        }),
                                        (0, $e.default)(
                                          { id: e?.suffixIconId },
                                          e?.suffixIconClassName
                                        ),
                                      ],
                                    }),
                                }),
                                (0, u.jsx)("div", {
                                  className: e?.offerContentClassName,
                                  children: e?.processedComponents?.map((e) => {
                                    let { extraProps: t, useId: l, ...o } = e;
                                    return (0, u.jsxs)(
                                      s.Fragment,
                                      {
                                        children: [
                                          o?.showInstallationServices &&
                                            (0, u.jsx)("div", {
                                              className:
                                                o?.installationServicesWrapperClassName,
                                              onClick: (e) =>
                                                e.stopPropagation(),
                                              onKeyDown: (e) => {
                                                ("Enter" !== e.key &&
                                                  " " !== e.key) ||
                                                  e.stopPropagation();
                                              },
                                              children: n?.(),
                                            }),
                                          (0, u.jsx)(c, {
                                            components: ue,
                                            ...o,
                                            ...t,
                                            useId: l,
                                          }),
                                        ],
                                      },
                                      o?.id
                                    );
                                  }),
                                }),
                              ],
                            }),
                          }),
                        },
                        e?.key
                      )
                    ),
                    N &&
                      (0, u.jsx)(a.ck, {
                        className: x,
                        children: (0, u.jsx)(Ce, {
                          namespace: b,
                          see_more_action: N,
                        }),
                      }),
                  ],
                }),
                (0, u.jsx)(Se, { ...v, showTooltip: p, setShowTooltip: _ }),
              ],
            }),
            T && (0, u.jsx)(Le, { ...C, showTooltip: p, setShowTooltip: _ }),
            (0, u.jsx)("input", { ...y }),
          ],
        });
      };
    },
    69091(e, t, l) {
      l.r(t), l.d(t, { default: () => C });
      l(18111), l(20116);
      var s = l(96540),
        o = l(46942),
        a = l.n(o),
        i = l(61678),
        n = l(67021),
        r = (l(61701), l(57051)),
        c = l(46458),
        d = l(93603),
        u = l(50538),
        m = l(92918),
        p = l(24510),
        _ = l(74848);
      const f = (e) => {
          const {
              target: t,
              label: l = null,
              action_type: s,
              modal_title: o,
              track: a = null,
            } = e,
            i = {
              [p.T.LINK]: { url: t },
              [p.T.MODAL]: { modal: { url: t, title: o } },
            },
            n = { ...l };
          delete n.text;
          const r = {
            linkLabel: { label: n, track: a },
            highlightedText: { text: l.text },
            className: "ui-vip-credits-bau__action-label-component",
            ...i[s],
          };
          return (0, _.jsx)(m.A, { ...r });
        },
        h = "ui-pdp-card-tooltip__card__content",
        b = { percentage: null, color: null, show_highlight: !0 },
        x = (e) => {
          let {
            title: t,
            icon: l = null,
            subtitles: s = null,
            progressBar: o = b,
            action: i = null,
            className: n = "",
          } = e;
          return (0, _.jsxs)("div", {
            className: a()(h, n),
            children: [
              l && (0, u.default)(l, `${h}__icon`),
              (0, _.jsxs)("div", {
                className: `${h}__texts`,
                children: [
                  t?.text &&
                    (0, _.jsx)(d.G, {
                      as: "p",
                      color: t.color,
                      font_size: t.font_size,
                      font_family: t.font_family,
                      text: t.values ? c.I.jsx(t.text, t.values) : t.text,
                      className: `${h}__title`,
                      withDangerous: !t.values,
                    }),
                  o &&
                    (0, _.jsx)("div", {
                      className: `${h}__progressBar__container`,
                      children: (0, _.jsx)(r.Y, {
                        color: o.color,
                        highlight: o.show_highlight,
                        value: o.percentage,
                      }),
                    }),
                  s &&
                    s.length > 0 &&
                    s.map(
                      (e) =>
                        e.text &&
                        (0, _.jsx)(
                          d.G,
                          {
                            as: "p",
                            color: e.color,
                            font_size: e.font_size,
                            font_family: e.font_family,
                            className: `${h}__subtitle`,
                            text: e.values ? c.I.jsx(e.text, e.values) : e.text,
                          },
                          e.text
                        )
                    ),
                  i &&
                    (0, _.jsx)("div", {
                      className: `${h}__action`,
                      children: (0, _.jsx)(f, { ...i }),
                    }),
                ],
              }),
            ],
          });
        };
      var g = l(83848),
        y = l(29603);
      const v = "ui-pdp-card-tooltip",
        N = { CENTER: "center", RIGHT: "right", LEFT: "left" },
        T = { TOP: "top", BOTTOM: "bottom" },
        C = (e) => {
          let {
            component_id: t = null,
            className: l = "",
            title: o,
            icon: r = null,
            arrow_type: c = null,
            arrow_position: d = "TOP",
            closeable: m,
            storable: p,
            subtitles: f = null,
            close_track: h = null,
            has_shadow: b,
            id: C = null,
            progress_bar: j = null,
            isFetching: k = !1,
            highlight: S = !1,
            userConsentCookie: w,
            action: A = null,
            is_cbt: I = !1,
          } = e;
          const [L, $] = (0, s.useState)(!0),
            [E, P] = (0, s.useState)(0),
            D = (0, y.A)({
              id: t || C,
              visible: L,
              storable: p,
              cookieName: "tooltips-configuration",
              userConsent: w?.find((e) => "advertising" === e)?.consent,
            }),
            B = (0, s.useRef)(null);
          (0, s.useEffect)(() => {
            B.current?.clientHeight && !k && P(B.current.clientHeight);
          });
          const O = () => {
            p && (D(), $(!1)), (0, n.sx)(h);
          };
          return L
            ? (0, _.jsx)("div", {
                className: a()(v, l),
                ref: B,
                children: (0, _.jsxs)(i.Zp, {
                  className: a()(`${v}__card`, {
                    [`${v}__card--arrow-${((V = d), T[String(V)])}-${
                      ((M = c), N[String(M)])
                    }`]: c,
                    [`${v}__card--has-shadow`]: b,
                    "andes-tooltip--highlight": S,
                  }),
                  children: [
                    m &&
                      (0, _.jsx)("span", {
                        role: "button",
                        tabIndex: "0",
                        onKeyDown: O,
                        onClick: O,
                        className: `${v}__card__icon--close`,
                        children: (0, u.default)({
                          id: "CLOSE",
                          color: S ? "WHITE" : "BLACK",
                        }),
                      }),
                    k
                      ? (0, _.jsx)(g.vt, {
                          hasIcon: !!r,
                          hasProgressBar: !!j,
                          height: E,
                        })
                      : (0, _.jsx)(x, {
                          title: o,
                          icon: r,
                          subtitles: f,
                          progressBar: j,
                          action: A,
                          className: I ? `${v}__card__content--cbt` : void 0,
                        }),
                  ],
                }),
              })
            : null;
          var M, V;
        };
    },
    24510(e, t, l) {
      l.d(t, { T: () => s });
      const s = { MODAL: "MODAL", LINK: "LINK" };
    },
    6155(e, t, l) {
      l.r(t), l.d(t, { default: () => p });
      var s = l(4989),
        o = l(46942),
        a = l.n(o),
        i = l(99053);
      const n = "ui-pdp-filter-message",
        r = (e, t) => {
          const {
              className: l = "",
              body: s,
              message_type: o = "warning",
              closeable: r = !1,
              hierarchy: c = "quiet",
              primary_action: d = null,
            } = e ?? {},
            { deviceType: u } = t ?? {},
            m = a()(n, l),
            p = `${n}__text`;
          return {
            messageProps: {
              className: m,
              actions: d ? (0, i.A)(d, u, n) : null,
              type: o,
              closeable: r,
              hierarchy: c,
            },
            textClassName: p,
            bodyText: s?.text ?? "",
          };
        };
      var c = l(96540),
        d = l(43984);
      const u = () => {
        const { deviceType: e } = (0, c.useContext)(d.Ay) ?? {};
        return { deviceType: e };
      };
      var m = l(74848);
      const p = (e) => {
        const t = u(),
          { messageProps: l, textClassName: o, bodyText: a } = r(e, t);
        return (0, m.jsx)(s.default, {
          ...l,
          children: (0, m.jsx)("div", { className: o, children: a }),
        });
      };
    },
    41303(e, t, l) {
      l.r(t),
        l.d(t, {
          ContainerInfo: () => v.A,
          Reputation: () => y.A,
          SellerStore: () => i.A,
          default: () => N,
          jsonToProps: () => g.A,
        });
      var s = l(93603),
        o = l(46458),
        a = l(50538),
        i = l(74446),
        n = l(62997),
        r = l(96540),
        c = l(67021);
      const d = 40,
        u = 32,
        m = (e) => {
          let { forceAutoScroll: t = !1, officialStoreId: l, track: s } = e;
          const [o, a] = (0, r.useState)(!1),
            i = (0, r.useRef)(null),
            n = (0, r.useCallback)(() => {
              const e =
                document.querySelector(".ui-seller-data") ||
                document.querySelector("#seller_info .ui-box-component");
              (i.current = e), e && a(!0);
            }, []);
          (0, r.useEffect)(() => {
            n();
          });
          const m = t && o;
          return {
            scrollToSellerData: (0, r.useCallback)(
              (e) => {
                if ((e?.preventDefault(), !i?.current || !m)) return;
                n();
                const t = i?.current;
                if (t) {
                  const e = getComputedStyle(t),
                    o = parseFloat(e?.paddingTop),
                    a = l ? d : u,
                    i = document.querySelector(
                      ".ui-pdp-compats__compats.compats-block-sticky.compats-block-sticky-active"
                    );
                  let n = 0;
                  if (i) {
                    const e = i?.getBoundingClientRect();
                    n = (e?.height ?? 0) - o + a;
                  }
                  const r = t?.getBoundingClientRect(),
                    m = (r?.top ?? 0) + o,
                    p = document.documentElement.scrollTop + m - n - a;
                  window.scrollTo({ top: Math.max(p, 0) }), (0, c.sx)(s);
                }
              },
              [m, n, l, s]
            ),
          };
        };
      var p = l(46942),
        _ = l.n(p);
      const f = "ui-pdp-seller",
        h = (e) => {
          const {
              className: t = "",
              seller: l,
              sellerInfo: s,
              subtitles: o = null,
              title: a = null,
              titleValue: i,
              showSellerLogo: n = !1,
              seller_link: r,
              brandTitle: c = null,
              force_auto_scroll: d = !1,
              seller_fiscal_data: u = null,
            } = e,
            m = !!c,
            p = !!a,
            h = _()(f, t, { "ui-pdp-seller__with-logo": !!n }),
            b = `${f}__brand-title-container`,
            x = `${f}__brand-title mb-4`,
            g = m
              ? {
                  as: "span",
                  font_family: c?.font_family,
                  font_size: c?.font_size,
                  color: c?.color,
                }
              : null,
            y = c?.text || c,
            v = c?.values,
            N = m && !(!l?.icon && !s?.official_store_icon),
            T = `${f}__label-sold`,
            C = r?.label;
          return {
            containerClassName: h,
            hasBrandTitle: m,
            brandTitleContainerClassName: b,
            brandTitleClassName: x,
            brandTitleProps: g,
            brandTitleText: y,
            brandTitleValues: v,
            showBrandTitleIcon: N,
            hasTitle: p,
            title: a,
            titleLabelClassName: T,
            sellerLinkLabelProps: C,
            sellerLinkLabelTestId: "target_scroll",
            sellerLinkLabelAs: "p",
            iconId: "cockade",
            iconClassName: "ui-pdp-cockade-icon",
            iconValue: (!m && (l?.icon || s?.official_store_icon)) || "",
            sellerStoreLogo: n ? s?.logo : "",
            titleValue: i,
            subtitles: o,
            sellerStoreIconOnTitle: !0,
            fiscalDataTriggerProps: u
              ? { classname: f, seller_fiscal_data: u, showIcon: !0 }
              : null,
            sellerFiscalData: u,
            forceAutoScroll: d,
            officialStoreId: l?.officialStoreId,
            sellerLinkTrack: r?.track,
          };
        };
      var b = l(74848);
      const x = (e) => {
        const { showSnackbar: t = null } = e,
          {
            containerClassName: l,
            hasBrandTitle: r,
            brandTitleContainerClassName: c,
            brandTitleClassName: d,
            brandTitleProps: u,
            brandTitleText: p,
            brandTitleValues: _,
            showBrandTitleIcon: f,
            hasTitle: x,
            title: g,
            titleLabelClassName: y,
            sellerLinkLabelProps: v,
            sellerLinkLabelTestId: N,
            sellerLinkLabelAs: T,
            iconId: C,
            iconClassName: j,
            iconValue: k,
            sellerStoreLogo: S,
            titleValue: w,
            subtitles: A,
            sellerStoreIconOnTitle: I,
            fiscalDataTriggerProps: L,
            sellerFiscalData: $,
            forceAutoScroll: E,
            officialStoreId: P,
            sellerLinkTrack: D,
          } = h(e),
          { scrollToSellerData: B } = m({
            forceAutoScroll: E,
            officialStoreId: P,
            track: D,
          }),
          O = $ ? (0, b.jsx)(n.A, { ...L, showSnackbar: t }) : null;
        return (0, b.jsx)("div", {
          className: l,
          children: (0, b.jsx)(i.A, {
            titleValue: (0, b.jsxs)(b.Fragment, {
              children: [
                r &&
                  (0, b.jsxs)("div", {
                    className: c,
                    children: [
                      (0, b.jsx)(s.G, {
                        className: d,
                        ...u,
                        text: o.I.jsx(p, _),
                      }),
                      f && (0, a.default)({ id: C }, j),
                    ],
                  }),
                x && (0, b.jsx)("span", { className: y, children: g }),
                (0, b.jsx)(s.G, { "data-testid": N, as: T, ...v, onClick: B }),
              ],
            }),
            logo: S,
            subtitles: A,
            sellerName: w,
            icon: k,
            iconOnTitle: I,
            fiscalData: O,
          }),
        });
      };
      var g = l(60017),
        y = l(41798),
        v = l(34995);
      const N = x;
    },
    1016(e, t, l) {
      l.d(t, { A: () => i });
      var s = l(46942),
        o = l.n(s);
      const a = "ui-pdp-stock-information",
        i = (e) => {
          const {
            className: t = "",
            title: l,
            subtitle: s = null,
            collapsible_tooltip: i,
          } = e;
          return {
            containerClassName: o()(a, t),
            titleClassName: `${a}__title`,
            subtitleClassName: `${a}__subtitle`,
            processedProps: {
              title: l,
              subtitle: s,
              collapsible_tooltip: i,
              showTooltip: Boolean(i),
              showSubtitle: Boolean(s),
            },
          };
        };
    },
    9443(e, t, l) {
      l.d(t, { A: () => n });
      var s = l(93603),
        o = l(80626),
        a = l(1016),
        i = l(74848);
      const n = (e) => {
        const {
            containerClassName: t,
            titleClassName: l,
            subtitleClassName: n,
            processedProps: r,
          } = (0, a.A)(e),
          {
            title: c,
            subtitle: d,
            collapsible_tooltip: u,
            showTooltip: m,
            showSubtitle: p,
          } = r;
        return (0, i.jsxs)("div", {
          className: t,
          children: [
            (0, i.jsx)(s.G, { className: l, ...c }),
            m
              ? (0, i.jsx)(o.A, {
                  collapsibleTooltip: u,
                  children: p && (0, i.jsx)(s.G, { className: n, ...d }),
                })
              : p && (0, i.jsx)(s.G, { className: n, ...d }),
          ],
        });
      };
    },
    55410(e, t, l) {
      l.d(t, { A: () => s });
      const s = l(9443).A;
    },
    80626(e, t, l) {
      l.d(t, { A: () => c });
      var s = l(96540),
        o = l(67485),
        a = l(15841),
        i = l(50538),
        n = l(74848);
      const r = "ui-pdp-legal-tooltip",
        c = (e) => {
          let { children: t, collapsibleTooltip: l } = e;
          const { icon: c, tooltip: d } = l,
            [u, m] = (0, s.useState)(!1);
          return (0, n.jsx)(a.Ay, {
            className: r,
            title: d.title.text,
            content: d.subtitles[0].text,
            side: d.arrow_type.toLowerCase(),
            trigger: "click",
            offsetX: -16,
            closable: !0,
            onClose: () => {
              m(!1);
            },
            children: (0, n.jsxs)("div", {
              className: `${r}__trigger`,
              onClick: () => m(!u),
              children: [t, (0, i.default)(c.id, (0, o.A)(c.color))],
            }),
          });
        };
    },
    42455(e, t, l) {
      l.d(t, { A: () => s });
      const s = l(15841).jZ;
    },
    91789(e, t, l) {
      l.d(t, { A: () => r });
      var s = l(8257),
        o = l(49306),
        a = l(67051),
        i = l(97437),
        n = l(74848);
      const r = function (e, t) {
        const l =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              ? (0, i.A)(e?.target, { controlled: "true" })
              : e?.target,
          r = (0, i.A)(l, { parent_origin: a.A?.location?.origin });
        return (0, n.jsx)(s.Ay, {
          url: r,
          label: e.label,
          modalClassName: "ui-pdp-iframe-modal",
          modalUrl: "#payments",
          modalTitle: e.modal_title,
          autoHeight: !1,
          closeModalLabel: e.close_modal_label,
          children: (0, n.jsx)(o.v, {
            title: e.label.text,
            src: l,
            onMessage: t,
            scrolling: "no",
            height: 1e3,
          }),
        });
      };
    },
    60711(e, t, l) {
      l.d(t, { A: () => s });
      const s = l(44489).aQ;
    },
  },
]);
//# sourceMappingURL=components-buy-box-offers-buy-box-offers-mobile.8264d35d.js.map
