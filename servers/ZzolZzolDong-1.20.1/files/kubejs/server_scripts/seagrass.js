LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:seagrass")
        .randomChance(0.1)
        .addLoot("aquaculture:algae")
    event
        .addBlockLootModifier("minecraft:tall_seagrass")
        .randomChance(0.2)
        .addLoot("aquaculture:algae")

})