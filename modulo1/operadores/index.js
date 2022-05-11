//Exercicio Operadores e Lógica de Programação

     //Resposta 1 o resultado será false
     
     //resposta 2 false

     // resposta 3 true

     // booleano

    //exercicio 2 

     //Resposta: Vai ocorrer uma junção de um número com o outro, não irá ocorrer uma soma.

     //reposta questão 3: para haver uma soma, os números não podem ter aspas, se não 
     // será lido como texto.

      //exercício de escrita de código

      //exercicio 1
      //const idade

      const idade1 = prompt('Qual a sua idade?');
      const idade2 = prompt('Qual a idade do seu melhor amigo?');
      const idade = idade1 > idade2
      console.log('Sua idade é maior do que a do seu melhor amigo?', idade);
      
     const diferencaIdade = idade1 - idade2 
     console.log('A diferença de idade é ', diferencaIdade) 

           //exercicio 2

       const num1 = prompt('digite um número par');
       const restDiv = num1 % 2
       console.log('o resto da divisao e:', restDiv);

       // o padrao é que o resultado sempre da 0.
       // o padrao sempre da 1, quando coloca um numero ímpar.
       
       // exercicio 3 

       //const idadeAnos

       const idadeAnos1 = prompt('quantos anos voce têm ?')
       const idadeMeses = idadeAnos1 * 12
       console.log('sua idade em meses são', idadeMeses)
       const idadeDias = idadeAnos1 * 365
       console.log('sua idade em dias são', idadeDias)
       const idadeHoras = idadeDias * 24
       console.log('sua idade em horas é:', idadeHoras)

       //exercício 4

       const priNumero = prompt(' digite o primeiro número ' )
       const segNumero = prompt(' digite o segundo número ')

                      const primeiro = priNumero > segNumero
       console.log('O primeiro numero é maior que segundo?', primeiro);

                     const segundo = priNumero === segNumero
       console.log('O primeiro numero é igual ao segundo?', segundo);

                     const terceiro = (priNumero % segNumero) === 0
       console.log('O primeiro numero é divisível pelo segundo?', terceiro);

                     const quarto= (segNumero %  priNumero) === 0
       console.log('O segundo numero é divisível pelo primeiro?', quarto);

       



