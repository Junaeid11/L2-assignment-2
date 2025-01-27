import { Router } from "express";
import { orderController } from "./order.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../Users/user.contant";
const OrderRouter = Router()
OrderRouter.post('/',auth(USER_ROLE.user), orderController.createOrder)

OrderRouter.get('/',auth(USER_ROLE.admin) ,orderController.getOrders)
OrderRouter.get('/verify', auth(USER_ROLE.user),orderController.verifyPayment)


export default OrderRouter  