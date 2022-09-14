import { AddressInfo } from "net";
import app from "./app";
import { getAllCharacters } from "./endpoints/getAllCharactere";
import { login } from "./endpoints/login";
import { singup } from "./endpoints/singup";

app.get("/user", getAllCharacters)

app.post("/user",singup);

app.post("/user/login",login)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});