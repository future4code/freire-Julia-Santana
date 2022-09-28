
// import {Request, Response} from 'express';
// import { Authenticator } from '../services/Authentication';
// import { UserDataBase } from '../data/UserDataBase';
// import { RecipeDatabase } from '../data/recipeDataBase';


// export async function deleteRecipe (req:Request, res:Response){
//     try {
//         const token = req.headers.authorization as string;
//         const authentication = new Authenticator()
//         const authenticationData = authentication.getTokenData(token);

//         const userData = new UserDataBase();
//         const user = await userData.getUserById(authenticationData.id);

//         const recipeData = new RecipeDatabase();
//         const recipe = await recipeData.getRecipeById(req.params.id);
//         const recipeUserId = recipe.getUser_id();

//         if(user.getRole() !== "ADMIN" && recipeUserId !== user.getId()){
//             throw new Error("Não é permitido excluir essa receita");
//         }

//         await RecipeDatabase.deleteRecipe(req.params.id);

//         res.status(200).send({
//             message: "receita deletada com sucesso"
//         })

//     } catch (error:any) {
//         res.status(400).send(error.message)
//     }
// }
