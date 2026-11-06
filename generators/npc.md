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
| 00-11, 100 | {{pick: Triton \| Orog \| Tiefling \| Elf}}                                         |
| 12-22      | {{pick: Imp \| Gnome \| Goblin \| Genasi (earth/water/fire/air)}}                   |
| 23-33      | {{pick: Warforged (acid/water/fire/lightning) \| Titanborne \| Duarling \| Dwarf}}  |
| 34-44      | {{pick: Human \| Centaur \| Changeling \| Bugbear}}                                 |
| 45-55      | {{pick: Entling \| Dragonkin \| Lizardfolk \| Kobold}}                              |
| 56-66      | {{pick: Fae \| Satyr \| Tabaxi \| Roo}}                                             |
| 67-77      | {{pick: Apeling \| Amazon \| Shelled Elemental (earth/water/fire/air) \| Etterkin}} |
| 78-88      | {{pick: Kenku \| Qualf \| Tortle \| Moonfolk}}                                      |
| 89-99      | {{pick: Animated Armor \| Halfling \| Hippofolk \| Aarakocra}}                      |

### class

_a class from the NPC's house (see [classes](/compendium/classes.md))._

| house           | 1-6                |
| --------------- | ------------------ |
| FRT - Fortitude | Builder            |
| CHG - Change    | Pathfinder         |
| KNO - Knowledge | Medic              |
| NTG - Integrity | Warden             |
| CHR - Charm     | Artisan            |
| choose manually | pick a house first |
