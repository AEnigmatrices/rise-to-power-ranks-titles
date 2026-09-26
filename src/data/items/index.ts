import { armItems } from './arms';
import { artItems } from './art';
import { bookItems } from './books';
import { teaItems } from './tea';
import type { ItemCategory, ItemCollection, ItemCollectionSlug } from './types';

export type { Item, ItemCategory, ItemCollection, ItemCollectionSlug } from './types';

export const itemCollections: ItemCollection[] = [
    { slug: 'arms', name: 'Arms', japanese: '武具', description: 'Swords, spears, firearms, armor, helmets, and horses.', items: armItems },
    { slug: 'art', name: 'Art & Miscellaneous', japanese: '美術・雑貨', description: 'Paintings, art, sweets, jizake, and scented wood.', items: artItems },
    { slug: 'books', name: 'Books & Scrolls', japanese: '書物', description: 'Military, political, historical, and other written works.', items: bookItems },
    { slug: 'tea', name: 'Tea Utensils', japanese: '茶道具', description: 'Tea vessels and other utensils, organized by type.', items: teaItems },
];

export const itemCollectionsBySlug = Object.fromEntries(
    itemCollections.map((collection) => [collection.slug, collection]),
) as Record<ItemCollectionSlug, ItemCollection>;

export const itemCategorySlug = (type: string): string =>
    type.normalize('NFKD').replace(/[\\u0300-\\u036f]/g, '').toLowerCase()
        .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Preserve the source order and original type strings; only the visible Sweets heading is shortened. */
export const getItemCategories = (collection: ItemCollection): ItemCategory[] => {
    const categories = new Map<string, ItemCategory>();
    for (const item of collection.items) {
        let category = categories.get(item.type);
        if (!category) {
            category = {
                type: item.type,
                label: item.type === 'Sweets(笑)' ? 'Sweets' : item.type,
                slug: itemCategorySlug(item.type),
                items: [],
            };
            categories.set(item.type, category);
        }
        category.items.push(item);
    }
    return [...categories.values()];
};
