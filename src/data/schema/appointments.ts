import { z } from 'astro/zod';

export const appointmentKindSchema = z.enum(['rank', 'title']);
export const appointmentTierSchema = z.enum(['upper', 'lower']);
export const appointmentCategorySchema = z.enum([
    'imperial-court',
    'provincial-office',
    'shogunate-office',
    'shugo',
]);

export const appointmentGradeSchema = z.union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
    z.literal(10),
    z.literal(11),
    z.literal(12),
]);

const nonEmptyString = z.string().trim().min(1);

/**
 * Authored appointment facts only. Display strings such as class labels,
 * affected stats, and bonuses are derived in src/lib/appointments.ts.
 */
export const appointmentSchema = z.object({
    id: nonEmptyString.regex(/^(rank|title)-[a-z0-9-]+$/),
    sourceOrder: z.number().int().nonnegative(),
    kind: appointmentKindSchema,
    gameName: nonEmptyString,
    japanese: nonEmptyString,
    reading: nonEmptyString,
    meaning: nonEmptyString,
    grade: appointmentGradeSchema,
    tier: appointmentTierSchema,
    count: z.number().int().positive(),
    category: appointmentCategorySchema,
});

export type AppointmentKind = z.infer<typeof appointmentKindSchema>;
export type AppointmentTier = z.infer<typeof appointmentTierSchema>;
export type AppointmentCategory = z.infer<typeof appointmentCategorySchema>;
export type AppointmentGrade = z.infer<typeof appointmentGradeSchema>;
export type Appointment = z.infer<typeof appointmentSchema>;
