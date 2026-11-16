# ChromaForge GM guide

For whoever runs the game, including a solo player running it for themselves. Rules for checks, combat, magic, and advancement live in the player guide; this guide covers what the GM decides, generates, and tracks.

Sections marked **Draft** are new and untested. Sections marked **Open** wait on a design decision.

## Principles

- **Founts are laws without agency.** They cannot want, permit, punish, or plan. People and creatures have motives; a Fount effect has a reliable, discoverable rule.
- **Roll only when the outcome is uncertain, risky, and consequential.** Name the risk and consequence before the roll.
- **Clues are never lost.** Correct investigation always reveals the essential clue. A check decides speed, safety, completeness, or extra leverage, never whether play stops.
- **Generated facts are canon** once they reach the table. Re-roll only before reveal, or when a result contradicts established Katharra canon.
- **Fights need a motive and an exit.** Every enemy wants something and has a condition that ends the fight short of death.
- **The world moves.** Ignored leads advance; revisited places show what changed.

## Start a session in ten minutes

1. Each player makes a character from the player guide.
2. Roll every step of the [starting-location generator](generators/starting-location.md). Read the visible situation, not hidden causes.
3. Pick matching names, creatures, or places from the [Katharra alpha pool](compendium/katharra-alpha.md) when useful. Generated details may fill canon gaps but cannot contradict listed facts.
4. Ask, "What do you do?" Use a check only when failure has an interesting consequence.
5. At scene end, record changed facts, advance ignored leads, and award obstacle points.

## Scene loop

For each new place or changed revisit, write six short lines:

1. **See:** immediate sensory facts.
2. **Want:** who wants what; never assign desire to a Fount.
3. **Rule:** primary Fount's reliable effect; secondary twist if generated.
4. **Ignored:** what changes if the party leaves or follows another lead.
5. **Roll:** only risk, consequence, Fount, and difficulty, not a planned solution.
6. **Leads:** at least one actionable next step; starting locations have two.

Then:

1. Show **See** and the visible problem.
2. Ask what characters do. Resolve fiction first, then checks or combat.
3. Preserve essential clues despite failure.
4. When scene stakes settle, award points and advance time.
5. Tick or rewrite every unfollowed lead's **Ignored** line.
6. Save names, rules, relationships, damage, and consequences. On revisit, reuse them and show what changed.

## Rulings

### Which Fount

Choose the Fount matching the method, not the desired outcome. The same goal can use any Fount:

| Fount | Methods | Getting past a guard |
| ----- | ------- | -------------------- |
| ᛄ Seron | rules, oaths, edges, standing firm, honest claims | cite the law that says you may pass |
| ∵ Orvik | study, memory, analysis, patterns, careful aim | learn the shift change and slip through |
| ϟ Zhark | improvising, breaking, sudden change, speed | cause a distraction and run |
| △ Drun | strength, endurance, patience, labor | wait out the night, or push through |
| ⌘ Veyra | persuasion, performance, bonds, deception | befriend the guard |

Players may propose another method; if it is plausible, let the Fount follow the method.

### Difficulty

| Situation | Call |
| --------- | ---- |
| no real risk, or no interesting failure | no roll; it happens |
| pressure exists; meaningful uncertainty | risky, 10 |
| expert or strongly opposed task | hard, 15 |
| extraordinary | hard, plus a cost or a need for preparation |
| time and no pressure | take 10 |

NPCs do not make opposed rolls: set the difficulty from how capable and alert they are.

### Failure consequences — Draft

A failed check never just means "nothing happens." Pick one, or roll d6:

| d6 | Consequence |
| -: | ----------- |
| 1 | **Harm:** take `d6` damage, or a condition (see Hazards) |
| 2 | **Cost:** lose an item, coin, mana, or a used-up resource |
| 3 | **Time:** it works, but takes far longer; a clock advances |
| 4 | **Position:** it works, but leaves you exposed, separated, or cornered |
| 5 | **Attention:** someone notices; a threat or rival moves now |
| 6 | **Partial:** you get part of it and must choose which part |

