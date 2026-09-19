# Rise to Power — Ranks & Titles

A one-page Astro reference for the **Rank** and **Title** appointment systems in *Nobunaga's Ambition: Rise to Power*.

The site keeps the game's English-localized appointment names alongside their Japanese office names and a separate historical/literal English interpretation. It also shows class, stat effect, appointment type, exact-source-row counts, pronunciation, historical trivia, and geographic context.

## Stack

### Site runtime

- Astro 7
- TypeScript
- Fuse.js for weighted fuzzy catalogue and trivia search
- Floating UI for collision-aware appointment trivia popovers
- Lucide Astro for interface icons
- Motion for restrained result/filter transitions with reduced-motion support
- D3 Geo + TopoJSON Client + jpn-atlas for the build-time Japan orientation map
- Fontsource Noto Serif JP Variable for consistent self-hosted Japanese serif typography
- Plain browser JavaScript/TypeScript for the interactive reference UI
- GitHub Pages via the official Astro GitHub Action

No UI framework or runtime server is required.

### Quality tooling

- `astro check` + TypeScript for project-wide Astro/TS diagnostics
- Astro's `astro/zod` re-export (Zod 4) for build-time validation of authored reference data
- Vitest for unit and data-integrity tests
- Playwright for Chromium, Firefox, and WebKit end-to-end tests
- `@axe-core/playwright` for automated WCAG accessibility checks
- ESLint + `eslint-plugin-astro` + `typescript-eslint` for code-quality checks
- Prettier + `prettier-plugin-astro` for optional repository formatting

## Requirements

- Node.js 24.16+ recommended
- Node.js 22.22.3+ is also supported by the current lint stack
- Corepack enabled
- pnpm 12.5.1 (pinned in `package.json`)

TypeScript is intentionally pinned to the 6.x line. `astro check` currently depends on TypeScript's language-service API, which TypeScript 7 does not expose in a compatible form for Astro language tooling yet.

## Local development

```powershell
corepack enable
pnpm install
pnpm dev
```

Because the repository is configured for GitHub Pages, Astro uses the base path:

```text
/rise-to-power-ranks-and-titles
```

Astro will print the exact local URL when the development server starts.

## Validation and tests

Run all fast validation used by the production build:

```powershell
pnpm validate
```

This runs:

```text
astro check → ESLint → Vitest
```

Individual commands are also available:

```powershell
pnpm check
pnpm lint
pnpm lint:fix
pnpm test
pnpm test:watch
pnpm format:check
pnpm format
```

`astro check` is configured to fail on warnings as well as errors so editor diagnostics cannot silently reach deployment.

### Browser and accessibility tests

Install Playwright's browser binaries once on a development machine:

```powershell
pnpm test:e2e:install
```

Then run the end-to-end suite:

```powershell
pnpm test:e2e
```

The suite runs against Chromium, Firefox, and WebKit. It covers the catalogue search and keyboard shortcut, Rank/Title tab switching, historical-region map filtering, and automated serious/critical WCAG checks through axe-core.

For Playwright's interactive runner:

```powershell
pnpm test:e2e:ui
```

## Production build

```powershell
pnpm build
pnpm preview
```

`pnpm build` runs the fast validation gate before `astro build`. The static output is written to `dist/`.

## Static data validation

`src/data/validation.ts` validates the authored reference dataset with `astro/zod` during both the page build and the unit-test suite.

The validator checks, among other things:

- required rank/title fields and class-label shape
- positive source-row counts and valid bonus ranges
- the numeric bonus embedded in each effect string
- Politics effects for Ranks and Leadership effects for Titles
- valid source URLs for geography and trivia records
- unique region and trivia IDs
- province records being typed as provinces
- pronunciation coverage for every Japanese appointment name

This keeps malformed data from silently rendering into the reference page.

## Search utilities

Search normalization and class sorting live in `src/lib/search.ts` rather than being duplicated inside Astro browser scripts. Vitest covers macron-insensitive romanization, Japanese input, Unicode single-character behavior, and class ordering.

## GitHub Actions

Two workflows are included:

- `.github/workflows/deploy.yml` builds and deploys the static site to GitHub Pages.
- `.github/workflows/quality.yml` runs the validation suite, installs Playwright's three browser engines, and runs end-to-end/accessibility tests on pushes, pull requests, and manual dispatches.

The quality workflow uses the committed pnpm lockfile, so run `pnpm install` locally whenever dependencies change and commit the updated `pnpm-lock.yaml`.

## Data layout

```text
src/data/ranks.ts          Imperial Court Rank reference
src/data/titles.ts         Shogunate Title reference
src/data/types.ts          Shared reference types
src/data/pronunciations.ts Japanese office readings
src/data/regions.ts        Historic province/region descriptions and mappings
src/data/trivia.ts         Featured notes and contextual office trivia
src/data/validation.ts     Zod schemas and cross-dataset validation
```

Exact duplicate entries from the source references are consolidated and represented by the `count` field. Source order is retained.

The dedicated trivia section includes topic filters, weighted fuzzy search, an area filter for regions, and progressively revealed cards. It remains readable with JavaScript disabled. Region descriptions are shared with the appointment-table popovers; modern locations are approximate. Both provinces called Awa have distinct identifiers, and Ōshū / Ushū map to Mutsu / Dewa.

When **Regions & geography** is selected, the page renders an interactive Japan orientation map. D3 Geo and TopoJSON are used at Astro build time to convert `jpn-atlas` geometry into inline SVG paths, so the map does not ship D3 or TopoJSON as browser runtime code. The boundaries shown are modern prefectures used only to orient the reader; they are intentionally not presented as Sengoku-era province borders.

## Project structure

```text
.github/workflows/
  deploy.yml
  quality.yml
.vscode/
  extensions.json
  settings.json
public/
  favicon.svg
src/
  components/
    Hero.astro
    ReferenceExplorer.astro
    RegionMap.astro
    SystemOverview.astro
    TriviaGuide.astro
  data/
    pronunciations.ts
    ranks.ts
    regions.ts
    titles.ts
    trivia.ts
    types.ts
    validation.ts
  layouts/
    BaseLayout.astro
  lib/
    search.ts
  pages/
    index.astro
  styles/
    global.css
tests/
  e2e/
    accessibility.spec.ts
    reference.spec.ts
  unit/
    data-integrity.test.ts
    search.test.ts
astro.config.mjs
eslint.config.js
playwright.config.ts
vitest.config.ts
.prettierrc.mjs
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
```
