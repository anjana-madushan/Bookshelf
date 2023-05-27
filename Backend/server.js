import express from 'express'
import db from './db.js';

const app = express()

app.get('/books', (req, res) => {

  const q = 'SELECT * FROM book'

  db.query(q, (err, data) => {
    if (err) return res.json(err)

    return res.json(data)
  })
})

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})