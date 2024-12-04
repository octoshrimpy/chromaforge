import random

def generate_building():
    # Define building categories and specific buildings within each category
    buildings = {
        'shops': [
            'enchanted bookstore', 
            'tailor - rich', 
            'tailor - poor', 
            'rare materials',
            'oracle', 
            'inn', 
            'bakery', 
            'maps', 
            'oddities'
        ],
        'services': [
            'blacksmith', 
            'carpenter', 
            'fletcher', 
            'leathersmith', 
            'alchemist',
            'jeweler', 
            'brewery', 
            'armorer', 
            'enchanter'
        ],
        'entertainment': [
            'library', 
            'temple', 
            'adventurer guild', 
            'magic guild', 
            'fight guild',
            'theater', 
            'sanctuary', 
            'pub', 
            'warehouse'
        ],
        'decorative': [
            'cafe', 
            'restaurant', 
            'bathhouse', 
            'gardens', 
            'colisseum',
            'tavern', 
            'pond / lake', 
            'shrine', 
            'flower patch'
        ],
        'town services': [
            'school', 
            'customs yard', 
            'police dept', 
            'prison', 
            'barracks',
            'bank', 
            'church', 
            'hospital', 
            'stables'
        ]
    }

    # Simulate a dice roll to determine the building category
    dice_roll = random.randint(1, 100)

    # Determine the building category based on the dice roll
    if dice_roll <= 20:
        category = 'shops'
    elif dice_roll <= 40:
        category = 'services'
    elif dice_roll <= 60:
        category = 'entertainment'
    elif dice_roll <= 80:
        category = 'decorative'
    else:
        category = 'town services'

    # Randomly select a building from the determined category
    building = random.choice(buildings[category])

    return category, building

# Test the function
generate_building()
