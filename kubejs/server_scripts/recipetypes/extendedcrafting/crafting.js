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
    const recipes = [
        {
            result: 'tardis_refined:terraformer',
            pattern: [
                " TST ",
                " CQC ",
                " EHE ",
                " CDC ",
                " TST "
            ],
            key: {
                "T": 'mekanismgenerators:turbine_vent',
                "S": 'mekanism:steel_casing',
                "C": 'mekaevolution:cosmic_control_circuit',
                "Q": 'mekanism:quantum_entangloporter',
                "E": 'ae2:quantum_entangled_singularity',
                "H": 'techev_additions:chromatic',
                "D": 'mekanism:dimensional_stabilizer'
            }
        },
        {
            result: 'techev_additions:chromatic',
            pattern: [
                " UCU ",
                "UAHAU",
                "CHSHC",
                "UAHAU",
                " UCU "
            ],
            key: {
                "U": 'mysticalagriculture:ultimate_essence',
                "C": 'extendedcrafting:crystaltine_ingot',
                "A": 'mekanism:pellet_antimatter',
                "H": 'mekanism:pellet_hypermatter',
                "S": 'ae2:singularity',
            }
        },
        {
            result: 'productivebees:honeycomb_safenium',
            pattern: [
                "  A  ",
                " B*C ",
                "D* /d",
                " c/b ",
                "  a  "
            ],
            key: {
                "*": BeeConfigurableComb("inferium"),
                "/": BeeConfigurableComb("insanium"),
                "A": BeeConfigurableComb("geotic"),
                "B": BeeConfigurableComb("aquatic"),
                "C": BeeConfigurableComb("aeric"),
                "D": BeeConfigurableComb("magmatic"),
                "d": BeeConfigurableComb("gaia"),
                "c": BeeConfigurableComb("draconic"),
                "b": BeeConfigurableComb("starry"),
                "a": BeeConfigurableComb("nitro_crystal")
            }
        },
        {
            result: 'productivebees:honeycomb_sudentium',
            pattern: [
                "   ABC   ",
                "  DEFGH  ",
                " IJKLMNO ",
                "PQRS*TUVW",
                "XYZ* /zyx",
                "wvut/srqp",
                " onmlkji ",
                "  hgfed  ",
                "   cba   "
            ],
            key: {
                "*": BeeConfigurableComb("prudentium"),
                "/": BeeConfigurableComb("supremium"),
                "A": BeeConfigurableComb("copper"),
                "B": BeeConfigurableComb("niter"),
                "C": BeeConfigurableComb("aluminum"),
                "D": BeeConfigurableComb("osmium"),
                "E": BeeConfigurableComb("gold"),
                "F": BeeConfigurableComb("obsidian"),
                "G": BeeConfigurableComb("rabbit"),
                "H": 'productivebees:honeycomb_milky',
                "I": BeeConfigurableComb("prismarine"),
                "J": BeeConfigurableComb("zinc"),
                "K": BeeConfigurableComb("tin"),
                "L": BeeConfigurableComb("sulfur"),
                "M": BeeConfigurableComb("iron"),
                "N": BeeConfigurableComb("platinum"),
                "O": 'minecraft:honeycomb',
                "P": BeeConfigurableComb("nickel"),
                "Q": BeeConfigurableComb("chicken"),
                "R": BeeConfigurableComb("lead"),
                "S": BeeConfigurableComb("redstone"),
                "T": BeeConfigurableComb("coal"),
                "U": BeeConfigurableComb("silver"),
                "V": BeeConfigurableComb("radioactive"),
                "W": BeeConfigurableComb("glowing"),
                "X": BeeConfigurableComb("lapis"),
                "Y": BeeConfigurableComb("sheep"),
                "Z": BeeConfigurableComb("piggy"),
                "z": BeeConfigurableComb("calorite"),
                "y": BeeConfigurableComb("iridium"),
                "x": BeeConfigurableComb("lightning_dragonsteel"),
                "w": BeeConfigurableComb("spirited_crystal"),
                "v": BeeConfigurableComb("blizz"),
                "u": BeeConfigurableComb("elementium"),
                "t": BeeConfigurableComb("iesnium"),
                "s": BeeConfigurableComb("emerald"),
                "r": BeeConfigurableComb("enderium"),
                "q": BeeConfigurableComb("uraninite"),
                "p": BeeConfigurableComb("netherite"),
                "o": BeeConfigurableComb("fluix"),
                "n": BeeConfigurableComb("nephryx"),
                "m": BeeConfigurableComb("alfsteel"),
                "l": BeeConfigurableComb("diamond"),
                "k": BeeConfigurableComb("niotic_crystal"),
                "j": BeeConfigurableComb("wasted_radioactive"),
                "i": BeeConfigurableComb("blitz"),
                "h": BeeConfigurableComb("blazing"),
                "g": BeeConfigurableComb("terrasteel"),
                "f": BeeConfigurableComb("sculk"),
                "e": BeeConfigurableComb("plastic"),
                "d": BeeConfigurableComb("ice_dragonsteel"),
                "c": BeeConfigurableComb("basalz"),
                "b": BeeConfigurableComb("fire_dragonsteel"),
                "a": BeeConfigurableComb("awakened_supremium")
            }
        },
        {
            result: 'productivebees:honeycomb_impertium',
            pattern: [
                "   ABC   ",
                "  DEFGH  ",
                " IJKLMNO ",
                "PQRS*TUVW",
                "XYZ* /zyx",
                "wvut/srqp",
                " onmlkji ",
                "  hgfed  ",
                "   cba   "
            ],
            key: {
                "*": BeeConfigurableComb("tertium"),
                "/": BeeConfigurableComb("imperium"),
                "A": BeeConfigurableComb("spirit"),
                "B": BeeConfigurableComb("experience"),
                "C": BeeConfigurableComb("amethyst"),
                "D": BeeConfigurableComb("arcane"),
                "E": BeeConfigurableComb("cinnabar"),
                "F": BeeConfigurableComb("hop_graphite"),
                "G": BeeConfigurableComb("ruby"),
                "H": BeeConfigurableComb("turtle"),
                "I": BeeConfigurableComb("sapphire"),
                "J": BeeConfigurableComb("silicon"),
                "K": BeeConfigurableComb("oily"),
                "L": BeeConfigurableComb("zombie"),
                "M": BeeConfigurableComb("skeletal"),
                "N": BeeConfigurableComb("slimy"),
                "O": BeeConfigurableComb("peridot"),
                "P": BeeConfigurableComb("fishy"),
                "Q": BeeConfigurableComb("spacial"),
                "R": BeeConfigurableComb("ironwood"),
                "S": BeeConfigurableComb("knightmetal"),
                "T": BeeConfigurableComb("tea"),
                "U": BeeConfigurableComb("fiery"),
                "V": BeeConfigurableComb("steeleaf"),
                "W": BeeConfigurableComb("apatite"),
                "X": BeeConfigurableComb("crystalline"),
                "Y": BeeConfigurableComb("squid"),
                "Z": BeeConfigurableComb("chocolate"),
                "z": BeeConfigurableComb("destabilized_redstone"),
                "y": BeeConfigurableComb("compressed_iron"),
                "x": BeeConfigurableComb("ostrum"),
                "w": BeeConfigurableComb("fluorite"),
                "v": BeeConfigurableComb("resonant_ender"),
                "u": BeeConfigurableComb("energized_glowstone"),
                "t": BeeConfigurableComb("withered"),
                "s": BeeConfigurableComb("refined_obsidian"),
                "r": BeeConfigurableComb("constantan"),
                "q": BeeConfigurableComb("pink_slimy"),
                "p": BeeConfigurableComb("steel"),
                "o": BeeConfigurableComb("silky"),
                "n": BeeConfigurableComb("energized_steel"),
                "m": BeeConfigurableComb("signalum"),
                "l": BeeConfigurableComb("bronze"),
                "k": BeeConfigurableComb("desh"),
                "j": BeeConfigurableComb("electrum"),
                "i": BeeConfigurableComb("ender"),
                "h": BeeConfigurableComb("manasteel"),
                "g": BeeConfigurableComb("refined_glowstone"),
                "f": BeeConfigurableComb("invar"),
                "e": BeeConfigurableComb("brass"),
                "d": BeeConfigurableComb("lumium"),
                "c": BeeConfigurableComb("blazing_crystal"),
                "b": 'productivebees:honeycomb_ghostly',
                "a": 'productivebees:honeycomb_powdery'
            }
        }
    ]

    //General Shaped Function
    recipes.forEach((recipe) => {
        let json = {
            type: 'extendedcrafting:shaped_table',
            pattern: recipe.pattern,
            key: recipe.key,
            result: parseIngredient(recipe.result)
        }
        event.custom(json).id(`extendedcrafting:${recipe.result.split(":")[1]}`)
    })
})