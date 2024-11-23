import { Request, Response } from "express";
import { productServices } from "./product.service";


const createProduct = async (req: Request, res: Response, ): Promise<void> => {
    try {
        const data = req.body;
        const result = await productServices.createProductIntoDb(data);
        res.status(200).json({
            message: "Bicycle created successfully",
            success: true,

            data: result
        })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch (err:any){{
           res.status(400).json({
            message: "Validation failed",
            success: false,
            error: err,
            stack: err.stack
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
