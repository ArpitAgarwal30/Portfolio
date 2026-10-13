# Arpit Agarwal — Portfolio

Personal portfolio built with React Router 8 (framework mode, static pre-rendering), React 19, TypeScript, Vite and Tailwind CSS v4. Deployed on Vercel at [arpitagarwal.vercel.app](https://arpitagarwal.vercel.app).

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (Node 24) |
| `npm run dev` | Local dev server |
| `npm run typecheck` | Generate route types, then type-check |
| `npm run lint` | ESLint (TypeScript, React hooks, accessibility rules) |
| `npm test` | Vitest: content checks, SEO tags, copy-email behaviour |
| `npm run build` | Pre-render every route to static HTML in `build/client`, then write the sitemap and 404 page |

## Updating content

All text lives in `app/content/`; components never hard-code it. `npm test` checks the data for common mistakes (dates, links, case-study structure).

- **Job, title or dates:** `experience.ts`. Exactly one role has `end: null` (the current one).
- **Certification:** `credentials.ts`. Include the public verification URL.
- **New case study:** add an object to `case-studies.ts` with all nine lifecycle stages. Its card on the home page, its page at `/work/<slug>`, its pre-rendering and its sitemap entry all follow automatically.
- **Resume:** replace `public/resume/Arpit_Agarwal_Resume.pdf`. Keep phone number and street address out of the public copy.
- **Links, email, location, site URL:** `profile.ts`.

## How it fits together

- `app/routes/`: home, case studies (`work.$slug.tsx`), and a catch-all "Page not found".
- `app/lib/seo.ts`: title, description, canonical URL and link-preview tags for every page. The preview image is `public/og/default.png` (1200×630).
- `app/lib/theme.ts`: follows the OS light/dark setting until the visitor picks one, with no flash on load.
- `app/components/ui/SectionLink.tsx`: section links glide smoothly on the home page; page changes stay instant.
- `app/styles/app.css`: design tokens for both themes, plus the scroll-driven section fade-in (pure CSS, off for reduced motion).
- `scripts/postbuild.mjs`: writes `sitemap.xml` from the content, and copies the app shell to `404.html`, which Vercel serves with a 404 status for unknown URLs.
- `vercel.json`: build settings, caching for hashed assets, and a redirect from the old resume URL. It overrides the dashboard's old Create React App settings.
