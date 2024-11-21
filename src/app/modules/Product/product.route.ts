import { Router } from "express";
import { productController } from "./product.controller";
const UseRouter = Router()


UseRouter.post('/create-product', productController.createProduct)
UseRouter.get('/', productController.getProduct)
UseRouter.get('/:productId', productController.getProductById)
UseRouter.put('/:productId', productController.updateProducts)
UseRouter.delete('/:productId', productController.deleteProducts)
 export default UseRouter