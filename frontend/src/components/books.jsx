import React from 'react'; 
import {Link} from 'react-router-dom'

const Books = ({ books }) => {
  return (
    <div>
      {books.length > 0 ? (
        
            books.map((book) => (
              <div key={book.id}>
                <img src={book.coverPic} alt='' />
                <h1>{book.title}</h1>
                <h1>{book.description}</h1>
                <button>Update</button>
                <button>Delete</button>
              </div>
            ))
      ) : (<p>There are not any books here!</p>)}

      <button><Link to='/add_Book'>Add New Book</Link></button>
    </div>
  );
};

export default Books;
