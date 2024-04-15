---
sidebar_position: 2
---

# General Information about the Let's Do Mods

## Supported Minecraft Versions & Modloaders
We are currently focusing on version 1.20.1 for Minecraft Java, primarily ensuring compatibility with the Fabric Loader.

Since we use the Architectury API, our mods are also available for Forge or NeoForge, but some features may not yet be implemented or may function slightly differently.

Some of our mods are also available for version 1.19.2, but in a more limited form and are no longer actively supported.

## Recipe Book
All crafting stations with a screen handler or GUI include a built-in recipe book, similar to Minecraft's. All recipes are available from the start and do not require unlocking.

:::note

Certain mods, such as FastWorkBench, disable this recipe book. REI and JEI also offer options to hide the recipe book.

:::

## REI / JEI / EMI
All mods support REI and JEI, covering all crafting stations.
EMI is covered via JEI runtime support.

There are no active plans to support EMI.

:::note

Currently, in 1.19.2 JEI is not supported!

:::

## Config
Some mods offer the option to slightly modify your experience through configuration.

You can find the respective files under `/config/<modid>/`.

With the use of [ClothConfig](https://modrinth.com/mod/cloth-config), you can modify the config directly in-game. On Fabric, you also need [Mod Menu](https://modrinth.com/mod/modmenu) to access the config.

:::note

Some changes require restarting the game before they take effect.

:::

## Contributing
We are always very grateful for any help, whether it's implementing additional compatibility, improving code, or translating mods.

However, please consider the following:

* Avoid overly aggressive changes
* Follow existing practices, methods, and naming conventions
* Document your changes
* Test your changes before pushing them to the main branch