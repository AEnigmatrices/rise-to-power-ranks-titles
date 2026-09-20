# Rise to Power — Ranks & Titles

An Astro reference for the **Rank** and **Title** appointment systems in *Nobunaga's Ambition: Rise to Power* (*Tenka Sōsei*), with a concise historical overview, a dedicated searchable catalogue, and a statically generated Historical Guide for political context, offices, titles, regions, and provinces.

The catalogue preserves the game's English-localized appointment names alongside Japanese office names, readings, historical/literal meanings, class, stat effect, appointment type, and exact duplicate-source occurrence counts. Historical context is available both as compact inline notes and as dedicated guide pages.

## Stack

### Site runtime

- Astro 7 with static output
- TypeScript
- Fuse.js for weighted fuzzy catalogue and directory search
- Floating UI for collision-aware inline historical popovers
- Lucide Astro for interface icons
- Motion for restrained catalogue transitions with reduced-motion support
- D3 Geo + TopoJSON Client + jpn-atlas for the build-time Japan orientation map
- Fontsource Noto Serif JP Variable for self-hosted Japanese serif typography
- Plain browser TypeScript for interactive catalogue and directory behavior
- GitHub Pages via the Astro GitHub Action

No UI framework, database, or runtime server is required.

### Quality tooling

- `astro check` + TypeScript for Astro/TS diagnostics
- Astro's `astro/zod` re-export for authored-data validation
- Vitest for unit and data-integrity tests
- Playwright for Chromium, Firefox, WebKit, mobile Chromium, and tablet WebKit
- `@axe-core/playwright` for automated WCAG checks
- ESLint + `eslint-plugin-astro` + `typescript-eslint`
- Prettier + `prettier-plugin-astro`

## Requirements

- Node.js 24.16+ recommended
- Node.js 22.22.3+ is also supported by the current lint stack
- Corepack enabled
- pnpm 12.5.1 (pinned in `package.json`)

TypeScript remains on the 6.x line because Astro's language tooling currently depends on language-service APIs that are not yet compatible with TypeScript 7.

## Local development

```powershell
corepack enable
pnpm install
pnpm dev
```

The project is configured for the GitHub Pages base path:

```text
/rise-to-power-ranks-titles
```

Internal links must be generated through `src/lib/routes.ts` rather than concatenating `import.meta.env.BASE_URL` manually. This keeps local development and GitHub Pages routing consistent.

## Site routes

```text
/
└── concise Tenka Sōsei / Ranks & Titles overview

/reference/
└── complete searchable 365-appointment catalogue

/trivia/
├── Political Context
├── curated historical notes
├── Regions & Provinces
└── Offices & Titles

/trivia/context/
└── Imperial Court, Muromachi Shogunate, and Sengoku daimyo overview

/trivia/regions/
└── searchable geography directory + orientation map

/trivia/regions/[slug]/
└── statically generated place detail pages

/trivia/offices/
└── searchable institution/title directory

/trivia/offices/[slug]/
└── statically generated historical-context pages
```

Region and office detail pages are generated at build time with Astro `getStaticPaths()`. Legacy root catalogue query/hash URLs are forwarded client-side to `/reference/` so existing appointment permalinks remain usable.

## Validation and tests

Run the fast validation gate:

```powershell
pnpm validate
```

This runs:

```text
astro check → ESLint → Vitest
```

Other commands:

```powershell
pnpm check
pnpm lint
pnpm lint:fix
pnpm test
pnpm test:watch
pnpm format:check
pnpm format
```

### Browser and accessibility tests

Install Playwright browser binaries once:

```powershell
pnpm test:e2e:install
```

Then run:

```powershell
pnpm test:e2e
```

Playwright builds the production Astro output first and tests the preview server rather than the dev server. The suite covers overview-to-reference navigation, legacy catalogue redirects, catalogue search, keyboard behavior, Rank/Title switching, responsive cards, Political Context and Historical Guide routing, region-map filtering, detail-page cross-links, GitHub Pages base-path integrity, and automated accessibility checks.

## Production build

```powershell
pnpm build
pnpm preview
```

`pnpm build` runs the validation gate before `astro build`. Static output is written to `dist/`.

## Data model

Appointment data is organized by the systems represented in the game:

```text
src/data/
  appointments/
    ranks/
      court/
        grades-01-04.ts
        grades-05-06.ts
        grades-07-08.ts
        grades-09-10.ts
        grades-11-12.ts
      provincial.ts
    titles/
      shogunate.ts
      shugo.ts
  geography/
    provinces.ts
    regions.ts
    map.ts
  trivia/
    items.ts
    featured.ts
  schema/
    appointments.ts
    geography.ts
    trivia.ts
  validation.ts
```

Each appointment owns its stable ID, original `sourceOrder`, Japanese office, reading, localized game name, historical meaning, grade, tier, count, kind, and category. Presentation values such as class labels, stat effects, and bonuses are derived centrally in `src/lib/appointments.ts`.

Route-backed geography and trivia IDs are validated as URL-safe slugs. Cross-dataset validation also checks province metadata coverage, category consistency, unique IDs, source ordering, and non-overlapping modern-prefecture map groups.

## Project structure

```text
src/
  components/
    hero/
    introduction/
    navigation/
    reference/
    trivia/
  data/
  layouts/
    BaseLayout.astro
  lib/
    appointments.ts
    geography.ts
    routes.ts
    search.ts
    trivia.ts
  pages/
    index.astro
    reference/
      index.astro
    trivia/
      index.astro
      context/
        index.astro
      regions/
        index.astro
        [slug].astro
      offices/
        index.astro
        [slug].astro
  scripts/
    reference-explorer.ts
    guide-directory.ts
    legacy-reference-redirect.ts
  styles/
    global.css
    tokens.css
    base.css
    hero.css
    section-nav.css
    introduction.css
    systems.css
    shared.css
    reference.css
    table.css
    popovers.css
    map.css
    guide.css
    footer.css
    responsive.css
tests/
  e2e/
    accessibility.spec.ts
    reference.spec.ts
    trivia.spec.ts
  unit/
    data-integrity.test.ts
    search.test.ts
```

The separation is intentional: `data/` contains authored facts, `lib/` contains pure domain/routing logic, `scripts/` contains browser behavior, and Astro components render static views.

## Geography map

The Regions & Provinces directory includes an interactive Japan orientation map. D3 Geo and TopoJSON are used during the Astro build to turn `jpn-atlas` geometry into inline SVG paths, so D3/TopoJSON are not browser-runtime dependencies.

The boundaries shown are modern prefectures and are explicitly presented only as an orientation aid, not as Sengoku-era province borders.

## GitHub Actions

Two workflows are included:

- `.github/workflows/deploy.yml` builds and deploys the static site to GitHub Pages.
- `.github/workflows/quality.yml` runs static validation plus production-build Playwright and accessibility tests on pushes, pull requests, and manual dispatches.

The quality workflow runs static validation and browser validation as separate jobs. The browser job uses the Playwright image matching `@playwright/test`, so Chromium, Firefox, WebKit, and their Linux dependencies are preinstalled instead of downloaded on every run. CI uses two Playwright workers; benchmarking this configuration on GitHub Actions reduced total wall-clock time compared with the single-job, single-worker variant while preserving all browser/device and accessibility coverage.

The workflow uses the committed pnpm lockfile. Run `pnpm install` locally whenever dependencies change and commit the updated lockfile.
