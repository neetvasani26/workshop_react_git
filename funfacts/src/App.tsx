import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [fact, setFact] = useState<string>("");

  const url = "https://uselessfacts.jsph.pl/api/v2/facts/random";

  // API Call
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);        // print full response
        setFact(data.text);       // API fact text
      })
      .catch((error) => console.log(error));
  }, [count]); // call again when button clicked

  return (
    <div className="app-container">
      <div className="header">
        <h1>Fun Facts</h1>
        <p className="subtitle">Discover something new every click!</p>
      </div>
      <div className="card">
        <h2 className="fact-text">{fact ? fact : "Loading..."}</h2>
        <button className="modern-btn" onClick={() => setCount(count + 1)}>
          <span role="img" aria-label="refresh">🔄</span> Get New Fact ({count})
        </button>
      </div>
    </div>
  );
}

export default App;