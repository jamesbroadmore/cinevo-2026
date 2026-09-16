import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cinevo-store-CJ6n_t4z.js
var VIDEO_EXT = /\.(mp4|mkv|mov|avi|webm|m4v|wmv|ts|m2ts)$/i;
var blobs = /* @__PURE__ */ new Map();
function mediaUrl(id) {
	return blobs.get(id);
}
function playableCount() {
	return blobs.size;
}
function rememberBlob(id, file) {
	const prev = blobs.get(id);
	if (prev) URL.revokeObjectURL(prev);
	const url = URL.createObjectURL(file);
	blobs.set(id, url);
	return url;
}
function parseFilename(fileName) {
	const base = fileName.split(/[/\\]/).pop() || fileName;
	let stem = base.replace(VIDEO_EXT, "");
	const yearHit = /\(?((?:19|20)\d{2})\)?/.exec(stem);
	const year = yearHit ? yearHit[1] : "";
	stem = stem.replace(/[._]+/g, " ").replace(/\((?:19|20)\d{2}\)/g, " ").replace(/\b(?:19|20)\d{2}\b/g, " ").replace(/\b(1080p|720p|2160p|480p|4k|uhd|hdr|bluray|webrip|web-dl|x264|x265|hevc|dts|aac|remux)\b/gi, " ").replace(/\s+/g, " ").trim();
	return {
		title: stem || base.replace(VIDEO_EXT, ""),
		year,
		fileName: base
	};
}
function isVideoFile(name) {
	return VIDEO_EXT.test(name);
}
var ACCENTS = [
	"cyan",
	"magenta",
	"violet",
	"amber"
];
function titleFromFile(file, folderName, index) {
	const parsed = parseFilename(file.name);
	const id = `folder-${hash(`${folderName}:${file.name}:${file.size}`)}`;
	rememberBlob(id, file);
	const accent = ACCENTS[index % ACCENTS.length];
	return {
		id,
		title: parsed.title,
		kind: /s\d{2}e\d{2}/i.test(file.name) ? "series" : "movie",
		year: parsed.year || "—",
		runtime: file.size > 2e9 ? "2h+" : file.size > 7e8 ? "~2h" : "~90m",
		genre: "Home library",
		genres: ["Home library", folderName],
		synopsis: `Imported from ${folderName}. File stays on this device — CINEVO only indexes the name.`,
		cast: [],
		director: folderName,
		rating: 0,
		addedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		poster: makePoster(parsed.title, accent),
		still: "/stills/theater.jpg",
		accent,
		source: "folder",
		sourceLabel: folderName,
		path: file.name
	};
}
function scanFileList(files, folderName = "Home folder") {
	const list = Array.from(files).filter((f) => isVideoFile(f.name) || isVideoFile(f.webkitRelativePath || ""));
	const name = folderName || guessFolder(list) || "Home folder";
	return list.slice(0, 80).map((file, i) => titleFromFile(file, name, i));
}
function guessFolder(files) {
	return (files.find((f) => f.webkitRelativePath)?.webkitRelativePath || "").split("/")[0] || "";
}
function hash(s) {
	let h = 0;
	for (let i = 0; i < s.length; i++) h = h * 31 + s.charCodeAt(i) >>> 0;
	return h.toString(16);
}
function makePoster(title, accent) {
	if (typeof document === "undefined") return "/stills/theater.jpg";
	const c = document.createElement("canvas");
	c.width = 400;
	c.height = 600;
	const ctx = c.getContext("2d");
	if (!ctx) return "/stills/theater.jpg";
	const ink = {
		cyan: "#55CFFF",
		magenta: "#FF4DA5",
		violet: "#8B2FFF",
		amber: "#FF9F1C"
	};
	ctx.fillStyle = "#1A1A1E";
	ctx.fillRect(0, 0, 400, 600);
	ctx.strokeStyle = "rgba(255,255,255,0.12)";
	ctx.lineWidth = 1;
	ctx.strokeRect(18, 18, 364, 564);
	ctx.fillStyle = ink[accent] || "#55CFFF";
	ctx.font = "800 28px Poppins, DM Sans, system-ui, sans-serif";
	wrapText(ctx, title, 36, 250, 328, 34);
	ctx.fillStyle = "rgba(255,255,255,0.45)";
	ctx.font = "700 12px Poppins, DM Sans, system-ui, sans-serif";
	ctx.fillText("CINEVO", 36, 560);
	return c.toDataURL("image/jpeg", .85);
}
function wrapText(ctx, text, x, y, max, lh) {
	const words = text.split(" ");
	let line = "";
	let yy = y;
	for (const w of words) {
		const next = line ? `${line} ${w}` : w;
		if (ctx.measureText(next).width > max) {
			ctx.fillText(line, x, yy);
			line = w;
			yy += lh;
		} else line = next;
	}
	if (line) ctx.fillText(line, x, yy);
}
function remoteTitle(input) {
	const accent = input.source === "plex" ? "amber" : "violet";
	return {
		id: input.id,
		title: input.title,
		kind: input.kind ?? "movie",
		year: input.year || "—",
		runtime: "—",
		genre: input.genre || (input.source === "plex" ? "Plex" : "Jellyfin"),
		genres: [input.source === "plex" ? "Plex" : "Jellyfin"],
		synopsis: input.synopsis || `Indexed from ${input.sourceLabel}. Play through CINEVO Node on this computer.`,
		cast: [],
		director: input.sourceLabel,
		rating: 0,
		addedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		poster: makePoster(input.title, accent),
		still: "/stills/theater.jpg",
		accent,
		source: input.source,
		sourceLabel: input.sourceLabel,
		path: input.path,
		connectionId: input.connectionId
	};
}
var THEMES = [
	{
		id: "pulse",
		label: "Night",
		accent: "#f5f5f5"
	},
	{
		id: "nova",
		label: "Rebound",
		accent: "#3b7bff"
	},
	{
		id: "iris",
		label: "Paper",
		accent: "#ecece8"
	},
	{
		id: "ember",
		label: "Studio",
		accent: "#d6d0c4"
	},
	{
		id: "graphite",
		label: "Graphite",
		accent: "#d9e2ec"
	},
	{
		id: "aurora",
		label: "Aurora",
		accent: "#79f2c0"
	}
];
var CATALOG = [];
function genresIn(pool) {
	return ["All", ...Array.from(new Set(pool.flatMap((t) => t.genres))).sort()];
}
function similarTo(title, pool = CATALOG) {
	const mine = title.genres ?? [];
	return pool.filter((t) => t.id !== title.id && (t.genres ?? []).some((g) => mine.includes(g))).slice(0, 6);
}
function filterCatalog(opts) {
	const q = (opts.query ?? "").trim().toLowerCase();
	return (opts.pool ?? CATALOG).filter((t) => {
		const cast = t.cast ?? [];
		const genres = t.genres ?? [];
		const hay = `${t.title} ${t.synopsis} ${t.genre} ${cast.join(" ")} ${t.director}`.toLowerCase();
		if (q && !hay.includes(q)) return false;
		if (opts.kind && opts.kind !== "all" && t.kind !== opts.kind) return false;
		if (opts.genre && opts.genre !== "All" && !genres.includes(opts.genre)) return false;
		if (opts.minRating && t.rating < opts.minRating) return false;
		return true;
	});
}
function recentlyAdded(n = 8, pool = CATALOG) {
	return [...pool].sort((a, b) => b.addedAt.localeCompare(a.addedAt)).slice(0, n);
}
var MOODS = [
	{
		id: "all",
		label: "All",
		hint: "Find your next scene.",
		genres: []
	},
	{
		id: "neon",
		label: "Neon",
		hint: "Stay with the shadows.",
		genres: [
			"Action",
			"Noir",
			"Crime",
			"Cyberpunk",
			"Thriller"
		]
	},
	{
		id: "quiet",
		label: "Quiet",
		hint: "Settle into something human.",
		genres: [
			"Drama",
			"Romance",
			"Mystery"
		]
	},
	{
		id: "far",
		label: "Far",
		hint: "Leave the city for a while.",
		genres: ["Sci-Fi", "Adventure"]
	},
	{
		id: "warm",
		label: "Warm",
		hint: "Same tokens. Warmer grade.",
		genres: [
			"Nostalgia",
			"History",
			"Western",
			"Music"
		]
	}
];
function byMood(mood, pool = CATALOG) {
	if (mood === "all") return pool;
	const genres = MOODS.find((m) => m.id === mood)?.genres ?? [];
	const hits = pool.filter((t) => (t.genres ?? []).some((g) => genres.includes(g)) || genres.includes(t.genre));
	return hits.length ? hits : pool;
}
function pickFeatured(opts) {
	const all = opts.pool ?? CATALOG;
	if (!all.length) return void 0;
	const pool = byMood(opts.mood, all);
	for (const id of opts.tonight) {
		const hit = pool.find((t) => t.id === id) ?? all.find((t) => t.id === id);
		if (hit) return hit;
	}
	const cont = pool.find((t) => {
		const p = opts.progress[t.id];
		return p != null && p > 0 && p < 100;
	});
	if (cont) return cont;
	return [...pool].sort((a, b) => b.rating - a.rating)[0] ?? all[0];
}
var DEFAULT_DASHBOARD_WIDGETS = [
	"playlist",
	"continue",
	"suggestions",
	"my-list"
];
function sanitizeDashboardWidgets(value) {
	if (!Array.isArray(value)) return [...DEFAULT_DASHBOARD_WIDGETS];
	const valid = value.filter((item) => DEFAULT_DASHBOARD_WIDGETS.includes(item));
	return Array.from(new Set(valid)).concat(DEFAULT_DASHBOARD_WIDGETS.filter((item) => !valid.includes(item)));
}
var DEFAULT_JOURNEY = {
	xp: 0,
	streak: 0,
	lastActiveDay: "",
	completedIds: [],
	events: []
};
function dayKey(date = /* @__PURE__ */ new Date()) {
	return date.toISOString().slice(0, 10);
}
function awardJourney(state, kind, label, xp, key) {
	if (state.events.some((event) => event.id === key)) return state;
	const today = dayKey();
	const yesterday = dayKey(/* @__PURE__ */ new Date(Date.now() - 864e5));
	const streak = state.lastActiveDay === yesterday || state.lastActiveDay === today ? Math.max(state.streak, 1) + (state.lastActiveDay === today ? -1 : 0) : 1;
	return {
		...state,
		xp: state.xp + xp,
		streak,
		lastActiveDay: today,
		events: [{
			id: key,
			kind,
			label,
			xp,
			createdAt: Date.now()
		}, ...state.events].slice(0, 12)
	};
}
var DEFAULT_PREFS = {
	nightMode: true,
	zenMode: false,
	focusMode: false,
	audioHints: true,
	theme: "pulse",
	dashboardWidgets: [...DEFAULT_DASHBOARD_WIDGETS]
};
var FRESH = {
	progress: {},
	favorites: [],
	invites: [],
	notices: [],
	selectedId: null,
	playingId: null,
	playing: false,
	tonight: [],
	notes: [],
	party: null,
	mood: "all",
	sources: [],
	localTitles: [],
	remoteTitles: [],
	sourceFilter: "all",
	plexToken: "",
	plexUser: "",
	plexServers: []
};
function catalogPool(get) {
	return [...get().localTitles, ...get().remoteTitles];
}
function inviteToken() {
	if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID().replace(/-/g, "").slice(0, 22);
	return `t${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
}
function hydrateInvites(raw) {
	if (!Array.isArray(raw)) return [];
	return raw.map((item) => {
		const row = item;
		const createdAt = Number(row.createdAt) || Date.now();
		const days = Number(row.days) || 7;
		return {
			id: String(row.id || `inv-${createdAt}`),
			token: String(row.token || inviteToken()),
			name: String(row.name || "Friend"),
			days,
			status: row.status === "paused" || row.status === "revoked" ? row.status : "active",
			createdAt,
			expiresAt: Number(row.expiresAt) || createdAt + days * 864e5,
			libraries: Array.isArray(row.libraries) ? row.libraries.map(String) : []
		};
	});
}
var useCinevo = create()(persist((set, get) => ({
	room: "stage",
	searchOpen: false,
	settingsOpen: false,
	coreOpen: false,
	coreTab: "libraries",
	noticesOpen: false,
	toast: "",
	prefs: DEFAULT_PREFS,
	libraries: [],
	aiConsent: false,
	nodeUrl: "http://127.0.0.1:48184",
	nodeToken: "",
	nodeDevice: "",
	plexClientId: "",
	...FRESH,
	journey: DEFAULT_JOURNEY,
	setRoom: (room) => set({
		room,
		selectedId: null
	}),
	openTitle: (id) => set({ selectedId: id }),
	closeTitle: () => set({ selectedId: null }),
	play: (id) => {
		set({
			playingId: id,
			playing: true,
			selectedId: null,
			progress: (get().progress[id] ?? 0) >= 100 ? {
				...get().progress,
				[id]: 0
			} : get().progress
		});
	},
	stopPlay: () => set({
		playingId: null,
		playing: false
	}),
	togglePlay: () => {
		const id = get().playingId;
		if (id && (get().progress[id] ?? 0) >= 100) {
			get().play(id);
			return;
		}
		set({ playing: !get().playing });
	},
	setProgress: (id, value) => {
		const next = Math.max(0, Math.min(100, value));
		const previous = get().progress[id] ?? 0;
		set({ progress: {
			...get().progress,
			[id]: next
		} });
		if (previous < 100 && next >= 100) get().awardJourney("watch", "Completed a title", 40, `watch:${id}`);
	},
	awardJourney: (kind, label, xp, key) => set({ journey: awardJourney(get().journey, kind, label, xp, key) }),
	toggleFavorite: (id) => {
		const has = get().favorites.includes(id);
		set({ favorites: has ? get().favorites.filter((x) => x !== id) : [...get().favorites, id] });
		if (!has) get().awardJourney("favorite", "Saved a title to My List", 10, `favorite:${id}`);
		get().flash(has ? "Removed from My List" : "Saved to My List");
	},
	addTonight: (id) => {
		if (get().tonight.includes(id)) {
			get().flash("Already in tonight");
			return;
		}
		if (get().tonight.length >= 8) {
			get().flash("Tonight is full");
			return;
		}
		set({ tonight: [...get().tonight, id] });
		get().flash("Queued for tonight");
	},
	removeTonight: (id) => set({ tonight: get().tonight.filter((x) => x !== id) }),
	addNote: (titleId, body) => {
		const text = body.trim().slice(0, 280);
		if (!text) return;
		set({ notes: [{
			id: `n-${Date.now()}`,
			titleId,
			body: text,
			createdAt: Date.now()
		}, ...get().notes].slice(0, 40) });
		get().awardJourney("note", "Added a private note", 12, `note:${titleId}:${text}`);
		get().flash("Note saved");
	},
	removeNote: (id) => set({ notes: get().notes.filter((n) => n.id !== id) }),
	startParty: (titleId, withName) => {
		set({ party: {
			titleId,
			with: withName.trim()
		} });
		get().awardJourney("party", "Started a watch party", 25, `party:${titleId}:${withName.trim()}`);
		get().play(titleId);
		get().flash(withName.trim() ? `Watching with ${withName.trim()}` : "Private watch started");
	},
	endParty: () => set({ party: null }),
	setMood: (mood) => set({ mood }),
	shufflePlay: () => {
		const pool = byMood(get().mood, catalogPool(get));
		const fresh = pool.filter((t) => {
			const p = get().progress[t.id];
			return p == null || p >= 100;
		});
		const list = fresh.length ? fresh : pool;
		const pick = list[Math.floor(Math.random() * list.length)];
		if (pick) get().play(pick.id);
		else get().flash("Add a library first");
	},
	setSearchOpen: (searchOpen) => set({ searchOpen }),
	setSettingsOpen: (settingsOpen) => set({ settingsOpen }),
	setCoreOpen: (coreOpen, tab) => set({
		coreOpen,
		coreTab: tab ?? get().coreTab
	}),
	setCoreTab: (coreTab) => set({ coreTab }),
	setNoticesOpen: (noticesOpen) => set({ noticesOpen }),
	flash: (toast) => {
		set({ toast });
		if (typeof window === "undefined") return;
		window.setTimeout(() => {
			if (get().toast === toast) set({ toast: "" });
		}, 2200);
	},
	notify: (input) => {
		set({ notices: [{
			id: `nt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
			createdAt: Date.now(),
			readAt: null,
			...input
		}, ...get().notices].slice(0, 40) });
	},
	markNoticeRead: (id) => set({ notices: get().notices.map((n) => n.id === id && !n.readAt ? {
		...n,
		readAt: Date.now()
	} : n) }),
	markAllNoticesRead: () => set({ notices: get().notices.map((n) => n.readAt ? n : {
		...n,
		readAt: Date.now()
	}) }),
	dismissNotice: (id) => set({ notices: get().notices.filter((n) => n.id !== id) }),
	clearNotices: () => set({ notices: [] }),
	patchPrefs: (p) => set({ prefs: {
		...get().prefs,
		...p
	} }),
	setTheme: (theme) => {
		set({ prefs: {
			...get().prefs,
			theme
		} });
		if (typeof document !== "undefined") document.documentElement.setAttribute("data-theme", theme);
	},
	setDashboardWidgets: (dashboardWidgets) => set({ prefs: {
		...get().prefs,
		dashboardWidgets: sanitizeDashboardWidgets(dashboardWidgets)
	} }),
	toggleLibrary: (id) => set({
		libraries: get().libraries.map((l) => l.id === id ? {
			...l,
			selected: !l.selected
		} : l),
		sources: get().sources.map((s) => s.id === id ? {
			...s,
			selected: !s.selected
		} : s)
	}),
	addInvite: (name, days) => {
		const createdAt = Date.now();
		const invite = {
			id: `inv-${createdAt}`,
			token: inviteToken(),
			name: name.trim() || "Friend",
			days,
			status: "active",
			createdAt,
			expiresAt: createdAt + days * 864e5,
			libraries: get().sources.filter((s) => s.selected).map((s) => s.id)
		};
		set({ invites: [invite, ...get().invites] });
		get().notify({
			category: "sharing",
			title: "Private invitation created",
			message: `${invite.name} has ${days} days of access to selected libraries.`,
			href: "/app?core=sharing"
		});
		return invite;
	},
	setInviteStatus: (id, status) => {
		const current = get().invites.find((i) => i.id === id);
		set({ invites: get().invites.map((i) => i.id === id ? {
			...i,
			status
		} : i) });
		if (current) get().notify({
			category: "sharing",
			title: status === "revoked" ? "Invitation revoked" : status === "paused" ? "Invitation paused" : "Invitation restored",
			message: `${current.name} is now ${status}.`,
			href: "/app?core=sharing"
		});
	},
	setAiConsent: (aiConsent) => {
		set({ aiConsent });
		get().notify({
			category: "privacy",
			title: aiConsent ? "AI concierge enabled" : "AI concierge disabled",
			message: aiConsent ? "CINEVO may use selected library metadata when you ask." : "Metadata assistance is off until you opt in again.",
			href: "/app?core=ai"
		});
	},
	setNodeUrl: (nodeUrl) => set({ nodeUrl }),
	setNodeSession: (nodeToken, nodeDevice) => set({
		nodeToken,
		nodeDevice
	}),
	clearNodeSession: () => set({
		nodeToken: "",
		nodeDevice: ""
	}),
	setPlexSession: (plexToken, plexUser, plexServers, plexClientId) => set({
		plexToken,
		plexUser,
		plexServers,
		plexClientId
	}),
	setPlexServers: (plexServers) => set({ plexServers }),
	clearPlexSession: () => set({
		plexToken: "",
		plexUser: "",
		plexServers: []
	}),
	addFolderTitles: (titles, source) => {
		const existing = new Set(get().localTitles.map((t) => t.id));
		const next = titles.filter((t) => !existing.has(t.id));
		const sources = get().sources.filter((s) => s.id !== source.id);
		set({
			localTitles: [...next, ...get().localTitles].slice(0, 200),
			sources: [{
				...source,
				count: next.length + get().localTitles.filter((t) => t.sourceLabel === source.name).length
			}, ...sources]
		});
		get().flash(next.length ? `Added ${next.length} titles from ${source.name}` : "No new video files in that folder");
		if (next.length) get().notify({
			category: "library",
			title: "Folder indexed",
			message: `${next.length} titles from ${source.name} are now in CINEVO.`,
			href: "/app?core=libraries"
		});
	},
	addRemoteTitles: (titles, source) => {
		const existing = new Set(get().remoteTitles.map((t) => t.id));
		const next = titles.filter((t) => !existing.has(t.id));
		const sources = get().sources.filter((s) => s.id !== source.id);
		set({
			remoteTitles: [...next, ...get().remoteTitles].slice(0, 300),
			sources: [{
				...source,
				count: next.length
			}, ...sources]
		});
		get().flash(next.length ? `Imported ${next.length} titles from ${source.name}` : "No titles in that section");
		if (next.length) get().notify({
			category: "library",
			title: `${source.kind === "plex" ? "Plex" : "Jellyfin"} library imported`,
			message: `${next.length} titles from ${source.name} are ready to browse.`,
			href: "/app?core=libraries"
		});
	},
	removeSource: (id) => {
		const src = get().sources.find((s) => s.id === id);
		const localTitles = get().localTitles.filter((t) => t.sourceLabel !== src?.name);
		const remoteTitles = get().remoteTitles.filter((t) => t.sourceLabel !== src?.name);
		const keep = new Set([...localTitles, ...remoteTitles].map((t) => t.id));
		const sources = get().sources.filter((s) => s.id !== id);
		set({
			sources,
			localTitles,
			remoteTitles,
			sourceFilter: sources.length <= 1 ? "all" : get().sourceFilter,
			tonight: get().tonight.filter((tid) => keep.has(tid)),
			favorites: get().favorites.filter((tid) => keep.has(tid))
		});
		import("./folder-handles-B1UqsjdR.mjs").then((n) => n.t).then((m) => m.deleteFolderHandle(id));
		get().flash("Source removed");
	},
	setSourceFilter: (sourceFilter) => set({ sourceFilter }),
	clearLocalData: () => {
		set({
			...FRESH,
			journey: DEFAULT_JOURNEY,
			libraries: [],
			searchOpen: false,
			coreOpen: false,
			noticesOpen: false,
			nodeToken: "",
			nodeDevice: "",
			plexToken: "",
			plexUser: "",
			plexServers: [],
			prefs: {
				...get().prefs,
				theme: get().prefs.theme,
				dashboardWidgets: [...DEFAULT_DASHBOARD_WIDGETS]
			}
		});
		try {
			localStorage.removeItem("cinevo-state");
			localStorage.removeItem("cinevo-storage");
		} catch {}
		get().flash("Local data cleared");
	}
}), {
	name: "cinevo-local-v4",
	skipHydration: true,
	merge: (persisted, current) => {
		const p = persisted ?? {};
		const theme = p.prefs?.theme && THEMES.some((t) => t.id === p.prefs?.theme) ? p.prefs.theme : "pulse";
		return {
			...current,
			...p,
			tonight: Array.isArray(p.tonight) ? p.tonight : [],
			notes: Array.isArray(p.notes) ? p.notes : [],
			party: p.party ?? null,
			mood: p.mood ?? "all",
			nodeUrl: p.nodeUrl || "http://127.0.0.1:48184",
			nodeToken: p.nodeToken ?? "",
			nodeDevice: p.nodeDevice ?? "",
			plexClientId: p.plexClientId ?? "",
			plexToken: p.plexToken ?? "",
			plexUser: p.plexUser ?? "",
			plexServers: Array.isArray(p.plexServers) ? p.plexServers : [],
			sources: Array.isArray(p.sources) ? p.sources : [],
			invites: hydrateInvites(p.invites),
			notices: Array.isArray(p.notices) ? p.notices : [],
			localTitles: Array.isArray(p.localTitles) ? p.localTitles.map((t) => ({
				...t,
				cast: t.cast ?? [],
				genres: t.genres?.length ? t.genres : ["Home library"],
				poster: t.poster && !t.poster.startsWith("data:") ? t.poster : makePoster(t.title, t.accent || "cyan")
			})) : [],
			remoteTitles: Array.isArray(p.remoteTitles) ? p.remoteTitles.map((t) => ({
				...t,
				cast: t.cast ?? [],
				genres: t.genres?.length ? t.genres : [t.genre || "Library"]
			})) : [],
			sourceFilter: Array.isArray(p.sources) && p.sources.length > 1 && (p.sourceFilter === "folder" || p.sourceFilter === "plex" || p.sourceFilter === "jellyfin") ? p.sourceFilter : "all",
			journey: {
				...DEFAULT_JOURNEY,
				...p.journey ?? {},
				completedIds: Array.isArray(p.journey?.completedIds) ? p.journey.completedIds : [],
				events: Array.isArray(p.journey?.events) ? p.journey.events : []
			},
			prefs: {
				...DEFAULT_PREFS,
				...p.prefs,
				theme,
				dashboardWidgets: sanitizeDashboardWidgets(p.prefs?.dashboardWidgets),
				audioHints: p.prefs?.audioHints ?? true
			}
		};
	},
	partialize: (s) => ({
		progress: s.progress,
		journey: s.journey,
		favorites: s.favorites,
		prefs: s.prefs,
		libraries: s.libraries,
		invites: s.invites,
		notices: s.notices,
		aiConsent: s.aiConsent,
		tonight: s.tonight,
		notes: s.notes,
		party: s.party,
		mood: s.mood,
		nodeUrl: s.nodeUrl,
		nodeToken: s.nodeToken,
		nodeDevice: s.nodeDevice,
		plexClientId: s.plexClientId,
		plexToken: s.plexToken,
		plexUser: s.plexUser,
		plexServers: s.plexServers,
		sources: s.sources,
		localTitles: s.localTitles.map((t) => ({
			...t,
			poster: t.poster?.startsWith("data:") ? "" : t.poster
		})),
		remoteTitles: s.remoteTitles,
		sourceFilter: s.sourceFilter
	})
}));
function titleById(id) {
	if (!id) return void 0;
	const s = useCinevo.getState();
	return s.localTitles.find((t) => t.id === id) ?? s.remoteTitles.find((t) => t.id === id);
}
function libraryPool() {
	const s = useCinevo.getState();
	return [...s.localTitles, ...s.remoteTitles];
}
//#endregion
export { isVideoFile as a, pickFeatured as c, rememberBlob as d, remoteTitle as f, useCinevo as g, titleById as h, genresIn as i, playableCount as l, similarTo as m, byMood as n, libraryPool as o, scanFileList as p, filterCatalog as r, mediaUrl as s, THEMES as t, recentlyAdded as u };
