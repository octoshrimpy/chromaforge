---
author: Amanda Gutmann
---

# Style

<!-- [ ] Tila you can put markdown style ideas in here for me/us to follow. -->

- `lists` : Use a star, not a dash
- `line indents`: Use 4 spaces for indentation
- `split lines` : Use a space followed by a backslash
- `slashes` : Wrap spash with spaces. Slash should not touch any other character

---

## Lists

### Visual descriptions

<!-- @think: Refactor description for visual description priority  -->

When describing landmark items, list the features beginning with those that the characters would perceive at first glance, followed by those that require a closer inspection.

```md
1.  Altar stone
    - Sits atop a hill
    - Surrounded by charred skeletons
    - It has a crack through the middle
    - Inscription describes a god that nobody worships
    - It catches fire every solstice for 24 hours
```

---

## Generator tables

Any `generators/*/readme.md` (or `simple.md`) that the DM-aid tool ([html_generators/](../html_generators/)) reads from must follow this shape so it can be parsed automatically. Prose intros, `<!-- -->` comments, and anything outside these sections are ignored by the tool and free-form.

A `## steps` table declares, in roll order, every table the generator needs:

```md
## steps

| die    | label | depends |
| ------ | ----- | ------- |
| `1d10` | color |         |
| `1d6`  | biome | color   |
```

- `die` — dice notation (`1d10`, `2d6`). Suffix `×otherlabel` (e.g. `1d100 ×content_count`) rolls this step once per the number an earlier step produced. If a step needs rolling more than once by hand (House then Guild off the same table), say so in prose and let the DM hit "roll" twice.
- `label` — matches a `### label` heading below, and is the name shown in results.
- `depends` — optional; names an earlier step whose result picks the row in a matrix table.

Each label then gets its own section with one table, one of two shapes:

**Roll table** (`roll` is the literal header of column 1):

```md
### color

| roll  | result |
| ----- | ------ |
| `1-2` | blue   |
| `3-4` | purple |
```

Roll cells accept a single number, a comma list (`1, 2`), or a range (`1-4`, `01-20`). A `0` bound means the die's max (e.g. `9-0` on 1d10 means 9-10).

**Matrix table** (row key = the `depends` step's result, columns = roll numbers):

```md
### biome

| color | 1          | 2              | 3    | 4           |
| ----- | ---------- | -------------- | ---- | ----------- |
| blue  | riverlands | flooded canyon | lake | water caves |
```

Result cells can be plain flavor text (including instructions like "reroll" or "same as previous") — the tool shows those verbatim for the DM to apply.

## Directives

A result cell can embed directives the tool expands when the row is rolled:

- `{{pick: a \| b \| c}}` — replaced with one option, chosen uniformly. Use it to turn "pick one of these" into a concrete result. **Inside a table, escape the option separators as `\|`** so they don't read as column borders.
- `{{gen: id}}` — rolls generator `id` inline and nests its finished result under this one (e.g. a World Tile's `content` cell `{{gen: landmark}}` generates a whole landmark on the spot). Append `×n` to roll it `n` times. Nesting is depth-capped to stop runaway chains.
