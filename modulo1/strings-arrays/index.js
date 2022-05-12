 // RESPOSTAS / EXERCÍCIOS 
           //exercicio 1
 //Resposta exercicio 1: a

 //Resposta exercicio 2: b

 //Resposta exercicio 3: 11
 
 //Resposta exercicio 4:0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,
 
//Resposta exercicio 5: 0,1,2,3,4,5,6

//exercicio 2 

//"SUBI NUM ÔNIBUS EM MIRROCOS" , 29

 //exercício escrita de código 
 // exercicio 1

 const nome = prompt('qual seu nome?')
 const email = prompt ('qual seu email?')

 console.log(`o ${email} foi cadastrado com sucesso`);
 console.log(` Seja bem vindo(o) ${nome}`);
''
 //exercicio 2
 
 const listaComida = ["pizza", "açai", "chocolate", "macarrão", "Sorvete", "frutas"]
 const novaFrase = ("Essas são minhas comidas preferidas");
 console.log(listaComida);
 console.log(novaFrase);

 const comidaUsuario = prompt('qual sua comida preferida?')
 console.log(comidaUsuario);
 listaComida[2] = comidaUsuario
 console.log(listaComida);

 //exercício 3

 const listaDeTarefas = []
 const tarefa1= prompt("digite 1 tarefa que voce faz no dia?")
 console.log(tarefa1);
 const tarefa2= prompt("digite 1 tarefa que voce faz no dia?")
 console.log(tarefa2);
 const tarefa3= prompt("digite 1 tarefa que voce faz no dia?")
 console.log(tarefa3);
 const tarefasFeitas = listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
 console.log(listaDeTarefas);
const tarefasRealizadas = prompt("digite o indice de tarefa voce realizou no dia, 0, 1, ou  2")
const removerIndice = listaDeTarefas.splice(tarefasRealizadas)
console.log(listaDeTarefas);
 