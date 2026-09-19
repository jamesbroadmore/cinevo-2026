import { type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/lib/use-motion";

export function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  variant = "rise",
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "rise" | "track" | "hold";
}) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={cn("cine-reveal", `cine-reveal-${variant}`, inView && "is-in", className)}
      style={{ "--cine-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
