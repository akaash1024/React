import React from "react";
import ReactDOM from "react-dom/client"; // Update import to react-dom/client
import App from "./App";

// Create a root element
const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot

// Render the App component
root.render(
  <React.StrictMode> {/* Optional, but recommended for development */}
    <App />
  </React.StrictMode>
);
