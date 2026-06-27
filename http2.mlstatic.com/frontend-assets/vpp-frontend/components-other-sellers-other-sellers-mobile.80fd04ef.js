"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [27056, 33979, 61866],
  {
    9971(e, t, s) {
      s.r(t), s.d(t, { default: () => l });
      const l = s(7298).A;
    },
    7298(e, t, s) {
      s.d(t, { A: () => b });
      var l = s(96540),
        a = s(46942),
        n = s.n(a),
        o = s(67485),
        i = s(1653),
        r = s(83837),
        c = s(8257),
        d = s(49306),
        m = s(43984),
        u = s(15011),
        p = s(33010),
        _ = s(97293),
        h = s(45592),
        g = s(50538),
        x = s(24635),
        N = s(74848);
      const y = "ui-pdp-pick-up",
        f = (e, t, s, l, a, o) => {
          let {
            modal_title: r,
            close_modal_label: m,
            icon: u,
            target: p,
            label: _,
            html_target: h,
            track: f,
          } = t;
          if (((0, i.b)(p, "new_version=true") || "desktop" === e) && !h) {
            return "function" == typeof l && !(!1 === a)
              ? (0, N.jsx)(x.A, {
                  id: "pick_up_summary",
                  onClick: o,
                  target: p,
                  htmlTarget: "_self",
                  role: "link",
                  label: _,
                  track: f,
                })
              : (0, N.jsx)(c.Ay, {
                  icon: u ? (0, g.default)(u, `${y}__action-icon`) : null,
                  label: _,
                  modalUrl: "#pick-up",
                  url: p,
                  modalClassName: "ui-pdp-iframe-modal",
                  modalTitle: r,
                  autoHeight: !1,
                  closeModalLabel: m,
                  children: (0, N.jsx)(d.v, {
                    src: p,
                    title: _.text,
                    onMessage: s,
                    scrolling: "no",
                  }),
                });
          }
          return (0, N.jsx)("div", {
            className: "ui-pdp-action-modal",
            children: (0, N.jsxs)("a", {
              target: h || "_self",
              href: p,
              children: [
                u &&
                  (0, N.jsx)("div", {
                    "aria-hidden": "true",
                    className: n()(
                      `${y}__action-icon`,
                      "ui-pdp-action-modal__icon"
                    ),
                    children: (0, g.default)(u, `${y}__action-icon`),
                  }),
                _.text,
              ],
            }),
          });
        },
        b = (e) => {
          let {
            action: t = null,
            className: s = null,
            isFetching: a = !1,
            title: i,
            onShippingPromiseUpdate: c = null,
            tooltip: d = null,
            information_tooltip: g = null,
            closeButtonLabel: x,
            num_font_size: b = p.w.MEDIA_SUBTITLE,
            shouldUseOnDemandIframe: C = null,
            showOnDemandIframe: A = null,
            showOnDemandIframeParams: j = null,
            id: v = null,
            ...T
          } = e;
          const { deviceType: w } = (0, l.useContext)(m.Ay),
            $ = (0, h.A)(g),
            S = (0, l.useCallback)(
              (e) => {
                "function" == typeof e?.preventDefault && e.preventDefault();
                const s = t?.target,
                  l = t?.modal_title;
                if (s && "function" == typeof A) {
                  const e = j && "object" == typeof j ? j : {},
                    t = {
                      title: l,
                      target: s,
                      ...e,
                      params: {
                        namespace: v || "pick_up_summary",
                        ...(e?.params || {}),
                      },
                    };
                  A(t);
                }
              },
              [A, j, t?.target, t?.modal_title, v]
            );
          return i
            ? (0, N.jsx)(_.A, {
                className: "ui-vpp-pickup",
                tooltip: $ ? { ...$, offsetX: -16, offsetY: void 0 } : null,
                children: (0, N.jsx)(r.A, {
                  isFetching: a,
                  num_font_size: b,
                  action: t
                    ? f(
                        w,
                        t,
                        (0, u.V)(
                          "vip:modal-content:loaded",
                          "height",
                          ".ui-pdp-iframe-modal",
                          ".andes-modal__header"
                        ),
                        A,
                        C,
                        S
                      )
                    : null,
                  className: n()(
                    "ui-pdp-pick-up--md",
                    `${y}--content-action`,
                    s,
                    (0, o.A)(i.color)
                  ),
                  title: i,
                  onShippingPromiseUpdate: c,
                  ...T,
                  showChevron: !!d && "FIXED" !== d.behaviour,
                  tooltip: d,
                }),
              })
            : null;
        };
    },
    39601(e, t, s) {
      s.r(t), s.d(t, { default: () => d });
      var l = s(96540),
        a = s(46942),
        n = s.n(a),
        o = s(19890),
        i = s(74848);
      const r = o.iconList.IconChevron,
        c = (e) => {
          let { className: t = "" } = e;
          return (0, i.jsx)("svg", {
            className: n()("ui-pdp-icon ui-pdp-icon--chevron", t),
            viewBox: "0 0 9 14",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("use", { href: `#${r}` }),
          });
        };
      c.ICON_ID = r;
      const d = (0, l.memo)(c);
    },
    12450(e, t, s) {
      s.r(t), s.d(t, { default: () => Ie });
      s(18111), s(61701);
      var l = s(96540),
        a = s(19808),
        n = s(34547),
        o = s(43984),
        i = s(83848),
        r = s(46942),
        c = s.n(r),
        d = s(46458),
        m = s(33010);
      const u = (e) => {
        let {
          items: t,
          collapsable: s,
          parentUrl: l,
          selectedQuantity: a,
          showAddToCartModal: n = null,
          errorBoundaryConfig: o = null,
        } = e;
        return (t ?? []).map((e) => ({
          key: `other-seller-item-${e?.id}`,
          props: {
            ...e,
            collapsable: s,
            parentUrl: l,
            selectedQuantity: a,
            showAddToCartModal: n,
            errorBoundaryConfig: o,
          },
        }));
      };
      var p = s(67021),
        _ = s(12397);
      const h = { label: null, target: null, track: null },
        g = (e) => {
          let { action: t, namespace: s } = e;
          const { label: l, target: a, track: n } = t ?? h;
          try {
            return {
              shouldRenderSeoAnchor: !0,
              seoAnchorClassName: `${s}__button`,
              seoAnchorHref: a,
              seoAnchorLabel: d.I.jsx(
                l?.text,
                l?.values,
                null,
                m.w.OTHER_SELLERS.LINK
              ),
              handleSeoAnchorClick: () => (0, p.sx)(n),
            };
          } catch (e) {
            return (
              (0, _.A)({
                tags: { component_id: "ext__other_sellers__seo_anchor" },
                info: { message: e?.message, stack: e?.stack },
              }),
              { shouldRenderSeoAnchor: !1 }
            );
          }
        },
        x = "ui-pdp-other-sellers",
        N = (e, t) => {
          let { collapsable: s } = t;
          const {
              action: l,
              className: a = "",
              items: n,
              parentUrl: o,
              selectedQuantity: i,
              title: r,
              showAddToCartModal: p = null,
              errorBoundaryConfig: _ = null,
              state: h,
            } = e,
            N = "DEFERRED" === h,
            y = c()(x, a, { [`${x}--loading`]: N }),
            f = d.I.jsx(
              r?.template_text || r?.text,
              r?.values,
              null,
              m.w.OTHER_SELLERS.ORIGINAL
            ),
            b = u({
              items: n,
              collapsable: s,
              parentUrl: o,
              selectedQuantity: i,
              showAddToCartModal: p,
              errorBoundaryConfig: _,
            }),
            C = g({ action: l, namespace: x });
          return {
            showSkeleton: N,
            showContent: !N,
            skeletonHeight: 150,
            containerClassName: y,
            titleClassName: `${x}__title`,
            titleTestId: "title",
            titleContent: f,
            itemsTestId: "items",
            itemsProps: b,
            ...C,
          };
        },
        y = function (e) {
          let { lowEnd: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return N(e, { collapsable: !t });
        };
      var f = s(54529),
        b = s(31265),
        C = (s(22489), s(67485)),
        A = s(50538),
        j = s(20068);
      const v = "ui-pdp-summary-list",
        T = (e) => {
          let { list: t } = e;
          return {
            listClassName: v,
            textClassName: `${v}__text`,
            iconClassName: `${v}__item-icon`,
            processedItems: t
              .filter((e) => (0, j.h)(e.title))
              .filter((e) => "HIDDEN" !== e.state)
              .map((e) => {
                const { title: t } = e;
                return {
                  key: t?.text,
                  itemClassName: c()(`${v}__item`, (0, C.A)(t?.color)),
                  textContent: d.I.jsx(t?.text || t, t?.values),
                  iconElement: t?.text_icon
                    ? (0, A.default)(t?.text_icon)
                    : null,
                };
              }),
          };
        };
      var w = s(74848);
      const $ = (e) => {
        const {
          listClassName: t,
          textClassName: s,
          iconClassName: l,
          processedItems: a,
        } = T(e);
        return (0, w.jsx)("ul", {
          className: t,
          children: a.map((e) =>
            (0, w.jsx)(
              "li",
              {
                className: e.itemClassName,
                children: (0, w.jsxs)("p", {
                  className: s,
                  children: [
                    e.textContent,
                    (0, w.jsx)("span", {
                      className: l,
                      children: e.iconElement,
                    }),
                  ],
                }),
              },
              e.key
            )
          ),
        });
      };
      const S = s(81876).gm;
      var E = s(60711),
        I = s(32306);
      const k = (e) => {
        let { collapsable: t, collapsed: s = !0 } = e;
        const a = (0, l.useRef)(),
          [n, o] = (0, l.useState)({
            ready: !1,
            collapsed: s,
            expandedHeight: 0,
          });
        (0, l.useEffect)(() => {
          t &&
            !n?.ready &&
            o((e) => ({
              ...e,
              ready: !0,
              expandedHeight: a?.current?.offsetHeight,
            }));
        }, [t, n?.ready]);
        const i = n?.collapsed ? 0 : n?.expandedHeight;
        return {
          ref: a,
          collapsed: n?.collapsed,
          ready: n?.ready,
          currentHeight: i,
          handleToggle: () => {
            o((e) => ({ ...e, collapsed: !e?.collapsed }));
          },
        };
      };
      var L = s(44489),
        D = (s(20116), s(65413)),
        P = s(15011),
        R = s(91789),
        U = s(93603);
      const H = "ui-pdp-payment-sprites",
        M = (e) => {
          let {
            className: t = "",
            icons: s,
            styles: l,
            iconClassName: a = null,
            lazy: n = !1,
          } = e;
          return (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)("div", {
                className: c()(H, t),
                children: s.map((e) =>
                  (0, w.jsxs)(
                    "div",
                    {
                      className: `${H}__icon-container`,
                      children: [
                        (0, w.jsx)("div", {
                          className: c()(
                            `${H}__icon`,
                            a,
                            `payments-${e.size} _${e.id}-${e.size}`
                          ),
                          "data-testid": `payment-sprites-${e.id}`,
                        }),
                        e.label
                          ? (0, w.jsx)(U.G, {
                              as: "span",
                              className: c()(
                                `${H}__icon-label`,
                                `_${e.id}-${e.size}`
                              ),
                              ...e.label,
                            })
                          : null,
                      ],
                    },
                    e.id
                  )
                ),
              }),
              l &&
                !n &&
                (0, w.jsx)("style", { children: Object.values(l).join(" ") }),
            ],
          });
        },
        O = (0, l.memo)(M),
        z = (e) => {
          let {
            action: t = null,
            className: s = "",
            icons: l = null,
            styles: a = null,
            title: n,
            ...o
          } = e;
          return (0, w.jsx)(D.A, {
            action: t
              ? (0, R.A)(
                  t,
                  (0, P.V)(
                    "vip:modal-content:loaded",
                    "height",
                    ".ui-pdp-iframe-modal",
                    ".andes-modal__header"
                  ),
                  !1
                )
              : null,
            className: c()("ui-pdp-payment--md", s, (0, C.A)(n?.color)),
            title: n,
            ...o,
            children:
              a && l && l.length > 0 && (0, w.jsx)(O, { icons: l, styles: a }),
          });
        };
      var F,
        B = s(84680),
        G = s(9971),
        q = s(55410),
        Q = s(832),
        V = s(91889),
        W = s(8257),
        X = s(9924),
        K = s(13748),
        Y = s(16365),
        J = s(24635),
        Z = s(71023),
        ee = s(49306),
        te = s(4989),
        se = s(10400),
        le = s(13201),
        ae = s(41751),
        ne = s(31197);
      const oe = "ui-pdp-generic-summary",
        ie = (e, t, s, n, o, i, r, d, u, p, h, g) => {
          if ("_blank" === e.html_target)
            return (0, w.jsx)(J.A, {
              target: e.target,
              htmlTarget: e.html_target,
              label: { text: e.label.text },
            });
          const x = "modal" === e.type?.toLowerCase(),
            N = e.target,
            y = { ...e, target: N };
          (0, Z.A)(y, { modal: !1 });
          if (x && "function" == typeof p && !(!1 === g)) {
            const t = {
              id: s,
              onClick: h,
              className: "ui-pdp-action-modal ui-pdp-generic-summary__action",
            };
            if (u)
              try {
                const s = (0, l.isValidElement)(e) ? e : e?.label?.text;
                return (0, w.jsx)(a.A, { href: y.target, ...t, children: s });
              } catch (e) {
                return (
                  (0, _.A)({
                    tags: {
                      component_id: "ext__generic_summary_desktop__seo_anchor",
                    },
                    info: { message: e?.message, stack: e?.stack },
                  }),
                  null
                );
              }
            return {
              ...t,
              target: y.target,
              htmlTarget: e.html_target || "_self",
              role: N ? "link" : "button",
              label: e.label,
              track: e.track || null,
              num_font_size: m.w.MEDIA_SUBTITLE,
            };
          }
          return (0, w.jsx)(W.Ay, {
            url: y.target,
            label: e.label,
            modalClassName: c()(
              `${oe}-modal ${
                e.modal_title ? null : "modal-close-button-desktop"
              }`,
              "ui-pdp-iframe-modal"
            ),
            modalTitle: !d && e.modal_title,
            autoHeight: !1,
            icon: e.icon ? (0, A.default)(e.icon, `${oe}__action-icon`) : null,
            track: e.track,
            closeTrack: e.close_track,
            closeModalLabel: e.close_modal_label,
            componentId: s,
            controlModalHeader: !0,
            showCloseButton: !0,
            actionTooltip: n,
            onCloseModal: o,
            meliplusUpsellingOnSuscription: i,
            meliplusOnDeliveryDayChange: r,
            shouldUseSeoAnchor: u,
            children: (0, w.jsx)(ee.v, {
              title: e.label?.text,
              src: N,
              onMessage: t,
              scrolling: "no",
            }),
          });
        },
        re = (0, l.memo)(
          (0, se.e)((e) => {
            let {
              action: t = null,
              action_tooltip: s = null,
              children: a = null,
              className: n = null,
              icon: o = null,
              subtitles: i = null,
              title: r = null,
              id: d = null,
              component_id: u = null,
              isFetching: p = !1,
              stylesSmall: _ = null,
              tooltip: h = null,
              icons: g = null,
              updateShippingSummary: x = null,
              custom_message: N = null,
              shouldShowSpinner: y = !1,
              remaining: f = null,
              blackPriceClassName: b = null,
              onCloseModal: v = null,
              meliplusUpsellingOnSuscription: T = null,
              meliplusOnDeliveryDayChange: $ = null,
              noTitle: S = !1,
              map_content: E = null,
              dot: I = null,
              titles: k = null,
              shouldUseSeoAnchor: L,
              viewport_track: D = null,
              content_action: R = null,
              shouldUseOnDemandIframe: U = null,
              showOnDemandIframe: H = null,
              showOnDemandIframeParams: M = null,
              origin_country: z = null,
              flagTypographySize: B = "m",
            } = e;
            const G = (0, V.su)(D, { threshold: 0.45 }, "show"),
              { adaptedSubtitles: q } = (0, K.A)(f, x, i),
              W = {
                countryCode: z,
                adaptedSubtitles: q,
                flagTypographySize: B,
                namespace: oe,
              },
              J = (0, Y.A)(W),
              Z = (0, l.useCallback)(
                (e) => {
                  "function" == typeof e?.preventDefault && e.preventDefault();
                  const s = "modal" === t?.type?.toLowerCase(),
                    l = t?.target;
                  if (s && l && "function" == typeof H) {
                    const e = M && "object" == typeof M ? M : {},
                      s = {
                        title: S ? null : t.modal_title,
                        target: l,
                        ...e,
                        params: { namespace: u, ...(e?.params || {}) },
                      };
                    H(s);
                  }
                },
                [H, M, t?.modal_title, t?.target, t?.type, u, S]
              );
            return (0, w.jsxs)("div", {
              ref: G,
              children: [
                (0, w.jsx)(ae.A, { namespace: oe, map_content: E }),
                !k?.length &&
                  (0, j.h)(r) &&
                  (0, w.jsxs)(w.Fragment, {
                    children: [
                      (0, w.jsx)(le.A, { dot: I }),
                      (0, w.jsxs)(X.$U, {
                        tag: "div",
                        figure: o && (0, A.default)(o),
                        className: c()(
                          oe,
                          `${oe}--md`,
                          `${oe}--content-action`,
                          n,
                          `ui-vpp-${u}`,
                          (0, C.A)(r?.color),
                          {
                            [`${oe}--remaining`]: f,
                            [`${oe}--first-buy`]: !!r?.values?.first_buy,
                          },
                          { [b]: b }
                        ),
                        title: (0, ne.A)({
                          map_content: E,
                          title: r,
                          tooltip: h,
                        }),
                        showChevron: !!h && "FIXED" !== h.behaviour,
                        subtitles: J || q,
                        content_action: R,
                        action:
                          t &&
                          ie(
                            t,
                            (0, P.V)(
                              "vip:modal-content:loaded",
                              "height",
                              ".ui-pdp-iframe-modal",
                              ".andes-modal__header",
                              "width"
                            ),
                            u,
                            s,
                            v,
                            T,
                            $,
                            S,
                            L,
                            H,
                            Z,
                            U
                          ),
                        isFetching: p,
                        tooltip: h,
                        num_font_size: m.w.MEDIA_SUBTITLE,
                        children: [
                          a,
                          _ &&
                            g &&
                            g.length > 0 &&
                            (0, w.jsx)(O, { icons: g, styles: _ }),
                          p &&
                            y &&
                            "second_shipping_summary" !== d &&
                            "third_shipping_summary" !== d &&
                            (F ||
                              (F = (0, w.jsx)(Q.m, {
                                modifier: "inline",
                                size: "medium",
                                className: `${oe}__spinner`,
                              }))),
                        ],
                      }),
                    ],
                  }),
                k?.length > 0 &&
                  (0, w.jsx)(X.$U, {
                    className: c()(
                      oe,
                      `${oe}--md`,
                      `${oe}--content-action`,
                      `ui-vpp-${u}`,
                      n
                    ),
                    titles: k,
                    isFetching: p,
                    num_font_size: m.w.MEDIA_SUBTITLE,
                  }),
                N &&
                  (0, w.jsx)(te.default, {
                    className: `${oe}__message`,
                    closable: N.closable,
                    hierarchy: N.hierarchy,
                    type: N.message_type,
                    children: (0, w.jsx)("div", {
                      className: `${oe}__message__text`,
                      children: N.body.text,
                    }),
                  }),
              ],
            });
          })
        );
      var ce = s(52215),
        de = s(44025),
        me = s(63885),
        ue = s(38958);
      const pe = "ui-pdp-s-available-quantity",
        _e = (e) => {
          let { picker: t } = e;
          return {
            containerClassName: pe,
            titleClassName: `${pe}__title`,
            processedProps: {
              selected: t?.selected,
              title: t?.title,
              labelAs: "p",
              inputType: "hidden",
              inputName: "quantity",
            },
          };
        },
        he = (e) => {
          const {
            containerClassName: t,
            titleClassName: s,
            processedProps: l,
          } = _e(e);
          return (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)("span", {
                className: t,
                children: (0, w.jsx)(U.G, {
                  as: l.labelAs,
                  className: s,
                  ...l.title,
                }),
              }),
              (0, w.jsx)("input", {
                type: l.inputType,
                name: l.inputName,
                value: l.selected,
              }),
            ],
          });
        };
      var ge = s(72698);
      const xe = (e) => {
          let { title: t } = e;
          return (0, w.jsx)("span", {
            className: "ui-pdp-condition ui-pdp-s-condition",
            children: t.text,
          });
        },
        Ne = (e, t) => t.find((t) => t?.id === e),
        ye = "ui-pdp-full-icon",
        fe = (e) => {
          let { resaleTaxInfoProps: t, netPriceTaxProps: s } = e;
          return t
            ? (0, w.jsx)(ue.A, { ...(0, ue.s)(t) })
            : s
            ? (0, w.jsx)(me.A, { ...s })
            : null;
        },
        be = (e) => {
          let {
            type: t,
            components: s,
            id: l = null,
            baseURL: a = null,
            onShippingPromiseUpdate: n = null,
            isMobile: o,
            className: i,
            showAddToCartModal: r = null,
            showSnackbar: d = null,
            errorBoundaryConfig: u = null,
          } = e;
          const p = Ne(t, s);
          if (!p || "HIDDEN" === p.state) return null;
          const _ = () => {
            const e = Ne(de.A.NET_PRICE_TAX_INFORMATION, s),
              t = Ne(de.A.RESALE_TAX_INFORMATION, s);
            return t || e
              ? (0, w.jsx)(fe, { resaleTaxInfoProps: t, netPriceTaxProps: e })
              : null;
          };
          switch (t) {
            case "price":
              return (0, w.jsx)(S, {
                className: i,
                value: p.price.value,
                originalValue: p.price.original_value,
                currencySymbol: p.price.currency_symbol,
                discountLabel: p.discount_label,
                price_tags: p.price_tags,
                discounts_tags: p.discounts_tags,
                subtitles: p.subtitles,
                num_font_size: m.w.PRICE_RESULT,
                original_value_num_font_size: m.w.ORIGINAL_PRICE_RESULT,
                discount_num_font_size: m.g.PRICE_RESULT,
                netPriceTax: _(),
              });
            case "label_price_for_business":
              return (0, w.jsx)(ce.A, { className: i, ...p });
            case "payment_summary":
              return (0, w.jsx)(z, { className: i, ...p });
            case "condition_summary":
              return (0, w.jsx)(xe, { ...p });
            case "cbt_summary":
              return (0, w.jsx)(re, {
                className: i,
                component_id: "cbt_summary",
                ...p,
              });
            case "cbt_taxes_summary":
              return (0, w.jsx)(re, {
                className: c()(i, `cbt-taxes-${p?.title.color}`),
                component_id: "cbt_taxes_summary",
                ...p,
              });
            case "shipping_summary":
              return (0, w.jsx)(
                B.A,
                {
                  onShippingPromiseUpdate: n,
                  num_font_size: m.w.MEDIA_SHIPPING,
                  className: c()(i, {
                    [ye]: "FULL_ICON" === p?.title?.text_icon?.id,
                  }),
                  ...p,
                  subtitles: (0, ge.o)(p?.subtitles),
                  country_code: (0, ge.A)(p?.subtitles),
                },
                Math.random()
              );
            case "pick_up_summary":
              return (0, w.jsx)(
                G.default,
                { onShippingPromiseUpdate: n, className: i, ...p },
                Math.random()
              );
            case "seller":
              return (0, w.jsx)(I.Ay, {
                ...(0, I.s$)(p),
                hashId: l,
                showSnackbar: d,
              });
            case "available_quantity":
              return (0, w.jsx)(he, { ...p });
            case "main_actions":
              return (0, w.jsx)(f.A, {
                className: i,
                size: o ? "medium" : "small",
                available_quantity: Ne("available_quantity", s),
                ...p,
                form: { ...p.form, parent_url: a },
                showAddToCartModal: r,
                errorBoundaryConfig: u,
              });
            case "stock_information":
              return (0, w.jsx)(q.A, { className: i, ...p });
            case "net_price_tax_information":
              return (0, w.jsx)(me.A, { className: i, ...p });
            case "resale_tax_info":
              return (0, w.jsx)(ue.A, { className: i, ...(0, ue.s)(p) });
            default:
              return null;
          }
        },
        Ce = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const {
            price: t,
            discount_label: s,
            subtitles: l,
            price_tags: a,
            discounts_tags: n,
          } = e ?? {};
          return {
            value: t?.value,
            originalValue: t?.original_value,
            currencySymbol: t?.currency_symbol,
            discountLabel: s,
            subtitles: l,
            price_tags: a,
            discounts_tags: n,
            num_font_size: m.w.OTHER_SELLERS.ITEM,
            original_value_num_font_size: m.w.OTHER_SELLERS.ORIGINAL,
            discount_num_font_size: m.g.OTHER_SELLERS.ITEM,
          };
        },
        Ae = "ui-pdp-other-sellers-item",
        je = {},
        ve = [],
        Te = (e, t) => {
          const {
              id: s,
              collapsable: l = !0,
              description: a = null,
              parentUrl: n,
              selectedQuantity: o,
              price: i,
              product_tag: r,
              summary_list: d,
              seller: m,
              main_actions: u,
              cbt_summary: p = je,
              showAddToCartModal: _ = null,
              components: h = ve,
              errorBoundaryConfig: g = null,
            } = e,
            {
              collapsed: x = !0,
              ready: N = !1,
              currentHeight: y = 0,
            } = t ?? {},
            f = `other-sellers-item-${s}`,
            b = c()(Ae, {
              [`${Ae}--is-collapsed`]: l && x,
              [`${Ae}--is-not-ready`]: l && !N,
            }),
            C = {
              showInteractiveHeader: l,
              showStaticHeader: !l,
              buttonClassName: c()(`${Ae}__list-top`, {
                [`${Ae}__list-top-interactive`]: l,
              }),
              staticClassName: `${Ae}__list-top`,
              ariaExpanded: x ? "false" : "true",
              ariaControls: f,
              chevronClassName: c()(
                `${Ae}__chevron`,
                "ui-pdp-icon--chevron-down"
              ),
              dataTestId: "main-button",
            },
            A = Array.isArray(h) && h.length > 0,
            j = A
              ? h.map((e, t) => ({
                  key: e?.id || `component-${t}`,
                  element: be({
                    type: e?.type,
                    components: h,
                    className: e?.className,
                  }),
                }))
              : [],
            v = be({
              type: "cbt_summary",
              components: [p],
              className: `${Ae}__cbt`,
            });
          return {
            containerId: f,
            containerClassName: b,
            headerProps: C,
            priceWrapperClassName: `${Ae}__price`,
            priceProps: Ce(i),
            tagClassName: `${Ae}__tag`,
            tagText: r?.text,
            showExpandedContent: !l || (l && !x),
            showDescription: Boolean(a),
            descriptionClassName: c()(
              (0, L.op)(a?.color),
              `${Ae}__description`
            ),
            descriptionText: a?.text,
            listClassName: `${Ae}__list`,
            listStyle: l && N ? { height: `${y}px` } : {},
            showComponents: A,
            componentsListClassName: `${Ae}__components`,
            componentElements: j,
            cbtElement: v,
            summaryListProps: d,
            sellerClassName: `${Ae}__seller`,
            sellerProps: m,
            actionsClassName: `${Ae}__actions`,
            buyboxClassName: `${Ae}__buybox`,
            actionsProps: {
              size: "medium",
              ...u,
              form: { ...u?.form, parent_url: n, quantity: o },
              showAddToCartModal: _,
              errorBoundaryConfig: g,
            },
          };
        };
      var we = s(39601);
      const $e = (e) => {
          let {
            showInteractiveHeader: t,
            showStaticHeader: s,
            buttonClassName: l,
            staticClassName: a,
            ariaExpanded: n,
            ariaControls: o,
            chevronClassName: i,
            dataTestId: r,
            onToggle: c,
            children: d,
          } = e;
          return (0, w.jsxs)(w.Fragment, {
            children: [
              t &&
                (0, w.jsxs)("button", {
                  className: l,
                  "aria-expanded": n,
                  "aria-controls": o,
                  onClick: c,
                  "data-testid": r,
                  type: "button",
                  children: [d, (0, w.jsx)(we.default, { className: i })],
                }),
              s && (0, w.jsx)("div", { className: a, children: d }),
            ],
          });
        },
        Se = (0, E.A)(I.Ay)(I.s$),
        Ee = (e) => {
          const {
              ref: t,
              collapsed: s,
              ready: l,
              currentHeight: a,
              handleToggle: n,
            } = k(e),
            {
              containerId: o,
              containerClassName: i,
              headerProps: r,
              priceWrapperClassName: c,
              priceProps: d,
              tagClassName: m,
              tagText: u,
              showExpandedContent: p,
              showDescription: _,
              descriptionClassName: h,
              descriptionText: g,
              listClassName: x,
              listStyle: N,
              showComponents: y,
              componentsListClassName: C,
              componentElements: A,
              cbtElement: j,
              summaryListProps: v,
              sellerClassName: T,
              sellerProps: E,
              actionsClassName: I,
              buyboxClassName: L,
              actionsProps: D,
            } = Te(e, { collapsed: s, ready: l, currentHeight: a });
          return (0, w.jsxs)("li", {
            className: i,
            id: o,
            children: [
              (0, w.jsxs)($e, {
                ...r,
                onToggle: n,
                children: [
                  (0, w.jsx)("div", {
                    className: c,
                    children: (0, w.jsx)(S, { ...d }),
                  }),
                  (0, w.jsx)("span", { className: m, children: u }),
                ],
              }),
              p &&
                (0, w.jsxs)(w.Fragment, {
                  children: [
                    _ && (0, w.jsx)("p", { className: h, children: g }),
                    (0, w.jsxs)("ul", {
                      className: x,
                      ref: t,
                      style: N,
                      children: [
                        y &&
                          (0, w.jsx)("ul", {
                            className: C,
                            children: A?.map((e) =>
                              (0, w.jsx)("li", { children: e?.element }, e?.key)
                            ),
                          }),
                        (0, w.jsx)("li", { children: (0, w.jsx)($, { ...v }) }),
                        (0, w.jsx)("li", { children: j }),
                        (0, w.jsx)("li", {
                          children: (0, w.jsx)(Se, { className: T, ...E }),
                        }),
                        (0, w.jsx)("li", {
                          className: I,
                          children: (0, w.jsx)(b.A, {
                            className: L,
                            children: (0, w.jsx)(f.A, { ...D }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        },
        Ie = (e) => {
          const { lowEnd: t } = (0, l.useContext)(o.Ay),
            s = (0, n.A)(e?.onFetchDeferredComponent, e?.id),
            {
              showSkeleton: r,
              showContent: c,
              skeletonHeight: d,
              containerClassName: m,
              titleClassName: u,
              titleTestId: p,
              titleContent: _,
              itemsTestId: h,
              itemsProps: g,
              shouldRenderSeoAnchor: x,
              seoAnchorClassName: N,
              seoAnchorHref: f,
              seoAnchorLabel: b,
              handleSeoAnchorClick: C,
            } = y(e, { lowEnd: t });
          return (0, w.jsxs)("div", {
            ref: s,
            className: m,
            children: [
              r && (0, w.jsx)(i.vt, { height: d }),
              c &&
                (0, w.jsxs)(w.Fragment, {
                  children: [
                    (0, w.jsx)("h2", {
                      className: u,
                      "data-testid": p,
                      children: _,
                    }),
                    (0, w.jsx)("ul", {
                      "data-testid": h,
                      children: g?.map((e) =>
                        (0, w.jsx)(Ee, { ...e?.props }, e?.key)
                      ),
                    }),
                    x &&
                      (0, w.jsx)(a.A, {
                        className: N,
                        href: f,
                        onClick: C,
                        children: b,
                      }),
                  ],
                }),
            ],
          });
        };
    },
    83837(e, t, s) {
      s.d(t, { A: () => l });
      const l = s(30972).A;
    },
    35348(e, t, s) {
      s.d(t, { A: () => o });
      var l = s(46942),
        a = s.n(l),
        n = s(50538);
      const o = (e) => {
        let {
          icon: t,
          namespace: s,
          className: l,
          hasRemainingTime: o,
          adaptedSubtitles: i,
          title: r,
          action: c,
          num_font_size: d,
          isFetching: m,
          showChevron: u,
          tooltip: p,
        } = e;
        return {
          props: {
            figure: t && (0, n.default)(t, `${s}-icon`),
            className: a()(s, l, { [`${s}--remaining`]: o }),
            subtitles: i,
            title: r,
            action: c,
            num_font_size: d,
            isFetching: m,
            showChevron: u,
            tooltip: p,
          },
        };
      };
    },
    3921(e, t, s) {
      s.d(t, { A: () => a });
      var l = s(13748);
      const a = (e) => {
        let { remaining: t, onShippingPromiseUpdate: s, subtitles: a } = e;
        const n = s || (() => {}),
          { adaptedSubtitles: o } = (0, l.A)(t, n, a);
        return { adaptedSubtitles: o, hasRemainingTime: !!t };
      };
    },
    9995(e, t, s) {
      s.d(t, { A: () => n });
      var l = s(35348);
      const a = "ui-pdp-pick-up",
        n = (e, t, s) => {
          const {
              action: n = null,
              className: o = "",
              icon: i = null,
              title: r,
              isFetching: c = !1,
              tooltip: d = null,
              showChevron: m = !1,
              num_font_size: u,
              key: p = null,
              dot: _ = null,
            } = e,
            { props: h } = (0, l.A)({
              icon: i,
              namespace: a,
              className: o,
              hasRemainingTime: s,
              adaptedSubtitles: t,
              title: r,
              action: n,
              num_font_size: u,
              isFetching: c,
              showChevron: m,
              tooltip: d,
            });
          return {
            mediaProps: h,
            mediaKey: p,
            summaryDotWrapperClassName: `${a}__row-with-dot`,
            summaryDotProps: {
              dot: _,
              className: `${a}__row-with-dot__dot-element`,
            },
            shouldRenderDotWrapper: !!_,
          };
        };
    },
    30972(e, t, s) {
      s.d(t, { A: () => d });
      var l = s(96540),
        a = s(9995),
        n = s(3921),
        o = s(9924),
        i = s(10400),
        r = s(13201),
        c = s(74848);
      const d = (0, i.e)((e) => {
        const { adaptedSubtitles: t, hasRemainingTime: s } = (0, n.A)(e),
          {
            mediaProps: i,
            mediaKey: d,
            summaryDotWrapperClassName: m,
            summaryDotProps: u,
            shouldRenderDotWrapper: p,
          } = (0, a.A)(e, t, s),
          _ = (0, l.useMemo)(() => i, [i]),
          h = (0, c.jsx)(o.$U, { ..._ }, d);
        return p
          ? (0, c.jsxs)("div", {
              className: m,
              children: [(0, c.jsx)(r.A, { ...u }), h],
            })
          : h;
      });
    },
    1016(e, t, s) {
      s.d(t, { A: () => o });
      var l = s(46942),
        a = s.n(l);
      const n = "ui-pdp-stock-information",
        o = (e) => {
          const {
            className: t = "",
            title: s,
            subtitle: l = null,
            collapsible_tooltip: o,
          } = e;
          return {
            containerClassName: a()(n, t),
            titleClassName: `${n}__title`,
            subtitleClassName: `${n}__subtitle`,
            processedProps: {
              title: s,
              subtitle: l,
              collapsible_tooltip: o,
              showTooltip: Boolean(o),
              showSubtitle: Boolean(l),
            },
          };
        };
    },
    9443(e, t, s) {
      s.d(t, { A: () => i });
      var l = s(93603),
        a = s(80626),
        n = s(1016),
        o = s(74848);
      const i = (e) => {
        const {
            containerClassName: t,
            titleClassName: s,
            subtitleClassName: i,
            processedProps: r,
          } = (0, n.A)(e),
          {
            title: c,
            subtitle: d,
            collapsible_tooltip: m,
            showTooltip: u,
            showSubtitle: p,
          } = r;
        return (0, o.jsxs)("div", {
          className: t,
          children: [
            (0, o.jsx)(l.G, { className: s, ...c }),
            u
              ? (0, o.jsx)(a.A, {
                  collapsibleTooltip: m,
                  children: p && (0, o.jsx)(l.G, { className: i, ...d }),
                })
              : p && (0, o.jsx)(l.G, { className: i, ...d }),
          ],
        });
      };
    },
    55410(e, t, s) {
      s.d(t, { A: () => l });
      const l = s(9443).A;
    },
    80626(e, t, s) {
      s.d(t, { A: () => c });
      var l = s(96540),
        a = s(67485),
        n = s(15841),
        o = s(50538),
        i = s(74848);
      const r = "ui-pdp-legal-tooltip",
        c = (e) => {
          let { children: t, collapsibleTooltip: s } = e;
          const { icon: c, tooltip: d } = s,
            [m, u] = (0, l.useState)(!1);
          return (0, i.jsx)(n.Ay, {
            className: r,
            title: d.title.text,
            content: d.subtitles[0].text,
            side: d.arrow_type.toLowerCase(),
            trigger: "click",
            offsetX: -16,
            closable: !0,
            onClose: () => {
              u(!1);
            },
            children: (0, i.jsxs)("div", {
              className: `${r}__trigger`,
              onClick: () => u(!m),
              children: [t, (0, o.default)(c.id, (0, a.A)(c.color))],
            }),
          });
        };
    },
    91789(e, t, s) {
      s.d(t, { A: () => r });
      var l = s(8257),
        a = s(49306),
        n = s(67051),
        o = s(97437),
        i = s(74848);
      const r = function (e, t) {
        const s =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              ? (0, o.A)(e?.target, { controlled: "true" })
              : e?.target,
          r = (0, o.A)(s, { parent_origin: n.A?.location?.origin });
        return (0, i.jsx)(l.Ay, {
          url: r,
          label: e.label,
          modalClassName: "ui-pdp-iframe-modal",
          modalUrl: "#payments",
          modalTitle: e.modal_title,
          autoHeight: !1,
          closeModalLabel: e.close_modal_label,
          children: (0, i.jsx)(a.v, {
            title: e.label.text,
            src: s,
            onMessage: t,
            scrolling: "no",
            height: 1e3,
          }),
        });
      };
    },
    60711(e, t, s) {
      s.d(t, { A: () => l });
      const l = s(44489).aQ;
    },
  },
]);
//# sourceMappingURL=components-other-sellers-other-sellers-mobile.80fd04ef.js.map
