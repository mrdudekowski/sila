import { SiteBackground } from "@/components/layout/SiteBackground";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PageTransition } from "@/components/layout/PageTransition";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { fontVariables } from "@/app/fonts";
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sila.studio";

export const metadata: Metadata = {
  title: "SILA — цифровая архитектура для бизнеса",
  description:
    "SILA создаёт сайты, интернет-магазины, приложения и визуальную архитектуру бренда для бизнеса.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "SILA — цифровая архитектура для бизнеса",
    description:
      "SILA создаёт сайты, интернет-магазины, приложения и визуальную архитектуру бренда для бизнеса.",
    locale: "ru_RU",
    type: "website",
    url: siteUrl,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${fontVariables} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <SiteBackground />
        <a href="#main" className="skip-link">
          Перейти к содержимому
        </a>
        <SmoothScroll>
          <SiteHeader />
          <PageTransition>
            <main id="main" className="flex-1">
              {children}
            </main>
          </PageTransition>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
