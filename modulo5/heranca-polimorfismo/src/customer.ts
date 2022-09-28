import { User } from "./user";

// Questão 2 Analise a Customer. Perceba quais propriedades são públicas e quais
// são privadas. Copie esse código para o seu exercício de hoje e crie uma instância
// dessa classe (com as informações que você quiser). Atente-se ao fato de que o Customer 
//é uma subclasse (ou classe filha) da classe User. Sabemos disso porque há a palavra extends
// na declaração da classe Customer; e, em seu construtor, foi usado o super.

export class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, name, email, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }

}



  // questao a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?*
  // resposta 1vezes

  // questao  b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*
  // resposta 2 vezes porque o Custumer é extensão do User