import { Router } from "express";
import { orderController } from "./order.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../Users/user.contant";
const OrderRouter = Router()
OrderRouter.post('/', orderController.createOrder)
OrderRouter.get('/:revenue', orderController.getRevenue)
OrderRouter.get('/',auth(USER_ROLE.admin) ,orderController.getOrders)
export default OrderRouter