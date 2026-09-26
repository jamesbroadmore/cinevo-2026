import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FolderOpen, Play, Server, Shield } from "lucide-react";
import { InstallerCards } from "@/components/cinevo/installers";
import { Logo } from "@/components/cinevo/logo";
import { PlatformDownloads } from "@/components/cinevo/platform-downloads";

export const Route = createFileRoute("/")({ component: Home });

const STEPS = [
  {
    n: "1",
    t: "Add a source",
    d: "Pick a folder on this computer, sign in with Plex, or pair CINEVO Node for Jellyfin.",
  },
  {
    n: "2",
    t: "Choose what to show",
    d: "Select only the movie and series libraries you want indexed. Nothing else is scanned.",
  },
  {
    n: "3",
    t: "Press play",
    d: "Watch here in the browser. Your files stay on your machines — CINEVO never hosts them.",
  },
];

const FEATURES = [
  {
    t: "Your files stay yours",
    d: "Folders, Plex, or Jellyfin. Media never uploads to CINEVO. We index names so you can browse.",
  },
  {
    t: "Share on purpose",
    d: "Invite a friend with a name, a library, and an expiry. Revoke it any time.",
  },
  {
    t: "Ask only your library",
    d: "Optional AI suggestions use titles already in this house. Nothing leaves unless you opt in.",
  },
];

function Home() {
  return (
    <div className="public-home">
      <header className="public-nav">
        <nav aria-label="Homepage">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <Link to="/node">Node</Link>
        </nav>
        <div className="public-nav__actions">
          <Link to="/login" className="public-nav__login">
            Log in
          </Link>
          <Link to="/app" className="public-nav__enter">
            Open library <ArrowRight size={14} />
          </Link>
        </div>
      </header>

      <main>
        <section className="public-hero" aria-labelledby="public-hero-title">
          <img src="/stills/hero-theater.jpg" alt="" className="public-hero__still" />
          <div className="public-hero__veil" />
          <div className="public-hero__motion" aria-hidden="true">
            <div className="public-hero__motion-track">
              {["projector.jpg", "neon-alley.jpg", "screen-glow.jpg", "theater.jpg", "doorway.jpg"].map((still) => (
                <img key={still} src={`/stills/${still}`} alt="" />
              ))}
            </div>
          </div>
          <div className="public-hero__content">
            <div className="public-hero__logo" aria-label="CINEVO">
              <Logo size="xl" tagline />
            </div>
            <span className="public-kicker">Private cinema</span>
            <h1 id="public-hero-title">
              Your movies.
              <br />
              <em>On your terms.</em>
            </h1>
            <p>
              CINEVO plays the films you already own — from Plex, Jellyfin, or a folder on this computer. No ads, no
              catalogue, no subscription.
            </p>
            <div className="public-hero__actions">
              <Link to="/app" className="public-primary">
                <Play size={15} fill="currentColor" /> Open your library
              </Link>
              <a href="#how" className="public-secondary">
                See how it works
              </a>
            </div>
            <ul className="public-hero__points">
              <li>
                <FolderOpen size={16} /> Folder on this computer
              </li>
              <li>
                <Server size={16} /> Plex or Jellyfin
              </li>
              <li>
                <Shield size={16} /> Nothing uploaded
              </li>
            </ul>
          </div>
        </section>

        <section className="home-reel" id="how" aria-labelledby="home-how-title">
          <header>
            <div>
              <span className="public-kicker">Three steps</span>
              <h2 id="home-how-title">From empty to playing in minutes.</h2>
            </div>
            <p>Your library stays empty until you add a source. CINEVO never fills it with samples.</p>
          </header>
          <div className="home-library-steps">
            {STEPS.map((step) => (
              <article key={step.n}>
                <span>{step.n}</span>
                <h3>{step.t}</h3>
                <p>{step.d}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-highlights" id="features" aria-labelledby="home-features-title">
          <header>
            <span className="public-kicker">Built for owners</span>
            <h2 id="home-features-title">Clear controls. No dark patterns.</h2>
          </header>
          <div className="home-highlights__grid">
            {FEATURES.map((item) => (
              <article key={item.t} className="home-highlight">
                <h3>{item.t}</h3>
                <p>{item.d}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-platforms" id="platforms">
          <span className="public-kicker">Watch anywhere</span>
          <h2>One library. Browser, phone, or TV.</h2>
          <p>Start in the browser now. Pair Node when your files live on another computer.</p>
          <PlatformDownloads />
        </section>

        <section className="home-downloads" id="downloads">
          <span className="public-kicker">CINEVO Node</span>
          <h2>Files on another computer? Pair Node.</h2>
          <p>
            Install Node on the machine that holds the files. Pair once with a short code. Jellyfin and disk paths stay
            on that computer.
          </p>
          <InstallerCards />
          <Link to="/node" className="public-text-link">
            Open pairing <ArrowRight size={15} />
          </Link>
        </section>

        <section className="home-closing">
          <div>
            <span className="public-kicker">Ready when you are</span>
            <h2>
              Add a library.
              <br />
              <em>Press play.</em>
            </h2>
          </div>
          <div>
            <p>No catalogue to browse. No account required to start on this device.</p>
            <Link to="/app" className="public-primary">
              Open your library <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <footer className="public-footer">
        <Link to="/" className="public-brand" aria-label="CINEVO home">
          <Logo size="sm" />
        </Link>
        <p>Your movies. On your terms.</p>
        <div className="public-footer__links">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Create account</Link>
          <Link to="/node">Node</Link>
        </div>
      </footer>
    </div>
  );
}
