---
sidebar_position: 1
---
import Icon from '@site/src/components/modules/Icon';
import Image from '@site/src/components/modules/Image';
import IconList from '@site/src/components/modules/IconList';


# World Generation
## Meadow

<Icon modId="meadow" imageId="pine_sapling.png" description="After successfully adding Meadow to your mods, you will be able to discover the overhauled Meadow Biome in newly generated chunks. So keep your eyes open!" type="worldgen" />
Meadow only changes the biome itself. It does not alter the frequency, spawn locations, or height map of the biome.

The changes are achieved by removing features (Vanilla) and adding new features (Meadow). As a result, it is compatible with all other worldgen mods.

The Meadow biome is divided into three sub-biomes: Meadow, Forest, Clearing. The placement of the respective sub-biomes is based on noise values and can vary greatly in terms of frequency from biome to biome.

<Image modId="meadow" imageId="meadow.png" align="center" />

***

## Terrain
<Icon modId="meadow" imageId="limestone.png" description="The terrain of the overhauled Meadow biome has an increased number of limestone boulders on both larger and smaller steeply sloping hills. Natural stone and limestone slabs also generate on rock formations, and the ground has patterns of coarse dirt and - mainly near forest areas - podzol." pixelated="false" type="worldgen" />
It also changes the rock: instead of stone, you will find mainly limestone in meadow biomes. This differs from the normal stone only in color and texture. Almost all ores can also be found in limestone.

***

## Vegetation
<Icon modId="meadow" imageId="small_fir.png" description="The vegetation of the Meadow Biome also appears more vibrant and wild through the use of new flowers and increased generation of grass and tall grass." type="worldgen" />
There are several new flowers that take inspiration from the Alpine landscapes of Switzerland and Austria:
<IconList modId="meadow" list={flowers} type="worldgen" />

export const flowers = [
{
"name": "Alpine Poppy",
"imageId": "alpine_poppy.png"
},
{
"name": "Delphinium",
"imageId": "delphinium.png"
},
{
"name": "Enzian",
"imageId": "enzian.png"
},
{
"name": "Eriophorum",
"imageId": "eriophorum.png"
},
{
"name": "Fire Lily",
"imageId": "fire_lily.png"
},
{
"name": "Saxifrage",
"imageId": "saxifrage.png"
}
];

Also, not only fallen trees can be found but also revised firs: The Pine. Pine wood is the new wood set introduced by Meadow.
