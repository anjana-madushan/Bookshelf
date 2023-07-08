import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Books from '../components/books'

const Home = () => {

  const [books, setBooks] = useState([]);

  useEffect(()=>{
    const fetchBooks = async ()=>{
      try{
        const res = await axios.get('http://localhost:5000/books')
        
        setBooks(res)
        console.log(books)
      }catch(err){
        console.log(err)
      }
    }

    fetchBooks();
  }, [])


  return (
    <div><Books books={books}/></div>
  )
}

export default Home