# Generate Town

Only generate buildings as players interact with them:

- tavern - only rumor
- town hall - only quest
- shop - [generate shop 🔗](/generators/building.md)

## steps

| die    | label          | depends |
| ------ | -------------- | ------- |
| `1d1`  | name           |         |
| `1d10` | culture        |         |
| `1d4`  | rumor_quest    |         |
| `1d10` | building_count |         |

### name

| roll | result        |
| ---- | ------------- |
| 1    | {{gen: name}} |

### culture

_the town's dominant fount — its banner color, temple, and civic character (see [colors & houses](/compendium/colors_houses.md))._

| roll  | result                     |
| ----- | -------------------------- |
| 1, 2  | yellow — ᛄ Seron / Integrity |
| 3, 4  | blue — ∵ Orvik / Knowledge   |
| 5, 6  | red — ϟ Zhark / Change       |
| 7, 8  | green — △ Drun / Fortitude   |
| 9, 10 | purple — ⌘ Veyra / Charm     |

### rumor_quest

| roll | result                 |
| ---- | ---------------------- |
| 1    | rumor: no, quest: yes  |
| 2    | rumor: yes, quest: yes |
| 3, 4 | rumor: yes, quest: no  |

### building_count

_result + 3 = total buildings_

| roll | result   |
| ---- | -------- |
| 1-10 | roll + 3 |
