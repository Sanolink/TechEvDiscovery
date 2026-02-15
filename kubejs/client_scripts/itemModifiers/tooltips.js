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

// Special thanks to the Latvian.dev Discord Server community for their help with this awesome Create tooltip trick

const $ItemDescription = Java.loadClass("com.simibubi.create.foundation.item.ItemDescription$Modifier");
const $TooltipModifier = Java.loadClass("com.simibubi.create.foundation.item.TooltipModifier");
const $Palette = Java.loadClass("com.simibubi.create.foundation.item.TooltipHelper$Palette");

ItemEvents.tooltip(event => {

    //Honeycombs Tiers
    ['productivebees:configurable_honeycomb', 'productivebees:spawn_egg_configurable_bee', 'productivebees:configurable_comb'].forEach(category => {
        event.addAdvanced(category, (item, advanced, text) => {
            let nbt = item.nbt
            if (!nbt) return

            let type = nbt?.EntityTag?.type
            if (!type) return

            let mat = type.replace("productivebees:", "")

            let tier = combTier.getTier(mat)
            if (tier) {
                text.add(1, Text.of(`§7Tier: ${combTier.getColor(tier)}`))
            } else {
                text.add(1, Text.of(`§7Tier: Optional`))
            }
            if (combTier.TechEv.includes(mat)) {
                text.add(1, "§6✦ [TechEv Addition]")
            }
        })
    })

    function combTierTooltip(initem, tier) {
        event.addAdvanced(initem, (item, advanced, text) => { text.add(1, `§7Tier: ${combTier.getColor(tier)}`) })
    }

    combTierTooltip('productivebees:spawn_egg_rancher_bee', 2)
    combTierTooltip('productivebees:honeycomb_milky', 2)
    combTierTooltip('productivebees:comb_milky', 2)

    combTierTooltip('minecraft:honeycomb', 2)
    combTierTooltip('minecraft:honeycomb_block', 2)

    combTierTooltip('productivebees:spawn_egg_creeper_bee', 4)
    combTierTooltip('productivebees:honeycomb_powdery', 4)
    combTierTooltip('productivebees:comb_powdery', 4)

    combTierTooltip('productivebees:honeycomb_ghostly', 4)
    combTierTooltip('productivebees:comb_ghostly', 4)

    combTierTooltip('productivebees:honeycomb_ultimate', 7)
    combTierTooltip('productivebees:comb_ultimate', 7)

    //Mystical Inferium Farmland Tier
    event.addAdvanced('mysticalagriculture:inferium_farmland', (item, advanced, text) => {
        text.set(1, Text.of(`§7Tier: §eElemental`))
    })

    //Blue Skies
    event.add('blue_skies:blue_journal', "§l§fThe §bGatekeeper §fis §CDISABLED")
    event.add('blue_skies:zeal_lighter', "§l§fThe §bGatekeeper §fis §CDISABLED")
    event.add('blue_skies:gatekeeper_spawn_egg', "§l§fThe §bGatekeeper §fis §CDISABLED")

    //Lost Soul
    
    //Astral Dust
    event.add('enigmaticlegacy:astral_dust', "§a✦ §lAstral Dust§a can only be obtained with §6§lLaser Drill")
    
    //Custom Machinery Multiblocks
    let multiblocks = [
        'custommachinery:precision_assembler',
        'custommachinery:chiaroscuro_forge',
        'custommachinery:circuit_etcher',
        'custommachinery:soul_harvester',
        'custommachinery:dimensional_stabilizer',
        'custommachinery:singularity_extractor'
    ].forEach(id => {
        event.addAdvanced(id, (item, advanced, text) => {
            text.set(1, "§fUse §c§l[Schematicannon] §fto build this Multiblock!")
        })
    })


    //TechEv Items
    global.TechEvItems.forEach(id => {
        event.addAdvanced(id, (item, advanced, text) => {
            text.add(1, "§6✦ [TechEv Addition]")
        })
    })

    //TechEv Blocks
    global.TechEvBlocks.forEach(id => {
        event.addAdvanced(id, (item, advanced, text) => {
            text.add(1, "§6✦ [TechEv Addition]")
        })
    })

    global.TechEvBlockItems.forEach(entry => {
        event.addAdvanced(entry.id, (item, advanced, text) => {
            text.add(1, "§6✦ [TechEv Addition]")
        })
    })

    //Create Tooltips (Located in Create Lang)
    const ItemsCreateTooltips = [
        'create:chromatic_compound',
        'create:netherite_sandpaper'
    ].forEach(id => {
        $TooltipModifier.REGISTRY.registerDeferred(
            id, (item) => new $ItemDescription(item, $Palette.STANDARD_CREATE)
        )
    });
})