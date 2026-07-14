# Phase 8: Website localization rendering fix

- Status: `completed`
- Date: 2026-07-14
- Scope: Make the deployed `/zh-CN` routes render Chinese interface and page content.

## Checklist

- [x] Confirm the Chinese routes were reusing English homepage and page data.
- [x] Connect the shared header, footer, accessibility labels and language selector to locale dictionaries.
- [x] Add dedicated Chinese homepage and detail-page content.
- [x] Preserve the current path when switching between English root routes and `/zh-CN` routes.
- [x] Add Chinese routes to the sitemap and localized metadata.
- [x] Run lint, type checks and the production build.
- [x] Verify English and Chinese responses through a local production server.

## Validation

- `/` renders the English hero.
- `/zh-CN/` renders the Chinese hero and actions.
- `/zh-CN/platform/` renders Chinese platform content.
- A Chinese `Accept-Language` request to `/` redirects to `/zh-CN/`.

Production publishing remains a separate protected operation.
