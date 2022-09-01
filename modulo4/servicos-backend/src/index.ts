
import { AddressInfo } from "net";
import app from "./app";
import { getAddress } from "./endpoints/getAddress";
import { getAllAddress } from "./endpoints/getAllAdress";
import { insertAdress } from "./endpoints/insertAdress";
//ex1
app.get("/endereco/:cep", getAddress)

// pegar todos os endereços
app.post("/user/:cep",insertAdress)

//inserir um endereço no banco
app.get("/list", getAllAddress)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});