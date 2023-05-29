import express, { Router } from 'express'
import router from './routes/routes.js'

const app = express()

app.use(express.json())

app.use('/books', router)

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})