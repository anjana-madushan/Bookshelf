import React from 'react'; 

const Books = ({ books }) => {
  return (
    <div>
      {books.length > 0 ? (
        
            books.map((book) => (
              <div key={book.id}>
                <h1>{book.title}</h1>
                <h1>{book.author}</h1>
                <img src={book.coverPic} alt='' />
              </div>
            ))
      ) : (<p>There are not any books here!</p>)}
    </div>
  );
};

export default Books;
