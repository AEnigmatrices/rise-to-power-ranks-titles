import type { ReferenceEntry, ReferenceKind } from './types';
import { getEntryRegion } from './regions';

export type TriviaItem = {
    id: string;
    label: string;
    body: string;
    source?: string;
};

const trivia = {
    kanpaku: {
        id: 'kanpaku',
        label: 'Hideyoshi’s route into court society',
        body: 'Toyotomi Hideyoshi became Kanpaku after adoption into the aristocratic Konoe family. A retired Kanpaku was called Taikō, the title so often associated with Hideyoshi.',
        source: 'https://en.wikipedia.org/wiki/Sessh%C5%8D_and_Kampaku',
    },
    council: {
        id: 'council',
        label: 'The Great Council of State',
        body: 'The Daijō-kan stood at the head of the classical civil administration. Its ministers and councillors oversaw the ministries; the separate Jingi-kan handled affairs of Shinto worship.',
        source: 'https://en.wikipedia.org/wiki/Daij%C5%8D-kan',
    },
    'left-minister': {
        id: 'left-minister',
        label: 'Left and right were not equal',
        body: 'The Minister of the Left ranked above the Minister of the Right in the court hierarchy. The paired names therefore describe different positions in an order of precedence, even when the game assigns them the same class.',
        source: 'https://en.wikipedia.org/wiki/Minister_of_the_Left',
    },
    guards: {
        id: 'guards',
        label: 'The guards closest to the emperor',
        body: 'The left and right Konoe guards protected the inner palace and escorted the emperor. Their prestigious captaincies could be held alongside other high court offices.',
        source: 'https://www.japanesewiki.com/title/Konoefu%20(Headquarters%20of%20the%20Inner%20Palace%20Guards).html',
    },
    stables: {
        id: 'stables',
        label: 'More than keeping the imperial stables',
        body: 'The left and right horse bureaus raised and trained horses supplied by the provinces. They managed pastures and provided horses for both military use and court ceremonies.',
        source: 'https://www.japanesewiki.com/history/Meryo%20(Bureau%20of%20Horses).html',
    },
    university: {
        id: 'university',
        label: 'The court had its own university',
        body: 'The Daigaku-ryō educated future officials in subjects including the Chinese classics, law, and mathematics. Its director’s title was Daigaku no Kami, the office behind 大学頭.',
        source: 'https://en.wikipedia.org/wiki/Daigaku-ry%C5%8D',
    },
    music: {
        id: 'music',
        label: 'Music was part of government',
        body: 'The Bureau of Music was established under the Taihō Code in 701. It organized court music and dance, part of the ceremonial world from which the gagaku tradition developed.',
        source: 'https://www2.ntj.jac.go.jp/dglib/contents/learn/edc22/en/history/index.html',
    },
    accounts: {
        id: 'accounts',
        label: 'Two bureaus, different kinds of tax',
        body: 'The Kazue bureau dealt with goods and labor-related taxes, while the Chikara bureau handled the land tax paid in rice. Both belonged to the Ministry of Popular Affairs.',
        source: 'https://en.wikipedia.org/wiki/Ministry_of_Popular_Affairs',
    },
    audit: {
        id: 'audit',
        label: 'Checking a governor’s handover',
        body: 'The Kageyushi examined the transfer of accounts and public property when officials changed posts. Created outside the original ritsuryō offices, it helped check the conduct of provincial administration.',
        source: 'https://www.japanesewiki.com/title/Kageyushi.html',
    },
    'three-suke': {
        id: 'three-suke',
        label: 'One of the “Three Suke” provinces',
        body: 'Kazusa, Hitachi, and Kōzuke became princely provinces whose nominal governor (kami) was an imperial prince who did not take up provincial administration. Their deputy governor, the suke, therefore functioned as the practical head of the provincial government.',
    },
    gon: {
        id: 'gon',
        label: 'What 権 (gon) means',
        body: '権 marks a provisional or additional appointment outside the normal statutory complement of an office. Thus 権大納言 is conventionally rendered “Provisional Great Councillor,” rather than a lower grade of 大納言.',
    },
    kuroudo: {
        id: 'kuroudo',
        label: 'The emperor’s chamberlain office',
        body: 'The Kurōdo-dokoro (蔵人所) was created in 810 under Emperor Saga. It handled confidential documents, transmitted imperial orders, and became an important institution working directly around the emperor.',
    },
    dazaifu: {
        id: 'dazaifu',
        label: 'The “Distant Court” in Kyūshū',
        body: 'Dazaifu was much more than a local office: it was the great western regional headquarters for Kyūshū, handling politics, military affairs, and foreign relations. Contemporary tradition called it the “Distant Court” (遠の朝廷).',
    },
    ministries: {
        id: 'ministries',
        label: 'Part of the Eight Ministries',
        body: 'Nakatsukasa, Shikibu, Jibu, Minbu, Hyōbu, Gyōbu, Ōkura, and Kunai were the Eight Ministries of the ritsuryō state. Many ranks in this table are different grades within those ministry hierarchies.',
    },
    danjo: {
        id: 'danjo',
        label: 'A censor and policing office',
        body: 'The Danjō-dai (弾正台) was a ritsuryō censorial and policing institution charged with correcting official misconduct. Much of its practical policing role was later overtaken by the Kebiishi.',
    },
    genba: {
        id: 'genba',
        label: 'Religion and foreign guests',
        body: 'The Genba-ryō (玄蕃寮) sat under the Ministry of Ceremonial Affairs. Its unusual portfolio included Buddhist temples and clergy as well as the reception and accommodation of foreign envoys.',
    },
    hayato: {
        id: 'hayato',
        label: 'The Hayato office',
        body: 'The Hayato no Tsukasa (隼人司) administered Hayato serving at court, including palace-gate guard duty, ceremonial song and dance, and the production of certain bamboo goods.',
    },
    uneme: {
        id: 'uneme',
        label: 'The Uneme office',
        body: 'The Uneme no Tsukasa (采女司; the game data uses the variant 釆) administered uneme, female attendants drawn from provincial elite families for service in the imperial court.',
    },
    'traditional-reading': {
        id: 'traditional-reading',
        label: 'A traditional office reading',
        body: 'Several court offices use inherited title readings that are not obvious from modern character-by-character pronunciation. That is why this reference lists the office reading separately instead of mechanically romanizing the kanji.',
    },
    shogun: {
        id: 'shogun',
        label: 'The full title behind “Shōgun”',
        body: 'Shōgun is the familiar shortened form of Sei-i Taishōgun (征夷大将軍). The title long predates the Muromachi shogunate, but in medieval warrior government it became the defining title of the shogunate’s head.',
    },
    kanrei: {
        id: 'kanrei',
        label: 'The Muromachi shogun’s chief deputy',
        body: 'The Kanrei was the leading deputy of the Muromachi shogun. The office became especially associated with three houses—Hosokawa, Shiba, and Hatakeyama—remembered collectively as the Three Kanrei houses.',
    },
    'kanto-kanrei': {
        id: 'kanto-kanrei',
        label: 'Deputy of the Kamakura government',
        body: 'Despite the similar name, the Kantō Kanrei belonged to the Kamakura-fu in eastern Japan and served as deputy to the Kamakura Kubō. From Uesugi Noriaki onward the office became closely associated with branches of the Uesugi family.',
    },
    'samurai-dokoro': {
        id: 'samurai-dokoro',
        label: 'One of the shogunate’s central offices',
        body: 'The Samurai-dokoro handled warrior discipline and policing. In the Muromachi period its commissioner (所司) became associated with the “Four Shiki” houses; together with the Three Kanrei houses they formed the celebrated 三管四職 hierarchy.',
    },
    mandokoro: {
        id: 'mandokoro',
        label: 'Finance and household administration',
        body: 'The Muromachi Mandokoro managed shogunate and shogunal-household finance and also handled some civil disputes. Its chief stewardship later became hereditary in the Ise family.',
    },
    monchujo: {
        id: 'monchujo',
        label: 'From lawsuits to records',
        body: 'The Monchūjo began in the Kamakura shogunate as an institution dealing with litigation and documents. Under the Muromachi shogunate its role shifted largely toward custody of documents and records.',
    },
    hikitsuke: {
        id: 'hikitsuke',
        label: 'A specialist appeals court',
        body: 'The Hikitsuke was a specialist judicial body for land and other disputes. Each panel was headed by a Hikitsuke Tōnin, who directed the officials preparing cases and draft judgments.',
    },
    hyojoshu: {
        id: 'hyojoshu',
        label: 'A council inherited from Kamakura',
        body: 'Hyōjōshū were councillors of the shogunate’s deliberative and judicial system. The institution originated in the Kamakura shogunate and continued in Muromachi government, although its practical importance changed over time.',
    },
    tandai: {
        id: 'tandai',
        label: 'A regional shogunate command',
        body: 'Tandai was used for important regional shogunate headquarters and deputies. Muromachi government established such offices for major outlying regions, including Kyūshū and Ōshū.',
    },
    oshoban: {
        id: 'oshoban',
        label: 'Prestige through proximity to the shogun',
        body: 'The Oshōban-shū accompanied the shogun at visits and shared his ceremonial banquets. Because only powerful houses received the privilege, the duty developed into a high-status rank within Muromachi society.',
    },
    kunimochi: {
        id: 'kunimochi',
        label: 'A status group, not simply an office',
        body: 'Kunimochi-shū referred to great lords of province-holding stature. In Muromachi court society the label functioned as a house-status category within the ceremonial ordering of daimyō around the shogun.',
    },
    tozama: {
        id: 'tozama',
        label: '“Tozama” predates the Edo classification',
        body: 'Muromachi Tozama-shū denoted a status category for lords outside the Ashikaga lineage and its original retainers. This usage predates the better-known Edo-period distinction between fudai and tozama daimyō.',
    },
    otomo: {
        id: 'otomo',
        label: 'The shogun’s attendants',
        body: 'The Otomo-shū served in close attendance on the Muromachi shogun, accompanying outings and participating in ceremonial hospitality. Like several other “-shū” titles, it could denote both a duty and a recognized house status.',
    },
} satisfies Record<string, TriviaItem>;

