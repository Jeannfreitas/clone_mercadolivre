"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [28183],
  {
    29841(e, t, i) {
      i.d(t, { P: () => Y });
      var a = i(89379),
        l = i(96540),
        n = i(37808),
        r = i(74448),
        s = i(46942),
        c = i.n(s),
        o = (i(20558), i(85652), i(2551)),
        p = i(14269),
        d = i(36552),
        u = i(18681),
        _ = i(88384),
        m = i(45664);
      const y = (e) => {
        let {
          inputs: t,
          isError: i,
          inputYieldValue: a,
          handleYieldChange: n,
          handleInputFocus: r,
          inputUnitValue: s,
          handleUnitChange: p,
          namespace: d,
          isMobile: u = !1,
        } = e;
        const [_, m] = l.useState(!1),
          y = (e, t) => {
            m(e), r(t);
          };
        return l.createElement(
          "div",
          { className: c()(`${d}__inputs`) },
          l.createElement(
            o.A_,
            {
              type: u ? "search" : void 0,
              inputmode: u ? "numeric" : void 0,
              autocomplete: "off",
              autoFocus: !0,
              focus: i && "inputYield" === _,
              placeholder: t.input_list[0].placeholder,
              className: c()(`${d}__inputs__yield`),
              value: a,
              onChange: n,
              onFocus: () => y("inputYield", !1),
              label: u ? t.input_list[0].input_title.text : void 0,
              srLabel: t.input_list[0].input_title.accessibility_text,
              modifier: i ? "error" : void 0,
            },
            !u &&
              l.createElement(
                "span",
                { className: c()(`${d}__input-suffix`) },
                t.input_list[0].input_title.unit
              )
          ),
          "SIMPLE_INPUT" !== t.input_type &&
            l.createElement(
              l.Fragment,
              null,
              l.createElement("img", {
                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjU5MjMgMTQuODQzNUwxMC43NDM4IDEzLjk5NUwxMi41Mzg4IDEyLjJMMi4wMDc0OSAxMi4yTDIuMDA3NDkgMTFMMTIuNTYyOCAxMUwxMC43NTI4IDkuMTlMMTEuNjAxMyA4LjM0MTQ3TDE0Ljg0NzkgMTEuNTg4TDExLjU5MjMgMTQuODQzNVoiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuNTUiLz4KPHBhdGggZD0iTTQuNDAwNDEgNy42NTI1M0w1LjI0ODk0IDYuODA0TDMuNDUzOTQgNS4wMDlMMTQuMDY1MiA1LjAwOUwxNC4wNjUyIDMuODA5TDMuNDI5OTQgMy44MDlMNS4yMzk5NCAxLjk5OUw0LjM5MTQxIDEuMTUwNDdMMS4xNDQ4OSA0LjM5N0w0LjQwMDQxIDcuNjUyNTNaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjU1Ii8+Cjwvc3ZnPgo=",
                alt: "Sort",
                className: c()(`${d}__inputs__sort-icon`),
              }),
              l.createElement(
                o.A_,
                {
                  type: u ? "search" : void 0,
                  inputmode: u ? "numeric" : void 0,
                  autocomplete: "off",
                  focus: i && "inputUnit" === _,
                  placeholder: t.input_list[1].placeholder,
                  className: c()(`${d}__inputs__unit`),
                  value: s,
                  onChange: p,
                  onFocus: () => y("inputUnit", !1),
                  label: u ? t.input_list[1].input_title.text : void 0,
                  srLabel: t.input_list[1].input_title.accessibility_text,
                  modifier: i ? "error" : void 0,
                },
                !u &&
                  l.createElement(
                    "span",
                    { className: c()(`${d}__input-suffix`) },
                    t.input_list[1].input_title.unit
                  )
              )
            )
        );
      };
      var A;
      const g = (e) => {
          let { isError: t, errorMessage: i, namespace: a, className: n } = e;
          return (
            t &&
            l.createElement(
              "div",
              { className: c()(n, `${a}__error-message`) },
              A ||
                (A = l.createElement("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNiAwTDYgMEE2IDYgMCAwIDEgMTIgNkwxMiA2QTYgNiAwIDAgMSA2IDEyTDYgMTJBNiA2IDAgMCAxIDAgNkwwIDZBNiA2IDAgMCAxIDYgMHoiIGZpbGw9InJlZCIvPgogIDxwYXRoIGQ9Ik02LjcyNyAyLjkwOUg1LjI3M0w1LjQ1NSA2LjkwOUg2LjU0NUw2LjcyNyAyLjkwOVoiIGZpbGw9IndoaXRlIi8+CiAgPHBhdGggZD0iTTYgNy42MzZDNi40MDIgNy42MzYgNi43MjcgNy45NjIgNi43MjcgOC4zNjRDNi43MjcgOC43NjUgNi40MDIgOS4wOTEgNiA5LjA5MUM1LjU5OCA5LjA5MSA1LjI3MyA4Ljc2NSA1LjI3MyA4LjM2NEM1LjI3MyA3Ljk2MiA1LjU5OCA3LjYzNiA2IDcuNjM2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==",
                  alt: "Error",
                })),
              l.createElement("span", null, i)
            )
          );
        },
        N = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const [i, a] = e.toFixed(2).split("."),
            l = ["PEN", "MXN"].includes(t),
            n = l ? "," : ".";
          return {
            fraction: i.replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${n}`),
            cents: l ? null : a || "00",
          };
        },
        h = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "es-AR";
          return new Intl.NumberFormat(t).format(e);
        },
        M = (e) => {
          let {
            priceDescription: t,
            totalPrice: i,
            footer: a,
            inputYieldValue: r,
            inputUnitValue: s,
            isError: o,
            handleClose: d,
            namespace: u,
          } = e;
          const [_, m] = (0, l.useState)(!1),
            [y, A] = (0, l.useState)({ priceDescription: t, totalPrice: i });
          return (
            (0, l.useEffect)(() => {
              if (
                "0" !== r &&
                (t !== y.priceDescription || i !== y.totalPrice)
              ) {
                m(!0);
                const e = setTimeout(() => {
                  A({ priceDescription: t, totalPrice: i }), m(!1);
                }, 500);
                return () => clearTimeout(e);
              }
              return () => {};
            }, [t, i, r, y.priceDescription, y.totalPrice]),
            l.createElement(
              "div",
              { className: c()(`${u}__footer`) },
              l.createElement(
                "div",
                { className: c()(`${u}__footer__price`, { blinking: _ }) },
                l.createElement(
                  "span",
                  { className: c()(`${u}__footer__price-description`) },
                  y.priceDescription
                ),
                l.createElement(
                  "div",
                  { className: c()(`${u}__footer__price-total`) },
                  l.createElement(p.BH, {
                    applyHideDecimals: y.totalPrice % 1 == 0,
                    value: N(y.totalPrice, a.total_price.currency_id),
                    centsType: a.total_price.decimal_style.toLowerCase(),
                    currencyId: a.total_price.currency_id,
                    size: 14,
                    weight: "semibold",
                  })
                )
              ),
              l.createElement(
                n.$n,
                {
                  onClick: d,
                  className: c()(`${u}__footer__apply-button`),
                  disabled:
                    !r || !s || 0 === parseFloat(r.replace(",", ".")) || o,
                },
                a.confirm_button.text
              )
            )
          );
        };
      var E, v, I;
      const b = (e) => {
          let { header: t, open: i, namespace: a, isMobile: r = !1 } = e;
          return l.createElement(
            "div",
            { className: c()(`${a}__trigger__text-container`) },
            l.createElement(
              "div",
              { className: c()(`${a}__trigger__text-wrapper`) },
              l.createElement(n.C3, null, t.title.text_regular),
              l.createElement(
                n.C3,
                null,
                l.createElement(
                  "span",
                  { className: c()(`${a}__trigger__text-container__bold`) },
                  t.title.text_bold
                ),
                l.createElement(
                  "span",
                  { className: c()(`${a}__trigger__text-container__units`) },
                  t.title.text_units
                )
              )
            ),
            l.createElement(
              "span",
              { className: c()(`${a}__trigger__chevron`) },
              i
                ? E || (E = l.createElement(u.A, null))
                : r
                ? v || (v = l.createElement(_.A, null))
                : I || (I = l.createElement(d.A, null))
            )
          );
        },
        x = {
          open: !1,
          filled: !1,
          inputYieldValue: "",
          inputUnitValue: "",
          sale_unit_quantity: "",
          bulk_sale_quantity: "",
          unit_quantity_text: "",
          priceDescription: "",
          totalPrice: 0,
          isChecked: !1,
          isError: !1,
          isLocalError: !1,
          isManualUnitChange: !1,
          yieldOnApply: "",
          unitOnApply: "",
          checkedOnApply: !1,
        },
        D = "TOGGLE_OPEN",
        C = "CLOSE_MODAL",
        j = "SET_INPUT_YIELD",
        L = "SET_INPUT_UNIT",
        f = "SET_PRICE_DESCRIPTION",
        T = "SET_TOTAL_PRICE",
        k = "SET_CHECKED",
        w = "SET_ERROR",
        O = "SET_MANUAL_UNIT_CHANGE",
        U = "RESET_CONTENT",
        S = (e, t) => {
          var i;
          switch (t.type) {
            case C:
              return e.filled
                ? (0, a.A)(
                    (0, a.A)({}, e),
                    {},
                    {
                      inputYieldValue: e.yieldOnApply,
                      inputUnitValue: e.unitOnApply,
                      isChecked: e.checkedOnApply,
                      open: !1,
                    }
                  )
                : (0, a.A)(
                    (0, a.A)((0, a.A)({}, e), x),
                    {},
                    {
                      totalPrice: e.totalPrice,
                      priceDescription: e.priceDescription,
                    }
                  );
            case D: {
              if (!t.filled && !e.filled)
                return (0, a.A)(
                  (0, a.A)((0, a.A)({}, e), x),
                  {},
                  {
                    totalPrice: e.totalPrice,
                    priceDescription: e.priceDescription,
                    open: !e.open,
                    filled: t.filled || e.filled,
                  }
                );
              const i = t.filled
                ? {
                    yieldOnApply: t.yieldOnApply,
                    unitOnApply: t.unitOnApply,
                    checkedOnApply: t.checkedOnApply,
                  }
                : {
                    yieldOnApply: e.yieldOnApply,
                    unitOnApply: e.unitOnApply,
                    checkedOnApply: e.checkedOnApply,
                  };
              return (0, a.A)(
                (0, a.A)({}, e),
                {},
                { open: !e.open, filled: t.filled || e.filled },
                i
              );
            }
            case j:
              return (0, a.A)(
                (0, a.A)({}, e),
                {},
                { inputYieldValue: t.payload }
              );
            case L:
              return (0, a.A)(
                (0, a.A)({}, e),
                {},
                { inputUnitValue: t.payload }
              );
            case f:
              return (0, a.A)(
                (0, a.A)({}, e),
                {},
                {
                  priceDescription: t.payload.description,
                  sale_unit_quantity: t.payload.sale_unit_quantity,
                  bulk_sale_quantity: t.payload.bulk_sale_quantity,
                  unit_quantity_text: t.payload.unit_quantity_text,
                }
              );
            case T:
              return (0, a.A)((0, a.A)({}, e), {}, { totalPrice: t.payload });
            case k:
              return (0, a.A)((0, a.A)({}, e), {}, { isChecked: t.payload });
            case w:
              return (0, a.A)(
                (0, a.A)({}, e),
                {},
                {
                  isError: t.payload,
                  isLocalError: !!t.isLocalError,
                  isManualUnitChange:
                    null !== (i = t.disableCheck) && void 0 !== i
                      ? i
                      : e.isManualUnitChange,
                  errorMessage: t.errorMessage,
                }
              );
            case O:
              return (0, a.A)(
                (0, a.A)({}, e),
                {},
                { isManualUnitChange: t.payload }
              );
            case U:
              return (0, a.A)(
                (0, a.A)({}, x),
                {},
                {
                  totalPrice: e.totalPrice,
                  priceDescription: e.priceDescription,
                }
              );
            default:
              return e;
          }
        },
        P = (e) => {
          const {
              inputs: t,
              footer: i,
              site_code: n,
              error_operation: r,
              onSetQuantity: s,
              onOpenModal: c,
              tracker: o,
              tracks: p,
              item_id: d,
              variation_id: u,
            } = e,
            [_, m] = (0, l.useReducer)(
              S,
              (0, a.A)(
                (0, a.A)({}, x),
                {},
                {
                  totalPrice: i.total_price.value,
                  errorMessage: t.min_error_message.error_label.text,
                }
              )
            ),
            y = (0, l.useCallback)(
              (e, a) => {
                let l = "number" == typeof e ? e : Number(e.replace(",", "."));
                if (0 === l)
                  return void m({
                    type: w,
                    payload: !0,
                    isLocalError: !0,
                    errorMessage: t.min_error_message.error_label.text,
                  });
                let r = a,
                  s = i.price_description.singular_unit;
                _.isChecked &&
                  !_.isManualUnitChange &&
                  "" !== _.inputYieldValue &&
                  "" !== _.inputUnitValue &&
                  (l = Math.round(1.1 * l * 100) / 100);
                const c = l < t.item_yield;
                if ("SIMPLE_INPUT" === t.input_type)
                  (l = Math.ceil(l / t.item_yield).toFixed(4) * t.item_yield),
                    (l = l % 1 == 0 ? l : l.toFixed(2)),
                    (r = l),
                    (l = h(l, n)),
                    m({
                      type: f,
                      payload: {
                        description: `${l} ${s}`,
                        sale_unit_quantity: l,
                        bulk_sale_quantity: l,
                      },
                    });
                else {
                  l > t.item_yield
                    ? ((r = Math.ceil(
                        parseFloat((l / t.item_yield).toFixed(4))
                      )),
                      (s = i.price_description.plural_unit))
                    : (s = i.price_description.singular_unit);
                  const e = i.price_description.label_description.text
                    .replace("&nbsp;", " ")
                    .replace(
                      "{measure}",
                      (r * t.item_yield) % 1 == 0
                        ? h(r * t.item_yield, n)
                        : h((r * t.item_yield).toFixed(2), n)
                    )
                    .replace("{sales}", h(r, n))
                    .replace("{unit}", s);
                  m({
                    type: f,
                    payload: {
                      description: e,
                      sale_unit_quantity: r,
                      bulk_sale_quantity: (r * t.item_yield).toFixed(2),
                      unit_quantity_text: `(${r} ${s})`,
                    },
                  });
                }
                const o = r * t.price_unit;
                m({ type: T, payload: o }),
                  m({
                    type: w,
                    payload: !1,
                    isLocalError: c,
                    errorMessage: t.min_error_message.error_label.text,
                  });
              },
              [
                i.price_description.singular_unit,
                i.price_description.label_description.text,
                i.price_description.plural_unit,
                _.isChecked,
                _.isManualUnitChange,
                _.inputYieldValue,
                _.inputUnitValue,
                t.item_yield,
                t.input_type,
                t.price_unit,
                t.min_error_message.error_label.text,
                n,
              ]
            ),
            A = (0, l.useCallback)((e) => {
              m({ type: O, payload: e });
            }, []),
            g = (0, l.useCallback)(
              (e, t, i, a) => (l) => {
                m({ type: O, payload: !1 });
                const {
                    nativeEvent: { inputType: n },
                  } = l,
                  { value: r } = l.target;
                let s = "";
                if (!/^\d{0,4}(?:[,.]\d{0,2})?$/.test(r)) {
                  if ("deleteContentBackward" !== n) return;
                  s = r;
                }
                if (((s = r), a || "" === s))
                  if ((m({ type: e, payload: s }), s)) {
                    const e = Number(s.replace(",", ".")),
                      a = Math.ceil(e / i);
                    m({ type: t, payload: a.toString() }), y(e, a);
                  } else
                    m({ type: t, payload: "" }),
                      m({ type: f, payload: { description: "" } });
                else {
                  const l = parseInt(s, 10);
                  if (Number.isNaN(l))
                    return (
                      m({ type: e, payload: "" }),
                      m({ type: t, payload: "" }),
                      void m({ type: f, payload: { description: "" } })
                    );
                  m({ type: e, payload: l.toString() });
                  const n = (l * i) % 1 == 0 ? l * i : (l * i).toFixed(2);
                  m({ type: t, payload: n.toString(), isYield: a }), y(n, l);
                }
              },
              [y]
            ),
            N = g(j, L, t.item_yield, !0, "inputYield"),
            M = g(L, j, t.item_yield, !1, "inputUnit");
          (0, l.useEffect)(() => {
            const e = Number.isNaN(
                parseFloat(_.inputYieldValue.replace(",", "."))
              )
                ? t.item_yield || 0
                : parseFloat(_.inputYieldValue.replace(",", ".")),
              i = parseInt(_.inputUnitValue, 10) || 1;
            y(e, i);
          }, [_.inputYieldValue, _.inputUnitValue, t.item_yield, y]),
            (0, l.useEffect)(() => {
              m({ type: U });
            }, [d, u]);
          const E = (0, l.useCallback)(() => {
              _.open
                ? o(null == p ? void 0 : p.close)
                : o(null == p ? void 0 : p.open),
                m({ type: D }),
                c && c();
            }, [c, _.open, o, p]),
            v = (0, l.useCallback)(() => {
              var e;
              s({
                sale_unit_quantity:
                  ((e = _.sale_unit_quantity),
                  "number" == typeof e ? e : Number(e.replace(/[,.]/g, ""))),
                bulk_sale_quantity: _.bulk_sale_quantity,
                item_id: d,
                variation_id: u,
              })
                .then((e) => {
                  if (e) {
                    var t, i;
                    if (
                      null === (t = e.stock_error_message) ||
                      void 0 === t ||
                      null === (t = t.error_label) ||
                      void 0 === t ||
                      !t.text
                    )
                      return (
                        m({
                          type: D,
                          filled: !0,
                          yieldOnApply: _.inputYieldValue,
                          unitOnApply: _.inputUnitValue,
                          checkedOnApply: _.isChecked,
                        }),
                        void o(
                          (0, a.A)(
                            (0, a.A)({}, null == p ? void 0 : p.apply_success),
                            {},
                            {
                              melidata_event: (0, a.A)(
                                (0, a.A)(
                                  {},
                                  null == p
                                    ? void 0
                                    : p.apply_success.melidata_event
                                ),
                                {},
                                {
                                  event_data: (0, a.A)(
                                    (0, a.A)(
                                      {},
                                      null == p
                                        ? void 0
                                        : p.apply_success.melidata_event
                                            .event_data
                                    ),
                                    {},
                                    { waste_input_checked: _.isChecked }
                                  ),
                                }
                              ),
                            }
                          )
                        )
                      );
                    m({
                      type: w,
                      payload: !0,
                      isLocalError: !1,
                      errorMessage:
                        null === (i = e.stock_error_message) ||
                        void 0 === i ||
                        null === (i = i.error_label) ||
                        void 0 === i
                          ? void 0
                          : i.text,
                    }),
                      o(
                        (0, a.A)(
                          (0, a.A)(
                            {},
                            null == p ? void 0 : p.apply_error_stock
                          ),
                          {},
                          {
                            melidata_event: (0, a.A)(
                              (0, a.A)(
                                {},
                                null == p
                                  ? void 0
                                  : p.apply_error_stock.melidata_event
                              ),
                              {},
                              {
                                event_data: (0, a.A)(
                                  (0, a.A)(
                                    {},
                                    null == p
                                      ? void 0
                                      : p.apply_error_stock.melidata_event
                                          .event_data
                                  ),
                                  {},
                                  { waste_input_checked: _.isChecked }
                                ),
                              }
                            ),
                          }
                        )
                      );
                  }
                })
                .catch(() => {
                  m({
                    type: w,
                    payload: !0,
                    isLocalError: !1,
                    errorMessage: r,
                  });
                });
            }, [_, s, r, o, p, d, u]);
          return {
            handleCheckboxChange: (0, l.useCallback)(
              (e) => {
                m({ type: k, payload: e.target.checked });
                const i =
                    parseFloat(_.inputYieldValue.replace(",", ".")) ||
                    t.item_yield ||
                    0,
                  a = parseInt(_.inputUnitValue, 10) || 1;
                y(i, a);
              },
              [_.inputUnitValue, _.inputYieldValue, t.item_yield, y]
            ),
            handleToggleOpen: E,
            handleYieldChange: N,
            handleInputFocus: A,
            handleUnitChange: M,
            handleClose: v,
            closeModal: () => {
              m({ type: C }), o(null == p ? void 0 : p.close);
            },
            state: _,
          };
        };
      var $;
      const z = "calculator-block-mobile",
        Y = (e) => {
          const { runCatchErrorBoundary: t = () => {} } = e;
          try {
            const {
                showNotSelectedError: t,
                header: i,
                inputs: s,
                footer: o,
                messages: p,
              } = e,
              {
                handleCheckboxChange: d,
                handleInputFocus: u,
                handleUnitChange: _,
                handleYieldChange: A,
                handleToggleOpen: N,
                handleClose: h,
                closeModal: E,
                state: v,
              } = P((0, a.A)({}, e));
            return l.createElement(
              "div",
              { className: `${z}__trigger` },
              l.createElement(
                n.$n,
                {
                  hierarchy: "mute",
                  className: c()(`${z}__trigger__button`, {
                    open: v.open,
                    error: t,
                  }),
                  onClick: N,
                },
                l.createElement(b, {
                  header: i,
                  open: v.open,
                  namespace: z,
                  error: t,
                  isMobile: !0,
                })
              ),
              l.createElement(
                m.X,
                {
                  initialHeight: "fit-content",
                  align: "",
                  dragIndicator: !1,
                  close: !0,
                  closeOutside: !0,
                  className: c()(`${z}__bottom-sheet`),
                  onClose: E,
                  srLabel: "bs-label",
                  open: v.open,
                },
                l.createElement(
                  "div",
                  { className: "content-mobile-wrapper" },
                  l.createElement(
                    "div",
                    {
                      className: c()("content-mobile-wrapper__header-wrapper"),
                    },
                    l.createElement("h2", null, " ", i.title.text_modal, " "),
                    l.createElement(
                      "button",
                      { type: "button", onClick: N },
                      $ ||
                        ($ = l.createElement("img", {
                          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuOTM5NDUzIDIuMDAwMTFMNi45NDI4OSA4LjAwMzU1TDAuOTM5NDUzIDE0LjAwN0wyLjAwMDExIDE1LjA2NzZMOC4wMDM1NSA5LjA2NDIxTDE0LjAwMDEgMTUuMDYwOEwxNS4wNjA4IDE0LjAwMDFMOS4wNjQyMSA4LjAwMzU1TDE1LjA2MDggMi4wMDY5OUwxNC4wMDAxIDAuOTQ2MzI2TDguMDAzNTUgNi45NDI4OUwyLjAwMDExIDAuOTM5NDUzTDAuOTM5NDUzIDIuMDAwMTFaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjU1Ii8+Cjwvc3ZnPgo=",
                          alt: "close button",
                        }))
                    ),
                    i.subtitles.map((e) =>
                      l.createElement(
                        "p",
                        { key: e.text, title: e.accessibility_text },
                        " ",
                        e.text,
                        " "
                      )
                    )
                  ),
                  l.createElement(
                    "div",
                    { className: "mobile-content" },
                    l.createElement(y, {
                      inputs: s,
                      isError: v.isError || v.isLocalError,
                      inputYieldValue: v.inputYieldValue,
                      handleYieldChange: A,
                      handleInputFocus: u,
                      inputUnitValue: v.inputUnitValue,
                      handleUnitChange: _,
                      namespace: z,
                      isMobile: !0,
                    }),
                    l.createElement(g, {
                      isError: v.isError || v.isLocalError,
                      errorMessage: v.errorMessage,
                      namespace: z,
                    }),
                    s.check &&
                      l.createElement(
                        "div",
                        { className: c()(`${z}__check`) },
                        l.createElement(r.S, {
                          label: s.check.input_title.text,
                          onChange: d,
                          checked: v.isChecked,
                          srLabel: s.check.input_title.accessibility_text,
                          disabled: v.isError && !v.isChecked,
                        })
                      ),
                    l.createElement("div", {
                      className: c()(`${z}__ui-separator`),
                    }),
                    l.createElement(M, {
                      priceDescription: v.priceDescription,
                      totalPrice: v.totalPrice,
                      footer: o,
                      inputYieldValue: v.inputYieldValue,
                      inputUnitValue: v.inputUnitValue,
                      isError: v.isError || v.isLocalError,
                      handleClose: h,
                      namespace: z,
                    })
                  )
                )
              ),
              l.createElement(g, {
                isError: t,
                errorMessage: i.error_message,
                namespace: z,
                className: c()(`${z}__outside-error`),
              }),
              (null == p ? void 0 : p.length) > 0 &&
                (null == p
                  ? void 0
                  : p.map((e) =>
                      l.createElement(
                        "div",
                        { key: e.text, className: c()(`${z}__message`) },
                        l.createElement("p", null, " ", e.text, " ")
                      )
                    ))
            );
          } catch (e) {
            return t(e);
          }
        };
      Y.displayName = "CalculatorMobile";
    },
    81483(e, t, i) {
      i.d(t, { A: () => p });
      var a = i(80296),
        l = i(96540),
        n = i(61678),
        r = i(84291),
        s = i(74848),
        c = "seo-ui-extended-menu-mobile",
        o = function (e) {
          var t = e.title,
            i = void 0 === t ? "" : t,
            o = e.menu,
            p = void 0 === o ? [] : o,
            d = e.titleHeadingLevel,
            u = void 0 === d ? "h3" : d,
            _ = (0, l.useState)([0]),
            m = (0, a.A)(_, 2),
            y = m[0],
            A = m[1];
          return (0, s.jsxs)("div", {
            className: "".concat(c),
            children: [
              (0, s.jsx)("div", {
                className: "".concat(c, "__header"),
                children: (0, l.createElement)(
                  u,
                  { className: "".concat(c, "__header__title") },
                  i
                ),
              }),
              (0, s.jsx)(n.Zp, {
                shadow: "outline",
                children: (0, s.jsx)("div", {
                  className: ""
                    .concat(c, "__body ")
                    .concat(c, "__accordion-container"),
                  children: p.map(function (e, t) {
                    var i = e.title,
                      a = void 0 === i ? "" : i,
                      l = e.url,
                      n = void 0 === l ? "" : l,
                      o = e.children,
                      d = void 0 === o ? [] : o;
                    return (0, s.jsx)(
                      r.n,
                      {
                        className: "accordion-list",
                        title: (0, s.jsx)("a", {
                          className: "".concat(c, "__group_title"),
                          href: n,
                          children: a,
                        }),
                        id: null == a ? void 0 : a.replace(/\s/g, ""),
                        showDivider: t + 1 < p.length,
                        expanded: y.includes(t),
                        onChange: function () {
                          return A(y.includes(t) ? [] : [t]);
                        },
                        children:
                          d.length > 0 &&
                          (0, s.jsx)("ul", {
                            className: "".concat(c, "__list"),
                            children: d.map(function (e) {
                              var t = e.text,
                                i = void 0 === t ? "" : t,
                                a = e.url,
                                l = void 0 === a ? "" : a;
                              return (0,
                              s.jsx)("li", { className: "".concat(c, "__link"), children: (0, s.jsx)("a", { className: "".concat(c, "__anchor"), href: l, children: i }) }, null == i ? void 0 : i.replace(/\s/g, ""));
                            }),
                          }),
                      },
                      null == a ? void 0 : a.replace(/\s/g, "")
                    );
                  }),
                }),
              }),
            ],
          });
        };
      o.displayName = "ExtendedMenuMobile";
      const p = o;
    },
    96901(e, t, i) {
      i.d(t, { zS: () => C, Fk: () => k });
      var a = i(89379),
        l = i(96540),
        n = i(46942),
        r = i.n(n),
        s = i(93603),
        c = i(8257),
        o = i(49306),
        p = i(20551),
        d = i(36402),
        u = i(74848),
        _ = i(92275),
        m = i(16030),
        y = i(33551),
        A = i(9924),
        g = i(51122),
        N = i(52383),
        h = i(27876);
      const M = "ui-vpp-apparel-size",
        E = (e) => {
          let { state: t, size_chart: i = null, inPicker: n = !1 } = e;
          const _ = (0, l.useRef)();
          return "HIDDEN" !== t || i
            ? (0, u.jsx)("div", {
                className: r()(M, { [`${M}-picker`]: n }),
                ref: _,
                children:
                  i &&
                  (0, u.jsx)(c.cX, {
                    className: `${M}__action-modal`,
                    componentAsLabel: (0, u.jsx)(
                      s.G,
                      (0, a.A)(
                        { as: "span", className: `${M}__label` },
                        i.label
                      )
                    ),
                    icon: (0, u.jsx)(d.In, {
                      id: "ruler",
                      className: `${M}__action-icon`,
                    }),
                    url: i.target,
                    modalUrl: "#apparel-size",
                    modalClassName:
                      "ui-pdp-iframe-modal ui-pdp-apparel-size-modal",
                    modalTitle: i.label.text,
                    closeModalLabel: null == i ? void 0 : i.close_modal_label,
                    children: (0, u.jsx)(o.v, {
                      className: `${M}__iframe`,
                      scrolling: "no",
                      src: i.target,
                      title: i.label.text,
                      "data-testid": "apparel-size-specs__iframe",
                      onMessage: (0, p.VW)(
                        "vip:modal-content:loaded",
                        "height",
                        ".ui-pdp-iframe-modal",
                        ".andes-modal__header"
                      ),
                    }),
                  }),
              })
            : null;
        },
        v = "ui-vpp-fit-as-expected",
        I = [],
        b = {},
        x = (e) => {
          let {
            fit_as_expected: t = b,
            reviews_attribute_summary: i = I,
            state: a,
            reviews_attribute_title: n = null,
          } = e;
          const { close_modal_label: s, label: c, track: o } = t,
            [A, g] = (0, l.useState)(!1),
            N = (0, l.useCallback)(
              (e) => {
                null == e || e.preventDefault(), g(!A), A || (0, p.sx)(o);
              },
              [A]
            );
          return "HIDDEN" !== a || t
            ? (0, u.jsx)("div", {
                className: v,
                children:
                  t &&
                  (0, u.jsx)(_.m, {
                    id: "fit-as-expected",
                    closeIconLabel: s,
                    className: r()(`${v}__tooltip`),
                    content: (0, u.jsx)("div", {
                      "data-testid": "tooltip-apparel",
                      children: (0, u.jsx)(y.b, { title: n, levels: i }),
                    }),
                    side: "bottomRight",
                    trigger: "click",
                    offsetY: 8,
                    offsetX: 0.01,
                    onClose: N,
                    children: (0, u.jsxs)("button", {
                      type: "button",
                      className: r()(
                        `${v}__fit-as-expected`,
                        { [`${v}__links-separator`]: t },
                        (0, p.Ns)({ color: c.color, size: "XXSMALL" })
                      ),
                      onClick: N,
                      "data-testid":
                        "apparel-size-specs__fit-as-expected-button",
                      children: [
                        m.I.jsx(c.text, c.values),
                        (0, u.jsx)(d.In, {
                          id: "chevron",
                          className: r()(
                            `ui-pdp-icon--chevron-down ${v}__chevron`,
                            { "ui-pdp-icon--chevron-down--active": A }
                          ),
                        }),
                      ],
                    }),
                  }),
              })
            : null;
        },
        D = "ui-vpp-apparel-size",
        C = (e) => {
          let {
            state: t,
            size_chart: i = null,
            fit_as_expected_action: n = null,
            reviews_attribute_summary: c = null,
            isOutsideVariations: o = !1,
            reviews_attribute_title: _ = null,
          } = e;
          const [N, h] = (0, l.useState)(!1);
          return "HIDDEN" === t || (!i && !n)
            ? null
            : (0, u.jsxs)("div", {
                className: r()(
                  D,
                  { "__only-fit-as-expected": !i },
                  { "__outside-variations": o }
                ),
                children: [
                  i &&
                    (0, u.jsx)(A.$U, {
                      children: (0, u.jsxs)("a", {
                        href: i.target,
                        className: `${D}__sizes`,
                        "data-testid": "apparel-size-specs__sizes",
                        children: [
                          (0, u.jsx)(d.In, {
                            id: "ruler",
                            className: `${D}__icon-ruler`,
                          }),
                          (0, u.jsx)(
                            s.G,
                            (0, a.A)(
                              (0, a.A)({ className: `${D}__label` }, i.label),
                              {},
                              { as: "span" }
                            )
                          ),
                        ],
                      }),
                    }),
                  n &&
                    (0, u.jsxs)(u.Fragment, {
                      children: [
                        (0, u.jsxs)("button", {
                          type: "button",
                          className: r()(
                            `${D}__fit-as-expected`,
                            (0, p.Ns)({ color: n.label.color, size: "XSMALL" })
                          ),
                          onClick: () => {
                            h(!0), (0, p.sx)(n.track);
                          },
                          "data-testid":
                            "apparel-size-specs__fit-as-expected-button",
                          children: [
                            m.I.jsx(n.label.text, n.label.values),
                            (0, u.jsx)(d.In, {
                              id: "chevron",
                              className: `${D}__fit-as-expected__chevron ui-pdp-icon--chevron-down`,
                            }),
                          ],
                        }),
                        (0, u.jsx)(g.Q, {
                          onClose: () => h(!1),
                          visible: N,
                          url: "#fit-as-expected",
                          className: r()(`${D}__fit-as-expected__modal`),
                          closeModalLabel:
                            null == i ? void 0 : i.close_modal_label,
                          children: (0, u.jsx)(y.b, { title: _, levels: c }),
                        }),
                      ],
                    }),
                ],
              });
        },
        j = "apparel-size-specs",
        { OWNERSHIPS: L } = p.AA,
        { Ub: f } = (N.Ov.PICKER, L.APPAREL, L.APPAREL, h.AA),
        { OWNERSHIPS: T } = p.AA,
        k = {
          resolver: (e) =>
            null == e
              ? void 0
              : e.pickers.some((e) => "SIZE" === e.id && !!e.action),
          definitions: {
            [j]: { component: C },
            [N.Ov.PICKER]: {
              mappers: [
                (e) => {
                  const { list: t, pickerData: i, statics: a } = e,
                    { namespace: l } = a,
                    { action: n, id: r } = i;
                  if ("SIZE" === r && !!n) {
                    const e = t.find((e) => e.type === N.Ov.PICKER_TITLE),
                      i = {
                        type: j,
                        props: {
                          state: "VISIBLE",
                          size_chart: n,
                          isOutsideVariations: !0,
                        },
                        show: "SIZE" === r && !!n,
                      },
                      a = {
                        type: f.CONTAINER,
                        props: {
                          wrapperConfig: {
                            tag: "div",
                            props: { className: `${l}__label-with-sizechart` },
                          },
                          list: [e, i],
                        },
                      };
                    return { list: h.B8.replaceElement(t, a, e.type) };
                  }
                  return {};
                },
              ],
            },
          },
          ownership: T.APPAREL,
          id: T.APPAREL,
        };
    },
  },
]);
//# sourceMappingURL=28183.b7b05a8d.js.map
