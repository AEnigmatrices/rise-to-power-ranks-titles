import type { Appointment } from '../data/schema/appointments';
import type { TriviaItem } from '../data/schema/trivia';
import { triviaById } from '../data/trivia/items';
import { getEntryRegion } from './geography';

const ministryPrefixes = ['中務', '式部', '治部', '民部', '兵部', '刑部', '大蔵', '宮内'];
const traditionalReadingPrefixes = [
    '雅楽',
    '主計',
    '主税',
    '内匠',
    '主殿',
    '掃部',
    '正親',
];

/** Return only trivia that adds context beyond the table's literal translation. */
export const getEntryTrivia = (
    entry: Appointment,
): TriviaItem[] => {
    const keys: (keyof typeof triviaById)[] = [];
    const japanese = entry.japanese;

    if (entry.kind === 'rank') {
        if (japanese === '関白') keys.push('kanpaku');
        if (['太政大臣', '左大臣', '右大臣', '内大臣', '大納言', '権大納言', '中納言', '権中納言', '参議'].includes(japanese)) keys.push('council');
        if (['左大臣', '右大臣'].includes(japanese)) keys.push('left-minister');
        if (/^[左右]近衛|^[左右]近将/.test(japanese)) keys.push('guards');
        if (/^[左右]馬/.test(japanese)) keys.push('stables');
        if (japanese.startsWith('大学')) keys.push('university');
        if (japanese.startsWith('雅楽')) keys.push('music');
        if (/^主計|^主税/.test(japanese)) keys.push('accounts');
        if (japanese.startsWith('勘解由')) keys.push('audit');
        if (['上総介', '常陸介', '上野介'].includes(japanese)) keys.push('three-suke');
        if (japanese.includes('権')) keys.push('gon');
        if (japanese.includes('蔵人')) keys.push('kuroudo');
        if (japanese.startsWith('太宰')) keys.push('dazaifu');
        if (ministryPrefixes.some((prefix) => japanese.startsWith(prefix))) keys.push('ministries');
        if (['中務少輔', '中務大輔'].includes(japanese)) keys.push('drifters-toyohisa');
        if (japanese === '兵部少輔') keys.push('drifters-naomasa');
        if (japanese.startsWith('弾正')) keys.push('danjo');
        if (japanese.startsWith('玄蕃')) keys.push('genba');
        if (japanese.startsWith('隼人')) keys.push('hayato');
        if (japanese.startsWith('釆女') || japanese.startsWith('采女')) keys.push('uneme');
        if (traditionalReadingPrefixes.some((prefix) => japanese.startsWith(prefix))) {
            keys.push('traditional-reading');
        }
    } else {
        const exact: Record<string, keyof typeof triviaById> = {
            '征夷大将軍': 'shogun',
            '管領': 'kanrei',
            '関東管領': 'kanto-kanrei',
            '侍所所司': 'samurai-dokoro',
            '政所執事': 'mandokoro',
            '問注所執事': 'monchujo',
            '引付頭人': 'hikitsuke',
            '評定衆': 'hyojoshu',
            '御相伴衆': 'oshoban',
            '国持衆': 'kunimochi',
            '外様衆': 'tozama',
            '御供衆': 'otomo',
        };

        const exactKey = exact[japanese];
        if (exactKey) keys.push(exactKey);
        if (japanese.endsWith('探題')) keys.push('tandai');
    }

    const region = getEntryRegion(entry);
    const regionalTrivia: TriviaItem[] = region ? [{
        id: `region-${region.id}`,
        label: `${region.name} · ${region.type}`,
        body: `${region.location}. ${region.body}`,
        source: region.source,
    }] : [];

    return [...regionalTrivia, ...[...new Set(keys)].map((key) => triviaById[key])];
};
