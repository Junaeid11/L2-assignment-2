import ProductModel from "../Product/product.model";
import { Order } from "./order.interface";


const createOrderIntoDb = async (data: Order)=>{
    const result =await ProductModel.create(data)
    return result
}
export const orderServices ={ createOrderIntoDb}