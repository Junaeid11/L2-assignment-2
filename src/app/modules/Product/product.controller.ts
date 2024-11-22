import { Request, Response } from "express";
import { productServices } from "./product.service";
import productValidationSchema, { formatZodError } from "./product.validation";
import { z } from "zod";


const createProduct = async (req: Request, res: Response, ): Promise<void> => {
    try {
        const data = req.body;
        const validateProduct =  productValidationSchema.parse(data)
        const result = await productServices.createProductIntoDb(validateProduct);
        res.status(200).json({
            message: "Bicycle created successfully",
            success: true,

            data: result
        })
    }catch (err){
        if (err instanceof z.ZodError) {
          const formattedError = formatZodError(err, err.stack);
           res.status(400).json({
            message: "Validation failed",
            success: false,
            error: formattedError,
          });
        }
    }
}


const getProducts = async (req: Request, res: Response) => {
    try {
        const data = await productServices.getProductFromDb()
        res.status(200).json({
            message: 'Bicycles retrieved successfully',
            success: true,
            data: data
        })
    }
    catch (err) {
        res.status(400).json({
            message: "Bicycles retrieve failed",
            success: false,
            err
        })
    }
}
const getProductById = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId
        const data = await productServices.getProductByIdFromDb(productId)
        res.status(200).json({
            message: 'Bicycles retrieved successfully',
            success: true,
            data: data
        })
    }
    catch (err) {
        res.status(400).json({
            message: "Bicycles retrieve failed",
            success: false,
            err
        })
    }
}
const updateProducts = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId
        const productData = req.body
        const data = await productServices.updateProductFromDb(productId, productData)
        res.status(200).json({
            message: 'Bicycles updated successfully',
            success: true,
            data: data
        })
    }
    catch (err) {
        res.status(400).json({
           message: "Product update failed",
           success: false,
            err
        })
    }
}
const deleteProducts = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId
        await productServices.deleteProductFromDb(productId)
        res.status(200).json({
            message: 'Bicycles deleted successfully',
            success: true,
            data: {}
        })
    }
    catch (err) {
        res.status(400).json({
            message: "Bicycles delete failed",
            success: false,
            err
        })
    }
}




export const productController = {
    createProduct,
    getProducts,
    getProductById,
    updateProducts,
    deleteProducts
}
