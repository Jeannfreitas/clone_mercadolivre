"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [15250, 37808, 51823],
  {
    37808(e, t, n) {
      n.d(t, {
        $n: () => A,
        C3: () => w,
        Wl: () => V,
        fd: () => Y,
        fk: () => P,
        gf: () => k,
      });
      var r = n(58168),
        o = n(89379),
        i = n(80045),
        a = n(96540),
        s = n(46942),
        l = n.n(s),
        c = n(832),
        u = n(53648),
        d = n(88460),
        p = n(69247),
        f = n(95990),
        m = n(48529),
        h = n(52297),
        v = n(62166);
      const g = "andes-button",
        b = "andes-button-dropdown",
        y = [
          "children",
          "className",
          "disabled",
          "fullWidth",
          "hierarchy",
          "href",
          "id",
          "loading",
          "onClick",
          "size",
          "srAnnouncement",
          "srLabel",
          "type",
          "ref",
          "backgroundType",
          "data-andes-state",
        ],
        E = { small: "xsmall", medium: "xsmall", large: "small" },
        w = (e) => {
          let { children: t } = e;
          return a.createElement(
            "span",
            { className: `${g}__text`, "data-andes-button-text": !0 },
            t
          );
        },
        A = (function () {
          const e = (e) => {
            const {
                children: t,
                className: n,
                disabled: s = !1,
                fullWidth: h = !1,
                hierarchy: v = "loud",
                href: b,
                id: w,
                loading: A,
                onClick: _,
                size: x = "large",
                srAnnouncement: S,
                srLabel: O,
                type: C = "button",
                ref: T,
                backgroundType: L = "default",
                "data-andes-state": N,
              } = e,
              k = (0, i.A)(e, y),
              $ = (0, p.Bi)(w),
              { getThemedComponentClasses: I, themeHash: R } = (0, f.wR)(),
              M = (0, a.useRef)(void 0),
              P = (0, a.useRef)(!0),
              [D, B] = (0, a.useState)(""),
              [j, H] = (0, a.useState)(!1),
              z = ((e) =>
                "transparent" === e
                  ? ((0, d.A)(
                      !1,
                      "'hierarchy' with 'transparent' value will be deprecated in a future major version. \nPlease, use 'mute' value on <Button> instead"
                    ),
                    "mute")
                  : e)(v);
            (0, a.useEffect)(() => {
              A || (B(""), P.current || H(!0)), P && (P.current = !1);
            }, [A]),
              (0, a.useEffect)(() => {
                let e;
                return (
                  j &&
                    (e = setTimeout(() => {
                      H(!1);
                    }, 200)),
                  () => clearTimeout(e)
                );
              }, [j]),
              (0, a.useEffect)(
                () => () => {
                  clearTimeout(M.current);
                },
                []
              ),
              (0, d.A)(
                !A || (A && S),
                "<ButtonWithSpinner> needs some plain text contents for accessibility reasons.\n    Please add a 'srAnnouncement' prop."
              );
            const F = l()(
                g,
                n,
                {
                  [`${g}--${x}`]: x,
                  [`${g}--${z}`]: z,
                  [`${g}--disabled`]: s,
                  [`${g}--full-width`]: h,
                  [`${g}--loading`]: A,
                  [`${g}--loading-complete`]: j,
                  [`${g}--color-on-background`]: "complexBackground" === L,
                },
                null == I ? void 0 : I("button")
              ),
              U = (0, o.A)(
                (0, o.A)(
                  (0, o.A)({ className: F, id: $, "aria-label": O }, k),
                  {},
                  {
                    "data-andes-button": !0,
                    "data-andes-button-hierarchy": z,
                    "data-andes-button-size": x,
                  },
                  (0, m.i)(
                    (0, o.A)(
                      (0, o.A)({}, N ? { otherDataAndesState: N } : {}),
                      {},
                      { disabled: s, loading: A }
                    )
                  )
                ),
                R
              ),
              V = a.createElement(
                "span",
                { className: `${g}__content`, "data-andes-button-content": !0 },
                t
              );
            if (b) {
              const e = (0, o.A)(
                (0, o.A)(
                  {},
                  s || A ? { role: "link", "aria-disabled": !0 } : { href: b }
                ),
                {},
                { ref: T, onClick: _ },
                U
              );
              return a.createElement("a", e, V);
            }
            const W = (0, o.A)({ disabled: s || A, ref: T, type: C }, U),
              q = E[x];
            return a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "button",
                (0, r.A)({}, W, {
                  onClick: (e) => {
                    const t = S || "";
                    (M.current = setTimeout(() => B(t), 30)),
                      "function" == typeof _ && _(e);
                  },
                }),
                V,
                A && a.createElement(c.m, { ariaLabelledBy: $, size: q })
              ),
              A && a.createElement(u.s, { "aria-live": "assertive" }, D)
            );
          };
          return (e.displayName = "Button"), e;
        })(),
        _ = [
          "className",
          "dialogSrLabel",
          "id",
          "listContent",
          "namespace",
          "onClickOutside",
          "placement",
          "popperOptions",
          "srLabel",
          "trigger",
          "visible",
        ];
      var x = (e) => {
          let {
              className: t,
              dialogSrLabel: n,
              id: o,
              listContent: s,
              namespace: l,
              onClickOutside: c,
              placement: u,
              popperOptions: d,
              srLabel: p,
              trigger: f,
              visible: m,
            } = e,
            v = (0, i.A)(e, _);
          return a.createElement(
            h.yQ,
            (0, r.A)(
              {
                className: t,
                dialogSrLabel: n,
                placement: u,
                open: m,
                popperOptions: d,
                trigger: f,
                id: o,
                srLabel: p,
              },
              v
            ),
            s.map((e, t) => {
              let {
                title: n,
                description: r,
                href: o,
                onClick: i,
                leftContent: s,
              } = e;
              return a.createElement(h.Bv, {
                id: `${l}__menu-item-${t}`,
                href: o,
                className: `${l}__menu-item`,
                key: n,
                value: n,
                title: n,
                description: r,
                onClick: i,
                leftContent: s,
              });
            })
          );
        },
        S = {
          "andes-button-dropdownmenú desplegable": [null, "Dropdown menu"],
          "andes-button-splitmenú desplegable": [null, "Dropdown menu"],
        },
        O = {
          "andes-button-dropdownmenú desplegable": [null, "下拉菜单"],
          "andes-button-splitmenú desplegable": [null, "下拉菜单"],
        },
        C = {
          "andes-button-dropdownmenú desplegable": [null, "Menú desplegable"],
          "andes-button-splitmenú desplegable": [null, "Menú desplegable"],
        },
        T = {
          "andes-button-dropdownmenú desplegable": [null, "Menu suspenso"],
          "andes-button-splitmenú desplegable": [null, "Menu suspenso"],
        };
      const L = () =>
          a.createElement(
            "svg",
            {
              width: "20px",
              height: "20px",
              viewBox: "0 0 20 20",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              className: `${b}__chevron`,
            },
            a.createElement(
              "g",
              {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                fillOpacity: "0.8",
              },
              a.createElement("polygon", {
                fill: "currentColor",
                fillRule: "nonzero",
                transform:
                  "translate(10.000000, 10.000000) rotate(-90.000000) translate(-10.000000, -10.000000) ",
                points:
                  "8.4482158 9.99750228 13.243845 5.20187305 12.3953169 4.35334491 6.75115953 9.99750228 12.4003123 15.6466551 13.2488405 14.798127",
              })
            )
          ),
        N = () =>
          a.createElement(
            "svg",
            {
              width: "20px",
              height: "20px",
              viewBox: "0 0 20 20",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              className: `${b}__chevron`,
            },
            a.createElement(
              "g",
              {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                fillOpacity: "0.8",
              },
              a.createElement("polygon", {
                fill: "currentColor",
                fillRule: "nonzero",
                transform:
                  "translate(10.001873, 9.995000) rotate(90.000000) translate(-10.001873, -9.995000) ",
                points:
                  "8.45008885 9.99250228 13.2457181 5.19687305 12.3971899 4.34834491 6.75303257 9.99250228 12.4021854 15.6416551 13.2507135 14.793127",
              })
            )
          );
      var k = (function () {
        const e = (e) => {
          let {
            appendTo: t,
            backgroundType: n,
            className: r,
            children: o,
            dialogSrLabel: i,
            disabled: s = !1,
            fullWidth: c = !1,
            hierarchy: u = "loud",
            id: f,
            listContent: m,
            menuWidth: h,
            side: v = "bottom",
            size: g = "large",
            srLabel: y,
            ref: E,
          } = e;
          const _ = (0, p.Bi)(f),
            [k, $] = (0, a.useState)(!1);
          (0, d.A)(
            o || y,
            "<DropdownButton> needs some plain text contents for accessibility reasons.\nPlease add an 'srLabel' or 'children' prop."
          );
          const { i18n: I } = (0, p.AH)("@andes/button", {
              en: S,
              "es-AR": C,
              "pt-BR": T,
              "zh-CN": O,
            }),
            R = l()(b, r),
            M = l()(`${b}__menu`, r, { [`${b}__menu--${v}`]: v }),
            P = a.createElement(
              A,
              {
                backgroundType: n,
                className: R,
                hierarchy: u,
                size: g,
                "aria-expanded": k,
                srLabel: y,
                disabled: s,
                fullWidth: c,
                id: _,
                "data-andes-dropdown-button": !0,
                "data-andes-state": k ? "expanded" : "collapsed",
              },
              o && a.createElement(w, null, o),
              k ? a.createElement(N, null) : a.createElement(L, null)
            );
          return a.createElement(
            "div",
            { ref: E },
            a.createElement(x, {
              appendTo: t,
              dialogSrLabel: i,
              placement: v,
              listContent: m,
              onOpen: () => {
                $(!0);
              },
              onClose: () => {
                $(!1);
              },
              popperOptions: {
                modifiers: [
                  {
                    name: "sameWidth",
                    enabled: !h,
                    fn: (e) => {
                      let { state: t } = e;
                      t.styles.popper.width = `${t.rects.reference.width}px`;
                    },
                    phase: "beforeWrite",
                    requires: ["computeStyles"],
                    effect: (e) => {
                      let { state: t } = e;
                      t.elements.popper.style.width = `${t.elements.reference.clientWidth}px`;
                    },
                  },
                ],
              },
              trigger: P,
              namespace: b,
              id: `${_}-menu`,
              className: M,
              srLabel: y || I.pgettext(b, "menú desplegable"),
              width: h || "100%",
            })
          );
        };
        return (e.displayName = "DropdownButton"), e;
      })();
      const $ = "andes-button-split",
        I = () =>
          a.createElement(
            "svg",
            {
              width: "20px",
              height: "20px",
              viewBox: "0 0 20 20",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              className: `${$}__chevron`,
            },
            a.createElement(
              "title",
              null,
              "Abrir menú de opciones / Mostrar opciones"
            ),
            a.createElement(
              "g",
              {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                fillOpacity: "0.8",
              },
              a.createElement("polygon", {
                fill: "currentColor",
                fillRule: "nonzero",
                transform:
                  "translate(10.000000, 10.000000) rotate(-90.000000) translate(-10.000000, -10.000000) ",
                points:
                  "8.4482158 9.99750228 13.243845 5.20187305 12.3953169 4.35334491 6.75115953 9.99750228 12.4003123 15.6466551 13.2488405 14.798127",
              })
            )
          ),
        R = () =>
          a.createElement(
            "svg",
            {
              width: "20px",
              height: "20px",
              viewBox: "0 0 20 20",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              className: `${$}__chevron`,
            },
            a.createElement(
              "title",
              null,
              "Cerrar menú de opciones / Ocultar opciones"
            ),
            a.createElement(
              "g",
              {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                fillOpacity: "0.8",
              },
              a.createElement("polygon", {
                fill: "currentColor",
                fillRule: "nonzero",
                transform:
                  "translate(10.001873, 9.995000) rotate(90.000000) translate(-10.001873, -9.995000) ",
                points:
                  "8.45008885 9.99250228 13.2457181 5.19687305 12.3971899 4.34834491 6.75303257 9.99250228 12.4021854 15.6416551 13.2507135 14.793127",
              })
            )
          ),
        M = {
          top: "top-start",
          bottom: "bottom-start",
          bottomRight: "bottom-start",
          topRight: "top-start",
        };
      var P = (function () {
        const e = (e) => {
          let {
            backgroundType: t = "default",
            children: n,
            className: r,
            dialogSrLabel: o,
            disabled: i,
            hierarchy: s = "loud",
            id: c,
            listContent: u,
            onClick: d,
            side: f = "bottomRight",
            srLabel: m,
            ref: h,
          } = e;
          const g = (0, p.Bi)(c),
            [b, y] = (0, a.useState)(!1),
            { i18n: E } = (0, p.AH)("@andes/button", {
              en: S,
              "es-AR": C,
              "pt-BR": T,
              "zh-CN": O,
            }),
            _ = () => {
              y(!1);
            },
            L = l()($, r),
            N =
              "top" === f || "bottom" === f
                ? {
                    modifiers: [
                      {
                        name: "sameWidth",
                        enabled: !0,
                        fn: (e) => {
                          let { state: t } = e;
                          (t.styles.popper.left = `-${t.elements.reference.parentElement.offsetLeft}px`),
                            (t.styles.popper.width = `${
                              t.elements.reference.parentElement.offsetLeft +
                              t.rects.reference.width
                            }px`);
                        },
                        phase: "beforeWrite",
                        requires: ["computeStyles"],
                        effect: (e) => {
                          let { state: t } = e;
                          t.elements.popper.style.width = `${
                            t.elements.reference.parentElement.offsetLeft +
                            t.elements.reference.clientWidth
                          }px`;
                        },
                      },
                    ],
                  }
                : void 0,
            k = l()(`${$}__menu`, r, { [`${$}__menu--${(0, v.A)(f)}`]: f }),
            P = M[`${f}`];
          return a.createElement(
            "div",
            {
              className: L,
              ref: h,
              "data-andes-split-button": !0,
              "data-andes-state": b ? "expanded" : "collapsed",
            },
            a.createElement(
              A,
              {
                backgroundType: t,
                className: `${$}-text`,
                disabled: i,
                onClick: d,
                hierarchy: s,
                id: `${g}-text`,
              },
              a.createElement(w, null, n)
            ),
            a.createElement(x, {
              placement: P,
              dialogSrLabel: o,
              listContent: u,
              visible: b,
              onClickOutside: _,
              onOpen: () => {
                y(!0);
              },
              onClose: _,
              popperOptions: N,
              trigger: a.createElement(
                A,
                {
                  backgroundType: t,
                  className: `${$}-chevron`,
                  disabled: i,
                  hierarchy: s,
                  "aria-expanded": b,
                  srLabel: m || E.pgettext($, "menú desplegable"),
                  id: `${g}-chevron`,
                  "data-andes-split-button-trigger": !0,
                },
                b ? a.createElement(R, null) : a.createElement(I, null)
              ),
              namespace: $,
              id: `${g}-menu`,
              srLabel: m || E.pgettext($, "menú desplegable"),
              className: k,
              width: "top" === f || "bottom" === f ? "100%" : "max-content",
            })
          );
        };
        return (e.displayName = "SplitButton"), e;
      })();
      const D = [
          "children",
          "className",
          "disabled",
          "hierarchy",
          "id",
          "loading",
          "progressLabel",
          "progressSrAnnouncement",
          "timeout",
          "ref",
        ],
        B = "loading",
        j = "entered",
        H = "finished",
        z = "loud",
        F = { [z]: !0, quiet: !0 },
        U = (function () {
          const e = (e) => {
            let {
                children: t,
                className: n,
                disabled: s,
                hierarchy: c = "loud",
                id: f,
                loading: m = !1,
                progressLabel: h,
                progressSrAnnouncement: v,
                timeout: g = 1e3,
                ref: b,
              } = e,
              y = (0, i.A)(e, D);
            const E = (0, p.Bi)(f),
              w = (0, a.useRef)(!1),
              [_, x] = (0, a.useState)([j]),
              S = F[c] ? c : z;
            (0, d.A)(
              Boolean(h || v),
              "<ProgressButton> needs to announce its loading progress for accessibility reasons.\nPlease use a 'progressLabel' or add 'progressSrAnnouncement' prop."
            ),
              (0, a.useEffect)(() => {
                if (w.current) {
                  if (!m) {
                    x([B, H]);
                    const e = setTimeout(() => {
                      x([H]);
                    }, g);
                    return () => clearTimeout(e);
                  }
                  x([B]);
                }
              }, [m, g]),
              (0, a.useEffect)(() => {
                (w.current = !0), m && x([B]);
              }, []);
            const O = (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return e.reduce(
                  (e, t) => (0, o.A)((0, o.A)({}, e), {}, { [t]: !0 }),
                  t
                );
              })(_, { "andes-button--progress__label": Boolean(h) }),
              C = l()("andes-button--progress", n, O);
            return a.createElement(
              a.Fragment,
              null,
              a.createElement(
                A,
                (0, r.A)(
                  {
                    id: E,
                    hierarchy: S,
                    className: C,
                    ref: b,
                    disabled: s || m,
                  },
                  y,
                  m ? { "data-andes-state": "progress" } : {}
                ),
                h && m
                  ? a.createElement(
                      "span",
                      { className: "andes-button--progress__content" },
                      h
                    )
                  : t
              ),
              a.createElement(
                u.s,
                { "aria-live": "assertive" },
                (v || h) && m ? v || h : ""
              )
            );
          };
          return (e.displayName = "ProgressButton"), e;
        })();
      var V = U;
      const W = [
          "behavior",
          "className",
          "hierarchy",
          "icon",
          "size",
          "srLabel",
          "text",
          "ref",
        ],
        q = "loud",
        G = "andes-button";
      var Y = (function () {
        const e = (e) => {
          const {
              behavior: t = "expanded",
              className: n,
              hierarchy: o = q,
              icon: s,
              size: c = "large",
              srLabel: u,
              text: p,
              ref: h,
            } = e,
            v = (0, i.A)(e, W),
            { getThemedComponentClasses: g, themeHash: b } = (0, f.wR)();
          (0, d.A)(
            p || u,
            "<FloatingActionButton> needs some plain text contents for accessibility reasons.\n      Please add an 'srLabel' or 'text' prop."
          );
          const y = l()(
              `${G}-fab`,
              `${G}-fab--${t}`,
              `${G}-fab--${o}`,
              n,
              { [`${G}-fab--${c}`]: c },
              null == g ? void 0 : g("fab")
            ),
            E = a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "span",
                { className: `${G}--icon-container` },
                (0, a.cloneElement)(s, { "aria-hidden": !0 })
              ),
              p && a.createElement(w, null, p)
            );
          return a.createElement(
            "div",
            (0, r.A)(
              {
                className: y,
                "data-andes-fab-button-container": !0,
                "data-andes-fab-button-hierarchy": o,
                "data-andes-fab-button-size": c,
              },
              b,
              (0, m.i)({
                expanded: "expanded" === t,
                collapsed: "collapsed" === t,
              })
            ),
            a.createElement(
              A,
              (0, r.A)({}, v, {
                "data-andes-fab-button": !0,
                hierarchy: o,
                size: c,
                srLabel: u || p,
                ref: h,
              }),
              E
            )
          );
        };
        return (e.displayName = "FloatingActionButton"), e;
      })();
    },
    52297(e, t, n) {
      n.d(t, { yQ: () => hn, Bv: () => gn });
      var r = n(58168),
        o = n(89379),
        i = n(80045),
        a = n(96540),
        s = n(46942),
        l = n.n(s),
        c = n(69247),
        u = n(95990),
        d = n(40961),
        p = n(88460),
        f = "top",
        m = "bottom",
        h = "right",
        v = "left",
        g = "auto",
        b = [f, m, h, v],
        y = "start",
        E = "end",
        w = "viewport",
        A = "popper",
        _ = b.reduce(function (e, t) {
          return e.concat([t + "-" + y, t + "-" + E]);
        }, []),
        x = [].concat(b, [g]).reduce(function (e, t) {
          return e.concat([t, t + "-" + y, t + "-" + E]);
        }, []),
        S = [
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
      function O(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function C(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function T(e) {
        return e instanceof C(e).Element || e instanceof Element;
      }
      function L(e) {
        return e instanceof C(e).HTMLElement || e instanceof HTMLElement;
      }
      function N(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof C(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var k = {
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
              O(o) &&
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
                  O(r) &&
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
      function $(e) {
        return e.split("-")[0];
      }
      var I = Math.max,
        R = Math.min,
        M = Math.round;
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
      function D() {
        return !/^((?!chrome|android).)*safari/i.test(P());
      }
      function B(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          i = 1;
        t &&
          L(e) &&
          ((o = (e.offsetWidth > 0 && M(r.width) / e.offsetWidth) || 1),
          (i = (e.offsetHeight > 0 && M(r.height) / e.offsetHeight) || 1));
        var a = (T(e) ? C(e) : window).visualViewport,
          s = !D() && n,
          l = (r.left + (s && a ? a.offsetLeft : 0)) / o,
          c = (r.top + (s && a ? a.offsetTop : 0)) / i,
          u = r.width / o,
          d = r.height / i;
        return {
          width: u,
          height: d,
          top: c,
          right: l + u,
          bottom: c + d,
          left: l,
          x: l,
          y: c,
        };
      }
      function j(e) {
        var t = B(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function H(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && N(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function z(e) {
        return C(e).getComputedStyle(e);
      }
      function F(e) {
        return ["table", "td", "th"].indexOf(O(e)) >= 0;
      }
      function U(e) {
        return ((T(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function V(e) {
        return "html" === O(e)
          ? e
          : e.assignedSlot || e.parentNode || (N(e) ? e.host : null) || U(e);
      }
      function W(e) {
        return L(e) && "fixed" !== z(e).position ? e.offsetParent : null;
      }
      function q(e) {
        for (var t = C(e), n = W(e); n && F(n) && "static" === z(n).position; )
          n = W(n);
        return n &&
          ("html" === O(n) || ("body" === O(n) && "static" === z(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(P());
                if (/Trident/i.test(P()) && L(e) && "fixed" === z(e).position)
                  return null;
                var n = V(e);
                for (
                  N(n) && (n = n.host);
                  L(n) && ["html", "body"].indexOf(O(n)) < 0;

                ) {
                  var r = z(n);
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
      function G(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function Y(e, t, n) {
        return I(e, R(t, n));
      }
      function K(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function X(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      var Q = {
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
            s = $(n.placement),
            l = G(s),
            c = [v, h].indexOf(s) >= 0 ? "height" : "width";
          if (i && a) {
            var u = (function (e, t) {
                return K(
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
                    : X(e, b)
                );
              })(o.padding, n),
              d = j(i),
              p = "y" === l ? f : v,
              g = "y" === l ? m : h,
              y =
                n.rects.reference[c] +
                n.rects.reference[l] -
                a[l] -
                n.rects.popper[c],
              E = a[l] - n.rects.reference[l],
              w = q(i),
              A = w
                ? "y" === l
                  ? w.clientHeight || 0
                  : w.clientWidth || 0
                : 0,
              _ = y / 2 - E / 2,
              x = u[p],
              S = A - d[c] - u[g],
              O = A / 2 - d[c] / 2 + _,
              C = Y(x, O, S),
              T = l;
            n.modifiersData[r] =
              (((t = {})[T] = C), (t.centerOffset = C - O), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" != typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            H(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Z(e) {
        return e.split("-")[1];
      }
      var J = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function ee(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          o = e.placement,
          i = e.variation,
          a = e.offsets,
          s = e.position,
          l = e.gpuAcceleration,
          c = e.adaptive,
          u = e.roundOffsets,
          d = e.isFixed,
          p = a.x,
          g = void 0 === p ? 0 : p,
          b = a.y,
          y = void 0 === b ? 0 : b,
          w = "function" == typeof u ? u({ x: g, y }) : { x: g, y };
        (g = w.x), (y = w.y);
        var A = a.hasOwnProperty("x"),
          _ = a.hasOwnProperty("y"),
          x = v,
          S = f,
          O = window;
        if (c) {
          var T = q(n),
            L = "clientHeight",
            N = "clientWidth";
          if (
            (T === C(n) &&
              "static" !== z((T = U(n))).position &&
              "absolute" === s &&
              ((L = "scrollHeight"), (N = "scrollWidth")),
            o === f || ((o === v || o === h) && i === E))
          )
            (S = m),
              (y -=
                (d && T === O && O.visualViewport
                  ? O.visualViewport.height
                  : T[L]) - r.height),
              (y *= l ? 1 : -1);
          if (o === v || ((o === f || o === m) && i === E))
            (x = h),
              (g -=
                (d && T === O && O.visualViewport
                  ? O.visualViewport.width
                  : T[N]) - r.width),
              (g *= l ? 1 : -1);
        }
        var k,
          $ = Object.assign({ position: s }, c && J),
          I =
            !0 === u
              ? (function (e, t) {
                  var n = e.x,
                    r = e.y,
                    o = t.devicePixelRatio || 1;
                  return { x: M(n * o) / o || 0, y: M(r * o) / o || 0 };
                })({ x: g, y }, C(n))
              : { x: g, y };
        return (
          (g = I.x),
          (y = I.y),
          l
            ? Object.assign(
                {},
                $,
                (((k = {})[S] = _ ? "0" : ""),
                (k[x] = A ? "0" : ""),
                (k.transform =
                  (O.devicePixelRatio || 1) <= 1
                    ? "translate(" + g + "px, " + y + "px)"
                    : "translate3d(" + g + "px, " + y + "px, 0)"),
                k)
              )
            : Object.assign(
                {},
                $,
                (((t = {})[S] = _ ? y + "px" : ""),
                (t[x] = A ? g + "px" : ""),
                (t.transform = ""),
                t)
              )
        );
      }
      var te = { passive: !0 };
      var ne = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function re(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return ne[e];
        });
      }
      var oe = { start: "end", end: "start" };
      function ie(e) {
        return e.replace(/start|end/g, function (e) {
          return oe[e];
        });
      }
      function ae(e) {
        var t = C(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function se(e) {
        return B(U(e)).left + ae(e).scrollLeft;
      }
      function le(e) {
        var t = z(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function ce(e) {
        return ["html", "body", "#document"].indexOf(O(e)) >= 0
          ? e.ownerDocument.body
          : L(e) && le(e)
          ? e
          : ce(V(e));
      }
      function ue(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = ce(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = C(r),
          a = o ? [i].concat(i.visualViewport || [], le(r) ? r : []) : r,
          s = t.concat(a);
        return o ? s : s.concat(ue(V(a)));
      }
      function de(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function pe(e, t, n) {
        return t === w
          ? de(
              (function (e, t) {
                var n = C(e),
                  r = U(e),
                  o = n.visualViewport,
                  i = r.clientWidth,
                  a = r.clientHeight,
                  s = 0,
                  l = 0;
                if (o) {
                  (i = o.width), (a = o.height);
                  var c = D();
                  (c || (!c && "fixed" === t)) &&
                    ((s = o.offsetLeft), (l = o.offsetTop));
                }
                return { width: i, height: a, x: s + se(e), y: l };
              })(e, n)
            )
          : T(t)
          ? (function (e, t) {
              var n = B(e, !1, "fixed" === t);
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
          : de(
              (function (e) {
                var t,
                  n = U(e),
                  r = ae(e),
                  o = null == (t = e.ownerDocument) ? void 0 : t.body,
                  i = I(
                    n.scrollWidth,
                    n.clientWidth,
                    o ? o.scrollWidth : 0,
                    o ? o.clientWidth : 0
                  ),
                  a = I(
                    n.scrollHeight,
                    n.clientHeight,
                    o ? o.scrollHeight : 0,
                    o ? o.clientHeight : 0
                  ),
                  s = -r.scrollLeft + se(e),
                  l = -r.scrollTop;
                return (
                  "rtl" === z(o || n).direction &&
                    (s += I(n.clientWidth, o ? o.clientWidth : 0) - i),
                  { width: i, height: a, x: s, y: l }
                );
              })(U(e))
            );
      }
      function fe(e, t, n, r) {
        var o =
            "clippingParents" === t
              ? (function (e) {
                  var t = ue(V(e)),
                    n =
                      ["absolute", "fixed"].indexOf(z(e).position) >= 0 && L(e)
                        ? q(e)
                        : e;
                  return T(n)
                    ? t.filter(function (e) {
                        return T(e) && H(e, n) && "body" !== O(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          i = [].concat(o, [n]),
          a = i[0],
          s = i.reduce(function (t, n) {
            var o = pe(e, n, r);
            return (
              (t.top = I(o.top, t.top)),
              (t.right = R(o.right, t.right)),
              (t.bottom = R(o.bottom, t.bottom)),
              (t.left = I(o.left, t.left)),
              t
            );
          }, pe(e, a, r));
        return (
          (s.width = s.right - s.left),
          (s.height = s.bottom - s.top),
          (s.x = s.left),
          (s.y = s.top),
          s
        );
      }
      function me(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? $(o) : null,
          a = o ? Z(o) : null,
          s = n.x + n.width / 2 - r.width / 2,
          l = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case f:
            t = { x: s, y: n.y - r.height };
            break;
          case m:
            t = { x: s, y: n.y + n.height };
            break;
          case h:
            t = { x: n.x + n.width, y: l };
            break;
          case v:
            t = { x: n.x - r.width, y: l };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var c = i ? G(i) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (a) {
            case y:
              t[c] = t[c] - (n[u] / 2 - r[u] / 2);
              break;
            case E:
              t[c] = t[c] + (n[u] / 2 - r[u] / 2);
          }
        }
        return t;
      }
      function he(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          o = void 0 === r ? e.placement : r,
          i = n.strategy,
          a = void 0 === i ? e.strategy : i,
          s = n.boundary,
          l = void 0 === s ? "clippingParents" : s,
          c = n.rootBoundary,
          u = void 0 === c ? w : c,
          d = n.elementContext,
          p = void 0 === d ? A : d,
          v = n.altBoundary,
          g = void 0 !== v && v,
          y = n.padding,
          E = void 0 === y ? 0 : y,
          _ = K("number" != typeof E ? E : X(E, b)),
          x = p === A ? "reference" : A,
          S = e.rects.popper,
          O = e.elements[g ? x : p],
          C = fe(T(O) ? O : O.contextElement || U(e.elements.popper), l, u, a),
          L = B(e.elements.reference),
          N = me({
            reference: L,
            element: S,
            strategy: "absolute",
            placement: o,
          }),
          k = de(Object.assign({}, S, N)),
          $ = p === A ? k : L,
          I = {
            top: C.top - $.top + _.top,
            bottom: $.bottom - C.bottom + _.bottom,
            left: C.left - $.left + _.left,
            right: $.right - C.right + _.right,
          },
          R = e.modifiersData.offset;
        if (p === A && R) {
          var M = R[o];
          Object.keys(I).forEach(function (e) {
            var t = [h, m].indexOf(e) >= 0 ? 1 : -1,
              n = [f, m].indexOf(e) >= 0 ? "y" : "x";
            I[e] += M[n] * t;
          });
        }
        return I;
      }
      function ve(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          o = n.boundary,
          i = n.rootBoundary,
          a = n.padding,
          s = n.flipVariations,
          l = n.allowedAutoPlacements,
          c = void 0 === l ? x : l,
          u = Z(r),
          d = u
            ? s
              ? _
              : _.filter(function (e) {
                  return Z(e) === u;
                })
            : b,
          p = d.filter(function (e) {
            return c.indexOf(e) >= 0;
          });
        0 === p.length && (p = d);
        var f = p.reduce(function (t, n) {
          return (
            (t[n] = he(e, {
              placement: n,
              boundary: o,
              rootBoundary: i,
              padding: a,
            })[$(n)]),
            t
          );
        }, {});
        return Object.keys(f).sort(function (e, t) {
          return f[e] - f[t];
        });
      }
      var ge = {
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
                l = n.fallbackPlacements,
                c = n.padding,
                u = n.boundary,
                d = n.rootBoundary,
                p = n.altBoundary,
                b = n.flipVariations,
                E = void 0 === b || b,
                w = n.allowedAutoPlacements,
                A = t.options.placement,
                _ = $(A),
                x =
                  l ||
                  (_ === A || !E
                    ? [re(A)]
                    : (function (e) {
                        if ($(e) === g) return [];
                        var t = re(e);
                        return [ie(e), t, ie(t)];
                      })(A)),
                S = [A].concat(x).reduce(function (e, n) {
                  return e.concat(
                    $(n) === g
                      ? ve(t, {
                          placement: n,
                          boundary: u,
                          rootBoundary: d,
                          padding: c,
                          flipVariations: E,
                          allowedAutoPlacements: w,
                        })
                      : n
                  );
                }, []),
                O = t.rects.reference,
                C = t.rects.popper,
                T = new Map(),
                L = !0,
                N = S[0],
                k = 0;
              k < S.length;
              k++
            ) {
              var I = S[k],
                R = $(I),
                M = Z(I) === y,
                P = [f, m].indexOf(R) >= 0,
                D = P ? "width" : "height",
                B = he(t, {
                  placement: I,
                  boundary: u,
                  rootBoundary: d,
                  altBoundary: p,
                  padding: c,
                }),
                j = P ? (M ? h : v) : M ? m : f;
              O[D] > C[D] && (j = re(j));
              var H = re(j),
                z = [];
              if (
                (i && z.push(B[R] <= 0),
                s && z.push(B[j] <= 0, B[H] <= 0),
                z.every(function (e) {
                  return e;
                }))
              ) {
                (N = I), (L = !1);
                break;
              }
              T.set(I, z);
            }
            if (L)
              for (
                var F = function (e) {
                    var t = S.find(function (t) {
                      var n = T.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (N = t), "break";
                  },
                  U = E ? 3 : 1;
                U > 0;
                U--
              ) {
                if ("break" === F(U)) break;
              }
            t.placement !== N &&
              ((t.modifiersData[r]._skip = !0),
              (t.placement = N),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function be(e, t, n) {
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
      function ye(e) {
        return [f, h, m, v].some(function (t) {
          return e[t] >= 0;
        });
      }
      var Ee = {
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
            a = x.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = $(e),
                    o = [v, f].indexOf(r) >= 0 ? -1 : 1,
                    i =
                      "function" == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    a = i[0],
                    s = i[1];
                  return (
                    (a = a || 0),
                    (s = (s || 0) * o),
                    [v, h].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
                  );
                })(n, t.rects, i)),
                e
              );
            }, {}),
            s = a[t.placement],
            l = s.x,
            c = s.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += l),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[r] = a);
        },
      };
      var we = {
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
            l = n.boundary,
            c = n.rootBoundary,
            u = n.altBoundary,
            d = n.padding,
            p = n.tether,
            g = void 0 === p || p,
            b = n.tetherOffset,
            E = void 0 === b ? 0 : b,
            w = he(t, {
              boundary: l,
              rootBoundary: c,
              padding: d,
              altBoundary: u,
            }),
            A = $(t.placement),
            _ = Z(t.placement),
            x = !_,
            S = G(A),
            O = "x" === S ? "y" : "x",
            C = t.modifiersData.popperOffsets,
            T = t.rects.reference,
            L = t.rects.popper,
            N =
              "function" == typeof E
                ? E(Object.assign({}, t.rects, { placement: t.placement }))
                : E,
            k =
              "number" == typeof N
                ? { mainAxis: N, altAxis: N }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, N),
            M = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            P = { x: 0, y: 0 };
          if (C) {
            if (i) {
              var D,
                B = "y" === S ? f : v,
                H = "y" === S ? m : h,
                z = "y" === S ? "height" : "width",
                F = C[S],
                U = F + w[B],
                V = F - w[H],
                W = g ? -L[z] / 2 : 0,
                K = _ === y ? T[z] : L[z],
                X = _ === y ? -L[z] : -T[z],
                Q = t.elements.arrow,
                J = g && Q ? j(Q) : { width: 0, height: 0 },
                ee = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                te = ee[B],
                ne = ee[H],
                re = Y(0, T[z], J[z]),
                oe = x
                  ? T[z] / 2 - W - re - te - k.mainAxis
                  : K - re - te - k.mainAxis,
                ie = x
                  ? -T[z] / 2 + W + re + ne + k.mainAxis
                  : X + re + ne + k.mainAxis,
                ae = t.elements.arrow && q(t.elements.arrow),
                se = ae
                  ? "y" === S
                    ? ae.clientTop || 0
                    : ae.clientLeft || 0
                  : 0,
                le = null != (D = null == M ? void 0 : M[S]) ? D : 0,
                ce = F + ie - le,
                ue = Y(g ? R(U, F + oe - le - se) : U, F, g ? I(V, ce) : V);
              (C[S] = ue), (P[S] = ue - F);
            }
            if (s) {
              var de,
                pe = "x" === S ? f : v,
                fe = "x" === S ? m : h,
                me = C[O],
                ve = "y" === O ? "height" : "width",
                ge = me + w[pe],
                be = me - w[fe],
                ye = -1 !== [f, v].indexOf(A),
                Ee = null != (de = null == M ? void 0 : M[O]) ? de : 0,
                we = ye ? ge : me - T[ve] - L[ve] - Ee + k.altAxis,
                Ae = ye ? me + T[ve] + L[ve] - Ee - k.altAxis : be,
                _e =
                  g && ye
                    ? (function (e, t, n) {
                        var r = Y(e, t, n);
                        return r > n ? n : r;
                      })(we, me, Ae)
                    : Y(g ? we : ge, me, g ? Ae : be);
              (C[O] = _e), (P[O] = _e - me);
            }
            t.modifiersData[r] = P;
          }
        },
        requiresIfExists: ["offset"],
      };
      function Ae(e, t, n) {
        void 0 === n && (n = !1);
        var r,
          o,
          i = L(t),
          a =
            L(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = M(t.width) / e.offsetWidth || 1,
                r = M(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          s = U(t),
          l = B(e, a, n),
          c = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 };
        return (
          (i || (!i && !n)) &&
            (("body" !== O(t) || le(s)) &&
              (c =
                (r = t) !== C(r) && L(r)
                  ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
                  : ae(r)),
            L(t)
              ? (((u = B(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
              : s && (u.x = se(s))),
          {
            x: l.left + c.scrollLeft - u.x,
            y: l.top + c.scrollTop - u.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function _e(e) {
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
      var xe = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Se() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function Oe(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          i = void 0 === o ? xe : o;
        return function (e, t, n) {
          void 0 === n && (n = i);
          var o,
            a,
            s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, xe, i),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            u = {
              state: s,
              setOptions: function (n) {
                var o = "function" == typeof n ? n(s.options) : n;
                d(),
                  (s.options = Object.assign({}, i, s.options, o)),
                  (s.scrollParents = {
                    reference: T(e)
                      ? ue(e)
                      : e.contextElement
                      ? ue(e.contextElement)
                      : [],
                    popper: ue(t),
                  });
                var a,
                  c,
                  p = (function (e) {
                    var t = _e(e);
                    return S.reduce(function (e, n) {
                      return e.concat(
                        t.filter(function (e) {
                          return e.phase === n;
                        })
                      );
                    }, []);
                  })(
                    ((a = [].concat(r, s.options.modifiers)),
                    (c = a.reduce(function (e, t) {
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
                    Object.keys(c).map(function (e) {
                      return c[e];
                    }))
                  );
                return (
                  (s.orderedModifiers = p.filter(function (e) {
                    return e.enabled;
                  })),
                  s.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      o = e.effect;
                    if ("function" == typeof o) {
                      var i = o({ state: s, name: t, instance: u, options: r }),
                        a = function () {};
                      l.push(i || a);
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = s.elements,
                    t = e.reference,
                    n = e.popper;
                  if (Se(t, n)) {
                    (s.rects = {
                      reference: Ae(t, q(n), "fixed" === s.options.strategy),
                      popper: j(n),
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
                          l = void 0 === a ? {} : a,
                          d = o.name;
                        "function" == typeof i &&
                          (s =
                            i({ state: s, options: l, name: d, instance: u }) ||
                            s);
                      } else (s.reset = !1), (r = -1);
                  }
                }
              },
              update:
                ((o = function () {
                  return new Promise(function (e) {
                    u.forceUpdate(), e(s);
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
                d(), (c = !0);
              },
            };
          if (!Se(e, t)) return u;
          function d() {
            l.forEach(function (e) {
              return e();
            }),
              (l = []);
          }
          return (
            u.setOptions(n).then(function (e) {
              !c && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var Ce = Oe({
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
                  l = C(t.elements.popper),
                  c = [].concat(
                    t.scrollParents.reference,
                    t.scrollParents.popper
                  );
                return (
                  i &&
                    c.forEach(function (e) {
                      e.addEventListener("scroll", n.update, te);
                    }),
                  s && l.addEventListener("resize", n.update, te),
                  function () {
                    i &&
                      c.forEach(function (e) {
                        e.removeEventListener("scroll", n.update, te);
                      }),
                      s && l.removeEventListener("resize", n.update, te);
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
                t.modifiersData[n] = me({
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
                  l = void 0 === s || s,
                  c = {
                    placement: $(t.placement),
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
                    ee(
                      Object.assign({}, c, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: a,
                        roundOffsets: l,
                      })
                    )
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      ee(
                        Object.assign({}, c, {
                          offsets: t.modifiersData.arrow,
                          position: "absolute",
                          adaptive: !1,
                          roundOffsets: l,
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
            k,
            Ee,
            ge,
            we,
            Q,
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
                  a = he(t, { elementContext: "reference" }),
                  s = he(t, { altBoundary: !0 }),
                  l = be(a, r),
                  c = be(s, o, i),
                  u = ye(l),
                  d = ye(c);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: l,
                  popperEscapeOffsets: c,
                  isReferenceHidden: u,
                  hasPopperEscaped: d,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": u,
                      "data-popper-escaped": d,
                    }
                  ));
              },
            },
          ],
        }),
        Te = { passive: !0, capture: !0 },
        Le = function () {
          return document.body;
        };
      function Ne(e, t, n) {
        if (Array.isArray(e)) {
          var r = e[t];
          return r ?? (Array.isArray(n) ? n[t] : n);
        }
        return e;
      }
      function ke(e, t) {
        var n = {}.toString.call(e);
        return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
      }
      function $e(e, t) {
        return "function" == typeof e ? e.apply(void 0, t) : e;
      }
      function Ie(e, t) {
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
      function Re(e) {
        return [].concat(e);
      }
      function Me(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function Pe(e) {
        return [].slice.call(e);
      }
      function De(e) {
        return Object.keys(e).reduce(function (t, n) {
          return void 0 !== e[n] && (t[n] = e[n]), t;
        }, {});
      }
      function Be(e) {
        return ["Element", "Fragment"].some(function (t) {
          return ke(e, t);
        });
      }
      function je(e) {
        return Be(e)
          ? [e]
          : (function (e) {
              return ke(e, "NodeList");
            })(e)
          ? Pe(e)
          : Array.isArray(e)
          ? e
          : Pe(document.querySelectorAll(e));
      }
      function He(e, t) {
        e.forEach(function (e) {
          e && (e.style.transitionDuration = t + "ms");
        });
      }
      function ze(e, t) {
        e.forEach(function (e) {
          e && e.setAttribute("data-state", t);
        });
      }
      function Fe(e, t, n) {
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
      var Ve = { isTouch: !1 },
        We = 0;
      function qe() {
        Ve.isTouch ||
          ((Ve.isTouch = !0),
          window.performance && document.addEventListener("mousemove", Ge));
      }
      function Ge() {
        var e = performance.now();
        e - We < 20 &&
          ((Ve.isTouch = !1), document.removeEventListener("mousemove", Ge)),
          (We = e);
      }
      function Ye() {
        var e,
          t = document.activeElement;
        if ((e = t) && e._tippy && e._tippy.reference === e) {
          var n = t._tippy;
          t.blur && !n.state.isVisible && t.blur();
        }
      }
      var Ke =
        !!("undefined" != typeof window && "undefined" != typeof document) &&
        !!window.msCrypto;
      var Xe = {
          animateFill: !1,
          followCursor: !1,
          inlinePositioning: !1,
          sticky: !1,
        },
        Qe = Object.assign(
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
          Xe,
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
        Ze = Object.keys(Qe);
      function Je(e) {
        var t = (e.plugins || []).reduce(function (t, n) {
          var r,
            o = n.name,
            i = n.defaultValue;
          o && (t[o] = void 0 !== e[o] ? e[o] : null != (r = Qe[o]) ? r : i);
          return t;
        }, {});
        return Object.assign({}, e, t);
      }
      function et(e, t) {
        var n = Object.assign(
          {},
          t,
          { content: $e(t.content, [e]) },
          t.ignoreAttributes
            ? {}
            : (function (e, t) {
                return (
                  t
                    ? Object.keys(Je(Object.assign({}, Qe, { plugins: t })))
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
          (n.aria = Object.assign({}, Qe.aria, n.aria)),
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
      function tt(e) {
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
      var nt = 1,
        rt = [],
        ot = [];
      function it(e, t) {
        var n,
          r,
          o,
          i,
          a,
          s,
          l,
          c,
          u = et(e, Object.assign({}, Qe, Je(De(t)))),
          d = !1,
          p = !1,
          f = !1,
          m = !1,
          h = [],
          v = Ie(G, u.interactiveDebounce),
          g = nt++,
          b = (c = u.plugins).filter(function (e, t) {
            return c.indexOf(e) === t;
          }),
          y = {
            id: g,
            reference: e,
            popper: document.createElement("div"),
            popperInstance: null,
            props: u,
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
              I("onBeforeUpdate", [y, t]), W();
              var n = y.props,
                r = et(
                  e,
                  Object.assign({}, n, De(t), { ignoreAttributes: !0 })
                );
              (y.props = r),
                V(),
                n.interactiveDebounce !== r.interactiveDebounce &&
                  (P(), (v = Ie(G, r.interactiveDebounce)));
              n.triggerTarget && !r.triggerTarget
                ? Re(n.triggerTarget).forEach(function (e) {
                    e.removeAttribute("aria-expanded");
                  })
                : r.triggerTarget && e.removeAttribute("aria-expanded");
              M(), $(), A && A(n, r);
              y.popperInstance &&
                (Q(),
                J().forEach(function (e) {
                  requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
                }));
              I("onAfterUpdate", [y, t]);
            },
            setContent: function (e) {
              y.setProps({ content: e });
            },
            show: function () {
              0;
              var e = y.state.isVisible,
                t = y.state.isDestroyed,
                n = !y.state.isEnabled,
                r = Ve.isTouch && !y.props.touch,
                o = Ne(y.props.duration, 0, Qe.duration);
              if (e || t || n || r) return;
              if (T().hasAttribute("disabled")) return;
              if ((I("onShow", [y], !1), !1 === y.props.onShow(y))) return;
              (y.state.isVisible = !0), C() && (w.style.visibility = "visible");
              $(), H(), y.state.isMounted || (w.style.transition = "none");
              if (C()) {
                var i = N();
                He([i.box, i.content], 0);
              }
              (s = function () {
                var e;
                if (y.state.isVisible && !m) {
                  if (
                    ((m = !0),
                    w.offsetHeight,
                    (w.style.transition = y.props.moveTransition),
                    C() && y.props.animation)
                  ) {
                    var t = N(),
                      n = t.box,
                      r = t.content;
                    He([n, r], o), ze([n, r], "visible");
                  }
                  R(),
                    M(),
                    Me(ot, y),
                    null == (e = y.popperInstance) || e.forceUpdate(),
                    I("onMount", [y]),
                    y.props.animation &&
                      C() &&
                      (function (e, t) {
                        F(e, t);
                      })(o, function () {
                        (y.state.isShown = !0), I("onShown", [y]);
                      });
                }
              }),
                (function () {
                  var e,
                    t = y.props.appendTo,
                    n = T();
                  e =
                    (y.props.interactive && t === Le) || "parent" === t
                      ? n.parentNode
                      : $e(t, [n]);
                  e.contains(w) || e.appendChild(w);
                  (y.state.isMounted = !0), Q(), !1;
                })();
            },
            hide: function () {
              0;
              var e = !y.state.isVisible,
                t = y.state.isDestroyed,
                n = !y.state.isEnabled,
                r = Ne(y.props.duration, 1, Qe.duration);
              if (e || t || n) return;
              if ((I("onHide", [y], !1), !1 === y.props.onHide(y))) return;
              (y.state.isVisible = !1),
                (y.state.isShown = !1),
                (m = !1),
                (d = !1),
                C() && (w.style.visibility = "hidden");
              if ((P(), z(), $(!0), C())) {
                var o = N(),
                  i = o.box,
                  a = o.content;
                y.props.animation && (He([i, a], r), ze([i, a], "hidden"));
              }
              R(),
                M(),
                y.props.animation
                  ? C() &&
                    (function (e, t) {
                      F(e, function () {
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
              L().addEventListener("mousemove", v), Me(rt, v), v(e);
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
              Z(),
                J().forEach(function (e) {
                  e._tippy.unmount();
                }),
                w.parentNode && w.parentNode.removeChild(w);
              (ot = ot.filter(function (e) {
                return e !== y;
              })),
                (y.state.isMounted = !1),
                I("onHidden", [y]);
            },
            destroy: function () {
              0;
              if (y.state.isDestroyed) return;
              y.clearDelayTimeouts(),
                y.unmount(),
                W(),
                delete e._tippy,
                (y.state.isDestroyed = !0),
                I("onDestroy", [y]);
            },
          };
        if (!u.render) return y;
        var E = u.render(y),
          w = E.popper,
          A = E.onUpdate;
        w.setAttribute("data-tippy-root", ""),
          (w.id = "tippy-" + y.id),
          (y.popper = w),
          (e._tippy = y),
          (w._tippy = y);
        var _ = b.map(function (e) {
            return e.fn(y);
          }),
          x = e.hasAttribute("aria-expanded");
        return (
          V(),
          M(),
          $(),
          I("onCreate", [y]),
          u.showOnCreate && ee(),
          w.addEventListener("mouseenter", function () {
            y.props.interactive && y.state.isVisible && y.clearDelayTimeouts();
          }),
          w.addEventListener("mouseleave", function () {
            y.props.interactive &&
              y.props.trigger.indexOf("mouseenter") >= 0 &&
              L().addEventListener("mousemove", v);
          }),
          y
        );
        function S() {
          var e = y.props.touch;
          return Array.isArray(e) ? e : [e, 0];
        }
        function O() {
          return "hold" === S()[0];
        }
        function C() {
          var e;
          return !(null == (e = y.props.render) || !e.$$tippy);
        }
        function T() {
          return l || e;
        }
        function L() {
          var e,
            t,
            n = T().parentNode;
          return n
            ? null != (t = Re(n)[0]) && null != (e = t.ownerDocument) && e.body
              ? t.ownerDocument
              : document
            : document;
        }
        function N() {
          return tt(w);
        }
        function k(e) {
          return (y.state.isMounted && !y.state.isVisible) ||
            Ve.isTouch ||
            (i && "focus" === i.type)
            ? 0
            : Ne(y.props.delay, e ? 0 : 1, Qe.delay);
        }
        function $(e) {
          void 0 === e && (e = !1),
            (w.style.pointerEvents = y.props.interactive && !e ? "" : "none"),
            (w.style.zIndex = "" + y.props.zIndex);
        }
        function I(e, t, n) {
          var r;
          (void 0 === n && (n = !0),
          _.forEach(function (n) {
            n[e] && n[e].apply(n, t);
          }),
          n) && (r = y.props)[e].apply(r, t);
        }
        function R() {
          var t = y.props.aria;
          if (t.content) {
            var n = "aria-" + t.content,
              r = w.id;
            Re(y.props.triggerTarget || e).forEach(function (e) {
              var t = e.getAttribute(n);
              if (y.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);
              else {
                var o = t && t.replace(r, "").trim();
                o ? e.setAttribute(n, o) : e.removeAttribute(n);
              }
            });
          }
        }
        function M() {
          !x &&
            y.props.aria.expanded &&
            Re(y.props.triggerTarget || e).forEach(function (e) {
              y.props.interactive
                ? e.setAttribute(
                    "aria-expanded",
                    y.state.isVisible && e === T() ? "true" : "false"
                  )
                : e.removeAttribute("aria-expanded");
            });
        }
        function P() {
          L().removeEventListener("mousemove", v),
            (rt = rt.filter(function (e) {
              return e !== v;
            }));
        }
        function D(t) {
          if (!Ve.isTouch || (!f && "mousedown" !== t.type)) {
            var n = (t.composedPath && t.composedPath()[0]) || t.target;
            if (!y.props.interactive || !Ue(w, n)) {
              if (
                Re(y.props.triggerTarget || e).some(function (e) {
                  return Ue(e, n);
                })
              ) {
                if (Ve.isTouch) return;
                if (y.state.isVisible && y.props.trigger.indexOf("click") >= 0)
                  return;
              } else I("onClickOutside", [y, t]);
              !0 === y.props.hideOnClick &&
                (y.clearDelayTimeouts(),
                y.hide(),
                (p = !0),
                setTimeout(function () {
                  p = !1;
                }),
                y.state.isMounted || z());
            }
          }
        }
        function B() {
          f = !0;
        }
        function j() {
          f = !1;
        }
        function H() {
          var e = L();
          e.addEventListener("mousedown", D, !0),
            e.addEventListener("touchend", D, Te),
            e.addEventListener("touchstart", j, Te),
            e.addEventListener("touchmove", B, Te);
        }
        function z() {
          var e = L();
          e.removeEventListener("mousedown", D, !0),
            e.removeEventListener("touchend", D, Te),
            e.removeEventListener("touchstart", j, Te),
            e.removeEventListener("touchmove", B, Te);
        }
        function F(e, t) {
          var n = N().box;
          function r(e) {
            e.target === n && (Fe(n, "remove", r), t());
          }
          if (0 === e) return t();
          Fe(n, "remove", a), Fe(n, "add", r), (a = r);
        }
        function U(t, n, r) {
          void 0 === r && (r = !1),
            Re(y.props.triggerTarget || e).forEach(function (e) {
              e.addEventListener(t, n, r),
                h.push({ node: e, eventType: t, handler: n, options: r });
            });
        }
        function V() {
          var e;
          O() &&
            (U("touchstart", q, { passive: !0 }),
            U("touchend", Y, { passive: !0 })),
            ((e = y.props.trigger), e.split(/\s+/).filter(Boolean)).forEach(
              function (e) {
                if ("manual" !== e)
                  switch ((U(e, q), e)) {
                    case "mouseenter":
                      U("mouseleave", Y);
                      break;
                    case "focus":
                      U(Ke ? "focusout" : "blur", K);
                      break;
                    case "focusin":
                      U("focusout", K);
                  }
              }
            );
        }
        function W() {
          h.forEach(function (e) {
            var t = e.node,
              n = e.eventType,
              r = e.handler,
              o = e.options;
            t.removeEventListener(n, r, o);
          }),
            (h = []);
        }
        function q(e) {
          var t,
            n = !1;
          if (y.state.isEnabled && !X(e) && !p) {
            var r = "focus" === (null == (t = i) ? void 0 : t.type);
            (i = e),
              (l = e.currentTarget),
              M(),
              !y.state.isVisible &&
                ke(e, "MouseEvent") &&
                rt.forEach(function (t) {
                  return t(e);
                }),
              "click" === e.type &&
              (y.props.trigger.indexOf("mouseenter") < 0 || d) &&
              !1 !== y.props.hideOnClick &&
              y.state.isVisible
                ? (n = !0)
                : ee(e),
              "click" === e.type && (d = !n),
              n && !r && te(e);
          }
        }
        function G(e) {
          var t = e.target,
            n = T().contains(t) || w.contains(t);
          if ("mousemove" !== e.type || !n) {
            var r = J()
              .concat(w)
              .map(function (e) {
                var t,
                  n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                return n
                  ? {
                      popperRect: e.getBoundingClientRect(),
                      popperState: n,
                      props: u,
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
                var l = "bottom" === a ? s.top.y : 0,
                  c = "top" === a ? s.bottom.y : 0,
                  u = "right" === a ? s.left.x : 0,
                  d = "left" === a ? s.right.x : 0,
                  p = t.top - r + l > i,
                  f = r - t.bottom - c > i,
                  m = t.left - n + u > i,
                  h = n - t.right - d > i;
                return p || f || m || h;
              });
            })(r, e) && (P(), te(e));
          }
        }
        function Y(e) {
          X(e) ||
            (y.props.trigger.indexOf("click") >= 0 && d) ||
            (y.props.interactive ? y.hideWithInteractivity(e) : te(e));
        }
        function K(e) {
          (y.props.trigger.indexOf("focusin") < 0 && e.target !== T()) ||
            (y.props.interactive &&
              e.relatedTarget &&
              w.contains(e.relatedTarget)) ||
            te(e);
        }
        function X(e) {
          return !!Ve.isTouch && O() !== e.type.indexOf("touch") >= 0;
        }
        function Q() {
          Z();
          var t = y.props,
            n = t.popperOptions,
            r = t.placement,
            o = t.offset,
            i = t.getReferenceClientRect,
            a = t.moveTransition,
            l = C() ? tt(w).arrow : null,
            c = i
              ? {
                  getBoundingClientRect: i,
                  contextElement: i.contextElement || T(),
                }
              : e,
            u = {
              name: "$$tippy",
              enabled: !0,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function (e) {
                var t = e.state;
                if (C()) {
                  var n = N().box;
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
            d = [
              { name: "offset", options: { offset: o } },
              {
                name: "preventOverflow",
                options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
              },
              { name: "flip", options: { padding: 5 } },
              { name: "computeStyles", options: { adaptive: !a } },
              u,
            ];
          C() &&
            l &&
            d.push({ name: "arrow", options: { element: l, padding: 3 } }),
            d.push.apply(d, (null == n ? void 0 : n.modifiers) || []),
            (y.popperInstance = Ce(
              c,
              w,
              Object.assign({}, n, {
                placement: r,
                onFirstUpdate: s,
                modifiers: d,
              })
            ));
        }
        function Z() {
          y.popperInstance &&
            (y.popperInstance.destroy(), (y.popperInstance = null));
        }
        function J() {
          return Pe(w.querySelectorAll("[data-tippy-root]"));
        }
        function ee(e) {
          y.clearDelayTimeouts(), e && I("onTrigger", [y, e]), H();
          var t = k(!0),
            r = S(),
            o = r[0],
            i = r[1];
          Ve.isTouch && "hold" === o && i && (t = i),
            t
              ? (n = setTimeout(function () {
                  y.show();
                }, t))
              : y.show();
        }
        function te(e) {
          if (
            (y.clearDelayTimeouts(),
            I("onUntrigger", [y, e]),
            y.state.isVisible)
          ) {
            if (
              !(
                y.props.trigger.indexOf("mouseenter") >= 0 &&
                y.props.trigger.indexOf("click") >= 0 &&
                ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
                d
              )
            ) {
              var t = k(!1);
              t
                ? (r = setTimeout(function () {
                    y.state.isVisible && y.hide();
                  }, t))
                : (o = requestAnimationFrame(function () {
                    y.hide();
                  }));
            }
          } else z();
        }
      }
      function at(e, t) {
        void 0 === t && (t = {});
        var n = Qe.plugins.concat(t.plugins || []);
        document.addEventListener("touchstart", qe, Te),
          window.addEventListener("blur", Ye);
        var r = Object.assign({}, t, { plugins: n }),
          o = je(e).reduce(function (e, t) {
            var n = t && it(t, r);
            return n && e.push(n), e;
          }, []);
        return Be(e) ? o[0] : o;
      }
      function st(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      (at.defaultProps = Qe),
        (at.setDefaultProps = function (e) {
          Object.keys(e).forEach(function (t) {
            Qe[t] = e[t];
          });
        }),
        (at.currentInput = Ve),
        Object.assign({}, k, {
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
        at.setDefaultProps({ animation: !1 });
      var lt = "undefined" != typeof window && "undefined" != typeof document;
      function ct(e, t) {
        e &&
          ("function" == typeof e && e(t),
          {}.hasOwnProperty.call(e, "current") && (e.current = t));
      }
      function ut() {
        return lt && document.createElement("div");
      }
      function dt(e, t) {
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
            if (!dt(e[n], t[n])) return !1;
          }
          return !0;
        }
        return !1;
      }
      function pt(e) {
        var t = [];
        return (
          e.forEach(function (e) {
            t.find(function (t) {
              return dt(e, t);
            }) || t.push(e);
          }),
          t
        );
      }
      var ft = lt ? a.useLayoutEffect : a.useEffect;
      function mt(e, t, n) {
        n.split(/\s+/).forEach(function (n) {
          n && e.classList[t](n);
        });
      }
      var ht = {
        name: "className",
        defaultValue: "",
        fn: function (e) {
          var t = e.popper.firstElementChild,
            n = function () {
              var t;
              return !!(null == (t = e.props.render) ? void 0 : t.$$tippy);
            };
          function r() {
            (e.props.className && !n()) || mt(t, "add", e.props.className);
          }
          return {
            onCreate: r,
            onBeforeUpdate: function () {
              n() && mt(t, "remove", e.props.className);
            },
            onAfterUpdate: r,
          };
        },
      };
      function vt(e) {
        return function (t) {
          var n = t.children,
            r = t.content,
            o = t.visible,
            i = t.singleton,
            s = t.render,
            l = t.reference,
            c = t.disabled,
            u = void 0 !== c && c,
            p = t.ignoreAttributes,
            f = void 0 === p || p;
          t.__source, t.__self;
          var m,
            h,
            v = st(t, [
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
            E = y[0],
            w = y[1],
            A = (0, a.useState)({}),
            _ = A[0],
            x = A[1],
            S = (0, a.useState)(),
            O = S[0],
            C = S[1],
            T =
              ((m = function () {
                return { container: ut(), renders: 1 };
              }),
              (h = (0, a.useRef)()).current ||
                (h.current = "function" == typeof m ? m() : m),
              h.current),
            L = Object.assign({ ignoreAttributes: f }, v, {
              content: T.container,
            });
          g && ((L.trigger = "manual"), (L.hideOnClick = !1)), b && (u = !0);
          var N = L,
            k = L.plugins || [];
          s &&
            (N = Object.assign({}, L, {
              plugins:
                b && null != i.data
                  ? [].concat(k, [
                      {
                        fn: function () {
                          return {
                            onTrigger: function (e, t) {
                              var n = i.data.children.find(function (e) {
                                return e.instance.reference === t.currentTarget;
                              });
                              (e.state.$$activeSingletonInstance = n.instance),
                                C(n.content);
                            },
                          };
                        },
                      },
                    ])
                  : k,
              render: function () {
                return { popper: T.container };
              },
            }));
          var $ = [l].concat(n ? [n.type] : []);
          return (
            ft(function () {
              var t = l;
              l && l.hasOwnProperty("current") && (t = l.current);
              var n = e(
                t || T.ref || ut(),
                Object.assign({}, N, { plugins: [ht].concat(L.plugins || []) })
              );
              return (
                (T.instance = n),
                u && n.disable(),
                o && n.show(),
                b &&
                  i.hook({
                    instance: n,
                    content: r,
                    props: N,
                    setSingletonContent: C,
                  }),
                w(!0),
                function () {
                  n.destroy(), null == i || i.cleanup(n);
                }
              );
            }, $),
            ft(function () {
              var e;
              if (1 !== T.renders) {
                var t,
                  n,
                  a,
                  s,
                  l = T.instance;
                l.setProps(
                  ((t = l.props),
                  (n = N),
                  Object.assign({}, n, {
                    popperOptions: Object.assign(
                      {},
                      t.popperOptions,
                      n.popperOptions,
                      {
                        modifiers: pt(
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
                  null == (e = l.popperInstance) || e.forceUpdate(),
                  u ? l.disable() : l.enable(),
                  g && (o ? l.show() : l.hide()),
                  b &&
                    i.hook({
                      instance: l,
                      content: r,
                      props: N,
                      setSingletonContent: C,
                    });
              } else T.renders++;
            }),
            ft(function () {
              var e;
              if (s) {
                var t = T.instance;
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
                            (_.placement === n.placement &&
                              _.referenceHidden ===
                                (null == r ? void 0 : r.isReferenceHidden) &&
                              _.escaped ===
                                (null == r ? void 0 : r.hasPopperEscaped)) ||
                              x({
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
            }, [_.placement, _.referenceHidden, _.escaped].concat($)),
            a.createElement(
              a.Fragment,
              null,
              n
                ? (0, a.cloneElement)(n, {
                    ref: function (e) {
                      var t;
                      (T.ref = e),
                        ct(
                          null == n || null == (t = n.props) ? void 0 : t.ref,
                          e
                        );
                    },
                  })
                : null,
              E &&
                (0, d.createPortal)(
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
                        })(_),
                        O,
                        T.instance
                      )
                    : r,
                  T.container
                )
            )
          );
        };
      }
      var gt = function (e, t) {
          return (0, a.forwardRef)(function (n, r) {
            var o = n.children,
              i = st(n, ["children"]);
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
        bt = gt(vt(at), {
          render: function () {
            return "";
          },
        });
      const yt = { passive: !1, capture: !0 };
      var Et = (e) => {
        let {
          onClickOutside: t,
          onHidden: n,
          onMount: r,
          focusScope: o,
          device: i,
        } = e;
        const [s, l] = (0, a.useState)(void 0),
          c = (0, a.useRef)(!1),
          u = (0, a.useCallback)((e) => {
            c.current &&
              ((c.current = !1),
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
              r ? n.preventDefault() : (c.current = !0),
                l(!0),
                null != e && e.reference && e.reference.blur(),
                r && "function" == typeof t && t(e, n);
            } else "function" == typeof t && t(e, n);
          },
          handleHiddenTippy: (e) => {
            "function" == typeof n && n(e, { preventFocus: s }),
              o && document.removeEventListener("touchend", u, yt),
              l(!1);
          },
          handleOnMountTippy: (e) => {
            o && document.addEventListener("touchend", u, yt),
              "function" == typeof r && r(e);
          },
        };
      };
      const wt = "andes-popper",
        At = "bottom",
        _t = [
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
      var xt = (e) => {
          let {
              attrs: t = {},
              appendTo: n,
              children: s,
              className: u,
              classNames: d = {},
              content: f,
              focusScope: m = !1,
              id: h,
              interactive: v = !1,
              interactiveDebounce: g = 0,
              onClickOutside: b,
              onHidden: y,
              onMount: E,
              paddingSize: w = 0,
              placement: A = At,
              popperOptions: _,
              style: x,
              trigger: S = "click focus",
              visible: O,
              zIndex: C = 9999,
            } = e,
            T = (0, i.A)(e, _t);
          const L = u || (null == d ? void 0 : d.root),
            N = l()(wt, L, [`${wt}--padding-${w}`]),
            k = l()(`${wt}__content`, null == d ? void 0 : d.content),
            { device: $ } = (0, c.AH)(),
            {
              handleClickOutside: I,
              handleHiddenTippy: R,
              handleOnMountTippy: M,
            } = Et({
              onClickOutside: b,
              onHidden: y,
              onMount: E,
              focusScope: m,
              device: $,
            }),
            P = (0, a.useMemo)(() => {
              if (!_) return { modifiers: [{ name: "flip", enabled: !1 }] };
              const e = _.modifiers || [],
                t = e.find((e) => "flip" === e.name);
              t &&
                !0 === t.enabled &&
                (0, p.A)(
                  !1,
                  "\n  'Flip modifier cannot be enabled due to infinite loops in @popperjs/core.\n"
                );
              const n = e.filter((e) => "flip" !== e.name);
              return (0, o.A)(
                (0, o.A)({}, _),
                {},
                { modifiers: [{ name: "flip", enabled: !1 }, ...n] }
              );
            }, [_]);
          return a.createElement(
            bt,
            (0, r.A)(
              {
                render: (e, o, i) =>
                  a.createElement(
                    "div",
                    (0, r.A)(
                      {
                        id: h,
                        style: x,
                        className: N,
                        "data-testid": "popper",
                        "data-andes-popper": !0,
                        "data-andes-popper-outside-root":
                          "function" == typeof n || !v || void 0,
                      },
                      null == t ? void 0 : t.root
                    ),
                    a.createElement(
                      "div",
                      (0, r.A)(
                        { className: k },
                        null == t ? void 0 : t.content
                      ),
                      (0, a.isValidElement)(f)
                        ? a.cloneElement(f, { instance: i })
                        : f
                    )
                  ),
                appendTo: n,
                placement: A,
                trigger: void 0 === O ? S : void 0,
                visible: O,
                interactive: v,
                interactiveDebounce: g,
                popperOptions: P,
                onClickOutside: I,
                zIndex: C,
                onHidden: R,
                onMount: M,
              },
              T
            ),
            s
          );
        },
        St = n(38083),
        Ot = n(81023),
        Ct = n(97987),
        Tt = n(50479),
        Lt = n(8494),
        Nt = n(85652),
        kt = n(53648),
        $t = n(98746),
        It = n(42206),
        Rt = n(83611),
        Mt = n(82071),
        Pt = n(74448),
        Dt = n(11311),
        Bt = n(94927),
        jt = n(54812),
        Ht = n(23444);
      const zt = "FloatingMenuGroup",
        Ft = ["FloatingMenuGroup", "DropdownGroup"],
        Ut = "menu",
        Vt = "andes-floating-menu-item-hover";
      var Wt = (e, t, n, r) => {
        const {
            allowUnselect: i,
            bottomContent: s,
            children: l,
            defaultOpen: c,
            defaultValue: u,
            listId: d,
            menuMaxHeight: p,
            multiple: f,
            offset: m,
            onChange: h,
            onClose: v,
            onOpen: g,
            open: b,
            popperOptions: y,
            searchConfig: E,
            style: w,
            topContent: A,
            type: _,
            value: x,
            width: S,
          } = r,
          O = (0, a.useMemo)(() => {
            var e;
            if (!l) return !1;
            const t = a.Children.toArray(l)[0];
            return (0, Ct.A)(
              Ft,
              null == t || null === (e = t.type) || void 0 === e
                ? void 0
                : e.displayName
            );
          }, [l]),
          [C, T] = (0, a.useState)(x || u),
          [L, N] = (0, a.useState)(!1),
          [k, $] = (0, a.useState)(void 0),
          [I, R] = (0, a.useState)(
            "object" == typeof E && (null == E ? void 0 : E.defaultValue)
          );
        (0, Tt.A)({ isDisabled: _ === Ut || ("select" === _ && !L) });
        const M = (0, a.useMemo)(() => void 0 === x, []),
          P = void 0 !== A,
          D = P || void 0 !== s || !!E,
          B = "select" === _ ? "combobox" : void 0;
        (0, a.useEffect)(() => {
          M || T(x);
        }, [x, M]);
        const j = (0, a.useMemo)(() => void 0 === b, []),
          H = j ? L : null != b && b,
          z = D || ("menu" === _ && !f) ? "dialog" : "listbox",
          F = (e, t) => {
            if (
              !(
                i ||
                f ||
                (void 0 !== t && null != t && t.length) ||
                void 0 === C
              )
            )
              return;
            M && T(t);
            let n = t;
            !f && Array.isArray(t) && ([n] = t),
              E && $((e) => (Array.isArray(n) ? e : n)),
              "function" == typeof h && h(e, n);
          },
          U = () => {
            if (E) {
              var e;
              const t =
                null == n || null === (e = n.current) || void 0 === e
                  ? void 0
                  : e.querySelector("label");
              return void setTimeout(() => (null == t ? void 0 : t.focus()), 0);
            }
            const r = t.current;
            if (r) {
              const e = ((e) => {
                const t = Array.prototype.slice.call(
                  e.querySelectorAll(".andes-list__item")
                );
                if (t.length) {
                  let e;
                  return (
                    (_ === Ut &&
                      ((e = t[0].querySelector(
                        ".andes-list__item-action, .andes-list__item-anchor, .andes-list__item-actionable"
                      )),
                      e)) ||
                      ((e = t.find((e) => 0 === e.tabIndex)),
                      e ||
                        (e = t.find(
                          (e) =>
                            -1 !==
                            e.className.indexOf("andes-list__item--selected")
                        )),
                      e || ([e] = t)),
                    e
                  );
                }
                return null;
              })(r);
              e && (e.focus(), (r.scrollTop = e.offsetTop - 48));
            }
          },
          V = (0, a.useCallback)(
            (e) => {
              if (!I) return !0;
              const t = e.props.title;
              return "object" == typeof E &&
                "function" == typeof E.filterCondition
                ? E.filterCondition(I, t, e)
                : t && (0, Ct.A)(t.toLowerCase(), I.toLowerCase());
            },
            [
              I,
              "object" == typeof E && (null == E ? void 0 : E.filterCondition),
            ]
          ),
          W = (0, a.useMemo)(() => {
            if (!l) return null;
            if (O) {
              let e = 0;
              const t = [];
              return (
                a.Children.forEach(l, (n, r) => {
                  const o = [];
                  a.Children.forEach(
                    null == n ? void 0 : n.props.children,
                    (t) => {
                      V(t) &&
                        o.push(
                          (0, a.cloneElement)(t, { index: e, groupIndex: r })
                        ),
                        (e += 1);
                    }
                  ),
                    o.length > 0 &&
                      t.push((0, a.cloneElement)(n, { children: o }));
                }),
                t
              );
            }
            const e = [];
            return (
              a.Children.forEach(l, (t, n) => {
                V(t) && e.push((0, a.cloneElement)(t, { index: n }));
              }),
              e
            );
          }, [l, O, V]);
        (0, a.useEffect)(() => {
          if (L && E && void 0 !== k) {
            const n = t.current;
            if (n) {
              var e;
              const t =
                null === (e = document) || void 0 === e
                  ? void 0
                  : e.getElementById(`${d}-option-${k}`);
              if (t && p) {
                const e = p - 52,
                  r = Math.floor(e / 48) - 1;
                n.scrollTop = t.offsetTop - 48 * r;
              }
            }
          }
        }, [E, t, k, d, L]);
        const q = (e) => {
            N(!0), P || setTimeout(U, 0), "function" == typeof g && g(e);
          },
          G = (t, r) => {
            const o = e.current;
            N(!1),
              E &&
                (() => {
                  var e;
                  const t =
                    null == n || null === (e = n.current) || void 0 === e
                      ? void 0
                      : e.querySelector("label");
                  null != t && t.control && (t.control.value = "");
                  R(""),
                    "object" == typeof E &&
                      "function" == typeof E.onChange &&
                      E.onChange("");
                })(),
              o && !r && setTimeout(() => o.focus(), 0),
              "function" == typeof v && v();
          };
        (0, a.useEffect)(() => {
          c && setTimeout(q, 0);
        }, []),
          (0, a.useEffect)(() => {
            j || (b ? setTimeout(q, 0) : L && G());
          }, [b]);
        const Y = (e) => {
            e.preventDefault(), j ? q(e) : "function" == typeof g && g(e);
          },
          K = () => {
            j ? G() : "function" == typeof v && v();
          },
          X = {
            visible: L,
            onSelectionChange: F,
            options: W,
            selectedKeys: Array.isArray(C)
              ? C
              : "string" == typeof C || "number" == typeof C
              ? [C]
              : [],
            style: (0, o.A)(
              (0, o.A)({}, p ? { maxHeight: p, overflowY: "auto" } : {}),
              {},
              { width: S },
              w
            ),
            popperOptions: y,
            plugins: [
              {
                name: "hideOnEsc",
                defaultValue: !0,
                fn(e) {
                  let { popper: t } = e;
                  function n(e) {
                    e.key === Ot._f && K();
                  }
                  return {
                    onShow() {
                      t.addEventListener("keydown", n);
                    },
                    onHide() {
                      t.removeEventListener("keydown", n);
                    },
                  };
                },
              },
            ],
            offset: m,
            onClickOutside: j
              ? (e) => {
                  G(0, !0);
                }
              : v,
            closeMenu: j ? G : v,
            onSearchFocus: E
              ? (e) => {
                  setTimeout(() => {
                    var e;
                    return null === (e = n.current) || void 0 === e
                      ? void 0
                      : e.focus();
                  }, 0);
                  const r = O
                    ? null == W
                      ? void 0
                      : W.reduce((e, t) => [...e, ...t.props.children], [])
                    : W || [];
                  if (!r) return;
                  const o = r.length;
                  $((n) => {
                    var i, a;
                    let s = r.findIndex((e) => {
                      let { props: t } = e;
                      return t.value === n;
                    });
                    switch (null == e ? void 0 : e.code) {
                      case Ot.Jd:
                        s += 1;
                        break;
                      case Ot.il:
                        if (-1 === s || 0 === s) {
                          s = o - 1;
                          break;
                        }
                        s -= 1;
                        break;
                      default:
                        s = 0;
                    }
                    const l = s % o;
                    return (
                      ((e, t) => {
                        const n = (e, n, r) => {
                          e[n].classList.contains(Vt) &&
                            e[n].classList.remove(Vt),
                            t === (void 0 === r ? n : r) &&
                              e[n].classList.add(Vt);
                        };
                        if (O) {
                          let t = 0;
                          for (let r = 0; r < e.length; r += 1) {
                            const o = e[r].children[1].children;
                            for (let e = 0; e < o.length; e += 1)
                              n(o, e, t), (t += 1);
                          }
                          return;
                        }
                        for (let t = 0; t < e.length; t += 1) n(e, t);
                      })(
                        (null == t || null === (i = t.current) || void 0 === i
                          ? void 0
                          : i.children) || [],
                        l
                      ),
                      null === (a = r[l]) ||
                      void 0 === a ||
                      null === (a = a.props) ||
                      void 0 === a
                        ? void 0
                        : a.value
                    );
                  });
                }
              : void 0,
            onSearchSelectionChange: E
              ? (e) => {
                  k &&
                    ((f || i) && Array.isArray(C) && (C || []).indexOf(k) > -1
                      ? F(
                          e,
                          C.filter((e) => e !== k)
                        )
                      : F(e, f ? [...(C || []), k] : [k]));
                }
              : void 0,
            onSearchChangeText: E ? (e) => R(e) : void 0,
            getFocusedItem: E ? () => k : void 0,
            onMount: E ? r.onMount : void 0,
          };
        return {
          menuProps: X,
          triggerProps: {
            role: B,
            "aria-expanded": L,
            "aria-controls": (() => {
              if ("select" === _)
                return B && D
                  ? `${null == r ? void 0 : r.id}-dialog`
                  : H
                  ? `${null == r ? void 0 : r.id}-list`
                  : void 0;
            })(),
            "aria-haspopup": z,
            onClick: (e) => {
              j
                ? L
                  ? G()
                  : q(e)
                : b
                ? "function" == typeof v && v()
                : "function" == typeof g && g(e);
            },
            onKeyDown: (e) => {
              switch (e.code) {
                case Ot._f:
                  K();
                  break;
                case Ot.Jd:
                case Ot.il:
                  "select" === _ && Y(e);
                  break;
                case Ot.Fm:
                case Ot.t6:
                  Y(e);
              }
            },
          },
        };
      };
      const qt = "andes-floating-menu",
        Gt = `${qt}--multiple`,
        Yt = "andes-form-control",
        Kt = `${qt}--search`;
      var Xt = {
          "andes-floating-menuNo hay resultados": [null, "No results"],
          "andes-floating-menuAbrir buscador": [null, "Open search tool"],
          "andes-floating-menuBuscar": [null, "Search"],
          "andes-floating-menuBorrar": [null, "Delete search"],
          "andes-floating-menuCerrar menú": [null, "Close menu"],
        },
        Qt = {
          "andes-floating-menuNo hay resultados": [null, "No hay resultados"],
          "andes-floating-menuAbrir buscador": [null, "Abrir buscador"],
          "andes-floating-menuBuscar": [null, "Buscar"],
          "andes-floating-menuBorrar": [null, "Borrar"],
          "andes-floating-menuCerrar menú": [null, "Cerrar menú"],
        },
        Zt = {
          "andes-floating-menuNo hay resultados": [null, "Sem resultados"],
          "andes-floating-menuAbrir buscador": [
            null,
            "Abrir mecanismo de busca",
          ],
          "andes-floating-menuBuscar": [null, "Procurar"],
          "andes-floating-menuBorrar": [null, "Excluir"],
          "andes-floating-menuCerrar menú": [null, "Fechar menu"],
        };
      var Jt = (function () {
        const e = (e) => {
          let {
            className: t,
            defaultValue: n,
            inputProps: o = {},
            onChange: i,
            onClear: s,
            onKeyDown: d,
            placeholder: f,
            size: m = "small",
            srLabel: h,
            value: v,
            ref: g,
          } = e;
          const { device: b, i18n: y } = (0, c.AH)("@andes/floating-menu", {
              en: Xt,
              "es-AR": Qt,
              "pt-BR": Zt,
            }),
            { getThemedComponentClasses: E, themeHash: w } = (0, u.wR)(),
            A = (0, a.useRef)(null),
            _ = (0, a.useMemo)(() => void 0 !== v, []),
            [x, S] = (0, a.useState)(!1),
            [O, C] = (0, a.useState)(!1),
            T = (0, a.useRef)(!0),
            L = "ios" === (null == b ? void 0 : b.osName);
          (0, p.A)(
            !(null != o && o.disabled),
            "If you are using the 'disabled' property to temporarily block the SearchBox, it is recommended to use loading instead.\nThe disabled state will be removed in future versions."
          ),
            (0, a.useEffect)(() => {
              !_ && n && C(!0), (T.current = !1);
            }, []),
            (0, a.useEffect)(() => {
              if (_) {
                const e = !!v && (null == v ? void 0 : v.length) > 0;
                C(e);
              }
            }, [_, v, C]),
            (0, a.useEffect)(() => {
              var e;
              x && (null === (e = A.current) || void 0 === e || e.focus());
            }, [x]);
          const N = () =>
              "small" === m
                ? a.createElement(It.A, { color: "currentColor" })
                : a.createElement(Mt.A, { color: "currentColor" }),
            k = () =>
              "small" === m
                ? a.createElement($t.A, { color: "currentColor" })
                : a.createElement(Rt.A, { color: "currentColor" }),
            $ = (e) => {
              var t;
              e.preventDefault(),
                !_ && A.current && (A.current.value = ""),
                (e.target.value = ""),
                C(!1),
                "function" == typeof s && s(e),
                "function" == typeof i && i(e),
                null === (t = A.current) || void 0 === t || t.focus();
            },
            I = l()(`${Yt}__close-icon`, { [`${Yt}__close-icon-visible`]: O }),
            R = l()(Kt, `${Kt}--size-${m}`, t, {
              [`${Kt}--web-mobile-ios`]: L,
              [`${Kt}--focused`]: x,
            });
          return a.createElement(
            "div",
            (0, r.A)(
              { ref: g, className: null == E ? void 0 : E("searchbox") },
              w
            ),
            a.createElement(
              Lt.v,
              { within: !0, isTextInput: !0, focusRingClass: "focus-visible" },
              a.createElement(
                "div",
                {
                  className: R,
                  "data-andes-searchbox": !0,
                  "data-andes-searchbox-variant": "simple",
                  "data-andes-searchbox-size": m,
                },
                a.createElement(
                  "label",
                  null,
                  a.createElement(kt.s, null, h || y.pgettext(qt, "Buscar")),
                  a.createElement(
                    "input",
                    (0, r.A)({}, o, {
                      className: `${Yt}__field`,
                      value: v,
                      defaultValue: n,
                      placeholder: f || `${y.pgettext(qt, "Buscar")}`,
                      onChange: (e) => {
                        var t, n;
                        const r =
                          !(
                            null == A ||
                            null === (t = A.current) ||
                            void 0 === t ||
                            !t.value
                          ) &&
                          (null == A || null === (n = A.current) || void 0 === n
                            ? void 0
                            : n.value.length) > 0;
                        C(r), "function" == typeof i && i(e);
                      },
                      onBlur: (e) => {
                        const { onBlur: t } = o;
                        S(!1), "function" == typeof t && t(e);
                      },
                      onFocus: (e) => {
                        const { onFocus: t } = o;
                        S(!0), "function" == typeof t && t(e);
                      },
                      ref: A,
                      onKeyDown: d,
                      "data-andes-searchbox-input": !0,
                    })
                  )
                ),
                a.createElement(
                  "button",
                  {
                    className: I,
                    onClick: $,
                    onMouseDown: $,
                    "aria-label": `${y.pgettext(qt, "Borrar")}`,
                    type: "button",
                    "data-andes-searchbox-close": !0,
                  },
                  a.createElement(k, null)
                ),
                a.createElement(
                  "div",
                  {
                    className: `${Yt}__search-icon`,
                    "data-andes-searchbox-search": !0,
                  },
                  a.createElement(N, null)
                )
              )
            )
          );
        };
        return (e.displayName = "SearchBox"), e;
      })();
      const en = (e) => {
        let {
          visible: t,
          children: n,
          id: r,
          dialogSrLabel: o,
          closeMenu: i,
        } = e;
        (0, p.A)(
          o,
          "<FloatingMenu> needs some plain text content for the dialog element for accessibility reasons.\nPlease add a 'dialogSrLabel' prop."
        );
        const { device: s, i18n: l } = (0, c.AH)("@andes/floating-menu", {
            en: Xt,
            "es-AR": Qt,
            "pt-BR": Zt,
          }),
          u =
            "android" === (null == s ? void 0 : s.osName) &&
            (null == s ? void 0 : s.mobile),
          d = a.createElement(
            kt.Y,
            { onClick: i, type: "button" },
            l.pgettext(qt, "Cerrar menú")
          );
        return a.createElement(
          "div",
          {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": o,
            id: `${r}-dialog`,
          },
          a.createElement(
            Nt.n1,
            { contain: !u && t, restoreFocus: !0, autoFocus: !0 },
            u && d,
            n
          )
        );
      };
      var tn = (e) => {
        let {
          children: t,
          visible: n,
          topContent: r,
          bottomContent: o,
          dialog: i,
          dialogSrLabel: s,
          id: l,
          closeMenu: c,
        } = e;
        const u = void 0 !== r,
          d = u || void 0 !== o,
          p = a.createElement(a.Fragment, null, r, t, o);
        return !1 === i
          ? p
          : i || d
          ? u
            ? a.createElement(
                a.Fragment,
                null,
                n &&
                  a.createElement(
                    en,
                    { visible: n, id: l, dialogSrLabel: s, closeMenu: c },
                    p
                  )
              )
            : a.createElement(
                en,
                { visible: n, id: l, dialogSrLabel: s, closeMenu: c },
                p
              )
          : p;
      };
      var nn = (function () {
        const e = (e) => {
          let {
            defaultValue: t,
            getFocusedItem: n,
            handleKeyDown: r,
            list: o,
            listId: i,
            onChange: s,
            placeholder: l,
            visible: c,
            dialogSrLabel: u,
            id: d,
            ref: p,
          } = e;
          const f = {
            role: "combobox",
            "aria-label": l,
            "aria-autocomplete": "list",
            "aria-controls": i,
            "aria-activedescendant": n() ? `${i}-option-${n()}` : void 0,
            "aria-expanded": !0,
          };
          return a.createElement(
            tn,
            {
              id: d,
              dialogSrLabel: u,
              visible: c,
              topContent: a.createElement(
                "div",
                { className: `${qt}__search-box` },
                a.createElement(Jt, {
                  ref: p,
                  defaultValue: t,
                  onChange: s,
                  placeholder: l,
                  onKeyDown: r,
                  inputProps: f,
                })
              ),
            },
            o
          );
        };
        return (e.displayName = "FloatingMenuSearch"), e;
      })();
      const rn = [
        "children",
        "className",
        "defaultValue",
        "onSelect",
        "value",
        "ref",
      ];
      var on = (function () {
        const e = (e) => {
          let {
              children: t,
              className: n,
              defaultValue: o,
              onSelect: s,
              value: c,
              ref: u,
            } = e,
            d = (0, i.A)(e, rn);
          const [p, f] = (0, a.useState)(c || o),
            m = (0, a.useMemo)(() => void 0 === c, []);
          (0, a.useEffect)(() => {
            m || f(c);
          }, [c]);
          const h = () => (Array.isArray(p) ? p : []),
            v = {};
          m ? o && (v.defaultSelectedKeys = h()) : (v.selectedKeys = h());
          const g = l()(Gt, n);
          return a.createElement(
            Dt.q,
            (0, r.A)(
              {
                className: g,
                selectionComponent: a.createElement(Pt.S, { srHidden: !0 }),
                selectionMode: "multiple",
                ref: u,
                onSelect: (e, t, n) => {
                  m && f(t), "function" == typeof s && s(e, t, n);
                },
              },
              d,
              v
            ),
            t
          );
        };
        return (e.displayName = "FloatingMenuMultiple"), e;
      })();
      const an = (function () {
        const e = (e) => {
          let {
            closeMenu: t,
            bottomContent: n,
            i18n: o,
            id: i,
            multiple: s = !1,
            onKeyDown: l,
            onSelect: c,
            options: u,
            search: d = !1,
            selectedKeys: p,
            srLabel: f,
            topContent: m,
            type: h = "menu",
            visible: v,
            dialogSrLabel: g,
            ref: b,
          } = e;
          if (!u || !u.length)
            return a.createElement(
              tn,
              {
                visible: v,
                topContent: m,
                bottomContent: n,
                dialog: !d,
                id: i,
                dialogSrLabel: g,
              },
              a.createElement(
                "div",
                {
                  className: `${qt}__no-results`,
                  "data-andes-floating-menu-no-result": !0,
                },
                o.pgettext(qt, "No hay resultados")
              )
            );
          const y = { id: i, ref: b, className: qt, onKeyDown: l, srLabel: f };
          if (s)
            return a.createElement(
              tn,
              {
                visible: v,
                topContent: m,
                bottomContent: n,
                dialog: !d,
                id: i,
                dialogSrLabel: g,
              },
              a.createElement(
                on,
                (0, r.A)({}, y, {
                  onSelect: c,
                  value: p,
                  shouldUseVirtualFocus: !!d,
                }),
                u
              )
            );
          if ("select" === h || d) {
            const e = void 0 !== m || void 0 !== n;
            return a.createElement(
              tn,
              {
                visible: v,
                topContent: m,
                bottomContent: n,
                dialog: e && !d,
                id: i,
                dialogSrLabel: g,
              },
              a.createElement(
                Dt.q,
                (0, r.A)({}, y, {
                  onSelect: c,
                  selectionMode: s ? "multiple" : "single",
                  selectedKeys: p,
                  shouldUseVirtualFocus: !!d,
                }),
                u
              )
            );
          }
          const E = (e) =>
            (0, a.cloneElement)(e, {
              onClick: (t, n) =>
                ((e, t, n) => {
                  "function" == typeof e && e(t, n),
                    "function" == typeof c && c(t, n);
                })(e.props.onClick, t, n),
              tabIndex: void 0,
            });
          return a.createElement(
            tn,
            {
              visible: v,
              topContent: m,
              bottomContent: n,
              dialog: !0,
              id: i,
              dialogSrLabel: g,
              closeMenu: t,
            },
            a.createElement(
              Bt.B8,
              y,
              a.Children.map(u, (e) => {
                var t;
                if (
                  (null == e || null === (t = e.type) || void 0 === t
                    ? void 0
                    : t.displayName) === zt
                ) {
                  const t = a.Children.map(e.props.children, E);
                  return (0, a.cloneElement)(e, { children: t });
                }
                return E(e);
              })
            )
          );
        };
        return (e.displayName = "FloatingMenuList"), e;
      })();
      var sn = an;
      var ln,
        cn = (e) => {
          let { search: t } = e;
          if (t)
            return "boolean" == typeof t
              ? { search: !0 }
              : (0, o.A)((0, o.A)({}, t), {}, { search: !0 });
        };
      const un = (0, jt.n)(jt.h),
        dn = {
          SSR: [
            null == un || null === (ln = un.sendSlots) || void 0 === ln
              ? void 0
              : ln.call(un, "Floating-Menu", (e) => {
                  let { topContent: t, bottomContent: n, search: r } = e;
                  return (void 0 !== t && !r) || void 0 !== n;
                }),
          ],
        },
        pn = ["ref"],
        fn = [
          "closeMenu",
          "getFocusedItem",
          "onSearchChangeText",
          "onSearchFocus",
          "onSearchSelectionChange",
          "onSelectionChange",
          "options",
          "selectedKeys",
        ],
        mn = (function () {
          const e = (e) => {
            let { ref: t } = e,
              n = (0, i.A)(e, pn);
            const {
                allowUnselect: s = !1,
                appendTo: d,
                bottomContent: p,
                className: f,
                defaultOpen: m = !1,
                id: h,
                menuMaxHeight: v,
                multiple: g = !1,
                placement: b = "bottom",
                search: y = !1,
                srLabel: E,
                topContent: w,
                trigger: A,
                type: _ = "menu",
                width: x = 280,
                dialogSrLabel: S,
              } = n,
              O = (0, c.Bi)(h),
              { getThemedComponentClasses: C, themeHash: T } = (0, u.wR)();
            null == C || C("list");
            const L = cn({ search: y }),
              { i18n: N } = (0, c.AH)("@andes/floating-menu", {
                en: Xt,
                "es-AR": Qt,
                "pt-BR": Zt,
              }),
              k = `${O}-list`,
              $ = (0, a.useRef)(null),
              I = (0, a.useRef)(null),
              R = (0, a.useRef)(null),
              M = (0, a.useRef)(!1),
              { menuProps: P, triggerProps: D } = Wt(
                $,
                I,
                R,
                (0, o.A)(
                  (0, o.A)({}, n),
                  {},
                  {
                    allowUnselect: s,
                    defaultOpen: m,
                    multiple: g,
                    placement: b,
                    type: _,
                    width: x,
                    listId: k,
                    id: O,
                    searchConfig: L,
                  }
                )
              ),
              {
                closeMenu: B,
                getFocusedItem: j,
                onSearchChangeText: H,
                onSearchFocus: z,
                onSearchSelectionChange: F,
                onSelectionChange: U,
                options: V,
                selectedKeys: W,
              } = P,
              q = (0, i.A)(P, fn);
            (0, a.useEffect)(() => {
              M.current && ((M.current = !1), "function" == typeof z && z());
            }, [M.current]),
              (0, a.useEffect)(() => {
                const e = I.current;
                e &&
                  L &&
                  requestAnimationFrame(() => {
                    (e.style.maxHeight = v ? v - 52 + "px" : ""),
                      (e.style.overflowY = "auto");
                  });
              }, [I.current, v, L]);
            const G = (e, t) => {
                t ? U(e, t) : F(e), g || "function" != typeof B || B();
              },
              Y = (e) => {
                switch (e.code) {
                  case Ot.wn:
                    "menu" !== _ && e.preventDefault();
                    break;
                  case Ot.il:
                  case Ot.Jd:
                    L && z(e);
                    break;
                  case Ot.Fm:
                    L && G(e);
                }
              },
              K = (e) => {
                const { value: t } = e.target;
                (M.current = !0),
                  "function" == typeof H && H(t),
                  "function" == typeof (null == L ? void 0 : L.onChange) &&
                    L.onChange(t);
              },
              X = l()(qt, f, { [`${qt}--multiple`]: g }),
              Q = l()(
                `${qt}__popper-content`,
                null == C ? void 0 : C("floatingMenu")
              );
            return a.createElement(
              "div",
              { className: X, ref: t },
              a.createElement(
                xt,
                (0, r.A)(
                  {
                    appendTo: d,
                    content: (() => {
                      const e = a.createElement(sn, {
                        closeMenu: B,
                        id: k,
                        multiple: g,
                        onKeyDown: Y,
                        onSelect: G,
                        options: V,
                        ref: I,
                        selectedKeys: W,
                        type: _,
                        search: null == L ? void 0 : L.search,
                        srLabel: E,
                        visible: P.visible,
                        i18n: N,
                        topContent: L ? void 0 : w,
                        bottomContent: p,
                        dialogSrLabel: S,
                      });
                      return L
                        ? a.createElement(
                            nn,
                            (0, r.A)(
                              {
                                getFocusedItem: j,
                                handleKeyDown: Y,
                                list: e,
                                listId: k,
                                ref: R,
                                visible: P.visible,
                                id: O,
                              },
                              L,
                              { onChange: K, dialogSrLabel: S }
                            )
                          )
                        : e;
                    })(),
                    interactive: !0,
                    placement: b,
                    id: `${O}-popper`,
                    focusScope: !0,
                    classNames: { content: Q },
                    attrs: {
                      root: T,
                      content: (0, o.A)({ "data-andes-floating-menu": !0 }, T),
                    },
                  },
                  q
                ),
                (0, a.cloneElement)(A, (0, o.A)({ ref: $ }, D))
              )
            );
          };
          return (e.displayName = "FloatingMenu"), e;
        })();
      var hn = (0, St.H)(mn, dn);
      const vn = [
        "children",
        "description",
        "disabled",
        "groupIndex",
        "href",
        "index",
        "onClick",
        "rightContent",
        "selected",
        "title",
        "value",
      ];
      var gn = (function () {
        const e = (e) => {
          let {
              children: t,
              description: n,
              disabled: s = !1,
              groupIndex: l,
              href: c,
              index: u,
              onClick: d,
              rightContent: p,
              selected: f = !1,
              title: m,
              value: h,
            } = e,
            v = (0, i.A)(e, vn);
          const g = (0, o.A)(
              {
                description: n,
                disabled: s,
                groupIndex: l,
                index: u,
                rightContent: p,
                selected: f,
                title: m,
                value: h,
              },
              v
            ),
            b = (e) => {
              s || ("function" == typeof d && d(e, h));
            };
          return c || d
            ? a.createElement(
                Bt.kJ,
                (0, r.A)({}, g, {
                  href: c,
                  onClick: b,
                  legacyBehaviorSlot: !0,
                  chevron: !1,
                }),
                t
              )
            : a.createElement(Bt.ck, (0, r.A)({}, g, { onClick: b }), t);
        };
        return (
          (e.getCollectionNode = Ht.A), (e.displayName = "FloatingMenuItem"), e
        );
      })();
    },
    53648(e, t, n) {
      n.d(t, { Y: () => m, s: () => p });
      var r = n(58168),
        o = n(80045),
        i = n(96540),
        a = n(46942),
        s = n.n(a);
      const l = "andes-visually-hidden",
        c = l,
        u = `${l}-focusable`,
        d = ["children", "component"];
      var p = (e) => {
        let { children: t, component: n = "span" } = e,
          a = (0, o.A)(e, d);
        return i.createElement(n, (0, r.A)({ className: c }, a), t);
      };
      const f = ["children", "component", "className"];
      var m = (e) => {
        let { children: t, component: n = "button", className: a } = e,
          l = (0, o.A)(e, f);
        return i.createElement(n, (0, r.A)({ className: s()(u, a) }, l), t);
      };
    },
    61678(e, t, n) {
      n.d(t, {
        TM: () => L,
        Wu: () => k,
        Zp: () => T,
        aR: () => N,
        wL: () => I,
      });
      var r = n(58168),
        o = n(80045),
        i = n(96540),
        a = n(46942),
        s = n.n(a),
        l = n(69247),
        c = n(95990),
        u = n(88460),
        d = n(97987),
        p = n(46956),
        f = n(85647);
      const m = "andes-card",
        h = `${m}__header`,
        v = `${m}__content`,
        g = `${m}__footer`,
        b = "accent",
        y = "green",
        E = "orange",
        w = "informative",
        A = "positive",
        _ = "caution",
        x = "negative",
        S = [b, y, "red", E],
        O = [w, A, x, _, "none"],
        C = [
          "animated",
          "children",
          "className",
          "color",
          "component",
          "hierarchy",
          "id",
          "paddingSize",
          "shadow",
          "ref",
        ];
      var T = (function () {
        const e = (e) => {
          let {
              animated: t,
              children: n,
              className: a,
              color: p,
              component: f = "div",
              hierarchy: h = "primary",
              id: v,
              paddingSize: g = 16,
              shadow: T = "flat",
              ref: L,
            } = e,
            N = (0, o.A)(e, C);
          const k = (0, l.Bi)(v),
            { getThemedComponentClasses: $, themeHash: I } = (0, c.wR)();
          (0, u.A)(
            !t,
            "'animated' prop is deprecated in a future major version.\nYou can remove this prop without any problems."
          );
          const R = ((e) => {
              if ((0, d.A)([...O, ...S], e))
                switch (
                  ((0, u.A)(
                    !(0, d.A)(S, e),
                    "This color will be deprecated in a future major version.\nPlease use 'informative' | 'positive' | 'caution' | 'negative'"
                  ),
                  e)
                ) {
                  case b:
                    return w;
                  case y:
                    return A;
                  case E:
                    return _;
                  case "red":
                    return x;
                  default:
                    return e;
                }
            })(p),
            M = void 0 !== p && !R,
            P = s()(
              m,
              a,
              `${m}--${T}`,
              `${m}--${h}`,
              null == $ ? void 0 : $("card"),
              {
                [`${m}--${R}`]: R,
                [`${m}--padding-${g}`]: "number" == typeof g,
                [`${m}--custom-color`]: M,
              }
            );
          return i.createElement(
            f,
            (0, r.A)(
              {
                style: (() => {
                  if (M)
                    return { "--andes-card-pipe-color-fill-informative": p };
                })(),
              },
              N,
              I,
              {
                className: P,
                id: k,
                ref: L,
                "data-andes-card": !0,
                "data-andes-card-hierarchy": h,
              }
            ),
            n
          );
        };
        return (e.displayName = "Card"), e;
      })();
      var L = (function () {
        const e = (e) => {
          let {
            background: t = "light",
            children: n,
            className: r,
            component: o = "div",
            id: a,
            paddingSize: c = 16,
            ref: d,
          } = e;
          const p = (0, l.Bi)(a),
            f = s()(r);
          return (
            (0, u.A)(
              !1,
              "'<CardSecondary>' component is deprecated and will be removed in the next major release.\nPlease use the '<Card>' component with the 'hierarchy' prop instead, setting 'hierarchy=\"secondary\"' for 'type=\"light\"' or 'hierarchy=\"tertiary\"' for 'type=\"dark\"'."
            ),
            i.createElement(
              T,
              {
                paddingSize: c,
                className: f,
                component: o,
                id: p,
                ref: d,
                hierarchy: "dark" === t ? "tertiary" : "secondary",
              },
              n
            )
          );
        };
        return (e.displayName = "CardSecondary"), e;
      })();
      var N = (function () {
        const e = (e) => {
          let {
            children: t,
            className: n,
            component: r = "div",
            showBorder: o = !0,
            ref: a,
          } = e;
          const l = s()(h, n, { [`${h}--border`]: o });
          return i.createElement(
            r,
            { className: l, ref: a, "data-andes-card-header": !0 },
            (0, i.cloneElement)(t, { className: `${h}-title` })
          );
        };
        return (e.displayName = "CardHeader"), e;
      })();
      var k = (function () {
        const e = (e) => {
          let { children: t, className: n, component: r = "div", ref: o } = e;
          return i.createElement(
            r,
            { className: s()(v, n), ref: o, "data-andes-card-content": !0 },
            t
          );
        };
        return (e.displayName = "CardContent"), e;
      })();
      const $ = ["href", "icon", "onClick", "text", "title"];
      var I = (function () {
        const e = (e) => {
          let {
            children: t,
            className: n,
            component: a = "div",
            link: l = {},
            showBorder: c = !0,
            ref: u,
          } = e;
          const d = Object.keys(l).length > 0,
            m = s()(g, n, { [`${g}--common`]: d, [`${g}--border`]: c }),
            { href: h, icon: v, onClick: b, text: y, title: E } = l,
            w = (0, o.A)(l, $);
          if (y) {
            if (h) {
              const e = u,
                t = s()(m, `${g}--link`);
              return i.createElement(
                "a",
                (0, r.A)(
                  { href: h, className: t, onClick: b, title: E, ref: e },
                  w,
                  { "data-andes-card-footer": !0 }
                ),
                i.createElement(
                  f.EY,
                  {
                    component: "span",
                    size: "m",
                    color: "link",
                    weight: "semibold",
                  },
                  y
                ),
                v &&
                  i.createElement(
                    "span",
                    { className: `${g}-arrow` },
                    i.createElement(p.A, { color: "currentColor" })
                  )
              );
            }
            if (b) {
              const e = s()(m, `${g}--button`),
                t = u,
                n = w;
              return i.createElement(
                "button",
                (0, r.A)(
                  { className: e, onClick: b, ref: t, type: "button" },
                  n,
                  { "data-andes-card-footer": !0 }
                ),
                i.createElement(
                  f.EY,
                  {
                    component: "span",
                    size: "m",
                    color: "link",
                    weight: "semibold",
                  },
                  y
                ),
                v &&
                  i.createElement(
                    "span",
                    { className: `${g}-arrow` },
                    i.createElement(p.A, { color: "currentColor" })
                  )
              );
            }
          }
          return i.createElement(
            a,
            { className: m, ref: u, "data-andes-card-footer": !0 },
            t
          );
        };
        return (e.displayName = "CardFooter"), e;
      })();
    },
    95997(e, t, n) {
      n.d(t, { Ay: () => h, Hv: () => f, Sv: () => l, m4: () => m });
      var r = n(96540);
      var o = (e, t) => -1 !== e.indexOf(t);
      var i = () => {};
      const a = ["STYLE", "SCRIPT"],
        s = () =>
          "undefined" != typeof window && "inert" in HTMLElement.prototype,
        l = (e, t) => {
          var n;
          if ("undefined" == typeof window || "undefined" == typeof document)
            return { bodyElements: [], portalElements: [] };
          const r =
            null !== (n = document) &&
            void 0 !== n &&
            null !== (n = n.body) &&
            void 0 !== n &&
            n.children
              ? [].slice.call(document.body.children)
              : [];
          let o = [];
          if (t instanceof ShadowRoot) {
            const n = t.querySelector(e);
            n && (o = [n]);
          } else {
            var i;
            o =
              null !== (i = document) && void 0 !== i && i.querySelectorAll(e)
                ? [].slice.call(document.querySelectorAll(e))
                : [];
          }
          return { bodyElements: r, portalElements: o };
        },
        c = (e, t, n, r) => {
          if (!e) return;
          if (r && e.shadowRoot === r) {
            const e = Array.from(r.children || []);
            for (let o = 0; o < e.length; o += 1) {
              const i = e[o];
              i instanceof HTMLElement && c(i, t, n, r);
            }
            return;
          }
          if ((n(e), e === t)) return;
          const o = [
            ...Array.from(e.children || []),
            ...(e.shadowRoot && e.shadowRoot !== r
              ? Array.from(e.shadowRoot.children || [])
              : []),
          ];
          for (let e = 0; e < o.length; e += 1) {
            const i = o[e];
            i instanceof HTMLElement && c(i, t, n, r);
          }
        },
        u = (e, t) => {
          if (e) {
            if (e instanceof ShadowRoot) {
              const n = e.querySelectorAll(t);
              return (n.length > 0 ? n[n.length - 1] : null) || e;
            }
            return e;
          }
        },
        d = (e, t, n, r) => {
          const i = u(t, r),
            s = t instanceof ShadowRoot ? t : void 0;
          c(
            e,
            i,
            (t) => {
              t !== i
                ? o(a, t.tagName) || t.setAttribute(n, "true")
                : ((e, t, n) => {
                    let r = e;
                    for (
                      ;
                      r &&
                      r !== t.parentElement &&
                      (r.hasAttribute &&
                        r.hasAttribute(n) &&
                        r.removeAttribute(n),
                      r !== t);

                    ) {
                      let e = null;
                      if (r.parentElement) e = r.parentElement;
                      else if (
                        r.getRootNode &&
                        r.getRootNode() instanceof ShadowRoot
                      ) {
                        const t = r.getRootNode();
                        t instanceof ShadowRoot && "host" in t && (e = t.host);
                      }
                      if (!e) break;
                      if (!(e instanceof HTMLElement)) break;
                      r = e;
                    }
                  })(t, e, n);
            },
            s
          );
        },
        p = (e, t, n) => {
          const r = t instanceof ShadowRoot ? t : void 0;
          c(
            e,
            t,
            (e) => {
              !o(a, e.tagName) && e.hasAttribute(n) && e.removeAttribute(n);
            },
            r
          );
        },
        f = (e) => {
          let {
            outsideElements: t = [],
            portalContainer: n,
            portalElements: r = [],
          } = e;
          t.forEach((e) => {
            e &&
              (o(a, e.tagName) ||
                (r.length && r.some((t) => t.isEqualNode(e))) ||
                (n && e.contains(n)) ||
                e.setAttribute("aria-hidden", "true"));
          });
        },
        m = (e) => {
          let { outsideElements: t = [] } = e;
          t.forEach((e) => {
            e &&
              (o(a, e.tagName) ||
                (e.hasAttribute("aria-hidden") &&
                  e.removeAttribute("aria-hidden")));
          });
        },
        h = (e) => {
          let { isOpen: t, portalSelector: n, portalContainer: c } = e;
          const [f, m] = (0, r.useState)([]),
            [h, v] = (0, r.useState)([]);
          (0, r.useEffect)(() => {
            const { bodyElements: e, portalElements: t } = l(n, c);
            m(e), v(t);
          }, [n, c]),
            (0, r.useEffect)(
              () => (
                t &&
                  ((e) => {
                    let {
                      outsideElements: t = [],
                      portalContainer: n,
                      portalElements: r = [],
                      portalSelector: l,
                    } = e;
                    s() ||
                      i(
                        !1,
                        "The 'inert' attribute is not supported by this browser To ensure accessibility and prevent the background from being interactive, add the polyfill \"wicg-inert\": https://github.com/WICG/inert"
                      );
                    const c = s() ? "inert" : "aria-hidden",
                      p = u(n, l),
                      f = n instanceof ShadowRoot ? n.host : null;
                    t.forEach((e) => {
                      e &&
                        (o(a, e.tagName) ||
                          (r.length && r.some((t) => t.isEqualNode(e))) ||
                          (f && e === f) ||
                          (!n ||
                          ("MAIN" !== e.tagName &&
                            !e.classList.contains("odin-wrapper"))
                            ? (p && e.contains(p)) || e.setAttribute(c, "true")
                            : d(e, n, c, l)));
                    });
                  })({
                    outsideElements: f,
                    portalContainer: c,
                    portalElements: h,
                    portalSelector: n,
                  }),
                () => {
                  ((e) => {
                    let { outsideElements: t = [], portalContainer: n } = e;
                    const r = s() ? "inert" : "aria-hidden",
                      i = n instanceof ShadowRoot ? n.host : null;
                    t.forEach((e) => {
                      e &&
                        (o(a, e.tagName) ||
                          (i && e === i && e.shadowRoot
                            ? p(e, n, r)
                            : (e.hasAttribute(r) && e.removeAttribute(r),
                              n &&
                                ("MAIN" === e.tagName ||
                                  e.classList.contains("odin-wrapper")) &&
                                p(e, n, r))));
                    });
                  })({ outsideElements: f, portalContainer: c });
                }
              ),
              [t, c, f, h, n]
            );
        };
    },
    62166(e, t, n) {
      n.d(t, { A: () => r });
      const r = (e) =>
        e
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .replace(/[\s_]+/g, "-")
          .toLowerCase();
    },
    81348(e, t, n) {
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
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "currentColor",
          },
          o && r.createElement("title", null, o),
          r.createElement("path", {
            d: "M7.6364 10.5702L12.7851 5.42151L13.9422 6.57859L7.6364 12.8844L4.05786 9.30587L5.21495 8.14878L7.6364 10.5702Z",
            fill: "currentColor",
          })
        );
      };
    },
    71111(e, t, n) {
      n.d(t, { P: () => C, Q: () => O });
      var r = n(58168),
        o = n(89379),
        i = n(96540),
        a = n(46942),
        s = n.n(a),
        l = n(62939),
        c = n(30866),
        u = n(69247),
        d = n(95990),
        p = n(83611),
        f = n(88460),
        m = n(37808);
      const h = "andes-message",
        v = "loud",
        g = "quiet",
        b = "right",
        y = "bottom",
        E = ["accent", "green", "orange", "red"];
      var w = (e) => {
          let { color: t } = e;
          switch (
            ("string" == typeof t &&
              (0, f.A)(
                !E.includes(t),
                "This color will be deprecated in a future major version,\n please use 'caution' | 'informative' | 'negative' | 'positive'"
              ),
            t)
          ) {
            case "accent":
              return "informative";
            case "orange":
              return "caution";
            case "red":
              return "negative";
            case "green":
              return "positive";
            default:
              return t || "informative";
          }
        },
        A = { "andes-messagecerrar": [null, "Close"] },
        _ = { "andes-messageclose": [null, "cerrar"] },
        x = { "andes-messagecerrar": [null, "Fechar"] },
        S = { "andes-messagecerrar": [null, "关闭"] };
      var O = (function () {
        const e = (e) => {
          let {
            andesDataAttributes: t = {},
            actions: n,
            actionsPosition: a = y,
            children: f,
            className: m,
            closable: E = !1,
            closeButtonSrLabel: O,
            color: C = "informative",
            defaultVisible: T = !0,
            hierarchy: L = v,
            id: N,
            onClose: k,
            title: $,
            thumbnail: I,
            visible: R,
            ref: M,
          } = e;
          const P = (0, u.Bi)(N),
            { i18n: D } = (0, u.AH)("@andes/message", {
              en: A,
              "es-AR": _,
              "pt-BR": x,
              "zh-CN": S,
            }),
            B = (0, i.useMemo)(() => void 0 !== R, []),
            [j, H] = (0, i.useState)(B ? void 0 : T),
            { getThemedComponentClasses: z, themeHash: F } = (0, d.wR)(),
            U = w({ color: C }),
            V = s()(
              m,
              h,
              { [`${h}--${U}`]: U, [`${h}--${L}`]: L },
              null == z ? void 0 : z("message")
            ),
            W = s()(`${h}__content`, { [`${h}__content--untitled`]: !$ }),
            q = s()(`${h}__close-button`, {
              [`${h}__close--${U}`]: U,
              [`${h}__close--quiet`]: L === g,
              [`${h}__close-in-line`]: a === b,
              [`${h}__close--bottom`]: a === y,
            }),
            G = s()(`${h}__badge`),
            Y = s()(`${h}__text`, { [`${h}__text-inline-action`]: a === b });
          if (!1 === j || !1 === R) return null;
          const K = i.createElement(l.Tq, {
              className: G,
              size: "small",
              color: U,
              backgroundType: "loud" === L ? "complexBackground" : void 0,
              id: `${P}-notification`,
            }),
            X = (0, o.A)(
              {
                "data-andes-message": !0,
                "data-andes-message-hierarchy": L,
                "data-andes-message-actions-position": a,
              },
              F
            );
          return i.createElement(
            "div",
            (0, r.A)({ className: V, id: P, ref: M }, t, X),
            L === g &&
              i.createElement("div", { className: `${h}__border-color--${U}` }),
            I
              ? i.createElement(
                  "div",
                  { className: `${h}__thumbnail-container` },
                  i.createElement(
                    c.V,
                    {
                      id: `${P}-thumbnail`,
                      className: `${h}__thumbnail`,
                      backgroundType:
                        "loud" === L ? "complexBackground" : void 0,
                      badge: K,
                    },
                    I
                  )
                )
              : K,
            i.createElement(
              "div",
              { className: W },
              $ && i.createElement("div", { className: `${h}__title` }, $),
              i.createElement(
                "div",
                { className: Y },
                f,
                (0, i.isValidElement)(n) &&
                  (0, i.cloneElement)(n, {
                    actionsPosition: a,
                    closable: E,
                    hierarchy: L,
                    title: $,
                    color: U,
                    id: P,
                  })
              )
            ),
            E &&
              i.createElement(
                "button",
                {
                  type: "button",
                  className: q,
                  onClick: (e) => {
                    B || H(!1), "function" == typeof k && k(e);
                  },
                  "aria-label": O || D.pgettext(h, "close"),
                },
                i.createElement(p.A, null)
              )
          );
        };
        return (e.displayName = "Message"), e;
      })();
      var C = (function () {
        const e = (e) => {
          let {
            actionsPosition: t = y,
            closable: n = !1,
            color: r = "accent",
            hierarchy: o = v,
            id: a,
            primary: l,
            secondary: c,
            title: d,
            ref: p,
          } = e;
          const f = (0, u.Bi)(a),
            g = s()({ [`${h}__buttons-container`]: t === y || d }),
            E = s()({
              [`${h}__primary-button-closeable`]: t === b && n,
              [`${h}__primary-button-inline`]: t === b && !d,
              [`${h}__primary-button--${r}`]: o === v,
            }),
            w = s()([`${h}__secondary-button`], {
              [`${h}__secondary-button--${r}`]: o === v,
              [`${h}__secondary-button--${o}`]: o === v,
            });
          return i.createElement(
            "div",
            { className: g, ref: p, "data-andes-message-actions": !0 },
            null != l && l.text
              ? i.createElement(
                  m.$n,
                  {
                    size: "medium",
                    className: E,
                    onClick: l.onClick,
                    href: l.href,
                    id: `${f}-message-button-primary`,
                    backgroundType: "loud" === o ? "complexBackground" : void 0,
                    "data-andes-message-action-primary": !0,
                  },
                  i.createElement("span", null, l.text)
                )
              : null,
            (() => {
              const e =
                  (null == c ? void 0 : c.text) &&
                  t === y &&
                  ((null == c ? void 0 : c.onClick) ||
                    (null == c ? void 0 : c.href)),
                n =
                  ("quiet" === o && (null == c ? void 0 : c.hierarchy)) ||
                  "mute";
              return e
                ? i.createElement(
                    m.$n,
                    {
                      size: "medium",
                      className: w,
                      onClick: c.onClick,
                      hierarchy: n,
                      href: c.href,
                      id: `${f}-message-button-secondary`,
                      backgroundType:
                        "loud" === o ? "complexBackground" : void 0,
                      "data-andes-message-action-secondary": !0,
                    },
                    i.createElement("span", null, c.text)
                  )
                : null;
            })()
          );
        };
        return (e.displayName = "MessageActions"), e;
      })();
    },
    85647(e, t, n) {
      n.d(t, {
        EY: () => A,
        Kp: () => O,
        L9: () => T,
        hE: () => x,
        o5: () => E,
      });
      var r = n(58168),
        o = n(80045),
        i = n(96540),
        a = n(46942),
        s = n.n(a),
        l = n(88460),
        c = n(89379),
        u = n(97987),
        d = n(66202),
        p = n(81348),
        f = n(34715),
        m = n(13887);
      const h = "andes-typography",
        v = `${h}-text-list`,
        g = `${v}__item`,
        b = [
          "primary",
          "secondary",
          "inverse",
          "accent",
          "disabled",
          "link",
          "link-inverse",
          "selected",
          "informative",
          "positive",
          "caution",
          "negative",
        ],
        y = [
          "className",
          "component",
          "type",
          "size",
          "color",
          "children",
          "weight",
          "ref",
        ];
      var E = (function () {
        const e = (e) => {
          let {
              className: t,
              component: n = "span",
              type: a = "body",
              size: c = "m",
              color: u = "primary",
              children: d,
              weight: p = "regular",
              ref: f,
            } = e,
            m = (0, o.A)(e, y);
          const v = "inverted" === u ? "inverse" : u,
            g = s()(h, t, {
              [`${h}--type-${a}`]: a,
              [`${h}--size-${c}`]: c,
              [`${h}--color-${v}`]: v,
              [`${h}--weight-${p}`]: p,
            });
          return (
            (0, l.A)(
              "inverted" !== u,
              "'inverted' option will be removed from 'color' options in a future major version.\nPlease, use 'inverse."
            ),
            i.createElement(n, (0, r.A)({ className: g, ref: f }, m), d)
          );
        };
        return (e.displayName = "Typography"), e;
      })();
      const w = ["ref"];
      var A = (function () {
        const e = (e) => {
          let { ref: t } = e,
            n = (0, o.A)(e, w);
          return i.createElement(E, (0, r.A)({}, n, { type: "body", ref: t }));
        };
        return (e.displayName = "Text"), e;
      })();
      const _ = ["ref"];
      var x = (function () {
        const e = (e) => {
          let { ref: t } = e,
            n = (0, o.A)(e, _);
          return i.createElement(E, (0, r.A)({}, n, { type: "title", ref: t }));
        };
        return (e.displayName = "Title"), e;
      })();
      const S = [
        "markerColor",
        "markerType",
        "children",
        "className",
        "color",
        "srLabel",
        "ref",
      ];
      var O = (function () {
        const e = (e) => {
          let {
              markerColor: t,
              markerType: n = "dot",
              children: a,
              className: l,
              color: u = "primary",
              srLabel: d,
              ref: p,
            } = e,
            f = (0, o.A)(e, S);
          const m = s()(v, l),
            h = "number" === n ? "ol" : "ul";
          return i.createElement(
            A,
            (0, r.A)({}, f, {
              component: h,
              className: m,
              "aria-label": d,
              ref: p,
            }),
            i.Children.map(a, (e) =>
              (0, i.cloneElement)(
                e,
                (0, c.A)(
                  (0, c.A)(
                    {
                      markerColor: e.props.markerColor || t || u,
                      markerType: n,
                    },
                    f
                  ),
                  {},
                  { color: e.props.color || u }
                )
              )
            )
          );
        };
        return (e.displayName = "TextList"), e;
      })();
      const C = ["markerColor", "markerType", "className", "children", "ref"];
      var T = (function () {
        const e = (e) => {
          let {
              markerColor: t,
              markerType: n = "dot",
              className: a,
              children: l,
              ref: c,
            } = e,
            h = (0, o.A)(e, C);
          const v = s()(g, a);
          return i.createElement(
            A,
            (0, r.A)({}, h, { className: v, component: "li", ref: c }),
            (() => {
              switch (n) {
                case "number":
                  return i.createElement("span", {
                    className: `${g}-number-marker`,
                    "aria-hidden": !0,
                  });
                case "check": {
                  const e = (() => {
                      const { size: e } = h;
                      switch (e) {
                        case "xs":
                          return d.A;
                        case "s":
                          return p.A;
                        case "l":
                          return m.A;
                        default:
                          return f.A;
                      }
                    })(),
                    n = (0, u.A)(b, t) ? "currentColor" : t,
                    r = s()(`${g}-check-marker`, {
                      [`${g}-check-marker--color-${t}`]: (0, u.A)(b, t),
                    });
                  return i.createElement(
                    "span",
                    { className: r, "aria-hidden": !0 },
                    i.createElement(e, { color: n })
                  );
                }
                default:
                  return i.createElement(
                    "span",
                    { className: `${g}-dot-marker`, "aria-hidden": !0 },
                    "•"
                  );
              }
            })(),
            l
          );
        };
        return (e.displayName = "TextListItem"), e;
      })();
    },
    17376(e, t, n) {
      n.d(t, { Y: () => m, s: () => p });
      var r = n(58168),
        o = n(80045),
        i = n(96540),
        a = n(46942),
        s = n.n(a);
      const l = "andes-visually-hidden",
        c = l,
        u = `${l}-focusable`,
        d = ["children", "component"];
      var p = (e) => {
        let t = e.children,
          n = e.component,
          a = void 0 === n ? "span" : n,
          s = (0, o.A)(e, d);
        return i.createElement(a, (0, r.A)({ className: c }, s), t);
      };
      const f = ["children", "component", "className"];
      var m = (e) => {
        let t = e.children,
          n = e.component,
          a = void 0 === n ? "button" : n,
          l = e.className,
          c = (0, o.A)(e, f);
        return i.createElement(a, (0, r.A)({ className: s()(u, l) }, c), t);
      };
    },
    4991(e, t, n) {
      n.d(t, { A: () => c });
      var r = n(96540);
      const o = () => null,
        i = [
          { domain: "mercadolibre.com.ar", id: "MLA" },
          { domain: "mercadolibre.com.bo", id: "MBO" },
          { domain: "mercadolibre.com.mx", id: "MLM" },
          { domain: "mercadolivre.com.br", id: "MLB" },
          { domain: "mercadolibre.com.co", id: "MCO" },
          { domain: "mercadolibre.com.pe", id: "MPE" },
          { domain: "mercadolibre.cl", id: "MLC" },
          { domain: "mercadolibre.co.cr", id: "MCR" },
          { domain: "mercadolibre.com.do", id: "MRD" },
          { domain: "mercadolibre.com.ec", id: "MEC" },
          { domain: "mercadolibre.com.gt", id: "MGT" },
          { domain: "mercadolibre.com.hn", id: "MHN" },
          { domain: "mercadolibre.com.ni", id: "MNI" },
          { domain: "mercadolibre.com.pa", id: "MPA" },
          { domain: "mercadolibre.com.py", id: "MPY" },
          { domain: "mercadolibre.com.sv", id: "MSV" },
          { domain: "mercadolibre.com.uy", id: "MLU" },
          { domain: "mercadolibre.com.ve", id: "MLV" },
        ];
      function a() {
        var e;
        return null ===
          (e = i.find((e) => window.location.hostname.includes(e.domain))) ||
          void 0 === e
          ? void 0
          : e.id;
      }
      i.map((e) => e.id);
      var s = n(74848);
      const l = (e, t, n) =>
          e && t ? (n ? "enabled" : "enabled_but_no_data_layer") : "disabled",
        c = (e) => {
          let t = e.containerId,
            n = void 0 === t ? null : t,
            i = e.enabled,
            c = void 0 === i || i,
            u = e.dataLayer,
            d = void 0 === u ? null : u;
          return (
            (0, r.useEffect)(() => {
              window.WMANS &&
                window.WMANS.recordCount(
                  (function (e) {
                    return `application.signals.growth_sgn_gtm_lib.${e}`;
                  })("vpp_gtm_component.loaded.v1"),
                  1,
                  null,
                  {
                    site_id: a(),
                    status: l(c, n, d),
                    signals_data_loaded: !(
                      null == d || !d.group_id_by_provider
                    ),
                  }
                );
            }, [n, c, d]),
            (0, s.jsx)(o, {
              id: n,
              dataLayer: d ? [d] : [],
              disabled: !c || !n,
            })
          );
        };
    },
    45955(e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Qualtrics = void 0);
      const r = n(74848),
        o = n(36127);
      t.Qualtrics = ({ interceptId: e, embeddedData: t }) =>
        (0, r.jsx)(o.Qualtrics, { interceptId: e, embeddedData: t });
    },
    97573(e, t, n) {
      t.Qualtrics = void 0;
      const r = n(74848);
      t.Qualtrics = ({ interceptId: e, children: t }) =>
        (0, r.jsxs)(r.Fragment, {
          children: [t, (0, r.jsx)("div", { id: e })],
        });
    },
    36127(e, t, n) {
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Qualtrics = void 0);
      const o = n(74848),
        i = r(n(3459)),
        a = n(66482),
        s = n(1218),
        l = n(97573);
      t.Qualtrics = ({ interceptId: e, embeddedData: t }) => {
        const n = e.replace("_", "").toLowerCase();
        return (0, o.jsxs)(l.Qualtrics, {
          interceptId: e,
          children: [
            !!t &&
              (0, o.jsx)(a.Script, {
                children: `\n          window.${s.namespace} = ${(0, i.default)(
                  t
                )};\n      `,
              }),
            (0, o.jsx)(a.Script, {
              priority: 150,
              children: `\n    (function () {\n      var g = function (e, h, f, g) {\n        this.get = function (a) {\n          for (var a = a + '=', c = document.cookie.split(';'), b = 0, e = c.length; b < e; b++) {\n            for (var d = c[b]; ' ' == d.charAt(0); ) d = d.substring(1, d.length);\n            if (0 == d.indexOf(a)) return d.substring(a.length, d.length);\n          }\n          return null;\n        };\n        this.set = function (a, c) {\n          var b = '',\n            b = new Date();\n          b.setTime(b.getTime() + 6048e5);\n          b = '; expires=' + b.toGMTString();\n          document.cookie = a + '=' + c + b + '; path=/; ';\n        };\n        this.check = function () {\n          var a = this.get(f);\n          if (a) a = a.split(':');\n          else if (100 != e)\n            'v' == h && (e = Math.random() >= e / 100 ? 0 : 100),\n              (a = [h, e, 0]),\n              this.set(f, a.join(':'));\n          else return !0;\n          var c = a[1];\n          if (100 == c) return !0;\n          switch (a[0]) {\n            case 'v':\n              return !1;\n            case 'r':\n              return (c = a[2] % Math.floor(100 / c)), a[2]++, this.set(f, a.join(':')), !c;\n          }\n          return !0;\n        };\n        this.go = function () {\n          if (this.check()) {\n            var a = document.createElement('script');\n            a.type = 'text/javascript';\n            a.src = g;\n            document.body && document.body.appendChild(a);\n          }\n        };\n        this.start = function () {\n          var t = this;\n          'complete' !== document.readyState\n            ? window.addEventListener\n              ? window.addEventListener(\n                  'load',\n                  function () {\n                    t.go();\n                  },\n                  !1\n                )\n              : window.attachEvent &&\n                window.attachEvent('onload', function () {\n                  t.go();\n                })\n            : t.go();\n        };\n      };\n      try {\n        new g(\n          100,\n          'r',\n          'QSI_S_${e}',\n          'https://${n}-mercadolibre.siteintercept.qualtrics.com/SIE/?Q_ZID=${e}'\n        ).start();\n      } catch (i) {}\n    })();\n    `,
            }),
          ],
        });
      };
    },
    1218(e, t) {
      (t.namespace = void 0), (t.namespace = "qualtricsEmbeddedData");
    },
    2569(e, t, n) {
      t.l_ = void 0;
      var r = n(45955);
      Object.defineProperty(t, "l_", {
        enumerable: !0,
        get: function () {
          return r.Qualtrics;
        },
      });
      var o = n(80580);
    },
    80580(e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useQualtrics = void 0);
      const r = n(96540),
        o = n(1218);
      t.useQualtrics = () => {
        const e = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            const t = () => {
              e.current = window.QSI;
            };
            return (
              window.addEventListener("qsi_js_loaded", t, !1),
              () => window.removeEventListener("qsi_js_loaded", t)
            );
          }),
          {
            QSI: e.current,
            getIntercept: async (t) =>
              e.current ? await e.current.API.getIntercept(t) : null,
            getEmbeddedData: () => window[o.namespace],
            setEmbeddedData: (e) => {
              window[o.namespace] = e;
            },
          }
        );
      };
    },
    87196(e, t, n) {
      n.d(t, { A: () => i });
      var r = n(15502),
        o = n(74848);
      const i = ({ deeplink: e, redirectUrl: t = null }) => {
        const n = !!t;
        return (0, o.jsx)(r.e, {
          children: `\n      window.addEventListener('load', function () {\n          var hasRedirectUrl = ${n};\n          if (hasRedirectUrl) {\n            setTimeout(function() {\n              window.location.replace('${t}');\n            }, 25);\n          }\n          window.location.href = '${e}';\n         });\n      `,
        });
      };
    },
    3459(e) {
      var t = (function () {
          for (
            var e = crypto.getRandomValues(new Uint8Array(16)), t = "", n = 0;
            n < 16;
            ++n
          )
            t += e[n].toString(16);
          return t;
        })(),
        n = new RegExp(
          '(\\\\)?"@__(F|R|D|M|S|A|U|I|B|L)-' + t + '-(\\d+)__@"',
          "g"
        ),
        r = /\{\s*\[native code\]\s*\}/g,
        o = /function.*?\(/,
        i = /.*?=>.*?/,
        a = /[<>\/\u2028\u2029]/g,
        s = /<\/script[^>]*>/gi,
        l = ["*", "async"],
        c = {
          "<": "\\u003C",
          ">": "\\u003E",
          "/": "\\u002F",
          "\u2028": "\\u2028",
          "\u2029": "\\u2029",
        };
      function u(e) {
        return c[e];
      }
      e.exports = function e(c, d) {
        d || (d = {}),
          ("number" != typeof d && "string" != typeof d) || (d = { space: d });
        var p,
          f = [],
          m = [],
          h = [],
          v = [],
          g = [],
          b = [],
          y = [],
          E = [],
          w = [],
          A = [];
        function _(e, t) {
          var n = e.toString();
          if (r.test(n))
            throw new TypeError("Serializing native function: " + e.name);
          if (
            (t &&
              !0 !== t.unsafe &&
              (n = (function (e) {
                return (e = (e = e.replace(s, function (e) {
                  return e
                    .replace(/</g, "\\u003C")
                    .replace(/\//g, "\\u002F")
                    .replace(/>/g, "\\u003E");
                })).replace(/\u2028/g, "\\u2028")).replace(
                  /\u2029/g,
                  "\\u2029"
                );
              })(n)),
            o.test(n))
          )
            return n;
          if (i.test(n)) return n;
          var a = n.indexOf("("),
            c = n
              .substr(0, a)
              .trim()
              .split(" ")
              .filter(function (e) {
                return e.length > 0;
              });
          return c.filter(function (e) {
            return -1 === l.indexOf(e);
          }).length > 0
            ? (c.indexOf("async") > -1 ? "async " : "") +
                "function" +
                (c.join("").indexOf("*") > -1 ? "*" : "") +
                n.substr(a)
            : n;
        }
        return (
          d.ignoreFunction && "function" == typeof c && (c = void 0),
          void 0 === c
            ? String(c)
            : ((p =
                d.isJSON && !d.space
                  ? JSON.stringify(c)
                  : JSON.stringify(
                      c,
                      d.isJSON
                        ? null
                        : function (e, n) {
                            if (
                              (d.ignoreFunction &&
                                (function (e) {
                                  var t = [];
                                  for (var n in e)
                                    "function" == typeof e[n] && t.push(n);
                                  for (var r = 0; r < t.length; r++)
                                    delete e[t[r]];
                                })(n),
                              !n && void 0 !== n && n !== BigInt(0))
                            )
                              return n;
                            var r = this[e],
                              o = typeof r;
                            if ("object" === o) {
                              if (r instanceof RegExp)
                                return (
                                  "@__R-" + t + "-" + (m.push(r) - 1) + "__@"
                                );
                              if (r instanceof Date)
                                return (
                                  "@__D-" + t + "-" + (h.push(r) - 1) + "__@"
                                );
                              if (r instanceof Map)
                                return (
                                  "@__M-" + t + "-" + (v.push(r) - 1) + "__@"
                                );
                              if (r instanceof Set)
                                return (
                                  "@__S-" + t + "-" + (g.push(r) - 1) + "__@"
                                );
                              if (
                                Array.isArray(r) &&
                                Object.keys(r).length !== r.length
                              )
                                return (
                                  "@__A-" + t + "-" + (b.push(r) - 1) + "__@"
                                );
                              if (r instanceof URL)
                                return (
                                  "@__L-" + t + "-" + (A.push(r) - 1) + "__@"
                                );
                            }
                            return "function" === o
                              ? "@__F-" + t + "-" + (f.push(r) - 1) + "__@"
                              : "undefined" === o
                              ? "@__U-" + t + "-" + (y.push(r) - 1) + "__@"
                              : "number" !== o || isNaN(r) || isFinite(r)
                              ? "bigint" === o
                                ? "@__B-" + t + "-" + (w.push(r) - 1) + "__@"
                                : n
                              : "@__I-" + t + "-" + (E.push(r) - 1) + "__@";
                          },
                      d.space
                    )),
              "string" != typeof p
                ? String(p)
                : (!0 !== d.unsafe && (p = p.replace(a, u)),
                  0 === f.length &&
                  0 === m.length &&
                  0 === h.length &&
                  0 === v.length &&
                  0 === g.length &&
                  0 === b.length &&
                  0 === y.length &&
                  0 === E.length &&
                  0 === w.length &&
                  0 === A.length
                    ? p
                    : p.replace(n, function (t, n, r, o) {
                        if (n) return t;
                        if ("D" === r) {
                          var i = String(h[o].toISOString());
                          if (
                            !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(
                              i
                            )
                          )
                            throw new TypeError("Invalid Date ISO string");
                          return 'new Date("' + i + '")';
                        }
                        if ("R" === r) {
                          var a = String(m[o].flags).replace(
                            /[^gimsuydv]/g,
                            ""
                          );
                          return (
                            "new RegExp(" + e(m[o].source) + ', "' + a + '")'
                          );
                        }
                        return "M" === r
                          ? "new Map(" + e(Array.from(v[o].entries()), d) + ")"
                          : "S" === r
                          ? "new Set(" + e(Array.from(g[o].values()), d) + ")"
                          : "A" === r
                          ? "Array.prototype.slice.call(" +
                            e(Object.assign({ length: b[o].length }, b[o]), d) +
                            ")"
                          : "U" === r
                          ? "undefined"
                          : "I" === r
                          ? E[o]
                          : "B" === r
                          ? 'BigInt("' + w[o] + '")'
                          : "L" === r
                          ? "new URL(" + e(A[o].toString(), d) + ")"
                          : _(f[o], d);
                      })))
        );
      };
    },
    48646(e, t, n) {
      var r = n(69565),
        o = n(28551),
        i = n(1767),
        a = n(50851);
      e.exports = function (e, t) {
        (t && "string" == typeof e) || o(e);
        var n = a(e);
        return i(o(void 0 !== n ? r(n, e) : e));
      };
    },
    74423(e, t, n) {
      var r = n(46518),
        o = n(19617).includes,
        i = n(79039),
        a = n(6469),
        s = i(function () {
          return !Array(1).includes();
        }),
        l = i(function () {
          return [, 1].includes(void 0, 1);
        });
      r(
        { target: "Array", proto: !0, forced: s || l },
        {
          includes: function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
        a("includes");
    },
    22489(e, t, n) {
      var r = n(46518),
        o = n(69565),
        i = n(79306),
        a = n(28551),
        s = n(1767),
        l = n(19462),
        c = n(96319),
        u = n(96395),
        d = n(9539),
        p = n(30684),
        f = n(84549),
        m = !u && !p("filter", function () {}),
        h = !u && !m && f("filter", TypeError),
        v = u || m || h,
        g = l(function () {
          for (
            var e, t, n = this.iterator, r = this.predicate, i = this.next;
            ;

          ) {
            if (((e = a(o(i, n))), (this.done = !!e.done))) return;
            if (((t = e.value), c(n, r, [t, this.counter++], !0))) return t;
          }
        });
      r(
        { target: "Iterator", proto: !0, real: !0, forced: v },
        {
          filter: function (e) {
            a(this);
            try {
              i(e);
            } catch (e) {
              d(this, "throw", e);
            }
            return h ? o(h, this, e) : new g(s(this), { predicate: e });
          },
        }
      );
    },
    30531(e, t, n) {
      var r = n(46518),
        o = n(69565),
        i = n(79306),
        a = n(28551),
        s = n(1767),
        l = n(48646),
        c = n(19462),
        u = n(9539),
        d = n(96395),
        p = n(30684),
        f = n(84549);
      var m = !d && !p("flatMap", function () {}),
        h = !d && !m && f("flatMap", TypeError),
        v =
          d ||
          m ||
          h ||
          (function () {
            try {
              var e = Iterator.prototype.flatMap.call(
                new Map([[4, 5]]).entries(),
                function (e) {
                  return e;
                }
              );
              e.next(), e.return();
            } catch (e) {
              return !0;
            }
          })(),
        g = c(function () {
          for (var e, t, n = this.iterator, r = this.mapper; ; ) {
            if ((t = this.inner))
              try {
                if (!(e = a(o(t.next, t.iterator))).done) return e.value;
                this.inner = null;
              } catch (e) {
                u(n, "throw", e);
              }
            if (((e = a(o(this.next, n))), (this.done = !!e.done))) return;
            try {
              this.inner = l(r(e.value, this.counter++), !1);
            } catch (e) {
              u(n, "throw", e);
            }
          }
        });
      r(
        { target: "Iterator", proto: !0, real: !0, forced: v },
        {
          flatMap: function (e) {
            a(this);
            try {
              i(e);
            } catch (e) {
              u(this, "throw", e);
            }
            return h
              ? o(h, this, e)
              : new g(s(this), { mapper: e, inner: null });
          },
        }
      );
    },
    7588(e, t, n) {
      var r = n(46518),
        o = n(69565),
        i = n(72652),
        a = n(79306),
        s = n(28551),
        l = n(1767),
        c = n(9539),
        u = n(84549)("forEach", TypeError);
      r(
        { target: "Iterator", proto: !0, real: !0, forced: u },
        {
          forEach: function (e) {
            s(this);
            try {
              a(e);
            } catch (e) {
              c(this, "throw", e);
            }
            if (u) return o(u, this, e);
            var t = l(this),
              n = 0;
            i(
              t,
              function (t) {
                e(t, n++);
              },
              { IS_RECORD: !0 }
            );
          },
        }
      );
    },
    25440(e, t, n) {
      var r = n(18745),
        o = n(69565),
        i = n(79504),
        a = n(89228),
        s = n(79039),
        l = n(28551),
        c = n(94901),
        u = n(20034),
        d = n(91291),
        p = n(18014),
        f = n(655),
        m = n(67750),
        h = n(57829),
        v = n(55966),
        g = n(2478),
        b = n(61034),
        y = n(56682),
        E = n(78227)("replace"),
        w = Math.max,
        A = Math.min,
        _ = i([].concat),
        x = i([].push),
        S = i("".indexOf),
        O = i("".slice),
        C = function (e) {
          return void 0 === e ? e : String(e);
        },
        T = "$0" === "a".replace(/./, "$0"),
        L = !!/./[E] && "" === /./[E]("a", "$0");
      a(
        "replace",
        function (e, t, n) {
          var i = L ? "$" : "$0";
          return [
            function (e, n) {
              var r = m(this),
                i = u(e) ? v(e, E) : void 0;
              return i ? o(i, e, r, n) : o(t, f(r), e, n);
            },
            function (e, o) {
              var a = l(this),
                s = f(e),
                u = c(o);
              u || (o = f(o));
              var m = f(b(a));
              if (
                "string" == typeof o &&
                !~S(o, i) &&
                !~S(o, "$<") &&
                !~S(m, "y")
              ) {
                var v = n(t, a, s, o);
                if (v.done) return v.value;
              }
              var E,
                T = !!~S(m, "g");
              T && ((E = !!~S(m, "u") || !!~S(m, "v")), (a.lastIndex = 0));
              for (var L, N = []; null !== (L = y(a, s)) && (x(N, L), T); ) {
                "" === f(L[0]) && (a.lastIndex = h(s, p(a.lastIndex), E));
              }
              for (var k = "", $ = 0, I = 0; I < N.length; I++) {
                for (
                  var R,
                    M = f((L = N[I])[0]),
                    P = w(A(d(L.index), s.length), 0),
                    D = [],
                    B = 1;
                  B < L.length;
                  B++
                )
                  x(D, C(L[B]));
                var j = L.groups;
                if (u) {
                  var H = _([M], D, P, s);
                  void 0 !== j && x(H, j), (R = f(r(o, void 0, H)));
                } else R = g(M, s, P, D, j, o);
                P >= $ && ((k += O(s, $, P) + R), ($ = P + M.length));
              }
              return k + O(s, $);
            },
          ];
        },
        !!s(function () {
          var e = /./;
          return (
            (e.exec = function () {
              var e = [];
              return (e.groups = { a: "7" }), e;
            }),
            "7" !== "".replace(e, "$<a>")
          );
        }) ||
          !T ||
          L
      );
    },
    66482(e, t, n) {
      const r = n(99378);
      e.exports = r;
    },
    25523(e, t, n) {
      n.d(t, { z: () => r });
      const r = () => null;
    },
    18988(e, t, n) {
      n.r(t), n.d(t, { Image: () => k, default: () => k });
      var r = n(74848),
        o = n(96540),
        i = (n(18111), n(61701), n(70814)),
        a = n(40961),
        s = n(35657),
        l = n(7505),
        c = n(22692),
        u = n(99378);
      const d = (e) => {
          let {
            ssrImageElement: t,
            srcWithoutPrefix: n,
            lazyPolyfill: r,
            srcFallback: i,
            placeholder: a,
            preload: s,
            lazyload: l,
            ...c
          } = e;
          return (0, o.createElement)("img", c);
        },
        p = () => {},
        f = /^data:image\/[a-z]+;base64,/,
        m = /\.|\//g,
        h =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        v = "n-img-blur",
        g = { off: "eager", on: "lazy" };
      function b(e) {
        return document.body.querySelector(`img[data-id="${e}"]`);
      }
      const y = 16777619,
        E = 2166136261;
      function w(e) {
        let { placeholder: t, srcWithoutPrefix: n } = e;
        if (t && !(0, s.kP)().outdated && (0, l.rk)(n))
          return "blur" === t
            ? `${v}-${n.replace(m, "-")}`
            : f.test(t)
            ? `${v}-${(function (e) {
                let t = E,
                  n = E;
                for (let r = 0; r < e.length; r += 1) {
                  const o = e.charCodeAt(r);
                  (t ^= o), (t = (t * y) >>> 0), (n ^= o), (n = (n * y) >>> 0);
                }
                return n.toString(16) + t.toString(16);
              })(t)}`
            : void 0;
      }
      function A(e, t) {
        if (!t) return e ?? t;
        const n = `${v} ${t}`;
        return e ? `${n} ${e}` : n;
      }
      function _(e) {
        let { src: t, srcSet: n, lazyPolyfill: r, ssrImageElement: o } = e;
        return !r || (o && o.src !== h)
          ? o
            ? {
                src: o.getAttribute("src") ?? void 0,
                srcSet: o.getAttribute("srcset") ?? void 0,
              }
            : { src: t, srcSet: n }
          : { src: h, srcSet: void 0, "data-src": t, "data-srcset": n };
      }
      function x(e) {
        const { className: t, handleBlur: n } = (function (e) {
            const [t, n] = (0, o.useState)(() => {
              const { ssrImageElement: t } = e,
                n = w(e);
              return n && t && !t.classList.contains(n) ? "" : n;
            });
            return {
              className: A(e.className, t),
              handleBlur: (e) => {
                t && e.src !== h && n("");
              },
            };
          })(e),
          { showFallback: r, handleFallback: i } = (function (e) {
            const [t, n] = (0, o.useState)(!1);
            return (
              (0, o.useEffect)(() => {
                t && n(!1);
              }, [e.src, e.srcSet]),
              {
                showFallback: t,
                handleFallback: (r, o) => {
                  t !== r && e.srcFallback !== o.getAttribute("src") && n(r);
                },
              }
            );
          })(e);
        return {
          className: t,
          showFallback: r,
          handleLoad: (t) => {
            n(t.currentTarget), i(!1, t.currentTarget), e.onLoad?.(t);
          },
          handleError: (t) => {
            i(!!e.srcFallback, t.currentTarget), e.onError?.(t);
          },
        };
      }
      const S = "undefined" != typeof IntersectionObserver,
        O = { rootMargin: "360px" };
      function C(e, t) {
        const { src: n, srcSet: r, srcFallback: i } = e,
          a = (function (e) {
            const { "data-id": t, ssrImageElement: n } = e,
              r = (0, o.useRef)(null),
              [i, a] = (0, o.useState)(() => {
                const o = !S || !e.lazyPolyfill || (n && n.src !== h),
                  { lazyLoadCallbacks: i } = window._n.img;
                return (
                  o ||
                    !i?.has(t) ||
                    ((r.current = (0, c.ph)()),
                    i.set(t, async () => {
                      await r.current.promise, a(!0);
                    })),
                  o
                );
              });
            return (
              (0, o.useEffect)(() => {
                if (i) return p;
                if (r.current) return r.current.resolve(), p;
                const e = new IntersectionObserver((t) => {
                  let [n] = t;
                  n.isIntersecting && (e.disconnect(), a(!0));
                }, O);
                return e.observe(b(t)), () => e.disconnect();
              }, []),
              i
            );
          })(e);
        return a
          ? t
            ? { src: i, srcSet: void 0 }
            : { src: n, srcSet: r }
          : { src: h, srcSet: void 0 };
      }
      const T = (e) => {
          const t = x(e),
            n = C(e, t.showFallback);
          return (0, r.jsx)(d, {
            ...e,
            src: n.src,
            srcSet: n.srcSet,
            className: t.className,
            onLoad: t.handleLoad,
            onError: t.handleError,
          });
        },
        L = (e) => {
          let { blurSrc: t, fallbackSrc: n, lazySrc: o, handlerSrc: i } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              t && (0, r.jsx)(u.Script, { inline: !0, src: t }),
              n && (0, r.jsx)(u.Script, { inline: !0, src: n }),
              o && (0, r.jsx)(u.Script, { inline: !0, src: o }),
              i && (0, r.jsx)(u.Script, { inline: !0, src: i }),
            ],
          });
        },
        N = (e) => {
          const t = (0, o.useRef)(!0),
            n = x(e),
            i = C(e, n.showFallback),
            {
              ssrImageElement: { dataset: a },
              "data-id": s,
            } = e,
            {
              blurSrc: l,
              fallbackSrc: c,
              lazySrc: p,
              handlerSrc: f,
              inlinePolyfill: m,
            } = a;
          return (
            (0, o.useEffect)(() => {
              (t.current = !1), window._n.img.listeners?.get(s)?.();
            }, []),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(L, {
                  blurSrc: l,
                  fallbackSrc: c,
                  lazySrc: p,
                  handlerSrc: f,
                }),
                (0, r.jsx)(d, {
                  ...e,
                  ...(t.current ? _(e) : i),
                  className: n.className,
                  onLoad: n.handleLoad,
                  onError: n.handleError,
                  "data-blurclassname": a.blurclassname,
                  "data-srcfallback": a.srcfallback,
                  "data-blur-src": l,
                  "data-fallback-src": c,
                  "data-lazy-src": p,
                  "data-handler-src": f,
                  "data-inline-polyfill": m,
                }),
                m && (0, r.jsx)(u.Script, { children: `_n.img.h("${s}");` }),
              ],
            })
          );
        },
        k = (function (e) {
          return (t) => {
            const n = (0, o.useId)(),
              l = (function (e) {
                let { src: t, srcSet: n, srcFallback: r } = e;
                const a = (0, i.useAssetsPrefix)();
                return (0, o.useMemo)(
                  () => ({
                    src: t && a.join(t),
                    srcSet: n
                      ?.split(",")
                      .map((e) => {
                        const [t, n = ""] = e.trim().split(" ");
                        return `${a.join(t)} ${n}`.trim();
                      })
                      .join(", "),
                    srcFallback: r && a.join(r),
                    srcWithoutPrefix: t,
                  }),
                  [a, t, r, n]
                );
              })(t);
            if (!l.src) return null;
            const [c, u] = (function (e, t) {
              const { lazyload: n = "on", decoding: r = "async" } = e,
                o = (0, s.kP)(),
                i = e.preload ? "sync" : r,
                a = e.loading || g[n];
              return o.outdated
                ? [{ decoding: i, loading: a }, d]
                : [
                    {
                      decoding: i,
                      loading: a,
                      lazyPolyfill: !o.imgLoading && "lazy" === a,
                      is: o.customElements.builtIn ? "n-img" : void 0,
                    },
                    t,
                  ];
            })(t, e);
            return (
              (function (e, t) {
                e.preload &&
                  (0, a.preload)(t.src, {
                    as: "image",
                    imageSrcSet: t.srcSet,
                    imageSizes: e.sizes,
                    fetchPriority:
                      "string" == typeof e.preload
                        ? e.preload
                        : e.fetchPriority,
                    crossOrigin: e.crossOrigin,
                    nonce: e.nonce,
                    referrerPolicy: e.referrerPolicy,
                    type: e.type,
                  });
              })(t, l),
              (0, r.jsx)(u, {
                ...t,
                "data-id": n,
                src: l.src,
                srcSet: l.srcSet,
                srcFallback: l.srcFallback,
                srcWithoutPrefix: l.srcWithoutPrefix,
                decoding: c.decoding,
                is: c.is,
                lazyPolyfill: c.lazyPolyfill,
                loading: c.loading,
              })
            );
          };
        })((e) => {
          const { "data-id": t } = e,
            n = (0, o.useRef)(!0),
            i = (0, o.useRef)(n.current ? b(t) : null);
          return (
            (n.current = !1),
            i.current
              ? (0, r.jsx)(N, { ...e, ssrImageElement: i.current })
              : (0, o.createElement)(T, e)
          );
        });
    },
    99378(e, t, n) {
      n.r(t), n.d(t, { Script: () => d, default: () => d });
      var r = n(96540),
        o = n(35657),
        i = n(7505),
        a = n(74848),
        s = n(40961),
        l = n(70814);
      const c = "anonymous",
        u = (e) => {
          let {
            __skipAssetValidation: t,
            children: n,
            inline: r,
            preload: u,
            ssrOnly: d,
            ...p
          } = e;
          const { async: f, src: m, crossOrigin: h = c } = p,
            v = (0, l.useAssetsPrefix)(),
            g = (0, o.q4)(),
            b = null === h ? void 0 : h,
            y = r && n,
            E = y ? void 0 : m && (t ? m : v.join(m));
          E &&
            u &&
            (0, s.preload)(E, {
              as: "script",
              type: "text/javascript",
              fetchPriority: "string" == typeof u ? u : p.fetchPriority,
              crossOrigin: b,
              integrity: p.integrity,
              referrerPolicy: p.referrerPolicy,
              nonce: g,
            });
          const w = E ? !p.defer : void 0,
            A = E && d && !p.onLoad && !p.onError;
          return (0, a.jsx)("script", {
            ...p,
            nonce: "string" == typeof g && (0, i.oc)() ? "" : g,
            crossOrigin: E ? b : void 0,
            async: A || ("boolean" == typeof f ? f : w),
            src: E,
            "data-src": y ? m : void 0,
            suppressHydrationWarning: "nextjs" === (0, o.Xe)(),
            children: n,
          });
        },
        d = (function (e) {
          return (t) => {
            const { children: n, src: a, ssrOnly: s } = t;
            if ((!a && !n) || (0, o.kP)().outdated) return null;
            return a &&
              ((s && (0, i.oc)()) ||
                (function (e) {
                  return (
                    !e.__skipAssetValidation &&
                    !!e.src &&
                    (0, o.Ul)().mainAssetsNames.scripts.has(e.src)
                  );
                })(t))
              ? null
              : (0, r.createElement)(e, t);
          };
        })((e) => {
          const { children: t, inline: n, src: o } = e,
            i = !(!n || !o),
            a = (0, r.useRef)(!0),
            s = (0, r.useRef)(
              a.current &&
                i &&
                document.querySelector(`script[data-src="${o}"]`)?.textContent
            );
          return (
            (a.current = !1), (0, r.createElement)(u, e, i ? s.current : t)
          );
        });
    },
    20551(e, t, n) {
      n.d(t, {
        ok: () => s,
        gs: () => x,
        wS: () => _,
        Ns: () => m,
        oR: () => d,
        op: () => c,
        AA: () => a,
        rK: () => u,
        ne: () => Y,
        Ri: () => v,
        q2: () => q,
        yq: () => f,
        VW: () => T,
        mm: () => l,
        bj: () => y,
        sx: () => P,
        wD: () => H,
      });
      var r = n(46942),
        o = n.n(r),
        i = n(89379);
      n(74848), n(55364), n(58156), n(62193), n(99418);
      const a = {
          DESKTOP_MAX_CHARS: 750,
          MOBILE_MAX_CHARS: 250,
          MOBILE_QADB_MAX_CHARS: 260,
          onlyLetterAndHyphenRegex: "[a-zA-Z-]+",
          naturalUrlPIRegex:
            "([0-9]+(-(*))?)-(([u|U][d|D][a|A])|([n|N][v|V][a|A]))",
          itemOrProductIdRegex: "[m|M][a-zA-Z]{2}[u|U]?[0-9]+",
          itemOrProductIdByGroupRegex: "([m|M][a-zA-Z]{2}[u|U]?)([0-9]+)",
          vipItemIdAndTitleRegex: "([m|M][a-zA-Z]{2}[u|U]?)-([0-9]+)(*)",
          vipItemIdRegex: "([m|M][a-zA-Z]{2})-([0-9]+)",
          pdpItemIdRegex: "([m|M][a-zA-Z]{2})([0-9]+)",
          upItemIdRegex: "([m|M][a-zA-Z]{2}[u|U])([0-9]+)",
          vipItemIdFromUrl: "(/)([m|M][a-zA-Z]{2})-([0-9]+)",
          pdpItemIdFromUrl: "(/[p|P]/)([m|M][a-zA-Z]{2})([0-9]+)",
          upItemIdFromUrl: "(/up/)([m|M][a-zA-Z]{2}[u|U])([0-9]+)",
          quotationIdRegex: "[0-9]+",
          isBotRegexUserAgent:
            /(bot|curl|postman|node|python|crawl|wget|lwp|bbbike|java|spider|slurp|feedburner|googleimageproxy|google web preview|whatsapp|riddler|scrapy|facebookexternalhit|ruby|nuclei|vivaldi|mediapartners-google|apis-google|feedfetcher-google|duplexweb-google|google vavicon|googleweblight|go-http-client)/i,
          isTrustedBotsRegexUserAgent: /(googlebot|bingbot|AdsBot-Google)/i,
          isBotRegexReferer: /robots\.txt/i,
          userAgentFacebookRegex: /FBAN\/FBIOS|FB/,
          userAgentInstagramRegex: /Instagram/,
          userAgentTwitterRegex: /Twitter/,
          refererTwitter: "https://t.co/",
          refererYoutube: "https://www.youtube.com/",
          forceQueryParam: "force_app",
          modals: {
            WARRANTY: "warranty",
            RETURNS: "returns",
            CBT: "cbt",
            CBT_TAXES: "cbt_taxes",
            SHIPPING: "shipping",
            PAYMENTS: "payments",
            PAYMENTS_NO_MP: "payments_no_mp",
            CREDITS_ACTIVATION: "credits_activation",
            CREDITS_ACQUISITION: "credits_acquisition",
            ADDITIONAL_INFO: "additional_info",
            M_COINS: "m_coins",
            LOYALTY: "loyalty",
            BUY_PROTECTED: "buy_protected",
            FCUSTAXES: "fcus_taxes",
            SHIPPING_CALCULATOR: "shipping_calculator",
            VEHICLE_CONDITION_DETAILS: "vehicle_condition_details",
            PRODUCTS_VARIATION: "buy-multiple-variations",
          },
          devices: { MOBILE: "mobile", DESKTOP: "desktop" },
          actionTypes: { LINK: "link", BUTTON: "button" },
          paymentPromotionsActionTypes: {
            LINK: "link",
            BUTTON: "button",
            CHEVRON: "chevron",
            SPLIT_PAYMENTS: "split_payments",
          },
          widgetTypes: {
            acquisition: "acquisition",
            activation: "activation",
            splitPayments: "split_payment_methods",
            genericWidget: "generic_widget",
          },
          osName: { ANDROID: "android", IOS: "ios" },
          icon: { RIGHT: "right", LEFT: "left" },
          INSURTECH_SHOWED: "showed",
          INSURTECH_NO_WARRANTY_SELECTED: "insurance_option_row_0",
          UUID_FLEXIBLE_REGEX: "^\\w{8}-\\w{4}-\\w{4}-\\w{4}-\\w{12}",
          UTM_PARAMS: [
            "utm_campaign",
            "utm_source",
            "utm_medium",
            "utm_term",
            "utm_content",
          ],
          QUALTRICS_ID: "ZN_efi6I3nkl8bGcTA",
          API_BASE_PATH: "/p/api/",
          DEVICE_TYPE: {
            DESKTOP: "desktop",
            TABLET: "tablet",
            MOBILE: "mobile",
          },
          VISIBILITY: { VISIBLE: "VISIBLE", HIDDEN: "HIDDEN" },
          LAYOUT: {
            PDP: "pdp",
            UPP: "upp",
            VIP_CORE: "vip-core",
            VIP_MOTORS: "vip-motors",
            VIP_SERVICES: "vip-services",
            VIP_REAL_ESTATE: "vip-real-estate",
            PORTAL_INMOBILIARIO: "vip-real-estate-ltr-multifamily",
            QUOTATION: "vip-real-estate-devs-quotable",
          },
          OWNERSHIPS: {
            VPP: "vpp",
            APPAREL: "apparel",
            CONSUMER_ELECTRONICS: "consumer-electronics",
            REVIEWS: "reviews",
            COMPATS: "compats",
            VIS: "vis",
            CLIPS: "clips",
            VERTICALS: "verticals",
          },
        },
        s = {
          SIZES: {
            XXXSMALL: 10,
            XXSMALL: 12,
            XSMALL: 14,
            SMALL: 16,
            MEDIUM: 18,
            LARGE: 20,
            XLARGE: 24,
            XXLARGE: 28,
          },
          WEIGHTS: {
            LIGHT: "LIGHT",
            REGULAR: "REGULAR",
            SEMIBOLD: "SEMIBOLD",
            BOLD: "BOLD",
          },
        },
        l = (e, t) => {
          const n =
            "string" == typeof e
              ? e
              : (null == e ? void 0 : e.font_size) || false;
          return o()({ [`ui-pdp-size--${n}`]: n }, t);
        },
        c = (e, t) => {
          const n =
            "string" == typeof e ? e : (null == e ? void 0 : e.color) || false;
          return o()({ [`ui-pdp-color--${n}`]: n }, t);
        },
        u = (e, t) => {
          const n =
            "string" == typeof e
              ? e
              : (null == e ? void 0 : e.font_family) || false;
          return o()({ [`ui-pdp-family--${n}`]: n }, t);
        },
        d = (e, t) => {
          const n =
            "string" == typeof e
              ? e
              : (e && (e.bgColor || e.background_color)) || false;
          return o()({ [`ui-pdp-background-color--${n}`]: n }, t);
        },
        p = "m",
        f = (e, t) => {
          if (!e) return t;
          const { top: n, bottom: r, left: i, right: a } = e;
          return o()(
            {
              [`${p}t-${n}`]: n,
              [`${p}b-${r}`]: r,
              [`${p}l-${i}`]: i,
              [`${p}r-${a}`]: a,
            },
            t
          );
        },
        m = (e) => {
          let {
            alignment: t,
            size: n,
            family: r,
            style: i,
            color: a,
            bg_color: s,
            margin: p,
            className: m,
          } = e;
          return ((e, t) => o()({ [`ui-vpp-text-alignment--${e}`]: e }, t))(
            t,
            d(
              s,
              c(
                a,
                l(
                  n,
                  u(
                    r,
                    ((e, t) => o()({ [`ui-pdp-style--${e}`]: e }, t))(
                      i,
                      f(p, m)
                    )
                  )
                )
              )
            )
          );
        },
        { VISIBILITY: h } = a;
      const v = (e) => {
          const t = new RegExp(`(^|;\\s*)(${e})=([^;]*)`).exec(document.cookie);
          if (t)
            try {
              return { [e]: JSON.parse(t[3]) };
            } catch (n) {
              return { [e]: t[3] };
            }
          return null;
        },
        g =
          ("undefined" == typeof window ||
            !window.document ||
            window.document.createElement,
          (e, t) => {
            try {
              return -1 !== e.indexOf(t);
            } catch (e) {
              return !1;
            }
          }),
        b = g,
        y = g,
        { DESKTOP_MAX_CHARS: E } = a,
        { MOBILE_MAX_CHARS: w } = a,
        { MOBILE_QADB_MAX_CHARS: A } = a,
        _ = {
          DEFAULT: 28,
          MOBILE_DEFAULT: 28,
          ORIGINAL_DEFAULT: 16,
          OTHER_PRODUCT: 14,
          OTHER_SELLERS: { ITEM: 20, LINK: 14, ORIGINAL: 14 },
          PRICE_NOT_SELECTED: { LARGE: 20 },
          PRODUCT_SUBTITLE: { XXSMALL: 12, XSMALL: 14, SMALL: 16, MEDIUM: 18 },
          MEDIA_SUBTITLE: 16,
          MEDIA_SHIPPING: 14,
          MOBILE_MEDIA_SHIPPING: 12,
          PRICE_RESULT: 20,
          ORIGINAL_PRICE_RESULT: 12,
          PAYMENT_ICON: { SMALL: 16 },
          VARIATION_MODAL: 16,
          VARUATION_BOX: 12,
        },
        x = {
          DEFAULT: 18,
          OTHER_SELLERS: { ITEM: 14 },
          PRICE_RESULT: 14,
          MOBILE_PRICE_RESULT: 12,
        },
        S = (e) => {
          const t = Object.keys(e);
          let n = t.length;
          const r = new Array(n);
          for (; n--; ) r[n] = [t[n], e[t[n]]];
          return r;
        },
        O = ["px", "%", "vh", "vw", "em", "rem"],
        C = (e) => {
          if (null == e) return null;
          if ("number" == typeof e) return { value: e, unit: "px" };
          if ("string" != typeof e) return null;
          const t = e.trim(),
            n = parseInt(t, 10);
          if (Number.isNaN(n)) return null;
          const r = t.replace(String(n), "").toLowerCase();
          if (!r) return { value: n, unit: "px" };
          for (const e of O) if (r.startsWith(e)) return { value: n, unit: e };
          return { value: n, unit: "px" };
        },
        T = function (e, t, n, r, o, i) {
          let a =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : 10,
            s =
              arguments.length > 7 && void 0 !== arguments[7]
                ? arguments[7]
                : 0.7;
          return (l, c, u) => {
            if (
              (l === e && (c[t] || c.heightPercentage)) ||
              ("nav:cp:loaded" === l && "mobile" === c.deviceType) ||
              b(
                [
                  "coupons_height",
                  "vip:modal-content:loaded",
                  "nav:cp:updateSize",
                  "vip:shipping-calculator:updateSize",
                  "cart-congrats-height",
                  "vpp:iframe-modal:resize",
                  "vpp:on-demand-iframe:resize",
                ],
                l
              )
            ) {
              const e = "mobile" !== c.deviceType && "mobile" !== i,
                d = parseInt(c[t], 10),
                p = parseInt(c[o], 10),
                f = C(c[t]),
                m = C(c[o]),
                h = document.querySelector(n),
                v = r ? document.querySelector(`${r}`) : null;
              if (
                (c.heightPercentage
                  ? (u.style.height =
                      window.innerHeight * (c.heightPercentage / 100) + "px")
                  : f &&
                    d &&
                    ("px" === f.unit
                      ? (u.style.height = a > 10 ? `${d + a}px` : `${d}px`)
                      : (u.style.height = `${f.value}${f.unit}`)),
                "nav:cp:updateSize" === l && e
                  ? (u.scrolling = "yes")
                  : "vip:shipping-calculator:updateSize" === l &&
                    e &&
                    (u.scrolling = "no"),
                m &&
                  p &&
                  ("px" === m.unit
                    ? ((u.style.width = `${p}px`),
                      null != h && h.style && (h.style.width = `${p}px`))
                    : ((u.style.width = `${m.value}${m.unit}`),
                      null != h &&
                        h.style &&
                        (h.style.width = `${m.value}${m.unit}`))),
                e)
              ) {
                v
                  ? null != h &&
                    h.style &&
                    (h.style.height = `${d + v.clientHeight}px`)
                  : null != h && h.style && (h.style.height = `${d + 5}px`);
                let e = 0;
                if (h) {
                  const t = window.innerHeight;
                  if (r) {
                    const t = h.querySelector(r);
                    e = t ? t.clientHeight : 0;
                  }
                  d < t * s - e &&
                    null != h &&
                    h.style &&
                    (h.style.height = `${d + e + a}px`);
                }
              }
            }
          };
        };
      const L = {
        trackPage: function () {
          let {
            path: e = null,
            experiments: t = null,
            event_data: n = {},
            useBeacon: r = !1,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          if ("function" != typeof melidata) return;
          if (!e) return;
          const o = {};
          melidata("createViewTrack", o),
            melidata("withPath", e, o),
            n && melidata("withData", n, o),
            t && melidata("withExperiments", t, o),
            r && (o.useBeacon = !0),
            melidata("sendTrack", o);
        },
        trackEvent: function () {
          let {
            path: e = null,
            event_data: t = null,
            experiments: n = null,
            useBeacon: r = !1,
            type: o = "event",
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          if ("function" != typeof melidata) return;
          if (!e) return;
          const i = { path: e };
          t && (i.event_data = t),
            n && (i.experiments = n),
            r && (i.useBeacon = !0),
            melidata("cleanAndSend", o, i);
        },
        trackEventWithExperiments: function () {
          let {
            path: e = null,
            event_data: t = null,
            experiments: n = null,
            useBeacon: r = !1,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          if ("function" != typeof melidata) return;
          if (!e) return;
          const o = {};
          melidata("createEventTrack", o),
            melidata("withPath", e, o),
            t && melidata("withData", t, o),
            n && melidata("withExperiments", n, o),
            r && (o.useBeacon = !0),
            melidata("sendTrack", o);
        },
        trackEventOnComponentPrint: (e) => {
          let { path: t = null, event_data: n = null, useBeacon: r = !1 } = e;
          const o = {};
          melidata("createEventTrack", o),
            melidata("withPath", t, o),
            melidata("withData", (0, i.A)({}, n), o),
            r && (o.useBeacon = !0),
            melidata("sendTrack", o, "component_prints");
        },
      };
      const N = {
        trackPage: function () {
          let {
            section: e,
            page: t,
            platform: n,
            dimensions: r,
            custom_dimensions: o,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          if ("undefined" == typeof meli_ga) return;
          if (!e) return;
          const i = ((e, t) => {
            let n = `/${e.toUpperCase()}/${t ? t.toUpperCase() : ""}`.replace(
              /\/{2,}/g,
              "/"
            );
            return n.endsWith("/") || (n += "/"), n;
          })(e, t);
          n && meli_ga("set", "platform", n),
            meli_ga("set", "page", i),
            r &&
              Object.keys(r).length > 0 &&
              Object.keys(r).forEach((e) => {
                meli_ga("set", e, r[e]);
              }),
            o &&
              Object.keys(o).length > 0 &&
              Object.keys(o).forEach((e) => {
                meli_ga("set", `dimension${e}`, o[e]);
              }),
            meli_ga("send", "pageview");
        },
        trackEvent: function () {
          let {
            category: e = null,
            action: t = null,
            label: n = null,
            custom_dimensions: r = null,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          if ("undefined" == typeof meli_ga) return;
          if (!e || !t) return;
          let o = {};
          r &&
            (o = Object.keys(r).reduce(
              (e, t) => (
                String(t).includes("dimension")
                  ? (e[t] = r[t])
                  : (e[`dimension${t}`] = r[t]),
                e
              ),
              {}
            )),
            (o.useBeacon = !0),
            meli_ga("send", "event", e, t, n, o);
        },
      };
      const k = !("undefined" == typeof window),
        $ = () =>
          k &&
          void 0 !== window.scheduler &&
          "function" == typeof window.scheduler.postTask,
        I = (e, t) => {
          $()
            ? window.scheduler
                .postTask(e, { priority: t })
                .then(console.info)
                .catch(console.error)
            : setTimeout(() => {
                e();
              }, 0);
        },
        R = (e) => {
          I(() => {
            null != e && e.melidata_event && L.trackPage(e.melidata_event),
              null != e && e.analytics_event && N.trackPage(e.analytics_event);
          }, "background");
        },
        M = (e) => () => {
          var t, n;
          null != e &&
            e.melidata_event &&
            (null != e &&
            null !== (t = e.melidata_event) &&
            void 0 !== t &&
            t.experiments
              ? L.trackEventWithExperiments(e.melidata_event)
              : L.trackEvent(e.melidata_event));
          null != e && e.analytics_event && N.trackEvent(e.analytics_event),
            null != e &&
              e.gtm_event &&
              ((n = e.gtm_event),
              globalThis.window &&
                void 0 !== globalThis.window.dataLayer &&
                n &&
                globalThis.window.dataLayer.push(n));
        },
        P = (e) => I(M(e), "background");
      globalThis.window &&
        void 0 !== globalThis.window &&
        (globalThis.window.Tracking = { trackPage: R, trackEvent: P });
      const { trackEventOnComponentPrint: D } = L,
        { itemOrProductIdByGroupRegex: B } = a,
        { vipItemIdRegex: j } = a,
        H = (e, t) => {
          if (e && e.target)
            try {
              const n = new URL(e.target);
              S(t).forEach((e) => {
                let [t, r] = e;
                n && n.searchParams && n.searchParams.set(t, r);
              }),
                (e.target = n.href);
            } catch (e) {}
        },
        z = {
          margin_top: "mt",
          margin_bottom: "mb",
          margin_left: "ml",
          margin_right: "mr",
          padding_top: "pt",
          padding_bottom: "pb",
          padding_left: "pl",
          padding_right: "pr",
        },
        F = [
          "size0",
          "size2",
          "size4",
          "size8",
          "size12",
          "size16",
          "size20",
          "size24",
          "size32",
          "size40",
          "size48",
          "size56",
          "size64",
          "size80",
        ],
        U = (e) => (e && "string" == typeof e ? e.slice(4) : ""),
        V = (e) => e && F.includes(e),
        W = (e, t, n, r, o) => {
          const { top: i, bottom: a, left: s, right: l } = e;
          if (i && i === a && i === s && i === l && V(i))
            return (
              r.push(`${t}-${U(i)}`),
              o.add(`${n}_top`),
              o.add(`${n}_bottom`),
              o.add(`${n}_left`),
              void o.add(`${n}_right`)
            );
          s &&
            s === l &&
            V(s) &&
            (r.push(`${t}x-${U(s)}`), o.add(`${n}_left`), o.add(`${n}_right`)),
            i &&
              i === a &&
              V(i) &&
              (r.push(`${t}y-${U(i)}`),
              o.add(`${n}_top`),
              o.add(`${n}_bottom`));
        },
        q = function () {
          const e = ((e) => {
            if (!e || "object" != typeof e || Array.isArray(e)) return "";
            const t = [],
              n = new Set(),
              r = {
                top: e.margin_top,
                bottom: e.margin_bottom,
                left: e.margin_left,
                right: e.margin_right,
              };
            W(r, "m", "margin", t, n);
            const o = {
              top: e.padding_top,
              bottom: e.padding_bottom,
              left: e.padding_left,
              right: e.padding_right,
            };
            return (
              W(o, "p", "padding", t, n),
              Object.entries(e).forEach((e) => {
                let [r, o] = e;
                if (n.has(r)) return;
                const i = z[r];
                i && o && F.includes(o) && t.push(`${i}-${U(o)}`);
              }),
              t.join(" ")
            );
          })(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          );
          return e ? `spacing-layout ${e}` : "";
        },
        G = new Map();
      G.set("error", "red"),
        G.set("warning", "orange"),
        G.set("success", "green"),
        G.set("neutral", "accent"),
        G.set("generic", "gray"),
        G.set("red", "red"),
        G.set("orange", "orange"),
        G.set("green", "green"),
        G.set("accent", "accent"),
        G.set("gray", "gray");
      const Y = (e) => {
        var t, n, r, o;
        const i =
          (null == e ||
          null === (t = e.title) ||
          void 0 === t ||
          null === (t = t.values) ||
          void 0 === t ||
          null === (t = t.key) ||
          void 0 === t
            ? void 0
            : t.value) ||
          (null == e ||
          null === (n = e.title) ||
          void 0 === n ||
          null === (n = n.values) ||
          void 0 === n ||
          null === (n = n.key) ||
          void 0 === n
            ? void 0
            : n.text) ||
          (null == e || null === (r = e.title) || void 0 === r
            ? void 0
            : r.text) ||
          (null == e ? void 0 : e.title);
        return (
          (null == e ? void 0 : e.key) ||
          i ||
          (null == e ? void 0 : e.id) ||
          (null == e || null === (o = e.label) || void 0 === o
            ? void 0
            : o.text) ||
          (null == e ? void 0 : e.text) ||
          (null == e ? void 0 : e.subtitle) ||
          (null == e ? void 0 : e.upper_label) ||
          (null == e ? void 0 : e.description)
        );
      };
    },
    132(e, t, n) {
      n.d(t, { m9: () => r.getNonce });
      var r = n(70814);
    },
    93309(e, t, n) {
      n.d(t, { Ay: () => o, _V: () => r.Image });
      var r = n(18988);
      const o = r.Image;
    },
    15502(e, t, n) {
      n.d(t, { A: () => o, e: () => r.Script });
      var r = n(99378);
      const o = r.Script;
    },
  },
]);
//# sourceMappingURL=51823.15a0abc7.js.map
