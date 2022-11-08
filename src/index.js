import { buildQueries } from "@testing-library/react";
import React from "react";
// import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import { books } from './books';
import SpecificBook from './Book';
import { greeting } from './testing/helloworld';

const container = document.getElementById("root");
const root = createRoot(container);

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

root.render(<BookList />);
