import { Router } from "express";
import { orderController } from "./order.controller";
const UserRouter = Router()
UserRouter.post('/', orderController.createOrder)
UserRouter.get('/:revenue', orderController.getRevenue)
export default UserRouter