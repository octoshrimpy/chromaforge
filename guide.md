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

| Fount | Color  | Domain                              | Common action                     | Canonical overuse cost                         |
| ----- | ------ | ----------------------------------- | --------------------------------- | ---------------------------------------------- |
| ᛄ Seron | yellow | Integrity, boundaries, truth        | define, judge, protect a line     | thought stiffens; nuance fades                 |
| ∵ Orvik | blue   | Knowledge, memory, hidden structure | study, recall, reveal a pattern   | attention narrows                              |
| ϟ Zhark | red    | Change, rupture, transformation     | alter, improvise, break a pattern | habits and self become less predictable        |
| △ Drun  | green  | Fortitude, endurance, regrowth      | endure, heal, carry, persist      | choices become rigid; small signals are missed |
| ⌘ Veyra | purple | Charm, bonds, social pull           | persuade, perform, connect, untie | autonomy thins under others' pull              |

Rest and appropriate quiet practice ease these costs. White and black are historical labels only: active yellow is ᛄ Seron and active purple is ⌘ Veyra.

## Character creation

One procedure; no House, Guild, class cap, or second stat roll.

1. **Concept.** Name the character and describe one visible trait and one desire. Pick an ancestry from [the roster](compendium/races.md): choose one of its primary Founts (+1 to that Fount after rolling) and note its bane (disadvantage on that Fount's checks).
2. **Roll Founts.** Roll one d6 per Fount (ᛄ Seron, ∵ Orvik, ϟ Zhark, △ Drun, ⌘ Veyra): 1–2 gives 1, 3–4 gives 2, 5–6 gives 3. Then add +1 to any one Fount.
3. **Choose an archetype and specialty.** Pick one completed option from [Starting archetypes](compendium/classes.md). Copy its kit and signature ability. Archetype is a beginning, not a restriction.
4. **Derived values.** Maximum HP is `6 + △ Drun`. Armor is `0` unarmored, `1` light, `2` heavy.
5. **Finish.** Copy equipment, choose one useful mundane personal item, and answer: “Why are you traveling with this party?”

Example: rolls `6, 2, 4, 1, 5` give Founts `3, 1, 2, 1, 3`; the +1 makes ᛄ Seron 4.

## Checks

Roll only when outcome is uncertain, risky, and consequential.

1. GM names the risk and consequence before the roll.
2. Choose the Fount matching the method, not the desired outcome. Players may propose another method.
3. Roll `d20 + Fount` against difficulty.

| Difficulty | Target | Use                                             |
| ---------- | -----: | ----------------------------------------------- |
| risky      |     10 | pressure exists; meaningful uncertainty         |
| hard       |     15 | expert or strongly opposed task                 |

Easy tasks need no roll; extraordinary ones are hard with a cost or a need for preparation.

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
- One move crosses a nearby zone or about 30 feet. Action attacks, casts, helps, rescues, uses an item, or attempts another consequential task. One reaction responds to a clear trigger.

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

**Playtest rule: rescue.** An adjacent ally spends an action to get a downed character to 1 HP; medicine or magic explains how when available but is not required. Reason: downed play must be recoverable before spell resources and healing requirements are settled. Whether rescue ultimately requires healing remains open.

## Recovery

A safe night's rest restores all HP. A night is safe when shelter, watch, and immediate threats are handled. Unsafe sleep advances time but does not restore all HP. Food and rations are not tracked.

## Magic

Magic expresses one or more Founts; it does not give a Fount motives. Describe intended effect and method. GM chooses the relevant Fount, scope, difficulty, and failure consequence. Risky casting uses the same `d20 + Fount` check and natural 1/20 rules. Minor effects with no risk need no roll.

A spell cannot erase an established clue or fact. Larger scope, distance, duration, or unwilling targets increase difficulty. Damage spells roll `d6 + Fount` (+1 for large scale), minus armor.

**Playtest rule: casting cost.** Alpha uses no spell-point or slot resource. On a failed risky cast, apply the relevant Fount's overuse cost until the character rests or takes a scene of restorative practice; repeated failure intensifies its fictional consequence. Reason: this permits magic while resource design remains open. Whether spells consume a resource remains unresolved.

Existing spells in [`compendium/spells/`](compendium/spells.md) are inspiration, not additional active mechanics.

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
