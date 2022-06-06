function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
       let nomeAnimais = animais.map(nome);
       nomeAnimais = [];
      nomeAnimais =  animais.nome + ""; 
    return animais
    
   

}
   console.log(criarArrayNomesAnimais());