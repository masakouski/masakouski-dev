# Repository rules

## Comments

Committed code carries no comments — no `//`, no `/* */`, no JSDoc, no `#` in config files.
Naming and file structure are expected to carry the explanation.

When something cannot be understood without one, rename or split the thing so the explanation
becomes unnecessary, or record the reason in this file, in the README, or in the commit message,
where it survives refactoring.

## Constraints worth keeping

- The font comes from `@fontsource-variable/jetbrains-mono`, not `next/font/google`. The latter
  fetches from fonts.googleapis.com during the build and fails wherever that host is unreachable.
- `app/robots.ts` and `app/sitemap.ts` must export `dynamic = 'force-static'`, otherwise the build
  fails while collecting page data under `output: 'export'`.
- The email address is never written into markup. It is assembled from `site.email` in the browser
  (`components/EmailAddress.tsx`, `components/EmailLink.tsx`), so the static HTML does not contain it.
  The visible address has a `min-width` to keep the header from shifting after hydration.
- `@netlify/plugin-nextjs` is not installed. With `output: 'export'` the build is already static.
- `images.unoptimized` is required for static export, since the image optimizer only runs on a server.

## Content

Copy lives in `content/*.ts` and nowhere else. Components must not hold hardcoded strings that
would need editing when the CV changes.

In `content/projects.ts`, an entry with `href: null` is an empty slot: dashed border, not clickable.
Fill in `href` and the card becomes a live link.

## Not on the public site

- phone number
- residence and work-permit details

Availability for B2B work and the city are enough.
