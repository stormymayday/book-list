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

const author = `Robert Martin`;

const Book = () => {

  const title = `Clean Code: A Handbook of Agile Software Craftsmanship`;

  return (

    <article className='book'>
      <img src="./images/book-1.jpg" alt="clean code book" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>

  );

};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
