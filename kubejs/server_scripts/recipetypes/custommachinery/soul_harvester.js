/* 
 _____                                             _____ 
( ___ ) © SanoLink 2024/2025. All rights reserved.( ___ )
 |   |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|   | 
 |   |  _____         _     _____        ______    |   | 
 |   | |_   _|__  ___| |__ | ____|_   __ \ \ \ \   |   | 
 |   |   | |/ _ \/ __| '_ \|  _| \ \ / /  \ \ \ \  |   | 
 |   |   | |  __/ (__| | | | |___ \ V /   / / / /  |   | 
 |   |  _|_|\___|\___|_| |_|_____| \_/   /_/_/_/   |   | 
 |   | |  _ \(_)___  ___ _____   _____ _ __ _   _  |   | 
 |   | | | | | / __|/ __/ _ \ \ / / _ \ '__| | | | |   | 
 |   | | |_| | \__ \ (_| (_) \ V /  __/ |  | |_| | |   | 
 |   | |____/|_|___/\___\___/ \_/ \___|_|   \__, | |   | 
 |   |                                      |___/  |   | 
 |___|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|___| 
(_____)         Last Modification : 1.5.0         (_____)

*/

ServerEvents.recipes(event => {
    let counter = 0
    event.recipes.custommachinery
        .custom_machine("custommachinery:soul_harvester", 100)
        .requireFunctionEachTick(ctx => {
            if (counter == 10) {
                let block = ctx.getBlock()
                let level = block.getLevel()
                let pos = block.getPos()
                let facing = block.getProperties().get("facing")
                let x = pos.x + 0.5
                let y = pos.y + 2.0
                let z = pos.z + 0.5

                let dx = 0, dz = 0
                if (facing == "north") { dz = 2 }
                if (facing == "south") { dz = -2 }
                if (facing == "west") { dx = 2 }
                if (facing == "east") { dx = -2 }
                
                level.spawnParticles("minecraft:soul", true, x + dx, y, z + dz, 0, 0, 0, 5, 0.05)
                counter = 0
            } else { counter++ }
            return ctx.success()
        })
        .produceItem('eidolon:soul_shard')
        .requireStructure(
            [
                [
                    "   a   ",
                    " aahaa ",
                    " abcba ",
                    "ahcicha",
                    " abcba ",
                    " aamaa "
                ],
                [
                    "   e   ",
                    "   g   ",
                    "  j k  ",
                    "eg l ge",
                    "       ",
                    "       "
                ],
                [
                    "   f   ",
                    "       ",
                    "       ",
                    "f     f",
                    "       ",
                    "       "
                ],
                [
                    "   a   ",
                    "   a   ",
                    "       ",
                    "aa   aa",
                    "       ",
                    "       "
                ],
                [
                    "       ",
                    "   d   ",
                    "       ",
                    " d   d ",
                    "       ",
                    "       "
                ]
            ],
            {
                "a": "eidolon:smooth_stone_tiles_stairs",
                "b": "eidolon:elder_pillar",
                "c": "eidolon:polished_planks",
                "d": "eidolon:magic_candlestick",
                "e": "eidolon:obelisk",
                "f": "eidolon:plinth",
                "g": "eidolon:unholy_effigy",
                "h": "eidolon:smooth_stone_tiles",
                "i": "eidolon:shadow_gem_block",
                "j": "eidolon:stone_hand{stack:{Count:1b,id:\"eidolon:unholy_symbol\"}}",
                "k": "eidolon:stone_hand{stack:{Count:1b,id:\"eidolon:holy_symbol\"}}",
                "l": "eidolon:brazier{stack:{Count:1b,id:\"eidolon:lesser_soul_gem\"}}"
            },
        )
        .id(`custommachinery:soul_harvester/soul_shard`)
})