**Natural 1:** the consequence is worse, or a new danger appears: the tool breaks, the lie is exposed in public, the spell hits the wrong target. **Natural 20:** succeed and gain an extra advantage: learn a secret, gain an ally's trust, finish early, or set up the next check with advantage.

## Enemies

### Threat tiers

| Threat    |  HP | Armor | Damage | Use                                 |
| --------- | --: | ----: | -----: | ----------------------------------- |
| fragile   |   6 |     0 |     d6 | skittish animal, guard, hazard body |
| capable   |  10 |     1 | d6 + 1 | trained foe or large predator       |
| dangerous |  14 |     1 | d6 + 2 | scene centerpiece                   |

Enemy attacks always land, like player attacks: roll damage, subtract the target's armor.

### Encounter size

For a first party, use at most one capable enemy per character. Replace two capable enemies with one dangerous enemy. Fragile creatures can appear in greater numbers but act as one group: one damage roll against one target per turn, and each damaging hit on the group removes one creature. Retreat, surrender, negotiation, and changed circumstances can end combat.

### Bosses — Draft

A boss is a dangerous enemy with three additions:

- **One trick:** a reliable, discoverable rule from its Fount or biology (it cannot be hurt while touching water; it swaps places with whoever last hit it).
- **One turn:** at half HP the fight changes: it calls help, changes the terrain, flees to a second place, or reveals what it wants.
- **One exit:** a way to end the fight without killing it, findable through play.

Use at most one boss per party.

### Creature entries

Write every creature in this shape (see the [Katharra alpha pool](compendium/katharra-alpha.md) for three finished examples):

- **Behavior:** what it is doing when found, and what makes it fight.
- **Stats:** tier, HP, armor, attack.
- **End combat:** two or three ways the fight stops short of death.
- **Lead:** what following it, or studying it, reveals.

Wildlife wants safety, food, territory, or its young protected, not a fight to the death.

**Open:** the [monster generator](generators/monster.md) roster has 29 Katharra creatures with no entries yet. Each needs a tier and the four lines above, drawn from the wiki bestiary.

### Down and defeat

At 0 HP a character is down. If every party member is down, follow enemy motives: capture, theft, abandonment, or rescue are better outcomes than an unexplained total-party death. Maiming and rescue are in the player guide.

## Hazards and conditions — Draft

### Hazards

A hazard hits like an attack with no attacker. Armor applies only when it would in the fiction (a shield against falling rocks, not against poison).

| Hazard | Damage |
| ------ | ------ |
| minor: a fall of 10–20 feet, a brief burn, thorns | `d6 − 2` (minimum 1) |
| serious: a fall of 30–50 feet, a fire, a poison | `d6` |
| deadly: a long fall, lava, a collapse | `d6 + 2`, and it may continue each turn |

Name the hazard before the danger, and give a check to avoid or reduce it when the character can act: a risky △ Drun check to hold on, a risky ϟ Zhark check to dive clear.

- **Drowning and suffocation:** a character can act normally for about a minute. After that, a risky △ Drun check each turn; on failure, take `d6`.
- **Darkness:** with no light, sight-based checks are hard and attacks need a sound or touch to aim. Dim light is no penalty for those ancestries who see in it.
- **Cold, heat, and thirst:** never track them by the hour. When the fiction makes them a threat, name it as a consequence: `d6` damage, a condition, or no long rest until it is fixed.

### Conditions

Conditions are fiction with a mechanical edge. Each lasts until something in the fiction ends it, or the end of the scene.

