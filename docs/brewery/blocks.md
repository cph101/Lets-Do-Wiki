---
sidebar_position: 1
---

import BlockList from '@site/src/components/modules/BlockList';
import BlockIcon from '@site/src/components/modules/BlockIcon';


# Blocks
## Wild Crops
After successfully adding Brewery to your mods, you will be able to discover various new plant species in newly generated chunks. Some of these will be more common, while others will be rarer to find. So keep your eyes open!

Note: Hops will also spawn in modded biomes as long as their using the respective biome tags.

<BlockList modId="brewery" itemList={wildCrops} />

export const wildCrops = [
  {
    "name": "Wild Hops",
    "imageId": "wild_hops.png",
    "description": "Can mostly be found in taiga biomes and all sub-variants. It can also be found in Villages and / or Woodland Mansions."
  },
  {
    "name": "Corn",
    "imageId": "corn.png",
    "description": "Can be found in Villages. If you having trouble finding Kernels just throw some Beetroot Seeds on a Woodcutter and enjoy your freshly... cut Kernels."
  },
  {
    "name": "Barley",
    "imageId": "barley.png",
    "description": "Same as Corn. If you having trouble finding Barley Seeds just throw some Wheat Seeds on a Woodcutter and enjoy your freshly cut Barley Seeds."
  }
];

## Silo
The silo is needed to dry harvested wheat, barley, or corn. The silo is modular and can be expanded in both width and height. The larger the silo, the higher the capacity and the shorter the drying time.

### Usage
Right-click with the item to be dried to place it in the silo.\
Right-click to open the silo hatch (when closed).\
Right-click to close the silo hatch (when open).\
<br />
The content also dries with the hatch open. When the hatch is closed, the content will not be emptied automatically.

<BlockList modId="brewery" itemList={silos} />

export const silos = [
{
"name": "Wooden Silo",
"imageId": "silo_wood.png",
"description": "Can be crafted in a Crafting Table by 3*3 planks of any sort."
},
{
"name": "Copper Silo",
"imageId": "silo_copper.png",
"description": "Can be upgraded from a Wooden Silo by using copper and a Sentry smithing template"
}
];

## Big Barrel

<BlockList modId="brewery" itemList={barrel} />

export const barrel = [
{
"name": "Big Barrel",
"imageId": "barrel.png",
"description": "The big barrel currently serves merely as a decorative element. It requires a space of 2x2x2 to be placed."
}
];

## Brewingstation
<BlockIcon modId="brewery" imageId={copper_brewingstation.png} />