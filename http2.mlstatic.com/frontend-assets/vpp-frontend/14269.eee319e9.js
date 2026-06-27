"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [14269],
  {
    14269(n, e, o) {
      o.d(e, { BH: () => cn, cB: () => pn });
      var a = o(58168),
        l = o(89379),
        s = o(96540),
        u = o(46942),
        t = o.n(u),
        m = o(69247),
        r = o(66893),
        c = o(97987),
        i = o(88460),
        d = o(94541),
        p = o(95990),
        y = o(2111),
        b = o(98712),
        g = o(90878),
        A = o(70956),
        v = o(31856),
        f = o(38883),
        E = o(12521),
        h = o(9423),
        $ = o(67085),
        C = o(47642),
        N = o(4346),
        S = o(91318),
        x = o(63929),
        _ = o(18189),
        U = o(90384),
        D = o(15308),
        L = o(61096),
        P = o(71591),
        B = o(58817),
        M = o(46529),
        z = o(25619),
        O = o(66048),
        T = o(36278),
        R = o(53477);
      var I = (n) => {
        let { fraction: e, cents: o } = n;
        if (!e || "string" != typeof e) return;
        const a = e.replace(/[,.]/g, "");
        return o ? `${a}.${o}` : a;
      };
      const H = { singular: "peso", plural: "pesos" },
        w = { singular: "centavo", plural: "centavos" },
        q = {
          $: H,
          Bs: { singular: "boliviano", plural: "bolivianos" },
          R$: { singular: "real", plural: "reales" },
          UF: { singular: "unidad de fomento", plural: "unidades de fomento" },
          "₡": { singular: "colón", plural: "colones" },
          CUC: H,
          "€": { singular: "euro", plural: "euros" },
          Q: {
            singular: "quetzal guatemalteco",
            plural: "quetzales guatemaltecos",
          },
          L: { singular: "lempira", plural: "lempiras" },
          C$: { singular: "córdoba", plural: "córdobas" },
          "B/.": { singular: "balboa", plural: "balboas" },
          "S/": { singular: "sol", plural: "soles" },
          "₲": { singular: "guaraní", plural: "guaraníes" },
          US$: { singular: "dólar", plural: "dólares" },
          "Bs.": { singular: "bolívar", plural: "bolívares" },
          "¥": { singular: "yuan", plural: "yuanes" },
        },
        X = {
          ARS: { singular: "peso argentino", plural: "pesos argentinos" },
          BOB: { singular: "boliviano", plural: "bolivianos" },
          BRL: { singular: "real", plural: "reales" },
          CLF: { singular: "unidad de fomento", plural: "unidades de fomento" },
          CLP: { singular: "peso chileno", plural: "pesos chilenos" },
          CNY: { singular: "yuan", plural: "yuanes" },
          COP: { singular: "peso colombiano", plural: "pesos colombianos" },
          CRC: { singular: "colón", plural: "colones" },
          CUC: {
            singular: "peso cubano convertible",
            plural: "pesos cubanos convertibles",
          },
          CUP: { singular: "peso cubano", plural: "pesos cubanos" },
          DOP: { singular: "peso dominicano", plural: "pesos dominicanos" },
          EUR: { singular: "euro", plural: "euros" },
          GTQ: {
            singular: "quetzal guatemalteco",
            plural: "quetzales guatemaltecos",
          },
          HNL: { singular: "lempira", plural: "lempiras" },
          MXN: { singular: "peso mexicano", plural: "pesos mexicanos" },
          NIO: { singular: "córdoba", plural: "córdobas" },
          PAB: { singular: "balboa", plural: "balboas" },
          PEN: { singular: "sol", plural: "soles" },
          PYG: { singular: "guaraní", plural: "guaraníes" },
          USD: { singular: "dólar", plural: "dólares" },
          UYU: { singular: "peso uruguayo", plural: "pesos uruguayos" },
          VEF: { singular: "bolívar", plural: "bolívares" },
          VES: { singular: "bolívar", plural: "bolívares" },
          DCE: { singular: "dólar", plural: "dólares" },
          BTC: "bitcoin",
          ETH: "ethereum",
          MCN: "mercado coin",
          MUSD: "meli dólar",
          USDP: "pax dólar",
          USDC: "usd coin",
          LINK: "chainlink",
          LTC: "litecoin",
          UNI: "uniswap",
          SOL: "solana",
          XRP: "xrp",
          DOT: "polkadot",
          AAVE: "aave",
          SUI: "sui",
          ADA: "cardano",
          XLM: "stellar",
          HBAR: "hedera",
          AVAX: "avalanche",
          NEAR: "near",
          HYPE: "hyperliquid",
          PAXG: "pax gold",
        },
        F = {
          $: w,
          Bs: w,
          R$: w,
          UF: w,
          "₡": { singular: "céntimo", plural: "céntimos" },
          CUC: w,
          "€": w,
          Q: w,
          L: w,
          C$: w,
          "B/.": { singular: "centésimo", plural: "centésimos" },
          "S/": { singular: "céntimo", plural: "céntimos" },
          "₲": { singular: "céntimo", plural: "céntimos" },
          US$: w,
          "Bs.": w,
          "¥": w,
        },
        V = {
          ARS: w,
          BOB: w,
          BRL: w,
          CLF: w,
          CLP: w,
          CNY: w,
          COP: w,
          CRC: { singular: "céntimo", plural: "céntimos" },
          CUC: w,
          CUP: w,
          DOP: w,
          EUR: w,
          GTQ: w,
          HNL: w,
          MXN: w,
          NIO: w,
          PAB: { singular: "centésimo", plural: "centésimos" },
          PEN: { singular: "céntimo", plural: "céntimos" },
          PYG: { singular: "céntimo", plural: "céntimos" },
          USD: w,
          UYU: { singular: "centésimo", plural: "centésimos" },
          VEF: w,
          VES: w,
          DCE: w,
        },
        Y = (n, e, o, a, l) =>
          ((n || e) &&
            ((0, c.A)(d.uM, n) || (0, c.A)(Object.values(d.k), e)) &&
            (a[String(n)] || l[String(e)])) ||
          o,
        G = (n, e) => Y(n, e, H, q, X),
        k = (n, e, o, a) => {
          let { symbol: l, currencyId: s, fraction: u, cents: t } = a;
          if (!n || (!s && !l) || !u) return "";
          const m = "andes-money-amount",
            r = G(l, s),
            c = ((n, e) => Y(n, e, w, F, V))(l, s),
            i = u.replace(/[,.]/g, "");
          let d = "";
          return (
            e
              ? (d += n.pgettext(m, o ? "Antes: " : "Ahora: "))
              : o && (d += n.pgettext(m, "Antes: ")),
            (d += n.npgettext(
              m,
              `{0} ${r.singular}`,
              `{0} ${r.plural}`,
              Number(i),
              i
            )),
            t &&
              Number(t) &&
              (d += n.npgettext(
                m,
                ` con {0} ${c.singular}`,
                ` con {0} ${c.plural}`,
                Number(t),
                t
              )),
            d
          );
        };
      var K = (n) => n && "string" == typeof n && n.startsWith("-");
      var Q = (n) => {
        const e = n.toString(),
          o = e.indexOf(".");
        return -1 !== o ? e.slice(o + 1) : "";
      };
      var j = (n, e) => {
        const o = ((n) => {
          const e = n.toString(),
            o = e.indexOf(".");
          return -1 !== o ? e.slice(0, o) : e;
        })(n);
        return ((n, e) => {
          let o = "";
          const { length: a } = n;
          for (let l = 0; l < a; l += 1)
            l > 0 && (a - l) % 3 == 0 && (o += e), (o += n[l]);
          return o;
        })(o, e);
      };
      var W = (n) => {
        let {
          value: e,
          currencyId: o,
          symbol: a,
          maxDecimals: l,
          applyHideDecimals: s,
        } = n;
        const u = {
          currencyId: o,
          symbol: a,
          fraction: null == e ? void 0 : e.fraction,
          cents: null == e ? void 0 : e.cents,
        };
        if (s && u.fraction && u.cents) {
          const n = (0, y.A)(l, o),
            e = (0, b.A)(
              Number(`${(0, g.A)(u.fraction)}.${(0, g.A)(u.cents)}`),
              n
            );
          return (u.cents = Q(e)), (u.fraction = j(e, ".")), u;
        }
        return u;
      };
      var Z = (n, e, o, a, l) => {
        if (o) return { currencyText: e };
        const s = n || d.En[String(e)] || d.pA;
        if (a) {
          const n = e || "";
          return l
            ? { currencyText: n, currencySymbol: s }
            : { currencyText: n };
        }
        return { currencySymbol: s };
      };
      const J = { comma: ",", dot: "." },
        nn = {
          12: 2,
          14: 2,
          16: 2,
          18: 3,
          20: 4,
          24: 4,
          28: 6,
          32: 7,
          36: 7,
          40: 7,
          44: 9,
          48: 9,
          52: 10,
          56: 10,
          60: 11,
        },
        en = {
          12: 1,
          14: 1,
          16: 1,
          18: 2,
          20: 3,
          24: 3,
          28: 3,
          32: 4,
          36: 4,
          40: 4,
          44: 4,
          48: 5,
          52: 5,
          56: 5,
          60: 7,
        },
        on = { 12: 8, 14: 8, 16: 10, 18: 10 },
        an = "andes-money-amount__logo";
      var ln = (function () {
          const n = (n) => {
            let { currencyId: e, amountSize: o } = n;
            const a = {
              BTC: s.createElement(A.A, null),
              ETH: s.createElement(v.A, null),
              USDP: s.createElement(f.A, null),
              MCN: s.createElement(E.A, null),
              LINK: s.createElement(h.A, null),
              UNI: s.createElement($.A, null),
              LTC: s.createElement(C.A, null),
              USDC: s.createElement(N.A, null),
              MUSD: s.createElement(S.A, null),
              XRP: s.createElement(x.A, null),
              SOL: s.createElement(_.A, null),
              DOT: s.createElement(U.A, null),
              AAVE: s.createElement(D.A, null),
              SUI: s.createElement(L.A, null),
              ADA: s.createElement(P.A, null),
              AVAX: s.createElement(B.A, null),
              NEAR: s.createElement(M.A, null),
              HYPE: s.createElement(z.A, null),
              XLM: s.createElement(O.A, null),
              HBAR: s.createElement(T.A, null),
              PAXG: s.createElement(R.A, null),
            };
            return s.createElement(
              "div",
              { "aria-hidden": !0, className: `${an} ${an}-${o}` },
              a[String(e)]
            );
          };
          return (n.displayName = "MoneyAmountLogo"), n;
        })(),
        sn = {
          "andes-money-amountAntes: ": [null, "Before: "],
          "andes-money-amountAhora: ": [null, "Now: "],
          "andes-money-amountMonto": [null, "Amount"],
          "andes-money-amount{0} peso": [null, "{0} peso", "{0} pesos"],
          "andes-money-amount{0} peso argentino": [
            null,
            "{0} argentine peso",
            "{0} argentine pesos",
          ],
          "andes-money-amount{0} peso chileno": [
            null,
            "{0} chilean peso",
            "{0} chilean pesos",
          ],
          "andes-money-amount{0} peso colombiano": [
            null,
            "{0} colombian peso",
            "{0} colombian pesos",
          ],
          "andes-money-amount{0} peso cubano convertible": [
            null,
            "{0} cuban convertible peso",
            "{0} cuban convertible pesos",
          ],
          "andes-money-amount{0} peso cubano": [
            null,
            "{0} cuban peso",
            "{0} cuban pesos",
          ],
          "andes-money-amount{0} peso dominicano": [
            null,
            "{0} dominican peso",
            "{0} dominican pesos",
          ],
          "andes-money-amount{0} peso mexicano": [
            null,
            "{0} mexican peso",
            "{0} mexican pesos",
          ],
          "andes-money-amount{0} peso uruguayo": [
            null,
            "{0} uruguayan peso",
            "{0} uruguayan pesos",
          ],
          "andes-money-amount{0} boliviano": [
            null,
            "{0} boliviano",
            "{0} bolivianos",
          ],
          "andes-money-amount{0} real": [null, "{0} reais", "{0} reais"],
          "andes-money-amount{0} unidad de fomento": [
            null,
            "{0} unidad de fomento",
            "{0} unidades de fomento",
          ],
          "andes-money-amount{0} colón": [null, "{0} colón", "{0} colones"],
          "andes-money-amount{0} euro": [null, "{0} euro", "{0} euros"],
          "andes-money-amount{0} quetzal guatemalteco": [
            null,
            "{0} guatemalan quetzal",
            "{0} guatemalan quetzals",
          ],
          "andes-money-amount{0} lempira": [
            null,
            "{0} honduran lempira",
            "{0} honduran lempiras",
          ],
          "andes-money-amount{0} córdoba": [
            null,
            "{0} córdoba",
            "{0} córdobas",
          ],
          "andes-money-amount{0} balboa": [null, "{0} balboa", "{0} balboas"],
          "andes-money-amount{0} sol": [
            null,
            "{0} peruvian sol",
            "{0} peruvian soles",
          ],
          "andes-money-amount{0} guaraní": [
            null,
            "{0} guaraní",
            "{0} guaranís",
          ],
          "andes-money-amount{0} dólar": [null, "{0} dollar", "{0} dollars"],
          "andes-money-amount{0} bolívar": [
            null,
            "{0} bolívar",
            "{0} bolívares",
          ],
          "andes-money-amount{0} yuan": [null, "{0} yuan", "{0} yuans"],
          "andes-money-amount con {0} centavo": [
            null,
            " with {0} cent",
            " with {0} cents",
          ],
          "andes-money-amount con {0} céntimo": [
            null,
            " with {0} centimo",
            " with {0} centimos",
          ],
          "andes-money-amount con {0} centésimo": [
            null,
            " with {0} centesimo",
            " with {0} centesimos",
          ],
          "andes-money-amount por {0}": [null, "for {0}"],
        },
        un = {
          "andes-money-amountAntes: ": [null, "Antes: "],
          "andes-money-amountAhora: ": [null, "Ahora: "],
          "andes-money-amountMonto": [null, "Monto"],
          "andes-money-amount{0} peso": [null, "{0} peso", "{0} pesos"],
          "andes-money-amount{0} peso argentino": [
            null,
            "{0} peso argentino",
            "{0} pesos argentinos",
          ],
          "andes-money-amount{0} peso chileno": [
            null,
            "{0} peso chileno",
            "{0} pesos chilenos",
          ],
          "andes-money-amount{0} peso colombiano": [
            null,
            "{0} peso colombiano",
            "{0} pesos colombianos",
          ],
          "andes-money-amount{0} peso cubano convertible": [
            null,
            "{0} peso cubano convertible",
            "{0} pesos cubanos convertibles",
          ],
          "andes-money-amount{0} peso cubano": [
            null,
            "{0} peso cubano",
            "{0} pesos cubanos",
          ],
          "andes-money-amount{0} peso dominicano": [
            null,
            "{0} peso dominicano",
            "{0} pesos dominicanos",
          ],
          "andes-money-amount{0} peso mexicano": [
            null,
            "{0} peso mexicano",
            "{0} pesos mexicanos",
          ],
          "andes-money-amount{0} peso uruguayo": [
            null,
            "{0} peso uruguayo",
            "{0} pesos uruguayos",
          ],
          "andes-money-amount{0} boliviano": [
            null,
            "{0} boliviano",
            "{0} bolivianos",
          ],
          "andes-money-amount{0} real": [null, "{0} real", "{0} reales"],
          "andes-money-amount{0} unidad de fomento": [
            null,
            "{0} unidad de fomento",
            "{0} unidades de fomento",
          ],
          "andes-money-amount{0} colón": [null, "{0} colón", "{0} colones"],
          "andes-money-amount{0} euro": [null, "{0} euro", "{0} euros"],
          "andes-money-amount{0} quetzal guatemalteco": [
            null,
            "{0} quetzal guatemalteco",
            "{0} quetzales guatemaltecos",
          ],
          "andes-money-amount{0} lempira": [
            null,
            "{0} lempira",
            "{0} lempiras",
          ],
          "andes-money-amount{0} córdoba": [
            null,
            "{0} córdoba",
            "{0} córdobas",
          ],
          "andes-money-amount{0} balboa": [null, "{0} balboa", "{0} balboas"],
          "andes-money-amount{0} sol": [null, "{0} sol", "{0} soles"],
          "andes-money-amount{0} guaraní": [
            null,
            "{0} guaraní",
            "{0} guaraníes",
          ],
          "andes-money-amount{0} dólar": [null, "{0} dólar", "{0} dólares"],
          "andes-money-amount{0} bolívar": [
            null,
            "{0} bolívar",
            "{0} bolívares",
          ],
          "andes-money-amount{0} yuan": [null, "{0} yuan", "{0} yuanes"],
          "andes-money-amount con {0} centavo": [
            null,
            " con {0} centavo",
            " con {0} centavos",
          ],
          "andes-money-amount con {0} céntimo": [
            null,
            " con {0} céntimo",
            " con {0} céntimos",
          ],
          "andes-money-amount con {0} centésimo": [
            null,
            " con {0} centésimo",
            " con {0} centésimos",
          ],
          "andes-money-amount por {0}": [null, "por {0}"],
        },
        tn = {
          "andes-money-amountAntes: ": [null, "Antes: "],
          "andes-money-amountAhora: ": [null, "Agora: "],
          "andes-money-amountMonto": [null, "Valor"],
          "andes-money-amount{0} peso": [null, "{0} peso", "{0} pesos"],
          "andes-money-amount{0} peso argentino": [
            null,
            "{0} peso argentino",
            "{0} pesos argentinos",
          ],
          "andes-money-amount{0} peso chileno": [
            null,
            "{0} peso chileno",
            "{0} pesos chilenos",
          ],
          "andes-money-amount{0} peso colombiano": [
            null,
            "{0} peso colombiano",
            "{0} pesos colombianos",
          ],
          "andes-money-amount{0} peso cubano convertible": [
            null,
            "{0} peso cubano conversível",
            "{0} pesos conversíveis cubanos",
          ],
          "andes-money-amount{0} peso cubano": [
            null,
            "{0} peso cubano",
            "{0} pesos cubanos",
          ],
          "andes-money-amount{0} peso dominicano": [
            null,
            "{0} peso dominicano",
            "{0} pesos dominicanos",
          ],
          "andes-money-amount{0} peso mexicano": [
            null,
            "{0} peso mexicano",
            "{0} pesos mexicanos",
          ],
          "andes-money-amount{0} peso uruguayo": [
            null,
            "{0} peso uruguaio",
            "{0} pesos uruguaios",
          ],
          "andes-money-amount{0} boliviano": [
            null,
            "{0} boliviano",
            "{0} bolivianos",
          ],
          "andes-money-amount{0} real": [null, "{0} real", "{0} reais"],
          "andes-money-amount{0} unidad de fomento": [
            null,
            "{0} unidade de promoção",
            "{0} unidades de promoção",
          ],
          "andes-money-amount{0} colón": [null, "{0} colon", "{0} colones"],
          "andes-money-amount{0} euro": [null, "{0} euro", "{0} euros"],
          "andes-money-amount{0} quetzal guatemalteco": [
            null,
            "{0} quetzal guatemalteco",
            "{0} quetzais guatemaltecos",
          ],
          "andes-money-amount{0} lempira": [
            null,
            "{0} lempira",
            "{0} lempiras",
          ],
          "andes-money-amount{0} córdoba": [
            null,
            "{0} córdoba",
            "{0} córdobas",
          ],
          "andes-money-amount{0} balboa": [null, "{0} balboa", "{0} balboas"],
          "andes-money-amount{0} sol": [null, "{0} sol", "{0} sóis"],
          "andes-money-amount{0} guaraní": [
            null,
            "{0} guarani",
            "{0} guaranis",
          ],
          "andes-money-amount{0} dólar": [null, "{0} dólar", "{0} dólares"],
          "andes-money-amount{0} bolívar": [
            null,
            "{0} bolívar",
            "{0} bolívares",
          ],
          "andes-money-amount{0} yuan": [null, "{0} yuan", "{0} yuanes"],
          "andes-money-amount con {0} centavo": [
            null,
            " com {0} centavo",
            " com {0} centavos",
          ],
          "andes-money-amount con {0} céntimo": [
            null,
            " com {0} cêntimo",
            " com {0} cêntimos",
          ],
          "andes-money-amount con {0} centésimo": [
            null,
            " com {0} centésimo",
            " com {0} centésimos",
          ],
          "andes-money-amount por {0}": [null, "por {0}"],
        },
        mn = {
          "andes-money-amountAntes: ": [null, "原价："],
          "andes-money-amountAhora: ": [null, "现价："],
          "andes-money-amountMonto": [null, "金额"],
          "andes-money-amount{0} peso": [null, "{0} 比索", "{0} 比索"],
          "andes-money-amount{0} peso argentino": [
            null,
            "{0} 阿根廷比索",
            "{0} 阿根廷比索",
          ],
          "andes-money-amount{0} peso chileno": [
            null,
            "{0} 智利比索",
            "{0} 智利比索",
          ],
          "andes-money-amount{0} peso colombiano": [
            null,
            "{0} 哥伦比亚比索",
            "{0} 哥伦比亚比索",
          ],
          "andes-money-amount{0} peso cubano convertible": [
            null,
            "{0} 古巴可兑换比索",
            "{0} 古巴可兑换比索",
          ],
          "andes-money-amount{0} peso cubano": [
            null,
            "{0} 古巴比索",
            "{0} 古巴比索",
          ],
          "andes-money-amount{0} peso dominicano": [
            null,
            "{0} 多米尼加比索",
            "{0} 多米尼加比索",
          ],
          "andes-money-amount{0} peso mexicano": [
            null,
            "{0} 墨西哥比索",
            "{0} 墨西哥比索",
          ],
          "andes-money-amount{0} peso uruguayo": [
            null,
            "{0} 乌拉圭比索",
            "{0} 乌拉圭比索",
          ],
          "andes-money-amount{0} boliviano": [
            null,
            "{0} 玻利维亚诺",
            "{0} 玻利维亚诺",
          ],
          "andes-money-amount{0} real": [null, "{0} 雷亚尔", "{0} 雷亚尔"],
          "andes-money-amount{0} unidad de fomento": [
            null,
            "{0} 发展单位",
            "{0} 发展单位",
          ],
          "andes-money-amount{0} colón": [null, "{0} 科朗", "{0} 科朗"],
          "andes-money-amount{0} euro": [null, "{0} 欧元", "{0} 欧元"],
          "andes-money-amount{0} quetzal guatemalteco": [
            null,
            "{0} 危地马拉格查尔",
            "{0} 危地马拉格查尔",
          ],
          "andes-money-amount{0} lempira": [
            null,
            "{0} 洪都拉斯伦皮拉",
            "{0} 洪都拉斯伦皮拉",
          ],
          "andes-money-amount{0} córdoba": [
            null,
            "{0} 科尔多瓦",
            "{0} 科尔多瓦",
          ],
          "andes-money-amount{0} balboa": [null, "{0} 巴波亚", "{0} 巴波亚"],
          "andes-money-amount{0} sol": [null, "{0} 秘鲁索尔", "{0} 秘鲁索尔"],
          "andes-money-amount{0} guaraní": [null, "{0} 瓜拉尼", "{0} 瓜拉尼"],
          "andes-money-amount{0} dólar": [null, "{0} 美元", "{0} 美元"],
          "andes-money-amount{0} bolívar": [
            null,
            "{0} 玻利瓦尔",
            "{0} 玻利瓦尔",
          ],
          "andes-money-amount con {0} centavo": [
            null,
            " 及 {0} 分",
            " 及 {0} 分",
          ],
          "andes-money-amount con {0} céntimo": [
            null,
            " 及 {0} 分",
            " 及 {0} 分",
          ],
          "andes-money-amount con {0} centésimo": [
            null,
            " 及 {0} 分",
            " 及 {0} 分",
          ],
          "andes-money-amount por {0}": [null, "为 {0}"],
        };
      const rn = "andes-money-amount",
        cn = (function () {
          const n = (n) => {
            let {
              id: e,
              applyHideDecimals: o = !1,
              centsType: u = "comma",
              className: y,
              combo: b = !1,
              compact: g = !1,
              currencyId: A,
              maxDecimals: v,
              meta: f = !1,
              previous: E = !1,
              showCurrencySymbol: h = !1,
              showCurrencyText: $ = !1,
              showLogo: C = !1,
              size: N = 36,
              suffix: S,
              symbol: x,
              value: _,
              weight: U = "regular",
              ref: D,
            } = n;
            const { getThemedComponentClasses: L, themeHash: P } = (0, p.wR)(),
              B = (0, m.Bi)(e),
              M = (0, s.useMemo)(
                () =>
                  W({
                    value: _,
                    currencyId: A,
                    symbol: x,
                    maxDecimals: v,
                    applyHideDecimals: o,
                  }),
                [_, A, x, v, o]
              ),
              { symbol: z, currencyId: O, fraction: T, cents: R } = M;
            (0, i.A)(
              O || z,
              "<MoneyAmount> needs either a defined currencyId or symbol prop to work correctly.\nPlease add a 'currencyId' or 'symbol' prop."
            );
            const H = E ? "s" : "span",
              w = K(T) ? (null == T ? void 0 : T.slice(1)) : T,
              q = "superscript" === u && N < 12 ? "comma" : u,
              X = (0, c.A)(Object.values(d.Zd), O),
              { i18n: F } = (0, m.AH)("@andes/money-amount", {
                en: sn,
                "es-AR": un,
                "pt-BR": tn,
                "zh-CN": mn,
              }),
              V = t()(
                rn,
                y,
                {
                  [`${rn}--previous`]: E,
                  [`${rn}--cents-${q}`]: q,
                  [`${rn}--compact`]: g,
                  [`${rn}--weight-semibold`]: "semibold" === U,
                },
                null == L ? void 0 : L("moneyAmount")
              ),
              Y = t()(`${rn}__cents`, {
                [`${rn}__cents--superscript-${N}`]: "superscript" === q,
              }),
              Q = (0, s.useMemo)(() => ({ fontSize: N }), [N]),
              j = (0, s.useMemo)(() => {
                const n = g ? en : nn;
                return "superscript" === q
                  ? {
                      fontSize: on[Number(N)] || N / 2,
                      marginTop: n[Number(N)],
                    }
                  : {};
              }, [N, q, g]),
              an = (0, s.useMemo)(
                () =>
                  f
                    ? {
                        main: {
                          itemProp: "offers",
                          itemScope: !0,
                          itemType: "http://schema.org/Offer",
                        },
                        currency: { itemProp: "priceCurrency", content: O },
                      }
                    : {},
                [f, O]
              ),
              cn = (0, l.A)(
                {
                  "data-andes-money-amount": !0,
                  "data-andes-money-amount-size": N,
                },
                P
              ),
              { currencySymbol: dn, currencyText: pn } = Z(z, O, X, $, h);
            return s.createElement(
              H,
              (0, a.A)(
                { className: V, style: Q },
                an.main,
                {
                  ref: D,
                  role: "img",
                  id: B,
                  "aria-label": (() => {
                    let n = X
                      ? ((n, e) => {
                          let { currencyId: o, fraction: a, cents: l } = n;
                          if (!o || !a) return "";
                          const s = G(void 0, o);
                          return `${a.replace(/[,.-]/g, "")}${
                            l ? `${"dot" === e ? "." : ","}${l}` : ""
                          } ${s}`;
                        })(M, u)
                      : k(F, b, E, M);
                    return (
                      (n += S ? ` ${S && F.pgettext(rn, "por {0}", S)}` : ""), n
                    );
                  })(),
                  "aria-roledescription": F.pgettext(rn, "Monto"),
                },
                cn
              ),
              C && s.createElement(ln, { currencyId: O, amountSize: N }),
              f &&
                s.createElement("meta", { itemProp: "price", content: I(M) }),
              K(T) &&
                s.createElement(
                  "span",
                  { className: `${rn}__negative-symbol`, "aria-hidden": !0 },
                  "-"
                ),
              s.createElement(
                "span",
                (0, a.A)({ className: `${rn}__currency` }, an.currency, {
                  "aria-hidden": !0,
                  "data-andes-money-amount-currency": !0,
                }),
                pn &&
                  s.createElement(
                    "span",
                    { className: `${rn}__currency-text` },
                    `${pn} `
                  ),
                dn &&
                  s.createElement(
                    "span",
                    { className: `${rn}__currency-symbol` },
                    dn
                  )
              ),
              s.createElement(
                "span",
                {
                  className: `${rn}__fraction`,
                  "aria-hidden": !0,
                  "data-andes-money-amount-fraction": !0,
                },
                w
              ),
              (() => {
                if (!R) return null;
                const n = J[q];
                return s.createElement(
                  s.Fragment,
                  null,
                  n && s.createElement("span", { "aria-hidden": !0 }, n),
                  !n && s.createElement(r.s, { "aria-hidden": !0 }, ","),
                  s.createElement(
                    "span",
                    {
                      className: Y,
                      style: j,
                      "aria-hidden": !0,
                      "data-andes-money-amount-cents": !0,
                    },
                    R
                  )
                );
              })(),
              S &&
                s.createElement(
                  "div",
                  {
                    className: `${rn}__suffix ${rn}__suffix-${N}`,
                    "aria-hidden": !0,
                    "data-andes-money-amount-suffix": !0,
                  },
                  `/${S}`
                )
            );
          };
          return (n.displayName = "MoneyAmount"), n;
        })(),
        dn = "andes-money-amount__discount";
      var pn = (function () {
        const n = (n) => {
          let { className: e, size: o = 18, value: l, icon: u, ref: m } = n;
          const r = (0, s.useMemo)(() => ({ fontSize: o }), [o]),
            { getThemedComponentClasses: c, themeHash: i } = (0, p.wR)(),
            d = t()(dn, e, null == c ? void 0 : c("moneyAmount"));
          return s.createElement(
            "span",
            (0, a.A)({ className: d }, i, {
              style: r,
              ref: m,
              "data-andes-money-amount-discount": !0,
            }),
            u && s.createElement("div", { className: `${dn}-icon-${o}` }, u),
            `${l}% OFF`
          );
        };
        return (n.displayName = "MoneyAmountDiscount"), n;
      })();
    },
  },
]);
//# sourceMappingURL=14269.eee319e9.js.map
