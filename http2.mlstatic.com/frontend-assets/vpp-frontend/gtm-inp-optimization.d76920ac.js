(() => {
  var t,
    r = {
      63662(t, r, e) {
        e(18111), e(7588), (window.dataLayer = window.dataLayer || []);
        const n =
            "scheduler" in window &&
            window.scheduler &&
            "function" == typeof window.scheduler.yield,
          o =
            "scheduler" in window &&
            window.scheduler &&
            "function" == typeof window.scheduler.postTask;
        const i = [];
        let u = !1;
        async function c() {
          if (u || 0 === i.length) return;
          u = !0;
          const t = async () => {
            if (0 === i.length) return;
            i.splice(0, 3).forEach((t) => {
              let { originalPush: r, args: e } = t;
              r(...e);
            }),
              i.length > 0 &&
                (await (async function () {
                  return n
                    ? window.scheduler.yield()
                    : o
                    ? window.scheduler.postTask(() => {}, {
                        priority: "user-visible",
                      })
                    : new Promise((t) => {
                        setTimeout(t, 0);
                      });
                })(),
                await t());
          };
          await t(), (u = !1);
        }
        if (window.dataLayer && "function" == typeof window.dataLayer.push) {
          const t = window.dataLayer.push.bind(window.dataLayer);
          window.dataLayer.push = function () {
            for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
              e[n] = arguments[n];
            (async () => {
              await (async function (t) {
                return new Promise((r) => {
                  const e = setTimeout(() => {
                    "function" == typeof t && t(), r();
                  }, 600);
                  "requestIdleCallback" in window
                    ? requestIdleCallback(
                        () => {
                          clearTimeout(e), "function" == typeof t && t(), r();
                        },
                        { timeout: 500 }
                      )
                    : requestAnimationFrame(() => {
                        setTimeout(() => {
                          clearTimeout(e), "function" == typeof t && t(), r();
                        }, 150);
                      });
                });
              })(() => {
                i.push({ originalPush: t, args: e });
              }),
                await c();
            })();
          };
        }
      },
      90679(t, r, e) {
        "use strict";
        var n = e(1625),
          o = TypeError;
        t.exports = function (t, r) {
          if (n(r, t)) return t;
          throw new o("Incorrect invocation");
        };
      },
      12211(t, r, e) {
        "use strict";
        var n = e(79039);
        t.exports = !n(function () {
          function t() {}
          return (
            (t.prototype.constructor = null),
            Object.getPrototypeOf(new t()) !== t.prototype
          );
        });
      },
      97040(t, r, e) {
        "use strict";
        var n = e(43724),
          o = e(24913),
          i = e(6980);
        t.exports = function (t, r, e) {
          n ? o.f(t, r, i(0, e)) : (t[r] = e);
        };
      },
      76080(t, r, e) {
        "use strict";
        var n = e(27476),
          o = e(79306),
          i = e(40616),
          u = n(n.bind);
        t.exports = function (t, r) {
          return (
            o(t),
            void 0 === r
              ? t
              : i
              ? u(t, r)
              : function () {
                  return t.apply(r, arguments);
                }
          );
        };
      },
      27476(t, r, e) {
        "use strict";
        var n = e(22195),
          o = e(79504);
        t.exports = function (t) {
          if ("Function" === n(t)) return o(t);
        };
      },
      1767(t) {
        "use strict";
        t.exports = function (t) {
          return { iterator: t, next: t.next, done: !1 };
        };
      },
      50851(t, r, e) {
        "use strict";
        var n = e(36955),
          o = e(55966),
          i = e(64117),
          u = e(26269),
          c = e(78227)("iterator");
        t.exports = function (t) {
          if (!i(t)) return o(t, c) || o(t, "@@iterator") || u[n(t)];
        };
      },
      70081(t, r, e) {
        "use strict";
        var n = e(69565),
          o = e(79306),
          i = e(28551),
          u = e(16823),
          c = e(50851),
          a = TypeError;
        t.exports = function (t, r) {
          var e = arguments.length < 2 ? c(t) : r;
          if (o(e)) return i(n(e, t));
          throw new a(u(t) + " is not iterable");
        };
      },
      20397(t, r, e) {
        "use strict";
        var n = e(97751);
        t.exports = n("document", "documentElement");
      },
      44209(t, r, e) {
        "use strict";
        var n = e(78227),
          o = e(26269),
          i = n("iterator"),
          u = Array.prototype;
        t.exports = function (t) {
          return void 0 !== t && (o.Array === t || u[i] === t);
        };
      },
      72652(t, r, e) {
        "use strict";
        var n = e(76080),
          o = e(69565),
          i = e(28551),
          u = e(16823),
          c = e(44209),
          a = e(26198),
          s = e(1625),
          f = e(70081),
          p = e(50851),
          l = e(9539),
          h = TypeError,
          d = function (t, r) {
            (this.stopped = t), (this.result = r);
          },
          w = d.prototype;
        t.exports = function (t, r, e) {
          var v,
            y,
            O,
            b,
            g,
            m,
            x,
            T = e && e.that,
            E = !(!e || !e.AS_ENTRIES),
            I = !(!e || !e.IS_RECORD),
            _ = !(!e || !e.IS_ITERATOR),
            A = !(!e || !e.INTERRUPTED),
            P = n(r, T),
            j = function (t) {
              var r = v;
              return (v = void 0), r && l(r, "normal"), new d(!0, t);
            },
            L = function (t) {
              return E
                ? (i(t), A ? P(t[0], t[1], j) : P(t[0], t[1]))
                : A
                ? P(t, j)
                : P(t);
            };
          if (I) v = t.iterator;
          else if (_) v = t;
          else {
            if (!(y = p(t))) throw new h(u(t) + " is not iterable");
            if (c(y)) {
              for (O = 0, b = a(t); b > O; O++)
                if ((g = L(t[O])) && s(w, g)) return g;
              return new d(!1);
            }
            v = f(t, y);
          }
          for (m = I ? t.next : v.next; !(x = o(m, v)).done; ) {
            var R = x.value;
            try {
              g = L(R);
            } catch (t) {
              if (!v) throw t;
              l(v, "throw", t);
            }
            if ("object" == typeof g && g && s(w, g)) return g;
          }
          return new d(!1);
        };
      },
      9539(t, r, e) {
        "use strict";
        var n = e(69565),
          o = e(28551),
          i = e(55966);
        t.exports = function (t, r, e) {
          var u, c;
          o(t);
          try {
            if (!(u = i(t, "return"))) {
              if ("throw" === r) throw e;
              return e;
            }
            u = n(u, t);
          } catch (t) {
            (c = !0), (u = t);
          }
          if ("throw" === r) throw e;
          if (c) throw u;
          return o(u), e;
        };
      },
      84549(t, r, e) {
        "use strict";
        var n = e(44576);
        t.exports = function (t, r) {
          var e = n.Iterator,
            o = e && e.prototype,
            i = o && o[t],
            u = !1;
          if (i)
            try {
              i.call(
                {
                  next: function () {
                    return { done: !0 };
                  },
                  return: function () {
                    u = !0;
                  },
                },
                -1
              );
            } catch (t) {
              t instanceof r || (u = !1);
            }
          if (!u) return i;
        };
      },
      57657(t, r, e) {
        "use strict";
        var n,
          o,
          i,
          u = e(79039),
          c = e(94901),
          a = e(20034),
          s = e(2360),
          f = e(42787),
          p = e(36840),
          l = e(78227),
          h = e(96395),
          d = l("iterator"),
          w = !1;
        [].keys &&
          ("next" in (i = [].keys())
            ? (o = f(f(i))) !== Object.prototype && (n = o)
            : (w = !0)),
          !a(n) ||
          u(function () {
            var t = {};
            return n[d].call(t) !== t;
          })
            ? (n = {})
            : h && (n = s(n)),
          c(n[d]) ||
            p(n, d, function () {
              return this;
            }),
          (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: w });
      },
      26269(t) {
        "use strict";
        t.exports = {};
      },
      2360(t, r, e) {
        "use strict";
        var n,
          o = e(28551),
          i = e(96801),
          u = e(88727),
          c = e(30421),
          a = e(20397),
          s = e(4055),
          f = e(66119),
          p = "prototype",
          l = "script",
          h = f("IE_PROTO"),
          d = function () {},
          w = function (t) {
            return "<" + l + ">" + t + "</" + l + ">";
          },
          v = function (t) {
            t.write(w("")), t.close();
            var r = t.parentWindow.Object;
            return (t = null), r;
          },
          y = function () {
            try {
              n = new ActiveXObject("htmlfile");
            } catch (t) {}
            var t, r, e;
            y =
              "undefined" != typeof document
                ? document.domain && n
                  ? v(n)
                  : ((r = s("iframe")),
                    (e = "java" + l + ":"),
                    (r.style.display = "none"),
                    a.appendChild(r),
                    (r.src = String(e)),
                    (t = r.contentWindow.document).open(),
                    t.write(w("document.F=Object")),
                    t.close(),
                    t.F)
                : v(n);
            for (var o = u.length; o--; ) delete y[p][u[o]];
            return y();
          };
        (c[h] = !0),
          (t.exports =
            Object.create ||
            function (t, r) {
              var e;
              return (
                null !== t
                  ? ((d[p] = o(t)), (e = new d()), (d[p] = null), (e[h] = t))
                  : (e = y()),
                void 0 === r ? e : i.f(e, r)
              );
            });
      },
      96801(t, r, e) {
        "use strict";
        var n = e(43724),
          o = e(48686),
          i = e(24913),
          u = e(28551),
          c = e(25397),
          a = e(71072);
        r.f =
          n && !o
            ? Object.defineProperties
            : function (t, r) {
                u(t);
                for (var e, n = c(r), o = a(r), s = o.length, f = 0; s > f; )
                  i.f(t, (e = o[f++]), n[e]);
                return t;
              };
      },
      24913(t, r, e) {
        "use strict";
        var n = e(43724),
          o = e(35917),
          i = e(48686),
          u = e(28551),
          c = e(56969),
          a = TypeError,
          s = Object.defineProperty,
          f = Object.getOwnPropertyDescriptor,
          p = "enumerable",
          l = "configurable",
          h = "writable";
        r.f = n
          ? i
            ? function (t, r, e) {
                if (
                  (u(t),
                  (r = c(r)),
                  u(e),
                  "function" == typeof t &&
                    "prototype" === r &&
                    "value" in e &&
                    h in e &&
                    !e[h])
                ) {
                  var n = f(t, r);
                  n &&
                    n[h] &&
                    ((t[r] = e.value),
                    (e = {
                      configurable: l in e ? e[l] : n[l],
                      enumerable: p in e ? e[p] : n[p],
                      writable: !1,
                    }));
                }
                return s(t, r, e);
              }
            : s
          : function (t, r, e) {
              if ((u(t), (r = c(r)), u(e), o))
                try {
                  return s(t, r, e);
                } catch (t) {}
              if ("get" in e || "set" in e)
                throw new a("Accessors not supported");
              return "value" in e && (t[r] = e.value), t;
            };
      },
      42787(t, r, e) {
        "use strict";
        var n = e(39297),
          o = e(94901),
          i = e(48981),
          u = e(66119),
          c = e(12211),
          a = u("IE_PROTO"),
          s = Object,
          f = s.prototype;
        t.exports = c
          ? s.getPrototypeOf
          : function (t) {
              var r = i(t);
              if (n(r, a)) return r[a];
              var e = r.constructor;
              return o(e) && r instanceof e
                ? e.prototype
                : r instanceof s
                ? f
                : null;
            };
      },
      71072(t, r, e) {
        "use strict";
        var n = e(61828),
          o = e(88727);
        t.exports =
          Object.keys ||
          function (t) {
            return n(t, o);
          };
      },
      18111(t, r, e) {
        "use strict";
        var n = e(46518),
          o = e(44576),
          i = e(90679),
          u = e(28551),
          c = e(94901),
          a = e(42787),
          s = e(62106),
          f = e(97040),
          p = e(79039),
          l = e(39297),
          h = e(78227),
          d = e(57657).IteratorPrototype,
          w = e(43724),
          v = e(96395),
          y = "constructor",
          O = "Iterator",
          b = h("toStringTag"),
          g = TypeError,
          m = o[O],
          x =
            v ||
            !c(m) ||
            m.prototype !== d ||
            !p(function () {
              m({});
            }),
          T = function () {
            if ((i(this, d), a(this) === d))
              throw new g("Abstract class Iterator not directly constructable");
          },
          E = function (t, r) {
            w
              ? s(d, t, {
                  configurable: !0,
                  get: function () {
                    return r;
                  },
                  set: function (r) {
                    if ((u(this), this === d))
                      throw new g("You can't redefine this property");
                    l(this, t) ? (this[t] = r) : f(this, t, r);
                  },
                })
              : (d[t] = r);
          };
        l(d, b) || E(b, O),
          (!x && l(d, y) && d[y] !== Object) || E(y, T),
          (T.prototype = d),
          n({ global: !0, constructor: !0, forced: x }, { Iterator: T });
      },
      7588(t, r, e) {
        "use strict";
        var n = e(46518),
          o = e(69565),
          i = e(72652),
          u = e(79306),
          c = e(28551),
          a = e(1767),
          s = e(9539),
          f = e(84549)("forEach", TypeError);
        n(
          { target: "Iterator", proto: !0, real: !0, forced: f },
          {
            forEach: function (t) {
              c(this);
              try {
                u(t);
              } catch (t) {
                s(this, "throw", t);
              }
              if (f) return o(f, this, t);
              var r = a(this),
                e = 0;
              i(
                r,
                function (r) {
                  t(r, e++);
                },
                { IS_RECORD: !0 }
              );
            },
          }
        );
      },
    },
    e = {};
  function n(t) {
    var o = e[t];
    if (void 0 !== o) return o.exports;
    var i = (e[t] = { exports: {} });
    return r[t].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.m = r),
    (t = []),
    (n.O = (r, e, o, i) => {
      if (!e) {
        var u = 1 / 0;
        for (f = 0; f < t.length; f++) {
          for (var [e, o, i] = t[f], c = !0, a = 0; a < e.length; a++)
            (!1 & i || u >= i) && Object.keys(n.O).every((t) => n.O[t](e[a]))
              ? e.splice(a--, 1)
              : ((c = !1), i < u && (u = i));
          if (c) {
            t.splice(f--, 1);
            var s = o();
            void 0 !== s && (r = s);
          }
        }
        return r;
      }
      i = i || 0;
      for (var f = t.length; f > 0 && t[f - 1][2] > i; f--) t[f] = t[f - 1];
      t[f] = [e, o, i];
    }),
    (n.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r)),
    (n.p = "https://http2.mlstatic.com/frontend-assets/vpp-frontend/"),
    (() => {
      if (void 0 !== n) {
        var t = n.u,
          r = n.e,
          e = {},
          o = {};
        (n.u = function (r) {
          return t(r) + (e.hasOwnProperty(r) ? "?" + e[r] : "");
        }),
          (n.e = function (i) {
            return r(i).catch(function (r) {
              var u = o.hasOwnProperty(i) ? o[i] : 2;
              if (u < 1) {
                var c = t(i);
                throw (
                  ((r.message =
                    "Loading chunk " +
                    i +
                    " failed after 2 retries.\n(" +
                    c +
                    ")"),
                  (r.request = c),
                  r)
                );
              }
              return new Promise(function (t) {
                var r = 2 - u + 1;
                setTimeout(function () {
                  var c = "cache-bust=true" + ("&retry-attempt=" + r);
                  (e[i] = c), (o[i] = u - 1), t(n.e(i));
                }, 250);
              });
            });
          });
      }
    })(),
    (() => {
      var t = { 38419: 0 };
      n.O.j = (r) => 0 === t[r];
      var r = (r, e) => {
          var o,
            i,
            [u, c, a] = e,
            s = 0;
          if (u.some((r) => 0 !== t[r])) {
            for (o in c) n.o(c, o) && (n.m[o] = c[o]);
            if (a) var f = a(n);
          }
          for (r && r(e); s < u.length; s++)
            (i = u[s]), n.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
          return n.O(f);
        },
        e = (globalThis.__LOADABLE_LOADED_CHUNKS__ =
          globalThis.__LOADABLE_LOADED_CHUNKS__ || []);
      e.forEach(r.bind(null, 0)), (e.push = r.bind(null, e.push.bind(e)));
    })(),
    n.O(void 0, [33231], () => n(4586));
  var o = n.O(void 0, [33231], () => n(63662));
  o = n.O(o);
})();
//# sourceMappingURL=gtm-inp-optimization.d76920ac.js.map
