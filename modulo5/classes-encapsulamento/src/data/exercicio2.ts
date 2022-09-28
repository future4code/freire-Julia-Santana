//exercicio 2: Transforme a variável de tipo abaixo, chamada Transaction em uma classe Transaction.
// Ela deve conter as mesmas propriedades: data, valor e descrição. Agora, porém, todas elas devem 
//ser privadas. Portanto, crie métodos (getters) para a leitura desses valores, tanto para essa classe
// quanto para a classe UserAccount. Crie uma instância dessa classe e adicione à instância já criada de
// UserAccount 
// Resposta:

export class Transaction {
    private date: string
    private value: number
    private description: string
  Transaction: any
    
    constructor(date: string, value: number, description: string) {
      this.date = date
      this.value = value
      this.description = description
    }
    public getDate():string{
      return this.date
   }

   public getValue():number{
    return this.value
 }

 public getDescription():string{
  return this.description
}

public setTransaction(newTransaction:Transaction):void{
  this.Transaction.push(newTransaction)
}
  }

  