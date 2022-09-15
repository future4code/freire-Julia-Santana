import { Request, Response } from "express";
import { Authenticator } from "../services/Authentication";
import { RecipeDatabase } from "../data/recipeDataBase";
import { title } from "process";

export async function getRecipeById(req:Request, res:Response){
    try {
         
        const token = req.headers.authorization as string;
        const authentication = new Authenticator();
        const authenticationData = authentication.getTokenData(token);

        const recipeId = req.params.id;

        const recipeDataBase = new RecipeDatabase();
        const recipe = await recipeDataBase.getRecipeById(recipeId)

       res.status(200).send({
        id: recipe.getId(),
        title:recipe.getTitle(),
        ingredients: recipe.getIngredients(),
        description: recipe.getDescription(),
        image_url: recipe.getImage_url(),
        user_id: recipe.getUser_id(),

       });

    } catch (error:any) {
        res.status(400).send(error.message);
    }
    }


