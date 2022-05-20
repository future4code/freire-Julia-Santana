// objetos

const // objeto carro = {
  /*c*/ cor: "vermelho", 
  //h  ano: 2020        a   
  //a   marca: "fiat",  l
  //v   airbag: true    o
  //e   acelerar: () => {  // funcao do carro
        {  console.log("vrum !!!");
     },
          listaDeVantagem: ["4 portas", "garantia 5 anos"]


           //console.log(carro) é possivel imprimir dessa forma tambem
const anoDoCarro = carro.ano
console.log(anoDoCarro);

const marcaDoCarro = carro.marca
console.log(marcaDoCarro);

const corDoCarro = carro.["cor"]
console.log(`a cor do carro e ${corDoCarro}`);

// redefinindo valor usando const, o 
// ideal e usar let

     carro.marca = "volskavagen"
     console.log(carro.marca);

     console.log(carro.acelerar()); // os paranteses no final
                                    // serve para chama a funcao do objeto.

      // exercicio 1
          const filme = {
           direcao:"Julia Moreira",
            nome: "As aventuras de PI",
            Lancamento: 2018,
            elenco: ["Julia Moreira", "Julia Moreira"],
             jaAssistiu: true
            
         }
                                    
         filme.personagen =( ["tigre", ".macaco", ".PI",])
         console.log(direcaoFilme);
         console.log(anoDoFilme);
         console.log(fime['ano']);
         console.log(fime["elenco"][ 0]);
         console.log(filme.elenco[3]); // outro exempo para acessar tal lugar da lista
         console.log(fime.elenco[0], filme.elenco[0]);
         console.log(filme.elenco[1], filme.elenco[1]);   
         console.log(fime.elenco[2], filme.elenco[2]);
         filme.elenco [0] = xuxa // trocar o primeiro elemento pelo nome xuxa
         
         console.log(`o nome do filme e ${filme}, seus personagens sao ${personagens} seu personagens sao
         ${filme.personagens[0]
        $filme.personagens[1]}`);



      
         // exercicio 2

         const pessoa = {
             nome: "Julia",
             idade: 20,
             musicaPreferida:"pop"
         }

         console.log(`o nome da pessoa e ${pessoa.nome}, ela tem ${pessoa.idade} anos, seu gosto musical preferido e ${pessoa.musicaPreferida}`);
         const paiDePet = {
             listaDeTelefone:[12344687]
             nome:"julia",
             pet {
                 nome:"cadu"
                 idade:"11"
                 raca:"spanil"
             }
              endereco{
                  rua:"joao"
                  n:1000
              }
         }

         console.log(paiDePet);
         console.log(paiDePet.pet.nome);
         console.log(paiDePet.listaDeTelefone[0]);
         
         // exercicio 3
         const intrutoras = 
         [{ nome:"lavinia", modulo: 1}
         { nome:"julia",modulo: 2,} { nome:"lavinia",modulo: 3}  ]

         console.log(instrutors[2].nome);

        //  //const objetoInstrutoras ={
        //      nome:"lavinia",
        //      modulo: 1
        //  }

        // adicionando propriedade

        const curso ={
            nome: "integral Full Stackk"
            linguagens:["js", "CSS", "html"]
        }
        console.log(curso);

        curso.numeroEstudante = 150
        console.log(curso);


        // spalhamento ou spread

        const usuario = {
            nome: "julia",
            idade: 20,
            email: "ju@hotmail"
        }
  
           console.log(usuario);

           const novoUsuario = {
               ...usuario
               nome:"joao",
               sobremome:"Moreira"
               email: "ju@gmail"
           }
             console.log(novoUsuario);
             console.log(novoUsuario.email);

   
               // exercicio 4

            //    const function  criarObjeto(pessoa){
            //       const novaPessoa = {
            //            ...pessoa,
            //            listaComidas: [brigadeiro, pizza, bolo, feijoada],
            //            melhorAmigo = {
            //                nome: "murilo",
            //                idade: 27
            //            }
            //        }
            //          return console.log(`o nome da pessoa e, ${novaPessoa.nome}, sua comida preferida ${novaPessoa.listaComida}, seu melhor amigo e ${melhorAmigo.nome}, sua idade e ${novaPessoa.melhorAmigo.idade}`)
            //    } 
            //    criarObjeto (novaPessoa) //para chamar a funcao