ServerEvents.recipes(event => { 
    event.remove({id:'minecraft:glass_pane'}),
    event.shaped(
        Item.of('minecraft:glass_pane', 6),
        [
            'AAA',
            'AAA',
            '   '
        ],
        {
            A: 'minecraft:glass'
        }
    )
    event.shapeless(
        Item.of('minecraft:oak_planks', 4),
        [
            'aquaculture:driftwood'
        ]
    )
    event.smelting('minecraft:iron_ingot', 'aquaculture:tin_can')
    event.remove({output:'#vs_eureka:balloons'})
    event.shaped(
        Item.of('aquaculture:neptunium_ingot', 8),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:iron_ingot',
            C: 'minecraft:heart_of_the_sea'
        }
    )
    event.remove({output: 'minecraft:blast_furnace'})
    event.shaped(
        Item.of('minecraft:blast_furnace', 1),
        [
            'ABA',
            'BCB',
            'DDD'
        ],
        {
            A: 'minecraft:iron_block',
            B: 'minecraft:copper_block',
            C: 'minecraft:furnace',
            D: 'minecraft:smooth_stone'
        }
    )
    event.remove({output: 'vs_eureka:engine'})
    event.shaped(
        Item.of('vs_eureka:engine', 1),
        [
            'ABA',
            'CDC',
            'EEE'
        ],
        {
            A: 'minecraft:iron_block',
            B: 'minecraft:gold_block',
            C: 'minecraft:redstone_block',
            D: 'minecraft:blast_furnace',
            E: 'minecraft:smooth_stone'
        }
    )
    event.remove({output: 'vs_eureka:floater'})
    event.shaped(
        Item.of('vs_eureka:floater', 4),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'minecraft:string',
            B: '#minecraft:logs'
        }
    )
})