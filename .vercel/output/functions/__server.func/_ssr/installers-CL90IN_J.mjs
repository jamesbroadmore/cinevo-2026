import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as Download, w as ListChecks } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/installers-CL90IN_J.js
var import_jsx_runtime = require_jsx_runtime();
var DEFAULT_NODE = "http://127.0.0.1:48184";
function normalizeNodeUrl(value) {
	const raw = value.trim();
	if (!raw) return DEFAULT_NODE;
	try {
		const url = new URL(raw.includes("://") ? raw : `http://${raw}`);
		if (!["http:", "https:"].includes(url.protocol)) return DEFAULT_NODE;
		url.pathname = url.pathname.replace(/\/$/, "");
		url.search = "";
		url.hash = "";
		return url.toString().replace(/\/$/, "");
	} catch {
		return DEFAULT_NODE;
	}
}
async function nodeFetch(base, path, init = {}) {
	const url = `${base.replace(/\/$/, "")}${path}`;
	try {
		const res = await fetch(url, {
			...init,
			headers: {
				"Content-Type": "application/json",
				...init.headers || {}
			}
		});
		return {
			res,
			data: await res.json().catch(() => ({}))
		};
	} catch {
		return {
			res: {
				ok: false,
				status: 0
			},
			data: { error: "CINEVO Node is not reachable." }
		};
	}
}
async function checkNode(base) {
	try {
		const { res, data } = await nodeFetch(base, "/health");
		if (!res.ok) return {
			ok: false,
			error: "CINEVO Node is not responding"
		};
		return {
			ok: true,
			deviceId: String(data.deviceId || ""),
			version: String(data.version || "")
		};
	} catch {
		return {
			ok: false,
			error: "CINEVO Node was not found at this address."
		};
	}
}
async function pairNode(base, code) {
	const { res, data } = await nodeFetch(base, "/v1/pair", {
		method: "POST",
		body: JSON.stringify({ code: code.trim().toUpperCase() })
	});
	if (!res.ok || typeof data.token !== "string") return {
		ok: false,
		error: String(data.error || "Pairing was not accepted")
	};
	return {
		ok: true,
		token: data.token,
		deviceId: String(data.deviceId || "")
	};
}
async function nodeStatus(base, token) {
	const { res, data } = await nodeFetch(base, "/v1/status", { headers: { Authorization: `Bearer ${token}` } });
	if (!res.ok) return {
		ok: false,
		error: String(data.error || "The local pairing session expired")
	};
	return {
		ok: true,
		status: data
	};
}
async function revokeConnection(base, token, connectionId) {
	const { res, data } = await nodeFetch(base, "/v1/connections/revoke", {
		method: "POST",
		headers: { Authorization: `Bearer ${token}` },
		body: JSON.stringify({ connectionId })
	});
	if (!res.ok) return {
		ok: false,
		error: String(data.error || "Could not remove that connection")
	};
	return { ok: true };
}
async function addNodeConnection(base, token, body) {
	const { res, data } = await nodeFetch(base, "/v1/connections", {
		method: "POST",
		headers: { Authorization: `Bearer ${token}` },
		body: JSON.stringify(body)
	});
	if (!res.ok) return {
		ok: false,
		error: String(data.error || "Could not add that server")
	};
	return {
		ok: true,
		id: String(data.id || ""),
		provider: String(data.provider || body.provider)
	};
}
async function listNodeSections(base, token, connectionId) {
	const { res, data } = await nodeFetch(base, "/v1/sections", {
		method: "POST",
		headers: { Authorization: `Bearer ${token}` },
		body: JSON.stringify({ connectionId })
	});
	if (!res.ok) return {
		ok: false,
		error: String(data.error || "Could not list library sections")
	};
	return {
		ok: true,
		sections: data.sections || []
	};
}
async function importNodeSections(base, token, connectionId, sectionKeys) {
	const { res, data } = await nodeFetch(base, "/v1/import", {
		method: "POST",
		headers: { Authorization: `Bearer ${token}` },
		body: JSON.stringify({
			connectionId,
			sectionKeys
		})
	});
	if (!res.ok) return {
		ok: false,
		error: String(data.error || "Import failed")
	};
	return {
		ok: true,
		titles: data.titles || []
	};
}
async function addNodeFolder(base, token, folderPath) {
	const { res, data } = await nodeFetch(base, "/v1/folders", {
		method: "POST",
		headers: { Authorization: `Bearer ${token}` },
		body: JSON.stringify({ path: folderPath })
	});
	if (!res.ok) return {
		ok: false,
		error: String(data.error || "Could not add that folder")
	};
	return {
		ok: true,
		id: String(data.id || ""),
		name: String(data.name || folderPath),
		titles: data.titles || [],
		count: Number(data.count || 0)
	};
}
function nodeStreamUrl(base, token, id, connectionId) {
	const url = new URL(`${normalizeNodeUrl(base)}/v1/stream`);
	url.searchParams.set("id", id);
	if (connectionId) url.searchParams.set("connectionId", connectionId);
	return {
		url: url.toString(),
		token
	};
}
var INSTALLERS = [
	{
		id: "win",
		label: "Windows",
		arch: "x64",
		fileType: "ZIP archive",
		href: "/installers/CINEVO-Node-Windows-x64.zip",
		hint: "CINEVO icon · loopback exe",
		steps: [
			"Download and unzip",
			"Run CINEVO Node.exe",
			"Copy the pairing code"
		]
	},
	{
		id: "mac-arm",
		label: "macOS",
		arch: "Apple Silicon",
		fileType: "ZIP archive",
		href: "/installers/CINEVO-Node-macOS-Apple-Silicon.zip",
		hint: "CINEVO icon · drag to Applications",
		steps: [
			"Download and unzip",
			"Move Node to Applications",
			"Open and copy the code"
		]
	},
	{
		id: "mac-intel",
		label: "macOS",
		arch: "Intel",
		fileType: "ZIP archive",
		href: "/installers/CINEVO-Node-macOS-Intel.zip",
		hint: "CINEVO icon · drag to Applications",
		steps: [
			"Download and unzip",
			"Move Node to Applications",
			"Open and copy the code"
		]
	}
];
function InstallerCards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 sm:grid-cols-3",
		children: INSTALLERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-xl border border-cine-border bg-cine-surface p-4 transition hover:border-cine-cyan",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/node-icon.png",
						alt: "CINEVO Node",
						className: "size-11 rounded-lg"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-cine-border px-2 py-1 font-mono text-[10px] text-cine-faint",
						children: item.fileType
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-cine-muted",
					children: item.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-lg font-semibold tracking-tight",
					children: item.arch
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-cine-faint",
					children: item.hint
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 border-t border-cine-border pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 font-ui text-xs font-semibold text-cine-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { size: 14 }), " Setup"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-2 grid gap-1 text-xs text-cine-faint",
						children: item.steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mr-2 font-mono text-cine-cyan",
							children: [index + 1, "."]
						}), step] }, step))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: item.href,
					download: true,
					className: "mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-cine-cyan font-ui text-sm font-bold text-cine-bg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 16 }),
						" Download ",
						item.label
					]
				})
			]
		}, item.id))
	});
}
//#endregion
export { importNodeSections as a, nodeStreamUrl as c, revokeConnection as d, checkNode as i, normalizeNodeUrl as l, addNodeConnection as n, listNodeSections as o, addNodeFolder as r, nodeStatus as s, InstallerCards as t, pairNode as u };
