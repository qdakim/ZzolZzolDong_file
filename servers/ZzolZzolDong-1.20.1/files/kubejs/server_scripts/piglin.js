LootJS.modifiers((event) => {
    event
        .addLootTableModifier("minecraft:gameplay/piglin_bartering")
        .removeLoot("*")
        .addWeightedLoot([
            LootEntry.of("minecraft:potion").addPotion("water_breathing").withChance(10),
            LootEntry.of("minecraft:splash_potion").addPotion("water_breathing").withChance(10),
            LootEntry.of("minecraft:iron_boots").enchantRandomly("minecraft:depth_strider").withChance(8),
            LootEntry.of("minecraft:book").enchantRandomly("minecraft:depth_strider").withChance(5),
            LootEntry.of("minecraft:iron_nugget ").limitCount([8, 16]).withChance(20),
            LootEntry.of("minecraft:quartz").limitCount([5, 12]).withChance(20),
            LootEntry.of("minecraft:prismarine_crystals").limitCount([1, 4]).withChance(20),
            LootEntry.of("minecraft:magma_cream").limitCount([4, 8]).withChance(20),
            LootEntry.of("minecraft:ender_pearl").limitCount([2, 4]).withChance(20),
            LootEntry.of("minecraft:string").limitCount([1, 5]).withChance(40),
            LootEntry.of("minecraft:fire_charge").limitCount([4, 8]).withChance(40),
            LootEntry.of("minecraft:gravel").limitCount([4, 10]).withChance(40),
            LootEntry.of("minecraft:leather").limitCount([1, 2]).withChance(40),
            LootEntry.of("minecraft:amethyst_shard").limitCount([2, 8]).withChance(40),
            LootEntry.of("minecraft:obsidian").withChance(40),
            LootEntry.of("minecraft:crying_obsidian").limitCount([1, 4]).withChance(40),
            LootEntry.of("minecraft:soul_sand").limitCount([8, 24]).withChance(40)
        ])
})