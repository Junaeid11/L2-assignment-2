import mongoose from "mongoose";
import { Document } from "mongoose";

export interface Order extends Document {
    email: string,
    product: mongoose.Schema.Types.ObjectId,
    quantity: number,
    totalPrice:number

}
