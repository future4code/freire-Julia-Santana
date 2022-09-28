export abstract class Place {
    constructor (protected cep:string){}
    public getCep(): string{
        return this.cep
    }
}

export class NewPlace extends Place {
constructor(protected cep: string){
    super(cep)
}

}

//a) *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?*
// resposta : Não se pode criar uma instancia de uma classe abstrata

//b) *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*
// resposta: podemos criar uma classe filha e usar ela como extensão