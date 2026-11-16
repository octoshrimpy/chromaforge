# Generate Monster

Creatures are Katharra's own fauna (see the wiki bestiary, `entities/fauna_and_beasts`). Per canon, wildlife exploits thaumic laws _biologically_ — they don't channel Founts — so they're rolled by creature, not by house.

## steps

| die    | label             | depends |
| ------ | ----------------- | ------- |
| `1d10` | encounter_purpose |         |
| `1d10` | creature          |         |
| `1d6`  | threat            |         |

### encounter_purpose

| roll | result                                         |
| ---- | ---------------------------------------------- |
| 1    | fight ends - non-human reason                  |
| 2    | PCs feel invincible                            |
| 3    | fight ends - monster runs away - weak          |
| 4    | PCs feel strong                                |
| 5    | fight ends - monster runs away - higher orders |
| 6    | PCs feel weak                                  |
| 7    | fight ends - stronger help comes in            |
| 8    | PCs feel powerless                             |
| 9    | fight ends - rescued from strong attack        |
| 10   | PCs forced to kill                             |

### creature

_the Katharra bestiary. Descriptions live in the wiki; drill in for the statblock later._

| roll | result                                                                                                                                                                                                                                                                                                                                                                                  |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1-10 | {{pick: bramilla \| bumbleboar \| cairnbeak \| cindral \| denonia \| drudge \| fezzle \| gnomad \| grubbler \| knibblet \| krailgoat \| lodelark \| marcove horn bend \| midgemire \| salamandarin \| shirrak beetle \| skithfish \| spindlebeast \| stranglemaw \| tallowtail \| thritch \| thrumble \| timberback \| vuun \| whiffle \| whimblight \| whimwick \| whirrel \| wogget}} |

<!-- ponytail: flat roster - most wiki creatures have no biome assigned yet, so
     biome-keying would mean inventing habitats. Re-key by biome once the wiki
     assigns them. Descriptions/statblocks should migrate from the wiki bestiary
     into compendium/dm.md (whose V1 monster pool holds the old generic D&D roster). -->

### threat

_how many, and how tough. Stats for each tier (HP, armor, damage) are in the [GM guide](/GM-GUIDE.md). For a first party, never more than one capable enemy per character._

| roll | result                                                            |
| ---- | ----------------------------------------------------------------- |
| 1-2  | fragile group: one per character + 1d4, acting as one group       |
| 3-4  | capable: one, plus one per two characters                         |
| 5    | capable: one per character                                        |
| 6    | dangerous: one, with a fragile group of 1d4                       |
