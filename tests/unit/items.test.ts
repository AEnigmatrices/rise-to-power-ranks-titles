import { describe, expect, it } from 'vitest';
import { getItemCategories, getItemTranslation, itemCollections, itemTranslationCount } from '../../src/data/items';

describe('the supplied game item catalogues', () => {
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
