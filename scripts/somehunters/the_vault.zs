var modId = "the_vault";

var pogTag = <tag:items:the_vault:pog>;
pogTag.add(<item:${modId}:gem_gorginite>);
pogTag.add(<item:${modId}:gem_iskallium>);
pogTag.add(<item:${modId}:gem_sparkletine>);
pogTag.add(<item:${modId}:gem_bomignite>);
pogTag.add(<item:${modId}:gem_petzanite>);
pogTag.add(<item:${modId}:gem_tubium>);
pogTag.add(<item:${modId}:gem_upaline>);
pogTag.add(<item:${modId}:gem_xenium>);
pogTag.add(<item:${modId}:gem_ashium>);
pogTag.add(<item:${modId}:gem_pog>);
pogTag.add(<item:${modId}:echo_pog>);
pogTag.add(<item:${modId}:omega_pog>);

craftingTable.addShapeless(
    recipeId(modId, "hardened_chest_scroll"),
    <item:${modId}:hardened_chest_scroll>,
    [
        <item:${modId}:wooden_chest_scroll>,
        <item:${modId}:chromatic_iron_block>
    ]
);
craftingTable.addShapeless(
    recipeId(modId, "flesh_chest_scroll"),
    <item:${modId}:flesh_chest_scroll>,
    [
        <item:${modId}:wooden_chest_scroll>,
        <item:${modId}:vault_meat_block>
    ]
);
craftingTable.addShapeless(
    recipeId(modId, "enigma_chest_scroll"),
    <item:${modId}:enigma_chest_scroll>,
    [
        <item:${modId}:wooden_chest_scroll>,
        <item:${modId}:banished_soul>
    ]
);
craftingTable.addShapeless(
    recipeId(modId, "altar_chest_scroll"),
    <item:${modId}:altar_chest_scroll>,
    [
        <item:${modId}:wooden_chest_scroll>,
        <item:${modId}:extraordinary_larimar>
    ]
);


craftingTable.remove(<item:${modId}:vault_alloy>);
craftingTable.addShaped(
    recipeId(modId, "vault_alloy_1"),
    <item:${modId}:vault_alloy> * 5,
    [
        [<item:${modId}:vault_ingot>,               <item:${modId}:chromatic_steel_nugget>,     <item:${modId}:vault_ingot>],
        [<item:${modId}:chromatic_steel_nugget>,    <item:${modId}:chromatic_steel_ingot>,      <item:${modId}:chromatic_steel_nugget>],
        [<item:${modId}:vault_ingot>,               <item:${modId}:chromatic_steel_nugget>,     <item:${modId}:vault_ingot>]
    ]
);
craftingTable.addShapeless(
    recipeId(modId, "vault_alloy_2"),
    <item:${modId}:vault_alloy>,
    [
        <item:${modId}:vaulterite_ingot>,
        <item:${modId}:vaulterite_ingot>
    ]
);