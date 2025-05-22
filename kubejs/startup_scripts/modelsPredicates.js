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
(_____)         Last Modification : 1.3.5         (_____)

*/

StartupEvents.postInit(event => {
    if (!Platform.isClientEnvironment()) return;
    const $ItemProperties = Java.loadClass('net.minecraft.client.renderer.item.ItemProperties')
    const Plates = [
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
        'botania:elementium_plate',
        'create_things_and_misc:rose_quartz_sheet',
        'create_things_and_misc:blue_quartz_sheet',
        'create_things_and_misc:source_quartz_sheet',
        'create_things_and_misc:psi_quartz_sheet',
        'create_things_and_misc:experience_sheet',
        'create_new_age:overcharged_iron_sheet',
        'create_new_age:overcharged_golden_sheet'
    ]
    //All Plates
    Plates.forEach(plate => {
        $ItemProperties.register(Item.of(plate), new ResourceLocation('count'), (stack, world, living, seed) => {
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
            }}
        return 0.0
    }) 
})