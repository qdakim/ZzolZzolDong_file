LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("alexsmobs:seal")
        .randomChance(0.5)
        .addLoot("minecraft:leather")
    event
        .addEntityLootModifier("alexsmobs:tusklin")
        .randomChance(0.5)
        .addLoot("minecraft:leather")   
    event
        .addEntityLootModifier("alexsmobs:moose")
        .randomChance(0.5)
        .addLoot("minecraft:leather")   
    event
        .addEntityLootModifier("alexsmobs:snow_leopard")
        .randomChance(0.5)
        .addLoot("minecraft:leather")   
})