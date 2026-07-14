export const locales = ["en", "zh-CN"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  "zh-CN": "简体中文",
};

export const localeStatus: Record<Locale, "active" | "reserved"> = {
  en: "active",
  "zh-CN": "active",
};

export const localeCookieName = "zeno-locale";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(locale: Locale, path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  return `/zh-CN${normalized === "/" ? "/" : normalized}`;
}
