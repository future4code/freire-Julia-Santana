import { error } from "console";
import express from "express";

import { AddressInfo } from "net";
import { dados, usuarios } from "./conta";

const app = express();

app.use(express.json());


app.post("/users", (req, res) => {
    try {
        const name = req.body.name
        const cpf = req.body.cpf
        const dataNasc = req.body.dataNasc
        const saldo = req.body.dataNasc
        const age = req.body.age

        const novoCliente: dados = {
            name,
            cpf,
            dataNasc,
            saldo,
            age
        }

        if (age < 18) {
            throw new Error(" Para se cadastar é necessario ter 18 anos ou mais")
        }

        usuarios.push(novoCliente)

        res.send(usuarios)
    } catch (Error:any) {
        res.status(400).send(Error.message)
    }

})

app.get("/users", (req, res) => {

    res.send(usuarios)

})