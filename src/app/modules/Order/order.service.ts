

import { Order } from "./order.interface";
import OrderModel from "./order.model";


const createOrderIntoDb = async (data: Order)=>{
    const result =await OrderModel.create(data)
    return result
}
const getRevenueFromDb = async () =>{

  
    const revenue = await OrderModel.aggregate([
      {
        $project: {
          total: { $multiply: ["$quantity", "$totalPrice"] },
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$total" },
        },
      },
      {
        $project:{ _id:0}
      }
    ]);
  return revenue[0];
  };
  
export const orderServices ={ createOrderIntoDb, getRevenueFromDb}