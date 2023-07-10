import React, {useState} from 'react'
import Form from '../components/form'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  
  const {id}=useParams();

  const [book, setBook] = useState({
    title:'',
    description:'',
    coverPic:''
  })

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      await axios.put(`http://localhost:5000/books/update/${id}`, book)

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
    <div><Form book={book} handleChange={handleChange} handleSubmit={handleSubmit} /></div>
  )
}

export default Update