// Exercicios de revisa JS - Resposta

// // 1 B: 
//   function checarIgualdade (a, b) {
//       return (`no comparador de igualdade ${a} === ${b}, e ${a === b} `)
//   }
//   console.log(checarIgualdade(1, 2));


//   // 1 C:

//   function verificaSeEMaior (a, b){
//     return (` verificando se ${a} > ${b} e ${a > b}`)
//   }
//   console.log(verificaSeEMaior(1, 2));

  // exercicio de comparacão 

  // A: false
  // B: true
  // C: false
  // D: true
  // E: true

  // exercicio 3

  function cadastro(){
          
          const nomeDoUsuario = prompt("Digite seu nome:")
          const anoDeNascimento= Number(prompt("Digite seu ano de nascimento"))
          const senhaDoUsuario = Number(prompt("Digite uma senha com 6 digitos:"))
          const nacionalidade = prompt("Digite sua nacionalidade:")
          const usuarios = ["nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade"]
          const contaIdade = anoDeNascimento - 2022
          if(contaIdade >= 18){
            return ('concluido')

          } else if(senhaDoUsuario  === 6){
            return ('concluido')

          } else if ( nacionalidade === "brasileiro"){
            return ('concluido')

          } else{
            return (' não é possivel efetuar o cadastro')
          }
  
          console.log(`${nomeDoUsuario}, ${anoDeNascimento}, ${senhaDoUsuario}, ${nacionalidade}`)
        }
        console.log(cadastro());


  // exercicio 4

  
       function senha(){
        const digiteSenha = prompt("Digite sua senha:")
        if(digiteSenha === "labenu"){
        return ("logado")

        } else {
          return ("senha invalida")
        }
      }
      console.log(senha());
       
      


        // exercicio 5
          
          //  function datasVacinas(){

          //   const nome = prompt("Digite seu nome")
          //   const vacina = prompt(" Digite a vacina que voce tomou") 
          //   let data = ("01/08/2021")
          //   let tempo = Number(prompt("Faz quantos dias que voce tomou a vacina?"))
          //  const dataCoronavac = 28
          //  const dataAstrazenica = 90 
          //  const dataPfizer = 90 

          //  if(vacina === 'coronavac'){
          //     const 
          //    console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)
          //  }
          //  if else(vacina === 'Astrazenica'){
          //      const  resultado1 = (dataAstrazenica - tempo)
          //    console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)
          //  }
          //   if else(vacina === 'Pfize'){
          //    const  resultado2 = (dataPfizer - tempo)
          //    console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)
          //   }

          //  }
          //  console.log(datasVacinas())
          

           // Exercicio 6:

    //        const usuarios = [
    //         { nome: "Artur", imunizacao: "incompleta" },
    //         { nome: "Barbara", imunizacao: "incompleta" },
    //         { nome: "Carlos", imunizacao: "incompleta" }
    //  ]     
    //         const imunizados = usuarios.filter(obj => obj.imunizacao='completo')
           
    //        console.log(imunizados);

           // Exercicio 7:


    //        const usuarios1 = [
    //         { nome: "Artur", imunizacao: "incompleta" },
    //         { nome: "Barbara", imunizacao: "completa" },
    //         { nome: "Carlos", imunizacao: "incompleta" }
    //  ]   
    //  const vacinados = usuarios1.filter((usuarios1) => {
    //         if(usuarios1.imunizacao === "completa"){
    //         console.log("parabens", usuarios1)} 
    //         else {
    //           console.log(`Olá ${usuarios1.nome}! Sua imunização está ${usuarios1.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`);
    //         }
    //  } )  
    //    console.log(vacinados);


    






