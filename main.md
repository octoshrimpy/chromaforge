>====================
# Pre Game

    1. separate colors
    2. stack instants, sorceries enchantments per color
    3. stack playable characters: <race> <class>
    4. will end up with a stack of monsters per color


>====================
# Mechanics

artifacts:
    collected throughout the game

overrides:
    land for tile generation can be chosen to force a specific narrative

money:
    rupy          1rp = 20gp
    gold piece    1gp = 10sp
    silver piece  1sp = 10cp
    copper piece  

generators:
    there are 3 main campaign progressors: town, dungeon, quest.
    these 3 will have their own in-depth generators
      
>====================
# Functions

color choice:
    always start at the top, count clockwise, if 6, pick color manually

>====================
# Player Generation

## class

2d6 for 2  base,
  if 6, choose class by hand 
  pick 1 class & subclass
  non-chosen class is "major attribute"

## race

## attack

2x `color choice`, pick 1 color

draw 3 attacks, pick 2    


All players start with: 
    1 Spirit Orb
    2 Silver Pieces
            
>====================
# OLD - Player Generation

    1. `color choice`, pick random card
    2. `color choice`, pick 1 instant/spell per starting level

All players start with: 
    1 Spirit Orb
    2 sp
    

>====================
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



>====================
# Generate Monster

  draw, 1d2
    1. draw again, coinflip
    2. heads, no more monsters


>====================
# Generate Town

    town - only generate buildings as players interact
        tavern
        town hall
        shop
            
        1d4 - Rumor + quests?
          1. t yes rumor no quest
          2. t yes rumor yes quest
          3. t no rumor  yes quest
          4. t no rumor  no quest - town hall defaults to quest

        1d6 (+3 above) - building count


>====================

# Generate Town Building

01 - 20 `shops` - only sell
    1. enchanted bookstore
    2. tailor - rich
    3. tailor - poor
    4. rare materials
    5. oracle
    6. inn
    7. bakery
    8. maps
    9. oddities

21 - 40 `services` - sell, modify
    1. blacksmith
    2. carpenter
    3. fletcher
    4. leathersmith
    5. alchemist
    6. jeweler
    7. brewery
    8. armorer
    9. enchanter

41 - 60 `entertainment` - can visit, quests
    1. library
    2. temple
    3. adventurer guild
    4. magic guild
    5. fight guild
    6. theater
    7. sanctuary
    8. pub
    9. warehouse

61 - 80 `decorative` - meeting places
    1. cafe
    2. restaurant
    3. bathhouse
    4. gardens
    5. colisseum
    6. tavern
    7. pond / lake
    8. shrine
    9. flower patch

81 - 100 `town services` - town basics
    1. school
    2. customs yard
    3. police dept
    4. prison
    5. barracks
    6. bank
    7. church
    8. hospital
    9. stables

>====================
# Generate Quest

>====================
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
        
>====================
riddles
  https://www.dndspeak.com/2018/11/28/100-riddles-and-their-answers/

# Puzzles
    none of these will be available to put down with cards or dice.
    read description to understand, design in your mind, and describe
    to the players. 100% voice-based roleplay no dice or cards.

>    for item:

      * greedy pool
          syphon cup, acid (or deep), and item at the bottom
          
      * weighted scale
          item attached to ceiling, need to raise party member up

      * sequenced journal
          somewhere in room is a written sequence of numbers
          journal has numbered pages, they have to be inserted
          into journal binding in correct order, and then placed
          on pedestal

      * portal pool cup
          pools in bowls work like portals. reach in one, reaches
          out of the other. used to reach items or buttons

>    for entryway:

      * fake countdown switch
          counts down from 1d10+10 seconds, each second is a turn
          countdown does nothing, door opens afterwards
          
      * get the door to say password
          pick a random word, engraved above door is "password is X"
          get door to say password
          
      * path through ground plates
          random order 1-6, players have to step on floor cols
          correctly in right order

      * turn the statue - 1d4 - 1
          statue in middle of room. 3 doorways, closed. attack the
          statue, it will attack for one turn. get it to turn towards
          the correct dorway to open. wrong doorways open to nothing

      
>    other - to explore further:

      * mirror & light
          point light beam through 1+ mirrors at the correct location

      * show me only wealth
          pedestal in middle of room, face on one side, sentence on
          another, stating "show me only X". players have to cover
          up the rest of the sentence, "show me only" so the statue
          only sees X. put random items in room, as red herrings
          for pedestal. 

      * riddles


>====================

# extra resources

buildings
  https://www.cartographersguild.com/attachment.php?attachmentid=51838&d=1360045569


>======================
descriptions & mods



    triton          BLU
      medium
      Aquatic creatures. Merfolk with legs.

    orog            RED
      large
      Really smart orc. Taller, stronger.

    tiefling        BLK
      medium
      Horned brows. Red, purple, otherwise dark skin.

    dwarf           RED
      small
      Short, stout beings, fond of alcohol.

    elf             WHI BLK
      medium
      Slender, graceful, quiet. 

    argonian        GRN BLU
      medium
      Reptilian humanoids, resistant to disease and poison.

    imp             RED
      tiny
      Tiny devils. Impervious to magic and can go invisible.
      
    gnome           WHI RED
      small
      Always busy, always curious.

    goblin          GRN BLK
      small
      Weak, crafty, stealthy.

    genasi          
      1d4 earth, water, fire, air
      medium
      

    piglin          RED
      medium

    unknown         WHI BLK
      medium

    spellforged 
      large
      1d4 acid, water, fire, lightning

    titanborne      GRN RED
      large

    duarling        RED BLK 
      small

    human           WHT
      medium

    centaur         GRN
      large

    hobbit          GRN
      small

    treant/ent      GRN
      large

    troll           RED BLK
      large

    dragonkin       RED
      medium

    lizardfolk      BLU GRN
      medium

    kobold          BLK     
      small

    fae             GRN
      small

    satyr           GRN RED
      medium 

    khajit          WHI GRN
      medium

    pump-kin        GRN BLK
      medium

    roo             RED WHI
      medium

    etterkin        BLK
      medium

    kerbal          WHI
      small

    dryad           BLU
      medium

    naga            BLK
      medium

    yeti            BLU
      large

    amazonian       GRN
      large

    golem        
      1d4 earth, water, fire, air
      large

    lynel           WHI
      large

    sentient automaton NONE
      medium

    tortle          BLU
      medium

    moonfolk        WHI  
      small

    aarakocra       WHI GRN
      medium

    aligotarian     BLU
      medium

    animated armor  BLK 
      large

    halfling        WHI BLU
      small

    valkrye         WHI
      medium

    qualf           WHI BLU   
      small
