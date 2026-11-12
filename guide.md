# ChromaForge alpha guide

This is the active rules reference. Older pages may preserve V1 ideas, but this guide wins when they conflict.

## What you need

One d20, a few d6s, paper, and pencils. That is all.

## Start a session in ten minutes

1. Each player makes a character using **Character creation** below and copies it to the [sheet](assets/character-sheet.md).
2. GM rolls every field in the [starting-location generator](generators/starting-location.md). Read the visible situation, not hidden causes.
3. Pick matching names, creatures, or places from the [Katharra alpha pool](compendium/katharra-alpha.md) when useful. Generated details may fill canon gaps but cannot contradict listed facts.
4. Ask, “What do you do?” Use a check only when failure has an interesting consequence.
5. At scene end, record changed facts, advance ignored leads, and award obstacle points.

## The Five Founts

Founts are laws of being without agency. They cannot want, permit, punish, or plan. People and creatures have motives; a Fount effect has a reliable, discoverable rule.

| Fount   | Color  | Domain                              | Common action                     |
| ------- | ------ | ----------------------------------- | --------------------------------- |
| ᛄ Seron | yellow | Integrity, boundaries, truth        | define, judge, protect a line     |
| ∵ Orvik | blue   | Knowledge, memory, hidden structure | study, recall, reveal a pattern   |
| ϟ Zhark | red    | Spark, rupture, transformation      | alter, improvise, break a pattern |
| △ Drun  | green  | Fortitude, endurance, regrowth      | endure, heal, carry, persist      |
| ⌘ Veyra | purple | Charm, bonds, social pull           | persuade, perform, connect, untie |

## Character creation

One procedure; no House, Guild, class cap, or second stat roll.

1. **Concept.** Name the character and describe one visible trait and one desire (it also says why you travel with this party). Pick an ancestry from [the roster](compendium/races.md): note its boon and bane. The boon is +1 to one of its listed Founts (your choice). The bane is −1 to its bane Fount.
2. **Roll Founts.** Roll 6d6 and drop the lowest. Halve each remaining die, rounding up (1–2 is 1, 3–4 is 2, 5–6 is 3). Assign the five values to your Founts (ᛄ Seron, ∵ Orvik, ϟ Zhark, △ Drun, ⌘ Veyra) however you like. Then apply your ancestry's boon (+1) and bane (−1). Step 3 adds the archetype's +1; all modifiers stack and are added after assigning.
3. **Choose an archetype and specialty.** Pick one archetype and one of its specialties from [Starting archetypes](compendium/archetypes.md). Copy its kit and archetype ability. Your archetype adds +1 to its Fount, which is also its normal attack Fount. Your specialty gives no stat bonus; its ability text names any Fount it uses. Archetype is a beginning, not a restriction.
4. **Derived values.** Maximum HP is `6 + △ Drun`. Maximum mana is `3 + ∵ Orvik`. Armor value is `0` unarmored, `1` light, `2` heavy.
5. **Finish.** Copy equipment, choose one useful mundane personal item, and one mundane knack (cooking, knots, card tricks, a song). A knack gives no bonus, but you never need a roll to do it well and the GM uses it in the fiction.

Example: rolls `6, 2, 4, 1, 5, 3` drop the 1 and halve to `3, 1, 2, 3, 2`; assigned as ᛄ Seron 3, ∵ Orvik 2, ϟ Zhark 1, △ Drun 2, ⌘ Veyra 3. An elf (ᛄ Seron boon, ⌘ Veyra bane) who picks a ᛄ Seron archetype (Warden) ends with ᛄ Seron 5 and ⌘ Veyra 2.

## Checks

Roll only when outcome is uncertain, risky, and consequential.

1. GM names the risk and consequence before the roll.
2. Choose the Fount matching the method, not the desired outcome. Players may propose another method.
3. Roll `d20 + Fount` against difficulty.

| Difficulty | Target | Use                                     |
| ---------- | -----: | --------------------------------------- |
| risky      |     10 | pressure exists; meaningful uncertainty |
| hard       |     15 | expert or strongly opposed task         |

