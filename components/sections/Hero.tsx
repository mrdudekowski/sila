"use client";

import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { Button, buttonClassName } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const lines = ["Создаём форму,", "в которой бизнес", "обретает силу."];

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-[var(--header-height)]">
      <div className="pointer-events-none absolute inset-0">
        <AmbientGlow
          className="right-[-5%] bottom-[10%] h-[280px] w-[280px] opacity-60"
          tone="bronze"
        />
        <Image
          src="/patterns/ethno-grid.svg"
          alt=""
          width={800}
          height={800}
          className="ethno-pattern absolute right-[-5%] top-[15%] h-[min(70vw,520px)] w-auto opacity-[0.08]"
          aria-hidden
          priority
        />
        <Image
          src="/patterns/symbol-strength.svg"
          alt=""
          width={400}
          height={400}
          className={cn(
            "ethno-pattern absolute left-[5%] bottom-[18%] h-48 w-48 md:h-64 md:w-64",
            !reduced && "animate-drift",
          )}
          aria-hidden
          priority
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[var(--max-content)] px-5 pb-20 md:px-8">
        <GlassPanel
          variant="interactive"
          className="relative max-w-3xl p-8 md:p-12 lg:p-14"
        >
          <motion.p
            className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-[var(--text-muted)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduced ? 0 : 0.6 }}
          >
            SILA / DIGITAL ARCHITECTURE
          </motion.p>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] text-[var(--text-primary)] md:text-5xl lg:text-6xl">
            {lines.map((line, i) => (
              <motion.span
                key={line}
                className="block text-balance"
                initial={{ opacity: 0, y: reduced ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduced ? 0 : 0.7,
                  delay: reduced ? 0 : 0.15 + i * 0.12,
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.5 }}
          >
            Сайты, магазины, приложения и цифровая архитектура бренда — собранные
            в единую систему.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.65 }}
          >
            <MagneticLink
              href="/#contact"
              className={buttonClassName("primary")}
            >
              Обсудить проект
            </MagneticLink>
            <Button href="/portfolio" variant="secondary">
              Смотреть работы
            </Button>
          </motion.div>

          <p className="mt-8 text-xs text-[var(--text-muted)]">
            Владивосток / Работаем с бизнесом по всей России
          </p>
        </GlassPanel>
      </div>

      <a
        href="#approach"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[var(--text-muted)] transition-colors hover:text-[var(--text-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-red-bright)]"
        aria-label="Прокрутить к следующей секции"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={18} className={cn(!reduced && "animate-bounce-slow")} />
      </a>
    </section>
  );
}
