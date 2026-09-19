import { describe, expect, it } from 'vitest';
import { validateStaticData } from '../../src/data/validation';

describe('authored reference data', () => {
    const data = validateStaticData();

    it('passes the shared Zod schema', () => {
        expect(data.ranks.length).toBeGreaterThan(0);
        expect(data.titles.length).toBeGreaterThan(0);
        expect(data.regions.length).toBeGreaterThan(0);
        expect(data.trivia.length).toBeGreaterThan(0);
    });

    it('contains the complete 365-entry appointment catalogue', () => {
        expect(data.ranks).toHaveLength(295);
        expect(data.titles).toHaveLength(70);
        expect(data.ranks.length + data.titles.length).toBe(365);
    });

    it('has a pronunciation for every appointment office name', () => {
        const missing = [...data.ranks, ...data.titles]
            .filter((entry) => !data.pronunciations[entry.japanese])
            .map((entry) => entry.japanese);

        expect(missing).toEqual([]);
    });

    it('uses Politics for ranks and Leadership for titles', () => {
        expect(data.ranks.every((entry) => entry.effect.startsWith('Politics + '))).toBe(true);
        expect(data.titles.every((entry) => entry.effect.startsWith('Leadership + '))).toBe(true);
    });
});
