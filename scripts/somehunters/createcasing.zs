var modId = "createcasing";

function transformShaftType(modId as string, shaft_type as string, ingredient as crafttweaker.api.item.IItemStack) as void {
    craftingTable.remove(<item:${modId}:${shaft_type}_shaft>);
    <recipetype:create:mechanical_crafting>.remove(<item:${modId}:${shaft_type}_shaft>);
 
    <recipetype:create:deploying>.addRecipe(
        recipeId(modId, shaft_type + "_shaft"),
        <item:create:shaft>,
        ingredient,
        [<item:${modId}:${shaft_type}_shaft>],
        true
    );
}

transformShaftType(modId, "oak", <item:minecraft:stripped_oak_log>);
transformShaftType(modId, "spruce", <item:minecraft:stripped_spruce_log>);
transformShaftType(modId, "birch", <item:minecraft:stripped_birch_log>);
transformShaftType(modId, "jungle", <item:minecraft:stripped_jungle_log>);
transformShaftType(modId, "acacia", <item:minecraft:stripped_acacia_log>);
transformShaftType(modId, "dark_oak", <item:minecraft:stripped_dark_oak_log>);
transformShaftType(modId, "crimson", <item:minecraft:stripped_crimson_stem>);
transformShaftType(modId, "warped", <item:minecraft:stripped_warped_stem>);
transformShaftType(modId, "glass", <item:minecraft:glass>);
transformShaftType(modId, "brass", <item:create:brass_ingot>);
