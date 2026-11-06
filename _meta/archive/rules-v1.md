# V1 rules notes

Historical reference only. [Alpha guide](../../guide.md) is active. Consolidated from the former `gameplay/` pages; full originals are in git history (`ed39a6e`).

V1 experimented with:

- House and Guild rolls, race strengths/weaknesses, proficiency points, and class-based stat caps.
- d10 and opposed checks, successful-check conversion to XP, and combat-only XP.
- spirit orbs as revival, progression, and currency.
- level-scaled HP, color-versus-land combat modifiers, attack rolls before damage, prone/high-ground arithmetic, and negative HP.
- travel as repeated group skill checks where failure forced encounters.
- fixed spell uses tied to Knowledge and mixed short/long-rest recharge schedules.

These ideas conflict with alpha decisions: five Fount stats, d20 roll-high checks, direct damage rolls, obstacle XP, no class caps, and generated situations with offscreen consequences.

## Ideas not yet in alpha

Mine these if the matching alpha rule needs more texture.

### Combat

- Modifier unit `n = floor(house level / 4)`.
- Color vs land: +n same color, +0 neighbor, −n opposite. Applies to attacker and defender.
- Situation: high ground vs prone +2n; prone vs standing −n.
- Defender status: startled +n to attacker, default +0, braced −n.
- Fainting, not death: at ≤0 HP a PC faints with negative HP. Allies spend a turn (or act after the fight) adding 1d6 to the fainted PC's HP; positive HP survives. A revived PC above 4 HP may revive others.

### Checks

- Group checks succeed only if more than half the rolls succeed.
- DC with a fail budget: roll until you hit DC or run out of fails.

| difficulty        | DC  | fails | reward |
| ----------------- | --- | ----- | ------ |
| Very easy         | 5   | 6     | 1      |
| Easy              | 10  | 5     | 2      |
| Medium            | 15  | 4     | 3      |
| Hard              | 20  | 3     | 4      |
| Very hard         | 25  | 2     | 5      |
| Nearly impossible | 30  | 1     | 6      |

- Extended skills by house (V1 names): Knowledge: arcana, insight, perception, investigation. Change: trouble, trespass, deception, sleight of hand. Fortitude: medicine, survival, athletics, animal handling. Charm: bluff, nature, intimidate, performance. Integrity: history, religion, diplomacy, persuasion.

### Advancement

- Spirit orbs: earned on killing blows; convert to one floating XP after a long rest, tradeable, usable as shop currency. 3 XP can make one orb (lossy on purpose).
- Leveling a house costs 3 + current points in that house's XP.
- After house level 5, the world rolls d20 against the player instead of d10.

### Travel

Each traveler rolls 1d6 for the kind of check the day demands:

1. Ranged: hunting, scouting for threats
2. Arcana: spotting traps, protective wards
3. Stealth: hunting, spotting enemies
4. Strength: clearing paths, making camp
5. Charm: passersby, talking past tolls
6. GM's choice

Outcome: success count reached first = uneventful. Fail count reached first with more than half successes = non-combat encounter. Fewer than half successes = combat encounter.

### Magic

Magic costs stamina and effort. Energy is never created from nothing: casters sweat, cry, and bleed. It works like lifting weights: untrained casting can cause real injury, and it shows up differently in each person. Careless casting corrupts the caster toward a color, leaving them out of tune: easier to distract, hurt, and tire. Spell list: [compendium/spells](../../compendium/spells/readme.md).
