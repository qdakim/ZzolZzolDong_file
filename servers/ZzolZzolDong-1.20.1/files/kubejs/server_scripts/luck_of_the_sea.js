LootJS.modifiers((event) => {
    const RandomBonus =
        Java.loadClass("net.minecraft.world.level.storage.loot.predicates.BonusLevelTableCondition")
    const condition =
        RandomBonus.bonusLevelFlatChance("minecraft:luck_of_the_sea", [0, 0.1, 0.2, 0.3]).build()
    event
    .addLootTypeModifier(LootType.FISHING)
    .addCondition(condition)
    .addWeightedLoot([
            Item.of("bettercopper:copper_nugget").withChance(10),
            Item.of("minecraft:iron_nugget").withChance(10),
            Item.of("minecraft:gold_nugget").withChance(10),
            Item.of("aquaculture:neptunium_nugget").withChance(5),
            Item.of("aquaculture:neptunium_ingot").withChance(1),
            Item.of("aquaculture:box").withChance(5),
            Item.of("aquaculture:lockbox").withChance(3),
            Item.of("aquaculture:treasure_chest").withChance(5),
            Item.of("minecraft:rabbit_hide").withChance(10),
            Item.of("minecraft:leather").withChance(7),
            Item.of("lfpirates:tannedleather").withChance(5),
            Item.of("benssharks:shark_tooth").withChance(6),
            Item.of("minecraft:prismarine_shard").withChance(6),
            Item.of("benssharks:dent").withChance(3),
            Item.of("minecraft:nautilus_shell").withChance(5),
            Item.of("minecraft:heart_of_the_sea").withChance(1),
            Item.of("minecraft:book").withChance(3),
            Item.of("minecraft:fishing_rod").withChance(3),
            Item.of("aquaculture:gold_fishing_rod").withChance(1),
    ])
    .enchantWithLevels([10, 40])
    .damage([0.1, 0.9])
})