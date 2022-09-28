//Comece criando um objeto dessa interface, colocando a tipagem correta. 
//Perceba que você terá que dar uma implementação para o método calculateBill().
// Por enquanto, implemente de tal forma que sempre retorne 2 (ou qualquer outro número). 
//Imprima todas as informações que forem possíveis no terminal.


export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }

  export const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }
  //a) *Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?*
  // Resposta: name,  registrationNumber,  consumedEnergy,
  // a que não foi impressa foi o   calculateBill