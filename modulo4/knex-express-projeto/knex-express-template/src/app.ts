import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { usuario, pessoa } from './user';
import { tarefa, tarefa1 } from "./task";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

// exercicio 1 

app.post("/user", (req, res) => {
  const name = req.body.name
  const nickName = req.body.nickName
  const email = req.body.email


  try {
    const pessoa = {
      name,
      nickName,
      email

    }
    res.send(pessoa)
    if (name === "") {
      throw new Error("Coloque um nome");
    }
    if (email === "") {
      throw new Error("adicione o email");
    }
    if (nickName === "") {
      throw new Error("Coloque um apelido");
    }

  } catch (error: any) {
    res.status(404).send(error.message)
  }
});

// exercicio 2
app.get('/user/:id', (req, res) => {
  //SELECT informacao FROM pessoa WHERE id=id; pegar o usuario pelo id

  try {

    if (id != 1) {
      throw new Error("id não encontrado")
    }

  } catch (error: any) {
    res.status(404).send(error.message)
  }
});

// exercicio 3

app.put('/user/edit/:id', async (req, res) => {

  try {
    const result = await connection("pessoa")
      .update({
        name: req.body.nome,
        nickName: req.body.email,

      }).where({ id: req.params.id })

  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }

});

// exercicio 4 

app.post("/get", (req, res) => {

  const title = req.body.title
  const description = req.body.description
  const limitDate = req.body.limitDate
  const creatorUserId = req.body.creatorUserId
  const id = req.body.id

  try {
          const tarefa1 = {
             title,
             description,
             limitDate,
             creatorUserId,
             id
          }
          
          // CONVERT(VARCHAR,<campoDataTime>,<códigoFormato>) Para fazer a conversao da data
          res.send(tarefa1)
          if(title === ""){
            throw new Error("Adicione o titulo"); 
          }

          if(description === ""){
            throw new Error("Adicione uma descrição"); 
          }

          if(limitDate === ""){
            throw new Error("Adicione uma data limite"); 
          }

          if(creatorUserId === ""){
            throw new Error("Adicione o id do usuario"); 
          }

          if(id === ""){
            throw new Error("Adicione o id da tarefa"); 
          }
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
});

// exercicio 5

//SELECT informacao FROM tarefa1 WHERE id=id; pgar tarefa pelo id

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// exercicio 6
app.get("/user/all", (req, res) => {
  const id = String(req.params.id)
  const result = []

  for(let  produtos  of produto1)
  if(produtos.id === id)
  
  result.push(produtos)

  res.send(result)
})

export default app