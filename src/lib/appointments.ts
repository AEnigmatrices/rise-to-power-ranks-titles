import type {
    Appointment,
    AppointmentCategory,
    AppointmentGrade,
    AppointmentKind,
} from '../data/schema/appointments';

export type ReferenceKind = AppointmentKind;

export type ReferenceEntry = Appointment & {
    className: string;
    effect: string;
    bonus: number;
    categoryLabel: string;
};

const categoryLabels: Record<AppointmentCategory, string> = {
    'imperial-court': 'Imperial Court',
    'provincial-office': 'Provincial Office',
    'shogunate-office': 'Shogunate Office',
    shugo: 'Shugo',
};

const ordinal = (value: AppointmentGrade) => {
    const mod100 = value % 100;
    if (mod100 >= 11 && mod100 <= 13) return `${value}th`;

    switch (value % 10) {
        case 1:
            return `${value}st`;
        case 2:
            return `${value}nd`;
        case 3:
            return `${value}rd`;
        default:
            return `${value}th`;
    }
};

export const getAppointmentCategoryLabel = (category: AppointmentCategory) =>
    categoryLabels[category];

export const getAppointmentBonus = (entry: Pick<Appointment, 'grade'>) => 13 - entry.grade;

export const getAppointmentStat = (entry: Pick<Appointment, 'kind'>) =>
    entry.kind === 'rank' ? 'Politics' : 'Leadership';

export const getAppointmentClassName = (entry: Pick<Appointment, 'grade' | 'tier'>) =>
    `${entry.tier === 'upper' ? 'Upper' : 'Lower'} ${ordinal(entry.grade)} Class`;

export const getAppointmentEffect = (entry: Pick<Appointment, 'kind' | 'grade'>) =>
    `${getAppointmentStat(entry)} + ${getAppointmentBonus(entry)}`;

export const toReferenceEntry = (entry: Appointment): ReferenceEntry => ({
    ...entry,
    className: getAppointmentClassName(entry),
    effect: getAppointmentEffect(entry),
    bonus: getAppointmentBonus(entry),
    categoryLabel: getAppointmentCategoryLabel(entry.category),
});

export const toReferenceEntries = (entries: Appointment[]) => entries.map(toReferenceEntry);

export const totalRecords = (entries: Array<Pick<Appointment, 'count'>>) =>
    entries.reduce((total, entry) => total + entry.count, 0);
