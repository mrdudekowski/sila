import { services } from "@/content/services";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-[var(--max-content)] px-5 md:px-8">
        <Reveal>
          <SectionLabel>02 / ВОЗМОЖНОСТИ</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-display text-3xl leading-tight md:text-4xl">
            Проектируем цифровое присутствие бизнеса.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={0.06 * i}>
              <GlassPanel variant="interactive" className="h-full p-6 md:p-8">
                <span className="text-xs text-[var(--text-muted)]">
                  {service.id}
                </span>
                <h3 className="mt-3 font-display text-2xl">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {service.description}
                </p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="text-sm text-[var(--text-muted)]">
            Каждый проект начинается не с шаблона, а с контекста.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
