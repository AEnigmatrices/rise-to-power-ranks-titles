import { z } from 'astro/zod';
import {
    appointments,
    rankAppointments,
    titleAppointments,
} from './appointments';
import { mapAreas, provinces, regions } from './geography';
import { featuredTrivia, officeTrivia } from './trivia';
import { notableHoldersByAppointment } from './holders';
import { politicalContextSources } from './provenance/context';
import { appointmentSchema } from './schema/appointments';
import { mapAreaSchema, regionSchema } from './schema/geography';
import { featuredTriviaSchema, triviaItemSchema } from './schema/trivia';
import { historicalSourceSchema } from './schema/sources';

const notableHolderSchema = z.object({
    name: z.string().trim().min(1),
    japanese: z.string().trim().min(1).optional(),
    description: z.string().trim().min(1),
    sources: z.array(historicalSourceSchema).min(1),
});

const staticDataSchema = z.object({
    appointments: z.array(appointmentSchema).min(1),
    ranks: z.array(appointmentSchema).min(1),
    titles: z.array(appointmentSchema).min(1),
    provinces: z.array(regionSchema).min(1),
    regions: z.array(regionSchema).min(1),
    mapAreas: z.array(mapAreaSchema).min(1),
    trivia: z.array(triviaItemSchema).min(1),
    featuredTrivia: z.array(featuredTriviaSchema).min(1),
    holders: z.array(notableHolderSchema).min(1),
    contextSources: z.array(historicalSourceSchema).min(1),
}).superRefine((data, context) => {
    const assertUnique = <T>(
        items: T[],
        value: (item: T) => string,
        path: string,
        label: string,
    ) => {
        const seen = new Set<string>();
        items.forEach((item, index) => {
            const current = value(item);
            if (seen.has(current)) {
                context.addIssue({
                    code: 'custom',
                    path: [path, index],
                    message: `Duplicate ${label}: ${current}.`,
                });
            }
            seen.add(current);
        });
    };

    assertUnique(data.appointments, (entry) => entry.id, 'appointments', 'appointment id');
    assertUnique(
        data.appointments,
        (entry) => entry.japanese,
        'appointments',
        'Japanese office name',
    );
    assertUnique(data.regions, (region) => region.id, 'regions', 'region id');
    assertUnique(data.trivia, (item) => item.id, 'trivia', 'trivia id');
    assertUnique(data.mapAreas, (area) => area.id, 'mapAreas', 'map area id');

    const validateSourceOrder = (
        entries: typeof data.ranks,
        path: 'ranks' | 'titles',
    ) => {
        const orders = entries.map((entry) => entry.sourceOrder).sort((a, b) => a - b);
        orders.forEach((order, index) => {
            if (order !== index) {
                context.addIssue({
                    code: 'custom',
                    path: [path, index, 'sourceOrder'],
                    message: `${path} sourceOrder must form a contiguous 0-based sequence.`,
                });
            }
        });
    };

    validateSourceOrder(data.ranks, 'ranks');
    validateSourceOrder(data.titles, 'titles');

    data.ranks.forEach((entry, index) => {
        if (entry.kind !== 'rank') {
            context.addIssue({
                code: 'custom',
                path: ['ranks', index, 'kind'],
                message: 'Every rank entry must have kind "rank".',
            });
        }
        if (!['imperial-court', 'provincial-office'].includes(entry.category)) {
            context.addIssue({
                code: 'custom',
                path: ['ranks', index, 'category'],
                message: `Rank entry has title-only category: ${entry.category}.`,
            });
        }
    });

    data.titles.forEach((entry, index) => {
        if (entry.kind !== 'title') {
            context.addIssue({
                code: 'custom',
                path: ['titles', index, 'kind'],
                message: 'Every title entry must have kind "title".',
            });
        }
        if (!['shogunate-office', 'shugo'].includes(entry.category)) {
            context.addIssue({
                code: 'custom',
                path: ['titles', index, 'category'],
                message: `Title entry has rank-only category: ${entry.category}.`,
            });
        }
    });

    data.appointments.forEach((entry, index) => {
        if (!entry.id.startsWith(`${entry.kind}-`)) {
            context.addIssue({
                code: 'custom',
                path: ['appointments', index, 'id'],
                message: `Appointment id must start with ${entry.kind}-.`,
            });
        }
    });

    data.provinces.forEach((province, index) => {
        if (province.type !== 'Province') {
            context.addIssue({
                code: 'custom',
                path: ['provinces', index, 'type'],
                message: 'Every entry in provinces must have type "Province".',
            });
        }
    });

    const provinceJapanese = new Set(data.provinces.map((province) => province.japanese));
    data.appointments.forEach((entry, index) => {
        if (entry.category !== 'provincial-office' && entry.category !== 'shugo') return;

        const officeProvince = entry.japanese.replace(/(守護|守|介)$/, '');
        if (!provinceJapanese.has(officeProvince)) {
            context.addIssue({
                code: 'custom',
                path: ['appointments', index, 'japanese'],
                message: `No province metadata found for ${entry.japanese}.`,
            });
        }
    });

    const prefectureOwners = new Map<number, string>();
    data.mapAreas.forEach((area, areaIndex) => {
        area.prefectures.forEach((prefecture) => {
            const previous = prefectureOwners.get(prefecture);
            if (previous) {
                context.addIssue({
                    code: 'custom',
                    path: ['mapAreas', areaIndex, 'prefectures'],
                    message: `Prefecture ${prefecture} belongs to both ${previous} and ${area.id}.`,
                });
            }
            prefectureOwners.set(prefecture, area.id);
        });
    });
});

export const staticData = {
    appointments,
    ranks: rankAppointments,
    titles: titleAppointments,
    provinces,
    regions,
    mapAreas,
    trivia: officeTrivia,
    featuredTrivia,
    holders: Object.values(notableHoldersByAppointment).flatMap((items) => items ?? []),
    contextSources: politicalContextSources,
};

export type StaticData = z.infer<typeof staticDataSchema>;

/**
 * Parse all authored reference data at build/test time. Bad relationships,
 * malformed records, or duplicate stable IDs fail fast with path-aware Zod diagnostics.
 */
export const validateStaticData = (): StaticData => staticDataSchema.parse(staticData);
