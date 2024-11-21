import Zod, { z } from 'zod';

const productValidationSchema = Zod.object({
        name: z.string().nonempty("Name is required"),
        brand: z.string().nonempty("Brand is required"),
        price: z.number().positive("Price must be a positive number"),
        type: z.enum(["Mountain", "Road", "Hybrid", "Bmx", "Electric"]),
        description: z.string().nonempty("Description is required"),
        quantity: z.number().int("Quantity must be an integer").nonnegative("Quantity cannot be negative"),
        inStock: z.boolean(),
})
export default productValidationSchema;