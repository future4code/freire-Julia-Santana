import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ICreateShowInputDTO, IGetShowInputDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

public createShow = async (req:Request, res:Response)=>{
    try {
         const input:ICreateShowInputDTO={
            token:req.body.token,
             band: req.body.band,
             startsAt: req.body.startsAt,
             tickets: req.body.tickets
         }

         const response = await this.showBusiness.createShow(input)
         res.status(201).send(response)
        } catch (error:any) {
            res.status(422).send({ message: error.message })
        }
        }

        public getShow = async (req: Request, res: Response) => {
            try {
                const input: IGetShowInputDTO = {
                    token: req.headers.authorization as string
                }
        
                const response = await this.showBusiness.getShow(input)
                res.status(200).send(response)
            } catch (error:any) {
                res.status(400).send({ message: error.message })
            }
        }
}
    