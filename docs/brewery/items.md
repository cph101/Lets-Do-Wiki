---
sidebar_position: 2
---

import ItemList from '@site/src/components/modules/ItemList';

# Items

Brewery has <span>{breweryItems.length}</span> items, which are listed below:

<ItemList modId="brewery" itemList={breweryItems} />


export const breweryItems = [
  {
    "name": "Hops",
    "imageId": "hops.png",
    "description": "Teleports the user to their last-used bed when held for 4 seconds. Has a Cooldown of 5 minutes."
  },
  {
    "name": "Hops Seeds",
    "imageId": "hops_seeds.png",
    "description": "Liquid fire gun. Has 200 uses."
  },
  {
    "name": "Barley",
    "imageId": "barley.png",
    "description": "A special torch variant found rarely in chests and used in rituals to obtain **titan dust**. Only torches placed by the player will drop, and only if they have not been used before."
  },
  {
    "name": "Barley Seeds",
    "imageId": "barley_seeds.png",
    "description": "Book, IDK what else to write here lol"
  },
  {
    "name": "Corn",
    "imageId": "corn.png",
    "description": "Can be drank to obtain 2-8 XP, yuk!"
  },
  {
    "name": "Corn Seeds",
    "imageId": "corn_seeds.png",
    "description": "Used to ride dragons, normal saddles are a bit too small"
  },
  {
    "name": "Breathalyzer",
    "imageId": "breathalyzer_green.png",
    "description": "Takes 5 seconds to use, and sets the tooltip to how exactly how drunk you are"
  }
];