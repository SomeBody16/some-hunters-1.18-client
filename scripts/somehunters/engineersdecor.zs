import mods.jei.JEI;

var modId = "engineersdecor";

craftingTable.remove(<item:${modId}:small_mineral_smelter>);
JEI.hideIngredient(<item:${modId}:small_mineral_smelter>);

craftingTable.remove(<item:${modId}:small_freezer>);
JEI.hideIngredient(<item:${modId}:small_freezer>);

craftingTable.remove(<item:${modId}:small_solar_panel>);
JEI.hideIngredient(<item:${modId}:small_solar_panel>);

craftingTable.remove(<item:${modId}:small_tree_cutter>);
JEI.hideIngredient(<item:${modId}:small_tree_cutter>);

craftingTable.remove(<item:${modId}:small_block_breaker>);
JEI.hideIngredient(<item:${modId}:small_block_breaker>);

craftingTable.remove(<item:${modId}:factory_placer>);
JEI.hideIngredient(<item:${modId}:factory_placer>);

craftingTable.remove(<item:${modId}:factory_hopper>);
craftingTable.addShaped(
    recipeId(modId, "factory_hopper"),
    <item:${modId}:factory_hopper>,
    [
        [<item:${modId}:metal_bar>,     <item:the_vault:chromatic_steel_block>,     <item:minecraft:hopper>],
        [<item:the_vault:gem_pog>,      <item:the_vault:chromatic_steel_ingot>,     <item:minecraft:air>],
        [<item:minecraft:air>,          <item:minecraft:air>,                       <item:minecraft:air>]
    ]
);