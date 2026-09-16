import { Film, Heart, Home, LibraryBig, Menu, Search, Settings2, Share2, Tv, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useCinevo, type Room } from "@/lib/cinevo-store";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

type NavItem = { id: Room; label: string; icon: typeof Home };

const LIBRARY_NAV: NavItem[] = [
  { id: "stage", label: "Home", icon: Home },
  { id: "movies", label: "Movies", icon: Film },
  { id: "shows", label: "Series", icon: Tv },
  { id: "sidebar", label: "Add library", icon: LibraryBig },
];

export function Shell({
  children,
  overlays,
}: {
  children: React.ReactNode;
  overlays?: React.ReactNode;
}) {
  const room = useCinevo((s) => s.room);
  const setRoom = useCinevo((s) => s.setRoom);
  const setSearchOpen = useCinevo((s) => s.setSearchOpen);
  const setSettingsOpen = useCinevo((s) => s.setSettingsOpen);
  const setCoreOpen = useCinevo((s) => s.setCoreOpen);
  const night = useCinevo((s) => s.prefs.nightMode);
  const zen = useCinevo((s) => s.prefs.zenMode);
  const favorites = useCinevo((s) => s.favorites);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    if (!LIBRARY_NAV.some((item) => item.id === room) && room !== "browse") setRoom("stage");
  }, [room, setRoom]);

  useEffect(() => {
    if (!drawer) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawer(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [drawer]);

  const go = (id: Room) => {
    setRoom(id);
    setDrawer(false);
  };

  const sidebar = (
    <aside className={cn("cinevo-sidebar", drawer && "is-open")} aria-label="CINEVO navigation">
      <div className="cinevo-sidebar__topline">
        <Link to="/" aria-label="CINEVO home" className="sidebar-brand" onClick={() => setDrawer(false)}>
          <Logo size="sm" tagline={false} />
        </Link>
        <button type="button" aria-label="Close navigation" className="sidebar-close md:hidden" onClick={() => setDrawer(false)}>
          <X size={18} />
        </button>
      </div>
      <button
        type="button"
        className="sidebar-search"
        onClick={() => {
          setSearchOpen(true);
          setDrawer(false);
        }}
      >
        <Search size={16} aria-hidden="true" />
        <span>Search</span>
        <kbd>⌘K</kbd>
      </button>
      <nav className="sidebar-nav" aria-label="Library">
        <span className="sidebar-label">Library</span>
        {LIBRARY_NAV.map(({ label, id, icon: Icon }) => (
          <button key={label} type="button" className={cn(room === id && "is-active")} onClick={() => go(id)}>
            <Icon size={16} aria-hidden="true" />
            <span>{label}</span>
          </button>
        ))}
        {favorites.length ? (
          <button type="button" className={cn(room === "sidebar" && "is-active")} onClick={() => go("movies")}>
            <Heart size={16} aria-hidden="true" />
            <span>My list</span>
          </button>
        ) : null}
      </nav>
      <div className="sidebar-section">
        <span className="sidebar-label">Account</span>
        <button
          type="button"
          onClick={() => {
            setCoreOpen(true);
            setDrawer(false);
          }}
        >
          <Share2 size={16} />
          <span>Sharing & privacy</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setSettingsOpen(true);
            setDrawer(false);
          }}
        >
          <Settings2 size={16} />
          <span>Settings</span>
        </button>
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-privacy-note">
          <span className="sidebar-privacy-dot" />
          <span>
            <b>Private by default</b>
            <small>Only libraries you add</small>
          </span>
        </div>
        <Link to="/" className="sidebar-logout">
          <span className="sidebar-exit-mark" aria-hidden="true">
            ←
          </span>
          <span>Back to site</span>
        </Link>
      </div>
    </aside>
  );

  return (
    <div className={cn("cinevo-house", night && "cinevo-night", zen && "cinevo-zen")}>
      <div className="house-still" />
      <div className="house-ambient" />
      <div className="sidebar-mobile-bar md:hidden">
        <button type="button" aria-label="Open navigation" onClick={() => setDrawer(true)}>
          <Menu size={18} />
        </button>
        <Logo size="sm" tagline={false} />
        <button type="button" aria-label="Search" onClick={() => setSearchOpen(true)}>
          <Search size={18} />
        </button>
      </div>
      <div className="cinevo-sidebar-desktop max-md:hidden">{sidebar}</div>
      {drawer ? (
        <div className="sidebar-backdrop md:hidden" onMouseDown={() => setDrawer(false)}>
          <div onMouseDown={(e) => e.stopPropagation()}>{sidebar}</div>
        </div>
      ) : null}
      <main className={cn("house-main", room !== "stage" && "house-main--page")}>{children}</main>
      {overlays}
    </div>
  );
}
