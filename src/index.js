import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

function Greeting() {
  return (
    <div>
      <h1>This is Michelle and this is my first component</h1>
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement(
//       "h1",
//       {},
//       "This is Michelle and this is my first component"
//     )
//   );
// }

ReactDom.render(<Greeting/>,document.getElementById('root'));