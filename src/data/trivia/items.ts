import type { TriviaItem } from '../schema/trivia';

export const triviaById = {
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
    'drifters-toyohisa': {
        id: 'drifters-toyohisa',
        label: 'Drifters changes Toyohisa’s court office',
        body: 'Drifters styles Shimazu Toyohisa as 島津中務少輔豊久 (Nakatsukasa no Shō), but historical records around Sekigahara identify him as 島津中務大輔豊久 (Nakatsukasa no Taifu). The anime’s 少輔 is therefore a fictional variation; the historically attested office corresponds to the catalogue’s 中務大輔 entry.',
        source: 'https://www.pref.kagoshima.jp/ab23/reimeikan/siroyu/documents/6757_20230324134328-1.pdf',
    },
    'drifters-naomasa': {
        id: 'drifters-naomasa',
        label: 'Drifters gets Naomasa’s office right',
        body: 'Ii Naomasa’s 兵部少輔 (Hyōbu no Shō) is strongly attested near Sekigahara: surviving documents from 1599, 1600, and 1601 repeatedly style him 井伊兵部少輔直政, and Hikone Castle Museum identifies 兵部少輔 as his customary title. A much later genealogical compilation, Keizu Sanyō, instead gives 兵部大輔 for 1588; the contemporary documentary evidence therefore favors 少輔 for how Naomasa was actually styled around Sekigahara.',
        source: 'https://dcollections.lib.keio.ac.jp/ja/sagara/003-095',
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

export const officeTrivia: TriviaItem[] = Object.values(triviaById);
