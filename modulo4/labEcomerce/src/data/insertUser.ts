import { users} from "../type/typeUsers";
import { connection } from "./connection";

export default async function insertUser(users: users) {
 const {name, email, password} = users
 const id:string = Date.now().toString()
 await connection("labecommerce_users").insert({
   id,
   name,
   email,
   password
 })
}