import { imperialCourtRanks, provincialRanks } from './ranks';
import { shogunateTitles, shugoTitles } from './titles';

const bySourceOrder = <T extends { sourceOrder: number }>(a: T, b: T) =>
    a.sourceOrder - b.sourceOrder;

/** All Imperial Court appointments, restored to original source order. */
export const rankAppointments = [...imperialCourtRanks, ...provincialRanks].sort(bySourceOrder);

/** All shogunate appointments, restored to original source order. */
export const titleAppointments = [...shogunateTitles, ...shugoTitles].sort(bySourceOrder);

export const appointments = [...rankAppointments, ...titleAppointments];

export { imperialCourtRanks, provincialRanks, shogunateTitles, shugoTitles };
