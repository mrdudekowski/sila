"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function MagneticLink({ href, children, className }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.08;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.08;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "";
  };

  return (
    <Link
      ref={ref}
      href={href}
      className={cn("inline-block transition-transform duration-200", className)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </Link>
  );
}
