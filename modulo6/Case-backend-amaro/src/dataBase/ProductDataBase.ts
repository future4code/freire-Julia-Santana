import { IProductsDB, Products } from "../models/Products";
import { BaseDatabase } from "./BaseDataBase";

export class ProductDataBase extends BaseDatabase{
    public static TABLE_LOJA = "Amb_Loja"
    public toProductDB = (products: Products): IProductsDB => {
        return {
            name: products.getName(),
            tags: products.getTags()
        }        
    }

    // metodo para buscar produtos

    public getPizzas = async (): Promise<IProductsDB[]> => {
        const result: IProductsDB[] = await BaseDatabase
            .connection(ProductDataBase.TABLE_LOJA)
            .select()

        return result
    }


}