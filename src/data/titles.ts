import type { ReferenceEntry } from './types';

/** Shogunate title data, preserving source order. Exact duplicate rows are represented by `count`. */
export const titles = [
    {
        "name": "Shōgun",
        "japanese": "征夷大将軍",
        "translation": "Great General for the Pacification of the Barbarians",
        "className": "Upper 1st Class",
        "effect": "Leadership + 12",
        "bonus": 12,
        "count": 1,
        "category": "Shogunate Office"
    },
    {
        "name": "Senior Chancellor",
        "japanese": "管領",
        "translation": "Shogun's Deputy",
        "className": "Lower 2nd Class",
        "effect": "Leadership + 11",
        "bonus": 11,
        "count": 1,
        "category": "Shogunate Office"
    },
    {
        "name": "Kantō Chancellor",
        "japanese": "関東管領",
        "translation": "Shogun's Deputy for Kantō",
        "className": "Lower 3rd Class",
        "effect": "Leadership + 10",
        "bonus": 10,
        "count": 1,
        "category": "Shogunate Office"
    },
    {
        "name": "Chief Chancellor",
        "japanese": "侍所所司",
        "translation": "Commissioner of the Samurai Office",
        "className": "Upper 4th Class",
        "effect": "Leadership + 9",
        "bonus": 9,
        "count": 1,
        "category": "Shogunate Office"
    },
    {
        "name": "Chancellor",
        "japanese": "政所執事",
        "translation": "Chief Steward of the Administrative Board",
        "className": "Upper 4th Class",
        "effect": "Leadership + 9",
        "bonus": 9,
        "count": 1,
        "category": "Shogunate Office"
    },
    {
        "name": "Senior Official",
        "japanese": "問注所執事",
        "translation": "Chief Steward of the Board of Inquiry",
        "className": "Lower 4th Class",
        "effect": "Leadership + 9",
        "bonus": 9,
        "count": 1,
        "category": "Shogunate Office"
    },
    {
        "name": "Court Official",
        "japanese": "引付頭人",
        "translation": "Chief of the Appeals Court",
        "className": "Lower 4th Class",
        "effect": "Leadership + 9",
        "bonus": 9,
        "count": 1,
        "category": "Shogunate Office"
    },
    {
        "name": "General Official",
        "japanese": "評定衆",
        "translation": "Shogunate Councilor",
        "className": "Upper 5th Class",
        "effect": "Leadership + 8",
        "bonus": 8,
        "count": 2,
        "category": "Shogunate Office"
    },
    {
        "name": "Kyūshū Official",
        "japanese": "九州探題",
        "translation": "Deputy for Kyūshū",
        "className": "Lower 5th Class",
        "effect": "Leadership + 8",
        "bonus": 8,
        "count": 1,
        "category": "Shogunate Office"
    },
    {
        "name": "Saikoku Official",
        "japanese": "西国探題",
        "translation": "Deputy for the Western Provinces",
        "className": "Upper 6th Class",
        "effect": "Leadership + 7",
        "bonus": 7,
        "count": 1,
        "category": "Shogunate Office"
    },
    {
        "name": "Ōshū Official",
        "japanese": "奥州探題",
        "translation": "Deputy for Ōshū",
        "className": "Lower 6th Class",
        "effect": "Leadership + 7",
        "bonus": 7,
        "count": 1,
        "category": "Shogunate Office"
    },
    {
        "name": "Ushū Official",
        "japanese": "羽州探題",
        "translation": "Deputy for Ushū",
        "className": "Upper 7th Class",
        "effect": "Leadership + 6",
        "bonus": 6,
        "count": 1,
        "category": "Shogunate Office"
    },
    {
        "name": "Senior Representative",
        "japanese": "御相伴衆",
        "translation": "Shogunal Companion",
        "className": "Lower 7th Class",
        "effect": "Leadership + 6",
        "bonus": 6,
        "count": 2,
        "category": "Shogunate Office"
    },
    {
        "name": "Domestic Representative",
        "japanese": "国持衆",
        "translation": "Province-Holding Lord",
        "className": "Upper 8th Class",
        "effect": "Leadership + 5",
        "bonus": 5,
        "count": 2,
        "category": "Shogunate Office"
    },
    {
        "name": "Foreign Representative",
        "japanese": "外様衆",
        "translation": "Outside Lord",
        "className": "Upper 8th Class",
        "effect": "Leadership + 5",
        "bonus": 5,
        "count": 2,
        "category": "Shogunate Office"
    },
    {
        "name": "General Representative",
        "japanese": "御供衆",
        "translation": "Shogunal Attendant",
        "className": "Upper 8th Class",
        "effect": "Leadership + 5",
        "bonus": 5,
        "count": 2,
        "category": "Shogunate Office"
    },
    {
        "name": "Yamato Representative",
        "japanese": "大和守護",
        "translation": "Military Governor of Yamato",
        "className": "Lower 8th Class",
        "effect": "Leadership + 5",
        "bonus": 5,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Kawachi Representative",
        "japanese": "河内守護",
        "translation": "Military Governor of Kawachi",
        "className": "Lower 8th Class",
        "effect": "Leadership + 5",
        "bonus": 5,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Ise Representative",
        "japanese": "伊勢守護",
        "translation": "Military Governor of Ise",
        "className": "Lower 8th Class",
        "effect": "Leadership + 5",
        "bonus": 5,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Musashi Representative",
        "japanese": "武蔵守護",
        "translation": "Military Governor of Musashi",
        "className": "Lower 8th Class",
        "effect": "Leadership + 5",
        "bonus": 5,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Kazusa Representative",
        "japanese": "上総守護",
        "translation": "Military Governor of Kazusa",
        "className": "Lower 8th Class",
        "effect": "Leadership + 5",
        "bonus": 5,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Shimōsa Representative",
        "japanese": "下総守護",
        "translation": "Military Governor of Shimōsa",
        "className": "Lower 8th Class",
        "effect": "Leadership + 5",
        "bonus": 5,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Hitachi Representative",
        "japanese": "常陸守護",
        "translation": "Military Governor of Hitachi",
        "className": "Lower 8th Class",
        "effect": "Leadership + 5",
        "bonus": 5,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Ōmi Representative",
        "japanese": "近江守護",
        "translation": "Military Governor of Ōmi",
        "className": "Lower 8th Class",
        "effect": "Leadership + 5",
        "bonus": 5,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Kōzuke Representative",
        "japanese": "上野守護",
        "translation": "Military Governor of Kōzuke",
        "className": "Lower 8th Class",
        "effect": "Leadership + 5",
        "bonus": 5,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Echizen Representative",
        "japanese": "越前守護",
        "translation": "Military Governor of Echizen",
        "className": "Lower 8th Class",
        "effect": "Leadership + 5",
        "bonus": 5,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Harima Representative",
        "japanese": "播磨守護",
        "translation": "Military Governor of Harima",
        "className": "Lower 8th Class",
        "effect": "Leadership + 5",
        "bonus": 5,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Higo Representative",
        "japanese": "肥後守護",
        "translation": "Military Governor of Higo",
        "className": "Lower 8th Class",
        "effect": "Leadership + 5",
        "bonus": 5,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Yamashiro Representative",
        "japanese": "山城守護",
        "translation": "Military Governor of Yamashiro",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Settsu Representative",
        "japanese": "摂津守護",
        "translation": "Military Governor of Settsu",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Owari Representative",
        "japanese": "尾張守護",
        "translation": "Military Governor of Owari",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Mikawa Representative",
        "japanese": "三河守護",
        "translation": "Military Governor of Mikawa",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Tōtōmi Representative",
        "japanese": "遠江守護",
        "translation": "Military Governor of Tōtōmi",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Suruga Representative",
        "japanese": "駿河守護",
        "translation": "Military Governor of Suruga",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Kai Representative",
        "japanese": "甲斐守護",
        "translation": "Military Governor of Kai",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Sagami Representative",
        "japanese": "相模守護",
        "translation": "Military Governor of Sagami",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Mino Representative",
        "japanese": "美濃守護",
        "translation": "Military Governor of Mino",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Shinano Representative",
        "japanese": "信濃守護",
        "translation": "Military Governor of Shinano",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Shimotsuke Representative",
        "japanese": "下野守護",
        "translation": "Military Governor of Shimotsuke",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Kaga Representative",
        "japanese": "加賀守護",
        "translation": "Military Governor of Kaga",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Etchu Representative",
        "japanese": "越中守護",
        "translation": "Military Governor of Etchū",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Echigo Representative",
        "japanese": "越後守護",
        "translation": "Military Governor of Echigo",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Tanba Representative",
        "japanese": "丹波守護",
        "translation": "Military Governor of Tanba",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Tajima Representative",
        "japanese": "但馬守護",
        "translation": "Military Governor of Tajima",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Inaba Representative",
        "japanese": "因幡守護",
        "translation": "Military Governor of Inaba",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Izumo Representative",
        "japanese": "出雲守護",
        "translation": "Military Governor of Izumo",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Mimasaka Representative",
        "japanese": "美作守護",
        "translation": "Military Governor of Mimasaka",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Bizen Representative",
        "japanese": "備前守護",
        "translation": "Military Governor of Bizen",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Bicchu Representative",
        "japanese": "備中守護",
        "translation": "Military Governor of Bicchū",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Bingo Representative",
        "japanese": "備後守護",
        "translation": "Military Governor of Bingo",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Aki Representative",
        "japanese": "安芸守護",
        "translation": "Military Governor of Aki",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Suō Representative",
        "japanese": "周防守護",
        "translation": "Military Governor of Suō",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Kii Representative",
        "japanese": "紀伊守護",
        "translation": "Military Governor of Kii",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Awa Representative",
        "japanese": "阿波守護",
        "translation": "Military Governor of Awa",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Sanuki Representative",
        "japanese": "讃岐守護",
        "translation": "Military Governor of Sanuki",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Iyo Representative",
        "japanese": "伊予守護",
        "translation": "Military Governor of Iyo",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Chikuzen Representative",
        "japanese": "筑前守護",
        "translation": "Military Governor of Chikuzen",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Chikugo Representative",
        "japanese": "筑後守護",
        "translation": "Military Governor of Chikugo",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Hizen Representative",
        "japanese": "肥前守護",
        "translation": "Military Governor of Hizen",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Buzen Representative",
        "japanese": "豊前守護",
        "translation": "Military Governor of Buzen",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Bungo Representative",
        "japanese": "豊後守護",
        "translation": "Military Governor of Bungo",
        "className": "Lower 9th Class",
        "effect": "Leadership + 4",
        "bonus": 4,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Noto Representative",
        "japanese": "能登守護",
        "translation": "Military Governor of Noto",
        "className": "Lower 10th Class",
        "effect": "Leadership + 3",
        "bonus": 3,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Tango Representative",
        "japanese": "丹後守護",
        "translation": "Military Governor of Tango",
        "className": "Lower 10th Class",
        "effect": "Leadership + 3",
        "bonus": 3,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Iwami Representative",
        "japanese": "石見守護",
        "translation": "Military Governor of Iwami",
        "className": "Lower 10th Class",
        "effect": "Leadership + 3",
        "bonus": 3,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Tosa Representative",
        "japanese": "土佐守護",
        "translation": "Military Governor of Tosa",
        "className": "Lower 10th Class",
        "effect": "Leadership + 3",
        "bonus": 3,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Hyūga Representative",
        "japanese": "日向守護",
        "translation": "Military Governor of Hyūga",
        "className": "Lower 10th Class",
        "effect": "Leadership + 3",
        "bonus": 3,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Ōsumi Representative",
        "japanese": "大隅守護",
        "translation": "Military Governor of Ōsumi",
        "className": "Lower 10th Class",
        "effect": "Leadership + 3",
        "bonus": 3,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Satsuma Representative",
        "japanese": "薩摩守護",
        "translation": "Military Governor of Satsuma",
        "className": "Lower 10th Class",
        "effect": "Leadership + 3",
        "bonus": 3,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Iga Representative",
        "japanese": "伊賀守護",
        "translation": "Military Governor of Iga",
        "className": "Lower 11th Class",
        "effect": "Leadership + 2",
        "bonus": 2,
        "count": 1,
        "category": "Shugo"
    },
    {
        "name": "Hida Representative",
        "japanese": "飛騨守護",
        "translation": "Military Governor of Hida",
        "className": "Lower 11th Class",
        "effect": "Leadership + 2",
        "bonus": 2,
        "count": 1,
        "category": "Shugo"
    }
] satisfies ReferenceEntry[];
