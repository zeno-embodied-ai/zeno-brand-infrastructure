# Zeno Developer Documentation

The local Docusaurus documentation site intended for `docs.zeno-ai.org`.

## Status and content boundary

This is a Phase 3 local documentation implementation. It has not been deployed, does not connect to production accounts or external search services, and does not publish verified hardware specifications, compatibility matrices, release packages or support commitments.

Every document in the initial information architecture is marked **Draft / TBD**. Hardware names, firmware topics, simulators and community processes are placeholders for future versioned documentation; they do not imply a supported integration or available product.

## Technology

- Docusaurus `3.10.2`
- TypeScript `6.0.3`
- React `19.2.7`
- Static output in `build/`

## Local development

Requirements:

- Node.js 20.9 or newer; Node.js 22 is recorded in `.nvmrc`
- npm 10 or newer

```bash
cd documentation
npm ci
npm run start
```

The development server is local only. Use `npm run serve` to inspect a completed static build.

## Quality commands

```bash
npm run typecheck
npm run build
npm run validate:docs
npm run check
```

`npm run check` verifies TypeScript, builds all static routes, and validates all 34 current documents, 34 versioned snapshot documents, version metadata, Draft/TBD markers, Search reserve, static routes and the absence of unreviewed numeric hardware/firmware parameters.

## Documentation structure

- `docs/` contains the evolving **Next (Draft)** version.
- `versioned_docs/version-0.1.0-draft/` preserves the first Draft snapshot.
- `versioned_sidebars/` stores the sidebar matching that snapshot.
- `versions.json` declares published documentation snapshots.

To create a future snapshot after content review:

```bash
npm run docs:version -- <version>
```

Then update `docusaurus.config.ts`, release notes and documentation ownership in the same review.

## Full-text search reserve

The `/search` page and `customFields.search` configuration reserve the integration boundary. No provider, crawler, index, API key or external search script is configured. Before enabling search, approve the provider, index scope, privacy model, version/locale behavior, CI build path and Secret storage.

## Locale reserve

English is the only active Docusaurus locale. `zh-CN` is deliberately recorded as reserved in configuration, not enabled as an English fallback. Add translated documentation and approved URL policy before activating it.

## Cloudflare Pages and Vercel

The `build/` directory is static and can be deployed to either platform after explicit approval.

| Setting | Cloudflare Pages | Vercel |
| --- | --- | --- |
| Root directory | `documentation` | `documentation` |
| Build command | `npm ci && npm run build` | `npm ci && npm run build` |
| Output directory | `build` | `build` |
| Node.js | 22 | 22 |

Creating a project, publishing a preview/production deployment, attaching `docs.zeno-ai.org`, adding search credentials or changing DNS is outside Phase 3 and requires a separate approved task.
