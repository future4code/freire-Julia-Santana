function calculaAreaRetangulo() {
    const altura = Number(prompt("Digite a altura do retangulo"))
    const largura = Number(prompt(" Digite a largura de um retangulo"))

    console.log(altura * largura)


  }



  // EXERCÍCIO 02

  function imprimeIdade() {
    const ano = Number(prompt("Digite o ano atual"))
    const nascimento = Number(prompt("Digite a data de nascimento"))
    const suaIdade = ano - nascimento
    console.log(suaIdade);

  }

  console.log(imprimeIdade());

  // EXERCÍCIO 03

  function calculaIMC(peso, altura) {

     const imc = peso / ( altura * altura)
    console.log(imc);


  }

  console.log(calculaIMC(47, 1.57));

  // EXERCÍCIO 04

  function imprimeInformacoesUsuario() {
    const NOME = prompt("Qual seu nome?")
    const IDADE = prompt(" qual a sua idade?")
    const EMAIL = prompt("qual seu email?")
    console.log(`Meu nome é ${NOME}, tenho ${IDADE} anos, o seu email é ${EMAIL}`);

  }
  console.log(imprimeInformacoesUsuario());
  // EXERCÍCIO 05

  function imprimeTresCoresFavoritas() {
    const cor1 = prompt("Qual sua cor favorita")
    const cor2 = prompt("Qual sua cor favorita")
    const cor3 = prompt("Qual sua cor favorita") 

    const listaCores = [cor1, cor2, cor3]

    console.log(listaCores);


  }
  console.log(imprimeTresCoresFavoritas());

  // EXERCÍCIO 06
  function retornaStringEmMaiuscula(string) {
    const frase = "Bom Dia"
  console.log(frase.toUpperCase())



  }
  console.log(retornaStringEmMaiuscula());

  // EXERCÍCIO 07
  function calculaIngressosEspetaculo() {
    const custo = 3000
    const valorIngresso = 100
    const valorEspetaculo = custo / valorIngresso
    console.log(valorEspetaculo);


  }
  console.log(calculaIngressosEspetaculo());

  // EXERCÍCIO 08
  function checaStringsMesmoTamanho() {

  const frase = "Bom-dia"
  const frase1 = "Boa-Noite"

  console.log(frase.length >= frase1.length);

  }
  console.log(checaStringsMesmoTamanho());

  // EXERCÍCIO 09
  function retornaPrimeiroElemento() {
    const listaDeComida = ["chocolate", "lasanha", "pizza"]
   console.log(listaDeComida[2]);  

  }
  console.log(retornaPrimeiroElemento());

  // EXERCÍCIO 10
  function retornaUltimoElemento() {
    const listaDeFrutas = ["Banana", "Melao", "Pera", "Melancia", "Uva"]
    console.log(listaDeFrutas[4]);


  }
  console.log(retornaUltimoElemento());

  // EXERCÍCIO 11
  function trocaPrimeiroEUltimo() {
    let  listaNumeros = [1, 2, 3, 4, 5]
      listaNumeros[0] = 5
      listaNumeros[4] = 1

    console.log(listaNumeros, listaNumeros);

  }
  console.log(trocaPrimeiroEUltimo());

  // EXERCÍCIO 12
  function checaIgualdadeDesconsiderandoCase() {
    const frase = "Girassol"
  const frase1 = "Cachorro"

  console.log(frase >= frase1)

  }
  console.log(checaIgualdadeDesconsiderandoCase());

  // EXERCÍCIO 13
  function checaRenovacaoRG() {
    const anoAtual = prompt("Digite o ano atual")
    const anoNascimento = prompt("Digite a data de nascimento")
    const carteiraIdentidade = prompt("Digite o ano que o RG Foi emitido") 
    const calculoIdade = anoAtual - anoNascimento  
    const renovarRg = (anoAtual - carteiraIdentidade) === 5
    console.log(renovarRg);

  }
  console.log(checaRenovacaoRG());

  // EXERCÍCIO 14
  function checaAnoBissexto() {
    const ano = 1992
    console.log( bissexto = 2000 === ( 400, 800, 1200, 1600, 2000))
  }
  console.log(checaAnoBissexto());

  // EXERCÍCIO 15
  function checaValidadeInscricaoLabenu() {

     const idade18A = prompt("voce tem 18 ou mais?")
    const ensinoMedio = prompt("tem ensino medio competo?")
    const disponibilidade = prompt("Tem disponibilidade de horario?") 
    const inscricaoValida = idade18A && ensinoMedio && disponibilidade === "sim"
    console.log(inscricaoValida);
  }
  console.log(checaValidadeInscricaoLabenu()); 