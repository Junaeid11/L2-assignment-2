import { Router } from "express";
import { productController } from "./product.controller";
const UseRouter = Router()


UseRouter.post('/create-product', productController.createProduct)
UseRouter.get('/', productController.getProduct)
 export default UseRouter