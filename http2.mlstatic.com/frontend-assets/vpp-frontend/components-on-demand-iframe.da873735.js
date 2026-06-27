"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [26998],
  {
    21493(e, t, n) {
      n.d(t, {
        C4: () => a,
        F8: () => s,
        MA: () => i,
        dA: () => o,
        z4: () => r,
      });
      const o = "vpp:mdd:change",
        a = "vpp:meliplus:suscription",
        r = "close=",
        s = "vpp:modal:redirect",
        i = {
          BUSINESS_SHIPPING_HUB_EVENT_LOADED: "nav:cp:loaded",
          BUSINESS_SHIPPING_HUB_EVENT_REDIRECT: "nav:cp:redirect",
          BUSINESS_SHIPPING_HUB_EVENT_UPDATE_SIZE: "nav:cp:updateSize",
          SHIPPING_SECTION_UPDATE_SIZE: "vip:shipping-calculator:updateSize",
          MELIPLUS_MDD_CHANGE: o,
          MELIPLUS_SUSCRIPTION: a,
          MELIPLUS_CLOSE: r,
          LEGACY_MODAL_CONTENT_LOADED: "vip:modal-content:loaded",
          LEGACY_MODAL_REDIRECT: s,
        };
    },
    15945(e, t, n) {
      n.d(t, { ok: () => s, xI: () => r });
      n(74423);
      var o = n(21493);
      const a = [o.z4, o.C4, o.dA, o.F8],
        r = (e) =>
          "string" == typeof e && e.startsWith("close=")
            ? { type: o.z4, data: e }
            : e?.type
            ? null
            : e?.message && a.includes(e.message)
            ? { type: e.message, data: e }
            : null,
        s = (e, t, n) => {
          const { onClose: a, goToUrl: r } = n;
          return (
            {
              [o.z4]: () => a({ requestPageRefresh: !1 }),
              [o.C4]: () => a({ requestPageRefresh: !1 }),
              [o.dA]: () => a({ requestPageRefresh: !0 }),
              [o.F8]: () => r({ url: t?.target, target: "parent" }),
            }[e] || null
          );
        };
    },
    29930(e, t, n) {
      n.r(t), n.d(t, { default: () => q });
      n(74423);
      var o = n(96540),
        a = n(62929),
        r = n(17376),
        s = n(46942),
        i = n.n(s),
        l = n(15011),
        d = n(67051),
        c = n(67021),
        u = n(49306),
        _ = n(49546),
        E = n(58633),
        m = n(21493),
        S = n(15945),
        g = n(31162),
        f = n(56027),
        p = n(19243),
        A = n(81497),
        C = n(43984),
        I = n(97437),
        T = n(18824),
        L = n(30628),
        M = n(93647),
        N = n(74848);
      const {
          MSG_LOADED: D,
          MSG_CLOSE: R,
          MSG_CLOSABLE: h,
          MSG_SNACKBAR: v,
          MSG_NAVIGATE: O,
          MSG_REDIRECT: U,
          MSG_ASK_SELLER: b,
          MSG_SCROLL_TO_ELEMENT: G,
          MSG_SEQUENCER: P,
          MSG_REFRESH_PAGE: y,
          MSG_UPDATE_PRICE: w,
        } = E.mu,
        {
          BUSINESS_SHIPPING_HUB_EVENT_REDIRECT: B,
          BUSINESS_SHIPPING_HUB_EVENT_LOADED: k,
          BUSINESS_SHIPPING_HUB_EVENT_UPDATE_SIZE: $,
          LEGACY_MODAL_CONTENT_LOADED: H,
          SHIPPING_SECTION_UPDATE_SIZE: V,
        } = m.MA,
        F = { ...E.mu, ...m.MA },
        x = "on-demand-iframe",
        W = ["choose_delivery_day"],
        q = (e) => {
          var t;
          let {
            id: n = "",
            src: s,
            isRedirectFlow: m = !1,
            title: q = "",
            iframeTitle: K = "iframe",
            show: j = !1,
            renderMode: z = A.M8.CONTAINER,
            fallbackConfig: Y = null,
            statsdConfig: Q = null,
            isDismissible: Z = !0,
            showSnackbar: J = null,
            onDemandIframeClose: X,
            onDemandIframeUpdate: ee,
            updateComponentsBottomSheet: te = null,
            onCloseVariations: ne = null,
            onCreateQuestionFromAi: oe = null,
            showVariationsError: ae = null,
            sequencerTrack: re = null,
            customNamespace: se = "",
            noScrolling: ie = !1,
            noCloseButton: le = !1,
            noPaddingTop: de = !1,
            onDemandSequencerUpdate: ce = null,
            isFromMSG: ue = !1,
            onMessage: _e,
            onUpdatePrice: Ee = null,
            loaderVariant: me,
          } = e;
          const Se = (0, o.useRef)(null),
            ge = (0, o.useRef)(null),
            fe = (0, o.useRef)(null),
            pe = (0, o.useRef)(!1),
            Ae = (0, o.useRef)(!1),
            Ce = (0, o.useRef)(!1),
            [Ie, Te] = (0, o.useState)(!1),
            [Le, Me] = (0, o.useState)(null),
            [Ne, De] = (0, o.useState)(!1),
            [Re, he] = (0, o.useState)(null),
            {
              fallbackUrl: ve,
              fallbackMessage: Oe,
              timeoutInitialLoad: Ue,
              timeoutWebviewMessage: be,
            } = Y || {},
            { deviceType: Ge, siteId: Pe } = (0, o.useContext)(C.Ay),
            ye = (0, I.A)(s, { parent_origin: d.A?.location?.origin }),
            we = "generic-widget" === se,
            Be = i()(x, {
              [`${x}--${Ge}`]: Ge,
              [`${x}--${Ge}__sidebar`]: "mobile" !== Ge && z !== A.M8.CENTERED,
              [`${x}--${Ge}__centered`]: "mobile" !== Ge && z === A.M8.CENTERED,
              [`${x}--${Ge}__bottom-sheet`]:
                "mobile" === Ge && z === A.M8.CONTAINER,
              [`${x}--${Ge}__fullscreen`]:
                "mobile" === Ge &&
                (z === A.M8.FULLSCREEN || z === A.M8.CENTERED),
              [`${x}--no__close__button`]: le,
              [`${x}--${Ge}__no__padding__top`]: de,
              [`${x}--${se}`]: se,
            }),
            ke = (e) => {
              let {
                message: t,
                additionalTags: n = {},
                additionalInfo: o,
                shouldLogMessage: a,
              } = e;
              (0, p.b)({
                key: g.O.SHOW_SNACKBAR,
                additionalTags: { snackbar_type: "error", ...n },
                additionalInfo: o,
                shouldLogMessage: a,
                statsdConfig: Q,
              }),
                J && J({ message: t, type: "error" });
            },
            $e = (e) => {
              let { url: t, target: n, newRenderMode: o } = e;
              if (
                t &&
                (0, _.A)({ target: t, currentLocation: window.location })
              ) {
                if (
                  ("parent" === n && (window.location.href = t),
                  "modal" === n && ee)
                ) {
                  Me(null);
                  const e = {
                    src: `${t}${(0, T.A)(t)}navhash=${Date.now()
                      .toString()
                      .slice(-5)}`,
                    isRedirectFlow: !0,
                    isDismissible: !0,
                  };
                  o && (e.renderMode = o),
                    re && (0, c.sx)((0, A.LU)(re, A.Y8.NAVIGATE_LOADING)),
                    (0, p.b)({ key: g.O.WEBVIEW_REDIRECT, statsdConfig: Q }),
                    ee(e);
                }
              } else
                ke({
                  additionalTags: { reason: f.n7.INVALID_REDIRECT_URL },
                  additionalInfo: { url: t, target: n },
                  shouldLogMessage: !0,
                });
            },
            He = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (Ce.current) return;
              Ce.current = !0;
              const { requestPageRefresh: t = !1 } = e;
              ne && ne(),
                X && X(),
                Le && ((0, c.sx)(Le), Me(null)),
                he && he(null),
                De && t && De(!0);
            },
            Ve = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              const {
                trackData: t = null,
                refreshCartIcon: n = !1,
                shouldUpdateComponents: o = !1,
                disableClose: a = !1,
                titleModal: r = null,
              } = e;
              clearTimeout(Se.current),
                he(r),
                Te(!0),
                (Ae.current = !0),
                a && ee({ isDismissible: !1 }),
                t && Me({ melidata_event: { ...t } }),
                re &&
                  (0, c.sx)(
                    (0, A.LU)(
                      re,
                      ge.current ? A.Y8.NAVIGATE_LOADED : A.Y8.LOADED
                    )
                  );
              const { FLOW_END: s, FLOW_END_FROM_MSG: i } = g.O;
              (0, p.b)({
                key: pe.current ? i : s,
                additionalTags: {
                  end_case: ge.current ? `${fe.current}_redirect` : fe.current,
                },
                statsdConfig: Q,
              }),
                n && d.A.freya?.emit("cart:refresh"),
                o && te && te();
            },
            Fe = function () {
              return Ve(
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
              );
            },
            xe = function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              Ae.current || Ve(e || t);
            },
            We = (e, t) => {
              const { data: n, enabled: o, url: a } = t,
                r = {
                  [D]: () => Fe(n),
                  [k]: () => Fe(n),
                  [$]: () => xe(n, t),
                  [V]: () => xe(n, t),
                  [H]: () => xe(n, t),
                  [B]: () => (Te(!1), void De(!0)),
                  [P]: () =>
                    (function () {
                      let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      (0, p.b)({
                        key: g.O.SEQUENCER_UPDATE_FROM_MSG,
                        statsdConfig: Q,
                      }),
                        ce?.({ data: e, fallbackConfig: Y, statsdConfig: Q });
                    })(n),
                  [R]: () => He(),
                  [h]: () => ee({ isDismissible: o }),
                  [v]: () =>
                    (function () {
                      let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      const {
                        snackbar: t,
                        close: n,
                        message: o,
                        errorUxContext: a,
                        delay: r,
                      } = e;
                      if (t && J) {
                        const {
                          message: e,
                          type: o,
                          delay: a,
                          called_from: r,
                          action: s,
                        } = t;
                        n && He(),
                          s &&
                            (s.onClick = () =>
                              $e({ url: s.redirectUrl, target: "parent" })),
                          J({
                            message: e,
                            type: o,
                            delay: a,
                            called_from: r,
                            action: s,
                          });
                      } else
                        o &&
                          a &&
                          ((0, M.o)({
                            message: o,
                            errorUxContext: a,
                            delay: r,
                          }),
                          n && He());
                    })(t),
                  [O]: () =>
                    (function () {
                      let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      const { url: t, render_mode: n } = e;
                      $e({ url: t, target: "modal", newRenderMode: n });
                    })(t),
                  [U]: () => $e({ url: a, target: "parent" }),
                  [b]: () =>
                    (function () {
                      let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      const {
                        itemId: t,
                        question: n,
                        snackbar_message: o,
                        track: a,
                        ai_categories: r,
                      } = e;
                      n &&
                        t &&
                        oe &&
                        (He(),
                        oe({
                          itemId: t,
                          text: n,
                          snackbar_message: o,
                          suggestionTrack: a,
                          source: "webview",
                          ai_categories: r,
                        }));
                    })(t),
                  [G]: () =>
                    (function () {
                      let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      const { selector: t, shouldRaiseErrors: n } = e;
                      if (t) {
                        const e = document.querySelector(t);
                        He(),
                          e.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          }),
                          n && ae();
                      }
                    })(t),
                  [w]: () =>
                    (function () {
                      let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      Ee && Ee(e?.data ?? e);
                    })(t),
                  [y]: () => (0, L.W)(),
                };
              return r[e];
            },
            qe = (e) => {
              if (!j) return;
              const t = (0, S.xI)(e.data);
              if (t) {
                const e = (0, S.ok)(t.type, t.data, {
                  onClose: He,
                  goToUrl: $e,
                });
                return void e?.();
              }
              if (!e?.data?.type) return;
              const { type: n } = e.data;
              if (!Object.values(F).includes(n)) return;
              const o = We(n, e.data);
              o?.();
            },
            Ke = (e) => {
              Ae.current ||
                (re && (0, c.sx)((0, A.LU)(re)),
                ve && (0, _.A)({ target: ve, currentLocation: window.location })
                  ? ((0, p.b)({
                      key: g.O.REDIRECT_TO_FALLBACK,
                      additionalTags: {
                        reason: e,
                        flow_redirect: Boolean(ge.current),
                      },
                      statsdConfig: Q,
                    }),
                    (window.location.href = ve))
                  : (ke({
                      message: Oe?.message ?? (0, E.TC)(Pe),
                      additionalTags: {
                        reason: e,
                        flow_redirect: Boolean(ge.current),
                      },
                    }),
                    He()));
            };
          return (
            (0, o.useEffect)(() => {
              s &&
                Y &&
                ((Ae.current = !1),
                (Se.current = setTimeout(() => {
                  Ke(f.n7.TIMEOUT_INITIAL_LOAD);
                }, Ue || 1e4)));
            }, [s]),
            (0, o.useEffect)(
              () => (
                j || (Te(!1), (Ae.current = !1)),
                j && (Ce.current = !1),
                ne &&
                  j &&
                  (document
                    .querySelector(".ui-pdp-backdrop-modal")
                    ?.setAttribute("style", "height:0px"),
                  document
                    .querySelectorAll(".andes-modal__overlay")[0]
                    ?.setAttribute("style", "height:0px")),
                d.A.addEventListener("message", qe),
                () => {
                  d.A.removeEventListener("message", qe),
                    clearTimeout(Se.current);
                }
              ),
              [j]
            ),
            (0, o.useEffect)(() => {
              (fe.current = z === A.M8.CONTAINER ? "bottom_sheet" : "landing"),
                (ge.current = Boolean(m)),
                (pe.current = Boolean(ue));
            }, [z, m, ue]),
            (0, o.useEffect)(() => {
              Ie && Ne && (De(!1), (0, L.W)());
            }, [Ie, Ne]),
            (0, N.jsx)(a.a, {
              open: j,
              id: n,
              onClose: He,
              type:
                z === A.M8.FULLSCREEN
                  ? "full"
                  : "mobile" === Ge
                  ? "card"
                  : "large",
              title: Re
                ? t || (t = (0, N.jsx)(r.s, { children: Re }))
                : we
                ? null
                : q || " ",
              className: Be,
              closable: Ie && Z,
              children: (0, N.jsx)(u.v, {
                title: K,
                "data-testid": "iframe-element",
                src: ye,
                showSpinner: !0,
                scrolling: ie ? "no" : "auto",
                forceSpinner: !Ie || Ne,
                spinnerClassname: "center-spinner",
                loaderVariant: me,
                onLoad: () => {
                  clearTimeout(Se.current),
                    Y
                      ? (Se.current = setTimeout(() => {
                          Ke(f.n7.TIMEOUT_WEBVIEW_MESSAGE);
                        }, be || 5e3))
                      : !Ae.current && W.includes(se) && Ve({});
                },
                onMessage: (() => {
                  if ("function" == typeof _e) return _e;
                  const { FULLSCREEN: e, CONTAINER: t, CENTERED: n } = A.M8,
                    o = {
                      typeName: "vpp:on-demand-iframe:resize",
                      height: "height",
                      containerSelector: ".on-demand-iframe",
                      headerSelector: ".andes-modal__header",
                      width: void 0,
                      deviceType: Ge,
                    };
                  switch (z) {
                    case n:
                      o.width = "width";
                      break;
                    case t:
                      "mobile" === Ge &&
                        (o.containerSelector = ".ui-pdp-iframe");
                  }
                  return (0, l.V)(...Object.values(o));
                })(),
              }),
            })
          );
        };
    },
    58633(e, t, n) {
      n.d(t, { TC: () => r, mu: () => a });
      var o = n(86523);
      const a = {
          MSG_LOADED: "vpp:on-demand-iframe:loaded",
          MSG_CLOSE: "vpp:on-demand-iframe:close",
          MSG_CLOSABLE: "vpp:on-demand-iframe:closable",
          MSG_SNACKBAR: "vpp:on-demand-iframe:snackbar",
          MSG_NAVIGATE: "vpp:on-demand-iframe:navigate",
          MSG_REDIRECT: "vpp:on-demand-iframe:redirect",
          MSG_ASK_SELLER: "vpp:on-demand-iframe:ask-seller",
          MSG_SCROLL_TO_ELEMENT: "vpp:on-demand-iframe:scroll-to-element",
          MSG_SEQUENCER: "vpp:on-demand-iframe:sequencer",
          MSG_REFRESH_PAGE: "vpp:on-demand-iframe:refresh-page",
          MSG_UPDATE_PRICE: "vpp:on-demand-iframe:update-price",
        },
        r = (e) => o.MW[e] ?? o.MW.DEFAULT;
    },
    30628(e, t, n) {
      n.d(t, { W: () => o });
      const o = () => {
        window?.location?.reload?.();
      };
    },
    97437(e, t, n) {
      n.d(t, { A: () => a });
      n(18111), n(61701);
      var o = n(18824);
      const a = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = Object.entries(t)
          .map((e) => {
            let [t, n] = e;
            return `${t}=${n}`;
          })
          .join("&");
        return `${e}${(0, o.A)(e)}${n}`;
      };
    },
    18824(e, t, n) {
      n.d(t, { A: () => a });
      var o = n(1653);
      const a = (e) => (e && (0, o.b)(e, "?") ? "&" : "?");
    },
    49546(e, t, n) {
      n.d(t, { A: () => o });
      const o = n(44489).Dp;
    },
  },
]);
//# sourceMappingURL=components-on-demand-iframe.da873735.js.map
