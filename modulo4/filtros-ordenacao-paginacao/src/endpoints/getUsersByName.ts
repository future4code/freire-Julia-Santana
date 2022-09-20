import { connection } from "../data/connection";
import { Request, Response } from "express";
import { selectUsersByName } from "../exercicio1";


export async function getUsersByName(req:Request, res:Response): Promise<any> {
    try {
            let name = req.query.name as string
            console.log(name);
            
       const result = await selectUsersByName(name)
         console.log(result);
         res.status(200).send(result)
         
       
    } catch (error:any) {
       res.status(500).send({
          message: error.message || "Aconteceu algo inesperado"
    })
 
 }
 }

