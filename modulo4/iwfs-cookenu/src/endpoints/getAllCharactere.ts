import { UserDataBase } from "../data/UserDataBase"
import { Authenticator } from "../services/Authentication"
import {Request, Response} from "express"

// pegar todos os usuarios 

export async function getAllCharacters(req:Request, res:Response){
     try {
        const token = req.headers.authorization as string

        if(!token){
            res.status(422).send('esse endpoint exige uma autorização a ser passada no headers')
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        if(tokenData.role!== 'ADMIN'){
            res.status(401).send("somente administradores podem acessa")
        }

        const  userDatabase = new UserDataBase();
        const users = await userDatabase.getAllUsers()
        res.status(200).send(users)
     } catch (error:any) {
        res.status(400).send(error.message)
     }
}