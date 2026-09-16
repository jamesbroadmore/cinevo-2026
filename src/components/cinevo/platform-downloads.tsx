import { ArrowRight, Monitor, Smartphone, HardDrive } from "lucide-react";
import { Link } from "@tanstack/react-router";

const PLATFORMS = [
  {
    icon: Monitor,
    label: "Web",
    detail: "Works in any modern browser — start here.",
    action: "Open CINEVO",
    to: "/app" as const,
  },
  {
    icon: HardDrive,
    label: "CINEVO Node",
    detail: "Pair the computer that holds your files.",
    action: "Pair Node",
    to: "/node" as const,
  },
  {
    icon: Smartphone,
    label: "Phone & TV",
    detail: "Same app, packaged for Android and Android TV.",
    action: "See Node first",
    to: "/node" as const,
  },
];

export function PlatformDownloads() {
  return (
    <div className="platform-downloads" aria-label="CINEVO platforms">
      {PLATFORMS.map(({ icon: Icon, label, detail, action, to }) => (
        <article key={label} className="platform-card">
          <Icon size={20} aria-hidden="true" />
          <div>
            <h3>{label}</h3>
            <p>{detail}</p>
          </div>
          <Link to={to}>
            {action} <ArrowRight size={14} />
          </Link>
        </article>
      ))}
    </div>
  );
}

export function AndroidBuildInstructions() {
  return null;
}
