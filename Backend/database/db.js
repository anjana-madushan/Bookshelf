import mysql from 'mysql2'

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "anjana_admin123",
  database: 'book_app'
})

export default db;