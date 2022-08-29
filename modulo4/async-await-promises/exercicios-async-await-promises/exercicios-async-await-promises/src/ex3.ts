import axios from "axios";
import { baseURL } from "./baseURL";


// questao 3a: Se apenas trocarmos o retorno da função para: Promise<user[]> , teremos algum erro de tipagem?
// resposta: Não

// questao 3b b. É boa prática fazermos um mapeamento do resultado de uma Promise, caso seja indicado que ela retorne um Promise<any>. Explique com as suas palavras o porquê de fazermos isso
//resposta: 

// questao 3c: Reimplemente a função, corretamente.
//resposta:
export type user = {
	id: string;
	name: string;
	email: string;
}
const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };

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