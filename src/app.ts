import { Request, Response } from 'express'
import express, { Application} from 'express'
import UseRouter from './app/modules/Product/product.route'

const app: Application = express()
app.use(express.json())
app.use('/api/products', UseRouter)
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the product ')
  })
export default app

