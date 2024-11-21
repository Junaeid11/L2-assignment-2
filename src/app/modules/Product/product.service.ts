import { BiCycle } from "./product.interface";
import Product from "./product.model";


const createProductIntoDb =async (data: BiCycle): Promise<BiCycle>=>{
    const result = await Product.create(data);
    return result;

}
const getProductFromDb = async ()=>{
         const result = await Product.find()
         return result
}

export const productServices = {
    createProductIntoDb,
    getProductFromDb
}
