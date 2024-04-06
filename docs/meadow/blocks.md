---
sidebar_position: 2
---

import { BlockIcon } from '@site/src/components/modules/Icon';
import Image from '@site/src/components/modules/Image';
import { BlockList } from '@site/src/components/modules/List';

# Blocks
## Cheese Press
<BlockIcon modId="meadow" imageId="cheese_press.png" description="The Cheese Press is your primary crafting station for making cheese." />

### Usage

The block has two input slots: One will usually be used for rennet, the other one for milk.

Once you've placed the ingredients needed for the respective recipe into the corresponding input slots, it takes around a minute for the pressing process to complete - the crafted cheese wheel then appears in the output slot.

Depending on which type of milk you use, the produced cheese is different. There are 7 types of cheese. It also offers a built-in recipe book that displays all available recipes and the ingredients required for them.

<Image modId="meadow" imageId="cheese_press_gui.png" align="center" />

**Note:** The cheese wheel located in the output slot is also displayed within the block in the game world.

***

## Cooking Cauldron
<BlockIcon modId="meadow" imageId="cooking_cauldron.png" description="The Cooking Cauldron is your primary crafting station for crafting rennet, delicious meals and other cooked recipes." />

### Usage
The Cooking Cauldron works similarly to the already known crafting stations in Minecraft: It has 6 input slots for ingredients (top left)one output slot (middle right), and an indicator of whether it is on a hot (lit) surface. Like the Cheese Press, it also offers a built-in recipe book that displays all available recipes and the ingredients required for them.

Once you've placed the ingredients needed for the respective recipe into the corresponding input slots, it takes about 30 seconds for the crafting process to complete - the crafted item then appears in the output slot. To make the Cooking Cauldron usable, it must either be on a hot surface or hanging on a frame. You can recognize this both audiovisually in the game through rising bubbles and cooking sounds, as well as visually in the GUI of the cooking pot: The fire changes from grayscale to colorful.

<Image modId="meadow" imageId="cooking_cauldron_gui.png" align="center" />

***

## Woodcutter
<BlockIcon modId="meadow" imageId="woodcutter.png" description="Protect the forests! Save wood" />

### Usage
The woodcutter behaves similarly to the vanilla stonecutter, but instead of stone allows you to easily craft wood recipes directly from logs.

<Image modId="meadow" imageId="woodcutter_gui.png" align="center" />

***

## Wooden Cauldron
<BlockIcon modId="meadow" imageId="wooden_cauldron.png" description="Similar to a usual Cauldron you can store Powder Snow and Water inside of it - it's the perfect early game alternative to save Iron." />

... Lava? No. You can't place Lava inside of it. It's a Wooden Cauldron.

***

## Climbing Rope
<BlockIcon modId="meadow" imageId="climbing_rope.png" description="A small but efficient tool to overcome height differences of up to 10 blocks." />

### Usage
Attach it to the bottom side of a block. Then, you can climb down or up the rope.

***

## Fondue
<BlockIcon modId="meadow" imageId="fondue.png" description="Ah - Fondue. Currently, a quite famous dish from Switzerland. It's primarly there for crafting Cheese Sticks out of Cheese and Bread." />

### Usage
The Fondue works similarly to the already known crafting stations in Minecraft: It has 2 input slot: one for bread, one for cheese (middle left) and one output slot (middle right).

Once you've placed the bread and cheese in the input slot, it takes a few seconds for the crafting process to complete - the crafted item then appears in the output slot.

***

## Cheese Wheel
<BlockIcon modId="meadow" imageId="wheel_of_grain_cheese.png" description="Cheese Wheels are made by using a the Cheese Press." />

There are 7 types of cheeses in Meadow:
* Normal cheese
* Sheep cheese
* Grain cheese
* Amethyst cheese
* Buffalo cheese
* Goat cheese
* Warped cheese

In wheel form, they can be placed as blocks or in cheese racks. When in block form, wheels can be right-clicked to obtain cheese in piece form.

<Image modId="meadow" imageId="cheese_rack.png" align="center" />

***

## Decorative Blocks
<BlockIcon modId="meadow" imageId="camera.png" description="Of course, there are also some decorative blocks. Some of them, such as the camera, door mat, or fire logs, have no further use other than as a decorative element." />

<BlockList modId="meadow" list={decorativeBlocks} />

export const decorativeBlocks = [
{
"name": "Can",
"imageId": "can.png",
"description": "Serves as storage for milk and water."
},
{
"name": "Flower Box",
"imageId": "flower_box.png",
"description": "Can be decorated with 2 small flowers."
},
{
"name": "Flower Pot",
"imageId": "flower_pot.png",
"description": "Can be decorated with 1 small flower."
},
{
"name": "Big Flower Pot",
"imageId": "flower_pot_big.png",
"description": "Can be decorated with big flowers."
},
{
"name": "Wheelbarrow",
"imageId": "wheelbarrow.png",
"description": "Can be decorated with big flowers."
},
{
"name": "Oil Lantern",
"imageId": "oil_lantern.png",
"description": "Same effect like a usual Lantern."
}
];

***
