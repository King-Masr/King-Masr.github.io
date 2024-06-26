/**
 * TypeIt - The most versatile animated typing utility on the planet.
 * Author: Alex MacArthur <alex@macarthur.me> (https://macarthur.me)
 * Version: v7.0.4
 * License: GPL-2.0
 * URL: https://typeitjs.com
 */
!(function (n, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((n = "undefined" != typeof globalThis ? globalThis : n || self).TypeIt =
        t());
})(this, function () {
  "use strict";
  function n(t) {
    return (n =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (n) {
            return typeof n;
          }
        : function (n) {
            return n &&
              "function" == typeof Symbol &&
              n.constructor === Symbol &&
              n !== Symbol.prototype
              ? "symbol"
              : typeof n;
          })(t);
  }
  var t = {
      strings: [],
      speed: 100,
      cursor: !0,
      cursorChar: "|",
      cursorSpeed: 1e3,
      deleteSpeed: null,
      lifeLike: !0,
      breakLines: !0,
      startDelay: 250,
      startDelete: !1,
      nextStringDelay: 750,
      loop: !1,
      loopDelay: 750,
      html: !0,
      waitUntilVisible: !1,
      beforeString: function () {},
      afterString: function () {},
      beforeStep: function () {},
      afterStep: function () {},
      afterComplete: function () {},
    },
    e = function (n) {
      return n.map(function (n) {
        return (
          void 0 === n[1] && n.push(null), void 0 === n[2] && n.push({}), n
        );
      });
    },
    r = function (n, t) {
      return Object.assign({}, n, t);
    },
    i = function (n) {
      return Array.isArray(n);
    },
    o = function (n, t) {
      return (n[2] = r(n[2], t) || t), n;
    },
    u = function (n, t) {
      return i(n[0])
        ? n.map(function (n) {
            return o(n, t);
          })
        : o(n, t);
    },
    c = function (n, t, e, r) {
      (r = r || !1), (e = e || {});
      var o = !i(n),
        c = n.length;
      return (n = o ? new Array(n).fill(0) : n).map(function (n, i) {
        if (o) return t;
        var a = [t, n, e];
        return (
          r &&
            (0 === i && (a = u(a, { isFirst: !0 })),
            i + 1 === c && (a = u(a, { isLast: !0 }))),
          a
        );
      });
    };
  function a(n) {
    (this.insert = function (n, e) {
      t.splice(n, 0, e);
    }),
      (this.add = function (n, u, a) {
        return (
          (n = i(n) ? n : [n, null]),
          (a = a || !1),
          (u = u || 1),
          i(n[0]) || (n = c(u, n)),
          (n = e(n).map(function (n) {
            return (n[2] = r(n[2], { id: o })), o++, n;
          })),
          (t = a ? n.concat(t) : t.concat(n)),
          this
        );
      }),
      (this.set = function (n, e) {
        t[n] = e;
      }),
      (this.reset = function () {
        t = t.map(function (n) {
          return (n[2].executed = !1), n;
        });
      }),
      (this.getItems = function () {
        return (t = e(t)).filter(function (n) {
          return !n[2].executed;
        });
      }),
      (this.setMeta = function (n, e) {
        var i = t.findIndex(function (t) {
          return t[2].id === n;
        });
        t[i][2] = r(t[i][2], e);
      });
    var t = [],
      o = 0;
    this.add(n);
  }
  var f = function (n) {
      return Array.from(n);
    },
    s = function (n) {
      var t = [];
      return t.concat.apply(t, n);
    },
    l = function (n) {
      var t = document.implementation.createHTMLDocument("");
      return (t.body.innerHTML = n), t.body;
    },
    d = function n(t, e, r) {
      (e = e || null), (r = void 0 !== r && r);
      var i = f(t.childNodes).map(function (t) {
        return 3 === (e = t).nodeType || "BR" === e.tagName ? t : n(t);
        var e;
      });
      return (
        (i = s(i)),
        e &&
          (i = i.filter(function (n) {
            return !e.contains(n);
          })),
        r ? i.reverse() : i
      );
    },
    p = function (n) {
      return "BODY" === n.tagName;
    },
    h = function (n, t) {
      t = t || null;
      var e = n instanceof HTMLElement;
      return {
        node: t,
        isTopLevelText: (!t || p(t.parentNode)) && !e,
        isHTMLElement: e,
        content: n,
      };
    };
  function v(n) {
    var t,
      e = l(n);
    return (
      (t = d(e).map(function (n) {
        return n.nodeValue
          ? f(n.nodeValue).map(function (t) {
              return h(t, n);
            })
          : h(n);
      })),
      s(t)
    );
  }
  function y(n, t) {
    return (t = void 0 === t || t)
      ? v(n)
      : f(n).map(function (n) {
          return h(n);
        });
  }
  var m = function (n) {
      return document.createElement(n);
    },
    g = function (n, t) {
      var e = m("style");
      (e.id = t || ""),
        e.appendChild(document.createTextNode(n)),
        document.head.appendChild(e);
    },
    b = function (n) {
      return (
        i(n) || (n = [n / 2, n / 2]),
        { before: n[0], after: n[1], total: n[0] + n[1] }
      );
    },
    S = function (n, t) {
      return Math.abs(Math.random() * (n + t - (n - t)) + (n - t));
    };
  var N = function (n) {
      return ["textarea", "input"].indexOf(n.tagName.toLowerCase()) > -1;
    },
    T = function (n, t) {
      var e = t.querySelectorAll("*");
      return [t].concat(f(e).reverse()).find(function (t) {
        return t.cloneNode().outerHTML === n.outerHTML;
      });
    },
    L = function (n, t, e, r) {
      e = e || null;
      var i = t.isHTMLElement,
        o = i ? t.content : document.createTextNode(t.content);
      if (N(n)) n.value = "".concat(n.value).concat(t.content);
      else {
        if (!t.isTopLevelText && !i) {
          var u = t.node.parentNode,
            c = T(u.cloneNode(), n);
          if (
            (function (n, t) {
              if (!n) return !1;
              var e = n.nextSibling;
              return !e || e.isEqualNode(t);
            })(c, e)
          )
            n = c;
          else if (
            (((o = u.cloneNode()).innerText = t.content), !p(u.parentNode))
          ) {
            for (
              var a = u.parentNode, f = a.cloneNode(), s = T(f, n);
              !s && !p(a);

            )
              (f.innerHTML = o.outerHTML),
                (o = f),
                (f = a.parentNode.cloneNode()),
                (a = a.parentNode),
                (s = T(f, n));
            n = s || n;
          }
        }
        var l = d(n, e, !0)[r - 1],
          h = l ? l.parentNode : n;
        h.insertBefore(o, h.contains(e) ? e : null);
      }
    },
    M = function (n) {
      var t;
      return null == n || null === (t = n.parentNode) || void 0 === t
        ? void 0
        : t.removeChild(n);
    };
  var x = function (n, t, e) {
      var r,
        i = "string" == typeof n,
        o = !1,
        u = -1 * n;
      return (
        i &&
          ((u = (r = "END" === n.toUpperCase()) ? -1 : 1),
          (o = r ? t + u > 0 : t + u < e.length)),
        { isString: i, numberOfSteps: u, canKeepMoving: o }
      );
    },
    w = function (n) {
      var t,
        e = ["font", "lineHeight", "color"],
        r = m("SPAN"),
        i = ((t = n), window.getComputedStyle(t, null));
      for (var o in i) e.indexOf(o) > -1 && i[o] && (r.style[o] = i[o]);
      return r.style.cssText;
    };
  function D(n, t, e) {
    return e
      ? t
        ? t(n)
        : n
      : ((n && n.then) || (n = Promise.resolve(n)), t ? n.then(t) : n);
  }
  function H(n) {
    return function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      try {
        return Promise.resolve(n.apply(this, t));
      } catch (n) {
        return Promise.reject(n);
      }
    };
  }
  function E() {}
  function C(n, t) {
    if (!t) return n && n.then ? n.then(E) : Promise.resolve();
  }
  function A(n, t) {
    var e = n();
    return e && e.then ? e.then(t) : t(e);
  }
  function k(n, t, e) {
    if (!n.s) {
      if (e instanceof O) {
        if (!e.s) return void (e.o = k.bind(null, n, t));
        1 & t && (t = e.s), (e = e.v);
      }
      if (e && e.then)
        return void e.then(k.bind(null, n, t), k.bind(null, n, 2));
      (n.s = t), (n.v = e);
      var r = n.o;
      r && r(n);
    }
  }
  var O = (function () {
    function n() {}
    return (
      (n.prototype.then = function (t, e) {
        var r = new n(),
          i = this.s;
        if (i) {
          var o = 1 & i ? t : e;
          if (o) {
            try {
              k(r, 1, o(this.v));
            } catch (n) {
              k(r, 2, n);
            }
            return r;
          }
          return this;
        }
        return (
          (this.o = function (n) {
            try {
              var i = n.v;
              1 & n.s ? k(r, 1, t ? t(i) : i) : e ? k(r, 1, e(i)) : k(r, 2, i);
            } catch (n) {
              k(r, 2, n);
            }
          }),
          r
        );
      }),
      n
    );
  })();
  function P(n, t) {
    return n && n.then ? n.then(t) : t(n);
  }
  return function (e, o) {
    var u = this,
      s = this;
    o = o || {};
    var p = function (n, t, e) {
        return (
          (n = i(n[0]) ? n : [n]),
          an.add(n, t),
          (function (n) {
            var t = (n = n || {}).delay;
            t && an.add([U, t]);
          })(e),
          s
        );
      },
      T = function (t) {
        return (
          (t = "object" === n(t) ? t : {}),
          [
            [Q, t, { force: !0 }],
            [Q, en, { force: !0 }],
          ]
        );
      },
      z = function () {
        return X ? f(W.value) : d(W, fn, !0);
      },
      B = function (n, t) {
        t = t || 1;
        var e = en.nextStringDelay;
        an.insert(n, [U, e.before]), an.insert(n + t + 1, [U, e.after]);
      },
      I = H(function () {
        if (fn) {
          var n = "[data-typeit-id='".concat(cn, "'] .ti-cursor");
          g(
            "@keyframes blink-"
              .concat(
                cn,
                " { 0% {opacity: 0} 49% {opacity: 0} 50% {opacity: 1} } "
              )
              .concat(n, " { animation: blink-")
              .concat(cn, " ")
              .concat(en.cursorSpeed / 1e3, "s infinite; } ")
              .concat(n, ".with-delay { animation-delay: 500ms; } ")
              .concat(n, ".disabled { animation: none; }"),
            cn
          ),
            W.appendChild(fn);
          var t = "loaded" === document.fonts.status;
          return D(
            t || document.fonts.ready,
            function (n) {
              var t = fn.getBoundingClientRect().width / 2;
              fn.style.margin = "0 -"
                .concat(t + 2, "px 0 -")
                .concat(t - 2, "px");
            },
            t
          );
        }
      }),
      R = function (n) {
        fn &&
          (fn.classList.toggle("disabled", n),
          fn.classList.toggle("with-delay", !n));
      },
      q = H(function (n, t) {
        return $.push(setTimeout(n, t)), D();
      }),
      j = H(function (n) {
        var t = _;
        return D(
          t && F(_),
          function (t) {
            return an.reset(), an.set(0, [U, n.before]), C(G(!0));
          },
          !t
        );
      }),
      V = H(function () {
        tn.started = !0;
        var n,
          t = an.getItems();
        return P(
          (function (n, t) {
            try {
              var e = n();
            } catch (n) {
              return t(n);
            }
            return e && e.then ? e.then(void 0, t) : e;
          })(function () {
            return P(
              ((e = t),
              (r = function (e) {
                if (tn.frozen || tn.destroyed) throw "";
                var r,
                  i,
                  o,
                  c,
                  a = t[e],
                  f = a[2];
                return (
                  (n = [a, u]),
                  f.freezeCursor && R(!0),
                  (r = en.speed),
                  (i = en.deleteSpeed),
                  (o = en.lifeLike),
                  (c = (i = null !== i ? i : r / 3) / 2),
                  (Z = o ? [S(r, r / 2), S(i, c)] : [r, i]),
                  A(
                    function () {
                      var t;
                      if (null == f ? void 0 : f.isFirst)
                        return C((t = en).beforeString.apply(t, n));
                    },
                    function () {
                      var t;
                      return D((t = en).beforeStep.apply(t, n), function () {
                        return D(a[0].call(u, a[1], f), function () {
                          return A(
                            function () {
                              var t, e;
                              if (
                                null === (t = a[2]) || void 0 === t
                                  ? void 0
                                  : t.isLast
                              )
                                return C((e = en).afterString.apply(e, n));
                            },
                            function () {
                              var t;
                              return D(
                                (t = en).afterStep.apply(t, n),
                                function () {
                                  an.setMeta(f.id, { executed: !0 }), R(!1);
                                }
                              );
                            }
                          );
                        });
                      });
                    }
                  )
                );
              }),
              (i = function () {
                return !1;
              }),
              (a = -1),
              (function n(t) {
                try {
                  for (; ++a < e.length && (!i || !i()); )
                    if ((t = r(a)) && t.then) {
                      if (!((u = t) instanceof O && 1 & u.s))
                        return void t.then(
                          n,
                          c || (c = k.bind(null, (o = new O()), 2))
                        );
                      t = t.v;
                    }
                  o ? k(o, 1, t) : (o = t);
                } catch (n) {
                  k(o || (o = new O()), 2, n);
                }
                var u;
              })(),
              o),
              function (t) {
                var e;
                return (
                  (tn.completed = !0),
                  D((e = en).afterComplete.apply(e, n), function () {
                    if (!en.loop) throw "";
                    var n = en.loopDelay;
                    q(function () {
                      return D(j(n), function () {
                        V();
                      });
                    }, n.after);
                  })
                );
              }
            );
            var e, r, i, o, c, a;
          }, E),
          function (n) {
            return u;
          }
        );
      }),
      U = function (n) {
        return new Promise(function (t) {
          q(function () {
            return t();
          }, n || 0);
        });
      },
      F = function n(t) {
        var e = z(),
          r = x(t, _, e);
        return (
          (_ += r.numberOfSteps),
          new Promise(function (t) {
            q(
              H(function () {
                return (
                  (function (n, t, e, r) {
                    if (e) {
                      var i = r,
                        o = t[(i = i > t.length ? t.length : i) - 1];
                      (n = o ? o.parentNode : n).insertBefore(e, o || null);
                    }
                  })(W, z(), fn, _),
                  A(
                    function () {
                      if (r.isString && r.canKeepMoving)
                        return C(n(r.numberOfSteps > 0 ? "START" : "END"));
                    },
                    function () {
                      return t();
                    }
                  )
                );
              }),
              Z[0]
            );
          })
        );
      },
      K = function (n) {
        return new Promise(function (t) {
          q(function () {
            return L(W, n, fn, _), t();
          }, Z[0]);
        });
      },
      Q = H(function (n) {
        en = r(en, n);
      }),
      Y = H(function () {
        X
          ? (W.value = "")
          : z().forEach(function (n) {
              M(n);
            });
      }),
      G = function n(t) {
        return (
          (t = !0 === t),
          new Promise(function (e) {
            q(
              H(function () {
                var r = !1,
                  i = z();
                return (
                  i.length && (X ? (W.value = W.value.slice(0, -1)) : M(i[_])),
                  f(W.querySelectorAll("*")).forEach(function (n) {
                    if (!n.innerHTML && "BR" !== n.tagName) {
                      for (
                        var t = n;
                        1 === t.parentNode.childNodes.length &&
                        t.parentNode.childNodes[0].isEqualNode(t);

                      )
                        t = t.parentNode;
                      M(t);
                    }
                  }),
                  A(
                    function () {
                      if (t && i.length - 1 > 0)
                        return D(n(!0), function () {
                          return (r = !0), e();
                        });
                    },
                    function (n) {
                      return r ? n : e();
                    }
                  )
                );
              }),
              Z[1]
            );
          })
        );
      };
    (this.break = function (n) {
      return p([K, h(m("BR"))], 1, n);
    }),
      (this.delete = function (n, t) {
        var e = T(t);
        return p(
          [e[0]].concat(
            []
              .concat(Array(Math.abs(n) || 1))
              .fill()
              .map(function () {
                return [G, !n, nn];
              }),
            [e[1]]
          ),
          1,
          t
        );
      }),
      (this.empty = function () {
        return p(Y, 1, arguments);
      }),
      (this.exec = function (n, t) {
        var e = T(t);
        return p([e[0], [n, null], e[1]], 1, t);
      }),
      (this.move = function (n, t) {
        var e = x(n, _, z()),
          r = T(t),
          i = e.isString ? n : Math.sign(n);
        return p(
          [r[0]].concat(
            []
              .concat(Array(Math.abs(n) || 1))
              .fill()
              .map(function () {
                return [F, i, nn];
              }),
            [r[1]]
          ),
          1,
          t
        );
      }),
      (this.options = function (n) {
        return p([Q, n], 1, n);
      }),
      (this.pause = function (n, t) {
        return p([U, n], 1, t);
      }),
      (this.type = function (n, t) {
        var e = T(t),
          r = y(n, en.html),
          i = [e[0]].concat(c(r, K, nn, !0), [e[1]]);
        return p(i, 1, t);
      }),
      (this.is = function (n) {
        return tn[n];
      }),
      (this.destroy = function (n) {
        (n = void 0 === n || n),
          $.forEach(function (n) {
            clearTimeout(n);
          }),
          ($ = []),
          n && M(fn),
          (tn.destroyed = !0);
      }),
      (this.freeze = function () {
        tn.frozen = !0;
      }),
      (this.unfreeze = function () {
        (tn.frozen = !1), V();
      }),
      (this.reset = function () {
        for (var n in (!this.is("destroyed") && this.destroy(),
        an.reset(),
        (_ = 0),
        tn))
          tn[n] = !1;
        return X ? (W.value = "") : (W.innerHTML = ""), this;
      }),
      (this.go = function () {
        return tn.started
          ? this
          : (I(),
            en.waitUntilVisible
              ? ((function (n, t) {
                  new IntersectionObserver(
                    function (e, r) {
                      e.forEach(function (e) {
                        e.isIntersecting && (t(), r.unobserve(n));
                      });
                    },
                    { threshold: 1 }
                  ).observe(n);
                })(W, V.bind(this)),
                this)
              : (V(), this));
      }),
      (this.getQueue = function () {
        return an;
      }),
      (this.getOptions = function () {
        return en;
      }),
      (this.getElement = function () {
        return W;
      });
    var J,
      W = "string" == typeof (J = e) ? document.querySelector(J) : J,
      X = N(W),
      Z = [],
      $ = [],
      _ = 0,
      nn = { freezeCursor: !0 },
      tn = { started: !1, completed: !1, frozen: !1, destroyed: !1 },
      en = r(t, o);
    en = r(en, {
      html: !X && en.html,
      nextStringDelay: b(en.nextStringDelay),
      loopDelay: b(en.loopDelay),
    });
    var rn,
      on,
      un,
      cn = Math.random().toString().substring(2, 9),
      an = new a([U, en.startDelay]);
    W.setAttribute("data-typeit-id", cn),
      g(
        "[data-typeit-id]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}[data-typeit-id]"
      ),
      (en.strings =
        ((un = en.strings),
        (rn = i(un) ? un : [un]),
        (on = (function (n) {
          return n.innerHTML.replace(/<\!--.*?-->/g, "").trim();
        })(W))
          ? ((W.innerHTML = ""),
            en.startDelete
              ? (v(on).forEach(function (n) {
                  L(W, n, fn, _);
                }),
                an.add([G, !0]),
                B(1),
                rn)
              : [on.trim()].concat(rn))
          : rn));
    var fn = (function () {
      if (X || !en.cursor) return null;
      var n = m("span");
      return (
        (n.innerHTML = l(en.cursorChar).innerHTML),
        (n.className = "ti-cursor"),
        (n.style.cssText = "display:inline;".concat(w(W))),
        n
      );
    })();
    en.strings.length &&
      (function () {
        var n = en.strings.filter(function (n) {
          return !!n;
        });
        n.forEach(function (t, e) {
          var r = y(t, en.html);
          an.add(c(r, K, nn, !0));
          var i = an.getItems().length;
          if (e + 1 !== n.length) {
            if (en.breakLines) {
              var o = h(m("BR"));
              return an.add([K, o, nn]), void B(i);
            }
            an.add(c(r, G, nn)), B(i, t.length);
          }
        });
      })();
  };
});
