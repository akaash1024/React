import React from "react";
import ReactDOM from "react-dom";
import OrderList from "./OrderList";

function Akash(){
    return <p>Akash from here</p>
}

function App() {
  return (
    <div>

        <h1>Hello world</h1>

        <OrderList />

        <Akash />
    </div>
  );
}

export default App;
