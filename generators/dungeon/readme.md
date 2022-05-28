
# Generate Dungeon

    roll 2d6
      1. small roll is safe rooms, no chance for boss
      2. large roll is potential boss room
      3. if boss not generated in large roll, next room guaranteed
      4. total dungeon size: both rolls above + 1d6
      
    if dead end, no doors around, still could be above or below

    1. 1d100 for room contents    
        1. roll ends on digit
            
            1. no levels
            2. no levels
            3. no levels
            4. no levels
            5. no levels
            6. above, no ladder
            7. above, ladder     
            8. below, hidden
            9. below
        
    01 - 10 `dead end`

    11 - 30 `empty room`

    31 - 60 `monster`

    61 - 80 `treasure door`

    81 - 100 `treasure room`

      roll 1d6
       1. trap, small treasure
       2. trap, medium treasure, generate puzzle
       3. trap, large treasure, generate monster
       4. no trap, small treasure
       5. no trap, medium treasure generate puzzle
       6. no trap, large treasure, generate monster

    `Boss`
        1. 1d6 for color, draw random
        2. add 1d4 to DEF, 1d4 to ATK 