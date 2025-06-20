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
(_____)         Last Modification : 1.3.7         (_____)

*/

// Special thanks to the Latvian.dev Discord Server community for their help with this awesome Create tooltip trick

const $ItemDescription = Java.loadClass("com.simibubi.create.foundation.item.ItemDescription$Modifier");
const $TooltipModifier = Java.loadClass("com.simibubi.create.foundation.item.TooltipModifier");
const $Palette = Java.loadClass("com.simibubi.create.foundation.item.TooltipHelper$Palette");

ItemEvents.tooltip(event => {

    //Blue Skies
    ['blue_skies:blue_journal','blue_skies:zeal_lighter','blue_skies:gatekeeper_spawn_egg'].forEach(item => {event.add(item, "§l§fThe §bGatekeeper §fis §CDISABLED")})

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