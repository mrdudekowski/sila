import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Портфолио — SILA",
  description:
    "Избранные проекты SILA: сайты, магазины, приложения и цифровая архитектура бренда.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <div className="pt-[var(--header-height)]">
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[var(--max-content)] px-5 md:px-8">
          <Reveal>
            <SectionLabel>SILA / SELECTED WORKS</SectionLabel>
            <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              Работы,
              <br />
              собранные вокруг сути.
            </h1>
            <p className="prose-width mt-6 text-base text-[var(--text-secondary)]">
              Каждый проект — отдельная система: со своим характером, логикой и
              точкой напряжения.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-[var(--max-content)] px-5 md:px-8">
          <PortfolioGrid />
        </div>
      </section>
    </div>
  );
}
