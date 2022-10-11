import { BaseDatabase } from "../BaseDataBase";
import { ProductDataBase } from "../ProductDataBase";
import { products, Products } from "./Data";

class Migrations extends BaseDatabase {
    execute = async ()=>{
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables with seed...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        CREATE TABLE IF NOT EXISTS ${ProductDataBase.TABLE_LOJA} (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            tags VARCHAR(255) NOT NULL
            
        );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(ProductDataBase.TABLE_LOJA)
            .insert(products)
    }
    
}
const migrations = new Migrations()
migrations.execute()
