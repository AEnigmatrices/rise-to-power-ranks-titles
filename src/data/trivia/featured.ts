import type { FeaturedTrivia } from '../schema/trivia';

export const featuredTrivia: FeaturedTrivia[] = [
    {
        kicker: 'Game term vs. historical system',
        japanese: '位階 ≠ 官職',
        title: '“Rank” is the game label, not a single historical category',
        body: 'Historically, 位階 (court rank) and 官職 (court office) were distinct. The ritsuryō state linked offices to expected ranks through 官位相当, but the two were not identical—and by the Sengoku period a warrior’s personal rank could diverge from the nominal rank associated with an office. Rise to Power abstracts these into one Rank progression.',
        source: 'https://ndlsearch.ndl.go.jp/rnavi/humanities/kansyoku',
    },
    {
        kicker: 'Anime recognition hook',
        japanese: '中務少輔 → 中務大輔 · 兵部少輔',
        title: 'Drifters uses real court offices—but changes Toyohisa’s',
        body: 'The Sekigahara opening uses real court-office language, not personal court ranks. Ii Naomasa’s 兵部少輔 is attested in contemporary documents, while Shimazu Toyohisa is historically recorded as 中務大輔 rather than the anime’s 中務少輔. Toyohisa’s office was the more senior office in the classical hierarchy, but that does not by itself mean Toyohisa personally held the higher 位階.',
    },
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
