import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type GlassVariant = "soft" | "medium" | "interactive";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
  variant?: GlassVariant;
  as?: "div" | "section" | "article";
};

const variantClass: Record<GlassVariant, string> = {
  soft: "glass-panel",
  medium: "glass-panel glass-panel-strong",
  interactive: "glass-panel glass-panel-interactive",
};

export function GlassPanel({
  children,
  className,
  variant = "soft",
  as: Tag = "div",
}: GlassPanelProps) {
  return (
    <Tag
      className={cn(
        "rounded-[var(--radius-xl)]",
        variantClass[variant],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
