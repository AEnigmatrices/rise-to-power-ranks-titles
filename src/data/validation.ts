import { z } from 'astro/zod';
import { ranks } from './ranks';
import { titles } from './titles';
import { pronunciations } from './pronunciations';
import { provinces, regions } from './regions';
import { officeTrivia } from './trivia';

const nonEmptyString = z.string().trim().min(1);
const classNameSchema = z.string().regex(
    /^(Upper|Lower) \d+(?:st|nd|rd|th) Class$/,
    'Expected a class label such as "Upper 4th Class".',
);
const effectSchema = z.string().regex(
    /^(Politics|Leadership) \+ \d+$/,
    'Expected an effect such as "Politics + 9".',
);

const referenceEntrySchema = z.object({
    name: nonEmptyString,
    japanese: nonEmptyString,
    translation: nonEmptyString,
    className: classNameSchema,
    effect: effectSchema,
    bonus: z.number().int().min(1).max(12),
    count: z.number().int().positive(),
    category: nonEmptyString,
}).superRefine((entry, context) => {
    const effectBonus = Number(entry.effect.match(/(\d+)$/)?.[1]);
    if (effectBonus !== entry.bonus) {
        context.addIssue({
            code: 'custom',
            path: ['effect'],
            message: `Effect bonus ${effectBonus} does not match bonus ${entry.bonus}.`,
        });
    }
});

const regionSchema = z.object({
    id: nonEmptyString,
    name: nonEmptyString,
    japanese: nonEmptyString,
    area: nonEmptyString,
    location: nonEmptyString,
    body: nonEmptyString,
    source: z.url(),
    aliases: z.array(nonEmptyString).optional(),
    type: z.enum(['Province', 'Region', 'Historic site']),
});

const triviaItemSchema = z.object({
    id: nonEmptyString,
    label: nonEmptyString,
    body: nonEmptyString,
    source: z.url().optional(),
});

const staticDataSchema = z.object({
    ranks: z.array(referenceEntrySchema).min(1),
    titles: z.array(referenceEntrySchema).min(1),
    pronunciations: z.record(z.string().min(1), nonEmptyString),
    provinces: z.array(regionSchema).min(1),
    regions: z.array(regionSchema).min(1),
    trivia: z.array(triviaItemSchema).min(1),
}).superRefine((data, context) => {
    const validateEffectFamily = (
        entries: typeof data.ranks,
        expected: 'Politics' | 'Leadership',
        path: 'ranks' | 'titles',
    ) => {
        entries.forEach((entry, index) => {
            if (!entry.effect.startsWith(`${expected} + `)) {
                context.addIssue({
                    code: 'custom',
                    path: [path, index, 'effect'],
                    message: `${path === 'ranks' ? 'Ranks' : 'Titles'} must modify ${expected}.`,
                });
            }
        });
    };

    validateEffectFamily(data.ranks, 'Politics', 'ranks');
    validateEffectFamily(data.titles, 'Leadership', 'titles');

    const appointmentJapanese = new Set(
        [...data.ranks, ...data.titles].map((entry) => entry.japanese),
    );
    appointmentJapanese.forEach((japanese) => {
        if (!(japanese in data.pronunciations)) {
            context.addIssue({
                code: 'custom',
                path: ['pronunciations', japanese],
                message: `Missing pronunciation for ${japanese}.`,
            });
        }
    });

    const assertUniqueIds = (
        items: Array<{ id: string }>,
        path: 'regions' | 'trivia',
    ) => {
        const seen = new Set<string>();
        items.forEach((item, index) => {
            if (seen.has(item.id)) {
                context.addIssue({
                    code: 'custom',
                    path: [path, index, 'id'],
                    message: `Duplicate ${path === 'regions' ? 'region' : 'trivia'} id: ${item.id}.`,
                });
            }
            seen.add(item.id);
        });
    };

    assertUniqueIds(data.regions, 'regions');
    assertUniqueIds(data.trivia, 'trivia');

    data.provinces.forEach((province, index) => {
        if (province.type !== 'Province') {
            context.addIssue({
                code: 'custom',
                path: ['provinces', index, 'type'],
                message: 'Every entry in provinces must have type "Province".',
            });
        }
    });
});

export const staticData = {
    ranks,
    titles,
    pronunciations,
    provinces,
    regions,
    trivia: officeTrivia,
};

export type StaticData = z.infer<typeof staticDataSchema>;

/**
 * Parse all authored reference data at build/test time. A malformed record,
 * mismatched effect, duplicate ID, or missing pronunciation fails fast with a
 * path-aware Zod diagnostic instead of silently reaching the rendered page.
 */
export const validateStaticData = (): StaticData => staticDataSchema.parse(staticData);
