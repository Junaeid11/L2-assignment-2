/* eslint-disable @typescript-eslint/no-explicit-any */
import Zod, { z } from 'zod';

const productValidationSchema = Zod.object({
        name: z.string().nonempty("Name is required"),
        brand: z.string().nonempty("Brand is required"),
        price: z.number().min(0, "Price must be a positive number"),
        type: z.enum(["Mountain", "Road", "Hybrid", "Bmx", "Electric"]),
        description: z.string().nonempty("Description is required"),
        quantity: z.number().int("Quantity must be an integer").nonnegative("Quantity cannot be negative"),
        inStock: z.boolean(),
})
export const formatZodError  = (error: z.ZodError, stack?:string) => {
        const errors = Object.fromEntries(
          error.issues.map((issue) => [
            issue.path[0],{
              message: issue.message,
              name: "ValidatorError",
              properties: {
                message: issue.message,
                type: issue.code === "too_small" ? "min" : issue.code,
              },
              kind: issue.code === "too_small" ? "min" : issue.code,
              path: issue.path[0]
             
            },
          ])
        );
      
        return {
          name: "ValidationError",
          errors,
          stack: stack
        };
      };
export default productValidationSchema;