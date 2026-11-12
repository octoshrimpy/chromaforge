# Generate NPC

Quick, concrete NPC: a house (personality descriptor), a race, and a class drawn from that house.

## steps

| die     | label | depends |
| ------- | ----- | ------- |
| `1d6`   | house |         |
| `1d100` | race  |         |
| `1d6`   | class | house   |

<!-- ponytail: house + race tables are duplicated from generators/player (the
     source of truth) because the DM-aid tool parses each file standalone. Two
     shared tables isn't worth an include mechanism - sync by hand if they change. -->

### house

_use as a descriptor for the NPC's vibe._

| roll | result          |
| ---- | --------------- |
| 1    | FRT - Fortitude |
| 2    | CHG - Change    |
| 3    | KNO - Knowledge |
| 4    | NTG - Integrity |
| 5    | CHR - Charm     |
| 6    | choose manually |

### race

_one race from the rolled bracket._

| roll       | result                                                                              |
| ---------- | ----------------------------------------------------------------------------------- |
| 00-11, 100 | {{pick: Tiefling \| Elf \| Kethrai}}                                                |
| 12-22      | {{pick: Imp \| Gnome \| Goblin \| Iskari}}                                          |
| 23-33      | {{pick: Titanborne \| Duarling \| Dwarf \| Ravuun}}                                 |
| 34-44      | {{pick: Human \| Centaur \| Bugbear}}                                               |
| 45-55      | {{pick: Entling \| Lizardfolk \| Kobold}}                                           |
| 56-66      | {{pick: Fae \| Satyr \| Roo}}                                                       |
| 67-77      | {{pick: Apeling \| Amazon \| Shelled Elemental (earth/water/fire/air) \| Etterkin}} |
| 78-88      | {{pick: Qualf \| Moonfolk \| Ommel \| D'varen}}                                    |
| 89-99      | {{pick: Animated Armor \| Halfling \| Hippofolk}}                                   |

### class

_a class from the NPC's house (see [archetypes](/compendium/archetypes.md))._

| house           | 1-6                |
| --------------- | ------------------ |
| FRT - Fortitude | Builder            |
| CHG - Change    | Pathfinder         |
| KNO - Knowledge | Medic              |
| NTG - Integrity | Warden             |
| CHR - Charm     | Artisan            |
| choose manually | pick a house first |
