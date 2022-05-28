# Tile Color _simple_

## dice

| dice    | role          |
|---------|---------------|
| `1d10`  | color         |
| `1d6`   | biome         |
| `1d4`   | content count |
| `1d100` | content       |


### 1d10 _color_

| roll      | color  |
|-----------|--------|
| `1`, `2`  | blue   |
| `3`, `4`  | purple |
| `5`, `6`  | red    |
| `7`, `8`  | green  |
| `9`, `10` | yellow |

### 1d6 _biome_

5. same color as previous, roll 1d6
6. same biome as previous

| color      | 1          | 2                | 3              | 4               |
|------------|------------|------------------|----------------|-----------------|
| **blue**   | riverlands | flooded canyon   | lake           | water caves     |
| **purple** | swamp      | burned wasteland | sulphur pools  | giant mushrooms |
| **red**    | desert     | savannah         | volcanic lands | lava geyser     |
| **green**  | forest     | jungle           | flower prairie | orchards        |
| **yellow** | plains     | grasslands       | snowy peaks    | frozen forest   |

### 1d4 content count

1. 0 content
1. 1 content
1. 2 contents
1. 3 contents


### 1d100 content
_roll one per generated content count_

> 📝 **note:** if roll ends on 0, then tile is empty

| full roll   | last # | content                                         |
|-------------|--------|-------------------------------------------------|
| `01` - `20` |        | `NPC`                                           |
|             | 1      | friendly                                        |
|             | 2      | friendly                                        |
|             | 3      | friendly                                        |
|             | 4      | friendly                                        |
|             | 5      | store                                           |
|             | 6      | store                                           |
|             | 7      | store                                           |
|             | 8      | quest                                           |
|             | 9      | quest                                           |
| `21` - `40` |        | `camp`                                          |
|             | 1      | monster 1   +2                                  |
|             | 2      | monster 1d4 +2                                  |
|             | 3      | monster 1d6 +2                                  |
|             | 4      | monster 1d8 +2                                  |
|             | 5      | quest 1d4 +2                                    |
|             | 6      | quest 1d6 +2                                    |
|             | 7      | quest 1d8 +2                                    |
|             | 8      | quest 1d10 +2                                   |
|             | 9      | quest 1d12 +2                                   |
| `41` - `60` |        | `landmark` [🔗](/generators/landmark/readme.md) |
| `61` - `80` |        | `town` [🔗](/generators/town/readme.md)         |
| `81` - `00` |        | `dungeon`[🔗](/generators/dungeon/readme.md)    |








