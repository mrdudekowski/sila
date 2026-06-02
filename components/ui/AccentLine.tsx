import { cn } from "@/lib/utils";

type AccentLineProps = {
  className?: string;
  tone?: "red" | "bronze";
  orientation?: "horizontal" | "vertical";
};

export function AccentLine({
  className,
  tone = "red",
  orientation = "horizontal",
}: AccentLineProps) {
  const color =
    tone === "red" ? "bg-[var(--accent-red)]" : "bg-[var(--accent-bronze)]";

  return (
    <span
      aria-hidden
      className={cn(
        "block opacity-70",
        orientation === "horizontal" ? "h-px w-12" : "h-12 w-px",
        color,
        className,
      )}
    />
  );
}
