import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { a as isVideoFile, d as rememberBlob } from "./cinevo-store-CJ6n_t4z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/folder-handles-B1UqsjdR.js
var folder_handles_exports = /* @__PURE__ */ __exportAll({
	deleteFolderHandle: () => deleteFolderHandle,
	reconnectFolders: () => reconnectFolders,
	saveFolderHandle: () => saveFolderHandle
});
var DB = "cinevo-fs";
var STORE = "handles";
async function permission(handle, request) {
	const h = handle;
	if ((h.queryPermission ? await h.queryPermission({ mode: "read" }) : "granted") === "granted") return true;
	if (!request || !h.requestPermission) return false;
	return await h.requestPermission({ mode: "read" }) === "granted";
}
function openDb() {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open(DB, 1);
		req.onupgradeneeded = () => {
			if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE);
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
}
async function saveFolderHandle(id, handle, folderName) {
	try {
		const db = await openDb();
		await new Promise((resolve, reject) => {
			const tx = db.transaction(STORE, "readwrite");
			tx.objectStore(STORE).put({
				handle,
				folderName
			}, id);
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
		});
	} catch {}
}
async function deleteFolderHandle(id) {
	try {
		const db = await openDb();
		await new Promise((resolve, reject) => {
			const tx = db.transaction(STORE, "readwrite");
			tx.objectStore(STORE).delete(id);
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
		});
	} catch {}
}
async function walk(dir, out, depth = 0) {
	if (depth > 6 || out.length > 80) return;
	for await (const entry of dir.values()) {
		if (out.length >= 80) return;
		if (entry.kind === "file") {
			const file = await entry.getFile();
			if (isVideoFile(file.name)) out.push(file);
		} else if (entry.kind === "directory") await walk(entry, out, depth + 1);
	}
}
function folderTitleId(folderName, file) {
	let h = 0;
	const s = `${folderName}:${file.name}:${file.size}`;
	for (let i = 0; i < s.length; i++) h = h * 31 + s.charCodeAt(i) >>> 0;
	return `folder-${h.toString(16)}`;
}
async function loadAll() {
	const db = await openDb();
	return new Promise((resolve, reject) => {
		const req = db.transaction(STORE, "readonly").objectStore(STORE).getAll();
		req.onsuccess = () => resolve(req.result || []);
		req.onerror = () => reject(req.error);
	});
}
async function reconnectFolders() {
	if (typeof indexedDB === "undefined") return 0;
	try {
		const records = await loadAll();
		let n = 0;
		for (const rec of records) {
			if (!rec?.handle) continue;
			if (!await permission(rec.handle, true)) continue;
			const files = [];
			await walk(rec.handle, files);
			for (const file of files) {
				rememberBlob(folderTitleId(rec.folderName, file), file);
				n += 1;
			}
		}
		return n;
	} catch {
		return 0;
	}
}
//#endregion
export { reconnectFolders as n, saveFolderHandle as r, folder_handles_exports as t };
