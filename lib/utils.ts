import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTelegramUrl(): string {
  return process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/sila_studio";
}
