import { BaseDatabase } from "./BaseDatabase";
import { Recipe } from "../entities/recipe"

export class RecipeDatabase extends BaseDatabase {
 
  public static TABLE_RECIPE = "Recipe"

  public createRecipe = async(recipe: Recipe)=>{
      const recipeDB = {
          id: recipe.getId(),
         title: recipe.getTitle(),
         description: recipe.getDescription(),
         ingredients:recipe.getIngredients(),
         user_id: recipe.getUser_id()
      }
      await BaseDatabase.connection(RecipeDatabase.TABLE_RECIPE)
      .insert(recipeDB)
  }

  public async getRecipeById(id: string): Promise<Recipe> {
    try {
      const recipe = await BaseDatabase.connection("Recipe")
        .select("*")
        .where({ id: id });

      return recipe[0] && Recipe.toRecipeModel(recipe[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  // public async createRecipe(recipe: Recipe): Promise<void> {
  //   try {
  //     await BaseDatabase.connection("receitas_cookenu")
  //       .insert({
  //         id: recipe.getId(),
  //         title: recipe.getTitle(),
  //         ingredients: recipe.getIngredients(),
  //         description: recipe.getDescription(),
  //         user_id: recipe.getUser_id(),
  //       });
  //   } catch (error: any) {
  //     throw new Error(error.sqlMessage || error.message);
  //   }
  // }

  public async editRecipe(recipe: Recipe): Promise<void> {
    try {
      await BaseDatabase.connection("receitas_cookenu")
        .update({
          title: recipe.getTitle(),
          ingredients: recipe.getIngredients(),
          description: recipe.getDescription(),
        })
        .where({ id: recipe.getId() });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async deleteRecipe(id: string): Promise<void> {
    try {
      await BaseDatabase.connection("receitas_cookenu")
        .delete()
        .where({ id: id });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

}