import { describe, expect, it } from 'vitest';
import { getItemCategories, getItemTranslation, getItemPronunciation, itemCollections, itemTranslationCount, itemPronunciationCount, getItemTrivia, itemTrivia } from '../../src/data/items';

describe('the supplied game item catalogues', () => {
    it('attaches only source-linked trivia to existing Japanese item names', () => {
        const all = itemCollections.flatMap((collection) => collection.items);
        const keys = Object.keys(itemTrivia);
        expect(keys).toHaveLength(64);
        // Every note belongs to a source item; no trivia is generated for unresearched entries.
        for (const japanese of keys) {
            expect(all.some((item) => item.japanese === japanese)).toBe(true);
            const trivia = getItemTrivia({ japanese });
            expect(trivia?.text.trim()).toBeTruthy();
            expect(trivia?.sources.length).toBeGreaterThan(0);
            for (const source of trivia!.sources) {
                expect(source.url).toMatch(/^https:\/\//);
                expect(source.title.trim()).toBeTruthy();
            }
        }
        expect(getItemTrivia({ japanese: '不存在の品' })).toBeUndefined();
    });
    it('covers every sword in the supplied game with sourced historical trivia', () => {
        const swords = itemCollections.flatMap((collection) => collection.items)
            .filter((item) => item.type === 'Sword');
        expect(swords).toHaveLength(20);
        for (const sword of swords) {
            const trivia = getItemTrivia(sword);
            expect(trivia, `Missing trivia for ${sword.japanese}`).toBeDefined();
            expect(trivia?.sources.length).toBeGreaterThan(0);
            expect(['identified-object', 'historical-work', 'historical-context'])
                .toContain(trivia?.scope);
        }
        expect(getItemTrivia({ japanese: '妙法蓮華経' })?.scope).toBe('historical-context');
    });
    it('provides sourced trivia for all 20 items in the game’s Spear category', () => {
        const spearItems = itemCollections.flatMap((collection) => collection.items)
            .filter((item) => item.type === 'Spear');
        expect(spearItems).toHaveLength(20);
        for (const item of spearItems) {
            const trivia = getItemTrivia(item);
            expect(trivia, `Missing trivia for ${item.japanese}`).toBeDefined();
            expect(trivia?.sources.length).toBeGreaterThan(0);
            expect(['identified-object', 'historical-work', 'historical-context'])
                .toContain(trivia?.scope);
        }
        // The game's polearm grouping must not masquerade as an authenticated
        // historical spear when the Japanese actually names a sutra, school,
        // deity, naginata or nagamaki.
        for (const japanese of ['八幡大菩薩', '片山一文字', '当麻銘薙刀', '無銘長巻']) {
            expect(getItemTrivia({ japanese })?.scope).toBe('historical-context');
        }
    });
    it('supplies Japanese pronunciation for every one of the 430 source entries', () => {
        expect(itemPronunciationCount).toBe(430);
        for (const collection of itemCollections) {
            for (const item of collection.items) {
                const pronunciation = getItemPronunciation(item);
                expect(pronunciation.romaji.trim().length).toBeGreaterThan(0);
                expect(['editorial', 'tentative']).toContain(pronunciation.status);
                if (pronunciation.status === 'tentative') expect(pronunciation.note).toBeTruthy();
            }
        }
    });
    it('supplies a separate English translation for all 430 Japanese item names', () => {
        expect(itemTranslationCount).toBe(430);
        for (const collection of itemCollections) {
            for (const item of collection.items) {
                const translation = getItemTranslation(item);
                expect(translation.english.trim().length).toBeGreaterThan(0);
                expect(['verified','interpretive','needs-review']).toContain(translation.status);
            }
        }
    });
    it('retains all 430 items in their 34 original item types', () => {
        expect(itemCollections.map((collection) => collection.items.length)).toEqual([135, 60, 135, 100]);
        expect(itemCollections.map((collection) => getItemCategories(collection).length)).toEqual([9, 5, 12, 8]);
        expect(itemCollections.flatMap((collection) => collection.items)).toHaveLength(430);
    });

    it('preserves source order and gives repeated localized names distinct permalinks', () => {
        const all = itemCollections.flatMap((collection) => collection.items);
        expect(new Set(all.map((item) => item.id)).size).toBe(all.length);
        for (const collection of itemCollections) {
            expect(collection.items.map((item) => item.sourceOrder)).toEqual(
                collection.items.map((_, index) => index),
            );
        }
    });

    it('retains the original sweets label and item effects verbatim', () => {
        const art = itemCollections.find((collection) => collection.slug === 'art')!;
        const sweets = getItemCategories(art).find((category) => category.label === 'Sweets')!;
        expect(sweets.type).toBe('Sweets(笑)');
        expect(sweets.items).toHaveLength(10);
        expect(sweets.items[0]).toMatchObject({
            name: 'Walnut Cake',
            japanese: '胡桃餅',
            quality: 10,
            effect: 'Skill[Rally]',
        });
    });
});
