function ownKeys(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t &&
      (o = o.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, o);
  }
  return n;
}
function _objectSpread(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ownKeys(Object(n), !0).forEach(function (t) {
          _defineProperty(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ownKeys(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function _defineProperty(e, t, n) {
  return (
    (t = _toPropertyKey(t)) in e
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
function _toPropertyKey(e) {
  var t = _toPrimitive(e, "string");
  return "symbol" == typeof t ? t : t + "";
}
function _toPrimitive(e, t) {
  if ("object" != typeof e || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (void 0 !== n) {
    var o = n.call(e, t || "default");
    if ("object" != typeof o) return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === t ? String : Number)(e);
}
function _slicedToArray(e, t) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArrayLimit(e, t) ||
    _unsupportedIterableToArray(e, t) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      "Object" === n && e.constructor && (n = e.constructor.name),
      "Map" === n || "Set" === n
        ? Array.from(e)
        : "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? _arrayLikeToArray(e, t)
        : void 0
    );
  }
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function _iterableToArrayLimit(e, t) {
  var n =
    null == e
      ? null
      : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
  if (null != n) {
    var o,
      i,
      r,
      s,
      a = [],
      l = !0,
      c = !1;
    try {
      if (((r = (n = n.call(e)).next), 0 === t)) {
        if (Object(n) !== n) return;
        l = !1;
      } else
        for (
          ;
          !(l = (o = r.call(n)).done) && (a.push(o.value), a.length !== t);
          l = !0
        );
    } catch (e) {
      (c = !0), (i = e);
    } finally {
      try {
        if (!l && null != n.return && ((s = n.return()), Object(s) !== s))
          return;
      } finally {
        if (c) throw i;
      }
    }
    return a;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
var Searchbox = (function () {
  "use strict";
  function e(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var t,
    n = { exports: {} },
    o = { exports: {} },
    i = "object" == typeof Reflect ? Reflect : null,
    r =
      i && "function" == typeof i.apply
        ? i.apply
        : function (e, t, n) {
            return Function.prototype.apply.call(e, t, n);
          };
  t =
    i && "function" == typeof i.ownKeys
      ? i.ownKeys
      : Object.getOwnPropertySymbols
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : function (e) {
          return Object.getOwnPropertyNames(e);
        };
  var s =
    Number.isNaN ||
    function (e) {
      return e != e;
    };
  function a() {
    a.init.call(this);
  }
  (o.exports = a),
    (o.exports.once = function (e, t) {
      return new Promise(function (n, o) {
        function i(n) {
          e.removeListener(t, r), o(n);
        }
        function r() {
          "function" == typeof e.removeListener && e.removeListener("error", i),
            n([].slice.call(arguments));
        }
        y(e, t, r, { once: !0 }),
          "error" !== t &&
            (function (e, t, n) {
              "function" == typeof e.on && y(e, "error", t, n);
            })(e, i, { once: !0 });
      });
    }),
    (a.EventEmitter = a),
    (a.prototype._events = void 0),
    (a.prototype._eventsCount = 0),
    (a.prototype._maxListeners = void 0);
  var l = 10;
  function c(e) {
    if ("function" != typeof e)
      throw new TypeError(
        'The "listener" argument must be of type Function. Received type ' +
          typeof e
      );
  }
  function u(e) {
    return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners;
  }
  function d(e, t, n, o) {
    var i, r, s, a;
    if (
      (c(n),
      void 0 === (r = e._events)
        ? ((r = e._events = Object.create(null)), (e._eventsCount = 0))
        : (void 0 !== r.newListener &&
            (e.emit("newListener", t, n.listener ? n.listener : n),
            (r = e._events)),
          (s = r[t])),
      void 0 === s)
    )
      (s = r[t] = n), ++e._eventsCount;
    else if (
      ("function" == typeof s
        ? (s = r[t] = o ? [n, s] : [s, n])
        : o
        ? s.unshift(n)
        : s.push(n),
      (i = u(e)) > 0 && s.length > i && !s.warned)
    ) {
      s.warned = !0;
      var l = new Error(
        "Possible EventEmitter memory leak detected. " +
          s.length +
          " " +
          String(t) +
          " listeners added. Use emitter.setMaxListeners() to increase limit"
      );
      (l.name = "MaxListenersExceededWarning"),
        (l.emitter = e),
        (l.type = t),
        (l.count = s.length),
        (a = l),
        console && console.warn && console.warn(a);
    }
    return e;
  }
  function p() {
    if (!this.fired)
      return (
        this.target.removeListener(this.type, this.wrapFn),
        (this.fired = !0),
        0 === arguments.length
          ? this.listener.call(this.target)
          : this.listener.apply(this.target, arguments)
      );
  }
  function h(e, t, n) {
    var o = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
      i = p.bind(o);
    return (i.listener = n), (o.wrapFn = i), i;
  }
  function f(e, t, n) {
    var o = e._events;
    if (void 0 === o) return [];
    var i = o[t];
    return void 0 === i
      ? []
      : "function" == typeof i
      ? n
        ? [i.listener || i]
        : [i]
      : n
      ? (function (e) {
          for (var t = new Array(e.length), n = 0; n < t.length; ++n)
            t[n] = e[n].listener || e[n];
          return t;
        })(i)
      : m(i, i.length);
  }
  function g(e) {
    var t = this._events;
    if (void 0 !== t) {
      var n = t[e];
      if ("function" == typeof n) return 1;
      if (void 0 !== n) return n.length;
    }
    return 0;
  }
  function m(e, t) {
    for (var n = new Array(t), o = 0; o < t; ++o) n[o] = e[o];
    return n;
  }
  function y(e, t, n, o) {
    if ("function" == typeof e.on) o.once ? e.once(t, n) : e.on(t, n);
    else {
      if ("function" != typeof e.addEventListener)
        throw new TypeError(
          'The "emitter" argument must be of type EventEmitter. Received type ' +
            typeof e
        );
      e.addEventListener(t, function i(r) {
        o.once && e.removeEventListener(t, i), n(r);
      });
    }
  }
  Object.defineProperty(a, "defaultMaxListeners", {
    enumerable: !0,
    get: function () {
      return l;
    },
    set: function (e) {
      if ("number" != typeof e || e < 0 || s(e))
        throw new RangeError(
          'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
            e +
            "."
        );
      l = e;
    },
  }),
    (a.init = function () {
      (void 0 !== this._events &&
        this._events !== Object.getPrototypeOf(this)._events) ||
        ((this._events = Object.create(null)), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0);
    }),
    (a.prototype.setMaxListeners = function (e) {
      if ("number" != typeof e || e < 0 || s(e))
        throw new RangeError(
          'The value of "n" is out of range. It must be a non-negative number. Received ' +
            e +
            "."
        );
      return (this._maxListeners = e), this;
    }),
    (a.prototype.getMaxListeners = function () {
      return u(this);
    }),
    (a.prototype.emit = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
      var o = "error" === e,
        i = this._events;
      if (void 0 !== i) o = o && void 0 === i.error;
      else if (!o) return !1;
      if (o) {
        var s;
        if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s;
        var a = new Error(
          "Unhandled error." + (s ? " (" + s.message + ")" : "")
        );
        throw ((a.context = s), a);
      }
      var l = i[e];
      if (void 0 === l) return !1;
      if ("function" == typeof l) r(l, this, t);
      else {
        var c = l.length,
          u = m(l, c);
        for (n = 0; n < c; ++n) r(u[n], this, t);
      }
      return !0;
    }),
    (a.prototype.addListener = function (e, t) {
      return d(this, e, t, !1);
    }),
    (a.prototype.on = a.prototype.addListener),
    (a.prototype.prependListener = function (e, t) {
      return d(this, e, t, !0);
    }),
    (a.prototype.once = function (e, t) {
      return c(t), this.on(e, h(this, e, t)), this;
    }),
    (a.prototype.prependOnceListener = function (e, t) {
      return c(t), this.prependListener(e, h(this, e, t)), this;
    }),
    (a.prototype.removeListener = function (e, t) {
      var n, o, i, r, s;
      if ((c(t), void 0 === (o = this._events))) return this;
      if (void 0 === (n = o[e])) return this;
      if (n === t || n.listener === t)
        0 === --this._eventsCount
          ? (this._events = Object.create(null))
          : (delete o[e],
            o.removeListener &&
              this.emit("removeListener", e, n.listener || t));
      else if ("function" != typeof n) {
        for (i = -1, r = n.length - 1; r >= 0; r--)
          if (n[r] === t || n[r].listener === t) {
            (s = n[r].listener), (i = r);
            break;
          }
        if (i < 0) return this;
        0 === i
          ? n.shift()
          : (function (e, t) {
              for (; t + 1 < e.length; t++) e[t] = e[t + 1];
              e.pop();
            })(n, i),
          1 === n.length && (o[e] = n[0]),
          void 0 !== o.removeListener && this.emit("removeListener", e, s || t);
      }
      return this;
    }),
    (a.prototype.off = a.prototype.removeListener),
    (a.prototype.removeAllListeners = function (e) {
      var t, n, o;
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
        var i,
          r = Object.keys(n);
        for (o = 0; o < r.length; ++o)
          "removeListener" !== (i = r[o]) && this.removeAllListeners(i);
        return (
          this.removeAllListeners("removeListener"),
          (this._events = Object.create(null)),
          (this._eventsCount = 0),
          this
        );
      }
      if ("function" == typeof (t = n[e])) this.removeListener(e, t);
      else if (void 0 !== t)
        for (o = t.length - 1; o >= 0; o--) this.removeListener(e, t[o]);
      return this;
    }),
    (a.prototype.listeners = function (e) {
      return f(this, e, !0);
    }),
    (a.prototype.rawListeners = function (e) {
      return f(this, e, !1);
    }),
    (a.listenerCount = function (e, t) {
      return "function" == typeof e.listenerCount
        ? e.listenerCount(t)
        : g.call(e, t);
    }),
    (a.prototype.listenerCount = g),
    (a.prototype.eventNames = function () {
      return this._eventsCount > 0 ? t(this._events) : [];
    }),
    (function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = o.exports,
        r = (n = i) && n.__esModule ? n : { default: n };
      (t.default = r.default), (e.exports = t.default);
    })(n, n.exports);
  var v = e(n.exports),
    b = { exports: {} },
    _ = { exports: {} },
    C = { exports: {} };
  !(function (e, t) {
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
  })(C, C.exports),
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
          o = void 0,
          r = void 0,
          s = void 0,
          a = void 0,
          l = void 0,
          c = arguments[0] || {},
          u = 1,
          d = arguments.length,
          p = !1;
        "boolean" == typeof c && ((p = c), (c = arguments[u] || {}), u++);
        "object" !== (void 0 === c ? "undefined" : n(c)) &&
          "function" === !(void 0 === c || n(c)) &&
          (c = {});
        if (d <= u) return c;
        for (; u < d; u++)
          if (null != (t = arguments[u]))
            for (o in t)
              (r = c[o]),
                c !== (s = t[o]) &&
                  (p && s && ((0, i.default)(s) || (a = Array.isArray(s)))
                    ? (a
                        ? ((a = !1), (l = r && Array.isArray(r) ? r : []))
                        : (l = r && (0, i.default)(r) ? r : {}),
                      (c[o] = e(p, l, s)))
                    : void 0 !== s && (c[o] = s));
        return c;
      };
      var o,
        i = (o = C.exports) && o.__esModule ? o : { default: o };
      e.exports = t.default;
    })(_, _.exports),
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
        var o = arguments,
          r = void 0;
        t = 1 === o.length ? o[0] : o[1];
        var s = function () {},
          a = {
            url: 2 === o.length && "string" == typeof e ? e : ".",
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
        r = (0, i.default)(a, t || {});
        var l = {
            "application/json": "json",
            "text/html": "html",
            "text/plain": "text",
          },
          c = {};
        for (var u in l) l.hasOwnProperty(u) && (c[l[u]] = u);
        r.cache ||
          (r.url =
            r.url +
            (~r.url.indexOf("?") ? "&" : "?") +
            "nc=" +
            Math.floor(9e9 * Math.random()));
        var d = function (e, t) {
            r.complete.call(r.context, t, e);
          },
          p = function (e, t) {
            var n = "success";
            r.success.call(r.context, e, n, t), d(n, t);
          },
          h = function (e, t, n) {
            r.error.call(r.context, n, t, e), d(t, n);
          },
          f = Object.prototype.toString;
        r.method = r.method.toUpperCase();
        var g = document.createElement("a"),
          m = document.createElement("a");
        m.href = location.href;
        try {
          (g.href = r.url),
            (g.href = g.href),
            (r.crossDomain =
              m.protocol + "//" + m.host != g.protocol + "//" + g.host);
        } catch (e) {
          r.crossDomain = !0;
        }
        var y = new XMLHttpRequest(),
          v =
            r.crossDomain &&
            !("withCredentials" in y) &&
            "XDomainRequest" in window;
        v
          ? ((y = new XDomainRequest()).onload = function () {
              var e = y.contentType,
                t = void 0;
              if ("json" === (e && l[e[1]] ? l[e[1]].toLowerCase() : "json"))
                try {
                  t = JSON.parse(y.responseText);
                } catch (e) {
                  t = y.responseText;
                }
              else t = y.responseText;
              p(t, y);
            })
          : (y.onreadystatechange = function () {
              if (4 !== y.readyState);
              else {
                var e = void 0,
                  t = 1223 === y.status ? 204 : y.status;
                if ((t >= 200 && t < 300) || 304 === t) {
                  var n = /([\/a-z]+)(;|\s|$)/.exec(
                      y.getResponseHeader("content-type")
                    ),
                    o = n && l[n[1]] ? l[n[1]].toLowerCase() : "text";
                  if (((e = y.responseText), "json" === o))
                    try {
                      e = JSON.parse(e);
                    } catch (t) {
                      e = y.responseText;
                    }
                  p(e, y);
                } else h(new Error(y.statusText), "error", y);
              }
            });
        (y.onerror = function () {
          h(new Error(y.statusText || "Network request failed"), "error", y);
        }),
          ("GET" !== r.method && "HEAD" !== r.method) ||
            "string" != typeof r.data ||
            (r.url += (~r.url.indexOf("?") ? "&" : "?") + r.data);
        y.open(r.method, r.url),
          "include" === r.credentials && (y.withCredentials = !0);
        if (
          !r.preload &&
          (r.dataType &&
            c[r.dataType.toLowerCase()] &&
            (r.headers.Accept = c[r.dataType.toLowerCase()] + ", */*; q=0.01"),
          r.crossDomain ||
            r.headers["X-Requested-With"] ||
            (r.headers["X-Requested-With"] = "XMLHttpRequest"),
          (r.data =
            ((_ = r.data),
            (C = r.headers),
            (w = r.crossDomain),
            (x = "application/x-www-form-urlencoded; " + (S = "charset=UTF-8")),
            ("undefined" != typeof FormData && _ instanceof FormData) ||
            /^\[object\s(ArrayBuffer|File|Blob)\]$/.test(f.call(_))
              ? _
              : ("undefined" != typeof URLSearchParams &&
                  _ instanceof URLSearchParams) ||
                "string" == typeof _
              ? (void 0 === C["Content-Type"] && (C["Content-Type"] = x),
                _.toString())
              : null !== _ && "object" === (void 0 === _ ? "undefined" : n(_))
              ? (void 0 === C["Content-Type"] &&
                  (C["Content-Type"] = w ? x : "application/json;  " + S),
                JSON.stringify(_))
              : _)),
          !v)
        )
          for (var b in r.headers) y.setRequestHeader(b, r.headers[b]);
        var _, C, w, S, x;
        return y.send(r.data), this;
      };
      var o,
        i = (o = _.exports) && o.__esModule ? o : { default: o };
      e.exports = t.default;
    })(b, b.exports);
  var w = e(b.exports),
    S = { exports: {} };
  !(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n,
      o =
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
      i = (n = C.exports) && n.__esModule ? n : { default: n };
    var r = "",
      s = "/",
      a = !1,
      l = "";
    function c(e) {
      var t = document.cookie.split("; "),
        n = null,
        o = t.length;
      if (!o) return n;
      for (var i = 0; i < o; i++) {
        var r = t[i].split("=");
        if (e === decodeURIComponent(r.shift())) {
          n = decodeURIComponent(r.join("="));
          break;
        }
      }
      return n;
    }
    function u(e, t, n) {
      var c =
        null !=
        (n =
          "object" === (void 0 === n ? "undefined" : o(n)) ? n : { expires: n })
          .expires
          ? n.expires
          : r;
      "string" == typeof c && "" !== c
        ? (c = new Date(c))
        : "number" == typeof c && (c = new Date(+new Date() + 864e5 * c)),
        c && "toGMTString" in c && (c = "; expires=" + c.toGMTString());
      var u = "; path=" + (n.path || s),
        d = n.domain || l;
      d = d ? "; domain=" + d : "";
      var p = "";
      if (n.sameSite)
        switch (
          "string" == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite
        ) {
          case !0:
            p += "; SameSite=Strict";
            break;
          case "lax":
            p += "; SameSite=Lax";
            break;
          case "strict":
            p += "; SameSite=Strict";
            break;
          case "none":
            p += "; SameSite=None";
        }
      var f = n.secure || a ? "; secure" : "";
      "object" == (void 0 === t ? "undefined" : o(t)) &&
        (t = Array.isArray(t) || (0, i.default)(t) ? JSON.stringify(t) : ""),
        (document.cookie = h(e) + "=" + h(t) + c + u + d + f + p);
    }
    function d(e) {
      u(e, "", -1);
    }
    var p = {
      get: c,
      set: u,
      remove: d,
      isEnabled: function () {
        if (navigator.cookieEnabled) return !0;
        u("__", "_");
        var e = "_" === c("__");
        return d("__"), e;
      },
    };
    function h(e) {
      return String(e).replace(/[,;"\\=\s%]/g, function (e) {
        return encodeURIComponent(e);
      });
    }
    (t.default = p), (e.exports = t.default);
  })(S, S.exports);
  var x = e(S.exports),
    L = { exports: {} };
  !(function (e, t) {
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
    function o(e) {
      for (var t = 0, n = e.length, o = []; t < n; t++) o.push(e[t]);
      return o;
    }
    (t.default = function (e, t, i) {
      var r,
        s = arguments,
        a = (function (e) {
          if (!e) return [];
          return "string" == typeof e
            ? o(document.querySelectorAll(e))
            : /^\[object (HTMLCollection|NodeList|Object)\]$/.test(
                Object.prototype.toString.call(e)
              ) &&
              ("number" == typeof e.length ||
                Object.prototype.hasOwnProperty.call(e, "length")) &&
              e.length > 0 &&
              e[0].nodeType > 0
            ? o(e)
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
            e.style[t] = i;
          })
        : "object" === (void 0 === t ? "undefined" : n(t)) &&
          (r = function (e) {
            Object.keys(t).forEach(function (n) {
              e.style[n] = t[n];
            });
          });
      for (var d = 0; d < l; d++) r(a[d]);
    }),
      (e.exports = t.default);
  })(L, L.exports);
  var T,
    E,
    A = e(L.exports),
    O = { exports: {} };
  (T = O),
    (E = O.exports),
    Object.defineProperty(E, "__esModule", { value: !0 }),
    (E.default = function e(t, n) {
      var o = t.parentNode,
        i = n ? n.toUpperCase() : n;
      return null === o
        ? o
        : 1 !== o.nodeType
        ? e(o, i)
        : void 0 !== n && o.tagName === i
        ? o
        : void 0 !== n && o.tagName !== i
        ? e(o, i)
        : void 0 === n
        ? o
        : void 0;
    }),
    (T.exports = E.default);
  var N = e(O.exports),
    M = {};
  !(function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.addClass = n),
      (e.removeClass = o),
      (e.hasClass = i);
    var t = !!document.createElement("div").classList;
    function n(e, n) {
      t
        ? e.classList.add(n)
        : e.setAttribute("class", e.getAttribute("class") + " " + n);
    }
    function o(e, n) {
      t
        ? e.classList.remove(n)
        : e.setAttribute(
            "class",
            e.className.replace(
              new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"),
              " "
            )
          );
    }
    function i(e, n) {
      return t
        ? e.classList.contains(n)
        : new RegExp("(^| )" + n + "( |$)", "gi").test(e.className);
    }
    var r = { addClass: n, removeClass: o, hasClass: i };
    e.default = r;
  })(M);
  var k = {};
  !(function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.once = void 0),
      (e.initEvent = p),
      (e.on = f),
      (e.off = m),
      (e.trigger = y);
    var t = o(_.exports),
      n = o(C.exports);
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var i = (function () {
        var e = [];
        for (var t in document)
          if ("on" === t.substring(0, 2)) {
            var n = t.replace("on", "");
            e.push(n);
          }
        return e;
      })(),
      r = i.filter(function (e) {
        return /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/.test(e);
      }),
      s = !!document.addEventListener,
      a = s ? "addEventListener" : "attachEvent",
      l = s ? "removeEventListener" : "detachEvent",
      c = s ? "dispatchEvent" : "fireEvent";
    function u(e) {
      return e
        ? "string" == typeof e
          ? d(document.querySelectorAll(e))
          : /^\[object (HTMLCollection|NodeList|Object)\]$/.test(
              Object.prototype.toString.call(e)
            ) &&
            ("number" == typeof e.length ||
              Object.prototype.hasOwnProperty.call(e, "length"))
          ? 0 === e.length || e[0].nodeType < 1
            ? []
            : d(e)
          : Array.isArray(e)
          ? [].concat(e)
          : [e]
        : [];
    }
    function d(e) {
      for (var t = 0, n = e.length, o = []; t < n; t++) o.push(e[t]);
      return o;
    }
    function p(e, n) {
      "string" != typeof e && (e = (n = e).type);
      var o = void 0,
        s = -1 !== i.indexOf(e),
        a = s && -1 !== r.indexOf(e),
        l = (0, t.default)({ bubbles: s, cancelable: s, detail: void 0 }, n);
      return (
        document.createEvent
          ? (o = document.createEvent(
              a && window.MouseEvent ? "MouseEvents" : "Events"
            )).initEvent(e, l.bubbles, l.cancelable, l.detail)
          : document.createEventObject &&
            ((o = document.createEventObject(window.event)),
            a && (o.button = 1),
            l.bubbles || (o.cancelBubble = !0)),
        o
      );
    }
    function h(e) {
      return "on" === e.substr(0, 2) ? (s ? e.substr(2) : e) : s ? e : "on" + e;
    }
    function f(e, t, n, o) {
      u(e).forEach(function (e) {
        e[a](h(t), n, o || !1);
      });
    }
    function g(e, t, n, o) {
      u(e).forEach(function (e) {
        var i = n;
        (n = function (t) {
          return m(e, t.type, n), i.apply(e, arguments);
        }),
          e[a](h(t), n, o || !1);
      });
    }
    function m(e, t, n) {
      u(e).forEach(function (e) {
        e[l](h(t), n);
      });
    }
    function y(e, t, o) {
      var i = this,
        r = "string" == typeof t ? t : t.type;
      (t = "string" == typeof t || (0, n.default)(t) ? p(t, o) : t),
        u(e).forEach(function (e) {
          t.type in focus && "function" == typeof i[t.type]
            ? i[t.type]()
            : s
            ? e[c](t)
            : e[c](h(r), t);
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
            (this.stoppedImmediatePropagation = !0), this.stopPropagation();
          },
        },
      }),
      (e.once = g);
    var v = { on: f, once: g, off: m, trigger: y };
    e.default = v;
  })(k);
  const I = Object.entries,
    R = Object.setPrototypeOf,
    P = Object.isFrozen,
    $ = Object.getPrototypeOf,
    D = Object.getOwnPropertyDescriptor;
  let j = Object.freeze,
    U = Object.seal,
    H = Object.create,
    z = "undefined" != typeof Reflect && Reflect,
    F = z.apply,
    q = z.construct;
  j ||
    (j = function (e) {
      return e;
    }),
    U ||
      (U = function (e) {
        return e;
      }),
    F ||
      (F = function (e, t, n) {
        return e.apply(t, n);
      }),
    q ||
      (q = function (e, t) {
        return new e(...t);
      });
  const B = re(Array.prototype.forEach),
    W = re(Array.prototype.lastIndexOf),
    V = re(Array.prototype.pop),
    G = re(Array.prototype.push),
    Y = re(Array.prototype.splice),
    X = re(String.prototype.toLowerCase),
    K = re(String.prototype.toString),
    J = re(String.prototype.match),
    Z = re(String.prototype.replace),
    Q = re(String.prototype.indexOf),
    ee = re(String.prototype.trim),
    te = re(Object.prototype.hasOwnProperty),
    ne = re(RegExp.prototype.test),
    oe =
      ((ie = TypeError),
      function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return q(ie, t);
      });
  var ie;
  function re(e) {
    return function (t) {
      t instanceof RegExp && (t.lastIndex = 0);
      for (
        var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1;
        i < n;
        i++
      )
        o[i - 1] = arguments[i];
      return F(e, t, o);
    };
  }
  function se(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : X;
    R && R(e, null);
    let o = t.length;
    for (; o--; ) {
      let i = t[o];
      if ("string" == typeof i) {
        const e = n(i);
        e !== i && (P(t) || (t[o] = e), (i = e));
      }
      e[i] = !0;
    }
    return e;
  }
  function ae(e) {
    for (let t = 0; t < e.length; t++) {
      te(e, t) || (e[t] = null);
    }
    return e;
  }
  function le(e) {
    const t = H(null);
    for (const o of I(e)) {
      var n = _slicedToArray(o, 2);
      const i = n[0],
        r = n[1];
      te(e, i) &&
        (Array.isArray(r)
          ? (t[i] = ae(r))
          : r && "object" == typeof r && r.constructor === Object
          ? (t[i] = le(r))
          : (t[i] = r));
    }
    return t;
  }
  function ce(e, t) {
    for (; null !== e; ) {
      const n = D(e, t);
      if (n) {
        if (n.get) return re(n.get);
        if ("function" == typeof n.value) return re(n.value);
      }
      e = $(e);
    }
    return function () {
      return null;
    };
  }
  const ue = j([
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
    de = j([
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
    pe = j([
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
    he = j([
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
    fe = j([
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
    ge = j([
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
    me = j(["#text"]),
    ye = j([
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
    ve = j([
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
    be = j([
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
    _e = j(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    Ce = U(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    we = U(/<%[\w\W]*|[\w\W]*%>/gm),
    Se = U(/\$\{[\w\W]*/gm),
    xe = U(/^data-[\-\w.\u00B7-\uFFFF]+$/),
    Le = U(/^aria-[\-\w]+$/),
    Te = U(
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    ),
    Ee = U(/^(?:\w+script|data):/i),
    Ae = U(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    Oe = U(/^html$/i),
    Ne = U(/^[a-z][.\w]*(-[.\w]+)+$/i);
  var Me = Object.freeze({
    __proto__: null,
    ARIA_ATTR: Le,
    ATTR_WHITESPACE: Ae,
    CUSTOM_ELEMENT: Ne,
    DATA_ATTR: xe,
    DOCTYPE_NAME: Oe,
    ERB_EXPR: we,
    IS_ALLOWED_URI: Te,
    IS_SCRIPT_OR_DATA: Ee,
    MUSTACHE_EXPR: Ce,
    TMPLIT_EXPR: Se,
  });
  const ke = 1,
    Ie = 3,
    Re = 7,
    Pe = 8,
    $e = 9,
    De = function () {
      return "undefined" == typeof window ? null : window;
    };
  var je = (function e() {
      let t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : De();
      const n = (t) => e(t);
      if (
        ((n.version = "3.2.6"),
        (n.removed = []),
        !t || !t.document || t.document.nodeType !== $e || !t.Element)
      )
        return (n.isSupported = !1), n;
      let o = t.document;
      const i = o,
        r = i.currentScript,
        s = t.DocumentFragment,
        a = t.HTMLTemplateElement,
        l = t.Node,
        c = t.Element,
        u = t.NodeFilter,
        d = t.NamedNodeMap,
        p = void 0 === d ? t.NamedNodeMap || t.MozNamedAttrMap : d,
        h = t.HTMLFormElement,
        f = t.DOMParser,
        g = t.trustedTypes,
        m = c.prototype,
        y = ce(m, "cloneNode"),
        v = ce(m, "remove"),
        b = ce(m, "nextSibling"),
        _ = ce(m, "childNodes"),
        C = ce(m, "parentNode");
      if ("function" == typeof a) {
        const e = o.createElement("template");
        e.content && e.content.ownerDocument && (o = e.content.ownerDocument);
      }
      let w,
        S = "";
      const x = o,
        L = x.implementation,
        T = x.createNodeIterator,
        E = x.createDocumentFragment,
        A = x.getElementsByTagName,
        O = i.importNode;
      let N = {
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
        "function" == typeof I &&
        "function" == typeof C &&
        L &&
        void 0 !== L.createHTMLDocument;
      const M = Me.MUSTACHE_EXPR,
        k = Me.ERB_EXPR,
        R = Me.TMPLIT_EXPR,
        P = Me.DATA_ATTR,
        $ = Me.ARIA_ATTR,
        D = Me.IS_SCRIPT_OR_DATA,
        U = Me.ATTR_WHITESPACE,
        z = Me.CUSTOM_ELEMENT;
      let F = Me.IS_ALLOWED_URI,
        q = null;
      const ie = se({}, [...ue, ...de, ...pe, ...fe, ...me]);
      let re = null;
      const ae = se({}, [...ye, ...ve, ...be, ..._e]);
      let Ce = Object.seal(
          H(null, {
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
        we = null,
        Se = null,
        xe = !0,
        Le = !0,
        Ee = !1,
        Ae = !0,
        Ne = !1,
        je = !0,
        Ue = !1,
        He = !1,
        ze = !1,
        Fe = !1,
        qe = !1,
        Be = !1,
        We = !0,
        Ve = !1,
        Ge = !0,
        Ye = !1,
        Xe = {},
        Ke = null;
      const Je = se({}, [
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
      const Qe = se({}, ["audio", "video", "img", "source", "image", "track"]);
      let et = null;
      const tt = se({}, [
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
        nt = "http://www.w3.org/1998/Math/MathML",
        ot = "http://www.w3.org/2000/svg",
        it = "http://www.w3.org/1999/xhtml";
      let rt = it,
        st = !1,
        at = null;
      const lt = se({}, [nt, ot, it], K);
      let ct = se({}, ["mi", "mo", "mn", "ms", "mtext"]),
        ut = se({}, ["annotation-xml"]);
      const dt = se({}, ["title", "style", "font", "a", "script"]);
      let pt = null;
      const ht = ["application/xhtml+xml", "text/html"];
      let ft = null,
        gt = null;
      const mt = o.createElement("form"),
        yt = function (e) {
          return e instanceof RegExp || e instanceof Function;
        },
        vt = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!gt || gt !== e) {
            if (
              ((e && "object" == typeof e) || (e = {}),
              (e = le(e)),
              (pt =
                -1 === ht.indexOf(e.PARSER_MEDIA_TYPE)
                  ? "text/html"
                  : e.PARSER_MEDIA_TYPE),
              (ft = "application/xhtml+xml" === pt ? K : X),
              (q = te(e, "ALLOWED_TAGS") ? se({}, e.ALLOWED_TAGS, ft) : ie),
              (re = te(e, "ALLOWED_ATTR") ? se({}, e.ALLOWED_ATTR, ft) : ae),
              (at = te(e, "ALLOWED_NAMESPACES")
                ? se({}, e.ALLOWED_NAMESPACES, K)
                : lt),
              (et = te(e, "ADD_URI_SAFE_ATTR")
                ? se(le(tt), e.ADD_URI_SAFE_ATTR, ft)
                : tt),
              (Ze = te(e, "ADD_DATA_URI_TAGS")
                ? se(le(Qe), e.ADD_DATA_URI_TAGS, ft)
                : Qe),
              (Ke = te(e, "FORBID_CONTENTS")
                ? se({}, e.FORBID_CONTENTS, ft)
                : Je),
              (we = te(e, "FORBID_TAGS") ? se({}, e.FORBID_TAGS, ft) : le({})),
              (Se = te(e, "FORBID_ATTR") ? se({}, e.FORBID_ATTR, ft) : le({})),
              (Xe = !!te(e, "USE_PROFILES") && e.USE_PROFILES),
              (xe = !1 !== e.ALLOW_ARIA_ATTR),
              (Le = !1 !== e.ALLOW_DATA_ATTR),
              (Ee = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
              (Ae = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
              (Ne = e.SAFE_FOR_TEMPLATES || !1),
              (je = !1 !== e.SAFE_FOR_XML),
              (Ue = e.WHOLE_DOCUMENT || !1),
              (Fe = e.RETURN_DOM || !1),
              (qe = e.RETURN_DOM_FRAGMENT || !1),
              (Be = e.RETURN_TRUSTED_TYPE || !1),
              (ze = e.FORCE_BODY || !1),
              (We = !1 !== e.SANITIZE_DOM),
              (Ve = e.SANITIZE_NAMED_PROPS || !1),
              (Ge = !1 !== e.KEEP_CONTENT),
              (Ye = e.IN_PLACE || !1),
              (F = e.ALLOWED_URI_REGEXP || Te),
              (rt = e.NAMESPACE || it),
              (ct = e.MATHML_TEXT_INTEGRATION_POINTS || ct),
              (ut = e.HTML_INTEGRATION_POINTS || ut),
              (Ce = e.CUSTOM_ELEMENT_HANDLING || {}),
              e.CUSTOM_ELEMENT_HANDLING &&
                yt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                (Ce.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
              e.CUSTOM_ELEMENT_HANDLING &&
                yt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                (Ce.attributeNameCheck =
                  e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
              e.CUSTOM_ELEMENT_HANDLING &&
                "boolean" ==
                  typeof e.CUSTOM_ELEMENT_HANDLING
                    .allowCustomizedBuiltInElements &&
                (Ce.allowCustomizedBuiltInElements =
                  e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
              Ne && (Le = !1),
              qe && (Fe = !0),
              Xe &&
                ((q = se({}, me)),
                (re = []),
                !0 === Xe.html && (se(q, ue), se(re, ye)),
                !0 === Xe.svg && (se(q, de), se(re, ve), se(re, _e)),
                !0 === Xe.svgFilters && (se(q, pe), se(re, ve), se(re, _e)),
                !0 === Xe.mathMl && (se(q, fe), se(re, be), se(re, _e))),
              e.ADD_TAGS && (q === ie && (q = le(q)), se(q, e.ADD_TAGS, ft)),
              e.ADD_ATTR &&
                (re === ae && (re = le(re)), se(re, e.ADD_ATTR, ft)),
              e.ADD_URI_SAFE_ATTR && se(et, e.ADD_URI_SAFE_ATTR, ft),
              e.FORBID_CONTENTS &&
                (Ke === Je && (Ke = le(Ke)), se(Ke, e.FORBID_CONTENTS, ft)),
              Ge && (q["#text"] = !0),
              Ue && se(q, ["html", "head", "body"]),
              q.table && (se(q, ["tbody"]), delete we.tbody),
              e.TRUSTED_TYPES_POLICY)
            ) {
              if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML)
                throw oe(
                  'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
                );
              if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
                throw oe(
                  'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
                );
              (w = e.TRUSTED_TYPES_POLICY), (S = w.createHTML(""));
            } else
              void 0 === w &&
                (w = (function (e, t) {
                  if (
                    "object" != typeof e ||
                    "function" != typeof e.createPolicy
                  )
                    return null;
                  let n = null;
                  const o = "data-tt-policy-suffix";
                  t && t.hasAttribute(o) && (n = t.getAttribute(o));
                  const i = "dompurify" + (n ? "#" + n : "");
                  try {
                    return e.createPolicy(i, {
                      createHTML: (e) => e,
                      createScriptURL: (e) => e,
                    });
                  } catch (e) {
                    return (
                      console.warn(
                        "TrustedTypes policy " + i + " could not be created."
                      ),
                      null
                    );
                  }
                })(g, r)),
                null !== w && "string" == typeof S && (S = w.createHTML(""));
            j && j(e), (gt = e);
          }
        },
        bt = se({}, [...de, ...pe, ...he]),
        _t = se({}, [...fe, ...ge]),
        Ct = function (e) {
          G(n.removed, { element: e });
          try {
            C(e).removeChild(e);
          } catch (t) {
            v(e);
          }
        },
        wt = function (e, t) {
          try {
            G(n.removed, { attribute: t.getAttributeNode(e), from: t });
          } catch (e) {
            G(n.removed, { attribute: null, from: t });
          }
          if ((t.removeAttribute(e), "is" === e))
            if (Fe || qe)
              try {
                Ct(t);
              } catch (e) {}
            else
              try {
                t.setAttribute(e, "");
              } catch (e) {}
        },
        St = function (e) {
          let t = null,
            n = null;
          if (ze) e = "<remove></remove>" + e;
          else {
            const t = J(e, /^[\r\n\t ]+/);
            n = t && t[0];
          }
          "application/xhtml+xml" === pt &&
            rt === it &&
            (e =
              '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
              e +
              "</body></html>");
          const i = w ? w.createHTML(e) : e;
          if (rt === it)
            try {
              t = new f().parseFromString(i, pt);
            } catch (e) {}
          if (!t || !t.documentElement) {
            t = L.createDocument(rt, "template", null);
            try {
              t.documentElement.innerHTML = st ? S : i;
            } catch (e) {}
          }
          const r = t.body || t.documentElement;
          return (
            e &&
              n &&
              r.insertBefore(o.createTextNode(n), r.childNodes[0] || null),
            rt === it
              ? A.call(t, Ue ? "html" : "body")[0]
              : Ue
              ? t.documentElement
              : r
          );
        },
        xt = function (e) {
          return T.call(
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
        Lt = function (e) {
          return (
            e instanceof h &&
            ("string" != typeof e.nodeName ||
              "string" != typeof e.textContent ||
              "function" != typeof e.removeChild ||
              !(e.attributes instanceof p) ||
              "function" != typeof e.removeAttribute ||
              "function" != typeof e.setAttribute ||
              "string" != typeof e.namespaceURI ||
              "function" != typeof e.insertBefore ||
              "function" != typeof e.hasChildNodes)
          );
        },
        Tt = function (e) {
          return "function" == typeof l && e instanceof l;
        };
      function Et(e, t, o) {
        B(e, (e) => {
          e.call(n, t, o, gt);
        });
      }
      const At = function (e) {
          let t = null;
          if ((Et(N.beforeSanitizeElements, e, null), Lt(e))) return Ct(e), !0;
          const o = ft(e.nodeName);
          if (
            (Et(N.uponSanitizeElement, e, { tagName: o, allowedTags: q }),
            je &&
              e.hasChildNodes() &&
              !Tt(e.firstElementChild) &&
              ne(/<[/\w!]/g, e.innerHTML) &&
              ne(/<[/\w!]/g, e.textContent))
          )
            return Ct(e), !0;
          if (e.nodeType === Re) return Ct(e), !0;
          if (je && e.nodeType === Pe && ne(/<[/\w]/g, e.data))
            return Ct(e), !0;
          if (!q[o] || we[o]) {
            if (!we[o] && Nt(o)) {
              if (Ce.tagNameCheck instanceof RegExp && ne(Ce.tagNameCheck, o))
                return !1;
              if (Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(o))
                return !1;
            }
            if (Ge && !Ke[o]) {
              const t = C(e) || e.parentNode,
                n = _(e) || e.childNodes;
              if (n && t) {
                for (let o = n.length - 1; o >= 0; --o) {
                  const i = y(n[o], !0);
                  (i.__removalCount = (e.__removalCount || 0) + 1),
                    t.insertBefore(i, b(e));
                }
              }
            }
            return Ct(e), !0;
          }
          return e instanceof c &&
            !(function (e) {
              let t = C(e);
              (t && t.tagName) ||
                (t = { namespaceURI: rt, tagName: "template" });
              const n = X(e.tagName),
                o = X(t.tagName);
              return (
                !!at[e.namespaceURI] &&
                (e.namespaceURI === ot
                  ? t.namespaceURI === it
                    ? "svg" === n
                    : t.namespaceURI === nt
                    ? "svg" === n && ("annotation-xml" === o || ct[o])
                    : Boolean(bt[n])
                  : e.namespaceURI === nt
                  ? t.namespaceURI === it
                    ? "math" === n
                    : t.namespaceURI === ot
                    ? "math" === n && ut[o]
                    : Boolean(_t[n])
                  : e.namespaceURI === it
                  ? !(t.namespaceURI === ot && !ut[o]) &&
                    !(t.namespaceURI === nt && !ct[o]) &&
                    !_t[n] &&
                    (dt[n] || !bt[n])
                  : !("application/xhtml+xml" !== pt || !at[e.namespaceURI]))
              );
            })(e)
            ? (Ct(e), !0)
            : ("noscript" !== o && "noembed" !== o && "noframes" !== o) ||
              !ne(/<\/no(script|embed|frames)/i, e.innerHTML)
            ? (Ne &&
                e.nodeType === Ie &&
                ((t = e.textContent),
                B([M, k, R], (e) => {
                  t = Z(t, e, " ");
                }),
                e.textContent !== t &&
                  (G(n.removed, { element: e.cloneNode() }),
                  (e.textContent = t))),
              Et(N.afterSanitizeElements, e, null),
              !1)
            : (Ct(e), !0);
        },
        Ot = function (e, t, n) {
          if (We && ("id" === t || "name" === t) && (n in o || n in mt))
            return !1;
          if (Le && !Se[t] && ne(P, t));
          else if (xe && ne($, t));
          else if (!re[t] || Se[t]) {
            if (
              !(
                (Nt(e) &&
                  ((Ce.tagNameCheck instanceof RegExp &&
                    ne(Ce.tagNameCheck, e)) ||
                    (Ce.tagNameCheck instanceof Function &&
                      Ce.tagNameCheck(e))) &&
                  ((Ce.attributeNameCheck instanceof RegExp &&
                    ne(Ce.attributeNameCheck, t)) ||
                    (Ce.attributeNameCheck instanceof Function &&
                      Ce.attributeNameCheck(t)))) ||
                ("is" === t &&
                  Ce.allowCustomizedBuiltInElements &&
                  ((Ce.tagNameCheck instanceof RegExp &&
                    ne(Ce.tagNameCheck, n)) ||
                    (Ce.tagNameCheck instanceof Function &&
                      Ce.tagNameCheck(n))))
              )
            )
              return !1;
          } else if (et[t]);
          else if (ne(F, Z(n, U, "")));
          else if (
            ("src" !== t && "xlink:href" !== t && "href" !== t) ||
            "script" === e ||
            0 !== Q(n, "data:") ||
            !Ze[e]
          ) {
            if (Ee && !ne(D, Z(n, U, "")));
            else if (n) return !1;
          } else;
          return !0;
        },
        Nt = function (e) {
          return "annotation-xml" !== e && J(e, z);
        },
        Mt = function (e) {
          Et(N.beforeSanitizeAttributes, e, null);
          const t = e.attributes;
          if (!t || Lt(e)) return;
          const o = {
            attrName: "",
            attrValue: "",
            keepAttr: !0,
            allowedAttributes: re,
            forceKeepAttr: void 0,
          };
          let i = t.length;
          for (; i--; ) {
            const r = t[i],
              s = r.name,
              a = r.namespaceURI,
              l = r.value,
              c = ft(s),
              u = l;
            let d = "value" === s ? u : ee(u);
            if (
              ((o.attrName = c),
              (o.attrValue = d),
              (o.keepAttr = !0),
              (o.forceKeepAttr = void 0),
              Et(N.uponSanitizeAttribute, e, o),
              (d = o.attrValue),
              !Ve ||
                ("id" !== c && "name" !== c) ||
                (wt(s, e), (d = "user-content-" + d)),
              je && ne(/((--!?|])>)|<\/(style|title)/i, d))
            ) {
              wt(s, e);
              continue;
            }
            if (o.forceKeepAttr) continue;
            if (!o.keepAttr) {
              wt(s, e);
              continue;
            }
            if (!Ae && ne(/\/>/i, d)) {
              wt(s, e);
              continue;
            }
            Ne &&
              B([M, k, R], (e) => {
                d = Z(d, e, " ");
              });
            const p = ft(e.nodeName);
            if (Ot(p, c, d)) {
              if (
                w &&
                "object" == typeof g &&
                "function" == typeof g.getAttributeType
              )
                if (a);
                else
                  switch (g.getAttributeType(p, c)) {
                    case "TrustedHTML":
                      d = w.createHTML(d);
                      break;
                    case "TrustedScriptURL":
                      d = w.createScriptURL(d);
                  }
              if (d !== u)
                try {
                  a ? e.setAttributeNS(a, s, d) : e.setAttribute(s, d),
                    Lt(e) ? Ct(e) : V(n.removed);
                } catch (t) {
                  wt(s, e);
                }
            } else wt(s, e);
          }
          Et(N.afterSanitizeAttributes, e, null);
        },
        kt = function e(t) {
          let n = null;
          const o = xt(t);
          for (Et(N.beforeSanitizeShadowDOM, t, null); (n = o.nextNode()); )
            Et(N.uponSanitizeShadowNode, n, null),
              At(n),
              Mt(n),
              n.content instanceof s && e(n.content);
          Et(N.afterSanitizeShadowDOM, t, null);
        };
      return (
        (n.sanitize = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o = null,
            r = null,
            a = null,
            c = null;
          if (
            ((st = !e),
            st && (e = "\x3c!--\x3e"),
            "string" != typeof e && !Tt(e))
          ) {
            if ("function" != typeof e.toString)
              throw oe("toString is not a function");
            if ("string" != typeof (e = e.toString()))
              throw oe("dirty is not a string, aborting");
          }
          if (!n.isSupported) return e;
          if (
            (He || vt(t),
            (n.removed = []),
            "string" == typeof e && (Ye = !1),
            Ye)
          ) {
            if (e.nodeName) {
              const t = ft(e.nodeName);
              if (!q[t] || we[t])
                throw oe(
                  "root node is forbidden and cannot be sanitized in-place"
                );
            }
          } else if (e instanceof l)
            (o = St("\x3c!----\x3e")),
              (r = o.ownerDocument.importNode(e, !0)),
              (r.nodeType === ke && "BODY" === r.nodeName) ||
              "HTML" === r.nodeName
                ? (o = r)
                : o.appendChild(r);
          else {
            if (!Fe && !Ne && !Ue && -1 === e.indexOf("<"))
              return w && Be ? w.createHTML(e) : e;
            if (((o = St(e)), !o)) return Fe ? null : Be ? S : "";
          }
          o && ze && Ct(o.firstChild);
          const u = xt(Ye ? e : o);
          for (; (a = u.nextNode()); )
            At(a), Mt(a), a.content instanceof s && kt(a.content);
          if (Ye) return e;
          if (Fe) {
            if (qe)
              for (c = E.call(o.ownerDocument); o.firstChild; )
                c.appendChild(o.firstChild);
            else c = o;
            return (
              (re.shadowroot || re.shadowrootmode) && (c = O.call(i, c, !0)), c
            );
          }
          let d = Ue ? o.outerHTML : o.innerHTML;
          return (
            Ue &&
              q["!doctype"] &&
              o.ownerDocument &&
              o.ownerDocument.doctype &&
              o.ownerDocument.doctype.name &&
              ne(Oe, o.ownerDocument.doctype.name) &&
              (d = "<!DOCTYPE " + o.ownerDocument.doctype.name + ">\n" + d),
            Ne &&
              B([M, k, R], (e) => {
                d = Z(d, e, " ");
              }),
            w && Be ? w.createHTML(d) : d
          );
        }),
        (n.setConfig = function () {
          vt(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          ),
            (He = !0);
        }),
        (n.clearConfig = function () {
          (gt = null), (He = !1);
        }),
        (n.isValidAttribute = function (e, t, n) {
          gt || vt({});
          const o = ft(e),
            i = ft(t);
          return Ot(o, i, n);
        }),
        (n.addHook = function (e, t) {
          "function" == typeof t && G(N[e], t);
        }),
        (n.removeHook = function (e, t) {
          if (void 0 !== t) {
            const n = W(N[e], t);
            return -1 === n ? void 0 : Y(N[e], n, 1)[0];
          }
          return V(N[e]);
        }),
        (n.removeHooks = function (e) {
          N[e] = [];
        }),
        (n.removeAllHooks = function () {
          N = {
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
    Ue = "".replace,
    He = /[&<>'"]/g,
    ze = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
  function Fe(e) {
    return ze[e];
  }
  const qe = /^[a-zA-ZÀ-ÖØ-öø-ÿ\u00f1\u00d10-9\s]+$/,
    Be = "plain",
    We = "official_store",
    Ve = "last_search",
    Ge = 13,
    Ye = 27,
    Xe = 38,
    Ke = 40,
    Je = "rb",
    Ze = "UNKNOWN";
  function Qe(e, t, n, o) {
    k.on(o || document, e, (e) => {
      let o = e.target || e.srcElement,
        i = M.hasClass(o, t);
      for (; o && !i; ) (o = o.parentElement), (i = o && M.hasClass(o, t));
      i && n(e, o);
    });
  }
  function et(e) {
    return "MLB" === e || "MPT" === e
      ? {
          lastSearches: "Últimas buscas",
          in: "em",
          inAll: "em todas as ",
          officialStores: "lojas oficiais",
        }
      : {
          lastSearches: "Últimas búsquedas",
          in: "en",
          inAll: "en todas las ",
          officialStores: "tiendas oficiales",
        };
  }
  function tt(e) {
    const t = {};
    return (
      (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = document.querySelector("meta[name=browser-support]");
        if (!n || !e) return t;
        const o = new RegExp(`\\b${e}=(true|false)\\b`, "g").exec(n.content);
        return o ? JSON.parse(o[1]) : t;
      })("samesite") && ((t.sameSite = "none"), (t.secure = !0)),
      _objectSpread(_objectSpread({}, e), t)
    );
  }
  function nt(e) {
    const t = encodeURIComponent(e.toLowerCase().trim().replace(/\s+/g, "-"));
    return "ping" === t ? "ping-pong" : "robots.txt" === t ? "robots-txt" : t;
  }
  function ot(e) {
    return e && ((t = e), Ue.call(t, He, Fe));
    var t;
  }
  function it(e) {
    return e.toLowerCase().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
  }
  function rt(e) {
    return e && "LI" === e.tagName;
  }
  function st(e, t) {
    e &&
      t &&
      (t(e),
      Array.from(e.children).forEach((e) => {
        st(e, t);
      }));
  }
  function at(e, t, n, o) {
    const i = o.siteId,
      r = { MLB: "Loja", default: "Tienda" };
    return `${o.searchEndpoint.replace("$query", nt(e))}_${r[i] || r.default}_${
      "all" === t ? t : n.toLowerCase().replace(/\s+/g, "-")
    }`;
  }
  var lt = "nav-category-content-options",
    ct = "navigations-options",
    ut = "image-option image-option-select";
  function dt(e) {
    const t = document.getElementById("category-label");
    t && (t.textContent = e);
  }
  const pt = "sb-suggestions";
  var ht = {
    platformId: "ML",
    siteId: "MLA",
    siteDomain: "mercadolibre.com.ar",
    searchEndpoint: "http://listado.mercadolibre.com.ar/$query",
    autosuggestDomain: "https://http2.mlstatic.com",
    categoryEndpoint: null,
    officialStores: !0,
    officialStoresFilterId: "official_store",
    limit: 6,
    loggedIn: !1,
    minChars: 0,
    delay: 120,
    offsetLeft: 0,
    offsetTop: 0,
    cache: !0,
    autoSubmit: !0,
    categoryContainer: null,
    currentCategory: null,
    categoryCheckbox: null,
    menuClass: "",
    ns: pt,
    getSuggestions: null,
    endpointSuggestion: null,
    maxQueryLength: 60,
    position: "absolute",
    deviceType: null,
    useCustomPlatformContext: !1,
    renderItem: (e, t) => {
      const n = e.index,
        o = e.position,
        i = e.query,
        r = e.text,
        s = e.type,
        a = e.url,
        l = void 0 === a ? "" : a,
        c = it(t),
        u = new RegExp(`(${c})`, "ig"),
        d = s === We,
        p = s === Ve,
        h = s === Be,
        f = s && d ? r : ot(r),
        g = (s && d) || !c ? f : f.replace(u, "<strong>$1</strong>"),
        m = `<span class="${pt}__fill"><i class="${pt}__fill-icon"></i></span>`;
      return `<li role="option" id="${
        o ? `cb1-opt1-${null != s ? s : ""}${o}` : `cb1-opt1-${Math.random()}`
      }" class="${`${pt}__item ${d ? `${pt}__item--additional` : ""} ${
        p ? `${pt}__item--visited` : ""
      }`}" data-value="${i}" data-position="${o}" data-index="${n}" data-type="${
        h ? "" : s
      }" data-url="${l}">${g} ${m}</li>`;
    },
  };
  const ft = (e, t) => {
      try {
        const n = new URL(e);
        return (
          Object.entries(t).forEach((e) => {
            let t = _slicedToArray(e, 2),
              o = t[0],
              i = t[1];
            n.searchParams.set(o, i);
          }),
          n.toString()
        );
      } catch (t) {
        return e;
      }
    },
    gt = ["frontend", "middleware", "api", "highlight.api"],
    mt = (e, t, n) => {
      const o = null !== t && "object" == typeof t,
        i = o ? (null == t ? void 0 : t.sb) : t,
        r = [
          ((s = i),
          ["all_mercadolibre", "all_mercadolivre"].includes(s)
            ? null
            : "origin_type"),
        ];
      var s;
      let a = n ? ft(e, o ? t : { sb: i }) : e;
      const l = (function () {
        var e;
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        const n = new URLSearchParams(
          null === (e = window) ||
          void 0 === e ||
          null === (e = e.location) ||
          void 0 === e
            ? void 0
            : e.search
        );
        return [...gt, ...t]
          .filter(Boolean)
          .reduce((e, t) => (n.has(t) && (e[t] = n.get(t)), e), {});
      })(r);
      return (a = ft(a, l)), a;
    };
  let yt = !1;
  class vt {
    constructor() {
      (this._params = new Map()),
        this._params.set("origin", Ze),
        this._params.set("as.comp_t", "SUG");
    }
    setCompType(e) {
      return this._params.set("as.comp_t", e), this;
    }
    setCompId(e) {
      return this._params.set("as.comp_id", e), this;
    }
    setComponentValue(e) {
      return this._params.set("as.comp_v", e), this;
    }
    setOrigin(e) {
      return this._params.set("origin", e), this;
    }
    build() {
      return Array.from(this._params)
        .map((e) => {
          let t = _slicedToArray(e, 2),
            n = t[0],
            o = t[1];
          return `${encodeURIComponent(n)}=${encodeURIComponent(o)}`;
        })
        .join("&");
    }
  }
  var bt = function (e, t) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
    const o = document.querySelector(e);
    if (o) return void t(o);
    if ("undefined" == typeof MutationObserver) return;
    let i,
      r = !1;
    const s = new MutationObserver(() => {
      const n = document.querySelector(e);
      n && !r && ((r = !0), clearTimeout(i), s.disconnect(), t(n));
    });
    s.observe(document.documentElement, { childList: !0, subtree: !0 }),
      (i = setTimeout(() => {
        r || ((r = !0), s.disconnect());
      }, n));
  };
  let _t = 0;
  class Ct extends v {
    constructor(e, t) {
      var n;
      if (
        (super(),
        (n = this),
        _defineProperty(this, "_init", (e, t) => {
          const n = this._setOptions(ht, t),
            o = n.ns,
            i = n.deviceType;
          this.deviceIsMobile = "mobile" === i;
          const r = this._setEl(e, o);
          this._setForm(), this._buildAutosuggest();
          const s = this._set$();
          if (
            (this._setVisibility(),
            this._setEventHandlers(),
            this._traverseCategoryListContainerElements(),
            s.categoryContainer)
          )
            if (this.deviceIsMobile)
              M.addClass(s.categoryContainer, "mobile-view");
            else if (s.categoryContainer.offsetWidth) {
              const e = s.categoryContainer.offsetWidth,
                t = parseInt(A(s.categoryContainer, "padding-left"), 10),
                n = parseInt(A(r, "padding-right"), 10);
              A(r, "padding-right", `${e + n - t}px`);
            }
          if (
            r.hasAttribute("autofocus") ||
            "true" === r.getAttribute("data-autofocus")
          ) {
            document.activeElement !== r && r.focus();
            const e = r.value.length;
            "selectionStart" in r &&
              r.selectionStart !== e &&
              r.setSelectionRange(e, e);
          }
        }),
        _defineProperty(this, "_setOptions", (e, t) => {
          var n, o;
          return (
            (this.options = {}),
            [e, t].forEach((e) => {
              Object.keys(e).forEach((t) => {
                Object.prototype.hasOwnProperty.call(e, t) &&
                  (this.options[t] = e[t]);
              });
            }),
            (this.options.siteId =
              ((n = this.options.siteId),
              (o = this.options.platformId),
              {
                "MLV:TC": "TCV",
                "MCO:TC": "TCC",
                "MLV:TM": "TMV",
                "MCO:TM": "TMC",
                "MLV:TL": "TLV",
                "MCO:TL": "TLC",
                "MLV:TI": "TIV",
                "MCO:TI": "TIC",
                "MLM:AP": "APM",
                "MLM:MT": "MTC",
                "MLC:PI": "PIN",
              }[`${n}:${o.toUpperCase()}`] || n)),
            (this.options.bus = this.options.bus || new v()),
            this.options
          );
        }),
        _defineProperty(
          this,
          "_setEl",
          (e, t) => (
            (this._el = "string" == typeof e ? document.querySelector(e) : e),
            (this._el.autocompleteAttr = this._el.getAttribute("autocomplete")),
            this._el.setAttribute("aria-activedescendant", ""),
            this._el.setAttribute("aria-controls", `${t}-${this.instance}`),
            this._el.setAttribute("aria-autocomplete", "list"),
            this._el.setAttribute("id", "cb1-edit"),
            this._el.setAttribute("aria-expanded", "false"),
            this._el.setAttribute("role", "combobox"),
            this._el.setAttribute("autocomplete", "off"),
            (this._el.lastValue = ""),
            this._el
          )
        ),
        _defineProperty(this, "_setForm", () => {
          this._form = N(this._el, "form");
        }),
        _defineProperty(this, "_set$", () => {
          const e = this.instance,
            t = this.options,
            n = t.categoryCheckbox,
            o = t.categoryContainer,
            i = t.ns,
            r = document.getElementById(`${i}-${e}`);
          return (
            (this.$ = {
              container: r,
              additionalWrapper: r.querySelector(`.${i}__wrapper--additional`),
              list: r.querySelector(`.${i}__list`),
              additionalList: r.querySelector(`.${i}__list--additional`),
              categoryContainer: o || document.getElementById("mlCategory"),
              categoryCheckbox: n,
              categoryLabel:
                n && n.id ? document.querySelector(`[for="${n.id}"]`) : null,
              navSearch: document.querySelector(".nav-search"),
              categorySearch: document.getElementById("categorySearch"),
              categoryList: document.getElementById("categoryList"),
              categoryListContainer: document.getElementById(
                "categoryListContainer"
              ),
              searchChevron: document.getElementById("search-chevron"),
            }),
            this.$
          );
        }),
        _defineProperty(this, "_setVisibility", () => {
          this.visibility = {
            supportsApi: void 0 !== document.hidden,
            hidden: void 0 !== document.hidden && document.hidden,
            showingSuggestions: !1,
            canShowSuggestions: void 0 !== document.hidden && !document.hidden,
          };
        }),
        _defineProperty(this, "_attachCategoryListHandlers", () => {
          const e = this.$,
            t = this._el,
            n = this.deviceIsMobile;
          e.categoryList &&
            (Qe(
              "click",
              "nav-category-content-options",
              (e, n) => {
                const o =
                  null == n
                    ? void 0
                    : n.querySelector('input[name="navigations-options"]');
                o &&
                  (o.click(),
                  dt(o.value),
                  this._hideCategoryListContainer(),
                  t.value.length > 0 && this._submit());
              },
              e.categoryList
            ),
            !n &&
              e.categoryContainer &&
              k.on(
                e.categoryContainer,
                "click",
                this._toggleCategoryListContainerVisibility
              ),
            k.on(e.categoryList, "keydown", (t) => {
              var n;
              if (t.keyCode === Ye)
                this._hideSuggestions(),
                  this._hideCategorySearch(),
                  this._removeSuggestionClasses(),
                  null === (n = e.categoryContainer) ||
                    void 0 === n ||
                    n.focus();
              else if (t.keyCode === Ge) {
                const e = t.target.querySelector(
                  'input[name="navigations-options"]'
                );
                e && (e.click(), dt(e.value));
              }
            }));
        }),
        _defineProperty(this, "_setEventHandlers", () => {
          const e = this.$,
            t = this._el,
            n = this._form,
            o = this.deviceIsMobile,
            i = this.options,
            r = this.visibility;
          e.categoryList && this._attachCategoryListHandlers(),
            o ||
              (k.on(window, "resize", this._updateSuggestionsContainer),
              e.categoryList && this._removeSuggestionClasses()),
            k.on(window, "mousedown", this._hideCategoryListContainerOnWindow),
            i.bus.on("searchbox:hide", () => {
              this._hideSuggestions(), this._hideCategorySearch();
            }),
            i.bus.on(
              "searchbox:updateCategories",
              this._updateCategories.bind(this)
            ),
            (function (e) {
              let t, n;
              void 0 !== document.hidden
                ? ((t = "hidden"), (n = "visibilitychange"))
                : void 0 !== document.msHidden
                ? ((t = "msHidden"), (n = "msvisibilitychange"))
                : void 0 !== document.webkitHidden &&
                  ((t = "webkitHidden"), (n = "webkitvisibilitychange")),
                document.addEventListener(
                  n,
                  function () {
                    e({ windowIsHidden: document[t] });
                  },
                  !1
                );
            })((e) => {
              let t = e.windowIsHidden;
              (r.hidden = t),
                t ||
                  setTimeout(() => {
                    r.canShowSuggestions = !0;
                  }, 250);
            }),
            Qe(
              "mousedown",
              `${i.ns}`,
              (e) => {
                e.target.classList.contains("sb-suggestions") &&
                  !e.target.closest(".sb-suggestions__item") &&
                  (this._hideSuggestions(),
                  this._hideCategorySearch(),
                  this._removeSuggestionClasses());
              },
              e.container
            ),
            Qe(
              "mouseout",
              `${i.ns}__item`,
              (e, t) => {
                t &&
                  setTimeout(() => {
                    M.removeClass(t, "selected");
                  }, 10);
              },
              e.container
            ),
            Qe(
              "mouseover",
              `${i.ns}__item`,
              (t, n) => {
                const o = e.container.querySelector(`.${i.ns}__item.selected`);
                o && M.removeClass(o, "selected"), M.addClass(n, "selected");
              },
              e.container
            ),
            Qe(
              "mousedown",
              `${i.ns}__item`,
              (e, n) => {
                const o = e.target || e.srcElement;
                if (M.hasClass(n, `${i.ns}__item`)) {
                  const r = n.getAttribute("data-value"),
                    s = `${i.ns}__fill`;
                  (t.value = r),
                    M.hasClass(o, s) || M.hasClass(o.parentElement, s)
                      ? (e.preventDefault(),
                        this.emit("type", r),
                        setTimeout(() => {
                          t.focus();
                        }, 50))
                      : (this._hideSuggestions(),
                        this._hideCategorySearch(),
                        this._removeSuggestionClasses(),
                        this.emit("select", r, n));
                }
              },
              e.container
            ),
            e.categoryListContainer ||
              Qe(
                "mousedown",
                "nav-category",
                (e) => {
                  e.preventDefault(),
                    setTimeout(() => {
                      t.focus();
                    }, 50);
                },
                e.navSearch
              ),
            k.on(t, "blur", () => {
              let e;
              try {
                e = document.querySelector(`.${i.ns}:hover`);
              } catch (t) {
                e = null;
              }
              e ||
                ((t.lastValue = t.value),
                this._hideSuggestions(),
                this._hideCategorySearch(!0),
                this._removeSuggestionClasses());
            });
          k.on(t, "keydown", (n) => {
            const o = window.event ? n.keyCode : n.which;
            if ((o === Ke || o === Xe) && e.container.innerHTML) {
              const n = e.container.querySelector(`.${i.ns}__item.selected`);
              let r, s;
              if (n) {
                r = o === Ke ? n.nextSibling : n.previousSibling;
                const e = n.parentNode.nextElementSibling;
                if (null === r)
                  if (o === Ke && e)
                    r = _slicedToArray(e.getElementsByTagName("LI"), 1)[0];
                  else
                    o === Xe &&
                      (r =
                        n.parentNode.parentNode.previousElementSibling.querySelector(
                          "li:last-child"
                        ));
                (s = rt(r)),
                  s
                    ? (t.setAttribute("aria-activedescendant", r.id),
                      (n.className = n.className.replace("selected", "")),
                      (r.className += " selected"),
                      (t.value = r.getAttribute("data-value")))
                    : ((n.className = n.className.replace("selected", "")),
                      (t.value = t.lastValue),
                      (r = null));
              } else
                (r =
                  o === Ke
                    ? e.container.querySelector(`.${i.ns}__item`)
                    : e.container.childNodes[
                        e.container.childNodes.length - 1
                      ]),
                  (s = rt(r)),
                  s &&
                    (t.setAttribute("aria-activedescendant", r.id),
                    (r.className += " selected"),
                    (t.value = r.getAttribute("data-value")));
              return s && this._updateSuggestionsContainer(!1, r), !1;
            }
            if (o === Ye)
              (t.value = t.lastValue),
                this._hideSuggestions(),
                this._hideCategorySearch(),
                this._removeSuggestionClasses();
            else if (o === Ge) {
              const t = e.container.querySelector(`.${i.ns}__item.selected`);
              t &&
                "none" !== A(e.container, "display") &&
                (this.emit("select", t.getAttribute("data-value"), t),
                setTimeout(() => {
                  this._hideSuggestions(),
                    this._hideCategorySearch(),
                    this._removeSuggestionClasses();
                }, 20));
            }
          });
          const s = (e) => {
            const n = window.event ? e.keyCode : e.which;
            if (!n || ((n < 35 || n > 40) && n !== Ge && n !== Ye)) {
              const e = t.value;
              clearTimeout(t.timer),
                0 === i.minChars && 0 === e.length
                  ? this._suggest(
                      this._parseSuggestions({
                        suggested_queries: this.lastSearches,
                      }).suggestions
                    )
                  : e.length >= i.minChars
                  ? (t.timer = setTimeout(() => {
                      const e = t.value;
                      e !== t.lastValue &&
                        ((t.lastValue = e), this.emit("type", e));
                    }, i.delay))
                  : ((t.lastValue = e),
                    this._hideSuggestions(),
                    this._hideCategorySearch(),
                    this._removeSuggestionClasses());
            }
            this._adjustCategoryLabel();
          };
          k.on(t, "keyup", s);
          k.on(t, "focus", (e) => {
            (t.lastValue = "\n"), s(e), this._showCategorySearchOnMobile();
          }),
            i.bus.on("searchbox:focus", () => {
              document.activeElement !== t && t.focus();
            }),
            "function" == typeof i.getSuggestions
              ? this.on("type", i.getSuggestions.bind(this))
              : this.on("type", (e) => {
                  i.cache && e in this.cache
                    ? this._suggest(
                        this.cache[e].suggestions,
                        this.cache[e].additionalItems
                      )
                    : this._getSuggestions(e);
                }),
            i.autoSubmit &&
              this.on("select", (e, t) => {
                const n = this._el.lastValue,
                  o =
                    "last_search" ===
                    (null == t ? void 0 : t.getAttribute("data-type")),
                  i = new vt();
                return (
                  i.setComponentValue(n).setCompId(o ? "HIS" : "SUG"),
                  this._submit(t, i)
                );
              }),
            n &&
              k.on(n, "submit", (e) => {
                e && e.preventDefault(), this._submit();
              }),
            setTimeout(this._getLastSearches.bind(this), 10),
            this._adjustCategoryLabel();
        }),
        _defineProperty(this, "_traverseCategoryListContainerElements", () => {
          const e = this.$,
            t = [];
          e.categoryListContainer &&
            st(e.categoryListContainer, (e) => {
              t.push(e);
            }),
            (this.traversedElements = t);
        }),
        _defineProperty(this, "_ensureCategoryListDOM", (e) => {
          const t = this.$,
            n = this.deviceIsMobile,
            o = this.options;
          if (t.categoryList) return;
          const i = e.find((e) => e.default_checked) || e[0],
            r = i ? i.name : "",
            s = t.navSearch;
          if (!s) return;
          const a = document.createElement("ul");
          (a.id = "categoryList"), (a.className = "nav-category-list-options");
          const l =
            s.querySelector(".nav-search-btn") ||
            s.querySelector(`.${o.ns}-btn`);
          if (n) {
            const e = document.createElement("div");
            (e.id = "mlCategory"),
              (e.className = "nav-category nav-category--mb mobile-view"),
              e.setAttribute("title", r),
              e.appendChild(a);
            const t = document.getElementById("mlCategory");
            t && t.parentNode
              ? t.parentNode.replaceChild(e, t)
              : s.insertBefore(e, l || null),
              (this.$.categoryList = a),
              (this.$.categoryListContainer = null),
              (this.$.categoryContainer = e),
              (this.$.categoryLabel = null),
              (this.$.searchChevron = null),
              A(e, "visibility", "hidden");
          } else {
            const e = document.createElement("span");
            (e.id = "category-label"), (e.textContent = r);
            const t = document.createElement("span");
            (t.className = "nav-header-search-chevron"),
              (t.id = "search-chevron");
            const n = document.createElement("button");
            (n.type = "button"),
              (n.id = "mlCategory"),
              (n.className = "nav-category nav-category--multi"),
              n.setAttribute("aria-haspopup", "dialog"),
              n.setAttribute("aria-expanded", "false"),
              n.appendChild(e),
              n.appendChild(t);
            const o = document.createElement("div");
            (o.id = "categoryListContainer"),
              (o.className = "nav-category-content-options-desktop"),
              o.setAttribute("role", "dialog"),
              o.appendChild(a);
            const i = document.createDocumentFragment();
            i.appendChild(n), i.appendChild(o);
            const c = document.getElementById("mlCategory");
            c && c.parentNode
              ? c.parentNode.replaceChild(i, c)
              : s.insertBefore(i, l || null),
              (this.$.categoryList = a),
              (this.$.categoryListContainer = o),
              (this.$.categoryContainer = n),
              (this.$.categoryLabel = e),
              (this.$.searchChevron = t);
          }
          this._traverseCategoryListContainerElements(),
            this._attachCategoryListHandlers(),
            n && this._removeSuggestionClasses();
        }),
        _defineProperty(this, "_parseCategoryEndpoint", () =>
          JSON.parse(this.options.categoryEndpoint)
        ),
        _defineProperty(this, "_normalizeCategoriesPayload", (e) => {
          let t = e;
          return (
            e &&
              "object" == typeof e &&
              Array.isArray(e.categories) &&
              (t = e.categories),
            Array.isArray(t) && 0 !== t.length
              ? t.map((e) => {
                  var t, n, o, i, r, s, a;
                  const l =
                    null !==
                      (t =
                        null === (n = e.display_value) || void 0 === n
                          ? void 0
                          : n.text) && void 0 !== t
                      ? t
                      : e.name;
                  return {
                    id:
                      null !==
                        (o =
                          null !== (i = e.value) && void 0 !== i ? i : e.id) &&
                      void 0 !== o
                        ? o
                        : null,
                    name: l,
                    permalink:
                      null !== (r = e.permalink) && void 0 !== r ? r : null,
                    logo: null !== (s = e.logo) && void 0 !== s ? s : void 0,
                    icon: null !== (a = e.icon) && void 0 !== a ? a : void 0,
                    default_checked: Boolean(e.default_checked),
                  };
                })
              : []
          );
        }),
        _defineProperty(this, "_updateCategories", (e) => {
          const t = this.$,
            n = this.deviceIsMobile;
          let o = e;
          if ("string" == typeof e)
            try {
              o = JSON.parse(e);
            } catch (e) {
              return;
            }
          const i = this._normalizeCategoriesPayload(o);
          if (0 === i.length) return;
          (this.options.categoryEndpoint = JSON.stringify(
            i.map((e) => ({ id: e.id, name: e.name, permalink: e.permalink }))
          )),
            t.categoryList || this._ensureCategoryListDOM(i);
          const r = this.$;
          if (r.categoryList) {
            const e = i.findIndex((e) => e.default_checked),
              t = e >= 0 ? e : 0,
              o = document.createDocumentFragment();
            i.forEach((e, n) => {
              o.appendChild(
                (function (e) {
                  const t = e.name,
                    n = e.default_checked,
                    o = void 0 !== n && n,
                    i = e.logo,
                    r = e.icon,
                    s = document.createElement("li");
                  s.className = lt;
                  const a = document.createElement("input");
                  if (
                    ((a.type = "radio"),
                    (a.id = t),
                    (a.value = t),
                    (a.name = ct),
                    (a.checked = o),
                    s.appendChild(a),
                    i)
                  ) {
                    const e = document.createElement("img");
                    (e.className = ut),
                      (e.src = i),
                      (e.alt = ""),
                      s.appendChild(e);
                  }
                  const l = document.createElement("label");
                  if (((l.htmlFor = t), (l.textContent = t), r)) {
                    const e =
                      "string" == typeof r ? document.createTextNode(r) : r;
                    l.appendChild(e);
                  }
                  return s.appendChild(l), s;
                })({
                  name: e.name,
                  default_checked: n === t,
                  logo: e.logo,
                  icon: e.icon,
                })
              );
            }),
              r.categoryList.replaceChildren(),
              r.categoryList.appendChild(o),
              dt(i[t].name),
              this._traverseCategoryListContainerElements(),
              n &&
                r.categoryContainer &&
                A(r.categoryContainer, "height", 60 * i.length + "px");
          }
        }),
        _defineProperty(this, "_submit", (e, t) => {
          var n;
          const o = this.$,
            i = this._el,
            r = this.options,
            s = e || o.container.querySelector(`.${r.ns}__item.selected`);
          let a = i.value;
          const l = window.location.href;
          let c = r.categoryCheckbox;
          const u = Boolean(o.categoryList),
            d =
              !!o.categoryList ||
              (null === (n = r.categoryCheckbox) || void 0 === n
                ? void 0
                : n.checked);
          let p = s && s.getAttribute("data-url");
          const h = {};
          if (!a) return i.focus(), !1;
          if (((a = a.replace(/\\/g, " ")), !p)) {
            var f;
            let e;
            if (o.categoryList) {
              var g;
              c = !0;
              const t = [
                  ...document.querySelectorAll(
                    'input[name="navigations-options"]'
                  ),
                ].filter((e) => !0 === e.checked)[0].value,
                n = this._parseCategoryEndpoint(),
                o = null == n ? void 0 : n.filter((e) => e.name === t)[0];
              (e = null == o ? void 0 : o.permalink),
                (h.sb =
                  null !== (g = null == o ? void 0 : o.id) && void 0 !== g
                    ? g
                    : Je);
            } else e = r.categoryEndpoint;
            (p =
              c && d && null !== (f = e) && void 0 !== f && f.length
                ? e
                : r.searchEndpoint),
              (p = p.replace("$query", nt(a)));
          }
          -1 !== l.indexOf("_DisplayType_LF")
            ? (p += "_DisplayType_LF")
            : -1 !== l.indexOf("_DisplayType_G") && (p += "_DisplayType_G"),
            "AD" === x.get("pr_categ") &&
              -1 === p.indexOf("_PrCategId_AD") &&
              (p += "_PrCategId_AD");
          const m = /version[=_](\w+)/.exec(l);
          m && (p += `_version_${m[1]}`),
            (-1 === l.indexOf("_autosuggest_test") &&
              -1 === l.indexOf("autosuggest=test")) ||
              (p += "_autosuggest_test"),
            (p += (function (e, t, n, o) {
              let i = (
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : {}
              ).trackingBuilder;
              const r = [];
              if ((n && r.push(`A:${n}`), e)) {
                const t = {};
                ["url", "value", "position", "index", "type"].forEach((n) => {
                  t[n] = e.getAttribute(`data-${n}`);
                }),
                  t.type && null != t.position
                    ? (t.type === Ve && r.push(`L:${t.position}`),
                      e.type === We && r.push(`T:${t.position}`))
                    : null != e.index && r.push(`B:${e.index}`);
              }
              t && t.checked
                ? r.push(t.value)
                : o.currentCategory && r.push(`C:${o.currentCategory}`);
              const s = null == i ? void 0 : i.build();
              return `#D[${r.join(",")}]${s ? `&${s}` : ""}`;
            })(e, c, a, r, { trackingBuilder: t }));
          let y = { domain: r.siteDomain, expires: 24 };
          (y = tt(y)), x.set("LAST_SEARCH", a, y);
          const v = mt(p, h, u);
          return (window.location.href = v), this;
        }),
        _defineProperty(this, "_destroy", () => {
          const e = this.$,
            t = this._el;
          k.off(window, "resize", t.updateSC),
            k.off(t, "focus", t.focusHandler),
            k.off(t, "keydown", t.keydownHandler),
            k.off(t, "keyup", t.keyupHandler),
            t.autocompleteAttr
              ? t.setAttribute("autocomplete", t.autocompleteAttr)
              : t.removeAttribute("autocomplete"),
            e.navSearch.removeChild(e.container),
            M.removeClass(e.navSearch, "nav-search-with-sugestions");
        }),
        _defineProperty(this, "_removeSuggestionClasses", () => {
          const e = this.$,
            t = this.options;
          M.removeClass(e.navSearch, "nav-search-with-sugestions"),
            M.removeClass(e.container, `${t.ns}-with-category`);
        }),
        _defineProperty(this, "_buildAutosuggest", () => {
          const e = this.deviceIsMobile,
            t = this.instance,
            n = this.options,
            o = je.sanitize(
              (function (e, t) {
                const n = e.ns,
                  o = et(e.siteId);
                return `<div role="listbox" class="${n}" id="${n}-${t}" aria-hidden="true"><ul role="group" class="${n}__list" id="cb1-list"></ul><div role="group" class="${n}__wrapper--additional" aria-label="${
                  null == o ? void 0 : o.officialStores
                }"><ul role="presentation" class="${n}__list--additional"></ul></div></div>`;
              })(n, t),
              { RETURN_TRUSTED_TYPE: !0 }
            );
          e
            ? document.body.insertAdjacentHTML("beforeend", o)
            : document
                .querySelector(".nav-search")
                .insertAdjacentHTML("beforeend", o);
        }),
        _defineProperty(this, "_getContainerTopValue", (e) => {
          const t = this.isUiNavigationV2,
            n = this.options;
          return t ? "40px" : `${Math.round(e.top + e.height + n.offsetTop)}px`;
        }),
        _defineProperty(this, "_updateSuggestionsContainer", (e, t) => {
          const n = this.$,
            o = this._el,
            i = this.deviceIsMobile,
            r = this.isUiNavigationV2,
            s = this.options,
            a = o.getBoundingClientRect(),
            l = n.navSearch.getBoundingClientRect();
          let c;
          if (n.categoryContainer)
            if (i)
              c =
                l.top +
                n.navSearch.offsetHeight +
                n.categoryContainer.offsetHeight -
                2 +
                "px";
            else if (n.categoryListContainer) {
              const e = n.categoryListContainer.getBoundingClientRect();
              c = `${l.height + e.height}px`;
            } else c = this._getContainerTopValue(a);
          else
            c = i
              ? `${Math.round(l.height + l.top)}px`
              : this._getContainerTopValue(a);
          if (
            (A(n.container, {
              top: c,
              width: i ? "100%" : `${Math.round(a.right - a.left)}px`,
              position: "absolute",
            }),
            !e &&
              (A(n.container, "display", "block"),
              i || A(n.navSearch, "display", "flex"),
              i || r || A(n.navSearch, "overflow", "inherit"),
              n.container.setAttribute("aria-hidden", "false"),
              o.setAttribute("aria-expanded", "true"),
              n.container.maxHeight ||
                A(
                  n.container,
                  "maxHeight",
                  parseInt(
                    (window.getComputedStyle
                      ? getComputedStyle(n.container, null)
                      : n.container.currentStyle
                    ).maxHeight,
                    10
                  )
                ),
              n.container.suggestionHeight ||
                (n.container.suggestionHeight = n.container.querySelector(
                  `.${s.ns}__item`
                ).offsetHeight),
              n.container.suggestionHeight))
          )
            if (t) {
              const e = n.container.scrollTop,
                o =
                  t.getBoundingClientRect().top -
                  n.container.getBoundingClientRect().top;
              o + n.container.suggestionHeight - n.container.maxHeight > 0
                ? (n.container.scrollTop =
                    o +
                    n.container.suggestionHeight +
                    e -
                    n.container.maxHeight)
                : o < 0 && (n.container.scrollTop = o + e);
            } else n.container.scrollTop = 0;
        }),
        _defineProperty(this, "_hideSuggestions", () => {
          const e = this.$,
            t = this._el,
            n = (this.deviceIsMobile, this.visibility);
          var o, i;
          A(e.container, "display", "none"),
            A(e.navSearch, "display", "inherit"),
            e.container.setAttribute("aria-hidden", "true"),
            t.setAttribute("aria-expanded", "false"),
            (o = () => {
              n.hidden && (n.canShowSuggestions = n.showingSuggestions),
                (n.showingSuggestions = !1);
            }),
            (i = 250),
            window.requestIdleCallback
              ? window.requestIdleCallback(o, { timeout: i })
              : setTimeout(o, i);
        }),
        _defineProperty(this, "_suggest", function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
          requestAnimationFrame(() => {
            setTimeout(() => {
              const o = n.$,
                i = n._el,
                r = n.options,
                s = n.visibility;
              if (
                (n._showCategoryListContainer(),
                e.length && s.canShowSuggestions)
              ) {
                const a = e.slice(0, r.limit);
                r.bus.emit("searchbox:show:before");
                const l = a.map((e) => r.renderItem(e, i.value)).join(""),
                  c = t.map((e) => r.renderItem(e, i.value)).join("");
                (o.list.innerHTML = je.sanitize(l, {
                  RETURN_TRUSTED_TYPE: !0,
                })),
                  (o.additionalList.innerHTML = je.sanitize(c, {
                    RETURN_TRUSTED_TYPE: !0,
                  })),
                  A(o.additionalList, "display", c ? "block" : "none"),
                  n._updateSuggestionsContainer(!1),
                  (s.showingSuggestions = !0),
                  M.addClass(o.navSearch, "nav-search-with-sugestions"),
                  o.categoryCheckbox &&
                    M.addClass(o.container, `${r.ns}-with-category`),
                  r.bus.emit("searchbox:show:after"),
                  o.categoryList &&
                    setTimeout(() => {
                      var e;
                      const t = n._buildTrackingComponents(a);
                      !(function () {
                        let e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          t = e.query,
                          n = void 0 === t ? "" : t,
                          o = e.components,
                          i = e.melidata;
                        if (!yt) {
                          yt = !0;
                          try {
                            null == i ||
                              i("cleanAndSend", "view", {
                                path: "/autosuggest/search_box/open",
                                data: { query: n, origin: Ze, components: o },
                              });
                          } catch (e) {}
                        }
                      })({
                        query: i.value,
                        components: t.components,
                        melidata:
                          null === (e = window) || void 0 === e
                            ? void 0
                            : e.melidata,
                      });
                    }, 0);
              } else
                A(o.container, "display", "none"), n._removeSuggestionClasses();
            }, 0);
          });
        }),
        _defineProperty(this, "_getSuggestions", (e) => {
          const t = this._el,
            n = this.cache,
            o = this.options,
            i = `${o.autosuggestDomain}/resources/sites/${o.siteId}/autosuggest`,
            r = o.endpointSuggestion || i,
            s = {},
            a = e || t.value,
            l = window.location.href;
          if (
            -1 !== l.indexOf("_autosuggest_test") ||
            -1 !== l.indexOf("autosuggest=test")
          )
            s.version = "test";
          else if (
            -1 !== l.indexOf("_autosuggest_nocahe") ||
            -1 !== l.indexOf("autosuggest=nocache")
          ) {
            const e = new Date();
            s.cacheBypassTimeStamp = e.getTime();
          }
          if (
            !(function (e) {
              return !!e && "" !== e.trim() && qe.test(e);
            })(a)
          )
            return;
          const c = (function (e) {
            return e
              ? e.indexOf("casa") >= 0
                ? e.replace(/^\s+/g, "")
                : e.trim()
              : e;
          })(a);
          (s.showFilters = Boolean(o.officialStores)),
            (s.limit = o.limit),
            (s.api_version = 2),
            (s.q = c);
          const u = Object.keys(s).reduce(
            (e, t, n) =>
              [e, 0 === n ? "?" : "&", t, "=", encodeURIComponent(s[t])].join(
                ""
              ),
            ""
          );
          w(`${r}${u}`, {
            dataType: "json",
            success: (e) => {
              const o = this._parseSuggestions(e);
              (n[e.q] = o),
                t.value === e.q &&
                  this._suggest(o.suggestions, o.additionalItems);
            },
          });
        }),
        _defineProperty(this, "_parseSuggestions", (e) => {
          const t = this._el,
            n = this.lastSearches,
            o = this.options,
            i = e.suggested_queries.filter(
              (e) => !e.filters || 0 === e.filters.length
            ),
            r = o.officialStores
              ? e.suggested_queries.filter(
                  (e) =>
                    e.filters &&
                    e.filters.length &&
                    e.filters[0].id === o.officialStoresFilterId
                )
              : [],
            s = { suggestions: [], additionalItems: [] };
          if (!i.length) return s;
          const a = (function (e, t) {
              const n = it(e.value);
              if ("" === n) return t;
              const o = new RegExp(`^${n}| ${n}`),
                i = [];
              for (let e = 0; e < t.length; e += 1)
                o.exec(t[e].query) && i.push(t[e]);
              return i;
            })(t, n),
            l = [];
          if (
            (i.forEach((e, t) => {
              const o = e.q || e.query;
              let i = !1;
              for (let e = 0; e < n.length; e += 1)
                if (n[e].query === o) {
                  i = !0;
                  break;
                }
              i ||
                l.push({
                  query: o,
                  text: o,
                  url: "",
                  type: null,
                  position: t + 1,
                  index: t + 1,
                });
            }),
            (s.suggestions = a.concat(l)),
            o.officialStores && r.length > 0)
          ) {
            const e = et(o.siteId);
            r.forEach((t, n) => {
              const r = t.filters[0].values[0],
                a = ot(t.q),
                l = t.is_verified_store
                  ? '<i class="official-store-icon"></i>'
                  : "",
                c =
                  "all" === r.id
                    ? `${a}&nbsp;<span class="store-all">${e.inAll}</span><span class='store-name'>${e.officialStores}</span>`
                    : `${a}&nbsp;<span class="store-one">${
                        e.in
                      }&nbsp;</span><span class='store-name'>${
                        r.name || ""
                      } ${l}</span>`;
              s.additionalItems.push({
                query: t.q,
                text: c,
                sanitized: !0,
                url: at(t.q, r.id, r.name, o),
                type: We,
                position: n + 1,
                index: i.length + n + 1,
              });
            });
          }
          return s;
        }),
        _defineProperty(this, "_showCategorySearchOnMobile", () => {
          const e = this.$;
          this.deviceIsMobile &&
            e.categoryContainer &&
            (A(e.categoryContainer, "visibility", "visible"),
            e.categoryList &&
              A(
                e.categoryContainer,
                "height",
                60 * e.categoryList.querySelectorAll("input").length + "px"
              ));
        }),
        _defineProperty(this, "_showCategoryListContainer", () => {
          const e = this.$;
          e.categoryContainer &&
            e.categoryListContainer &&
            (e.categoryContainer.setAttribute("aria-expanded", "true"),
            A(e.categoryListContainer, "visibility", "visible"),
            A(e.searchChevron, {
              transform: "rotate(223deg)",
              marginTop: "5px",
            }));
        }),
        _defineProperty(this, "_hideCategorySearch", (e) => {
          const t = this.$;
          this.deviceIsMobile
            ? t.categoryContainer &&
              A(t.categoryContainer, "visibility", "hidden")
            : e || this._hideCategoryListContainer();
        }),
        _defineProperty(this, "_hideCategoryListContainer", () => {
          const e = this.$;
          e.categoryContainer &&
            e.categoryListContainer &&
            (e.categoryContainer.setAttribute("aria-expanded", "false"),
            A(e.categoryListContainer, "visibility", "hidden"),
            A(e.searchChevron, {
              transform: "rotate(45deg)",
              marginTop: "-3px",
            }));
        }),
        _defineProperty(this, "_toggleCategoryListContainerVisibility", (e) => {
          const t = this.$;
          if (document.activeElement === t.categoryContainer) {
            var n;
            e.preventDefault();
            "visible" ===
            (null === (n = t.categoryListContainer) ||
            void 0 === n ||
            null === (n = n.style) ||
            void 0 === n
              ? void 0
              : n.visibility)
              ? this._hideCategoryListContainer()
              : this._showCategoryListContainer(),
              this._hideSuggestions(),
              this._removeSuggestionClasses();
            const o = t.categoryList.querySelector(
              'input[name="navigations-options"]:checked'
            );
            o && o.focus();
          }
        }),
        _defineProperty(this, "_hideCategoryListContainerOnWindow", (e) => {
          const t = this.$,
            n = this._el,
            o = this.traversedElements;
          t.categoryContainer &&
            e.target !== n &&
            e.target !== t.categoryContainer &&
            e.target !== t.searchChevron &&
            !o.some((t) => t === e.target) &&
            "" !== e.pointerType &&
            this._hideCategoryListContainer();
        }),
        _defineProperty(this, "_adjustCategoryLabel", () => {
          const e = this.$,
            t = this._el,
            n = this.deviceIsMobile,
            o = this.options,
            i = e.categoryLabel,
            r = e.navSearch.querySelector(".nav-search-input").offsetHeight,
            s = e.categoryContainer
              ? e.categoryContainer.getBoundingClientRect()
              : null,
            a = null !== s ? s.top : 0;
          if (!i || n || a > r) return;
          t.value.length > o.maxQueryLength
            ? M.addClass(i, "nav-label-small")
            : M.removeClass(i, "nav-label-small");
          const l = i.parentElement.offsetWidth;
          A(t, "padding-right", `${l + 60}px`);
        }),
        _defineProperty(this, "_getLastSearchesFromApi", function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            o = `//www.${n.options.siteDomain}/gz/navigation/searches/last`;
          const i = [],
            r = {
              cache: !1,
              context: n,
              dataType: "json",
              credentials: "include",
              success: n._setLastSearches,
            };
          e.forEach((e) => {
            i.push(`${e.query}-${e.searched}`);
          }),
            i.length && (o += `?history_searches=${i.join(",")}`),
            w(o, t ? _objectSpread(_objectSpread({}, r), {}, { data: t }) : r);
        }),
        _defineProperty(this, "_setLastSearches", (e) => {
          const t = [];
          for (let n = 0; n < e.length; n += 1)
            t.push({
              query: ot(e[n].query),
              text: e[n].query,
              url: "",
              type: Ve,
            });
          (this.lastSearches = t), (window.ls = e);
        }),
        _defineProperty(this, "_getLastSearches", () => {
          const e = this.options,
            t = (function () {
              const e = x.get("navigation_searches"),
                t = [];
              if (e) {
                const n = e.replace(/\+/g, " ").split("-");
                if (n.length && n[0])
                  for (let e = 0; e < n.length; e += 1)
                    try {
                      const o = n[e].split("|");
                      t.push({
                        query: decodeURIComponent(o[0]),
                        searched: o[1],
                      });
                    } catch (e) {}
              }
              return t;
            })();
          e.loggedIn
            ? this._getLastSearchesFromApi(
                t,
                e.useCustomPlatformContext && `platform_id=${e.platformId}`
              )
            : this._setLastSearches(t);
        }),
        _defineProperty(this, "_buildTrackingComponents", (e) => {
          const t = this.$,
            n = e.map((e) => ({
              component_id: "last_search" === e.type ? "history" : "suggestion",
              component_type: "suggestion",
              component_value: e.query,
              component_state: !1,
            }));
          if (t.categoryList) {
            const e = this._parseCategoryEndpoint(),
              o = Array.from(t.categoryList.querySelectorAll("li input")).map(
                (t) => {
                  var n, o;
                  return {
                    component_type: "radio_button",
                    component_id:
                      null !==
                        (n =
                          null == e ||
                          null === (o = e.find((e) => e.name === t.value)) ||
                          void 0 === o
                            ? void 0
                            : o.id) && void 0 !== n
                        ? n
                        : Ze,
                    component_value: t.value,
                    component_state: t.checked,
                  };
                }
              );
            return { components: n.concat(o) };
          }
          return { components: n };
        }),
        !window || !document)
      )
        return this;
      if ((this.setMaxListeners(0), !e))
        throw new Error('The "el" parameter is required');
      return (
        (_t += 1),
        (this.instance = _t),
        (this.$ = {}),
        (this.lastSearches = []),
        (this.cache = {}),
        (this.isUiNavigationV2 = !!document.querySelector(".ui-navigation-v2")),
        this._init(e, t),
        this.emit("ready"),
        this
      );
    }
  }
  Ct.whenElement = bt;
  return (
    (function (e, t) {
      void 0 === t && (t = {});
      var n = t.insertAt;
      if (e && "undefined" != typeof document) {
        var o = document.head || document.getElementsByTagName("head")[0],
          i = document.createElement("style");
        (i.type = "text/css"),
          "top" === n && o.firstChild
            ? o.insertBefore(i, o.firstChild)
            : o.appendChild(i),
          i.styleSheet
            ? (i.styleSheet.cssText = e)
            : i.appendChild(document.createTextNode(e));
      }
    })(
      '.sb-suggestions {\n  text-align: left;\n  background: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);\n  font-family: inherit;\n  position: absolute;\n  display: none;\n  z-index: 1005;\n  box-sizing: border-box;\n  min-width: 100%;\n}\n.ML .sb-suggestions, [data-site=ML] .sb-suggestions {\n  font-family: "Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;\n}\n.sb-suggestions__wrapper {\n  overflow: hidden;\n  position: relative;\n}\n.sb-suggestions__list {\n  padding: 0;\n  margin: 12px 0;\n}\n.sb-suggestions__list--additional {\n  margin: 0 0 12px;\n  padding: 0;\n}\n.sb-suggestions__item {\n  position: relative;\n  padding: 16px 40px 20px 49px;\n  margin: 0;\n  font-size: 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 600;\n  line-height: 0.88;\n  color: #333;\n}\n.sb-suggestions__item strong {\n  font-weight: 400;\n}\n.sb-suggestions__item:before {\n  content: "";\n  display: block;\n  position: absolute;\n  left: 1em;\n  top: 0.9em;\n  background: url(\'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path d="M398.725 689.682c156.825 0 284.95-128.125 284.95-284.95 0-157.85-128.125-284.95-284.95-284.95s-284.95 127.1-284.95 284.95c0 156.825 128.125 284.95 284.95 284.95zm0 56.375c-188.6 0-341.325-152.725-341.325-341.325S210.125 63.407 398.725 63.407 740.05 216.132 740.05 404.732 587.325 746.057 398.725 746.057zm235.75-65.6l248.05 248.05 39.976-39.975-19.474-20.5-227.55-227.55-20.5-19.475L615 660.982l19.476 19.475z" fill="%23999999"/>%3C/svg>\') center center no-repeat;\n  background-size: cover;\n  width: 18px;\n  height: 18px;\n}\n.sb-suggestions__item:last-child {\n  margin-bottom: 0;\n}\n.sb-suggestions__item.selected {\n  background: #f5f5f5;\n}\n.sb-suggestions__item--visited {\n  font-weight: 400;\n}\n.sb-suggestions__item--visited:before {\n  background-image: url(\'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M16 26.656c5.888 0 10.656-4.768 10.656-10.656S21.888 5.344 16 5.344C10.112 5.344 5.344 10.112 5.344 16S10.112 26.656 16 26.656zm0 1.792C9.12 28.448 3.552 22.88 3.552 16S9.12 3.552 16 3.552c6.88 0 12.448 5.568 12.448 12.448S22.88 28.448 16 28.448zm0-10.656h6.208V16h-7.104v1.792H16zm-.896-8.896v8h1.792V8h-1.792v.896z" fill="%23999999" />%3C/svg>\');\n}\n.sb-suggestions__item--additional {\n  font-weight: 400;\n}\n.sb-suggestions__item--additional .store-name {\n  display: block;\n  color: #3483fa;\n  margin-top: 8px;\n}\n.sb-suggestions__item--additional .store-one ~ .store-name:before {\n  content: "Tienda oficial ";\n}\n[lang=pt-BR] .sb-suggestions__item--additional .store-one ~ .store-name:before, [lang=pt-PT] .sb-suggestions__item--additional .store-one ~ .store-name:before {\n  content: "Loja oficial ";\n}\n.sb-suggestions__item--additional .store-one ~ .store-name .official-store-icon {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  background: url(\'data:image/svg+xml;charset=UTF-8,%3Csvg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">%3Cpath d="M6.41068 0.429886C6.76181 0.173748 7.23819 0.173748 7.58932 0.429886L8.57445 1.14849C8.74611 1.27371 8.9532 1.341 9.16568 1.34059L10.385 1.33827C10.8197 1.33744 11.2051 1.61745 11.3386 2.03106L11.7132 3.19147C11.7785 3.39367 11.9064 3.56983 12.0786 3.69439L13.0664 4.40924C13.4185 4.66404 13.5658 5.1171 13.4307 5.5302L13.0516 6.68917C12.9856 6.89113 12.9856 7.10887 13.0516 7.31083L13.4307 8.4698C13.5658 8.8829 13.4185 9.33596 13.0664 9.59076L12.0786 10.3056C11.9064 10.4302 11.7785 10.6063 11.7132 10.8085L11.3386 11.9689C11.2051 12.3825 10.8197 12.6626 10.385 12.6617L9.16568 12.6594C8.9532 12.659 8.74611 12.7263 8.57445 12.8515L7.58932 13.5701C7.23819 13.8263 6.76181 13.8263 6.41068 13.5701L5.42555 12.8515C5.25389 12.7263 5.0468 12.659 4.83432 12.6594L3.61496 12.6617C3.18033 12.6626 2.79493 12.3826 2.66141 11.9689L2.28681 10.8085C2.22154 10.6063 2.09355 10.4302 1.92141 10.3056L0.933562 9.59076C0.581453 9.33596 0.434244 8.8829 0.569339 8.4698L0.948351 7.31083C1.0144 7.10887 1.0144 6.89113 0.948351 6.68917L0.569339 5.5302C0.434244 5.1171 0.581452 4.66404 0.933561 4.40924L1.92141 3.69439C2.09355 3.56983 2.22154 3.39367 2.28681 3.19147L2.66141 2.03106C2.79493 1.61745 3.18033 1.33744 3.61496 1.33827L4.83432 1.34059C5.0468 1.341 5.25389 1.27371 5.42555 1.14849L6.41068 0.429886Z" fill="%233483FA"/>%3Cpath d="M6.09077 8.04679L9.52326 4.6143L10.2946 5.38569L6.09077 9.58957L3.70508 7.20387L4.47647 6.43249L6.09077 8.04679Z" fill="white"/>%3C/svg>\') center center no-repeat;\n  background-size: cover;\n  vertical-align: bottom;\n}\n.sb-suggestions__fill {\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40px;\n  height: 100%;\n}\n.sb-suggestions__fill-icon {\n  display: inline-block;\n  position: absolute;\n  top: 10px;\n  right: 8px;\n  width: 24px;\n  height: 24px;\n  transform: rotate(45deg);\n  background: url(\'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M6 15.667l9 9L16.333 23 10 16.667h16v-2H10l6.333-6.333L15 6.667z" fill="%23999999"/>%3C/svg>\') center center no-repeat;\n  background-size: cover;\n}\n\n.mobile-view#mlCategory {\n  height: 50px;\n  background: #f5f5f5;\n  position: absolute;\n  margin-top: 6px;\n  left: -10px;\n  right: -10px;\n  line-height: 50px;\n  box-shadow: 0px -1px 1px 0px rgba(0, 0, 0, 0.1);\n  padding: 0 20px 0 17px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block !important;\n  visibility: hidden;\n}\n\n.nav-header-has-search-active .mobile-view#mlCategory {\n  visibility: visible;\n  height: 50px;\n}\n\n.mobile-view#mlCategory input {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.mobile-view.nav-category--mb#mlCategory input {\n  margin: 0;\n  position: unset;\n  top: unset;\n  transform: unset;\n}\n\n.mobile-view#mlCategory label {\n  padding-left: 30px;\n  font-size: 16px;\n}\n\n.mobile-view.nav-category--mb#mlCategory label {\n  padding-left: 0;\n  font-size: 16px;\n}\n\n.nav-category-list-options {\n  padding-top: 10px;\n}\n\n.nav-category-content-options-desktop .nav-category-list-options {\n  margin: 0;\n  padding: 0;\n}\n\n.nav-category-content-options {\n  display: flex;\n  align-items: center;\n  padding-right: 10px;\n  padding-left: 0;\n}\n.nav-category-content-options:hover {\n  background-color: #f4f1f1;\n}\n.nav-category-content-options .image-option {\n  margin: 0 8px;\n  width: 40px;\n  height: 40px;\n  border-radius: 6px;\n}\n.nav-category-content-options label {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n}\n.nav-category-content-options label .nav-icon-verified-store-logo {\n  margin-left: 4px;\n}\n\n@media (min-width: 1024px) {\n  .sb-suggestions {\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);\n    padding: 0;\n    z-index: 1005;\n    margin-top: 0;\n    min-width: 0;\n    border-bottom-right-radius: 2px;\n    border-bottom-left-radius: 2px;\n  }\n  .sb-suggestions:before {\n    content: "";\n    border-top: solid 1px #e6e6e6;\n    display: block;\n    margin: 0 16.5px;\n  }\n  .sb-suggestions__wrapper:before {\n    display: none;\n  }\n  .sb-suggestions__wrapper--additional:before {\n    content: "";\n    border-top: solid 1px #e6e6e6;\n    display: block;\n    margin: 0 16.5px;\n  }\n  .sb-suggestions__list {\n    margin: 8px 0;\n  }\n  .sb-suggestions__list--additional {\n    margin: 0;\n    padding: 16.5px 0;\n  }\n  .sb-suggestions__list--additional:before {\n    content: "Tiendas oficiales";\n    color: #666;\n    margin-left: 16.5px;\n    font-weight: 300;\n  }\n  [lang=pt-BR] .sb-suggestions__list--additional:before, [lang=pt-PT] .sb-suggestions__list--additional:before {\n    content: "Lojas oficiais";\n  }\n  .sb-suggestions__item {\n    padding: 11px 0 11px 48px;\n    border-top: 0;\n    cursor: pointer;\n  }\n  .sb-suggestions__item strong {\n    font-weight: 300;\n  }\n  .sb-suggestions__item:before {\n    top: 0.7em;\n    background: url(\'data:image/svg+xml;charset=UTF-8,%3Csvg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">%3Cg fill="%23CCCCCC" fill-rule="evenodd">%3Cpath d="M10.915 10.167l4.955 4.955-.749.748-4.954-4.954z"/>%3Cpath d="M6.612 13.223A6.612 6.612 0 1 1 6.612 0a6.612 6.612 0 0 1 0 13.223zm0-1.058a5.554 5.554 0 1 0 0-11.107 5.554 5.554 0 0 0 0 11.107z"/>%3C/g>%3C/svg>\') center center no-repeat;\n    width: 16px;\n    height: 16px;\n  }\n  .sb-suggestions__item.selected {\n    background: #3483fa;\n    color: #fff;\n  }\n  .sb-suggestions__item.selected:before {\n    background: url(\'data:image/svg+xml;charset=UTF-8,%3Csvg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">%3Cg fill="%23FFFFFF" fill-rule="evenodd">%3Cpath d="M10.915 10.167l4.955 4.955-.749.748-4.954-4.954z"/>%3Cpath d="M6.612 13.223A6.612 6.612 0 1 1 6.612 0a6.612 6.612 0 0 1 0 13.223zm0-1.058a5.554 5.554 0 1 0 0-11.107 5.554 5.554 0 0 0 0 11.107z"/>%3C/g>%3C/svg>\') center center no-repeat;\n  }\n  .sb-suggestions__item.selected .store-name .official-store-icon {\n    background-image: url(\'data:image/svg+xml;charset=UTF-8,%3Csvg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">%3Cpath d="M6.41068 0.429886C6.76181 0.173748 7.23819 0.173748 7.58932 0.429886L8.57445 1.14849C8.74611 1.27371 8.9532 1.341 9.16568 1.34059L10.385 1.33827C10.8197 1.33744 11.2051 1.61745 11.3386 2.03106L11.7132 3.19147C11.7785 3.39367 11.9064 3.56983 12.0786 3.69439L13.0664 4.40924C13.4185 4.66404 13.5658 5.1171 13.4307 5.5302L13.0516 6.68917C12.9856 6.89113 12.9856 7.10887 13.0516 7.31083L13.4307 8.4698C13.5658 8.8829 13.4185 9.33596 13.0664 9.59076L12.0786 10.3056C11.9064 10.4302 11.7785 10.6063 11.7132 10.8085L11.3386 11.9689C11.2051 12.3825 10.8197 12.6626 10.385 12.6617L9.16568 12.6594C8.9532 12.659 8.74611 12.7263 8.57445 12.8515L7.58932 13.5701C7.23819 13.8263 6.76181 13.8263 6.41068 13.5701L5.42555 12.8515C5.25389 12.7263 5.0468 12.659 4.83432 12.6594L3.61496 12.6617C3.18033 12.6626 2.79493 12.3826 2.66141 11.9689L2.28681 10.8085C2.22154 10.6063 2.09355 10.4302 1.92141 10.3056L0.933562 9.59076C0.581453 9.33596 0.434244 8.8829 0.569339 8.4698L0.948351 7.31083C1.0144 7.10887 1.0144 6.89113 0.948351 6.68917L0.569339 5.5302C0.434244 5.1171 0.581452 4.66404 0.933561 4.40924L1.92141 3.69439C2.09355 3.56983 2.22154 3.39367 2.28681 3.19147L2.66141 2.03106C2.79493 1.61745 3.18033 1.33744 3.61496 1.33827L4.83432 1.34059C5.0468 1.341 5.25389 1.27371 5.42555 1.14849L6.41068 0.429886Z" fill="white"/>%3Cpath d="M6.09077 8.04679L9.52326 4.6143L10.2946 5.38569L6.09077 9.58957L3.70508 7.20387L4.47647 6.43249L6.09077 8.04679Z" fill="%233483FA"/>%3C/svg>\');\n  }\n  .sb-suggestions__item--additional {\n    font-weight: 300;\n  }\n  .sb-suggestions__item--additional:first-child {\n    margin-top: 10px;\n  }\n  .sb-suggestions__item--additional .store-name {\n    display: inline;\n  }\n  .sb-suggestions__item--additional.selected .store-name {\n    color: #fff;\n  }\n  .sb-suggestions__item--visited {\n    font-weight: 600;\n  }\n  .sb-suggestions__item--visited:before {\n    background: url(\'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">%3Cg fill="none" fill-rule="evenodd" stroke="%23CCCCCC">%3Cpath d="M.5 7.5a7 7 0 1 0 14 0 7 7 0 1 0-14 0"/>%3Cpath stroke-linecap="square" d="M7.5 3.5v4m0 0h4"/>%3C/g>%3C/svg>\') center center no-repeat;\n  }\n  .sb-suggestions__item--visited.selected:before {\n    background: url(\'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">%3Cg fill="none" fill-rule="evenodd" stroke="%23FFFFFF">%3Cpath d="M.5 7.5a7 7 0 1 0 14 0 7 7 0 1 0-14 0"/>%3Cpath stroke-linecap="square" d="M7.5 3.5v4m0 0h4"/>%3C/g>%3C/svg>\') center center no-repeat;\n  }\n  .sb-suggestions__fill {\n    display: none;\n  }\n  .nav-header-has-search-active .nav-search:before,\n  .nav-header-has-search-active .nav-search .nav-search-close-btn,\n  .nav-header-has-search-active .nav-search .nav-search-clear-btn {\n    display: none;\n  }\n}'
    ),
    Ct
  );
})();
