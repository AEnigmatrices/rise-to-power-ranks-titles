import { provincialRanks, shugoTitles } from './appointments';
import { provinces } from './geography';
import type { Region } from './schema/geography';
import { getEntryRegion } from '../lib/geography';
import { toReferenceEntry, type ReferenceEntry } from '../lib/appointments';

export type ProvinceOfficePair = {
    province: Pick<Region, 'id' | 'name' | 'japanese' | 'area' | 'location'>;
    court: ReferenceEntry;
    shugo: ReferenceEntry | null;
};

const courtByProvince = new Map(
    provincialRanks.flatMap((appointment) => {
        const province = getEntryRegion(appointment);
        return province ? [[province.id, toReferenceEntry(appointment)] as const] : [];
    }),
);

const shugoByProvince = new Map(
    shugoTitles.flatMap((appointment) => {
        const province = getEntryRegion(appointment);
        return province ? [[province.id, toReferenceEntry(appointment)] as const] : [];
    }),
);

export const provinceOfficePairs: ProvinceOfficePair[] = provinces.map((province) => {
    const court = courtByProvince.get(province.id);
    if (!court) throw new Error(`Province ${province.id} has no provincial Court appointment.`);

    return {
        province: {
            id: province.id,
            name: province.name,
            japanese: province.japanese,
            area: province.area,
            location: province.location,
        },
        court,
        shugo: shugoByProvince.get(province.id) ?? null,
    };
});
