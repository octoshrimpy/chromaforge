# Generate Monster

Creatures are Katharra's own fauna (see the wiki bestiary, `entities/fauna_and_beasts`). Per canon, wildlife exploits thaumic laws _biologically_ — they don't channel Founts — so they're rolled by creature, not by house. If any PC level is higher than 20, generate multiple (see `monster_count`).

## steps

| die    | label             | depends |
| ------ | ----------------- | ------- |
| `1d10` | encounter_purpose |         |
| `1d10` | creature          |         |
| `1d20` | monster_count     |         |

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
     into compendium/dm/monsters (which still holds the old generic D&D roster). -->

### monster_count

_1d20 for difficulty scale. To have lower difficulty, use a smaller die, down to 1d6._

| roll  | result    |
| ----- | --------- |
| 1-5   | 4 + 1d4   |
| 6-10  | 6 + 1d6   |
| 11-14 | 8 + 1d8   |
| 15-17 | 10 + 1d10 |
| 18-19 | 12 + 1d12 |
| 20    | 20 + 1d20 |

- **lone** — just the one generated creature
- **group** — 3 + 1d6
- **horde** — 15 + 1d10

## monster attack

| level  | roll for atk dmg |
| ------ | ---------------- |
| 1, 2   | 1d4              |
| 3, 4   | 1d6              |
| 5, 6   | 1d8              |
| 7, 8   | 1d10             |
| 9, 10  | 1d10 + 4         |
| 11, 12 | 1d12 + 6         |
| 13, 14 | 1d20 + 8         |
| 15, 16 | 1d10 + 10        |
| 17, 18 | 1d12 + 12        |
| 19, 20 | 1d20 + 20        |

This goes until halfway up the level scale (max 50), after which creatures start spawning in groups every time.
