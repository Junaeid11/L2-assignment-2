import { model, Schema } from "mongoose";
import { BiCycle } from "./product.interface";

const productSchema = new Schema<BiCycle>({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    type: {
        type: String,
        required: true,
        enum: ['Mountain', 'Road', 'Hybrid', 'Bmx', 'Electric'],
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
},{timestamps: true}
);


const ProductModel = model<BiCycle>('Product', productSchema);
export default ProductModel;