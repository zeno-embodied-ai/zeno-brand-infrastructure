import { CtaLink } from "@/components/cta-link";
import { PlaceholderVisual } from "@/components/placeholder-visual";
import type { SitePage } from "@/content/pages";
import { localizedPath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function DetailPage({ page, locale = "en" }: { page: SitePage; locale?: Locale }) {
  const dictionary = getDictionary(locale);
  return (
    <main id="main-content">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="technical-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-18 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-30">
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 className="text-balance mt-5 max-w-3xl text-5xl leading-[0.98] font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              {page.title}
            </h1>
            <p className="text-pretty mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {page.summary}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label={dictionary.accessibility.pageHighlights}>
              {page.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-full border border-white/12 bg-white/[0.035] px-3 py-2 text-xs font-semibold tracking-wide text-slate-300"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <PlaceholderVisual label={page.visualLabel} mode={page.visualMode} />
        </div>
      </section>

      {page.sections.map((section, index) => (
        <section
          key={section.title}
          id={section.id}
          className={`scroll-mt-28 border-b border-white/10 ${index % 2 === 1 ? "bg-white/[0.018]" : ""}`}
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-18 sm:px-8 sm:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:gap-18">
            <div>
              {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
              <h2 className="text-balance mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                {section.title}
              </h2>
              <p className="text-pretty mt-5 text-base leading-7 text-slate-400">{section.copy}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {section.items.map((item, itemIndex) => (
                <article key={item.title} className="surface rounded-2xl p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold tracking-[0.14em] text-slate-600">
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-white/8" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-5 py-18 sm:px-8 sm:py-24">
        <div className="surface-bright relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-12 sm:px-10 lg:flex lg:items-end lg:justify-between lg:gap-16 lg:px-14 lg:py-14">
          <div className="absolute -top-24 -right-16 size-72 rounded-full bg-sky-400/10 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <p className="eyebrow">{page.cta.eyebrow}</p>
            <h2 className="text-balance mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              {page.cta.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">{page.cta.copy}</p>
          </div>
          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <CtaLink href={localizedPath(locale, page.cta.primary.href)}>{page.cta.primary.label}</CtaLink>
            {page.cta.secondary && (
              <CtaLink href={localizedPath(locale, page.cta.secondary.href)} variant="secondary">
                {page.cta.secondary.label}
              </CtaLink>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
