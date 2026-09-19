import type { Region } from '../schema/geography';
import { provinces } from './provinces';

export const regions = [
    ...provinces,
    {
        id: 'kanto', name: 'Kantō', japanese: '関東', area: 'Kantō', type: 'Region',
        location: 'Eastern Honshū around the Kantō Plain',
        body: 'A broad region containing several provinces, including Musashi and Sagami. In the Kantō Kanrei title, it refers to the eastern sphere of the Kamakura government.',
        source: 'https://en.wikipedia.org/wiki/Kamakura-fu',
    },
    {
        id: 'kyushu', name: 'Kyūshū', japanese: '九州', area: 'Kyūshū & Islands', type: 'Region',
        location: 'The southwesternmost of Japan’s four main islands',
        body: 'Its name means “nine provinces,” referring to the historic mainland provinces. The island was an important point of contact with continental Asia.',
        source: 'https://en.wikipedia.org/wiki/Kyushu',
    },
    {
        id: 'saigoku', name: 'Saigoku', japanese: '西国', area: 'Western Japan', type: 'Region',
        location: 'Western Japan; the extent varies by period and context',
        body: 'Literally the “western provinces.” This is a broad regional expression, not a single province or a fixed equivalent of a modern prefecture.',
        source: 'https://kotobank.jp/word/%E8%A5%BF%E5%9B%BD-67880',
    },
    {
        id: 'akita-castle', name: 'Akita Castle', japanese: '秋田城', area: 'Tōhoku', type: 'Historic site',
        location: 'Present-day Akita city, in former Dewa Province',
        body: 'An ancient fortified government outpost on the northern frontier. The Akita Jō no Suke title refers to this older institution, not the later Kubota Castle.',
        source: 'https://en.wikipedia.org/wiki/Akita_Castle',
    },
] satisfies Region[];
