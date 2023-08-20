import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import books from './books.js';

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

const Book = (props) => {

  // console.log(props);

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
