import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Books from '../components/books'

const Home = () => {

  const [books, setBooks] = useState([]);

  useEffect(()=>{
    const fetchBooks = async ()=>{
      try{
        const res = await axios.get('http://localhost:5000/books')
        
        setBooks(res.data)
        console.log(res.data)
      }catch(err){
        console.log(err)
      }
    }

    fetchBooks();
  }, [])

  const handleDelete = async(id) => {
    try{
      await axios.delete(`http://localhost:5000/books/delete/${id}`)
      setBooks((prevBooks)=>prevBooks.filter((book)=>book.id !== id))
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div><Books books={books} handleDelete={handleDelete}/></div>
  )
}

export default Home