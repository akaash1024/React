import React from "react";
import ReactDOM from "react-dom";
import OrderList from "./OrderList";

ReactDOM.render(<h1>Hello world</h1>, document.getElementById("root"));


function Heading() {
  return <h1>My Favourite from line8 fun</h1>;
}

ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>

    <Heading></Heading>

    <ul>
      <li>Watermelon</li>
      <li>Noodles</li>
    </ul>

    <ol>
      <li>Watermelon</li>
      <li>Noodles</li>
    </ol>

    <OrderList></OrderList>
  </div>,
  document.getElementById("root")
);
