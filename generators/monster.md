# Generate Monster

Creatures are Katharra's own fauna (see the wiki bestiary, `entities/fauna_and_beasts`). Per canon, wildlife exploits thaumic laws _biologically_ — they don't channel Founts — so they're rolled by creature, not by house.

## steps

| die    | label             | depends |
| ------ | ----------------- | ------- |
| `1d10` | encounter_purpose |         |
| `1d10` | creature          |         |
| `1d6`  | number            |         |

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

_the Katharra bestiary. Stats and tiers are in the [monster manual](/MONSTER-MANUAL.md)._

| roll | result                                                                                                                                                                                                                                                                                                                                                                                  |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1-10 | {{pick: bramilla \| bumbleboar \| cairnbeak \| cindral \| denonia \| drudge \| fezzle \| gnomad \| grubbler \| knibblet \| krailgoat \| lodelark \| midgemire \| miregrub \| salamandarin \| shirrak beetle \| skithfish \| spindlebeast \| stranglemaw \| tallowtail \| thritch \| thrumble \| thrumling \| timberback \| veloom \| vuun \| whiffle \| whimblight \| whimwick \| whirrel \| wogget}} |

<!-- ponytail: flat roster. Each MONSTER-MANUAL.md entry has a Habitat line,
     so this can be re-keyed by region and climate when biome rolls need it. -->

### number

_how many, set by the creature's tier in the [monster manual](/MONSTER-MANUAL.md). For a first party, never more than one capable enemy per character._

| roll | result                                                                                              |
| ---- | --------------------------------------------------------------------------------------------------- |
| 1-4  | fragile: a group of one per character + 1d4 · capable: one, plus one per two characters · dangerous: one |
| 5-6  | fragile: a group of one per character + 1d4 · capable: one per character · dangerous: one             |
