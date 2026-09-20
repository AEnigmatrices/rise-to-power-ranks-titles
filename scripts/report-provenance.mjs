import { readFile } from 'node:fs/promises';
import { stderr, stdout } from 'node:process';

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

const width = Math.max(...rows.map((row) => row.file.length));
for (const row of rows) {
    stdout.write(
        `${row.file.padEnd(width)}  groups=${String(row.structured).padStart(3)}  urls=${String(row.urls).padStart(3)}  metadata=${String(row.metadata).padStart(3)}  legacy=${row.legacy}\n`,
    );
}

stdout.write('\n');
stdout.write(`Structured source groups: ${structuredSourceFields}\n`);
stdout.write(`Source URLs: ${sourceUrls}\n`);
stdout.write(`Source metadata fields: ${enrichedSources}\n`);
stdout.write(`Legacy source fields: ${legacySourceFields}\n`);

if (legacySourceFields > 0) {
    stderr.write('\nLegacy "source:" fields remain in historical data. Migrate them to "sources: [...]".\n');
    process.exitCode = 1;
}
