//1. Create a new React app.
import React from "react";
import ReactDOM from "react-dom/client"; 

import App from "./components/App"; 
import "./../public/styles.css";


const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot

// root.render(
//     <React.StrictMode> 
//       <h1>Hello World</h1>
//     </React.StrictMode>
//   );


root.render(
    <React.StrictMode> {/* Optional, but recommended for development */}
      <App />
    </React.StrictMode>
);

