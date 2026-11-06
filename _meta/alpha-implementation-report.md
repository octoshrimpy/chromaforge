# Alpha implementation report

## Files changed

- Entry and active rules: [`README.md`](../README.md), [`guide.md`](../guide.md), [`quick_links.md`](../quick_links.md), [`TODO.md`](../TODO.md).
- Table aids: [`assets/character-sheet.md`](../assets/character-sheet.md), [`generators/starting-location.md`](../generators/starting-location.md).
- Play content: [`compendium/classes/readme.md`](../compendium/classes/readme.md), [`compendium/colors_houses/readme.md`](../compendium/colors_houses/readme.md), [`compendium/katharra-alpha.md`](../compendium/katharra-alpha.md), [`examples/alpha-session.md`](../examples/alpha-session.md).
- History: [`archive/TODO-v1.md`](archive/TODO-v1.md), [`archive/rules-v1.md`](archive/rules-v1.md).
- Legacy pages received alpha/superseded banners: player generator; combat, checks, leveling, magic, and travel; spell catalog.
- Verification aid: [`testing/combat-simulation.mjs`](../testing/combat-simulation.mjs).

Existing `campaigns/` material was not rewritten or removed.

## Verification performed

- `node html_generators/test.mjs` — 1,012 exhaustive roll/state/directive/canon checks, 0 failures.
- Alpha Markdown link check — 66 local paths and anchors, 0 issues.
- `node testing/combat-simulation.mjs` — exact enumeration across light, standard, and heavy matchups; damaging-hit rates 50–75%; expected attacks to 0 HP 2.49–4.00.
- Deterministic starting-location sample — Orvik/Veyra High Pass opening, detour, failed check, avoided combat, offscreen change, and revisit recorded in example session.
- Ponytail review applied — removed obsolete focus/sense/class/spell-node metadata and completed migration notes from active Fount reference.

## Provisional playtest rules

- Attack bonus `floor(relevant Fount / 3)`; Defense `4 + Drun + armor`; armor 0/2/4; weapons d6/d8/d10.
- Adjacent ally spends action to rescue downed character at 1 HP; healing not required for alpha.
- Casting has no slot/point resource; failed risky casts impose relevant Fount overuse.
- Unspent XP is recorded by Fount.
- No separate intellect value; risky knowledge and analysis use Orvik.

Each corresponding unresolved decision remains unchecked in [`TODO.md`](../TODO.md).

## Remaining blockers

No blocker to short-session alpha play. Open design work: final derived formulas, rescue/healing requirement, spell resource, XP storage model, unlock thresholds, Builder and Artisan completion, all 20 ordered Fount pairs, full travel content, full legacy-color/lore inventory, and live-table timing notes.
