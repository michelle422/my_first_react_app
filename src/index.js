import React from "react";
// import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

const container = document.getElementById('root');
const root = createRoot(container);

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81qROMFiwmL._AC_UL210_SR195,210_.jpg",
  title: "Little Blue Truck's Halloween",
  author: "Alice Schertle",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/91eopoUCjLL._AC_UY327_FMwebp_QL65_.jpg",
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

root.render(<BookList />);
