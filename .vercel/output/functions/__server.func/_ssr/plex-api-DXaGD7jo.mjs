import { r as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-CcvdN_gc.mjs";
import { t as authMiddleware } from "./middleware-DalfzU5e.mjs";
import { i as parsePlexSections, n as parsePlexMetadata, r as parsePlexResources, s as rankConnections } from "./plex-wJDAkLsa.mjs";
import { lookup } from "node:dns/promises";
import { isIP } from "node:net";
//#region node_modules/.nitro/vite/services/ssr/assets/plex-api-DXaGD7jo.js
var blockedHostnames = /* @__PURE__ */ new Set([
	"localhost",
	"localhost.localdomain",
	"metadata.google.internal"
]);
function isPrivateIpv4(address) {
	const parts = address.split(".").map(Number);
	if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part) || part < 0 || part > 255)) return true;
	const [a, b, c] = parts;
	return a === 0 || a === 10 || a === 100 && b >= 64 && b <= 127 || a === 127 || a === 169 && b === 254 || a === 172 && b >= 16 && b <= 31 || a === 192 && b === 0 && c === 0 || a === 192 && b === 0 && c === 2 || a === 192 && b === 168 || a === 198 && (b === 18 || b === 19) || a === 198 && b === 51 && c === 100 || a === 203 && b === 0 && c === 113 || a >= 224;
}
function isPrivateIpv6(address) {
	const normalized = address.toLowerCase().split("%")[0];
	if (normalized === "::1" || normalized === "::" || normalized.startsWith("fc") || normalized.startsWith("fd") || normalized.startsWith("fe8") || normalized.startsWith("fe9") || normalized.startsWith("fea") || normalized.startsWith("feb")) return true;
	const mapped = normalized.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/);
	return Boolean(mapped && isPrivateIpv4(mapped[1]));
}
async function assertPublicProviderUrl(value) {
	const url = new URL(value);
	if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) throw new Error("Invalid server URL");
	const hostname = url.hostname.toLowerCase().replace(/^\[|\]$/g, "");
	if (blockedHostnames.has(hostname)) throw new Error("This server address is not allowed");
	const addresses = isIP(hostname) ? [hostname] : (await lookup(hostname, { all: true })).map((entry) => entry.address);
	if (!addresses.length || addresses.some((address) => isPrivateIpv4(address) || isPrivateIpv6(address))) throw new Error("This server address is not allowed");
	return url.toString().replace(/\/$/, "");
}
function plexHeaders(clientId, token) {
	return {
		Accept: "application/json",
		"X-Plex-Product": "CINEVO",
		"X-Plex-Client-Identifier": clientId,
		"X-Plex-Version": "1.0.0",
		"X-Plex-Platform": "Web",
		"X-Plex-Device": "Web",
		"X-Plex-Device-Name": "CINEVO",
		...token ? { "X-Plex-Token": token } : {}
	};
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
function genericProviderError(fallback) {
	return fallback;
}
async function plexJson(url, headers, ms = 8e3, init = {}) {
	const res = await fetch(url, {
		...init,
		headers: {
			...headers,
			...init.headers
		},
		signal: AbortSignal.timeout(ms)
	});
	const data = await res.json().catch(() => ({}));
	if (!res.ok) {
		const row = Array.isArray(data) ? {} : data;
		throw new Error(String(row.error || row.message || `Plex returned ${res.status}`));
	}
	return data;
}
var plexStartPin_createServerFn_handler = createServerRpc({
	id: "8fdebd237b20b8988d4b74313d86857020fb83c844c4c09a52255338ac0a62c2",
	name: "plexStartPin",
	filename: "src/lib/plex-api.ts"
}, (opts) => plexStartPin.__executeServer(opts));
var plexStartPin = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => ({ clientId: requireText(input?.clientId, "client id", 160) })).handler(plexStartPin_createServerFn_handler, async ({ data }) => {
	const clientId = data.clientId.trim();
	if (!clientId) return {
		ok: false,
		error: "Missing Plex client id."
	};
	try {
		const body = await plexJson("https://plex.tv/api/v2/pins?strong=true", plexHeaders(clientId), 8e3, { method: "POST" });
		const id = Number(body.id);
		const code = String(body.code || "");
		if (!id || !code) return {
			ok: false,
			error: "Plex did not issue a sign-in pin."
		};
		return {
			ok: true,
			id,
			code
		};
	} catch (err) {
		return {
			ok: false,
			error: genericProviderError("Could not start Plex sign-in.")
		};
	}
});
var plexPollPin_createServerFn_handler = createServerRpc({
	id: "b1a629896a5a292418e73f888427598ab0a902c8f963c938f2e4cd8a5ed40586",
	name: "plexPollPin",
	filename: "src/lib/plex-api.ts"
}, (opts) => plexPollPin.__executeServer(opts));
var plexPollPin = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	const pinId = Number(input?.pinId);
	if (!Number.isInteger(pinId) || pinId < 1) throw new Error("Invalid Plex pin");
	return {
		clientId: requireText(input?.clientId, "client id", 160),
		pinId
	};
}).handler(plexPollPin_createServerFn_handler, async ({ data }) => {
	try {
		const body = await plexJson(`https://plex.tv/api/v2/pins/${data.pinId}`, plexHeaders(data.clientId), 6e3);
		return {
			ok: true,
			token: (typeof body.authToken === "string" ? body.authToken : "") || null
		};
	} catch (err) {
		return {
			ok: false,
			error: genericProviderError("Plex sign-in timed out.")
		};
	}
});
var plexListServers_createServerFn_handler = createServerRpc({
	id: "fe32bd140d3583c344ef891531d16c93349abb6d1e02a5fadc3e79e692953852",
	name: "plexListServers",
	filename: "src/lib/plex-api.ts"
}, (opts) => plexListServers.__executeServer(opts));
var plexListServers = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => ({
	clientId: requireText(input?.clientId, "client id", 160),
	token: requireText(input?.token, "token", 512)
})).handler(plexListServers_createServerFn_handler, async ({ data }) => {
	const headers = plexHeaders(data.clientId, data.token);
	try {
		const [userRaw, resources] = await Promise.all([plexJson("https://plex.tv/api/v2/user", headers), plexJson("https://plex.tv/api/v2/resources?includeHttps=1&includeRelay=1", headers)]);
		const user = userRaw;
		const servers = parsePlexResources(resources);
		return {
			ok: true,
			username: String(user.username || user.title || user.email || "Plex"),
			servers
		};
	} catch (err) {
		return {
			ok: false,
			error: genericProviderError("Could not list Plex servers.")
		};
	}
});
var plexOpenServer_createServerFn_handler = createServerRpc({
	id: "3b4bb4c4449e4f7cbed728d66d982ae6de5dcd43acca1136797adc964162c2ee",
	name: "plexOpenServer",
	filename: "src/lib/plex-api.ts"
}, (opts) => plexOpenServer.__executeServer(opts));
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
}).handler(plexOpenServer_createServerFn_handler, async ({ data }) => {
	const token = data.server.accessToken || data.token;
	const ranked = [];
	for (const connection of rankConnections(data.server.connections)) try {
		ranked.push({
			...connection,
			uri: await assertPublicProviderUrl(connection.uri)
		});
	} catch {}
	if (!ranked.length) return {
		ok: false,
		error: "That server has no reachable connections."
	};
	let last = "Could not reach that Plex server from here.";
	for (const conn of ranked) try {
		const body = await plexJson(`${conn.uri}/library/sections`, {
			...plexHeaders(data.clientId, token),
			"X-Plex-Token": token
		}, conn.local ? 2500 : 6e3);
		const sections = parsePlexSections(body);
		return {
			ok: true,
			uri: conn.uri,
			kind: conn.relay ? "relay" : conn.local ? "local" : "remote",
			sections
		};
	} catch (err) {
		last = genericProviderError("Could not reach that Plex server from here.");
	}
	return {
		ok: false,
		error: last
	};
});
var plexImportSections_createServerFn_handler = createServerRpc({
	id: "a2c3c4f890996a4f965cfe90be75b904e1ef7c0d41c7a73da07e74c8d6682ac0",
	name: "plexImportSections",
	filename: "src/lib/plex-api.ts"
}, (opts) => plexImportSections.__executeServer(opts));
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
}).handler(plexImportSections_createServerFn_handler, async ({ data }) => {
	await assertPublicProviderUrl(data.uri);
	const headers = {
		...plexHeaders(data.clientId, data.token),
		"X-Plex-Token": data.token
	};
	const titles = [];
	try {
		for (const key of data.sectionKeys.slice(0, 12)) {
			const body = await plexJson(`${data.uri}/library/sections/${encodeURIComponent(key)}/all?X-Plex-Container-Start=0&X-Plex-Container-Size=80`, headers, 12e3);
			titles.push(...parsePlexMetadata(body, data.sourceLabel));
		}
		const seen = /* @__PURE__ */ new Set();
		return {
			ok: true,
			titles: titles.filter((t) => seen.has(t.id) ? false : (seen.add(t.id), true))
		};
	} catch (err) {
		return {
			ok: false,
			error: genericProviderError("Could not import that Plex library.")
		};
	}
});
//#endregion
export { plexImportSections_createServerFn_handler, plexListServers_createServerFn_handler, plexOpenServer_createServerFn_handler, plexPollPin_createServerFn_handler, plexStartPin_createServerFn_handler };