| Condition | Effect | Ends when |
| --------- | ------ | --------- |
| prone | attacks against you deal +1 damage; standing uses your move | you stand |
| restrained | no move; hard checks to do anything but break free | you break free (risky check) |
| frightened | cannot move toward the source; hard checks against it | you leave its sight, or someone rallies you |
| dazed | no reaction; one of move or action, not both | the end of your next turn |
| blinded | as darkness, for you only | it is treated or wears off |
| poisoned | disadvantage on checks | it is treated, or a long rest |

Spells and abilities that "remove one negative effect" end one condition.

## Traps — Draft

A trap follows the clue rule: there is always a visible sign. A trap is a rule plus a consequence, never a gotcha.

Every trap has:

- **Sign:** what a careful look shows (scorch marks, a seam in the floor, a too-clean step).
- **Trigger:** exactly what sets it off.
- **Effect:** a hazard or condition from above.
- **Ways past:** disarm (risky check with tools, hard without), avoid, or trigger it safely.

| d10 | Trap | Sign | Effect |
| --: | ---- | ---- | ------ |
| 1 | pressure plate darts | tiny holes in the walls at knee height | serious hazard, poisoned |
| 2 | false floor | the dust stops in a neat square | fall: minor or serious |
| 3 | swinging log or blade | a groove worn across the ceiling | serious hazard, prone |
| 4 | snare net | a loop of cord under leaves | restrained |
| 5 | rune of ᛄ Seron | a yellow line across the doorway | a creature who crosses it lying is thrown back, prone |
| 6 | mirror of ∵ Orvik | a mirror showing the room a moment ago | blinded until you look away; the reflection repeats your last secret aloud |
| 7 | ϟ Zhark bloom | red crystals that crack when warmed | burst: serious hazard to everyone nearby |
| 8 | △ Drun vines | green growth on old bones | restrained; the vines grow back if cut |
| 9 | ⌘ Veyra charm | a pleasant song with no singer | frightened of leaving, or drawn toward a pit |
| 10 | alarm | thread, bells, or a balanced bowl | no damage; the nearest enemies arrive ready |

## Treasure and rewards — Draft

Coin is not the main reward: obstacle points, allies, knowledge, and access are. When treasure is found, use a size:

| Size | Coin | Or instead |
| ---- | ---- | ---------- |
| small | `2d6` sp | a trinket, a meal's worth of supplies, a healing draught |
| medium | `2d6` gp | a fine item, a map, a book, a useful favor |
| large | `2d6 × 10` gp | an exceptional item, a mount, a rare spell component, a property |

As a rule of thumb, a session's main obstacle should pay enough for one meaningful purchase: a healing draught, a better weapon, or a few nights at an inn. Use the [quest generator's](generators/quest.md) reward table for jobs.

**Spirit Orbs** drop only on rare deaths: a boss, a creature tied to a Fount, a story death. They are consumed for Fount points and cannot be bought.

**Open:** magic items. None exist yet.

## Travel and the hexcrawl

### Travel days

For journeys of one day or less, move to the next scene unless danger makes the route itself important. For longer journeys, roll once per travel day:

|  d6 | Day result                                                            |
| --: | --------------------------------------------------------------------- |
|   1 | weather or terrain imposes delay, exposure, or a hard choice          |
|   2 | creature signs; party may avoid, observe, help, or confront           |
|   3 | traveler, patrol, or trade opportunity with a concrete want           |
|   4 | local Fount phenomenon with a discoverable rule                       |
|   5 | an ignored lead or faction advances into the route                    |
|   6 | uneventful travel; ask one character what the road reveals about them |

Adapt the result to terrain and Katharra content. Food and rations are not tracked. The [encounter generator](generators/encounter.md) gives more specific road events.

### Hexcrawl — Draft

One hex is one day of travel on foot, about 12 miles across. Mounts cover the same hex faster but still roll the travel day.

**Entering an unexplored hex:**

1. Roll a [world tile](generators/world_tile.md): color, biome, and contents.
2. The tile's color is the Fount the land leans toward. Give it one visible sign of that Fount's core rule (from step 1 of the [starting-location generator](generators/starting-location.md)).
3. Roll the travel day.
4. Place the contents. The party sees the first one on arrival; the rest are found by exploring, or later.
5. Write the hex on the map with one line per content, and one **Ignored** line for anything left alone.

