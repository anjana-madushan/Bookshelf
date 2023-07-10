import React from 'react'; 
import {Link, useNavigate} from 'react-router-dom'

const Books = ({ books, handleDelete }) => {

  const navigate = useNavigate();

  return (
    <div>
      {books.length > 0 ? (
        
            books.map((book) => (
              <div key={book.id}>
                <img src={book.coverPic} alt='' />
                <h1>{book.title}</h1>
                <h1>{book.description}</h1>
                <button onClick={()=>navigate(`/${book.id}`)}>Update</button>
                <button onClick={()=>handleDelete(book.id)}>Delete</button>
              </div>
            ))
      ) : (<p>There are not any books here!</p>)}

      <button><Link to='/add_Book'>Add New Book</Link></button>
    </div>
  );
};

export default Books;
