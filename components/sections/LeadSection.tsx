import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getTelegramUrl } from "@/lib/utils";

export function LeadSection() {
  const telegramUrl = getTelegramUrl();

  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto grid max-w-[var(--max-content)] gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionLabel>07 / КОНТАКТ</SectionLabel>
          <h2 className="mt-6 font-display text-3xl leading-tight md:text-4xl">
            Расскажите,
            <br />
            что должно обрести форму.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
            Опишите задачу в нескольких словах. Мы свяжемся с вами и предложим
            следующий шаг.
          </p>
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex text-sm text-[var(--text-secondary)] underline-offset-4 transition-colors hover:text-[var(--text-primary)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-red-bright)]"
          >
            Написать в Telegram
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
