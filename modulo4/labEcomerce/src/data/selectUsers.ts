import { users } from "../type/typeUsers";
import { connection } from "../data/connection";

// Essa função está acessando a tabela "labecommerce_users" para pegar todos os usuários.
export const selectUsers = async(): Promise <users[]> => {
    
    const users = await connection("labecommerce_users")
        .select("labecommerce_users.id","labecommerce_users.name","labecommerce_users.email")

    return users
}

/* Essa função está acessando a tabela "labecommerce_users" para verificar se o email 
já está cadastrado. */
export const getUserByEmail = async(email: string): Promise <users[]> => {

    const  [user]  = await connection("labecommerce_users")
        .where({email: email})

        return user
}

/* Essa função está acessando a tabela "labecommerce_users" para verificar se 
existe um id de usuário.*/
export const getUserById = async(userId: string): Promise <users> => {

    const user  = await connection("labecommerce_users")
        .where({id: userId})

        return user[0]
}