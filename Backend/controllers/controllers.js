import db from "../database/db.js";

export const getBooks = (req, res) => {
  const q = 'SELECT * FROM book'
  db.query(q, (err, data) => {
    if (err) {
      console.log(err)
      return res.status(500).json({ message: "Internal Server Error" })
    }
    return res.status(200).json(data)
  })

}


export const addBooks = (req, res) => {

  //? : a single placeholder for a set of values
  const q = 'INSERT INTO book (`title`, `description`, `coverPic`) VALUES (?)'

  const { title, description, coverPic } = req.body;

  const values = [title, description, coverPic]

  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err)
      return res.status(500).json({ message: "Internal Server Error" })
    }
    return res.status(200).json({ message: "Book is added successfully" })
  })

}

export const deleteBook = (req, res) =>{
  const bookId = req.params.id;

  //sql query for delete a book
  const q = 'DELETE FROM book WHERE id = ?'

  db.query(q, [bookId], (err, data)=>{
    if(err) return res.json(err);

    return res.status(200).json({ message:'Book is deleted successfully'})
  })
}


export const updateBook = (req, res) =>{
  const bookId = req.params.id;

  //sql query for upadate a book
  const q = "UPDATE book SET `title` = ?, `description` = ?, `coverPic` = ? WHERE id = ?";

  const { title, description, coverPic } = req.body;

  const values = [title, description, coverPic]

  db.query(q, [...values, bookId], (err, data)=>{
    if(err) return res.json(err);

    return res.status(200).json({ message:'Book is updated successfully'})
  })
}