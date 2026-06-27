"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [12371],
  {
    36552(e, s, l) {
      l.d(s, { A: () => t });
      var a = l(96540);
      const t = (e) => {
        let {
          color: s = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
          i18n: l,
          srLabel: t,
        } = e;
        return a.createElement(
          "svg",
          {
            "aria-hidden": t ? void 0 : !t,
            "aria-label": t || void 0,
            role: t ? "img" : void 0,
            color: s,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "currentColor",
          },
          t && a.createElement("title", null, t),
          a.createElement("path", {
            d: "M4.93237 9.00124L5.99303 7.94058L11.9968 13.9443L18.0068 7.93433L19.0674 8.99499L11.9968 16.0656L4.93237 9.00124Z",
            fill: "currentColor",
          })
        );
      };
    },
    5429(e, s, l) {
      l.d(s, { A: () => t });
      var a = l(64858);
      l(88008);
      const t = a.A;
    },
    51005(e, s, l) {
      l.d(s, { A: () => c });
      var a = l(46942),
        t = l.n(a),
        r = l(46458),
        i = l(88008);
      const n = "ui-pdp-action-row",
        c = (e) => {
          const {
              className: s = "",
              disabled: l = !1,
              label: a = null,
              selected: c = null,
              subtitle: o = null,
              thumbnail: d = null,
              onClick: u = null,
              modifier: _ = "primary",
              url: p = null,
              htmlTarget: h = "_self",
              figure: m = null,
            } = e ?? {},
            v = !l && "error" === _,
            g = Boolean(!l && p),
            b = l ? null : u,
            x = { [`${n}--${v ? "error-600" : _}`]: _ },
            N = t()(n, s, { [`${n}--disabled`]: l }, x),
            j = g
              ? {
                  "data-testid": "action-row-anchor",
                  href: p,
                  className: N,
                  onClick: b,
                  target: h || "_self",
                }
              : {
                  "data-testid": "action-row-span",
                  className: N,
                  onClick: b,
                  onKeyUp: b,
                  role: "button",
                  tabIndex: "-1",
                },
            $ = c?.text_icon ? (0, i.s)(c?.text_icon?.id) : null,
            f = c ? r.I.jsx(c?.text, c?.values ?? null) : null,
            C = o ? r.I.jsx(o?.text || o, o?.values) : null,
            A = d ? { lazyload: !1, className: `${n}__thumbnail`, ...d } : null;
          return {
            Tag: g ? "a" : "span",
            containerProps: j,
            processedProps: {
              figure: m,
              showFigure: Boolean(m),
              figureClassName: t()("ui-pdp-icon--figure-left", {
                "ui-pdp-icon--disabled": l,
              }),
              label: a,
              showLabel: Boolean(a),
              labelClassName: `${n}__label`,
              contentClassName: `${n}__content`,
              selectedIcon: $,
              showSelected: Boolean(c),
              selectedClassName: t()(
                `${n}__selected`,
                { [`ui-pdp-color--${c?.color}`]: c?.color },
                { [`${n}__with-thumbnail`]: d }
              ),
              selectedContent: f,
              showSubtitle: Boolean(o),
              subtitleClassName: `${n}__subtitle`,
              subtitleContent: C,
              showThumbnail: Boolean(d),
              thumbnailProps: A,
              showChevron: !l,
              chevronId: "chevron",
              chevronClassName: t()("ui-pdp-icon--chevron-right", {
                "ui-pdp-icon--chevron-right__error": v,
              }),
            },
          };
        };
    },
    64858(e, s, l) {
      l.d(s, { A: () => n });
      var a = l(36402),
        t = l(55869),
        r = l(51005),
        i = l(74848);
      const n = (e) => {
        const { Tag: s, containerProps: l, processedProps: n } = (0, r.A)(e);
        return (0, i.jsxs)(s, {
          ...l,
          children: [
            n?.showFigure &&
              (0, i.jsx)("figure", {
                className: n?.figureClassName,
                children: n?.figure,
              }),
            n?.showLabel &&
              (0, i.jsx)("span", {
                className: n?.labelClassName,
                children: n?.label,
              }),
            (0, i.jsxs)("div", {
              className: n?.contentClassName,
              children: [
                n?.selectedIcon,
                n?.showSelected &&
                  (0, i.jsx)("span", {
                    className: n?.selectedClassName,
                    children: n?.selectedContent,
                  }),
                n?.showSubtitle &&
                  (0, i.jsx)("span", {
                    className: n?.subtitleClassName,
                    children: n?.subtitleContent,
                  }),
                n?.showThumbnail && (0, i.jsx)(t.Ay, { ...n?.thumbnailProps }),
                n?.showChevron &&
                  (0, i.jsx)(a.In, {
                    id: n?.chevronId,
                    className: n?.chevronClassName,
                  }),
              ],
            }),
          ],
        });
      };
    },
    88008(e, s, l) {
      l.d(s, { s: () => n });
      var a,
        t,
        r = l(62939),
        i = l(74848);
      const n = (e) => {
        switch (e) {
          case "ERROR_BADGE":
            return (
              a || (a = (0, i.jsx)(r.Tq, { color: "negative", size: "small" }))
            );
          case "WARNING_BADGE":
            return (
              t || (t = (0, i.jsx)(r.Tq, { color: "caution", size: "small" }))
            );
          default:
            return null;
        }
      };
    },
    49809(e, s, l) {
      l.d(s, { A: () => m });
      var a = l(8257),
        t = l(5429),
        r = l(21913),
        i = l(46942),
        n = l.n(i);
      const c = "ui-pdp-see-more",
        o = (e, s) => {
          let { expandedHeight: l } = s;
          const {
              className: a = "",
              action: t,
              modalTitle: r = "",
              modalClassName: i = "",
              modalHash: o = "",
              hasPreview: d = !0,
              previewHeight: u,
              useCanSeeEverything: _ = !1,
              collapsedProps: p = null,
              expandedProps: h = null,
            } = e,
            m = l && u >= l,
            v = !_ || !m,
            g = o ? `#${o}` : `#${t?.target}`;
          return {
            shouldRenderWrappedComponent: !!d,
            shouldRenderActionModal: !(!t || !v),
            processedProps: {
              containerClassName: n()(c, a),
              collapsedClassName: `${c}__content`,
              previewClassName: n()(`${c}__container`, {
                [`${c}--cant-see-everything`]: _ && !m,
              }),
              actionClassName: `${c}__action`,
              modalCombinedClassName: n()(`${c}__modal`, i),
              previewStyle: u ? { maxHeight: `${u}px` } : {},
              modalLocation: g,
              collapsedProps: p,
              expandedProps: h,
              action: t,
              modalTitle: r,
              modifier: "secondary",
            },
          };
        };
      var d = l(96540);
      const u = () => {
        const e = (0, d.useRef)(),
          [s, l] = (0, d.useState)(!1);
        return (
          (0, d.useEffect)(() => {
            !s &&
              e.current?.offsetHeight &&
              l(e.current.offsetHeight - 24 - 10);
          }, [s]),
          { ref: e, expandedHeight: s }
        );
      };
      var _ = l(69025),
        p = l(74848);
      const { DEVICE_TYPE: h } = _.A,
        m = (e) => {
          const s = (s) => {
            const { ref: l, expandedHeight: r } = u(),
              {
                shouldRenderWrappedComponent: i,
                shouldRenderActionModal: n,
                processedProps: c,
              } = o(s, { expandedHeight: r });
            return (0, p.jsxs)("div", {
              className: c.containerClassName,
              children: [
                i
                  ? (0, p.jsx)("div", {
                      className: c.previewClassName,
                      style: c.previewStyle,
                      children: (0, p.jsx)("div", {
                        ref: l,
                        children: (0, p.jsx)(e, {
                          ...c.collapsedProps,
                          className: c.collapsedClassName,
                        }),
                      }),
                    })
                  : null,
                n &&
                  (0, p.jsx)(a.Ay, {
                    className: c.actionClassName,
                    deviceType: h.MOBILE,
                    componentAsLabel: (0, p.jsx)(t.A, {
                      label: c.action.label.text,
                      modifier: c.modifier,
                    }),
                    modalClassName: c.modalCombinedClassName,
                    modalTitle: c.modalTitle,
                    url: c.action.target,
                    modalUrl: c.modalLocation,
                    track: c.action.track,
                    closeModalLabel: c.action.close_modal_label,
                    children: (0, p.jsx)(e, { ...c.expandedProps }),
                  }),
              ],
            });
          };
          return (s.displayName = `SeeMore(${(0, r.A)(e)})`), s;
        };
    },
    87279(e, s, l) {
      l.r(s), l.d(s, { default: () => le });
      var a = l(96540),
        t = l(27612),
        r = l(46942),
        i = l.n(r),
        n = l(26376),
        c = l(60711),
        o = l(27154),
        d = l(93603),
        u = l(87725),
        _ = l(6722);
      const p = (e) => {
        const { getDispatch: s, feature_name: l, ...a } = e,
          t = s();
        return {
          components: [{ ...a }],
          namespace: "ui-vpp-highlighted-specs",
          modifier: "dark",
          onSubmitForm: (e) =>
            new Promise((s) => {
              s(t(_.getCompatsProduct({ selectedInput: e, feature_name: l })));
            }),
          onRemove: () =>
            new Promise((e) => {
              e(t(_.cleanFormCompats({ feature_name: l })));
            }),
        };
      };
      l(18111), l(61701);
      var h = l(63247),
        m = l(1770),
        v = l(74848);
      const g = "ui-vpp-highlighted-specs__filled-icon",
        b = (e) => {
          let { className: s = null, picture: l } = e;
          return (0, v.jsx)("div", {
            "aria-hidden": "true",
            className: (0, h.A)({
              bg_color: l.bg_color,
              className: i()(s, g, { [`${g}--${l.bg_type}`]: l.bg_type }),
            }),
            children: l.url?.src
              ? (0, v.jsx)(m.A, { image_type: "picture", picture: l })
              : null,
          });
        };
      var x;
      const N = "ui-vpp-highlighted-specs__highlighted-attributes",
        j = (e) => {
          let { attributes: s, orientation: l = "HORIZONTAL" } = e;
          return (0, v.jsx)("div", {
            className: i()(N, { [`${N}--${l}`]: l }),
            children: s.map((e) => {
              let { picture: s, name: a, value: t } = e;
              return (0, v.jsxs)(
                "div",
                {
                  className: i()(`${N}__card`, { [`${N}__card--${l}`]: l }),
                  children: [
                    x ||
                      (x = (0, v.jsx)("span", {
                        className: `${N}__card-border`,
                      })),
                    (0, v.jsxs)("div", {
                      className: `${N}__card-content`,
                      children: [
                        (0, v.jsx)(b, {
                          className: `${N}__card-icon`,
                          picture: {
                            bg_color: s.background_color,
                            bg_type: "ROUNDED",
                            url: s.url,
                          },
                        }),
                        (0, v.jsxs)("div", {
                          className: `${N}__card-labels`,
                          children: [
                            (0, v.jsx)(d.G, {
                              className: `${N}__card-labels__name`,
                              ...a,
                            }),
                            (0, v.jsx)(d.G, {
                              className: `${N}__card-labels__value`,
                              ...t,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                a.text
              );
            }),
          });
        },
        $ = "ui-vpp-highlighted-specs__highlighted-attributes-list",
        f = (e) => {
          let { attributes: s } = e;
          return (0, v.jsx)("div", {
            className: $,
            children: s.map((e) => {
              let { name: s, value: l } = e;
              return (0, v.jsxs)(
                "div",
                {
                  className: `${$}__attribute`,
                  children: [
                    (0, v.jsx)(d.G, { ...s }),
                    (0, v.jsx)(d.G, { ...l }),
                  ],
                },
                s.text
              );
            }),
          });
        };
      var C = l(46458);
      const A = "ui-vpp-discrete-bar",
        y = (e) => {
          let {
            className: s = "",
            modifier: l = "base",
            emptyBarLabel: a = null,
            fullBarLabel: t = null,
            divisions: r,
            highlighted: n = -1,
          } = e;
          if (!r) return null;
          const c = [];
          for (let e = 1; e <= r; e += 1) c.push(e);
          return (0, v.jsxs)("div", {
            "aria-hidden": "true",
            className: i()(A, s),
            children: [
              (0, v.jsx)("div", {
                className: i()(`${A}__bar`, { [`${A}__bar--${l}`]: l }),
                children: c.map((e) =>
                  (0, v.jsx)(
                    "span",
                    {
                      className: i()(`${A}__bar__interval`, {
                        [`${A}__bar__interval--highlighted`]: e === n,
                      }),
                    },
                    e
                  )
                ),
              }),
              a && t
                ? (0, v.jsxs)("div", {
                    className: `${A}__description`,
                    children: [
                      (0, v.jsx)("span", {
                        className: `${A}__description__label`,
                        children: a,
                      }),
                      (0, v.jsx)("span", {
                        className: `${A}__description__label`,
                        children: t,
                      }),
                    ],
                  })
                : null,
            ],
          });
        },
        w = "ui-vpp-highlighted-specs__discrete-bar",
        L = (e) => {
          let {
            title: s,
            bar_config: l,
            empty_bar_label: a,
            full_bar_label: t,
            picture: r,
          } = e;
          return (0, v.jsxs)("div", {
            className: w,
            children: [
              (0, v.jsx)(b, {
                picture: {
                  bg_color: "GRAY_40",
                  bg_type: "ROUNDED",
                  url: r.url,
                },
              }),
              (0, v.jsxs)("div", {
                className: `${w}__attribute`,
                children: [
                  (0, v.jsx)(d.G, {
                    text: C.I.jsx(s.text, s.values),
                    className: `${w}__title`,
                    "data-testid": "discrete-bar-title",
                  }),
                  (0, v.jsx)(y, {
                    className: `${w}__discrete`,
                    divisions: l.full_range,
                    highlighted: l.value,
                    emptyBarLabel: (0, v.jsx)(d.G, {
                      ...a,
                      "data-testid": "discrete-bar-empty-label",
                    }),
                    fullBarLabel: (0, v.jsx)(d.G, {
                      ...t,
                      "data-testid": "discrete-bar-full-label",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        I = "ui-vpp-progress-bar",
        P = (e) => {
          let {
            className: s = "",
            percentage: l,
            size: a = "small",
            color: t = "BLUE",
            bgColor: r = "LIGHT_GRAY",
          } = e;
          if (!l) return null;
          const n = (0, h.A)({
              bg_color: r,
              className: i()(`${I}__container`, a, s),
            }),
            c = (0, h.A)({ bg_color: t, className: `${I}__fill` }),
            o = { width: `${l}%` };
          return (0, v.jsx)("div", {
            className: n,
            children: (0, v.jsx)("div", { className: c, style: o }),
          });
        },
        E = "ui-vpp-highlighted-specs__continuous-bar",
        R = (e) => {
          let { title: s, progress_bar: l, picture: a } = e;
          return (0, v.jsxs)("div", {
            className: E,
            children: [
              (0, v.jsx)(b, {
                picture: {
                  bg_color: "GRAY_40",
                  bg_type: "ROUNDED",
                  url: a.url,
                },
              }),
              (0, v.jsxs)("div", {
                className: `${E}__attribute`,
                children: [
                  (0, v.jsx)("div", {
                    className: `${E}__labels`,
                    children: (0, v.jsx)(d.G, {
                      text: C.I.jsx(s.text, s.values),
                      "data-testid": "continous-bar-title",
                    }),
                  }),
                  (0, v.jsx)(P, {
                    className: `${E}__progress`,
                    percentage: l.percentage,
                    color: l.color,
                    bgColor: l.background_color,
                  }),
                ],
              }),
            ],
          });
        },
        D = R,
        T = "ui-vpp-highlighted-specs__key-value",
        k = (e) => {
          let { title: s = null, picture: l } = e;
          return (0, v.jsxs)("div", {
            className: T,
            children: [
              (0, v.jsx)(b, {
                picture: {
                  bg_color: "GRAY_40",
                  bg_type: "ROUNDED",
                  url: l.url,
                },
              }),
              (0, v.jsx)("div", {
                className: `${T}__labels`,
                children:
                  s &&
                  (0, v.jsx)(d.G, {
                    text: C.I.jsx(s.text, s.values),
                    className: `${T}__labels__key-value`,
                  }),
              }),
            ],
          });
        },
        G = k,
        B = "ui-vpp-highlighted-specs__key-value-carousel",
        H = (e) => {
          let { list_key_value: s = null } = e;
          return (0, v.jsx)("div", {
            className: B,
            children: (0, v.jsx)("div", {
              className: `${B}__container`,
              children: (0, v.jsx)("div", {
                className: `${B}__list`,
                children: s?.map((e, s) => {
                  if ("HIDDEN" === e.state) return null;
                  const l = `${e.id || e.type}-${s}`;
                  return (0, v.jsx)(k, { ...e }, l);
                }),
              }),
            }),
          });
        };
      var S = l(49809),
        O = (l(22489), l(14479));
      const U = "ui-vpp-striped-specs",
        F = (e) => {
          let { className: s = "", specs: l } = e;
          return (0, v.jsx)("div", {
            className: i()(U, s),
            children: l.map((e) => {
              let { title: s, attributes: l } = e;
              return (0, v.jsxs)(
                "div",
                {
                  className: `${U}__table`,
                  children: [
                    s &&
                      (0, v.jsx)("h3", {
                        className: `${U}__header`,
                        children: s,
                      }),
                    (0, v.jsx)(O.XI, {
                      children: (0, v.jsx)(O.BF, {
                        children: l.map((e) =>
                          (0, v.jsxs)(
                            O.Hj,
                            {
                              className: `${U}__row`,
                              selected: !1,
                              children: [
                                (0, v.jsx)(O.A0, {
                                  className: i()(
                                    `${U}__row__column`,
                                    `${U}__row__column--id`
                                  ),
                                  scope: "row",
                                  children: e?.id,
                                }),
                                (0, v.jsx)(O.l$, {
                                  className: `${U}__row__column`,
                                  children: e?.text,
                                }),
                              ],
                            },
                            e?.id
                          )
                        ),
                      }),
                    }),
                  ],
                },
                `striped-spec-${s}`
              );
            }),
          });
        };
      var M = l(43984);
      const Y = (e) => {
          let { specs: s } = e;
          const { deviceType: l } = (0, a.useContext)(M.Ay),
            t = s.filter((e) => {
              let { column: s } = e;
              return "LEFT" === s;
            }),
            r = s.filter((e) => {
              let { column: s } = e;
              return "RIGHT" === s;
            });
          return (0, v.jsx)("div", {
            className: "ui-vpp-highlighted-specs__striped-specs",
            children:
              "desktop" === l
                ? (0, v.jsxs)(v.Fragment, {
                    children: [
                      t && t.length > 0 && (0, v.jsx)(F, { specs: t }),
                      r && r.length > 0 && (0, v.jsx)(F, { specs: r }),
                    ],
                  })
                : (0, v.jsx)(F, { specs: s }),
          });
        },
        q = "ui-vpp-highlighted-specs__see-more",
        z = (0, S.A)(Y),
        K = (e) => {
          let { action: s, specs: l, title: a, existAttributes: t } = e;
          return (0, v.jsx)(z, {
            className: q,
            collapsedProps: { specs: l },
            expandedProps: { specs: l },
            action: s,
            modalTitle: a,
            modalClassName: `${q}__modal`,
            modalHash: "highlighted-specs",
            hasPreview: !t,
            previewHeight: 400,
            useCanSeeEverything: !0,
          });
        },
        W = (0, a.memo)(K),
        Z = (0, n.R)({
          resolved: {},
          chunkName: () => "verticals-compats-compats-widget",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!l.m[s];
          },
          importAsync: () =>
            (0, o.A)(() =>
              Promise.all([
                l.e(2551),
                l.e(96784),
                l.e(70743),
                l.e(49868),
                l.e(2329),
                l.e(22344),
                l.e(79557),
              ]).then(l.bind(l, 58614))
            ),
          requireAsync(e) {
            const s = this.resolve(e);
            return (
              (this.resolved[s] = !1),
              this.importAsync(e).then((e) => ((this.resolved[s] = !0), e))
            );
          },
          requireSync(e) {
            const s = this.resolve(e);
            return l(s);
          },
          resolve: () => 58614,
        }),
        Q = {
          label_component: (0, c.A)(d.G)(u.A),
          compats_widget_block: (0, c.A)(Z)(p),
          composed_highlight: (0, c.A)(Z)(p),
          highlighted_attributes: j,
          highlighted_attributes_list: f,
          discrete_bar: L,
          continuous_bar: D,
          key_value: G,
          key_value_carousel: H,
          technical_specifications: W,
        },
        V = function () {
          let { feature_name: e = "highlighted_specs_attrs" } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            containerClassName: i()("ui-vpp-highlighted-specs", {
              "ui-vpp-highlighted-specs-rex":
                "highlighted_specs_attrs_new" === e,
            }),
            processedProps: {
              sectionId: "highlighted_specs_attrs",
              sectionTabIndex: -1,
              availableComponents: Q,
            },
          };
        };
      var X = l(45260);
      l(74423);
      const J = ["continuous_bar", "key_value", "key_value_carousel"],
        ee = (e) => {
          let { components: s, getDispatch: l, feature_name: t } = e;
          return (0, a.useMemo)(
            () => ({
              components: s?.map((e, s, a) =>
                "technical_specifications" === e.id
                  ? {
                      ...e,
                      existAttributes:
                        a.filter((e) => {
                          let { type: s } = e;
                          return J.includes(s);
                        })?.length > 0,
                      getDispatch: l,
                      feature_name: t,
                    }
                  : { ...e, getDispatch: l, feature_name: t }
              ),
            }),
            [s, l, t]
          );
        },
        se = (e) => {
          let { viewport_track: s, ...l } = e;
          const { viewRef: a } = (0, X.A)(s),
            r = ee(l),
            { containerClassName: i, processedProps: n } = V(l),
            { sectionId: c, sectionTabIndex: o, availableComponents: d } = n;
          return (0, v.jsx)("section", {
            ref: a,
            id: c,
            tabIndex: o,
            className: i,
            children: (0, v.jsx)(t.A, {
              availableComponents: d,
              initialState: r,
            }),
          });
        },
        le = (0, a.memo)(se);
    },
    45260(e, s, l) {
      l.d(s, { A: () => t });
      var a = l(35240);
      const t = (e) => ({ viewRef: (0, a.A)(e, { threshold: 0.45 }) });
    },
    60711(e, s, l) {
      l.d(s, { A: () => a });
      const a = l(44489).aQ;
    },
  },
]);
//# sourceMappingURL=components-highlighted-specs-highlighted-specs-attrs-mobile.fafe4b46.js.map
