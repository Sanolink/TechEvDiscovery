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

ServerEvents.recipes(event => {

    //Recipes 
    inscribe("printed_elemental_processor_print", 'ae2:elemental_processor_press', 'forge:plates/elementium', 'ae2:printed_elemental_processor')
    inscribe("elemental_processor_press", 'ae2:elemental_processor_press', 'forge:storage_blocks/iron', 'ae2:elemental_processor_press')

    press("elemental_processor", 'ae2:printed_silicon', 'immersiveengineering:wirecoil_redstone', 'ae2:printed_elemental_processor', 'ae2:elemental_processor')
    press("cosmic_processor", 'ae2:printed_silicon', 'immersiveengineering:wirecoil_redstone', 'ae2:printed_cosmic_processor', 'ae2:cosmic_processor')

    //Inscribe Function
    function inscribe(id, press, tag_input, output) {
        event.custom(
            {
                "type": "ae2:inscriber",
                "ingredients": {
                  "middle": {
                    "tag": tag_input
                  },
                  "top": {
                    "item": press
                  }
                },
                "mode": "inscribe",
                "result": {
                  "item": output
                }
            }
        ).id("ae2:inscriber/" + id)
    }

    //Press Function
    function press(id, bottom, middle, top, output) {
        event.custom(
            {
                "type": "ae2:inscriber",
                "ingredients": {
                  "bottom": {
                    "item": bottom
                  },
                  "middle": {
                    "item": middle
                  },
                  "top": {
                    "item": top
                  }
                },
                "mode": "press",
                "result": {
                  "item": output
                }
              }
        ).id("ae2:inscriber/" + id)
    }
})
