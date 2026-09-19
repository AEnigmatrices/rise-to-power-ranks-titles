import { describe, expect, it } from 'vitest';
import {
    classNumber,
    isSingleCharacterQuery,
    normalizeSearchText,
    sortClasses,
} from '../../src/lib/search';

describe('search normalization', () => {
    it('removes macrons and normalizes case', () => {
        expect(normalizeSearchText('  Ōmi no Kami  ')).toBe('omi no kami');
        expect(normalizeSearchText('KYŪSHŪ')).toBe('kyushu');
    });

    it('preserves Japanese text while trimming whitespace', () => {
        expect(normalizeSearchText('  関白  ')).toBe('関白');
    });

    it('counts Unicode characters rather than UTF-16 code units', () => {
        expect(isSingleCharacterQuery('守')).toBe(true);
        expect(isSingleCharacterQuery('守護')).toBe(false);
    });
});

describe('class ordering', () => {
    it('extracts numeric class levels', () => {
        expect(classNumber('Upper 1st Class')).toBe(1);
        expect(classNumber('Lower 12th Class')).toBe(12);
        expect(classNumber('Unknown')).toBe(Number.MAX_SAFE_INTEGER);
    });

    it('sorts by class level and places Upper before Lower', () => {
        const classes = [
            'Lower 3rd Class',
            'Upper 4th Class',
            'Lower 1st Class',
            'Upper 3rd Class',
        ];

        expect(classes.sort(sortClasses)).toEqual([
            'Lower 1st Class',
            'Upper 3rd Class',
            'Lower 3rd Class',
            'Upper 4th Class',
        ]);
    });
});
