import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { primaryNavigation, utilityNavigation } from "@/lib/site";
import { localizedPath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const productLinks = [
  { href: "/software/#core", label: "Zeno Core" },
  { href: "/software/#link", label: "Zeno Link" },
  { href: "/software/#brain", label: "Zeno Brain" },
  { href: "/software/#cerebellum", label: "Zeno Cerebellum" },
  { href: "/humanoid/", label: "Zeno Humanoid" },
  { href: "/marine/", label: "Zeno Marine" },
] as const;

const footerNavigationKeys = {
  "/platform/": "platform", "/hardware/": "hardware", "/software/": "software",
  "/research/": "research", "/education/": "education", "/community/": "community",
  "/roadmap/": "roadmap", "/documentation/": "documentation", "/about/": "about",
  "/contact/": "contact", "/security/": "security",
} as const;

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const dictionary = getDictionary(locale);
  const localizeLinks = (links: ReadonlyArray<{ href: string; label: string }>) => links.map((link) => ({
    ...link,
    label: link.href in footerNavigationKeys
      ? dictionary.navigation[footerNavigationKeys[link.href as keyof typeof footerNavigationKeys]]
      : link.label,
  }));

  return (
    <footer className="border-t border-white/10 bg-[#040b14]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_2fr] lg:py-18">
        <div>
          <BrandMark compact locale={locale} />
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            {dictionary.footer.description}
          </p>
          <p className="mt-6 text-xs tracking-wide text-slate-500">
            English · 简体中文
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <FooterGroup title={dictionary.footer.explore} links={localizeLinks(primaryNavigation.slice(0, 6))} locale={locale} />
          <FooterGroup title={dictionary.footer.products} links={productLinks} locale={locale} />
          <FooterGroup title={dictionary.footer.project} links={localizeLinks(utilityNavigation)} locale={locale} />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>{dictionary.footer.copyright}</p>
          <p>{dictionary.footer.provenance}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  links,
  locale,
}: {
  title: string;
  links: ReadonlyArray<{ href: string; label: string }>;
  locale: Locale;
}) {
  return (
    <div>
      <h2 className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link href={localizedPath(locale, link.href)} className="text-sm text-slate-300 hover:text-lime-300">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
