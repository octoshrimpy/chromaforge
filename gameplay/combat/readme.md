# combat

defender does not have to do any work, all numbers influence attacker

1. attacker rolls 1d20 for AC check
2. if AC roll not high enough, no hit
3. if AC roll high enough, proceed with the math below

## on attack
`n` is attacker's racial color house level, divided by 4, rounded down to the nearest whole number

situation: `n` is the difference between attacker and defender. \
if attacker has the high ground, while the defender is prone, that is +2n \
if attacker is prone, while defender is standing, that is -1n

defense status: `n` is based on status
if defender is startled, attacker gets +1n
if defender is default, +0
if defender is braced, -1n

1. attacker calculates:
    1. self.color vs land.color bonus
        * +n same color
        * +0 neighbor colors
        * -n opposite colors
    3. situation advantage
        * high ground
        * standing
        * prone

2. defense calculates:
    1. self.color vs land.color bonus
    2. defense status
        * startled
        * default
        * braced


### Death & Reviving

PCs faint, not die mid-combat. they die after post-fight mechanics are done. 
If a PC gets hit hard, they retain a negative HP value.
Each player may take a turn out of combat to attempt reviving a fainted player.
After a fight is over, each player that has at least 1HP may attempt to revive any fainted player.

Add 1d6 to the fainted player's health.
If HP goes positive, the player survives.
If revived player's HP is higher than 4, they may attempt reviving someone as well.

---

---

# example

# PC: lvl 16

## levels
> 1d10 /2 
> 3x 1d10
> 1d12 

`NTG` 3
`KNW` 5
`CAO` 2
`FRT` 4
`CHR` 2

## color
> 1d10
blue

## situation
> 1d6
high ground

---

# monster

## color
> 1d10
blue

## situation
> 1d6
standing

## defense
> 1d6
default

---

# land

## color
> 1d6
blue

---

modifiers are math.floor(1/4 of main creature color)
_floor(5/4) = 1_

---

pc attacks:
### raw _atk with any color_
    12

### color _only self.color_ 
    +1

### situation
    +1 

### defense
    --      situation
    -1      color

### total attack
    +13
