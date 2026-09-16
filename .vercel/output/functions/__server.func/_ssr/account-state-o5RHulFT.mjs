import { r as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-CcvdN_gc.mjs";
import { i as getSql } from "./server-D0Dnxo_9.mjs";
import { requireUserId } from "./verify.server-4nZPjslc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-state-o5RHulFT.js
var loadAccountState_createServerFn_handler = createServerRpc({
	id: "81e82ee8c48e302a7ffa0948ac4c34b39446b0786af444c9ff6b7d56235208a4",
	name: "loadAccountState",
	filename: "src/lib/account-state.ts"
}, (opts) => loadAccountState.__executeServer(opts));
var loadAccountState = createServerFn({ method: "GET" }).handler(loadAccountState_createServerFn_handler, async () => {
	const userId = await requireUserId();
	return (await (await getSql()).query("select state from cinevo_user_state where \"userId\" = $1 limit 1", [userId]))[0]?.state ?? null;
});
var saveAccountState_createServerFn_handler = createServerRpc({
	id: "4cc0050032cddacf64896ace65373bea6350bc6f2b129b5d89fcedb99eb55a5a",
	name: "saveAccountState",
	filename: "src/lib/account-state.ts"
}, (opts) => saveAccountState.__executeServer(opts));
var saveAccountState = createServerFn({ method: "POST" }).validator((input) => input).handler(saveAccountState_createServerFn_handler, async ({ data }) => {
	const userId = await requireUserId();
	const sql = await getSql();
	const id = `cinevo-${userId}`;
	await sql.query(`insert into cinevo_user_state (id, "userId", state, "updatedAt")
       values ($1, $2, $3::jsonb, now())
       on conflict ("userId") do update set state = excluded.state, "updatedAt" = now()`, [
		id,
		userId,
		JSON.stringify(data.state)
	]);
	return { ok: true };
});
//#endregion
export { loadAccountState_createServerFn_handler, saveAccountState_createServerFn_handler };
