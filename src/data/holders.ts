export type NotableHolder = {
    name: string;
    japanese?: string;
    description: string;
    source: string;
};

/**
 * Verified notable holders keyed to the exact catalogue appointment.
 *
 * Not every historical office has a famous, easily verifiable Sengoku-era holder.
 * The UI therefore distinguishes between verified examples and entries for which
 * this reference has not yet highlighted a holder rather than guessing.
 */
export const notableHoldersByAppointment: Partial<Record<string, NotableHolder[]>> = {
    'rank-kanpaku': [
        {
            name: 'Toyotomi Hideyoshi',
            japanese: '豊臣秀吉',
            description: 'The unifier who became Kanpaku in 1585 after adoption into the Konoe family.',
            source: 'https://www.britannica.com/biography/Toyotomi-Hideyoshi',
        },
    ],
    'rank-daijo-daijin': [
        {
            name: 'Toyotomi Hideyoshi',
            japanese: '豊臣秀吉',
            description: 'Appointed Daijō-daijin in 1587 while consolidating rule over Japan.',
            source: 'https://www.britannica.com/biography/Toyotomi-Hideyoshi',
        },
    ],
    'rank-udaijin': [
        {
            name: 'Oda Nobunaga',
            japanese: '織田信長',
            description: 'The Sengoku unifier who rose through court office and received the office of Minister of the Right.',
            source: 'https://www.britannica.com/biography/Oda-Nobunaga',
        },
    ],
    'rank-naidaijin': [
        {
            name: 'Tokugawa Ieyasu',
            japanese: '徳川家康',
            description: 'Founder of the Tokugawa shogunate, appointed Inner Minister before becoming shōgun.',
            source: 'https://www.britannica.com/biography/Tokugawa-Ieyasu',
        },
    ],
    'rank-sangi': [
        {
            name: 'Fujiwara no Michinaga',
            japanese: '藤原道長',
            description: 'A leading Heian statesman whose career included the councillorate before he dominated court politics.',
            source: 'https://www.britannica.com/biography/Fujiwara-Michinaga',
        },
    ],
    'rank-nakatsukasa-no-taifu': [
        {
            name: 'Shimazu Toyohisa',
            japanese: '島津豊久',
            description: 'Shimazu commander killed during the Sekigahara retreat; historical sources style him Nakatsukasa no Taifu.',
            source: 'https://www.pref.kagoshima.jp/ab23/reimeikan/siroyu/documents/6757_20230324134328-1.pdf',
        },
    ],
    'rank-hyobu-no-sho': [
        {
            name: 'Ii Naomasa',
            japanese: '井伊直政',
            description: 'Tokugawa general famed for the “Red Devils”; contemporary Sekigahara-era documents style him Hyōbu no Shō.',
            source: 'https://dcollections.lib.keio.ac.jp/ja/sagara/003-095',
        },
    ],
    'rank-jiju': [
        {
            name: 'Ii Naomasa',
            japanese: '井伊直政',
            description: 'A leading Tokugawa commander who also held the court office of chamberlain.',
            source: 'https://crd.ndl.go.jp/reference/entry/reference/show?id=1000195934',
        },
    ],
    'rank-musashi-no-kami': [
        {
            name: 'Mori Nagayoshi',
            japanese: '森長可',
            description: 'Oda retainer and fierce battlefield commander commonly known by the court-style title Musashi no Kami.',
            source: 'https://kotobank.jp/word/%E6%A3%AE%E9%95%B7%E5%8F%AF-142533',
        },
    ],
    'rank-kazusa-no-suke': [
        {
            name: 'Oda Nobunaga',
            japanese: '織田信長',
            description: 'In his youth Nobunaga famously styled himself Kazusa no Suke before later receiving higher court offices.',
            source: 'https://kotobank.jp/word/%E7%B9%94%E7%94%B0%E4%BF%A1%E9%95%B7-17429',
        },
    ],
    'rank-bizen-no-kami': [
        {
            name: 'Ukita Hideie',
            japanese: '宇喜多秀家',
            description: 'One of the Five Elders under Hideyoshi and a major western commander at Sekigahara, associated with the title Bizen no Kami.',
            source: 'https://www.britannica.com/biography/Ukita-Hideie',
        },
    ],
    'rank-chikuzen-no-kami': [
        {
            name: 'Kuroda Nagamasa',
            japanese: '黒田長政',
            description: 'Kuroda daimyo and prominent Eastern Army commander at Sekigahara, known by the title Chikuzen no Kami.',
            source: 'https://kotobank.jp/word/%E9%BB%92%E7%94%B0%E9%95%B7%E6%94%BF-16470',
        },
    ],
    'rank-higo-no-kami': [
        {
            name: 'Katō Kiyomasa',
            japanese: '加藤清正',
            description: 'Hideyoshi veteran and lord of Kumamoto, closely associated with Higo and one of the best-known warriors of his generation.',
            source: 'https://www.britannica.com/biography/Kato-Kiyomasa',
        },
    ],
    'title-sei-i-taishogun': [
        {
            name: 'Ashikaga Yoshimitsu',
            japanese: '足利義満',
            description: 'Third Ashikaga shōgun, who brought the Muromachi shogunate to the height of its political and cultural power.',
            source: 'https://www.britannica.com/biography/Ashikaga-Yoshimitsu',
        },
        {
            name: 'Tokugawa Ieyasu',
            japanese: '徳川家康',
            description: 'Victor of Sekigahara and founder of the Tokugawa shogunate, appointed Sei-i Taishōgun in 1603.',
            source: 'https://www.britannica.com/biography/Tokugawa-Ieyasu',
        },
    ],
    'title-kanrei': [
        {
            name: 'Hosokawa Katsumoto',
            japanese: '細川勝元',
            description: 'Powerful Muromachi kanrei and one of the principal rivals whose conflict helped ignite the Ōnin War.',
            source: 'https://www.britannica.com/event/Onin-War',
        },
    ],
    'title-kanto-kanrei': [
        {
            name: 'Uesugi Kenshin',
            japanese: '上杉謙信',
            description: 'Daimyo of Echigo who inherited the Uesugi name and accepted the Kantō Kanrei office from Uesugi Norimasa.',
            source: 'https://www.britannica.com/biography/Uesugi-Kenshin',
        },
    ],
    'title-samurai-dokoro-shoshi': [
        {
            name: 'Yamana Sōzen',
            japanese: '山名宗全',
            description: 'Powerful Muromachi daimyo of the Yamana, one of the houses associated with leadership of the Samurai-dokoro.',
            source: 'https://www.britannica.com/biography/Yamana-Sozen',
        },
    ],
    'title-mandokoro-no-shitsuji': [
        {
            name: 'Ise Sadachika',
            japanese: '伊勢貞親',
            description: 'Influential Muromachi administrator from the Ise family, which became hereditary stewards of the Mandokoro.',
            source: 'https://kotobank.jp/word/%E4%BC%8A%E5%8B%A2%E8%B2%9E%E8%A6%AA-1053774',
        },
    ],
    'title-kyushu-tandai': [
        {
            name: 'Imagawa Ryōshun',
            japanese: '今川了俊',
            description: 'Muromachi commander and poet who served as Kyūshū Tandai and campaigned to restore shogunate authority in Kyūshū.',
            source: 'https://kotobank.jp/word/%E4%BB%8A%E5%B7%9D%E4%BA%86%E4%BF%8A-1055772',
        },
    ],
    'title-oshu-tandai': [
        {
            name: 'Ōsaki Norimochi',
            japanese: '大崎詮持',
            description: 'Member of the Ōsaki house, which became hereditary holders of the Ōshū Tandai office in northern Japan.',
            source: 'https://kotobank.jp/word/%E5%A5%A5%E5%B7%9E%E6%8E%A2%E9%A1%8C-449932',
        },
    ],
    'title-ushu-tandai': [
        {
            name: 'Mogami Mitsuie',
            japanese: '最上満家',
            description: 'Early Mogami lord associated with the Ushū Tandai tradition that anchored Muromachi authority in Dewa.',
            source: 'https://kotobank.jp/word/%E7%BE%BD%E5%B7%9E%E6%8E%A2%E9%A1%8C-439900',
        },
    ],
    'title-omi-shugo': [
        {
            name: 'Rokkaku Takayori',
            japanese: '六角高頼',
            description: 'Rokkaku daimyo and shugo of Ōmi who repeatedly fought Ashikaga shoguns over control of the province.',
            source: 'https://kotobank.jp/word/%E5%85%AD%E8%A7%92%E9%AB%98%E9%A0%BC-1122016',
        },
    ],
    'title-suruga-shugo': [
        {
            name: 'Imagawa Yoshimoto',
            japanese: '今川義元',
            description: 'Powerful Sengoku daimyo of Suruga, Tōtōmi, and Mikawa, defeated by Oda Nobunaga at Okehazama.',
            source: 'https://www.britannica.com/biography/Imagawa-Yoshimoto',
        },
    ],
    'title-kai-shugo': [
        {
            name: 'Takeda Shingen',
            japanese: '武田信玄',
            description: 'Sengoku daimyo of Kai, famed for his campaigns against Uesugi Kenshin and Tokugawa-Oda forces.',
            source: 'https://www.britannica.com/biography/Takeda-Shingen',
        },
    ],
    'title-aki-shugo': [
        {
            name: 'Takeda Nobutake',
            japanese: '武田信武',
            description: 'Nanboku-chō warrior who held Aki shugo and became an ancestor of important Takeda branches.',
            source: 'https://kotobank.jp/word/%E6%AD%A6%E7%94%B0%E4%BF%A1%E6%AD%A6-1088657',
        },
    ],
    'title-suo-shugo': [
        {
            name: 'Ōuchi Yoshioki',
            japanese: '大内義興',
            description: 'Powerful western daimyo and Suō shugo who restored Ashikaga Yoshitane to Kyoto in 1508.',
            source: 'https://kotobank.jp/word/%E5%A4%A7%E5%86%85%E7%BE%A9%E8%88%88-1059443',
        },
    ],
    'title-bungo-shugo': [
        {
            name: 'Ōtomo Sōrin',
            japanese: '大友宗麟',
            description: 'Christian daimyo of Bungo who built one of sixteenth-century Kyūshū’s strongest domains.',
            source: 'https://www.britannica.com/biography/Otomo-Sorin',
        },
    ],
};

export const getNotableHolders = (appointmentId: string): NotableHolder[] =>
    notableHoldersByAppointment[appointmentId] ?? [];
