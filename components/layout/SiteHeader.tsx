"use client";

import { mainNav } from "@/content/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonClassName } from "@/components/ui/Button";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-[var(--line-soft)] bg-[rgba(8,9,9,0.55)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[var(--header-height)] max-w-[var(--max-content)] items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="font-display text-lg tracking-[0.2em] text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-red-bright)]"
        >
          SILA
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Основная навигация"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-red-bright)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticLink
            href="/#contact"
            className={buttonClassName("primary")}
          >
            Обсудить проект
          </MagneticLink>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
