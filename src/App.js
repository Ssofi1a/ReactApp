import './App.css';
import React, {useState, UseState} from "react"

function App() {
  const [key, setKey] = useState("");
  const handleKeyDown = (event) => {
    setKey(event.key);
  };

  return (
    <div
      className="App">
      <h1>Sofi</h1>
      {key && <h2>Pressed: {key} </h2>}
      <input type="text" onKeyDown={handleKeyDown}
      placeholder="Press here..."/>
    </div>
  );
}
export default App;
