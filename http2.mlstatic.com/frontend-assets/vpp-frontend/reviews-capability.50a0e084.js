(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [90617],
  {
    71976(e, t, r) {
      e.exports = r(78983);
    },
    34330(e, t, r) {
      "use strict";
      r.r(t), r.d(t, { default: () => n });
      const { ReviewsMobileCapability: o } = r(71976),
        n = o;
    },
    70079(e) {
      (e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
        return o;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    92987(e) {
      (e.exports = function (e) {
        if (Array.isArray(e)) return e;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    81156(e) {
      (e.exports = function (e, t) {
        var r =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != r) {
          var o,
            n,
            l,
            s,
            u = [],
            a = !0,
            i = !1;
          try {
            if (((l = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              a = !1;
            } else
              for (
                ;
                !(a = (o = l.call(r)).done) &&
                (u.push(o.value), u.length !== t);
                a = !0
              );
          } catch (e) {
            (i = !0), (n = e);
          } finally {
            try {
              if (!a && null != r.return && ((s = r.return()), Object(s) !== s))
                return;
            } finally {
              if (i) throw n;
            }
          }
          return u;
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    25371(e) {
      (e.exports = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    85715(e, t, r) {
      var o = r(92987),
        n = r(81156),
        l = r(17122),
        s = r(25371);
      (e.exports = function (e, t) {
        return o(e) || n(e, t) || l(e, t) || s();
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    17122(e, t, r) {
      var o = r(70079);
      (e.exports = function (e, t) {
        if (e) {
          if ("string" == typeof e) return o(e, t);
          var r = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? o(e, t)
              : void 0
          );
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
  },
]);
//# sourceMappingURL=reviews-capability.50a0e084.js.map
