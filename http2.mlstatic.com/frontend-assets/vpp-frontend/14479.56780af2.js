"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [14479],
  {
    14479(e, t, n) {
      n.d(t, {
        XI: () => S,
        BF: () => v,
        l$: () => A,
        nd: () => k,
        A0: () => F,
        Hj: () => W,
      });
      var s = n(58168),
        l = n(80045),
        i = n(96540),
        a = n(69247),
        r = n(46942),
        o = n.n(r),
        d = n(89379),
        c = n(36552),
        h = n(74448);
      const p = (e) => {
          let {
            color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
            i18n: n,
            srLabel: s,
          } = e;
          return i.createElement(
            "svg",
            {
              "aria-hidden": s ? void 0 : !s,
              "aria-label": s || void 0,
              role: s ? "img" : void 0,
              color: t,
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor",
            },
            s && i.createElement("title", null, s),
            i.createElement("path", {
              d: "M7.40574 12.428L2.54259 7.54559L1.69238 8.39244L8.00007 14.7251L14.3078 8.39244L13.4576 7.54559L8.60574 12.4166V1.2749H7.40574V12.428Z",
              fill: "currentColor",
            })
          );
        },
        b = (e) => {
          let {
            color: t = "var(--andes-color-icon-primary, rgba(0, 0, 0, 0.9))",
            i18n: n,
            srLabel: s,
          } = e;
          return i.createElement(
            "svg",
            {
              "aria-hidden": s ? void 0 : !s,
              "aria-label": s || void 0,
              role: s ? "img" : void 0,
              color: t,
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor",
            },
            s && i.createElement("title", null, s),
            i.createElement("path", {
              d: "M14.8434 4.40769L13.9949 5.25622L12.1999 3.46122V13.9925H10.9999V3.43722L9.18992 5.24722L8.34139 4.39869L11.5879 1.15216L14.8434 4.40769Z",
              fill: "currentColor",
            }),
            i.createElement("path", {
              d: "M7.65245 11.5996L6.80392 10.7511L5.00892 12.5461V1.93488H3.80892V12.5701L1.99892 10.7601L1.15039 11.6086L4.39692 14.8551L7.65245 11.5996Z",
              fill: "currentColor",
            })
          );
        };
      var u = { ALL: "ALL", SOME: "SOME", NONE: "NONE", DISABLED: "DISABLED" };
      const m = "andes-table";
      class C extends i.Component {
        constructor(e) {
          super(e),
            (this.state = {
              selection: u.NONE,
              sortBy: e.sortBy || "",
              sort: e.sort || "desc",
            }),
            (this.onRowSelection = this.onRowSelection.bind(this)),
            (this.onHeadSelection = this.onHeadSelection.bind(this)),
            (this.renderChildren = this.renderChildren.bind(this)),
            (this.getChildProps = this.getChildProps.bind(this)),
            (this.handleSortChange = this.handleSortChange.bind(this));
        }
        onHeadSelection(e) {
          this.setState({ selection: e ? u.ALL : u.NONE });
        }
        onRowSelection(e) {
          this.setState({ selection: e });
        }
        handleSortChange() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "desc";
          const { onSortChange: n } = this.props,
            s = this.state;
          (t === s.sort && e === s.sortBy) ||
            (this.setState({ sort: t, sortBy: e }),
            "function" == typeof n && n(e, t));
        }
        renderChildren() {
          const { children: e } = this.props;
          return i.Children.map(e, (e) => {
            let t = null;
            return (
              null == e ||
                !e.type ||
                ("TableHead" !== e.type.displayName &&
                  "TableBody" !== e.type.displayName) ||
                (t = i.cloneElement(
                  e,
                  this.getChildProps(e.type.displayName, e.props)
                )),
              t
            );
          });
        }
        getChildProps(e) {
          const { id: t, selectable: n = !1 } = this.props,
            { selection: s, sortBy: l, sort: i } = this.state,
            a = {
              selectable: n,
              selection: s,
              id: "TableHead" === e ? `${t}-head` : `${t}-body`,
            };
          return (
            "TableHead" === e &&
              ((a.onHeadSelection = this.onHeadSelection),
              (a.sortBy = l),
              (a.sort = i),
              (a.handleSortChange = this.handleSortChange)),
            "TableBody" === e && (a.onRowSelection = this.onRowSelection),
            a
          );
        }
        render() {
          const { className: e, compact: t = !1, innerRef: n } = this.props,
            s = o()(m, e, { [`${m}--compact`]: t });
          return i.createElement(
            "table",
            { className: s, ref: n },
            this.renderChildren()
          );
        }
      }
      var f = C;
      const E = ["id", "ref"];
      var S = (function () {
        const e = (e) => {
          let { id: t, ref: n } = e,
            r = (0, l.A)(e, E);
          const o = (0, a.Bi)(t);
          return i.createElement(f, (0, s.A)({}, r, { id: o, innerRef: n }));
        };
        return (e.displayName = "TableContainer"), e;
      })();
      class y extends i.Component {
        constructor(e) {
          super(e),
            (this.onSelectRow = this.onSelectRow.bind(this)),
            (this.getSelectionType = this.getSelectionType.bind(this)),
            (this.renderRows = this.renderRows.bind(this)),
            (this.extractChildProps = this.extractChildProps.bind(this)),
            (this.havePropsChanged = this.havePropsChanged.bind(this)),
            (this.updateSelectionIfNeeded =
              this.updateSelectionIfNeeded.bind(this)),
            (this.updateChildrenIfNeeded =
              this.updateChildrenIfNeeded.bind(this)),
            (this.previousSelection = e.selection),
            (this.previousChildren = e.children),
            (this.previousChildProps = this.extractChildProps(e.children)),
            (this.selectedRows = []),
            (this.disabledRows = []),
            (this.allRows = 0),
            this.updateRowStates(e);
        }
        extractChildProps(e) {
          return i.Children.map(e, (e) => ({
            id: e.props.id,
            selected: e.props.selected,
            disabled: e.props.disabled,
          }));
        }
        havePropsChanged(e, t) {
          return t.every((t, n) => {
            const s = e[n];
            return !s || !(t.id === s.id && t.selected === s.selected);
          });
        }
        updateSelectionIfNeeded() {
          const { selection: e = u.NONE, children: t } = this.props;
          (e !== u.ALL && e !== u.NONE) ||
            ((this.selectedRows = t
              ? Array(i.Children.count(t)).fill(e === u.ALL)
              : []),
            (this.previousSelection = e));
        }
        updateChildrenIfNeeded() {
          const { children: e } = this.props;
          this.updateRowStates(this.props),
            (this.previousChildren = e),
            (this.previousChildProps = this.extractChildProps(e));
        }
        componentDidMount() {
          const { onRowSelection: e } = this.props;
          "function" == typeof e && e(this.getSelectionType());
        }
        onSelectRow(e, t) {
          const { onRowSelection: n } = this.props;
          (this.selectedRows[Number(e)] = t),
            "function" == typeof n && n(this.getSelectionType());
        }
        updateRowStates(e) {
          this.allRows = i.Children.count(e.children);
          const { selectedRows: t, disabledRows: n } = i.Children.toArray(
            e.children
          ).reduce(
            (e, t) => {
              if (i.isValidElement(t)) {
                const { selected: n, disabled: s } = t.props;
                e.selectedRows.push(n || !1), e.disabledRows.push(s || !1);
              }
              return e;
            },
            { selectedRows: [], disabledRows: [] }
          );
          (this.selectedRows = t), (this.disabledRows = n);
        }
        getSelectionType() {
          var e;
          const t =
            this.selectedRows.filter(Boolean).length === this.allRows &&
            0 === this.disabledRows.filter(Boolean).length;
          return (
            (null ===
              (e = [
                {
                  condition: () => this.disabledRows.every(Boolean),
                  type: u.DISABLED,
                },
                {
                  condition: () =>
                    this.disabledRows.every(
                      (e, t) => e === this.selectedRows[t]
                    ),
                  type: u.NONE,
                },
                {
                  condition: () =>
                    this.selectedRows.filter(Boolean).length > 0 && !t,
                  type: u.SOME,
                },
                {
                  condition: () =>
                    this.selectedRows.filter(Boolean).length === this.allRows,
                  type: u.ALL,
                },
              ].find((e) => {
                let { condition: t } = e;
                return t();
              })) || void 0 === e
              ? void 0
              : e.type) || u.NONE
          );
        }
        renderRows() {
          const {
              children: e,
              selectable: t = !1,
              id: n,
              selection: s,
            } = this.props,
            { previousChildProps: l, havePropsChanged: a } = this,
            r = a(l, this.extractChildProps(e));
          return (
            this.previousSelection !== s && this.updateSelectionIfNeeded(),
            Array.isArray(this.previousChildren) &&
              Array.isArray(e) &&
              (this.previousChildren.length !== e.length || r) &&
              this.updateChildrenIfNeeded(),
            i.Children.map(e, (e, s) => {
              let l = null;
              if (
                (0, i.isValidElement)(e) &&
                e.type &&
                "TableRow" === e.type.displayName
              ) {
                const a = {
                  selectable: t,
                  onSelectRow: (t, n) => {
                    this.onSelectRow(t, n),
                      "function" == typeof e.props.onCheckRow &&
                        e.props.onCheckRow(t, n);
                  },
                  selected: this.selectedRows[Number(s)],
                  disabled: this.disabledRows[Number(s)],
                  index: s,
                  id: `${n}-row-${s}`,
                };
                l = i.cloneElement(e, a);
              }
              return l;
            })
          );
        }
        render() {
          const { innerRef: e } = this.props;
          return i.createElement(
            "tbody",
            { className: `${m}__body`, ref: e },
            this.renderRows()
          );
        }
      }
      y.displayName = "TableBody";
      var x = y;
      const g = ["id", "ref"];
      var v = (function () {
        const e = (e) => {
          let { id: t, ref: n } = e,
            r = (0, l.A)(e, g);
          const o = (0, a.Bi)(t);
          return i.createElement(x, (0, s.A)({ id: o }, r, { innerRef: n }));
        };
        return (e.displayName = "TableBody"), e;
      })();
      const R = [
        "className",
        "children",
        "align",
        "verticalAlign",
        "textContentMaxLines",
        "expandable",
        "innerRef",
        "id",
        "expandableDataContentProps",
      ];
      class N extends i.PureComponent {
        render() {
          const e = this.props,
            {
              className: t,
              children: n,
              align: a = "left",
              verticalAlign: r = "center",
              textContentMaxLines: h,
              expandable: p,
              innerRef: b,
              id: u,
              expandableDataContentProps: C,
            } = e,
            f = (0, l.A)(e, R),
            E = void 0 !== p,
            S = E && p.open,
            y = E ? p.onClick : void 0,
            x = E ? p.ariaLabel : void 0,
            g = o()(
              `${m}__column`,
              `${m}__column--${a}`,
              `${m}__column--vertical-align-${r}`,
              E && `${m}__expandable`,
              E && `${m}__expandable-${S ? "open" : "close"}`,
              t
            ),
            v = (0, d.A)({ id: u }, f),
            N = i.Children.toArray(n),
            w = 1 === N.length && "string" == typeof N[0],
            _ = null != h ? h : "none",
            A = w ? { lineClamp: _, WebkitLineClamp: _ } : void 0,
            L = w
              ? i.createElement(
                  "span",
                  (0, s.A)({ id: `${u}-value` }, C, {
                    className: `${m}__column--value`,
                    style: A,
                  }),
                  n
                )
              : i.createElement("div", (0, s.A)({ id: `${u}-value` }, C), n);
          return i.createElement(
            "td",
            (0, s.A)({ className: g }, v, { ref: b }),
            E
              ? i.createElement(
                  "div",
                  { className: `${m}__expandable--container` },
                  i.createElement(
                    "button",
                    {
                      className: `${m}__expandable--trigger`,
                      onClick: y,
                      "aria-label": x,
                      "aria-labelledby": `${u}-expandable-trigger ${u}-value`,
                      id: `${u}-expandable-trigger`,
                      "aria-expanded": p.open,
                      type: "button",
                    },
                    i.createElement(c.A, null)
                  ),
                  L
                )
              : L
          );
        }
      }
      N.displayName = "TableData";
      var w = N;
      const _ = ["id", "ref"];
      var A = (function () {
        const e = (e) => {
          let { id: t, ref: n } = e,
            r = (0, l.A)(e, _);
          const o = (0, a.Bi)(t);
          return i.createElement(w, (0, s.A)({ id: o }, r, { innerRef: n }));
        };
        return (e.displayName = "TableData"), e;
      })();
      class L extends i.Component {
        constructor(e) {
          super(e),
            (this.state = { selection: e.selection || u.NONE }),
            (this.selectableHandler = this.selectableHandler.bind(this)),
            (this.renderChildren = this.renderChildren.bind(this));
        }
        static getDerivedStateFromProps(e, t) {
          return e.selection !== t.selection
            ? { selection: e.selection }
            : null;
        }
        selectableHandler(e) {
          const { onHeadSelection: t } = this.props,
            { checked: n } = e.target;
          this.setState({ selection: n ? u.ALL : u.NONE }),
            "function" == typeof t && t(n);
        }
        renderChildren() {
          const {
            children: e,
            id: t,
            sortBy: n = "",
            sort: s = "desc",
            handleSortChange: l,
          } = this.props;
          return i.Children.map(e, (e) => {
            var a;
            const r =
              null == e || null === (a = e.type) || void 0 === a
                ? void 0
                : a.displayName;
            return "TableHeaderContainer" === r || "TableHeader" === r
              ? i.cloneElement(e, {
                  id: t,
                  sortBy: n,
                  sort: n === e.props.sortId ? s : "asc",
                  handleSortChange: l,
                })
              : null;
          });
        }
        render() {
          const {
              selectable: e = !1,
              sticky: t = !1,
              innerRef: n,
              id: s,
              i18n: l,
            } = this.props,
            { selection: a } = this.state,
            r = o()(`${m}__head`, { [`${m}__head--sticky`]: t });
          return i.createElement(
            "thead",
            { className: r, ref: n },
            i.createElement(
              "tr",
              { className: `${m}__row` },
              e &&
                i.createElement(
                  "th",
                  { className: `${m}__header ${m}__header-checkbox` },
                  i.createElement(h.S, {
                    checked: a === u.ALL || a === u.SOME,
                    indeterminate: a === u.SOME,
                    disabled: a === u.DISABLED,
                    onChange: this.selectableHandler,
                    srLabel: l.pgettext(m, "Seleccionar todas las filas"),
                    id: `${s}-head-selectable`,
                  })
                ),
              this.renderChildren()
            )
          );
        }
      }
      L.displayName = "TableHead";
      var $ = /^(11942|74329)$/.test(n.j) ? null : L,
        B = {
          "andes-tableSeleccionar fila": [null, "Select row"],
          "andes-tableSeleccionar todas las filas": [null, "Select all rows"],
        },
        H = {
          "andes-tableSeleccionar fila": [null, "Seleccionar fila"],
          "andes-tableSeleccionar todas las filas": [
            null,
            "Seleccionar todas las filas",
          ],
        },
        O = {
          "andes-tableSeleccionar fila": [null, "Selecionar linha"],
          "andes-tableSeleccionar todas las filas": [
            null,
            "Selecionar todas as linhas",
          ],
        };
      const T = /^(11942|74329)$/.test(n.j) ? null : ["id", "ref"],
        P = /^(11942|74329)$/.test(n.j)
          ? null
          : (function () {
              const e = (e) => {
                let { id: t, ref: n } = e,
                  r = (0, l.A)(e, T);
                const o = (0, a.Bi)(t),
                  { i18n: d } = (0, a.AH)("@andes/table", {
                    en: B,
                    "es-AR": H,
                    "pt-BR": O,
                  });
                return i.createElement(
                  $,
                  (0, s.A)({ i18n: d, id: o }, r, { innerRef: n })
                );
              };
              return (e.displayName = "TableHead"), e;
            })();
      var k = /^(11942|74329)$/.test(n.j) ? null : P;
      const D = [
          "className",
          "children",
          "align",
          "sort",
          "sortBy",
          "sortId",
          "handleSortChange",
          "id",
          "innerRef",
        ],
        I = `${m}__header`;
      class M extends i.PureComponent {
        constructor(e) {
          super(e), (this.handleSort = this.handleSort.bind(this));
        }
        handleSort() {
          const {
            sort: e = "asc",
            sortId: t,
            handleSortChange: n,
          } = this.props;
          "function" == typeof n && n(t, "asc" === e ? "desc" : "asc");
        }
        render() {
          const e = this.props,
            {
              className: t,
              children: n,
              align: a = "left",
              sort: r = "asc",
              sortBy: d = "",
              sortId: c,
              handleSortChange: h,
              id: u,
              innerRef: C,
            } = e,
            f = (0, l.A)(e, D),
            E = c === d,
            S = o()(I, `${I}--${a}`, t, {
              [`${I}--sortable`]: c,
              [`${I}--sorted-${r}`]: r && E,
            }),
            y = o()(`${m}__sort-icon-container`, {
              [`${m}__sort-icon-container--sorted`]: E,
            }),
            x = c ? `${u}-header-${c}` : void 0,
            g = {},
            v = {};
          c &&
            ((g.onClick = this.handleSort),
            E && (v["aria-sort"] = "asc" === r ? "ascending" : "descending"));
          const R = c ? "button" : "div";
          return i.createElement(
            "th",
            (0, s.A)({ className: S, scope: "col", id: x }, v, f, { ref: C }),
            i.createElement(
              R,
              (0, s.A)({ className: `${I}__container` }, g, {
                type: c ? "button" : void 0,
              }),
              n,
              c &&
                i.createElement(
                  "div",
                  { className: y, "aria-hidden": !0 },
                  E ? i.createElement(p, null) : i.createElement(b, null)
                )
            )
          );
        }
      }
      M.displayName = "TableHeader";
      var V = M;
      const j = ["id", "ref"];
      var F = (function () {
        const e = (e) => {
          let { id: t, ref: n } = e,
            r = (0, l.A)(e, j);
          const o = (0, a.Bi)(t);
          return i.createElement(V, (0, s.A)({ id: o }, r, { innerRef: n }));
        };
        return (e.displayName = "TableHeader"), e;
      })();
      class Z extends i.Component {
        constructor(e) {
          super(e);
          const {
            selected: t = !1,
            defaultExpanded: n = !1,
            disabled: s = !1,
          } = e;
          (this.state = {
            selected: t,
            disabled: s,
            expandableOpen: this.isExpandableControlled || n,
          }),
            (this.clickHandler = this.clickHandler.bind(this)),
            (this.getExpandableOpen = this.getExpandableOpen.bind(this)),
            (this.expandableClickHandler =
              this.expandableClickHandler.bind(this)),
            (this.renderExpandableRowColumns =
              this.renderExpandableRowColumns.bind(this));
        }
        static getDerivedStateFromProps(e, t) {
          const { selected: n = !1, onSelectRow: s, index: l = 0 } = e,
            { selected: i = !1 } = t;
          return n !== i
            ? ("function" == typeof s && s(l, n), { selected: n || !1 })
            : null;
        }
        get isExpandable() {
          const { expandable: e } = this.props;
          return void 0 !== e;
        }
        get isExpandableControlled() {
          const { expanded: e } = this.props;
          return this.isExpandable && void 0 !== e;
        }
        getExpandableOpen() {
          const { expanded: e } = this.props,
            { expandableOpen: t } = this.state;
          return this.isExpandableControlled ? e : t;
        }
        clickHandler(e) {
          const { onSelectRow: t, index: n = 0 } = this.props,
            { checked: s } = e.target;
          this.setState({ selected: s }), "function" == typeof t && t(n, s);
        }
        expandableClickHandler(e) {
          const { onOpen: t, onClose: n } = this.props,
            { expandableOpen: s } = this.state;
          this.isExpandableControlled || this.setState({ expandableOpen: !s }),
            this.getExpandableOpen() && "function" == typeof n
              ? n(e)
              : this.getExpandableOpen() || "function" != typeof t || t(e);
        }
        renderExpandableRowColumns() {
          const { children: e, expandable: t, id: n } = this.props,
            { buttonLabel: s } = t || {};
          return i.Children.toArray(e)
            .filter(
              (e) =>
                (0, i.isValidElement)(e) &&
                e.type &&
                "TableData" === e.type.displayName
            )
            .map((e, t) => {
              const l = {
                id: `${n}-${t}-expandable-row`,
                expandable:
                  0 === t
                    ? {
                        open: this.getExpandableOpen(),
                        onClick: this.expandableClickHandler,
                        ariaLabel: s,
                      }
                    : void 0,
              };
              return i.cloneElement(e, l);
            });
        }
        renderExpandableContent() {
          const {
              expandable: e,
              selectable: t = !1,
              children: n,
              id: s,
              i18n: l,
            } = this.props,
            { type: a = "content", content: r } = e || {},
            o = i.Children.toArray(n).reduce((e, t) => {
              if ((0, i.isValidElement)(t)) {
                const n = t;
                return (
                  e + ("number" == typeof n.props.colSpan ? n.props.colSpan : 1)
                );
              }
              return 0;
            }, 0),
            d = Number(o) + (t ? 1 : 0),
            c = { role: "region", "aria-labelledby": `${s}-0-expandable-row` };
          return "content" === a
            ? i.createElement(
                Z,
                { id: `${s}-expandable-row`, i18n: l },
                i.createElement(
                  w,
                  {
                    id: `${s}-expandable-data`,
                    colSpan: d,
                    expandableDataContentProps: c,
                  },
                  r
                )
              )
            : r;
        }
        render() {
          const {
              className: e,
              selectable: t = !1,
              children: n,
              innerRef: s,
              id: l,
              i18n: a,
            } = this.props,
            { selected: r, disabled: d } = this.state,
            c = r && !d,
            p = o()(
              `${m}__row`,
              this.isExpandable && `${m}__expandable--row`,
              e
            );
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              "tr",
              { className: p, ref: s },
              t &&
                i.createElement(
                  "td",
                  { className: `${m}__column ${m}__column-checkbox` },
                  i.createElement(h.S, {
                    disabled: d,
                    checked: c,
                    onChange: this.clickHandler,
                    srLabel: a.pgettext(m, "Seleccionar fila"),
                    id: `${l}-row-selectable`,
                  })
                ),
              this.isExpandable ? this.renderExpandableRowColumns() : n
            ),
            this.isExpandable && this.getExpandableOpen()
              ? this.renderExpandableContent()
              : null
          );
        }
      }
      Z.displayName = "TableRow";
      var K = Z;
      const U = ["id", "ref"];
      var W = (function () {
        const e = (e) => {
          let { id: t, ref: n } = e,
            r = (0, l.A)(e, U);
          const o = (0, a.Bi)(t),
            { i18n: d } = (0, a.AH)("@andes/table", {
              en: B,
              "es-AR": H,
              "pt-BR": O,
            });
          return i.createElement(
            K,
            (0, s.A)({ i18n: d, id: o }, r, { innerRef: n })
          );
        };
        return (e.displayName = "TableRow"), e;
      })();
    },
  },
]);
//# sourceMappingURL=14479.56780af2.js.map
