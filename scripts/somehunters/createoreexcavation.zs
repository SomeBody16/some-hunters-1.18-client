var modId = "createoreexcavation";

craftingTable.removeByModid(modId);
<recipetype:minecraft:smithing>.removeByModid(modId);
<recipetype:create:mechanical_crafting>.removeByModid(modId);


craftingTable.addShaped(
    recipeId(modId, "drilling_machine"),
    <item:${modId}:drilling_machine>,
    [
        [<item:create:electron_tube>,       <item:create:precision_mechanism>,  <item:create:brass_tunnel>],
        [<item:createcasing:brass_gearbox>, <tag:items:the_vault:playerchunks>, <item:create:spout>],
        [<item:create:metal_girder>,        <item:create:mechanical_drill>,     <item:create:metal_girder>]
    ]
);

craftingTable.addShapeless(
    recipeId(modId, "extractor"),
    <item:${modId}:extractor>,
    [
        <item:${modId}:drilling_machine>,
        <item:create:mechanical_pump>,
        <item:create:hose_pulley>
    ]
);

craftingTable.addShaped(
    recipeId(modId, "drill"),
    <item:${modId}:drill>,
    [
        [<item:compressium:iron_3>,     <item:minecraft:iron_ingot>,        <item:minecraft:air>],
        [<item:minecraft:iron_ingot>,   <item:compressium:iron_3>,          <item:minecraft:iron_ingot>],
        [<item:minecraft:air>,          <item:minecraft:iron_ingot>,        <item:minecraft:iron_ingot>]
    ]
);

craftingTable.addShaped(
    recipeId(modId, "diamond_drill"),
    <item:${modId}:diamond_drill>,
    [
        [<item:compressium:diamond_2>,  <item:minecraft:diamond>,           <item:minecraft:air>],
        [<item:minecraft:diamond>,      <item:${modId}:drill>,   <item:minecraft:diamond>],
        [<item:minecraft:air>,          <item:minecraft:diamond>,           <item:minecraft:diamond>]
    ]
);

craftingTable.addShaped(
    recipeId(modId, "netherite_drill"),
    <item:${modId}:netherite_drill>,
    [
        [<item:compressium:netherite_1>,    <item:minecraft:netherite_ingot>,           <item:minecraft:air>],
        [<item:minecraft:netherite_ingot>,  <item:${modId}:diamond_drill>,   <item:minecraft:netherite_ingot>],
        [<item:minecraft:air>,              <item:minecraft:netherite_ingot>,           <item:minecraft:netherite_ingot>]
    ]
);

craftingTable.addShaped(
    recipeId(modId, "vein_finder"),
    <item:${modId}:vein_finder>,
    [
        [<item:minecraft:ender_eye>,        <item:minecraft:amethyst_shard>,    <item:minecraft:air>],
        [<item:the_vault:echo_pog>,         <item:minecraft:stick>,             <item:minecraft:air>],
        [<item:minecraft:air>,              <item:minecraft:air>,               <item:minecraft:stick>]
    ]
);