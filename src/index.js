import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [

  {
    id: 1,
    img: `./images/book-1.jpg`,
    title: `Clean Code: A Handbook of Agile Software Craftsmanship`,
    author: `Robert Martin`,

  },
  {
    id: 2,
    img: `./images/book-2.jpeg`,
    title: `Domain-Driven Design: Tackling Complexity in the Heart of Software`,
    author: `Timo Keni`,

  },

];

const BookList = () => {

  return (

    <section className='booklist'>

      {books.map((book) => {

        const { id, img, title, author } = book;

        return (
          <Book key={id} img={img} title={title} author={author} />
        );

      })}

    </section>

  )

};

const Book = (props) => {

  console.log(props);

  const { img, title, author } = props;

  return (

    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>

  );

};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
