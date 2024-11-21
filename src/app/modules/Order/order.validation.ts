import Zod, { z } from 'zod'
const orderValidationSchema = Zod.object({
    email: z.string().email("Invalid email format").nonempty("Email is required"),
    product: z.string().nonempty("Product is required"),
    quantity: z.number().int("Quantity must be an integer").positive("Quantity must be greater than 0"),
    totalPrice: z.number().nonnegative("Total price must be 0 or more"),
  });
  export default orderValidationSchema
  