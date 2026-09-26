/** A single row in the supplied item catalogues. Never derive an effect from quality: some items grant skills instead. */
export interface Item {
    id: string;
    type: string;
    name: string;
    japanese: string;
    quality: number;
    origin: string;
    effect: string;
    sourceOrder: number;
}

export type ItemCollectionSlug = 'arms' | 'art' | 'books' | 'tea';

export interface ItemCollection {
    slug: ItemCollectionSlug;
    name: string;
    japanese: string;
    description: string;
    items: Item[];
}

export interface ItemCategory {
    type: string;
    label: string;
    slug: string;
    items: Item[];
}
