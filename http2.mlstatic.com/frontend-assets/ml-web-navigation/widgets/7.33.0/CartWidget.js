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
      r,
      i,
      a,
      s = [],
      l = !0,
      c = !1;
    try {
      if (((i = (n = n.call(e)).next), 0 === t)) {
        if (Object(n) !== n) return;
        l = !1;
      } else
        for (
          ;
          !(l = (o = i.call(n)).done) && (s.push(o.value), s.length !== t);
          l = !0
        );
    } catch (e) {
      (c = !0), (r = e);
    } finally {
      try {
        if (!l && null != n.return && ((a = n.return()), Object(a) !== a))
          return;
      } finally {
        if (c) throw r;
      }
    }
    return s;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
var CartWidget = (function () {
  "use strict";
  function e(e) {
    var t = e.default;
    if ("function" == typeof t) {
      var n = function () {
        return t.apply(this, arguments);
      };
      n.prototype = t.prototype;
    } else n = {};
    return (
      Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.keys(e).forEach(function (t) {
        var o = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(
          n,
          t,
          o.get
            ? o
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
  !(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && "undefined" != typeof document) {
      var o = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
      (r.type = "text/css"),
        "top" === n && o.firstChild
          ? o.insertBefore(r, o.firstChild)
          : o.appendChild(r),
        r.styleSheet
          ? (r.styleSheet.cssText = e)
          : r.appendChild(document.createTextNode(e));
    }
  })(
    '.ui-cart-feedback {\n  z-index: 1000;\n  box-shadow: 2px 2px 2px rgba(100, 100, 100, 0.1);\n  border-radius: 5px;\n  margin: 0 0 10px 0;\n  padding: 10px;\n  border: 1px solid #dedede;\n  background-color: #fff;\n  width: auto;\n  height: auto;\n  position: absolute;\n}\n.ui-cart-feedback:before, .ui-cart-feedback:after {\n  border: outset transparent; /* border transparent bug on FF: http://stackoverflow.com/a/6225439 */\n  content: "";\n  height: 0;\n  width: 0;\n  position: absolute;\n  -ms-touch-action: none;\n  pointer-events: none;\n  display: block;\n  bottom: 100%;\n  border-bottom-style: solid;\n}\n.ui-cart-feedback:before {\n  border-width: 10px;\n  border-bottom-color: #dedede;\n  right: 7px;\n}\n.ui-cart-feedback:after {\n  border-width: 9px;\n  border-bottom-color: #fff;\n  right: 8px;\n}\n\n/* LAYER CART */\n.nav-cart-layer {\n  padding: 5px;\n  background: #fff;\n  width: 300px;\n  box-sizing: border-box;\n  position: relative;\n}\n\n.nav-cart-layer__img,\n.nav-cart-layer__text-container {\n  vertical-align: top;\n}\n\n.nav-cart-layer .nav-cart-layer__img {\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  position: absolute;\n}\n\n.nav-cart-layer__text-container {\n  margin-left: 50px;\n}\n\n.nav-cart-layer__legend,\n.nav-cart-layer__title {\n  color: #666;\n}\n\n.nav-cart-layer__legend {\n  font-size: 12px;\n}\n\n.nav-cart-layer__title {\n  font-size: 16px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.nav-cart-layer a,\n.nav-cart-layer a:hover,\n.nav-cart-layer a:active,\n.nav-cart-layer a:link {\n  color: #666;\n  text-decoration: none;\n}'
  );
  var t = {};
  !(function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.addClass = n),
      (e.removeClass = o),
      (e.hasClass = r);
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
    function r(e, n) {
      return t
        ? e.classList.contains(n)
        : new RegExp("(^| )" + n + "( |$)", "gi").test(e.className);
    }
    var i = { addClass: n, removeClass: o, hasClass: r };
    e.default = i;
  })(t);
  var n = { exports: {} },
    o = { exports: {} },
    r = { exports: {} };
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
  })(r, r.exports),
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
          a = void 0,
          s = void 0,
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
                c !== (a = t[o]) &&
                  (p && a && ((0, i.default)(a) || (s = Array.isArray(a)))
                    ? (s
                        ? ((s = !1), (l = r && Array.isArray(r) ? r : []))
                        : (l = r && (0, i.default)(r) ? r : {}),
                      (c[o] = e(p, l, a)))
                    : void 0 !== a && (c[o] = a));
        return c;
      };
      var o,
        i = (o = r.exports) && o.__esModule ? o : { default: o };
      e.exports = t.default;
    })(o, o.exports),
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
        var a = function () {},
          s = {
            url: 2 === o.length && "string" == typeof e ? e : ".",
            cache: !0,
            data: null,
            headers: {},
            context: null,
            dataType: "text",
            method: "GET",
            credentials: "omit",
            success: a,
            error: a,
            complete: a,
            preload: !1,
          };
        r = (0, i.default)(s, t || {});
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
          f = function (e, t, n) {
            r.error.call(r.context, n, t, e), d(t, n);
          },
          m = Object.prototype.toString;
        r.method = r.method.toUpperCase();
        var h = document.createElement("a"),
          y = document.createElement("a");
        y.href = location.href;
        try {
          (h.href = r.url),
            (h.href = h.href),
            (r.crossDomain =
              y.protocol + "//" + y.host != h.protocol + "//" + h.host);
        } catch (e) {
          r.crossDomain = !0;
        }
        var g = new XMLHttpRequest(),
          b =
            r.crossDomain &&
            !("withCredentials" in g) &&
            "XDomainRequest" in window;
        b
          ? ((g = new XDomainRequest()).onload = function () {
              var e = g.contentType,
                t = void 0;
              if ("json" === (e && l[e[1]] ? l[e[1]].toLowerCase() : "json"))
                try {
                  t = JSON.parse(g.responseText);
                } catch (e) {
                  t = g.responseText;
                }
              else t = g.responseText;
              p(t, g);
            })
          : (g.onreadystatechange = function () {
              if (4 !== g.readyState);
              else {
                var e = void 0,
                  t = 1223 === g.status ? 204 : g.status;
                if ((t >= 200 && t < 300) || 304 === t) {
                  var n = /([\/a-z]+)(;|\s|$)/.exec(
                      g.getResponseHeader("content-type")
                    ),
                    o = n && l[n[1]] ? l[n[1]].toLowerCase() : "text";
                  if (((e = g.responseText), "json" === o))
                    try {
                      e = JSON.parse(e);
                    } catch (t) {
                      e = g.responseText;
                    }
                  p(e, g);
                } else f(new Error(g.statusText), "error", g);
              }
            });
        (g.onerror = function () {
          f(new Error(g.statusText || "Network request failed"), "error", g);
        }),
          ("GET" !== r.method && "HEAD" !== r.method) ||
            "string" != typeof r.data ||
            (r.url += (~r.url.indexOf("?") ? "&" : "?") + r.data);
        g.open(r.method, r.url),
          "include" === r.credentials && (g.withCredentials = !0);
        if (
          !r.preload &&
          (r.dataType &&
            c[r.dataType.toLowerCase()] &&
            (r.headers.Accept = c[r.dataType.toLowerCase()] + ", */*; q=0.01"),
          r.crossDomain ||
            r.headers["X-Requested-With"] ||
            (r.headers["X-Requested-With"] = "XMLHttpRequest"),
          (r.data =
            ((v = r.data),
            (_ = r.headers),
            (E = r.crossDomain),
            (S = "application/x-www-form-urlencoded; " + (A = "charset=UTF-8")),
            ("undefined" != typeof FormData && v instanceof FormData) ||
            /^\[object\s(ArrayBuffer|File|Blob)\]$/.test(m.call(v))
              ? v
              : ("undefined" != typeof URLSearchParams &&
                  v instanceof URLSearchParams) ||
                "string" == typeof v
              ? (void 0 === _["Content-Type"] && (_["Content-Type"] = S),
                v.toString())
              : null !== v && "object" === (void 0 === v ? "undefined" : n(v))
              ? (void 0 === _["Content-Type"] &&
                  (_["Content-Type"] = E ? S : "application/json;  " + A),
                JSON.stringify(v))
              : v)),
          !b)
        )
          for (var T in r.headers) g.setRequestHeader(T, r.headers[T]);
        var v, _, E, A, S;
        return g.send(r.data), this;
      };
      var r,
        i = (r = o.exports) && r.__esModule ? r : { default: r };
      e.exports = t.default;
    })(n, n.exports);
  const i = Object.entries,
    a = Object.setPrototypeOf,
    s = Object.isFrozen,
    l = Object.getPrototypeOf,
    c = Object.getOwnPropertyDescriptor;
  let u = Object.freeze,
    d = Object.seal,
    p = Object.create,
    f = "undefined" != typeof Reflect && Reflect,
    m = f.apply,
    h = f.construct;
  u ||
    (u = function (e) {
      return e;
    }),
    d ||
      (d = function (e) {
        return e;
      }),
    m ||
      (m = function (e, t, n) {
        return e.apply(t, n);
      }),
    h ||
      (h = function (e, t) {
        return new e(...t);
      });
  const y = k(Array.prototype.forEach),
    g = k(Array.prototype.lastIndexOf),
    b = k(Array.prototype.pop),
    T = k(Array.prototype.push),
    v = k(Array.prototype.splice),
    _ = k(String.prototype.toLowerCase),
    E = k(String.prototype.toString),
    A = k(String.prototype.match),
    S = k(String.prototype.replace),
    w = k(String.prototype.indexOf),
    x = k(String.prototype.trim),
    N = k(Object.prototype.hasOwnProperty),
    C = k(RegExp.prototype.test),
    O =
      ((R = TypeError),
      function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return h(R, t);
      });
  var R;
  function k(e) {
    return function (t) {
      t instanceof RegExp && (t.lastIndex = 0);
      for (
        var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1;
        r < n;
        r++
      )
        o[r - 1] = arguments[r];
      return m(e, t, o);
    };
  }
  function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _;
    a && a(e, null);
    let o = t.length;
    for (; o--; ) {
      let r = t[o];
      if ("string" == typeof r) {
        const e = n(r);
        e !== r && (s(t) || (t[o] = e), (r = e));
      }
      e[r] = !0;
    }
    return e;
  }
  function D(e) {
    for (let t = 0; t < e.length; t++) {
      N(e, t) || (e[t] = null);
    }
    return e;
  }
  function M(e) {
    const t = p(null);
    for (const o of i(e)) {
      var n = _slicedToArray(o, 2);
      const r = n[0],
        i = n[1];
      N(e, r) &&
        (Array.isArray(i)
          ? (t[r] = D(i))
          : i && "object" == typeof i && i.constructor === Object
          ? (t[r] = M(i))
          : (t[r] = i));
    }
    return t;
  }
  function I(e, t) {
    for (; null !== e; ) {
      const n = c(e, t);
      if (n) {
        if (n.get) return k(n.get);
        if ("function" == typeof n.value) return k(n.value);
      }
      e = l(e);
    }
    return function () {
      return null;
    };
  }
  const P = u([
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
    U = u([
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
    z = u([
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
    j = u([
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
    H = u([
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
    F = u([
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
    q = u(["#text"]),
    B = u([
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
    W = u([
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
    $ = u([
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
    G = u(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    Y = d(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    X = d(/<%[\w\W]*|[\w\W]*%>/gm),
    V = d(/\$\{[\w\W]*/gm),
    K = d(/^data-[\-\w.\u00B7-\uFFFF]+$/),
    J = d(/^aria-[\-\w]+$/),
    Q = d(
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    ),
    Z = d(/^(?:\w+script|data):/i),
    ee = d(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    te = d(/^html$/i),
    ne = d(/^[a-z][.\w]*(-[.\w]+)+$/i);
  var oe = Object.freeze({
    __proto__: null,
    ARIA_ATTR: J,
    ATTR_WHITESPACE: ee,
    CUSTOM_ELEMENT: ne,
    DATA_ATTR: K,
    DOCTYPE_NAME: te,
    ERB_EXPR: X,
    IS_ALLOWED_URI: Q,
    IS_SCRIPT_OR_DATA: Z,
    MUSTACHE_EXPR: Y,
    TMPLIT_EXPR: V,
  });
  const re = 1,
    ie = 3,
    ae = 7,
    se = 8,
    le = 9,
    ce = function () {
      return "undefined" == typeof window ? null : window;
    };
  var ue = (function e() {
      let t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce();
      const n = (t) => e(t);
      if (
        ((n.version = "3.2.6"),
        (n.removed = []),
        !t || !t.document || t.document.nodeType !== le || !t.Element)
      )
        return (n.isSupported = !1), n;
      let o = t.document;
      const r = o,
        a = r.currentScript,
        s = t.DocumentFragment,
        l = t.HTMLTemplateElement,
        c = t.Node,
        d = t.Element,
        f = t.NodeFilter,
        m = t.NamedNodeMap,
        h = void 0 === m ? t.NamedNodeMap || t.MozNamedAttrMap : m,
        R = t.HTMLFormElement,
        k = t.DOMParser,
        D = t.trustedTypes,
        Y = d.prototype,
        X = I(Y, "cloneNode"),
        V = I(Y, "remove"),
        K = I(Y, "nextSibling"),
        J = I(Y, "childNodes"),
        Z = I(Y, "parentNode");
      if ("function" == typeof l) {
        const e = o.createElement("template");
        e.content && e.content.ownerDocument && (o = e.content.ownerDocument);
      }
      let ee,
        ne = "";
      const ue = o,
        de = ue.implementation,
        pe = ue.createNodeIterator,
        fe = ue.createDocumentFragment,
        me = ue.getElementsByTagName,
        he = r.importNode;
      let ye = {
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
        "function" == typeof i &&
        "function" == typeof Z &&
        de &&
        void 0 !== de.createHTMLDocument;
      const ge = oe.MUSTACHE_EXPR,
        be = oe.ERB_EXPR,
        Te = oe.TMPLIT_EXPR,
        ve = oe.DATA_ATTR,
        _e = oe.ARIA_ATTR,
        Ee = oe.IS_SCRIPT_OR_DATA,
        Ae = oe.ATTR_WHITESPACE,
        Se = oe.CUSTOM_ELEMENT;
      let we = oe.IS_ALLOWED_URI,
        xe = null;
      const Ne = L({}, [...P, ...U, ...z, ...H, ...q]);
      let Ce = null;
      const Oe = L({}, [...B, ...W, ...$, ...G]);
      let Re = Object.seal(
          p(null, {
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
        ke = null,
        Le = null,
        De = !0,
        Me = !0,
        Ie = !1,
        Pe = !0,
        Ue = !1,
        ze = !0,
        je = !1,
        He = !1,
        Fe = !1,
        qe = !1,
        Be = !1,
        We = !1,
        $e = !0,
        Ge = !1,
        Ye = !0,
        Xe = !1,
        Ve = {},
        Ke = null;
      const Je = L({}, [
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
      let Qe = null;
      const Ze = L({}, ["audio", "video", "img", "source", "image", "track"]);
      let et = null;
      const tt = L({}, [
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
        rt = "http://www.w3.org/1999/xhtml";
      let it = rt,
        at = !1,
        st = null;
      const lt = L({}, [nt, ot, rt], E);
      let ct = L({}, ["mi", "mo", "mn", "ms", "mtext"]),
        ut = L({}, ["annotation-xml"]);
      const dt = L({}, ["title", "style", "font", "a", "script"]);
      let pt = null;
      const ft = ["application/xhtml+xml", "text/html"];
      let mt = null,
        ht = null;
      const yt = o.createElement("form"),
        gt = function (e) {
          return e instanceof RegExp || e instanceof Function;
        },
        bt = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!ht || ht !== e) {
            if (
              ((e && "object" == typeof e) || (e = {}),
              (e = M(e)),
              (pt =
                -1 === ft.indexOf(e.PARSER_MEDIA_TYPE)
                  ? "text/html"
                  : e.PARSER_MEDIA_TYPE),
              (mt = "application/xhtml+xml" === pt ? E : _),
              (xe = N(e, "ALLOWED_TAGS") ? L({}, e.ALLOWED_TAGS, mt) : Ne),
              (Ce = N(e, "ALLOWED_ATTR") ? L({}, e.ALLOWED_ATTR, mt) : Oe),
              (st = N(e, "ALLOWED_NAMESPACES")
                ? L({}, e.ALLOWED_NAMESPACES, E)
                : lt),
              (et = N(e, "ADD_URI_SAFE_ATTR")
                ? L(M(tt), e.ADD_URI_SAFE_ATTR, mt)
                : tt),
              (Qe = N(e, "ADD_DATA_URI_TAGS")
                ? L(M(Ze), e.ADD_DATA_URI_TAGS, mt)
                : Ze),
              (Ke = N(e, "FORBID_CONTENTS")
                ? L({}, e.FORBID_CONTENTS, mt)
                : Je),
              (ke = N(e, "FORBID_TAGS") ? L({}, e.FORBID_TAGS, mt) : M({})),
              (Le = N(e, "FORBID_ATTR") ? L({}, e.FORBID_ATTR, mt) : M({})),
              (Ve = !!N(e, "USE_PROFILES") && e.USE_PROFILES),
              (De = !1 !== e.ALLOW_ARIA_ATTR),
              (Me = !1 !== e.ALLOW_DATA_ATTR),
              (Ie = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
              (Pe = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
              (Ue = e.SAFE_FOR_TEMPLATES || !1),
              (ze = !1 !== e.SAFE_FOR_XML),
              (je = e.WHOLE_DOCUMENT || !1),
              (qe = e.RETURN_DOM || !1),
              (Be = e.RETURN_DOM_FRAGMENT || !1),
              (We = e.RETURN_TRUSTED_TYPE || !1),
              (Fe = e.FORCE_BODY || !1),
              ($e = !1 !== e.SANITIZE_DOM),
              (Ge = e.SANITIZE_NAMED_PROPS || !1),
              (Ye = !1 !== e.KEEP_CONTENT),
              (Xe = e.IN_PLACE || !1),
              (we = e.ALLOWED_URI_REGEXP || Q),
              (it = e.NAMESPACE || rt),
              (ct = e.MATHML_TEXT_INTEGRATION_POINTS || ct),
              (ut = e.HTML_INTEGRATION_POINTS || ut),
              (Re = e.CUSTOM_ELEMENT_HANDLING || {}),
              e.CUSTOM_ELEMENT_HANDLING &&
                gt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                (Re.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
              e.CUSTOM_ELEMENT_HANDLING &&
                gt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                (Re.attributeNameCheck =
                  e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
              e.CUSTOM_ELEMENT_HANDLING &&
                "boolean" ==
                  typeof e.CUSTOM_ELEMENT_HANDLING
                    .allowCustomizedBuiltInElements &&
                (Re.allowCustomizedBuiltInElements =
                  e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
              Ue && (Me = !1),
              Be && (qe = !0),
              Ve &&
                ((xe = L({}, q)),
                (Ce = []),
                !0 === Ve.html && (L(xe, P), L(Ce, B)),
                !0 === Ve.svg && (L(xe, U), L(Ce, W), L(Ce, G)),
                !0 === Ve.svgFilters && (L(xe, z), L(Ce, W), L(Ce, G)),
                !0 === Ve.mathMl && (L(xe, H), L(Ce, $), L(Ce, G))),
              e.ADD_TAGS && (xe === Ne && (xe = M(xe)), L(xe, e.ADD_TAGS, mt)),
              e.ADD_ATTR && (Ce === Oe && (Ce = M(Ce)), L(Ce, e.ADD_ATTR, mt)),
              e.ADD_URI_SAFE_ATTR && L(et, e.ADD_URI_SAFE_ATTR, mt),
              e.FORBID_CONTENTS &&
                (Ke === Je && (Ke = M(Ke)), L(Ke, e.FORBID_CONTENTS, mt)),
              Ye && (xe["#text"] = !0),
              je && L(xe, ["html", "head", "body"]),
              xe.table && (L(xe, ["tbody"]), delete ke.tbody),
              e.TRUSTED_TYPES_POLICY)
            ) {
              if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML)
                throw O(
                  'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
                );
              if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
                throw O(
                  'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
                );
              (ee = e.TRUSTED_TYPES_POLICY), (ne = ee.createHTML(""));
            } else
              void 0 === ee &&
                (ee = (function (e, t) {
                  if (
                    "object" != typeof e ||
                    "function" != typeof e.createPolicy
                  )
                    return null;
                  let n = null;
                  const o = "data-tt-policy-suffix";
                  t && t.hasAttribute(o) && (n = t.getAttribute(o));
                  const r = "dompurify" + (n ? "#" + n : "");
                  try {
                    return e.createPolicy(r, {
                      createHTML: (e) => e,
                      createScriptURL: (e) => e,
                    });
                  } catch (e) {
                    return (
                      console.warn(
                        "TrustedTypes policy " + r + " could not be created."
                      ),
                      null
                    );
                  }
                })(D, a)),
                null !== ee &&
                  "string" == typeof ne &&
                  (ne = ee.createHTML(""));
            u && u(e), (ht = e);
          }
        },
        Tt = L({}, [...U, ...z, ...j]),
        vt = L({}, [...H, ...F]),
        _t = function (e) {
          T(n.removed, { element: e });
          try {
            Z(e).removeChild(e);
          } catch (t) {
            V(e);
          }
        },
        Et = function (e, t) {
          try {
            T(n.removed, { attribute: t.getAttributeNode(e), from: t });
          } catch (e) {
            T(n.removed, { attribute: null, from: t });
          }
          if ((t.removeAttribute(e), "is" === e))
            if (qe || Be)
              try {
                _t(t);
              } catch (e) {}
            else
              try {
                t.setAttribute(e, "");
              } catch (e) {}
        },
        At = function (e) {
          let t = null,
            n = null;
          if (Fe) e = "<remove></remove>" + e;
          else {
            const t = A(e, /^[\r\n\t ]+/);
            n = t && t[0];
          }
          "application/xhtml+xml" === pt &&
            it === rt &&
            (e =
              '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
              e +
              "</body></html>");
          const r = ee ? ee.createHTML(e) : e;
          if (it === rt)
            try {
              t = new k().parseFromString(r, pt);
            } catch (e) {}
          if (!t || !t.documentElement) {
            t = de.createDocument(it, "template", null);
            try {
              t.documentElement.innerHTML = at ? ne : r;
            } catch (e) {}
          }
          const i = t.body || t.documentElement;
          return (
            e &&
              n &&
              i.insertBefore(o.createTextNode(n), i.childNodes[0] || null),
            it === rt
              ? me.call(t, je ? "html" : "body")[0]
              : je
              ? t.documentElement
              : i
          );
        },
        St = function (e) {
          return pe.call(
            e.ownerDocument || e,
            e,
            f.SHOW_ELEMENT |
              f.SHOW_COMMENT |
              f.SHOW_TEXT |
              f.SHOW_PROCESSING_INSTRUCTION |
              f.SHOW_CDATA_SECTION,
            null
          );
        },
        wt = function (e) {
          return (
            e instanceof R &&
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
        xt = function (e) {
          return "function" == typeof c && e instanceof c;
        };
      function Nt(e, t, o) {
        y(e, (e) => {
          e.call(n, t, o, ht);
        });
      }
      const Ct = function (e) {
          let t = null;
          if ((Nt(ye.beforeSanitizeElements, e, null), wt(e))) return _t(e), !0;
          const o = mt(e.nodeName);
          if (
            (Nt(ye.uponSanitizeElement, e, { tagName: o, allowedTags: xe }),
            ze &&
              e.hasChildNodes() &&
              !xt(e.firstElementChild) &&
              C(/<[/\w!]/g, e.innerHTML) &&
              C(/<[/\w!]/g, e.textContent))
          )
            return _t(e), !0;
          if (e.nodeType === ae) return _t(e), !0;
          if (ze && e.nodeType === se && C(/<[/\w]/g, e.data)) return _t(e), !0;
          if (!xe[o] || ke[o]) {
            if (!ke[o] && Rt(o)) {
              if (Re.tagNameCheck instanceof RegExp && C(Re.tagNameCheck, o))
                return !1;
              if (Re.tagNameCheck instanceof Function && Re.tagNameCheck(o))
                return !1;
            }
            if (Ye && !Ke[o]) {
              const t = Z(e) || e.parentNode,
                n = J(e) || e.childNodes;
              if (n && t) {
                for (let o = n.length - 1; o >= 0; --o) {
                  const r = X(n[o], !0);
                  (r.__removalCount = (e.__removalCount || 0) + 1),
                    t.insertBefore(r, K(e));
                }
              }
            }
            return _t(e), !0;
          }
          return e instanceof d &&
            !(function (e) {
              let t = Z(e);
              (t && t.tagName) ||
                (t = { namespaceURI: it, tagName: "template" });
              const n = _(e.tagName),
                o = _(t.tagName);
              return (
                !!st[e.namespaceURI] &&
                (e.namespaceURI === ot
                  ? t.namespaceURI === rt
                    ? "svg" === n
                    : t.namespaceURI === nt
                    ? "svg" === n && ("annotation-xml" === o || ct[o])
                    : Boolean(Tt[n])
                  : e.namespaceURI === nt
                  ? t.namespaceURI === rt
                    ? "math" === n
                    : t.namespaceURI === ot
                    ? "math" === n && ut[o]
                    : Boolean(vt[n])
                  : e.namespaceURI === rt
                  ? !(t.namespaceURI === ot && !ut[o]) &&
                    !(t.namespaceURI === nt && !ct[o]) &&
                    !vt[n] &&
                    (dt[n] || !Tt[n])
                  : !("application/xhtml+xml" !== pt || !st[e.namespaceURI]))
              );
            })(e)
            ? (_t(e), !0)
            : ("noscript" !== o && "noembed" !== o && "noframes" !== o) ||
              !C(/<\/no(script|embed|frames)/i, e.innerHTML)
            ? (Ue &&
                e.nodeType === ie &&
                ((t = e.textContent),
                y([ge, be, Te], (e) => {
                  t = S(t, e, " ");
                }),
                e.textContent !== t &&
                  (T(n.removed, { element: e.cloneNode() }),
                  (e.textContent = t))),
              Nt(ye.afterSanitizeElements, e, null),
              !1)
            : (_t(e), !0);
        },
        Ot = function (e, t, n) {
          if ($e && ("id" === t || "name" === t) && (n in o || n in yt))
            return !1;
          if (Me && !Le[t] && C(ve, t));
          else if (De && C(_e, t));
          else if (!Ce[t] || Le[t]) {
            if (
              !(
                (Rt(e) &&
                  ((Re.tagNameCheck instanceof RegExp &&
                    C(Re.tagNameCheck, e)) ||
                    (Re.tagNameCheck instanceof Function &&
                      Re.tagNameCheck(e))) &&
                  ((Re.attributeNameCheck instanceof RegExp &&
                    C(Re.attributeNameCheck, t)) ||
                    (Re.attributeNameCheck instanceof Function &&
                      Re.attributeNameCheck(t)))) ||
                ("is" === t &&
                  Re.allowCustomizedBuiltInElements &&
                  ((Re.tagNameCheck instanceof RegExp &&
                    C(Re.tagNameCheck, n)) ||
                    (Re.tagNameCheck instanceof Function &&
                      Re.tagNameCheck(n))))
              )
            )
              return !1;
          } else if (et[t]);
          else if (C(we, S(n, Ae, "")));
          else if (
            ("src" !== t && "xlink:href" !== t && "href" !== t) ||
            "script" === e ||
            0 !== w(n, "data:") ||
            !Qe[e]
          ) {
            if (Ie && !C(Ee, S(n, Ae, "")));
            else if (n) return !1;
          } else;
          return !0;
        },
        Rt = function (e) {
          return "annotation-xml" !== e && A(e, Se);
        },
        kt = function (e) {
          Nt(ye.beforeSanitizeAttributes, e, null);
          const t = e.attributes;
          if (!t || wt(e)) return;
          const o = {
            attrName: "",
            attrValue: "",
            keepAttr: !0,
            allowedAttributes: Ce,
            forceKeepAttr: void 0,
          };
          let r = t.length;
          for (; r--; ) {
            const i = t[r],
              a = i.name,
              s = i.namespaceURI,
              l = i.value,
              c = mt(a),
              u = l;
            let d = "value" === a ? u : x(u);
            if (
              ((o.attrName = c),
              (o.attrValue = d),
              (o.keepAttr = !0),
              (o.forceKeepAttr = void 0),
              Nt(ye.uponSanitizeAttribute, e, o),
              (d = o.attrValue),
              !Ge ||
                ("id" !== c && "name" !== c) ||
                (Et(a, e), (d = "user-content-" + d)),
              ze && C(/((--!?|])>)|<\/(style|title)/i, d))
            ) {
              Et(a, e);
              continue;
            }
            if (o.forceKeepAttr) continue;
            if (!o.keepAttr) {
              Et(a, e);
              continue;
            }
            if (!Pe && C(/\/>/i, d)) {
              Et(a, e);
              continue;
            }
            Ue &&
              y([ge, be, Te], (e) => {
                d = S(d, e, " ");
              });
            const p = mt(e.nodeName);
            if (Ot(p, c, d)) {
              if (
                ee &&
                "object" == typeof D &&
                "function" == typeof D.getAttributeType
              )
                if (s);
                else
                  switch (D.getAttributeType(p, c)) {
                    case "TrustedHTML":
                      d = ee.createHTML(d);
                      break;
                    case "TrustedScriptURL":
                      d = ee.createScriptURL(d);
                  }
              if (d !== u)
                try {
                  s ? e.setAttributeNS(s, a, d) : e.setAttribute(a, d),
                    wt(e) ? _t(e) : b(n.removed);
                } catch (t) {
                  Et(a, e);
                }
            } else Et(a, e);
          }
          Nt(ye.afterSanitizeAttributes, e, null);
        },
        Lt = function e(t) {
          let n = null;
          const o = St(t);
          for (Nt(ye.beforeSanitizeShadowDOM, t, null); (n = o.nextNode()); )
            Nt(ye.uponSanitizeShadowNode, n, null),
              Ct(n),
              kt(n),
              n.content instanceof s && e(n.content);
          Nt(ye.afterSanitizeShadowDOM, t, null);
        };
      return (
        (n.sanitize = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o = null,
            i = null,
            a = null,
            l = null;
          if (
            ((at = !e),
            at && (e = "\x3c!--\x3e"),
            "string" != typeof e && !xt(e))
          ) {
            if ("function" != typeof e.toString)
              throw O("toString is not a function");
            if ("string" != typeof (e = e.toString()))
              throw O("dirty is not a string, aborting");
          }
          if (!n.isSupported) return e;
          if (
            (He || bt(t),
            (n.removed = []),
            "string" == typeof e && (Xe = !1),
            Xe)
          ) {
            if (e.nodeName) {
              const t = mt(e.nodeName);
              if (!xe[t] || ke[t])
                throw O(
                  "root node is forbidden and cannot be sanitized in-place"
                );
            }
          } else if (e instanceof c)
            (o = At("\x3c!----\x3e")),
              (i = o.ownerDocument.importNode(e, !0)),
              (i.nodeType === re && "BODY" === i.nodeName) ||
              "HTML" === i.nodeName
                ? (o = i)
                : o.appendChild(i);
          else {
            if (!qe && !Ue && !je && -1 === e.indexOf("<"))
              return ee && We ? ee.createHTML(e) : e;
            if (((o = At(e)), !o)) return qe ? null : We ? ne : "";
          }
          o && Fe && _t(o.firstChild);
          const u = St(Xe ? e : o);
          for (; (a = u.nextNode()); )
            Ct(a), kt(a), a.content instanceof s && Lt(a.content);
          if (Xe) return e;
          if (qe) {
            if (Be)
              for (l = fe.call(o.ownerDocument); o.firstChild; )
                l.appendChild(o.firstChild);
            else l = o;
            return (
              (Ce.shadowroot || Ce.shadowrootmode) && (l = he.call(r, l, !0)), l
            );
          }
          let d = je ? o.outerHTML : o.innerHTML;
          return (
            je &&
              xe["!doctype"] &&
              o.ownerDocument &&
              o.ownerDocument.doctype &&
              o.ownerDocument.doctype.name &&
              C(te, o.ownerDocument.doctype.name) &&
              (d = "<!DOCTYPE " + o.ownerDocument.doctype.name + ">\n" + d),
            Ue &&
              y([ge, be, Te], (e) => {
                d = S(d, e, " ");
              }),
            ee && We ? ee.createHTML(d) : d
          );
        }),
        (n.setConfig = function () {
          bt(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          ),
            (He = !0);
        }),
        (n.clearConfig = function () {
          (ht = null), (He = !1);
        }),
        (n.isValidAttribute = function (e, t, n) {
          ht || bt({});
          const o = mt(e),
            r = mt(t);
          return Ot(o, r, n);
        }),
        (n.addHook = function (e, t) {
          "function" == typeof t && T(ye[e], t);
        }),
        (n.removeHook = function (e, t) {
          if (void 0 !== t) {
            const n = g(ye[e], t);
            return -1 === n ? void 0 : v(ye[e], n, 1)[0];
          }
          return b(ye[e]);
        }),
        (n.removeHooks = function (e) {
          ye[e] = [];
        }),
        (n.removeAllHooks = function () {
          ye = {
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
    de = ue;
  function pe(e) {
    const t = e.getBoundingClientRect();
    return { width: t.right - t.left, height: t.bottom - t.top };
  }
  const fe = de,
    me = function (e, t) {
      const n = pe(e),
        o = (function (e, t) {
          const n = pe(e);
          return (
            e.offsetParent === t.offsetParent &&
              ((n.left = e.offsetLeft), (n.top = e.offsetTop)),
            n
          );
        })(t, e),
        r = Math.round(o.top + o.height) + 10,
        i = Math.round(o.left + o.width - n.width) + 2;
      (e.style.top = `${r}px`), (e.style.left = `${i}px`);
    };
  var he = class {
      constructor(e) {
        (this.options = e),
          (this.el = this.constructEl()),
          this.show(),
          this.hide();
      }
      constructEl() {
        const e = document.createElement("div");
        return (
          (e.className = "ui-cart-feedback"),
          (e.innerHTML = fe.sanitize(this.options.template, {
            RETURN_TRUSTED_TYPE: !0,
          })),
          (e.hidden = !0),
          e.setAttribute("aria-hidden", !0),
          document.body.appendChild(e),
          e
        );
      }
      hide() {
        const e = this;
        setTimeout(() => {
          e.el.hidden = !0;
        }, this.options.hideDelay);
      }
      show() {
        (this.el.hidden = !1),
          this.el.setAttribute("aria-hidden", !1),
          me(this.el, this.options.element);
      }
    },
    ye = "".replace,
    ge = /[&<>'"]/g,
    be = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,
    Te = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    },
    ve = {
      "&amp;": "&",
      "&#38;": "&",
      "&lt;": "<",
      "&#60;": "<",
      "&gt;": ">",
      "&#62;": ">",
      "&apos;": "'",
      "&#39;": "'",
      "&quot;": '"',
      "&#34;": '"',
    };
  function _e(e) {
    return Te[e];
  }
  function Ee(e) {
    return ve[e];
  }
  const Ae = e(
    Object.freeze({
      __proto__: null,
      escape: function (e) {
        return ye.call(e, ge, _e);
      },
      unescape: function (e) {
        return ye.call(e, be, Ee);
      },
    })
  ).escape;
  const Se = (e) => {
      const t = `${e}=`,
        n = document.cookie.split(";");
      for (let e = 0; e < n.length; e += 1) {
        let o = n[`${e}`];
        for (; " " === o.charAt(0); ) o = o.substring(1, o.length);
        if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
      }
      return null;
    },
    we = (e, t, n) => {
      const o = new Date();
      o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
      const r = `; expires=${o.toGMTString()}`;
      let i = "";
      (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = document.querySelector("meta[name=browser-support]");
        if (!n || !e) return t;
        const o = new RegExp(`\\b${e}=(true|false)\\b`, "g").exec(n.content);
        return o ? JSON.parse(o[1]) : t;
      })("samesite") && (i = "; SameSite=None; Secure"),
        (document.cookie = `${e}=;expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/;`),
        (document.cookie = `${e}=${t}; ${r}; path=/; domain=${(() => {
          const e = window.location.hostname,
            t = e.split(".")[0];
          return e.slice(t.length + 1);
        })()}${i}`);
    },
    xe = {
      read: Se,
      createOrUpdate: we,
      updateCookiesOnClose: (e) => {
        if (e && e.widgetClosedCookie) {
          const t = parseInt(Se(e.widgetClosedCookie), 10);
          we(
            e.widgetClosedCookie,
            Number.isNaN(t) ? 1 : t + 1,
            e.cookieExpirationDays
          );
        }
      },
      reset: (e) => {
        e &&
          e.reset &&
          e.widgetClosedCookie &&
          we(e.widgetClosedCookie, 0, e.cookieExpirationDays);
      },
    };
  var Ne = function (e, t) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
    const o = document.querySelector(e);
    if (o) return void t(o);
    if ("undefined" == typeof MutationObserver) return;
    let r,
      i = !1;
    const a = new MutationObserver(() => {
      const n = document.querySelector(e);
      n && !i && ((i = !0), clearTimeout(r), a.disconnect(), t(n));
    });
    a.observe(document.documentElement, { childList: !0, subtree: !0 }),
      (r = setTimeout(() => {
        i || ((i = !0), a.disconnect());
      }, n));
  };
  const Ce = t,
    Oe = n.exports,
    Re = de,
    ke = he,
    Le = function (e) {
      return `\n    <div class="nav-cart-layer">\n      <a href="${
        e.link
      }">\n        <img src="${
        e.item.image
      }" class="nav-cart-layer__img" />\n        <div class="nav-cart-layer__text-container">\n          <span class="nav-cart-layer__legend">${Ae(
        e.legend
      )}</span>\n          <p class="nav-cart-layer__title">${Ae(
        e.item.title
      )}</p>\n        </div>\n      </a>\n    </div>\n  `;
    },
    De = {
      es: {
        legend: "Añadiste al carrito",
        action: "Ver carrito",
        success: "El producto se agregó correctamente",
        error:
          "Algo salió mal al agregar el producto al carrito. Inténtalo nuevamente.",
      },
      pt: {
        legend: "Adicionado ao seu carrinho",
        action: "Ver carrinho",
        success: "O produto foi adicionado corretamente",
        error:
          "Ocorreu um erro ao adicionar o produto ao carrinho. Tente novamente.",
      },
    },
    Me = e(Object.freeze({ __proto__: null, default: xe })).default,
    Ie = Ne;
  class Pe {
    constructor() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.hideDelay = e.hideDelay || 7e3;
      const t = e.locale || "es";
      (this.tr = {}),
        [De[t], e.tr].forEach((e) => {
          e &&
            Object.keys(e).forEach((t) => {
              Object.prototype.hasOwnProperty.call(e, t) && (this.tr[t] = e[t]);
            });
        }),
        (this.bus = e.bus),
        (this.link = e.link),
        (this.endpoints = e.endpoints),
        (this.isMobile = e.isMobile),
        (this.ui = {
          icon: e.element,
          number: e.element.querySelector(".nav-icon-cart-quantity"),
        }),
        this.validateOptions(),
        this.refresh(),
        this.bindEvents();
    }
    validateOptions() {
      if (!this.ui.icon) throw new Error("Cart: element is required.");
      if (!this.endpoints || "object" != typeof this.endpoints)
        throw new Error("Cart: endpoints are required.");
      if (!this.endpoints.get || "" === this.endpoints.get)
        throw new Error("Cart: endpoints.get is required.");
      if (!this.endpoints.post || "" === this.endpoints.post)
        throw new Error("Cart: endpoints.post is required.");
    }
    bindEvents() {
      this.bus.on("cart:refresh", this.refresh.bind(this)),
        this.bus.on("notifications:cart-icon", this.refresh.bind(this)),
        this.bus.on("cart:add", this.add.bind(this));
    }
    updateCartQuantityCookie(e) {
      const t = Me.read("ml_cart-quantity"),
        n = null !== t ? parseInt(t, 10) : null,
        o = Number(e);
      return n !== o
        ? (Me.createOrUpdate("ml_cart-quantity", o),
          { badge_icon: { quantity: o, label: o > 9 ? "9+" : o } })
        : null;
    }
    refresh(e) {
      e && null != e.quantity
        ? this.handleRefresh({
            badge_icon: {
              quantity: e.quantity,
              label: e.quantity > 9 ? "9+" : e.quantity,
            },
          })
        : Oe(this.endpoints.get, {
            method: "GET",
            credentials: "include",
            xhrFields: { withCredentials: !0 },
            success: this.handleRefresh.bind(this),
            error: this.handleError.bind(this),
          });
    }
    add(e) {
      Oe(this.endpoints.post, {
        method: "POST",
        data: e,
        xhrFields: { withCredentials: !0 },
        dataType: "json",
        contentType: "application/json",
        headers: { Accept: "application/json" },
        success: this.handleAdd.bind(this, e),
        error: this.handleError.bind(this),
      });
    }
    handleRefresh(e) {
      var t;
      const n = e.badge_icon,
        o = e.target,
        r = n.quantity,
        i = n.label,
        a = this.updateCartQuantityCookie(r);
      (this.ui.number.innerHTML = Re.sanitize(
        (null == a || null === (t = a.badge_icon) || void 0 === t
          ? void 0
          : t.label) ||
          i ||
          "",
        { RETURN_TRUSTED_TYPE: !0 }
      )),
        0 === r
          ? (Ce.removeClass(this.ui.icon, "nav-cart-full"),
            Ce.addClass(this.ui.icon, "nav-cart-empty"))
          : (Ce.addClass(this.ui.icon, "nav-cart-full"),
            Ce.removeClass(this.ui.icon, "nav-cart-empty"));
      const s = document.getElementById("nav-cart");
      if (s && s.href)
        if (o && o.flow_type) {
          const e = s.href.includes("flow_type"),
            t = s.href.includes("?");
          if (!e) {
            const e = `flow_type=${o.flow_type}`;
            s.href += t ? `&${e}` : `?${e}`;
          }
        } else s.href = this.link;
      this.bus.emit("cart:refresh-exclusive", e);
    }
    handleError(e) {
      this.bus.emit("cart:error", e);
    }
    handleAdd(e) {
      this.showFeedback(e), this.refresh(), this.bus.emit("cart:added", e);
    }
    showFeedback(e) {
      this.isMobile ? this.showSnackbar() : this.showLayer(e);
    }
    showSnackbar() {
      this.bus.emit("snackbar:show", {
        message: this.tr.success,
        type: "success",
        action: { title: this.tr.action, link: this.link },
        delay: this.hideDelay,
      });
    }
    showLayer(e) {
      new ke({
        element: this.ui.icon,
        template: Le({ item: e, link: this.link, legend: this.tr.legend }),
        hideDelay: this.hideDelay,
      });
    }
  }
  return (Pe.whenElement = Ie), Pe;
})();
