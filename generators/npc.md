# Generate NPC

Quick, concrete NPC: a Fount (personality descriptor), a race, and an archetype drawn from that Fount. Then give them a want and a reaction.

## steps

| die     | label | depends |
| ------- | ----- | ------- |
| `1d6`   | fount |         |
| `1d100` | race  |         |
| `1d6`   | archetype | fount   |

<!-- ponytail: race table are duplicated from generators/player (the
     source of truth) because the DM-aid tool parses each file standalone. Two
     shared tables isn't worth an include mechanism - sync by hand if they change. -->

### fount

_use as a descriptor for the NPC's vibe; NPCs have Founts, not stats._

| roll | result          |
| ---- | --------------- |
| 1    | ᛄ Seron — Integrity |
| 2    | ∵ Orvik — Knowledge |
| 3    | ϟ Zhark — Change    |
| 4    | △ Drun — Fortitude  |
| 5    | ⌘ Veyra — Charm     |
| 6    | choose manually |

### race

_one race from the rolled bracket._

| roll       | result                                                                              |
| ---------- | ----------------------------------------------------------------------------------- |
| 00-11, 100 | {{pick: Hornborn \| Elf \| Kethrai}}                                                |
| 12-22      | {{pick: Imp \| Gnome \| Goblin \| Iskari}}                                          |
| 23-33      | {{pick: Titanborne \| Duarling \| Dwarf \| Ravuun}}                                 |
| 34-44      | {{pick: Human \| Centaur \| Bugbear}}                                               |
| 45-55      | {{pick: Barkling \| Lizardfolk \| Kobold}}                                           |
| 56-66      | {{pick: Fae \| Satyr \| Roo}}                                                       |
| 67-77      | {{pick: Apeling \| Amazon \| Shelled Elemental (earth/water/fire/air) \| Etterkin}} |
| 78-88      | {{pick: Qualf \| Moonfolk \| Ommel \| D'varen}}                                    |
| 89-99      | {{pick: Animated Armor \| Halfling \| Hippofolk}}                                   |

### archetype

_an archetype of the NPC's Fount (see [archetypes](/compendium/archetypes.md)). NPCs who fight use a threat tier from the GM guide._

| fount               | 1-6                                          |
| ------------------- | -------------------------------------------- |
| ᛄ Seron — Integrity | {{pick: Warden \| Cartographer \| Paladin}}    |
| ∵ Orvik — Knowledge | {{pick: Medic \| Tinkerer \| Loremaster}}      |
| ϟ Zhark — Change    | {{pick: Pathfinder \| Duelist \| Wildcaller}}  |
| △ Drun — Fortitude  | {{pick: Bulwark \| Delver \| Rootbound}}       |
| ⌘ Veyra — Charm     | {{pick: Bard \| Envoy \| Trickster}}           |
| choose manually     | pick a Fount first                           |
