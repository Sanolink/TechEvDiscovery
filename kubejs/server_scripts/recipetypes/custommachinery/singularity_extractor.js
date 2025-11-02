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
        .custom_machine("custommachinery:singularity_extractor", 200)
        .requireFunctionEachTick(ctx => {
            
            let block = ctx.getBlock()
            let level = block.getLevel()
            let pos = block.getPos()

            let centerX = pos.x + 0.5
            let centerY = pos.y - 1.5
            let centerZ = pos.z + 0.5

            let coils = [
                { x: centerX + 2, z: centerZ },     
                { x: centerX - 2, z: centerZ },     
                { x: centerX, z: centerZ + 2 },     
                { x: centerX, z: centerZ - 2 }      
            ]
            for (let coil of coils) {
                let t = counter / 10 
                let x = coil.x + (centerX - coil.x) * t
                let z = coil.z + (centerZ - coil.z) * t

                level.spawnParticles("aquamirae:electric", true, x, centerY, z, 0, 0, 0, 1, 0.5)
                if (t == 1) level.spawnParticles("supplementaries:bomb_explosion", true, x, centerY, z, 0, 0, 0, 1, 1)
            }
            counter++
            if (counter > 10) counter = 0
            return ctx.success()
        })
        .produceItem('ftbic:singularity_ash')
        .requireStructure(
            [
                [
                    " aaaaa ",
                    "abbabba",
                    "abaaaba",
                    "aaabaaa",
                    "abaaaba",
                    "abbabba",
                    " aaaaa "
                ],
                [
                    " bbabb ",
                    "b     b",
                    "b     b",
                    "a     a",
                    "b     b",
                    "b     b",
                    " bbabb "
                ],
                [
                    " bbabb ",
                    "b  c  b",
                    "b     b",
                    "ac d ca",
                    "b     b",
                    "b  c  b",
                    " bbabb "
                ],
                [
                    " bbabb ",
                    "b     b",
                    "b     b",
                    "a     a",
                    "b     b",
                    "b     b",
                    " bbabb "
                ],
                [
                    " aaaaa ",
                    "abbabba",
                    "abaaaba",
                    "aaamaaa",
                    "abaaaba",
                    "abbabba",
                    " aaaaa "
                ]
            ],
            {
                "a": "ae2:controller[state\u003donline]",
                "b": "ftbic:reinforced_glass",
                "c": "mekanism:supercharged_coil",
                "d": "forbidden_arcanus:black_hole",
            },
        )
        .id(`custommachinery:soul_harvester/soul_shard2`)
})