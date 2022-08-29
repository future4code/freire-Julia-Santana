 import { baseURL } from "./baseURL";
import axios from "axios";
 // exercicio 2 Agora, para treinar um pouco da sintaxe, reescreva a função do exercício 1 utilizando arrow function. 
  // arrow function
  //reposta:
  const getSubscribers = async ()=>{
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
}
// exercicio 2a:Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona
// reposta: um usa a funcao nomeada usa o async, e a arrow function nao usa o async


const main = async() :Promise<void>=> {
    try {
        const subscribers = await getSubscribers()
        console.log(subscribers);

    } catch (error:any) {
        const resp = error.response.data || error.message
       console.log(resp);
       
    }
}

main()