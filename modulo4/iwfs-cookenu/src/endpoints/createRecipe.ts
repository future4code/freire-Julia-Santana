import { Request, Response  } from "express";
import { Authenticator } from "../services/Authentication"
import { UserDataBase } from "../data/UserDataBase";
import {RecipeDatabase} from "../data/recipeDataBase";
import { User } from "../entities/User";
import {deleteRecipe} from "./deleteRecipe";
import { Recipe } from "../entities/recipe";
import {idGenerator} from "../services/idGenerator"

export async function createRecipe(req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string;
        const {title, ingredients, description, image_url} = req.body;

        if (!title || !ingredients || !description || !image_url) {
            throw new Error("Missing input, title, ingredients, description or image_url");
        }

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getTokenData(token);

        const userDatabase = new UserDataBase();
        const user = await userDatabase.getUserById(authenticationData.id);

        const IdGenerator = new idGenerator();
        const id = IdGenerator.generate();

        if (!user) {
            throw new Error("User not found");
        }

console.log(id);

        const recipeDatabase = new RecipeDatabase();
       const recipe = new Recipe(id, title, ingredients, description, image_url, user.getId() )
       await recipeDatabase.createRecipe(recipe);

        res.status(200).send({
            message: "Recipe created successfully",
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
