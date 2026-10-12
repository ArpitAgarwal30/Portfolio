# Arpit Agarwal — Portfolio

Personal portfolio built with React Router 8 (framework mode, static pre-rendering), React 19, TypeScript, Vite and Tailwind CSS v4. Deployed on Vercel.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (Node 24) |
| `npm run dev` | Local dev server |
| `npm run typecheck` | Generate route types, then type-check |
| `npm run lint` | ESLint (TypeScript, React hooks, accessibility rules) |
| `npm run build` | Pre-render every route to static HTML in `build/client` |

## Where things live

- `app/content/` — all site content (profile, links). Edit text here, not in components.
- `app/components/` — layout and UI components.
- `app/styles/app.css` — design tokens (colors, fonts) for light and dark themes.
- `app/lib/theme.ts` — theme handling: follows the OS setting until the visitor picks one.
- `vercel.json` — build and caching settings for Vercel (overrides dashboard defaults).
