;(() => {
  var t = {
      730: (t) => {
        var e = 9007199254740991,
          r = /^(?:0|[1-9]\d*)$/
        function n(t, e, r) {
          switch (r.length) {
            case 0:
              return t.call(e)
            case 1:
              return t.call(e, r[0])
            case 2:
              return t.call(e, r[0], r[1])
            case 3:
              return t.call(e, r[0], r[1], r[2])
          }
          return t.apply(e, r)
        }
        var o,
          i,
          a = Object.prototype,
          u = a.hasOwnProperty,
          c = a.toString,
          s = a.propertyIsEnumerable,
          l =
            ((o = Object.keys),
            (i = Object),
            function (t) {
              return o(i(t))
            }),
          f = Math.max,
          d = !s.call({ valueOf: 1 }, 'valueOf')
        function h(t, e, r) {
          var n = t[e]
          ;(u.call(t, e) && b(n, r) && (void 0 !== r || e in t)) || (t[e] = r)
        }
        function p(t, n) {
          return (
            !!(n = null == n ? e : n) &&
            ('number' == typeof t || r.test(t)) &&
            t > -1 &&
            t % 1 == 0 &&
            t < n
          )
        }
        function g(t) {
          var e = t && t.constructor
          return t === (('function' == typeof e && e.prototype) || a)
        }
        function b(t, e) {
          return t === e || (t != t && e != e)
        }
        var m = Array.isArray
        function y(t) {
          return (
            null != t &&
            (function (t) {
              return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= e
            })(t.length) &&
            !(function (t) {
              var e = v(t) ? c.call(t) : ''
              return '[object Function]' == e || '[object GeneratorFunction]' == e
            })(t)
          )
        }
        function v(t) {
          var e = typeof t
          return !!t && ('object' == e || 'function' == e)
        }
        var x,
          w =
            ((x = function (t, e) {
              if (d || g(e) || y(e))
                !(function (t, e, r, n) {
                  r || (r = {})
                  for (var o = -1, i = e.length; ++o < i; ) {
                    var a = e[o]
                    h(r, a, t[a])
                  }
                })(
                  e,
                  (function (t) {
                    return y(t)
                      ? (function (t, e) {
                          var r =
                              m(t) ||
                              (function (t) {
                                return (
                                  (function (t) {
                                    return (
                                      (function (t) {
                                        return !!t && 'object' == typeof t
                                      })(t) && y(t)
                                    )
                                  })(t) &&
                                  u.call(t, 'callee') &&
                                  (!s.call(t, 'callee') || '[object Arguments]' == c.call(t))
                                )
                              })(t)
                                ? (function (t, e) {
                                    for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r)
                                    return n
                                  })(t.length, String)
                                : [],
                            n = r.length,
                            o = !!n
                          for (var i in t)
                            (!e && !u.call(t, i)) || (o && ('length' == i || p(i, n))) || r.push(i)
                          return r
                        })(t)
                      : (function (t) {
                          if (!g(t)) return l(t)
                          var e = []
                          for (var r in Object(t)) u.call(t, r) && 'constructor' != r && e.push(r)
                          return e
                        })(t)
                  })(e),
                  t
                )
              else for (var r in e) u.call(e, r) && h(t, r, e[r])
            }),
            (function (t, e) {
              return (
                (e = f(void 0 === e ? t.length - 1 : e, 0)),
                function () {
                  for (var r = arguments, o = -1, i = f(r.length - e, 0), a = Array(i); ++o < i; )
                    a[o] = r[e + o]
                  o = -1
                  for (var u = Array(e + 1); ++o < e; ) u[o] = r[o]
                  return (u[e] = a), n(t, this, u)
                }
              )
            })(function (t, e) {
              var r = -1,
                n = e.length,
                o = n > 1 ? e[n - 1] : void 0,
                i = n > 2 ? e[2] : void 0
              for (
                o = x.length > 3 && 'function' == typeof o ? (n--, o) : void 0,
                  i &&
                    (function (t, e, r) {
                      if (!v(r)) return !1
                      var n = typeof e
                      return (
                        !!('number' == n ? y(r) && p(e, r.length) : 'string' == n && (e in r)) &&
                        b(r[e], t)
                      )
                    })(e[0], e[1], i) &&
                    ((o = n < 3 ? void 0 : o), (n = 1)),
                  t = Object(t);
                ++r < n;

              ) {
                var a = e[r]
                a && x(t, a)
              }
              return t
            }))
        t.exports = w
      },
      465: (t, e, r) => {
        t = r.nmd(t)
        var n = '__lodash_hash_undefined__',
          o = 9007199254740991,
          i = '[object Arguments]',
          a = '[object Boolean]',
          u = '[object Date]',
          c = '[object Function]',
          s = '[object GeneratorFunction]',
          l = '[object Map]',
          f = '[object Number]',
          d = '[object Object]',
          h = '[object Promise]',
          p = '[object RegExp]',
          g = '[object Set]',
          b = '[object String]',
          m = '[object Symbol]',
          y = '[object WeakMap]',
          v = '[object ArrayBuffer]',
          x = '[object DataView]',
          w = '[object Float32Array]',
          _ = '[object Float64Array]',
          C = '[object Int8Array]',
          A = '[object Int16Array]',
          S = '[object Int32Array]',
          k = '[object Uint8Array]',
          E = '[object Uint8ClampedArray]',
          L = '[object Uint16Array]',
          T = '[object Uint32Array]',
          M = /\w*$/,
          j = /^\[object .+?Constructor\]$/,
          F = /^(?:0|[1-9]\d*)$/,
          O = {}
        ;(O[i] =
          O['[object Array]'] =
          O[v] =
          O[x] =
          O[a] =
          O[u] =
          O[w] =
          O[_] =
          O[C] =
          O[A] =
          O[S] =
          O[l] =
          O[f] =
          O[d] =
          O[p] =
          O[g] =
          O[b] =
          O[m] =
          O[k] =
          O[E] =
          O[L] =
          O[T] =
            !0),
          (O['[object Error]'] = O[c] = O[y] = !1)
        var I = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g,
          P = 'object' == typeof self && self && self.Object === Object && self,
          D = I || P || Function('return this')(),
          B = e && !e.nodeType && e,
          N = B && t && !t.nodeType && t,
          H = N && N.exports === B
        function R(t, e) {
          return t.set(e[0], e[1]), t
        }
        function W(t, e) {
          return t.add(e), t
        }
        function G(t, e, r, n) {
          var o = -1,
            i = t ? t.length : 0
          for (n && i && (r = t[++o]); ++o < i; ) r = e(r, t[o], o, t)
          return r
        }
        function X(t) {
          var e = !1
          if (null != t && 'function' != typeof t.toString)
            try {
              e = !!(t + '')
            } catch (t) {}
          return e
        }
        function z(t) {
          var e = -1,
            r = Array(t.size)
          return (
            t.forEach(function (t, n) {
              r[++e] = [n, t]
            }),
            r
          )
        }
        function V(t, e) {
          return function (r) {
            return t(e(r))
          }
        }
        function $(t) {
          var e = -1,
            r = Array(t.size)
          return (
            t.forEach(function (t) {
              r[++e] = t
            }),
            r
          )
        }
        var q,
          U = Array.prototype,
          Y = Function.prototype,
          Z = Object.prototype,
          K = D['__core-js_shared__'],
          J = (q = /[^.]+$/.exec((K && K.keys && K.keys.IE_PROTO) || ''))
            ? 'Symbol(src)_1.' + q
            : '',
          Q = Y.toString,
          tt = Z.hasOwnProperty,
          et = Z.toString,
          rt = RegExp(
            '^' +
              Q.call(tt)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
              '$'
          ),
          nt = H ? D.Buffer : void 0,
          ot = D.Symbol,
          it = D.Uint8Array,
          at = V(Object.getPrototypeOf, Object),
          ut = Object.create,
          ct = Z.propertyIsEnumerable,
          st = U.splice,
          lt = Object.getOwnPropertySymbols,
          ft = nt ? nt.isBuffer : void 0,
          dt = V(Object.keys, Object),
          ht = Dt(D, 'DataView'),
          pt = Dt(D, 'Map'),
          gt = Dt(D, 'Promise'),
          bt = Dt(D, 'Set'),
          mt = Dt(D, 'WeakMap'),
          yt = Dt(Object, 'create'),
          vt = Wt(ht),
          xt = Wt(pt),
          wt = Wt(gt),
          _t = Wt(bt),
          Ct = Wt(mt),
          At = ot ? ot.prototype : void 0,
          St = At ? At.valueOf : void 0
        function kt(t) {
          var e = -1,
            r = t ? t.length : 0
          for (this.clear(); ++e < r; ) {
            var n = t[e]
            this.set(n[0], n[1])
          }
        }
        function Et(t) {
          var e = -1,
            r = t ? t.length : 0
          for (this.clear(); ++e < r; ) {
            var n = t[e]
            this.set(n[0], n[1])
          }
        }
        function Lt(t) {
          var e = -1,
            r = t ? t.length : 0
          for (this.clear(); ++e < r; ) {
            var n = t[e]
            this.set(n[0], n[1])
          }
        }
        function Tt(t) {
          this.__data__ = new Et(t)
        }
        function Mt(t, e, r) {
          var n = t[e]
          ;(tt.call(t, e) && Gt(n, r) && (void 0 !== r || e in t)) || (t[e] = r)
        }
        function jt(t, e) {
          for (var r = t.length; r--; ) if (Gt(t[r][0], e)) return r
          return -1
        }
        function Ft(t, e, r, n, o, h, y) {
          var j
          if ((n && (j = h ? n(t, o, h, y) : n(t)), void 0 !== j)) return j
          if (!qt(t)) return t
          var F = Xt(t)
          if (F) {
            if (
              ((j = (function (t) {
                var e = t.length,
                  r = t.constructor(e)
                return (
                  e &&
                    'string' == typeof t[0] &&
                    tt.call(t, 'index') &&
                    ((r.index = t.index), (r.input = t.input)),
                  r
                )
              })(t)),
              !e)
            )
              return (function (t, e) {
                var r = -1,
                  n = t.length
                for (e || (e = Array(n)); ++r < n; ) e[r] = t[r]
                return e
              })(t, j)
          } else {
            var I = Nt(t),
              P = I == c || I == s
            if (Vt(t))
              return (function (t, e) {
                if (e) return t.slice()
                var r = new t.constructor(t.length)
                return t.copy(r), r
              })(t, e)
            if (I == d || I == i || (P && !h)) {
              if (X(t)) return h ? t : {}
              if (
                ((j = (function (t) {
                  return 'function' != typeof t.constructor || Rt(t)
                    ? {}
                    : qt((e = at(t)))
                    ? ut(e)
                    : {}
                  var e
                })(P ? {} : t)),
                !e)
              )
                return (function (t, e) {
                  return It(t, Bt(t), e)
                })(
                  t,
                  (function (t, e) {
                    return t && It(e, Ut(e), t)
                  })(j, t)
                )
            } else {
              if (!O[I]) return h ? t : {}
              j = (function (t, e, r, n) {
                var o,
                  i = t.constructor
                switch (e) {
                  case v:
                    return Ot(t)
                  case a:
                  case u:
                    return new i(+t)
                  case x:
                    return (function (t, e) {
                      var r = e ? Ot(t.buffer) : t.buffer
                      return new t.constructor(r, t.byteOffset, t.byteLength)
                    })(t, n)
                  case w:
                  case _:
                  case C:
                  case A:
                  case S:
                  case k:
                  case E:
                  case L:
                  case T:
                    return (function (t, e) {
                      var r = e ? Ot(t.buffer) : t.buffer
                      return new t.constructor(r, t.byteOffset, t.length)
                    })(t, n)
                  case l:
                    return (function (t, e, r) {
                      return G(e ? r(z(t), !0) : z(t), R, new t.constructor())
                    })(t, n, r)
                  case f:
                  case b:
                    return new i(t)
                  case p:
                    return (function (t) {
                      var e = new t.constructor(t.source, M.exec(t))
                      return (e.lastIndex = t.lastIndex), e
                    })(t)
                  case g:
                    return (function (t, e, r) {
                      return G(e ? r($(t), !0) : $(t), W, new t.constructor())
                    })(t, n, r)
                  case m:
                    return (o = t), St ? Object(St.call(o)) : {}
                }
              })(t, I, Ft, e)
            }
          }
          y || (y = new Tt())
          var D = y.get(t)
          if (D) return D
          if ((y.set(t, j), !F))
            var B = r
              ? (function (t) {
                  return (function (t, e, r) {
                    var n = e(t)
                    return Xt(t)
                      ? n
                      : (function (t, e) {
                          for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r]
                          return t
                        })(n, r(t))
                  })(t, Ut, Bt)
                })(t)
              : Ut(t)
          return (
            (function (t, e) {
              for (var r = -1, n = t ? t.length : 0; ++r < n && !1 !== e(t[r], r); );
            })(B || t, function (o, i) {
              B && (o = t[(i = o)]), Mt(j, i, Ft(o, e, r, n, i, t, y))
            }),
            j
          )
        }
        function Ot(t) {
          var e = new t.constructor(t.byteLength)
          return new it(e).set(new it(t)), e
        }
        function It(t, e, r, n) {
          r || (r = {})
          for (var o = -1, i = e.length; ++o < i; ) {
            var a = e[o],
              u = n ? n(r[a], t[a], a, r, t) : void 0
            Mt(r, a, void 0 === u ? t[a] : u)
          }
          return r
        }
        function Pt(t, e) {
          var r,
            n,
            o = t.__data__
          return (
            'string' == (n = typeof (r = e)) || 'number' == n || 'symbol' == n || 'boolean' == n
              ? '__proto__' !== r
              : null === r
          )
            ? o['string' == typeof e ? 'string' : 'hash']
            : o.map
        }
        function Dt(t, e) {
          var r = (function (t, e) {
            return null == t ? void 0 : t[e]
          })(t, e)
          return (function (t) {
            return !(!qt(t) || ((e = t), J && J in e)) && ($t(t) || X(t) ? rt : j).test(Wt(t))
            var e
          })(r)
            ? r
            : void 0
        }
        ;(kt.prototype.clear = function () {
          this.__data__ = yt ? yt(null) : {}
        }),
          (kt.prototype.delete = function (t) {
            return this.has(t) && delete this.__data__[t]
          }),
          (kt.prototype.get = function (t) {
            var e = this.__data__
            if (yt) {
              var r = e[t]
              return r === n ? void 0 : r
            }
            return tt.call(e, t) ? e[t] : void 0
          }),
          (kt.prototype.has = function (t) {
            var e = this.__data__
            return yt ? void 0 !== e[t] : tt.call(e, t)
          }),
          (kt.prototype.set = function (t, e) {
            return (this.__data__[t] = yt && void 0 === e ? n : e), this
          }),
          (Et.prototype.clear = function () {
            this.__data__ = []
          }),
          (Et.prototype.delete = function (t) {
            var e = this.__data__,
              r = jt(e, t)
            return !(r < 0 || (r == e.length - 1 ? e.pop() : st.call(e, r, 1), 0))
          }),
          (Et.prototype.get = function (t) {
            var e = this.__data__,
              r = jt(e, t)
            return r < 0 ? void 0 : e[r][1]
          }),
          (Et.prototype.has = function (t) {
            return jt(this.__data__, t) > -1
          }),
          (Et.prototype.set = function (t, e) {
            var r = this.__data__,
              n = jt(r, t)
            return n < 0 ? r.push([t, e]) : (r[n][1] = e), this
          }),
          (Lt.prototype.clear = function () {
            this.__data__ = { hash: new kt(), map: new (pt || Et)(), string: new kt() }
          }),
          (Lt.prototype.delete = function (t) {
            return Pt(this, t).delete(t)
          }),
          (Lt.prototype.get = function (t) {
            return Pt(this, t).get(t)
          }),
          (Lt.prototype.has = function (t) {
            return Pt(this, t).has(t)
          }),
          (Lt.prototype.set = function (t, e) {
            return Pt(this, t).set(t, e), this
          }),
          (Tt.prototype.clear = function () {
            this.__data__ = new Et()
          }),
          (Tt.prototype.delete = function (t) {
            return this.__data__.delete(t)
          }),
          (Tt.prototype.get = function (t) {
            return this.__data__.get(t)
          }),
          (Tt.prototype.has = function (t) {
            return this.__data__.has(t)
          }),
          (Tt.prototype.set = function (t, e) {
            var r = this.__data__
            if (r instanceof Et) {
              var n = r.__data__
              if (!pt || n.length < 199) return n.push([t, e]), this
              r = this.__data__ = new Lt(n)
            }
            return r.set(t, e), this
          })
        var Bt = lt
            ? V(lt, Object)
            : function () {
                return []
              },
          Nt = function (t) {
            return et.call(t)
          }
        function Ht(t, e) {
          return (
            !!(e = null == e ? o : e) &&
            ('number' == typeof t || F.test(t)) &&
            t > -1 &&
            t % 1 == 0 &&
            t < e
          )
        }
        function Rt(t) {
          var e = t && t.constructor
          return t === (('function' == typeof e && e.prototype) || Z)
        }
        function Wt(t) {
          if (null != t) {
            try {
              return Q.call(t)
            } catch (t) {}
            try {
              return t + ''
            } catch (t) {}
          }
          return ''
        }
        function Gt(t, e) {
          return t === e || (t != t && e != e)
        }
        ;((ht && Nt(new ht(new ArrayBuffer(1))) != x) ||
          (pt && Nt(new pt()) != l) ||
          (gt && Nt(gt.resolve()) != h) ||
          (bt && Nt(new bt()) != g) ||
          (mt && Nt(new mt()) != y)) &&
          (Nt = function (t) {
            var e = et.call(t),
              r = e == d ? t.constructor : void 0,
              n = r ? Wt(r) : void 0
            if (n)
              switch (n) {
                case vt:
                  return x
                case xt:
                  return l
                case wt:
                  return h
                case _t:
                  return g
                case Ct:
                  return y
              }
            return e
          })
        var Xt = Array.isArray
        function zt(t) {
          return (
            null != t &&
            (function (t) {
              return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= o
            })(t.length) &&
            !$t(t)
          )
        }
        var Vt =
          ft ||
          function () {
            return !1
          }
        function $t(t) {
          var e = qt(t) ? et.call(t) : ''
          return e == c || e == s
        }
        function qt(t) {
          var e = typeof t
          return !!t && ('object' == e || 'function' == e)
        }
        function Ut(t) {
          return zt(t)
            ? (function (t, e) {
                var r =
                    Xt(t) ||
                    (function (t) {
                      return (
                        (function (t) {
                          return (
                            (function (t) {
                              return !!t && 'object' == typeof t
                            })(t) && zt(t)
                          )
                        })(t) &&
                        tt.call(t, 'callee') &&
                        (!ct.call(t, 'callee') || et.call(t) == i)
                      )
                    })(t)
                      ? (function (t, e) {
                          for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r)
                          return n
                        })(t.length, String)
                      : [],
                  n = r.length,
                  o = !!n
                for (var a in t)
                  (!e && !tt.call(t, a)) || (o && ('length' == a || Ht(a, n))) || r.push(a)
                return r
              })(t)
            : (function (t) {
                if (!Rt(t)) return dt(t)
                var e = []
                for (var r in Object(t)) tt.call(t, r) && 'constructor' != r && e.push(r)
                return e
              })(t)
        }
        t.exports = function (t) {
          return Ft(t, !0, !0)
        }
      },
      800: (t, e, r) => {
        var n = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g,
          o = 'object' == typeof self && self && self.Object === Object && self,
          i = n || o || Function('return this')()
        function a(t, e) {
          for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r]
          return t
        }
        var u = Object.prototype,
          c = u.hasOwnProperty,
          s = u.toString,
          l = i.Symbol,
          f = u.propertyIsEnumerable,
          d = l ? l.isConcatSpreadable : void 0
        function h(t, e, r, n, o) {
          var i = -1,
            u = t.length
          for (r || (r = p), o || (o = []); ++i < u; ) {
            var c = t[i]
            e > 0 && r(c) ? (e > 1 ? h(c, e - 1, r, n, o) : a(o, c)) : n || (o[o.length] = c)
          }
          return o
        }
        function p(t) {
          return (
            g(t) ||
            (function (t) {
              return (
                (function (t) {
                  return (
                    (function (t) {
                      return !!t && 'object' == typeof t
                    })(t) &&
                    (function (t) {
                      return (
                        null != t &&
                        (function (t) {
                          return (
                            'number' == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
                          )
                        })(t.length) &&
                        !(function (t) {
                          var e = (function (t) {
                            var e = typeof t
                            return !!t && ('object' == e || 'function' == e)
                          })(t)
                            ? s.call(t)
                            : ''
                          return '[object Function]' == e || '[object GeneratorFunction]' == e
                        })(t)
                      )
                    })(t)
                  )
                })(t) &&
                c.call(t, 'callee') &&
                (!f.call(t, 'callee') || '[object Arguments]' == s.call(t))
              )
            })(t) ||
            !!(d && t && t[d])
          )
        }
        var g = Array.isArray
        t.exports = function (t) {
          return t && t.length ? h(t, 1) : []
        }
      },
      773: (t, e, r) => {
        var n,
          o = '__lodash_hash_undefined__',
          i = /^\[object .+?Constructor\]$/,
          a = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g,
          u = 'object' == typeof self && self && self.Object === Object && self,
          c = a || u || Function('return this')(),
          s = Array.prototype,
          l = Function.prototype,
          f = Object.prototype,
          d = c['__core-js_shared__'],
          h = (n = /[^.]+$/.exec((d && d.keys && d.keys.IE_PROTO) || ''))
            ? 'Symbol(src)_1.' + n
            : '',
          p = l.toString,
          g = f.hasOwnProperty,
          b = f.toString,
          m = RegExp(
            '^' +
              p
                .call(g)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
              '$'
          ),
          y = s.splice,
          v = k(c, 'Map'),
          x = k(Object, 'create')
        function w(t) {
          var e = -1,
            r = t ? t.length : 0
          for (this.clear(); ++e < r; ) {
            var n = t[e]
            this.set(n[0], n[1])
          }
        }
        function _(t) {
          var e = -1,
            r = t ? t.length : 0
          for (this.clear(); ++e < r; ) {
            var n = t[e]
            this.set(n[0], n[1])
          }
        }
        function C(t) {
          var e = -1,
            r = t ? t.length : 0
          for (this.clear(); ++e < r; ) {
            var n = t[e]
            this.set(n[0], n[1])
          }
        }
        function A(t, e) {
          for (var r, n, o = t.length; o--; )
            if ((r = t[o][0]) === (n = e) || (r != r && n != n)) return o
          return -1
        }
        function S(t, e) {
          var r,
            n,
            o = t.__data__
          return (
            'string' == (n = typeof (r = e)) || 'number' == n || 'symbol' == n || 'boolean' == n
              ? '__proto__' !== r
              : null === r
          )
            ? o['string' == typeof e ? 'string' : 'hash']
            : o.map
        }
        function k(t, e) {
          var r = (function (t, e) {
            return null == t ? void 0 : t[e]
          })(t, e)
          return (function (t) {
            return (
              !(!L(t) || ((e = t), h && h in e)) &&
              ((function (t) {
                var e = L(t) ? b.call(t) : ''
                return '[object Function]' == e || '[object GeneratorFunction]' == e
              })(t) ||
              (function (t) {
                var e = !1
                if (null != t && 'function' != typeof t.toString)
                  try {
                    e = !!(t + '')
                  } catch (t) {}
                return e
              })(t)
                ? m
                : i
              ).test(
                (function (t) {
                  if (null != t) {
                    try {
                      return p.call(t)
                    } catch (t) {}
                    try {
                      return t + ''
                    } catch (t) {}
                  }
                  return ''
                })(t)
              )
            )
            var e
          })(r)
            ? r
            : void 0
        }
        function E(t, e) {
          if ('function' != typeof t || (e && 'function' != typeof e))
            throw new TypeError('Expected a function')
          var r = function () {
            var n = arguments,
              o = e ? e.apply(this, n) : n[0],
              i = r.cache
            if (i.has(o)) return i.get(o)
            var a = t.apply(this, n)
            return (r.cache = i.set(o, a)), a
          }
          return (r.cache = new (E.Cache || C)()), r
        }
        function L(t) {
          var e = typeof t
          return !!t && ('object' == e || 'function' == e)
        }
        ;(w.prototype.clear = function () {
          this.__data__ = x ? x(null) : {}
        }),
          (w.prototype.delete = function (t) {
            return this.has(t) && delete this.__data__[t]
          }),
          (w.prototype.get = function (t) {
            var e = this.__data__
            if (x) {
              var r = e[t]
              return r === o ? void 0 : r
            }
            return g.call(e, t) ? e[t] : void 0
          }),
          (w.prototype.has = function (t) {
            var e = this.__data__
            return x ? void 0 !== e[t] : g.call(e, t)
          }),
          (w.prototype.set = function (t, e) {
            return (this.__data__[t] = x && void 0 === e ? o : e), this
          }),
          (_.prototype.clear = function () {
            this.__data__ = []
          }),
          (_.prototype.delete = function (t) {
            var e = this.__data__,
              r = A(e, t)
            return !(r < 0 || (r == e.length - 1 ? e.pop() : y.call(e, r, 1), 0))
          }),
          (_.prototype.get = function (t) {
            var e = this.__data__,
              r = A(e, t)
            return r < 0 ? void 0 : e[r][1]
          }),
          (_.prototype.has = function (t) {
            return A(this.__data__, t) > -1
          }),
          (_.prototype.set = function (t, e) {
            var r = this.__data__,
              n = A(r, t)
            return n < 0 ? r.push([t, e]) : (r[n][1] = e), this
          }),
          (C.prototype.clear = function () {
            this.__data__ = { hash: new w(), map: new (v || _)(), string: new w() }
          }),
          (C.prototype.delete = function (t) {
            return S(this, t).delete(t)
          }),
          (C.prototype.get = function (t) {
            return S(this, t).get(t)
          }),
          (C.prototype.has = function (t) {
            return S(this, t).has(t)
          }),
          (C.prototype.set = function (t, e) {
            return S(this, t).set(t, e), this
          }),
          (E.Cache = C),
          (t.exports = E)
      },
      779: function (t, e, r) {
        var n, o, i
        ;(o = [r(730), r(615)]),
          void 0 ===
            (i =
              'function' ==
              typeof (n = function (t, e) {
                'use strict'
                function r(t, e, n, o) {
                  var i = Error.call(this, t)
                  return (
                    Object.setPrototypeOf && Object.setPrototypeOf(i, r.prototype),
                    (i.expected = e),
                    (i.found = n),
                    (i.location = o),
                    (i.name = 'SyntaxError'),
                    i
                  )
                }
                function n(t, e, r) {
                  return (
                    (r = r || ' '),
                    t.length > e ? t : ((e -= t.length), t + (r += r.repeat(e)).slice(0, e))
                  )
                }
                return (
                  (function (t, e) {
                    function r() {
                      this.constructor = t
                    }
                    ;(r.prototype = e.prototype), (t.prototype = new r())
                  })(r, Error),
                  (r.prototype.format = function (t) {
                    var e = 'Error: ' + this.message
                    if (this.location) {
                      var r,
                        o = null
                      for (r = 0; r < t.length; r++)
                        if (t[r].source === this.location.source) {
                          o = t[r].text.split(/\r\n|\n|\r/g)
                          break
                        }
                      var i = this.location.start,
                        a = this.location.source + ':' + i.line + ':' + i.column
                      if (o) {
                        var u = this.location.end,
                          c = n('', i.line.toString().length),
                          s = o[i.line - 1],
                          l = i.line === u.line ? u.column : s.length + 1
                        e +=
                          '\n --\x3e ' +
                          a +
                          '\n' +
                          c +
                          ' |\n' +
                          i.line +
                          ' | ' +
                          s +
                          '\n' +
                          c +
                          ' | ' +
                          n('', i.column - 1) +
                          n('', l - i.column, '^')
                      } else e += '\n at ' + a
                    }
                    return e
                  }),
                  (r.buildMessage = function (t, e) {
                    var r = {
                      literal: function (t) {
                        return '"' + o(t.text) + '"'
                      },
                      class: function (t) {
                        var e = t.parts.map(function (t) {
                          return Array.isArray(t) ? i(t[0]) + '-' + i(t[1]) : i(t)
                        })
                        return '[' + (t.inverted ? '^' : '') + e + ']'
                      },
                      any: function () {
                        return 'any character'
                      },
                      end: function () {
                        return 'end of input'
                      },
                      other: function (t) {
                        return t.description
                      },
                    }
                    function n(t) {
                      return t.charCodeAt(0).toString(16).toUpperCase()
                    }
                    function o(t) {
                      return t
                        .replace(/\\/g, '\\\\')
                        .replace(/"/g, '\\"')
                        .replace(/\0/g, '\\0')
                        .replace(/\t/g, '\\t')
                        .replace(/\n/g, '\\n')
                        .replace(/\r/g, '\\r')
                        .replace(/[\x00-\x0F]/g, function (t) {
                          return '\\x0' + n(t)
                        })
                        .replace(/[\x10-\x1F\x7F-\x9F]/g, function (t) {
                          return '\\x' + n(t)
                        })
                    }
                    function i(t) {
                      return t
                        .replace(/\\/g, '\\\\')
                        .replace(/\]/g, '\\]')
                        .replace(/\^/g, '\\^')
                        .replace(/-/g, '\\-')
                        .replace(/\0/g, '\\0')
                        .replace(/\t/g, '\\t')
                        .replace(/\n/g, '\\n')
                        .replace(/\r/g, '\\r')
                        .replace(/[\x00-\x0F]/g, function (t) {
                          return '\\x0' + n(t)
                        })
                        .replace(/[\x10-\x1F\x7F-\x9F]/g, function (t) {
                          return '\\x' + n(t)
                        })
                    }
                    function a(t) {
                      return r[t.type](t)
                    }
                    return (
                      'Expected ' +
                      (function (t) {
                        var e,
                          r,
                          n = t.map(a)
                        if ((n.sort(), n.length > 0)) {
                          for (e = 1, r = 1; e < n.length; e++)
                            n[e - 1] !== n[e] && ((n[r] = n[e]), r++)
                          n.length = r
                        }
                        switch (n.length) {
                          case 1:
                            return n[0]
                          case 2:
                            return n[0] + ' or ' + n[1]
                          default:
                            return n.slice(0, -1).join(', ') + ', or ' + n[n.length - 1]
                        }
                      })(t) +
                      ' but ' +
                      (function (t) {
                        return t ? '"' + o(t) + '"' : 'end of input'
                      })(e) +
                      ' found.'
                    )
                  }),
                  {
                    SyntaxError: r,
                    parse: function (n, o) {
                      var i,
                        a,
                        u,
                        c,
                        s = {},
                        l = (o = void 0 !== o ? o : {}).grammarSource,
                        f = { program: ze },
                        d = ze,
                        h = ',',
                        p = ';',
                        g = '=',
                        b = ':',
                        m = '*',
                        y = '{',
                        v = '|||',
                        x = '...',
                        w = '---',
                        _ = '<<=>>',
                        C = '<<>>',
                        A = 'note',
                        S = 'abox',
                        k = 'rbox',
                        E = 'else',
                        L = 'break',
                        T = 'strict',
                        M = 'critical',
                        j = 'ignore',
                        F = 'consider',
                        O = 'assert',
                        I = 'loop',
                        P = '"',
                        D = '\\"',
                        B = '*/',
                        N = /^[^;, "\t\n\r=\-><:{*]/,
                        H = /^[ \t]/,
                        R = /^[\r\n]/,
                        W = /^[^\r\n]/,
                        G = /^[0-9]/,
                        X = Ne(',', !1),
                        z = Ne(';', !1),
                        V = Ne('hscale', !0),
                        $ = Ne('arcgradient', !0),
                        q = Ne('=', !1),
                        U = Ne('width', !0),
                        Y = Ne('wordwraparcs', !0),
                        Z = Ne('wordwrapentities', !0),
                        K = Ne('wordwrapboxes', !0),
                        J = Ne('watermark', !0),
                        Q = Re('entity'),
                        tt = Ne(':', !1),
                        et = Ne('*', !1),
                        rt = Ne('{', !1),
                        nt = Ne('}', !1),
                        ot = Re('empty row'),
                        it = Ne('|||', !1),
                        at = Ne('...', !1),
                        ut = Re('---'),
                        ct = Ne('---', !1),
                        st = Re('bi-directional arrow'),
                        lt = Ne('--', !1),
                        ft = Ne('<->', !1),
                        dt = Ne('==', !1),
                        ht = Ne('<<=>>', !1),
                        pt = Ne('<=>', !1),
                        gt = Ne('..', !1),
                        bt = Ne('<<>>', !1),
                        mt = Ne('::', !1),
                        yt = Ne('<:>', !1),
                        vt = Re('left to right arrow'),
                        xt = Ne('->', !1),
                        wt = Ne('=>>', !1),
                        _t = Ne('=>', !1),
                        Ct = Ne('>>', !1),
                        At = Ne(':>', !1),
                        St = Ne('-x', !0),
                        kt = Re('right to left arrow'),
                        Et = Ne('<-', !1),
                        Lt = Ne('<<=', !1),
                        Tt = Ne('<=', !1),
                        Mt = Ne('<<', !1),
                        jt = Ne('<:', !1),
                        Ft = Ne('x-', !0),
                        Ot = Re('box'),
                        It = Ne('note', !0),
                        Pt = Ne('abox', !0),
                        Dt = Ne('rbox', !0),
                        Bt = Ne('box', !0),
                        Nt = Re('inline expression'),
                        Ht = Ne('alt', !0),
                        Rt = Ne('else', !0),
                        Wt = Ne('opt', !0),
                        Gt = Ne('break', !0),
                        Xt = Ne('par', !0),
                        zt = Ne('seq', !0),
                        Vt = Ne('strict', !0),
                        $t = Ne('neg', !0),
                        qt = Ne('critical', !0),
                        Ut = Ne('ignore', !0),
                        Yt = Ne('consider', !0),
                        Zt = Ne('assert', !0),
                        Kt = Ne('loop', !0),
                        Jt = Ne('ref', !0),
                        Qt = Ne('exc', !0),
                        te = Re('double quoted string'),
                        ee = Ne('"', !1),
                        re = Ne('\\"', !1),
                        ne = { type: 'any' },
                        oe = Re('identifier'),
                        ie = He(
                          [';', ',', ' ', '"', '\t', '\n', '\r', '=', '-', '>', '<', ':', '{', '*'],
                          !0,
                          !1
                        ),
                        ae = Re('whitespace'),
                        ue = He([' ', '\t'], !1, !1),
                        ce = Re('lineend'),
                        se = He(['\r', '\n'], !1, !1),
                        le = Ne('/*', !1),
                        fe = Ne('*/', !1),
                        de = Ne('//', !1),
                        he = Ne('#', !1),
                        pe = He(['\r', '\n'], !0, !1),
                        ge = Re('comment'),
                        be = Re('number'),
                        me = He([['0', '9']], !1, !1),
                        ye = Ne('.', !1),
                        ve = Re('boolean'),
                        xe = Ne('true', !0),
                        we = Ne('false', !0),
                        _e = Ne('on', !0),
                        Ce = Ne('off', !0),
                        Ae = Ne('0', !1),
                        Se = Ne('1', !1),
                        ke = Re('size'),
                        Ee = Ne('auto', !0),
                        Le = function (r, n) {
                          return (
                            (n.entities = mr(n.entities || [], n.arcs)),
                            (n = t({ meta: e.getMetaInfo(n.options, n.arcs) }, n)),
                            r.length > 0 && (n = t({ precomment: r }, n)),
                            n
                          )
                        },
                        Te = function (t, r) {
                          return e.nameValue2Option(t, r)
                        },
                        Me = function (t, r) {
                          return e.nameValue2Option(t, e.flattenBoolean(r))
                        },
                        je = function (t) {
                          return { kind: t }
                        },
                        Fe = function (t, e) {
                          return { kind: e, from: t, to: '*' }
                        },
                        Oe = 0,
                        Ie = [{ line: 1, column: 1 }],
                        Pe = 0,
                        De = [],
                        Be = 0
                      if ('startRule' in o) {
                        if (!(o.startRule in f))
                          throw new Error('Can\'t start parsing from rule "' + o.startRule + '".')
                        d = f[o.startRule]
                      }
                      function Ne(t, e) {
                        return { type: 'literal', text: t, ignoreCase: e }
                      }
                      function He(t, e, r) {
                        return { type: 'class', parts: t, inverted: e, ignoreCase: r }
                      }
                      function Re(t) {
                        return { type: 'other', description: t }
                      }
                      function We(t) {
                        var e,
                          r = Ie[t]
                        if (r) return r
                        for (e = t - 1; !Ie[e]; ) e--
                        for (r = { line: (r = Ie[e]).line, column: r.column }; e < t; )
                          10 === n.charCodeAt(e) ? (r.line++, (r.column = 1)) : r.column++, e++
                        return (Ie[t] = r), r
                      }
                      function Ge(t, e) {
                        var r = We(t),
                          n = We(e)
                        return {
                          source: l,
                          start: { offset: t, line: r.line, column: r.column },
                          end: { offset: e, line: n.line, column: n.column },
                        }
                      }
                      function Xe(t) {
                        Oe < Pe || (Oe > Pe && ((Pe = Oe), (De = [])), De.push(t))
                      }
                      function ze() {
                        var e, r
                        return (
                          (e = sr()),
                          (r = (function () {
                            var e, r, o
                            return (
                              (e = (function () {
                                var e, r, o, i, a
                                for (
                                  e = Oe,
                                    r = [],
                                    o = Oe,
                                    (i = Ve()) !== s
                                      ? (44 === n.charCodeAt(Oe)
                                          ? ((a = h), Oe++)
                                          : ((a = s), 0 === Be && Xe(X)),
                                        a !== s ? (o = i) : ((Oe = o), (o = s)))
                                      : ((Oe = o), (o = s));
                                  o !== s;

                                )
                                  r.push(o),
                                    (o = Oe),
                                    (i = Ve()) !== s
                                      ? (44 === n.charCodeAt(Oe)
                                          ? ((a = h), Oe++)
                                          : ((a = s), 0 === Be && Xe(X)),
                                        a !== s ? (o = i) : ((Oe = o), (o = s)))
                                      : ((Oe = o), (o = s))
                                return (
                                  (o = Oe),
                                  (i = Ve()) !== s
                                    ? (59 === n.charCodeAt(Oe)
                                        ? ((a = p), Oe++)
                                        : ((a = s), 0 === Be && Xe(z)),
                                      a !== s ? (o = i) : ((Oe = o), (o = s)))
                                    : ((Oe = o), (o = s)),
                                  o !== s ? (e = r = [r, o]) : ((Oe = e), (e = s)),
                                  e !== s &&
                                    (e = (function (e) {
                                      return e[0].concat(e[1]).reduce(t, {})
                                    })(e)),
                                  e
                                )
                              })()) === s && (e = null),
                              (r = (function () {
                                var t, e, r, o, i
                                for (
                                  t = Oe,
                                    e = [],
                                    r = Oe,
                                    (o = $e()) !== s
                                      ? (44 === n.charCodeAt(Oe)
                                          ? ((i = h), Oe++)
                                          : ((i = s), 0 === Be && Xe(X)),
                                        i !== s ? (r = o) : ((Oe = r), (r = s)))
                                      : ((Oe = r), (r = s));
                                  r !== s;

                                )
                                  e.push(r),
                                    (r = Oe),
                                    (o = $e()) !== s
                                      ? (44 === n.charCodeAt(Oe)
                                          ? ((i = h), Oe++)
                                          : ((i = s), 0 === Be && Xe(X)),
                                        i !== s ? (r = o) : ((Oe = r), (r = s)))
                                      : ((Oe = r), (r = s))
                                return (
                                  (r = Oe),
                                  (o = $e()) !== s
                                    ? (59 === n.charCodeAt(Oe)
                                        ? ((i = p), Oe++)
                                        : ((i = s), 0 === Be && Xe(z)),
                                      i !== s ? (r = o) : ((Oe = r), (r = s)))
                                    : ((Oe = r), (r = s)),
                                  r !== s ? (t = e = [e, r]) : ((Oe = t), (t = s)),
                                  t !== s && ((a = t), (t = a[0].concat(a[1]))),
                                  t
                                )
                                var a
                              })()) === s && (r = null),
                              (o = qe()) === s && (o = null),
                              (function (t, e, r) {
                                var n = {}
                                return (
                                  t && (n.options = t), e && (n.entities = e), r && (n.arcs = r), n
                                )
                              })(e, r, o)
                            )
                          })()),
                          sr(),
                          Le(e, r)
                        )
                      }
                      function Ve() {
                        var t, e, r, o
                        return (
                          (t = Oe),
                          sr(),
                          'hscale' === n.substr(Oe, 6).toLowerCase()
                            ? ((e = n.substr(Oe, 6)), (Oe += 6))
                            : ((e = s), 0 === Be && Xe(V)),
                          e === s &&
                            ('arcgradient' === n.substr(Oe, 11).toLowerCase()
                              ? ((e = n.substr(Oe, 11)), (Oe += 11))
                              : ((e = s), 0 === Be && Xe($))),
                          e !== s
                            ? (sr(),
                              61 === n.charCodeAt(Oe)
                                ? ((r = g), Oe++)
                                : ((r = s), 0 === Be && Xe(q)),
                              r !== s
                                ? (sr(),
                                  (o = (function () {
                                    var t, e
                                    return (
                                      Be++,
                                      (t = Oe),
                                      (e = (function () {
                                        var t, e, r, o
                                        return (
                                          (t = Oe),
                                          34 === n.charCodeAt(Oe)
                                            ? ((e = P), Oe++)
                                            : ((e = s), 0 === Be && Xe(ee)),
                                          e !== s && (r = lr()) !== s
                                            ? (34 === n.charCodeAt(Oe)
                                                ? ((o = P), Oe++)
                                                : ((o = s), 0 === Be && Xe(ee)),
                                              o !== s
                                                ? ((i = r), (t = i.toString()))
                                                : ((Oe = t), (t = s)))
                                            : ((Oe = t), (t = s)),
                                          t
                                        )
                                        var i
                                      })()) !== s && (e = e),
                                      (t = e) === s &&
                                        ((t = Oe),
                                        (e = lr()) !== s && ((r = e), (e = r.toString())),
                                        (t = e)),
                                      Be--,
                                      t === s && ((e = s), 0 === Be && Xe(be)),
                                      t
                                    )
                                    var r
                                  })()) !== s
                                    ? (sr(), (t = Te(e, o)))
                                    : ((Oe = t), (t = s)))
                                : ((Oe = t), (t = s)))
                            : ((Oe = t), (t = s)),
                          t === s &&
                            ((t = Oe),
                            sr(),
                            'width' === n.substr(Oe, 5).toLowerCase()
                              ? ((e = n.substr(Oe, 5)), (Oe += 5))
                              : ((e = s), 0 === Be && Xe(U)),
                            e !== s
                              ? (sr(),
                                61 === n.charCodeAt(Oe)
                                  ? ((r = g), Oe++)
                                  : ((r = s), 0 === Be && Xe(q)),
                                r !== s
                                  ? (sr(),
                                    (o = (function () {
                                      var t
                                      return (
                                        Be++,
                                        (t = (function () {
                                          var t, e, r, o
                                          return (
                                            (t = Oe),
                                            34 === n.charCodeAt(Oe)
                                              ? ((e = P), Oe++)
                                              : ((e = s), 0 === Be && Xe(ee)),
                                            e !== s && (r = pr()) !== s
                                              ? (34 === n.charCodeAt(Oe)
                                                  ? ((o = P), Oe++)
                                                  : ((o = s), 0 === Be && Xe(ee)),
                                                o !== s ? (t = r) : ((Oe = t), (t = s)))
                                              : ((Oe = t), (t = s)),
                                            t
                                          )
                                        })()) === s && (t = pr()),
                                        Be--,
                                        t === s && 0 === Be && Xe(ke),
                                        t
                                      )
                                    })()) !== s
                                      ? (sr(), (t = Te(e, o)))
                                      : ((Oe = t), (t = s)))
                                  : ((Oe = t), (t = s)))
                              : ((Oe = t), (t = s)),
                            t === s &&
                              ((t = Oe),
                              sr(),
                              'wordwraparcs' === n.substr(Oe, 12).toLowerCase()
                                ? ((e = n.substr(Oe, 12)), (Oe += 12))
                                : ((e = s), 0 === Be && Xe(Y)),
                              e !== s
                                ? (sr(),
                                  61 === n.charCodeAt(Oe)
                                    ? ((r = g), Oe++)
                                    : ((r = s), 0 === Be && Xe(q)),
                                  r !== s
                                    ? (sr(),
                                      (o = dr()) !== s
                                        ? (sr(), (t = Me(e, o)))
                                        : ((Oe = t), (t = s)))
                                    : ((Oe = t), (t = s)))
                                : ((Oe = t), (t = s)),
                              t === s &&
                                ((t = Oe),
                                sr(),
                                'wordwrapentities' === n.substr(Oe, 16).toLowerCase()
                                  ? ((e = n.substr(Oe, 16)), (Oe += 16))
                                  : ((e = s), 0 === Be && Xe(Z)),
                                e !== s
                                  ? (sr(),
                                    61 === n.charCodeAt(Oe)
                                      ? ((r = g), Oe++)
                                      : ((r = s), 0 === Be && Xe(q)),
                                    r !== s
                                      ? (sr(),
                                        (o = dr()) !== s
                                          ? (sr(), (t = Me(e, o)))
                                          : ((Oe = t), (t = s)))
                                      : ((Oe = t), (t = s)))
                                  : ((Oe = t), (t = s)),
                                t === s &&
                                  ((t = Oe),
                                  sr(),
                                  'wordwrapboxes' === n.substr(Oe, 13).toLowerCase()
                                    ? ((e = n.substr(Oe, 13)), (Oe += 13))
                                    : ((e = s), 0 === Be && Xe(K)),
                                  e !== s
                                    ? (sr(),
                                      61 === n.charCodeAt(Oe)
                                        ? ((r = g), Oe++)
                                        : ((r = s), 0 === Be && Xe(q)),
                                      r !== s
                                        ? (sr(),
                                          (o = dr()) !== s
                                            ? (sr(), (t = Me(e, o)))
                                            : ((Oe = t), (t = s)))
                                        : ((Oe = t), (t = s)))
                                    : ((Oe = t), (t = s)),
                                  t === s &&
                                    ((t = Oe),
                                    sr(),
                                    'watermark' === n.substr(Oe, 9).toLowerCase()
                                      ? ((e = n.substr(Oe, 9)), (Oe += 9))
                                      : ((e = s), 0 === Be && Xe(J)),
                                    e !== s
                                      ? (sr(),
                                        61 === n.charCodeAt(Oe)
                                          ? ((r = g), Oe++)
                                          : ((r = s), 0 === Be && Xe(q)),
                                        r !== s
                                          ? (sr(),
                                            (o = tr()) !== s
                                              ? (sr(), (t = Te(e, o)))
                                              : ((Oe = t), (t = s)))
                                          : ((Oe = t), (t = s)))
                                      : ((Oe = t), (t = s))))))),
                          t
                        )
                      }
                      function $e() {
                        var t, e, r, o, i, a, u
                        return (
                          Be++,
                          (t = Oe),
                          sr(),
                          (e = er()) !== s
                            ? (sr(),
                              (r = Oe),
                              58 === n.charCodeAt(Oe)
                                ? ((o = ':'), Oe++)
                                : ((o = s), 0 === Be && Xe(tt)),
                              o !== s
                                ? (sr(), (i = Qe()) !== s ? (sr(), (r = i)) : ((Oe = r), (r = s)))
                                : ((Oe = r), (r = s)),
                              r === s && (r = null),
                              (a = r),
                              (u = br(e)),
                              a && (u.label = a),
                              (t = u))
                            : ((Oe = t), (t = s)),
                          Be--,
                          t === s && 0 === Be && Xe(Q),
                          t
                        )
                      }
                      function qe() {
                        var t, e, r, o
                        if (
                          ((t = []),
                          (e = Oe),
                          (r = Ue()) !== s
                            ? (sr(),
                              59 === n.charCodeAt(Oe)
                                ? ((o = p), Oe++)
                                : ((o = s), 0 === Be && Xe(z)),
                              o !== s ? (e = r) : ((Oe = e), (e = s)))
                            : ((Oe = e), (e = s)),
                          e !== s)
                        )
                          for (; e !== s; )
                            t.push(e),
                              (e = Oe),
                              (r = Ue()) !== s
                                ? (sr(),
                                  59 === n.charCodeAt(Oe)
                                    ? ((o = p), Oe++)
                                    : ((o = s), 0 === Be && Xe(z)),
                                  o !== s ? (e = r) : ((Oe = e), (e = s)))
                                : ((Oe = e), (e = s))
                        else t = s
                        return t
                      }
                      function Ue() {
                        var t, e, r, o, i, a
                        for (
                          t = Oe,
                            e = [],
                            r = Oe,
                            (o = Ye()) !== s
                              ? (44 === n.charCodeAt(Oe)
                                  ? ((i = h), Oe++)
                                  : ((i = s), 0 === Be && Xe(X)),
                                i !== s ? (r = o) : ((Oe = r), (r = s)))
                              : ((Oe = r), (r = s));
                          r !== s;

                        )
                          e.push(r),
                            (r = Oe),
                            (o = Ye()) !== s
                              ? (44 === n.charCodeAt(Oe)
                                  ? ((i = h), Oe++)
                                  : ((i = s), 0 === Be && Xe(X)),
                                i !== s ? (r = o) : ((Oe = r), (r = s)))
                              : ((Oe = r), (r = s))
                        return (
                          (r = Oe),
                          (o = Ye()) !== s && (o = o),
                          (r = o) !== s ? (t = e = [e, r]) : ((Oe = t), (t = s)),
                          t !== s && (t = (a = t)[0].concat(a[1])),
                          t
                        )
                      }
                      function Ye() {
                        var t
                        return (
                          (t = (function () {
                            var t, e, r, o, i
                            return (
                              (t = Oe),
                              (e = Oe),
                              (r = (function () {
                                var t, e
                                return (
                                  (t = Oe),
                                  sr(),
                                  (e = (function () {
                                    var t
                                    return (
                                      Be++,
                                      n.substr(Oe, 3) === v
                                        ? ((t = v), (Oe += 3))
                                        : ((t = s), 0 === Be && Xe(it)),
                                      t === s &&
                                        (n.substr(Oe, 3) === x
                                          ? ((t = x), (Oe += 3))
                                          : ((t = s), 0 === Be && Xe(at))),
                                      Be--,
                                      t === s && 0 === Be && Xe(ot),
                                      t
                                    )
                                  })()) !== s
                                    ? (sr(), (t = je(e)))
                                    : ((Oe = t), (t = s)),
                                  t
                                )
                              })()) !== s && (r = r),
                              (e = r) === s &&
                                ((e = Oe),
                                (r = (function () {
                                  var t, e, r, o
                                  return (
                                    (t = Oe),
                                    sr(),
                                    (e = er()) !== s
                                      ? (sr(),
                                        (r = (function () {
                                          var t
                                          return (
                                            (t = Ze()) === s &&
                                              (t = Ke()) === s &&
                                              (t = Je()) === s &&
                                              (t = (function () {
                                                var t
                                                return (
                                                  Be++,
                                                  n.substr(Oe, 4).toLowerCase() === A
                                                    ? ((t = n.substr(Oe, 4)), (Oe += 4))
                                                    : ((t = s), 0 === Be && Xe(It)),
                                                  t === s &&
                                                    (n.substr(Oe, 4).toLowerCase() === S
                                                      ? ((t = n.substr(Oe, 4)), (Oe += 4))
                                                      : ((t = s), 0 === Be && Xe(Pt)),
                                                    t === s &&
                                                      (n.substr(Oe, 4).toLowerCase() === k
                                                        ? ((t = n.substr(Oe, 4)), (Oe += 4))
                                                        : ((t = s), 0 === Be && Xe(Dt)),
                                                      t === s &&
                                                        ('box' === n.substr(Oe, 3).toLowerCase()
                                                          ? ((t = n.substr(Oe, 3)), (Oe += 3))
                                                          : ((t = s), 0 === Be && Xe(Bt))))),
                                                  Be--,
                                                  t === s && 0 === Be && Xe(Ot),
                                                  t
                                                )
                                              })()),
                                            t !== s && ((e = t), (t = e.toLowerCase())),
                                            t
                                          )
                                          var e
                                        })()) !== s
                                          ? (sr(),
                                            (o = er()) !== s
                                              ? (sr(),
                                                (i = e),
                                                (a = r),
                                                (u = o),
                                                (t = { kind: a, from: i, to: u }))
                                              : ((Oe = t), (t = s)))
                                          : ((Oe = t), (t = s)))
                                      : ((Oe = t), (t = s)),
                                    t === s &&
                                      ((t = Oe),
                                      sr(),
                                      42 === n.charCodeAt(Oe)
                                        ? ((e = m), Oe++)
                                        : ((e = s), 0 === Be && Xe(et)),
                                      e !== s
                                        ? (sr(),
                                          (r = Je()) !== s
                                            ? (sr(),
                                              (o = er()) !== s
                                                ? (sr(),
                                                  (t = (function (t, e) {
                                                    return { kind: t, from: '*', to: e }
                                                  })(r, o)))
                                                : ((Oe = t), (t = s)))
                                            : ((Oe = t), (t = s)))
                                        : ((Oe = t), (t = s)),
                                      t === s &&
                                        ((t = Oe),
                                        sr(),
                                        (e = er()) !== s
                                          ? (sr(),
                                            (r = Ke()) !== s
                                              ? (sr(),
                                                42 === n.charCodeAt(Oe)
                                                  ? ((o = m), Oe++)
                                                  : ((o = s), 0 === Be && Xe(et)),
                                                o !== s
                                                  ? (sr(), (t = Fe(e, r)))
                                                  : ((Oe = t), (t = s)))
                                              : ((Oe = t), (t = s)))
                                          : ((Oe = t), (t = s)),
                                        t === s &&
                                          ((t = Oe),
                                          sr(),
                                          (e = er()) !== s
                                            ? (sr(),
                                              (r = Ze()) !== s
                                                ? (sr(),
                                                  42 === n.charCodeAt(Oe)
                                                    ? ((o = m), Oe++)
                                                    : ((o = s), 0 === Be && Xe(et)),
                                                  o !== s
                                                    ? (sr(), (t = Fe(e, r)))
                                                    : ((Oe = t), (t = s)))
                                                : ((Oe = t), (t = s)))
                                            : ((Oe = t), (t = s))))),
                                    t
                                  )
                                  var i, a, u
                                })()) !== s && (r = r),
                                (e = r) === s &&
                                  ((e = Oe),
                                  (r = (function () {
                                    var t, e
                                    return (
                                      (t = Oe),
                                      sr(),
                                      (e = (function () {
                                        var t
                                        return (
                                          Be++,
                                          n.substr(Oe, 3) === w
                                            ? ((t = w), (Oe += 3))
                                            : ((t = s), 0 === Be && Xe(ct)),
                                          Be--,
                                          t === s && 0 === Be && Xe(ut),
                                          t
                                        )
                                      })()) !== s
                                        ? (sr(), (t = je(e)))
                                        : ((Oe = t), (t = s)),
                                      t
                                    )
                                  })()) !== s && (r = r),
                                  (e = r))),
                              e !== s
                                ? ((r = Oe),
                                  58 === n.charCodeAt(Oe)
                                    ? ((o = b), Oe++)
                                    : ((o = s), 0 === Be && Xe(tt)),
                                  o !== s
                                    ? (sr(),
                                      (i = Qe()) !== s
                                        ? (sr(), (c = i), (r = c))
                                        : ((Oe = r), (r = s)))
                                    : ((Oe = r), (r = s)),
                                  r === s && (r = null),
                                  (a = e),
                                  (u = r),
                                  u && (a.label = u),
                                  (t = a))
                                : ((Oe = t), (t = s)),
                              t
                            )
                            var a, u
                            var c
                          })()) === s &&
                            (t = (function () {
                              var t, e, r, o, i, a, u, c
                              return (
                                (t = Oe),
                                sr(),
                                (e = er()) !== s
                                  ? (sr(),
                                    (r = (function () {
                                      var t, e
                                      return (
                                        Be++,
                                        (t = Oe),
                                        'alt' === n.substr(Oe, 3).toLowerCase()
                                          ? ((e = n.substr(Oe, 3)), (Oe += 3))
                                          : ((e = s), 0 === Be && Xe(Ht)),
                                        e === s &&
                                          (n.substr(Oe, 4).toLowerCase() === E
                                            ? ((e = n.substr(Oe, 4)), (Oe += 4))
                                            : ((e = s), 0 === Be && Xe(Rt)),
                                          e === s &&
                                            ('opt' === n.substr(Oe, 3).toLowerCase()
                                              ? ((e = n.substr(Oe, 3)), (Oe += 3))
                                              : ((e = s), 0 === Be && Xe(Wt)),
                                            e === s &&
                                              (n.substr(Oe, 5).toLowerCase() === L
                                                ? ((e = n.substr(Oe, 5)), (Oe += 5))
                                                : ((e = s), 0 === Be && Xe(Gt)),
                                              e === s &&
                                                ('par' === n.substr(Oe, 3).toLowerCase()
                                                  ? ((e = n.substr(Oe, 3)), (Oe += 3))
                                                  : ((e = s), 0 === Be && Xe(Xt)),
                                                e === s &&
                                                  ('seq' === n.substr(Oe, 3).toLowerCase()
                                                    ? ((e = n.substr(Oe, 3)), (Oe += 3))
                                                    : ((e = s), 0 === Be && Xe(zt)),
                                                  e === s &&
                                                    (n.substr(Oe, 6).toLowerCase() === T
                                                      ? ((e = n.substr(Oe, 6)), (Oe += 6))
                                                      : ((e = s), 0 === Be && Xe(Vt)),
                                                    e === s &&
                                                      ('neg' === n.substr(Oe, 3).toLowerCase()
                                                        ? ((e = n.substr(Oe, 3)), (Oe += 3))
                                                        : ((e = s), 0 === Be && Xe($t)),
                                                      e === s &&
                                                        (n.substr(Oe, 8).toLowerCase() === M
                                                          ? ((e = n.substr(Oe, 8)), (Oe += 8))
                                                          : ((e = s), 0 === Be && Xe(qt)),
                                                        e === s &&
                                                          (n.substr(Oe, 6).toLowerCase() === j
                                                            ? ((e = n.substr(Oe, 6)), (Oe += 6))
                                                            : ((e = s), 0 === Be && Xe(Ut)),
                                                          e === s &&
                                                            (n.substr(Oe, 8).toLowerCase() === F
                                                              ? ((e = n.substr(Oe, 8)), (Oe += 8))
                                                              : ((e = s), 0 === Be && Xe(Yt)),
                                                            e === s &&
                                                              (n.substr(Oe, 6).toLowerCase() === O
                                                                ? ((e = n.substr(Oe, 6)), (Oe += 6))
                                                                : ((e = s), 0 === Be && Xe(Zt)),
                                                              e === s &&
                                                                (n.substr(Oe, 4).toLowerCase() === I
                                                                  ? ((e = n.substr(Oe, 4)),
                                                                    (Oe += 4))
                                                                  : ((e = s), 0 === Be && Xe(Kt)),
                                                                e === s &&
                                                                  ('ref' ===
                                                                  n.substr(Oe, 3).toLowerCase()
                                                                    ? ((e = n.substr(Oe, 3)),
                                                                      (Oe += 3))
                                                                    : ((e = s), 0 === Be && Xe(Jt)),
                                                                  e === s &&
                                                                    ('exc' ===
                                                                    n.substr(Oe, 3).toLowerCase()
                                                                      ? ((e = n.substr(Oe, 3)),
                                                                        (Oe += 3))
                                                                      : ((e = s),
                                                                        0 === Be &&
                                                                          Xe(Qt)))))))))))))))),
                                        e !== s && ((r = e), (e = r.toLowerCase())),
                                        Be--,
                                        (t = e) === s && ((e = s), 0 === Be && Xe(Nt)),
                                        t
                                      )
                                      var r
                                    })()) !== s
                                      ? (sr(),
                                        (o = er()) !== s
                                          ? (sr(),
                                            (i = Oe),
                                            58 === n.charCodeAt(Oe)
                                              ? ((a = b), Oe++)
                                              : ((a = s), 0 === Be && Xe(tt)),
                                            a !== s
                                              ? (sr(),
                                                (u = Qe()) !== s
                                                  ? (sr(), (m = u), (i = m))
                                                  : ((Oe = i), (i = s)))
                                              : ((Oe = i), (i = s)),
                                            i === s && (i = null),
                                            123 === n.charCodeAt(Oe)
                                              ? ((a = y), Oe++)
                                              : ((a = s), 0 === Be && Xe(rt)),
                                            a !== s
                                              ? (sr(),
                                                (u = qe()) === s && (u = null),
                                                sr(),
                                                125 === n.charCodeAt(Oe)
                                                  ? ((c = '}'), Oe++)
                                                  : ((c = s), 0 === Be && Xe(nt)),
                                                c !== s
                                                  ? (sr(),
                                                    (l = e),
                                                    (f = r),
                                                    (d = o),
                                                    (h = i),
                                                    (p = u),
                                                    (g = { kind: f, from: l, to: d, arcs: p }),
                                                    h && (g.label = h),
                                                    (t = g))
                                                  : ((Oe = t), (t = s)))
                                              : ((Oe = t), (t = s)))
                                          : ((Oe = t), (t = s)))
                                      : ((Oe = t), (t = s)))
                                  : ((Oe = t), (t = s)),
                                t
                              )
                              var l, f, d, h, p, g
                              var m
                            })()),
                          t
                        )
                      }
                      function Ze() {
                        var t
                        return (
                          Be++,
                          '--' === n.substr(Oe, 2)
                            ? ((t = '--'), (Oe += 2))
                            : ((t = s), 0 === Be && Xe(lt)),
                          t === s &&
                            ('<->' === n.substr(Oe, 3)
                              ? ((t = '<->'), (Oe += 3))
                              : ((t = s), 0 === Be && Xe(ft)),
                            t === s &&
                              ('==' === n.substr(Oe, 2)
                                ? ((t = '=='), (Oe += 2))
                                : ((t = s), 0 === Be && Xe(dt)),
                              t === s &&
                                (n.substr(Oe, 5) === _
                                  ? ((t = _), (Oe += 5))
                                  : ((t = s), 0 === Be && Xe(ht)),
                                t === s &&
                                  ('<=>' === n.substr(Oe, 3)
                                    ? ((t = '<=>'), (Oe += 3))
                                    : ((t = s), 0 === Be && Xe(pt)),
                                  t === s &&
                                    ('..' === n.substr(Oe, 2)
                                      ? ((t = '..'), (Oe += 2))
                                      : ((t = s), 0 === Be && Xe(gt)),
                                    t === s &&
                                      (n.substr(Oe, 4) === C
                                        ? ((t = C), (Oe += 4))
                                        : ((t = s), 0 === Be && Xe(bt)),
                                      t === s &&
                                        ('::' === n.substr(Oe, 2)
                                          ? ((t = '::'), (Oe += 2))
                                          : ((t = s), 0 === Be && Xe(mt)),
                                        t === s &&
                                          ('<:>' === n.substr(Oe, 3)
                                            ? ((t = '<:>'), (Oe += 3))
                                            : ((t = s), 0 === Be && Xe(yt)))))))))),
                          Be--,
                          t === s && 0 === Be && Xe(st),
                          t
                        )
                      }
                      function Ke() {
                        var t
                        return (
                          Be++,
                          '->' === n.substr(Oe, 2)
                            ? ((t = '->'), (Oe += 2))
                            : ((t = s), 0 === Be && Xe(xt)),
                          t === s &&
                            ('=>>' === n.substr(Oe, 3)
                              ? ((t = '=>>'), (Oe += 3))
                              : ((t = s), 0 === Be && Xe(wt)),
                            t === s &&
                              ('=>' === n.substr(Oe, 2)
                                ? ((t = '=>'), (Oe += 2))
                                : ((t = s), 0 === Be && Xe(_t)),
                              t === s &&
                                ('>>' === n.substr(Oe, 2)
                                  ? ((t = '>>'), (Oe += 2))
                                  : ((t = s), 0 === Be && Xe(Ct)),
                                t === s &&
                                  (':>' === n.substr(Oe, 2)
                                    ? ((t = ':>'), (Oe += 2))
                                    : ((t = s), 0 === Be && Xe(At)),
                                  t === s &&
                                    ('-x' === n.substr(Oe, 2).toLowerCase()
                                      ? ((t = n.substr(Oe, 2)), (Oe += 2))
                                      : ((t = s), 0 === Be && Xe(St))))))),
                          Be--,
                          t === s && 0 === Be && Xe(vt),
                          t
                        )
                      }
                      function Je() {
                        var t
                        return (
                          Be++,
                          '<-' === n.substr(Oe, 2)
                            ? ((t = '<-'), (Oe += 2))
                            : ((t = s), 0 === Be && Xe(Et)),
                          t === s &&
                            ('<<=' === n.substr(Oe, 3)
                              ? ((t = '<<='), (Oe += 3))
                              : ((t = s), 0 === Be && Xe(Lt)),
                            t === s &&
                              ('<=' === n.substr(Oe, 2)
                                ? ((t = '<='), (Oe += 2))
                                : ((t = s), 0 === Be && Xe(Tt)),
                              t === s &&
                                ('<<' === n.substr(Oe, 2)
                                  ? ((t = '<<'), (Oe += 2))
                                  : ((t = s), 0 === Be && Xe(Mt)),
                                t === s &&
                                  ('<:' === n.substr(Oe, 2)
                                    ? ((t = '<:'), (Oe += 2))
                                    : ((t = s), 0 === Be && Xe(jt)),
                                  t === s &&
                                    ('x-' === n.substr(Oe, 2).toLowerCase()
                                      ? ((t = n.substr(Oe, 2)), (Oe += 2))
                                      : ((t = s), 0 === Be && Xe(Ft))))))),
                          Be--,
                          t === s && 0 === Be && Xe(kt),
                          t
                        )
                      }
                      function Qe() {
                        var t, e
                        return (
                          (t = tr()) === s &&
                            ((e = (function () {
                              var t, e, r, o
                              for (
                                t = [],
                                  e = Oe,
                                  r = Oe,
                                  Be++,
                                  44 === n.charCodeAt(Oe)
                                    ? ((o = h), Oe++)
                                    : ((o = s), 0 === Be && Xe(X)),
                                  o === s &&
                                    (59 === n.charCodeAt(Oe)
                                      ? ((o = p), Oe++)
                                      : ((o = s), 0 === Be && Xe(z)),
                                    o === s &&
                                      (123 === n.charCodeAt(Oe)
                                        ? ((o = y), Oe++)
                                        : ((o = s), 0 === Be && Xe(rt)))),
                                  Be--,
                                  o === s ? (r = void 0) : ((Oe = r), (r = s)),
                                  r !== s
                                    ? (n.length > Oe
                                        ? ((o = n.charAt(Oe)), Oe++)
                                        : ((o = s), 0 === Be && Xe(ne)),
                                      o !== s ? (e = o) : ((Oe = e), (e = s)))
                                    : ((Oe = e), (e = s));
                                e !== s;

                              )
                                t.push(e),
                                  (e = Oe),
                                  (r = Oe),
                                  Be++,
                                  44 === n.charCodeAt(Oe)
                                    ? ((o = h), Oe++)
                                    : ((o = s), 0 === Be && Xe(X)),
                                  o === s &&
                                    (59 === n.charCodeAt(Oe)
                                      ? ((o = p), Oe++)
                                      : ((o = s), 0 === Be && Xe(z)),
                                    o === s &&
                                      (123 === n.charCodeAt(Oe)
                                        ? ((o = y), Oe++)
                                        : ((o = s), 0 === Be && Xe(rt)))),
                                  Be--,
                                  o === s ? (r = void 0) : ((Oe = r), (r = s)),
                                  r !== s
                                    ? (n.length > Oe
                                        ? ((o = n.charAt(Oe)), Oe++)
                                        : ((o = s), 0 === Be && Xe(ne)),
                                      o !== s ? (e = o) : ((Oe = e), (e = s)))
                                    : ((Oe = e), (e = s))
                              return t
                            })()),
                            (t = e.join('').trim())),
                          t
                        )
                      }
                      function tr() {
                        var t, e, r, o
                        return (
                          Be++,
                          (t = Oe),
                          34 === n.charCodeAt(Oe) ? ((e = P), Oe++) : ((e = s), 0 === Be && Xe(ee)),
                          e !== s
                            ? ((r = (function () {
                                var t, e, r, o
                                for (
                                  t = [],
                                    e = Oe,
                                    r = Oe,
                                    Be++,
                                    34 === n.charCodeAt(Oe)
                                      ? ((o = P), Oe++)
                                      : ((o = s), 0 === Be && Xe(ee)),
                                    Be--,
                                    o === s ? (r = void 0) : ((Oe = r), (r = s)),
                                    r !== s
                                      ? (n.substr(Oe, 2) === D
                                          ? ((o = D), (Oe += 2))
                                          : ((o = s), 0 === Be && Xe(re)),
                                        o === s &&
                                          (n.length > Oe
                                            ? ((o = n.charAt(Oe)), Oe++)
                                            : ((o = s), 0 === Be && Xe(ne))),
                                        o !== s ? (e = o) : ((Oe = e), (e = s)))
                                      : ((Oe = e), (e = s));
                                  e !== s;

                                )
                                  t.push(e),
                                    (e = Oe),
                                    (r = Oe),
                                    Be++,
                                    34 === n.charCodeAt(Oe)
                                      ? ((o = P), Oe++)
                                      : ((o = s), 0 === Be && Xe(ee)),
                                    Be--,
                                    o === s ? (r = void 0) : ((Oe = r), (r = s)),
                                    r !== s
                                      ? (n.substr(Oe, 2) === D
                                          ? ((o = D), (Oe += 2))
                                          : ((o = s), 0 === Be && Xe(re)),
                                        o === s &&
                                          (n.length > Oe
                                            ? ((o = n.charAt(Oe)), Oe++)
                                            : ((o = s), 0 === Be && Xe(ne))),
                                        o !== s ? (e = o) : ((Oe = e), (e = s)))
                                      : ((Oe = e), (e = s))
                                return t
                              })()),
                              34 === n.charCodeAt(Oe)
                                ? ((o = P), Oe++)
                                : ((o = s), 0 === Be && Xe(ee)),
                              o !== s ? (t = r.join('')) : ((Oe = t), (t = s)))
                            : ((Oe = t), (t = s)),
                          Be--,
                          t === s && ((e = s), 0 === Be && Xe(te)),
                          t
                        )
                      }
                      function er() {
                        var t, e, r
                        if (
                          (Be++,
                          (t = Oe),
                          (e = []),
                          N.test(n.charAt(Oe))
                            ? ((r = n.charAt(Oe)), Oe++)
                            : ((r = s), 0 === Be && Xe(ie)),
                          r !== s)
                        )
                          for (; r !== s; )
                            e.push(r),
                              N.test(n.charAt(Oe))
                                ? ((r = n.charAt(Oe)), Oe++)
                                : ((r = s), 0 === Be && Xe(ie))
                        else e = s
                        return (
                          e !== s && (e = e.join('')),
                          (t = e) === s && (t = tr()),
                          Be--,
                          t === s && ((e = s), 0 === Be && Xe(oe)),
                          t
                        )
                      }
                      function rr() {
                        var t, e
                        return (
                          Be++,
                          Oe,
                          H.test(n.charAt(Oe))
                            ? ((e = n.charAt(Oe)), Oe++)
                            : ((e = s), 0 === Be && Xe(ue)),
                          e !== s && (e = e),
                          Be--,
                          (t = e) === s && ((e = s), 0 === Be && Xe(ae)),
                          t
                        )
                      }
                      function nr() {
                        var t, e
                        return (
                          Be++,
                          Oe,
                          R.test(n.charAt(Oe))
                            ? ((e = n.charAt(Oe)), Oe++)
                            : ((e = s), 0 === Be && Xe(se)),
                          e !== s && (e = e),
                          Be--,
                          (t = e) === s && ((e = s), 0 === Be && Xe(ce)),
                          t
                        )
                      }
                      function or() {
                        var t, e, r
                        return (
                          (t = Oe),
                          (e = Oe),
                          Be++,
                          n.substr(Oe, 2) === B
                            ? ((r = B), (Oe += 2))
                            : ((r = s), 0 === Be && Xe(fe)),
                          Be--,
                          r === s ? (e = void 0) : ((Oe = e), (e = s)),
                          e !== s
                            ? (n.length > Oe
                                ? ((r = n.charAt(Oe)), Oe++)
                                : ((r = s), 0 === Be && Xe(ne)),
                              r !== s ? (t = r) : ((Oe = t), (t = s)))
                            : ((Oe = t), (t = s)),
                          t
                        )
                      }
                      function ir() {
                        var t, e, r, o, i
                        if (
                          ((t = Oe),
                          (e = (function () {
                            var t
                            return (
                              '/*' === n.substr(Oe, 2)
                                ? ((t = '/*'), (Oe += 2))
                                : ((t = s), 0 === Be && Xe(le)),
                              t
                            )
                          })()) !== s)
                        ) {
                          for (r = [], o = or(); o !== s; ) r.push(o), (o = or())
                          ;(o = (function () {
                            var t
                            return (
                              n.substr(Oe, 2) === B
                                ? ((t = B), (Oe += 2))
                                : ((t = s), 0 === Be && Xe(fe)),
                              t
                            )
                          })()) !== s
                            ? ((i = o), (t = e + r.join('') + i))
                            : ((Oe = t), (t = s))
                        } else (Oe = t), (t = s)
                        return t
                      }
                      function ar() {
                        var t
                        return (
                          W.test(n.charAt(Oe))
                            ? ((t = n.charAt(Oe)), Oe++)
                            : ((t = s), 0 === Be && Xe(pe)),
                          t
                        )
                      }
                      function ur() {
                        var t, e, r, o
                        if (
                          ((t = Oe),
                          (e = (function () {
                            var t
                            return (
                              '//' === n.substr(Oe, 2)
                                ? ((t = '//'), (Oe += 2))
                                : ((t = s), 0 === Be && Xe(de)),
                              t === s &&
                                (35 === n.charCodeAt(Oe)
                                  ? ((t = '#'), Oe++)
                                  : ((t = s), 0 === Be && Xe(he))),
                              t
                            )
                          })()) !== s)
                        ) {
                          for (r = [], o = ar(); o !== s; ) r.push(o), (o = ar())
                          t = e + r.join('')
                        } else (Oe = t), (t = s)
                        return t
                      }
                      function cr() {
                        var t
                        return (
                          Be++,
                          (t = ur()) === s && (t = ir()),
                          Be--,
                          t === s && 0 === Be && Xe(ge),
                          t
                        )
                      }
                      function sr() {
                        var t, e
                        for (t = [], (e = rr()) === s && (e = nr()) === s && (e = cr()); e !== s; )
                          t.push(e), (e = rr()) === s && (e = nr()) === s && (e = cr())
                        return t
                      }
                      function lr() {
                        var t, e, r, o, i, a
                        return (
                          (e = Oe),
                          (r = fr()) !== s
                            ? (46 === n.charCodeAt(Oe)
                                ? ((o = '.'), Oe++)
                                : ((o = s), 0 === Be && Xe(ye)),
                              o !== s && (i = fr()) !== s
                                ? (e = r = [r, o, i])
                                : ((Oe = e), (e = s)))
                            : ((Oe = e), (e = s)),
                          e !== s && ((a = e), (e = parseFloat(a.join('')))),
                          (t = e) === s && (t = fr()),
                          t
                        )
                      }
                      function fr() {
                        var t, e
                        if (
                          ((t = []),
                          G.test(n.charAt(Oe))
                            ? ((e = n.charAt(Oe)), Oe++)
                            : ((e = s), 0 === Be && Xe(me)),
                          e !== s)
                        )
                          for (; e !== s; )
                            t.push(e),
                              G.test(n.charAt(Oe))
                                ? ((e = n.charAt(Oe)), Oe++)
                                : ((e = s), 0 === Be && Xe(me))
                        else t = s
                        return t !== s && (t = parseInt(t.join(''), 10)), t
                      }
                      function dr() {
                        var t, e
                        return (
                          Be++,
                          (t = Oe),
                          (e = (function () {
                            var t, e, r, o
                            return (
                              (t = Oe),
                              34 === n.charCodeAt(Oe)
                                ? ((e = P), Oe++)
                                : ((e = s), 0 === Be && Xe(ee)),
                              e !== s && (r = hr()) !== s
                                ? (34 === n.charCodeAt(Oe)
                                    ? ((o = P), Oe++)
                                    : ((o = s), 0 === Be && Xe(ee)),
                                  o !== s ? (t = r) : ((Oe = t), (t = s)))
                                : ((Oe = t), (t = s)),
                              t
                            )
                          })()) !== s && (e = e),
                          (t = e) === s &&
                            ((t = Oe), (e = hr()) !== s && (e = e.toString()), (t = e)),
                          Be--,
                          t === s && ((e = s), 0 === Be && Xe(ve)),
                          t
                        )
                      }
                      function hr() {
                        var t
                        return (
                          'true' === n.substr(Oe, 4).toLowerCase()
                            ? ((t = n.substr(Oe, 4)), (Oe += 4))
                            : ((t = s), 0 === Be && Xe(xe)),
                          t === s &&
                            ('false' === n.substr(Oe, 5).toLowerCase()
                              ? ((t = n.substr(Oe, 5)), (Oe += 5))
                              : ((t = s), 0 === Be && Xe(we)),
                            t === s &&
                              ('on' === n.substr(Oe, 2).toLowerCase()
                                ? ((t = n.substr(Oe, 2)), (Oe += 2))
                                : ((t = s), 0 === Be && Xe(_e)),
                              t === s &&
                                ('off' === n.substr(Oe, 3).toLowerCase()
                                  ? ((t = n.substr(Oe, 3)), (Oe += 3))
                                  : ((t = s), 0 === Be && Xe(Ce)),
                                t === s &&
                                  (48 === n.charCodeAt(Oe)
                                    ? ((t = '0'), Oe++)
                                    : ((t = s), 0 === Be && Xe(Ae)),
                                  t === s &&
                                    (49 === n.charCodeAt(Oe)
                                      ? ((t = '1'), Oe++)
                                      : ((t = s), 0 === Be && Xe(Se))))))),
                          t
                        )
                      }
                      function pr() {
                        var t, e
                        return (
                          (t = Oe),
                          (e = lr()) !== s && (e = e.toString()),
                          (t = e) === s &&
                            ((t = Oe),
                            'auto' === n.substr(Oe, 4).toLowerCase()
                              ? ((e = n.substr(Oe, 4)), (Oe += 4))
                              : ((e = s), 0 === Be && Xe(Ee)),
                            e !== s && (e = e.toLowerCase()),
                            (t = e)),
                          t
                        )
                      }
                      function gr(t, r, n) {
                        return !(e.entityExists(t, r) || !0 === n[r])
                      }
                      function br(t) {
                        return { name: t }
                      }
                      function mr(e, r, n) {
                        return (
                          n || (n = {}),
                          (r || []).forEach(function (r) {
                            r.forEach(function (r) {
                              gr(e, r.from, n) && e.push(br(r.from)),
                                r.arcs && ((n[r.to] = !0), t(e, mr(e, r.arcs, n)), delete n[r.to]),
                                gr(e, r.to, n) && e.push(br(r.to))
                            })
                          }),
                          e
                        )
                      }
                      if ((i = d()) !== s && Oe === n.length) return i
                      throw (
                        (i !== s && Oe < n.length && Xe({ type: 'end' }),
                        (a = De),
                        (u = Pe < n.length ? n.charAt(Pe) : null),
                        (c = Pe < n.length ? Ge(Pe, Pe + 1) : Ge(Pe, Pe)),
                        new r(r.buildMessage(a, u), a, u, c))
                      )
                    },
                  }
                )
              })
                ? n.apply(e, o)
                : n) || (t.exports = i)
      },
      615: (t, e) => {
        'use strict'
        function r(t, e) {
          return (
            void 0 === e ||
            '*' === e ||
            t.some(function (t) {
              return t.name === e
            })
          )
        }
        ;(e.__esModule = !0),
          (e.nameValue2Option = function (t, e) {
            var r = {}
            return (r[t.toLowerCase()] = e), r
          }),
          (e.flattenBoolean = function (t) {
            return ['true', 'on', '1'].includes(t.toLowerCase())
          }),
          (e.entityExists = r),
          (e.isMscGenKeyword = function (t) {
            return [
              'box',
              'abox',
              'rbox',
              'note',
              'msc',
              'hscale',
              'width',
              'arcgradient',
              'wordwraparcs',
              'label',
              'color',
              'idurl',
              'id',
              'url',
              'linecolor',
              'linecolour',
              'textcolor',
              'textcolour',
              'textbgcolor',
              'textbgcolour',
              'arclinecolor',
              'arclinecolour',
              'arctextcolor',
              'arctextcolour',
              'arctextbgcolor',
              'arctextbgcolour',
              'arcskip',
            ].includes(t)
          })
        var n = function (t, e) {
          ;(this.name = 'EntityNotDefinedError'),
            (this.message = (function (t, e) {
              return (
                "Entity '" +
                t +
                "' in arc '" +
                e.from +
                ' ' +
                e.kind +
                ' ' +
                e.to +
                "' is not defined."
              )
            })(t, e))
        }
        ;(e.EntityNotDefinedError = n),
          (e.checkForUndeclaredEntities = function t(e, o) {
            ;(o || []).forEach(function (o) {
              o.forEach(function (o) {
                if (o.from && !r(e, o.from)) throw new n(o.from, o)
                if (o.to && !r(e, o.to)) throw new n(o.to, o)
                o.arcs && t(e, o.arcs)
              })
            })
          }),
          (e.getMetaInfo = function (t, e) {
            var r = (function (t) {
                return (
                  !!t &&
                  (t.hasOwnProperty('watermark') ||
                    t.hasOwnProperty('wordwrapentities') ||
                    t.hasOwnProperty('wordwrapboxes') ||
                    (t.hasOwnProperty('width') && 'auto' === t.width))
                )
              })(t),
              n = (function (t) {
                return (t || []).some(function (t) {
                  return t.some(function (t) {
                    return [
                      'alt',
                      'else',
                      'opt',
                      'break',
                      'par',
                      'seq',
                      'strict',
                      'neg',
                      'critical',
                      'ignore',
                      'consider',
                      'assert',
                      'loop',
                      'ref',
                      'exc',
                    ].includes(t.kind)
                  })
                })
              })(e)
            return { extendedOptions: r, extendedArcTypes: n, extendedFeatures: r || n }
          })
      },
      150: function (t, e, r) {
        var n, o, i
        ;(o = [r(730), r(615)]),
          void 0 ===
            (i =
              'function' ==
              typeof (n = function (t, e) {
                'use strict'
                function r(t, e, n, o) {
                  var i = Error.call(this, t)
                  return (
                    Object.setPrototypeOf && Object.setPrototypeOf(i, r.prototype),
                    (i.expected = e),
                    (i.found = n),
                    (i.location = o),
                    (i.name = 'SyntaxError'),
                    i
                  )
                }
                function n(t, e, r) {
                  return (
                    (r = r || ' '),
                    t.length > e ? t : ((e -= t.length), t + (r += r.repeat(e)).slice(0, e))
                  )
                }
                return (
                  (function (t, e) {
                    function r() {
                      this.constructor = t
                    }
                    ;(r.prototype = e.prototype), (t.prototype = new r())
                  })(r, Error),
                  (r.prototype.format = function (t) {
                    var e = 'Error: ' + this.message
                    if (this.location) {
                      var r,
                        o = null
                      for (r = 0; r < t.length; r++)
                        if (t[r].source === this.location.source) {
                          o = t[r].text.split(/\r\n|\n|\r/g)
                          break
                        }
                      var i = this.location.start,
                        a = this.location.source + ':' + i.line + ':' + i.column
                      if (o) {
                        var u = this.location.end,
                          c = n('', i.line.toString().length),
                          s = o[i.line - 1],
                          l = i.line === u.line ? u.column : s.length + 1
                        e +=
                          '\n --\x3e ' +
                          a +
                          '\n' +
                          c +
                          ' |\n' +
                          i.line +
                          ' | ' +
                          s +
                          '\n' +
                          c +
                          ' | ' +
                          n('', i.column - 1) +
                          n('', l - i.column, '^')
                      } else e += '\n at ' + a
                    }
                    return e
                  }),
                  (r.buildMessage = function (t, e) {
                    var r = {
                      literal: function (t) {
                        return '"' + o(t.text) + '"'
                      },
                      class: function (t) {
                        var e = t.parts.map(function (t) {
                          return Array.isArray(t) ? i(t[0]) + '-' + i(t[1]) : i(t)
                        })
                        return '[' + (t.inverted ? '^' : '') + e + ']'
                      },
                      any: function () {
                        return 'any character'
                      },
                      end: function () {
                        return 'end of input'
                      },
                      other: function (t) {
                        return t.description
                      },
                    }
                    function n(t) {
                      return t.charCodeAt(0).toString(16).toUpperCase()
                    }
                    function o(t) {
                      return t
                        .replace(/\\/g, '\\\\')
                        .replace(/"/g, '\\"')
                        .replace(/\0/g, '\\0')
                        .replace(/\t/g, '\\t')
                        .replace(/\n/g, '\\n')
                        .replace(/\r/g, '\\r')
                        .replace(/[\x00-\x0F]/g, function (t) {
                          return '\\x0' + n(t)
                        })
                        .replace(/[\x10-\x1F\x7F-\x9F]/g, function (t) {
                          return '\\x' + n(t)
                        })
                    }
                    function i(t) {
                      return t
                        .replace(/\\/g, '\\\\')
                        .replace(/\]/g, '\\]')
                        .replace(/\^/g, '\\^')
                        .replace(/-/g, '\\-')
                        .replace(/\0/g, '\\0')
                        .replace(/\t/g, '\\t')
                        .replace(/\n/g, '\\n')
                        .replace(/\r/g, '\\r')
                        .replace(/[\x00-\x0F]/g, function (t) {
                          return '\\x0' + n(t)
                        })
                        .replace(/[\x10-\x1F\x7F-\x9F]/g, function (t) {
                          return '\\x' + n(t)
                        })
                    }
                    function a(t) {
                      return r[t.type](t)
                    }
                    return (
                      'Expected ' +
                      (function (t) {
                        var e,
                          r,
                          n = t.map(a)
                        if ((n.sort(), n.length > 0)) {
                          for (e = 1, r = 1; e < n.length; e++)
                            n[e - 1] !== n[e] && ((n[r] = n[e]), r++)
                          n.length = r
                        }
                        switch (n.length) {
                          case 1:
                            return n[0]
                          case 2:
                            return n[0] + ' or ' + n[1]
                          default:
                            return n.slice(0, -1).join(', ') + ', or ' + n[n.length - 1]
                        }
                      })(t) +
                      ' but ' +
                      (function (t) {
                        return t ? '"' + o(t) + '"' : 'end of input'
                      })(e) +
                      ' found.'
                    )
                  }),
                  {
                    SyntaxError: r,
                    parse: function (n, o) {
                      var i,
                        a,
                        u,
                        c,
                        s = {},
                        l = (o = void 0 !== o ? o : {}).grammarSource,
                        f = { program: Nr },
                        d = Nr,
                        h = ',',
                        p = ';',
                        g = '=',
                        b = '[',
                        m = ']',
                        y = '*',
                        v = '|||',
                        x = '...',
                        w = '---',
                        _ = '<<=>>',
                        C = '<<>>',
                        A = 'note',
                        S = 'abox',
                        k = 'rbox',
                        E = 'else',
                        L = 'break',
                        T = 'strict',
                        M = 'critical',
                        j = 'ignore',
                        F = 'consider',
                        O = 'assert',
                        I = 'loop',
                        P = 'activate',
                        D = 'deactivate',
                        B = 'label',
                        N = 'idurl',
                        H = 'linecolor',
                        R = 'linecolour',
                        W = 'textcolor',
                        G = 'textcolour',
                        X = 'textbgcolor',
                        z = 'textbgcolour',
                        V = 'arclinecolor',
                        $ = 'arclinecolour',
                        q = 'arctextcolor',
                        U = 'arctextcolour',
                        Y = 'arctextbgcolor',
                        Z = 'arctextbgcolour',
                        K = 'arcskip',
                        J = 'title',
                        Q = 'activation',
                        tt = '"',
                        et = '\\"',
                        rt = '*/',
                        nt = /^[A-Za-z_0-9]/,
                        ot = /^[ \t]/,
                        it = /^[\r\n]/,
                        at = /^[^\r\n]/,
                        ut = /^[0-9]/,
                        ct = Fr('{', !1),
                        st = Fr('}', !1),
                        lt = Fr('msc', !0),
                        ft = Fr('xu', !0),
                        dt = Fr(',', !1),
                        ht = Fr(';', !1),
                        pt = Ir('option'),
                        gt = Fr('hscale', !0),
                        bt = Fr('arcgradient', !0),
                        mt = Fr('=', !1),
                        yt = Fr('width', !0),
                        vt = Fr('wordwraparcs', !0),
                        xt = Fr('wordwrapentities', !0),
                        wt = Fr('wordwrapboxes', !0),
                        _t = Fr('watermark', !0),
                        Ct = Ir('entity'),
                        At = Fr('[', !1),
                        St = Fr(']', !1),
                        kt = Fr('*', !1),
                        Et = Ir('empty row'),
                        Lt = Fr('|||', !1),
                        Tt = Fr('...', !1),
                        Mt = Ir('---'),
                        jt = Fr('---', !1),
                        Ft = Ir('bi-directional arrow'),
                        Ot = Fr('--', !1),
                        It = Fr('<->', !1),
                        Pt = Fr('==', !1),
                        Dt = Fr('<<=>>', !1),
                        Bt = Fr('<=>', !1),
                        Nt = Fr('..', !1),
                        Ht = Fr('<<>>', !1),
                        Rt = Fr('::', !1),
                        Wt = Fr('<:>', !1),
                        Gt = Ir('left to right arrow'),
                        Xt = Fr('->', !1),
                        zt = Fr('=>>', !1),
                        Vt = Fr('=>', !1),
                        $t = Fr('>>', !1),
                        qt = Fr(':>', !1),
                        Ut = Fr('-x', !0),
                        Yt = Ir('right to left arrow'),
                        Zt = Fr('<-', !1),
                        Kt = Fr('<<=', !1),
                        Jt = Fr('<=', !1),
                        Qt = Fr('<<', !1),
                        te = Fr('<:', !1),
                        ee = Fr('x-', !0),
                        re = Ir('box'),
                        ne = Fr('note', !0),
                        oe = Fr('abox', !0),
                        ie = Fr('rbox', !0),
                        ae = Fr('box', !0),
                        ue = Ir('inline expression'),
                        ce = Fr('alt', !0),
                        se = Fr('else', !0),
                        le = Fr('opt', !0),
                        fe = Fr('break', !0),
                        de = Fr('par', !0),
                        he = Fr('seq', !0),
                        pe = Fr('strict', !0),
                        ge = Fr('neg', !0),
                        be = Fr('critical', !0),
                        me = Fr('ignore', !0),
                        ye = Fr('consider', !0),
                        ve = Fr('assert', !0),
                        xe = Fr('loop', !0),
                        we = Fr('ref', !0),
                        _e = Fr('exc', !0),
                        Ce = Ir('activate or deactivate'),
                        Ae = Fr('activate', !0),
                        Se = Fr('deactivate', !0),
                        ke = Ir('attribute name'),
                        Ee = Fr('label', !0),
                        Le = Fr('idurl', !0),
                        Te = Fr('id', !0),
                        Me = Fr('url', !0),
                        je = Fr('linecolor', !0),
                        Fe = Fr('linecolour', !0),
                        Oe = Fr('textcolor', !0),
                        Ie = Fr('textcolour', !0),
                        Pe = Fr('textbgcolor', !0),
                        De = Fr('textbgcolour', !0),
                        Be = Fr('arclinecolor', !0),
                        Ne = Fr('arclinecolour', !0),
                        He = Fr('arctextcolor', !0),
                        Re = Fr('arctextcolour', !0),
                        We = Fr('arctextbgcolor', !0),
                        Ge = Fr('arctextbgcolour', !0),
                        Xe = Fr('arcskip', !0),
                        ze = Fr('title', !0),
                        Ve = Fr('activation', !0),
                        $e = Ir('double quoted string'),
                        qe = Fr('"', !1),
                        Ue = Fr('\\"', !1),
                        Ye = { type: 'any' },
                        Ze = Ir('identifier'),
                        Ke = Or([['A', 'Z'], ['a', 'z'], '_', ['0', '9']], !1, !1),
                        Je = Ir('whitespace'),
                        Qe = Or([' ', '\t'], !1, !1),
                        tr = Ir('lineend'),
                        er = Or(['\r', '\n'], !1, !1),
                        rr = Fr('/*', !1),
                        nr = Fr('*/', !1),
                        or = Fr('//', !1),
                        ir = Fr('#', !1),
                        ar = Or(['\r', '\n'], !0, !1),
                        ur = Ir('comment'),
                        cr = Ir('number'),
                        sr = Or([['0', '9']], !1, !1),
                        lr = Fr('.', !1),
                        fr = Ir('boolean'),
                        dr = Fr('true', !0),
                        hr = Fr('false', !0),
                        pr = Fr('on', !0),
                        gr = Fr('off', !0),
                        br = Fr('0', !1),
                        mr = Fr('1', !1),
                        yr = Ir('size'),
                        vr = Fr('auto', !0),
                        xr = function (t, r) {
                          return e.nameValue2Option(t, r)
                        },
                        wr = function (t, r) {
                          return e.nameValue2Option(t, e.flattenBoolean(r))
                        },
                        _r = function (t, e) {
                          return e
                        },
                        Cr = function (n, o) {
                          return (
                            e.isMscGenKeyword(n) &&
                              (function (t, e) {
                                throw (function (t, e) {
                                  return new r(t, null, null, e)
                                })(t, (e = void 0 !== e ? e : Dr(Er, kr)))
                              })(
                                "MscGen keywords aren't allowed as entity names (embed them in quotes if you need them)"
                              ),
                            t({ name: n }, o)
                          )
                        },
                        Ar = function (t) {
                          return { kind: t }
                        },
                        Sr = function (t, e) {
                          return { kind: e, from: t, to: '*' }
                        },
                        kr = 0,
                        Er = 0,
                        Lr = [{ line: 1, column: 1 }],
                        Tr = 0,
                        Mr = [],
                        jr = 0
                      if ('startRule' in o) {
                        if (!(o.startRule in f))
                          throw new Error('Can\'t start parsing from rule "' + o.startRule + '".')
                        d = f[o.startRule]
                      }
                      function Fr(t, e) {
                        return { type: 'literal', text: t, ignoreCase: e }
                      }
                      function Or(t, e, r) {
                        return { type: 'class', parts: t, inverted: e, ignoreCase: r }
                      }
                      function Ir(t) {
                        return { type: 'other', description: t }
                      }
                      function Pr(t) {
                        var e,
                          r = Lr[t]
                        if (r) return r
                        for (e = t - 1; !Lr[e]; ) e--
                        for (r = { line: (r = Lr[e]).line, column: r.column }; e < t; )
                          10 === n.charCodeAt(e) ? (r.line++, (r.column = 1)) : r.column++, e++
                        return (Lr[t] = r), r
                      }
                      function Dr(t, e) {
                        var r = Pr(t),
                          n = Pr(e)
                        return {
                          source: l,
                          start: { offset: t, line: r.line, column: r.column },
                          end: { offset: e, line: n.line, column: n.column },
                        }
                      }
                      function Br(t) {
                        kr < Tr || (kr > Tr && ((Tr = kr), (Mr = [])), Mr.push(t))
                      }
                      function Nr() {
                        var r, o, i, a, u, c, l
                        return (
                          (r = kr),
                          (o = an()),
                          (function () {
                            var t
                            return (
                              'msc' === n.substr(kr, 3).toLowerCase()
                                ? ((t = n.substr(kr, 3)), (kr += 3))
                                : ((t = s), 0 === jr && Br(lt)),
                              t === s &&
                                ('xu' === n.substr(kr, 2).toLowerCase()
                                  ? ((t = n.substr(kr, 2)), (kr += 2))
                                  : ((t = s), 0 === jr && Br(ft))),
                              t
                            )
                          })() !== s
                            ? (an(),
                              123 === n.charCodeAt(kr)
                                ? ((i = '{'), kr++)
                                : ((i = s), 0 === jr && Br(ct)),
                              i !== s
                                ? (an(),
                                  (a = (function () {
                                    var e, r, o, i
                                    return (
                                      (e = kr),
                                      (r = (function () {
                                        var e, r, o, i, a, u
                                        for (
                                          e = kr,
                                            r = kr,
                                            o = [],
                                            i = kr,
                                            (a = Hr()) !== s
                                              ? (44 === n.charCodeAt(kr)
                                                  ? ((u = h), kr++)
                                                  : ((u = s), 0 === jr && Br(dt)),
                                                u !== s ? ((Er = i), (i = a)) : ((kr = i), (i = s)))
                                              : ((kr = i), (i = s));
                                          i !== s;

                                        )
                                          o.push(i),
                                            (i = kr),
                                            (a = Hr()) !== s
                                              ? (44 === n.charCodeAt(kr)
                                                  ? ((u = h), kr++)
                                                  : ((u = s), 0 === jr && Br(dt)),
                                                u !== s ? ((Er = i), (i = a)) : ((kr = i), (i = s)))
                                              : ((kr = i), (i = s))
                                        return (
                                          (i = kr),
                                          (a = Hr()) !== s
                                            ? (59 === n.charCodeAt(kr)
                                                ? ((u = p), kr++)
                                                : ((u = s), 0 === jr && Br(ht)),
                                              u !== s ? ((Er = i), (i = a)) : ((kr = i), (i = s)))
                                            : ((kr = i), (i = s)),
                                          i !== s ? (r = o = [o, i]) : ((kr = r), (r = s)),
                                          r !== s &&
                                            ((Er = e),
                                            (r = (function (e) {
                                              return e[0].concat(e[1]).reduce(t, {})
                                            })(r))),
                                          r
                                        )
                                      })()) === s && (r = null),
                                      (o = (function () {
                                        var t, e, r, o, i, a
                                        for (
                                          t = kr,
                                            e = kr,
                                            r = [],
                                            o = kr,
                                            (i = Rr()) !== s
                                              ? (44 === n.charCodeAt(kr)
                                                  ? ((a = h), kr++)
                                                  : ((a = s), 0 === jr && Br(dt)),
                                                a !== s ? ((Er = o), (o = i)) : ((kr = o), (o = s)))
                                              : ((kr = o), (o = s));
                                          o !== s;

                                        )
                                          r.push(o),
                                            (o = kr),
                                            (i = Rr()) !== s
                                              ? (44 === n.charCodeAt(kr)
                                                  ? ((a = h), kr++)
                                                  : ((a = s), 0 === jr && Br(dt)),
                                                a !== s ? ((Er = o), (o = i)) : ((kr = o), (o = s)))
                                              : ((kr = o), (o = s))
                                        return (
                                          (o = kr),
                                          (i = Rr()) !== s
                                            ? (59 === n.charCodeAt(kr)
                                                ? ((a = p), kr++)
                                                : ((a = s), 0 === jr && Br(ht)),
                                              a !== s ? ((Er = o), (o = i)) : ((kr = o), (o = s)))
                                            : ((kr = o), (o = s)),
                                          o !== s ? (e = r = [r, o]) : ((kr = e), (e = s)),
                                          e !== s && ((Er = t), (u = e), (e = u[0].concat(u[1]))),
                                          e
                                        )
                                        var u
                                      })()) === s && (o = null),
                                      (i = Wr()) === s && (i = null),
                                      (Er = e),
                                      (function (t, e, r) {
                                        var n = {}
                                        return (
                                          t && (n.options = t),
                                          e && (n.entities = e),
                                          r && (n.arcs = r),
                                          n
                                        )
                                      })(r, o, i)
                                    )
                                  })()),
                                  an(),
                                  125 === n.charCodeAt(kr)
                                    ? ((u = '}'), kr++)
                                    : ((u = s), 0 === jr && Br(st)),
                                  u !== s
                                    ? (an(),
                                      (Er = r),
                                      (c = o),
                                      ((l = a).entities = l.entities || []),
                                      e.checkForUndeclaredEntities(l.entities, l.arcs),
                                      (l = t({ meta: e.getMetaInfo(l.options, l.arcs) }, l)),
                                      c.length > 0 && (l = t({ precomment: c }, l)),
                                      (r = l))
                                    : ((kr = r), (r = s)))
                                : ((kr = r), (r = s)))
                            : ((kr = r), (r = s)),
                          r
                        )
                      }
                      function Hr() {
                        var t, e, r, o
                        return (
                          jr++,
                          (t = kr),
                          an(),
                          'hscale' === n.substr(kr, 6).toLowerCase()
                            ? ((e = n.substr(kr, 6)), (kr += 6))
                            : ((e = s), 0 === jr && Br(gt)),
                          e === s &&
                            ('arcgradient' === n.substr(kr, 11).toLowerCase()
                              ? ((e = n.substr(kr, 11)), (kr += 11))
                              : ((e = s), 0 === jr && Br(bt))),
                          e !== s
                            ? (an(),
                              61 === n.charCodeAt(kr)
                                ? ((r = g), kr++)
                                : ((r = s), 0 === jr && Br(mt)),
                              r !== s
                                ? (an(),
                                  (o = (function () {
                                    var t, e
                                    return (
                                      jr++,
                                      (t = kr),
                                      (e = (function () {
                                        var t, e, r, o
                                        return (
                                          (t = kr),
                                          34 === n.charCodeAt(kr)
                                            ? ((e = tt), kr++)
                                            : ((e = s), 0 === jr && Br(qe)),
                                          e !== s && (r = un()) !== s
                                            ? (34 === n.charCodeAt(kr)
                                                ? ((o = tt), kr++)
                                                : ((o = s), 0 === jr && Br(qe)),
                                              o !== s
                                                ? ((Er = t), (i = r), (t = i.toString()))
                                                : ((kr = t), (t = s)))
                                            : ((kr = t), (t = s)),
                                          t
                                        )
                                        var i
                                      })()) !== s && ((Er = t), (e = e)),
                                      (t = e) === s &&
                                        ((t = kr),
                                        (e = un()) !== s && ((Er = t), (r = e), (e = r.toString())),
                                        (t = e)),
                                      jr--,
                                      t === s && ((e = s), 0 === jr && Br(cr)),
                                      t
                                    )
                                    var r
                                  })()) !== s
                                    ? (an(), (Er = t), (t = xr(e, o)))
                                    : ((kr = t), (t = s)))
                                : ((kr = t), (t = s)))
                            : ((kr = t), (t = s)),
                          t === s &&
                            ((t = kr),
                            an(),
                            'width' === n.substr(kr, 5).toLowerCase()
                              ? ((e = n.substr(kr, 5)), (kr += 5))
                              : ((e = s), 0 === jr && Br(yt)),
                            e !== s
                              ? (an(),
                                61 === n.charCodeAt(kr)
                                  ? ((r = g), kr++)
                                  : ((r = s), 0 === jr && Br(mt)),
                                r !== s
                                  ? (an(),
                                    (o = (function () {
                                      var t
                                      return (
                                        jr++,
                                        (t = (function () {
                                          var t, e, r, o
                                          return (
                                            (t = kr),
                                            34 === n.charCodeAt(kr)
                                              ? ((e = tt), kr++)
                                              : ((e = s), 0 === jr && Br(qe)),
                                            e !== s && (r = fn()) !== s
                                              ? (34 === n.charCodeAt(kr)
                                                  ? ((o = tt), kr++)
                                                  : ((o = s), 0 === jr && Br(qe)),
                                                o !== s ? ((Er = t), (t = r)) : ((kr = t), (t = s)))
                                              : ((kr = t), (t = s)),
                                            t
                                          )
                                        })()) === s && (t = fn()),
                                        jr--,
                                        t === s && 0 === jr && Br(yr),
                                        t
                                      )
                                    })()) !== s
                                      ? (an(), (Er = t), (t = xr(e, o)))
                                      : ((kr = t), (t = s)))
                                  : ((kr = t), (t = s)))
                              : ((kr = t), (t = s)),
                            t === s &&
                              ((t = kr),
                              an(),
                              'wordwraparcs' === n.substr(kr, 12).toLowerCase()
                                ? ((e = n.substr(kr, 12)), (kr += 12))
                                : ((e = s), 0 === jr && Br(vt)),
                              e !== s
                                ? (an(),
                                  61 === n.charCodeAt(kr)
                                    ? ((r = g), kr++)
                                    : ((r = s), 0 === jr && Br(mt)),
                                  r !== s
                                    ? (an(),
                                      (o = sn()) !== s
                                        ? (an(), (Er = t), (t = wr(e, o)))
                                        : ((kr = t), (t = s)))
                                    : ((kr = t), (t = s)))
                                : ((kr = t), (t = s)),
                              t === s &&
                                ((t = kr),
                                an(),
                                'wordwrapentities' === n.substr(kr, 16).toLowerCase()
                                  ? ((e = n.substr(kr, 16)), (kr += 16))
                                  : ((e = s), 0 === jr && Br(xt)),
                                e !== s
                                  ? (an(),
                                    61 === n.charCodeAt(kr)
                                      ? ((r = g), kr++)
                                      : ((r = s), 0 === jr && Br(mt)),
                                    r !== s
                                      ? (an(),
                                        (o = sn()) !== s
                                          ? (an(), (Er = t), (t = wr(e, o)))
                                          : ((kr = t), (t = s)))
                                      : ((kr = t), (t = s)))
                                  : ((kr = t), (t = s)),
                                t === s &&
                                  ((t = kr),
                                  an(),
                                  'wordwrapboxes' === n.substr(kr, 13).toLowerCase()
                                    ? ((e = n.substr(kr, 13)), (kr += 13))
                                    : ((e = s), 0 === jr && Br(wt)),
                                  e !== s
                                    ? (an(),
                                      61 === n.charCodeAt(kr)
                                        ? ((r = g), kr++)
                                        : ((r = s), 0 === jr && Br(mt)),
                                      r !== s
                                        ? (an(),
                                          (o = sn()) !== s
                                            ? (an(), (Er = t), (t = wr(e, o)))
                                            : ((kr = t), (t = s)))
                                        : ((kr = t), (t = s)))
                                    : ((kr = t), (t = s)),
                                  t === s &&
                                    ((t = kr),
                                    an(),
                                    'watermark' === n.substr(kr, 9).toLowerCase()
                                      ? ((e = n.substr(kr, 9)), (kr += 9))
                                      : ((e = s), 0 === jr && Br(_t)),
                                    e !== s
                                      ? (an(),
                                        61 === n.charCodeAt(kr)
                                          ? ((r = g), kr++)
                                          : ((r = s), 0 === jr && Br(mt)),
                                        r !== s
                                          ? (an(),
                                            (o = Yr()) !== s
                                              ? (an(), (Er = t), (t = xr(e, o)))
                                              : ((kr = t), (t = s)))
                                          : ((kr = t), (t = s)))
                                      : ((kr = t), (t = s))))))),
                          jr--,
                          t === s && 0 === jr && Br(pt),
                          t
                        )
                      }
                      function Rr() {
                        var e, r, o, i, a, u
                        return (
                          jr++,
                          (e = kr),
                          an(),
                          (r = Yr()) !== s
                            ? (an(),
                              (o = kr),
                              91 === n.charCodeAt(kr)
                                ? ((i = b), kr++)
                                : ((i = s), 0 === jr && Br(At)),
                              i !== s && (a = qr()) !== s
                                ? (93 === n.charCodeAt(kr)
                                    ? ((u = m), kr++)
                                    : ((u = s), 0 === jr && Br(St)),
                                  u !== s ? ((Er = o), (o = _r(0, a))) : ((kr = o), (o = s)))
                                : ((kr = o), (o = s)),
                              o === s && (o = null),
                              (i = an()),
                              (Er = e),
                              (e = t({ name: r }, o)))
                            : ((kr = e), (e = s)),
                          e === s &&
                            ((e = kr),
                            an(),
                            (r = Kr()) !== s
                              ? (an(),
                                (o = kr),
                                91 === n.charCodeAt(kr)
                                  ? ((i = b), kr++)
                                  : ((i = s), 0 === jr && Br(At)),
                                i !== s && (a = qr()) !== s
                                  ? (93 === n.charCodeAt(kr)
                                      ? ((u = m), kr++)
                                      : ((u = s), 0 === jr && Br(St)),
                                    u !== s ? ((Er = o), (o = _r(0, a))) : ((kr = o), (o = s)))
                                  : ((kr = o), (o = s)),
                                o === s && (o = null),
                                (i = an()),
                                (Er = e),
                                (e = Cr(r, o)))
                              : ((kr = e), (e = s))),
                          jr--,
                          e === s && 0 === jr && Br(Ct),
                          e
                        )
                      }
                      function Wr() {
                        var t, e, r, o
                        if (
                          ((t = []),
                          (e = kr),
                          (r = Gr()) !== s
                            ? (an(),
                              59 === n.charCodeAt(kr)
                                ? ((o = p), kr++)
                                : ((o = s), 0 === jr && Br(ht)),
                              o !== s ? ((Er = e), (e = r)) : ((kr = e), (e = s)))
                            : ((kr = e), (e = s)),
                          e !== s)
                        )
                          for (; e !== s; )
                            t.push(e),
                              (e = kr),
                              (r = Gr()) !== s
                                ? (an(),
                                  59 === n.charCodeAt(kr)
                                    ? ((o = p), kr++)
                                    : ((o = s), 0 === jr && Br(ht)),
                                  o !== s ? ((Er = e), (e = r)) : ((kr = e), (e = s)))
                                : ((kr = e), (e = s))
                        else t = s
                        return t
                      }
                      function Gr() {
                        var t, e, r, o, i, a, u
                        for (
                          t = kr,
                            e = kr,
                            r = [],
                            o = kr,
                            (i = Xr()) !== s
                              ? (an(),
                                44 === n.charCodeAt(kr)
                                  ? ((a = h), kr++)
                                  : ((a = s), 0 === jr && Br(dt)),
                                a !== s ? ((Er = o), (o = i)) : ((kr = o), (o = s)))
                              : ((kr = o), (o = s));
                          o !== s;

                        )
                          r.push(o),
                            (o = kr),
                            (i = Xr()) !== s
                              ? (an(),
                                44 === n.charCodeAt(kr)
                                  ? ((a = h), kr++)
                                  : ((a = s), 0 === jr && Br(dt)),
                                a !== s ? ((Er = o), (o = i)) : ((kr = o), (o = s)))
                              : ((kr = o), (o = s))
                        return (
                          (o = kr),
                          (i = Xr()) !== s && ((Er = o), (i = i)),
                          (o = i) !== s ? (e = r = [r, o]) : ((kr = e), (e = s)),
                          e !== s && ((Er = t), (e = (u = e)[0].concat(u[1]))),
                          e
                        )
                      }
                      function Xr() {
                        var e
                        return (
                          (e = (function () {
                            var e, r, o, i, a, u
                            return (
                              (e = kr),
                              (r = kr),
                              (o = (function () {
                                var t, e
                                return (
                                  (t = kr),
                                  an(),
                                  (e = (function () {
                                    var t
                                    return (
                                      jr++,
                                      n.substr(kr, 3) === v
                                        ? ((t = v), (kr += 3))
                                        : ((t = s), 0 === jr && Br(Lt)),
                                      t === s &&
                                        (n.substr(kr, 3) === x
                                          ? ((t = x), (kr += 3))
                                          : ((t = s), 0 === jr && Br(Tt))),
                                      jr--,
                                      t === s && 0 === jr && Br(Et),
                                      t
                                    )
                                  })()) !== s
                                    ? (an(), (Er = t), (t = Ar(e)))
                                    : ((kr = t), (t = s)),
                                  t
                                )
                              })()) !== s && ((Er = r), (o = o)),
                              (r = o) === s &&
                                ((r = kr),
                                (o = (function () {
                                  var t, e, r, o
                                  return (
                                    (t = kr),
                                    an(),
                                    (e = Zr()) !== s
                                      ? (an(),
                                        (r = (function () {
                                          var t, e
                                          return (
                                            (t = kr),
                                            (e = zr()) === s &&
                                              (e = Vr()) === s &&
                                              (e = $r()) === s &&
                                              (e = (function () {
                                                var t
                                                return (
                                                  jr++,
                                                  n.substr(kr, 4).toLowerCase() === A
                                                    ? ((t = n.substr(kr, 4)), (kr += 4))
                                                    : ((t = s), 0 === jr && Br(ne)),
                                                  t === s &&
                                                    (n.substr(kr, 4).toLowerCase() === S
                                                      ? ((t = n.substr(kr, 4)), (kr += 4))
                                                      : ((t = s), 0 === jr && Br(oe)),
                                                    t === s &&
                                                      (n.substr(kr, 4).toLowerCase() === k
                                                        ? ((t = n.substr(kr, 4)), (kr += 4))
                                                        : ((t = s), 0 === jr && Br(ie)),
                                                      t === s &&
                                                        ('box' === n.substr(kr, 3).toLowerCase()
                                                          ? ((t = n.substr(kr, 3)), (kr += 3))
                                                          : ((t = s), 0 === jr && Br(ae))))),
                                                  jr--,
                                                  t === s && 0 === jr && Br(re),
                                                  t
                                                )
                                              })()),
                                            e !== s && ((Er = t), (r = e), (e = r.toLowerCase())),
                                            e
                                          )
                                          var r
                                        })()) !== s
                                          ? (an(),
                                            (o = Zr()) !== s
                                              ? (an(),
                                                (Er = t),
                                                (i = e),
                                                (a = r),
                                                (u = o),
                                                (t = { kind: a, from: i, to: u }))
                                              : ((kr = t), (t = s)))
                                          : ((kr = t), (t = s)))
                                      : ((kr = t), (t = s)),
                                    t === s &&
                                      ((t = kr),
                                      an(),
                                      42 === n.charCodeAt(kr)
                                        ? ((e = y), kr++)
                                        : ((e = s), 0 === jr && Br(kt)),
                                      e !== s
                                        ? (an(),
                                          (r = $r()) !== s
                                            ? (an(),
                                              (o = Zr()) !== s
                                                ? (an(),
                                                  (Er = t),
                                                  (t = (function (t, e) {
                                                    return { kind: t, from: '*', to: e }
                                                  })(r, o)))
                                                : ((kr = t), (t = s)))
                                            : ((kr = t), (t = s)))
                                        : ((kr = t), (t = s)),
                                      t === s &&
                                        ((t = kr),
                                        an(),
                                        (e = Zr()) !== s
                                          ? (an(),
                                            (r = Vr()) !== s
                                              ? (an(),
                                                42 === n.charCodeAt(kr)
                                                  ? ((o = y), kr++)
                                                  : ((o = s), 0 === jr && Br(kt)),
                                                o !== s
                                                  ? (an(), (Er = t), (t = Sr(e, r)))
                                                  : ((kr = t), (t = s)))
                                              : ((kr = t), (t = s)))
                                          : ((kr = t), (t = s)),
                                        t === s &&
                                          ((t = kr),
                                          an(),
                                          (e = Zr()) !== s
                                            ? (an(),
                                              (r = zr()) !== s
                                                ? (an(),
                                                  42 === n.charCodeAt(kr)
                                                    ? ((o = y), kr++)
                                                    : ((o = s), 0 === jr && Br(kt)),
                                                  o !== s
                                                    ? (an(), (Er = t), (t = Sr(e, r)))
                                                    : ((kr = t), (t = s)))
                                                : ((kr = t), (t = s)))
                                            : ((kr = t), (t = s))))),
                                    t
                                  )
                                  var i, a, u
                                })()) !== s && ((Er = r), (o = o)),
                                (r = o) === s &&
                                  ((r = kr),
                                  (o = (function () {
                                    var t, e
                                    return (
                                      (t = kr),
                                      an(),
                                      (e = (function () {
                                        var t
                                        return (
                                          jr++,
                                          n.substr(kr, 3) === w
                                            ? ((t = w), (kr += 3))
                                            : ((t = s), 0 === jr && Br(jt)),
                                          jr--,
                                          t === s && 0 === jr && Br(Mt),
                                          t
                                        )
                                      })()) !== s
                                        ? (an(), (Er = t), (t = Ar(e)))
                                        : ((kr = t), (t = s)),
                                      t
                                    )
                                  })()) !== s && ((Er = r), (o = o)),
                                  (r = o))),
                              r !== s
                                ? ((o = kr),
                                  91 === n.charCodeAt(kr)
                                    ? ((i = b), kr++)
                                    : ((i = s), 0 === jr && Br(At)),
                                  i !== s && (a = qr()) !== s
                                    ? (93 === n.charCodeAt(kr)
                                        ? ((u = m), kr++)
                                        : ((u = s), 0 === jr && Br(St)),
                                      u !== s ? ((Er = o), (c = a), (o = c)) : ((kr = o), (o = s)))
                                    : ((kr = o), (o = s)),
                                  o === s && (o = null),
                                  (Er = e),
                                  (e = (function (e, r) {
                                    return t(e, r)
                                  })(r, o)))
                                : ((kr = e), (e = s)),
                              e
                            )
                            var c
                          })()) === s &&
                            (e = (function () {
                              var e, r, o, i, a, u, c, l, f, d
                              return (
                                (e = kr),
                                an(),
                                (r = Zr()) !== s
                                  ? (an(),
                                    (o = (function () {
                                      var t, e
                                      return (
                                        jr++,
                                        (t = kr),
                                        'alt' === n.substr(kr, 3).toLowerCase()
                                          ? ((e = n.substr(kr, 3)), (kr += 3))
                                          : ((e = s), 0 === jr && Br(ce)),
                                        e === s &&
                                          (n.substr(kr, 4).toLowerCase() === E
                                            ? ((e = n.substr(kr, 4)), (kr += 4))
                                            : ((e = s), 0 === jr && Br(se)),
                                          e === s &&
                                            ('opt' === n.substr(kr, 3).toLowerCase()
                                              ? ((e = n.substr(kr, 3)), (kr += 3))
                                              : ((e = s), 0 === jr && Br(le)),
                                            e === s &&
                                              (n.substr(kr, 5).toLowerCase() === L
                                                ? ((e = n.substr(kr, 5)), (kr += 5))
                                                : ((e = s), 0 === jr && Br(fe)),
                                              e === s &&
                                                ('par' === n.substr(kr, 3).toLowerCase()
                                                  ? ((e = n.substr(kr, 3)), (kr += 3))
                                                  : ((e = s), 0 === jr && Br(de)),
                                                e === s &&
                                                  ('seq' === n.substr(kr, 3).toLowerCase()
                                                    ? ((e = n.substr(kr, 3)), (kr += 3))
                                                    : ((e = s), 0 === jr && Br(he)),
                                                  e === s &&
                                                    (n.substr(kr, 6).toLowerCase() === T
                                                      ? ((e = n.substr(kr, 6)), (kr += 6))
                                                      : ((e = s), 0 === jr && Br(pe)),
                                                    e === s &&
                                                      ('neg' === n.substr(kr, 3).toLowerCase()
                                                        ? ((e = n.substr(kr, 3)), (kr += 3))
                                                        : ((e = s), 0 === jr && Br(ge)),
                                                      e === s &&
                                                        (n.substr(kr, 8).toLowerCase() === M
                                                          ? ((e = n.substr(kr, 8)), (kr += 8))
                                                          : ((e = s), 0 === jr && Br(be)),
                                                        e === s &&
                                                          (n.substr(kr, 6).toLowerCase() === j
                                                            ? ((e = n.substr(kr, 6)), (kr += 6))
                                                            : ((e = s), 0 === jr && Br(me)),
                                                          e === s &&
                                                            (n.substr(kr, 8).toLowerCase() === F
                                                              ? ((e = n.substr(kr, 8)), (kr += 8))
                                                              : ((e = s), 0 === jr && Br(ye)),
                                                            e === s &&
                                                              (n.substr(kr, 6).toLowerCase() === O
                                                                ? ((e = n.substr(kr, 6)), (kr += 6))
                                                                : ((e = s), 0 === jr && Br(ve)),
                                                              e === s &&
                                                                (n.substr(kr, 4).toLowerCase() === I
                                                                  ? ((e = n.substr(kr, 4)),
                                                                    (kr += 4))
                                                                  : ((e = s), 0 === jr && Br(xe)),
                                                                e === s &&
                                                                  ('ref' ===
                                                                  n.substr(kr, 3).toLowerCase()
                                                                    ? ((e = n.substr(kr, 3)),
                                                                      (kr += 3))
                                                                    : ((e = s), 0 === jr && Br(we)),
                                                                  e === s &&
                                                                    ('exc' ===
                                                                    n.substr(kr, 3).toLowerCase()
                                                                      ? ((e = n.substr(kr, 3)),
                                                                        (kr += 3))
                                                                      : ((e = s),
                                                                        0 === jr &&
                                                                          Br(_e)))))))))))))))),
                                        e !== s && ((Er = t), (r = e), (e = r.toLowerCase())),
                                        jr--,
                                        (t = e) === s && ((e = s), 0 === jr && Br(ue)),
                                        t
                                      )
                                      var r
                                    })()) !== s
                                      ? (an(),
                                        (i = Zr()) !== s
                                          ? (an(),
                                            (a = kr),
                                            91 === n.charCodeAt(kr)
                                              ? ((u = b), kr++)
                                              : ((u = s), 0 === jr && Br(At)),
                                            u !== s && (c = qr()) !== s
                                              ? (93 === n.charCodeAt(kr)
                                                  ? ((l = m), kr++)
                                                  : ((l = s), 0 === jr && Br(St)),
                                                l !== s
                                                  ? ((Er = a), (h = c), (a = h))
                                                  : ((kr = a), (a = s)))
                                              : ((kr = a), (a = s)),
                                            a === s && (a = null),
                                            (u = an()),
                                            123 === n.charCodeAt(kr)
                                              ? ((c = '{'), kr++)
                                              : ((c = s), 0 === jr && Br(ct)),
                                            c !== s
                                              ? ((l = an()),
                                                (f = Wr()) === s && (f = null),
                                                an(),
                                                125 === n.charCodeAt(kr)
                                                  ? ((d = '}'), kr++)
                                                  : ((d = s), 0 === jr && Br(st)),
                                                d !== s
                                                  ? (an(),
                                                    (Er = e),
                                                    (e = (function (e, r, n, o, i) {
                                                      return t(
                                                        { kind: r, from: e, to: n, arcs: i },
                                                        o
                                                      )
                                                    })(r, o, i, a, f)))
                                                  : ((kr = e), (e = s)))
                                              : ((kr = e), (e = s)))
                                          : ((kr = e), (e = s)))
                                      : ((kr = e), (e = s)))
                                  : ((kr = e), (e = s)),
                                e
                              )
                              var h
                            })()),
                          e
                        )
                      }
                      function zr() {
                        var t
                        return (
                          jr++,
                          '--' === n.substr(kr, 2)
                            ? ((t = '--'), (kr += 2))
                            : ((t = s), 0 === jr && Br(Ot)),
                          t === s &&
                            ('<->' === n.substr(kr, 3)
                              ? ((t = '<->'), (kr += 3))
                              : ((t = s), 0 === jr && Br(It)),
                            t === s &&
                              ('==' === n.substr(kr, 2)
                                ? ((t = '=='), (kr += 2))
                                : ((t = s), 0 === jr && Br(Pt)),
                              t === s &&
                                (n.substr(kr, 5) === _
                                  ? ((t = _), (kr += 5))
                                  : ((t = s), 0 === jr && Br(Dt)),
                                t === s &&
                                  ('<=>' === n.substr(kr, 3)
                                    ? ((t = '<=>'), (kr += 3))
                                    : ((t = s), 0 === jr && Br(Bt)),
                                  t === s &&
                                    ('..' === n.substr(kr, 2)
                                      ? ((t = '..'), (kr += 2))
                                      : ((t = s), 0 === jr && Br(Nt)),
                                    t === s &&
                                      (n.substr(kr, 4) === C
                                        ? ((t = C), (kr += 4))
                                        : ((t = s), 0 === jr && Br(Ht)),
                                      t === s &&
                                        ('::' === n.substr(kr, 2)
                                          ? ((t = '::'), (kr += 2))
                                          : ((t = s), 0 === jr && Br(Rt)),
                                        t === s &&
                                          ('<:>' === n.substr(kr, 3)
                                            ? ((t = '<:>'), (kr += 3))
                                            : ((t = s), 0 === jr && Br(Wt)))))))))),
                          jr--,
                          t === s && 0 === jr && Br(Ft),
                          t
                        )
                      }
                      function Vr() {
                        var t
                        return (
                          jr++,
                          '->' === n.substr(kr, 2)
                            ? ((t = '->'), (kr += 2))
                            : ((t = s), 0 === jr && Br(Xt)),
                          t === s &&
                            ('=>>' === n.substr(kr, 3)
                              ? ((t = '=>>'), (kr += 3))
                              : ((t = s), 0 === jr && Br(zt)),
                            t === s &&
                              ('=>' === n.substr(kr, 2)
                                ? ((t = '=>'), (kr += 2))
                                : ((t = s), 0 === jr && Br(Vt)),
                              t === s &&
                                ('>>' === n.substr(kr, 2)
                                  ? ((t = '>>'), (kr += 2))
                                  : ((t = s), 0 === jr && Br($t)),
                                t === s &&
                                  (':>' === n.substr(kr, 2)
                                    ? ((t = ':>'), (kr += 2))
                                    : ((t = s), 0 === jr && Br(qt)),
                                  t === s &&
                                    ('-x' === n.substr(kr, 2).toLowerCase()
                                      ? ((t = n.substr(kr, 2)), (kr += 2))
                                      : ((t = s), 0 === jr && Br(Ut))))))),
                          jr--,
                          t === s && 0 === jr && Br(Gt),
                          t
                        )
                      }
                      function $r() {
                        var t
                        return (
                          jr++,
                          '<-' === n.substr(kr, 2)
                            ? ((t = '<-'), (kr += 2))
                            : ((t = s), 0 === jr && Br(Zt)),
                          t === s &&
                            ('<<=' === n.substr(kr, 3)
                              ? ((t = '<<='), (kr += 3))
                              : ((t = s), 0 === jr && Br(Kt)),
                            t === s &&
                              ('<=' === n.substr(kr, 2)
                                ? ((t = '<='), (kr += 2))
                                : ((t = s), 0 === jr && Br(Jt)),
                              t === s &&
                                ('<<' === n.substr(kr, 2)
                                  ? ((t = '<<'), (kr += 2))
                                  : ((t = s), 0 === jr && Br(Qt)),
                                t === s &&
                                  ('<:' === n.substr(kr, 2)
                                    ? ((t = '<:'), (kr += 2))
                                    : ((t = s), 0 === jr && Br(te)),
                                  t === s &&
                                    ('x-' === n.substr(kr, 2).toLowerCase()
                                      ? ((t = n.substr(kr, 2)), (kr += 2))
                                      : ((t = s), 0 === jr && Br(ee))))))),
                          jr--,
                          t === s && 0 === jr && Br(Yt),
                          t
                        )
                      }
                      function qr() {
                        var e, r, o, i, a, u, c
                        for (
                          e = kr,
                            r = kr,
                            o = [],
                            i = kr,
                            (a = Ur()) !== s
                              ? (44 === n.charCodeAt(kr)
                                  ? ((u = h), kr++)
                                  : ((u = s), 0 === jr && Br(dt)),
                                u !== s ? ((Er = i), (i = a)) : ((kr = i), (i = s)))
                              : ((kr = i), (i = s));
                          i !== s;

                        )
                          o.push(i),
                            (i = kr),
                            (a = Ur()) !== s
                              ? (44 === n.charCodeAt(kr)
                                  ? ((u = h), kr++)
                                  : ((u = s), 0 === jr && Br(dt)),
                                u !== s ? ((Er = i), (i = a)) : ((kr = i), (i = s)))
                              : ((kr = i), (i = s))
                        return (
                          (i = kr),
                          (a = Ur()) !== s && ((Er = i), (a = a)),
                          (i = a) !== s ? (r = o = [o, i]) : ((kr = r), (r = s)),
                          r !== s && ((Er = e), (r = (c = r)[0].concat(c[1]).reduce(t, {}))),
                          r
                        )
                      }
                      function Ur() {
                        var t
                        return (
                          (t = (function () {
                            var t, r, o, i
                            return (
                              (t = kr),
                              an(),
                              (r = (function () {
                                var t
                                return (
                                  jr++,
                                  n.substr(kr, 5).toLowerCase() === B
                                    ? ((t = n.substr(kr, 5)), (kr += 5))
                                    : ((t = s), 0 === jr && Br(Ee)),
                                  t === s &&
                                    (n.substr(kr, 5).toLowerCase() === N
                                      ? ((t = n.substr(kr, 5)), (kr += 5))
                                      : ((t = s), 0 === jr && Br(Le)),
                                    t === s &&
                                      ('id' === n.substr(kr, 2).toLowerCase()
                                        ? ((t = n.substr(kr, 2)), (kr += 2))
                                        : ((t = s), 0 === jr && Br(Te)),
                                      t === s &&
                                        ('url' === n.substr(kr, 3).toLowerCase()
                                          ? ((t = n.substr(kr, 3)), (kr += 3))
                                          : ((t = s), 0 === jr && Br(Me)),
                                        t === s &&
                                          (n.substr(kr, 9).toLowerCase() === H
                                            ? ((t = n.substr(kr, 9)), (kr += 9))
                                            : ((t = s), 0 === jr && Br(je)),
                                          t === s &&
                                            (n.substr(kr, 10).toLowerCase() === R
                                              ? ((t = n.substr(kr, 10)), (kr += 10))
                                              : ((t = s), 0 === jr && Br(Fe)),
                                            t === s &&
                                              (n.substr(kr, 9).toLowerCase() === W
                                                ? ((t = n.substr(kr, 9)), (kr += 9))
                                                : ((t = s), 0 === jr && Br(Oe)),
                                              t === s &&
                                                (n.substr(kr, 10).toLowerCase() === G
                                                  ? ((t = n.substr(kr, 10)), (kr += 10))
                                                  : ((t = s), 0 === jr && Br(Ie)),
                                                t === s &&
                                                  (n.substr(kr, 11).toLowerCase() === X
                                                    ? ((t = n.substr(kr, 11)), (kr += 11))
                                                    : ((t = s), 0 === jr && Br(Pe)),
                                                  t === s &&
                                                    (n.substr(kr, 12).toLowerCase() === z
                                                      ? ((t = n.substr(kr, 12)), (kr += 12))
                                                      : ((t = s), 0 === jr && Br(De)),
                                                    t === s &&
                                                      (n.substr(kr, 12).toLowerCase() === V
                                                        ? ((t = n.substr(kr, 12)), (kr += 12))
                                                        : ((t = s), 0 === jr && Br(Be)),
                                                      t === s &&
                                                        (n.substr(kr, 13).toLowerCase() === $
                                                          ? ((t = n.substr(kr, 13)), (kr += 13))
                                                          : ((t = s), 0 === jr && Br(Ne)),
                                                        t === s &&
                                                          (n.substr(kr, 12).toLowerCase() === q
                                                            ? ((t = n.substr(kr, 12)), (kr += 12))
                                                            : ((t = s), 0 === jr && Br(He)),
                                                          t === s &&
                                                            (n.substr(kr, 13).toLowerCase() === U
                                                              ? ((t = n.substr(kr, 13)), (kr += 13))
                                                              : ((t = s), 0 === jr && Br(Re)),
                                                            t === s &&
                                                              (n.substr(kr, 14).toLowerCase() === Y
                                                                ? ((t = n.substr(kr, 14)),
                                                                  (kr += 14))
                                                                : ((t = s), 0 === jr && Br(We)),
                                                              t === s &&
                                                                (n.substr(kr, 15).toLowerCase() ===
                                                                Z
                                                                  ? ((t = n.substr(kr, 15)),
                                                                    (kr += 15))
                                                                  : ((t = s), 0 === jr && Br(Ge)),
                                                                t === s &&
                                                                  (n.substr(kr, 7).toLowerCase() ===
                                                                  K
                                                                    ? ((t = n.substr(kr, 7)),
                                                                      (kr += 7))
                                                                    : ((t = s), 0 === jr && Br(Xe)),
                                                                  t === s &&
                                                                    (n
                                                                      .substr(kr, 5)
                                                                      .toLowerCase() === J
                                                                      ? ((t = n.substr(kr, 5)),
                                                                        (kr += 5))
                                                                      : ((t = s),
                                                                        0 === jr && Br(ze)),
                                                                    t === s &&
                                                                      (n
                                                                        .substr(kr, 10)
                                                                        .toLowerCase() === Q
                                                                        ? ((t = n.substr(kr, 10)),
                                                                          (kr += 10))
                                                                        : ((t = s),
                                                                          0 === jr &&
                                                                            Br(
                                                                              Ve
                                                                            )))))))))))))))))))),
                                  jr--,
                                  t === s && 0 === jr && Br(ke),
                                  t
                                )
                              })()) !== s
                                ? (an(),
                                  61 === n.charCodeAt(kr)
                                    ? ((o = g), kr++)
                                    : ((o = s), 0 === jr && Br(mt)),
                                  o !== s
                                    ? (an(),
                                      (i = Zr()) !== s
                                        ? (an(),
                                          (Er = t),
                                          (a = r),
                                          (u = i),
                                          (c = {}),
                                          'activation' === a.toLowerCase()
                                            ? (c.activation = e.flattenBoolean(u))
                                            : (c[a.toLowerCase().replace('colour', 'color')] = u),
                                          (t = c))
                                        : ((kr = t), (t = s)))
                                    : ((kr = t), (t = s)))
                                : ((kr = t), (t = s)),
                              t
                            )
                            var a, u, c
                          })()) === s &&
                            (t = (function () {
                              var t, e
                              return (
                                jr++,
                                (t = kr),
                                an(),
                                n.substr(kr, 8).toLowerCase() === P
                                  ? ((e = n.substr(kr, 8)), (kr += 8))
                                  : ((e = s), 0 === jr && Br(Ae)),
                                e === s &&
                                  (n.substr(kr, 10).toLowerCase() === D
                                    ? ((e = n.substr(kr, 10)), (kr += 10))
                                    : ((e = s), 0 === jr && Br(Se))),
                                e !== s
                                  ? (an(),
                                    (Er = t),
                                    (r = e),
                                    (t = { activation: 'activate' === r.toLowerCase() }))
                                  : ((kr = t), (t = s)),
                                jr--,
                                t === s && 0 === jr && Br(Ce),
                                t
                              )
                              var r
                            })()),
                          t
                        )
                      }
                      function Yr() {
                        var t, e, r, o
                        return (
                          jr++,
                          (t = kr),
                          34 === n.charCodeAt(kr)
                            ? ((e = tt), kr++)
                            : ((e = s), 0 === jr && Br(qe)),
                          e !== s
                            ? ((r = (function () {
                                var t, e, r, o
                                for (
                                  t = [],
                                    e = kr,
                                    r = kr,
                                    jr++,
                                    34 === n.charCodeAt(kr)
                                      ? ((o = tt), kr++)
                                      : ((o = s), 0 === jr && Br(qe)),
                                    jr--,
                                    o === s ? (r = void 0) : ((kr = r), (r = s)),
                                    r !== s
                                      ? (n.substr(kr, 2) === et
                                          ? ((o = et), (kr += 2))
                                          : ((o = s), 0 === jr && Br(Ue)),
                                        o === s &&
                                          (n.length > kr
                                            ? ((o = n.charAt(kr)), kr++)
                                            : ((o = s), 0 === jr && Br(Ye))),
                                        o !== s ? ((Er = e), (e = o)) : ((kr = e), (e = s)))
                                      : ((kr = e), (e = s));
                                  e !== s;

                                )
                                  t.push(e),
                                    (e = kr),
                                    (r = kr),
                                    jr++,
                                    34 === n.charCodeAt(kr)
                                      ? ((o = tt), kr++)
                                      : ((o = s), 0 === jr && Br(qe)),
                                    jr--,
                                    o === s ? (r = void 0) : ((kr = r), (r = s)),
                                    r !== s
                                      ? (n.substr(kr, 2) === et
                                          ? ((o = et), (kr += 2))
                                          : ((o = s), 0 === jr && Br(Ue)),
                                        o === s &&
                                          (n.length > kr
                                            ? ((o = n.charAt(kr)), kr++)
                                            : ((o = s), 0 === jr && Br(Ye))),
                                        o !== s ? ((Er = e), (e = o)) : ((kr = e), (e = s)))
                                      : ((kr = e), (e = s))
                                return t
                              })()),
                              34 === n.charCodeAt(kr)
                                ? ((o = tt), kr++)
                                : ((o = s), 0 === jr && Br(qe)),
                              o !== s ? ((Er = t), (t = r.join(''))) : ((kr = t), (t = s)))
                            : ((kr = t), (t = s)),
                          jr--,
                          t === s && ((e = s), 0 === jr && Br($e)),
                          t
                        )
                      }
                      function Zr() {
                        var t
                        return (
                          jr++,
                          (t = Kr()) === s && (t = Yr()),
                          jr--,
                          t === s && 0 === jr && Br(Ze),
                          t
                        )
                      }
                      function Kr() {
                        var t, e, r
                        if (
                          ((t = kr),
                          (e = []),
                          nt.test(n.charAt(kr))
                            ? ((r = n.charAt(kr)), kr++)
                            : ((r = s), 0 === jr && Br(Ke)),
                          r !== s)
                        )
                          for (; r !== s; )
                            e.push(r),
                              nt.test(n.charAt(kr))
                                ? ((r = n.charAt(kr)), kr++)
                                : ((r = s), 0 === jr && Br(Ke))
                        else e = s
                        return e !== s && ((Er = t), (e = e.join(''))), e
                      }
                      function Jr() {
                        var t, e
                        return (
                          jr++,
                          (t = kr),
                          ot.test(n.charAt(kr))
                            ? ((e = n.charAt(kr)), kr++)
                            : ((e = s), 0 === jr && Br(Qe)),
                          e !== s && ((Er = t), (e = e)),
                          jr--,
                          (t = e) === s && ((e = s), 0 === jr && Br(Je)),
                          t
                        )
                      }
                      function Qr() {
                        var t, e
                        return (
                          jr++,
                          (t = kr),
                          it.test(n.charAt(kr))
                            ? ((e = n.charAt(kr)), kr++)
                            : ((e = s), 0 === jr && Br(er)),
                          e !== s && ((Er = t), (e = e)),
                          jr--,
                          (t = e) === s && ((e = s), 0 === jr && Br(tr)),
                          t
                        )
                      }
                      function tn() {
                        var t, e, r
                        return (
                          (t = kr),
                          (e = kr),
                          jr++,
                          n.substr(kr, 2) === rt
                            ? ((r = rt), (kr += 2))
                            : ((r = s), 0 === jr && Br(nr)),
                          jr--,
                          r === s ? (e = void 0) : ((kr = e), (e = s)),
                          e !== s
                            ? (n.length > kr
                                ? ((r = n.charAt(kr)), kr++)
                                : ((r = s), 0 === jr && Br(Ye)),
                              r !== s ? ((Er = t), (t = r)) : ((kr = t), (t = s)))
                            : ((kr = t), (t = s)),
                          t
                        )
                      }
                      function en() {
                        var t, e, r, o, i
                        if (
                          ((t = kr),
                          (e = (function () {
                            var t
                            return (
                              '/*' === n.substr(kr, 2)
                                ? ((t = '/*'), (kr += 2))
                                : ((t = s), 0 === jr && Br(rr)),
                              t
                            )
                          })()) !== s)
                        ) {
                          for (r = [], o = tn(); o !== s; ) r.push(o), (o = tn())
                          ;(o = (function () {
                            var t
                            return (
                              n.substr(kr, 2) === rt
                                ? ((t = rt), (kr += 2))
                                : ((t = s), 0 === jr && Br(nr)),
                              t
                            )
                          })()) !== s
                            ? ((Er = t), (i = o), (t = e + r.join('') + i))
                            : ((kr = t), (t = s))
                        } else (kr = t), (t = s)
                        return t
                      }
                      function rn() {
                        var t
                        return (
                          at.test(n.charAt(kr))
                            ? ((t = n.charAt(kr)), kr++)
                            : ((t = s), 0 === jr && Br(ar)),
                          t
                        )
                      }
                      function nn() {
                        var t, e, r, o
                        if (
                          ((t = kr),
                          (e = (function () {
                            var t
                            return (
                              '//' === n.substr(kr, 2)
                                ? ((t = '//'), (kr += 2))
                                : ((t = s), 0 === jr && Br(or)),
                              t === s &&
                                (35 === n.charCodeAt(kr)
                                  ? ((t = '#'), kr++)
                                  : ((t = s), 0 === jr && Br(ir))),
                              t
                            )
                          })()) !== s)
                        ) {
                          for (r = [], o = rn(); o !== s; ) r.push(o), (o = rn())
                          ;(Er = t), (t = e + r.join(''))
                        } else (kr = t), (t = s)
                        return t
                      }
                      function on() {
                        var t
                        return (
                          jr++,
                          (t = nn()) === s && (t = en()),
                          jr--,
                          t === s && 0 === jr && Br(ur),
                          t
                        )
                      }
                      function an() {
                        var t, e
                        for (t = [], (e = Jr()) === s && (e = Qr()) === s && (e = on()); e !== s; )
                          t.push(e), (e = Jr()) === s && (e = Qr()) === s && (e = on())
                        return t
                      }
                      function un() {
                        var t
                        return (
                          (t = (function () {
                            var t, e, r, o, i
                            return (
                              (t = kr),
                              (e = kr),
                              (r = cn()) !== s
                                ? (46 === n.charCodeAt(kr)
                                    ? ((o = '.'), kr++)
                                    : ((o = s), 0 === jr && Br(lr)),
                                  o !== s && (i = cn()) !== s
                                    ? (e = r = [r, o, i])
                                    : ((kr = e), (e = s)))
                                : ((kr = e), (e = s)),
                              e !== s && ((Er = t), (a = e), (e = parseFloat(a.join('')))),
                              e
                            )
                            var a
                          })()) === s && (t = cn()),
                          t
                        )
                      }
                      function cn() {
                        var t, e, r
                        if (
                          ((t = kr),
                          (e = []),
                          ut.test(n.charAt(kr))
                            ? ((r = n.charAt(kr)), kr++)
                            : ((r = s), 0 === jr && Br(sr)),
                          r !== s)
                        )
                          for (; r !== s; )
                            e.push(r),
                              ut.test(n.charAt(kr))
                                ? ((r = n.charAt(kr)), kr++)
                                : ((r = s), 0 === jr && Br(sr))
                        else e = s
                        return e !== s && ((Er = t), (e = parseInt(e.join(''), 10))), e
                      }
                      function sn() {
                        var t, e
                        return (
                          jr++,
                          (t = kr),
                          (e = (function () {
                            var t, e, r, o
                            return (
                              (t = kr),
                              34 === n.charCodeAt(kr)
                                ? ((e = tt), kr++)
                                : ((e = s), 0 === jr && Br(qe)),
                              e !== s && (r = ln()) !== s
                                ? (34 === n.charCodeAt(kr)
                                    ? ((o = tt), kr++)
                                    : ((o = s), 0 === jr && Br(qe)),
                                  o !== s ? ((Er = t), (t = r)) : ((kr = t), (t = s)))
                                : ((kr = t), (t = s)),
                              t
                            )
                          })()) !== s && ((Er = t), (e = e)),
                          (t = e) === s &&
                            ((t = kr), (e = ln()) !== s && ((Er = t), (e = e.toString())), (t = e)),
                          jr--,
                          t === s && ((e = s), 0 === jr && Br(fr)),
                          t
                        )
                      }
                      function ln() {
                        var t
                        return (
                          'true' === n.substr(kr, 4).toLowerCase()
                            ? ((t = n.substr(kr, 4)), (kr += 4))
                            : ((t = s), 0 === jr && Br(dr)),
                          t === s &&
                            ('false' === n.substr(kr, 5).toLowerCase()
                              ? ((t = n.substr(kr, 5)), (kr += 5))
                              : ((t = s), 0 === jr && Br(hr)),
                            t === s &&
                              ('on' === n.substr(kr, 2).toLowerCase()
                                ? ((t = n.substr(kr, 2)), (kr += 2))
                                : ((t = s), 0 === jr && Br(pr)),
                              t === s &&
                                ('off' === n.substr(kr, 3).toLowerCase()
                                  ? ((t = n.substr(kr, 3)), (kr += 3))
                                  : ((t = s), 0 === jr && Br(gr)),
                                t === s &&
                                  (48 === n.charCodeAt(kr)
                                    ? ((t = '0'), kr++)
                                    : ((t = s), 0 === jr && Br(br)),
                                  t === s &&
                                    (49 === n.charCodeAt(kr)
                                      ? ((t = '1'), kr++)
                                      : ((t = s), 0 === jr && Br(mr))))))),
                          t
                        )
                      }
                      function fn() {
                        var t, e
                        return (
                          (t = kr),
                          (e = un()) !== s && ((Er = t), (e = e.toString())),
                          (t = e) === s &&
                            ((t = kr),
                            'auto' === n.substr(kr, 4).toLowerCase()
                              ? ((e = n.substr(kr, 4)), (kr += 4))
                              : ((e = s), 0 === jr && Br(vr)),
                            e !== s && ((Er = t), (e = e.toLowerCase())),
                            (t = e)),
                          t
                        )
                      }
                      if ((i = d()) !== s && kr === n.length) return i
                      throw (
                        (i !== s && kr < n.length && Br({ type: 'end' }),
                        (a = Mr),
                        (u = Tr < n.length ? n.charAt(Tr) : null),
                        (c = Tr < n.length ? Dr(Tr, Tr + 1) : Dr(Tr, Tr)),
                        new r(r.buildMessage(a, u), a, u, c))
                      )
                    },
                  }
                )
              })
                ? n.apply(e, o)
                : n) || (t.exports = i)
      },
      596: (t, e) => {
        'use strict'
        e.__esModule = !0
        var r = Object.freeze({
          '|||': 'empty',
          '...': 'empty',
          '---': 'empty',
          '->': 'directional',
          '=>': 'directional',
          '=>>': 'directional',
          '>>': 'directional',
          ':>': 'directional',
          '-x': 'directional',
          '<-': 'directional',
          '<=': 'directional',
          '<<=': 'directional',
          '<<': 'directional',
          '<:': 'directional',
          'x-': 'directional',
          note: 'box',
          box: 'box',
          abox: 'box',
          rbox: 'box',
          '<->': 'bidirectional',
          '<=>': 'bidirectional',
          '<<=>>': 'bidirectional',
          '<<>>': 'bidirectional',
          '<:>': 'bidirectional',
          '--': 'nondirectional',
          '==': 'nondirectional',
          '..': 'nondirectional',
          '::': 'nondirectional',
          alt: 'inline_expression',
          else: 'inline_expression',
          opt: 'inline_expression',
          break: 'inline_expression',
          par: 'inline_expression',
          seq: 'inline_expression',
          strict: 'inline_expression',
          neg: 'inline_expression',
          critical: 'inline_expression',
          ignore: 'inline_expression',
          consider: 'inline_expression',
          assert: 'inline_expression',
          loop: 'inline_expression',
          ref: 'inline_expression',
          exc: 'inline_expression',
        })
        e.default = function (t) {
          return r[t]
        }
      },
      940: (t, e) => {
        'use strict'
        function r(t, e, n) {
          e.forEach(function (e) {
            !(function (t, e, n) {
              e.forEach(function (o) {
                !(function (t, e, r, n) {
                  n.forEach(function (n) {
                    n(r, t, e)
                  })
                })(t, e, o, n),
                  o.arcs && r(t, o.arcs, n)
              })
            })(t, e, n)
          })
        }
        ;(e.__esModule = !0),
          (e.default = function (t, e, n) {
            var o, i
            return (
              (o = t.entities),
              (i = e),
              o.forEach(function (t) {
                i.forEach(function (e) {
                  e(t)
                })
              }),
              t.arcs && r(t.entities, t.arcs, n),
              t
            )
          })
      },
      597: function (t, e, r) {
        'use strict'
        var n =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t }
            },
          o =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t
              var e = {}
              if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r])
              return (e.default = t), e
            }
        e.__esModule = !0
        var i = n(r(940)),
          a = n(r(465)),
          u = o(r(367)),
          c = n(r(596)),
          s = n(r(975)),
          l = n(r(925)),
          f = 0
        function d(t) {
          void 0 === t.label && (t.label = t.name)
        }
        function h(t) {
          t.label && (t.label = u.unescapeString(t.label)), t.id && (t.id = u.unescapeString(t.id))
        }
        function p(t) {
          t.label = Boolean(t.label) ? t.label : ''
        }
        function g(t) {
          if (s.default(t.kind) !== t.kind) {
            t.kind = s.default(t.kind)
            var e = t.from
            ;(t.from = t.to), (t.to = e)
          }
        }
        function b(t, e) {
          !t.linecolor && e.arclinecolor && (t.linecolor = e.arclinecolor),
            !t.textcolor && e.arctextcolor && (t.textcolor = e.arctextcolor),
            !t.textbgcolor && e.arctextbgcolor && (t.textbgcolor = e.arctextbgcolor)
        }
        function m(t, e) {
          if ((void 0 === e && (e = []), t && t.from)) {
            var r = e.find(function (e) {
              return e.name === t.from
            })
            r && b(t, r)
          }
        }
        function y(t) {
          return t.arcs.reduce(function (t, e) {
            return t + (Boolean(e[0].arcs) ? y(e[0]) + 1 : 0)
          }, t.arcs.length)
        }
        function v(t, e, r, n) {
          var o = [],
            i = [],
            u = []
          return (
            t.forEach(function (t) {
              if (((t.isVirtual = !1), 'inline_expression' === c.default(t.kind))) {
                if (((t.depth = e), (t.isVirtual = !0), t.arcs)) {
                  var o = a.default(t)
                  ;(o.numberofrows = y(o)),
                    delete o.arcs,
                    i.push(o),
                    t.arcs.forEach(function (t) {
                      ;(u = u.concat(v(t, e + 1, o.from, o.to))),
                        t.forEach(function (t) {
                          b(t, o)
                        })
                    }),
                    e > f && (f = e)
                } else i.push(t)
                u.push([{ kind: '|||', from: t.from, to: t.to, isVirtual: !0 }])
              } else r && n && 'empty' === c.default(t.kind) && ((t.from = r), (t.to = n), (t.depth = e)), i.push(t)
            }),
            o.push(i),
            o.concat(u)
          )
        }
        function x(t) {
          return (
            (f = 0),
            {
              options: l.default(t.options),
              entities: a.default(t.entities),
              arcs:
                ((e = t.arcs),
                e
                  ? e.reduce(function (t, e) {
                      return t.concat(v(e, 0))
                    }, [])
                  : []),
              depth: f + 1,
            }
          )
          var e
        }
        ;(e.nameAsLabel = d),
          (e.swapRTLArc = g),
          (e.overrideColors = m),
          (e.normalize = x),
          (e.flatten = function (t) {
            return x(i.default(t, [d, h], [g, m, h, p]))
          })
      },
      975: (t, e) => {
        'use strict'
        e.__esModule = !0
        var r = Object.freeze({
          '<-': '->',
          '<=': '=>',
          '<<=': '=>>',
          '<<': '>>',
          '<:': ':>',
          'x-': '-x',
        })
        e.default = function (t) {
          return r[t] || t
        }
      },
      925: (t, e) => {
        'use strict'
        ;(e.__esModule = !0),
          (e.default = function (t) {
            return Object.assign(
              { wordwraparcs: !1, wordwrapentities: !0, wordwrapboxes: !0 },
              t || {}
            )
          })
      },
      866: (t, e) => {
        'use strict'
        ;(e.__esModule = !0), (e.default = { LINE_WIDTH: 2, FONT_SIZE: 12 })
      },
      22: (t) => {
        'use strict'
        t.exports = JSON.parse(
          '{"baseTemplate":"svg.<%=id%>{font-family:Helvetica,sans-serif;font-size:<%=fontSize%>px;font-weight:normal;font-style:normal;text-decoration:none;background-color:white;stroke:black;stroke-width:<%=lineWidth%>}.<%=id%> path, .<%=id%> rect{fill:none}.<%=id%> .label-text-background{fill:white;stroke:white;stroke-width:0}.<%=id%> .bglayer{fill:white;stroke:white;stroke-width:0}.<%=id%> line{}.<%=id%> .return, .<%=id%> .comment{stroke-dasharray:5,3}.<%=id%> .inline_expression_divider{stroke-dasharray:10,5}.<%=id%> text{color:inherit;stroke:none;text-anchor:middle}.<%=id%> text.anchor-start{text-anchor:start}.<%=id%> .arrow-marker{overflow:visible}.<%=id%> .arrow-style{stroke-width:1}.<%=id%> .arcrow, .<%=id%> .arcrowomit, .<%=id%> .emphasised{stroke-linecap:butt}.<%=id%> .arcrowomit{stroke-dasharray:2,2}.<%=id%> .box, .<%=id%> .entity{fill:white;stroke-linejoin:round}.<%=id%> .inherit{stroke:inherit;color:inherit}.<%=id%> .inherit-fill{fill:inherit}.<%=id%> .watermark{font-size:48pt;font-weight:bold;opacity:0.14}","namedStyles":[{"name":"basic","description":"Basic","experimental":false,"deprecated":false,"renderMagic":"straight","cssBefore":"","cssAfter":".<%=id%> text.entity-text{text-decoration:underline;}"},{"name":"lazy","description":"Lazy","experimental":false,"deprecated":false,"renderMagic":"straight","cssBefore":"","cssAfter":".<%=id%> text.entity-text{font-weight:bold;}.<%=id%> text.return-text{font-style:italic}.<%=id%> path.note{fill:#FFFFCC}.<%=id%> rect.label-text-background{opacity:0.9}.<%=id%> line.comment,.<%=id%> rect.inline_expression,.<%=id%> .inline_expression_divider,.<%=id%> .inline_expression_label{stroke:grey}"},{"name":"classic","description":"Classic","experimental":false,"deprecated":false,"renderMagic":"straight","cssBefore":"","cssAfter":".<%=id%> text.entity-text{text-decoration:none}.<%=id%> .entity{stroke:none;}.<%=id%> line,.<%=id%> rect,.<%=id%> path{stroke-width:1px}.<%=id%> .arrow-style{stroke-width:2;}.<%=id%> .inline_expression,.<%=id%> .inline_expression_divider,.<%=id%> .inline_expression_label{stroke-width: 1px}"},{"name":"fountainpen","description":"Fountain pen","experimental":true,"deprecated":false,"renderMagic":"wobbly","cssBefore":"@import \'https://fonts.googleapis.com/css?family=Gochi+Hand\';","cssAfter":"svg.<%=id%>{font-family:\'Gochi Hand\', cursive;font-size:14px;stroke-opacity:0.4;stroke-linecap:round;background-color:transparent}.<%=id%> text{fill:rgba(0,0,128,0.7)}.<%=id%> marker polygon{fill:rgba(0,0,255,0.4);stroke-linejoin:round}.<%=id%> line, .<%=id%> path, .<%=id%> rect, .<%=id%> polygon{stroke:blue !important}.<%=id%> text.entity-text{font-weight:bold;text-decoration:none}.<%=id%> text.return-text{font-style:italic}.<%=id%> path.note{fill:#FFFFCC;}.<%=id%> .label-text-background{opacity:0}"},{"name":"cygne","description":"Cygne (best with msgenny)","experimental":true,"deprecated":true,"renderMagic":"straight","cssBefore":"","cssAfter":".<%=id%> line, .<%=id%> path{stroke:#00A1DE}.<%=id%> text{fill:#005B82}.<%=id%> .entity,.<%=id%> .box{fill:#00A1DE;stroke:#00A1DE}.<%=id%> text.box-text{fill:white}.<%=id%> text.entity-text{font-weight:bold;fill:white;text-decoration:none}.<%=id%> text.return-text{font-style:italic}.<%=id%> path.note{fill:#E77B2F;stroke:white}.<%=id%> .comment,.<%=id%> .inline_expression,.<%=id%> .inline_expression_divider,.<%=id%> .inline_expression_label{fill:white}"},{"name":"pegasse","description":"P??gase (best with msgenny)","experimental":false,"deprecated":true,"renderMagic":"straight","cssBefore":"","cssAfter":".<%=id%> line, .<%=id%> path{stroke:rgba(0, 43, 84, 1)}.<%=id%> text{fill:rgba(0, 43, 84, 1)}.<%=id%> .entity,.<%=id%> .box{fill:rgba(0, 43, 84, 1);stroke:rgba(0, 43, 84, 1)}.<%=id%> text.box-text{fill:white}.<%=id%> text.entity-text{font-weight:bold;fill:white;text-decoration:none}.<%=id%> text.return-text{font-style:italic}.<%=id%> path.note{fill:rgba(255, 50, 0, 1);stroke:white}.<%=id%> .comment,.<%=id%> .inline_expression,.<%=id%> .inline_expression_divider,.<%=id%> .inline_expression_label{fill:white}"},{"name":"grayscaled","description":"Grayscaled (not in IE or Safari)","experimental":true,"deprecated":false,"renderMagic":"straight","cssBefore":"","cssAfter":"svg.<%=id%>{filter:grayscale(1);-webkit-filter:grayscale(1);}"},{"name":"inverted","description":"Inverted (not in IE or Safari)","experimental":true,"deprecated":false,"renderMagic":"straight","cssBefore":"","cssAfter":"svg.<%=id%>{filter:invert(1);-webkit-filter:invert(1);}"},{"name":"noentityboxes","description":"No entity boxes","experimental":false,"deprecated":false,"renderMagic":"straight","cssBefore":"","cssAfter":".<%=id%> .entity{fill:none;stroke:none;}.<%=id%> text.entity-text{text-decoration:underline;}"}]}'
        )
      },
      489: function (t, e, r) {
        'use strict'
        var n =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t }
            },
          o =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t
              var e = {}
              if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r])
              return (e.default = t), e
            }
        e.__esModule = !0
        var i = n(r(866)),
          a = o(r(631)),
          u = o(r(683)),
          c = o(r(930)),
          s = (function () {
            function t(t) {
              ;(this.interEntitySpacing = 160),
                (this.height = 34),
                (this.width = 100),
                (this.entityXHWM = 0),
                (this.entity2x = {}),
                t && ((this.interEntitySpacing = 160 * t), (this.width = 100 * t))
            }
            return (
              (t.prototype.getX = function (t) {
                return this.entity2x[t]
              }),
              (t.prototype.getDims = function () {
                return {
                  interEntitySpacing: this.interEntitySpacing,
                  height: this.height,
                  width: this.width,
                  entityXHWM: this.entityXHWM,
                }
              }),
              (t.prototype.getOAndD = function (t, e) {
                return {
                  from: this.getX(t) < this.getX(e) ? this.getX(t) : this.getX(e),
                  to: this.getX(e) > this.getX(t) ? this.getX(e) : this.getX(t),
                }
              }),
              (t.prototype.renderEntities = function (t, e, r) {
                var n = this,
                  o = u.createGroup()
                return (
                  (this.entityXHWM = 0),
                  (this.height = this.getMaxEntityHeight(t, r) + 2 * i.default.LINE_WIDTH),
                  t.forEach(function (t) {
                    o.appendChild(n.renderEntity(t, n.entityXHWM, e, r)),
                      n.setX(t, n.entityXHWM),
                      (n.entityXHWM += n.interEntitySpacing)
                  }),
                  o
                )
              }),
              (t.prototype.setX = function (t, e) {
                this.entity2x[t.name] = e + this.width / 2
              }),
              (t.prototype.getNoEntityLines = function (t, e, r) {
                return a.splitLabel(t, 'entity', this.width, e, r).length
              }),
              (t.prototype.sizeEntityBoxToLabel = function (t, e) {
                var r = Math.min(
                  c.getBBox(t).width + 4 * i.default.LINE_WIDTH,
                  this.interEntitySpacing / 3 + e.width
                )
                return r >= e.width && ((e.x -= (r - e.width) / 2), (e.width = r)), e
              }),
              (t.prototype.renderEntity = function (t, e, r, n) {
                var o = u.createGroup(),
                  i = { x: e || 0, y: r || 0, width: this.width, height: this.height },
                  c = a.createLabel(
                    Object.assign({ kind: 'entity' }, t),
                    Object.assign({}, i, { y: i.y + i.height / 2 }),
                    n
                  )
                return (
                  o.appendChild(
                    u.createRect(this.sizeEntityBoxToLabel(c, i), {
                      class: 'entity',
                      color: t.linecolor,
                      bgColor: t.textbgcolor,
                    })
                  ),
                  o.appendChild(c),
                  o
                )
              }),
              (t.prototype.getMaxEntityHeight = function (t, e) {
                var r = this,
                  n = t[0],
                  o = 2
                return (
                  t.forEach(function (t) {
                    var a = r.getNoEntityLines(t.label, i.default.FONT_SIZE, e)
                    a > o && ((o = a), (n = t))
                  }),
                  o > 2
                    ? Math.max(this.height, c.getBBox(this.renderEntity(n, 0, 0, e)).height)
                    : this.height
                )
              }),
              t
            )
          })()
        e.Thing = s
      },
      824: (t, e) => {
        'use strict'
        e.__esModule = !0
        var r = 'mscgenjs',
          n = r
        ;(e.setPrefix = function (t) {
          n = r + t
        }),
          (e.get = function (t) {
            return n + (t || '')
          })
      },
      622: function (t, e, r) {
        'use strict'
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t }
          }
        e.__esModule = !0
        var o = n(r(596)),
          i = Object.freeze({
            '|||': 'empty-row',
            '...': 'omitted-row',
            '---': 'comment-row',
            '->': 'signal',
            '=>': 'method',
            '=>>': 'callback',
            '>>': 'return',
            ':>': 'emphasised',
            '-x': 'lost',
            '<-': 'signal',
            '<=': 'method',
            '<<=': 'callback',
            '<<': 'return',
            '<:': 'emphasised',
            'x-': 'lost',
            '<->': 'signal',
            '<=>': 'method',
            '<<=>>': 'callback',
            '<<>>': 'return',
            '<:>': 'emphasised',
            '--': 'signal',
            '==': 'method',
            '..': 'return',
            '::': 'emphasised',
          })
        ;(e.getClass = function (t) {
          return i[t] || t
        }),
          (e.getAggregateClass = function (t) {
            return o.default(t) || t
          })
      },
      853: function (t, e, r) {
        'use strict'
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t }
          }
        e.__esModule = !0
        var o = n(r(800)),
          i = n(r(975)),
          a = {
            '->': {
              attributes: [
                { name: 'style', value: 'stroke:{{color}}' },
                { name: 'marker-end', value: 'url(#{{id}}{{signal-marker-end}}-{{color}})' },
              ],
              marker: { name: 'signal' },
            },
            '<->': {
              attributes: [
                { name: 'style', value: 'stroke:{{color}}' },
                { name: 'marker-end', value: 'url(#{{id}}{{signal-marker-end}}-{{color}})' },
                { name: 'marker-start', value: 'url(#{{id}}{{signal-marker-start}}-{{color}})' },
              ],
              marker: { name: 'signal' },
            },
            '=>>': {
              attributes: [
                { name: 'style', value: 'stroke:{{color}}' },
                { name: 'marker-end', value: 'url(#{{id}}callback-{{color}})' },
              ],
              marker: { name: 'callback', end: '' },
            },
            '<<=>>': {
              attributes: [
                { name: 'style', value: 'stroke:{{color}}' },
                { name: 'marker-end', value: 'url(#{{id}}callback-{{color}})' },
                { name: 'marker-start', value: 'url(#{{id}}callback-l-{{color}})' },
              ],
              marker: { name: 'callback', end: '', start: '-l' },
            },
            '>>': {
              attributes: [
                { name: 'style', value: 'stroke:{{color}}' },
                { name: 'marker-end', value: 'url(#{{id}}callback-{{color}})' },
              ],
              marker: { name: 'callback', end: '' },
            },
            '<<>>': {
              attributes: [
                { name: 'style', value: 'stroke:{{color}}' },
                { name: 'marker-end', value: 'url(#{{id}}callback-{{color}})' },
                { name: 'marker-start', value: 'url(#{{id}}callback-l-{{color}})' },
              ],
              marker: { name: 'callback', end: '', start: '-l' },
            },
            '..': { attributes: [{ name: 'style', value: 'stroke:{{color}}' }] },
            '--': { attributes: [{ name: 'style', value: 'stroke:{{color}}' }] },
            '==': { attributes: [{ name: 'style', value: 'stroke:{{color}}' }] },
            '::': { attributes: [{ name: 'style', value: 'stroke:{{color}}' }] },
            '=>': {
              attributes: [
                { name: 'style', value: 'stroke:{{color}}' },
                { name: 'marker-end', value: 'url(#{{id}}method-{{color}})' },
              ],
              marker: { name: 'method', end: '' },
            },
            '<=>': {
              attributes: [
                { name: 'style', value: 'stroke:{{color}}' },
                { name: 'marker-end', value: 'url(#{{id}}method-{{color}})' },
                { name: 'marker-start', value: 'url(#{{id}}method-l-{{color}})' },
              ],
              marker: { name: 'method', end: '', start: '-l' },
            },
            ':>': {
              attributes: [
                { name: 'style', value: 'stroke:{{color}};' },
                { name: 'marker-end', value: 'url(#{{id}}method-{{color}})' },
              ],
              marker: { name: 'method', end: '' },
            },
            '<:>': {
              attributes: [
                { name: 'style', value: 'stroke:{{color}}' },
                { name: 'marker-end', value: 'url(#{{id}}method-{{color}})' },
                { name: 'marker-start', value: 'url(#{{id}}method-l-{{color}})' },
              ],
              marker: { name: 'method', end: '', start: '-l' },
            },
            '-x': {
              attributes: [
                { name: 'style', value: 'stroke:{{color}}' },
                { name: 'marker-end', value: 'url(#{{id}}lost-{{color}})' },
              ],
              marker: { name: 'lost', end: '' },
            },
          },
          u = {
            signal: {
              variants: [
                { name: '', path: 'M9,3 l-8, 2' },
                { name: '-u', path: 'M9,3 l-8,-2' },
                { name: '-l', path: 'M9,3 l 8, 2' },
                { name: '-lu', path: 'M9,3 l 8,-2' },
              ],
            },
            method: {
              variants: [
                { name: '', path: '1,1  9,3  1,5' },
                { name: '-l', path: '17,1 9,3 17,5' },
              ],
            },
            callback: {
              variants: [
                { name: '', path: 'M 1,1 l 8,2 l-8,2' },
                { name: '-l', path: 'M17,1 l-8,2 l 8,2' },
              ],
            },
            lost: { variants: [{ name: '', path: 'M7,0 l5,6 M7,6 l5,-6' }] },
          }
        function c(t, e, r) {
          return e && r && ['<->', '->'].includes(t) ? (e < r ? 'signal' : 'signal-u') : ''
        }
        function s(t, e, r) {
          return '<->' === t && e <= r ? 'signal-l' : 'signal-lu'
        }
        function l(t, e) {
          return a[i.default(t)].marker.name + (Boolean(e) ? ' ' + e : ' black')
        }
        function f(t, e) {
          function r(e) {
            f(t, e)
          }
          return (
            Array.isArray(e) && e.forEach(r),
            e.arcs && e.arcs.forEach(r),
            e.kind &&
              a[i.default(e.kind)] &&
              a[i.default(e.kind)].marker &&
              !t.includes(l(e.kind, e.linecolor)) &&
              t.push(l(e.kind, e.linecolor)),
            t
          )
        }
        function d(t) {
          return { kind: t.split(' ')[0], color: t.split(' ')[1] }
        }
        ;(e.getAttributes = function (t, e, r, n, o) {
          var i = []
          return (
            a[e] &&
              a[e].attributes &&
              (i = a[e].attributes.map(function (i) {
                return {
                  name: i.name,
                  value: i.value
                    .replace(/\{\{signal-marker-end\}\}/g, c(e, n, o))
                    .replace(/\{\{signal-marker-start\}\}/g, s(e, n, o))
                    .replace(/\{\{id\}\}/g, t)
                    .replace(/\{\{color\}\}/g, r || 'black'),
                }
              })),
            i
          )
        }),
          (e.getMarkerDefs = function (t, e) {
            return o.default(
              (function (t) {
                return t.arcs.reduce(f, []).sort().map(d)
              })(e).map(function (e) {
                return u[e.kind].variants.map(function (r) {
                  return {
                    name: t + e.kind + r.name + '-' + e.color,
                    path: r.path,
                    color: e.color,
                    type: e.kind,
                  }
                })
              })
            )
          })
      },
      533: function (t, e, r) {
        'use strict'
        var n =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t }
            },
          o =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t
              var e = {}
              if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r])
              return (e.default = t), e
            }
        e.__esModule = !0
        var i = n(r(465)),
          a = n(r(596)),
          u = r(597),
          c = n(r(866)),
          s = r(489),
          l = o(r(824)),
          f = o(r(622)),
          d = o(r(853)),
          h = o(r(631)),
          p = o(r(525)),
          g = o(r(173)),
          b = o(r(621)),
          m = o(r(683)),
          y = o(r(930)),
          v = new s.Thing(0),
          x = Object.seal({
            arcRowHeight: 38,
            arcGradient: 0,
            arcEndX: 0,
            wordWrapArcs: !1,
            mirrorEntitiesOnBottom: !1,
            regularArcTextVerticalAlignment: 'middle',
            maxDepth: 0,
            document: {},
            layers: { lifeline: {}, sequence: {}, notes: {}, inline: {}, watermark: {} },
          }),
          w = []
        function _(t, e, r) {
          x.layers.sequence.appendChild(v.renderEntities(t, e, r)),
            (x.arcEndX =
              v.getDims().entityXHWM - v.getDims().interEntitySpacing + v.getDims().width)
        }
        function C(t, e, r, n, o) {
          var a = m.createGroup()
          return (
            t.from &&
              t.to &&
              ('*' === t.to
                ? ((function (t, e, r, n, o) {
                    var i = 0,
                      a = t.label,
                      u = v.getX(t.from)
                    ;(t.label = ''),
                      e.forEach(function (e) {
                        var a = {}
                        e.name !== t.from &&
                          ((i = v.getX(e.name)),
                          (a = L(t, u, i, n, o)),
                          r.push({ layer: x.layers.sequence, element: a }))
                      }),
                      (t.label = a)
                  })(t, e, r, n, o),
                  (a = h.createLabel(
                    t,
                    { x: 0, y: b.get(n).y, width: x.arcEndX },
                    Object.assign({ alignAround: !0, ownBackground: !0 }, i.default(o))
                  )),
                  r.push({ title: t.title, layer: x.layers.sequence, element: a }))
                : ((a = L(t, v.getX(t.from), v.getX(t.to), n, o)),
                  r.push({ title: t.title, layer: x.layers.sequence, element: a }))),
            a
          )
        }
        function A(t, e, r) {
          var n = 0
          return (
            t.forEach(function (t) {
              var o
              switch (a.default(t.kind)) {
                case 'empty':
                  o = E(t, 0)
                  break
                case 'box':
                  o = M(v.getOAndD(t.from, t.to), t, 0, r)
                  break
                case 'inline_expression':
                  o = S(t, 0)
                  break
                default:
                  var u = i.default(t)
                  ;(u.arcskip = 0), (o = C(u, e, [], 0, r))
              }
              n = Math.max(n, y.getBBox(o).height + 2 * c.default.LINE_WIDTH)
            }),
            n
          )
        }
        function S(t, e) {
          var r = v.getOAndD(t.from, t.to),
            n = e > 0,
            o = 2 * x.maxDepth * c.default.LINE_WIDTH,
            i =
              r.to -
              r.from +
              (v.getDims().interEntitySpacing - 2 * c.default.LINE_WIDTH) -
              7 -
              c.default.LINE_WIDTH,
            a =
              r.from -
              (v.getDims().interEntitySpacing - 3 * c.default.LINE_WIDTH - o) / 2 -
              2 * (x.maxDepth - t.depth) * c.default.LINE_WIDTH,
            u = m.createGroup()
          n || (t.label = t.kind + (t.label ? ': ' + t.label : ''))
          var s = h.createLabel(
              t,
              { x: a + c.default.LINE_WIDTH - i / 2, y: e + x.arcRowHeight / 4, width: i },
              { alignLeft: !0, ownBackground: !1, wordwraparcs: x.wordWrapArcs }
            ),
            l = y.getBBox(s),
            f = Math.max(
              l.height + 2 * c.default.LINE_WIDTH,
              x.arcRowHeight / 2 - 2 * c.default.LINE_WIDTH
            ),
            d = Math.min(l.width + 2 * c.default.LINE_WIDTH, i),
            p = m.createEdgeRemark(
              { width: d - c.default.LINE_WIDTH + 7, height: f, x: a, y: e },
              {
                class: 'box inline_expression_label',
                color: t.linecolor,
                bgColor: t.textbgcolor,
                foldSize: 7,
              }
            )
          return u.appendChild(p), u.appendChild(s), u
        }
        function k(t, e, r, n) {
          return (
            r < x.arcRowHeight && (r = x.arcRowHeight),
            t.map(function (t) {
              var o = m.createLine(
                {
                  xFrom: v.getX(t.name),
                  yFrom: 0 - r / 2 + (n || 0),
                  xTo: v.getX(t.name),
                  yTo: r / 2 + (n || 0),
                },
                { class: e }
              )
              return t.linecolor && o.setAttribute('style', 'stroke:' + t.linecolor + ';'), o
            })
          )
        }
        function E(t, e) {
          return '---' === t.kind
            ? (function (t, e, r) {
                var n = 0,
                  o = x.arcEndX,
                  i = 'comment',
                  a = m.createGroup()
                if (t.from && t.to) {
                  var u = 1 * x.maxDepth * c.default.LINE_WIDTH,
                    s = 2 * (x.maxDepth - t.depth) * c.default.LINE_WIDTH
                  ;(n =
                    e.from -
                    (v.getDims().interEntitySpacing + 2 * c.default.LINE_WIDTH) / 2 -
                    (s - u)),
                    (o =
                      e.to +
                      (v.getDims().interEntitySpacing + 2 * c.default.LINE_WIDTH) / 2 +
                      (s - u)),
                    (i = 'inline_expression_divider')
                }
                var l = m.createLine({ xFrom: n, yFrom: r, xTo: o, yTo: r }, { class: i })
                return (
                  a.appendChild(l),
                  a.appendChild(T(t, e, r)),
                  t.linecolor && l.setAttribute('style', 'stroke:' + t.linecolor + ';'),
                  a
                )
              })(t, v.getOAndD(t.from, t.to), e)
            : T(t, v.getOAndD(t.from, t.to), e)
        }
        function L(t, e, r, n, o) {
          var a,
            u = m.createGroup(),
            s = 'arc '
          ;(s += '<:>' === (a = t.kind) ? 'bidi ' : '::' === a ? 'nodi ' : ''),
            (s += f.getAggregateClass(t.kind) + ' ' + f.getClass(t.kind))
          var p = [':>', '::', '<:>'].includes(t.kind),
            y = (function (t, e, r) {
              var n = b.get(t).y + e
              if (r) {
                var o = Math.floor(r),
                  i = r - o,
                  a = b.get(t).realRowNumber
                n =
                  b.getByRealRowNumber(a + o).y +
                  i * (b.getByRealRowNumber(a + o + 1).y - b.getByRealRowNumber(a + o).y)
              }
              return n
            })(n, x.arcGradient, t.arcskip)
          if (e === (r = g.determineArcXTo(t.kind, e, r))) {
            u.appendChild(
              (function (t, e, r, n, o, i) {
                var a = (x.arcRowHeight / 5) * 2,
                  u = v.getDims().interEntitySpacing / 2,
                  s = {},
                  h = 'arc ' + f.getAggregateClass(t) + ' ' + f.getClass(t)
                if (n) {
                  s = m.createGroup()
                  var p = m.createUTurn(
                      { x: e, y: o, width: u - 2 * c.default.LINE_WIDTH, height: a },
                      o + r + a - 2 * c.default.LINE_WIDTH,
                      { class: h, dontHitHome: '::' !== t, lineWidth: c.default.LINE_WIDTH }
                    ),
                    g = m.createUTurn(
                      { x: e, y: o, width: u, height: a },
                      o + r + a - c.default.LINE_WIDTH,
                      { lineWidth: c.default.LINE_WIDTH }
                    ),
                    b = m.createUTurn({ x: e, y: o, width: u, height: a }, o + r + a, {
                      class: h,
                      dontHitHome: '::' !== t,
                      lineWidth: c.default.LINE_WIDTH,
                    })
                  i && p.setAttribute('style', 'stroke:' + i),
                    d.getAttributes(l.get(), t, i, e, e).forEach(function (t) {
                      g.setAttribute(t.name, t.value)
                    }),
                    g.setAttribute('style', 'stroke:transparent;'),
                    Boolean(i) && b.setAttribute('style', 'stroke:' + i),
                    s.appendChild(p),
                    s.appendChild(b),
                    s.appendChild(g),
                    s.setAttribute('class', h)
                } else
                  (s = m.createUTurn({ x: e, y: o, width: u, height: a }, o + r + a, {
                    class: h,
                    dontHitHome: '-x' === t,
                    lineWidth: c.default.LINE_WIDTH,
                  })),
                    d.getAttributes(l.get(), t, i, e, e).forEach(function (t) {
                      s.setAttribute(t.name, t.value)
                    })
                return s
              })(t.kind, e, y - b.get(n).y - x.arcGradient, p, b.get(n).y, t.linecolor)
            )
            var w = (2 * v.getDims().interEntitySpacing) / 3
            u.appendChild(
              h.createLabel(
                t,
                {
                  x: e + 1.5 * c.default.LINE_WIDTH - w / 2,
                  y: b.get(n).y - x.arcRowHeight / 5 - c.default.LINE_WIDTH / 2,
                  width: w,
                },
                Object.assign({ alignLeft: !0, alignAbove: !0, ownBackground: !0 }, i.default(o))
              )
            )
          } else {
            var _ = m.createLine(
              { xFrom: e, yFrom: b.get(n).y, xTo: r, yTo: y },
              { class: s, doubleLine: p }
            )
            d.getAttributes(l.get(), t.kind, t.linecolor, e, r).forEach(function (t) {
              _.setAttribute(t.name, t.value)
            }),
              u.appendChild(_),
              u.appendChild(
                h.createLabel(
                  t,
                  { x: e, y: b.get(n).y + (y - b.get(n).y) / 2, width: r - e },
                  Object.assign(
                    {
                      alignAround: !0,
                      alignAbove: 'above' === x.regularArcTextVerticalAlignment,
                      ownBackground: !0,
                    },
                    i.default(o)
                  )
                )
              )
          }
          return u
        }
        function T(t, e, r) {
          var n = 0,
            o = x.arcEndX
          return (
            t.from && t.to && ((n = e.from), (o = e.to - e.from)),
            h.createLabel(
              t,
              { x: n, y: r, width: o },
              { ownBackground: !0, wordwraparcs: x.wordWrapArcs }
            )
          )
        }
        function M(t, e, r, n) {
          var o,
            i = 2 * x.maxDepth * c.default.LINE_WIDTH,
            a = t.to - t.from + v.getDims().interEntitySpacing - 2 * c.default.LINE_WIDTH - i,
            u = t.from - (v.getDims().interEntitySpacing - 2 * c.default.LINE_WIDTH - i) / 2,
            s = m.createGroup(),
            l = h.createLabel(e, { x: u, y: r, width: a }, n),
            f = y.getBBox(l),
            d = Math.max(
              f.height + 2 * c.default.LINE_WIDTH,
              x.arcRowHeight - 2 * c.default.LINE_WIDTH
            ),
            p = { width: a, height: d, x: u, y: r - d / 2 }
          switch (e.kind) {
            case 'rbox':
              o = m.createRBox(p, { class: 'box rbox', color: e.linecolor, bgColor: e.textbgcolor })
              break
            case 'abox':
              o = m.createABox(p, { class: 'box abox', color: e.linecolor, bgColor: e.textbgcolor })
              break
            case 'note':
              o = m.createNote(p, {
                class: 'box note',
                color: e.linecolor,
                bgColor: e.textbgcolor,
                lineWidth: c.default.LINE_WIDTH,
              })
              break
            default:
              o = m.createRect(p, { class: 'box', color: e.linecolor, bgColor: e.textbgcolor })
          }
          return s.appendChild(o), s.appendChild(l), s
        }
        ;(e.clean = function (t, e) {
          ;(x.document = p.init(e)), y.init(x.document), y.removeRenderedSVGFromElement(t)
        }),
          (e.render = function (t, e, r, n) {
            var o = Object.freeze(u.flatten(t)),
              i = (function (t, e) {
                return t.document.getElementById(e) || t.document.body
              })(e, r)
            return (
              l.setPrefix(r),
              (function (t, e, r, n) {
                var o
                ;(x.document = p.bootstrap(e, r, l.get(), d.getMarkerDefs(l.get(), t), n)),
                  (x.mirrorEntitiesOnBottom = n.mirrorEntitiesOnBottom),
                  (x.regularArcTextVerticalAlignment = n.regularArcTextVerticalAlignment),
                  y.init(x.document),
                  (x.layers = {
                    lifeline: (o = x.document).getElementById(l.get('_lifelines')),
                    sequence: o.getElementById(l.get('_sequence')),
                    notes: o.getElementById(l.get('_notes')),
                    inline: o.getElementById(l.get('_arcspans')),
                    watermark: o.getElementById(l.get('_watermark')),
                  }),
                  (x.maxDepth = t.depth),
                  (function (t, e) {
                    ;(v = new s.Thing(e && e.hscale)),
                      (function (t, e) {
                        ;(t.arcRowHeight = 38),
                          (t.arcGradient = 0),
                          (t.wordWrapArcs = !1),
                          e.arcgradient &&
                            ((t.arcRowHeight = parseInt(e.arcgradient, 10) + 38),
                            (t.arcGradient = parseInt(e.arcgradient, 10) + 0)),
                          (t.wordWrapArcs = Boolean(e.wordwraparcs))
                      })(t, e)
                  })(x, t.options)
              })(o, e, i, n || {}),
              (function (t) {
                var e, r, n
                _(t.entities, 0, t.options),
                  b.clear(v.getDims().height, x.arcRowHeight),
                  (e = t.arcs),
                  (r = t.entities),
                  (n = t.options),
                  (w = []),
                  k(r, 'arcrow', x.arcRowHeight, b.get(-1).y).forEach(function (t) {
                    x.layers.lifeline.appendChild(t)
                  }),
                  (function (t, e, r) {
                    var n = 0
                    t.forEach(function (t, o) {
                      t.every(function (t) {
                        return t.isVirtual
                      })
                        ? b.set(o, Math.max(b.get(o).height, A(t, e, r)))
                        : (b.set(o, Math.max(b.get(o).height, A(t, e, r)), n), n++)
                    })
                  })(e, r, n),
                  e.forEach(function (t, e) {
                    !(function (t, e, r, n) {
                      var o = 'arcrow',
                        i = []
                      t.forEach(function (t) {
                        var u = {}
                        switch (a.default(t.kind)) {
                          case 'empty':
                            ;(u = E(t, b.get(e).y)),
                              '...' === t.kind && (o = 'arcrowomit'),
                              i.push({ layer: x.layers.sequence, element: u })
                            break
                          case 'box':
                            ;(u = M(v.getOAndD(t.from, t.to), t, b.get(e).y, n)),
                              i.push({ title: t.title, layer: x.layers.notes, element: u })
                            break
                          case 'inline_expression':
                            ;(u = S(t, b.get(e).y)),
                              i.push({ layer: x.layers.notes, element: u }),
                              w.push({ arc: t, rownum: e })
                            break
                          default:
                            u = C(t, r, i, e, n)
                        }
                      }),
                        k(r, o, b.get(e).height, b.get(e).y).forEach(function (t) {
                          x.layers.lifeline.appendChild(t)
                        }),
                        i.forEach(function (t) {
                          t.element &&
                            (t.title && t.element.appendChild(m.createTitle(t.title)),
                            t.layer.appendChild(t.element))
                        })
                    })(t, e, r, n)
                  }),
                  w.forEach(function (t) {
                    var e, r, n, o
                    x.layers.inline.appendChild(
                      ((e = t),
                      (r = b.get(t.rownum).y),
                      (n = b.get(e.rownum).y),
                      (o = b.get(e.rownum + e.arc.numberofrows + 1).y - n),
                      (e.arc.label = ''),
                      (function (t, e, r, n) {
                        var o = 2 * x.maxDepth * c.default.LINE_WIDTH,
                          i =
                            t.to -
                            t.from +
                            v.getDims().interEntitySpacing -
                            2 * c.default.LINE_WIDTH -
                            o,
                          a =
                            t.from -
                            (v.getDims().interEntitySpacing - 2 * c.default.LINE_WIDTH - o) / 2,
                          u = 2 * (x.maxDepth - e.depth) * c.default.LINE_WIDTH
                        return m.createRect(
                          {
                            width: i + 2 * u,
                            height: r || x.arcRowHeight - 2 * c.default.LINE_WIDTH,
                            x: a - u,
                            y: n,
                          },
                          {
                            class: 'box inline_expression ' + e.kind,
                            color: e.linecolor,
                            bgColor: e.textbgcolor,
                          }
                        )
                      })(v.getOAndD(e.arc.from, e.arc.to), e.arc, o, r))
                    )
                  }),
                  x.mirrorEntitiesOnBottom &&
                    (function (t, e) {
                      var r = b.getLast().y + (b.getLast().height + x.arcRowHeight) / 2
                      k(t, 'arcrow', x.arcRowHeight, r).forEach(function (t) {
                        x.layers.lifeline.appendChild(t)
                      }),
                        _(t, r + x.arcRowHeight / 2, e)
                    })(t.entities, t.options)
              })(o),
              (function (t) {
                var e,
                  r,
                  n = (function (t) {
                    var e = g.determineDepthCorrection(t.depth, c.default.LINE_WIDTH),
                      r = b.getLast(),
                      n = {
                        width: t.entities.length * v.getDims().interEntitySpacing + e,
                        height: Boolean(x.mirrorEntitiesOnBottom)
                          ? 2 * v.getDims().height + r.y + r.height + 6
                          : r.y + r.height / 2 + 6,
                        horizontaltransform:
                          (v.getDims().interEntitySpacing + e - v.getDims().width) / 2,
                        autoscale: !!t.options && !!t.options.width && 'auto' === t.options.width,
                        verticaltransform: 3,
                        scale: 1,
                      }
                    return (n.x = 0 - n.horizontaltransform), (n.y = 0 - n.verticaltransform), n
                  })(t)
                ;(e = n),
                  (r = x.document.getElementById(l.get('_background'))) &&
                    r.appendChild(m.createRect(e, { class: 'bglayer' })),
                  (function (t) {
                    var e = x.document.getElementById(l.get()),
                      r = x.document.getElementById(l.get('_body'))
                    r &&
                      e &&
                      (r.setAttribute(
                        'transform',
                        'translate(' +
                          t.horizontaltransform +
                          ',' +
                          t.verticaltransform +
                          ') scale(' +
                          t.scale +
                          ',' +
                          t.scale +
                          ')'
                      ),
                      t.autoscale && !0 === t.autoscale
                        ? m.updateSVG(e, {
                            width: '100%',
                            height: '100%',
                            viewBox: '0 0 ' + t.width.toString() + ' ' + t.height.toString(),
                          })
                        : m.updateSVG(e, {
                            width: t.width.toString(),
                            height: t.height.toString(),
                            viewBox: '0 0 ' + t.width.toString() + ' ' + t.height.toString(),
                          }))
                  })(
                    (n = (function (t, e) {
                      return (
                        t.watermark &&
                          (function (t, e) {
                            x.layers.watermark.appendChild(m.createDiagonalText(t, e, 'watermark'))
                          })(t.watermark, e),
                        t.width && 'auto' !== t.width && (e = g.scaleCanvasToWidth(t.width, e)),
                        e
                      )
                    })(t.options, n))
                  )
              })(o),
              y.webkitNamespaceBugWorkaround(i.innerHTML)
            )
          })
      },
      631: function (t, e, r) {
        'use strict'
        var n =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t }
            },
          o =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t
              var e = {}
              if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r])
              return (e.default = t), e
            }
        e.__esModule = !0
        var i = n(r(596)),
          a = n(r(791)),
          u = n(r(866)),
          c = o(r(622)),
          s = o(r(683)),
          l = o(r(930))
        function f(t, e) {
          return e && t.setAttribute('style', 'fill:' + e + ';'), t
        }
        function d(t, e, r, n, o) {
          return (function (t, e) {
            return (
              (function (t, e) {
                return 'box' === i.default(t) && e
              })(t, e.wordwrapboxes) ||
              (function (t, e) {
                return 'entity' === t && e
              })(t, e.wordwrapentities) ||
              (function (t, e) {
                return 'box' !== i.default(t) && 'entity' !== t && e
              })(t, e.wordwraparcs) ||
              void 0 === t
            )
          })(e, o)
            ? a.default(
                t,
                (function (t, e) {
                  var r = Math.abs(t)
                  return r <= 160
                    ? r / ((e / 12) * 8)
                    : r <= 320
                    ? r / ((e / 12) * 6.4)
                    : r <= 480
                    ? r / ((e / 12) * 5.9)
                    : r / ((e / 12) * 5.6)
                })(r, n)
              )
            : t.split('\\n')
        }
        ;(e.createLabel = function (t, e, r, n) {
          var o = s.createGroup(n)
          if (((r = r || {}), t.label)) {
            var i = e.x + e.width / 2,
              a = (function (t, e) {
                return (
                  e.alignAbove &&
                    t.forEach(function () {
                      t.push('')
                    }),
                  e.alignAround && 1 === t.length && t.push(''),
                  t
                )
              })(d(t.label, t.kind, e.width, u.default.FONT_SIZE, r), r),
              h = (function (t, e, r) {
                return r.alignAround
                  ? e.y -
                      ((t.length - 1) / 2) * (l.calculateTextHeight() + u.default.LINE_WIDTH + 1)
                  : e.y - ((t.length - 1) / 2) * (l.calculateTextHeight() + 1)
              })(a, e, r)
            a.forEach(function (e, n) {
              if ('' !== e) {
                var a = (function (t, e, r, n, o, i) {
                  var a,
                    d,
                    h,
                    p = r + (o + 1 / 4) * l.calculateTextHeight(),
                    g = (function (t, e) {
                      var r = t,
                        n = c.getClass(r),
                        o = c.getAggregateClass(r)
                      return n === o ? n + e : o + e + n + e
                    })(n.kind, '-text ')
                  return (
                    i.alignLeft && (g += 'anchor-start '),
                    i.alignAround &&
                      (p = r + (o + 1 / 4) * (l.calculateTextHeight() + u.default.LINE_WIDTH)),
                    (a = f(
                      (function (t, e, r, n, o) {
                        var i =
                          0 === e
                            ? { class: n, url: o.url, id: o.id, idurl: o.idurl }
                            : { class: n, url: o.url }
                        return s.createText(t, r, i)
                      })(t, o, { x: e, y: p }, g, n),
                      n.textcolor
                    )),
                    (d = n.url),
                    (h = n.textcolor),
                    f(a, d && !h ? 'blue' : h)
                  )
                })(e, i, h, t, n, r)
                r.ownBackground &&
                  o.appendChild(
                    ((d = a),
                    (p = t.textbgcolor),
                    (g = s.createRect(l.getBBox(d), { class: 'label-text-background' })),
                    p && g.setAttribute('style', 'fill:' + p + '; stroke:' + p + ';'),
                    g)
                  ),
                  o.appendChild(a)
              }
              var d, p, g
              h++
            })
          }
          return o
        }),
          (e.splitLabel = d)
      },
      525: function (t, e, r) {
        'use strict'
        var n =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t
              var e = {}
              if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r])
              return (e.default = t), e
            },
          o =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t }
            }
        e.__esModule = !0
        var i = n(r(683)),
          a = o(r(866)),
          u = r(22),
          c = {}
        function s(t, e, r) {
          var n = i.createDefs()
          return (
            n.appendChild(
              (function (t, e) {
                var r = c.createElement('style')
                return (
                  r.setAttribute('type', 'text/css'),
                  r.appendChild(
                    c.createTextNode(
                      (function (t, e) {
                        return ((r = f(t.additionalTemplate) || {}),
                        (n = t.styleAdditions),
                        (r.cssBefore || '') + u.baseTemplate + (r.cssAfter || '') + (n || ''))
                          .replace(/<%=fontSize%>/g, a.default.FONT_SIZE)
                          .replace(/<%=lineWidth%>/g, a.default.LINE_WIDTH)
                          .replace(/<%=id%>/g, e)
                        var r, n
                      })(t, e)
                    )
                  ),
                  r
                )
              })(r, t)
            ),
            (function (t, e) {
              return (
                e.forEach(function (e) {
                  'method' === e.type
                    ? t.appendChild(i.createMarkerPolygon(e.name, e.path, e.color))
                    : t.appendChild(i.createMarkerPath(e.name, e.path, e.color))
                }),
                t
              )
            })(n, e)
          )
        }
        function l(t) {
          return (
            i.init(t.document, {
              LINE_WIDTH: a.default.LINE_WIDTH,
              FONT_SIZE: a.default.FONT_SIZE,
            }),
            t.document
          )
        }
        function f(t) {
          return u.namedStyles.find(function (e) {
            return e.name === t
          })
        }
        ;(e.init = l),
          (e.bootstrap = function (t, e, r, n, o) {
            c = l(t)
            var a,
              u,
              d = i.createSVG(
                r,
                r,
                (function (t) {
                  var e = '',
                    r = f(t.additionalTemplate)
                  return Boolean(r) && (e = r.renderMagic), e
                })(o)
              )
            return (
              Boolean(o.source) &&
                d.appendChild(
                  (function (t, e) {
                    var r = i.createDesc()
                    return (
                      r.appendChild(
                        t.document.createTextNode(
                          '\n\n# Generated by mscgen_js - https://sverweij.github.io/mscgen_js\n' +
                            e
                        )
                      ),
                      r
                    )
                  })(t, o.source)
                ),
              d.appendChild(s(r, n, o)),
              d.appendChild(
                ((a = r),
                (u = i.createGroup(a + '_body')).appendChild(i.createGroup(a + '_background')),
                u.appendChild(i.createGroup(a + '_arcspans')),
                u.appendChild(i.createGroup(a + '_lifelines')),
                u.appendChild(i.createGroup(a + '_sequence')),
                u.appendChild(i.createGroup(a + '_notes')),
                u.appendChild(i.createGroup(a + '_watermark')),
                u)
              ),
              e.appendChild(d),
              c
            )
          })
      },
      173: function (t, e, r) {
        'use strict'
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t }
          }
        e.__esModule = !0
        var o = n(r(465))
        ;(e.scaleCanvasToWidth = function (t, e) {
          var r = o.default(e)
          return (
            (r.scale = t / r.width),
            (r.width *= r.scale),
            (r.height *= r.scale),
            (r.horizontaltransform *= r.scale),
            (r.verticaltransform *= r.scale),
            (r.x = 0 - r.horizontaltransform),
            (r.y = 0 - r.verticaltransform),
            r
          )
        }),
          (e.determineDepthCorrection = function (t, e) {
            return t ? 2 * (t + 1) * e * 2 : 0
          }),
          (e.determineArcXTo = function (t, e, r) {
            return '-x' === t ? e + (3 / 4) * (r - e) : r
          })
      },
      621: (t, e) => {
        'use strict'
        e.__esModule = !0
        var r = [],
          n = 0,
          o = 0
        function i(t) {
          return r[t] ? r[t] : { y: n + 1.5 * o + t * o, height: o, realRowNumber: r.length - 1 }
        }
        function a() {
          return i(r.length - 1)
        }
        ;(e.get = i),
          (e.getLast = a),
          (e.clear = function (t, e) {
            ;(r = []), (n = t), (o = e)
          }),
          (e.getByRealRowNumber = function (t) {
            var e = r.find(function (e) {
              return e.realRowNumber === t
            })
            return void 0 === e && (e = a()), e
          }),
          (e.set = function (t, e, n) {
            void 0 === n && (n = -1)
            var o = i(t - 1)
            r[t] = { y: o.y + (o.height + e) / 2, height: e, realRowNumber: n }
          })
      },
      431: (t, e) => {
        'use strict'
        ;(e.__esModule = !0),
          (e.SVGNS = 'http://www.w3.org/2000/svg'),
          (e.XLINKNS = 'http://www.w3.org/1999/xlink')
        var r = {}
        function n(t, e, r) {
          return Boolean(r) && t.setAttribute(e, r), t
        }
        function o(t, e, r, n) {
          return Boolean(n) && t.setAttributeNS(e, r, n), t
        }
        function i(t, e) {
          return (
            Object.keys(e || {}).forEach(function (r) {
              n(t, r, e[r])
            }),
            t
          )
        }
        ;(e.setAttribute = n),
          (e.setAttributeNS = o),
          (e.setAttributes = i),
          (e.setAttributesNS = function (t, e, r) {
            return (
              Object.keys(r || {}).forEach(function (n) {
                o(t, e, n, r[n])
              }),
              t
            )
          }),
          (e.createElement = function (t, n) {
            return i(r.createElementNS(e.SVGNS, t), n)
          }),
          (e.createTextNode = function (t) {
            return r.createTextNode(t)
          }),
          (e.init = function (t) {
            r = t
          })
      },
      710: (t, e) => {
        'use strict'
        ;(e.__esModule = !0),
          (e.default = function (t) {
            return 0 - (360 * Math.atan(t.height / t.width)) / (2 * Math.PI)
          })
      },
      683: function (t, e, r) {
        'use strict'
        var n =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t
            var e = {}
            if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r])
            return (e.default = t), e
          }
        e.__esModule = !0
        var o = n(r(718)),
          i = n(r(652)),
          a = n(r(282)),
          u = o,
          c = {}
        ;(e.init = function (t, e) {
          i.init(t), (c = Object.assign({ LINE_WIDTH: 2, FONT_SIZE: 12 }, e))
        }),
          (e.createSVG = function (t, e, r) {
            return (
              (u = (function (t) {
                return Boolean(t) ? ('wobbly' === t ? a : o) : u
              })(r)),
              i.createSVG(t, e)
            )
          }),
          (e.updateSVG = i.updateSVG),
          (e.createTitle = i.createTitle),
          (e.createDesc = i.createDesc),
          (e.createDefs = i.createDefs),
          (e.createTSpan = i.createTSpan),
          (e.createRect = function (t, e) {
            return u.createRect(t, e)
          }),
          (e.createRBox = function (t, e) {
            return u.createRBox(t, e)
          }),
          (e.createABox = function (t, e) {
            return u.createABox(t, e)
          }),
          (e.createNote = function (t, e) {
            return u.createNote(t, e)
          }),
          (e.createEdgeRemark = function (t, e) {
            return u.createEdgeRemark(t, {
              class: e.class,
              color: e.color,
              bgColor: e.bgColor,
              foldSize: e.foldSize,
              lineWidth: c.LINE_WIDTH,
            })
          }),
          (e.createText = i.createText),
          (e.createDiagonalText = i.createDiagonalText),
          (e.createLine = function (t, e) {
            return Boolean(e) && Boolean(e.doubleLine)
              ? (e.lineWidth || (e.lineWidth = c.LINE_WIDTH), u.createDoubleLine(t, e))
              : u.createSingleLine(t, e)
          }),
          (e.createUTurn = i.createUTurn),
          (e.createGroup = i.createGroup),
          (e.createMarkerPath = i.createMarkerPath),
          (e.createMarkerPolygon = i.createMarkerPolygon)
      },
      103: (t, e) => {
        'use strict'
        ;(e.__esModule = !0),
          (e.default = function (t, e) {
            return e ? Math.round(t * Math.pow(10, e)) / Math.pow(10, e) : Math.round(t)
          })
      },
      718: function (t, e, r) {
        'use strict'
        var n =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t
            var e = {}
            if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r])
            return (e.default = t), e
          }
        e.__esModule = !0
        var o = n(r(652)),
          i = n(r(344))
        ;(e.createDoubleLine = function (t, e) {
          var r = e.lineWidth || 1,
            n = r,
            a = e ? e.class : '',
            u = i.getDirection(t),
            c = i.determineEndCorrection(t, a, r),
            s = i.determineStartCorrection(t, a, r),
            l = (t.xTo - t.xFrom + c - s).toString(),
            f = (t.yTo - t.yFrom).toString(),
            d = o.pathPoint2String('l', u.signX, u.dy),
            h = o.pathPoint2String('l', l, f)
          return o.createPath(
            o.pathPoint2String('M', t.xFrom, t.yFrom - 7.5 * r * u.dy) +
              d +
              o.pathPoint2String('M', t.xFrom + s, t.yFrom - n) +
              h +
              o.pathPoint2String('M', t.xFrom + s, t.yFrom + n) +
              h +
              o.pathPoint2String('M', t.xTo - u.signX, t.yTo + 7.5 * r * u.dy) +
              d,
            e
          )
        }),
          (e.createNote = function (t, e) {
            var r = (e && e.lineWidth) || 1,
              n = Math.max(9, Math.min(4.5 * r, t.height / 2)),
              i = n.toString(10)
            return o.createPath(
              o.pathPoint2String('M', t.x, t.y) +
                o.pathPoint2String('l', t.width - n, 0) +
                o.pathPoint2String('l', 0, i) +
                o.pathPoint2String('l', i, 0) +
                o.pathPoint2String('m', -i, -i) +
                o.pathPoint2String('l', i, i) +
                o.pathPoint2String('l', 0, t.height - n) +
                o.pathPoint2String('l', -t.width, 0) +
                o.pathPoint2String('l', 0, -t.height) +
                'z',
              e
            )
          }),
          (e.createRBox = function (t, e) {
            var r = Object.assign({ rx: 6, ry: 6 }, e)
            return o.createRect(t, r)
          }),
          (e.createABox = function (t, e) {
            return o.createPath(
              o.pathPoint2String('M', t.x, t.y + t.height / 2) +
                o.pathPoint2String('l', 3, -t.height / 2) +
                o.pathPoint2String('l', t.width - 6, 0) +
                o.pathPoint2String('l', 3, t.height / 2) +
                o.pathPoint2String('l', -3, t.height / 2) +
                o.pathPoint2String('l', -(t.width - 6), 0) +
                'z',
              e
            )
          }),
          (e.createEdgeRemark = function (t, e) {
            var r = e && e.foldSize ? e.foldSize : 7,
              n = Object.assign({ class: null, color: null, bgColor: null }, e)
            return o.createPath(
              o.pathPoint2String('M', t.x, t.y) +
                o.pathPoint2String('l', t.width, 0) +
                o.pathPoint2String('l', 0, t.height - r) +
                o.pathPoint2String('l', -r, r) +
                o.pathPoint2String('l', -(t.width - r), 0),
              n
            )
          }),
          (e.createSingleLine = o.createSingleLine),
          (e.createRect = o.createRect)
      },
      652: function (t, e, r) {
        'use strict'
        var n =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t
              var e = {}
              if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r])
              return (e.default = t), e
            },
          o =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t }
            }
        e.__esModule = !0
        var i = n(r(431)),
          a = o(r(710)),
          u = o(r(103))
        function c(t) {
          return u.default(t.x, 2).toString() + ',' + u.default(t.y, 2).toString() + ' '
        }
        function s(t, e, r) {
          return t + c({ x: e, y: r })
        }
        function l(t, e, r, n) {
          return i.createElement('marker', {
            orient: r,
            id: t,
            class: e,
            viewBox: Boolean(n) ? n : '0 0 10 10',
            refX: '9',
            refY: '3',
            markerUnits: 'strokeWidth',
            markerWidth: '10',
            markerHeight: '10',
          })
        }
        function f(t, e) {
          var r = i.createElement('tspan'),
            n = i.createTextNode(t)
          return (
            r.appendChild(n),
            e
              ? (function (t, e) {
                  var r = i.createElement('a')
                  return (
                    i.setAttributesNS(r, i.XLINKNS, { 'xlink:href': t, 'xlink:title': t }),
                    r.appendChild(e),
                    r
                  )
                })(e, r)
              : r
          )
        }
        function d(t, e, r) {
          var n = Object.assign({ class: null, url: null, id: null, idurl: null }, r),
            o = i.createElement('text', {
              x: u.default(e.x, 2).toString(),
              y: u.default(e.y, 2).toString(),
              class: n.class,
            })
          if ((o.appendChild(f(t, n.url)), n.id)) {
            var a = f(' [' + n.id + ']', n.idurl)
            a.setAttribute('style', 'vertical-align:text-top;font-size:0.7em;text-anchor:start;'),
              o.appendChild(a)
          }
          return o
        }
        function h(t, e) {
          var r = Object.assign({ class: null, style: null, color: null, bgColor: null }, e)
          return p(
            i.createElement('path', { d: t, class: r.class, style: r.style }),
            r.color,
            r.bgColor
          )
        }
        function p(t, e, r) {
          var n = ''
          return (
            r && (n += 'fill:' + r + ';'),
            e && (n += 'stroke:' + e + ';'),
            i.setAttribute(t, 'style', n)
          )
        }
        ;(e.point2String = c),
          (e.pathPoint2String = s),
          (e.createTSpan = f),
          (e.createText = d),
          (e.createPath = h),
          (e.createSingleLine = function (t, e) {
            return i.createElement('line', {
              x1: u.default(t.xFrom, 2).toString(),
              y1: u.default(t.yFrom, 2).toString(),
              x2: u.default(t.xTo, 2).toString(),
              y2: u.default(t.yTo, 2).toString(),
              class: e ? e.class : null,
            })
          }),
          (e.createRect = function (t, e) {
            var r = Object.assign(
              { class: null, color: null, bgColor: null, rx: null, ry: null },
              e
            )
            return p(
              i.createElement('rect', {
                width: u.default(t.width, 2),
                height: u.default(t.height, 2),
                x: u.default(t.x, 2),
                y: u.default(t.y, 2),
                rx: u.default(r.rx, 2),
                ry: u.default(r.ry, 2),
                class: r.class,
              }),
              r.color,
              r.bgColor
            )
          }),
          (e.createUTurn = function (t, e, r) {
            var n = Object.assign({ class: null, dontHitHome: !1, lineWidth: 1 }, r),
              o = n.dontHitHome ? t.x + 7.5 * n.lineWidth : t.x
            return h(
              s('M', t.x, t.y - t.height / 2) +
                s('C', t.x + t.width, t.y - (7.5 * n.lineWidth) / 2) +
                c({ x: t.x + t.width, y: e + 0 }) +
                c({ x: o, y: e }),
              { class: n.class }
            )
          }),
          (e.createGroup = function (t, e) {
            return i.createElement('g', { id: t, class: e })
          }),
          (e.createMarkerPath = function (t, e, r) {
            var n = l(t, 'arrow-marker', 'auto')
            return (
              n.appendChild(
                h(e, { class: 'arrow-style', style: 'stroke-dasharray:100,1;stroke:' + r || 0 })
              ),
              n
            )
          }),
          (e.createMarkerPolygon = function (t, e, r) {
            var n = l(t, 'arrow-marker', 'auto')
            return (
              n.appendChild(
                i.createElement('polygon', {
                  points: e,
                  class: 'arrow-style',
                  stroke: r || 'black',
                  fill: r || 'black',
                })
              ),
              n
            )
          }),
          (e.createTitle = function (t) {
            var e = i.createElement('title'),
              r = i.createTextNode(t)
            return e.appendChild(r), e
          }),
          (e.createDiagonalText = function (t, e, r) {
            return i.setAttributes(d(t, { x: e.width / 2, y: e.height / 2 }, { class: r }), {
              transform:
                'rotate(' +
                u.default(a.default(e), 2).toString() +
                ' ' +
                u.default(e.width / 2, 2).toString() +
                ' ' +
                u.default(e.height / 2, 2).toString() +
                ')',
            })
          }),
          (e.createDesc = function () {
            return i.createElement('desc')
          }),
          (e.createDefs = function () {
            return i.createElement('defs')
          }),
          (e.createSVG = function (t, e) {
            return i.createElement('svg', {
              version: '1.1',
              id: t,
              class: e,
              xmlns: i.SVGNS,
              'xmlns:xlink': i.XLINKNS,
              width: '0',
              height: '0',
            })
          }),
          (e.init = i.init),
          (e.updateSVG = i.setAttributes)
      },
      344: (t, e) => {
        'use strict'
        ;(e.__esModule = !0),
          (e.determineStartCorrection = function (t, e, r) {
            var n = 0
            return (
              !e.includes('nodi') &&
                e.includes('bidi') &&
                (n = t.xTo > t.xFrom ? 7.5 * r : -7.5 * r),
              n
            )
          }),
          (e.determineEndCorrection = function (t, e, r) {
            var n = 0
            return e.includes('nodi') || (n = t.xTo > t.xFrom ? -7.5 * r : 7.5 * r), n
          }),
          (e.getDirection = function (t) {
            var e = t.xTo > t.xFrom ? 1 : -1
            return {
              signX: e,
              signY: t.yTo > t.yFrom ? 1 : -1,
              dy: (e * (t.yTo - t.yFrom)) / (t.xTo - t.xFrom),
            }
          })
      },
      441: function (t, e, r) {
        'use strict'
        var n =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t
            var e = {}
            if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r])
            return (e.default = t), e
          }
        e.__esModule = !0
        var o = n(r(652)),
          i = n(r(344)),
          a = r(913)
        ;(e.renderNotePathString = function (t, e) {
          return (
            o.pathPoint2String('M', t.x, t.y) +
            a.line2CurveString({ xFrom: t.x, yFrom: t.y, xTo: t.x + t.width - e, yTo: t.y }) +
            o.pathPoint2String('L', t.x + t.width - e, t.y) +
            a.line2CurveString({
              xFrom: t.x + t.width - e,
              yFrom: t.y,
              xTo: t.x + t.width,
              yTo: t.y + e,
            }) +
            o.pathPoint2String('L', t.x + t.width, t.y + e) +
            a.line2CurveString({
              xFrom: t.x + t.width,
              yFrom: t.y + e,
              xTo: t.x + t.width,
              yTo: t.y + t.height,
            }) +
            o.pathPoint2String('L', t.x + t.width, t.y + t.height) +
            a.line2CurveString({
              xFrom: t.x + t.width,
              yFrom: t.y + t.height,
              xTo: t.x,
              yTo: t.y + t.height,
            }) +
            o.pathPoint2String('L', t.x, t.y + t.height) +
            a.line2CurveString({ xFrom: t.x, yFrom: t.y + t.height, xTo: t.x, yTo: t.y }) +
            o.pathPoint2String('L', t.x, t.y) +
            'z'
          )
        }),
          (e.renderNoteCornerString = function (t, e) {
            return (
              o.pathPoint2String('M', t.x + t.width - e, t.y) +
              a.line2CurveString({
                xFrom: t.x + t.width - e,
                yFrom: t.y,
                xTo: t.x + t.width - e,
                yTo: t.y + e,
              }) +
              o.pathPoint2String('L', t.x + t.width - e, t.y + e) +
              a.line2CurveString({
                xFrom: t.x + t.width - e,
                yFrom: t.y + e,
                xTo: t.x + t.width,
                yTo: t.y + e,
              }) +
              o.pathPoint2String('L', t.x + t.width, t.y + e)
            )
          }),
          (e.abox2CurveString = function (t, e) {
            return (
              o.pathPoint2String('M', t.x, t.y + t.height / 2) +
              a.line2CurveString({
                xFrom: t.x,
                yFrom: t.y + t.height / 2,
                xTo: t.x + e,
                yTo: t.y,
              }) +
              o.pathPoint2String('L', t.x + e, t.y) +
              a.line2CurveString({ xFrom: t.x + e, yFrom: t.y, xTo: t.x + t.width - e, yTo: t.y }) +
              o.pathPoint2String('L', t.x + t.width - e, t.y) +
              a.line2CurveString({
                xFrom: t.x + t.width - e,
                yFrom: t.y,
                xTo: t.x + t.width,
                yTo: t.y + t.height / 2,
              }) +
              o.pathPoint2String('L', t.x + t.width, t.y + t.height / 2) +
              a.line2CurveString({
                xFrom: t.x + t.width,
                yFrom: t.y + t.height / 2,
                xTo: t.x + t.width - e,
                yTo: t.y + t.height,
              }) +
              o.pathPoint2String('L', t.x + t.width - e, t.y + t.height) +
              a.line2CurveString({
                xFrom: t.x + t.width - e,
                yFrom: t.y + t.height,
                xTo: t.x + e,
                yTo: t.y + t.height,
              }) +
              o.pathPoint2String('L', t.x + e, t.y + t.height) +
              a.line2CurveString({
                xFrom: t.x + e,
                yFrom: t.y + t.height,
                xTo: t.x,
                yTo: t.y + t.height / 2,
              }) +
              'z'
            )
          }),
          (e.rbox2CurveString = function (t, e) {
            return (
              o.pathPoint2String('M', t.x, t.y + e) +
              a.points2CurveString([{ controlX: t.x, controlY: t.y, x: t.x + e, y: t.y }]) +
              a.line2CurveString({ xFrom: t.x + e, yFrom: t.y, xTo: t.x + t.width - e, yTo: t.y }) +
              o.pathPoint2String('L', t.x + t.width - e, t.y) +
              a.points2CurveString([
                { controlX: t.x + t.width, controlY: t.y, x: t.x + t.width, y: t.y + e },
              ]) +
              a.line2CurveString({
                xFrom: t.x + t.width,
                yFrom: t.y + e,
                xTo: t.x + t.width,
                yTo: t.y + t.height - e,
              }) +
              o.pathPoint2String('L', t.x + t.width, t.y + t.height - e) +
              a.points2CurveString([
                {
                  controlX: t.x + t.width,
                  controlY: t.y + t.height,
                  x: t.x + t.width - e,
                  y: t.y + t.height,
                },
              ]) +
              a.line2CurveString({
                xFrom: t.x + t.width - e,
                yFrom: t.y + t.height,
                xTo: t.x + e,
                yTo: t.y + t.height,
              }) +
              o.pathPoint2String('L', t.x + e, t.y + t.height) +
              a.points2CurveString([
                { controlX: t.x, controlY: t.y + t.height, x: t.x, y: t.y + t.height - e },
              ]) +
              a.line2CurveString({
                xFrom: t.x,
                yFrom: t.y + t.height - e,
                xTo: t.x,
                yTo: t.y + e,
              }) +
              'z'
            )
          }),
          (e.doubleLine2CurveString = function (t, e) {
            var r = e.lineWidth || 1,
              n = r,
              u = e ? e.class : '',
              c = i.getDirection(t),
              s = i.determineEndCorrection(t, u, r),
              l = i.determineStartCorrection(t, u, r)
            return (
              o.pathPoint2String('M', t.xFrom, t.yFrom - 7.5 * r * c.dy) +
              o.pathPoint2String('l', c.signX, c.dy) +
              o.pathPoint2String('M', t.xFrom + l, t.yFrom - n) +
              a.line2CurveString({
                xFrom: t.xFrom + l,
                yFrom: t.yFrom - n,
                xTo: t.xTo + s,
                yTo: t.yTo - n,
              }) +
              o.pathPoint2String('M', t.xFrom + l, t.yFrom + n) +
              a.line2CurveString({
                xFrom: t.xFrom + l,
                yFrom: t.yFrom + n,
                xTo: t.xTo + s,
                yTo: t.yTo + n,
              }) +
              o.pathPoint2String('M', t.xTo - c.signX, t.yTo + 7.5 * r * c.dy) +
              o.pathPoint2String('l', c.signX, c.dy)
            )
          }),
          (e.edgeRemark2CurveString = function (t, e) {
            return (
              o.pathPoint2String('M', t.x + t.width, t.y) +
              a.line2CurveString({
                xFrom: t.x + t.width,
                yFrom: t.y,
                xTo: t.x + t.width,
                yTo: t.y + t.height - e,
              }) +
              o.pathPoint2String('L', t.x + t.width, t.y + t.height - e) +
              a.line2CurveString({
                xFrom: t.x + t.width,
                yFrom: t.y + t.height - e,
                xTo: t.x + t.width - e,
                yTo: t.y + t.height,
              }) +
              o.pathPoint2String('L', t.x + t.width - e, t.y + t.height) +
              a.line2CurveString({
                xFrom: t.x + t.width - e,
                yFrom: t.y + t.height,
                xTo: t.x - 1,
                yTo: t.y + t.height,
              }) +
              o.pathPoint2String('L', t.x - 1, t.y + t.height)
            )
          })
      },
      913: function (t, e, r) {
        'use strict'
        var n =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t }
            },
          o =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t
              var e = {}
              if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r])
              return (e.default = t), e
            }
        e.__esModule = !0
        var i = n(r(103)),
          a = o(r(652)),
          u = o(r(344))
        function c(t) {
          return t
            .map(function (t) {
              return a.pathPoint2String('S', t.controlX, t.controlY) + ' ' + a.point2String(t)
            })
            .join(' ')
        }
        function s(t) {
          var e = Math.abs(t.xTo - t.xFrom),
            r = Math.abs(t.yTo - t.yFrom)
          return Math.sqrt(e * e + r * r)
        }
        function l(t, e) {
          var r = s(t)
          return r > 0 ? Math.floor(r / e) : 0
        }
        function f(t) {
          return Math.round(2 * Math.random() * t) - t
        }
        function d(t, e, r) {
          for (
            var n,
              o = [],
              a = l(
                t,
                (e = (function (t, e) {
                  if (t <= 0) throw new Error('pInterval must be > 0')
                  return Math.min(s(e), t)
                })(e, t))
              ),
              c = u.getDirection(t),
              d = c.signX * Math.sqrt(Math.pow(e, 2) / (1 + Math.pow(c.dy, 2))),
              h =
                c.signY *
                (Math.abs(c.dy) === 1 / 0
                  ? e
                  : Math.sqrt((Math.pow(c.dy, 2) * Math.pow(e, 2)) / (1 + Math.pow(c.dy, 2)))),
              p = 1;
            p <= a;
            p++
          )
            e >
              s({
                xFrom: (n = {
                  controlX: i.default(t.xFrom + (p - 0.5) * d + f(r), 2),
                  controlY: i.default(t.yFrom + (p - 0.5) * h + f(r), 2),
                  x: i.default(t.xFrom + p * d, 2),
                  y: i.default(t.yFrom + p * h, 2),
                }).x,
                yFrom: n.y,
                xTo: t.xTo,
                yTo: t.yTo,
              }) && ((n.x = t.xTo), (n.y = t.yTo)),
              o.push(n)
          return o
        }
        ;(e.points2CurveString = c),
          (e.line2CurveString = function (t) {
            return c(d(t, 70, 3))
          }),
          (e.getLineLength = s),
          (e.getNumberOfSegments = l),
          (e.getBetweenPoints = d)
      },
      282: function (t, e, r) {
        'use strict'
        var n =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t }
            },
          o =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t
              var e = {}
              if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r])
              return (e.default = t), e
            }
        e.__esModule = !0
        var i = r(441),
          a = r(913),
          u = n(r(103)),
          c = o(r(652)),
          s = o(r(344))
        ;(e.createSingleLine = function (t, e) {
          void 0 === e && (e = {})
          var r = s.getDirection(t)
          return c.createPath(
            c.pathPoint2String('M', t.xFrom, t.yFrom) +
              c.pathPoint2String(
                'L',
                u.default(t.xFrom + r.signX * Math.sqrt(1 / (1 + Math.pow(r.dy, 2))), 2),
                t.yFrom +
                  r.signY *
                    (Math.abs(r.dy) === 1 / 0
                      ? 1
                      : u.default(Math.sqrt(Math.pow(r.dy, 2) / (1 + Math.pow(r.dy, 2))), 2))
              ) +
              a.line2CurveString(t),
            e
          )
        }),
          (e.createNote = function (t, e) {
            var r = (e && e.lineWidth) || 1,
              n = Math.max(9, Math.min(4.5 * r, t.height / 2)),
              o = c.createGroup()
            return (
              o.appendChild(c.createPath(i.renderNotePathString(t, n), e)),
              (e.bgColor = 'transparent'),
              o.appendChild(c.createPath(i.renderNoteCornerString(t, n), e)),
              o
            )
          }),
          (e.createRect = function (t, e) {
            return c.createPath(i.rbox2CurveString(t, 0), e)
          }),
          (e.createABox = function (t, e) {
            return c.createPath(i.abox2CurveString(t, 3), e)
          }),
          (e.createRBox = function (t, e) {
            return c.createPath(i.rbox2CurveString(t, 6), e)
          }),
          (e.createEdgeRemark = function (t, e) {
            var r = (e && e.lineWidth) || 1,
              n = c.createGroup(),
              o = e && e.foldSize ? e.foldSize : 7,
              a = e && e.color ? e.color : 'black'
            e.color = 'transparent!important'
            var u = c.createPath(
              c.pathPoint2String('M', t.x, t.y + r / 2) +
                c.pathPoint2String('L', t.x + t.width, t.y + r / 2) +
                c.pathPoint2String('L', t.x + t.width, t.y + t.height - o) +
                c.pathPoint2String('L', t.x + t.width - o, t.y + t.height) +
                c.pathPoint2String('L', t.x, t.y + t.height) +
                'z',
              e
            )
            ;(e.bgColor = 'transparent'), (e.color = a)
            var s = c.createPath(i.edgeRemark2CurveString(t, o), e)
            return n.appendChild(u), n.appendChild(s), n
          }),
          (e.createDoubleLine = function (t, e) {
            return c.createPath(i.doubleLine2CurveString(t, e), { class: e.class })
          })
      },
      930: function (t, e, r) {
        'use strict'
        var n =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t }
            },
          o =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t
              var e = {}
              if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r])
              return (e.default = t), e
            }
        e.__esModule = !0
        var i = n(r(773)),
          a = o(r(824)),
          u = o(r(683)),
          c = {},
          s = a.get('bboxer')
        function l(t) {
          return 'function' == typeof t.getBBox
            ? ((e = (function (t) {
                var e = c.getElementById(s)
                ;(e =
                  e ||
                  (function (t) {
                    var e = u.createSVG(t, a.get())
                    return c.body.appendChild(e), e
                  })(s)).appendChild(t)
                var r = t.getBBox()
                return e.removeChild(t), r
              })(t)),
              (r = 1e5),
              Math.abs(e.height) > r || Math.abs(e.width) > r
                ? { height: 0, width: 0, x: 0, y: 0 }
                : e)
            : { height: 15, width: 15, x: 2, y: 2 }
          var e, r
        }
        ;(e.getBBox = l),
          (e.removeRenderedSVGFromElement = function (t) {
            a.setPrefix(t)
            var e = c.getElementById(a.get())
            if (Boolean(e)) {
              var r = c.getElementById(t)
              r ? r.removeChild(e) : c.body.removeChild(e)
            }
          }),
          (e.init = function (t) {
            c = t
          }),
          (e.calculateTextHeight = i.default(function () {
            return l(u.createText('??jy??9??@????', { x: 0, y: 0 })).height
          })),
          (e.webkitNamespaceBugWorkaround = function (t) {
            return t.replace(/ xlink=/g, ' xmlns:xlink=').replace(/ href=/g, ' xlink:href=')
          })
      },
      367: (t, e) => {
        'use strict'
        ;(e.__esModule = !0),
          (e.unescapeString = function (t) {
            return t.replace(/\\"/g, '"')
          }),
          (e.escapeString = function (t) {
            return t.replace(/\\"/g, '"').replace(/"/g, '\\"')
          })
      },
      791: (t, e) => {
        'use strict'
        ;(e.__esModule = !0),
          (e.default = function (t, e) {
            for (
              var r = 0,
                n = [],
                o = 0,
                i = 0,
                a = 0,
                u = 0,
                c = t.replace(/[\t\n]+/g, ' ').replace(/\\n/g, '\n');
              u <= c.length;

            )
              u >= c.length
                ? n.push(c.substring(o, u))
                : '\n' === c[u]
                ? ((r = 0), (a = u), n.push(c.substring(o, a)), (o = a + 1))
                : r++ >= e &&
                  (-1 === (a = c.substring(0, u).lastIndexOf(' ')) || a < o
                    ? ((r = 1), (a = u), (i = u))
                    : ((r = 0), (i = a + 1)),
                  n.push(c.substring(o, a)),
                  (o = i)),
                u++
            return n
          })
      },
      916: (t) => {
        let e = {
          defaultLanguage: 'mscgen',
          parentElementPrefix: 'mscgen_js-parent_',
          clickable: !1,
          clickURL: 'https://sverweij.github.io/mscgen_js/',
          loadFromSrcAttribute: !1,
        }
        t.exports = {
          getConfig() {
            var t, r
            return (
              'undefined' != typeof mscgen_js_config &&
                mscgen_js_config &&
                'object' == typeof mscgen_js_config &&
                ((t = e),
                (r = mscgen_js_config),
                Object.getOwnPropertyNames(r).forEach((e) => {
                  t[e] = r[e]
                })),
              e
            )
          },
        }
      },
      335: (t, e, r) => {
        const n = r(115)
        function o(t, e) {
          let r = t.toString(),
            n = e - r.length
          for (let t = 0; t < n; t++) r = ` ${r}`
          return r
        }
        function i(t, e) {
          return `${o(e, 3)} ${t}`
        }
        function a(t) {
          return t.replace(/</g, '&lt;')
        }
        function u(t, e) {
          return t.split('').reduce(
            (t, r, o) =>
              o === e
                ? t +
                  n.applyTemplate("<span style='text-decoration:underline'>{char}</span>", {
                    char: a(r),
                  })
                : t + a(r),
            ''
          )
        }
        t.exports = {
          formatNumber: o,
          deHTMLize: a,
          renderError: function (t, e, r) {
            let o = e
              ? n.applyTemplate(
                  "<pre><div style='color: #d00'># ERROR on line {line}, column {col} - {message}</div>",
                  { message: r, line: e.start.line, col: e.start.column }
                )
              : n.applyTemplate("<pre><div style='color: #d00'># ERROR {message}</div>", {
                  message: r,
                })
            return `${t.split('\n').reduce(
              (t, r, o) =>
                Boolean(e) && o === e.start.line - 1
                  ? t +
                    n.applyTemplate('<mark>{line}\n</mark>', {
                      line: i(u(r, e.start.column - 1), o + 1),
                    })
                  : `${t + a(i(r, o + 1))}\n`,
              o
            )}</pre>`
          },
        }
      },
      222: (t) => {
        function e(t, e, r) {
          return `${t.pathname}?lang=${r}&msc=${encodeURIComponent(e)}`
        }
        t.exports = {
          toLocationString(t, r, n) {
            let o = '# source too long for an URL'
            return (
              (function (t, r, n) {
                return e(t, r, n).length < 4094
              })(t, r, n) && (o = r),
              e(t, o, n)
            )
          },
        }
      },
      115: (t) => {
        t.exports = {
          applyTemplate: function (t, e) {
            let r = t
            return (
              e &&
                Object.keys(e).forEach((t) => {
                  r = r.replace(new RegExp(`{${t}}`, 'g'), e[t])
                }),
              r
            )
          },
        }
      },
    },
    e = {}
  function r(n) {
    var o = e[n]
    if (void 0 !== o) return o.exports
    var i = (e[n] = { id: n, loaded: !1, exports: {} })
    return t[n].call(i.exports, i, i.exports, r), (i.loaded = !0), i.exports
  }
  ;(r.g = (function () {
    if ('object' == typeof globalThis) return globalThis
    try {
      return this || new Function('return this')()
    } catch (t) {
      if ('object' == typeof window) return window
    }
  })()),
    (r.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t)),
    (() => {
      const t = r(150),
        e = r(779),
        n = r(533),
        o = r(916),
        i = r(335),
        a = r(222),
        u = Object.freeze({
          'text/x-mscgen': 'mscgen',
          'text/x-msgenny': 'msgenny',
          'text/x-xu': 'xu',
        })
      function c(t, e) {
        const r = document.createElement('pre')
        r.setAttribute('style', 'color: #d00'), (r.textContent = e), t.replaceChildren(r)
      }
      function s(t) {
        let e = t.getAttribute('data-mirror-entities')
        return e && 'true' === e
      }
      function l(t) {
        return t.getAttribute('data-regular-arc-text-vertical-alignment') || 'middle'
      }
      function f(r, c, f = r) {
        let d = (function (t) {
            let e = t.dataset.language || u[t.getAttribute('type')]
            return e || (e = o.getConfig().defaultLanguage), e
          })(f),
          h = (function (r, n) {
            let o = {}
            try {
              o = 'msgenny' === n ? e.parse(r) : 'json' === n ? JSON.parse(r) : t.parse(r)
            } catch (t) {
              return t
            }
            return o
          })(c, d)
        var p
        h.entities
          ? (function (t, e, r) {
              let i = document.getElementById(e)
              ;(i.innerHTML = ''),
                !0 === o.getConfig().clickable &&
                  (i.append(
                    (function (t, e, r) {
                      let n = document.createElement('a')
                      return (
                        n.setAttribute(
                          'href',
                          o.getConfig().clickURL +
                            a.toLocationString({ pathname: 'index.html' }, t, e)
                        ),
                        n.setAttribute('id', `${r}link`),
                        n.setAttribute('style', 'text-decoration: none;'),
                        n.setAttribute('title', 'click to edit in the mscgen_js interpreter'),
                        n
                      )
                    })(r.source, r.language, e)
                  ),
                  (e += 'link')),
                n.clean(e, window),
                n.render(t, window, e, {
                  source: r.source,
                  additionalTemplate: r.namedStyle,
                  mirrorEntitiesOnBottom: r.mirrorEntities,
                  regularArcTextVerticalAlignment: r.regularArcTextVerticalAlignment,
                })
            })(h, r.id, {
              source: c,
              language: d,
              mirrorEntities: s(f),
              namedStyle: ((p = f), p.getAttribute('data-named-style') || 'basic'),
              regularArcTextVerticalAlignment: l(f),
            })
          : (r.innerHTML = i.renderError(c, h.location, h.message))
      }
      function d(t) {
        return t.ok ? Promise.resolve(t) : Promise.reject(new Error(`ERROR: ${t.statusText}`))
      }
      function h(t) {
        return t.text()
      }
      function p(t) {
        return t.getAttribute('data-src') || t.getAttribute('src')
      }
      function g(t, e, r = t) {
        ;(t.dataset.renderedby = 'mscgen_js'),
          !o.getConfig().loadFromSrcAttribute && Boolean(p(t))
            ? c(
                r,
                "ERROR: Won't load the chart specified,\nbecause loading from separate files is switched off in the mscgen_js configuration. \n\nSee https://sverweij.github.io/mscgen_js/embed.html#loading-from-separate-files how to enable it."
              )
            : ((function (t, e) {
                t.id || (t.id = o.getConfig().parentElementPrefix + e.toString())
              })(r, e),
              (function (t) {
                const e = p(t)
                return e
                  ? fetch(e).then(d).then(h)
                  : new Promise((e, r) => {
                      t.textContent
                        ? e(t.textContent)
                        : r(new Error("ERROR: this element doesn't contain any text"))
                    })
              })(t)
                .then((e) => {
                  f(r, e, t)
                })
                .catch((t) => {
                  c(r, t.message)
                }))
      }
      function b(t, e) {
        if (!t.dataset.renderedby)
          if ('SCRIPT' === t.tagName) {
            let r = document.createElement('span')
            t.after(r), g(t, e, r)
          } else g(t, e)
      }
      function m() {
        return Math.round(1e9 * Math.random())
      }
      const y = [
          ...document.querySelectorAll('.mscgen_js'),
          ...[...document.scripts].filter((t) => Boolean(u[t.type])),
          ...document.querySelectorAll('mscgen'),
        ],
        v = new IntersectionObserver(
          function (t) {
            t.forEach((t) => {
              t.isIntersecting && b(t.target.nextElementSibling, m())
            })
          },
          { rootMargin: '100% 0% 100% 0%' }
        )
      y.forEach((t) => {
        const e = document.createElement('mscgenjs-marker')
        t.before(e), v.observe(e)
      }),
        window.addEventListener('beforeprint', () => {
          y.forEach((t) => {
            b(t, m())
          })
        })
    })()
})()
//# sourceMappingURL=mscgen-inpage.js.map
