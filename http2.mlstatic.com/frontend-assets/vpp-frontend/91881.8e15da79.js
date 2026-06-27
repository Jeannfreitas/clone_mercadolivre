/*! For license information please see 91881.8e15da79.js.LICENSE.txt */
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [91881],
  {
    275(e, t, n) {
      "use strict";
      n.d(t, { yQ: () => Ft, x5: () => Vt, Bv: () => Kt });
      var r = n(58168),
        o = n(89379),
        i = n(80045),
        l = n(96540),
        a = n(46942),
        s = n.n(a),
        c = n(69247),
        d = n(64534),
        u = n(20558);
      const p = ["ref"];
      var m = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        class n extends l.PureComponent {
          constructor(e) {
            super(e),
              "undefined" == typeof window &&
                "SSR" in t &&
                Array.isArray(t.SSR) &&
                t.SSR.forEach((t) => {
                  "function" == typeof t && t(e);
                });
          }
          render() {
            const t = this.props.forwardedRef;
            return l.createElement(e, (0, r.A)({}, this.props, { ref: t }));
          }
        }
        return (function () {
          const t = (e) => {
            let t = e.ref,
              o = (0, i.A)(e, p);
            return l.createElement(n, (0, r.A)({}, o, { forwardedRef: t }));
          };
          return (t.displayName = e.displayName), t;
        })();
      };
      const f = "ArrowUp",
        v = "ArrowDown",
        h = "Enter",
        g = "Escape",
        y = "Space";
      var b = n(80296);
      const C = (e, t) => -1 !== e.indexOf(t);
      var E = n(24514),
        L = n(72166),
        A = n(49953),
        S = n(69202);
      const w = "undefined" != typeof window && window.visualViewport,
        x = new Set([
          "checkbox",
          "radio",
          "range",
          "color",
          "file",
          "image",
          "button",
          "submit",
          "reset",
        ]),
        k = (e) => {
          const t = window.getComputedStyle(e);
          return /(auto|scroll)/.test(t.overflowY);
        },
        N = (e) => {
          const t = window.getComputedStyle(e);
          return /(auto|scroll)/.test(t.overflowX);
        },
        $ = (e, t, n) => {
          const r = t,
            o = e.style[r];
          return (
            (e.style[r] = n),
            () => {
              e.style[r] = o;
            }
          );
        },
        T = (e) => {
          const t = (0, E.m)(e);
          if (t !== document.documentElement && t !== document.body) {
            const n = t.getBoundingClientRect().top,
              r = e.getBoundingClientRect().top;
            r > n + e.clientHeight && (t.scrollTop += r - n);
          }
        },
        P = (e, t, n, r) => (
          e.addEventListener(t, n, r),
          () => {
            e.removeEventListener(t, n, r);
          }
        );
      let R,
        O = 0;
      const M = function () {
        const e = (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        ).isDisabled;
        (0, A.N)(() => {
          if (!e)
            return (
              (O += 1),
              1 === O &&
                (R = (0, S.un)()
                  ? (() => {
                      let e,
                        t = 0,
                        n = 0;
                      const r = window.pageXOffset,
                        o = window.pageYOffset,
                        i = (0, L.c)(
                          $(
                            document.documentElement,
                            "paddingRight",
                            window.innerWidth -
                              document.documentElement.clientWidth +
                              "px"
                          ),
                          $(document.documentElement, "overflow", "hidden")
                        ),
                        l = (0, L.c)(
                          P(
                            document,
                            "touchstart",
                            (r) => {
                              (e = (0, E.m)(r.target)),
                                (e === document.documentElement &&
                                  e === document.body) ||
                                  ((t = r.changedTouches[0].pageY),
                                  (n = r.changedTouches[0].pageX));
                            },
                            { passive: !1, capture: !0 }
                          ),
                          P(
                            document,
                            "touchmove",
                            (r) => {
                              if (!e) return;
                              if (
                                e === document.documentElement ||
                                e === document.body
                              )
                                return void r.preventDefault();
                              const o = r.changedTouches[0].pageY,
                                i = r.changedTouches[0].pageX,
                                l = e,
                                a = l.scrollTop,
                                s = l.scrollLeft,
                                c = e.scrollHeight - e.clientHeight,
                                d = e.scrollWidth - e.clientWidth,
                                u = a <= 0 && o > t,
                                p = a >= c && o < t,
                                m = s <= 0 && i > n,
                                f = s >= d && i < n;
                              k(e) && !N(e)
                                ? (u || p) && r.preventDefault()
                                : N(e) &&
                                  !k(e) &&
                                  (m || f) &&
                                  r.preventDefault(),
                                (t = o),
                                (n = i);
                            },
                            { passive: !1, capture: !0 }
                          ),
                          P(
                            document,
                            "touchend",
                            (e) => {
                              const t = e.target;
                              t instanceof HTMLInputElement &&
                                !x.has(t.type) &&
                                t !== document.activeElement &&
                                (e.preventDefault(),
                                t.focus(),
                                requestAnimationFrame(() => {
                                  t.style.transform = "";
                                }));
                            },
                            { passive: !1, capture: !0 }
                          ),
                          P(
                            document,
                            "focus",
                            (e) => {
                              const t = e.target;
                              t instanceof HTMLInputElement &&
                                !x.has(t.type) &&
                                requestAnimationFrame(() => {
                                  (t.style.transform = ""),
                                    w &&
                                      (w.height < window.innerHeight
                                        ? requestAnimationFrame(() => {
                                            T(t);
                                          })
                                        : w.addEventListener(
                                            "resize",
                                            () => T(t),
                                            { once: !0 }
                                          ));
                                });
                            },
                            !0
                          ),
                          P(window, "scroll", (e) => {
                            const t = e.target.scrollingElement;
                            null != t && t.customScrolling
                              ? ((document.documentElement.style.overflow =
                                  "auto"),
                                setTimeout(() => {
                                  document.documentElement.style.overflow =
                                    "hidden";
                                }, 500))
                              : e.preventDefault();
                          })
                        );
                      return () => {
                        i(), l(), window.scrollTo(r, o);
                      };
                    })()
                  : (0, L.c)(
                      $(
                        document.documentElement,
                        "paddingRight",
                        window.innerWidth -
                          document.documentElement.clientWidth +
                          "px"
                      ),
                      $(document.documentElement, "overflow", "hidden")
                    )),
              () => {
                (O -= 1), 0 === O && R();
              }
            );
        }, [e]);
      };
      var I = n(8494),
        D = n(85652),
        _ = n(17376);
      const B = () => {},
        j = (e) => {
          let t = e.color,
            n =
              void 0 === t
                ? "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))"
                : t;
          e.i18n;
          let r = e.srLabel;
          return l.createElement(
            "svg",
            {
              "aria-hidden": r ? void 0 : !r,
              "aria-label": r || void 0,
              role: r ? "img" : void 0,
              color: n,
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor",
            },
            r && l.createElement("title", null, r),
            l.createElement("path", {
              d: "M12.4485 11.5996L8.87116 8.02227L12.4485 4.39446L11.594 3.5519L8.02261 7.17372L4.40077 3.55188L3.55225 4.40041L7.18003 8.02819L3.65246 11.6055L4.50692 12.4481L8.02858 8.87674L11.6 12.4481L12.4485 11.5996Z",
              fill: "currentColor",
            })
          );
        },
        z = (e) => {
          let t = e.color,
            n =
              void 0 === t
                ? "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))"
                : t;
          e.i18n;
          let r = e.srLabel;
          return l.createElement(
            "svg",
            {
              "aria-hidden": r ? void 0 : !r,
              "aria-label": r || void 0,
              role: r ? "img" : void 0,
              color: n,
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor",
            },
            r && l.createElement("title", null, r),
            l.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.99742 10.8458C8.96319 11.6919 7.64125 12.1996 6.20073 12.1996C2.88713 12.1996 0.200928 9.51341 0.200928 6.19981C0.200928 2.88621 2.88713 0.200012 6.20073 0.200012C9.51432 0.200012 12.2005 2.88621 12.2005 6.19981C12.2005 7.6407 11.6926 8.96297 10.846 9.99731L14.8475 13.9987L13.9989 14.8473L9.99742 10.8458ZM1.40093 6.19981C1.40093 8.85067 3.54987 10.9996 6.20073 10.9996C8.85158 10.9996 11.0005 8.85067 11.0005 6.19981C11.0005 3.54896 8.85158 1.40001 6.20073 1.40001C3.54987 1.40001 1.40093 3.54896 1.40093 6.19981Z",
              fill: "currentColor",
            })
          );
        },
        F = (e) => {
          let t = e.color,
            n =
              void 0 === t
                ? "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))"
                : t;
          e.i18n;
          let r = e.srLabel;
          return l.createElement(
            "svg",
            {
              "aria-hidden": r ? void 0 : !r,
              "aria-label": r || void 0,
              role: r ? "img" : void 0,
              color: n,
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "currentColor",
            },
            r && l.createElement("title", null, r),
            l.createElement("path", {
              d: "M4.35156 5.19496L9.15406 9.99746L4.35156 14.8L5.20009 15.6485L10.0026 10.846L14.7963 15.6397L15.6449 14.7912L10.8511 9.99746L15.6449 5.20371L14.7963 4.35518L10.0026 9.14894L5.20009 4.34644L4.35156 5.19496Z",
              fill: "currentColor",
            })
          );
        },
        H = (e) => {
          let t = e.color,
            n =
              void 0 === t
                ? "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))"
                : t;
          e.i18n;
          let r = e.srLabel;
          return l.createElement(
            "svg",
            {
              "aria-hidden": r ? void 0 : !r,
              "aria-label": r || void 0,
              role: r ? "img" : void 0,
              color: n,
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "currentColor",
            },
            r && l.createElement("title", null, r),
            l.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14.2238 13.3752C15.341 12.0645 16.0153 10.3649 16.0153 8.50766C16.0153 4.36129 12.654 1 8.50766 1C4.36129 1 1 4.36129 1 8.50766C1 12.654 4.36129 16.0153 8.50766 16.0153C10.3649 16.0153 12.0645 15.341 13.3752 14.2238L17.9528 18.8013L18.8013 17.9528L14.2238 13.3752ZM8.50766 14.8153C5.02403 14.8153 2.2 11.9913 2.2 8.50766C2.2 5.02403 5.02403 2.2 8.50766 2.2C11.9913 2.2 14.8153 5.02403 14.8153 8.50766C14.8153 11.9913 11.9913 14.8153 8.50766 14.8153Z",
              fill: "currentColor",
            })
          );
        },
        V = (e) => {
          let t = e.color,
            n =
              void 0 === t
                ? "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))"
                : t;
          e.i18n;
          let r = e.srLabel;
          return l.createElement(
            "svg",
            {
              "aria-hidden": r ? void 0 : !r,
              "aria-label": r || void 0,
              role: r ? "img" : void 0,
              color: n,
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor",
            },
            r && l.createElement("title", null, r),
            l.createElement("path", {
              d: "M6.78786 9.39574L11.3645 4.81909L12.393 5.84761L6.78786 11.4528L3.60693 8.27185L4.63545 7.24333L6.78786 9.39574Z",
              fill: "currentColor",
            })
          );
        },
        U = (e) => ({
          "data-andes-state":
            Object.entries(e)
              .reduce((e, t) => {
                let n = (0, b.A)(t, 2),
                  r = n[0],
                  o = n[1];
                if ("otherDataAndesState" === r) {
                  o.split(" ").forEach((t) => {
                    e.push(t);
                  });
                } else o && e.push(r);
                return e;
              }, [])
              .join(" ") || void 0,
        });
      var K = () =>
        l.createElement(
          "svg",
          {
            "aria-hidden": "true",
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            xmlns: "http://www.w3.org/2000/svg",
          },
          l.createElement("rect", {
            width: "10",
            height: "1.6",
            x: "3",
            y: "7.2",
            fill: "currentColor",
          })
        );
      const Z = "andes-checkbox";
      var Y = (function () {
          const e = (e) => {
            const t = e.checked,
              n = e.className,
              o = e.defaultChecked,
              i = e.disabled,
              a = void 0 !== i && i,
              u = e.error,
              p = void 0 !== u && u,
              m = e.highlight,
              f = void 0 !== m && m,
              v = e.id,
              h = e.indeterminate,
              g = void 0 !== h && h,
              y = e.inputProps,
              C = void 0 === y ? {} : y,
              E = e.label,
              L = e.labelPosition,
              A = void 0 === L ? "right" : L,
              S = e.onChange,
              w = e.srHidden,
              x = void 0 !== w && w,
              k = e.srLabel,
              N = e.ref,
              $ = (0, d.wR)(),
              T = $.getThemedComponentClasses,
              P = $.themeHash,
              R = (0, l.useRef)(void 0 !== t).current,
              O = (0, l.useState)(o || t),
              M = (0, b.A)(O, 2),
              I = M[0],
              D = M[1];
            B(
              Boolean(E || k || x),
              "<Checkbox> needs some plain text contents for accessibility reasons.\nPlease add a `label` or `srLabel` prop."
            ),
              (0, l.useEffect)(() => {
                R && void 0 !== t && D(t);
              }, [t, R]);
            const j = (0, c.Bi)(v),
              z = `${j}-srLabel`,
              F = (0, l.useRef)(null),
              H = s()(
                Z,
                n,
                {
                  [`${Z}--error`]: p,
                  [`${Z}--highlight`]: f,
                  [`${Z}--label-left`]: "left" === A,
                  [`${Z}--indeterminate`]: g && I,
                  [`${Z}--disabled`]: a,
                },
                null == T ? void 0 : T("checkbox")
              ),
              Y = s()(`${Z}__label`, { [`${Z}__label-text`]: E }),
              G = E ? "label" : "div";
            return (
              (0, l.useEffect)(() => {
                null != F &&
                  F.current &&
                  (F.current.indeterminate = (g && I) || !1);
              }, [F, g, I]),
              l.createElement(
                G,
                (0, r.A)(
                  {
                    className: H,
                    ref: N,
                    "data-andes-checkbox": !0,
                    "data-andes-checkbox-variant": f ? "highlight" : void 0,
                  },
                  U({
                    checked: I,
                    disabled: a,
                    indeterminate: g && I,
                    error: p && !I,
                  }),
                  P
                ),
                l.createElement(
                  "span",
                  {
                    className: `${Z}__checkbox`,
                    "data-andes-checkbox-container": !0,
                  },
                  l.createElement(
                    "input",
                    (0, r.A)(
                      {},
                      C,
                      {
                        ref: F,
                        checked: t,
                        className: `${Z}__input`,
                        defaultChecked: o,
                        disabled: a,
                        id: j,
                        onChange: (e) => {
                          R || D(e.target.checked),
                            "function" == typeof S && S(e);
                        },
                        type: "checkbox",
                      },
                      k ? { "aria-labelledby": z } : {},
                      { "data-andes-checkbox-input": !0 }
                    )
                  ),
                  l.createElement(
                    "span",
                    { className: `${Z}__icon` },
                    g && I
                      ? l.createElement(K, null)
                      : l.createElement(V, { color: "currentColor" })
                  )
                ),
                E &&
                  l.createElement(
                    "span",
                    {
                      "aria-hidden": !!k || void 0,
                      className: Y,
                      "data-andes-checkbox-label": !0,
                    },
                    E
                  ),
                k && l.createElement(_.s, { id: z }, k)
              )
            );
          };
          return (e.displayName = "Checkbox"), e;
        })(),
        G = n(38262),
        W = n(72016),
        q = n(89435),
        X = n(319),
        Q = n(56511),
        J = n(32217),
        ee = n(89213);
      const te = (e) => {
          let t = e.color,
            n =
              void 0 === t
                ? "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))"
                : t;
          e.i18n;
          let r = e.srLabel;
          return l.createElement(
            "svg",
            {
              "aria-hidden": r ? void 0 : !r,
              "aria-label": r || void 0,
              role: r ? "img" : void 0,
              color: n,
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "currentColor",
            },
            r && l.createElement("title", null, r),
            l.createElement("path", {
              d: "M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z",
              fill: "currentColor",
            })
          );
        },
        ne = "andes-list",
        re = "andes-list__group",
        oe = "andes-list__item",
        ie = (0, l.createContext)({});
      function le() {
        return (0, l.useContext)(ie);
      }
      function ae(e) {
        let t = e.children,
          n = e.listType;
        const r = (0, l.useMemo)(() => ({ listType: n }), [n]);
        return l.createElement(ie.Provider, { value: r }, t);
      }
      const se = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "standalone";
          return function () {
            let t = (
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
              ).size,
              n = "list";
            switch (e) {
              case "standalone":
              default:
                n = "list";
                break;
              case "listbox":
                n = "listbox";
                break;
              case "checkbox":
                n = "checkbox-list";
                break;
              case "radio":
                n = "radio-list";
            }
            return {
              list: { [`data-andes-${n}`]: !0 },
              group: { "data-andes-list-group": !0 },
              header: { "data-andes-list-group-header": !0 },
              sublist: { "data-andes-list-group-sublist": !0 },
              item: {
                [`data-andes-${n}-item`]: !0,
                [`data-andes-${n}-item-size`]: t,
              },
              chevron: { "data-andes-list-chevron": !0 },
              selection: {
                [`data-andes-${n}-${"listbox" === e ? "checkbox" : e}`]: !0,
              },
              title: { [`data-andes-${n}-title`]: !0 },
              description: { [`data-andes-${n}-description`]: !0 },
              leftContent: { [`data-andes-${n}-left-content`]: !0 },
              rightContent: { [`data-andes-${n}-right-content`]: !0 },
            };
          };
        },
        ce = ["ref"],
        de = [
          "children",
          "className",
          "component",
          "id",
          "listType",
          "selectable",
          "srLabel",
          "type",
          "withDividers",
        ];
      var ue = (function () {
        const e = (e) => {
          let t = e.ref,
            n = (0, i.A)(e, ce);
          const o = n.children,
            a = n.className,
            u = n.component,
            p = void 0 === u ? "ul" : u,
            m = n.id,
            f = n.listType,
            v = void 0 === f ? "standalone" : f,
            h = n.selectable,
            g = void 0 === h || h,
            y = n.srLabel,
            b = n.type,
            C = void 0 === b ? "default" : b,
            E = n.withDividers,
            L = void 0 !== E && E,
            A = (0, i.A)(n, de),
            S = (0, d.wR)(),
            w = S.getThemedComponentClasses,
            x = S.themeHash,
            k = (0, c.Bi)(m),
            N = se(v)().list,
            $ = s()(ne, a, `${ne}--${C}`, null == w ? void 0 : w("list"), {
              [`${ne}--selectable`]: g,
              [`${ne}-with-dividers`]: L,
            });
          return l.createElement(
            ae,
            { listType: v },
            l.createElement(
              p,
              (0, r.A)({ className: $, id: k, ref: t }, A, x, N, {
                "aria-label": y,
              }),
              l.Children.map(o, (e, t) => {
                let r;
                if ("listbox" !== n.role) {
                  var o;
                  const n =
                    null == e || null === (o = e.props) || void 0 === o
                      ? void 0
                      : o.id;
                  n ? (r = n) : k && (r = `${k}-${t}`);
                }
                return e && l.cloneElement(e, { id: r });
              })
            )
          );
        };
        return (e.displayName = "List"), e;
      })();
      const pe = (e) => {
        let t = e.label,
          n = e.children;
        return t && l.Children.count(n) > 0;
      };
      var me = function* (e) {
        const t = e.children,
          n = e.label,
          r = e["aria-label"],
          o = n || t,
          i = ("string" == typeof o ? o : "") || r || "";
        B(
          i,
          "<ListGroup> needs some plain text contents for accessibility reasons. Please add a `label` or `aria-label` prop."
        ),
          yield {
            type: "section",
            props: e,
            rendered: o,
            textValue: i,
            "aria-label": r || n,
            hasChildNodes: pe,
            *childNodes() {
              if (n) {
                const e = [];
                l.Children.forEach(t, (t) => {
                  e.push({ type: "item", element: t });
                }),
                  yield* e;
              }
            },
          };
      };
      const fe = "medium",
        ve = "top",
        he = { small: 18, medium: 20, large: 22 },
        ge =
          'A <ListItem> with size="small" does not allow Buttons or Switches as\nrightContent. Please, use a bigger <ListItem> instead',
        ye =
          "The current object format '{ title: string, src: string, alt: string, src2x: string }' will be deprecated from the 'leftContent' options. Please use a 'node' instead.",
        be = {
          0: "\n  '0' option will be removed from 'paddingSize' options in a future major version.\n  Please, use 0 as number instead.\n",
          16: "\n  '16' option will be removed from 'paddingSize' options in a future major version.\n  Please, use 16 as number instead.\n",
          24: "\n  '24' option will be removed from 'paddingSize' options in a future major version.\n  Please, use 24 as number instead.\n",
          32: "\n  '32' option will be removed from 'paddingSize' options in a future major version.\n  Please, use 32 as number instead.\n",
          40: "\n  '40' option will be removed from 'paddingSize' options in a future major version.\n  Please, use 40 as number instead.\n",
        },
        Ce = [
          "children",
          "className",
          "component",
          "groupProps",
          "headingProps",
          "id",
          "itemProps",
          "label",
          "paddingSize",
          "size",
          "withDividers",
        ];
      var Ee = (function () {
        const e = (e) => {
          const t = e.children,
            n = e.className,
            o = e.component,
            a = void 0 === o ? "ul" : o,
            c = e.groupProps,
            d = e.headingProps,
            u = e.id,
            p = e.itemProps,
            m = e.label,
            f = e.paddingSize,
            v = e.size,
            h = void 0 === v ? fe : v,
            g = e.withDividers,
            y = void 0 !== g && g,
            b = (0, i.A)(e, Ce),
            E = le();
          "string" == typeof f && B(!C(Object.keys(be), f), be[f]);
          const L = s()(re, n, `${re}--size-${h}`, {
              [`${re}--padding-${f}`]: f,
              [`${re}--with-dividers`]: y,
            }),
            A = (0, l.useMemo)(() => se()(), []),
            S = A.group,
            w = A.header,
            x = A.sublist;
          return (
            B(
              !(null == E || !E.listType),
              "<ListGroup> needs to be wrapped in a '<List>' for accessibility reasons. \nAdd the '<List>' component."
            ),
            l.createElement(
              "li",
              (0, r.A)({ className: L }, (0, J.v)(p, b), S),
              l.createElement(
                "span",
                (0, r.A)({ className: `${re}--header`, id: u }, d, w),
                m
              ),
              l.createElement(
                a,
                (0, r.A)(
                  { className: `${re}--sublist`, "aria-labelledby": u },
                  c,
                  x
                ),
                l.Children.map(t, (e, t) => {
                  var n;
                  let r;
                  const o =
                    null === (n = e.props) || void 0 === n ? void 0 : n.id;
                  return (
                    o ? (r = o) : u && (r = `${u}-${t}`),
                    (0, l.cloneElement)(e, { id: r })
                  );
                })
              )
            )
          );
        };
        return (e.getCollectionNode = me), (e.displayName = "ListGroup"), e;
      })();
      var Le = (e) => {
        const t = e.className,
          n = e.disabled,
          r = void 0 !== n && n,
          o = e.hasDescription,
          i = void 0 !== o && o,
          l = e.hasLeftContentImage,
          a = void 0 !== l && l,
          c = e.interactive,
          d = void 0 !== c && c,
          u = e.paddingSize,
          p = e.selected,
          m = void 0 !== p && p,
          f = e.size,
          v = void 0 === f ? fe : f,
          h = e.slotted,
          g = Number(u);
        return s()(oe, t, `${oe}--size-${v}`, {
          [`${oe}--selected-padding-0`]: m && 0 === g,
          [`${oe}--padding-${g}`]: g || 0 === g,
          [`${oe}--disabled`]: r,
          [`${oe}--selected`]: m,
          [`${oe}-with-image`]: a,
          [`${oe}-with-secondary`]: i && "small" !== v,
          [`${oe}--selectable`]: d,
          [`${oe}--slotted`]: h,
        });
      };
      const Ae = [
        "children",
        "className",
        "component",
        "disabled",
        "forwardedRef",
        "hasDescription",
        "hasLeftContentImage",
        "interactive",
        "paddingSize",
        "selected",
        "size",
        "slotted",
        "srLabel",
        "disableSelection",
        "checked",
        "ref",
      ];
      var Se = (function () {
        const e = (e) => {
          const t = e.children,
            n = e.className,
            o = e.component,
            a = void 0 === o ? "li" : o,
            s = e.disabled;
          e.forwardedRef;
          const c = e.hasDescription,
            d = e.hasLeftContentImage,
            u = e.interactive,
            p = e.paddingSize,
            m = e.selected,
            f = e.size,
            v = void 0 === f ? fe : f,
            h = e.slotted,
            g = void 0 !== h && h;
          e.srLabel;
          const y = e.disableSelection,
            b = void 0 !== y && y,
            E = e.checked,
            L = void 0 !== E && E,
            A = e.ref,
            S = (0, i.A)(e, Ae),
            w = le().listType,
            x = void 0 === w ? "standalone" : w;
          B(
            "li" === a,
            "'component' prop will be deprecated in a future major version. Please remove this prop to ensure future compatibility."
          ),
            "string" == typeof p && B(!C(Object.keys(be), p), be[p]);
          const k = Le({
              className: n,
              disabled: s,
              hasDescription: c,
              hasLeftContentImage: d,
              interactive: u,
              paddingSize: p,
              selected: m,
              size: v,
              slotted: g,
            }),
            N = (0, l.useMemo)(() => se(x)({ size: v }), [v]).item;
          return l.createElement(
            a,
            (0, r.A)(
              { className: k, ref: A },
              S,
              N,
              U({ checked: L || !1, disabled: s || b || !1, selected: m })
            ),
            t
          );
        };
        return (e.displayName = "ListBaseItem"), e;
      })();
      var we = (e, t) => {
        if ((0, l.isValidElement)(e)) {
          var n, r, o, i;
          if (
            "Button" ===
            (null === (n = e.type) || void 0 === n ? void 0 : n.displayName)
          ) {
            var a;
            if ("small" === t) return void B(!1, ge);
            if (
              "medium" !==
              (null === (a = e.props) || void 0 === a ? void 0 : a.size)
            )
              return (
                B(!1, '<ListItem> only supports Buttons with size="medium"'),
                (0, l.cloneElement)(e, { size: "medium" })
              );
          }
          if (
            C(
              ["Pill", "PillIcon"],
              null === (r = e.type) || void 0 === r ? void 0 : r.displayName
            ) &&
            "small" !==
              (null == e || null === (o = e.props) || void 0 === o
                ? void 0
                : o.size)
          )
            return (
              B(!1, '<ListItem> only supports Badges with size="small"'),
              (0, l.cloneElement)(e, { size: "small" })
            );
          if (
            "Switch" ===
              (null === (i = e.type) || void 0 === i
                ? void 0
                : i.displayName) &&
            "small" === t
          )
            return void B(!1, ge);
        }
        return e;
      };
      const xe = (e, t, n) => {
        let r = t.title,
          o = t.description,
          i = t.rightContent,
          l = n.legacyBehavior,
          a = void 0 !== l && l;
        const s =
          "object" == typeof i
            ? (null == i ? void 0 : i.content) ||
              (null == i ? void 0 : i.description)
            : i;
        return !!(a ? e && !(r || o || s) : e);
      };
      var ke = (e) => {
        let t = e.rightContent,
          n = e.rightContentPosition;
        if (!t) return { position: ve };
        const r = { position: n || ve };
        var i, l;
        return void 0 !== (null == (l = t) ? void 0 : l.content)
          ? (0, o.A)(
              (0, o.A)({}, r),
              {},
              {
                content: null == t ? void 0 : t.content,
                description:
                  null !== (i = null == t ? void 0 : t.description) &&
                  void 0 !== i
                    ? i
                    : void 0,
              }
            )
          : (0, o.A)(
              (0, o.A)({}, r),
              {},
              { content: t || null, position: n || ve }
            );
      };
      const Ne = (function () {
        const e = (e) => {
          var t;
          const n = e.addPrimaryLabel,
            o = void 0 !== n && n,
            i = e.baseList,
            a = void 0 !== i && i,
            c = e.chevron,
            d = void 0 !== c && c,
            u = e.children,
            p = e.component,
            m = void 0 === p ? l.Fragment : p,
            f = e.componentProps,
            v = void 0 === f ? {} : f,
            h = e.description,
            g = void 0 === h ? "" : h,
            y = e.id,
            C = e.leftContent,
            E = e.legacyBehavior,
            L = void 0 !== E && E,
            A = e.maxLines,
            S = e.rightContent,
            w = void 0 === S ? "" : S,
            x = e.rightContentPosition,
            k = void 0 === x ? "top" : x,
            N = e.size,
            $ = void 0 === N ? fe : N,
            T = e.title,
            P = void 0 === T ? "" : T,
            R = e.value,
            O = le().listType,
            M = se(void 0 === O ? "standalone" : O)(),
            I = g && "small" !== $,
            D =
              (0, l.isValidElement)(C) &&
              "Thumbnail" ===
                (null == C || null === (t = C.type) || void 0 === t
                  ? void 0
                  : t.displayName),
            _ = (null == C ? void 0 : C.src) && "string" == typeof C.src,
            B = ke({ rightContent: w, rightContentPosition: k }),
            j = "string" == typeof (null == B ? void 0 : B.content),
            z = _ || D,
            F = xe(
              u,
              {
                title: P,
                description: g,
                rightContent:
                  (null == B ? void 0 : B.content) ||
                  (null == B ? void 0 : B.description),
              },
              { legacyBehavior: L }
            ),
            H = (0, l.useRef)(null),
            V = (0, l.useState)(),
            U = (0, b.A)(V, 2),
            K = U[0],
            Z = U[1];
          (0, l.useEffect)(() => {
            var e;
            z ||
              Z(
                null === (e = H.current) || void 0 === e
                  ? void 0
                  : e.clientHeight
              );
          }, []);
          const Y = s()(`${oe}-primary`, {
              [`${oe}-primary--max-lines-${A}`]: A,
            }),
            G = s()(`${oe}-second-column`, {
              [`${oe}-second-column-with-centered-text`]: z && j,
            }),
            W = s()(
              `${oe}-tertiary-container`,
              `${oe}-tertiary-container--${
                z ? "centered" : null == B ? void 0 : B.position
              }`
            ),
            q = s()(
              `${oe}-tertiary`,
              `${oe}-tertiary--${
                z ? "centered" : null == B ? void 0 : B.position
              }`
            ),
            X = s()(`${oe}-asset`, {
              [`${oe}-asset--icon`]: !z,
              [`${oe}-asset--icon-one-line`]: !I && K && K <= he[$],
            }),
            Q = s()(
              `${oe}-chevron`,
              `${oe}-chevron--${
                z ? "centered" : null == B ? void 0 : B.position
              }`
            );
          return F
            ? l.createElement(
                m,
                v,
                l.createElement(
                  "div",
                  {
                    className: `${oe}-content`,
                    id: o ? `${y}-content-${R}` : `${y}-content`,
                  },
                  u
                ),
                d &&
                  l.createElement(
                    "div",
                    (0, r.A)(
                      { className: `${oe}-chevron` },
                      null == M ? void 0 : M.chevron
                    ),
                    l.createElement(te, { color: "currentColor" })
                  )
              )
            : l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  m,
                  v,
                  (P || g) &&
                    l.createElement(
                      "div",
                      { className: `${oe}-first-column`, id: `${y}-content` },
                      C &&
                        l.createElement(
                          "div",
                          (0, r.A)(
                            {
                              className: X,
                              "aria-hidden": !(D && C.props.srLabel) || void 0,
                            },
                            null == M ? void 0 : M.leftContent
                          ),
                          _
                            ? l.createElement(
                                ee._,
                                (0, r.A)({}, C, {
                                  className: `${oe}-image`,
                                  "aria-hidden": !0,
                                })
                              )
                            : C
                        ),
                      l.createElement(
                        "div",
                        { className: `${oe}-text` },
                        P &&
                          (o
                            ? l.createElement(
                                "label",
                                (0, r.A)(
                                  {
                                    className: Y,
                                    htmlFor: `${y}-selection-component-${R}`,
                                    ref: H,
                                    onClick: (e) => e.stopPropagation(),
                                  },
                                  null == M ? void 0 : M.title
                                ),
                                P
                              )
                            : l.createElement(
                                "span",
                                (0, r.A)(
                                  { className: Y, ref: H },
                                  null == M ? void 0 : M.title
                                ),
                                P
                              )),
                        I &&
                          l.createElement(
                            "span",
                            (0, r.A)(
                              { className: `${oe}-secondary` },
                              null == M ? void 0 : M.description
                            ),
                            g
                          )
                      )
                    ),
                  !a &&
                    ((null == B ? void 0 : B.content) || d) &&
                    l.createElement(
                      "div",
                      { className: G },
                      (null == B ? void 0 : B.content) &&
                        l.createElement(
                          "span",
                          (0, r.A)(
                            { className: q },
                            null == M ? void 0 : M.rightContent,
                            { id: `${y}-right-content` }
                          ),
                          we(null == B ? void 0 : B.content, $)
                        ),
                      d &&
                        l.createElement(
                          "div",
                          { className: Q },
                          l.createElement(te, { color: "currentColor" })
                        )
                    )
                ),
                u,
                a &&
                  ((null == B ? void 0 : B.content) || d) &&
                  l.createElement(
                    "div",
                    { className: G },
                    (null == B ? void 0 : B.content) &&
                      l.createElement(
                        "div",
                        (0, r.A)(
                          { className: W },
                          null == M ? void 0 : M.rightContent,
                          { id: `${y}-right-content` }
                        ),
                        l.createElement(
                          "span",
                          { className: q },
                          we(null == B ? void 0 : B.content, $)
                        ),
                        j &&
                          (null == B ? void 0 : B.description) &&
                          "small" !== $ &&
                          l.createElement(
                            "span",
                            { className: `${oe}-tertiary-description` },
                            null == B ? void 0 : B.description
                          )
                      ),
                    d &&
                      l.createElement(
                        "div",
                        (0, r.A)(
                          { className: Q },
                          null == M ? void 0 : M.chevron
                        ),
                        l.createElement(te, { color: "currentColor" })
                      )
                  )
              );
        };
        return (e.displayName = "ListItemContent"), e;
      })();
      var $e = Ne;
      const Te = (e) => {
          var t;
          const n =
              (0, l.isValidElement)(e) &&
              "Thumbnail" ===
                (null == e || null === (t = e.type) || void 0 === t
                  ? void 0
                  : t.displayName),
            r = "string" == typeof (null == e ? void 0 : e.src);
          return !(!n && !r);
        },
        Pe = (e) =>
          !!(
            (null == e ? void 0 : e.title) ||
            (null == e ? void 0 : e.src) ||
            (null == e ? void 0 : e.alt) ||
            (null == e ? void 0 : e.src2x)
          );
      var Re;
      const Oe = {
          sendCustom: () => {},
          sendHeadless: () => {},
          sendSlots: () => {},
          sendStyleOverrides: () => {},
          sendTokens: () => {},
        },
        Me = {
          SSR: [
            null == Oe || null === (Re = Oe.sendSlots) || void 0 === Re
              ? void 0
              : Re.call(Oe, "List", (e) => {
                  let t = e.title,
                    n = e.description,
                    r = e.rightContent,
                    o = e.children;
                  return !!(e.legacyBehavior ? o && !(t || n || r) : o);
                }),
          ],
        },
        Ie = [
          "chevron",
          "children",
          "className",
          "description",
          "disabled",
          "href",
          "id",
          "leftContent",
          "legacyBehavior",
          "legacyBehaviorSlot",
          "maxLines",
          "onClick",
          "paddingSize",
          "rightContent",
          "rightContentPosition",
          "size",
          "target",
          "title",
          "value",
          "groupIndex",
          "index",
          "ref",
        ],
        De = (function () {
          const e = (e) => {
            const t = e.chevron,
              n = void 0 === t || t,
              a = e.children,
              s = e.className,
              d = e.description,
              u = e.disabled,
              p = void 0 !== u && u,
              m = e.href,
              f = e.id,
              v = e.leftContent,
              h = e.legacyBehavior,
              g = e.legacyBehaviorSlot,
              y = e.maxLines,
              b = e.onClick,
              C = e.paddingSize,
              E = e.rightContent,
              L = e.rightContentPosition,
              A = e.size,
              S = void 0 === A ? fe : A,
              w = e.target,
              x = e.title;
            e.value, e.groupIndex, e.index;
            const k = e.ref,
              N = (0, i.A)(e, Ie),
              $ = (0, c.Bi)(f),
              T = !!d,
              P = Te(v),
              R = xe(
                a,
                { title: x, description: d, rightContent: E },
                { legacyBehavior: h || g }
              ),
              O = Pe(v);
            B(!O, ye),
              B(
                !(!m && !b),
                "<ListActionItem> needs an action. Please add a `href` or `onClick` prop."
              );
            const M = h ? { selected: null == e ? void 0 : e.selected } : {};
            return l.createElement(
              Se,
              (0, r.A)(
                {
                  className: s,
                  id: $,
                  ref: k,
                  disabled: p,
                  hasDescription: T,
                  hasLeftContentImage: P,
                  interactive: !h,
                  paddingSize: C,
                  size: S,
                  slotted: R,
                },
                M,
                N
              ),
              !h &&
                (m
                  ? l.createElement(
                      "a",
                      (0, r.A)(
                        {
                          "aria-labelledby": `${$}-content`,
                          className: `${oe}-actionable`,
                        },
                        p
                          ? { role: "link", "aria-disabled": !0 }
                          : { href: m, target: w, onClick: b }
                      )
                    )
                  : l.createElement("button", {
                      "aria-labelledby": `${$}-content`,
                      className: `${oe}-actionable`,
                      disabled: p,
                      onClick: b,
                      type: "button",
                    })),
              l.createElement(
                $e,
                (0, r.A)(
                  {
                    title: x,
                    description: d,
                    leftContent: v,
                    rightContent: E,
                    rightContentPosition: L,
                    maxLines: y,
                    size: S,
                    baseList: !0,
                    chevron: n,
                    legacyBehavior: h,
                    id: $,
                  },
                  h && (m || b)
                    ? m
                      ? {
                          component: "a",
                          componentProps: (0, o.A)(
                            {
                              className: `${oe}-anchor`,
                              onClick: b,
                              target: w,
                            },
                            p
                              ? { role: "link", "aria-disabled": !0 }
                              : { href: m }
                          ),
                        }
                      : {
                          component: "button",
                          componentProps: {
                            className: `${oe}-action`,
                            disabled: p,
                            onClick: b,
                            type: "button",
                          },
                        }
                    : {}
                ),
                a
              )
            );
          };
          return (e.displayName = "ListActionItem"), e;
        })();
      var _e = m(De, Me);
      const Be = ["ref"],
        je = [
          "chevron",
          "children",
          "className",
          "description",
          "disabled",
          "groupIndex",
          "href",
          "id",
          "leftContent",
          "maxLines",
          "onClick",
          "onSelect",
          "paddingSize",
          "rightContent",
          "rightContentPosition",
          "selected",
          "size",
          "target",
          "title",
          "value",
        ],
        ze = (function () {
          const e = (e) => {
            let t = e.ref,
              n = (0, i.A)(e, Be);
            const o = n.chevron,
              a = n.children,
              s = n.className,
              c = n.description,
              d = n.disabled;
            n.groupIndex;
            const u = n.href,
              p = n.id,
              m = n.leftContent,
              f = n.maxLines,
              v = n.onClick;
            n.onSelect;
            const h = n.paddingSize,
              g = n.rightContent,
              y = n.rightContentPosition,
              b = void 0 === y ? "top" : y,
              C = n.selected,
              E = void 0 !== C && C,
              L = n.size,
              A = void 0 === L ? fe : L,
              S = n.target,
              w = n.title,
              x = n.value,
              k = (0, i.A)(n, je),
              N = le(),
              $ = ke({ rightContent: g, rightContentPosition: b }),
              T = !!c,
              P = Te(m),
              R = xe(
                a,
                {
                  title: w,
                  description: c,
                  rightContent:
                    (null == $ ? void 0 : $.content) ||
                    (null == $ ? void 0 : $.description),
                },
                { legacyBehavior: !0 }
              ),
              O = { selected: E, disabled: d },
              M = { selected: E },
              I = { chevron: !!o, value: null == x ? void 0 : x.toString() };
            B(
              !(null == N || !N.listType),
              "<ListItem> needs to be wrapped in a '<List>' for accessibility reasons. \nAdd the '<List>' component."
            ),
              "standalone" === (null == N ? void 0 : N.listType) &&
                (B(
                  void 0 === d,
                  "'disabled' prop will be deprecated in an upcoming major version.\nPlease use the '<ListActionItem>' component instead."
                ),
                B(
                  void 0 === v,
                  "'onClick' prop will be deprecated in an upcoming major version.\nPlease use the '<ListActionItem>' component instead."
                )),
              B(
                !(a && (w || c || g)),
                "Children can't be used in conjunction with props title, description, leftContent and rightContent, in future versions children will have precedence over these properties"
              ),
              B(
                void 0 === o,
                "'chevron' prop will be deprecated in an upcoming major version.\nPlease use the '<ListActionItem>' component instead."
              );
            const D = Pe(m);
            return (
              B(!D, ye),
              B(
                void 0 === u,
                "'href' prop will be deprecated in an upcoming major version.\nPlease use the '<ListActionItem>' component instead."
              ),
              B(
                void 0 === S,
                "'target' prop will be deprecated in an upcoming major version.\nPlease use the '<ListActionItem>' component instead."
              ),
              u || v
                ? l.createElement(
                    _e,
                    (0, r.A)(
                      {
                        className: s,
                        ref: t,
                        id: p,
                        legacyBehavior: !0,
                        maxLines: f,
                        paddingSize: h,
                        size: A,
                        chevron: !!o,
                        href: u,
                        target: S,
                        disabled: d,
                        onClick: v,
                        title: w,
                        description: c,
                        leftContent: m,
                        rightContent: null == $ ? void 0 : $.content,
                        rightContentPosition: null == $ ? void 0 : $.position,
                      },
                      M,
                      k
                    ),
                    a
                  )
                : l.createElement(
                    Se,
                    (0, r.A)(
                      {
                        className: s,
                        id: p,
                        ref: t,
                        hasDescription: T,
                        hasLeftContentImage: P,
                        paddingSize: h,
                        size: A,
                        slotted: R,
                      },
                      O,
                      k
                    ),
                    l.createElement(
                      $e,
                      (0, r.A)(
                        {
                          title: w,
                          description: c,
                          leftContent: m,
                          rightContent: null == $ ? void 0 : $.content,
                          rightContentPosition: null == $ ? void 0 : $.position,
                          maxLines: f,
                          size: A,
                          baseList: !0,
                          legacyBehavior: !0,
                          id: p,
                        },
                        I
                      ),
                      a
                    )
                  )
            );
          };
          return (e.displayName = "ListItem"), e;
        })();
      var Fe = m(ze, Me);
      const He = "top";
      var Ve = (e) => {
        let t = e.rightContent,
          n = e.rightContentPosition;
        if (!t) return { position: He };
        const r = { position: n || He };
        var i, l;
        return void 0 !== (null == (l = t) ? void 0 : l.content)
          ? (0, o.A)(
              (0, o.A)({}, r),
              {},
              {
                content: null == t ? void 0 : t.content,
                description:
                  null !== (i = null == t ? void 0 : t.description) &&
                  void 0 !== i
                    ? i
                    : void 0,
              }
            )
          : (0, o.A)(
              (0, o.A)({}, r),
              {},
              { content: t || null, position: n || He }
            );
      };
      const Ue = (e) => {
          let t = e.title,
            n = e.children;
          return t && l.Children.count(n) > 0;
        },
        Ke = function* (e) {
          var t;
          const n = e.children,
            r = e["aria-label"],
            o = e.title,
            i = e.description,
            a = e.rightContent,
            s = o || n,
            c = ("string" == typeof s ? s : "") || r || "",
            d = ((e, t, n) => {
              let r = t.title,
                o = t.description,
                i = t.rightContent,
                l = n.legacyBehavior,
                a = void 0 !== l && l;
              const s =
                "object" == typeof i
                  ? (null == i ? void 0 : i.content) ||
                    (null == i ? void 0 : i.description)
                  : i;
              return !!(a ? e && !(r || o || s) : e);
            })(
              n,
              {
                title: o,
                description: i,
                rightContent:
                  null === (t = Ve({ rightContent: a })) || void 0 === t
                    ? void 0
                    : t.content,
              },
              { legacyBehavior: !0 }
            );
          B(
            d || c,
            "<ListItem> needs some plain text contents for accessibility reasons. Please add a `title` or `aria-label` prop."
          ),
            yield {
              type: "item",
              key: e.value,
              props: e,
              rendered: s,
              textValue: c,
              "aria-label": r || o,
              hasChildNodes: Ue,
              *childNodes() {
                if (o) {
                  const e = [];
                  l.Children.forEach(n, (t) => {
                    e.push({ type: "item", element: t });
                  }),
                    yield* e;
                }
              },
            };
        };
      n(50411);
      const Ze = () =>
        "undefined" != typeof window &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0);
      const Ye = (0, l.createContext)({});
      const Ge = () => null;
      (Ge.displayName = "ListOption"), (Ge.getCollectionNode = Ke);
      var We = Ge;
      const qe = ["ListItem", "DropdownItem"],
        Xe = ["ListGroup", "DropdownGroup"];
      var Qe = function (e) {
        var t, n, r, o;
        let i =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return (
          !!e &&
          (C(
            i,
            (null === (t = e.type) || void 0 === t ? void 0 : t.displayName) ||
              (null === (n = e.type) || void 0 === n ? void 0 : n.name)
          ) ||
            C(
              i,
              (null === (r = e.type) ||
              void 0 === r ||
              null === (r = r.wraps) ||
              void 0 === r
                ? void 0
                : r.displayName) ||
                (null === (o = e.type) || void 0 === o ? void 0 : o.name)
            ))
        );
      };
      var Je = (e) => Qe(e, Xe);
      var et = (e) => Qe(e, qe);
      var tt = (e) =>
        l.Children.map(e, (e) => {
          if (et(e)) return l.createElement(We, e.props);
          if (Je(e)) {
            const t = l.Children.map(e.props.children, (e) =>
              et(e) ? l.createElement(We, e.props) : e
            );
            return l.createElement(Ee, e.props, t);
          }
          return e;
        });
      const nt = ["item", "state"],
        rt = ["onClick", "onKeyDown"],
        ot = ["onSelect"];
      var it = (e) => {
        let t = e.item,
          n = e.state,
          a = (0, i.A)(e, nt);
        const c = t.key,
          d = t.props,
          u = (0, l.useContext)(Ye).listType,
          p = (0, l.useMemo)(
            () =>
              (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "standalone";
                return function () {
                  let t = (
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {}
                    ).size,
                    n = "list";
                  switch (e) {
                    case "standalone":
                    default:
                      n = "list";
                      break;
                    case "listbox":
                      n = "listbox";
                      break;
                    case "checkbox":
                      n = "checkbox-list";
                      break;
                    case "radio":
                      n = "radio-list";
                  }
                  return {
                    list: { [`data-andes-${n}`]: !0 },
                    group: { "data-andes-list-group": !0 },
                    header: { "data-andes-list-group-header": !0 },
                    sublist: { "data-andes-list-group-sublist": !0 },
                    item: {
                      [`data-andes-${n}-item`]: !0,
                      [`data-andes-${n}-item-size`]: t,
                    },
                    chevron: { "data-andes-list-chevron": !0 },
                    selection: {
                      [`data-andes-${n}-${"listbox" === e ? "checkbox" : e}`]:
                        !0,
                    },
                    title: { [`data-andes-${n}-title`]: !0 },
                    description: { [`data-andes-${n}-description`]: !0 },
                    leftContent: { [`data-andes-${n}-left-content`]: !0 },
                    rightContent: { [`data-andes-${n}-right-content`]: !0 },
                  };
                };
              })(u)(),
            []
          ),
          m = p.selection,
          f = (0, l.useRef)(null),
          v = (0, G.x)({ key: c }, n, f),
          g = v.optionProps,
          b = v.isSelected,
          C = (0, o.A)((0, o.A)({}, d), {}, { key: c, selected: b }),
          E = s()(s(), {
            "andes-list__item-with-selection-component": !!a.selectionComponent,
          }),
          L = g.onClick,
          A = g.onKeyDown,
          S = (0, i.A)(g, rt),
          w = a.onSelect,
          x = (0, i.A)(a, ot),
          k = (e) => {
            const t = C.disabled,
              n = C.value,
              r = C.onSelect,
              o = a.onClick;
            t ||
              ("function" == typeof o && o(e, n),
              "function" == typeof L && L(e),
              "function" == typeof r && r(e, { value: n }),
              "function" == typeof w && w(e, { value: n }));
          },
          N = (0, o.A)({}, (0, J.v)(C, x)),
          $ = N.children,
          T = N.description,
          P = N.disabled,
          R = N.id,
          O = N.leftContent,
          M = N.maxLines,
          I = N.paddingSize,
          D = N.rightContent,
          _ = N.rightContentPosition,
          j = N.size,
          z = N.title,
          F = !!T,
          H = ((e) => {
            var t;
            const n =
                (0, l.isValidElement)(e) &&
                "Thumbnail" ===
                  (null == e || null === (t = e.type) || void 0 === t
                    ? void 0
                    : t.displayName),
              r = "string" == typeof (null == e ? void 0 : e.src);
            return !(!n && !r);
          })(O),
          V = ((e, t, n) => {
            let r = t.title,
              o = t.description,
              i = t.rightContent,
              l = n.legacyBehavior,
              a = void 0 !== l && l;
            const s =
              "object" == typeof i
                ? (null == i ? void 0 : i.content) ||
                  (null == i ? void 0 : i.description)
                : i;
            return !!(a ? e && !(r || o || s) : e);
          })(
            $,
            { title: z, description: T, rightContent: D },
            { legacyBehavior: !0 }
          ),
          U = {
            onClick: k,
            onKeyDown: (e) => {
              "function" == typeof A && A(e),
                (e.code !== h && e.code !== y) || k(e);
            },
          };
        B(
          !($ && (z || T || D)),
          "Children can't be used in conjunction with props title, description, leftContent and rightContent, in future versions children will have precedence over these properties"
        );
        const K = ((e) =>
          !!(
            (null == e ? void 0 : e.title) ||
            (null == e ? void 0 : e.src) ||
            (null == e ? void 0 : e.alt) ||
            (null == e ? void 0 : e.src2x)
          ))(O);
        return (
          B(
            !K,
            "The current object format '{ title: string, src: string, alt: string, src2x: string }' will be deprecated from the 'leftContent' options. Please use a 'node' instead."
          ),
          l.createElement(
            Se,
            (0, r.A)(
              {
                className: E,
                id: R,
                ref: f,
                disabled: P,
                selected: b,
                hasDescription: F,
                hasLeftContentImage: H,
                paddingSize: I,
                size: j,
                slotted: V,
              },
              S,
              U
            ),
            (() => {
              const e = a.selectionComponent;
              return (0, l.isValidElement)(e)
                ? l.createElement(
                    "div",
                    (0, r.A)({}, m, {
                      className:
                        "andes-list__item-selection-control andes-listbox__item-selection-control",
                    }),
                    (0, l.cloneElement)(e, {
                      checked: C.selected,
                      disabled: C.disabled,
                    })
                  )
                : null;
            })(),
            l.createElement(
              $e,
              (0, r.A)({}, N, {
                key: c,
                title: z,
                description: T,
                leftContent: O,
                rightContent: D,
                rightContentPosition: _,
                maxLines: M,
                size: j,
                id: R || (null == S ? void 0 : S.id),
                legacyBehavior: !0,
              }),
              $
            )
          )
        );
      };
      const lt = ["group", "state", "listId"];
      var at = (e) => {
        let t = e.group,
          n = e.state,
          o = e.listId,
          a = (0, i.A)(e, lt);
        const s = t.rendered,
          c = t["aria-label"],
          d = t.props,
          u = t.index,
          p = (0, W.u)({ heading: s, "aria-label": c }),
          m = p.itemProps,
          f = p.headingProps,
          v = p.groupProps;
        return (
          (f.id = `${o}__group-heading-${u}`),
          (v["aria-labelledby"] = f.id),
          l.createElement(
            Ee,
            (0, r.A)(
              { label: "", itemProps: m, headingProps: f, groupProps: v },
              d
            ),
            [...t.childNodes].map((e) =>
              l.createElement(
                it,
                (0, r.A)({ key: e.key, item: e, state: n }, a)
              )
            )
          )
        );
      };
      const st = (e, t) => {
          let n;
          return (
            e.forEach((e) => {
              var r, o;
              if (
                !Qe(e, ["ListOption", "FloatingMenuItem"]) ||
                ((null == e || null === (r = e.props) || void 0 === r
                  ? void 0
                  : r.value) !== t &&
                  (null == e ? void 0 : e.key) !== t)
              ) {
                if (
                  Qe(e, ["ListGroup"]) &&
                  null != e &&
                  null !== (o = e.props) &&
                  void 0 !== o &&
                  o.children
                ) {
                  const r = st(e.props.children, t);
                  r && (n = r);
                }
              } else n = e;
            }),
            n || null
          );
        },
        ct = ["ref"],
        dt = [
          "children",
          "id",
          "selectionComponent",
          "selectionMode",
          "isRadioList",
          "defaultSelectedKeys",
          "selectedKeys",
          "onClick",
          "onSelect",
          "shouldUseVirtualFocus",
          "srLabel",
        ];
      var ut = (function () {
        const e = (e) => {
          let t = e.ref,
            n = (0, i.A)(e, ct);
          const a = n.children,
            s = n.id,
            c = n.selectionComponent,
            d = n.selectionMode,
            u = void 0 === d ? "single" : d,
            p = n.isRadioList,
            m = void 0 !== p && p,
            f = n.defaultSelectedKeys,
            v = n.selectedKeys,
            h = n.onClick,
            g = n.onSelect,
            y = n.shouldUseVirtualFocus,
            C = n.srLabel,
            E = (0, i.A)(n, dt),
            L = (0, l.useRef)(null),
            A = (0, l.useRef)({}),
            S = (0, l.useRef)(v || f || []),
            w = (0, l.useRef)("mouse"),
            x = (0, l.useCallback)((e) => {
              w.current = e.pointerType || "mouse";
            }, []);
          (0, l.useEffect)(() => {
            const e = ("function" == typeof t ? L : t || L).current;
            if (e)
              return (
                e.addEventListener("pointerdown", x),
                () => e.removeEventListener("pointerdown", x)
              );
          }, [x, t]);
          const k = () => {
              const e = A.current,
                t = e.event,
                n = e.values,
                r = e.itemDetails;
              t &&
                n &&
                r &&
                ("function" == typeof g && g(t, n, r), (A.current = {}));
            },
            N = (e, t) => {
              (A.current.event = e), (A.current.itemDetails = t), k();
            },
            $ = (0, l.useMemo)(
              () =>
                (() => {
                  const e = [],
                    t = [];
                  return (
                    l.Children.forEach(a, (n) => {
                      var r, o;
                      Je(n) &&
                        l.Children.forEach(n.props.children, (n) => {
                          var r, o;
                          t.push(`${s}-option-${n.props.value}`),
                            ((null !== (r = n.props) &&
                              void 0 !== r &&
                              r.disabled) ||
                              (null !== (o = n.props) &&
                                void 0 !== o &&
                                o.disableSelectionComponent)) &&
                              e.push(n.props.value);
                        }),
                        et(n) &&
                          ((null !== (r = n.props) &&
                            void 0 !== r &&
                            r.disabled) ||
                            (null !== (o = n.props) &&
                              void 0 !== o &&
                              o.disableSelectionComponent)) &&
                          e.push(n.props.value);
                    }),
                    { disabledKeys: e, listItemsIds: t.join(" ") }
                  );
                })(),
              [a]
            ),
            T = $.disabledKeys,
            P = $.listItemsIds,
            R = tt(a),
            O = (e) => {
              var n, r, o, i;
              const l = S.current,
                a = e ? [...e] : [];
              let s = "";
              if ("single" === u) {
                if (a.length > 0) (S.current = a), (s = a[0]);
                else s = (0, b.A)(l, 1)[0];
              } else {
                const e = a.filter((e) => !l.includes(e)),
                  t = l.filter((e) => !a.includes(e));
                (s = e.length > 0 ? e[0] : t[0]), (S.current = a);
              }
              const c =
                null === (n = t || L) ||
                void 0 === n ||
                null === (n = n.current) ||
                void 0 === n ||
                null === (r = n.querySelector) ||
                void 0 === r
                  ? void 0
                  : r.call(n, `li[data-key="${s}"]`);
              if (!c) return;
              const d = st(R, s),
                p =
                  null == d || null === (o = d.props) || void 0 === o
                    ? void 0
                    : o.value,
                m = ((e) => {
                  const t = e ? Object.assign(e, { value: void 0 }) : {},
                    n = new MouseEvent("click", {
                      bubbles: !0,
                      cancelable: !0,
                      view: window,
                    });
                  return (
                    Object.defineProperty(n, "target", { get: () => t }), n
                  );
                })(c);
              "function" == typeof h && h(m, p),
                "function" == typeof g && g(m, a, { value: p }),
                "function" ==
                  typeof (null == d || null === (i = d.props) || void 0 === i
                    ? void 0
                    : i.onSelect) && d.props.onSelect(m, { value: p });
            },
            M = (m ? X.V : Q.p)(
              (0, o.A)(
                (0, o.A)({ disabledKeys: T, selectionMode: u }, n),
                {},
                {
                  onSelectionChange: (e) => {
                    Ze() && "touch" === w.current
                      ? O(e)
                      : ((A.current.values = Array.from(e || [])), k());
                  },
                  children: R,
                }
              )
            ),
            I = (0, q.X)(
              (0, o.A)(
                (0, o.A)(
                  {
                    "aria-label": C,
                    disallowEmptySelection: !0,
                    disabledKeys: T,
                    selectionMode: u,
                  },
                  n
                ),
                {},
                { shouldUseVirtualFocus: y }
              ),
              M,
              t || L
            ).listBoxProps;
          return l.createElement(
            ue,
            (0, r.A)(
              {
                "aria-owns": P.length ? P : void 0,
                srLabel: C,
                component: "ul",
                listType: "listbox",
              },
              (0, J.v)(E, I),
              { ref: t || L, "aria-label": void 0 }
            ),
            [...M.collection].map((e) => {
              const t = (0, o.A)(
                { key: e.key, state: M, selectionComponent: c },
                Ze() && "touch" === w.current
                  ? {}
                  : {
                      onClick: h,
                      onSelect: (t, n) => {
                        N(t, n),
                          "function" == typeof e.onSelect && e.onSelect(t, n);
                      },
                    }
              );
              return "item" === e.type
                ? l.createElement(it, (0, r.A)({ item: e }, t, { key: e.key }))
                : l.createElement(
                    at,
                    (0, r.A)({ group: e }, t, { listId: s, key: e.key })
                  );
            })
          );
        };
        return (e.displayName = "ListBox"), e;
      })();
      const pt = (e) => {
          let t = e.label,
            n = e.children;
          return t && l.Children.count(n) > 0;
        },
        mt = function* (e) {
          const t = e.children,
            n = e.label,
            r = e["aria-label"],
            o = n || t,
            i = ("string" == typeof o ? o : "") || r || "";
          B(
            i,
            "<ListGroup> needs some plain text contents for accessibility reasons. Please add a `label` or `aria-label` prop."
          ),
            yield {
              type: "section",
              props: e,
              rendered: o,
              textValue: i,
              "aria-label": r || n,
              hasChildNodes: pt,
              *childNodes() {
                if (n) {
                  const e = [];
                  l.Children.forEach(t, (t) => {
                    e.push({ type: "item", element: t });
                  }),
                    yield* e;
                }
              },
            };
        },
        ft = "FloatingMenuGroup",
        vt = ["FloatingMenuGroup", "DropdownGroup"],
        ht = "menu",
        gt = "andes-floating-menu-item-hover";
      var yt = (e, t, n, r) => {
        const i = r.allowUnselect,
          a = r.bottomContent,
          s = r.children,
          c = r.defaultOpen,
          d = r.defaultValue,
          u = r.listId,
          p = r.menuMaxHeight,
          m = r.multiple,
          E = r.offset,
          L = r.onChange,
          A = r.onClose,
          S = r.onOpen,
          w = r.open,
          x = r.popperOptions,
          k = r.searchConfig,
          N = r.style,
          $ = r.topContent,
          T = r.type,
          P = r.value,
          R = r.width,
          O = (0, l.useMemo)(() => {
            var e;
            if (!s) return !1;
            const t = l.Children.toArray(s)[0];
            return C(
              vt,
              null == t || null === (e = t.type) || void 0 === e
                ? void 0
                : e.displayName
            );
          }, [s]),
          I = (0, l.useState)(P || d),
          D = (0, b.A)(I, 2),
          _ = D[0],
          B = D[1],
          j = (0, l.useState)(!1),
          z = (0, b.A)(j, 2),
          F = z[0],
          H = z[1],
          V = (0, l.useState)(void 0),
          U = (0, b.A)(V, 2),
          K = U[0],
          Z = U[1],
          Y = (0, l.useState)(
            "object" == typeof k && (null == k ? void 0 : k.defaultValue)
          ),
          G = (0, b.A)(Y, 2),
          W = G[0],
          q = G[1];
        M({ isDisabled: T === ht || ("select" === T && !F) });
        const X = (0, l.useMemo)(() => void 0 === P, []),
          Q = void 0 !== $,
          J = Q || void 0 !== a || !!k,
          ee = "select" === T ? "combobox" : void 0;
        (0, l.useEffect)(() => {
          X || B(P);
        }, [P, X]);
        const te = (0, l.useMemo)(() => void 0 === w, []),
          ne = te ? F : null != w && w,
          re = J || ("menu" === T && !m) ? "dialog" : "listbox",
          oe = (e, t) => {
            if (
              !(
                i ||
                m ||
                (void 0 !== t && null != t && t.length) ||
                void 0 === _
              )
            )
              return;
            X && B(t);
            let n = t;
            if (!m && Array.isArray(t)) {
              var r = (0, b.A)(t, 1);
              n = r[0];
            }
            k && Z((e) => (Array.isArray(n) ? e : n)),
              "function" == typeof L && L(e, n);
          },
          ie = () => {
            if (k) {
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
                    (T === ht &&
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
                      e || (e = (0, b.A)(t, 1)[0])),
                    e
                  );
                }
                return null;
              })(r);
              e && (e.focus(), (r.scrollTop = e.offsetTop - 48));
            }
          },
          le = (0, l.useCallback)(
            (e) => {
              if (!W) return !0;
              const t = e.props.title;
              return "object" == typeof k &&
                "function" == typeof k.filterCondition
                ? k.filterCondition(W, t, e)
                : t && C(t.toLowerCase(), W.toLowerCase());
            },
            [
              W,
              "object" == typeof k && (null == k ? void 0 : k.filterCondition),
            ]
          ),
          ae = (0, l.useMemo)(() => {
            if (!s) return null;
            if (O) {
              let e = 0;
              const t = [];
              return (
                l.Children.forEach(s, (n, r) => {
                  const o = [];
                  l.Children.forEach(
                    null == n ? void 0 : n.props.children,
                    (t) => {
                      le(t) &&
                        o.push(
                          (0, l.cloneElement)(t, { index: e, groupIndex: r })
                        ),
                        (e += 1);
                    }
                  ),
                    o.length > 0 &&
                      t.push((0, l.cloneElement)(n, { children: o }));
                }),
                t
              );
            }
            const e = [];
            return (
              l.Children.forEach(s, (t, n) => {
                le(t) && e.push((0, l.cloneElement)(t, { index: n }));
              }),
              e
            );
          }, [s, O, le]);
        (0, l.useEffect)(() => {
          if (F && k && void 0 !== K) {
            const n = t.current;
            if (n) {
              var e;
              const t =
                null === (e = document) || void 0 === e
                  ? void 0
                  : e.getElementById(`${u}-option-${K}`);
              if (t && p) {
                const e = p - 52,
                  r = Math.floor(e / 48) - 1;
                n.scrollTop = t.offsetTop - 48 * r;
              }
            }
          }
        }, [k, t, K, u, F]);
        const se = (e) => {
            H(!0), Q || setTimeout(ie, 0), "function" == typeof S && S(e);
          },
          ce = (t, r) => {
            const o = e.current;
            H(!1),
              k &&
                (() => {
                  var e;
                  const t =
                    null == n || null === (e = n.current) || void 0 === e
                      ? void 0
                      : e.querySelector("label");
                  null != t && t.control && (t.control.value = "");
                  q(""),
                    "object" == typeof k &&
                      "function" == typeof k.onChange &&
                      k.onChange("");
                })(),
              o && !r && setTimeout(() => o.focus(), 0),
              "function" == typeof A && A();
          };
        (0, l.useEffect)(() => {
          c && setTimeout(se, 0);
        }, []),
          (0, l.useEffect)(() => {
            te || (w ? setTimeout(se, 0) : F && ce());
          }, [w]);
        const de = (e) => {
            e.preventDefault(), te ? se(e) : "function" == typeof S && S(e);
          },
          ue = () => {
            te ? ce() : "function" == typeof A && A();
          };
        return {
          menuProps: {
            visible: F,
            onSelectionChange: oe,
            options: ae,
            selectedKeys: Array.isArray(_)
              ? _
              : "string" == typeof _ || "number" == typeof _
              ? [_]
              : [],
            style: (0, o.A)(
              (0, o.A)({}, p ? { maxHeight: p, overflowY: "auto" } : {}),
              {},
              { width: R },
              N
            ),
            popperOptions: x,
            plugins: [
              {
                name: "hideOnEsc",
                defaultValue: !0,
                fn(e) {
                  let t = e.popper;
                  function n(e) {
                    e.key === g && ue();
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
            offset: E,
            onClickOutside: te
              ? (e) => {
                  ce(0, !0);
                }
              : A,
            closeMenu: te ? ce : A,
            onSearchFocus: k
              ? (e) => {
                  setTimeout(() => {
                    var e;
                    return null === (e = n.current) || void 0 === e
                      ? void 0
                      : e.focus();
                  }, 0);
                  const r = O
                    ? null == ae
                      ? void 0
                      : ae.reduce((e, t) => [...e, ...t.props.children], [])
                    : ae || [];
                  if (!r) return;
                  const o = r.length;
                  Z((n) => {
                    var i, l;
                    let a = r.findIndex((e) => e.props.value === n);
                    switch (null == e ? void 0 : e.code) {
                      case v:
                        a += 1;
                        break;
                      case f:
                        if (-1 === a || 0 === a) {
                          a = o - 1;
                          break;
                        }
                        a -= 1;
                        break;
                      default:
                        a = 0;
                    }
                    const s = a % o;
                    return (
                      ((e, t) => {
                        const n = (e, n, r) => {
                          e[n].classList.contains(gt) &&
                            e[n].classList.remove(gt),
                            t === (void 0 === r ? n : r) &&
                              e[n].classList.add(gt);
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
                        s
                      ),
                      null === (l = r[s]) ||
                      void 0 === l ||
                      null === (l = l.props) ||
                      void 0 === l
                        ? void 0
                        : l.value
                    );
                  });
                }
              : void 0,
            onSearchSelectionChange: k
              ? (e) => {
                  K &&
                    ((m || i) && Array.isArray(_) && (_ || []).indexOf(K) > -1
                      ? oe(
                          e,
                          _.filter((e) => e !== K)
                        )
                      : oe(e, m ? [...(_ || []), K] : [K]));
                }
              : void 0,
            onSearchChangeText: k ? (e) => q(e) : void 0,
            getFocusedItem: k ? () => K : void 0,
            onMount: k ? r.onMount : void 0,
          },
          triggerProps: {
            role: ee,
            "aria-expanded": F,
            "aria-controls": (() => {
              if ("select" === T && ne)
                return ee && J
                  ? `${null == r ? void 0 : r.id}-dialog`
                  : `${null == r ? void 0 : r.id}-list`;
            })(),
            "aria-haspopup": re,
            onClick: (e) => {
              te
                ? F
                  ? ce()
                  : se(e)
                : w
                ? "function" == typeof A && A()
                : "function" == typeof S && S(e);
            },
            onKeyDown: (e) => {
              switch (e.code) {
                case g:
                  ue();
                  break;
                case v:
                case f:
                  "select" === T && de(e);
                  break;
                case h:
                case y:
                  de(e);
              }
            },
          },
        };
      };
      const bt = "andes-floating-menu",
        Ct = `${bt}--multiple`,
        Et = "andes-form-control",
        Lt = `${bt}--search`;
      var At = {
          "andes-floating-menuNo hay resultados": [null, "No results"],
          "andes-floating-menuAbrir buscador": [null, "Open search tool"],
          "andes-floating-menuBuscar": [null, "Search"],
          "andes-floating-menuBorrar": [null, "Delete search"],
          "andes-floating-menuCerrar menú": [null, "Close menu"],
        },
        St = {
          "andes-floating-menuNo hay resultados": [null, "No hay resultados"],
          "andes-floating-menuAbrir buscador": [null, "Abrir buscador"],
          "andes-floating-menuBuscar": [null, "Buscar"],
          "andes-floating-menuBorrar": [null, "Borrar"],
          "andes-floating-menuCerrar menú": [null, "Cerrar menú"],
        },
        wt = {
          "andes-floating-menuNo hay resultados": [null, "Sem resultados"],
          "andes-floating-menuAbrir buscador": [
            null,
            "Abrir mecanismo de busca",
          ],
          "andes-floating-menuBuscar": [null, "Procurar"],
          "andes-floating-menuBorrar": [null, "Excluir"],
          "andes-floating-menuCerrar menú": [null, "Fechar menu"],
        },
        xt = {
          "andes-floating-menuNo hay resultados": [null, "无结果"],
          "andes-floating-menuAbrir buscador": [null, "打开搜索工具"],
          "andes-floating-menuBuscar": [null, "搜索"],
          "andes-floating-menuBorrar": [null, "删除搜索"],
          "andes-floating-menuCerrar menú": [null, "关闭菜单"],
        };
      var kt = (function () {
        const e = (e) => {
          let t = e.className,
            n = e.defaultValue,
            o = e.inputProps,
            i = void 0 === o ? {} : o,
            a = e.onChange,
            u = e.onClear,
            p = e.onKeyDown,
            m = e.placeholder,
            f = e.size,
            v = void 0 === f ? "small" : f,
            h = e.srLabel,
            g = e.value,
            y = e.ref;
          const C = (0, c.AH)("@andes/floating-menu", {
              en: At,
              "es-AR": St,
              "pt-BR": wt,
              "zh-CN": xt,
            }),
            E = C.device,
            L = C.i18n,
            A = (0, d.wR)(),
            S = A.getThemedComponentClasses,
            w = A.themeHash,
            x = (0, l.useRef)(null),
            k = (0, l.useMemo)(() => void 0 !== g, []),
            N = (0, l.useState)(!1),
            $ = (0, b.A)(N, 2),
            T = $[0],
            P = $[1],
            R = (0, l.useState)(!1),
            O = (0, b.A)(R, 2),
            M = O[0],
            D = O[1],
            V = (0, l.useRef)(!0),
            U = "ios" === (null == E ? void 0 : E.osName);
          B(
            !(null != i && i.disabled),
            "If you are using the 'disabled' property to temporarily block the SearchBox, it is recommended to use loading instead.\nThe disabled state will be removed in future versions."
          ),
            (0, l.useEffect)(() => {
              !k && n && D(!0), (V.current = !1);
            }, []),
            (0, l.useEffect)(() => {
              if (k) {
                const e = !!g && (null == g ? void 0 : g.length) > 0;
                D(e);
              }
            }, [k, g, D]),
            (0, l.useEffect)(() => {
              var e;
              T && (null === (e = x.current) || void 0 === e || e.focus());
            }, [T]);
          const K = () =>
              "small" === v
                ? l.createElement(z, { color: "currentColor" })
                : l.createElement(H, { color: "currentColor" }),
            Z = () =>
              "small" === v
                ? l.createElement(j, { color: "currentColor" })
                : l.createElement(F, { color: "currentColor" }),
            Y = (e) => {
              var t;
              e.preventDefault(),
                !k && x.current && (x.current.value = ""),
                (e.target.value = ""),
                D(!1),
                "function" == typeof u && u(e),
                "function" == typeof a && a(e),
                null === (t = x.current) || void 0 === t || t.focus();
            },
            G = s()(`${Et}__close-icon`, { [`${Et}__close-icon-visible`]: M }),
            W = s()(Lt, `${Lt}--size-${v}`, t, {
              [`${Lt}--web-mobile-ios`]: U,
              [`${Lt}--focused`]: T,
            });
          return l.createElement(
            "div",
            (0, r.A)(
              { ref: y, className: null == S ? void 0 : S("searchbox") },
              w
            ),
            l.createElement(
              I.v,
              { within: !0, isTextInput: !0, focusRingClass: "focus-visible" },
              l.createElement(
                "div",
                {
                  className: W,
                  "data-andes-searchbox": !0,
                  "data-andes-searchbox-variant": "simple",
                  "data-andes-searchbox-size": v,
                },
                l.createElement(
                  "label",
                  null,
                  l.createElement(_.s, null, h || L.pgettext(bt, "Buscar")),
                  l.createElement(
                    "input",
                    (0, r.A)({}, i, {
                      className: `${Et}__field`,
                      value: g,
                      defaultValue: n,
                      placeholder: m || `${L.pgettext(bt, "Buscar")}`,
                      onChange: (e) => {
                        var t, n;
                        const r =
                          !(
                            null == x ||
                            null === (t = x.current) ||
                            void 0 === t ||
                            !t.value
                          ) &&
                          (null == x || null === (n = x.current) || void 0 === n
                            ? void 0
                            : n.value.length) > 0;
                        D(r), "function" == typeof a && a(e);
                      },
                      onBlur: (e) => {
                        const t = i.onBlur;
                        P(!1), "function" == typeof t && t(e);
                      },
                      onFocus: (e) => {
                        const t = i.onFocus;
                        P(!0), "function" == typeof t && t(e);
                      },
                      ref: x,
                      onKeyDown: p,
                      "data-andes-searchbox-input": !0,
                    })
                  )
                ),
                l.createElement(
                  "button",
                  {
                    className: G,
                    onClick: Y,
                    onMouseDown: Y,
                    "aria-label": `${L.pgettext(bt, "Borrar")}`,
                    type: "button",
                    "data-andes-searchbox-close": !0,
                  },
                  l.createElement(Z, null)
                ),
                l.createElement(
                  "div",
                  {
                    className: `${Et}__search-icon`,
                    "data-andes-searchbox-search": !0,
                  },
                  l.createElement(K, null)
                )
              )
            )
          );
        };
        return (e.displayName = "SearchBox"), e;
      })();
      const Nt = (e) => {
        let t = e.visible,
          n = e.children,
          r = e.id,
          o = e.dialogSrLabel,
          i = e.closeMenu;
        B(
          o,
          "<FloatingMenu> needs some plain text content for the dialog element for accessibility reasons.\nPlease add a 'dialogSrLabel' prop."
        );
        const a = (0, c.AH)("@andes/floating-menu", {
            en: At,
            "es-AR": St,
            "pt-BR": wt,
            "zh-CN": xt,
          }),
          s = a.device,
          d = a.i18n,
          u =
            "android" === (null == s ? void 0 : s.osName) &&
            (null == s ? void 0 : s.mobile),
          p = l.createElement(
            _.Y,
            { onClick: i, type: "button" },
            d.pgettext(bt, "Cerrar menú")
          );
        return l.createElement(
          "div",
          {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": o,
            id: `${r}-dialog`,
          },
          l.createElement(
            D.n1,
            { contain: !u && t, restoreFocus: !0, autoFocus: !0 },
            u && p,
            n
          )
        );
      };
      var $t = (e) => {
        let t = e.children,
          n = e.visible,
          r = e.topContent,
          o = e.bottomContent,
          i = e.dialog,
          a = e.dialogSrLabel,
          s = e.id,
          c = e.closeMenu;
        const d = void 0 !== r,
          u = d || void 0 !== o,
          p = l.createElement(l.Fragment, null, r, t, o);
        return !1 === i
          ? p
          : i || u
          ? d
            ? l.createElement(
                l.Fragment,
                null,
                n &&
                  l.createElement(
                    Nt,
                    { visible: n, id: s, dialogSrLabel: a, closeMenu: c },
                    p
                  )
              )
            : l.createElement(
                Nt,
                { visible: n, id: s, dialogSrLabel: a, closeMenu: c },
                p
              )
          : p;
      };
      var Tt = (function () {
        const e = (e) => {
          let t = e.defaultValue,
            n = e.getFocusedItem,
            r = e.handleKeyDown,
            o = e.list,
            i = e.listId,
            a = e.onChange,
            s = e.placeholder,
            c = e.visible,
            d = e.dialogSrLabel,
            u = e.id,
            p = e.ref;
          const m = {
            role: "combobox",
            "aria-label": s,
            "aria-autocomplete": "list",
            "aria-controls": i,
            "aria-activedescendant": n() ? `${i}-option-${n()}` : void 0,
            "aria-expanded": !0,
          };
          return l.createElement(
            $t,
            {
              id: u,
              dialogSrLabel: d,
              visible: c,
              topContent: l.createElement(
                "div",
                { className: `${bt}__search-box` },
                l.createElement(kt, {
                  ref: p,
                  defaultValue: t,
                  onChange: a,
                  placeholder: s,
                  onKeyDown: r,
                  inputProps: m,
                })
              ),
            },
            o
          );
        };
        return (e.displayName = "FloatingMenuSearch"), e;
      })();
      const Pt = [
        "children",
        "className",
        "defaultValue",
        "onSelect",
        "value",
        "ref",
      ];
      var Rt = (function () {
        const e = (e) => {
          let t = e.children,
            n = e.className,
            o = e.defaultValue,
            a = e.onSelect,
            c = e.value,
            d = e.ref,
            u = (0, i.A)(e, Pt);
          const p = (0, l.useState)(c || o),
            m = (0, b.A)(p, 2),
            f = m[0],
            v = m[1],
            h = (0, l.useMemo)(() => void 0 === c, []);
          (0, l.useEffect)(() => {
            h || v(c);
          }, [c]);
          const g = () => (Array.isArray(f) ? f : []),
            y = {};
          h ? o && (y.defaultSelectedKeys = g()) : (y.selectedKeys = g());
          const C = s()(Ct, n);
          return l.createElement(
            ut,
            (0, r.A)(
              {
                className: C,
                selectionComponent: l.createElement(Y, { srHidden: !0 }),
                selectionMode: "multiple",
                ref: d,
                onSelect: (e, t, n) => {
                  h && v(t), "function" == typeof a && a(e, t, n);
                },
              },
              u,
              y
            ),
            t
          );
        };
        return (e.displayName = "FloatingMenuMultiple"), e;
      })();
      const Ot = (function () {
        const e = (e) => {
          let t = e.closeMenu,
            n = e.bottomContent,
            o = e.i18n,
            i = e.id,
            a = e.multiple,
            s = void 0 !== a && a,
            c = e.onKeyDown,
            d = e.onSelect,
            u = e.options,
            p = e.search,
            m = void 0 !== p && p,
            f = e.selectedKeys,
            v = e.srLabel,
            h = e.topContent,
            g = e.type,
            y = void 0 === g ? "menu" : g,
            b = e.visible,
            C = e.dialogSrLabel,
            E = e.ref;
          if (!u || !u.length)
            return l.createElement(
              $t,
              {
                visible: b,
                topContent: h,
                bottomContent: n,
                dialog: !m,
                id: i,
                dialogSrLabel: C,
              },
              l.createElement(
                "div",
                {
                  className: `${bt}__no-results`,
                  "data-andes-floating-menu-no-result": !0,
                },
                o.pgettext(bt, "No hay resultados")
              )
            );
          const L = { id: i, ref: E, className: bt, onKeyDown: c, srLabel: v };
          if (s)
            return l.createElement(
              $t,
              {
                visible: b,
                topContent: h,
                bottomContent: n,
                dialog: !m,
                id: i,
                dialogSrLabel: C,
              },
              l.createElement(
                Rt,
                (0, r.A)({}, L, {
                  onSelect: d,
                  value: f,
                  shouldUseVirtualFocus: !!m,
                }),
                u
              )
            );
          if ("select" === y || m) {
            const e = void 0 !== h || void 0 !== n;
            return l.createElement(
              $t,
              {
                visible: b,
                topContent: h,
                bottomContent: n,
                dialog: e && !m,
                id: i,
                dialogSrLabel: C,
              },
              l.createElement(
                ut,
                (0, r.A)({}, L, {
                  onSelect: d,
                  selectionMode: s ? "multiple" : "single",
                  selectedKeys: f,
                  shouldUseVirtualFocus: !!m,
                }),
                u
              )
            );
          }
          const A = (e) =>
            (0, l.cloneElement)(e, {
              onClick: (t, n) =>
                ((e, t, n) => {
                  "function" == typeof e && e(t, n),
                    "function" == typeof d && d(t, n);
                })(e.props.onClick, t, n),
              tabIndex: void 0,
            });
          return l.createElement(
            $t,
            {
              visible: b,
              topContent: h,
              bottomContent: n,
              dialog: !0,
              id: i,
              dialogSrLabel: C,
              closeMenu: t,
            },
            l.createElement(
              ue,
              L,
              l.Children.map(u, (e) => {
                var t;
                if (
                  (null == e || null === (t = e.type) || void 0 === t
                    ? void 0
                    : t.displayName) === ft
                ) {
                  const t = l.Children.map(e.props.children, A);
                  return (0, l.cloneElement)(e, { children: t });
                }
                return A(e);
              })
            )
          );
        };
        return (e.displayName = "FloatingMenuList"), e;
      })();
      var Mt = Ot;
      var It,
        Dt = (e) => {
          let t = e.search;
          if (t)
            return "boolean" == typeof t
              ? { search: !0 }
              : (0, o.A)((0, o.A)({}, t), {}, { search: !0 });
        };
      const _t = {
          sendCustom: () => {},
          sendHeadless: () => {},
          sendSlots: () => {},
          sendStyleOverrides: () => {},
          sendTokens: () => {},
        },
        Bt = {
          SSR: [
            null == _t || null === (It = _t.sendSlots) || void 0 === It
              ? void 0
              : It.call(_t, "Floating-Menu", (e) => {
                  let t = e.topContent,
                    n = e.bottomContent,
                    r = e.search;
                  return (void 0 !== t && !r) || void 0 !== n;
                }),
          ],
        },
        jt = ["ref"],
        zt = [
          "closeMenu",
          "getFocusedItem",
          "onSearchChangeText",
          "onSearchFocus",
          "onSearchSelectionChange",
          "onSelectionChange",
          "options",
          "selectedKeys",
        ];
      var Ft = m(
        (function () {
          const e = (e) => {
            let t = e.ref,
              n = (0, i.A)(e, jt);
            const a = n.allowUnselect,
              p = void 0 !== a && a,
              m = n.appendTo,
              g = n.bottomContent,
              y = n.className,
              b = n.defaultOpen,
              C = void 0 !== b && b,
              E = n.id,
              L = n.menuMaxHeight,
              A = n.multiple,
              S = void 0 !== A && A,
              w = n.placement,
              x = void 0 === w ? "bottom" : w,
              k = n.search,
              N = void 0 !== k && k,
              $ = n.srLabel,
              T = n.topContent,
              P = n.trigger,
              R = n.type,
              O = void 0 === R ? "menu" : R,
              M = n.width,
              I = void 0 === M ? 280 : M,
              D = n.dialogSrLabel,
              _ = (0, c.Bi)(E),
              B = (0, d.wR)(),
              j = B.getThemedComponentClasses,
              z = B.themeHash;
            null == j || j("list");
            const F = Dt({ search: N }),
              H = (0, c.AH)("@andes/floating-menu", {
                en: At,
                "es-AR": St,
                "pt-BR": wt,
                "zh-CN": xt,
              }).i18n,
              V = `${_}-list`,
              U = (0, l.useRef)(null),
              K = (0, l.useRef)(null),
              Z = (0, l.useRef)(null),
              Y = (0, l.useRef)(!1),
              G = yt(
                U,
                K,
                Z,
                (0, o.A)(
                  (0, o.A)({}, n),
                  {},
                  {
                    allowUnselect: p,
                    defaultOpen: C,
                    multiple: S,
                    placement: x,
                    type: O,
                    width: I,
                    listId: V,
                    id: _,
                    searchConfig: F,
                  }
                )
              ),
              W = G.menuProps,
              q = G.triggerProps,
              X = W.closeMenu,
              Q = W.getFocusedItem,
              J = W.onSearchChangeText,
              ee = W.onSearchFocus,
              te = W.onSearchSelectionChange,
              ne = W.onSelectionChange,
              re = W.options,
              oe = W.selectedKeys,
              ie = (0, i.A)(W, zt);
            (0, l.useEffect)(() => {
              Y.current && ((Y.current = !1), "function" == typeof ee && ee());
            }, [Y.current]),
              (0, l.useEffect)(() => {
                const e = K.current;
                e &&
                  F &&
                  requestAnimationFrame(() => {
                    (e.style.maxHeight = L ? L - 52 + "px" : ""),
                      (e.style.overflowY = "auto");
                  });
              }, [K.current, L, F]);
            const le = (e, t) => {
                t ? ne(e, t) : "function" == typeof te && te(e),
                  S || "function" != typeof X || X();
              },
              ae = (e) => {
                switch (e.code) {
                  case "Tab":
                    "menu" !== O && e.preventDefault();
                    break;
                  case f:
                  case v:
                    F && ee(e);
                    break;
                  case h:
                    F && le(e);
                }
              },
              se = (e) => {
                const t = e.target.value;
                (Y.current = !0),
                  "function" == typeof J && J(t),
                  "function" == typeof (null == F ? void 0 : F.onChange) &&
                    F.onChange(t);
              },
              ce = s()(bt, y, { [`${bt}--multiple`]: S }),
              de = s()(
                `${bt}__popper-content`,
                null == j ? void 0 : j("floatingMenu")
              );
            return l.createElement(
              "div",
              { className: ce, ref: t },
              l.createElement(
                u.N,
                (0, r.A)(
                  {
                    appendTo: m,
                    content: (() => {
                      const e = l.createElement(Mt, {
                        closeMenu: X,
                        id: V,
                        multiple: S,
                        onKeyDown: ae,
                        onSelect: le,
                        options: re,
                        ref: K,
                        selectedKeys: oe,
                        type: O,
                        search: null == F ? void 0 : F.search,
                        srLabel: $,
                        visible: W.visible,
                        i18n: H,
                        topContent: F ? void 0 : T,
                        bottomContent: g,
                        dialogSrLabel: D,
                      });
                      return F
                        ? l.createElement(
                            Tt,
                            (0, r.A)(
                              {
                                getFocusedItem: Q,
                                handleKeyDown: ae,
                                list: e,
                                listId: V,
                                ref: Z,
                                visible: W.visible,
                                id: _,
                              },
                              F,
                              { onChange: se, dialogSrLabel: D }
                            )
                          )
                        : e;
                    })(),
                    interactive: !0,
                    placement: x,
                    id: `${_}-popper`,
                    focusScope: !0,
                    classNames: { content: de },
                    attrs: {
                      root: z,
                      content: (0, o.A)({ "data-andes-floating-menu": !0 }, z),
                    },
                  },
                  ie
                ),
                (0, l.cloneElement)(P, (0, o.A)({ ref: U }, q))
              )
            );
          };
          return (e.displayName = "FloatingMenu"), e;
        })(),
        Bt
      );
      const Ht = ["children"];
      var Vt = (function () {
        const e = (e) => {
          let t = e.children,
            n = (0, i.A)(e, Ht);
          return l.createElement(Ee, n, t);
        };
        return (e.getCollectionNode = mt), (e.displayName = ft), e;
      })();
      const Ut = [
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
      var Kt = (function () {
        const e = (e) => {
          let t = e.children,
            n = e.description,
            a = e.disabled,
            s = void 0 !== a && a,
            c = e.groupIndex,
            d = e.href,
            u = e.index,
            p = e.onClick,
            m = e.rightContent,
            f = e.selected,
            v = void 0 !== f && f,
            h = e.title,
            g = e.value,
            y = (0, i.A)(e, Ut);
          const b = (0, o.A)(
              {
                description: n,
                disabled: s,
                groupIndex: c,
                index: u,
                rightContent: m,
                selected: v,
                title: h,
                value: g,
              },
              y
            ),
            C = (e) => {
              s || ("function" == typeof p && p(e, g));
            };
          return d || p
            ? l.createElement(
                _e,
                (0, r.A)({}, b, {
                  href: d,
                  onClick: C,
                  legacyBehaviorSlot: !0,
                  chevron: !1,
                }),
                t
              )
            : l.createElement(Fe, (0, r.A)({}, b, { onClick: C }), t);
        };
        return (
          (e.getCollectionNode = Ke), (e.displayName = "FloatingMenuItem"), e
        );
      })();
    },
    39157(e, t, n) {
      "use strict";
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
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "currentColor",
          },
          o && r.createElement("title", null, o),
          r.createElement("path", {
            d: "M9.35229 3.70447L6.00004 7.05672L2.64779 3.70447L1.85229 4.49996L6.00004 8.64771L10.1478 4.49996L9.35229 3.70447Z",
            fill: "currentColor",
          })
        );
      };
    },
    75277(e, t, n) {
      "use strict";
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
            d: "M12.6287 5.19496L7.83304 9.99059L12.6337 14.7912L11.7851 15.6397L6.13599 9.99059L11.7801 4.34644L12.6287 5.19496Z",
            fill: "currentColor",
          })
        );
      };
    },
    28498(e, t, n) {
      "use strict";
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
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "currentColor",
          },
          o && r.createElement("title", null, o),
          r.createElement("path", {
            d: "M20.0549 6.99999L11.0596 15.9953L20.0642 25L19.0036 26.0607L8.93823 15.9953L18.9942 5.93933L20.0549 6.99999Z",
            fill: "currentColor",
          })
        );
      };
    },
    77005(e, t, n) {
      "use strict";
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
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "currentColor",
          },
          o && r.createElement("title", null, o),
          r.createElement("path", {
            d: "M4.89779 1.85229L4.10229 2.64779L7.45455 6.00004L4.10229 9.35229L4.89779 10.1478L9.04554 6.00004L4.89779 1.85229Z",
            fill: "currentColor",
          })
        );
      };
    },
    42575(e, t, n) {
      "use strict";
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
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "currentColor",
          },
          o && r.createElement("title", null, o),
          r.createElement("path", {
            d: "M11.943 6.99999L20.9383 15.9953L11.9336 25L12.9943 26.0607L23.0596 15.9953L13.0036 5.93933L11.943 6.99999Z",
            fill: "currentColor",
          })
        );
      };
    },
    46232(e, t, n) {
      "use strict";
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
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "currentColor",
          },
          o && r.createElement("title", null, o),
          r.createElement("path", {
            d: "M2.64779 7.89771L6.00004 4.54546L9.35229 7.89771L10.1478 7.10222L6.00004 2.95447L1.85229 7.10222L2.64779 7.89771Z",
            fill: "currentColor",
          })
        );
      };
    },
    22806(e, t, n) {
      "use strict";
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
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
          },
          o && r.createElement("title", null, o),
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.45979 5.38121V4.18121H4.17113C2.2091 4.18121 0.748047 5.96728 0.748047 7.99997C0.748047 8.99752 1.09992 9.93567 1.6902 10.6325C2.30273 11.3555 3.17197 11.8187 4.17113 11.8187L7.45979 11.8187V10.6187H4.17113C3.61167 10.6187 3.07314 10.3621 2.66627 9.92472C2.23225 9.45815 1.94805 8.78588 1.94805 7.99997C1.94805 7.21407 2.23225 6.5418 2.66627 6.07522C3.07314 5.63783 3.61167 5.38121 4.17113 5.38121H7.45979ZM14.3101 5.36747C13.6976 4.6444 12.8283 4.18121 11.8292 4.18121H8.54051V5.38121H11.8292C12.3886 5.38121 12.9272 5.63783 13.334 6.07522C13.768 6.5418 14.0522 7.21407 14.0522 7.99997C14.0522 8.78588 13.768 9.45815 13.334 9.92472C12.9272 10.3621 12.3886 10.6187 11.8292 10.6187H8.54051V11.8187L11.8292 11.8187C11.8387 11.8187 11.8483 11.8187 11.8578 11.8186C13.7954 11.8014 15.2522 10.0342 15.2522 7.99997C15.2522 7.00243 14.9004 6.06428 14.3101 5.36747ZM4.07432 7.50705V8.70705H11.9264V7.50705H4.07432Z",
            fill: "currentColor",
          })
        );
      };
    },
    88824(e, t, n) {
      "use strict";
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
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19 4H1V16H19V4ZM17.799 7.43001V14.799H2.199V7.42887L8.51042 11.0391L8.69768 11.1377C9.58349 11.5647 10.6282 11.5319 11.4896 11.0391L17.799 7.43001ZM17.799 6.04756V5.199H2.199V6.04641L9.10625 9.99753C9.60965 10.2855 10.2174 10.3117 10.7398 10.0761L10.8938 9.99753L17.799 6.04756Z",
            fill: "currentColor",
          })
        );
      };
    },
    2013(e, t, n) {
      "use strict";
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
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
          },
          o && r.createElement("title", null, o),
          r.createElement("path", {
            d: "M7.99479 4.40034C8.65746 4.40034 9.19465 3.86314 9.19465 3.20048C9.19465 2.53781 8.65746 2.00061 7.99479 2.00061C7.33212 2.00061 6.79492 2.53781 6.79492 3.20048C6.79492 3.86314 7.33212 4.40034 7.99479 4.40034Z",
            fill: "currentColor",
          }),
          r.createElement("path", {
            d: "M9.19465 7.99994C9.19465 8.66261 8.65746 9.19981 7.99479 9.19981C7.33212 9.19981 6.79492 8.66261 6.79492 7.99994C6.79492 7.33727 7.33212 6.80007 7.99479 6.80007C8.65746 6.80007 9.19465 7.33727 9.19465 7.99994Z",
            fill: "currentColor",
          }),
          r.createElement("path", {
            d: "M9.19465 12.7994C9.19465 13.4621 8.65746 13.9993 7.99479 13.9993C7.33212 13.9993 6.79492 13.4621 6.79492 12.7994C6.79492 12.1367 7.33212 11.5995 7.99479 11.5995C8.65746 11.5995 9.19465 12.1367 9.19465 12.7994Z",
            fill: "currentColor",
          })
        );
      };
    },
    17405(e, t, n) {
      "use strict";
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
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
          },
          o && r.createElement("title", null, o),
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.5992 3.79478C14.5992 5.1233 13.5222 6.20028 12.1937 6.20028C11.4696 6.20028 10.8203 5.88038 10.3793 5.37422L6.14671 7.49339C6.18173 7.65672 6.20016 7.82622 6.20016 8.00001C6.20016 8.1729 6.18192 8.34154 6.14726 8.50409L10.3776 10.6164C10.8186 10.1091 11.4687 9.78834 12.1937 9.78834C13.5222 9.78834 14.5992 10.8653 14.5992 12.1938C14.5992 13.5224 13.5222 14.5993 12.1937 14.5993C10.8651 14.5993 9.78816 13.5224 9.78816 12.1938C9.78816 12.021 9.8064 11.8523 9.84106 11.6898L5.61076 9.57748C5.16973 10.0848 4.51965 10.4055 3.79466 10.4055C2.46614 10.4055 1.38916 9.32854 1.38916 8.00001C1.38916 6.67149 2.46614 5.59451 3.79466 5.59451C4.51871 5.59451 5.16805 5.91441 5.60904 6.42058L9.84161 4.30141C9.80659 4.13807 9.78816 3.96858 9.78816 3.79478C9.78816 2.46626 10.8651 1.38928 12.1937 1.38928C13.5222 1.38928 14.5992 2.46626 14.5992 3.79478ZM10.9882 3.79478C10.9882 4.46056 11.5279 5.00028 12.1937 5.00028C12.8594 5.00028 13.3992 4.46056 13.3992 3.79478C13.3992 3.129 12.8594 2.58928 12.1937 2.58928C11.5279 2.58928 10.9882 3.129 10.9882 3.79478ZM3.79466 9.20551C3.12888 9.20551 2.58916 8.66579 2.58916 8.00001C2.58916 7.33423 3.12888 6.79451 3.79466 6.79451C4.46044 6.79451 5.00016 7.33423 5.00016 8.00001C5.00016 8.66579 4.46044 9.20551 3.79466 9.20551ZM12.1937 13.3993C11.5279 13.3993 10.9882 12.8596 10.9882 12.1938C10.9882 11.5281 11.5279 10.9883 12.1937 10.9883C12.8594 10.9883 13.3992 11.5281 13.3992 12.1938C13.3992 12.8596 12.8594 13.3993 12.1937 13.3993Z",
            fill: "currentColor",
          })
        );
      };
    },
    89213(e, t, n) {
      "use strict";
      n.d(t, { _: () => o });
      var r = n(96540);
      var o = (e) => {
        let t = e.className,
          n = e.width,
          o = e.height,
          i = e.src,
          l = e.src2x,
          a = e.title;
        return r.createElement("img", {
          className: t,
          width: n,
          height: o,
          src: i,
          alt: a,
          srcSet: l && `${i} 1x, ${l} 2x`,
        });
      };
    },
    57051(e, t, n) {
      "use strict";
      n.d(t, { Y: () => C });
      var r = n(58168),
        o = n(80045),
        i = n(96540),
        l = n(46942),
        a = n.n(l),
        s = n(98335),
        c = n(69247),
        d = n(25925),
        u = n(89379),
        p = n(92275),
        m = n(95990),
        f = n(48529);
      const v = "fill",
        h = "andes-progress-indicator-linear",
        g = `${h}__segment`;
      delete (0, u.A)({}, p.m.propTypes).children;
      var y = (e) => {
        let {
          id: t,
          size: n = "small",
          srLabel: o,
          value: l = 0,
          tooltipConfig: c,
          label: d,
        } = e;
        const u = `${h}--comparison`,
          m = a()(u, { [`${u}--${n}`]: n }),
          f = { left: `${l}%` },
          v = () =>
            i.createElement(
              i.Fragment,
              null,
              i.createElement("span", { className: `${m}-upper-row` }),
              i.createElement("span", { className: `${m}-lower-row` })
            );
        return i.createElement(
          "div",
          { className: `${h}--comparison`, style: f },
          c
            ? i.createElement(
                p.m,
                (0, r.A)({}, c, { className: `${m}-tooltip` }),
                i.createElement(
                  "button",
                  {
                    className: `${m}-container`,
                    "aria-labelledby": `${t}-label`,
                    "aria-label": o,
                    type: "button",
                  },
                  v()
                )
              )
            : i.createElement(
                "div",
                { className: `${m}-notooltip-container` },
                o && i.createElement(s.s, null, o),
                v()
              ),
          d &&
            i.createElement(
              "span",
              { className: `${m}-value`, id: `${t}-label` },
              d
            )
        );
      };
      const b = ["ref"];
      var C = (function () {
        const e = (e) => {
          let { ref: t } = e,
            n = (0, o.A)(e, b);
          const {
              id: l,
              className: u,
              size: p = "small",
              color: C,
              value: E = 0,
              highlight: L = !1,
              inverted: A = !1,
              segments: S,
              srLabel: w,
              srValueText: x,
              srAnnouncement: k,
              comparison: N,
            } = n,
            $ = !!S,
            T = (0, c.Bi)(l),
            { getThemedComponentClasses: P, themeHash: R } = (0, m.wR)(),
            O = (0, d.A)(),
            M = (0, i.useRef)(void 0),
            [I, D] = (0, i.useState)(k);
          (0, i.useEffect)(() => {
            D(k), (M.current = setTimeout(() => D(""), 30));
          }, [k]),
            (0, i.useEffect)(() => () => clearTimeout(M.current), []);
          const _ = $ ? {} : { width: `${E}%`, backgroundColor: C },
            B = { [`${h}--${p}`]: p, [`${h}--segmented`]: $ },
            j = a()(h, u, B, null == P ? void 0 : P("progressIndicator")),
            z = a()(
              v,
              $
                ? { [`${v}--segmented`]: $ }
                : {
                    [`${v}--empty`]: 0 === E,
                    [`${v}--highlighted`]: L,
                    [`${v}--inverted`]: A,
                  }
            );
          return i.createElement(
            "div",
            (0, r.A)(
              {
                className: j,
                ref: t,
                "data-andes-progress-indicator-linear": !0,
                "data-andes-progress-indicator-linear-size": p,
              },
              R
            ),
            i.createElement(
              s.s,
              { role: "status", "aria-live": "polite", "aria-atomic": "true" },
              O && I
            ),
            i.createElement(
              "div",
              {
                id: T,
                style: _,
                className: z,
                role: "progressbar",
                "aria-valuenow": E,
                "aria-valuemin": 0,
                "aria-valuemax": S || 100,
                "aria-valuetext": $ ? x : void 0,
                "aria-label": w,
                "data-andes-progress-indicator-linear-progress": !0,
              },
              $ &&
                (() => {
                  const e = [];
                  for (let t = 0; t < (S || 0); t += 1) {
                    const n = t < E,
                      o = a()(g, { [`${g}--active`]: n });
                    e.push(
                      i.createElement(
                        "div",
                        (0, r.A)(
                          {
                            className: o,
                            style: { backgroundColor: n ? C : void 0 },
                            key: t,
                            "data-andes-progress-indicator-linear-progress-segment":
                              !0,
                          },
                          (0, f.i)({ completed: n })
                        )
                      )
                    );
                  }
                  return e;
                })()
            ),
            N &&
              i.createElement(
                y,
                (0, r.A)({ size: p, id: `${T}-comparison` }, N)
              )
          );
        };
        return (e.displayName = "ProgressIndicatorLinear"), e;
      })();
    },
    98335(e, t, n) {
      "use strict";
      n.d(t, { s: () => c });
      var r = n(58168),
        o = n(80045),
        i = n(96540);
      n(46942);
      const l = "andes-visually-hidden",
        a = l,
        s = ["children", "component"];
      var c = (e) => {
        let { children: t, component: n = "span" } = e,
          l = (0, o.A)(e, s);
        return i.createElement(n, (0, r.A)({ className: a }, l), t);
      };
    },
    95513(e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
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
          r(e)
        );
      }
      function o(e, t) {
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
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                l(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != r(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != r(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == r(t) ? t : t + "";
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
      n.d(t, { c: () => u });
      var a = {
          ANDES_BLUE_500: "#3483FA",
          MENU_TYPE: { CORRIDORS: "CORRIDORS", MENU: "MENU" },
          BEHAVIOR_TYPE: { BOTTOM_SHEET: "bottom_sheet", REDIRECT: "redirect" },
          BLUR_THRESHOLD: 3,
          TYPES: {
            AFFILIATE: "affiliate",
            SOCIAL: "social",
            SUPER: "super",
            SUPER_PARTNER: "super_partner",
            SELLER: "seller",
            BRAND: "brand",
            LANDING: "landing",
            LANDING_CBT: "landing_cbt",
          },
          TYPES_ITEM: { FOLDER: "FOLDER" },
          DEFAULT_STATE_SNACKBAR: { show: !1, message: "", color: "green" },
          TIMERS: { SNACKBAR: { MEDIUM: 2e3 }, UPDATE: { MEDIUM: 2e3 } },
          PREVIEW: "preview",
          DISABLE_METRICS: "disable_metrics",
          REMOVE_PREVIEW_PARAM: "remove-preview-param",
          CLIENTS: { HOME: "HOME", SEARCH: "SEARCH" },
          THEMES: { LANDING: "landing", LANDING_CBT: "landing_cbt" },
          CUSTOM_STYLE: { DEFAULT: "default", PREMIUM: "premium" },
        },
        s = l(l({}, a.TYPES.SELLER, { mobile: 8, desktop: 4 }), a.TYPES.BRAND, {
          mobile: 8,
          desktop: 4,
        }),
        c = [a.TYPES.BRAND, a.TYPES.SELLER],
        d = [a.TYPES.SELLER, a.TYPES.BRAND],
        u = i(
          i({}, a),
          {},
          { HIDDEN_NODE_HEADER: c, MAX_L2: s, BUTTON_MOBILE_FOLLOWER: d }
        );
    },
    18051(e, t, n) {
      !(function (e, t, n) {
        "use strict";
        function r(e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        }
        var o = r(t),
          i = r(n);
        function l(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function a(e) {
          if (Array.isArray(e)) return e;
        }
        function s(e, t, n) {
          return (
            (t = g(t)) in e
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
        function c(e, t) {
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
              s = !0,
              c = !1;
            try {
              if (((i = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                s = !1;
              } else
                for (
                  ;
                  !(s = (r = i.call(n)).done) &&
                  (a.push(r.value), a.length !== t);
                  s = !0
                );
            } catch (e) {
              (c = !0), (o = e);
            } finally {
              try {
                if (
                  !s &&
                  null != n.return &&
                  ((l = n.return()), Object(l) !== l)
                )
                  return;
              } finally {
                if (c) throw o;
              }
            }
            return a;
          }
        }
        function d() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function u(e, t) {
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
        function p(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? u(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function m(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = f(e, t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]),
                t.includes(n) ||
                  ({}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
          }
          return o;
        }
        function f(e, t) {
          if (null == e) return {};
          var n = {};
          for (var r in e)
            if ({}.hasOwnProperty.call(e, r)) {
              if (t.includes(r)) continue;
              n[r] = e[r];
            }
          return n;
        }
        function v(e, t) {
          return a(e) || c(e, t) || y(e, t) || d();
        }
        function h(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        }
        function g(e) {
          var t = h(e, "string");
          return "symbol" == typeof t ? t : t + "";
        }
        function y(e, t) {
          if (e) {
            if ("string" == typeof e) return l(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? l(e, t)
                : void 0
            );
          }
        }
        var b = [
            "animationData",
            "loop",
            "autoplay",
            "initialSegment",
            "onComplete",
            "onLoopComplete",
            "onEnterFrame",
            "onSegmentStart",
            "onConfigReady",
            "onDataReady",
            "onDataFailed",
            "onLoadedImages",
            "onDOMLoaded",
            "onDestroy",
            "lottieRef",
            "renderer",
            "name",
            "assetsPath",
            "rendererSettings",
          ],
          C = function (e, t) {
            var r = e.animationData,
              l = e.loop,
              a = e.autoplay,
              s = e.initialSegment,
              c = e.onComplete,
              d = e.onLoopComplete,
              u = e.onEnterFrame,
              f = e.onSegmentStart,
              h = e.onConfigReady,
              g = e.onDataReady,
              y = e.onDataFailed,
              C = e.onLoadedImages,
              E = e.onDOMLoaded,
              L = e.onDestroy;
            e.lottieRef, e.renderer, e.name, e.assetsPath, e.rendererSettings;
            var A = m(e, b),
              S = v(n.useState(!1), 2),
              w = S[0],
              x = S[1],
              k = n.useRef(),
              N = n.useRef(null),
              $ = function () {
                var e;
                null === (e = k.current) || void 0 === e || e.play();
              },
              T = function () {
                var e;
                null === (e = k.current) || void 0 === e || e.stop();
              },
              P = function () {
                var e;
                null === (e = k.current) || void 0 === e || e.pause();
              },
              R = function (e) {
                var t;
                null === (t = k.current) || void 0 === t || t.setSpeed(e);
              },
              O = function (e, t) {
                var n;
                null === (n = k.current) || void 0 === n || n.goToAndPlay(e, t);
              },
              M = function (e, t) {
                var n;
                null === (n = k.current) || void 0 === n || n.goToAndStop(e, t);
              },
              I = function (e) {
                var t;
                null === (t = k.current) || void 0 === t || t.setDirection(e);
              },
              D = function (e, t) {
                var n;
                null === (n = k.current) ||
                  void 0 === n ||
                  n.playSegments(e, t);
              },
              _ = function (e) {
                var t;
                null === (t = k.current) || void 0 === t || t.setSubframe(e);
              },
              B = function (e) {
                var t;
                return null === (t = k.current) || void 0 === t
                  ? void 0
                  : t.getDuration(e);
              },
              j = function () {
                var e;
                null === (e = k.current) || void 0 === e || e.destroy(),
                  (k.current = void 0);
              },
              z = function () {
                var t,
                  n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                if (N.current) {
                  null === (t = k.current) || void 0 === t || t.destroy();
                  var r = p(p(p({}, e), n), {}, { container: N.current });
                  return (
                    (k.current = o.default.loadAnimation(r)),
                    x(!!k.current),
                    function () {
                      var e;
                      null === (e = k.current) || void 0 === e || e.destroy(),
                        (k.current = void 0);
                    }
                  );
                }
              };
            return (
              n.useEffect(
                function () {
                  var e = z();
                  return function () {
                    return null == e ? void 0 : e();
                  };
                },
                [r, l]
              ),
              n.useEffect(
                function () {
                  k.current && (k.current.autoplay = !!a);
                },
                [a]
              ),
              n.useEffect(
                function () {
                  k.current &&
                    (s
                      ? Array.isArray(s) &&
                        s.length &&
                        ((k.current.currentRawFrame < s[0] ||
                          k.current.currentRawFrame > s[1]) &&
                          (k.current.currentRawFrame = s[0]),
                        k.current.setSegment(s[0], s[1]))
                      : k.current.resetSegments(!0));
                },
                [s]
              ),
              n.useEffect(
                function () {
                  var e = [
                    { name: "complete", handler: c },
                    { name: "loopComplete", handler: d },
                    { name: "enterFrame", handler: u },
                    { name: "segmentStart", handler: f },
                    { name: "config_ready", handler: h },
                    { name: "data_ready", handler: g },
                    { name: "data_failed", handler: y },
                    { name: "loaded_images", handler: C },
                    { name: "DOMLoaded", handler: E },
                    { name: "destroy", handler: L },
                  ].filter(function (e) {
                    return null != e.handler;
                  });
                  if (e.length) {
                    var t = e.map(function (e) {
                      var t;
                      return (
                        null === (t = k.current) ||
                          void 0 === t ||
                          t.addEventListener(e.name, e.handler),
                        function () {
                          var t;
                          null === (t = k.current) ||
                            void 0 === t ||
                            t.removeEventListener(e.name, e.handler);
                        }
                      );
                    });
                    return function () {
                      t.forEach(function (e) {
                        return e();
                      });
                    };
                  }
                },
                [c, d, u, f, h, g, y, C, E, L]
              ),
              {
                View: i.default.createElement(
                  "div",
                  p({ style: t, ref: N }, A)
                ),
                play: $,
                stop: T,
                pause: P,
                setSpeed: R,
                goToAndStop: M,
                goToAndPlay: O,
                setDirection: I,
                playSegments: D,
                setSubframe: _,
                getDuration: B,
                destroy: j,
                animationContainerRef: N,
                animationLoaded: w,
                animationItem: k.current,
              }
            );
          };
        function E(e) {
          var t = e.getBoundingClientRect(),
            n = t.top,
            r = t.height;
          return (window.innerHeight - n) / (window.innerHeight + r);
        }
        function L(e, t, n) {
          var r = e.getBoundingClientRect(),
            o = r.top;
          return { x: (t - r.left) / r.width, y: (n - o) / r.height };
        }
        var A = function (e) {
            var t = e.wrapperRef,
              r = e.animationItem,
              o = e.mode,
              i = e.actions;
            n.useEffect(
              function () {
                var e = t.current;
                if (e && r && i.length) {
                  r.stop();
                  var n = function () {
                      var t = null,
                        n = function () {
                          var n = E(e),
                            o = i.find(function (e) {
                              var t = e.visibility;
                              return t && n >= t[0] && n <= t[1];
                            });
                          if (o) {
                            if (
                              "seek" === o.type &&
                              o.visibility &&
                              2 === o.frames.length
                            ) {
                              var l =
                                o.frames[0] +
                                Math.ceil(
                                  ((n - o.visibility[0]) /
                                    (o.visibility[1] - o.visibility[0])) *
                                    o.frames[1]
                                );
                              r.goToAndStop(l - r.firstFrame - 1, !0);
                            }
                            "loop" === o.type &&
                              (null === t || t !== o.frames || r.isPaused) &&
                              (r.playSegments(o.frames, !0), (t = o.frames)),
                              "play" === o.type &&
                                r.isPaused &&
                                (r.resetSegments(!0), r.play()),
                              "stop" === o.type &&
                                r.goToAndStop(
                                  o.frames[0] - r.firstFrame - 1,
                                  !0
                                );
                          }
                        };
                      return (
                        document.addEventListener("scroll", n),
                        function () {
                          document.removeEventListener("scroll", n);
                        }
                      );
                    },
                    l = function () {
                      var t = function (t, n) {
                          var o = t,
                            l = n;
                          if (-1 !== o && -1 !== l) {
                            var a = L(e, o, l);
                            (o = a.x), (l = a.y);
                          }
                          var s = i.find(function (e) {
                            var t = e.position;
                            return t && Array.isArray(t.x) && Array.isArray(t.y)
                              ? o >= t.x[0] &&
                                  o <= t.x[1] &&
                                  l >= t.y[0] &&
                                  l <= t.y[1]
                              : !(
                                  !t ||
                                  Number.isNaN(t.x) ||
                                  Number.isNaN(t.y)
                                ) &&
                                  o === t.x &&
                                  l === t.y;
                          });
                          if (s) {
                            if (
                              "seek" === s.type &&
                              s.position &&
                              Array.isArray(s.position.x) &&
                              Array.isArray(s.position.y) &&
                              2 === s.frames.length
                            ) {
                              var c =
                                  (o - s.position.x[0]) /
                                  (s.position.x[1] - s.position.x[0]),
                                d =
                                  (l - s.position.y[0]) /
                                  (s.position.y[1] - s.position.y[0]);
                              r.playSegments(s.frames, !0),
                                r.goToAndStop(
                                  Math.ceil(
                                    ((c + d) / 2) * (s.frames[1] - s.frames[0])
                                  ),
                                  !0
                                );
                            }
                            "loop" === s.type && r.playSegments(s.frames, !0),
                              "play" === s.type &&
                                (r.isPaused && r.resetSegments(!1),
                                r.playSegments(s.frames)),
                              "stop" === s.type &&
                                r.goToAndStop(s.frames[0], !0);
                          }
                        },
                        n = function (e) {
                          t(e.clientX, e.clientY);
                        },
                        o = function () {
                          t(-1, -1);
                        };
                      return (
                        e.addEventListener("mousemove", n),
                        e.addEventListener("mouseout", o),
                        function () {
                          e.removeEventListener("mousemove", n),
                            e.removeEventListener("mouseout", o);
                        }
                      );
                    };
                  switch (o) {
                    case "scroll":
                      return n();
                    case "cursor":
                      return l();
                  }
                }
              },
              [o, r]
            );
          },
          S = function (e) {
            var t = e.actions,
              n = e.mode,
              r = e.lottieObj,
              o = r.animationItem,
              i = r.View,
              l = r.animationContainerRef;
            return (
              A({ actions: t, animationItem: o, mode: n, wrapperRef: l }), i
            );
          },
          w = ["style", "interactivity"],
          x = function (e) {
            var t,
              r,
              o,
              i = e.style,
              l = e.interactivity,
              a = m(e, w),
              s = C(a, i),
              c = s.View,
              d = s.play,
              u = s.stop,
              p = s.pause,
              f = s.setSpeed,
              v = s.goToAndStop,
              h = s.goToAndPlay,
              g = s.setDirection,
              y = s.playSegments,
              b = s.setSubframe,
              E = s.getDuration,
              L = s.destroy,
              A = s.animationContainerRef,
              x = s.animationLoaded,
              k = s.animationItem;
            return (
              n.useEffect(
                function () {
                  e.lottieRef &&
                    (e.lottieRef.current = {
                      play: d,
                      stop: u,
                      pause: p,
                      setSpeed: f,
                      goToAndPlay: h,
                      goToAndStop: v,
                      setDirection: g,
                      playSegments: y,
                      setSubframe: b,
                      getDuration: E,
                      destroy: L,
                      animationContainerRef: A,
                      animationLoaded: x,
                      animationItem: k,
                    });
                },
                [
                  null === (t = e.lottieRef) || void 0 === t
                    ? void 0
                    : t.current,
                ]
              ),
              S({
                lottieObj: {
                  View: c,
                  play: d,
                  stop: u,
                  pause: p,
                  setSpeed: f,
                  goToAndStop: v,
                  goToAndPlay: h,
                  setDirection: g,
                  playSegments: y,
                  setSubframe: b,
                  getDuration: E,
                  destroy: L,
                  animationContainerRef: A,
                  animationLoaded: x,
                  animationItem: k,
                },
                actions:
                  null !== (r = null == l ? void 0 : l.actions) && void 0 !== r
                    ? r
                    : [],
                mode:
                  null !== (o = null == l ? void 0 : l.mode) && void 0 !== o
                    ? o
                    : "scroll",
              })
            );
          };
        Object.defineProperty(e, "LottiePlayer", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
          (e.default = x),
          (e.useLottie = C),
          (e.useLottieInteractivity = S),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t, n(49891), n(96540));
    },
    2694(e, t, n) {
      "use strict";
      var r = n(6925);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, n, o, i, l) {
            if (l !== r) {
              var a = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((a.name = "Invariant Violation"), a);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (n.PropTypes = n), n;
        });
    },
    5556(e, t, n) {
      e.exports = n(2694)();
    },
    6925(e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    64564(e, t, n) {
      "use strict";
      n.d(t, { A: () => i });
      var r = n(23029),
        o = n(92901);
      const i = (function () {
        function e() {
          (0, r.A)(this, e);
        }
        return (0, o.A)(
          e,
          [
            {
              key: "isMelidataEnabled",
              value: function () {
                return "function" == typeof melidata;
              },
            },
            {
              key: "sendTrack",
              value: function (e) {
                var t = e.path,
                  n = e.data,
                  r = e.type;
                melidata("cleanAndSend", r || "event", { path: t, data: n });
              },
            },
          ],
          [
            {
              key: "notify",
              value: function (t) {
                var n = new e();
                n.isMelidataEnabled() && n.sendTrack(t);
              },
            },
            {
              key: "notifyEventually",
              value: function (t) {
                e.notify(t);
              },
            },
          ]
        );
      })();
    },
    36841(e, t, n) {
      "use strict";
      n.d(t, { Ay: () => Qe });
      var r = n(96540);
      function o() {
        return (
          (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          o.apply(this, arguments)
        );
      }
      const i = ["children", "options"];
      var l, a, s;
      ((s = l || (l = {})).blockQuote = "0"),
        (s.breakLine = "1"),
        (s.breakThematic = "2"),
        (s.codeBlock = "3"),
        (s.codeFenced = "4"),
        (s.codeInline = "5"),
        (s.footnote = "6"),
        (s.footnoteReference = "7"),
        (s.gfmTask = "8"),
        (s.heading = "9"),
        (s.headingSetext = "10"),
        (s.htmlBlock = "11"),
        (s.htmlComment = "12"),
        (s.htmlSelfClosing = "13"),
        (s.image = "14"),
        (s.link = "15"),
        (s.linkAngleBraceStyleDetector = "16"),
        (s.linkBareUrlDetector = "17"),
        (s.linkMailtoDetector = "18"),
        (s.newlineCoalescer = "19"),
        (s.orderedList = "20"),
        (s.paragraph = "21"),
        (s.ref = "22"),
        (s.refImage = "23"),
        (s.refLink = "24"),
        (s.table = "25"),
        (s.tableSeparator = "26"),
        (s.text = "27"),
        (s.textBolded = "28"),
        (s.textEmphasized = "29"),
        (s.textEscaped = "30"),
        (s.textMarked = "31"),
        (s.textStrikethroughed = "32"),
        (s.unorderedList = "33"),
        (function (e) {
          (e[(e.MAX = 0)] = "MAX"),
            (e[(e.HIGH = 1)] = "HIGH"),
            (e[(e.MED = 2)] = "MED"),
            (e[(e.LOW = 3)] = "LOW"),
            (e[(e.MIN = 4)] = "MIN");
        })(a || (a = {}));
      const c = [
          "allowFullScreen",
          "allowTransparency",
          "autoComplete",
          "autoFocus",
          "autoPlay",
          "cellPadding",
          "cellSpacing",
          "charSet",
          "className",
          "classId",
          "colSpan",
          "contentEditable",
          "contextMenu",
          "crossOrigin",
          "encType",
          "formAction",
          "formEncType",
          "formMethod",
          "formNoValidate",
          "formTarget",
          "frameBorder",
          "hrefLang",
          "inputMode",
          "keyParams",
          "keyType",
          "marginHeight",
          "marginWidth",
          "maxLength",
          "mediaGroup",
          "minLength",
          "noValidate",
          "radioGroup",
          "readOnly",
          "rowSpan",
          "spellCheck",
          "srcDoc",
          "srcLang",
          "srcSet",
          "tabIndex",
          "useMap",
        ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: "htmlFor" }),
        d = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" },
        u = ["style", "script"],
        p =
          /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
        m = /mailto:/i,
        f = /\n{2,}$/,
        v = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
        h = /^ *> ?/gm,
        g = /^ {2,}\n/,
        y = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
        b =
          /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
        C = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
        E = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        L = /^(?:\n *)*\n/,
        A = /\r\n?/g,
        S = /^\[\^([^\]]+)](:.*)\n/,
        w = /^\[\^([^\]]+)]/,
        x = /\f/g,
        k = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,
        N = /^\s*?\[(x|\s)\]/,
        $ = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        T = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        P = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
        R =
          /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
        O = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
        M = /^<!--[\s\S]*?(?:-->)/,
        I = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
        D =
          /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
        _ = /^\{.*\}$/,
        B = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        j = /^<([^ >]+@[^ >]+)>/,
        z = /^<([^ >]+:\/[^ >]+)>/,
        F = /-([a-z])?/gi,
        H = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
        V = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
        U = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
        K = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
        Z = /(\[|\])/g,
        Y = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
        G = /\t/g,
        W = /^ *\| */,
        q = /(^ *\||\| *$)/g,
        X = / *$/,
        Q = /^ *:-+: *$/,
        J = /^ *:-+ *$/,
        ee = /^ *-+: *$/,
        te =
          /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
        ne =
          /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
        re = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
        oe = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
        ie = /^\\([^0-9A-Za-z\s])/,
        le =
          /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
        ae = /^\n+/,
        se = /^([ \t]*)/,
        ce = /\\([^\\])/g,
        de = / *\n+$/,
        ue = /(?:^|\n)( *)$/,
        pe = "(?:\\d+\\.)",
        me = "(?:[*+-])";
      function fe(e) {
        return "( *)(" + (1 === e ? pe : me) + ") +";
      }
      const ve = fe(1),
        he = fe(2);
      function ge(e) {
        return new RegExp("^" + (1 === e ? ve : he));
      }
      const ye = ge(1),
        be = ge(2);
      function Ce(e) {
        return new RegExp(
          "^" +
            (1 === e ? ve : he) +
            "[^\\n]*(?:\\n(?!\\1" +
            (1 === e ? pe : me) +
            " )[^\\n]*)*(\\n|$)",
          "gm"
        );
      }
      const Ee = Ce(1),
        Le = Ce(2);
      function Ae(e) {
        const t = 1 === e ? pe : me;
        return new RegExp(
          "^( *)(" +
            t +
            ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" +
            t +
            " (?!" +
            t +
            " ))\\n*|\\s*\\n*$)"
        );
      }
      const Se = Ae(1),
        we = Ae(2);
      function xe(e, t) {
        const n = 1 === t,
          r = n ? Se : we,
          o = n ? Ee : Le,
          i = n ? ye : be;
        return {
          match(e, t, n) {
            const o = ue.exec(n);
            return o && (t.list || (!t.inline && !t.simple))
              ? r.exec((e = o[1] + e))
              : null;
          },
          order: 1,
          parse(e, t, r) {
            const l = n ? +e[2] : void 0,
              a = e[0].replace(f, "\n").match(o);
            let s = !1;
            return {
              items: a.map(function (e, n) {
                const o = i.exec(e)[0].length,
                  l = new RegExp("^ {1," + o + "}", "gm"),
                  c = e.replace(l, "").replace(i, ""),
                  d = n === a.length - 1,
                  u = -1 !== c.indexOf("\n\n") || (d && s);
                s = u;
                const p = r.inline,
                  m = r.list;
                let f;
                (r.list = !0),
                  u
                    ? ((r.inline = !1), (f = c.replace(de, "\n\n")))
                    : ((r.inline = !0), (f = c.replace(de, "")));
                const v = t(f, r);
                return (r.inline = p), (r.list = m), v;
              }),
              ordered: n,
              start: l,
            };
          },
          render: (t, n, r) =>
            e(
              t.ordered ? "ol" : "ul",
              { key: r.key, start: "20" === t.type ? t.start : void 0 },
              t.items.map(function (t, o) {
                return e("li", { key: o }, n(t, r));
              })
            ),
        };
      }
      const ke = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        Ne = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        $e = [v, b, C, $, P, T, M, H, Ee, Se, Le, we],
        Te = [...$e, /^[^\n]+(?:  \n|\n{2,})/, R, D];
      function Pe(e) {
        return e
          .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a")
          .replace(/[çÇ]/g, "c")
          .replace(/[ðÐ]/g, "d")
          .replace(/[ÈÉÊËéèêë]/g, "e")
          .replace(/[ÏïÎîÍíÌì]/g, "i")
          .replace(/[Ññ]/g, "n")
          .replace(/[øØœŒÕõÔôÓóÒò]/g, "o")
          .replace(/[ÜüÛûÚúÙù]/g, "u")
          .replace(/[ŸÿÝý]/g, "y")
          .replace(/[^a-z0-9- ]/gi, "")
          .replace(/ /gi, "-")
          .toLowerCase();
      }
      function Re(e) {
        return ee.test(e)
          ? "right"
          : Q.test(e)
          ? "center"
          : J.test(e)
          ? "left"
          : null;
      }
      function Oe(e, t, n) {
        const r = n.inTable;
        n.inTable = !0;
        const o = t(e.trim(), n);
        n.inTable = r;
        let i = [[]];
        return (
          o.forEach(function (e, t) {
            "26" === e.type
              ? 0 !== t && t !== o.length - 1 && i.push([])
              : ("27" !== e.type ||
                  (null != o[t + 1] && "26" !== o[t + 1].type) ||
                  (e.text = e.text.replace(X, "")),
                i[i.length - 1].push(e));
          }),
          i
        );
      }
      function Me(e, t, n) {
        n.inline = !0;
        const r = Oe(e[1], t, n),
          o = e[2].replace(q, "").split("|").map(Re),
          i = (function (e, t, n) {
            return e
              .trim()
              .split("\n")
              .map(function (e) {
                return Oe(e, t, n);
              });
          })(e[3], t, n);
        return (n.inline = !1), { align: o, cells: i, header: r, type: "25" };
      }
      function Ie(e, t) {
        return null == e.align[t] ? {} : { textAlign: e.align[t] };
      }
      function De(e) {
        return function (t, n) {
          return n.inline ? e.exec(t) : null;
        };
      }
      function _e(e) {
        return function (t, n) {
          return n.inline || n.simple ? e.exec(t) : null;
        };
      }
      function Be(e) {
        return function (t, n) {
          return n.inline || n.simple ? null : e.exec(t);
        };
      }
      function je(e) {
        return function (t) {
          return e.exec(t);
        };
      }
      function ze(e, t, n) {
        if (t.inline || t.simple) return null;
        if (n && !n.endsWith("\n")) return null;
        let r = "";
        e.split("\n").every(
          (e) => !$e.some((t) => t.test(e)) && ((r += e + "\n"), e.trim())
        );
        const o = r.trimEnd();
        return "" == o ? null : [r, o];
      }
      function Fe(e) {
        try {
          if (
            decodeURIComponent(e)
              .replace(/[^A-Za-z0-9/:]/g, "")
              .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
          )
            return;
        } catch (e) {
          return null;
        }
        return e;
      }
      function He(e) {
        return e.replace(ce, "$1");
      }
      function Ve(e, t, n) {
        const r = n.inline || !1,
          o = n.simple || !1;
        (n.inline = !0), (n.simple = !0);
        const i = e(t, n);
        return (n.inline = r), (n.simple = o), i;
      }
      function Ue(e, t, n) {
        const r = n.inline || !1,
          o = n.simple || !1;
        (n.inline = !1), (n.simple = !0);
        const i = e(t, n);
        return (n.inline = r), (n.simple = o), i;
      }
      function Ke(e, t, n) {
        return (n.inline = !1), e(t, n);
      }
      const Ze = (e, t, n) => ({ children: Ve(t, e[1], n) });
      function Ye() {
        return {};
      }
      function Ge() {
        return null;
      }
      function We(...e) {
        return e.filter(Boolean).join(" ");
      }
      function qe(e, t, n) {
        let r = e;
        const o = t.split(".");
        for (; o.length && ((r = r[o[0]]), void 0 !== r); ) o.shift();
        return r || n;
      }
      function Xe(e, t = {}) {
        (t.overrides = t.overrides || {}),
          (t.slugify = t.slugify || Pe),
          (t.namedCodesToUnicode = t.namedCodesToUnicode
            ? o({}, d, t.namedCodesToUnicode)
            : d);
        const n = t.createElement || r.createElement;
        function i(e, r, ...i) {
          const l = qe(t.overrides, `${e}.props`, {});
          return n(
            (function (e, t) {
              const n = qe(t, e);
              return n
                ? "function" == typeof n ||
                  ("object" == typeof n && "render" in n)
                  ? n
                  : qe(t, `${e}.component`, e)
                : e;
            })(e, t.overrides),
            o({}, r, l, {
              className:
                We(null == r ? void 0 : r.className, l.className) || void 0,
            }),
            ...i
          );
        }
        function l(e) {
          e = e.replace(k, "");
          let n = !1;
          t.forceInline ? (n = !0) : t.forceBlock || (n = !1 === Y.test(e));
          const o = Q(
            X(n ? e : `${e.trimEnd().replace(ae, "")}\n\n`, { inline: n })
          );
          for (
            ;
            "string" == typeof o[o.length - 1] && !o[o.length - 1].trim();

          )
            o.pop();
          if (null === t.wrapper) return o;
          const l = t.wrapper || (n ? "span" : "div");
          let a;
          if (o.length > 1 || t.forceWrapper) a = o;
          else {
            if (1 === o.length)
              return (
                (a = o[0]),
                "string" == typeof a ? i("span", { key: "outer" }, a) : a
              );
            a = null;
          }
          return r.createElement(l, { key: "outer" }, a);
        }
        function a(e) {
          const t = e.match(p);
          return t
            ? t.reduce(function (e, t, n) {
                const o = t.indexOf("=");
                if (-1 !== o) {
                  const i = (function (e) {
                      return (
                        -1 !== e.indexOf("-") &&
                          null === e.match(I) &&
                          (e = e.replace(F, function (e, t) {
                            return t.toUpperCase();
                          })),
                        e
                      );
                    })(t.slice(0, o)).trim(),
                    a = (function (e) {
                      const t = e[0];
                      return ('"' === t || "'" === t) &&
                        e.length >= 2 &&
                        e[e.length - 1] === t
                        ? e.slice(1, -1)
                        : e;
                    })(t.slice(o + 1).trim()),
                    s = c[i] || i,
                    d = (e[s] = (function (e, t) {
                      return "style" === e
                        ? t.split(/;\s?/).reduce(function (e, t) {
                            const n = t.slice(0, t.indexOf(":"));
                            return (
                              (e[
                                n.replace(/(-[a-z])/g, (e) =>
                                  e[1].toUpperCase()
                                )
                              ] = t.slice(n.length + 1).trim()),
                              e
                            );
                          }, {})
                        : "href" === e || "src" === e
                        ? Fe(t)
                        : (t.match(_) && (t = t.slice(1, t.length - 1)),
                          "true" === t || ("false" !== t && t));
                    })(i, a));
                  "string" == typeof d &&
                    (R.test(d) || D.test(d)) &&
                    (e[s] = r.cloneElement(l(d.trim()), { key: n }));
                } else "style" !== t && (e[c[t] || t] = !0);
                return e;
              }, {})
            : null;
        }
        const s = [],
          f = {},
          q = {
            0: {
              match: Be(v),
              order: 1,
              parse: (e, t, n) => ({ children: t(e[0].replace(h, ""), n) }),
              render: (e, t, n) =>
                i("blockquote", { key: n.key }, t(e.children, n)),
            },
            1: {
              match: je(g),
              order: 1,
              parse: Ye,
              render: (e, t, n) => i("br", { key: n.key }),
            },
            2: {
              match: Be(y),
              order: 1,
              parse: Ye,
              render: (e, t, n) => i("hr", { key: n.key }),
            },
            3: {
              match: Be(C),
              order: 0,
              parse: (e) => ({
                lang: void 0,
                text: e[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
              }),
              render: (e, t, n) =>
                i(
                  "pre",
                  { key: n.key },
                  i(
                    "code",
                    o({}, e.attrs, {
                      className: e.lang ? `lang-${e.lang}` : "",
                    }),
                    e.text
                  )
                ),
            },
            4: {
              match: Be(b),
              order: 0,
              parse: (e) => ({
                attrs: a(e[3] || ""),
                lang: e[2] || void 0,
                text: e[4],
                type: "3",
              }),
            },
            5: {
              match: _e(E),
              order: 3,
              parse: (e) => ({ text: e[2] }),
              render: (e, t, n) => i("code", { key: n.key }, e.text),
            },
            6: {
              match: Be(S),
              order: 0,
              parse: (e) => (s.push({ footnote: e[2], identifier: e[1] }), {}),
              render: Ge,
            },
            7: {
              match: De(w),
              order: 1,
              parse: (e) => ({ target: `#${t.slugify(e[1])}`, text: e[1] }),
              render: (e, t, n) =>
                i(
                  "a",
                  { key: n.key, href: Fe(e.target) },
                  i("sup", { key: n.key }, e.text)
                ),
            },
            8: {
              match: De(N),
              order: 1,
              parse: (e) => ({ completed: "x" === e[1].toLowerCase() }),
              render: (e, t, n) =>
                i("input", {
                  checked: e.completed,
                  key: n.key,
                  readOnly: !0,
                  type: "checkbox",
                }),
            },
            9: {
              match: Be(t.enforceAtxHeadings ? T : $),
              order: 1,
              parse: (e, n, r) => ({
                children: Ve(n, e[2], r),
                id: t.slugify(e[2]),
                level: e[1].length,
              }),
              render: (e, t, n) =>
                i(`h${e.level}`, { id: e.id, key: n.key }, t(e.children, n)),
            },
            10: {
              match: Be(P),
              order: 0,
              parse: (e, t, n) => ({
                children: Ve(t, e[1], n),
                level: "=" === e[2] ? 1 : 2,
                type: "9",
              }),
            },
            11: {
              match: je(R),
              order: 1,
              parse(e, t, n) {
                const [, r] = e[3].match(se),
                  o = new RegExp(`^${r}`, "gm"),
                  i = e[3].replace(o, ""),
                  l = ((s = i), Te.some((e) => e.test(s)) ? Ke : Ve);
                var s;
                const c = e[1].toLowerCase(),
                  d = -1 !== u.indexOf(c),
                  p = { attrs: a(e[2]), noInnerParse: d, tag: d ? c : e[1] };
                return (
                  (n.inAnchor = n.inAnchor || "a" === c),
                  d ? (p.text = e[3]) : (p.children = l(t, i, n)),
                  (n.inAnchor = !1),
                  p
                );
              },
              render: (e, t, n) =>
                i(
                  e.tag,
                  o({ key: n.key }, e.attrs),
                  e.text || t(e.children, n)
                ),
            },
            13: {
              match: je(D),
              order: 1,
              parse: (e) => ({ attrs: a(e[2] || ""), tag: e[1] }),
              render: (e, t, n) => i(e.tag, o({}, e.attrs, { key: n.key })),
            },
            12: { match: je(M), order: 1, parse: () => ({}), render: Ge },
            14: {
              match: _e(Ne),
              order: 1,
              parse: (e) => ({ alt: e[1], target: He(e[2]), title: e[3] }),
              render: (e, t, n) =>
                i("img", {
                  key: n.key,
                  alt: e.alt || void 0,
                  title: e.title || void 0,
                  src: Fe(e.target),
                }),
            },
            15: {
              match: De(ke),
              order: 3,
              parse: (e, t, n) => ({
                children: Ue(t, e[1], n),
                target: He(e[2]),
                title: e[3],
              }),
              render: (e, t, n) =>
                i(
                  "a",
                  { key: n.key, href: Fe(e.target), title: e.title },
                  t(e.children, n)
                ),
            },
            16: {
              match: De(z),
              order: 0,
              parse: (e) => ({
                children: [{ text: e[1], type: "27" }],
                target: e[1],
                type: "15",
              }),
            },
            17: {
              match: (e, t) => (t.inAnchor ? null : De(B)(e, t)),
              order: 0,
              parse: (e) => ({
                children: [{ text: e[1], type: "27" }],
                target: e[1],
                title: void 0,
                type: "15",
              }),
            },
            18: {
              match: De(j),
              order: 0,
              parse(e) {
                let t = e[1],
                  n = e[1];
                return (
                  m.test(n) || (n = "mailto:" + n),
                  {
                    children: [{ text: t.replace("mailto:", ""), type: "27" }],
                    target: n,
                    type: "15",
                  }
                );
              },
            },
            20: xe(i, 1),
            33: xe(i, 2),
            19: { match: Be(L), order: 3, parse: Ye, render: () => "\n" },
            21: {
              match: ze,
              order: 3,
              parse: Ze,
              render: (e, t, n) => i("p", { key: n.key }, t(e.children, n)),
            },
            22: {
              match: De(V),
              order: 0,
              parse: (e) => ((f[e[1]] = { target: e[2], title: e[4] }), {}),
              render: Ge,
            },
            23: {
              match: _e(U),
              order: 0,
              parse: (e) => ({ alt: e[1] || void 0, ref: e[2] }),
              render: (e, t, n) =>
                i("img", {
                  key: n.key,
                  alt: e.alt,
                  src: Fe(f[e.ref].target),
                  title: f[e.ref].title,
                }),
            },
            24: {
              match: De(K),
              order: 0,
              parse: (e, t, n) => ({
                children: t(e[1], n),
                fallbackChildren: t(e[0].replace(Z, "\\$1"), n),
                ref: e[2],
              }),
              render: (e, t, n) =>
                f[e.ref]
                  ? i(
                      "a",
                      {
                        key: n.key,
                        href: Fe(f[e.ref].target),
                        title: f[e.ref].title,
                      },
                      t(e.children, n)
                    )
                  : i("span", { key: n.key }, t(e.fallbackChildren, n)),
            },
            25: {
              match: Be(H),
              order: 1,
              parse: Me,
              render: (e, t, n) =>
                i(
                  "table",
                  { key: n.key },
                  i(
                    "thead",
                    null,
                    i(
                      "tr",
                      null,
                      e.header.map(function (r, o) {
                        return i("th", { key: o, style: Ie(e, o) }, t(r, n));
                      })
                    )
                  ),
                  i(
                    "tbody",
                    null,
                    e.cells.map(function (r, o) {
                      return i(
                        "tr",
                        { key: o },
                        r.map(function (r, o) {
                          return i("td", { key: o, style: Ie(e, o) }, t(r, n));
                        })
                      );
                    })
                  )
                ),
            },
            26: {
              match: function (e, t) {
                return t.inTable ? ((t.inline = !0), W.exec(e)) : null;
              },
              order: 1,
              parse: function () {
                return { type: "26" };
              },
              render: () => " | ",
            },
            27: {
              match: je(le),
              order: 4,
              parse: (e) => ({
                text: e[0].replace(O, (e, n) =>
                  t.namedCodesToUnicode[n] ? t.namedCodesToUnicode[n] : e
                ),
              }),
              render: (e) => e.text,
            },
            28: {
              match: _e(te),
              order: 2,
              parse: (e, t, n) => ({ children: t(e[2], n) }),
              render: (e, t, n) =>
                i("strong", { key: n.key }, t(e.children, n)),
            },
            29: {
              match: _e(ne),
              order: 3,
              parse: (e, t, n) => ({ children: t(e[2], n) }),
              render: (e, t, n) => i("em", { key: n.key }, t(e.children, n)),
            },
            30: {
              match: _e(ie),
              order: 1,
              parse: (e) => ({ text: e[1], type: "27" }),
            },
            31: {
              match: _e(re),
              order: 3,
              parse: Ze,
              render: (e, t, n) => i("mark", { key: n.key }, t(e.children, n)),
            },
            32: {
              match: _e(oe),
              order: 3,
              parse: Ze,
              render: (e, t, n) => i("del", { key: n.key }, t(e.children, n)),
            },
          };
        !0 === t.disableParsingRawHTML && (delete q[11], delete q[13]);
        const X = (function (e) {
            let t = Object.keys(e);
            function n(r, o) {
              let i = [],
                l = "";
              for (; r; ) {
                let a = 0;
                for (; a < t.length; ) {
                  const s = t[a],
                    c = e[s],
                    d = c.match(r, o, l);
                  if (d) {
                    const e = d[0];
                    r = r.substring(e.length);
                    const t = c.parse(d, n, o);
                    null == t.type && (t.type = s), i.push(t), (l = e);
                    break;
                  }
                  a++;
                }
              }
              return i;
            }
            return (
              t.sort(function (t, n) {
                let r = e[t].order,
                  o = e[n].order;
                return r !== o ? r - o : 1;
              }),
              function (e, t) {
                return n(
                  (function (e) {
                    return e.replace(A, "\n").replace(x, "").replace(G, "    ");
                  })(e),
                  t
                );
              }
            );
          })(q),
          Q =
            ((J = (function (e, t) {
              return function (n, r, o) {
                const i = e[n.type].render;
                return t ? t(() => i(n, r, o), n, r, o) : i(n, r, o);
              };
            })(q, t.renderRule)),
            function e(t, n = {}) {
              if (Array.isArray(t)) {
                const r = n.key,
                  o = [];
                let i = !1;
                for (let r = 0; r < t.length; r++) {
                  n.key = r;
                  const l = e(t[r], n),
                    a = "string" == typeof l;
                  a && i ? (o[o.length - 1] += l) : null !== l && o.push(l),
                    (i = a);
                }
                return (n.key = r), o;
              }
              return J(t, e, n);
            });
        var J;
        const ee = l(e);
        return s.length
          ? i(
              "div",
              null,
              ee,
              i(
                "footer",
                { key: "footer" },
                s.map(function (e) {
                  return i(
                    "div",
                    { id: t.slugify(e.identifier), key: e.identifier },
                    e.identifier,
                    Q(X(e.footnote, { inline: !0 }))
                  );
                })
              )
            )
          : ee;
      }
      const Qe = (e) => {
        let { children: t, options: n } = e,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
            return o;
          })(e, i);
        return r.cloneElement(Xe(t, n), o);
      };
      n.dn(Qe);
    },
  },
]);
//# sourceMappingURL=91881.8e15da79.js.map
