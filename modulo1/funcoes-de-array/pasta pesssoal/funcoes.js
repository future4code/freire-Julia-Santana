modulo1/treino funcoes.js

/ let nome1 = "Bil Gates"
let nome1 = "Jeff Bezos"


nome1 = nome.toLowercase() //vai deixar o nome minusulo
nome1 = nome1.trim() //vai tirar o espaço do começo e do final
nome1 = nome.replaceAll("" , "-")// vai colocar um traço no espaço do meio
console.log(nome1);

nome2 = nome.toLowercase()
nome2 = nome1.trim() 
nome2 = nome.replaceAll(" " , "-")


// exemplo de funcao nomeadas palavra chave function

function formatar()//nome da funcao.
//():recebe uma variavel, sao os parametros, as entradas(inputs) {return}//a logica vai ficar dentro das chaves {}.
// return recebe o resultado depois da logica aplicada

function formatar(nome){ nome = nome.toLowercase()
    nome = nome.trim()
    nome = nome.replaceAll(" ", "-")

        return nome}

        console.log(formatar(nome1));
  // funcao que retorne usar o return
  // funcao que imprima usar o conole.log

        // //ou pode fazer assim

        // function formatar(nome){ nome = nome.toLowercase() nome = nome.trim() nome = nome.replaceAll(" ", "-")

        //         return nome}

        //         console.log(formatar(nome1));

        const nomeDoBilionario1 = formatar(nome1)

        const nomeDoBilionario2 = formatar(nome2)

        const nomeDoBilionario3 = formatar(nome3)

        console.log( nomeDoBilionario1, nomeDoBilionario2, nomeDoBilionario3);

   //funcao que imprima um nome

        function imprimirSaudacao(nomes){
          const nomes =prompt("escreva um nome)
          console.log(`Ola ${nomes}`);}

          conso.log imprimirSaudacao = "Julia"


          // funcao retorna o nome

          function saudacao(){ const nome = prompt('qual seu nome?')
         const idade = prompt(' qual sua idade')

         return ` Ola ${nome}, sua idade e ${idade}`}

         const resposta = saudacao
         console.log(resposta);

         // escopo

         const nome ="Julia"

         function imprimeNome(){ console.log(nome, idade)
           const idade = 20
            return idade}
         const idade = imprimeNome()

         console.log(nome);
         console.log(idade);

         function imprimeNome(){ console.log(nome, idade)
            const idade = 20

              function imprimeFrase (idade, nome){
                  const comidaPreferida="chocolate"
                  console.log(`Ola eu sou ${nome}, tenho $`, e gosto de 
                  comer comida ${preferida});
              } 
            imprimeFrase()}

            // exercicio 2

            function somarDoisNumeros(num1, num2){
                const soma = num1+num 2 // escopo é a primeir linha.
                return soma
            }
            console.log(somarDoisNumeros(1,2))
            console.log(soma);


            // declarar funcao anonima

            const formatar = function(){
                 return // recebe o resultado depois da logica,
                 // bem parecida de se declarar funcao.


                 // arow functions

                 const formatar = ()=>{
                     return // recebe o resultado depois da logica
                     // bem parecida com funcao anonima, porem de 
                     //uma forma mais simplificada.
                 }
            }


                 //exercicio 3 funcao anonima

                 function imprimirSaudacao(nomes){
                    const nomes =prompt("escreva um nome)
                    console.log(`Ola ${nomes}`);}

                    imprimirSaudacao = "Julia"

                    //exercicio 2  arrow

                    const imprimirSaudacao =(nomes)=>{
                        const nomes =prompt("escreva um nome)
                        console.log(`Ola ${nomes}`);

                        imprimirSaudacao = "Julia"

                        // CALCULO FUNCOES

                        function minhaFuncao(variavel) {
                            return variavel * 5
                        }

                        console.log(minhaFuncao(2))
                        console.log(minhaFuncao(10))

                        // RESULTADO 10, 50 