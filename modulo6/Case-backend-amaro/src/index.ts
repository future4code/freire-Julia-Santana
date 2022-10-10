import path from "path";
import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})


const fs = require("fs");

function readFileJson(file: string){
    try {
        let content = fs.readFileSync(file, "utf-8");
        return JSON.parse(content);
    } catch (error) {
        console.log(error);
        
    }
}

const lendoJson = readFileJson(
    path.resolve(__dirname, "products.json")
);