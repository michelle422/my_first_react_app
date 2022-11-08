import { buildQueries } from "@testing-library/react";
import React from "react";
// import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81qROMFiwmL._AC_UL210_SR195,210_.jpg",
    title: "Little Blue Truck's Halloween",
    author: "Alice Schertle",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/91eopoUCjLL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/71ugEFYhcaL._AC_UL210_SR195,210_.jpg",
    title:
      "Faith Still Moves Mountains: Miraculous Stories of the Healing Power of Prayer",
    author: "Harris Faulkner",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/41KY-NORo9L._SX355_BO1,204,203,200_.jpg",
    title: "The 48 Laws of Power",
    author: "Robert Greene",
  },
  {
    id: 5,
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL210_SR195,210_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/51PRQuO-xjL._SY498_BO1,204,203,200_.jpg",
    title: "If Animals Kissed Good Night Board book",
    author: "Ann Whitford Paul",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;

  // attribute, eventHandler
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World!!!");
  };
  const complexExample = (author) => {
    console.log(author);
  }
  return (
    <article className="book" onMouseOver={() => {
      console.log(title);
    }}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

root.render(<BookList />);
