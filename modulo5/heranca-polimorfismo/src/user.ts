// exercicio de herança
// exercicio 1 criar uma instancia (dê o nome, email, etc que você quiser) e imprima,
// no terminal, o id, o nome e o email desse usuário. 

export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }


    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }
   // exercicio 4 Adicione um método público à classe User. Esse método deve ter o nome de introduceYourself("apresente-se")
   // e deve retornar a mensagem: "Olá, bom dia!". As classes filhas sempre têm acesso aos métodos públicos da classe pai.
   // Então, para realizar o teste dessa sua função, faça com que a instância que você criou para a classe Customer chame esse método

   // exercicio 5 Altere o método que você acabou de criar para que ele imprima a mensagem: `"Olá, sou ${nome do usuário}. Bom dia!"`. Realize os mesmos testes anteriores.
    public introduceYourself():string{
        return `Olá, sou ${this.name} bom dia!`
    }
}

 