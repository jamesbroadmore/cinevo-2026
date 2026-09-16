import { r as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-CcvdN_gc.mjs";
import { t as authMiddleware } from "./middleware-DalfzU5e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ask-cinevo-EwCEQD_O.js
var recentRequests = /* @__PURE__ */ new Map();
function enforceRequestLimit(userId) {
	const now = Date.now();
	const active = (recentRequests.get(userId) ?? []).filter((time) => now - time < 6e4);
	if (active.length >= 10) throw new Error("Concierge request limit reached. Try again shortly.");
	active.push(now);
	recentRequests.set(userId, active);
}
var askCinevo_createServerFn_handler = createServerRpc({
	id: "7ebb63b2bc6bc267a35ed0fda7ece5b3241b752253db5bd836ae7020e8c799f4",
	name: "askCinevo",
	filename: "src/lib/ask-cinevo.ts"
}, (opts) => askCinevo.__executeServer(opts));
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
}).handler(askCinevo_createServerFn_handler, async ({ data, context }) => {
	enforceRequestLimit(context.userId);
	const question = data.question.trim().slice(0, 400);
	if (!question) return {
		ok: false,
		error: "Ask something first."
	};
	const titles = data.titles ?? [];
	if (!titles.length) return {
		ok: true,
		text: "Your library is empty. Add a folder or pair CINEVO Node, then ask again."
	};
	const apiKey = process.env.XAI_API_KEY;
	const catalog = titles.slice(0, 80).map((t) => `${t.title} (${t.year}, ${t.kind}, ${t.genre}, ${t.rating}) — ${t.synopsis}`).join("\n");
	if (!apiKey) {
		const q = question.toLowerCase();
		const pick = titles.find((t) => q.includes(t.genre.toLowerCase()) || q.includes(t.title.toLowerCase())) ?? titles[0];
		return {
			ok: true,
			text: `Tonight I’d put on ${pick.title} (${pick.year}). ${pick.synopsis}`
		};
	}
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			max_tokens: 280,
			messages: [{
				role: "system",
				content: "You are CINEVO’s concierge. Recommend only from the owner’s private catalog. Be concise, cinematic, no hype. Never invent titles."
			}, {
				role: "user",
				content: `Catalog:\n${catalog}\n\nQuestion: ${question}`
			}]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: "Concierge is offline right now."
	};
	return {
		ok: true,
		text: (await res.json()).choices?.[0]?.message?.content ?? "Nothing tonight."
	};
});
//#endregion
export { askCinevo_createServerFn_handler };
