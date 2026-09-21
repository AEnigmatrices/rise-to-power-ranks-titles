import { rankAppointments } from './appointments';
import { toReferenceEntry, type ReferenceEntry } from '../lib/appointments';

export type MinistryOfficeTier = {
    id: 'head' | 'assistant' | 'secretary';
    label: string;
    japanese: string;
    appointments: ReferenceEntry[];
};

export type MinistryHierarchy = {
    id: string;
    label: string;
    japanese: string;
    meaning: string;
    tiers: MinistryOfficeTier[];
};

type MinistrySpec = {
    id: string;
    label: string;
    japanese: string;
    meaning: string;
    appointments: {
        head: string[];
        assistant: string[];
        secretary: string[];
    };
};

const specs: MinistrySpec[] = [
    {
        id: 'nakatsukasa',
        label: 'Central Affairs',
        japanese: '中務省',
        meaning: 'Ministry of Central Affairs',
        appointments: {
            head: ['rank-nakatsukasa-kyo'],
            assistant: ['rank-nakatsukasa-no-taifu', 'rank-nakatsukasa-no-sho'],
            secretary: ['rank-nakatsukasa-no-daijo', 'rank-nakatsukasa-no-shojo'],
        },
    },
    {
        id: 'shikibu',
        label: 'Ceremonial Affairs',
        japanese: '式部省',
        meaning: 'Ministry of Ceremonial Affairs',
        appointments: {
            head: ['rank-shikibu-kyo'],
            assistant: ['rank-shikibu-no-taifu', 'rank-shikibu-no-sho'],
            secretary: ['rank-shikibu-no-daijo', 'rank-shikibu-no-shojo'],
        },
    },
    {
        id: 'jibu',
        label: 'Civil Administration',
        japanese: '治部省',
        meaning: 'Ministry of Civil Administration',
        appointments: {
            head: ['rank-jibu-kyo'],
            assistant: ['rank-jibu-no-taifu', 'rank-jibu-no-sho'],
            secretary: ['rank-jibu-no-daijo', 'rank-jibu-no-shojo'],
        },
    },
    {
        id: 'minbu',
        label: 'Popular Affairs',
        japanese: '民部省',
        meaning: 'Ministry of Popular Affairs',
        appointments: {
            head: ['rank-minbu-kyo'],
            assistant: ['rank-minbu-no-taifu', 'rank-minbu-no-sho'],
            secretary: ['rank-minbu-no-daijo', 'rank-minbu-no-shojo'],
        },
    },
    {
        id: 'hyobu',
        label: 'Military Affairs',
        japanese: '兵部省',
        meaning: 'Ministry of Military Affairs',
        appointments: {
            head: ['rank-hyobu-kyo'],
            assistant: ['rank-hyobu-no-taifu', 'rank-hyobu-no-sho'],
            secretary: ['rank-hyobu-no-daijo', 'rank-hyobu-no-shojo'],
        },
    },
    {
        id: 'gyobu',
        label: 'Justice',
        japanese: '刑部省',
        meaning: 'Ministry of Justice',
        appointments: {
            head: ['rank-gyobu-kyo'],
            assistant: ['rank-gyobu-no-taifu', 'rank-gyobu-no-sho'],
            secretary: ['rank-gyobu-no-daijo', 'rank-gyobu-no-shojo'],
        },
    },
    {
        id: 'okura',
        label: 'Treasury',
        japanese: '大蔵省',
        meaning: 'Ministry of Treasury',
        appointments: {
            head: ['rank-okura-kyo'],
            assistant: ['rank-okura-no-taifu', 'rank-okura-no-sho'],
            secretary: ['rank-okura-no-daijo', 'rank-okura-no-shojo'],
        },
    },
    {
        id: 'kunai',
        label: 'Imperial Household',
        japanese: '宮内省',
        meaning: 'Ministry of Imperial Household',
        appointments: {
            head: ['rank-kunai-kyo'],
            assistant: ['rank-kunai-no-taifu', 'rank-kunai-no-sho'],
            secretary: ['rank-kunai-no-daijo', 'rank-kunai-no-shojo'],
        },
    },
];

const appointmentById = new Map(
    rankAppointments.map((appointment) => [appointment.id, toReferenceEntry(appointment)]),
);

const resolveAppointments = (ids: string[]) =>
    ids.map((id) => {
        const appointment = appointmentById.get(id);
        if (!appointment) throw new Error(`Unknown ministry appointment: ${id}`);
        return appointment;
    });

export const ministryHierarchies: MinistryHierarchy[] = specs.map((spec) => ({
    id: spec.id,
    label: spec.label,
    japanese: spec.japanese,
    meaning: spec.meaning,
    tiers: [
        {
            id: 'head',
            label: 'Ministry head',
            japanese: '卿',
            appointments: resolveAppointments(spec.appointments.head),
        },
        {
            id: 'assistant',
            label: 'Assistant ministers',
            japanese: '大輔・少輔',
            appointments: resolveAppointments(spec.appointments.assistant),
        },
        {
            id: 'secretary',
            label: 'Secretaries',
            japanese: '大丞・少丞',
            appointments: resolveAppointments(spec.appointments.secretary),
        },
    ],
}));
