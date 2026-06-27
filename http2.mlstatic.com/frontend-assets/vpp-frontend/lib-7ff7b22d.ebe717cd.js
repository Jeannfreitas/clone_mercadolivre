/*! For license information please see lib-7ff7b22d.ebe717cd.js.LICENSE.txt */
"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [3793],
  {
    85277(e, t, n) {
      n.d(t, { C8: () => rr, bk: () => jn, dW: () => lr, eo: () => dr });
      var r = n(96540),
        o = n(46942),
        i = n.n(o),
        l = n(57877),
        a = n(275),
        c = n(39157),
        u = n(77005),
        s = n(64564),
        d = n(5556),
        f = n.n(d),
        p = n(37808),
        v = n(92275),
        b = n(89557),
        m = n.n(b),
        y = n(74848),
        h = n(95513),
        w = n(17405),
        g = n(88824),
        _ = n(22806),
        j = n(46232),
        C = n(46956),
        L = n(18988),
        x = n(89213),
        S = n(2013),
        O = n(37599),
        M = n(36841),
        E = n(62929),
        k = n(61678),
        P = n(76204),
        T = n(75277),
        I = n(42575),
        N = n(28498),
        A = n(45664);
      n(57051);
      function R(e) {
        return (
          (R =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          R(e)
        );
      }
      var H = function (e) {
          var t =
              /^https:\/\/[a-zA-Z0-9-.]+\.mercadoli[vb]re\.(?:com\.(?:ar|br|co|mx|uy|pe|ec|ve)|cl)$/,
            n =
              /^https:\/\/[a-zA-Z0-9-.]+\.mercadoli[vb]re\.(?:com\.(?:ar|br|co|mx|uy|pe|ec|ve)|cl):8444/,
            r =
              /^https:\/\/[a-zA-Z0-9-.]+\.mercadoli[vb]re\.(?:com\.(?:ar|br|co|mx|uy|pe|ec|ve)|cl):844[36]/,
            o = function (e, t) {
              return -1 !== e.search(t);
            },
            i = e.data,
            l = e.origin,
            a = void 0 === l ? "" : l;
          return (
            (function (e) {
              return !!e;
            })(i) &&
            (function (e, i) {
              return "object" ===
                ("undefined" == typeof window ? "undefined" : R(window)) &&
                o(window.location.href, r)
                ? (function (e) {
                    return !!o(e, n);
                  })(i)
                : (function (e) {
                    return o(e, t);
                  })(i);
            })(0, a)
          );
        },
        D = "real-time-channel",
        Z = function () {
          var e = (0, r.useRef)(null),
            t = (0, r.useCallback)(function (e) {
              return function (t) {
                if (H(t)) {
                  var n = t.data,
                    r = n.channelId,
                    o = n.componentId,
                    i = n.action,
                    l = n.payload,
                    a = n.coords;
                  r === D && e(o, i, l, a);
                }
              };
            }, []),
            n = (0, r.useCallback)(function () {
              e.current &&
                (window.removeEventListener("message", e.current),
                (e.current = null));
            }, []),
            o = (0, r.useCallback)(function (r) {
              e.current && n(e.current),
                (e.current = t(r)),
                window.addEventListener("message", e.current, !1);
            }, []),
            i = (0, r.useCallback)(function (e, t, n, r) {
              window.parent.postMessage(
                {
                  channelId: D,
                  componentId: e,
                  action: t,
                  payload: n,
                  coords: r,
                },
                "*"
              );
            }, []),
            l = (0, r.useCallback)(function (e, t, n, r) {
              var o,
                i =
                  null === (o = document.querySelector("iframe.editor")) ||
                  void 0 === o
                    ? void 0
                    : o.contentWindow;
              i &&
                i.postMessage(
                  {
                    channelId: D,
                    componentId: e,
                    action: t,
                    payload: n,
                    coords: r,
                  },
                  "*"
                );
            }, []);
          return { subscribe: o, unsubscribe: n, emit: i, broadcast: l };
        };
      function V(e) {
        return (
          (V =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          V(e)
        );
      }
      function F(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function W(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(n), !0).forEach(function (t) {
                U(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : F(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function U(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != V(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != V(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == V(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var B = {
          MENU: "menu",
          FOLLOW: "follow",
          SHARE: "share",
          FOLLOW_COUPON: "/eshops/follow/coupons",
          RENDER_COMPONENT: "/eshops/profile_header",
          MENU_VIEW: "/eshops/menu",
          FOLLOW_VIEW: "/eshops/follow",
          SHARE_VIEW: "/eshops/share",
        },
        K = function (e) {
          var t = e.shopType,
            n = e.ownerId,
            r = e.buyerId,
            o = e.officialStoreId,
            i = e.shopName,
            l = e.trackingId,
            a = e.shopId,
            c = e.userType;
          return s.A.notify({
            path: "/eshops/menu",
            data: {
              shop_type: t || "none",
              owner_id: n || "none",
              buyer_id: r || "none",
              official_store_id: o || -1,
              shop_name: i || "none",
              tracking_id: l || "none",
              shop_id: a || "none",
              user_type: c || "not_apply",
            },
            type: "view",
          });
        },
        G = function (e, t, n, r) {
          var o = [
              B.FOLLOW_VIEW,
              B.MENU_VIEW,
              B.SHARE_VIEW,
              B.RENDER_COMPONENT,
            ].includes(e),
            i =
              r &&
              (function (e, t) {
                return e["".concat(t)];
              })(r, e),
            l = W(
              W(W({}, t), i || {}),
              o && { user_type: t.user_type || "not_apply" }
            );
          s.A.notify({ path: e, data: l, type: n });
        },
        z = B;
      function Y() {
        var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function i(n, r, o, i) {
          var c = r && r.prototype instanceof a ? r : a,
            u = Object.create(c.prototype);
          return (
            $(
              u,
              "_invoke",
              (function (n, r, o) {
                var i,
                  a,
                  c,
                  u = 0,
                  s = o || [],
                  d = !1,
                  f = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: p,
                    f: p.bind(e, 4),
                    d: function (t, n) {
                      return (i = t), (a = 0), (c = e), (f.n = n), l;
                    },
                  };
                function p(n, r) {
                  for (
                    a = n, c = r, t = 0;
                    !d && u && !o && t < s.length;
                    t++
                  ) {
                    var o,
                      i = s[t],
                      p = f.p,
                      v = i[2];
                    n > 3
                      ? (o = v === r) &&
                        ((c = i[(a = i[4]) ? 5 : ((a = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= p &&
                        ((o = n < 2 && p < i[1])
                          ? ((a = 0), (f.v = r), (f.n = i[1]))
                          : p < v &&
                            (o = n < 3 || i[0] > r || r > v) &&
                            ((i[4] = n), (i[5] = r), (f.n = v), (a = 0)));
                  }
                  if (o || n > 1) return l;
                  throw ((d = !0), r);
                }
                return function (o, s, v) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    d && 1 === s && p(s, v), a = s, c = v;
                    (t = a < 2 ? e : c) || !d;

                  ) {
                    i ||
                      (a
                        ? a < 3
                          ? (a > 1 && (f.n = -1), p(a, c))
                          : (f.n = c)
                        : (f.v = c));
                    try {
                      if (((u = 2), i)) {
                        if ((a || (o = "next"), (t = i[o]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          (c = t.value), a < 2 && (a = 0);
                        } else
                          1 === a && (t = i.return) && t.call(i),
                            a < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method"
                              )),
                              (a = 1));
                        i = e;
                      } else if ((t = (d = f.n < 0) ? c : n.call(r, f)) !== l)
                        break;
                    } catch (t) {
                      (i = e), (a = 1), (c = t);
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: t, done: d };
                };
              })(n, o, i),
              !0
            ),
            u
          );
        }
        var l = {};
        function a() {}
        function c() {}
        function u() {}
        t = Object.getPrototypeOf;
        var s = [][r]
            ? t(t([][r]()))
            : ($((t = {}), r, function () {
                return this;
              }),
              t),
          d = (u.prototype = a.prototype = Object.create(s));
        function f(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, u)
              : ((e.__proto__ = u), $(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(d)),
            e
          );
        }
        return (
          (c.prototype = u),
          $(d, "constructor", u),
          $(u, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          $(u, o, "GeneratorFunction"),
          $(d),
          $(d, o, "Generator"),
          $(d, r, function () {
            return this;
          }),
          $(d, "toString", function () {
            return "[object Generator]";
          }),
          (Y = function () {
            return { w: i, m: f };
          })()
        );
      }
      function $(e, t, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        ($ = function (e, t, n, r) {
          function i(t, n) {
            $(e, t, function (e) {
              return this._invoke(t, n, e);
            });
          }
          t
            ? o
              ? o(e, t, {
                  value: n,
                  enumerable: !r,
                  configurable: !r,
                  writable: !r,
                })
              : (e[t] = n)
            : (i("next", 0), i("throw", 1), i("return", 2));
        }),
          $(e, t, n, r);
      }
      function q(e, t, n, r, o, i, l) {
        try {
          var a = e[i](l),
            c = a.value;
        } catch (e) {
          return void n(e);
        }
        a.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function Q(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function l(e) {
              q(i, r, o, l, a, "next", e);
            }
            function a(e) {
              q(i, r, o, l, a, "throw", e);
            }
            l(void 0);
          });
        };
      }
      var X = (function () {
          var e = Q(
            Y().m(function e(t) {
              var n, r, o, i, l, a, c, u, s, d, f, p, v;
              return Y().w(
                function (e) {
                  for (;;)
                    switch ((e.p = e.n)) {
                      case 0:
                        return (
                          (n = t.baseURL),
                          (r = t.ownerId),
                          (o = t.buyerId),
                          (i = t.entityId),
                          (l = t.entityType),
                          (a = t.action),
                          (c = t.withAudience),
                          (u = void 0 !== c && c),
                          (s = t.queryParam),
                          (d = void 0 === s ? {} : s),
                          (f = m()({ baseURL: n, timeout: 1e4 })),
                          (e.p = 1),
                          (e.n = 2),
                          f.post("/set-follower", {
                            data: {
                              ownerId: r,
                              buyerId: o,
                              entityId: i,
                              entityType: l,
                              action: a,
                              withAudience: u,
                              queryParam: d,
                            },
                          })
                        );
                      case 2:
                        return (p = e.v), e.a(2, p);
                      case 3:
                        throw ((e.p = 3), (v = e.v), new Error(v));
                      case 4:
                        return e.a(2);
                    }
                },
                e,
                null,
                [[1, 3]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        J = (function () {
          var e = Q(
            Y().m(function e(t) {
              var n, r, o, i, l, a, c, u, s, d, f;
              return Y().w(
                function (e) {
                  for (;;)
                    switch ((e.p = e.n)) {
                      case 0:
                        return (
                          (n = t.baseURL),
                          (r = t.ownerId),
                          (o = t.buyerId),
                          (i = t.entityId),
                          (l = t.entityType),
                          (a = t.action),
                          (c = t.queryParam),
                          (u = void 0 === c ? {} : c),
                          (s = m()({ baseURL: n, timeout: 1e4 })),
                          (e.p = 1),
                          (e.n = 2),
                          s.post("/delete-follower", {
                            data: {
                              ownerId: r,
                              buyerId: o,
                              entityId: i,
                              entityType: l,
                              action: a,
                              queryParam: u,
                            },
                          })
                        );
                      case 2:
                        return (d = e.v), e.a(2, d);
                      case 3:
                        throw ((e.p = 3), (f = e.v), new Error(f));
                      case 4:
                        return e.a(2);
                    }
                },
                e,
                null,
                [[1, 3]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        ee = function () {
          return (0, y.jsxs)("svg", {
            className: "ui-ms-profile__coupon-icon",
            width: "16",
            height: "12",
            viewBox: "0 0 16 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, y.jsx)("path", {
                d: "M2 2.94446C2 2.11603 2.67157 1.44446 3.5 1.44446H12.5C13.3284 1.44446 14 2.11603 14 2.94446V3.93598C14 4.03394 13.9263 4.11623 13.829 4.12705C11.5938 4.3754 11.5938 7.62463 13.829 7.87298C13.9263 7.8838 14 7.96609 14 8.06405V9.05557C14 9.884 13.3284 10.5556 12.5 10.5556H3.5C2.67157 10.5556 2 9.884 2 9.05557V2.94446Z",
                stroke: "#3483FA",
              }),
              (0, y.jsx)("path", {
                d: "M9.67582 5.14848L8.33448 5.04117C8.28082 5.04117 8.22717 5.0054 8.20928 4.95175L7.70852 3.69983C7.58332 3.39579 7.17198 3.39579 7.04679 3.69983L6.54602 4.95175C6.52814 5.0054 6.47448 5.04117 6.42083 5.04117L5.07949 5.13059C4.75757 5.14848 4.63237 5.55982 4.88276 5.75655L5.90218 6.61501C5.93795 6.65078 5.95583 6.70443 5.95583 6.75809L5.61603 8.08154C5.54449 8.38558 5.88429 8.63596 6.15256 8.475L7.29717 7.75962C7.35083 7.72385 7.40448 7.72385 7.45813 7.75962L8.60274 8.475C8.87101 8.63596 9.21082 8.40346 9.13928 8.08154L8.79947 6.77597C8.78159 6.72232 8.79947 6.66866 8.85313 6.63289L9.89043 5.75655C10.1229 5.55982 9.99774 5.16636 9.67582 5.14848Z",
                fill: "#3483FA",
              }),
            ],
          });
        },
        te = {
          Affiliate: "AFFILIATE",
          Seller: "SELLER",
          Social: "SOCIAL",
          Super: "SUPER",
          SuperPartner: "SUPER_PARTNER",
          Landing: "LANDING",
          LandingCBT: "landing_cbt",
          Brand: "BRAND",
        },
        ne = function (e) {
          if ("undefined" != typeof window && window.localStorage)
            try {
              return window.localStorage.getItem(e);
            } catch (e) {
              return null;
            }
          return null;
        },
        re = function (e, t) {
          if ("undefined" != typeof window && window.localStorage)
            try {
              return window.localStorage.setItem(e, t), !0;
            } catch (e) {
              return null;
            }
          return null;
        },
        oe = function (e) {
          if ("undefined" != typeof window && window.localStorage)
            try {
              return window.localStorage.removeItem(e), !0;
            } catch (e) {
              return null;
            }
          return null;
        };
      function ie(e) {
        return (
          (ie =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          ie(e)
        );
      }
      function le(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? le(Object(n), !0).forEach(function (t) {
                ce(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : le(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function ce(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != ie(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != ie(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == ie(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ue(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                l,
                a = [],
                c = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (a.push(r.value), a.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((l = n.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return se(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? se(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function se(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var de = function (e) {
        var t,
          n = e.namespace,
          o = e.followers,
          a = e.isMobile,
          c = e.ownerId,
          u = e.buyerId,
          s = e.baseURL,
          d = e.type,
          f = e.siteId,
          b = e.tracks,
          m = e.barInfo,
          w = void 0 === m ? {} : m,
          g = e.deviceType,
          _ = e.handlePostFollow,
          j = void 0 === _ ? function () {} : _,
          C = e.flowSource,
          L = e.display,
          x = void 0 === L ? "full" : L,
          S = e.theme,
          O = e.i18n,
          M = e.layoutMenuMobile,
          E = o || {},
          k = E.text,
          P = E.cta_status,
          T = E.ctas,
          I = ue((0, r.useState)(P), 2),
          N = I[0],
          A = I[1],
          R = ue((0, r.useState)(k), 2),
          H = R[0],
          D = R[1],
          Z = ue((0, r.useState)(!1), 2),
          V = Z[0],
          F = Z[1],
          W = ue((0, r.useState)(h.c.DEFAULT_STATE_SNACKBAR), 2),
          U = W[0],
          B = W[1],
          K = (function (e, t) {
            return e && t
              ? null == e
                ? void 0
                : e.filter(function (e) {
                    return (null == e ? void 0 : e.id) === t;
                  })[0]
              : null;
          })(T, N),
          Y = !c,
          $ = s || "/api",
          q = (0, r.useRef)(!1),
          Q =
            null === (t = globalThis) ||
            void 0 === t ||
            null === (t = t.location) ||
            void 0 === t
              ? void 0
              : t.href,
          ie = ((null == o ? void 0 : o.follows_entity) || "").entity_id,
          le = ((null == o ? void 0 : o.follows_entity) || "").entity_type,
          se =
            (null == w ? void 0 : w.visible) &&
            "coupon" === (null == w ? void 0 : w.icon) &&
            "do_follow" === N,
          de = h.c.BUTTON_MOBILE_FOLLOWER.includes(
            null == d ? void 0 : d.toLowerCase()
          ),
          fe = w.with_follow_coupon,
          pe = S === te.LandingCBT && "with_followers" === M,
          ve = function () {
            return "do_follow" === N
              ? se
                ? "do_follow_incentive"
                : "do_follow"
              : "stop_follow";
          },
          be = function (e) {
            j({ action: e, checkCoupon: fe || se });
          },
          me = function (e) {
            var t = e.action;
            if (b && (fe || se)) {
              var n,
                r,
                o,
                i,
                l = b.melidata_track.event_data,
                a = {
                  action: t,
                  section:
                    null == l ||
                    null === (n = l.client) ||
                    void 0 === n ||
                    null === (r = n.toLowerCase) ||
                    void 0 === r
                      ? void 0
                      : r.call(n),
                  buyer_id: null == u ? void 0 : u.toString(),
                  storefront_id: null == l ? void 0 : l.shop_id,
                  storefront_name: null == l ? void 0 : l.shop_name,
                  storefront_type:
                    null == l ||
                    null === (o = l.shop_type) ||
                    void 0 === o ||
                    null === (i = o.toLowerCase) ||
                    void 0 === i
                      ? void 0
                      : i.call(o),
                  origin: "header",
                  flow_source: C || "NOT_SPECIFIED",
                };
              G(z.FOLLOW_COUPON, a, "event");
            }
          },
          ye = function () {
            var e,
              t = ve();
            if (b) {
              var n,
                r,
                o = b.melidata_track,
                i = b.paths,
                l = b.extra_data,
                s = o.event_data,
                d = o.type,
                p = [
                  "home",
                  "search",
                  "vpp",
                  "clips",
                  "noindex",
                  "vip",
                ].includes(
                  null == s ||
                    null === (n = s.client) ||
                    void 0 === n ||
                    null === (r = n.toLowerCase) ||
                    void 0 === r
                    ? void 0
                    : r.call(n)
                )
                  ? s.client.toLowerCase()
                  : "no_valid_client",
                v = ae(
                  ae({}, s),
                  {},
                  {
                    action: N,
                    shop_type: null == s ? void 0 : s.shop_type.toLowerCase(),
                    client: p,
                    flow_source: C || "NOT_SPECIFIED",
                  }
                );
              G(i[z.FOLLOW], v, d, l);
            }
            var m =
              (null == b ||
              null === (e = b.melidata_track) ||
              void 0 === e ||
              null === (e = e.event_data) ||
              void 0 === e
                ? void 0
                : e.client) || "";
            if (!u && a)
              re("followLogin", null == c ? void 0 : c.toString()),
                re("CP_Login_".concat(c), "true"),
                (window.location =
                  "meli://login/?authentication_mode=required");
            else if (u)
              if ("do_follow" === N) {
                var y, _, j, L;
                X({
                  baseURL: $,
                  ownerId: c,
                  entityId:
                    null == b ||
                    null === (y = b.melidata_track) ||
                    void 0 === y ||
                    null === (y = y.event_data) ||
                    void 0 === y
                      ? void 0
                      : y.shop_id,
                  entityType: le,
                  withAudience: se,
                  action: t,
                  queryParam: {
                    shopType:
                      null == b ||
                      null === (_ = b.melidata_track) ||
                      void 0 === _ ||
                      null === (_ = _.event_data) ||
                      void 0 === _
                        ? void 0
                        : _.shop_type,
                    device: g,
                    source: m,
                    ownerId:
                      null == b ||
                      null === (j = b.melidata_track) ||
                      void 0 === j ||
                      null === (j = j.event_data) ||
                      void 0 === j
                        ? void 0
                        : j.owner_id,
                    siteId: f,
                  },
                })
                  .then(function () {
                    se &&
                      null != w &&
                      w.snackbar_success &&
                      B(
                        ae(
                          ae({}, h.c.DEFAULT_STATE_SNACKBAR),
                          {},
                          { show: !0, message: w.snackbar_success }
                        )
                      ),
                      pe &&
                        a &&
                        B(
                          ae(
                            ae({}, h.c.DEFAULT_STATE_SNACKBAR),
                            {},
                            {
                              show: !0,
                              message: O.gettext(
                                "¡Listo! Ahora sigues a Internacional"
                              ),
                            }
                          )
                        ),
                      me({ action: "do_follow" }),
                      be("do_follow");
                  })
                  .catch(function () {}),
                  A("stop_follow"),
                  D(
                    T &&
                      (null === (L = T[0]) ||
                      void 0 === L ||
                      null === (L = L.success_label) ||
                      void 0 === L
                        ? void 0
                        : L.text)
                  );
              } else {
                var x, S;
                J({
                  baseURL: $,
                  ownerId: c,
                  entityId: ie,
                  entityType: le,
                  action: t,
                  queryParam: {
                    siteId: f,
                    device: g,
                    shopType:
                      null == b ||
                      null === (x = b.melidata_track) ||
                      void 0 === x ||
                      null === (x = x.event_data) ||
                      void 0 === x
                        ? void 0
                        : x.shop_type,
                    ownerId: c,
                    source: m,
                  },
                }),
                  A("do_follow"),
                  me({ action: "stop_follow" }),
                  D(
                    T &&
                      (null === (S = T[1]) ||
                      void 0 === S ||
                      null === (S = S.success_label) ||
                      void 0 === S
                        ? void 0
                        : S.text)
                  ),
                  be("stop_follow");
              }
            else
              re("followLogin", null == c ? void 0 : c.toString()),
                re("CP_Login_".concat(c), "true"),
                (window.location = "https://www.mercadolibre.com/jms/"
                  .concat(
                    null == f ? void 0 : f.toLowerCase(),
                    "/lgz/login?platform_id=ML&go="
                  )
                  .concat(encodeURIComponent(Q)));
          };
        (0, r.useEffect)(
          function () {
            A(P);
          },
          [P]
        ),
          (0, r.useEffect)(function () {
            var e = ve(),
              t = ne("followLogin");
            if (t) {
              var n, r, o, i;
              if (
                !Y &&
                "do_follow" === N &&
                u &&
                t === (null == c ? void 0 : c.toString())
              )
                X({
                  baseURL: $,
                  ownerId: c,
                  entityId: ie,
                  entityType: le,
                  withAudience: se,
                  action: e,
                  queryParam: {
                    shopType:
                      null == b ||
                      null === (n = b.melidata_track) ||
                      void 0 === n ||
                      null === (n = n.event_data) ||
                      void 0 === n
                        ? void 0
                        : n.shop_type,
                    device: g,
                    source:
                      null == b ||
                      null === (r = b.melidata_track) ||
                      void 0 === r ||
                      null === (r = r.event_data) ||
                      void 0 === r
                        ? void 0
                        : r.client,
                    ownerId:
                      null == b ||
                      null === (o = b.melidata_track) ||
                      void 0 === o ||
                      null === (o = o.event_data) ||
                      void 0 === o
                        ? void 0
                        : o.owner_id,
                    siteId: f,
                  },
                })
                  .then(function () {
                    be("do_follow");
                  })
                  .catch(function () {}),
                  A("stop_follow"),
                  D(
                    T &&
                      (null === (i = T[0]) ||
                      void 0 === i ||
                      null === (i = i.success_label) ||
                      void 0 === i
                        ? void 0
                        : i.text)
                  );
              oe("followLogin");
            }
          }, []),
          (0, r.useEffect)(
            function () {
              q.current ? F(!0) : (q.current = !0);
              var e = setTimeout(function () {
                F(!1);
              }, 1200);
              return function () {
                return clearTimeout(e);
              };
            },
            [N]
          ),
          (0, r.useEffect)(
            function () {
              if (!0 === U.show) {
                var e = setTimeout(function () {
                  B(h.c.DEFAULT_STATE_SNACKBAR);
                }, h.c.TIMERS.SNACKBAR.MEDIUM);
                return function () {
                  return clearTimeout(e);
                };
              }
              return function () {};
            },
            [U]
          ),
          (0, r.useEffect)(
            function () {
              null != o && o.priority_status && A(o.priority_status);
            },
            [null == o ? void 0 : o.priority_status]
          );
        var he,
          we,
          ge = Y || V,
          _e = function () {
            var e;
            return (0, y.jsxs)(p.$n, {
              className: "".concat(n, "__follow-button"),
              hierarchy: "quiet",
              size: "medium",
              onClick: ye,
              disabled: ge,
              children: [
                null == K || null === (e = K.label) || void 0 === e
                  ? void 0
                  : e.text,
                se && !ge && (0, y.jsx)(ee, {}),
              ],
            });
          },
          je = i()(
            "".concat(n, "__follow-button--mobile"),
            ce({}, "".concat(n, "__follow-button--mobile--new"), de)
          );
        return (0, y.jsxs)(y.Fragment, {
          children: [
            a
              ? "count-only" === x
                ? (0, y.jsx)(y.Fragment, {
                    children: (0, y.jsx)("div", {
                      className: "".concat(n, "__followers-count--mobile"),
                      children: H,
                    }),
                  })
                : "button-only" === x
                ? pe && "stop_follow" === N
                  ? null
                  : (0, y.jsx)(y.Fragment, {
                      children: (0, y.jsxs)(p.$n, {
                        className: je,
                        hierarchy: de ? "quiet" : "transparent",
                        onClick: ye,
                        size: "small",
                        disabled: ge,
                        children: [
                          null == K || null === (we = K.label) || void 0 === we
                            ? void 0
                            : we.text,
                          se && !ge && (0, y.jsx)(ee, {}),
                        ],
                      }),
                    })
                : (0, y.jsxs)(y.Fragment, {
                    children: [
                      "SUPER" !== d && "SUPER_PARTNER" !== d && H,
                      (0, y.jsxs)(p.$n, {
                        className: je,
                        hierarchy: de ? "quiet" : "transparent",
                        onClick: ye,
                        size: "small",
                        disabled: ge,
                        children: [
                          null == K || null === (he = K.label) || void 0 === he
                            ? void 0
                            : he.text,
                          se && !ge && (0, y.jsx)(ee, {}),
                        ],
                      }),
                    ],
                  })
              : (0, y.jsx)(y.Fragment, {
                  children: (0, y.jsxs)("div", {
                    className: "".concat(n, "__followers"),
                    children: [
                      (0, y.jsx)("div", {
                        className: "".concat(n, "__followers-count"),
                        children: H,
                      }),
                      (0, y.jsx)("div", {
                        className: "".concat(n, "__followers-button"),
                        children:
                          !a && se
                            ? (0, y.jsx)(v.m, {
                                content: null == w ? void 0 : w.text,
                                side: "topRight",
                                children: _e(),
                              })
                            : _e(),
                      }),
                    ],
                  }),
                }),
            (0, y.jsx)(l.q, {
              color: U.color,
              show: U.show,
              message: U.message,
            }),
          ],
        });
      };
      (de.propTypes = {
        namespace: d.string,
        followers: (0, d.shape)({
          text: d.string,
          cta_status: d.string,
          ctas: (0, d.arrayOf)((0, d.shape)({})),
          follows_entity: (0, d.shape)({
            entity_id: d.string,
            entity_type: d.string,
          }),
          priority_status: d.string,
        }),
        isMobile: d.bool,
        ownerId: d.string,
        buyerId: d.string,
        baseURL: d.string,
        type: d.string,
        siteId: d.string,
        tracks: (0, d.shape)({}),
        barInfo: (0, d.shape)({
          visible: d.bool,
          icon: d.string,
          text: d.string,
          snackbar_success: d.string,
          with_follow_coupon: d.bool,
        }),
        deviceType: d.string,
        handlePostFollow: d.func,
        flowSource: d.string,
        display: d.string,
        theme: d.string,
        i18n: (0, d.shape)({ gettext: d.func }),
      }),
        (de.defaultProps = {
          namespace: "ui-ms-profile",
          i18n: {
            gettext: function (e) {
              return e;
            },
          },
        });
      var fe = function (e) {
        var t = e.className,
          n = e.width,
          r = e.height;
        return (0, y.jsxs)("svg", {
          className: t,
          width: n,
          height: r,
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, y.jsx)("path", {
              d: "M18 9C18 4.02904 13.971 0 9 0C4.02904 0 0 4.02904 0 9C0 13.4926 3.28931 17.2159 7.59452 17.8915V11.6038H5.31123V9H7.59452V7.01753C7.59452 4.76384 8.93589 3.51616 10.9923 3.51616C11.9786 3.51616 13.0093 3.6937 13.0093 3.6937V5.90795H11.8751C10.7556 5.90795 10.4104 6.60329 10.4104 7.31342V9H12.9058L12.5063 11.6038H10.4104V17.8915C14.7107 17.2159 18 13.4926 18 9Z",
              fill: "#1877F2",
            }),
            (0, y.jsx)("path", {
              d: "M12.5013 11.6038L12.9008 9.00001H10.4055V7.31343C10.4055 6.6033 10.7556 5.90796 11.8701 5.90796H13.0044V3.69371C13.0044 3.69371 11.9737 3.51617 10.9874 3.51617C8.93093 3.51617 7.58956 4.76385 7.58956 7.01754V9.00001H5.30627V11.6038H7.58956V17.8915C8.04819 17.9655 8.51668 18 8.99504 18C9.4734 18 9.94189 17.9606 10.4005 17.8915V11.6038H12.5013Z",
              fill: "white",
            }),
          ],
        });
      };
      (fe.propTypes = {
        className: f().string,
        width: f().string,
        height: f().string,
      }),
        (fe.defaultProps = { className: null, width: "18", height: "18" });
      var pe = function (e) {
        var t = e.className,
          n = e.width,
          r = e.height;
        return (0, y.jsxs)("svg", {
          className: t,
          width: n,
          height: r,
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, y.jsxs)("g", {
              clipPath: "url(#clip0_3496_15815)",
              children: [
                (0, y.jsx)("path", {
                  d: "M8.00245 0C4.66252 0 3.68571 0.00344645 3.49584 0.0192016C2.81043 0.0761911 2.38392 0.184139 1.91927 0.415543C1.56118 0.593404 1.27877 0.799575 1.00006 1.08858C0.492458 1.61564 0.184822 2.26407 0.073458 3.03484C0.0193142 3.40903 0.00356321 3.48534 0.000363802 5.39664C-0.00086674 6.03374 0.000363802 6.87221 0.000363802 7.99686C0.000363802 11.335 0.00405543 12.3111 0.0200525 12.5006C0.0754269 13.1678 0.180023 13.5875 0.40152 14.0466C0.824827 14.9254 1.63329 15.5852 2.58573 15.8314C2.91552 15.9163 3.27976 15.9631 3.74736 15.9852C3.94548 15.9938 5.9648 16 7.98535 16C10.0059 16 12.0265 15.9975 12.2196 15.9877C12.7611 15.9622 13.0755 15.92 13.4231 15.8301C13.8954 15.709 14.3355 15.4862 14.7128 15.1773C15.09 14.8684 15.3953 14.4808 15.6073 14.0417C15.8245 13.5936 15.9347 13.1579 15.9845 12.5256C15.9953 12.3878 15.9999 10.1898 15.9999 7.99477C15.9999 5.79938 15.9949 3.60547 15.9841 3.46762C15.9337 2.8251 15.8235 2.39306 15.5993 1.93641C15.4154 1.56259 15.2111 1.28343 14.9145 0.997992C14.3854 0.492349 13.7381 0.184631 12.9667 0.0733601C12.593 0.0193247 12.5185 0.00332336 10.6063 0H8.00245Z",
                  fill: "url(#paint0_radial_3496_15815)",
                }),
                (0, y.jsx)("path", {
                  d: "M8.00245 0C4.66252 0 3.68571 0.00344645 3.49584 0.0192016C2.81043 0.0761911 2.38392 0.184139 1.91927 0.415543C1.56118 0.593404 1.27877 0.799575 1.00006 1.08858C0.492458 1.61564 0.184822 2.26407 0.073458 3.03484C0.0193142 3.40903 0.00356321 3.48534 0.000363802 5.39664C-0.00086674 6.03374 0.000363802 6.87221 0.000363802 7.99686C0.000363802 11.335 0.00405543 12.3111 0.0200525 12.5006C0.0754269 13.1678 0.180023 13.5875 0.40152 14.0466C0.824827 14.9254 1.63329 15.5852 2.58573 15.8314C2.91552 15.9163 3.27976 15.9631 3.74736 15.9852C3.94548 15.9938 5.9648 16 7.98535 16C10.0059 16 12.0265 15.9975 12.2196 15.9877C12.7611 15.9622 13.0755 15.92 13.4231 15.8301C13.8954 15.709 14.3355 15.4862 14.7128 15.1773C15.09 14.8684 15.3953 14.4808 15.6073 14.0417C15.8245 13.5936 15.9347 13.1579 15.9845 12.5256C15.9953 12.3878 15.9999 10.1898 15.9999 7.99477C15.9999 5.79938 15.9949 3.60547 15.9841 3.46762C15.9337 2.8251 15.8235 2.39306 15.5993 1.93641C15.4154 1.56259 15.2111 1.28343 14.9145 0.997992C14.3854 0.492349 13.7381 0.184631 12.9667 0.0733601C12.593 0.0193247 12.5185 0.00332336 10.6063 0H8.00245Z",
                  fill: "url(#paint1_radial_3496_15815)",
                }),
                (0, y.jsx)("path", {
                  d: "M7.99889 2.09248C6.39476 2.09248 6.19344 2.0995 5.5634 2.12818C4.93459 2.15698 4.50538 2.25656 4.12982 2.40266C3.74134 2.55357 3.4118 2.75543 3.08349 3.08395C2.75494 3.41235 2.55313 3.74198 2.40177 4.13044C2.25533 4.50623 2.15566 4.93568 2.12736 5.56441C2.0993 6.19462 2.09192 6.39611 2.09192 8.00068C2.09192 9.60524 2.09906 9.806 2.1276 10.4362C2.15652 11.0652 2.25607 11.4945 2.40202 11.8702C2.553 12.2588 2.75481 12.5884 3.08324 12.9168C3.41143 13.2454 3.74097 13.4478 4.1292 13.5987C4.50501 13.7448 4.93435 13.8444 5.56303 13.8732C6.19307 13.9019 6.39426 13.9089 7.99827 13.9089C9.60253 13.9089 9.80323 13.9019 10.4333 13.8732C11.0621 13.8444 11.4918 13.7448 11.8676 13.5987C12.256 13.4478 12.585 13.2454 12.9132 12.9168C13.2417 12.5884 13.4435 12.2588 13.5949 11.8703C13.7401 11.4945 13.8398 11.0651 13.8693 10.4363C13.8976 9.80612 13.905 9.60524 13.905 8.00068C13.905 6.39611 13.8976 6.19474 13.8693 5.56453C13.8398 4.93555 13.7401 4.50623 13.5949 4.13056C13.4435 3.74198 13.2417 3.41235 12.9132 3.08395C12.5846 2.75531 12.2561 2.55345 11.8672 2.40266C11.4907 2.25656 11.0612 2.15698 10.4324 2.12818C9.80237 2.0995 9.60179 2.09248 7.99717 2.09248H7.99889ZM7.46902 3.15719C7.62628 3.15694 7.80176 3.15719 7.99889 3.15719C9.57595 3.15719 9.76287 3.16285 10.3856 3.19116C10.9615 3.2175 11.2741 3.31376 11.4823 3.39462C11.7579 3.50171 11.9545 3.62972 12.1611 3.83651C12.3678 4.04329 12.4958 4.24023 12.6031 4.51595C12.6839 4.72397 12.7803 5.03661 12.8065 5.61266C12.8348 6.23548 12.8409 6.42257 12.8409 7.99932C12.8409 9.57607 12.8348 9.76316 12.8065 10.386C12.7802 10.962 12.6839 11.2747 12.6031 11.4827C12.496 11.7584 12.3678 11.9547 12.1611 12.1614C11.9543 12.3682 11.7581 12.4962 11.4823 12.6033C11.2743 12.6845 10.9615 12.7805 10.3856 12.8069C9.763 12.8352 9.57595 12.8413 7.99889 12.8413C6.4217 12.8413 6.23478 12.8352 5.61213 12.8069C5.03624 12.7803 4.72368 12.684 4.51535 12.6032C4.23971 12.4961 4.04282 12.3681 3.83609 12.1613C3.62936 11.9545 3.50138 11.758 3.39408 11.4822C3.31323 11.2742 3.21688 10.9615 3.19067 10.3855C3.16237 9.76267 3.15671 9.57558 3.15671 7.99784C3.15671 6.42011 3.16237 6.234 3.19067 5.61118C3.217 5.03513 3.31323 4.72249 3.39408 4.51423C3.50114 4.23851 3.62936 4.04157 3.83609 3.83478C4.04282 3.628 4.23971 3.49999 4.51535 3.39266C4.72356 3.31142 5.03624 3.21541 5.61213 3.18895C6.15701 3.16433 6.36818 3.15694 7.46902 3.15571V3.15719ZM11.1518 4.13819C11.0116 4.13819 10.8745 4.17978 10.758 4.2577C10.6414 4.33561 10.5506 4.44635 10.4969 4.57592C10.4433 4.70548 10.4293 4.84805 10.4566 4.98558C10.484 5.12312 10.5515 5.24945 10.6507 5.34859C10.7498 5.44774 10.8761 5.51524 11.0137 5.54257C11.1512 5.5699 11.2937 5.55582 11.4232 5.50212C11.5527 5.44842 11.6634 5.35751 11.7412 5.24089C11.8191 5.12426 11.8606 4.98717 11.8606 4.84693C11.8606 4.45551 11.5431 4.13795 11.1518 4.13795V4.13819ZM7.99889 4.96657C6.32375 4.96657 4.9656 6.32509 4.9656 8.00068C4.9656 9.67626 6.32375 11.0342 7.99889 11.0342C9.67403 11.0342 11.0318 9.67626 11.0318 8.00068C11.0318 6.32509 9.6739 4.96657 7.99877 4.96657H7.99889ZM7.99889 6.03128C9.0862 6.03128 9.96776 6.91295 9.96776 8.00068C9.96776 9.08828 9.0862 9.97007 7.99889 9.97007C6.91146 9.97007 6.03002 9.08828 6.03002 8.00068C6.03002 6.91295 6.91146 6.03128 7.99889 6.03128V6.03128Z",
                  fill: "white",
                }),
              ],
            }),
            (0, y.jsxs)("defs", {
              children: [
                (0, y.jsxs)("radialGradient", {
                  id: "paint0_radial_3496_15815",
                  cx: "0",
                  cy: "0",
                  r: "1",
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform:
                    "translate(4.24985 17.2323) rotate(-90) scale(15.8572 14.7485)",
                  children: [
                    (0, y.jsx)("stop", { stopColor: "#FFDD55" }),
                    (0, y.jsx)("stop", { offset: "0.1", stopColor: "#FFDD55" }),
                    (0, y.jsx)("stop", { offset: "0.5", stopColor: "#FF543E" }),
                    (0, y.jsx)("stop", { offset: "1", stopColor: "#C837AB" }),
                  ],
                }),
                (0, y.jsxs)("radialGradient", {
                  id: "paint1_radial_3496_15815",
                  cx: "0",
                  cy: "0",
                  r: "1",
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform:
                    "translate(-2.68028 1.15261) rotate(78.6806) scale(7.08823 29.2181)",
                  children: [
                    (0, y.jsx)("stop", { stopColor: "#3771C8" }),
                    (0, y.jsx)("stop", {
                      offset: "0.128",
                      stopColor: "#3771C8",
                    }),
                    (0, y.jsx)("stop", {
                      offset: "1",
                      stopColor: "#6600FF",
                      stopOpacity: "0",
                    }),
                  ],
                }),
                (0, y.jsx)("clipPath", {
                  id: "clip0_3496_15815",
                  children: (0, y.jsx)("rect", {
                    width: "16",
                    height: "16",
                    fill: "white",
                  }),
                }),
              ],
            }),
          ],
        });
      };
      (pe.propTypes = {
        className: f().string,
        width: f().string,
        height: f().string,
      }),
        (pe.defaultProps = { className: null, width: "16", height: "16" });
      var ve = function (e) {
        var t = e.className,
          n = e.width,
          r = e.height;
        return (0, y.jsxs)("svg", {
          className: t,
          width: n,
          height: r,
          viewBox: "0 0 20 21",
          fill: "none",
          children: [
            (0, y.jsx)("g", {
              clipPath: "url(#clip0_3676_12089)",
              children: (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.0859 3.5707C15.2061 1.68845 12.7059 0.651346 10.042 0.650391C4.55283 0.650391 0.08547 5.11728 0.08356 10.6079C0.082605 12.3631 0.54147 14.0763 1.41288 15.5862L0 20.7468L5.27909 19.3621C6.7335 20.1557 8.37128 20.5735 10.0377 20.574H10.042C15.5302 20.574 19.9981 16.1066 20 10.616C20.0009 7.955 18.9662 5.45343 17.0859 3.57117V3.5707ZM10.042 18.8923H10.0387C8.55367 18.8918 7.09689 18.4926 5.82583 17.7387L5.52357 17.5592L2.39078 18.3809L3.22686 15.3264L3.03013 15.0132C2.20169 13.6953 1.76383 12.1721 1.76479 10.6084C1.7667 6.04503 5.47963 2.3321 10.0454 2.3321C12.2561 2.33305 14.3342 3.19492 15.8969 4.75964C17.4598 6.32389 18.3197 8.40383 18.3188 10.6151C18.3168 15.1789 14.6039 18.8918 10.042 18.8918V18.8923ZM14.5819 12.6936C14.3332 12.5689 13.1099 11.9673 12.8816 11.8842C12.6534 11.8011 12.4877 11.7596 12.322 12.0088C12.1563 12.2581 11.6793 12.8187 11.5342 12.9843C11.389 13.1505 11.2438 13.1711 10.9951 13.0464C10.7463 12.9218 9.94461 12.6592 8.99395 11.8116C8.25433 11.1517 7.75483 10.3372 7.60972 10.0879C7.46456 9.83867 7.59444 9.704 7.71856 9.58033C7.83028 9.46861 7.96733 9.28956 8.09194 9.14439C8.21661 8.99922 8.25767 8.89517 8.34072 8.72945C8.42383 8.56328 8.38228 8.41817 8.32022 8.2935C8.25811 8.16889 7.76061 6.94411 7.55289 6.44611C7.35089 5.961 7.14561 6.02689 6.99328 6.01877C6.84811 6.01161 6.68244 6.01018 6.51628 6.01018C6.35011 6.01018 6.08078 6.07225 5.85256 6.3215C5.62433 6.57072 4.98162 7.17283 4.98162 8.39711C4.98162 9.62139 5.87311 10.8051 5.99772 10.9713C6.12233 11.1374 7.75244 13.6504 10.2483 14.7286C10.8418 14.985 11.3054 15.1383 11.6669 15.2529C12.2628 15.4424 12.8052 15.4157 13.234 15.3517C13.712 15.2801 14.7061 14.7496 14.9133 14.1685C15.1206 13.5874 15.1206 13.0889 15.0585 12.9853C14.9964 12.8817 14.8303 12.8191 14.5815 12.6945L14.5819 12.6936Z",
                fill: "#25D366",
              }),
            }),
            (0, y.jsx)("defs", {
              children: (0, y.jsx)("clipPath", {
                id: "clip0_3676_12089",
                children: (0, y.jsx)("rect", {
                  width: "20",
                  height: "20.1111",
                  fill: "white",
                  transform: "translate(0 0.650391)",
                }),
              }),
            }),
          ],
        });
      };
      (ve.propTypes = {
        className: f().string,
        width: f().string,
        height: f().string,
      }),
        (ve.defaultProps = { className: null, width: "20", height: "21" });
      var be = function (e) {
        var t = e.className,
          n = e.width,
          r = e.height;
        return (0, y.jsx)("svg", {
          className: t,
          width: n,
          height: r,
          viewBox: "0 0 16 17",
          fill: "none",
          children: (0, y.jsx)("path", {
            d: "M9.3805 7.47999L15.2482 0.705078H13.8578L8.76281 6.58764L4.69349 0.705078H0L6.15362 9.60055L0 16.7051H1.39054L6.77095 10.4929L11.0685 16.7051H15.7619L9.38015 7.47999H9.3805ZM7.47595 9.67892L6.85246 8.79313L1.89158 1.74482H4.02737L8.03087 7.43303L8.65436 8.31882L13.8584 15.7126H11.7226L7.47595 9.67926V9.67892Z",
            fill: "black",
            fillOpacity: "0.9",
          }),
        });
      };
      (be.propTypes = {
        className: f().string,
        width: f().string,
        height: f().string,
      }),
        (be.defaultProps = { className: null, width: "16", height: "17" });
      var me = function () {
        return (0, y.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          children: [
            (0, y.jsx)("g", {
              clipPath: "url(#clip0_2255_7528)",
              children: (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.421 1.47153L12.8816 3.11824L14.5283 3.58005C15.1238 3.74723 15.6097 4.17842 15.8464 4.74984C16.0832 5.32125 16.0446 5.96971 15.7419 6.50906L14.9042 7.99992L15.7407 9.48963C16.0439 10.0289 16.0829 10.6776 15.8463 11.2492C15.6098 11.8209 15.1239 12.2524 14.5283 12.4198L12.8816 12.8816L12.4198 14.5283C12.2526 15.1238 11.8215 15.6097 11.25 15.8464C10.6786 16.0832 10.0302 16.0446 9.49085 15.7419L8 14.9042L6.5103 15.7407C5.97102 16.0439 5.32239 16.0829 4.75071 15.8463C4.17903 15.6098 3.74754 15.1239 3.58018 14.5283L3.11837 12.8816L1.47168 12.4198C0.876188 12.2526 0.39034 11.8214 0.153594 11.25C-0.0831526 10.6786 -0.0446146 10.0301 0.258145 9.49078L1.09582 7.99992L0.259291 6.5102C-0.0439437 5.97092 -0.0828808 5.32229 0.153663 4.7506C0.390207 4.17891 0.876056 3.74742 1.47168 3.58005L3.11837 3.11824L3.58018 1.47153C3.74745 0.87637 4.17844 0.390806 4.74954 0.154093C5.32064 -0.0826196 5.96875 -0.0443288 6.50801 0.257984L7.99885 1.09566L9.48855 0.25913C9.95476 -0.00318251 10.5061 -0.0695366 11.0212 0.0746666C11.5363 0.21887 11.9731 0.561816 12.2353 1.02805C12.3155 1.16786 12.3774 1.31683 12.421 1.47153ZM10.4569 5.27947L7.06378 8.67487L5.542 7.14963C5.44987 7.0546 5.32253 7.00192 5.1902 7.0041C5.05786 7.00192 4.93052 7.0546 4.8384 7.14963L4.13366 7.85209C4.03893 7.94433 3.98666 8.0717 3.98927 8.20389C3.98927 8.34141 4.0374 8.45829 4.13366 8.55455L6.71198 11.1283C6.8043 11.2229 6.93162 11.2752 7.06378 11.2727C7.1959 11.2749 7.32311 11.2227 7.41558 11.1283L11.8663 6.68438C11.9611 6.59214 12.0133 6.46478 12.0107 6.33258C12.013 6.20079 11.9608 6.07389 11.8663 5.98193L11.1616 5.27832C11.0693 5.18371 10.942 5.13146 10.8098 5.13394C10.6765 5.13261 10.5492 5.18486 10.4569 5.27947Z",
                fill: "#3483FA",
              }),
            }),
            (0, y.jsx)("defs", {
              children: (0, y.jsx)("clipPath", {
                id: "clip0_2255_7528",
                children: (0, y.jsx)("rect", {
                  width: "16",
                  height: "16",
                  fill: "white",
                }),
              }),
            }),
          ],
        });
      };
      function ye(e) {
        return (
          (ye =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          ye(e)
        );
      }
      function he() {
        var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function i(n, r, o, i) {
          var c = r && r.prototype instanceof a ? r : a,
            u = Object.create(c.prototype);
          return (
            we(
              u,
              "_invoke",
              (function (n, r, o) {
                var i,
                  a,
                  c,
                  u = 0,
                  s = o || [],
                  d = !1,
                  f = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: p,
                    f: p.bind(e, 4),
                    d: function (t, n) {
                      return (i = t), (a = 0), (c = e), (f.n = n), l;
                    },
                  };
                function p(n, r) {
                  for (
                    a = n, c = r, t = 0;
                    !d && u && !o && t < s.length;
                    t++
                  ) {
                    var o,
                      i = s[t],
                      p = f.p,
                      v = i[2];
                    n > 3
                      ? (o = v === r) &&
                        ((c = i[(a = i[4]) ? 5 : ((a = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= p &&
                        ((o = n < 2 && p < i[1])
                          ? ((a = 0), (f.v = r), (f.n = i[1]))
                          : p < v &&
                            (o = n < 3 || i[0] > r || r > v) &&
                            ((i[4] = n), (i[5] = r), (f.n = v), (a = 0)));
                  }
                  if (o || n > 1) return l;
                  throw ((d = !0), r);
                }
                return function (o, s, v) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    d && 1 === s && p(s, v), a = s, c = v;
                    (t = a < 2 ? e : c) || !d;

                  ) {
                    i ||
                      (a
                        ? a < 3
                          ? (a > 1 && (f.n = -1), p(a, c))
                          : (f.n = c)
                        : (f.v = c));
                    try {
                      if (((u = 2), i)) {
                        if ((a || (o = "next"), (t = i[o]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          (c = t.value), a < 2 && (a = 0);
                        } else
                          1 === a && (t = i.return) && t.call(i),
                            a < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method"
                              )),
                              (a = 1));
                        i = e;
                      } else if ((t = (d = f.n < 0) ? c : n.call(r, f)) !== l)
                        break;
                    } catch (t) {
                      (i = e), (a = 1), (c = t);
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: t, done: d };
                };
              })(n, o, i),
              !0
            ),
            u
          );
        }
        var l = {};
        function a() {}
        function c() {}
        function u() {}
        t = Object.getPrototypeOf;
        var s = [][r]
            ? t(t([][r]()))
            : (we((t = {}), r, function () {
                return this;
              }),
              t),
          d = (u.prototype = a.prototype = Object.create(s));
        function f(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, u)
              : ((e.__proto__ = u), we(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(d)),
            e
          );
        }
        return (
          (c.prototype = u),
          we(d, "constructor", u),
          we(u, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          we(u, o, "GeneratorFunction"),
          we(d),
          we(d, o, "Generator"),
          we(d, r, function () {
            return this;
          }),
          we(d, "toString", function () {
            return "[object Generator]";
          }),
          (he = function () {
            return { w: i, m: f };
          })()
        );
      }
      function we(e, t, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        (we = function (e, t, n, r) {
          function i(t, n) {
            we(e, t, function (e) {
              return this._invoke(t, n, e);
            });
          }
          t
            ? o
              ? o(e, t, {
                  value: n,
                  enumerable: !r,
                  configurable: !r,
                  writable: !r,
                })
              : (e[t] = n)
            : (i("next", 0), i("throw", 1), i("return", 2));
        }),
          we(e, t, n, r);
      }
      function ge(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ge(Object(n), !0).forEach(function (t) {
                je(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ge(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function je(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != ye(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != ye(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == ye(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Ce(e, t, n, r, o, i, l) {
        try {
          var a = e[i](l),
            c = a.value;
        } catch (e) {
          return void n(e);
        }
        a.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      var Le = (function () {
        var e,
          t =
            ((e = he().m(function e(t, n, r, o, i, l) {
              var a, c, u, s, d, f, p, v, b, m;
              return he().w(
                function (e) {
                  for (;;)
                    switch ((e.p = e.n)) {
                      case 0:
                        if (
                          (i &&
                            ((a = i.melidata_track),
                            (c = i.paths),
                            (u = i.extra_data),
                            (s = a.event_data),
                            (d = a.type),
                            (f = _e(
                              _e({}, s),
                              {},
                              {
                                share_media: l,
                                shop_type:
                                  null == s
                                    ? void 0
                                    : s.shop_type.toLowerCase(),
                                client:
                                  null == s ? void 0 : s.client.toLowerCase(),
                              }
                            )),
                            G(c[z.SHARE], f, d, u)),
                          (e.p = 1),
                          !t ||
                            null === (p = window) ||
                            void 0 === p ||
                            null === (p = p.MobileWebKit) ||
                            void 0 === p ||
                            null === (p = p.actions) ||
                            void 0 === p ||
                            !p.share)
                        ) {
                          e.n = 3;
                          break;
                        }
                        return (
                          (e.n = 2), window.MobileWebKit.actions.share(n, r)
                        );
                      case 2:
                        e.n = 7;
                        break;
                      case 3:
                        if (
                          null === (v = navigator) ||
                          void 0 === v ||
                          !v.share
                        ) {
                          e.n = 5;
                          break;
                        }
                        return (e.n = 4), navigator.share({ text: n, url: r });
                      case 4:
                        e.n = 7;
                        break;
                      case 5:
                        if (
                          null === (b = navigator) ||
                          void 0 === b ||
                          null === (b = b.clipboard) ||
                          void 0 === b ||
                          !b.writeText
                        ) {
                          e.n = 7;
                          break;
                        }
                        return (e.n = 6), navigator.clipboard.writeText(r);
                      case 6:
                        o(!0);
                      case 7:
                        e.n = 9;
                        break;
                      case 8:
                        throw ((e.p = 8), (m = e.v), new Error(m));
                      case 9:
                        return e.a(2);
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (r, o) {
                var i = e.apply(t, n);
                function l(e) {
                  Ce(i, r, o, l, a, "next", e);
                }
                function a(e) {
                  Ce(i, r, o, l, a, "throw", e);
                }
                l(void 0);
              });
            });
        return function (e, n, r, o, i, l) {
          return t.apply(this, arguments);
        };
      })();
      function xe(e) {
        return (
          (xe =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          xe(e)
        );
      }
      function Se(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Se(Object(n), !0).forEach(function (t) {
                Me(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Se(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Me(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != xe(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != xe(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == xe(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Ee = {
          facebook: fe,
          instagram: pe,
          whatsapp: ve,
          x: be,
          mail: g.A,
          link: _.A,
        },
        ke = function (e) {
          var t = e.share,
            n = e.namespace,
            r = void 0 === n ? "ui-ms-profile" : n,
            o = e.setShowSnackbar,
            i = e.tracks,
            l = t || {},
            c = l.text,
            u = l.link,
            s = l.share_options,
            d = function (e) {
              var t = e.icon,
                n = Ee["".concat(t)];
              return (0, y.jsx)(
                n,
                Oe(Oe({}, e), {}, { width: "20px", height: "20px" })
              );
            };
          return (0, y.jsx)("div", {
            className: "".concat(r, "__social-media-container"),
            children: (0, y.jsx)(a.yQ, {
              id: "floating-menu",
              search: !1,
              srLabel: "",
              trigger:
                c &&
                (0, y.jsxs)("div", {
                  target: "_blank",
                  rel: "noreferrer",
                  className: "".concat(r, "__share-link"),
                  children: [(0, y.jsx)(w.A, { color: h.c.ANDES_BLUE_500 }), c],
                }),
              type: "menu",
              width: "184px",
              children: (0, y.jsxs)("div", {
                className: "".concat(r, "__social-media"),
                children: [
                  (0, y.jsx)("div", {
                    className: "".concat(r, "__social-media-triangle"),
                  }),
                  (0, y.jsxs)("div", {
                    className: "".concat(r, "__social-media-icons"),
                    children: [
                      (0, y.jsx)("div", {
                        className: ""
                          .concat(r, "__share-icon ")
                          .concat(r, "__share-icon--link"),
                        role: "button",
                        onClick: function () {
                          return Le(!1, c, u, o, i, "link");
                        },
                        tabIndex: 0,
                        children: (0, y.jsx)(d, { icon: "link" }),
                      }),
                      null == s
                        ? void 0
                        : s.map(function (e) {
                            return (0, y.jsx)(
                              "a",
                              {
                                className: "".concat(r, "__share-icon"),
                                href: e.href,
                                onClick: function () {
                                  return (function (e, t) {
                                    if (e) {
                                      var n = e.melidata_track,
                                        r = e.paths,
                                        o = n.event_data,
                                        i = n.type,
                                        l = n.extra_data,
                                        a = _e(
                                          _e({}, o),
                                          {},
                                          {
                                            share_media: t,
                                            shop_type:
                                              null == o
                                                ? void 0
                                                : o.shop_type.toLowerCase(),
                                            client:
                                              null == o
                                                ? void 0
                                                : o.client.toLowerCase(),
                                          }
                                        );
                                      G(r[z.SHARE], a, i, l);
                                    }
                                  })(i, e.social_media);
                                },
                                rel: "noreferrer",
                                target: "_blank",
                                children: (0, y.jsx)(d, {
                                  icon: e.social_media,
                                }),
                              },
                              e.social_media
                            );
                          }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      function Pe(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                l,
                a = [],
                c = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (a.push(r.value), a.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((l = n.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return Te(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? Te(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Te(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Ie = function () {
        var e = Pe((0, r.useState)(!1), 2),
          t = e[0],
          n = e[1],
          o = Pe((0, r.useState)(!1), 2),
          i = o[0],
          l = o[1];
        return {
          isEndScrollbar: i,
          calculateEndScroll: function (e) {
            var t = e.scrollTop,
              n = e.scrollHeight,
              r = e.clientHeight;
            l(Math.ceil(t + r) >= n - h.c.BLUR_THRESHOLD);
          },
          hasScrollbar: t,
          detectScrollbar: function (e, t) {
            n(e > t);
          },
        };
      };
      function Ne(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Ae(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return Ae(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? Ae(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ae(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Re(e, t, n) {
        9 === e.keyCode &&
          (e.shiftKey
            ? document.activeElement === t && (e.preventDefault(), n.focus())
            : document.activeElement === n && (e.preventDefault(), t.focus()));
      }
      function He(e, t, n) {
        var r = (function (e, t, n) {
          if (e) {
            if (t) return Ne(e.getElementsByClassName(t));
            if (n) return Ne(e.getElementsByTagName(n));
          }
          return [];
        })(e, t, n);
        return r.length > 0 ? [r[0], r[r.length - 1]] : [];
      }
      var De = function (e) {
        window.location.href = e.target.href;
        var t = window.location.origin + window.location.pathname;
        e.target.href.includes(t) && window.location.reload();
      };
      function Ze(e) {
        return (
          (Ze =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Ze(e)
        );
      }
      function Ve(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Fe(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return Fe(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? Fe(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Fe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function We(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != Ze(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != Ze(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == Ze(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Ue = "ui-ms-profile-drop-down-menu",
        Be = function (e) {
          var t = e.name,
            n = e.menuL2,
            o = e.viewAll,
            l = e.viewAllLink,
            a = e.event,
            c = e.setEvent,
            u = e.setOpenMenu,
            s = e.activeClass,
            d = (0, r.useRef)(null),
            f = (0, r.useRef)(null),
            p = Ie(),
            v = p.isEndScrollbar,
            b = p.hasScrollbar,
            m = p.detectScrollbar,
            h = p.calculateEndScroll;
          (0, r.useEffect)(
            function () {
              var e = null == d ? void 0 : d.current;
              m(
                null == e ? void 0 : e.scrollHeight,
                null == e ? void 0 : e.clientHeight
              );
            },
            [m]
          ),
            (0, r.useEffect)(
              function () {
                f.current && null !== a && (f.current.focus(), c(null));
              },
              [a, c]
            ),
            (0, r.useEffect)(
              function () {
                var e = function (e) {
                    27 === e.keyCode && (e.stopPropagation(), u(null));
                  },
                  t = null == d ? void 0 : d.current;
                return (
                  null == t || t.addEventListener("keydown", e),
                  function () {
                    null == t || t.removeEventListener("keydown", e);
                  }
                );
              },
              [u]
            );
          var w = i()(
            "".concat(Ue, "__nested-menu-wrapper"),
            We({}, "".concat(Ue, "__nested-menu-scrollbar-width"), b)
          );
          return (0, y.jsx)("nav", {
            ref: f,
            className: "".concat(Ue, "__nested-menu"),
            id: "nestedMenu",
            tabIndex: -1,
            "aria-label": t,
            children: (0, y.jsxs)("div", {
              ref: d,
              role: "group",
              onScroll: function () {
                var e = d.current,
                  t = e.scrollTop,
                  n = e.scrollHeight,
                  r = e.clientHeight;
                h({ scrollTop: t, scrollHeight: n, clientHeight: r });
              },
              className: w,
              onKeyDown: function (e) {
                return Re.apply(
                  void 0,
                  [e].concat(Ve(He(d.current, null, "a")))
                );
              },
              children: [
                (0, y.jsxs)("section", {
                  className: "".concat(Ue, "__nested-menu-view-all"),
                  "aria-label": t,
                  children: [
                    (0, y.jsx)("h2", { children: t }),
                    (0, y.jsx)("a", {
                      href: l,
                      className: "".concat(Ue, "__nested-menu-view-all-link"),
                      onClick: De,
                      children: o,
                    }),
                    (0, y.jsx)("div", {
                      className: "".concat(Ue, "__nested-menu-view-all-line"),
                    }),
                  ],
                }),
                (0, y.jsx)("ul", {
                  className: "".concat(Ue, "__nested-menu-items-list"),
                  id: "".concat(Ue, "__nested-menu-items-list"),
                  children:
                    null == n
                      ? void 0
                      : n.map(function (e) {
                          var t = i()(
                            "".concat(Ue, "__nested-menu-item-link"),
                            We({}, s, null == e ? void 0 : e.selected)
                          );
                          return (0,
                          y.jsx)("li", { children: (0, y.jsx)("a", { onClick: De, href: null == e ? void 0 : e.url, className: t, children: null == e ? void 0 : e.name }) }, null == e ? void 0 : e.name);
                        }),
                }),
                b &&
                  !v &&
                  (0, y.jsx)("div", {
                    className: "".concat(Ue, "__nested-menu-blur"),
                  }),
              ],
            }),
          });
        },
        Ke = function (e, t) {
          var n = (t || {}).trackingId,
            r = encodeURIComponent(null != n ? n : "");
          return null == e ? void 0 : e.replace("%7Btracking_id%7D", r);
        };
      function Ge(e) {
        return (
          (Ge =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Ge(e)
        );
      }
      function ze(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != Ge(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != Ge(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == Ge(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Ye(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Qe(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          qe(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function $e(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                l,
                a = [],
                c = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (a.push(r.value), a.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((l = n.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          qe(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function qe(e, t) {
        if (e) {
          if ("string" == typeof e) return Qe(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Qe(e, t)
              : void 0
          );
        }
      }
      function Qe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Xe = "ui-ms-profile-drop-down-menu",
        Je = "".concat(Xe, "__vertical-menu-item-container-wrapper"),
        et = (0, r.forwardRef)(function (e, t) {
          var n = e.handleOpen,
            o = e.menuL1,
            l = e.viewAllLabel,
            a = e.navigationName,
            c = e.trackingData,
            u = $e((0, r.useState)(null), 2),
            s = u[0],
            d = u[1],
            f = $e((0, r.useState)(null), 2),
            p = f[0],
            v = f[1],
            b = "".concat(Xe, "--active"),
            m = Ie(),
            h = m.isEndScrollbar,
            w = m.hasScrollbar,
            g = m.detectScrollbar,
            _ = m.calculateEndScroll,
            j = function (e) {
              v(e);
            },
            x = function (e) {
              return Ke(e, c);
            };
          return (
            (0, r.useEffect)(
              function () {
                var e = function (e) {
                    27 === e.keyCode && n(null);
                  },
                  r = null == t ? void 0 : t.current;
                return (
                  null == r || r.addEventListener("keydown", e),
                  function () {
                    null == r || r.removeEventListener("keydown", e);
                  }
                );
              },
              [n, t]
            ),
            (0, r.useEffect)(
              function () {
                var e = null == t ? void 0 : t.current;
                g(
                  null == e ? void 0 : e.scrollHeight,
                  null == e ? void 0 : e.clientHeight
                );
              },
              [g, t]
            ),
            (0, y.jsxs)("ul", {
              ref: t,
              onMouseLeave: function () {
                return j();
              },
              className: "".concat(Xe, "__vertical-menu"),
              id: "verticalMenu",
              onScroll: function () {
                var e = t.current,
                  n = e.scrollTop,
                  r = e.scrollHeight,
                  o = e.clientHeight;
                _({ scrollTop: n, scrollHeight: r, clientHeight: o });
              },
              tabIndex: -1,
              role: "dialog",
              "aria-label": a,
              onKeyDown: function (e) {
                return Re.apply(
                  void 0,
                  [e].concat(Ye(He(null == t ? void 0 : t.current, Je)))
                );
              },
              children: [
                o.map(function (e, t) {
                  var n,
                    r = i()(
                      "".concat(Xe, "__vertical-menu-item-container"),
                      ze({}, b, null == e ? void 0 : e.selected)
                    );
                  return (0, y.jsxs)(
                    "li",
                    {
                      className: r,
                      id: "".concat(Xe, "__vertical-menu-item-container"),
                      children: [
                        (0, y.jsxs)("div", {
                          role: "button",
                          "aria-expanded": p === t,
                          tabIndex: 0,
                          className: Je,
                          onClick: function (e) {
                            return (function (e, t) {
                              var n;
                              e.stopPropagation(),
                                (null == e ||
                                null === (n = e.target) ||
                                void 0 === n
                                  ? void 0
                                  : n.className) === Je && (j(t), d("Click"));
                            })(e, t);
                          },
                          onMouseEnter: function () {
                            return j(t);
                          },
                          onKeyDown: function (e) {
                            return (function (e, t) {
                              var n;
                              "Enter" === (null == e ? void 0 : e.key) &&
                                (null == e ||
                                null === (n = e.target) ||
                                void 0 === n
                                  ? void 0
                                  : n.className) === Je &&
                                (e.preventDefault(), v(t), d("Enter"));
                            })(e, t);
                          },
                          children: [
                            (0, y.jsxs)("section", {
                              className: "".concat(Xe, "__vertical-menu-item"),
                              children: [
                                (0, y.jsx)(L.Image, {
                                  src:
                                    null == e ||
                                    null === (n = e.picture) ||
                                    void 0 === n
                                      ? void 0
                                      : n.url,
                                  className: "".concat(
                                    Xe,
                                    "__vertical-menu-item-image"
                                  ),
                                  lazyload: "off",
                                }),
                                (0, y.jsx)("a", {
                                  onClick: De,
                                  href: x(null == e ? void 0 : e.url),
                                  tabIndex: -1,
                                  className: "".concat(
                                    Xe,
                                    "__vertical-menu-item-link"
                                  ),
                                  children: null == e ? void 0 : e.name,
                                }),
                              ],
                            }),
                            (0, y.jsx)("div", {
                              className: "".concat(
                                Xe,
                                "__vertical-menu-item--chevron"
                              ),
                              role: "button",
                              name: "chevron-btn",
                              children: (0, y.jsx)(C.A, {}),
                            }),
                          ],
                        }),
                        p === t &&
                          (0, y.jsx)(Be, {
                            name: null == e ? void 0 : e.name,
                            menuL2: null == e ? void 0 : e.nodes,
                            viewAll: l,
                            viewAllLink: x(null == e ? void 0 : e.url),
                            event: s,
                            setEvent: d,
                            setOpenMenu: v,
                            activeClass: b,
                          }),
                      ],
                    },
                    null == e ? void 0 : e.name
                  );
                }),
                w &&
                  !h &&
                  (0, y.jsx)("div", {
                    className: "".concat(Xe, "__vertical-menu-blur"),
                  }),
              ],
            })
          );
        }),
        tt = function (e) {
          var t = e.name,
            n = e.nodes,
            o = e.namespace,
            i = e.handleOpen,
            l = e.isOpen,
            u = e.viewAllLabel,
            s = e.withSeparator,
            d = e.trackingData,
            f = (0, r.useRef)(null);
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsx)("div", {
                className: "".concat(o, "__dynamic-hover-menu"),
                role: "button",
                onMouseEnter: function () {
                  return i(t);
                },
                onClick: function (e) {
                  return (
                    (n = e),
                    i(t),
                    void (
                      n.target.classList.contains(
                        "".concat(o, "__dynamic-hover-menu")
                      ) &&
                      setTimeout(function () {
                        f.current.focus();
                      }, 10)
                    )
                  );
                  var n;
                },
                onKeyDown: function (e) {
                  return (
                    (n = e).stopPropagation(),
                    void ("Enter" === (null == n ? void 0 : n.key) && i(t))
                  );
                  var n;
                },
                tabIndex: 0,
                children: (0, y.jsxs)(a.yQ, {
                  className: "".concat(o, "__dynamic-floating-menu"),
                  trigger: (0, y.jsxs)("li", {
                    className: "".concat(o, "__item"),
                    children: [
                      t,
                      l !== t ? (0, y.jsx)(c.A, {}) : (0, y.jsx)(j.A, {}),
                    ],
                  }),
                  width: "100%",
                  tabIndex: 0,
                  open: l === t,
                  children: [
                    (0, y.jsx)("div", {
                      className: "".concat(
                        o,
                        "__dynamic-floating-menu-triangle"
                      ),
                    }),
                    (0, y.jsx)(et, {
                      handleOpen: i,
                      ref: f,
                      menuL1: n,
                      viewAllLabel: u,
                      navigationName: t,
                      trackingData: d,
                    }),
                  ],
                }),
              }),
              s &&
                (0, y.jsx)("div", {
                  className: "".concat(o, "__dynamic-menu-separator"),
                }),
            ],
          });
        };
      function nt(e) {
        return (
          (nt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          nt(e)
        );
      }
      function rt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ot(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? rt(Object(n), !0).forEach(function (t) {
                it(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : rt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function it(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != nt(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != nt(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == nt(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function lt(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return at(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return at(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? at(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function at(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var ct = function () {
          var e,
            t,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r =
              null == n ||
              null === (e = n.nodes) ||
              void 0 === e ||
              null === (t = e.some) ||
              void 0 === t
                ? void 0
                : t.call(e, function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = e.selected,
                      n = e.nodes;
                    return t || (n && n.length && ct({ nodes: n }));
                  });
          return r;
        },
        ut = function (e) {
          var t = e.menuL1,
            n = e.categoriesLabel,
            r = e.categoriesSelected,
            o = e.maxNodesInLine,
            i = e.menuType,
            l = e.theme,
            a = e.customStyle,
            c = { id: "", name: n, url: "/#", nodes: [], selected: r },
            u = l === h.c.THEMES.LANDING_CBT,
            s = a === h.c.CUSTOM_STYLE.PREMIUM;
          return (null == i ? void 0 : i.toUpperCase()) !==
            h.c.MENU_TYPE.CORRIDORS || u
            ? (function (e, t, n) {
                var r =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3];
                if (!t || 0 === (null == t ? void 0 : t.length)) return null;
                var o =
                  null == t
                    ? void 0
                    : t.filter(function (e) {
                        var t;
                        return !(
                          (null == e ? void 0 : e.type) ===
                            h.c.TYPES_ITEM.FOLDER &&
                          (null == e ||
                            null === (t = e.nodes) ||
                            void 0 === t ||
                            !t.length)
                        );
                      });
                if (r) {
                  var i,
                    l,
                    a,
                    c =
                      null == o
                        ? void 0
                        : o.filter(function (e) {
                            return null == e ? void 0 : e.in_header;
                          }),
                    u =
                      null == o
                        ? void 0
                        : o.filter(function (e) {
                            return !(null != e && e.in_header);
                          }),
                    s = [].concat(lt(c), lt(u)),
                    d = function (e) {
                      return (
                        (null == e ? void 0 : e.type) === h.c.TYPES_ITEM.FOLDER
                      );
                    },
                    f =
                      null !==
                        (i =
                          null == o || null === (l = o.slice(n)) || void 0 === l
                            ? void 0
                            : l.filter(function (e) {
                                return d(e);
                              })) && void 0 !== i
                        ? i
                        : [],
                    p = f.length,
                    v = s,
                    b = null;
                  if (s && s.length > n) {
                    b =
                      null == s
                        ? void 0
                        : s.find(function (e) {
                            return (
                              "all-products" === (null == e ? void 0 : e.id)
                            );
                          });
                    var m = s.slice(0, n - p),
                      y = s.slice(n - p),
                      w =
                        null == m
                          ? void 0
                          : m.filter(function (e) {
                              return !f.some(function (t) {
                                return (
                                  (null == t ? void 0 : t.id) ===
                                  (null == e ? void 0 : e.id)
                                );
                              });
                            }),
                      g =
                        null == y
                          ? void 0
                          : y.filter(function (e) {
                              return (
                                "all-products" !==
                                  (null == e ? void 0 : e.id) &&
                                !f.some(function (t) {
                                  return (
                                    (null == t ? void 0 : t.id) ===
                                    (null == e ? void 0 : e.id)
                                  );
                                }) &&
                                !d(e)
                              );
                            });
                    if (g.length >= 2) {
                      var _ = ot(ot({}, e), {}, { nodes: g });
                      v = [].concat(lt(w), [_], lt(f));
                    } else v = [].concat(lt(w), lt(y));
                  }
                  return (
                    b &&
                      (v =
                        null === (a = v) || void 0 === a
                          ? void 0
                          : a.filter(function (e) {
                              return (
                                "all-products" !== (null == e ? void 0 : e.id)
                              );
                            })).push(b),
                    v
                  );
                }
                var j,
                  C,
                  L,
                  x = o,
                  S = null;
                if (
                  o &&
                  (null == o ? void 0 : o.length) > 3 &&
                  ((S =
                    null == o
                      ? void 0
                      : o.find(function (e) {
                          return "all-products" === (null == e ? void 0 : e.id);
                        })),
                  null == o ||
                    o.forEach(function (t, r) {
                      var o;
                      r >= n &&
                        "all-products" !== (null == t ? void 0 : t.id) &&
                        (null == e ||
                          null === (o = e.nodes) ||
                          void 0 === o ||
                          o.push(t));
                    }),
                  (null == e || null === (j = e.nodes) || void 0 === j
                    ? void 0
                    : j.length) >= 2)
                ) {
                  var O = null == o ? void 0 : o.slice(0, n);
                  null == O || O.push(e), (x = O);
                }
                return (
                  S &&
                    (null ===
                      (L = x =
                        null === (C = x) || void 0 === C
                          ? void 0
                          : C.filter(function (e) {
                              return (
                                "all-products" !== (null == e ? void 0 : e.id)
                              );
                            })) ||
                      void 0 === L ||
                      L.push(S)),
                  x
                );
              })(c, t, o, s)
            : (function (e, t) {
                if (!t || 0 === t.length) return null;
                var n = [],
                  r =
                    null == t
                      ? void 0
                      : t.some(function (e) {
                          return null == e ? void 0 : e.featured;
                        });
                return (
                  null == t ||
                    t.forEach(function (o, i) {
                      if (r) {
                        var l,
                          a,
                          c,
                          u = null == o ? void 0 : o.in_header,
                          s = null == o ? void 0 : o.featured;
                        u
                          ? n.push(o)
                          : null == e ||
                            null === (a = e.nodes) ||
                            void 0 === a ||
                            a.push(o),
                          s &&
                            (null == e ||
                              null === (c = e.nodes) ||
                              void 0 === c ||
                              c.push(o)),
                          null != t &&
                            null !== (l = t[i + 1]) &&
                            void 0 !== l &&
                            l.featured &&
                            n.push(ot({}, e));
                      } else {
                        var d,
                          f,
                          p = i === (null == t ? void 0 : t.length) - 1;
                        (null == o ? void 0 : o.in_header)
                          ? n.push(o)
                          : (null == e ||
                              null === (d = e.nodes) ||
                              void 0 === d ||
                              d.push(o),
                            (p ||
                              (null != t &&
                                null !== (f = t[i + 1]) &&
                                void 0 !== f &&
                                f.in_header)) &&
                              n.push(ot({}, e)));
                      }
                    }),
                  n
                );
              })(c, t);
        },
        st = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return null == e ? void 0 : e.includes("custom_content_page");
        };
      function dt(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                l,
                a = [],
                c = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (a.push(r.value), a.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((l = n.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return ft(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? ft(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ft(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var pt = function (e, t) {
        if (!e || null == t) return e;
        var n = "global_position=".concat(t),
          r = dt(e.split("#", 2), 2),
          o = r[0],
          i = r[1];
        if (void 0 !== i) {
          if (
            i.split("&").some(function (e) {
              return e.startsWith("global_position=");
            })
          )
            return e;
          var l = i.length > 0 ? "&" : "";
          return "".concat(o, "#").concat(i).concat(l).concat(n);
        }
        return "".concat(e, "#").concat(n);
      };
      function vt(e) {
        return (
          (vt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          vt(e)
        );
      }
      function bt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function mt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? bt(Object(n), !0).forEach(function (t) {
                yt(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : bt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function yt(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != vt(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != vt(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == vt(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ht(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                l,
                a = [],
                c = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (a.push(r.value), a.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((l = n.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return wt(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? wt(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function wt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var gt = [h.c.TYPES.SELLER, h.c.TYPES.BRAND, h.c.TYPES.LANDING],
        _t = function (e) {
          var t = e.namespace,
            n = void 0 === t ? "ui-ms-profile" : t,
            o = e.menuL1,
            l = e.menuType,
            s = e.categoriesLabel,
            d = void 0 === s ? "Todas las categorías" : s,
            f = e.viewAllLabel,
            p = void 0 === f ? "Ver todo" : f,
            v = e.followers,
            b = e.isMobile,
            m = e.ownerId,
            w = e.buyerId,
            g = e.baseURL,
            _ = e.maxNodesInLine,
            j = void 0 === _ ? 2 : _,
            C = e.siteId,
            L = e.categoriesSelected,
            x = void 0 !== L && L,
            S = e.type,
            O = e.tracks,
            M = e.share,
            E = e.setShowSnackbar,
            k = e.withSeparator,
            P = e.isHiddenNodeHeader,
            T = void 0 !== P && P,
            I = e.isEditable,
            N = e.isOpenOverlay,
            A = e.limitL2,
            R = e.barInfo,
            H = e.deviceType,
            D = e.handlePostFollow,
            V = e.flowSource,
            F = e.trackingData,
            W = e.globalPosition,
            U = e.theme,
            B = e.customStyle,
            G = void 0 === B ? "default" : B,
            z = (0, r.useRef)(),
            Y = ht(
              (0, r.useState)(function () {
                return I && N ? d : null;
              }),
              2
            ),
            $ = Y[0],
            q = Y[1],
            Q = (0, r.useRef)(null),
            X = (0, r.useRef)(!1),
            J = Z(),
            ee = J.unsubscribe,
            te = J.subscribe,
            ne = F || { ownerId: m, type: S },
            re = function (e) {
              return "".concat(n).concat(e ? "__active" : "__inactive");
            },
            oe = function (e) {
              return ""
                .concat(n)
                .concat(e ? "__active-item" : "__inactive-item");
            },
            ie = function (e) {
              q(e);
            },
            le = function () {
              q(I ? d : null);
            },
            ae = function (e, t, n) {
              if ("menu-panel" === e && "toggleSubMenu" === t) {
                var r = n.isOpen,
                  o = n.item;
                !1 === r
                  ? le()
                  : ie(
                      (null == o ? void 0 : o.id) ||
                        (null == o ? void 0 : o.name)
                    );
              }
            },
            ce = function (e) {
              var t = Ke(e, F);
              return pt(t, W);
            };
          (0, r.useEffect)(function () {
            return I ? (te(ae), ee) : function () {};
          }, []),
            (0, r.useEffect)(
              function () {
                $ && K(ne);
              },
              [$, S, m, w]
            );
          var ue = function (e) {
              var t,
                r,
                o = e.name,
                i = e.nodes,
                l = e.selected,
                s = e.id,
                f = e.with_separator,
                v = null;
              I &&
                o === d &&
                null != i &&
                null !== (t = i.some) &&
                void 0 !== t &&
                t.call(i, function (e) {
                  return (null == e ? void 0 : e.id) === $;
                }) &&
                (v = d),
                !0 === l && (X.current = s);
              var m = l || ("" !== X.current && X.current === s);
              T &&
                !1 === X.current &&
                (m = ct({ nodes: i })) &&
                (X.current = s);
              var w =
                  G === h.c.CUSTOM_STYLE.PREMIUM &&
                  (null == i ? void 0 : i.length) > 0 &&
                  (null == i || null === (r = i.every) || void 0 === r
                    ? void 0
                    : r.call(i, function (e) {
                        var t = e.nodes;
                        return !(t && t.length);
                      })),
                g = f && G === h.c.CUSTOM_STYLE.PREMIUM;
              return (0, y.jsxs)(y.Fragment, {
                children: [
                  g &&
                    (0, y.jsx)("div", {
                      className: "".concat(n, "__menu-separator"),
                    }),
                  (0, y.jsx)("div", {
                    className: "".concat(n, "__hover-menu"),
                    onMouseEnter: function () {
                      return ie(s || o);
                    },
                    ref: z,
                    children: (0, y.jsx)(a.yQ, {
                      className: "".concat(n, "__floating-menu"),
                      trigger: (0, y.jsxs)("li", {
                        className: "".concat(n, "__item ").concat(re(m)),
                        children: [
                          (0, y.jsx)("span", { children: o }),
                          (0, y.jsx)(c.A, {}),
                        ],
                      }),
                      width: "100%",
                      open: v || $ === s || $ === o,
                      children: w
                        ? (0, y.jsx)(a.x5, {
                            label: o,
                            className: "".concat(n, "__floating-menu-group"),
                            children: i.map(function (e) {
                              var t = e.name,
                                r = e.url,
                                o = e.in_header,
                                i = e.id,
                                l = e.hidden,
                                c = e.type === h.c.TYPES_ITEM.FOLDER;
                              return (T && !1 === o && st(i)) ||
                                (I && !0 === l) ||
                                c
                                ? (0, y.jsx)(y.Fragment, {})
                                : I
                                ? (0, y.jsx)(
                                    "span",
                                    {
                                      className: "andes-list__item-primary",
                                      children: t,
                                    },
                                    i
                                  )
                                : (0, y.jsx)(
                                    a.Bv,
                                    {
                                      title: t,
                                      href: ce(r),
                                      className: "".concat(
                                        n,
                                        "__floating-menu-item"
                                      ),
                                    },
                                    i
                                  );
                            }),
                          })
                        : i.map(function (e) {
                            var t = e.name,
                              r = e.url,
                              o = e.nodes,
                              i = e.in_header,
                              l = e.id,
                              c = e.hidden,
                              s = e.type === h.c.TYPES_ITEM.FOLDER,
                              d = s && !(null != o && o.length);
                            if (
                              (T && !1 === i && st(l)) ||
                              (I && !0 === c) ||
                              d
                            )
                              return (0, y.jsx)(y.Fragment, {});
                            var f = o;
                            if (A) {
                              var v,
                                m = b
                                  ? null == A
                                    ? void 0
                                    : A.mobile
                                  : null == A
                                  ? void 0
                                  : A.desktop;
                              (null === (v = f) || void 0 === v
                                ? void 0
                                : v.length) > m && (f = f.slice(0, m));
                            }
                            return (0, y.jsxs)(a.x5, {
                              label: t,
                              className: "".concat(n, "__floating-menu-group"),
                              children: [
                                f &&
                                  f.map(function (e) {
                                    var t = e.name,
                                      r = e.url,
                                      o = e.selected,
                                      i = e.in_header,
                                      l = e.id,
                                      c = e.hidden;
                                    return (T && !1 === i && st(l)) ||
                                      (I && !0 === c)
                                      ? (0, y.jsx)(y.Fragment, {})
                                      : I
                                      ? (0, y.jsx)("span", {
                                          className: "andes-list__item-primary",
                                          children: t,
                                        })
                                      : (0, y.jsx)(a.Bv, {
                                          title: t,
                                          href: ce(r),
                                          className: ""
                                            .concat(n, "__floating-menu-item ")
                                            .concat(oe(o)),
                                        });
                                  }),
                                s
                                  ? (0, y.jsx)(y.Fragment, {})
                                  : (0, y.jsxs)(y.Fragment, {
                                      children: [
                                        I
                                          ? (0, y.jsx)(a.Bv, {
                                              title: (0, y.jsxs)("span", {
                                                children: [
                                                  p,
                                                  (0, y.jsx)(u.A, {}),
                                                ],
                                              }),
                                              href: ce(r),
                                              className: "".concat(
                                                n,
                                                "__floating-menu-link--hidden"
                                              ),
                                            })
                                          : (0, y.jsx)(y.Fragment, {}),
                                        (0, y.jsx)(a.Bv, {
                                          title: (0, y.jsxs)("span", {
                                            children: [p, (0, y.jsx)(u.A, {})],
                                          }),
                                          href: ce(r),
                                          className: "".concat(
                                            n,
                                            "__floating-menu-link"
                                          ),
                                        }),
                                      ],
                                    }),
                              ],
                            });
                          }),
                    }),
                  }),
                ],
              });
            },
            se = function (e) {
              var t = e.name,
                r = e.url,
                o = e.selected,
                i = e.with_separator,
                l = void 0 !== i && i;
              return (0, y.jsxs)(y.Fragment, {
                children: [
                  l &&
                    (0, y.jsx)("div", {
                      className: "".concat(n, "__menu-separator"),
                    }),
                  (0, y.jsx)(
                    "div",
                    {
                      className: re(o),
                      children: (0, y.jsx)("a", {
                        href: ce(r),
                        className: ""
                          .concat(n, "__item ")
                          .concat(n, "__menu-element"),
                        id: "navigation-bar-section-simple",
                        onMouseEnter: le,
                        children: t,
                      }),
                    },
                    t
                  ),
                ],
              });
            },
            fe = ut({
              menuL1: o,
              categoriesLabel: d,
              categoriesSelected: x,
              maxNodesInLine: j,
              menuType: l,
              theme: U,
              customStyle: G,
            }),
            pe = i()(
              "".concat(n, "__navigation-container"),
              yt(
                {},
                "".concat(n, "__corridors-navigation-container"),
                h.c.MENU_TYPE.CORRIDORS === l
              )
            );
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsxs)("div", {
                onMouseLeave: le,
                className: pe,
                children: [
                  fe &&
                    (0, y.jsx)("div", {
                      className: "".concat(n, "__navigation"),
                      "data-testid": "affiliate-navbar",
                      children: (0, y.jsx)("ul", {
                        className: "".concat(n, "__list"),
                        children: fe.map(function (e) {
                          return (function (e) {
                            var t = null != e ? e : {},
                              r = t.type,
                              o = t.nodes,
                              i = t.in_header,
                              a = t.hidden,
                              c = t.id,
                              u = U === h.c.THEMES.LANDING_CBT;
                            if (l === h.c.MENU_TYPE.CORRIDORS && !u)
                              return i
                                ? (0, y.jsx)(se, mt({}, e))
                                : (0, y.jsx)(
                                    tt,
                                    mt(
                                      mt({}, e),
                                      {},
                                      {
                                        isOpen: $,
                                        handleOpen: ie,
                                        classActive: re,
                                        namespace: n,
                                        viewAllLabel: p,
                                        withSeparator: k,
                                        trackingData: F,
                                      }
                                    )
                                  );
                            var s =
                              r === h.c.TYPES_ITEM.FOLDER &&
                              !(null != o && o.length);
                            return (T && !1 === i && st(c)) ||
                              (I && !0 === a) ||
                              s
                              ? (0, y.jsx)(y.Fragment, {})
                              : (null == o ? void 0 : o.length) > 0
                              ? (0, y.jsx)(ue, mt({}, e))
                              : (0, y.jsx)(se, mt({}, e));
                          })(e);
                        }),
                      }),
                    }),
                  !b &&
                    (0, y.jsx)("div", {
                      className: "".concat(n, "__close-floating-menu"),
                      onMouseEnter: le,
                    }),
                  !b &&
                    v &&
                    (0, y.jsx)(de, {
                      followers: v,
                      namespace: n,
                      isMobile: b,
                      ownerId: m,
                      buyerId: w,
                      baseURL: g,
                      siteId: C,
                      tracks: O,
                      barInfo: R,
                      deviceType: H,
                      handlePostFollow: D,
                      flowSource: V,
                    }),
                  !b &&
                    gt.includes(null == S ? void 0 : S.toLowerCase()) &&
                    M &&
                    (0, y.jsx)(ke, {
                      share: M,
                      namespace: n,
                      setShowSnackbar: E,
                      tracks: O,
                    }),
                ],
              }),
              (0, y.jsx)("div", {
                ref: Q,
                className:
                  N || null !== $
                    ? "floating-menu-overlay--open"
                    : "floating-menu-overlay--close",
                "data-testid": "floating-menu-overlay",
              }),
            ],
          });
        },
        jt = "ui-ms-styled-label";
      function Ct(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return Lt(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Lt(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          l = !0,
          a = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (a = !0), (i = e);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (a) throw i;
            }
          },
        };
      }
      function Lt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function xt(e) {
        return (
          (xt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          xt(e)
        );
      }
      function St(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != xt(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != xt(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == xt(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Ot = function (e) {
        var t = e.namespace,
          n = void 0 === t ? "ui-ms-profile" : t,
          r = e.id,
          o = e.icon,
          l = e.label,
          a = e.followers,
          c = e.isMobile,
          u = e.ownerId,
          s = e.buyerId,
          d = e.baseURL,
          f = e.type,
          p = e.siteId,
          v = e.tracks,
          b = e.barInfo,
          m = e.deviceType,
          h = e.handlePostFollow,
          w = void 0 === h ? function () {} : h,
          g = e.theme,
          _ = e.flowSource,
          j = e.i18n,
          C = e.layoutMenuMobile,
          L = e.italicHeader,
          S = g === te.LandingCBT,
          O = S && "with_followers" === C,
          M = (a || {}).label_id,
          E = l || {},
          k = E.color,
          P = E.font_size,
          T = E.font_weight,
          I = E.text,
          N = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.color,
              n = e.size,
              r = e.weight,
              o = [];
            return (
              t && o.push("".concat(jt, "__color--").concat(t.toLowerCase())),
              n && o.push("".concat(jt, "__size--").concat(n.toLowerCase())),
              r && o.push("".concat(jt, "__weight--").concat(r.toLowerCase())),
              o.length < 1 ? "" : (o.push(jt), i().apply(void 0, o))
            );
          })({ color: k, size: P, weight: T }),
          A = i()(
            "".concat(n, "__").concat(r),
            N,
            St(
              St(
                St(
                  St(
                    St(
                      St(
                        St(
                          {},
                          "".concat(n, "__").concat(r, "--long"),
                          "full_name" === r &&
                            (function (e) {
                              var t,
                                n = Ct(e.split(" "));
                              try {
                                for (n.s(); !(t = n.n()).done; )
                                  if (t.value.length >= 20) return !0;
                              } catch (e) {
                                n.e(e);
                              } finally {
                                n.f();
                              }
                              return !1;
                            })(I)
                        ),
                        "ui-ms-styled-label--default",
                        !N && f !== te.Landing
                      ),
                      "".concat(n, "__sub-title"),
                      "SUPER" === f || "SUPER_PARTNER" === f
                    ),
                    "ui-ms-profile-landing",
                    f === te.Landing
                  ),
                  "ui-ms-profile-landing-cbt",
                  "full_name" === r && S
                ),
                "ui-ms-profile-landing-cbt--with-followers",
                "full_name" === r && O
              ),
              "ui-ms-profile__full_name--italic-header",
              "full_name" === r && S && !0 === L
            )
          ),
          R = function () {
            return "string" == typeof I && I.startsWith("http")
              ? (0, y.jsx)(y.Fragment, {
                  children: (0, y.jsx)(x._, {
                    src: I,
                    alt: "label header eshops",
                    className: "".concat(n, "__logo-home"),
                  }),
                })
              : "sub_description" === r && (!N || S)
              ? ""
              : I;
          };
        return (
          I &&
          (0, y.jsxs)(y.Fragment, {
            children: [
              S
                ? (0, y.jsx)("h1", { className: A, children: R() })
                : (0, y.jsxs)("p", {
                    className: A,
                    children: [o && (0, y.jsx)(me, {}), R()],
                  }),
              r === M &&
                (0, y.jsx)("div", {
                  className: A,
                  children: (0, y.jsx)(de, {
                    followers: a,
                    namespace: n,
                    isMobile: c,
                    ownerId: u,
                    buyerId: s,
                    baseURL: d,
                    type: f,
                    siteId: p,
                    tracks: v,
                    barInfo: b,
                    deviceType: m,
                    handlePostFollow: w,
                    flowSource: _,
                    display: O ? "count-only" : "full",
                    i18n: j,
                  }),
                }),
            ],
          })
        );
      };
      function Mt(e) {
        return (
          (Mt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Mt(e)
        );
      }
      function Et(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function kt(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != Mt(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != Mt(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == Mt(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Pt(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                l,
                a = [],
                c = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (a.push(r.value), a.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((l = n.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return Tt(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? Tt(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Tt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var It = function (e) {
          var t,
            n = e.namespace,
            o = void 0 === n ? "ui-ms-profile" : n,
            c = e.optionsMenu,
            u = e.isWebview,
            s = e.type,
            d = (c || {}).nodes,
            f =
              null === (t = globalThis) ||
              void 0 === t ||
              null === (t = t.location) ||
              void 0 === t
                ? void 0
                : t.href,
            v = "",
            b = Pt((0, r.useState)(!1), 2),
            m = b[0],
            h = b[1];
          null == d ||
            d.forEach(function (e) {
              ("Compartir" !== e.text && "Compartilhar" !== e.text) ||
                ((e.onClick = function () {
                  return (function (e, t, n, r) {
                    if (e) {
                      var o,
                        i,
                        l =
                          null === (o = window) ||
                          void 0 === o ||
                          null === (o = o.location) ||
                          void 0 === o
                            ? void 0
                            : o.href,
                        a =
                          ((u = new URL(l)),
                          (s = u.searchParams),
                          Array.from(s.keys())
                            .filter(function (e) {
                              return (
                                "ref" !== e &&
                                "matt_tool" !== e &&
                                "forceInApp" !== e
                              );
                            })
                            .forEach(function (e) {
                              return s.delete(e);
                            }),
                          u.toString());
                      null === (i = window) ||
                        void 0 === i ||
                        null === (i = i.MobileWebKit) ||
                        void 0 === i ||
                        null === (i = i.actions) ||
                        void 0 === i ||
                        i.share(n, a).catch(function () {
                          var e;
                          null === (e = navigator) ||
                            void 0 === e ||
                            null === (e = e.clipboard) ||
                            void 0 === e ||
                            e.writeText(a),
                            r(!0);
                        });
                    } else {
                      var c;
                      null === (c = navigator) ||
                        void 0 === c ||
                        null === (c = c.clipboard) ||
                        void 0 === c ||
                        c.writeText(t),
                        r(!0);
                    }
                    var u, s;
                  })(u, f, e.text, h);
                }),
                (v = e.snackbar_success_text));
            }),
            (0, r.useEffect)(
              function () {
                m &&
                  setTimeout(function () {
                    h(!1);
                  }, 5e3);
              },
              [m]
            );
          var w = i()(
            "".concat(o, "__options-menu"),
            kt(
              {},
              "".concat(o, "__affiliates-menu--dropdown"),
              "AFFILIATES" === s
            )
          );
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsx)(a.yQ, {
                id: "floating-menu",
                className: w,
                trigger: (0, y.jsx)(p.$n, { children: (0, y.jsx)(S.A, {}) }),
                srLabel: "",
                width: "128px",
                children: d.map(function (e, t) {
                  var n = e.text,
                    r = e.url,
                    o = e.onClick,
                    i = { title: n, value: t };
                  return (
                    (i.href = r),
                    o ? (i.onClick = o) : (i.target = "_blank"),
                    (0, y.jsx)(
                      a.Bv,
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? Et(Object(n), !0).forEach(function (t) {
                                kt(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : Et(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                        }
                        return e;
                      })({}, i)
                    )
                  );
                }),
              }),
              "undefined" != typeof window &&
                void 0 !== window.document &&
                null !== window.document.body &&
                (0, y.jsx)(l.q, {
                  color: "positive",
                  delay: 5e3,
                  message: v,
                  show: m,
                }),
            ],
          });
        },
        Nt = function (e) {
          var t = e.className,
            n = e.width,
            r = void 0 === n ? "56" : n,
            o = e.height,
            i = void 0 === o ? "56" : o,
            l = e.color,
            a = void 0 === l ? "black" : l,
            c = e.fillOpacity,
            u = void 0 === c ? "0.55" : c,
            s = e.circleColor,
            d = void 0 === s ? "black" : s,
            f = e.strokeOpacity,
            p = void 0 === f ? "0.25" : f,
            v = e.strokeWidth,
            b = void 0 === v ? "0.5" : v;
          return (0, y.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: r,
            height: i,
            viewBox: "0 0 ".concat(r, " ").concat(i),
            fill: "none",
            className: t,
            children: [
              (0, y.jsx)("circle", {
                cx: "28",
                cy: "28",
                r: "28",
                fill: "white",
              }),
              (0, y.jsx)("circle", {
                cx: "28",
                cy: "28",
                r: "27.75",
                stroke: d,
                strokeOpacity: p,
                strokeWidth: b,
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28.0144 29.6959C32.6891 29.6959 36.4787 25.9063 36.4787 21.2316C36.4787 16.5569 32.6891 12.7673 28.0144 12.7673C23.3397 12.7673 19.5501 16.5569 19.5501 21.2316C19.5501 25.9063 23.3397 29.6959 28.0144 29.6959ZM28.0144 26.3107C25.2093 26.3107 22.9353 24.0367 22.9353 21.2316C22.9353 18.4266 25.2093 16.1526 28.0144 16.1526C30.8195 16.1526 33.0934 18.4266 33.0934 21.2316C33.0934 24.0367 30.8195 26.3107 28.0144 26.3107Z",
                fill: a,
                fillOpacity: u,
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M50 28C50 40.1503 40.1503 50 28 50C15.8497 50 6 40.1503 6 28C6 15.8497 15.8497 6 28 6C40.1503 6 50 15.8497 50 28ZM16.1361 42.3448C19.3571 45.0118 23.4914 46.6147 28 46.6147C32.5073 46.6147 36.6404 45.0128 39.8611 42.3472V41.541C39.8611 38.7369 37.588 36.4638 34.784 36.4638H21.1691C18.3894 36.4638 16.1361 38.7172 16.1361 41.4968V42.3448ZM13.0852 39.1399C10.7614 36.0338 9.38527 32.1776 9.38527 28C9.38527 17.7194 17.7194 9.38527 28 9.38527C38.2806 9.38527 46.6147 17.7194 46.6147 28C46.6147 32.1836 45.2346 36.0448 42.9048 39.1532C41.8742 35.6422 38.6285 33.0786 34.784 33.0786H21.1691C17.3379 33.0786 14.1045 35.6378 13.0852 39.1399Z",
                fill: a,
                fillOpacity: u,
              }),
            ],
          });
        },
        At = {
          1920: "OO",
          1200: "F",
          800: "B",
          500: "O",
          400: "C",
          320: "V",
          280: "E",
          250: "P",
          228: "A",
          210: "Y",
          200: "N",
          160: "T",
          120: "G",
          90: "I",
          70: "R",
          40: "M",
        },
        Rt = {
          BANNER: { DESKTOP_LARGE: 1920, DESKTOP: 1200, MOBILE: 720 },
          LOGO: {
            CIRCLE: { DESKTOP: 120, MOBILE: 120 },
            DEFAULT: { DESKTOP: 120, MOBILE: 120 },
          },
        },
        Ht = function (e, t) {
          if (!t) return t;
          var n = t.match(
            /(https:\/\/http2\.mlstatic\.com\/(?:D_||N?Q_|N?P_)*\d+-(MLA|MLM|MLB|MCO|MLC)\d+_\d+)-[A-Z]+\.(?:webp|jpg|png)/
          );
          if (n) {
            var r = Object.keys(At)
                .map(Number)
                .sort(function (e, t) {
                  return e - t;
                }),
              o =
                r.find(function (t) {
                  return t >= e;
                }) || r[r.length - 1];
            return "".concat(n[1], "-").concat(At[o], ".webp");
          }
          return t;
        },
        Dt = function (e, t, n) {
          var r = n > 1200 ? Rt.BANNER.DESKTOP_LARGE : Rt.BANNER.DESKTOP,
            o = e ? Rt.BANNER.MOBILE : r;
          return Ht(o, t);
        };
      function Zt(e) {
        return (
          (Zt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Zt(e)
        );
      }
      function Vt(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != Zt(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != Zt(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == Zt(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Ft = function (e) {
        var t = e.namespace,
          n = e.type,
          r = e.image,
          o = e.nameEshop,
          l = void 0 === o ? "" : o,
          a = e.isMobile,
          c = e.bubble,
          u = e.ownerId,
          s = e.theme,
          d = e.layoutMenuMobile,
          f = e.openTooltip,
          p = e.setOpenTooltip,
          b = r || {},
          m = b.url,
          h = b.image_type,
          w = b.target,
          g = n.toUpperCase() === te.Affiliate,
          _ = l ? "Logo ".concat(l) : "",
          j = (function (e, t, n) {
            var r = Rt.LOGO["".concat(n)] || Rt.LOGO.DEFAULT,
              o = e ? r.MOBILE : r.DESKTOP;
            return Ht(o, t);
          })(a, m, h),
          C = s === te.LandingCBT && "with_followers" === d,
          L = i()(
            "".concat(t, "__").concat(null == h ? void 0 : h.toLowerCase()),
            Vt({}, "".concat(t, "__circle_landing_cbt"), C)
          ),
          S = c || {},
          M = S.isCompact,
          E = S.size,
          k = S.state,
          P = S.story_viewer_url,
          T = S.spacing,
          I = S.tooltip,
          N = S.showFollowing,
          A = S.bubbleAnimation,
          R =
            g && !m
              ? (0, y.jsx)(Nt, {})
              : (0, y.jsx)(x._, { className: L, src: j, title: _ });
        if (M) {
          var H = {
            storefrontId: u,
            storefrontLogo: m,
            storefrontUrl: w,
            storyViewerUrl: P || "",
          };
          return (0, y.jsx)(v.m, {
            content: (0, y.jsx)("div", {
              className: "ui-ms-tooltip-bubble-content",
              children: (0, y.jsxs)("p", {
                children: [
                  (0, y.jsx)("strong", {
                    children: null == I ? void 0 : I.initial,
                  }),
                  null == I ? void 0 : I.after,
                ],
              }),
            }),
            open: f,
            className: "ui-ms-tooltip-bubble",
            type: "highlight",
            closable: !0,
            side: "bottomLeft",
            onClose: function () {
              return p(!1);
            },
            children: (0, y.jsx)(O.Z, {
              size: a && C ? 40 : Number(E),
              state: k,
              store: H,
              showFollowing: N,
              spacing: T,
              bubbleAnimation: A,
            }),
          });
        }
        return R;
      };
      function Wt() {
        var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function i(n, r, o, i) {
          var c = r && r.prototype instanceof a ? r : a,
            u = Object.create(c.prototype);
          return (
            Ut(
              u,
              "_invoke",
              (function (n, r, o) {
                var i,
                  a,
                  c,
                  u = 0,
                  s = o || [],
                  d = !1,
                  f = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: p,
                    f: p.bind(e, 4),
                    d: function (t, n) {
                      return (i = t), (a = 0), (c = e), (f.n = n), l;
                    },
                  };
                function p(n, r) {
                  for (
                    a = n, c = r, t = 0;
                    !d && u && !o && t < s.length;
                    t++
                  ) {
                    var o,
                      i = s[t],
                      p = f.p,
                      v = i[2];
                    n > 3
                      ? (o = v === r) &&
                        ((c = i[(a = i[4]) ? 5 : ((a = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= p &&
                        ((o = n < 2 && p < i[1])
                          ? ((a = 0), (f.v = r), (f.n = i[1]))
                          : p < v &&
                            (o = n < 3 || i[0] > r || r > v) &&
                            ((i[4] = n), (i[5] = r), (f.n = v), (a = 0)));
                  }
                  if (o || n > 1) return l;
                  throw ((d = !0), r);
                }
                return function (o, s, v) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    d && 1 === s && p(s, v), a = s, c = v;
                    (t = a < 2 ? e : c) || !d;

                  ) {
                    i ||
                      (a
                        ? a < 3
                          ? (a > 1 && (f.n = -1), p(a, c))
                          : (f.n = c)
                        : (f.v = c));
                    try {
                      if (((u = 2), i)) {
                        if ((a || (o = "next"), (t = i[o]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          (c = t.value), a < 2 && (a = 0);
                        } else
                          1 === a && (t = i.return) && t.call(i),
                            a < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method"
                              )),
                              (a = 1));
                        i = e;
                      } else if ((t = (d = f.n < 0) ? c : n.call(r, f)) !== l)
                        break;
                    } catch (t) {
                      (i = e), (a = 1), (c = t);
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: t, done: d };
                };
              })(n, o, i),
              !0
            ),
            u
          );
        }
        var l = {};
        function a() {}
        function c() {}
        function u() {}
        t = Object.getPrototypeOf;
        var s = [][r]
            ? t(t([][r]()))
            : (Ut((t = {}), r, function () {
                return this;
              }),
              t),
          d = (u.prototype = a.prototype = Object.create(s));
        function f(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, u)
              : ((e.__proto__ = u), Ut(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(d)),
            e
          );
        }
        return (
          (c.prototype = u),
          Ut(d, "constructor", u),
          Ut(u, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          Ut(u, o, "GeneratorFunction"),
          Ut(d),
          Ut(d, o, "Generator"),
          Ut(d, r, function () {
            return this;
          }),
          Ut(d, "toString", function () {
            return "[object Generator]";
          }),
          (Wt = function () {
            return { w: i, m: f };
          })()
        );
      }
      function Ut(e, t, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        (Ut = function (e, t, n, r) {
          function i(t, n) {
            Ut(e, t, function (e) {
              return this._invoke(t, n, e);
            });
          }
          t
            ? o
              ? o(e, t, {
                  value: n,
                  enumerable: !r,
                  configurable: !r,
                  writable: !r,
                })
              : (e[t] = n)
            : (i("next", 0), i("throw", 1), i("return", 2));
        }),
          Ut(e, t, n, r);
      }
      function Bt(e, t, n, r, o, i, l) {
        try {
          var a = e[i](l),
            c = a.value;
        } catch (e) {
          return void n(e);
        }
        a.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      var Kt = function (e, t) {
          t
            ? window.MobileWebKit.navigation.push(e).catch(function () {
                window.location = e;
              })
            : (window.location = e);
        },
        Gt = (function () {
          var e,
            t =
              ((e = Wt().m(function e(t, n, r, o, i) {
                return Wt().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        if (!n) {
                          e.n = 6;
                          break;
                        }
                        if (h.c.BEHAVIOR_TYPE.BOTTOM_SHEET !== r) {
                          e.n = 4;
                          break;
                        }
                        if ("ios" !== window.MobileWebKit.platform) {
                          e.n = 1;
                          break;
                        }
                        window.MobileWebKit.executeNative({
                          method: "wk_present",
                          args: { deeplink: t, animated: !0, over_context: !1 },
                        }),
                          (e.n = 3);
                        break;
                      case 1:
                        if (o.current) {
                          e.n = 3;
                          break;
                        }
                        return (
                          (e.n = 2), window.MobileWebKit.navigation.push(t)
                        );
                      case 2:
                        o.current = !0;
                      case 3:
                        e.n = 5;
                        break;
                      case 4:
                        window.MobileWebKit.navigation
                          .push(t)
                          .catch(function () {
                            window.location = t;
                          });
                      case 5:
                        e.n = 7;
                        break;
                      case 6:
                        h.c.BEHAVIOR_TYPE.BOTTOM_SHEET === r
                          ? i()
                          : (window.location = t);
                      case 7:
                        return e.a(2);
                    }
                }, e);
              })),
              function () {
                var t = this,
                  n = arguments;
                return new Promise(function (r, o) {
                  var i = e.apply(t, n);
                  function l(e) {
                    Bt(i, r, o, l, a, "next", e);
                  }
                  function a(e) {
                    Bt(i, r, o, l, a, "throw", e);
                  }
                  l(void 0);
                });
              });
          return function (e, n, r, o, i) {
            return t.apply(this, arguments);
          };
        })();
      function zt(e) {
        return (
          (zt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          zt(e)
        );
      }
      function Yt(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != zt(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != zt(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == zt(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function $t(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                l,
                a = [],
                c = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (a.push(r.value), a.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((l = n.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return qt(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? qt(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function qt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Qt = [h.c.TYPES.SELLER, h.c.TYPES.BRAND],
        Xt = function (e) {
          var t = e.banner,
            n = e.baseURL,
            o = e.buyerId,
            l = e.children,
            a = e.followers,
            c = e.image,
            u = e.bubble,
            s = e.isMobile,
            d = e.labels,
            f = e.namespace,
            p = e.optionsMenu,
            v = e.ownerId,
            b = e.socialProfileType,
            m = e.superProfileType,
            g = e.type,
            _ = e.siteId,
            j = e.tracks,
            C = e.isWebview,
            L = e.share,
            x = e.setShowSnackbar,
            S = e.deviceType,
            O = e.handlePostFollow,
            M = e.theme,
            E = e.flowSource,
            k = e.headerType,
            P = e.trackingData,
            T = e.globalPosition,
            I = e.hiddenBackground,
            N = e.italicHeader,
            A = e.openTooltip,
            R = e.setOpenTooltip,
            H = e.layoutMenuMobile,
            D = c || {},
            Z = D.target,
            V = D.hidden,
            F = void 0 !== V && V,
            W = t || {},
            U = W.url,
            B = W.url_mobile,
            K = W.banner_mobile_id,
            G = L || {},
            z = G.text,
            Y = G.link,
            $ = $t((0, r.useState)(null), 2),
            q = $[0],
            Q = $[1],
            X = g.toUpperCase() === te.Affiliate,
            J = g.toUpperCase() === te.Landing,
            ee = g.toUpperCase() === te.Social,
            ne = X || ee,
            re = M === te.LandingCBT,
            oe = !s && "dark" === k && re,
            ie = i()(
              "".concat(f, "__banner"),
              Yt(
                {
                  "banner--social": b.includes(
                    null == g ? void 0 : g.toLowerCase()
                  ),
                },
                "".concat(f, "__banner--white"),
                !U
              )
            ),
            le = i()(
              "".concat(f, "__banner"),
              Yt({}, "".concat(f, "__banner--empty"), !U)
            ),
            ae = !s && Z && !ne,
            ce = i()(
              "".concat(f, "__shop-info"),
              Yt(
                Yt(
                  Yt({}, "".concat(f, "__shop-info--landing-cbt"), re && I),
                  "".concat(f, "__shop-info--dark-desktop"),
                  oe && I
                ),
                "ui-es-clickable",
                ae
              )
            );
          (0, r.useEffect)(function () {
            Q(window.innerWidth);
          }, []);
          var ue = Dt(s, U, q),
            se = K && B ? Dt(s, B, q) : ue,
            fe = (0, y.jsxs)(y.Fragment, {
              children: [
                !F &&
                  (0, y.jsx)("div", {
                    className: ""
                      .concat(f, "__wrap-image ")
                      .concat(f, "__wrap-image--")
                      .concat(null == g ? void 0 : g.toLowerCase()),
                    children: (0, y.jsx)(Ft, {
                      image: c,
                      isMobile: s,
                      namespace: f,
                      type: g,
                      bubble: u,
                      ownerId: v,
                      openTooltip: A,
                      setOpenTooltip: R,
                      theme: M,
                      layoutMenuMobile: H,
                    }),
                  }),
                (0, y.jsx)("div", {
                  className: ""
                    .concat(f, "__wrap-description ")
                    .concat(J ? "landing" : ""),
                  children:
                    null == d
                      ? void 0
                      : d.map(function (e) {
                          var t = e.id,
                            r = e.icon,
                            i = e.label;
                          return (0,
                          y.jsx)(Ot, { id: t, icon: r, label: i, followers: a, isMobile: s, ownerId: v, buyerId: o, baseURL: n, deviceType: S, handlePostFollow: O, theme: M, flowSource: E, italicHeader: N }, "".concat(t).concat(i.text));
                        }),
                }),
              ],
            });
          return (0, y.jsx)(y.Fragment, {
            children: s
              ? !(
                  b.includes(null == g ? void 0 : g.toLowerCase()) ||
                  m.includes(null == g ? void 0 : g.toLowerCase())
                ) &&
                (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsx)("div", {
                      className: le,
                      style: se
                        ? { backgroundImage: "url(".concat(se, ")") }
                        : {},
                    }),
                    Qt.includes(null == g ? void 0 : g.toLowerCase()) &&
                      se &&
                      L &&
                      (0, y.jsx)("div", {
                        className: "".concat(f, "__share"),
                        role: "button",
                        onClick: function () {
                          return Le(C, z, Y, x, j, "native");
                        },
                        tabIndex: 0,
                        children: (0, y.jsx)(w.A, {
                          color: h.c.ANDES_BLUE_500,
                        }),
                      }),
                  ],
                })
              : (0, y.jsx)(y.Fragment, {
                  children: (0, y.jsx)("div", {
                    className: ie,
                    style: ue
                      ? { backgroundImage: "url(".concat(ue, ")") }
                      : {},
                    children: (0, y.jsxs)("div", {
                      className: "".concat(f, "__wrapper-components"),
                      children: [
                        (0, y.jsxs)("div", {
                          className: "".concat(f, "__info-wrapper"),
                          children: [
                            ae
                              ? (0, y.jsx)("div", {
                                  className: ce,
                                  onClick: function () {
                                    return Kt(((e = Ke(Z, P)), pt(e, T)), C);
                                    var e;
                                  },
                                  role: "button",
                                  tabIndex: 0,
                                  children: fe,
                                })
                              : (0, y.jsx)("div", {
                                  className: ce,
                                  children: fe,
                                }),
                            b.includes(null == g ? void 0 : g.toLowerCase()) &&
                              a &&
                              (0, y.jsxs)("div", {
                                className: "".concat(f, "__actions-wrapper"),
                                children: [
                                  (0, y.jsx)(de, {
                                    followers: a,
                                    namespace: f,
                                    isMobile: s,
                                    ownerId: v,
                                    buyerId: o,
                                    baseURL: n,
                                    siteId: _,
                                    tracks: j,
                                    deviceType: S,
                                    flowSource: E,
                                  }),
                                  (0, y.jsx)(It, { optionsMenu: p, type: g }),
                                ],
                              }),
                          ],
                        }),
                        (0, y.jsx)("div", {
                          className: "".concat(f, "__shop-free-shipping"),
                          children: l,
                        }),
                      ],
                    }),
                  }),
                }),
          });
        },
        Jt = function () {
          return (0, y.jsxs)("svg", {
            className: "ui-ms-profile__corridors-icon",
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            children: [
              (0, y.jsx)("path", { d: "M1.25 2.45H7.25L7.25 1.25H1.25V2.45Z" }),
              (0, y.jsx)("path", {
                d: "M6.05 1.75L6.05 7.25L7.25 7.25L7.25 1.75L6.05 1.75Z",
              }),
              (0, y.jsx)("path", {
                d: "M7.25 6.05L1.25 6.05L1.25 7.25L7.25 7.25L7.25 6.05Z",
              }),
              (0, y.jsx)("path", {
                d: "M2.45 7.25L2.45 1.75L1.25 1.75L1.25 7.25L2.45 7.25Z",
              }),
              (0, y.jsx)("path", {
                d: "M8.75 2.45H14.75L14.75 1.25H8.75V2.45Z",
              }),
              (0, y.jsx)("path", {
                d: "M13.55 1.75L13.55 7.25L14.75 7.25L14.75 1.75L13.55 1.75Z",
              }),
              (0, y.jsx)("path", {
                d: "M14.75 6.05L8.75 6.05L8.75 7.25L14.75 7.25L14.75 6.05Z",
              }),
              (0, y.jsx)("path", {
                d: "M9.95 7.25L9.95 1.75L8.75 1.75L8.75 7.25L9.95 7.25Z",
              }),
              (0, y.jsx)("path", { d: "M1.25 9.95H7.25L7.25 8.75H1.25V9.95Z" }),
              (0, y.jsx)("path", {
                d: "M6.05 9.25L6.05 14.75L7.25 14.75L7.25 9.25L6.05 9.25Z",
              }),
              (0, y.jsx)("path", {
                d: "M7.25 13.55L1.25 13.55L1.25 14.75L7.25 14.75L7.25 13.55Z",
              }),
              (0, y.jsx)("path", {
                d: "M2.45 14.75L2.45 9.25L1.25 9.25L1.25 14.75L2.45 14.75Z",
              }),
              (0, y.jsx)("path", {
                d: "M8.75 9.95H14.75L14.75 8.75H8.75V9.95Z",
              }),
              (0, y.jsx)("path", {
                d: "M13.55 9.25L13.55 14.75L14.75 14.75L14.75 9.25L13.55 9.25Z",
              }),
              (0, y.jsx)("path", {
                d: "M14.75 13.55L8.75 13.55L8.75 14.75L14.75 14.75L14.75 13.55Z",
              }),
              (0, y.jsx)("path", {
                d: "M9.95 14.75L9.95 9.25L8.75 9.25L8.75 14.75L9.95 14.75Z",
              }),
            ],
          });
        },
        en = function () {
          return (0, y.jsxs)("svg", {
            className: "ui-ms-profile__hamburguer-icon",
            width: "21",
            height: "14",
            viewBox: "0 0 21 14",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, y.jsx)("path", { d: "M0 1.5H21V0H0V1.5Z" }),
              (0, y.jsx)("path", { d: "M0 7.5H21V6H0V7.5Z" }),
              (0, y.jsx)("path", { d: "M21 13.5H0V12H21V13.5Z" }),
            ],
          });
        };
      function tn(e) {
        return (
          (tn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          tn(e)
        );
      }
      function nn(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != tn(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != tn(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == tn(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var rn = function (e) {
        var t,
          n = e.buyerId,
          r = e.baseURL,
          o = e.contextualMenu,
          l = e.followers,
          a = e.image,
          c = e.bubble,
          u = e.isMobile,
          s = e.isWebview,
          d = e.labels,
          f = e.namespace,
          v = e.optionsMenu,
          b = e.ownerId,
          m = e.socialProfileType,
          h = e.type,
          w = e.siteId,
          g = e.tracks,
          _ = e.onMenuClick,
          j = e.barInfo,
          C = e.deviceType,
          L = e.handlePostFollow,
          x = e.theme,
          S = e.flowSource,
          O = e.trackingData,
          M = e.globalPosition,
          E = e.i18n,
          k = e.layoutMenuMobile,
          P = e.italicHeader,
          T = e.openTooltip,
          I = e.setOpenTooltip,
          N = a || {},
          A = N.target,
          R = N.hidden,
          H = void 0 !== R && R,
          D = o || {},
          Z = D.text,
          V = D.deep_link,
          F =
            null == d ||
            null ===
              (t = d.find(function (e) {
                return "full_name" === e.id;
              })) ||
            void 0 === t ||
            null === (t = t.label) ||
            void 0 === t
              ? void 0
              : t.text,
          W = h.toUpperCase(),
          U = W === te.Affiliate,
          B = W === te.Social,
          K = W === te.Landing,
          G = x === te.LandingCBT && "with_followers" === k,
          z = [te.Super, te.SuperPartner, te.Landing].includes(W),
          Y = U || B || (null == c ? void 0 : c.isCompact),
          $ = W === te.Landing ? " ui-es-clickable" : "",
          q = i()(
            "".concat(f, "__profile-mobile"),
            nn(
              nn(
                {
                  "profile--social":
                    null == m
                      ? void 0
                      : m.includes(null == h ? void 0 : h.toLowerCase()),
                },
                "".concat(f, "__profile-mobile--supermarket"),
                z
              ),
              "".concat(f, "__profile-mobile--landing-cbt"),
              G
            )
          ),
          Q = i()(
            "".concat(f, "__profile-mobile-menu"),
            nn({}, "".concat(f, "__profile-mobile-menu--landing-cbt"), G)
          ),
          X = function () {
            var e = (function (e) {
              if (e.startsWith("http") && s) {
                var t = encodeURIComponent(e);
                return "meli://webview/?webkit-engine=2&refresh_mode=pull&hides_bottom_bar=true&bar_content_color=FFFFFF&bar_visibility=gone&url=".concat(
                  t
                );
              }
              return e;
            })(V);
            _(e);
          },
          J = function (e, t) {
            var n = Ke(e, t);
            return pt(n, M);
          },
          ee = function () {
            return (0, y.jsx)(Ft, {
              namespace: f,
              type: h,
              image: a,
              isMobile: u,
              nameEshop: F,
              bubble: c,
              ownerId: b,
              theme: x,
              layoutMenuMobile: k,
              openTooltip: T,
              setOpenTooltip: I,
            });
          },
          ne =
            A && !Y
              ? (0, y.jsx)("div", {
                  className: "".concat(f, "__profile-image ui-es-clickable"),
                  onClick: function () {
                    return Kt(J(A, O), s);
                  },
                  "data-testid": "logo-button",
                  role: "button",
                  tabIndex: 0,
                  children: ee(),
                })
              : (0, y.jsx)("div", {
                  className: "".concat(f, "__profile-image"),
                  children: ee(),
                });
        return u
          ? (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsxs)("div", {
                  className: "".concat(q),
                  children: [
                    !H && ne,
                    (0, y.jsxs)("div", {
                      className: ""
                        .concat(f, "__profile-information")
                        .concat($),
                      children: [
                        K &&
                          d.map(function (e) {
                            var t = e.id,
                              o = e.icon,
                              i = e.label;
                            return (0, y.jsx)(
                              Ot,
                              {
                                id: t,
                                icon: o,
                                label: i,
                                followers: l,
                                isMobile: u,
                                ownerId: b,
                                buyerId: n,
                                baseURL: r,
                                type: h,
                                siteId: w,
                                tracks: g,
                                onClick: function () {
                                  return Kt(J(A, O), s);
                                },
                                role: "button",
                                deviceType: C,
                                theme: x,
                                flowSource: S,
                                layoutMenuMobile: k,
                                italicHeader: P,
                              },
                              "".concat(t).concat(i.text)
                            );
                          }),
                        !K &&
                          d.map(function (e) {
                            var t = e.id,
                              o = e.icon,
                              i = e.label;
                            return (0,
                            y.jsx)(Ot, { id: t, icon: o, label: i, followers: l, isMobile: u, ownerId: b, buyerId: n, baseURL: r, type: h, siteId: w, tracks: g, barInfo: j, deviceType: C, handlePostFollow: L, theme: x, flowSource: S, i18n: E }, "".concat(t).concat(i.text));
                          }),
                      ],
                    }),
                    !(
                      null != m &&
                      m.includes(null == h ? void 0 : h.toLowerCase())
                    ) &&
                      (0, y.jsxs)("div", {
                        className: "".concat(Q),
                        children: [
                          G &&
                            l &&
                            (0, y.jsx)(de, {
                              followers: l,
                              namespace: f,
                              isMobile: u,
                              ownerId: b,
                              buyerId: n,
                              baseURL: r,
                              type: h,
                              siteId: w,
                              tracks: g,
                              barInfo: j,
                              deviceType: C,
                              handlePostFollow: L,
                              flowSource: S,
                              display: "button-only",
                              theme: x,
                              i18n: E,
                              layoutMenuMobile: k,
                            }),
                          (0, y.jsxs)(p.$n, {
                            "data-testid": "menu-button",
                            hierarchy: "mute",
                            size: "small",
                            onClick: function () {
                              return X();
                            },
                            children: [
                              z && !G && (0, y.jsx)(Jt, {}),
                              !G && Z,
                              G && (0, y.jsx)(en, {}),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
                (null == m
                  ? void 0
                  : m.includes(null == h ? void 0 : h.toLowerCase())) &&
                  (0, y.jsx)(It, { optionsMenu: v, isWebview: s }),
              ],
            })
          : null;
      };
      function on(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                l,
                a = [],
                c = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (a.push(r.value), a.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((l = n.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return ln(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? ln(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ln(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var an = function (e) {
          var t,
            n = e.id,
            o = e.title,
            i = e.content,
            l = e.is_open,
            a = e.type,
            c = e.closable,
            u = e.setCategoryAdults,
            s = i.text,
            d = i.primary_action,
            f = i.secondary_action,
            v = on((0, r.useState)(l), 2),
            b = v[0],
            m = v[1],
            h = "card" === a || "full" === a ? "medium" : "large",
            w = function () {
              var e;
              u(!1),
                null === (e = localStorage) ||
                  void 0 === e ||
                  e.setItem("storefront-adults-category", !1),
                m(!1),
                (window.location.href = null == f ? void 0 : f.href);
            },
            g = (0, y.jsx)(p.$n, {
              id: null == d ? void 0 : d.id,
              href: null == d ? void 0 : d.href,
              onClick: function () {
                var e;
                u(!0),
                  null === (e = localStorage) ||
                    void 0 === e ||
                    e.setItem("storefront-adults-category", !0),
                  m(!1);
              },
              size: h,
              children: null == d ? void 0 : d.text,
            }),
            _ = (0, y.jsx)(p.$n, {
              id: null == f ? void 0 : f.id,
              className: "ui-ms-modal-wrapper__reject-button",
              hierarchy: "quiet",
              href: null == f ? void 0 : f.href,
              onClick: function () {
                return w();
              },
              size: h,
              children: null == f ? void 0 : f.text,
            });
          return (0, y.jsx)(E.a, {
            id: n,
            className: "ui-ms-modal-wrapper--eshop",
            title: o,
            srLabel: o,
            type: a,
            open: b,
            showCloseButton: c,
            closeButtonSrLabel: "cerrar",
            onClose: function () {
              return w();
            },
            closeUrl: null == f ? void 0 : f.href,
            actions: { primary: g, secondary: _ },
            children:
              ((t = s),
              (0, y.jsx)(M.Ay, { options: { forceBlock: !0 }, children: t })),
          });
        },
        cn = { coupon: (0, y.jsx)(ee, {}) },
        un = function (e) {
          var t = e.icon,
            n = e.visible,
            o = e.text,
            i = e.isMobile;
          if (!n || !i) return null;
          var l = cn["".concat(t)];
          return (0, y.jsxs)("div", {
            className: "ui-es-profile-header__bar-info",
            children: [
              l && r.cloneElement(l),
              (0, y.jsx)("p", { children: o }),
            ],
          });
        };
      function sn(e) {
        return (
          (sn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          sn(e)
        );
      }
      function dn() {
        var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function i(n, r, o, i) {
          var c = r && r.prototype instanceof a ? r : a,
            u = Object.create(c.prototype);
          return (
            fn(
              u,
              "_invoke",
              (function (n, r, o) {
                var i,
                  a,
                  c,
                  u = 0,
                  s = o || [],
                  d = !1,
                  f = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: p,
                    f: p.bind(e, 4),
                    d: function (t, n) {
                      return (i = t), (a = 0), (c = e), (f.n = n), l;
                    },
                  };
                function p(n, r) {
                  for (
                    a = n, c = r, t = 0;
                    !d && u && !o && t < s.length;
                    t++
                  ) {
                    var o,
                      i = s[t],
                      p = f.p,
                      v = i[2];
                    n > 3
                      ? (o = v === r) &&
                        ((c = i[(a = i[4]) ? 5 : ((a = 3), 3)]),
                        (i[4] = i[5] = e))
                      : i[0] <= p &&
                        ((o = n < 2 && p < i[1])
                          ? ((a = 0), (f.v = r), (f.n = i[1]))
                          : p < v &&
                            (o = n < 3 || i[0] > r || r > v) &&
                            ((i[4] = n), (i[5] = r), (f.n = v), (a = 0)));
                  }
                  if (o || n > 1) return l;
                  throw ((d = !0), r);
                }
                return function (o, s, v) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    d && 1 === s && p(s, v), a = s, c = v;
                    (t = a < 2 ? e : c) || !d;

                  ) {
                    i ||
                      (a
                        ? a < 3
                          ? (a > 1 && (f.n = -1), p(a, c))
                          : (f.n = c)
                        : (f.v = c));
                    try {
                      if (((u = 2), i)) {
                        if ((a || (o = "next"), (t = i[o]))) {
                          if (!(t = t.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          (c = t.value), a < 2 && (a = 0);
                        } else
                          1 === a && (t = i.return) && t.call(i),
                            a < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method"
                              )),
                              (a = 1));
                        i = e;
                      } else if ((t = (d = f.n < 0) ? c : n.call(r, f)) !== l)
                        break;
                    } catch (t) {
                      (i = e), (a = 1), (c = t);
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: t, done: d };
                };
              })(n, o, i),
              !0
            ),
            u
          );
        }
        var l = {};
        function a() {}
        function c() {}
        function u() {}
        t = Object.getPrototypeOf;
        var s = [][r]
            ? t(t([][r]()))
            : (fn((t = {}), r, function () {
                return this;
              }),
              t),
          d = (u.prototype = a.prototype = Object.create(s));
        function f(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, u)
              : ((e.__proto__ = u), fn(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(d)),
            e
          );
        }
        return (
          (c.prototype = u),
          fn(d, "constructor", u),
          fn(u, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          fn(u, o, "GeneratorFunction"),
          fn(d),
          fn(d, o, "Generator"),
          fn(d, r, function () {
            return this;
          }),
          fn(d, "toString", function () {
            return "[object Generator]";
          }),
          (dn = function () {
            return { w: i, m: f };
          })()
        );
      }
      function fn(e, t, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        (fn = function (e, t, n, r) {
          function i(t, n) {
            fn(e, t, function (e) {
              return this._invoke(t, n, e);
            });
          }
          t
            ? o
              ? o(e, t, {
                  value: n,
                  enumerable: !r,
                  configurable: !r,
                  writable: !r,
                })
              : (e[t] = n)
            : (i("next", 0), i("throw", 1), i("return", 2));
        }),
          fn(e, t, n, r);
      }
      function pn(e, t, n, r, o, i, l) {
        try {
          var a = e[i](l),
            c = a.value;
        } catch (e) {
          return void n(e);
        }
        a.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function vn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function bn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? vn(Object(n), !0).forEach(function (t) {
                mn(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : vn(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function mn(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != sn(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != sn(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == sn(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function yn(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                l,
                a = [],
                c = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (a.push(r.value), a.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((l = n.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return hn(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? hn(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function hn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var wn = [h.c.TYPES.AFFILIATE, h.c.TYPES.SOCIAL],
        gn = [h.c.TYPES.SUPER, h.c.TYPES.SUPER_PARTNER],
        _n = [h.c.TYPES.SELLER, h.c.TYPES.BRAND],
        jn = function (e) {
          var t,
            n = e.namespace,
            o = void 0 === n ? "ui-ms-profile" : n,
            a = e.type,
            c = e.banner,
            u = e.image,
            s =
              void 0 === u
                ? {
                    url: "https://www.mercadolibre.com/org-img/mkt/email-mkt-assets/my-profile/ML/profileIcon.svg",
                  }
                : u,
            d = e.story,
            f = e.subtype,
            p = e.labels,
            v = e.options_menu,
            b = e.menu,
            m = e.menu_type,
            w = e.behavior,
            g = e.isWebview,
            _ = e.contextual_menu,
            j = e.device_type,
            C = e.followers,
            L = e.children,
            x = e.ownerId,
            S = e.buyerId,
            O = e.owner_id,
            M = e.buyer_id,
            E = e.baseURL,
            k = e.siteId,
            P = e.tracks,
            T = e.share,
            I = e.adult_modal,
            N = e.setIsOpen,
            A = e.setUrl,
            R = e.isEditable,
            H = e.isOpenOverlay,
            D = e.bar_info,
            Z = e.viewerSubscription,
            V = e.theme,
            F = e.flowSource,
            W = e.trackingData,
            U = e.background_image,
            B = e.header_type,
            K = e.globalPosition,
            Y = e.hidden_background,
            $ = e.italic_text,
            q = e.i18n,
            Q = e.layout_menu_mobile,
            X = yn(r.useState(D || {}), 2),
            J = X[0],
            ee = X[1],
            te = yn(
              (0, r.useState)({
                state: (null == d ? void 0 : d.state) || "NO_STORIES",
                bubbleAnimation: "NEWS" === (null == d ? void 0 : d.state),
                story_viewer_url:
                  (null == d ? void 0 : d.story_viewer_url) || "",
                showTooltip: !1 === (null == J ? void 0 : J.visible),
              }),
              2
            ),
            oe = te[0],
            ie = te[1],
            le = yn((0, r.useState)(C), 2),
            ae = le[0],
            ce = le[1],
            ue = "NO_STORIES" !== (null == d ? void 0 : d.state) && !!Z,
            se = null == a ? void 0 : a.toLowerCase(),
            de = yn((0, r.useState)(!0), 2),
            fe = de[0],
            pe = de[1],
            ve = "mobile" === j || "native" === j,
            be = null != x ? x : O,
            me = null != S ? S : M,
            ye = (c || {}).url,
            he =
              null === h.c.HIDDEN_NODE_HEADER ||
              void 0 === h.c.HIDDEN_NODE_HEADER
                ? void 0
                : h.c.HIDDEN_NODE_HEADER.includes(se),
            we = null == T ? void 0 : T.snackbar_message,
            ge =
              (null == J ? void 0 : J.visible) &&
              "do_follow" === (null == ae ? void 0 : ae.cta_status),
            _e =
              (null == ae || null === (t = ae.follows_entity) || void 0 === t
                ? void 0
                : t.entity_id) || "",
            je = yn((0, r.useState)(!1), 2),
            Ce = je[0],
            Le = je[1],
            xe = yn((0, r.useState)(null), 2),
            Se = xe[0],
            Oe = xe[1],
            Me = yn((0, r.useState)(ge), 2),
            Ee = Me[0],
            ke = Me[1],
            Pe = yn((0, r.useState)(!1), 2),
            Te = Pe[0],
            Ie = Pe[1],
            Ne = yn(
              (0, r.useState)(
                i()(
                  "".concat(o, "__header"),
                  mn(
                    mn(
                      mn({}, "".concat(o, "__header--full-banner"), ye),
                      "".concat(o, "__header--").concat(se),
                      a
                    ),
                    "".concat(o, "--with-adult-modal"),
                    I && !Se
                  )
                )
              ),
              2
            ),
            Ae = Ne[0],
            Re = Ne[1],
            He = (0, r.useRef)(!1),
            De = i()(
              "".concat(o, "__container"),
              mn({}, "".concat(o, "__container--").concat(B), B)
            ),
            Ze = bn(
              bn({}, d),
              {},
              {
                size: "desktop" === j ? "48" : "56",
                showFollowing: !1,
                spacing: "desktop" !== j,
                isCompact: "compacted" === f,
              },
              oe
            ),
            Ve = (function (e) {
              if (!(null == e ? void 0 : e.showTooltip)) return !1;
              var t = ne("TOOLTIP_STORY_VIEWER"),
                n = null == e ? void 0 : e.tooltip,
                r = Boolean(
                  n &&
                    (null == n ? void 0 : n.initial) &&
                    (null == n ? void 0 : n.after)
                );
              return Boolean(
                !t && "NEWS" === (null == e ? void 0 : e.state) && r
              );
            })(Ze),
            Fe = (function () {
              var e,
                t =
                  ((e = dn().m(function e(t) {
                    return dn().w(function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            Gt(t, g, w, He, function () {
                              N(!0), A(t);
                            });
                          case 1:
                            return e.a(2);
                        }
                    }, e);
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (r, o) {
                      var i = e.apply(t, n);
                      function l(e) {
                        pn(i, r, o, l, a, "next", e);
                      }
                      function a(e) {
                        pn(i, r, o, l, a, "throw", e);
                      }
                      l(void 0);
                    });
                  });
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          (0, r.useEffect)(
            function () {
              if (ue && "undefined" != typeof window && window.MobileWebKit) {
                var e = window.MobileWebKit,
                  t = e.events.subscribe(Z, function (e) {
                    try {
                      var t = e.detail.args;
                      if (!t.updateSubcriptions) return;
                      var n = t.updateSubcriptions.storefronts,
                        r =
                          null == n
                            ? void 0
                            : n.find(function (e) {
                                return (
                                  (null == e ? void 0 : e.storefront_id) === _e
                                );
                              });
                      r &&
                        (ie(function (e) {
                          return bn(
                            bn({}, e),
                            {},
                            {
                              state:
                                (null == r ? void 0 : r.state) || "NO_STORIES",
                              story_viewer_url:
                                (null == r ? void 0 : r.story_viewer_url) || "",
                              showTooltip: !1,
                            }
                          );
                        }),
                        ce(function (e) {
                          var t =
                            null != r && r.following
                              ? "stop_follow"
                              : "do_follow";
                          return bn(bn({}, e), {}, { cta_status: t });
                        }));
                    } catch (e) {}
                  });
                if (t)
                  return function () {
                    return e.events.unsubscribe(t);
                  };
              }
            },
            [ue, _e, Z]
          );
          var We = function (e) {
            "stop_follow" === (e.data || {}).followState &&
              (ee(function (e) {
                return bn(bn({}, e), {}, { visible: !1 });
              }),
              ae &&
                ce(function (e) {
                  return bn(bn({}, e), {}, { priority_status: "stop_follow" });
                }));
          };
          r.useEffect(function () {
            return (
              window.addEventListener("reload-coupons", We),
              function () {
                return window.removeEventListener("reload-coupons", We);
              }
            );
          }, []),
            (0, r.useEffect)(
              function () {
                Ve
                  ? (Ie(!0), re("TOOLTIP_STORY_VIEWER", !0))
                  : (null != Ze && Ze.showTooltip) || Ie(!1);
              },
              [
                null == Ze ? void 0 : Ze.showTooltip,
                null == Ze ? void 0 : Ze.state,
                null == Ze ? void 0 : Ze.tooltip,
              ]
            ),
            (0, r.useEffect)(function () {
              var e,
                t,
                n,
                r,
                o = P.melidata_track,
                i = o.event_data,
                l = o.type,
                a = o.extra_data,
                c = [
                  "home",
                  "search",
                  "vpp",
                  "clips",
                  "noindex",
                  "vip",
                ].includes(
                  null == i ||
                    null === (e = i.client) ||
                    void 0 === e ||
                    null === (t = e.toLowerCase) ||
                    void 0 === t
                    ? void 0
                    : t.call(e)
                )
                  ? i.client.toLowerCase()
                  : "no_valid_client",
                u = bn(
                  bn({}, i),
                  {},
                  {
                    client: c,
                    flow_source: F || "NOT_SPECIFIED",
                    story_state:
                      (null == d ||
                      null === (n = d.state) ||
                      void 0 === n ||
                      null === (r = n.toLowerCase) ||
                      void 0 === r
                        ? void 0
                        : r.call(n)) || "not_apply",
                    tooltip: Ve ? "stories" : "not_apply",
                  }
                );
              G(z.RENDER_COMPONENT, u, l, a);
            }, []),
            (0, r.useEffect)(
              function () {
                Ce &&
                  setTimeout(function () {
                    Le(!1);
                  }, 5e3);
              },
              [Ce]
            );
          var Ue = function () {
            window.MobileWebKit.navigation.reload();
          };
          (0, r.useEffect)(
            function () {
              var e;
              fe
                ? pe(!1)
                : !me &&
                  window.MobileWebKit &&
                  (null === (e = window.MobileWebKit) ||
                    void 0 === e ||
                    null === (e = e.lifecycle) ||
                    void 0 === e ||
                    e.onViewAppeared(Ue));
            },
            [me, fe]
          ),
            (0, r.useEffect)(function () {
              window.MobileWebKit &&
                "android" === window.MobileWebKit.platform &&
                window.MobileWebKit.lifecycle.onViewAppeared(function () {
                  He.current = !1;
                });
            }, []),
            (0, r.useEffect)(function () {
              var e,
                t =
                  null === (e = localStorage) || void 0 === e
                    ? void 0
                    : e.getItem("storefront-adults-category");
              Oe("true" === t);
            }, []),
            (0, r.useEffect)(
              function () {
                Se && Re(Ae.replace("".concat(o, "--with-adult-modal"), ""));
              },
              [Se]
            ),
            (0, r.useEffect)(function () {
              window &&
                window.MobileWebKit &&
                _ &&
                _.prefetch_links &&
                _.prefetch_links.forEach(function (e) {
                  return window.MobileWebKit.prefetch(
                    null == e ? void 0 : e.url,
                    null == e ? void 0 : e.seconds
                  );
                });
            }, []);
          var Be = _n.includes(se) ? h.c.MAX_L2["".concat(se)] : null,
            Ke = function (e) {
              "do_follow" === (null == e ? void 0 : e.action) &&
                ge &&
                null != e &&
                e.checkCoupon &&
                ke(!1),
                (function (e) {
                  var t = e || {},
                    n = t.action,
                    r = t.checkCoupon;
                  if (
                    ("undefined" != typeof window &&
                      window.MobileWebKit &&
                      window.MobileWebKit.events.dispatch(
                        "STOREFRONT_FOLLOWED",
                        { action: n, storefront: _e }
                      ),
                    r)
                  ) {
                    var o,
                      i = new MessageEvent("reload-coupons", {
                        data: { callAction: n },
                      });
                    null !== (o = window) &&
                      void 0 !== o &&
                      o.dispatchEvent &&
                      window.dispatchEvent(i);
                  }
                })(e);
            };
          return (
            (0, r.useEffect)(
              function () {
                !1 === (null == J ? void 0 : J.visible) && ke(!1);
              },
              [null == J ? void 0 : J.visible]
            ),
            (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsxs)("div", {
                  className: Ae,
                  children: [
                    !1 === Se &&
                      I &&
                      (0, y.jsx)(
                        an,
                        bn(bn({}, I), {}, { setCategoryAdults: Oe })
                      ),
                    (0, y.jsx)("div", {
                      children: (0, y.jsx)(Xt, {
                        banner: c,
                        buyerId: me,
                        baseURL: E,
                        contextualMenu: _,
                        followers: ae,
                        image: s,
                        bubble: Ze,
                        isMobile: ve,
                        labels: p,
                        namespace: o,
                        optionsMenu: v,
                        ownerId: be,
                        socialProfileType: wn,
                        superProfileType: gn,
                        type: a,
                        isWebview: g,
                        siteId: k,
                        tracks: P,
                        share: T,
                        setShowSnackbar: Le,
                        deviceType: j,
                        handlePostFollow: Ke,
                        theme: V,
                        headerType: B,
                        flowSource: F,
                        trackingData: W,
                        globalPosition: K,
                        hiddenBackground: Y,
                        italicHeader: $,
                        openTooltip: Te,
                        setOpenTooltip: Ie,
                        layoutMenuMobile: Q,
                        children: L,
                      }),
                    }),
                    (0, y.jsxs)("div", {
                      className: De,
                      style:
                        null != U && U.url
                          ? { backgroundImage: "url(".concat(U.url, ")") }
                          : {},
                      children: [
                        (0, y.jsx)(rn, {
                          menuType: m,
                          banner: c,
                          baseURL: E,
                          buyerId: me,
                          contextualMenu: _,
                          followers: ae,
                          image: s,
                          bubble: Ze,
                          isMobile: ve,
                          isWebview: g,
                          labels: p,
                          namespace: o,
                          optionsMenu: v,
                          behavior: w,
                          ownerId: be,
                          socialProfileType: wn,
                          type: a,
                          siteId: k,
                          tracks: P,
                          onMenuClick: Fe,
                          barInfo: J,
                          deviceType: j,
                          handlePostFollow: Ke,
                          theme: V,
                          flowSource: F,
                          trackingData: W,
                          globalPosition: K,
                          i18n: q,
                          layoutMenuMobile: Q,
                          italicHeader: $,
                          openTooltip: Te,
                          setOpenTooltip: Ie,
                        }),
                        !(null != wn && wn.includes(se)) &&
                          !ve &&
                          (0, y.jsx)(_t, {
                            type: a,
                            baseURL: E,
                            buyerId: me,
                            categoriesLabel:
                              null == b ? void 0 : b.categories_label,
                            categoriesSelected:
                              null == b ? void 0 : b.categories_selected,
                            followers: ae,
                            isMobile: ve,
                            maxNodesInLine:
                              null == b ? void 0 : b.max_nodes_in_line,
                            menuL1: null == b ? void 0 : b.nodes,
                            menuType: m,
                            withSeparator:
                              null == b ? void 0 : b.with_separator,
                            ownerId: be,
                            viewAllLabel: null == b ? void 0 : b.view_all_label,
                            siteId: k,
                            tracks: P,
                            share: T,
                            isHiddenNodeHeader: he,
                            setShowSnackbar: Le,
                            isEditable: R,
                            isOpenOverlay: H,
                            limitL2: Be,
                            barInfo: J,
                            deviceType: j,
                            handlePostFollow: Ke,
                            flowSource: F,
                            trackingData: W,
                            globalPosition: K,
                            theme: V,
                            customStyle: null == b ? void 0 : b.custom_style,
                          }),
                      ],
                    }),
                    (0, y.jsx)("div", {
                      className: "".concat(o, "__search-border"),
                    }),
                  ],
                }),
                (0, y.jsx)(
                  un,
                  bn(bn({}, J), {}, { isMobile: ve, visible: Ee })
                ),
                "undefined" != typeof window &&
                  void 0 !== window.document &&
                  null !== window.document.body &&
                  we &&
                  (0, y.jsx)(l.q, {
                    color: "black",
                    delay: 5e3,
                    message: we,
                    show: Ce,
                  }),
              ],
            })
          );
        };
      var Cn = function () {
          return (0, y.jsxs)("svg", {
            "aria-hidden": "true",
            width: 240,
            height: 57,
            viewBox: "0 0 240 57",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M139.169 56c6.377-3.719 12.622-9.136 16.347-15.62 6.536-11.378 5.635-19.676 2.275-28.118C154.395 3.728 141.983-1.3 132.441.293c-9.542 1.593-16.221 11.498-29.09 12.919C90.483 14.633 80.021 21.369 77.019 31c-3.152 10.114 3.02 18.568 8.569 22.62a59.518 59.518 0 003.465 2.36L139.17 56z",
                fill: "#000",
                fillOpacity: 0.04,
              }),
              (0, y.jsx)("path", {
                d: "M74.024 37.356c15.281 0 16.705 18.534 16.705 18.534s2.771-13.298 11.985-13.298c9.213 0 11.985 13.298 11.985 13.298s1.873-24.518 16.704-24.518",
                stroke: "#333",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeDasharray: "4 4",
              }),
              (0, y.jsx)("path", {
                d: "M141.589 8.074a6.293 6.293 0 003.402-.63 3.277 3.277 0 012.924 0 6.29 6.29 0 003.401.63 3.267 3.267 0 012.72 1.045 6.272 6.272 0 002.948 1.811c.982.274 1.784 1 2.149 1.943a6.23 6.23 0 002.092 2.751 3.206 3.206 0 011.293 2.576 6.195 6.195 0 00.95 3.317c.54.858.639 1.923.268 2.865a6.187 6.187 0 00-.32 3.434 3.196 3.196 0 01-.794 2.766 6.217 6.217 0 00-1.548 3.087 3.222 3.222 0 01-1.75 2.299 6.25 6.25 0 00-2.564 2.32 3.256 3.256 0 01-2.476 1.52 6.285 6.285 0 00-3.23 1.242 3.275 3.275 0 01-2.871.532 6.297 6.297 0 00-3.46 0 3.274 3.274 0 01-2.871-.532 6.291 6.291 0 00-3.23-1.241 3.255 3.255 0 01-2.476-1.521 6.26 6.26 0 00-2.565-2.32 3.227 3.227 0 01-1.75-2.299 6.209 6.209 0 00-1.548-3.087 3.195 3.195 0 01-.793-2.766 6.178 6.178 0 00-.321-3.434 3.188 3.188 0 01.268-2.865 6.195 6.195 0 00.95-3.317 3.211 3.211 0 011.293-2.576 6.24 6.24 0 002.093-2.75 3.238 3.238 0 012.149-1.944 6.282 6.282 0 002.948-1.81 3.266 3.266 0 012.719-1.046z",
                fill: "#fff",
                stroke: "#fff",
                strokeWidth: 3,
              }),
              (0, y.jsx)("path", {
                d: "M144.322 6.101a4.776 4.776 0 014.262 0v0c.8.399 1.7.565 2.59.48v0a4.767 4.767 0 013.97 1.527v0a4.777 4.777 0 002.242 1.377v0a4.741 4.741 0 013.146 2.848v0c.321.83.874 1.556 1.588 2.088v0a4.706 4.706 0 011.898 3.784v0a4.695 4.695 0 00.72 2.514v0a4.69 4.69 0 01.394 4.213v0a4.687 4.687 0 00-.243 2.6v0a4.694 4.694 0 01-1.166 4.069v0a4.724 4.724 0 00-1.174 2.34v0a4.721 4.721 0 01-2.565 3.374v0a4.76 4.76 0 00-1.949 1.763v0a4.755 4.755 0 01-3.619 2.225v0a4.785 4.785 0 00-2.458.944v0a4.776 4.776 0 01-4.188.778v0a4.798 4.798 0 00-2.635 0v0a4.774 4.774 0 01-4.187-.778v0a4.791 4.791 0 00-2.458-.944v0a4.758 4.758 0 01-3.62-2.225v0a4.757 4.757 0 00-1.948-1.763v0a4.725 4.725 0 01-2.566-3.373v0a4.708 4.708 0 00-1.174-2.341v0a4.697 4.697 0 01-1.166-4.068v0a4.678 4.678 0 00-.242-2.601v0a4.687 4.687 0 01.393-4.213v0a4.695 4.695 0 00.72-2.514v0a4.708 4.708 0 011.898-3.784v0a4.74 4.74 0 001.589-2.088v0a4.738 4.738 0 013.145-2.848v0a4.772 4.772 0 002.242-1.377v0a4.768 4.768 0 013.971-1.527v0c.89.085 1.79-.081 2.59-.48v0z",
                stroke: "#333",
                strokeWidth: 1.5,
              }),
              (0, y.jsx)("path", {
                d: "M137.063 6.718a6.078 6.078 0 015.197 5.015M138.498 23.923c-1.224-.31-3.181.637-3.519 1.956M122.762 20.582c-.814-.279-2.197.254-2.503 1.131M131.505 18.754c.349-.442 1.3-1.225 2.31-.824M159.442 25.297c-.555-.108-1.689-.595-1.786-1.67M146.064 46.146c-.008.56-.286 1.755-1.335 2.043M127.753 15.494c1.912-1.29 5.413-1.461 8.011 0M152.162 18.432c.216 2.285-1.321 5.412-3.864 6.967M156.406 19.936s-.505-2.687 2.057-5.875 4.403-3.26 4.403-3.26M132.397 39.059c-.672-2.196.203-5.565 2.381-7.593M136.739 18.288c1.984.502 4.099 2.2 4.763 4.406",
                stroke: "#333",
                strokeWidth: 1.5,
                strokeLinecap: "round",
              }),
              (0, y.jsx)("path", {
                d: "M140.239 13.703c.818 1.445 2.209 5.251 1.227 8.92-.982 3.668.192 5.73.902 6.304M133.779 20.545c-3.356 1.469-5.76 4.922-6.135 9.707M129.701 24.02c.866.62 2.735 2.471 3.284 4.907M159.798 30.696c-2.618-.745-5.973.223-9.112 3.029M153.818 13.98c-2.618-.745-5.972.222-9.112 3.028M164.994 32.688c-4.366 3.474-8.699.755-9.753-1.51M148.205 14.596c-3.392-4.418-.546-8.65 1.762-9.64M137.063 33.906s2.201 1.468 2.635 4.657c.433 3.188-1.011 4.62-1.011 4.62M145.954 21.62s2.202 1.468 2.635 4.656c.433 3.188-1.011 4.621-1.011 4.621M139.806 38.778c.794-.466 2.808-1.204 4.511-.43M154.878 11.32c.883.265 2.793 1.238 3.371 3.006M130.143 2.64c.883.265 2.793 1.237 3.371 3.006M135.728 29.607c.818-.06 2.894.38 4.655 2.615 1.761 2.235 3.044 2.913 3.465 2.973M140.889 32.831c.661 0 2.151-.129 2.815-.645M147.312 38.133c1.685-.036 5.421-.48 6.893-1.97M151.606 37.524c.818.848 3.111 2.436 5.738 2.006M160.484 17.68c-.265.919-.173 3.338 2.31 5.659M130.642 7.764c-.554-.109-1.688-.595-1.785-1.671M153.313 49.2c-.555-.109-1.688-.595-1.786-1.671",
                stroke: "#333",
                strokeWidth: 1.5,
                strokeLinecap: "round",
              }),
              (0, y.jsx)("path", {
                d: "M85.515 56h63.747",
                stroke: "#333",
                strokeWidth: 1.5,
                strokeLinecap: "square",
              }),
              (0, y.jsx)("path", {
                d: "M119.755 15.957a.757.757 0 01-.126-1.27c1.303-1.048 2.932-1.207 4.415-.429.493.26.559.92.125 1.27-1.303 1.049-2.931 1.207-4.414.429z",
                fill: "#fff",
                stroke: "#333",
                strokeWidth: 1.5,
              }),
            ],
          });
        },
        Ln = function () {
          return (0, y.jsxs)("svg", {
            width: "189",
            height: "193",
            viewBox: "0 0 189 193",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, y.jsx)("path", {
                d: "M77.1081 48.7896C84.4186 38.8555 97.783 33.4547 109.821 32.6934C126.293 31.6493 152.597 42.8194 163.072 67.8063C170.628 85.8269 168.729 118.762 136.971 138.836C135.001 140.081 132.998 141.227 130.965 142.279L39.0996 142.279C18.0507 132.64 5.44454 114.02 15.1646 95.5808C22.9702 80.7715 42.2812 76.4255 52.0665 71.6252C62.3151 66.6006 69.0804 59.6939 77.1081 48.7896Z",
                fill: "black",
                fillOpacity: "0.04",
              }),
              (0, y.jsx)("path", {
                d: "M176.268 141.067H14.9346",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("rect", {
                x: "45.6016",
                y: "87.6693",
                width: "92",
                height: "53.3333",
                fill: "white",
              }),
              (0, y.jsx)("path", {
                d: "M45.3154 102.999V86.7513H137.693V116.335V119.999M45.3154 106.999V141.091H137.693V135.335V131.001M137.693 123.999V125.651V126.999",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("rect", {
                x: "97.3838",
                y: "104.241",
                width: "27.1698",
                height: "26.566",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                d: "M106.971 125.716L118.574 114.456",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                d: "M104.85 118.727L111.188 113.188",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M60.2663 141.07L60.1666 115.211C60.1666 108.819 66.1105 103.637 73.4426 103.637C80.7748 103.637 86.7187 108.819 86.7187 115.211L86.8184 141.07L60.2663 141.07Z",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                d: "M81.9137 127.005V122.185",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("mask", {
                id: "path-10-inside-1_1220_248805",
                fill: "white",
                children: (0, y.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M58.664 85.2702C58.664 89.8219 53.9086 93.5118 48.0425 93.5118C42.1763 93.5118 37.4209 89.8219 37.4209 85.2702L37.6014 74.7258H58.8445L58.664 85.2702ZM101.511 85.2704C101.511 89.8221 96.7557 93.512 90.8896 93.512C85.0235 93.512 80.268 89.8221 80.268 85.2704L80.4485 74.726H101.692L101.511 85.2704ZM133.737 93.512C139.603 93.512 144.358 89.8221 144.358 85.2704L144.539 74.726H123.296L123.115 85.2704C123.115 89.8221 127.871 93.512 133.737 93.512Z",
                }),
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M58.664 85.2702C58.664 89.8219 53.9086 93.5118 48.0425 93.5118C42.1763 93.5118 37.4209 89.8219 37.4209 85.2702L37.6014 74.7258H58.8445L58.664 85.2702ZM101.511 85.2704C101.511 89.8221 96.7557 93.512 90.8896 93.512C85.0235 93.512 80.268 89.8221 80.268 85.2704L80.4485 74.726H101.692L101.511 85.2704ZM133.737 93.512C139.603 93.512 144.358 89.8221 144.358 85.2704L144.539 74.726H123.296L123.115 85.2704C123.115 89.8221 127.871 93.512 133.737 93.512Z",
                fill: "#F5F5F5",
              }),
              (0, y.jsx)("path", {
                d: "M58.664 85.2702L54.6646 85.2018L54.664 85.236V85.2702H58.664ZM37.4209 85.2702L33.4215 85.2018L33.4209 85.236V85.2702H37.4209ZM37.6014 74.7258V70.7258H33.6692L33.6019 74.6573L37.6014 74.7258ZM58.8445 74.7258L62.8439 74.7942L62.9135 70.7258H58.8445V74.7258ZM101.511 85.2704L97.5117 85.202L97.5112 85.2362V85.2704H101.511ZM80.268 85.2704L76.2686 85.202L76.268 85.2362V85.2704H80.268ZM80.4485 74.726V70.726H76.5163L76.4491 74.6575L80.4485 74.726ZM101.692 74.726L105.691 74.7944L105.761 70.726H101.692V74.726ZM144.358 85.2704L140.359 85.202L140.358 85.2362V85.2704H144.358ZM144.539 74.726L148.538 74.7944L148.608 70.726H144.539V74.726ZM123.296 74.726V70.726H119.364L119.296 74.6575L123.296 74.726ZM123.115 85.2704L119.116 85.202L119.115 85.2362V85.2704H123.115ZM48.0425 97.5118C55.1142 97.5118 62.664 92.9159 62.664 85.2702H54.664C54.664 86.728 52.7029 89.5118 48.0425 89.5118V97.5118ZM33.4209 85.2702C33.4209 92.9159 40.9707 97.5118 48.0425 97.5118V89.5118C43.382 89.5118 41.4209 86.728 41.4209 85.2702H33.4209ZM33.6019 74.6573L33.4215 85.2018L41.4203 85.3387L41.6008 74.7942L33.6019 74.6573ZM58.8445 70.7258H37.6014V78.7258H58.8445V70.7258ZM62.6634 85.3387L62.8439 74.7942L54.8451 74.6573L54.6646 85.2018L62.6634 85.3387ZM90.8896 97.512C97.9614 97.512 105.511 92.9161 105.511 85.2704H97.5112C97.5112 86.7282 95.5501 89.512 90.8896 89.512V97.512ZM76.268 85.2704C76.268 92.9161 83.8178 97.512 90.8896 97.512V89.512C86.2291 89.512 84.268 86.7282 84.268 85.2704H76.268ZM76.4491 74.6575L76.2686 85.202L84.2674 85.3389L84.4479 74.7944L76.4491 74.6575ZM101.692 70.726H80.4485V78.726H101.692V70.726ZM105.511 85.3389L105.691 74.7944L97.6922 74.6575L97.5117 85.202L105.511 85.3389ZM140.358 85.2704C140.358 86.7282 138.397 89.512 133.737 89.512V97.512C140.809 97.512 148.358 92.9161 148.358 85.2704H140.358ZM140.54 74.6575L140.359 85.202L148.358 85.3389L148.538 74.7944L140.54 74.6575ZM123.296 78.726H144.539V70.726H123.296V78.726ZM127.115 85.3389L127.295 74.7944L119.296 74.6575L119.116 85.202L127.115 85.3389ZM133.737 89.512C129.076 89.512 127.115 86.7282 127.115 85.2704H119.115C119.115 92.9161 126.665 97.512 133.737 97.512V89.512Z",
                fill: "white",
                mask: "url(#path-10-inside-1_1220_248805)",
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M80.0869 85.2696C80.0869 89.8213 75.3314 93.5111 69.4653 93.5111C63.5992 93.5111 58.8438 89.8213 58.8438 85.2696L59.0242 74.7251H80.2673L80.0869 85.2696Z",
                fill: "white",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M122.935 85.2696C122.935 89.8213 118.179 93.5111 112.313 93.5111C106.447 93.5111 101.691 89.8213 101.691 85.2696L101.872 74.7251H123.115L122.935 85.2696Z",
                fill: "white",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M58.664 85.2696C58.664 89.8213 53.9086 93.5111 48.0425 93.5111C42.1763 93.5111 37.4209 89.8213 37.4209 85.2696L37.6014 74.7251H58.8445L58.664 85.2696Z",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M101.511 85.2696C101.511 89.8213 96.7553 93.5111 90.8891 93.5111C85.023 93.5111 80.2676 89.8213 80.2676 85.2696C80.2676 85.2696 80.448 74.7251 80.448 74.7251C80.448 74.7251 101.691 74.7251 101.691 74.7251C101.691 74.7251 101.511 85.2696 101.511 85.2696Z",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M144.357 85.2696C144.357 89.8213 139.602 93.5111 133.736 93.5111C127.87 93.5111 123.114 89.8213 123.114 85.2696C123.114 85.2696 123.295 74.7251 123.295 74.7251C123.295 74.7251 144.538 74.7251 144.538 74.7251C144.538 74.7251 144.357 85.2696 144.357 85.2696Z",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M45.5632 61.9963C46.3414 60.808 46.8874 59.9849 47.0044 59.8413C47.8199 58.8412 49.0604 58.2581 50.3728 58.2581H131.274C132.59 58.2581 133.824 58.9138 134.586 60.0176C141.633 69.4592 144.938 74.2468 144.5 74.3804C143.844 74.5808 37.0673 74.7185 37.3227 74.4047C37.3317 74.3935 37.3553 74.3653 37.3923 74.3213C37.8665 73.7585 39.942 70.6086 42.0458 67.3876L45.5632 61.9963Z",
                fill: "white",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                d: "M161.866 89.8861L154.825 82.8457",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("circle", {
                cx: "146.023",
                cy: "74.029",
                r: "11.2769",
                fill: "white",
                stroke: "white",
                strokeWidth: "4",
              }),
              (0, y.jsx)("circle", {
                cx: "146.023",
                cy: "74.029",
                r: "13.2769",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("rect", {
                x: "160.944",
                y: "84.2005",
                width: "15.5685",
                height: "6.71618",
                rx: "2.66667",
                transform: "rotate(45 160.944 84.2005)",
                fill: "white",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                d: "M139.382 80.863L152.719 67.3077",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                d: "M152.665 80.863L139.328 67.3077",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
            ],
          });
        },
        xn = function () {
          return (0, y.jsxs)("svg", {
            width: "143",
            height: "144",
            viewBox: "0 0 143 144",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, y.jsx)("path", {
                d: "M58.2307 36.0936C63.7136 28.6431 73.7369 24.5925 82.7654 24.0215C95.1195 23.2384 114.847 31.616 122.704 50.3562C128.371 63.8716 126.947 88.5729 103.128 103.629C101.651 104.562 100.148 105.422 98.6238 106.211L29.7244 106.211C13.9377 98.9815 4.48306 85.0168 11.7731 71.187C17.6273 60.0801 32.1106 56.8206 39.4495 53.2204C47.136 49.4519 52.2099 44.2718 58.2307 36.0936Z",
                fill: "black",
                fillOpacity: "0.04",
              }),
              (0, y.jsx)("path", {
                d: "M132.601 105.3H11.6006",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("rect", {
                x: "34.6016",
                y: "65.9988",
                width: "69",
                height: "40",
                fill: "white",
              }),
              (0, y.jsx)("path", {
                d: "M34.3867 76.9988V64.5613H103.67V86.9988M34.3867 80.9988V105.316H103.67V100.999V97.9988M103.67 90.9988V92.4988V93.9988",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("rect", {
                x: "73.4385",
                y: "77.6793",
                width: "20.3774",
                height: "19.9245",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                d: "M80.6278 93.7849L89.3304 85.34",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                d: "M79.038 88.5433L83.7908 84.389",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M45.5996 105.302L45.5248 85.9076C45.5248 81.1131 49.9827 77.2265 55.4819 77.2265C60.981 77.2265 65.4389 81.1131 65.4389 85.9076L65.5137 105.302L45.5996 105.302Z",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                d: "M61.835 94.7515V91.136",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("mask", {
                id: "path-10-inside-1_1220_248767",
                fill: "white",
                children: (0, y.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M44.3982 63.4483C44.3982 66.8621 40.8316 69.6295 36.432 69.6295C32.0324 69.6295 28.4658 66.8621 28.4658 63.4483L28.6012 55.54H44.5335L44.3982 63.4483ZM76.5335 63.4483C76.5335 66.8621 72.9669 69.6295 68.5674 69.6295C64.1678 69.6295 60.6012 66.8621 60.6012 63.4483L60.7365 55.54H76.6689L76.5335 63.4483ZM100.703 69.6295C105.102 69.6295 108.669 66.8621 108.669 63.4483L108.804 55.54H92.8719L92.7365 63.4483C92.7365 66.8621 96.3031 69.6295 100.703 69.6295Z",
                }),
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M44.3982 63.4483C44.3982 66.8621 40.8316 69.6295 36.432 69.6295C32.0324 69.6295 28.4658 66.8621 28.4658 63.4483L28.6012 55.54H44.5335L44.3982 63.4483ZM76.5335 63.4483C76.5335 66.8621 72.9669 69.6295 68.5674 69.6295C64.1678 69.6295 60.6012 66.8621 60.6012 63.4483L60.7365 55.54H76.6689L76.5335 63.4483ZM100.703 69.6295C105.102 69.6295 108.669 66.8621 108.669 63.4483L108.804 55.54H92.8719L92.7365 63.4483C92.7365 66.8621 96.3031 69.6295 100.703 69.6295Z",
                fill: "#F5F5F5",
              }),
              (0, y.jsx)("path", {
                d: "M44.3982 63.4483L41.3986 63.397L41.3982 63.4227V63.4483H44.3982ZM28.4658 63.4483L25.4663 63.397L25.4658 63.4227V63.4483H28.4658ZM28.6012 55.54V52.54H25.6521L25.6016 55.4886L28.6012 55.54ZM44.5335 55.54L47.5331 55.5913L47.5853 52.54H44.5335V55.54ZM76.5335 63.4483L73.534 63.397L73.5335 63.4227V63.4483H76.5335ZM60.6012 63.4483L57.6016 63.397L57.6012 63.4227V63.4483H60.6012ZM60.7365 55.54V52.54H57.7874L57.737 55.4886L60.7365 55.54ZM76.6689 55.54L79.6684 55.5913L79.7206 52.54H76.6689V55.54ZM108.669 63.4483L105.669 63.397L105.669 63.4227V63.4483H108.669ZM108.804 55.54L111.804 55.5913L111.856 52.54H108.804V55.54ZM92.8719 55.54V52.54H89.9228L89.8723 55.4886L92.8719 55.54ZM92.7365 63.4483L89.737 63.397L89.7365 63.4227V63.4483H92.7365ZM36.432 72.6295C41.7358 72.6295 47.3982 69.1826 47.3982 63.4483H41.3982C41.3982 64.5416 39.9273 66.6295 36.432 66.6295V72.6295ZM25.4658 63.4483C25.4658 69.1826 31.1282 72.6295 36.432 72.6295V66.6295C32.9366 66.6295 31.4658 64.5416 31.4658 63.4483H25.4658ZM25.6016 55.4886L25.4663 63.397L31.4654 63.4997L31.6007 55.5913L25.6016 55.4886ZM44.5335 52.54H28.6012V58.54H44.5335V52.54ZM47.3977 63.4997L47.5331 55.5913L41.5339 55.4886L41.3986 63.397L47.3977 63.4997ZM68.5674 72.6295C73.8712 72.6295 79.5335 69.1826 79.5335 63.4483H73.5335C73.5335 64.5416 72.0627 66.6295 68.5674 66.6295V72.6295ZM57.6012 63.4483C57.6012 69.1826 63.2635 72.6295 68.5674 72.6295V66.6295C65.072 66.6295 63.6012 64.5416 63.6012 63.4483H57.6012ZM57.737 55.4886L57.6016 63.397L63.6007 63.4997L63.7361 55.5913L57.737 55.4886ZM76.6689 52.54H60.7365V58.54H76.6689V52.54ZM79.5331 63.4997L79.6684 55.5913L73.6693 55.4886L73.534 63.397L79.5331 63.4997ZM105.669 63.4483C105.669 64.5416 104.198 66.6295 100.703 66.6295V72.6295C106.007 72.6295 111.669 69.1826 111.669 63.4483H105.669ZM105.805 55.4886L105.669 63.397L111.668 63.4997L111.804 55.5913L105.805 55.4886ZM92.8719 58.54H108.804V52.54H92.8719V58.54ZM95.7361 63.4997L95.8714 55.5913L89.8723 55.4886L89.737 63.397L95.7361 63.4997ZM100.703 66.6295C97.2074 66.6295 95.7365 64.5416 95.7365 63.4483H89.7365C89.7365 69.1826 95.3989 72.6295 100.703 72.6295V66.6295Z",
                fill: "white",
                mask: "url(#path-10-inside-1_1220_248767)",
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M60.4655 63.4483C60.4655 66.8621 56.899 69.6295 52.4994 69.6295C48.0998 69.6295 44.5332 66.8621 44.5332 63.4483L44.6685 55.54H60.6009L60.4655 63.4483Z",
                fill: "white",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M92.6013 63.4483C92.6013 66.8621 89.0347 69.6295 84.6351 69.6295C80.2355 69.6295 76.6689 66.8621 76.6689 63.4483L76.8043 55.54H92.7366L92.6013 63.4483Z",
                fill: "white",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M44.3982 63.4483C44.3982 66.8621 40.8316 69.6295 36.432 69.6295C32.0324 69.6295 28.4658 66.8621 28.4658 63.4483L28.6012 55.54H44.5335L44.3982 63.4483Z",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M76.5329 63.4483C76.5329 66.8621 72.9664 69.6295 68.5668 69.6295C64.1672 69.6295 60.6006 66.8621 60.6006 63.4483C60.6006 63.4483 60.7359 55.54 60.7359 55.54C60.7359 55.54 76.6683 55.54 76.6683 55.54C76.6683 55.54 76.5329 63.4483 76.5329 63.4483Z",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M108.669 63.4483C108.669 66.8621 105.102 69.6295 100.702 69.6295C96.3029 69.6295 92.7363 66.8621 92.7363 63.4483C92.7363 63.4483 92.8717 55.54 92.8717 55.54C92.8717 55.54 108.804 55.54 108.804 55.54C108.804 55.54 108.669 63.4483 108.669 63.4483Z",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M34.5727 45.9946C35.1563 45.1034 35.5658 44.486 35.6536 44.3784C36.2652 43.6283 37.1956 43.191 38.1798 43.191H98.856C99.8425 43.191 100.768 43.6827 101.339 44.5106C106.625 51.5918 109.104 55.1825 108.775 55.2827C108.283 55.433 28.2007 55.5363 28.3923 55.3009C28.399 55.2925 28.4167 55.2714 28.4445 55.2384C28.8001 54.8162 30.3567 52.4538 31.9346 50.0381L34.5727 45.9946Z",
                fill: "white",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                d: "M121.8 66.9157L116.52 61.6354",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("circle", {
                cx: "109.918",
                cy: "55.0229",
                r: "8.45768",
                fill: "white",
                stroke: "white",
                strokeWidth: "3",
              }),
              (0, y.jsx)("circle", {
                cx: "109.918",
                cy: "55.0229",
                r: "9.95768",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("rect", {
                x: "121.108",
                y: "62.6515",
                width: "11.6764",
                height: "5.03714",
                rx: "2",
                transform: "rotate(45 121.108 62.6515)",
                fill: "white",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                d: "M104.937 60.1493L114.939 49.9828",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
              (0, y.jsx)("path", {
                d: "M114.899 60.1493L104.897 49.9828",
                stroke: "#333333",
                strokeWidth: "1.5",
              }),
            ],
          });
        },
        Sn = new Map(),
        On = { mobile: (0, y.jsx)(xn, {}), desktop: (0, y.jsx)(Ln, {}) },
        Mn = { mobile: (0, y.jsx)(Cn, {}), desktop: (0, y.jsx)(Cn, {}) };
      Sn.set("super_partner-empty-state", On),
        Sn.set("super-empty-state", On),
        Sn.set("affiliate-empty-state", Mn);
      function En(e) {
        return (
          (En =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          En(e)
        );
      }
      var kn = ["children", "className"];
      function Pn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Tn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Pn(Object(n), !0).forEach(function (t) {
                In(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Pn(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function In(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != En(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != En(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == En(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Nn = function (e) {
          var t = e.children,
            n = e.className,
            r = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = (function (e, t) {
                  if (null == e) return {};
                  var n = {};
                  for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                      if (-1 !== t.indexOf(r)) continue;
                      n[r] = e[r];
                    }
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                  (n = i[r]),
                    -1 === t.indexOf(n) &&
                      {}.propertyIsEnumerable.call(e, n) &&
                      (o[n] = e[n]);
              }
              return o;
            })(e, kn);
          return (0, y.jsx)(
            "h2",
            Tn(Tn({}, r), {}, { className: n, children: t })
          );
        },
        An = function (e) {
          var t = e.redirectLink,
            n = e.label,
            r = e.className;
          return (0, y.jsx)("a", {
            className: r,
            href: t,
            target: "_top",
            children:
              (null == n ? void 0 : n.text) &&
              (0, y.jsxs)(y.Fragment, {
                children: [
                  (0, y.jsx)("span", { "aria-hidden": !0, children: n.text }),
                  (0, y.jsx)("span", {
                    className: "andes-visually-hidden",
                    children: n.accessibility_text,
                  }),
                ],
              }),
          });
        },
        Rn = "ui-ms-repurchase-info",
        Hn = function (e) {
          var t = e.title,
            n = e.subtitle,
            r = e.buttonLabel,
            o = e.variation,
            l = e.redirectLink,
            a = i()(
              "".concat(Rn, "__link"),
              "".concat(Rn, "__link--").concat(o),
              "link-overlay"
            );
          return (0, y.jsxs)("div", {
            className: "".concat(Rn, "--").concat(o),
            children: [
              (0, y.jsxs)("div", {
                className: "".concat(Rn, "__content--").concat(o),
                children: [
                  t &&
                    (0, y.jsx)(Nn, {
                      className: "".concat(Rn, "__title--").concat(o),
                      children: t,
                    }),
                  n &&
                    (0, y.jsx)("span", {
                      className: "".concat(Rn, "__subtitle--").concat(o),
                      children: n,
                    }),
                ],
              }),
              l && (0, y.jsx)(An, { className: a, redirectLink: l, label: r }),
            ],
          });
        },
        Dn = function (e) {
          var t,
            n = e.variation,
            r = e.layoutType,
            o = e.modifier,
            i = e.containerSize,
            l = e.visibleItems,
            a = e.thumbnailClass,
            c = e.overflowValue,
            u = e.style;
          return (0, y.jsx)("div", {
            className: ""
              .concat("ui-ms-repurchase-thumbnail", "__")
              .concat(a, "--")
              .concat(n),
            "aria-hidden": !0,
            children: (0, y.jsx)(P.$, {
              type: r,
              containerSize: i,
              modifier:
                null !== (t = null == u ? void 0 : u.itemModifier) &&
                void 0 !== t
                  ? t
                  : o,
              overflow: c,
              children:
                null == l
                  ? void 0
                  : l.map(function (e) {
                      var t,
                        r =
                          null !== (t = e.images[String(n)]) && void 0 !== t
                            ? t
                            : e.images.mobile;
                      return (0,
                      y.jsx)(P.V, { children: (0, y.jsx)(L.Image, { src: null == r ? void 0 : r.source, alt: null == r ? void 0 : r.imageAlt, lazyload: "off" }) }, null == r ? void 0 : r.source);
                    }),
            }),
          });
        },
        Zn = ["desktop", "mobile", "bottomsheet"];
      function Vn(e) {
        return (
          (Vn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Vn(e)
        );
      }
      function Fn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Wn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Fn(Object(n), !0).forEach(function (t) {
                Un(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Fn(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Un(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != Vn(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != Vn(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == Vn(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Bn = "ui-ms-repurchase",
        Kn = {
          desktop: {
            layoutType: "grid",
            overflow: 4,
            containerSize: 64,
            shadow: "flat",
            paddingSize: 24,
            backgroundColor: "default",
            modifier: "square",
          },
          mobile: {
            layoutType: "grid",
            overflow: 3,
            containerSize: 64,
            shadow: "outline",
            paddingSize: 16,
            backgroundColor: "blue",
            modifier: "square",
          },
          bottomsheet: {
            layoutType: "stacked",
            overflow: 2,
            containerSize: 24,
            shadow: "outline",
            paddingSize: 12,
            backgroundColor: "default",
            modifier: "circle",
          },
        };
      function Gn(e) {
        return (
          (Gn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Gn(e)
        );
      }
      function zn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Yn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? zn(Object(n), !0).forEach(function (t) {
                $n(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : zn(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function $n(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != Gn(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != Gn(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == Gn(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      qn = function (e) {
        var t = e.variation,
          n = e.variationProps,
          r = e.title,
          o = e.subtitle,
          i = e.modifier,
          l = e.buttonLabel,
          a = e.redirectLink,
          c = e.onClose,
          u = n.shadow,
          s = n.paddingSize,
          d = n.cardClasses,
          f = n.contentClasses,
          p = n.chevronElement;
        return (0, y.jsx)(k.Zp, {
          role: "button",
          className: d,
          paddingSize: s,
          shadow: u,
          title: r,
          onClick: c,
          children: (0, y.jsxs)(k.Wu, {
            className: f,
            children: [
              (0, y.jsx)(Hn, {
                title: r,
                subtitle: o,
                buttonLabel: l,
                variation: t,
                redirectLink: a,
              }),
              (0, y.jsx)(Dn, Yn({ modifier: i, variation: t }, n)),
              p,
            ],
          }),
        });
      };
      var qn,
        Qn = {
          BOTTOM_SHEET_REDIRECT: "bs:redirect",
          BOTTOM_SHEET_CLOSE: "bs:close",
        };
      var Xn = r.createContext({});
      function Jn(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                l,
                a = [],
                c = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (a.push(r.value), a.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((l = n.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return er(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? er(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function er(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var tr = function () {},
        nr = { isOpen: !1, setIsOpen: tr, url: "", setUrl: tr },
        rr = function (e) {
          var t = e.children;
          if ("undefined" == typeof window)
            return (0, y.jsx)(Xn.Provider, { value: nr, children: t });
          var n = Jn((0, r.useState)(!1), 2),
            o = n[0],
            i = n[1],
            l = Jn((0, r.useState)(""), 2),
            a = l[0],
            c = l[1],
            u = (0, r.useMemo)(
              function () {
                return { isOpen: o, setIsOpen: i, url: a, setUrl: c };
              },
              [o, a]
            );
          return (0, y.jsx)(Xn.Provider, { value: u, children: t });
        },
        or = "ui-ms-bottom-sheet",
        ir = function (e) {
          var t = e.onClose,
            n = e.open,
            r = e.url,
            o = e.title,
            i = e.initialHeight,
            l = e.closeButtonSrLabel,
            a = e.isRepurchase,
            c = void 0 !== a && a;
          return (0, y.jsx)(A.X, {
            className: or,
            closable: !c,
            open: n,
            initialHeight: i,
            closeButtonSrLabel: l,
            onClose: t,
            title: c ? "" : o,
            header: c
              ? (0, y.jsx)(A.Y, {})
              : (0, y.jsx)(A.Y, { close: !0, children: o }),
            children: (0, y.jsx)("iframe", {
              className: "".concat(or, "__iframe"),
              src: r,
              title: o,
            }),
          });
        },
        lr = function (e) {
          var t = e.height,
            n = e.title,
            o = e.setIsOpen,
            i = e.isOpen,
            l = e.url,
            a = e.closeButtonSrLabel,
            c = e.isRepurchase;
          return (
            (0, r.useEffect)(
              function () {
                var e = function (e) {
                  var t = e.data;
                  t.name === Qn.BOTTOM_SHEET_REDIRECT &&
                    (o(!1), (window.location = t.url)),
                    t.name === Qn.BOTTOM_SHEET_CLOSE && o(!1);
                };
                return (
                  window.addEventListener("message", e),
                  function () {
                    return window.removeEventListener("message", e);
                  }
                );
              },
              [o]
            ),
            (0, y.jsx)(ir, {
              onClose: function () {
                return o(!1);
              },
              initialHeight: "".concat(t, "%"),
              closeButtonSrLabel: a,
              title: n,
              open: i,
              url: l,
              isRepurchase: c,
            })
          );
        };
      function ar(e) {
        return (
          (ar =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          ar(e)
        );
      }
      function cr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ur(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? cr(Object(n), !0).forEach(function (t) {
                sr(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : cr(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function sr(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != ar(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != ar(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == ar(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var dr = function (e) {
        return function (t) {
          var n = (0, r.useContext)(Xn),
            o = n.setUrl,
            i = n.setIsOpen,
            l = n.isOpen,
            a = n.url,
            c = ur(
              ur({}, t),
              {},
              { setUrl: o, setIsOpen: i, isOpen: l, url: a }
            );
          return (0, y.jsx)(e, ur({}, c));
        };
      };
      (0, d.shape)({ percent: d.number, color_hex: d.string }).isRequired,
        (0, d.shape)({ first_text: d.string }).isRequired;
    },
  },
]);
//# sourceMappingURL=lib-7ff7b22d.ebe717cd.js.map
