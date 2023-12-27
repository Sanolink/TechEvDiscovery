//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0 

WorldgenEvents.remove(event => {

    event.removeOres(ores => {
        ores.blocks = ["eidolon:silver_ore", "eidolon:deep_silver_ore", "eidolon:lead_ore", "eidolon:deep_lead_ore"]
    })
})