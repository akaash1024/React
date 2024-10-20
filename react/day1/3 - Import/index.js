import React from "react";
import ReactDOM from "react-dom/client"; // Update import to react-dom/client
import pi, { doublePi, triplePi } from "./math.js";

// Create a root element
const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot

// Render the list of calculations
root.render(
  <React.StrictMode> {/* Optional, but recommended for development */}
    <ul>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
  </React.StrictMode>
);
