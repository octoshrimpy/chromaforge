# Generate Encounter

Something happens on the road. Some results roll a real monster or NPC inline.

## steps

| die    | label | depends |
| ------ | ----- | ------- |
| `1d10` | event |         |

### event

| roll | result                                                                                                               |
| ---- | -------------------------------------------------------------------------------------------------------------------- |
| 1    | ambush from cover — {{gen: monster}}                                                                                 |
| 2    | a lone traveler shares the road — {{gen: npc}}                                                                       |
| 3    | the weather turns hard: {{pick: sudden storm \| rolling fog \| freak heat \| early dark}}                            |
| 4    | an abandoned camp, the fire still warm                                                                               |
| 5    | a rival party going the other way — {{gen: npc}}                                                                     |
| 6    | wildlife on the move: {{pick: a migrating herd \| a circling predator \| a nest they've wandered into}}              |
| 7    | a wounded creature blocking the path — {{gen: monster}}                                                              |
| 8    | strange tracks leading off the road                                                                                  |
| 9    | a wayside shrine, recently tended by someone unseen                                                                  |
| 10   | a sound with no source: {{pick: distant bells \| a child laughing \| their own names \| nothing — and that's worse}} |
