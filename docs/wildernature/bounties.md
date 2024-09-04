---
sidebar_position: 4
---

# Items

## Your own Bounties!
Adding your own bounties is quite simple. I will briefly explain how to do it here.


***

First, you need a `target predicate`, which looks like this:

```{
  "condition": "minecraft:damage_source_properties",
  "predicate": {
    "direct_entity": {
      "type": "wildernature:bullet"
    },
    "source_entity": {
      "type": "minecraft:player"
    }
  }
}
```

**Components**

1. condition:
> The type of condition being defined. In this case, it is damage_source_properties, indicating that the condition relates to the properties of a damage source. We will just keep this as it is.

2. predicate:
> The criteria that must be met for the condition to be true. The predicate contains sub-conditions to specify these criteria.

3. direct_entity:
> This sub-condition specifies the type of the direct entity involved in causing the damage. Here, type is set to wildernature:bullet, meaning the direct entity must be a bullet from WilderNature.

4. source_entity:
> This sub-condition specifies the type of the source entity involved in causing the damage. Here, type is set to player, meaning the source entity must be a player.

Save your own Predicates under `data/wildernature/predicates`

Alright! That was already the most complex step. Well done!

***

Now let's create the corresponding contract.

The Contract json should look like this here:

```{
  "type": "wildernature:tier1",
  "contractStack": {
    "Count": 1,
    "id": "wildernature:uncommon_contract"
  },
  "count": 6,
  "damagePredicate": "wildernature:bullet",
  "description": "contract.wildernature.tier1_boar.desc",
  "name": "contract.wildernature.tier1_boar",
  "reward": {
    "blockExpReward": 2,
    "loot": "wildernature:bountyboard/tier1_contract_boar",
    "playerExpReward": 12
  },
  "targetPredicate": "wildernature:boar"
}
```

**Components**

1. type:
> For which Tier Level will the contract be available

2. contractStack, ID:
> The ID of the Item Icon that will be used. You can use any available Item ID.

3. count:
> The Amount of Entities that have to be killed.

4. damagePredicate:
> The damagePredicate we made before.

5. description:
> The description being shown in the tooltip. Also needs a lang file entry.

6. name:
> The Name of the Contract. Also needs a lang file entry.

7. reward, blockExpReward:
> How much Experience the BountyBoard will get

8. reward, loot:
> The Loot you will get after completing this contract

9. reward, playerExpReward:
> How much Experience the Player will get

10. targetPredicate:
> The Entity you have to kill in order to finish the contract

Save your own Contract under `data/wildernature/contracts`

