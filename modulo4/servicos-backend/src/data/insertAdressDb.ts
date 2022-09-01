import { Address } from "../typesAddress/type";
import { connection } from "./connection";

export default async function insertAdressDb(adress: Address) {
 const {logradouro, bairro, cidade, estado, numero, cep, complemento} = adress
 const id_user:string = Date.now().toString()
 await connection("aula_servico_adress").insert({
    id_user,
    logradouro,
    bairro,
    cidade,
    estado,
    numero,
    cep,
    complemento
 })
}