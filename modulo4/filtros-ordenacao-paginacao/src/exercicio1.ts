import { connection } from "./data/connection";
import { Request, Response } from "express";

// exercicio1a Crie uma cópia do endpoint acima, e altere-o para que ele possa 
//receber um parâmetro de filtragem por nome. Este nome deve ser enviado por query params.


export async function selectAllUsers(): Promise<any> {
   const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)

   return result[0]
}

export async function selectUsersByName(name:string): Promise<any> {

      const result = await connection("aula48_exercicio")
         .where("name", "LIKE", `%${name}%`)
         return result
}

//exercicio 1b
export async function selectUsersByType(type:string): Promise<any> {

   const result = await connection("aula48_exercicio")
      .where("type", "LIKE", `%${type}%`)
      return result
}


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
   try {
      const users = await selectAllUsers()

      if (!users.length) {
         throw new Error("No recipes found")
      }

      res.status(200).send(users)

   } catch (error: any) {
      const resp = error.response.data || error.message
      console.log(resp);
 
       }
}
