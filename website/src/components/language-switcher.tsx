"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { localeCookieName, locales, localizedPath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function LanguageSwitcher({ locale, className = "" }: { locale: Locale; className?: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dictionary = getDictionary(locale);

  function changeLanguage(nextLocale: Locale) {
    document.cookie = `${localeCookieName}=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    const unprefixedPath = pathname === "/zh-CN" || pathname === "/zh-CN/"
      ? "/"
      : pathname.startsWith("/zh-CN/")
        ? pathname.slice("/zh-CN".length)
        : pathname;
    const query = searchParams.toString();
    const destination = localizedPath(nextLocale, unprefixedPath);
    window.location.assign(`${destination}${query ? `?${query}` : ""}`);
  }

  return (
    <label className={`text-sm text-slate-300 ${className}`}>
      <span className="sr-only">{dictionary.language.label}</span>
      <select
        value={locale}
        onChange={(event) => changeLanguage(event.target.value as Locale)}
        className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-2 text-sm text-white"
      >
        {locales.map((value) => <option key={value} value={value}>{value === "en" ? "English" : "简体中文"}</option>)}
      </select>
    </label>
  );
}
