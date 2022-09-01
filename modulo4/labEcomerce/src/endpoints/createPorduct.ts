import { Request, Response } from "express";
import {product} from "../type/typeProduct"
import { getProductByName } from "../data/selectProducts"; 
import { insertProduct } from "../data/insertProduct";


export const createProduct = async(req:Request, res:Response): Promise<void> => {
    try {
        const {name, price, image_url}= req.body

        // verificando se essas propriedades não foram passadas no body
        if(!name || !price || !image_url){
            res.statusCode = 400
            throw new Error("name, price, imagemURL são obrigatorios");
        }
      // invocando a funcao que pega as informacoes na tabela "labecommerce_products" para
      // ver se o nome que esta na tabela é igual ao que esta recebendo do body
        const nameProduct = await getProductByName(name)

        // verificando se o nome do produto ja existe 
        if(nameProduct) {
            res.statusCode = 409
            throw new Error("esse produto ja esta cadastrado");
        }

        // tipando um produto 
        const Produto: product = {
            id,
            name,
            price,
            image_url
        }
          // Invocando a função que insere um produto na tabela "labecommerce_products."
          await insertProduct(Produto)

          res.status(201).send("Produto cadastrado com sucesso!")
  
      } catch (error:any) {
          res.status(500).send({
              message: error.message
            });
      }

}