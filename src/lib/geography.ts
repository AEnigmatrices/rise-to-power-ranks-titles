import { provinces, regions } from '../data/geography';
import type { Appointment } from '../data/schema/appointments';
import type { Region } from '../data/schema/geography';

const provincesByJapanese = new Map(provinces.map((region) => [region.japanese, region]));
const regionsById = new Map(regions.map((region) => [region.id, region]));

const regionalOffices: Record<string, string> = {
    関東管領: 'kanto',
    九州探題: 'kyushu',
    西国探題: 'saigoku',
    奥州探題: 'mutsu',
    羽州探題: 'dewa',
    秋田城介: 'akita-castle',
};

/** Resolve the historical place associated with an appointment, when one exists. */
export const getEntryRegion = (
    entry: Pick<Appointment, 'category' | 'japanese'>,
): Region | undefined => {
    if (entry.category === 'provincial-office' || entry.category === 'shugo') {
        return provincesByJapanese.get(entry.japanese.replace(/(守護|守|介)$/, ''));
    }

    return regionsById.get(regionalOffices[entry.japanese]);
};
