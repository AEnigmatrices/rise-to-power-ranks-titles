/** Historical context keyed to the original Japanese source name. */
export interface ItemTrivia {
    text: string;
    sources: Array<{ title: string; url: string }>;
    /** Avoid confusing a named surviving object with a broader tradition or similarly named work. */
    scope: 'identified-object' | 'historical-work' | 'historical-context';
}

import { secondPassTrivia } from './trivia/second-pass';

export const itemTrivia: Record<string, ItemTrivia> = {
    ...secondPassTrivia,
    '童子切安綱': {
        text: 'Tokyo National Museum lists the surviving Dōjigiri Yasutsuna as a National Treasure tachi by Yasutsuna from the Heian period. The game’s English label “Opus Blade” is not the historical name.',
        sources: [{ title: 'Tokyo National Museum — Superb Swords', url: 'https://www.tnm.jp/modules/r_poll/index.php?controller=dtl&lang=en&po_id=34' }],
        scope: 'identified-object',
    },
    '三日月宗近': {
        text: 'The surviving Mikazuki Munechika is a Heian-period tachi by Munechika, dated to the 10th–12th century and designated a National Treasure. Tokyo National Museum exhibited it in 2024.',
        sources: [{ title: 'Tokyo National Museum — Mikazuki Munechika', url: 'https://www.tnm.jp/modules/r_exhibition/index.php?controller=item&id=7274&lang=en' }],
        scope: 'identified-object',
    },
    '九十九髪茄子': {
        text: 'The historic Tsukumo Nasu (付藻茄子) is a Chinese-made tea caddy, not a teapot. Seikadō records its ownership by Ashikaga Yoshimitsu and later Nobunaga, its acquisition by Hideyoshi and its restoration after the Osaka Summer Campaign. The game spells its name differently (九十九髪茄子), so the historical identification remains qualified.',
        sources: [{ title: 'Seikadō Bunko Art Museum — Historic tea caddies', url: 'https://www.seikado.or.jp/exhibition/2021003.html' }],
        scope: 'historical-context',
    },
    '松本茄子': {
        text: 'The historic Matsumoto Nasu is a Chinese-made tea caddy formerly owned by tea master Takeno Jōō and later Oda Nobunaga. It was restored after the Osaka Summer Campaign and presented to Tokugawa Ieyasu.',
        sources: [{ title: 'Seikadō Bunko Art Museum — Historic tea caddies', url: 'https://www.seikado.or.jp/exhibition/2021003.html' }],
        scope: 'identified-object',
    },
    '紹鴎茄子': {
        text: 'Seikadō identifies the historic Matsumoto Nasu also as the Jōō Nasu, after tea master Takeno Jōō. The game lists 松本茄子 and 紹鴎茄子 as separate items; this is a historical naming overlap, not evidence of two distinct surviving objects.',
        sources: [{ title: 'Seikadō Bunko Art Museum — Tea-ware exhibition', url: 'https://www.seikado.or.jp/exhibition/2013001.html' }],
        scope: 'historical-context',
    },
    '曜変稲葉天目': {
        text: 'The Inaba Yōhen Tenmoku is a National Treasure black-glazed tea bowl made at China’s Jian kilns in the Southern Song period (12th–13th century). Its blue iridescent halos are exceptionally vivid. Seikadō states that only three intact examples survive in Japan.',
        sources: [{ title: 'Seikadō Bunko Art Museum — Ceramics collection', url: 'https://www.seikado.or.jp/collection_index/collection05/' }],
        scope: 'identified-object',
    },
    '瀟湘八景図': {
        text: 'The Eight Views of the Xiao and Xiang Rivers became a recurring theme in East Asian landscape painting. Seikadō explains that the theme and ink-painting conventions reached Muromachi Japan through Korea. This describes the theme, not a specific surviving painting.',
        sources: [{ title: 'Seikadō Bunko Art Museum — East Asian landscape painting', url: 'https://www.seikado.or.jp/exhibition/2020002.html' }],
        scope: 'historical-context',
    },
    '破墨山水図': {
        text: 'Sesshū’s famous haboku (splashed-ink) landscape inspired later artists. Kyoto National Museum identifies a landscape by his follower Shūtoku as imitating that work’s style. The game entry does not establish which particular surviving painting it represents.',
        sources: [{ title: 'Kyoto National Museum — Landscape by Shūtoku', url: 'https://knmdb.kyohaku.go.jp/20925.html' }],
        scope: 'historical-context',
    },
    '農業全書': {
        text: 'Nōgyō Zensho is an agricultural treatise by Miyazaki Yasusada, supplemented by Kaibara Rakuken. The National Diet Library catalogs an eleven-volume edition. The work postdates Nobunaga’s lifetime, so its appearance in the game should not be read as historical ownership.',
        sources: [{ title: 'National Diet Library — Nōgyō Zensho', url: 'https://ndlsearch.ndl.go.jp/books/R100000002-I000000478261' }],
        scope: 'historical-work',
    },
    '蘭奢待': {
        text: 'Ranjatai is the celebrated fragrant wood also called Ōjukukō, preserved in the Shōsōin collection. A Shōsōin research bulletin identifies 蘭奢待 as the elegant name of its 黄熟香 specimen.',
        sources: [{ title: 'Shōsōin Research Bulletin — Ranjatai', url: 'https://shosoin.kunaicho.go.jp/api/bulletins/43/pdf/0436212184' }],
        scope: 'identified-object',
    },
};

/** No fabricated fallback for the many items without a sourced historical note. */
export const getItemTrivia = (item: { japanese: string }): ItemTrivia | undefined =>
    itemTrivia[item.japanese];
