import { readFile } from 'node:fs/promises';

const files = [
    'src/data/trivia/items.ts',
    'src/data/trivia/featured.ts',
    'src/data/geography/provinces.ts',
    'src/data/geography/regions.ts',
    'src/data/holders.ts',
    'src/data/provenance/context.ts',
];

const rows = [];
let legacySourceFields = 0;
let structuredSourceFields = 0;
let sourceUrls = 0;
let enrichedSources = 0;

for (const path of files) {
    const text = await readFile(path, 'utf8');
    const legacy = (text.match(/^\s*source:\s/gm) ?? []).length;
    const structured = (text.match(/^\s*sources:\s*\[/gm) ?? []).length;
    const urls = (text.match(/\burl:\s*['"`]https?:\/\//g) ?? []).length;
    const metadata = (text.match(/^\s*(?:title|publisher|year|note):\s/gm) ?? []).length;

    legacySourceFields += legacy;
    structuredSourceFields += structured;
    sourceUrls += urls;
    enrichedSources += metadata;

    rows.push({ file: path, structured, urls, metadata, legacy });
}

console.table(rows);
console.log('');
console.log(`Structured source groups: ${structuredSourceFields}`);
console.log(`Source URLs: ${sourceUrls}`);
console.log(`Source metadata fields: ${enrichedSources}`);
console.log(`Legacy source fields: ${legacySourceFields}`);

if (legacySourceFields > 0) {
    console.error('\nLegacy "source:" fields remain in historical data. Migrate them to "sources: [...]".');
    process.exitCode = 1;
}
