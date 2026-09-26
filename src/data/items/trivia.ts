/** Source-linked historical context, keyed by the exact Japanese spelling in the game data.
 * Trivia describes real works or traditions, not the game's invented English labels,
 * and never silently changes game quality, origin or effects.
 */
export interface ItemTrivia {
    text: string;
    sources: Array<{ title: string; url: string }>;
}

const museum = 'https://emuseum.nich.go.jp/result?class=6&langId=en&owner=1&pageCnt=1&webView=';
const tokyoSword = 'https://www.tnm.jp/modules/r_exhibition/index.php?controller=item&id=7274&lang=en';
const doji = 'https://emuseum.nich.go.jp/detail?content_base_id=100186&content_part_id=001&content_pict_id=001&langId=en&webView=';
const seikado = 'https://www.seikado.or.jp/collection_index/collection05/';
const seikadoTea = 'https://www.seikado.or.jp/exhibition/2013001.html';
const ranjatai = 'https://www.takasago.com/en/museum/east/j04.html';
const scienceJapan = 'https://sj.jst.go.jp/news/202510/n1022-01p.html';
const musashi = 'https://ndlsearch.ndl.go.jp/books/R100000002-I000001191046';

export const itemTrivia: Record<string, ItemTrivia> = {
    '童子切安綱': {
        text: 'This National Treasure tachi was made by Yasutsuna of Hōki in the Heian period. The Edo-period Kyōhō Meibutsuchō records the legend that Minamoto no Yorimitsu used it to slay Shuten Dōji; the monster-slaying story is a legend, not a verified event. The sword later passed through the hands of Toyotomi Hideyoshi and Tokugawa Ieyasu.',
        sources: [{ title: 'National Institutes for Cultural Heritage — Dōjigiri Yasutsuna', url: doji }],
    },
    '三日月宗近': {
        text: 'Mikazuki Munechika, literally “Crescent Moon Munechika,” is a National Treasure tachi attributed to Sanjō Munechika of the Heian period. Tokyo National Museum holds the sword and exhibited it in 2024.',
        sources: [{ title: 'Tokyo National Museum — Mikazuki Munechika', url: tokyoSword }],
    },
    '大包平': {
        text: 'Ōkanehira is a surviving National Treasure tachi signed by Kanehira of the Ko-Bizen school, dated to the twelfth century. The historical name is a swordsmith-and-sword name rather than a translation of the game label “Peacebringer.”',
        sources: [{ title: 'National Institutes for Cultural Heritage — sword collection', url: museum }],
    },
    '蘭奢待': {
        text: 'Ranjatai is a celebrated piece of agarwood preserved in the Shōsōin repository. Historical rulers, including Ashikaga Yoshimasa and Oda Nobunaga, obtained small cuttings as marks of prestige. Recent scientific analysis of the wood identified hundreds of chemical components associated with its fragrance.',
        sources: [
            { title: 'Takasago — Fragrant Woods', url: ranjatai },
            { title: 'Science Japan — analysis of Ranjatai', url: scienceJapan },
        ],
    },
    '花散里': {
        text: 'Hanachirusato is a name shared with a chapter and character in The Tale of Genji. It also appears among famous named fragrant woods in Takasago’s collection, illustrating how classical literature supplied names for incense.',
        sources: [{ title: 'Takasago — famous fragrant woods', url: ranjatai }],
    },
    '五輪書': {
        text: 'The Book of Five Rings is the martial-strategy treatise associated with the swordsman Miyamoto Musashi. Its five sections are Earth, Water, Fire, Wind and Void. The game lists this Japanese title under the English label “Shinto Scroll”; that localized label is retained separately.',
        sources: [{ title: 'National Diet Library — The Book of Five Rings', url: musashi }],
    },
    '曜変稲葉天目': {
        text: 'The Inaba Yōhen Tenmoku is a National Treasure black-glazed tea bowl made at China’s Jian kilns in the Southern Song period. Its iridescent spots are especially vivid. According to its museum, only three intact examples of this type survive in Japan; the bowl later belonged to the Inaba family.',
        sources: [{ title: 'Seikadō Bunko Art Museum — ceramics collection', url: seikado }],
    },
    '九十九髪茄子': {
        text: 'The historical Tsukumogami Nasu is a famed small, eggplant-shaped tea caddy rather than a teapot. Seikadō’s exhibition history places it among celebrated tea utensils that passed through the possession of Oda Nobunaga, Toyotomi Hideyoshi and Tokugawa Ieyasu.',
        sources: [{ title: 'Seikadō Bunko Art Museum — tea-ware exhibition', url: seikadoTea }],
    },
    '松本茄子': {
        text: 'The Matsumoto Nasu, also called the Jōō Nasu, is a celebrated tea caddy. Seikadō exhibited it alongside the Tsukumogami Nasu, tracing the prestigious tea-ware culture of the Sengoku and early Edo rulers.',
        sources: [{ title: 'Seikadō Bunko Art Museum — tea-ware exhibition', url: seikadoTea }],
    },
};

/** No fallback trivia: a source-supported entry is better than invented coverage. */
export const getItemTrivia = (item: { japanese: string }): ItemTrivia | undefined =>
    itemTrivia[item.japanese];
