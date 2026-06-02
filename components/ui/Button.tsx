"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "telegram";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
  className?: string;
};

export const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "border border-[var(--accent-red)]/50 bg-transparent text-[var(--text-primary)] shadow-[0_0_24px_var(--accent-red-soft)] hover:border-[var(--accent-red-bright)] hover:shadow-[0_0_32px_var(--accent-red-soft)]",
  secondary:
    "border border-[var(--line-medium)] bg-transparent text-[var(--text-primary)] hover:border-[var(--text-primary)]/40",
  ghost:
    "border-transparent bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline underline-offset-4",
  telegram:
    "border border-[var(--line-soft)] bg-[var(--glass-soft)] text-[var(--text-primary)] hover:border-[var(--line-medium)]",
};

const baseButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-red-bright)] disabled:opacity-50 disabled:pointer-events-none";

export function buttonClassName(
  variant: ButtonVariant = "primary",
  className?: string,
) {
  return cn(baseButtonClass, buttonVariants[variant], className);
}

export function Button({
  variant = "primary",
  href,
  children,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = buttonClassName(variant, className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
