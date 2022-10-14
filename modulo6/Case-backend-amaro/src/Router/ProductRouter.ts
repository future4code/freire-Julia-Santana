import { Router } from 'express'
import { ProductBusiness } from '../business/ProductBusiness';
import { ProductController } from '../controller/ProductController';
import { ProductDatabase } from '../dataBase/ProductDataBase';
import { IdGenerator } from '../services/IdGenerator';

export const productRouter = Router()


const productController = new ProductController(
       new ProductBusiness (
        new ProductDatabase(),
        new IdGenerator(),
        
        
    )
)

//post endpoint
productRouter.post("/populate", productController.populate);

//get endpoint
productRouter.get("/", productController.getAllProducts);
productRouter.get("/search", productController.getProductsByName);
productRouter.get("/searchTag", productController.getProductByTag);
productRouter.get("/search/:id", productController.getProductById)