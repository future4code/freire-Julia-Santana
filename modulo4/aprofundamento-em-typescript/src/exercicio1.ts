// A:
let minhaString: string
minhaString = "julia"
console.log(minhaString);

// O RESULTADO VAI DAR ERRO, POIS COMO DECLAREI O VALOR DA VARIAVEL COMO STRING, 
// O TYPESCRIPT SÓ ACEITA STRING.

// B:
let meuNumero: number | string
meuNumero = 20
meuNumero = "julia"

console.log(meuNumero);

// C / D

type Pessoa = {
    name: string,
    age: number
    corFavorita: string
}

enum Cores {
        AMARELO = "Amarelo",
        AZUL = "Azul",
        VERMELHO = "Vermelho",
        LARANJA = "Laranja",
    
}

const julia: Pessoa = {
    name: "julia",
    age: 20,
    corFavorita: Cores.AMARELO
}
console.log(julia);

const joao: Pessoa = {
    name: "joao",
    age: 24,
    corFavorita: Cores.AZUL
}
console.log(joao);

const maria: Pessoa = {
    name: "maria",
    age: 28,
    corFavorita: Cores.VERMELHO
}
console.log(maria);

const lucas: Pessoa = {
    name: "lucas",
    age: 32,
    corFavorita: Cores.LARANJA
}
console.log(lucas);