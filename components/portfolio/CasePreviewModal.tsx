"use client";

import type { Work } from "@/content/works";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

type CasePreviewModalProps = {
  work: Work | null;
  onClose: () => void;
};

export function CasePreviewModal({ work, onClose }: CasePreviewModalProps) {
  const reduced = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!work) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    closeRef.current?.focus();

    const focusables = document.querySelectorAll<HTMLElement>(
      '#case-modal a[href], #case-modal button:not([disabled]), #case-modal input, #case-modal select, #case-modal textarea, #case-modal [tabindex]:not([tabindex="-1"])',
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !focusables.length) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", trap);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("keydown", trap);
    };
  }, [work, handleKey]);

  return (
    <AnimatePresence>
      {work && (
        <>
          <motion.button
            type="button"
            aria-label="Закрыть просмотр кейса"
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.25 }}
            onClick={onClose}
          />
          <motion.div
            id="case-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-modal-title"
            className={cn(
              "fixed inset-x-4 top-[calc(var(--header-height)+1rem)] z-50 mx-auto max-h-[85vh] max-w-3xl overflow-y-auto rounded-[var(--radius-xl)] border border-[var(--line-soft)] glass-panel-strong p-6 md:inset-x-auto md:p-10",
            )}
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : 8 }}
            transition={{ duration: reduced ? 0 : 0.35 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  {work.category}
                </p>
                <h2
                  id="case-modal-title"
                  className="mt-2 font-display text-3xl"
                >
                  {work.title}
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-red-bright)]"
                aria-label="Закрыть"
              >
                <X size={18} />
              </button>
            </div>

            <p className="mt-4 text-sm text-[var(--text-secondary)]">
              {work.fullDescription}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div>
                <h3 className="text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
                  Задача
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {work.task}
                </p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
                  Решение
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {work.solution}
                </p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
                  Результат
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {work.result}
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {work.gallery.map((src, i) => (
                <div
                  key={src}
                  className={cn(
                    "relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--line-soft)]",
                    i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]",
                  )}
                >
                  <Image
                    src={src}
                    alt={`${work.title} — изображение ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 640px"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/#contact" variant="primary">
                Обсудить похожий проект
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
