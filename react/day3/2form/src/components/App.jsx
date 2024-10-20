import React from "react";
import Form from "./Form";

var userIsRegistered = true;
const currentTime = new Date(2024, 11, 1, 18).getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <h1>Hello there,</h1> : null}
      <Form isRegistered={userIsRegistered} />
      {currentTime > 12 && <h4>why are you still working??</h4>}
    </div>
  );
}

export default App;
