import { Router } from 'express'
import { ProductController } from '../controller/ProductController';

export const productRouter = Router()

//***** POST ENDPOINTS *****/
productRouter.post("/populate", ProductController.populate);

//****** GET ENDPOINTS *****/
productRouter.get("/", pro);
productRouter.get("/search", ProductController.getProductsByName);
productRouter.get("/searchTag", ProductController.getProductByTag);
productRouter.get("/search/:id", ProductController.getProductById)