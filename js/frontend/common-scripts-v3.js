function setErrorsForMainForm(e, t) {
    t = void 0 === t ? "" : "#" + t, $.each(e, function(e, n) {
        $(t + " textarea[name=" + e + "]," + t + " input[name=" + e + "]," + t + " select[name=" + e + "]").addClass("is-invalid")
    })
}

function setErrorsWithTextForMainForm(e, t) {
    t = void 0 === t ? "" : "#" + t, $.each(e, function(e, n) {
        $(t + " textarea[name=" + e + "]," + t + " input[name=" + e + "]," + t + " select[name=" + e + "]").addClass("is-invalid").after('<div class="invalid-feedback">' + n[0] + "</div>")
    })
}

function clearBlockFormById(e) {
    $.each($("#" + e).find("input[type=text],textarea"), function(e, t) {
        $(t).val("")
    })
}

function resetMainFormErrorsById(e, t) {
    e = void 0 === e ? "" : "#" + e, $(e + " textarea," + e + " input," + e + " select").removeClass("is-invalid"), $(e).find(".invalid-feedback").remove(), void 0 !== t && !0 === t && $(e + " textarea," + e + " input," + e + " select").val("")
}

function showSuccessAlertModal(e, t, n) {
    showAlertModal(e, t, "m-success", n)
}

function showErrorAlertModal(e, t) {
    showAlertModal(e, t, "m-error")
}

function showWarningAlertModal(e, t) {
    showAlertModal(e, t, "m-warning")
}

function showDefaultErrorAlertModal() {
    showAlertModal("Internal Error", "Internal Error", "m-error")
}

function showAlertModal(e, t, n, o) {
    let i = $("#alertModal"),
        r = ["m-success", "m-error", "m-warning"];
    if (i.length > 0) {
        for (let e = 0; e < r.length; e++) i.find(".modal-dialog").removeClass(r[e]);
        i.find(".modal-dialog").addClass(n), i.find(".modal-header .modal-title").text(e), i.find(".modal-body").html("<p>" + t + "</p>"), void 0 !== o && i.find(".modal-footer button").html(o), i.modal("show")
    } else alert(t)
}

