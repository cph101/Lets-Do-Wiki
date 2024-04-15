---
sidebar_position: 3
---

import { ItemList } from '@site/src/components/modules/List';
import { ItemIcon } from '@site/src/components/modules/Icon';

# Items
## Tea
<ItemIcon modId="herbalbrews" imageId="jug.png" description="The core of this mod: The various variations of tea." />

Each tea offers a different effect. Some types of tea can be placed for decoration purposes.
Teas are crafted in a [Tea Kettle](blocks.md#tea-kettle).

***

## Flasks
<ItemIcon modId="herbalbrews" imageId="health_flask_big.png" description="Flasks behave similarly to Potions - they are drinkable and mainly provide bonuses to damage and armor. There are both small and large flasks; however, these only differ in the duration of the effect." />
Flasks are crafted in a [Brewing Cauldron](blocks.md#brewing-cauldron).

***

## Ingredients

<ItemList modId="herbalbrews" list={ingredients} />

export const ingredients = [
{
"name": "Coffee Beans",
"imageId": "coffee_beans.png",
"description": "Can be obtained by harvesting wild coffee. Usable as seeds for Coffee Plants."
},
{
"name": "Lavender Blossom",
"imageId": "lavender.png",
"description": "Can be obtained by harvesting Lavender with shears."
},
{
"name": "Tea Blossoms",
"imageId": "tea_blossom.png",
"description": "Can be obtained by harvesting flowers with shears. Usable as seeds for Tea Plants."
},
{
"name": "Green Tea Leafs",
"imageId": "green_tea_leaf.png",
"description": "Can be obtained by harvesting flowers with shears. Usable as seeds for Tea Plants."
},
{
"name": "Dried Green Tea",
"imageId": "dried_green_tea.png",
"description": "Can be obtained by [drying](drying.md) a Green Tea Leaf Block"
},
{
"name": "Dried Black Tea",
"imageId": "dried_black_tea.png",
"description": "Can be obtained by [drying](drying.md) a Dried Green Tea Leaf Block."
},
{
"name": "Dried Oolong Tea",
"imageId": "dried_oolong_tea.png",
"description": "Can be obtained by [drying](drying.md) a Mixed Tea Leaf Block."
}
];

***

## Completionist Banner
<ItemIcon modId="herbalbrews" imageId="herbalbrews_standard.png" description="The Completionist Banner is awarded to all players who have crafted all Tea Variants from the HerbalBrews Mod." />

**Note:** To receive the respective Advancements, you need all the items in your inventory at the same time.

<br />

Thank you for playing HerbalBrews! ❤️
