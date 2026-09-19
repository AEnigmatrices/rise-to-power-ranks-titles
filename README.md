# Rise to Power — Ranks & Titles

A one-page Astro reference for the **Rank** and **Title** appointment systems in *Nobunaga's Ambition: Rise to Power*.

The site keeps the game's English-localized appointment names alongside their Japanese office names and a separate historical/literal English interpretation. It also shows class, stat effect, appointment type, and a count for exact duplicate source rows.

## Stack

- Astro 7
- TypeScript
- pnpm via Corepack
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
```

Exact duplicate entries from the source references are consolidated and represented by the `count` field. Source order is retained.

## Project structure

```text
.github/workflows/deploy.yml
public/favicon.svg
src/
  components/
    Hero.astro
    ReferenceExplorer.astro
    SystemOverview.astro
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
