---
sidebar_position: 2
---

import { BlockList } from '@site/src/components/modules/List';
import { BlockIcon } from '@site/src/components/modules/Icon';
import Image from '@site/src/components/modules/Image';


# Blocks

## Flowers and Wild Crops
After successfully adding HerbalBrews to your mods, you will be able to discover various new plant species in newly generated chunks. Some of these will be more common, while others will be rarer to find. So keep your eyes open!

<BlockList modId="herbalbrews" list={plants} />

export const plants = [
{
"name": "Hibiscus",
"imageId": "hibiscus.png",
"description": "Spawns mainly in Jungle Biomes and its sub-variants using the `#is_jungle` tag. Hibiscus can be used as a decorative element or for crafting Hibiscus Tea."
},
{
"name": "Lavender",
"imageId": "lavender.png",
"description": "Spawns mainly in mountainous Biomes using the `#is_hills` and `#is_mountain` tags. Lavender can be used as a decorative element. When you break it with Shears you will get Lavender Blossoms which is needed for crafting Lavender Tea."
},
{
"name": "Wild Coffee",
"imageId": "wild_coffee_plant.png",
"description": "Spawns mainly in Jungle Biomes and its sub-variants using the `#is_jungle` tag. Break it to get Coffee Beans."
},
{
"name": "Wild Rooibos",
"imageId": "wild_rooibos_plant.png",
"description": "Spawns mainly in Savanna Biomes and its sub-variants using the `#is_savanna` tag. Break it to get Rooibos Leafs."
},
{
"name": "Wild Yerba Mate",
"imageId": "wild_yerba_mate_plant.png",
"description": "Spawns mainly in Jungle Biomes and its sub-variants using the `#is_jungle` tag. Break it to get Yerba Mate Leafs."
}
];

**Note:** All Flowers and Wild Crops will also spawn in modded biomes as long as they use the respective biome tags.

***

## Stove
<BlockIcon modId="herbalbrews" imageId="stove.png" description="Used for heating up your Tea Kettle." />

***

## Tea Kettle
<BlockIcon modId="herbalbrews" imageId="copper_tea_kettle.png" description="The Tea Kettle is your primary crafting station for making Tea and Coffee." />

### Usage
The Tea Kettle has 6 input slots for ingredients (top left), one container slot (middle), one output slot (middle right), and an indicator of whether it is on a hot (lit) surface. Like the Stove, it also offers a built-in recipe book that displays all available recipes and the ingredients required for them.

Once you've placed the ingredients needed for the respective recipe into the corresponding input slots, it takes about 30 seconds for the crafting process to complete - the crafted item then appears in the output slot. To make the small cooking pot usable, it must be on a hot surface. You can recognize this both audiovisually in the game through rising smoke and cooking sounds, as well as visually in the GUI of the cooking pot: The fire changes from grayscale to colorful.

<Image modId="herbalbrews" imageId="tea_kettle_gui.png" align="center" />

***

## Brewing Cauldron
<BlockIcon modId="herbalbrews" imageId="cauldron.png" description="The Brewing Cauldron is your primary crafting station for making Flasks and Potions." />

### Usage
The Brewing Cauldron has 4 input slots for ingredients (top left), one container slot (middle), one output slot (middle right). Like the Stove, it also offers a built-in recipe book that displays all available recipes and the ingredients required for them.

Once you've placed the ingredients needed for the respective recipe into the corresponding input slots, it takes about 45 seconds for the crafting process to complete - the crafted item then appears in the output slot.

<Image modId="herbalbrews" imageId="brewing_cauldron_gui.png" align="center" />