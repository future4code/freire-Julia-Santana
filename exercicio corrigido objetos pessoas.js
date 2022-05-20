// exercicios Objetos
  // Execicios de Interpretação

//   exercício 1
//   resposta A: Matheus Nachtergaele
//   resposta B: Virginia Cavendish
//   resposta C: canal: "Globo", horario: "14h"

//   Exercício 2

//   resposta A: Nome: "juca", idade: 3, raça:'SRD'
//               Nome: "juba", idade: 3, raça:'SRD'
//               Nome: "jubo", idade:3, raça: 'SRD'

//   resposta B: Sintaxe, ela liga a cópia ao documento original.

    //  Exercicio 3

    //  resposta A: false, indefinido

    //  resposta B: a string  "altura" deu indefinido, porque não foi declarado no código.


    //  Exercícios de escrita de código


//     Exercicio 1 Respostas

// let pessoa = {
//     nome: "Julia",
//     listaApelido: ['ju', 'juju', 'jul']
// }

//  function criarObjeto(){
//   console.log(pessoa);

   
//         console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.listaApelido}`);
//     }
//    console.log(criarObjeto());




// exercicio B
 
//    const nomes ={
//        nome:"Fabiana",
//        Apelido:["bia", "bi", "fabi"]
//    }
//  console.log(nomes);


//   const novosNomes={
//       ...nomes,
//       nome:'fabiana',
//       apelido:["fa", "ana", "fab"]
//   }
 


//            Exercício 2


//   const mulher = {  
//      nome: 'Mariah',
//      idade: 20, 
//      profissao: "cientista" }

     

//      const homem = {
//          nome:'João',
//          idade: 24,
//          profissao: "programador"
//       }

    

   

//     function pessoas(homem, mulher){
//        const pessoa2 = 
//     {...mulher, ...homem}
//        const pessoa3 =
//        [ pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length]

//        return pessoa3
       
//          }
//          console.log(pessoas(mulher));
//          console.log(pessoas(homem));
   




//     exercicio 3

//      carrinho = []

//      const frutasTropicais = {
//       nome:"maçã",
//       disponibilidade:true
//      }

//      const frutasFeira = {
//          nome:'Pera',
//          disponibilidade: true
//      }

//        const frutaSacolao = {
//            nome:"Melancia",
//            disponibilidade: true
//        }

//        function listaDeFrutas(fruta){
//         const novasFrutas = {
//             ...frutasTropicais,
//             ...frutasFeira, 
//             ...frutaSacolao
//         }
//         carrinho = [frutasTropicais, frutaSacolao, frutasFeira]

//         return carrinho
//        } 

//        console.log(listaDeFrutas(carrinho.FrutasTropicais))