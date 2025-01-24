import { Request, Response } from 'express'
import express, { Application} from 'express'
import router from './router'
import globalErrorHandler from './app/middlewares/globalErrorhandler'


const app: Application = express()
app.use(express.json())
app.use('/api/', router)
app.use(globalErrorHandler)
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Bi-Cycle Store')
  })
export default app

