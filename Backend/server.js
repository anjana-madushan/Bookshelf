import express from 'express'
import cors from 'cors'
import router from './routes/routes.js'

const app = express()

app.use(cors({origin:'http://localhost:3000'}))
app.use(express.json())

app.use('/books', router)

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})