Easy tasks need no roll; extraordinary ones are hard with a cost or a need for preparation. **Take 10:** with time and no pressure, skip the roll and count it as a 10. **Take 20:** if there is unlimited time and failure costs nothing, the task succeeds.

Natural 1 is a critical failure: consequence is worse or creates a new danger. Natural 20 is a critical success: succeed and gain an extra advantage. These override the total.

NPCs do not make opposed rolls. Set difficulty from the situation. Helping requires a concrete action; useful help or good preparation gives **advantage**: roll 2d20, keep the higher. The helper shares the consequence.

**Clues:** Correct investigation always reveals the essential clue. A check decides speed, safety, completeness, or extra leverage—never whether play stops.

## Combat

Use combat only when sides cannot or will not settle the conflict another way. Enemies need a motive and a condition that ends the fight.

### Start and turns

- If one side surprises the other, that side starts. Otherwise roll a d6 once: odd means party starts, even means enemy group starts.
- Alternate the whole party turn and the whole enemy-group turn.
- During party turn, each player chooses their own order and action. GM orders enemy actions.
- Each character gets one move, one action, one reaction, and any bonus action granted by an ability.
- One move crosses a nearby zone or about 30 feet. Action attacks, casts, helps, rescues, uses an item, or attempts another consequential task. One reaction responds to a clear trigger; it refreshes at the start of the party's turn.

### Attacks and damage

Attacks always land unless fiction prevents them. No attack roll, no Defense.

1. Roll `d6 + attack Fount` (+1 for a heavy two-handed weapon).
2. Subtract target armor (minimum 0). The rest is HP damage.

The archetype kit names its normal attack Fount; unusual methods use the Fount agreed before rolling. Improvised harmless objects deal `d6 − 2` (minimum 1). Fiction can make an attack impossible or remove cover before damage is rolled.

Alpha has no separate intellect score: use ∵ Orvik for risky knowledge, memory, or analysis.

### Enemies and encounter size

| Threat    |  HP | Armor | Damage | Use                                 |
| --------- | --: | ----: | -----: | ----------------------------------- |
| fragile   |   6 |     0 |     d6 | skittish animal, guard, hazard body |
| capable   |  10 |     1 | d6 + 1 | trained foe or large predator       |
| dangerous |  14 |     1 | d6 + 2 | scene centerpiece                   |

For a first party, use at most one capable enemy per character. Replace two capable enemies with one dangerous enemy. Fragile creatures can appear in greater numbers but act as one group: one damage roll against one target per turn, and each damaging hit on the group removes one creature. Retreat, surrender, negotiation, and changed circumstances can end combat.

### Downed and rescue

At 0 HP, a character is down: unable to act, but available to rescue. If every party member is down, GM follows enemy motives—capture, theft, abandonment, or rescue are better alpha outcomes than an unexplained total-party death.

**Playtest rule: rescue.** An adjacent ally spends an action to get a downed character to 1 HP; medicine or magic explains how when available but is not required. Reason: downed play must be recoverable before spell resources and healing requirements are settled. Decided for alpha: rescue needs no healing.

**Maiming.** Instead of waiting to be rescued, a downed character may take a scar to rise at 1 HP immediately (no action). Roll d6; the scar is permanent, and long rests do not heal it.

| d6 | Scar | Effect |
| -: | ---- | ------ |
| 1 | lost eye | −1 to checks that rely on sight |
| 2 | maimed hand | −1 to checks that need fine handling |
| 3 | bad leg | −1 to checks that rely on speed or balance |
| 4 | ringing ears | −1 to checks that rely on hearing or voice |
| 5 | disfiguring mark | −1 to checks that rely on first impressions |
| 6 | haunted mind | −1 to checks made while frightened or alone |

If a scar already applies, the player picks any one other row. The GM may waive a scar that does not fit the fiction. Rescue stays free and carries no scar.

## Recovery

- **Short rest:** about an hour of safe, quiet downtime. Restores 1 mana and refreshes abilities that work once per short rest.
- **Long rest:** an undisturbed night: shelter, watch, and immediate threats handled. Restores all HP and mana and refreshes abilities that work once per short rest or once per long rest. Unsafe sleep advances time but is not a long rest.
- **Day:** dawn to the next dawn. Abilities that work once per day refresh at dawn.

