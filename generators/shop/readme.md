# Generate Shop Inventory

A notable item in stock — what it is, how good, and what's odd about it.
(See [town building](/generators/building/readme.md) for the kind of shop.)

## steps

| die    | label   | depends |
| ------ | ------- | ------- |
| `1d10` | item    |         |
| `1d6`  | quality |         |
| `1d6`  | quirk   |         |

### item

| roll | result                                                    |
| ---- | --------------------------------------------------------- |
| 1    | a weapon: {{pick: blade \| bow \| hafted \| hidden}}      |
| 2    | armor or a shield                                         |
| 3    | a potion or draught                                       |
| 4    | a tool or kit for a trade                                 |
| 5    | a book, map, or sealed letter                             |
| 6    | jewelry or a small trinket                                |
| 7    | fine clothing or a disguise                               |
| 8    | a mount, beast, or familiar                               |
| 9    | raw material: {{pick: ore \| hide \| reagents \| lumber}} |
| 10   | an oddity even the seller can't explain                   |

### quality

| roll | result                            |
| ---- | --------------------------------- |
| 1    | shoddy — cheap, and it shows      |
| 2, 3 | common — fair price, does the job |
| 4, 5 | fine — well-made, priced for it   |
| 6    | exceptional — rare, and dear      |

### quirk

| roll | result                                         |
| ---- | ---------------------------------------------- |
| 1    | the seller won't say where it came from        |
| 2    | it's not actually theirs to sell               |
| 3    | there's exactly one, and someone else wants it |
| 4    | it comes with a condition                      |
| 5    | it's slightly wrong in a way you can't place   |
| 6    | nothing's wrong with it — which is suspicious  |
