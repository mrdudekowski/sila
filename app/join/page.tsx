import { JoinForm } from "@/components/forms/JoinForm";
import { joinPrinciples } from "@/content/principles";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Стать частью SILA",
  description:
    "Приглашение к сотрудничеству для дизайнеров, разработчиков и специалистов, которым важны качество и системный подход.",
  alternates: { canonical: "/join" },
};

export default function JoinPage() {
  return (
    <div className="pt-[var(--header-height)]">
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[var(--max-content)] px-5 md:px-8">
          <Reveal>
            <SectionLabel>SILA / COLLABORATION</SectionLabel>
            <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
              Сильные проекты
              <br />
              собираются людьми,
              <br />
              которым не всё равно.
            </h1>
            <p className="prose-width mt-6 text-base text-[var(--text-secondary)]">
              Если вы умеете держать качество, видеть систему и уважать детали —
              расскажите о себе.
            </p>
          </Reveal>

          <ul className="mt-14 divide-y divide-[var(--line-soft)] border-y border-[var(--line-soft)]">
            {joinPrinciples.map((item, i) => (
              <Reveal key={item.id} delay={0.05 * i}>
                <li className="flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between md:py-8">
                  <span className="text-sm text-[var(--text-muted)]">
                    {item.id}
                  </span>
                  <p className="font-display text-xl md:text-2xl">
                    {item.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-xl px-5 md:px-8">
          <Reveal>
            <JoinForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
