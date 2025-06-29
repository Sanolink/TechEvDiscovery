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
(_____)         Last Modification : 1.4.0         (_____)

*/

// Special thanks to the Latvian.dev Discord Server community for their help with this awesome Create tooltip trick

const $ItemDescription = Java.loadClass("com.simibubi.create.foundation.item.ItemDescription$Modifier");
const $TooltipModifier = Java.loadClass("com.simibubi.create.foundation.item.TooltipModifier");
const $Palette = Java.loadClass("com.simibubi.create.foundation.item.TooltipHelper$Palette");

ItemEvents.tooltip(event => {

    //Honeycombs Tiers
    event.addAdvanced('productivebees:configurable_honeycomb', (item, advanced, text) => {
        let nbt = item.nbt
        if (!nbt) return

        let type = nbt?.EntityTag?.type
        if (!type) return

        let mat = type.replace("productivebees:", "")
        
        let tier = combTier.getTier(mat)
        if (tier) {
            text.add(Text.of(`Tier: ${combTier.getColor(tier)}`))
        } else {
            text.add(Text.of(`Tier: §l§7Unknown`))
        }
    })
    event.add('productivebees:honeycomb_milky', `Tier: ${combTier.getColor(0)}`)
    event.add('minecraft:honeycomb', `Tier: ${combTier.getColor(2)}`)
    event.add('productivebees:honeycomb_ghostly', `Tier: ${combTier.getColor(4)}`)

    //Blue Skies
    event.add('blue_skies:blue_journal', "§l§fThe §bGatekeeper §fis §CDISABLED")
    event.add('blue_skies:zeal_lighter', "§l§fThe §bGatekeeper §fis §CDISABLED")
    event.add('blue_skies:gatekeeper_spawn_egg', "§l§fThe §bGatekeeper §fis §CDISABLED")

    //Lost Soul
    event.add('forbidden_arcanus:soul', "§l§fRight-click on a block to summon a §bLost Soul")
    
    //Create Tooltips (Located in Create Lang)
    const ItemsCreateTooltips = [
        'create:chromatic_compound',
        'create:netherite_sandpaper'
    ].forEach(id => {
        $TooltipModifier.REGISTRY.registerDeferred(
          id, (item) => new $ItemDescription( item, $Palette.STANDARD_CREATE)
        )
    });
})