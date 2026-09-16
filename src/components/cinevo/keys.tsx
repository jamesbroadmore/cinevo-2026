import { useEffect } from "react";
import { useCinevo } from "@/lib/cinevo-store";
import { THEMES } from "@/lib/library";

function isTyping(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable;
}

export function Keys() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
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
