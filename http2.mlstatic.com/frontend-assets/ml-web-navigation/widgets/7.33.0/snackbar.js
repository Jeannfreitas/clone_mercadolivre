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
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function _iterableToArrayLimit(e, t) {
  var n =
    null == e
      ? null
      : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
  if (null != n) {
    var i,
      a,
      o,
      r,
      s = [],
      l = !0,
      c = !1;
    try {
      if (((o = (n = n.call(e)).next), 0 === t)) {
        if (Object(n) !== n) return;
        l = !1;
      } else
        for (
          ;
          !(l = (i = o.call(n)).done) && (s.push(i.value), s.length !== t);
          l = !0
        );
    } catch (e) {
      (c = !0), (a = e);
    } finally {
      try {
        if (!l && null != n.return && ((r = n.return()), Object(r) !== r))
          return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
var SnackbarWidget = (function () {
  "use strict";
  const e = Object.entries,
    t = Object.setPrototypeOf,
    n = Object.isFrozen,
    i = Object.getPrototypeOf,
    a = Object.getOwnPropertyDescriptor;
  let o = Object.freeze,
    r = Object.seal,
    s = Object.create,
    l = "undefined" != typeof Reflect && Reflect,
    c = l.apply,
    u = l.construct;
  o ||
    (o = function (e) {
      return e;
    }),
    r ||
      (r = function (e) {
        return e;
      }),
    c ||
      (c = function (e, t, n) {
        return e.apply(t, n);
      }),
    u ||
      (u = function (e, t) {
        return new e(...t);
      });
  const m = v(Array.prototype.forEach),
    p = v(Array.prototype.lastIndexOf),
    d = v(Array.prototype.pop),
    f = v(Array.prototype.push),
    h = v(Array.prototype.splice),
    g = v(String.prototype.toLowerCase),
    b = v(String.prototype.toString),
    y = v(String.prototype.match),
    T = v(String.prototype.replace),
    _ = v(String.prototype.indexOf),
    E = v(String.prototype.trim),
    A = v(Object.prototype.hasOwnProperty),
    k = v(RegExp.prototype.test),
    S =
      ((N = TypeError),
      function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return u(N, t);
      });
  var N;
  function v(e) {
    return function (t) {
      t instanceof RegExp && (t.lastIndex = 0);
      for (
        var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1;
        a < n;
        a++
      )
        i[a - 1] = arguments[a];
      return c(e, t, i);
    };
  }
  function w(e, i) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g;
    t && t(e, null);
    let o = i.length;
    for (; o--; ) {
      let t = i[o];
      if ("string" == typeof t) {
        const e = a(t);
        e !== t && (n(i) || (i[o] = e), (t = e));
      }
      e[t] = !0;
    }
    return e;
  }
  function R(e) {
    for (let t = 0; t < e.length; t++) {
      A(e, t) || (e[t] = null);
    }
    return e;
  }
  function x(t) {
    const n = s(null);
    for (const a of e(t)) {
      var i = _slicedToArray(a, 2);
      const e = i[0],
        o = i[1];
      A(t, e) &&
        (Array.isArray(o)
          ? (n[e] = R(o))
          : o && "object" == typeof o && o.constructor === Object
          ? (n[e] = x(o))
          : (n[e] = o));
    }
    return n;
  }
  function C(e, t) {
    for (; null !== e; ) {
      const n = a(e, t);
      if (n) {
        if (n.get) return v(n.get);
        if ("function" == typeof n.value) return v(n.value);
      }
      e = i(e);
    }
    return function () {
      return null;
    };
  }
  const O = o([
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
    L = o([
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
    D = o([
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
    I = o([
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
    M = o([
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
    z = o([
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
    U = o(["#text"]),
    P = o([
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
    H = o([
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
    F = o([
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
    j = o(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    W = r(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    B = r(/<%[\w\W]*|[\w\W]*%>/gm),
    $ = r(/\$\{[\w\W]*/gm),
    G = r(/^data-[\-\w.\u00B7-\uFFFF]+$/),
    Y = r(/^aria-[\-\w]+$/),
    q = r(
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    ),
    X = r(/^(?:\w+script|data):/i),
    K = r(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    V = r(/^html$/i),
    Z = r(/^[a-z][.\w]*(-[.\w]+)+$/i);
  var J = Object.freeze({
    __proto__: null,
    ARIA_ATTR: Y,
    ATTR_WHITESPACE: K,
    CUSTOM_ELEMENT: Z,
    DATA_ATTR: G,
    DOCTYPE_NAME: V,
    ERB_EXPR: B,
    IS_ALLOWED_URI: q,
    IS_SCRIPT_OR_DATA: X,
    MUSTACHE_EXPR: W,
    TMPLIT_EXPR: $,
  });
  const Q = 1,
    ee = 3,
    te = 7,
    ne = 8,
    ie = 9,
    ae = function () {
      return "undefined" == typeof window ? null : window;
    };
  var oe = (function t() {
    let n =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae();
    const i = (e) => t(e);
    if (
      ((i.version = "3.2.6"),
      (i.removed = []),
      !n || !n.document || n.document.nodeType !== ie || !n.Element)
    )
      return (i.isSupported = !1), i;
    let a = n.document;
    const r = a,
      l = r.currentScript,
      c = n.DocumentFragment,
      u = n.HTMLTemplateElement,
      N = n.Node,
      v = n.Element,
      R = n.NodeFilter,
      W = n.NamedNodeMap,
      B = void 0 === W ? n.NamedNodeMap || n.MozNamedAttrMap : W,
      $ = n.HTMLFormElement,
      G = n.DOMParser,
      Y = n.trustedTypes,
      X = v.prototype,
      K = C(X, "cloneNode"),
      Z = C(X, "remove"),
      oe = C(X, "nextSibling"),
      re = C(X, "childNodes"),
      se = C(X, "parentNode");
    if ("function" == typeof u) {
      const e = a.createElement("template");
      e.content && e.content.ownerDocument && (a = e.content.ownerDocument);
    }
    let le,
      ce = "";
    const ue = a,
      me = ue.implementation,
      pe = ue.createNodeIterator,
      de = ue.createDocumentFragment,
      fe = ue.getElementsByTagName,
      he = r.importNode;
    let ge = {
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
    i.isSupported =
      "function" == typeof e &&
      "function" == typeof se &&
      me &&
      void 0 !== me.createHTMLDocument;
    const be = J.MUSTACHE_EXPR,
      ye = J.ERB_EXPR,
      Te = J.TMPLIT_EXPR,
      _e = J.DATA_ATTR,
      Ee = J.ARIA_ATTR,
      Ae = J.IS_SCRIPT_OR_DATA,
      ke = J.ATTR_WHITESPACE,
      Se = J.CUSTOM_ELEMENT;
    let Ne = J.IS_ALLOWED_URI,
      ve = null;
    const we = w({}, [...O, ...L, ...D, ...M, ...U]);
    let Re = null;
    const xe = w({}, [...P, ...H, ...F, ...j]);
    let Ce = Object.seal(
        s(null, {
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
      Oe = null,
      Le = null,
      De = !0,
      Ie = !0,
      Me = !1,
      ze = !0,
      Ue = !1,
      Pe = !0,
      He = !1,
      Fe = !1,
      je = !1,
      We = !1,
      Be = !1,
      $e = !1,
      Ge = !0,
      Ye = !1,
      qe = !0,
      Xe = !1,
      Ke = {},
      Ve = null;
    const Ze = w({}, [
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
    let Je = null;
    const Qe = w({}, ["audio", "video", "img", "source", "image", "track"]);
    let et = null;
    const tt = w({}, [
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
      it = "http://www.w3.org/2000/svg",
      at = "http://www.w3.org/1999/xhtml";
    let ot = at,
      rt = !1,
      st = null;
    const lt = w({}, [nt, it, at], b);
    let ct = w({}, ["mi", "mo", "mn", "ms", "mtext"]),
      ut = w({}, ["annotation-xml"]);
    const mt = w({}, ["title", "style", "font", "a", "script"]);
    let pt = null;
    const dt = ["application/xhtml+xml", "text/html"];
    let ft = null,
      ht = null;
    const gt = a.createElement("form"),
      bt = function (e) {
        return e instanceof RegExp || e instanceof Function;
      },
      yt = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!ht || ht !== e) {
          if (
            ((e && "object" == typeof e) || (e = {}),
            (e = x(e)),
            (pt =
              -1 === dt.indexOf(e.PARSER_MEDIA_TYPE)
                ? "text/html"
                : e.PARSER_MEDIA_TYPE),
            (ft = "application/xhtml+xml" === pt ? b : g),
            (ve = A(e, "ALLOWED_TAGS") ? w({}, e.ALLOWED_TAGS, ft) : we),
            (Re = A(e, "ALLOWED_ATTR") ? w({}, e.ALLOWED_ATTR, ft) : xe),
            (st = A(e, "ALLOWED_NAMESPACES")
              ? w({}, e.ALLOWED_NAMESPACES, b)
              : lt),
            (et = A(e, "ADD_URI_SAFE_ATTR")
              ? w(x(tt), e.ADD_URI_SAFE_ATTR, ft)
              : tt),
            (Je = A(e, "ADD_DATA_URI_TAGS")
              ? w(x(Qe), e.ADD_DATA_URI_TAGS, ft)
              : Qe),
            (Ve = A(e, "FORBID_CONTENTS") ? w({}, e.FORBID_CONTENTS, ft) : Ze),
            (Oe = A(e, "FORBID_TAGS") ? w({}, e.FORBID_TAGS, ft) : x({})),
            (Le = A(e, "FORBID_ATTR") ? w({}, e.FORBID_ATTR, ft) : x({})),
            (Ke = !!A(e, "USE_PROFILES") && e.USE_PROFILES),
            (De = !1 !== e.ALLOW_ARIA_ATTR),
            (Ie = !1 !== e.ALLOW_DATA_ATTR),
            (Me = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
            (ze = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
            (Ue = e.SAFE_FOR_TEMPLATES || !1),
            (Pe = !1 !== e.SAFE_FOR_XML),
            (He = e.WHOLE_DOCUMENT || !1),
            (We = e.RETURN_DOM || !1),
            (Be = e.RETURN_DOM_FRAGMENT || !1),
            ($e = e.RETURN_TRUSTED_TYPE || !1),
            (je = e.FORCE_BODY || !1),
            (Ge = !1 !== e.SANITIZE_DOM),
            (Ye = e.SANITIZE_NAMED_PROPS || !1),
            (qe = !1 !== e.KEEP_CONTENT),
            (Xe = e.IN_PLACE || !1),
            (Ne = e.ALLOWED_URI_REGEXP || q),
            (ot = e.NAMESPACE || at),
            (ct = e.MATHML_TEXT_INTEGRATION_POINTS || ct),
            (ut = e.HTML_INTEGRATION_POINTS || ut),
            (Ce = e.CUSTOM_ELEMENT_HANDLING || {}),
            e.CUSTOM_ELEMENT_HANDLING &&
              bt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
              (Ce.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
            e.CUSTOM_ELEMENT_HANDLING &&
              bt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
              (Ce.attributeNameCheck =
                e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
            e.CUSTOM_ELEMENT_HANDLING &&
              "boolean" ==
                typeof e.CUSTOM_ELEMENT_HANDLING
                  .allowCustomizedBuiltInElements &&
              (Ce.allowCustomizedBuiltInElements =
                e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
            Ue && (Ie = !1),
            Be && (We = !0),
            Ke &&
              ((ve = w({}, U)),
              (Re = []),
              !0 === Ke.html && (w(ve, O), w(Re, P)),
              !0 === Ke.svg && (w(ve, L), w(Re, H), w(Re, j)),
              !0 === Ke.svgFilters && (w(ve, D), w(Re, H), w(Re, j)),
              !0 === Ke.mathMl && (w(ve, M), w(Re, F), w(Re, j))),
            e.ADD_TAGS && (ve === we && (ve = x(ve)), w(ve, e.ADD_TAGS, ft)),
            e.ADD_ATTR && (Re === xe && (Re = x(Re)), w(Re, e.ADD_ATTR, ft)),
            e.ADD_URI_SAFE_ATTR && w(et, e.ADD_URI_SAFE_ATTR, ft),
            e.FORBID_CONTENTS &&
              (Ve === Ze && (Ve = x(Ve)), w(Ve, e.FORBID_CONTENTS, ft)),
            qe && (ve["#text"] = !0),
            He && w(ve, ["html", "head", "body"]),
            ve.table && (w(ve, ["tbody"]), delete Oe.tbody),
            e.TRUSTED_TYPES_POLICY)
          ) {
            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML)
              throw S(
                'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
              );
            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
              throw S(
                'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
              );
            (le = e.TRUSTED_TYPES_POLICY), (ce = le.createHTML(""));
          } else
            void 0 === le &&
              (le = (function (e, t) {
                if ("object" != typeof e || "function" != typeof e.createPolicy)
                  return null;
                let n = null;
                const i = "data-tt-policy-suffix";
                t && t.hasAttribute(i) && (n = t.getAttribute(i));
                const a = "dompurify" + (n ? "#" + n : "");
                try {
                  return e.createPolicy(a, {
                    createHTML: (e) => e,
                    createScriptURL: (e) => e,
                  });
                } catch (e) {
                  return (
                    console.warn(
                      "TrustedTypes policy " + a + " could not be created."
                    ),
                    null
                  );
                }
              })(Y, l)),
              null !== le && "string" == typeof ce && (ce = le.createHTML(""));
          o && o(e), (ht = e);
        }
      },
      Tt = w({}, [...L, ...D, ...I]),
      _t = w({}, [...M, ...z]),
      Et = function (e) {
        f(i.removed, { element: e });
        try {
          se(e).removeChild(e);
        } catch (t) {
          Z(e);
        }
      },
      At = function (e, t) {
        try {
          f(i.removed, { attribute: t.getAttributeNode(e), from: t });
        } catch (e) {
          f(i.removed, { attribute: null, from: t });
        }
        if ((t.removeAttribute(e), "is" === e))
          if (We || Be)
            try {
              Et(t);
            } catch (e) {}
          else
            try {
              t.setAttribute(e, "");
            } catch (e) {}
      },
      kt = function (e) {
        let t = null,
          n = null;
        if (je) e = "<remove></remove>" + e;
        else {
          const t = y(e, /^[\r\n\t ]+/);
          n = t && t[0];
        }
        "application/xhtml+xml" === pt &&
          ot === at &&
          (e =
            '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
            e +
            "</body></html>");
        const i = le ? le.createHTML(e) : e;
        if (ot === at)
          try {
            t = new G().parseFromString(i, pt);
          } catch (e) {}
        if (!t || !t.documentElement) {
          t = me.createDocument(ot, "template", null);
          try {
            t.documentElement.innerHTML = rt ? ce : i;
          } catch (e) {}
        }
        const o = t.body || t.documentElement;
        return (
          e &&
            n &&
            o.insertBefore(a.createTextNode(n), o.childNodes[0] || null),
          ot === at
            ? fe.call(t, He ? "html" : "body")[0]
            : He
            ? t.documentElement
            : o
        );
      },
      St = function (e) {
        return pe.call(
          e.ownerDocument || e,
          e,
          R.SHOW_ELEMENT |
            R.SHOW_COMMENT |
            R.SHOW_TEXT |
            R.SHOW_PROCESSING_INSTRUCTION |
            R.SHOW_CDATA_SECTION,
          null
        );
      },
      Nt = function (e) {
        return (
          e instanceof $ &&
          ("string" != typeof e.nodeName ||
            "string" != typeof e.textContent ||
            "function" != typeof e.removeChild ||
            !(e.attributes instanceof B) ||
            "function" != typeof e.removeAttribute ||
            "function" != typeof e.setAttribute ||
            "string" != typeof e.namespaceURI ||
            "function" != typeof e.insertBefore ||
            "function" != typeof e.hasChildNodes)
        );
      },
      vt = function (e) {
        return "function" == typeof N && e instanceof N;
      };
    function wt(e, t, n) {
      m(e, (e) => {
        e.call(i, t, n, ht);
      });
    }
    const Rt = function (e) {
        let t = null;
        if ((wt(ge.beforeSanitizeElements, e, null), Nt(e))) return Et(e), !0;
        const n = ft(e.nodeName);
        if (
          (wt(ge.uponSanitizeElement, e, { tagName: n, allowedTags: ve }),
          Pe &&
            e.hasChildNodes() &&
            !vt(e.firstElementChild) &&
            k(/<[/\w!]/g, e.innerHTML) &&
            k(/<[/\w!]/g, e.textContent))
        )
          return Et(e), !0;
        if (e.nodeType === te) return Et(e), !0;
        if (Pe && e.nodeType === ne && k(/<[/\w]/g, e.data)) return Et(e), !0;
        if (!ve[n] || Oe[n]) {
          if (!Oe[n] && Ct(n)) {
            if (Ce.tagNameCheck instanceof RegExp && k(Ce.tagNameCheck, n))
              return !1;
            if (Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(n))
              return !1;
          }
          if (qe && !Ve[n]) {
            const t = se(e) || e.parentNode,
              n = re(e) || e.childNodes;
            if (n && t) {
              for (let i = n.length - 1; i >= 0; --i) {
                const a = K(n[i], !0);
                (a.__removalCount = (e.__removalCount || 0) + 1),
                  t.insertBefore(a, oe(e));
              }
            }
          }
          return Et(e), !0;
        }
        return e instanceof v &&
          !(function (e) {
            let t = se(e);
            (t && t.tagName) || (t = { namespaceURI: ot, tagName: "template" });
            const n = g(e.tagName),
              i = g(t.tagName);
            return (
              !!st[e.namespaceURI] &&
              (e.namespaceURI === it
                ? t.namespaceURI === at
                  ? "svg" === n
                  : t.namespaceURI === nt
                  ? "svg" === n && ("annotation-xml" === i || ct[i])
                  : Boolean(Tt[n])
                : e.namespaceURI === nt
                ? t.namespaceURI === at
                  ? "math" === n
                  : t.namespaceURI === it
                  ? "math" === n && ut[i]
                  : Boolean(_t[n])
                : e.namespaceURI === at
                ? !(t.namespaceURI === it && !ut[i]) &&
                  !(t.namespaceURI === nt && !ct[i]) &&
                  !_t[n] &&
                  (mt[n] || !Tt[n])
                : !("application/xhtml+xml" !== pt || !st[e.namespaceURI]))
            );
          })(e)
          ? (Et(e), !0)
          : ("noscript" !== n && "noembed" !== n && "noframes" !== n) ||
            !k(/<\/no(script|embed|frames)/i, e.innerHTML)
          ? (Ue &&
              e.nodeType === ee &&
              ((t = e.textContent),
              m([be, ye, Te], (e) => {
                t = T(t, e, " ");
              }),
              e.textContent !== t &&
                (f(i.removed, { element: e.cloneNode() }),
                (e.textContent = t))),
            wt(ge.afterSanitizeElements, e, null),
            !1)
          : (Et(e), !0);
      },
      xt = function (e, t, n) {
        if (Ge && ("id" === t || "name" === t) && (n in a || n in gt))
          return !1;
        if (Ie && !Le[t] && k(_e, t));
        else if (De && k(Ee, t));
        else if (!Re[t] || Le[t]) {
          if (
            !(
              (Ct(e) &&
                ((Ce.tagNameCheck instanceof RegExp && k(Ce.tagNameCheck, e)) ||
                  (Ce.tagNameCheck instanceof Function &&
                    Ce.tagNameCheck(e))) &&
                ((Ce.attributeNameCheck instanceof RegExp &&
                  k(Ce.attributeNameCheck, t)) ||
                  (Ce.attributeNameCheck instanceof Function &&
                    Ce.attributeNameCheck(t)))) ||
              ("is" === t &&
                Ce.allowCustomizedBuiltInElements &&
                ((Ce.tagNameCheck instanceof RegExp && k(Ce.tagNameCheck, n)) ||
                  (Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(n))))
            )
          )
            return !1;
        } else if (et[t]);
        else if (k(Ne, T(n, ke, "")));
        else if (
          ("src" !== t && "xlink:href" !== t && "href" !== t) ||
          "script" === e ||
          0 !== _(n, "data:") ||
          !Je[e]
        ) {
          if (Me && !k(Ae, T(n, ke, "")));
          else if (n) return !1;
        } else;
        return !0;
      },
      Ct = function (e) {
        return "annotation-xml" !== e && y(e, Se);
      },
      Ot = function (e) {
        wt(ge.beforeSanitizeAttributes, e, null);
        const t = e.attributes;
        if (!t || Nt(e)) return;
        const n = {
          attrName: "",
          attrValue: "",
          keepAttr: !0,
          allowedAttributes: Re,
          forceKeepAttr: void 0,
        };
        let a = t.length;
        for (; a--; ) {
          const o = t[a],
            r = o.name,
            s = o.namespaceURI,
            l = o.value,
            c = ft(r),
            u = l;
          let p = "value" === r ? u : E(u);
          if (
            ((n.attrName = c),
            (n.attrValue = p),
            (n.keepAttr = !0),
            (n.forceKeepAttr = void 0),
            wt(ge.uponSanitizeAttribute, e, n),
            (p = n.attrValue),
            !Ye ||
              ("id" !== c && "name" !== c) ||
              (At(r, e), (p = "user-content-" + p)),
            Pe && k(/((--!?|])>)|<\/(style|title)/i, p))
          ) {
            At(r, e);
            continue;
          }
          if (n.forceKeepAttr) continue;
          if (!n.keepAttr) {
            At(r, e);
            continue;
          }
          if (!ze && k(/\/>/i, p)) {
            At(r, e);
            continue;
          }
          Ue &&
            m([be, ye, Te], (e) => {
              p = T(p, e, " ");
            });
          const f = ft(e.nodeName);
          if (xt(f, c, p)) {
            if (
              le &&
              "object" == typeof Y &&
              "function" == typeof Y.getAttributeType
            )
              if (s);
              else
                switch (Y.getAttributeType(f, c)) {
                  case "TrustedHTML":
                    p = le.createHTML(p);
                    break;
                  case "TrustedScriptURL":
                    p = le.createScriptURL(p);
                }
            if (p !== u)
              try {
                s ? e.setAttributeNS(s, r, p) : e.setAttribute(r, p),
                  Nt(e) ? Et(e) : d(i.removed);
              } catch (t) {
                At(r, e);
              }
          } else At(r, e);
        }
        wt(ge.afterSanitizeAttributes, e, null);
      },
      Lt = function e(t) {
        let n = null;
        const i = St(t);
        for (wt(ge.beforeSanitizeShadowDOM, t, null); (n = i.nextNode()); )
          wt(ge.uponSanitizeShadowNode, n, null),
            Rt(n),
            Ot(n),
            n.content instanceof c && e(n.content);
        wt(ge.afterSanitizeShadowDOM, t, null);
      };
    return (
      (i.sanitize = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = null,
          a = null,
          o = null,
          s = null;
        if (
          ((rt = !e), rt && (e = "\x3c!--\x3e"), "string" != typeof e && !vt(e))
        ) {
          if ("function" != typeof e.toString)
            throw S("toString is not a function");
          if ("string" != typeof (e = e.toString()))
            throw S("dirty is not a string, aborting");
        }
        if (!i.isSupported) return e;
        if (
          (Fe || yt(t), (i.removed = []), "string" == typeof e && (Xe = !1), Xe)
        ) {
          if (e.nodeName) {
            const t = ft(e.nodeName);
            if (!ve[t] || Oe[t])
              throw S(
                "root node is forbidden and cannot be sanitized in-place"
              );
          }
        } else if (e instanceof N)
          (n = kt("\x3c!----\x3e")),
            (a = n.ownerDocument.importNode(e, !0)),
            (a.nodeType === Q && "BODY" === a.nodeName) || "HTML" === a.nodeName
              ? (n = a)
              : n.appendChild(a);
        else {
          if (!We && !Ue && !He && -1 === e.indexOf("<"))
            return le && $e ? le.createHTML(e) : e;
          if (((n = kt(e)), !n)) return We ? null : $e ? ce : "";
        }
        n && je && Et(n.firstChild);
        const l = St(Xe ? e : n);
        for (; (o = l.nextNode()); )
          Rt(o), Ot(o), o.content instanceof c && Lt(o.content);
        if (Xe) return e;
        if (We) {
          if (Be)
            for (s = de.call(n.ownerDocument); n.firstChild; )
              s.appendChild(n.firstChild);
          else s = n;
          return (
            (Re.shadowroot || Re.shadowrootmode) && (s = he.call(r, s, !0)), s
          );
        }
        let u = He ? n.outerHTML : n.innerHTML;
        return (
          He &&
            ve["!doctype"] &&
            n.ownerDocument &&
            n.ownerDocument.doctype &&
            n.ownerDocument.doctype.name &&
            k(V, n.ownerDocument.doctype.name) &&
            (u = "<!DOCTYPE " + n.ownerDocument.doctype.name + ">\n" + u),
          Ue &&
            m([be, ye, Te], (e) => {
              u = T(u, e, " ");
            }),
          le && $e ? le.createHTML(u) : u
        );
      }),
      (i.setConfig = function () {
        yt(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
          (Fe = !0);
      }),
      (i.clearConfig = function () {
        (ht = null), (Fe = !1);
      }),
      (i.isValidAttribute = function (e, t, n) {
        ht || yt({});
        const i = ft(e),
          a = ft(t);
        return xt(i, a, n);
      }),
      (i.addHook = function (e, t) {
        "function" == typeof t && f(ge[e], t);
      }),
      (i.removeHook = function (e, t) {
        if (void 0 !== t) {
          const n = p(ge[e], t);
          return -1 === n ? void 0 : h(ge[e], n, 1)[0];
        }
        return d(ge[e]);
      }),
      (i.removeHooks = function (e) {
        ge[e] = [];
      }),
      (i.removeAllHooks = function () {
        ge = {
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
      i
    );
  })();
  let re;
  const se = oe;
  var le = class {
    constructor(e) {
      const t = {};
      if (
        ([
          {
            message: "",
            type: "default",
            autoClose: !0,
            mountElement: "main",
            action: { title: "", link: "", callback: void 0 },
            delay: 3e3,
          },
          e,
        ].forEach((e) => {
          Object.keys(e).forEach((n) => {
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          });
        }),
        !t.message || "" === t.message.trim())
      )
        throw new Error("Snackbar: message cannot be empty.");
      if (
        Object.prototype.hasOwnProperty.call(t, "mountElement") &&
        ("string" === (t.mountElement, !1) || "" === t.mountElement.trim())
      )
        throw new Error(
          "Snackbar: mountElement has to be a string and it cannot be empty."
        );
      return (
        (this.config = t),
        (this.ui = {
          container:
            window.document.querySelector(this.config.mountElement) ||
            window.document.body,
        }),
        (this.classes = {
          component: "ui-snackbar",
          active: "ui-snackbar--is-active",
          inactive: "ui-snackbar--is-inactive",
          type: `ui-snackbar--${t.type}`,
          message: "ui-snackbar__message",
          action: "ui-snackbar__action",
        }),
        (this.handlers = { customCallback: this.customCallback.bind(this) }),
        (this.el = this.ui.container.querySelector(
          `.${this.classes.component}`
        )),
        (this.action = this.getAction()),
        (this.timings = {
          closeDelay: t.delay,
          animationDelay: 500,
          touchDelay: 300,
        }),
        this.init(),
        this
      );
    }
    init() {
      this.el
        ? this.hasClass(this.el, this.classes.active)
          ? (this.hide(),
            this.delay("animationDelay", () => {
              this.edit(), this.show();
            }))
          : (this.edit(), this.show())
        : (this.create(), this.show());
    }
    create() {
      this.ui.container.insertAdjacentHTML(
        "beforeend",
        se.sanitize(this.getTemplate(), { RETURN_TRUSTED_TYPE: !0 })
      );
    }
    edit() {
      (this.el.className = this.getInitialClasses()),
        (this.el.innerHTML = se.sanitize(this.getInnerTemplate(), {
          RETURN_TRUSTED_TYPE: !0,
        }));
    }
    show() {
      (this.el = this.ui.container.querySelector(`.${this.classes.component}`)),
        this.el &&
          (this.addClass(this.el, this.classes.active),
          this.config.autoClose && this.config.delay && this.autoHide(),
          this.action &&
            "function" == typeof this.action.callback &&
            this.bindEvents());
    }
    hide() {
      this.removeClass(this.el, this.classes.active),
        this.addClass(this.el, this.classes.inactive);
    }
    autoHide() {
      clearTimeout(re), (re = this.delay("closeDelay", this.hide));
    }
    delay(e, t) {
      const n = this.timings[e] || this.timings.closeDelay;
      return setTimeout(t.bind(this), n);
    }
    bindEvents() {
      this.el
        .querySelector(`.${this.classes.action}`)
        .addEventListener("click", this.handlers.customCallback);
    }
    customCallback(e) {
      e.preventDefault(),
        this.action.callback(),
        this.delay("touchDelay", this.hide),
        e.currentTarget.removeEventListener(
          "click",
          this.handlers.customCallback
        );
    }
    getAction() {
      const e = this.config.action;
      let t;
      return (
        "" !== e.title &&
          ((t = { title: e.title }),
          e.link && "" !== e.link
            ? (t.link = e.link)
            : e.callback &&
              "function" == typeof e.callback &&
              (t.callback = e.callback)),
        t
      );
    }
    getInitialClasses() {
      return `${this.classes.component} ${this.classes.type}`;
    }
    getTemplate() {
      return `<div class="${this.getInitialClasses()}">${this.getInnerTemplate()}</div>`;
    }
    getInnerTemplate() {
      const e = this.action || {},
        t = e.link,
        n = e.title,
        i = this.classes,
        a = `<a href="${t || "#"}" class="${i.action}">${n}</a>`;
      return `<p class="${i.message}">${this.config.message}</p>${
        this.action ? a : ""
      }`;
    }
    addClass(e, t) {
      e.classList ? e.classList.add(t) : (e.className += ` ${t}`);
    }
    removeClass(e, t) {
      e.classList
        ? e.classList.remove(t)
        : (e.className = e.className.replace(
            new RegExp(`(^|\\b)${t.split(" ").join("|")}(\\b|$)`, "gi"),
            " "
          ));
    }
    hasClass(e, t) {
      return e.classList
        ? e.classList.contains(t)
        : new RegExp(`(^| )${t}( |$)`, "gi").test(e.className);
    }
  };
  !(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && "undefined" != typeof document) {
      var i = document.head || document.getElementsByTagName("head")[0],
        a = document.createElement("style");
      (a.type = "text/css"),
        "top" === n && i.firstChild
          ? i.insertBefore(a, i.firstChild)
          : i.appendChild(a),
        a.styleSheet
          ? (a.styleSheet.cssText = e)
          : a.appendChild(document.createTextNode(e));
    }
  })(
    '@keyframes snackbar-show {\n  from {\n    opacity: 0;\n    transform: translate3d(-50%, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n@keyframes snackbar-hide {\n  0% {\n    transform: translate3d(-50%, 0, 0);\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(-50%, 100%, 0);\n  }\n}\n.no-js .ui-snackbar, .ui-snackbar--is-active {\n  animation-name: snackbar-show;\n}\n\n.no-js .ui-snackbar__close:checked + .ui-snackbar, .ui-snackbar--is-inactive {\n  animation-name: snackbar-hide;\n  animation-fill-mode: forwards;\n}\n\n.ui-snackbar {\n  position: fixed;\n  z-index: 1022;\n  width: 100%;\n  font-size: 14px;\n  line-height: 1.25;\n  color: #fff;\n  background-color: #333;\n  bottom: 0;\n  display: table;\n  border-spacing: 20px;\n  border-collapse: separate;\n  animation-duration: 0.5s;\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.ui-snackbar--default {\n  background-color: #333;\n}\n\n.ui-snackbar--success {\n  background-color: #39b54a;\n}\n\n.ui-snackbar--error {\n  background-color: #f04449;\n}\n\n.ui-snackbar__message,\n.ui-snackbar__action {\n  display: table-cell;\n}\n\n.ui-snackbar__action {\n  color: #fff;\n  background: inherit;\n  border: 0;\n  font-size: inherit;\n  text-transform: uppercase;\n  padding-left: 0;\n  height: 100%;\n  text-align: right;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n\na.ui-snackbar__action,\na.ui-snackbar__action:link,\na.ui-snackbar__action:active,\na.ui-snackbar__action:visited,\na.ui-snackbar__action:hover {\n  color: #fff;\n  text-decoration: none;\n}\n\n.ui-snackbar__close,\n.ui-snackbar__close-trigger {\n  display: none;\n}\n\n.no-js .ui-snackbar__close-trigger {\n  position: relative;\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n}\n.no-js .ui-snackbar__close-trigger:after, .no-js .ui-snackbar__close-trigger:before {\n  position: absolute;\n  left: 7.5px;\n  top: 0;\n  content: "";\n  height: 15px;\n  width: 2px;\n  background-color: #fff;\n  cursor: pointer;\n}\n.no-js .ui-snackbar__close-trigger:before {\n  transform: rotate(45deg);\n}\n.no-js .ui-snackbar__close-trigger:after {\n  transform: rotate(-45deg);\n}\n.no-js .ui-snackbar__close-trigger {\n  display: table-cell;\n}\n.ui-snackbar--is-pristine {\n  display: none !important;\n}\n\n@media (min-width: 768px) {\n  .ui-snackbar {\n    max-width: 600px;\n    bottom: 24px;\n    font-size: 16px;\n    border-radius: 4px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .ui-snackbar__action {\n    font-size: 14px;\n  }\n}'
  );
  const ce = le;
  var ue = class {
    constructor() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (this.bus = e.bus),
        this.bus.on("snackbar:show", this.show.bind(this)),
        this.bus.on("snackbar:hide", this.hide.bind(this)),
        e.scope && (e.scope.Snackbar = ce);
    }
    show(e) {
      return (this.snackbar = new ce(e)), this.snackbar;
    }
    hide() {
      return this.snackbar && this.snackbar.hide(), this.snackbar;
    }
  };
  return ue;
})();
