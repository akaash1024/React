import React from "react";
import ReactDOM from "react-dom/client"; // Update import to react-dom/client
import { add, multiply, subtract, divide } from "./calculator.jsx";
import * as cal from "./calculator.jsx";

// Create a root element
const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot

// Render the list of calculations
root.render(
  <React.StrictMode> {/* Optional, but recommended for development */}
    <ul>
      <li>{add(1, 2)}</li>
      <li>{cal.multiply(2, 3)}</li>
      <li>{subtract(7, 2)}</li>
      <li>{divide(5, 2)}</li>
    </ul>
  </React.StrictMode>
);
