LootJS.modifiers((event) => {
    const RandomBonus =
        Java.loadClass("net.minecraft.world.level.storage.loot.predicates.BonusLevelTableCondition")
    const condition =
        RandomBonus.bonusLevelFlatChance("unusualfishmod:unusual_catch", [0, 0.3]).build()
    event
        .addLootTypeModifier(LootType.FISHING)
        .addCondition(condition)
        .anyBiome(["minecraft:warm_ocean","minecraft:lukewarm_ocean","minecraft:deep_lukewarm_ocean"])
        .removeLoot("*")
        .addWeightedLoot([
            Item.of("unusualfishmod:raw_amber_goby").withChance(30),
            Item.of("unusualfishmod:raw_circus_fish").withChance(30),
            Item.of("unusualfishmod:raw_clownfish").withChance(30),
            Item.of("unusualfishmod:raw_copperflame_anthias").withChance(30),
            Item.of("unusualfishmod:raw_duality_damselfish").withChance(10),
            Item.of("unusualfishmod:raw_forkfish").withChance(20),
            Item.of("unusualfishmod:raw_picklefish").withChance(10),
            Item.of("unusualfishmod:raw_sneep_snorp").withChance(30),
            Item.of("unusualfishmod:raw_spindlefish").withChance(20)
        ])
    event
        .addLootTypeModifier(LootType.FISHING)
        .addCondition(condition)
        .removeLoot("*")
        .addWeightedLoot([
            Item.of("unusualfishmod:raw_beaked_herring").withChance(15),
            Item.of("unusualfishmod:raw_demon_herring").withChance(20)
        ])
})