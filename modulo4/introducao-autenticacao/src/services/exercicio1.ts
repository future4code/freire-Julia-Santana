import { v4 } from "uuid"


//exercicio 1
//a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja
//melhor do que usar números? 
// Resposta: nao concordo pois como os ids já são números em sua maioria, tipar da forma certa, seria mais interessante

//b) *A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. 
//Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. 
//Dado isso, crie uma função para gerar um id.*



export function generateId(): string {
    const id = v4();
    return v4();

  }
