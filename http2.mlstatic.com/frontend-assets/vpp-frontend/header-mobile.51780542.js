(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [77755],
  {
    39816(t, e, o) {
      "use strict";
      o.d(e, { u: () => s });
      var a = o(11695);
      const s = function (t, e) {
        let o =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const s = {
          survey_id: t,
          response_type: "cta",
          data: { response: e, channel: "vip" },
        };
        return a.Ay.postVisVppBackend(s, o, "survey")
          .then((t) => t)
          .catch((t) => {
            if (409 === t?.response?.status)
              return {
                data: t?.response?.data,
                status: 200,
                statusText: "OK",
                originalStatus: 409,
              };
            throw t;
          });
      };
    },
    55631(t, e, o) {
      "use strict";
      o.d(e, { GI: () => m });
      var a = o(11695),
        s = o(44489),
        c = o(9394);
      if (11942 == o.j) var i = o(5064);
      if (11942 == o.j) var n = o(31574);
      var r = o(45513),
        p = o(64401),
        l = o(76177);
      const d = (t, e, o) => {
          t({ type: n.BD, isFetchingData: !1, component: e }),
            t({ type: n.Cc, component: e, error: o });
        },
        u = (t, e) => {
          let {
            component: o,
            itemId: r,
            contactType: u,
            recaptchav2token: m,
            ajaxBackendParams: _,
            action: y,
            recaptchaActionType: h,
            params: T,
          } = t;
          return (t) =>
            a.Ay.getSellerContactInfo(r, u, t, m, _, y, T)
              .then((t) => {
                if (
                  (e({ type: n.BD, isFetchingData: !1, component: o }),
                  t.recaptcha)
                )
                  (0, s.sx)(t.recaptcha.track),
                    e({
                      type: n.KP,
                      payload: { ...t, component: o, recaptchaActionType: h },
                    });
                else if (t.display_message)
                  e({ type: n.xc, payload: { ...t, component: o } });
                else if (t.fraud_modal) e({ type: n.YA, modal: t.fraud_modal });
                else if ("show-phones" === u)
                  (0, s.sx)(t.track), e({ type: n.K6, payload: t });
                else {
                  (0, s.sx)(t.track);
                  const a = (0, c.A)(t);
                  if (a) {
                    if (
                      (e({
                        type: n.yy,
                        payload: { component: o, token: null },
                      }),
                      t?.whatsapp)
                    ) {
                      const e = t.whatsapp.html_target?.toLowerCase() === p.b;
                      (0, l.r)({ withRerender: e });
                    }
                    (0, p.N)(a, t?.whatsapp?.html_target);
                  } else e({ type: n.Cc, component: o });
                }
              })
              .catch((t) => {
                (0, i.A)(t) || d(e, o, t);
              });
        },
        m = (t, e) => {
          const {
            component: o,
            itemId: a,
            contactType: s,
            action: c,
            recaptchav2token: i,
            ajaxBackendParams: p,
            recaptchaActionType: l,
            recaptchaSiteKey: m,
            params: _,
            vertical: y,
          } = e;
          (_.vertical = y),
            t({ type: n.BD, isFetchingData: !0, component: o }),
            i
              ? (t({ type: n.BJ, payload: { component: o } }),
                u(
                  {
                    component: o,
                    itemId: a,
                    contactType: s,
                    recaptchav2token: i,
                    ajaxBackendParams: p,
                    action: c,
                    recaptchaActionType: l,
                    params: _,
                  },
                  t
                )())
              : (0, r.DA)(
                  m,
                  c,
                  u(
                    {
                      component: o,
                      itemId: a,
                      contactType: s,
                      ajaxBackendParams: p,
                      action: c,
                      recaptchaActionType: l,
                      params: _,
                    },
                    t
                  ),
                  () => d(t, o)
                );
        };
    },
    48071(t, e, o) {
      "use strict";
      o.d(e, {
        $Y: () => h,
        Ei: () => y,
        RJ: () => T,
        ab: () => _,
        ri: () => E,
        xC: () => m,
      });
      var a = o(44489),
        s = o(11695),
        c = o(28445),
        i = o(31574),
        n = o(31088),
        r = o(45513),
        p = o(81215),
        l = o(5064),
        d = o(93647);
      const u = (t, e) => {
          let {
            component: o,
            itemId: r,
            form: p,
            outPutValues: l,
            recaptchaV2Token: d,
            app: u,
            track: m,
            origin: _,
            action: y,
          } = t;
          return (t) => (
            e({ type: i.BD, isFetchingData: !0, component: o }),
            s.Ay.createQuestionsUnregistered({
              itemId: r,
              form: l,
              recaptchaTokenv3: t,
              recaptchaV2Token: d,
              params: { app: u, origin: _ },
              action: y,
            })
              .then((t) => {
                e({ type: i.BD, isFetchingData: !1, component: o }),
                  t.success
                    ? (t.is_repeated || (0, a.sx)(m),
                      (0, n.Ie)({ input: t.unregistered_questions.form }),
                      e({ type: i.PY }))
                    : t.has_validation_errors && (t.display_message = null),
                  t.redirect
                    ? (0, c.A)(t)
                    : t.recaptcha
                    ? (e({ type: i.KP, payload: { ...t, component: o } }),
                      e({ type: i.cm }))
                    : e({ type: i.Jp, payload: t, component: o });
              })
              .catch((t) => {
                e({ type: i.qp, error: t, form: p, component: o });
              })
          );
        },
        m = (t, e) => {
          const {
            app: o,
            component: a,
            action: s,
            itemId: c,
            form: n,
            outPutValues: p,
            hasErrors: l,
            recaptchaV2Token: d,
            track: m,
            origin: _,
            recaptchaSiteKey: y,
          } = e;
          t({ type: i.i2, form: n, itemId: c, hasErrors: l, component: a }),
            d
              ? u(
                  {
                    component: a,
                    itemId: c,
                    form: n,
                    outPutValues: p,
                    recaptchaV2Token: d,
                    app: o,
                    track: m,
                    origin: _,
                    action: s,
                  },
                  t
                )()
              : (0, r.DA)(
                  y,
                  s,
                  u(
                    {
                      component: a,
                      itemId: c,
                      form: n,
                      outPutValues: p,
                      app: o,
                      track: m,
                      origin: _,
                      action: s,
                    },
                    t
                  ),
                  (e) => t({ type: i.qp, error: e, form: n, component: a })
                );
        },
        _ = (t, e) => {
          const { app: o, itemId: a, variationId: c, actionType: n } = e;
          t({ type: i.Jn }),
            t({ type: i.mW }),
            s.Ay.getModalQuestions(a, {
              app: o,
              variation_id: c,
              action_type: n,
            })
              .then((e) => {
                t({ type: i.jM, payload: e });
              })
              .catch((e) => t({ type: i.sC, error: e }));
        },
        y = (t, e) => {
          const {
            app: o,
            itemId: a,
            variationId: c,
            actionType: n,
            metadata: r = {},
          } = e;
          t({ type: i.Dr, payload: { metadata: r, type: "QUESTIONS" } }),
            t({ type: i.Zp }),
            s.Ay.getModalQuestions(a, {
              app: o,
              variation_id: c,
              action_type: n,
            })
              .then((e) => {
                t({ type: i.mp, payload: e });
              })
              .catch((e) => t({ type: i.pg, error: e }));
        },
        h = (t, e) => {
          const { app: o, itemId: a, variationId: c } = e;
          t({ type: i.Jn }),
            t({ type: i.iK }),
            s.Ay.getModalUnregisteredQuestions(a, { app: o, variation_id: c })
              .then((e) => {
                t({ type: i.Vp, payload: e });
              })
              .catch((e) => t({ type: i.cs, error: e }));
        },
        T = (t, e) => {
          const { app: o, itemId: a, variationId: c, metadata: n = {} } = e;
          t({
            type: i.Dr,
            payload: { metadata: n, type: "UNREGISTERED_QUESTIONS" },
          }),
            t({ type: i.rC }),
            s.Ay.getModalUnregisteredQuestions(a, { app: o, variation_id: c })
              .then((e) => {
                t({ type: i.Ec, payload: e });
              })
              .catch((e) => t({ type: i.Fi, error: e }));
        },
        E = (t, e) => {
          const {
            app: o,
            vertical: n,
            itemId: r,
            text: u,
            track: m,
            component: _,
            checkbox: y,
          } = e;
          t({ type: p.fb, itemId: r, component: _ }),
            s.Ay.createQuestion(r, u, {
              app: o,
              make_only_question: !0,
              checkbox: y,
              vertical: n,
            })
              .then((e) => {
                e &&
                  (!0 === e.success &&
                    (e.is_repeated || (0, a.sx)(m), t({ type: i.PY })),
                  e.redirect
                    ? (0, c.A)(e, !0)
                    : (t({ type: p.mc, payload: e, component: _ }),
                      t({
                        type: p.wE,
                        params: {
                          message: e.display_message.text,
                          type: "success",
                          called_from: "vis",
                        },
                      })));
              })
              .catch((e) => {
                if (!(0, l.A)(e)) {
                  if (
                    (t({ type: i.PY }),
                    e?.response?.data?.errorUxContext &&
                      e?.response?.data?.displayMessage)
                  )
                    return (
                      (0, d.o)({
                        message: e.response.data.displayMessage,
                        errorUxContext: e.response.data.errorUxContext,
                      }),
                      void t({ type: p.ye })
                    );
                  t({ type: p.nI, component: _, error: e });
                }
              });
        };
    },
    92364(t, e, o) {
      "use strict";
      o.d(e, {
        HN: () => h,
        O4: () => _,
        fS: () => m,
        kh: () => T,
        nV: () => y,
        y6: () => u,
      });
      o(74423), o(18111), o(20116), o(69112), o(33110);
      var a = o(44489),
        s = o(7902),
        c = o(11695),
        i = o(31574),
        n = o(28445),
        r = o(45513),
        p = o(83582),
        l = o(76508);
      const d = (t, e) => ({ selectedModelId: t, selectedUnit: e[t][0] }),
        u = (t, e) => {
          t({ type: i.Jn }), t({ type: i.$f });
          const {
              app: o,
              id: a,
              quotation: n,
              picture_config: r,
              modelId: p,
              deviceType: l,
              currentState: u,
            } = e,
            m = n ? n.model_units : {};
          n?.model_units?.[p]
            ? t({
                type: i.du,
                payload: { ...u, ...d(p, n.model_units), isFetching: !1 },
              })
            : c.Ay.getModelUnits(a, { app: o, model_id: p, deviceType: l })
                .then((e) => {
                  const o = e.components.find((t) => "quotation" === t.id),
                    a = { ...m, ...(0, s.x)(o.model_units, r) },
                    c = o?.snackbar?.quotation_limit;
                  t({ type: i.cn, payload: { ...o, model_units: a } });
                  const n = p || o.models[0].id;
                  t({
                    type: i.du,
                    payload: { ...u, isFetching: !1, ...d(n, a) },
                  }),
                    c && t({ type: i.W1, payload: c });
                })
                .catch((e) => t({ type: i.pZ, error: e }));
        },
        m = (t, e) => {
          t({ type: i.Jn }), t({ type: i.hB });
          const {
              app: o,
              id: a,
              multifamily_modal: n,
              picture_config: r,
              modelId: p,
              deviceType: l,
              currentState: u,
            } = e,
            m = n ? n.model_units : {};
          n?.model_units?.[p]
            ? t({
                type: i.Fj,
                payload: { ...u, ...d(p, n.model_units), isFetching: !1 },
              })
            : c.Ay.getUnitsLTR(a, { app: o, model_id: p, deviceType: l })
                .then((e) => {
                  const o = e.components.find((t) => "check_units" === t.id),
                    a = { ...m, ...(0, s.x)(o.model_units, r) };
                  t({ type: i.Od, payload: { ...o, model_units: a } });
                  const c = p || o.models[0].id;
                  t({
                    type: i.Fj,
                    payload: { ...u, isFetching: !1, ...d(c, a) },
                  });
                })
                .catch((e) => t({ type: i.LV, error: e }));
        },
        _ = (t, e) => {
          t({ type: i.Jn }), t({ type: i.$f });
          const {
              app: o,
              id: a,
              quotation: n,
              picture_config: r,
              modelId: p,
              deviceType: l,
              currentState: u,
            } = e,
            m = n ? n.model_units : {};
          n?.model_units?.[p]
            ? t({
                type: i.du,
                payload: { ...u, ...d(p, n.model_units), isFetching: !1 },
              })
            : c.Ay.getUnregisteredQuotations(a, {
                app: o,
                model_id: p,
                deviceType: l,
              })
                .then((e) => {
                  const o = e.components.find((t) => "quotation" === t.id),
                    a = { ...m, ...(0, s.x)(o.model_units, r) };
                  t({ type: i.cn, payload: { ...o, model_units: a } });
                  const c = p || o.models[0].id;
                  t({
                    type: i.du,
                    payload: { ...u, isFetching: !1, ...d(c, a) },
                  });
                })
                .catch((e) => t({ type: i.pZ, error: e }));
        },
        y = (t, e) => {
          const {
            id: o,
            app: s,
            unitId: p,
            recaptchaTokenV2: l,
            track: d,
            recaptchaSiteKey: u,
          } = e;
          t({ type: i.HM });
          const m = localStorage.getItem("quoted-units"),
            _ = m ? JSON.parse(m) : [];
          new Promise((t) => {
            l ? t(null) : (0, r.DA)(u, "quotation", (e) => t(e));
          })
            .then((e) => {
              c.Ay.createQuotation(
                {
                  itemId: o,
                  unitId: p,
                  recaptchaTokenV2: l,
                  action: "quotation",
                  recaptchaTokenV3: e,
                },
                { app: s }
              )
                .then((e) => {
                  !0 === e.success &&
                    ((0, a.sx)(d),
                    _.includes(p) ||
                      (_.push(p),
                      localStorage.setItem("quoted-units", JSON.stringify(_)))),
                    t({ type: i.UO }),
                    e.redirect && (0, n.A)(e, !0),
                    !0 !== e.success ||
                      e.redirect ||
                      t({ type: i.AC, payload: "congrats" }),
                    e.recaptcha
                      ? t({
                          type: i.KP,
                          payload: { ...e, component: "quotation" },
                        })
                      : e.success ||
                        e.has_validation_errors ||
                        t({ type: i.tu, error: e });
                })
                .catch((e) => {
                  t({ type: i.tu, error: e });
                });
            })
            .catch((e) => {
              t({ type: i.tu, error: e });
            });
        },
        h = (t, e) => {
          const {
            id: o,
            app: n,
            unitId: l,
            modelId: u,
            deviceType: m,
            currentState: _,
            recaptchaTokenV2: y,
            recaptchaSiteKey: h,
            getState: T,
          } = e;
          new Promise((t) => {
            y ? t(null) : (0, r.DA)(h, "quotation", (e) => t(e));
          })
            .then((e) => {
              c.Ay.createQuotationPrice(
                {
                  itemId: o,
                  unitId: l,
                  recaptchaTokenV2: y,
                  action: "quotation",
                  recaptchaTokenV3: e,
                  quotationType: "show-prices",
                },
                { app: n }
              )
                .then((e) => {
                  !0 === e.success &&
                    ((t, e) => {
                      t({ type: i.Jn }), t({ type: i.$f });
                      const {
                          app: o,
                          id: n,
                          quotation: r,
                          picture_config: p,
                          modelId: l,
                          deviceType: u,
                          currentState: m,
                        } = e,
                        _ = r ? r.model_units : {};
                      c.Ay.getModelUnits(n, {
                        app: o,
                        model_id: l,
                        deviceType: u,
                      })
                        .then((e) => {
                          const o = e.components.find(
                              (t) => "quotation" === t.id
                            ),
                            c = { ..._, ...(0, s.x)(o.model_units, p) };
                          t({ type: i.oX, payload: { ...o, model_units: c } });
                          const n = l || o.models[0].id;
                          t({
                            type: i.du,
                            payload: { ...m, isFetching: !1, ...d(n, c) },
                          }),
                            t({ type: i.AC, payload: "show_price" }),
                            (0, a.sx)(o.quotation_track);
                        })
                        .catch((e) => t({ type: i.pZ, error: e }));
                    })(t, (0, p.L)(u, m, _, T)),
                    e.recaptcha
                      ? t({
                          type: i.KP,
                          payload: { ...e, component: "quotation" },
                        })
                      : e.success ||
                        e.has_validation_errors ||
                        t({ type: i.tu, error: e });
                })
                .catch((e) => {
                  t({ type: i.tu, error: e });
                });
            })
            .catch((e) => {
              t({ type: i.tu, error: e });
            });
        },
        T = (t, e) => {
          const {
            id: o,
            app: s,
            unitId: p,
            recaptchaTokenV2: d,
            form: u,
            track: m,
            recaptchaSiteKey: _,
            currentState: y,
            handleClose: h,
          } = e;
          t({ type: i.HM });
          new Promise((t) => {
            d ? t(null) : (0, r.DA)(_, "quotation", (e) => t(e));
          })
            .then((e) => {
              c.Ay.createUnregisteredQuotation(
                {
                  itemId: o,
                  unitId: p,
                  recaptchaTokenV2: d,
                  recaptchaTokenV3: e,
                  action: "quotation",
                  form: u,
                },
                { app: s }
              )
                .then((e) => {
                  if ((localStorage.setItem(l.WC, !0), !0 === e.success)) {
                    (0, a.sx)(m);
                    const o = localStorage.getItem("quoted-units"),
                      s = o ? JSON.parse(o) : [];
                    s.includes(p) ||
                      (s.push(p),
                      localStorage.setItem("quoted-units", JSON.stringify(s))),
                      localStorage.removeItem(l.WC),
                      e.redirect ||
                        (t({ type: i.AC, payload: "congrats" }),
                        y && t({ type: i.du, payload: { ...y, step: 0 } }),
                        h && h());
                  }
                  t({ type: i.UO }),
                    e.redirect && (0, n.A)(e, !0),
                    e.form && t({ type: i.m, payload: e.form.form }),
                    e.recaptcha
                      ? t({
                          type: i.KP,
                          payload: { ...e, component: "quotation" },
                        })
                      : e.success ||
                        e.has_validation_errors ||
                        (e.error_code === l.LD.PRECONDITION_FAILED
                          ? t({ type: i.W1, payload: e })
                          : (localStorage.removeItem(l.WC),
                            t({ type: i.tu, error: e })));
                })
                .catch((e) => {
                  localStorage.removeItem(l.WC), t({ type: i.tu, error: e });
                });
            })
            .catch((e) => {
              localStorage.removeItem(l.WC), t({ type: i.tu, error: e });
            });
        };
    },
    76405(t, e, o) {
      "use strict";
      o.d(e, { z: () => a });
      const a = (t, e, o, a, s, c, i, n, r, p) => {
        const { vertical: l } = p();
        return {
          component: t,
          itemId: e,
          contactType: o,
          action: a,
          recaptchav2token: s,
          ajaxBackendParams: c,
          recaptchaActionType: i,
          recaptchaSiteKey: n,
          params: r,
          vertical: l,
        };
      };
    },
    94021(t, e, o) {
      "use strict";
      o.d(e, { K3: () => c, iK: () => a, kp: () => i, zC: () => s });
      const a = (t, e, o, a, s, c, i, n, r, p, l) => {
          const { app: d } = l();
          return {
            app: d,
            component: t,
            action: e,
            itemId: o,
            form: a,
            outPutValues: s,
            hasErrors: c,
            recaptchaV2Token: i,
            track: n,
            origin: r,
            recaptchaSiteKey: p,
          };
        },
        s = (t, e, o, a) => {
          const { app: s } = a();
          return { app: s, itemId: t, variationId: e, actionType: o };
        },
        c = (t, e, o) => {
          const { app: a } = o();
          return { app: a, itemId: t, variationId: e };
        },
        i = (t, e, o, a, s, c) => {
          const { app: i, vertical: n } = c();
          return {
            app: i,
            vertical: n,
            itemId: t,
            text: e,
            track: o,
            component: a,
            checkbox: s,
          };
        };
    },
    83582(t, e, o) {
      "use strict";
      o.d(e, {
        I1: () => r,
        L: () => s,
        MF: () => n,
        cA: () => a,
        ce: () => i,
        lq: () => p,
        xi: () => c,
      });
      const a = (t, e, o, a) => {
          const { app: s, id: c, quotation: i, picture_config: n } = a();
          return {
            app: s,
            id: c,
            quotation: i,
            picture_config: n,
            modelId: t,
            deviceType: e,
            currentState: o,
          };
        },
        s = (t, e, o, a) => {
          const { app: s, id: c, quotation: i, picture_config: n } = a();
          return {
            app: s,
            id: c,
            quotation: i,
            picture_config: n,
            modelId: t,
            deviceType: e,
            currentState: o,
          };
        },
        c = (t, e, o, a) => {
          const {
            app: s,
            id: c,
            multifamily_modal: i,
            picture_config: n,
          } = a();
          return {
            app: s,
            id: c,
            multifamily_modal: i,
            picture_config: n,
            modelId: t,
            deviceType: e,
            currentState: o,
          };
        },
        i = (t, e, o, a) => {
          const { app: s, id: c, quotation: i, picture_config: n } = a();
          return {
            app: s,
            id: c,
            quotation: i,
            picture_config: n,
            modelId: t,
            deviceType: e,
            currentState: o,
          };
        },
        n = (t, e, o, a, s) => {
          const { id: c, app: i } = s();
          return {
            id: c,
            app: i,
            unitId: t,
            recaptchaTokenV2: e,
            track: o,
            recaptchaSiteKey: a,
          };
        },
        r = (t, e, o, a, s, c, i) => {
          const { id: n, app: r } = i();
          return {
            id: n,
            app: r,
            unitId: t,
            modelId: e,
            deviceType: o,
            currentState: a,
            recaptchaTokenV2: s,
            recaptchaSiteKey: c,
            getState: i,
          };
        },
        p = (t, e, o, a, s, c, i, n) => {
          const { id: r, app: p } = n();
          return {
            id: r,
            app: p,
            unitId: t,
            recaptchaTokenV2: e,
            form: o,
            track: a,
            recaptchaSiteKey: s,
            currentState: c,
            handleClose: i,
          };
        };
    },
    9394(t, e, o) {
      "use strict";
      o.d(e, { A: () => a });
      o(18111), o(20116);
      const a =
        11942 == o.j
          ? (t) => {
              let e = null;
              if (t.whatsapp) e = t.whatsapp.target;
              else if (t.phones) {
                e = t.phones.find((t) => t).target;
              }
              return e;
            }
          : null;
    },
    28445(t, e, o) {
      "use strict";
      o.d(e, { A: () => a });
      const a = function (t) {
        const e =
          arguments.length > 1 &&
          void 0 !== arguments[1] &&
          arguments[1] &&
          (window.location?.hash || "");
        window.location.href = `${t.redirect.permalink}${e}`;
      };
    },
    5064(t, e, o) {
      "use strict";
      o.d(e, { A: () => a });
      const a = (t) => {
        if (401 === t?.response?.status && t?.response?.data?.require_reauth) {
          const e = t.response.data.url;
          if (e) return (window.location.href = e), !0;
        }
        return !1;
      };
    },
    64401(t, e, o) {
      "use strict";
      o.d(e, { N: () => c, b: () => a });
      o(74423);
      const a = "_blank",
        s = 11942 == o.j ? ["_self", a, "_parent", "_top"] : null,
        c = (t, e) => {
          const o = "string" == typeof e ? e.toLowerCase() : "";
          s.includes(o)
            ? window?.open(t, o)
            : window?.location && (window.location.href = t);
        };
    },
    72127(t, e, o) {
      "use strict";
      o.d(e, {
        $I: () => R,
        Aq: () => k,
        Bl: () => M,
        Bu: () => y,
        C6: () => L,
        M5: () => T,
        Me: () => g,
        T5: () => P,
        Zs: () => m,
        aC: () => S,
        ap: () => u,
        bO: () => U,
        d: () => v,
        ew: () => x,
        g9: () => E,
        jL: () => O,
        jr: () => h,
        kE: () => _,
        k_: () => f,
        qE: () => I,
        sC: () => A,
        sN: () => D,
        v4: () => N,
        wU: () => w,
        y4: () => C,
      });
      var a = o(11695),
        s = o(31574),
        c = o(94021),
        i = o(48071),
        n = o(55631);
      if (11942 == o.j) var r = o(76405);
      var p = o(92364),
        l = o(83582),
        d = o(39816);
      const u = (t) => {
          let {
            component: e,
            action: o,
            itemId: a,
            form: s,
            outPutValues: n,
            hasErrors: r,
            recaptchaV2Token: p,
            track: l,
            origin: d,
            recaptchaSiteKey: u,
          } = t;
          return (t, m) =>
            (0, i.xC)(t, (0, c.iK)(e, o, a, s, n, r, p, l, d, u, m));
        },
        m = (t) => {
          let {
            component: e,
            itemId: o,
            contactType: a,
            action: s,
            recaptchav2token: c,
            ajaxBackendParams: i,
            recaptchaActionType: p,
            recaptchaSiteKey: l,
            params: d = {},
          } = t;
          return (t, u) => (0, n.GI)(t, (0, r.z)(e, o, a, s, c, i, p, l, d, u));
        },
        _ = (t) => {
          let { form: e, component: o } = t;
          return (t) => {
            t({ type: s.Ap, payload: { form: e, component: o } });
          };
        },
        y = (t, e, o) => (a, s) => (0, i.ab)(a, (0, c.zC)(t, e, o, s)),
        h = function (t, e, o) {
          let a =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return (s, n) =>
            (0, i.Ei)(s, { ...(0, c.zC)(t, e, o, n), metadata: a });
        },
        T = (t, e) => (o, a) => (0, i.$Y)(o, (0, c.K3)(t, e, a)),
        E = function (t, e) {
          let o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return (a, s) => (0, i.RJ)(a, { ...(0, c.K3)(t, e, s), metadata: o });
        },
        f = (t) => (e) => {
          e({ type: s.BJ, payload: { component: t } });
        },
        A = (t) => {
          let { itemId: e, text: o, track: a, component: s, checkbox: n } = t;
          return (t, r) => (0, i.ri)(t, (0, c.kp)(e, o, a, s, n, r));
        },
        S = (t) => {
          let { input: e, value: o } = t;
          return (t) => {
            t({ type: s.pv, payload: { input: e, value: o } });
          };
        },
        I = (t) => {
          let { component: e, focus: o } = t;
          return (t) => {
            t({ type: s.W, payload: { component: e, focus: o } });
          };
        },
        g = (t) => {
          let { component: e, token: o } = t;
          return (t) => {
            t({ type: s.yy, payload: { component: e, token: o } });
          };
        },
        v = (t) => {
          let { canEdit: e, isEditing: o, component: a } = t;
          return (t) => {
            t({ type: s.b5, canEdit: e, isEditing: o, component: a }),
              t({ type: s.cm });
          };
        },
        O = (t) => {
          let { itemId: e, loginType: o, featureName: s } = t;
          return () => {
            a.Ay.redirectToLogin(e, o, s);
          };
        },
        R = (t, e, o) => (a, s) => (0, p.y6)(a, (0, l.cA)(t, e, o, s)),
        C = (t, e, o) => (a, s) => (0, p.fS)(a, (0, l.xi)(t, e, o, s)),
        N = (t, e, o) => (a, s) => (0, p.O4)(a, (0, l.ce)(t, e, o, s)),
        x = (t) => (e) => {
          e({ type: s.m, payload: t });
        },
        w = (t) => {
          let {
            unitId: e,
            recaptchaTokenV2: o,
            track: a,
            recaptchaSiteKey: s,
          } = t;
          return (t, c) => (0, p.nV)(t, (0, l.MF)(e, o, a, s, c));
        },
        k = (t) => {
          let {
            unitId: e,
            modelId: o,
            deviceType: a,
            currentState: s,
            recaptchaTokenV2: c,
            recaptchaSiteKey: i,
          } = t;
          return (t, n) => (0, p.HN)(t, (0, l.I1)(e, o, a, s, c, i, n));
        },
        U = (t) => {
          let {
            unitId: e,
            recaptchaTokenV2: o,
            form: a,
            track: s,
            recaptchaSiteKey: c,
            currentState: i,
            handleClose: n,
          } = t;
          return (t, r) => (0, p.kh)(t, (0, l.lq)(e, o, a, s, c, i, n, r));
        },
        L = (t) => (e) => {
          e({ type: s.du, payload: t });
        },
        M = (t) => (e) => {
          e({ type: s.Fj, payload: t });
        },
        D = (t) => (e) => {
          a.Ay.getVehicleHistoryModal(t)
            .then((t) => {
              e({ type: s.rb, payload: t });
            })
            .catch((t) => {
              e({ type: s.iv, error: t });
            });
        },
        P = function (t, e) {
          let o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return (0, d.u)(t, e, o);
        };
    },
    31574(t, e, o) {
      "use strict";
      o.d(e, {
        $f: () => H,
        AC: () => V,
        Ap: () => u,
        BD: () => c,
        BJ: () => L,
        Bs: () => k,
        Cc: () => s,
        Dr: () => x,
        Ec: () => v,
        Fi: () => O,
        Fj: () => Z,
        HM: () => q,
        Jn: () => R,
        Jp: () => p,
        K6: () => M,
        KP: () => U,
        LV: () => J,
        Od: () => W,
        PY: () => C,
        UO: () => Q,
        Vp: () => T,
        W: () => P,
        W1: () => B,
        YA: () => i,
        Zp: () => A,
        b5: () => f,
        cm: () => N,
        cn: () => b,
        cs: () => E,
        du: () => K,
        hB: () => z,
        i2: () => r,
        iK: () => h,
        iv: () => a,
        jM: () => _,
        lq: () => w,
        m: () => $,
        mW: () => m,
        mp: () => S,
        oX: () => F,
        pZ: () => j,
        pg: () => I,
        pv: () => d,
        qp: () => l,
        rC: () => g,
        rb: () => Y,
        sC: () => y,
        tu: () => G,
        xc: () => n,
        yy: () => D,
      });
      const a = "FETCH_ERROR",
        s = "FETCH_CONTACT_ERROR",
        c = "FETCH_COMPONENT",
        i = "RENDER_FRAUD_MODAL",
        n = "SHOW_FRAUD_SNACKBAR",
        r = "CREATE_QUESTIONS_UNREGISTERED_START",
        p = "CREATE_QUESTIONS_UNREGISTERED_COMPLETE",
        l = "CREATE_QUESTIONS_UNREGISTERED_ERROR",
        d = "QUESTIONS_UNREGISTERED_ON_CHANGE_VALUE",
        u = "QUESTIONS_UNREGISTERED_ERROR_FORM",
        m = "FETCH_MODAL_QUESTIONS_START",
        _ = "FETCH_MODAL_QUESTIONS_COMPLETE",
        y = "FETCH_MODAL_QUESTIONS_ERROR",
        h = "FETCH_MODAL_UNREGISTERED_QUESTIONS_START",
        T = "FETCH_MODAL_UNREGISTERED_QUESTIONS_COMPLETE",
        E = "FETCH_MODAL_UNREGISTERED_QUESTIONS_ERROR",
        f = "QUESTIONS_UNREGISTERED_EDIT_DATASTORED",
        A = "FETCH_MODAL_QUESTIONS_V2_START",
        S = "FETCH_MODAL_QUESTIONS_V2_COMPLETE",
        I = "FETCH_MODAL_QUESTIONS_V2_ERROR",
        g = "FETCH_MODAL_UNREGISTERED_QUESTIONS_V2_START",
        v = "FETCH_MODAL_UNREGISTERED_QUESTIONS_V2_COMPLETE",
        O = "FETCH_MODAL_UNREGISTERED_QUESTIONS_V2_ERROR",
        R = "MODAL_REQUEST_START",
        C = "MODAL_REQUEST_CLOSE",
        N = "MODAL_REQUEST_RESIZING",
        x = "MODAL_STICKY_REQUEST_START",
        w = "MODAL_STICKY_REQUEST_CLOSE",
        k = "CLEAR_MODAL_MESSAGES",
        U = "SHOW_RECAPTCHA",
        L = "REMOVE_RECAPTCHA",
        M = "FETCH_SELLER_INFO_PHONES",
        D = "UPDATE_TOKEN_RESPONSE",
        P = "SCROLL_TO_COMPONENT",
        H = "FETCH_QUOTATION_START",
        b = "FETCH_QUOTATION_COMPLETE",
        F = "FETCH_QUOTATION_PRICE",
        j = "FETCH_QUOTATION_ERROR",
        $ = "UPDATE_QUOTATION_FORM",
        q = "CREATE_QUOTATION_START",
        V = "CREATE_QUOTATION_SHOW_PRICE",
        Q = "CREATE_QUOTATION_COMPLETE",
        G = "CREATE_QUOTATION_ERROR",
        K = "UPDATE_QUOTATION_CURRENT_STATE",
        B = "QUOTATION_ERROR_EXCEEDS_LIMIT",
        z = "FETCH_GET_UNITS_START",
        W = "FETCH_GET_UNITS_COMPLETE",
        J = "FETCH_GET_UNITS_ERROR",
        Z = "UPDATE_GET_UNITS_CURRENT_STATE",
        Y = "FETCH_VEHICLE_HISTORY_MODAL";
    },
    43851(t, e, o) {
      "use strict";
      o.d(e, { A: () => a });
      const a = o(49868).W;
    },
    31041(t, e, o) {
      "use strict";
      o.d(e, { A: () => a });
      const a = o(49868).y;
    },
    7337(t, e, o) {
      "use strict";
      o.d(e, { A: () => A });
      o(18111), o(61701), o(13579);
      var a,
        s = o(96540),
        c = o(63950),
        i = o.n(c),
        n = o(61678),
        r = o(37808),
        p = o(46942),
        l = o.n(p),
        d = o(36402),
        u = o(44489),
        m = o(4177),
        _ = o(93603),
        y = o(16030),
        h = o(54036),
        T = o(6176),
        E = o(36794),
        f = o(74848);
      const A = (t) => {
        let {
          components: e,
          namespace: o = null,
          modifier: c = null,
          onSubmitForm: p = i(),
          onRemove: A = i(),
        } = t;
        const S = (0, m.HZ)(),
          { staticProps: I } = S || {},
          { deviceType: g } = I || {},
          [v, O] = (0, s.useState)(!1),
          [R, C] = (0, s.useState)(!0),
          [N, x] = (0, s.useState)(0),
          w = (0, s.useRef)(null),
          k = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
          if ((x((t) => t + 1), w.current)) {
            const t = e[0]?.widget_specs?.action?.min_lines_for_button ?? 6,
              o = 15,
              a = w.current.scrollHeight,
              s = Math.floor(a / o);
            C(s >= t);
          }
        }, [e, g]);
        const U = (t) =>
            (0, f.jsxs)(r.$n, {
              hierarchy: t.hierarchy.toLowerCase(),
              size: t.size.toLowerCase(),
              onClick: () => {
                return (e = t.track), !v && e && (0, u.sx)(e), void O(!v);
                var e;
              },
              fullWidth: !0,
              className: l()(
                "compats-specs__action-button-specs",
                { "compats-specs__action-button-specs--active": v },
                { "compats-specs__action-button-specs--disabled": !v }
              ),
              children: [
                (0, f.jsx)("span", {
                  children: v
                    ? t.action_open?.text || t.action_collapsed?.text || ""
                    : t.action_collapsed?.text || t.action_open?.text || "",
                }),
                (0, f.jsx)(d.In, {
                  id: "chevron",
                  className: l()("ui-pdp-icon--chevron-down", {
                    "ui-pdp-icon--chevron-down--active": v,
                    "ui-pdp-icon--disabled": !v,
                  }),
                }),
              ],
            }),
          L = function (t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "li";
            return (0, f.jsx)(_.G, {
              className: l()("compats-specs__item-list", {
                [`ui-pdp-color--${t.color}`]: t.color,
                [`ui-pdp-size--${t.font_size}`]: t.font_size,
                [`ui-pdp-family--${t.font_family}`]: t.font_family,
              }),
              as: e,
              text: y.I.jsx(t.text, t.values),
            });
          },
          M = (t) =>
            (0, f.jsx)(E.A, {
              data: t,
              deviceType: g,
              onSubmitForm: (t, e) => p(t, e, g),
              onRemove: (t, e) => A(g, e),
              modifier: c,
            }),
          D = e.some((t) => t.type === h.VQ),
          P = e.some((t) => t?.widget_data?.type === h.Me),
          [H] = (0, T.U)(k, D);
        return (0, f.jsx)("div", {
          className: l()(
            "ui-pdp-container__row",
            `${o}__compats`,
            { "compats-block-sticky": D },
            { "compats-block-sticky-active": H },
            { [`${o}__compats-custom`]: P }
          ),
          ref: k,
          id: "compats",
          children: e.map((t) =>
            (0, f.jsxs)(
              s.Fragment,
              {
                children: [
                  t.type === h.$q &&
                    (0, f.jsxs)(f.Fragment, {
                      children: [
                        M(t.widget_data),
                        "specs_component" === t?.widget_specs?.type &&
                          (0, f.jsx)(n.Zp, {
                            className: "compats-specs__card",
                            paddingSize: 24,
                            children: (0, f.jsxs)(n.Wu, {
                              children: [
                                t.widget_specs.title &&
                                  (0, f.jsx)(_.G, {
                                    className: l()("compats-specs__title", {
                                      [`ui-pdp-color--${t.widget_specs.title.color}`]:
                                        t.widget_specs.title.color,
                                      [`ui-pdp-size--${t.widget_specs.title.font_size}`]:
                                        t.widget_specs.title.font_size,
                                      [`ui-pdp-family--${t.widget_specs.title.font_family}`]:
                                        t.widget_specs.title.font_family,
                                    }),
                                    as: "h4",
                                    text: t.widget_specs.title.text,
                                  }),
                                (0, f.jsx)("ul", {
                                  className: "compats-specs__list",
                                  children: t.widget_specs.specs_list.map((t) =>
                                    L(t, "li")
                                  ),
                                }),
                              ],
                            }),
                          }),
                        "specs_component_message" === t?.widget_specs?.type &&
                          (0, f.jsxs)(n.TM, {
                            className: "compats-specs__card",
                            paddingSize: 16,
                            children: [
                              (0, f.jsx)(n.Wu, {
                                className: l()(
                                  { "specs_component_message-visible": v },
                                  { "specs_component_message-hidden": !v && R }
                                ),
                                children: (0, f.jsxs)("div", {
                                  ref: w,
                                  children: [
                                    R &&
                                      !v &&
                                      (a ||
                                        (a = (0, f.jsx)("div", {
                                          className:
                                            "specs_component_transparent",
                                        }))),
                                    t.widget_specs.title &&
                                      (0, f.jsx)(_.G, {
                                        className: l()("compats-specs__title", {
                                          [`ui-pdp-color--${t.widget_specs.title.color}`]:
                                            t.widget_specs.title.color,
                                          [`ui-pdp-size--${t.widget_specs.title.font_size}`]:
                                            t.widget_specs.title.font_size,
                                          [`ui-pdp-family--${t.widget_specs.title.font_family}`]:
                                            t.widget_specs.title.font_family,
                                        }),
                                        as: "h4",
                                        text: t.widget_specs.title.text,
                                      }),
                                    t.widget_specs.specs_list.map((t) =>
                                      L(t, "p")
                                    ),
                                  ],
                                }),
                              }),
                              R &&
                                t.widget_specs.action &&
                                U(t.widget_specs.action),
                            ],
                          }),
                      ],
                    }),
                  t.type === h.VQ && M(t.widget_data),
                  t.type === h.I_ &&
                    (0, f.jsx)(
                      _.G,
                      {
                        className: `${o}__compats-disclaimer`,
                        as: "p",
                        text: y.I.jsx(t.title.text, e.values),
                      },
                      t.title.text
                    ),
                ],
              },
              t.type + N
            )
          ),
        });
      };
    },
    36794(t, e, o) {
      "use strict";
      o.d(e, { A: () => r });
      var a = o(96540),
        s = o(54036),
        c = o(43851),
        i = o(31041),
        n = o(74848);
      const r = (t) => {
        let {
          data: e,
          deviceType: o,
          onSubmitForm: r,
          onRemove: p,
          modifier: l,
        } = t;
        const d = (0, a.useMemo)(
          () => ("desktop" === o && e?.type === s.Me ? c.A : i.A),
          [o, e?.type]
        );
        return (0, n.jsx)(d, {
          ...e,
          onSubmitForm: r,
          onRemove: p,
          modifier: l,
        });
      };
    },
    83509(t, e, o) {
      "use strict";
      o.d(e, { Z: () => a.A });
      var a = o(7337);
    },
    33641(t, e, o) {
      "use strict";
      o.d(e, { A: () => r });
      o(18111), o(20116);
      var a = o(63950),
        s = o.n(a),
        c = o(54036),
        i = o(7337),
        n = o(74848);
      const r = (t) => {
        let {
          components: e = null,
          onSubmitForm: o = s(),
          onRemove: a = s(),
        } = t;
        const r = e?.find((t) => t.type === c.$q || t.type === c.VQ);
        return r
          ? (0, n.jsx)(i.A, {
              components: e,
              onSubmitForm: o,
              onRemove: a,
              namespace: "ui-pdp-compats",
              modifier: "mobile",
            })
          : null;
      };
    },
    33079(t, e, o) {
      "use strict";
      o.d(e, { E: () => a.A });
      var a = o(33641);
    },
    6529(t, e, o) {
      "use strict";
      o.d(e, { A: () => m });
      var a = o(46942),
        s = o.n(a),
        c = o(4177),
        i = o(55869),
        n = o(93603),
        r = o(16030),
        p = o(44489),
        l = o(74848);
      const d = "ui-compats-highlight-card",
        u = {},
        m = (t) => {
          let {
            classname: e = "",
            border_color: o = "BLUE",
            bg_color: a = "GRAY_40",
            title: m,
            action: _,
            icon: y = u,
            description: h,
          } = t;
          const T = (0, c.HZ)(),
            { staticProps: E } = T || {},
            { deviceType: f } = E || {},
            { url: A } = y,
            { track: S, target: I, label: g } = _,
            v = {},
            O = (t) => {
              t.preventDefault();
              const e = document.querySelector(`#${I}`);
              S && (0, p.sx)(S), e && e.scrollIntoView({ behavior: "smooth" });
            };
          "mobile" === f &&
            ((v.onClick = (t) => O(t)),
            (v.role = "button"),
            (v["data-testid"] = d));
          return (0, l.jsxs)("div", {
            ...v,
            className: s()(d, `${d}--${o}`, `ui-pdp-background-color--${a}`),
            children: [
              (0, l.jsxs)("div", {
                className: s()(`${d}__title`, e),
                children: [
                  (0, l.jsx)(i._V, {
                    alt: "",
                    src: A?.src,
                    className: `${e}-icon`,
                  }),
                  (0, l.jsx)(
                    n.G,
                    {
                      className: s()(`${e}__text`, {
                        [`ui-pdp-color--${m.color}`]: m.color,
                        [`ui-pdp-size--${m.font_size}`]: m.font_size,
                        [`ui-pdp-family--${m.font_family}`]: m.font_family,
                      }),
                      as: "p",
                      text: r.I.jsx(m.text, m.values),
                    },
                    m.text
                  ),
                ],
              }),
              (0, l.jsx)("div", {
                className: `${d}__description`,
                children: (0, l.jsx)(
                  n.G,
                  {
                    className: s()({
                      [`ui-pdp-color--${h.color}`]: h.color,
                      [`ui-pdp-size--${h.font_size}`]: h.font_size,
                      [`ui-pdp-family--${h.font_family}`]: h.font_family,
                    }),
                    as: "p",
                    text: r.I.jsx(h.text, h.values),
                  },
                  h.text
                ),
              }),
              _ &&
                g &&
                ("mobile" === f
                  ? (0, l.jsx)("div", {
                      className: s()(`${d}__action`, {
                        [`ui-pdp-color--${g.color}`]: g.color,
                        [`ui-pdp-size--${g.font_size}`]: g.font_size,
                        [`ui-pdp-family--${g.font_family}`]: g.font_family,
                      }),
                      children: g.text,
                    })
                  : (0, l.jsx)("a", {
                      href: `#${I}`,
                      role: "button",
                      "data-testid": d,
                      className: s()(`${d}__action`, {
                        [`ui-pdp-color--${g.color}`]: g.color,
                        [`ui-pdp-size--${g.font_size}`]: g.font_size,
                        [`ui-pdp-family--${g.font_family}`]: g.font_family,
                      }),
                      onClick: O,
                      children: g.text,
                    })),
            ],
          });
        };
    },
    24936(t, e, o) {
      "use strict";
      o.d(e, { A: () => n });
      var a = o(6529),
        s = o(53534),
        c = o(74848);
      const i = "ui-compats-highlight",
        n = (t) => {
          const { type: e = null } = t;
          switch (e) {
            case "highlight_notes":
              return (0, c.jsx)(a.A, { classname: i, ...t });
            case "composed_highlight":
              return (0, c.jsx)(s.A, { classname: i, ...t });
            default:
              return null;
          }
        };
    },
    53534(t, e, o) {
      "use strict";
      o.d(e, { A: () => _ });
      var a = o(96540),
        s = o(46942),
        c = o.n(s),
        i = o(4177),
        n = o(55869),
        r = o(93603),
        p = o(16030),
        l = o(15841),
        d = o(44489),
        u = o(74848);
      const m = "mobile",
        _ = (t) => {
          let {
            title: e = null,
            action: o = null,
            icon: s = null,
            tooltip: _ = null,
            classname: y = null,
          } = t;
          const h = (0, i.HZ)(),
            { staticProps: T } = h || {},
            { deviceType: E } = T || {},
            { target: f, track: A } = o || {},
            {
              text: S,
              values: I,
              color: g,
              font_size: v,
              font_family: O,
            } = e || {},
            { url: R } = s || {},
            { andes_tooltip: C } = _ || {},
            [N, x] = (0, a.useState)("VISIBLE" === C?.state),
            w = {
              id: C?.id,
              content: C?.body?.text,
              closable: C?.closeable,
              visible: N,
              offsetY: E === m ? 5 : 0,
              storable: C?.storable,
              side: C?.tooltip_location?.toLowerCase(),
              type: C?.tooltip_type?.toLowerCase(),
              trigger: "no-trigger",
              zIndex: E === m ? 1080 : 1,
              onClose: () => x(!1),
            };
          return (0, u.jsxs)("div", {
            className: y,
            "data-testid": y,
            children: [
              (0, u.jsx)(n._V, {
                alt: "",
                src: R?.src,
                className: `${y}-icon`,
              }),
              (0, u.jsx)(l.m_, {
                ...w,
                className: `${y}__tooltip-compats`,
                children: (0, u.jsx)(
                  r.G,
                  {
                    className: c()(`${y}__text`, {
                      [`ui-pdp-color--${g}`]: g,
                      [`ui-pdp-size--${v}`]: v,
                      [`ui-pdp-family--${O}`]: O,
                    }),
                    onClick:
                      o &&
                      ((t) => {
                        t.preventDefault();
                        const e = document.querySelector(`#${f}`);
                        A && (0, d.sx)(A),
                          e && e.scrollIntoView({ behavior: "smooth" });
                      }),
                    as: "p",
                    text: p.I.jsx(S, I),
                  },
                  S
                ),
              }),
            ],
          });
        };
    },
    3172(t, e, o) {
      "use strict";
      o.d(e, { f0: () => a.A });
      var a = o(24936);
      o(53534), o(6529);
    },
    16862(t, e, o) {
      "use strict";
      o.d(e, { A: () => d });
      var a = o(96540),
        s = o(63950),
        c = o.n(s),
        i = o(46942),
        n = o.n(i),
        r = o(4989),
        p = o(44489),
        l = o(74848);
      const d = (t) => {
        let {
          type: e = "neutral",
          text: o = null,
          title: s = null,
          hierarchy: i = "quiet",
          closeable: d = !0,
          bgColor: u = null,
          className: m = "",
          state: _ = "HIDDEN",
          isOfficialStore: y = !1,
          onClose: h = c(),
        } = t;
        const [T, E] = (0, a.useState)("VISIBLE" === _),
          [f, A] = (0, a.useState)(null),
          [S, I] = (0, a.useState)(null);
        return (
          (0, a.useEffect)(() => {
            A(
              document.querySelector(
                ".ui-pdp-container__row--compats-feedback .andes-message__close--neutral"
              )
            ),
              I(
                document.querySelector(
                  ".ui-vip-grouped-header__header--with-compats"
                )
              );
            const t = { state: "HIDDEN", id: "compats_feedback" },
              e = () => {
                E(!1),
                  h(t),
                  S &&
                    S.classList.remove(
                      "ui-vip-grouped-header__header--with-compats"
                    );
              };
            return (
              f && f.addEventListener("click", e),
              () => {
                f && f.removeEventListener("click", e);
              }
            );
          }, [f, S, h]),
          T &&
            (0, l.jsx)("div", {
              className: n()(
                "ui-pdp-container__row",
                "ui-pdp-container__row--compats-feedback",
                { "ui-pdp-compats--store": y }
              ),
              children: (0, l.jsx)(r.Message, {
                color: (0, p.td)(e),
                text: o,
                title: s,
                hierarchy: i,
                closeable: d,
                bgColor: u,
                className: m,
              }),
            })
        );
      };
    },
    67665(t, e, o) {
      "use strict";
      o.d(e, { q: () => a.A });
      var a = o(16862);
    },
    23857(t, e, o) {
      "use strict";
      o(74423), o(96540), o(46942), o(44489), o(6176), o(74848);
    },
    99511(t, e, o) {
      "use strict";
      o.d(e, { A: () => _ });
      var a = o(96540),
        s = o(63950),
        c = o.n(s),
        i = o(46942),
        n = o.n(i),
        r = o(49868),
        p = o(44489),
        l = o(4177),
        d = o(6176),
        u = o(54036),
        m = o(74848);
      const _ = (t) => {
        let { onSubmitForm: e = c(), onRemove: o = c(), ...s } = t;
        const i = (0, a.useRef)(null),
          _ = (0, l.HZ)(),
          { staticProps: y } = _ || {},
          { deviceType: h } = y || {},
          [T] = (0, d.p)(i),
          { isWidgetStick: E = !0, type: f = "" } = s;
        return (
          (0, a.useEffect)(() => {
            (0, p.a6)(u.At);
          }, []),
          s &&
            (0, m.jsx)("div", {
              className: n()(
                { "ui-pdp-container__row--compats-widget-sticky": E },
                {
                  "ui-pdp-compats--intersecting": T,
                  "ui-pdp-compats--relative": !T,
                },
                { "ui-pdp-compats--message": f === u.O4 }
              ),
              id: "compats-widget-top",
              ref: i,
              children: (0, m.jsx)(r.y, {
                ...s,
                onSubmitForm: (t, o) => e(t, o, h),
                onRemove: () => o(h),
              }),
            })
        );
      };
    },
    48675(t, e, o) {
      "use strict";
      o.d(e, { A: () => a.A });
      o(23857);
      var a = o(99511);
    },
    46142(t, e, o) {
      "use strict";
      o.d(e, { A: () => p });
      var a = o(46942),
        s = o.n(a),
        c = o(16030),
        i = o(93603),
        n = o(74848);
      const r = "ui-pdp-title",
        p = (t) => {
          let { className: e = "", title: o, compats: a = null } = t;
          const {
            text: p,
            values: l,
            color: d,
            font_size: u,
            font_family: m,
          } = a || {};
          return (0, n.jsxs)("h1", {
            className: s()(r, e),
            children: [
              o,
              a &&
                (0, n.jsx)(
                  i.G,
                  {
                    className: s()(`${r}__text`, {
                      [`ui-pdp-color--${d}`]: d,
                      [`ui-pdp-size--${u}`]: u,
                      [`ui-pdp-family--${m}`]: m,
                    }),
                    font_family: null,
                    as: "span",
                    text: c.I.jsx(p, l),
                  },
                  p
                ),
            ],
          });
        };
    },
    60358(t, e, o) {
      "use strict";
      o.d(e, { o: () => a.A });
      var a = o(46142);
    },
    50736(t, e, o) {
      "use strict";
      o.d(e, { Ar: () => i.A, Eh: () => a.E, ZH: () => s.Z, qu: () => c.q });
      var a = o(33079),
        s = o(83509),
        c = (o(60358), o(67665)),
        i = (o(3172), o(48675));
    },
    54036(t, e, o) {
      "use strict";
      o.d(e, {
        $q: () => s,
        At: () => n,
        I_: () => i,
        Me: () => p,
        O4: () => r,
        VQ: () => c,
        kK: () => a,
      });
      const a = {
          COMPATS_TITLE: "compats-title",
          CHILDREN: "children",
          HIGHLIGHTS: "highlights",
        },
        s = "compats_widget_block",
        c = "compats_widget_sticky",
        i = "composed_highlight",
        n = "backend_dejavu_info",
        r = "COMPATS_MESSAGE",
        p = "COMPATS_CUSTOM";
    },
    45248(t, e, o) {
      "use strict";
      o(6176);
    },
    6176(t, e, o) {
      "use strict";
      o.d(e, { U: () => c, p: () => s });
      var a = o(96540);
      const s = (t) => {
          const [e, o] = (0, a.useState)(),
            [s, c] = (0, a.useState)(),
            [i, n] = (0, a.useState)(!1),
            [r, p] = (0, a.useState)(!1),
            l = (0, a.useCallback)(() => {
              const o = t?.current?.offsetTop;
              c(o),
                r ||
                  (window.requestAnimationFrame(() => {
                    n(s > e), p(!1);
                  }),
                  p(!0));
            }, [t, e, s, r]);
          return (
            (0, a.useEffect)(() => {
              o(t?.current?.offsetTop);
            }, [t]),
            (0, a.useEffect)(
              () => (
                window.addEventListener("scroll", l),
                () => {
                  window.removeEventListener("scroll", l);
                }
              ),
              [l]
            ),
            [i]
          );
        },
        c = (t, e) => {
          const [o, s] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              const o = () => {
                if (e) {
                  const e = t.current;
                  if (e) {
                    const t = e.getBoundingClientRect();
                    s(t.top <= 0);
                  }
                }
              };
              return (
                o(),
                window.addEventListener("scroll", o),
                () => {
                  window.removeEventListener("scroll", o);
                }
              );
            }, [e, t]),
            [o]
          );
        };
    },
    57599(t, e, o) {
      "use strict";
      o.d(e, {
        Ar: () => a.Ar,
        Eh: () => a.Eh,
        Pt: () => s.P,
        ZH: () => a.ZH,
        qu: () => a.qu,
      });
      var a = o(50736),
        s = o(61876);
      o(45248);
    },
    14005(t, e, o) {
      "use strict";
      o.d(e, { A: () => a });
      const a = (t) => {
        const { title: e, titleClassName: o, title_compats: a } = t;
        return { title: e, compats: a, className: o };
      };
    },
    48703(t, e, o) {
      "use strict";
      var a = o(27876),
        s = o(44489),
        c = o(64301),
        i = o(60358),
        n = o(3172),
        r = o(54036),
        p = o(14005),
        l = o(56816),
        d = o(77390),
        u = o(13319);
      const { Ub: m } = a.AA,
        { OWNERSHIPS: _ } = s.AA,
        { MAIN: y } = m,
        { TITLE_CONTAINER: h, COMPATS: T } = c.Ov,
        { COMPATS_TITLE: E, HIGHLIGHTS: f } = r.kK;
      d.A, u.A, i.o, p.A, l.A, n.f0, _.COMPATS;
    },
    56816(t, e, o) {
      "use strict";
      o.d(e, { A: () => s });
      o(18111), o(61701);
      var a = o(64301);
      const s = (t) => {
        const { highlights: e } = t;
        return {
          list: e?.map((t) => ({
            type: a.Ov.COMPATS,
            id: t.id,
            props: { ...t },
          })),
        };
      };
    },
    96732(t, e, o) {
      "use strict";
      o.d(e, { P: () => a.P });
      o(48703);
      var a = o(62235);
    },
    77390(t, e, o) {
      "use strict";
      o.d(e, { A: () => i });
      o(18111), o(61701);
      var a = o(27876),
        s = o(64301);
      const { II: c } = a.AA,
        i = (t) => {
          const { list: e, highlights: o, title_compats: i } = t,
            n = { type: s.Ov.HIGHLIGHTS, props: { highlights: o }, show: !!o };
          return {
            list: a.B8.addElement(e, n, c.BEFORE, s.Ov.BOTTOM_SUBTITLE).map(
              (t) =>
                t.type === s.Ov.TITLE_CONTAINER
                  ? { ...t, props: { ...t.props, title_compats: i } }
                  : t
            ),
          };
        };
    },
    84392(t, e, o) {
      "use strict";
      o.d(e, { A: () => i });
      var a = o(27876),
        s = o(64301);
      const { II: c } = a.AA,
        i = (t) => {
          const { list: e, title: o, title_compats: i, highlights: n } = t,
            r = {
              type: s.Ov.COMPATS_TITLE,
              props: { title: o, title_compats: i },
              show: !!i,
            },
            p = { type: s.Ov.HIGHLIGHTS, props: { highlights: n }, show: !!n },
            l = a.B8.addElement(e, p, c.BEFORE, s.Ov.BOTTOM_SUBTITLE),
            d = a.B8.replaceElement(l, r, s.Ov.TITLE);
          return { list: i ? d : l };
        };
    },
    62235(t, e, o) {
      "use strict";
      o.d(e, { P: () => E });
      var a = o(27876),
        s = o(44489),
        c = o(64301),
        i = o(60358),
        n = o(3172),
        r = o(54036),
        p = o(14005),
        l = o(56816),
        d = o(84392);
      const { Ub: u } = a.AA,
        { OWNERSHIPS: m } = s.AA,
        { MAIN: _ } = u,
        { COMPATS_TITLE: y, HIGHLIGHTS: h } = r.kK,
        { COMPATS: T } = c.Ov,
        E = {
          resolver: (t) => {
            const { highlights: e, title_compats: o } = t;
            return e || o;
          },
          definitions: {
            [_]: { mappers: [d.A] },
            [y]: { component: i.o, mappers: [p.A] },
            [h]: { mappers: [l.A] },
            [T]: { component: n.f0 },
          },
          ownership: m.COMPATS,
          id: "compats",
        };
    },
    13319(t, e, o) {
      "use strict";
      o.d(e, { A: () => i });
      var a = o(64301),
        s = o(27876),
        c = o(54036);
      const i = (t) => {
        const { list: e, title: o, titleClassName: i, title_compats: n } = t;
        if (!n) return {};
        const r = {
          type: c.kK.COMPATS_TITLE,
          props: { title: o, titleClassName: i, title_compats: n },
          show: !!n,
        };
        return { list: s.B8.replaceElement(e, r, a.Ov.TITLE) };
      };
    },
    61876(t, e, o) {
      "use strict";
      o.d(e, { P: () => a.P });
      var a = o(96732);
    },
    87924(t, e, o) {
      "use strict";
      o.d(e, { A: () => i });
      var a = o(55378),
        s = o.n(a),
        c = o(6203);
      const i = (t) => {
        let { picture_config: e, elements: o } = t;
        const {
          template: a,
          template_thumbnail: i,
          template_thumbnail_2x: n,
        } = e;
        return s()(o, (t) => ({
          ...t,
          picture: {
            ...t.picture,
            width: t.picture?.width || 500,
            height: t.picture?.height || 500,
            src: (0, c.Gn)(t.picture?.id, a),
            thumbnail: {
              src: (0, c.Gn)(t.picture?.id, i),
              src2x: n ? (0, c.Gn)(t.picture?.id, n) : null,
            },
          },
        }));
      };
    },
    7902(t, e, o) {
      "use strict";
      o.d(e, { x: () => s });
      o(18111), o(18237);
      var a = o(87924);
      const s = (t, e) =>
        (0, a.A)({ elements: t, picture_config: e }).reduce(
          (t, e) => (
            (t[e.model_id] = t[e.model_id] || []), t[e.model_id].push(e), t
          ),
          Object.create(null)
        );
    },
    76508(t, e, o) {
      "use strict";
      o.d(e, { LD: () => c, QW: () => a, WC: () => s });
      const a = {
          PRELOGIN: "prelogin",
          SHIELD: "unregisteredShield",
          ACCESS: "unregisteredAccess",
        },
        s = "isPosting",
        c = {
          PRECONDITION_FAILED: "precondition_failed",
          QUOTATION_LIMIT_REACHED: "quotation_limit_reached",
        };
    },
    31088(t, e, o) {
      "use strict";
      o.d(e, { Ie: () => d, Rs: () => u, Sy: () => m });
      o(69112), o(33110);
      var a = o(62193),
        s = o.n(a),
        c = o(45965);
      const i = "unregistered-contact-form",
        n = {
          name: "contactUserFirstName",
          last_name: "contactUserLastName",
          phone: "contactUserPhoneNumber",
          email: "contactUserEmail",
          question: "questionTextInput",
        },
        r = () => {
          const t = localStorage.getItem(i);
          if (s()(t)) return {};
          let e;
          try {
            e = JSON.parse(t);
          } catch (t) {
            e = {};
          }
          return e;
        },
        p = (t, e) => {
          const o = n[`${t}`];
          if (o) {
            const t = r();
            (t[`${o}`] = e), localStorage.setItem(i, JSON.stringify(t));
          }
        },
        l = (t) => {
          const e = r();
          return s()(e) ? null : e[`${n[`${t}`]}`];
        },
        d = (t) => {
          let { input: e } = t;
          const { name: o, last_name: a, phone: s, email: i, question: n } = e;
          (0, c.p)() &&
            (p("name", (o && o.value) || ""),
            p("last_name", (a && a.value) || ""),
            p("email", (i && i.value) || ""),
            p("phone", (s && s.value) || ""),
            p("question", (n && n.value) || ""));
        },
        u = (t, e) => {
          if ((0, c.p)()) {
            const o = l(t);
            return s()(o) || "null" === o ? e : o;
          }
          return e;
        },
        m = (t) => {
          if ((0, c.p)()) {
            const e = l(t.nameField),
              o = u(t.lastNameField),
              a = u(t.emailField);
            return !!(e && o && a);
          }
          return !1;
        };
    },
    12441(t, e, o) {
      "use strict";
      o.r(e), o.d(e, { default: () => h });
      var a = o(64270),
        s = o(46191),
        c = o(72127),
        i = o(44489),
        n = o(3586),
        r = o(89918),
        p = o(68952);
      const l = "header",
        d = (0, i.Zz)(
          (0, s.A)(l),
          (0, n.A)(l),
          (0, a.A)(
            (t, e) => {
              let {
                components: { [l]: o },
                id: a,
                history: s,
              } = t;
              return {
                ...o,
                ...e,
                statics: { namespace: "ui-pdp-header", featureName: l },
                reviewsIframeId: s?.parent_product_id ?? a,
                sendMamushkaMetrics: r.A,
              };
            },
            (t) => ({
              onScrollComponent: (e) => {
                let { component: o, focus: a } = e;
                return t(c.qE({ component: o, focus: a }));
              },
            }),
            { standard: p.b.MAMUSHKA }
          )
        );
      var u = o(27876),
        m = o(57599),
        _ = o(6357),
        y = o(64301);
      const h = d((0, u.hn)(m.Pt, y.i4, _.r0)(y.MK));
    },
    49522(t, e, o) {
      "use strict";
      o.r(e), o.d(e, { default: () => _ });
      var a = o(64270),
        s = o(46191),
        c = o(44489),
        i = o(68952),
        n = o(89918);
      const r = "header",
        p = (0, c.Zz)(
          (0, s.A)(r),
          (0, a.A)(
            (t, e) => {
              let {
                components: { [r]: o },
              } = t;
              return {
                ...o,
                ...e,
                statics: { namespace: "ui-pdp-header", featureName: r },
                sendMamushkaMetrics: n.A,
              };
            },
            void 0,
            { standard: i.b.MAMUSHKA }
          )
        );
      var l = o(27876),
        d = o(57599),
        u = o(6357),
        m = o(64301);
      const _ = p((0, l.hn)(d.Pt, m.i4, u.r0)(m.MK));
    },
    76177(t, e, o) {
      "use strict";
      o.d(e, { r: () => s, w: () => a });
      o(14603), o(47566), o(98721);
      const a = "lead_modal=show",
        s = function () {
          let { withRerender: t = !1 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if ("undefined" == typeof window) return;
          const e = new URLSearchParams(window.location.hash.replace(/^#/, ""));
          e.set("lead_modal", "show");
          const o = `#${e.toString()}`;
          if (t) window.location.hash = o;
          else {
            const t = new URL(window.location.href);
            (t.hash = o), window.history.pushState(null, "", t.href);
          }
        };
    },
    55378(t) {
      t.exports = function (t, e) {
        for (var o = -1, a = null == t ? 0 : t.length, s = Array(a); ++o < a; )
          s[o] = e(t[o], o, t);
        return s;
      };
    },
  },
]);
//# sourceMappingURL=header-mobile.51780542.js.map
