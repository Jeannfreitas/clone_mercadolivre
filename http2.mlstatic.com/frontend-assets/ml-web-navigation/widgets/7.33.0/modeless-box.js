var ModelessBoxWidget = (function () {
  "use strict";
  function e(t) {
    return (
      (e =
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
      e(t)
    );
  }
  function t(t) {
    var n = (function (t, n) {
      if ("object" != e(t) || !t) return t;
      var i = t[Symbol.toPrimitive];
      if (void 0 !== i) {
        var o = i.call(t, n || "default");
        if ("object" != e(o)) return o;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === n ? String : Number)(t);
    })(t, "string");
    return "symbol" == e(n) ? n : n + "";
  }
  function n(e, n, i) {
    return (
      (n = t(n)) in e
        ? Object.defineProperty(e, n, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[n] = i),
      e
    );
  }
  function i(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  function o(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if ("function" == typeof t) {
      var n = function e() {
        var n = !1;
        try {
          n = this instanceof e;
        } catch {}
        return n
          ? Reflect.construct(t, arguments, this.constructor)
          : t.apply(this, arguments);
      };
      n.prototype = t.prototype;
    } else n = {};
    return (
      Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.keys(e).forEach(function (t) {
        var i = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(
          n,
          t,
          i.get
            ? i
            : {
                enumerable: !0,
                get: function () {
                  return e[t];
                },
              }
        );
      }),
      n
    );
  }
  var r,
    s = {};
  var a,
    l,
    c,
    u =
      (r ||
        ((r = 1),
        (function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.addClass = n),
            (e.removeClass = i),
            (e.hasClass = o);
          var t = !!document.createElement("div").classList;
          function n(e, n) {
            t
              ? e.classList.add(n)
              : e.setAttribute("class", e.getAttribute("class") + " " + n);
          }
          function i(e, n) {
            t
              ? e.classList.remove(n)
              : e.setAttribute(
                  "class",
                  e.className.replace(
                    new RegExp(
                      "(^|\\b)" + n.split(" ").join("|") + "(\\b|$)",
                      "gi"
                    ),
                    " "
                  )
                );
          }
          function o(e, n) {
            return t
              ? e.classList.contains(n)
              : new RegExp("(^| )" + n + "( |$)", "gi").test(e.className);
          }
          var r = { addClass: n, removeClass: i, hasClass: o };
          e.default = r;
        })(s)),
      s),
    h = {},
    d = { exports: {} },
    p = { exports: {} };
  function f() {
    return (
      a ||
        ((a = 1),
        (function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n =
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
                };
          (t.default = function (e) {
            if (null == e) return !1;
            if (
              "object" !== (void 0 === e ? "undefined" : n(e)) ||
              e.nodeType ||
              e === e.window
            )
              return !1;
            if (
              e.constructor &&
              !Object.prototype.hasOwnProperty.call(
                e.constructor.prototype,
                "isPrototypeOf"
              )
            )
              return !1;
            return !0;
          }),
            (e.exports = t.default);
        })(p, p.exports)),
      p.exports
    );
  }
  function m() {
    return (
      l ||
        ((l = 1),
        (function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n =
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
                };
          t.default = function e() {
            var t = void 0,
              i = void 0,
              o = void 0,
              s = void 0,
              a = void 0,
              l = void 0,
              c = arguments[0] || {},
              u = 1,
              h = arguments.length,
              d = !1;
            "boolean" == typeof c && ((d = c), (c = arguments[u] || {}), u++);
            "object" !== (void 0 === c ? "undefined" : n(c)) &&
              "function" === !(void 0 === c || n(c)) &&
              (c = {});
            if (h <= u) return c;
            for (; u < h; u++)
              if (null != (t = arguments[u]))
                for (i in t)
                  (o = c[i]),
                    c !== (s = t[i]) &&
                      (d && s && ((0, r.default)(s) || (a = Array.isArray(s)))
                        ? (a
                            ? ((a = !1), (l = o && Array.isArray(o) ? o : []))
                            : (l = o && (0, r.default)(o) ? o : {}),
                          (c[i] = e(d, l, s)))
                        : void 0 !== s && (c[i] = s));
            return c;
          };
          var i,
            o = f(),
            r = (i = o) && i.__esModule ? i : { default: i };
          e.exports = t.default;
        })(d, d.exports)),
      d.exports
    );
  }
  var _,
    v,
    g =
      (c ||
        ((c = 1),
        (function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.once = void 0),
            (e.initEvent = d),
            (e.on = _),
            (e.off = g),
            (e.trigger = b);
          var t = i(m()),
            n = i(f());
          function i(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var o = (function () {
              var e = [];
              for (var t in document)
                if ("on" === t.substring(0, 2)) {
                  var n = t.replace("on", "");
                  e.push(n);
                }
              return e;
            })(),
            r = o.filter(function (e) {
              return /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/.test(
                e
              );
            }),
            s = !!document.addEventListener,
            a = s ? "addEventListener" : "attachEvent",
            l = s ? "removeEventListener" : "detachEvent",
            c = s ? "dispatchEvent" : "fireEvent";
          function u(e) {
            return e
              ? "string" == typeof e
                ? h(document.querySelectorAll(e))
                : /^\[object (HTMLCollection|NodeList|Object)\]$/.test(
                    Object.prototype.toString.call(e)
                  ) &&
                  ("number" == typeof e.length ||
                    Object.prototype.hasOwnProperty.call(e, "length"))
                ? 0 === e.length || e[0].nodeType < 1
                  ? []
                  : h(e)
                : Array.isArray(e)
                ? [].concat(e)
                : [e]
              : [];
          }
          function h(e) {
            for (var t = 0, n = e.length, i = []; t < n; t++) i.push(e[t]);
            return i;
          }
          function d(e, n) {
            "string" != typeof e && (e = (n = e).type);
            var i = void 0,
              s = -1 !== o.indexOf(e),
              a = s && -1 !== r.indexOf(e),
              l = (0, t.default)(
                { bubbles: s, cancelable: s, detail: void 0 },
                n
              );
            return (
              document.createEvent
                ? (i = document.createEvent(
                    a && window.MouseEvent ? "MouseEvents" : "Events"
                  )).initEvent(e, l.bubbles, l.cancelable, l.detail)
                : document.createEventObject &&
                  ((i = document.createEventObject(window.event)),
                  a && (i.button = 1),
                  l.bubbles || (i.cancelBubble = !0)),
              i
            );
          }
          function p(e) {
            return "on" === e.substr(0, 2)
              ? s
                ? e.substr(2)
                : e
              : s
              ? e
              : "on" + e;
          }
          function _(e, t, n, i) {
            u(e).forEach(function (e) {
              e[a](p(t), n, i || !1);
            });
          }
          function v(e, t, n, i) {
            u(e).forEach(function (e) {
              var o = n;
              (n = function (t) {
                return g(e, t.type, n), o.apply(e, arguments);
              }),
                e[a](p(t), n, i || !1);
            });
          }
          function g(e, t, n) {
            u(e).forEach(function (e) {
              e[l](p(t), n);
            });
          }
          function b(e, t, i) {
            var o = this,
              r = "string" == typeof t ? t : t.type;
            (t = "string" == typeof t || (0, n.default)(t) ? d(t, i) : t),
              u(e).forEach(function (e) {
                t.type in focus && "function" == typeof o[t.type]
                  ? o[t.type]()
                  : s
                  ? e[c](t)
                  : e[c](p(r), t);
              });
          }
          !Event.prototype.preventDefault &&
            Object.defineProperties &&
            Object.defineProperties(window.Event.prototype, {
              bubbles: { value: !0, writable: !0 },
              cancelable: { value: !0, writable: !0 },
              preventDefault: {
                value: function () {
                  this.cancelable &&
                    ((this.defaultPrevented = !0), (this.returnValue = !1));
                },
              },
              stopPropagation: {
                value: function () {
                  (this.stoppedPropagation = !0), (this.cancelBubble = !0);
                },
              },
              stopImmediatePropagation: {
                value: function () {
                  (this.stoppedImmediatePropagation = !0),
                    this.stopPropagation();
                },
              },
            }),
            (e.once = v);
          var y = { on: _, once: v, off: g, trigger: b };
          e.default = y;
        })(h)),
      h),
    b = { exports: {} },
    y = { exports: {} };
  function w() {
    if (_) return y.exports;
    _ = 1;
    var e,
      t = "object" == typeof Reflect ? Reflect : null,
      n =
        t && "function" == typeof t.apply
          ? t.apply
          : function (e, t, n) {
              return Function.prototype.apply.call(e, t, n);
            };
    e =
      t && "function" == typeof t.ownKeys
        ? t.ownKeys
        : Object.getOwnPropertySymbols
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(
              Object.getOwnPropertySymbols(e)
            );
          }
        : function (e) {
            return Object.getOwnPropertyNames(e);
          };
    var i =
      Number.isNaN ||
      function (e) {
        return e != e;
      };
    function o() {
      o.init.call(this);
    }
    (y.exports = o),
      (y.exports.once = function (e, t) {
        return new Promise(function (n, i) {
          function o(n) {
            e.removeListener(t, r), i(n);
          }
          function r() {
            "function" == typeof e.removeListener &&
              e.removeListener("error", o),
              n([].slice.call(arguments));
          }
          f(e, t, r, { once: !0 }),
            "error" !== t &&
              (function (e, t, n) {
                "function" == typeof e.on && f(e, "error", t, n);
              })(e, o, { once: !0 });
        });
      }),
      (o.EventEmitter = o),
      (o.prototype._events = void 0),
      (o.prototype._eventsCount = 0),
      (o.prototype._maxListeners = void 0);
    var r = 10;
    function s(e) {
      if ("function" != typeof e)
        throw new TypeError(
          'The "listener" argument must be of type Function. Received type ' +
            typeof e
        );
    }
    function a(e) {
      return void 0 === e._maxListeners
        ? o.defaultMaxListeners
        : e._maxListeners;
    }
    function l(e, t, n, i) {
      var o, r, l, c;
      if (
        (s(n),
        void 0 === (r = e._events)
          ? ((r = e._events = Object.create(null)), (e._eventsCount = 0))
          : (void 0 !== r.newListener &&
              (e.emit("newListener", t, n.listener ? n.listener : n),
              (r = e._events)),
            (l = r[t])),
        void 0 === l)
      )
        (l = r[t] = n), ++e._eventsCount;
      else if (
        ("function" == typeof l
          ? (l = r[t] = i ? [n, l] : [l, n])
          : i
          ? l.unshift(n)
          : l.push(n),
        (o = a(e)) > 0 && l.length > o && !l.warned)
      ) {
        l.warned = !0;
        var u = new Error(
          "Possible EventEmitter memory leak detected. " +
            l.length +
            " " +
            String(t) +
            " listeners added. Use emitter.setMaxListeners() to increase limit"
        );
        (u.name = "MaxListenersExceededWarning"),
          (u.emitter = e),
          (u.type = t),
          (u.count = l.length),
          (c = u),
          console && console.warn && console.warn(c);
      }
      return e;
    }
    function c() {
      if (!this.fired)
        return (
          this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 === arguments.length
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments)
        );
    }
    function u(e, t, n) {
      var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
        o = c.bind(i);
      return (o.listener = n), (i.wrapFn = o), o;
    }
    function h(e, t, n) {
      var i = e._events;
      if (void 0 === i) return [];
      var o = i[t];
      return void 0 === o
        ? []
        : "function" == typeof o
        ? n
          ? [o.listener || o]
          : [o]
        : n
        ? (function (e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n)
              t[n] = e[n].listener || e[n];
            return t;
          })(o)
        : p(o, o.length);
    }
    function d(e) {
      var t = this._events;
      if (void 0 !== t) {
        var n = t[e];
        if ("function" == typeof n) return 1;
        if (void 0 !== n) return n.length;
      }
      return 0;
    }
    function p(e, t) {
      for (var n = new Array(t), i = 0; i < t; ++i) n[i] = e[i];
      return n;
    }
    function f(e, t, n, i) {
      if ("function" == typeof e.on) i.once ? e.once(t, n) : e.on(t, n);
      else {
        if ("function" != typeof e.addEventListener)
          throw new TypeError(
            'The "emitter" argument must be of type EventEmitter. Received type ' +
              typeof e
          );
        e.addEventListener(t, function o(r) {
          i.once && e.removeEventListener(t, o), n(r);
        });
      }
    }
    return (
      Object.defineProperty(o, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return r;
        },
        set: function (e) {
          if ("number" != typeof e || e < 0 || i(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          r = e;
        },
      }),
      (o.init = function () {
        (void 0 !== this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = Object.create(null)), (this._eventsCount = 0)),
          (this._maxListeners = this._maxListeners || void 0);
      }),
      (o.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || e < 0 || i(e))
          throw new RangeError(
            'The value of "n" is out of range. It must be a non-negative number. Received ' +
              e +
              "."
          );
        return (this._maxListeners = e), this;
      }),
      (o.prototype.getMaxListeners = function () {
        return a(this);
      }),
      (o.prototype.emit = function (e) {
        for (var t = [], i = 1; i < arguments.length; i++) t.push(arguments[i]);
        var o = "error" === e,
          r = this._events;
        if (void 0 !== r) o = o && void 0 === r.error;
        else if (!o) return !1;
        if (o) {
          var s;
          if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s;
          var a = new Error(
            "Unhandled error." + (s ? " (" + s.message + ")" : "")
          );
          throw ((a.context = s), a);
        }
        var l = r[e];
        if (void 0 === l) return !1;
        if ("function" == typeof l) n(l, this, t);
        else {
          var c = l.length,
            u = p(l, c);
          for (i = 0; i < c; ++i) n(u[i], this, t);
        }
        return !0;
      }),
      (o.prototype.addListener = function (e, t) {
        return l(this, e, t, !1);
      }),
      (o.prototype.on = o.prototype.addListener),
      (o.prototype.prependListener = function (e, t) {
        return l(this, e, t, !0);
      }),
      (o.prototype.once = function (e, t) {
        return s(t), this.on(e, u(this, e, t)), this;
      }),
      (o.prototype.prependOnceListener = function (e, t) {
        return s(t), this.prependListener(e, u(this, e, t)), this;
      }),
      (o.prototype.removeListener = function (e, t) {
        var n, i, o, r, a;
        if ((s(t), void 0 === (i = this._events))) return this;
        if (void 0 === (n = i[e])) return this;
        if (n === t || n.listener === t)
          0 === --this._eventsCount
            ? (this._events = Object.create(null))
            : (delete i[e],
              i.removeListener &&
                this.emit("removeListener", e, n.listener || t));
        else if ("function" != typeof n) {
          for (o = -1, r = n.length - 1; r >= 0; r--)
            if (n[r] === t || n[r].listener === t) {
              (a = n[r].listener), (o = r);
              break;
            }
          if (o < 0) return this;
          0 === o
            ? n.shift()
            : (function (e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop();
              })(n, o),
            1 === n.length && (i[e] = n[0]),
            void 0 !== i.removeListener &&
              this.emit("removeListener", e, a || t);
        }
        return this;
      }),
      (o.prototype.off = o.prototype.removeListener),
      (o.prototype.removeAllListeners = function (e) {
        var t, n, i;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener)
          return (
            0 === arguments.length
              ? ((this._events = Object.create(null)), (this._eventsCount = 0))
              : void 0 !== n[e] &&
                (0 === --this._eventsCount
                  ? (this._events = Object.create(null))
                  : delete n[e]),
            this
          );
        if (0 === arguments.length) {
          var o,
            r = Object.keys(n);
          for (i = 0; i < r.length; ++i)
            "removeListener" !== (o = r[i]) && this.removeAllListeners(o);
          return (
            this.removeAllListeners("removeListener"),
            (this._events = Object.create(null)),
            (this._eventsCount = 0),
            this
          );
        }
        if ("function" == typeof (t = n[e])) this.removeListener(e, t);
        else if (void 0 !== t)
          for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
        return this;
      }),
      (o.prototype.listeners = function (e) {
        return h(this, e, !0);
      }),
      (o.prototype.rawListeners = function (e) {
        return h(this, e, !1);
      }),
      (o.listenerCount = function (e, t) {
        return "function" == typeof e.listenerCount
          ? e.listenerCount(t)
          : d.call(e, t);
      }),
      (o.prototype.listenerCount = d),
      (o.prototype.eventNames = function () {
        return this._eventsCount > 0 ? e(this._events) : [];
      }),
      y.exports
    );
  }
  var E = i(
    (v ||
      ((v = 1),
      (function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          i = w(),
          o = (n = i) && n.__esModule ? n : { default: n };
        (t.default = o.default), (e.exports = t.default);
      })(b, b.exports)),
    b.exports)
  );
  const {
    entries: k,
    setPrototypeOf: S,
    isFrozen: x,
    getPrototypeOf: T,
    getOwnPropertyDescriptor: C,
  } = Object;
  let { freeze: O, seal: N, create: L } = Object,
    { apply: z, construct: A } = "undefined" != typeof Reflect && Reflect;
  O ||
    (O = function (e) {
      return e;
    }),
    N ||
      (N = function (e) {
        return e;
      }),
    z ||
      (z = function (e, t, n) {
        return e.apply(t, n);
      }),
    A ||
      (A = function (e, t) {
        return new e(...t);
      });
  const M = Y(Array.prototype.forEach),
    R = Y(Array.prototype.lastIndexOf),
    P = Y(Array.prototype.pop),
    D = Y(Array.prototype.push),
    H = Y(Array.prototype.splice),
    I = Y(String.prototype.toLowerCase),
    j = Y(String.prototype.toString),
    V = Y(String.prototype.match),
    $ = Y(String.prototype.replace),
    U = Y(String.prototype.indexOf),
    B = Y(String.prototype.trim),
    F = Y(Object.prototype.hasOwnProperty),
    q = Y(RegExp.prototype.test),
    W =
      ((G = TypeError),
      function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return A(G, t);
      });
  var G;
  function Y(e) {
    return function (t) {
      t instanceof RegExp && (t.lastIndex = 0);
      for (
        var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1;
        o < n;
        o++
      )
        i[o - 1] = arguments[o];
      return z(e, t, i);
    };
  }
  function K(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I;
    S && S(e, null);
    let i = t.length;
    for (; i--; ) {
      let o = t[i];
      if ("string" == typeof o) {
        const e = n(o);
        e !== o && (x(t) || (t[i] = e), (o = e));
      }
      e[o] = !0;
    }
    return e;
  }
  function Z(e) {
    for (let t = 0; t < e.length; t++) {
      F(e, t) || (e[t] = null);
    }
    return e;
  }
  function X(e) {
    const t = L(null);
    for (const [n, i] of k(e)) {
      F(e, n) &&
        (Array.isArray(i)
          ? (t[n] = Z(i))
          : i && "object" == typeof i && i.constructor === Object
          ? (t[n] = X(i))
          : (t[n] = i));
    }
    return t;
  }
  function J(e, t) {
    for (; null !== e; ) {
      const n = C(e, t);
      if (n) {
        if (n.get) return Y(n.get);
        if ("function" == typeof n.value) return Y(n.value);
      }
      e = T(e);
    }
    return function () {
      return null;
    };
  }
  const Q = O([
      "a",
      "abbr",
      "acronym",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "bdi",
      "bdo",
      "big",
      "blink",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "center",
      "cite",
      "code",
      "col",
      "colgroup",
      "content",
      "data",
      "datalist",
      "dd",
      "decorator",
      "del",
      "details",
      "dfn",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "element",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "font",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meter",
      "nav",
      "nobr",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "section",
      "select",
      "shadow",
      "small",
      "source",
      "spacer",
      "span",
      "strike",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "template",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "track",
      "tt",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
    ]),
    ee = O([
      "svg",
      "a",
      "altglyph",
      "altglyphdef",
      "altglyphitem",
      "animatecolor",
      "animatemotion",
      "animatetransform",
      "circle",
      "clippath",
      "defs",
      "desc",
      "ellipse",
      "filter",
      "font",
      "g",
      "glyph",
      "glyphref",
      "hkern",
      "image",
      "line",
      "lineargradient",
      "marker",
      "mask",
      "metadata",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialgradient",
      "rect",
      "stop",
      "style",
      "switch",
      "symbol",
      "text",
      "textpath",
      "title",
      "tref",
      "tspan",
      "view",
      "vkern",
    ]),
    te = O([
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
    ]),
    ne = O([
      "animate",
      "color-profile",
      "cursor",
      "discard",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-src",
      "font-face-uri",
      "foreignobject",
      "hatch",
      "hatchpath",
      "mesh",
      "meshgradient",
      "meshpatch",
      "meshrow",
      "missing-glyph",
      "script",
      "set",
      "solidcolor",
      "unknown",
      "use",
    ]),
    ie = O([
      "math",
      "menclose",
      "merror",
      "mfenced",
      "mfrac",
      "mglyph",
      "mi",
      "mlabeledtr",
      "mmultiscripts",
      "mn",
      "mo",
      "mover",
      "mpadded",
      "mphantom",
      "mroot",
      "mrow",
      "ms",
      "mspace",
      "msqrt",
      "mstyle",
      "msub",
      "msup",
      "msubsup",
      "mtable",
      "mtd",
      "mtext",
      "mtr",
      "munder",
      "munderover",
      "mprescripts",
    ]),
    oe = O([
      "maction",
      "maligngroup",
      "malignmark",
      "mlongdiv",
      "mscarries",
      "mscarry",
      "msgroup",
      "mstack",
      "msline",
      "msrow",
      "semantics",
      "annotation",
      "annotation-xml",
      "mprescripts",
      "none",
    ]),
    re = O(["#text"]),
    se = O([
      "accept",
      "action",
      "align",
      "alt",
      "autocapitalize",
      "autocomplete",
      "autopictureinpicture",
      "autoplay",
      "background",
      "bgcolor",
      "border",
      "capture",
      "cellpadding",
      "cellspacing",
      "checked",
      "cite",
      "class",
      "clear",
      "color",
      "cols",
      "colspan",
      "controls",
      "controlslist",
      "coords",
      "crossorigin",
      "datetime",
      "decoding",
      "default",
      "dir",
      "disabled",
      "disablepictureinpicture",
      "disableremoteplayback",
      "download",
      "draggable",
      "enctype",
      "enterkeyhint",
      "face",
      "for",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hreflang",
      "id",
      "inputmode",
      "integrity",
      "ismap",
      "kind",
      "label",
      "lang",
      "list",
      "loading",
      "loop",
      "low",
      "max",
      "maxlength",
      "media",
      "method",
      "min",
      "minlength",
      "multiple",
      "muted",
      "name",
      "nonce",
      "noshade",
      "novalidate",
      "nowrap",
      "open",
      "optimum",
      "pattern",
      "placeholder",
      "playsinline",
      "popover",
      "popovertarget",
      "popovertargetaction",
      "poster",
      "preload",
      "pubdate",
      "radiogroup",
      "readonly",
      "rel",
      "required",
      "rev",
      "reversed",
      "role",
      "rows",
      "rowspan",
      "spellcheck",
      "scope",
      "selected",
      "shape",
      "size",
      "sizes",
      "span",
      "srclang",
      "start",
      "src",
      "srcset",
      "step",
      "style",
      "summary",
      "tabindex",
      "title",
      "translate",
      "type",
      "usemap",
      "valign",
      "value",
      "width",
      "wrap",
      "xmlns",
      "slot",
    ]),
    ae = O([
      "accent-height",
      "accumulate",
      "additive",
      "alignment-baseline",
      "amplitude",
      "ascent",
      "attributename",
      "attributetype",
      "azimuth",
      "basefrequency",
      "baseline-shift",
      "begin",
      "bias",
      "by",
      "class",
      "clip",
      "clippathunits",
      "clip-path",
      "clip-rule",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "cx",
      "cy",
      "d",
      "dx",
      "dy",
      "diffuseconstant",
      "direction",
      "display",
      "divisor",
      "dur",
      "edgemode",
      "elevation",
      "end",
      "exponent",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "filterunits",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyph-name",
      "glyphref",
      "gradientunits",
      "gradienttransform",
      "height",
      "href",
      "id",
      "image-rendering",
      "in",
      "in2",
      "intercept",
      "k",
      "k1",
      "k2",
      "k3",
      "k4",
      "kerning",
      "keypoints",
      "keysplines",
      "keytimes",
      "lang",
      "lengthadjust",
      "letter-spacing",
      "kernelmatrix",
      "kernelunitlength",
      "lighting-color",
      "local",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerheight",
      "markerunits",
      "markerwidth",
      "maskcontentunits",
      "maskunits",
      "max",
      "mask",
      "media",
      "method",
      "mode",
      "min",
      "name",
      "numoctaves",
      "offset",
      "operator",
      "opacity",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "paint-order",
      "path",
      "pathlength",
      "patterncontentunits",
      "patterntransform",
      "patternunits",
      "points",
      "preservealpha",
      "preserveaspectratio",
      "primitiveunits",
      "r",
      "rx",
      "ry",
      "radius",
      "refx",
      "refy",
      "repeatcount",
      "repeatdur",
      "restart",
      "result",
      "rotate",
      "scale",
      "seed",
      "shape-rendering",
      "slope",
      "specularconstant",
      "specularexponent",
      "spreadmethod",
      "startoffset",
      "stddeviation",
      "stitchtiles",
      "stop-color",
      "stop-opacity",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke",
      "stroke-width",
      "style",
      "surfacescale",
      "systemlanguage",
      "tabindex",
      "tablevalues",
      "targetx",
      "targety",
      "transform",
      "transform-origin",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "textlength",
      "type",
      "u1",
      "u2",
      "unicode",
      "values",
      "viewbox",
      "visibility",
      "version",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "width",
      "word-spacing",
      "wrap",
      "writing-mode",
      "xchannelselector",
      "ychannelselector",
      "x",
      "x1",
      "x2",
      "xmlns",
      "y",
      "y1",
      "y2",
      "z",
      "zoomandpan",
    ]),
    le = O([
      "accent",
      "accentunder",
      "align",
      "bevelled",
      "close",
      "columnsalign",
      "columnlines",
      "columnspan",
      "denomalign",
      "depth",
      "dir",
      "display",
      "displaystyle",
      "encoding",
      "fence",
      "frame",
      "height",
      "href",
      "id",
      "largeop",
      "length",
      "linethickness",
      "lspace",
      "lquote",
      "mathbackground",
      "mathcolor",
      "mathsize",
      "mathvariant",
      "maxsize",
      "minsize",
      "movablelimits",
      "notation",
      "numalign",
      "open",
      "rowalign",
      "rowlines",
      "rowspacing",
      "rowspan",
      "rspace",
      "rquote",
      "scriptlevel",
      "scriptminsize",
      "scriptsizemultiplier",
      "selection",
      "separator",
      "separators",
      "stretchy",
      "subscriptshift",
      "supscriptshift",
      "symmetric",
      "voffset",
      "width",
      "xmlns",
    ]),
    ce = O(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    ue = N(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    he = N(/<%[\w\W]*|[\w\W]*%>/gm),
    de = N(/\$\{[\w\W]*/gm),
    pe = N(/^data-[\-\w.\u00B7-\uFFFF]+$/),
    fe = N(/^aria-[\-\w]+$/),
    me = N(
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    ),
    _e = N(/^(?:\w+script|data):/i),
    ve = N(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    ge = N(/^html$/i),
    be = N(/^[a-z][.\w]*(-[.\w]+)+$/i);
  var ye = Object.freeze({
    __proto__: null,
    ARIA_ATTR: fe,
    ATTR_WHITESPACE: ve,
    CUSTOM_ELEMENT: be,
    DATA_ATTR: pe,
    DOCTYPE_NAME: ge,
    ERB_EXPR: he,
    IS_ALLOWED_URI: me,
    IS_SCRIPT_OR_DATA: _e,
    MUSTACHE_EXPR: ue,
    TMPLIT_EXPR: de,
  });
  const we = 1,
    Ee = 3,
    ke = 7,
    Se = 8,
    xe = 9,
    Te = function () {
      return "undefined" == typeof window ? null : window;
    };
  var Ce = (function e() {
      let t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te();
      const n = (t) => e(t);
      if (
        ((n.version = "3.2.6"),
        (n.removed = []),
        !t || !t.document || t.document.nodeType !== xe || !t.Element)
      )
        return (n.isSupported = !1), n;
      let { document: i } = t;
      const o = i,
        r = o.currentScript,
        {
          DocumentFragment: s,
          HTMLTemplateElement: a,
          Node: l,
          Element: c,
          NodeFilter: u,
          NamedNodeMap: h = t.NamedNodeMap || t.MozNamedAttrMap,
          HTMLFormElement: d,
          DOMParser: p,
          trustedTypes: f,
        } = t,
        m = c.prototype,
        _ = J(m, "cloneNode"),
        v = J(m, "remove"),
        g = J(m, "nextSibling"),
        b = J(m, "childNodes"),
        y = J(m, "parentNode");
      if ("function" == typeof a) {
        const e = i.createElement("template");
        e.content && e.content.ownerDocument && (i = e.content.ownerDocument);
      }
      let w,
        E = "";
      const {
          implementation: S,
          createNodeIterator: x,
          createDocumentFragment: T,
          getElementsByTagName: C,
        } = i,
        { importNode: N } = o;
      let z = {
        afterSanitizeAttributes: [],
        afterSanitizeElements: [],
        afterSanitizeShadowDOM: [],
        beforeSanitizeAttributes: [],
        beforeSanitizeElements: [],
        beforeSanitizeShadowDOM: [],
        uponSanitizeAttribute: [],
        uponSanitizeElement: [],
        uponSanitizeShadowNode: [],
      };
      n.isSupported =
        "function" == typeof k &&
        "function" == typeof y &&
        S &&
        void 0 !== S.createHTMLDocument;
      const {
        MUSTACHE_EXPR: A,
        ERB_EXPR: G,
        TMPLIT_EXPR: Y,
        DATA_ATTR: Z,
        ARIA_ATTR: ue,
        IS_SCRIPT_OR_DATA: he,
        ATTR_WHITESPACE: de,
        CUSTOM_ELEMENT: pe,
      } = ye;
      let { IS_ALLOWED_URI: fe } = ye,
        _e = null;
      const ve = K({}, [...Q, ...ee, ...te, ...ie, ...re]);
      let be = null;
      const Ce = K({}, [...se, ...ae, ...le, ...ce]);
      let Oe = Object.seal(
          L(null, {
            tagNameCheck: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: null,
            },
            attributeNameCheck: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: null,
            },
            allowCustomizedBuiltInElements: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: !1,
            },
          })
        ),
        Ne = null,
        Le = null,
        ze = !0,
        Ae = !0,
        Me = !1,
        Re = !0,
        Pe = !1,
        De = !0,
        He = !1,
        Ie = !1,
        je = !1,
        Ve = !1,
        $e = !1,
        Ue = !1,
        Be = !0,
        Fe = !1,
        qe = !0,
        We = !1,
        Ge = {},
        Ye = null;
      const Ke = K({}, [
        "annotation-xml",
        "audio",
        "colgroup",
        "desc",
        "foreignobject",
        "head",
        "iframe",
        "math",
        "mi",
        "mn",
        "mo",
        "ms",
        "mtext",
        "noembed",
        "noframes",
        "noscript",
        "plaintext",
        "script",
        "style",
        "svg",
        "template",
        "thead",
        "title",
        "video",
        "xmp",
      ]);
      let Ze = null;
      const Xe = K({}, ["audio", "video", "img", "source", "image", "track"]);
      let Je = null;
      const Qe = K({}, [
          "alt",
          "class",
          "for",
          "id",
          "label",
          "name",
          "pattern",
          "placeholder",
          "role",
          "summary",
          "title",
          "value",
          "style",
          "xmlns",
        ]),
        et = "http://www.w3.org/1998/Math/MathML",
        tt = "http://www.w3.org/2000/svg",
        nt = "http://www.w3.org/1999/xhtml";
      let it = nt,
        ot = !1,
        rt = null;
      const st = K({}, [et, tt, nt], j);
      let at = K({}, ["mi", "mo", "mn", "ms", "mtext"]),
        lt = K({}, ["annotation-xml"]);
      const ct = K({}, ["title", "style", "font", "a", "script"]);
      let ut = null;
      const ht = ["application/xhtml+xml", "text/html"];
      let dt = null,
        pt = null;
      const ft = i.createElement("form"),
        mt = function (e) {
          return e instanceof RegExp || e instanceof Function;
        },
        _t = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!pt || pt !== e) {
            if (
              ((e && "object" == typeof e) || (e = {}),
              (e = X(e)),
              (ut =
                -1 === ht.indexOf(e.PARSER_MEDIA_TYPE)
                  ? "text/html"
                  : e.PARSER_MEDIA_TYPE),
              (dt = "application/xhtml+xml" === ut ? j : I),
              (_e = F(e, "ALLOWED_TAGS") ? K({}, e.ALLOWED_TAGS, dt) : ve),
              (be = F(e, "ALLOWED_ATTR") ? K({}, e.ALLOWED_ATTR, dt) : Ce),
              (rt = F(e, "ALLOWED_NAMESPACES")
                ? K({}, e.ALLOWED_NAMESPACES, j)
                : st),
              (Je = F(e, "ADD_URI_SAFE_ATTR")
                ? K(X(Qe), e.ADD_URI_SAFE_ATTR, dt)
                : Qe),
              (Ze = F(e, "ADD_DATA_URI_TAGS")
                ? K(X(Xe), e.ADD_DATA_URI_TAGS, dt)
                : Xe),
              (Ye = F(e, "FORBID_CONTENTS")
                ? K({}, e.FORBID_CONTENTS, dt)
                : Ke),
              (Ne = F(e, "FORBID_TAGS") ? K({}, e.FORBID_TAGS, dt) : X({})),
              (Le = F(e, "FORBID_ATTR") ? K({}, e.FORBID_ATTR, dt) : X({})),
              (Ge = !!F(e, "USE_PROFILES") && e.USE_PROFILES),
              (ze = !1 !== e.ALLOW_ARIA_ATTR),
              (Ae = !1 !== e.ALLOW_DATA_ATTR),
              (Me = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
              (Re = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
              (Pe = e.SAFE_FOR_TEMPLATES || !1),
              (De = !1 !== e.SAFE_FOR_XML),
              (He = e.WHOLE_DOCUMENT || !1),
              (Ve = e.RETURN_DOM || !1),
              ($e = e.RETURN_DOM_FRAGMENT || !1),
              (Ue = e.RETURN_TRUSTED_TYPE || !1),
              (je = e.FORCE_BODY || !1),
              (Be = !1 !== e.SANITIZE_DOM),
              (Fe = e.SANITIZE_NAMED_PROPS || !1),
              (qe = !1 !== e.KEEP_CONTENT),
              (We = e.IN_PLACE || !1),
              (fe = e.ALLOWED_URI_REGEXP || me),
              (it = e.NAMESPACE || nt),
              (at = e.MATHML_TEXT_INTEGRATION_POINTS || at),
              (lt = e.HTML_INTEGRATION_POINTS || lt),
              (Oe = e.CUSTOM_ELEMENT_HANDLING || {}),
              e.CUSTOM_ELEMENT_HANDLING &&
                mt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                (Oe.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
              e.CUSTOM_ELEMENT_HANDLING &&
                mt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                (Oe.attributeNameCheck =
                  e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
              e.CUSTOM_ELEMENT_HANDLING &&
                "boolean" ==
                  typeof e.CUSTOM_ELEMENT_HANDLING
                    .allowCustomizedBuiltInElements &&
                (Oe.allowCustomizedBuiltInElements =
                  e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
              Pe && (Ae = !1),
              $e && (Ve = !0),
              Ge &&
                ((_e = K({}, re)),
                (be = []),
                !0 === Ge.html && (K(_e, Q), K(be, se)),
                !0 === Ge.svg && (K(_e, ee), K(be, ae), K(be, ce)),
                !0 === Ge.svgFilters && (K(_e, te), K(be, ae), K(be, ce)),
                !0 === Ge.mathMl && (K(_e, ie), K(be, le), K(be, ce))),
              e.ADD_TAGS && (_e === ve && (_e = X(_e)), K(_e, e.ADD_TAGS, dt)),
              e.ADD_ATTR && (be === Ce && (be = X(be)), K(be, e.ADD_ATTR, dt)),
              e.ADD_URI_SAFE_ATTR && K(Je, e.ADD_URI_SAFE_ATTR, dt),
              e.FORBID_CONTENTS &&
                (Ye === Ke && (Ye = X(Ye)), K(Ye, e.FORBID_CONTENTS, dt)),
              qe && (_e["#text"] = !0),
              He && K(_e, ["html", "head", "body"]),
              _e.table && (K(_e, ["tbody"]), delete Ne.tbody),
              e.TRUSTED_TYPES_POLICY)
            ) {
              if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML)
                throw W(
                  'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
                );
              if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
                throw W(
                  'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
                );
              (w = e.TRUSTED_TYPES_POLICY), (E = w.createHTML(""));
            } else
              void 0 === w &&
                (w = (function (e, t) {
                  if (
                    "object" != typeof e ||
                    "function" != typeof e.createPolicy
                  )
                    return null;
                  let n = null;
                  const i = "data-tt-policy-suffix";
                  t && t.hasAttribute(i) && (n = t.getAttribute(i));
                  const o = "dompurify" + (n ? "#" + n : "");
                  try {
                    return e.createPolicy(o, {
                      createHTML: (e) => e,
                      createScriptURL: (e) => e,
                    });
                  } catch (e) {
                    return (
                      console.warn(
                        "TrustedTypes policy " + o + " could not be created."
                      ),
                      null
                    );
                  }
                })(f, r)),
                null !== w && "string" == typeof E && (E = w.createHTML(""));
            O && O(e), (pt = e);
          }
        },
        vt = K({}, [...ee, ...te, ...ne]),
        gt = K({}, [...ie, ...oe]),
        bt = function (e) {
          D(n.removed, { element: e });
          try {
            y(e).removeChild(e);
          } catch (t) {
            v(e);
          }
        },
        yt = function (e, t) {
          try {
            D(n.removed, { attribute: t.getAttributeNode(e), from: t });
          } catch (e) {
            D(n.removed, { attribute: null, from: t });
          }
          if ((t.removeAttribute(e), "is" === e))
            if (Ve || $e)
              try {
                bt(t);
              } catch (e) {}
            else
              try {
                t.setAttribute(e, "");
              } catch (e) {}
        },
        wt = function (e) {
          let t = null,
            n = null;
          if (je) e = "<remove></remove>" + e;
          else {
            const t = V(e, /^[\r\n\t ]+/);
            n = t && t[0];
          }
          "application/xhtml+xml" === ut &&
            it === nt &&
            (e =
              '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
              e +
              "</body></html>");
          const o = w ? w.createHTML(e) : e;
          if (it === nt)
            try {
              t = new p().parseFromString(o, ut);
            } catch (e) {}
          if (!t || !t.documentElement) {
            t = S.createDocument(it, "template", null);
            try {
              t.documentElement.innerHTML = ot ? E : o;
            } catch (e) {}
          }
          const r = t.body || t.documentElement;
          return (
            e &&
              n &&
              r.insertBefore(i.createTextNode(n), r.childNodes[0] || null),
            it === nt
              ? C.call(t, He ? "html" : "body")[0]
              : He
              ? t.documentElement
              : r
          );
        },
        Et = function (e) {
          return x.call(
            e.ownerDocument || e,
            e,
            u.SHOW_ELEMENT |
              u.SHOW_COMMENT |
              u.SHOW_TEXT |
              u.SHOW_PROCESSING_INSTRUCTION |
              u.SHOW_CDATA_SECTION,
            null
          );
        },
        kt = function (e) {
          return (
            e instanceof d &&
            ("string" != typeof e.nodeName ||
              "string" != typeof e.textContent ||
              "function" != typeof e.removeChild ||
              !(e.attributes instanceof h) ||
              "function" != typeof e.removeAttribute ||
              "function" != typeof e.setAttribute ||
              "string" != typeof e.namespaceURI ||
              "function" != typeof e.insertBefore ||
              "function" != typeof e.hasChildNodes)
          );
        },
        St = function (e) {
          return "function" == typeof l && e instanceof l;
        };
      function xt(e, t, i) {
        M(e, (e) => {
          e.call(n, t, i, pt);
        });
      }
      const Tt = function (e) {
          let t = null;
          if ((xt(z.beforeSanitizeElements, e, null), kt(e))) return bt(e), !0;
          const i = dt(e.nodeName);
          if (
            (xt(z.uponSanitizeElement, e, { tagName: i, allowedTags: _e }),
            De &&
              e.hasChildNodes() &&
              !St(e.firstElementChild) &&
              q(/<[/\w!]/g, e.innerHTML) &&
              q(/<[/\w!]/g, e.textContent))
          )
            return bt(e), !0;
          if (e.nodeType === ke) return bt(e), !0;
          if (De && e.nodeType === Se && q(/<[/\w]/g, e.data)) return bt(e), !0;
          if (!_e[i] || Ne[i]) {
            if (!Ne[i] && Ot(i)) {
              if (Oe.tagNameCheck instanceof RegExp && q(Oe.tagNameCheck, i))
                return !1;
              if (Oe.tagNameCheck instanceof Function && Oe.tagNameCheck(i))
                return !1;
            }
            if (qe && !Ye[i]) {
              const t = y(e) || e.parentNode,
                n = b(e) || e.childNodes;
              if (n && t) {
                for (let i = n.length - 1; i >= 0; --i) {
                  const o = _(n[i], !0);
                  (o.__removalCount = (e.__removalCount || 0) + 1),
                    t.insertBefore(o, g(e));
                }
              }
            }
            return bt(e), !0;
          }
          return e instanceof c &&
            !(function (e) {
              let t = y(e);
              (t && t.tagName) ||
                (t = { namespaceURI: it, tagName: "template" });
              const n = I(e.tagName),
                i = I(t.tagName);
              return (
                !!rt[e.namespaceURI] &&
                (e.namespaceURI === tt
                  ? t.namespaceURI === nt
                    ? "svg" === n
                    : t.namespaceURI === et
                    ? "svg" === n && ("annotation-xml" === i || at[i])
                    : Boolean(vt[n])
                  : e.namespaceURI === et
                  ? t.namespaceURI === nt
                    ? "math" === n
                    : t.namespaceURI === tt
                    ? "math" === n && lt[i]
                    : Boolean(gt[n])
                  : e.namespaceURI === nt
                  ? !(t.namespaceURI === tt && !lt[i]) &&
                    !(t.namespaceURI === et && !at[i]) &&
                    !gt[n] &&
                    (ct[n] || !vt[n])
                  : !("application/xhtml+xml" !== ut || !rt[e.namespaceURI]))
              );
            })(e)
            ? (bt(e), !0)
            : ("noscript" !== i && "noembed" !== i && "noframes" !== i) ||
              !q(/<\/no(script|embed|frames)/i, e.innerHTML)
            ? (Pe &&
                e.nodeType === Ee &&
                ((t = e.textContent),
                M([A, G, Y], (e) => {
                  t = $(t, e, " ");
                }),
                e.textContent !== t &&
                  (D(n.removed, { element: e.cloneNode() }),
                  (e.textContent = t))),
              xt(z.afterSanitizeElements, e, null),
              !1)
            : (bt(e), !0);
        },
        Ct = function (e, t, n) {
          if (Be && ("id" === t || "name" === t) && (n in i || n in ft))
            return !1;
          if (Ae && !Le[t] && q(Z, t));
          else if (ze && q(ue, t));
          else if (!be[t] || Le[t]) {
            if (
              !(
                (Ot(e) &&
                  ((Oe.tagNameCheck instanceof RegExp &&
                    q(Oe.tagNameCheck, e)) ||
                    (Oe.tagNameCheck instanceof Function &&
                      Oe.tagNameCheck(e))) &&
                  ((Oe.attributeNameCheck instanceof RegExp &&
                    q(Oe.attributeNameCheck, t)) ||
                    (Oe.attributeNameCheck instanceof Function &&
                      Oe.attributeNameCheck(t)))) ||
                ("is" === t &&
                  Oe.allowCustomizedBuiltInElements &&
                  ((Oe.tagNameCheck instanceof RegExp &&
                    q(Oe.tagNameCheck, n)) ||
                    (Oe.tagNameCheck instanceof Function &&
                      Oe.tagNameCheck(n))))
              )
            )
              return !1;
          } else if (Je[t]);
          else if (q(fe, $(n, de, "")));
          else if (
            ("src" !== t && "xlink:href" !== t && "href" !== t) ||
            "script" === e ||
            0 !== U(n, "data:") ||
            !Ze[e]
          ) {
            if (Me && !q(he, $(n, de, "")));
            else if (n) return !1;
          } else;
          return !0;
        },
        Ot = function (e) {
          return "annotation-xml" !== e && V(e, pe);
        },
        Nt = function (e) {
          xt(z.beforeSanitizeAttributes, e, null);
          const { attributes: t } = e;
          if (!t || kt(e)) return;
          const i = {
            attrName: "",
            attrValue: "",
            keepAttr: !0,
            allowedAttributes: be,
            forceKeepAttr: void 0,
          };
          let o = t.length;
          for (; o--; ) {
            const r = t[o],
              { name: s, namespaceURI: a, value: l } = r,
              c = dt(s),
              u = l;
            let h = "value" === s ? u : B(u);
            if (
              ((i.attrName = c),
              (i.attrValue = h),
              (i.keepAttr = !0),
              (i.forceKeepAttr = void 0),
              xt(z.uponSanitizeAttribute, e, i),
              (h = i.attrValue),
              !Fe ||
                ("id" !== c && "name" !== c) ||
                (yt(s, e), (h = "user-content-" + h)),
              De && q(/((--!?|])>)|<\/(style|title)/i, h))
            ) {
              yt(s, e);
              continue;
            }
            if (i.forceKeepAttr) continue;
            if (!i.keepAttr) {
              yt(s, e);
              continue;
            }
            if (!Re && q(/\/>/i, h)) {
              yt(s, e);
              continue;
            }
            Pe &&
              M([A, G, Y], (e) => {
                h = $(h, e, " ");
              });
            const d = dt(e.nodeName);
            if (Ct(d, c, h)) {
              if (
                w &&
                "object" == typeof f &&
                "function" == typeof f.getAttributeType
              )
                if (a);
                else
                  switch (f.getAttributeType(d, c)) {
                    case "TrustedHTML":
                      h = w.createHTML(h);
                      break;
                    case "TrustedScriptURL":
                      h = w.createScriptURL(h);
                  }
              if (h !== u)
                try {
                  a ? e.setAttributeNS(a, s, h) : e.setAttribute(s, h),
                    kt(e) ? bt(e) : P(n.removed);
                } catch (t) {
                  yt(s, e);
                }
            } else yt(s, e);
          }
          xt(z.afterSanitizeAttributes, e, null);
        },
        Lt = function e(t) {
          let n = null;
          const i = Et(t);
          for (xt(z.beforeSanitizeShadowDOM, t, null); (n = i.nextNode()); )
            xt(z.uponSanitizeShadowNode, n, null),
              Tt(n),
              Nt(n),
              n.content instanceof s && e(n.content);
          xt(z.afterSanitizeShadowDOM, t, null);
        };
      return (
        (n.sanitize = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = null,
            r = null,
            a = null,
            c = null;
          if (
            ((ot = !e),
            ot && (e = "\x3c!--\x3e"),
            "string" != typeof e && !St(e))
          ) {
            if ("function" != typeof e.toString)
              throw W("toString is not a function");
            if ("string" != typeof (e = e.toString()))
              throw W("dirty is not a string, aborting");
          }
          if (!n.isSupported) return e;
          if (
            (Ie || _t(t),
            (n.removed = []),
            "string" == typeof e && (We = !1),
            We)
          ) {
            if (e.nodeName) {
              const t = dt(e.nodeName);
              if (!_e[t] || Ne[t])
                throw W(
                  "root node is forbidden and cannot be sanitized in-place"
                );
            }
          } else if (e instanceof l)
            (i = wt("\x3c!----\x3e")),
              (r = i.ownerDocument.importNode(e, !0)),
              (r.nodeType === we && "BODY" === r.nodeName) ||
              "HTML" === r.nodeName
                ? (i = r)
                : i.appendChild(r);
          else {
            if (!Ve && !Pe && !He && -1 === e.indexOf("<"))
              return w && Ue ? w.createHTML(e) : e;
            if (((i = wt(e)), !i)) return Ve ? null : Ue ? E : "";
          }
          i && je && bt(i.firstChild);
          const u = Et(We ? e : i);
          for (; (a = u.nextNode()); )
            Tt(a), Nt(a), a.content instanceof s && Lt(a.content);
          if (We) return e;
          if (Ve) {
            if ($e)
              for (c = T.call(i.ownerDocument); i.firstChild; )
                c.appendChild(i.firstChild);
            else c = i;
            return (
              (be.shadowroot || be.shadowrootmode) && (c = N.call(o, c, !0)), c
            );
          }
          let h = He ? i.outerHTML : i.innerHTML;
          return (
            He &&
              _e["!doctype"] &&
              i.ownerDocument &&
              i.ownerDocument.doctype &&
              i.ownerDocument.doctype.name &&
              q(ge, i.ownerDocument.doctype.name) &&
              (h = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + h),
            Pe &&
              M([A, G, Y], (e) => {
                h = $(h, e, " ");
              }),
            w && Ue ? w.createHTML(h) : h
          );
        }),
        (n.setConfig = function () {
          _t(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          ),
            (Ie = !0);
        }),
        (n.clearConfig = function () {
          (pt = null), (Ie = !1);
        }),
        (n.isValidAttribute = function (e, t, n) {
          pt || _t({});
          const i = dt(e),
            o = dt(t);
          return Ct(i, o, n);
        }),
        (n.addHook = function (e, t) {
          "function" == typeof t && D(z[e], t);
        }),
        (n.removeHook = function (e, t) {
          if (void 0 !== t) {
            const n = R(z[e], t);
            return -1 === n ? void 0 : H(z[e], n, 1)[0];
          }
          return P(z[e]);
        }),
        (n.removeHooks = function (e) {
          z[e] = [];
        }),
        (n.removeAllHooks = function () {
          z = {
            afterSanitizeAttributes: [],
            afterSanitizeElements: [],
            afterSanitizeShadowDOM: [],
            beforeSanitizeAttributes: [],
            beforeSanitizeElements: [],
            beforeSanitizeShadowDOM: [],
            uponSanitizeAttribute: [],
            uponSanitizeElement: [],
            uponSanitizeShadowNode: [],
          };
        }),
        n
      );
    })(),
    Oe = "".replace,
    Ne = /[&<>'"]/g,
    Le = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
  function ze(e) {
    return Le[e];
  }
  const Ae = document.documentElement.lang || "es-AR",
    Me = Ae.substr(0, 2),
    Re = {
      "es-AR": {
        bookmarks: {
          title: "Favoritos",
          all: "Ver todos los favoritos",
          delete: "Eliminar",
          auction: "Subasta",
          auction_time_left: "Finaliza en",
          auction_finished: "Finalizada",
          added_to_cart: "Añadido a tu carrito",
        },
        notifications: {
          title: "Notificaciones",
          zrp: "Por ahora, no hay nada aquí.",
          badget_notification_singular: "Notificacion 1 nueva",
          badget_notification_plural: "Notificaciones {0} nuevas",
          broadcast: "Notificaciones nuevas de tiendas que seguís",
          settings: "Configuración",
        },
        mp_notifications: {
          title: "Notificaciones",
          label: "¡No tienes notificaciones!",
          sublabel: "Usa tu cuenta y esto empezará a moverse.",
        },
      },
      es: {
        bookmarks: {
          title: "Favoritos",
          all: "Ver todos los favoritos",
          delete: "Eliminar",
          auction: "Subasta",
          auction_time_left: "Finaliza en",
          auction_finished: "Finalizada",
          added_to_cart: "Añadido a tu carrito",
        },
        notifications: {
          title: "Notificaciones",
          zrp: "Por ahora, no hay nada aquí.",
          badget_notification_singular: "Notificacion 1 nueva",
          badget_notification_plural: "Notificaciones {0} nuevas",
          broadcast: "Notificaciones nuevas de tiendas que sigues",
          settings: "Configuración",
        },
        mp_notifications: {
          title: "Notificaciones",
          label: "¡No tienes notificaciones!",
          sublabel: "Usa tu cuenta y esto empezará a moverse.",
        },
      },
      pt: {
        bookmarks: {
          title: "Favoritos",
          all: "Ver todos os favoritos",
          delete: "Excluir",
          auction: "Arremate",
          auction_time_left: "Finaliza em",
          auction_finished: "Finalizado",
          added_to_cart: "Adicionado ao seu carrinho",
        },
        notifications: {
          title: "Avisos",
          zrp: "Por enquanto, não há nada aqui.",
          badget_notification_singular: "Notificações 1 nova",
          badget_notification_plural: "Notificações {0} nuevas",
          settings: "Configuração",
          broadcast: "Notificações novas de lojas que você segue",
        },
        mp_notifications: {
          title: "Avisos",
          label: "Não há notificações!",
          sublabel: "Use sua conta para começar a ver movimentações por aqui.",
        },
      },
      en: {
        bookmarks: {
          title: "Favorites",
          all: "View all favorites",
          delete: "Delete",
          auction: "Auction",
          auction_time_left: "It ends in",
          auction_finished: "Finalized",
          added_to_cart: "Added to your cart",
        },
        notifications: {
          title: "Notifications",
          zrp: "There is nothing here for now.",
          badget_notification_singular: "You have 1 notification",
          badget_notification_plural: "You have {0} notifications",
          settings: "Settings",
          broadcast: "New notifications from stores you follow",
        },
        mp_notifications: {
          title: "Notifications",
          label: "No notifications!",
          sublabel: "Use your account and this will start buzzing.",
        },
      },
    };
  let Pe = "es";
  Re[Ae] ? (Pe = Ae) : Re[Me] && (Pe = Me);
  var De = (e, t) => Re[`${Pe}`][`${e}`][`${t}`];
  const He = {};
  var Ie = (e) => {
    return `\n  <a\n    href="${
      e.permalink
    }"\n    class="modeless-box-item"\n    data-type="${
      e.type
    }"\n    tabindex="-1"\n    data-id="${
      e.item_id
    }"\n  >\n      <img\n        src="${
      e.secure_thumbnail ? e.secure_thumbnail : e.thumbnail
    }"\n        alt="${
      ((t = e.title), Oe.call(t, Ne, ze))
    }"\n        class="modeless-box-img"\n      />\n      <div class="modeless-box-info">\n          ${He[
      e.type
    ].default(
      e
    )}\n      </div>\n  </a>\n  <button data-js="modeless-box-remove" class="modeless-box-remove" tabindex="-1">\n    ${De(
      "bookmarks",
      "delete"
    )}\n  </button>\n`;
    var t;
  };
  class je {
    constructor(e, t, n) {
      let i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = arguments.length > 4 ? arguments[4] : void 0;
      (this._model = i),
        (this.options = n),
        (this.inboxSidebarEnabled = o),
        (this.emitter = t),
        (this.type = e),
        (this.el = this._constructEl()),
        (this.template = Ie),
        this.emitter.emit("item:add", this._model);
    }
    _constructEl() {
      const e = document.createElement("li");
      return (
        (e.className = "modeless-box-item-wrapper"),
        g.on(e, "click", (e) => {
          "modeless-box-remove" === e.target.getAttribute("data-js") &&
            this.emitter.emit("item:remove", this);
        }),
        e
      );
    }
    set model(e) {
      (this._model = e),
        this.render(),
        this.emitter.emit("item:change", this._model);
    }
    get model() {
      return this._model;
    }
    render() {
      this._model.type = this.type;
      const e = this.template(this._model);
      e !== this.el.innerHTML &&
        (this.el.innerHTML = Ce.sanitize(e, { RETURN_TRUSTED_TYPE: !0 }));
    }
    show() {
      this.el.style.display = "block";
    }
    hide() {
      this.el.style.display = "none";
    }
  }
  const Ve = (e) =>
      `<div class="modeless-box-header">${De(e.type, "title")}${((e) =>
        e.settingsUrl
          ? `<a href="${
              e.settingsUrl
            }" class="modeless-box-header__settings" aria-label="${De(
              e.type,
              "settings"
            )}"><svg width="16" height="16"><path fill-opacity=".8" d="M10.506.5v1.57c.492.207.955.474 1.38.795l1.358-.784 2.505 4.338-1.337.772a6.553 6.553 0 01.008 1.622l1.329.768-2.505 4.338-1.308-.755a6.49 6.49 0 01-1.43.832V15.5h-5.01v-1.502a6.491 6.491 0 01-1.432-.833l-1.306.754L.254 9.581l1.326-.766a6.554 6.554 0 01.008-1.626L.254 6.42l2.504-4.338 1.356.783a6.44 6.44 0 011.383-.795V.5h5.009zm-1 1h-3.01v1.264l-.332.118a5.487 5.487 0 00-1.683.967l-.268.226-1.088-.628L1.62 6.053l1.072.619-.065.348a5.51 5.51 0 00-.01 1.971l.06.345-1.057.61 1.505 2.607 1.044-.603.27.23c.508.438 1.093.78 1.725 1.004l.333.119V14.5h3.009v-1.198l.332-.119a5.445 5.445 0 001.724-1.003l.27-.231 1.046.604 1.505-2.606-1.06-.612.06-.345a5.537 5.537 0 00-.01-1.968l-.065-.348 1.075-.62-1.505-2.607-1.09.63-.269-.227a5.445 5.445 0 00-1.681-.967l-.332-.118V1.5zM8 4.977a3.027 3.027 0 110 6.055 3.027 3.027 0 010-6.055zm0 1a2.026 2.026 0 10-.001 4.055A2.026 2.026 0 008 5.976z"/></svg></a>`
          : "")(e)}</div>`,
    $e = {
      bookmarks: "",
      notifications: "",
      cart: '\n  <ul class="modeless-box-list">\n  </ul>\n',
    };
  const Ue = "cart";
  class Be {
    constructor(e, t) {
      (this.emitter = e),
        (this.options = t),
        (this.list = this.options.list),
        (this.type = this.options.type),
        (this.listHeight = this.options.listHeight),
        (this.listWidth = this.options.listWidth),
        (this.container = this.options.container),
        (this.rail = this._constructRail()),
        (this.bar = this._constructBar()),
        (this.disabled = !0),
        (this.barPosition = 0),
        (this.listPosition = 0),
        (this.wheeling = null),
        (this.onwheel = this.onwheel.bind(this));
    }
    onwheel() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : window.event;
      this.disabled ||
        (e.preventDefault(), this.handleScroll(e.deltaY), this.show());
    }
    attachEvent() {
      g.on(this.container, "wheel", this.onwheel);
    }
    removeEvent() {
      g.off(this.container, "wheel", this.onwheel);
    }
    _constructBar() {
      const e = document.createElement("div");
      return (
        (e.className = "modeless-box-scroll-bar"),
        e.setAttribute("aria-disabled", !0),
        this.container.appendChild(e),
        e
      );
    }
    _constructRail() {
      const e = document.createElement("div");
      return (
        (e.className = "modeless-box-scroll-rail"),
        e.setAttribute("aria-disabled", !0),
        this.container.appendChild(e),
        e
      );
    }
    limit(e, t, n) {
      return e < t && (e = t), e > n && (e = n), e;
    }
    reset() {
      (this.barPosition = 0),
        (this.listPosition = 0),
        (this.listSize = 116),
        (this.containerSize = this.listSize),
        this.type !== Ue &&
          (this.container.style.height = `${this.containerSize}px`),
        this.list && (this.list.style.position = "static");
    }
    update(e, t) {
      var n;
      (this.disabled = !0),
        (this.listSize = 116),
        this.list
          ? (this.listSize = this.list.clientHeight)
          : t && (this.listSize = t.height);
      const i =
        null !== (n = null == t ? void 0 : t.maxHeight) && void 0 !== n
          ? n
          : 351;
      if (
        ((this.containerSize = this.listSize >= i ? i : this.listSize),
        this.type !== Ue &&
          ((this.container.style.maxHeight = `${i}px`),
          (this.container.style.height = `${this.containerSize}px`)),
        (this.disabled = this.containerSize >= this.listSize),
        this.rail.setAttribute("aria-disabled", this.disabled),
        this.bar.setAttribute("aria-disabled", this.disabled),
        this.disabled)
      )
        return void u.removeClass(this.bar, "bar-show");
      (this.barSize =
        (this.containerSize * this.containerSize) / this.listSize),
        this.list && (this.list.style.position = "absolute"),
        (this.containerWidth =
          t && t.width ? t.width : this.container.clientWidth),
        (this.container.style.width = `${this.containerWidth}px`),
        (this.container.style.height = `${this.containerSize}px`),
        (this.bar.style.height = `${this.barSize}px`);
      const o =
        (100 * (-this.listPosition - this.containerSize)) /
        (this.listSize - this.containerSize);
      (this.barPosition = (o * this.containerSize) / 100),
        this.updatePosition(e);
    }
    updatePosition(e) {
      (this.barPosition = this.limit(
        this.barPosition,
        0,
        this.containerSize - this.barSize
      )),
        (this.bar.style.top = `${this.barPosition}px`);
      const t = -this.listSize + this.containerSize;
      (this.listPosition = this.limit(this.listPosition, t, 0)),
        this.list && (this.list.style.top = `${this.listPosition}px`),
        (this.listPosition < t + 48 ||
          (e && this.listSize + 48 > this.containerSize)) &&
          this.emitter.emit("scroll:ending");
    }
    handleScroll(e) {
      (this.barPosition += e / (this.listSize / this.containerSize)),
        (this.listPosition -= e),
        this.updatePosition();
    }
    show(e) {
      clearTimeout(this.wheeling),
        u.addClass(this.bar, "bar-show"),
        (this.wheeling = setTimeout(() => {
          (this.wheeling = void 0), u.removeClass(this.bar, "bar-show");
        }, e || 200));
    }
  }
  var Fe,
    qe = { exports: {} },
    We = { exports: {} };
  function Ge() {
    return (
      Fe ||
        ((Fe = 1),
        (function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n =
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
                };
          function i(e) {
            for (var t = 0, n = e.length, i = []; t < n; t++) i.push(e[t]);
            return i;
          }
          (t.default = function (e, t, o) {
            var r,
              s = arguments,
              a = (function (e) {
                if (!e) return [];
                return "string" == typeof e
                  ? i(document.querySelectorAll(e))
                  : /^\[object (HTMLCollection|NodeList|Object)\]$/.test(
                      Object.prototype.toString.call(e)
                    ) &&
                    ("number" == typeof e.length ||
                      Object.prototype.hasOwnProperty.call(e, "length")) &&
                    e.length > 0 &&
                    e[0].nodeType > 0
                  ? i(e)
                  : [e];
              })(e),
              l = a.length;
            if ("string" == typeof t && 2 === s.length)
              return 0 === l
                ? ""
                : ((c = a[0]),
                  (u = t),
                  window.getComputedStyle
                    ? window.getComputedStyle(c, null).getPropertyValue(u)
                    : ((u = u.replace(/\-(\w)/g, function (e, t) {
                        return t.toUpperCase();
                      })),
                      c.currentStyle[u]));
            var c, u;
            3 === s.length
              ? (r = function (e) {
                  e.style[t] = o;
                })
              : "object" === (void 0 === t ? "undefined" : n(t)) &&
                (r = function (e) {
                  Object.keys(t).forEach(function (n) {
                    e.style[n] = t[n];
                  });
                });
            for (var h = 0; h < l; h++) r(a[h]);
          }),
            (e.exports = t.default);
        })(We, We.exports)),
      We.exports
    );
  }
  var Ye,
    Ke,
    Ze = { exports: {} };
  var Xe =
      (Ke ||
        ((Ke = 1),
        (function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = function (e) {
              var t = e.getBoundingClientRect(),
                i = (function (e) {
                  for (var t = e.offsetParent, i = void 0; void 0 === i; ) {
                    if (null === t) {
                      i = null;
                      break;
                    }
                    "fixed" !== (0, n.default)(t, "position")
                      ? (t = t.offsetParent)
                      : (i = t);
                  }
                  return i;
                })(e),
                r = (0, o.default)(),
                s = { left: t.left, top: t.top };
              return (
                "fixed" !== (0, n.default)(e, "position") &&
                  null === i &&
                  ((s.left += r.left), (s.top += r.top)),
                s
              );
            });
          var n = r(Ge()),
            i = (function () {
              return (
                Ye ||
                  ((Ye = 1),
                  (e = Ze),
                  (t = Ze.exports),
                  Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = function () {
                    return {
                      left:
                        window.pageXOffset ||
                        document.documentElement.scrollLeft ||
                        0,
                      top:
                        window.pageYOffset ||
                        document.documentElement.scrollTop ||
                        0,
                    };
                  }),
                  (e.exports = t.default)),
                Ze.exports
              );
              var e, t;
            })(),
            o = r(i);
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          e.exports = t.default;
        })(qe, qe.exports)),
      qe.exports),
    Je = i(Xe);
  function Qe(e) {
    const t = e.getBoundingClientRect();
    return {
      top: t.top,
      left: t.left,
      right: t.right,
      width: t.width || t.right - t.left,
      height: t.height || t.bottom - t.top,
    };
  }
  function et() {
    return (
      (et = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) ({}.hasOwnProperty.call(n, i) && (e[i] = n[i]));
            }
            return e;
          }),
      et.apply(null, arguments)
    );
  }
  var tt,
    nt,
    it,
    ot,
    rt,
    st,
    at,
    lt,
    ct,
    ut,
    ht,
    dt,
    pt = {},
    ft = [],
    mt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    _t = Array.isArray;
  function vt(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function gt(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function bt(e, t, n) {
    var i,
      o,
      r,
      s = {};
    for (r in t)
      "key" == r ? (i = t[r]) : "ref" == r ? (o = t[r]) : (s[r] = t[r]);
    if (
      (arguments.length > 2 &&
        (s.children = arguments.length > 3 ? tt.call(arguments, 2) : n),
      "function" == typeof e && null != e.defaultProps)
    )
      for (r in e.defaultProps) void 0 === s[r] && (s[r] = e.defaultProps[r]);
    return yt(e, s, i, o, null);
  }
  function yt(e, t, n, i, o) {
    var r = {
      type: e,
      props: t,
      key: n,
      ref: i,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: null == o ? ++it : o,
      __i: -1,
      __u: 0,
    };
    return null == o && null != nt.vnode && nt.vnode(r), r;
  }
  function wt() {
    return { current: null };
  }
  function Et(e) {
    return e.children;
  }
  function kt(e, t) {
    (this.props = e), (this.context = t);
  }
  function St(e, t) {
    if (null == t) return e.__ ? St(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
      if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? St(e) : null;
  }
  function xt(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return xt(e);
    }
  }
  function Tt(e) {
    ((!e.__d && (e.__d = !0) && ot.push(e) && !Ct.__r++) ||
      rt != nt.debounceRendering) &&
      ((rt = nt.debounceRendering) || st)(Ct);
  }
  function Ct() {
    for (var e, t, n, i, o, r, s, a = 1; ot.length; )
      ot.length > a && ot.sort(at),
        (e = ot.shift()),
        (a = ot.length),
        e.__d &&
          ((n = void 0),
          (i = void 0),
          (o = (i = (t = e).__v).__e),
          (r = []),
          (s = []),
          t.__P &&
            (((n = vt({}, i)).__v = i.__v + 1),
            nt.vnode && nt.vnode(n),
            Pt(
              t.__P,
              n,
              i,
              t.__n,
              t.__P.namespaceURI,
              32 & i.__u ? [o] : null,
              r,
              null == o ? St(i) : o,
              !!(32 & i.__u),
              s
            ),
            (n.__v = i.__v),
            (n.__.__k[n.__i] = n),
            Ht(r, n, s),
            (i.__e = i.__ = null),
            n.__e != o && xt(n)));
    Ct.__r = 0;
  }
  function Ot(e, t, n, i, o, r, s, a, l, c, u) {
    var h,
      d,
      p,
      f,
      m,
      _,
      v,
      g = (i && i.__k) || ft,
      b = t.length;
    for (
      l = (function (e, t, n, i, o) {
        var r,
          s,
          a,
          l,
          c,
          u = n.length,
          h = u,
          d = 0;
        for (e.__k = new Array(o), r = 0; r < o; r++)
          null != (s = t[r]) && "boolean" != typeof s && "function" != typeof s
            ? ((l = r + d),
              ((s = e.__k[r] =
                "string" == typeof s ||
                "number" == typeof s ||
                "bigint" == typeof s ||
                s.constructor == String
                  ? yt(null, s, null, null, null)
                  : _t(s)
                  ? yt(Et, { children: s }, null, null, null)
                  : null == s.constructor && s.__b > 0
                  ? yt(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v)
                  : s).__ = e),
              (s.__b = e.__b + 1),
              (a = null),
              -1 != (c = s.__i = zt(s, n, l, h)) &&
                (h--, (a = n[c]) && (a.__u |= 2)),
              null == a || null == a.__v
                ? (-1 == c && (o > u ? d-- : o < u && d++),
                  "function" != typeof s.type && (s.__u |= 4))
                : c != l &&
                  (c == l - 1
                    ? d--
                    : c == l + 1
                    ? d++
                    : (c > l ? d-- : d++, (s.__u |= 4))))
            : (e.__k[r] = null);
        if (h)
          for (r = 0; r < u; r++)
            null != (a = n[r]) &&
              !(2 & a.__u) &&
              (a.__e == i && (i = St(a)), $t(a, a));
        return i;
      })(n, t, g, l, b),
        h = 0;
      h < b;
      h++
    )
      null != (p = n.__k[h]) &&
        ((d = -1 == p.__i ? pt : g[p.__i] || pt),
        (p.__i = h),
        (_ = Pt(e, p, d, o, r, s, a, l, c, u)),
        (f = p.__e),
        p.ref &&
          d.ref != p.ref &&
          (d.ref && Vt(d.ref, null, p), u.push(p.ref, p.__c || f, p)),
        null == m && null != f && (m = f),
        (v = !!(4 & p.__u)) || d.__k === p.__k
          ? (l = Nt(p, l, e, v))
          : "function" == typeof p.type && void 0 !== _
          ? (l = _)
          : f && (l = f.nextSibling),
        (p.__u &= -7));
    return (n.__e = m), l;
  }
  function Nt(e, t, n, i) {
    var o, r;
    if ("function" == typeof e.type) {
      for (o = e.__k, r = 0; o && r < o.length; r++)
        o[r] && ((o[r].__ = e), (t = Nt(o[r], t, n, i)));
      return t;
    }
    e.__e != t &&
      (i &&
        (t && e.type && !t.parentNode && (t = St(e)),
        n.insertBefore(e.__e, t || null)),
      (t = e.__e));
    do {
      t = t && t.nextSibling;
    } while (null != t && 8 == t.nodeType);
    return t;
  }
  function Lt(e, t) {
    return (
      (t = t || []),
      null == e ||
        "boolean" == typeof e ||
        (_t(e)
          ? e.some(function (e) {
              Lt(e, t);
            })
          : t.push(e)),
      t
    );
  }
  function zt(e, t, n, i) {
    var o,
      r,
      s,
      a = e.key,
      l = e.type,
      c = t[n],
      u = null != c && !(2 & c.__u);
    if ((null === c && null == e.key) || (u && a == c.key && l == c.type))
      return n;
    if (i > (u ? 1 : 0))
      for (o = n - 1, r = n + 1; o >= 0 || r < t.length; )
        if (
          null != (c = t[(s = o >= 0 ? o-- : r++)]) &&
          !(2 & c.__u) &&
          a == c.key &&
          l == c.type
        )
          return s;
    return -1;
  }
  function At(e, t, n) {
    "-" == t[0]
      ? e.setProperty(t, null == n ? "" : n)
      : (e[t] =
          null == n ? "" : "number" != typeof n || mt.test(t) ? n : n + "px");
  }
  function Mt(e, t, n, i, o) {
    var r, s;
    e: if ("style" == t)
      if ("string" == typeof n) e.style.cssText = n;
      else {
        if (("string" == typeof i && (e.style.cssText = i = ""), i))
          for (t in i) (n && t in n) || At(e.style, t, "");
        if (n) for (t in n) (i && n[t] == i[t]) || At(e.style, t, n[t]);
      }
    else if ("o" == t[0] && "n" == t[1])
      (r = t != (t = t.replace(lt, "$1"))),
        (s = t.toLowerCase()),
        (t =
          s in e || "onFocusOut" == t || "onFocusIn" == t
            ? s.slice(2)
            : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + r] = n),
        n
          ? i
            ? (n.u = i.u)
            : ((n.u = ct), e.addEventListener(t, r ? ht : ut, r))
          : e.removeEventListener(t, r ? ht : ut, r);
    else {
      if ("http://www.w3.org/2000/svg" == o)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        "width" != t &&
        "height" != t &&
        "href" != t &&
        "list" != t &&
        "form" != t &&
        "tabIndex" != t &&
        "download" != t &&
        "rowSpan" != t &&
        "colSpan" != t &&
        "role" != t &&
        "popover" != t &&
        t in e
      )
        try {
          e[t] = null == n ? "" : n;
          break e;
        } catch (e) {}
      "function" == typeof n ||
        (null == n || (!1 === n && "-" != t[4])
          ? e.removeAttribute(t)
          : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
    }
  }
  function Rt(e) {
    return function (t) {
      if (this.l) {
        var n = this.l[t.type + e];
        if (null == t.t) t.t = ct++;
        else if (t.t < n.u) return;
        return n(nt.event ? nt.event(t) : t);
      }
    };
  }
  function Pt(e, t, n, i, o, r, s, a, l, c) {
    var u,
      h,
      d,
      p,
      f,
      m,
      _,
      v,
      g,
      b,
      y,
      w,
      E,
      k,
      S,
      x,
      T,
      C = t.type;
    if (null != t.constructor) return null;
    128 & n.__u && ((l = !!(32 & n.__u)), (r = [(a = t.__e = n.__e)])),
      (u = nt.__b) && u(t);
    e: if ("function" == typeof C)
      try {
        if (
          ((v = t.props),
          (g = "prototype" in C && C.prototype.render),
          (b = (u = C.contextType) && i[u.__c]),
          (y = u ? (b ? b.props.value : u.__) : i),
          n.__c
            ? (_ = (h = t.__c = n.__c).__ = h.__E)
            : (g
                ? (t.__c = h = new C(v, y))
                : ((t.__c = h = new kt(v, y)),
                  (h.constructor = C),
                  (h.render = Ut)),
              b && b.sub(h),
              (h.props = v),
              h.state || (h.state = {}),
              (h.context = y),
              (h.__n = i),
              (d = h.__d = !0),
              (h.__h = []),
              (h._sb = [])),
          g && null == h.__s && (h.__s = h.state),
          g &&
            null != C.getDerivedStateFromProps &&
            (h.__s == h.state && (h.__s = vt({}, h.__s)),
            vt(h.__s, C.getDerivedStateFromProps(v, h.__s))),
          (p = h.props),
          (f = h.state),
          (h.__v = t),
          d)
        )
          g &&
            null == C.getDerivedStateFromProps &&
            null != h.componentWillMount &&
            h.componentWillMount(),
            g && null != h.componentDidMount && h.__h.push(h.componentDidMount);
        else {
          if (
            (g &&
              null == C.getDerivedStateFromProps &&
              v !== p &&
              null != h.componentWillReceiveProps &&
              h.componentWillReceiveProps(v, y),
            (!h.__e &&
              null != h.shouldComponentUpdate &&
              !1 === h.shouldComponentUpdate(v, h.__s, y)) ||
              t.__v == n.__v)
          ) {
            for (
              t.__v != n.__v &&
                ((h.props = v), (h.state = h.__s), (h.__d = !1)),
                t.__e = n.__e,
                t.__k = n.__k,
                t.__k.some(function (e) {
                  e && (e.__ = t);
                }),
                w = 0;
              w < h._sb.length;
              w++
            )
              h.__h.push(h._sb[w]);
            (h._sb = []), h.__h.length && s.push(h);
            break e;
          }
          null != h.componentWillUpdate && h.componentWillUpdate(v, h.__s, y),
            g &&
              null != h.componentDidUpdate &&
              h.__h.push(function () {
                h.componentDidUpdate(p, f, m);
              });
        }
        if (
          ((h.context = y),
          (h.props = v),
          (h.__P = e),
          (h.__e = !1),
          (E = nt.__r),
          (k = 0),
          g)
        ) {
          for (
            h.state = h.__s,
              h.__d = !1,
              E && E(t),
              u = h.render(h.props, h.state, h.context),
              S = 0;
            S < h._sb.length;
            S++
          )
            h.__h.push(h._sb[S]);
          h._sb = [];
        } else
          do {
            (h.__d = !1),
              E && E(t),
              (u = h.render(h.props, h.state, h.context)),
              (h.state = h.__s);
          } while (h.__d && ++k < 25);
        (h.state = h.__s),
          null != h.getChildContext && (i = vt(vt({}, i), h.getChildContext())),
          g &&
            !d &&
            null != h.getSnapshotBeforeUpdate &&
            (m = h.getSnapshotBeforeUpdate(p, f)),
          (x = u),
          null != u &&
            u.type === Et &&
            null == u.key &&
            (x = It(u.props.children)),
          (a = Ot(e, _t(x) ? x : [x], t, n, i, o, r, s, a, l, c)),
          (h.base = t.__e),
          (t.__u &= -161),
          h.__h.length && s.push(h),
          _ && (h.__E = h.__ = null);
      } catch (e) {
        if (((t.__v = null), l || null != r))
          if (e.then) {
            for (
              t.__u |= l ? 160 : 128;
              a && 8 == a.nodeType && a.nextSibling;

            )
              a = a.nextSibling;
            (r[r.indexOf(a)] = null), (t.__e = a);
          } else {
            for (T = r.length; T--; ) gt(r[T]);
            Dt(t);
          }
        else (t.__e = n.__e), (t.__k = n.__k), e.then || Dt(t);
        nt.__e(e, t, n);
      }
    else
      null == r && t.__v == n.__v
        ? ((t.__k = n.__k), (t.__e = n.__e))
        : (a = t.__e = jt(n.__e, t, n, i, o, r, s, l, c));
    return (u = nt.diffed) && u(t), 128 & t.__u ? void 0 : a;
  }
  function Dt(e) {
    e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(Dt);
  }
  function Ht(e, t, n) {
    for (var i = 0; i < n.length; i++) Vt(n[i], n[++i], n[++i]);
    nt.__c && nt.__c(t, e),
      e.some(function (t) {
        try {
          (e = t.__h),
            (t.__h = []),
            e.some(function (e) {
              e.call(t);
            });
        } catch (e) {
          nt.__e(e, t.__v);
        }
      });
  }
  function It(e) {
    return "object" != typeof e || null == e || (e.__b && e.__b > 0)
      ? e
      : _t(e)
      ? e.map(It)
      : vt({}, e);
  }
  function jt(e, t, n, i, o, r, s, a, l) {
    var c,
      u,
      h,
      d,
      p,
      f,
      m,
      _ = n.props,
      v = t.props,
      g = t.type;
    if (
      ("svg" == g
        ? (o = "http://www.w3.org/2000/svg")
        : "math" == g
        ? (o = "http://www.w3.org/1998/Math/MathML")
        : o || (o = "http://www.w3.org/1999/xhtml"),
      null != r)
    )
      for (c = 0; c < r.length; c++)
        if (
          (p = r[c]) &&
          "setAttribute" in p == !!g &&
          (g ? p.localName == g : 3 == p.nodeType)
        ) {
          (e = p), (r[c] = null);
          break;
        }
    if (null == e) {
      if (null == g) return document.createTextNode(v);
      (e = document.createElementNS(o, g, v.is && v)),
        a && (nt.__m && nt.__m(t, r), (a = !1)),
        (r = null);
    }
    if (null == g) _ === v || (a && e.data == v) || (e.data = v);
    else {
      if (
        ((r = r && tt.call(e.childNodes)), (_ = n.props || pt), !a && null != r)
      )
        for (_ = {}, c = 0; c < e.attributes.length; c++)
          _[(p = e.attributes[c]).name] = p.value;
      for (c in _)
        if (((p = _[c]), "children" == c));
        else if ("dangerouslySetInnerHTML" == c) h = p;
        else if (!(c in v)) {
          if (
            ("value" == c && "defaultValue" in v) ||
            ("checked" == c && "defaultChecked" in v)
          )
            continue;
          Mt(e, c, null, p, o);
        }
      for (c in v)
        (p = v[c]),
          "children" == c
            ? (d = p)
            : "dangerouslySetInnerHTML" == c
            ? (u = p)
            : "value" == c
            ? (f = p)
            : "checked" == c
            ? (m = p)
            : (a && "function" != typeof p) ||
              _[c] === p ||
              Mt(e, c, p, _[c], o);
      if (u)
        a ||
          (h && (u.__html == h.__html || u.__html == e.innerHTML)) ||
          (e.innerHTML = u.__html),
          (t.__k = []);
      else if (
        (h && (e.innerHTML = ""),
        Ot(
          "template" == t.type ? e.content : e,
          _t(d) ? d : [d],
          t,
          n,
          i,
          "foreignObject" == g ? "http://www.w3.org/1999/xhtml" : o,
          r,
          s,
          r ? r[0] : n.__k && St(n, 0),
          a,
          l
        ),
        null != r)
      )
        for (c = r.length; c--; ) gt(r[c]);
      a ||
        ((c = "value"),
        "progress" == g && null == f
          ? e.removeAttribute("value")
          : null != f &&
            (f !== e[c] ||
              ("progress" == g && !f) ||
              ("option" == g && f != _[c])) &&
            Mt(e, c, f, _[c], o),
        (c = "checked"),
        null != m && m != e[c] && Mt(e, c, m, _[c], o));
    }
    return e;
  }
  function Vt(e, t, n) {
    try {
      if ("function" == typeof e) {
        var i = "function" == typeof e.__u;
        i && e.__u(), (i && null == t) || (e.__u = e(t));
      } else e.current = t;
    } catch (e) {
      nt.__e(e, n);
    }
  }
  function $t(e, t, n) {
    var i, o;
    if (
      (nt.unmount && nt.unmount(e),
      (i = e.ref) && ((i.current && i.current != e.__e) || Vt(i, null, t)),
      null != (i = e.__c))
    ) {
      if (i.componentWillUnmount)
        try {
          i.componentWillUnmount();
        } catch (e) {
          nt.__e(e, t);
        }
      i.base = i.__P = null;
    }
    if ((i = e.__k))
      for (o = 0; o < i.length; o++)
        i[o] && $t(i[o], t, n || "function" != typeof e.type);
    n || gt(e.__e), (e.__c = e.__ = e.__e = void 0);
  }
  function Ut(e, t, n) {
    return this.constructor(e, n);
  }
  function Bt(e, t, n) {
    var i, o, r, s;
    t == document && (t = document.documentElement),
      nt.__ && nt.__(e, t),
      (o = (i = "function" == typeof n) ? null : (n && n.__k) || t.__k),
      (r = []),
      (s = []),
      Pt(
        t,
        (e = ((!i && n) || t).__k = bt(Et, null, [e])),
        o || pt,
        pt,
        t.namespaceURI,
        !i && n ? [n] : o ? null : t.firstChild ? tt.call(t.childNodes) : null,
        r,
        !i && n ? n : o ? o.__e : t.firstChild,
        i,
        s
      ),
      Ht(r, e, s);
  }
  function Ft(e, t) {
    Bt(e, t, Ft);
  }
  function qt(e, t, n) {
    var i,
      o,
      r,
      s,
      a = vt({}, e.props);
    for (r in (e.type && e.type.defaultProps && (s = e.type.defaultProps), t))
      "key" == r
        ? (i = t[r])
        : "ref" == r
        ? (o = t[r])
        : (a[r] = void 0 === t[r] && null != s ? s[r] : t[r]);
    return (
      arguments.length > 2 &&
        (a.children = arguments.length > 3 ? tt.call(arguments, 2) : n),
      yt(e.type, a, i || e.key, o || e.ref, null)
    );
  }
  function Wt(e) {
    function t(e) {
      var n, i;
      return (
        this.getChildContext ||
          ((n = new Set()),
          ((i = {})[t.__c] = this),
          (this.getChildContext = function () {
            return i;
          }),
          (this.componentWillUnmount = function () {
            n = null;
          }),
          (this.shouldComponentUpdate = function (e) {
            this.props.value != e.value &&
              n.forEach(function (e) {
                (e.__e = !0), Tt(e);
              });
          }),
          (this.sub = function (e) {
            n.add(e);
            var t = e.componentWillUnmount;
            e.componentWillUnmount = function () {
              n && n.delete(e), t && t.call(e);
            };
          })),
        e.children
      );
    }
    return (
      (t.__c = "__cC" + dt++),
      (t.__ = e),
      (t.Provider =
        t.__l =
        (t.Consumer = function (e, t) {
          return e.children(t);
        }).contextType =
          t),
      t
    );
  }
  (tt = ft.slice),
    (nt = {
      __e: function (e, t, n, i) {
        for (var o, r, s; (t = t.__); )
          if ((o = t.__c) && !o.__)
            try {
              if (
                ((r = o.constructor) &&
                  null != r.getDerivedStateFromError &&
                  (o.setState(r.getDerivedStateFromError(e)), (s = o.__d)),
                null != o.componentDidCatch &&
                  (o.componentDidCatch(e, i || {}), (s = o.__d)),
                s)
              )
                return (o.__E = o);
            } catch (t) {
              e = t;
            }
        throw e;
      },
    }),
    (it = 0),
    (kt.prototype.setState = function (e, t) {
      var n;
      (n =
        null != this.__s && this.__s != this.state
          ? this.__s
          : (this.__s = vt({}, this.state))),
        "function" == typeof e && (e = e(vt({}, n), this.props)),
        e && vt(n, e),
        null != e && this.__v && (t && this._sb.push(t), Tt(this));
    }),
    (kt.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), Tt(this));
    }),
    (kt.prototype.render = Et),
    (ot = []),
    (st =
      "function" == typeof Promise
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (at = function (e, t) {
      return e.__v.__b - t.__v.__b;
    }),
    (Ct.__r = 0),
    (lt = /(PointerCapture)$|Capture$/i),
    (ct = 0),
    (ut = Rt(!1)),
    (ht = Rt(!0)),
    (dt = 0);
  var Gt,
    Yt,
    Kt,
    Zt,
    Xt = 0,
    Jt = [],
    Qt = nt,
    en = Qt.__b,
    tn = Qt.__r,
    nn = Qt.diffed,
    on = Qt.__c,
    rn = Qt.unmount,
    sn = Qt.__;
  function an(e, t) {
    Qt.__h && Qt.__h(Yt, e, Xt || t), (Xt = 0);
    var n = Yt.__H || (Yt.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({}), n.__[e];
  }
  function ln(e) {
    return (Xt = 1), cn(xn, e);
  }
  function cn(e, t, n) {
    var i = an(Gt++, 2);
    if (
      ((i.t = e),
      !i.__c &&
        ((i.__ = [
          n ? n(t) : xn(void 0, t),
          function (e) {
            var t = i.__N ? i.__N[0] : i.__[0],
              n = i.t(t, e);
            t !== n && ((i.__N = [n, i.__[1]]), i.__c.setState({}));
          },
        ]),
        (i.__c = Yt),
        !Yt.__f))
    ) {
      var o = function (e, t, n) {
        if (!i.__c.__H) return !0;
        var o = i.__c.__H.__.filter(function (e) {
          return !!e.__c;
        });
        if (
          o.every(function (e) {
            return !e.__N;
          })
        )
          return !r || r.call(this, e, t, n);
        var s = i.__c.props !== e;
        return (
          o.forEach(function (e) {
            if (e.__N) {
              var t = e.__[0];
              (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (s = !0);
            }
          }),
          (r && r.call(this, e, t, n)) || s
        );
      };
      Yt.__f = !0;
      var r = Yt.shouldComponentUpdate,
        s = Yt.componentWillUpdate;
      (Yt.componentWillUpdate = function (e, t, n) {
        if (this.__e) {
          var i = r;
          (r = void 0), o(e, t, n), (r = i);
        }
        s && s.call(this, e, t, n);
      }),
        (Yt.shouldComponentUpdate = o);
    }
    return i.__N || i.__;
  }
  function un(e, t) {
    var n = an(Gt++, 3);
    !Qt.__s && Sn(n.__H, t) && ((n.__ = e), (n.u = t), Yt.__H.__h.push(n));
  }
  function hn(e, t) {
    var n = an(Gt++, 4);
    !Qt.__s && Sn(n.__H, t) && ((n.__ = e), (n.u = t), Yt.__h.push(n));
  }
  function dn(e) {
    return (
      (Xt = 5),
      fn(function () {
        return { current: e };
      }, [])
    );
  }
  function pn(e, t, n) {
    (Xt = 6),
      hn(
        function () {
          if ("function" == typeof e) {
            var n = e(t());
            return function () {
              e(null), n && "function" == typeof n && n();
            };
          }
          if (e)
            return (
              (e.current = t()),
              function () {
                return (e.current = null);
              }
            );
        },
        null == n ? n : n.concat(e)
      );
  }
  function fn(e, t) {
    var n = an(Gt++, 7);
    return Sn(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
  }
  function mn(e, t) {
    return (
      (Xt = 8),
      fn(function () {
        return e;
      }, t)
    );
  }
  function _n(e) {
    var t = Yt.context[e.__c],
      n = an(Gt++, 9);
    return (
      (n.c = e),
      t ? (null == n.__ && ((n.__ = !0), t.sub(Yt)), t.props.value) : e.__
    );
  }
  function vn(e, t) {
    Qt.useDebugValue && Qt.useDebugValue(t ? t(e) : e);
  }
  function gn() {
    var e = an(Gt++, 11);
    if (!e.__) {
      for (var t = Yt.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
      var n = t.__m || (t.__m = [0, 0]);
      e.__ = "P" + n[0] + "-" + n[1]++;
    }
    return e.__;
  }
  function bn() {
    for (var e; (e = Jt.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(En), e.__H.__h.forEach(kn), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), Qt.__e(t, e.__v);
        }
  }
  (Qt.__b = function (e) {
    (Yt = null), en && en(e);
  }),
    (Qt.__ = function (e, t) {
      e && t.__k && t.__k.__m && (e.__m = t.__k.__m), sn && sn(e, t);
    }),
    (Qt.__r = function (e) {
      tn && tn(e), (Gt = 0);
      var t = (Yt = e.__c).__H;
      t &&
        (Kt === Yt
          ? ((t.__h = []),
            (Yt.__h = []),
            t.__.forEach(function (e) {
              e.__N && (e.__ = e.__N), (e.u = e.__N = void 0);
            }))
          : (t.__h.forEach(En), t.__h.forEach(kn), (t.__h = []), (Gt = 0))),
        (Kt = Yt);
    }),
    (Qt.diffed = function (e) {
      nn && nn(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          ((1 !== Jt.push(t) && Zt === Qt.requestAnimationFrame) ||
            ((Zt = Qt.requestAnimationFrame) || wn)(bn)),
        t.__H.__.forEach(function (e) {
          e.u && (e.__H = e.u), (e.u = void 0);
        })),
        (Kt = Yt = null);
    }),
    (Qt.__c = function (e, t) {
      t.some(function (e) {
        try {
          e.__h.forEach(En),
            (e.__h = e.__h.filter(function (e) {
              return !e.__ || kn(e);
            }));
        } catch (n) {
          t.some(function (e) {
            e.__h && (e.__h = []);
          }),
            (t = []),
            Qt.__e(n, e.__v);
        }
      }),
        on && on(e, t);
    }),
    (Qt.unmount = function (e) {
      rn && rn(e);
      var t,
        n = e.__c;
      n &&
        n.__H &&
        (n.__H.__.forEach(function (e) {
          try {
            En(e);
          } catch (e) {
            t = e;
          }
        }),
        (n.__H = void 0),
        t && Qt.__e(t, n.__v));
    });
  var yn = "function" == typeof requestAnimationFrame;
  function wn(e) {
    var t,
      n = function () {
        clearTimeout(i), yn && cancelAnimationFrame(t), setTimeout(e);
      },
      i = setTimeout(n, 35);
    yn && (t = requestAnimationFrame(n));
  }
  function En(e) {
    var t = Yt,
      n = e.__c;
    "function" == typeof n && ((e.__c = void 0), n()), (Yt = t);
  }
  function kn(e) {
    var t = Yt;
    (e.__c = e.__()), (Yt = t);
  }
  function Sn(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (t, n) {
        return t !== e[n];
      })
    );
  }
  function xn(e, t) {
    return "function" == typeof t ? t(e) : t;
  }
  function Tn(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function Cn(e, t) {
    for (var n in e) if ("__source" !== n && !(n in t)) return !0;
    for (var i in t) if ("__source" !== i && e[i] !== t[i]) return !0;
    return !1;
  }
  function On(e, t) {
    var n = t(),
      i = ln({ t: { __: n, u: t } }),
      o = i[0].t,
      r = i[1];
    return (
      hn(
        function () {
          (o.__ = n), (o.u = t), Nn(o) && r({ t: o });
        },
        [e, n, t]
      ),
      un(
        function () {
          return (
            Nn(o) && r({ t: o }),
            e(function () {
              Nn(o) && r({ t: o });
            })
          );
        },
        [e]
      ),
      n
    );
  }
  function Nn(e) {
    var t,
      n,
      i = e.u,
      o = e.__;
    try {
      var r = i();
      return !(
        ((t = o) === (n = r) && (0 !== t || 1 / t == 1 / n)) ||
        (t != t && n != n)
      );
    } catch (e) {
      return !0;
    }
  }
  function Ln(e) {
    e();
  }
  function zn(e) {
    return e;
  }
  function An() {
    return [!1, Ln];
  }
  var Mn = hn;
  function Rn(e, t) {
    (this.props = e), (this.context = t);
  }
  function Pn(e, t) {
    function n(e) {
      var n = this.props.ref,
        i = n == e.ref;
      return (
        !i && n && (n.call ? n(null) : (n.current = null)),
        t ? !t(this.props, e) || !i : Cn(this.props, e)
      );
    }
    function i(t) {
      return (this.shouldComponentUpdate = n), bt(e, t);
    }
    return (
      (i.displayName = "Memo(" + (e.displayName || e.name) + ")"),
      (i.prototype.isReactComponent = !0),
      (i.__f = !0),
      (i.type = e),
      i
    );
  }
  ((Rn.prototype = new kt()).isPureReactComponent = !0),
    (Rn.prototype.shouldComponentUpdate = function (e, t) {
      return Cn(this.props, e) || Cn(this.state, t);
    });
  var Dn = nt.__b;
  nt.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
      Dn && Dn(e);
  };
  var Hn =
    ("undefined" != typeof Symbol &&
      Symbol.for &&
      Symbol.for("react.forward_ref")) ||
    3911;
  function In(e) {
    function t(t) {
      var n = Tn({}, t);
      return delete n.ref, e(n, t.ref || null);
    }
    return (
      (t.$$typeof = Hn),
      (t.render = e),
      (t.prototype.isReactComponent = t.__f = !0),
      (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
      t
    );
  }
  var jn = function (e, t) {
      return null == e ? null : Lt(Lt(e).map(t));
    },
    Vn = {
      map: jn,
      forEach: jn,
      count: function (e) {
        return e ? Lt(e).length : 0;
      },
      only: function (e) {
        var t = Lt(e);
        if (1 !== t.length) throw "Children.only";
        return t[0];
      },
      toArray: Lt,
    },
    $n = nt.__e;
  nt.__e = function (e, t, n, i) {
    if (e.then)
      for (var o, r = t; (r = r.__); )
        if ((o = r.__c) && o.__c)
          return (
            null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), o.__c(e, t)
          );
    $n(e, t, n, i);
  };
  var Un = nt.unmount;
  function Bn(e, t, n) {
    return (
      e &&
        (e.__c &&
          e.__c.__H &&
          (e.__c.__H.__.forEach(function (e) {
            "function" == typeof e.__c && e.__c();
          }),
          (e.__c.__H = null)),
        null != (e = Tn({}, e)).__c &&
          (e.__c.__P === n && (e.__c.__P = t),
          (e.__c.__e = !0),
          (e.__c = null)),
        (e.__k =
          e.__k &&
          e.__k.map(function (e) {
            return Bn(e, t, n);
          }))),
      e
    );
  }
  function Fn(e, t, n) {
    return (
      e &&
        n &&
        ((e.__v = null),
        (e.__k =
          e.__k &&
          e.__k.map(function (e) {
            return Fn(e, t, n);
          })),
        e.__c &&
          e.__c.__P === t &&
          (e.__e && n.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = n))),
      e
    );
  }
  function qn() {
    (this.__u = 0), (this.o = null), (this.__b = null);
  }
  function Wn(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function Gn(e) {
    var t, n, i;
    function o(o) {
      if (
        (t ||
          (t = e()).then(
            function (e) {
              n = e.default || e;
            },
            function (e) {
              i = e;
            }
          ),
        i)
      )
        throw i;
      if (!n) throw t;
      return bt(n, o);
    }
    return (o.displayName = "Lazy"), (o.__f = !0), o;
  }
  function Yn() {
    (this.i = null), (this.l = null);
  }
  (nt.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Un && Un(e);
  }),
    ((qn.prototype = new kt()).__c = function (e, t) {
      var n = t.__c,
        i = this;
      null == i.o && (i.o = []), i.o.push(n);
      var o = Wn(i.__v),
        r = !1,
        s = function () {
          r || ((r = !0), (n.__R = null), o ? o(a) : a());
        };
      n.__R = s;
      var a = function () {
        if (!--i.__u) {
          if (i.state.__a) {
            var e = i.state.__a;
            i.__v.__k[0] = Fn(e, e.__c.__P, e.__c.__O);
          }
          var t;
          for (i.setState({ __a: (i.__b = null) }); (t = i.o.pop()); )
            t.forceUpdate();
        }
      };
      i.__u++ || 32 & t.__u || i.setState({ __a: (i.__b = i.__v.__k[0]) }),
        e.then(s, s);
    }),
    (qn.prototype.componentWillUnmount = function () {
      this.o = [];
    }),
    (qn.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var n = document.createElement("div"),
            i = this.__v.__k[0].__c;
          this.__v.__k[0] = Bn(this.__b, n, (i.__O = i.__P));
        }
        this.__b = null;
      }
      var o = t.__a && bt(Et, null, e.fallback);
      return o && (o.__u &= -33), [bt(Et, null, t.__a ? null : e.children), o];
    });
  var Kn = function (e, t, n) {
    if (
      (++n[1] === n[0] && e.l.delete(t),
      e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.l.size))
    )
      for (n = e.i; n; ) {
        for (; n.length > 3; ) n.pop()();
        if (n[1] < n[0]) break;
        e.i = n = n[2];
      }
  };
  function Zn(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function Xn(e) {
    var t = this,
      n = e.h;
    if (
      ((t.componentWillUnmount = function () {
        Bt(null, t.v), (t.v = null), (t.h = null);
      }),
      t.h && t.h !== n && t.componentWillUnmount(),
      !t.v)
    ) {
      for (var i = t.__v; null !== i && !i.__m && null !== i.__; ) i = i.__;
      (t.h = n),
        (t.v = {
          nodeType: 1,
          parentNode: n,
          childNodes: [],
          __k: { __m: i.__m },
          contains: function () {
            return !0;
          },
          insertBefore: function (e, n) {
            this.childNodes.push(e), t.h.insertBefore(e, n);
          },
          removeChild: function (e) {
            this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1),
              t.h.removeChild(e);
          },
        });
    }
    Bt(bt(Zn, { context: t.context }, e.__v), t.v);
  }
  function Jn(e, t) {
    var n = bt(Xn, { __v: e, h: t });
    return (n.containerInfo = t), n;
  }
  ((Yn.prototype = new kt()).__a = function (e) {
    var t = this,
      n = Wn(t.__v),
      i = t.l.get(e);
    return (
      i[0]++,
      function (o) {
        var r = function () {
          t.props.revealOrder ? (i.push(o), Kn(t, e, i)) : o();
        };
        n ? n(r) : r();
      }
    );
  }),
    (Yn.prototype.render = function (e) {
      (this.i = null), (this.l = new Map());
      var t = Lt(e.children);
      e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
      for (var n = t.length; n--; ) this.l.set(t[n], (this.i = [1, 0, this.i]));
      return e.children;
    }),
    (Yn.prototype.componentDidUpdate = Yn.prototype.componentDidMount =
      function () {
        var e = this;
        this.l.forEach(function (t, n) {
          Kn(e, n, t);
        });
      });
  var Qn =
      ("undefined" != typeof Symbol &&
        Symbol.for &&
        Symbol.for("react.element")) ||
      60103,
    ei =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    ti = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    ni = /[A-Z0-9]/g,
    ii = "undefined" != typeof document,
    oi = function (e) {
      return (
        "undefined" != typeof Symbol && "symbol" == typeof Symbol()
          ? /fil|che|rad/
          : /fil|che|ra/
      ).test(e);
    };
  function ri(e, t, n) {
    return (
      null == t.__k && (t.textContent = ""),
      Bt(e, t),
      "function" == typeof n && n(),
      e ? e.__c : null
    );
  }
  function si(e, t, n) {
    return Ft(e, t), "function" == typeof n && n(), e ? e.__c : null;
  }
  (kt.prototype.isReactComponent = {}),
    [
      "componentWillMount",
      "componentWillReceiveProps",
      "componentWillUpdate",
    ].forEach(function (e) {
      Object.defineProperty(kt.prototype, e, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    });
  var ai = nt.event;
  function li() {}
  function ci() {
    return this.cancelBubble;
  }
  function ui() {
    return this.defaultPrevented;
  }
  nt.event = function (e) {
    return (
      ai && (e = ai(e)),
      (e.persist = li),
      (e.isPropagationStopped = ci),
      (e.isDefaultPrevented = ui),
      (e.nativeEvent = e)
    );
  };
  var hi,
    di = {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    pi = nt.vnode;
  nt.vnode = function (e) {
    "string" == typeof e.type &&
      (function (e) {
        var t = e.props,
          n = e.type,
          i = {},
          o = -1 === n.indexOf("-");
        for (var r in t) {
          var s = t[r];
          if (
            !(
              ("value" === r && "defaultValue" in t && null == s) ||
              (ii && "children" === r && "noscript" === n) ||
              "class" === r ||
              "className" === r
            )
          ) {
            var a = r.toLowerCase();
            "defaultValue" === r && "value" in t && null == t.value
              ? (r = "value")
              : "download" === r && !0 === s
              ? (s = "")
              : "translate" === a && "no" === s
              ? (s = !1)
              : "o" === a[0] && "n" === a[1]
              ? "ondoubleclick" === a
                ? (r = "ondblclick")
                : "onchange" !== a ||
                  ("input" !== n && "textarea" !== n) ||
                  oi(t.type)
                ? "onfocus" === a
                  ? (r = "onfocusin")
                  : "onblur" === a
                  ? (r = "onfocusout")
                  : ti.test(r) && (r = a)
                : (a = r = "oninput")
              : o && ei.test(r)
              ? (r = r.replace(ni, "-$&").toLowerCase())
              : null === s && (s = void 0),
              "oninput" === a && i[(r = a)] && (r = "oninputCapture"),
              (i[r] = s);
          }
        }
        "select" == n &&
          i.multiple &&
          Array.isArray(i.value) &&
          (i.value = Lt(t.children).forEach(function (e) {
            e.props.selected = -1 != i.value.indexOf(e.props.value);
          })),
          "select" == n &&
            null != i.defaultValue &&
            (i.value = Lt(t.children).forEach(function (e) {
              e.props.selected = i.multiple
                ? -1 != i.defaultValue.indexOf(e.props.value)
                : i.defaultValue == e.props.value;
            })),
          t.class && !t.className
            ? ((i.class = t.class), Object.defineProperty(i, "className", di))
            : ((t.className && !t.class) || (t.class && t.className)) &&
              (i.class = i.className = t.className),
          (e.props = i);
      })(e),
      (e.$$typeof = Qn),
      pi && pi(e);
  };
  var fi = nt.__r;
  nt.__r = function (e) {
    fi && fi(e), (hi = e.__c);
  };
  var mi = nt.diffed;
  nt.diffed = function (e) {
    mi && mi(e);
    var t = e.props,
      n = e.__e;
    null != n &&
      "textarea" === e.type &&
      "value" in t &&
      t.value !== n.value &&
      (n.value = null == t.value ? "" : t.value),
      (hi = null);
  };
  var _i = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function (e) {
          return hi.__n[e.__c].props.value;
        },
        useCallback: mn,
        useContext: _n,
        useDebugValue: vn,
        useDeferredValue: zn,
        useEffect: un,
        useId: gn,
        useImperativeHandle: pn,
        useInsertionEffect: Mn,
        useLayoutEffect: hn,
        useMemo: fn,
        useReducer: cn,
        useRef: dn,
        useState: ln,
        useSyncExternalStore: On,
        useTransition: An,
      },
    },
  };
  function vi(e) {
    return bt.bind(null, e);
  }
  function gi(e) {
    return !!e && e.$$typeof === Qn;
  }
  function bi(e) {
    return gi(e) && e.type === Et;
  }
  function yi(e) {
    return (
      !!e &&
      !!e.displayName &&
      ("string" == typeof e.displayName || e.displayName instanceof String) &&
      e.displayName.startsWith("Memo(")
    );
  }
  function wi(e) {
    return gi(e) ? qt.apply(null, arguments) : e;
  }
  function Ei(e) {
    return !!e.__k && (Bt(null, e), !0);
  }
  function ki(e) {
    return (e && (e.base || (1 === e.nodeType && e))) || null;
  }
  var Si = function (e, t) {
      return e(t);
    },
    xi = function (e, t) {
      return e(t);
    },
    Ti = Et,
    Ci = gi,
    Oi = {
      useState: ln,
      useId: gn,
      useReducer: cn,
      useEffect: un,
      useLayoutEffect: hn,
      useInsertionEffect: Mn,
      useTransition: An,
      useDeferredValue: zn,
      useSyncExternalStore: On,
      startTransition: Ln,
      useRef: dn,
      useImperativeHandle: pn,
      useMemo: fn,
      useCallback: mn,
      useContext: _n,
      useDebugValue: vn,
      version: "18.3.1",
      Children: Vn,
      render: ri,
      hydrate: si,
      unmountComponentAtNode: Ei,
      createPortal: Jn,
      createElement: bt,
      createContext: Wt,
      createFactory: vi,
      cloneElement: wi,
      createRef: wt,
      Fragment: Et,
      isValidElement: gi,
      isElement: Ci,
      isFragment: bi,
      isMemo: yi,
      findDOMNode: ki,
      Component: kt,
      PureComponent: Rn,
      memo: Pn,
      forwardRef: In,
      flushSync: xi,
      unstable_batchedUpdates: Si,
      StrictMode: Ti,
      Suspense: qn,
      SuspenseList: Yn,
      lazy: Gn,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: _i,
    },
    Ni = Object.freeze({
      __proto__: null,
      default: Oi,
      Component: kt,
      Fragment: Et,
      createContext: Wt,
      createElement: bt,
      createRef: wt,
      useCallback: mn,
      useContext: _n,
      useDebugValue: vn,
      useEffect: un,
      useErrorBoundary: function (e) {
        var t = an(Gt++, 10),
          n = ln();
        return (
          (t.__ = e),
          Yt.componentDidCatch ||
            (Yt.componentDidCatch = function (e, i) {
              t.__ && t.__(e, i), n[1](e);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      },
      useId: gn,
      useImperativeHandle: pn,
      useLayoutEffect: hn,
      useMemo: fn,
      useReducer: cn,
      useRef: dn,
      useState: ln,
      Children: Vn,
      PureComponent: Rn,
      StrictMode: Ti,
      Suspense: qn,
      SuspenseList: Yn,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: _i,
      cloneElement: wi,
      createFactory: vi,
      createPortal: Jn,
      findDOMNode: ki,
      flushSync: xi,
      forwardRef: In,
      hydrate: si,
      isElement: Ci,
      isFragment: bi,
      isMemo: yi,
      isValidElement: gi,
      lazy: Gn,
      memo: Pn,
      render: ri,
      startTransition: Ln,
      unmountComponentAtNode: Ei,
      unstable_batchedUpdates: Si,
      useDeferredValue: zn,
      useInsertionEffect: Mn,
      useSyncExternalStore: On,
      useTransition: An,
      version: "18.3.1",
    });
  var Li,
    zi = { exports: {} };
  function Ai() {
    return (
      Li ||
        ((Li = 1),
        (function (e) {
          function t() {
            return (
              (e.exports = t =
                Object.assign
                  ? Object.assign.bind()
                  : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n)
                          Object.prototype.hasOwnProperty.call(n, i) &&
                            (e[i] = n[i]);
                      }
                      return e;
                    }),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports),
              t.apply(this, arguments)
            );
          }
          (e.exports = t),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
        })(zi)),
      zi.exports
    );
  }
  var Mi,
    Ri = { exports: {} },
    Pi = { exports: {} },
    Di = { exports: {} };
  function Hi() {
    return (
      Mi ||
        ((Mi = 1),
        (function (e) {
          function t(n) {
            return (
              (e.exports = t =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
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
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports),
              t(n)
            );
          }
          (e.exports = t),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
        })(Di)),
      Di.exports
    );
  }
  var Ii,
    ji,
    Vi,
    $i = { exports: {} };
  function Ui() {
    return (
      Ii ||
        ((Ii = 1),
        (function (e) {
          var t = Hi().default;
          (e.exports = function (e, n) {
            if ("object" !== t(e) || null === e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
              var o = i.call(e, n || "default");
              if ("object" !== t(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === n ? String : Number)(e);
          }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
        })($i)),
      $i.exports
    );
  }
  function Bi() {
    return (
      ji ||
        ((ji = 1),
        (function (e) {
          var t = Hi().default,
            n = Ui();
          (e.exports = function (e) {
            var i = n(e, "string");
            return "symbol" === t(i) ? i : String(i);
          }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
        })(Pi)),
      Pi.exports
    );
  }
  function Fi() {
    return (
      Vi ||
        ((Vi = 1),
        (function (e) {
          var t = Bi();
          (e.exports = function (e, n, i) {
            return (
              (n = t(n)) in e
                ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[n] = i),
              e
            );
          }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
        })(Ri)),
      Ri.exports
    );
  }
  var qi,
    Wi,
    Gi,
    Yi,
    Ki,
    Zi,
    Xi,
    Ji,
    Qi,
    eo,
    to,
    no,
    io,
    oo,
    ro,
    so,
    ao,
    lo,
    co,
    uo,
    ho,
    po,
    fo,
    mo,
    _o,
    vo,
    go,
    bo,
    yo,
    wo,
    Eo,
    ko,
    So,
    xo,
    To,
    Co,
    Oo,
    No,
    Lo,
    zo = o(Ni),
    Ao = { exports: {} };
  function Mo() {
    if (Wi) return qi;
    Wi = 1;
    return (qi = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
  }
  function Ro() {
    if (Yi) return Gi;
    Yi = 1;
    var e = Mo();
    function t() {}
    function n() {}
    return (
      (n.resetWarningCache = t),
      (Gi = function () {
        function i(t, n, i, o, r, s) {
          if (s !== e) {
            var a = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((a.name = "Invariant Violation"), a);
          }
        }
        function o() {
          return i;
        }
        i.isRequired = i;
        var r = {
          array: i,
          bigint: i,
          bool: i,
          func: i,
          number: i,
          object: i,
          string: i,
          symbol: i,
          any: i,
          arrayOf: o,
          element: i,
          elementType: i,
          instanceOf: o,
          node: i,
          objectOf: o,
          oneOf: o,
          oneOfType: o,
          shape: o,
          exact: o,
          checkPropTypes: n,
          resetWarningCache: t,
        };
        return (r.PropTypes = r), r;
      })
    );
  }
  function Po() {
    return Ki || ((Ki = 1), (Ao.exports = Ro()())), Ao.exports;
  }
  function Do() {
    if (to) return eo;
    to = 1;
    const e = (function () {
      if (Qi) return Ji;
      function e(e, n) {
        return new t(e).sanitize(n);
      }
      Qi = 1;
      class t {
        constructor(e) {
          (this.str = e), (this.i = 0);
        }
        sanitize(t) {
          let n = (t = t || {}).allowedTags || e.allowedTags;
          (n && n.includes) || (n = !1);
          let i = t.allowedAttributes || e.allowedAttributes;
          for ((i && i.includes) || (i = !1); this.i < this.str.length; ) {
            if (!this.isTag()) {
              this.i++;
              continue;
            }
            let e,
              t = this.i,
              o = this.readTagName();
            if (((e = !1 === n || n.includes(o)), !e)) {
              this.cutTag(t);
              continue;
            }
            this.stripAttributes(o, i), this.skipSpace();
            let r = this.str[this.i];
            "/" == r && (this.i++, this.skipSpace()),
              ">" != r && this.cutTag(t);
          }
          return this.str;
        }
        isTag() {
          return "<" == this.str[this.i];
        }
        readTagName() {
          let e = this.str[this.i];
          "<" == e && this.i++,
            this.skipSpace(),
            (e = this.str[this.i]),
            "/" == e && (this.i++, this.skipSpace());
          let t = "";
          for (; this.i < this.str.length; ) {
            let e = this.str[this.i];
            if (/\s|>|\//.test(e)) break;
            (t += e), this.i++;
          }
          return t.toLowerCase();
        }
        cutTag(e) {
          for (; this.i < this.str.length && ">" != this.str[this.i]; )
            this.i++;
          this.cutSubstring(e, this.i + 1);
        }
        stripAttributes(e, t) {
          if ((this.skipSpace(), !this.isAttr())) return;
          let n = this.i,
            i = this.readAttrName(),
            o = null;
          this.isAttrValue() && (o = this.readAttrValue());
          let r = this.i,
            s = t.includes(i);
          ("src" != i && "href" != i) || (o && this.isValidURL(o)) || (s = !1),
            s || this.cutSubstring(n, r),
            this.stripAttributes(e, t);
        }
        isValidURL(e) {
          return (
            !/[\x00-\x20]/g.test(e) &&
            !/<!--.*?-->/.test(e) &&
            ((e = e.trim()), !!/^(#|http|\/)/.test(e))
          );
        }
        readAttrValue() {
          this.skipSpace();
          let e = this.str[this.i];
          "=" == e && (this.i++, this.skipSpace()), (e = this.str[this.i]);
          let t = !1;
          ('"' != e && "'" != e && "`" != e) || ((t = e), this.i++);
          let n = "";
          for (; this.i < this.str.length; ) {
            let e = this.str[this.i];
            if (t) {
              if (t == e) {
                this.i++;
                break;
              }
              (n += e), this.i++;
            } else {
              if (/[\s>]/.test(e)) break;
              (n += e), this.i++;
            }
          }
          return n;
        }
        isAttrValue() {
          let e = this.str.slice(this.i);
          return /^\s*=\s*/.test(e);
        }
        skipTagName() {
          let e = /^<\s*(\w+)[^\w]\s*/i.exec(this.str);
          (e = (e && e[0].length) || 0), (this.i = e);
        }
        skipSpace() {
          for (; this.i < this.str.length; ) {
            let e = this.str[this.i];
            if (!/\s/.test(e)) break;
            this.i++;
          }
        }
        readAttrName() {
          let e = "";
          for (; this.i < this.str.length; ) {
            let t = this.str[this.i];
            if (/\s|=|>/.test(t)) break;
            (e += t), this.i++;
          }
          return e.toLowerCase();
        }
        isAttr() {
          let e = this.str[this.i];
          return e && /[^</>\s]/.test(e);
        }
        cutSubstring(e, t) {
          (this.str = this.str.slice(0, e) + this.str.slice(t)),
            (this.i -= t - e);
        }
      }
      return (
        (e.allowedTags = [
          "div",
          "span",
          "b",
          "u",
          "i",
          "strong",
          "em",
          "strike",
          "code",
          "p",
          "blockquote",
          "nl",
          "caption",
          "pre",
          "a",
          "br",
          "hr",
          "img",
          "ul",
          "ol",
          "nav",
          "li",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "menu",
          "table",
          "td",
          "tr",
          "thead",
          "tbody",
          "tfoot",
          "th",
        ]),
        (e.allowedAttributes = [
          "align",
          "alt",
          "bgcolor",
          "border",
          "class",
          "color",
          "colspan",
          "dir",
          "headers",
          "height",
          "hidden",
          "href",
          "size",
          "hreflang",
          "id",
          "lang",
          "rel",
          "reversed",
          "rowspan",
          "shape",
          "sizes",
          "spellcheck",
          "src",
          "srcset",
          "style",
          "summary",
          "title",
          "translate",
          "type",
          "width",
          "data",
          "data-*",
        ]),
        (Ji = e)
      );
    })();
    return (
      (eo = function () {
        return e(
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          {
            allowedTags:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
          }
        )
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, "&");
      }),
      eo
    );
  }
  function Ho() {
    if (io) return no;
    io = 1;
    const e = zo,
      t = Po(),
      n = t.string,
      i = t.object,
      o = t.bool,
      r = (function () {
        if (Xi) return Zi;
        Xi = 1;
        const e = zo,
          t = Po(),
          n = (t) =>
            t.isFlipped
              ? e.createElement(
                  "svg",
                  {
                    className: t.className,
                    width: t.width,
                    height: t.height,
                    viewBox: "0 0 12 12",
                  },
                  e.createElement(
                    "g",
                    { fill: "none", fillRule: "evenodd" },
                    e.createElement("path", {
                      stroke: "#666",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M1.5.5h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2v2.398a.5.5 0 0 1-.83.376L4.5 8.5h-3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z",
                    }),
                    e.createElement("path", {
                      fill: "#666",
                      fillRule: "nonzero",
                      d: "M3.5 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM3.5 5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z",
                    })
                  )
                )
              : e.createElement(
                  "svg",
                  {
                    className: t.className,
                    width: t.width,
                    height: t.height,
                    viewBox: "0 0 12 12",
                  },
                  e.createElement(
                    "g",
                    { fill: "none", fillRule: "evenodd" },
                    e.createElement("path", {
                      stroke: "#666",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M1.5.5h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3l-3.17 2.774a.5.5 0 0 1-.83-.376V8.5h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z",
                    }),
                    e.createElement("path", {
                      fill: "#666",
                      fillRule: "nonzero",
                      d: "M3.5 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z",
                    })
                  )
                );
        return (
          (n.propTypes = {
            width: t.number,
            height: t.number,
            className: t.string,
            isFlipped: t.bool,
          }),
          (n.defaultProps = {
            width: 12,
            height: 12,
            className: "",
            style: {},
            isFlipped: !1,
          }),
          (Zi = n)
        );
      })(),
      s = Do(),
      a = "notification-item";
    class l extends e.PureComponent {
      render() {
        const t = this.props,
          n = t.icon,
          i = t.text,
          o = t.className,
          l = t.noBullet,
          c = n && "notifcenter_balloon_left" === n,
          u = { WebkitLineClamp: i.lines };
        return l
          ? e.createElement(
              "p",
              { className: `${a} text} ${a} noBullet}` },
              s(i.value)
            )
          : e.createElement(
              "div",
              { className: `${a} ${o} bullet` },
              n
                ? e.createElement(r, { isFlipped: c, width: 12, height: 12 })
                : null,
              e.createElement(
                "p",
                { className: `${a} bullet__text`, style: u },
                s(i.value)
              )
            );
      }
    }
    return (
      (l.defaultProps = { icon: null, className: null, noBullet: null }),
      (l.propTypes = {
        className: n,
        icon: n,
        noBullet: o,
        text: i.isRequired,
      }),
      (no = l)
    );
  }
  function Io() {
    if (ao) return so;
    return (
      (ao = 1),
      (so = function (e, t) {
        const n = { path: e, event_data: t },
          i = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(n),
          };
        return fetch("/gz/notifications/realtime_track", i)
          .then((e) => e.status)
          .catch(() => "error");
      })
    );
  }
  function jo() {
    if (go) return vo;
    go = 1;
    const e = zo,
      t = Po(),
      n = (function () {
        if (_o) return mo;
        _o = 1;
        const e = zo,
          t = Po(),
          n = (t) =>
            e.createElement(
              "svg",
              {
                className: t.className,
                width: t.width,
                height: t.height,
                viewBox: "0 0 52 48",
              },
              e.createElement(
                "defs",
                null,
                e.createElement("path", {
                  id: "photo-path",
                  d: "M25.829 47.314H0V.343h51.658v46.971h-25.83z",
                })
              ),
              e.createElement(
                "g",
                { fill: "none", fillRule: "evenodd" },
                e.createElement("path", {
                  d: "M26.082 14.82c-7.364 0-13.355 6.003-13.355 13.384 0 7.379 5.991 13.383 13.355 13.383 7.364 0 13.355-6.004 13.355-13.383 0-7.38-5.991-13.385-13.355-13.385m0 27.796c-7.93 0-14.38-6.465-14.38-14.411 0-7.948 6.45-14.413 14.38-14.413 7.93 0 14.381 6.465 14.381 14.413 0 7.946-6.451 14.411-14.381 14.411",
                  fill: "#979797",
                }),
                e.createElement("path", {
                  d: "M26.082 20.505c-4.235 0-7.682 3.453-7.682 7.699 0 4.244 3.447 7.697 7.682 7.697s7.681-3.453 7.681-7.697c0-4.246-3.446-7.699-7.681-7.699m0 16.425c-4.802 0-8.708-3.915-8.708-8.726 0-4.813 3.906-8.727 8.708-8.727s8.708 3.914 8.708 8.727c0 4.811-3.906 8.726-8.708 8.726",
                  fill: "#979797",
                }),
                e.createElement(
                  "g",
                  { transform: "translate(0 .343)" },
                  e.createElement(
                    "mask",
                    { id: "photo-mask", fill: "#fff" },
                    e.createElement("use", { xlinkHref: "#photo-path" })
                  ),
                  e.createElement("path", {
                    d: "M6.424 9.6c-2.977 0-5.398 2.427-5.398 5.411v25.864c0 2.983 2.421 5.41 5.398 5.41h38.809c2.976 0 5.398-2.427 5.398-5.41V15.01c0-2.984-2.422-5.411-5.398-5.411h-5.297a2.622 2.622 0 0 1-2.593-2.201l-.583-3.512a2.997 2.997 0 0 0-2.964-2.516h-15.25a2.995 2.995 0 0 0-2.963 2.516L14.998 7.4A2.623 2.623 0 0 1 12.405 9.6h-5.98zm38.809 37.714H6.424C2.882 47.314 0 44.425 0 40.874V15.012c0-3.55 2.882-6.44 6.424-6.44h5.981a1.6 1.6 0 0 0 1.581-1.342l.583-3.51A4.02 4.02 0 0 1 18.545.343h15.251a4.02 4.02 0 0 1 3.976 3.376l.585 3.511a1.596 1.596 0 0 0 1.58 1.341h5.296c3.542 0 6.425 2.89 6.425 6.44v25.864c0 3.55-2.883 6.44-6.425 6.44z",
                    fill: "#979797",
                    mask: "url(#photo-mask)",
                  })
                ),
                e.createElement("path", {
                  d: "M43.847 14.657a2.075 2.075 0 0 0 0 4.152 2.076 2.076 0 0 0 0-4.152m0 5.18a3.105 3.105 0 0 1 0-6.208 3.105 3.105 0 0 1 0 6.209",
                  fill: "#979797",
                })
              )
            );
        return (
          (n.propTypes = {
            width: t.number,
            height: t.number,
            className: t.string,
          }),
          (n.defaultProps = { width: 52, height: 48, className: "" }),
          (mo = n)
        );
      })();
    class i extends e.PureComponent {
      constructor(e) {
        super(e), (this.state = { loaded: !1 });
      }
      componentDidMount() {
        this.activateImage();
      }
      activateImage() {
        this.setState({ loaded: !0 });
      }
      render() {
        const t = this.props,
          i = t.altText,
          o = t.className,
          r = t.isLowEnd,
          s = t.src,
          a = t.width,
          l = t.height;
        return !s || "" === s
          ? e.createElement(n, { className: "photo", width: 30, height: 27.5 })
          : e.createElement("img", {
              alt: i,
              width: a,
              height: l,
              className: o,
              src:
                this.state.loaded || r
                  ? s
                  : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            });
      }
    }
    return (
      (i.propTypes = {
        isLowEnd: t.bool,
        src: t.string,
        altText: t.string,
        className: t.string,
        width: t.number,
        height: t.number,
      }),
      (i.defaultProps = {
        isLowEnd: !1,
        src: "",
        altText: "",
        className: "",
        width: null,
        height: null,
      }),
      (vo = i)
    );
  }
  function Vo() {
    if (So) return ko;
    So = 1;
    const e = zo,
      t = Po(),
      n = (function () {
        if (Eo) return wo;
        Eo = 1;
        const e = zo,
          t = Po(),
          n = (t) =>
            e.createElement(
              "svg",
              {
                className: t.className,
                width: t.width,
                height: t.height,
                viewBox: "0 0 212 118",
              },
              e.createElement(
                "g",
                { fill: "none" },
                e.createElement("path", {
                  fill: "#fff",
                  d: "M.6 117.3h210.7V.6H.6z",
                }),
                e.createElement("path", {
                  d: "M0 117.9V0h211.9v117.9H0zm210.7-1.2V1.1H1.1v115.6h209.6z",
                  fill: "#CCC",
                }),
                e.createElement("path", {
                  d: "M23 57.8h-7.2c-.6 0-1.2-.2-1.6-.6-.4-.5-.7-1-.7-1.6V17.5c0-1.2 1-2.1 2.1-2.1h46.1c1.1 0 2.1.9 2.1 2.1v38.1c0 .6-.3 1.1-.7 1.6-.4.4-1 .6-1.6.6h-7.2c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h7.2c1 0 2-.4 2.7-1.1.7-.7 1.1-1.6 1.1-2.6V17.5c0-2-1.6-3.7-3.6-3.6H15.6c-2-.1-3.6 1.6-3.6 3.6v38.1c0 1 .4 1.9 1.1 2.6.7.7 1.7 1.1 2.7 1.1H23c.4 0 .7-.3.7-.7 0-.5-.3-.8-.7-.8z",
                  fill: "#666",
                }),
                e.createElement("path", {
                  d: "M21.9 36.2l-2.5-4.3c-.1-.2-.2-.3-.2-.5 0-.4.3-.7.7-.7.5 0 .6.4.8.7l2 3.4 2-3.4c.2-.3.3-.7.8-.7.3 0 .7.3.7.7 0 .2-.1.3-.2.5l-2.5 4.3 2.5 4.3c.1.2.2.3.2.5 0 .4-.4.7-.7.7-.5 0-.6-.4-.8-.7l-2-3.4-2 3.4c-.2.3-.3.7-.8.7-.4 0-.7-.3-.7-.7 0-.2.1-.3.2-.5l2.5-4.3zm10.2 0l-2.6-4.3c-.1-.2-.1-.3-.1-.5 0-.4.3-.7.7-.7.4 0 .6.4.8.7l2 3.4 2-3.4c.1-.3.3-.7.8-.7.3 0 .7.3.7.7 0 .2-.1.3-.2.5l-2.5 4.3 2.5 4.3c.1.2.2.3.2.5 0 .4-.4.7-.7.7-.5 0-.7-.4-.9-.7l-1.9-3.4-2 3.4c-.2.3-.4.7-.8.7s-.7-.3-.7-.7c0-.2 0-.3.1-.5l2.6-4.3zm10.1 0l-2.5-4.3c-.1-.2-.1-.3-.1-.5 0-.4.3-.7.7-.7.4 0 .6.4.8.7l2 3.4 1.9-3.4c.2-.3.4-.7.9-.7.3 0 .6.3.6.7 0 .2 0 .3-.1.5l-2.5 4.3 2.5 4.3c.1.2.1.3.1.5 0 .4-.3.7-.6.7-.5 0-.7-.4-.9-.7l-1.9-3.4-2 3.4c-.2.3-.4.7-.8.7s-.7-.3-.7-.7c0-.2 0-.3.1-.5l2.5-4.3zm10.2 0l-2.5-4.3c-.1-.2-.2-.3-.2-.5 0-.4.4-.7.7-.7.5 0 .7.4.9.7l1.9 3.4 2-3.4c.2-.3.4-.7.8-.7s.7.3.7.7c0 .2 0 .3-.1.5L54 36.2l2.6 4.3c.1.2.1.3.1.5 0 .4-.3.7-.7.7-.4 0-.6-.4-.8-.7l-2-3.4-1.9 3.4c-.2.3-.4.7-.9.7-.3 0-.7-.3-.7-.7 0-.2.1-.3.2-.5l2.5-4.3zM188 24.1c0-6-7.5-10.9-16.8-10.9-9.2 0-16.8 4.9-16.8 10.9v.7c0 6.4 6.6 11.6 16.8 11.6 10.3 0 16.8-5.2 16.8-11.6v-.7z",
                  fill: "#666",
                }),
                e.createElement("path", {
                  d: "M187.4 24.1c0 5.7-7.3 10.3-16.2 10.3-8.9 0-16.1-4.6-16.1-10.3 0-5.6 7.2-10.2 16.1-10.2 8.9 0 16.2 4.6 16.2 10.2",
                  fill: "#F8F8F8",
                }),
                e.createElement("path", {
                  d: "M165.9 20.9s-.2.2-.1.3c.3.3 1 .5 1.8.3.5-.1 1.1-.5 1.7-1 .6-.5 1.3-1 1.9-1.2.7-.2 1.1-.1 1.4-.1.3.1.7.3 1.3.8 1.1.8 5.5 4.7 6.3 5.3.6-.2 3.3-1.4 7.1-2.2-.4-2-1.6-3.8-3.4-5.3-2.6 1.1-5.7 1.6-8.7.1-.1 0-1.7-.8-3.3-.7-2.5 0-3.5 1.1-4.6 2.2l-1.4 1.5z",
                  fill: "#fff",
                }),
                e.createElement("path", {
                  d: "M180 25.8c-.1-.1-5.2-4.6-6.4-5.5-.7-.5-1-.6-1.4-.7-.3 0-.5 0-.7.1-.6.2-1.3.6-1.9 1.1-.7.5-1.3 1-1.9 1.2-.7.1-1.6-.1-2-.3-.1-.1-.3-.3-.3-.4-.2-.4.1-.6.1-.7l1.5-1.5c.1-.2.3-.3.5-.5-.5 0-.9.2-1.3.3-.6.1-1 .3-1.6.3a19.02 19.02 0 0 1-5.6-1.8c-2 1.5-3.4 3.4-3.8 5.5.3.1.8.2 1 .3 4.6 1 6 2 6.2 2.2.4-.3.8-.5 1.3-.5.4.1.9.3 1.1.7.3-.3.7-.4 1.1-.4.2 0 .5 0 .7.1.5.2.8.5.9.8.2 0 .4-.1.6-.1.3 0 .5.1.8.2.8.3 1 1.2.9 1.8.5-.1 1 .1 1.4.4.4.4.6.9.6 1.4 0 .3-.1.6-.2.8.3.2 1 .5 1.6.5.4-.1.6-.3.7-.4l.1-.1-1.3-1.5s-.3-.2-.2-.3a14.6 14.6 0 0 1 1.8 1.5s0 .1.3.2c.3 0 .7 0 1.1-.2 0-.1.1-.2.2-.3.3-.4-.1-.8-.1-.8l-1.5-1.7s-.2-.2-.1-.3c0 0 .2.1.3.1.5.4 1.1 1.1 1.8 1.7.1.1.7.5 1.4 0 .5-.3.6-.7.6-1-.1-.3-.4-.6-.4-.6l-2-2s-.2-.2-.2-.3c.1-.1.2 0 .3.1.7.5 2.5 2.2 2.5 2.2s.6.4 1.4-.1c.3-.1.4-.4.4-.7.1-.5-.3-.8-.3-.8",
                  fill: "#fff",
                }),
                e.createElement("path", {
                  d: "M170 28.4c-.3 0-.7.2-.7.1-.1 0 0-.1 0-.2s.5-1.3-.6-1.8c-.7-.3-1.2.1-1.4.3 0 0-.1 0-.1-.1 0-.2-.1-.8-.8-1-.9-.3-1.5.4-1.7.6-.1-.6-.6-1-1.2-1-.6.1-1 .6-1 1.2 0 .4.2.8.6 1 .5.2.9.1 1.3-.2-.1.3-.2 1.3.9 1.7.4.2.8 0 1.1-.2.1 0 .1 0 .1.1-.1.2 0 .8.8 1.1.6.2.9 0 1.1-.2.1-.1.2-.1.2.1 0 .7.6 1.3 1.4 1.3.4 0 .7-.1 1-.4.2-.3.4-.6.4-1 0-.8-.6-1.4-1.4-1.4",
                  fill: "#fff",
                }),
                e.createElement("path", {
                  d: "M170 31.1c-.7 0-1.3-.5-1.3-1.3 0 0 0-.2-.2-.2l-.1.1c-.2.2-.4.3-.7.3-.1 0-.3 0-.4-.1-.8-.3-.8-.8-.7-1 0-.1 0-.1-.1-.2h-.1-.1c-.2.2-.4.3-.6.3-.1 0-.3-.1-.4-.1-1-.4-.9-1.3-.8-1.6 0 0 0-.1-.1-.1v-.1l-.1.1c-.3.3-.7.4-1.1.2-.4-.2-.6-.5-.6-.9-.1-.4.1-.8.4-1 .3-.2.7-.3 1-.1.4.2.6.5.6.9v.3l.2-.2c0-.1.4-.7 1.2-.7.1 0 .3 0 .4.1.6.2.7.7.7.9.1.2.1.2.2.2 0 0 .1 0 .1-.1.1-.1.3-.3.7-.3.2 0 .4 0 .6.1 1 .4.5 1.7.5 1.7-.1.2-.1.3 0 .3H169.5c.1-.1.3-.1.5-.1.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3zm10.2-5.9c-1.6-1.4-5.3-4.6-6.3-5.3-.5-.4-.9-.7-1.3-.8-.2 0-.4-.1-.6-.1-.3 0-.5.1-.8.2-.7.2-1.3.7-1.9 1.2h-.1c-.5.5-1.1.9-1.6 1-.2.1-.4.1-.6.1-.5 0-.9-.1-1.1-.4V21l1.4-1.5c1.1-1.1 2.2-2.2 4.6-2.2h.1c1.5 0 3 .6 3.1.7 1.4.7 2.8 1 4.3 1s3-.3 4.7-1.1c-.2-.1-.4-.3-.6-.4-1.4.6-2.8.9-4.1.9-1.4 0-2.7-.3-4-1-.1 0-1.7-.8-3.4-.8h-.2c-2 .1-3.1.8-3.8 1.4-.8 0-1.4.2-2 .4-.5.1-.9.2-1.3.2h-.6c-.5 0-2.9-.6-4.9-1.3-.2.1-.4.2-.6.4 2.1.8 4.6 1.5 5.4 1.5.2 0 .4.1.7.1.5 0 1-.2 1.5-.3.3-.1.6-.2 1-.3l-.3.3-1.4 1.5c-.1.2-.4.5-.2.8.1.2.2.3.3.4.4.3 1 .4 1.6.4h.6c.6-.2 1.2-.7 1.8-1.2.6-.4 1.3-.9 1.9-1.1.2 0 .4-.1.5-.1h.1c.4.1.8.2 1.4.7 1.2.9 6.4 5.4 6.4 5.4.2.2.3.5.3.8 0 .3-.1.5-.4.6-.2.2-.4.3-.7.3-.2 0-.4-.1-.6-.2 0 0-1.7-1.6-2.4-2.2-.1-.1-.2-.2-.3-.2-.1 0-.1.1-.1.1-.1.1 0 .3.1.4l2.1 2.1s.2.2.3.6c0 .3-.2.6-.5.8-.3.2-.5.2-.8.2-.3 0-.5-.1-.5-.1l-.3-.3c-.6-.6-1.1-1.1-1.6-1.4-.1-.1-.2-.2-.3-.2 0 0-.1 0-.1.1 0 0-.1.1 0 .3.1 0 .1.1.1.1l1.6 1.7s.3.3 0 .7h-.1c0 .1-.1.1-.1.2-.3.2-.6.2-.7.2h-.2c-.2 0-.3-.1-.3-.1h-.1c-.4-.5-.9-1-1.4-1.4-.1-.1-.2-.2-.3-.2-.1 0-.1 0-.2.1s.1.3.2.4l1.3 1.4-.1.1c0 .1-.2.2-.6.3h-.2c-.5 0-1-.3-1.3-.4.1-.3.2-.5.2-.8 0-.5-.2-1-.6-1.4-.4-.3-.9-.5-1.4-.5 0-.5 0-1.4-1-1.8-.2-.1-.5-.2-.8-.2-.2 0-.4 0-.5.1-.2-.4-.6-.7-1-.8-.2-.1-.4-.1-.7-.1-.4 0-.7.1-1.1.3-.3-.3-.7-.6-1.2-.6-.4 0-.9.2-1.2.5-.4-.3-2-1.3-6.2-2.3-.3-.1-.7-.1-1-.2 0 .2-.1.4-.1.7 0 0 .8.1 1 .2 4.3.9 5.7 1.9 6 2.1-.2.6-.2 1.2.2 1.7.4.4 1 .7 1.6.5.1.7.5 1.2 1.2 1.5.2 0 .4.1.6.1.1 0 .2 0 .4-.1.1.3.4.7 1 1 .2.1.4.1.6.1.2 0 .3 0 .5-.1.3.6.8 1 1.4 1.2.7.1 1.3-.1 1.8-.6.3.2.9.5 1.6.5h.2c.7-.1 1-.3 1.1-.5.1-.1.1-.1.1-.2.2.1.3.1.5.1.4 0 .7-.1 1.1-.4.3-.2.6-.6.6-.9.1.1.2.1.3.1.4 0 .8-.2 1.1-.4.7-.4.8-1 .8-1.4.1.1.2.1.4.1.3 0 .6-.1 1-.3.4-.3.6-.7.7-1.2 0-.3-.1-.6-.3-.9 1.2-.5 3.7-1.4 6.7-2.1v-.7c-3.7.8-6.4 2-7.1 2.3zm15 22c-.3.4-.7.6-1.2.6-.6 0-1-.2-1.3-.6-.3-.4-.5-.9-.5-1.6 0-.7.2-1.3.5-1.7.3-.4.7-.6 1.3-.6.5 0 .9.2 1.2.6.3.4.5 1 .5 1.7s-.2 1.2-.5 1.6zm1.5-4.3c-.6-.8-1.5-1.1-2.7-1.1-1.3 0-2.2.3-2.8 1.1a4 4 0 0 0-.9 2.7c0 1 .3 1.9.9 2.7.6.7 1.5 1.1 2.8 1.1 1.2 0 2.1-.4 2.7-1.1.6-.8.9-1.7.9-2.7a4 4 0 0 0-.9-2.7zm-16.4 3.4c0 .7-.2 1.1-.5 1.3-.4.3-.8.4-1.2.4-.2 0-.5-.1-.6-.2a.9.9 0 0 1-.3-.7c0-.4.1-.6.4-.8.2-.1.5-.2.9-.3h.4c.2-.1.4-.1.5-.2.2 0 .3-.1.4-.2v.7zm.9-4c-.6-.4-1.3-.5-2.1-.5-1.2 0-2 .3-2.5.9-.3.4-.5 1-.6 1.6h1.8c.1-.3.2-.5.3-.7.2-.2.5-.3 1-.3.4 0 .7.1.9.2.2.1.3.3.3.6 0 .2-.1.4-.4.5-.2.1-.4.1-.8.2h-.6c-.7.1-1.3.3-1.7.5-.7.4-1 1-1 1.9 0 .7.2 1.2.6 1.6.5.4 1 .5 1.7.6 4.1.1 4-2.2 4.1-2.7V44c0-.8-.3-1.4-1-1.7zm-9.3 1.1c.4 0 .8.1 1 .4.2.2.3.5.3.7h2c-.1-1-.4-1.7-1-2.1-.7-.4-1.4-.6-2.4-.6-1.1 0-2 .4-2.6 1-.6.7-1 1.7-1 2.9 0 1.1.3 2 .9 2.7.6.6 1.5 1 2.7 1 1.2 0 2.1-.4 2.8-1.3.3-.5.6-1 .6-1.6h-2a3 3 0 0 1-.4 1c-.2.2-.5.3-1 .3-.6 0-1.1-.3-1.3-.9-.1-.3-.2-.7-.2-1.2 0-.6.1-1 .2-1.4.3-.6.7-.9 1.4-.9zm-4.2-1.6c-4.2 0-3.9 3.7-3.9 3.7v3.7h1.9v-3.5c0-.6 0-1 .2-1.3.3-.4.8-.7 1.5-.7h.6v-1.9h-.2-.1zm-9.5 2c.3-.3.7-.4 1.1-.4.5 0 .9.1 1.2.3.3.3.4.7.5 1.2h-3.3c.1-.5.3-.9.5-1.1zm2.6 3.5l-.3.3c-.3.2-.6.2-1 .2-.5 0-.8 0-1.1-.2-.4-.3-.7-.8-.7-1.5h5.2c0-.6 0-1.1-.1-1.4 0-.5-.2-1.1-.5-1.5-.3-.5-.8-.8-1.3-1.1-.5-.2-1.1-.3-1.7-.3-1 0-1.9.3-2.5 1-.7.7-1 1.6-1 2.9 0 1.3.4 2.2 1.1 2.8.7.6 1.6.9 2.5.9 1.2 0 2.1-.4 2.7-1 .4-.4.6-.8.7-1.1h-2zm-5.8 1.9h-1.7v-4.3c0-.4-.1-1.4-1.3-1.4-.7 0-1.3.6-1.3 1.4v4.3H149v-4.3c0-.4-.1-1.4-1.3-1.4-.7 0-1.3.6-1.3 1.4v4.3h-1.7v-4.3c0-1.8 1.2-3.1 3-3.1 1 0 1.7.4 2.2 1 .5-.7 1.3-1 2.1-1 1.9 0 3 1.3 3 3.1v4.3zm32.5-2c-.3.4-.7.6-1.2.6-.6 0-1-.2-1.2-.6-.3-.4-.4-.9-.4-1.6 0-.6.1-1.1.4-1.5.2-.4.6-.7 1.2-.7.3 0 .6.2.9.4.5.4.7 1 .7 1.9 0 .6-.2 1.1-.4 1.5zm2.2-7.6s-1.9-.3-1.9 1.3v2c-.2-.3-.5-.6-.8-.8-.3-.2-.7-.3-1.1-.3-1 0-1.7.4-2.3 1.1-.6.7-.9 1.7-.9 2.9 0 1 .3 1.9.9 2.6.6.7 1.7 1 2.7 1 3.5 0 3.4-3 3.4-3v-6.8zm-10.4 15.1c.2-.2.6-.4 1.1-.4.4 0 .8.2 1.1.4.3.3.5.6.5 1.1h-3.2c.1-.4.2-.8.5-1.1zm2.5 3.5l-.3.3c-.2.2-.6.3-1 .3s-.7-.1-1-.2c-.5-.3-.7-.8-.8-1.5h5.2v-1.4c-.1-.6-.3-1.1-.6-1.5-.3-.5-.7-.8-1.2-1.1-.5-.2-1.1-.3-1.7-.3-1.1 0-1.9.3-2.6 1-.6.6-.9 1.6-.9 2.8 0 1.3.3 2.3 1.1 2.9.7.5 1.5.8 2.5.8 1.1 0 2-.3 2.6-1 .4-.4.6-.7.7-1.1h-2zm-12.2 0c-.3.4-.7.6-1.2.6s-.9-.2-1.2-.6c-.3-.4-.4-.9-.4-1.5 0-.9.2-1.5.6-1.9.3-.2.6-.3 1-.3.5 0 .9.2 1.2.6.3.4.4.9.4 1.5 0 .7-.1 1.2-.4 1.6zm-.8-5.4c-.4 0-.8.1-1.1.3-.4.2-.7.5-.9.8v-3.4s-1.9-.2-1.9 1.4v5.5s0 2.9 3.5 2.9c1 0 2.1-.3 2.7-.9.5-.7.8-1.6.8-2.6 0-1.3-.3-2.2-.8-2.9-.6-.7-1.3-1.1-2.3-1.1zm7.7 0h-.1c-4.1 0-3.9 3.7-3.9 3.7v3.7h1.9v-3.5c0-.6.1-1 .2-1.3.3-.5.8-.7 1.5-.7h.6v-1.9h-.2zm-18.1-.9v8.2h1.8v-9.6s-1.8-.1-1.8 1.4zm3.2.5h1.9v-1.9h-1.9v1.9zm0 7.8h1.9V53h-1.9v7.2zm-113.4 0H29.1c-1 0-1.8-.8-1.8-1.8 0-.5.2-1 .5-1.3.3-.3.8-.5 1.3-.5h19.1c.5 0 .9.2 1.3.5.3.3.5.8.5 1.3 0 1-.8 1.8-1.8 1.8zm60.7-41h2.9v-2.9h-2.9v2.9zm-3-3h2.9v-2.8h-2.9v2.8zm-5.8 0h2.9v-2.8h-2.9v2.8zm8.7 8.8h2.9v-2.9h-2.9V25zm-5.8 0h2.9v-2.9H103V25zm2.9-2.9h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-11.6 0h2.9v-2.9h-2.9v2.9zm20.4 8.7h2.9v-2.9h-2.9v2.9zm-5.9 0h2.9v-2.9H103v2.9zm-2.9-2.9h2.9V25h-2.9v2.9zm26.2 8.7h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.9 0h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9H103v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.9 0h2.9v-2.9h-2.9v2.9zm37.9-2.9h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.9 0h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.9 0h2.9v-2.9h-2.9v2.9zm43.7 8.7h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.9 0h2.9v-2.9H103v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.9 0h2.9v-2.9h-2.9v2.9zm32.1-2.9h2.9v-2.9h-2.9v2.9zm-11.7 0h2.9v-2.9h-2.9v2.9zm-11.6 0h2.9v-2.9h-2.9v2.9zm-11.7 0h2.9v-2.9h-2.9v2.9zm43.7 8.7h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.9 0h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9H103v2.9zm20.4-2.9h2.9v-2.9h-2.9v2.9zm-11.6 0h2.9v-2.9h-2.9v2.9zm-8.8-2.9v2.9h-2.9v-2.9h2.9zM126.3 54h2.9v-2.9h-2.9V54zm-5.8 0h2.9v-2.9h-2.9V54zm-5.8 0h2.9v-2.9h-2.9V54zm-5.8 0h2.9v-2.9h-2.9V54zm-5.9 0h2.9v-2.9H103V54zm20.4-2.9h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-11.7 0h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm26.2 8.7h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9h-2.9v2.9zm-5.9 0h2.9v-2.9h-2.9v2.9zm-5.8 0h2.9v-2.9H103v2.9zm20.4-2.9h2.9V54h-2.9v2.9zm-11.6 0h2.9V54h-2.9v2.9zm-11.7 0h2.9V54h-2.9v2.9zM88.5 54h2.9v-2.9h-2.9V54zm-3 2.9h8.8v-8.7h-8.8v8.7zm-2.9 2.9h14.6V45.3H82.6v14.5zM85.5 25h8.8v-8.8h-8.8V25zm-2.9 2.9h14.6V13.4H82.6v14.5zm37.9-5.8h2.9v-2.9h-2.9v2.9zm-2.9 2.9h8.7v-8.8h-8.7V25zm-2.9 2.9h14.5V13.4h-14.5v14.5zm-79.9 66v14.9c0 .9 0 .9-.4.9h-3.3c-.3 0-.4-.2-.4-.8.1-10 .1-20 0-30 0-.6.1-.8.4-.8h3.4c.3 0 .3.2.3.8v15zm-12.5 0v15c.1.6 0 .8-.3.8-.7-.1-1.3 0-2 0-.4 0-.4 0-.4-.9V85.2v-6.3c0-.6.1-.8.4-.8.7.1 1.3.1 2 0 .3 0 .3.2.3.8v15zm22.3 0v15c0 .6-.1.8-.4.8-.7 0-1.3-.1-2 0-.3 0-.3-.2-.3-.7V78.8c0-.5 0-.7.3-.7.7.1 1.3 0 2 0 .3 0 .4.2.4.8v15zm5.6 0V79c0-.9 0-.9.4-.9h1.9c.3 0 .4.2.4.7V109c0 .5-.1.7-.4.7h-2c-.3 0-.3-.2-.3-.8v-15zm15.3 0V79.1c0-1 0-1 .4-1h2c.2 0 .3.2.3.7V109c0 .5-.1.7-.3.7h-2c-.3 0-.4-.2-.4-.8v-15zm-8.3 0V79.1c0-1 0-1 .4-1h1.8c.5 0 .5.1.5 1V109c0 .5-.1.7-.4.7h-2c-.3 0-.3-.2-.3-.8v-15zm-40.4 0V79c0-.9 0-.9.4-.9h.7c.2 0 .3.2.2.6v30c0 1 0 1-.4 1-.2 0-.4-.1-.6 0-.2 0-.3-.2-.3-.7V93.9zm12.5 0v14.9c0 .9 0 .9-.4.9h-.7c-.2 0-.3-.2-.3-.5V79c0-.9 0-.9.5-.9h.6c.2 0 .3.2.3.7v15.1zm11.1 0v14.9c0 .9 0 .9-.4.9h-.7c-.2 0-.3-.2-.3-.5V79c0-.9 0-.9.5-.9h.6c.2 0 .3.2.3.7V93.9zm15.3 0v14.9c0 .9 0 .9-.4.9-.2 0-.5 0-.7-.1-.1 0-.2-.2-.2-.4-.1-.1 0-.3 0-.4V79c0-.9 0-.9.4-.9.2 0 .4.1.6 0 .2 0 .3.2.3.7V93.9zm6.9.1v14.9c0 .6 0 .9-.4.8-.3-.1-.7.1-.8-.2-.2-.3-.1-1.2-.1-1.8V79.1c0-1 0-1 .4-1 .9 0 .9 0 .9 1.9v14zm-37.4-.1V79c0-.9 0-.9.4-.9h.6c.2 0 .3.2.3.7v29.9c0 1 0 1-.4 1-.9 0-.9 0-.9-1.8v-14zm11.1 0V79c0-.9 0-.9.4-.9h.6c.2 0 .4.2.4.7v29.9c0 1 0 1-.5 1-.9 0-.9 0-.9-1.8v-14zM14 94v14.8c0 .9 0 .9-.5.9H13c-.2 0-.3-.2-.3-.6V79.2c0-1.1 0-1.1.5-1.1.9 0 .8-.2.8 1.5V94zm33.3-.1v14.9c0 .9 0 .9-.4.9-.8 0-.8 0-.8-1.8V79.1c0-1 0-1 .4-1 .9 0 .8-.2.8 1.6v14.2zm44.7 0v14.9c0 .9 0 .9-.4.9h-3.3c-.3 0-.4-.2-.4-.8v-30c0-.6.1-.8.4-.8h3.3c.3 0 .4.2.4.8v15zm-12.5 0v15c0 .6-.1.8-.4.8-.6-.1-1.3 0-1.9 0-.4 0-.4 0-.4-.9V85.2v-6.3c0-.6 0-.8.3-.8.7.1 1.4.1 2 0 .3 0 .4.2.4.8v15zm22.2 0v15c0 .6 0 .8-.4.8-.6 0-1.3-.1-2 0-.2 0-.3-.2-.3-.7V78.8c0-.5.1-.7.3-.7.7.1 1.4 0 2.1 0 .3 0 .3.2.3.8v15zm5.6 0V79c0-.9 0-.9.4-.9h2c.2 0 .3.2.3.7V109c0 .5 0 .7-.3.7h-2c-.3 0-.4-.2-.4-.8v-15zm15.3 0V79.1c0-1 0-1 .5-1h1.9c.3 0 .3.2.3.7V109c0 .5 0 .7-.3.7h-2c-.3 0-.4-.2-.4-.8v-15zm-8.3 0V79.1c0-1 0-1 .5-1h1.8c.4 0 .4.1.4 1V109c0 .5 0 .7-.3.7h-2c-.3 0-.4-.2-.4-.8v-15zm-40.4 0V79c0-.9 0-.9.4-.9h.7c.2 0 .3.2.3.6v30c0 1 0 1-.5 1-.1 0-.3-.1-.5 0-.3 0-.4-.2-.4-.7V93.9zm12.5 0v14.9c0 .9 0 .9-.4.9h-.7c-.2 0-.2-.2-.2-.5V79c0-.9 0-.9.4-.9h.6c.2 0 .3.2.3.7v15.1zm11.1 0v14.9c0 .9 0 .9-.4.9h-.7c-.1 0-.2-.2-.2-.5V79c0-.9 0-.9.4-.9h.6c.3 0 .3.2.3.7V93.9zm15.4 0v14.9c0 .9-.1.9-.5.9-.2 0-.4 0-.7-.1-.1 0-.1-.2-.2-.4V79c0-.9 0-.9.4-.9.2 0 .4.1.6 0 .3 0 .4.2.4.7-.1 2.8 0 5.6 0 8.3v6.8zm6.9.1v14.9c0 .6-.1.9-.4.8-.3-.1-.7.1-.9-.2-.2-.3-.1-1.2-.1-1.8V79.1c0-1 0-1 .5-1 .9 0 .9 0 .9 1.9v14zm-37.5-.1V79c0-.9 0-.9.4-.9h.6c.3 0 .4.2.4.7v29.9c0 1 0 1-.5 1-.9 0-.9 0-.9-1.8v-14zm11.2 0V79c0-.9 0-.9.4-.9h.6c.2 0 .3.2.3.7v29.9c0 1 0 1-.5 1-.8 0-.8 0-.8-1.8v-14zm-22.4.1v14.8c0 .9 0 .9-.4.9h-.6c-.2 0-.3-.2-.3-.6V79.2c0-1.1 0-1.1.6-1.1.8 0 .7-.2.7 1.5V94zm33.4-.1v14.9c0 .9 0 .9-.4.9-.9 0-.9 0-.9-1.8V79.1c0-1 0-1 .5-1 .9 0 .8-.2.8 1.6v14.2zm55.5-15c0-.6.1-.8.4-.8h3.3c.3 0 .4.2.4.8v30c0 .6-.1.8-.4.8h-3.3c-.4 0-.4 0-.4-.9V93.9v-15zm12.5 0c0-.6.1-.8.3-.8.7 0 1.4.1 2 0 .3 0 .4.2.4.8V108.8c0 .9 0 .9-.4.9-.7 0-1.3-.1-1.9 0-.4 0-.4-.2-.4-.8v-15-15zm-22.3 0c0-.6.1-.8.4-.8.7.1 1.4 0 2 0 .3 0 .4.2.4.7V109c0 .5-.1.7-.4.7-.6-.1-1.3 0-2 0-.3 0-.4-.2-.4-.8v-15-15zm-5.5 30c0 .6-.1.8-.4.8h-2c-.3 0-.4-.2-.4-.7V78.8c0-.5.1-.7.4-.7h1.9c.5 0 .5 0 .5.9v29.9zm-15.3 0c0 .6-.1.8-.4.8h-2c-.3 0-.4-.2-.4-.7V78.8c0-.5.1-.7.4-.7h1.9c.4 0 .4 0 .4 1v14.8c0 5 0 10 .1 15zm8.3 0c0 .6-.1.8-.4.8h-2c-.3 0-.4-.2-.4-.7V79.1c0-.9.1-1 .5-1h1.8c.4 0 .4 0 .4 1v29.8h.1zM178 95.4V109c0 .5 0 .7-.3.7-.2-.1-.4 0-.6 0-.4 0-.4 0-.4-1V79.1v-.4c0-.4.1-.6.3-.6h.6c.4 0 .4 0 .4.9v16.4zm-12.4-10.2v-6.4c0-.5 0-.7.3-.7h.6c.4 0 .4 0 .4.9v30.2c0 .3-.1.5-.3.5h-.6c-.4 0-.4 0-.4-.9V85.2zm-11.2.3v-6.7c0-.5.1-.7.4-.7h.5c.5 0 .5 0 .5.9v30.2c0 .3-.1.5-.3.5h-.7c-.4 0-.4 0-.4-.9V85.5zm-15.3 1.6v-8.3c0-.5.1-.7.4-.7.2.1.3 0 .5 0 .5 0 .5 0 .5.9v30.2c-.1.2-.2.4-.3.4-.2.1-.4.1-.7.1-.4 0-.4 0-.4-.9V87.1zm-6.9-7.1c0-1.9 0-1.9.9-1.9.4 0 .4 0 .4 1v28.6c0 .6.1 1.5 0 1.8-.2.3-.6.1-.9.2-.3.1-.4-.2-.4-.8V80zm37.4 27.9c0 1.8 0 1.8-.8 1.8-.5 0-.5 0-.5-1V78.8c0-.5.1-.7.3-.7h.6c.4 0 .4 0 .4.9v28.9zm-11.1 0c0 1.8 0 1.8-.9 1.8-.4 0-.4 0-.4-1V79.3v-.5c0-.5.1-.7.3-.7h.6c.4 0 .4 0 .4.9v28.9zm22.4-28.3c0-1.7-.1-1.5.7-1.5.5 0 .5 0 .5 1.1v29.9c0 .4 0 .6-.2.6h-.6c-.4 0-.4 0-.4-.9V94 79.6zm2.7-.7c0-.6.1-.8.4-.8h3.4c.2 0 .3.2.3.8v30c0 .6-.1.8-.3.8h-3.3c-.5 0-.5 0-.5-.9V93.9v-15zm12.5 0c0-.6.1-.8.4-.8.7 0 1.3.1 2 0 .3 0 .3.2.3.8V108.8c0 .9 0 .9-.4.9-.6 0-1.3-.1-1.9 0-.3 0-.4-.2-.4-.8v-15-15zm-6.9 6.3v-6.4c0-.5.1-.7.3-.7h.6c.4 0 .4 0 .4.9v30.2c.1.3 0 .5-.2.5h-.7c-.4 0-.4 0-.4-.9V85.2zm4.1 22.7c0 1.8 0 1.8-.9 1.8-.5 0-.5 0-.5-1V78.8c0-.5.2-.7.4-.7h.6c.4 0 .4 0 .4.9v28.9zm-45.8-27.2c0-1.8-.1-1.6.8-1.6.5 0 .5 0 .5 1v28.8c0 1.8 0 1.8-.9 1.8-.4 0-.4 0-.4-.9V94.9 80.7z",
                  fill: "#666",
                })
              )
            );
        return (
          (n.propTypes = {
            width: t.number,
            height: t.number,
            className: t.string,
          }),
          (n.defaultProps = { width: 115, height: 64, className: "" }),
          (wo = n)
        );
      })(),
      i = jo(),
      o = "notification-item";
    class r extends e.PureComponent {
      static isShippingLabelIcon(e) {
        return "notifcenter_shipping_label" === e.value;
      }
      render() {
        const t = this.props,
          s = t.isLowEnd,
          a = t.picture;
        return r.isShippingLabelIcon(a)
          ? e.createElement(n, {
              className: `${o} shippingLabel`,
              width: 160,
              height: 88,
            })
          : e.createElement(
              "div",
              { className: `${o}__image` },
              e.createElement(i, {
                isLowEnd: s,
                src: a.value,
                className: `${o} eventImage`,
              })
            );
      }
    }
    return (
      (r.defaultProps = { isLowEnd: !1, picture: null }),
      (r.propTypes = {
        isLowEnd: t.bool,
        picture: t.shape({ value: t.string }),
      }),
      (ko = r)
    );
  }
  function $o() {
    if (To) return xo;
    To = 1;
    var e,
      t = Object.create,
      n = Object.defineProperty,
      i = Object.getOwnPropertyDescriptor,
      o = Object.getOwnPropertyNames,
      r = Object.getPrototypeOf,
      s = Object.prototype.hasOwnProperty,
      a = (e, t, r, a) => {
        if ((t && "object" == typeof t) || "function" == typeof t)
          for (let l of o(t))
            s.call(e, l) ||
              l === r ||
              n(e, l, {
                get: () => t[l],
                enumerable: !(a = i(t, l)) || a.enumerable,
              });
        return e;
      },
      l = (e, i, o) => (
        (o = null != e ? t(r(e)) : {}),
        a(
          !i && e && e.__esModule
            ? o
            : n(o, "default", { value: e, enumerable: !0 }),
          e
        )
      ),
      c = (e, t, i) =>
        ((e, t, i) =>
          t in e
            ? n(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i),
      u = {};
    ((e, t) => {
      for (var i in t) n(e, i, { get: t[i], enumerable: !0 });
    })(u, {
      InView: () => b,
      defaultFallbackInView: () => _,
      observe: () => g,
      useInView: () => w,
    }),
      (e = u),
      (xo = a(n({}, "__esModule", { value: !0 }), e));
    var h = l(zo),
      d = new Map(),
      p = new WeakMap(),
      f = 0,
      m = void 0;
    function _(e) {
      m = e;
    }
    function v(e) {
      return Object.keys(e)
        .sort()
        .filter((t) => void 0 !== e[t])
        .map((t) => {
          return `${t}_${
            "root" === t
              ? ((n = e.root),
                n
                  ? (p.has(n) || ((f += 1), p.set(n, f.toString())), p.get(n))
                  : "0")
              : e[t]
          }`;
          var n;
        })
        .toString();
    }
    function g(e, t, n = {}, i = m) {
      if (void 0 === window.IntersectionObserver && void 0 !== i) {
        const o = e.getBoundingClientRect();
        return (
          t(i, {
            isIntersecting: i,
            target: e,
            intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
            time: 0,
            boundingClientRect: o,
            intersectionRect: o,
            rootBounds: o,
          }),
          () => {}
        );
      }
      const {
          id: o,
          observer: r,
          elements: s,
        } = (function (e) {
          const t = v(e);
          let n = d.get(t);
          if (!n) {
            const i = new Map();
            let o;
            const r = new IntersectionObserver((t) => {
              t.forEach((t) => {
                var n;
                const r =
                  t.isIntersecting && o.some((e) => t.intersectionRatio >= e);
                e.trackVisibility &&
                  void 0 === t.isVisible &&
                  (t.isVisible = r),
                  null == (n = i.get(t.target)) ||
                    n.forEach((e) => {
                      e(r, t);
                    });
              });
            }, e);
            (o =
              r.thresholds ||
              (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
              (n = { id: t, observer: r, elements: i }),
              d.set(t, n);
          }
          return n;
        })(n),
        a = s.get(e) || [];
      return (
        s.has(e) || s.set(e, a),
        a.push(t),
        r.observe(e),
        function () {
          a.splice(a.indexOf(t), 1),
            0 === a.length && (s.delete(e), r.unobserve(e)),
            0 === s.size && (r.disconnect(), d.delete(o));
        }
      );
    }
    var b = class extends h.Component {
        constructor(e) {
          super(e),
            c(this, "node", null),
            c(this, "_unobserveCb", null),
            c(this, "handleNode", (e) => {
              this.node &&
                (this.unobserve(),
                e ||
                  this.props.triggerOnce ||
                  this.props.skip ||
                  this.setState({
                    inView: !!this.props.initialInView,
                    entry: void 0,
                  })),
                (this.node = e || null),
                this.observeNode();
            }),
            c(this, "handleChange", (e, t) => {
              e && this.props.triggerOnce && this.unobserve(),
                (function (e) {
                  return "function" != typeof e.children;
                })(this.props) || this.setState({ inView: e, entry: t }),
                this.props.onChange && this.props.onChange(e, t);
            }),
            (this.state = { inView: !!e.initialInView, entry: void 0 });
        }
        componentDidMount() {
          this.unobserve(), this.observeNode();
        }
        componentDidUpdate(e) {
          (e.rootMargin === this.props.rootMargin &&
            e.root === this.props.root &&
            e.threshold === this.props.threshold &&
            e.skip === this.props.skip &&
            e.trackVisibility === this.props.trackVisibility &&
            e.delay === this.props.delay) ||
            (this.unobserve(), this.observeNode());
        }
        componentWillUnmount() {
          this.unobserve();
        }
        observeNode() {
          if (!this.node || this.props.skip) return;
          const {
            threshold: e,
            root: t,
            rootMargin: n,
            trackVisibility: i,
            delay: o,
            fallbackInView: r,
          } = this.props;
          this._unobserveCb = g(
            this.node,
            this.handleChange,
            {
              threshold: e,
              root: t,
              rootMargin: n,
              trackVisibility: i,
              delay: o,
            },
            r
          );
        }
        unobserve() {
          this._unobserveCb &&
            (this._unobserveCb(), (this._unobserveCb = null));
        }
        render() {
          const { children: e } = this.props;
          if ("function" == typeof e) {
            const { inView: t, entry: n } = this.state;
            return e({ inView: t, entry: n, ref: this.handleNode });
          }
          const {
            as: t,
            triggerOnce: n,
            threshold: i,
            root: o,
            rootMargin: r,
            onChange: s,
            skip: a,
            trackVisibility: l,
            delay: c,
            initialInView: u,
            fallbackInView: d,
            ...p
          } = this.props;
          return h.createElement(t || "div", { ref: this.handleNode, ...p }, e);
        }
      },
      y = l(zo);
    function w({
      threshold: e,
      delay: t,
      trackVisibility: n,
      rootMargin: i,
      root: o,
      triggerOnce: r,
      skip: s,
      initialInView: a,
      fallbackInView: l,
      onChange: c,
    } = {}) {
      var u;
      const [h, d] = y.useState(null),
        p = y.useRef(),
        [f, m] = y.useState({ inView: !!a, entry: void 0 });
      (p.current = c),
        y.useEffect(() => {
          if (s || !h) return;
          let a;
          return (
            (a = g(
              h,
              (e, t) => {
                m({ inView: e, entry: t }),
                  p.current && p.current(e, t),
                  t.isIntersecting && r && a && (a(), (a = void 0));
              },
              {
                root: o,
                rootMargin: i,
                threshold: e,
                trackVisibility: n,
                delay: t,
              },
              l
            )),
            () => {
              a && a();
            }
          );
        }, [Array.isArray(e) ? e.toString() : e, h, o, i, r, s, n, l, t]);
      const _ = null == (u = f.entry) ? void 0 : u.target,
        v = y.useRef();
      h ||
        !_ ||
        r ||
        s ||
        v.current === _ ||
        ((v.current = _), m({ inView: !!a, entry: void 0 }));
      const b = [d, f.inView, f.entry];
      return (b.ref = b[0]), (b.inView = b[1]), (b.entry = b[2]), b;
    }
    return xo;
  }
  function Uo() {
    if (Oo) return Co;
    Oo = 1;
    var e = Ai(),
      t = Fi();
    function n(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function i(e) {
      for (var i = 1; i < arguments.length; i++) {
        var o = null != arguments[i] ? arguments[i] : {};
        i % 2
          ? n(Object(o), !0).forEach(function (n) {
              t(e, n, o[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
          : n(Object(o)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(o, t)
              );
            });
      }
      return e;
    }
    const o = zo,
      r = Po(),
      s = Ho(),
      a = (function () {
        if (ro) return oo;
        ro = 1;
        var e = Ai();
        const t = zo,
          n = Po(),
          i = Do(),
          o = (e) => {
            const n = e.position,
              i = e.length,
              o = e.color;
            return t.createElement("div", {
              className: "progressBar",
              style: { left: `${n}%`, width: `${i}%`, backgroundColor: o },
            });
          };
        o.propTypes = {
          color: n.string.isRequired,
          length: n.number.isRequired,
          position: n.number.isRequired,
        };
        const r = (e) => {
          const n = e.position,
            i = e.color;
          return t.createElement("div", {
            className: "dot",
            style: { left: `${n}%`, backgroundColor: i },
          });
        };
        r.propTypes = {
          color: n.string.isRequired,
          position: n.number.isRequired,
        };
        const s = (e) => {
          const n = e.position,
            o = e.color,
            r = e.label,
            s = 100 === n,
            a = r ? /color="(.*?)"/g.exec(r)[1] : o,
            l = r ? i(r) : null,
            c = "#dddddd" !== o ? `solid 2px ${o}` : null,
            u = c ? 4 : 3;
          return t.createElement(
            "div",
            {
              className: "node",
              style: {
                top: c ? "-1px" : null,
                left: n ? `calc(${n}% - ${u}px)` : 0,
                backgroundColor: o,
                border: c,
              },
            },
            l
              ? t.createElement(
                  "span",
                  {
                    className: "dataLabel",
                    style: { right: s ? 0 : null, color: a },
                  },
                  " ",
                  l,
                  " "
                )
              : null
          );
        };
        (s.defaultProps = { label: null }),
          (s.propTypes = {
            color: n.string.isRequired,
            label: n.string,
            position: n.number.isRequired,
          });
        class a extends t.PureComponent {
          render() {
            const n = { node_circle: s, bar: o, node_dot: r };
            return t.createElement(
              "div",
              { className: "progressBarContainer" },
              this.props.trackingData.map((i, o) => {
                const r = n[i.type];
                return t.createElement(r, e({}, i, { key: o.toString() }));
              })
            );
          }
        }
        return (a.propTypes = { trackingData: n.array.isRequired }), (oo = a);
      })(),
      l = (function () {
        if (co) return lo;
        co = 1;
        var e = Fi();
        function t(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, i);
          }
          return n;
        }
        function n(n) {
          for (var i = 1; i < arguments.length; i++) {
            var o = null != arguments[i] ? arguments[i] : {};
            i % 2
              ? t(Object(o), !0).forEach(function (t) {
                  e(n, t, o[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
              : t(Object(o)).forEach(function (e) {
                  Object.defineProperty(
                    n,
                    e,
                    Object.getOwnPropertyDescriptor(o, e)
                  );
                });
          }
          return n;
        }
        const i = zo,
          o = Po(),
          r = Io(),
          s = "notification-item-button";
        class a extends i.PureComponent {
          constructor() {
            super(),
              (this.animationEnd = this.animationEnd.bind(this)),
              (this.handleMouseDown = this.handleMouseDown.bind(this)),
              (this.handleMouseUp = this.handleMouseUp.bind(this)),
              (this.handleClick = this.handleClick.bind(this)),
              (this.state = { clicks: [] });
          }
          handleMouseDown(e) {
            const t = e.currentTarget.getBoundingClientRect(),
              n = e.targetTouches[0].clientX - t.left,
              i = e.targetTouches[0].clientY - t.top,
              o = this.state.clicks.slice();
            o.push({
              id: o.length + Math.random(),
              active: !0,
              x: n,
              y: i,
              w: t.width,
            }),
              this.setState({ clicks: o });
          }
          handleMouseUp() {
            let e = this.state.clicks.slice();
            (e = e.map((e) => ((e.active = !1), e))),
              this.setState({ clicks: e });
          }
          handleClick(e) {
            e.stopPropagation(),
              e.preventDefault(),
              void 0 !== window.melidata &&
                (melidata("cleanAndSend", "event", {
                  path: this.props.path,
                  data: this.props.eventData,
                }),
                this.props.real_time_tracking_event &&
                  r(
                    this.props.path,
                    n(n({}, this.props.eventData), {
                      event_type: "action_open",
                    })
                  )),
              this.props.action && this.props.action(),
              this.props.href &&
                (e.metaKey || e.ctrlKey || 2 === e.which
                  ? window.open(this.props.href, "_blank")
                  : window.location.assign(this.props.href));
          }
          animationEnd(e) {
            e.stopPropagation();
            const t = this.state.clicks.slice();
            t.shift(), this.setState({ clicks: t });
          }
          render() {
            const e = this.props,
              t = e.background,
              n = e.color,
              o = e.rippleColor,
              r = {
                color: n || null,
                fontWeight: this.props.light ? 300 : null,
              },
              a = { backgroundColor: t || null };
            return i.createElement(
              "button",
              {
                style: r,
                onTouchStart: this.handleMouseDown,
                onTouchEnd: this.handleMouseUp,
                onClick: this.handleClick,
                className: `${s} button-container ${
                  null !== this.props.className ? this.props.className : ""
                }`,
              },
              this.props.label,
              this.state.clicks.map((e) => {
                const t = {
                  left: e.x,
                  top: e.y,
                  width: e.w / 2,
                  height: e.w / 2,
                  opacity: e.active ? 0.66 : 0,
                  backgroundColor: o || null,
                };
                return i.createElement("div", {
                  key: e.id,
                  style: t,
                  className: `${s} ripple`,
                  onTransitionEnd: this.animationEnd,
                });
              }),
              t
                ? i.createElement("div", {
                    className: `${s} withBackground`,
                    style: a,
                  })
                : null
            );
          }
        }
        return (
          (a.propTypes = {
            label: o.string.isRequired,
            href: o.string,
            action: o.func,
            background: o.string,
            color: o.string,
            rippleColor: o.string,
            light: o.bool,
            className: o.string,
            path: o.string.isRequired,
            eventData: o.object.isRequired,
            real_time_tracking_event: o.bool,
          }),
          (a.defaultProps = {
            href: "",
            action: null,
            background: null,
            color: null,
            rippleColor: null,
            light: !1,
            className: null,
            path: "",
            eventData: {},
            real_time_tracking_event: !1,
          }),
          (lo = a)
        );
      })(),
      c = (function () {
        if (ho) return uo;
        ho = 1;
        const e = zo,
          t = Po(),
          n = (t) =>
            e.createElement(
              "svg",
              {
                className: t.className,
                style: t.style,
                width: t.width,
                height: t.height,
                viewBox: "0 0 20 20",
              },
              e.createElement("path", {
                d: "m 8,18 c 0,1 1,2 2,2 1,0 2,-1 2,-2 z M 9,1 9,2 C 6,2.5 4,5 4,8 l 0,6 -3,3 18,0 -3,-3 0,-6 c 0,-3 -2,-5.5 -5,-6 l 0,-1 c 0,-1 -0.5,-1 -1,-1 C 9.5,0 9,0 9,1 Z",
              })
            );
        return (
          (n.propTypes = {
            width: t.number,
            height: t.number,
            className: t.string,
            style: t.object,
          }),
          (n.defaultProps = {
            width: 20,
            height: 20,
            className: "",
            style: {},
          }),
          (uo = n)
        );
      })(),
      u = (function () {
        if (fo) return po;
        fo = 1;
        const e = zo,
          t = Po(),
          n = (t) =>
            e.createElement(
              "svg",
              {
                className: t.className,
                width: t.width,
                height: t.height,
                viewBox: "0 0 75 67",
              },
              e.createElement(
                "defs",
                null,
                e.createElement("path", {
                  id: "path-1",
                  d: "m4.1667 29.338h66.666v33.063c0 2.54-2.068 4.599-4.608 4.599h-57.45c-2.545 0-4.6083-2.052-4.6083-4.599v-33.063z",
                }),
                e.createElement(
                  "mask",
                  {
                    id: "mask-2",
                    maskContentUnits: "userSpaceOnUse",
                    height: "37.6615385",
                    width: "66.6666667",
                    y: "0",
                    x: "0",
                    maskUnits: "objectBoundingBox",
                    fill: "white",
                  },
                  e.createElement("use", { xlinkHref: "#path-1" })
                )
              ),
              e.createElement(
                "g",
                { fillRule: "evenodd", fill: "none" },
                e.createElement("use", {
                  xlinkHref: "#path-1",
                  stroke: "#979797",
                  strokeWidth: "2.3",
                  mask: "url(#mask-2)",
                }),
                e.createElement("path", {
                  fillRule: "nonzero",
                  fill: "#979797",
                  d: "m1.15 20.133v7.949c0 0.638 0.5157 1.153 1.1562 1.153h70.388c0.639 0 1.156-0.516 1.156-1.153v-7.949c0-0.638-0.516-1.152-1.156-1.152h-70.388c-0.6392 0-1.156 0.516-1.156 1.152zm-1.15 0c0-1.271 1.0317-2.302 2.3062-2.302h70.388c1.273 0 2.306 1.027 2.306 2.302v7.949c0 1.272-1.032 2.303-2.306 2.303h-70.388c-1.2735 0-2.306-1.028-2.306-2.303v-7.949z",
                }),
                e.createElement("path", {
                  fillRule: "nonzero",
                  fill: "#999",
                  d: "m41.864 16.774c2.842-0.703 6.277-1.588 10.314-2.67 3.058-0.82 4.924-2.124 5.841-3.762 0.726-1.2978 0.804-2.6872 0.498-3.9658-0.06-0.2492-0.118-0.424-0.177-0.5853-0.029-0.1169-0.105-0.3444-0.24-0.6448-0.227-0.5087-0.536-1.0184-0.936-1.493-1.66-1.9679-4.314-2.7688-8.317-1.6964-3.26 0.8737-5.723 3.6951-7.478 7.8878-0.765 1.8285-1.342 3.7925-1.755 5.7585-0.136 0.647-0.245 1.251-0.329 1.797 0.736-0.175 1.585-0.38 2.579-0.626zm-3.731 0.557c0.089-0.594 0.206-1.254 0.356-1.965 0.427-2.031 1.023-4.064 1.819-5.9656 1.879-4.4882 4.569-7.5705 8.242-8.5546 4.428-1.1864 7.542-0.24675 9.493 2.0659 0.814 0.9648 1.246 1.9303 1.387 2.523 0.055 0.135 0.131 0.3648 0.205 0.6739 0.368 1.5356 0.273 3.2106-0.613 4.7944-1.079 1.93-3.206 3.417-6.547 4.312-4.043 1.083-7.486 1.97-10.335 2.675-0.998 0.247-1.851 0.454-2.559 0.621-0.426 0.101-0.709 0.167-0.851 0.199-0.385 0.087-0.741-0.23-0.699-0.621 0.015-0.142 0.048-0.4 0.102-0.758z",
                }),
                e.createElement("path", {
                  fillRule: "nonzero",
                  fill: "#979797",
                  d: "m38.986 18.013c0.042 0.392-0.314 0.709-0.699 0.622-0.142-0.032-0.425-0.098-0.851-0.199-0.708-0.168-1.561-0.374-2.559-0.621-2.849-0.705-6.292-1.592-10.335-2.675-3.341-0.896-5.468-2.382-6.547-4.312-0.886-1.5841-0.981-3.2591-0.613-4.7946 0.074-0.3092 0.15-0.539 0.179-0.5962 0.167-0.6704 0.599-1.6359 1.413-2.6007 1.951-2.3127 5.065-3.2524 9.493-2.0659 3.673 0.9841 6.363 4.0663 8.242 8.5545 0.796 1.9019 1.393 3.9349 1.819 5.9659 0.15 0.711 0.267 1.371 0.356 1.965 0.054 0.358 0.087 0.616 0.102 0.757zm-1.583-2.485c-0.413-1.966-0.99-3.93-1.755-5.7588-1.755-4.1926-4.218-7.0141-7.478-7.8878-4.002-1.0724-6.657-0.2715-8.317 1.6965-0.4 0.4746-0.709 0.9843-0.936 1.493-0.135 0.3004-0.211 0.5278-0.265 0.7225-0.034 0.0835-0.092 0.2584-0.152 0.5075-0.306 1.2786-0.228 2.668 0.498 3.9661 0.917 1.638 2.783 2.942 5.841 3.762 4.037 1.081 7.472 1.967 10.314 2.67 0.995 0.246 1.843 0.451 2.548 0.618-0.053-0.538-0.162-1.142-0.298-1.789z",
                }),
                e.createElement("path", {
                  fill: "#999",
                  d: "m25.914 44.197c0-2.863 1.979-5.056 4.933-5.056 2.985 0 4.995 2.193 4.995 5.056 0 2.832-2.01 4.994-4.995 4.994-2.954 0-4.933-2.162-4.933-4.994zm3.015 15.562l12.973-20.313h1.857l-13.003 20.313h-1.827zm4.811-15.562c0-1.888-1.187-3.259-2.893-3.259-1.675 0-2.863 1.371-2.863 3.259 0 1.827 1.188 3.228 2.863 3.228 1.706 0 2.893-1.401 2.893-3.228zm2.924 10.933c0-2.863 2.01-5.056 4.964-5.056s4.964 2.193 4.964 5.056c0 2.832-2.01 4.994-4.964 4.994s-4.964-2.162-4.964-4.994zm7.857 0c0-1.888-1.188-3.259-2.893-3.259-1.706 0-2.893 1.371-2.893 3.259 0 1.857 1.187 3.228 2.893 3.228 1.705 0 2.893-1.371 2.893-3.228z",
                }),
                e.createElement("path", {
                  fillRule: "nonzero",
                  fill: "#979797",
                  d: "m33.442 29.235h10.2v-10.254h-10.2v10.254zm-1.15-11.404h12.5v12.554h-12.5v-12.554z",
                })
              )
            );
        return (
          (n.propTypes = {
            width: t.number,
            height: t.number,
            className: t.string,
          }),
          (n.defaultProps = { width: 75, height: 67, className: "" }),
          (po = n)
        );
      })(),
      h = (function () {
        if (yo) return bo;
        yo = 1;
        const e = zo,
          t = Po(),
          n = jo(),
          i = "notification-item";
        class o extends e.PureComponent {
          constructor(e) {
            super(e), (this.state = { loaded: !1 });
          }
          render() {
            const t = this.props.isLowEnd,
              o = this.props.thumbnail,
              r = this.props.thumbnails;
            if (r && r.length > 1) {
              const o = r.length,
                s = o > 4 ? r.slice(0, 3) : r;
              return e.createElement(
                "div",
                { className: `${i} imageHolder` },
                s.map((o, r) =>
                  e.createElement(n, {
                    key: o + "_" + r,
                    isLowEnd: t,
                    src: o,
                    className: `${i} thumbnailsGrid`,
                  })
                ),
                o > 4
                  ? e.createElement(
                      "span",
                      { className: `${i} thumbnailsExceed` },
                      o - 3
                    )
                  : null
              );
            }
            return e.createElement(n, {
              isLowEnd: t,
              src: null !== o ? o : r ? r[0] : null,
              className: `${i}__img`,
              width: 60,
              height: 60,
            });
          }
        }
        return (
          (o.propTypes = {
            isLowEnd: t.bool,
            thumbnails: t.array,
            altText: t.string,
            className: t.string,
          }),
          (o.defaultProps = {
            isLowEnd: !1,
            thumbnails: null,
            altText: "",
            className: "",
          }),
          (bo = o)
        );
      })(),
      d = Vo(),
      p = Do(),
      f = $o().InView,
      m = Io(),
      _ = "notification-item",
      v = (e) => (e ? `/notification_center/${e}` : "/notification_center"),
      g = function (e) {
        return w(
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          e,
          null,
          "open"
        );
      },
      b = function () {
        return w(
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          null,
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          "action_open"
        );
      },
      y = function () {
        return w(
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          null,
          "shown"
        );
      },
      w = function () {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          n =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "open",
          o = i(
            i(
              {},
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            ),
            { event_type: n }
          );
        return (
          delete o.type,
          t
            ? ((o.deeplink = t.deeplink), (o.action_type = t.id))
            : (o.deeplink = e),
          o
        );
      };
    class E extends o.Component {
      render() {
        return o.Children.only(this.props.children);
      }
    }
    const k =
      "undefined" != typeof window && window.IntersectionObserver ? f : E;
    class S extends o.PureComponent {
      constructor(e) {
        super(e), (this.handleClick = this.handleClick.bind(this));
      }
      handleClick(e) {
        e.stopPropagation(), e.preventDefault();
        const t = this.props.track;
        if (
          (void 0 !== window.melidata &&
            (melidata("cleanAndSend", "event", {
              path: v(t.type),
              data: g(this.props.deeplink, t),
            }),
            this.props.real_time_tracking_event &&
              (window.location.href.split(".")[1],
              m(v(t.type), i(i({}, t), { event_type: "open" })))),
          !this.props.isOptin)
        ) {
          const t = this.props.action_url
            ? this.props.action_url
            : this.props.deeplink;
          this.props.action_url &&
          this.props.inboxSidebarEnabled &&
          (this.props.action_url.includes("/preguntas/vendedor/") ||
            this.props.action_url.includes("/questions") ||
            this.props.action_url.includes("/perguntas/vendedor")) &&
          this.props.action_url.includes("open_widget=true")
            ? document.dispatchEvent(
                new CustomEvent("INBOX_SIDEBAR_TOGGLE", {
                  detail: this.props.action_url,
                })
              )
            : t &&
              (e.metaKey || e.ctrlKey || 2 === e.which
                ? window.open(t, "_blank")
                : window.location.assign(t));
        }
      }
      render() {
        const t = this.props,
          n = t.text,
          r = t.handleOptInActions,
          f = t.thumbnail,
          g = t.thumbnails,
          w = t.isOptin,
          E = t.bullets,
          S = t.shipping_tracking,
          x = t.actions,
          T = t.fixed,
          C = t.title,
          O = t.isLowEnd,
          N = t.type,
          L = t.picture,
          z = t.className,
          A = t.track,
          M = t.date_detail,
          R = x && x.length > 0,
          P = v(A.type),
          D = { WebkitLineClamp: C.lines },
          H = { WebkitLineClamp: n ? n.lines : 3 };
        return o.createElement(
          k,
          {
            className: _,
            onChange: (e) => {
              e &&
                (function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                  void 0 !== window.melidata &&
                    (melidata("cleanAndSend", "event", {
                      path: v(t.type),
                      data: y(e, t),
                    }),
                    n && m(v(t.type), i(i({}, t), { event_type: "shown" })));
                })(this.props.deeplink, A, this.props.real_time_tracking_event);
            },
            threshold: 0.8,
            triggerOnce: !0,
          },
          o.createElement(
            "a",
            {
              className: `${_}__link ${z}`,
              href: w
                ? null
                : this.props.action
                ? this.props.action
                : this.props.deeplink,
              onClick: this.handleClick,
            },
            o.createElement(
              "span",
              { className: `${_}__custom` },
              w
                ? o.createElement(
                    "div",
                    { className: `${_}__optinIcon` },
                    o.createElement(c, { height: 30, width: 30 })
                  )
                : ("picture" === N && !f && !g) || "notifcenter_deal" === f
                ? o.createElement(u, { className: "icon" })
                : o.createElement(h, {
                    isLowEnd: O,
                    thumbnail: f,
                    thumbnails: g,
                    className: `${_}__img`,
                  }),
              o.createElement(
                "div",
                { className: `${_}__data` },
                o.createElement(
                  "div",
                  { className: `${_}__title-with-date` },
                  o.createElement(
                    "h2",
                    { className: `${_}__title`, style: D },
                    p(C.value)
                  ),
                  M
                    ? o.createElement(
                        "span",
                        { className: `${_}__date-detail` },
                        M
                      )
                    : null
                ),
                S ? o.createElement(a, { trackingData: S }) : null,
                n
                  ? o.createElement(
                      "p",
                      { className: "text", style: H },
                      p(n.value)
                    )
                  : null,
                L ? o.createElement(d, { isLowEnd: O, picture: L }) : null,
                E
                  ? E.map((t, n) =>
                      o.createElement(
                        s,
                        e({}, t, {
                          noBullet: !t.icon,
                          key: t.text.value,
                          className: `${
                            (E.length > 1 && 0 === n && t.icon) ||
                            (E.length > 2 && 1 === n && !E[0].icon)
                              ? " firstBullet"
                              : ""
                          }${E.length === n + 1 ? " lastBullet" : ""}${
                            1 === E.length ? " oneBullet" : ""
                          }`,
                        })
                      )
                    )
                  : null,
                R
                  ? o.createElement(
                      "span",
                      {
                        className: "actionButtons",
                        style: { marginLeft: T ? 0 : null },
                      },
                      x.map((e, t) =>
                        o.createElement(l, {
                          label: e.label,
                          background: w && 0 === t ? "#3483fa" : null,
                          color: w && 0 === t ? "#ffffff" : null,
                          rippleColor: w && 0 === t ? "#7CC7FF" : null,
                          key: e.label,
                          action: w ? r.bind(this, t) : null,
                          href: w ? null : e.deeplink,
                          path: P,
                          eventData: b(A, e),
                          real_time_tracking_event:
                            this.props.real_time_tracking_event,
                        })
                      )
                    )
                  : null
              ),
              o.createElement("div", { className: "clear" })
            )
          )
        );
      }
    }
    return (
      (S.defaultProps = {
        action: null,
        action_url: null,
        actions: null,
        bullets: null,
        deeplink: null,
        fixed: !1,
        isOptin: !1,
        picture: null,
        text: null,
        thumbnail: null,
        thumbnails: null,
        shipping_tracking: null,
        handleOptInActions: null,
        className: "",
        track: {},
        date_detail: null,
        real_time_tracking_event: !1,
      }),
      (S.propTypes = {
        action: r.string,
        action_url: r.string,
        actions: r.array,
        bullets: r.array,
        deeplink: r.string,
        fixed: r.bool,
        isLowEnd: r.bool.isRequired,
        isOptin: r.bool,
        picture: r.object,
        shipping_tracking: r.array,
        text: r.object,
        thumbnail: r.string,
        thumbnails: r.array,
        title: r.object.isRequired,
        type: r.string.isRequired,
        handleOptInActions: r.func,
        className: r.string,
        track: r.object.isRequired,
        date_detail: r.string,
        real_time_tracking_event: r.bool,
      }),
      (Co = S)
    );
  }
  var Bo = (function () {
      if (Lo) return No;
      Lo = 1;
      const e = Uo();
      return (No = e);
    })(),
    Fo = i(Bo);
  class qo extends je {
    constructor() {
      super(...arguments);
    }
    render() {
      const e = this.getProps();
      var t;
      ((t = this.el),
      {
        render: function (e) {
          ri(e, t);
        },
        unmount: function () {
          Ei(t);
        },
      }).render(
        Oi.createElement(
          Fo,
          et({}, e, {
            className:
              "modeless-box-item " +
              (e.watched ? "" : " modeless-box-notification-unread"),
          })
        )
      ),
        this.el.insertAdjacentHTML(
          "beforeend",
          Ce.sanitize(
            `<button data-js="modeless-box-remove" class="modeless-box-remove" tabindex="-1">\n          ${De(
              "bookmarks",
              "delete"
            )}\n        </button>`,
            { RETURN_TRUSTED_TYPE: !0 }
          )
        ),
        setTimeout(() => {
          this.adjustDelete();
        }, 50);
    }
    adjustDelete() {
      const e = this.el.querySelector("h2"),
        t = this.el.querySelector(".modeless-box-remove"),
        n = `${e.clientHeight}px`;
      (t.style.height = n), (t.style.lineHeight = n);
    }
    getProps() {
      return {
        action_url: this._model.deeplink,
        deeplink: this._model.deeplink,
        isOutdated: !1,
        isOptin: !1,
        type: this._model.type,
        fixed: !1,
        title: this._model.content_data.title,
        text: this._model.content_data.text,
        actions: this._model.content_data.actions,
        action: this._model.content_data.action,
        bullets: this._model.content_data.bullets,
        picture: this._model.content_data.picture,
        thumbnail: this._model.content_data.thumbnail,
        thumbnails: this._model.content_data.thumbnails,
        shipping_tracking: this._model.content_data.shipping_tracking,
        watched: this._model.watched,
        track: this._model.track,
        inboxSidebarEnabled: this.inboxSidebarEnabled,
        date_detail: this._model.content_data.date_detail,
        real_time_tracking_event: this._model.real_time_tracking_event,
      };
    }
  }
  function Wo(e) {
    return `\n    <div class="thumbnail">\n      ${e}\n    </div>\n  `;
  }
  function Go(e) {
    return Wo(`<img alt="${e.alt}" src="${e.x1}" />`);
  }
  var Yo = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const t = e.list,
      n = e.more_items_label;
    if (t && t.length > 0) {
      let e = "";
      for (let n = 0; n < t.length; n += 1) e += Go(t[n]);
      return (
        n &&
          (e += (function (e) {
            return Wo(`<span class="thumbnail__label">${e}</span>`);
          })(n)),
        `\n    <div class="thumbnail-container">\n      ${e}\n    </div>\n    `
      );
    }
    return "";
  };
  function Ko(e, t) {
    if (null == e) return {};
    var n,
      i,
      o = (function (e, t) {
        if (null == e) return {};
        var n = {};
        for (var i in e)
          if ({}.hasOwnProperty.call(e, i)) {
            if (-1 !== t.indexOf(i)) continue;
            n[i] = e[i];
          }
        return n;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (i = 0; i < r.length; i++)
        (n = r[i]),
          -1 === t.indexOf(n) &&
            {}.propertyIsEnumerable.call(e, n) &&
            (o[n] = e[n]);
    }
    return o;
  }
  const Zo = ["text"],
    Xo = "styled-label";
  const Jo = ["type", "id"],
    Qo = "text",
    er = "icon",
    tr = "supermarket",
    nr = "RIGHT_ARROW_ICON",
    ir = (e, t) => {
      switch (e) {
        case tr:
          return '\n  <svg class="cpg-icon" width="118" height="10" viewBox="0 0 118 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M85.7962 8.13043C84.7038 9.55072 83.129 10 81.8947 10C79.2842 10 77.2412 8.30435 77.2412 5.66667C77.2412 2.24638 79.8091 0 82.7459 0C85.0585 0 86.3921 1.27536 86.9454 2.73913L85.0159 3.4058C84.6471 2.37681 83.7391 1.82609 82.6466 1.82609C80.859 1.82609 79.3551 3.4058 79.3551 5.53623C79.3551 7.04348 80.3766 8.17391 82.0082 8.17391C82.8169 8.17391 83.6965 7.73913 84.2356 7.05797L85.7962 8.13043ZM8.01591 6.68116C8.01591 8.44928 6.62554 10 4.28461 10C2.42605 10 0.794497 9.26087 0 8.18841L1.2485 6.66667C1.90112 7.56522 3.13543 8.17391 4.44067 8.17391C5.46217 8.17391 5.8736 7.57971 5.8736 7.08696C5.8736 6.5287 5.09932 6.24301 4.18533 5.90578C2.86891 5.42006 1.26268 4.82742 1.26268 3.15942C1.26268 1.56522 2.63887 0.0144928 4.96561 0.0144928C6.46948 0.0144928 7.88822 0.57971 8.73947 1.57971L7.47679 3.05797C6.76741 2.21739 5.61823 1.82609 4.65348 1.82609C3.92992 1.82609 3.3908 2.26087 3.3908 2.78261C3.3908 3.2891 4.13712 3.56641 5.03016 3.89824C6.36029 4.39247 8.01591 5.00765 8.01591 6.68116ZM18.2971 5.95652C17.8005 8.30435 16.6088 10 13.8138 10C11.104 10 9.69949 8.63768 9.69949 6.62319C9.69949 6.43478 9.74205 6.11594 9.77042 5.95652L11.0189 0.15942H13.0619L11.8276 5.91304C11.7992 6 11.7709 6.18841 11.7709 6.3913C11.785 7.36232 12.4802 8.18841 13.8138 8.18841C15.261 8.18841 15.9703 7.26087 16.2683 5.91304L17.5026 0.15942H19.5598L18.2971 5.95652ZM21.598 9.82609L22.35 6.37681H24.7193C27.6844 6.37681 28.635 4.27536 28.635 2.84058C28.635 1.37681 27.5142 0.15942 25.9961 0.15942H21.669L19.5834 9.82609H21.598ZM22.733 4.56522H24.847C25.8543 4.56522 26.5353 3.91304 26.5353 3.05797C26.5353 2.42029 26.0529 1.97101 25.3577 1.97101H23.3005L22.733 4.56522ZM35.3835 9.82609L35.7666 8.01449H31.0989L31.5671 5.81159H36.1496L36.5327 4H31.9643L32.4041 1.97101H37.0718L37.4691 0.15942H30.7726L28.687 9.82609H35.3835ZM39.9471 6.3913L39.2094 9.82609H37.1948L39.2803 0.15942H43.3237C44.856 0.15942 46.2464 1.2029 46.2464 2.88406C46.2464 4.62319 45.083 5.95652 43.5507 6.24638L44.8702 9.82609H42.6286L41.5077 6.3913H39.9471ZM42.4583 4.57971H40.3444L40.9119 1.97101H42.9407C43.5649 1.97101 44.1466 2.43478 44.1466 3.08696C44.1466 3.95652 43.5082 4.57971 42.4583 4.57971ZM50.0722 2.85507L48.5684 9.82609H46.5537L48.6393 0.15942H51.3917L52.3848 6.2029L55.9884 0.15942H58.8968L56.8113 9.82609H54.7825L56.2863 2.85507L52.1152 9.82609H51.2356L50.0722 2.85507ZM65.617 9.82609L66 8.01449H61.3323L61.8005 5.81159H66.3831L66.7661 4H62.1978L62.6376 1.97101H67.3053L67.7025 0.15942H61.006L58.9205 9.82609H65.617ZM70.1806 6.3913L69.4428 9.82609H67.4282L69.5138 0.15942H73.5572C75.0894 0.15942 76.4798 1.2029 76.4798 2.88406C76.4798 4.62319 75.3164 5.95652 73.7842 6.24638L75.1036 9.82609H72.862L71.7412 6.3913H70.1806ZM72.6918 4.57971H70.5778L71.1453 1.97101H73.1741C73.7984 1.97101 74.3801 2.43478 74.3801 3.08696C74.3801 3.95652 73.7416 4.57971 72.6918 4.57971ZM88.0757 9.82609L89.0121 8.18841H93.0697L93.3109 9.82609H95.4957L93.9351 0.15942H91.4097L85.678 9.82609H88.0757ZM89.9626 6.37681H92.9136L92.3319 2.21739L89.9626 6.37681ZM100.329 9.82609C104.784 9.82609 106.458 6.85507 106.458 4.30435C106.458 1.81159 104.457 0.15942 102.358 0.15942H98.6974L96.6118 9.82609H100.329ZM99.0237 8.01449H100.698C102.982 8.01449 104.372 6.37681 104.372 4.44928C104.372 3.04348 103.379 1.97101 101.989 1.97101H100.329L99.0237 8.01449ZM112.142 10C115.264 10 117.647 7.47826 117.647 4.31884C117.647 1.66667 115.604 0 112.994 0C109.872 0 107.489 2.50725 107.489 5.66667C107.489 8.31884 109.518 10 112.142 10ZM109.603 5.53623C109.603 7.15942 110.738 8.17391 112.256 8.17391C114.086 8.17391 115.533 6.53623 115.533 4.46377C115.533 2.84058 114.384 1.82609 112.866 1.82609C111.036 1.82609 109.603 3.46377 109.603 5.53623Z" fill="#C70F5A"/>\n  </svg>\n';
        case nr:
          return (function () {
            return `\n  <svg class="chevron-icon" width="8" height="20" viewBox="0 0 8 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M2.27686 4.34647L1.42834 5.195L6.22396 9.99063L1.42334 14.7913L2.27187 15.6398L7.92102 9.99063L2.27686 4.34647Z" fill="${
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "#000"
            }" fill-opacity="0.55"/>\n  </svg>\n`;
          })(t);
        default:
          return "";
      }
    },
    or = (e) => {
      let t = e.type,
        n = e.id,
        i = Ko(e, Jo);
      switch (t) {
        case Qo:
          return ((e) => {
            let t = e.text,
              n = Ko(e, Zo),
              i = "",
              o = "";
            return (
              n.color && (i = `style="color: ${n.color}"`),
              n.size && (o += `${Xo}-size--${n.size} `),
              n.font_weight && (o += `${Xo}-weight--${n.font_weight} `),
              `\n    <p ${i} class="${o}">\n      ${t}\n    </p>\n  `
            );
          })(i);
        case er:
          return ir(n);
        default:
          return "";
      }
    },
    rr = /{([\s\S]+?)}/g;
  var sr = (e, t) => {
    const n = e.title,
      i = n.text,
      o = n.values,
      r = e.target,
      s = e.thumbnails,
      a = e.follow_icon;
    let l = `${t}`,
      c = "";
    if ((r && r.flow_type && (l += `?flow_type=${r.flow_type}`), a)) {
      const e = a.id,
        t = a.color;
      c = ir(e, t);
    }
    return `\n      <a href="${l}" class="modeless-box-cart__item">\n        ${((
      e,
      t
    ) => {
      let n = "";
      if (null == t) return n;
      const i = e.split(rr);
      for (let e = 0; e < i.length; e += 1) {
        const o = i[e];
        if (t.filter((e) => e.key === o).length > 0) {
          const e = t.find((e) => e.key === o);
          n += or(e);
        }
      }
      return n;
    })(i, o)}\n        ${Yo(s)}\n        ${c}\n      </a>\n  `;
  };
  class ar extends je {
    constructor() {
      super(...arguments);
    }
    render() {
      const e = this.options.baseUrl,
        t = void 0 === e ? "" : e,
        n = sr(this._model, t);
      n !== this.el.innerHTML &&
        (this.el.innerHTML = Ce.sanitize(n, { RETURN_TRUSTED_TYPE: !0 }));
    }
  }
  function lr(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t &&
        (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function cr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? lr(Object(i), !0).forEach(function (t) {
            n(e, t, i[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : lr(Object(i)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
          });
    }
    return e;
  }
  const ur = { showHeader: !0 };
  class hr {
    constructor(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      (this.options = cr(cr({}, ur), n)),
        (this.emitter = t),
        (this.type = e),
        (this.inboxSidebarEnabled = !1),
        "notifications" === this.type &&
          document.addEventListener("INBOX_QUESTIONS_WIDGET_READY", () => {
            this.inboxSidebarEnabled = !0;
          }),
        (this.collection = []),
        (this.el = this._constructEl()),
        (this.ui = {
          container: this.el.querySelector(".modeless-box-container"),
          list: this.el.querySelector("ul"),
          footer: this.el.querySelector(".modeless-box-footer"),
        });
      const i = cr(cr({}, this.ui), {}, { type: this.type });
      (this.scrollbar = new Be(this.emitter, i)),
        (this.mouseEnterHandlerBinded = this.mouseEnterHandler.bind(this)),
        (this.mouseLeaveHandlerBinded = this.mouseLeaveHandler.bind(this)),
        (this.positionerFn = () => {
          const e =
            this.options.trigger.querySelector("i") || this.options.trigger;
          !(function (e, t, n, i) {
            const o = Qe(e),
              r = Qe(t),
              s = Qe(document.body);
            o.width === s.width && (o.width = 420);
            let a = 16;
            const l =
                t.offsetParent === e.offsetParent ? t.offsetTop : Je(t).top,
              c = Math.round(l + r.height) + 10;
            let u = Math.round(r.left + r.width / 2) - o.width + a,
              h = 6;
            if ("bookmarks" === n)
              (a = 8), (u = Math.round(r.left + r.width) - o.width + a);
            else if (n === Ue && i) {
              const e = 10;
              (h = Math.round(o.right - o.left - r.right + r.width / 2) - e),
                (u = 0);
            }
            (e.style.top = `${c}px`),
              (e.style.left = `${u}px`),
              (e.style.right = `${h}px`);
          })(this.el, e, this.type, !!this.options.isMobile);
        });
    }
    _constructEl() {
      const e = this.type === Ue,
        t = document.createElement("div"),
        n = this.options.fixed ? " modeless-box--sticky" : "",
        i = this.options.small ? " modeless-box--small" : "",
        o = this.options.isMobile ? " modeless-box--mobile" : "";
      var r;
      return (
        (t.className = "modeless-box".concat(n, i, o)),
        t.setAttribute("role", "dialog"),
        (t.id = this.options._ariaId),
        (t.innerHTML = Ce.sanitize(
          `\n  ${
            (r = {
              type: this.type,
              triggerHref: this.options.trigger.href,
              settingsUrl: this.options.settingsUrl,
              header: !e && this.options.showHeader,
            }).header
              ? Ve(r)
              : ""
          }\n  <div class="modeless-box-container">\n      ${
            $e[r.type]
          }\n  </div>\n`,
          { RETURN_TRUSTED_TYPE: !0 }
        )),
        (t.hidden = !0),
        t.setAttribute("aria-hidden", !0),
        t.setAttribute("tabindex", "-1"),
        e || t.setAttribute("aria-label", De(this.type, "title")),
        t.setAttribute("aria-modal", "true"),
        e || this.options.trigger.setAttribute("aria-expanded", !1),
        document.body.appendChild(t),
        g.on(t, "click", (e) => e.stopPropagation()),
        t
      );
    }
    show() {
      (this.el.hidden = !1),
        this.el.setAttribute("aria-hidden", !1),
        this.scrollbar.attachEvent(),
        this.positionerFn(),
        this.el.focus(),
        this.options.trigger.setAttribute("aria-expanded", !0),
        g.on(window, "optimizedResize", this.positionerFn),
        g.once(this.el, "mouseenter", this.mouseEnterHandlerBinded);
    }
    mouseEnterHandler() {
      this.scrollbar.show(2e3),
        g.once(this.el, "mouseleave", this.mouseLeaveHandlerBinded);
    }
    mouseLeaveHandler() {
      g.once(this.el, "mouseenter", this.mouseEnterHandlerBinded);
    }
    zrp(e) {
      var t;
      (this.ui.list.innerHTML =
        "mercadopago" === e
          ? Ce.sanitize(
              `\n    <li class="modeless-box-noresults-mp">\n        \n    <svg xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 58 58" class="modeless-box-noresults-mp__icon">\n        <defs></defs>\n        <path stroke="#D9D9D9" stroke-linecap="round" stroke-width="2.9" d="M7.25 49.3h43.5"></path>\n        <path fill="#fff" fill-rule="evenodd" d="M21.3 40.88a7.7 7.7 0 0015.4 0" clip-rule="evenodd"></path>\n        <path stroke="#333" stroke-width="1.45" d="M21.3 40.88a7.7 7.7 0 0015.4 0"></path>\n        <path fill="#DEDEDE" fill-rule="evenodd" stroke="#333" stroke-linecap="square" stroke-width="1.45" d="M42.05 22.48a13.05 13.05 0 00-26.1 0v8.18l-6.53 4.35v5.87h39.15v-5.87l-6.52-4.35v-8.18 0z" clip-rule="evenodd"></path>\n        <path stroke="#9C9C9C" stroke-linecap="square" stroke-width="1.45" d="M44.23 12.32h2.9m-1.46-1.45v2.9-2.9zM7.97 25.38h2.9m-1.45-1.45v2.9-2.9z"></path>\n        <path stroke="#9C9C9C" stroke-linecap="square" stroke-width="2.9" d="M18.13 27.55v-5.16c0-5.45 4.02-10.06 9.42-10.79h.72"></path>\n        <path fill="#fff" d="M39.15 22.48a2.18 2.18 0 00-4.35 0v4.34a2.18 2.18 0 004.35 0v-4.34z"></path>\n        <path stroke="#9C9C9C" stroke-linecap="square" stroke-width="1.45" d="M9.42 7.98h5.8m-2.9-2.9v5.8-5.8z"></path>\n    </svg>\n\n        <p class="modeless-box-noresults-mp__label">${
                (t = {
                  label: this._noResults.label,
                  sublabel: this._noResults.sublabel,
                }).label
              }</p>\n        <p class="modeless-box-noresults-mp__sublabel">${
                t.sublabel
              }</p>\n    </li>\n`,
              { RETURN_TRUSTED_TYPE: !0 }
            )
          : Ce.sanitize(
              ((e) => `<li class="modeless-box-noresults">${e.message}</li>`)({
                message: this._noResultsMessage,
              }),
              { RETURN_TRUSTED_TYPE: !0 }
            )),
        this.ui.footer && (this.ui.footer.style.display = "none");
    }
    addSpinner(e) {
      const t = this.ui.list ? this.ui.list : this.ui.container;
      if (!t.querySelector(".ui-loading.ui-loading-page")) {
        const n = document.createElement(e || "div");
        n.className = "ui-loading ui-loading--inline ui-loading-page";
        const i = document.createElement("div");
        i.className = "ui-loading__container";
        const o = "http://www.w3.org/2000/svg",
          r = document.createElementNS(o, "svg");
        r.setAttribute("class", "ui-loading__spinner ui-loading__large"),
          r.setAttribute("viewBox", "25 25 50 50");
        const s = document.createElementNS(o, "circle");
        s.setAttribute("class", "ui-loading__spinner-path"),
          s.setAttribute("cx", "50"),
          s.setAttribute("cy", "50"),
          s.setAttribute("r", "20"),
          s.setAttribute("fill", "none"),
          s.setAttribute("stroke-width", "2"),
          s.setAttribute("stroke-miterlimit", "10"),
          r.appendChild(s),
          i.appendChild(r);
        const a = document.createElement("div");
        (a.className = "ui-loading__mask"),
          n.appendChild(i),
          n.appendChild(a),
          t.appendChild(n);
      }
    }
    removeSpinner() {
      const e = this.ui.list ? this.ui.list : this.ui.container;
      e.querySelector(".ui-loading.ui-loading-page") &&
        e.removeChild(e.querySelector(".ui-loading.ui-loading-page"));
    }
    hide() {
      (this.el.hidden = !0),
        this.scrollbar.removeEvent(),
        this.el.setAttribute("aria-hidden", !0),
        this.options.trigger.setAttribute("aria-expanded", !1),
        g.off(window, "optimizedResize", this.positionerFn),
        g.off(window, "mouseenter", this.mouseEnterHandlerBinded),
        g.off(window, "mouseleave", this.mouseLeaveHandlerBinded);
    }
    getItem(e) {
      let t;
      return (
        (t =
          "notifications" === this.type
            ? new qo(
                this.type,
                this.emitter,
                this.options.parentOptions,
                e,
                this.inboxSidebarEnabled
              )
            : this.type === Ue
            ? new ar(this.type, this.emitter, this.options.parentOptions, e)
            : new je(this.type, this.emitter, this.options.parentOptions, e)),
        t
      );
    }
    collectionAdd() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      if (!e.length && !this.collection.length) return this.zrp();
      this.ui.footer && (this.ui.footer.style.display = "block");
      for (let t = 0, n = e.length; t < n; t += 1)
        this.collection.push(this.getItem(e[`${t}`]));
      this.render(), this.emitter.emit("collection:change", this.collection);
    }
    collectionRemove(e) {
      let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "item_id",
        n = arguments.length > 2 ? arguments[2] : void 0;
      const i = [];
      for (let n = 0, o = this.collection.length; n < o; n += 1) {
        const o = this.collection[`${n}`];
        e[`${t}`] !== o.model[`${t}`] && i.push(o);
      }
      (this.collection = i),
        this.collection.length || this.zrp(n),
        this.emitter.emit("collection:change", this.collection),
        this.scrollbar.update();
    }
    collectionFind(e) {
      let t,
        n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "item_id";
      const i = this.collection.length;
      for (let o = 0; o < i; o += 1) {
        const i = this.collection[`${o}`];
        if (i.model[`${n}`] === e) {
          t = i;
          break;
        }
      }
      return t;
    }
    render() {
      const e = document.createDocumentFragment();
      for (let t = 0, n = this.collection.length; t < n; t += 1) {
        const n = this.collection[`${t}`];
        n.render();
        const i = n.el.querySelector(".modeless-box-notification-eventImage");
        i &&
          i.addEventListener("load", () => {
            this.scrollbar.update();
          }),
          e.appendChild(n.el);
      }
      const t = this.ui.list;
      for (; t.firstChild; ) t.removeChild(t.firstChild);
      t.appendChild(e);
    }
  }
  var dr, pr;
  var fr = (function () {
    if (pr) return dr;
    function e(e) {
      const t = e.querySelectorAll("a[href]");
      return Array.prototype.slice.call(t);
    }
    return (
      (pr = 1),
      (dr = {
        keyTrap: function (e, t, n) {
          9 === e.keyCode &&
            (e.shiftKey
              ? (document.activeElement !== t &&
                  document.activeElement !== t.querySelector("a[href]")) ||
                (e.preventDefault(),
                n ? n.focus() : t.querySelector("iframe").contentWindow.focus())
              : document.activeElement === n &&
                (e.preventDefault(),
                t.querySelector("a[href]") &&
                  t.querySelector("a[href]").focus()));
        },
        firstTargetStop: function (t) {
          return e(t);
        },
        lastTargetStop: function (t) {
          const n = e(t);
          return n[n.length - 1];
        },
      })
    );
  })();
  const mr = (e, t, n) => {
    const i = e.style[t];
    return (
      (e.style[t] = n),
      () => {
        e.style[t] = i;
      }
    );
  };
  function _r(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t &&
        (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  ((e, t, n) => {
    n = n || window;
    let i = !1;
    n.addEventListener(e, () => {
      i || (i = !0);
    });
  })("resize");
  class vr {
    constructor(e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (this._ariaId = `modeless-${Math.floor(99 * Math.random())}`),
        (this.options = t),
        (this.type = e),
        (this.hidden = !0),
        (this.emitter = new E()),
        (this.bus = this.options.bus || this.emitter),
        (this.trigger = this._constructTrigger()),
        (this.triggerLeave = null),
        (this.modelessToTrigger = null),
        (this.modelessShow = null),
        (this.overlay = null),
        (this.overlayCallbacks = []),
        (this.view = new hr(
          e,
          this.emitter,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? _r(Object(i), !0).forEach(function (t) {
                    n(e, t, i[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(i)
                  )
                : _r(Object(i)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(i, t)
                    );
                  });
            }
            return e;
          })(
            {
              _ariaId: this._ariaId,
              trigger: this.trigger,
              parentOptions: this.options,
              fixed: this.options.fixed,
              small: this.options.small,
              isMobile: this.options.isMobile,
              settingsUrl: this.options.settingsUrl,
            },
            void 0 !== this.options.showHeader && {
              showHeader: this.options.showHeader,
            }
          )
        )),
        (this.handleKeyTrapBinded = this.handleKeyTrap.bind(this)),
        (this.hideByEscapingBinded = this.hideByEscaping.bind(this)),
        (this.handleKeyDownTargetBinded = this.handleKeyDownTarget.bind(this)),
        this.options.isHover
          ? (g.on(this.view.el, "mouseleave", () => {
              (this.hidden = !1),
                (this.modelessToTrigger = setTimeout(() => this.hide(), 250));
            }),
            this.view.el.addEventListener("mouseenter", () => {
              clearTimeout(this.triggerLeave);
            }))
          : g.on(
              document,
              "click",
              () => !(!this.view.el || this.view.el.hidden) && this.hide()
            );
    }
    _constructTrigger() {
      const e = this.options.trigger;
      return (
        !!e &&
        (u.addClass(e, "modeless-box-trigger"),
        this.options.isHover
          ? (g.on(e, "click", (e) => {
              this.view.el &&
                this.view.el.hidden &&
                (this.modelessShow = setTimeout(() => this.show(), 250)),
                this.options.allowRedirect || e.preventDefault(),
                e.stopPropagation();
            }),
            e.addEventListener("mouseenter", () => {
              clearTimeout(this.modelessToTrigger),
                (this.modelessShow = setTimeout(() => this.show(), 250));
            }),
            g.on(e, "keydown", (e) => {
              (32 !== e.keyCode && 13 !== e.keyCode) ||
                (this.view.el &&
                  this.view.el.hidden &&
                  (this.modelessShow = setTimeout(() => this.show(), 250)),
                (13 === e.keyCode && this.options.allowRedirect) ||
                  (e.stopPropagation(), e.preventDefault()));
            }),
            g.on(e, "mouseleave", () => {
              clearTimeout(this.modelessShow),
                (this.triggerLeave = setTimeout(() => this.hide(), 250)),
                (this.hidden = !0);
            }))
          : g.on(e, "click", (e) => {
              this.view.el && this.view.el.hidden ? this.show() : this.hide(),
                e.preventDefault(),
                e.stopPropagation();
            }),
        e)
      );
    }
    _constructOverlay() {
      if (!this.overlay) {
        const e = document.createElement("div");
        (e.className = "modeless-box-overlay"), (this.overlay = e);
        const t = document.body.querySelector("main");
        if (t) {
          t.insertBefore(e, t.firstChild);
          const n = document.documentElement;
          this.overlayCallbacks.push(
            mr(n, "paddingRight", window.innerWidth - n.clientWidth + "px")
          ),
            this.overlayCallbacks.push(mr(n, "overflow", "hidden"));
        }
      }
    }
    _removeOverlay() {
      if (this.overlay) {
        this.overlay.remove(), (this.overlay = null);
        for (let e = 0; e < this.overlayCallbacks.length; e += 1)
          this.overlayCallbacks[e]();
        this.overlayCallbacks = [];
      }
    }
    show() {
      this.bus.emit(`${this.type}:show:before`),
        (this.hidden = !1),
        this.view.show(),
        this.bus.emit(`${this.type}:show:after`);
    }
    hideByEscaping(e) {
      27 === e.keyCode && (this.hide(), this.trigger.focus());
    }
    handleKeyTrap(e) {
      fr.keyTrap(e, this.firstTabStop, this.lastTabStop);
    }
    handleKeyDownTarget(e) {
      this.handleKeyTrapBinded(e), this.hideByEscapingBinded(e);
    }
    hide() {
      this.bus.emit(`${this.type}:hide:before`),
        (this.hidden = !0),
        this.view.hide(),
        this.view.el.removeEventListener(
          "keydown",
          this.handleKeyDownTargetBinded
        ),
        this.bus.emit(`${this.type}:hide:after`),
        this.reset();
    }
    reset() {
      if (((this.total = 0), this.view.ui.list && this.type !== Ue)) {
        const t = Ce.sanitize(
          `\n  <${(e =
            "li")} class="ui-loading ${"ui-loading--inline loading-container"}">\n      <div class="ui-loading__container">\n          <svg class="ui-loading__spinner ui-loading__large" viewBox="25 25 50 50">\n              <circle\n                class="ui-loading__spinner-path"\n                cx="50"\n                cy="50"\n                r="20"\n                fill="none"\n                stroke-width="2"\n                stroke-miterlimit="10"\n              />\n          </svg>\n      </div>\n      <div class="ui-loading__mask"></div>\n  </${e}>\n`,
          { RETURN_TRUSTED_TYPE: !0 }
        );
        this.view.ui.list.innerHTML = t;
      }
      var e;
      (this.view.collection = []),
        this.view.scrollbar.reset(),
        this.view.scrollbar.update();
    }
  }
  var gr, br, yr, wr;
  function Er() {
    if (br) return gr;
    br = 1;
    return (gr = (e) => {
      let t = e.target,
        n = e.currentLocation,
        i = void 0 === n ? {} : n;
      const o =
          /^.+\.mercadoli(b|v)re\.(cl|com\.(ar|bo|br|co|cr|cu|do|ec|gt|mx|ni|hn|pa|pe|py|sv|ve|uy)|com)$/,
        r =
          /^.+\.mercadopago\.(cl|com\.(ar|bo|br|co|cr|cu|do|ec|gt|mx|ni|hn|pa|pe|py|sv|ve|uy)|com)$/,
        s =
          /^.+\.tucarro\.(cl|com\.(ar|bo|br|co|cr|cu|do|ec|gt|mx|ni|hn|pa|pe|py|sv|ve|uy)|com)$/,
        a =
          /^.+\.portalinmobiliario\.(cl|com\.(ar|bo|br|co|cr|cu|do|ec|gt|mx|ni|hn|pa|pe|py|sv|ve|uy)|com)$/;
      try {
        const e = new URL(t).hostname,
          n = i.hostname,
          l = o.test(e) || r.test(e),
          c = s.test(e) || a.test(e);
        return l || c || e === n;
      } catch (e) {
        return console.error("An error occurred validating the target", e), !1;
      }
    });
  }
  var kr = (function () {
      if (wr) return yr;
      wr = 1;
      const e = Er();
      return (yr = (t) => {
        var n;
        let i = t.parentOrigin,
          o = t.currentLocation;
        return i
          ? e({
              target: i,
              currentLocation:
                (void 0 === o ? {} : o) ||
                (null === (n = window) || void 0 === n ? void 0 : n.location),
            })
          : (console.error(
              `targetHostnameValidator: parentOrigin is required. Received: ${i}`
            ),
            !1);
      });
    })(),
    Sr = i(kr);
  class xr extends vr {
    constructor() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (!e.hostname)
        throw new Error('Bookmarks Widget: Gimme a "hostname" param.');
      super("bookmarks", e),
        (this.hostname = e.hostname),
        (this.iframeSrc = `https://myaccount.${this.hostname}/bookmarks/list/widget`),
        (this.iframe = null),
        (this.postMessageSent = !1),
        window.addEventListener("message", (e) => {
          if (Sr({ parentOrigin: e.origin, currentLocation: window.location }))
            try {
              const t = parseInt(e.data ? e.data.height : 0, 10),
                n = parseInt(e.data ? e.data.width : 0, 10);
              switch (e.data.type) {
                case "nav:bookmarks:updateSize":
                  this.view.scrollbar.update(!1, { height: t, width: n }),
                    (this.iframe.style.height = "100%"),
                    this.view.removeSpinner();
                  break;
                case "nav:bookmarks:close":
                  this.hide(), (this.hidden = !0), this.trigger.focus();
              }
            } catch (e) {
              console.warn("Invalid postMessage received:", e);
            }
        });
    }
    _createIframe() {
      const e = document.createElement("iframe");
      return (
        (e.src = this.iframeSrc),
        e.setAttribute("width", "100%"),
        e.setAttribute("height", "100%"),
        (e.frameBorder = "0"),
        (e.allowtransparency = "true"),
        (e.scrolling = "yes"),
        (e.style.height = "0"),
        e
      );
    }
    show() {
      return (
        this.iframe
          ? this.postMessageSent ||
            ((this.postMessageSent = !0),
            this.iframe.contentWindow.postMessage(
              { type: "bookmarks:update" },
              "*"
            ))
          : (this.view.addSpinner(),
            (this.iframe = this._createIframe()),
            this.view.ui.container.appendChild(this.iframe)),
        super.show(),
        (this.firstTabStop = this.view.el),
        (this.lastTabStop = fr.lastTargetStop(this.view.el)),
        this.view.el.addEventListener(
          "keydown",
          this.handleKeyDownTargetBinded
        ),
        this
      );
    }
    hide() {
      return (
        this.bus.emit(`${this.type}:hide:before`),
        (this.hidden = !0),
        (this.postMessageSent = !1),
        this.view.hide(),
        this.view.el.removeEventListener(
          "keydown",
          this.handleKeyDownTargetBinded
        ),
        this.bus.emit(`${this.type}:hide:after`),
        this
      );
    }
  }
  var Tr,
    Cr = { exports: {} };
  var Or,
    Nr =
      (Tr ||
        ((Tr = 1),
        (function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n,
            i =
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
                  },
            o = f(),
            r = (n = o) && n.__esModule ? n : { default: n },
            s = "",
            a = "/",
            l = !1,
            c = "";
          function u(e) {
            var t = document.cookie.split("; "),
              n = null,
              i = t.length;
            if (!i) return n;
            for (var o = 0; o < i; o++) {
              var r = t[o].split("=");
              if (e === decodeURIComponent(r.shift())) {
                n = decodeURIComponent(r.join("="));
                break;
              }
            }
            return n;
          }
          function h(e, t, n) {
            var o =
              null !=
              (n =
                "object" === (void 0 === n ? "undefined" : i(n))
                  ? n
                  : { expires: n }).expires
                ? n.expires
                : s;
            "string" == typeof o && "" !== o
              ? (o = new Date(o))
              : "number" == typeof o && (o = new Date(+new Date() + 864e5 * o)),
              o && "toGMTString" in o && (o = "; expires=" + o.toGMTString());
            var u = "; path=" + (n.path || a),
              h = n.domain || c;
            h = h ? "; domain=" + h : "";
            var d = "";
            if (n.sameSite)
              switch (
                "string" == typeof n.sameSite
                  ? n.sameSite.toLowerCase()
                  : n.sameSite
              ) {
                case !0:
                  d += "; SameSite=Strict";
                  break;
                case "lax":
                  d += "; SameSite=Lax";
                  break;
                case "strict":
                  d += "; SameSite=Strict";
                  break;
                case "none":
                  d += "; SameSite=None";
              }
            var p = n.secure || l ? "; secure" : "";
            "object" == (void 0 === t ? "undefined" : i(t)) &&
              (t =
                Array.isArray(t) || (0, r.default)(t) ? JSON.stringify(t) : ""),
              (document.cookie = m(e) + "=" + m(t) + o + u + h + p + d);
          }
          function d(e) {
            h(e, "", -1);
          }
          var p = {
            get: u,
            set: h,
            remove: d,
            isEnabled: function () {
              if (navigator.cookieEnabled) return !0;
              h("__", "_");
              var e = "_" === u("__");
              return d("__"), e;
            },
          };
          function m(e) {
            return String(e).replace(/[,;"\\=\s%]/g, function (e) {
              return encodeURIComponent(e);
            });
          }
          (t.default = p), (e.exports = t.default);
        })(Cr, Cr.exports)),
      Cr.exports),
    Lr = i(Nr),
    zr = { exports: {} };
  var Ar =
      (Or ||
        ((Or = 1),
        (function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n =
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
                };
          t.default = function (e, t) {
            var i = arguments,
              o = void 0;
            t = 1 === i.length ? i[0] : i[1];
            var s = function () {},
              a = {
                url: 2 === i.length && "string" == typeof e ? e : ".",
                cache: !0,
                data: null,
                headers: {},
                context: null,
                dataType: "text",
                method: "GET",
                credentials: "omit",
                success: s,
                error: s,
                complete: s,
                preload: !1,
              };
            o = (0, r.default)(a, t || {});
            var l = {
                "application/json": "json",
                "text/html": "html",
                "text/plain": "text",
              },
              c = {};
            for (var u in l) l.hasOwnProperty(u) && (c[l[u]] = u);
            o.cache ||
              (o.url =
                o.url +
                (~o.url.indexOf("?") ? "&" : "?") +
                "nc=" +
                Math.floor(9e9 * Math.random()));
            var h = function (e, t) {
                o.complete.call(o.context, t, e);
              },
              d = function (e, t) {
                var n = "success";
                o.success.call(o.context, e, n, t), h(n, t);
              },
              p = function (e, t, n) {
                o.error.call(o.context, n, t, e), h(t, n);
              },
              f = Object.prototype.toString;
            o.method = o.method.toUpperCase();
            var m = document.createElement("a"),
              _ = document.createElement("a");
            _.href = location.href;
            try {
              (m.href = o.url),
                (m.href = m.href),
                (o.crossDomain =
                  _.protocol + "//" + _.host != m.protocol + "//" + m.host);
            } catch (e) {
              o.crossDomain = !0;
            }
            var v,
              g,
              b,
              y,
              w,
              E = new XMLHttpRequest(),
              k =
                o.crossDomain &&
                !("withCredentials" in E) &&
                "XDomainRequest" in window;
            if (
              (k
                ? ((E = new XDomainRequest()).onload = function () {
                    var e = E.contentType,
                      t = void 0;
                    if (
                      "json" === (e && l[e[1]] ? l[e[1]].toLowerCase() : "json")
                    )
                      try {
                        t = JSON.parse(E.responseText);
                      } catch (e) {
                        t = E.responseText;
                      }
                    else t = E.responseText;
                    d(t, E);
                  })
                : (E.onreadystatechange = function () {
                    if (4 !== E.readyState);
                    else {
                      var e = void 0,
                        t = 1223 === E.status ? 204 : E.status;
                      if ((t >= 200 && t < 300) || 304 === t) {
                        var n = /([\/a-z]+)(;|\s|$)/.exec(
                            E.getResponseHeader("content-type")
                          ),
                          i = n && l[n[1]] ? l[n[1]].toLowerCase() : "text";
                        if (((e = E.responseText), "json" === i))
                          try {
                            e = JSON.parse(e);
                          } catch (t) {
                            e = E.responseText;
                          }
                        d(e, E);
                      } else p(new Error(E.statusText), "error", E);
                    }
                  }),
              (E.onerror = function () {
                p(
                  new Error(E.statusText || "Network request failed"),
                  "error",
                  E
                );
              }),
              ("GET" !== o.method && "HEAD" !== o.method) ||
                "string" != typeof o.data ||
                (o.url += (~o.url.indexOf("?") ? "&" : "?") + o.data),
              E.open(o.method, o.url),
              "include" === o.credentials && (E.withCredentials = !0),
              !o.preload &&
                (o.dataType &&
                  c[o.dataType.toLowerCase()] &&
                  (o.headers.Accept =
                    c[o.dataType.toLowerCase()] + ", */*; q=0.01"),
                o.crossDomain ||
                  o.headers["X-Requested-With"] ||
                  (o.headers["X-Requested-With"] = "XMLHttpRequest"),
                (o.data =
                  ((v = o.data),
                  (g = o.headers),
                  (b = o.crossDomain),
                  (w =
                    "application/x-www-form-urlencoded; " +
                    (y = "charset=UTF-8")),
                  ("undefined" != typeof FormData && v instanceof FormData) ||
                  /^\[object\s(ArrayBuffer|File|Blob)\]$/.test(f.call(v))
                    ? v
                    : ("undefined" != typeof URLSearchParams &&
                        v instanceof URLSearchParams) ||
                      "string" == typeof v
                    ? (void 0 === g["Content-Type"] && (g["Content-Type"] = w),
                      v.toString())
                    : null !== v &&
                      "object" === (void 0 === v ? "undefined" : n(v))
                    ? (void 0 === g["Content-Type"] &&
                        (g["Content-Type"] = b ? w : "application/json;  " + y),
                      JSON.stringify(v))
                    : v)),
                !k))
            )
              for (var S in o.headers) E.setRequestHeader(S, o.headers[S]);
            return E.send(o.data), this;
          };
          var i,
            o = m(),
            r = (i = o) && i.__esModule ? i : { default: i };
          e.exports = t.default;
        })(zr, zr.exports)),
      zr.exports),
    Mr = i(Ar);
  class Rr {
    constructor() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (this.parent = e.parent),
        (this.pageTitle = document.title),
        (this.trigger = e.trigger),
        (this.credentials = e.credentials),
        (this.url =
          e.url ||
          `http://api.internal.ml.com/users/${Lr.get(
            "orguseridp"
          )}/newsgroups_count_grouped?caller.id=${Lr.get(
            "orguseridp"
          )}&marketplace=mercadolibre&platform=web-desktop`),
        (this.count = 0),
        (this.hasBroadcast = !1),
        this.fetch(!0);
    }
    shouldListenBadgeEvent() {
      !0 === this.parent.view.options.parentOptions.realTimeBadge &&
        document.addEventListener("BADGE_SHOULD_UPDATE", () => {
          this.fetch();
        });
    }
    render() {
      this.shouldListenBadgeEvent(),
        this.trigger.insertAdjacentHTML(
          "beforeend",
          Ce.sanitize('<span class="ml-count" style="display: none">0</span>', {
            RETURN_TRUSTED_TYPE: !0,
          })
        ),
        (this.el = this.trigger.querySelector(".ml-count")),
        this.trigger.insertAdjacentHTML(
          "beforeend",
          Ce.sanitize(
            '<span class="ml-broadcast" style="display: none"></span>',
            { RETURN_TRUSTED_TYPE: !0 }
          )
        ),
        (this.broadcastEl = this.trigger.querySelector(".ml-broadcast"));
    }
    update() {
      const e = this.count > 99 ? "99+" : this.count;
      (this.el.innerText = e),
        this.count > 99 &&
          ((this.el.style.fontSize = "12px"),
          (this.el.style.width = "auto"),
          (this.el.style.paddingLeft = "2px"),
          (this.el.style.paddingRight = "2px"),
          (this.el.style.borderRadius = "9px")),
        this.count > 0
          ? ((document.title = `(${this.count}) ${this.pageTitle}`),
            1 === this.count
              ? this.trigger.setAttribute(
                  "aria-label",
                  `${De("notifications", "badget_notification_singular")}`
                )
              : this.trigger.setAttribute(
                  "aria-label",
                  `${De("notifications", "badget_notification_plural").replace(
                    "{0}",
                    this.count
                  )}`
                ))
          : (document.title = this.pageTitle);
    }
    show() {
      (this.el.style.display = "flex"),
        this.broadcastEl && (this.broadcastEl.style.display = "none");
    }
    showBroadcast() {
      (this.el.style.display = "none"),
        this.broadcastEl &&
          ((this.broadcastEl.style.display = "block"),
          (this.broadcastEl.style.backgroundColor = this.badgeColor)),
        (document.title = `(•) ${this.pageTitle}`),
        this.trigger.setAttribute(
          "aria-label",
          De("notifications", "broadcast")
        );
    }
    hide() {
      (this.count = 0),
        (this.hasBroadcast = !1),
        (this.el.style.display = "none"),
        this.broadcastEl && (this.broadcastEl.style.display = "none"),
        this.update();
    }
    fetch() {
      this.fetching ||
        ((this.fetching = !0),
        Mr(this.url, {
          dataType: "json",
          credentials: this.credentials ? "include" : null,
          success: (e) => {
            (this.fetching = !1),
              (this.count = e.counter || 0),
              (this.broadcastCounter = e.broadcast_counter || 0),
              (this.hasBroadcast = e.has_broadcast || !1),
              (this.badgeColor = e.badge_colour || "#F23D4F"),
              this.hasBroadcast && this.count > 0
                ? this.showBroadcast()
                : this.count > 0
                ? (this.show(), this.update())
                : this.hide();
          },
          error: () => {
            this.fetching = !1;
          },
        }));
    }
  }
  var Pr = i(Er());
  class Dr {
    constructor(e, t, n, i) {
      (this.title = "string" == typeof e ? e : ""),
        (this.content = "string" == typeof t ? t : ""),
        (this.buttonLabel = "string" == typeof n ? n : ""),
        (this.onButtonClick = i),
        (this.element = null),
        (this.buttonClickHandler = null),
        (this.keydownHandler = this.handleKeydown.bind(this)),
        (this.uniqueId = "tooltip");
    }
    handleKeydown(e) {
      if (this.element) {
        if (
          ("Enter" === e.key ||
            " " === e.key ||
            13 === e.keyCode ||
            32 === e.keyCode) &&
          e.target === this.element
        ) {
          e.preventDefault();
          const t = this.element.querySelector(
            ".notifications-coachmark-tooltip-button"
          );
          return void (t && t.click());
        }
        if ("ArrowDown" === e.key || 40 === e.keyCode) {
          const t = this.element.querySelector(
            ".notifications-coachmark-tooltip-button"
          );
          t &&
            document.activeElement === this.element &&
            (e.preventDefault(), t.focus());
        }
        ("ArrowUp" !== e.key && 38 !== e.keyCode) ||
          (document.activeElement !== this.element &&
            (e.preventDefault(), this.element.focus()));
      }
    }
    show(e) {
      if (e && "object" == typeof e) {
        this.element && this.hide();
        try {
          (this.element = this._createElement(e)),
            document.body.appendChild(this.element),
            this.element.addEventListener("keydown", this.keydownHandler);
          const t = this.element.querySelector(
            ".notifications-coachmark-tooltip-button"
          );
          t &&
            setTimeout(() => {
              t.focus();
            }, 100);
        } catch (e) {}
      }
    }
    hide() {
      try {
        if (
          (this.element &&
            this.element.removeEventListener("keydown", this.keydownHandler),
          this.buttonClickHandler && this.element)
        ) {
          const e = this.element.querySelector(
            ".notifications-coachmark-tooltip-button"
          );
          e && e.removeEventListener("click", this.buttonClickHandler);
        }
        this.element &&
          this.element.parentNode &&
          this.element.parentNode.removeChild(this.element);
      } catch (e) {
      } finally {
        (this.element = null), (this.buttonClickHandler = null);
      }
    }
    _createElement(e) {
      const t = document.createElement("div");
      (t.id = this.uniqueId),
        (t.className = "notifications-coachmark-tooltip"),
        t.setAttribute("role", "alertdialog"),
        t.setAttribute("tabindex", "0"),
        t.setAttribute("aria-modal", "true");
      const n = `${this.uniqueId}-title`,
        i = `${this.uniqueId}-content`,
        o = `${this.uniqueId}-button`;
      t.setAttribute("aria-label", `${this.title}. ${this.content}`);
      const r = document.createElement("div");
      (r.className = "notifications-coachmark-tooltip-arrow"),
        r.setAttribute("aria-hidden", "true"),
        t.appendChild(r);
      const s = document.createElement("h2");
      (s.id = n),
        (s.className = "notifications-coachmark-tooltip-title"),
        (s.textContent = this.title),
        t.appendChild(s);
      const a = document.createElement("div");
      (a.id = i),
        (a.className = "notifications-coachmark-tooltip-text"),
        (a.textContent = this.content),
        t.appendChild(a);
      const l = document.createElement("button");
      (l.id = o),
        (l.className = "notifications-coachmark-tooltip-button"),
        (l.textContent = this.buttonLabel),
        l.setAttribute("type", "button"),
        l.setAttribute("aria-label", `${this.buttonLabel}`),
        (this.buttonClickHandler = () => {
          try {
            this.onButtonClick();
          } catch (e) {}
        }),
        l.addEventListener("click", this.buttonClickHandler),
        t.appendChild(l);
      const c = (e.bottom || 0) + 20,
        u = (e.left || 0) + (e.width || 0) / 2 - 150,
        h = window.innerWidth,
        d = Math.max(10, Math.min(u, h - 310));
      return (
        Object.assign(t.style, {
          position: "fixed",
          left: `${d}px`,
          top: `${c}px`,
        }),
        t
      );
    }
    isVisible() {
      return null !== this.element && document.body.contains(this.element);
    }
  }
  class Hr {
    constructor(e, t, n, i) {
      (this.targetElement = e),
        (this.elements = []),
        (this.isVisible = !1),
        (this.keydownHandler = this.handleKeydown.bind(this)),
        (this.uniqueId = "coachmark"),
        (this.tooltip = new Dr(t, n, i, () => {
          this.postMessageToIframe({ type: "nav:broadcast:closeCoachmark" }),
            this.hide();
        })),
        (Hr.instance = this);
    }
    handleKeydown(e) {
      ("Tab" !== e.key && 9 !== e.keyCode) || this.handleTabNavigation(e);
    }
    handleTabNavigation(e) {
      const t = document.getElementById("tooltip"),
        n = document.querySelector("#tooltip button");
      if (!t || !n) return;
      const i = document.activeElement;
      if (i !== t && i !== n)
        return e.preventDefault(), void (e.shiftKey ? n.focus() : t.focus());
      e.preventDefault(),
        e.shiftKey
          ? i === n
            ? t.focus()
            : n.focus()
          : i === t
          ? n.focus()
          : t.focus();
    }
    postMessageToIframe(e) {
      try {
        var t, n;
        const i =
          "iframe" ===
          (null === (t = this.targetElement) || void 0 === t
            ? void 0
            : t.tagName.toLowerCase())
            ? this.targetElement
            : (null === (n = this.targetElement) || void 0 === n
                ? void 0
                : n.querySelector("iframe")) ||
              document.querySelector("iframe");
        null != i && i.contentWindow && i.contentWindow.postMessage(e, "*");
      } catch (e) {}
    }
    show() {
      try {
        if (this.isVisible || !this.targetElement) return;
        (document.body.style.overflow = "hidden"),
          this.createCoachmark(),
          (this.isVisible = !0),
          document.addEventListener("keydown", this.keydownHandler, !0);
      } catch (e) {}
    }
    hide() {
      try {
        if (!this.isVisible) return;
        this.removeCoachmark(),
          (this.isVisible = !1),
          (document.body.style.overflow = ""),
          document.removeEventListener("keydown", this.keydownHandler, !0),
          this.restoreFocusToNotifications();
      } catch (e) {}
    }
    restoreFocusToNotifications() {
      try {
        var e;
        const t = document.getElementById("id-iframe");
        let n = null;
        t && (n = t.parentElement);
        const i =
          n ||
          document.querySelector('.popup[data-component="notifications"]') ||
          document.querySelector('[data-component="notifications"]') ||
          (null === (e = this.targetElement) || void 0 === e
            ? void 0
            : e.closest(".popup"));
        i &&
          (i.hasAttribute("tabindex") || i.setAttribute("tabindex", "0"),
          setTimeout(() => {
            i.focus();
          }, 50));
      } catch (e) {}
    }
    createCoachmark() {
      try {
        if (!this.targetElement) return;
        const e = this.calculateSpotlightRect();
        this.createOverlay(e), this.createSpotlight(), this.tooltip.show(e);
      } catch (e) {}
    }
    createOverlay(e) {
      const t = document.createElement("div");
      (t.id = "ml-nav-coachmark-overlay"),
        (t.className = "notifications-coachmark-overlay"),
        t.setAttribute("data-ml-nav-component", "coachmark"),
        t.setAttribute("aria-hidden", "true"),
        Object.assign(t.style, {
          position: "fixed",
          left: "0px",
          top: "0px",
          width: "100vw",
          height: "100vh",
          backgroundColor: "transparent",
          pointerEvents: "auto",
          zIndex: "10000",
        });
      const n = document.createElement("div");
      (n.id = "ml-nav-coachmark-transparent-area"),
        (n.className = "notifications-coachmark-transparent"),
        n.setAttribute("data-ml-nav-component", "coachmark"),
        Object.assign(n.style, {
          position: "absolute",
          left: `${e.left}px`,
          top: `${e.top}px`,
          width: `${e.width}px`,
          height: `${e.height}px`,
          borderRadius: "8px",
          boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.8)",
          backgroundColor: "transparent",
        }),
        t.appendChild(n),
        this.addElementToDOM(t);
    }
    calculateSpotlightRect() {
      const e = this.targetElement.getBoundingClientRect(),
        t =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0,
        n =
          window.pageXOffset ||
          document.documentElement.scrollLeft ||
          document.body.scrollLeft ||
          0;
      return {
        left: e.left - n - 4,
        top: 140 - t - 10,
        width: e.width + 8,
        height: 58,
        scrollTop: t,
        scrollLeft: n,
        iframeTop: e.top,
        iframeLeft: e.left,
        get right() {
          return this.left + this.width;
        },
        get bottom() {
          return this.top + this.height;
        },
      };
    }
    createSpotlight() {
      if (!this.targetElement) return;
      const e = this.calculateSpotlightRect(),
        t = document.createElement("div");
      (t.id = "ml-nav-coachmark-spotlight-rectangle"),
        (t.className = "notifications-coachmark-spotlight"),
        t.setAttribute("data-ml-nav-component", "coachmark"),
        Object.assign(t.style, {
          position: "fixed",
          left: `${e.left}px`,
          top: `${e.top}px`,
          width: e.width - 5 + "px",
          height: e.height - 4 + "px",
          border: "3px solid #3483fa",
          borderRadius: "8px",
          boxShadow:
            "0 0 0 2px rgba(52, 131, 250, 0.3), 0 0 20px rgba(52, 131, 250, 0.2)",
          pointerEvents: "none",
          zIndex: "10001",
        }),
        this.addElementToDOM(t);
    }
    addElementToDOM(e) {
      try {
        e &&
          document.body &&
          (document.body.appendChild(e), this.elements.push(e));
      } catch (e) {}
    }
    removeCoachmark() {
      try {
        this.tooltip.hide();
      } catch (e) {}
      this.elements.forEach((e) => {
        try {
          e && e.parentNode && e.parentNode.removeChild(e);
        } catch (e) {}
      }),
        (this.elements = []);
    }
    static getInstance(e, t, n, i) {
      try {
        return (
          Hr.instance
            ? (Hr.instance.hide(),
              (Hr.instance.targetElement = e),
              (Hr.instance.tooltip = new Dr(t, n, i, () => {
                Hr.instance.postMessageToIframe({
                  type: "nav:broadcast:closeCoachmark",
                }),
                  Hr.instance.hide();
              })))
            : (Hr.instance = new Hr(e, t, n, i)),
          Hr.instance
        );
      } catch (e) {
        return null;
      }
    }
    static destroyInstance() {
      Hr.instance && Hr.instance.destroy();
    }
    destroy() {
      try {
        this.hide();
        document
          .querySelectorAll('[data-ml-nav-component="coachmark"]')
          .forEach((e) => {
            try {
              e.parentNode && e.parentNode.removeChild(e);
            } catch (e) {}
          });
      } catch (e) {
      } finally {
        Hr.instance = null;
      }
    }
  }
  function Ir(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t &&
        (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function jr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? Ir(Object(i), !0).forEach(function (t) {
            n(e, t, i[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : Ir(Object(i)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
          });
    }
    return e;
  }
  n(Hr, "instance", null);
  const Vr = () => {
    try {
      const e = window.location.hostname;
      if (
        !["mercadolibre", "mercadolivre", "mercadopago"].find((t) =>
          e.includes(`${t}.`)
        )
      )
        return null;
      return `https://${
        e.includes("mercadopago")
          ? e.replace(/.*(?=\.mercadopago)/, "www")
          : e.replace(/.*(?=\.mercadoli(b|v)re)/, "myaccount")
      }/communication-preferences/notifications`;
    } catch (e) {
      return null;
    }
  };
  class $r extends vr {
    constructor() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      super(
        "notifications",
        jr(jr({}, e), {}, { settingsUrl: e.settingsUrl || Vr() })
      ),
        (this.inboxSidebarEnabled = !1),
        (this.mpFlavorEnable = e.hostname.includes("mercadopago")),
        (this.badge = new Rr({
          siteId: e.siteId,
          bus: this.bus,
          parent: this,
          url: e.countUrl,
          trigger: this.trigger,
          pusher: e.pusher,
          credentials: e.credentials,
          realTimeBadge: e.realTimeBadge,
        })),
        this.badge.render(),
        this.bus.on("notifications:bell", () => {
          this.hidden && this.badge.fetch();
        }),
        this.bus.on("notifications:show", this.show.bind(this)),
        this.bus.on("notifications:hide", this.hide.bind(this)),
        (this.hostname = e.hostname),
        (this.iframeSrc = `https://${
          this.hostname
        }/notifications/center/widget${
          e.modelessBoxVersion
            ? `?modeless_box_version=${encodeURIComponent(
                e.modelessBoxVersion
              )}`
            : ""
        }`),
        (this.iframe = null),
        (this.coachmark = null),
        (this.iframeFocused = !1),
        (this.inboxSidebarEnabled = !1),
        document.addEventListener("INBOX_QUESTIONS_WIDGET_READY", () => {
          this.inboxSidebarEnabled = !0;
        }),
        window.addEventListener("message", (e) => {
          if (Sr({ parentOrigin: e.origin, currentLocation: window.location }))
            try {
              const t = parseInt(e.data ? e.data.height : 350, 10),
                n = parseInt(e.data ? e.data.width : 0, 10),
                i =
                  e.data && e.data.maxHeight
                    ? parseInt(e.data.maxHeight, 10)
                    : null,
                o = null !== i && i >= 100 && i <= 2e3 ? i : null;
              switch (e.data.type) {
                case "nav:notifications:updateSize":
                  this.view.scrollbar.update(!1, {
                    height: t,
                    width: n,
                    maxHeight: o,
                  }),
                    o && (this.view.el.style.maxHeight = `${o}px`),
                    (this.iframe.style.height = "100%"),
                    this.view.removeSpinner();
                  break;
                case "nav:notifications:close":
                  this.hide(), (this.hidden = !0), this.trigger.focus();
                  break;
                case "nav:broadcast:showCoachmark": {
                  const t = document.getElementById("id-iframe");
                  if (!t) return;
                  const n = e.data.wordings.title,
                    i = e.data.wordings.content,
                    o = e.data.wordings.buttonLabel;
                  (this.coachmark = Hr.getInstance(t, n, i, o)),
                    this.coachmark.show();
                  break;
                }
                case "nav:notifications:questionWidget": {
                  const t = e.data.url;
                  this.inboxSidebarEnabled
                    ? document.dispatchEvent(
                        new CustomEvent("INBOX_SIDEBAR_TOGGLE", { detail: t })
                      )
                    : Pr({ target: t }) && (window.location.href = t);
                  break;
                }
                case "nav:broadcast:closeCoachmark":
                  Hr.destroyInstance(), (this.coachmark = null);
              }
            } catch (e) {
              console.warn("Invalid postMessage received:", e);
            }
        });
    }
    _createIframe() {
      const e = document.createElement("iframe");
      return (
        (e.src = this.iframeSrc),
        e.setAttribute("width", "100%"),
        e.setAttribute("height", "100%"),
        (e.frameBorder = "0"),
        (e.allowtransparency = "true"),
        (e.scrolling = "no"),
        (e.style.height = "0"),
        (e.id = "id-iframe"),
        e.setAttribute("tabindex", "0"),
        e.setAttribute("title", "Notifications content"),
        e.addEventListener("load", () => {
          this.iframeFocused = !0;
        }),
        e
      );
    }
    show() {
      return (
        !this.hidden ||
          this.iframe ||
          this.view.ui.container.querySelector("#id-iframe") ||
          (this.view.addSpinner("div"),
          (this.iframe = this._createIframe()),
          this.view.ui.container.appendChild(this.iframe),
          this.badge.hide(),
          super.show(),
          (this.firstTabStop = this.view.el),
          (this.lastTabStop = fr.lastTargetStop(this.view.el)),
          this.view.el.addEventListener(
            "keydown",
            this.handleKeyDownTargetBinded
          )),
        this
      );
    }
    hide() {
      return (
        (this.coachmark && this.coachmark.isVisible) ||
          (this.view.addSpinner("div"),
          (this.iframe = null),
          this.view.ui.container.replaceChildren(),
          this.hidden || this.badge.fetch(),
          Hr.destroyInstance(),
          (this.coachmark = null),
          super.hide()),
        this
      );
    }
    getPathTracking(e) {
      return e ? `/notification_center/${e}` : "/notification_center";
    }
    handleKeyTrap(e) {
      if (9 === e.keyCode) {
        const t = this.firstTabStop.querySelector("iframe");
        if (!t) return super.handleKeyTrap(e);
        const n = document.activeElement;
        if (e.shiftKey && n === this.firstTabStop)
          e.preventDefault(), t.focus();
        else if (e.shiftKey || n !== this.lastTabStop) {
          if (n !== t) return super.handleKeyTrap(e);
          e.preventDefault(),
            (e.shiftKey ? this.lastTabStop : this.firstTabStop).focus();
        } else e.preventDefault(), t.focus();
      }
      return super.handleKeyTrap(e);
    }
  }
  class Ur extends vr {
    constructor() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      super("cart", e),
        (this.carts = e.carts),
        (this.isMobile = e.isMobile),
        this.view.collectionAdd(this.carts),
        this.bindEvents();
    }
    refresh(e) {
      e && e.carts
        ? ((this.carts = e.carts),
          (this.view.collection = []),
          this.view.collectionAdd(this.carts),
          (this.options.allowRedirect = !1))
        : ((this.carts = null), (this.options.allowRedirect = !0));
    }
    bindEvents() {
      (this.carts && this.carts.length > 0) ||
        (this.options.allowRedirect = !0),
        this.bus.on("cart:refresh-exclusive", this.refresh.bind(this));
    }
    show() {
      this.carts &&
        this.carts.length > 0 &&
        (this.isMobile && this._constructOverlay(),
        super.show(),
        (this.firstTabStop = this.view.el),
        (this.lastTabStop = fr.lastTargetStop(this.view.el)),
        this.view.el.addEventListener(
          "keydown",
          this.handleKeyDownTargetBinded
        ));
    }
    hide() {
      this.carts &&
        this.carts.length > 0 &&
        (this.isMobile && this._removeOverlay(), super.hide());
    }
  }
  var Br, Fr;
  var qr =
      (Fr ||
        ((Fr = 1),
        (Br = function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 1e4;
          const i = document.querySelector(e);
          if (i) return void t(i);
          if ("undefined" == typeof MutationObserver) return;
          let o,
            r = !1;
          const s = new MutationObserver(() => {
            const n = document.querySelector(e);
            n && !r && ((r = !0), clearTimeout(o), s.disconnect(), t(n));
          });
          s.observe(document.documentElement, { childList: !0, subtree: !0 }),
            (o = setTimeout(() => {
              r || ((r = !0), s.disconnect());
            }, n));
        })),
      Br),
    Wr = i(qr);
  return (
    window &&
      ((window.Notifications = $r),
      (window.Bookmarks = xr),
      (window.Cart = Ur),
      (window.mlNavWhenElement = Wr)),
    { Notifications: $r, Bookmarks: xr, Cart: Ur }
  );
})();
