import express from "express";

import cors from 'cors'

import { produtos, produto1 } from "./data";
import { request } from "http";



const app = express();

app.use(express.json());

app.use(cors())

//exercicio1 
app.get("/toDoApi", (req, res)=>{
    res.send("a api esta funcionando")
})
console.log("a api esta funcionando");

// Exercicio 3: Desenvolva um endpoint que **cria um novo produto** e 
//retorna a lista de produtos atualizada. A id do produto deve ser gerada automaticamente pela API.

app.post("/toDoApi", (req, res) => {
    const name = req.body.name
    const id = req.body.id
    const price = req.body.price

    const novoProduto: produtos = {
          id,
          name,
          price

    }
        produto1.push(novoProduto)
        res.send(produto1)
});

// Exrcicio 4 Crie um endpoint que **retorna todos os produtos**.

app.get("/toDoApi/:id/produtos1", (req, res) => {
    const id = String(req.params.id)
    const result = []

    for(let  produtos  of produto1)
    if(produtos.id === id)
    
    result.push(produtos)

    res.send(result)
})
    
 // exercicio 5 Crie um endpoint que edita o preço de um determinado produto e retorna a lista de produtos atualizada.

 app.post("/produtos1/:id/price", (req, res) => {
        const id = String(req.params.id)
    
          for(let produtos of produto1)
          if (produtos.id === id){
           // produtos.price = !produtos.price
          }
          res.send(produto1)
        })
    

  //exercicio 6 Construa um endpoint que deleta um determinado produto e retorna a lista de produtos atualizada.

  app.delete("/produto1/:id", (req, res)=>{
       const id = String(req.params.id)

       const deletaProduto = produto1.filter((name:produtos )=>{
             return name.id !== id

       })
       res.send(deletaProduto)
  });

  //exercicio 7 Refatore o endpoint do exercício 3 (criar produto) para que sejam 
  //implementados fluxos de validação dos dados recebidos (name e price)

  app.post("/toDoApi/:id/price", (req, res)=>{
   try{ const id = String(req.params.id)
    const {name,price} = req.body

    const acharProduto = produto1.filter((prod)=>{
        return prod.name === name
    })
    if(name !== String){
        throw new Error("O nome não é uma string")
    }
      res.send(acharProduto)

    const acharPreco = produto1.filter((pre)=>{
        return pre.price === price
    })
    if(price !== Number){
        throw new Error(" O price não é um number")
    }
    if(price <= 0){
        throw new Error(" O price tem que ser maior que o 0")
    } res.send(acharPreco) }

       catch(Error:any) {
        res.status(404).send(Error.message)
    }

    })

    // exercicio 8 Refatore o endpoint do exercício 5 (editar produto) para que sejam implementados 
    //fluxos de validação dos dados recebidos (`price`)
    app.post("/produtos1/:id/price", (req, res) => {
        try{
        const {name,price} = req.body
        const preco = produto1.filter((prec)=>{
            return prec.price === price
        })
            if(price === ""){
                throw new Error("Coloque um preço");
            }
            if(price !== Number){
                throw new Error("O preço precisa ser number");   
            }

            if(price <= 0){
                throw new Error("O preço precisa ser maio que 0");
                
            }}

            catch(Error:any) {
                res.status(404).send(Error.message)
            }
        
    })
    
        //exercicio 9 

      

app.listen(3003,()=>{
    console.log("Server rodando na porta 3003: [http://localhost:3003]")
 })
