import type { ItemTrivia } from '../trivia';

/**
 * Second research pass. Keys are the exact Japanese names in the supplied game
 * catalogue. Historical-context notes do not assert that a generic game entry
 * identifies a particular museum object.
 */
export const secondPassTrivia: Record<string, ItemTrivia> = {
    // Arms: named swords, firearm-making traditions and historically documented armor.
    '大般若長光': {
        text: 'The surviving Daihannya Nagamitsu is a thirteenth-century National Treasure tachi by Osafune Nagamitsu. Its name plays on a reported price of 600 kan and the 600 volumes of the Great Perfection of Wisdom Sutra. The museum recounts its passage from the Ashikaga shoguns to Nobunaga, then Ieyasu and Okudaira Nobumasa.',
        sources: [{ title: 'National Institutes for Cultural Heritage — Daihannya Nagamitsu', url: 'https://emuseum.nich.go.jp/detail?content_base_id=100184&content_part_id=001&content_pict_id=001&langId=en&webView=null' }],
        scope: 'identified-object',
    },
    '日光一文字': {
        text: 'This National Treasure tachi of the Ichimonji school is preserved at Fukuoka City Museum. Kuroda family records say Hōjō Ujinao presented it to Kuroda Yoshitaka (Josui) in thanks for his role in the 1590 Odawara surrender negotiations. The museum also discusses a later document attributing the gift to Hideyoshi, but regards that document as a subsequent fabrication.',
        sources: [{ title: 'Fukuoka City Museum — Nikkō Ichimonji', url: 'https://museum.city.fukuoka.jp/archives/collection/katana/katana02.html' }],
        scope: 'identified-object',
    },
    'へし切長谷部': {
        text: 'Heshikiri Hasebe is a National Treasure sword by Hasebe Kunishige, preserved by Fukuoka City Museum. Kuroda family accounts explain its name through a story in which Nobunaga pressed the blade through a servant hiding under a shelf; that episode is a recorded legend, not a verified event. Accounts of how the sword reached the Kuroda family also differ.',
        sources: [{ title: 'Fukuoka City Museum — Heshikiri Hasebe', url: 'https://museum.city.fukuoka.jp/archives/collection/katana/katana01.html' }],
        scope: 'identified-object',
    },
    '種子島筒': {
        text: 'Tanegashima takes its name from the island where Portuguese visitors introduced firearms to Japan in the sixteenth century. The island’s Tanegashima Kaihatsu Sōgō Center displays a firearm described as the first made in Japan. This is the history of the firearm type, not an identification of the game entry with that specimen.',
        sources: [{ title: 'Japan National Tourism Organization — Tanegashima Island', url: 'https://www.japan.travel/en/spot/595/' }],
        scope: 'historical-context',
    },
    '国友筒': {
        text: 'Kunitomo became an established Japanese gunsmithing name. The Metropolitan Museum of Art holds an eighteenth-century matchlock signed by Kunitomo Katsumasa, demonstrating the tradition’s continuation into the Edo period. It is not identified as the particular musket represented in the game.',
        sources: [{ title: 'The Metropolitan Museum of Art — Matchlock by Kunitomo Katsumasa', url: 'https://www.metmuseum.org/art/collection/search/22491' }],
        scope: 'historical-context',
    },
    '一の谷兜': {
        text: 'Fukuoka City Museum lists a silver-leaf Ichinotani-shaped helmet with black-laced armor among the Kuroda family’s Important Cultural Properties. The game uses the helmet-shape name generically; its entry is not established as this particular surviving suit.',
        sources: [{ title: 'Fukuoka City Museum — Kuroda family treasures', url: 'https://museum.city.fukuoka.jp/archives/leaflet/012/index02.html' }],
        scope: 'historical-context',
    },
    '大水牛脇立兜': {
        text: 'The large water-buffalo-horn helmet was a recognizable form of Sengoku headgear. Fukuoka City Museum records an Important Cultural Property example among the Kuroda family’s surviving equipment. The game name denotes a helmet type rather than proving an exact match to that example.',
        sources: [{ title: 'Fukuoka City Museum — Kuroda family treasures', url: 'https://museum.city.fukuoka.jp/archives/leaflet/012/index02.html' }],
        scope: 'historical-context',
    },
    '南蛮胴具足': {
        text: 'Nanban-dō armor reflects the adaptation of European-style iron-plate cuirasses in Japan after firearms arrived with Portuguese traders. The British Museum explains that Japanese armor makers copied these breastplates for protection against bullets. The game entry describes the style, not a specific museum suit.',
        sources: [{ title: 'British Museum — Samurai exhibition guide', url: 'https://www.britishmuseum.org/exhibitions/samurai/samurai-large-print-guide' }],
        scope: 'historical-context',
    },

    // Art and food: subject matter and the transmission of imported traditions.
    '布袋図': {
        text: 'Hotei, known as Budai in China, was a wandering monk recognizable by his large cloth sack. He became a favorite subject of Zen ink painting and was associated with Maitreya, the future Buddha. The Met holds a fifteenth-century Japanese example; the game title names the subject, not that specific painting.',
        sources: [{ title: 'The Metropolitan Museum of Art — Hōtei Pointing to the Moon', url: 'https://www.metmuseum.org/art/collection/search/45245' }],
        scope: 'historical-context',
    },
    '観音図': {
        text: 'Kannon is the bodhisattva of compassion (Avalokiteshvara). White-robed Kannon paintings in Japan drew on Chinese models that Zen monk-painters established during the Muromachi period. This is context for the painting subject, not an attribution of the game entry to a surviving work.',
        sources: [{ title: 'The Metropolitan Museum of Art — White-Robed Kannon', url: 'https://www.metmuseum.org/art/collection/search/754545' }],
        scope: 'historical-context',
    },
    'カステラ': {
        text: 'Castella is a Portuguese-derived sponge cake introduced to Nagasaki in the sixteenth century. Japan’s national tourism organization traces its name to pão de Castela and explains how the imported confection became a Nagasaki specialty.',
        sources: [{ title: 'Japan National Tourism Organization — Castella history', url: 'https://www.japan.travel/en/sg/story/fukusayas-famous-castella-cake/' }],
        scope: 'historical-context',
    },

    // Books: historical texts and, where relevant, their publication after Nobunaga.
    '吾妻鏡': {
        text: 'Azuma Kagami is a chronological account of the Kamakura shogunate covering 1180–1266. The National Diet Library records that Ieyasu prized the work and had it printed in movable type in 1605. Fukuoka City Museum also records that Hōjō Ujinao presented a copy to Kuroda Yoshitaka during the 1590 Odawara negotiations.',
        sources: [
            { title: 'National Diet Library — Early printed Azuma Kagami', url: 'https://ndlsearch.ndl.go.jp/books/R100000002-I000007275311' },
            { title: 'Fukuoka City Museum — Kuroda Yoshitaka and Odawara', url: 'https://museum.city.fukuoka.jp/sp/exhibition/566/' },
        ],
        scope: 'historical-work',
    },
    '日葡辞書': {
        text: 'The Japanese–Portuguese dictionary was produced by Jesuit missionaries in Nagasaki: its main text appeared in 1603 and its supplement in 1604. The National Diet Library catalogs a facsimile of a surviving Bodleian Library copy. It postdates Nobunaga’s death in 1582.',
        sources: [{ title: 'National Diet Library — Japanese–Portuguese dictionary facsimile', url: 'https://ndlsearch.ndl.go.jp/en/books/R100000136-I1970023484894285568' }],
        scope: 'historical-work',
    },
    '日本大文典': {
        text: 'The Japanese grammar known as Arte da Lingoa de Iapam was compiled by Jesuit João Rodrigues and published in the Nagasaki mission-press period, 1604–1608. Like the Japanese–Portuguese dictionary, it is a real early modern work but was published after Nobunaga’s lifetime.',
        sources: [{ title: 'National Diet Library — Early European works on Japanese', url: 'https://dl.ndl.go.jp/view/prepareDownload?contentNo=1&itemId=info%3Andljp%2Fpid%2F3051586' }],
        scope: 'historical-work',
    },

    // Tea utensils: distinguish surviving named objects from altered game labels.
    '青磁馬蝗絆': {
        text: 'Bakōhan is a thirteenth-century Chinese Longquan celadon bowl and an Important Cultural Property. According to a tradition recorded by Tokyo National Museum, Ashikaga Yoshimasa sent the cracked bowl to China for a replacement, but it was returned repaired with metal staples; the staples inspired its name, likened to locusts.',
        sources: [{ title: 'Tokyo National Museum — Celadon bowl Bakōhan', url: 'https://www.tnm.jp/modules/r_collection/index.php?colid=TG2354&controller=dtl' }],
        scope: 'identified-object',
    },
    '喜左衛門井戸': {
        text: 'The surviving Kizaemon Ido is a sixteenth-century Korean-made Ōido tea bowl designated a National Treasure. Tokyo National Museum listed it as belonging to Kōhō-an in Kyoto. Its presence among the game’s tea utensils reflects the prestige of Korean tea bowls in Japanese tea culture.',
        sources: [{ title: 'Tokyo National Museum — National Treasures exhibition list', url: 'https://www.tnm.jp/modules/r_exhibition/index.php?controller=item&id=3890&lang=ja' }],
        scope: 'identified-object',
    },
    '絵志野卯花墻': {
        text: 'The surviving Shino tea bowl named Unohanagaki is a National Treasure made in Mino in the sixteenth–seventeenth centuries and held by Mitsui Memorial Museum. Its iron-painted lattice pattern evokes a hedge of deutzia flowers. The game adds 絵 to the historical object’s usual name, so this is a qualified historical counterpart.',
        sources: [{ title: 'Tokyo National Museum — The Art of the Tea Ceremony', url: 'https://www.tnm.jp/modules/r_free_page/index.php?id=1828&lang=ja' }],
        scope: 'historical-context',
    },
    '初花肩衝': {
        text: 'The historic Hatsuhana shoulder-shaped tea caddy is an Important Cultural Property made in China in the Southern Song–Yuan period (thirteenth–fourteenth centuries). Tokyo National Museum listed it in the Tokugawa Memorial Foundation collection for its major tea-ceremony exhibition.',
        sources: [{ title: 'Tokyo National Museum — The Art of the Tea Ceremony', url: 'https://www.tnm.jp/modules/r_free_page/index.php?id=1828&lang=ja' }],
        scope: 'identified-object',
    },
    '松花': {
        text: 'The historic Shōka is a Chinese tea-leaf storage jar (chatsubo), rather than a small tea caddy. Tokyo National Museum identifies the surviving jar as a thirteenth–fourteenth-century Southern Song–Yuan work and an Important Cultural Property in the Tokugawa Art Museum collection.',
        sources: [{ title: 'Tokyo National Museum — The Art of the Tea Ceremony', url: 'https://www.tnm.jp/modules/r_free_page/index.php?id=1828&lang=ja' }],
        scope: 'identified-object',
    },
};
