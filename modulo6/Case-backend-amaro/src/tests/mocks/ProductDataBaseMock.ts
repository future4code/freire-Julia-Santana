import { ProductDataBase } from "../../dataBase/ProductDataBase"
import { IProductsDB, Products } from "../../models/Products"

export class ProductDatabaseMock extends ProductDataBase {
    public static TABLE_USERS = "Labook_Users"

    public toProductDBModel = (product: Products) => {
        const productDB: IProductsDB = {
            name: product.getName(),
            tags:product.getTags()
        }

        return productDB
    }
}