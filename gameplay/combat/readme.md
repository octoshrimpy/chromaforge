
# color combat

combat is better explained with a visual of the color wheel: 
```
          yellow


    green           blue


       red      purple
```

Both the attacker and defender get:

* `+1d4 +  (attack pp/2)` if the ground they are attacking is the same as their house attack color (defaults to race base color) 
* +0 if the ground is one of the two next to the attack color
* `-1d4 - (main house pp/2)` if the ground is one of the two farthest colors around the wheel from the attack color

for example, if a `green` character attacked a `yellow` character on `red` terrain, `green` would have a **+0** to the attack, while `yellow` would have a **-1d4** to any defense checks.

```
             yellow
             +0

    green               blue
    +1d4...             -1d4...

        red         purple
        +0          -1d4...
```
_visualizing `green` attacking_

---

# advantage system

* weapon
    * advantage
    * balanced
    * disadvantage

* situation
    * standing vs prone
    * jumping vs standing


situation: balanced

```
defender - laying on ground, with club
    -1 situation (prone)
    +1 weapon (melee)

attacker - standing over defender, bow/arrow
    +1 situation (standing)
    -1 weapon (ranged)
```

whoever wins the advantage check gets a +n where n is the current level of the house the PC is attacking with


---

### Calculating attack

There are 3 kinds of attacks:

* air (jump & punch, flying creature)
* default (regular bar fight)
* exposed (if prone, pinned, crouched)

Attacking with air has advantage over defending default, and default has advantage over exposed. 

Air attacking default has +1 to any damage count. \
Default attacking exposed has +1 to any damage count. \
Air attacking exposed has +2 to any damage count. \

### Calculating weapon efficiency

There are 3 kinds of weapons:

1. magic
2. ranged
3. meelee

> magic beats ranged & meelee at a distance \
ranged beats meelee at a distance

> meelee beats ranged & magic at close range \
ranged beats magic at close range
<!-- //TODO rethink this -->

### Calculating defense

There are 3 levels of defense:

1. surprised
2. default
3. calculated

the defending party calculates `1d6+pp / 2` with the house that the attacker is using

---

### Death & Reviving

PCs faint, not die mid-combat. they die after post-fight mechanics are done. 
If a PC gets hit hard, they retain a negative HP value.
Each player may take a turn out of combat to attempt reviving a fainted player.
After a fight is over, each player that has at least 1HP may attempt to revive any fainted player.

Add 1d6 to the fainted player's health.
If HP goes positive, the player survives.
If revived player's HP is higher than 4, they may attempt reviving someone as well.

