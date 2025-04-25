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
(_____)         Last Modification : 1.3.0         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
   psi_infuser('psidust', 'minecraft:redstone', 'psi:psidust')
   psi_infuser('gold_to_psimetal_assembly_upgrade', 'psi:cad_assembly_gold', 'psi:cad_assembly_psimetal')
   psi_infuser('psigem', 'minecraft:diamond', 'psi:psigem')
   psi_infuser('ebony_substance', 'minecraft:coal', 'psi:ebony_substance')
   psi_infuser('psimetal', 'minecraft:gold_ingot', 'psi:psimetal')
   psi_infuser('guide_book', 'minecraft:book', Item.of('patchouli:guide_book', '{"patchouli:book":"psi:encyclopaedia_psionica"}'))
   psi_infuser('ivory_substance', 'minecraft:quartz', 'psi:ivory_substance')

    //General Psi Infuser Function
    function psi_infuser(id, input, output, energy, time) {
        event.recipes.custommachinery
            .custom_machine("custommachinery:psi_infuser", time | 40)
            .requireEnergy(energy | 10000)
            .requireItem(input)
            .requireItem("psi:cad_assembly_psimetal", "cad").chance(0)
            .produceItem(output, "output")
            .id("custommachinery:psi_infuser/" + id)
            
    }
})
