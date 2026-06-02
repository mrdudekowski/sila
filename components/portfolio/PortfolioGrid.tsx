"use client";

import { workCategories, works, type Work } from "@/content/works";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { CasePreviewModal } from "@/components/portfolio/CasePreviewModal";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

const aspects: Array<"tall" | "wide" | "square"> = ["tall", "wide", "tall", "square"];

export function PortfolioGrid() {
  const [filter, setFilter] = useState<(typeof workCategories)[number]>("Все");
  const [selected, setSelected] = useState<Work | null>(null);

  const filtered = useMemo(() => {
    if (filter === "Все") return works;
    return works.filter((w) => w.category === filter);
  }, [filter]);

  return (
    <>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Фильтр работ"
      >
        {workCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-red-bright)]",
              filter === cat
                ? "border-[var(--line-medium)] text-[var(--text-primary)]"
                : "border-[var(--line-soft)] text-[var(--text-muted)] hover:border-[var(--line-medium)] hover:text-[var(--text-secondary)]",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
        {filtered.map((work, i) => (
          <Reveal key={work.slug} delay={0.05 * (i % 4)}>
            <PortfolioCard
              work={work}
              aspect={aspects[i % aspects.length]}
              onOpen={setSelected}
            />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-sm text-[var(--text-muted)]">
          В этой категории пока нет опубликованных работ.
        </p>
      )}

      <CasePreviewModal work={selected} onClose={() => setSelected(null)} />
    </>
  );
}
