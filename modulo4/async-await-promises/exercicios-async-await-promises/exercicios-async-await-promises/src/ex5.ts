import { baseURL } from "./baseURL";
import axios from "axios";
import {user} from "./ex3"
// exercicio 5 Agora, implemente uma função que receba um array de usuários e uma mensagem e envie essa mensagem 
//como notificação para todos os usuários. A princípio, não utilize o `Promise.all`

const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
    try {
          for (const user of users) {
          await axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message
          });
        }
  
        console.log("All notifications sent");
      } catch {
          console.log("Error");
      }
  };
console.log(sendNotifications);
