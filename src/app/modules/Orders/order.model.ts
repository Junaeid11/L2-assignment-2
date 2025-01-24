
import ProductModel from "../Bicyles/product.model";
import { Order } from "./order.interface";
import mongoose, { model, Schema } from "mongoose";


const orderSchema = new Schema<Order>({
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
            message: "Invalid email format",
        },
    },
    product:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity:
    {
        type: Number,
        required: true,
        min: [0, "Value Cannot be 0"]
    },
    totalPrice: {
        type: Number,
        required: true,
        min: [0, "Value cannot be negative"]
    }

}, { timestamps: true })


//using pre hook 
orderSchema.pre('save', async function (next) {
    const order = this as Order;
    const productDetails = await ProductModel.findById(order.product);
    if(!productDetails){
        throw new Error("Product not found")
    }
    else if(productDetails.quantity < order.quantity){
        throw new Error("Out of stock")
    }
    else{
        productDetails.quantity -= order.quantity;
        productDetails.inStock = productDetails.quantity > 0;
        await productDetails.save();
        next()
    }
})
//for removing __v
orderSchema.set('toJSON', {
    transform:(doc ,value)=>{
      delete value.__v;
      return value;
    }
  })


const OrderModel = model<Order>('Order', orderSchema);
export default OrderModel
