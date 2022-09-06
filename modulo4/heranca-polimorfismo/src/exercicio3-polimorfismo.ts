import { Place } from "./exercicio2-polimorfismo";

// exercicio 3
// 1) *O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)*
// resposta: criar uma classe filha para servir como extensao

// Por que a Place não é uma interface?
// Resposta  porque ela retorna alguma coisa, ela não é um tipo

//3) *Por que a classe `Place` é uma Classe Abstrata?*
//Resposta: porque ela esta sendo herdada

//A primeira representa uma casa residencial. Vamos armazenar nela uma variável para representar a 
//quantidade de moradores (`residentsQuantity`)
export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }

    
  }

  // A segunda é para um comércio. Para ela, vamos adicionar uma propriedade para representar os 
  //andares desse lugar comercial (`floorsQuantity`)

  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
  }

  //A última é para uma indústria e adicionaremos uma propriedade para guardar a quantidade máquinas 
  //de lá (`machinesQuantity`)

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }
  }