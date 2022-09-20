import express from "express";
import { AddressInfo } from "net";
import cors from 'cors';
import knex from 'knex';
import dotenv from 'dotenv';


dotenv.config();

export const connection = knex({
     client:"mysql",
     connection:{
        host:process.env.DB_HOST,
        port:3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
     }
})

const app = express();

app.use(express.json());
app.use(cors());

import { Request, Response } from "express"

// Esse arquivo seria o index.ts

//const getActorById = async (id: string): Promise<any> => {
  //const result = await connection.raw(`
    //SELECT * FROM Actor WHERE id = '${id}'
  //`)

	//return result[0][0]
//}


// Assim a chamada funciona fora dos endpoints com .then()/.catch
//getActorById("001")
	//.then(result => {
		//console.log(result)
	//})
	//.catch(err => {
		//console.log(err)
	//});

// Assim a chamada funciona fora dos endpoints com await
//(async () => {
  //console.log(await getActorById("001") )
//})()


// Ou então podemos chamá-la dentro de um endpoint
//app.get("/users/:id", async (req: Request, res: Response) => {
  //try {
    //const id = req.params.id

    //console.log(await getActorById(id))

    //res.end()
  ///} catch (error) {
		//console.log(error.message)
    //res.status(500).send("Unexpected error")
 // }
//}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal


// questão 1
// app.get("/users/:id", async (req: Request, res: Response) => {
 //   try {
  //    const id = req.params.id
  
  //    console.log(await getActorById(id))
  
  //    res.end()
  //  } catch (error) {
  //        console.log(error.message)
   //   res.status(500).send("Unexpected error")
  //  }
 // })
 //questão A
 //Explique como é a resposta que temos quando usamos o raw?
 // Resposta: vai vir uma resposta crua referente ao id 

 // questão B:Faça uma função que busque um ator pelo nome;
 // Resposta :

 app.get ('/Actor/:name',async (req, res) => {
   try {
    const searchActor = async (name: string): Promise<any> => {
        const result = await connection.raw(`
          SELECT * FROM Actor WHERE name = "${name}"
        `)
      }
      res.send(await searchActor(req.params.name))
    
   } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
   }

 });


 //questão C:
 //Faça uma função que receba um gender retorne a quantidade de
 //itens na tabela Actor com esse gender. Para atrizes, female e para atores male.
 // Resposta:

 app.get ('/Actor/:gender',async (req, res) => {
  try {
    const countActor = async (gender:string): Promise<any> =>{
      const result = await connection.raw(`
      SELECT COUNT(*) as count From Actor WHERE gender = "${gender}"
      `);
      const coutn = result [0][0].count;
      return coutn;
   };
   
  } catch (error:any) {
       res.status(500).send(error.sqlMessage || error.message)
  }

});

// exercicio 2

// exercicio A: Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;