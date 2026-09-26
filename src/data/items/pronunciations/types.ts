/** Editorial Hepburn readings of source names; never imply uncertain readings are verified. */
export interface ItemPronunciation {
    romaji: string;
    status: 'editorial' | 'tentative';
    note?: string;
}

/**
 * Keep a Japanese key alongside each reading, so reordering the source records
 * cannot silently attach a pronunciation to the wrong game item.
 *
 * Prefix the Japanese key with ? for tentative readings. A third pipe-delimited
 * field explains why that reading needs additional confirmation.
 */
export const parsePronunciations = (text: string): Record<string, ItemPronunciation> => {
    const entries: Record<string, ItemPronunciation> = {};
    for (const rawLine of text.trim().split('\n')) {
        const line = rawLine.trim();
        if (!line || line.startsWith('#')) continue;
        const [rawJapanese, romaji, note, ...extra] = line.split('|').map((part) => part.trim());
        const tentative = rawJapanese.startsWith('?');
        const japanese = tentative ? rawJapanese.slice(1) : rawJapanese;
        if (!japanese || !romaji || extra.length || entries[japanese]) {
            throw new Error(`Invalid or repeated item pronunciation row: ${rawLine}`);
        }
        if (tentative && !note) {
            throw new Error(`Tentative pronunciation needs an explanatory note: ${japanese}`);
        }
        entries[japanese] = {
            romaji,
            status: tentative ? 'tentative' : 'editorial',
            ...(note ? { note } : {}),
        };
    }
    return entries;
};
