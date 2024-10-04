(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[736], {
  5897: function (e, t, a) { Promise.resolve().then(a.bind(a, 1535)) }, 1535: function (e, t, a) { "use strict"; a.r(t), a.d(t, { default: function () { return u } }); var i = a(7437), r = a(8800), s = a(2265), n = a(5209), l = a(767), o = a(5925), c = () => { let [e, t] = (0, s.useState)({ username: "", email: "", organization: "", service: "", message: "" }), a = a => { let { name: i, value: r } = a.target; t({ ...e, [i]: r }) }, r = async a => { a.preventDefault(); try { let a = await fetch("/api/send", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(e) }); a.ok ? (t({ username: "", email: "", organization: "", service: "", message: "" }), o.toast.success("Message sent successfully!")) : o.toast.error("Oops! Something went wrong.") } catch (e) { o.toast.error("Error:", e) } }; return (0, i.jsxs)("main", { className: "flex flex-col-reverse items-start justify-start w-screen mx-auto sm:flex-row text-primarytext max-w-10xl", children: [(0, i.jsxs)("form", { className: "w-full px-8", method: "post", action: "", encType: "multipart/form-data", noValidate: "", onSubmit: r, children: [(0, i.jsx)(l.E.div, { variants: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0, transition: { delay: .4, type: "spring", damping: 15, stiffness: 150 } } }, initial: "initial", whileInView: "animate", viewport: { once: !0 }, className: "w-full border-t-2 border-placeholder", children: (0, i.jsxs)("div", { className: "flex w-full gap-4 pt-8 pb-8", children: [(0, i.jsx)("h1", { className: "text-placeholder", children: "01" }), (0, i.jsxs)("div", { className: "w-full", children: [(0, i.jsx)("label", { htmlFor: "username", className: "flex flex-grow text-xl font-medium text-primarytext max-w-13xl", children: "What’s your name?" }), (0, i.jsx)("input", { required: !0, name: "username", type: "text", className: "peer w-full flex flex-grow appearance-none border-0 bg-transparent px-0 py-2.5 text-lg text-accentb focus:outline-none placeholder-placeholder", placeholder: "Dennis Hendry*", value: e.username, onChange: a })] })] }) }), (0, i.jsx)(l.E.div, { variants: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0, transition: { delay: .5, type: "spring", damping: 15, stiffness: 150 } } }, initial: "initial", whileInView: "animate", viewport: { once: !0 }, className: "w-full border-t-2 border-placeholder", children: (0, i.jsxs)("div", { className: "flex w-full gap-4 pt-8 pb-8", children: [(0, i.jsx)("h1", { className: "text-placeholder", children: "02" }), (0, i.jsxs)("div", { className: "w-full", children: [(0, i.jsx)("label", { htmlFor: "email", className: "flex flex-grow text-xl font-medium text-primarytext max-w-13xl", children: "What’s your email?" }), (0, i.jsx)("input", { name: "email", type: "email", required: !0, className: "peer w-full flex flex-grow appearance-none border-0 bg-transparent px-0 py-2.5 text-lg text-accentb focus:outline-none placeholder-placeholder", placeholder: "dennis.hendry@gmail.com*", value: e.email, onChange: a })] })] }) }), (0, i.jsx)(l.E.div, { variants: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0, transition: { delay: .6, type: "spring", damping: 15, stiffness: 150 } } }, initial: "initial", whileInView: "animate", viewport: { once: !0 }, className: "w-full border-t-2 border-placeholder", children: (0, i.jsxs)("div", { className: "flex w-full gap-4 pt-8 pb-8", children: [(0, i.jsx)("h1", { className: "text-placeholder", children: "03" }), (0, i.jsxs)("div", { className: "w-full", children: [(0, i.jsx)("label", { htmlFor: "organization", className: "flex flex-grow text-xl font-medium text-primarytext max-w-13xl", children: "What’s the name of your organization?" }), (0, i.jsx)("input", { name: "organization", type: "text", className: "peer w-full flex flex-grow appearance-none border-0 bg-transparent px-0 py-2.5 text-lg text-accentb focus:outline-none placeholder-placeholder", placeholder: "Dennis & Hendry", value: e.organization, onChange: a })] })] }) }), (0, i.jsx)(l.E.div, { variants: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0, transition: { delay: .7, type: "spring", damping: 15, stiffness: 150 } } }, initial: "initial", whileInView: "animate", viewport: { once: !0 }, className: "w-full border-t-2 border-placeholder", children: (0, i.jsxs)("div", { className: "flex w-full gap-4 pt-8 pb-8", children: [(0, i.jsx)("h1", { className: "text-placeholder", children: "04" }), (0, i.jsxs)("div", { className: "w-full", children: [(0, i.jsx)("label", { htmlFor: "service", className: "flex flex-grow text-xl font-medium text-primarytext max-w-13xl", children: "What specific area or task do you need help with?" }), (0, i.jsx)("input", { name: "service", type: "text", className: "peer w-full flex flex-grow appearance-none border-0 bg-transparent px-0 py-2.5 text-lg text-accentb focus:outline-none placeholder-placeholder", placeholder: "To improve the performance of a Next.js application", value: e.service, onChange: a })] })] }) }), (0, i.jsx)(l.E.div, { variants: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0, transition: { delay: .8, type: "spring", damping: 15, stiffness: 150 } } }, initial: "initial", whileInView: "animate", viewport: { once: !0 }, className: "w-full border-t-2 border-placeholder", children: (0, i.jsxs)("div", { className: "flex w-full gap-4 pt-8 pb-8", children: [(0, i.jsx)("h1", { className: "text-placeholder", children: "05" }), (0, i.jsxs)("div", { className: "w-full", children: [(0, i.jsx)("label", { htmlFor: "message", className: "flex flex-grow text-xl font-medium text-primarytext max-w-13xl", children: "Your message" }), (0, i.jsx)("input", { name: "message", type: "text", required: !0, className: "peer w-full flex flex-grow appearance-none border-0 bg-transparent px-0 py-2.5 text-lg text-accentb focus:outline-none placeholder-placeholder", placeholder: "Hello Sami, can you help me with..*", value: e.message, onChange: a })] })] }) }), (0, i.jsx)(l.E.div, { variants: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0, transition: { delay: .9, type: "spring", damping: 15, stiffness: 150 } } }, initial: "initial", whileInView: "animate", viewport: { once: !0 }, className: "flex items-center justify-end", children: (0, i.jsx)(n.Z, { children: (0, i.jsx)("button", { type: "submit", className: "flex items-center justify-center p-4 px-10 text-xl font-normal border rounded-full sm:py-6 sm:px-14 text-primarytext md:text-2xl border-accentb", children: (0, i.jsx)("div", { className: "flex items-center justify-center", children: (0, i.jsx)("h1", { className: "z-10", children: "Sent It" }) }) }) }) })] }), (0, i.jsx)("div", { className: "flex flex-grow" }), (0, i.jsxs)(l.E.div, { variants: { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0, transition: { delay: .3, type: "spring", damping: 15, stiffness: 150 } } }, initial: "initial", whileInView: "animate", viewport: { once: !0 }, className: "hidden w-full px-5 lg:gap-10 lg:justify-between lg:flex lg:flex-col lg:w-auto", children: [(0, i.jsxs)("div", { children: [(0, i.jsx)("h1", { className: "text-sm text-placeholder", children: "CONTACT DETAILS" }), (0, i.jsx)("h1", { className: "pt-2 text-primarytext", children: "sami.elmadani@outlook.com" })] }), (0, i.jsx)("div", { className: "flex flex-grow mx-auto" }), (0, i.jsxs)("div", { className: "text-primarytext", children: [(0, i.jsx)("h1", { className: "text-sm text-placeholder", children: "SOCIALS" }), (0, i.jsxs)("div", { className: "flex flex-col gap-2 pt-2", children: [(0, i.jsx)("a", { href: "", className: "transition-all ease-in-out hover:scale-110 hover:text-accentb hover:translate-x-4", children: "Twitter" }), (0, i.jsx)("a", { href: "https://www.linkedin.com/in/samielmadani/", className: "transition-all ease-in-out hover:scale-110 hover:text-accentb hover:translate-x-4", children: "LinkedIn" }), (0, i.jsx)("a", { href: "", className: "transition-all ease-in-out hover:scale-110 hover:text-accentb hover:translate-x-4", children: "Behance" }), (0, i.jsx)("a", { href: "", className: "transition-all ease-in-out hover:scale-110 hover:text-accentb hover:translate-x-4", children: "Dribbble" })] })] })] })] }) }, d = a(3260), p = a(7539), u = () => { let e = { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0, transition: { delay: .3, type: "spring", damping: 15, stiffness: 150 } } }; return (0, i.jsxs)("main", { className: "", children: [(0, i.jsx)(r.Z, {}), (0, i.jsxs)("div", { className: "flex flex-col-reverse items-start justify-between px-5 pt-12 mx-auto sm:items-end sm:flex-row max-w-10xl sm:pt-20 md:pt-32", children: [(0, i.jsxs)(l.E.div, { variants: e, initial: "initial", whileInView: "animate", viewport: { once: !0 }, className: "pb-8 text-4xl text-primarytext sm:text-5xl md:text-7xl lg:text-8xl", children: [(0, i.jsx)("h1", { children: "Let's Connect!" }), (0, i.jsx)("h1", { className: "max-w-5xl mt-3 text-sm sm:text-lg md:text-xl lg:text-2xl", children: "Whether you're looking to collaborate on a project, need a solution to a challenging problem, or just want to talk tech, feel free to reach out. Together, we can turn ideas into reality." })] }), (0, i.jsx)("div", { className: "flex-grow" }), (0, i.jsx)(l.E.div, { variants: e, initial: "initial", whileInView: "animate", viewport: { once: !0 }, className: "flex mb-4 -ml-7 sm:ml-0 sm:mb-10", children: (0, i.jsxs)("svg", { width: "120", height: "120", viewBox: "0 0 120 120", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "h-16 sm:h-20 md:h-28", children: [(0, i.jsx)("circle", { cx: "60", cy: "60", r: "60", fill: "white" }), (0, i.jsxs)("g", { clipPath: "url(#clip0_493_872)", children: [(0, i.jsx)("path", { d: "M54.2502 14.2573L53.574 54.702L51.32 53.9197C52.024 52.9596 52.8085 52.064 53.6735 51.2329C54.5034 50.3475 55.4209 49.5979 56.4258 48.9843C60.1666 46.7002 64.1047 45.5075 68.2401 45.4062C72.3405 45.2506 76.1839 46.085 79.7703 47.9094C83.3568 49.7338 86.323 52.4672 88.6688 56.1096C91.1547 59.9694 92.3834 63.9909 92.3549 68.1741C92.3823 72.3232 91.3195 76.229 89.1666 79.8915C87.0695 83.52 84.0668 86.5274 80.1585 88.9138C76.2502 91.3002 72.1063 92.6564 67.7268 92.9825C63.4031 93.2745 59.3014 92.5221 55.4216 90.7253C51.5417 88.9285 48.3764 86.1274 45.9255 82.322C44.7001 80.4192 43.7888 78.4004 43.1917 76.2655C42.6155 74.0421 42.3501 71.8183 42.3955 69.5941L42.1904 21.621L54.2502 14.2573ZM60.7792 58.8236C58.7692 60.0509 57.2347 61.5937 56.1758 63.4522C55.0818 65.2563 54.5225 67.2262 54.4979 69.3621C54.5291 71.4638 55.2274 73.5747 56.5929 75.6949C57.8883 77.7064 59.5008 79.1834 61.4303 80.126C63.3598 81.0687 65.4143 81.4806 67.5936 81.3617C69.7938 81.1545 71.8988 80.4372 73.9088 79.2099C75.863 78.0167 77.387 76.5181 78.481 74.714C79.5399 72.8555 80.0538 70.8754 80.0226 68.7737C80.0473 66.6379 79.3944 64.5371 78.0639 62.4713C76.7334 60.4054 75.1034 58.9012 73.1739 57.9586C71.2444 57.016 69.2075 56.6312 67.0632 56.8044C64.8838 56.9233 62.7891 57.5963 60.7792 58.8236Z", fill: "#0E100F" }), (0, i.jsx)("path", { d: "M26.1387 29.2971L40.0771 21.0254V59.5385C44.229 54.3409 50.4568 51.1645 57.9697 51.1645C71.9081 51.1645 82.1889 62.0411 82.1889 76.5753C82.1889 91.2057 71.9081 102.178 57.9697 102.178C50.4568 102.178 44.229 99.0021 40.0771 93.8045V100.735H26.1387V29.2971ZM55.5972 61.7523C46.898 61.7523 40.7691 67.8163 40.7691 76.6715C40.7691 85.4305 46.898 91.4944 55.3995 91.4944C63.8021 91.4944 69.5356 85.3343 69.5356 76.6715C69.6345 68.0088 64.2963 61.8486 55.5972 61.7523Z", fill: "#A374FF" })] }), (0, i.jsx)("defs", { children: (0, i.jsx)("clipPath", { id: "clip0_493_872", children: (0, i.jsx)("rect", { width: "64.1584", height: "89.1089", fill: "white", transform: "translate(28.5148 14.2573)" }) }) })] }) })] }), (0, i.jsx)(c, {}), (0, i.jsx)(d.Z, {}), (0, i.jsx)(p.Z, {})] }) } }, 5209: function (e, t, a) { "use strict"; a.d(t, { Z: function () { return c } }); var i = a(7437), r = a(2265), s = a(1690), n = a.n(s), l = a(2815); function o(e) { let { children: t } = e, a = (0, r.useRef)(null); return (0, r.useEffect)(() => { let e = l.ZP.quickTo(a.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" }), t = l.ZP.quickTo(a.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" }); a.current.addEventListener("mousemove", i => { let { clientX: r, clientY: s } = i, { height: n, width: l, left: o, top: c } = a.current.getBoundingClientRect(); e(.35 * (r - (o + l / 2))), t(.35 * (s - (c + n / 2))) }), a.current.addEventListener("mouseleave", a => { e(0), t(0) }) }, []), r.cloneElement(t, { ref: a }) } function c(e) { let { children: t, backgroundColor: a = "#18A0FB", ...s } = e, c = (0, r.useRef)(null), d = (0, r.useRef)(null), p = null; (0, r.useEffect)(() => { d.current = l.ZP.timeline({ paused: !0 }), d.current.to(c.current, { top: "-25%", width: "150%", duration: .4, ease: "power3.in" }, "enter").to(c.current, { top: "-150%", width: "125%", duration: .25 }, "exit") }, []); let u = () => { p && clearTimeout(p), d.current.tweenFromTo("enter", "exit") }, m = () => { p = setTimeout(() => { d.current.play() }, 300) }; return (0, i.jsx)(o, { children: (0, i.jsxs)("div", { className: n().roundedButton, style: { overflow: "hidden" }, onMouseEnter: () => { u() }, onMouseLeave: () => { m() }, ...s, children: [t, (0, i.jsx)("div", { ref: c, style: { backgroundColor: a }, className: n().circle })] }) }) } }, 1690: function (e) { e.exports = { roundedButton: "style_roundedButton__BkVn7", circle: "style_circle__2ViAL" } }, 5925: function (e, t, a) {
    "use strict"; let i, r; a.r(t), a.d(t, { CheckmarkIcon: function () { return G }, ErrorIcon: function () { return R }, LoaderIcon: function () { return U }, ToastBar: function () { return el }, ToastIcon: function () { return et }, Toaster: function () { return ep }, default: function () { return eu }, resolveValue: function () { return C }, toast: function () { return D }, useToaster: function () { return Z }, useToasterStore: function () { return A } }); var s, n = a(2265); let l = { data: "" }, o = e => "object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || l, c = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, d = /\/\*[^]*?\*\/|  +/g, p = /\n+/g, u = (e, t) => { let a = "", i = "", r = ""; for (let s in e) { let n = e[s]; "@" == s[0] ? "i" == s[1] ? a = s + " " + n + ";" : i += "f" == s[1] ? u(n, s) : s + "{" + u(n, "k" == s[1] ? "" : t) + "}" : "object" == typeof n ? i += u(n, t ? t.replace(/([^,])+/g, e => s.replace(/(^:.*)|([^,])+/g, t => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : s) : null != n && (s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase(), r += u.p ? u.p(s, n) : s + ":" + n + ";") } return a + (t && r ? t + "{" + r + "}" : r) + i }, m = {}, x = e => { if ("object" == typeof e) { let t = ""; for (let a in e) t += a + x(e[a]); return t } return e }, f = (e, t, a, i, r) => { var s; let n = x(e), l = m[n] || (m[n] = (e => { let t = 0, a = 11; for (; t < e.length;)a = 101 * a + e.charCodeAt(t++) >>> 0; return "go" + a })(n)); if (!m[l]) { let t = n !== e ? e : (e => { let t, a, i = [{}]; for (; t = c.exec(e.replace(d, ""));)t[4] ? i.shift() : t[3] ? (a = t[3].replace(p, " ").trim(), i.unshift(i[0][a] = i[0][a] || {})) : i[0][t[1]] = t[2].replace(p, " ").trim(); return i[0] })(e); m[l] = u(r ? { ["@keyframes " + l]: t } : t, a ? "" : "." + l) } let o = a && m.g ? m.g : null; return a && (m.g = m[l]), s = m[l], o ? t.data = t.data.replace(o, s) : -1 === t.data.indexOf(s) && (t.data = i ? s + t.data : t.data + s), l }, h = (e, t, a) => e.reduce((e, i, r) => { let s = t[r]; if (s && s.call) { let e = s(a), t = e && e.props && e.props.className || /^go/.test(e) && e; s = t ? "." + t : e && "object" == typeof e ? e.props ? "" : u(e, "") : !1 === e ? "" : e } return e + i + (null == s ? "" : s) }, ""); function g(e) { let t = this || {}, a = e.call ? e(t.p) : e; return f(a.unshift ? a.raw ? h(a, [].slice.call(arguments, 1), t.p) : a.reduce((e, a) => Object.assign(e, a && a.call ? a(t.p) : a), {}) : a, o(t.target), t.g, t.o, t.k) } g.bind({ g: 1 }); let y, b, w, v = g.bind({ k: 1 }); function j(e, t) { let a = this || {}; return function () { let i = arguments; function r(s, n) { let l = Object.assign({}, s), o = l.className || r.className; a.p = Object.assign({ theme: b && b() }, l), a.o = / *go\d+/.test(o), l.className = g.apply(a, i) + (o ? " " + o : ""), t && (l.ref = n); let c = e; return e[0] && (c = l.as || e, delete l.as), w && c[0] && w(l), y(c, l) } return t ? t(r) : r } } var N = e => "function" == typeof e, C = (e, t) => N(e) ? e(t) : e, E = (i = 0, () => (++i).toString()), k = () => { if (void 0 === r && "u" > typeof window) { let e = matchMedia("(prefers-reduced-motion: reduce)"); r = !e || e.matches } return r }, I = new Map, T = e => { if (I.has(e)) return; let t = setTimeout(() => { I.delete(e), z({ type: 4, toastId: e }) }, 1e3); I.set(e, t) }, O = e => { let t = I.get(e); t && clearTimeout(t) }, $ = (e, t) => { switch (t.type) { case 0: return { ...e, toasts: [t.toast, ...e.toasts].slice(0, 20) }; case 1: return t.toast.id && O(t.toast.id), { ...e, toasts: e.toasts.map(e => e.id === t.toast.id ? { ...e, ...t.toast } : e) }; case 2: let { toast: a } = t; return e.toasts.find(e => e.id === a.id) ? $(e, { type: 1, toast: a }) : $(e, { type: 0, toast: a }); case 3: let { toastId: i } = t; return i ? T(i) : e.toasts.forEach(e => { T(e.id) }), { ...e, toasts: e.toasts.map(e => e.id === i || void 0 === i ? { ...e, visible: !1 } : e) }; case 4: return void 0 === t.toastId ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter(e => e.id !== t.toastId) }; case 5: return { ...e, pausedAt: t.time }; case 6: let r = t.time - (e.pausedAt || 0); return { ...e, pausedAt: void 0, toasts: e.toasts.map(e => ({ ...e, pauseDuration: e.pauseDuration + r })) } } }, _ = [], L = { toasts: [], pausedAt: void 0 }, z = e => { L = $(L, e), _.forEach(e => { e(L) }) }, V = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, A = (e = {}) => { let [t, a] = (0, n.useState)(L); (0, n.useEffect)(() => (_.push(a), () => { let e = _.indexOf(a); e > -1 && _.splice(e, 1) }), [t]); let i = t.toasts.map(t => { var a, i; return { ...e, ...e[t.type], ...t, duration: t.duration || (null == (a = e[t.type]) ? void 0 : a.duration) || (null == e ? void 0 : e.duration) || V[t.type], style: { ...e.style, ...null == (i = e[t.type]) ? void 0 : i.style, ...t.style } } }); return { ...t, toasts: i } }, F = (e, t = "blank", a) => ({ createdAt: Date.now(), visible: !0, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...a, id: (null == a ? void 0 : a.id) || E() }), P = e => (t, a) => { let i = F(t, e, a); return z({ type: 2, toast: i }), i.id }, D = (e, t) => P("blank")(e, t); D.error = P("error"), D.success = P("success"), D.loading = P("loading"), D.custom = P("custom"), D.dismiss = e => { z({ type: 3, toastId: e }) }, D.remove = e => z({ type: 4, toastId: e }), D.promise = (e, t, a) => { let i = D.loading(t.loading, { ...a, ...null == a ? void 0 : a.loading }); return e.then(e => (D.success(C(t.success, e), { id: i, ...a, ...null == a ? void 0 : a.success }), e)).catch(e => { D.error(C(t.error, e), { id: i, ...a, ...null == a ? void 0 : a.error }) }), e }; var S = (e, t) => { z({ type: 1, toast: { id: e, height: t } }) }, M = () => { z({ type: 5, time: Date.now() }) }, Z = e => { let { toasts: t, pausedAt: a } = A(e); (0, n.useEffect)(() => { if (a) return; let e = Date.now(), i = t.map(t => { if (t.duration === 1 / 0) return; let a = (t.duration || 0) + t.pauseDuration - (e - t.createdAt); if (a < 0) { t.visible && D.dismiss(t.id); return } return setTimeout(() => D.dismiss(t.id), a) }); return () => { i.forEach(e => e && clearTimeout(e)) } }, [t, a]); let i = (0, n.useCallback)(() => { a && z({ type: 6, time: Date.now() }) }, [a]), r = (0, n.useCallback)((e, a) => { let { reverseOrder: i = !1, gutter: r = 8, defaultPosition: s } = a || {}, n = t.filter(t => (t.position || s) === (e.position || s) && t.height), l = n.findIndex(t => t.id === e.id), o = n.filter((e, t) => t < l && e.visible).length; return n.filter(e => e.visible).slice(...i ? [o + 1] : [0, o]).reduce((e, t) => e + (t.height || 0) + r, 0) }, [t]); return { toasts: t, handlers: { updateHeight: S, startPause: M, endPause: i, calculateOffset: r } } }, B = v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, H = v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, q = v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, R = j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${H} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${q} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, W = v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, U = j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e => e.secondary || "#e0e0e0"};
  border-right-color: ${e => e.primary || "#616161"};
  animation: ${W} 1s linear infinite;
`, Y = v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, J = v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, G = j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Y} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${J} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, K = j("div")`
  position: absolute;
`, Q = j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, X = v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, ee = j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, et = ({ toast: e }) => { let { icon: t, type: a, iconTheme: i } = e; return void 0 !== t ? "string" == typeof t ? n.createElement(ee, null, t) : t : "blank" === a ? null : n.createElement(Q, null, n.createElement(U, { ...i }), "loading" !== a && n.createElement(K, null, "error" === a ? n.createElement(R, { ...i }) : n.createElement(G, { ...i }))) }, ea = e => `
0% {transform: translate3d(0,${-200 * e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, ei = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150 * e}%,-1px) scale(.6); opacity:0;}
`, er = j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, es = j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, en = (e, t) => { let a = e.includes("top") ? 1 : -1, [i, r] = k() ? ["0%{opacity:0;} 100%{opacity:1;}", "0%{opacity:1;} 100%{opacity:0;}"] : [ea(a), ei(a)]; return { animation: t ? `${v(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${v(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` } }, el = n.memo(({ toast: e, position: t, style: a, children: i }) => { let r = e.height ? en(e.position || t || "top-center", e.visible) : { opacity: 0 }, s = n.createElement(et, { toast: e }), l = n.createElement(es, { ...e.ariaProps }, C(e.message, e)); return n.createElement(er, { className: e.className, style: { ...r, ...a, ...e.style } }, "function" == typeof i ? i({ icon: s, message: l }) : n.createElement(n.Fragment, null, s, l)) }); s = n.createElement, u.p = void 0, y = s, b = void 0, w = void 0; var eo = ({ id: e, className: t, style: a, onHeightUpdate: i, children: r }) => { let s = n.useCallback(t => { if (t) { let a = () => { i(e, t.getBoundingClientRect().height) }; a(), new MutationObserver(a).observe(t, { subtree: !0, childList: !0, characterData: !0 }) } }, [e, i]); return n.createElement("div", { ref: s, className: t, style: a }, r) }, ec = (e, t) => { let a = e.includes("top"), i = e.includes("center") ? { justifyContent: "center" } : e.includes("right") ? { justifyContent: "flex-end" } : {}; return { left: 0, right: 0, display: "flex", position: "absolute", transition: k() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${t * (a ? 1 : -1)}px)`, ...a ? { top: 0 } : { bottom: 0 }, ...i } }, ed = g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, ep = ({ reverseOrder: e, position: t = "top-center", toastOptions: a, gutter: i, children: r, containerStyle: s, containerClassName: l }) => { let { toasts: o, handlers: c } = Z(a); return n.createElement("div", { style: { position: "fixed", zIndex: 9999, top: 16, left: 16, right: 16, bottom: 16, pointerEvents: "none", ...s }, className: l, onMouseEnter: c.startPause, onMouseLeave: c.endPause }, o.map(a => { let s = a.position || t, l = ec(s, c.calculateOffset(a, { reverseOrder: e, gutter: i, defaultPosition: t })); return n.createElement(eo, { id: a.id, key: a.id, onHeightUpdate: c.updateHeight, className: a.visible ? ed : "", style: l }, "custom" === a.type ? C(a.message, a) : r ? r(a) : n.createElement(el, { toast: a, position: s })) })) }, eu = D
  }
}, function (e) { e.O(0, [614, 922, 158, 815, 889, 971, 472, 744], function () { return e(e.s = 5897) }), _N_E = e.O() }]);