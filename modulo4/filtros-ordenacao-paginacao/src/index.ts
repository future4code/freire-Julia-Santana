import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import { AddressInfo } from "net";
import { selectUsersByName } from "./exercicio1";
import { getUsersByName } from "./endpoints/getUsersByName";
import { getUsersByType } from "./endpoints/getUsersByType";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/users", getUsersByName)
app.get("/type", getUsersByType)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});