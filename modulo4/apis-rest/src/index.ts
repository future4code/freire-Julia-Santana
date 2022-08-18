import express, { Express } from 'express'
import cors from 'cors'
import { usuario, users } from './types'
import { request } from "http";

const app: Express = express();

app.use(express.json());
app.use(cors());


// Questão 1

app.get("/users", (req, res) => {
    res.send(users)
})

//exercicio2 
app.get("/users/:type", (req, res) => {

    try {
        const UserType = users.filter((usuario) => {

            if (usuario.types === req.params.type)

                return (usuario)
        })
        res.send(UserType)

    } catch (error: any) {
        res.status(error)
    }
})

// exercicio 3
app.get("/users/search/:name", (req, res) => {
    try {
        const { name } = req.params

      const acharNome = users.filter((pessoa)=>{
          return pessoa.name === name
      })
    
        res.send(acharNome)
    } catch (Error: any) {
        res.status(500)

    } 
})
// pergunta a: Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
// RESPOSTA: o envio de paramentro é o req, res

// exercicio 4

app.post("/users", (req, res) => {
    const name = req.body.name
    const id = req.body.id
    const email = req.body.email
    const types = req.body.types
    const age = req.body.age

    const novoProduto: usuario = {
        id,
        name,
        email,
        types,
        age

    }
    // users.push(novoProduto)
    res.send(users)
});



app.listen(3003, () => {
    console.log("Server rodando na porta 3003: [http://localhost:3003]")
})


// Questão 1a: Qual método HTTP você deve utilizar para isso? 
// RESPOSTA: O metodo utilizado é o GET.

// Questão b:Como você indicaria a entidade que está sendo manipulada?
// RESPOSTA: Eu indicaria a entidade atráves da url que o endpoint vai bater, para 
// trazer o resultado que queremos.


// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors