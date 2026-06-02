"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";

type TextLoopProps = {
  text: string;
  className?: string;
};

export function TextLoop({ text, className }: TextLoopProps) {
  const reduced = useReducedMotion();
  const repeated = `${text} `.repeat(4);

  return (
    <div
      className={cn(
        "overflow-hidden border-y border-[var(--line-soft)] py-4",
        className,
      )}
      aria-hidden
    >
      <div
        className={cn(
          "flex whitespace-nowrap text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]",
          !reduced && "animate-marquee",
        )}
      >
        <span className="pr-16">{repeated}</span>
        {!reduced && <span className="pr-16">{repeated}</span>}
      </div>
    </div>
  );
}
