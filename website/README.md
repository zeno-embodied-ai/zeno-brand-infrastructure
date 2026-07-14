# Zeno Website

The first static-first website for `zeno-ai.org`, built with Next.js, TypeScript and Tailwind CSS.

## Status and safety boundary

This is the Phase 2 local implementation. It has not been published and does not connect to production accounts, DNS, analytics, forms, databases or external APIs. Production deployment requires explicit human approval under the repository runbook.

All public product and positioning copy is derived from the repository's approved planning content. The site uses the original Zeno geometric mark at `public/brand/zeno-logo.png`; it does not include third-party logos, photos or marketing assets.

## Technology

- Next.js `16.2.10` with the App Router
- React `19.2.7`
- TypeScript `6.0.3` (compatible stable line for the Next.js ESLint toolchain)
- Tailwind CSS `4.3.2`
- Static export via `output: "export"`

The generated site contains static HTML, CSS and JavaScript in `out/`. It does not require a Node.js production server.

## Local development

Requirements:

- Node.js 20.9 or newer; Node.js 22 is recorded in `.nvmrc`
- npm 10 or newer

Install and start the development server:

```bash
cd website
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Quality commands

```bash
npm run lint
npm run typecheck
npm run build
npm run validate:static
npm run check
```

`npm run check` runs lint, type checking, the production static build and output validation. A successful build must create `out/index.html`, all 13 inner page routes, `out/sitemap.xml` and `out/robots.txt`; the validator also checks essential homepage content, SEO metadata and internal links.

## Content architecture

- English is the active default language at the root URL.
- Simplified Chinese uses the explicit `/zh-CN/` route prefix; English remains at the root URL.
- The fixed `zh-CN` segment avoids colliding with the root-level dynamic `[slug]` routes.
- Shared navigation, homepage content, footer content and all public detail pages have dedicated Simplified Chinese copy.
- Language switching preserves the current page path while adding or removing the `/zh-CN` prefix.
- Shared page content lives in `src/content/pages.ts` to keep navigation, metadata and sitemap generation consistent.
- Technical specifications, compatibility and release claims belong in versioned product documentation, not marketing copy.

## SEO and accessibility baseline

- Per-page title, description, canonical URL and Open Graph/Twitter metadata
- Generated `sitemap.xml`, `robots.txt` and web manifest
- Semantic headings, landmarks and navigation labels
- Keyboard-visible focus styles and a skip link
- Responsive navigation and layouts
- Reduced-motion support and high-contrast dark theme
- Descriptive labels for replaceable visual placeholders

The Open Graph asset at `public/og/zeno-og-placeholder.svg` is intentionally replaceable. A final approved brand asset should preserve the declared 1200×630 dimensions and accessible description.

## Cloudflare Pages

Use the static export without enabling server-side Next.js features:

| Setting | Value |
| --- | --- |
| Root directory | `website` |
| Build command | `npm ci && npm run build` |
| Build output directory | `out` |
| Node.js | 22 |

`public/_headers` is copied into the export for the Cloudflare Pages static header rules. Preview and production deployments must remain separate; do not attach `zeno-ai.org` without explicit DNS and production deployment approval.

## Vercel

Set the project root to `website` and use the Next.js framework preset. `npm run build` respects `output: "export"` and produces the static `out/` directory. No runtime environment variables are required for this version.

Creating a Vercel project or publishing a production deployment is a protected operation and is outside Phase 2.

## Known placeholders

- Official GitHub Organization URL: TBD
- Documentation portal URL activation: planned; `docs.zeno-ai.org` is not asserted active
- Community channels: TBD
- Support, media, legal and security reporting addresses: TBD
- Type system, product imagery and Open Graph art: pending brand approval
