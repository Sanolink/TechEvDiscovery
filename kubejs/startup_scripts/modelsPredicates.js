//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0 

StartupEvents.postInit(event => {
    if (!Platform.isClientEnvironment) return;
    const $ItemProperties = Java.loadClass('net.minecraft.client.renderer.item.ItemProperties')
    $ItemProperties.register(Item.of('create:iron_sheet'), new ResourceLocation('count'), (stack, world, living, seed) => {
        return stack.getCount() / stack.getMaxStackSize()
    })
})
