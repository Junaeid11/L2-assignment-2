import { Router } from "express";
import { orderController } from "./order.controller";
const OrderRouter = Router()
OrderRouter.post('/', orderController.createOrder)
OrderRouter.get('/:revenue', orderController.getRevenue)
OrderRouter.get('/', orderController.getOrders)
export default OrderRouter