import { footerNav } from "@/content/navigation";
import { getTelegramUrl } from "@/lib/utils";
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const telegramUrl = getTelegramUrl();

  return (
    <footer className="border-t border-[var(--line-soft)] bg-[rgba(13,15,15,0.55)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-[var(--max-content)] gap-10 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:px-8 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl tracking-[0.15em]">SILA</p>
          <p className="mt-3 max-w-xs text-sm text-[var(--text-secondary)]">
            Цифровая архитектура для бизнеса.
          </p>
        </div>

        <nav aria-label="Навигация в подвале">
          <ul className="space-y-3">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-red-bright)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-red-bright)]"
              >
                Telegram
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-[var(--line-soft)]">
        <p className="mx-auto max-w-[var(--max-content)] px-5 py-6 text-xs text-[var(--text-muted)] md:px-8">
          © SILA. Все права защищены. {year}
        </p>
      </div>
    </footer>
  );
}
