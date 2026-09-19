import { cn } from "@/lib/utils";

const FACETS: [string, string][] = [
  ["70,40 70,120 113.33,120", "#FF4DA5"],
  ["70,120 70,200 113.33,120", "#C13BE0"],
  ["70,200 135,160 113.33,120", "#FF9F1C"],
  ["135,160 200,120 113.33,120", "#3E8EFF"],
  ["200,120 135,80 113.33,120", "#55CFFF"],
  ["135,80 70,40 113.33,120", "#8B2FFF"],
];

export function Mark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={cn("brand__mark", className)}
      style={{ borderRadius: "24px" }}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      {FACETS.map(([points, fill]) => (
        <polygon
          key={fill}
          points={points}
          fill={fill}
          stroke="#FFFFFF"
          strokeOpacity="0.35"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      ))}
      <polygon points="150,88 168,100 150,108" fill="#FFFFFF" fillOpacity="0.55" />
    </svg>
  );
}

export function Logo({
  size = "md",
  className,
  tagline = false,
}: {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  tagline?: boolean;
}) {
  const showTag = tagline && size !== "sm";
  return (
    <span className={cn("brand", `brand--${size}`, className)}>
      <Mark />
      <span>
        <b>CINEVO</b>
        {showTag ? <small>Your movies. On your terms.</small> : null}
      </span>
    </span>
  );
}
