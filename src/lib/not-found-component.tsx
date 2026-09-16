import { Link } from "@tanstack/react-router";
import { Home, LibraryBig } from "lucide-react";
import { Mark } from "@/components/cinevo/logo";

export function AppNotFoundComponent() {
  return (
    <main className="cinevo-not-found" aria-labelledby="not-found-title">
      <div className="cinevo-not-found__mark" aria-hidden="true">
        <Mark className="size-10" />
      </div>
      <span className="cinevo-kicker">Page not found</span>
      <h1 id="not-found-title">This page isn’t in CINEVO.</h1>
      <p>The link may be outdated. Head home or open your library.</p>
      <div className="cinevo-not-found__actions">
        <Link className="cinevo-action cinevo-action--primary" to="/">
          <Home className="size-4" aria-hidden="true" />
          Home
        </Link>
        <Link className="cinevo-action" to="/app">
          <LibraryBig className="size-4" aria-hidden="true" />
          Open library
        </Link>
      </div>
    </main>
  );
}
