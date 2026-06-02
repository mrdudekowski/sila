"use client";

import { featuredWorks } from "@/content/works";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { useState } from "react";

export function SelectedWorks() {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const duplicated = [...featuredWorks, ...featuredWorks];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[var(--max-content)] px-5 md:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>04 / ИЗБРАННЫЕ РАБОТЫ</SectionLabel>
            <h2 className="mt-6 font-display text-3xl md:text-4xl">
              Проекты, в которых форма работает на доверие.
            </h2>
          </div>
          <Button href="/portfolio" variant="secondary">
            Все работы
          </Button>
        </Reveal>
      </div>

      <div
        className="relative mt-12 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        role="region"
        aria-label="Избранные работы"
      >
        <div
          className={cn(
            "flex w-max gap-5 px-5",
            !reduced && !paused && "animate-marquee",
          )}
        >
          {duplicated.map((work, i) => (
            <Link
              key={`${work.slug}-${i}`}
              href={work.href ?? `/portfolio#${work.slug}`}
              className="group w-[min(85vw,340px)] shrink-0"
            >
              <article className="glass-panel glass-panel-interactive overflow-hidden rounded-[var(--radius-lg)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="340px"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    {work.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl">{work.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs text-[var(--text-secondary)]">
                    {work.shortDescription}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
