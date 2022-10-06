import { Request, Response } from "express";

export async function singup(req:Request, res:Response){
        try {
            const {titulo, descricao, modoPreparo, data} = req.body
            if(!titulo|| !descricao || !modoPreparo || data){
                res.status(422).send ("insira corretamente as informações 'titulo', 'descricao, 'modoPreparo', 'data', '' ")
            }
    
        } catch (error:any) {
            res.status(400).send(error.message);
        }
}