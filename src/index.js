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

      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
        <button>click me</button>
      </Book>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />

    </section>

  )

};

const Book = (props) => {

  console.log(props);

  const { img, title, author, children } = props;

  return (

    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>

  );

};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