export const officeTrivia: TriviaItem[] = Object.values(trivia);

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
    entry: ReferenceEntry,
    kind: ReferenceKind,
): TriviaItem[] => {
    const keys: (keyof typeof trivia)[] = [];
    const japanese = entry.japanese;

    if (kind === 'rank') {
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
        if (japanese.startsWith('弾正')) keys.push('danjo');
        if (japanese.startsWith('玄蕃')) keys.push('genba');
        if (japanese.startsWith('隼人')) keys.push('hayato');
        if (japanese.startsWith('釆女') || japanese.startsWith('采女')) keys.push('uneme');
        if (traditionalReadingPrefixes.some((prefix) => japanese.startsWith(prefix))) {
            keys.push('traditional-reading');
        }
    } else {
        const exact: Record<string, keyof typeof trivia> = {
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

    return [...regionalTrivia, ...[...new Set(keys)].map((key) => trivia[key])];
};

export type FeaturedTrivia = {
    kicker: string;
    japanese: string;
    title: string;
    body: string;
    source?: string;
};

export const featuredTrivia: FeaturedTrivia[] = [
    {
        kicker: 'Do not confuse these',
        japanese: '守 ≠ 守護',
        title: 'Court provincial title vs. shogunate governor',
        body: 'A rank such as 武蔵守 (Musashi no Kami) is an Imperial Court provincial office/title. 武蔵守護 (Musashi Shugo) belongs to the warrior government. The similar English word “governor” hides two historically different systems.',
    },
    {
        kicker: 'Medieval title culture',
        japanese: '官途・受領',
        title: 'The province in a title may not be the province ruled',
        body: 'By the Muromachi and Sengoku eras, samurai frequently used central court offices and provincial governor titles as marks of status and identity. A warrior called “X no Kami” was not automatically the actual administrator of X province.',
    },
    {
        kicker: 'Read the prefix',
        japanese: '権',
        title: 'Gon means provisional or additional',
        body: 'The 権 prefix marks an extra appointment outside the normal statutory office complement. It is why 権大納言 is “Gon Dainagon,” conventionally translated as Provisional Great Councillor.',
    },
    {
        kicker: 'Ritsuryō hierarchy',
        japanese: '長官・次官・判官・主典',
        title: 'Many offices follow a four-tier pattern',
        body: 'A great many classical offices were organized into four levels often summarized as kami, suke, jō, and sakan. The kanji used for those levels vary from institution to institution, which is one reason the pronunciation column matters.',
    },
    {
        kicker: 'Reading the map',
        japanese: '国',
        title: 'Provinces are not modern prefectures',
        body: 'The names in these appointments refer to historic provinces. One modern prefecture may contain several old provinces, while a province such as Musashi crosses modern boundaries. Modern locations in the region guide are approximate.',
        source: 'https://en.wikipedia.org/wiki/Provinces_of_Japan',
    },
    {
        kicker: 'Same sound, different place',
        japanese: '安房・阿波',
        title: 'There are two provinces called Awa',
        body: '安房 is at the southern tip of the Bōsō Peninsula in Chiba. 阿波 is in Shikoku, corresponding to Tokushima. Checking the kanji prevents a journey to the wrong side of Japan.',
        source: 'https://en.wikipedia.org/wiki/Awa_Province_(Chiba)',
    },
    {
        kicker: 'Alternate regional names',
        japanese: '奥州・羽州',
        title: 'Ōshū and Ushū point north',
        body: 'Ōshū is another name for Mutsu, while Ushū refers to Dewa. These are the northern lands behind the Ōshū Tandai and Ushū Tandai titles; they are not additional provinces.',
        source: 'https://en.wikipedia.org/wiki/Provinces_of_Japan',
    },
    {
        kicker: 'A famous retirement title',
        japanese: '太閤',
        title: 'Why Hideyoshi is called Taikō',
        body: 'Taikō was a title for a retired Kanpaku. It became particularly associated with Toyotomi Hideyoshi, so the word often identifies him in accounts of the late Sengoku period.',
        source: 'https://en.wikipedia.org/wiki/Sessh%C5%8D_and_Kampaku',
    },
];
