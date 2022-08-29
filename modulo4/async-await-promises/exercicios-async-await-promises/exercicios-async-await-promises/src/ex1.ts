import axios from 'axios';
import { baseURL } from './baseURL';

import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import { AddressInfo } from "net";

const app: Express = express();
app.use(express.json());
app.use(cors());


// questão  1a Qual endpoint você deve utilizar para isso?
// resposta :

// questao  b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
// resposta:

// questao c Implemente uma função nomeada que faça o que foi pedido.
// resposta: function assicrona
async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };


const main = async() :Promise<void>=> {
    try {
        const subscribers = await getSubscribers()
        console.log(subscribers);
        
    } catch (error:any) {
        const resp = error.response.data || error.message
       console.log(resp);
       
    }
}

main()

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});