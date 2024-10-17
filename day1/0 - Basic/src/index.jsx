import React from "react";
import ReactDOM from "react-dom/client"; // Change the import for ReactDOM

// Create a root element
const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot instead of render

// Render your app
root.render(
  <React.StrictMode>
    {" "}
    {/* Optional, but recommended for development */}
    <div>
      <h1>updated</h1>
      <h1>Hello World!</h1>
      <p>This is a paragraph.</p>
    </div>
  </React.StrictMode>
);
