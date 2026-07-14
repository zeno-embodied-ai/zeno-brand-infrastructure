import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { CtaLink } from "@/components/cta-link";
import { primaryNavigation, utilityNavigation } from "@/lib/site";
import { LanguageSwitcher } from "@/components/language-switcher";
import { localizedPath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const navigationKeys = {
  "/platform/": "platform",
  "/hardware/": "hardware",
  "/software/": "software",
  "/research/": "research",
  "/education/": "education",
  "/community/": "community",
  "/roadmap/": "roadmap",
  "/documentation/": "documentation",
  "/about/": "about",
  "/contact/": "contact",
  "/security/": "security",
} as const;

export function SiteHeader({ locale = "en" }: { locale?: Locale }) {
  const dictionary = getDictionary(locale);
  const navigationLabel = (href: keyof typeof navigationKeys) => dictionary.navigation[navigationKeys[href]];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06101d]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <BrandMark locale={locale} />

        <nav aria-label={dictionary.accessibility.primaryNavigation} className="hidden items-center gap-5 lg:flex">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={localizedPath(locale, item.href)}
              className="rounded-sm py-2 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {navigationLabel(item.href)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Link
            href={localizedPath(locale, "/about/")}
            className="rounded-sm px-2 py-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            {dictionary.navigation.about}
          </Link>
          <CtaLink href={localizedPath(locale, "/documentation/")} className="min-h-10 px-4">
            {dictionary.navigation.docs}
          </CtaLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher locale={locale} />
          <details className="group relative">
            <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
              <span>{dictionary.navigation.menu}</span>
              <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4 transition group-open:rotate-45">
                <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </summary>
            <nav
              aria-label={dictionary.accessibility.mobileNavigation}
              className="surface absolute right-0 mt-3 grid w-[min(21rem,calc(100vw-2.5rem))] grid-cols-2 gap-1 rounded-2xl p-3 shadow-2xl"
            >
              {[...primaryNavigation, ...utilityNavigation].map((item) => (
                <Link
                  key={item.href}
                  href={localizedPath(locale, item.href)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.06] hover:text-white"
                >
                  {navigationLabel(item.href)}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
