# Rise to Power — Ranks & Titles

A one-page Astro reference for the **Rank** and **Title** appointment systems in *Nobunaga's Ambition: Rise to Power*.

The site keeps the game's English-localized appointment names alongside their Japanese office names and a separate historical/literal English interpretation. It also shows class, stat effect, appointment type, and a count for exact duplicate source rows.

## Stack

- Astro 7
- TypeScript
- pnpm via Corepack
- Fuse.js for weighted fuzzy search across localized names, Japanese offices, readings, and historical meanings
- Floating UI for collision-aware appointment trivia popovers
- Lucide Astro for interface icons
- Motion for restrained result/filter transitions with reduced-motion support
- D3 Geo + TopoJSON Client + jpn-atlas for the build-time Japan orientation map
- Plain browser JavaScript for search/filter interactions
- GitHub Pages via the official Astro GitHub Action

No UI framework or runtime server is required.

## Requirements

- Node.js 24.x (the project also declares `>=22.12.0`)
- Corepack enabled
- pnpm 12.5.1 (pinned in `package.json`)

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

## Production build

```powershell
pnpm build
pnpm preview
```

The static output is written to `dist/`.

## GitHub Pages deployment

The repository includes `.github/workflows/deploy.yml` using the official Astro Pages action.

1. Create a GitHub repository named `rise-to-power-ranks-and-titles`.
2. Push this project to its `main` branch.
3. Open **Settings → Pages** in GitHub.
4. Set **Source** to **GitHub Actions**.
5. Push to `main` (or manually run the workflow) to deploy.

The workflow supplies the GitHub account URL to Astro automatically. The repository base path is already configured in `astro.config.mjs`.

## Data layout

```text
src/data/ranks.ts   Imperial Court Rank reference
src/data/titles.ts  Shogunate Title reference
src/data/types.ts   Shared data type
src/data/regions.ts Historic province and region descriptions, office mappings, and reading links
src/data/trivia.ts  Featured notes and contextual office trivia
```

Exact duplicate entries from the source references are consolidated and represented by the `count` field. Source order is retained.

The dedicated trivia section includes topic filters, weighted fuzzy search, an area filter for
regions, and progressively revealed cards. It remains readable with JavaScript disabled. Region
descriptions are shared with the appointment-table popovers; modern locations are approximate.
Both provinces called Awa have distinct identifiers, and Ōshū / Ushū map to Mutsu / Dewa.

When **Regions & geography** is selected, the page also renders an interactive Japan orientation
map. D3 Geo and TopoJSON are used at Astro build time to convert `jpn-atlas` geometry into inline
SVG paths, so the map does not ship D3 or TopoJSON as browser runtime code. The boundaries shown
are modern prefectures used only to orient the reader; they are intentionally not presented as
Sengoku-era province borders.

## Project structure

```text
.github/workflows/deploy.yml
public/favicon.svg
src/
  components/
    Hero.astro
    ReferenceExplorer.astro
    RegionMap.astro
    SystemOverview.astro
    TriviaGuide.astro
  data/
    ranks.ts
    titles.ts
    types.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
  styles/
    global.css
astro.config.mjs
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
```
