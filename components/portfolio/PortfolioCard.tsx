"use client";

import type { Work } from "@/content/works";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type PortfolioCardProps = {
  work: Work;
  aspect?: "tall" | "wide" | "square";
  onOpen: (work: Work) => void;
};

const aspectClass = {
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  square: "aspect-square",
};

export function PortfolioCard({
  work,
  aspect = "tall",
  onOpen,
}: PortfolioCardProps) {
  return (
    <article
      id={work.slug}
      className="scroll-mt-28"
    >
      <button
        type="button"
        onClick={() => onOpen(work)}
        className={cn(
          "group w-full text-left glass-panel glass-panel-interactive overflow-hidden rounded-[var(--radius-lg)]",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-red-bright)]",
        )}
      >
        <div className={cn("relative overflow-hidden", aspectClass[aspect])}>
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex items-start justify-between gap-4 p-5 md:p-6">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--text-muted)]">
              {work.category}
            </p>
            <h2 className="mt-2 font-display text-2xl">{work.title}</h2>
            <p className="mt-3 line-clamp-2 text-sm text-[var(--text-secondary)]">
              {work.shortDescription}
            </p>
          </div>
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line-soft)] transition-colors group-hover:border-[var(--line-medium)]"
            aria-hidden
          >
            <ArrowUpRight size={16} />
          </span>
        </div>
      </button>
    </article>
  );
}
