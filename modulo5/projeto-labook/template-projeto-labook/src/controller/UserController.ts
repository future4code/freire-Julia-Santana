import { UserBusiness } from "../business/UserBusiness";
import { ILoginInputDTO, ISignupInputDTO } from "../models/User";
import { Request, Response } from "express";

export class UserController {
    // static login(arg0: string, login: any) {
    //     throw new Error('Method not implemented.');
    // }
    // static signup(arg0: string, signup: any) {
    //     throw new Error('Method not implemented.');
    // }
    
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public signup = async (req: Request, res: Response) =>{
        try {
            const input: ISignupInputDTO = {
                
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

           
            const response = await this.userBusiness.signup(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(422).send({ message: error.message })
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: ILoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

          
            const response = await this.userBusiness.login(input)

            res.status(200).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    

}