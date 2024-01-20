var modId = "create";

// Experience nugget
<recipetype:create:compacting>.addRecipe(
    "compacted", 
    <constant:create:heat_condition:none>, 
    [<item:${modId}:experience_nugget>], 
    [], 
    [<fluid:create_enchantment_industry:experience> * 3], 
    200
);

// Creative motor
// TODO: Create: Destroy recipe
// var creativeMotor = <recipetype:create:sequenced_assembly>
//     .builder(recipeId(modId, "creative_motor"))
//     .transitionTo(<item:create:steam_engine>)
//     .require(<item:create:steam_engine>)
//     .loops(8)
//     .addOutput(<item:create:creative_motor>, 1)
//     .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create:rotation_speed_controller>))
//     .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create:blaze_cake>))
//     .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:compressium:iron_4>))
//     .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:the_vault:gem_echo>))
//     .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:create:chocolate> * 1000))
//     .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:create:tea> * 1000));

// <recipetype:create:sequenced_assembly>.addRecipe(creativeMotor);

craftingTable.addShapeless(
    recipeId(modId, "creative_motor_to_cogwheel"),
    <item:createcasing:creative_cogwheel>,
    [<item:create:creative_motor>]
);
craftingTable.addShapeless(
    recipeId(modId, "creative_cogwheel_to_motor"),
    <item:create:creative_motor>,
    [<item:createcasing:creative_cogwheel>]
);

// Crushing of withered bone
<recipetype:create:crushing>.addRecipe(
    recipeId(modId, "withered_bone_to_bone_meal"), 
    [
        (<item:minecraft:bone_meal> * 3),
        (<item:minecraft:bone_meal> * 3) % 25,
        (<item:minecraft:black_dye> * 1) % 25
    ], 
    <item:architects_palette:withered_bone>
);
