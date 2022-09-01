import { Request, Response } from "express";
import { selectUsers } from "../data/selectUsers";

export const getAllUsers = async(
    req: Request,
    res: Response
    ): Promise <void> => {
        try {
             // Invocando a função que pega as informações no banco de dados
        const users = await selectUsers()

        
        // Verificando se não tem usuários
        if(users.length < 1) {
            res.statusCode = 404
            throw new Error("Não existem usuários!");
        }

        res.status(200).send(users)
        } catch (error:any) {
            res.status(500).send({
                message: error.message
              });
        }
    }