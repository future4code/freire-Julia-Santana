import { AddressInfo } from "net";
import app from "./app";
import { UserAccount } from "./src/data/exercicio1";
import { Transaction } from "./src/data/exercicio2";


const account:UserAccount = new UserAccount
            ("123456",
            "julia",
              20)
 console.table(account)

 // questao 2
 const transacao:Transaction = new Transaction("05/09/2022", 100, "exercicio2" )
 account.setTransaction(transacao)
 
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});