var modId = "create_electric_trains";

craftingTable.remove(<item:${modId}:electric_particle>);
craftingTable.addShaped(
    recipeId(modId, "electric_particle"),
    <item:${modId}:electric_particle> * 16,
    [
        [<item:minecraft:air>,      <item:the_vault:chromatic_iron_ingot>],
        [<item:minecraft:air>,      <item:minecraft:redstone>],
        [<item:minecraft:air>,      <item:the_vault:chromatic_iron_ingot>]
    ]
);