// exercico 1: Analise a classe `UserAccount` abaixo. Perceba quais propriedades são públicas
// e quais são privadas e responda as perguntas discursivas em comentários no arquivo `index.ts`

import { Transaction } from "./exercicio2";

// A: Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
// Resposta: O construtor executa uma instância de classe, e para chamar o construtor utilizamos o this.

// B: b) *Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe
// (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor 
//da classe User"` foi impressa no terminal?*

export class UserAccount {
    setTransaction(transacao: Transaction) {
       throw new Error("Method not implemented.");
    }
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: IDBTransaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getName():string{
      return this.name
  }

  public setName(newName:string){
      this.name = newName
  }

  public getCpf():string{
   return this.cpf
}

public setCpf(newCpf:string){
   this.cpf = newCpf
}

public getAge():number{
   return this.age
}

public setAge(newAge:number){
   this.age = newAge
}

}






  

  //questao C  Como conseguimos ter acesso às propriedades privadas de uma classe?
  // Resposta: para ter acesso às propriedades privadas de uma classe, você terá que 
  //adicionar métodos públicos que proporcionem isso. ex 
  // public getCpf(): string {
 //	return this.cpf
// }