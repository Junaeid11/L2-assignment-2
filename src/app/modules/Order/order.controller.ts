import { Request, Response } from "express";
import { orderServices } from "./order.service";
import orderValidationSchema from "./order.validation";



const createOrder =async (req:Request, res:Response,)=>{
    try{
    const data = req.body;
    const validateOrder = await orderValidationSchema.parse(data)
    const result = await orderServices.createOrderIntoDb(validateOrder)
    res.status(200).json({
        success: true,
        message:'Order created successfully',
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

export const orderController ={
    createOrder
}