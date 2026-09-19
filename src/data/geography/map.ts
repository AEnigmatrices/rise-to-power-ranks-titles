import type { MapArea } from '../schema/geography';

/** Modern-prefecture groupings used only as a broad orientation/filter aid. */
export const mapAreas = [
    { id: 'Kinai & Kansai', label: 'Kinai & Kansai', prefectures: [25, 26, 27, 28, 29, 30] },
    { id: 'Tōkai & Central Japan', label: 'Tōkai & Central', prefectures: [19, 20, 21, 22, 23, 24] },
    { id: 'Kantō', label: 'Kantō', prefectures: [8, 9, 10, 11, 12, 13, 14] },
    { id: 'Tōhoku', label: 'Tōhoku', prefectures: [2, 3, 4, 5, 6, 7] },
    { id: 'Hokuriku', label: 'Hokuriku', prefectures: [15, 16, 17, 18] },
    { id: 'Chūgoku', label: 'Chūgoku', prefectures: [31, 32, 33, 34, 35] },
    { id: 'Shikoku', label: 'Shikoku', prefectures: [36, 37, 38, 39] },
    { id: 'Kyūshū & Islands', label: 'Kyūshū & Islands', prefectures: [40, 41, 42, 43, 44, 45, 46] },
] satisfies MapArea[];
