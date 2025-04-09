LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.FISHING)
        .removeLoot("*")
    // All Biomes
         .addWeightedLoot([
                Item.of("aquaculture:driftwood").withChance(50),
                Item.of("aquaculture:tin_can").withChance(15),
                Item.of("minecraft:cod").withChance(10),
                Item.of("minecraft:salmon").withChance(5),
                Item.of("minecraft:tropical_fish").withChance(2),
                Item.of("minecraft:puffer_fish").withChance(1),
                Item.of("aquaculture:jellyfish").withChance(4),
                Item.of("aquaculture:red_grouper").withChance(9),
                Item.of("aquaculture:tuna").withChance(4),
                Item.of("fishofthieves:islehopper").withChance(7),
                Item.of("fishofthieves:splashtail").withChance(8),
                // Junk
                Item.of("aquaculture:algae").withChance(15),
                Item.of("minecraft:string").withChance(12),
                Item.of("minecraft:kelp").withChance(8),
                Item.of("aquaculture:fish_bones").withChance(4),
                Item.of("aquaculture:message_in_a_bottle").withChance(5),
                Item.of("leather").withChance(5),
                // Treasure
                Item.of("minecraft:book").withChance(1),
                Item.of("minecraft:fishing_rod").withChance(1)
        ])
        .enchantWithLevels([1, 30])
        .damage([0.1, 0.9])
    // Cold Beach and Ocean
    event
        .addLootTypeModifier(LootType.FISHING)
        .biome(["#forge:is_cold", "#minecraft:is_beach"])
        .removeLoot("*")
        .addWeightedLoot([
                Item.of("aquaculture:atlantic_cod").withChance(5),
                Item.of("aquaculture:blackfish").withChance(5),
                Item.of("aquaculture:pacific_halibut").withChance(5),
                Item.of("aquaculture:atlantic_halibut").withChance(5),
                Item.of("atlantic_herring").withChance(10),
                Item.of("aquaculture:pink_salmon").withChance(5),
                Item.of("aquaculture:pollock").withChance(5),
                Item.of("finsandtails:blu_wee").withChance(5),
                Item.of("fishandtails:teal_arrowfish").withChance(5),
                // All Biomes
                Item.of("aquaculture:driftwood").withChance(50),
                Item.of("aquaculture:tin_can").withChance(15),
                Item.of("minecraft:cod").withChance(10),
                Item.of("minecraft:salmon").withChance(5),
                Item.of("minecraft:tropical_fish").withChance(2),
                Item.of("minecraft:puffer_fish").withChance(1),
                Item.of("aquaculture:jellyfish").withChance(4),
                Item.of("aquaculture:red_grouper").withChance(9),
                Item.of("aquaculture:tuna").withChance(4),
                Item.of("fishofthieves:islehopper").withChance(7),
                Item.of("fishofthieves:splashtail").withChance(8),
                // Junk
                Item.of("minecraft:string").withChance(12),
                Item.of("minecraft:kelp").withChance(8),
                Item.of("aquaculture:fish_bones").withChance(4),
                Item.of("aquaculture:message_in_a_bottle").withChance(5),
                Item.of("leather").withChance(5),
                // Treasure
                Item.of("minecraft:book").withChance(1),
                Item.of("minecraft:fishing_rod").withChance(1)
        ])
        .enchantWithLevels([1, 30])
        .damage([0.1, 0.9])
    event
        .addLootTypeModifier(LootType.FISHING)
        .biome(["#forge:is_cold", "#minecraft:is_ocean"])
        .removeLoot("*")
        .addWeightedLoot([
                Item.of("aquaculture:atlantic_cod").withChance(5),
                Item.of("aquaculture:blackfish").withChance(5),
                Item.of("aquaculture:pacific_halibut").withChance(5),
                Item.of("aquaculture:atlantic_halibut").withChance(5),
                Item.of("atlantic_herring").withChance(10),
                Item.of("aquaculture:pink_salmon").withChance(5),
                Item.of("aquaculture:pollock").withChance(5),
                Item.of("finsandtails:blu_wee").withChance(5),
                Item.of("fishandtails:teal_arrowfish").withChance(5),
                // All Biomes
                Item.of("aquaculture:driftwood").withChance(50),
                Item.of("aquaculture:tin_can").withChance(15),
                Item.of("minecraft:cod").withChance(10),
                Item.of("minecraft:salmon").withChance(5),
                Item.of("minecraft:tropical_fish").withChance(2),
                Item.of("minecraft:puffer_fish").withChance(1),
                Item.of("aquaculture:jellyfish").withChance(4),
                Item.of("aquaculture:red_grouper").withChance(9),
                Item.of("aquaculture:tuna").withChance(4),
                Item.of("fishofthieves:islehopper").withChance(7),
                Item.of("fishofthieves:splashtail").withChance(8),
                // Junk
                Item.of("minecraft:string").withChance(12),
                Item.of("minecraft:kelp").withChance(8),
                Item.of("aquaculture:fish_bones").withChance(4),
                Item.of("aquaculture:message_in_a_bottle").withChance(5),
                Item.of("leather").withChance(5),
                // Treasure
                Item.of("minecraft:book").withChance(1),
                Item.of("minecraft:fishing_rod").withChance(1)
        ])
        .enchantWithLevels([1, 30])
        .damage([0.1, 0.9])

    // Warm and Lukewarm Ocean
    event
        .addLootTypeModifier(LootType.FISHING)
        .anyBiome(["minecraft:warm_ocean","minecraft:lukewarm_ocean","minecraft:deep_lukewarm_ocean"])
        .removeLoot("*")
        .addWeightedLoot([
                Item.of("finsandtails:banded_redback_shrimp").withChance(8),
                Item.of("finsandtails:amber_spindly_gem_crab").withChance(2),
                Item.of("finsandtails:emerald_spindly_gem_crab").withChance(2),
                Item.of("finsandtails:ruby_spindly_gem_crab").withChance(2),
                Item.of("finsandtails:sapphire_spindly_gem_crab").withChance(2),
                Item.of("finsandtails:pearl_spindly_gem_crab").withChance(2),
                Item.of("finsandtails:bugfish_mandibles").withChance(2),
                // All Biomes
                Item.of("aquaculture:driftwood").withChance(50),
                Item.of("aquaculture:tin_can").withChance(15),
                Item.of("minecraft:cod").withChance(10),
                Item.of("minecraft:salmon").withChance(5),
                Item.of("minecraft:tropical_fish").withChance(2),
                Item.of("minecraft:puffer_fish").withChance(1),
                Item.of("aquaculture:jellyfish").withChance(4),
                Item.of("aquaculture:red_grouper").withChance(9),
                Item.of("aquaculture:tuna").withChance(4),
                Item.of("fishofthieves:islehopper").withChance(7),
                Item.of("fishofthieves:splashtail").withChance(8),
                // Junk
                Item.of("minecraft:string").withChance(12),
                Item.of("minecraft:kelp").withChance(8),
                Item.of("aquaculture:fish_bones").withChance(4),
                Item.of("aquaculture:message_in_a_bottle").withChance(5),
                Item.of("leather").withChance(5),
                // Treasure
                Item.of("minecraft:book").withChance(1),
                Item.of("minecraft:fishing_rod").withChance(1)
        ])
        .enchantWithLevels([1, 30])
        .damage([0.1, 0.9])
})