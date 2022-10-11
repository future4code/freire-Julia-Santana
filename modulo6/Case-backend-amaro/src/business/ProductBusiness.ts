import {  ProductDataBase } from "../dataBase/ProductDataBase";
import { IdGenerator } from "../services/IdGenerator";


 export class ProductBusiness {
    constructor(
      private productDataBase: ProductDataBase,
      private idGenerator : IdGenerator,
    ){}
    
}