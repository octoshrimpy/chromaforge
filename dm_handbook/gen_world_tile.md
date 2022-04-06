
## Tile Color

_1d100, 1d10, 1d6, 1d4_

1d100 determines content
1d10 determines color
1d6 determines biome
1d4 determines how much oontent generates
1. one thing
2. two things
3. three things
4. nothing (land is empty)

if 1d6 = 5, 
    ignore color die, 
    roll again until 1d6 not 5, or 6

if 1d6 = 6,
    move forward with same biome as current

1 - 2: white
1. plains
2. grasslands
3. snowy peaks
4. frozen forest
5. same color (roll 1d6)
6. same biome

3 - 4: blue
1. riverlands
2. flooded canyon
3. lake
4. water caves
5. same color (roll 1d6)
6. same biome

5 - 6: black
1. swamp
2. burned wasteland
3. sulphur pools
4. giant mushroom fields
5. same color (roll 1d6)
6. same biome

7 - 8: red
1. desert
2. savannah
3. volcanic lands
4. lava geyser field
5. same color (roll 1d6)
6. same biome

9 - 0: green
1. forest
2. jungle
3. flower fields
4. orchards
5. same color (roll 1d6)
6. same biome


## Tile Content

if roll ends on 0, then tile is empty

01 - 20 `NPC`
  1. friendly
  2. friendly
  3. friendly
  4. friendly
  5. store
  6. store
  7. store
  8. Generate Quest
  9. Generate Quest

21 - 40 `hunting / camp` 
  * 1d2
    * heads - camp + quest
    * tails - hunting party
  * +2DEF,1ATK to leader

  1. monster - 1d4  +2
  2. monster - 1d6  +2
  3. monster - 1d8  +2
  4. monster - 1d10 +2
  5. monster - 1d12 +2
  6. quest - 1d4    +2
  7. quest - 1d6    +2
  8. quest - 1d8    +2
  9. quest - 1d10   +2
  10. quest - 1d12  +2
  
41 - 60 `landmark`
  Generate Landmark
  
61 - 80 `town` see mech:generators
  Generate Town
  
81 - 100 `dungeon` see mech:generators
  Generate Dungeon

