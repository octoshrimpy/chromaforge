# Generate Dungeon

## dungeon size

Roll 2d6, one die "small", one die "large":

- small die = number of safe rooms (no chance of a boss)
- large die = number of potential boss rooms
- if no boss was rolled in a large room, the next large room is a guaranteed boss
- total dungeon size = small + large + 1d6

If a room is a dead end (no doors around), it can still connect a level above or below.

## steps

| die     | label         | depends |
| ------- | ------------- | ------- |
| `1d100` | room_content  |         |
| `1d10`  | level_access  |         |
| `1d6`   | trap_treasure |         |

### room_content

_@todo more monsters if this roll is higher within its range_

| roll     | result        |
| -------- | ------------- |
| `01-10`  | dead end      |
| `11-30`  | empty room    |
| `31-60`  | monster       |
| `61-80`  | treasure door |
| `81-100` | treasure room |

### level_access

| roll    | result           |
| ------- | ---------------- |
| 1-5, 10 | no levels        |
| 6       | above, no ladder |
| 7       | above, ladder    |
| 8       | below, hidden    |
| 9       | below            |

### trap_treasure

| roll | result                                    |
| ---- | ----------------------------------------- |
| 1    | trap, small treasure                      |
| 2    | trap, medium treasure, generate puzzle    |
| 3    | trap, large treasure, generate monster    |
| 4    | no trap, small treasure                   |
| 5    | no trap, medium treasure, generate puzzle |
| 6    | no trap, large treasure, generate monster |

## boss

1. `1d10` for color (see [colors & houses](/compendium/colors_houses/readme.md)), generate a random high-difficulty monster of that color
2. add `1d4` to DEF, `1d4` to ATK
