/**
 * Normalize user-facing search text so plain romanization (for example, Omi)
 * matches text that contains macrons or other combining marks (for example, Ōmi).
 */
export const normalizeSearchText = (value: string): string =>
    value
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLocaleLowerCase()
        .trim();

export const isSingleCharacterQuery = (value: string): boolean =>
    [...value].length === 1;

export const classNumber = (value: string): number => {
    const match = value.match(/(\d+)/);
    return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
};

/**
 * Sort class labels by numeric rank first, with Upper before Lower at the same
 * numeric level. Unknown labels remain stable at the end via locale ordering.
 */
export const sortClasses = (a: string, b: string): number => {
    const numberDifference = classNumber(a) - classNumber(b);
    if (numberDifference !== 0) return numberDifference;
    if (a.startsWith('Upper') && b.startsWith('Lower')) return -1;
    if (a.startsWith('Lower') && b.startsWith('Upper')) return 1;
    return a.localeCompare(b);
};

export const sourceOrder = (element: HTMLElement): number =>
    Number(element.dataset.order ?? 0);
