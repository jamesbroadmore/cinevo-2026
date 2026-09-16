import { useMemo } from "react";
import type { Title } from "./catalog";
import { useCinevo, type SourceFilter } from "./cinevo-store";
import type { LibraryTitle } from "./library";

export function applySourceFilter(
  filter: SourceFilter,
  local: LibraryTitle[],
  remote: LibraryTitle[],
): Title[] {
  if (filter === "folder") return local;
  if (filter === "plex") return remote.filter((t) => t.source === "plex");
  if (filter === "jellyfin") return remote.filter((t) => t.source === "jellyfin");
  return [...local, ...remote];
}

export function useLibrary() {
  const local = useCinevo((s) => s.localTitles);
  const remote = useCinevo((s) => s.remoteTitles);
  const filter = useCinevo((s) => s.sourceFilter);
  return useMemo(() => applySourceFilter(filter, local, remote), [local, remote, filter]);
}
