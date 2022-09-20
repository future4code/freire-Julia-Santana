import { Request, Response } from "express"
import {getFullAdress} from '../services/getFullAdress'
import {insertAdressDb} from "../data/insertAdressDb"

export const insertAdress = async (req:Request, res:Response) => {

  try {
    const cep = req.params.cep 

    const address = await getFullAdress(cep)
    if(!address){
        throw new Error("Cep Invalido");
        
    }
    await insertAdressDb(address)
    res.status(200).send("endereço criado com sucesso")
    
  } catch (error:any) {
    res.status(500).send(error.message)
  }
}