function debounce(e, t = 300) {
    let n;
    return (...o) => {
        clearTimeout(n), n = setTimeout(() => {
            e.apply(this, o)
        }, t)
    }
}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        o = Object.getPrototypeOf,
        i = n.slice,
        r = n.flat ? function(e) {
            return n.flat.call(e)
        } : function(e) {
            return n.concat.apply([], e)
        },
        a = n.push,
        s = n.indexOf,
        l = {},
        u = l.toString,
        c = l.hasOwnProperty,
        d = c.toString,
        f = d.call(Object),
        p = {},
        h = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        m = function(e) {
            return null != e && e === e.window
        },
        g = e.document,
        b = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function v(e, t, n) {
        var o, i, r = (n = n || g).createElement("script");
        if (r.text = e, t)
            for (o in b)(i = t[o] || t.getAttribute && t.getAttribute(o)) && r.setAttribute(o, i);
        n.head.appendChild(r).parentNode.removeChild(r)
    }

    function T(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[u.call(e)] || "object" : typeof e
    }
    var y = "3.5.1",
        S = function(e, t) {
            return new S.fn.init(e, t)
        };

    function w(e) {
        var t = !!e && "length" in e && e.length,
            n = T(e);
        return !h(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: y,
        constructor: S,
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(e) {
            return this.pushStack(S.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, o, i, r, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || h(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) o = e[t], "__proto__" !== t && a !== o && (u && o && (S.isPlainObject(o) || (i = Array.isArray(o))) ? (n = a[t], r = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(u, r, o)) : void 0 !== o && (a[t] = o));
        return a
    }, S.extend({
        expando: "jQuery" + (y + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = o(e)) && ("function" != typeof(n = c.call(t, "constructor") && t.constructor) || d.call(n) !== f))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            v(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, o = 0;
            if (w(e))
                for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
            else
                for (o in e)
                    if (!1 === t.call(e[o], o, e[o])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (w(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, o = 0, i = e.length; o < n; o++) e[i++] = t[o];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var o = [], i = 0, r = e.length, a = !n; i < r; i++) !t(e[i], i) !== a && o.push(e[i]);
            return o
        },
        map: function(e, t, n) {
            var o, i, a = 0,
                s = [];
            if (w(e))
                for (o = e.length; a < o; a++) null != (i = t(e[a], a, n)) && s.push(i);
            else
                for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
            return r(s)
        },
        guid: 1,
        support: p
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = n[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    var A = function(e) {
        var t, n, o, i, r, a, s, l, u, c, d, f, p, h, m, g, b, v, T, y = "sizzle" + 1 * new Date,
            S = e.document,
            w = 0,
            A = 0,
            E = le(),
            _ = le(),
            C = le(),
            P = le(),
            M = function(e, t) {
                return e === t && (d = !0), 0
            },
            x = {}.hasOwnProperty,
            D = [],
            G = D.pop,
            I = D.push,
            H = D.push,
            k = D.slice,
            B = function(e, t) {
                for (var n = 0, o = e.length; n < o; n++)
                    if (e[n] === t) return n;
                return -1
            },
            N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            O = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\[\\da-fA-F]{1,6}" + O + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            F = "\\[" + O + "*(" + L + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + O + "*\\]",
            j = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
            R = new RegExp(O + "+", "g"),
            V = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
            W = new RegExp("^" + O + "*," + O + "*"),
            X = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
            U = new RegExp(O + "|>"),
            q = new RegExp(j),
            K = new RegExp("^" + L + "$"),
            Q = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + j),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + N + ")$", "i"),
                needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
            },
            z = /HTML$/i,
            Y = /^(?:input|select|textarea|button)$/i,
            $ = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + O + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function() {
                f()
            },
            ae = ye(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(D = k.call(S.childNodes), S.childNodes), D[S.childNodes.length].nodeType
        } catch (t) {
            H = {
                apply: D.length ? function(e, t) {
                    I.apply(e, k.call(t))
                } : function(e, t) {
                    for (var n = e.length, o = 0; e[n++] = t[o++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, o, i) {
            var r, s, u, c, d, h, b, v = t && t.ownerDocument,
                S = t ? t.nodeType : 9;
            if (o = o || [], "string" != typeof e || !e || 1 !== S && 9 !== S && 11 !== S) return o;
            if (!i && (f(t), t = t || p, m)) {
                if (11 !== S && (d = Z.exec(e)))
                    if (r = d[1]) {
                        if (9 === S) {
                            if (!(u = t.getElementById(r))) return o;
                            if (u.id === r) return o.push(u), o
                        } else if (v && (u = v.getElementById(r)) && T(t, u) && u.id === r) return o.push(u), o
                    } else {
                        if (d[2]) return H.apply(o, t.getElementsByTagName(e)), o;
                        if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(o, t.getElementsByClassName(r)), o
                    }
                if (n.qsa && !P[e + " "] && (!g || !g.test(e)) && (1 !== S || "object" !== t.nodeName.toLowerCase())) {
                    if (b = e, v = t, 1 === S && (U.test(e) || X.test(e))) {
                        for ((v = ee.test(e) && be(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(oe, ie) : t.setAttribute("id", c = y)), s = (h = a(e)).length; s--;) h[s] = (c ? "#" + c : ":scope") + " " + Te(h[s]);
                        b = h.join(",")
                    }
                    try {
                        return H.apply(o, v.querySelectorAll(b)), o
                    } catch (t) {
                        P(e, !0)
                    } finally {
                        c === y && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(V, "$1"), t, o, i)
        }

        function le() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > o.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function ue(e) {
            return e[y] = !0, e
        }

        function ce(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function de(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) o.attrHandle[n[i]] = t
        }

        function fe(e, t) {
            var n = t && e,
                o = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (o) return o;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function pe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function he(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function me(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ge(e) {
            return ue(function(t) {
                return t = +t, ue(function(n, o) {
                    for (var i, r = e([], n.length, t), a = r.length; a--;) n[i = r[a]] && (n[i] = !(o[i] = n[i]))
                })
            })
        }

        function be(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {}, r = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !z.test(t || n && n.nodeName || "HTML")
            }, f = se.setDocument = function(e) {
                var t, i, a = e ? e.ownerDocument || e : S;
                return a != p && 9 === a.nodeType && a.documentElement && (h = (p = a).documentElement, m = !r(p), S != p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.scope = ce(function(e) {
                    return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), n.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ce(function(e) {
                    return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = J.test(p.getElementsByClassName), n.getById = ce(function(e) {
                    return h.appendChild(e).id = y, !p.getElementsByName || !p.getElementsByName(y).length
                }), n.getById ? (o.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, o.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (o.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, o.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n, o, i, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                            for (i = t.getElementsByName(e), o = 0; r = i[o++];)
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                        }
                        return []
                    }
                }), o.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, o = [],
                        i = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[i++];) 1 === n.nodeType && o.push(n);
                        return o
                    }
                    return r
                }, o.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                }, b = [], g = [], (n.qsa = J.test(p.querySelectorAll)) && (ce(function(e) {
                    var t;
                    h.appendChild(e).innerHTML = "<a id='" + y + "'></a><select id='" + y + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + O + "*(?:value|" + N + ")"), e.querySelectorAll("[id~=" + y + "-]").length || g.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + O + "*name" + O + "*=" + O + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + y + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + O + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (n.matchesSelector = J.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
                    n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), b.push("!=", j)
                }), g = g.length && new RegExp(g.join("|")), b = b.length && new RegExp(b.join("|")), t = J.test(h.compareDocumentPosition), T = t || J.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        o = t && t.parentNode;
                    return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, M = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var o = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return o || (1 & (o = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === o ? e == p || e.ownerDocument == S && T(S, e) ? -1 : t == p || t.ownerDocument == S && T(S, t) ? 1 : c ? B(c, e) - B(c, t) : 0 : 4 & o ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, o = 0,
                        i = e.parentNode,
                        r = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !r) return e == p ? -1 : t == p ? 1 : i ? -1 : r ? 1 : c ? B(c, e) - B(c, t) : 0;
                    if (i === r) return fe(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[o] === s[o];) o++;
                    return o ? fe(a[o], s[o]) : a[o] == S ? -1 : s[o] == S ? 1 : 0
                }), p
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (f(e), n.matchesSelector && m && !P[t + " "] && (!b || !b.test(t)) && (!g || !g.test(t))) try {
                    var o = v.call(e, t);
                    if (o || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return o
                } catch (e) {
                    P(t, !0)
                }
                return 0 < se(t, p, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != p && f(e), T(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != p && f(e);
                var i = o.attrHandle[t.toLowerCase()],
                    r = i && x.call(o.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
                return void 0 !== r ? r : n.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(oe, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, o = [],
                    i = 0,
                    r = 0;
                if (d = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(M), d) {
                    for (; t = e[r++];) t === e[r] && (i = o.push(r));
                    for (; i--;) e.splice(o[i], 1)
                }
                return c = null, e
            }, i = se.getText = function(e) {
                var t, n = "",
                    o = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[o++];) n += i(t);
                return n
            }, (o = se.selectors = {
                cacheLength: 50,
                createPseudo: ue,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && q.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = E[e + " "];
                        return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && E(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(o) {
                            var i = se.attr(o, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(R, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, o, i) {
                        var r = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === o && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, d, f, p, h, m = r !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                b = s && t.nodeName.toLowerCase(),
                                v = !l && !s,
                                T = !1;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (f = t; f = f[m];)
                                            if (s ? f.nodeName.toLowerCase() === b : 1 === f.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild : g.lastChild], a && v) {
                                    for (T = (p = (u = (c = (d = (f = g)[y] || (f[y] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === w && u[1]) && u[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (T = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++T && f === t) {
                                            c[e] = [w, p, T];
                                            break
                                        }
                                } else if (v && (T = p = (u = (c = (d = (f = t)[y] || (f[y] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === w && u[1]), !1 === T)
                                    for (;
                                        (f = ++p && f && f[m] || (T = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== b : 1 !== f.nodeType) || !++T || (v && ((c = (d = f[y] || (f[y] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [w, T]), f !== t)););
                                return (T -= i) === o || T % o == 0 && 0 <= T / o
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = o.pseudos[e] || o.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return i[y] ? i(t) : 1 < i.length ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, n) {
                            for (var o, r = i(e, t), a = r.length; a--;) e[o = B(e, r[a])] = !(n[o] = r[a])
                        }) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: ue(function(e) {
                        var t = [],
                            n = [],
                            o = s(e.replace(V, "$1"));
                        return o[y] ? ue(function(e, t, n, i) {
                            for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, i, r) {
                            return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: ue(function(e) {
                        return function(t) {
                            return 0 < se(e, t).length
                        }
                    }),
                    contains: ue(function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return -1 < (t.textContent || i(t)).indexOf(e)
                            }
                    }),
                    lang: ue(function(e) {
                        return K.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: me(!1),
                    disabled: me(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !o.pseudos.empty(e)
                    },
                    header: function(e) {
                        return $.test(e.nodeName)
                    },
                    input: function(e) {
                        return Y.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ge(function() {
                        return [0]
                    }),
                    last: ge(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ge(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ge(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ge(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ge(function(e, t, n) {
                        for (var o = n < 0 ? n + t : t < n ? t : n; 0 <= --o;) e.push(o);
                        return e
                    }),
                    gt: ge(function(e, t, n) {
                        for (var o = n < 0 ? n + t : n; ++o < t;) e.push(o);
                        return e
                    })
                }
            }).pseudos.nth = o.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) o.pseudos[t] = pe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) o.pseudos[t] = he(t);

        function ve() {}

        function Te(e) {
            for (var t = 0, n = e.length, o = ""; t < n; t++) o += e[t].value;
            return o
        }

        function ye(e, t, n) {
            var o = t.dir,
                i = t.next,
                r = i || o,
                a = n && "parentNode" === r,
                s = A++;
            return t.first ? function(t, n, i) {
                for (; t = t[o];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, l) {
                var u, c, d, f = [w, s];
                if (l) {
                    for (; t = t[o];)
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else
                    for (; t = t[o];)
                        if (1 === t.nodeType || a)
                            if (c = (d = t[y] || (t[y] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[o] || t;
                            else {
                                if ((u = c[r]) && u[0] === w && u[1] === s) return f[2] = u[2];
                                if ((c[r] = f)[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function Se(e) {
            return 1 < e.length ? function(t, n, o) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, o)) return !1;
                return !0
            } : e[0]
        }

        function we(e, t, n, o, i) {
            for (var r, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(r = e[s]) && (n && !n(r, o, i) || (a.push(r), u && t.push(s)));
            return a
        }

        function Ae(e, t, n, o, i, r) {
            return o && !o[y] && (o = Ae(o)), i && !i[y] && (i = Ae(i, r)), ue(function(r, a, s, l) {
                var u, c, d, f = [],
                    p = [],
                    h = a.length,
                    m = r || function(e, t, n) {
                        for (var o = 0, i = t.length; o < i; o++) se(e, t[o], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    g = !e || !r && t ? m : we(m, f, e, s, l),
                    b = n ? i || (r ? e : h || o) ? [] : a : g;
                if (n && n(g, b, s, l), o)
                    for (u = we(b, p), o(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(g[p[c]] = d));
                if (r) {
                    if (i || e) {
                        if (i) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(g[c] = d);
                            i(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && -1 < (u = i ? B(r, d) : f[c]) && (r[u] = !(a[u] = d))
                    }
                } else b = we(b === a ? b.splice(h, b.length) : b), i ? i(null, a, b, l) : H.apply(a, b)
            })
        }

        function Ee(e) {
            for (var t, n, i, r = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = ye(function(e) {
                    return e === t
                }, s, !0), d = ye(function(e) {
                    return -1 < B(t, e)
                }, s, !0), f = [function(e, n, o) {
                    var i = !a && (o || n !== u) || ((t = n).nodeType ? c(e, n, o) : d(e, n, o));
                    return t = null, i
                }]; l < r; l++)
                if (n = o.relative[e[l].type]) f = [ye(Se(f), n)];
                else {
                    if ((n = o.filter[e[l].type].apply(null, e[l].matches))[y]) {
                        for (i = ++l; i < r && !o.relative[e[i].type]; i++);
                        return Ae(1 < l && Se(f), 1 < l && Te(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(V, "$1"), n, l < i && Ee(e.slice(l, i)), i < r && Ee(e = e.slice(i)), i < r && Te(e))
                    }
                    f.push(n)
                }
            return Se(f)
        }
        return ve.prototype = o.filters = o.pseudos, o.setFilters = new ve, a = se.tokenize = function(e, t) {
            var n, i, r, a, s, l, u, c = _[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, l = [], u = o.preFilter; s;) {
                for (a in n && !(i = W.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(r = [])), n = !1, (i = X.exec(s)) && (n = i.shift(), r.push({
                        value: n,
                        type: i[0].replace(V, " ")
                    }), s = s.slice(n.length)), o.filter) !(i = Q[a].exec(s)) || u[a] && !(i = u[a](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? se.error(e) : _(e, l).slice(0)
        }, s = se.compile = function(e, t) {
            var n, i, r, s, l, c, d = [],
                h = [],
                g = C[e + " "];
            if (!g) {
                for (t || (t = a(e)), n = t.length; n--;)(g = Ee(t[n]))[y] ? d.push(g) : h.push(g);
                (g = C(e, (i = h, s = 0 < (r = d).length, l = 0 < i.length, c = function(e, t, n, a, c) {
                    var d, h, g, b = 0,
                        v = "0",
                        T = e && [],
                        y = [],
                        S = u,
                        A = e || l && o.find.TAG("*", c),
                        E = w += null == S ? 1 : Math.random() || .1,
                        _ = A.length;
                    for (c && (u = t == p || t || c); v !== _ && null != (d = A[v]); v++) {
                        if (l && d) {
                            for (h = 0, t || d.ownerDocument == p || (f(d), n = !m); g = i[h++];)
                                if (g(d, t || p, n)) {
                                    a.push(d);
                                    break
                                }
                            c && (w = E)
                        }
                        s && ((d = !g && d) && b--, e && T.push(d))
                    }
                    if (b += v, s && v !== b) {
                        for (h = 0; g = r[h++];) g(T, y, t, n);
                        if (e) {
                            if (0 < b)
                                for (; v--;) T[v] || y[v] || (y[v] = G.call(a));
                            y = we(y)
                        }
                        H.apply(a, y), c && !e && 0 < y.length && 1 < b + r.length && se.uniqueSort(a)
                    }
                    return c && (w = E, u = S), T
                }, s ? ue(c) : c))).selector = e
            }
            return g
        }, l = se.select = function(e, t, n, i) {
            var r, l, u, c, d, f = "function" == typeof e && e,
                p = !i && a(e = f.selector || e);
            if (n = n || [], 1 === p.length) {
                if (2 < (l = p[0] = p[0].slice(0)).length && "ID" === (u = l[0]).type && 9 === t.nodeType && m && o.relative[l[1].type]) {
                    if (!(t = (o.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                    f && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (r = Q.needsContext.test(e) ? 0 : l.length; r-- && (u = l[r], !o.relative[c = u.type]);)
                    if ((d = o.find[c]) && (i = d(u.matches[0].replace(te, ne), ee.test(l[0].type) && be(t.parentNode) || t))) {
                        if (l.splice(r, 1), !(e = i.length && Te(l))) return H.apply(n, i), n;
                        break
                    }
            }
            return (f || s(e, p))(i, t, !m, n, !t || ee.test(e) && be(t.parentNode) || t), n
        }, n.sortStable = y.split("").sort(M).join("") === y, n.detectDuplicates = !!d, f(), n.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || de("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || de(N, function(e, t, n) {
            var o;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }), se
    }(e);
    S.find = A, S.expr = A.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = A.uniqueSort, S.text = A.getText, S.isXMLDoc = A.isXML, S.contains = A.contains, S.escapeSelector = A.escape;
    var E = function(e, t, n) {
            for (var o = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    o.push(e)
                }
            return o
        },
        _ = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        C = S.expr.match.needsContext;

    function P(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function x(e, t, n) {
        return h(t) ? S.grep(e, function(e, o) {
            return !!t.call(e, o, e) !== n
        }) : t.nodeType ? S.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? S.grep(e, function(e) {
            return -1 < s.call(t, e) !== n
        }) : S.filter(t, e, n)
    }
    S.filter = function(e, t, n) {
        var o = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? S.find.matchesSelector(o, e) ? [o] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, n, o = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < o; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < o; t++) S.find(e, i[t], n);
            return 1 < o ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(x(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(x(this, e || [], !0))
        },
        is: function(e) {
            return !!x(this, "string" == typeof e && C.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var o, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(o = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : G.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), M.test(o[1]) && S.isPlainObject(t))
                    for (o in t) h(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this
            }
            return (i = g.getElementById(o[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, D = S(g);
    var I = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function k(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, o = 0,
                i = this.length,
                r = [],
                a = "string" != typeof e && S(e);
            if (!C.test(e))
                for (; o < i; o++)
                    for (n = this[o]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(1 < r.length ? S.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(S(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return E(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return E(e, "parentNode", n)
        },
        next: function(e) {
            return k(e, "nextSibling")
        },
        prev: function(e) {
            return k(e, "previousSibling")
        },
        nextAll: function(e) {
            return E(e, "nextSibling")
        },
        prevAll: function(e) {
            return E(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return E(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return E(e, "previousSibling", n)
        },
        siblings: function(e) {
            return _((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return _(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && o(e.contentDocument) ? e.contentDocument : (P(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function(e, t) {
        S.fn[e] = function(n, o) {
            var i = S.map(this, t, n);
            return "Until" !== e.slice(-5) && (o = n), o && "string" == typeof o && (i = S.filter(o, i)), 1 < this.length && (H[e] || S.uniqueSort(i), I.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var B = /[^\x20\t\r\n\f]+/g;

    function N(e) {
        return e
    }

    function O(e) {
        throw e
    }

    function L(e, t, n, o) {
        var i;
        try {
            e && h(i = e.promise) ? i.call(e).done(t).fail(n) : e && h(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(o))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, S.each(t.match(B) || [], function(e, t) {
            n[t] = !0
        }), n) : S.extend({}, e);
        var o, i, r, a, s = [],
            l = [],
            u = -1,
            c = function() {
                for (a = a || e.once, r = o = !0; l.length; u = -1)
                    for (i = l.shift(); ++u < s.length;) !1 === s[u].apply(i[0], i[1]) && e.stopOnFalse && (u = s.length, i = !1);
                e.memory || (i = !1), o = !1, a && (s = i ? [] : "")
            },
            d = {
                add: function() {
                    return s && (i && !o && (u = s.length - 1, l.push(i)), function t(n) {
                        S.each(n, function(n, o) {
                            h(o) ? e.unique && d.has(o) || s.push(o) : o && o.length && "string" !== T(o) && t(o)
                        })
                    }(arguments), i && !o && c()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = S.inArray(t, s, n));) s.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = l = [], s = i = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = l = [], i || o || (s = i = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || c()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return d
    }, S.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                i = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return S.Deferred(function(t) {
                            S.each(n, function(n, o) {
                                var i = h(e[o[4]]) && e[o[4]];
                                r[o[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[o[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, o, i) {
                        var r = 0;

                        function a(t, n, o, i) {
                            return function() {
                                var s = this,
                                    l = arguments,
                                    u = function() {
                                        var e, u;
                                        if (!(t < r)) {
                                            if ((e = o.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            u = e && ("object" == typeof e || "function" == typeof e) && e.then, h(u) ? i ? u.call(e, a(r, n, N, i), a(r, n, O, i)) : (r++, u.call(e, a(r, n, N, i), a(r, n, O, i), a(r, n, N, n.notifyWith))) : (o !== N && (s = void 0, l = [e]), (i || n.resolveWith)(s, l))
                                        }
                                    },
                                    c = i ? u : function() {
                                        try {
                                            u()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, c.stackTrace), r <= t + 1 && (o !== O && (s = void 0, l = [e]), n.rejectWith(s, l))
                                        }
                                    };
                                t ? c() : (S.Deferred.getStackHook && (c.stackTrace = S.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return S.Deferred(function(e) {
                            n[0][3].add(a(0, e, h(i) ? i : N, e.notifyWith)), n[1][3].add(a(0, e, h(t) ? t : N)), n[2][3].add(a(0, e, h(o) ? o : O))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, i) : i
                    }
                },
                r = {};
            return S.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() {
                    o = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[t[0] + "With"] = a.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                o = Array(n),
                r = i.call(arguments),
                a = S.Deferred(),
                s = function(e) {
                    return function(n) {
                        o[e] = this, r[e] = 1 < arguments.length ? i.call(arguments) : n, --t || a.resolveWith(o, r)
                    }
                };
            if (t <= 1 && (L(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || h(r[n] && r[n].then))) return a.then();
            for (; n--;) L(r[n], s(n), a.reject);
            return a.promise()
        }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && F.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, S.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var j = S.Deferred();

    function R() {
        g.removeEventListener("DOMContentLoaded", R), e.removeEventListener("load", R), S.ready()
    }
    S.fn.ready = function(e) {
        return j.then(e).catch(function(e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || j.resolveWith(g, [S])
        }
    }), S.ready.then = j.then, "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll ? e.setTimeout(S.ready) : (g.addEventListener("DOMContentLoaded", R), e.addEventListener("load", R));
    var V = function(e, t, n, o, i, r, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === T(n))
                for (s in i = !0, n) V(e, t, s, n[s], !0, r, a);
            else if (void 0 !== o && (i = !0, h(o) || (a = !0), u && (a ? (t.call(e, o), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(S(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? o : o.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : r
        },
        W = /^-ms-/,
        X = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function q(e) {
        return e.replace(W, "ms-").replace(X, U)
    }
    var K = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = S.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var o, i = this.cache(e);
            if ("string" == typeof t) i[q(t)] = n;
            else
                for (o in t) i[q(o)] = t[o];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][q(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(q) : (t = q(t)) in o ? [t] : t.match(B) || []).length;
                    for (; n--;) delete o[t[n]]
                }(void 0 === t || S.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var z = new Q,
        Y = new Q,
        $ = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, n) {
        var o, i;
        if (void 0 === n && 1 === e.nodeType)
            if (o = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(o))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : $.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Y.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Y.hasData(e) || z.hasData(e)
        },
        data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        removeData: function(e, t) {
            Y.remove(e, t)
        },
        _data: function(e, t, n) {
            return z.access(e, t, n)
        },
        _removeData: function(e, t) {
            z.remove(e, t)
        }
    }), S.fn.extend({
        data: function(e, t) {
            var n, o, i, r = this[0],
                a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (i = Y.get(r), 1 === r.nodeType && !z.get(r, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (o = a[n].name).indexOf("data-") && (o = q(o.slice(5)), Z(r, o, i[o]));
                    z.set(r, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Y.set(this, e)
            }) : V(this, function(t) {
                var n;
                if (r && void 0 === t) return void 0 !== (n = Y.get(r, e)) ? n : void 0 !== (n = Z(r, e)) ? n : void 0;
                this.each(function() {
                    Y.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Y.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, n) {
            var o;
            if (e) return t = (t || "fx") + "queue", o = z.get(e, t), n && (!o || Array.isArray(n) ? o = z.access(e, t, S.makeArray(n)) : o.push(n)), o || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                o = n.length,
                i = n.shift(),
                r = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), o--), i && ("fx" === t && n.unshift("inprogress"), delete r.stop, i.call(e, function() {
                S.dequeue(e, t)
            }, r)), !o && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return z.get(e, n) || z.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    z.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? S.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = S.queue(this, e, t);
                S._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && S.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, o = 1,
                i = S.Deferred(),
                r = this,
                a = this.length,
                s = function() {
                    --o || i.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = z.get(r[a], e + "queueHooks")) && n.empty && (o++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        oe = g.documentElement,
        ie = function(e) {
            return S.contains(e.ownerDocument, e)
        },
        re = {
            composed: !0
        };
    oe.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, o) {
        var i, r, a = 20,
            s = o ? function() {
                return o.cur()
            } : function() {
                return S.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== u && +l) && te.exec(S.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; a--;) S.style(e, t, c + u), (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0), c /= r;
            c *= 2, S.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], o && (o.unit = u, o.start = c, o.end = i)), i
    }
    var le = {};

    function ue(e, t) {
        for (var n, o, i, r, a, s, l, u = [], c = 0, d = e.length; c < d; c++)(o = e[c]).style && (n = o.style.display, t ? ("none" === n && (u[c] = z.get(o, "display") || null, u[c] || (o.style.display = "")), "" === o.style.display && ae(o) && (u[c] = (l = a = r = void 0, a = (i = o).ownerDocument, s = i.nodeName, (l = le[s]) || (r = a.body.appendChild(a.createElement(s)), l = S.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), le[s] = l)))) : "none" !== n && (u[c] = "none", z.set(o, "display", n)));
        for (c = 0; c < d; c++) null != u[c] && (e[c].style.display = u[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, de, fe = /^(?:checkbox|radio)$/i,
        pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = g.createDocumentFragment().appendChild(g.createElement("div")), (de = g.createElement("input")).setAttribute("type", "radio"), de.setAttribute("checked", "checked"), de.setAttribute("name", "t"), ce.appendChild(de), p.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", p.option = !!ce.lastChild;
    var me = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ge(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && P(e, t) ? S.merge([e], n) : n
    }

    function be(e, t) {
        for (var n = 0, o = e.length; n < o; n++) z.set(e[n], "globalEval", !t || z.get(t[n], "globalEval"))
    }
    me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, p.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ve = /<|&#?\w+;/;

    function Te(e, t, n, o, i) {
        for (var r, a, s, l, u, c, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
            if ((r = e[p]) || 0 === r)
                if ("object" === T(r)) S.merge(f, r.nodeType ? [r] : r);
                else if (ve.test(r)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (pe.exec(r) || ["", ""])[1].toLowerCase(), l = me[s] || me._default, a.innerHTML = l[1] + S.htmlPrefilter(r) + l[2], c = l[0]; c--;) a = a.lastChild;
            S.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
        } else f.push(t.createTextNode(r));
        for (d.textContent = "", p = 0; r = f[p++];)
            if (o && -1 < S.inArray(r, o)) i && i.push(r);
            else if (u = ie(r), a = ge(d.appendChild(r), "script"), u && be(a), n)
            for (c = 0; r = a[c++];) he.test(r.type || "") && n.push(r);
        return d
    }
    var ye = /^key/,
        Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        we = /^([^.]*)(?:\.(.+)|)/;

    function Ae() {
        return !0
    }

    function Ee() {
        return !1
    }

    function _e(e, t) {
        return e === function() {
            try {
                return g.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ce(e, t, n, o, i, r) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (o = o || n, n = void 0), t) Ce(e, s, n, o, t[s], r);
            return e
        }
        if (null == o && null == i ? (i = n, o = n = void 0) : null == i && ("string" == typeof n ? (i = o, o = void 0) : (i = o, o = n, n = void 0)), !1 === i) i = Ee;
        else if (!i) return e;
        return 1 === r && (a = i, (i = function(e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, i, o, n)
        })
    }

    function Pe(e, t, n) {
        n ? (z.set(e, t, !1), S.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var o, r, a = z.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)(S.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = i.call(arguments), z.set(this, t, a), o = n(this, t), this[t](), a !== (r = z.get(this, t)) || o ? z.set(this, t, !1) : r = {}, a !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value
                } else a.length && (z.set(this, t, {
                    value: S.event.trigger(S.extend(a[0], S.Event.prototype), a.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === z.get(e, t) && S.event.add(e, t, Ae)
    }
    S.event = {
        global: {},
        add: function(e, t, n, o, i) {
            var r, a, s, l, u, c, d, f, p, h, m, g = z.get(e);
            if (K(e))
                for (n.handler && (n = (r = n).handler, i = r.selector), i && S.find.matchesSelector(oe, i), n.guid || (n.guid = S.guid++), (l = g.events) || (l = g.events = Object.create(null)), (a = g.handle) || (a = g.handle = function(t) {
                        return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(B) || [""]).length; u--;) p = m = (s = we.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p && (d = S.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = S.event.special[p] || {}, c = S.extend({
                    type: p,
                    origType: m,
                    data: o,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, r), (f = l[p]) || ((f = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, o, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, c) : f.push(c), S.event.global[p] = !0)
        },
        remove: function(e, t, n, o, i) {
            var r, a, s, l, u, c, d, f, p, h, m, g = z.hasData(e) && z.get(e);
            if (g && (l = g.events)) {
                for (u = (t = (t || "").match(B) || [""]).length; u--;)
                    if (p = m = (s = we.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = S.event.special[p] || {}, f = l[p = (o ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = f.length; r--;) c = f[r], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || o && o !== c.selector && ("**" !== o || !c.selector) || (f.splice(r, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || S.removeEvent(e, p, g.handle), delete l[p])
                    } else
                        for (p in l) S.event.remove(e, p + t[u], n, o, !0);
                S.isEmptyObject(l) && z.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, o, i, r, a, s = new Array(arguments.length),
                l = S.event.fix(e),
                u = (z.get(this, "events") || Object.create(null))[l.type] || [],
                c = S.event.special[l.type] || {};
            for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                for (a = S.event.handlers.call(this, l, u), t = 0;
                    (i = a[t++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = i.elem, n = 0;
                        (r = i.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (o = ((S.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) && !1 === (l.result = o) && (l.preventDefault(), l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l), l.result
            }
        },
        handlers: function(e, t) {
            var n, o, i, r, a, s = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (r = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (o = t[n]).selector + " "] && (a[i] = o.needsContext ? -1 < S(i, this).index(u) : S.find(i, this, null, [u]).length), a[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return u = this, l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(S.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && P(t, "input") && Pe(t, "click", Ae), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && P(t, "input") && Pe(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return fe.test(t.type) && t.click && P(t, "input") && z.get(t, "click") || P(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ae, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ae, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ae, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Se.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Pe(this, e, _e), !1
            },
            trigger: function() {
                return Pe(this, e), !0
            },
            delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        S.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, o = e.relatedTarget,
                    i = e.handleObj;
                return o && (o === this || S.contains(this, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), S.fn.extend({
        on: function(e, t, n, o) {
            return Ce(this, e, t, n, o)
        },
        one: function(e, t, n, o) {
            return Ce(this, e, t, n, o, 1)
        },
        off: function(e, t, n) {
            var o, i;
            if (e && e.preventDefault && e.handleObj) return o = e.handleObj, S(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var Me = /<script|<style|<link/i,
        xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ge(e, t) {
        return P(e, "table") && P(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function Ie(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function ke(e, t) {
        var n, o, i, r, a, s;
        if (1 === t.nodeType) {
            if (z.hasData(e) && (s = z.get(e).events))
                for (i in z.remove(t, "handle events"), s)
                    for (n = 0, o = s[i].length; n < o; n++) S.event.add(t, i, s[i][n]);
            Y.hasData(e) && (r = Y.access(e), a = S.extend({}, r), Y.set(t, a))
        }
    }

    function Be(e, t, n, o) {
        t = r(t);
        var i, a, s, l, u, c, d = 0,
            f = e.length,
            m = f - 1,
            g = t[0],
            b = h(g);
        if (b || 1 < f && "string" == typeof g && !p.checkClone && xe.test(g)) return e.each(function(i) {
            var r = e.eq(i);
            b && (t[0] = g.call(this, i, r.html())), Be(r, t, n, o)
        });
        if (f && (a = (i = Te(t, e[0].ownerDocument, !1, e, o)).firstChild, 1 === i.childNodes.length && (i = a), a || o)) {
            for (l = (s = S.map(ge(i, "script"), Ie)).length; d < f; d++) u = i, d !== m && (u = S.clone(u, !0, !0), l && S.merge(s, ge(u, "script"))), n.call(e[d], u, d);
            if (l)
                for (c = s[s.length - 1].ownerDocument, S.map(s, He), d = 0; d < l; d++) u = s[d], he.test(u.type || "") && !z.access(u, "globalEval") && S.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, c) : v(u.textContent.replace(De, ""), u, c))
        }
        return e
    }

    function Ne(e, t, n) {
        for (var o, i = t ? S.filter(t, e) : e, r = 0; null != (o = i[r]); r++) n || 1 !== o.nodeType || S.cleanData(ge(o)), o.parentNode && (n && ie(o) && be(ge(o, "script")), o.parentNode.removeChild(o));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var o, i, r, a, s, l, u, c = e.cloneNode(!0),
                d = ie(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ge(c), o = 0, i = (r = ge(e)).length; o < i; o++) s = r[o], "input" === (u = (l = a[o]).nodeName.toLowerCase()) && fe.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (r = r || ge(e), a = a || ge(c), o = 0, i = r.length; o < i; o++) ke(r[o], a[o]);
                else ke(e, c);
            return 0 < (a = ge(c, "script")).length && be(a, !d && ge(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, o, i = S.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (K(n)) {
                    if (t = n[z.expando]) {
                        if (t.events)
                            for (o in t.events) i[o] ? S.event.remove(n, o) : S.removeEvent(n, o, t.handle);
                        n[z.expando] = void 0
                    }
                    n[Y.expando] && (n[Y.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Ne(this, e, !0)
        },
        remove: function(e) {
            return Ne(this, e)
        },
        text: function(e) {
            return V(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Be(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ge(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Be(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ge(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Be(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Be(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ge(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return V(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    o = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Me.test(e) && !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < o; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ge(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Be(this, arguments, function(t) {
                var n = this.parentNode;
                S.inArray(this, e) < 0 && (S.cleanData(ge(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        S.fn[e] = function(e) {
            for (var n, o = [], i = S(e), r = i.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), S(i[s])[t](n), a.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Oe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Le = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Fe = function(e, t, n) {
            var o, i, r = {};
            for (i in t) r[i] = e.style[i], e.style[i] = t[i];
            for (i in o = n.call(e), t) e.style[i] = r[i];
            return o
        },
        je = new RegExp(ne.join("|"), "i");

    function Re(e, t, n) {
        var o, i, r, a, s = e.style;
        return (n = n || Le(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !p.pixelBoxStyles() && Oe.test(a) && je.test(t) && (o = s.width, i = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = o, s.minWidth = i, s.maxWidth = r)), void 0 !== a ? a + "" : a
    }

    function Ve(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(u).appendChild(c);
                var t = e.getComputedStyle(c);
                o = "1%" !== t.top, l = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), i = 36 === n(t.width), c.style.position = "absolute", r = 12 === n(c.offsetWidth / 3), oe.removeChild(u), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var o, i, r, a, s, l, u = g.createElement("div"),
            c = g.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, S.extend(p, {
            boxSizingReliable: function() {
                return t(), i
            },
            pixelBoxStyles: function() {
                return t(), a
            },
            pixelPosition: function() {
                return t(), o
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), r
            },
            reliableTrDimensions: function() {
                var t, n, o, i;
                return null == s && (t = g.createElement("table"), n = g.createElement("tr"), o = g.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", o.style.height = "9px", oe.appendChild(t).appendChild(n).appendChild(o), i = e.getComputedStyle(n), s = 3 < parseInt(i.height), oe.removeChild(t)), s
            }
        }))
    }();
    var We = ["Webkit", "Moz", "ms"],
        Xe = g.createElement("div").style,
        Ue = {};

    function qe(e) {
        return S.cssProps[e] || Ue[e] || (e in Xe ? e : Ue[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = We.length; n--;)
                if ((e = We[n] + t) in Xe) return e
        }(e) || e)
    }
    var Ke = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        ze = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ye = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function $e(e, t, n) {
        var o = te.exec(t);
        return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t
    }

    function Je(e, t, n, o, i, r) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (o ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += S.css(e, n + ne[a], !0, i)), o ? ("content" === n && (l -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (l -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (l += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? l += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !o && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - .5)) || 0), l
    }

    function Ze(e, t, n) {
        var o = Le(e),
            i = (!p.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, o),
            r = i,
            a = Re(e, t, o),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Oe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!p.boxSizingReliable() && i || !p.reliableTrDimensions() && P(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, o)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, o), (r = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Je(e, t, n || (i ? "border" : "content"), r, o, a) + "px"
    }

    function et(e, t, n, o, i) {
        return new et.prototype.init(e, t, n, o, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Re(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, r, a, s = q(t),
                    l = Qe.test(t),
                    u = e.style;
                if (l || (t = qe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, o)) ? i : u[t];
                "string" == (r = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), r = "number"), null != n && n == n && ("number" !== r || l || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, o)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, o) {
            var i, r, a, s = q(t);
            return Qe.test(t) || (t = qe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Re(e, t, o)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (r = parseFloat(i), !0 === n || isFinite(r) ? r || 0 : i) : i
        }
    }), S.each(["height", "width"], function(e, t) {
        S.cssHooks[t] = {
            get: function(e, n, o) {
                if (n) return !Ke.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, o) : Fe(e, ze, function() {
                    return Ze(e, t, o)
                })
            },
            set: function(e, n, o) {
                var i, r = Le(e),
                    a = !p.scrollboxSize() && "absolute" === r.position,
                    s = (a || o) && "border-box" === S.css(e, "boxSizing", !1, r),
                    l = o ? Je(e, t, o, s, r) : 0;
                return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Je(e, t, "border", !1, r) - .5)), l && (i = te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = S.css(e, t)), $e(0, n, l)
            }
        }
    }), S.cssHooks.marginLeft = Ve(p.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Re(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        S.cssHooks[e + t] = {
            expand: function(n) {
                for (var o = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; o < 4; o++) i[e + ne[o] + t] = r[o] || r[o - 2] || r[0];
                return i
            }
        }, "margin" !== e && (S.cssHooks[e + t].set = $e)
    }), S.fn.extend({
        css: function(e, t) {
            return V(this, function(e, t, n) {
                var o, i, r = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (o = Le(e), i = t.length; a < i; a++) r[t[a]] = S.css(e, t[a], !1, o);
                    return r
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, o, i, r) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = r || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[qe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = et.prototype.init, S.fx.step = {};
    var tt, nt, ot, it, rt = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === g.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, S.fx.interval), S.fx.tick())
    }

    function lt() {
        return e.setTimeout(function() {
            tt = void 0
        }), tt = Date.now()
    }

    function ut(e, t) {
        var n, o = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; o < 4; o += 2 - t) i["margin" + (n = ne[o])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var o, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), r = 0, a = i.length; r < a; r++)
            if (o = i[r].call(n, t, e)) return o
    }

    function dt(e, t, n) {
        var o, i, r = 0,
            a = dt.prefilters.length,
            s = S.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var t = tt || lt(), n = Math.max(0, u.startTime + u.duration - t), o = 1 - (n / u.duration || 0), r = 0, a = u.tweens.length; r < a; r++) u.tweens[r].run(o);
                return s.notifyWith(e, [u, o, n]), o < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: S.extend({}, t),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: tt || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var o = S.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(o), o
                },
                stop: function(t) {
                    var n = 0,
                        o = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < o; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (function(e, t) {
                var n, o, i, r, a;
                for (n in e)
                    if (i = t[o = q(n)], r = e[n], Array.isArray(r) && (i = r[1], r = e[n] = r[0]), n !== o && (e[o] = r, delete e[n]), (a = S.cssHooks[o]) && "expand" in a)
                        for (n in r = a.expand(r), delete e[o], r) n in e || (e[n] = r[n], t[n] = i);
                    else t[o] = i
            }(c, u.opts.specialEasing); r < a; r++)
            if (o = dt.prefilters[r].call(u, e, c, u.opts)) return h(o.stop) && (S._queueHooks(u.elem, u.opts.queue).stop = o.stop.bind(o)), o;
        return S.map(c, ct, u), h(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), S.fx.timer(S.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    S.Animation = S.extend(dt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            h(e) ? (t = e, e = ["*"]) : e = e.match(B);
            for (var n, o = 0, i = e.length; o < i; o++) n = e[o], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var o, i, r, a, s, l, u, c, d = "width" in t || "height" in t,
                f = this,
                p = {},
                h = e.style,
                m = e.nodeType && ae(e),
                g = z.get(e, "fxshow");
            for (o in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, f.always(function() {
                    f.always(function() {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[o], rt.test(i)) {
                    if (delete t[o], r = r || "toggle" === i, i === (m ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[o]) continue;
                        m = !0
                    }
                    p[o] = g && g[o] || S.style(e, o)
                }
            if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(p))
                for (o in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = g && g.display) && (u = z.get(e, "display")), "none" === (c = S.css(e, "display")) && (u ? c = u : (ue([e], !0), u = e.style.display || u, c = S.css(e, "display"), ue([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === S.css(e, "float") && (l || (f.done(function() {
                        h.display = u
                    }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = z.access(e, "fxshow", {
                    display: u
                }), r && (g.hidden = !m), m && ue([e], !0), f.done(function() {
                    for (o in m || ue([e]), z.remove(e, "fxshow"), p) S.style(e, o, p[o])
                })), l = ct(m ? g[o] : 0, o, f), o in g || (g[o] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }), S.speed = function(e, t, n) {
        var o = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || h(e) && e,
            duration: e,
            easing: n && t || t && !h(t) && t
        };
        return S.fx.off ? o.duration = 0 : "number" != typeof o.duration && (o.duration in S.fx.speeds ? o.duration = S.fx.speeds[o.duration] : o.duration = S.fx.speeds._default), null != o.queue && !0 !== o.queue || (o.queue = "fx"), o.old = o.complete, o.complete = function() {
            h(o.old) && o.old.call(this), o.queue && S.dequeue(this, o.queue)
        }, o
    }, S.fn.extend({
        fadeTo: function(e, t, n, o) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, o)
        },
        animate: function(e, t, n, o) {
            var i = S.isEmptyObject(e),
                r = S.speed(t, n, o),
                a = function() {
                    var t = dt(this, S.extend({}, e), r);
                    (i || z.get(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(e, t, n) {
            var o = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    r = S.timers,
                    a = z.get(this);
                if (i) a[i] && a[i].stop && o(a[i]);
                else
                    for (i in a) a[i] && a[i].stop && at.test(i) && o(a[i]);
                for (i = r.length; i--;) r[i].elem !== this || null != e && r[i].queue !== e || (r[i].anim.stop(n), t = !1, r.splice(i, 1));
                !t && n || S.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = z.get(this),
                    o = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    r = S.timers,
                    a = o ? o.length : 0;
                for (n.finish = !0, S.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < a; t++) o[t] && o[t].finish && o[t].finish.call(this);
                delete n.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, t) {
        var n = S.fn[t];
        S.fn[t] = function(e, o, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, o, i)
        }
    }), S.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        S.fn[e] = function(e, n, o) {
            return this.animate(t, e, n, o)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function() {
        nt || (nt = !0, st())
    }, S.fx.stop = function() {
        nt = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(t, n) {
        return t = S.fx && S.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, o) {
            var i = e.setTimeout(n, t);
            o.stop = function() {
                e.clearTimeout(i)
            }
        })
    }, ot = g.createElement("input"), it = g.createElement("select").appendChild(g.createElement("option")), ot.type = "checkbox", p.checkOn = "" !== ot.value, p.optSelected = it.selected, (ot = g.createElement("input")).value = "t", ot.type = "radio", p.radioValue = "t" === ot.value;
    var ft, pt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return V(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, n) {
            var o, i, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === r && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (o = i.get(e, t)) ? o : null == (o = S.find.attr(e, t)) ? void 0 : o)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && P(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, o = 0,
                i = t && t.match(B);
            if (i && 1 === e.nodeType)
                for (; n = i[o++];) e.removeAttribute(n)
        }
    }), ft = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = pt[t] || S.find.attr;
        pt[t] = function(e, t, o) {
            var i, r, a = t.toLowerCase();
            return o || (r = pt[a], pt[a] = i, i = null != n(e, t, o) ? a : null, pt[a] = r), i
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        mt = /^(?:a|area)$/i;

    function gt(e) {
        return (e.match(B) || []).join(" ")
    }

    function bt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(B) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return V(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, n) {
            var o, i, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : e[t] = n : i && "get" in i && null !== (o = i.get(e, t)) ? o : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function(e) {
            var t, n, o, i, r, a, s, l = 0;
            if (h(e)) return this.each(function(t) {
                S(this).addClass(e.call(this, t, bt(this)))
            });
            if ((t = vt(e)).length)
                for (; n = this[l++];)
                    if (i = bt(n), o = 1 === n.nodeType && " " + gt(i) + " ") {
                        for (a = 0; r = t[a++];) o.indexOf(" " + r + " ") < 0 && (o += r + " ");
                        i !== (s = gt(o)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, o, i, r, a, s, l = 0;
            if (h(e)) return this.each(function(t) {
                S(this).removeClass(e.call(this, t, bt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = vt(e)).length)
                for (; n = this[l++];)
                    if (i = bt(n), o = 1 === n.nodeType && " " + gt(i) + " ") {
                        for (a = 0; r = t[a++];)
                            for (; - 1 < o.indexOf(" " + r + " ");) o = o.replace(" " + r + " ", " ");
                        i !== (s = gt(o)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                o = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && o ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each(function(n) {
                S(this).toggleClass(e.call(this, n, bt(this), t), t)
            }) : this.each(function() {
                var t, i, r, a;
                if (o)
                    for (i = 0, r = S(this), a = vt(e); t = a[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = bt(this)) && z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : z.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, o = 0;
            for (t = " " + e + " "; n = this[o++];)
                if (1 === n.nodeType && -1 < (" " + gt(bt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var Tt = /\r/g;
    S.fn.extend({
        val: function(e) {
            var t, n, o, i = this[0];
            return arguments.length ? (o = h(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = o ? e.call(this, n, S(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = S.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(Tt, "") : null == n ? "" : n : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : gt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, o, i = e.options,
                        r = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        l = a ? r + 1 : i.length;
                    for (o = r < 0 ? l : a ? r : 0; o < l; o++)
                        if (((n = i[o]).selected || o === r) && !n.disabled && (!n.parentNode.disabled || !P(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, o, i = e.options, r = S.makeArray(t), a = i.length; a--;)((o = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(o), r)) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, p.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.focusin = "onfocusin" in e;
    var yt = /^(?:focusinfocus|focusoutblur)$/,
        St = function(e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function(t, n, o, i) {
            var r, a, s, l, u, d, f, p, b = [o || g],
                v = c.call(t, "type") ? t.type : t,
                T = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = s = o = o || g, 3 !== o.nodeType && 8 !== o.nodeType && !yt.test(v + S.event.triggered) && (-1 < v.indexOf(".") && (v = (T = v.split(".")).shift(), T.sort()), u = v.indexOf(":") < 0 && "on" + v, (t = t[S.expando] ? t : new S.Event(v, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = T.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + T.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : S.makeArray(n, [t]), f = S.event.special[v] || {}, i || !f.trigger || !1 !== f.trigger.apply(o, n))) {
                if (!i && !f.noBubble && !m(o)) {
                    for (l = f.delegateType || v, yt.test(l + v) || (a = a.parentNode); a; a = a.parentNode) b.push(a), s = a;
                    s === (o.ownerDocument || g) && b.push(s.defaultView || s.parentWindow || e)
                }
                for (r = 0;
                    (a = b[r++]) && !t.isPropagationStopped();) p = a, t.type = 1 < r ? l : f.bindType || v, (d = (z.get(a, "events") || Object.create(null))[t.type] && z.get(a, "handle")) && d.apply(a, n), (d = u && a[u]) && d.apply && K(a) && (t.result = d.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = v, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(b.pop(), n) || !K(o) || u && h(o[v]) && !m(o) && ((s = o[u]) && (o[u] = null), S.event.triggered = v, t.isPropagationStopped() && p.addEventListener(v, St), o[v](), t.isPropagationStopped() && p.removeEventListener(v, St), S.event.triggered = void 0, s && (o[u] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var o = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(o, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), p.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            S.event.simulate(t, e.target, S.event.fix(e))
        };
        S.event.special[t] = {
            setup: function() {
                var o = this.ownerDocument || this.document || this,
                    i = z.access(o, t);
                i || o.addEventListener(e, n, !0), z.access(o, t, (i || 0) + 1)
            },
            teardown: function() {
                var o = this.ownerDocument || this.document || this,
                    i = z.access(o, t) - 1;
                i ? z.access(o, t, i) : (o.removeEventListener(e, n, !0), z.remove(o, t))
            }
        }
    });
    var wt = e.location,
        At = {
            guid: Date.now()
        },
        Et = /\?/;
    S.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + t), n
    };
    var _t = /\[\]$/,
        Ct = /\r?\n/g,
        Pt = /^(?:submit|button|image|reset|file)$/i,
        Mt = /^(?:input|select|textarea|keygen)/i;

    function xt(e, t, n, o) {
        var i;
        if (Array.isArray(t)) S.each(t, function(t, i) {
            n || _t.test(e) ? o(e, i) : xt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, o)
        });
        else if (n || "object" !== T(t)) o(e, t);
        else
            for (i in t) xt(e + "[" + i + "]", t[i], n, o)
    }
    S.param = function(e, t) {
        var n, o = [],
            i = function(e, t) {
                var n = h(t) ? t() : t;
                o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) xt(n, e[n], t, i);
        return o.join("&")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Mt.test(this.nodeName) && !Pt.test(e) && (this.checked || !fe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ct, "\r\n")
                }
            }).get()
        }
    });
    var Dt = /%20/g,
        Gt = /#.*$/,
        It = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        kt = /^(?:GET|HEAD)$/,
        Bt = /^\/\//,
        Nt = {},
        Ot = {},
        Lt = "*/".concat("*"),
        Ft = g.createElement("a");

    function jt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var o, i = 0,
                r = t.toLowerCase().match(B) || [];
            if (h(n))
                for (; o = r[i++];) "+" === o[0] ? (o = o.slice(1) || "*", (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n)
        }
    }

    function Rt(e, t, n, o) {
        var i = {},
            r = e === Ot;

        function a(s) {
            var l;
            return i[s] = !0, S.each(e[s] || [], function(e, s) {
                var u = s(t, n, o);
                return "string" != typeof u || r || i[u] ? r ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
            }), l
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function Vt(e, t) {
        var n, o, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : o || (o = {}))[n] = t[n]);
        return o && S.extend(!0, e, o), e
    }
    Ft.href = wt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Lt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Vt(Vt(e, S.ajaxSettings), t) : Vt(S.ajaxSettings, e)
        },
        ajaxPrefilter: jt(Nt),
        ajaxTransport: jt(Ot),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, i, r, a, s, l, u, c, d, f, p = S.ajaxSetup({}, n),
                h = p.context || p,
                m = p.context && (h.nodeType || h.jquery) ? S(h) : S.event,
                b = S.Deferred(),
                v = S.Callbacks("once memory"),
                T = p.statusCode || {},
                y = {},
                w = {},
                A = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = Ht.exec(r);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return u ? r : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) E.always(e[E.status]);
                            else
                                for (t in e) T[t] = [T[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || A;
                        return o && o.abort(t), _(0, t), this
                    }
                };
            if (b.promise(E), p.url = ((t || p.url || wt.href) + "").replace(Bt, wt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(B) || [""], null == p.crossDomain) {
                l = g.createElement("a");
                try {
                    l.href = p.url, l.href = l.href, p.crossDomain = Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = S.param(p.data, p.traditional)), Rt(Nt, p, n, E), u) return E;
            for (d in (c = S.event && p.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !kt.test(p.type), i = p.url.replace(Gt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Dt, "+")) : (f = p.url.slice(i.length), p.data && (p.processData || "string" == typeof p.data) && (i += (Et.test(i) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (i = i.replace(It, "$1"), f = (Et.test(i) ? "&" : "?") + "_=" + At.guid++ + f), p.url = i + f), p.ifModified && (S.lastModified[i] && E.setRequestHeader("If-Modified-Since", S.lastModified[i]), S.etag[i] && E.setRequestHeader("If-None-Match", S.etag[i])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && E.setRequestHeader("Content-Type", p.contentType), E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : p.accepts["*"]), p.headers) E.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, E, p) || u)) return E.abort();
            if (A = "abort", v.add(p.complete), E.done(p.success), E.fail(p.error), o = Rt(Ot, p, n, E)) {
                if (E.readyState = 1, c && m.trigger("ajaxSend", [E, p]), u) return E;
                p.async && 0 < p.timeout && (s = e.setTimeout(function() {
                    E.abort("timeout")
                }, p.timeout));
                try {
                    u = !1, o.send(y, _)
                } catch (t) {
                    if (u) throw t;
                    _(-1, t)
                }
            } else _(-1, "No Transport");

            function _(t, n, a, l) {
                var d, f, g, y, w, A = n;
                u || (u = !0, s && e.clearTimeout(s), o = void 0, r = l || "", E.readyState = 0 < t ? 4 : 0, d = 200 <= t && t < 300 || 304 === t, a && (y = function(e, t, n) {
                    for (var o, i, r, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (o)
                        for (i in s)
                            if (s[i] && s[i].test(o)) {
                                l.unshift(i);
                                break
                            }
                    if (l[0] in n) r = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                r = i;
                                break
                            }
                            a || (a = i)
                        }
                        r = r || a
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r]
                }(p, E, a)), !d && -1 < S.inArray("script", p.dataTypes) && (p.converters["text script"] = function() {}), y = function(e, t, n, o) {
                    var i, r, a, s, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                    for (r = c.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(a = u[l + " " + r] || u["* " + r]))
                            for (i in u)
                                if ((s = i.split(" "))[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    !0 === a ? a = u[i] : !0 !== u[i] && (r = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, y, E, d), d ? (p.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (S.lastModified[i] = w), (w = E.getResponseHeader("etag")) && (S.etag[i] = w)), 204 === t || "HEAD" === p.type ? A = "nocontent" : 304 === t ? A = "notmodified" : (A = y.state, f = y.data, d = !(g = y.error))) : (g = A, !t && A || (A = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || A) + "", d ? b.resolveWith(h, [f, A, E]) : b.rejectWith(h, [E, A, g]), E.statusCode(T), T = void 0, c && m.trigger(d ? "ajaxSuccess" : "ajaxError", [E, p, d ? f : g]), v.fireWith(h, [E, A]), c && (m.trigger("ajaxComplete", [E, p]), --S.active || S.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, t) {
        S[t] = function(e, n, o, i) {
            return h(n) && (i = i || o, o = n, n = void 0), S.ajax(S.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: o
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return h(e) ? this.each(function(t) {
                S(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = S(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = h(e);
            return this.each(function(n) {
                S(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Wt = {
            0: 200,
            1223: 204
        },
        Xt = S.ajaxSettings.xhr();
    p.cors = !!Xt && "withCredentials" in Xt, p.ajax = Xt = !!Xt, S.ajaxTransport(function(t) {
        var n, o;
        if (p.cors || Xt && !t.crossDomain) return {
            send: function(i, r) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = o = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), o = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = o : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && o()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (i) {
                    if (n) throw i
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(o, i) {
                t = S("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                }), g.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Ut, qt = [],
        Kt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = qt.pop() || S.expando + "_" + At.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(t, n, o) {
        var i, r, a, s = !1 !== t.jsonp && (Kt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Kt, "$1" + i) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || S.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", r = e[i], e[i] = function() {
            a = arguments
        }, o.always(function() {
            void 0 === r ? S(e).removeProp(i) : e[i] = r, t[i] && (t.jsonpCallback = n.jsonpCallback, qt.push(i)), a && h(r) && r(a[0]), a = r = void 0
        }), "script"
    }), p.createHTMLDocument = ((Ut = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((o = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href, t.head.appendChild(o)) : t = g), r = !n && [], (i = M.exec(e)) ? [t.createElement(i[1])] : (i = Te([e], t, r), r && r.length && S(r).remove(), S.merge([], i.childNodes)));
        var o, i, r
    }, S.fn.load = function(e, t, n) {
        var o, i, r, a = this,
            s = e.indexOf(" ");
        return -1 < s && (o = gt(e.slice(s)), e = e.slice(0, s)), h(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, a.html(o ? S("<div>").append(S.parseHTML(e)).find(o) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function(e) {
        return S.grep(S.timers, function(t) {
            return e === t.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, n) {
            var o, i, r, a, s, l, u = S.css(e, "position"),
                c = S(e),
                d = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), r = S.css(e, "top"), l = S.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < (r + l).indexOf("auto") ? (a = (o = c.position()).top, i = o.left) : (a = parseFloat(r) || 0, i = parseFloat(l) || 0), h(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), c.css(d))
        }
    }, S.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                S.offset.setOffset(this, e, t)
            });
            var t, n, o = this[0];
            return o ? o.getClientRects().length ? (t = o.getBoundingClientRect(), n = o.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, o = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(o, "position")) t = o.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = o.ownerDocument, e = o.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position");) e = e.parentNode;
                    e && e !== o && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(o, "marginTop", !0),
                    left: t.left - i.left - S.css(o, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
                return e || oe
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        S.fn[e] = function(o) {
            return V(this, function(e, o, i) {
                var r;
                if (m(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === i) return r ? r[t] : e[o];
                r ? r.scrollTo(n ? r.pageXOffset : i, n ? i : r.pageYOffset) : e[o] = i
            }, e, o, arguments.length)
        }
    }), S.each(["top", "left"], function(e, t) {
        S.cssHooks[t] = Ve(p.pixelPosition, function(e, n) {
            if (n) return n = Re(e, t), Oe.test(n) ? S(e).position()[t] + "px" : n
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        S.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, o) {
            S.fn[o] = function(i, r) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === r ? "margin" : "border");
                return V(this, function(t, n, i) {
                    var r;
                    return m(t) ? 0 === o.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? S.css(t, n, s) : S.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, o) {
            return this.on(t, e, n, o)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        S.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, o, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), h(e)) return o = i.call(arguments, 2), (r = function() {
            return e.apply(t || this, o.concat(i.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, r
    }, S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = P, S.isFunction = h, S.isWindow = m, S.camelCase = q, S.type = T, S.now = Date.now, S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Qt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var zt = e.jQuery,
        Yt = e.$;
    return S.noConflict = function(t) {
        return e.$ === S && (e.$ = Yt), t && e.jQuery === S && (e.jQuery = zt), S
    }, void 0 === t && (e.jQuery = e.$ = S), S
}),
function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(o, i, function(t) {
                return e[t]
            }.bind(null, i));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 11)
}({
    "+6XX": function(e, t, n) {
        var o = n("y1pI");
        e.exports = function(e) {
            return o(this.__data__, e) > -1
        }
    },
    "/9aa": function(e, t, n) {
        var o = n("NykK"),
            i = n("ExA7");
        e.exports = function(e) {
            return "symbol" == typeof e || i(e) && "[object Symbol]" == o(e)
        }
    },
    "03A+": function(e, t, n) {
        var o = n("JTzB"),
            i = n("ExA7"),
            r = Object.prototype,
            a = r.hasOwnProperty,
            s = r.propertyIsEnumerable,
            l = o(function() {
                return arguments
            }()) ? o : function(e) {
                return i(e) && a.call(e, "callee") && !s.call(e, "callee")
            };
        e.exports = l
    },
    11: function(e, t, n) {
        e.exports = n("YEMR")
    },
    "2gN3": function(e, t, n) {
        var o = n("Kz5y")["__core-js_shared__"];
        e.exports = o
    },
    "3Fdi": function(e, t) {
        var n = Function.prototype.toString;
        e.exports = function(e) {
            if (null != e) {
                try {
                    return n.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }
    },
    "44Ds": function(e, t, n) {
        var o = n("e4Nc");

        function i(e, t) {
            if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
            var n = function() {
                var o = arguments,
                    i = t ? t.apply(this, o) : o[0],
                    r = n.cache;
                if (r.has(i)) return r.get(i);
                var a = e.apply(this, o);
                return n.cache = r.set(i, a) || r, a
            };
            return n.cache = new(i.Cache || o), n
        }
        i.Cache = o, e.exports = i
    },
    "4kuk": function(e, t, n) {
        var o = n("SfRM"),
            i = n("Hvzi"),
            r = n("u8Dt"),
            a = n("ekgI"),
            s = n("JSQU");

        function l(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var o = e[t];
                this.set(o[0], o[1])
            }
        }
        l.prototype.clear = o, l.prototype.delete = i, l.prototype.get = r, l.prototype.has = a, l.prototype.set = s, e.exports = l
    },
    "4uTw": function(e, t, n) {
        var o = n("Z0cm"),
            i = n("9ggG"),
            r = n("GNiM"),
            a = n("dt0z");
        e.exports = function(e, t) {
            return o(e) ? e : i(e, t) ? [e] : r(a(e))
        }
    },
    "6sVZ": function(e, t) {
        var n = Object.prototype;
        e.exports = function(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || n)
        }
    },
    "7GkX": function(e, t, n) {
        var o = n("b80T"),
            i = n("A90E"),
            r = n("MMmD");
        e.exports = function(e) {
            return r(e) ? o(e) : i(e)
        }
    },
    "9Nap": function(e, t, n) {
        var o = n("/9aa");
        e.exports = function(e) {
            if ("string" == typeof e || o(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t
        }
    },
    "9ggG": function(e, t, n) {
        var o = n("Z0cm"),
            i = n("/9aa"),
            r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            a = /^\w*$/;
        e.exports = function(e, t) {
            if (o(e)) return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !i(e)) || a.test(e) || !r.test(e) || null != t && e in Object(t)
        }
    },
    A90E: function(e, t, n) {
        var o = n("6sVZ"),
            i = n("V6Ve"),
            r = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            if (!o(e)) return i(e);
            var t = [];
            for (var n in Object(e)) r.call(e, n) && "constructor" != n && t.push(n);
            return t
        }
    },
    AP2z: function(e, t, n) {
        var o = n("nmnc"),
            i = Object.prototype,
            r = i.hasOwnProperty,
            a = i.toString,
            s = o ? o.toStringTag : void 0;
        e.exports = function(e) {
            var t = r.call(e, s),
                n = e[s];
            try {
                e[s] = void 0;
                var o = !0
            } catch (e) {}
            var i = a.call(e);
            return o && (t ? e[s] = n : delete e[s]), i
        }
    },
    B8du: function(e, t) {
        e.exports = function() {
            return !1
        }
    },
    Cwc5: function(e, t, n) {
        var o = n("NKxu"),
            i = n("Npjl");
        e.exports = function(e, t) {
            var n = i(e, t);
            return o(n) ? n : void 0
        }
    },
    DSRE: function(e, t, n) {
        (function(e) {
            var o = n("Kz5y"),
                i = n("B8du"),
                r = t && !t.nodeType && t,
                a = r && "object" == typeof e && e && !e.nodeType && e,
                s = a && a.exports === r ? o.Buffer : void 0,
                l = (s ? s.isBuffer : void 0) || i;
            e.exports = l
        }).call(this, n("YuTi")(e))
    },
    E2jh: function(e, t, n) {
        var o, i = n("2gN3"),
            r = (o = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + o : "";
        e.exports = function(e) {
            return !!r && r in e
        }
    },
    EpBk: function(e, t) {
        e.exports = function(e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
        }
    },
    EwQA: function(e, t, n) {
        var o = n("zZ0H");
        e.exports = function(e) {
            return "function" == typeof e ? e : o
        }
    },
    ExA7: function(e, t) {
        e.exports = function(e) {
            return null != e && "object" == typeof e
        }
    },
    F6Lr: function(e, t, n) {
        var o = n("S+gy"),
            i = n("lQqw")(o, !0);
        e.exports = i
    },
    GNiM: function(e, t, n) {
        var o = n("I01J"),
            i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            r = /\\(\\)?/g,
            a = o(function(e) {
                var t = [];
                return 46 === e.charCodeAt(0) && t.push(""), e.replace(i, function(e, n, o, i) {
                    t.push(o ? i.replace(r, "$1") : n || e)
                }), t
            });
        e.exports = a
    },
    GoyQ: function(e, t) {
        e.exports = function(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
    },
    H8j4: function(e, t, n) {
        var o = n("QkVE");
        e.exports = function(e, t) {
            var n = o(this, e),
                i = n.size;
            return n.set(e, t), this.size += n.size == i ? 0 : 1, this
        }
    },
    Hvzi: function(e, t) {
        e.exports = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
    },
    I01J: function(e, t, n) {
        var o = n("44Ds");
        e.exports = function(e) {
            var t = o(e, function(e) {
                    return 500 === n.size && n.clear(), e
                }),
                n = t.cache;
            return t
        }
    },
    JHgL: function(e, t, n) {
        var o = n("QkVE");
        e.exports = function(e) {
            return o(this, e).get(e)
        }
    },
    JSQU: function(e, t, n) {
        var o = n("YESw");
        e.exports = function(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = o && void 0 === t ? "__lodash_hash_undefined__" : t, this
        }
    },
    JTzB: function(e, t, n) {
        var o = n("NykK"),
            i = n("ExA7");
        e.exports = function(e) {
            return i(e) && "[object Arguments]" == o(e)
        }
    },
    KMkd: function(e, t) {
        e.exports = function() {
            this.__data__ = [], this.size = 0
        }
    },
    KfNM: function(e, t) {
        var n = Object.prototype.toString;
        e.exports = function(e) {
            return n.call(e)
        }
    },
    Kz5y: function(e, t, n) {
        var o = n("WFqU"),
            i = "object" == typeof self && self && self.Object === Object && self,
            r = o || i || Function("return this")();
        e.exports = r
    },
    MMmD: function(e, t, n) {
        var o = n("lSCD"),
            i = n("shjB");
        e.exports = function(e) {
            return null != e && i(e.length) && !o(e)
        }
    },
    MOBa: function(e, t, n) {
        var o = n("mc0g")(!0);
        e.exports = o
    },
    NKxu: function(e, t, n) {
        var o = n("lSCD"),
            i = n("E2jh"),
            r = n("GoyQ"),
            a = n("3Fdi"),
            s = /^\[object .+?Constructor\]$/,
            l = Function.prototype,
            u = Object.prototype,
            c = l.toString,
            d = u.hasOwnProperty,
            f = RegExp("^" + c.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e.exports = function(e) {
            return !(!r(e) || i(e)) && (o(e) ? f : s).test(a(e))
        }
    },
    Npjl: function(e, t) {
        e.exports = function(e, t) {
            return null == e ? void 0 : e[t]
        }
    },
    NykK: function(e, t, n) {
        var o = n("nmnc"),
            i = n("AP2z"),
            r = n("KfNM"),
            a = o ? o.toStringTag : void 0;
        e.exports = function(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? i(e) : r(e)
        }
    },
    QkVE: function(e, t, n) {
        var o = n("EpBk");
        e.exports = function(e, t) {
            var n = e.__data__;
            return o(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }
    },
    "S+gy": function(e, t, n) {
        var o = n("MOBa"),
            i = n("7GkX");
        e.exports = function(e, t) {
            return e && o(e, t, i)
        }
    },
    SfRM: function(e, t, n) {
        var o = n("YESw");
        e.exports = function() {
            this.__data__ = o ? o(null) : {}, this.size = 0
        }
    },
    U3rZ: function(e, t, n) {
        var o = n("fCN/"),
            i = n("F6Lr"),
            r = n("EwQA"),
            a = n("Z0cm");
        e.exports = function(e, t) {
            return (a(e) ? o : i)(e, r(t))
        }
    },
    "UNi/": function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, o = Array(e); ++n < e;) o[n] = t(n);
            return o
        }
    },
    V6Ve: function(e, t, n) {
        var o = n("kekF")(Object.keys, Object);
        e.exports = o
    },
    WFqU: function(e, t, n) {
        (function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n
        }).call(this, n("yLpj"))
    },
    Xi7e: function(e, t, n) {
        var o = n("KMkd"),
            i = n("adU4"),
            r = n("tMB7"),
            a = n("+6XX"),
            s = n("Z8oC");

        function l(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var o = e[t];
                this.set(o[0], o[1])
            }
        }
        l.prototype.clear = o, l.prototype.delete = i, l.prototype.get = r, l.prototype.has = a, l.prototype.set = s, e.exports = l
    },
    Y3Pm: function(e, t, n) {
        var o = n("dt0z");
        e.exports = function() {
            var e = arguments,
                t = o(e[0]);
            return e.length < 3 ? t : t.replace(e[1], e[2])
        }
    },
    YEMR: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("mwIZ"),
            i = n.n(o),
            r = n("jzCT"),
            a = n.n(r),
            s = n("Y3Pm"),
            l = n.n(s);
        window.translate = function(e, t) {
            var n = i()(window.i18n, e);
            return a()(t, function(e, t) {
                n = l()(n, ":".concat(t), e)
            }), n
        }
    },
    YESw: function(e, t, n) {
        var o = n("Cwc5")(Object, "create");
        e.exports = o
    },
    YuTi: function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    },
    Z0cm: function(e, t) {
        var n = Array.isArray;
        e.exports = n
    },
    Z8oC: function(e, t, n) {
        var o = n("y1pI");
        e.exports = function(e, t) {
            var n = this.__data__,
                i = o(n, e);
            return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
        }
    },
    ZWtO: function(e, t, n) {
        var o = n("4uTw"),
            i = n("9Nap");
        e.exports = function(e, t) {
            for (var n = 0, r = (t = o(t, e)).length; null != e && n < r;) e = e[i(t[n++])];
            return n && n == r ? e : void 0
        }
    },
    adU4: function(e, t, n) {
        var o = n("y1pI"),
            i = Array.prototype.splice;
        e.exports = function(e) {
            var t = this.__data__,
                n = o(t, e);
            return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0))
        }
    },
    b80T: function(e, t, n) {
        var o = n("UNi/"),
            i = n("03A+"),
            r = n("Z0cm"),
            a = n("DSRE"),
            s = n("wJg7"),
            l = n("c6wG"),
            u = Object.prototype.hasOwnProperty;
        e.exports = function(e, t) {
            var n = r(e),
                c = !n && i(e),
                d = !n && !c && a(e),
                f = !n && !c && !d && l(e),
                p = n || c || d || f,
                h = p ? o(e.length, String) : [],
                m = h.length;
            for (var g in e) !t && !u.call(e, g) || p && ("length" == g || d && ("offset" == g || "parent" == g) || f && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || s(g, m)) || h.push(g);
            return h
        }
    },
    c6wG: function(e, t, n) {
        var o = n("dD9F"),
            i = n("sEf8"),
            r = n("mdPL"),
            a = r && r.isTypedArray,
            s = a ? i(a) : o;
        e.exports = s
    },
    dD9F: function(e, t, n) {
        var o = n("NykK"),
            i = n("shjB"),
            r = n("ExA7"),
            a = {};
        a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function(e) {
            return r(e) && i(e.length) && !!a[o(e)]
        }
    },
    dt0z: function(e, t, n) {
        var o = n("zoYe");
        e.exports = function(e) {
            return null == e ? "" : o(e)
        }
    },
    e4Nc: function(e, t, n) {
        var o = n("fGT3"),
            i = n("k+1r"),
            r = n("JHgL"),
            a = n("pSRY"),
            s = n("H8j4");

        function l(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var o = e[t];
                this.set(o[0], o[1])
            }
        }
        l.prototype.clear = o, l.prototype.delete = i, l.prototype.get = r, l.prototype.has = a, l.prototype.set = s, e.exports = l
    },
    eUgh: function(e, t) {
        e.exports = function(e, t) {
            for (var n = -1, o = null == e ? 0 : e.length, i = Array(o); ++n < o;) i[n] = t(e[n], n, e);
            return i
        }
    },
    ebwN: function(e, t, n) {
        var o = n("Cwc5")(n("Kz5y"), "Map");
        e.exports = o
    },
    ekgI: function(e, t, n) {
        var o = n("YESw"),
            i = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            var t = this.__data__;
            return o ? void 0 !== t[e] : i.call(t, e)
        }
    },
    "fCN/": function(e, t) {
        e.exports = function(e, t) {
            for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e););
            return e
        }
    },
    fGT3: function(e, t, n) {
        var o = n("4kuk"),
            i = n("Xi7e"),
            r = n("ebwN");
        e.exports = function() {
            this.size = 0, this.__data__ = {
                hash: new o,
                map: new(r || i),
                string: new o
            }
        }
    },
    jzCT: function(e, t, n) {
        e.exports = n("U3rZ")
    },
    "k+1r": function(e, t, n) {
        var o = n("QkVE");
        e.exports = function(e) {
            var t = o(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
    },
    kekF: function(e, t) {
        e.exports = function(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
    },
    lQqw: function(e, t, n) {
        var o = n("MMmD");
        e.exports = function(e, t) {
            return function(n, i) {
                if (null == n) return n;
                if (!o(n)) return e(n, i);
                for (var r = n.length, a = t ? r : -1, s = Object(n);
                    (t ? a-- : ++a < r) && !1 !== i(s[a], a, s););
                return n
            }
        }
    },
    lSCD: function(e, t, n) {
        var o = n("NykK"),
            i = n("GoyQ");
        e.exports = function(e) {
            if (!i(e)) return !1;
            var t = o(e);
            return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
        }
    },
    ljhN: function(e, t) {
        e.exports = function(e, t) {
            return e === t || e != e && t != t
        }
    },
    mc0g: function(e, t) {
        e.exports = function(e) {
            return function(t, n, o) {
                for (var i = -1, r = Object(t), a = o(t), s = a.length; s--;) {
                    var l = a[e ? s : ++i];
                    if (!1 === n(r[l], l, r)) break
                }
                return t
            }
        }
    },
    mdPL: function(e, t, n) {
        (function(e) {
            var o = n("WFqU"),
                i = t && !t.nodeType && t,
                r = i && "object" == typeof e && e && !e.nodeType && e,
                a = r && r.exports === i && o.process,
                s = function() {
                    try {
                        return r && r.require && r.require("util").types || a && a.binding && a.binding("util")
                    } catch (e) {}
                }();
            e.exports = s
        }).call(this, n("YuTi")(e))
    },
    mwIZ: function(e, t, n) {
        var o = n("ZWtO");
        e.exports = function(e, t, n) {
            var i = null == e ? void 0 : o(e, t);
            return void 0 === i ? n : i
        }
    },
    nmnc: function(e, t, n) {
        var o = n("Kz5y").Symbol;
        e.exports = o
    },
    pSRY: function(e, t, n) {
        var o = n("QkVE");
        e.exports = function(e) {
            return o(this, e).has(e)
        }
    },
    sEf8: function(e, t) {
        e.exports = function(e) {
            return function(t) {
                return e(t)
            }
        }
    },
    shjB: function(e, t) {
        e.exports = function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        }
    },
    tMB7: function(e, t, n) {
        var o = n("y1pI");
        e.exports = function(e) {
            var t = this.__data__,
                n = o(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
    },
    u8Dt: function(e, t, n) {
        var o = n("YESw"),
            i = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            var t = this.__data__;
            if (o) {
                var n = t[e];
                return "__lodash_hash_undefined__" === n ? void 0 : n
            }
            return i.call(t, e) ? t[e] : void 0
        }
    },
    wJg7: function(e, t) {
        var n = /^(?:0|[1-9]\d*)$/;
        e.exports = function(e, t) {
            var o = typeof e;
            return !!(t = null == t ? 9007199254740991 : t) && ("number" == o || "symbol" != o && n.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
    },
    y1pI: function(e, t, n) {
        var o = n("ljhN");
        e.exports = function(e, t) {
            for (var n = e.length; n--;)
                if (o(e[n][0], t)) return n;
            return -1
        }
    },
    yLpj: function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    zZ0H: function(e, t) {
        e.exports = function(e) {
            return e
        }
    },
    zoYe: function(e, t, n) {
        var o = n("nmnc"),
            i = n("eUgh"),
            r = n("Z0cm"),
            a = n("/9aa"),
            s = o ? o.prototype : void 0,
            l = s ? s.toString : void 0;
        e.exports = function e(t) {
            if ("string" == typeof t) return t;
            if (r(t)) return i(t, e) + "";
            if (a(t)) return l ? l.call(t) : "";
            var n = t + "";
            return "0" == n && 1 / t == -1 / 0 ? "-0" : n
        }
    }
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}, e.jQuery)
}(this, function(e, t) {
    "use strict";
    var n = function(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        }
    }(t);

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }

    function i(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e
    }

    function r() {
        return (r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }).apply(this, arguments)
    }
    var a = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            do {
                e += ~~(1e6 * Math.random())
            } while (document.getElementById(e));
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var t = n.default(e).css("transition-duration"),
                o = n.default(e).css("transition-delay"),
                i = parseFloat(t),
                r = parseFloat(o);
            return i || r ? (t = t.split(",")[0], o = o.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(o))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            n.default(e).trigger("transitionend")
        },
        supportsTransitionEnd: function() {
            return Boolean("transitionend")
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var o in n)
                if (Object.prototype.hasOwnProperty.call(n, o)) {
                    var i = n[o],
                        r = t[o],
                        s = r && a.isElement(r) ? "element" : null === (l = r) || void 0 === l ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(i).test(s)) throw new Error(e.toUpperCase() + ': Option "' + o + '" provided type "' + s + '" but expected type "' + i + '".')
                }
            var l
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? a.findShadowRoot(e.parentNode) : null
        },
        jQueryDetection: function() {
            if (void 0 === n.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = n.default.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    a.jQueryDetection(), n.default.fn.emulateTransitionEnd = function(e) {
        var t = this,
            o = !1;
        return n.default(this).one(a.TRANSITION_END, function() {
            o = !0
        }), setTimeout(function() {
            o || a.triggerTransitionEnd(t)
        }, e), this
    }, n.default.event.special[a.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle: function(e) {
            if (n.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var s = "alert",
        l = n.default.fn[s],
        u = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, t.dispose = function() {
                n.default.removeData(this._element, "bs.alert"), this._element = null
            }, t._getRootElement = function(e) {
                var t = a.getSelectorFromElement(e),
                    o = !1;
                return t && (o = document.querySelector(t)), o || (o = n.default(e).closest(".alert")[0]), o
            }, t._triggerCloseEvent = function(e) {
                var t = n.default.Event("close.bs.alert");
                return n.default(e).trigger(t), t
            }, t._removeElement = function(e) {
                var t = this;
                if (n.default(e).removeClass("show"), n.default(e).hasClass("fade")) {
                    var o = a.getTransitionDurationFromElement(e);
                    n.default(e).one(a.TRANSITION_END, function(n) {
                        return t._destroyElement(e, n)
                    }).emulateTransitionEnd(o)
                } else this._destroyElement(e)
            }, t._destroyElement = function(e) {
                n.default(e).detach().trigger("closed.bs.alert").remove()
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var o = n.default(this),
                        i = o.data("bs.alert");
                    i || (i = new e(this), o.data("bs.alert", i)), "close" === t && i[t](this)
                })
            }, e._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }]), e
        }();
    n.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', u._handleDismiss(new u)), n.default.fn[s] = u._jQueryInterface, n.default.fn[s].Constructor = u, n.default.fn[s].noConflict = function() {
        return n.default.fn[s] = l, u._jQueryInterface
    };
    var c = n.default.fn.button,
        d = function() {
            function e(e) {
                this._element = e, this.shouldAvoidTriggerChange = !1
            }
            var t = e.prototype;
            return t.toggle = function() {
                var e = !0,
                    t = !0,
                    o = n.default(this._element).closest('[data-toggle="buttons"]')[0];
                if (o) {
                    var i = this._element.querySelector('input:not([type="hidden"])');
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains("active")) e = !1;
                            else {
                                var r = o.querySelector(".active");
                                r && n.default(r).removeClass("active")
                            }
                        e && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || n.default(i).trigger("change")), i.focus(), t = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && n.default(this._element).toggleClass("active"))
            }, t.dispose = function() {
                n.default.removeData(this._element, "bs.button"), this._element = null
            }, e._jQueryInterface = function(t, o) {
                return this.each(function() {
                    var i = n.default(this),
                        r = i.data("bs.button");
                    r || (r = new e(this), i.data("bs.button", r)), r.shouldAvoidTriggerChange = o, "toggle" === t && r[t]()
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }]), e
        }();
    n.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var t = e.target,
            o = t;
        if (n.default(t).hasClass("btn") || (t = n.default(t).closest(".btn")[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();
        else {
            var i = t.querySelector('input:not([type="hidden"])');
            if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void e.preventDefault();
            "INPUT" !== o.tagName && "LABEL" === t.tagName || d._jQueryInterface.call(n.default(t), "toggle", "INPUT" === o.tagName)
        }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var t = n.default(e.target).closest(".btn")[0];
        n.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), n.default(window).on("load.bs.button.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
            var o = e[t],
                i = o.querySelector('input:not([type="hidden"])');
            i.checked || i.hasAttribute("checked") ? o.classList.add("active") : o.classList.remove("active")
        }
        for (var r = 0, a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < a; r++) {
            var s = e[r];
            "true" === s.getAttribute("aria-pressed") ? s.classList.add("active") : s.classList.remove("active")
        }
    }), n.default.fn.button = d._jQueryInterface, n.default.fn.button.Constructor = d, n.default.fn.button.noConflict = function() {
        return n.default.fn.button = c, d._jQueryInterface
    };
    var f = "carousel",
        p = n.default.fn[f],
        h = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        m = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        g = {
            TOUCH: "touch",
            PEN: "pen"
        },
        b = function() {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var t = e.prototype;
            return t.next = function() {
                this._isSliding || this._slide("next")
            }, t.nextWhenVisible = function() {
                var e = n.default(this._element);
                !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next()
            }, t.prev = function() {
                this._isSliding || this._slide("prev")
            }, t.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function(e) {
                var t = this;
                this._activeElement = this._element.querySelector(".active.carousel-item");
                var o = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) n.default(this._element).one("slid.bs.carousel", function() {
                        return t.to(e)
                    });
                    else {
                        if (o === e) return this.pause(), void this.cycle();
                        var i = e > o ? "next" : "prev";
                        this._slide(i, this._items[e])
                    }
            }, t.dispose = function() {
                n.default(this._element).off(".bs.carousel"), n.default.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function(e) {
                return e = r({}, h, e), a.typeCheckConfig(f, e, m), e
            }, t._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
                }
            }, t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && n.default(this._element).on("keydown.bs.carousel", function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && n.default(this._element).on("mouseenter.bs.carousel", function(t) {
                    return e.pause(t)
                }).on("mouseleave.bs.carousel", function(t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, t._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var t = function(t) {
                            e._pointerEvent && g[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        o = function(t) {
                            e._pointerEvent && g[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval))
                        };
                    n.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function(e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (n.default(this._element).on("pointerdown.bs.carousel", function(e) {
                        return t(e)
                    }), n.default(this._element).on("pointerup.bs.carousel", function(e) {
                        return o(e)
                    }), this._element.classList.add("pointer-event")) : (n.default(this._element).on("touchstart.bs.carousel", function(e) {
                        return t(e)
                    }), n.default(this._element).on("touchmove.bs.carousel", function(t) {
                        return function(t) {
                            t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                        }(t)
                    }), n.default(this._element).on("touchend.bs.carousel", function(e) {
                        return o(e)
                    }))
                }
            }, t._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, t._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
            }, t._getItemByDirection = function(e, t) {
                var n = "next" === e,
                    o = "prev" === e,
                    i = this._getItemIndex(t),
                    r = this._items.length - 1;
                if ((o && 0 === i || n && i === r) && !this._config.wrap) return t;
                var a = (i + ("prev" === e ? -1 : 1)) % this._items.length;
                return -1 === a ? this._items[this._items.length - 1] : this._items[a]
            }, t._triggerSlideEvent = function(e, t) {
                var o = this._getItemIndex(e),
                    i = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                    r = n.default.Event("slide.bs.carousel", {
                        relatedTarget: e,
                        direction: t,
                        from: i,
                        to: o
                    });
                return n.default(this._element).trigger(r), r
            }, t._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    n.default(t).removeClass("active");
                    var o = this._indicatorsElement.children[this._getItemIndex(e)];
                    o && n.default(o).addClass("active")
                }
            }, t._updateInterval = function() {
                var e = this._activeElement || this._element.querySelector(".active.carousel-item");
                if (e) {
                    var t = parseInt(e.getAttribute("data-interval"), 10);
                    t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
                }
            }, t._slide = function(e, t) {
                var o, i, r, s = this,
                    l = this._element.querySelector(".active.carousel-item"),
                    u = this._getItemIndex(l),
                    c = t || l && this._getItemByDirection(e, l),
                    d = this._getItemIndex(c),
                    f = Boolean(this._interval);
                if ("next" === e ? (o = "carousel-item-left", i = "carousel-item-next", r = "left") : (o = "carousel-item-right", i = "carousel-item-prev", r = "right"), c && n.default(c).hasClass("active")) this._isSliding = !1;
                else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && l && c) {
                    this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(c), this._activeElement = c;
                    var p = n.default.Event("slid.bs.carousel", {
                        relatedTarget: c,
                        direction: r,
                        from: u,
                        to: d
                    });
                    if (n.default(this._element).hasClass("slide")) {
                        n.default(c).addClass(i), a.reflow(c), n.default(l).addClass(o), n.default(c).addClass(o);
                        var h = a.getTransitionDurationFromElement(l);
                        n.default(l).one(a.TRANSITION_END, function() {
                            n.default(c).removeClass(o + " " + i).addClass("active"), n.default(l).removeClass("active " + i + " " + o), s._isSliding = !1, setTimeout(function() {
                                return n.default(s._element).trigger(p)
                            }, 0)
                        }).emulateTransitionEnd(h)
                    } else n.default(l).removeClass("active"), n.default(c).addClass("active"), this._isSliding = !1, n.default(this._element).trigger(p);
                    f && this.cycle()
                }
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var o = n.default(this).data("bs.carousel"),
                        i = r({}, h, n.default(this).data());
                    "object" == typeof t && (i = r({}, i, t));
                    var a = "string" == typeof t ? t : i.slide;
                    if (o || (o = new e(this, i), n.default(this).data("bs.carousel", o)), "number" == typeof t) o.to(t);
                    else if ("string" == typeof a) {
                        if (void 0 === o[a]) throw new TypeError('No method named "' + a + '"');
                        o[a]()
                    } else i.interval && i.ride && (o.pause(), o.cycle())
                })
            }, e._dataApiClickHandler = function(t) {
                var o = a.getSelectorFromElement(this);
                if (o) {
                    var i = n.default(o)[0];
                    if (i && n.default(i).hasClass("carousel")) {
                        var s = r({}, n.default(i).data(), n.default(this).data()),
                            l = this.getAttribute("data-slide-to");
                        l && (s.interval = !1), e._jQueryInterface.call(n.default(i), s), l && n.default(i).data("bs.carousel").to(l), t.preventDefault()
                    }
                }
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return h
                }
            }]), e
        }();
    n.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", b._dataApiClickHandler), n.default(window).on("load.bs.carousel.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, o = e.length; t < o; t++) {
            var i = n.default(e[t]);
            b._jQueryInterface.call(i, i.data())
        }
    }), n.default.fn[f] = b._jQueryInterface, n.default.fn[f].Constructor = b, n.default.fn[f].noConflict = function() {
        return n.default.fn[f] = p, b._jQueryInterface
    };
    var v = "collapse",
        T = n.default.fn[v],
        y = {
            toggle: !0,
            parent: ""
        },
        S = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        w = function() {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), o = 0, i = n.length; o < i; o++) {
                    var r = n[o],
                        s = a.getSelectorFromElement(r),
                        l = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                            return t === e
                        });
                    null !== s && l.length > 0 && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = e.prototype;
            return t.toggle = function() {
                n.default(this._element).hasClass("show") ? this.hide() : this.show()
            }, t.show = function() {
                var t, o, i = this;
                if (!(this._isTransitioning || n.default(this._element).hasClass("show") || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                        return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains("collapse")
                    })).length && (t = null), t && (o = n.default(t).not(this._selector).data("bs.collapse")) && o._isTransitioning))) {
                    var r = n.default.Event("show.bs.collapse");
                    if (n.default(this._element).trigger(r), !r.isDefaultPrevented()) {
                        t && (e._jQueryInterface.call(n.default(t).not(this._selector), "hide"), o || n.default(t).data("bs.collapse", null));
                        var s = this._getDimension();
                        n.default(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[s] = 0, this._triggerArray.length && n.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                        var l = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            u = a.getTransitionDurationFromElement(this._element);
                        n.default(this._element).one(a.TRANSITION_END, function() {
                            n.default(i._element).removeClass("collapsing").addClass("collapse show"), i._element.style[s] = "", i.setTransitioning(!1), n.default(i._element).trigger("shown.bs.collapse")
                        }).emulateTransitionEnd(u), this._element.style[s] = this._element[l] + "px"
                    }
                }
            }, t.hide = function() {
                var e = this;
                if (!this._isTransitioning && n.default(this._element).hasClass("show")) {
                    var t = n.default.Event("hide.bs.collapse");
                    if (n.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var o = this._getDimension();
                        this._element.style[o] = this._element.getBoundingClientRect()[o] + "px", a.reflow(this._element), n.default(this._element).addClass("collapsing").removeClass("collapse show");
                        var i = this._triggerArray.length;
                        if (i > 0)
                            for (var r = 0; r < i; r++) {
                                var s = this._triggerArray[r],
                                    l = a.getSelectorFromElement(s);
                                null !== l && (n.default([].slice.call(document.querySelectorAll(l))).hasClass("show") || n.default(s).addClass("collapsed").attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[o] = "";
                        var u = a.getTransitionDurationFromElement(this._element);
                        n.default(this._element).one(a.TRANSITION_END, function() {
                            e.setTransitioning(!1), n.default(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        }).emulateTransitionEnd(u)
                    }
                }
            }, t.setTransitioning = function(e) {
                this._isTransitioning = e
            }, t.dispose = function() {
                n.default.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function(e) {
                return (e = r({}, y, e)).toggle = Boolean(e.toggle), a.typeCheckConfig(v, e, S), e
            }, t._getDimension = function() {
                return n.default(this._element).hasClass("width") ? "width" : "height"
            }, t._getParent = function() {
                var t, o = this;
                a.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    r = [].slice.call(t.querySelectorAll(i));
                return n.default(r).each(function(t, n) {
                    o._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                }), t
            }, t._addAriaAndCollapsedClass = function(e, t) {
                var o = n.default(e).hasClass("show");
                t.length && n.default(t).toggleClass("collapsed", !o).attr("aria-expanded", o)
            }, e._getTargetFromElement = function(e) {
                var t = a.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var o = n.default(this),
                        i = o.data("bs.collapse"),
                        a = r({}, y, o.data(), "object" == typeof t && t ? t : {});
                    if (!i && a.toggle && "string" == typeof t && /show|hide/.test(t) && (a.toggle = !1), i || (i = new e(this, a), o.data("bs.collapse", i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return y
                }
            }]), e
        }();
    n.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var t = n.default(this),
            o = a.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(o));
        n.default(i).each(function() {
            var e = n.default(this),
                o = e.data("bs.collapse") ? "toggle" : t.data();
            w._jQueryInterface.call(e, o)
        })
    }), n.default.fn[v] = w._jQueryInterface, n.default.fn[v].Constructor = w, n.default.fn[v].noConflict = function() {
        return n.default.fn[v] = T, w._jQueryInterface
    };
    var A = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        E = function() {
            for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                if (A && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
            return 0
        }(),
        _ = A && window.Promise ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, E))
            }
        };

    function C(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function P(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function M(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function x(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = P(e),
            n = t.overflow,
            o = t.overflowX,
            i = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + i + o) ? e : x(M(e))
    }

    function D(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }
    var G = A && !(!window.MSInputMethodContext || !document.documentMode),
        I = A && /MSIE 10/.test(navigator.userAgent);

    function H(e) {
        return 11 === e ? G : 10 === e ? I : G || I
    }

    function k(e) {
        if (!e) return document.documentElement;
        for (var t = H(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var o = n && n.nodeName;
        return o && "BODY" !== o && "HTML" !== o ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === P(n, "position") ? k(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function B(e) {
        return null !== e.parentNode ? B(e.parentNode) : e
    }

    function N(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            o = n ? e : t,
            i = n ? t : e,
            r = document.createRange();
        r.setStart(o, 0), r.setEnd(i, 0);
        var a, s, l = r.commonAncestorContainer;
        if (e !== l && t !== l || o.contains(i)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && k(a.firstElementChild) !== a ? k(l) : l;
        var u = B(e);
        return u.host ? N(u.host, t) : N(e, B(t).host)
    }

    function O(e) {
        var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var o = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || o)[t]
        }
        return e[t]
    }

    function L(e, t) {
        var n = "x" === t ? "Left" : "Top",
            o = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + o + "Width"])
    }

    function F(e, t, n, o) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], H(10) ? parseInt(n["offset" + e]) + parseInt(o["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(o["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function j(e) {
        var t = e.body,
            n = e.documentElement,
            o = H(10) && getComputedStyle(n);
        return {
            height: F("Height", t, n, o),
            width: F("Width", t, n, o)
        }
    }
    var R = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        V = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        W = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        X = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        };

    function U(e) {
        return X({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function q(e) {
        var t = {};
        try {
            if (H(10)) {
                t = e.getBoundingClientRect();
                var n = O(e, "top"),
                    o = O(e, "left");
                t.top += n, t.left += o, t.bottom += n, t.right += o
            } else t = e.getBoundingClientRect()
        } catch (e) {}
        var i = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            r = "HTML" === e.nodeName ? j(e.ownerDocument) : {},
            a = r.width || e.clientWidth || i.width,
            s = r.height || e.clientHeight || i.height,
            l = e.offsetWidth - a,
            u = e.offsetHeight - s;
        if (l || u) {
            var c = P(e);
            l -= L(c, "x"), u -= L(c, "y"), i.width -= l, i.height -= u
        }
        return U(i)
    }

    function K(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = H(10),
            i = "HTML" === t.nodeName,
            r = q(e),
            a = q(t),
            s = x(e),
            l = P(t),
            u = parseFloat(l.borderTopWidth),
            c = parseFloat(l.borderLeftWidth);
        n && i && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
        var d = U({
            top: r.top - a.top - u,
            left: r.left - a.left - c,
            width: r.width,
            height: r.height
        });
        if (d.marginTop = 0, d.marginLeft = 0, !o && i) {
            var f = parseFloat(l.marginTop),
                p = parseFloat(l.marginLeft);
            d.top -= u - f, d.bottom -= u - f, d.left -= c - p, d.right -= c - p, d.marginTop = f, d.marginLeft = p
        }
        return (o && !n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (d = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                o = O(t, "top"),
                i = O(t, "left"),
                r = n ? -1 : 1;
            return e.top += o * r, e.bottom += o * r, e.left += i * r, e.right += i * r, e
        }(d, t)), d
    }

    function Q(e) {
        if (!e || !e.parentElement || H()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === P(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function z(e, t, n, o) {
        var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            r = {
                top: 0,
                left: 0
            },
            a = i ? Q(e) : N(e, D(t));
        if ("viewport" === o) r = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                o = K(e, n),
                i = Math.max(n.clientWidth, window.innerWidth || 0),
                r = Math.max(n.clientHeight, window.innerHeight || 0),
                a = t ? 0 : O(n),
                s = t ? 0 : O(n, "left");
            return U({
                top: a - o.top + o.marginTop,
                left: s - o.left + o.marginLeft,
                width: i,
                height: r
            })
        }(a, i);
        else {
            var s = void 0;
            "scrollParent" === o ? "BODY" === (s = x(M(t))).nodeName && (s = e.ownerDocument.documentElement) : s = "window" === o ? e.ownerDocument.documentElement : o;
            var l = K(s, a, i);
            if ("HTML" !== s.nodeName || function e(t) {
                    var n = t.nodeName;
                    if ("BODY" === n || "HTML" === n) return !1;
                    if ("fixed" === P(t, "position")) return !0;
                    var o = M(t);
                    return !!o && e(o)
                }(a)) r = l;
            else {
                var u = j(e.ownerDocument),
                    c = u.height,
                    d = u.width;
                r.top += l.top - l.marginTop, r.bottom = c + l.top, r.left += l.left - l.marginLeft, r.right = d + l.left
            }
        }
        var f = "number" == typeof(n = n || 0);
        return r.left += f ? n : n.left || 0, r.top += f ? n : n.top || 0, r.right -= f ? n : n.right || 0, r.bottom -= f ? n : n.bottom || 0, r
    }

    function Y(e) {
        return e.width * e.height
    }

    function $(e, t, n, o, i) {
        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = z(n, o, r, i),
            s = {
                top: {
                    width: a.width,
                    height: t.top - a.top
                },
                right: {
                    width: a.right - t.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - t.bottom
                },
                left: {
                    width: t.left - a.left,
                    height: a.height
                }
            },
            l = Object.keys(s).map(function(e) {
                return X({
                    key: e
                }, s[e], {
                    area: Y(s[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            u = l.filter(function(e) {
                var t = e.width,
                    o = e.height;
                return t >= n.clientWidth && o >= n.clientHeight
            }),
            c = u.length > 0 ? u[0].key : l[0].key,
            d = e.split("-")[1];
        return c + (d ? "-" + d : "")
    }

    function J(e, t, n) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return K(n, o ? Q(t) : N(t, D(n)), o)
    }

    function Z(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            o = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + o,
            height: e.offsetHeight + n
        }
    }

    function ee(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function te(e, t, n) {
        n = n.split("-")[0];
        var o = Z(e),
            i = {
                width: o.width,
                height: o.height
            },
            r = -1 !== ["right", "left"].indexOf(n),
            a = r ? "top" : "left",
            s = r ? "left" : "top",
            l = r ? "height" : "width",
            u = r ? "width" : "height";
        return i[a] = t[a] + t[l] / 2 - o[l] / 2, i[s] = n === s ? t[s] - o[u] : t[ee(s)], i
    }

    function ne(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function oe(e, t, n) {
        return (void 0 === n ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n
            });
            var o = ne(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(o)
        }(e, "name", n))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = e.function || e.fn;
            e.enabled && C(n) && (t.offsets.popper = U(t.offsets.popper), t.offsets.reference = U(t.offsets.reference), t = n(t, e))
        }), t
    }

    function ie(e, t) {
        return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }

    function re(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), o = 0; o < t.length; o++) {
            var i = t[o],
                r = i ? "" + i + n : e;
            if (void 0 !== document.body.style[r]) return r
        }
        return null
    }

    function ae(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function se() {
        this.state.eventsEnabled || (this.state = function(e, t, n, o) {
            n.updateBound = o, ae(e).addEventListener("resize", n.updateBound, {
                passive: !0
            });
            var i = x(e);
            return function e(t, n, o, i) {
                var r = "BODY" === t.nodeName,
                    a = r ? t.ownerDocument.defaultView : t;
                a.addEventListener(n, o, {
                    passive: !0
                }), r || e(x(a.parentNode), n, o, i), i.push(a)
            }(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
        }(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function le(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function ue(e, t) {
        Object.keys(t).forEach(function(n) {
            var o = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && le(t[n]) && (o = "px"), e.style[n] = t[n] + o
        })
    }
    var ce = A && /Firefox/i.test(navigator.userAgent);

    function de(e, t, n) {
        var o = ne(e, function(e) {
                return e.name === t
            }),
            i = !!o && e.some(function(e) {
                return e.name === n && e.enabled && e.order < o.order
            });
        if (!i) {
            var r = "`" + t + "`",
                a = "`" + n + "`";
            console.warn(a + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return i
    }
    var fe = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        pe = fe.slice(3);

    function he(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = pe.indexOf(e),
            o = pe.slice(n + 1).concat(pe.slice(0, n));
        return t ? o.reverse() : o
    }
    var me = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            o = t.split("-")[1];
                        if (o) {
                            var i = e.offsets,
                                r = i.reference,
                                a = i.popper,
                                s = -1 !== ["bottom", "top"].indexOf(n),
                                l = s ? "left" : "top",
                                u = s ? "width" : "height",
                                c = {
                                    start: W({}, l, r[l]),
                                    end: W({}, l, r[l] + r[u] - a[u])
                                };
                            e.offsets.popper = X({}, a, c[o])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var n, o = t.offset,
                            i = e.placement,
                            r = e.offsets,
                            a = r.popper,
                            s = r.reference,
                            l = i.split("-")[0];
                        return n = le(+o) ? [+o, 0] : function(e, t, n, o) {
                            var i = [0, 0],
                                r = -1 !== ["right", "left"].indexOf(o),
                                a = e.split(/(\+|\-)/).map(function(e) {
                                    return e.trim()
                                }),
                                s = a.indexOf(ne(a, function(e) {
                                    return -1 !== e.search(/,|\s/)
                                }));
                            a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                            var l = /\s*,\s*|\s+/,
                                u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
                            return (u = u.map(function(e, o) {
                                var i = (1 === o ? !r : r) ? "height" : "width",
                                    a = !1;
                                return e.reduce(function(e, t) {
                                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
                                }, []).map(function(e) {
                                    return function(e, t, n, o) {
                                        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                            r = +i[1],
                                            a = i[2];
                                        if (!r) return e;
                                        if (0 === a.indexOf("%")) {
                                            var s = void 0;
                                            switch (a) {
                                                case "%p":
                                                    s = n;
                                                    break;
                                                case "%":
                                                case "%r":
                                                default:
                                                    s = o
                                            }
                                            return U(s)[t] / 100 * r
                                        }
                                        return "vh" === a || "vw" === a ? ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r
                                    }(e, i, t, n)
                                })
                            })).forEach(function(e, t) {
                                e.forEach(function(n, o) {
                                    le(n) && (i[t] += n * ("-" === e[o - 1] ? -1 : 1))
                                })
                            }), i
                        }(o, a, s, l), "left" === l ? (a.top += n[0], a.left -= n[1]) : "right" === l ? (a.top += n[0], a.left += n[1]) : "top" === l ? (a.left += n[0], a.top -= n[1]) : "bottom" === l && (a.left += n[0], a.top += n[1]), e.popper = a, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.boundariesElement || k(e.instance.popper);
                        e.instance.reference === n && (n = k(n));
                        var o = re("transform"),
                            i = e.instance.popper.style,
                            r = i.top,
                            a = i.left,
                            s = i[o];
                        i.top = "", i.left = "", i[o] = "";
                        var l = z(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                        i.top = r, i.left = a, i[o] = s, t.boundaries = l;
                        var u = t.priority,
                            c = e.offsets.popper,
                            d = {
                                primary: function(e) {
                                    var n = c[e];
                                    return c[e] < l[e] && !t.escapeWithReference && (n = Math.max(c[e], l[e])), W({}, e, n)
                                },
                                secondary: function(e) {
                                    var n = "right" === e ? "left" : "top",
                                        o = c[n];
                                    return c[e] > l[e] && !t.escapeWithReference && (o = Math.min(c[n], l[e] - ("right" === e ? c.width : c.height))), W({}, n, o)
                                }
                            };
                        return u.forEach(function(e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            c = X({}, c, d[t](e))
                        }), e.offsets.popper = c, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            n = t.popper,
                            o = t.reference,
                            i = e.placement.split("-")[0],
                            r = Math.floor,
                            a = -1 !== ["top", "bottom"].indexOf(i),
                            s = a ? "right" : "bottom",
                            l = a ? "left" : "top",
                            u = a ? "width" : "height";
                        return n[s] < r(o[l]) && (e.offsets.popper[l] = r(o[l]) - n[u]), n[l] > r(o[s]) && (e.offsets.popper[l] = r(o[s])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        var n;
                        if (!de(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var o = t.element;
                        if ("string" == typeof o) {
                            if (!(o = e.instance.popper.querySelector(o))) return e
                        } else if (!e.instance.popper.contains(o)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var i = e.placement.split("-")[0],
                            r = e.offsets,
                            a = r.popper,
                            s = r.reference,
                            l = -1 !== ["left", "right"].indexOf(i),
                            u = l ? "height" : "width",
                            c = l ? "Top" : "Left",
                            d = c.toLowerCase(),
                            f = l ? "left" : "top",
                            p = l ? "bottom" : "right",
                            h = Z(o)[u];
                        s[p] - h < a[d] && (e.offsets.popper[d] -= a[d] - (s[p] - h)), s[d] + h > a[p] && (e.offsets.popper[d] += s[d] + h - a[p]), e.offsets.popper = U(e.offsets.popper);
                        var m = s[d] + s[u] / 2 - h / 2,
                            g = P(e.instance.popper),
                            b = parseFloat(g["margin" + c]),
                            v = parseFloat(g["border" + c + "Width"]),
                            T = m - e.offsets.popper[d] - b - v;
                        return T = Math.max(Math.min(a[u] - h, T), 0), e.arrowElement = o, e.offsets.arrow = (W(n = {}, d, Math.round(T)), W(n, f, ""), n), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(e, t) {
                        if (ie(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var n = z(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                            o = e.placement.split("-")[0],
                            i = ee(o),
                            r = e.placement.split("-")[1] || "",
                            a = [];
                        switch (t.behavior) {
                            case "flip":
                                a = [o, i];
                                break;
                            case "clockwise":
                                a = he(o);
                                break;
                            case "counterclockwise":
                                a = he(o, !0);
                                break;
                            default:
                                a = t.behavior
                        }
                        return a.forEach(function(s, l) {
                            if (o !== s || a.length === l + 1) return e;
                            o = e.placement.split("-")[0], i = ee(o);
                            var u = e.offsets.popper,
                                c = e.offsets.reference,
                                d = Math.floor,
                                f = "left" === o && d(u.right) > d(c.left) || "right" === o && d(u.left) < d(c.right) || "top" === o && d(u.bottom) > d(c.top) || "bottom" === o && d(u.top) < d(c.bottom),
                                p = d(u.left) < d(n.left),
                                h = d(u.right) > d(n.right),
                                m = d(u.top) < d(n.top),
                                g = d(u.bottom) > d(n.bottom),
                                b = "left" === o && p || "right" === o && h || "top" === o && m || "bottom" === o && g,
                                v = -1 !== ["top", "bottom"].indexOf(o),
                                T = !!t.flipVariations && (v && "start" === r && p || v && "end" === r && h || !v && "start" === r && m || !v && "end" === r && g),
                                y = !!t.flipVariationsByContent && (v && "start" === r && h || v && "end" === r && p || !v && "start" === r && g || !v && "end" === r && m),
                                S = T || y;
                            (f || b || S) && (e.flipped = !0, (f || b) && (o = a[l + 1]), S && (r = "end" === r ? "start" : "start" === r ? "end" : r), e.placement = o + (r ? "-" + r : ""), e.offsets.popper = X({}, e.offsets.popper, te(e.instance.popper, e.offsets.reference, e.placement)), e = oe(e.instance.modifiers, e, "flip"))
                        }), e
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            o = e.offsets,
                            i = o.popper,
                            r = o.reference,
                            a = -1 !== ["left", "right"].indexOf(n),
                            s = -1 === ["top", "left"].indexOf(n);
                        return i[a ? "left" : "top"] = r[n] - (s ? i[a ? "width" : "height"] : 0), e.placement = ee(t), e.offsets.popper = U(i), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!de(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = ne(e.instance.modifiers, function(e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x,
                            o = t.y,
                            i = e.offsets.popper,
                            r = ne(e.instance.modifiers, function(e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var a, s, l = void 0 !== r ? r : t.gpuAcceleration,
                            u = k(e.instance.popper),
                            c = q(u),
                            d = {
                                position: i.position
                            },
                            f = function(e, t) {
                                var n = e.offsets,
                                    o = n.popper,
                                    i = n.reference,
                                    r = Math.round,
                                    a = Math.floor,
                                    s = function(e) {
                                        return e
                                    },
                                    l = r(i.width),
                                    u = r(o.width),
                                    c = -1 !== ["left", "right"].indexOf(e.placement),
                                    d = -1 !== e.placement.indexOf("-"),
                                    f = t ? c || d || l % 2 == u % 2 ? r : a : s,
                                    p = t ? r : s;
                                return {
                                    left: f(l % 2 == 1 && u % 2 == 1 && !d && t ? o.left - 1 : o.left),
                                    top: p(o.top),
                                    bottom: p(o.bottom),
                                    right: f(o.right)
                                }
                            }(e, window.devicePixelRatio < 2 || !ce),
                            p = "bottom" === n ? "top" : "bottom",
                            h = "right" === o ? "left" : "right",
                            m = re("transform");
                        if (s = "bottom" === p ? "HTML" === u.nodeName ? -u.clientHeight + f.bottom : -c.height + f.bottom : f.top, a = "right" === h ? "HTML" === u.nodeName ? -u.clientWidth + f.right : -c.width + f.right : f.left, l && m) d[m] = "translate3d(" + a + "px, " + s + "px, 0)", d[p] = 0, d[h] = 0, d.willChange = "transform";
                        else {
                            var g = "bottom" === p ? -1 : 1,
                                b = "right" === h ? -1 : 1;
                            d[p] = s * g, d[h] = a * b, d.willChange = p + ", " + h
                        }
                        var v = {
                            "x-placement": e.placement
                        };
                        return e.attributes = X({}, v, e.attributes), e.styles = X({}, d, e.styles), e.arrowStyles = X({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        var t, n;
                        return ue(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        }), e.arrowElement && Object.keys(e.arrowStyles).length && ue(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function(e, t, n, o, i) {
                        var r = J(i, t, e, n.positionFixed),
                            a = $(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", a), ue(t, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        ge = function() {
            function e(t, n) {
                var o = this,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                R(this, e), this.scheduleUpdate = function() {
                    return requestAnimationFrame(o.update)
                }, this.update = _(this.update.bind(this)), this.options = X({}, e.Defaults, i), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(X({}, e.Defaults.modifiers, i.modifiers)).forEach(function(t) {
                    o.options.modifiers[t] = X({}, e.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return X({
                        name: e
                    }, o.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(e) {
                    e.enabled && C(e.onLoad) && e.onLoad(o.reference, o.popper, o.options, e, o.state)
                }), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r
            }
            return V(e, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = J(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = $(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = te(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = oe(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, ie(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[re("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return se.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return function() {
                        var e, t;
                        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, ae(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                            e.removeEventListener("scroll", t.updateBound)
                        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                    }.call(this)
                }
            }]), e
        }();
    ge.Utils = ("undefined" != typeof window ? window : global).PopperUtils, ge.placements = fe, ge.Defaults = me;
    var be = "dropdown",
        ve = n.default.fn[be],
        Te = new RegExp("38|40|27"),
        ye = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        Se = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        we = function() {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var t = e.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !n.default(this._element).hasClass("disabled")) {
                    var t = n.default(this._menu).hasClass("show");
                    e._clearMenus(), t || this.show(!0)
                }
            }, t.show = function(t) {
                if (void 0 === t && (t = !1), !(this._element.disabled || n.default(this._element).hasClass("disabled") || n.default(this._menu).hasClass("show"))) {
                    var o = {
                            relatedTarget: this._element
                        },
                        i = n.default.Event("show.bs.dropdown", o),
                        r = e._getParentFromElement(this._element);
                    if (n.default(r).trigger(i), !i.isDefaultPrevented()) {
                        if (!this._inNavbar && t) {
                            if (void 0 === ge) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                            var s = this._element;
                            "parent" === this._config.reference ? s = r : a.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && n.default(r).addClass("position-static"), this._popper = new ge(s, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === n.default(r).closest(".navbar-nav").length && n.default(document.body).children().on("mouseover", null, n.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), n.default(this._menu).toggleClass("show"), n.default(r).toggleClass("show").trigger(n.default.Event("shown.bs.dropdown", o))
                    }
                }
            }, t.hide = function() {
                if (!this._element.disabled && !n.default(this._element).hasClass("disabled") && n.default(this._menu).hasClass("show")) {
                    var t = {
                            relatedTarget: this._element
                        },
                        o = n.default.Event("hide.bs.dropdown", t),
                        i = e._getParentFromElement(this._element);
                    n.default(i).trigger(o), o.isDefaultPrevented() || (this._popper && this._popper.destroy(), n.default(this._menu).toggleClass("show"), n.default(i).toggleClass("show").trigger(n.default.Event("hidden.bs.dropdown", t)))
                }
            }, t.dispose = function() {
                n.default.removeData(this._element, "bs.dropdown"), n.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function() {
                var e = this;
                n.default(this._element).on("click.bs.dropdown", function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function(e) {
                return e = r({}, this.constructor.Default, n.default(this._element).data(), e), a.typeCheckConfig(be, e, this.constructor.DefaultType), e
            }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(".dropdown-menu"))
                }
                return this._menu
            }, t._getPlacement = function() {
                var e = n.default(this._element.parentNode),
                    t = "bottom-start";
                return e.hasClass("dropup") ? t = n.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : n.default(this._menu).hasClass("dropdown-menu-right") && (t = "bottom-end"), t
            }, t._detectNavbar = function() {
                return n.default(this._element).closest(".navbar").length > 0
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = r({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, t._getPopperConfig = function() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), r({}, e, this._config.popperConfig)
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var o = n.default(this).data("bs.dropdown");
                    if (o || (o = new e(this, "object" == typeof t ? t : null), n.default(this).data("bs.dropdown", o)), "string" == typeof t) {
                        if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                        o[t]()
                    }
                })
            }, e._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var o = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), i = 0, r = o.length; i < r; i++) {
                        var a = e._getParentFromElement(o[i]),
                            s = n.default(o[i]).data("bs.dropdown"),
                            l = {
                                relatedTarget: o[i]
                            };
                        if (t && "click" === t.type && (l.clickEvent = t), s) {
                            var u = s._menu;
                            if (n.default(a).hasClass("show") && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && n.default.contains(a, t.target))) {
                                var c = n.default.Event("hide.bs.dropdown", l);
                                n.default(a).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && n.default(document.body).children().off("mouseover", null, n.default.noop), o[i].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), n.default(u).removeClass("show"), n.default(a).removeClass("show").trigger(n.default.Event("hidden.bs.dropdown", l)))
                            }
                        }
                    }
            }, e._getParentFromElement = function(e) {
                var t, n = a.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function(t) {
                if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || n.default(t.target).closest(".dropdown-menu").length) : !Te.test(t.which)) && !this.disabled && !n.default(this).hasClass("disabled")) {
                    var o = e._getParentFromElement(this),
                        i = n.default(o).hasClass("show");
                    if (i || 27 !== t.which) {
                        if (t.preventDefault(), t.stopPropagation(), !i || 27 === t.which || 32 === t.which) return 27 === t.which && n.default(o.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void n.default(this).trigger("click");
                        var r = [].slice.call(o.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(e) {
                            return n.default(e).is(":visible")
                        });
                        if (0 !== r.length) {
                            var a = r.indexOf(t.target);
                            38 === t.which && a > 0 && a--, 40 === t.which && a < r.length - 1 && a++, a < 0 && (a = 0), r[a].focus()
                        }
                    }
                }
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return ye
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Se
                }
            }]), e
        }();
    n.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', we._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", we._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", we._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function(e) {
        e.preventDefault(), e.stopPropagation(), we._jQueryInterface.call(n.default(this), "toggle")
    }).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }), n.default.fn[be] = we._jQueryInterface, n.default.fn[be].Constructor = we, n.default.fn[be].noConflict = function() {
        return n.default.fn[be] = ve, we._jQueryInterface
    };
    var Ae = n.default.fn.modal,
        Ee = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        _e = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        Ce = function() {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var t = e.prototype;
            return t.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, t.show = function(e) {
                var t = this;
                if (!this._isShown && !this._isTransitioning) {
                    n.default(this._element).hasClass("fade") && (this._isTransitioning = !0);
                    var o = n.default.Event("show.bs.modal", {
                        relatedTarget: e
                    });
                    n.default(this._element).trigger(o), this._isShown || o.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), n.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function(e) {
                        return t.hide(e)
                    }), n.default(this._dialog).on("mousedown.dismiss.bs.modal", function() {
                        n.default(t._element).one("mouseup.dismiss.bs.modal", function(e) {
                            n.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return t._showElement(e)
                    }))
                }
            }, t.hide = function(e) {
                var t = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var o = n.default.Event("hide.bs.modal");
                    if (n.default(this._element).trigger(o), this._isShown && !o.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = n.default(this._element).hasClass("fade");
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), n.default(document).off("focusin.bs.modal"), n.default(this._element).removeClass("show"), n.default(this._element).off("click.dismiss.bs.modal"), n.default(this._dialog).off("mousedown.dismiss.bs.modal"), i) {
                            var r = a.getTransitionDurationFromElement(this._element);
                            n.default(this._element).one(a.TRANSITION_END, function(e) {
                                return t._hideModal(e)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return n.default(e).off(".bs.modal")
                }), n.default(document).off("focusin.bs.modal"), n.default.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, t.handleUpdate = function() {
                this._adjustDialog()
            }, t._getConfig = function(e) {
                return e = r({}, Ee, e), a.typeCheckConfig("modal", e, _e), e
            }, t._triggerBackdropTransition = function() {
                var e = this,
                    t = n.default.Event("hidePrevented.bs.modal");
                if (n.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                    var o = this._element.scrollHeight > document.documentElement.clientHeight;
                    o || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
                    var i = a.getTransitionDurationFromElement(this._dialog);
                    n.default(this._element).off(a.TRANSITION_END), n.default(this._element).one(a.TRANSITION_END, function() {
                        e._element.classList.remove("modal-static"), o || n.default(e._element).one(a.TRANSITION_END, function() {
                            e._element.style.overflowY = ""
                        }).emulateTransitionEnd(e._element, i)
                    }).emulateTransitionEnd(i), this._element.focus()
                }
            }, t._showElement = function(e) {
                var t = this,
                    o = n.default(this._element).hasClass("fade"),
                    i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), n.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, o && a.reflow(this._element), n.default(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                var r = n.default.Event("shown.bs.modal", {
                        relatedTarget: e
                    }),
                    s = function() {
                        t._config.focus && t._element.focus(), t._isTransitioning = !1, n.default(t._element).trigger(r)
                    };
                if (o) {
                    var l = a.getTransitionDurationFromElement(this._dialog);
                    n.default(this._dialog).one(a.TRANSITION_END, s).emulateTransitionEnd(l)
                } else s()
            }, t._enforceFocus = function() {
                var e = this;
                n.default(document).off("focusin.bs.modal").on("focusin.bs.modal", function(t) {
                    document !== t.target && e._element !== t.target && 0 === n.default(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function() {
                var e = this;
                this._isShown ? n.default(this._element).on("keydown.dismiss.bs.modal", function(t) {
                    e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
                }) : this._isShown || n.default(this._element).off("keydown.dismiss.bs.modal")
            }, t._setResizeEvent = function() {
                var e = this;
                this._isShown ? n.default(window).on("resize.bs.modal", function(t) {
                    return e.handleUpdate(t)
                }) : n.default(window).off("resize.bs.modal")
            }, t._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function() {
                    n.default(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), n.default(e._element).trigger("hidden.bs.modal")
                })
            }, t._removeBackdrop = function() {
                this._backdrop && (n.default(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function(e) {
                var t = this,
                    o = n.default(this._element).hasClass("fade") ? "fade" : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", o && this._backdrop.classList.add(o), n.default(this._backdrop).appendTo(document.body), n.default(this._element).on("click.dismiss.bs.modal", function(e) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
                        }), o && a.reflow(this._backdrop), n.default(this._backdrop).addClass("show"), !e) return;
                    if (!o) return void e();
                    var i = a.getTransitionDurationFromElement(this._backdrop);
                    n.default(this._backdrop).one(a.TRANSITION_END, e).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    n.default(this._backdrop).removeClass("show");
                    var r = function() {
                        t._removeBackdrop(), e && e()
                    };
                    if (n.default(this._element).hasClass("fade")) {
                        var s = a.getTransitionDurationFromElement(this._backdrop);
                        n.default(this._backdrop).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r()
                } else e && e()
            }, t._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                        o = [].slice.call(document.querySelectorAll(".sticky-top"));
                    n.default(t).each(function(t, o) {
                        var i = o.style.paddingRight,
                            r = n.default(o).css("padding-right");
                        n.default(o).data("padding-right", i).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                    }), n.default(o).each(function(t, o) {
                        var i = o.style.marginRight,
                            r = n.default(o).css("margin-right");
                        n.default(o).data("margin-right", i).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                    });
                    var i = document.body.style.paddingRight,
                        r = n.default(document.body).css("padding-right");
                    n.default(document.body).data("padding-right", i).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                }
                n.default(document.body).addClass("modal-open")
            }, t._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                n.default(e).each(function(e, t) {
                    var o = n.default(t).data("padding-right");
                    n.default(t).removeData("padding-right"), t.style.paddingRight = o || ""
                });
                var t = [].slice.call(document.querySelectorAll(".sticky-top"));
                n.default(t).each(function(e, t) {
                    var o = n.default(t).data("margin-right");
                    void 0 !== o && n.default(t).css("margin-right", o).removeData("margin-right")
                });
                var o = n.default(document.body).data("padding-right");
                n.default(document.body).removeData("padding-right"), document.body.style.paddingRight = o || ""
            }, t._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function(t, o) {
                return this.each(function() {
                    var i = n.default(this).data("bs.modal"),
                        a = r({}, Ee, n.default(this).data(), "object" == typeof t && t ? t : {});
                    if (i || (i = new e(this, a), n.default(this).data("bs.modal", i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t](o)
                    } else a.show && i.show(o)
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ee
                }
            }]), e
        }();
    n.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var t, o = this,
            i = a.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var s = n.default(t).data("bs.modal") ? "toggle" : r({}, n.default(t).data(), n.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var l = n.default(t).one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || l.one("hidden.bs.modal", function() {
                n.default(o).is(":visible") && o.focus()
            })
        });
        Ce._jQueryInterface.call(n.default(t), s, this)
    }), n.default.fn.modal = Ce._jQueryInterface, n.default.fn.modal.Constructor = Ce, n.default.fn.modal.noConflict = function() {
        return n.default.fn.modal = Ae, Ce._jQueryInterface
    };
    var Pe = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Me = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        xe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function De(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (var o = (new window.DOMParser).parseFromString(e, "text/html"), i = Object.keys(t), r = [].slice.call(o.body.querySelectorAll("*")), a = function(e, n) {
                var o = r[e],
                    a = o.nodeName.toLowerCase();
                if (-1 === i.indexOf(o.nodeName.toLowerCase())) return o.parentNode.removeChild(o), "continue";
                var s = [].slice.call(o.attributes),
                    l = [].concat(t["*"] || [], t[a] || []);
                s.forEach(function(e) {
                    (function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === Pe.indexOf(n) || Boolean(e.nodeValue.match(Me) || e.nodeValue.match(xe));
                        for (var o = t.filter(function(e) {
                                return e instanceof RegExp
                            }), i = 0, r = o.length; i < r; i++)
                            if (n.match(o[i])) return !0;
                        return !1
                    })(e, l) || o.removeAttribute(e.nodeName)
                })
            }, s = 0, l = r.length; s < l; s++) a(s);
        return o.body.innerHTML
    }
    var Ge = "tooltip",
        Ie = n.default.fn[Ge],
        He = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        ke = ["sanitize", "whiteList", "sanitizeFn"],
        Be = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        Ne = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Oe = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        Le = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        Fe = function() {
            function e(e, t) {
                if (void 0 === ge) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var t = e.prototype;
            return t.enable = function() {
                this._isEnabled = !0
            }, t.disable = function() {
                this._isEnabled = !1
            }, t.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var t = this.constructor.DATA_KEY,
                            o = n.default(e.currentTarget).data(t);
                        o || (o = new this.constructor(e.currentTarget, this._getDelegateConfig()), n.default(e.currentTarget).data(t, o)), o._activeTrigger.click = !o._activeTrigger.click, o._isWithActiveTrigger() ? o._enter(null, o) : o._leave(null, o)
                    } else {
                        if (n.default(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function() {
                clearTimeout(this._timeout), n.default.removeData(this.element, this.constructor.DATA_KEY), n.default(this.element).off(this.constructor.EVENT_KEY), n.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && n.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function() {
                var e = this;
                if ("none" === n.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = n.default.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    n.default(this.element).trigger(t);
                    var o = a.findShadowRoot(this.element),
                        i = n.default.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !i) return;
                    var r = this.getTipElement(),
                        s = a.getUID(this.constructor.NAME);
                    r.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && n.default(r).addClass("fade");
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        u = this._getAttachment(l);
                    this.addAttachmentClass(u);
                    var c = this._getContainer();
                    n.default(r).data(this.constructor.DATA_KEY, this), n.default.contains(this.element.ownerDocument.documentElement, this.tip) || n.default(r).appendTo(c), n.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new ge(this.element, r, this._getPopperConfig(u)), n.default(r).addClass("show"), n.default(r).addClass(this.config.customClass), "ontouchstart" in document.documentElement && n.default(document.body).children().on("mouseover", null, n.default.noop);
                    var d = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, n.default(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e)
                    };
                    if (n.default(this.tip).hasClass("fade")) {
                        var f = a.getTransitionDurationFromElement(this.tip);
                        n.default(this.tip).one(a.TRANSITION_END, d).emulateTransitionEnd(f)
                    } else d()
                }
            }, t.hide = function(e) {
                var t = this,
                    o = this.getTipElement(),
                    i = n.default.Event(this.constructor.Event.HIDE),
                    r = function() {
                        "show" !== t._hoverState && o.parentNode && o.parentNode.removeChild(o), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), n.default(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                    };
                if (n.default(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (n.default(o).removeClass("show"), "ontouchstart" in document.documentElement && n.default(document.body).children().off("mouseover", null, n.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, n.default(this.tip).hasClass("fade")) {
                        var s = a.getTransitionDurationFromElement(o);
                        n.default(o).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r();
                    this._hoverState = ""
                }
            }, t.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function() {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function(e) {
                n.default(this.getTipElement()).addClass("bs-tooltip-" + e)
            }, t.getTipElement = function() {
                return this.tip = this.tip || n.default(this.config.template)[0], this.tip
            }, t.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(n.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()), n.default(e).removeClass("fade show")
            }, t.setElementContent = function(e, t) {
                "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = De(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? n.default(t).parent().is(e) || e.empty().append(t) : e.text(n.default(t).text())
            }, t.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, t._getPopperConfig = function(e) {
                var t = this;
                return r({}, {
                    placement: e,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function(e) {
                        return t._handlePopperPlacementChange(e)
                    }
                }, this.config.popperConfig)
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) {
                    return t.offsets = r({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, t._getContainer = function() {
                return !1 === this.config.container ? document.body : a.isElement(this.config.container) ? n.default(this.config.container) : n.default(document).find(this.config.container)
            }, t._getAttachment = function(e) {
                return Ne[e.toUpperCase()]
            }, t._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) n.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                    else if ("manual" !== t) {
                        var o = "hover" === t ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            i = "hover" === t ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        n.default(e.element).on(o, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(i, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                }), this._hideModalHandler = function() {
                    e.element && e.hide()
                }, n.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function(e, t) {
                var o = this.constructor.DATA_KEY;
                (t = t || n.default(e.currentTarget).data(o)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), n.default(e.currentTarget).data(o, t)), e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), n.default(t.getTipElement()).hasClass("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                    "show" === t._hoverState && t.show()
                }, t.config.delay.show) : t.show())
            }, t._leave = function(e, t) {
                var o = this.constructor.DATA_KEY;
                (t = t || n.default(e.currentTarget).data(o)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), n.default(e.currentTarget).data(o, t)), e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                    "out" === t._hoverState && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, t._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, t._getConfig = function(e) {
                var t = n.default(this.element).data();
                return Object.keys(t).forEach(function(e) {
                    -1 !== ke.indexOf(e) && delete t[e]
                }), "number" == typeof(e = r({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), a.typeCheckConfig(Ge, e, this.constructor.DefaultType), e.sanitize && (e.template = De(e.template, e.whiteList, e.sanitizeFn)), e
            }, t._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, t._cleanTipClass = function() {
                var e = n.default(this.getTipElement()),
                    t = e.attr("class").match(He);
                null !== t && t.length && e.removeClass(t.join(""))
            }, t._handlePopperPlacementChange = function(e) {
                this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, t._fixTransition = function() {
                var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (n.default(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var o = n.default(this),
                        i = o.data("bs.tooltip"),
                        r = "object" == typeof t && t;
                    if ((i || !/dispose|hide/.test(t)) && (i || (i = new e(this, r), o.data("bs.tooltip", i)), "string" == typeof t)) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Oe
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ge
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return Le
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Be
                }
            }]), e
        }();
    n.default.fn[Ge] = Fe._jQueryInterface, n.default.fn[Ge].Constructor = Fe, n.default.fn[Ge].noConflict = function() {
        return n.default.fn[Ge] = Ie, Fe._jQueryInterface
    };
    var je = "popover",
        Re = n.default.fn[je],
        Ve = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        We = r({}, Fe.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        Xe = r({}, Fe.DefaultType, {
            content: "(string|element|function)"
        }),
        Ue = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        },
        qe = function(e) {
            var t, o;

            function r() {
                return e.apply(this, arguments) || this
            }
            o = e, (t = r).prototype = Object.create(o.prototype), t.prototype.constructor = t, t.__proto__ = o;
            var a = r.prototype;
            return a.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, a.addAttachmentClass = function(e) {
                n.default(this.getTipElement()).addClass("bs-popover-" + e)
            }, a.getTipElement = function() {
                return this.tip = this.tip || n.default(this.config.template)[0], this.tip
            }, a.setContent = function() {
                var e = n.default(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
            }, a._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, a._cleanTipClass = function() {
                var e = n.default(this.getTipElement()),
                    t = e.attr("class").match(Ve);
                null !== t && t.length > 0 && e.removeClass(t.join(""))
            }, r._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = n.default(this).data("bs.popover"),
                        o = "object" == typeof e ? e : null;
                    if ((t || !/dispose|hide/.test(e)) && (t || (t = new r(this, o), n.default(this).data("bs.popover", t)), "string" == typeof e)) {
                        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, i(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return We
                }
            }, {
                key: "NAME",
                get: function() {
                    return je
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.popover"
                }
            }, {
                key: "Event",
                get: function() {
                    return Ue
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Xe
                }
            }]), r
        }(Fe);
    n.default.fn[je] = qe._jQueryInterface, n.default.fn[je].Constructor = qe, n.default.fn[je].noConflict = function() {
        return n.default.fn[je] = Re, qe._jQueryInterface
    };
    var Ke = "scrollspy",
        Qe = n.default.fn[Ke],
        ze = {
            offset: 10,
            method: "auto",
            target: ""
        },
        Ye = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        $e = function() {
            function e(e, t) {
                var o = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, n.default(this._scrollElement).on("scroll.bs.scrollspy", function(e) {
                    return o._process(e)
                }), this.refresh(), this._process()
            }
            var t = e.prototype;
            return t.refresh = function() {
                var e = this,
                    t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    o = "auto" === this._config.method ? t : this._config.method,
                    i = "position" === o ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                    var t, r = a.getSelectorFromElement(e);
                    if (r && (t = document.querySelector(r)), t) {
                        var s = t.getBoundingClientRect();
                        if (s.width || s.height) return [n.default(t)[o]().top + i, r]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function() {
                n.default.removeData(this._element, "bs.scrollspy"), n.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function(e) {
                if ("string" != typeof(e = r({}, ze, "object" == typeof e && e ? e : {})).target && a.isElement(e.target)) {
                    var t = n.default(e.target).attr("id");
                    t || (t = a.getUID(Ke), n.default(e.target).attr("id", t)), e.target = "#" + t
                }
                return a.typeCheckConfig(Ke, e, Ye), e
            }, t._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), e >= n) {
                    var o = this._targets[this._targets.length - 1];
                    this._activeTarget !== o && this._activate(o)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var i = this._offsets.length; i--;) this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i])
                }
            }, t._activate = function(e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }),
                    o = n.default([].slice.call(document.querySelectorAll(t.join(","))));
                o.hasClass("dropdown-item") ? (o.closest(".dropdown").find(".dropdown-toggle").addClass("active"), o.addClass("active")) : (o.addClass("active"), o.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), o.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), n.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                    relatedTarget: e
                })
            }, t._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                    return e.classList.contains("active")
                }).forEach(function(e) {
                    return e.classList.remove("active")
                })
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var o = n.default(this).data("bs.scrollspy");
                    if (o || (o = new e(this, "object" == typeof t && t), n.default(this).data("bs.scrollspy", o)), "string" == typeof t) {
                        if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                        o[t]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return ze
                }
            }]), e
        }();
    n.default(window).on("load.bs.scrollspy.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
            var o = n.default(e[t]);
            $e._jQueryInterface.call(o, o.data())
        }
    }), n.default.fn[Ke] = $e._jQueryInterface, n.default.fn[Ke].Constructor = $e, n.default.fn[Ke].noConflict = function() {
        return n.default.fn[Ke] = Qe, $e._jQueryInterface
    };
    var Je = n.default.fn.tab,
        Ze = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && n.default(this._element).hasClass("active") || n.default(this._element).hasClass("disabled"))) {
                    var t, o, i = n.default(this._element).closest(".nav, .list-group")[0],
                        r = a.getSelectorFromElement(this._element);
                    if (i) {
                        var s = "UL" === i.nodeName || "OL" === i.nodeName ? "> li > .active" : ".active";
                        o = (o = n.default.makeArray(n.default(i).find(s)))[o.length - 1]
                    }
                    var l = n.default.Event("hide.bs.tab", {
                            relatedTarget: this._element
                        }),
                        u = n.default.Event("show.bs.tab", {
                            relatedTarget: o
                        });
                    if (o && n.default(o).trigger(l), n.default(this._element).trigger(u), !u.isDefaultPrevented() && !l.isDefaultPrevented()) {
                        r && (t = document.querySelector(r)), this._activate(this._element, i);
                        var c = function() {
                            var t = n.default.Event("hidden.bs.tab", {
                                    relatedTarget: e._element
                                }),
                                i = n.default.Event("shown.bs.tab", {
                                    relatedTarget: o
                                });
                            n.default(o).trigger(t), n.default(e._element).trigger(i)
                        };
                        t ? this._activate(t, t.parentNode, c) : c()
                    }
                }
            }, t.dispose = function() {
                n.default.removeData(this._element, "bs.tab"), this._element = null
            }, t._activate = function(e, t, o) {
                var i = this,
                    r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? n.default(t).children(".active") : n.default(t).find("> li > .active"))[0],
                    s = o && r && n.default(r).hasClass("fade"),
                    l = function() {
                        return i._transitionComplete(e, r, o)
                    };
                if (r && s) {
                    var u = a.getTransitionDurationFromElement(r);
                    n.default(r).removeClass("show").one(a.TRANSITION_END, l).emulateTransitionEnd(u)
                } else l()
            }, t._transitionComplete = function(e, t, o) {
                if (t) {
                    n.default(t).removeClass("active");
                    var i = n.default(t.parentNode).find("> .dropdown-menu .active")[0];
                    i && n.default(i).removeClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (n.default(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), a.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && n.default(e.parentNode).hasClass("dropdown-menu")) {
                    var r = n.default(e).closest(".dropdown")[0];
                    if (r) {
                        var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                        n.default(s).addClass("active")
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                o && o()
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var o = n.default(this),
                        i = o.data("bs.tab");
                    if (i || (i = new e(this), o.data("bs.tab", i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }]), e
        }();
    n.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(), Ze._jQueryInterface.call(n.default(this), "show")
    }), n.default.fn.tab = Ze._jQueryInterface, n.default.fn.tab.Constructor = Ze, n.default.fn.tab.noConflict = function() {
        return n.default.fn.tab = Je, Ze._jQueryInterface
    };
    var et = n.default.fn.toast,
        tt = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        nt = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        ot = function() {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var t = e.prototype;
            return t.show = function() {
                var e = this,
                    t = n.default.Event("show.bs.toast");
                if (n.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                    this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                    var o = function() {
                        e._element.classList.remove("showing"), e._element.classList.add("show"), n.default(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout(function() {
                            e.hide()
                        }, e._config.delay))
                    };
                    if (this._element.classList.remove("hide"), a.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
                        var i = a.getTransitionDurationFromElement(this._element);
                        n.default(this._element).one(a.TRANSITION_END, o).emulateTransitionEnd(i)
                    } else o()
                }
            }, t.hide = function() {
                if (this._element.classList.contains("show")) {
                    var e = n.default.Event("hide.bs.toast");
                    n.default(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                }
            }, t.dispose = function() {
                this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), n.default(this._element).off("click.dismiss.bs.toast"), n.default.removeData(this._element, "bs.toast"), this._element = null, this._config = null
            }, t._getConfig = function(e) {
                return e = r({}, nt, n.default(this._element).data(), "object" == typeof e && e ? e : {}), a.typeCheckConfig("toast", e, this.constructor.DefaultType), e
            }, t._setListeners = function() {
                var e = this;
                n.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function() {
                    return e.hide()
                })
            }, t._close = function() {
                var e = this,
                    t = function() {
                        e._element.classList.add("hide"), n.default(e._element).trigger("hidden.bs.toast")
                    };
                if (this._element.classList.remove("show"), this._config.animation) {
                    var o = a.getTransitionDurationFromElement(this._element);
                    n.default(this._element).one(a.TRANSITION_END, t).emulateTransitionEnd(o)
                } else t()
            }, t._clearTimeout = function() {
                clearTimeout(this._timeout), this._timeout = null
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var o = n.default(this),
                        i = o.data("bs.toast");
                    if (i || (i = new e(this, "object" == typeof t && t), o.data("bs.toast", i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t](this)
                    }
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return tt
                }
            }, {
                key: "Default",
                get: function() {
                    return nt
                }
            }]), e
        }();
    n.default.fn.toast = ot._jQueryInterface, n.default.fn.toast.Constructor = ot, n.default.fn.toast.noConflict = function() {
        return n.default.fn.toast = et, ot._jQueryInterface
    }, e.Alert = u, e.Button = d, e.Carousel = b, e.Collapse = w, e.Dropdown = we, e.Modal = Ce, e.Popover = qe, e.Scrollspy = $e, e.Tab = Ze, e.Toast = ot, e.Tooltip = Fe, e.Util = a, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(e) {
    e.fn.beforeAfter = function() {
        var t = this,
            n = t.width() + "px";
        t.find(".resize img").css("width", n),
            function(t, n, o) {
                t.on("mousedown.ba-events touchstart.ba-events", function(i) {
                    t.addClass("ba-draggable"), n.addClass("ba-resizable");
                    var r = i.pageX ? i.pageX : i.originalEvent.touches[0].pageX,
                        a = t.outerWidth(),
                        s = t.offset().left + a - r,
                        l = o.offset().left,
                        u = o.outerWidth();
                    minLeft = l + 10, maxLeft = l + u - a - 10, t.parents().on("mousemove.ba-events touchmove.ba-events", function(t) {
                        var n = t.pageX ? t.pageX : t.originalEvent.touches[0].pageX;
                        leftValue = n + s - a, leftValue < minLeft ? leftValue = minLeft : leftValue > maxLeft && (leftValue = maxLeft), widthValue = 100 * (leftValue + a / 2 - l) / u + "%", e(".ba-draggable").css("left", widthValue), e(".ba-resizable").css("width", widthValue)
                    }).on("mouseup.ba-events touchend.ba-events touchcancel.ba-events", function() {
                        t.removeClass("ba-draggable"), n.removeClass("ba-resizable"), e(this).off(".ba-events")
                    }), i.preventDefault()
                })
            }(t.find(".handle"), t.find(".resize"), t), e(window).resize(function() {
                var e = t.width() + "px";
                t.find(".resize img").css("width", e)
            })
    }
}(jQuery),
function(e, t) {
    e(function() {
        "use strict";

        function e(e, t) {
            return null != e && null != t && e.toLowerCase() === t.toLowerCase()
        }

        function n(e, t) {
            var n, o, i = e.length;
            if (!i || !t) return !1;
            for (n = t.toLowerCase(), o = 0; o < i; ++o)
                if (n === e[o].toLowerCase()) return !0;
            return !1
        }

        function o(e) {
            for (var t in e) s.call(e, t) && (e[t] = new RegExp(e[t], "i"))
        }

        function i(e, t) {
            this.ua = function(e) {
                return (e || "").substr(0, 500)
            }(e), this._cache = {}, this.maxPhoneWidth = t || 600
        }
        var r, a = {
                mobileDetectRules: {
                    phones: {
                        iPhone: "\\biPhone\\b|\\biPod\\b",
                        BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
                        Pixel: "; \\bPixel\\b",
                        HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                        Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 5X|Nexus 6",
                        Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                        Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
                        Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F|SM-G610F|SM-G981B|SM-G892A|SM-A530F",
                        LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
                        Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533|SOV34|601SO|F8332",
                        Asus: "Asus.*Galaxy|PadFone.*Mobile",
                        Xiaomi: "^(?!.*\\bx11\\b).*xiaomi.*$|POCOPHONE F1|MI 8|Redmi Note 9S|Redmi Note 5A Prime|N2G47H|M2001J2G|M2001J2I|M1805E10A|M2004J11G|M1902F1G|M2002J9G|M2004J19G|M2003J6A1G",
                        NokiaLumia: "Lumia [0-9]{3,4}",
                        Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                        Palm: "PalmSource|Palm",
                        Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                        Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                        Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                        Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                        iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                        SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                        Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                        Alcatel: "Alcatel",
                        Nintendo: "Nintendo (3DS|Switch)",
                        Amoi: "Amoi",
                        INQ: "INQ",
                        OnePlus: "ONEPLUS",
                        GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                    },
                    tablets: {
                        iPad: "iPad|iPad.*Mobile",
                        NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                        GoogleTablet: "Android.*Pixel C",
                        SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V|SM-P610|SM-T290|SM-T515|SM-T590|SM-T595|SM-T725|SM-T817P|SM-P585N0|SM-T395|SM-T295|SM-T865|SM-P610N|SM-P615|SM-T970|SM-T380|SM-T5950|SM-T905|SM-T231|SM-T500|SM-T860",
                        Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                        SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                        HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                        AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
                        BlackBerryTablet: "PlayBook|RIM Tablet",
                        HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                        MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                        NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                        AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30|A3-A40",
                        ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                        LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                        FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                        PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                        LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X|TB-X704F|TB-X104F|TB3-X70F|TB-X705F|TB-8504F|TB3-X70L|TB3-710F|TB-X704L",
                        DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                        YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                        MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                        ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                        IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                        IRUTablet: "M702pro",
                        MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                        EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                        AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                        ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                        AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                        NokiaLumiaTablet: "Lumia 2520",
                        SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
                        PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                        CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                        CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                        MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                        MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                        SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                        RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                        FlyTablet: "IQ310|Fly Vision",
                        bqTablet: "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
                        HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
                        NecTablet: "\\bN-06D|\\bN-08D",
                        PantechTablet: "Pantech.*P4100",
                        BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                        VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                        ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
                        PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                        NabiTablet: "Android.*\\bNabi",
                        KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                        DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                        TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                        PlaystationTablet: "Playstation.*(Portable|Vita)",
                        TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                        PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                        AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                        DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                        GalapadTablet: "Android [0-9.]+; [a-z-]+; \\bG1\\b",
                        MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                        KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                        AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                        PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                        YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                        ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                        GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                        PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                        OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                        HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                        DPSTablet: "DPS Dream 9|DPS Dual 7",
                        VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                        CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                        MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                        ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                        GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                        ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                        VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                        ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                        StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                        VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
                        EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                        RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                        iMobileTablet: "i-mobile i-note",
                        TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                        AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                        AMPETablet: "Android.* A78 ",
                        SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                        TecnoTablet: "TECNO P9|TECNO DP8D",
                        JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                        iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                        FX2Tablet: "FX2 PAD7|FX2 PAD10",
                        XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                        ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                        VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                        OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                        CaptivaTablet: "CAPTIVA PAD",
                        IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                        TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                        OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
                        JaytechTablet: "TPC-PA762",
                        BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                        DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                        EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                        LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                        AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                        MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                        CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                        WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                        MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                        MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                        NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                        NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                        LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                        UbislateTablet: "UbiSlate[\\s]?7C",
                        PocketBookTablet: "Pocketbook",
                        KocasoTablet: "\\b(TB-1207)\\b",
                        HisenseTablet: "\\b(F5281|E2371)\\b",
                        Hudl: "Hudl HT7S3|Hudl 2",
                        TelstraTablet: "T-Hub2",
                        GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
                    },
                    oss: {
                        AndroidOS: "Android",
                        BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                        PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                        SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                        WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
                        WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                        iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                        iPadOS: "CPU OS 13",
                        SailfishOS: "Sailfish",
                        MeeGoOS: "MeeGo",
                        MaemoOS: "Maemo",
                        JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                        webOS: "webOS|hpwOS",
                        badaOS: "\\bBada\\b",
                        BREWOS: "BREW"
                    },
                    uas: {
                        Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                        Dolfin: "\\bDolfin\\b",
                        Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
                        Skyfire: "Skyfire",
                        Edge: "\\bEdgiOS\\b|Mobile Safari/[.0-9]* Edge",
                        IE: "IEMobile|MSIEMobile",
                        Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                        Bolt: "bolt",
                        TeaShark: "teashark",
                        Blazer: "Blazer",
                        Safari: "Version((?!\\bEdgiOS\\b).)*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                        WeChat: "\\bMicroMessenger\\b",
                        UCBrowser: "UC.*Browser|UCWEB",
                        baiduboxapp: "baiduboxapp",
                        baidubrowser: "baidubrowser",
                        DiigoBrowser: "DiigoBrowser",
                        Mercury: "\\bMercury\\b",
                        ObigoBrowser: "Obigo",
                        NetFront: "NF-Browser",
                        GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                        PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
                    },
                    props: {
                        Mobile: "Mobile/[VER]",
                        Build: "Build/[VER]",
                        Version: "Version/[VER]",
                        VendorID: "VendorID/[VER]",
                        iPad: "iPad.*CPU[a-z ]+[VER]",
                        iPhone: "iPhone.*CPU[a-z ]+[VER]",
                        iPod: "iPod.*CPU[a-z ]+[VER]",
                        Kindle: "Kindle/[VER]",
                        Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                        Coast: ["Coast/[VER]"],
                        Dolfin: "Dolfin/[VER]",
                        Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                        Fennec: "Fennec/[VER]",
                        Edge: "Edge/[VER]",
                        IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                        NetFront: "NetFront/[VER]",
                        NokiaBrowser: "NokiaBrowser/[VER]",
                        Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                        "Opera Mini": "Opera Mini/[VER]",
                        "Opera Mobi": "Version/[VER]",
                        UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                        MQQBrowser: "MQQBrowser/[VER]",
                        MicroMessenger: "MicroMessenger/[VER]",
                        baiduboxapp: "baiduboxapp/[VER]",
                        baidubrowser: "baidubrowser/[VER]",
                        SamsungBrowser: "SamsungBrowser/[VER]",
                        Iron: "Iron/[VER]",
                        Safari: ["Version/[VER]", "Safari/[VER]"],
                        Skyfire: "Skyfire/[VER]",
                        Tizen: "Tizen/[VER]",
                        Webkit: "webkit[ /][VER]",
                        PaleMoon: "PaleMoon/[VER]",
                        SailfishBrowser: "SailfishBrowser/[VER]",
                        Gecko: "Gecko/[VER]",
                        Trident: "Trident/[VER]",
                        Presto: "Presto/[VER]",
                        Goanna: "Goanna/[VER]",
                        iOS: " \\bi?OS\\b [VER][ ;]{1}",
                        Android: "Android [VER]",
                        Sailfish: "Sailfish [VER]",
                        BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                        BREW: "BREW [VER]",
                        Java: "Java/[VER]",
                        "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                        "Windows Phone": "Windows Phone [VER]",
                        "Windows CE": "Windows CE/[VER]",
                        "Windows NT": "Windows NT [VER]",
                        Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                        webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                    },
                    utils: {
                        Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp|AspiegelBot",
                        MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                        DesktopMode: "WPDesktop",
                        TV: "SonyDTV|HbbTV",
                        WebKit: "(webkit)[ /]([\\w.]+)",
                        Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
                        Watch: "SM-V700"
                    }
                },
                detectMobileBrowsers: {
                    fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    tabletPattern: /android|ipad|playbook|silk/i
                }
            },
            s = Object.prototype.hasOwnProperty;
        return a.FALLBACK_PHONE = "UnknownPhone", a.FALLBACK_TABLET = "UnknownTablet", a.FALLBACK_MOBILE = "UnknownMobile", r = "isArray" in Array ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            function() {
                var e, t, n, i, l, u, c = a.mobileDetectRules;
                for (e in c.props)
                    if (s.call(c.props, e)) {
                        for (t = c.props[e], r(t) || (t = [t]), l = t.length, i = 0; i < l; ++i)(u = (n = t[i]).indexOf("[VER]")) >= 0 && (n = n.substring(0, u) + "([\\w._\\+]+)" + n.substring(u + 5)), t[i] = new RegExp(n, "i");
                        c.props[e] = t
                    }
                o(c.oss), o(c.phones), o(c.tablets), o(c.uas), o(c.utils), c.oss0 = {
                    WindowsPhoneOS: c.oss.WindowsPhoneOS,
                    WindowsMobileOS: c.oss.WindowsMobileOS
                }
            }(), a.findMatch = function(e, t) {
                for (var n in e)
                    if (s.call(e, n) && e[n].test(t)) return n;
                return null
            }, a.findMatches = function(e, t) {
                var n = [];
                for (var o in e) s.call(e, o) && e[o].test(t) && n.push(o);
                return n
            }, a.getVersionStr = function(e, t) {
                var n, o, i, r, l = a.mobileDetectRules.props;
                if (s.call(l, e))
                    for (i = (n = l[e]).length, o = 0; o < i; ++o)
                        if (null !== (r = n[o].exec(t))) return r[1];
                return null
            }, a.getVersion = function(e, t) {
                var n = a.getVersionStr(e, t);
                return n ? a.prepareVersionNo(n) : NaN
            }, a.prepareVersionNo = function(e) {
                var t;
                return 1 === (t = e.split(/[a-z._ \/\-]/i)).length && (e = t[0]), t.length > 1 && (e = t[0] + ".", t.shift(), e += t.join("")), Number(e)
            }, a.isMobileFallback = function(e) {
                return a.detectMobileBrowsers.fullPattern.test(e) || a.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
            }, a.isTabletFallback = function(e) {
                return a.detectMobileBrowsers.tabletPattern.test(e)
            }, a.prepareDetectionCache = function(e, n, o) {
                var r, s, l;
                if (e.mobile === t) return (s = a.findMatch(a.mobileDetectRules.tablets, n)) ? (e.mobile = e.tablet = s, void(e.phone = null)) : (r = a.findMatch(a.mobileDetectRules.phones, n)) ? (e.mobile = e.phone = r, void(e.tablet = null)) : void(a.isMobileFallback(n) ? (l = i.isPhoneSized(o), l === t ? (e.mobile = a.FALLBACK_MOBILE, e.tablet = e.phone = null) : l ? (e.mobile = e.phone = a.FALLBACK_PHONE, e.tablet = null) : (e.mobile = e.tablet = a.FALLBACK_TABLET, e.phone = null)) : a.isTabletFallback(n) ? (e.mobile = e.tablet = a.FALLBACK_TABLET, e.phone = null) : e.mobile = e.tablet = e.phone = null)
            }, a.mobileGrade = function(e) {
                var t = null !== e.mobile();
                return e.os("iOS") && e.version("iPad") >= 4.3 || e.os("iOS") && e.version("iPhone") >= 3.1 || e.os("iOS") && e.version("iPod") >= 3.1 || e.version("Android") > 2.1 && e.is("Webkit") || e.version("Windows Phone OS") >= 7 || e.is("BlackBerry") && e.version("BlackBerry") >= 6 || e.match("Playbook.*Tablet") || e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && e.version("Firefox") >= 12 || e.is("Chrome") && e.is("AndroidOS") && e.version("Android") >= 4 || e.is("Skyfire") && e.version("Skyfire") >= 4.1 && e.is("AndroidOS") && e.version("Android") >= 2.3 || e.is("Opera") && e.version("Opera Mobi") > 11 && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && e.version("Bada") >= 2 || (e.is("UC Browser") || e.is("Dolfin")) && e.version("Android") >= 2.3 || e.match("Kindle Fire") || e.is("Kindle") && e.version("Kindle") >= 3 || e.is("AndroidOS") && e.is("NookTablet") || e.version("Chrome") >= 11 && !t || e.version("Safari") >= 5 && !t || e.version("Firefox") >= 4 && !t || e.version("MSIE") >= 7 && !t || e.version("Opera") >= 10 && !t ? "A" : e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && e.version("BlackBerry") >= 5 && e.version("BlackBerry") < 6 || e.version("Opera Mini") >= 5 && e.version("Opera Mini") <= 6.5 && (e.version("Android") >= 2.3 || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || e.version("Opera Mobi") >= 11 && e.is("SymbianOS") ? "B" : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile"), "C")
            }, a.detectOS = function(e) {
                return a.findMatch(a.mobileDetectRules.oss0, e) || a.findMatch(a.mobileDetectRules.oss, e)
            }, a.getDeviceSmallerSide = function() {
                return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
            }, i.prototype = {
                constructor: i,
                mobile: function() {
                    return a.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                },
                phone: function() {
                    return a.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                },
                tablet: function() {
                    return a.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                },
                userAgent: function() {
                    return this._cache.userAgent === t && (this._cache.userAgent = a.findMatch(a.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                },
                userAgents: function() {
                    return this._cache.userAgents === t && (this._cache.userAgents = a.findMatches(a.mobileDetectRules.uas, this.ua)), this._cache.userAgents
                },
                os: function() {
                    return this._cache.os === t && (this._cache.os = a.detectOS(this.ua)), this._cache.os
                },
                version: function(e) {
                    return a.getVersion(e, this.ua)
                },
                versionStr: function(e) {
                    return a.getVersionStr(e, this.ua)
                },
                is: function(t) {
                    return n(this.userAgents(), t) || e(t, this.os()) || e(t, this.phone()) || e(t, this.tablet()) || n(a.findMatches(a.mobileDetectRules.utils, this.ua), t)
                },
                match: function(e) {
                    return e instanceof RegExp || (e = new RegExp(e, "i")), e.test(this.ua)
                },
                isPhoneSized: function(e) {
                    return i.isPhoneSized(e || this.maxPhoneWidth)
                },
                mobileGrade: function() {
                    return this._cache.grade === t && (this._cache.grade = a.mobileGrade(this)), this._cache.grade
                }
            }, "undefined" != typeof window && window.screen ? i.isPhoneSized = function(e) {
                return e < 0 ? t : a.getDeviceSmallerSide() <= e
            } : i.isPhoneSized = function() {}, i._impl = a, i.version = "1.4.5 2021-03-13", i
    })
}(function(e) {
    if ("undefined" != typeof module && module.exports) return function(e) {
        module.exports = e()
    };
    if ("function" == typeof define && define.amd) return define;
    if ("undefined" != typeof window) return function(e) {
        window.MobileDetect = e()
    };
    throw new Error("unknown environment")
}()),
function(e) {
    var t;
    if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), !t) {
        var n = window.Cookies,
            o = window.Cookies = e();
        o.noConflict = function() {
            return window.Cookies = n, o
        }
    }
}(function() {
    function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n) t[o] = n[o]
        }
        return t
    }

    function t(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }
    return function n(o) {
        function i() {}

        function r(t, n, r) {
            if ("undefined" != typeof document) {
                "number" == typeof(r = e({
                    path: "/"
                }, i.defaults, r)).expires && (r.expires = new Date(1 * new Date + 864e5 * r.expires)), r.expires = r.expires ? r.expires.toUTCString() : "";
                try {
                    var a = JSON.stringify(n);
                    /^[\{\[]/.test(a) && (n = a)
                } catch (e) {}
                n = o.write ? o.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var s = "";
                for (var l in r) r[l] && (s += "; " + l, !0 !== r[l] && (s += "=" + r[l].split(";")[0]));
                return document.cookie = t + "=" + n + s
            }
        }

        function a(e, n) {
            if ("undefined" != typeof document) {
                for (var i = {}, r = document.cookie ? document.cookie.split("; ") : [], a = 0; a < r.length; a++) {
                    var s = r[a].split("="),
                        l = s.slice(1).join("=");
                    n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                    try {
                        var u = t(s[0]);
                        if (l = (o.read || o)(l, u) || t(l), n) try {
                            l = JSON.parse(l)
                        } catch (e) {}
                        if (i[u] = l, e === u) break
                    } catch (e) {}
                }
                return e ? i[e] : i
            }
        }
        return i.set = r, i.get = function(e) {
            return a(e, !1)
        }, i.getJSON = function(e) {
            return a(e, !0)
        }, i.remove = function(t, n) {
            r(t, "", e(n, {
                expires: -1
            }))
        }, i.defaults = {}, i.withConverter = n, i
    }(function() {})
}),
function(e) {
    "use strict";
    window.tinywowExitPopups = [], window.tinywowExitPopup = {
        popupId: "existPopup",
        popupIdHtml: "#existPopup",
        countViewsForExitPopup: function() {
            let e = Cookies.get("exit_cviews_" + this.popupId);
            void 0 === e && (e = 0), e++, Cookies.remove("exit_cviews_" + this.popupId), Cookies.set("exit_cviews_" + this.popupId, e, {
                expires: 30
            })
        },
        init: function(t, n) {
            let o = this;
            this.popupId = t, this.popupIdHtml = "#" + t, e("body").on("hidden.bs.modal", this.popupIdHtml, function(e) {
                o.exit(e)
            }), e("body").on("submit", this.popupIdHtml + " form", function(e) {
                e.preventDefault(), e.stopPropagation(), n(this)
            });
            const i = function(e) {
                e.toElement || e.relatedTarget || (document.removeEventListener("mouseout", i), Cookies.get("exit_nshow_" + o.popupId) || o.initCaptcha(o.popupId))
            };
            setTimeout(function() {
                document.addEventListener("mouseout", i, !1)
            }, 1e4), window.tinywowExitPopups.push(this)
        },
        initCaptcha: function(t, n) {
            if (void 0 !== n) {
                let t = this;
                setTimeout(function() {
                    window.currentSubscribeModalId = t.popupId, e(t.popupIdHtml).modal("show"), window.unDefer("onloadRecaptchaMainSubscribe")
                }, 2e3)
            } else window.tinywowExitPopups.forEach(function(n) {
                n.popupId == t && (window.currentSubscribeModalId = n.popupId, e(n.popupIdHtml).modal("show"), window.unDefer("onloadRecaptchaMainSubscribe"))
            })
        },
        exit: function() {
            let t = e("#" + this.popupId).data("expired");
            Cookies.set("exit_nshow_" + this.popupId, !0, {
                expires: t || 30
            })
        }
    }
}(jQuery),
function(e) {
    "use strict";
    window.recaptchaWidgIds = [], window.currentSubscribeModalId = null, window.onloadRecaptchaMainSubscribe = function() {
        let t = e("#" + window.currentSubscribeModalId),
            n = "captchaId_" + window.currentSubscribeModalId;
        void 0 !== window.recaptchaKey && window.showRecaptcha(e => {
            t.find("input[name='recaptcha_response']").val(window.Laravel.cT + ":" + e)
        }, n)
    }, window.tinywowExitPopup.init("exitPopupModal", function(t) {
        let n = e(t).find("[name=email]").val();
        window.subscribeConvertKit(n, !0, !0, "exitPopupModal", function() {
            e("#exitPopupModal").data("expired", 365), e("#exitPopupModal").modal("hide")
        })
    });
    let t = "";
    const n = ["mouseover", "mousemove", "keydown", "touchstart", "touchmove", "wheel"],
        o = document.querySelectorAll("[data-lazy-method='interaction']");
    if (o.length) {
        function i() {
            clearTimeout(e), n.forEach(function(e) {
                window.removeEventListener(e, i, {
                    passive: !0
                })
            }), o.forEach(function(e) {
                e.getAttribute("data-lazy-attributes").split(",").forEach(function(t) {
                    const n = e.getAttribute("data-lazy-".concat(t));
                    e.setAttribute(t, n)
                })
            })
        }
        const e = setTimeout(i, 1e4);
        n.forEach(function(e) {
            window.addEventListener(e, i, {
                passive: !0
            })
        })
    }

    function r(t) {
        (void 0 !== window.recaptchaKey || window.Laravel.loadProd && void 0 !== window.Vue.modalRecaptcha) && (window.Laravel.loadProd && void 0 !== window.Vue.modalRecaptcha || e("input[name='recaptcha_response']").val(window.Laravel.cT + ":" + t), e("#recaptchaForm").modal("hide")), e.ajax({
            beforeSend: function(t) {
                t.setRequestHeader("X-CSRF-TOKEN", e('meta[name="csrf-token"]').attr("content"))
            },
            type: "POST",
            url: window.ajaxUrls.suggForm,
            dataType: "json",
            data: e("#sendSuggestionForm").serialize(),
            success: function(t) {
                e("#alertSuccessModal").modal("show"), resetMainFormErrorsById("sendSuggestionForm", !0)
            },
            error: function(t) {
                let n = e.parseJSON(t.responseText);
                422 === t.status ? (resetMainFormErrorsById("sendSuggestionForm"), setErrorsForMainForm(n.errors, "sendSuggestionForm")) : void 0 !== n.message && "" != n.message && alert(n.message)
            }
        })
    }

    function a(e, t) {
        void 0 === t && (t = "captcha");
        let n = t;
        window.Laravel.enCf && (n = "#" + t);
        let o = grecaptcha.render(n, {
            sitekey: window.recaptchaKey,
            theme: "light",
            callback: e
        });
        window.recaptchaWidgIds.push({
            captchaId: t,
            recaptchaWidgId: o
        })
    }
    e(document).ready(function() {
            var t, n;
            !window.Laravel.loadProd || void 0 !== window.Vue && void 0 !== window.Vue.modalRecaptcha || (window.recaptchaKey = window.Laravel.captcha_sitekey, window.Laravel.enCf ? e("head").append(e('<noscript id="deferred-main-captcha"></noscript>').append('<script src="https://challenges.cloudflare.com/turnstile/v0/api.js?compat=recaptcha" async defer><\/script>')) : e("head").append(e('<noscript id="deferred-main-captcha"></noscript>').append('<script src="https://www.google.com/recaptcha/api.js?render=explicit" defer><\/script>'))), t = e(window), n = e("header.sticky-top"), t.on("scroll", function() {
                t.scrollTop() < 100 ? n.removeClass("sticky") : n.addClass("sticky")
            }), e(window).on("scroll", function() {
                e(this).scrollTop() > 600 ? e(".back-to-top").fadeIn(200) : e(".back-to-top").fadeOut(200)
            }), e(".back-to-top").on("click", function(t) {
                t.preventDefault(), e("html, body").animate({
                    scrollTop: 0
                }, 1500)
            }), e(".hamburger-menu").on("click", function() {
                e(".hamburger-menu .line-top, #menu, .mobile_menu").toggleClass("current"), e(".hamburger-menu .line-center").toggleClass("current"), e(".hamburger-menu .line-bottom").toggleClass("current")
            }), e(".multilavel > a").click(function(t) {
                var n = e(this).closest(".multilavel").find("ul");
                e(".multilavel ul").slideUp(), n.stop(!1, !1).slideToggle(), t.preventDefault()
            })
        }), e("body").on("submit", "#searchToolsMobileForm", function(t) {
            t.preventDefault(),
                function() {
                    let t = e("#searchToolsMobileForm").find("input[type=text]").val();
                    e("li.mobile_menu-elements").each(function(n, o) {
                        let i = e(o).data("title") + " " + e(o).data("description") + " " + e(o).data("search-terms");
                        i.toLowerCase().indexOf(t.toLowerCase()) >= 0 || "" == t.toLowerCase().trim() ? e(o).show() : e(o).hide()
                    }), e("li.mobile_menu-full-elements").each(function(t, n) {
                        let o = e(n),
                            i = !1;
                        e(n).find("li.mobile_menu-elements").each(function(t, n) {
                            "none" != e(n).css("display") && (i = !0)
                        }), i ? e(o).show() : e(o).hide()
                    })
                }()
        }), e("body").on("click", ".js-copy-link", function() {
            let t = e(this).data("link");
            navigator.clipboard.writeText(t).then(function() {
                console.log("Async: Copying to clipboard was successful!")
            }, function(e) {
                console.error("Async: Could not copy text: ", e)
            })
        }), e("body").on("click", ".button-switch-mode", function() {
            e(this).toggleClass("ia-active"), e("body").toggleClass("dark-mode");
            let t = "off";
            e("body").hasClass("dark-mode") && (t = "on"), e.ajax({
                beforeSend: function(t) {
                    t.setRequestHeader("X-CSRF-TOKEN", e('meta[name="csrf-token"]').attr("content"))
                },
                type: "POST",
                url: window.ajaxUrls.setSiteMode,
                dataType: "json",
                data: {
                    dark_mode: t
                },
                success: function(e) {},
                error: function(e) {}
            })
        }), e(".js-comparison").length > 0 && (e(".js-comparison").beforeAfter(), e(".handle").css("left") < "1.04%" ? e(this).addClass("left") : e(this).removeClass("left")),
        function() {
            let e = !1;
            if (window.MobileDetect) {
                let t = new MobileDetect(window.navigator.userAgent);
                t.mobile() || (e = !0)
            }
            if (!e) return;
            Cookies.get("chatBotShowed");
            let t = Cookies.get("beforeShowPages");
            t = t ? parseInt(t) : 0, window.ybug_settings = {
                id: "yw93c8c1p0b95rn958f2"
            }, 0;
            window.ybug_settings.translate = {
                "launcherButton.Title": "Report Bug/Request Feature",
                "feedbackTypeForm.Heading": "TinyWow Feedback",
                "feedbackTypeForm.Subheading": "Found a bug or have a feature to request?",
                "feedbackTypeForm.ButtonSpecific": "Screenshot and report a bug on this page",
                "feedbackTypeForm.ButtonGeneral": "What tool are we missing that you want?",
                "feedbackForm.Heading": "Submit Feedback",
                "feedbackForm.RatingLabel": "How would you rate your experience?",
                "feedbackForm.TextLabel": "Comment",
                "feedbackForm.TextPlaceholder": "Tell us your problem or request a feature",
                "feedbackForm.TextError": "This field is required",
                "feedbackForm.TitleLabel": "Title",
                "feedbackForm.TitlePlaceholder": "Short feedback summary",
                "feedbackForm.EmailLabel": "Your e-mail",
                "feedbackForm.EmailPlaceholder": "Your e-mail(optional)",
                "feedbackForm.EmailError": "Please enter valid e-mail address",
                "feedbackForm.NameLabel": "Your name",
                "feedbackForm.PriorityLabel": "Priority",
                "feedbackForm.TypeLabel": "Feedback type",
                "feedbackForm.ButtonSubmit": "   Submit feedback   ",
                "feedbackForm.ButtonCancel": "Back",
                "feedbackForm.RequiredError": "This field is required",
                "feedbackForm.OptionalText": "(optional)",
                "feedbackForm.AddScreenshot": "Add screenshot",
                "feedbackForm.EditScreenshot": "Edit screenshot",
                "feedbackForm.Consent.Label": "I agree to the {tos}",
                "feedbackForm.Consent.TosUrl": "https://ybug.io/terms",
                "feedbackForm.Consent.TosLabel": "Terms of Service",
                "highlighter.Instructions": "Click on the page to select a region",
                "highlighter.Cancel": "Cancel",
                "highlighter.Undo": "Undo",
                "highlighter.tools.Pencil": "Pencil",
                "highlighter.tools.Arrow": "Arrow",
                "highlighter.tools.Rectangle": "Rectangle",
                "highlighter.tools.ColorPicker": "Color picker",
                "highlighter.tools.Obfuscate": "Obfuscate",
                "highlighter.tools.Text": "Add a comment",
                "highlighter.tools.Text.Placeholder": "Type a comment",
                "highlighter.tools.Text.Save": "Save comment",
                "highlighter.Done": "Done",
                "thankYouModal.Heading": "Thank You",
                "thankYouModal.Text": "Your feedback has been sent. Thank you.",
                "thankYouModal.Button": "Close",
                "processingModal.Heading": "Processing "
            };
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, n.src = "https://widget.ybug.io/button/" + window.ybug_settings.id + ".js";
            var o = document.getElementsByTagName("script")[0];
            o.parentNode.insertBefore(n, o)
        }(),
        function() {
            let t = Math.floor(3 * Math.random());
            e(".banner-wrapper").hide(), e(".banner-wrapper").eq(t).show()
        }(), e(".js-header-search_button").on("click", function() {
            e(".header-search_group").toggleClass("is-active")
        }), e(".js-search-tools").on("keydown", function(t) {
            return 13 != (t.keyCode ? t.keyCode : t.which) || (t.preventDefault(), window.location = "/tools?q=" + e(this).val(), !1)
        }), e(".js-search-tools").on("keyup", debounce(function(n) {
            ! function() {
                let n = e(".js-search-tools:visible").val();
                t.length < n.length && (t = n);
                e.ajax({
                    beforeSend: function(t) {
                        t.setRequestHeader("X-CSRF-TOKEN", e('meta[name="csrf-token"]').attr("content"))
                    },
                    type: "POST",
                    url: window.ajaxUrls.srchTools,
                    dataType: "json",
                    data: {
                        search_terms: n
                    },
                    success: function(t) {
                        t.status && (e(".js-search-tools:visible").parents(".header-search_group").find(".header-search_results--desktop").html(t.html).show(), e(".js-search-tools:visible").parents(".header-search--pannel").find(".header-search_results--mobile").html(t.htmlMobile).show())
                    },
                    error: function(t) {
                        let n = e.parseJSON(t.responseText);
                        void 0 !== n.message && "" != n.message && console.log(n.message)
                    }
                })
            }()
        }, 600)), e("body").on("click", function() {
            e(".js-search-tools:visible").parents(".header-search_group").find(".header-search_results--desktop").hide(), e(".js-search-tools:visible").parents(".header-search_group").find(".header-search_results--mobile").hide()
        }), e("body").on("mousedown", ".js-goto-tool", function(n) {
            let o = 1;
            switch (n.which) {
                case 1:
                case 2:
                case 3:
                    o = n.which;
                    break;
                default:
                    o = 4
            }
            Cookies.set("search_term", e(this).data("tool-id") + "|||||" + t + "|||||" + o, {
                expires: 1
            })
        }), e("body").on("submit", "#sendSuggestionForm", function(t) {
            t.preventDefault(), void 0 !== window.recaptchaKey || window.Laravel.loadProd && void 0 !== window.Vue.modalRecaptcha ? (e("#modal-suggestion").modal("hide"), window.showRecaptcha(r)) : r()
        }), e("body").on("click", ".js-suggestion-modal", function(t) {
            t.preventDefault(), t.stopPropagation(), e("#modal-suggestion").modal("show")
        }), e("body").on("input", "#sendContactForm :input, #sendSuggestionForm :input, #contactUsForm :input, #signUpForm :input", function() {
            window.unDefer()
        }), window.unDefer = function(t) {
            let n = e("#deferred-main-captcha");
            if (n.length > 0) {
                if (void 0 !== t) {
                    let o = n.text(),
                        i = e(o).prop("src") + "&onload=" + t;
                    n.after('<script src="' + i + '" defer><\/script>')
                } else n.after(n.text());
                n.remove()
            } else void 0 !== t && window[t]()
        }, window.showRecaptcha = function(t, n) {
            if (window.Laravel.loadProd && void 0 !== n) {
                let e = !1;
                window.recaptchaWidgIds.forEach(function(t) {
                    t.captchaId == n && null !== t.recaptchaWidgId && (grecaptcha.reset(t.recaptchaWidgId), e = !0)
                }), e || setTimeout(function() {
                    a(t, n)
                }, 100)
            } else if (window.Laravel.loadProd && void 0 !== window.Vue && void 0 !== window.Vue.modalRecaptcha) window.Vue.modalRecaptcha.open().then(n => {
                "verify" == n.status && (e("input[name='recaptcha_response']").val(window.Laravel.cT + ":" + n.token), t())
            });
            else {
                console.log("typeof captchaId: "), console.log(typeof n), console.log(window.recaptchaWidgIds.length), void 0 === n && (n = "captcha", window.recaptchaWidgIds.forEach(function(t, o, i) {
                    if (t.captchaId == n && null !== t.recaptchaWidgId) {
                        let n = e("#recaptchaForm").find("#captcha"),
                            r = n.parent();
                        n.remove(), void 0 === grecaptcha.remove ? grecaptcha.reset(t.recaptchaWidgId) : grecaptcha.remove(t.recaptchaWidgId), i.splice(o, 1), r.append('<div id="captcha"></div>')
                    }
                }), e("#recaptchaForm").modal("show"));
                let o = !1;
                window.recaptchaWidgIds.forEach(function(e) {
                    console.log("forEach: "), console.log(e.captchaId), console.log(e.recaptchaWidgId), console.log(n), e.captchaId == n && null !== e.recaptchaWidgId && (grecaptcha.reset(e.recaptchaWidgId), o = !0)
                }), console.log("existsInRecaptchaObjects: "), console.log(o), o || setTimeout(function() {
                    a(t, n)
                }, 100)
            }
        }, window.getRecaptchaWidgId = function(e) {
            let t = 0;
            return window.recaptchaWidgIds.forEach(function(n) {
                n.captchaId == e && null !== n.recaptchaWidgId && (t = n.recaptchaWidgId)
            }), t
        }, e("body").on("click", ".modal-backdrop", function() {
            e("#modal-result-send").is(":visible") && e("#modal-result-send").modal("hide"), e("#modal-result-download").is(":visible") && e("#modal-result-download").modal("hide")
        }), e(".js-tools-menu").on("click", function() {
            e(".mobile_menu-tools").toggleClass("current"), e(this).toggleClass("current"), e(".hamburger-menu").removeClass("current"), e(".mobile_menu-user").removeClass("current")
        }), e("body").on("click", ".js-show-contact-us", function(t) {
            t.preventDefault(), window.unDefer("onloadRecaptchaContact"), e("#modal-contact-us").modal("show")
        }), window.onloadRecaptchaContact = function() {
            void 0 !== window.recaptchaKey && window.showRecaptcha(t => {
                e("#modal-contact-us").find("input[name='recaptcha_response']").val(window.Laravel.cT + ":" + t)
            }, "captchaContact")
        }, e("body").on("click", ".js-contact-us", function(t) {
            t.preventDefault(),
                function() {
                    let t = e("#contactUsForm"),
                        n = e("#modal-contact-us");
                    var o = t.serialize();
                    e.ajax({
                        beforeSend: function(t) {
                            t.setRequestHeader("X-CSRF-TOKEN", e('meta[name="csrf-token"]').attr("content"))
                        },
                        type: "POST",
                        url: window.ajaxUrls.homeContForm,
                        dataType: "json",
                        data: o,
                        success: function(e) {
                            n.modal("hide"), e && void 0 !== e.message && (showAlertModal("Message", e.message), resetMainFormErrorsById("contactUsForm", !0))
                        },
                        error: function(t) {
                            window.onloadRecaptchaContact();
                            let n = e.parseJSON(t.responseText);
                            422 === t.status ? setErrorsWithTextForMainForm(n.errors, "contactUsForm") : void 0 !== n.message && "" != n.message && alert(n.message)
                        }
                    })
                }()
        }), window.subscribeConvertKit = function(t, n, o, i, r) {
            e.ajax({
                beforeSend: function(t) {
                    t.setRequestHeader("X-CSRF-TOKEN", e('meta[name="csrf-token"]').attr("content"))
                },
                type: "POST",
                url: window.ajaxUrls.subscribeUrlMain,
                dataType: "json",
                data: e("#" + i).find("form").serialize(),
                success: function(t) {
                    window.onloadRecaptchaMainSubscribe(), void 0 === o && showAlertModal("Success", "Please check your email to confirm your subscription.", "m-success middle-width-modal"), n && (resetMainFormErrorsById("subscribeHome", !0), e(".js-subscribe-form-content").hide(), e(".js-success-subscribe").show()), void 0 === o && e(".js-success-subscribe").show(), window.appEvents.subscribed(), void 0 !== r && r()
                },
                error: function(t) {
                    if (n) {
                        window.onloadRecaptchaMainSubscribe();
                        let n = e.parseJSON(t.responseText);
                        422 === t.status ? (resetMainFormErrorsById("subscribeHome"), setErrorsWithTextForMainForm(n.errors, "subscribeHome")) : void 0 !== n.message && "" != n.message && alert(n.message)
                    } else showAlertModal("Error subscribe", "Check correct email address and try again.", "m-error middle-width-modal")
                }
            })
        }, e(window).on("load", function() {
            let t = e(document).find(".router-link-active");
            1 == t.length && t.trigger("click")
        }), e(".dropdown-menu div div").on("click", function() {
            e("#landingsConvert").text(e(this).text()), e("#landingsConvert").val(e(this).text())
        }), e("body").on("click", ".js-subscribe-modal-btn", function() {
            window.currentSubscribeModalId = "modal-subscribe", e("#modal-subscribe").modal("show"), window.unDefer("onloadRecaptchaMainSubscribe")
        }), e("body").on("submit", ".get-update_form", function(t) {
            t.preventDefault(), t.stopPropagation();
            let n = e(this).find("[name=email]").val();
            window.subscribeConvertKit(n, !0, !0, "modal-subscribe")
        }), window.mobileAndTabletCheck = function() {
            let e = !1;
            var t;
            return t = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0), e
        }
}(jQuery),
function(e) {
    "use strict";

    function t() {
        return "undefined" != typeof dataLayer
    }
    window.appEvents = {
        login: function() {
            if (!t()) return !1;
            dataLayer.push({
                event: "login"
            })
        },
        logout: function() {
            if (!t()) return !1;
            dataLayer.push({
                event: "logout"
            })
        },
        openSignUp: function() {
            if (!t()) return !1;
            dataLayer.push({
                event: "supporter_01_beginAccountCreation"
            })
        },
        registered: function() {
            if (!t()) return !1;
            dataLayer.push({
                event: "supporter_02_AccountCreated"
            })
        },
        paied: function() {
            if (!t()) return !1;
            dataLayer.push({
                event: "supporter_03_completeAccountCreation"
            })
        },
        subscribed: function() {
            if (!t()) return !1;
            dataLayer.push({
                event: "00_emailSubscribe"
            })
        },
        recentToolClick: function() {
            if (!t()) return !1;
            dataLayer.push({
                event: "RecentToolClick"
            })
        }
    }
}(jQuery),
function(e) {
    let t = !1;

    function n(n) {
        let o = e("#modal-files");
        if (!t) {
            t = !0;
            var i = {};
            n && (i = {
                with_select: n
            }), e(".files_name").tooltip("dispose"), e.ajax({
                type: "GET",
                url: window.ajaxUrls.myFilesModal,
                dataType: "json",
                data: i,
                success: function(n) {
                    t = !1, o.find(".modal-body").html(n.result), e(".files_name").tooltip(), n.myFileExists ? o.find(".js-my-files-delete-all").show() : o.find(".js-my-files-delete-all").hide(), o.modal("show")
                },
                error: function(e) {
                    t = !1, console.log(e)
                }
            })
        }
    }

    function o() {
        e.ajax({
            type: "GET",
            url: window.ajaxUrls.myFilesExistsCheck,
            dataType: "json",
            success: function(t) {
                t.hasOwnProperty("myFileExists") && (e("body").trigger("vue.my-files-need-change-exists", {
                    myFilesExists: t.myFileExists
                }), i(t.myFileExists))
            },
            error: function(t) {
                e("body").trigger("vue.my-files-need-change-exists", {
                    myFilesExists: !1
                }), i(!1)
            }
        })
    }

    function i(t) {
        t ? (e(".header-search_results--desktop").length > 0 && e(".js-button-switch-mode").hide(), e(".js-show-my-files").show()) : (e(".js-show-my-files").hide(), e(".header-search_results--desktop").length > 0 && e(".js-button-switch-mode").show())
    }
    e("body").on("click", ".js-show-my-files", function(e) {
        e.preventDefault(), n(!1)
    }), e("body").on("click", ".js-my-file-delete", function(n) {
        let o = e("#modal-files"),
            r = e(this);
        if (confirm(translate("my-files-modal-page.Delete Confirm text"))) {
            if (n.preventDefault(), t) return;
            t = !0, e.ajax({
                beforeSend: function(t) {
                    t.setRequestHeader("X-CSRF-TOKEN", e("meta[name=csrf-token]").attr("content"))
                },
                type: "POST",
                url: window.ajaxUrls.myFilesDelete + r.data("file-id"),
                dataType: "json",
                success: function(n) {
                    t = !1, n.hasOwnProperty("myFileExists") && (e("body").trigger("vue.my-files-need-change-exists", {
                        myFilesExists: n.myFileExists
                    }), i(n.myFileExists), n.myFileExists || o.modal("hide")), n.status ? r.closest(".files_item").remove() : showDefaultErrorAlertModal()
                },
                error: function(n) {
                    t = !1;
                    let o = e.parseJSON(n.responseText);
                    void 0 !== o.message && "" !== o.message && (console.error(o.message), showErrorAlertModal("Error remove file", o.message)), o.hasOwnProperty("myFileExists") && (e("body").trigger("vue.my-files-need-change-exists", {
                        myFilesExists: o.myFileExists
                    }), i(o.myFileExists))
                }
            })
        }
    }), e("body").on("click", ".js-my-files-delete-all", function(n) {
        let o = e("#modal-files");
        if (confirm(translate("my-files-modal-page.Delete Confirm text"))) {
            if (n.preventDefault(), t) return;
            t = !0, e.ajax({
                beforeSend: function(t) {
                    t.setRequestHeader("X-CSRF-TOKEN", e("meta[name=csrf-token]").attr("content"))
                },
                type: "POST",
                url: window.ajaxUrls.myFilesDeleteAll,
                dataType: "json",
                success: function(n) {
                    t = !1, n.hasOwnProperty("myFileExists") && (e("body").trigger("vue.my-files-need-change-exists", {
                        myFilesExists: n.myFileExists
                    }), i(n.myFileExists)), n.status ? o.modal("hide") : showDefaultErrorAlertModal()
                },
                error: function(n) {
                    t = !1;
                    let o = e.parseJSON(n.responseText);
                    void 0 !== o.message && "" !== o.message && (console.error(o.message), showErrorAlertModal("Error remove files", o.message)), o.hasOwnProperty("myFileExists") && (e("body").trigger("vue.my-files-need-change-exists", {
                        myFilesExists: o.myFileExists
                    }), i(o.myFileExists))
                }
            })
        }
    }), e("body").on("click", ".files_tools .button-tool_menu", function() {
        e(this).next(".files_tools-group").hasClass("is-active") ? e(this).closest(".files").find(".files_tools-group").removeClass("is-active") : (e(this).closest(".files").find(".files_tools-group").removeClass("is-active"), e(this).next(".files_tools-group").toggleClass("is-active"))
    }), setInterval(function() {
        o()
    }, 6e4), e("body").on("vue.show-my-files", function() {
        n(!0)
    }), e("body").on("click", ".js-my-file-select", function(t) {
        t.preventDefault(), t.stopPropagation();
        let n = e(this),
            o = n.closest(".modal");
        e("body").trigger("vue.my-file-selected", {
            file_id: n.data("file-id"),
            file_name: n.data("file-name"),
            file_size: n.data("file-size")
        }), o.modal("hide")
    }), e("body").on("vue.my-files-change-exists", function(e, t) {
        i(t.myFilesExists)
    }), e("body").on("vue.my-files-need-check", function() {
        o()
    })
}(jQuery),
function(e) {
    let t = !1;
    window.stripeData = {
        stripe: null,
        cardElement: null,
        stripeData: null,
        piEnable: !1
    };
    let n = null;

    function o() {
        return new Promise(function(e, t) {
            if (void 0 === window.Stripe) {
                let n = 40,
                    o = setInterval(function() {
                        null == window.stripeData.stripe && window.Stripe ? (window.stripeData.stripe = window.stripe.api_key ? Stripe(window.stripe.api_key) : null, clearInterval(o), e()) : window.stripeData.stripe && (clearInterval(o), e()), (n -= 3) <= 0 && (clearInterval(o), t())
                    }, 3e3)
            } else null == window.stripeData.stripe ? (window.stripeData.stripe = window.stripe.api_key ? Stripe(window.stripe.api_key) : null, e()) : window.stripeData.stripe && e()
        })
    }

    function i(t) {
        let n = e("#modal-sign-in"),
            o = e("#modal-sign-up"),
            i = e("#modal-forgot");
        "login" == t ? (n.modal("show"), o.modal("hide"), i.modal("hide")) : "register" == t ? (window.unDefer("onloadRecaptchaAuth"), n.modal("hide"), i.modal("hide"), o.modal("show")) : "forgot" == t && (n.modal("hide"), o.modal("hide"), i.modal("show"))
    }

    function r(n) {
        let o, i, r, a = null;
        if (!t) {
            t = !0, "login" == n ? (o = e("#signInForm"), i = e("#modal-sign-in"), r = "signInForm", a = window.ajaxUrls.signInModal) : "register" == n ? (o = e("#signUpForm"), i = e("#modal-sign-up"), r = "signUpForm", a = window.ajaxUrls.signUpModal) : "registerFull" == n ? (o = e("#fullRegisterForm"), i = e("#modal-sign-up"), r = "fullRegisterForm", a = window.ajaxUrls.signUpModal) : "forgot" == n ? (o = e("#signForgotForm"), i = e("#modal-forgot"), r = "signForgotForm", a = window.ajaxUrls.frgtPaswModal) : "logout" == n && (o = !1, i = !1, r = !1, a = window.ajaxUrls.logoutModal);
            var s = o ? o.serialize() : {};
            e.ajax({
                beforeSend: function(t) {
                    t.setRequestHeader("X-CSRF-TOKEN", e('meta[name="csrf-token"]').attr("content"))
                },
                type: "POST",
                url: a,
                dataType: "json",
                data: s,
                success: function(r) {
                    if (t = !1, i && i.modal("hide"), r && void 0 !== r.message) showAlertModal("Message", r.message);
                    else if (-1 !== ["register", "registerFull"].indexOf(n)) {
                        o.find("[name=email]").val();
                        window.appEvents.registered(), e("#addCardForm").find("input[name=new_subscription_settings_id]").removeAttr("disabled"), e("#modal-add-card").find(".js-show-elements-main").hide(), e("#modal-add-card").find(".js-show-elements-auth").show(), window.openAddCardModal(!0)
                    } else "login" == n ? window.appEvents.login() : "logout" == n && window.appEvents.logout(), location.reload()
                },
                error: function(o) {
                    t = !1, -1 !== ["register", "registerFull"].indexOf(n) && window.onloadRecaptchaAuth();
                    let i = e.parseJSON(o.responseText);
                    422 === o.status ? (resetMainFormErrorsById(r), setErrorsWithTextForMainForm(i.errors, r)) : void 0 !== i.message && "" != i.message && alert(i.message)
                }
            })
        }
    }
    e("body").on("click", ".js-show-passwd", function(t) {
        t.preventDefault();
        let n = e(this).parent(".input-group").find("input[name=password]");
        "password" == n.attr("type") ? n.attr("type", "text") : n.attr("type", "password"), e(this).find("svg").each(function(t, n) {
            e(n).toggleClass("hide-element")
        })
    }), e("body").on("click", ".js-show-sign-in", function(e) {
        e.preventDefault(), i("login")
    }), e("body").on("click", ".js-show-sign-up", function(e) {
        e.preventDefault(), window.appEvents.openSignUp(), i("register")
    }), e("body").on("click", ".js-show-forgot", function(e) {
        e.preventDefault(), i("forgot")
    }), e("body").on("click", ".js-show-add-card", function(e) {
        e.preventDefault(), window.openAddCardModal()
    }), e("body").on("submit", "#fullRegisterForm", function(e) {
        return e.preventDefault(), window.unDefer("onloadRecaptchaFullAuth"), !1
    }), window.onloadRecaptchaAuth = function() {
        let t = e("#modal-sign-up");
        void 0 !== window.recaptchaKey && window.showRecaptcha(e => {
            t.find("input[name='recaptcha_response']").val(window.Laravel.cT + ":" + e)
        }, "captchaRegister")
    }, window.onloadRecaptchaFullAuth = function() {
        (void 0 !== window.recaptchaKey || window.Laravel.loadProd && void 0 !== window.Vue.modalRecaptcha) && window.showRecaptcha(t => {
            e("#fullRegisterForm").find("input[name='recaptcha_response']").val(window.Laravel.cT + ":" + t), e("#recaptchaForm").modal("hide"), r("registerFull")
        })
    }, window.openAddCardModal = async function(n, i) {
        if (e(".modal").modal("hide"), e(".modal-backdrop").remove(), n && !i && 0 == e(".js-switcher-subscribe-plan").length) {
            return e("#modal-thanks-signing").modal("show"), !1
        }
        await o();
        let r = e("#modal-add-card");
        if (clearBlockFormById("modal-add-card"), e("body").addClass("is-show-add-card-modal"), e("#modal-add-card").find(".js-show-elements-billing-page").show(), r.modal("show"), t) return;
        t = !0;
        let a = e("#addCardForm"),
            s = window.ajaxUrls.addCardModal,
            l = a.serialize();
        e.ajax({
            beforeSend: function(t) {
                t.setRequestHeader("X-CSRF-TOKEN", e('meta[name="csrf-token"]').attr("content"))
            },
            type: "POST",
            url: s,
            dataType: "json",
            data: l,
            success: function(e) {
                t = !1, window.stripeData.stripeData = e.data
            },
            error: function(n) {
                t = !1;
                let o = e.parseJSON(n.responseText);
                422 === n.status ? (resetMainFormErrorsById("addCardForm"), setErrorsWithTextForMainForm(o.errors, "addCardForm")) : void 0 !== o.message && "" != o.message && alert(o.message)
            }
        });
        const u = window.stripeData.stripe.elements();
        window.stripeData.cardElement = u.create("card"), window.stripeData.cardElement.mount("#stripe-add-card"), window.stripeData.afterRegister = n
    }, window.addEventListener("message", function(t) {
        "3DS-authentication-complete" === t.data && async function(t) {
            await o(), e("#modal-subscribe-3ds").modal("hide").find(".modal-body").html(""), window.stripeData.stripe.retrieveSetupIntent(t).then(function(t) {
                "succeeded" === t.setupIntent.status ? u(t.setupIntent.payment_method, t.setupIntent.id) : (showAlertModal("Error message", t.setupIntent.last_setup_error.message), e("#preloader").hide())
            })
        }(window.stripeData.stripeData.client_secret)
    }, !1);
    var a = function(t, n, o, i) {
        e("#preloader").show(), window.stripeData.stripe.confirmCardSetup(o, {
            payment_method: {
                card: n
            },
            return_url: window.ajaxUrls.aft3dsStp
        }, {
            handleActions: !1
        }).then(function(t) {
            if (!t.error) {
                let n = t.setupIntent.next_action;
                if (n && "redirect_to_url" === n.type) {
                    let n = document.createElement("iframe");
                    n.src = t.setupIntent.next_action.redirect_to_url.url;
                    let o = function() {
                        let e = window.innerWidth;
                        window.innerHeight;
                        if (e >= 600) return {
                            width: 600,
                            height: 400
                        };
                        if (e >= 500 && e < 600) return {
                            width: 500,
                            height: 400
                        };
                        if (e >= 390 && e < 500) return {
                            width: 390,
                            height: 400
                        };
                        if (e < 390) return {
                            width: 250,
                            height: 400
                        }
                    }();
                    n.width = o.width, n.height = o.height, n.style.border = 0, e("#modal-subscribe-3ds").modal("show").find(".modal-body").append(n)
                } else u(t.setupIntent.payment_method, t.setupIntent.id);
                return !1
            }
            showAlertModal("Error message", t.error.message), e("#preloader").hide()
        })
    };

    function s() {
        e.ajax({
            beforeSend: function(t) {
                t.setRequestHeader("X-CSRF-TOKEN", e('meta[name="csrf-token"]').attr("content"))
            },
            type: "GET",
            url: window.ajaxUrls.chkPrcsPaid + window.stripeData.stripeData.latest_invoice,
            dataType: "json",
            success: function(e) {
                2 == e.data.status ? (clearInterval(n), c()) : 6 == e.data.status && (clearInterval(n), l(e.data.message))
            },
            error: function(t) {
                l(e.parseJSON(t.responseText).message)
            }
        })
    }

    function l(t) {
        e("#preloader").hide(), void 0 !== t && "" != t ? showAlertModal("Error message", t) : showAlertModal("Internal Error. Contact the administrator, please.")
    }

    function u(n, o, i) {
        if (t) return;
        t = !0;
        let r = {
            payment_method: n,
            is_payment_intent: i
        };
        i ? r.payment_intent_id = o : r.setup_intent_id = o, e.ajax({
            beforeSend: function(t) {
                t.setRequestHeader("X-CSRF-TOKEN", e('meta[name="csrf-token"]').attr("content"))
            },
            type: "POST",
            url: window.ajaxUrls.addCardPm,
            dataType: "json",
            data: r,
            success: function(e) {
                t = !1, e.requires_action ? (window.open(e.requires_action, "_blank").focus(), window.stripeData.stripeData.latest_invoice = e.latest_invoice, startCheckingPaidInvoiceProcessing()) : c()
            },
            error: function(n) {
                t = !1, e("#preloader").hide();
                let o = e.parseJSON(n.responseText);
                void 0 !== o.message && "" != o.message ? showAlertModal("Error message", o.message) : showAlertModal("Internal Error. Contact the administrator, please.")
            }
        })
    }

    function c() {
        void 0 !== window.stripeData.afterRegister && window.stripeData.afterRegister ? (Cookies.set("afterRegister", !0, {
            expires: 10
        }), window.appEvents.paied(), window.location.href = "/") : location.reload()
    }
    window.startCheckingPaidInvoiceProcessing = function() {
        clearInterval(n), n = setInterval(() => {
            s()
        }, 3e3), s()
    }, e("body").on("click", ".js-subscribe-btns button", function(t) {
        var n, o;
        t.preventDefault(), n = e(this).data("period-subscription-id"), o = e(this).data("type-subscription"), e("input[name=new_subscription_settings_id]").val(n), e("#addCardForm").find("input[name=new_subscription_settings_id]").removeAttr("disabled"), o == window.subscriptionTypes.y ? (e("#modal-add-card").find(".js-main-description").hide(), e("#modal-add-card").find(".js-yearly-description").show()) : (e("#modal-add-card").find(".js-main-description").show(), e("#modal-add-card").find(".js-yearly-description").hide()), window.openAddCardModal(!0, !0)
    }), e("body").on("click", ".js-add-card", async function(t) {
        t.preventDefault();
        e("#modal-add-card");
        await o(), a(window.stripeData.stripe, window.stripeData.cardElement, window.stripeData.stripeData.client_secret)
    }), e("body").on("click", ".js-sign-in", function(e) {
        e.preventDefault(), r("login")
    }), e("body").on("click", ".js-sign-up", function(e) {
        e.preventDefault(), r("register")
    }), e("body").on("click", ".js-forgot", function(e) {
        e.preventDefault(), r("forgot")
    }), e("body").on("click", ".js-logout", function(e) {
        e.preventDefault(), r("logout")
    }), e(document).on("click", "#modal-thanks-signing .close", function() {
        location.reload()
    })
}(jQuery),
function(e) {
    let t = !1;
    e("input[name=expiration]").on("keyup", function() {
        ! function() {
            String.fromCharCode(event.keyCode);
            var e = event.keyCode; - 1 === [8].indexOf(e) && (event.target.value = event.target.value.replace(/^([1-9]\/|[2-9])$/g, "0$1/").replace(/^(0[1-9]|1[0-2])$/g, "$1/").replace(/^([0-1])([3-9])$/g, "0$1/$2").replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, "$1/$2").replace(/^([0]+)\/|[0]+$/g, "0").replace(/[^\d\/]|^[\/]*$/g, "").replace(/\/\//g, "/"))
        }()
    }), e("input[name=expiration]").on("focusout", function() {
        var t, n, o;
        t = e(this), n = e(this).val(), o = /(1[0-2]|0[1-9]|\d)\/(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)/.exec(n), t.siblings('input[name$="exp_month"]').val(o[1]), t.siblings('input[name$="exp_year"]').val(o[2])
    }), e("body").on("click", ".js-show-update-card", function(n) {
        n.preventDefault(),
            function(n) {
                let o = e("#modal-update-card");
                if (clearBlockFormById("modal-update-card"), t) return;
                t = !0;
                var i = {
                    credit_card_id: n
                };
                e.ajax({
                    beforeSend: function(t) {
                        t.setRequestHeader("X-CSRF-TOKEN", e('meta[name="csrf-token"]').attr("content"))
                    },
                    type: "GET",
                    url: window.ajaxUrls.getCardPm,
                    dataType: "json",
                    data: i,
                    success: function(n) {
                        t = !1;
                        let i = n.data;
                        e.each(i, function(t, n) {
                            e("input[name='" + t + "'],textarea[name='" + t + "']").val(n)
                        }), e(".modal").modal("hide"), e(".modal-backdrop").remove(), o.modal("show")
                    },
                    error: function(n) {
                        t = !1;
                        let o = e.parseJSON(n.responseText);
                        void 0 !== o.message && "" != o.message && showAlertModal("Error message", o.message)
                    }
                })
            }(e(this).data("card-id"))
    }), e("body").on("click", ".js-show-remove-card", function(t) {
        t.preventDefault(),
            function(t, n) {
                let o = e("#modal-remove-card");
                o.find(".js-remove-card").data("card-id", t), o.find("#jsExpireDateCard").text(n), e(".modal").modal("hide"), e(".modal-backdrop").remove(), o.modal("show")
            }(e(this).data("card-id"), e(this).data("expire-date"))
    }), e("body").on("click", ".js-show-cancel-subscription", function(t) {
        t.preventDefault(),
            function(t) {
                let n = e("#modal-cancel-subscription");
                n.find(".js-cancel-subscription").data("subscription-id", t), e(".modal").modal("hide"), e(".modal-backdrop").remove(), n.modal("show")
            }(e(this).data("subscription-id"))
    }), e("body").on("click", ".js-update-card", function(n) {
        n.preventDefault(),
            function() {
                let n = e("#updateCardForm"),
                    o = (e("#modal-update-card"), window.ajaxUrls.addCardModal),
                    i = n.serialize();
                t || (t = !0, e("#preloader").show(), e.ajax({
                    beforeSend: function(t) {
                        t.setRequestHeader("X-CSRF-TOKEN", e('meta[name="csrf-token"]').attr("content"))
                    },
                    type: "POST",
                    url: o,
                    dataType: "json",
                    data: i,
                    success: function(e) {
                        t = !1, location.reload()
                    },
                    error: function(n) {
                        t = !1, e("#preloader").hide();
                        let o = e.parseJSON(n.responseText);
                        422 === n.status ? (resetMainFormErrorsById("updateCardForm"), setErrorsWithTextForMainForm(o.errors, "updateCardForm")) : void 0 !== o.message && "" != o.message && alert(o.message)
                    }
                }))
            }()
    }), e("body").on("click", ".js-remove-card", function(n) {
        var o;
        n.preventDefault(), o = e(this).data("card-id"), e("#modal-remove-card"), t || (t = !0, e("#preloader").show(), e.ajax({
            beforeSend: function(t) {
                t.setRequestHeader("X-CSRF-TOKEN", e('meta[name="csrf-token"]').attr("content"))
            },
            type: "GET",
            url: window.ajaxUrls.rmvCard + o,
            dataType: "json",
            success: function(e) {
                t = !1, location.reload()
            },
            error: function(n) {
                t = !1, e("#preloader").hide();
                let o = e.parseJSON(n.responseText);
                void 0 !== o.message && "" != o.message && showAlertModal("Error", o.message)
            }
        }))
    }), e("body").on("click", ".js-subscribe", function(n) {
        n.preventDefault(),
            function() {
                if (0 == e(".cards-list_item").length) return e("#addCardForm").find("input[name=new_subscription_settings_id]").removeAttr("disabled"), void window.openAddCardModal();
                t || (t = !0, e("#preloader").show(), e.ajax({
                    beforeSend: function(t) {
                        t.setRequestHeader("X-CSRF-TOKEN", e('meta[name="csrf-token"]').attr("content"))
                    },
                    type: "POST",
                    url: window.ajaxUrls.subscribe,
                    dataType: "json",
                    data: {
                        new_subscription_settings_id: e("#addCardForm").find("input[name=new_subscription_settings_id]").val()
                    },
                    success: function(e) {
                        t = !1, e.requires_action ? (window.open(e.requires_action, "_blank").focus(), null == window.stripeData.stripeData ? window.stripeData.stripeData = {
                            latest_invoice: e.latest_invoice
                        } : window.stripeData.stripeData.latest_invoice = e.latest_invoice, startCheckingPaidInvoiceProcessing()) : location.reload()
                    },
                    error: function(n) {
                        t = !1, e("#preloader").hide();
                        let o = e.parseJSON(n.responseText);
                        void 0 !== o.message && "" != o.message && showAlertModal("Error", o.message)
                    }
                }))
            }()
    }), e("body").on("click", ".js-cancel-subscription", function(n) {
        var o;
        n.preventDefault(), o = e(this).data("subscription-id"), t || (t = !0, e("#preloader").show(), e.ajax({
            beforeSend: function(t) {
                t.setRequestHeader("X-CSRF-TOKEN", e('meta[name="csrf-token"]').attr("content"))
            },
            type: "POST",
            url: window.ajaxUrls.cancelSbscr + o,
            dataType: "json",
            success: function(e) {
                t = !1, location.reload()
            },
            error: function(n) {
                t = !1, e("#preloader").hide();
                let o = e.parseJSON(n.responseText);
                void 0 !== o.message && "" != o.message && showAlertModal("Error", o.message)
            }
        }))
    }), e("body").on("click", ".js-active-subscription", function(n) {
        n.preventDefault(),
            function(n) {
                if (0 == e(".cards-list_item").length) return e("#addCardForm").find("input[name=new_subscription_settings_id]").removeAttr("disabled"), void window.openAddCardModal();
                t || (t = !0, e("#preloader").show(), e.ajax({
                    beforeSend: function(t) {
                        t.setRequestHeader("X-CSRF-TOKEN", e('meta[name="csrf-token"]').attr("content"))
                    },
                    type: "POST",
                    url: window.ajaxUrls.actvSbscr + n,
                    dataType: "json",
                    success: function(e) {
                        t = !1, location.reload()
                    },
                    error: function(n) {
                        t = !1, e("#preloader").hide();
                        let o = e.parseJSON(n.responseText);
                        void 0 !== o.message && "" != o.message && showAlertModal("Error", o.message)
                    }
                }))
            }(e(this).data("subscription-id"))
    }), e("body").on("click", ".js-remove-account-modal", function(t) {
        t.preventDefault(), e("#modal-remove-account").modal("show")
    }), e("body").on("click", ".js-remove-account", function(n) {
        n.preventDefault(), e("#modal-remove-account").modal("hide"), t || (t = !0, e("#preloader").show(), e.ajax({
            beforeSend: function(t) {
                t.setRequestHeader("X-CSRF-TOKEN", e('meta[name="csrf-token"]').attr("content"))
            },
            type: "POST",
            url: window.ajaxUrls.removeAccount,
            dataType: "json",
            success: function(e) {
                t = !1, window.location.href = baseUrl
            },
            error: function(n) {
                t = !1, e("#preloader").hide();
                let o = e.parseJSON(n.responseText);
                void 0 !== o.message && "" != o.message && showAlertModal("Error", o.message)
            }
        }))
    }), e(document).on("hide.bs.modal", "#modal-add-card", function() {
        "/user/profile" != location.pathname && "/user/billing" != location.pathname ? location.reload() : e("body").removeClass("is-show-add-card-modal")
    })
}(jQuery), window.uploadFile = function(e, t) {
    if (void 0 === $("#file").prop("files")) return;
    let n = $("#file").prop("files")[0],
        o = new FormData;
    o.append("file", n), o.append("type", e), o.append("mode", t), $.ajax({
        beforeSend: function(e) {
            e.setRequestHeader("X-CSRF-TOKEN", $('meta[name="csrf-token"]').attr("content"))
        },
        type: "POST",
        url: window.ajaxUrls.uploadFile,
        contentType: !1,
        processData: !1,
        data: o,
        success: function(n) {
            let o = new Date(Date.now() + 9e5);
            o = o.toUTCString(), document.cookie = "file-upload[" + e + "_" + t + "]=" + n.file_id + "---" + n.url + "; expires=" + o + ";path=/", window.location.href = $("#file").data("href")
        },
        error: function(e) {
            window.location.href = $("#file").data("href")
        }
    })
};