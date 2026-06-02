import { cn } from "@/lib/utils";

type AmbientGlowProps = {
  className?: string;
  tone?: "red" | "bronze";
};

export function AmbientGlow({ className, tone = "red" }: AmbientGlowProps) {
  const bg =
    tone === "red"
      ? "bg-[radial-gradient(circle,var(--accent-red-soft)_0%,transparent_70%)]"
      : "bg-[radial-gradient(circle,var(--accent-bronze-soft)_0%,transparent_70%)]";

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute blur-3xl",
        bg,
        className,
      )}
    />
  );
}
