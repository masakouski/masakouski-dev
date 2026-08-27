# masakouski.dev

Personal portfolio. Next.js App Router, TypeScript, exported as a static site.

## How it works

- `output: 'export'` — the build emits plain HTML into `out/`, so there is no server runtime.
  Server actions, route handlers, middleware and ISR are unavailable by design.
- Netlify runs `npm run build` and publishes `out/`.
- JetBrains Mono is self-hosted through `@fontsource-variable/jetbrains-mono`.
- Images are not optimized at request time — prepare them ahead of time and drop them in `public/`.

## Content

All copy lives in `content/`, so an update is a data edit rather than a markup edit.

| File | Contents |
| --- | --- |
| `site.ts` | name, headline, contacts, hero facts, SEO metadata |
| `work.ts` | engagements listed under Selected work |
| `projects.ts` | project cards; an entry with `href: null` renders as an empty slot |
| `toolbox.ts` | stack groups |

## Commands

```bash
npm run dev
npm run build
npm run preview
npm run typecheck
```
