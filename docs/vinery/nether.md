---
sidebar_position: 5
---
import Icon from '@site/src/components/modules/Icon';
import EffectList from '@site/src/components/modules/EffectList';
import List from '@site/src/components/modules/List';

# Nether Vinery

## Blocks

### Wild Crops
<Icon modId="vinery" imageId="crimson_grape.png" description="After successfully adding NetherVinery to your mods, you will be able to discover various new plant species in newly generated chunks. Some of these will be more common, while others will be rarer to find. So keep your eyes open!" type="nether" />

<List modId="vinery" list={wildCrops} type="nether" />

export const wildCrops = [
{
"name": "Crimson Grape Bush",
"imageId": "crimson_grape_bush.png",
"description": "You can primarily find wild Crimson Grape Bushes in crimson Forest biomes. There is also a chance to find it in various nether structures. They only spawn near Lava Lakes."
},
{
"name": "Warped Grape Bush",
"imageId": "warped_grape_bush.png",
"description": "You can primarily find wild Warped Grape Bushes in warped Forest biomes. There is also a chance to find it in various nether structures. They only spawn near Lava Lakes."
}
];

:::note

You will not be able to find crops in chunks that have already been generated.

:::

### Obsidian Stem
<Icon modId="vinery" imageId="obsidian_stem.png" description="Used to cultivate normal, taiga, savanna, warped and crimson grapes." pixelated="false" type="nether" />

The Stem is two blocks high, and to place the respective seeds, you must (while holding the seeds) click on the upper part. Increased Growth Speed by 10%

***

## Items

### Nether Bag
<Icon modId="vinery" imageId="warped_nether_bag.png" description="Wow! A fancy Bundle." type="nether" />

Works similar like a Bundle. Can be crafted.

***

## Effects

<EffectList modId="vinery" list={effects} />

export const effects = [
{
"name": "Grave Digger",
"imageId": "gravedigger.png",
"description": "Teleports you to your last death point. Works only in the Overworld."
},
{
"name": "Hearthstone",
"imageId": "hearthstone.png",
"description": "Teleports you to your bed. Works only in the Overworld."
},
{
"name": "Netherite",
"imageId": "netherite.png",
"description": "You are immortal! At least for a short moment. Is it worth it for the Netherite Ingot?"
}
];