"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [96784],
  {
    34411(e, t, n) {
      n.d(t, { N: () => Et });
      var r = n(58168),
        o = n(89379),
        i = n(80045),
        a = n(96540),
        s = n(46942),
        c = n.n(s),
        u = n(40961),
        p = n(88460),
        f = n(69247),
        l = "top",
        d = "bottom",
        v = "right",
        m = "left",
        h = "auto",
        g = [l, d, v, m],
        b = "start",
        y = "end",
        O = "viewport",
        w = "popper",
        x = g.reduce(function (e, t) {
          return e.concat([t + "-" + b, t + "-" + y]);
        }, []),
        E = [].concat(g, [h]).reduce(function (e, t) {
          return e.concat([t, t + "-" + b, t + "-" + y]);
        }, []),
        A = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      function T(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function D(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function j(e) {
        return e instanceof D(e).Element || e instanceof Element;
      }
      function L(e) {
        return e instanceof D(e).HTMLElement || e instanceof HTMLElement;
      }
      function k(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof D(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var C = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
              r = t.attributes[e] || {},
              o = t.elements[e];
            L(o) &&
              T(o) &&
              (Object.assign(o.style, n),
              Object.keys(r).forEach(function (e) {
                var t = r[e];
                !1 === t
                  ? o.removeAttribute(e)
                  : o.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var r = t.elements[e],
                  o = t.attributes[e] || {},
                  i = Object.keys(
                    t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                  ).reduce(function (e, t) {
                    return (e[t] = ""), e;
                  }, {});
                L(r) &&
                  T(r) &&
                  (Object.assign(r.style, i),
                  Object.keys(o).forEach(function (e) {
                    r.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      function S(e) {
        return e.split("-")[0];
      }
      var H = Math.max,
        M = Math.min,
        N = Math.round;
      function P() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function _() {
        return !/^((?!chrome|android).)*safari/i.test(P());
      }
      function R(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          i = 1;
        t &&
          L(e) &&
          ((o = (e.offsetWidth > 0 && N(r.width) / e.offsetWidth) || 1),
          (i = (e.offsetHeight > 0 && N(r.height) / e.offsetHeight) || 1));
        var a = (j(e) ? D(e) : window).visualViewport,
          s = !_() && n,
          c = (r.left + (s && a ? a.offsetLeft : 0)) / o,
          u = (r.top + (s && a ? a.offsetTop : 0)) / i,
          p = r.width / o,
          f = r.height / i;
        return {
          width: p,
          height: f,
          top: u,
          right: c + p,
          bottom: u + f,
          left: c,
          x: c,
          y: u,
        };
      }
      function V(e) {
        var t = R(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function B(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && k(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function I(e) {
        return D(e).getComputedStyle(e);
      }
      function W(e) {
        return ["table", "td", "th"].indexOf(T(e)) >= 0;
      }
      function U(e) {
        return ((j(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function q(e) {
        return "html" === T(e)
          ? e
          : e.assignedSlot || e.parentNode || (k(e) ? e.host : null) || U(e);
      }
      function $(e) {
        return L(e) && "fixed" !== I(e).position ? e.offsetParent : null;
      }
      function F(e) {
        for (var t = D(e), n = $(e); n && W(n) && "static" === I(n).position; )
          n = $(n);
        return n &&
          ("html" === T(n) || ("body" === T(n) && "static" === I(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(P());
                if (/Trident/i.test(P()) && L(e) && "fixed" === I(e).position)
                  return null;
                var n = q(e);
                for (
                  k(n) && (n = n.host);
                  L(n) && ["html", "body"].indexOf(T(n)) < 0;

                ) {
                  var r = I(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function z(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function Y(e, t, n) {
        return H(e, M(t, n));
      }
      function X(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function K(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      var J = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            r = e.name,
            o = e.options,
            i = n.elements.arrow,
            a = n.modifiersData.popperOffsets,
            s = S(n.placement),
            c = z(s),
            u = [m, v].indexOf(s) >= 0 ? "height" : "width";
          if (i && a) {
            var p = (function (e, t) {
                return X(
                  "number" !=
                    typeof (e =
                      "function" == typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e)
                    ? e
                    : K(e, g)
                );
              })(o.padding, n),
              f = V(i),
              h = "y" === c ? l : m,
              b = "y" === c ? d : v,
              y =
                n.rects.reference[u] +
                n.rects.reference[c] -
                a[c] -
                n.rects.popper[u],
              O = a[c] - n.rects.reference[c],
              w = F(i),
              x = w
                ? "y" === c
                  ? w.clientHeight || 0
                  : w.clientWidth || 0
                : 0,
              E = y / 2 - O / 2,
              A = p[h],
              T = x - f[u] - p[b],
              D = x / 2 - f[u] / 2 + E,
              j = Y(A, D, T),
              L = c;
            n.modifiersData[r] =
              (((t = {})[L] = j), (t.centerOffset = j - D), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" != typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            B(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Z(e) {
        return e.split("-")[1];
      }
      var G = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Q(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          o = e.placement,
          i = e.variation,
          a = e.offsets,
          s = e.position,
          c = e.gpuAcceleration,
          u = e.adaptive,
          p = e.roundOffsets,
          f = e.isFixed,
          h = a.x,
          g = void 0 === h ? 0 : h,
          b = a.y,
          O = void 0 === b ? 0 : b,
          w = "function" == typeof p ? p({ x: g, y: O }) : { x: g, y: O };
        (g = w.x), (O = w.y);
        var x = a.hasOwnProperty("x"),
          E = a.hasOwnProperty("y"),
          A = m,
          T = l,
          j = window;
        if (u) {
          var L = F(n),
            k = "clientHeight",
            C = "clientWidth";
          if (
            (L === D(n) &&
              "static" !== I((L = U(n))).position &&
              "absolute" === s &&
              ((k = "scrollHeight"), (C = "scrollWidth")),
            o === l || ((o === m || o === v) && i === y))
          )
            (T = d),
              (O -=
                (f && L === j && j.visualViewport
                  ? j.visualViewport.height
                  : L[k]) - r.height),
              (O *= c ? 1 : -1);
          if (o === m || ((o === l || o === d) && i === y))
            (A = v),
              (g -=
                (f && L === j && j.visualViewport
                  ? j.visualViewport.width
                  : L[C]) - r.width),
              (g *= c ? 1 : -1);
        }
        var S,
          H = Object.assign({ position: s }, u && G),
          M =
            !0 === p
              ? (function (e, t) {
                  var n = e.x,
                    r = e.y,
                    o = t.devicePixelRatio || 1;
                  return { x: N(n * o) / o || 0, y: N(r * o) / o || 0 };
                })({ x: g, y: O }, D(n))
              : { x: g, y: O };
        return (
          (g = M.x),
          (O = M.y),
          c
            ? Object.assign(
                {},
                H,
                (((S = {})[T] = E ? "0" : ""),
                (S[A] = x ? "0" : ""),
                (S.transform =
                  (j.devicePixelRatio || 1) <= 1
                    ? "translate(" + g + "px, " + O + "px)"
                    : "translate3d(" + g + "px, " + O + "px, 0)"),
                S)
              )
            : Object.assign(
                {},
                H,
                (((t = {})[T] = E ? O + "px" : ""),
                (t[A] = x ? g + "px" : ""),
                (t.transform = ""),
                t)
              )
        );
      }
      var ee = { passive: !0 };
      var te = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function ne(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return te[e];
        });
      }
      var re = { start: "end", end: "start" };
      function oe(e) {
        return e.replace(/start|end/g, function (e) {
          return re[e];
        });
      }
      function ie(e) {
        var t = D(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function ae(e) {
        return R(U(e)).left + ie(e).scrollLeft;
      }
      function se(e) {
        var t = I(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function ce(e) {
        return ["html", "body", "#document"].indexOf(T(e)) >= 0
          ? e.ownerDocument.body
          : L(e) && se(e)
          ? e
          : ce(q(e));
      }
      function ue(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = ce(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = D(r),
          a = o ? [i].concat(i.visualViewport || [], se(r) ? r : []) : r,
          s = t.concat(a);
        return o ? s : s.concat(ue(q(a)));
      }
      function pe(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function fe(e, t, n) {
        return t === O
          ? pe(
              (function (e, t) {
                var n = D(e),
                  r = U(e),
                  o = n.visualViewport,
                  i = r.clientWidth,
                  a = r.clientHeight,
                  s = 0,
                  c = 0;
                if (o) {
                  (i = o.width), (a = o.height);
                  var u = _();
                  (u || (!u && "fixed" === t)) &&
                    ((s = o.offsetLeft), (c = o.offsetTop));
                }
                return { width: i, height: a, x: s + ae(e), y: c };
              })(e, n)
            )
          : j(t)
          ? (function (e, t) {
              var n = R(e, !1, "fixed" === t);
              return (
                (n.top = n.top + e.clientTop),
                (n.left = n.left + e.clientLeft),
                (n.bottom = n.top + e.clientHeight),
                (n.right = n.left + e.clientWidth),
                (n.width = e.clientWidth),
                (n.height = e.clientHeight),
                (n.x = n.left),
                (n.y = n.top),
                n
              );
            })(t, n)
          : pe(
              (function (e) {
                var t,
                  n = U(e),
                  r = ie(e),
                  o = null == (t = e.ownerDocument) ? void 0 : t.body,
                  i = H(
                    n.scrollWidth,
                    n.clientWidth,
                    o ? o.scrollWidth : 0,
                    o ? o.clientWidth : 0
                  ),
                  a = H(
                    n.scrollHeight,
                    n.clientHeight,
                    o ? o.scrollHeight : 0,
                    o ? o.clientHeight : 0
                  ),
                  s = -r.scrollLeft + ae(e),
                  c = -r.scrollTop;
                return (
                  "rtl" === I(o || n).direction &&
                    (s += H(n.clientWidth, o ? o.clientWidth : 0) - i),
                  { width: i, height: a, x: s, y: c }
                );
              })(U(e))
            );
      }
      function le(e, t, n, r) {
        var o =
            "clippingParents" === t
              ? (function (e) {
                  var t = ue(q(e)),
                    n =
                      ["absolute", "fixed"].indexOf(I(e).position) >= 0 && L(e)
                        ? F(e)
                        : e;
                  return j(n)
                    ? t.filter(function (e) {
                        return j(e) && B(e, n) && "body" !== T(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          i = [].concat(o, [n]),
          a = i[0],
          s = i.reduce(function (t, n) {
            var o = fe(e, n, r);
            return (
              (t.top = H(o.top, t.top)),
              (t.right = M(o.right, t.right)),
              (t.bottom = M(o.bottom, t.bottom)),
              (t.left = H(o.left, t.left)),
              t
            );
          }, fe(e, a, r));
        return (
          (s.width = s.right - s.left),
          (s.height = s.bottom - s.top),
          (s.x = s.left),
          (s.y = s.top),
          s
        );
      }
      function de(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? S(o) : null,
          a = o ? Z(o) : null,
          s = n.x + n.width / 2 - r.width / 2,
          c = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case l:
            t = { x: s, y: n.y - r.height };
            break;
          case d:
            t = { x: s, y: n.y + n.height };
            break;
          case v:
            t = { x: n.x + n.width, y: c };
            break;
          case m:
            t = { x: n.x - r.width, y: c };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var u = i ? z(i) : null;
        if (null != u) {
          var p = "y" === u ? "height" : "width";
          switch (a) {
            case b:
              t[u] = t[u] - (n[p] / 2 - r[p] / 2);
              break;
            case y:
              t[u] = t[u] + (n[p] / 2 - r[p] / 2);
          }
        }
        return t;
      }
      function ve(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          o = void 0 === r ? e.placement : r,
          i = n.strategy,
          a = void 0 === i ? e.strategy : i,
          s = n.boundary,
          c = void 0 === s ? "clippingParents" : s,
          u = n.rootBoundary,
          p = void 0 === u ? O : u,
          f = n.elementContext,
          m = void 0 === f ? w : f,
          h = n.altBoundary,
          b = void 0 !== h && h,
          y = n.padding,
          x = void 0 === y ? 0 : y,
          E = X("number" != typeof x ? x : K(x, g)),
          A = m === w ? "reference" : w,
          T = e.rects.popper,
          D = e.elements[b ? A : m],
          L = le(j(D) ? D : D.contextElement || U(e.elements.popper), c, p, a),
          k = R(e.elements.reference),
          C = de({
            reference: k,
            element: T,
            strategy: "absolute",
            placement: o,
          }),
          S = pe(Object.assign({}, T, C)),
          H = m === w ? S : k,
          M = {
            top: L.top - H.top + E.top,
            bottom: H.bottom - L.bottom + E.bottom,
            left: L.left - H.left + E.left,
            right: H.right - L.right + E.right,
          },
          N = e.modifiersData.offset;
        if (m === w && N) {
          var P = N[o];
          Object.keys(M).forEach(function (e) {
            var t = [v, d].indexOf(e) >= 0 ? 1 : -1,
              n = [l, d].indexOf(e) >= 0 ? "y" : "x";
            M[e] += P[n] * t;
          });
        }
        return M;
      }
      function me(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          o = n.boundary,
          i = n.rootBoundary,
          a = n.padding,
          s = n.flipVariations,
          c = n.allowedAutoPlacements,
          u = void 0 === c ? E : c,
          p = Z(r),
          f = p
            ? s
              ? x
              : x.filter(function (e) {
                  return Z(e) === p;
                })
            : g,
          l = f.filter(function (e) {
            return u.indexOf(e) >= 0;
          });
        0 === l.length && (l = f);
        var d = l.reduce(function (t, n) {
          return (
            (t[n] = ve(e, {
              placement: n,
              boundary: o,
              rootBoundary: i,
              padding: a,
            })[S(n)]),
            t
          );
        }, {});
        return Object.keys(d).sort(function (e, t) {
          return d[e] - d[t];
        });
      }
      var he = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name;
          if (!t.modifiersData[r]._skip) {
            for (
              var o = n.mainAxis,
                i = void 0 === o || o,
                a = n.altAxis,
                s = void 0 === a || a,
                c = n.fallbackPlacements,
                u = n.padding,
                p = n.boundary,
                f = n.rootBoundary,
                g = n.altBoundary,
                y = n.flipVariations,
                O = void 0 === y || y,
                w = n.allowedAutoPlacements,
                x = t.options.placement,
                E = S(x),
                A =
                  c ||
                  (E === x || !O
                    ? [ne(x)]
                    : (function (e) {
                        if (S(e) === h) return [];
                        var t = ne(e);
                        return [oe(e), t, oe(t)];
                      })(x)),
                T = [x].concat(A).reduce(function (e, n) {
                  return e.concat(
                    S(n) === h
                      ? me(t, {
                          placement: n,
                          boundary: p,
                          rootBoundary: f,
                          padding: u,
                          flipVariations: O,
                          allowedAutoPlacements: w,
                        })
                      : n
                  );
                }, []),
                D = t.rects.reference,
                j = t.rects.popper,
                L = new Map(),
                k = !0,
                C = T[0],
                H = 0;
              H < T.length;
              H++
            ) {
              var M = T[H],
                N = S(M),
                P = Z(M) === b,
                _ = [l, d].indexOf(N) >= 0,
                R = _ ? "width" : "height",
                V = ve(t, {
                  placement: M,
                  boundary: p,
                  rootBoundary: f,
                  altBoundary: g,
                  padding: u,
                }),
                B = _ ? (P ? v : m) : P ? d : l;
              D[R] > j[R] && (B = ne(B));
              var I = ne(B),
                W = [];
              if (
                (i && W.push(V[N] <= 0),
                s && W.push(V[B] <= 0, V[I] <= 0),
                W.every(function (e) {
                  return e;
                }))
              ) {
                (C = M), (k = !1);
                break;
              }
              L.set(M, W);
            }
            if (k)
              for (
                var U = function (e) {
                    var t = T.find(function (t) {
                      var n = L.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (C = t), "break";
                  },
                  q = O ? 3 : 1;
                q > 0;
                q--
              ) {
                if ("break" === U(q)) break;
              }
            t.placement !== C &&
              ((t.modifiersData[r]._skip = !0),
              (t.placement = C),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function ge(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function be(e) {
        return [l, v, d, m].some(function (t) {
          return e[t] >= 0;
        });
      }
      var ye = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.offset,
            i = void 0 === o ? [0, 0] : o,
            a = E.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = S(e),
                    o = [m, l].indexOf(r) >= 0 ? -1 : 1,
                    i =
                      "function" == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    a = i[0],
                    s = i[1];
                  return (
                    (a = a || 0),
                    (s = (s || 0) * o),
                    [m, v].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
                  );
                })(n, t.rects, i)),
                e
              );
            }, {}),
            s = a[t.placement],
            c = s.x,
            u = s.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += c),
            (t.modifiersData.popperOffsets.y += u)),
            (t.modifiersData[r] = a);
        },
      };
      var Oe = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.mainAxis,
            i = void 0 === o || o,
            a = n.altAxis,
            s = void 0 !== a && a,
            c = n.boundary,
            u = n.rootBoundary,
            p = n.altBoundary,
            f = n.padding,
            h = n.tether,
            g = void 0 === h || h,
            y = n.tetherOffset,
            O = void 0 === y ? 0 : y,
            w = ve(t, {
              boundary: c,
              rootBoundary: u,
              padding: f,
              altBoundary: p,
            }),
            x = S(t.placement),
            E = Z(t.placement),
            A = !E,
            T = z(x),
            D = "x" === T ? "y" : "x",
            j = t.modifiersData.popperOffsets,
            L = t.rects.reference,
            k = t.rects.popper,
            C =
              "function" == typeof O
                ? O(Object.assign({}, t.rects, { placement: t.placement }))
                : O,
            N =
              "number" == typeof C
                ? { mainAxis: C, altAxis: C }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
            P = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            _ = { x: 0, y: 0 };
          if (j) {
            if (i) {
              var R,
                B = "y" === T ? l : m,
                I = "y" === T ? d : v,
                W = "y" === T ? "height" : "width",
                U = j[T],
                q = U + w[B],
                $ = U - w[I],
                X = g ? -k[W] / 2 : 0,
                K = E === b ? L[W] : k[W],
                J = E === b ? -k[W] : -L[W],
                G = t.elements.arrow,
                Q = g && G ? V(G) : { width: 0, height: 0 },
                ee = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                te = ee[B],
                ne = ee[I],
                re = Y(0, L[W], Q[W]),
                oe = A
                  ? L[W] / 2 - X - re - te - N.mainAxis
                  : K - re - te - N.mainAxis,
                ie = A
                  ? -L[W] / 2 + X + re + ne + N.mainAxis
                  : J + re + ne + N.mainAxis,
                ae = t.elements.arrow && F(t.elements.arrow),
                se = ae
                  ? "y" === T
                    ? ae.clientTop || 0
                    : ae.clientLeft || 0
                  : 0,
                ce = null != (R = null == P ? void 0 : P[T]) ? R : 0,
                ue = U + ie - ce,
                pe = Y(g ? M(q, U + oe - ce - se) : q, U, g ? H($, ue) : $);
              (j[T] = pe), (_[T] = pe - U);
            }
            if (s) {
              var fe,
                le = "x" === T ? l : m,
                de = "x" === T ? d : v,
                me = j[D],
                he = "y" === D ? "height" : "width",
                ge = me + w[le],
                be = me - w[de],
                ye = -1 !== [l, m].indexOf(x),
                Oe = null != (fe = null == P ? void 0 : P[D]) ? fe : 0,
                we = ye ? ge : me - L[he] - k[he] - Oe + N.altAxis,
                xe = ye ? me + L[he] + k[he] - Oe - N.altAxis : be,
                Ee =
                  g && ye
                    ? (function (e, t, n) {
                        var r = Y(e, t, n);
                        return r > n ? n : r;
                      })(we, me, xe)
                    : Y(g ? we : ge, me, g ? xe : be);
              (j[D] = Ee), (_[D] = Ee - me);
            }
            t.modifiersData[r] = _;
          }
        },
        requiresIfExists: ["offset"],
      };
      function we(e, t, n) {
        void 0 === n && (n = !1);
        var r,
          o,
          i = L(t),
          a =
            L(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = N(t.width) / e.offsetWidth || 1,
                r = N(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          s = U(t),
          c = R(e, a, n),
          u = { scrollLeft: 0, scrollTop: 0 },
          p = { x: 0, y: 0 };
        return (
          (i || (!i && !n)) &&
            (("body" !== T(t) || se(s)) &&
              (u =
                (r = t) !== D(r) && L(r)
                  ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
                  : ie(r)),
            L(t)
              ? (((p = R(t, !0)).x += t.clientLeft), (p.y += t.clientTop))
              : s && (p.x = ae(s))),
          {
            x: c.left + u.scrollLeft - p.x,
            y: c.top + u.scrollTop - p.y,
            width: c.width,
            height: c.height,
          }
        );
      }
      function xe(e) {
        var t = new Map(),
          n = new Set(),
          r = [];
        function o(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var r = t.get(e);
                  r && o(r);
                }
              }),
            r.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || o(e);
          }),
          r
        );
      }
      var Ee = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Ae() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function Te(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          i = void 0 === o ? Ee : o;
        return function (e, t, n) {
          void 0 === n && (n = i);
          var o,
            a,
            s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Ee, i),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            c = [],
            u = !1,
            p = {
              state: s,
              setOptions: function (n) {
                var o = "function" == typeof n ? n(s.options) : n;
                f(),
                  (s.options = Object.assign({}, i, s.options, o)),
                  (s.scrollParents = {
                    reference: j(e)
                      ? ue(e)
                      : e.contextElement
                      ? ue(e.contextElement)
                      : [],
                    popper: ue(t),
                  });
                var a,
                  u,
                  l = (function (e) {
                    var t = xe(e);
                    return A.reduce(function (e, n) {
                      return e.concat(
                        t.filter(function (e) {
                          return e.phase === n;
                        })
                      );
                    }, []);
                  })(
                    ((a = [].concat(r, s.options.modifiers)),
                    (u = a.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {})),
                    Object.keys(u).map(function (e) {
                      return u[e];
                    }))
                  );
                return (
                  (s.orderedModifiers = l.filter(function (e) {
                    return e.enabled;
                  })),
                  s.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      o = e.effect;
                    if ("function" == typeof o) {
                      var i = o({ state: s, name: t, instance: p, options: r }),
                        a = function () {};
                      c.push(i || a);
                    }
                  }),
                  p.update()
                );
              },
              forceUpdate: function () {
                if (!u) {
                  var e = s.elements,
                    t = e.reference,
                    n = e.popper;
                  if (Ae(t, n)) {
                    (s.rects = {
                      reference: we(t, F(n), "fixed" === s.options.strategy),
                      popper: V(n),
                    }),
                      (s.reset = !1),
                      (s.placement = s.options.placement),
                      s.orderedModifiers.forEach(function (e) {
                        return (s.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var r = 0; r < s.orderedModifiers.length; r++)
                      if (!0 !== s.reset) {
                        var o = s.orderedModifiers[r],
                          i = o.fn,
                          a = o.options,
                          c = void 0 === a ? {} : a,
                          f = o.name;
                        "function" == typeof i &&
                          (s =
                            i({ state: s, options: c, name: f, instance: p }) ||
                            s);
                      } else (s.reset = !1), (r = -1);
                  }
                }
              },
              update:
                ((o = function () {
                  return new Promise(function (e) {
                    p.forceUpdate(), e(s);
                  });
                }),
                function () {
                  return (
                    a ||
                      (a = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (a = void 0), e(o());
                        });
                      })),
                    a
                  );
                }),
              destroy: function () {
                f(), (u = !0);
              },
            };
          if (!Ae(e, t)) return p;
          function f() {
            c.forEach(function (e) {
              return e();
            }),
              (c = []);
          }
          return (
            p.setOptions(n).then(function (e) {
              !u && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            p
          );
        };
      }
      var De = Te({
          defaultModifiers: [
            {
              name: "eventListeners",
              enabled: !0,
              phase: "write",
              fn: function () {},
              effect: function (e) {
                var t = e.state,
                  n = e.instance,
                  r = e.options,
                  o = r.scroll,
                  i = void 0 === o || o,
                  a = r.resize,
                  s = void 0 === a || a,
                  c = D(t.elements.popper),
                  u = [].concat(
                    t.scrollParents.reference,
                    t.scrollParents.popper
                  );
                return (
                  i &&
                    u.forEach(function (e) {
                      e.addEventListener("scroll", n.update, ee);
                    }),
                  s && c.addEventListener("resize", n.update, ee),
                  function () {
                    i &&
                      u.forEach(function (e) {
                        e.removeEventListener("scroll", n.update, ee);
                      }),
                      s && c.removeEventListener("resize", n.update, ee);
                  }
                );
              },
              data: {},
            },
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  n = e.name;
                t.modifiersData[n] = de({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = n.gpuAcceleration,
                  o = void 0 === r || r,
                  i = n.adaptive,
                  a = void 0 === i || i,
                  s = n.roundOffsets,
                  c = void 0 === s || s,
                  u = {
                    placement: S(t.placement),
                    variation: Z(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: o,
                    isFixed: "fixed" === t.options.strategy,
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    Q(
                      Object.assign({}, u, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: a,
                        roundOffsets: c,
                      })
                    )
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      Q(
                        Object.assign({}, u, {
                          offsets: t.modifiersData.arrow,
                          position: "absolute",
                          adaptive: !1,
                          roundOffsets: c,
                        })
                      )
                    )),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    { "data-popper-placement": t.placement }
                  ));
              },
              data: {},
            },
            C,
            ye,
            he,
            Oe,
            J,
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  r = t.rects.reference,
                  o = t.rects.popper,
                  i = t.modifiersData.preventOverflow,
                  a = ve(t, { elementContext: "reference" }),
                  s = ve(t, { altBoundary: !0 }),
                  c = ge(a, r),
                  u = ge(s, o, i),
                  p = be(c),
                  f = be(u);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: c,
                  popperEscapeOffsets: u,
                  isReferenceHidden: p,
                  hasPopperEscaped: f,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": p,
                      "data-popper-escaped": f,
                    }
                  ));
              },
            },
          ],
        }),
        je = { passive: !0, capture: !0 },
        Le = function () {
          return document.body;
        };
      function ke(e, t, n) {
        if (Array.isArray(e)) {
          var r = e[t];
          return r ?? (Array.isArray(n) ? n[t] : n);
        }
        return e;
      }
      function Ce(e, t) {
        var n = {}.toString.call(e);
        return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
      }
      function Se(e, t) {
        return "function" == typeof e ? e.apply(void 0, t) : e;
      }
      function He(e, t) {
        return 0 === t
          ? e
          : function (r) {
              clearTimeout(n),
                (n = setTimeout(function () {
                  e(r);
                }, t));
            };
        var n;
      }
      function Me(e) {
        return [].concat(e);
      }
      function Ne(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function Pe(e) {
        return [].slice.call(e);
      }
      function _e(e) {
        return Object.keys(e).reduce(function (t, n) {
          return void 0 !== e[n] && (t[n] = e[n]), t;
        }, {});
      }
      function Re(e) {
        return ["Element", "Fragment"].some(function (t) {
          return Ce(e, t);
        });
      }
      function Ve(e) {
        return Re(e)
          ? [e]
          : (function (e) {
              return Ce(e, "NodeList");
            })(e)
          ? Pe(e)
          : Array.isArray(e)
          ? e
          : Pe(document.querySelectorAll(e));
      }
      function Be(e, t) {
        e.forEach(function (e) {
          e && (e.style.transitionDuration = t + "ms");
        });
      }
      function Ie(e, t) {
        e.forEach(function (e) {
          e && e.setAttribute("data-state", t);
        });
      }
      function We(e, t, n) {
        var r = t + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
          e[r](t, n);
        });
      }
      function Ue(e, t) {
        for (var n = t; n; ) {
          var r;
          if (e.contains(n)) return !0;
          n =
            null == n.getRootNode || null == (r = n.getRootNode())
              ? void 0
              : r.host;
        }
        return !1;
      }
      var qe = { isTouch: !1 },
        $e = 0;
      function Fe() {
        qe.isTouch ||
          ((qe.isTouch = !0),
          window.performance && document.addEventListener("mousemove", ze));
      }
      function ze() {
        var e = performance.now();
        e - $e < 20 &&
          ((qe.isTouch = !1), document.removeEventListener("mousemove", ze)),
          ($e = e);
      }
      function Ye() {
        var e,
          t = document.activeElement;
        if ((e = t) && e._tippy && e._tippy.reference === e) {
          var n = t._tippy;
          t.blur && !n.state.isVisible && t.blur();
        }
      }
      var Xe =
        !!("undefined" != typeof window && "undefined" != typeof document) &&
        !!window.msCrypto;
      var Ke = {
          animateFill: !1,
          followCursor: !1,
          inlinePositioning: !1,
          sticky: !1,
        },
        Je = Object.assign(
          {
            appendTo: Le,
            aria: { content: "auto", expanded: "auto" },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [0, 10],
            onAfterUpdate: function () {},
            onBeforeUpdate: function () {},
            onCreate: function () {},
            onDestroy: function () {},
            onHidden: function () {},
            onHide: function () {},
            onMount: function () {},
            onShow: function () {},
            onShown: function () {},
            onTrigger: function () {},
            onUntrigger: function () {},
            onClickOutside: function () {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null,
          },
          Ke,
          {
            allowHTML: !1,
            animation: "fade",
            arrow: !0,
            content: "",
            inertia: !1,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999,
          }
        ),
        Ze = Object.keys(Je);
      function Ge(e) {
        var t = (e.plugins || []).reduce(function (t, n) {
          var r,
            o = n.name,
            i = n.defaultValue;
          o && (t[o] = void 0 !== e[o] ? e[o] : null != (r = Je[o]) ? r : i);
          return t;
        }, {});
        return Object.assign({}, e, t);
      }
      function Qe(e, t) {
        var n = Object.assign(
          {},
          t,
          { content: Se(t.content, [e]) },
          t.ignoreAttributes
            ? {}
            : (function (e, t) {
                return (
                  t
                    ? Object.keys(Ge(Object.assign({}, Je, { plugins: t })))
                    : Ze
                ).reduce(function (t, n) {
                  var r = (e.getAttribute("data-tippy-" + n) || "").trim();
                  if (!r) return t;
                  if ("content" === n) t[n] = r;
                  else
                    try {
                      t[n] = JSON.parse(r);
                    } catch (e) {
                      t[n] = r;
                    }
                  return t;
                }, {});
              })(e, t.plugins)
        );
        return (
          (n.aria = Object.assign({}, Je.aria, n.aria)),
          (n.aria = {
            expanded:
              "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
            content:
              "auto" === n.aria.content
                ? t.interactive
                  ? null
                  : "describedby"
                : n.aria.content,
          }),
          n
        );
      }
      function et(e) {
        var t = e.firstElementChild,
          n = Pe(t.children);
        return {
          box: t,
          content: n.find(function (e) {
            return e.classList.contains("tippy-content");
          }),
          arrow: n.find(function (e) {
            return (
              e.classList.contains("tippy-arrow") ||
              e.classList.contains("tippy-svg-arrow")
            );
          }),
          backdrop: n.find(function (e) {
            return e.classList.contains("tippy-backdrop");
          }),
        };
      }
      var tt = 1,
        nt = [],
        rt = [];
      function ot(e, t) {
        var n,
          r,
          o,
          i,
          a,
          s,
          c,
          u,
          p = Qe(e, Object.assign({}, Je, Ge(_e(t)))),
          f = !1,
          l = !1,
          d = !1,
          v = !1,
          m = [],
          h = He(Y, p.interactiveDebounce),
          g = tt++,
          b = (u = p.plugins).filter(function (e, t) {
            return u.indexOf(e) === t;
          }),
          y = {
            id: g,
            reference: e,
            popper: document.createElement("div"),
            popperInstance: null,
            props: p,
            state: {
              isEnabled: !0,
              isVisible: !1,
              isDestroyed: !1,
              isMounted: !1,
              isShown: !1,
            },
            plugins: b,
            clearDelayTimeouts: function () {
              clearTimeout(n), clearTimeout(r), cancelAnimationFrame(o);
            },
            setProps: function (t) {
              0;
              if (y.state.isDestroyed) return;
              M("onBeforeUpdate", [y, t]), F();
              var n = y.props,
                r = Qe(
                  e,
                  Object.assign({}, n, _e(t), { ignoreAttributes: !0 })
                );
              (y.props = r),
                $(),
                n.interactiveDebounce !== r.interactiveDebounce &&
                  (_(), (h = He(Y, r.interactiveDebounce)));
              n.triggerTarget && !r.triggerTarget
                ? Me(n.triggerTarget).forEach(function (e) {
                    e.removeAttribute("aria-expanded");
                  })
                : r.triggerTarget && e.removeAttribute("aria-expanded");
              P(), H(), x && x(n, r);
              y.popperInstance &&
                (Z(),
                Q().forEach(function (e) {
                  requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
                }));
              M("onAfterUpdate", [y, t]);
            },
            setContent: function (e) {
              y.setProps({ content: e });
            },
            show: function () {
              0;
              var e = y.state.isVisible,
                t = y.state.isDestroyed,
                n = !y.state.isEnabled,
                r = qe.isTouch && !y.props.touch,
                o = ke(y.props.duration, 0, Je.duration);
              if (e || t || n || r) return;
              if (L().hasAttribute("disabled")) return;
              if ((M("onShow", [y], !1), !1 === y.props.onShow(y))) return;
              (y.state.isVisible = !0), j() && (w.style.visibility = "visible");
              H(), I(), y.state.isMounted || (w.style.transition = "none");
              if (j()) {
                var i = C();
                Be([i.box, i.content], 0);
              }
              (s = function () {
                var e;
                if (y.state.isVisible && !v) {
                  if (
                    ((v = !0),
                    w.offsetHeight,
                    (w.style.transition = y.props.moveTransition),
                    j() && y.props.animation)
                  ) {
                    var t = C(),
                      n = t.box,
                      r = t.content;
                    Be([n, r], o), Ie([n, r], "visible");
                  }
                  N(),
                    P(),
                    Ne(rt, y),
                    null == (e = y.popperInstance) || e.forceUpdate(),
                    M("onMount", [y]),
                    y.props.animation &&
                      j() &&
                      (function (e, t) {
                        U(e, t);
                      })(o, function () {
                        (y.state.isShown = !0), M("onShown", [y]);
                      });
                }
              }),
                (function () {
                  var e,
                    t = y.props.appendTo,
                    n = L();
                  e =
                    (y.props.interactive && t === Le) || "parent" === t
                      ? n.parentNode
                      : Se(t, [n]);
                  e.contains(w) || e.appendChild(w);
                  (y.state.isMounted = !0), Z(), !1;
                })();
            },
            hide: function () {
              0;
              var e = !y.state.isVisible,
                t = y.state.isDestroyed,
                n = !y.state.isEnabled,
                r = ke(y.props.duration, 1, Je.duration);
              if (e || t || n) return;
              if ((M("onHide", [y], !1), !1 === y.props.onHide(y))) return;
              (y.state.isVisible = !1),
                (y.state.isShown = !1),
                (v = !1),
                (f = !1),
                j() && (w.style.visibility = "hidden");
              if ((_(), W(), H(!0), j())) {
                var o = C(),
                  i = o.box,
                  a = o.content;
                y.props.animation && (Be([i, a], r), Ie([i, a], "hidden"));
              }
              N(),
                P(),
                y.props.animation
                  ? j() &&
                    (function (e, t) {
                      U(e, function () {
                        !y.state.isVisible &&
                          w.parentNode &&
                          w.parentNode.contains(w) &&
                          t();
                      });
                    })(r, y.unmount)
                  : y.unmount();
            },
            hideWithInteractivity: function (e) {
              0;
              k().addEventListener("mousemove", h), Ne(nt, h), h(e);
            },
            enable: function () {
              y.state.isEnabled = !0;
            },
            disable: function () {
              y.hide(), (y.state.isEnabled = !1);
            },
            unmount: function () {
              0;
              y.state.isVisible && y.hide();
              if (!y.state.isMounted) return;
              G(),
                Q().forEach(function (e) {
                  e._tippy.unmount();
                }),
                w.parentNode && w.parentNode.removeChild(w);
              (rt = rt.filter(function (e) {
                return e !== y;
              })),
                (y.state.isMounted = !1),
                M("onHidden", [y]);
            },
            destroy: function () {
              0;
              if (y.state.isDestroyed) return;
              y.clearDelayTimeouts(),
                y.unmount(),
                F(),
                delete e._tippy,
                (y.state.isDestroyed = !0),
                M("onDestroy", [y]);
            },
          };
        if (!p.render) return y;
        var O = p.render(y),
          w = O.popper,
          x = O.onUpdate;
        w.setAttribute("data-tippy-root", ""),
          (w.id = "tippy-" + y.id),
          (y.popper = w),
          (e._tippy = y),
          (w._tippy = y);
        var E = b.map(function (e) {
            return e.fn(y);
          }),
          A = e.hasAttribute("aria-expanded");
        return (
          $(),
          P(),
          H(),
          M("onCreate", [y]),
          p.showOnCreate && ee(),
          w.addEventListener("mouseenter", function () {
            y.props.interactive && y.state.isVisible && y.clearDelayTimeouts();
          }),
          w.addEventListener("mouseleave", function () {
            y.props.interactive &&
              y.props.trigger.indexOf("mouseenter") >= 0 &&
              k().addEventListener("mousemove", h);
          }),
          y
        );
        function T() {
          var e = y.props.touch;
          return Array.isArray(e) ? e : [e, 0];
        }
        function D() {
          return "hold" === T()[0];
        }
        function j() {
          var e;
          return !(null == (e = y.props.render) || !e.$$tippy);
        }
        function L() {
          return c || e;
        }
        function k() {
          var e,
            t,
            n = L().parentNode;
          return n
            ? null != (t = Me(n)[0]) && null != (e = t.ownerDocument) && e.body
              ? t.ownerDocument
              : document
            : document;
        }
        function C() {
          return et(w);
        }
        function S(e) {
          return (y.state.isMounted && !y.state.isVisible) ||
            qe.isTouch ||
            (i && "focus" === i.type)
            ? 0
            : ke(y.props.delay, e ? 0 : 1, Je.delay);
        }
        function H(e) {
          void 0 === e && (e = !1),
            (w.style.pointerEvents = y.props.interactive && !e ? "" : "none"),
            (w.style.zIndex = "" + y.props.zIndex);
        }
        function M(e, t, n) {
          var r;
          (void 0 === n && (n = !0),
          E.forEach(function (n) {
            n[e] && n[e].apply(n, t);
          }),
          n) && (r = y.props)[e].apply(r, t);
        }
        function N() {
          var t = y.props.aria;
          if (t.content) {
            var n = "aria-" + t.content,
              r = w.id;
            Me(y.props.triggerTarget || e).forEach(function (e) {
              var t = e.getAttribute(n);
              if (y.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);
              else {
                var o = t && t.replace(r, "").trim();
                o ? e.setAttribute(n, o) : e.removeAttribute(n);
              }
            });
          }
        }
        function P() {
          !A &&
            y.props.aria.expanded &&
            Me(y.props.triggerTarget || e).forEach(function (e) {
              y.props.interactive
                ? e.setAttribute(
                    "aria-expanded",
                    y.state.isVisible && e === L() ? "true" : "false"
                  )
                : e.removeAttribute("aria-expanded");
            });
        }
        function _() {
          k().removeEventListener("mousemove", h),
            (nt = nt.filter(function (e) {
              return e !== h;
            }));
        }
        function R(t) {
          if (!qe.isTouch || (!d && "mousedown" !== t.type)) {
            var n = (t.composedPath && t.composedPath()[0]) || t.target;
            if (!y.props.interactive || !Ue(w, n)) {
              if (
                Me(y.props.triggerTarget || e).some(function (e) {
                  return Ue(e, n);
                })
              ) {
                if (qe.isTouch) return;
                if (y.state.isVisible && y.props.trigger.indexOf("click") >= 0)
                  return;
              } else M("onClickOutside", [y, t]);
              !0 === y.props.hideOnClick &&
                (y.clearDelayTimeouts(),
                y.hide(),
                (l = !0),
                setTimeout(function () {
                  l = !1;
                }),
                y.state.isMounted || W());
            }
          }
        }
        function V() {
          d = !0;
        }
        function B() {
          d = !1;
        }
        function I() {
          var e = k();
          e.addEventListener("mousedown", R, !0),
            e.addEventListener("touchend", R, je),
            e.addEventListener("touchstart", B, je),
            e.addEventListener("touchmove", V, je);
        }
        function W() {
          var e = k();
          e.removeEventListener("mousedown", R, !0),
            e.removeEventListener("touchend", R, je),
            e.removeEventListener("touchstart", B, je),
            e.removeEventListener("touchmove", V, je);
        }
        function U(e, t) {
          var n = C().box;
          function r(e) {
            e.target === n && (We(n, "remove", r), t());
          }
          if (0 === e) return t();
          We(n, "remove", a), We(n, "add", r), (a = r);
        }
        function q(t, n, r) {
          void 0 === r && (r = !1),
            Me(y.props.triggerTarget || e).forEach(function (e) {
              e.addEventListener(t, n, r),
                m.push({ node: e, eventType: t, handler: n, options: r });
            });
        }
        function $() {
          var e;
          D() &&
            (q("touchstart", z, { passive: !0 }),
            q("touchend", X, { passive: !0 })),
            ((e = y.props.trigger), e.split(/\s+/).filter(Boolean)).forEach(
              function (e) {
                if ("manual" !== e)
                  switch ((q(e, z), e)) {
                    case "mouseenter":
                      q("mouseleave", X);
                      break;
                    case "focus":
                      q(Xe ? "focusout" : "blur", K);
                      break;
                    case "focusin":
                      q("focusout", K);
                  }
              }
            );
        }
        function F() {
          m.forEach(function (e) {
            var t = e.node,
              n = e.eventType,
              r = e.handler,
              o = e.options;
            t.removeEventListener(n, r, o);
          }),
            (m = []);
        }
        function z(e) {
          var t,
            n = !1;
          if (y.state.isEnabled && !J(e) && !l) {
            var r = "focus" === (null == (t = i) ? void 0 : t.type);
            (i = e),
              (c = e.currentTarget),
              P(),
              !y.state.isVisible &&
                Ce(e, "MouseEvent") &&
                nt.forEach(function (t) {
                  return t(e);
                }),
              "click" === e.type &&
              (y.props.trigger.indexOf("mouseenter") < 0 || f) &&
              !1 !== y.props.hideOnClick &&
              y.state.isVisible
                ? (n = !0)
                : ee(e),
              "click" === e.type && (f = !n),
              n && !r && te(e);
          }
        }
        function Y(e) {
          var t = e.target,
            n = L().contains(t) || w.contains(t);
          if ("mousemove" !== e.type || !n) {
            var r = Q()
              .concat(w)
              .map(function (e) {
                var t,
                  n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                return n
                  ? {
                      popperRect: e.getBoundingClientRect(),
                      popperState: n,
                      props: p,
                    }
                  : null;
              })
              .filter(Boolean);
            (function (e, t) {
              var n = t.clientX,
                r = t.clientY;
              return e.every(function (e) {
                var t = e.popperRect,
                  o = e.popperState,
                  i = e.props.interactiveBorder,
                  a = o.placement.split("-")[0],
                  s = o.modifiersData.offset;
                if (!s) return !0;
                var c = "bottom" === a ? s.top.y : 0,
                  u = "top" === a ? s.bottom.y : 0,
                  p = "right" === a ? s.left.x : 0,
                  f = "left" === a ? s.right.x : 0,
                  l = t.top - r + c > i,
                  d = r - t.bottom - u > i,
                  v = t.left - n + p > i,
                  m = n - t.right - f > i;
                return l || d || v || m;
              });
            })(r, e) && (_(), te(e));
          }
        }
        function X(e) {
          J(e) ||
            (y.props.trigger.indexOf("click") >= 0 && f) ||
            (y.props.interactive ? y.hideWithInteractivity(e) : te(e));
        }
        function K(e) {
          (y.props.trigger.indexOf("focusin") < 0 && e.target !== L()) ||
            (y.props.interactive &&
              e.relatedTarget &&
              w.contains(e.relatedTarget)) ||
            te(e);
        }
        function J(e) {
          return !!qe.isTouch && D() !== e.type.indexOf("touch") >= 0;
        }
        function Z() {
          G();
          var t = y.props,
            n = t.popperOptions,
            r = t.placement,
            o = t.offset,
            i = t.getReferenceClientRect,
            a = t.moveTransition,
            c = j() ? et(w).arrow : null,
            u = i
              ? {
                  getBoundingClientRect: i,
                  contextElement: i.contextElement || L(),
                }
              : e,
            p = {
              name: "$$tippy",
              enabled: !0,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function (e) {
                var t = e.state;
                if (j()) {
                  var n = C().box;
                  ["placement", "reference-hidden", "escaped"].forEach(
                    function (e) {
                      "placement" === e
                        ? n.setAttribute("data-placement", t.placement)
                        : t.attributes.popper["data-popper-" + e]
                        ? n.setAttribute("data-" + e, "")
                        : n.removeAttribute("data-" + e);
                    }
                  ),
                    (t.attributes.popper = {});
                }
              },
            },
            f = [
              { name: "offset", options: { offset: o } },
              {
                name: "preventOverflow",
                options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
              },
              { name: "flip", options: { padding: 5 } },
              { name: "computeStyles", options: { adaptive: !a } },
              p,
            ];
          j() &&
            c &&
            f.push({ name: "arrow", options: { element: c, padding: 3 } }),
            f.push.apply(f, (null == n ? void 0 : n.modifiers) || []),
            (y.popperInstance = De(
              u,
              w,
              Object.assign({}, n, {
                placement: r,
                onFirstUpdate: s,
                modifiers: f,
              })
            ));
        }
        function G() {
          y.popperInstance &&
            (y.popperInstance.destroy(), (y.popperInstance = null));
        }
        function Q() {
          return Pe(w.querySelectorAll("[data-tippy-root]"));
        }
        function ee(e) {
          y.clearDelayTimeouts(), e && M("onTrigger", [y, e]), I();
          var t = S(!0),
            r = T(),
            o = r[0],
            i = r[1];
          qe.isTouch && "hold" === o && i && (t = i),
            t
              ? (n = setTimeout(function () {
                  y.show();
                }, t))
              : y.show();
        }
        function te(e) {
          if (
            (y.clearDelayTimeouts(),
            M("onUntrigger", [y, e]),
            y.state.isVisible)
          ) {
            if (
              !(
                y.props.trigger.indexOf("mouseenter") >= 0 &&
                y.props.trigger.indexOf("click") >= 0 &&
                ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
                f
              )
            ) {
              var t = S(!1);
              t
                ? (r = setTimeout(function () {
                    y.state.isVisible && y.hide();
                  }, t))
                : (o = requestAnimationFrame(function () {
                    y.hide();
                  }));
            }
          } else W();
        }
      }
      function it(e, t) {
        void 0 === t && (t = {});
        var n = Je.plugins.concat(t.plugins || []);
        document.addEventListener("touchstart", Fe, je),
          window.addEventListener("blur", Ye);
        var r = Object.assign({}, t, { plugins: n }),
          o = Ve(e).reduce(function (e, t) {
            var n = t && ot(t, r);
            return n && e.push(n), e;
          }, []);
        return Re(e) ? o[0] : o;
      }
      function at(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      (it.defaultProps = Je),
        (it.setDefaultProps = function (e) {
          Object.keys(e).forEach(function (t) {
            Je[t] = e[t];
          });
        }),
        (it.currentInput = qe),
        Object.assign({}, C, {
          effect: function (e) {
            var t = e.state,
              n = {
                popper: {
                  position: t.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
              };
            Object.assign(t.elements.popper.style, n.popper),
              (t.styles = n),
              t.elements.arrow &&
                Object.assign(t.elements.arrow.style, n.arrow);
          },
        }),
        it.setDefaultProps({ animation: !1 });
      var st = "undefined" != typeof window && "undefined" != typeof document;
      function ct(e, t) {
        e &&
          ("function" == typeof e && e(t),
          {}.hasOwnProperty.call(e, "current") && (e.current = t));
      }
      function ut() {
        return st && document.createElement("div");
      }
      function pt(e, t) {
        if (e === t) return !0;
        if (
          "object" == typeof e &&
          null != e &&
          "object" == typeof t &&
          null != t
        ) {
          if (Object.keys(e).length !== Object.keys(t).length) return !1;
          for (var n in e) {
            if (!t.hasOwnProperty(n)) return !1;
            if (!pt(e[n], t[n])) return !1;
          }
          return !0;
        }
        return !1;
      }
      function ft(e) {
        var t = [];
        return (
          e.forEach(function (e) {
            t.find(function (t) {
              return pt(e, t);
            }) || t.push(e);
          }),
          t
        );
      }
      var lt = st ? a.useLayoutEffect : a.useEffect;
      function dt(e, t, n) {
        n.split(/\s+/).forEach(function (n) {
          n && e.classList[t](n);
        });
      }
      var vt = {
        name: "className",
        defaultValue: "",
        fn: function (e) {
          var t = e.popper.firstElementChild,
            n = function () {
              var t;
              return !!(null == (t = e.props.render) ? void 0 : t.$$tippy);
            };
          function r() {
            (e.props.className && !n()) || dt(t, "add", e.props.className);
          }
          return {
            onCreate: r,
            onBeforeUpdate: function () {
              n() && dt(t, "remove", e.props.className);
            },
            onAfterUpdate: r,
          };
        },
      };
      function mt(e) {
        return function (t) {
          var n = t.children,
            r = t.content,
            o = t.visible,
            i = t.singleton,
            s = t.render,
            c = t.reference,
            p = t.disabled,
            f = void 0 !== p && p,
            l = t.ignoreAttributes,
            d = void 0 === l || l;
          t.__source, t.__self;
          var v,
            m,
            h = at(t, [
              "children",
              "content",
              "visible",
              "singleton",
              "render",
              "reference",
              "disabled",
              "ignoreAttributes",
              "__source",
              "__self",
            ]),
            g = void 0 !== o,
            b = void 0 !== i,
            y = (0, a.useState)(!1),
            O = y[0],
            w = y[1],
            x = (0, a.useState)({}),
            E = x[0],
            A = x[1],
            T = (0, a.useState)(),
            D = T[0],
            j = T[1],
            L =
              ((v = function () {
                return { container: ut(), renders: 1 };
              }),
              (m = (0, a.useRef)()).current ||
                (m.current = "function" == typeof v ? v() : v),
              m.current),
            k = Object.assign({ ignoreAttributes: d }, h, {
              content: L.container,
            });
          g && ((k.trigger = "manual"), (k.hideOnClick = !1)), b && (f = !0);
          var C = k,
            S = k.plugins || [];
          s &&
            (C = Object.assign({}, k, {
              plugins:
                b && null != i.data
                  ? [].concat(S, [
                      {
                        fn: function () {
                          return {
                            onTrigger: function (e, t) {
                              var n = i.data.children.find(function (e) {
                                return e.instance.reference === t.currentTarget;
                              });
                              (e.state.$$activeSingletonInstance = n.instance),
                                j(n.content);
                            },
                          };
                        },
                      },
                    ])
                  : S,
              render: function () {
                return { popper: L.container };
              },
            }));
          var H = [c].concat(n ? [n.type] : []);
          return (
            lt(function () {
              var t = c;
              c && c.hasOwnProperty("current") && (t = c.current);
              var n = e(
                t || L.ref || ut(),
                Object.assign({}, C, { plugins: [vt].concat(k.plugins || []) })
              );
              return (
                (L.instance = n),
                f && n.disable(),
                o && n.show(),
                b &&
                  i.hook({
                    instance: n,
                    content: r,
                    props: C,
                    setSingletonContent: j,
                  }),
                w(!0),
                function () {
                  n.destroy(), null == i || i.cleanup(n);
                }
              );
            }, H),
            lt(function () {
              var e;
              if (1 !== L.renders) {
                var t,
                  n,
                  a,
                  s,
                  c = L.instance;
                c.setProps(
                  ((t = c.props),
                  (n = C),
                  Object.assign({}, n, {
                    popperOptions: Object.assign(
                      {},
                      t.popperOptions,
                      n.popperOptions,
                      {
                        modifiers: ft(
                          [].concat(
                            (null == (a = t.popperOptions)
                              ? void 0
                              : a.modifiers) || [],
                            (null == (s = n.popperOptions)
                              ? void 0
                              : s.modifiers) || []
                          )
                        ),
                      }
                    ),
                  }))
                ),
                  null == (e = c.popperInstance) || e.forceUpdate(),
                  f ? c.disable() : c.enable(),
                  g && (o ? c.show() : c.hide()),
                  b &&
                    i.hook({
                      instance: c,
                      content: r,
                      props: C,
                      setSingletonContent: j,
                    });
              } else L.renders++;
            }),
            lt(function () {
              var e;
              if (s) {
                var t = L.instance;
                t.setProps({
                  popperOptions: Object.assign({}, t.props.popperOptions, {
                    modifiers: [].concat(
                      (
                        (null == (e = t.props.popperOptions)
                          ? void 0
                          : e.modifiers) || []
                      ).filter(function (e) {
                        return "$$tippyReact" !== e.name;
                      }),
                      [
                        {
                          name: "$$tippyReact",
                          enabled: !0,
                          phase: "beforeWrite",
                          requires: ["computeStyles"],
                          fn: function (e) {
                            var t,
                              n = e.state,
                              r =
                                null == (t = n.modifiersData) ? void 0 : t.hide;
                            (E.placement === n.placement &&
                              E.referenceHidden ===
                                (null == r ? void 0 : r.isReferenceHidden) &&
                              E.escaped ===
                                (null == r ? void 0 : r.hasPopperEscaped)) ||
                              A({
                                placement: n.placement,
                                referenceHidden:
                                  null == r ? void 0 : r.isReferenceHidden,
                                escaped:
                                  null == r ? void 0 : r.hasPopperEscaped,
                              }),
                              (n.attributes.popper = {});
                          },
                        },
                      ]
                    ),
                  }),
                });
              }
            }, [E.placement, E.referenceHidden, E.escaped].concat(H)),
            a.createElement(
              a.Fragment,
              null,
              n
                ? (0, a.cloneElement)(n, {
                    ref: function (e) {
                      var t;
                      (L.ref = e),
                        ct(
                          null == n || null == (t = n.props) ? void 0 : t.ref,
                          e
                        );
                    },
                  })
                : null,
              O &&
                (0, u.createPortal)(
                  s
                    ? s(
                        (function (e) {
                          var t = { "data-placement": e.placement };
                          return (
                            e.referenceHidden &&
                              (t["data-reference-hidden"] = ""),
                            e.escaped && (t["data-escaped"] = ""),
                            t
                          );
                        })(E),
                        D,
                        L.instance
                      )
                    : r,
                  L.container
                )
            )
          );
        };
      }
      var ht = function (e, t) {
          return (0, a.forwardRef)(function (n, r) {
            var o = n.children,
              i = at(n, ["children"]);
            return a.createElement(
              e,
              Object.assign({}, t, i),
              o
                ? (0, a.cloneElement)(o, {
                    ref: function (e) {
                      var t;
                      ct(r, e),
                        ct(
                          null == o || null == (t = o.props) ? void 0 : t.ref,
                          e
                        );
                    },
                  })
                : null
            );
          });
        },
        gt = ht(mt(it), {
          render: function () {
            return "";
          },
        });
      const bt = { passive: !1, capture: !0 };
      var yt = (e) => {
        let {
          onClickOutside: t,
          onHidden: n,
          onMount: r,
          focusScope: o,
          device: i,
        } = e;
        const [s, c] = (0, a.useState)(void 0),
          u = (0, a.useRef)(!1),
          p = (0, a.useCallback)((e) => {
            u.current &&
              ((u.current = !1),
              e.preventDefault(),
              "function" == typeof t && t(null, e));
          }, []);
        return {
          handleClickOutside: (e, n) => {
            if ("android" !== (null == i ? void 0 : i.osName)) {
              const t = n.clientX,
                r = n.clientY;
              if ("number" == typeof t || "number" == typeof r) {
                const n = document.elementFromPoint(t, r);
                if (
                  n &&
                  ((e, t) => {
                    let n = t;
                    for (; n; ) {
                      var r, o;
                      if (e.contains(n)) return !0;
                      n =
                        null === (r = (o = n).getRootNode) ||
                        void 0 === r ||
                        null === (r = r.call(o)) ||
                        void 0 === r
                          ? void 0
                          : r.host;
                    }
                    return !1;
                  })(e.popper, n)
                )
                  return;
              }
            }
            if (o) {
              const r = n instanceof MouseEvent;
              r ? n.preventDefault() : (u.current = !0),
                c(!0),
                null != e && e.reference && e.reference.blur(),
                r && "function" == typeof t && t(e, n);
            } else "function" == typeof t && t(e, n);
          },
          handleHiddenTippy: (e) => {
            "function" == typeof n && n(e, { preventFocus: s }),
              o && document.removeEventListener("touchend", p, bt),
              c(!1);
          },
          handleOnMountTippy: (e) => {
            o && document.addEventListener("touchend", p, bt),
              "function" == typeof r && r(e);
          },
        };
      };
      const Ot = "andes-popper",
        wt = "bottom",
        xt = [
          "attrs",
          "appendTo",
          "children",
          "className",
          "classNames",
          "content",
          "focusScope",
          "id",
          "interactive",
          "interactiveDebounce",
          "onClickOutside",
          "onHidden",
          "onMount",
          "paddingSize",
          "placement",
          "popperOptions",
          "style",
          "trigger",
          "visible",
          "zIndex",
        ];
      var Et = (e) => {
        let {
            attrs: t = {},
            appendTo: n,
            children: s,
            className: u,
            classNames: l = {},
            content: d,
            focusScope: v = !1,
            id: m,
            interactive: h = !1,
            interactiveDebounce: g = 0,
            onClickOutside: b,
            onHidden: y,
            onMount: O,
            paddingSize: w = 0,
            placement: x = wt,
            popperOptions: E,
            style: A,
            trigger: T = "click focus",
            visible: D,
            zIndex: j = 9999,
          } = e,
          L = (0, i.A)(e, xt);
        const k = u || (null == l ? void 0 : l.root),
          C = c()(Ot, k, [`${Ot}--padding-${w}`]),
          S = c()(`${Ot}__content`, null == l ? void 0 : l.content),
          { device: H } = (0, f.AH)(),
          {
            handleClickOutside: M,
            handleHiddenTippy: N,
            handleOnMountTippy: P,
          } = yt({
            onClickOutside: b,
            onHidden: y,
            onMount: O,
            focusScope: v,
            device: H,
          }),
          _ = (0, a.useMemo)(() => {
            if (!E) return { modifiers: [{ name: "flip", enabled: !1 }] };
            const e = E.modifiers || [],
              t = e.find((e) => "flip" === e.name);
            t &&
              !0 === t.enabled &&
              (0, p.A)(
                !1,
                "\n  'Flip modifier cannot be enabled due to infinite loops in @popperjs/core.\n"
              );
            const n = e.filter((e) => "flip" !== e.name);
            return (0, o.A)(
              (0, o.A)({}, E),
              {},
              { modifiers: [{ name: "flip", enabled: !1 }, ...n] }
            );
          }, [E]);
        return a.createElement(
          gt,
          (0, r.A)(
            {
              render: (e, o, i) =>
                a.createElement(
                  "div",
                  (0, r.A)(
                    {
                      id: m,
                      style: A,
                      className: C,
                      "data-testid": "popper",
                      "data-andes-popper": !0,
                      "data-andes-popper-outside-root":
                        "function" == typeof n || !h || void 0,
                    },
                    null == t ? void 0 : t.root
                  ),
                  a.createElement(
                    "div",
                    (0, r.A)({ className: S }, null == t ? void 0 : t.content),
                    (0, a.isValidElement)(d)
                      ? a.cloneElement(d, { instance: i })
                      : d
                  )
                ),
              appendTo: n,
              placement: x,
              trigger: void 0 === D ? T : void 0,
              visible: D,
              interactive: h,
              interactiveDebounce: g,
              popperOptions: _,
              onClickOutside: M,
              zIndex: j,
              onHidden: N,
              onMount: P,
            },
            L
          ),
          s
        );
      };
    },
    91071(e, t, n) {
      n.d(t, { Y: () => v, s: () => l });
      var r = n(58168),
        o = n(80045),
        i = n(96540),
        a = n(46942),
        s = n.n(a);
      const c = "andes-visually-hidden",
        u = c,
        p = `${c}-focusable`,
        f = ["children", "component"];
      var l = (e) => {
        let { children: t, component: n = "span" } = e,
          a = (0, o.A)(e, f);
        return i.createElement(n, (0, r.A)({ className: u }, a), t);
      };
      const d = ["children", "component", "className"];
      var v = (e) => {
        let { children: t, component: n = "button", className: a } = e,
          c = (0, o.A)(e, d);
        return i.createElement(n, (0, r.A)({ className: s()(p, a) }, c), t);
      };
    },
    27700(e, t, n) {
      n.d(t, { A: () => o });
      var r = n(96540);
      const o = (e) => {
        let {
          color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
          i18n: n,
          srLabel: o,
        } = e;
        return r.createElement(
          "svg",
          {
            "aria-hidden": o ? void 0 : !o,
            "aria-label": o || void 0,
            role: o ? "img" : void 0,
            color: t,
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "currentColor",
          },
          o && r.createElement("title", null, o),
          r.createElement("path", {
            d: "M5.2018 6.75609L9.99743 11.5517L14.7981 6.7511L15.6466 7.59963L9.99743 13.2488L4.35327 7.60462L5.2018 6.75609Z",
            fill: "currentColor",
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=96784.afb45a1a.js.map
