import { z } from 'astro/zod';

const nonEmptyString = z.string().trim().min(1);

export const historicalSourceSchema = z.object({
    url: z.url(),
    title: nonEmptyString.optional(),
    publisher: nonEmptyString.optional(),
    year: z.union([z.number().int().min(1).max(2100), nonEmptyString]).optional(),
    note: nonEmptyString.optional(),
});

export type HistoricalSource = z.infer<typeof historicalSourceSchema>;
