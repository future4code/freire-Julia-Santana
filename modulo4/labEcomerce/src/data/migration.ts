import { connection } from "./connection"
const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection.raw(`
   CREATE TABLE IF NOT EXISTS labecommerce_users(
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL

   )
`)
.then(() => { console.log("Tabela criada") })
.catch(printError)

const closeConnection = () => { connection.destroy() }
createTables()
.then(() => console.log("Banco pronto!"))
.finally(closeConnection)

const createTablesProduct = () => connection.raw(`
   CREATE TABLE IF NOT EXISTS labecommerce_product(
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL

   )
`)
.then(() => { console.log("Tabela criada") })
.catch(printError)

const closeConnectionProduct = () => { connection.destroy() }

createTablesProduct()
.then(() => console.log("Banco pronto!"))
.finally(closeConnectionProduct)

const createTablesPurchases = ()=> connection.raw(`
CREATE TABLE IF NOT EXISTS labecommerce_purchases(
   id VARCHAR(255) PRIMARY KEY,
   user_id VARCHAR(255) FOREING KEY,
   product_id VARCHAR(255)FOREING KEY,
   quantity VARCHAR(255) NOT NULL,
   total_price VARCHAR(255) NOT NULL

 )

`)

.then(() => { console.log("Tabela criada") })
.catch(printError)

const closeConnectionPurchases = () => { connection.destroy() }

createTablesPurchases()
.then(() => console.log("Banco pronto!"))
.finally(closeConnectionPurchases)

