import type { ItemTrivia } from '../trivia';

/**
 * Complete the 20-entry Sword category without inventing connections to
 * surviving objects. Five existing notes live in earlier trivia passes;
 * these fifteen additions are keyed to the exact Japanese catalogue text.
 * Every legend is identified as tradition rather than documented fact.
 */
export const swordTrivia: Record<string, ItemTrivia> = {
    "大包平": {
        text: "The surviving Ōkanehira is a twelfth-century National Treasure tachi signed by Kanehira of the Ko-Bizen school. Its unusually large blade and five-character signature distinguish it from many other Kanehira works. It was a treasured sword of Ikeda Terumasa and remained in the Okayama Ikeda family for generations.",
        sources: [{ title: "National Institutes for Cultural Heritage — Ōkanehira", url: "https://emuseum.nich.go.jp/detail?content_base_id=100187&content_part_id=0&content_pict_id=0&langId=ja" }],
        scope: "identified-object",
    },
    "数珠丸恒次": {
        text: "The surviving Juzumaru Tsunetsugu is an Important Cultural Property at Honkōji Temple in Amagasaki. The city recounts the tradition that a devotee gave it to Nichiren, who hung prayer beads on the blade, giving it the name ‘Rosary Sword’. It disappeared from Minobusan and was rediscovered around 1919 before being donated to Honkōji; the Nichiren association is a temple tradition.",
        sources: [{ title: "Amagasaki City — Juzumaru Tsunetsugu", url: "https://www.city.amagasaki.hyogo.jp/manabu/bunkazai_0/1028308/1028310/1028861.html" }],
        scope: "identified-object",
    },
    "大典太光世": {
        text: "Ōtenta Mitsuyo is a National Treasure tachi attributed to the late-Heian-period swordsmith Mitsuyo of Miike in Chikugo. Ishikawa Prefectural Museum of Art explains that the Maeda family held both a longer ‘Ōtenta’ and a shorter ‘Kotenta’; the surviving Ōtenta is now in the Maeda Ikutokukai collection. It is one of the traditional Five Great Swords (Tenka Goken).",
        sources: [{ title: "Ishikawa Prefectural Museum of Art — Ōtenta Mitsuyo", url: "https://www.ishibi.pref.ishikawa.jp/exhibition/exhibition-16305/" }],
        scope: "identified-object",
    },
    "鬼丸国綱": {
        text: "Onimaru Kunitsuna is traditionally counted among the Five Great Swords. Sword-museum accounts identify it as a tachi by Awataguchi Kunitsuna kept among the Imperial Household’s privately held treasures rather than a designated National Treasure. The name ‘Demon Sword’ comes from a story about a demon haunting Hōjō Tokiyori’s dreams; that supernatural episode is legend.",
        sources: [{ title: "Nagoya Touken Museum — Onimaru Kunitsuna", url: "https://www.touken-collection-nagoya.jp/touken-introduction/onimarukunitsuna-inherited/" }],
        scope: "historical-context",
    },
    "宗三左文字": {
        text: "The surviving sword is also known as Yoshimoto Samonji. The Agency for Cultural Affairs records it as a blade formerly held by Miyoshi Masanaga, Takeda Nobutora and Imagawa Yoshimoto; Nobunaga acquired it after Yoshimoto’s death at Okehazama in 1560, shortened it and added a gold-inlaid inscription recording the victory. It is now an Important Cultural Property of Kenkun Shrine.",
        sources: [{ title: "Agency for Cultural Affairs — Yoshimoto/Sōza Samonji", url: "https://kunishitei.bunka.go.jp/heritage/detail/201/6248" }],
        scope: "identified-object",
    },
    "骨喰吉光": {
        text: "The historical counterpart is the Important Cultural Property Honebami Tōshirō, a naginata blade reshaped as a long wakizashi and traditionally attributed to Awataguchi Yoshimitsu. Kyoto National Museum explains that its ‘Bone Devourer’ nickname refers to the legend that a mere feigned cut could break an opponent’s bones. The surviving blade belongs to Toyokuni Shrine; the game spells the name 骨喰吉光 rather than the customary 骨喰藤四郎.",
        sources: [{ title: "Kyoto National Museum — Celebrated swords exhibition", url: "https://www.kyohaku.go.jp/old/jp/theme/floor1_1/f1_1_koremade/token_2015.html" }],
        scope: "historical-context",
    },
    "鬼切安綱": {
        text: "The game name points toward the sword also known as Onikiri or Higekiri, traditionally associated with the Minamoto clan and now held by Kitano Tenmangū. Kyoto National Museum displayed it alongside Higekiri’s legendary companion Hizamaru. Stories of the blade cutting down demons are part of its literary tradition, not established historical events; the game’s attribution to Yasutsuna is not identical to the shrine sword’s present inscription.",
        sources: [{ title: "Kyoto National Museum — Famous swords from Kyoto temples and shrines", url: "https://www.kyohaku.go.jp/old/jp/theme/floor1_1/f1_1_koremade/token_2015.html" }],
        scope: "historical-context",
    },
    "妙法蓮華経": {
        text: "The Japanese text is the title of the Lotus Sutra, not a uniquely identifiable surviving sword. The National Diet Library catalogs a Kamakura-period edition in eight scrolls containing its 28 chapters, translated into Chinese by Kumārajīva. The game places this text among swords, but the source name alone does not justify attaching a particular blade or legendary owner.",
        sources: [{ title: "National Diet Library — Eight-scroll Lotus Sutra", url: "https://ndlsearch.ndl.go.jp/books/R100000002-I000007610851" }],
        scope: "historical-context",
    },
    "日光助真": {
        text: "The surviving Nikkō Sukezane is a National Treasure tachi signed Sukezane and held by Nikkō Tōshōgū. The Agency for Cultural Affairs attributes it to a Fukuoka Ichimonji swordsmith whose large-scale work helped shape the early Sōshū tradition. Its accompanying black-lacquered mounting is a historical example of the late-Muromachi-to-Momoyama ‘Sukezane’ mounting style. It is distinct from another National Treasure by Sukezane in Tokyo National Museum.",
        sources: [{ title: "Agency for Cultural Affairs — Nikkō Sukezane", url: "https://kunishitei.bunka.go.jp/heritage/detail/201/290" }],
        scope: "identified-object",
    },
    "熊野三所権現": {
        text: "A real National Treasure tachi by Osafune Nagamitsu bears the unusual inscription ‘Kumano Sansho Gongen’ alongside the smith’s name. The Agency for Cultural Affairs interprets the inscription as evidence of Nagamitsu’s devotion to the Kumano deities; its blade is 75 cm long and dates to the Kamakura period. The game lists only the divine-name portion, so this is a probable historical counterpart rather than proof of an exact item match.",
        sources: [{ title: "Agency for Cultural Affairs — Kumano Sansho Gongen Nagamitsu", url: "https://kunishitei.bunka.go.jp/heritage/detail/201/355" }],
        scope: "historical-context",
    },
    "妙見大菩薩": {
        text: "A National Treasure tachi by Yoshioka Ichimonji Sukemitsu, dated March 1322, carries invocations to both Hachiman Daibosatsu and Myōken Daibosatsu on its tang. The inscription is historical evidence of protective religious invocations on medieval swords. The game retains just ‘Myōken Daibosatsu’ as an item name; that abbreviated label does not independently identify the full signed blade.",
        sources: [{ title: "Agency for Cultural Affairs — Sukemitsu tachi with Hachiman and Myōken inscriptions", url: "https://kunishitei.bunka.go.jp/heritage/detail/201/393" }],
        scope: "historical-context",
    },
    "鞍切景秀": {
        text: "Kuragiri Kagehide is traditionally associated with Date Masamune and the Bizen Osafune smith Kagehide. Later retellings disagree about its nickname: one says a blow cut through an enemy and a horse’s saddle, while another associates it with an animal-killing story. The available popular histories do not establish the precise circumstances as fact, and the game’s ‘Ceremonial Sword’ label is unrelated to those traditional names.",
        sources: [{ title: "Rekijin — Swords associated with Date Masamune", url: "https://rekijin.com/28754.html?noamp=mobile" }],
        scope: "historical-context",
    },
    "雷切": {
        text: "Raikiri, originally called Chidori, is associated with the warlord Bekki Akitsura (Tachibana Dōsetsu). The Tachibana family’s museum preserves the surviving shortened wakizashi. Its dramatic name comes from a family legend that Dōsetsu drew the sword when lightning struck near him and cut the lightning itself; the lightning-cutting incident is folklore, not a documented physical feat.",
        sources: [{ title: "Tachibana Family Historical Museum — Raikiri", url: "https://artsandculture.google.com/story/rwXBhVHFrCNTLQ?hl=ja" }],
        scope: "identified-object",
    },
    "生駒光忠": {
        text: "Ikoma Mitsutada is a surviving National Treasure sword by Bizen Osafune Mitsutada in the Eisei Bunko collection. Its gold-inlaid inscription records both an attribution by Hon’ami Kōtoku and ownership by Ikoma Chikamasa, who served Hideyoshi and became lord of Sanuki. The official cultural-heritage record dates the gold inlay to around the end of the Keichō era.",
        sources: [{ title: "Agency for Cultural Affairs — Ikoma Mitsutada", url: "https://online.bunka.go.jp/heritages/detail/150041" }],
        scope: "identified-object",
    },
    "稲葉江": {
        text: "The surviving Inaba Gō is a National Treasure sword attributed to Gō Yoshihiro and held by the Kashiwabara Art Museum. Its gold-inlaid tang records that Hon’ami shortened the blade in December 1585 and that it belonged to Inaba Kan’emon-no-jō. Its remaining blade is 70.9 cm long; the museum also lists the work in both the Umetada Oshigata and the Kyōhō Meibutsuchō.",
        sources: [{ title: "Kashiwabara Art Museum — Inaba Gō", url: "https://kashiwabara-museum.jp/collection/50/" }],
        scope: "identified-object",
    },
};
