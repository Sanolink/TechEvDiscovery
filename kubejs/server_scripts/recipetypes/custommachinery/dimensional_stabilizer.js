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


    const obeliskBases = [
        [-3, 1, 0],
        [3, 1, 0],
        [0, 1, -3],
        [0, 1, 3]
    ]

    const obeliskHeight = 3

    const pedestalsBases = [
        [-1, -3, -1],
        [-1, -3, 1],
        [1, -3, -1],
        [1, -3, 1]
    ]

    event.recipes.custommachinery
        .custom_machine("custommachinery:dimensional_stabilizer", 100)
        .requireStructure(
            [
                [
                    "  aba  ",
                    " abcba ",
                    "abcbcba",
                    "bcbcbcb",
                    "abcbcba",
                    " abcba ",
                    "  aba  "
                ],
                [
                    "   d   ",
                    "       ",
                    "  e e  ",
                    "d     d",
                    "  e e  ",
                    "       ",
                    "   d   "
                ],
                [
                    "   d   ",
                    "       ",
                    "       ",
                    "d     d",
                    "       ",
                    "       ",
                    "   d   "
                ],
                [
                    "   d   ",
                    "       ",
                    "       ",
                    "d     d",
                    "       ",
                    "       ",
                    "   d   "
                ],
                [
                    "   h   ",
                    "   i   ",
                    "   i   ",
                    "hiimiih",
                    "   i   ",
                    "   i   ",
                    "   h   "
                ],
                [
                    "   n   ",
                    "       ",
                    "       ",
                    "n  o  n",
                    "       ",
                    "       ",
                    "   n   "
                ],
                [
                    "       ",
                    "       ",
                    "       ",
                    "   p   ",
                    "       ",
                    "       ",
                    "       "
                ]
            ],
            {
                "a": "sons_of_sins:soul_steel_slab",
                "b": "sons_of_sins:soul_steel_block",
                "c": "sons_of_sins:soul_steel_tiles",
                "d": "forbidden_arcanus:arcane_polished_darkstone_pillar",
                "e": "ars_nouveau:arcane_pedestal",
                "h": "forbidden_arcanus:arcane_chiseled_polished_darkstone",
                "i": "forbidden_arcanus:arcane_polished_darkstone_rod",
                "n": "techev_additions:dimensional_stabilizer_obelisk",
                "o": "forbidden_arcanus:magnetized_darkstone_pedestal",
                "p": "botania:corporea_index"
            }
        )
        .requireFunctionToStart(ctx => { return Start(ctx) })
        .requireFunctionEachTick(ctx => { return Tick(ctx) })
        .requireFunctionOnEnd(ctx => { return End(ctx) })
        .resetOnError()
        .jei()
        .requireItem("ad_astra:ice_shard")
        .produceItem("rftoolsbase:dimensionalshard")
        .id(`custommachinery:dimensional_stabilizer/dimensionalshard`)

    function Start(/** @type {fr.frinn.custommachinery.common.integration.kubejs.function_.Context} */ ctx) {
        let block = ctx.getBlock()
        let level = block.getLevel()
        let pos = block.getPos()

        for (let p of pedestalsBases) {
            let pedestal = level.getBlock(pos.x + p[0], pos.y + p[1], pos.z + p[2])
            let nbt = pedestal.getEntityData();
            if (!nbt) continue
            let stack = nbt.get("itemStack");
            if (!stack) continue
            let itemId = stack.getString("id");
            if (itemId == "ad_astra:ice_shard") {
                return ctx.success();
            }
        }
        return ctx.error("FAILED to START")
    }

    function Tick(/** @type {fr.frinn.custommachinery.common.integration.kubejs.function_.Context} */ ctx) {
        if (ctx.getRemainingTime() % 2 != 0) return ctx.success();
        let machine = ctx.getBlock()
        let level = machine.getLevel()
        let pos = machine.getPos()
        let prog = (100 - ctx.getRemainingTime()) / 100

        let activePedestals = []
        for (let p of pedestalsBases) {
            let pedestal = level.getBlock(pos.x + p[0], pos.y + p[1], pos.z + p[2])
            let nbt = pedestal.getEntityData();
            if (!nbt) continue
            let stack = nbt.get("itemStack");
            if (!stack) continue
            let itemId = stack.getString("id");
            if (itemId == "ad_astra:ice_shard") {
                activePedestals.push(p)
            }
        }

        if (activePedestals.length === 0) {
            return ctx.error("NO PEDESTALS")
        }

        let p1 = 0.70
        let p2 = 0.90

        let violet = { r: 0.6, g: 0.0, b: 0.8 }
        let white = { r: 1.0, g: 1.0, b: 1.0 }

        function spawnDust(x, y, z, color, scale, count) {
            level.spawnParticles(`minecraft:dust ${color.r} ${color.g} ${color.b} ${scale}`, false, x, y, z, 0, 0, 0, count, 0)
        }

        for (let ped of activePedestals) {
            spawnDust(ped.x + 0.5, ped.y + 0.7, ped.z + 0.5, violet, 0.7, 8)
        }

        let rotations = 2.0
        let angleBase = prog * rotations * KMath.PI * 2.0
        let radius = 0.6

        for (let i = 0; i < obeliskBases.length; i++) {
            let base = obeliskBases[i]
            let worldBaseX = pos.x + base[0] + 0.5
            let worldBaseY = pos.y + base[1]
            let worldBaseZ = pos.z + base[2] + 0.5

            let y = worldBaseY + prog * obeliskHeight
            let angle = angleBase + (i * KMath.PI / 2.0)

            let px = worldBaseX + Math.cos(angle) * radius
            let pz = worldBaseZ + Math.sin(angle) * radius
            spawnDust(px, y + 0.3, pz, violet, 0.9, 1)
        }

        if (prog >= p1 && prog < p2) {
            let t = (prog - p1) / (p2 - p1)
            let indexX = pos.x + 0.5 + 0
            let indexY = pos.y + 2.0 + 0.6
            let indexZ = pos.z + 0.5 + 0

            for (let i = 0; i < obeliskBases.length; i++) {
                let base = obeliskBases[i]
                let topY = pos.y + base[1] + obeliskHeight
                let sx = pos.x + base[0] + 0.5
                let sy = topY + 0.2
                let sz = pos.z + base[2] + 0.5

                let count = Math.max(6, Math.floor(6 + t * 12))
                for (let k = 0; k < count; k++) {
                    let f = k / (count - 1)
                    let ix = sx + (indexX - sx) * f
                    let iy = sy + (indexY - sy) * f
                    let iz = sz + (indexZ - sz) * f
                    spawnDust(ix, iy, iz, violet, 0.7, 1)
                }
            }
        }

        if (prog >= p2) {
            let t = (prog - p2) / (1.0 - p2)
            let indexX = pos.x + 0.5
            let indexY = pos.y + 2.0 + 0.6
            let indexZ = pos.z + 0.5
            let machineX = pos.x + 0.5
            let machineY = pos.y + 0.6
            let machineZ = pos.z + 0.5
            let count = Math.max(8, Math.floor(8 + t * 18))
            for (let k = 0; k < count; k++) {
                let f = k / (count - 1)
                let ix = indexX + (machineX - indexX) * f
                let iy = indexY + (machineY - indexY) * f
                let iz = indexZ + (machineZ - indexZ) * f
                spawnDust(ix, iy, iz, white, 0.9, 1)
                if (k % 3 === 0) spawnDust(ix, iy, iz, violet, 0.6, 1)
            }
        }

        return ctx.success()
    }

    function End(/** @type {fr.frinn.custommachinery.common.integration.kubejs.function_.Context} */ ctx) {
        let machine = ctx.getBlock()
        let level = machine.getLevel()
        let pos = machine.getPos()

        for (let p of pedestalsBases) {
            let pedestal = level.getBlock(pos.x + p[0], pos.y + p[1], pos.z + p[2])
            let nbt = pedestal.getEntityData();
            if (!nbt) continue
            let stack = nbt.get("itemStack");
            if (!stack) continue
            let itemId = stack.getString("id");
            if (itemId == "ad_astra:ice_shard") {
                stack.putString("id", "rftoolsbase:dimensionalshard");
                nbt.put("Stack", stack);
                pedestal.setEntityData(nbt);
                level.sendBlockUpdated(pedestal.pos, pedestal.blockState, pedestal.blockState, 3)

                let mx = pos.x + 0.5
                let my = pos.y + 0.6
                let mz = pos.z + 0.5
                let px = pos.x + p[0] + 0.5
                let py = pos.y + p[1] + 1.0
                let pz = pos.z + p[2] + 0.5

                let beamCount = 16
                for (let k = 0; k < beamCount; k++) {
                    let f = k / (beamCount - 1)
                    let ix = mx + (px - mx) * f
                    let iy = my + (py - my) * f
                    let iz = mz + (pz - mz) * f
                    level.spawnParticles(`minecraft:dust 0.6 0 0.8 1`, false, ix, iy, iz, 0, 0, 0, 1, 0)
                    if (k % 4 === 0) level.spawnParticles("minecraft:end_rod", false, ix, iy, iz, 0, 0, 0, 1, 0)
                }

                level.spawnParticles("minecraft:large_smoke", false, px, py, pz, 0.3, 0.3, 0.3, 8, 0)
                level.playSound(null, mx, my, mz, "minecraft:block.amethyst_cluster.hit", "blocks", 0.6, 0.9)
            }
        }
        return ctx.success()
    }

})