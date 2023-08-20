import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import books from './books.js';
import Book from './Book.js';

const BookList = () => {

  return (

    <>

      <section className='booklist'>

        {books.map((book) => {

          return (
            <Book key={book.id} {...book} />
          );

        })}

      </section>

    </>

  );

};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
