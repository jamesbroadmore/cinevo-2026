import { isVideoFile, rememberBlob } from "./library";

const DB = "cinevo-fs";
const STORE = "handles";

type StoredHandle = { handle: FileSystemDirectoryHandle; folderName: string };

type PermHandle = FileSystemDirectoryHandle & {
  queryPermission?: (opts: { mode: "read" }) => Promise<"granted" | "denied" | "prompt">;
  requestPermission?: (opts: { mode: "read" }) => Promise<"granted" | "denied" | "prompt">;
};

async function permission(handle: FileSystemDirectoryHandle, request: boolean) {
  const h = handle as PermHandle;
  const current = h.queryPermission ? await h.queryPermission({ mode: "read" }) : "granted";
  if (current === "granted") return true;
  if (!request || !h.requestPermission) return false;
  return (await h.requestPermission({ mode: "read" })) === "granted";
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function saveFolderHandle(id: string, handle: FileSystemDirectoryHandle, folderName: string) {
  try {
    const db = await openDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).put({ handle, folderName } satisfies StoredHandle, id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch {
    /* private mode / unsupported */
  }
}

export async function deleteFolderHandle(id: string) {
  try {
    const db = await openDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).delete(id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch {
    /* ignore */
  }
}

async function walk(dir: FileSystemDirectoryHandle, out: File[], depth = 0) {
  if (depth > 6 || out.length > 80) return;
  // @ts-expect-error async iterator on directory handles
  for await (const entry of dir.values()) {
    if (out.length >= 80) return;
    if (entry.kind === "file") {
      const file = await (entry as FileSystemFileHandle).getFile();
      if (isVideoFile(file.name)) out.push(file);
    } else if (entry.kind === "directory") {
      await walk(entry as FileSystemDirectoryHandle, out, depth + 1);
    }
  }
}

function folderTitleId(folderName: string, file: File) {
  let h = 0;
  const s = `${folderName}:${file.name}:${file.size}`;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return `folder-${h.toString(16)}`;
}

async function loadAll(): Promise<StoredHandle[]> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).getAll();
    req.onsuccess = () => resolve((req.result as StoredHandle[]) || []);
    req.onerror = () => reject(req.error);
  });
}

export async function restoreFolderBlobs() {
  if (typeof indexedDB === "undefined") return 0;
  try {
    const records = await loadAll();
    let n = 0;
    for (const rec of records) {
      if (!rec?.handle) continue;
      if (!(await permission(rec.handle, false))) continue;
      const files: File[] = [];
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

export async function reconnectFolders() {
  if (typeof indexedDB === "undefined") return 0;
  try {
    const records = await loadAll();
    let n = 0;
    for (const rec of records) {
      if (!rec?.handle) continue;
      if (!(await permission(rec.handle, true))) continue;
      const files: File[] = [];
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
