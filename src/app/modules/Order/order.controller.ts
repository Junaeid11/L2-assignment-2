import { Request, Response } from "express";
import { orderServices } from "./order.service";
import orderValidationSchema from "./order.validation";



const createOrder =async (req:Request, res:Response,)=>{
    try{
    const data = req.body;
    const validateOrder = orderValidationSchema.parse(data)

    const result = await orderServices.createOrderIntoDb(validateOrder)
    res.status(200).json({
        message:'Order created successfully',
        success: true,
        data: result 
       }) }
       catch(err){
           res.status(400).json({
               message: "Order creation failed",
               success: false,
               error :err
           })
       }


}
const getRevenue =async (req:Request, res:Response)=>{
    try{
        const data = await orderServices.getRevenueFromDb();
        res.status(200).json({
            message:'Revenue calculated successfully',
            success: true,
            data: data  
        })
    }
    catch(err){
        res.status(400).json({
            message: "Revenue calculated failed",
            success: false,
            err
        })
    }
}


export const orderController ={
    createOrder,
    getRevenue
}