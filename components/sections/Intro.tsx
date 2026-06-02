import { AccentLine } from "@/components/ui/AccentLine";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const pillars = [
  {
    title: "Смысл",
    text: "Находим ядро продукта и переводим его в ясную структуру.",
  },
  {
    title: "Форма",
    text: "Создаём визуальный язык, который поддерживает характер бизнеса.",
  },
  {
    title: "Система",
    text: "Собираем интерфейс, контент и разработку в единый рабочий инструмент.",
  },
];

export function Intro() {
  return (
    <section id="approach" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-[var(--max-content)] px-5 md:px-8">
        <Reveal>
          <SectionLabel>01 / ПОДХОД</SectionLabel>
          <AccentLine className="mt-4" />
          <h2 className="mt-6 max-w-2xl font-display text-3xl leading-tight text-balance md:text-4xl lg:text-5xl">
            Не отдельный экран.
            <br />
            Цельная оболочка бизнеса.
          </h2>
          <p className="prose-width mt-6 text-base leading-relaxed text-[var(--text-secondary)]">
            Мы собираем цифровую среду, в которой бренд выглядит уверенно, говорит
            точно и ведёт клиента к действию без лишнего шума.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {pillars.map((item, i) => (
            <Reveal key={item.title} delay={0.08 * i}>
              <GlassPanel
                variant="interactive"
                className="h-full p-6 md:p-8"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-bronze)]">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.text}
                </p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
