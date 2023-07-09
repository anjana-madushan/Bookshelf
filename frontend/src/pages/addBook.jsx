import React, { useState } from 'react'
import axios from 'axios'
import Form from '../components/form'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {

  const [book, setBook] = useState({
    title:'',
    description:'',
    coverPic:''
  })

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      await axios.post('http://localhost:5000/books/add', book)

      console.log(book)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }

  const handleChange = (e) => {
    setBook((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div><Form book={book} handleChange={handleChange} handleSubmit={handleSubmit}/></div>
  )
}

export default AddBook