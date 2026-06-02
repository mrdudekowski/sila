"use client";

import { principles } from "@/content/principles";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function Principles() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[var(--max-content)] px-5 md:px-8">
        <Reveal>
          <SectionLabel>05 / ПРИНЦИПЫ</SectionLabel>
        </Reveal>

        <ul className="mt-12 divide-y divide-[var(--line-soft)] border-y border-[var(--line-soft)]">
          {principles.map((item, i) => (
            <Reveal key={item.id} delay={0.05 * i}>
              <li>
                <div
                  className={cn(
                    "group flex flex-col gap-2 py-6 transition-transform duration-300 md:flex-row md:items-center md:justify-between md:py-8",
                    "md:group-hover:translate-x-2",
                  )}
                >
                  <span className="text-sm text-[var(--text-muted)]">
                    {item.id}
                  </span>
                  <p className="font-display text-xl md:text-2xl md:group-hover:text-[var(--text-primary)]">
                    {item.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
