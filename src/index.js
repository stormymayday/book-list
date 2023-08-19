import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {

  return (

    <section className='booklist'>

      <Book />
      <Book />
      <Book />
      <Book />

    </section>

  )

};

const Book = () => {

  return (

    <article className='book'>
      <img src="./images/book-1.jpg" alt="clean code book" />
      <h2>Clean Code: A Handbook of Agile Software Craftsmanship</h2>
      <h4>Robert Martin</h4>
    </article>

  );

};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
