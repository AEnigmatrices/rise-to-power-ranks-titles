import type { ItemTrivia } from '../trivia';

/** Regional gunmaking history for the eight Musket entries not covered in earlier passes.
 * The game’s translated names are retained separately; generic regional types
 * are never passed off as the exact surviving museum specimens cited below.
 */
export const musketTrivia: Record<string, ItemTrivia> = {
    "堺筒": {
        text: "Sakai, the merchant and metalworking city near Osaka, became one of Japan’s major centers of matchlock production. The National Museum of Japanese History preserves an Edo-period Sakai gun signed by Kaneda Tatsuzō, with a 99.4 cm barrel, brass fittings and ornamental cherry-blossom rivets. The museum specimen illustrates the regional type; the game’s “Echo Musket” is not identified with that particular gun.",
        sources: [{ title: "National Museum of Japanese History — Sakai matchlock", url: "https://khirin.rekihaku.ac.jp/pid/nmjh_collection/H-54-15.html" }],
        scope: 'historical-context',
    },
    "紀州筒": {
        text: "Kishū was another center of Japanese matchlock manufacture. The National Museum of Japanese History has an Edo-period Kishū gun signed Hayakawa Masamitsu: its barrel measures 67 cm, its bore 1.7 cm, and its sight fittings have different shapes. This is a surviving example of the regional style, not the particular “Flawless Musket” in the game.",
        sources: [{ title: "National Museum of Japanese History — Kishū matchlock", url: "https://khirin.rekihaku.ac.jp/pid/nmjh_collection/H-54-14.html" }],
        scope: 'historical-context',
    },
    "薩摩筒": {
        text: "Satsuma matchlocks were made in the region adjoining Tanegashima, where Portuguese firearms were traditionally introduced in 1543. A surviving Edo-period Satsuma gun catalogued by the National Museum of Japanese History has a 114 cm overall length, an octagonal barrel and brass covers and fittings. The game’s “Lucky Musket” is a regional category rather than an independently identifiable artifact.",
        sources: [{ title: "National Museum of Japanese History — Satsuma matchlock", url: "https://khirin.rekihaku.ac.jp/pid/nmjh_collection/H-54-16.html" }],
        scope: 'historical-context',
    },
    "備前筒": {
        text: "Bizen guns are named after the province corresponding largely to southeastern Okayama. Nagoya Touken Museum describes Bizen matchlocks as often having a rounded barrel, an external iron mainspring, a narrowing darkened stock and no trigger guard. Despite the game’s English label “Imported Musket,” the Japanese name denotes a domestic regional type; an individual game gun cannot be identified.",
        sources: [{ title: "Nagoya Touken Museum — Regional matchlock features", url: "https://www.meihaku.jp/arquebus-basic/arquebus-artistic-value/" }],
        scope: 'historical-context',
    },
    "日野筒": {
        text: "Hino in Ōmi was a regional gunmaking center distinct from nearby Kunitomo. Nagoya Touken Museum lists surviving Hino matchlocks with barrel inscriptions identifying their Hino makers, alongside examples of Sakai and Kunitomo work. The game gives no maker’s signature for its “Polished Musket,” so this is background on the historical type, not provenance for a specific gun.",
        sources: [{ title: "Nagoya Touken Museum — Firearms in the collection", url: "https://www.meihaku.jp/exhibit/possession/" }],
        scope: 'historical-context',
    },
    "仙台筒": {
        text: "Regional matchlocks were not always made by smiths originally from the region. The National Museum of Japanese History catalogues an Edo-period “Sendai–Kunitomo” gun signed by a Kunitomo-family smith resident in Nihonmatsu. Its stock bears decorative brass fittings depicting a gourd, ginger and pufferfish. The game’s “Arquebus” identifies a Sendai type but no particular smith or weapon.",
        sources: [{ title: "National Museum of Japanese History — Sendai–Kunitomo gun", url: "https://khirin.rekihaku.ac.jp/pid/nmjh_collection/H-54-6.html" }],
        scope: 'historical-context',
    },
    "阿波筒": {
        text: "Awa, in today’s Tokushima Prefecture, became a substantial regional matchlock-making center. Nagoya Touken Museum describes an Awa gun signed by Inoue Michimasa with a distinctive six-pointed star-shaped washer on the screw fixing the barrel to its stock. The same museum explains that the Tokushima domain favored a common bore across guns of different lengths to simplify ammunition supply; this describes the regional tradition, not one uniquely identified game item.",
        sources: [{ title: "Nagoya Touken Museum — Types of Japanese matchlocks", url: "https://www.meihaku.jp/arquebus-basic/arquebus-type/" }],
        scope: 'historical-context',
    },
    "米沢筒": {
        text: "Yonezawa guns are associated with the region now in Yamagata Prefecture. Nagoya Touken Museum distinguishes the style by a large iron trigger guard, a downward-curving buttstock, and metal bands and screws securing the barrel to its wooden stock. These are documented features of a regional type; the source gives no individual provenance for the game’s “Simple Musket.”",
        sources: [{ title: "Nagoya Touken Museum — Regional matchlock features", url: "https://www.meihaku.jp/arquebus-basic/arquebus-artistic-value/" }],
        scope: 'historical-context',
    },
};
