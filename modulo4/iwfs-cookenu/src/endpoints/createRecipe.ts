import { Request, Response  } from "express";
import { Authenticator } from "../services/Authentication"
import { UserDataBase } from "../data/UserDataBase";
import {RecipeDatabase} from "../data/recipeDataBase";
import { User } from "../entities/User";
import { Recipe } from "../entities/recipe";
import {idGenerator} from "../services/idGenerator"

export async function createRecipe(req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string;
        const {title, ingredients, description} = req.body;
        const authenticator = new Authenticator();
        const payload = authenticator.getTokenData(token);

        if(!payload){
            throw new Error("invalid token or missing token ");  
        }

        if (!title || !ingredients || !description ) {
            throw new Error("Missing input, title, ingredients, description ");
        }

        const IdGenerator = new idGenerator();
        const id = IdGenerator.generate();

       const recipeDatabase = new RecipeDatabase();
       const recipe = new Recipe(id, title, ingredients, description, payload.id )
       await recipeDatabase.createRecipe(recipe);

        res.status(200).send({
            message: "Recipe created successfull", 
            recipe
        });
    } catch (err) {
        if (err instanceof Error) {
          res.status(400).send({
              message: err.message,
            });
        } else {
            res.status(500).send("Internal server error");
        }
    }
}
