/**
 * Removes advancement at given file-path and adds it to a hidden parent advancement
 * @param {String | Array} advancement - Advancement id (ie. lootr:100loot)
 */
function removeAdvancement(advancement) {
    let arr = []
    if (typeof (advancement) == 'string') arr = [advancement]
    else if (typeof (advancement) == 'object') arr = advancement
    else console.error(`Invalid type for removeAdvancement(${advancement})`)

    ServerEvents.highPriorityData(e => {
        e.addJson('nangmansea:advancements/removed', {
            display: { hidden: true },
        })
        arr.forEach(advancement => {
            let advSplit = advancement.split(':')
            let advModId = advSplit[0]
            let advName = advSplit[1]

            e.addJson(`${advModId}:advancements/${advName}.json`, {
                parent: 'nangmansea:advancements/removed',
                display: { hidden: true },
                criteria: {
                    impossible: {
                        trigger: 'minecraft:impossible'
                    }
                },
                requirements: [['impossible']]
            })
        })
    })
}

removeAdvancement([
    'awesomedungeonocean:ocean_cage/find_during_night',
    'awesomedungeonocean:ocean_cage/find_during_rain',
    'awesomedungeonocean:ocean_cage/find_during_storm',
    'awesomedungeonocean:ocean_cage/find_during_normal',
    'awesomedungeonocean:ocean_quad/find_during_night',
    'awesomedungeonocean:ocean_quad/find_during_rain',
    'awesomedungeonocean:ocean_quad/find_during_storm',
    'awesomedungeonocean:ocean_quad/find_during_normal',
    'awesomedungeonocean:ocean_ruin_pillager/find_during_night',
    'awesomedungeonocean:ocean_ruin_pillager/find_during_rain',
    'awesomedungeonocean:ocean_ruin_pillager/find_during_storm',
    'awesomedungeonocean:ocean_ruin_pillager/find_during_normal',
    'awesomedungeonocean:ocean_ruin_vanilla_temple/find_during_night',
    'awesomedungeonocean:ocean_ruin_vanilla_temple/find_during_rain',
    'awesomedungeonocean:ocean_ruin_vanilla_temple/find_during_storm',
    'awesomedungeonocean:ocean_ruin_vanilla_temple/find_during_normal',
    'awesomedungeonocean:ocean_temple_quad/find_during_night',
    'awesomedungeonocean:ocean_temple_quad/find_during_rain',
    'awesomedungeonocean:ocean_temple_quad/find_during_storm',
    'awesomedungeonocean:ocean_temple_quad/find_during_normal',
    'awesomedungeonocean:ocean_the_column_temple/find_during_night',
    'awesomedungeonocean:ocean_the_column_temple/find_during_rain',
    'awesomedungeonocean:ocean_the_column_temple/find_during_storm',
    'awesomedungeonocean:ocean_the_column_temple/find_during_normal',
    'awesomedungeonocean:ocean_warn_temple/find_during_night',
    'awesomedungeonocean:ocean_warn_temple/find_during_rain',
    'awesomedungeonocean:ocean_warn_temple/find_during_storm',
    'awesomedungeonocean:ocean_warn_temple/find_during_normal',
    'awesomedungeonocean:root',
    'benssharks:pleasure',
    'benssharks:shark_aid',
    'taxov:advancement_marine',
    'taxov:advancement_marine_armor',
    'taxov:advancement_marine_armor_boots',
    'taxov:advancement_marine_armor_chestplate',
    'taxov:advancement_marine_armor_helmet',
    'taxov:advancement_marine_armor_leggings',
    'taxov:advancement_marine_tool',
    'taxov:advancement_marine_tool_axe',
    'taxov:advancement_marine_tool_pickaxe',
    'taxov:advancement_marine_tool_sword',
    'taxov:advancement_ocean',
    'taxov:advancement_pirate',
    'taxov:advancement_pirate_armor',
    'taxov:advancement_pirate_armor_boots',
    'taxov:advancement_pirate_armor_chestplate',
    'taxov:advancement_pirate_armor_helmet',
    'taxov:advancement_pirate_armor_leggings',
    'taxov:advancement_pirate_tool',
    'taxov:advancement_pirate_tool_axe',
    'taxov:advancement_pirate_tool_pickaxe',
    'taxov:advancement_pirate_tool_sword',
])