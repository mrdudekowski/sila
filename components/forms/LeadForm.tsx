"use client";

import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { cn } from "@/lib/utils";
import type { LeadFormData } from "@/lib/validation";
import { useCallback, useRef, useState } from "react";

const projectTypes = [
  "Сайт",
  "Интернет-магазин",
  "Приложение",
  "Айдентика и цифровая архитектура",
  "Комплексный проект",
  "Другое",
] as const;

const inputClass =
  "w-full rounded-[var(--radius-md)] border border-[var(--line-soft)] bg-[var(--glass-soft)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors focus:border-[var(--line-medium)] focus:outline-none focus:ring-1 focus:ring-[var(--line-medium)]";

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialState: Omit<LeadFormData, "formType" | "consent"> & {
  consent: boolean;
} = {
  name: "",
  company: "",
  phone: "",
  telegram: "",
  projectType: "Сайт",
  message: "",
  consent: false,
};

export function LeadForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const lastSubmit = useRef(0);
  const honeypot = useRef("");

  const update = useCallback(
    <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => {
      setForm((prev) => ({ ...prev, [key]: value }));
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[key as string];
        return next;
      });
    },
    [],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmit.current < 3000) return;
    lastSubmit.current = now;

    setStatus("submitting");
    setFieldErrors({});

    const payload = {
      formType: "lead" as const,
      ...form,
      company: form.company || "",
      telegram: form.telegram || "",
      website: honeypot.current,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json()) as { details?: { fieldErrors?: Record<string, string[]> } };
        if (data.details?.fieldErrors) {
          const errors: Record<string, string> = {};
          for (const [key, msgs] of Object.entries(data.details.fieldErrors)) {
            if (msgs[0]) errors[key] = msgs[0];
          }
          setFieldErrors(errors);
        }
        setStatus("error");
        return;
      }

      setForm(initialState);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <GlassPanel className="p-8 md:p-10">
        <p className="text-base text-[var(--text-primary)]">
          Заявка отправлена. Мы свяжемся с вами в ближайшее время.
        </p>
      </GlassPanel>
    );
  }

  return (
    <GlassPanel variant="interactive" className="p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute h-0 w-0 opacity-0"
          aria-hidden
          onChange={(e) => {
            honeypot.current = e.target.value;
          }}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Имя" id="lead-name" error={fieldErrors.name}>
            <input
              id="lead-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={inputClass}
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
            />
          </Field>
          <Field label="Компания" id="lead-company" error={fieldErrors.company}>
            <input
              id="lead-company"
              name="company"
              type="text"
              autoComplete="organization"
              className={inputClass}
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Телефон" id="lead-phone" error={fieldErrors.phone}>
            <input
              id="lead-phone"
              name="phone"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              className={inputClass}
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </Field>
          <Field label="Telegram" id="lead-telegram" error={fieldErrors.telegram}>
            <input
              id="lead-telegram"
              name="telegram"
              type="text"
              autoComplete="off"
              placeholder="@username"
              className={inputClass}
              value={form.telegram}
              onChange={(e) => update("telegram", e.target.value)}
            />
          </Field>
        </div>

        <Field label="Тип проекта" id="lead-type" error={fieldErrors.projectType}>
          <select
            id="lead-type"
            name="projectType"
            className={cn(inputClass, "cursor-pointer")}
            value={form.projectType}
            onChange={(e) =>
              update("projectType", e.target.value as (typeof projectTypes)[number])
            }
          >
            {projectTypes.map((type) => (
              <option key={type} value={type} className="bg-[var(--bg-secondary)]">
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Задача" id="lead-message" error={fieldErrors.message}>
          <textarea
            id="lead-message"
            name="message"
            required
            rows={4}
            className={cn(inputClass, "resize-y min-h-[120px]")}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </Field>

        <label className="flex cursor-pointer items-start gap-3 text-xs text-[var(--text-secondary)]">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-[var(--line-medium)] accent-[var(--accent-red)]"
          />
          <span>
            Согласен на обработку введённых данных для связи по заявке
          </span>
        </label>
        {fieldErrors.consent && (
          <p className="text-xs text-[var(--accent-red-bright)]" role="alert">
            {fieldErrors.consent}
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-[var(--accent-red-bright)]" role="alert">
            Не удалось отправить заявку. Попробуйте ещё раз или напишите нам в
            Telegram.
          </p>
        )}

        <Button type="submit" variant="primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Отправка…" : "Отправить заявку"}
        </Button>
      </form>
    </GlassPanel>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs text-[var(--text-muted)]">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-[var(--accent-red-bright)]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
