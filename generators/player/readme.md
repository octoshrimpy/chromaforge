> **V1 random generator, not active alpha character creation.** Use the single procedure in [the alpha guide](../../guide.md#character-creation). This page remains for generator compatibility and historical ancestry tables.

# Player Generation

Unlike most roleplaying games, in The Forge you don't have to make many choices to get a character up and running. All it takes is a couple of dice rolls and a few choices and your whole character is created!

There are Races, Race Modifiers, House, Guild, and Classes.

- **Race** is the kind of creature you are: Human, Goblin, Centaur.
- **House** is the style of knowledge your Class falls under.
- **Guild** is for a few perks, and character background.
- **Class** dictates what kind of fighting you're good at (or not!).

_Generating a character before a campaign. You can follow the instructions below or manually create a character that matches the template._

**requires:**

- 2 d6
- 1d100 (or 1d10 + 1 percentile die, or 2d10)

### instructions

1. roll `1d100`, choose a race from its bracket (if the race has a `1d4` tweak, roll that too)
2. choose one race modifier
3. roll `1d6` twice — first roll is your House, second is your Guild (on a 6, reroll or choose manually)
4. take the Class assigned to your House

---

## steps

| die     | label | depends |
| ------- | ----- | ------- |
| `1d100` | race  |         |
| `1d6`   | house |         |
| `1d6`   | class | house   |

### race

Races are divided into groups within a 100-digit bracket, read as percentile (`00`-`99`) — a natural roll of 100 reads as `00`. Roll `1d100`; the tool picks one race from the matching bracket (reroll the step for a different one, or check [compendium/races](../../compendium/races/readme.md) to choose deliberately).

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

<!-- races reconciled to compendium/races (the canonical list) — every option above exists there.
     elemental subtype (earth/water/fire/air) left as flavor text for the DM to pick. -->

### house

_roll this step twice: first roll is your House, second is your Guild. On a 6, reroll or choose manually._

| roll | result                     |
| ---- | -------------------------- |
| 1    | FRT - Fortitude            |
| 2    | CHG - Change               |
| 3    | KNO - Knowledge            |
| 4    | NTG - Integrity            |
| 5    | CHR - Charm                |
| 6    | choose manually, or reroll |

Your **House** gives you things you're good at (pros); your **Guild** gives you things you're bad at (cons). Each House has one Class (see [compendium/classes](../../compendium/classes/readme.md)).

### class

| house                      | 1-6                  |
| -------------------------- | -------------------- |
| FRT - Fortitude            | Builder              |
| CHG - Change               | Pathfinder           |
| KNO - Knowledge            | Medic                |
| NTG - Integrity            | Warden               |
| CHR - Charm                | Artisan              |
| choose manually, or reroll | choose a house first |

<!-- @todo these numbers need verifying -->

- House gets +4 extra levels to work towards, and +2 PP
- Guild gets +3 extra levels to work towards, and +1 PP

### House Proficiency Points

Whenever you level up, you can exchange 3XP for a House Proficiency Point. These points are permanently added to your rolls whenever you do a skill check within that house.

---

## size and health

Each character starts with 3 levels. Each character level is worth 4, 5, or 6 HP depending on size.

| size   | HP/level | min - max HP |
| ------ | -------- | ------------ |
| small  | 4        | 12 - 180     |
| medium | 5        | 15 - 225     |
| large  | 6        | 18 - 270     |

## personality and background

Forge doesn't have built-in alignment charts, however now that you have your character built you can pick one if you'd like.

## inventory & equipment

All players start with:

- 1 Spirit Orb
- 2 Silver Pieces

Inventory is simple: you have unlimited inventory slots, and can carry unlimited items or weight, _to a reasonable limit_. Your pack can't carry a whole dragon's gold stash, but you could feasibly use it to sneak a couple dragon eggs away from their clutch.

Equipment is much the same way as inventory. Sensible real-world logic and physics apply, unless there is a magical explanation.

---

## Final character

Put together everything you just did in this order: `{guild} {race} {class} of {House} house`
