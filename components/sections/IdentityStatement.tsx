"use client";

import { AccentLine } from "@/components/ui/AccentLine";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function IdentityStatement() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      <AmbientGlow
        className="left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2"
        tone="bronze"
      />
      <Image
        src="/patterns/ethno-lines.svg"
        alt=""
        width={1200}
        height={600}
        className={cn(
          "ethno-pattern absolute inset-0 h-full w-full object-cover",
          !reduced && "animate-drift",
        )}
        aria-hidden
      />
      <AccentLine
        orientation="vertical"
        tone="bronze"
        className="absolute left-1/2 top-16 hidden h-32 -translate-x-1/2 md:block"
      />

      <div className="relative z-10 mx-auto max-w-[var(--max-content)] px-5 text-center md:px-8">
        <Reveal>
          <p className="font-vyaz text-6xl text-[var(--accent-bronze)]/20 md:text-8xl" aria-hidden>
            сила
          </p>
          <h2 className="mx-auto mt-[-2rem] max-w-3xl font-display text-3xl leading-[1.15] text-balance md:mt-[-3rem] md:text-5xl lg:text-6xl">
            Сильный бренд
            <br />
            не повышает голос.
            <br />
            Он остаётся узнаваемым
            <br />
            даже в тишине.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
