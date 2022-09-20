import { Request, Response } from "express"
import { insertPurchases } from "../data/insertPurchases"
import { getProductById } from "../data/selectProducts"
import { getUserById } from "../data/selectUsers"
import { purchases } from "../type/typePurchases"


export const createPurchases = async (req:Request, res:Response): Promise <void> => {
    try {
        const {user_id, product_id, quantity} = req.body

        // verificando se essas propriedades não foram passadas no body
        if(!user_id || !product_id || !quantity){
              res.statusCode = 400
              throw new Error("userId, productId, e quantity são obrigatorios");
        }

        /* Invocando a função que pega as informações na tabela "labecommerce_users" para ver 
        se o id do usuário que está na tabela é igual ao userId que esta recebendo no body. */

        const user = await getUserById(user_id)

        //verificando se não tem o usuario

        if(!user){
            res.statusCode = 404
            throw new Error("usuario não encontrado");

            /* Invocando a função que pega as informações na tabela "labecommerce_products" para ver 
        se o id do produto que está na tabela é igual ao productId que esta recebendo no body. */

        const product = await getProductById(product_id)

        //verificando se não tem o produto 
        if(!product) {
            res.statusCode = 404 
            throw new Error("produto não encontrado");   
            
        }
            
        // Fazendo o calculo das quantidades do produto com o seu valor.
        const total_Price = product.price* quantity
        

        // Tipando uma compra
        const Purchase: purchases = {
            id: uuid(),
            user_id,
            product_id,
            quantity,
            total_Price
        }
        // Invocando a função que insere uma compra na tabela "labecommerce_purchases"
        }
    // Invocando a função que insere uma compra na tabela "labecommerce_purchases".
    await insertPurchases(Purchase)

    res.status(201).send("Compra realizada com sucesso!")

} catch (error:any) {
    res.status(500).send({
        message: error.message
      });
}
}

function uuid(): string {
    throw new Error("Function not implemented.")
}
