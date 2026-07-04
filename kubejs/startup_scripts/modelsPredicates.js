/* 
 _____                                             _____ 
( ___ ) © SanoLink 2024/2026. All rights reserved.( ___ )
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
(_____)         Last Modification : 1.5.2         (_____)

*/

StartupEvents.postInit(event => {
    if (!Platform.isClientEnvironment()) return;
    const $ItemProperties = Java.loadClass('net.minecraft.client.renderer.item.ItemProperties')

    const Plates = [
        'ad_astra:calorite_plate',
        'ad_astra:desh_plate',
        'ad_astra:nephryx_plate',
        'ad_astra:ostrum_plate',
        'alltheores:aluminum_plate',
        'alltheores:brass_plate',
        'alltheores:bronze_plate',
        'alltheores:constantan_plate',
        'alltheores:copper_plate',
        'alltheores:diamond_plate',
        'alltheores:electrum_plate',
        'alltheores:enderium_plate',
        'alltheores:gold_plate',
        'alltheores:invar_plate',
        'alltheores:iridium_plate',
        'alltheores:iron_plate',
        'alltheores:lead_plate',
        'alltheores:lumium_plate',
        'alltheores:nickel_plate',
        'alltheores:osmium_plate',
        'alltheores:platinum_plate',
        'alltheores:signalum_plate',
        'alltheores:silver_plate',
        'alltheores:steel_plate',
        'alltheores:tin_plate',
        'alltheores:uranium_plate',
        'alltheores:zinc_plate',
        'blue_skies:falsite_plate',
        'blue_skies:horizonite_plate',
        'blue_skies:ventium_plate',
        'botania:elementium_plate',
        'create_new_age:overcharged_golden_sheet',
        'create_new_age:overcharged_iron_sheet',
        'create_things_and_misc:antimatter_quartz_sheet',
        'create_things_and_misc:blue_quartz_sheet',
        'create_things_and_misc:experience_sheet',
        'create_things_and_misc:psi_quartz_sheet',
        'create_things_and_misc:rose_quartz_sheet',
        'create_things_and_misc:source_quartz_sheet',
        'createdeco:cast_iron_sheet',
        'eidolon:arcane_gold_plate',
        'ftbic:carbon_plate',
        'occultism:iesnium_plate',
        'pneumaticcraft:compressed_iron_plate',
        'techev_additions:complex_plate',
        'undergarden:cloggrum_plate',
        'undergarden:froststeel_plate'
    ]

    const Coins = [];
    ['platinum', 'osmium', 'aluminum', 'uranium', 'zinc', 'iridium', 'steel', 'cast_iron', 'brass'].forEach(mat => Coins.push(`thermal:${mat}_coin`))

    //All Plates & Coins
    Plates.concat(Coins).forEach(item => {
        $ItemProperties.register(Item.of(item), new ResourceLocation('count'), (stack, world, living, seed) => {
            return stack.getCount() / stack.getMaxStackSize()
        })
    })

    //Immmersive Engineering Blueprint Types
    $ItemProperties.register(Item.of('immersiveengineering:blueprint'), new ResourceLocation('blueprint_type'), (stack, world, living, seed) => {
        const nbt = stack.getNbt();
        if (nbt && nbt.contains("blueprint")) {
            const blueprintType = nbt.getString("blueprint");
            switch (blueprintType) {
                case "bannerpatterns":
                    return 1.0;
                case "bullet":
                    return 2.0;
                case "specialBullet":
                    return 3.0;
                case "components":
                    return 4.0;
                case "molds":
                    return 5.0;
                case "appliedComponents":
                    return 6.0;
                default:
                    return 0.0;
            }
        }
        return 0.0
    })
})