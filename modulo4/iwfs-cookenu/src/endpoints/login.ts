import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authentication";
import { hashManager } from "../services/hashManager";
import { idGenerator } from "../services/idGenerator";

export async function login(req:Request, res:Response){
        try {
            const {password, email,} = req.body
            if( !email || !password ){
                res.status(422).send ("insira corretamente as informações ', 'email', 'password',  ")
            }
            if(password <  6){
                 res.status(422).send(" O password aceita no mínimo 6 digitos")
            }

            // verificando se o usuario já existe
             const userData = new UserDataBase()
             const user = await userData.findUserBtEmail(email)
             if(!user){
                res.status(409).send("esse email não está cadastrado")
             }
            //instacia da classe
            
            const HashManager = new hashManager()
            const passwordIsCorrect = HashManager.compare(password, user.getPassword())

            if(!passwordIsCorrect){
                res.status(401).send('email ou senha incorereto')
            }
             const authentication = new Authenticator()
             const token = authentication.generate({id: user.getId(), role:user.getRole() });
             res.status(200).send({ message: "Usuário logado com sucesso", token})
        } catch (error:any) {
            res.status(400).send(error.message);
        }
       
}