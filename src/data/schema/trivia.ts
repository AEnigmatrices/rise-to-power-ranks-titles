import { z } from 'astro/zod';

const nonEmptyString = z.string().trim().min(1);
const slugSchema = nonEmptyString.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

export const triviaItemSchema = z.object({
    id: slugSchema,
    label: nonEmptyString,
    body: nonEmptyString,
    source: z.url().optional(),
});

export const featuredTriviaSchema = z.object({
    kicker: nonEmptyString,
    japanese: nonEmptyString,
    title: nonEmptyString,
    body: nonEmptyString,
    source: z.url().optional(),
});

export type TriviaItem = z.infer<typeof triviaItemSchema>;
export type FeaturedTrivia = z.infer<typeof featuredTriviaSchema>;
