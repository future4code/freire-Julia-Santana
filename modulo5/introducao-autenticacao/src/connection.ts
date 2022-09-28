import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()
const userTableName = "User";

const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        port: 3306,
        multipleStatements: true
    }
})

//questão 2
//a) *Explique o código acima com as suas palavras.*
//resposta:

//c)Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.

const createUser = async (id: string, email: string, password: string) => {
    await connection
      .insert({
        id,
        email,
        password,
      })
      .into(userTableName);
  };
  console.log(createUser);
  
export default connection