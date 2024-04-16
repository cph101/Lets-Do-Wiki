---
sidebar_position: 1
---
import Icon from '@site/src/components/modules/Icon';
import { BlockList2 } from '@site/src/components/modules/List2';


# Misc
## World Generation

<Icon modId="vinery" imageId="apple_tree_sapling.png" description="After successfully adding Vinery to your mods, you will be able to discover various new plant species in newly generated chunks. Some of these will be more common, while others will be rarer to find. So keep your eyes open!" type="misc" />

### Apple and Cherry Trees
Apple and Cherry Trees spawning in temperate Biomes such as Plains, Meadow and Sunflower Plains. They look similar to Oak Trees but some Leaves have visible red Fruits on it - to harvest them, make sure your main hand is empty. Then you can (while targeting the Leaves Block with visible Fruits) right-click and you'll get a freshly picked Fruits!

:::tip

There is a marginal chance that you will get a rotten cherry. Ugh - please don't eat that! Maybe you can throw it at undesirable creatures (or friends)?

:::

### Grapes

<BlockList2 modId="vinery" list={grapes} />

export const grapes = [
{
"name": "Grapes",
"imageId1": "red_grape.png",
"imageId2": "white_grape.png",
"description": "Can be found in Forest, Plains, Swamp, Birch Forest, Meadow, Sunflower Plains, and River biomes. They are quite common and easy to find."
},
{
"name": "Taiga Grapes",
"imageId1": "taiga_red_grape.png",
"imageId2": "taiga_white_grape.png",
"description": "Can mostly be found in taiga biomes and all sub-variants. These are quite rare and it may require a longer journey to find them."
},
{
"name": "Savanna Grapes",
"imageId1": "savanna_red_grape.png",
"imageId2": "savanna_white_grape.png",
"description": "Can mostly be found in savanna biomes and all sub-variants. However, these are very rare."
},
{
"name": "Jungle Grapes",
"imageId1": "jungle_red_grape.png",
"imageId2": "jungle_white_grape.png",
"description": "Can be found in jungle biomes and all sub-variants. They are quite common and easy to find."
}
];

:::tip

You can also acquire all grape seeds from a [Wandering Wine Trader](misc.md#wandering-wine-trader).

:::

:::info

All Grapes will also spawn in modded biomes as long as they use the respective biome tags.

:::

***

## Wine Aging
<Icon modId="vinery" imageId="calendar.png" description="Every 16 days (384,000 ticks), your wine will gain an additional year of aging, and every five years, it will gain an additional level to its effect up to a maximum effect level of 5." type="misc" />
You don't need to perform a special action with your wine to let it age; just leave it in your inventory, a chest, barrel, cabinet, etc.

:::info

Duration can be changed in the configuration.

:::

***

## Wandering Wine Trader
<Icon modId="vinery" imageId="wandering_winemaker_spawn_egg.png" description="Having trouble finding specific Seeds or Grapes? Then keep an eye out for the wandering Winemaker." type="misc" />
There's a chance that he will visit you from time to time, offering Vinery-specific items in exchange for Emeralds. His offers vary each time.

:::info

The Wandering Winemaker shares the spawn chance with the Minecraft Wandering Trader. This can be adjusted in the config.

:::