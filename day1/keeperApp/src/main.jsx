//1. Create a new React app.
import React from "react";
import ReactDOM from "react-dom/client"; 


const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot

root.render(
    <React.StrictMode> {/* Optional, but recommended for development */}
      <h1>Hello World</h1>
    </React.StrictMode>
  );

//2. Create a App.jsx component.
import App from "./components/App"; 
root.render(
    <React.StrictMode> {/* Optional, but recommended for development */}
      <App />
    </React.StrictMode>
);

//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//App.jsx
//Header.jsx

//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//working on footer

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//

//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.
