// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import OrderList from "./OrderList";
import './index.css';




function Heading() {
  return <h1>My Favourite from line9 fun</h1>;
}


// const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <>
    <div>
      <h1>My Favourite Foods</h1>
      <Heading />
      <ul>
        <li>Watermelon</li>
        <li>Noodles</li>
      </ul>
      <ol>
        <li>Watermelon</li>
        <li>Noodles</li>
      </ol>
      <OrderList />
    </div>


    </>
  </React.StrictMode>
);
