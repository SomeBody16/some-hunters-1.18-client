import mods.armoreablemobs.ArmorGroup;
import crafttweaker.api.item.IItemStack;
import mods.zensummoning.SummoningDirector;
import mods.zensummoning.SummoningAttempt;
import mods.zensummoning.SummoningInfo;
import mods.zensummoning.MobInfo;

var modId = "refinedstorage";

recipes.remove(<item:${modId}:portable_grid>);
recipes.remove(<item:${modId}:silicon>);
recipes.remove(<item:${modId}:wireless_grid>);
recipes.remove(<item:${modId}:wireless_fluid_grid>);
recipes.remove(<item:${modId}:wireless_crafting_monitor>);

furnace.addJsonRecipe(recipeId(modId, "silicon"), {
    ingredient: <item:cloudstorage:balloon_bit>,
    result: <item:${modId}:silicon>.registryName,
    experience: 0.35 as float,
    cookingtime: 6000
});
