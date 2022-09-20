import axios from "axios";
import { Request, Response } from "express"
import { Address } from '../typesAddress/type'

export const getFullAdress = async (req: Request, res: Response):Promise<Address | undefined> => {
    try {
        const cep = req.params.cep

        const result = await axios.get(` https://viacep.com.br/ws/${cep}/json/`)

        const address: Address ={
            logradouro:result.data.logradouro,
            numero:result.data.numero,
            cidade:result.data.localidade,
            estado:result.data.uf,
            cep:result.data.cep,
            complemento:result.data.complemento,
            bairro:result.data.bairro,
        }
        return address
    } catch (error: any) {
        return undefined
    }
}