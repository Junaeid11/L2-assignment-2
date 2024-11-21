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
const getProductByIdFromDb = async (_id: string)=>{
    const result = await Product.findById({_id})
    return result
}
const updateProductFromDb = async (id: string, data: BiCycle)=>{
    const result = await Product.findByIdAndUpdate(id, data,{
        new: true
    })
    return result

}
const deleteProductFromDb = async (id: string)=>{
    const result = await Product.findByIdAndDelete(id)
    return result

}

export const productServices = {
    createProductIntoDb,
    getProductFromDb,
    getProductByIdFromDb,
    updateProductFromDb,
    deleteProductFromDb
}
