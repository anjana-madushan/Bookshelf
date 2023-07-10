import React from 'react'

const Form = ({book, handleChange, handleSubmit}) => {


  return (
    <div>
      <h1>Add a New Book</h1>
      <form>
      <input type='text' value={book.title}  placeholder='Type the Title' name='title' onChange={handleChange} required/>
      <br/>
      <input type='text' value={book.description} placeholder='Type the Author name' name='description' onChange={handleChange} required/>
      <br/>
      <input type='text' value={book.coverPic} placeholder='Enter the link of pic' name='coverPic' onChange={handleChange} required/>
      <br/>
      <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Form