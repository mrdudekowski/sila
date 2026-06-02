import localFont from "next/font/local";

/**
 * Интерфейс: Manrope через next/font/google, когда есть сеть при сборке,
 * или положите variable-файл в public/fonts/manrope-variable.woff2 и раскомментируйте блок ниже.
 */
// import { Manrope } from "next/font/google";
// export const manrope = Manrope({
//   subsets: ["latin", "cyrillic"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-manrope",
//   display: "swap",
// });

/** Заголовки — Satyr SP Basic (public/fonts/satyr-sp-basic.otf). */
export const satyr = localFont({
  src: [{ path: "../public/fonts/satyr-sp-basic.otf" }],
  variable: "--font-satyr",
  display: "swap",
  fallback: ["Palatino Linotype", "Book Antiqua", "Georgia", "serif"],
});

/**
 * TODO: add local Vyaz font file to public/fonts/vyaz.woff2 (or .otf)
 * export const vyaz = localFont({ src: [...], variable: "--font-vyaz" });
 */

export const fontVariables = satyr.variable;
