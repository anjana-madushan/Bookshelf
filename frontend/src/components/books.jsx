import React from 'react';

const Books = ({ books }) => {
  return (
    <div>
      {books.length > 0 && (
        <table>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (<p>There are not any books here!</p>)}
    </div>
  );
};

export default Books;
