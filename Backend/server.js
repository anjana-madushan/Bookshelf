import express, { Router } from 'express'
import router from './routes/routes.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/books', router)

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})