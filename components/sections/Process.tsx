import { processSteps } from "@/content/process";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Process() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[var(--max-content)] px-5 md:px-8">
        <Reveal>
          <SectionLabel>06 / РАБОТА С НАМИ</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-display text-3xl leading-tight md:text-4xl">
            Спокойный процесс.
            <br />
            Прозрачная логика.
            <br />
            Собранный результат.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal key={step.id} delay={0.05 * i}>
              <li className="border border-[var(--line-soft)] rounded-[var(--radius-md)] p-5 transition-colors hover:border-[var(--line-medium)]">
                <span className="text-xs text-[var(--text-muted)]">{step.id}</span>
                <p className="mt-3 text-sm leading-snug text-[var(--text-primary)]">
                  {step.title}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10">
          <p className="prose-width text-sm text-[var(--text-secondary)]">
            Мы берём на себя процесс целиком и оставляем клиенту понятные точки
            согласования — без перегрузки техническими деталями.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
