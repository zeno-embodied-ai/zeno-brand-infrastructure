# Phase 9: Platform stack visual

## Scope

Replace the Platform page's CSS placeholder with a clear architecture image
that follows the approved Zeno information architecture. Do not deploy or
change production infrastructure.

## Checklist

- [x] Read the repository instructions and current brand architecture.
- [x] Inspect the Platform page and shared visual component.
- [x] Generate and review a dedicated landscape PNG.
- [x] Show Brain, Simulation, Cerebellum, Core, Link, Humanoid, Marine and Cloud.
- [x] Present Cloud as optional and avoid unverified compatibility claims.
- [x] Connect only the English and Simplified Chinese Platform pages to the image.
- [x] Run website lint, type checking and the production build.
- [x] Verify the Chinese Platform route and PNG response locally.
- [x] Record the existing static-output validator mismatch.
- [x] Review the final diff.
- [x] Commit the approved phase.

## Execution log

| Date | Step | Result |
| --- | --- | --- |
| 2026-07-14 | Read architecture and inspect existing visual | Completed |
| 2026-07-14 | Generate and review platform stack image | Completed |
| 2026-07-14 | Integrate image and localized descriptions | Completed |
| 2026-07-14 | `npm run lint` and `npm run typecheck` | Passed |
| 2026-07-14 | `npm run build` | Passed; 33 pages generated |
| 2026-07-14 | `npm run validate:static` | Existing mismatch: current Vercel/Proxy build does not refresh the legacy static `out/` directory; validator reported missing `brand/zeno-logo.png` |
| 2026-07-14 | Local `/zh-CN/platform/` and PNG request | Passed; page contains the asset and image returned HTTP 200 |
