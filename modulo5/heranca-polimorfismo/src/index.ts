import { User } from "./user";
import { Customer } from "./customer";
import { Client, client } from "./exercicio1-polimorfismo";
import { Place, NewPlace} from "./exercicio2-polimorfismo";

  const usuario:User = new User
("1","julia", "julia@gmail.com", "123456")
console.table(usuario)

 

  const cust:Customer = new Customer
  ("1","julia", "julia@gmail.com", "123456", "123-00",)
 console.table(cust)

  // questao a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?*
  // resposta 1vezes

  // questao  b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*
  // resposta 1 vezes

console.log(Customer);

console.log( cust.introduceYourself());

console.log(client);

const newPlace = new NewPlace("123456")
console.log(newPlace);
console.log(newPlace.getCep());

