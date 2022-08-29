//exercicio 4 Vamos continuar as nossas funcionalidades da API. Crie uma função que permita criar uma nova notícia.

import axios from "axios"
import { baseURL } from "./baseURL"

//*a.* Qual é o tipo dessa função? Por quê?
// assicrona, gosto dela porque carrega mais rapido 

const createNews = async (news:any)=>{
    return axios.put (`${baseURL}/news`, news)
}
