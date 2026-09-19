// @ts-check
import { defineConfig } from 'astro/config';

const repositoryBase = '/rise-to-power-ranks-and-titles';

// SITE_URL is supplied by the GitHub Pages workflow. It is intentionally optional
// so local development and builds do not need to know the GitHub username.
export default defineConfig({
    site: process.env.SITE_URL,
    base: repositoryBase,
});
