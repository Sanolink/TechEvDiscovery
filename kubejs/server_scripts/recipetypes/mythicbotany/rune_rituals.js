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
    RuneRitual({
        result: 'mekanism:metallurgic_infuser',
        center: 'mythicbotany:fimbultyr_tablet',
        inputs: [
            'ad_astra:compressor'
        ],
        mana: 250000,
        pattern: [
            ['.', '.', '.', '.', '.', 'A', '.', '.', '.', '.', '.'],
            ['.', 'B', '.', 'C', '.', '.', '.', 'D', '.', 'E', '.'],
            ['.', '.', '.', '.', '.', 'F', '.', '.', '.', '.', '.'],
            ['.', 'G', '.', 'H', '.', '.', '.', 'I', '.', 'J', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['K', '.', 'L', '.', '.', '.', '.', '.', 'L', '.', 'M'],
            ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', 'J', '.', 'I', '.', '.', '.', 'H', '.', 'G', '.'],
            ['.', '.', '.', '.', '.', 'F', '.', '.', '.', '.', '.'],
            ['.', 'N', '.', 'D', '.', '.', '.', 'C', '.', 'O', '.'],
            ['.', '.', '.', '.', '.', 'P', '.', '.', '.', '.', '.'],
        ],
        key: {
            A: 'botania:rune_mana',
            B: 'botania:rune_pride',
            C: 'thermal_extra:shellite_gear',
            D: 'thermal_extra:twinite_gear',
            E: 'botania:rune_lust',
            F: 'create:source_tube',
            G: 'thermal_extra:soul_infused_gear',
            H: 'ae2:cosmic_processor',
            I: 'ae2:calculation_processor',
            J: 'thermal_extra:dragonsteel_gear',
            K: 'botania:rune_envy',
            L: 'create:psi_tube',
            M: 'botania:rune_gluttony',
            N: 'botania:rune_wrath',
            O: 'botania:rune_greed',
            P: 'botania:rune_sloth'
        },
    });

    //General Rune Ritual Function
    function RuneRitual({result, count, center, inputs, mana, pattern, key, consumeRunes, ticks}) {
        var runes = [];
        var offset = Math.floor(pattern.length / 2);
        for (let z = 0; z < pattern.length; z++) {
            var row = pattern[z];
            for (let x = 0; x < row.length; x++) {
                var symbol = row[x];
                if (symbol && symbol !== ".") {
                    runes.push({
                        consume: consumeRunes || true,
                        rune: { item: key[symbol] },
                        x: x - offset,
                        z: offset - z 
                    });
                }
            }
        }
        event.custom({
            type: 'mythicbotany:rune_ritual',
            group: 'rune_rituals',
            center: { item: center },
            inputs: inputs !== undefined ? inputs.map(item => ({ item: item })) : [],
            mana : mana || 20000,
            outputs: [{ item: result, count: count || 1}],
            runes : runes,
            ticks : ticks || 200
        }).id("mythicbotany:mythicbotany_rune_rituals/" + result.slice(':')[1]);
    }
})
