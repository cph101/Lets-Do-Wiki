---
sidebar_position: 1
---
import { BlockList } from '@site/src/components/modules/List';
import { BlockIcon } from '@site/src/components/modules/Icon';



# Blocks
## Wild Crops
After successfully adding Brewery to your mods, you will be able to discover various new plant species in newly generated chunks. Some of these will be more common, while others will be rarer to find. So keep your eyes open!

<BlockList modId="brewery" list={wildCrops} />

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

:::note

Hops will also spawn in modded biomes as long as their using the respective biome tags.

:::

***

## Silo
The silo is needed to dry harvested wheat, barley, or corn. The silo is modular and can be expanded in both width and height. The larger the silo, the higher the capacity and the shorter the drying time.

### Usage
Right-click with the item to be dried to place it in the silo.\
Right-click to open the silo hatch (when closed).\
Right-click to close the silo hatch (when open).

The content also dries with the hatch open. When the hatch is closed, the content will not be emptied automatically.

<BlockList modId="brewery" list={silos} />

export const silos = [
{
"name": "Wooden Silo",
"imageId": "silo_wood.png",
"description": "Can be crafted in a Crafting Table by 3*3 planks of any sort."
},
{
"name": "Copper Silo",
"imageId": "silo_copper.png",
"description": "Can be upgraded from a Wooden Silo by using copper and a Sentry smithing template."
}
];

***

## Big Barrel
<BlockIcon modId="brewery" imageId="barrel.png" description="The big barrel currently serves merely as a decorative element. It requires a space of 2x2x2 to be placed." />

***

## Brewingstation
<BlockIcon modId="brewery" imageId="copper_brewingstation.png" description="Required for brewing beer and whiskey. Unlike ordinary blocks, the brewing station is larger: It consists of 5 separate blocks and therefore requires a space of 2x2x2 for placement." />

### Usage
The brewing station has no GUI and only operates through direct interaction. It is composed of the following blocks:
* Kettle
* Oven
* Timer
* Whistle
 
The Kettle is the centerpiece: That's where all ingredients are placed. The Oven serves as a fire source and needs coal. The other parts are responsible for the minigame.

After the correct ingredients have been placed, the kettle is filled with water, and the oven is lit, the minigame begins. It lasts about 45 seconds and during this time various events can occur that require a direct action from you (or your teammates). The brewing process is represented audiovisually.

Occurring events:

* Kettle needs water: The Whistle whistles, the water level of the Kettle is low - refill the Kettle with water
* Kettle overboils: The water level of the Kettle is high, bubbling bubbles rise - remove water with an empty Water Bucket
* The Timer ticks: Red particles and a ticking sound are emitted - press the button on the Timer
* The Oven has too little heat: Smoke particles rise, the flame of the Oven is low - add more coal


There are different tiers for the brewing station: Wood, Copper, and Netherite. To brew whiskey, you need Copper or Netherite.

:::tip

The faster and better you complete the mini-game, the better the beer quality. If you use a Wood or Copper Brewing Station, some very bad things can even happen!

:::

***

## Beer Mug
<BlockIcon modId="brewery" imageId="beer_mug.png" description="Not only serves as a mug for beer but can also be repurposed as a flower pot. Nice!" />

***

## Rope
<BlockIcon modId="brewery" imageId="rope.png" description="After successfully adding Brewery to your mods, you will be able to discover various new plant species in newly generated chunks. Some of these will be more common, while others will be rarer to find. So keep your eyes open!" />

### Usage
Even though hops can grow without a rope, they can be further stabilized with the use of one. This additional stabilization allows the hops to grow taller than 2 blocks.

The rope can be attached to both fence posts and tripwire hooks. Ropes can also be stretched diagonally. At a height of more than 3 blocks, vertical ropes are automatically created at valid positions—if these are not needed, they can be easily removed with shears.