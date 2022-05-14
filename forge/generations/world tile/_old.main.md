
# World  Generation

### Tile 

    1. draw random land card (see mech:overrides)
    2. 1d100 for tile contents    
    
        xx0 - nothing; overrides everything below
        1. roll ends on digit
        easy mode: 1d2 to lower chance of monsters
        
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
        
        21 - 40 `camp` +2DEF,1ATK to leader
          1. monster - 1d4  +2
          2. monster - 1d6  +2
          3. monster - 1d8  +2
          4. monster - 1d10 +2
          5. monster - 1d12 +2
          6. quest - 1d4    +2
          7. quest - 1d6    +2
          8. quest - 1d8    +2
          9. quest - 1d10   +2
          
        41 - 60 `monster`
          Generate Monster
          
        61 - 80 `town` see mech:generators
          Generate Town
          
        81 - 100 `dungeon` see mech:generators
          Generate Dungeon

