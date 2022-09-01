import axios from 'axios';
import { Request, Response } from "express"
import { Address } from '../typesAddress/type';

export const getAddress = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep

        const result = await axios.get(` https://viacep.com.br/ws/${cep}/json/`)

        console.log(result.data);

        res.send(result.data)

        const address: Address ={
            logradouro:result.data.logradouro,
            numero:result.data.numero,
            cidade:result.data.localidade,
            estado:result.data.uf,
            cep:result.data.cep,
            complemento:result.data.complemento,
            bairro:result.data.bairro,



        }
        res.status(200).send(address)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}