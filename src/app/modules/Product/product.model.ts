import { model, Schema } from "mongoose";
import { BiCycle } from "./product.interface";
    const productSchema = new Schema<BiCycle>(
        {
          name: {
            type: String,
            required: [true, "Product name is required"],
            min: [3, "Product name must be at least 3 characters long"],
            max: [50, "Product name cannot exceed 50 characters"],
            trim: true,
          },
          brand: {
            type: String,
            required: [true, "Brand is required"],
            min: [2, "Brand must be at least 2 characters long"],
            max: [30, "Brand cannot exceed 30 characters"],
            trim: true,
          },
          price: {
            type: Number,
            required: [true, "Price is required"],
            min: [0, "Price cannot be negative"],
          },
          type: {
            type: String,
            required: [true, "Type is required"],
            enum: {
              values: ["Mountain", "Road", "Hybrid", "Bmx", "Electric"],
              message: "{VALUE} is not a valid type. Allowed types are Mountain, Road, Hybrid, Bmx, Electric.",
            },
          },
          description: {
            type: String,
            required: [true, "Description is required"],
            min: [10, "Description must be at least 10 characters long"],
            max: [500, "Description cannot exceed 500 characters"],
            trim: true,
          },
          quantity: {
            type: Number,
            required: [true, "Quantity is required"],
            min: [0, "Quantity cannot be negative"],
            validate: {
              validator: Number.isInteger,
              message: "Quantity must be an integer",
            },
          },
          inStock: {
            type: Boolean,
            required: [true, "In-stock status is required"],
          },
        },
        { timestamps: true }
)


const ProductModel = model<BiCycle>('Product', productSchema);
export default ProductModel;