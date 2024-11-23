import { Request, Response } from "express";
import { orderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
    try {
   const data = req.body;
   const result = await orderServices.createOrderIntoDb(data);
  
      res.status(200).json({
        message: 'Order created successfully',
        success: true,
        data: result,
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      res.status(400).json({
        message: 'Order creation failed',
        success: false,
        error: err.message,
      });
    }
  };
  
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

const getOrders = async (req:Request, res:Response)=>{
    try{
        const data = await orderServices.getAllOrdersFromDb();
        res.status(200).json({
            message:'Orders retrieved successfully',
            success: true,
            data: data  
        })
    }
    catch(err){
        res.status(400).json({
            message: "Orders retrieve failed",
            success: false,
            err
        })
    }
}
export const orderController ={
    createOrder,
    getRevenue,
    getOrders
}