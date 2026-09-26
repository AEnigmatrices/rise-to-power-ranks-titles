import type { ItemTrivia } from '../trivia';

/**
 * Coverage for all 20 source-catalogue entries grouped under Spear.
 * Some are historically naginata, nagamaki, swordsmith schools or religious
 * invocations. Keep the game's classification unchanged; never invent owners
 * or claim a generic game name identifies a particular museum specimen.
 */
export const spearTrivia: Record<string, ItemTrivia> = {
    "蜻蛉切": {
        text: "Tonbogiri is the celebrated spear associated with Honda Tadakatsu, one of Tokugawa Ieyasu’s leading retainers. Its dragonfly name comes from a legend that an insect landing on the blade was cut in two. Sano Art Museum exhibited the surviving spear among weapons connected with Sengoku commanders; the dragonfly episode is tradition, not a documented event.",
        sources: [{ title: "Sano Art Museum — Famous swords and spears of the Sengoku period", url: "https://sanobi.or.jp/exhibition/sword_2022/" }],
        scope: "identified-object",
    },
    "呑取": {
        text: "The source name abbreviates ‘Nominatori,’ a nickname of the surviving Nihongō spear in Fukuoka City Museum. Kuroda retainer Mori Tahei is said to have obtained it from Fukushima Masanori by emptying a large sake cup at a feast. The museum lists a 79.2 cm blade and a total length of 321.5 cm; the drinking wager is a transmitted anecdote that inspired the folk song Kuroda-bushi.",
        sources: [{ title: "Fukuoka City Museum — Kuroda family treasures and Nihongō", url: "https://museum.city.fukuoka.jp/sp/topics/kuroda.html" }],
        scope: "historical-context",
    },
    "皆朱槍": {
        text: "The Japanese name describes a fully vermilion-lacquered spear, rather than an identified surviving weapon. Red-painted spears could carry a family history: the two Goto-family spears preserved by Misato Town have red-lacquered shafts, and local records recount a tradition that a Goto ancestor received a red spear from Nobunaga. Those objects are examples of the custom, not identified with the game entry.",
        sources: [{ title: "Agency for Cultural Affairs — Goto family’s vermilion spears", url: "https://online.bunka.go.jp/heritages/detail/419612" }],
        scope: "historical-context",
    },
    "助光銘薙刀": {
        text: "The name literally refers to a naginata inscribed with the name Sukemitsu. An extant National Treasure by Yoshioka Ichimonji Sukemitsu bears a full dated signature of November 1320, has a 56.7 cm blade, and formerly belonged to the Kaga Maeda family. This is a documented historical counterpart, not proof that the game depicts that particular surviving weapon.",
        sources: [{ title: "Agency for Cultural Affairs — Sukemitsu-inscribed naginata", url: "https://kunishitei.bunka.go.jp/heritage/detail/201/407" }],
        scope: "historical-context",
    },
    "片鎌槍": {
        text: "A katakama-yari has one lateral hook-like blade rather than the two arms of a cross spear. Tokyo National Museum preserves a sixteenth-century example bearing a red inscription saying it was brought by Yōrin-in, daughter of Katō Kiyomasa, when she entered her husband’s household. The game uses the weapon-type name, so no individual owner is assumed.",
        sources: [{ title: "Agency for Cultural Affairs — Sixteenth-century katakama spear", url: "https://online.bunka.go.jp/heritages/detail/523895" }],
        scope: "historical-context",
    },
    "瓶通槍": {
        text: "The spelling 瓶通槍 is retained from the game, but no secure identification of a historical blade, owner or established museum type under that name was found in the researched collections. As context, Japanese spearheads developed diverse shapes during the late Muromachi period, including straight, one-hook and two-hook forms. A specific ‘bottle-piercing’ origin story would be speculative.",
        sources: [{ title: "Nagoya Touken Museum — Historical spear and naginata forms", url: "https://www.meihaku.jp/sword-basic/yari-naginata/" }],
        scope: "historical-context",
    },
    "十文字槍": {
        text: "The cross-shaped spear has a central point with lateral blades on both sides. It became closely associated with Hōzōin-ryū spear fighting: Japan’s Cultural Heritage database describes a nineteenth-century scroll recording 19 postures and techniques for the cross-bladed weapon. Sanada Treasure Museum also holds a surviving cross spear used by the seventh Matsushiro lord, an Edo-period example rather than a confirmed spear of Sanada Nobushige.",
        sources: [{ title: "Agency for Cultural Affairs — Hōzōin cross-spear techniques", url: "https://online.bunka.go.jp/db/heritages/detail/467573" }],
        scope: "historical-context",
    },
    "長光銘薙刀": {
        text: "The historical counterpart to ‘Nagamitsu-inscribed naginata’ is a rare surviving Kamakura-period weapon by Osafune Nagamitsu. Tokyo National Museum has an Important Cultural Property signed Nagamitsu, with a 50.3 cm blade dated to the thirteenth century. Its temper pattern mixes gunome with clove-shaped chōji and shows the smith’s earlier style; no unique match to the game entry is established.",
        sources: [{ title: "National Institutes for Cultural Heritage — Naginata signed Nagamitsu", url: "https://emuseum.nich.go.jp/detail?content_base_id=100469&content_part_id=0&content_pict_id=0&langId=ja&webView=" }],
        scope: "historical-context",
    },
    "笹穂槍": {
        text: "Sasaho-yari takes its name from the broad blade resembling a bamboo leaf. The Agency for Cultural Affairs documents a sixteenth-century example signed by the Mino swordsmith Kanesada, with a 32.5 cm blade, showing the variety of spearhead forms that emerged as spears became common in late medieval infantry warfare. This is type history, not a claim that the game depicts that exact example.",
        sources: [{ title: "Agency for Cultural Affairs — Sixteenth-century sasaho spear", url: "https://online.bunka.go.jp/db/heritages/detail/552570" }],
        scope: "historical-context",
    },
    "来国俊銘薙刀": {
        text: "A rare surviving Kamakura-period naginata signed Rai Kunitoshi is registered as an Important Cultural Property. The Agency for Cultural Affairs describes its modest 40.3 cm blade, shallow curvature and fine temper pattern. Very few Kamakura naginata from the Rai school survive, making the smith’s signed work important evidence; the game does not specify the surviving specimen.",
        sources: [{ title: "Agency for Cultural Affairs — Naginata signed Rai Kunitoshi", url: "https://kunishitei.bunka.go.jp/heritage/detail/201/6547" }],
        scope: "historical-context",
    },
    "景光銘薙刀": {
        text: "Tokyo National Museum preserves an Important Cultural Property naginata signed by Osafune Kagemitsu and dated August 1322. Its surviving blade measures 51.5 cm; the museum describes the restrained curvature and blade shape as characteristic of late-Kamakura naginata. The game supplies the smith’s name but no details tying its item to this exact museum blade.",
        sources: [{ title: "National Institutes for Cultural Heritage — Naginata signed Kagemitsu", url: "https://emuseum.nich.go.jp/detail?content_base_id=100463&content_part_id=0&content_pict_id=0&langId=ja&webView=" }],
        scope: "historical-context",
    },
    "菊地槍": {
        text: "The Kikuchi spear has a single-edged point resembling a short straight sword rather than the usual double-edged spearhead. Nagoya Touken Museum recounts a tradition crediting its improvised form to Kikuchi Takeshige, who allegedly mounted a short blade on a pole in battle; that origin is a tradition. Kyoto National Museum separately catalogs an actual fourteenth-century Kikuchi-style spear with a 32.4 cm blade.",
        sources: [{ title: "Kyoto National Museum — Fourteenth-century Kikuchi spear", url: "https://online.bunka.go.jp/index.php/heritages/detail/533688" }],
        scope: "historical-context",
    },
    "千鳥槍": {
        text: "Chidori-yari is a form of cross spear with its two lateral prongs curving upward, like a bird spreading its wings. A surviving Edo-period example signed by the Chōshū smith Minamoto Haruhisa is described with this ‘chidori’ form and linked to Hōzōin-style spear technique. The game does not supply a maker or owner for its generic entry.",
        sources: [{ title: "Touken World — Chidori-form cross spear", url: "https://www.touken-world.jp/search/45998/" }],
        scope: "historical-context",
    },
    "八幡大菩薩": {
        text: "Hachiman Daibosatsu is the Buddhist title of Hachiman, a protective deity invoked by warriors, not by itself the name of a verifiable spear. Medieval blades do bear the invocation: the Agency for Cultural Affairs records a Kamakura-period tachi by Unshō inscribed with Hachiman Daibosatsu, and an Enbun-era tachi by Kanemitsu has the name carved in its blade. Neither record establishes a specific spear corresponding to the game entry.",
        sources: [{ title: "Agency for Cultural Affairs — Unshō tachi invoking Hachiman", url: "https://kunishitei.bunka.go.jp/heritage/detail/201/6439" }],
        scope: "historical-context",
    },
    "沢瀉槍": {
        text: "Omodaka refers to an arrowhead-leaved water plant whose pointed form also appears in martial heraldry and weapon terminology. The Heibonsha encyclopedia describes an omodaka-form hooked spear with its lateral blades turned backward toward the shaft, in contrast to the upward-curving chidori form. This describes a blade pattern; no specific surviving spear is identified by the game name.",
        sources: [{ title: "Heibonsha World Encyclopedia via Kotobank — Omodaka spear form", url: "https://kotobank.jp/word/%E6%B2%A2%E7%80%89-454808" }],
        scope: "historical-context",
    },
    "片山一文字": {
        text: "The game places Katayama Ichimonji among spears, but an Important Cultural Property at Uesugi Shrine is a Kamakura-period nagamaki attributed to Katayama Ichimonji. The blade is unsigned, with its attribution based on later scholarship. This is a documented historical counterpart under the same school name, not proof that the game item is that surviving weapon.",
        sources: [{ title: "Agency for Cultural Affairs — Nagamaki attributed to Katayama Ichimonji", url: "https://online.bunka.go.jp/db/heritages/detail/183572" }],
        scope: "historical-context",
    },
    "当麻銘薙刀": {
        text: "The game calls this a ‘Taima-inscribed naginata.’ The Taima school was a Yamato smithing tradition associated with Taima-dera in Nara, active from the late thirteenth century. Tokyo National Museum cautions that few signed Taima-school blades survive and that many other works received later attributions. The cited museum sword is background for the school; it is not the game’s naginata.",
        sources: [{ title: "National Institutes for Cultural Heritage — Taima-school blade", url: "https://emuseum.nich.go.jp/detail?content_base_id=101327&content_part_id=0&content_pict_id=0&langId=ja" }],
        scope: "historical-context",
    },
    "法城寺": {
        text: "Hōjōji is the name of a swordsmithing school, not proof of one uniquely identifiable spear. Chiba Prefecture preserves an Important Cultural Property great naginata, unsigned but traditionally attributed to the Hōjōji school of Tajima and dated to the fourteenth-century Nanbokuchō period. Its blade measures 80.6 cm and retains its original-length tang, an unusual survival.",
        sources: [{ title: "Chiba Prefecture — Great naginata attributed to Hōjōji", url: "https://www.pref.chiba.lg.jp/kyouiku/bunkazai/bunkazai/n141-010.html" }],
        scope: "historical-context",
    },
    "黒漆柄薙刀": {
        text: "A black-lacquered shaft was a real form of naginata mounting, not merely a fantasy weapon label. The National Museum of Japanese History catalogs a Muromachi-period naginata with a 59 cm blade and a black-lacquered handle in the Maeda Seison former arms collection. This is a comparable surviving object; the game gives no maker or provenance to identify its particular entry.",
        sources: [{ title: "National Museum of Japanese History — Muromachi black-shafted naginata", url: "https://khirin.rekihaku.ac.jp/pid/nmjh_collection/H-47-13-1.html" }],
        scope: "historical-context",
    },
    "無銘長巻": {
        text: "Mumei means that a blade carries no maker’s signature. Nagamaki are long-bladed polearms related to naginata but mounted for use with a long wrapped grip. The Agency for Cultural Affairs records a Kamakura-period unsigned nagamaki attributed to Katayama Ichimonji, with its mounting preserved at Uesugi Shrine. This illustrates the class and the limits of unsigned attributions; the game entry does not identify that specimen.",
        sources: [{ title: "Agency for Cultural Affairs — Unsigned nagamaki with mounting", url: "https://online.bunka.go.jp/db/heritages/detail/183572" }],
        scope: "historical-context",
    },
};
