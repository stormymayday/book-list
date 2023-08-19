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

      <Image />
      <Title />
      <Author />

    </article>

  );

};

const Image = () => {

  return (

    <img src="../public/book-1.jpg" alt="clean code book" />

  );

};

const Title = () => {

  return (

    <h2>Clean Code: A Handbook of Agile Software Craftsmanship</h2>

  );

};

const Author = () => {

  return (

    <h4>Robert Martin</h4>

  );

};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
