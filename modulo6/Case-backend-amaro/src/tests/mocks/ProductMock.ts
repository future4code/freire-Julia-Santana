import { describe } from "node:test"
import { ProductBusiness } from "../../business/ProductBusiness"
import { IdGeneratorMock } from "./IdGeneratorMock"
import { ProductDatabaseMock } from "./ProductDataBaseMock"


describe("Testando a UserBusiness", () => {
    const productBusiness = new ProductBusiness("")
        new ProductDatabaseMock(),
        new IdGeneratorMock()
       
    
})