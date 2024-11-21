import { Request, Response } from "express";
import { productServices } from "./product.service";
import productValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
    try{
        const data = req.body;
        const validateProduct = await productValidationSchema.parse(data)
        const result = await productServices.createProductIntoDb(validateProduct);
        res.status(200).json({
            success: true,
            message:'Product created successfully',
            data: result 
           }) }
           catch(err){
               res.status(400).json({
                   success: false,
                   message: "Product creation failed",
                   err
               })
           }
}


const getProduct = async (req:Request,res:Response)=>{
    try{
        const data2 = await productServices.getProductFromDb()
        res.status(200).json({
            success: true,
            message:'Bicycles retrieved successfully',
            data: data2  
        })
    }
    catch(err){
        res.status(400).json({
            success: false,
            message: "Product creation failed",
            err
        })
    }
}
export const productController = {
    createProduct,
    getProduct
}