Food and rations are not tracked.

**Shared meal.** During a short or long rest, one character cooks (no roll; a cooking knack makes it memorable). Everyone who eats picks one: recover 1 mana, or gain advantage on one check before the next rest. A character gets one meal benefit per rest.

## Magic

Magic expresses one or more Founts; it does not give a Fount motives. Describe intended effect and method. GM chooses the relevant Fount, scope, difficulty, and failure consequence. Risky casting uses the same `d20 + Fount` check and natural 1/20 rules. Minor effects with no risk need no roll.

**When to roll.** A spell used exactly as written on a willing creature or an unattended object, within its normal scope, is automatic. Roll when the circumstances are difficult or the use is unusual. A spell that controls, disables, or erases an unwilling creature is a hard cast; on success it lasts up to a minute or until the creature is hurt, and the creature may try a risky check at the end of each of its turns to shake it off. Stretching duration, range, or scope raises difficulty by one step or adds 1 mana, GM's choice. Anything beyond what the spell fundamentally does is not possible.

A spell cannot erase an established clue or fact. Larger scope, distance, duration, or unwilling targets increase difficulty. Damage spells roll `d6 + Fount` (+1 for large scale), minus armor.

**Mana.** Each spell has a base mana cost in [spells](compendium/spells.md). The cost drops by 1 if you cast with a Fount score of 4 or more and by 2 at 6 or more, never below 1 (never below 2 for a base-3 spell). A failed cast still spends its mana, and a natural 1 has its usual consequence. Minor effects with no risk are cantrips: no roll, no mana. With no mana left, you cannot cast spells.

A new character knows 1 or 2 spells of their choice. Further spells are learned through play.

## Advancement

Award an obstacle once when its immediate stakes are settled, regardless of fighting, negotiation, stealth, magic, retreat, or another approach.

| Obstacle | Points | Example                                          |
| -------- | -----: | ------------------------------------------------ |
| minor    |      1 | one risky scene or local cost                    |
| major    |      2 | several scenes or serious lasting stakes         |
| critical |      3 | settlement, faction, or campaign-changing stakes |

Spend points on any Fount. Raising a Fount costs its new level: 1→2 costs 2, 2→3 costs 3, 3→4 costs 4. Unspent points carry over.

Higher scores will unlock abilities, but thresholds are not defined. Starting archetype and specialty abilities are not threshold unlocks.

## Travel

For journeys of one day or less, move to the next scene unless danger makes the route itself important. For longer journeys, roll once per travel day:

|  d6 | Day result                                                            |
| --: | --------------------------------------------------------------------- |
|   1 | weather or terrain imposes delay, exposure, or a hard choice          |
|   2 | creature signs; party may avoid, observe, help, or confront           |
|   3 | traveler, patrol, or trade opportunity with a concrete want           |
|   4 | local Fount phenomenon with a discoverable rule                       |
|   5 | an ignored lead or faction advances into the route                    |
|   6 | uneventful travel; ask one character what the road reveals about them |

Adapt result to terrain and [Katharra content](compendium/katharra-alpha.md). Travel may be uneventful. Do not track food or rations.

## GM scene loop

For each new place or changed revisit, write six short lines:

1. **See:** immediate sensory facts.
2. **Want:** who wants what; never assign desire to a Fount.
3. **Rule:** primary Fount's reliable effect; secondary twist if generated.
4. **Ignored:** what changes if party leaves or follows another lead.
5. **Roll:** only risk, consequence, Fount, and difficulty—not a planned solution.
6. **Leads:** at least one actionable next step; starting locations have two.

Then:

1. Show **See** and visible problem.
2. Ask what characters do. Resolve fiction first, then checks or combat.
3. Preserve essential clues despite failure.
4. When scene stakes settle, award points and advance time.
5. Tick or rewrite every unfollowed lead's **Ignored** line.
6. Save names, rules, relationships, damage, and consequences. On revisit, reuse them and show what changed.

Generated facts are campaign canon after they reach the table. Re-roll only before reveal or when a result contradicts established Katharra canon.
