# Generate World Tile _simple_

## steps

| die                    | label         | depends |
| ---------------------- | ------------- | ------- |
| `1d10`                 | color         |         |
| `1d6`                  | biome         | color   |
| `1d4`                  | content_count |         |
| `1d100 ×content_count` | content       |         |

### color

| roll      | result |
| --------- | ------ |
| `1`, `2`  | blue   |
| `3`, `4`  | purple |
| `5`, `6`  | red    |
| `7`, `8`  | green  |
| `9`, `10` | yellow |

### biome

| color      | 1                  | 2                    | 3               | 4                 | 5                            | 6                    |
| ---------- | ------------------ | -------------------- | --------------- | ----------------- | ---------------------------- | -------------------- |
| **blue**   | rocky tidepools    | sandy flats & lagoon | reedland marsh  | river valley      | same color, reroll this step | same biome as before |
| **purple** | ethereal haze-zone | peat bog & mudflats  | sulphur springs | fungal hollows    | same color, reroll this step | same biome as before |
| **red**    | desert & oasis     | wind-cut badlands    | savannah        | volcanic flats    | same color, reroll this step | same biome as before |
| **green**  | temperate forest   | tropical rainforest  | pine coast      | fertile farmland  | same color, reroll this step | same biome as before |
| **yellow** | frozen tundra      | highland cliffs      | alpine peaks    | open grass plains | same color, reroll this step | same biome as before |

### content_count

| roll | result     |
| ---- | ---------- |
| `1`  | 0 content  |
| `2`  | 1 content  |
| `3`  | 2 contents |
| `4`  | 3 contents |

### content

_rolled once per content_count; each result generates its contents inline._

| roll     | result                                      |
| -------- | ------------------------------------------- |
| `01-20`  | NPC — {{gen: npc}}                          |
| `21-40`  | camp (leader +2 DEF/ATK) — {{gen: monster}} |
| `41-60`  | {{gen: landmark}}                           |
| `61-80`  | {{gen: town}}                               |
| `81-100` | {{gen: dungeon}}                            |
