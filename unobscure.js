var t, e, n;
"use strict";
n.d(e, "a", function () {
  return K;
});
var r = n(5),
  o = function (t, e, n, r) {
    return Math.floor(Math.sqrt(Math.pow(t - n, 2) + Math.pow(e - r, 2)));
  },
  i = function () {
    return "undefined" == typeof window;
  },
  a = function (t) {
    return t.Move = "mousemove", t.Click = "click", t.Keydown = "keydown", t.Wheel = "wheel", t.Touch = "touch", t.Focus = "focus", t;
  }({}),
  c = n(93);
function u(t) {
  return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(t);
}
function s(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, N(r.key), r);
  }
}
function l(t, e, n) {
  return (e = N(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function f(t) {
  var e = function (t, e) {
    if ("object" !== N(t) || null === t) return t;
    var n = t[Symbol.toPrimitive];
    if (void 0 !== n) {
      var r = n.call(t, e || "default");
      if ("object" !== N(r)) return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e ? String : Number)(t);
  }(t, "string");
  return "symbol" === N(e) ? e : String(e);
}
var p = ["click", "mousemove", "keydown", "DOMMouseScroll", "mousewheel", "mousedown", "touchstart", "touchmove", "focus"],
  d = function () {
    function t(e) {
      var n = this,
        r = e.activityEvents,
        o = void 0 === r ? p : r,
        i = e.logStackMaxLength,
        a = void 0 === i ? 20 : i,
        c = e.autoInit,
        u = void 0 === c || c,
        s = (e.timeToStart, e.samplingTime),
        f = void 0 === s ? 100 : s,
        d = e.countDistance,
        h = void 0 !== d && d;
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, t), N(this, "logStack", void 0), N(this, "logger", void 0), N(this, "startTime", void 0), N(this, "state", "stop"), N(this, "activityEvents", void 0), N(this, "logStackMaxLength", void 0), N(this, "preEvent", void 0), N(this, "samplingTime", 100), N(this, "countDistance", void 0), this.logStackMaxLength = a, this.activityEvents = o, this.logStack = [], this.samplingTime = f, this.countDistance = h, this.logger = this.initLogger(), u && setTimeout(function () {
        n.start();
      });
    }
    var e, n, r;
    return e = t, (n = [{
      key: "initLogger",
      value: function () {
        var t = this;
        return Object(c.b)(this.samplingTime, function (e) {
          var n, r, i, c, u, s, l, f;
          if (e instanceof MouseEvent) n = {
            type: e.type,
            x: e.clientX,
            y: e.clientY,
            preX: (null === (r = t.preEvent) || void 0 === r ? void 0 : r.x) || 0,
            preY: (null === (i = t.preEvent) || void 0 === i ? void 0 : i.y) || 0,
            changeDistance: t.countDistance && (null === (c = t.preEvent) || void 0 === c ? void 0 : c.x) && (null === (u = t.preEvent) || void 0 === u ? void 0 : u.y) && N(e.clientX, e.clientY, null === (s = t.preEvent) || void 0 === s ? void 0 : s.x, null === (l = t.preEvent) || void 0 === l ? void 0 : l.y) || 0,
            timestamp: t.startTime && Date.now() - t.startTime || 0,
            preType: null === (f = t.preEvent) || void 0 === f ? void 0 : f.type
          }, e instanceof WheelEvent && (n.deltaX = e.deltaX, n.deltaY = e.deltaY);else if (e instanceof KeyboardEvent) {
            var p, d;
            n = {
              type: a.Keydown,
              key: e.key,
              preKey: (null === (p = t.preEvent) || void 0 === p ? void 0 : p.key) || "mouse",
              preType: null === (d = t.preEvent) || void 0 === d ? void 0 : d.type,
              timestamp: t.startTime && Date.now() - t.startTime || 0
            };
          } else if (e instanceof FocusEvent) {
            var h;
            n = {
              type: a.Focus,
              preType: null === (h = t.preEvent) || void 0 === h ? void 0 : h.type,
              timestamp: t.startTime && Date.now() - t.startTime || 0
            };
          } else if (e instanceof TouchEvent) {
            var v, y, m, g, b, w, A;
            n = {
              type: a.Touch,
              x: e.touches[0].clientX,
              y: e.touches[0].clientY,
              preX: (null === (v = t.preEvent) || void 0 === v ? void 0 : v.x) || 0,
              preY: (null === (y = t.preEvent) || void 0 === y ? void 0 : y.y) || 0,
              changeDistance: t.countDistance && (null === (m = t.preEvent) || void 0 === m ? void 0 : m.x) && (null === (g = t.preEvent) || void 0 === g ? void 0 : g.y) && N(e.touches[0].clientX, e.touches[0].clientY, null === (b = t.preEvent) || void 0 === b ? void 0 : b.x, null === (w = t.preEvent) || void 0 === w ? void 0 : w.y) || 0,
              timestamp: t.startTime && Date.now() - t.startTime || 0,
              preType: null === (A = t.preEvent) || void 0 === A ? void 0 : A.type
            };
          }
          n && (t.preEvent && n.timestamp > t.preEvent.timestamp ? t.logStack.push(n) : t.preEvent || t.logStack.push(n)), t.logStack.length > t.logStackMaxLength && t.logStack.shift(), t.preEvent = n;
        });
      }
    }, {
      key: "start",
      value: function () {
        var t = this;
        N() ? console.error("ActivityDetector can not be used in SSR") : (this.startTime = Date.now(), this.state = "start", this.activityEvents.forEach(function (e) {
          window.addEventListener(e, t.logger);
        }));
      }
    }, {
      key: "stop",
      value: function () {
        var t = this;
        N() ? console.error("ActivityDetector can not be used in SSR") : (this.startTime = void 0, this.state = "stop", this.activityEvents.forEach(function (e) {
          window.removeEventListener(e, t.logger);
        }));
      }
    }, {
      key: "clearLog",
      value: function () {
        this.logStack = [];
      }
    }, {
      key: "getPreTimeLog",
      value: function (t) {
        if (t) {
          var e,
            n = null === (e = this.logStack[this.logStack.length - 1]) || void 0 === e ? void 0 : e.timestamp;
          return n && n >= t ? this.logStack.filter(function (e) {
            return e.timestamp && e.timestamp >= n - t;
          }) : this.logStack;
        }
        return this.logStack;
      }
    }, {
      key: "getLog",
      value: function (t, e) {
        return t && e && t < e ? this.logStack.filter(function (n, r, o) {
          return !(r && n.timestamp < o[r - 1].timestamp) && n.timestamp && n.timestamp >= t && n.timestamp <= e;
        }) : !e && t ? this.logStack.filter(function (e, n, r) {
          return !(n && e.timestamp < r[n - 1].timestamp) && e.timestamp && e.timestamp >= t;
        }) : !t && e ? this.logStack.filter(function (t, n, r) {
          return !(n && t.timestamp < r[n - 1].timestamp) && t.timestamp && t.timestamp <= e;
        }) : this.logStack;
      }
    }]) && N(e.prototype, n), r && N(e, r), Object.defineProperty(e, "prototype", {
      writable: !1
    }), t;
  }();
function h(t) {
  return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(t);
}
function v(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, N(r.key), r);
  }
}
function y(t, e, n) {
  return (e = N(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function m(t) {
  var e = function (t, e) {
    if ("object" !== N(t) || null === t) return t;
    var n = t[Symbol.toPrimitive];
    if (void 0 !== n) {
      var r = n.call(t, e || "default");
      if ("object" !== N(r)) return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e ? String : Number)(t);
  }(t, "string");
  return "symbol" === N(e) ? e : String(e);
}
var g = function () {
  function t(e) {
    !function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }(this, t), N(this, "webglStr", ""), N(this, "webglVendorAndRenderer", ""), N(this, "activityDetector", void 0), this.activityDetector = new d(e);
  }
  var e, n, r;
  return e = t, r = [{
    key: "init",
    value: function (e) {
      if (!N()) return t.instance || (t.instance = new t(e), t.instance.getUserWebglInfo(), t.instance.activityDetector.start()), t.instance;
      console.error("BiliUserLog can not be used in SSR");
    }
  }], (n = [{
    key: "stop",
    value: function () {
      t.instance && "start" === this.activityDetector.state && this.activityDetector.stop();
    }
  }, {
    key: "clearLog",
    value: function () {
      t.instance && this.activityDetector.clearLog();
    }
  }, {
    key: "reStart",
    value: function () {
      t.instance && "stop" === this.activityDetector.state && this.activityDetector.start();
    }
  }, {
    key: "getLog",
    value: function (t, e) {
      return this.activityDetector.getLog(t, e);
    }
  }, {
    key: "getPreTimeLog",
    value: function (t) {
      return this.activityDetector.getPreTimeLog(t);
    }
  }, {
    key: "queryUserLog",
    value: function (t) {
      var e,
        n,
        r = t.preTime,
        o = t.startTime,
        i = t.endTime;
      e = r ? this.getPreTimeLog(r) : this.getLog(o, i);
      try {
        n = JSON.stringify(e);
      } catch (t) {
        n = "[]";
      }
      return {
        userLog: e,
        userLogStr: n,
        userAgent: navigator.userAgent,
        webglStr: this.webglStr,
        webglVendorAndRenderer: this.webglVendorAndRenderer
      };
    }
  }, {
    key: "getUserWebglInfo",
    value: function () {
      var t = document.createElement("canvas"),
        e = t.getContext("webgl");
      if (!e) return this.webglVendorAndRenderer = "no webgl", void (this.webglStr = "no webgl");
      this.webglStr = e.getParameter(e.VERSION);
      var n = null == e ? void 0 : e.getExtension("WEBGL_debug_renderer_info");
      if (n) {
        var r = e.getParameter(n.UNMASKED_RENDERER_WEBGL),
          o = e.getParameter(n.UNMASKED_VENDOR_WEBGL);
        this.webglVendorAndRenderer = r + o;
      } else this.webglVendorAndRenderer = "no webgl extension";
      t.remove();
    }
  }]) && N(e.prototype, n), r && N(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t;
}();
N(g, "instance", void 0);
var b,
  w,
  A = g;
function x(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, N(r.key), r);
  }
}
function S(t, e) {
  return (S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  })(t, e);
}
function E(t) {
  var e = function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }();
  return function () {
    var n,
      r = N(t);
    if (e) {
      var o = N(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return N(this, n);
  };
}
function O(t, e) {
  if (e && ("object" === N(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return N(t);
}
function k(t) {
  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function j(t) {
  return (j = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  })(t);
}
function C() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  C = function () {
    return e;
  };
  var t,
    e = {},
    n = Object.prototype,
    r = n.hasOwnProperty,
    o = Object.defineProperty || function (t, e, n) {
      t[e] = n.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function s(t, e, n) {
    return Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    N({}, "");
  } catch (t) {
    s = function (t, e, n) {
      return t[e] = n;
    };
  }
  function l(t, e, n, r) {
    var i = e && e.prototype instanceof y ? e : y,
      a = Object.create(i.prototype),
      c = new _(r || []);
    return N(a, "_invoke", {
      value: N(t, n, c)
    }), a;
  }
  function f(t, e, n) {
    try {
      return {
        type: "normal",
        arg: t.call(e, n)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = l;
  var p = "suspendedStart",
    d = "executing",
    h = "completed",
    v = {};
  function y() {}
  function m() {}
  function g() {}
  var b = {};
  N(b, a, function () {
    return this;
  });
  var w = Object.getPrototypeOf,
    A = w && N(N(N([])));
  A && A !== n && r.call(A, a) && (b = A);
  var x = g.prototype = y.prototype = Object.create(b);
  function S(t) {
    ["next", "throw", "return"].forEach(function (e) {
      N(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function E(t, e) {
    function n(o, i, a, c) {
      var u = N(t[o], t, i);
      if ("throw" !== u.type) {
        var s = u.arg,
          l = s.value;
        return l && "object" == N(l) && r.call(l, "__await") ? e.resolve(l.__await).then(function (t) {
          n("next", t, a, c);
        }, function (t) {
          n("throw", t, a, c);
        }) : e.resolve(l).then(function (t) {
          s.value = t, N(s);
        }, function (t) {
          return n("throw", t, a, c);
        });
      }
      N(u.arg);
    }
    var i;
    N(this, "_invoke", {
      value: function (t, r) {
        function o() {
          return new e(function (e, o) {
            n(t, r, e, o);
          });
        }
        return i = i ? i.then(o, o) : N();
      }
    });
  }
  function O(e, n, r) {
    var o = p;
    return function (i, a) {
      if (o === d) throw new Error("Generator is already running");
      if (o === h) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (r.method = i, r.arg = a;;) {
        var c = r.delegate;
        if (c) {
          var u = N(c, r);
          if (u) {
            if (u === v) continue;
            return u;
          }
        }
        if ("next" === r.method) r.sent = r._sent = r.arg;else if ("throw" === r.method) {
          if (o === p) throw o = h, r.arg;
          r.dispatchException(r.arg);
        } else "return" === r.method && r.abrupt("return", r.arg);
        o = d;
        var s = N(e, n, r);
        if ("normal" === s.type) {
          if (o = r.done ? h : "suspendedYield", s.arg === v) continue;
          return {
            value: s.arg,
            done: r.done
          };
        }
        "throw" === s.type && (o = h, r.method = "throw", r.arg = s.arg);
      }
    };
  }
  function k(e, n) {
    var r = n.method,
      o = e.iterator[r];
    if (o === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, N(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), v;
    var i = N(o, e.iterator, n.arg);
    if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, v;
    var a = i.arg;
    return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, v) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v);
  }
  function j(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function T(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function _(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(j, this), this.reset(!0);
  }
  function R(e) {
    if (e || "" === e) {
      var n = e[a];
      if (n) return n.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function n() {
            for (; ++o < e.length;) if (r.call(e, o)) return n.value = e[o], n.done = !1, n;
            return n.value = t, n.done = !0, n;
          };
        return i.next = i;
      }
    }
    throw new TypeError(N(e) + " is not iterable");
  }
  return m.prototype = g, N(x, "constructor", {
    value: g,
    configurable: !0
  }), N(g, "constructor", {
    value: m,
    configurable: !0
  }), m.displayName = N(g, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, N(t, u, "GeneratorFunction")), t.prototype = Object.create(x), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, N(E.prototype), N(E.prototype, c, function () {
    return this;
  }), e.AsyncIterator = E, e.async = function (t, n, r, o, i) {
    void 0 === i && (i = Promise);
    var a = new E(N(t, n, r, o), i);
    return e.isGeneratorFunction(n) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, N(x), N(x, u, "Generator"), N(x, a, function () {
    return this;
  }), N(x, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      n = [];
    for (var r in e) n.push(r);
    return n.reverse(), function t() {
      for (; n.length;) {
        var r = n.pop();
        if (r in e) return t.value = r, t.done = !1, t;
      }
      return t.done = !0, t;
    };
  }, e.values = R, _.prototype = {
    constructor: _,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(T), !e) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var n = this;
      function o(r, o) {
        return c.type = "throw", c.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var a = this.tryEntries[i],
          c = a.completion;
        if ("root" === a.tryLoc) return N("end");
        if (a.tryLoc <= this.prev) {
          var u = r.call(a, "catchLoc"),
            s = r.call(a, "finallyLoc");
          if (u && s) {
            if (this.prev < a.catchLoc) return N(a.catchLoc, !0);
            if (this.prev < a.finallyLoc) return N(a.finallyLoc);
          } else if (u) {
            if (this.prev < a.catchLoc) return N(a.catchLoc, !0);
          } else {
            if (!s) throw new Error("try statement without catch or finally");
            if (this.prev < a.finallyLoc) return N(a.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var n = this.tryEntries.length - 1; n >= 0; --n) {
        var o = this.tryEntries[n];
        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var n = this.tryEntries[e];
        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), N(n), v;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var n = this.tryEntries[e];
        if (n.tryLoc === t) {
          var r = n.completion;
          if ("throw" === r.type) {
            var o = r.arg;
            N(n);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (e, n, r) {
      return this.delegate = {
        iterator: N(e),
        resultName: n,
        nextLoc: r
      }, "next" === this.method && (this.arg = t), v;
    }
  }, e;
}
function T(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function (e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function _(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {};
    e % 2 ? N(Object(n), !0).forEach(function (e) {
      N(t, e, n[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach(function (e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
    });
  }
  return t;
}
function R(t, e, n) {
  return (e = N(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function P(t) {
  var e = function (t, e) {
    if ("object" !== N(t) || null === t) return t;
    var n = t[Symbol.toPrimitive];
    if (void 0 !== n) {
      var r = n.call(t, e || "default");
      if ("object" !== N(r)) return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e ? String : Number)(t);
  }(t, "string");
  return "symbol" === N(e) ? e : String(e);
}
function I(t) {
  return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(t);
}
function L(t, e, n, r, o, i, a) {
  try {
    var c = t[i](a),
      u = c.value;
  } catch (t) {
    return void n(t);
  }
  c.done ? N(u) : Promise.resolve(u).then(r, o);
}
var N = M;
function M(t, e) {
  var n = N();
  return (M = function (t, e) {
    return n[t -= 498];
  })(t, e);
}
!function (t, e) {
  for (var n = M, r = N();;) try {
    if (528049 === -parseInt(n(514)) / 1 * (parseInt(n(549)) / 2) + parseInt(n(525)) / 3 * (parseInt(n(512)) / 4) + -parseInt(n(529)) / 5 + parseInt(n(538)) / 6 * (-parseInt(n(534)) / 7) + parseInt(n(545)) / 8 * (parseInt(n(521)) / 9) + -parseInt(n(506)) / 10 + parseInt(n(558)) / 11) break;
    r.push(r.shift());
  } catch (t) {
    r.push(r.shift());
  }
}(G);
var D = {};
Object["keys"](a)["forEach"](function (t, e) {
  D[a[t]] = e;
});
var U,
  F = function (t) {
    var e = N,
      n = function (t, e, n, r, o, i) {
        return N(e, n, r, o, i);
      },
      r = t["map"](function (t, e) {
        var r = t.x,
          o = void 0 === r ? 0 : r,
          i = t.y,
          a = void 0 === i ? 0 : i,
          c = t.timestamp,
          u = t.type;
        return n(B, o, a, c, u, e);
      })["map"](function (t) {
        return {
          x: t[0],
          y: t[1],
          z: t[2],
          timestamp: t[3],
          type: t[4]
        };
      });
    try {
      return JSON.stringify(r);
    } catch (t) {
      return console["log"](t), "";
    }
  },
  B = function (t, e, n, r, o) {
    var i = N,
      a = {
        CRCsi: function (t, e) {
          return N(e);
        },
        AioYO: function (t, e) {
          return t + e;
        },
        LsOHu: function (t, e) {
          return t + e;
        },
        nNekr: function (t, e) {
          return t * e;
        },
        MmJfn: function (t, e) {
          return t - e;
        },
        CjXyY: function (t, e) {
          return N(e);
        },
        OdIfM: function (t, e) {
          return N(e);
        }
      },
      c = a["CRCsi"](H, o);
    return [a["AioYO"](a["LsOHu"](a["CRCsi"](V, 1) * t, a.nNekr(a["CRCsi"](V, 0), e)), c), a["AioYO"](a["MmJfn"](a["CjXyY"](V, 2) * t, a.nNekr(a["OdIfM"](V, 3), e)), c), c, n, D[r]];
  },
  W = ["Mg", "Mw", "NA", "NQ"],
  V = function (t) {
    var e = N,
      n = {
        hQAjN: function (t, e) {
          return t + e;
        },
        bdUwC: function (t, e) {
          return N(e);
        }
      },
      r = n["hQAjN"](W[t], "==");
    return n["bdUwC"](Number, atob(r));
  },
  H = function (t) {
    var e = N,
      n = {
        ImqLE: function (t, e) {
          return t * e;
        }
      };
    return Math.floor(n.ImqLE(n["ImqLE"](Math.random(), 114), t));
  },
  q = function (t) {
    var e = N,
      n = {
        LztiW: function (t, e) {
          return N(e);
        },
        qmlRV: function (t, e) {
          return t - e;
        }
      },
      r = new TextEncoder()["encode"](t)["buffer"],
      o = new Uint8Array(r),
      i = n["LztiW"](btoa, String.fromCharCode["apply"](null, o));
    return i[N(498)](0, n["qmlRV"](i["length"], 2));
  };
function G() {
  var t = ["szSez", "103591TJTTxc", "CjXyY", "CRCsi", "handler", "length", "map", "TXMjE", "189vkvYeF", "AWumG", "HwlZR", "init", "324378lGstCz", "valueMap", "WKvHl", "name", "3716570VOnHWp", "TBybc", "wcSXW", "mhLTH", "webglStr", "14nRDWOh", "error", "AioYO", "buffer", "2550606OYIlVp", "keys", "XGGLO", "log", "params", "KfRTB", "AHjCN", "92152cwuYJw", "rAndRender", "bdUwC", "webglVendo", "18zWDGOL", "tkpid", "stringify", "encode", "LOG", "payload", "forEach", "apply", "eFIXr", "34444817xwEJrQ", "ytHiH", "request", "hQAjN", "LsOHu", "substring", "userLogStr", "CdcgQ", "PsWqo", "MmJfn", "OdIfM", "ImqLE", "DhwGv", "4274880qQISqI", "qmlRV", "LztiW", "jmfws", "queryUserL", "ZHgrM", "4KGZfal"];
  return (G = function () {
    return t;
  })();
}
var X = function () {
  var t,
    e = (t = N().mark(function t(e, n, r) {
      var o, i, a, c, u, s, l, f, p, d, h, v;
      return N().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (!(u = {
              HbpiR: function (t, e) {
                return t + e;
              },
              XGGLO: function (t, e) {
                return N(e);
              },
              AHjCN: function (t, e) {
                return N(e);
              },
              HWFQp: function (t, e) {
                return t === e;
              },
              ljrMA: "undefined",
              KfRTB: function (t, e) {
                return t !== e;
              },
              AWumG: (c = N)(550),
              TXMjE: "DhwGv",
              WKvHl: function (t) {
                return N();
              },
              RzGqF: function (t, e) {
                return N(e);
              },
              CdcgQ: function (t, e) {
                return t === e;
              },
              wcSXW: "szSez",
              ytHiH: "TBybc",
              lcNza: function (t, e) {
                return t !== e;
              },
              jmfws: "HwlZR",
              ZHgrM: "mhLTH",
              PsWqo: function (t) {
                return N();
              }
            }).HWFQp("undefined" == typeof window ? "undefined" : N(window), u.ljrMA)) {
              t.next = 10;
              break;
            }
            if (!u["KfRTB"](u["AWumG"], u["TXMjE"])) {
              t.next = 8;
              break;
            }
            return t.next = 5, u["WKvHl"](n);
          case 5:
            return t.abrupt("return", t.sent);
          case 8:
            return s = u.HbpiR(_0x50a33f[_0x4a2090], "=="), t.abrupt("return", u["XGGLO"](_0xd0b29f, u["AHjCN"](_0x22dd39, s)));
          case 10:
            if (U) {
              t.next = 14;
              break;
            }
            return t.next = 13, u["WKvHl"](n);
          case 13:
            return t.abrupt("return", t.sent);
          case 14:
            if (l = (null == r ? void 0 : r["payload"]) || {}, f = l.obfuscate, p = l.logConfig, d = l.query, h = void 0 === d ? {} : d, v = U["queryUserL" + "og"](h), f && (v["userLogStr"] = u["AHjCN"](F, v.userLog), v["webglStr"] = u.RzGqF(q, v["webglStr"]), v["webglVendo" + "rAndRender" + "er"] = u.XGGLO(q, v["webglVendo" + "rAndRender" + "er"])), null == p || !p.valueMap || !e.request) {
              t.next = 24;
              break;
            }
            if (!u["CdcgQ"](u["wcSXW"], u["ytHiH"])) {
              t.next = 21;
              break;
            }
            return t.abrupt("return", _0x596037["stringify"](_0x5a6d1c));
          case 21:
            Object.keys(p["valueMap"]).forEach(function (t) {
              var n,
                r = c;
              if (null !== (n = e["request"]) && void 0 !== n && n.params) try {
                var o;
                e["request"]["params"][null === (o = p["valueMap"]) || void 0 === o ? void 0 : o[t]] = (null == v ? void 0 : v[t]) || "";
              } catch (t) {
                return void console["error"](t);
              }
            });
          case 22:
            t.next = 25;
            break;
          case 24:
            e["request"] && (u.lcNza(u["jmfws"], u["ZHgrM"]) ? e.request["params"] = N(N({}, e["request"]["params"]), {}, {
              userLogStr: null == v ? void 0 : v["userLogStr"],
              webglStr: null == v ? void 0 : v["webglStr"],
              webglVendorAndRenderer: null == v ? void 0 : v["webglVendo" + "rAndRender" + "er"]
            }) : _0xea16f["request"]["params"] = N(N({}, _0x58e1d9["request"]["params"]), {}, {
              userLogStr: null === (o = _0x1b3043) || void 0 === o ? void 0 : o["userLogStr"],
              webglStr: null === (i = _0x22de21) || void 0 === i ? void 0 : i["webglStr"],
              webglVendorAndRenderer: null === (a = _0xaf190e) || void 0 === a ? void 0 : a.webglVendorAndRenderer
            }));
          case 25:
            return t.next = 27, u["PsWqo"](n);
          case 27:
          case "end":
            return t.stop();
        }
      }, t);
    }), function () {
      var e = this,
        n = arguments;
      return new Promise(function (r, o) {
        var i = t.apply(e, n);
        function a(t) {
          N(i, r, o, a, c, "next", t);
        }
        function c(t) {
          N(i, r, o, a, c, "throw", t);
        }
        N(void 0);
      });
    });
  return function (t, n, r) {
    return e.apply(this, arguments);
  };
}();
b = "handler", w = "name";
var K = function (t) {
  !function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && N(t, e);
  }(i, t);
  var e,
    n,
    r,
    o = N(i);
  function i(t) {
    var e;
    !function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }(this, i);
    var n = N;
    N(N(e = o.call(this, {
      handler: X,
      payload: t
    })), w, "RISK_USER_" + "LOG");
    var r = {
        eFIXr: function (t, e) {
          return t || e;
        }
      }[n(557)](t, {}),
      a = r.activityEvents,
      c = r.logStackMaxLength,
      u = r.samplingTime;
    return U = null == A ? void 0 : A[n(524)]({
      activityEvents: a,
      logStackMaxLength: c,
      samplingTime: u
    }), e;
  }
  return e = i, n && N(e.prototype, n), r && N(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}(r.a);
N(K, b, X);