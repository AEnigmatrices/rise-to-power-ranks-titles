import type { ReferenceEntry } from './types';

/** Imperial Court rank data, preserving source order. Exact duplicate rows are represented by `count`. */
export const ranks = [
    {
        "name": "Regent",
        "japanese": "関白",
        "translation": "Imperial Regent",
        "className": "Upper 1st Class",
        "effect": "Politics + 12",
        "bonus": 12,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Prime Minister",
        "japanese": "太政大臣",
        "translation": "Chancellor of the Realm",
        "className": "Lower 1st Class",
        "effect": "Politics + 12",
        "bonus": 12,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Left Minister",
        "japanese": "左大臣",
        "translation": "Minister of the Left",
        "className": "Upper 2nd Class",
        "effect": "Politics + 11",
        "bonus": 11,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Right Minister",
        "japanese": "右大臣",
        "translation": "Minister of the Right",
        "className": "Upper 2nd Class",
        "effect": "Politics + 11",
        "bonus": 11,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Interior Minister",
        "japanese": "内大臣",
        "translation": "Inner Minister",
        "className": "Lower 2nd Class",
        "effect": "Politics + 11",
        "bonus": 11,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Grand Duke",
        "japanese": "蔵人別当",
        "translation": "Superintendent of the Chamberlain Office",
        "className": "Lower 2nd Class",
        "effect": "Politics + 11",
        "bonus": 11,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Archduke",
        "japanese": "大納言",
        "translation": "Great Councillor",
        "className": "Upper 3rd Class",
        "effect": "Politics + 10",
        "bonus": 10,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Duke",
        "japanese": "権大納言",
        "translation": "Provisional Great Councillor",
        "className": "Upper 3rd Class",
        "effect": "Politics + 10",
        "bonus": 10,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Grand Marshal",
        "japanese": "中納言",
        "translation": "Middle Councillor",
        "className": "Lower 3rd Class",
        "effect": "Politics + 10",
        "bonus": 10,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Field Marshal",
        "japanese": "権中納言",
        "translation": "Provisional Middle Councillor",
        "className": "Lower 3rd Class",
        "effect": "Politics + 10",
        "bonus": 10,
        "count": 4,
        "category": "Imperial Court"
    },
    {
        "name": "Supreme Commander",
        "japanese": "弾正尹",
        "translation": "Director of the Censors",
        "className": "Lower 3rd Class",
        "effect": "Politics + 10",
        "bonus": 10,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Western Commander",
        "japanese": "左近衛大将",
        "translation": "Major Captain of the Left Inner Palace Guard",
        "className": "Lower 3rd Class",
        "effect": "Politics + 10",
        "bonus": 10,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Eastern Commander",
        "japanese": "右近衛大将",
        "translation": "Major Captain of the Right Inner Palace Guard",
        "className": "Lower 3rd Class",
        "effect": "Politics + 10",
        "bonus": 10,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Chief Strategist",
        "japanese": "太宰帥",
        "translation": "Governor-General of Dazaifu",
        "className": "Lower 3rd Class",
        "effect": "Politics + 10",
        "bonus": 10,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Strategist",
        "japanese": "中務卿",
        "translation": "Minister of Central Affairs",
        "className": "Upper 4th Class",
        "effect": "Politics + 9",
        "bonus": 9,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Senior Minister",
        "japanese": "参議",
        "translation": "Councillor",
        "className": "Lower 4th Class",
        "effect": "Politics + 9",
        "bonus": 9,
        "count": 6,
        "category": "Imperial Court"
    },
    {
        "name": "Policy Minister",
        "japanese": "式部卿",
        "translation": "Minister of Ceremonial Affairs",
        "className": "Lower 4th Class",
        "effect": "Politics + 9",
        "bonus": 9,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Political Minister",
        "japanese": "治部卿",
        "translation": "Minister of Civil Administration",
        "className": "Lower 4th Class",
        "effect": "Politics + 9",
        "bonus": 9,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Civil Minister",
        "japanese": "民部卿",
        "translation": "Minister of Popular Affairs",
        "className": "Lower 4th Class",
        "effect": "Politics + 9",
        "bonus": 9,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Defense Minister",
        "japanese": "兵部卿",
        "translation": "Minister of Military Affairs",
        "className": "Lower 4th Class",
        "effect": "Politics + 9",
        "bonus": 9,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Judicial Minister",
        "japanese": "刑部卿",
        "translation": "Minister of Justice",
        "className": "Lower 4th Class",
        "effect": "Politics + 9",
        "bonus": 9,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Logistical Minister",
        "japanese": "大蔵卿",
        "translation": "Minister of Treasury",
        "className": "Lower 4th Class",
        "effect": "Politics + 9",
        "bonus": 9,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Imperial Minister",
        "japanese": "宮内卿",
        "translation": "Minister of Imperial Household",
        "className": "Lower 4th Class",
        "effect": "Politics + 9",
        "bonus": 9,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Left Administrator",
        "japanese": "左大弁",
        "translation": "Major Controller of the Left",
        "className": "Upper 5th Class",
        "effect": "Politics + 8",
        "bonus": 8,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Right Administrator",
        "japanese": "右大弁",
        "translation": "Major Controller of the Right",
        "className": "Upper 5th Class",
        "effect": "Politics + 8",
        "bonus": 8,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Deputy Minister",
        "japanese": "蔵人頭",
        "translation": "Head Chamberlain",
        "className": "Upper 5th Class",
        "effect": "Politics + 8",
        "bonus": 8,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Capital Minister",
        "japanese": "左京大夫",
        "translation": "Director of the Left Capital Office",
        "className": "Lower 5th Class",
        "effect": "Politics + 8",
        "bonus": 8,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Capital Minister",
        "japanese": "右京大夫",
        "translation": "Director of the Right Capital Office",
        "className": "Lower 5th Class",
        "effect": "Politics + 8",
        "bonus": 8,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Supreme General",
        "japanese": "弾正大弼",
        "translation": "Senior Assistant Director of the Censors",
        "className": "Lower 5th Class",
        "effect": "Politics + 8",
        "bonus": 8,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Cavalier General",
        "japanese": "左近衛中将",
        "translation": "Middle Captain of the Left Inner Palace Guard",
        "className": "Lower 5th Class",
        "effect": "Politics + 8",
        "bonus": 8,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Brigadier General",
        "japanese": "左近衛権中将",
        "translation": "Provisional Middle Captain of the Left Inner Palace Guard",
        "className": "Lower 5th Class",
        "effect": "Politics + 8",
        "bonus": 8,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Dragon General",
        "japanese": "右近衛中将",
        "translation": "Middle Captain of the Right Inner Palace Guard",
        "className": "Lower 5th Class",
        "effect": "Politics + 8",
        "bonus": 8,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Tiger General",
        "japanese": "右近衛権中将",
        "translation": "Provisional Middle Captain of the Right Inner Palace Guard",
        "className": "Lower 5th Class",
        "effect": "Politics + 8",
        "bonus": 8,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Fire General",
        "japanese": "左衛門督",
        "translation": "Head of the Left Palace Gate Guard",
        "className": "Lower 5th Class",
        "effect": "Politics + 8",
        "bonus": 8,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Water General",
        "japanese": "右衛門督",
        "translation": "Head of the Right Palace Gate Guard",
        "className": "Lower 5th Class",
        "effect": "Politics + 8",
        "bonus": 8,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Wind General",
        "japanese": "左兵衛督",
        "translation": "Head of the Left Military Guard",
        "className": "Lower 5th Class",
        "effect": "Politics + 8",
        "bonus": 8,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Earth General",
        "japanese": "右兵衛督",
        "translation": "Head of the Right Military Guard",
        "className": "Lower 5th Class",
        "effect": "Politics + 8",
        "bonus": 8,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Fore General",
        "japanese": "太宰大弐",
        "translation": "Senior Deputy Governor-General of Dazaifu",
        "className": "Lower 5th Class",
        "effect": "Politics + 8",
        "bonus": 8,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Rear General",
        "japanese": "勘解由長官",
        "translation": "Director of the Audit Office",
        "className": "Lower 5th Class",
        "effect": "Politics + 8",
        "bonus": 8,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Left General",
        "japanese": "左中弁",
        "translation": "Middle Controller of the Left",
        "className": "Upper 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Right General",
        "japanese": "右中弁",
        "translation": "Middle Controller of the Right",
        "className": "Upper 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Central General",
        "japanese": "中務大輔",
        "translation": "Senior Assistant Minister of Central Affairs",
        "className": "Upper 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Border General",
        "japanese": "大膳大夫",
        "translation": "Director of the Imperial Table Bureau",
        "className": "Upper 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Reserve General",
        "japanese": "修理大夫",
        "translation": "Director of the Repairs Office",
        "className": "Upper 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Infantry General",
        "japanese": "太宰少弐",
        "translation": "Junior Deputy Governor-General of Dazaifu",
        "className": "Upper 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Chief of Records",
        "japanese": "左少弁",
        "translation": "Minor Controller of the Left",
        "className": "Lower 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Chief of Records",
        "japanese": "右少弁",
        "translation": "Minor Controller of the Right",
        "className": "Lower 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Policy Administrator",
        "japanese": "式部大輔",
        "translation": "Senior Assistant Minister of Ceremonial Affairs",
        "className": "Lower 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Political Administrator",
        "japanese": "治部大輔",
        "translation": "Senior Assistant Minister of Civil Administration",
        "className": "Lower 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Civil Administrator",
        "japanese": "民部大輔",
        "translation": "Senior Assistant Minister of Popular Affairs",
        "className": "Lower 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Defense Administrator",
        "japanese": "兵部大輔",
        "translation": "Senior Assistant Minister of Military Affairs",
        "className": "Lower 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Judicial Administrator",
        "japanese": "刑部大輔",
        "translation": "Senior Assistant Minister of Justice",
        "className": "Lower 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Logistical Administrator",
        "japanese": "大蔵大輔",
        "translation": "Senior Assistant Minister of Treasury",
        "className": "Lower 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Imperial Administrator",
        "japanese": "宮内大輔",
        "translation": "Senior Assistant Minister of Imperial Household",
        "className": "Lower 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Artillery Captain",
        "japanese": "弾正少弼",
        "translation": "Junior Assistant Director of the Censors",
        "className": "Lower 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Campaign Captain",
        "japanese": "左近衛少将",
        "translation": "Minor Captain of the Left Inner Palace Guard",
        "className": "Lower 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Tactical Captain",
        "japanese": "左近衛権少将",
        "translation": "Provisional Minor Captain of the Left Inner Palace Guard",
        "className": "Lower 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Horse Captain",
        "japanese": "右近衛少将",
        "translation": "Minor Captain of the Right Inner Palace Guard",
        "className": "Lower 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Foot Captain",
        "japanese": "右近衛権少将",
        "translation": "Provisional Minor Captain of the Right Inner Palace Guard",
        "className": "Lower 6th Class",
        "effect": "Politics + 7",
        "bonus": 7,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Scribe Captain",
        "japanese": "中務少輔",
        "translation": "Junior Assistant Minister of Central Affairs",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Lieutenant Captain",
        "japanese": "帯刀先生",
        "translation": "Chief of the Crown Prince's Sword-Bearers",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Domestic Administrator",
        "japanese": "大舎人頭",
        "translation": "Director of the Bureau of Imperial Attendants",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Research Administrator",
        "japanese": "図書頭",
        "translation": "Director of the Bureau of Books",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Medical Administrator",
        "japanese": "内匠頭",
        "translation": "Director of the Bureau of Skilled Artisans",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Education Administrator",
        "japanese": "大学頭",
        "translation": "Director of the Imperial University",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Cultural Administrator",
        "japanese": "雅楽頭",
        "translation": "Director of the Bureau of Court Music",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Agriculture Administrator",
        "japanese": "玄蕃頭",
        "translation": "Director of the Bureau of Monastic and Foreign Affairs",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Accounting Administrator",
        "japanese": "主計頭",
        "translation": "Director of the Bureau of Accounting",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Taxation Administrator",
        "japanese": "主税頭",
        "translation": "Director of the Bureau of Taxation",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Construction Administrator",
        "japanese": "木工頭",
        "translation": "Director of the Bureau of Carpentry",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Military Administrator",
        "japanese": "左馬頭",
        "translation": "Director of the Left Bureau of Horses",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Munitions Administrator",
        "japanese": "右馬頭",
        "translation": "Director of the Right Bureau of Horses",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Provisions Administrator",
        "japanese": "兵庫頭",
        "translation": "Director of the Arsenal Bureau",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Interior Secretary",
        "japanese": "左衛門佐",
        "translation": "Assistant Head of the Left Palace Gate Guard",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Interior Secretary",
        "japanese": "右衛門佐",
        "translation": "Assistant Head of the Right Palace Gate Guard",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Undersecretary",
        "japanese": "左兵衛佐",
        "translation": "Assistant Head of the Left Military Guard",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Undersecretary",
        "japanese": "右兵衛佐",
        "translation": "Assistant Head of the Right Military Guard",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Yamato Prefect",
        "japanese": "大和守",
        "translation": "Governor of Yamato",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Kawachi Prefect",
        "japanese": "河内守",
        "translation": "Governor of Kawachi",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Ise Prefect",
        "japanese": "伊勢守",
        "translation": "Governor of Ise",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Musashi Prefect",
        "japanese": "武蔵守",
        "translation": "Governor of Musashi",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Shimōsa Prefect",
        "japanese": "下総守",
        "translation": "Governor of Shimōsa",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Ōmi Prefect",
        "japanese": "近江守",
        "translation": "Governor of Ōmi",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Mutsu Prefect",
        "japanese": "陸奥守",
        "translation": "Governor of Mutsu",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Echizen Prefect",
        "japanese": "越前守",
        "translation": "Governor of Echizen",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Harima Prefect",
        "japanese": "播磨守",
        "translation": "Governor of Harima",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Higo Prefect",
        "japanese": "肥後守",
        "translation": "Governor of Higo",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Royal Escort Captain",
        "japanese": "五位蔵人",
        "translation": "Fifth-Rank Chamberlain",
        "className": "Upper 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 3,
        "category": "Imperial Court"
    },
    {
        "name": "Chamberlain",
        "japanese": "侍従",
        "translation": "Chamberlain",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 8,
        "category": "Imperial Court"
    },
    {
        "name": "Escort Captain",
        "japanese": "大監物",
        "translation": "Senior Palace Controller",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Senior Supervisor",
        "japanese": "式部少輔",
        "translation": "Junior Assistant Minister of Ceremonial Affairs",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Political Supervisor",
        "japanese": "治部少輔",
        "translation": "Junior Assistant Minister of Civil Administration",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Civil Supervisor",
        "japanese": "民部少輔",
        "translation": "Junior Assistant Minister of Popular Affairs",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Defense Supervisor",
        "japanese": "兵部少輔",
        "translation": "Junior Assistant Minister of Military Affairs",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Judicial Supervisor",
        "japanese": "刑部少輔",
        "translation": "Junior Assistant Minister of Justice",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Logistical Supervisor",
        "japanese": "大蔵少輔",
        "translation": "Junior Assistant Minister of Treasury",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Imperial Supervisor",
        "japanese": "宮内少輔",
        "translation": "Junior Assistant Minister of Imperial Household",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Capital Administrator",
        "japanese": "左京亮",
        "translation": "Deputy Director of the Left Capital Office",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Capital Administrator",
        "japanese": "右京亮",
        "translation": "Deputy Director of the Right Capital Office",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Border Administrator",
        "japanese": "大膳亮",
        "translation": "Deputy Director of the Imperial Table Bureau",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Reserve Administrator",
        "japanese": "修理亮",
        "translation": "Deputy Director of the Repairs Office",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Interior Administrator",
        "japanese": "内蔵頭",
        "translation": "Director of the Bureau of Palace Storehouses",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Exterior Administrator",
        "japanese": "縫殿頭",
        "translation": "Director of the Bureau of the Wardrobe and Court Ladies",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Finance Administrator",
        "japanese": "大炊頭",
        "translation": "Director of the Bureau of Palace Food Supplies",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Commerce Administrator",
        "japanese": "主殿頭",
        "translation": "Director of the Palace Maintenance Bureau",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Civil Administrator",
        "japanese": "掃部頭",
        "translation": "Director of the Palace Housekeeping Bureau",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Captain",
        "japanese": "勘解由次官",
        "translation": "Deputy Director of the Audit Office",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Yamashiro Prefect",
        "japanese": "山城守",
        "translation": "Governor of Yamashiro",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Settsuno Prefect",
        "japanese": "摂津守",
        "translation": "Governor of Settsu",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Owari Prefect",
        "japanese": "尾張守",
        "translation": "Governor of Owari",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Mikawa Prefect",
        "japanese": "三河守",
        "translation": "Governor of Mikawa",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Tōtōmi Prefect",
        "japanese": "遠江守",
        "translation": "Governor of Tōtōmi",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Suruga Prefect",
        "japanese": "駿河守",
        "translation": "Governor of Suruga",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Kai Prefect",
        "japanese": "甲斐守",
        "translation": "Governor of Kai",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Sagami Prefect",
        "japanese": "相模守",
        "translation": "Governor of Sagami",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Mino Prefect",
        "japanese": "美濃守",
        "translation": "Governor of Mino",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Shinano Prefect",
        "japanese": "信濃守",
        "translation": "Governor of Shinano",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Shimotsuke Prefect",
        "japanese": "下野守",
        "translation": "Governor of Shimotsuke",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Dewa Prefect",
        "japanese": "出羽守",
        "translation": "Governor of Dewa",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Kaga Prefect",
        "japanese": "加賀守",
        "translation": "Governor of Kaga",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Etchū Prefect",
        "japanese": "越中守",
        "translation": "Governor of Etchū",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Echigo Prefect",
        "japanese": "越後守",
        "translation": "Governor of Echigo",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Tanba Prefect",
        "japanese": "丹波守",
        "translation": "Governor of Tanba",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Tajima Prefect",
        "japanese": "但馬守",
        "translation": "Governor of Tajima",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Inaba Prefect",
        "japanese": "因幡守",
        "translation": "Governor of Inaba",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Hōki Prefect",
        "japanese": "伯耆守",
        "translation": "Governor of Hōki",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Izumo Prefect",
        "japanese": "出雲守",
        "translation": "Governor of Izumo",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Mimasaka Prefect",
        "japanese": "美作守",
        "translation": "Governor of Mimasaka",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Bizen Prefect",
        "japanese": "備前守",
        "translation": "Governor of Bizen",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Bicchū Prefect",
        "japanese": "備中守",
        "translation": "Governor of Bicchū",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Bingo Prefect",
        "japanese": "備後守",
        "translation": "Governor of Bingo",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Aki Prefect",
        "japanese": "安芸守",
        "translation": "Governor of Aki",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Suō Prefect",
        "japanese": "周防守",
        "translation": "Governor of Suō",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Kii Prefect",
        "japanese": "紀伊守",
        "translation": "Governor of Kii",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Awa Prefect",
        "japanese": "阿波守",
        "translation": "Governor of Awa",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Sanuki Prefect",
        "japanese": "讃岐守",
        "translation": "Governor of Sanuki",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Iyo Prefect",
        "japanese": "伊予守",
        "translation": "Governor of Iyo",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Chikuzen Prefect",
        "japanese": "筑前守",
        "translation": "Governor of Chikuzen",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Chikugo Prefect",
        "japanese": "筑後守",
        "translation": "Governor of Chikugo",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Hizen Prefect",
        "japanese": "肥前守",
        "translation": "Governor of Hizen",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Buzen Prefect",
        "japanese": "豊前守",
        "translation": "Governor of Buzen",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Bungo Prefect",
        "japanese": "豊後守",
        "translation": "Governor of Bungo",
        "className": "Lower 7th Class",
        "effect": "Politics + 6",
        "bonus": 6,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Senior Secretary",
        "japanese": "大外記",
        "translation": "Senior Recorder of the Council of State",
        "className": "Upper 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Left Secretary",
        "japanese": "左大史",
        "translation": "Senior Recorder of the Left",
        "className": "Upper 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Right Secretary",
        "japanese": "右大史",
        "translation": "Senior Recorder of the Right",
        "className": "Upper 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Junior Secretary",
        "japanese": "中務大丞",
        "translation": "Senior Secretary, Ministry of Central Affairs",
        "className": "Upper 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Secretary",
        "japanese": "大内記",
        "translation": "Senior Imperial Secretary",
        "className": "Upper 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Secretary",
        "japanese": "内蔵正",
        "translation": "Director of the Palace Storehouse Office",
        "className": "Upper 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Secretary",
        "japanese": "正親正",
        "translation": "Director of the Imperial Genealogy Office",
        "className": "Upper 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Secretary",
        "japanese": "内膳正",
        "translation": "Director of the Imperial Kitchens",
        "className": "Upper 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Senior Lieutenant",
        "japanese": "奉膳",
        "translation": "Imperial Food Steward",
        "className": "Upper 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Junior Lieutenant",
        "japanese": "造酒正",
        "translation": "Director of the Sake Brewing Office",
        "className": "Upper 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "East Lieutenant",
        "japanese": "東市正",
        "translation": "Director of the East Market Office",
        "className": "Upper 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "West Lieutenant",
        "japanese": "西市正",
        "translation": "Director of the West Market Office",
        "className": "Upper 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Artillery Lieutenant",
        "japanese": "弾正大忠",
        "translation": "Senior Secretary of the Censors",
        "className": "Upper 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Left Lieutenant",
        "japanese": "左近将監",
        "translation": "Lieutenant of the Left Inner Palace Guard",
        "className": "Upper 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Right Lieutenant",
        "japanese": "右近将監",
        "translation": "Lieutenant of the Right Inner Palace Guard",
        "className": "Upper 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Senior Advisor",
        "japanese": "式部大丞",
        "translation": "Senior Secretary, Ministry of Ceremonial Affairs",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Political Advisor",
        "japanese": "治部大丞",
        "translation": "Senior Secretary, Ministry of Civil Administration",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Civil Advisor",
        "japanese": "民部大丞",
        "translation": "Senior Secretary, Ministry of Popular Affairs",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Defense Advisor",
        "japanese": "兵部大丞",
        "translation": "Senior Secretary, Ministry of Military Affairs",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Judicial Advisor",
        "japanese": "刑部大丞",
        "translation": "Senior Secretary, Ministry of Justice",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Logistical Advisor",
        "japanese": "大蔵大丞",
        "translation": "Senior Secretary, Ministry of Treasury",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Imperial Advisor",
        "japanese": "宮内大丞",
        "translation": "Senior Secretary, Ministry of Imperial Household",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Domestic Chief",
        "japanese": "大舎人助",
        "translation": "Assistant Director of the Bureau of Imperial Attendants",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Research Chief",
        "japanese": "図書助",
        "translation": "Assistant Director of the Bureau of Books",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Medical Chief",
        "japanese": "内匠助",
        "translation": "Assistant Director of the Bureau of Skilled Artisans",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Education Chief",
        "japanese": "大学助",
        "translation": "Assistant Director of the Imperial University",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Cultural Chief",
        "japanese": "雅楽助",
        "translation": "Assistant Director of the Bureau of Court Music",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Agriculture Chief",
        "japanese": "玄蕃助",
        "translation": "Assistant Director of the Bureau of Monastic and Foreign Affairs",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Accounting Chief",
        "japanese": "主計助",
        "translation": "Assistant Director of the Bureau of Accounting",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Taxation Chief",
        "japanese": "主税助",
        "translation": "Assistant Director of the Bureau of Taxation",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Construction Chief",
        "japanese": "木工助",
        "translation": "Assistant Director of the Bureau of Carpentry",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Military Chief",
        "japanese": "左馬助",
        "translation": "Assistant Director of the Left Bureau of Horses",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Munitions Chief",
        "japanese": "右馬助",
        "translation": "Assistant Director of the Right Bureau of Horses",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Provisions Chief",
        "japanese": "兵庫助",
        "translation": "Assistant Director of the Arsenal Bureau",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Senior Emissary",
        "japanese": "隼人正",
        "translation": "Director of the Hayato Office",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Junior Emissary",
        "japanese": "織部正",
        "translation": "Director of the Weaving Office",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Foreign Emissary",
        "japanese": "釆女正",
        "translation": "Director of the Palace Attendants Office",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Sergeant at Arms",
        "japanese": "弾正少忠",
        "translation": "Junior Secretary of the Censors",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Senior Sergeant",
        "japanese": "上総介",
        "translation": "Vice-Governor of Kazusa",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Sergeant",
        "japanese": "常陸介",
        "translation": "Vice-Governor of Hitachi",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Junior Sergeant",
        "japanese": "上野介",
        "translation": "Vice-Governor of Kōzuke",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Awa Prefect",
        "japanese": "安房守",
        "translation": "Governor of Awa",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Wakasa Prefect",
        "japanese": "若狭守",
        "translation": "Governor of Wakasa",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Noto Prefect",
        "japanese": "能登守",
        "translation": "Governor of Noto",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Sado Prefect",
        "japanese": "佐渡守",
        "translation": "Governor of Sado",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Tango Prefect",
        "japanese": "丹後守",
        "translation": "Governor of Tango",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Iwami Prefect",
        "japanese": "石見守",
        "translation": "Governor of Iwami",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Nagato Prefect",
        "japanese": "長門守",
        "translation": "Governor of Nagato",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Tosa Prefect",
        "japanese": "土佐守",
        "translation": "Governor of Tosa",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Hyūga Prefect",
        "japanese": "日向守",
        "translation": "Governor of Hyūga",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Ōsumi Prefect",
        "japanese": "大隅守",
        "translation": "Governor of Ōsumi",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Satsuma Prefect",
        "japanese": "薩摩守",
        "translation": "Governor of Satsuma",
        "className": "Lower 8th Class",
        "effect": "Politics + 5",
        "bonus": 5,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Administrative Assistant",
        "japanese": "中務少丞",
        "translation": "Junior Secretary, Ministry of Central Affairs",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Senior Assistant",
        "japanese": "式部少丞",
        "translation": "Junior Secretary, Ministry of Ceremonial Affairs",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Political Assistant",
        "japanese": "治部少丞",
        "translation": "Junior Secretary, Ministry of Civil Administration",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Civil Assistant",
        "japanese": "民部少丞",
        "translation": "Junior Secretary, Ministry of Popular Affairs",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Defense Assistant",
        "japanese": "兵部少丞",
        "translation": "Junior Secretary, Ministry of Military Affairs",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Judicial Assistant",
        "japanese": "刑部少丞",
        "translation": "Junior Secretary, Ministry of Justice",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Logistical Assistant",
        "japanese": "大蔵少丞",
        "translation": "Junior Secretary, Ministry of Treasury",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Imperial Assistant",
        "japanese": "宮内少丞",
        "translation": "Junior Secretary, Ministry of Imperial Household",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Interior Chief",
        "japanese": "内蔵助",
        "translation": "Assistant Director of the Bureau of Palace Storehouses",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Exterior Chief",
        "japanese": "縫殿助",
        "translation": "Assistant Director of the Bureau of the Wardrobe and Court Ladies",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Finance Chief",
        "japanese": "大炊助",
        "translation": "Assistant Director of the Bureau of Palace Food Supplies",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Commerce Chief",
        "japanese": "主殿助",
        "translation": "Assistant Director of the Palace Maintenance Bureau",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Civil Chief",
        "japanese": "掃部助",
        "translation": "Assistant Director of the Palace Housekeeping Bureau",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Artillery Sergeant",
        "japanese": "主水正",
        "translation": "Director of the Water Office",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Personnel Chief",
        "japanese": "舎人正",
        "translation": "Director of the Attendants Office",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Chief Justice",
        "japanese": "主膳正",
        "translation": "Director of the Catering Office",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Senior Justice",
        "japanese": "主蔵正",
        "translation": "Director of the Treasury Storehouse Office",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "North Corporal",
        "japanese": "左衛門大尉",
        "translation": "Senior Lieutenant of the Left Palace Gate Guard",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 3,
        "category": "Imperial Court"
    },
    {
        "name": "South Corporal",
        "japanese": "右衛門大尉",
        "translation": "Senior Lieutenant of the Right Palace Gate Guard",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 3,
        "category": "Imperial Court"
    },
    {
        "name": "West Corporal",
        "japanese": "左兵衛大尉",
        "translation": "Senior Lieutenant of the Left Military Guard",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 3,
        "category": "Imperial Court"
    },
    {
        "name": "East Corporal",
        "japanese": "右兵衛大尉",
        "translation": "Senior Lieutenant of the Right Military Guard",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 3,
        "category": "Imperial Court"
    },
    {
        "name": "Corporal",
        "japanese": "秋田城介",
        "translation": "Deputy Commander of Akita Castle",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Junior Corporal",
        "japanese": "六位蔵人",
        "translation": "Sixth-Rank Chamberlain",
        "className": "Upper 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 3,
        "category": "Imperial Court"
    },
    {
        "name": "Capital Chief",
        "japanese": "左京大進",
        "translation": "Senior Secretary of the Left Capital Office",
        "className": "Lower 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Capital Chief",
        "japanese": "右京大進",
        "translation": "Senior Secretary of the Right Capital Office",
        "className": "Lower 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Border Chief",
        "japanese": "大膳大進",
        "translation": "Senior Secretary of the Imperial Table Bureau",
        "className": "Lower 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Reserve Chief",
        "japanese": "修理大進",
        "translation": "Senior Secretary of the Repairs Office",
        "className": "Lower 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Senior Officer",
        "japanese": "主殿首",
        "translation": "Chief of the Palace Maintenance Office",
        "className": "Lower 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Junior Officer",
        "japanese": "主工首",
        "translation": "Chief of the Crafts Office",
        "className": "Lower 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Cavalry Officer",
        "japanese": "主馬首",
        "translation": "Chief of the Horse Office",
        "className": "Lower 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Baliff",
        "japanese": "勘解由判官",
        "translation": "Secretary of the Audit Office",
        "className": "Lower 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Izumi Prefect",
        "japanese": "和泉守",
        "translation": "Governor of Izumi",
        "className": "Lower 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Iga Prefect",
        "japanese": "伊賀守",
        "translation": "Governor of Iga",
        "className": "Lower 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Shima Prefect",
        "japanese": "志摩守",
        "translation": "Governor of Shima",
        "className": "Lower 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Izu Prefect",
        "japanese": "伊豆守",
        "translation": "Governor of Izu",
        "className": "Lower 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Hida Prefect",
        "japanese": "飛騨守",
        "translation": "Governor of Hida",
        "className": "Lower 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Oki Prefect",
        "japanese": "隠岐守",
        "translation": "Governor of Oki",
        "className": "Lower 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Awaji Prefect",
        "japanese": "淡路守",
        "translation": "Governor of Awaji",
        "className": "Lower 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Iki Prefect",
        "japanese": "壱岐守",
        "translation": "Governor of Iki",
        "className": "Lower 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Tsushima Prefect",
        "japanese": "対馬守",
        "translation": "Governor of Tsushima",
        "className": "Lower 9th Class",
        "effect": "Politics + 4",
        "bonus": 4,
        "count": 1,
        "category": "Provincial Office"
    },
    {
        "name": "Records Officer",
        "japanese": "少外記",
        "translation": "Junior Recorder of the Council of State",
        "className": "Upper 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Records Scribe",
        "japanese": "左少史",
        "translation": "Junior Recorder of the Left",
        "className": "Upper 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Records Scribe",
        "japanese": "右少史",
        "translation": "Junior Recorder of the Right",
        "className": "Upper 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Internal Scribe",
        "japanese": "少内記",
        "translation": "Junior Imperial Secretary",
        "className": "Upper 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Capital Supervisor",
        "japanese": "左京少進",
        "translation": "Junior Secretary of the Left Capital Office",
        "className": "Upper 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Capital Supervisor",
        "japanese": "右京少進",
        "translation": "Junior Secretary of the Right Capital Office",
        "className": "Upper 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Border Supervisor",
        "japanese": "大膳少進",
        "translation": "Junior Secretary of the Imperial Table Bureau",
        "className": "Upper 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Reserve Supervisor",
        "japanese": "修理少進",
        "translation": "Junior Secretary of the Repairs Office",
        "className": "Upper 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Military Supervisor",
        "japanese": "左馬大允",
        "translation": "Senior Secretary of the Left Bureau of Horses",
        "className": "Upper 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Munitions Supervisor",
        "japanese": "右馬大允",
        "translation": "Senior Secretary of the Right Bureau of Horses",
        "className": "Upper 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Provisions Supervisor",
        "japanese": "兵庫大允",
        "translation": "Senior Secretary of the Arsenal Bureau",
        "className": "Upper 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Senior Liaison",
        "japanese": "左衛門少尉",
        "translation": "Junior Lieutenant of the Left Palace Gate Guard",
        "className": "Upper 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 3,
        "category": "Imperial Court"
    },
    {
        "name": "Senior Liaison",
        "japanese": "右衛門少尉",
        "translation": "Junior Lieutenant of the Right Palace Gate Guard",
        "className": "Upper 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 3,
        "category": "Imperial Court"
    },
    {
        "name": "General Liaison",
        "japanese": "左兵衛少尉",
        "translation": "Junior Lieutenant of the Left Military Guard",
        "className": "Upper 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 3,
        "category": "Imperial Court"
    },
    {
        "name": "General Liaison",
        "japanese": "右兵衛少尉",
        "translation": "Junior Lieutenant of the Right Military Guard",
        "className": "Upper 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 3,
        "category": "Imperial Court"
    },
    {
        "name": "Liaison",
        "japanese": "少監物",
        "translation": "Junior Palace Controller",
        "className": "Lower 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 2,
        "category": "Imperial Court"
    },
    {
        "name": "Domestic Supervisor",
        "japanese": "大舎人大允",
        "translation": "Senior Secretary of the Bureau of Imperial Attendants",
        "className": "Lower 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Research Supervisor",
        "japanese": "図書大允",
        "translation": "Senior Secretary of the Bureau of Books",
        "className": "Lower 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Medical Supervisor",
        "japanese": "内匠大允",
        "translation": "Senior Secretary of the Bureau of Skilled Artisans",
        "className": "Lower 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Education Supervisor",
        "japanese": "大学大允",
        "translation": "Senior Secretary of the Imperial University",
        "className": "Lower 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Culture Supervisor",
        "japanese": "雅楽大允",
        "translation": "Senior Secretary of the Bureau of Court Music",
        "className": "Lower 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Agriculture Supervisor",
        "japanese": "玄蕃大允",
        "translation": "Senior Secretary of the Bureau of Monastic and Foreign Affairs",
        "className": "Lower 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Accounting Supervisor",
        "japanese": "主計大允",
        "translation": "Senior Secretary of the Bureau of Accounting",
        "className": "Lower 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Taxation Supervisor",
        "japanese": "主税大允",
        "translation": "Senior Secretary of the Bureau of Taxation",
        "className": "Lower 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Construction Supervisor",
        "japanese": "木工大允",
        "translation": "Senior Secretary of the Bureau of Carpentry",
        "className": "Lower 10th Class",
        "effect": "Politics + 3",
        "bonus": 3,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Domestic Assistant",
        "japanese": "大舎人少允",
        "translation": "Junior Secretary of the Bureau of Imperial Attendants",
        "className": "Upper 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Research Assistant",
        "japanese": "図書少允",
        "translation": "Junior Secretary of the Bureau of Books",
        "className": "Upper 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Medical Assistant",
        "japanese": "内匠少允",
        "translation": "Junior Secretary of the Bureau of Skilled Artisans",
        "className": "Upper 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Education Assistant",
        "japanese": "大学少允",
        "translation": "Junior Secretary of the Imperial University",
        "className": "Upper 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Cultural Assistant",
        "japanese": "雅楽少允",
        "translation": "Junior Secretary of the Bureau of Court Music",
        "className": "Upper 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Agriculture Assistant",
        "japanese": "玄蕃少允",
        "translation": "Junior Secretary of the Bureau of Monastic and Foreign Affairs",
        "className": "Upper 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Accounting Assistant",
        "japanese": "主計少允",
        "translation": "Junior Secretary of the Bureau of Accounting",
        "className": "Upper 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Taxation Assistant",
        "japanese": "主税少允",
        "translation": "Junior Secretary of the Bureau of Taxation",
        "className": "Upper 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Construction Assistant",
        "japanese": "木工少允",
        "translation": "Junior Secretary of the Bureau of Carpentry",
        "className": "Upper 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Military Assistant",
        "japanese": "左馬少允",
        "translation": "Junior Secretary of the Left Bureau of Horses",
        "className": "Upper 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Munitions Assistant",
        "japanese": "右馬少允",
        "translation": "Junior Secretary of the Right Bureau of Horses",
        "className": "Upper 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Provisions Assistant",
        "japanese": "兵庫少允",
        "translation": "Junior Secretary of the Arsenal Bureau",
        "className": "Upper 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Interior Supervisor",
        "japanese": "内蔵大允",
        "translation": "Senior Secretary of the Bureau of Palace Storehouses",
        "className": "Upper 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Exterior Supervisor",
        "japanese": "縫殿大允",
        "translation": "Senior Secretary of the Bureau of the Wardrobe and Court Ladies",
        "className": "Upper 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Finance Supervisor",
        "japanese": "大炊大允",
        "translation": "Senior Secretary of the Bureau of Palace Food Supplies",
        "className": "Upper 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Commerce Supervisor",
        "japanese": "主殿大允",
        "translation": "Senior Secretary of the Palace Maintenance Bureau",
        "className": "Upper 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Civil Supervisor",
        "japanese": "掃部大允",
        "translation": "Senior Secretary of the Palace Housekeeping Bureau",
        "className": "Upper 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Interior Assistant",
        "japanese": "内蔵少允",
        "translation": "Junior Secretary of the Bureau of Palace Storehouses",
        "className": "Lower 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Exterior Assistant",
        "japanese": "縫殿少允",
        "translation": "Junior Secretary of the Bureau of the Wardrobe and Court Ladies",
        "className": "Lower 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Finance Assistant",
        "japanese": "大炊少允",
        "translation": "Junior Secretary of the Bureau of Palace Food Supplies",
        "className": "Lower 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Commerce Assistant",
        "japanese": "主殿少允",
        "translation": "Junior Secretary of the Palace Maintenance Bureau",
        "className": "Lower 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Civil Assistant",
        "japanese": "掃部少允",
        "translation": "Junior Secretary of the Palace Housekeeping Bureau",
        "className": "Lower 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Internal Staffer",
        "japanese": "内蔵佑",
        "translation": "Assistant Director of the Palace Storehouse Office",
        "className": "Lower 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Internal Staffer",
        "japanese": "正親佑",
        "translation": "Assistant Director of the Imperial Genealogy Office",
        "className": "Lower 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Internal Staffer",
        "japanese": "内膳佑",
        "translation": "Assistant Director of the Imperial Kitchens",
        "className": "Lower 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Internal Staffer",
        "japanese": "典膳",
        "translation": "Deputy Imperial Food Steward",
        "className": "Lower 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Internal Staffer",
        "japanese": "造酒佑",
        "translation": "Assistant Director of the Sake Brewing Office",
        "className": "Lower 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Internal Staffer",
        "japanese": "東市佑",
        "translation": "Assistant Director of the East Market Office",
        "className": "Lower 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Internal Staffer",
        "japanese": "西市佑",
        "translation": "Assistant Director of the West Market Office",
        "className": "Lower 11th Class",
        "effect": "Politics + 2",
        "bonus": 2,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Internal Staffer",
        "japanese": "隼人佑",
        "translation": "Assistant Director of the Hayato Office",
        "className": "Upper 12th Class",
        "effect": "Politics + 1",
        "bonus": 1,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Internal Staffer",
        "japanese": "織部佑",
        "translation": "Assistant Director of the Weaving Office",
        "className": "Upper 12th Class",
        "effect": "Politics + 1",
        "bonus": 1,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Internal Staffer",
        "japanese": "釆女佑",
        "translation": "Assistant Director of the Palace Attendants Office",
        "className": "Upper 12th Class",
        "effect": "Politics + 1",
        "bonus": 1,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Internal Staffer",
        "japanese": "主水佑",
        "translation": "Assistant Director of the Water Office",
        "className": "Lower 12th Class",
        "effect": "Politics + 1",
        "bonus": 1,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Internal Staffer",
        "japanese": "舎人佑",
        "translation": "Assistant Director of the Attendants Office",
        "className": "Lower 12th Class",
        "effect": "Politics + 1",
        "bonus": 1,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Internal Staffer",
        "japanese": "主膳佑",
        "translation": "Assistant Director of the Catering Office",
        "className": "Lower 12th Class",
        "effect": "Politics + 1",
        "bonus": 1,
        "count": 1,
        "category": "Imperial Court"
    },
    {
        "name": "Internal Staffer",
        "japanese": "主蔵佑",
        "translation": "Assistant Director of the Treasury Storehouse Office",
        "className": "Lower 12th Class",
        "effect": "Politics + 1",
        "bonus": 1,
        "count": 1,
        "category": "Imperial Court"
    }
] satisfies ReferenceEntry[];
