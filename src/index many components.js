import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81qROMFiwmL._AC_UL210_SR195,210_.jpg"
    alt=""
  />
);

const Title = () => {
  const title = "Little Blue Truck's Halloween";
  return <h1>{title}</h1>;
};

const Author = () => <h4>Alice Schertle</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
