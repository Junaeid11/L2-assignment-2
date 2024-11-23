import { Router } from "express";
import { orderController } from "./order.controller";
const UserRouter = Router()
UserRouter.post('/', orderController.createOrder)
UserRouter.get('/:revenue', orderController.getRevenue)
UserRouter.get('/', orderController.getOrders)
export default UserRouter