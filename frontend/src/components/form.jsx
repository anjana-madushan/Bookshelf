import React from 'react'

const Form = ({book, handleChange, handleSubmit}) => {


  return (
    <div>
      <h1>Add a New Book</h1>
      <form action="/store-image" method="POST" enctype="multipart/form-data">
      <input type='text' value={book.title}  placeholder='Type the Title' name='title' onChange={handleChange} required/>
      <br/>
      <input type='text' value={book.description} placeholder='Type the Author name' name='description' onChange={handleChange} required/>
      <br/>
      {/* <input type='text' value={book.coverPic} placeholder='Enter the link of pic' name='coverPic' onChange={handleChange} required/> */}
      <input type="file"  name="image" multiple></input>
      <br/>
      <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Form