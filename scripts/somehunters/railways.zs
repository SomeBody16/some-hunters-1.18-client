var modId = "railways";

function transformTrack(modId as string, type as string, ingredient as crafttweaker.api.item.IItemStack) as void {
    <recipetype:create:sequenced_assembly>.remove(<item:${modId}:track_${type}>);
    <recipetype:create:deploying>.addRecipe(
        recipeId(modId, "track_" + type),
        <item:create:track>,
        ingredient,
        [<item:${modId}:track_${type}>],
        true
    );
}

transformTrack(modId, 'acacia', <item:minecraft:acacia_slab>);
transformTrack(modId, 'birch', <item:minecraft:birch_slab>);
transformTrack(modId, 'crimson', <item:minecraft:crimson_slab>);
transformTrack(modId, 'dark_oak', <item:minecraft:dark_oak_slab>);
transformTrack(modId, 'jungle', <item:minecraft:jungle_slab>);
transformTrack(modId, 'oak', <item:minecraft:oak_slab>);
transformTrack(modId, 'spruce', <item:minecraft:spruce_slab>);
transformTrack(modId, 'warped', <item:minecraft:warped_slab>);
transformTrack(modId, 'blackstone', <item:minecraft:blackstone_slab>);
transformTrack(modId, 'ender', <item:minecraft:end_stone_brick_slab>);
transformTrack(modId, 'tieless', <item:minecraft:glass>);
transformTrack(modId, 'phantom', <item:minecraft:phantom_membrane>);
transformTrack(modId, 'monorail', <item:create:metal_girder>);
