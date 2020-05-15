//  Minified
var app = (function () {
	"use strict";
	function e() {}
	const t = (e) => e;
	function n(e, t) {
		for (const n in t) e[n] = t[n];
		return e;
	}
	function r(e) {
		return e();
	}
	function s() {
		return Object.create(null);
	}
	function o(e) {
		e.forEach(r);
	}
	function a(e) {
		return "function" == typeof e;
	}
	function l(e, t) {
		return e != e
			? t == t
			: e !== t || (e && "object" == typeof e) || "function" == typeof e;
	}
	function i(t, n, r) {
		t.$$.on_destroy.push(
			(function (t, ...n) {
				if (null == t) return e;
				const r = t.subscribe(...n);
				return r.unsubscribe ? () => r.unsubscribe() : r;
			})(n, r)
		);
	}
	function c(e, t, n = t) {
		return e.set(n), t;
	}
	const d = "undefined" != typeof window;
	let u = d ? () => window.performance.now() : () => Date.now(),
		f = d ? (e) => requestAnimationFrame(e) : e;
	const h = new Set();
	function p(e) {
		h.forEach((t) => {
			t.c(e) || (h.delete(t), t.f());
		}),
			0 !== h.size && f(p);
	}
	function m(e, t) {
		e.appendChild(t);
	}
	function g(e, t, n) {
		e.insertBefore(t, n || null);
	}
	function w(e) {
		e.parentNode.removeChild(e);
	}
	function b(e, t) {
		for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
	}
	function y(e) {
		return document.createElement(e);
	}
	function v(e) {
		return document.createTextNode(e);
	}
	function k(e, t, n, r) {
		return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
	}
	function $(e, t, n) {
		null == n
			? e.removeAttribute(t)
			: e.getAttribute(t) !== n && e.setAttribute(t, n);
	}
	function x(e, t) {
		(t = "" + t), e.data !== t && (e.data = t);
	}
	function E(e, t, n) {
		e.classList[n ? "add" : "remove"](t);
	}
	let F;
	function j(e) {
		F = e;
	}
	function C(e) {
		(function () {
			if (!F) throw new Error("Function called outside component initialization");
			return F;
		})().$$.on_mount.push(e);
	}
	const A = [],
		D = [],
		_ = [],
		z = [],
		M = Promise.resolve();
	let S = !1;
	function q(e) {
		_.push(e);
	}
	let O = !1;
	const B = new Set();
	function L() {
		if (!O) {
			O = !0;
			do {
				for (let e = 0; e < A.length; e += 1) {
					const t = A[e];
					j(t), T(t.$$);
				}
				for (A.length = 0; D.length; ) D.pop()();
				for (let e = 0; e < _.length; e += 1) {
					const t = _[e];
					B.has(t) || (B.add(t), t());
				}
				_.length = 0;
			} while (A.length);
			for (; z.length; ) z.pop()();
			(S = !1), (O = !1), B.clear();
		}
	}
	function T(e) {
		if (null !== e.fragment) {
			e.update(), o(e.before_update);
			const t = e.dirty;
			(e.dirty = [-1]),
				e.fragment && e.fragment.p(e.ctx, t),
				e.after_update.forEach(q);
		}
	}
	const P = new Set();
	function W(e, t) {
		e && e.i && (P.delete(e), e.i(t));
	}
	function H(e, t, n, r) {
		if (e && e.o) {
			if (P.has(e)) return;
			P.add(e),
				(void 0).c.push(() => {
					P.delete(e), r && (n && e.d(1), r());
				}),
				e.o(t);
		}
	}
	function N(e) {
		e && e.c();
	}
	function X(e, t, n) {
		const { fragment: s, on_mount: l, on_destroy: i, after_update: c } = e.$$;
		s && s.m(t, n),
			q(() => {
				const t = l.map(r).filter(a);
				i ? i.push(...t) : o(t), (e.$$.on_mount = []);
			}),
			c.forEach(q);
	}
	function I(e, t) {
		const n = e.$$;
		null !== n.fragment &&
			(o(n.on_destroy),
			n.fragment && n.fragment.d(t),
			(n.on_destroy = n.fragment = null),
			(n.ctx = []));
	}
	function R(e, t) {
		-1 === e.$$.dirty[0] &&
			(A.push(e), S || ((S = !0), M.then(L)), e.$$.dirty.fill(0)),
			(e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
	}
	function K(t, n, r, a, l, i, c = [-1]) {
		const d = F;
		j(t);
		const u = n.props || {},
			f = (t.$$ = {
				fragment: null,
				ctx: null,
				props: i,
				update: e,
				not_equal: l,
				bound: s(),
				on_mount: [],
				on_destroy: [],
				before_update: [],
				after_update: [],
				context: new Map(d ? d.$$.context : []),
				callbacks: s(),
				dirty: c
			});
		let h = !1;
		if (
			((f.ctx = r
				? r(t, u, (e, n, ...r) => {
						const s = r.length ? r[0] : n;
						return (
							f.ctx &&
								l(f.ctx[e], (f.ctx[e] = s)) &&
								(f.bound[e] && f.bound[e](s), h && R(t, e)),
							n
						);
				  })
				: []),
			f.update(),
			(h = !0),
			o(f.before_update),
			(f.fragment = !!a && a(f.ctx)),
			n.target)
		) {
			if (n.hydrate) {
				const e = (function (e) {
					return Array.from(e.childNodes);
				})(n.target);
				f.fragment && f.fragment.l(e), e.forEach(w);
			} else f.fragment && f.fragment.c();
			n.intro && W(t.$$.fragment), X(t, n.target, n.anchor), L();
		}
		j(d);
	}
	class V {
		$destroy() {
			I(this, 1), (this.$destroy = e);
		}
		$on(e, t) {
			const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
			return (
				n.push(t),
				() => {
					const e = n.indexOf(t);
					-1 !== e && n.splice(e, 1);
				}
			);
		}
		$set() {}
	}
	const U = [];
	function G(t, n = e) {
		let r;
		const s = [];
		function o(e) {
			if (l(t, e) && ((t = e), r)) {
				const e = !U.length;
				for (let e = 0; e < s.length; e += 1) {
					const n = s[e];
					n[1](), U.push(n, t);
				}
				if (e) {
					for (let e = 0; e < U.length; e += 2) U[e][0](U[e + 1]);
					U.length = 0;
				}
			}
		}
		return {
			set: o,
			update: function (e) {
				o(e(t));
			},
			subscribe: function (a, l = e) {
				const i = [a, l];
				return (
					s.push(i),
					1 === s.length && (r = n(o) || e),
					a(t),
					() => {
						const e = s.indexOf(i);
						-1 !== e && s.splice(e, 1), 0 === s.length && (r(), (r = null));
					}
				);
			}
		};
	}
	var J = [
		"as",
		"his",
		"that",
		"he",
		"was",
		"for",
		"on",
		"are",
		"with",
		"they",
		"be",
		"at",
		"one",
		"have",
		"this",
		"from",
		"by",
		"hot",
		"word",
		"but",
		"what",
		"some",
		"is",
		"it",
		"you",
		"or",
		"had",
		"the",
		"of",
		"to",
		"and",
		"a",
		"in",
		"we",
		"can",
		"out",
		"other",
		"were",
		"which",
		"do",
		"their",
		"time",
		"if",
		"will",
		"how",
		"said",
		"an",
		"each",
		"tell",
		"does",
		"set",
		"three",
		"want",
		"air",
		"well",
		"also",
		"play",
		"small",
		"end",
		"put",
		"home",
		"read",
		"hand",
		"port",
		"large",
		"spell",
		"add",
		"even",
		"land",
		"here",
		"must",
		"big",
		"high",
		"such",
		"follow",
		"act",
		"why",
		"ask",
		"men",
		"change",
		"went",
		"light",
		"kind",
		"off",
		"need",
		"house",
		"picture",
		"try",
		"us",
		"again",
		"animal",
		"point",
		"mother",
		"world",
		"near",
		"build",
		"self",
		"earth",
		"father",
		"any",
		"new",
		"work",
		"part",
		"take",
		"get",
		"place",
		"made",
		"live",
		"where",
		"after",
		"back",
		"little",
		"only",
		"round",
		"man",
		"year",
		"came",
		"show",
		"every",
		"good",
		"me",
		"give",
		"our",
		"under",
		"name",
		"very",
		"through",
		"just",
		"form",
		"sentence",
		"great",
		"think",
		"say",
		"help",
		"low",
		"line",
		"differ",
		"turn",
		"cause",
		"much",
		"mean",
		"before",
		"move",
		"right",
		"boy",
		"old",
		"too",
		"same",
		"she",
		"all",
		"there",
		"when",
		"up",
		"use",
		"your",
		"way",
		"about",
		"many",
		"then",
		"them",
		"write",
		"would",
		"like",
		"so",
		"these",
		"her",
		"long",
		"make",
		"thing",
		"see",
		"him",
		"two",
		"has",
		"look",
		"more",
		"day",
		"could",
		"go",
		"come",
		"did",
		"number",
		"sound",
		"no",
		"most",
		"people",
		"my",
		"over",
		"know",
		"water",
		"than",
		"call",
		"first",
		"who",
		"may",
		"down",
		"side",
		"been",
		"now",
		"find",
		"head",
		"stand",
		"own",
		"page",
		"should",
		"country",
		"found",
		"answer",
		"school",
		"grow",
		"study",
		"still",
		"learn",
		"plant",
		"cover",
		"food",
		"sun",
		"four",
		"between",
		"state",
		"keep",
		"eye",
		"never",
		"last",
		"let",
		"thought",
		"city",
		"tree",
		"cross",
		"farm",
		"hard",
		"start",
		"might",
		"story",
		"saw",
		"far",
		"sea",
		"draw",
		"left",
		"late",
		"run",
		"while",
		"press",
		"close",
		"night",
		"real",
		"life",
		"few",
		"north",
		"book",
		"carry",
		"took",
		"science",
		"eat",
		"room",
		"friend",
		"began",
		"idea",
		"fish",
		"mountain",
		"stop",
		"once",
		"base",
		"hear",
		"horse",
		"cut",
		"sure",
		"watch",
		"color",
		"face",
		"wood",
		"main",
		"open",
		"seem",
		"together",
		"next",
		"white",
		"children",
		"begin",
		"got",
		"walk",
		"example",
		"ease",
		"paper",
		"group",
		"always",
		"music",
		"those",
		"both",
		"mark",
		"often",
		"letter",
		"until",
		"mile",
		"river",
		"car",
		"feet",
		"care",
		"second",
		"enough",
		"plain",
		"girl",
		"usual",
		"young",
		"ready",
		"above",
		"ever",
		"red",
		"list",
		"though",
		"feel",
		"talk",
		"bird",
		"soon",
		"body",
		"dog",
		"family",
		"direct",
		"pose",
		"leave",
		"song",
		"measure",
		"door",
		"product",
		"black",
		"short",
		"numeral",
		"class",
		"wind",
		"question",
		"happen",
		"complete",
		"ship",
		"area",
		"half",
		"rock",
		"order",
		"fire",
		"south",
		"problem",
		"piece",
		"told",
		"knew",
		"pass",
		"since",
		"top",
		"whole",
		"king",
		"street",
		"inch",
		"multiply",
		"nothing",
		"course",
		"stay",
		"wheel",
		"full",
		"force",
		"blue",
		"object",
		"decide",
		"surface",
		"deep",
		"moon",
		"island",
		"foot",
		"system",
		"busy",
		"test",
		"record",
		"boat",
		"common",
		"gold",
		"possible",
		"plane",
		"stead",
		"dry",
		"wonder",
		"laugh",
		"thousand",
		"ago",
		"ran",
		"check",
		"game",
		"shape",
		"equate",
		"hot",
		"miss",
		"brought",
		"heat",
		"snow",
		"tire",
		"bring",
		"yes",
		"distant",
		"fill",
		"east",
		"paint",
		"language",
		"among",
		"unit",
		"power",
		"town",
		"fine",
		"certain",
		"fly",
		"fall",
		"lead",
		"cry",
		"dark",
		"machine",
		"note",
		"wait",
		"plan",
		"figure",
		"star",
		"box",
		"noun",
		"field",
		"rest",
		"correct",
		"able",
		"pound",
		"done",
		"beauty",
		"drive",
		"stood",
		"contain",
		"front",
		"teach",
		"week",
		"final",
		"gave",
		"green",
		"oh",
		"quick",
		"develop",
		"ocean",
		"warm",
		"free",
		"minute",
		"strong",
		"special",
		"mind",
		"behind",
		"clear",
		"tail",
		"produce",
		"fact",
		"space",
		"heard",
		"best",
		"hour",
		"better",
		"true",
		"during",
		"hundred",
		"five",
		"remember",
		"step",
		"early",
		"hold",
		"west",
		"ground",
		"interest",
		"reach",
		"fast",
		"verb",
		"sing",
		"listen",
		"six",
		"table",
		"travel",
		"less",
		"morning",
		"ten",
		"simple",
		"several",
		"vowel",
		"toward",
		"war",
		"lay",
		"against",
		"pattern",
		"slow",
		"center",
		"love",
		"person",
		"money",
		"serve",
		"appear",
		"road",
		"map",
		"rain",
		"rule",
		"govern",
		"pull",
		"cold",
		"notice",
		"voice",
		"energy",
		"hunt",
		"probable",
		"bed",
		"brother",
		"egg",
		"ride",
		"cell",
		"believe",
		"perhaps",
		"pick",
		"sudden",
		"count",
		"square",
		"reason",
		"length",
		"represent",
		"art",
		"subject",
		"region",
		"size",
		"vary",
		"settle",
		"speak",
		"weight",
		"general",
		"ice",
		"matter",
		"circle",
		"pair",
		"include",
		"divide",
		"syllable",
		"felt",
		"grand",
		"ball",
		"yet",
		"wave",
		"drop",
		"heart",
		"am",
		"present",
		"heavy",
		"dance",
		"engine",
		"position",
		"arm",
		"wide",
		"sail",
		"material",
		"fraction",
		"forest",
		"sit",
		"race",
		"window",
		"store",
		"summer",
		"train",
		"sleep",
		"prove",
		"lone",
		"leg",
		"exercise",
		"wall",
		"catch",
		"mount",
		"wish",
		"sky",
		"board",
		"joy",
		"winter",
		"sat",
		"written",
		"wild",
		"instrument",
		"kept",
		"glass",
		"grass",
		"cow",
		"job",
		"edge",
		"sign",
		"visit",
		"past",
		"soft",
		"fun",
		"bright",
		"gas",
		"weather",
		"month",
		"million",
		"bear",
		"finish",
		"happy",
		"hope",
		"flower",
		"clothe",
		"strange",
		"gone",
		"trade",
		"melody",
		"trip",
		"office",
		"receive",
		"row",
		"mouth",
		"exact",
		"symbol",
		"die",
		"least",
		"trouble",
		"shout",
		"except",
		"wrote",
		"seed",
		"tone",
		"join",
		"suggest",
		"clean",
		"break",
		"lady",
		"yard",
		"rise",
		"bad",
		"blow",
		"oil",
		"blood",
		"touch",
		"grew",
		"cent",
		"mix",
		"team",
		"wire",
		"cost",
		"lost",
		"brown",
		"wear",
		"garden",
		"equal",
		"sent",
		"choose",
		"fell",
		"fit",
		"flow",
		"fair",
		"bank",
		"collect",
		"save",
		"control",
		"decimal",
		"ear",
		"else",
		"quite",
		"broke",
		"case",
		"middle",
		"kill",
		"son",
		"lake",
		"moment",
		"scale",
		"loud",
		"spring",
		"observe",
		"child",
		"straight",
		"consonant",
		"nation",
		"dictionary",
		"milk",
		"speed",
		"method",
		"organ",
		"pay",
		"age",
		"section",
		"dress",
		"cloud",
		"surprise",
		"quiet",
		"stone",
		"tiny",
		"climb",
		"cool",
		"design",
		"poor",
		"lot",
		"experiment",
		"bottom",
		"key",
		"iron",
		"single",
		"stick",
		"flat",
		"twenty",
		"skin",
		"smile",
		"crease",
		"hole",
		"jump",
		"baby",
		"eight",
		"village",
		"meet",
		"root",
		"buy",
		"raise",
		"solve",
		"metal",
		"whether",
		"push",
		"seven",
		"paragraph",
		"third",
		"shall",
		"held",
		"hair",
		"describe",
		"cook",
		"floor",
		"either",
		"result",
		"burn",
		"hill",
		"safe",
		"cat",
		"century",
		"consider",
		"type",
		"law",
		"bit",
		"coast",
		"copy",
		"phrase",
		"silent",
		"tall",
		"sand",
		"soil",
		"roll",
		"temperature",
		"finger",
		"industry",
		"value",
		"fight",
		"lie",
		"beat",
		"excite",
		"natural",
		"view",
		"sense",
		"capital",
		"chair",
		"danger",
		"fruit",
		"rich",
		"thick",
		"soldier",
		"process",
		"operate",
		"practice",
		"separate",
		"difficult",
		"doctor",
		"please",
		"protect",
		"noon",
		"crop",
		"modern",
		"element",
		"hit",
		"student",
		"corner",
		"party",
		"supply",
		"whose",
		"locate",
		"ring",
		"character",
		"insect",
		"caught",
		"period",
		"indicate",
		"radio",
		"spoke",
		"atom",
		"human",
		"history",
		"effect",
		"electric",
		"expect",
		"bone",
		"rail",
		"imagine",
		"provide",
		"agree",
		"thus",
		"gentle",
		"woman",
		"captain",
		"guess",
		"necessary",
		"sharp",
		"wing",
		"create",
		"neighbor",
		"wash",
		"bat",
		"rather",
		"crowd",
		"corn",
		"compare",
		"poem",
		"string",
		"bell",
		"depend",
		"meat",
		"rub",
		"tube",
		"famous",
		"dollar",
		"stream",
		"fear",
		"sight",
		"thin",
		"triangle",
		"planet",
		"hurry",
		"chief",
		"colony",
		"clock",
		"mine",
		"tie",
		"enter",
		"major",
		"fresh",
		"search",
		"send",
		"yellow",
		"gun",
		"allow",
		"print",
		"dead",
		"spot",
		"desert",
		"suit",
		"current",
		"lift",
		"rose",
		"arrive",
		"master",
		"track",
		"parent",
		"shore",
		"division",
		"sheet",
		"substance",
		"favor",
		"connect",
		"post",
		"spend",
		"chord",
		"fat",
		"glad",
		"original",
		"share",
		"station",
		"dad",
		"bread",
		"charge",
		"proper",
		"bar",
		"offer",
		"segment",
		"slave",
		"duck",
		"instant",
		"market",
		"degree",
		"populate",
		"chick",
		"dear",
		"enemy",
		"reply",
		"drink",
		"occur",
		"support",
		"speech",
		"nature",
		"range",
		"steam",
		"motion",
		"path",
		"liquid",
		"log",
		"meant",
		"quotient",
		"teeth",
		"shell",
		"neck",
		"oxygen",
		"sugar",
		"death",
		"pretty",
		"skill",
		"women",
		"season",
		"solution",
		"magnet",
		"silver",
		"thank",
		"branch",
		"match",
		"suffix",
		"especially",
		"fig",
		"afraid",
		"huge",
		"sister",
		"steel",
		"discuss",
		"forward",
		"similar",
		"guide",
		"experience",
		"score",
		"apple",
		"bought",
		"led",
		"pitch",
		"coat",
		"mass",
		"card",
		"band",
		"rope",
		"slip",
		"win",
		"dream",
		"evening",
		"condition",
		"feed",
		"tool",
		"total",
		"basic",
		"smell",
		"valley",
		"nor",
		"double",
		"seat",
		"continue",
		"block",
		"chart",
		"hat",
		"sell",
		"success",
		"company",
		"subtract",
		"event",
		"particular",
		"deal",
		"swim",
		"term",
		"opposite",
		"wife",
		"shoe",
		"shoulder",
		"spread",
		"arrange",
		"camp",
		"invent",
		"cotton",
		"born",
		"determine",
		"quart",
		"nine",
		"truck",
		"noise",
		"level",
		"chance",
		"gather",
		"shop",
		"stretch",
		"throw",
		"shine",
		"property",
		"column",
		"molecule",
		"select",
		"wrong",
		"gray",
		"repeat",
		"require",
		"broad",
		"prepare",
		"salt",
		"nose",
		"plural",
		"anger",
		"claim",
		"continent"
	];
	const Q = () => {
		let e = [];
		for (let t = 0; t < 12; t++) {
			const t = Math.floor(Math.random() * J.length);
			e.push(J[t] + " ");
		}
		return e;
	};
	var Y = (() => {
			let e = Q(),
				t = null;
			const { subscribe: n, set: r } = G(e);
			return {
				subscribe: n,
				change: function () {
					(e = Q()),
						r(e),
						(function () {
							t = 0;
							for (let n = 0; n < e.length; n++) t += e[n].length;
						})();
				},
				charCount: t
			};
		})(),
		Z = (() => {
			let e = { word: 0, char: 0 };
			const { subscribe: t, set: n, update: r } = G(e);
			return {
				subscribe: t,
				reset: function () {
					(e = { word: 0, char: 0 }), n(e);
				},
				nextChar: function () {
					e.char++, n(e);
				},
				nextWord: function () {
					e.word++, (e.char = 0), n(e);
				}
			};
		})(),
		ee = (e) => e.getMilliseconds() + 1e3 * e.getSeconds() + 6e4 * e.getMinutes(),
		te = (() => {
			let e = [];
			const { subscribe: t, set: n } = G(e);
			return {
				subscribe: t,
				reset: function () {
					(e = []), n(e);
				},
				update: function (t, r) {
					e[t] || (e[t] = []), (e[t][r] = !0), n(e);
				}
			};
		})(),
		ne = (() => {
			let e,
				t = { time: 0, words: 0, speed: 0 };
			const { subscribe: n, set: r } = G(t);
			return {
				subscribe: n,
				reset: function () {
					(t = { time: 0, words: 0, speed: 0 }), r(t), (e = null);
				},
				log: function () {
					t.words++,
						(t.time = ee(new Date()) - e),
						(t.speed = (t.words / t.time) * 1e3 * 60),
						r(t);
				},
				typingStarted: function () {
					e || (e = ee(new Date())), r(t);
				}
			};
		})(),
		re = (() => {
			const { subscribe: e, set: t } = G(50);
			return {
				subscribe: e,
				setSpeed: function (e) {
					t(e), Z.reset(), te.reset(), ne.reset();
				}
			};
		})();
	let se;
	re.subscribe((e) => (se = e));
	const oe = (e, t = 50) => {
		const n = e / t;
		return n >= 1
			? "fastest"
			: n >= 0.9
			? "fast"
			: n >= 0.8
			? "normal"
			: n >= 0.7
			? "slow"
			: "slowest";
	};
	let ae = {};
	function le() {
		for (let e = 97; e < 123; e++)
			ae[String.fromCharCode(e)] = { typed: 0, time: 0, speed: 0 };
	}
	le();
	var ie = (() => {
		let e = null;
		const { subscribe: t, set: n } = G(ae);
		return (
			re.subscribe((e) => {
				!(function (e) {
					for (let t in ae) 0 !== ae[t].typed && (ae[t].label = oe(ae[t].speed, e));
				})(e),
					n(ae);
			}),
			{
				subscribe: t,
				updateKey: function (t) {
					var r;
					ae[t.key] &&
						(e
							? (ae[t.key].typed++,
							  (ae[t.key].time += ee(t.time) - ee(e)),
							  (ae[t.key].speed =
									((r = ae[t.key]), Math.round((r.typed / r.time) * 12e3))),
							  (ae[t.key].label = oe(ae[t.key].speed, se)),
							  (e = new Date()),
							  n(ae))
							: (e = new Date()));
				},
				reset: le
			}
		);
	})();
	let ce, de;
	Z.subscribe((e) => (ce = e)), Y.subscribe((e) => (de = e));
	var ue = (() => {
			let e = { key: null, time: null };
			function t() {
				ie.updateKey(e),
					ce.char < de[ce.word].length - 1
						? Z.nextChar()
						: ce.word < de.length - 1
						? Z.nextWord()
						: (Z.reset(), Y.change(), te.reset());
			}
			function n() {
				e.key === de[ce.word][ce.char] ? t() : te.update(ce.word, ce.char);
			}
			const { subscribe: r, set: s } = G(e, (t) => {
				function r(r) {
					(e = { key: r.key, time: new Date() }), t(e), n();
				}
				return (
					window.addEventListener("keydown", r),
					() => window.removeEventListener("keydown", r)
				);
			});
			return {
				subscribe: r,
				reset: function () {
					(e = { key: null, time: null }), s(e);
				}
			};
		})(),
		fe = (() => {
			let e = !1;
			const { set: t, subscribe: n } = G(e);
			return {
				toggle: function () {
					(e = !e), t(e), Z.reset(), ue.reset(), ne.reset(), te.reset();
				},
				subscribe: n
			};
		})();
	let he, pe, me;
	Y.subscribe((e) => {
		pe = e;
	});
	var ge = (() => {
		let e = { word: 0, char: 0 };
		const { subscribe: t, set: n } = G(e);
		let r;
		function s() {
			clearInterval(r);
		}
		function o() {
			(e = { word: 0, char: 0 }), n(e);
		}
		return (
			re.subscribe((e) => {
				(me = e), o(), s();
			}),
			fe.subscribe((e) => {
				(he = e), o(), s();
			}),
			Z.subscribe((t) => {
				if (!he) return;
				const a = pe.length - 1,
					l = pe[a].length - 1;
				1 === t.char && 0 === t.word
					? (r && s(),
					  (r = setInterval(() => {
							e.char < pe[e.word].length - 1
								? (e.char++, n(e))
								: e.word < pe.length - 1
								? (e.word++, (e.char = 0), n(e))
								: s();
					  }, 6e4 / 6.2 / me)))
					: t.word === a && t.char === l && o();
			}),
			{ subscribe: t, reset: o, stop: s }
		);
	})();
	function we(e, t, n) {
		const r = e.slice();
		return (r[8] = t[n]), (r[10] = n), r;
	}
	function be(e, t, n) {
		const r = e.slice();
		return (r[5] = t[n]), (r[7] = n), r;
	}
	function ye(e) {
		let t,
			n,
			r = (" " === e[8] ? "·" : e[8]) + "";
		return {
			c() {
				(t = y("span")),
					(n = v(r)),
					$(t, "class", "character svelte-rtsb3r"),
					E(t, "current-char", e[1].char === e[10] && e[1].word === e[7]),
					E(t, "space", " " === e[8]),
					E(t, "error", e[2][e[7]] && e[2][e[7]][e[10]]),
					E(
						t,
						"typed-by-target",
						e[3] && (e[4].word > e[7] || (e[4].char >= e[10] && e[4].word === e[7]))
					);
			},
			m(e, r) {
				g(e, t, r), m(t, n);
			},
			p(e, s) {
				1 & s && r !== (r = (" " === e[8] ? "·" : e[8]) + "") && x(n, r),
					2 & s && E(t, "current-char", e[1].char === e[10] && e[1].word === e[7]),
					1 & s && E(t, "space", " " === e[8]),
					4 & s && E(t, "error", e[2][e[7]] && e[2][e[7]][e[10]]),
					24 & s &&
						E(
							t,
							"typed-by-target",
							e[3] && (e[4].word > e[7] || (e[4].char >= e[10] && e[4].word === e[7]))
						);
			},
			d(e) {
				e && w(t);
			}
		};
	}
	function ve(e) {
		let t,
			n = e[5],
			r = [];
		for (let t = 0; t < n.length; t += 1) r[t] = ye(we(e, n, t));
		return {
			c() {
				t = y("div");
				for (let e = 0; e < r.length; e += 1) r[e].c();
				$(t, "class", "word svelte-rtsb3r"),
					E(t, "current-word", e[1].word === e[7]),
					E(t, "typed", e[1].word > e[7]);
			},
			m(e, n) {
				g(e, t, n);
				for (let e = 0; e < r.length; e += 1) r[e].m(t, null);
			},
			p(e, s) {
				if (31 & s) {
					let o;
					for (n = e[5], o = 0; o < n.length; o += 1) {
						const a = we(e, n, o);
						r[o] ? r[o].p(a, s) : ((r[o] = ye(a)), r[o].c(), r[o].m(t, null));
					}
					for (; o < r.length; o += 1) r[o].d(1);
					r.length = n.length;
				}
				2 & s && E(t, "current-word", e[1].word === e[7]),
					2 & s && E(t, "typed", e[1].word > e[7]);
			},
			d(e) {
				e && w(t), b(r, e);
			}
		};
	}
	function ke(t) {
		let n,
			r = t[0],
			s = [];
		for (let e = 0; e < r.length; e += 1) s[e] = ve(be(t, r, e));
		return {
			c() {
				n = y("div");
				for (let e = 0; e < s.length; e += 1) s[e].c();
				$(n, "class", "words svelte-rtsb3r");
			},
			m(e, t) {
				g(e, n, t);
				for (let e = 0; e < s.length; e += 1) s[e].m(n, null);
			},
			p(e, [t]) {
				if (31 & t) {
					let o;
					for (r = e[0], o = 0; o < r.length; o += 1) {
						const a = be(e, r, o);
						s[o] ? s[o].p(a, t) : ((s[o] = ve(a)), s[o].c(), s[o].m(n, null));
					}
					for (; o < s.length; o += 1) s[o].d(1);
					s.length = r.length;
				}
			},
			i: e,
			o: e,
			d(e) {
				e && w(n), b(s, e);
			}
		};
	}
	function $e(e, t, n) {
		let r, s, o, a, l;
		return (
			i(e, Y, (e) => n(0, (r = e))),
			i(e, Z, (e) => n(1, (s = e))),
			i(e, te, (e) => n(2, (o = e))),
			i(e, fe, (e) => n(3, (a = e))),
			i(e, ge, (e) => n(4, (l = e))),
			[r, s, o, a, l]
		);
	}
	class xe extends V {
		constructor(e) {
			super(), K(this, e, $e, ke, l, {});
		}
	}
	function Ee(e) {
		return "[object Date]" === Object.prototype.toString.call(e);
	}
	function Fe(e, t) {
		if (e === t || e != e) return () => e;
		const n = typeof e;
		if (n !== typeof t || Array.isArray(e) !== Array.isArray(t))
			throw new Error("Cannot interpolate values of different type");
		if (Array.isArray(e)) {
			const n = t.map((t, n) => Fe(e[n], t));
			return (e) => n.map((t) => t(e));
		}
		if ("object" === n) {
			if (!e || !t) throw new Error("Object cannot be null");
			if (Ee(e) && Ee(t)) {
				e = e.getTime();
				const n = (t = t.getTime()) - e;
				return (t) => new Date(e + t * n);
			}
			const n = Object.keys(t),
				r = {};
			return (
				n.forEach((n) => {
					r[n] = Fe(e[n], t[n]);
				}),
				(e) => {
					const t = {};
					return (
						n.forEach((n) => {
							t[n] = r[n](e);
						}),
						t
					);
				}
			);
		}
		if ("number" === n) {
			const n = t - e;
			return (t) => e + t * n;
		}
		throw new Error(`Cannot interpolate ${n} values`);
	}
	function je(e, r = {}) {
		const s = G(e);
		let o,
			a = e;
		function l(l, i) {
			if (null == e) return s.set((e = l)), Promise.resolve();
			a = l;
			let c = o,
				d = !1,
				{ delay: m = 0, duration: g = 400, easing: w = t, interpolate: b = Fe } = n(
					n({}, r),
					i
				);
			const y = u() + m;
			let v;
			return (
				(o = (function (e) {
					let t;
					return (
						0 === h.size && f(p),
						{
							promise: new Promise((n) => {
								h.add((t = { c: e, f: n }));
							}),
							abort() {
								h.delete(t);
							}
						}
					);
				})((t) => {
					if (t < y) return !0;
					d || ((v = b(e, l)), "function" == typeof g && (g = g(e, l)), (d = !0)),
						c && (c.abort(), (c = null));
					const n = t - y;
					return n > g ? (s.set((e = l)), !1) : (s.set((e = v(w(n / g)))), !0);
				})),
				o.promise
			);
		}
		return { set: l, update: (t, n) => l(t(a, e), n), subscribe: s.subscribe };
	}
	function Ce(t) {
		let n, r, s, o, a, l, i, c, d, u, f;
		return {
			c() {
				(n = y("div")),
					(r = y("span")),
					(s = y("span")),
					(s.textContent = "Target is"),
					(o = y("span")),
					(a = v(t[1])),
					(l = y("span")),
					(l.textContent = "WPM"),
					(i = y("div")),
					(c = y("input")),
					(d = y("div")),
					(u = y("div")),
					(u.textContent = "What is your target typing speed ?"),
					$(s, "class", "text svelte-6li567"),
					$(o, "class", "value svelte-6li567"),
					$(l, "class", "unit"),
					$(r, "class", "goal svelte-6li567"),
					$(c, "min", Ae),
					$(c, "max", De),
					$(c, "type", "range"),
					$(c, "class", "svelte-6li567"),
					$(d, "class", "bubble svelte-6li567"),
					$(u, "class", "tip svelte-6li567"),
					$(i, "class", "slider svelte-6li567"),
					$(n, "class", "target svelte-6li567");
			},
			m(e, h, p) {
				g(e, n, h),
					m(n, r),
					m(r, s),
					m(r, o),
					m(o, a),
					m(r, l),
					m(n, i),
					m(i, c),
					m(i, d),
					t[3](d),
					m(i, u),
					p && f(),
					(f = k(c, "input", t[2]));
			},
			p(e, [t]) {
				2 & t && x(a, e[1]);
			},
			i: e,
			o: e,
			d(e) {
				e && w(n), t[3](null), f();
			}
		};
	}
	const Ae = 20,
		De = 150;
	function _e(e, t, n) {
		let r, s;
		i(e, re, (e) => n(1, (r = e)));
		return (
			(e.$$.update = () => {
				if (3 & e.$$.dirty) {
					const e = ((r - Ae) / (De - Ae)) * 100;
					s &&
						(n(0, (s.style.left = e + "%"), s),
						n(0, (s.style.animationDuration = 50 / (e + 10) + "s"), s));
				}
			}),
			[
				s,
				r,
				(e) => {
					re.setSpeed(e.target.value);
				},
				function (e) {
					D[e ? "unshift" : "push"](() => {
						n(0, (s = e));
					});
				}
			]
		);
	}
	class ze extends V {
		constructor(e) {
			super(), K(this, e, _e, Ce, l, {});
		}
	}
	function Me(e) {
		let t,
			n,
			r,
			s,
			o,
			a,
			l,
			i,
			c,
			d,
			u,
			f,
			h,
			p,
			b,
			F,
			j,
			C,
			A,
			D,
			_,
			z,
			M = Math.round(e[0]) + "",
			S = e[1].words + "",
			q = (e[2] / 1e3).toFixed(2) + "",
			O = e[3] ? "on" : "off";
		const B = new ze({});
		return {
			c() {
				(t = y("div")),
					(n = y("div")),
					N(B.$$.fragment),
					(r = y("div")),
					(s = y("div")),
					(o = y("div")),
					(a = v(M)),
					(l = y("div")),
					(l.textContent = "WPM"),
					(i = y("div")),
					(c = y("span")),
					(d = v(S)),
					(u = y("span")),
					(u.textContent = "words typed in"),
					(f = y("span")),
					(h = v(q)),
					(p = v(" S")),
					(b = y("div")),
					(F = y("div")),
					(j = y("div")),
					(j.textContent = "SHADOOW mode"),
					(C = y("div")),
					(A = v(O)),
					(D = y("div")),
					(D.innerHTML =
						'<p class="svelte-12n1c2w">compete with your target speed</p>'),
					$(n, "class", "left svelte-12n1c2w"),
					$(o, "class", "value svelte-12n1c2w"),
					$(l, "class", "unit svelte-12n1c2w"),
					$(s, "class", "speed svelte-12n1c2w"),
					$(c, "class", "count svelte-12n1c2w"),
					$(u, "class", "info svelte-12n1c2w"),
					$(f, "class", "count svelte-12n1c2w"),
					$(i, "class", "word-stats svelte-12n1c2w"),
					$(r, "class", "center svelte-12n1c2w"),
					$(j, "class", "text svelte-12n1c2w"),
					$(C, "class", "value svelte-12n1c2w"),
					E(C, "on", e[3]),
					$(D, "class", "tip svelte-12n1c2w"),
					$(F, "class", "chase-mode svelte-12n1c2w"),
					$(b, "class", "right svelte-12n1c2w"),
					$(t, "class", "stats svelte-12n1c2w");
			},
			m(e, w, y) {
				g(e, t, w),
					m(t, n),
					X(B, n, null),
					m(t, r),
					m(r, s),
					m(s, o),
					m(o, a),
					m(s, l),
					m(r, i),
					m(i, c),
					m(c, d),
					m(i, u),
					m(i, f),
					m(f, h),
					m(f, p),
					m(t, b),
					m(b, F),
					m(F, j),
					m(F, C),
					m(C, A),
					m(F, D),
					(_ = !0),
					y && z(),
					(z = k(F, "click", fe.toggle));
			},
			p(e, [t]) {
				(!_ || 1 & t) && M !== (M = Math.round(e[0]) + "") && x(a, M),
					(!_ || 2 & t) && S !== (S = e[1].words + "") && x(d, S),
					(!_ || 4 & t) && q !== (q = (e[2] / 1e3).toFixed(2) + "") && x(h, q),
					(!_ || 8 & t) && O !== (O = e[3] ? "on" : "off") && x(A, O),
					8 & t && E(C, "on", e[3]);
			},
			i(e) {
				_ || (W(B.$$.fragment, e), (_ = !0));
			},
			o(e) {
				H(B.$$.fragment, e), (_ = !1);
			},
			d(e) {
				e && w(t), I(B), z();
			}
		};
	}
	function Se(e, t, n) {
		let r, s, o, a, l, d, u;
		i(e, ue, (e) => n(6, (r = e))),
			i(e, Z, (e) => n(7, (s = e))),
			i(e, Y, (e) => n(8, (o = e))),
			i(e, ne, (e) => n(1, (l = e))),
			i(e, fe, (e) => n(3, (u = e)));
		let f = je(0);
		i(e, f, (e) => n(0, (a = e)));
		let h = je(0);
		return (
			i(e, h, (e) => n(2, (d = e))),
			(e.$$.update = () => {
				192 & e.$$.dirty &&
					r.key &&
					" " !== r.key &&
					1 === s.char &&
					0 === s.word &&
					ne.typingStarted(),
					384 & e.$$.dirty && s.char === o[s.word].length - 1 && ne.log(),
					2 & e.$$.dirty && c(f, (a = l.speed)),
					2 & e.$$.dirty && c(h, (d = l.time));
			}),
			[a, l, d, u, f, h]
		);
	}
	class qe extends V {
		constructor(e) {
			super(), K(this, e, Se, Me, l, {});
		}
	}
	function Oe(e, t, n) {
		const r = e.slice();
		return (r[2] = t[n]), r;
	}
	function Be(e) {
		let t,
			n,
			r,
			s,
			o,
			a,
			l,
			i,
			c,
			d,
			u,
			f,
			h,
			p = e[2] + "",
			b = e[0][e[2]].speed + "",
			k = e[0][e[2]].typed + "",
			E = 1 === e[0][e[2]].typed ? "time" : "times";
		return {
			c() {
				(t = y("div")),
					(n = y("div")),
					(r = v(p)),
					(s = y("div")),
					(o = y("div")),
					(a = v(b)),
					(l = y("span")),
					(l.textContent = "WPM"),
					(i = y("div")),
					(c = v("typed ")),
					(d = v(k)),
					(u = v(" ")),
					(f = v(E)),
					$(n, "class", "name svelte-1tksfjy"),
					$(l, "class", "unit svelte-1tksfjy"),
					$(o, "class", "speed svelte-1tksfjy"),
					$(i, "class", "times svelte-1tksfjy"),
					$(s, "class", "stats svelte-1tksfjy"),
					$(
						t,
						"class",
						(h =
							"key " +
							e[0][e[2]].label +
							" " +
							(e[1].key === e[2] ? "pressed" : "") +
							" svelte-1tksfjy")
					);
			},
			m(e, h) {
				g(e, t, h),
					m(t, n),
					m(n, r),
					m(t, s),
					m(s, o),
					m(o, a),
					m(o, l),
					m(s, i),
					m(i, c),
					m(i, d),
					m(i, u),
					m(i, f);
			},
			p(e, n) {
				1 & n && p !== (p = e[2] + "") && x(r, p),
					1 & n && b !== (b = e[0][e[2]].speed + "") && x(a, b),
					1 & n && k !== (k = e[0][e[2]].typed + "") && x(d, k),
					1 & n && E !== (E = 1 === e[0][e[2]].typed ? "time" : "times") && x(f, E),
					3 & n &&
						h !==
							(h =
								"key " +
								e[0][e[2]].label +
								" " +
								(e[1].key === e[2] ? "pressed" : "") +
								" svelte-1tksfjy") &&
						$(t, "class", h);
			},
			d(e) {
				e && w(t);
			}
		};
	}
	function Le(t) {
		let n,
			r = Object.keys(t[0]),
			s = [];
		for (let e = 0; e < r.length; e += 1) s[e] = Be(Oe(t, r, e));
		return {
			c() {
				n = y("div");
				for (let e = 0; e < s.length; e += 1) s[e].c();
				$(n, "class", "keys svelte-1tksfjy");
			},
			m(e, t) {
				g(e, n, t);
				for (let e = 0; e < s.length; e += 1) s[e].m(n, null);
			},
			p(e, [t]) {
				if (3 & t) {
					let o;
					for (r = Object.keys(e[0]), o = 0; o < r.length; o += 1) {
						const a = Oe(e, r, o);
						s[o] ? s[o].p(a, t) : ((s[o] = Be(a)), s[o].c(), s[o].m(n, null));
					}
					for (; o < s.length; o += 1) s[o].d(1);
					s.length = r.length;
				}
			},
			i: e,
			o: e,
			d(e) {
				e && w(n), b(s, e);
			}
		};
	}
	function Te(e, t, n) {
		let r, s;
		return i(e, ie, (e) => n(0, (r = e))), i(e, ue, (e) => n(1, (s = e))), [r, s];
	}
	class Pe extends V {
		constructor(e) {
			super(), K(this, e, Te, Le, l, {});
		}
	}
	let We = ["HAXXIUM", "LASERWAVE", "XXPRESSO", "DODECAHEDRON"],
		He = [
			{
				bodybg: "#07110a",
				activeword: "#1E3B28",
				activechar: "#A0FF2B",
				typedword: "#2C4D39",
				fontcolor: "#27FF27",
				error: "#E6F8FC",
				fastest: "#27FF27",
				fast: "#acce3d",
				normal: "#FFF216",
				slow: "#FB885C",
				slowest: "#DA274B"
			},
			{
				bodybg: "#200401",
				activeword: "#410802",
				typedword: "#900",
				activechar: "#fa7769",
				fontcolor: "#faa",
				error: "#F1F1F1",
				fastest: "#fbfbfa",
				fast: "#faa",
				normal: "#f77",
				slow: "#f44",
				slowest: "#f00"
			},
			{
				bodybg: "#171717",
				activeword: "#4E3F35",
				activechar: "#CE9A48",
				typedword: "#5E5452",
				fontcolor: "#E5AB6B",
				error: "#E6F8FC",
				fastest: "#00cec9",
				fast: "#55efc4",
				normal: "#81ecec",
				slow: "#74b9ff",
				slowest: "#ff7675"
			},
			{
				bodybg: "#100019",
				activeword: "#360850",
				typedword: "#581B7B",
				activechar: "#fbfbfa",
				fontcolor: "#E2ACFF",
				error: "#FF329B",
				fastest: "#fbfbfa",
				fast: "#642887",
				normal: "#EF50A2",
				slow: "#D62D7E",
				slowest: "#BE0D5D"
			}
		],
		Ne = -1;
	var Xe = () => {
		Ne = Ne == He.length - 1 ? 0 : Ne + 1;
		for (let e in He[Ne])
			document.documentElement.style.setProperty("--" + e, He[Ne][e]),
				document.body.classList.add("fade-in"),
				(document.querySelector(".theme-name").textContent = We[Ne]),
				setTimeout(() => {
					document.body.classList.remove("fade-in");
				}, 1e3);
	};
	function Ie(t) {
		let n, r, s, a, l;
		const i = new qe({}),
			c = new xe({}),
			d = new Pe({});
		return {
			c() {
				N(i.$$.fragment),
					N(c.$$.fragment),
					N(d.$$.fragment),
					(n = y("div")),
					(n.textContent = "reset"),
					(r = y("div")),
					(r.innerHTML =
						'<div class="s1"></div><div class="s2 svelte-1no0zd6"></div><div class="s3 svelte-1no0zd6"></div><div class="s4 svelte-1no0zd6"></div><div class="theme-name svelte-1no0zd6"></div><div class="tip svelte-1no0zd6">theme switcher</div>'),
					(s = y("div")),
					(s.innerHTML =
						'<div class="app svelte-1no0zd6">cybertype</div><div class="info svelte-1no0zd6"><div class="app svelte-1no0zd6"><div class="version"> V.1.0</div></div><div class="creator"><p class="svelte-1no0zd6"> Designed by</p><a href="https://twitter.com/Manan__Tank" target="black" class="svelte-1no0zd6"> Manan Tank</a></div></div>'),
					$(n, "class", "reset svelte-1no0zd6"),
					$(r, "class", "theme-switch svelte-1no0zd6"),
					$(s, "class", "cybertype svelte-1no0zd6");
			},
			m(e, t, u) {
				X(i, e, t),
					X(c, e, t),
					X(d, e, t),
					g(e, n, t),
					g(e, r, t),
					g(e, s, t),
					(a = !0),
					u && o(l),
					(l = [k(n, "click", Re), k(r, "click", Xe)]);
			},
			p: e,
			i(e) {
				a ||
					(W(i.$$.fragment, e), W(c.$$.fragment, e), W(d.$$.fragment, e), (a = !0));
			},
			o(e) {
				H(i.$$.fragment, e), H(c.$$.fragment, e), H(d.$$.fragment, e), (a = !1);
			},
			d(e) {
				I(i, e), I(c, e), I(d, e), e && w(n), e && w(r), e && w(s), o(l);
			}
		};
	}
	function Re() {
		ue.reset(),
			te.reset(),
			Z.reset(),
			ge.reset(),
			ge.stop(),
			ie.reset(),
			ne.reset();
	}
	function Ke(e) {
		return C(Xe), [];
	}
	return new (class extends V {
		constructor(e) {
			super(), K(this, e, Ke, Ie, l, {});
		}
	})({ target: document.body });
})();
