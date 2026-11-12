# Player Generation

A quick random character: a couple of dice rolls and a few choices. This generator follows the [alpha guide](../guide.md#character-creation); if they differ, the guide wins.

_Generating a character before a campaign. You can follow the instructions below or manually create a character that matches the [sheet](../assets/character-sheet.md)._

**requires:**

- 1d100
- 1d15
- 6d6

### instructions

1. roll `1d100`, choose a race from its bracket (if the race has a `1d4` tweak, roll that too)
2. pick one of the race's boon Founts (+1); its bane Fount is −1
3. roll `6d6`, drop the lowest, halve each remaining die (round up), and assign the five values to your Founts however you like
4. roll `1d15` for an archetype; the specialty is picked from its three (see [archetypes](../compendium/archetypes.md))
5. add +1 to the archetype's Fount, then copy its kit and abilities
6. choose 1 or 2 starting spells from [spells](../compendium/spells.md)

---

## steps

| die     | label     | depends |
| ------- | --------- | ------- |
| `1d100` | race      |         |
| `6d6`   | Founts    | race    |
| `1d15`  | archetype |         |

### race

Races are divided into groups within a 100-digit bracket, read as percentile (`00`-`99`) — a natural roll of 100 reads as `00`. Roll `1d100` and pick one race from the matching group, or check [compendium/races](../compendium/races.md) to choose deliberately.

- 00-11, 100: Tiefling, Elf, or Kethrai
- 12-22: Imp, Gnome, Goblin, or Iskari
- 23-33: Titanborne, Duarling, Dwarf, or Ravuun
- 34-44: Human, Centaur, or Bugbear
- 45-55: Entling, Lizardfolk, or Kobold
- 56-66: Fae, Satyr, or Roo
- 67-77: Apeling, Amazon, Shelled Elemental (earth/water/fire/air), or Etterkin
- 78-88: Qualf, Moonfolk, Ommel, or D'varen
- 89-99: Animated Armor, Halfling, or Hippofolk

### Founts

Roll `6d6` and drop the lowest. Halve each remaining die, rounding up (1–2 is 1, 3–4 is 2, 5–6 is 3). Assign the five values to ᛄ Seron, ∵ Orvik, ϟ Zhark, △ Drun, and ⌘ Veyra. Then apply the race's boon (+1 to one listed Fount) and bane (−1), and the archetype's +1. All modifiers stack and are added after assigning.

### archetype

_Roll `1d15`, then pick one of the three specialties._

1. ᛄ Warden: Marchwarden, Snarer, or Shieldbearer
2. ∵ Medic: Physician, Stretcher-Bearer, or Bedside Counselor
3. ϟ Pathfinder: Trailbreaker, Smuggler, or Waymarker
4. △ Bulwark: Stalwart, Veteran, or Gatekeeper
5. ᛄ Cartographer: Surveyor, Pioneer, or Packmaster
6. ᛄ Paladin: Inquisitor, Crusader, or Zealot
7. ∵ Tinkerer: Trapsmith, Peddler, or Mender
8. ∵ Loremaster: Archivist, Linguist, or Spellbinder
9. ϟ Duelist: Fencer, Showman, or Champion
10. ϟ Wildcaller: Stormcaller, Beastmaster, or Whisperer
11. △ Delver: Burrower, Brawler, or Sapper
12. △ Rootbound: Greenseer, Hearthroot, or Thornwarden
13. ⌘ Bard: Minstrel, Chronicler, or Provocateur
14. ⌘ Envoy: Diplomat, Courtier, or Fixer
15. ⌘ Trickster: Cutpurse, Escape Artist, or Appraiser

The archetype gives +1 to its Fount, which is also its normal attack Fount. Copy its kit, archetype ability, and specialty ability from [archetypes](../compendium/archetypes.md).

---

## derived values

- **Maximum HP:** `6 + △ Drun`
- **Maximum mana:** `3 + ∵ Orvik`
- **Spells:** 1 or 2 known (more are learned through play)
- **Armor:** `0` unarmored, `1` light, `2` heavy

Choose one useful mundane personal item and describe one visible trait and one desire (why you travel with this party).

---

## final character

Put together everything you just did in this order: `{race} {archetype} ({specialty})`
