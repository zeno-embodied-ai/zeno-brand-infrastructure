import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
import { defaultLocale, isLocale } from "@/i18n/config";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Zeno — Open embodied intelligence",
    template: "%s | Zeno",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Zeno" }],
  creator: "Zeno",
  publisher: "Zeno",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/brand/zeno-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06101d",
  colorScheme: "dark",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const requestedLocale = requestHeaders.get("x-zeno-locale");
  const locale = requestedLocale && isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  return (
    <html lang={locale}>
      <body>
        <a
          href="#main-content"
          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-lime-300 px-4 py-2 text-sm font-semibold text-slate-950 transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader locale={locale} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
