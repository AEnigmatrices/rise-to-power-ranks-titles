# Item English translation audit

All **430 item rows** from the four supplied legacy HTML tables are retained in their original sequence and groupings. The separate `English translation` field is an editorial rendering of the **Japanese** field. Original English names are kept intact as historical game-reference labels, even where those labels appear mistranslated, generic, or shifted to the wrong Japanese entry.

The full row-by-row review is published as [item-translations.csv](../public/data/item-translations.csv), containing original English label, Japanese spelling, editorial translation, item group, quality, origin, effect, review status, and any unresolved note. The CSV and website both distinguish the two English fields.

## Issues surfaced by the data pass

- **Books:** the original label "Book of 5 Rings" accompanies 香取神道流書, whereas 五輪書 (*The Book of Five Rings*) is labelled "Shinto Scroll". The editorial translation follows the Japanese text.
- **Military classics:** 呉子 is *Wuzi*, while 孫子 is *The Art of War (Sunzi)*, contrary to the original "The Art of War" / "Valiant Manual" labels.
- **Historical works:** 徒然草 is *Essays in Idleness*, while the source places the English label "Essays in Idleness" against 落穂集.
- **Weapons:** the "Archer's Scroll" category contains ten 砲術書 (gunnery/firearms manuals). Its source category label is retained, but individual English renderings reflect firearms.
- **Tea:** the source calls 茄子, 肩衝, 文琳 and other tea caddies "Teapots", and calls many 茶杓 (tea scoops) "Ladles". The original categories are preserved while the translations give the object's functional type when identifiable.
- **Tea water jars:** the "Censer" group contains 阿蘭陀水指, a water jar, alongside other entries that appear to be tea water vessels. Their translations reflect the likely object type; individual uncertain identifications are marked.
- **Potential transcription errors:** 憔談治要 appears suspect; 都の is evidently incomplete; 姥口釜う may have an extraneous final kana. These original spellings are deliberately **not** replaced without checking a primary source.
- **Religious texts and titles in Arms:** 妙法蓮華経 is the Lotus Sutra; 熊野三所権現 and 妙見大菩薩 are religious designations. The source groups these among swords; those group assignments have not been rewritten.

## External spot checks

- The [National Institutes for Cultural Heritage's e-Museum](https://emuseum.nich.go.jp/detail?content_base_id=100187&content_part_id=0&content_pict_id=0&langId=ja) documents 大包平 as the named sword **Ōkanehira**, not the descriptive original label "Peacebringer."
- The [Hyōgo Prefectural Museum of Art's literary museum](https://www.artm.pref.hyogo.jp/bungaku/kikaku/musashi/) identifies 五輪書 as Musashi's *The Book of Five Rings*, confirming the source label swap described above.

These are representative confirmations, **not** external verification of every item. The 430-row CSV remains an editorial English rendering and flags unresolved cases.

## Editorial convention

* Named swords, artifacts, religious objects, individual works, and tea utensils generally retain a transliterated proper name with an explanatory gloss where helpful.
* Literal descriptive renderings are used only when the Japanese clearly supports them. Proper nouns are not converted into invented adjectives.
* `interpretive` denotes an editorial rendering rather than independently authenticated English publisher or museum nomenclature. `needs-review` flags especially obscure readings, specialist terms, or suspect source data. No entry is represented as externally `verified` without item-specific evidence.
* **No original English game label, Japanese spelling, type, quality, origin, or effect has been changed.**

## Recommended follow-up

If a Japanese manual or clean official data dump becomes available, revisit the `needs-review` rows first. Do not silently normalize the Japanese source to make it fit the original English labels.
