"use client";

import { methodSteps } from "@/content/process";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function Method() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(index);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="method" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-[var(--max-content)] px-5 md:px-8">
        <Reveal>
          <SectionLabel>03 / МЕТОД</SectionLabel>
        </Reveal>

        <div className="mt-12 lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-display text-3xl leading-tight md:text-4xl lg:text-5xl">
              Структура до декора.
              <br />
              Смысл до эффекта.
            </h2>
            <div className="mt-8 hidden gap-2 lg:flex lg:flex-col">
              {methodSteps.map((step, i) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() =>
                    stepRefs.current[i]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                  className={cn(
                    "text-left text-sm transition-colors",
                    active === i
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]",
                  )}
                >
                  {step.id} — {step.title}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 space-y-16 lg:mt-0 lg:space-y-32">
            {methodSteps.map((step, i) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="border-t border-[var(--line-soft)] pt-8 lg:min-h-[40vh]"
              >
                <Reveal>
                  <span className="text-xs text-[var(--text-muted)]">
                    {step.id}
                  </span>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--text-secondary)]">
                    {step.description}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
