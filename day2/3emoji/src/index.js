import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./../public/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
  </>
);



// Need to work later
// import emojipedia from "./emojipedia";

// const newEmojipedia = emojipedia.map(function(emojiEntry) {
//   return emojiEntry.meaning.substring(0, 100);
// });

// console.log(newEmojipedia);