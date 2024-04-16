---
sidebar_position: 1
---
import { BlockList } from '@site/src/components/modules/List';
import { BlockIcon } from '@site/src/components/modules/Icon';
import Image from '@site/src/components/modules/Image';


# Blocks
## Wild Crops
After successfully adding Candlelight to your mods, you will be able to discover various new plant species in newly generated chunks. Some of these will be more common, while others will be rarer to find. So keep your eyes open!

<BlockList modId="candlelight" list={wildCrops} />

export const wildCrops = [
  {
    "name": "Tomatoes",
    "imageId": "wild_tomatoes_3.png",
    "description": "Can mostly be found in plains, savanna and badlands biomes and all sub-variants. It can also be found in Villages."
  },
  {
    "name": "Lettuce",
    "imageId": "wild_lettuce_1.png",
    "description": "Can mostly be found in plains, swamp as well as taiga and forest biomes and all sub-variants."
  }
];

:::info

Crops will also spawn in modded biomes as long as they use the respective biome tags.

:::

***

## Cooking Pot
<BlockIcon modId="candlelight" imageId="cooking_pot.png" description="The Cooking Pot is one of your primary crafting station for making Food." />

### Usage
The block works similarly to the already known crafting stations in Minecraft: It has 6 input slots for ingredients (left), one input slot for a container (middle), and one output slot (right). It also offers a built-in [recipe book](common.md#recipe-book) that displays all available recipes and the ingredients required for them.

Once you've placed the ingredients needed for the respective recipe into the corresponding input slots, it takes about 30 seconds for the crafting process to complete - the crafted item then appears in the output slot.

<Image modId="candlelight" imageId="cooking_pot_gui.png" align="center" />

***

## Cooking Pan
<BlockIcon modId="candlelight" imageId="cooking_pan.png" description="Similar to the Cooking Pot the Cooking Pan is one of your primary crafting station for making Food." />

### Usage
The block works identical to the Cooking Pot: It has 6 input slots for ingredients (left), one input slot for a container (middle), and one output slot (right). It also offers a built-in [recipe book](common.md#recipe-book) that displays all available recipes and the ingredients required for them.

Once you've placed the ingredients needed for the respective recipe into the corresponding input slots, it takes about 30 seconds for the crafting process to complete - the crafted item then appears in the output slot.

<Image modId="candlelight" imageId="cooking_pan_gui.png" align="center" />

***

## Table Set
<BlockIcon modId="candlelight" imageId="wine_glass.png" description="Please come to the table! The plate or bowl is not just for decoration; you can also place all kinds of food items on it and eat from them. You'll then receive an additional bonus to hunger and saturation." />

You can add a napkin, glass, or wine glass to the plate or bowl. This is only for decoration and has no effect.

***

## Typewriter
<BlockIcon modId="candlelight" imageId="typewriter_iron.png" description="The typewriter is ideal for writing longer letters - and of course, it's also perfect for decoration." />
The Typewriter comes in an iron and a copper variant.

### Usage
Right-click to add paper while holding note paper in your main hand. Another right-click will then open the interface. Once you have finished the letter, you can sign it and remove it with another right-click.

***

## Jewelry Box
<BlockIcon modId="candlelight" imageId="jewelry_box.png" description="Planning a wedding? Store and display collected rings." />

### Usage

Shift-Right-Click: Opening / Closing the Box Right-Click: While holding a Ring to place / take a Ring

:::info

You can store all rings that use a correct ring tag in it.

:::

## Chocolate Box
<BlockIcon modId="candlelight" imageId="chocolate_box.png" description="A box full of luck! ... or chocolate. You can eat from it up to 6 times after placing it. Share it with your friends or eat it all by yourself." />

***

## Tool Rack
<BlockIcon modId="candlelight" imageId="tool_rack.png" description="The ideal storage solution for your tools and pans." />

