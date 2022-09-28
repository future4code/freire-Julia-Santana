import { AddressInfo } from "net";
import app from "./app";
import { getAllCharacters } from "./endpoints/getAllCharactere";
import { getProfile } from "./endpoints/getProfile";
import { login } from "./endpoints/login";
import { singup } from "./endpoints/singup";
import {createRecipe} from "./endpoints/createRecipe"
import {getUserById} from "./endpoints/getUserById"
import {getRecipeById} from "./endpoints/getRecipeById"

app.get("/user", getAllCharacters)

app.post("/singup",singup);

app.post("/login",login)

app.post("/recipe", createRecipe)

app.get("/recipes/:id", getRecipeById)

app.get("/user/profile", getProfile)

app.get("/user/:id", getUserById)


 app.post("/recipes", createRecipe)
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});