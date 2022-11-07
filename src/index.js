import React from "react";
import ReactDom from "react-dom";

// JSX rules
// return single statement
// div / section / article or React.Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return <article>
    <Image />
    <Title />
    <Author />
  </article>
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81qROMFiwmL._AC_UL210_SR195,210_.jpg"
    alt=""
  />
);

const Title = () => <h1>Little Blue Truck's Halloween</h1>
const Author = () => <h4>Alice Schertle</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
