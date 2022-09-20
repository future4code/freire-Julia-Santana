import axios from "axios";
import { baseURL } from "./baseURL";
import { user } from "./ex3";

// exercicio5 Vamos reescrever a função anterior utilizando o `Promise.all`.
// Antes disso, responda as perguntas abaixo:

// questao a. O que o `Promise.all` faz?
//  é um objeto usado para processamento assíncrono

// questao  b. Quais as vantagens de se utilizar o Promise.all no caso de se enviar as notificações para todos os usuários?
//Uma das grandes vantagens de usar Promise. all() é receber uma exceção mais cedo se alguma promise falhar, além de esperar 
//no máximo o tempo da promise mais demorada dentro de doubles. O Node. js possui um thread pool interno para que operações 
//assíncronas bloqueantes possam correr em paralelo

//questao c: Reimplemente a função utilizando `Promise.all`

const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };
  console.log(sendNotifications);
  