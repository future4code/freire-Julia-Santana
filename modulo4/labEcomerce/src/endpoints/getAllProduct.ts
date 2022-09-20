import { Request, Response } from "express";
import {selectProducts} from "../data/selectProducts";

// Função que pega todas os produtos
export const getAllProducts = async(
    req: Request,
    res: Response
): Promise <void> => {
   try {
    
    // Invocando a função que pega as informações no banco de dados
        const products = await selectProducts()

         // Verificando se não tem produtos
        if(products.length < 1) {
            res.statusCode = 404
            throw new Error("Não existem produtos!");
        }

        res.status(200).send(products)
   } catch (error:any) {
    res.status(500).send({
        message: error.message
      });
   }
}