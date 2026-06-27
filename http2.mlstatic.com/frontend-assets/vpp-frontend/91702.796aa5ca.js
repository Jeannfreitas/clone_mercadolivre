"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [91702],
  {
    91702(e, o, n) {
      n.d(o, {
        BL: () => T,
        EL: () => Te,
        Mg: () => Se,
        QA: () => ve,
        VR: () => he,
        ZO: () => re,
        bL: () => Re,
        eV: () => G,
        gb: () => pe,
        hz: () => Ie,
        ii: () => R,
        is: () => Oe,
        sP: () => Me,
        sz: () => _e,
        tR: () => ie,
        v$: () => be,
        vZ: () => ce,
        xX: () => ne,
      });
      var r = n(80296),
        t = n(89379),
        a = n(80045),
        i = n(96540),
        c = n(18988),
        l = n(27786),
        s = n(91212),
        d = n(10467),
        m = n(45458),
        u = n(89557),
        v = n(23029),
        p = n(92901),
        f = n(74848),
        b = n(64467),
        _ = n(46942),
        h = n.n(_),
        w = n(61678),
        y = n(37808),
        g = n(82284),
        A = n(62193),
        k = n.n(A),
        x = n(23805),
        D = n.n(x),
        C = n(14269),
        T = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            o = e.externalRef,
            n = void 0 === o ? null : o,
            t = e.rootMargin,
            a = void 0 === t ? "0px" : t,
            c = e.threshold,
            l = void 0 === c ? 0.1 : c,
            s = e.once,
            d = void 0 !== s && s,
            m = e.startOff,
            u = void 0 !== m && m,
            v = e.fallbackValue,
            p = void 0 !== v && v,
            f = (0, i.useState)(!1),
            b = (0, r.A)(f, 2),
            _ = b[0],
            h = b[1],
            w = (0, i.useRef)(),
            y = (0, i.useRef)(null),
            g = (0, i.useRef)(function (e, o) {
              return new IntersectionObserver(e, o);
            }),
            A = g.current,
            k = (0, i.useRef)(function (e) {
              var o = e.observer,
                n = void 0 === o ? y.current : o;
              n && n.disconnect();
            }).current,
            x = (0, i.useRef)(function (e) {
              var o = e.observer,
                n = void 0 === o ? y.current : o,
                r = e.element;
              n && r && n.observe(r);
            }).current,
            D = (0, i.useRef)(function (e) {
              var o = e.observer,
                n = void 0 === o ? y.current : o,
                r = e.element;
              n && r && n.unobserve(r);
            }).current;
          return (
            (0, i.useEffect)(
              function () {
                var e = n ? n.current : w.current;
                if (globalThis.IntersectionObserver) {
                  (y.current = A(
                    function (o, n) {
                      o[0].isIntersecting
                        ? (h(!0), d && D({ observer: n, element: e }))
                        : h(!1);
                    },
                    { rootMargin: a, threshold: l }
                  )),
                    u || x({ observer: y.current, element: e });
                } else h(p);
                return function () {
                  k({ observer: y.current });
                };
              },
              [a, l, n, d, u, A, x, D, k, p]
            ),
            {
              isOnViewport: _,
              setIsOnViewport: h,
              fromRef: w,
              observer: y.current,
              initObserver: A,
              disconnectObserver: k,
              observeElement: x,
              unobserveElement: D,
            }
          );
        },
        I = new Promise(function (e) {
          e(!0);
        }),
        P = {
          MLA: {
            url: {
              mainDomain: "mercadolibre.com.ar",
              baseDomain: "//www.mercadolibre.com.ar",
            },
            mp_url: {
              mainDomain: "mercadopago.com.ar",
              baseDomain: "//www.mercadopago.com.ar",
            },
          },
          MPE: {
            url: {
              mainDomain: "mercadolibre.com.pe",
              baseDomain: "//www.mercadolibre.com.pe",
            },
            mp_url: {
              mainDomain: "mercadopago.com.pe",
              baseDomain: "//www.mercadopago.com.pe",
            },
          },
          MPT: {
            url: {
              mainDomain: "mercadolivre.pt",
              baseDomain: "//www.mercadolivre.pt",
            },
            mp_url: {},
          },
          MRD: {
            url: {
              mainDomain: "mercadolibre.com.do",
              baseDomain: "//www.mercadolibre.com.do",
            },
            mp_url: {},
          },
          MPA: {
            url: {
              mainDomain: "mercadolibre.com.pa",
              baseDomain: "//www.mercadolibre.com.pa",
            },
            mp_url: {},
          },
          MEC: {
            url: {
              mainDomain: "mercadolibre.com.ec",
              baseDomain: "//www.mercadolibre.com.ec",
            },
            mp_url: {
              mainDomain: "mercadopago.com.ec",
              baseDomain: "//www.mercadopago.com.ec",
            },
          },
          MCR: {
            url: {
              mainDomain: "mercadolibre.co.cr",
              baseDomain: "//www.mercadolibre.co.cr",
            },
            mp_url: {},
          },
          MLU: {
            url: {
              mainDomain: "mercadolibre.com.uy",
              baseDomain: "//www.mercadolibre.com.uy",
            },
            mp_url: {
              mainDomain: "mercadopago.com.uy",
              baseDomain: "//www.mercadopago.com.uy",
            },
          },
          MLM: {
            url: {
              mainDomain: "mercadolibre.com.mx",
              baseDomain: "//www.mercadolibre.com.mx",
            },
            mp_url: {
              mainDomain: "mercadopago.com.mx",
              baseDomain: "//www.mercadopago.com.mx",
            },
          },
          MLC: {
            url: {
              mainDomain: "mercadolibre.cl",
              baseDomain: "//www.mercadolibre.cl",
            },
            mp_url: {
              mainDomain: "mercadopago.cl",
              baseDomain: "//www.mercadopago.cl",
            },
          },
          MCO: {
            url: {
              mainDomain: "mercadolibre.com.co",
              baseDomain: "//www.mercadolibre.com.co",
            },
            mp_url: {
              mainDomain: "mercadopago.com.co",
              baseDomain: "//www.mercadopago.com.co",
            },
          },
          MLV: {
            url: {
              mainDomain: "mercadolibre.com.ve",
              baseDomain: "//www.mercadolibre.com.ve",
            },
            mp_url: {
              mainDomain: "mercadopago.com.ve",
              baseDomain: "//www.mercadopago.com.ve",
            },
          },
          MLB: {
            url: {
              mainDomain: "mercadolivre.com.br",
              baseDomain: "//www.mercadolivre.com.br",
            },
            mp_url: {
              mainDomain: "mercadopago.com.br",
              baseDomain: "//www.mercadopago.com.br",
            },
          },
          MBO: {
            url: {
              mainDomain: "mercadolibre.com.bo",
              baseDomain: "//www.mercadolibre.com.bo",
            },
            mp_url: {},
          },
          MPY: {
            url: {
              mainDomain: "mercadolibre.com.py",
              baseDomain: "//www.mercadolibre.com.py",
            },
            mp_url: {},
          },
          MGT: {
            url: {
              mainDomain: "mercadolibre.com.gt",
              baseDomain: "//www.mercadolibre.com.gt",
            },
            mp_url: {},
          },
          MHN: {
            url: {
              mainDomain: "mercadolibre.com.hn",
              baseDomain: "//www.mercadolibre.com.hn",
            },
            mp_url: {},
          },
          MNI: {
            url: {
              mainDomain: "mercadolibre.com.ni",
              baseDomain: "//www.mercadolibre.com.ni",
            },
            mp_url: {},
          },
          MSV: {
            url: {
              mainDomain: "mercadolibre.com.sv",
              baseDomain: "//www.mercadolibre.com.sv",
            },
            mp_url: {},
          },
          MCU: {
            url: {
              mainDomain: "mercadolibre.com.cu",
              baseDomain: "//www.mercadolibre.com.cu",
            },
            mp_url: {},
          },
        },
        R = function (e) {
          var o = e.componentProps,
            n = e.paramsToMap,
            r = {};
          return (
            n.forEach(function (e) {
              e in o && (r[e] = o[e]);
            }),
            r
          );
        },
        O = function (e, o) {
          for (var n = [], r = 0, t = e.length / o; r < t; r += 1) {
            var a = e.slice(o * r, o * (r + 1));
            n.push({
              elements: a,
              id: a
                .map(function (e) {
                  return e.id;
                })
                .join("-"),
            });
          }
          return n;
        },
        S = "/recommendations",
        M = "https://www.mercadolibre.com.ar",
        j = "https://www.mercadopago.com.ar",
        E = {
          timeout: 3e4,
          baseURL: M,
          withCredentials: !0,
          sendCSRFToken: !1,
        },
        N = (0, u.RestClient)(E),
        V = { "x-card-type": "web", "x-recosplugin-version": "###VERSION###" },
        L = { "x-card-type": "polycard" },
        z = ["site_id", "client"],
        B = ["lazyLoad", "addToCartPublicEndpoint", "csrfToken"],
        F = function (e) {
          return "MS" === e.site_platform || "PI" === e.site_platform
            ? "https://".concat(e.host_rewrite)
            : null === P[e.site_id] || void 0 === P[e.site_id]
            ? "MP" === e.site_platform
              ? j
              : M
            : "MP" === e.site_platform
            ? P[e.site_id].mp_url.baseDomain
              ? "https:".concat(P[e.site_id].mp_url.baseDomain)
              : j
            : "https:".concat(P[e.site_id].url.baseDomain);
        },
        U = function (e) {
          for (var o = 0; o < z.length; o++)
            if (!e[z[o]] || void 0 === e[z[o]] || null === e[z[o]]) return !1;
          return !0;
        },
        q = function (e, o, n) {
          var r,
            a,
            i,
            c,
            l = o.title || e.title || "",
            s = o.titleWithIcons || e.title_with_icons,
            d = o.titleTag || e.title_tag,
            u = o.subtitle || e.subtitle,
            v = o.footer || e.footer,
            p = o.href || e.href,
            f = o.prevItems || [],
            b =
              (null === (r = e.recommendation_info) || void 0 === r
                ? void 0
                : r.recommendations) ||
              (null === (a = e.recommendation_info) || void 0 === a
                ? void 0
                : a.polycards) ||
              [],
            _ =
              (null === (i = e.recommendation_info) || void 0 === i
                ? void 0
                : i.polycard_context) || {},
            h = o.multipleRows || !1,
            w = e.class_name,
            y = o.itemImagesToPreload || e.itemImagesToPreload,
            g = o.fetchPriority || e.fetchPriority || "auto",
            A = e.tracking || {
              event_data: {
                recommendations: {
                  client: o.client,
                  has_errors: !0,
                  track_info: {},
                },
              },
            };
          e.advertising_info && (A.advertising_info = e.advertising_info);
          var k = e.message || !1,
            x = o.viewMoreAction || e.view_more_action || void 0,
            D =
              o.carouselType ||
              (null === (c = e.recommendation_info) || void 0 === c
                ? void 0
                : c.carousel_type) ||
              e.carousel_type;
          b.length < 1 &&
            o.onCarouselIsEmpty &&
            "function" == typeof o.onCarouselIsEmpty &&
            o.onCarouselIsEmpty(),
            o.onDataReceived &&
              "function" == typeof o.onDataReceived &&
              o.onDataReceived(e);
          var C = [].concat((0, m.A)(f), (0, m.A)(b)).map(function (e, n) {
            var r = n + 1 <= y;
            return (0,
            t.A)((0, t.A)((0, t.A)({}, R({ componentProps: o, paramsToMap: B })), {}, { track_info: A }, e), {}, { preload: r, fetchPriority: (r && g) || void 0 });
          });
          return {
            title: l,
            titleWithIcons: s,
            titleTag: d,
            subtitle: u,
            footer: v,
            items: h ? O(C, h) : C,
            track: A,
            href: p,
            message: k,
            carouselType: D,
            viewMoreAction: x,
            carouselId: n,
            classnameFromResponse: w,
            polycardContext: _,
          };
        },
        H = (function () {
          var e = (0, d.A)(
            (0, s.A)().m(function e(o, n, r) {
              var a, i, c, l;
              return (0, s.A)().w(
                function (e) {
                  for (;;)
                    switch ((e.p = e.n)) {
                      case 0:
                        if (
                          ((a = r ? "/recommendations/v2" : S),
                          (i = r ? L : V),
                          (e.p = 1),
                          (c = (0, t.A)((0, t.A)({}, i), n)),
                          U((0, t.A)({ user_id: o.userId }, o)))
                        ) {
                          e.n = 3;
                          break;
                        }
                        return (
                          (e.n = 2),
                          Promise.reject(
                            Error("Some required fields are missing.")
                          )
                        );
                      case 2:
                      case 4:
                        return e.a(2, e.v);
                      case 3:
                        return (
                          (e.n = 4),
                          I.then(function (e) {
                            return (
                              (c["x-image-webp"] = e),
                              N.get(a, {
                                params: o,
                                headers: c,
                                baseURL: F(o),
                              }).catch(function () {})
                            );
                          }).catch(function () {})
                        );
                      case 5:
                        return (e.p = 5), (l = e.v), e.a(2, Promise.reject(l));
                    }
                },
                e,
                null,
                [[1, 5]]
              );
            })
          );
          return function (o, n, r) {
            return e.apply(this, arguments);
          };
        })(),
        W = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          try {
            var o;
            if (e.env) return e.env;
            if (null !== (o = document) && void 0 !== o && o.cookie) {
              var n = document.cookie.split(";").find(function (e) {
                return "meliLab" === e.split("=")[0].trim();
              });
              if (n) {
                var r = n.split("=")[1].trim(),
                  t = {
                    recosreact: "test0",
                    recos: "test",
                    release: "testrelease",
                  };
                if (r in t) return t[r];
                if (/recos-([0-9]*)/.exec(r))
                  return "test".concat(r.split("-")[1]);
              }
            }
          } catch (e) {
            console &&
              console.info("Recommendations - Cannot get lab info.", e);
          }
        },
        G = Object.freeze({
          __proto__: null,
          API_PATH: S,
          FALLBACK_URL: M,
          addToCart: function (e, o) {
            var n,
              r = {
                baseURL:
                  (null === (n = window) ||
                  void 0 === n ||
                  null === (n = n.location) ||
                  void 0 === n
                    ? void 0
                    : n.origin) || "",
                maxRedirects: 0,
                method: "post",
                responseType: "json",
                sendCSRFToken: !0,
                timeout: 25e3,
              };
            return (0, u.RestClient)(r).post(e, {
              headers: { "Content-Type": "application/json" },
              data: o,
            });
          },
          fetchRecommendations: H,
          formatApiResponse: q,
          getHostname: F,
          getLab: W,
        }),
        K = function (e) {
          return [
            e.client,
            e.categoryId,
            e.productId,
            e.itemId,
            e.itemIds,
            e.variationId,
          ]
            .map(function (e) {
              return null != e && "" !== e ? e : "-";
            })
            .join("_");
        },
        Z = [
          "client",
          "limit",
          "host_rewrite",
          "site_platform",
          "web_device",
          "platform",
          "page",
          "positions",
          "machi_boost",
          "vid",
          "purchased_category",
          "q",
          "pads_vip_case",
          "min_recomms",
          "RECOMMENDED.force_categories",
          "RECOMMENDED.cnt",
          "ignore_min_reco_size",
          "webView",
          "picture_id",
          "bbw_ads",
          "include_only_flex",
          "buyer_location",
          "ads_vpp_tracking_id",
        ],
        Q = function (e) {
          var o = e.preloadId,
            n = e.onCarouselLoaded;
          o && document.getElementById(o).remove(),
            n && "function" == typeof n && n();
        },
        $ = function (e) {
          var o,
            n,
            a,
            c,
            l = (0, i.useState)(!1),
            s = (0, r.A)(l, 2),
            d = s[0],
            m = s[1],
            u = (0, i.useState)(null),
            v = (0, r.A)(u, 2),
            p = v[0],
            f = v[1],
            b = (0, i.useState)(K(e)),
            _ = (0, r.A)(b, 2),
            h = _[0],
            w = _[1],
            y = e.onCarouselIsEmpty,
            g = e.apiresponse,
            A = e.client,
            k = e.variationId,
            x = e.siteId,
            D = e.categoryId,
            C = e.itemId,
            T = e.itemIds,
            I = e.productId,
            P = e.d2Id,
            O = e.userId,
            S = e.sellerIds,
            M = e.itemsIds,
            j = e.platformId,
            E = e.platform,
            N = e.zipCode,
            V = e.zoneModels,
            L = e.web_device,
            z = e.stateId,
            B = e.encodedFilters,
            F = e.isPolycard,
            U = e.onDataReceived,
            G = e.webView,
            $ = e.usePolycardOrder,
            X = e.buyerLocation,
            Y = e.adsVppTrackingId;
          return g
            ? (0, i.useMemo)(
                function () {
                  var o = q(g, e, K(e));
                  return Q(e), o;
                },
                [
                  null === (o = g.recommendation_info) || void 0 === o
                    ? void 0
                    : o.recommendations,
                  null === (n = g.recommendation_info) || void 0 === n
                    ? void 0
                    : n.polycards,
                  null === (a = g.recommendation_info) ||
                  void 0 === a ||
                  null === (a = a.recommendations) ||
                  void 0 === a
                    ? void 0
                    : a.length,
                  null === (c = g.recommendation_info) ||
                  void 0 === c ||
                  null === (c = c.polycards) ||
                  void 0 === c
                    ? void 0
                    : c.length,
                ]
              )
            : ((0, i.useEffect)(
                function () {
                  if (!d || h !== K(e)) {
                    m(!0), w(K(e));
                    var o = (0, t.A)(
                        (0, t.A)({}, R({ componentProps: e, paramsToMap: Z })),
                        {},
                        {
                          site_id: x,
                          seller_ids: S,
                          category_id: D,
                          item_id: C,
                          item_ids: T,
                          product_id: I,
                          variation_id: k,
                          d2_id: P,
                          items_ids: M,
                          user_id: O,
                          platform_id: j,
                          use_polycard_order: $,
                          env: W(e),
                          "user-zip-code": N,
                          "user-buyer-zone": V,
                          "user-platform": E || L,
                          "user-state-id": z,
                          "user-encoded-filters": B,
                          buyer_location: X,
                          ads_vpp_tracking_id: Y,
                        }
                      ),
                      n = (0, t.A)(
                        (0, t.A)({}, G && { "x-client-name": "webview" }),
                        O && { "x-caller-id": O }
                      );
                    (n = Object.keys(n).length > 0 ? n : null),
                      H(o, n, F)
                        .then(function (o) {
                          f(q(o.data, e, K(e))), Q(e);
                        })
                        .catch(function () {
                          Q(e),
                            y && "function" == typeof y && y(),
                            U && "function" == typeof U && U(null),
                            f(void 0);
                        });
                  }
                },
                [d, h, x, D, C, T, I, P, e, y, A, k]
              ),
              p);
        },
        X = (0, u.RestClient)({
          baseURL: "https://www.mercadolibre.com.ar/",
          timeout: 3e4,
          sendCSRFToken: !1,
        }),
        Y = function (e) {
          if (!e)
            return (
              console.warn("Track Ads missing"),
              Promise.reject(Error("Track Ads missing"))
            );
          try {
            return X.get(e)
              .then(function () {
                return !0;
              })
              .catch(function () {
                return !1;
              });
          } catch (e) {
            return Promise.reject(e);
          }
        },
        J = "/recommendations",
        ee = "/combos",
        oe = (function () {
          function e() {
            (0, v.A)(this, e);
          }
          return (0, p.A)(e, null, [
            {
              key: "send",
              value: function (e) {
                var o =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = o.overridePath,
                  r = o.type,
                  t = void 0 === r ? "print" : r,
                  a = o.privateStream,
                  i = void 0 === a || a,
                  c = o.useBeacon,
                  l = e.event_data,
                  s = e.experiments,
                  d = e.experiment,
                  m = e.advertising_info,
                  u = {};
                "function" == typeof melidata &&
                  (melidata(
                    "print" === t ? "createEventTrack" : "createViewTrack",
                    u
                  ),
                  n
                    ? melidata("withPath", n, u)
                    : i
                    ? melidata("withPath", "".concat(J, "/").concat(t), u)
                    : melidata("withPath", "".concat(J), u),
                  melidata("withData", l, u),
                  i && melidata("withStream", "recommendations", u),
                  (d || s) && melidata("withExperiments", d || s, u),
                  c && (u.useBeacon = !0),
                  melidata("sendTrack", u),
                  "print" === t &&
                    i &&
                    null != m &&
                    m.print_url &&
                    Y(m.print_url));
              },
            },
            {
              key: "print",
              value: function (o) {
                e.send(o, { type: "print", privateStream: !0 });
              },
            },
            {
              key: "view",
              value: function (o) {
                e.send(o, { type: "view", privateStream: !0 });
              },
            },
            {
              key: "event",
              value: function (o) {
                e.send(o, { type: "event", privateStream: !0 });
              },
            },
            {
              key: "clickMore",
              value: function (o) {
                e.send(o, {
                  overridePath: "".concat(J, "/see_more"),
                  useBeacon: !1,
                  type: "event",
                  privateStream: !0,
                });
              },
            },
            {
              key: "requestIgnored",
              value: function (o) {
                var n = {
                  event_data: {
                    recommendations: {
                      client: o,
                      has_errors: !0,
                      hidden_by_client: !0,
                      track_info: {
                        has_recommendations: !1,
                        empty_result_cause: "SCROLLED_INTO_VIEWPORT",
                      },
                    },
                  },
                };
                e.send(n, {
                  overridePath: "".concat(J),
                  useBeacon: !1,
                  type: "event",
                  privateStream: !0,
                });
              },
            },
            {
              key: "addToCartCombo",
              value: function (o) {
                e.send(o, {
                  overridePath: "".concat(ee, "/add_to_cart"),
                  useBeacon: !0,
                  type: "print",
                  privateStream: !0,
                });
              },
            },
            {
              key: "checkedCombo",
              value: function (o) {
                e.send(o, {
                  overridePath: "".concat(ee, "/checked"),
                  useBeacon: !0,
                  type: "print",
                  privateStream: !0,
                });
              },
            },
            {
              key: "viewCombos",
              value: function (o) {
                e.send(o, {
                  overridePath: "".concat(ee, "/view_combos"),
                  useBeacon: !0,
                  type: "view",
                  privateStream: !0,
                });
              },
            },
          ]);
        })(),
        ne = oe,
        re = function () {
          var e = globalThis.requestIdleCallback
            ? requestIdleCallback
            : setTimeout;
          return {
            trackOnPrint: (0, i.useCallback)(
              function (o) {
                e(function () {
                  ne.print(o);
                });
              },
              [e]
            ),
          };
        },
        te = "print",
        ae = "view",
        ie = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            o = e.componentRef,
            n = void 0 === o ? null : o,
            r = e.trackingFunction,
            t = void 0 === r ? null : r,
            a = e.trackData,
            c = void 0 === a ? null : a,
            l = e.client,
            s = e.trackedOnViewClients,
            d = void 0 === s ? [] : s,
            u = e.setTrackedOnViewClients,
            v = void 0 === u ? null : u,
            p = e.shouldTrackOnView,
            f = void 0 !== p && p,
            b = e.onTrack,
            _ = e.id,
            h = Array.isArray(d) ? d.includes(l) : d,
            w = T({
              externalRef: n,
              rootMargin: "0px",
              threshold: 0.1,
              once: !0,
              startOff: h,
            }).isOnViewport,
            y =
              t ||
              function () {
                return ne.view.apply(ne, arguments);
              },
            g = globalThis.requestIdleCallback
              ? globalThis.requestIdleCallback.bind(globalThis)
              : setTimeout;
          (0, i.useEffect)(
            function () {
              globalThis.IntersectionObserver &&
                g(function () {
                  !h &&
                    w &&
                    f &&
                    (y(c),
                    Array.isArray(d) ? v([].concat((0, m.A)(d), [l])) : v(!0),
                    _ && b && b(_, ae));
                });
            },
            [w, l, c, f, _]
          );
        },
        ce = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            o = e.carouselContainerRef,
            n = e.trackData,
            t = e.shouldTrackOnView,
            a = e.trackingFunction,
            c = void 0 === a ? null : a,
            l = e.id,
            s = e.onTrack,
            d = e.shouldTrackOnPrint,
            m = (0, i.useState)(!1),
            u = (0, r.A)(m, 2),
            v = u[0],
            p = u[1],
            f = (0, i.useState)(!1),
            b = (0, r.A)(f, 2),
            _ = b[0],
            h = b[1],
            w = re().trackOnPrint;
          return (
            (0, i.useEffect)(
              function () {
                h(!1), p(!1);
              },
              [n]
            ),
            (0, i.useEffect)(
              function () {
                n &&
                  h(function (e) {
                    return !e && d ? (w(n), l && s && s(l, te), !0) : e;
                  });
              },
              [n, l, d]
            ),
            ie({
              componentRef: o,
              trackData: n,
              trackingFunction: c,
              trackedOnViewClients: v,
              setTrackedOnViewClients: p,
              shouldTrackOnView: t,
              onTrack: s,
              id: l,
            }),
            {
              trackedOnViewClients: v,
              setTrackedOnViewClients: p,
              trackedOnPrintClients: _,
              setTrackedOnPrintClients: h,
            }
          );
        },
        le = "ui-recommendations",
        se = ["styles", "polyClassName", "onClick", "as", "component"],
        de = [
          "lazy",
          "customRootMargin",
          "preload",
          "criticalImages",
          "slidesPerView",
          "hasDynamicSlidesPerView",
          "dynamicSlidesConfig",
          "Context",
          "contextProps",
          "cardType",
          "isPolycard",
          "Card",
          "forceCustomCard",
          "deviceType",
          "id",
          "onTrack",
          "shouldTrackOnPrint",
          "shouldTrackOnView",
          "overWhiteBackground",
          "runCatchErrorBoundary",
        ],
        me = ["carouselId"],
        ue = function (e) {
          var o = e.styles,
            n = e.polyClassName,
            r = e.onClick,
            i = e.as;
          e.component;
          var c = (0, a.A)(e, se);
          return (0, f.jsx)(l.C, {
            polycard: (0, t.A)({}, c),
            styles: o,
            className: n,
            onClick: r,
            as: i,
          });
        },
        ve = function (e) {
          return function (o) {
            var n = o.lazy,
              s = void 0 === n || n,
              d = o.customRootMargin,
              m = o.preload,
              u = o.criticalImages,
              v = o.slidesPerView,
              p = o.hasDynamicSlidesPerView,
              b = o.dynamicSlidesConfig,
              _ = o.Context,
              h = o.contextProps,
              w = o.cardType,
              y = o.isPolycard,
              g = void 0 !== y && y,
              A = o.Card,
              k = o.forceCustomCard,
              x = void 0 !== k && k,
              D = o.deviceType,
              C = o.id,
              I = void 0 === C ? null : C,
              P = o.onTrack,
              R = void 0 === P ? null : P,
              O = o.shouldTrackOnPrint,
              S = void 0 === O || O,
              M = o.shouldTrackOnView,
              j = void 0 === M || M,
              E = o.overWhiteBackground,
              N = void 0 === E || E,
              V = o.runCatchErrorBoundary,
              L = void 0 === V ? function () {} : V,
              z = (0, a.A)(o, de);
            try {
              var B,
                F,
                U,
                q = (0, i.useState)(!s),
                H = (0, r.A)(q, 2),
                W = H[0],
                G = H[1],
                K = (0, i.useRef)(),
                Z = T({
                  externalRef: K,
                  rootMargin: d || "420px",
                  threshold: 0,
                  once: !0,
                  startOff: !1,
                  fallbackValue: !0,
                }).isOnViewport;
              (0, i.useEffect)(
                function () {
                  Z && G(!0);
                },
                [Z]
              ),
                !s && m && (U = u || v || 4);
              var Q = $(
                (0, t.A)(
                  (0, t.A)({}, z),
                  {},
                  { itemImagesToPreload: U, isPolycard: g, deviceType: D }
                )
              );
              ce({
                carouselContainerRef: K,
                trackData: null == Q ? void 0 : Q.track,
                shouldTrackOnView:
                  (null == Q ? void 0 : Q.items) && Q.items.length > 0 && j,
                id: I,
                onTrack: R,
                shouldTrackOnPrint: S,
              });
              var X = (0, i.useState)(null),
                Y = (0, r.A)(X, 2),
                J = Y[0],
                ee = Y[1],
                oe = (null == b ? void 0 : b.slideAndMargin) || 234,
                ne = (null == b ? void 0 : b.lastMarginRight) || 12,
                re = (null == b ? void 0 : b.maxVisibleSlides) || 5;
              (0, i.useEffect)(
                function () {
                  if (p && K.current) {
                    var e = K.current.getBoundingClientRect().width,
                      o = Math.trunc((e + ne) / oe);
                    o < re && ee(o), o >= re && ee(re);
                  }
                },
                [p, oe, ne, re]
              );
              var te = {
                  thousandSeparator:
                    (null == h ? void 0 : h.thousandSeparator) ||
                    (null == Q ||
                    null === (B = Q.polycardContext) ||
                    void 0 === B
                      ? void 0
                      : B.thousand_separator),
                  decimalSeparator:
                    (null == h ? void 0 : h.decimalSeparator) ||
                    (null == Q ||
                    null === (F = Q.polycardContext) ||
                    void 0 === F
                      ? void 0
                      : F.decimal_separator),
                },
                ae = w || (null == h ? void 0 : h.type),
                ie = !!(
                  (null == Q ? void 0 : Q.polycardContext) &&
                  Object.keys(Q.polycardContext).length > 0 &&
                  te.thousandSeparator &&
                  te.decimalSeparator
                ),
                se = ie ? ue : A,
                ve = Q || {},
                pe = ve.carouselId,
                fe = (0, a.A)(ve, me);
              return (0, f.jsxs)("section", {
                ref: K,
                className: ""
                  .concat(le, "-carousel-wrapper-ref ")
                  .concat(N ? "".concat(le, "-over-white-background") : ""),
                children: [
                  (0, f.jsx)(c.Image, {
                    src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                    alt: "",
                    loading: "lazy",
                    className: "".concat(le, "-carousel-container-img"),
                  }),
                  !ie &&
                    W &&
                    Q &&
                    (0, f.jsx)(
                      e,
                      (0, t.A)(
                        (0, t.A)(
                          (0, t.A)({}, z),
                          {},
                          { slidesPerView: J || v, isPolycard: g },
                          se && { Card: se }
                        ),
                        fe
                      ),
                      pe
                    ),
                  ie &&
                    W &&
                    !x &&
                    (0, f.jsx)(
                      l.P,
                      (0, t.A)(
                        (0, t.A)(
                          (0, t.A)(
                            {
                              contextValue: (0, t.A)(
                                (0, t.A)(
                                  (0, t.A)(
                                    (0, t.A)(
                                      (0, t.A)(
                                        {},
                                        null == Q ? void 0 : Q.polycardContext
                                      ),
                                      ae && { type: ae }
                                    ),
                                    (null == h ? void 0 : h.card_size) && {
                                      card_size:
                                        null == h ? void 0 : h.card_size,
                                    }
                                  ),
                                  null !=
                                    (null == h
                                      ? void 0
                                      : h.picture_overlay_default) && {
                                    picture_overlay_default:
                                      h.picture_overlay_default,
                                  }
                                ),
                                z.site_platform &&
                                  "MP" === z.site_platform && {
                                    url_prefix: "mercadopago://",
                                  }
                              ),
                            },
                            te
                          ),
                          {},
                          { deviceType: D },
                          (null == h ? void 0 : h.actionsCards) && {
                            actionsCards: h.actionsCards,
                          }
                        ),
                        {},
                        {
                          children: (0, f.jsx)(
                            e,
                            (0, t.A)(
                              (0, t.A)({}, z),
                              {},
                              {
                                cardType: ae,
                                slidesPerView: J || v,
                                isPolycard: !0,
                                Card: se,
                              },
                              fe
                            ),
                            pe
                          ),
                        }
                      )
                    ),
                  ie &&
                    W &&
                    x &&
                    (0, f.jsx)(
                      _,
                      (0, t.A)(
                        (0, t.A)({ contextValue: Q.polycardContext }, h),
                        {},
                        {
                          children: (0, f.jsx)(
                            e,
                            (0, t.A)(
                              (0, t.A)(
                                (0, t.A)({}, z),
                                {},
                                { slidesPerView: J || v, isPolycard: g },
                                A && { Card: A }
                              ),
                              fe
                            ),
                            pe
                          ),
                        }
                      )
                    ),
                ],
              });
            } catch (e) {
              return L(e);
            }
          };
        },
        pe = function (e) {
          var o = e.footerText,
            n = e.href,
            r = e.withChevron,
            t = e.IconFactory,
            a = e.className,
            i = "".concat(le, "-footer");
          return (0, f.jsx)("a", {
            className: h()(
              "".concat(i, "__link"),
              (0, b.A)({}, "".concat(a), a)
            ),
            rel: "nofollow",
            href: n,
            children: (0, f.jsxs)("div", {
              className: "".concat(i, "__wrapper"),
              children: [
                (0, f.jsx)("div", {
                  className: "".concat(i, "__text"),
                  children: o,
                }),
                r &&
                  (0, f.jsx)("div", {
                    className: "".concat(i, "__chevron"),
                    children: t(
                      "recommendations-chevron",
                      "".concat(i, "-icon")
                    ),
                  }),
              ],
            }),
          });
        },
        fe = "".concat(le, "-see-more-card"),
        be = function (e) {
          var o = e.onClick,
            n = e.actionText,
            r = e.Icon;
          return (0, f.jsx)(w.Zp, {
            animated: !0,
            paddingSize: 0,
            className: fe,
            shadow: "flat",
            children: (0, f.jsx)("button", {
              className: "".concat(fe, "__actions"),
              type: "button",
              onClick: o,
              children: (0, f.jsxs)("div", {
                className: "".concat(fe, "__content"),
                children: [
                  r,
                  (0, f.jsx)("p", {
                    className: "".concat(fe, "__content--text"),
                    children: n,
                  }),
                ],
              }),
            }),
          });
        },
        _e = function (e) {
          var o = e.id,
            n = e.target,
            r = e.label,
            t = e.buttonSize,
            a = "".concat(le, "-side-button");
          return (0, f.jsx)("div", {
            className: a,
            children: (0, f.jsx)(y.$n, {
              id: o,
              hierarchy: "quiet",
              size: t,
              href: n,
              className: "andes-button--secondary",
              children: r,
            }),
          });
        },
        he = function (e) {
          var o = e.text,
            n = e.url,
            r = e.advertisingLabel,
            t = e.accessibilityText,
            a = "".concat(le, "-subtitle");
          return (0, f.jsx)("div", {
            className: a,
            children: (0, f.jsxs)("a", {
              href: n,
              rel: "nofollow".concat(void 0 !== r ? ", sponsored" : ""),
              className: "".concat(a, "-link"),
              children: [
                o,
                " ",
                t &&
                  (0, f.jsx)("span", {
                    className: "andes-visually-hidden",
                    children: t,
                  }),
              ],
            }),
          });
        },
        we = function (e, o, n) {
          var r = "".concat(le, "-").concat(e),
            t = "string" == typeof o ? o : (null == o ? void 0 : o[e]) || !1;
          return h()((0, b.A)({}, "".concat(r, "--").concat(t), t), n);
        },
        ye = function (e) {
          var o = e.size,
            n = e.family,
            r = e.color,
            t = e.bg_color,
            a = e.className;
          return we(
            "background-color",
            t,
            we("font-color", r, we("font-size", o, we("font-family", n, a)))
          );
        },
        ge = [
          "as",
          "withDangerous",
          "text",
          "color",
          "bg_color",
          "font_family",
          "font_size",
          "className",
          "accessibilityText",
          "children",
        ],
        Ae = function (e) {
          return { __html: e };
        },
        ke = ["href", "target", "id", "onClick", "data-testid"],
        xe = function (e) {
          var o = e.as,
            n = void 0 === o ? "p" : o,
            i = e.withDangerous,
            c = void 0 !== i && i,
            l = e.text,
            s = void 0 === l ? null : l,
            d = e.color,
            m = void 0 === d ? null : d,
            u = e.bg_color,
            v = void 0 === u ? null : u,
            p = e.font_family,
            b = void 0 === p ? "REGULAR" : p,
            _ = e.font_size,
            h = void 0 === _ ? null : _,
            w = e.className,
            y = void 0 === w ? null : w,
            g = e.accessibilityText,
            A = void 0 === g ? null : g,
            k = e.children,
            x = (0, a.A)(e, ge),
            D = ye({ size: h, family: b, color: m, bg_color: v, className: y }),
            C = n,
            T = (function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return Object.entries(e).reduce(function (e, o) {
                var n = (0, r.A)(o, 2),
                  t = n[0],
                  a = n[1];
                return ke.includes(t) && (e[t] = a), e;
              }, {});
            })(x);
          return c
            ? (0, f.jsx)(
                C,
                (0, t.A)(
                  (0, t.A)({ className: D }, T),
                  {},
                  { dangerouslySetInnerHTML: Ae(s) }
                )
              )
            : (0, f.jsxs)(
                C,
                (0, t.A)(
                  (0, t.A)({ className: D }, T),
                  {},
                  {
                    children: [
                      s,
                      A &&
                        (0, f.jsx)("span", {
                          className: "ui-home--hide",
                          children: A,
                        }),
                      k,
                    ],
                  }
                )
              );
        },
        De = /{([\s\S]+?)}/g,
        Ce = /^recommendations-/i,
        Te = function (e, o, n, r) {
          if (k()(o)) return e;
          for (
            var a = e.split(De),
              i = function (e, o) {
                r({ event: e, values: o });
              },
              c = function () {
                var c,
                  s,
                  d = a[l];
                if (null != o && o[d]) {
                  var m = o[d];
                  switch (m.type) {
                    case "money":
                      var u = m.price,
                        v = u.amount,
                        p = u.centsType,
                        b = u.size,
                        _ = {
                          className: "".concat(le, "-card__price"),
                          value: {
                            fraction: v.fraction.toString(),
                            cents: v.cents,
                          },
                          symbol: v.symbol,
                          currencyId: v.currency_id,
                          size: b,
                          centsType: p,
                        };
                      a[l] = (0, f.jsx)(C.BH, (0, t.A)({}, _));
                      break;
                    case "icon":
                      var h =
                        ("string" == typeof (c = m) &&
                          (s = Ce.test(c) ? c : "recommendations-".concat(c)),
                        D()(c) &&
                          "string" == typeof c.id &&
                          (s = (0, t.A)(
                            (0, t.A)({}, c),
                            {},
                            {
                              id: Ce.test(c.id)
                                ? c.id
                                : "recommendations-".concat(c.id),
                            }
                          )),
                        s);
                      a[l] = r
                        ? (0, f.jsx)("button", {
                            className: "".concat(le, "-icon-button"),
                            type: "button",
                            onClick: function (e) {
                              return i(e, m.deep_link);
                            },
                            children: n(
                              h,
                              ""
                                .concat(le, "-icon ")
                                .concat(le, "-icon-")
                                .concat(d)
                            ),
                          })
                        : n(
                            h,
                            ""
                              .concat(le, "-icon ")
                              .concat(le, "-icon-")
                              .concat(d)
                          );
                      break;
                    default:
                      a[l] = (0, f.jsx)(
                        xe,
                        (0, t.A)({ as: "span", text: e }, m)
                      );
                  }
                }
              },
              l = 0;
            l < a.length;
            l += 1
          )
            c();
          return a;
        },
        Ie = function (e) {
          var o = e.title,
            n = e.titleWithIcons,
            r = e.href,
            t = e.IconFactory,
            a = "".concat(le, "-title"),
            i = o;
          return (
            n
              ? (Object.values(n.values).forEach(function (e) {
                  e.type = "icon";
                }),
                (i = Te(n.text, n.values, t)))
              : "string" == typeof o
              ? (i = o)
              : "object" === (0, g.A)(o) && (i = Te(o.text, o.values, t)),
            r
              ? (0, f.jsx)("div", {
                  className: a,
                  children: (0, f.jsx)("a", {
                    href: r,
                    className: "".concat(a, "-link"),
                    children: i,
                  }),
                })
              : (0, f.jsx)("div", {
                  className: a,
                  children: (0, f.jsx)("h2", {
                    className: "".concat(a, "-link"),
                    children: i,
                  }),
                })
          );
        },
        Pe = "".concat(le, "-title-tag"),
        Re = function (e) {
          var o = e.text,
            n = e.values,
            r = e.styles,
            a = void 0 === r ? {} : r,
            i = e.IconFactory,
            c = e.onTitleTagIconClick,
            l = e.className;
          return (0, f.jsx)("div", {
            className: h()(Pe, l),
            children: (0, f.jsx)(
              xe,
              (0, t.A)(
                {
                  as: "span",
                  text: Te(o, n, i, c),
                  className: "".concat(Pe, "__text"),
                },
                a
              )
            ),
          });
        },
        Oe = function (e, o) {
          return Math.floor(e.toFixed(2))
            .toString()
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, function (e) {
              return "".concat(e).concat(o);
            });
        },
        Se = function (e) {
          var o = e.toFixed(2);
          return "00" === o.split(".")[1] ? "" : o.split(".")[1];
        };
      function Me(e, o) {
        var n =
            e.fraction && e.symbol ? e.fraction.length + e.symbol.length : 0,
          r = 24,
          t = 14;
        return (
          10 === n
            ? ((r = 23), (t = 12))
            : 11 === n
            ? ((r = 22), (t = 12))
            : n >= 12 && ((r = 20), (t = 12)),
          {
            priceSize: (null == o ? void 0 : o.price) || r,
            discountSize: (null == o ? void 0 : o.discount) || t,
          }
        );
      }
    },
    45458(e, o, n) {
      n.d(o, { A: () => a });
      var r = n(43145);
      var t = n(27800);
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, r.A)(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (0, t.A)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
  },
]);
//# sourceMappingURL=91702.796aa5ca.js.map
