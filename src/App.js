import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";

function App() {
  const [gender, setGender] = useState("male");
  return (
    <div className="App">
      <input
        type="checkbox"
        checked={gender === "male"}
        onChange={() => setGender("male")}
      />
      <input
        type="checkbox"
        checked={gender === "female"}
        onChange={() => setGender("female")}
      />
      <Home />
    </div>
  );
}

export default App;
