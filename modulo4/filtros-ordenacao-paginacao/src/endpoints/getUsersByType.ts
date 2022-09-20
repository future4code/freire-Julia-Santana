import { Request, Response } from "express";
import { selectUsersByType } from "../exercicio1";

export async function getUsersByType(req:Request, res:Response): Promise<any> {
    try {
            let type = req.query.type as string
            console.log(type);
            
       const result = await selectUsersByType(type)
         console.log(result);
         if (type === "") {
            throw new Error("Coloque um type")
         }
         res.status(200).send(result)
         
       
    } catch (error:any) {
       res.status(500).send({
          message: error.message || "Aconteceu algo inesperado"
    })
 
 }
 }