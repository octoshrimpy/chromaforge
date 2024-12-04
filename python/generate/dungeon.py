import random

def initialize_dungeon():
    # Determine dungeon size and potential for boss encounters
    initial_roll = sum(random.randint(1, 6) for _ in range(2))
    dungeon_size = initial_roll + random.randint(1, 6)
    return {'dungeon_size': dungeon_size, 'rooms_explored': 0, 'boss_potential': initial_roll > 6}

def generate_room_type():
    # Determine room content
    content_roll = random.randint(1, 100)
    if content_roll <= 10:
        return 'dead end'
    elif content_roll <= 30:
        return 'empty room'
    elif content_roll <= 60:
        return 'monster'
    elif content_roll <= 80:
        return 'treasure door'
    else:
        return 'treasure room'

def generate_room_content():
    # Determine additional room features
    feature_roll = random.randint(1, 6)
    if feature_roll == 1:
        return 'trap, small treasure'
    elif feature_roll == 2:
        return 'trap, medium treasure, puzzle'
    elif feature_roll == 3:
        return 'trap, large treasure, monster'
    elif feature_roll == 4:
        return 'no trap, small treasure'
    elif feature_roll == 5:
        return 'no trap, medium treasure, puzzle'
    else:
        return 'no trap, large treasure, monster'

def generate_boss_encounter():
    # Generate boss attributes
    boss_color = random.randint(1, 10)
    boss_def = random.randint(1, 4)
    boss_atk = random.randint(1, 4)
    return {'color': boss_color, 'DEF': boss_def, 'ATK': boss_atk}

# Example usage:
dungeon = initialize_dungeon()
room_content = generate_room_type()
additional_feature = generate_room_content()
boss_encounter = generate_boss_encounter()

print(dungeon, room_content, additional_feature, boss_encounter)
