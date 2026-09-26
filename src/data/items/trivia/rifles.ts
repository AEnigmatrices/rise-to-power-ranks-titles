import type { ItemTrivia } from '../trivia';

/**
 * Research notes for all ten items labeled Rifle in the supplied source.
 * Some are ignition types, short guns or blade/gun hybrids rather than
 * necessarily rifles with spiral-grooved barrels. Historical examples are
 * clearly distinguished from game items and post-Sengoku technology.
 */
export const rifleTrivia: Record<string, ItemTrivia> = {
    "管打式銃": {
        text: "The game’s 管打式銃 probably points to tube-lock percussion ignition, but its exact game reading and mechanism are not established. Joseph Manton patented a tube-lock in 1818 that used pre-made fulminate-filled primer tubes instead of loose pan priming; the Met preserves tube-lock pistols originally made as flintlocks and converted after 1818. This is technological context, not identification of the game weapon.",
        sources: [{ title: "The Metropolitan Museum of Art — Durs Egg tube-lock pistols", url: "https://www.metmuseum.org/art/collection/search/33346?searchField=All" }],
        scope: 'historical-context',
    },
    "雷管式銃": {
        text: "The Japanese name describes percussion-cap firearms, which ignite a shock-sensitive primer rather than relying on a burning match. Royal Armouries traces Britain’s transition from flintlock to percussion military muskets through the 1830s and 1840s. This nineteenth-century technology postdates Nobunaga’s lifetime; the game’s ‘Resounding Rifle’ label does not establish a particular European rifle or manufacturer.",
        sources: [{ title: "Royal Armouries — British Ordnance Muskets, 1830s–1840s", url: "https://shop.royalarmouries.org/products/british-ordnance-muskets-1830s-1840s-george-lovells-legacy" }],
        scope: 'historical-context',
    },
    "燧石式銃": {
        text: "燧石式 describes a flintlock ignition system: a flint held in the cock strikes steel and showers sparks into the priming pan. The Met preserves an early-nineteenth-century double-barreled flintlock gun by Nicolas Noël Boutet that was later fitted with exchangeable percussion locks and barrels. It illustrates both the earlier mechanism and how nineteenth-century owners modernized expensive firearms; neither its barrels nor its mechanism prove that the game entry is genuinely rifled.",
        sources: [{ title: "The Metropolitan Museum of Art — Boutet flintlock and percussion gun", url: "https://www.metmuseum.org/art/collection/search/24684" }],
        scope: 'historical-context',
    },
    "雷粉式銃": {
        text: "The uncommon game label 雷粉式銃 is not securely identifiable with a standard surviving firearm model or a single established technical term. As historical context, Alexander John Forsyth patented a percussion ignition system in 1807 using fulminate powder released from a sliding primer reservoir; the Met holds an example made about 1824. That is an illustrative early ‘detonating powder’ mechanism, not a verified translation or identification of the game’s Japanese label.",
        sources: [{ title: "The Metropolitan Museum of Art — Forsyth sliding-primer pistol", url: "https://www.metmuseum.org/art/collection/search/33345" }],
        scope: 'historical-context',
    },
    "ピン打式銃": {
        text: "The game’s ピン打式銃 suggests pinfire ignition, associated with self-contained cartridges carrying a protruding metal pin that the hammer struck. The Smithsonian preserves a French-made 11 mm pinfire revolver and describes it as a rifled, breech-loading firearm. This mid-nineteenth-century firing system should not be confused with the much older matchlock guns of Sengoku Japan; the item name does not identify a specific historic model.",
        sources: [{ title: "National Museum of American History — Pinfire revolver", url: "https://americanhistory.si.edu/collections/object/nmah_417979" }],
        scope: 'historical-context',
    },
    "洋式銃": {
        text: "洋式銃 is a broad Japanese term for a Western-style firearm; it does not name a single barrel, action or maker. European gunmakers used and converted several ignition systems during the nineteenth century: the Met’s Joseph Egg double-barreled pistol was made as a flintlock around 1815–20 and converted to percussion around 1825. That documented example illustrates the rapidly changing technology the broad term can cover, not a match to the game’s generic ‘Western Rifle’.",
        sources: [{ title: "The Metropolitan Museum of Art — Joseph Egg converted double-barreled pistol", url: "https://www.metmuseum.org/art/collection/search/29382" }],
        scope: 'historical-context',
    },
    "朝鮮短筒": {
        text: "The Japanese name literally denotes a short Korean firearm, but the game’s ‘Korean Rifle’ classification and European origin field do not establish its historical manufacture or rifling. The National Museum of Korea preserves Joseon-era matchlock guns, including an iron musket excavated from Eumseong County measuring 104.5 cm long. That is evidence of historical Korean gunmaking, not proof of a surviving specimen corresponding to the game’s ‘short gun’.",
        sources: [{ title: "National Museum of Korea — Joseon matchlock musket", url: "https://www.museum.go.kr/ENG/contents/E0402000000.do?relicId=8201&schM=view&searchId=search" }],
        scope: 'historical-context',
    },
    "二連発手中筒": {
        text: "The name refers to a handheld firearm described as firing twice; its precise Japanese model, magazine design or surviving counterpart is not established by the game data. Comparable European guns combined two barrels or successive shots long before modern repeaters: a Met double-barreled pistol made around 1815–20 was later converted from flintlock to percussion. That example illustrates the broader design principle, not an identification of a Japanese gun.",
        sources: [{ title: "The Metropolitan Museum of Art — Joseph Egg double-barreled pistol", url: "https://www.metmuseum.org/art/collection/search/29382" }],
        scope: 'historical-context',
    },
    "匕首鉄砲": {
        text: "匕首鉄砲 literally combines a short dagger or aikuchi with a firearm. The game’s ‘Dirk Rifle’ does not establish an actual historical specimen, its barrel type or its country of manufacture. Weapon hybrids did exist: the Smithsonian preserves August Rauh’s American pinfire revolver-sword patent model, illustrating a later, very different combination of blade and firearm. The cited object is a technological parallel, not the Japanese weapon named by the game.",
        sources: [{ title: "National Museum of American History — Rauh pinfire revolver-sword patent model", url: "https://americanhistory.si.edu/collections/object/nmah_417249" }],
        scope: 'historical-context',
    },
    "脇差鉄砲": {
        text: "The name combines wakizashi, the shorter Japanese companion sword, with a gun. The British Museum documents surviving wakizashi from the Edo period, while the Smithsonian preserves a later Western firearm-and-blade hybrid in a pinfire revolver-sword patent model. Neither source documents the particular combined wakizashi-gun implied by the game: its construction, date and existence as a specific object remain unverified.",
        sources: [{ title: "British Museum — Edo-period wakizashi", url: "https://www.britishmuseum.org/collection/object/A_1952-1028-19-a-d" }],
        scope: 'historical-context',
    },
};
