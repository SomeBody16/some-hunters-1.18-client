var modId = "storagedrawers";

craftingTable.remove(<item:${modId}:iron_storage_upgrade>);
craftingTable.remove(<item:${modId}:gold_storage_upgrade>);
craftingTable.remove(<item:${modId}:diamond_storage_upgrade>);
craftingTable.remove(<item:${modId}:emerald_storage_upgrade>);

craftingTable.addShaped(
    recipeId(modId, "iron_storage_upgrade"),
    <item:${modId}:iron_storage_upgrade>,
    [
        [<item:the_vault:chromatic_iron_ingot>,     <item:minecraft:iron_ingot>,                <item:the_vault:chromatic_iron_ingot>],
        [<item:minecraft:iron_ingot>,               <item:${modId}:obsidian_storage_upgrade>,   <item:minecraft:iron_ingot>],
        [<item:the_vault:chromatic_iron_ingot>,     <item:minecraft:iron_ingot>,                <item:the_vault:chromatic_iron_ingot>]
    ]
);

craftingTable.addShaped(
    recipeId(modId, "gold_storage_upgrade"),
    <item:${modId}:gold_storage_upgrade>,
    [
        [<item:the_vault:chromatic_iron_ingot>,     <item:the_vault:vault_essence>,         <item:the_vault:chromatic_iron_ingot>],
        [<item:the_vault:vault_essence>,            <item:${modId}:iron_storage_upgrade>,   <item:the_vault:vault_essence>],
        [<item:the_vault:chromatic_iron_ingot>,     <item:the_vault:vault_essence>,         <item:the_vault:chromatic_iron_ingot>]
    ]
);

craftingTable.addShaped(
    recipeId(modId, "diamond_storage_upgrade"),
    <item:${modId}:diamond_storage_upgrade>,
    [
        [<item:the_vault:chromatic_steel_ingot>,     <item:the_vault:vault_diamond>,         <item:the_vault:chromatic_steel_ingot>],
        [<item:the_vault:vault_diamond>,             <item:${modId}:gold_storage_upgrade>,   <item:the_vault:vault_diamond>],
        [<item:the_vault:chromatic_steel_ingot>,     <item:the_vault:vault_diamond>,         <item:the_vault:chromatic_steel_ingot>]
    ]
);

craftingTable.addShaped(
    recipeId(modId, "emerald_storage_upgrade"),
    <item:${modId}:emerald_storage_upgrade>,
    [
        [<item:the_vault:black_chromatic_steel_ingot>,     <item:the_vault:vault_diamond>,            <item:the_vault:black_chromatic_steel_ingot>],
        [<item:the_vault:vault_diamond>,                   <item:${modId}:diamond_storage_upgrade>,   <item:the_vault:vault_diamond>],
        [<item:the_vault:black_chromatic_steel_ingot>,     <item:the_vault:vault_diamond>,            <item:the_vault:black_chromatic_steel_ingot>]
    ]
);