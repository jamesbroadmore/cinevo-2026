import { o as __toESM } from "../_runtime.mjs";
import { V as require_react, _ as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-DalfzU5e.mjs";
import { a as isVideoFile, c as pickFeatured, f as remoteTitle, g as useCinevo, h as titleById, i as genresIn, l as playableCount, m as similarTo, n as byMood, o as libraryPool, p as scanFileList, r as filterCatalog, s as mediaUrl, t as THEMES, u as recentlyAdded } from "./cinevo-store-CJ6n_t4z.mjs";
import { n as reconnectFolders, r as saveFolderHandle } from "./folder-handles-B1UqsjdR.mjs";
import { a as plexAuthUrl, o as plexClientId, t as connectionKind } from "./plex-wJDAkLsa.mjs";
import { A as HardDrive, C as ListPlus, E as LibraryBig, L as ChevronLeft, N as Film, O as House, P as Expand, R as Check, S as LoaderCircle, a as Tv, c as Star, g as Search, h as Server, j as FolderPlus, k as Heart, m as Settings2, n as VolumeX, p as Share2, r as Volume2, s as Trash2, t as X, u as Shuffle, v as Play, x as Menu, y as Pause, z as Captions } from "../_libs/lucide-react.mjs";
import { n as Logo, r as cn } from "./router-Bpuhefzb.mjs";
import { a as importNodeSections, c as nodeStreamUrl, n as addNodeConnection, o as listNodeSections, r as addNodeFolder, t as InstallerCards } from "./installers-CL90IN_J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-WdsQYGhA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LIBRARY_NAV = [
	{
		id: "stage",
		label: "Home",
		icon: House
	},
	{
		id: "movies",
		label: "Movies",
		icon: Film
	},
	{
		id: "shows",
		label: "Series",
		icon: Tv
	},
	{
		id: "sidebar",
		label: "Add library",
		icon: LibraryBig
	}
];
function Shell({ children, overlays }) {
	const room = useCinevo((s) => s.room);
	const setRoom = useCinevo((s) => s.setRoom);
	const setSearchOpen = useCinevo((s) => s.setSearchOpen);
	const setSettingsOpen = useCinevo((s) => s.setSettingsOpen);
	const setCoreOpen = useCinevo((s) => s.setCoreOpen);
	const night = useCinevo((s) => s.prefs.nightMode);
	const zen = useCinevo((s) => s.prefs.zenMode);
	const favorites = useCinevo((s) => s.favorites);
	const [drawer, setDrawer] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!LIBRARY_NAV.some((item) => item.id === room) && room !== "browse") setRoom("stage");
	}, [room, setRoom]);
	(0, import_react.useEffect)(() => {
		if (!drawer) return;
		const onKey = (e) => {
			if (e.key === "Escape") setDrawer(false);
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, [drawer]);
	const go = (id) => {
		setRoom(id);
		setDrawer(false);
	};
	const sidebar = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: cn("cinevo-sidebar", drawer && "is-open"),
		"aria-label": "CINEVO navigation",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cinevo-sidebar__topline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "CINEVO home",
					className: "sidebar-brand",
					onClick: () => setDrawer(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						size: "sm",
						tagline: false
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Close navigation",
					className: "sidebar-close md:hidden",
					onClick: () => setDrawer(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "sidebar-search",
				onClick: () => {
					setSearchOpen(true);
					setDrawer(false);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						size: 16,
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Search" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "⌘K" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "sidebar-nav",
				"aria-label": "Library",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sidebar-label",
						children: "Library"
					}),
					LIBRARY_NAV.map(({ label, id, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: cn(room === id && "is-active"),
						onClick: () => go(id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							size: 16,
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
					}, label)),
					favorites.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: cn(room === "sidebar" && "is-active"),
						onClick: () => go("movies"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							size: 16,
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "My list" })]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sidebar-section",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sidebar-label",
						children: "Account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setCoreOpen(true);
							setDrawer(false);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sharing & privacy" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setSettingsOpen(true);
							setDrawer(false);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Settings" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sidebar-footer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sidebar-privacy-note",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sidebar-privacy-dot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Private by default" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Only libraries you add" })] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "sidebar-logout",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sidebar-exit-mark",
						"aria-hidden": "true",
						children: "←"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back to site" })]
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("cinevo-house", night && "cinevo-night", zen && "cinevo-zen"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "house-still" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "house-ambient" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sidebar-mobile-bar md:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Open navigation",
						onClick: () => setDrawer(true),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						size: "sm",
						tagline: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Search",
						onClick: () => setSearchOpen(true),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 18 })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cinevo-sidebar-desktop max-md:hidden",
				children: sidebar
			}),
			drawer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sidebar-backdrop md:hidden",
				onMouseDown: () => setDrawer(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					onMouseDown: (e) => e.stopPropagation(),
					children: sidebar
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: cn("house-main", room !== "stage" && "house-main--page"),
				children
			}),
			overlays
		]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var askCinevo = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	if (!input || typeof input !== "object" || typeof input.question !== "string") throw new Error("Invalid concierge request");
	const titles = Array.isArray(input.titles) ? input.titles.slice(0, 80).map((title) => ({
		title: String(title?.title ?? "").trim().slice(0, 180),
		year: String(title?.year ?? "").slice(0, 20),
		kind: String(title?.kind ?? "").slice(0, 40),
		genre: String(title?.genre ?? "").slice(0, 120),
		rating: Number.isFinite(Number(title?.rating)) ? Number(title.rating) : 0,
		synopsis: String(title?.synopsis ?? "").slice(0, 600)
	})).filter((title) => title.title) : [];
	return {
		question: input.question.trim().slice(0, 400),
		titles
	};
}).handler(createSsrRpc("7ebb63b2bc6bc267a35ed0fda7ece5b3241b752253db5bd836ae7020e8c799f4"));
function applySourceFilter(filter, local, remote) {
	if (filter === "folder") return local;
	if (filter === "plex") return remote.filter((t) => t.source === "plex");
	if (filter === "jellyfin") return remote.filter((t) => t.source === "jellyfin");
	return [...local, ...remote];
}
function useLibrary() {
	const local = useCinevo((s) => s.localTitles);
	const remote = useCinevo((s) => s.remoteTitles);
	const filter = useCinevo((s) => s.sourceFilter);
	return (0, import_react.useMemo)(() => applySourceFilter(filter, local, remote), [
		local,
		remote,
		filter
	]);
}
function PosterCard({ title }) {
	const progress = useCinevo((s) => s.progress[title.id]);
	const fav = useCinevo((s) => s.favorites.includes(title.id));
	const openTitle = useCinevo((s) => s.openTitle);
	const play = useCinevo((s) => s.play);
	const toggleFavorite = useCinevo((s) => s.toggleFavorite);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "poster-frame rounded-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => openTitle(title.id),
					"aria-label": `Open ${title.title}`,
					className: "block w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: title.poster,
						alt: "",
						className: "aspect-2/3 w-full object-cover"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "poster-shade" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "poster-wash" }),
				progress != null && progress > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-0.5 bg-cine-well",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
						className: "block h-full bg-cine-cyan",
						style: { width: `${progress}%` }
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `Play ${title.title}`,
					onClick: () => play(title.id),
					className: "poster-play",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
						size: 16,
						fill: "currentColor"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "poster-meta mt-2 flex items-start justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => openTitle(title.id),
				className: "min-w-0 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "truncate font-ui text-sm font-semibold tracking-wide",
					children: title.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-cine-faint",
					children: title.rating > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
							size: 10,
							className: "mr-1 inline text-cine-amber",
							fill: "currentColor"
						}),
						title.rating.toFixed(1),
						" · ",
						title.year
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						title.sourceLabel || title.source,
						" · ",
						title.year
					] })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": fav ? "Remove from My List" : "Add to My List",
					className: cn("flex size-11 items-center justify-center rounded-md", fav ? "text-cine-cyan" : "text-cine-muted hover:text-cine-text"),
					onClick: () => toggleFavorite(title.id),
					children: fav ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListPlus, { size: 16 })
				})
			})]
		})]
	});
}
function Rail({ heading, titles, empty }) {
	if (!titles.length) {
		if (!empty) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "px-1 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xs font-bold tracking-[0.22em] text-cine-muted",
				children: heading
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-cine-faint",
				children: empty
			})]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-extrabold tracking-tight text-cine-text",
				children: heading
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs text-cine-faint",
				children: titles.length
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rail-scroll",
			children: titles.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rail-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PosterCard, { title: t })
			}, t.id))
		})]
	});
}
function requireText(value, field, max = 512) {
	if (typeof value !== "string") throw new Error(`Invalid ${field}`);
	const result = value.trim();
	if (!result || result.length > max) throw new Error(`Invalid ${field}`);
	return result;
}
function safeBaseUrl(value) {
	const raw = requireText(value, "server URL");
	const url = new URL(raw);
	if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) throw new Error("Invalid server URL");
	return url.toString().replace(/\/$/, "");
}
var plexStartPin = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => ({ clientId: requireText(input?.clientId, "client id", 160) })).handler(createSsrRpc("8fdebd237b20b8988d4b74313d86857020fb83c844c4c09a52255338ac0a62c2"));
var plexPollPin = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	const pinId = Number(input?.pinId);
	if (!Number.isInteger(pinId) || pinId < 1) throw new Error("Invalid Plex pin");
	return {
		clientId: requireText(input?.clientId, "client id", 160),
		pinId
	};
}).handler(createSsrRpc("b1a629896a5a292418e73f888427598ab0a902c8f963c938f2e4cd8a5ed40586"));
var plexListServers = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => ({
	clientId: requireText(input?.clientId, "client id", 160),
	token: requireText(input?.token, "token", 512)
})).handler(createSsrRpc("fe32bd140d3583c344ef891531d16c93349abb6d1e02a5fadc3e79e692953852"));
var plexOpenServer = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	const clientId = requireText(input?.clientId, "client id", 160);
	const token = requireText(input?.token, "token", 512);
	if (!input?.server || !Array.isArray(input.server.connections)) throw new Error("Invalid Plex server");
	return {
		clientId,
		token,
		server: {
			...input.server,
			connections: input.server.connections.slice(0, 12).map((connection) => ({
				...connection,
				uri: safeBaseUrl(connection.uri)
			}))
		}
	};
}).handler(createSsrRpc("3b4bb4c4449e4f7cbed728d66d982ae6de5dcd43acca1136797adc964162c2ee"));
var plexImportSections = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	const sectionKeys = Array.isArray(input?.sectionKeys) ? input.sectionKeys.slice(0, 12).map((key) => requireText(key, "section", 120)) : [];
	if (!sectionKeys.length) throw new Error("Select at least one library");
	return {
		clientId: requireText(input?.clientId, "client id", 160),
		token: requireText(input?.token, "token", 512),
		uri: safeBaseUrl(input?.uri),
		sourceLabel: requireText(input?.sourceLabel, "source label", 120),
		sectionKeys
	};
}).handler(createSsrRpc("a2c3c4f890996a4f965cfe90be75b904e1ef7c0d41c7a73da07e74c8d6682ac0"));
function PlexConnect() {
	const plexToken = useCinevo((s) => s.plexToken);
	const plexUser = useCinevo((s) => s.plexUser);
	const plexServers = useCinevo((s) => s.plexServers);
	const plexClient = useCinevo((s) => s.plexClientId);
	const setPlexSession = useCinevo((s) => s.setPlexSession);
	const setPlexServers = useCinevo((s) => s.setPlexServers);
	const clearPlexSession = useCinevo((s) => s.clearPlexSession);
	const addRemoteTitles = useCinevo((s) => s.addRemoteTitles);
	const [pending, setPending] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [pin, setPin] = (0, import_react.useState)(null);
	const [opened, setOpened] = (0, import_react.useState)(null);
	const [picked, setPicked] = (0, import_react.useState)([]);
	const [advanced, setAdvanced] = (0, import_react.useState)(false);
	const [manualUrl, setManualUrl] = (0, import_react.useState)("http://127.0.0.1:32400");
	const [manualToken, setManualToken] = (0, import_react.useState)("");
	const pollRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		return () => {
			if (pollRef.current) window.clearInterval(pollRef.current);
		};
	}, []);
	const clientId = () => {
		const existing = plexClient || plexClientId();
		if (!plexClient && existing) useCinevo.setState({ plexClientId: existing });
		return existing;
	};
	const refreshServers = async (token = plexToken, user = plexUser) => {
		if (!token) return;
		setPending(true);
		try {
			const res = await plexListServers({ data: {
				clientId: clientId(),
				token
			} });
			if (!res.ok) {
				setMessage(res.error);
				return;
			}
			setPlexSession(token, res.username || user, res.servers, clientId());
			setPlexServers(res.servers);
			setMessage(res.servers.length ? `${res.servers.length} Plex ${res.servers.length === 1 ? "server" : "servers"} on this account.` : "Signed in, but no media servers are sharing with this Plex account yet.");
		} finally {
			setPending(false);
		}
	};
	const startSignIn = async () => {
		setPending(true);
		setMessage("");
		try {
			const res = await plexStartPin({ data: { clientId: clientId() } });
			if (!res.ok) {
				setMessage(res.error);
				return;
			}
			setPin({
				id: res.id,
				code: res.code
			});
			const url = plexAuthUrl(clientId(), res.code);
			window.open(url, "cinevo-plex", "width=560,height=760");
			if (pollRef.current) window.clearInterval(pollRef.current);
			const started = Date.now();
			pollRef.current = window.setInterval(() => {
				(async () => {
					if (Date.now() - started > 12e4) {
						if (pollRef.current) window.clearInterval(pollRef.current);
						setPin(null);
						setMessage("Plex sign-in timed out. Try again.");
						return;
					}
					const poll = await plexPollPin({ data: {
						clientId: clientId(),
						pinId: res.id
					} });
					if (!poll.ok) return;
					if (!poll.token) return;
					if (pollRef.current) window.clearInterval(pollRef.current);
					setPin(null);
					await refreshServers(poll.token, "");
				})();
			}, 1600);
		} finally {
			setPending(false);
		}
	};
	const openServer = async (server) => {
		if (!plexToken) return;
		setPending(true);
		setMessage(`Reaching ${server.name}…`);
		try {
			const res = await plexOpenServer({ data: {
				clientId: clientId(),
				token: server.accessToken || plexToken,
				server
			} });
			if (!res.ok) {
				setMessage(res.error);
				return;
			}
			setOpened({
				server,
				uri: res.uri,
				kind: res.kind,
				sections: res.sections
			});
			setPicked(res.sections.map((s) => s.key));
			setMessage(res.sections.length ? `Connected to ${server.name} over ${res.kind}. Choose libraries to index.` : `${server.name} is online, but it has no libraries yet.`);
		} finally {
			setPending(false);
		}
	};
	const importPicked = async () => {
		if (!opened || !picked.length) return;
		setPending(true);
		try {
			const token = opened.server.accessToken || plexToken;
			const res = await plexImportSections({ data: {
				clientId: clientId(),
				token,
				uri: opened.uri,
				sourceLabel: opened.server.name,
				sectionKeys: picked
			} });
			if (!res.ok) {
				setMessage(res.error);
				return;
			}
			const titles = res.titles.map((t) => remoteTitle({
				id: t.id,
				title: t.title,
				year: t.year,
				kind: t.kind === "series" ? "series" : "movie",
				synopsis: t.synopsis,
				source: "plex",
				sourceLabel: opened.server.name,
				genre: t.genre
			}));
			addRemoteTitles(titles, {
				id: `plex-${opened.server.id}`,
				kind: "plex",
				name: opened.server.name,
				baseUrl: opened.uri,
				selected: true,
				count: titles.length
			});
			setOpened(null);
			setMessage(`Imported ${titles.length} titles from ${opened.server.name}. Playback stays on Plex.`);
		} finally {
			setPending(false);
		}
	};
	const connectManual = async () => {
		const token = manualToken.trim() || plexToken;
		if (!token) {
			setMessage("Paste a Plex token, or sign in first.");
			return;
		}
		const server = {
			id: `manual-${hash(manualUrl)}`,
			name: "Plex (manual)",
			owned: true,
			productVersion: "",
			platform: "",
			accessToken: token,
			publicAddress: "",
			presence: true,
			connections: [{
				uri: manualUrl.replace(/\/$/, ""),
				local: true,
				relay: false,
				protocol: manualUrl.startsWith("https") ? "https" : "http",
				address: "",
				port: 32400
			}]
		};
		await openServer(server);
	};
	const owned = plexServers.filter((s) => s.owned);
	const shared = plexServers.filter((s) => !s.owned);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "glass rounded-xl p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, {
				className: "text-cine-cyan",
				size: 20
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-lg font-semibold tracking-tight",
				children: "Plex"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-cine-faint",
				children: "Sign in to list every server on the account — home, shared, or remote."
			}),
			plexToken ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-cine-text",
					children: ["Signed in as ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: plexUser || "Plex" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => void refreshServers(),
						disabled: pending,
						className: "h-11 rounded-md border border-cine-border px-3 font-ui text-sm",
						children: "Refresh"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							clearPlexSession();
							setOpened(null);
							setMessage("Signed out of Plex.");
						},
						className: "h-11 rounded-md border border-cine-border px-3 font-ui text-sm",
						children: "Sign out"
					})]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => void startSignIn(),
				disabled: pending,
				className: "mt-3 h-11 w-full rounded-md bg-cine-cyan font-ui font-bold text-cine-bg",
				children: pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
					className: "mx-auto animate-spin",
					size: 16
				}) : "Sign in with Plex"
			}),
			pin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 rounded-md bg-cine-well px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-ui text-[11px] uppercase tracking-[0.22em] text-cine-muted",
						children: "Plex pin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-3xl font-extrabold tracking-[0.18em]",
						children: pin.code
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-cine-faint",
						children: [
							"Approve CINEVO at",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-cine-cyan",
								href: plexAuthUrl(clientId(), pin.code),
								target: "_blank",
								rel: "noreferrer",
								children: "plex.tv"
							}),
							". Waiting for the account…"
						]
					})
				]
			}) : null,
			owned.length || shared.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-3",
				children: [owned.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerGroup, {
					heading: "Your servers",
					servers: owned,
					pending,
					onOpen: openServer
				}) : null, shared.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerGroup, {
					heading: "Shared with you",
					servers: shared,
					pending,
					onOpen: openServer
				}) : null]
			}) : plexToken && !pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-cine-faint",
				children: "No servers yet. Refresh after Plex finishes sharing."
			}) : null,
			opened ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-md bg-cine-well p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-ui text-[11px] uppercase tracking-[0.18em] text-cine-cyan",
						children: [
							opened.server.name,
							" · ",
							opened.kind
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 space-y-2",
						children: opened.sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex min-h-11 items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-ui",
								children: [s.title, s.type ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 text-xs text-cine-faint",
									children: s.type
								}) : null]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "size-5 accent-cine-cyan",
								checked: picked.includes(s.key),
								onChange: (e) => setPicked((cur) => e.target.checked ? [...cur, s.key] : cur.filter((k) => k !== s.key))
							})]
						}, s.key))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => void importPicked(),
						disabled: pending || !picked.length,
						className: "mt-3 h-11 w-full rounded-md bg-cine-cyan font-ui font-bold text-cine-bg",
						children: "Add selected to CINEVO"
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-4 text-left text-sm text-cine-faint hover:text-cine-text",
				onClick: () => setAdvanced((v) => !v),
				children: advanced ? "Hide manual connection" : "Connect with a URL and token"
			}),
			advanced ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: manualUrl,
						onChange: (e) => setManualUrl(e.target.value),
						"aria-label": "Plex server address",
						className: "h-11 w-full rounded-md border border-cine-border bg-cine-well px-3 font-mono text-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: manualToken,
						onChange: (e) => setManualToken(e.target.value),
						placeholder: "X-Plex-Token",
						"aria-label": "Plex token",
						className: "h-11 w-full rounded-md border border-cine-border bg-cine-well px-3 font-mono text-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => void connectManual(),
						disabled: pending,
						className: "h-11 w-full rounded-md border border-cine-cyan font-ui font-bold text-cine-cyan",
						children: "Connect this address"
					})
				]
			}) : null,
			message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-cine-cyan",
				children: message
			}) : null
		]
	});
}
function ServerGroup({ heading, servers, pending, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-ui text-[11px] uppercase tracking-[0.18em] text-cine-muted",
		children: heading
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-2 space-y-2",
		children: servers.map((server) => {
			const kinds = [...new Set(server.connections.map((c) => connectionKind(c)))];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				disabled: pending,
				onClick: () => onOpen(server),
				className: "flex min-h-11 w-full items-center justify-between gap-3 rounded-md bg-cine-well px-3 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
					className: "font-ui",
					children: server.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-2 text-xs text-cine-faint",
					children: [
						server.owned ? "Owned" : "Shared",
						kinds.length ? ` · ${kinds.join(" / ")}` : "",
						server.presence ? "" : " · Offline"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-ui text-xs font-semibold uppercase tracking-wider text-cine-cyan",
					children: "View"
				})]
			}) }, server.id);
		})
	})] });
}
function hash(s) {
	let h = 0;
	for (let i = 0; i < s.length; i++) h = h * 31 + s.charCodeAt(i) >>> 0;
	return h.toString(16);
}
function AddLibrary() {
	const sources = useCinevo((s) => s.sources);
	const localTitles = useCinevo((s) => s.localTitles);
	const removeSource = useCinevo((s) => s.removeSource);
	const addFolderTitles = useCinevo((s) => s.addFolderTitles);
	const addRemoteTitles = useCinevo((s) => s.addRemoteTitles);
	const nodeUrl = useCinevo((s) => s.nodeUrl);
	const nodeToken = useCinevo((s) => s.nodeToken);
	const setCoreOpen = useCinevo((s) => s.setCoreOpen);
	const fileRef = (0, import_react.useRef)(null);
	const [pending, setPending] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [folderPath, setFolderPath] = (0, import_react.useState)("");
	const [jfUrl, setJfUrl] = (0, import_react.useState)("http://127.0.0.1:8096");
	const [jfUser, setJfUser] = (0, import_react.useState)("");
	const [jfPass, setJfPass] = (0, import_react.useState)("");
	const [sections, setSections] = (0, import_react.useState)(null);
	const [picked, setPicked] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const onFiles = (event) => {
			const files = event.detail;
			if (Array.isArray(files) && files.length) ingestFiles(files, "Home folder");
		};
		window.addEventListener("cinevo:files", onFiles);
		return () => window.removeEventListener("cinevo:files", onFiles);
	}, []);
	const ingestFiles = (files, name) => {
		const titles = scanFileList(files, name);
		if (!titles.length) {
			setMessage("No video files in that folder. mp4, mkv, mov, webm.");
			return;
		}
		const folder = titles[0].sourceLabel;
		addFolderTitles(titles, {
			id: `src-folder-${folder}`,
			kind: "folder",
			name: folder,
			selected: true,
			count: titles.length
		});
		setMessage(`Indexed ${titles.length} files from ${folder}.`);
	};
	const onFolder = (e) => {
		if (e.target.files?.length) ingestFiles(e.target.files);
		e.target.value = "";
	};
	const pickDirectory = async () => {
		const picker = window.showDirectoryPicker;
		if (!picker) {
			fileRef.current?.click();
			return;
		}
		try {
			const handle = await picker();
			const files = [];
			await walkDir(handle, files);
			ingestFiles(files, handle.name);
			await saveFolderHandle(`src-folder-${handle.name}`, handle, handle.name);
		} catch (err) {
			if (err instanceof DOMException && err.name === "AbortError") return;
			fileRef.current?.click();
		}
	};
	const addPath = async () => {
		if (!folderPath.trim()) return;
		if (!nodeToken) {
			setMessage("Pair CINEVO Node to scan a path on the computer that holds the files.");
			return;
		}
		setPending(true);
		try {
			const res = await addNodeFolder(nodeUrl, nodeToken, folderPath.trim());
			if (!res.ok) {
				setMessage(res.error);
				return;
			}
			const titles = res.titles.map((t, i) => remoteTitle({
				id: t.id || `node-folder-${i}`,
				title: t.title || "Untitled",
				year: t.year,
				source: "plex",
				sourceLabel: res.name,
				synopsis: `Scanned from ${res.name} on CINEVO Node.`,
				genre: "Home library"
			}));
			addFolderTitles(titles.map((t) => ({
				...t,
				source: "folder",
				sourceLabel: res.name,
				genre: "Home library",
				genres: ["Home library", res.name]
			})), {
				id: res.id,
				kind: "folder",
				name: res.name,
				path: folderPath.trim(),
				selected: true,
				count: res.count
			});
			setFolderPath("");
			setMessage(`Scanned ${res.count} files on Node.`);
		} finally {
			setPending(false);
		}
	};
	const connect = async (provider) => {
		if (!nodeToken) {
			setMessage("Pair CINEVO Node first — Jellyfin stays on that computer.");
			return;
		}
		if (!jfUser.trim() || !jfPass) {
			setMessage("Enter your Jellyfin username and password.");
			return;
		}
		setPending(true);
		try {
			const added = await addNodeConnection(nodeUrl, nodeToken, {
				provider,
				baseUrl: jfUrl.trim(),
				username: jfUser.trim(),
				password: jfPass
			});
			if (!added.ok) {
				setMessage(added.error);
				return;
			}
			const listed = await listNodeSections(nodeUrl, nodeToken, added.id);
			if (!listed.ok) {
				setMessage(listed.error);
				return;
			}
			setSections({
				connectionId: added.id,
				provider,
				items: listed.sections
			});
			setPicked(listed.sections.map((s) => s.key));
			setMessage(`Connected. Select the sections CINEVO may index.`);
		} finally {
			setPending(false);
		}
	};
	const importPicked = async () => {
		if (!sections || !nodeToken) return;
		setPending(true);
		try {
			const res = await importNodeSections(nodeUrl, nodeToken, sections.connectionId, picked);
			if (!res.ok) {
				setMessage(res.error);
				return;
			}
			const titles = res.titles.map((t) => remoteTitle({
				id: t.id,
				title: t.title,
				year: t.year,
				kind: t.kind === "series" ? "series" : "movie",
				synopsis: t.synopsis,
				source: sections.provider,
				sourceLabel: t.sourceLabel || sections.provider,
				genre: t.genre
			}));
			addRemoteTitles(titles, {
				id: sections.connectionId,
				kind: sections.provider,
				name: sections.provider === "plex" ? "Plex" : "Jellyfin",
				selected: true,
				count: titles.length
			});
			setSections(null);
			setMessage(`Imported ${titles.length} titles. Playback stays on your server.`);
		} finally {
			setPending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: fileRef,
				type: "file",
				multiple: true,
				webkitdirectory: "",
				className: "hidden",
				"aria-label": "Select media folder",
				onChange: onFolder
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "glass rounded-xl p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderPlus, {
								className: "text-cine-cyan",
								size: 20
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-lg font-semibold tracking-tight",
								children: "This computer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-cine-faint",
								children: "Choose a folder of video files. We index names only — files never leave this browser."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => void pickDirectory(),
								className: "mt-4 h-11 w-full rounded-md bg-cine-cyan font-ui font-bold text-cine-bg",
								children: "Select folder"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: folderPath,
									onChange: (e) => setFolderPath(e.target.value),
									placeholder: "/Movies or D:\\\\Media",
									"aria-label": "Folder path on Node",
									className: "h-11 min-w-0 flex-1 rounded-md border border-cine-border bg-cine-well px-3 font-mono text-sm"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => void addPath(),
									disabled: pending,
									className: "h-11 rounded-md border border-cine-cyan px-3 font-ui font-bold text-cine-cyan",
									children: "Scan"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlexConnect, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "glass rounded-xl p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardDrive, {
								className: "text-cine-cyan",
								size: 20
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-lg font-semibold tracking-tight",
								children: "Jellyfin"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-cine-faint",
								children: "Needs a paired CINEVO Node. Password stays on that computer."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: jfUrl,
								onChange: (e) => setJfUrl(e.target.value),
								"aria-label": "Jellyfin server address",
								className: "mt-3 h-11 w-full rounded-md border border-cine-border bg-cine-well px-3 font-mono text-sm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: jfUser,
								onChange: (e) => setJfUser(e.target.value),
								placeholder: "Username",
								"aria-label": "Jellyfin username",
								className: "mt-2 h-11 w-full rounded-md border border-cine-border bg-cine-well px-3 font-ui"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								value: jfPass,
								onChange: (e) => setJfPass(e.target.value),
								placeholder: "Password",
								"aria-label": "Jellyfin password",
								className: "mt-2 h-11 w-full rounded-md border border-cine-border bg-cine-well px-3 font-ui"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => void connect("jellyfin"),
								disabled: pending,
								className: "mt-3 h-11 w-full rounded-md border border-cine-cyan font-ui font-bold text-cine-cyan",
								children: "Connect Jellyfin"
							})
						]
					})
				]
			}),
			!nodeToken ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-cine-muted",
				children: [
					"Plex signs in from this page. Jellyfin and disk paths on another computer need",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/node",
						className: "text-cine-cyan",
						onClick: () => setCoreOpen(false),
						children: "CINEVO Node"
					}),
					"."
				]
			}) : null,
			sections ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-ui text-xs tracking-[0.18em] text-cine-cyan",
						children: "SELECT SECTIONS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 space-y-2",
						children: sections.items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex min-h-11 items-center justify-between gap-3 rounded-md bg-cine-well px-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-ui",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "size-5 accent-cine-cyan",
								checked: picked.includes(s.key),
								onChange: (e) => setPicked((cur) => e.target.checked ? [...cur, s.key] : cur.filter((k) => k !== s.key))
							})]
						}, s.key))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => void importPicked(),
						disabled: pending || !picked.length,
						className: "mt-4 h-11 rounded-md bg-cine-cyan px-5 font-ui font-bold text-cine-bg",
						children: "Add selected to CINEVO"
					})
				]
			}) : null,
			localTitles.length && playableCount() === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-xl px-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-cine-muted",
					children: "Titles are indexed, but this browser session has no files. Reconnect the folder to play."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-3 h-11 rounded-md bg-cine-cyan px-4 font-ui font-bold text-cine-bg",
					onClick: async () => {
						const n = await reconnectFolders();
						if (n) {
							useCinevo.setState({ localTitles: [...useCinevo.getState().localTitles] });
							setMessage(`Reconnected ${n} files.`);
						} else fileRef.current?.click();
					},
					children: "Reconnect folders"
				})]
			}) : null,
			sources.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-ui text-xs tracking-[0.18em] text-cine-cyan",
					children: "ACTIVE SOURCES"
				}), sources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass flex items-center justify-between rounded-xl px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: "font-ui capitalize",
						children: s.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs text-cine-faint",
						children: [
							s.kind,
							" · ",
							s.count,
							" titles ",
							s.path ? `· ${s.path}` : ""
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": `Remove ${s.name}`,
						className: "flex size-11 items-center justify-center text-cine-muted hover:text-cine-danger",
						onClick: () => removeSource(s.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
					})]
				}, s.id))]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl border border-dashed border-cine-border px-4 py-5 text-sm text-cine-faint",
				children: "Nothing added yet. Select a folder, sign in with Plex, or pair Node for Jellyfin."
			}),
			message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-cine-cyan",
				children: message
			}) : null
		]
	});
}
async function walkDir(dir, out, depth = 0) {
	if (depth > 6 || out.length > 80) return;
	for await (const entry of dir.values()) {
		if (out.length > 80) return;
		if (entry.kind === "file") {
			const file = await entry.getFile();
			if (isVideoFile(file.name)) out.push(file);
		} else if (entry.kind === "directory") await walkDir(entry, out, depth + 1);
	}
}
var SOURCES = [
	["all", "All"],
	["folder", "Folders"],
	["plex", "Plex"],
	["jellyfin", "Jellyfin"]
];
function HeroActions({ onPlay, playLabel, onMore, moreLabel = "More info", extra, playIcon = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "house-actions",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onPlay,
				className: "house-btn house-btn--play",
				children: [
					playIcon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
						size: 16,
						fill: "currentColor"
					}) : null,
					" ",
					playLabel
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onMore,
				className: "house-btn house-btn--ghost",
				children: moreLabel
			}),
			extra
		]
	});
}
function EmptyLibrary() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "setup-home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "setup-home__intro",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "house-kicker",
					children: "Get started"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Add your first library" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede",
					children: "Choose one source. CINEVO stays empty until you do — no sample movies, no catalogue."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddLibrary, {})]
	});
}
function StageRoom() {
	const play = useCinevo((s) => s.play);
	const openTitle = useCinevo((s) => s.openTitle);
	const progress = useCinevo((s) => s.progress);
	const favorites = useCinevo((s) => s.favorites);
	const tonight = useCinevo((s) => s.tonight);
	const mood = useCinevo((s) => s.mood);
	const shufflePlay = useCinevo((s) => s.shufflePlay);
	const setCoreOpen = useCinevo((s) => s.setCoreOpen);
	const aiConsent = useCinevo((s) => s.aiConsent);
	const sourceFilter = useCinevo((s) => s.sourceFilter);
	const setSourceFilter = useCinevo((s) => s.setSourceFilter);
	const sources = useCinevo((s) => s.sources);
	const library = useLibrary();
	const [question, setQuestion] = (0, import_react.useState)("");
	const [answer, setAnswer] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	const filtered = (0, import_react.useMemo)(() => {
		if (sourceFilter === "all") return library;
		return library.filter((t) => t.source === sourceFilter);
	}, [library, sourceFilter]);
	const pool = byMood(mood, filtered);
	const hero = pickFeatured({
		mood,
		progress,
		tonight,
		pool: filtered
	});
	const heroProgress = hero ? progress[hero.id] ?? 0 : 0;
	const continueWatching = filtered.filter((t) => {
		const p = progress[t.id];
		return p != null && p > 0 && p < 100;
	});
	const added = recentlyAdded(8, pool);
	const addedIds = new Set(added.map((t) => t.id));
	const myList = filtered.filter((t) => favorites.includes(t.id));
	const suggestions = pool.filter((t) => !favorites.includes(t.id) && !addedIds.has(t.id)).slice(0, 8);
	const queued = tonight.map((id) => titleById(id)).filter((t) => Boolean(t));
	const ask = async () => {
		if (!question.trim() || pending) return;
		if (!aiConsent) {
			setCoreOpen(true, "ai");
			return;
		}
		setPending(true);
		try {
			const res = await askCinevo({ data: {
				question,
				titles: pool.map((t) => ({
					title: t.title,
					year: t.year,
					kind: t.kind,
					genre: t.genre,
					rating: t.rating,
					synopsis: t.synopsis
				}))
			} });
			if (res.ok) setAnswer(res.text.replace(/\*\*/g, ""));
			else setAnswer(res.error);
		} finally {
			setPending(false);
		}
	};
	if (!library.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyLibrary, {});
	const still = hero?.still || "/stills/hero-theater.jpg";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "house-hero",
		"aria-labelledby": "featured-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: still,
				alt: "",
				className: "house-hero__art"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "house-hero__shade" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "house-hero__copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "house-kicker",
						children: hero ? "Featured" : "Your library"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						id: "featured-title",
						children: hero ? hero.title : "Ready when you are"
					}),
					hero ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "house-meta",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hero.year }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hero.runtime }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hero.genre }),
								hero.rating > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										size: 12,
										className: "inline text-cine-amber",
										fill: "currentColor"
									}),
									" ",
									hero.rating.toFixed(1)
								] })] }) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede",
							children: hero.synopsis
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroActions, {
							onPlay: () => play(hero.id),
							playLabel: heroProgress > 0 && heroProgress < 100 ? "Resume" : "Play",
							onMore: () => openTitle(hero.id),
							extra: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: shufflePlay,
								className: "house-btn house-btn--ghost",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { size: 16 }), " Shuffle"]
							})
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede",
						children: "Pick a title from the rows below."
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "house-stage",
		children: [
			sources.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "house-sources",
				role: "tablist",
				"aria-label": "Sources",
				children: SOURCES.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					"aria-selected": sourceFilter === id,
					onClick: () => setSourceFilter(id),
					className: sourceFilter === id ? "house-chip is-on" : "house-chip",
					children: label
				}, id))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "house-board",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "house-panel",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tonight" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
						className: "font-mono text-xs text-cine-faint",
						children: [tonight.length, "/8"]
					})] }), queued.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "house-queue",
						children: queued.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => play(t.id),
							"aria-label": `Play ${t.title}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "house-queue__n",
									children: String(i + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: t.poster,
									alt: ""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
									t.runtime,
									" · ",
									progress[t.id] ?? 0,
									"% watched"
								] })] })
							]
						}) }, t.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 px-1 text-sm text-cine-faint",
						children: "Add a title to tonight from any poster."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "house-spot",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "house-kicker",
							children: "Ask CINEVO"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "What should I watch?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Answers use titles already in this library." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								ask();
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: question,
								onChange: (e) => setQuestion(e.target.value),
								maxLength: 400,
								placeholder: "Something short, something new…",
								"aria-label": "Ask CINEVO"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: pending,
								className: "house-btn house-btn--play",
								children: pending ? "Thinking…" : "Ask"
							})]
						}),
						answer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "relative z-10 mt-3 text-sm text-cine-muted",
							children: answer
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "house-rails",
				children: [
					continueWatching.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, {
						heading: "Continue watching",
						titles: continueWatching
					}) : null,
					added.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, {
						heading: "Recently added",
						titles: added
					}) : null,
					suggestions.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, {
						heading: "You might like",
						titles: suggestions
					}) : null,
					myList.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, {
						heading: "My list",
						titles: myList
					}) : null
				]
			})
		]
	})] });
}
function BrowseRoom({ kind: initialKind = "all" }) {
	const [kind, setKind] = (0, import_react.useState)(initialKind);
	const [genre, setGenre] = (0, import_react.useState)("All");
	const setRoom = useCinevo((s) => s.setRoom);
	(0, import_react.useEffect)(() => {
		setKind(initialKind);
		setGenre("All");
	}, [initialKind]);
	const library = useLibrary();
	const titles = (0, import_react.useMemo)(() => filterCatalog({
		kind,
		genre,
		pool: library
	}), [
		kind,
		genre,
		library
	]);
	const genres = genresIn(library);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "house-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "house-kicker",
				children: "Your library"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: initialKind === "movie" ? "Movies" : initialKind === "series" ? "Series" : "Browse" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "lede",
				children: library.length ? `${titles.length} title${titles.length === 1 ? "" : "s"} in view.` : "Nothing here yet."
			})
		] }), library.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "house-sources mb-4",
				children: [
					"all",
					"movie",
					"series"
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setKind(k),
					className: kind === k ? "house-chip is-on" : "house-chip",
					children: k === "all" ? "All" : k === "movie" ? "Movies" : "Series"
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "house-sources mb-8",
				children: genres.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setGenre(g),
					className: genre === g ? "house-chip is-on" : "house-chip",
					children: g
				}, g))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
				children: titles.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PosterCard, { title: t }, t.id))
			}),
			!titles.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-cine-faint",
				children: "No titles match these filters."
			}) : null
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "house-btn house-btn--play",
			onClick: () => setRoom("sidebar"),
			children: "Add a library"
		})]
	});
}
function SidebarRoom() {
	const local = useCinevo((s) => s.localTitles);
	const remote = useCinevo((s) => s.remoteTitles);
	const yours = [...local, ...remote];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "house-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "house-kicker",
					children: "Sources"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Add library" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede",
					children: "Folder on this computer, Plex sign-in, or Jellyfin through CINEVO Node. You can add more than one."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddLibrary, {}),
			yours.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, {
					heading: "In your library",
					titles: yours.slice(0, 12)
				})
			}) : null
		]
	});
}
function RoomSwitch({ room }) {
	switch (room) {
		case "browse": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowseRoom, {});
		case "movies": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowseRoom, { kind: "movie" });
		case "shows": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowseRoom, { kind: "series" });
		case "sidebar": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarRoom, {});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageRoom, {});
	}
}
function Detail() {
	const id = useCinevo((s) => s.selectedId);
	const closeTitle = useCinevo((s) => s.closeTitle);
	const play = useCinevo((s) => s.play);
	const fav = useCinevo((s) => id ? s.favorites.includes(id) : false);
	const queued = useCinevo((s) => id ? s.tonight.includes(id) : false);
	const progress = useCinevo((s) => id ? s.progress[id] ?? 0 : 0);
	const toggleFavorite = useCinevo((s) => s.toggleFavorite);
	const addTonight = useCinevo((s) => s.addTonight);
	const removeTonight = useCinevo((s) => s.removeTonight);
	const addNote = useCinevo((s) => s.addNote);
	const title = titleById(id);
	const [note, setNote] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setNote("");
	}, [id]);
	if (!title) return null;
	const similar = similarTo(title, libraryPool());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "house-detail",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: title.still || "/stills/theater.jpg",
				alt: "",
				className: "house-detail__art"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "house-detail__veil" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "house-detail__inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: closeTitle,
						className: "house-back",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 16 }), " Back"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "house-detail__copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "house-kicker",
								children: title.kind === "series" ? "Series" : "Feature"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: title.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "house-meta",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: title.year }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: title.runtime }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: title.genre }),
									title.rating > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
											size: 12,
											className: "inline text-cine-amber",
											fill: "currentColor"
										}),
										" ",
										title.rating.toFixed(1)
									] })] }) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "house-actions",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => play(title.id),
										className: "house-btn house-btn--play",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
												size: 16,
												fill: "currentColor"
											}),
											" ",
											progress > 0 && progress < 100 ? "Resume" : "Play"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => toggleFavorite(title.id),
										className: "house-btn house-btn--ghost",
										children: [fav ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListPlus, { size: 16 }), fav ? "In My List" : "My List"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => queued ? removeTonight(title.id) : addTonight(title.id),
										className: "house-btn house-btn--ghost",
										children: queued ? "Queued" : "Tonight"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-7 max-w-xl text-cine-muted",
								children: title.synopsis
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 font-ui text-sm text-cine-faint",
								children: [
									title.sourceLabel ? `From ${title.sourceLabel}` : null,
									title.director && title.director !== title.sourceLabel ? ` · Dir. ${title.director}` : null,
									title.cast.length ? ` · ${title.cast.join(" · ")}` : null
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-10 max-w-xl",
						onSubmit: (e) => {
							e.preventDefault();
							addNote(title.id, note);
							setNote("");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "house-kicker",
								children: "A note on this title"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: note,
								onChange: (e) => setNote(e.target.value),
								maxLength: 280,
								placeholder: "Private. Stays on this device.",
								className: "mt-2 h-20 w-full rounded-md border border-cine-border bg-cine-well p-3 font-ui"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "house-btn house-btn--ghost mt-2",
								children: "Save note"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, {
							heading: "Similar titles",
							titles: similar
						})
					})
				]
			})
		]
	});
}
function SearchOverlay() {
	const open = useCinevo((s) => s.searchOpen);
	const setSearchOpen = useCinevo((s) => s.setSearchOpen);
	const openTitle = useCinevo((s) => s.openTitle);
	const [q, setQ] = (0, import_react.useState)("");
	const extra = useCinevo((s) => s.localTitles);
	const remote = useCinevo((s) => s.remoteTitles);
	const results = (0, import_react.useMemo)(() => filterCatalog({
		query: q,
		pool: [...extra, ...remote]
	}).slice(0, 8), [
		q,
		extra,
		remote
	]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-40 flex items-start justify-center bg-cine-bg/80 p-4 pt-20",
		onMouseDown: () => setSearchOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "glass-strong w-full max-w-2xl rounded-xl p-4",
			onMouseDown: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-lg border border-cine-border bg-cine-well px-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							size: 16,
							className: "text-cine-cyan"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							autoFocus: true,
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Search your library",
							"aria-label": "Search your library",
							className: "h-12 flex-1 bg-transparent font-ui text-base outline-none",
							onKeyDown: (e) => {
								if (e.key === "Enter" && q.trim() && results[0]) {
									openTitle(results[0].id);
									setSearchOpen(false);
								}
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Close search",
							className: "flex size-11 items-center justify-center",
							onClick: () => setSearchOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-mono text-xs text-cine-faint",
					children: extra.length + remote.length === 0 ? "Nothing in your library yet." : q.trim() && !results.length ? "No matches." : `${results.length} titles · Enter opens · Esc`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 space-y-1",
					children: results.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex min-h-11 w-full items-center gap-3 rounded-md px-2 py-2 text-left hover:bg-cine-well",
						onClick: () => {
							openTitle(t.id);
							setSearchOpen(false);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: t.poster,
							alt: "",
							className: "h-14 w-10 rounded-sm object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "block font-ui",
							children: t.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
							className: "text-cine-faint",
							children: [
								t.year,
								" · ",
								t.genre
							]
						})] })]
					}, t.id))
				})
			]
		})
	});
}
function SettingsModal() {
	const open = useCinevo((s) => s.settingsOpen);
	const setSettingsOpen = useCinevo((s) => s.setSettingsOpen);
	const prefs = useCinevo((s) => s.prefs);
	const patchPrefs = useCinevo((s) => s.patchPrefs);
	const setTheme = useCinevo((s) => s.setTheme);
	const clearLocalData = useCinevo((s) => s.clearLocalData);
	const [confirmClear, setConfirmClear] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) setConfirmClear(false);
	}, [open]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-40 bg-cine-bg/80 p-4",
		onMouseDown: () => setSettingsOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "glass-strong mx-auto mt-16 max-w-lg rounded-xl p-5",
			onMouseDown: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-4 flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-ui text-xs tracking-[0.18em] text-cine-cyan",
						children: "PREFERENCES"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg tracking-tight",
						children: "Settings"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Close settings",
						onClick: () => setSettingsOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-ui text-xs tracking-[0.18em] text-cine-cyan",
							children: "THEME"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
							children: THEMES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-label": `${t.label} theme`,
								"aria-pressed": prefs.theme === t.id,
								onClick: () => setTheme(t.id),
								className: `flex h-11 flex-col items-center justify-center rounded-md border ${prefs.theme === t.id ? "border-cine-cyan glow-cyan" : "border-cine-border"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
									className: "swatch size-4 rounded-full",
									"data-swatch": t.id
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-ui text-xs",
									children: t.label
								})]
							}, t.id))
						}),
						[
							{
								key: "nightMode",
								label: "OLED night",
								hint: "True black surfaces"
							},
							{
								key: "zenMode",
								label: "Zen mode",
								hint: "Hide poster metadata"
							},
							{
								key: "focusMode",
								label: "Focus player",
								hint: "Quieter playback chrome"
							}
						].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center justify-between gap-4 rounded-lg bg-cine-surface px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "block font-ui text-sm",
								children: row.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								className: "text-cine-faint",
								children: row.hint
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: prefs[row.key],
								onChange: (e) => patchPrefs({ [row.key]: e.target.checked }),
								className: "size-5 accent-cine-cyan"
							})]
						}, row.key))
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-lg border border-cine-danger/40 bg-cine-surface px-3 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "block font-ui text-sm",
							children: "Local data"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-cine-faint",
							children: "This clears watch progress, My List, indexed titles, and Node pairing on this device."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `mt-3 h-11 w-full rounded-md font-ui font-bold ${confirmClear ? "bg-cine-danger text-cine-text" : "border border-cine-danger text-cine-danger"}`,
							onClick: () => {
								if (!confirmClear) {
									setConfirmClear(true);
									return;
								}
								clearLocalData();
								setConfirmClear(false);
								setSettingsOpen(false);
							},
							children: confirmClear ? "Tap again to clear everything" : "Clear all local data"
						})
					]
				})
			]
		})
	});
}
function CoreModal() {
	const open = useCinevo((s) => s.coreOpen);
	const tab = useCinevo((s) => s.coreTab);
	const setCoreOpen = useCinevo((s) => s.setCoreOpen);
	const setCoreTab = useCinevo((s) => s.setCoreTab);
	const sources = useCinevo((s) => s.sources);
	const invites = useCinevo((s) => s.invites);
	const addInvite = useCinevo((s) => s.addInvite);
	const setInviteStatus = useCinevo((s) => s.setInviteStatus);
	const aiConsent = useCinevo((s) => s.aiConsent);
	const setAiConsent = useCinevo((s) => s.setAiConsent);
	const flash = useCinevo((s) => s.flash);
	const [name, setName] = (0, import_react.useState)("");
	const [days, setDays] = (0, import_react.useState)(7);
	const [question, setQuestion] = (0, import_react.useState)("");
	const [answer, setAnswer] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	if (!open) return null;
	const points = (sources.length ? 1 : 0) + (invites.length ? 1 : 0) + (aiConsent ? 1 : 0) + 1;
	const ask = async () => {
		if (!question.trim() || pending) return;
		setPending(true);
		try {
			const res = await askCinevo({ data: {
				question,
				titles: libraryPool().map((t) => ({
					title: t.title,
					year: t.year,
					kind: t.kind,
					genre: t.genre,
					rating: t.rating,
					synopsis: t.synopsis
				}))
			} });
			if (res.ok) setAnswer(res.text.replace(/\*\*/g, ""));
			else flash(res.error);
		} finally {
			setPending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-40 overflow-y-auto bg-cine-bg/80 p-4",
		onMouseDown: () => setCoreOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "glass-strong mx-auto my-8 max-w-3xl rounded-xl p-5",
			onMouseDown: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-4 flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-ui text-xs tracking-[0.18em] text-cine-cyan",
						children: "SHARING & PRIVACY"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl tracking-tight",
						children: "Your rules"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Close Core",
						onClick: () => setCoreOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mb-5 flex flex-wrap gap-2",
					children: [
						"libraries",
						"sharing",
						"stewardship",
						"ai"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCoreTab(t),
						className: `h-11 rounded-full px-4 font-ui text-sm font-semibold ${tab === t ? "bg-cine-cyan text-cine-bg" : "bg-cine-surface text-cine-muted"}`,
						children: t === "libraries" ? "Libraries" : t === "sharing" ? "Sharing" : t === "stewardship" ? "Privacy" : "AI"
					}, t))
				}),
				tab === "libraries" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-cine-muted",
							children: sources.length ? `${sources.length} source${sources.length === 1 ? "" : "s"} connected.` : "No sources yet. Folders scan in the browser. Sign in with Plex from Library. Jellyfin uses CINEVO Node."
						}),
						sources.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: sources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-lg bg-cine-surface px-3 py-3 font-ui text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "capitalize",
									children: s.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-2 font-mono text-xs text-cine-faint",
									children: [
										s.kind,
										" · ",
										s.count
									]
								})]
							}, s.id))
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-11 rounded-md bg-cine-cyan px-5 font-ui font-bold text-cine-bg",
							onClick: () => {
								setCoreOpen(false);
								useCinevo.getState().setRoom("sidebar");
							},
							children: "Open Library"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-ui text-xs tracking-[0.18em] text-cine-cyan",
								children: "NODE INSTALLERS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 mb-3 text-sm text-cine-muted",
								children: "Required for Plex, Jellyfin, and disk paths. Folder pick works without it."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallerCards, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/node",
								className: "mt-3 inline-flex h-11 items-center font-ui text-sm font-bold text-cine-cyan",
								onClick: () => setCoreOpen(false),
								children: "Open pairing"
							})
						] })
					]
				}),
				tab === "sharing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (e) => setName(e.target.value),
								className: "h-11 rounded-md border border-cine-border bg-cine-well px-3 font-ui",
								placeholder: "Friend name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: days,
								onChange: (e) => setDays(Number(e.target.value)),
								className: "h-11 rounded-md border border-cine-border bg-cine-well px-3 font-ui",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: 3,
										children: "3 days"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: 7,
										children: "7 days"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: 14,
										children: "14 days"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-11 rounded-md bg-cine-magenta px-4 font-ui font-bold text-cine-bg",
								onClick: () => {
									addInvite(name, days);
									flash("Invite created");
								},
								children: "Create invite"
							})
						]
					}), invites.length ? invites.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex items-center justify-between rounded-lg bg-cine-surface px-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "font-ui",
							children: i.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
							className: "ml-2 text-cine-faint",
							children: [
								i.status,
								" · ",
								i.days,
								"d"
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "font-ui text-sm text-cine-cyan",
								onClick: () => setInviteStatus(i.id, i.status === "paused" ? "active" : "paused"),
								children: i.status === "paused" ? "Restore" : "Pause"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "font-ui text-sm text-cine-danger",
								onClick: () => setInviteStatus(i.id, "revoked"),
								children: "Revoke"
							})]
						})]
					}, i.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-lg border border-dashed border-cine-border px-3 py-4 text-sm text-cine-faint",
						children: "No invites yet. Name a friend and create one — nothing is pre-seeded."
					})]
				}),
				tab === "stewardship" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-4xl text-cine-cyan",
						children: points
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-ui text-sm text-cine-muted",
						children: "stewardship points — for care, not watch-time."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-2 gap-3",
						children: [
							"Private index",
							"Library care",
							"Invite boundary",
							"AI consent"
						].map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-lg border border-cine-border bg-cine-surface p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "font-ui text-sm",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-cine-faint",
								children: i < points ? "Complete" : "Open"
							})]
						}, label))
					})
				] }),
				tab === "ai" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center justify-between rounded-lg bg-cine-surface px-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "block font-ui text-sm",
							children: "Private metadata assistance"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
							className: "text-cine-faint",
							children: "Only titles in this CINEVO library"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: aiConsent,
							onChange: (e) => setAiConsent(e.target.checked),
							className: "size-5 accent-cine-cyan"
						})]
					}), aiConsent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: question,
							onChange: (e) => setQuestion(e.target.value),
							maxLength: 400,
							placeholder: "What should I watch tonight?",
							className: "h-24 w-full rounded-md border border-cine-border bg-cine-well p-3 font-ui"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: ask,
							disabled: pending,
							className: "h-11 rounded-md bg-cine-cyan px-5 font-ui font-bold text-cine-bg",
							children: pending ? "Thinking…" : "Ask CINEVO"
						}),
						answer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-lg bg-cine-surface p-3 text-sm text-cine-muted",
							children: answer
						}) : null
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-cine-faint",
						children: "Enable consent to ask the concierge."
					})]
				})
			]
		})
	});
}
function Toast() {
	const toast = useCinevo((s) => s.toast);
	if (!toast) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 rounded-full border border-cine-cyan bg-cine-elevated px-4 py-2 font-ui text-sm tracking-wide",
		children: toast
	});
}
function Player() {
	const playingId = useCinevo((s) => s.playingId);
	const playing = useCinevo((s) => s.playing);
	const progress = useCinevo((s) => s.playingId ? s.progress[s.playingId] ?? 0 : 0);
	const focusMode = useCinevo((s) => s.prefs.focusMode);
	const play = useCinevo((s) => s.play);
	const togglePlay = useCinevo((s) => s.togglePlay);
	const stopPlay = useCinevo((s) => s.stopPlay);
	const setProgress = useCinevo((s) => s.setProgress);
	const flash = useCinevo((s) => s.flash);
	const title = titleById(playingId);
	const nodeUrl = useCinevo((s) => s.nodeUrl);
	const nodeToken = useCinevo((s) => s.nodeToken);
	const videoRef = (0, import_react.useRef)(null);
	const stageRef = (0, import_react.useRef)(null);
	const [muted, setMuted] = (0, import_react.useState)(true);
	const [chrome, setChrome] = (0, import_react.useState)(true);
	const localFile = title ? mediaUrl(title.id) : void 0;
	const getStreamUrl = () => {
		if (localFile || !title || !nodeToken) return void 0;
		if (title.source !== "plex" && title.source !== "jellyfin") return void 0;
		return nodeStreamUrl(nodeUrl, nodeToken, title.id, title.connectionId).url;
	};
	const streamUrl = getStreamUrl();
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video) return;
		const src = localFile ?? streamUrl;
		if (!src) {
			video.src = "";
			return;
		}
		video.src = src;
		if (streamUrl && nodeToken) video.addEventListener("play", () => {
			if (video.src === streamUrl) fetch(streamUrl, { headers: { Authorization: `Bearer ${nodeToken}` } }).then((res) => res.blob()).then((blob) => {
				video.src = URL.createObjectURL(blob);
			}).catch(() => {
				const fallback = new URL(streamUrl);
				fallback.searchParams.set("token", nodeToken);
				video.src = fallback.toString();
			});
		});
		video.muted = muted;
		if (playing) video.play().catch(() => useCinevo.setState({ playing: false }));
		else video.pause();
	}, [
		playing,
		streamUrl,
		localFile,
		playingId,
		muted,
		nodeToken
	]);
	(0, import_react.useEffect)(() => {
		if (!playing || !(localFile ?? streamUrl)) {
			setChrome(true);
			return;
		}
		let timer = window.setTimeout(() => setChrome(false), 2200);
		const bump = () => {
			setChrome(true);
			window.clearTimeout(timer);
			timer = window.setTimeout(() => setChrome(false), 2200);
		};
		window.addEventListener("mousemove", bump);
		window.addEventListener("touchstart", bump);
		return () => {
			window.clearTimeout(timer);
			window.removeEventListener("mousemove", bump);
			window.removeEventListener("touchstart", bump);
		};
	}, [
		playing,
		localFile,
		streamUrl
	]);
	const seek = (value) => {
		if (!title) return;
		setProgress(title.id, value);
		const video = videoRef.current;
		if (video && Number.isFinite(video.duration) && video.duration > 0) video.currentTime = value / 100 * video.duration;
	};
	const onToggle = () => {
		if (!title) return;
		const video = videoRef.current;
		const src = localFile ?? streamUrl;
		if ((progress >= 100 || video?.ended) && video && src) {
			video.currentTime = 0;
			setProgress(title.id, 0);
			useCinevo.setState({ playing: true });
			video.play().catch(() => useCinevo.setState({ playing: false }));
			return;
		}
		if (video && src) {
			if (video.paused) {
				useCinevo.setState({ playing: true });
				video.play().catch(() => useCinevo.setState({ playing: false }));
			} else {
				video.pause();
				useCinevo.setState({ playing: false });
			}
			return;
		}
		if (progress >= 100) play(title.id);
		else togglePlay();
	};
	(0, import_react.useEffect)(() => {
		if (!title) return;
		const onKey = (e) => {
			if (e.key !== " ") return;
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA") return;
			e.preventDefault();
			onToggle();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		title,
		localFile,
		progress,
		playing
	]);
	if (!title) return null;
	const missing = !localFile && (title.source === "folder" ? "Re-select this folder to play. CINEVO does not store the file." : title.source === "plex" || title.source === "jellyfin" ? "Pair CINEVO Node to proxy this Plex stream securely from your server." : "No playable file on this device.");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: stageRef,
		className: "fixed inset-0 z-50 bg-cine-bg text-cine-text",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": `${title.title} player`,
		onClick: () => localFile && onToggle(),
		children: [
			localFile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				src: localFile,
				className: "absolute inset-0 h-full w-full bg-cine-bg object-contain",
				playsInline: true,
				autoPlay: true,
				muted,
				onLoadedData: (e) => {
					const v = e.currentTarget;
					v.muted = muted;
					if (progress > 0 && progress < 100 && Number.isFinite(v.duration)) v.currentTime = progress / 100 * v.duration;
					if (playing) v.play().catch(() => useCinevo.setState({ playing: false }));
				},
				onTimeUpdate: (e) => {
					const v = e.currentTarget;
					if (!v.duration) return;
					setProgress(title.id, v.currentTime / v.duration * 100);
				},
				onEnded: () => {
					setProgress(title.id, 100);
					useCinevo.setState({ playing: false });
					setChrome(true);
				}
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: title.still || title.poster,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-cine-bg to-transparent transition-opacity ${chrome ? "opacity-100" : "opacity-0"}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Close player",
				onClick: (e) => {
					e.stopPropagation();
					stopPlay();
				},
				className: `absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full border border-cine-line bg-cine-elevated/80 text-cine-text transition-opacity ${chrome ? "opacity-100" : "opacity-0"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 transition-opacity ${localFile && playing && !chrome ? "opacity-0" : "opacity-100"}`,
				children: [localFile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-16 items-center justify-center rounded-full bg-cine-text text-cine-bg",
					children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
						size: 26,
						fill: "currentColor"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
						size: 26,
						fill: "currentColor"
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-center font-ui text-sm text-cine-muted",
					children: missing
				}), localFile && muted && playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-ui text-xs uppercase tracking-[0.22em] text-cine-muted",
					children: "Sound off · unmute in the bar"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: `absolute inset-x-0 bottom-0 z-10 space-y-3 p-5 transition-opacity ${chrome ? "opacity-100" : "pointer-events-none opacity-0"} ${focusMode ? "opacity-70" : ""}`,
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-ui text-xs tracking-widest text-cine-muted",
						children: progress >= 100 ? "Finished · Play again from the start" : localFile ? "Esc closes · Space pauses" : "Esc closes"
					}),
					localFile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 font-mono text-xs text-cine-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "w-10 tabular-nums",
								children: [Math.round(progress), "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								"aria-label": "Timeline",
								type: "range",
								min: 0,
								max: 100,
								value: progress,
								onChange: (e) => seek(Number(e.target.value)),
								className: "h-1 flex-1 accent-cine-cyan"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: title.runtime })
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-3",
							children: [localFile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onToggle,
								"aria-label": playing ? "Pause" : "Play",
								className: "flex size-11 items-center justify-center",
								children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { size: 18 })
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "truncate font-ui text-lg tracking-wide",
								children: title.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center text-cine-muted",
							children: [localFile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": muted ? "Unmute" : "Mute",
									className: "flex size-11 items-center justify-center",
									onClick: () => {
										const next = !muted;
										setMuted(next);
										if (videoRef.current) videoRef.current.muted = next;
									},
									children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { size: 18 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Subtitles",
									className: "flex size-11 items-center justify-center",
									onClick: () => flash("No subtitles on this file"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Captions, { size: 18 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Fullscreen",
									className: "flex size-11 items-center justify-center",
									onClick: () => {
										const node = stageRef.current;
										if (!node) return;
										if (document.fullscreenElement) document.exitFullscreen();
										else node.requestFullscreen();
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expand, { size: 18 })
								})
							] }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-11 px-3 font-ui text-sm font-bold text-cine-cyan",
								onClick: stopPlay,
								children: "Close"
							})]
						})]
					})
				]
			})
		]
	});
}
function isTyping(target) {
	if (!(target instanceof HTMLElement)) return false;
	const tag = target.tagName;
	return tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable;
}
function Keys() {
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const s = useCinevo.getState();
			if (s.playingId) {
				if (e.key === "Escape") s.stopPlay();
				return;
			}
			if (e.key === "Escape") {
				if (s.searchOpen) s.setSearchOpen(false);
				else if (s.settingsOpen) s.setSettingsOpen(false);
				else if (s.coreOpen) s.setCoreOpen(false);
				else if (s.selectedId) s.closeTitle();
				return;
			}
			if (isTyping(e.target)) return;
			if (e.key === "/") {
				e.preventDefault();
				s.setSearchOpen(true);
			}
			if (e.key === "t" || e.key === "T") {
				if (s.searchOpen || s.settingsOpen || s.coreOpen || s.selectedId) return;
				const i = THEMES.findIndex((th) => th.id === s.prefs.theme);
				const next = THEMES[(i + 1) % THEMES.length];
				s.setTheme(next.id);
				s.flash(`${next.label} theme`);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return null;
}
function Cinema() {
	const room = useCinevo((s) => s.room);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		overlays: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchOverlay, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Player, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast, {})
		] }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Keys, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomSwitch, { room })]
	});
}
//#endregion
export { Cinema as component };
