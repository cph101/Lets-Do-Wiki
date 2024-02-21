---
sidebar_position: 1
---

import ItemList from '@site/src/components/modules/ItemList';

# Items

Dragonflame has <span>{dragonFlameItems.length}</span> items, which are listed below:

<ItemList modId="dragonflame" itemList={dragonFlameItems} />


export const dragonFlameItems = [
  {
    "name": "Hearthstone",
    "imageId": "hearthstone.png",
    "description": "Teleports the user to their last-used bed when held for 4 seconds. Has a Cooldown of 5 minutes."
  },
  {
    "name": "Flamethrower",
    "imageId": "flamethrower.gif",
    "description": "Liquid fire gun. Has 200 uses."
  },
  {
    "name": "Arcane torch",
    "imageId": "arcane_torch.png",
    "description": "A special torch variant found rarely in chests and used in rituals to obtain **titan dust**. Only torches placed by the player will drop, and only if they have not been used before."
  },
  {
    "name": "Draconic for Dummies",
    "imageId": "draconic_for_dummies.gif",
    "description": "Book, IDK what else to write here lol"
  },
  {
    "name": "Dragon tears",
    "imageId": "dragon_tears.png",
    "description": "Can be drank to obtain 2-8 XP, yuk!"
  },
  {
    "name": "Dragon Saddle",
    "imageId": "dragon_saddle.png",
    "description": "Used to ride dragons, normal saddles are a bit too small"
  }
];