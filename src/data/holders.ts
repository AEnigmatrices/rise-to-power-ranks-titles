import type { HistoricalSource } from './schema/sources';
export type NotableHolder = {
    name: string;
    japanese?: string;
    description: string;
    sources: HistoricalSource[];
};

/**
 * Verified notable holders keyed to the exact catalogue appointment.
 *
 * Not every historical office has a famous, easily verifiable Sengoku-era holder.
 * The UI only renders this material when an exact holder has been verified rather
 * than showing speculative or placeholder examples.
 */
export const notableHoldersByAppointment: Partial<Record<string, NotableHolder[]>> = {
    'rank-kanpaku': [
        {
            name: 'Toyotomi Hideyoshi',
            japanese: '豊臣秀吉',
            description: 'The unifier who became Kanpaku in 1585 after adoption into the Konoe family.',
            sources: [{ url: 'https://www.britannica.com/biography/Toyotomi-Hideyoshi' }],
        },
    ],
    'rank-daijo-daijin': [
        {
            name: 'Toyotomi Hideyoshi',
            japanese: '豊臣秀吉',
            description: 'Appointed Daijō-daijin in 1587 while consolidating rule over Japan.',
            sources: [{ url: 'https://www.britannica.com/biography/Toyotomi-Hideyoshi' }],
        },
    ],
    'rank-udaijin': [
        {
            name: 'Oda Nobunaga',
            japanese: '織田信長',
            description: 'The Sengoku unifier who rose through court office and received the office of Minister of the Right.',
            sources: [{ url: 'https://www.britannica.com/biography/Oda-Nobunaga' }],
        },
    ],
    'rank-naidaijin': [
        {
            name: 'Tokugawa Ieyasu',
            japanese: '徳川家康',
            description: 'Founder of the Tokugawa shogunate, appointed Inner Minister before becoming shōgun.',
            sources: [{ url: 'https://www.britannica.com/biography/Tokugawa-Ieyasu' }],
        },
    ],
    'rank-gon-dainagon': [
        {
            name: 'Maeda Toshiie',
            japanese: '前田利家',
            description: 'One of Hideyoshi’s Five Elders, promoted to Gon Dainagon in 1596 after a long career that had also included the title Chikuzen no Kami.',
            sources: [{ url: 'https://kotobank.jp/word/%E5%89%8D%E7%94%B0%E5%88%A9%E5%AE%B6-16541' }],
        },
    ],
    'rank-gon-chunagon': [
        {
            name: 'Uesugi Kagekatsu',
            japanese: '上杉景勝',
            description: 'Kenshin’s successor rose from Danjō no Shōhitsu through guard office and Sangi before reaching Gon Chūnagon under Hideyoshi.',
            sources: [{ url: 'https://kotobank.jp/word/%E4%B8%8A%E6%9D%89%E6%99%AF%E5%8B%9D-33777' }],
        },
        {
            name: 'Kobayakawa Takakage',
            japanese: '小早川隆景',
            description: 'The Mōri statesman and one of Hideyoshi’s Five Elders was appointed Gon Chūnagon in 1595.',
            sources: [{ url: 'https://kotobank.jp/word/%E5%B0%8F%E6%97%A9%E5%B7%9D%E9%9A%86%E6%99%AF-16258' }],
        },
        {
            name: 'Mōri Terumoto',
            japanese: '毛利輝元',
            description: 'Head of the Mōri and one of Hideyoshi’s Five Elders, appointed Gon Chūnagon under the Toyotomi regime.',
            sources: [{ url: 'https://kotobank.jp/word/%E6%AF%9B%E5%88%A9%E8%BC%9D%E5%85%83-16898' }],
        },
        {
            name: 'Ukita Hideie',
            japanese: '宇喜多秀家',
            description: 'The Bizen daimyo and Five Elder was promoted from Sangi to Gon Chūnagon after his service in the Korean campaigns.',
            sources: [{ url: 'https://kotobank.jp/word/%E5%AE%87%E5%96%9C%E5%A4%9A%E7%A7%80%E5%AE%B6-34359' }],
        },
        {
            name: 'Maeda Toshinaga',
            japanese: '前田利長',
            description: 'Toshiie’s heir and second lord of Kaga held the court office of Gon Chūnagon while serving among the late Toyotomi grandees.',
            sources: [{ url: 'https://kotobank.jp/word/%E5%89%8D%E7%94%B0%E5%88%A9%E9%95%B7-16666' }],
        },
    ],
    'rank-sangi': [
        {
            name: 'Fujiwara no Michinaga',
            japanese: '藤原道長',
            description: 'A leading Heian statesman whose career included the councillorate before he dominated court politics.',
            sources: [{ url: 'https://www.britannica.com/biography/Fujiwara-Michinaga' }],
        },
        {
            name: 'Hosokawa Tadaoki',
            japanese: '細川忠興',
            description: 'Promoted to Sangi in 1596 while serving Toyotomi Hideyoshi, alongside appointment as Etchū no Kami.',
            sources: [{ url: 'https://crd.ndl.go.jp/reference/entry/index.php?id=1000222581&page=ref_view' }],
        },
        {
            name: 'Ukita Hideie',
            japanese: '宇喜多秀家',
            description: 'The future Five Elder was appointed Sangi in 1587 before later advancing to Gon Chūnagon.',
            sources: [{ url: 'https://kotobank.jp/word/%E5%AE%87%E5%96%9C%E5%A4%9A%E7%A7%80%E5%AE%B6-34359' }],
        },
        {
            name: 'Uesugi Kagekatsu',
            japanese: '上杉景勝',
            description: 'Kagekatsu advanced to Sangi after receiving a provisional minor captaincy in the Left Inner Palace Guard.',
            sources: [{ url: 'https://kotobank.jp/word/%E4%B8%8A%E6%9D%89%E6%99%AF%E5%8B%9D-33777' }],
        },
    ],
    'rank-sakon-e-no-gon-shosho': [
        {
            name: 'Uesugi Kagekatsu',
            japanese: '上杉景勝',
            description: 'Appointed Provisional Minor Captain of the Left Inner Palace Guard after submitting to Toyotomi Hideyoshi in 1586.',
            sources: [{ url: 'https://kotobank.jp/word/%E4%B8%8A%E6%9D%89%E6%99%AF%E5%8B%9D-33777' }],
        },
    ],
    'rank-danjo-no-shohitsu': [
        {
            name: 'Uesugi Kagekatsu',
            japanese: '上杉景勝',
            description: 'Before his Toyotomi-era promotions, Kagekatsu was known as Uesugi Danjō no Shōhitsu Kagekatsu.',
            sources: [{ url: 'https://kotobank.jp/word/%E4%B8%8A%E6%9D%89%E6%99%AF%E5%8B%9D-33777' }],
        },
        {
            name: 'Asano Nagamasa',
            japanese: '浅野長政',
            description: 'Hideyoshi’s senior administrator and later Five Commissioner was historically styled Danjō no Shōhitsu.',
            sources: [{ url: 'https://kotobank.jp/word/%E6%B5%85%E9%87%8E%E9%95%B7%E6%94%BF-14529' }],
        },
    ],
    'rank-sakon-e-no-shosho': [
        {
            name: 'Hosokawa Tadaoki',
            japanese: '細川忠興',
            description: 'Appointed Minor Captain of the Left Inner Palace Guard in 1588 during his rise under Hideyoshi.',
            sources: [{ url: 'https://crd.ndl.go.jp/reference/entry/index.php?id=1000222581&page=ref_view' }],
        },
    ],
    'rank-shikibu-no-taifu': [
        {
            name: 'Sakakibara Yasumasa',
            japanese: '榊原康政',
            description: 'One of the Tokugawa Four Heavenly Kings, appointed Shikibu no Taifu after his service in Ieyasu’s campaigns.',
            sources: [{ url: 'https://kotobank.jp/word/%E6%A6%8A%E5%8E%9F%E5%BA%B7%E6%94%BF-68474' }],
        },
    ],
    'rank-nakatsukasa-no-taifu': [
        {
            name: 'Shimazu Toyohisa',
            japanese: '島津豊久',
            description: 'Shimazu commander killed during the Sekigahara retreat; contemporary Shimazu records and late-1599 correspondence style him Nakatsukasa no Taifu, while later tradition also transmits Nakatsukasa no Shō.',
            sources: [{ url: 'https://www.pref.kagoshima.jp/ab23/reimeikan/siroyu/documents/6757_20230324134328-1.pdf' }],
        },
        {
            name: 'Honda Tadakatsu',
            japanese: '本多忠勝',
            description: 'One of Tokugawa Ieyasu’s foremost battlefield commanders, appointed Nakatsukasa no Taifu in 1588.',
            sources: [{ url: 'https://kotobank.jp/word/%E6%9C%AC%E5%A4%9A%E5%BF%A0%E5%8B%9D-15019' }],
        },
    ],
    'rank-nakatsukasa-no-sho': [
        {
            name: 'Shimazu Toyohisa',
            japanese: '島津豊久',
            description: 'Later Japanese historical tradition, including the Satsuma biwa narrative Katami no Sakura, styles Toyohisa Nakatsukasa no Shō; contemporary Shimazu evidence instead attests Nakatsukasa no Taifu.',
            sources: [{ url: 'https://k-kentan.repo.nii.ac.jp/record/152/files/KJ00001015102.pdf' }],
        },
        {
            name: 'Wakisaka Yasuharu',
            japanese: '脇坂安治',
            description: 'One of the Seven Spears of Shizugatake, appointed Nakatsukasa no Shō in 1585.',
            sources: [{ url: 'https://kotobank.jp/word/%E8%84%87%E5%9D%82%E5%AE%89%E6%B2%BB-153949' }],
        },
    ],
    'rank-shuri-no-suke': [
        {
            name: 'Shibata Katsuie',
            japanese: '柴田勝家',
            description: 'Nobunaga’s veteran Hokuriku commander was widely known by the court-style title Shuri no Suke.',
            sources: [{ url: 'https://kotobank.jp/word/%E6%9F%B4%E7%94%B0%E5%8B%9D%E5%AE%B6-74720' }],
        },
    ],
    'rank-sama-no-suke': [
        {
            name: 'Katō Yoshiaki',
            japanese: '加藤嘉明',
            description: 'One of the Seven Spears of Shizugatake and later lord of Matsuyama, long known by the title Sama no Suke.',
            sources: [{ url: 'https://kotobank.jp/word/%E5%8A%A0%E8%97%A4%E5%98%89%E6%98%8E-15718' }],
        },
    ],
    'rank-hyobu-no-sho': [
        {
            name: 'Ii Naomasa',
            japanese: '井伊直政',
            description: 'Tokugawa general famed for the “Red Devils”; contemporary Sekigahara-era documents style him Hyōbu no Shō.',
            sources: [{ url: 'https://dcollections.lib.keio.ac.jp/ja/sagara/003-095' }],
        },
    ],
    'rank-kageyu-jikan': [
        {
            name: 'Kuroda Yoshitaka',
            japanese: '黒田孝高',
            description: 'Hideyoshi’s strategist better known as Kanbei and later Josui also used the official title Kageyu no Jikan.',
            sources: [{ url: 'https://kotobank.jp/word/%E9%BB%92%E7%94%B0%E5%AD%9D%E9%AB%98-57985' }],
        },
    ],
    'rank-kunai-no-sho': [
        {
            name: 'Chōsokabe Motochika',
            japanese: '長宗我部元親',
            description: 'The Sengoku unifier of Shikoku was historically styled Kunai no Shō before entering Hideyoshi’s order.',
            sources: [{ url: 'https://kotobank.jp/word/%E9%95%B7%E5%AE%97%E6%88%91%E9%83%A8%E5%85%83%E8%A6%AA-98062' }],
        },
    ],
    'rank-kazue-no-kami': [
        {
            name: 'Katō Kiyomasa',
            japanese: '加藤清正',
            description: 'The future lord of Kumamoto was appointed Kazue no Kami in 1585, a title strongly associated with him before his later Higo no Kami appointment.',
            sources: [{ url: 'https://kotobank.jp/word/%E5%8A%A0%E8%97%A4%E6%B8%85%E6%AD%A3-15704' }],
        },
    ],
    'rank-higashi-no-ichi-no-kami': [
        {
            name: 'Katagiri Katsumoto',
            japanese: '片桐且元',
            description: 'One of the Seven Spears of Shizugatake, later a principal intermediary between the Toyotomi and Tokugawa, was appointed Higashi no Ichi no Kami.',
            sources: [{ url: 'https://kotobank.jp/word/%E7%89%87%E6%A1%90%E4%B8%94%E5%85%83-44915' }],
        },
    ],
    'rank-jibu-no-sho': [
        {
            name: 'Ishida Mitsunari',
            japanese: '石田三成',
            description: 'Appointed Jibu no Shō at age twenty-five and later became one of the leading administrators of the Toyotomi government.',
            sources: [{ url: 'https://www.city.nagahama.lg.jp/cmsfiles/contents/0000001/1238/R7rekimachikeikaku_1_compressed-cleaned.pdf' }],
        },
    ],
    'rank-gyobu-no-sho': [
        {
            name: 'Ōtani Yoshitsugu',
            japanese: '大谷吉継',
            description: 'Contemporary documents identify the Sekigahara commander by the office title Gyōbu no Shō.',
            sources: [{ url: 'https://ndlsearch.ndl.go.jp/books/R100000100-Isagara007_279' }],
        },
    ],
    'rank-saemon-no-suke': [
        {
            name: 'Sanada Nobushige',
            japanese: '真田信繁',
            description: 'Better known later as Yukimura, Nobushige was historically styled Saemon no Suke.',
            sources: [{ url: 'https://museum.umic.jp/jinbutu/data/052.html' }],
        },
    ],
    'rank-jiju': [
        {
            name: 'Ii Naomasa',
            japanese: '井伊直政',
            description: 'A leading Tokugawa commander who also held the court office of chamberlain.',
            sources: [{ url: 'https://crd.ndl.go.jp/reference/entry/reference/show?id=1000195934' }],
        },
        {
            name: 'Hosokawa Tadaoki',
            japanese: '細川忠興',
            description: 'Appointed Chamberlain in 1585 before receiving higher court offices under the Toyotomi regime.',
            sources: [{ url: 'https://crd.ndl.go.jp/reference/entry/index.php?id=1000222581&page=ref_view' }],
        },
        {
            name: 'Date Masamune',
            japanese: '伊達政宗',
            description: 'Masamune was appointed Chamberlain in 1591 and appears in contemporary correspondence under that court title.',
            sources: [{ url: 'https://lib-www.smt.city.sendai.jp/wysiwyg/file/download/1/604' }],
        },
    ],
    'rank-takumi-no-kami-artisans': [
        {
            name: 'Konishi Yukinaga',
            japanese: '小西行長',
            description: 'The Christian daimyo and Toyotomi commander used Takumi no Kami before later taking the title Settsu no Kami.',
            sources: [{ url: 'https://kotobank.jp/word/%E5%B0%8F%E8%A5%BF%E8%A1%8C%E9%95%B7-65676' }],
        },
    ],
    'rank-mutsu-no-kami': [
        {
            name: 'Date Masamune',
            japanese: '伊達政宗',
            description: 'The founder of the Sendai domain was transferred to the court title Mutsu no Kami in 1608.',
            sources: [{ url: 'https://lib-www.smt.city.sendai.jp/wysiwyg/file/download/1/604' }],
        },
    ],
    'rank-echizen-no-kami': [
        {
            name: 'Date Masamune',
            japanese: '伊達政宗',
            description: 'Masamune used the court title Echizen no Kami from 1591 until his transfer to Mutsu no Kami in 1608.',
            sources: [{ url: 'https://lib-www.smt.city.sendai.jp/wysiwyg/file/download/1/604' }],
        },
    ],
    'rank-yamashiro-no-kami': [
        {
            name: 'Naoe Kanetsugu',
            japanese: '直江兼続',
            description: 'Uesugi Kagekatsu’s chief administrator adopted the title Yamashiro no Kami after succeeding to the Naoe house.',
            sources: [{ url: 'https://kotobank.jp/word/%E7%9B%B4%E6%B1%9F%E5%85%BC%E7%B6%9A-107524' }],
        },
    ],
    'rank-hyuga-no-kami': [
        {
            name: 'Akechi Mitsuhide',
            japanese: '明智光秀',
            description: 'Mitsuhide is repeatedly documented as Hyūga no Kami; a surviving 1581 house code is issued under the signature “(Akechi) Hyūga no Kami Mitsuhide.”',
            sources: [{ url: 'https://dcollections.lib.keio.ac.jp/ja/sorimachi/130x-145-1' }],
        },
    ],
    'rank-musashi-no-kami': [
        {
            name: 'Mori Nagayoshi',
            japanese: '森長可',
            description: 'Oda retainer and fierce battlefield commander commonly known by the court-style title Musashi no Kami.',
            sources: [{ url: 'https://kotobank.jp/word/%E6%A3%AE%E9%95%B7%E5%8F%AF-142533' }],
        },
    ],
    'rank-hida-no-kami': [
        {
            name: 'Gamō Ujisato',
            japanese: '蒲生氏郷',
            description: 'Nobunaga’s son-in-law and later lord of Aizu was appointed Hida no Kami in 1583.',
            sources: [{ url: 'https://kotobank.jp/word/%E8%92%B2%E7%94%9F%E6%B0%8F%E9%83%B7-46901' }],
        },
    ],
    'rank-sado-no-kami': [
        {
            name: 'Tōdō Takatora',
            japanese: '藤堂高虎',
            description: 'The celebrated castle builder was appointed Sado no Kami in 1587 before changing his court title to Izumi no Kami in 1606.',
            sources: [{ url: 'https://kotobank.jp/word/%E8%97%A4%E5%A0%82%E9%AB%98%E8%99%8E-19059' }],
        },
    ],
    'rank-izumi-no-kami': [
        {
            name: 'Tōdō Takatora',
            japanese: '藤堂高虎',
            description: 'Takatora changed his court title from Sado no Kami to Izumi no Kami in 1606; surviving letters are signed simply “Izumi.”',
            sources: [{ url: 'https://www.bunka.pref.mie.lg.jp/MieMu/82826046513.htm' }],
        },
    ],
    'rank-kazusa-no-suke': [
        {
            name: 'Oda Nobunaga',
            japanese: '織田信長',
            description: 'In his youth Nobunaga famously styled himself Kazusa no Suke before later receiving higher court offices.',
            sources: [{ url: 'https://kotobank.jp/word/%E7%B9%94%E7%94%B0%E4%BF%A1%E9%95%B7-17429' }],
        },
    ],
    'rank-settsu-no-kami': [
        {
            name: 'Konishi Yukinaga',
            japanese: '小西行長',
            description: 'The Christian daimyo of southern Higo and leading negotiator in the Korean campaigns was commonly styled Settsu no Kami.',
            sources: [{ url: 'https://kotobank.jp/word/%E5%B0%8F%E8%A5%BF%E8%A1%8C%E9%95%B7-65676' }],
        },
    ],
    'rank-kai-no-kami': [
        {
            name: 'Kuroda Nagamasa',
            japanese: '黒田長政',
            description: 'Before becoming closely associated with Chikuzen, Nagamasa was appointed Kai no Kami when he inherited the Kuroda domain in 1589.',
            sources: [{ url: 'https://kotobank.jp/word/%E9%BB%92%E7%94%B0%E9%95%B7%E6%94%BF-16434' }],
        },
    ],
    'rank-hizen-no-kami': [
        {
            name: 'Maeda Toshinaga',
            japanese: '前田利長',
            description: 'Toshiie’s heir and eventual second lord of Kaga held the title Hizen no Kami before his elevation to Gon Chūnagon.',
            sources: [{ url: 'https://kotobank.jp/word/%E5%89%8D%E7%94%B0%E5%88%A9%E9%95%B7-16666' }],
        },
    ],
    'rank-etchu-no-kami': [
        {
            name: 'Hosokawa Tadaoki',
            japanese: '細川忠興',
            description: 'Appointed Etchū no Kami in 1596 at the same time he was promoted to Sangi.',
            sources: [{ url: 'https://crd.ndl.go.jp/reference/entry/index.php?id=1000222581&page=ref_view' }],
        },
    ],
    'rank-awa-no-kami-boso': [
        {
            name: 'Sanada Masayuki',
            japanese: '真田昌幸',
            description: 'The builder of Ueda Castle is recorded under the court-style title Awa no Kami.',
            sources: [{ url: 'https://sitereports.nabunken.go.jp/files/attach/0/789/610_1_%E5%8F%B2%E8%B7%A1%E4%B8%8A%E7%94%B0%E5%9F%8E%E8%B7%A1.pdf' }],
        },
    ],
    'rank-izu-no-kami': [
        {
            name: 'Sanada Nobuyuki',
            japanese: '真田信之',
            description: 'Sanada Nobuyuki, elder brother of Nobushige, was widely styled Izu no Kami.',
            sources: [{ url: 'https://museum.umic.jp/jinbutu/data/053.html' }],
        },
    ],
    'rank-bizen-no-kami': [
        {
            name: 'Ukita Hideie',
            japanese: '宇喜多秀家',
            description: 'One of Hideyoshi’s Five Elders and a major western commander at Sekigahara, historically styled Bizen no Kami.',
            sources: [{ url: 'https://www.library.pref.ishikawa.lg.jp/shosho/furucolle/list/prsn01492' }],
        },
    ],
    'rank-chikuzen-no-kami': [
        {
            name: 'Kuroda Nagamasa',
            japanese: '黒田長政',
            description: 'Kuroda daimyo and prominent Eastern Army commander at Sekigahara, later styled Chikuzen no Kami after receiving the province.',
            sources: [{ url: 'https://kotobank.jp/word/%E9%BB%92%E7%94%B0%E9%95%B7%E6%94%BF-16434' }],
        },
        {
            name: 'Maeda Toshiie',
            japanese: '前田利家',
            description: 'The founder of the Kaga Maeda line received permission to use Chikuzen no Kami in 1586, a title retained in contemporary documents.',
            sources: [{ url: 'https://www.library.pref.ishikawa.lg.jp/shosho/furucolle/list/prsn11392' }],
        },
    ],
    'rank-higo-no-kami': [
        {
            name: 'Katō Kiyomasa',
            japanese: '加藤清正',
            description: 'The lord of Kumamoto was formally appointed Higo no Kami in 1603 after earlier holding the office of Kazue no Kami.',
            sources: [{ url: 'https://kotobank.jp/word/%E5%8A%A0%E8%97%A4%E6%B8%85%E6%AD%A3-15704' }],
        },
    ],
    'title-sei-i-taishogun': [
        {
            name: 'Ashikaga Yoshimitsu',
            japanese: '足利義満',
            description: 'Third Ashikaga shōgun, who brought the Muromachi shogunate to the height of its political and cultural power.',
            sources: [{ url: 'https://www.britannica.com/biography/Ashikaga-Yoshimitsu' }],
        },
        {
            name: 'Tokugawa Ieyasu',
            japanese: '徳川家康',
            description: 'Victor of Sekigahara and founder of the Tokugawa shogunate, appointed Sei-i Taishōgun in 1603.',
            sources: [{ url: 'https://www.britannica.com/biography/Tokugawa-Ieyasu' }],
        },
    ],
    'title-kanrei': [
        {
            name: 'Hosokawa Katsumoto',
            japanese: '細川勝元',
            description: 'Powerful Muromachi kanrei and one of the principal rivals whose conflict helped ignite the Ōnin War.',
            sources: [{ url: 'https://www.britannica.com/event/Onin-War' }],
        },
    ],
    'title-kanto-kanrei': [
        {
            name: 'Uesugi Kenshin',
            japanese: '上杉謙信',
            description: 'Daimyo of Echigo who inherited the Uesugi name and accepted the Kantō Kanrei office from Uesugi Norimasa.',
            sources: [{ url: 'https://www.britannica.com/biography/Uesugi-Kenshin' }],
        },
    ],
    'title-samurai-dokoro-shoshi': [
        {
            name: 'Yamana Sōzen',
            japanese: '山名宗全',
            description: 'Powerful Muromachi daimyo of the Yamana, one of the houses associated with leadership of the Samurai-dokoro.',
            sources: [{ url: 'https://www.britannica.com/biography/Yamana-Sozen' }],
        },
    ],
    'title-mandokoro-no-shitsuji': [
        {
            name: 'Ise Sadachika',
            japanese: '伊勢貞親',
            description: 'Influential Muromachi administrator from the Ise family, which became hereditary stewards of the Mandokoro.',
            sources: [{ url: 'https://kotobank.jp/word/%E4%BC%8A%E5%8B%A2%E8%B2%9E%E8%A6%AA-1053774' }],
        },
    ],
    'title-kyushu-tandai': [
        {
            name: 'Imagawa Ryōshun',
            japanese: '今川了俊',
            description: 'Muromachi commander and poet who served as Kyūshū Tandai and campaigned to restore shogunate authority in Kyūshū.',
            sources: [{ url: 'https://kotobank.jp/word/%E4%BB%8A%E5%B7%9D%E4%BA%86%E4%BF%8A-1055772' }],
        },
    ],
    'title-oshu-tandai': [
        {
            name: 'Ōsaki Norimochi',
            japanese: '大崎詮持',
            description: 'Member of the Ōsaki house, which became hereditary holders of the Ōshū Tandai office in northern Japan.',
            sources: [{ url: 'https://kotobank.jp/word/%E5%A5%A5%E5%B7%9E%E6%8E%A2%E9%A1%8C-449932' }],
        },
    ],
    'title-ushu-tandai': [
        {
            name: 'Mogami Mitsuie',
            japanese: '最上満家',
            description: 'Early Mogami lord associated with the Ushū Tandai tradition that anchored Muromachi authority in Dewa.',
            sources: [{ url: 'https://kotobank.jp/word/%E7%BE%BD%E5%B7%9E%E6%8E%A2%E9%A1%8C-439900' }],
        },
    ],
    'title-omi-shugo': [
        {
            name: 'Rokkaku Takayori',
            japanese: '六角高頼',
            description: 'Rokkaku daimyo and shugo of Ōmi who repeatedly fought Ashikaga shoguns over control of the province.',
            sources: [{ url: 'https://kotobank.jp/word/%E5%85%AD%E8%A7%92%E9%AB%98%E9%A0%BC-1122016' }],
        },
    ],
    'title-suruga-shugo': [
        {
            name: 'Imagawa Yoshimoto',
            japanese: '今川義元',
            description: 'Powerful Sengoku daimyo of Suruga, Tōtōmi, and Mikawa, defeated by Oda Nobunaga at Okehazama.',
            sources: [{ url: 'https://www.britannica.com/biography/Imagawa-Yoshimoto' }],
        },
    ],
    'title-kai-shugo': [
        {
            name: 'Takeda Shingen',
            japanese: '武田信玄',
            description: 'Sengoku daimyo of Kai, famed for his campaigns against Uesugi Kenshin and Tokugawa-Oda forces.',
            sources: [{ url: 'https://www.britannica.com/biography/Takeda-Shingen' }],
        },
    ],
    'title-aki-shugo': [
        {
            name: 'Takeda Nobutake',
            japanese: '武田信武',
            description: 'Nanboku-chō warrior who held Aki shugo and became an ancestor of important Takeda branches.',
            sources: [{ url: 'https://kotobank.jp/word/%E6%AD%A6%E7%94%B0%E4%BF%A1%E6%AD%A6-1088657' }],
        },
    ],
    'title-suo-shugo': [
        {
            name: 'Ōuchi Yoshioki',
            japanese: '大内義興',
            description: 'Powerful western daimyo and Suō shugo who restored Ashikaga Yoshitane to Kyoto in 1508.',
            sources: [{ url: 'https://kotobank.jp/word/%E5%A4%A7%E5%86%85%E7%BE%A9%E8%88%88-1059443' }],
        },
    ],
    'title-bungo-shugo': [
        {
            name: 'Ōtomo Sōrin',
            japanese: '大友宗麟',
            description: 'Christian daimyo of Bungo who built one of sixteenth-century Kyūshū’s strongest domains.',
            sources: [{ url: 'https://www.britannica.com/biography/Otomo-Sorin' }],
        },
    ],
};

export const getNotableHolders = (appointmentId: string): NotableHolder[] =>
    notableHoldersByAppointment[appointmentId] ?? [];
