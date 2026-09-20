import { z } from 'astro/zod';

const nonEmptyString = z.string().trim().min(1);
const slugSchema = nonEmptyString.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

export const regionSchema = z.object({
    id: slugSchema,
    name: nonEmptyString,
    japanese: nonEmptyString,
    area: nonEmptyString,
    location: nonEmptyString,
    body: nonEmptyString,
    knownFor: nonEmptyString,
    source: z.url(),
    aliases: z.array(nonEmptyString).optional(),
    type: z.enum(['Province', 'Region', 'Historic site']),
});

export const mapAreaSchema = z.object({
    id: nonEmptyString,
    label: nonEmptyString,
    prefectures: z.array(z.number().int().min(1).max(47)).min(1),
});

export type Region = z.infer<typeof regionSchema>;
export type MapArea = z.infer<typeof mapAreaSchema>;
