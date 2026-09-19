export type ReferenceKind = 'rank' | 'title';

export type ReferenceEntry = {
    name: string;
    japanese: string;
    translation: string;
    className: string;
    effect: string;
    bonus: number;
    count: number;
    category: string;
};
