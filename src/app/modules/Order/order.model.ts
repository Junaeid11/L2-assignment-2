
import { Order } from "./order.interface";
import { model, Schema } from "mongoose";


const orderSchema = new Schema<Order>({
    email: {type: String , required: true},
    product: {type: String , required: true} ,
    quantity: { type: Number, required: true },
    totalPrice: {type: Number, required: true}

})



const Order = model<Order>('Order', orderSchema);
export default Order
