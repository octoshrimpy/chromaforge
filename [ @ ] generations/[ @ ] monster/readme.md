# Generate Monster

  draw, 1d2
    1. draw again, coinflip
    2. heads, no more monsters

--- # how to generate monster(s)

1. 1d10 - encounter purpose
2. 1d10 - house
3. 1d20 - monster
4. if any PC lvl higher than 20, generate multiple monsters 

-----------------------
### TODO

* finish adding description
* finish organizing monsters into houses
* gigantism - one option under each house, re-roll for monster
    * will give more room for monsters

-----------------------

## encounter purpose
_1d10_

1. fight ends - non-human reason
2. PCs feel invincible
3. fight ends - monster runs away - weak
4. PCs feel strong
5. fight ends - monster runs away - higher orders
6. PCs feel weak
7. fight ends - stronger help comes in
8. PCs feel powerless
9. fight ends - rescued from strong attack
0. PCs forced to kill

---

# monster list
_1d10 house, 1d10 monster_
1,2 ran
3,4 arc
5,6 stl
7,8 str
9,0 chr

see: [compendium/monsters]("/compendium/list of monsters")


---

## monster attack
_level - roll for atk dmg_

1,2     1d4
3,4     1d6
5,6     1d8
7,8     d10
9,10    1d10 + 4
11,12   1d12 + 6
13,14   1d20 + 8
15,16   1d10 + 10 
17,18   1d12 + 12
19,20   1d20 + 20

this goes until halfway up the level scale (max 50) 
after this, start spawning in groups every time

---

<!-- todo rethink this bit -->

## generate monster count

1d20 for difficulty scale
to have lower difficulty, use smaller die, down to 1d6

1 - 5
    4 + d4
    
6 - 10
    6 + d6
    
11 - 14
    8 + d8

15 - 17
    10 + d10

18 - 19
    12 + d12

20
    20 + d20
        
lone
    generate monster
    
group
    3 + 1d6
    
horde
    15 + 1d10
