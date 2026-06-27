"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [85263],
  {
    1842(t, e, r) {
      r.d(e, { a: () => p, h: () => h });
      var n = r(74848),
        o = r(96540),
        i = r(5338),
        a = r(16049),
        s = r(35657),
        c = r(24119);
      r(33110);
      async function u() {
        if (!(0, s.uC)().pipeableStream) return (0, s.UO)();
        const { getStreamingAppProps: t } = await Promise.all([
            r.e(25209),
            r.e(20688),
            r.e(63862),
          ]).then(r.bind(r, 63862)),
          e = await t();
        return e && (0, s.ih)(e), e;
      }
      async function l() {
        const t = (0, s.uC)();
        if (t.loadable && !t.islands) {
          const { loadableReady: t } = await r.e(91078).then(r.bind(r, 91078));
          await t();
        }
      }
      async function p(t) {
        await (0, c.c)(), (0, s.uC)().islands || (await (0, c.kV)());
        const [e] = await Promise.all([u(), l()]),
          r = e?.pageProps;
        return (
          (0, o.startTransition)(() => {
            (0, i.hydrateRoot)(
              document.head.querySelector("#root-title"),
              (0, n.jsx)(a.h, {})
            );
          }),
          (0, c.TK)(),
          t?.(r),
          r
        );
      }
      class f extends Error {
        type;
        name = "NordicHydrateRootError";
        constructor(t) {
          let { type: e, error: r, errorInfo: n } = t;
          super(`An ${e} error occurred during hydration.`, {
            cause: r instanceof Error ? r : new Error(JSON.stringify(r)),
          }),
            (this.type = e),
            (this.stack = `${this.name}: ${this.message}${
              n.componentStack || ""
            }`);
        }
      }
      function d(t, e, r) {
        "function" == typeof reportError &&
          reportError(new f({ type: t, error: e, errorInfo: r }));
      }
      async function h(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const { getWrappedChildren: a } = await r.e(7888).then(r.bind(r, 7888)),
          s = await a(
            e,
            t instanceof Element && t.hasAttribute("data-navigation")
          );
        return new Promise((e) => {
          (0, o.startTransition)(() => {
            e(
              (0, i.hydrateRoot)(t, s, {
                ...n,
                onRecoverableError(t, e) {
                  d("recoverable", t, e), n.onRecoverableError?.(t, e);
                },
                onUncaughtError(t, e) {
                  d("uncaught", t, e), n.onUncaughtError?.(t, e);
                },
              })
            ),
              window.WebViewSDK?.hideLoader?.();
          });
        });
      }
    },
    67680(t, e, r) {
      var n = r(79504);
      t.exports = n([].slice);
    },
    18745(t, e, r) {
      var n = r(40616),
        o = Function.prototype,
        i = o.apply,
        a = o.call;
      t.exports =
        ("object" == typeof Reflect && Reflect.apply) ||
        (n
          ? a.bind(i)
          : function () {
              return a.apply(i, arguments);
            });
    },
    34376(t, e, r) {
      var n = r(22195);
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" === n(t);
        };
    },
    65810(t, e, r) {
      var n = r(20034),
        o = r(91181).get;
      t.exports = function (t) {
        if (!n(t)) return !1;
        var e = o(t);
        return !!e && "RawJSON" === e.type;
      };
    },
    72248(t, e, r) {
      var n = r(79504),
        o = Map.prototype;
      t.exports = {
        Map,
        set: n(o.set),
        get: n(o.get),
        has: n(o.has),
        remove: n(o.delete),
        proto: o,
      };
    },
    27819(t, e, r) {
      var n = r(79039);
      t.exports = !n(function () {
        var t = "9007199254740993",
          e = JSON.rawJSON(t);
        return !JSON.isRawJSON(e) || JSON.stringify(e) !== t;
      });
    },
    24913(t, e, r) {
      var n = r(43724),
        o = r(35917),
        i = r(48686),
        a = r(28551),
        s = r(56969),
        c = TypeError,
        u = Object.defineProperty,
        l = Object.getOwnPropertyDescriptor,
        p = "enumerable",
        f = "configurable",
        d = "writable";
      e.f = n
        ? i
          ? function (t, e, r) {
              if (
                (a(t),
                (e = s(e)),
                a(r),
                "function" == typeof t &&
                  "prototype" === e &&
                  "value" in r &&
                  d in r &&
                  !r[d])
              ) {
                var n = l(t, e);
                n &&
                  n[d] &&
                  ((t[e] = r.value),
                  (r = {
                    configurable: f in r ? r[f] : n[f],
                    enumerable: p in r ? r[p] : n[p],
                    writable: !1,
                  }));
              }
              return u(t, e, r);
            }
          : u
        : function (t, e, r) {
            if ((a(t), (e = s(e)), a(r), o))
              try {
                return u(t, e, r);
              } catch (t) {}
            if ("get" in r || "set" in r)
              throw new c("Accessors not supported");
            return "value" in r && (t[e] = r.value), t;
          };
    },
    616(t, e, r) {
      var n = r(79504),
        o = r(39297),
        i = SyntaxError,
        a = parseInt,
        s = String.fromCharCode,
        c = n("".charAt),
        u = n("".slice),
        l = n(/./.exec),
        p = {
          '\\"': '"',
          "\\\\": "\\",
          "\\/": "/",
          "\\b": "\b",
          "\\f": "\f",
          "\\n": "\n",
          "\\r": "\r",
          "\\t": "\t",
        },
        f = /^[\da-f]{4}$/i,
        d = /^[\u0000-\u001F]$/;
      t.exports = function (t, e) {
        for (var r = !0, n = ""; e < t.length; ) {
          var h = c(t, e);
          if ("\\" === h) {
            var g = u(t, e, e + 2);
            if (o(p, g)) (n += p[g]), (e += 2);
            else {
              if ("\\u" !== g)
                throw new i('Unknown escape sequence: "' + g + '"');
              var v = u(t, (e += 2), e + 4);
              if (!l(f, v)) throw new i("Bad Unicode escape at: " + e);
              (n += s(a(v, 16))), (e += 4);
            }
          } else {
            if ('"' === h) {
              (r = !1), e++;
              break;
            }
            if (l(d, h))
              throw new i("Bad control character in string literal at: " + e);
            (n += h), e++;
          }
        }
        if (r) throw new i("Unterminated string at: " + e);
        return { value: n, end: e };
      };
    },
    65213(t, e, r) {
      var n = r(44576),
        o = r(79039),
        i = n.RegExp,
        a = !o(function () {
          var t = !0;
          try {
            i(".", "d");
          } catch (e) {
            t = !1;
          }
          var e = {},
            r = "",
            n = t ? "dgimsy" : "gimsy",
            o = function (t, n) {
              Object.defineProperty(e, t, {
                get: function () {
                  return (r += n), !0;
                },
              });
            },
            a = {
              dotAll: "s",
              global: "g",
              ignoreCase: "i",
              multiline: "m",
              sticky: "y",
            };
          for (var s in (t && (a.hasIndices = "d"), a)) o(s, a[s]);
          return (
            Object.getOwnPropertyDescriptor(i.prototype, "flags").get.call(
              e
            ) !== n || r !== n
          );
        });
      t.exports = { correct: a };
    },
    67979(t, e, r) {
      var n = r(28551);
      t.exports = function () {
        var t = n(this),
          e = "";
        return (
          t.hasIndices && (e += "d"),
          t.global && (e += "g"),
          t.ignoreCase && (e += "i"),
          t.multiline && (e += "m"),
          t.dotAll && (e += "s"),
          t.unicode && (e += "u"),
          t.unicodeSets && (e += "v"),
          t.sticky && (e += "y"),
          e
        );
      };
    },
    655(t, e, r) {
      var n = r(36955),
        o = String;
      t.exports = function (t) {
        if ("Symbol" === n(t))
          throw new TypeError("Cannot convert a Symbol value to a string");
        return o(t);
      };
    },
    92731(t, e, r) {
      var n = r(46518),
        o = r(79306),
        i = r(72248),
        a = r(96395),
        s = i.get,
        c = i.has,
        u = i.set;
      n(
        { target: "Map", proto: !0, real: !0, forced: a },
        {
          getOrInsertComputed: function (t, e) {
            var r = c(this, t);
            if ((o(e), r)) return s(this, t);
            0 === t && 1 / t == -1 / 0 && (t = 0);
            var n = e(t);
            return u(this, t, n), n;
          },
        }
      );
    },
    45367(t, e, r) {
      var n = r(46518),
        o = r(72248),
        i = r(96395),
        a = o.get,
        s = o.has,
        c = o.set;
      n(
        { target: "Map", proto: !0, real: !0, forced: i },
        {
          getOrInsert: function (t, e) {
            return s(this, t) ? a(this, t) : (c(this, t, e), e);
          },
        }
      );
    },
    69479(t, e, r) {
      var n = r(43724),
        o = r(62106),
        i = r(65213),
        a = r(67979);
      n &&
        !i.correct &&
        (o(RegExp.prototype, "flags", { configurable: !0, get: a }),
        (i.correct = !0));
    },
    56436(t, e, r) {
      r.d(e, { MY: () => a, tR: () => l });
      r(45367), r(92731);
      function n(t, e) {
        return `nordic:${t}${e ? `:${e}` : ""}`;
      }
      function o(t, e) {
        let r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const o = n(t, r.id),
          i = (t) => {
            e(t.detail);
          };
        window.addEventListener(o, i, r);
        return () => window.removeEventListener(o, i, r);
      }
      class i extends Error {
        name = "NordicClientEventsError";
      }
      function a(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        window.dispatchEvent(
          new CustomEvent(n(t, e.id), { detail: e.payload })
        );
      }
      new Map();
      const s = !0,
        c = !0;
      class u extends i {
        name = "NordicClientEventsTimeoutError";
        constructor(t, e) {
          super(`Client event ${t} exceeded timeout [ms: ${e}].`);
        }
      }
      async function l(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise((r, i) => {
          let a;
          const { id: l, timeout: p } = e,
            f = o(
              t,
              (t) => {
                clearTimeout(a), r(t);
              },
              { id: l, once: s, capture: c }
            );
          p &&
            (a = setTimeout(() => {
              f(), i(new u(n(t, l), p));
            }, p));
        });
      }
    },
    35657(t, e, r) {
      r.d(e, {
        C$: () => p,
        Nc: () => c,
        UO: () => i,
        UX: () => l,
        Ul: () => o,
        Xe: () => f,
        ih: () => d,
        kP: () => s,
        q4: () => u,
        uC: () => a,
      });
      r(69479);
      function n() {
        return window._n.ctx.r;
      }
      function o() {
        return n().assets;
      }
      function i() {
        return n().appProps;
      }
      function a() {
        return n().flags;
      }
      function s() {
        return n().support;
      }
      function c() {
        return n().title;
      }
      function u() {
        return n().nonce;
      }
      function l() {
        return n().csrfToken;
      }
      function p() {
        return n().wrapperProps;
      }
      function f() {
        return n().framework;
      }
      function d(t) {
        n().appProps = t;
      }
    },
    16049(t, e, r) {
      r.d(e, { h: () => a });
      var n = r(74848),
        o = r(96540),
        i = r(35657);
      const a = () => {
        const t = (function () {
          const [t, e] = (0, o.useState)(i.Nc);
          return (
            (0, o.useEffect)(
              () => window._n.addEventListener("title:change", e),
              []
            ),
            t
          );
        })();
        return (0, n.jsx)("title", { id: "root-title", children: t });
      };
    },
  },
]);
//# sourceMappingURL=85263.bff802e1.js.map
