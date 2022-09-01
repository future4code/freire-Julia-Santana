import { AddressInfo } from "net";
import app from "./app";
import { createUser } from "./endpoints/createUser"
import { createProduct } from "./endpoints/createPorduct"
import { createPurchases } from "./endpoints/createPurchases"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getAllProducts } from "./endpoints/getAllProduct"
import { getPurchasesByUserId } from "./endpoints/getPurchasesByUserId"

// Endpoint que pega todos os users
app.get("/users", getAllUsers)
// Endpoint que pega todas as compra de um usuário pelo user_id
app.get("/users/:userId/purchases", getPurchasesByUserId)
// Endpoint que cria um usuário
app.post("/users", createUser)

//Endpoint que pega todos os produtos
app.get("/products", getAllProducts)
//Endpoint que cria um produto
app.post("/products", createProduct)

// Endpoint que realiza uma compra
app.post("/purchases", createPurchases)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});