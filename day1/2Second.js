// React & babel is pre-loaded for you; you dont need to import it.
// Instead of writing JSX inside root.render() directly we are returning it from a function called App().

// Make the hardcoded data dynamic using interpolation.
function App() {
  let mathsScore = 50;
  let scinceScore = 70;
  let totolScore = mathsScore+scinceScore;
  let userName = "Soraya";
  let avatarUrl = "https://reqres.in/img/faces/2-image.jpg";


  function getResult (num){
    if (num > 100) return "pass";
    return "fail"
  }
  

  let style = { color : "pink", backgroundColor: "gold"}

  return (
    <div>
      <p>Welcome, {userName}!</p>
      <img src={avatarUrl} alt="User Avatar" />
      <p style={style}>Your total score is {totolScore}</p>
      <p>Your result is: <strong>{getResult(totolScore)}</strong></p>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
