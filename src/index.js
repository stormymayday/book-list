import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const firstBook = {

  img: `./images/book-1.jpg`,
  title: `Clean Code: A Handbook of Agile Software Craftsmanship`,
  author: `Robert Martin`,

};

const secondBook = {

  img: `./images/book-2.jpeg`,
  title: `Domain-Driven Design: Tackling Complexity in the Heart of Software`,
  author: `Timo Keni`,

};

const BookList = () => {

  return (

    <section className='booklist'>

      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />

    </section>

  )

};

const Book = (props) => {

  console.log(props);

  return (

    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>

  );

};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
