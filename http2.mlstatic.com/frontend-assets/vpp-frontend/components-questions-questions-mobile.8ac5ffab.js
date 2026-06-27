(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [35170, 42378],
  {
    59286(e, t, s) {
      "use strict";
      s.d(t, { A: () => C });
      s(18111), s(61701);
      var n,
        a,
        r = s(16726),
        i = s(46942),
        o = s.n(i),
        l = s(26376),
        c = s(96540),
        u = s(50701),
        d = s(43984),
        _ = s(17357),
        m = s(16236),
        h = s(89177),
        p = s(2714),
        f = s(56027),
        A = s(31162),
        x = s(74848);
      const g = (0, l.R)({
          resolved: {},
          chunkName: () => "action",
          isReady(e) {
            const t = this.resolve(e);
            return !0 === this.resolved[t] && !!s.m[t];
          },
          importAsync: () => s.e(72957).then(s.bind(s, 71929)),
          requireAsync(e) {
            const t = this.resolve(e);
            return (
              (this.resolved[t] = !1),
              this.importAsync(e).then((e) => ((this.resolved[t] = !0), e))
            );
          },
          requireSync(e) {
            const t = this.resolve(e);
            return s(t);
          },
          resolve: () => 71929,
        }),
        T = "ui-pdp-actions",
        v = (e) => {
          switch (e) {
            case _.HC.ACTION_TYPE_PRIMARY:
              return _.HC.ACTION_HIERARCHY_LOUD;
            case _.HC.ACTION_TYPE_SECONDARY:
              return _.HC.ACTION_HIERARCHY_QUIET;
            case _.HC.ACTION_TYPE_TERTIARY:
              return _.HC.ACTION_HIERARCHY_MUTE;
            case _.HC.ACTION_TYPE_ACTION_ROW:
              return _.HC.ACTION_HIERARCHY_ROW;
            default:
              return _.HC.ACTION_HIERARCHY_LOUD;
          }
        },
        b = (e) => {
          let {
            selectedQuantity: t = 1,
            actions: s,
            form: r = null,
            size: i = null,
            content_featured: l = !1,
            onSubmit: _ = null,
            showQuantityError: b = null,
            showVariationsError: y = null,
            triggerSequencer: C = null,
            saveFrontendStatsd: N = null,
            showAddToCartModal: I = null,
            showQuestionsAiModal: E = null,
            itemId: S = null,
            message: j = null,
            fetchContactInfo: L = null,
            recaptchav2token: O = null,
            isFetchingData: k = !1,
            onClick: $ = null,
            redirectToLogin: q = null,
            doContactAction: w = null,
            featureName: R = null,
            recaptchaSiteKey: M = null,
            triggerBuyNowOnePayForAll: H = null,
            isGiftChecked: U = null,
            isInstallationServicesChecked: P = null,
            errorBoundaryConfig: D = null,
          } = e;
          const { isWebview: B, deviceType: Q } = (0, c.useContext)(d.Ay);
          return (0, x.jsxs)("div", {
            className: o()(`${T}__container`, {
              [`${T}__container--one-element`]: 1 === s.length,
              [`${T}__container--featured`]: l,
            }),
            children: [
              s.map((e) => {
                const {
                    action_type: t,
                    disabled: s,
                    disabled_text: n,
                    label: a,
                    type: r,
                    target: o,
                    trigger_action: c,
                    intervention_id: d,
                    fallback: T,
                    submit_target: P,
                  } = e,
                  B = (0, u.ne)(e),
                  G = {
                    app: D?.app || f.PC,
                    deviceType: D?.deviceType || f.PC,
                    criticality: D?.criticality || f.PC,
                    ownership: D?.ownership || f.PC,
                    standard: D?.standard || f.PC,
                    componentId: D?.componentId
                      ? `${D.componentId}_action_button`
                      : "unknown_action_button",
                  },
                  Y = Boolean(T) || Boolean(P),
                  W = {
                    is_disabled: Boolean(s),
                    action_type: t || f.PC,
                    button_type: c || t || f.PC,
                    main_action_target: Boolean(o),
                    main_action_fallback: Y,
                    main_action_empty: !o && !Y,
                    intervention_id: d || f.PC,
                  },
                  K = `${A.nK}.${A.eu.MAIN_ACTIONS_PRINT}`;
                (0, h.A)({
                  errorBoundaryConfig: G,
                  additionalBusinessTags: W,
                  customPrintKey: K,
                });
                const F = `${A.nK}.${A.eu.MAIN_ACTIONS_CLICK}`,
                  V = {
                    triggerBuyNowOnePayForAll: H,
                    size: i,
                    content_featured: l,
                    hierarchy: v(r),
                    fallbackUrl: T,
                    ...e,
                    onSubmit: _,
                    deviceType: Q,
                    showQuantityError: b,
                    showVariationsError: y,
                    showAddToCartModal: I,
                    triggerSequencer: C,
                    showQuestionsAiModal: E,
                    actionType: t,
                    itemId: S,
                    recaptchav2token: O,
                    recaptchaSiteKey: M,
                    message: j,
                    fetchContactInfo: L,
                    isFetchingData: k,
                    saveFrontendStatsd: N,
                    onMainActionsClickMNCC: () => {
                      (0, p.A)({
                        errorBoundaryConfig: G,
                        additionalBusinessTags: W,
                        customClickKey: F,
                      });
                    },
                    tooltip:
                      s && n
                        ? {
                            content: n,
                            mouseLeaveDelay: -0.8,
                            offsetY: -8,
                            ...(0, m.M)(e.tooltip || {}),
                          }
                        : null,
                    onClick: "SCROLL_TO" === t ? $ : null,
                    redirectToLogin: q,
                    doContactAction: w,
                    featureName: R,
                    loginType: "LINK" === t ? "question" : "vis_motor_contact",
                    isGiftChecked: U,
                  };
                return (0, x.jsx)(g, { ...V }, a?.text || B);
              }),
              r &&
                Object.keys(r).map((e) =>
                  B && "item_id" === e
                    ? (0, x.jsxs)(x.Fragment, {
                        children: [
                          (0, x.jsx)(
                            "input",
                            {
                              type: "hidden",
                              name: "ids",
                              value: `${r.item_id}-${t}`,
                            },
                            "ids"
                          ),
                          (0, x.jsx)(
                            "input",
                            {
                              type: "hidden",
                              name: "items",
                              value: `${r.item_id}-${t}`,
                            },
                            "items"
                          ),
                        ],
                      })
                    : (0, x.jsx)(
                        "input",
                        { type: "hidden", name: e, value: r[e] },
                        e
                      )
                ),
              (0, x.jsx)(
                "input",
                { type: "hidden", name: "quantity", value: t },
                "quantity"
              ),
              U &&
                (n ||
                  (n = (0, x.jsx)(
                    "input",
                    { type: "hidden", name: "is_gift", value: "true" },
                    "is_gift"
                  ))),
              P &&
                (a ||
                  (a = (0, x.jsx)(
                    "input",
                    {
                      type: "hidden",
                      name: "installation_check",
                      value: "true",
                    },
                    "installation_check"
                  ))),
            ],
          });
        },
        y = (e) => {
          const { className: t = null, onSubmit: s = null } = e;
          return (0, x.jsx)(r.l, {
            className: o()(T, t),
            method: "get",
            onSubmit: s,
            children: (0, x.jsx)(b, { ...e }),
          });
        },
        C = (0, c.memo)(y);
    },
    43588(e, t, s) {
      "use strict";
      s.r(t), s.d(t, { default: () => f });
      var n = s(96540),
        a = s(46942),
        r = s.n(a),
        i = s(17376),
        o = s(37808),
        l = s(50538),
        c = s(17357),
        u = s(5429),
        d = s(74848);
      const _ = (e, t, s, n, a, r) => {
        const i = (0, l.default)(n);
        return (0, d.jsx)(u.A, {
          className: "ui-pdp-action__action",
          label: e.text,
          url: t,
          htmlTarget: s,
          style_blocked: r,
          modifier: "secondary",
          figure: i,
          onClick: a,
        });
      };
      var m;
      const h = "ui-pdp-action",
        p = (e) => {
          const {
              className: t,
              type: s,
              disabled: a,
              disabled_text: u,
              style_blocked: p,
              onClickHandler: f,
              label: A,
              size: x,
              hierarchy: g,
              icon: T,
              hasTopSeparator: v,
              actionType: b,
              fullWidth: y,
              buttonProps: C,
              isLoading: N,
            } = e,
            [I, E] = (0, n.useState)(!a && N),
            [S, j] = (0, n.useState)(!0);
          (0, n.useEffect)(() => {
            j(!1);
          }, []),
            (0, n.useEffect)(() => {
              E(!a && N);
            }, [a, N]);
          const L = (0, n.useCallback)(
              (e) => {
                E(!0),
                  (0, n.startTransition)(() => {
                    Promise.resolve(f(e)).finally(() => E(!1));
                  });
              },
              [f]
            ),
            O = {
              ...C,
              className: r()("andes-spinner__icon-base", t, `${h}--${s}`, {
                [`${h}-${s}--disabled`]: a,
              }),
              hierarchy: g,
              disabled: p,
              size: x,
              fullWidth: y,
            };
          if ("actionRow" === g) return _(A, O.href, O.target, T, f);
          const k = v || b === c.TH.ASK_QUESTIONS_AI;
          return (0, d.jsxs)(d.Fragment, {
            children: [
              k &&
                (m ||
                  (m = (0, d.jsx)("div", {
                    className: "ui-pdp-action-separator",
                  }))),
              (0, d.jsxs)(o.$n, {
                "data-testid": "button",
                onClick: L,
                loading: I,
                ...O,
                srAnnouncement: A?.text,
                children: [
                  T && (0, l.default)(T.id, `ui-pdp-action-icon--${T.color}`),
                  A?.text,
                  a && u && (0, d.jsx)(i.s, { children: `. ${u}` }),
                ],
              }),
              a &&
                S &&
                (0, d.jsx)(i.s, {
                  children: (0, d.jsx)(
                    "input",
                    {
                      name: "disabledform",
                      value: null,
                      required: !0,
                      "aria-label": u,
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
      const f = p;
    },
    17357(e, t, s) {
      "use strict";
      s.d(t, { HC: () => a, TH: () => n, lP: () => r });
      const n = {
          BUY_NOW_WITH_CREDITS: "BUY_NOW_WITH_CREDITS",
          CALL: "CALL",
          CALL_LINK: "CALL_LINK",
          WHATSAPP: "WHATSAPP",
          WHATSAPP_INTERVENTION: "WHATSAPP_INTERVENTION",
          WHATSAPP_LINK: "WHATSAPP_LINK",
          WHATSAPP_OPS_LINK: "WHATSAPP_OPS_LINK",
          LINK: "LINK",
          MODAL_QUESTIONS: "MODAL_QUESTIONS",
          MODAL_UNREGISTERED_QUESTION: "MODAL_UNREGISTERED_QUESTION",
          SCROLL_TO: "SCROLL_TO",
          MODAL_QUOTE: "MODAL_QUOTE",
          MODAL_QUOTATION: "MODAL_QUOTATION",
          MODAL_VIS_IFRAME: "MODAL_VIS_IFRAME",
          MODAL_UNREGISTERED_QUOTATION: "MODAL_UNREGISTERED_QUOTATION",
          MODAL_CHECK_UNITS: "MODAL_CHECK_UNITS",
          ADD_TO_CART: "ADD_TO_CART",
          BUY_NOW: "BUY_NOW",
          BUY_NOW_WITH_ONE_PAY_FOR_ALL: "BUY_NOW_WITH_ONE_PAY_FOR_ALL",
          BOTTOM_SHEET_WITH_PRELOAD: "BOTTOM_SHEET_WITH_PRELOAD",
          SEQUENCER: "SEQUENCER",
          ASK_QUESTIONS_AI: "ASK_QUESTIONS_AI",
          SCHEDULE_VISIT_MOTORS: "SCHEDULE_VISIT_MOTORS",
          SCHEDULE_VISIT_MOTORS_LINK: "SCHEDULE_VISIT_MOTORS_LINK",
          VEHICLE_HISTORY_MODAL: "VEHICLE_HISTORIC",
        },
        a = {
          ACTION_TYPE_PRIMARY: "primary",
          ACTION_TYPE_SECONDARY: "secondary",
          ACTION_TYPE_TERTIARY: "tertiary",
          ACTION_TYPE_ACTION_ROW: "action_row",
          ACTION_HIERARCHY_QUIET: "quiet",
          ACTION_HIERARCHY_LOUD: "loud",
          ACTION_HIERARCHY_MUTE: "mute",
          ACTION_HIERARCHY_ROW: "actionRow",
        },
        r = { SUBMIT: "submit" };
    },
    47903(e, t, s) {
      "use strict";
      s.r(t), s.d(t, { ResponseIcon: () => c, default: () => u });
      var n = s(96540),
        a = s(46942),
        r = s.n(a),
        i = s(19890),
        o = s(74848);
      const l = i.iconList.IconResponse,
        c = (e) => {
          let { className: t = "" } = e;
          return (0, o.jsx)("svg", {
            className: r()("ui-pdp-icon", t),
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            children: (0, o.jsx)("use", { href: `#${l}` }),
          });
        };
      c.ICON_ID = l;
      const u = (0, n.memo)(c);
    },
    32059(e, t, s) {
      "use strict";
      s.d(t, { A: () => d });
      var n = s(59053),
        a = s(54255),
        r = s(69025),
        i = s(44489),
        o = s(74848);
      const { devices: l } = r.A,
        { MOBILE: c } = l,
        u = () => {},
        d = (e) => {
          let { deviceType: t, quick_access: s, onScrollComponent: r = u } = e;
          const l = {
            ...s,
            onScrollComponent: r,
            onIframeMessage: (0, i.VW)(
              "vip:modal-content:loaded",
              "height",
              ".ui-pdp-iframe-modal",
              ".andes-modal__header",
              t !== c && "width"
            ),
          };
          return t === c
            ? (0, o.jsx)(n.A, { ...l })
            : (0, o.jsx)(a.A, { ...l });
        };
    },
    27572(e, t, s) {
      "use strict";
      s.d(t, { v: () => i });
      s(18111), s(61701);
      var n = s(50701),
        a = s(37808),
        r = s(74848);
      const i = (e) =>
        e.map((e) =>
          (0, r.jsx)(
            a.$n,
            {
              className: "ui-pdp-questions__button",
              hierarchy: "loud",
              href: e.target,
              children: e.label?.text,
            },
            (0, n.ne)(e)
          )
        );
    },
    80262(e, t, s) {
      "use strict";
      s.d(t, { A: () => a });
      s(18111), s(7588);
      var n = s(71023);
      const a = (e) => {
        let { quick_access: t, question_message: s, ...a } = e;
        const r = a.questions;
        return (
          t?.actions &&
            t.actions.forEach((e) => {
              (0, n.A)(e, { controlled: "true" });
            }),
          { quick_access: t, question_message: s, ...a, ...r }
        );
      };
    },
    34363(e, t, s) {
      "use strict";
      s.d(t, { A: () => d });
      var n = s(96540),
        a = s(67021),
        r = s(13962),
        i = s(86787),
        o = s(17357),
        l = s(43588),
        c = s(74848);
      const u = "ui-pdp-action",
        d = (0, n.memo)(
          (0, i.A)(
            (0, r.A)((e) => {
              let {
                showQuestionsAiModal: t,
                deviceType: s = null,
                redirectToLogin: n,
                saveFrontendStatsd: r,
                ...i
              } = e;
              return ((e, t) => {
                const s = {};
                return (
                  (s["aria-disabled"] = e.ariaDisabled),
                  (s.tabIndex = e.tabIndex || null),
                  (s.form = e.form || null),
                  (s.formAction = e.target),
                  (s.type = o.lP.SUBMIT),
                  (0, c.jsx)(l.default, {
                    buttonProps: s,
                    onClickHandler: t,
                    called_from: "questions_component",
                    ...e,
                  })
                );
              })({ ...i, deviceType: s, saveFrontendStatsd: r }, (e) => {
                if (
                  (i.is_login_required &&
                    n &&
                    n(i.itemId, i.featureName, i.loginType),
                  i.actionType === o.TH.ASK_QUESTIONS_AI)
                ) {
                  e.preventDefault();
                  const { target: s, disabled: n = !1 } = i;
                  t({
                    target: s,
                    disabled: n,
                    called_from: "questions_component",
                    source: "vpp",
                  });
                }
                (0, a.sx)(i.track || null);
              });
            }, `${u}__tooltip`),
            `${u}__card-tooltip`
          )
        );
    },
    37783(e, t, s) {
      "use strict";
      s.d(t, { A: () => d });
      var n = s(96540),
        a = s(46942),
        r = s.n(a),
        i = s(93603),
        o = s(21844),
        l = s(74848);
      const c = "ui-pdp-questions__questions-list",
        u = {},
        d = (e) => {
          let {
            className: t = null,
            answer: s,
            date: a = null,
            denounce: d = null,
            denounceTemplate: _,
            tapeableLinks: m = u,
          } = e;
          const [h, p] = (0, n.useState)(!1),
            f = (0, n.useCallback)(() => {
              window.open(d.target, "_blank");
            }, [d]);
          return (0, l.jsxs)("div", {
            className: t,
            onMouseEnter: () => {
              p(!0);
            },
            onMouseLeave: () => {
              p(!1);
            },
            children: [
              (0, l.jsx)(o.A, {
                className: "separate",
                component: "questions",
                text: s.text,
                color: s.text.color,
                length: s.text.length,
                tapeableLinks: m,
              }),
              a &&
                (0, l.jsx)(i.G, {
                  className: `${c}__answer-item__separate`,
                  font_size: "XSMALL",
                  font_family: "REGULAR",
                  as: "span",
                  ...a,
                }),
              d &&
                (0, l.jsx)(i.G, {
                  className: r()(
                    "andes-button andes-button--medium andes-button--mute",
                    `${c}__answer-item__denounce ${c}__answer-item__denounce__overriding-default-button`,
                    { [`${c}__item__denounce--VISIBLE`]: h }
                  ),
                  as: "button",
                  font_size: "XSMALL",
                  font_family: "REGULAR",
                  accessibilityText: _.accessibility_text,
                  "data-testid": "answer-button-denounce",
                  onClick: f,
                  ..._,
                }),
            ],
          });
        };
    },
    36386(e, t, s) {
      "use strict";
      s.d(t, { R: () => n });
      s(74423);
      const n = (e) =>
        "string" == typeof e && e.includes("buy-multiple-variations");
    },
    37698(e, t, s) {
      "use strict";
      s.d(t, { A: () => i });
      var n = s(74848);
      const a = "ui-pdp-questions__denounce-modal",
        r = (e) => {
          let { url: t, text: s } = e;
          return (0, n.jsx)("li", {
            className: `${a}__item`,
            children: (0, n.jsx)("a", {
              href: t,
              className: `${a}__item__link`,
              rel: "noopener noreferrer",
              target: "_blank",
              children: s,
            }),
          });
        },
        i = (e) => {
          let { denounceLinks: t, questionText: s, answerText: i } = e;
          return (0, n.jsxs)("ul", {
            className: `${a}__list`,
            children: [
              (0, n.jsx)(r, { url: t.question, text: s }),
              (0, n.jsx)(r, { url: t.answer, text: i }),
            ],
          });
        };
    },
    7365(e, t, s) {
      "use strict";
      s.d(t, { A: () => x });
      var n,
        a = s(96540),
        r = s(46942),
        i = s.n(r),
        o = s(55378),
        l = s.n(o),
        c = s(93603),
        u = s(47903),
        d = s(43984),
        _ = s(37698),
        m = s(86310),
        h = s(37783),
        p = s(12674),
        f = s(74848);
      const A = "ui-pdp-questions__questions-list",
        x = (e) => {
          let {
            className: t = "",
            questionsList: s,
            isUsersQuestions: r = !1,
            showTitle: o = !1,
            isFetching: x = !1,
            scrollToQuestion: g = null,
            closeModalLabel: T,
          } = e;
          const [v, b] = (0, a.useState)(!1),
            [y, C] = (0, a.useState)({ question: null, answer: null }),
            { deviceType: N } = (0, a.useContext)(d.Ay),
            { questions: I, touchable_links: E } = s || {};
          return (0, f.jsxs)("div", {
            className: i()(A, t),
            children: [
              o && s.title
                ? (0, f.jsx)("h3", {
                    className: `${A}__title`,
                    children: s.title.text,
                  })
                : null,
              (0, f.jsx)("div", {
                className: i()({ [`${A}__content`]: r }),
                children: l()(I, (e, t) =>
                  (0, f.jsxs)(
                    "div",
                    {
                      className: i()(
                        { [`${A}__item-questions--user-questions`]: r },
                        { [`${A}__item-questions--others-questions`]: !r }
                      ),
                      children: [
                        (0, f.jsx)(m.A, {
                          shouldScrollToQuestion: t + 1 === g,
                          content: e.question.content,
                          target: e.question.target,
                          date: e.question.date,
                          hasAnswer: !!e.answer,
                          denounce: e.question.denounce,
                          denounceTemplate: s.denounce_template.question,
                          deviceType: N,
                        }),
                        e.answer &&
                          (0, f.jsxs)("div", {
                            className: `${A}__answer-container`,
                            children: [
                              n ||
                                (n = (0, f.jsx)(u.default, {
                                  className: `${A}__answer-container__icon`,
                                })),
                              (0, f.jsx)(h.A, {
                                className: `${A}__answer-container__answer`,
                                answer: e.answer.content,
                                date: e.answer.date,
                                denounce:
                                  "mobile" !== N ? e.answer.denounce : null,
                                denounceTemplate: s.denounce_template.answer,
                                tapeableLinks: E,
                              }),
                            ],
                          }),
                        e.answer &&
                          e.question &&
                          e.question.denounce &&
                          e.answer.denounce &&
                          "mobile" === N &&
                          (0, f.jsx)(c.G, {
                            onClick: (t) => {
                              ((e, t, s) => {
                                e.preventDefault(),
                                  b(!x),
                                  C({ question: t, answer: s });
                              })(
                                t,
                                e.question.denounce.target,
                                e.answer.denounce.target
                              );
                            },
                            className: i()(`${A}__question-item__separate`, {
                              [`${A}__answer-item__separate--denounce-mobile`]:
                                "mobile" === N,
                            }),
                            as: "a",
                            text: s.denounce_template.label.text,
                            font_size: "XSMALL",
                            font_family: "REGULAR",
                            href: e.question.target,
                          }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
              "mobile" === N &&
                (0, f.jsx)(p.Q, {
                  onClose: () => {
                    b(!1);
                  },
                  visible: v,
                  url: "#denounce",
                  closeModalLabel: T,
                  children: (0, f.jsx)(_.A, {
                    denounceLinks: y,
                    questionText: s?.denounce_template?.question?.text,
                    answerText: s?.denounce_template?.answer?.text,
                  }),
                }),
            ],
          });
        };
    },
    41237(e, t, s) {
      "use strict";
      s.d(t, { A: () => l });
      var n = s(4989),
        a = s(93603),
        r = s(46458),
        i = s(74848);
      const o = "up-vip-fraud-prevention",
        l = (e) => {
          let { hierarchy: t, message_type: s, body: l } = e;
          return (0, i.jsx)(n.default, {
            className: `${o}__message-container`,
            hierarchy: t,
            type: s,
            children: (0, i.jsx)("div", {
              className: `${o}__message-text`,
              children: (0, i.jsx)(a.G, {
                as: "span",
                text: l && r.I.jsx(l.text || l, l.values),
              }),
            }),
          });
        };
    },
    43484(e, t, s) {
      "use strict";
      s.d(t, { A: () => m });
      var n = s(46942),
        a = s.n(n),
        r = s(67485),
        i = s(46458),
        o = s(93603),
        l = s(50538),
        c = s(4989),
        u = s(9924),
        d = s(44489),
        _ = s(74848);
      const m = (e) => {
        let {
          icon: t = null,
          hierarchy: s = null,
          message_type: n = null,
          title: m = null,
          type: h = null,
        } = e;
        const p = "ui-pdp-questions";
        return (0, _.jsxs)("div", {
          children: [
            "SIMPLE_TEXT" === h &&
              (0, _.jsx)(u.$U, {
                className: a()(`${p}__message-location--simple`, (0, r.A)(t)),
                title: m,
                figure: (0, l.default)(t, a()((0, d.mm)(t.size))),
              }),
            "UI_MESSAGE" === h &&
              (0, _.jsx)(c.default, {
                className: `${p}__message-location--container`,
                hierarchy: s,
                type: n,
                children: (0, _.jsx)("div", {
                  className: `${p}__message-location__text`,
                  children: (0, _.jsx)(o.G, {
                    as: "span",
                    text: m && i.I.jsx(m.text || m, m.values),
                  }),
                }),
              }),
          ],
        });
      };
    },
    23646(e, t, s) {
      "use strict";
      s.d(t, { A: () => o });
      var n = s(93603),
        a = s(83137),
        r = s(74848);
      const i = "ui-pdp-questions",
        o = (e) => {
          let { title: t, subtitle: s, background_color: o } = e;
          return (0, r.jsxs)(a.A, {
            className: `${i}__message-container`,
            bgColor: o,
            children: [
              (0, r.jsx)(n.G, {
                as: "h3",
                className: `${i}__message-title`,
                ...t,
              }),
              (0, r.jsx)(n.G, {
                as: "h4",
                className: `${i}__message-subtitle`,
                ...s,
              }),
            ],
          });
        };
    },
    11126(e, t, s) {
      "use strict";
      s.d(t, { A: () => i });
      s(18111), s(61701);
      var n = s(93603),
        a = s(46458),
        r = s(74848);
      const i = (e) => {
        let { empty_state: t, className: s = null } = e;
        return (0, r.jsx)("div", {
          className: s,
          children: t.map((e) =>
            (0, r.jsx)(
              n.G,
              {
                as: "p",
                className: "ui-pdp-questions__no-questions--text",
                ...e,
                text: a.I.jsx(e.text, e.values),
              },
              e.text
            )
          ),
        });
      };
    },
    30752(e, t, s) {
      "use strict";
      s.d(t, { A: () => c });
      var n = s(7365),
        a = s(5429),
        r = s(46942),
        i = s.n(r),
        o = s(74848);
      const l = "ui-pdp-questions__questions-others-question-modal",
        c = (e) => {
          let { questionsList: t, show_more: s = null } = e;
          return (0, o.jsxs)("div", {
            className: l,
            children: [
              t && (0, o.jsx)(n.A, { questionsList: t, showTitle: !0 }),
              s?.label
                ? (0, o.jsx)(a.A, {
                    className: i()(`${l}__action`, { "mt-32": !t }),
                    linkClassName: "mt-20",
                    label: s.label.text,
                    url: s.target,
                    modifier: "secondary",
                  })
                : null,
            ],
          });
        };
    },
    86310(e, t, s) {
      "use strict";
      s.d(t, { A: () => c });
      var n = s(96540),
        a = s(46942),
        r = s.n(a),
        i = s(93603),
        o = s(74848);
      const l = "ui-pdp-questions__questions-list",
        c = (e) => {
          let {
            content: t,
            date: s = null,
            denounce: a = null,
            denounceTemplate: c,
            deviceType: u,
            hasAnswer: d,
            shouldScrollToQuestion: _ = !1,
          } = e;
          const [m, h] = (0, n.useState)(!1),
            [p, f] = (0, n.useState)(!1),
            A = (0, n.createRef)();
          (0, n.useEffect)(() => {
            _ &&
              !p &&
              (A.current.scrollIntoView({ behavior: "smooth", block: "start" }),
              f(!0));
          }, [A, _, p]);
          const x = (0, n.useCallback)(() => {
            window.open(a.target, "_blank");
          }, [a]);
          return (0, o.jsxs)("div", {
            ref: A,
            className: `${l}__question-wrap`,
            onMouseEnter: () => {
              h(!0);
            },
            onMouseLeave: () => {
              h(!1);
            },
            children: [
              (0, o.jsx)(i.G, {
                className: `${l}__question`,
                as: "span",
                font_size: "SMALL",
                font_family: "REGULAR",
                color: "BLACK",
                ...t,
              }),
              s &&
                (0, o.jsx)(i.G, {
                  className: `${l}__question-item__separate`,
                  font_size: "XSMALL",
                  font_family: "REGULAR",
                  as: "span",
                  ...s,
                }),
              ("mobile" !== u || !d) &&
                a &&
                (0, o.jsx)(i.G, {
                  className: r()(
                    "andes-button andes-button--medium andes-button--mute",
                    `${l}__question-item__denounce ${l}__question-item__denounce__overriding-default-button`,
                    { [`${l}__item__denounce--VISIBLE`]: m }
                  ),
                  onClick: x,
                  as: "button",
                  font_size: "XSMALL",
                  font_family: "REGULAR",
                  accessibilityText: c.accessibility_text,
                  "data-testid": "question-button-denounce",
                  ...c,
                }),
            ],
          });
        };
    },
    54255(e, t, s) {
      "use strict";
      s.d(t, { A: () => g });
      s(18111), s(61701);
      var n = s(46942),
        a = s.n(n),
        r = s(37808),
        i = s(49306),
        o = s(24695),
        l = s(36386),
        c = s(42455),
        u = s(42180),
        d = s(93235),
        _ = s(50701),
        m = s(8257),
        h = s(67051),
        p = s(97437),
        f = s(74848);
      const A = "ui-pdp-questions",
        x = "TOOLTIP_QUESTIONS",
        g = (e) => {
          let {
            actions: t,
            className: s = "",
            title: n,
            onIframeMessage: g = null,
            tooltip: T = null,
            onScrollComponent: v = null,
          } = e;
          const [b, y] = (0, c.A)(x, -1),
            C = (e) => ((0, o.b)(e) ? `${e}&quick_access=true` : e);
          return (0, f.jsxs)(f.Fragment, {
            children: [
              n &&
                (0, f.jsx)("h3", {
                  className: `${A}__subtitle`,
                  children: n.text,
                }),
              (0, f.jsxs)("div", {
                className: `${A}__list-container`,
                children: [
                  T &&
                    b &&
                    (0, f.jsxs)("div", {
                      id: "questionTooltip",
                      className: `${A}__tooltip`,
                      children: [
                        (0, f.jsxs)("div", {
                          children: [
                            T.title &&
                              (0, f.jsx)("p", {
                                className: `${A}__tooltip__primary`,
                                children: T.title.text,
                              }),
                            (0, f.jsx)(u.A, {
                              availableComponents: d.A,
                              content: T.content,
                              components: T.components,
                            }),
                          ],
                        }),
                        (0, f.jsx)("button", {
                          type: "button",
                          "aria-label": T.close_modal_label,
                          className: `${A}__tooltip__close`,
                          onClick: () => {
                            return (
                              (e = y),
                              localStorage.setItem(
                                x,
                                Math.floor(Date.now() / 1e3)
                              ),
                              void e(!1)
                            );
                            var e;
                          },
                        }),
                      ],
                    }),
                  (0, f.jsx)("ul", {
                    className: a()(`${A}__list`, s),
                    children: t.map((e, t) => {
                      const s = C(e?.target),
                        c = (0, p.A)(s, {
                          parent_origin: h.A?.location?.origin,
                        }),
                        u = (0, _.ne)(e);
                      return "SCROLL_TO" === e.action_type
                        ? (0, f.jsx)(
                            "li",
                            {
                              "data-testid": `quick-access-${t}`,
                              className: `${A}__item`,
                              children: (0, f.jsx)(r.$n, {
                                onClick: () =>
                                  v?.({
                                    target: e.target.replace("#", ""),
                                    focus: !0,
                                  }),
                                hierarchy: "quiet",
                                size: "medium",
                                children: e.label.text,
                              }),
                            },
                            u
                          )
                        : (0, f.jsx)(
                            "li",
                            {
                              "data-testid": `quick-access-${t}`,
                              className: `${A}__item`,
                              children: (0, f.jsx)(m.Ay, {
                                messageId: "quick-access-modal",
                                label: e.label,
                                url: C(e.target),
                                linkClassName: `andes-button andes-button--quiet andes-button--medium ${A}__link`,
                                modalClassName: a()(
                                  "ui-pdp-iframe-modal",
                                  `ui-pdp-questions-${t}`,
                                  {
                                    "ui-pdp-generic-summary-modal ui-pdp-shipping-modal":
                                      (0, o.b)(e.target),
                                    "ui-pdp-action-modal__buy-multiple-variations":
                                      (0, l.R)(e.target),
                                  }
                                ),
                                modalUrl: n ? `#questions-${t}` : null,
                                modalTitle: e.modal_title,
                                autoHeight: !1,
                                track: e.track,
                                closeTrack: e.close_track,
                                ...(0, o.h)(e.target),
                                closeModalLabel: e.close_modal_label,
                                shouldUseSeoAnchor: !0,
                                children: (0, f.jsx)(i.v, {
                                  id: "quick-access-iframe",
                                  title: e.label.text,
                                  src: c,
                                  onMessage: g,
                                  scrolling: "no",
                                }),
                              }),
                            },
                            u
                          );
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    59053(e, t, s) {
      "use strict";
      s.d(t, { A: () => g });
      s(18111), s(61701);
      var n = s(96540),
        a = s(46942),
        r = s.n(a),
        i = s(37808),
        o = s(67021),
        l = s(45965),
        c = s(1653),
        u = s(24695),
        d = s(36386),
        _ = s(50701),
        m = s(49306),
        h = s(8257),
        p = s(67051),
        f = s(97437),
        A = s(74848);
      const x = "ui-pdp-questions",
        g = (e) => {
          let { actions: t, title: s, onIframeMessage: a = null } = e;
          (0, n.useEffect)(() => {
            (0, l.T)()
              .then(() => {
                const e = localStorage.getItem("scrollRestore");
                e &&
                  ((window.document.body.style = "overflow:hidden"),
                  setTimeout(() => {
                    window.scrollTo(0, e),
                      (history.scrollRestoration = "auto"),
                      localStorage.removeItem("scrollRestore"),
                      window.document.body.removeAttribute("style");
                  }, 1200));
              })
              .catch(() => {});
          });
          const g = (e) => ((0, u.b)(e) ? `${e}&quick_access=true` : e);
          return (0, A.jsxs)(A.Fragment, {
            children: [
              (0, A.jsx)("h3", {
                className: `${x}__subtitle`,
                children: s.text,
              }),
              (0, A.jsx)("div", {
                className: `${x}__list`,
                children: t.map((e, t) => {
                  const n = (0, _.ne)(e),
                    l = (0, c.b)(e.target, "new_version=true"),
                    T = g(e?.target),
                    v = (0, f.A)(T, { parent_origin: p.A?.location?.origin });
                  return l
                    ? (0, A.jsx)(
                        h.Ay,
                        {
                          deviceType: "mobile",
                          messageId: "quick-access-modal",
                          label: e.label,
                          url: v,
                          linkClassName: `andes-button andes-button--quiet andes-button--medium ${x}__link`,
                          modalClassName: r()(
                            "ui-pdp-iframe-modal",
                            `ui-pdp-questions-${t}`,
                            {
                              "ui-pdp-generic-summary-modal ui-pdp-shipping-modal":
                                (0, u.b)(e.target),
                              "ui-pdp-action-modal__buy-multiple-variations":
                                (0, d.R)(e.target),
                            }
                          ),
                          modalUrl: s ? `#questions-${t}` : null,
                          modalTitle: e.modal_title,
                          track: e.track,
                          closeTrack: e.close_track,
                          ...(0, u.h)(e.target),
                          closeModalLabel: e.close_modal_label,
                          controlModalHeader: !0,
                          showCloseButton: !0,
                          shouldUseSeoAnchor: !0,
                          children: (0, A.jsx)(m.v, {
                            id: "quick-access-iframe",
                            title: e.label.text,
                            src: g(e.target),
                            onMessage: a,
                            scrolling: "no",
                            width: "100%",
                          }),
                        },
                        n
                      )
                    : (0, A.jsx)(
                        i.$n,
                        {
                          "data-testid": `quick-access-${t}`,
                          href: e.target,
                          className: `${x}__link`,
                          size: "medium",
                          hierarchy: "quiet",
                          onClick: () => {
                            localStorage.setItem(
                              "scrollRestore",
                              window.pageYOffset
                            ),
                              (history.scrollRestoration = "manual"),
                              (0, o.sx)(e.track);
                          },
                          children: e.label.text,
                        },
                        n
                      );
                }),
              }),
            ],
          });
        };
    },
    24695(e, t, s) {
      "use strict";
      s.d(t, { b: () => a, h: () => r });
      var n = s(1653);
      const a = (e) =>
          (0, n.b)(e, "new_version=true") &&
          (0, n.b)(e, "gz/shipping-calculator"),
        r = (e) =>
          a(e) ? { controlModalHeader: !0, showCloseButton: !0 } : null;
    },
    21844(e, t, s) {
      "use strict";
      s.d(t, { A: () => x });
      var n = s(96540),
        a = s(46942),
        r = s.n(a),
        i = s(93603),
        o = s(50238),
        l = s(43984),
        c = s(26629),
        u = s(91535),
        d = s(94488),
        _ = s(2115),
        m = s(46458),
        h = s(74848);
      const p = "ui-pdp",
        f = "desktop",
        A = {},
        x = (e) => {
          let {
            className: t = "",
            text: s,
            color: a = "GRAY",
            component: x,
            withDangerous: g = !1,
            tapeableLinks: T = A,
            highlights: v,
            onClickQuestionsAi: b = null,
          } = e;
          const { siteId: y, deviceType: C } = (0, n.useContext)(l.Ay),
            N = (0, c.A)(C, x),
            I = Object.keys(T)?.length > 0,
            { arrayModel: E, charsAmount: S } = (0, n.useMemo)(
              () =>
                I
                  ? (0, _._)({
                      plainText: s,
                      ...T,
                      actionConfig: C === f ? { html_target: "_blank" } : {},
                    })
                  : {},
              [C, I, s, T]
            ),
            [j, L] = (0, n.useState)(() => (I ? S : s.length) > N),
            O = (0, n.useMemo)(() => {
              if (I) {
                const { text: e, values: t } = (0, _.H)({
                  maxChars: j && N,
                  highlights: v,
                  arrayModel: E,
                });
                return m.I.jsx(e, t);
              }
              const e = (0, d.v)(s, v),
                t = e?.length > 0 && e,
                n = (0, u.A)(s.substring(0, N));
              return j ? n : t || s;
            }, [N, E, v, j, s, I]);
          return (
            (0, n.useEffect)(() => {
              b && !j && b();
            }, [j, b]),
            (0, h.jsxs)("div", {
              className: r()(
                {
                  [`${p}-${x}__questions-list__container-answer__isCollpased`]:
                    j,
                },
                {
                  [`${p}-${x}__questions-list__container-answer__isNoCollapsed`]:
                    !j,
                }
              ),
              children: [
                (0, h.jsx)(i.G, {
                  className: r()(
                    `${p}-${x}__questions-list__answer-item__${t}`,
                    {
                      [`${p}-${x}__questions-list__answer-item__with-tapeables-links`]:
                        I,
                    }
                  ),
                  as: "span",
                  font_size: "SMALL",
                  font_family: "REGULAR",
                  withDangerous: g,
                  text: O,
                  color: a,
                }),
                j &&
                  (0, h.jsx)(i.G, {
                    as: "a",
                    color: "BLUE",
                    font_size: "XSMALL",
                    font_family: "REGULAR",
                    className: "questions-list__see-more-button",
                    text: (0, o.A)(y),
                    onClick: (e) => {
                      e.preventDefault(), e.stopPropagation(), L(!1);
                    },
                  }),
              ],
            })
          );
        };
    },
    5164(e, t, s) {
      "use strict";
      s.d(t, { A: () => N });
      s(18111), s(61701);
      var n = s(96540),
        a = s(46942),
        r = s.n(a),
        i = s(37808),
        o = s(2551),
        l = s(74448),
        c = s(16726),
        u = s(67021),
        d = s(43984),
        _ = s(35240),
        m = s(95286),
        h = s(23646),
        p = s(9924),
        f = s(43484),
        A = s(41237),
        x = s(69025),
        g = s(27572),
        T = s(32059),
        v = s(74848);
      const { devices: b } = x.A,
        { MOBILE: y } = b,
        C = "ui-pdp-questions",
        N = (e) => {
          let {
            className: t = null,
            children: s = null,
            disabled: a = !1,
            form: x = null,
            id: b,
            messages: N = null,
            title: I = null,
            show_track: E = null,
            onCreateQuestion: S,
            url: j,
            stockModal: L = null,
            track: O,
            question_message: k = null,
            quick_access: $ = null,
            condition: q = null,
            message_location: w = null,
            message_prevention_fraud: R = null,
            focus: M = !1,
            onRequestFocus: H = null,
            enableRedirectAction: U = !1,
            onScrollComponent: P = null,
            closeModalLabel: D = null,
            showSnackbar: B = null,
            ...Q
          } = e;
          const G = `${C}__button`,
            Y = r()(G, { [`${G}__no-questions`]: !Q?.empty_state }),
            { deviceType: W, flashMessage: K } = (0, n.useContext)(d.Ay),
            [F, V] = (0, n.useState)(M),
            z = "string" != typeof x?.leads_credit_checkbox?.text && null,
            [X, Z] = (0, n.useState)(z),
            [J, ee] = (0, n.useState)(N?.text),
            te = E?.melidata_event?.type,
            [se, ne] = (0, n.useState)(K);
          let ae = K?.stock_modal;
          if ((L && (ae = L), se)) {
            if ((K.stock_track && (0, u.sx)(K.stock_track), !ae)) {
              const e = K.extra_post_event_data || {};
              (e.failed = !K.success), (0, u.C1)(O, e);
            }
            ne(null);
          }
          const [re, ie] = (0, n.useState)(!0),
            [oe, le] = (0, n.useState)(x?.default_question_text || ""),
            ce = (0, n.useRef)(null);
          J && (B({ message: N?.text, type: N?.type, delay: 3e3 }), ee(!1)),
            (0, n.useEffect)(() => {
              ee(N?.text);
            }, [N]),
            (0, n.useEffect)(
              () => () => {
                ae && ie(!0);
              },
              [ae]
            );
          const ue = (0, _.A)(E, { threshold: 0.2 }, te?.toLowerCase());
          return (
            (0, n.useEffect)(() => {
              M &&
                (ue.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                }),
                setTimeout(() => {
                  V(!0);
                }, 500));
            }, [M, ue]),
            (0, v.jsxs)("div", {
              ref: ue,
              className: r()(C, t),
              id: b,
              children: [
                ae &&
                  (0, v.jsxs)(
                    m.A,
                    {
                      "data-testid": "stock-modal",
                      id: `${C}__stock-modal`,
                      isOpen: re,
                      onClose: () => ie(!1),
                      closable: !0,
                      closeModalLabel: D,
                      autoHeight: !1,
                      title: ae.title.text,
                      type: "mobile" === W ? "card" : "large",
                      maxWidth: 500,
                      children: [
                        (0, v.jsx)("p", {
                          "data-testid": "stock-modal-text",
                          className: `${C}__stock-modal__text`,
                          children: ae.content.text,
                        }),
                        (0, v.jsx)(i.$n, {
                          "data-testid": "stock-modal-confirm",
                          className: `${C}__stock-modal__button`,
                          onClick: (e) => {
                            e.preventDefault(), ie(!1);
                          },
                          hierarchy: "loud",
                          children: ae.confirm.label.text,
                        }),
                      ],
                    },
                    `${C}__stock-modal-${Math.random()}`
                  ),
                I &&
                  (0, v.jsx)("h2", {
                    className: `${C}__title`,
                    children: I.text,
                  }),
                $ &&
                  (0, v.jsx)(T.A, {
                    deviceType: W,
                    quick_access: $,
                    onScrollComponent: P,
                  }),
                k && (0, v.jsx)(h.A, { ...k }),
                w && (0, v.jsx)(f.A, { ...w }),
                R && (0, v.jsx)(A.A, { ...R }),
                x &&
                  (0, v.jsxs)(v.Fragment, {
                    children: [
                      x.title &&
                        (0, v.jsx)("h3", {
                          "aria-hidden": "true",
                          className: `${C}__subtitle--question`,
                          children: x.title.text,
                        }),
                      (0, v.jsxs)(c.l, {
                        className: `${C}__form`,
                        action: j,
                        method: "POST",
                        onSubmit: (e) => {
                          e.preventDefault(),
                            "" !== oe.trim()
                              ? (S({
                                  itemId: x.confirm.item_id,
                                  text: oe,
                                  track: O,
                                  checkbox: X,
                                }),
                                le(""))
                              : ce.current
                                  ?.querySelector(".andes-form-control__field")
                                  ?.focus();
                        },
                        children: [
                          x.confirm &&
                            (0, v.jsx)("input", {
                              type: "hidden",
                              name: "itemId",
                              value: x.confirm.item_id,
                            }),
                          (0, v.jsxs)("div", {
                            className: r()(`${C}__content`, {
                              [`${C}__checkbox-credits-interest-content`]:
                                x.leads_credit_checkbox,
                            }),
                            children: [
                              x.title &&
                                (0, v.jsx)("label", {
                                  className: "ui-pdp--hide",
                                  htmlFor: "question",
                                  children: x.title.text,
                                }),
                              (0, v.jsx)(o.A_, {
                                id: "question",
                                name: "question",
                                "data-testid": "questions-input",
                                className: `${C}__input`,
                                placeholder: x.placeholder.text,
                                ref: (e) => {
                                  ce.current = e;
                                },
                                autoComplete: "off",
                                value: oe,
                                helper: x.subtitles
                                  ?.map((e) => e.text)
                                  .join(""),
                                onChange: (e) => {
                                  le(e.target.value);
                                },
                                onFocus: () => {
                                  (0, u.sx)(x.focus_track);
                                },
                                messageFixed: !0,
                                maxLength: 2e3,
                                multiline: !0,
                                focus: F,
                                onBlur: () => {
                                  H && (V(!1), H({ focus: !1 }));
                                },
                              }),
                              x.leads_credit_checkbox &&
                                (0, v.jsx)("div", {
                                  className: `${C}__checkbox-credits-interest__wrapper`,
                                  children: (0, v.jsx)(l.S, {
                                    "data-testid": "checkbox-leads",
                                    label: x.leads_credit_checkbox.text,
                                    className: `${C}__checkbox-credits-interest`,
                                    onChange: (e) => {
                                      Z(e.target.checked);
                                    },
                                    checked: X,
                                  }),
                                }),
                              x.confirm &&
                                (0, v.jsx)(i.$n, {
                                  "data-testid": "questions-button",
                                  className: Y,
                                  hierarchy: "loud",
                                  type: "submit",
                                  disabled: a,
                                  fullWidth: W === y,
                                  children: x.confirm.label.text,
                                }),
                            ],
                          }),
                          U &&
                            x.additional_actions &&
                            (0, g.v)(x.additional_actions),
                          q &&
                            (0, v.jsx)(p.$U, {
                              className: `${C}__conditions`,
                              title: q,
                            }),
                        ],
                      }),
                    ],
                  }),
                s,
              ],
            })
          );
        };
    },
    31830(e, t, s) {
      "use strict";
      s.r(t), s.d(t, { MappedQuestionsMobile: () => I, default: () => N });
      var n = s(96540),
        a = s(63950),
        r = s.n(a),
        i = s(5164),
        o = s(7365),
        l = s(11126),
        c = s(30752),
        u = s(80262),
        d = s(59286),
        _ = s(45513),
        m = s(4989),
        h = s(34363),
        p = s(46942),
        f = s.n(p),
        A = s(31162),
        x = s(89177),
        g = s(64887),
        T = s(74848);
      const v = "ui-pdp-questions",
        b = `${A.to}.${A.cY.QUESTION_LOAD}`,
        y = { source: "vpp" },
        C = (e) => {
          let {
            quick_access: t = null,
            question_message: s = null,
            fetchContactInfo: a = null,
            responseToken: u = null,
            redirectToLogin: p = null,
            updateTokenResponse: A = null,
            recaptchaPublicKey: C = null,
            recaptchaSiteKey: N = null,
            itemId: I = null,
            showVariationsError: E = r(),
            showQuestionsAiModal: S = null,
            saveFrontendStatsd: j = r(),
            errorBoundaryConfig: L = null,
            ...O
          } = e;
          const [k, $] = (0, n.useState)(u);
          if (O?.ask_questions_ai && S) {
            const e = (0, g.A)(L, "questions_ai_form");
            (0, x.A)({
              errorBoundaryConfig: e,
              additionalBusinessTags: y,
              customPrintKey: b,
            });
          }
          (0, n.useEffect)(() => {
            $(u);
          }, [u]);
          const q = `${v}__questions-ai`,
            w = f()(q, { [`${q}__no-questions`]: !O?.empty_state });
          return (0, T.jsxs)(i.A, {
            ...O,
            quick_access: t,
            question_message: s,
            children: [
              O.custom_message &&
                (0, T.jsx)(m.QuestionWarningMessage, {
                  customMessage: O.custom_message,
                  showVariationsError: E,
                }),
              O.ask_questions_ai &&
                S &&
                (0, T.jsx)("div", {
                  className: w,
                  children: (0, T.jsx)(h.A, {
                    showQuestionsAiModal: S,
                    actionType: O.ask_questions_ai.action_type,
                    deviceType: "mobile",
                    hierarchy: "loud",
                    fullWidth: !0,
                    saveFrontendStatsd: j,
                    ...O.ask_questions_ai,
                  }),
                }),
              O.user_questions &&
                (0, T.jsx)(o.A, {
                  isUsersQuestions: !0,
                  showTitle: !0,
                  userQuestions: O.user_questions,
                  questionsList: O.user_questions,
                }),
              (O.others_questions || O.show_more) &&
                (0, T.jsx)(c.A, {
                  showTitle: !0,
                  questionsList: O.others_questions,
                  show_more: O.show_more,
                }),
              O.empty_state &&
                (0, T.jsx)(l.A, {
                  empty_state: O.empty_state,
                  className: `${v}__no-questions--mobile`,
                }),
              O.form?.additional_actions &&
                (0, T.jsxs)(T.Fragment, {
                  children: [
                    (0, T.jsx)(d.A, {
                      className: `${v}__additional-actions`,
                      actions: O.form.additional_actions,
                      fetchContactInfo: a,
                      recaptchav2token: k,
                      itemId: O.form.confirm ? O.form.confirm.item_id : I,
                      redirectToLogin: p,
                      recaptchaSiteKey: N,
                      featureName: "question",
                      isFetchingData: O.isFetchingData,
                    }),
                    C &&
                      (0, T.jsx)(_.g8, {
                        align: "center",
                        recaptchaPublicKey: C,
                        required: !0,
                        lowEnd: !0,
                        id: "question-call-recaptcha",
                        verifyCallback: (e) => {
                          $(e), A && A({ token: e });
                        },
                      }),
                  ],
                }),
            ],
          });
        },
        N = C,
        I = (e) => (0, T.jsx)(C, { ...(0, u.A)(e) });
    },
    91581(e, t, s) {
      "use strict";
      s.d(t, { A: () => a });
      var n = s(9174);
      const a = (e) => {
        let { children: t, bgColor: s, className: a, ...r } = e;
        return { containerClassName: (0, n.A)(s, a), children: t, rest: r };
      };
    },
    59706(e, t, s) {
      "use strict";
      s.d(t, { A: () => r });
      var n = s(91581),
        a = s(74848);
      const r = (e) => {
        const { containerClassName: t, children: s, rest: r } = (0, n.A)(e);
        return (0, a.jsx)("div", { className: t, ...r, children: s });
      };
    },
    83137(e, t, s) {
      "use strict";
      s.d(t, { A: () => n });
      const n = s(59706).A;
    },
    42180(e, t, s) {
      "use strict";
      s.d(t, { A: () => n });
      const n = s(15841).ZI;
    },
    64887(e, t, s) {
      "use strict";
      s.d(t, { A: () => a });
      var n = s(56027);
      const a = (e, t) => ({
        app: e?.app || n.PC,
        deviceType: e?.deviceType || n.PC,
        criticality: e?.criticality || n.PC,
        ownership: e?.ownership || n.PC,
        standard: e?.standard || n.PC,
        componentId: e?.componentId ? `${e.componentId}_${t}` : `unknown_${t}`,
      });
    },
    42455(e, t, s) {
      "use strict";
      s.d(t, { A: () => n });
      const n = s(15841).jZ;
    },
    50238(e, t, s) {
      "use strict";
      s.d(t, { A: () => n });
      const n = (e) => ("MLB" === e ? "Ver mais" : "Ver más");
    },
    2115(e, t, s) {
      "use strict";
      s.d(t, { H: () => o, _: () => i });
      s(18111), s(22489), s(18237);
      var n = s(72447),
        a = s(76894);
      const r = (e) => e,
        i = (e) => {
          let {
            plainText: t,
            fragment: s,
            pattern: n,
            flag: i,
            actionConfig: o = {},
          } = e;
          const l = {
              ...o,
              fragment: s,
              regex: { pattern: n, flag: i },
              getLabelUrl: r,
            },
            { arrayModel: c, charsAmount: u } = (0, a.M)(t, l);
          return { arrayModel: c, charsAmount: u };
        },
        o = (e) => {
          let { maxChars: t, highlights: s, arrayModel: r } = e;
          const i = (0, n.A)({ maxChars: t, highlights: s })
            .filter((e) => {
              let { validate: t } = e;
              return t();
            })
            .reduce((e, t) => {
              let { transform: s } = t;
              return s(e);
            }, r);
          return (0, a.A)(i);
        };
    },
    49212(e, t, s) {
      "use strict";
      s.d(t, { D: () => n });
      const n =
        /https:\/\/(?:\w+\.)?mercadoli(?:v|b)re\.(?:co(?:m?)|cl)(?:\.\w{1,2})\/(?:[\.,/]?[\w\-#=%&?!@:\[\]]+)+/gim;
    },
    94619(e, t, s) {
      "use strict";
      s.d(t, { A: () => i });
      s(18111), s(18237);
      var n = s(20258),
        a = s(91535);
      const r = (e, t) => {
          const s = e.slice(0, (e?.length ?? 0) - t);
          return (0, a.A)(s);
        },
        i = (e) => (t) =>
          t.reduce(
            (t, s) => {
              const { type: a, str: i, ...o } = s,
                { charCounter: l, finish: c, modifiedArray: u } = t,
                { id: d, originalUrl: _, ...m } = o;
              if (c) return t;
              const h = a === n.A.ACTION,
                p = h && m.label.text,
                f = h ? p : i,
                A = l + f.length - 1 + 1,
                x = -(e - A);
              if (x <= 0)
                return { ...t, charCounter: A, modifiedArray: [...u, s] };
              if (x < f?.length) {
                const e = { charCounter: A - x, finish: !0 };
                return h
                  ? {
                      ...e,
                      modifiedArray: [
                        ...u,
                        { ...s, label: { text: r(p, x) }, cutted: !0 },
                      ],
                    }
                  : {
                      ...e,
                      modifiedArray: [...u, { ...s, str: r(f, x), cutted: !0 }],
                    };
              }
              return {
                finish: !0,
                modifiedArray: [...u, { ...s, str: "..." }],
              };
            },
            { modifiedArray: [], charCounter: 0, finish: !1 }
          ).modifiedArray;
    },
    87835(e, t, s) {
      "use strict";
      s.d(t, { A: () => d });
      s(18111), s(18237);
      var n = s(94488),
        a = s(20258),
        r = s(76894);
      const i = (e) => e === a.A.ACTION,
        o = (e) =>
          i(e.type) || e.type === a.A.HIGHLIGHTED ? e.label?.text : e?.str,
        l = (e) => e.slice(0, -3),
        c = (e, t, s) => {
          const { type: n, str: c, label: u, cutted: d } = t,
            _ = (i(n) && u.text) || c,
            { list: m } = s.reduce(
              (t, s, n, r) => {
                let { start_at: i, characters_amount: c, id: u } = s;
                const { restText: m, list: h } = t,
                  p = n === (r?.length ?? 0) - 1,
                  f = e + ((_?.length ?? 0) - (m?.length ?? 0)),
                  A = { start_at: i - f, end_at: i - f + c - 1 },
                  x = m.slice(A.start_at, A.end_at + 1),
                  g = A.end_at + 1 > (m?.length ?? 0) - 3,
                  T = x.endsWith("..."),
                  v = d && g && T,
                  b = [
                    { type: a.A.TEXT, str: m.slice(0, A.start_at) },
                    {
                      type: a.A.HIGHLIGHTED,
                      str: `{${u}}`,
                      label: { text: v ? l(x) : x },
                      id: u,
                    },
                    v ? { type: a.A.TEXT, str: "..." } : {},
                    p && {
                      type: a.A.TEXT,
                      str: m.slice(A.end_at + 1, m.length),
                    },
                  ].filter(o);
                return {
                  restText: m.slice(A.end_at + 1, m.length),
                  list: [...h, ...b],
                };
              },
              { restText: _, list: [] }
            );
          return i(n) ? [{ ...t, i18nChildren: (0, r.A)(m) }] : m;
        },
        u = (e) => ({ ...e, id: `highlighted${e.start_at}` }),
        d = (e) => (t) => {
          const s = (0, n.B)(e);
          return t.reduce(
            (e, t) => {
              const { str: s, originalUrl: n } = t,
                { modifiedArray: a, restHighlights: r, charCounter: i } = e,
                o = i,
                l = o + (n || s).length - 1,
                d = l + 1,
                _ = ((e, t) =>
                  t.reduce(
                    (t, s) => {
                      const { selected: n, rest: a } = t;
                      if (a?.length > 0) return { ...t, rest: [...a, u(s)] };
                      const { characters_amount: r, start_at: i } = s,
                        o = i,
                        l = i + r - 1,
                        c = o >= e.start_at && o <= e.end_at,
                        d = l - e.end_at;
                      return c
                        ? {
                            selected: [
                              ...n,
                              u({ ...s, characters_amount: d > 0 ? r - d : r }),
                            ],
                            rest:
                              d > 0
                                ? [
                                    u({
                                      start_at: e.end_at + 1,
                                      characters_amount: d,
                                    }),
                                  ]
                                : [],
                          }
                        : { ...t, rest: [u(s)] };
                    },
                    { selected: [], rest: [] }
                  ))({ start_at: o, end_at: l }, r),
                { selected: m, rest: h } = _;
              return {
                ...e,
                charCounter: d,
                modifiedArray: [...a, ...(m?.length > 0 ? c(o, t, m) : [t])],
                restHighlights: h,
              };
            },
            { modifiedArray: [], restHighlights: s, charCounter: 0 }
          ).modifiedArray;
        };
    },
    72447(e, t, s) {
      "use strict";
      s.d(t, { A: () => r });
      var n = s(94619),
        a = s(87835);
      const r = (e) => {
        let { maxChars: t, highlights: s } = e;
        return [
          { transform: (0, n.A)(t), validate: () => !!t },
          { transform: (0, a.A)(s), validate: () => s?.length > 0 },
        ];
      };
    },
    20258(e, t, s) {
      "use strict";
      s.d(t, { A: () => n });
      const n = { ACTION: "action", TEXT: "text", HIGHLIGHTED: "highlighted" };
    },
    76894(e, t, s) {
      "use strict";
      s.d(t, { A: () => u, M: () => c });
      s(18111), s(18237), s(14603), s(47566), s(98721);
      var n = s(20258),
        a = s(49212);
      const r = (e) => {
          try {
            return new URL(e);
          } catch {
            const t = "https://";
            return e.startsWith(t) ? null : r(`${t}${e}`);
          }
        },
        i = (e, t, s) => {
          const {
              accessibility_text: a = null,
              html_target: r = null,
              track: i = null,
              fragment: o,
              getLabelUrl: l,
            } = s,
            c = l(t, e, s);
          return (
            o && (e.hash = o),
            {
              type: n.A.ACTION,
              color: "BLUE",
              target: e.href,
              label: { text: c },
              accessibility_text: a,
              html_target: r,
              track: i,
              stopPropagation: !0,
            }
          );
        },
        o = (e, t) => {
          const s = e.match(
            (function () {
              let { pattern: e, flag: t } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              try {
                return e?.length > 10 ? new RegExp(e, t) : a.D;
              } catch {
                return a.D;
              }
            })(t.regex)
          );
          return s?.reduce((e, s, n, a) => {
            const o = r(s),
              l = e.length;
            if (!o) return e;
            const c = 1 === a?.length ? "url" : `url${l + 1}`;
            return [...e, { id: c, originalUrl: s, ...i(o, s, t) }];
          }, []);
        },
        l = (e) =>
          e.reduce((e, t) => {
            let { str: s, type: a, label: r } = t;
            return e + (a === n.A.ACTION ? r.text.length : s.length);
          }, 0),
        c = (e, t) => {
          const s = o(e, t),
            a = { list: [{ type: n.A.TEXT, str: e }], charCounter: e.length },
            { list: r, charCounter: i } = s
              ? s.reduce(
                  (e, t, s, a) => {
                    let { id: r, originalUrl: i, ...o } = t;
                    const { restText: c, list: u, charCounter: d } = e,
                      _ = c.indexOf(i),
                      m = s === (a?.length ?? 0) - 1,
                      h = { start_at: _, end_at: _ + i.length - 1 },
                      p = { type: n.A.ACTION, id: r, originalUrl: i, ...o },
                      f = [
                        { type: n.A.TEXT, str: c.slice(0, h.start_at) },
                        { ...p, str: `{${r}}` },
                        m && {
                          type: n.A.TEXT,
                          str: c.slice(h.end_at + 1, c.length),
                        },
                      ].filter((e) => e?.str);
                    return {
                      restText: c.slice(h.end_at + 1, c.length),
                      charCounter: d + l(f),
                      list: [...u, ...f],
                    };
                  },
                  { restText: e, charCounter: 0, list: [] }
                )
              : a;
          return { arrayModel: r, charsAmount: i };
        },
        u = (e) =>
          e.reduce(
            (e, t) => {
              const { type: s, str: a, id: r, ...i } = t;
              return {
                text: e.text + a,
                values: {
                  ...e.values,
                  ...(s === n.A.ACTION ? { [r]: { type: s, ...i } } : {}),
                  ...(s === n.A.HIGHLIGHTED ? { [r]: { type: s, ...i } } : {}),
                },
              };
            },
            { text: "", values: {} }
          );
    },
    91535(e, t, s) {
      "use strict";
      s.d(t, { A: () => n });
      const n = s(44489).gv;
    },
    97437(e, t, s) {
      "use strict";
      s.d(t, { A: () => a });
      s(18111), s(61701);
      var n = s(18824);
      const a = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const s = Object.entries(t)
          .map((e) => {
            let [t, s] = e;
            return `${t}=${s}`;
          })
          .join("&");
        return `${e}${(0, n.A)(e)}${s}`;
      };
    },
    18824(e, t, s) {
      "use strict";
      s.d(t, { A: () => a });
      var n = s(1653);
      const a = (e) => (e && (0, n.b)(e, "?") ? "&" : "?");
    },
    94488(e, t, s) {
      "use strict";
      s.d(t, { B: () => d, v: () => _ });
      s(18111), s(22489);
      var n = s(2404),
        a = s.n(n),
        r = s(9063),
        i = s.n(r),
        o = s(93603),
        l = s(74848);
      const c = (e, t) =>
          e.start_at > t.start_at ? 1 : e.start_at < t.start_at ? -1 : 0,
        u = function (e, t) {
          let s =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const { key: n, ...a } = s;
          return (0, l.jsx)(
            o.G,
            { text: e, as: "span", className: t, ...a },
            n
          );
        },
        d = (e) => {
          try {
            const t = i()(e, a());
            return t && t.length > 0 ? t.sort(c) : [];
          } catch {
            return [];
          }
        },
        _ = (e, t) => {
          const s = [],
            n = d(t);
          try {
            if (n && n.length > 0) {
              for (let t = 0; t < n.length; t += 1)
                s.push({
                  start_at: n[t].start_at,
                  characters_amount: n[t].characters_amount,
                  text: e.substr(n[t].start_at, n[t].characters_amount),
                });
              let t = [],
                a = e;
              for (let e = s.length - 1; e >= 0; e -= 1) {
                const n = s[e].start_at,
                  r = s[e].start_at + s[e].characters_amount,
                  i = { key: `qadb-highlighted-${n}:${r}` };
                t.push(a.slice(0, n)),
                  t.push(u(a.slice(n, r), "ui-pdp-qadb--highlighted", i)),
                  (a = a.substr(s[e].start_at + s[e].characters_amount));
              }
              return t.push(a), (t = t.filter((e) => !!e)), t;
            }
            return e;
          } catch (t) {
            return e;
          }
        };
    },
    26629(e, t, s) {
      "use strict";
      s.d(t, { A: () => n });
      const n = s(44489).kn;
    },
    38859(e, t, s) {
      var n = s(56449);
      e.exports = function () {
        if (!arguments.length) return [];
        var e = arguments[0];
        return n(e) ? e : [e];
      };
    },
    15325(e, t, s) {
      var n = s(96131);
      e.exports = function (e, t) {
        return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1;
      };
    },
    29905(e) {
      e.exports = function (e, t, s) {
        for (var n = -1, a = null == e ? 0 : e.length; ++n < a; )
          if (s(t, e[n])) return !0;
        return !1;
      };
    },
    14248(e) {
      e.exports = function (e, t) {
        for (var s = -1, n = null == e ? 0 : e.length; ++s < n; )
          if (t(e[s], s, e)) return !0;
        return !1;
      };
    },
    96131(e) {
      e.exports = function (e, t, s) {
        for (var n = s - 1, a = e.length; ++n < a; ) if (e[n] === t) return n;
        return -1;
      };
    },
    60270(e, t, s) {
      var n = s(87068),
        a = s(40346);
      e.exports = function e(t, s, r, i, o) {
        return (
          t === s ||
          (null == t || null == s || (!a(t) && !a(s))
            ? t != t && s != s
            : n(t, s, r, i, e, o))
        );
      };
    },
    87068(e, t, s) {
      var n = s(37217),
        a = s(25911),
        r = s(21986),
        i = s(50689),
        o = s(5861),
        l = s(56449),
        c = s(3656),
        u = s(37167),
        d = "[object Arguments]",
        _ = "[object Array]",
        m = "[object Object]",
        h = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, s, p, f, A) {
        var x = l(e),
          g = l(t),
          T = x ? _ : o(e),
          v = g ? _ : o(t),
          b = (T = T == d ? m : T) == m,
          y = (v = v == d ? m : v) == m,
          C = T == v;
        if (C && c(e)) {
          if (!c(t)) return !1;
          (x = !0), (b = !1);
        }
        if (C && !b)
          return (
            A || (A = new n()),
            x || u(e) ? a(e, t, s, p, f, A) : r(e, t, T, s, p, f, A)
          );
        if (!(1 & s)) {
          var N = b && h.call(e, "__wrapped__"),
            I = y && h.call(t, "__wrapped__");
          if (N || I) {
            var E = N ? e.value() : e,
              S = I ? t.value() : t;
            return A || (A = new n()), f(E, S, s, p, A);
          }
        }
        return !!C && (A || (A = new n()), i(e, t, s, p, f, A));
      };
    },
    55765(e, t, s) {
      var n = s(38859),
        a = s(15325),
        r = s(29905),
        i = s(19219),
        o = s(44517),
        l = s(84247);
      e.exports = function (e, t, s) {
        var c = -1,
          u = a,
          d = e.length,
          _ = !0,
          m = [],
          h = m;
        if (s) (_ = !1), (u = r);
        else if (d >= 200) {
          var p = t ? null : o(e);
          if (p) return l(p);
          (_ = !1), (u = i), (h = new n());
        } else h = t ? [] : m;
        e: for (; ++c < d; ) {
          var f = e[c],
            A = t ? t(f) : f;
          if (((f = s || 0 !== f ? f : 0), _ && A == A)) {
            for (var x = h.length; x--; ) if (h[x] === A) continue e;
            t && h.push(A), m.push(f);
          } else u(h, A, s) || (h !== m && h.push(A), m.push(f));
        }
        return m;
      };
    },
    19219(e, t, s) {
      var n = s(96131);
      e.exports = function (e, t) {
        return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1;
      };
    },
    44517(e) {
      e.exports = function () {};
    },
    25911(e, t, s) {
      var n = s(38859),
        a = s(14248),
        r = s(19219);
      e.exports = function (e, t, s, i, o, l) {
        var c = 1 & s,
          u = e.length,
          d = t.length;
        if (u != d && !(c && d > u)) return !1;
        var _ = l.get(e),
          m = l.get(t);
        if (_ && m) return _ == t && m == e;
        var h = -1,
          p = !0,
          f = 2 & s ? new n() : void 0;
        for (l.set(e, t), l.set(t, e); ++h < u; ) {
          var A = e[h],
            x = t[h];
          if (i) var g = c ? i(x, A, h, t, e, l) : i(A, x, h, e, t, l);
          if (void 0 !== g) {
            if (g) continue;
            p = !1;
            break;
          }
          if (f) {
            if (
              !a(t, function (e, t) {
                if (!r(f, t) && (A === e || o(A, e, s, i, l))) return f.push(t);
              })
            ) {
              p = !1;
              break;
            }
          } else if (A !== x && !o(A, x, s, i, l)) {
            p = !1;
            break;
          }
        }
        return l.delete(e), l.delete(t), p;
      };
    },
    21986(e) {
      e.exports = function (e, t) {
        return e === t || (e != e && t != t);
      };
    },
    50689(e, t, s) {
      var n = s(50002),
        a = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, s, r, i, o) {
        var l = 1 & s,
          c = n(e),
          u = c.length;
        if (u != n(t).length && !l) return !1;
        for (var d = u; d--; ) {
          var _ = c[d];
          if (!(l ? _ in t : a.call(t, _))) return !1;
        }
        var m = o.get(e),
          h = o.get(t);
        if (m && h) return m == t && h == e;
        var p = !0;
        o.set(e, t), o.set(t, e);
        for (var f = l; ++d < u; ) {
          var A = e[(_ = c[d])],
            x = t[_];
          if (r) var g = l ? r(x, A, _, t, e, o) : r(A, x, _, e, t, o);
          if (!(void 0 === g ? A === x || i(A, x, s, r, o) : g)) {
            p = !1;
            break;
          }
          f || (f = "constructor" == _);
        }
        if (p && !f) {
          var T = e.constructor,
            v = t.constructor;
          T == v ||
            !("constructor" in e) ||
            !("constructor" in t) ||
            ("function" == typeof T &&
              T instanceof T &&
              "function" == typeof v &&
              v instanceof v) ||
            (p = !1);
        }
        return o.delete(e), o.delete(t), p;
      };
    },
    84247(e) {
      e.exports = function () {
        return [];
      };
    },
    2404(e, t, s) {
      var n = s(60270);
      e.exports = function (e, t) {
        return n(e, t);
      };
    },
    55378(e) {
      e.exports = function (e, t) {
        for (var s = -1, n = null == e ? 0 : e.length, a = Array(n); ++s < n; )
          a[s] = t(e[s], s, e);
        return a;
      };
    },
    9063(e, t, s) {
      var n = s(55765);
      e.exports = function (e, t) {
        return (
          (t = "function" == typeof t ? t : void 0),
          e && e.length ? n(e, void 0, t) : []
        );
      };
    },
  },
]);
//# sourceMappingURL=components-questions-questions-mobile.8ac5ffab.js.map