**Entering an explored hex:** roll only the travel day, and advance anything ignored there.

**Getting lost:** off a road, in bad weather or strange terrain, the navigator makes a risky ∵ Orvik check. On failure, the party loses half a day, or arrives in a neighboring hex the GM chooses (or rolls: d6, one per side).

## Using the generators

| When | Roll |
| ---- | ---- |
| campaign start | [starting location](generators/starting-location.md) |
| new hex | [world tile](generators/world_tile.md); its contents call the rest |
| a travel day | the travel table, then [encounter](generators/encounter.md) for detail |
| a person | [NPC](generators/npc.md), then give them a want and a reaction |
| several people | [group](generators/group.md) |
| a fight | [monster](generators/monster.md) for the creature and why the fight ends |
| a settlement | [town](generators/town.md), then [building](generators/building.md) as the party walks in |
| a shop | [shop](generators/shop.md) |
| a job or rumor | [quest](generators/quest.md) |
| a landmark | [landmark](generators/landmark.md) |
| a dungeon | [dungeon](generators/dungeon.md), then traps and treasure from this guide |
| a name | [place name](generators/name.md) |

More: puzzles and landmark twists in the [GM toolbox](compendium/dm.md).

## Solo play — Draft

ChromaForge runs without a GM. The player plays the characters and asks the dice what the GM would decide. Be honest with yourself: name the risk before you roll, and take the interesting answer over the safe one.

### Asking the oracle

Ask a yes/no question. Choose the odds, then roll d6:

| Odds | Yes on |
| ---- | ------ |
| likely | 3–6 |
| even | 4–6 |
| unlikely | 5–6 |

A **6** is "yes, and": something extra helps. A **1** is "no, and": something extra goes wrong. If the answer would contradict established facts, take the closest answer that doesn't.

For open questions ("What does she want?"), roll the [quest generator's](generators/quest.md) goal, or a d6 on the six immediate problems from the [starting location](generators/starting-location.md), and read the result loosely.

### Surprises

At the start of each scene, roll d6:

| d6 | Scene |
| -: | ----- |
| 1 | **Interrupted:** something else happens first. Roll the travel-day table, or advance an ignored lead into this scene |
| 2 | **Altered:** the scene happens, with one detail changed. Ask the oracle what, or add the local Fount's twist |
| 3–6 | as expected |

### Playing the scene loop solo

- **See, Rule, Leads:** come from the generators.
- **Want:** roll it for every person on stage before you decide what your character does.
- **Roll:** name the consequence first, using the failure table above.
- **Enemies in combat:** they follow their motive. Each enemy turn, ask the oracle "Does it press the attack?" (likely when winning, unlikely when hurt). On no, it uses its fight-ending condition: flees, bargains, or grabs what it came for.

## Advancement pacing — Open

Obstacle points are awarded per the player guide (minor 1, major 2, critical 3). Not yet decided:

- How many points a typical session should award. A session with one major and two minor obstacles gives 4.
- What Fount scores unlock. 4 and 6 already lower spell costs; ability thresholds wait on playtest data.

## Downtime — Open

The player guide says changing practiced spells takes "a few days of downtime." Downtime has no rules yet. Candidates: train (practiced spells), work (earn coin by knack or archetype), craft (spell components, gear), research (one true fact, like I Read About This), and carouse (a contact, a rumor, and a consequence).

## Fount twists for places — Open

Every location has a primary Fount and, one time in three, a secondary twist. The [starting-location generator](generators/starting-location.md) has prompts and one worked pair (left-footed water: ᛄ Seron with a ⌘ Veyra twist). Still needed: all 20 ordered pairs and five primary-only effects, each with a trigger, outcome, and exploit.
